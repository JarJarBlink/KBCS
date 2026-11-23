# v16.0.2 → v16.0.3 · 最優先の変更候補 (38)

[一覧の目次](README.md)

<a id="compare-2d1942bedc6dcde0f7749cc8e45ef881"></a>

### [`006d1510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d1/006d1510.md) → [`006d18c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d1/006d18c0.md) FUN_006d18c0

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`008f39fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f39fc.md) [`008f6b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6b3c.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) · 呼出先 6件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006c4ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4ec4.md) [`006d7f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7f4c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 5件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`008f49a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f4/008f49a8.md) [`008f8008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f8/008f8008.md) [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) [`00ad19bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad1/00ad19bc.md) · 呼出先 6件 [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`006c5274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c5/006c5274.md) [`006d82fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d82fc.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.54% / 新版 99.54%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d1bd8",
      "incomplete_value": false,
      "site": "006d1be0",
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
      "definition_site": "006d1828",
      "incomplete_value": false,
      "site": "006d1830",
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
      "006d1a60",
      "DATA",
      [
        "storage",
        "00477d50",
        null,
        null
      ]
    ],
    [
      "006d1ac8",
      "DATA",
      [
        "storage",
        "00477d78",
        null,
        null
      ]
    ],
    [
      "006d1ae0",
      "DATA",
      [
        "storage",
        "00477d70",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006d1bd8",
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
- 006d1830 ["INT_ADD", "register:40f0:8", ["const:6d1830:8", "const:4:8"]]
- 006d1830 ["CALL", null, ["callee:00c59230:8"]]
+ 006d1be0 ["INT_ADD", "register:40f0:8", ["const:6d1be0:8", "const:4:8"]]
+ 006d1be0 ["CALL", null, ["callee:00c59230:8"]]
- 006d1550 ["INT_ADD", "register:40f0:8", ["const:6d1550:8", "const:4:8"]]
- 006d1550 ["CALL", null, ["callee:006c5274:8"]]
+ 006d1900 ["INT_ADD", "register:40f0:8", ["const:6d1900:8", "const:4:8"]]
+ 006d1900 ["CALL", null, ["callee:006c5274:8"]]
- 006d1564 ["INT_ADD", "register:40f0:8", ["const:6d1564:8", "const:4:8"]]
- 006d1564 ["CALL", null, ["callee:00676e50:8"]]
+ 006d1914 ["INT_ADD", "register:40f0:8", ["const:6d1914:8", "const:4:8"]]
+ 006d1914 ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-a4266ee587ee52b63ccd6383ccd12120"></a>

### [`006d18a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d1/006d18a0.md) → [`006d1c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d1/006d1c50.md) FUN_006d1c50

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) [`008f66e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f66e8.md) [`009d7bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d7/009d7bd0.md) · 呼出先 11件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006c4ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4ec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`007b19d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b19d4.md) [`008f7694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7694.md) [`009d8b7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d8/009d8b7c.md) · 呼出先 11件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`006c5274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c5/006c5274.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.77% / 新版 99.77%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d1c94",
      "incomplete_value": false,
      "site": "006d1c9c",
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
      "definition_site": "006d18e4",
      "incomplete_value": false,
      "site": "006d18ec",
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
      "006d1c94",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ],
    [
      "006d1ef0",
      "DATA",
      [
        "storage",
        "003c9690",
        "fde_003c9690",
        "dword"
      ]
    ],
    [
      "006d1ef4",
      "DATA",
      [
        "storage",
        "003c9698",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "006d1c94",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ],
    [
      "006d1ef0",
      "DATA",
      [
        "storage",
        "003c9690",
        null,
        "dword"
      ]
    ],
    [
      "006d1ef4",
      "DATA",
      [
        "storage",
        "003c9698",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d18ec ["INT_ADD", "register:40f0:8", ["const:6d18ec:8", "const:4:8"]]
- 006d18ec ["CALL", null, ["callee:00c59230:8"]]
+ 006d1c9c ["INT_ADD", "register:40f0:8", ["const:6d1c9c:8", "const:4:8"]]
+ 006d1c9c ["CALL", null, ["callee:00c59230:8"]]
- 006d18d8 ["INT_ADD", "register:40f0:8", ["const:6d18d8:8", "const:4:8"]]
- 006d18d8 ["CALL", null, ["callee:008524fc:8"]]
+ 006d1c88 ["INT_ADD", "register:40f0:8", ["const:6d1c88:8", "const:4:8"]]
+ 006d1c88 ["CALL", null, ["callee:008524fc:8"]]
- 006d18e4 ["COPY", "tmp:0:8", ["const:38e:8"]]
- 006d18e4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 006d18e4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 006d18e4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 006d1c94 ["COPY", "tmp:0:8", ["const:4e6:8"]]
+ 006d1c94 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 006d1c94 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 006d1c94 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-ca4a1b5963dde6138d871703a916d171"></a>

### [`006d4dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d4/006d4dec.md) → [`006d519c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d5/006d519c.md) FUN_006d519c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008f7ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f7/008f7ecc.md) [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`00ae1328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ae1/00ae1328.md) · 呼出先 26件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md) [`00467edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467edc.md) [`00467ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ee4.md)
- 新版 呼出元 3件 [`008f8e78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f8/008f8e78.md) [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) [`00ae231c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ae2/00ae231c.md) · 呼出先 26件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00468114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468114.md) [`004681fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004681fc.md) [`00468204`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468204.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.60% / 新版 98.60%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d57a0",
      "incomplete_value": true,
      "site": "006d57b0",
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
      "definition_site": "006d53f0",
      "incomplete_value": true,
      "site": "006d5400",
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
    "ordinal": 52,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006d5518",
      "DATA",
      [
        "storage",
        "003c9698",
        null,
        "dword"
      ]
    ],
    [
      "006d551c",
      "DATA",
      [
        "storage",
        "003c9690",
        "fde_003c9690",
        "dword"
      ]
    ],
    [
      "006d5780",
      "READ",
      [
        "storage",
        "00c9b578",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "006d5518",
      "DATA",
      [
        "storage",
        "003c9698",
        null,
        "qword"
      ]
    ],
    [
      "006d551c",
      "DATA",
      [
        "storage",
        "003c9690",
        null,
        "dword"
      ]
    ],
    [
      "006d5780",
      "READ",
      [
        "storage",
        "00c9c548",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d5400 ["INT_ADD", "register:40f0:8", ["const:6d5400:8", "const:4:8"]]
- 006d5400 ["CALL", null, ["callee:004692e8:8"]]
+ 006d57b0 ["INT_ADD", "register:40f0:8", ["const:6d57b0:8", "const:4:8"]]
+ 006d57b0 ["CALL", null, ["callee:004692e8:8"]]
- 006d4e18 ["INT_ADD", "register:40f0:8", ["const:6d4e18:8", "const:4:8"]]
- 006d4e18 ["CALL", null, ["callee:00467bc0:8"]]
+ 006d51c8 ["INT_ADD", "register:40f0:8", ["const:6d51c8:8", "const:4:8"]]
+ 006d51c8 ["CALL", null, ["callee:00467bc0:8"]]
- 006d4e20 ["INT_ADD", "register:40f0:8", ["const:6d4e20:8", "const:4:8"]]
- 006d4e20 ["CALL", null, ["callee:008524fc:8"]]
+ 006d51d0 ["INT_ADD", "register:40f0:8", ["const:6d51d0:8", "const:4:8"]]
+ 006d51d0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-0672d811ba9929e6a034743cd8daa8d6"></a>

### [`006d70e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d70e0.md) → [`006d7490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7490.md) FUN_006d7490

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006cff44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cf/006cff44.md) · 呼出先 10件 [`006d73e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d73e4.md) [`006d76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76a8.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`006d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d773c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 1件 [`006d02f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d0/006d02f4.md) · 呼出先 10件 [`006d7794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7794.md) [`006d7a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7a58.md) [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`006d7aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aec.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.48% / 新版 99.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d7750",
      "incomplete_value": false,
      "site": "006d7754",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:42:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d73a0",
      "incomplete_value": false,
      "site": "006d73a4",
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
            "const:f75:8"
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
      "006d7750",
      "PARAM",
      [
        "storage",
        "002a9f75",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006d7750",
      "PARAM",
      [
        "storage",
        "002aa042",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d73a4 ["INT_ADD", "register:40f0:8", ["const:6d73a4:8", "const:4:8"]]
- 006d73a4 ["CALL", null, ["callee:006d7a58:8"]]
+ 006d7754 ["INT_ADD", "register:40f0:8", ["const:6d7754:8", "const:4:8"]]
+ 006d7754 ["CALL", null, ["callee:006d7a58:8"]]
- 006d7160 ["INT_ADD", "register:40f0:8", ["const:6d7160:8", "const:4:8"]]
- 006d7160 ["CALL", null, ["callee:00c58f30:8"]]
+ 006d7510 ["INT_ADD", "register:40f0:8", ["const:6d7510:8", "const:4:8"]]
+ 006d7510 ["CALL", null, ["callee:00c58f30:8"]]
- 006d7180 ["INT_ADD", "register:40f0:8", ["const:6d7180:8", "const:4:8"]]
- 006d7180 ["CALL", null, ["callee:00c59130:8"]]
+ 006d7530 ["INT_ADD", "register:40f0:8", ["const:6d7530:8", "const:4:8"]]
+ 006d7530 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-5e41e3b1513bf792c962b90d603b000c"></a>

### [`006d76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76a8.md) → [`006d7a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7a58.md) FUN_006d7a58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`006d70e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d70e0.md) [`006d77d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d77d4.md) [`007f3ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3ee4.md) [`007f41e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f41e8.md) · 呼出先 4件 [`006d770c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d770c.md) [`00c37df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37df8.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)
- 新版 呼出元 4件 [`006d7490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7490.md) [`006d7b84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7b84.md) [`007f4e48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4e48.md) [`007f514c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f514c.md) · 呼出先 4件 [`006d7abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7abc.md) [`00c38dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38dec.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d7a88",
      "incomplete_value": true,
      "site": "006d7a90",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d76d8",
      "incomplete_value": true,
      "site": "006d76e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:618:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d7a8c",
      "incomplete_value": true,
      "site": "006d7a90",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d76dc",
      "incomplete_value": true,
      "site": "006d76e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:620:8"
              ]
            ]
          ]
        ]
      ]
    },
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
      "006d7a88",
      "READ",
      [
        "storage",
        "00c9b618",
        null,
        "pointer"
      ]
    ],
    [
      "006d7a88",
      "PARAM",
      [
        "storage",
        "00c96940",
        "std::range_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006d7a8c",
      "READ",
      [
        "storage",
        "00c9b620",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "006d7a88",
      "READ",
      [
        "storage",
        "00c9c5e8",
        null,
        "pointer"
      ]
    ],
    [
      "006d7a88",
      "PARAM",
      [
        "storage",
        "00c97910",
        "std::range_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006d7a8c",
      "READ",
      [
        "storage",
        "00c9c5f0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d76e0 ["INT_ADD", "register:40f0:8", ["const:6d76e0:8", "const:4:8"]]
- 006d76e0 ["CALL", null, ["callee:00c58fb0:8"]]
+ 006d7a90 ["INT_ADD", "register:40f0:8", ["const:6d7a90:8", "const:4:8"]]
+ 006d7a90 ["CALL", null, ["callee:00c58fb0:8"]]
- 006d76bc ["INT_ADD", "register:40f0:8", ["const:6d76bc:8", "const:4:8"]]
- 006d76bc ["CALL", null, ["callee:00c58f90:8"]]
+ 006d7a6c ["INT_ADD", "register:40f0:8", ["const:6d7a6c:8", "const:4:8"]]
+ 006d7a6c ["CALL", null, ["callee:00c58f90:8"]]
- 006d76c8 ["INT_ADD", "register:40f0:8", ["const:6d76c8:8", "const:4:8"]]
- 006d76c8 ["CALL", null, ["callee:006d7abc:8"]]
+ 006d7a78 ["INT_ADD", "register:40f0:8", ["const:6d7a78:8", "const:4:8"]]
+ 006d7a78 ["CALL", null, ["callee:006d7abc:8"]]
~~~


<a id="compare-ad5170b4792936a79cabc69dea2abb6b"></a>

### [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) → [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) FUN_006d7aa8

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 25件 [`006cff44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cf/006cff44.md) [`006d70e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d70e0.md) [`006d73e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d73e4.md) [`006d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d773c.md) [`007f3ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3ee4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 25件 [`006d02f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d0/006d02f4.md) [`006d7490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7490.md) [`006d7794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7794.md) [`006d7aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aec.md) [`007f4e48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4e48.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d7ab4",
      "incomplete_value": false,
      "site": "006d7ab8",
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
            "const:fad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d7704",
      "incomplete_value": false,
      "site": "006d7708",
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
            "const:ecf:8"
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
      "006d7ab4",
      "PARAM",
      [
        "storage",
        "002b9ecf",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006d7ab4",
      "PARAM",
      [
        "storage",
        "002b9fad",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d7708 ["INT_ADD", "register:40f0:8", ["const:6d7708:8", "const:4:8"]]
- 006d7708 ["CALL", null, ["callee:0043bad8:8"]]
+ 006d7ab8 ["INT_ADD", "register:40f0:8", ["const:6d7ab8:8", "const:4:8"]]
+ 006d7ab8 ["CALL", null, ["callee:0043bad8:8"]]
- 006d7704 ["COPY", "tmp:0:8", ["const:ecf:8"]]
- 006d7704 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006d7704 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006d7704 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006d7ab4 ["COPY", "tmp:0:8", ["const:fad:8"]]
+ 006d7ab4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006d7ab4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006d7ab4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5bf3bbf298a38c4216700af9c490556e"></a>

### [`006d77d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d77d4.md) → [`006d7b84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7b84.md) FUN_006d7b84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006cff44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cf/006cff44.md) · 呼出先 9件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`006d76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76a8.md) [`006d7be8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7be8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`006d02f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d0/006d02f4.md) · 呼出先 9件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`006d7a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7a58.md) [`006d7f98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7f98.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.59% / 新版 99.59%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d7f2c",
      "incomplete_value": false,
      "site": "006d7f30",
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
            "const:cd3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d7b7c",
      "incomplete_value": false,
      "site": "006d7b80",
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
            "const:b7b:8"
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
      "006d7f2c",
      "PARAM",
      [
        "storage",
        "002a7b7b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006d7f2c",
      "PARAM",
      [
        "storage",
        "002a7cd3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d7b80 ["INT_ADD", "register:40f0:8", ["const:6d7b80:8", "const:4:8"]]
- 006d7b80 ["CALL", null, ["callee:006d7a58:8"]]
+ 006d7f30 ["INT_ADD", "register:40f0:8", ["const:6d7f30:8", "const:4:8"]]
+ 006d7f30 ["CALL", null, ["callee:006d7a58:8"]]
- 006d7864 ["INT_ADD", "register:40f0:8", ["const:6d7864:8", "const:4:8"]]
- 006d7864 ["CALL", null, ["callee:00c58f30:8"]]
+ 006d7c14 ["INT_ADD", "register:40f0:8", ["const:6d7c14:8", "const:4:8"]]
+ 006d7c14 ["CALL", null, ["callee:00c58f30:8"]]
- 006d7884 ["INT_ADD", "register:40f0:8", ["const:6d7884:8", "const:4:8"]]
- 006d7884 ["CALL", null, ["callee:00c59130:8"]]
+ 006d7c34 ["INT_ADD", "register:40f0:8", ["const:6d7c34:8", "const:4:8"]]
+ 006d7c34 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-7260e9a35d26ca06c378602c48874b8c"></a>

### [`006d7e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7e80.md) → [`006d8230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d8230.md) FUN_006d8230

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
      "definition_site": "006d8254",
      "incomplete_value": false,
      "site": "006d8254",
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
            "const:3b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d7ea4",
      "incomplete_value": false,
      "site": "006d7ea4",
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
            "const:3e8:8"
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
      "006d8254",
      "DATA",
      [
        "storage",
        "00c763e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d8254",
      "DATA",
      [
        "storage",
        "00c773b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d7e94 ["INT_ADD", "register:40f0:8", ["const:6d7e94:8", "const:4:8"]]
- 006d7e94 ["CALL", null, ["callee:00c58f30:8"]]
+ 006d8244 ["INT_ADD", "register:40f0:8", ["const:6d8244:8", "const:4:8"]]
+ 006d8244 ["CALL", null, ["callee:00c58f30:8"]]
- 006d7e9c ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006d824c ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006d7ea0 ["COPY", "tmp:0:8", ["const:3e8:8"]]
- 006d7ea0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d7ea0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d7ea0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d8250 ["COPY", "tmp:0:8", ["const:3b8:8"]]
+ 006d8250 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8250 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8250 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9c0975356c1568a2324d418a9e132e81"></a>

### [`006d7eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7eb4.md) → [`006d8264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d8264.md) FUN_006d8264

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
      "definition_site": "006d8270",
      "incomplete_value": false,
      "site": "006d8270",
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
            "const:3b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d7ec0",
      "incomplete_value": false,
      "site": "006d7ec0",
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
            "const:3e8:8"
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
      "006d8270",
      "DATA",
      [
        "storage",
        "00c763e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d8270",
      "DATA",
      [
        "storage",
        "00c773b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d7eb8 ["COPY", "register:4048:8", ["const:c76000:8"]]
+ 006d8268 ["COPY", "register:4048:8", ["const:c77000:8"]]
- 006d7ebc ["COPY", "tmp:0:8", ["const:3e8:8"]]
- 006d7ebc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006d7ebc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006d7ebc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006d826c ["COPY", "tmp:0:8", ["const:3b8:8"]]
+ 006d826c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006d826c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006d826c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-40227c4eef23c222333d27a68b4031d3"></a>

### [`006d7ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7ed0.md) → [`006d8280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d8280.md) FUN_006d8280

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006d4c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d4/006d4c9c.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`006d504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d5/006d504c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d82a0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d7ef0",
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
      "site": "006d82ac",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d7efc",
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
      "006d82a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006d82ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006d82a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006d82ac",
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
- 006d7ef0 ["INT_ADD", "register:40f0:8", ["const:6d7ef0:8", "const:4:8"]]
- 006d7ef0 ["CALL", null, ["ram:47ad34:8"]]
+ 006d82a0 ["INT_ADD", "register:40f0:8", ["const:6d82a0:8", "const:4:8"]]
+ 006d82a0 ["CALL", null, ["ram:47b054:8"]]
- 006d7efc ["INT_ADD", "register:40f0:8", ["const:6d7efc:8", "const:4:8"]]
- 006d7efc ["CALL", null, ["ram:47ad34:8"]]
+ 006d82ac ["INT_ADD", "register:40f0:8", ["const:6d82ac:8", "const:4:8"]]
+ 006d82ac ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-dffdc993cac17ee1a481143c69b21201"></a>

### [`006d8260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8260.md) → [`006d8610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d8610.md) FUN_006d8610

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
      "definition_site": "006d8634",
      "incomplete_value": false,
      "site": "006d8634",
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
            "const:438:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d8284",
      "incomplete_value": false,
      "site": "006d8284",
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
            "const:468:8"
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
      "006d8634",
      "DATA",
      [
        "storage",
        "00c76468",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d8634",
      "DATA",
      [
        "storage",
        "00c77438",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d8274 ["INT_ADD", "register:40f0:8", ["const:6d8274:8", "const:4:8"]]
- 006d8274 ["CALL", null, ["callee:00c58f30:8"]]
+ 006d8624 ["INT_ADD", "register:40f0:8", ["const:6d8624:8", "const:4:8"]]
+ 006d8624 ["CALL", null, ["callee:00c58f30:8"]]
- 006d827c ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006d862c ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006d8280 ["COPY", "tmp:0:8", ["const:468:8"]]
- 006d8280 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d8280 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d8280 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d8630 ["COPY", "tmp:0:8", ["const:438:8"]]
+ 006d8630 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8630 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8630 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-936fab56be447b69027f72dd75f5ddae"></a>

### [`006d8294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8294.md) → [`006d8644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d8644.md) FUN_006d8644

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
      "definition_site": "006d8650",
      "incomplete_value": false,
      "site": "006d8650",
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
            "const:438:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d82a0",
      "incomplete_value": false,
      "site": "006d82a0",
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
            "const:468:8"
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
      "006d8650",
      "DATA",
      [
        "storage",
        "00c76468",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d8650",
      "DATA",
      [
        "storage",
        "00c77438",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d8298 ["COPY", "register:4048:8", ["const:c76000:8"]]
+ 006d8648 ["COPY", "register:4048:8", ["const:c77000:8"]]
- 006d829c ["COPY", "tmp:0:8", ["const:468:8"]]
- 006d829c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006d829c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006d829c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006d864c ["COPY", "tmp:0:8", ["const:438:8"]]
+ 006d864c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006d864c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006d864c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3245ae26e17398d9ca8668d1dccc99ef"></a>

### [`006d83f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d83f0.md) → [`006d87a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d87a0.md) FUN_006d87a0

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
      "definition_site": "006d87c4",
      "incomplete_value": false,
      "site": "006d87c4",
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
            "const:4b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d8414",
      "incomplete_value": false,
      "site": "006d8414",
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
            "const:4e8:8"
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
      "006d87c4",
      "DATA",
      [
        "storage",
        "00c764e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d87c4",
      "DATA",
      [
        "storage",
        "00c774b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d8404 ["INT_ADD", "register:40f0:8", ["const:6d8404:8", "const:4:8"]]
- 006d8404 ["CALL", null, ["callee:00c58f30:8"]]
+ 006d87b4 ["INT_ADD", "register:40f0:8", ["const:6d87b4:8", "const:4:8"]]
+ 006d87b4 ["CALL", null, ["callee:00c58f30:8"]]
- 006d840c ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006d87bc ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006d8410 ["COPY", "tmp:0:8", ["const:4e8:8"]]
- 006d8410 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d8410 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d8410 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d87c0 ["COPY", "tmp:0:8", ["const:4b8:8"]]
+ 006d87c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d87c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d87c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ce431c5caf60fa87a49f2aba617bc65a"></a>

### [`006d8424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8424.md) → [`006d87d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d87d4.md) FUN_006d87d4

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
      "definition_site": "006d87e0",
      "incomplete_value": false,
      "site": "006d87e0",
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
            "const:4b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d8430",
      "incomplete_value": false,
      "site": "006d8430",
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
            "const:4e8:8"
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
      "006d87e0",
      "DATA",
      [
        "storage",
        "00c764e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d87e0",
      "DATA",
      [
        "storage",
        "00c774b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d8428 ["COPY", "register:4048:8", ["const:c76000:8"]]
+ 006d87d8 ["COPY", "register:4048:8", ["const:c77000:8"]]
- 006d842c ["COPY", "tmp:0:8", ["const:4e8:8"]]
- 006d842c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006d842c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006d842c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006d87dc ["COPY", "tmp:0:8", ["const:4b8:8"]]
+ 006d87dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006d87dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006d87dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-aa6136667c74e536dfd3fc863662830e"></a>

### [`006d8440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8440.md) → [`006d87f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d87f0.md) FUN_006d87f0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006c4ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4ec4.md) [`006d12b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d1/006d12b0.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`006c5274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c5/006c5274.md) [`006d1660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d1/006d1660.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.96% / 新版 98.96%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d8834",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d8484",
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
      "site": "006d885c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d84ac",
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
      "006d8834",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006d885c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006d8a78",
      "DATA",
      [
        "storage",
        "003c9698",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "006d8834",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006d885c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006d8a78",
      "DATA",
      [
        "storage",
        "003c9698",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d8484 ["INT_ADD", "register:40f0:8", ["const:6d8484:8", "const:4:8"]]
- 006d8484 ["CALL", null, ["ram:47ad34:8"]]
+ 006d8834 ["INT_ADD", "register:40f0:8", ["const:6d8834:8", "const:4:8"]]
+ 006d8834 ["CALL", null, ["ram:47b054:8"]]
- 006d84ac ["INT_ADD", "register:40f0:8", ["const:6d84ac:8", "const:4:8"]]
- 006d84ac ["CALL", null, ["ram:47ad34:8"]]
+ 006d885c ["INT_ADD", "register:40f0:8", ["const:6d885c:8", "const:4:8"]]
+ 006d885c ["CALL", null, ["ram:47b054:8"]]
- 006d84a4 ["INT_ADD", "register:40f0:8", ["const:6d84a4:8", "const:4:8"]]
- 006d84a4 ["CALL", null, ["callee:006d1660:8"]]
+ 006d8854 ["INT_ADD", "register:40f0:8", ["const:6d8854:8", "const:4:8"]]
+ 006d8854 ["CALL", null, ["callee:006d1660:8"]]
~~~


<a id="compare-bb6078ec5bb720919e68e178ef94680e"></a>

### [`006d8770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8770.md) → [`006d8b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d8b20.md) FUN_006d8b20

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
      "definition_site": "006d8b44",
      "incomplete_value": false,
      "site": "006d8b44",
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
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d8794",
      "incomplete_value": false,
      "site": "006d8794",
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
            "const:568:8"
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
      "006d8b44",
      "DATA",
      [
        "storage",
        "00c76568",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d8b44",
      "DATA",
      [
        "storage",
        "00c77538",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d8784 ["INT_ADD", "register:40f0:8", ["const:6d8784:8", "const:4:8"]]
- 006d8784 ["CALL", null, ["callee:00c58f30:8"]]
+ 006d8b34 ["INT_ADD", "register:40f0:8", ["const:6d8b34:8", "const:4:8"]]
+ 006d8b34 ["CALL", null, ["callee:00c58f30:8"]]
- 006d878c ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006d8b3c ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006d8790 ["COPY", "tmp:0:8", ["const:568:8"]]
- 006d8790 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d8790 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d8790 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d8b40 ["COPY", "tmp:0:8", ["const:538:8"]]
+ 006d8b40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8b40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8b40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0ddca73635d5b5678daeea0e02875a3f"></a>

### [`006d87c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d87c0.md) → [`006d8b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d8b70.md) FUN_006d8b70

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006c4ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4ec4.md) [`006d5efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d5/006d5efc.md) [`006d7f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7f4c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`006c5274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c5/006c5274.md) [`006d62ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d6/006d62ac.md) [`006d82fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d82fc.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.32% / 新版 99.32%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d8e7c",
      "value": [
        "leaf",
        "ram:8f49a8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d8acc",
      "value": [
        "leaf",
        "ram:8f39fc:8"
      ]
    },
    "ordinal": 27,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d8f8c",
      "value": [
        "leaf",
        "ram:8f49a8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d8bdc",
      "value": [
        "leaf",
        "ram:8f39fc:8"
      ]
    },
    "ordinal": 39,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006d8c30",
      "DATA",
      [
        "storage",
        "003c9158",
        null,
        "dword"
      ]
    ],
    [
      "006d8c58",
      "DATA",
      [
        "storage",
        "003c8d00",
        null,
        "byte[15]"
      ]
    ],
    [
      "006d8cd0",
      "DATA",
      [
        "storage",
        "003c8d30",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "006d8c30",
      "DATA",
      [
        "storage",
        "003c9158",
        null,
        "uleb128"
      ]
    ],
    [
      "006d8c58",
      "DATA",
      [
        "storage",
        "003c8d00",
        "fde_003c8d00",
        "dword"
      ]
    ],
    [
      "006d8cd0",
      "DATA",
      [
        "storage",
        "003c8d30",
        null,
        "uleb128"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d8acc ["INT_ADD", "register:40f0:8", ["const:6d8acc:8", "const:4:8"]]
- 006d8acc ["CALL", null, ["ram:8f39fc:8"]]
+ 006d8e7c ["INT_ADD", "register:40f0:8", ["const:6d8e7c:8", "const:4:8"]]
+ 006d8e7c ["CALL", null, ["ram:8f49a8:8"]]
- 006d8bdc ["INT_ADD", "register:40f0:8", ["const:6d8bdc:8", "const:4:8"]]
- 006d8bdc ["CALL", null, ["ram:8f39fc:8"]]
+ 006d8f8c ["INT_ADD", "register:40f0:8", ["const:6d8f8c:8", "const:4:8"]]
+ 006d8f8c ["CALL", null, ["ram:8f49a8:8"]]
- 006d87e4 ["INT_ADD", "register:40f0:8", ["const:6d87e4:8", "const:4:8"]]
- 006d87e4 ["CALL", null, ["callee:008524fc:8"]]
+ 006d8b94 ["INT_ADD", "register:40f0:8", ["const:6d8b94:8", "const:4:8"]]
+ 006d8b94 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-4b26aa823f936a5a39a17a7f5b7d03e6"></a>

### [`006d8d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8d08.md) → [`006d90b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d9/006d90b8.md) FUN_006d90b8

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
      "definition_site": "006d90dc",
      "incomplete_value": false,
      "site": "006d90dc",
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
            "const:5b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d8d2c",
      "incomplete_value": false,
      "site": "006d8d2c",
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
      "006d90dc",
      "DATA",
      [
        "storage",
        "00c765e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d90dc",
      "DATA",
      [
        "storage",
        "00c775b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d8d1c ["INT_ADD", "register:40f0:8", ["const:6d8d1c:8", "const:4:8"]]
- 006d8d1c ["CALL", null, ["callee:00c58f30:8"]]
+ 006d90cc ["INT_ADD", "register:40f0:8", ["const:6d90cc:8", "const:4:8"]]
+ 006d90cc ["CALL", null, ["callee:00c58f30:8"]]
- 006d8d24 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006d90d4 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006d8d28 ["COPY", "tmp:0:8", ["const:5e8:8"]]
- 006d8d28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d8d28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d8d28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d90d8 ["COPY", "tmp:0:8", ["const:5b8:8"]]
+ 006d90d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d90d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d90d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-44dd658d1e9a7aa8598979f17adb570f"></a>

### [`006d988c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d988c.md) → [`006d9c3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d9/006d9c3c.md) FUN_006d9c3c

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
      "definition_site": "006d9c60",
      "incomplete_value": false,
      "site": "006d9c60",
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
            "const:638:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d98b0",
      "incomplete_value": false,
      "site": "006d98b0",
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
      "006d9c60",
      "DATA",
      [
        "storage",
        "00c76668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d9c60",
      "DATA",
      [
        "storage",
        "00c77638",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d98a0 ["INT_ADD", "register:40f0:8", ["const:6d98a0:8", "const:4:8"]]
- 006d98a0 ["CALL", null, ["callee:00c58f30:8"]]
+ 006d9c50 ["INT_ADD", "register:40f0:8", ["const:6d9c50:8", "const:4:8"]]
+ 006d9c50 ["CALL", null, ["callee:00c58f30:8"]]
- 006d98a8 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006d9c58 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006d98ac ["COPY", "tmp:0:8", ["const:668:8"]]
- 006d98ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d98ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d98ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d9c5c ["COPY", "tmp:0:8", ["const:638:8"]]
+ 006d9c5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d9c5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d9c5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-34281a8fef6a9edcf589f9d4cd28aa01"></a>

### [`006d98dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d98dc.md) → [`006d9c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d9/006d9c8c.md) FUN_006d9c8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md) [`00a46944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46944.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47920.md) [`00a47938`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47938.md)

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
      "site": "006d9d08",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9958",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9d30",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9980",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "006d9d08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006d9d30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006d9d08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006d9d30",
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
- 006d9958 ["INT_ADD", "register:40f0:8", ["const:6d9958:8", "const:4:8"]]
- 006d9958 ["CALL", null, ["ram:47ad34:8"]]
+ 006d9d08 ["INT_ADD", "register:40f0:8", ["const:6d9d08:8", "const:4:8"]]
+ 006d9d08 ["CALL", null, ["ram:47b054:8"]]
- 006d9980 ["INT_ADD", "register:40f0:8", ["const:6d9980:8", "const:4:8"]]
- 006d9980 ["CALL", null, ["ram:47ad34:8"]]
+ 006d9d30 ["INT_ADD", "register:40f0:8", ["const:6d9d30:8", "const:4:8"]]
+ 006d9d30 ["CALL", null, ["ram:47b054:8"]]
- 006d992c ["INT_ADD", "register:40f0:8", ["const:6d992c:8", "const:4:8"]]
- 006d992c ["CALL", null, ["callee:008b7ea8:8"]]
+ 006d9cdc ["INT_ADD", "register:40f0:8", ["const:6d9cdc:8", "const:4:8"]]
+ 006d9cdc ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-f6b2e6a4bdf298f4d3ee205dcd41cc9e"></a>

### [`006d99c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d99c4.md) → [`006d9d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d9/006d9d74.md) FUN_006d9d74

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
      "definition_site": "006d9d98",
      "incomplete_value": false,
      "site": "006d9d98",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d99e8",
      "incomplete_value": false,
      "site": "006d99e8",
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
      "006d9d98",
      "DATA",
      [
        "storage",
        "00c766e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d9d98",
      "DATA",
      [
        "storage",
        "00c776b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d99d8 ["INT_ADD", "register:40f0:8", ["const:6d99d8:8", "const:4:8"]]
- 006d99d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 006d9d88 ["INT_ADD", "register:40f0:8", ["const:6d9d88:8", "const:4:8"]]
+ 006d9d88 ["CALL", null, ["callee:00c58f30:8"]]
- 006d99e0 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006d9d90 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006d99e4 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 006d99e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d99e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d99e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d9d94 ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 006d9d94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d9d94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d9d94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f42c631121c8c95fecbc4d1c9eac7840"></a>

### [`006d9a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9a14.md) → [`006d9dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d9/006d9dc4.md) FUN_006d9dc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47c00.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9e34",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9a84",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "006d9e5c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9aac",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "006d9e34",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006d9e5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006d9e34",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006d9e5c",
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
- 006d9a84 ["INT_ADD", "register:40f0:8", ["const:6d9a84:8", "const:4:8"]]
- 006d9a84 ["CALL", null, ["ram:47ad34:8"]]
+ 006d9e34 ["INT_ADD", "register:40f0:8", ["const:6d9e34:8", "const:4:8"]]
+ 006d9e34 ["CALL", null, ["ram:47b054:8"]]
- 006d9aac ["INT_ADD", "register:40f0:8", ["const:6d9aac:8", "const:4:8"]]
- 006d9aac ["CALL", null, ["ram:47ad34:8"]]
+ 006d9e5c ["INT_ADD", "register:40f0:8", ["const:6d9e5c:8", "const:4:8"]]
+ 006d9e5c ["CALL", null, ["ram:47b054:8"]]
- 006d9a64 ["INT_ADD", "register:40f0:8", ["const:6d9a64:8", "const:4:8"]]
- 006d9a64 ["CALL", null, ["callee:008b7ea8:8"]]
+ 006d9e14 ["INT_ADD", "register:40f0:8", ["const:6d9e14:8", "const:4:8"]]
+ 006d9e14 ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-ac34cda83694c6ce9366d48a638469ad"></a>

### [`006d9af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9af0.md) → [`006d9ea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d9/006d9ea0.md) FUN_006d9ea0

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
      "definition_site": "006d9ec4",
      "incomplete_value": false,
      "site": "006d9ec4",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d9b14",
      "incomplete_value": false,
      "site": "006d9b14",
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
      "006d9ec4",
      "DATA",
      [
        "storage",
        "00c76768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d9ec4",
      "DATA",
      [
        "storage",
        "00c77738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d9b04 ["INT_ADD", "register:40f0:8", ["const:6d9b04:8", "const:4:8"]]
- 006d9b04 ["CALL", null, ["callee:00c58f30:8"]]
+ 006d9eb4 ["INT_ADD", "register:40f0:8", ["const:6d9eb4:8", "const:4:8"]]
+ 006d9eb4 ["CALL", null, ["callee:00c58f30:8"]]
- 006d9b0c ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006d9ebc ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006d9b10 ["COPY", "tmp:0:8", ["const:768:8"]]
- 006d9b10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d9b10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d9b10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d9ec0 ["COPY", "tmp:0:8", ["const:738:8"]]
+ 006d9ec0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d9ec0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d9ec0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-85c31b884e5b7d8563a19f85d9f04f63"></a>

### [`006d9cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9cbc.md) → [`006da06c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006da/006da06c.md) FUN_006da06c

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
      "definition_site": "006da08c",
      "incomplete_value": false,
      "site": "006da090",
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
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d9cdc",
      "incomplete_value": false,
      "site": "006d9ce0",
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
      "006da090",
      "DATA",
      [
        "storage",
        "00c767e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006da090",
      "DATA",
      [
        "storage",
        "00c777b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d9cd0 ["INT_ADD", "register:40f0:8", ["const:6d9cd0:8", "const:4:8"]]
- 006d9cd0 ["CALL", null, ["callee:00c58f30:8"]]
+ 006da080 ["INT_ADD", "register:40f0:8", ["const:6da080:8", "const:4:8"]]
+ 006da080 ["CALL", null, ["callee:00c58f30:8"]]
- 006d9cd8 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006da088 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006d9cdc ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 006d9cdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d9cdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d9cdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006da08c ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 006da08c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006da08c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006da08c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-51dcfb0cedc8e5220c44a5eb73f09903"></a>

### [`006d9d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9d14.md) → [`006da0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006da/006da0c4.md) FUN_006da0c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47c00.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.80% / 新版 98.80%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da0f8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9d48",
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
      "site": "006da104",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9d54",
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
      "006da0f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006da104",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006da0f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006da104",
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
- 006d9d48 ["INT_ADD", "register:40f0:8", ["const:6d9d48:8", "const:4:8"]]
- 006d9d48 ["CALL", null, ["ram:47ad34:8"]]
+ 006da0f8 ["INT_ADD", "register:40f0:8", ["const:6da0f8:8", "const:4:8"]]
+ 006da0f8 ["CALL", null, ["ram:47b054:8"]]
- 006d9d54 ["INT_ADD", "register:40f0:8", ["const:6d9d54:8", "const:4:8"]]
- 006d9d54 ["CALL", null, ["ram:47ad34:8"]]
+ 006da104 ["INT_ADD", "register:40f0:8", ["const:6da104:8", "const:4:8"]]
+ 006da104 ["CALL", null, ["ram:47b054:8"]]
- 006d9de0 ["INT_ADD", "register:40f0:8", ["const:6d9de0:8", "const:4:8"]]
- 006d9de0 ["CALL", null, ["callee:00c58f30:8"]]
+ 006da190 ["INT_ADD", "register:40f0:8", ["const:6da190:8", "const:4:8"]]
+ 006da190 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-eda2d8daba5af7d59dfd79a01c4d1b1e"></a>

### [`006d9fd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9fd8.md) → [`006da388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006da/006da388.md) FUN_006da388

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
      "definition_site": "006da3a8",
      "incomplete_value": false,
      "site": "006da3ac",
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
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d9ff8",
      "incomplete_value": false,
      "site": "006d9ffc",
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
      "006da3ac",
      "DATA",
      [
        "storage",
        "00c76868",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006da3ac",
      "DATA",
      [
        "storage",
        "00c77838",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d9fec ["INT_ADD", "register:40f0:8", ["const:6d9fec:8", "const:4:8"]]
- 006d9fec ["CALL", null, ["callee:00c58f30:8"]]
+ 006da39c ["INT_ADD", "register:40f0:8", ["const:6da39c:8", "const:4:8"]]
+ 006da39c ["CALL", null, ["callee:00c58f30:8"]]
- 006d9ff4 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006da3a4 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006d9ff8 ["COPY", "tmp:0:8", ["const:868:8"]]
- 006d9ff8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d9ff8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d9ff8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006da3a8 ["COPY", "tmp:0:8", ["const:838:8"]]
+ 006da3a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006da3a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006da3a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-044775ace0c4383da5d9b0c4a9fe21eb"></a>

### [`006da030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006da030.md) → [`006da3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006da/006da3e0.md) FUN_006da3e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.87% / 新版 98.87%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da414",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da064",
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
      "site": "006da420",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da070",
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
      "006da414",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006da420",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006da414",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006da420",
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
- 006da064 ["INT_ADD", "register:40f0:8", ["const:6da064:8", "const:4:8"]]
- 006da064 ["CALL", null, ["ram:47ad34:8"]]
+ 006da414 ["INT_ADD", "register:40f0:8", ["const:6da414:8", "const:4:8"]]
+ 006da414 ["CALL", null, ["ram:47b054:8"]]
- 006da070 ["INT_ADD", "register:40f0:8", ["const:6da070:8", "const:4:8"]]
- 006da070 ["CALL", null, ["ram:47ad34:8"]]
+ 006da420 ["INT_ADD", "register:40f0:8", ["const:6da420:8", "const:4:8"]]
+ 006da420 ["CALL", null, ["ram:47b054:8"]]
- 006da0fc ["INT_ADD", "register:40f0:8", ["const:6da0fc:8", "const:4:8"]]
- 006da0fc ["CALL", null, ["callee:00c58f30:8"]]
+ 006da4ac ["INT_ADD", "register:40f0:8", ["const:6da4ac:8", "const:4:8"]]
+ 006da4ac ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-48d286be9e6278c3c311172e39908800"></a>

### [`006da320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006da320.md) → [`006da6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006da/006da6d0.md) FUN_006da6d0

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
      "definition_site": "006da6f0",
      "incomplete_value": false,
      "site": "006da6f4",
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
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006da340",
      "incomplete_value": false,
      "site": "006da344",
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
      "006da6f4",
      "DATA",
      [
        "storage",
        "00c768e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006da6f4",
      "DATA",
      [
        "storage",
        "00c778b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006da334 ["INT_ADD", "register:40f0:8", ["const:6da334:8", "const:4:8"]]
- 006da334 ["CALL", null, ["callee:00c58f30:8"]]
+ 006da6e4 ["INT_ADD", "register:40f0:8", ["const:6da6e4:8", "const:4:8"]]
+ 006da6e4 ["CALL", null, ["callee:00c58f30:8"]]
- 006da33c ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006da6ec ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006da340 ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 006da340 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006da340 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006da340 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006da6f0 ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 006da6f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006da6f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006da6f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7a5bd9afd4c63b575ad3b20799106ed7"></a>

### [`006da378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006da378.md) → [`006da728`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006da/006da728.md) FUN_006da728

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47c00.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.90% / 新版 98.90%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da9a0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da5f0",
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
      "site": "006da9d4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da624",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "006da9a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006da9d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006da9a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006da9d4",
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
- 006da5f0 ["INT_ADD", "register:40f0:8", ["const:6da5f0:8", "const:4:8"]]
- 006da5f0 ["CALL", null, ["ram:47ad34:8"]]
+ 006da9a0 ["INT_ADD", "register:40f0:8", ["const:6da9a0:8", "const:4:8"]]
+ 006da9a0 ["CALL", null, ["ram:47b054:8"]]
- 006da624 ["INT_ADD", "register:40f0:8", ["const:6da624:8", "const:4:8"]]
- 006da624 ["CALL", null, ["ram:47ad34:8"]]
+ 006da9d4 ["INT_ADD", "register:40f0:8", ["const:6da9d4:8", "const:4:8"]]
+ 006da9d4 ["CALL", null, ["ram:47b054:8"]]
- 006da438 ["INT_ADD", "register:40f0:8", ["const:6da438:8", "const:4:8"]]
- 006da438 ["CALL", null, ["callee:00c58f30:8"]]
+ 006da7e8 ["INT_ADD", "register:40f0:8", ["const:6da7e8:8", "const:4:8"]]
+ 006da7e8 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-2c2a9da4d7f4c9ee6d137741fcf8a3af"></a>

### [`006da678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006da678.md) → [`006daa28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006da/006daa28.md) FUN_006daa28

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
      "definition_site": "006daa4c",
      "incomplete_value": false,
      "site": "006daa4c",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006da69c",
      "incomplete_value": false,
      "site": "006da69c",
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
            "const:968:8"
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
      "006daa4c",
      "DATA",
      [
        "storage",
        "00c76968",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006daa4c",
      "DATA",
      [
        "storage",
        "00c77938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006da68c ["INT_ADD", "register:40f0:8", ["const:6da68c:8", "const:4:8"]]
- 006da68c ["CALL", null, ["callee:00c58f30:8"]]
+ 006daa3c ["INT_ADD", "register:40f0:8", ["const:6daa3c:8", "const:4:8"]]
+ 006daa3c ["CALL", null, ["callee:00c58f30:8"]]
- 006da694 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006daa44 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006da698 ["COPY", "tmp:0:8", ["const:968:8"]]
- 006da698 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006da698 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006da698 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006daa48 ["COPY", "tmp:0:8", ["const:938:8"]]
+ 006daa48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006daa48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006daa48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5ec427cdf8ab4909a32d9b23814ee869"></a>

### [`006da6c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006da6c8.md) → [`006daa78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006da/006daa78.md) FUN_006daa78

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00492160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492160.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`00492480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492480.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.24% / 新版 90.24%

優先判定に残った影響 `call_target` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006dab48",
      "incomplete_value": true,
      "site": "006dab48",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ca000:8"
              ],
              [
                "leaf",
                "const:a70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006da798",
      "incomplete_value": true,
      "site": "006da798",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ca000:8"
              ],
              [
                "leaf",
                "const:a20:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "006dab4c",
      "incomplete_value": true,
      "site": "006dab4c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006da79c",
      "incomplete_value": true,
      "site": "006da79c",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006daaac",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da6fc",
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
      "006daaac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006daac8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006dab04",
      "DATA",
      [
        "storage",
        "0039b1b8",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "006daaac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006daac8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006dab04",
      "DATA",
      [
        "storage",
        "0039b1b8",
        "fde_0039b1b8",
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 006da6fc ["INT_ADD", "register:40f0:8", ["const:6da6fc:8", "const:4:8"]]
- 006da6fc ["CALL", null, ["ram:47ad34:8"]]
+ 006daaac ["INT_ADD", "register:40f0:8", ["const:6daaac:8", "const:4:8"]]
+ 006daaac ["CALL", null, ["ram:47b054:8"]]
- 006da718 ["INT_ADD", "register:40f0:8", ["const:6da718:8", "const:4:8"]]
- 006da718 ["CALL", null, ["ram:47ad34:8"]]
+ 006daac8 ["INT_ADD", "register:40f0:8", ["const:6daac8:8", "const:4:8"]]
+ 006daac8 ["CALL", null, ["ram:47b054:8"]]
- 006da778 ["INT_ADD", "register:40f0:8", ["const:6da778:8", "const:4:8"]]
- 006da778 ["CALL", null, ["ram:48cd38:8"]]
+ 006dab28 ["INT_ADD", "register:40f0:8", ["const:6dab28:8", "const:4:8"]]
+ 006dab28 ["CALL", null, ["ram:48d058:8"]]
~~~


<a id="compare-a2b8fecfd39f967642119a9a9d778269"></a>

### [`006da874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006da874.md) → [`006dac24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006da/006dac24.md) _INIT_109

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 83.05% / 新版 83.05%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006dac60",
      "incomplete_value": true,
      "site": "006dac7c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006da8b0",
      "incomplete_value": true,
      "site": "006da8cc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006dac84",
      "incomplete_value": true,
      "site": "006daca0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006da8d4",
      "incomplete_value": true,
      "site": "006da8f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006daca4",
      "incomplete_value": true,
      "site": "006dacc0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006da8f4",
      "incomplete_value": true,
      "site": "006da910",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "006dac60",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006dac84",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "006daca4",
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
      "006dac60",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "006dac84",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "006daca4",
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
- 006daaa8 ["INT_ADD", "register:40f0:8", ["const:6daaa8:8", "const:4:8"]]
- 006daaa8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 006dae58 ["INT_ADD", "register:40f0:8", ["const:6dae58:8", "const:4:8"]]
+ 006dae58 ["CALL", null, ["callee:00c58ed0:8"]]
- 006da89c ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 006dac4c ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 006da8a0 ["COPY", "tmp:0:8", ["const:878:8"]]
- 006da8a0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 006da8a0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 006da8a0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 006dac50 ["COPY", "tmp:0:8", ["const:838:8"]]
+ 006dac50 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 006dac50 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 006dac50 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-95aa2fc9f868f2583fd88c0921573f33"></a>

### [`006dadcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006dadcc.md) → [`006db17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006db/006db17c.md) FUN_006db17c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 9件 [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md) [`006dac04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006dac04.md) [`00b11188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11188.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b12e14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b12e14.md) · 呼出先 9件 [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md) [`006dafb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006da/006dafb4.md) [`00b1217c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b1217c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.00% / 新版 89.00%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006db1b0",
      "incomplete_value": false,
      "site": "006db1b8",
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
      "definition_site": "006dae00",
      "incomplete_value": false,
      "site": "006dae08",
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
      "definition_site": "006db26c",
      "incomplete_value": true,
      "site": "006db270",
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
      "definition_site": "006daebc",
      "incomplete_value": true,
      "site": "006daec0",
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
      "definition_site": "006db268",
      "incomplete_value": true,
      "site": "006db274",
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
      "definition_site": "006daeb8",
      "incomplete_value": true,
      "site": "006daec4",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006db1b8",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "006db1cc",
      "READ",
      [
        "storage",
        "002b76bb",
        null,
        "string"
      ]
    ],
    [
      "006db25c",
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
      "006db1b8",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "006db1cc",
      "READ",
      [
        "storage",
        "002b778a",
        null,
        "string"
      ]
    ],
    [
      "006db25c",
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
- 006dadf8 ["INT_ADD", "register:40f0:8", ["const:6dadf8:8", "const:4:8"]]
- 006dadf8 ["CALL", null, ["callee:00488180:8"]]
+ 006db1a8 ["INT_ADD", "register:40f0:8", ["const:6db1a8:8", "const:4:8"]]
+ 006db1a8 ["CALL", null, ["callee:00488180:8"]]
- 006dadfc ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 006db1ac ["COPY", "register:4040:8", ["const:c65000:8"]]
- 006dae00 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 006dae00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006dae00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006dae00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006db1b0 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 006db1b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006db1b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006db1b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e7870d99a68f43bd18543d3f84dfea99"></a>

### [`006db120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006db120.md) → [`006db4d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006db/006db4d0.md) FUN_006db4d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`00b12e14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b12e14.md) · 呼出先 12件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 89.33% / 新版 89.33%

優先判定に残った影響 `store_destination` 1件, `store_value` 8件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006db510",
      "incomplete_value": false,
      "site": "006db514",
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
      "definition_site": "006db160",
      "incomplete_value": false,
      "site": "006db164",
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
      "definition_site": "006db530",
      "incomplete_value": true,
      "site": "006db53c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006db180",
      "incomplete_value": true,
      "site": "006db18c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9c0:8"
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
      "definition_site": "006db52c",
      "incomplete_value": true,
      "site": "006db540",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a74:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006db17c",
      "incomplete_value": true,
      "site": "006db190",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9a7:8"
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
      "006db514",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "006db52c",
      "READ",
      [
        "storage",
        "002ad9a7",
        null,
        "string"
      ]
    ],
    [
      "006db52c",
      "READ",
      [
        "storage",
        "002ad9b7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006db514",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "006db52c",
      "READ",
      [
        "storage",
        "002ada74",
        null,
        "string"
      ]
    ],
    [
      "006db52c",
      "READ",
      [
        "storage",
        "002ada84",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006db158 ["INT_ADD", "register:40f0:8", ["const:6db158:8", "const:4:8"]]
- 006db158 ["CALL", null, ["callee:00488180:8"]]
+ 006db508 ["INT_ADD", "register:40f0:8", ["const:6db508:8", "const:4:8"]]
+ 006db508 ["CALL", null, ["callee:00488180:8"]]
- 006db15c ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 006db50c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 006db160 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 006db160 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006db160 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006db160 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006db510 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 006db510 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006db510 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006db510 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5af2fc7f10d52d4c0582995719c35f3d"></a>

### [`006db438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006db438.md) → [`006db7e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006db/006db7e8.md) FUN_006db7e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) · 呼出先 27件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 1件 [`006b3fac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3fac.md) · 呼出先 27件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 89.68% / 新版 89.68%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 1件, `store_destination` 7件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006db8a4",
      "incomplete_value": true,
      "site": "006db8b8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:31f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006db4f4",
      "incomplete_value": true,
      "site": "006db508",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2df:8"
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
      "definition_site": "006db8d8",
      "incomplete_value": true,
      "site": "006db8e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:580:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006db528",
      "incomplete_value": true,
      "site": "006db534",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:536:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006dba28",
      "incomplete_value": false,
      "site": "006dba28",
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
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006db678",
      "incomplete_value": false,
      "site": "006db678",
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
            "const:9e8:8"
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006db864",
      "READ",
      [
        "storage",
        "00ca7e14",
        null,
        "undefined4"
      ]
    ],
    [
      "006db880",
      "READ",
      [
        "storage",
        "00ca7e10",
        null,
        "undefined4"
      ]
    ],
    [
      "006db8a4",
      "READ",
      [
        "storage",
        "0029f2df",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006db864",
      "READ",
      [
        "storage",
        "00ca8dd4",
        null,
        "undefined4"
      ]
    ],
    [
      "006db880",
      "READ",
      [
        "storage",
        "00ca8dd0",
        null,
        "undefined4"
      ]
    ],
    [
      "006db8a4",
      "READ",
      [
        "storage",
        "0029f31f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006db5a4 ["INT_ADD", "register:40f0:8", ["const:6db5a4:8", "const:4:8"]]
- 006db5a4 ["CALL", null, ["ram:6648e0:8"]]
+ 006db954 ["INT_ADD", "register:40f0:8", ["const:6db954:8", "const:4:8"]]
+ 006db954 ["CALL", null, ["ram:664c90:8"]]
- 006db5b0 ["COPY", "tmp:0:8", ["const:59:8"]]
- 006db5b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006db5b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006db5b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006db960 ["COPY", "tmp:0:8", ["const:137:8"]]
+ 006db960 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006db960 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006db960 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006db7dc ["INT_ADD", "register:40f0:8", ["const:6db7dc:8", "const:4:8"]]
- 006db7dc ["CALL", null, ["callee:0047e96c:8"]]
+ 006dbb8c ["INT_ADD", "register:40f0:8", ["const:6dbb8c:8", "const:4:8"]]
+ 006dbb8c ["CALL", null, ["callee:0047e96c:8"]]
~~~


<a id="compare-a5a991487665567e78d4623084de9063"></a>

### [`006dc16c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc16c.md) → [`006dc51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006dc/006dc51c.md) FUN_006dc51c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006dbe00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006dbe00.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0071d08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d08c.md) [`00728890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00728/00728890.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`006dc1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006dc/006dc1b0.md) · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0071d43c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071d/0071d43c.md) [`00728c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00728/00728c40.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.27% / 新版 97.27%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006dc77c",
      "incomplete_value": false,
      "site": "006dc780",
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
      "definition_site": "006dc3cc",
      "incomplete_value": false,
      "site": "006dc3d0",
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
      "006dc77c",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ],
    [
      "006dc7a8",
      "READ",
      [
        "storage",
        "00ca7e14",
        null,
        "undefined4"
      ]
    ],
    [
      "006dc7c4",
      "READ",
      [
        "storage",
        "00ca7e10",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "006dc77c",
      "PARAM",
      [
        "storage",
        "002a01b0",
        null,
        "string"
      ]
    ],
    [
      "006dc7a8",
      "READ",
      [
        "storage",
        "00ca8dd4",
        null,
        "undefined4"
      ]
    ],
    [
      "006dc7c4",
      "READ",
      [
        "storage",
        "00ca8dd0",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 006dc3d0 ["INT_ADD", "register:40f0:8", ["const:6dc3d0:8", "const:4:8"]]
- 006dc3d0 ["CALL", null, ["callee:00442c90:8"]]
+ 006dc780 ["INT_ADD", "register:40f0:8", ["const:6dc780:8", "const:4:8"]]
+ 006dc780 ["CALL", null, ["callee:00442c90:8"]]
- 006dc22c ["INT_ADD", "register:40f0:8", ["const:6dc22c:8", "const:4:8"]]
- 006dc22c ["CALL", null, ["callee:0071d43c:8"]]
+ 006dc5dc ["INT_ADD", "register:40f0:8", ["const:6dc5dc:8", "const:4:8"]]
+ 006dc5dc ["CALL", null, ["callee:0071d43c:8"]]
- 006dc2bc ["INT_ADD", "register:40f0:8", ["const:6dc2bc:8", "const:4:8"]]
- 006dc2bc ["CALL", null, ["callee:00c58f30:8"]]
+ 006dc66c ["INT_ADD", "register:40f0:8", ["const:6dc66c:8", "const:4:8"]]
+ 006dc66c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-6d525f71ae5acc2003aeb1e9a3290c48"></a>

### [`006dc998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc998.md) → [`006dcd48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006dc/006dcd48.md) FUN_006dcd48

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006f06ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f0/006f06ac.md) · 呼出先 18件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f6ac.md) [`0046f724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f724.md)
- 新版 呼出元 1件 [`006f0a5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f0/006f0a5c.md) · 呼出先 18件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md) [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md) [`0046f9cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f9cc.md) [`0046fa44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046fa44.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 87.60% / 新版 87.60%

優先判定に残った影響 `call_argument_candidate` 15件, `store_destination` 7件, `store_value` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006dcd8c",
      "incomplete_value": true,
      "site": "006dcd9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3dd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dc9dc",
      "incomplete_value": true,
      "site": "006dc9ec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:312:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "006dcd8c",
      "incomplete_value": true,
      "site": "006dcda0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3dd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dc9dc",
      "incomplete_value": true,
      "site": "006dc9f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:312:8"
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
      "definition_site": "006dcdc4",
      "incomplete_value": true,
      "site": "006dcdd8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:efe:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dca14",
      "incomplete_value": true,
      "site": "006dca28",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:eb4:8"
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
      "006dcd78",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006dcd8c",
      "READ",
      [
        "storage",
        "002a2312",
        null,
        "string"
      ]
    ],
    [
      "006dcdc4",
      "READ",
      [
        "storage",
        "002b2eb4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006dcd78",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "006dcd8c",
      "READ",
      [
        "storage",
        "002a23dd",
        null,
        "string"
      ]
    ],
    [
      "006dcdc4",
      "READ",
      [
        "storage",
        "002b2efe",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006dca44 ["INT_ADD", "register:40f0:8", ["const:6dca44:8", "const:4:8"]]
- 006dca44 ["CALL", null, ["callee:00448254:8"]]
+ 006dcdf4 ["INT_ADD", "register:40f0:8", ["const:6dcdf4:8", "const:4:8"]]
+ 006dcdf4 ["CALL", null, ["callee:00448254:8"]]
- 006dca64 ["INT_ADD", "register:40f0:8", ["const:6dca64:8", "const:4:8"]]
- 006dca64 ["CALL", null, ["callee:0047e96c:8"]]
+ 006dce14 ["INT_ADD", "register:40f0:8", ["const:6dce14:8", "const:4:8"]]
+ 006dce14 ["CALL", null, ["callee:0047e96c:8"]]
- 006dcae4 ["INT_ADD", "register:40f0:8", ["const:6dcae4:8", "const:4:8"]]
- 006dcae4 ["CALL", null, ["callee:00c58f20:8"]]
+ 006dce94 ["INT_ADD", "register:40f0:8", ["const:6dce94:8", "const:4:8"]]
+ 006dce94 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-af86d5874761950721b259cd4c758880"></a>

### [`006dd4c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dd/006dd4c8.md) → [`006dd878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006dd/006dd878.md) FUN_006dd878

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 10件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)
- 新版 呼出元 1件 [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 10件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.22% / 新版 82.22%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 7件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006dd8bc",
      "incomplete_value": true,
      "site": "006dd8cc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3dd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dd50c",
      "incomplete_value": true,
      "site": "006dd51c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:312:8"
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
      "definition_site": "006dd8ec",
      "incomplete_value": true,
      "site": "006dd900",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:efe:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dd53c",
      "incomplete_value": true,
      "site": "006dd550",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:eb4:8"
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
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "006dda60",
      "incomplete_value": false,
      "site": "006dda60",
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
      "definition_site": "006dd6b0",
      "incomplete_value": false,
      "site": "006dd6b0",
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
    "ordinal": 16,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006dd8a8",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006dd8bc",
      "READ",
      [
        "storage",
        "002a2312",
        null,
        "string"
      ]
    ],
    [
      "006dd8ec",
      "READ",
      [
        "storage",
        "002b2eb4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006dd8a8",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "006dd8bc",
      "READ",
      [
        "storage",
        "002a23dd",
        null,
        "string"
      ]
    ],
    [
      "006dd8ec",
      "READ",
      [
        "storage",
        "002b2efe",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006dd584 ["INT_ADD", "register:40f0:8", ["const:6dd584:8", "const:4:8"]]
- 006dd584 ["CALL", null, ["callee:0047e96c:8"]]
+ 006dd934 ["INT_ADD", "register:40f0:8", ["const:6dd934:8", "const:4:8"]]
+ 006dd934 ["CALL", null, ["callee:0047e96c:8"]]
- 006dd688 ["INT_ADD", "register:40f0:8", ["const:6dd688:8", "const:4:8"]]
- 006dd688 ["CALL", null, ["callee:00c58ef0:8"]]
+ 006dda38 ["INT_ADD", "register:40f0:8", ["const:6dda38:8", "const:4:8"]]
+ 006dda38 ["CALL", null, ["callee:00c58ef0:8"]]
- 006dd6c8 ["INT_ADD", "register:40f0:8", ["const:6dd6c8:8", "const:4:8"]]
- 006dd6c8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 006dda78 ["INT_ADD", "register:40f0:8", ["const:6dda78:8", "const:4:8"]]
+ 006dda78 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-8aa9105064adb4defcd970f3ab8fb2d9"></a>

### [`006dd77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dd/006dd77c.md) → [`006ddb2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006dd/006ddb2c.md) FUN_006ddb2c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`006b2bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2bb4.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 5件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046ee98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee98.md) [`006dc95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc95c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`006b2f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2f64.md) [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 5件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046f1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f1b8.md) [`006dcd0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006dc/006dcd0c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.73% / 新版 98.73%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006de0cc",
      "incomplete_value": true,
      "site": "006de0dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ff0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ddd1c",
      "incomplete_value": true,
      "site": "006ddd2c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:fa0:8"
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
      "definition_site": "006de244",
      "incomplete_value": true,
      "site": "006de254",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dde94",
      "incomplete_value": true,
      "site": "006ddea4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ec8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 46,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006ddb4c",
      "DATA",
      [
        "storage",
        "0042efb0",
        null,
        "byte[39]"
      ]
    ],
    [
      "006ddb60",
      "DATA",
      [
        "storage",
        "004341b0",
        "fde_004341b0",
        "dword"
      ]
    ],
    [
      "006ddb74",
      "DATA",
      [
        "storage",
        "0042efb0",
        null,
        "byte[39]"
      ]
    ]
  ],
  "added": [
    [
      "006ddb4c",
      "DATA",
      [
        "storage",
        "0042efb0",
        null,
        "dword"
      ]
    ],
    [
      "006ddb60",
      "DATA",
      [
        "storage",
        "004341b0",
        null,
        "byte[27]"
      ]
    ],
    [
      "006ddb74",
      "DATA",
      [
        "storage",
        "0042efb0",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 006dd790 ["INT_ADD", "register:40f0:8", ["const:6dd790:8", "const:4:8"]]
- 006dd790 ["CALL", null, ["callee:008524fc:8"]]
+ 006ddb40 ["INT_ADD", "register:40f0:8", ["const:6ddb40:8", "const:4:8"]]
+ 006ddb40 ["CALL", null, ["callee:008524fc:8"]]
- 006dd7a4 ["INT_ADD", "register:40f0:8", ["const:6dd7a4:8", "const:4:8"]]
- 006dd7a4 ["CALL", null, ["callee:008524fc:8"]]
+ 006ddb54 ["INT_ADD", "register:40f0:8", ["const:6ddb54:8", "const:4:8"]]
+ 006ddb54 ["CALL", null, ["callee:008524fc:8"]]
- 006dd7b8 ["INT_ADD", "register:40f0:8", ["const:6dd7b8:8", "const:4:8"]]
- 006dd7b8 ["CALL", null, ["callee:008524fc:8"]]
+ 006ddb68 ["INT_ADD", "register:40f0:8", ["const:6ddb68:8", "const:4:8"]]
+ 006ddb68 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-aebbcb5316460d0070673f2ba3515326"></a>

### [`006ddee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dd/006ddee0.md) → [`006de290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006de/006de290.md) FUN_006de290

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`006e9ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e9ebc.md) [`006f8720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f8/006f8720.md) · 呼出先 14件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468f8c.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md)
- 新版 呼出元 2件 [`006ea26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea26c.md) [`006f8ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f8/006f8ad0.md) · 呼出先 14件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`004692ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692ac.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.63% / 新版 99.63%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006de2d0",
      "incomplete_value": true,
      "site": "006de2d0",
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
      "definition_site": "006ddf20",
      "incomplete_value": true,
      "site": "006ddf20",
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
      "definition_site": "006de2d8",
      "incomplete_value": false,
      "site": "006de2ec",
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
      "definition_site": "006ddf28",
      "incomplete_value": false,
      "site": "006ddf3c",
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
      "definition_site": "006de2e0",
      "incomplete_value": false,
      "site": "006de2ec",
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
      "definition_site": "006ddf30",
      "incomplete_value": false,
      "site": "006ddf3c",
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
      "006de2cc",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006de2d8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006de2e0",
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
      "006de2cc",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006de2d8",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006de2e0",
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
- 006ddf3c ["INT_ADD", "register:40f0:8", ["const:6ddf3c:8", "const:4:8"]]
- 006ddf3c ["CALL", null, ["callee:00c596b0:8"]]
+ 006de2ec ["INT_ADD", "register:40f0:8", ["const:6de2ec:8", "const:4:8"]]
+ 006de2ec ["CALL", null, ["callee:00c596b0:8"]]
- 006ddf18 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 006de2c8 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 006ddf1c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 006ddf1c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 006de2cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 006de2cc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fbe3ca110c34bf0275432da2e90d1ebc"></a>

### [`006de870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006de/006de870.md) → [`006dec20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006de/006dec20.md) FUN_006dec20

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 5件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046ee98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee98.md) [`00470120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470120.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) · 呼出先 5件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046f1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f1b8.md) [`00470440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470440.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.40% / 新版 98.40%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006dedf0",
      "incomplete_value": true,
      "site": "006dedf8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:de0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dea40",
      "incomplete_value": true,
      "site": "006dea48",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d90:8"
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
      "006dedf0",
      "READ",
      [
        "storage",
        "002c3d90",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006decfc",
      "DATA",
      [
        "storage",
        "0043af10",
        null,
        "byte[35]"
      ]
    ],
    [
      "006decfc",
      "DATA",
      [
        "storage",
        "0043af1c",
        null,
        "byte[35]"
      ]
    ],
    [
      "006ded3c",
      "DATA",
      [
        "storage",
        "0043af20",
        "fde_0043af20",
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 006de8a8 ["INT_ADD", "register:40f0:8", ["const:6de8a8:8", "const:4:8"]]
- 006de8a8 ["CALL", null, ["callee:008524fc:8"]]
+ 006dec58 ["INT_ADD", "register:40f0:8", ["const:6dec58:8", "const:4:8"]]
+ 006dec58 ["CALL", null, ["callee:008524fc:8"]]
- 006de8ac ["INT_ADD", "register:40f0:8", ["const:6de8ac:8", "const:4:8"]]
- 006de8ac ["CALL", null, ["callee:0046cd24:8"]]
+ 006dec5c ["INT_ADD", "register:40f0:8", ["const:6dec5c:8", "const:4:8"]]
+ 006dec5c ["CALL", null, ["callee:0046cd24:8"]]
- 006de8c4 ["INT_ADD", "register:40f0:8", ["const:6de8c4:8", "const:4:8"]]
- 006de8c4 ["CALL", null, ["callee:0046db10:8"]]
+ 006dec74 ["INT_ADD", "register:40f0:8", ["const:6dec74:8", "const:4:8"]]
+ 006dec74 ["CALL", null, ["callee:0046db10:8"]]
~~~


<a id="compare-b81222974d98ce9a4934dd8ec52ee396"></a>

### [`006deaec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006de/006deaec.md) → [`006dee9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006de/006dee9c.md) FUN_006dee9c

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006b2bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2bb4.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 11件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046ee98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee98.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)
- 新版 呼出元 2件 [`006b2f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2f64.md) [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 11件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046f1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f1b8.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.71% / 新版 99.71%

優先判定に残った影響 `call_target` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006df43c",
      "incomplete_value": true,
      "site": "006df444",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "006df08c",
      "incomplete_value": true,
      "site": "006df094",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 43,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006defc4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006dec14",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 15,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006df0e4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ded34",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 32,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006deedc",
      "DATA",
      [
        "storage",
        "0042efb0",
        null,
        "byte[39]"
      ]
    ],
    [
      "006def00",
      "DATA",
      [
        "storage",
        "004326e0",
        null,
        "dword"
      ]
    ],
    [
      "006def18",
      "DATA",
      [
        "storage",
        "004316b4",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "006deedc",
      "DATA",
      [
        "storage",
        "0042efb0",
        null,
        "dword"
      ]
    ],
    [
      "006def00",
      "DATA",
      [
        "storage",
        "004326e0",
        null,
        "byte[27]"
      ]
    ],
    [
      "006def18",
      "DATA",
      [
        "storage",
        "004316b4",
        null,
        "byte[19]"
      ]
    ]
  ]
}
~~~


~~~diff
- 006dec14 ["INT_ADD", "register:40f0:8", ["const:6dec14:8", "const:4:8"]]
- 006dec14 ["CALL", null, ["ram:47ad34:8"]]
+ 006defc4 ["INT_ADD", "register:40f0:8", ["const:6defc4:8", "const:4:8"]]
+ 006defc4 ["CALL", null, ["ram:47b054:8"]]
- 006dece4 ["INT_ADD", "register:40f0:8", ["const:6dece4:8", "const:4:8"]]
- 006dece4 ["CALL", null, ["callee:008524fc:8"]]
+ 006df094 ["INT_ADD", "register:40f0:8", ["const:6df094:8", "const:4:8"]]
+ 006df094 ["CALL", null, ["callee:008524fc:8"]]
- 006ded34 ["INT_ADD", "register:40f0:8", ["const:6ded34:8", "const:4:8"]]
- 006ded34 ["CALL", null, ["ram:47ad34:8"]]
+ 006df0e4 ["INT_ADD", "register:40f0:8", ["const:6df0e4:8", "const:4:8"]]
+ 006df0e4 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-818d501bc7e64ef87d69da34d94ff301"></a>

### [`006dfe20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006df/006dfe20.md) → [`006e01d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e0/006e01d0.md) FUN_006e01d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)
- 新版 呼出元 1件 [`00b12e14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b12e14.md) · 呼出先 19件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md)

変更の種類 constant, operands_and_dependencies, store_value, unresolved_store_alignment

命令の説明率　旧版 96.28% / 新版 96.28%

優先判定に残った影響 `store_value` 1件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e030c",
      "incomplete_value": true,
      "site": "006e0320",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dff5c",
      "incomplete_value": true,
      "site": "006dff70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fad:8"
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
      "definition_site": "006e0650",
      "incomplete_value": true,
      "site": "006e0654",
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
      "definition_site": "006e02a0",
      "incomplete_value": true,
      "site": "006e02a4",
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
    "ordinal": 88,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006e022c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "006e030c",
      "READ",
      [
        "storage",
        "002a9fad",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006e0270",
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
      "006e022c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "006e030c",
      "READ",
      [
        "storage",
        "002aa07a",
        null,
        "string"
      ]
    ],
    [
      "006e0620",
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
- 006dfe5c ["INT_ADD", "register:40f0:8", ["const:6dfe5c:8", "const:4:8"]]
- 006dfe5c ["CALL", null, ["callee:00488180:8"]]
+ 006e020c ["INT_ADD", "register:40f0:8", ["const:6e020c:8", "const:4:8"]]
+ 006e020c ["CALL", null, ["callee:00488180:8"]]
- 006dfe68 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 006e0218 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 006dfe6c ["COPY", "tmp:0:8", ["const:e08:8"]]
- 006dfe6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006dfe6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006dfe6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006e021c ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 006e021c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006e021c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006e021c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0f49a3c39b1cf27748f9b96c93af111e"></a>

### [`006e0504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e0/006e0504.md) → [`006e08b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e0/006e08b4.md) FUN_006e08b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e08f4",
      "incomplete_value": false,
      "site": "006e08f8",
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
      "definition_site": "006e0544",
      "incomplete_value": false,
      "site": "006e0548",
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
      "006e08f4",
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
      "006e08f4",
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
- 006e0548 ["INT_ADD", "register:40f0:8", ["const:6e0548:8", "const:4:8"]]
- 006e0548 ["CALL", null, ["callee:00442c90:8"]]
+ 006e08f8 ["INT_ADD", "register:40f0:8", ["const:6e08f8:8", "const:4:8"]]
+ 006e08f8 ["CALL", null, ["callee:00442c90:8"]]
- 006e0544 ["COPY", "tmp:0:8", ["const:170:8"]]
- 006e0544 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006e0544 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006e0544 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006e08f4 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 006e08f4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006e08f4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006e08f4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-7277041f3c615a75bdc788ca2f700e12"></a>

### [`006e1638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e1/006e1638.md) → [`006e19e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e1/006e19e8.md) FUN_006e19e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 24件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md) [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md)
- 新版 呼出元 1件 [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) · 呼出先 24件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0046ead0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ead0.md) [`0046eae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eae0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 92.11% / 新版 92.11%

優先判定に残った影響 `call_argument_candidate` 7件, `store_destination` 7件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e1b18",
      "incomplete_value": true,
      "site": "006e1b18",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e1c24",
      "incomplete_value": true,
      "site": "006e1c24",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:81:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "006e1eac",
      "incomplete_value": false,
      "site": "006e1eac",
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
      "006e1a18",
      "DATA",
      [
        "storage",
        "00434658",
        null,
        "byte[35]"
      ]
    ],
    [
      "006e1a20",
      "DATA",
      [
        "storage",
        "00434680",
        null,
        "byte[35]"
      ]
    ],
    [
      "006e1a64",
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
      "006e1a18",
      "DATA",
      [
        "storage",
        "00434658",
        null,
        "byte[67]"
      ]
    ],
    [
      "006e1a20",
      "DATA",
      [
        "storage",
        "00434680",
        null,
        "byte[67]"
      ]
    ],
    [
      "006e1a64",
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
- 006e16b8 ["INT_ADD", "register:40f0:8", ["const:6e16b8:8", "const:4:8"]]
- 006e16b8 ["CALL", null, ["callee:00442c90:8"]]
+ 006e1a68 ["INT_ADD", "register:40f0:8", ["const:6e1a68:8", "const:4:8"]]
+ 006e1a68 ["CALL", null, ["callee:00442c90:8"]]
- 006e1750 ["COPY", "tmp:0:8", ["const:427:8"]]
- 006e1750 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006e1750 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006e1750 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006e1b00 ["COPY", "tmp:0:8", ["const:471:8"]]
+ 006e1b00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006e1b00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006e1b00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006e17bc ["INT_ADD", "register:40f0:8", ["const:6e17bc:8", "const:4:8"]]
- 006e17bc ["CALL", null, ["callee:0047e96c:8"]]
+ 006e1b6c ["INT_ADD", "register:40f0:8", ["const:6e1b6c:8", "const:4:8"]]
+ 006e1b6c ["CALL", null, ["callee:0047e96c:8"]]
~~~


<a id="compare-40ab66dba3f07be9d5e0ac24a536bc9a"></a>

### [`006e1f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e1/006e1f00.md) → [`006e22b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e2/006e22b0.md) FUN_006e22b0

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 11件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046ee98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee98.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)
- 新版 呼出元 1件 [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 11件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046f1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f1b8.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.69% / 新版 99.69%

優先判定に残った影響 `call_target` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e2800",
      "incomplete_value": true,
      "site": "006e2808",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "006e2450",
      "incomplete_value": true,
      "site": "006e2458",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 41,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e23b8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e2008",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 14,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e24c4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e2114",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 30,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006e22e4",
      "DATA",
      [
        "storage",
        "0042efb0",
        null,
        "byte[39]"
      ]
    ],
    [
      "006e2308",
      "DATA",
      [
        "storage",
        "004326e0",
        null,
        "dword"
      ]
    ],
    [
      "006e2320",
      "DATA",
      [
        "storage",
        "004316b4",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "006e22e4",
      "DATA",
      [
        "storage",
        "0042efb0",
        null,
        "dword"
      ]
    ],
    [
      "006e2308",
      "DATA",
      [
        "storage",
        "004326e0",
        null,
        "byte[27]"
      ]
    ],
    [
      "006e2320",
      "DATA",
      [
        "storage",
        "004316b4",
        null,
        "byte[19]"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e2008 ["INT_ADD", "register:40f0:8", ["const:6e2008:8", "const:4:8"]]
- 006e2008 ["CALL", null, ["ram:47ad34:8"]]
+ 006e23b8 ["INT_ADD", "register:40f0:8", ["const:6e23b8:8", "const:4:8"]]
+ 006e23b8 ["CALL", null, ["ram:47b054:8"]]
- 006e2114 ["INT_ADD", "register:40f0:8", ["const:6e2114:8", "const:4:8"]]
- 006e2114 ["CALL", null, ["ram:47ad34:8"]]
+ 006e24c4 ["INT_ADD", "register:40f0:8", ["const:6e24c4:8", "const:4:8"]]
+ 006e24c4 ["CALL", null, ["ram:47b054:8"]]
- 006e1f14 ["INT_ADD", "register:40f0:8", ["const:6e1f14:8", "const:4:8"]]
- 006e1f14 ["CALL", null, ["callee:008524fc:8"]]
+ 006e22c4 ["INT_ADD", "register:40f0:8", ["const:6e22c4:8", "const:4:8"]]
+ 006e22c4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d98b33304f4b2bc331faa2b0c1ecd023"></a>

### [`006e2a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e2/006e2a48.md) → [`006e2df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e2/006e2df8.md) FUN_006e2df8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006e2ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e2/006e2ccc.md) · 呼出先 11件 [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`004879dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/004879dc.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`006e307c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e3/006e307c.md) · 呼出先 11件 [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487cfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487cfc.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

変更の種類 comparison, comparison_count, constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 89.36% / 新版 89.36%

優先判定に残った影響 `store_value` 2件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006e2e34",
      "incomplete_value": false,
      "site": "006e2e40",
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
      "definition_site": "006e2a84",
      "incomplete_value": false,
      "site": "006e2a90",
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
      "definition_site": "006e2e38",
      "incomplete_value": true,
      "site": "006e2e4c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3ef:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e2a88",
      "incomplete_value": true,
      "site": "006e2a9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:324:8"
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
      "definition_site": "006e2fac",
      "incomplete_value": true,
      "site": "006e2fb0",
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
      "006e2e38",
      "READ",
      [
        "storage",
        "002a2324",
        null,
        "string"
      ]
    ],
    [
      "006e2e40",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006e2bcc",
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
      "006e2e38",
      "READ",
      [
        "storage",
        "002a23ef",
        null,
        "string"
      ]
    ],
    [
      "006e2e40",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "006e2f7c",
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
- 006e2a74 ["INT_ADD", "register:40f0:8", ["const:6e2a74:8", "const:4:8"]]
- 006e2a74 ["CALL", null, ["callee:00488180:8"]]
+ 006e2e24 ["INT_ADD", "register:40f0:8", ["const:6e2e24:8", "const:4:8"]]
+ 006e2e24 ["CALL", null, ["callee:00488180:8"]]
- 006e2a7c ["COPY", "tmp:0:8", ["const:324:8"]]
- 006e2a7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006e2a7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006e2a7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006e2e2c ["COPY", "tmp:0:8", ["const:3ef:8"]]
+ 006e2e2c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006e2e2c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006e2e2c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006e2a80 ["COPY", "register:4040:8", ["const:c64000:8"]]
~~~


<a id="compare-2a691c4f28f3896fc1f18e2b73e48e63"></a>

### [`006e2ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e2/006e2ccc.md) → [`006e307c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e3/006e307c.md) FUN_006e307c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 22件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md) [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md)
- 新版 呼出元 1件 [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) · 呼出先 22件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0046ead0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ead0.md) [`0046eae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eae0.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 91.37% / 新版 91.37%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 7件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e3154",
      "incomplete_value": true,
      "site": "006e3154",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e3264",
      "incomplete_value": true,
      "site": "006e3264",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:81:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "006e34a4",
      "incomplete_value": false,
      "site": "006e34a4",
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
      "006e30d0",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006e3144",
      "READ",
      [
        "storage",
        "002c1427",
        null,
        "string"
      ]
    ],
    [
      "006e3198",
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
      "006e30d0",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "006e3144",
      "READ",
      [
        "storage",
        "002c1471",
        null,
        "string"
      ]
    ],
    [
      "006e3198",
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
- 006e2dfc ["INT_ADD", "register:40f0:8", ["const:6e2dfc:8", "const:4:8"]]
- 006e2dfc ["CALL", null, ["callee:0047e96c:8"]]
+ 006e31ac ["INT_ADD", "register:40f0:8", ["const:6e31ac:8", "const:4:8"]]
+ 006e31ac ["CALL", null, ["callee:0047e96c:8"]]
- 006e30d0 ["INT_ADD", "register:40f0:8", ["const:6e30d0:8", "const:4:8"]]
- 006e30d0 ["CALL", null, ["callee:00c58ef0:8"]]
+ 006e3480 ["INT_ADD", "register:40f0:8", ["const:6e3480:8", "const:4:8"]]
+ 006e3480 ["CALL", null, ["callee:00c58ef0:8"]]
- 006e310c ["INT_ADD", "register:40f0:8", ["const:6e310c:8", "const:4:8"]]
- 006e310c ["CALL", null, ["callee:00c58ed0:8"]]
+ 006e34bc ["INT_ADD", "register:40f0:8", ["const:6e34bc:8", "const:4:8"]]
+ 006e34bc ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-7dcb0aa2c668e68ebf4c9e6440ef9d2a"></a>

### [`006e32b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e3/006e32b0.md) → [`006e3660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e3/006e3660.md) FUN_006e3660

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 5件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046ee98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee98.md) [`00470120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470120.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) · 呼出先 5件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046f1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f1b8.md) [`00470440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470440.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e36c0",
      "incomplete_value": true,
      "site": "006e36d4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e3310",
      "incomplete_value": true,
      "site": "006e3324",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:fd0:8"
              ]
            ]
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
      "006e36c0",
      "READ",
      [
        "storage",
        "002c3fd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006e36c0",
      "READ",
      [
        "storage",
        "002c4020",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e32c8 ["INT_ADD", "register:40f0:8", ["const:6e32c8:8", "const:4:8"]]
- 006e32c8 ["CALL", null, ["callee:008524fc:8"]]
+ 006e3678 ["INT_ADD", "register:40f0:8", ["const:6e3678:8", "const:4:8"]]
+ 006e3678 ["CALL", null, ["callee:008524fc:8"]]
- 006e32cc ["INT_ADD", "register:40f0:8", ["const:6e32cc:8", "const:4:8"]]
- 006e32cc ["CALL", null, ["callee:0046cd24:8"]]
+ 006e367c ["INT_ADD", "register:40f0:8", ["const:6e367c:8", "const:4:8"]]
+ 006e367c ["CALL", null, ["callee:0046cd24:8"]]
- 006e32e4 ["INT_ADD", "register:40f0:8", ["const:6e32e4:8", "const:4:8"]]
- 006e32e4 ["CALL", null, ["callee:0046db10:8"]]
+ 006e3694 ["INT_ADD", "register:40f0:8", ["const:6e3694:8", "const:4:8"]]
+ 006e3694 ["CALL", null, ["callee:0046db10:8"]]
~~~


<a id="compare-e4d44348167aad1f27291e2a3fd7d113"></a>

### [`006e3378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e3/006e3378.md) → [`006e3728`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e3/006e3728.md) FUN_006e3728

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 11件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046ee98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee98.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)
- 新版 呼出元 1件 [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 11件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046f1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f1b8.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.69% / 新版 99.69%

優先判定に残った影響 `call_target` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e3c60",
      "incomplete_value": true,
      "site": "006e3c68",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "006e38b0",
      "incomplete_value": true,
      "site": "006e38b8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 41,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e3818",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e3468",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 13,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e3924",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e3574",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "006e3768",
      "DATA",
      [
        "storage",
        "004326e0",
        null,
        "dword"
      ]
    ],
    [
      "006e3780",
      "DATA",
      [
        "storage",
        "004316b4",
        null,
        "dword"
      ]
    ],
    [
      "006e3794",
      "DATA",
      [
        "storage",
        "00431680",
        null,
        "byte[31]"
      ]
    ]
  ],
  "added": [
    [
      "006e3768",
      "DATA",
      [
        "storage",
        "004326e0",
        null,
        "byte[27]"
      ]
    ],
    [
      "006e3780",
      "DATA",
      [
        "storage",
        "004316b4",
        null,
        "byte[19]"
      ]
    ],
    [
      "006e3794",
      "DATA",
      [
        "storage",
        "00431680",
        null,
        "byte[23]"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e3468 ["INT_ADD", "register:40f0:8", ["const:6e3468:8", "const:4:8"]]
- 006e3468 ["CALL", null, ["ram:47ad34:8"]]
+ 006e3818 ["INT_ADD", "register:40f0:8", ["const:6e3818:8", "const:4:8"]]
+ 006e3818 ["CALL", null, ["ram:47b054:8"]]
- 006e3574 ["INT_ADD", "register:40f0:8", ["const:6e3574:8", "const:4:8"]]
- 006e3574 ["CALL", null, ["ram:47ad34:8"]]
+ 006e3924 ["INT_ADD", "register:40f0:8", ["const:6e3924:8", "const:4:8"]]
+ 006e3924 ["CALL", null, ["ram:47b054:8"]]
- 006e338c ["INT_ADD", "register:40f0:8", ["const:6e338c:8", "const:4:8"]]
- 006e338c ["CALL", null, ["callee:008524fc:8"]]
+ 006e373c ["INT_ADD", "register:40f0:8", ["const:6e373c:8", "const:4:8"]]
+ 006e373c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-37db19f38b506f563f0e4be780d66889"></a>

### [`006e4538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e4538.md) → [`006e48e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e4/006e48e8.md) FUN_006e48e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006e4dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e4dc4.md) [`006e5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e5dc8.md) · 呼出先 16件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 2件 [`006e5174`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e5/006e5174.md) [`006e6178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e6/006e6178.md) · 呼出先 16件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 84.33% / 新版 84.33%

優先判定に残った影響 `call_argument_candidate` 12件, `store_destination` 14件, `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e4954",
      "incomplete_value": true,
      "site": "006e4960",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e49cc",
      "incomplete_value": true,
      "site": "006e49d8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e49dc",
      "incomplete_value": true,
      "site": "006e49dc",
      "value": [
        "LOAD",
        "8",
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
      "006e4954",
      "READ",
      [
        "storage",
        "002c2490",
        null,
        null
      ]
    ],
    [
      "006e498c",
      "DATA",
      [
        "storage",
        "00430ee8",
        null,
        "byte[19]"
      ]
    ],
    [
      "006e49a8",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "006e4954",
      "READ",
      [
        "storage",
        "002c24e0",
        null,
        null
      ]
    ],
    [
      "006e498c",
      "DATA",
      [
        "storage",
        "00430ee8",
        null,
        "qword"
      ]
    ],
    [
      "006e49a8",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e45a4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:490:8"]]
- 006e45a4 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 006e45a4 ["COPY", "register:5010:8", ["const:0:8"]]
- 006e45a4 ["COPY", "register:5018:8", ["const:0:8"]]
+ 006e4954 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4e0:8"]]
+ 006e4954 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 006e4954 ["COPY", "register:5010:8", ["const:0:8"]]
+ 006e4954 ["COPY", "register:5018:8", ["const:0:8"]]
- 006e45d8 ["INT_ADD", "register:40f0:8", ["const:6e45d8:8", "const:4:8"]]
- 006e45d8 ["CALL", null, ["callee:008524fc:8"]]
+ 006e4988 ["INT_ADD", "register:40f0:8", ["const:6e4988:8", "const:4:8"]]
+ 006e4988 ["CALL", null, ["callee:008524fc:8"]]
- 006e4630 ["INT_ADD", "register:40f0:8", ["const:6e4630:8", "const:4:8"]]
- 006e4630 ["CALL", null, ["callee:008524fc:8"]]
+ 006e49e0 ["INT_ADD", "register:40f0:8", ["const:6e49e0:8", "const:4:8"]]
+ 006e49e0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-763f88c1da538fbbef9923842a24fffa"></a>

### [`006e4dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e4dc4.md) → [`006e5174`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e5/006e5174.md) FUN_006e5174

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 16件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006b2488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2488.md) [`006c0d6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0d6c.md) [`006c0dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0dc8.md) [`006c0f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f84.md)
- 新版 呼出元 1件 [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 16件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`006b2838`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2838.md) [`006c111c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c1/006c111c.md) [`006c1178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c1/006c1178.md) [`006c1334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c1/006c1334.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_value` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006e56ec",
      "incomplete_value": false,
      "site": "006e56f0",
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
            "const:ab8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e533c",
      "incomplete_value": false,
      "site": "006e5340",
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
    "ordinal": 57,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006e51b8",
      "incomplete_value": true,
      "site": "006e51b8",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e51c0",
      "incomplete_value": false,
      "site": "006e51d4",
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
      "006e51b4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006e51c0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e51c8",
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
      "006e51b4",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006e51c0",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e51c8",
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
- 006e4e24 ["INT_ADD", "register:40f0:8", ["const:6e4e24:8", "const:4:8"]]
- 006e4e24 ["CALL", null, ["callee:00c596b0:8"]]
+ 006e51d4 ["INT_ADD", "register:40f0:8", ["const:6e51d4:8", "const:4:8"]]
+ 006e51d4 ["CALL", null, ["callee:00c596b0:8"]]
- 006e5040 ["INT_ADD", "register:40f0:8", ["const:6e5040:8", "const:4:8"]]
- 006e5040 ["CALL", null, ["ram:6c0d6c:8"]]
+ 006e53f0 ["INT_ADD", "register:40f0:8", ["const:6e53f0:8", "const:4:8"]]
+ 006e53f0 ["CALL", null, ["ram:6c111c:8"]]
- 006e4e00 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 006e51b0 ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-a635456bfce26a5411d5b0a403db365b"></a>

### [`006e5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e5dc8.md) → [`006e6178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e6/006e6178.md) FUN_006e6178

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 59件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440b40.md) [`0044fcfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044fcfc.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)
- 新版 呼出元 1件 [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 59件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00440e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440e60.md) [`0045001c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/0045001c.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.04% / 新版 96.04%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 16件, `call_target` 8件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006e6a50",
      "incomplete_value": false,
      "site": "006e6a50",
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
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e66a0",
      "incomplete_value": false,
      "site": "006e66a0",
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
    "ordinal": 40,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006e6b24",
      "incomplete_value": false,
      "site": "006e6b24",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e6774",
      "incomplete_value": false,
      "site": "006e6774",
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
    "ordinal": 44,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006e6c84",
      "incomplete_value": false,
      "site": "006e6c8c",
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
            "const:cb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e68d4",
      "incomplete_value": false,
      "site": "006e68dc",
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
    "ordinal": 59,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006e61b4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006e61c0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e61c8",
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
      "006e61b4",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006e61c0",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e61c8",
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
- 006e5e20 ["INT_ADD", "register:40f0:8", ["const:6e5e20:8", "const:4:8"]]
- 006e5e20 ["CALL", null, ["callee:00c596b0:8"]]
+ 006e61d0 ["INT_ADD", "register:40f0:8", ["const:6e61d0:8", "const:4:8"]]
+ 006e61d0 ["CALL", null, ["callee:00c596b0:8"]]
- 006e6058 ["INT_ADD", "register:40f0:8", ["const:6e6058:8", "const:4:8"]]
- 006e6058 ["CALL", null, ["ram:6c0f90:8"]]
+ 006e6408 ["INT_ADD", "register:40f0:8", ["const:6e6408:8", "const:4:8"]]
+ 006e6408 ["CALL", null, ["ram:6c1340:8"]]
- 006e607c ["INT_ADD", "register:40f0:8", ["const:6e607c:8", "const:4:8"]]
- 006e607c ["CALL", null, ["callee:0043e138:8"]]
+ 006e642c ["INT_ADD", "register:40f0:8", ["const:6e642c:8", "const:4:8"]]
+ 006e642c ["CALL", null, ["callee:0043e138:8"]]
~~~


<a id="compare-c6e69710ce35effa52ba2cddec269b21"></a>

### [`006e7358`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e7/006e7358.md) → [`006e7708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e7/006e7708.md) FUN_006e7708

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006452d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00645/006452d4.md) [`006e5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e5dc8.md) · 呼出先 13件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md)
- 新版 呼出元 2件 [`00645684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00645/00645684.md) [`006e6178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e6/006e6178.md) · 呼出先 13件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085ab50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab50.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.29% / 新版 99.29%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e79e8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e7638",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "006e7bf8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e7848",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "006e7d60",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e79b0",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "006e7790",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ],
    [
      "006e77a4",
      "DATA",
      [
        "storage",
        "0039b1b8",
        null,
        "dword"
      ]
    ],
    [
      "006e77e0",
      "READ",
      [
        "storage",
        "002c4198",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006e7790",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ],
    [
      "006e77a4",
      "DATA",
      [
        "storage",
        "0039b1b8",
        "fde_0039b1b8",
        "dword"
      ]
    ],
    [
      "006e77e0",
      "READ",
      [
        "storage",
        "002c41e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e7638 ["INT_ADD", "register:40f0:8", ["const:6e7638:8", "const:4:8"]]
- 006e7638 ["CALL", null, ["ram:47ad34:8"]]
+ 006e79e8 ["INT_ADD", "register:40f0:8", ["const:6e79e8:8", "const:4:8"]]
+ 006e79e8 ["CALL", null, ["ram:47b054:8"]]
- 006e7848 ["INT_ADD", "register:40f0:8", ["const:6e7848:8", "const:4:8"]]
- 006e7848 ["CALL", null, ["ram:47ad34:8"]]
+ 006e7bf8 ["INT_ADD", "register:40f0:8", ["const:6e7bf8:8", "const:4:8"]]
+ 006e7bf8 ["CALL", null, ["ram:47b054:8"]]
- 006e79b0 ["INT_ADD", "register:40f0:8", ["const:6e79b0:8", "const:4:8"]]
- 006e79b0 ["CALL", null, ["ram:47ad34:8"]]
+ 006e7d60 ["INT_ADD", "register:40f0:8", ["const:6e7d60:8", "const:4:8"]]
+ 006e7d60 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-70eef47aa40742a4242481d48c5ff5ca"></a>

### [`006e79e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e7/006e79e8.md) → [`006e7d98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e7/006e7d98.md) FUN_006e7d98

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006f8a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f8/006f8a60.md) · 呼出先 12件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md)
- 新版 呼出元 1件 [`006f8e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f8/006f8e10.md) · 呼出先 12件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cde4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cde4.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.67% / 新版 97.67%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006e7dc8",
      "incomplete_value": true,
      "site": "006e7dc8",
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e7dd0",
      "incomplete_value": false,
      "site": "006e7de0",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e7dd8",
      "incomplete_value": false,
      "site": "006e7de0",
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
      "006e7dc4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006e7dd0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e7dd8",
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
      "006e7dc4",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006e7dd0",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e7dd8",
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
- 006e7a30 ["INT_ADD", "register:40f0:8", ["const:6e7a30:8", "const:4:8"]]
- 006e7a30 ["CALL", null, ["callee:00c596b0:8"]]
+ 006e7de0 ["INT_ADD", "register:40f0:8", ["const:6e7de0:8", "const:4:8"]]
+ 006e7de0 ["CALL", null, ["callee:00c596b0:8"]]
- 006e7a0c ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 006e7dbc ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 006e7a14 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 006e7a14 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 006e7dc4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 006e7dc4 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2c43da1ac0e9838acf7d913e4470267f"></a>

### [`006e7c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e7/006e7c98.md) → [`006e8048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e8/006e8048.md) FUN_006e8048

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006e79e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e7/006e79e8.md) · 呼出先 15件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`0046a290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a290.md) [`0046af58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af58.md)
- 新版 呼出元 1件 [`006e7d98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e7/006e7d98.md) · 呼出先 15件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`0046a5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046a5b0.md) [`0046b278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b278.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.79% / 新版 99.79%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006e809c",
      "incomplete_value": true,
      "site": "006e809c",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e80a4",
      "incomplete_value": false,
      "site": "006e80b8",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e80ac",
      "incomplete_value": false,
      "site": "006e80b8",
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
      "006e8098",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006e80a4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e80ac",
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
      "006e8098",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006e80a4",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e80ac",
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
- 006e7d08 ["INT_ADD", "register:40f0:8", ["const:6e7d08:8", "const:4:8"]]
- 006e7d08 ["CALL", null, ["callee:00c596b0:8"]]
+ 006e80b8 ["INT_ADD", "register:40f0:8", ["const:6e80b8:8", "const:4:8"]]
+ 006e80b8 ["CALL", null, ["callee:00c596b0:8"]]
- 006e7ce4 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 006e8094 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 006e7ce8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 006e7ce8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 006e8098 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 006e8098 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-11888da7a991fdd32790e05398dd7153"></a>

### [`006e8c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e8/006e8c74.md) → [`006e9024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e9/006e9024.md) FUN_006e9024

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 19件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 1件 [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) · 呼出先 19件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

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
      "definition_site": "006e9324",
      "incomplete_value": true,
      "site": "006e9334",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 41,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e9338",
      "incomplete_value": true,
      "site": "006e9338",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 42,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e932c",
      "incomplete_value": true,
      "site": "006e933c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "006e9060",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006e906c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e9074",
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
      "006e9060",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006e906c",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e9074",
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
- 006e8cd0 ["INT_ADD", "register:40f0:8", ["const:6e8cd0:8", "const:4:8"]]
- 006e8cd0 ["CALL", null, ["callee:00c596b0:8"]]
+ 006e9080 ["INT_ADD", "register:40f0:8", ["const:6e9080:8", "const:4:8"]]
+ 006e9080 ["CALL", null, ["callee:00c596b0:8"]]
- 006e8f50 ["COPY", "tmp:0:8", ["const:38:8"]]
- 006e8f50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006e8f50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006e8f50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006e9300 ["COPY", "tmp:0:8", ["const:ff8:8"]]
+ 006e9300 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006e9300 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006e9300 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006e901c ["INT_ADD", "register:40f0:8", ["const:6e901c:8", "const:4:8"]]
- 006e901c ["CALL", null, ["callee:0047e96c:8"]]
+ 006e93cc ["INT_ADD", "register:40f0:8", ["const:6e93cc:8", "const:4:8"]]
+ 006e93cc ["CALL", null, ["callee:0047e96c:8"]]
~~~


<a id="compare-f71f7d321653592d0617738be9dcf435"></a>

### [`006e9ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e9ebc.md) → [`006ea26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea26c.md) FUN_006ea26c

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006f8a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f8/006f8a60.md) · 呼出先 13件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md)
- 新版 呼出元 1件 [`006f8e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f8/006f8e10.md) · 呼出先 13件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046b26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b26c.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.05% / 新版 99.05%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006ea2ac",
      "incomplete_value": true,
      "site": "006ea2ac",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006ea2b4",
      "incomplete_value": false,
      "site": "006ea2c8",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006ea2bc",
      "incomplete_value": false,
      "site": "006ea2c8",
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
      "definition_site": "006e9f0c",
      "incomplete_value": false,
      "site": "006e9f18",
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
      "006ea2a8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006ea2b4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006ea2bc",
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
      "006ea2a8",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006ea2b4",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006ea2bc",
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
- 006e9f18 ["INT_ADD", "register:40f0:8", ["const:6e9f18:8", "const:4:8"]]
- 006e9f18 ["CALL", null, ["callee:00c596b0:8"]]
+ 006ea2c8 ["INT_ADD", "register:40f0:8", ["const:6ea2c8:8", "const:4:8"]]
+ 006ea2c8 ["CALL", null, ["callee:00c596b0:8"]]
- 006e9ef4 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 006ea2a4 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 006e9ef8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 006e9ef8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 006ea2a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 006ea2a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ec0dbf847a52f3f011750a7e9c6d6e47"></a>

### [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) → [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) FUN_006ea990

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 8件 [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) [`006ea5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5d8.md) [`006f16e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f1/006f16e0.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) [`006fb968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb968.md) · 呼出先 52件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)
- 新版 呼出元 8件 [`006b3fac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3fac.md) [`006ea988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea988.md) [`006f1a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f1/006f1a90.md) [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) [`006fbd18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fb/006fbd18.md) · 呼出先 52件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 92.52% / 新版 92.52%

優先判定に残った影響 `call_argument_candidate` 55件, `call_target` 5件, `store_destination` 35件, `store_value` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006eafb4",
      "incomplete_value": true,
      "site": "006eafc4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b8f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006eac04",
      "incomplete_value": true,
      "site": "006eac14",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ab8:8"
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
      "definition_site": "006eafc8",
      "incomplete_value": true,
      "site": "006eafc8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006eac18",
      "incomplete_value": true,
      "site": "006eac18",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 61,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006eb290",
      "incomplete_value": true,
      "site": "006eb29c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006eaee0",
      "incomplete_value": true,
      "site": "006eaeec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 79,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006eab64",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006eabd8",
      "PARAM",
      [
        "storage",
        "00ca5000",
        null,
        "undefined8"
      ]
    ],
    [
      "006eacd4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "006eab64",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "006eabd8",
      "PARAM",
      [
        "storage",
        "00ca5fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "006eacd4",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 006eafc8 ["INT_ADD", "register:40f0:8", ["const:6eafc8:8", "const:4:8"]]
- 006eafc8 ["CALL", null, ["callee:008524fc:8"]]
+ 006eb378 ["INT_ADD", "register:40f0:8", ["const:6eb378:8", "const:4:8"]]
+ 006eb378 ["CALL", null, ["callee:008524fc:8"]]
- 006ebcd0 ["INT_ADD", "register:40f0:8", ["const:6ebcd0:8", "const:4:8"]]
- 006ebcd0 ["CALL", null, ["callee:0046db10:8"]]
+ 006ec080 ["INT_ADD", "register:40f0:8", ["const:6ec080:8", "const:4:8"]]
+ 006ec080 ["CALL", null, ["callee:0046db10:8"]]
- 006ebff8 ["INT_ADD", "register:40f0:8", ["const:6ebff8:8", "const:4:8"]]
- 006ebff8 ["CALL", null, ["callee:008b89cc:8"]]
+ 006ec3a8 ["INT_ADD", "register:40f0:8", ["const:6ec3a8:8", "const:4:8"]]
+ 006ec3a8 ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-70c9c9474d7330a5fcf776b98f84f9f3"></a>

### [`006ecde8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ec/006ecde8.md) → [`006ed198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ed/006ed198.md) FUN_006ed198

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 17件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044ab98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ab98.md) [`0044abc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044abc0.md) [`0044d730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044d730.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md)
- 新版 呼出元 2件 [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0062be50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062b/0062be50.md) [`0071f108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071f/0071f108.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.05% / 新版 98.05%

優先判定に残った影響 `call_argument_candidate` 9件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006ed704",
      "incomplete_value": true,
      "site": "006ed704",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:101:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ed354",
      "incomplete_value": true,
      "site": "006ed354",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:34:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 65,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006ed708",
      "incomplete_value": true,
      "site": "006ed708",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006ed358",
      "incomplete_value": true,
      "site": "006ed358",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 66,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006ed258",
      "incomplete_value": false,
      "site": "006ed260",
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
            "const:a42:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ecea8",
      "incomplete_value": false,
      "site": "006eceb0",
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
            "const:96b:8"
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
      "006ed1f8",
      "DATA",
      [
        "storage",
        "004369f0",
        null,
        "byte[47]"
      ]
    ],
    [
      "006ed210",
      "DATA",
      [
        "storage",
        "004369f0",
        null,
        "byte[47]"
      ]
    ],
    [
      "006ed258",
      "PARAM",
      [
        "storage",
        "002b096b",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006ed1f8",
      "DATA",
      [
        "storage",
        "004369f0",
        null,
        "qword"
      ]
    ],
    [
      "006ed210",
      "DATA",
      [
        "storage",
        "004369f0",
        null,
        "qword"
      ]
    ],
    [
      "006ed258",
      "PARAM",
      [
        "storage",
        "002b0a42",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006eceb0 ["INT_ADD", "register:40f0:8", ["const:6eceb0:8", "const:4:8"]]
- 006eceb0 ["CALL", null, ["callee:00c59010:8"]]
+ 006ed260 ["INT_ADD", "register:40f0:8", ["const:6ed260:8", "const:4:8"]]
+ 006ed260 ["CALL", null, ["callee:00c59010:8"]]
- 006ecf4c ["INT_ADD", "register:40f0:8", ["const:6ecf4c:8", "const:4:8"]]
- 006ecf4c ["CALL", null, ["callee:00c59010:8"]]
+ 006ed2fc ["INT_ADD", "register:40f0:8", ["const:6ed2fc:8", "const:4:8"]]
+ 006ed2fc ["CALL", null, ["callee:00c59010:8"]]
- 006ecfa8 ["INT_ADD", "register:40f0:8", ["const:6ecfa8:8", "const:4:8"]]
- 006ecfa8 ["CALL", null, ["callee:008524fc:8"]]
+ 006ed358 ["INT_ADD", "register:40f0:8", ["const:6ed358:8", "const:4:8"]]
+ 006ed358 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-f0426a7ab24e31ecd7628632bff327bf"></a>

### [`006eed04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ee/006eed04.md) → [`006ef0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ef/006ef0b4.md) FUN_006ef0b4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 18件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`006dbe00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006dbe00.md) [`006e4440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e4440.md) [`006e4b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e4b1c.md)
- 新版 呼出元 1件 [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 18件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`006dc1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006dc/006dc1b0.md) [`006e47f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e4/006e47f0.md) [`006e4ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e4/006e4ecc.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.96% / 新版 95.96%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006ef4b8",
      "incomplete_value": false,
      "site": "006ef4c0",
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
            "const:bb6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ef108",
      "incomplete_value": false,
      "site": "006ef110",
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
    "ordinal": 37,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006ef4dc",
      "incomplete_value": false,
      "site": "006ef4e8",
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
            "const:98e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ef12c",
      "incomplete_value": false,
      "site": "006ef138",
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
            "const:8b0:8"
          ]
        ]
      ]
    },
    "ordinal": 40,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006ef500",
      "incomplete_value": false,
      "site": "006ef508",
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
            "const:ca6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ef150",
      "incomplete_value": false,
      "site": "006ef158",
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
      "006ef1b0",
      "DATA",
      [
        "storage",
        "00436d88",
        null,
        "byte[67]"
      ]
    ],
    [
      "006ef1d8",
      "DATA",
      [
        "storage",
        "00ca3fa0",
        null,
        null
      ]
    ],
    [
      "006ef288",
      "DATA",
      [
        "storage",
        "0043adf4",
        null,
        "byte[35]"
      ]
    ]
  ],
  "added": [
    [
      "006ef1b0",
      "DATA",
      [
        "storage",
        "00436d88",
        null,
        "uleb128"
      ]
    ],
    [
      "006ef1d8",
      "DATA",
      [
        "storage",
        "00ca4f70",
        null,
        null
      ]
    ],
    [
      "006ef288",
      "DATA",
      [
        "storage",
        "0043adf4",
        null,
        "byte[27]"
      ]
    ]
  ]
}
~~~


~~~diff
- 006eee3c ["INT_ADD", "register:40f0:8", ["const:6eee3c:8", "const:4:8"]]
- 006eee3c ["CALL", null, ["callee:006dc1b0:8"]]
+ 006ef1ec ["INT_ADD", "register:40f0:8", ["const:6ef1ec:8", "const:4:8"]]
+ 006ef1ec ["CALL", null, ["callee:006dc1b0:8"]]
- 006ef644 ["INT_ADD", "register:40f0:8", ["const:6ef644:8", "const:4:8"]]
- 006ef644 ["CALL", null, ["callee:00442c90:8"]]
+ 006ef9f4 ["INT_ADD", "register:40f0:8", ["const:6ef9f4:8", "const:4:8"]]
+ 006ef9f4 ["CALL", null, ["callee:00442c90:8"]]
- 006ef6c0 ["INT_ADD", "register:40f0:8", ["const:6ef6c0:8", "const:4:8"]]
- 006ef6c0 ["CALL", null, ["callee:006e4ecc:8"]]
+ 006efa70 ["INT_ADD", "register:40f0:8", ["const:6efa70:8", "const:4:8"]]
+ 006efa70 ["CALL", null, ["callee:006e4ecc:8"]]
~~~


<a id="compare-cd9df25b5da14a486b81b3a9e03d7335"></a>

### [`006f06ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f0/006f06ac.md) → [`006f0a5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f0/006f0a5c.md) FUN_006f0a5c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006f16e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f1/006f16e0.md) · 呼出先 23件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md) [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md)
- 新版 呼出元 1件 [`006f1a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f1/006f1a90.md) · 呼出先 23件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046ead0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ead0.md) [`0046eae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eae0.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md) [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.68% / 新版 89.68%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 32件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006f0ae0",
      "incomplete_value": true,
      "site": "006f0af4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:720:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006f0aec",
      "incomplete_value": true,
      "site": "006f0af8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f25:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006f0aec",
      "incomplete_value": true,
      "site": "006f0af8",
      "value": [
        "LOAD",
        "16",
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
      "006f0a94",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006f0aa0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006f0aa8",
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
      "006f0a94",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006f0aa0",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006f0aa8",
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
- 006f09f8 ["INT_ADD", "register:40f0:8", ["const:6f09f8:8", "const:4:8"]]
- 006f09f8 ["CALL", null, ["callee:00448254:8"]]
+ 006f0da8 ["INT_ADD", "register:40f0:8", ["const:6f0da8:8", "const:4:8"]]
+ 006f0da8 ["CALL", null, ["callee:00448254:8"]]
- 006f0a80 ["INT_ADD", "register:40f0:8", ["const:6f0a80:8", "const:4:8"]]
- 006f0a80 ["CALL", null, ["callee:00c58f20:8"]]
+ 006f0e30 ["INT_ADD", "register:40f0:8", ["const:6f0e30:8", "const:4:8"]]
+ 006f0e30 ["CALL", null, ["callee:00c58f20:8"]]
- 006f0ad4 ["INT_ADD", "register:40f0:8", ["const:6f0ad4:8", "const:4:8"]]
- 006f0ad4 ["CALL", null, ["callee:00c58f50:8"]]
+ 006f0e84 ["INT_ADD", "register:40f0:8", ["const:6f0e84:8", "const:4:8"]]
+ 006f0e84 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-cbdfcfbdda0a93d7457c21a36dcdb75e"></a>

### [`006f8a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f8/006f8a60.md) → [`006f8e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f8/006f8e10.md) FUN_006f8e10

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) · 呼出先 30件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md)
- 新版 呼出元 1件 [`006b3888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3888.md) · 呼出先 30件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`0046827c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046827c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.97% / 新版 97.97%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006f8e5c",
      "incomplete_value": true,
      "site": "006f8e5c",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006f8e64",
      "incomplete_value": false,
      "site": "006f8e74",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006f8e6c",
      "incomplete_value": false,
      "site": "006f8e74",
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
      "definition_site": "006f8abc",
      "incomplete_value": false,
      "site": "006f8ac4",
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
      "006f8e48",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006f8e64",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006f8e6c",
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
      "006f8e48",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006f8e64",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006f8e6c",
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
- 006f8ac4 ["INT_ADD", "register:40f0:8", ["const:6f8ac4:8", "const:4:8"]]
- 006f8ac4 ["CALL", null, ["callee:00c596b0:8"]]
+ 006f8e74 ["INT_ADD", "register:40f0:8", ["const:6f8e74:8", "const:4:8"]]
+ 006f8e74 ["CALL", null, ["callee:00c596b0:8"]]
- 006f8a8c ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 006f8e3c ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 006f8a98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 006f8a98 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 006f8e48 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 006f8e48 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-621f1f57a8c06a5c3dc5a0166457d5c2"></a>

### [`006f9f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f9/006f9f48.md) → [`006fa2f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fa/006fa2f8.md) FUN_006fa2f8

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
      "definition_site": "006fa31c",
      "incomplete_value": true,
      "site": "006fa31c",
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
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006f9f6c",
      "incomplete_value": true,
      "site": "006f9f6c",
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
            "const:9e8:8"
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
      "006fa31c",
      "DATA",
      [
        "storage",
        "00c769e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fa31c",
      "DATA",
      [
        "storage",
        "00c779b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006f9f5c ["INT_ADD", "register:40f0:8", ["const:6f9f5c:8", "const:4:8"]]
- 006f9f5c ["CALL", null, ["callee:00c58f30:8"]]
+ 006fa30c ["INT_ADD", "register:40f0:8", ["const:6fa30c:8", "const:4:8"]]
+ 006fa30c ["CALL", null, ["callee:00c58f30:8"]]
- 006f9f64 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fa314 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006f9f68 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 006f9f68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006f9f68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006f9f68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fa318 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 006fa318 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fa318 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fa318 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a009742c45f9f24a2ccbf26ac9783cd4"></a>

### [`006f9f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f9/006f9f7c.md) → [`006fa32c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fa/006fa32c.md) FUN_006fa32c

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
      "definition_site": "006fa338",
      "incomplete_value": false,
      "site": "006fa338",
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
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006f9f88",
      "incomplete_value": false,
      "site": "006f9f88",
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
      "006fa338",
      "DATA",
      [
        "storage",
        "00c769e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fa338",
      "DATA",
      [
        "storage",
        "00c779b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006f9f80 ["COPY", "register:4048:8", ["const:c76000:8"]]
+ 006fa330 ["COPY", "register:4048:8", ["const:c77000:8"]]
- 006f9f84 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 006f9f84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006f9f84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006f9f84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006fa334 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 006fa334 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006fa334 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006fa334 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-33207d8d0a7be6b2fa3eee62ba0a6744"></a>

### [`006f9f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f9/006f9f98.md) → [`006fa348`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fa/006fa348.md) FUN_006fa348

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "006fa360",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006f9fb0",
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
      "site": "006fa38c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006f9fdc",
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
      "006fa360",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fa38c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006fa360",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006fa38c",
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
- 006f9fb0 ["INT_ADD", "register:40f0:8", ["const:6f9fb0:8", "const:4:8"]]
- 006f9fb0 ["CALL", null, ["ram:47ad34:8"]]
+ 006fa360 ["INT_ADD", "register:40f0:8", ["const:6fa360:8", "const:4:8"]]
+ 006fa360 ["CALL", null, ["ram:47b054:8"]]
- 006f9fdc ["INT_ADD", "register:40f0:8", ["const:6f9fdc:8", "const:4:8"]]
- 006f9fdc ["CALL", null, ["ram:47ad34:8"]]
+ 006fa38c ["INT_ADD", "register:40f0:8", ["const:6fa38c:8", "const:4:8"]]
+ 006fa38c ["CALL", null, ["ram:47b054:8"]]
- 006f9fe8 ["INT_ADD", "register:40f0:8", ["const:6f9fe8:8", "const:4:8"]]
- 006f9fe8 ["CALL", null, ["callee:0047d134:8"]]
+ 006fa398 ["INT_ADD", "register:40f0:8", ["const:6fa398:8", "const:4:8"]]
+ 006fa398 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-fc7ebc0d214a2095784a51021e38d207"></a>

### [`006fa034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fa/006fa034.md) → [`006fa3e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fa/006fa3e4.md) FUN_006fa3e4

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
      "definition_site": "006fa408",
      "incomplete_value": false,
      "site": "006fa408",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fa408",
      "DATA",
      [
        "storage",
        "00c76a68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fa408",
      "DATA",
      [
        "storage",
        "00c77a38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fa048 ["INT_ADD", "register:40f0:8", ["const:6fa048:8", "const:4:8"]]
- 006fa048 ["CALL", null, ["callee:00c58f30:8"]]
+ 006fa3f8 ["INT_ADD", "register:40f0:8", ["const:6fa3f8:8", "const:4:8"]]
+ 006fa3f8 ["CALL", null, ["callee:00c58f30:8"]]
- 006fa050 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fa400 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fa054 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 006fa054 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fa054 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fa054 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fa404 ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 006fa404 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fa404 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fa404 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d757be9c016811fd5d050e666338b245"></a>

### [`006fa138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fa/006fa138.md) → [`006fa4e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fa/006fa4e8.md) FUN_006fa4e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`006dbbc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006dbbc4.md) [`006dbe00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006dbe00.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`006dbf74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006db/006dbf74.md) [`006dc1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006dc/006dc1b0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006fa4f4",
      "incomplete_value": false,
      "site": "006fa4f8",
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
      "006fa4f4",
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
      "006fa4f4",
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
- 006fa148 ["INT_ADD", "register:40f0:8", ["const:6fa148:8", "const:4:8"]]
- 006fa148 ["CALL", null, ["callee:0043bad8:8"]]
+ 006fa4f8 ["INT_ADD", "register:40f0:8", ["const:6fa4f8:8", "const:4:8"]]
+ 006fa4f8 ["CALL", null, ["callee:0043bad8:8"]]
- 006fa140 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 006fa4f0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 006fa144 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 006fa144 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006fa144 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006fa144 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006fa4f4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 006fa4f4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006fa4f4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006fa4f4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-7c1af4b3a3b2df1d8984d6f662cbc8fb"></a>

### [`006fb140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb140.md) → [`006fb4f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fb/006fb4f0.md) FUN_006fb4f0

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
      "definition_site": "006fb504",
      "incomplete_value": false,
      "site": "006fb508",
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
            "const:ab8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fb508",
      "DATA",
      [
        "storage",
        "00c76ae8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fb508",
      "DATA",
      [
        "storage",
        "00c77ab8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb14c ["INT_ADD", "register:40f0:8", ["const:6fb14c:8", "const:4:8"]]
- 006fb14c ["CALL", null, ["callee:00c58f30:8"]]
+ 006fb4fc ["INT_ADD", "register:40f0:8", ["const:6fb4fc:8", "const:4:8"]]
+ 006fb4fc ["CALL", null, ["callee:00c58f30:8"]]
- 006fb150 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fb500 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fb154 ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 006fb154 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fb154 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fb154 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fb504 ["COPY", "tmp:0:8", ["const:ab8:8"]]
+ 006fb504 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb504 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb504 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1acdebce7876947fa0b260b7f283a3c0"></a>

### [`006fb1e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb1e4.md) → [`006fb594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fb/006fb594.md) FUN_006fb594

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
      "definition_site": "006fb5b8",
      "incomplete_value": false,
      "site": "006fb5bc",
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
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fb5bc",
      "DATA",
      [
        "storage",
        "00c76b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fb5bc",
      "DATA",
      [
        "storage",
        "00c77b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb1f8 ["INT_ADD", "register:40f0:8", ["const:6fb1f8:8", "const:4:8"]]
- 006fb1f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 006fb5a8 ["INT_ADD", "register:40f0:8", ["const:6fb5a8:8", "const:4:8"]]
+ 006fb5a8 ["CALL", null, ["callee:00c58f30:8"]]
- 006fb204 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fb5b4 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fb208 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 006fb208 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fb208 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fb208 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fb5b8 ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 006fb5b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb5b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb5b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7dfc4ddf91016dd7b43176d93f1989c6"></a>

### [`006fb224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb224.md) → [`006fb5d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fb/006fb5d4.md) FUN_006fb5d4

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
      "definition_site": "006fb5d8",
      "incomplete_value": false,
      "site": "006fb5dc",
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
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fb228",
      "incomplete_value": false,
      "site": "006fb22c",
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
      "006fb5dc",
      "DATA",
      [
        "storage",
        "00c76b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fb5dc",
      "DATA",
      [
        "storage",
        "00c77b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb224 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fb5d4 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fb228 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 006fb228 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fb228 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fb228 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fb5d8 ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 006fb5d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb5d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb5d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5d40a94c06516a92b09073a2d2fff26e"></a>

### [`006fb24c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb24c.md) → [`006fb5fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fb/006fb5fc.md) FUN_006fb5fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 24件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 24件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.62% / 新版 95.62%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006fb720",
      "incomplete_value": true,
      "site": "006fb734",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fee:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006fb780",
      "incomplete_value": true,
      "site": "006fb780",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d15:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006fb784",
      "incomplete_value": true,
      "site": "006fb784",
      "value": [
        "LOAD",
        "8",
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
      "006fb648",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fb6ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ede3c"
      ]
    ],
    [
      "006fb6bc",
      "DATA",
      [
        "storage",
        "0042ef82",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "006fb648",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006fb6ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ee1ec"
      ]
    ],
    [
      "006fb6bc",
      "DATA",
      [
        "storage",
        "0042ef82",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb298 ["INT_ADD", "register:40f0:8", ["const:6fb298:8", "const:4:8"]]
- 006fb298 ["CALL", null, ["ram:47ad34:8"]]
+ 006fb648 ["INT_ADD", "register:40f0:8", ["const:6fb648:8", "const:4:8"]]
+ 006fb648 ["CALL", null, ["ram:47b054:8"]]
- 006fb2fc ["INT_ADD", "register:40f0:8", ["const:6fb2fc:8", "const:4:8"]]
- 006fb2fc ["CALL", null, ["ram:6ede3c:8"]]
+ 006fb6ac ["INT_ADD", "register:40f0:8", ["const:6fb6ac:8", "const:4:8"]]
+ 006fb6ac ["CALL", null, ["ram:6ee1ec:8"]]
- 006fb320 ["INT_ADD", "register:40f0:8", ["const:6fb320:8", "const:4:8"]]
- 006fb320 ["CALL", null, ["ram:63c5c8:8"]]
+ 006fb6d0 ["INT_ADD", "register:40f0:8", ["const:6fb6d0:8", "const:4:8"]]
+ 006fb6d0 ["CALL", null, ["ram:63c978:8"]]
~~~


<a id="compare-5ed1269bf87d8ea9b55b83f0f3e7ed8f"></a>

### [`006fb918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb918.md) → [`006fbcc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fb/006fbcc8.md) FUN_006fbcc8

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
      "definition_site": "006fbcec",
      "incomplete_value": false,
      "site": "006fbcec",
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
            "const:ba8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fbcec",
      "DATA",
      [
        "storage",
        "00c76bd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fbcec",
      "DATA",
      [
        "storage",
        "00c77ba8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb92c ["INT_ADD", "register:40f0:8", ["const:6fb92c:8", "const:4:8"]]
- 006fb92c ["CALL", null, ["callee:00c58f30:8"]]
+ 006fbcdc ["INT_ADD", "register:40f0:8", ["const:6fbcdc:8", "const:4:8"]]
+ 006fbcdc ["CALL", null, ["callee:00c58f30:8"]]
- 006fb934 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fbce4 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fb938 ["COPY", "tmp:0:8", ["const:bd8:8"]]
- 006fb938 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fb938 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fb938 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fbce8 ["COPY", "tmp:0:8", ["const:ba8:8"]]
+ 006fbce8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fbce8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fbce8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f4228e6f9fcd70211a1858421358ac6e"></a>

### [`006fb94c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb94c.md) → [`006fbcfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fb/006fbcfc.md) FUN_006fbcfc

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
      "definition_site": "006fbd08",
      "incomplete_value": false,
      "site": "006fbd08",
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
            "const:ba8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fbd08",
      "DATA",
      [
        "storage",
        "00c76bd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fbd08",
      "DATA",
      [
        "storage",
        "00c77ba8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb950 ["COPY", "register:4048:8", ["const:c76000:8"]]
+ 006fbd00 ["COPY", "register:4048:8", ["const:c77000:8"]]
- 006fb954 ["COPY", "tmp:0:8", ["const:bd8:8"]]
- 006fb954 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006fb954 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006fb954 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006fbd04 ["COPY", "tmp:0:8", ["const:ba8:8"]]
+ 006fbd04 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006fbd04 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006fbd04 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-292a62bd34b785d64decb15be4b0bcae"></a>

### [`006fb968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb968.md) → [`006fbd18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fb/006fbd18.md) FUN_006fbd18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006b247c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b247c.md) [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) [`006f0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f0/006f0558.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`006b282c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b282c.md) [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) [`006f0908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f0/006f0908.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.83% / 新版 96.83%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fbd44",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fb994",
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
      "site": "006fbdec",
      "value": [
        "leaf",
        "ram:6f0908:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fba3c",
      "value": [
        "leaf",
        "ram:6f0558:8"
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
      "006fbd44",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fbdec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0558"
      ]
    ]
  ],
  "added": [
    [
      "006fbd44",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006fbdec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0908"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb994 ["INT_ADD", "register:40f0:8", ["const:6fb994:8", "const:4:8"]]
- 006fb994 ["CALL", null, ["ram:47ad34:8"]]
+ 006fbd44 ["INT_ADD", "register:40f0:8", ["const:6fbd44:8", "const:4:8"]]
+ 006fbd44 ["CALL", null, ["ram:47b054:8"]]
- 006fba3c ["INT_ADD", "register:40f0:8", ["const:6fba3c:8", "const:4:8"]]
- 006fba3c ["CALL", null, ["ram:6f0558:8"]]
+ 006fbdec ["INT_ADD", "register:40f0:8", ["const:6fbdec:8", "const:4:8"]]
+ 006fbdec ["CALL", null, ["ram:6f0908:8"]]
- 006fb9a0 ["INT_ADD", "register:40f0:8", ["const:6fb9a0:8", "const:4:8"]]
- 006fb9a0 ["CALL", null, ["callee:0047d134:8"]]
+ 006fbd50 ["INT_ADD", "register:40f0:8", ["const:6fbd50:8", "const:4:8"]]
+ 006fbd50 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-e9b697fc941981e03c512c8db95bc772"></a>

### [`006fba90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fba90.md) → [`006fbe40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fb/006fbe40.md) FUN_006fbe40

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
      "definition_site": "006fbe60",
      "incomplete_value": false,
      "site": "006fbe64",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fbe64",
      "DATA",
      [
        "storage",
        "00c76c68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fbe64",
      "DATA",
      [
        "storage",
        "00c77c38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fbaa4 ["INT_ADD", "register:40f0:8", ["const:6fbaa4:8", "const:4:8"]]
- 006fbaa4 ["CALL", null, ["callee:00c58f30:8"]]
+ 006fbe54 ["INT_ADD", "register:40f0:8", ["const:6fbe54:8", "const:4:8"]]
+ 006fbe54 ["CALL", null, ["callee:00c58f30:8"]]
- 006fbaac ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fbe5c ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fbab0 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 006fbab0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fbab0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fbab0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fbe60 ["COPY", "tmp:0:8", ["const:c38:8"]]
+ 006fbe60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fbe60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fbe60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c727329db86eca1790f1b193931e77d2"></a>

### [`006fbac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fbac8.md) → [`006fbe78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fb/006fbe78.md) FUN_006fbe78

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
      "definition_site": "006fbe7c",
      "incomplete_value": false,
      "site": "006fbe80",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fbacc",
      "incomplete_value": false,
      "site": "006fbad0",
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
      "006fbe80",
      "DATA",
      [
        "storage",
        "00c76c68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fbe80",
      "DATA",
      [
        "storage",
        "00c77c38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fbac8 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fbe78 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fbacc ["COPY", "tmp:0:8", ["const:c68:8"]]
- 006fbacc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fbacc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fbacc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fbe7c ["COPY", "tmp:0:8", ["const:c38:8"]]
+ 006fbe7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fbe7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fbe7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ca1f6eb5e47bed8f506b4ec311ff9f77"></a>

### [`006fbcb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fbcb4.md) → [`006fc064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fc/006fc064.md) FUN_006fc064

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
      "definition_site": "006fc088",
      "incomplete_value": false,
      "site": "006fc088",
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
            "const:cb8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fc088",
      "DATA",
      [
        "storage",
        "00c76ce8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fc088",
      "DATA",
      [
        "storage",
        "00c77cb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fbcc8 ["INT_ADD", "register:40f0:8", ["const:6fbcc8:8", "const:4:8"]]
- 006fbcc8 ["CALL", null, ["callee:00c58f30:8"]]
+ 006fc078 ["INT_ADD", "register:40f0:8", ["const:6fc078:8", "const:4:8"]]
+ 006fc078 ["CALL", null, ["callee:00c58f30:8"]]
- 006fbcd0 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fc080 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fbcd4 ["COPY", "tmp:0:8", ["const:ce8:8"]]
- 006fbcd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fbcd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fbcd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fc084 ["COPY", "tmp:0:8", ["const:cb8:8"]]
+ 006fc084 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fc084 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fc084 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e8962e00244b7686241e59ad0efc2c1f"></a>

### [`006fbce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fbce8.md) → [`006fc098`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fc/006fc098.md) FUN_006fc098

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
      "definition_site": "006fc0a4",
      "incomplete_value": false,
      "site": "006fc0a4",
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
            "const:cb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fbcf4",
      "incomplete_value": false,
      "site": "006fbcf4",
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
      "006fc0a4",
      "DATA",
      [
        "storage",
        "00c76ce8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fc0a4",
      "DATA",
      [
        "storage",
        "00c77cb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fbcec ["COPY", "register:4048:8", ["const:c76000:8"]]
+ 006fc09c ["COPY", "register:4048:8", ["const:c77000:8"]]
- 006fbcf0 ["COPY", "tmp:0:8", ["const:ce8:8"]]
- 006fbcf0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006fbcf0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006fbcf0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006fc0a0 ["COPY", "tmp:0:8", ["const:cb8:8"]]
+ 006fc0a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006fc0a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006fc0a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-17450125321ef19303df64eef3fa4e36"></a>

### [`006fbd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fbd04.md) → [`006fc0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fc/006fc0b4.md) FUN_006fc0b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006b247c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b247c.md) [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) [`006f0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f0/006f0558.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`006b282c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b282c.md) [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) [`006f0908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f0/006f0908.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.83% / 新版 96.83%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fc0e0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fbd30",
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
      "site": "006fc188",
      "value": [
        "leaf",
        "ram:6f0908:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fbdd8",
      "value": [
        "leaf",
        "ram:6f0558:8"
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
      "006fc0e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fc188",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0558"
      ]
    ]
  ],
  "added": [
    [
      "006fc0e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006fc188",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0908"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fbd30 ["INT_ADD", "register:40f0:8", ["const:6fbd30:8", "const:4:8"]]
- 006fbd30 ["CALL", null, ["ram:47ad34:8"]]
+ 006fc0e0 ["INT_ADD", "register:40f0:8", ["const:6fc0e0:8", "const:4:8"]]
+ 006fc0e0 ["CALL", null, ["ram:47b054:8"]]
- 006fbdd8 ["INT_ADD", "register:40f0:8", ["const:6fbdd8:8", "const:4:8"]]
- 006fbdd8 ["CALL", null, ["ram:6f0558:8"]]
+ 006fc188 ["INT_ADD", "register:40f0:8", ["const:6fc188:8", "const:4:8"]]
+ 006fc188 ["CALL", null, ["ram:6f0908:8"]]
- 006fbd3c ["INT_ADD", "register:40f0:8", ["const:6fbd3c:8", "const:4:8"]]
- 006fbd3c ["CALL", null, ["callee:0047d134:8"]]
+ 006fc0ec ["INT_ADD", "register:40f0:8", ["const:6fc0ec:8", "const:4:8"]]
+ 006fc0ec ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-4000fb7a0ed0158e2390ba4ed5b35d7d"></a>

### [`006fd974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fd/006fd974.md) → [`006fdd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fd/006fdd24.md) FUN_006fdd24

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
      "definition_site": "006fdd38",
      "incomplete_value": false,
      "site": "006fdd3c",
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
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fdd3c",
      "DATA",
      [
        "storage",
        "00c76d68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fdd3c",
      "DATA",
      [
        "storage",
        "00c77d38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fd980 ["INT_ADD", "register:40f0:8", ["const:6fd980:8", "const:4:8"]]
- 006fd980 ["CALL", null, ["callee:00c58f30:8"]]
+ 006fdd30 ["INT_ADD", "register:40f0:8", ["const:6fdd30:8", "const:4:8"]]
+ 006fdd30 ["CALL", null, ["callee:00c58f30:8"]]
- 006fd984 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fdd34 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fd988 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 006fd988 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fd988 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fd988 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fdd38 ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 006fdd38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fdd38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fdd38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-faafee773ae514f4f55ae8e9337fdacf"></a>

### [`006fd9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fd/006fd9b0.md) → [`006fdd60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fd/006fdd60.md) FUN_006fdd60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "006fdd7c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fd9cc",
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
      "006fdd7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006fdd7c",
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
- 006fd9cc ["INT_ADD", "register:40f0:8", ["const:6fd9cc:8", "const:4:8"]]
- 006fd9cc ["CALL", null, ["ram:47ad34:8"]]
+ 006fdd7c ["INT_ADD", "register:40f0:8", ["const:6fdd7c:8", "const:4:8"]]
+ 006fdd7c ["CALL", null, ["ram:47b054:8"]]
- 006fd9d8 ["INT_ADD", "register:40f0:8", ["const:6fd9d8:8", "const:4:8"]]
- 006fd9d8 ["CALL", null, ["callee:0047d134:8"]]
+ 006fdd88 ["INT_ADD", "register:40f0:8", ["const:6fdd88:8", "const:4:8"]]
+ 006fdd88 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-a6fabe4cadf91ae834ad7852a8d444e6"></a>

### [`006fda1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fd/006fda1c.md) → [`006fddcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fd/006fddcc.md) FUN_006fddcc

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
      "definition_site": "006fddf0",
      "incomplete_value": false,
      "site": "006fddf4",
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
            "const:db8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fddf4",
      "DATA",
      [
        "storage",
        "00c76de8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fddf4",
      "DATA",
      [
        "storage",
        "00c77db8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fda30 ["INT_ADD", "register:40f0:8", ["const:6fda30:8", "const:4:8"]]
- 006fda30 ["CALL", null, ["callee:00c58f30:8"]]
+ 006fdde0 ["INT_ADD", "register:40f0:8", ["const:6fdde0:8", "const:4:8"]]
+ 006fdde0 ["CALL", null, ["callee:00c58f30:8"]]
- 006fda3c ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fddec ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fda40 ["COPY", "tmp:0:8", ["const:de8:8"]]
- 006fda40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fda40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fda40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fddf0 ["COPY", "tmp:0:8", ["const:db8:8"]]
+ 006fddf0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fddf0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fddf0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c2805a34c2b792bf7ebb64c7cf2c8ec8"></a>

### [`006fda84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fd/006fda84.md) → [`006fde34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fd/006fde34.md) FUN_006fde34

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 21件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044d730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044d730.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)
- 新版 呼出元 0件  · 呼出先 20件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 3件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006fdf38",
      "incomplete_value": true,
      "site": "006fdf4c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fee:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006fdf8c",
      "incomplete_value": true,
      "site": "006fdf8c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d15:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006fdf90",
      "incomplete_value": true,
      "site": "006fdf90",
      "value": [
        "LOAD",
        "8",
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
      "006fde80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fdee0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ede3c"
      ]
    ],
    [
      "006fdef0",
      "DATA",
      [
        "storage",
        "0042ef82",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "006fde80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006fdee0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ee1ec"
      ]
    ],
    [
      "006fdef0",
      "DATA",
      [
        "storage",
        "0042ef82",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fdad0 ["INT_ADD", "register:40f0:8", ["const:6fdad0:8", "const:4:8"]]
- 006fdad0 ["CALL", null, ["ram:47ad34:8"]]
+ 006fde80 ["INT_ADD", "register:40f0:8", ["const:6fde80:8", "const:4:8"]]
+ 006fde80 ["CALL", null, ["ram:47b054:8"]]
- 006fdb30 ["INT_ADD", "register:40f0:8", ["const:6fdb30:8", "const:4:8"]]
- 006fdb30 ["CALL", null, ["ram:6ede3c:8"]]
+ 006fdee0 ["INT_ADD", "register:40f0:8", ["const:6fdee0:8", "const:4:8"]]
+ 006fdee0 ["CALL", null, ["ram:6ee1ec:8"]]
- 006fdb54 ["INT_ADD", "register:40f0:8", ["const:6fdb54:8", "const:4:8"]]
- 006fdb54 ["CALL", null, ["ram:63c5c8:8"]]
+ 006fdf04 ["INT_ADD", "register:40f0:8", ["const:6fdf04:8", "const:4:8"]]
+ 006fdf04 ["CALL", null, ["ram:63c978:8"]]
~~~


<a id="compare-cd9465ea13ac92ecb78b881f601366e2"></a>

### [`006fe190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe190.md) → [`006fe540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fe540.md) FUN_006fe540

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
      "definition_site": "006fe560",
      "incomplete_value": false,
      "site": "006fe564",
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
            "const:e28:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fe564",
      "DATA",
      [
        "storage",
        "00c76e58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe564",
      "DATA",
      [
        "storage",
        "00c77e28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe1a4 ["INT_ADD", "register:40f0:8", ["const:6fe1a4:8", "const:4:8"]]
- 006fe1a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 006fe554 ["INT_ADD", "register:40f0:8", ["const:6fe554:8", "const:4:8"]]
+ 006fe554 ["CALL", null, ["callee:00c58f30:8"]]
- 006fe1ac ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fe55c ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fe1b0 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 006fe1b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe1b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe1b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe560 ["COPY", "tmp:0:8", ["const:e28:8"]]
+ 006fe560 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe560 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe560 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eb8fe080ba3df95daa200cccd5c2247f"></a>

### [`006fe1c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe1c8.md) → [`006fe578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fe578.md) FUN_006fe578

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
      "definition_site": "006fe57c",
      "incomplete_value": false,
      "site": "006fe580",
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
            "const:e28:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fe580",
      "DATA",
      [
        "storage",
        "00c76e58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe580",
      "DATA",
      [
        "storage",
        "00c77e28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe1c8 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fe578 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fe1cc ["COPY", "tmp:0:8", ["const:e58:8"]]
- 006fe1cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe1cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe1cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe57c ["COPY", "tmp:0:8", ["const:e28:8"]]
+ 006fe57c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe57c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe57c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a6973f2afbc39a38b79d102aed7c5709"></a>

### [`006fe1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe1e8.md) → [`006fe598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fe598.md) FUN_006fe598

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) [`006f0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f0/006f0558.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) [`006f0908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f0/006f0908.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe5c4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe214",
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
      "site": "006fe618",
      "value": [
        "leaf",
        "ram:6f0908:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe268",
      "value": [
        "leaf",
        "ram:6f0558:8"
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
      "006fe5c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fe618",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0558"
      ]
    ]
  ],
  "added": [
    [
      "006fe5c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006fe618",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0908"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe214 ["INT_ADD", "register:40f0:8", ["const:6fe214:8", "const:4:8"]]
- 006fe214 ["CALL", null, ["ram:47ad34:8"]]
+ 006fe5c4 ["INT_ADD", "register:40f0:8", ["const:6fe5c4:8", "const:4:8"]]
+ 006fe5c4 ["CALL", null, ["ram:47b054:8"]]
- 006fe268 ["INT_ADD", "register:40f0:8", ["const:6fe268:8", "const:4:8"]]
- 006fe268 ["CALL", null, ["ram:6f0558:8"]]
+ 006fe618 ["INT_ADD", "register:40f0:8", ["const:6fe618:8", "const:4:8"]]
+ 006fe618 ["CALL", null, ["ram:6f0908:8"]]
- 006fe220 ["INT_ADD", "register:40f0:8", ["const:6fe220:8", "const:4:8"]]
- 006fe220 ["CALL", null, ["callee:0047d134:8"]]
+ 006fe5d0 ["INT_ADD", "register:40f0:8", ["const:6fe5d0:8", "const:4:8"]]
+ 006fe5d0 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-0fdf56ac326b1584d65e8e6f1d6d50a1"></a>

### [`006fe2c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe2c8.md) → [`006fe678`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fe678.md) FUN_006fe678

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
      "definition_site": "006fe698",
      "incomplete_value": false,
      "site": "006fe69c",
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
            "const:eb8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fe69c",
      "DATA",
      [
        "storage",
        "00c76ee8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe69c",
      "DATA",
      [
        "storage",
        "00c77eb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe2dc ["INT_ADD", "register:40f0:8", ["const:6fe2dc:8", "const:4:8"]]
- 006fe2dc ["CALL", null, ["callee:00c58f30:8"]]
+ 006fe68c ["INT_ADD", "register:40f0:8", ["const:6fe68c:8", "const:4:8"]]
+ 006fe68c ["CALL", null, ["callee:00c58f30:8"]]
- 006fe2e4 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fe694 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fe2e8 ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 006fe2e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe2e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe2e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe698 ["COPY", "tmp:0:8", ["const:eb8:8"]]
+ 006fe698 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe698 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe698 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c67d8b7eae2991dc710cdb26089ee5a6"></a>

### [`006fe4ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe4ec.md) → [`006fe89c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fe89c.md) FUN_006fe89c

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
      "definition_site": "006fe8bc",
      "incomplete_value": false,
      "site": "006fe8c0",
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
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fe50c",
      "incomplete_value": false,
      "site": "006fe510",
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
      "006fe8c0",
      "DATA",
      [
        "storage",
        "00c76f68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe8c0",
      "DATA",
      [
        "storage",
        "00c77f38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe500 ["INT_ADD", "register:40f0:8", ["const:6fe500:8", "const:4:8"]]
- 006fe500 ["CALL", null, ["callee:00c58f30:8"]]
+ 006fe8b0 ["INT_ADD", "register:40f0:8", ["const:6fe8b0:8", "const:4:8"]]
+ 006fe8b0 ["CALL", null, ["callee:00c58f30:8"]]
- 006fe508 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fe8b8 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fe50c ["COPY", "tmp:0:8", ["const:f68:8"]]
- 006fe50c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe50c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe50c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe8bc ["COPY", "tmp:0:8", ["const:f38:8"]]
+ 006fe8bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe8bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe8bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-74dddb751d2fff7d7f1ea51a8c75c4fc"></a>

### [`006fe544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe544.md) → [`006fe8f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fe8f4.md) FUN_006fe8f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) [`006f0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f0/006f0558.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) [`006f0908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f0/006f0908.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe91c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe56c",
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
      "site": "006fe960",
      "value": [
        "leaf",
        "ram:6f0908:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe5b0",
      "value": [
        "leaf",
        "ram:6f0558:8"
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
      "006fe91c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fe960",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0558"
      ]
    ]
  ],
  "added": [
    [
      "006fe91c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006fe960",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0908"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe56c ["INT_ADD", "register:40f0:8", ["const:6fe56c:8", "const:4:8"]]
- 006fe56c ["CALL", null, ["ram:47ad34:8"]]
+ 006fe91c ["INT_ADD", "register:40f0:8", ["const:6fe91c:8", "const:4:8"]]
+ 006fe91c ["CALL", null, ["ram:47b054:8"]]
- 006fe5b0 ["INT_ADD", "register:40f0:8", ["const:6fe5b0:8", "const:4:8"]]
- 006fe5b0 ["CALL", null, ["ram:6f0558:8"]]
+ 006fe960 ["INT_ADD", "register:40f0:8", ["const:6fe960:8", "const:4:8"]]
+ 006fe960 ["CALL", null, ["ram:6f0908:8"]]
- 006fe578 ["INT_ADD", "register:40f0:8", ["const:6fe578:8", "const:4:8"]]
- 006fe578 ["CALL", null, ["callee:0047d134:8"]]
+ 006fe928 ["INT_ADD", "register:40f0:8", ["const:6fe928:8", "const:4:8"]]
+ 006fe928 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-62081af89586d317beb6494ea0c05f79"></a>

### [`006fe604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe604.md) → [`006fe9b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fe9b4.md) FUN_006fe9b4

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
      "definition_site": "006fe9d4",
      "incomplete_value": false,
      "site": "006fe9d8",
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
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fe9d8",
      "DATA",
      [
        "storage",
        "00c76fe8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe9d8",
      "DATA",
      [
        "storage",
        "00c77fb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe618 ["INT_ADD", "register:40f0:8", ["const:6fe618:8", "const:4:8"]]
- 006fe618 ["CALL", null, ["callee:00c58f30:8"]]
+ 006fe9c8 ["INT_ADD", "register:40f0:8", ["const:6fe9c8:8", "const:4:8"]]
+ 006fe9c8 ["CALL", null, ["callee:00c58f30:8"]]
- 006fe620 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fe9d0 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fe624 ["COPY", "tmp:0:8", ["const:fe8:8"]]
- 006fe624 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe624 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe624 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe9d4 ["COPY", "tmp:0:8", ["const:fb8:8"]]
+ 006fe9d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe9d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe9d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0f172f5f9492fdfc79a06f68aea207be"></a>

### [`006fe65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe65c.md) → [`006fea0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fea0c.md) FUN_006fea0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`006e542c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e542c.md) [`006ef79c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ef/006ef79c.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`006e57dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e5/006e57dc.md) [`006efb4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ef/006efb4c.md)

変更の種類 call, call_target, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006feb10",
      "incomplete_value": true,
      "site": "006feb20",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7fd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fe760",
      "incomplete_value": true,
      "site": "006fe770",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:71f:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "006feb3c",
      "incomplete_value": false,
      "site": "006feb44",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fe78c",
      "incomplete_value": false,
      "site": "006fe794",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fea48",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe698",
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
      "006fea48",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fea68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fead4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ef79c"
      ]
    ]
  ],
  "added": [
    [
      "006fea48",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006fea68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006fead4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006efb4c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe698 ["INT_ADD", "register:40f0:8", ["const:6fe698:8", "const:4:8"]]
- 006fe698 ["CALL", null, ["ram:47ad34:8"]]
+ 006fea48 ["INT_ADD", "register:40f0:8", ["const:6fea48:8", "const:4:8"]]
+ 006fea48 ["CALL", null, ["ram:47b054:8"]]
- 006fe6b8 ["INT_ADD", "register:40f0:8", ["const:6fe6b8:8", "const:4:8"]]
- 006fe6b8 ["CALL", null, ["ram:47ad34:8"]]
+ 006fea68 ["INT_ADD", "register:40f0:8", ["const:6fea68:8", "const:4:8"]]
+ 006fea68 ["CALL", null, ["ram:47b054:8"]]
- 006fe6e0 ["INT_ADD", "register:40f0:8", ["const:6fe6e0:8", "const:4:8"]]
- 006fe6e0 ["CALL", null, ["callee:008524fc:8"]]
+ 006fea90 ["INT_ADD", "register:40f0:8", ["const:6fea90:8", "const:4:8"]]
+ 006fea90 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-a4d2261c54f2a96f6dd5992bedff79e4"></a>

### [`006fe8ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe8ec.md) → [`006fec9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fec9c.md) FUN_006fec9c

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
      "definition_site": "006fecb0",
      "incomplete_value": false,
      "site": "006fecb4",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fecb4",
      "DATA",
      [
        "storage",
        "00c77058",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fecb4",
      "DATA",
      [
        "storage",
        "00c78028",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe8f8 ["INT_ADD", "register:40f0:8", ["const:6fe8f8:8", "const:4:8"]]
- 006fe8f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 006feca8 ["INT_ADD", "register:40f0:8", ["const:6feca8:8", "const:4:8"]]
+ 006feca8 ["CALL", null, ["callee:00c58f30:8"]]
- 006fe8fc ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 006fecac ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006fe900 ["COPY", "tmp:0:8", ["const:58:8"]]
- 006fe900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fecb0 ["COPY", "tmp:0:8", ["const:28:8"]]
+ 006fecb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fecb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fecb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-12a1111cf89baa6d26c13c165378b56e"></a>

### [`006fe910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe910.md) → [`006fecc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fecc0.md) FUN_006fecc0

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
      "definition_site": "006fecc4",
      "incomplete_value": false,
      "site": "006fecc8",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006fecc8",
      "DATA",
      [
        "storage",
        "00c77058",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fecc8",
      "DATA",
      [
        "storage",
        "00c78028",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe910 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 006fecc0 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006fe914 ["COPY", "tmp:0:8", ["const:58:8"]]
- 006fe914 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe914 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe914 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fecc4 ["COPY", "tmp:0:8", ["const:28:8"]]
+ 006fecc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fecc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fecc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-45a9cbeb228f710184379856ac91bd14"></a>

### [`006fe928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe928.md) → [`006fecd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fecd8.md) FUN_006fecd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "006fecf4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe944",
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
      "006fecf4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006fecf4",
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
- 006fe944 ["INT_ADD", "register:40f0:8", ["const:6fe944:8", "const:4:8"]]
- 006fe944 ["CALL", null, ["ram:47ad34:8"]]
+ 006fecf4 ["INT_ADD", "register:40f0:8", ["const:6fecf4:8", "const:4:8"]]
+ 006fecf4 ["CALL", null, ["ram:47b054:8"]]
- 006fe950 ["INT_ADD", "register:40f0:8", ["const:6fe950:8", "const:4:8"]]
- 006fe950 ["CALL", null, ["callee:0047d134:8"]]
+ 006fed00 ["INT_ADD", "register:40f0:8", ["const:6fed00:8", "const:4:8"]]
+ 006fed00 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-7411d56ee66be4825b1bd251395fbe62"></a>

### [`006fe994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe994.md) → [`006fed44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fed44.md) FUN_006fed44

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
      "definition_site": "006fed64",
      "incomplete_value": false,
      "site": "006fed68",
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
            "const:b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fe9b4",
      "incomplete_value": false,
      "site": "006fe9b8",
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
      "006fed68",
      "DATA",
      [
        "storage",
        "00c770e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fed68",
      "DATA",
      [
        "storage",
        "00c780b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe9a8 ["INT_ADD", "register:40f0:8", ["const:6fe9a8:8", "const:4:8"]]
- 006fe9a8 ["CALL", null, ["callee:00c58f30:8"]]
+ 006fed58 ["INT_ADD", "register:40f0:8", ["const:6fed58:8", "const:4:8"]]
+ 006fed58 ["CALL", null, ["callee:00c58f30:8"]]
- 006fe9b0 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 006fed60 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006fe9b4 ["COPY", "tmp:0:8", ["const:e8:8"]]
- 006fe9b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe9b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe9b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fed64 ["COPY", "tmp:0:8", ["const:b8:8"]]
+ 006fed64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fed64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fed64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b587261983f5bb07d3651b1502222934"></a>

### [`006fe9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe9ec.md) → [`006fed9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fe/006fed9c.md) FUN_006fed9c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 13件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.21% / 新版 92.21%

優先判定に残った影響 `call_target` 2件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006fee3c",
      "incomplete_value": true,
      "site": "006fee54",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fb7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fea8c",
      "incomplete_value": true,
      "site": "006feaa4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ee0:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "006feea4",
      "incomplete_value": true,
      "site": "006feea4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d15:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006feaf4",
      "incomplete_value": true,
      "site": "006feaf4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006feea8",
      "incomplete_value": true,
      "site": "006feea8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006feaf8",
      "incomplete_value": true,
      "site": "006feaf8",
      "value": [
        "LOAD",
        "8",
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
      "006fedd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fedf4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fee3c",
      "READ",
      [
        "storage",
        "002b0ee0",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006fedd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006fedf4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006fee3c",
      "READ",
      [
        "storage",
        "002b0fb7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fea28 ["INT_ADD", "register:40f0:8", ["const:6fea28:8", "const:4:8"]]
- 006fea28 ["CALL", null, ["ram:47ad34:8"]]
+ 006fedd8 ["INT_ADD", "register:40f0:8", ["const:6fedd8:8", "const:4:8"]]
+ 006fedd8 ["CALL", null, ["ram:47b054:8"]]
- 006fea44 ["INT_ADD", "register:40f0:8", ["const:6fea44:8", "const:4:8"]]
- 006fea44 ["CALL", null, ["ram:47ad34:8"]]
+ 006fedf4 ["INT_ADD", "register:40f0:8", ["const:6fedf4:8", "const:4:8"]]
+ 006fedf4 ["CALL", null, ["ram:47b054:8"]]
- 006fea7c ["INT_ADD", "register:40f0:8", ["const:6fea7c:8", "const:4:8"]]
- 006fea7c ["CALL", null, ["callee:008524fc:8"]]
+ 006fee2c ["INT_ADD", "register:40f0:8", ["const:6fee2c:8", "const:4:8"]]
+ 006fee2c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-3368dd14d170742334c91f3b5f6d8a61"></a>

### [`006fed64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fed64.md) → [`006ff114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff114.md) FUN_006ff114

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
      "definition_site": "006ff138",
      "incomplete_value": false,
      "site": "006ff138",
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
            "const:128:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006ff138",
      "DATA",
      [
        "storage",
        "00c77158",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff138",
      "DATA",
      [
        "storage",
        "00c78128",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fed78 ["INT_ADD", "register:40f0:8", ["const:6fed78:8", "const:4:8"]]
- 006fed78 ["CALL", null, ["callee:00c58f30:8"]]
+ 006ff128 ["INT_ADD", "register:40f0:8", ["const:6ff128:8", "const:4:8"]]
+ 006ff128 ["CALL", null, ["callee:00c58f30:8"]]
- 006fed80 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 006ff130 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006fed84 ["COPY", "tmp:0:8", ["const:158:8"]]
- 006fed84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fed84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fed84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ff134 ["COPY", "tmp:0:8", ["const:128:8"]]
+ 006ff134 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff134 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff134 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ff99bdb239b591fcf1c7cc42f3fe5901"></a>

### [`006fed98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fed98.md) → [`006ff148`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff148.md) FUN_006ff148

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
      "definition_site": "006ff154",
      "incomplete_value": false,
      "site": "006ff154",
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
            "const:128:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006ff154",
      "DATA",
      [
        "storage",
        "00c77158",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff154",
      "DATA",
      [
        "storage",
        "00c78128",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fed9c ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 006ff14c ["COPY", "register:4048:8", ["const:c78000:8"]]
- 006feda0 ["COPY", "tmp:0:8", ["const:158:8"]]
- 006feda0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006feda0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006feda0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006ff150 ["COPY", "tmp:0:8", ["const:128:8"]]
+ 006ff150 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006ff150 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006ff150 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5e85c001fe3f532c7cd9f9138b374ad9"></a>

### [`006fedb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fedb4.md) → [`006ff164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff164.md) FUN_006ff164

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "006ff180",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fedd0",
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
      "006ff180",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006ff180",
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
- 006fedd0 ["INT_ADD", "register:40f0:8", ["const:6fedd0:8", "const:4:8"]]
- 006fedd0 ["CALL", null, ["ram:47ad34:8"]]
+ 006ff180 ["INT_ADD", "register:40f0:8", ["const:6ff180:8", "const:4:8"]]
+ 006ff180 ["CALL", null, ["ram:47b054:8"]]
- 006feddc ["INT_ADD", "register:40f0:8", ["const:6feddc:8", "const:4:8"]]
- 006feddc ["CALL", null, ["callee:0047d134:8"]]
+ 006ff18c ["INT_ADD", "register:40f0:8", ["const:6ff18c:8", "const:4:8"]]
+ 006ff18c ["CALL", null, ["callee:0047d134:8"]]
~~~


