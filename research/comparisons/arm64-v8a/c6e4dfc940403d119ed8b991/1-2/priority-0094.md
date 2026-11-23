# v16.0.2 → v16.0.3 · 最優先の変更候補 (94)

[一覧の目次](README.md)

<a id="compare-344102d9fc829dd5d378d16690b73fc6"></a>

### [`00bcd508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd508.md) → [`00bce4fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bce4fc.md) _ZN8firebase4auth14SetEmulatorJniEPNS0_8AuthDataEPKcj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bce53c",
      "incomplete_value": true,
      "site": "00bce550",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:848:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd548",
      "incomplete_value": true,
      "site": "00bcd55c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:888:8"
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
      "00bce53c",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bce53c",
      "READ",
      [
        "storage",
        "01127848",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd55c ["INT_ADD", "register:40f0:8", ["const:bcd55c:8", "const:4:8"]]
- 00bcd55c ["CALL", null, ["callee:0057504c:8"]]
+ 00bce550 ["INT_ADD", "register:40f0:8", ["const:bce550:8", "const:4:8"]]
+ 00bce550 ["CALL", null, ["callee:0057504c:8"]]
- 00bcd528 ["INT_ADD", "register:40f0:8", ["const:bcd528:8", "const:4:8"]]
- 00bcd528 ["CALL", null, ["callee:00c5c120:8"]]
+ 00bce51c ["INT_ADD", "register:40f0:8", ["const:bce51c:8", "const:4:8"]]
+ 00bce51c ["CALL", null, ["callee:00c5c120:8"]]
- 00bcd53c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcd53c ["INT_ADD", "register:40f0:8", ["const:bcd53c:8", "const:4:8"]]
- 00bcd53c ["CALLIND", null, ["register:0:8"]]
+ 00bce530 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bce530 ["INT_ADD", "register:40f0:8", ["const:bce530:8", "const:4:8"]]
+ 00bce530 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-591c1d3ac1ef7b1ecef915727857b96e"></a>

### [`00bcd588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd588.md) → [`00bce57c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bce57c.md) _ZN8firebase4auth13CheckEmulatorEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dcf0.md) · 呼出先 9件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58130.md) [`00c59970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59970.md)
- 新版 呼出元 1件 [`00c5ecc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ecc0.md) · 呼出先 9件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59100.md) [`00c5a940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a940.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 91.46% / 新版 91.46%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bce5b4",
      "incomplete_value": false,
      "site": "00bce5b8",
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
            "const:e0d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd5c0",
      "incomplete_value": false,
      "site": "00bcd5c4",
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
            "const:dc3:8"
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
      "definition_site": "00bce5f4",
      "incomplete_value": false,
      "site": "00bce5f8",
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
            "const:799:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd600",
      "incomplete_value": false,
      "site": "00bcd604",
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
            "const:6c2:8"
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
      "definition_site": "00bce640",
      "incomplete_value": false,
      "site": "00bce64c",
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
            "const:1a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd64c",
      "incomplete_value": false,
      "site": "00bcd658",
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
            "const:ca:8"
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
      "00bce5a0",
      "PARAM",
      [
        "storage",
        "002baebf",
        null,
        "string"
      ]
    ],
    [
      "00bce5b4",
      "PARAM",
      [
        "storage",
        "002c1dc3",
        null,
        "string"
      ]
    ],
    [
      "00bce5c0",
      "PARAM",
      [
        "storage",
        "002bd402",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bce5a0",
      "PARAM",
      [
        "storage",
        "002baf9d",
        null,
        "string"
      ]
    ],
    [
      "00bce5b4",
      "PARAM",
      [
        "storage",
        "002c1e0d",
        null,
        "string"
      ]
    ],
    [
      "00bce5c0",
      "PARAM",
      [
        "storage",
        "002bd4e0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd5c4 ["INT_ADD", "register:40f0:8", ["const:bcd5c4:8", "const:4:8"]]
- 00bcd5c4 ["CALL", null, ["callee:00c5c080:8"]]
+ 00bce5b8 ["INT_ADD", "register:40f0:8", ["const:bce5b8:8", "const:4:8"]]
+ 00bce5b8 ["CALL", null, ["callee:00c5c080:8"]]
- 00bcd604 ["INT_ADD", "register:40f0:8", ["const:bcd604:8", "const:4:8"]]
- 00bcd604 ["CALL", null, ["callee:00c5a940:8"]]
+ 00bce5f8 ["INT_ADD", "register:40f0:8", ["const:bce5f8:8", "const:4:8"]]
+ 00bce5f8 ["CALL", null, ["callee:00c5a940:8"]]
- 00bcd658 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcd658 ["INT_ADD", "register:40f0:8", ["const:bcd658:8", "const:4:8"]]
- 00bcd658 ["CALLIND", null, ["register:0:8"]]
+ 00bce64c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bce64c ["INT_ADD", "register:40f0:8", ["const:bce64c:8", "const:4:8"]]
+ 00bce64c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5a0928b62359642cc6b59b88534e97a1"></a>

### [`00bcd6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd6f0.md) → [`00bce6e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bce6e4.md) _ZN8firebase4auth18CreatePlatformAuthEPNS_3AppE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5daa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5daa0.md) · 呼出先 21件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5af70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af70.md)
- 新版 呼出元 1件 [`00c5ea70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ea70.md) · 呼出先 21件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5bf40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bce728",
      "incomplete_value": true,
      "site": "00bce728",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:900:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd734",
      "incomplete_value": true,
      "site": "00bcd734",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:940:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bce738",
      "incomplete_value": true,
      "site": "00bce74c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd744",
      "incomplete_value": true,
      "site": "00bcd758",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:828:8"
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
      "definition_site": "00bce73c",
      "incomplete_value": true,
      "site": "00bce74c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd748",
      "incomplete_value": true,
      "site": "00bcd758",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:838:8"
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
      "00bce714",
      "READ",
      [
        "storage",
        "01126940",
        null,
        "undefined4"
      ]
    ],
    [
      "00bce728",
      "WRITE",
      [
        "storage",
        "01126940",
        null,
        "undefined4"
      ]
    ],
    [
      "00bce738",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bce714",
      "READ",
      [
        "storage",
        "01127900",
        null,
        "undefined4"
      ]
    ],
    [
      "00bce728",
      "WRITE",
      [
        "storage",
        "01127900",
        null,
        "undefined4"
      ]
    ],
    [
      "00bce738",
      "READ",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd734 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:940:8"]]
- 00bcd734 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00bce728 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:900:8"]]
+ 00bce728 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 00bcd758 ["INT_ADD", "register:40f0:8", ["const:bcd758:8", "const:4:8"]]
- 00bcd758 ["CALL", null, ["callee:00c5bc40:8"]]
+ 00bce74c ["INT_ADD", "register:40f0:8", ["const:bce74c:8", "const:4:8"]]
+ 00bce74c ["CALL", null, ["callee:00c5bc40:8"]]
- 00bcd774 ["INT_ADD", "register:40f0:8", ["const:bcd774:8", "const:4:8"]]
- 00bcd774 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bce768 ["INT_ADD", "register:40f0:8", ["const:bce768:8", "const:4:8"]]
+ 00bce768 ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-8656bb81a635dc4bf12fef3cacc7f5f9"></a>

### [`00bcd92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd92c.md) → [`00bce920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bce920.md) _ZN8firebase4auth4Auth16InitPlatformAuthEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5db10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db10.md) · 呼出先 6件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5dcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dcf0.md) [`00c5dd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd00.md)
- 新版 呼出元 1件 [`00c5eae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eae0.md) · 呼出先 6件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5ecc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ecc0.md) [`00c5ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ecd0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bce944",
      "incomplete_value": true,
      "site": "00bce954",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd950",
      "incomplete_value": true,
      "site": "00bcd960",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8f0:8"
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
      "definition_site": "00bce948",
      "incomplete_value": true,
      "site": "00bce954",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd954",
      "incomplete_value": true,
      "site": "00bcd960",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:900:8"
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
      "definition_site": "00bce964",
      "incomplete_value": true,
      "site": "00bce974",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:820:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd970",
      "incomplete_value": true,
      "site": "00bcd980",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:860:8"
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
      "00bce944",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce948",
      "READ",
      [
        "storage",
        "01126900",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce964",
      "READ",
      [
        "storage",
        "01126860",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bce944",
      "READ",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce948",
      "READ",
      [
        "storage",
        "011278c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce964",
      "READ",
      [
        "storage",
        "01127820",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd960 ["INT_ADD", "register:40f0:8", ["const:bcd960:8", "const:4:8"]]
- 00bcd960 ["CALL", null, ["callee:00589a54:8"]]
+ 00bce954 ["INT_ADD", "register:40f0:8", ["const:bce954:8", "const:4:8"]]
+ 00bce954 ["CALL", null, ["callee:00589a54:8"]]
- 00bcd980 ["INT_ADD", "register:40f0:8", ["const:bcd980:8", "const:4:8"]]
- 00bcd980 ["CALL", null, ["callee:0057504c:8"]]
+ 00bce974 ["INT_ADD", "register:40f0:8", ["const:bce974:8", "const:4:8"]]
+ 00bce974 ["CALL", null, ["callee:0057504c:8"]]
- 00bcd9ac ["INT_ADD", "register:40f0:8", ["const:bcd9ac:8", "const:4:8"]]
- 00bcd9ac ["CALL", null, ["callee:00589a54:8"]]
+ 00bce9a0 ["INT_ADD", "register:40f0:8", ["const:bce9a0:8", "const:4:8"]]
+ 00bce9a0 ["CALL", null, ["callee:00589a54:8"]]
~~~


<a id="compare-73037f2014a79bfaad8c19bdf34c0dd4"></a>

### [`00bcd9f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd9f4.md) → [`00bce9e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bce9e8.md) _ZN8firebase4auth4Auth19DestroyPlatformAuthEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5db20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db20.md) · 呼出先 10件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afd0.md) [`00c5b0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0a0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 1件 [`00c5eaf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eaf0.md) · 呼出先 10件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5bfa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfa0.md) [`00c5c070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c070.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 90.80% / 新版 90.80%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bceaf0",
      "incomplete_value": true,
      "site": "00bceaf0",
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
            "const:900:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcdafc",
      "incomplete_value": true,
      "site": "00bcdafc",
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
            "const:940:8"
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
      "definition_site": "00bcea34",
      "incomplete_value": true,
      "site": "00bcea40",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcda40",
      "incomplete_value": true,
      "site": "00bcda4c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:908:8"
              ]
            ]
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
      "definition_site": "00bcea50",
      "incomplete_value": true,
      "site": "00bcea60",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:828:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcda5c",
      "incomplete_value": true,
      "site": "00bcda6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:868:8"
              ]
            ]
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
      "00bcea34",
      "READ",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcea50",
      "READ",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcea6c",
      "READ",
      [
        "storage",
        "01126930",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcea34",
      "READ",
      [
        "storage",
        "011278c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcea50",
      "READ",
      [
        "storage",
        "01127828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcea6c",
      "READ",
      [
        "storage",
        "011278f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcda4c ["INT_ADD", "register:40f0:8", ["const:bcda4c:8", "const:4:8"]]
- 00bcda4c ["CALL", null, ["callee:0057504c:8"]]
+ 00bcea40 ["INT_ADD", "register:40f0:8", ["const:bcea40:8", "const:4:8"]]
+ 00bcea40 ["CALL", null, ["callee:0057504c:8"]]
- 00bcda6c ["INT_ADD", "register:40f0:8", ["const:bcda6c:8", "const:4:8"]]
- 00bcda6c ["CALL", null, ["callee:0057504c:8"]]
+ 00bcea60 ["INT_ADD", "register:40f0:8", ["const:bcea60:8", "const:4:8"]]
+ 00bcea60 ["CALL", null, ["callee:0057504c:8"]]
- 00bcda84 ["INT_ADD", "register:40f0:8", ["const:bcda84:8", "const:4:8"]]
- 00bcda84 ["CALL", null, ["callee:0057504c:8"]]
+ 00bcea78 ["INT_ADD", "register:40f0:8", ["const:bcea78:8", "const:4:8"]]
+ 00bcea78 ["CALL", null, ["callee:0057504c:8"]]
~~~


<a id="compare-359c05a46dc99ff8a893c75bd156a71f"></a>

### [`00bcdb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdb50.md) → [`00bceb44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bceb44.md) _ZN8firebase4auth12LogHeartbeatEPNS0_4AuthE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5da60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da60.md) · 呼出先 5件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5bfc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bfc0.md) [`00c5db50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db50.md)
- 新版 呼出元 1件 [`00c5ea30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ea30.md) · 呼出先 5件 [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5cf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf90.md) [`00c5eb20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eb20.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bceb7c",
      "incomplete_value": true,
      "site": "00bceb90",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:7e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcdb88",
      "incomplete_value": true,
      "site": "00bcdb9c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:828:8"
              ]
            ]
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
      "definition_site": "00bceb80",
      "incomplete_value": true,
      "site": "00bceb90",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:7f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcdb8c",
      "incomplete_value": true,
      "site": "00bcdb9c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:838:8"
              ]
            ]
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
      "00bceb7c",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bceb80",
      "READ",
      [
        "storage",
        "01126838",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bceb7c",
      "READ",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bceb80",
      "READ",
      [
        "storage",
        "011277f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcdb9c ["INT_ADD", "register:40f0:8", ["const:bcdb9c:8", "const:4:8"]]
- 00bcdb9c ["CALL", null, ["callee:00c5bc40:8"]]
+ 00bceb90 ["INT_ADD", "register:40f0:8", ["const:bceb90:8", "const:4:8"]]
+ 00bceb90 ["CALL", null, ["callee:00c5bc40:8"]]
- 00bcdb6c ["INT_ADD", "register:40f0:8", ["const:bcdb6c:8", "const:4:8"]]
- 00bcdb6c ["CALL", null, ["callee:00c5c120:8"]]
+ 00bceb60 ["INT_ADD", "register:40f0:8", ["const:bceb60:8", "const:4:8"]]
+ 00bceb60 ["CALL", null, ["callee:00c5c120:8"]]
- 00bcdb78 ["INT_ADD", "register:40f0:8", ["const:bcdb78:8", "const:4:8"]]
- 00bcdb78 ["CALL", null, ["callee:00c5eb20:8"]]
+ 00bceb6c ["INT_ADD", "register:40f0:8", ["const:bceb6c:8", "const:4:8"]]
+ 00bceb6c ["CALL", null, ["callee:00c5eb20:8"]]
~~~


<a id="compare-4314ee5d86856e572dcd57a903d6273b"></a>

### [`00bcdf50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdf50.md) → [`00bcef44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bcef44.md) FUN_00bcef44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bcdc4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcdc4c.md) · 呼出先 10件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 1件 [`00bcec40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bcec40.md) · 呼出先 10件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.50% / 新版 98.50%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcef9c",
      "incomplete_value": false,
      "site": "00bcefa0",
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
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcdfa8",
      "incomplete_value": false,
      "site": "00bcdfac",
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
            "const:cd8:8"
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
      "definition_site": "00bcefac",
      "incomplete_value": true,
      "site": "00bcefb8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcdfb8",
      "incomplete_value": true,
      "site": "00bcdfc4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8e0:8"
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
      "00bcef9c",
      "PARAM",
      [
        "storage",
        "002a0cd8",
        null,
        "string"
      ]
    ],
    [
      "00bcefac",
      "READ",
      [
        "storage",
        "011268e0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcef9c",
      "PARAM",
      [
        "storage",
        "002a0d18",
        null,
        "string"
      ]
    ],
    [
      "00bcefac",
      "READ",
      [
        "storage",
        "011278a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcdfac ["INT_ADD", "register:40f0:8", ["const:bcdfac:8", "const:4:8"]]
- 00bcdfac ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcefa0 ["INT_ADD", "register:40f0:8", ["const:bcefa0:8", "const:4:8"]]
+ 00bcefa0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcdfc4 ["INT_ADD", "register:40f0:8", ["const:bcdfc4:8", "const:4:8"]]
- 00bcdfc4 ["CALL", null, ["callee:00497b94:8"]]
+ 00bcefb8 ["INT_ADD", "register:40f0:8", ["const:bcefb8:8", "const:4:8"]]
+ 00bcefb8 ["CALL", null, ["callee:00497b94:8"]]
- 00bcdf94 ["INT_ADD", "register:40f0:8", ["const:bcdf94:8", "const:4:8"]]
- 00bcdf94 ["CALL", null, ["callee:00c5c120:8"]]
+ 00bcef88 ["INT_ADD", "register:40f0:8", ["const:bcef88:8", "const:4:8"]]
+ 00bcef88 ["CALL", null, ["callee:00c5c120:8"]]
~~~


<a id="compare-35336e358553cf5e79c1b4cdebc15107"></a>

### [`00bceb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bceb18.md) → [`00bcfb0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcfb0c.md) _ZN8firebase4auth4Auth18SignInWithProviderEPNS0_21FederatedAuthProviderE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ac60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac60.md) · 呼出先 3件 [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5bc30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc30.md) · 呼出先 3件 [`00c5bc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc80.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcfb48",
      "incomplete_value": false,
      "site": "00bcfb4c",
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
            "const:cd1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bceb54",
      "incomplete_value": false,
      "site": "00bceb58",
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
            "const:c02:8"
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
      "00bcfb48",
      "PARAM",
      [
        "storage",
        "002b5c02",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcfb48",
      "PARAM",
      [
        "storage",
        "002b5cd1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bceb58 ["INT_ADD", "register:40f0:8", ["const:bceb58:8", "const:4:8"]]
- 00bceb58 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcfb4c ["INT_ADD", "register:40f0:8", ["const:bcfb4c:8", "const:4:8"]]
+ 00bcfb4c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bceb54 ["COPY", "tmp:0:8", ["const:c02:8"]]
- 00bceb54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bceb54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bceb54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcfb48 ["COPY", "tmp:0:8", ["const:cd1:8"]]
+ 00bcfb48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcfb48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcfb48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bceb64 ["INT_ADD", "register:40f0:8", ["const:bceb64:8", "const:4:8"]]
- 00bceb64 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bcfb58 ["INT_ADD", "register:40f0:8", ["const:bcfb58:8", "const:4:8"]]
+ 00bcfb58 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-f514a3fb8a7df8c5cedf8ca020542612"></a>

### [`00bced28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bced28.md) → [`00bcfd1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcfd1c.md) _ZN8firebase4auth4Auth26SignInWithEmailAndPasswordEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bcfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfde0.md) [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bd0dd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0dd4.md) [`00bd58bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd58bc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.30% / 新版 99.30%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcfe60",
      "incomplete_value": true,
      "site": "00bcfe60",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ac0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcee6c",
      "incomplete_value": true,
      "site": "00bcee6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:af0:8"
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
      "definition_site": "00bcfdcc",
      "incomplete_value": true,
      "site": "00bcfde4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:870:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcedd8",
      "incomplete_value": true,
      "site": "00bcedf0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8b0:8"
              ]
            ]
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
      "definition_site": "00bcfea0",
      "incomplete_value": false,
      "site": "00bcfeb4",
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
            "const:2ee:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bceeac",
      "incomplete_value": false,
      "site": "00bceec0",
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
            "const:221:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcfdcc",
      "READ",
      [
        "storage",
        "011268b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcfe5c",
      "READ",
      [
        "storage",
        "00c9baf0",
        null,
        "pointer"
      ]
    ],
    [
      "00bcfe60",
      "DATA",
      [
        "storage",
        "00bd48c8",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bcfdcc",
      "READ",
      [
        "storage",
        "01127870",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcfe5c",
      "READ",
      [
        "storage",
        "00c9cac0",
        null,
        "pointer"
      ]
    ],
    [
      "00bcfe60",
      "DATA",
      [
        "storage",
        "00bd58bc",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcedf0 ["INT_ADD", "register:40f0:8", ["const:bcedf0:8", "const:4:8"]]
- 00bcedf0 ["CALL", null, ["callee:00497b94:8"]]
+ 00bcfde4 ["INT_ADD", "register:40f0:8", ["const:bcfde4:8", "const:4:8"]]
+ 00bcfde4 ["CALL", null, ["callee:00497b94:8"]]
- 00bceec0 ["INT_ADD", "register:40f0:8", ["const:bceec0:8", "const:4:8"]]
- 00bceec0 ["CALL", null, ["callee:00c5ec60:8"]]
+ 00bcfeb4 ["INT_ADD", "register:40f0:8", ["const:bcfeb4:8", "const:4:8"]]
+ 00bcfeb4 ["CALL", null, ["callee:00c5ec60:8"]]
- 00bcef28 ["INT_ADD", "register:40f0:8", ["const:bcef28:8", "const:4:8"]]
- 00bcef28 ["CALL", null, ["callee:00c5bfe0:8"]]
+ 00bcff1c ["INT_ADD", "register:40f0:8", ["const:bcff1c:8", "const:4:8"]]
+ 00bcff1c ["CALL", null, ["callee:00c5bfe0:8"]]
~~~


<a id="compare-c22d9223b014f1c70b439eb187a3819f"></a>

### [`00bcefb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bcefb4.md) → [`00bcffa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcffa8.md) _ZN8firebase4auth4Auth30CreateUserWithEmailAndPasswordEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bcfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfde0.md) [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bd0dd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0dd4.md) [`00bd58bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd58bc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.30% / 新版 99.30%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bd00ec",
      "incomplete_value": true,
      "site": "00bd00ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ac0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcf0f8",
      "incomplete_value": true,
      "site": "00bcf0f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:af0:8"
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
      "definition_site": "00bd0058",
      "incomplete_value": true,
      "site": "00bd0070",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:878:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcf064",
      "incomplete_value": true,
      "site": "00bcf07c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8b8:8"
              ]
            ]
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
      "definition_site": "00bd012c",
      "incomplete_value": false,
      "site": "00bd0140",
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
            "const:2ee:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcf138",
      "incomplete_value": false,
      "site": "00bcf14c",
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
            "const:221:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd0058",
      "READ",
      [
        "storage",
        "011268b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd00e8",
      "READ",
      [
        "storage",
        "00c9baf0",
        null,
        "pointer"
      ]
    ],
    [
      "00bd00ec",
      "DATA",
      [
        "storage",
        "00bd48c8",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd0058",
      "READ",
      [
        "storage",
        "01127878",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd00e8",
      "READ",
      [
        "storage",
        "00c9cac0",
        null,
        "pointer"
      ]
    ],
    [
      "00bd00ec",
      "DATA",
      [
        "storage",
        "00bd58bc",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcf07c ["INT_ADD", "register:40f0:8", ["const:bcf07c:8", "const:4:8"]]
- 00bcf07c ["CALL", null, ["callee:00497b94:8"]]
+ 00bd0070 ["INT_ADD", "register:40f0:8", ["const:bd0070:8", "const:4:8"]]
+ 00bd0070 ["CALL", null, ["callee:00497b94:8"]]
- 00bcf14c ["INT_ADD", "register:40f0:8", ["const:bcf14c:8", "const:4:8"]]
- 00bcf14c ["CALL", null, ["callee:00c5ec60:8"]]
+ 00bd0140 ["INT_ADD", "register:40f0:8", ["const:bd0140:8", "const:4:8"]]
+ 00bd0140 ["CALL", null, ["callee:00c5ec60:8"]]
- 00bcf1b4 ["INT_ADD", "register:40f0:8", ["const:bcf1b4:8", "const:4:8"]]
- 00bcf1b4 ["CALL", null, ["callee:00c5bfe0:8"]]
+ 00bd01a8 ["INT_ADD", "register:40f0:8", ["const:bd01a8:8", "const:4:8"]]
+ 00bd01a8 ["CALL", null, ["callee:00c5bfe0:8"]]
~~~


<a id="compare-fc924932072d585291f97a324bead744"></a>

### [`00bcf54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf54c.md) → [`00bd0540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0540.md) _ZN8firebase4auth4Auth22SendPasswordResetEmailEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bd055c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd055c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bd1550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1550.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.19% / 新版 99.19%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd05e0",
      "incomplete_value": true,
      "site": "00bd05f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:880:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcf5ec",
      "incomplete_value": true,
      "site": "00bcf600",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8c0:8"
              ]
            ]
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
      "definition_site": "00bd067c",
      "incomplete_value": false,
      "site": "00bd0690",
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
            "const:794:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcf688",
      "incomplete_value": false,
      "site": "00bcf69c",
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
            "const:74a:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd06b8",
      "incomplete_value": true,
      "site": "00bd06c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ab8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcf6c4",
      "incomplete_value": true,
      "site": "00bcf6d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ae8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd05e0",
      "READ",
      [
        "storage",
        "011268c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd067c",
      "PARAM",
      [
        "storage",
        "002b374a",
        null,
        "string"
      ]
    ],
    [
      "00bd06b8",
      "READ",
      [
        "storage",
        "00c9bae8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bd05e0",
      "READ",
      [
        "storage",
        "01127880",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd067c",
      "PARAM",
      [
        "storage",
        "002b3794",
        null,
        "string"
      ]
    ],
    [
      "00bd06b8",
      "READ",
      [
        "storage",
        "00c9cab8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcf600 ["INT_ADD", "register:40f0:8", ["const:bcf600:8", "const:4:8"]]
- 00bcf600 ["CALL", null, ["callee:00497b94:8"]]
+ 00bd05f4 ["INT_ADD", "register:40f0:8", ["const:bd05f4:8", "const:4:8"]]
+ 00bd05f4 ["CALL", null, ["callee:00497b94:8"]]
- 00bcf69c ["INT_ADD", "register:40f0:8", ["const:bcf69c:8", "const:4:8"]]
- 00bcf69c ["CALL", null, ["callee:00c5be40:8"]]
+ 00bd0690 ["INT_ADD", "register:40f0:8", ["const:bd0690:8", "const:4:8"]]
+ 00bd0690 ["CALL", null, ["callee:00c5be40:8"]]
- 00bcf6d4 ["INT_ADD", "register:40f0:8", ["const:bcf6d4:8", "const:4:8"]]
- 00bcf6d4 ["CALL", null, ["callee:00c5bfe0:8"]]
+ 00bd06c8 ["INT_ADD", "register:40f0:8", ["const:bd06c8:8", "const:4:8"]]
+ 00bd06c8 ["CALL", null, ["callee:00c5bfe0:8"]]
~~~


<a id="compare-609121f35e78886ec7cc6a4ca644bf80"></a>

### [`00bcf89c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf89c.md) → [`00bd0890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0890.md) _ZN8firebase4auth4Auth11UseEmulatorENSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd08e0",
      "incomplete_value": true,
      "site": "00bd08f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:848:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcf8ec",
      "incomplete_value": true,
      "site": "00bcf900",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:888:8"
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
      "00bd08e0",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd08e0",
      "READ",
      [
        "storage",
        "01127848",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcf900 ["INT_ADD", "register:40f0:8", ["const:bcf900:8", "const:4:8"]]
- 00bcf900 ["CALL", null, ["callee:0057504c:8"]]
+ 00bd08f4 ["INT_ADD", "register:40f0:8", ["const:bd08f4:8", "const:4:8"]]
+ 00bd08f4 ["CALL", null, ["callee:0057504c:8"]]
- 00bcf8cc ["INT_ADD", "register:40f0:8", ["const:bcf8cc:8", "const:4:8"]]
- 00bcf8cc ["CALL", null, ["callee:00c5c120:8"]]
+ 00bd08c0 ["INT_ADD", "register:40f0:8", ["const:bd08c0:8", "const:4:8"]]
+ 00bd08c0 ["CALL", null, ["callee:00c5c120:8"]]
- 00bcf8e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcf8e0 ["INT_ADD", "register:40f0:8", ["const:bcf8e0:8", "const:4:8"]]
- 00bcf8e0 ["CALLIND", null, ["register:0:8"]]
+ 00bd08d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd08d4 ["INT_ADD", "register:40f0:8", ["const:bd08d4:8", "const:4:8"]]
+ 00bd08d4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fed6dfce8cd72ec6f4dd9d0b60b6028e"></a>

### [`00bcf9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcf9c0.md) → [`00bd09b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd09b4.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalINS_4auth4Auth20FetchProvidersResultEEEvRKNS_12FutureHand

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dca0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5ec70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec70.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd0a18",
      "incomplete_value": false,
      "site": "00bd0a1c",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcfa24",
      "incomplete_value": false,
      "site": "00bcfa28",
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
            "const:88:8"
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
      "00bd0a18",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd0a18",
      "PARAM",
      [
        "storage",
        "002a71e0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcfa28 ["INT_ADD", "register:40f0:8", ["const:bcfa28:8", "const:4:8"]]
- 00bcfa28 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd0a1c ["INT_ADD", "register:40f0:8", ["const:bd0a1c:8", "const:4:8"]]
+ 00bd0a1c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcf9ec ["INT_ADD", "register:40f0:8", ["const:bcf9ec:8", "const:4:8"]]
- 00bcf9ec ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bd09e0 ["INT_ADD", "register:40f0:8", ["const:bd09e0:8", "const:4:8"]]
+ 00bd09e0 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcf9f8 ["INT_ADD", "register:40f0:8", ["const:bcf9f8:8", "const:4:8"]]
- 00bcf9f8 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00bd09ec ["INT_ADD", "register:40f0:8", ["const:bd09ec:8", "const:4:8"]]
+ 00bd09ec ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-cd5153b9102acdf7c196767543e00fb3"></a>

### [`00bcfb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfb9c.md) → [`00bd0b90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0b90.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINS_4auth4Auth20FetchProvidersResultEZNS2_14FutureCallbackIS4_EEvP7_JNIEnvP8_jobje

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc70.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5ec40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec40.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd0bfc",
      "incomplete_value": false,
      "site": "00bd0c00",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcfc08",
      "incomplete_value": false,
      "site": "00bcfc0c",
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
            "const:88:8"
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
      "00bd0bfc",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd0bfc",
      "PARAM",
      [
        "storage",
        "002a71e0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcfc0c ["INT_ADD", "register:40f0:8", ["const:bcfc0c:8", "const:4:8"]]
- 00bcfc0c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd0c00 ["INT_ADD", "register:40f0:8", ["const:bd0c00:8", "const:4:8"]]
+ 00bd0c00 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcfbd0 ["INT_ADD", "register:40f0:8", ["const:bcfbd0:8", "const:4:8"]]
- 00bcfbd0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bd0bc4 ["INT_ADD", "register:40f0:8", ["const:bd0bc4:8", "const:4:8"]]
+ 00bd0bc4 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcfbdc ["INT_ADD", "register:40f0:8", ["const:bcfbdc:8", "const:4:8"]]
- 00bcfbdc ["CALL", null, ["callee:00c5bf20:8"]]
+ 00bd0bd0 ["INT_ADD", "register:40f0:8", ["const:bd0bd0:8", "const:4:8"]]
+ 00bd0bd0 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-4e8c4b689c74f26cd1fc59d065f984d5"></a>

### [`00bcfeb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfeb4.md) → [`00bd0ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd0/00bd0ea8.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINS_4auth10AuthResultEZNS2_14FutureCallbackIS3_EEvP7_JNIEnvP8_jobjectNS_4util12Fut

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc60.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5ec30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec30.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd0f14",
      "incomplete_value": false,
      "site": "00bd0f18",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcff20",
      "incomplete_value": false,
      "site": "00bcff24",
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
            "const:88:8"
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
      "00bd0f14",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd0f14",
      "PARAM",
      [
        "storage",
        "002a71e0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcff24 ["INT_ADD", "register:40f0:8", ["const:bcff24:8", "const:4:8"]]
- 00bcff24 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd0f18 ["INT_ADD", "register:40f0:8", ["const:bd0f18:8", "const:4:8"]]
+ 00bd0f18 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcfee8 ["INT_ADD", "register:40f0:8", ["const:bcfee8:8", "const:4:8"]]
- 00bcfee8 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bd0edc ["INT_ADD", "register:40f0:8", ["const:bd0edc:8", "const:4:8"]]
+ 00bd0edc ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcfef4 ["INT_ADD", "register:40f0:8", ["const:bcfef4:8", "const:4:8"]]
- 00bcfef4 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00bd0ee8 ["INT_ADD", "register:40f0:8", ["const:bd0ee8:8", "const:4:8"]]
+ 00bd0ee8 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-152f50b3b842302bf8b0de6825174987"></a>

### [`00bd00a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd00a0.md) → [`00bd1094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1094.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalINS_4auth4UserEEEvRKNS_12FutureHandleEiPKcEUlPvE_EEvS7_iS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dcb0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5ec80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec80.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd10f8",
      "incomplete_value": false,
      "site": "00bd10fc",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0104",
      "incomplete_value": false,
      "site": "00bd0108",
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
            "const:88:8"
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
      "00bd10f8",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd10f8",
      "PARAM",
      [
        "storage",
        "002a71e0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0108 ["INT_ADD", "register:40f0:8", ["const:bd0108:8", "const:4:8"]]
- 00bd0108 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd10fc ["INT_ADD", "register:40f0:8", ["const:bd10fc:8", "const:4:8"]]
+ 00bd10fc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd00cc ["INT_ADD", "register:40f0:8", ["const:bd00cc:8", "const:4:8"]]
- 00bd00cc ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bd10c0 ["INT_ADD", "register:40f0:8", ["const:bd10c0:8", "const:4:8"]]
+ 00bd10c0 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bd00d8 ["INT_ADD", "register:40f0:8", ["const:bd00d8:8", "const:4:8"]]
- 00bd00d8 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00bd10cc ["INT_ADD", "register:40f0:8", ["const:bd10cc:8", "const:4:8"]]
+ 00bd10cc ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-aebabdd6a32866b13d722dc89b7c4752"></a>

### [`00bd0454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0454.md) → [`00bd1448`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1448.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalINS_4auth10AuthResultEEEvRKNS_12FutureHandleEiPKcEUlPvE_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc90.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5ec60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec60.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd14ac",
      "incomplete_value": false,
      "site": "00bd14b0",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd04b8",
      "incomplete_value": false,
      "site": "00bd04bc",
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
            "const:88:8"
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
      "00bd14ac",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd14ac",
      "PARAM",
      [
        "storage",
        "002a71e0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd04bc ["INT_ADD", "register:40f0:8", ["const:bd04bc:8", "const:4:8"]]
- 00bd04bc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd14b0 ["INT_ADD", "register:40f0:8", ["const:bd14b0:8", "const:4:8"]]
+ 00bd14b0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd0480 ["INT_ADD", "register:40f0:8", ["const:bd0480:8", "const:4:8"]]
- 00bd0480 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bd1474 ["INT_ADD", "register:40f0:8", ["const:bd1474:8", "const:4:8"]]
+ 00bd1474 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bd048c ["INT_ADD", "register:40f0:8", ["const:bd048c:8", "const:4:8"]]
- 00bd048c ["CALL", null, ["callee:00c5bf20:8"]]
+ 00bd1480 ["INT_ADD", "register:40f0:8", ["const:bd1480:8", "const:4:8"]]
+ 00bd1480 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-aa05a588479f041d359629f55c144632"></a>

### [`00bd0630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0630.md) → [`00bd1624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1624.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS_4auth14FutureCallbackIvEEvP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPvEUl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dcc0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5ec90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ec90.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd1690",
      "incomplete_value": true,
      "site": "00bd1694",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd069c",
      "incomplete_value": true,
      "site": "00bd06a0",
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
            "const:88:8"
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
      "00bd1690",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd1690",
      "PARAM",
      [
        "storage",
        "002a71e0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd06a0 ["INT_ADD", "register:40f0:8", ["const:bd06a0:8", "const:4:8"]]
- 00bd06a0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd1694 ["INT_ADD", "register:40f0:8", ["const:bd1694:8", "const:4:8"]]
+ 00bd1694 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd0664 ["INT_ADD", "register:40f0:8", ["const:bd0664:8", "const:4:8"]]
- 00bd0664 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bd1658 ["INT_ADD", "register:40f0:8", ["const:bd1658:8", "const:4:8"]]
+ 00bd1658 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bd0670 ["INT_ADD", "register:40f0:8", ["const:bd0670:8", "const:4:8"]]
- 00bd0670 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00bd1664 ["INT_ADD", "register:40f0:8", ["const:bd1664:8", "const:4:8"]]
+ 00bd1664 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-8ef5cd8fe61086ffbaee603203c305b4"></a>

### [`00bd0768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0768.md) → [`00bd175c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd175c.md) _ZN8firebase4auth10authresult19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

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
      "definition_site": "00bd1788",
      "incomplete_value": true,
      "site": "00bd1788",
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
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0794",
      "incomplete_value": true,
      "site": "00bd0794",
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
            "const:948:8"
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
      "definition_site": "00bd1770",
      "incomplete_value": true,
      "site": "00bd1770",
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
      "definition_site": "00bd077c",
      "incomplete_value": true,
      "site": "00bd077c",
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
      "definition_site": "00bd177c",
      "incomplete_value": false,
      "site": "00bd1780",
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
            "const:7d1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0788",
      "incomplete_value": false,
      "site": "00bd078c",
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
            "const:787:8"
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
      "00bd176c",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd177c",
      "PARAM",
      [
        "storage",
        "002b2787",
        null,
        "string"
      ]
    ],
    [
      "00bd1788",
      "WRITE",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd176c",
      "READ",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd177c",
      "PARAM",
      [
        "storage",
        "002b27d1",
        null,
        "string"
      ]
    ],
    [
      "00bd1788",
      "WRITE",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd078c ["INT_ADD", "register:40f0:8", ["const:bd078c:8", "const:4:8"]]
- 00bd078c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd1780 ["INT_ADD", "register:40f0:8", ["const:bd1780:8", "const:4:8"]]
+ 00bd1780 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd0794 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
- 00bd0794 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1788 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:908:8"]]
+ 00bd1788 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0774 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd1768 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-f2b29dffc1d0b5df6978c6d26868abb9"></a>

### [`00bd07a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd07a8.md) → [`00bd179c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd179c.md) _ZN8firebase4auth10authresult19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd17c8",
      "incomplete_value": true,
      "site": "00bd17c8",
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
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd07d4",
      "incomplete_value": true,
      "site": "00bd07d4",
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
            "const:948:8"
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
      "definition_site": "00bd17b0",
      "incomplete_value": true,
      "site": "00bd17b0",
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
      "definition_site": "00bd07bc",
      "incomplete_value": true,
      "site": "00bd07bc",
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
      "definition_site": "00bd17b8",
      "incomplete_value": false,
      "site": "00bd17c0",
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
            "const:7d1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd07c4",
      "incomplete_value": false,
      "site": "00bd07cc",
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
            "const:787:8"
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
      "00bd17ac",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd17b8",
      "PARAM",
      [
        "storage",
        "002b2787",
        null,
        "string"
      ]
    ],
    [
      "00bd17c8",
      "WRITE",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd17ac",
      "READ",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd17b8",
      "PARAM",
      [
        "storage",
        "002b27d1",
        null,
        "string"
      ]
    ],
    [
      "00bd17c8",
      "WRITE",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd07cc ["INT_ADD", "register:40f0:8", ["const:bd07cc:8", "const:4:8"]]
- 00bd07cc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd17c0 ["INT_ADD", "register:40f0:8", ["const:bd17c0:8", "const:4:8"]]
+ 00bd17c0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd07d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
- 00bd07d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd17c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:908:8"]]
+ 00bd17c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd07b4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd17a8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-aab7257b4df15a7977bc5f1729dbfcda"></a>

### [`00bd07e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd07e8.md) → [`00bd17dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd17dc.md) _ZN8firebase4auth10authresult10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd180c",
      "incomplete_value": true,
      "site": "00bd180c",
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
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0818",
      "incomplete_value": true,
      "site": "00bd0818",
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
            "const:948:8"
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
      "definition_site": "00bd17f0",
      "incomplete_value": true,
      "site": "00bd17f0",
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
      "definition_site": "00bd07fc",
      "incomplete_value": true,
      "site": "00bd07fc",
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
      "definition_site": "00bd17fc",
      "incomplete_value": true,
      "site": "00bd1804",
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
            "const:7d1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0808",
      "incomplete_value": true,
      "site": "00bd0810",
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
            "const:787:8"
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
      "00bd17ec",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd17fc",
      "PARAM",
      [
        "storage",
        "002b2787",
        null,
        "string"
      ]
    ],
    [
      "00bd180c",
      "WRITE",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd17ec",
      "READ",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd17fc",
      "PARAM",
      [
        "storage",
        "002b27d1",
        null,
        "string"
      ]
    ],
    [
      "00bd180c",
      "WRITE",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0810 ["INT_ADD", "register:40f0:8", ["const:bd0810:8", "const:4:8"]]
- 00bd0810 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd1804 ["INT_ADD", "register:40f0:8", ["const:bd1804:8", "const:4:8"]]
+ 00bd1804 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd0818 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
- 00bd0818 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd180c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:908:8"]]
+ 00bd180c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd07f4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd17e8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-eb7dfb14fa3cee74037709e2ec7c14ab"></a>

### [`00bd082c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd082c.md) → [`00bd1820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1820.md) _ZN8firebase4auth10authresult10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd1850",
      "incomplete_value": true,
      "site": "00bd1850",
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
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd085c",
      "incomplete_value": true,
      "site": "00bd085c",
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
            "const:948:8"
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
      "definition_site": "00bd1834",
      "incomplete_value": true,
      "site": "00bd1834",
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
      "definition_site": "00bd0840",
      "incomplete_value": true,
      "site": "00bd0840",
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
      "definition_site": "00bd183c",
      "incomplete_value": false,
      "site": "00bd1848",
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
            "const:7d1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0848",
      "incomplete_value": false,
      "site": "00bd0854",
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
            "const:787:8"
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
      "00bd1830",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd183c",
      "PARAM",
      [
        "storage",
        "002b2787",
        null,
        "string"
      ]
    ],
    [
      "00bd1850",
      "WRITE",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1830",
      "READ",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd183c",
      "PARAM",
      [
        "storage",
        "002b27d1",
        null,
        "string"
      ]
    ],
    [
      "00bd1850",
      "WRITE",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0854 ["INT_ADD", "register:40f0:8", ["const:bd0854:8", "const:4:8"]]
- 00bd0854 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd1848 ["INT_ADD", "register:40f0:8", ["const:bd1848:8", "const:4:8"]]
+ 00bd1848 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd085c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
- 00bd085c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1850 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:908:8"]]
+ 00bd1850 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0838 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd182c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-cdef7893742c6ba6fac0bbf517f08000"></a>

### [`00bd087c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd087c.md) → [`00bd1870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1870.md) _ZN8firebase4auth10authresult15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd18c8",
      "incomplete_value": true,
      "site": "00bd18c8",
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
            "const:910:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd08d4",
      "incomplete_value": true,
      "site": "00bd08d4",
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
            "const:950:8"
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
      "00bd1884",
      "READ",
      [
        "storage",
        "01126950",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd18a4",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd18c8",
      "WRITE",
      [
        "storage",
        "01126950",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd1884",
      "READ",
      [
        "storage",
        "01127910",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd18a4",
      "READ",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd18c8",
      "WRITE",
      [
        "storage",
        "01127910",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd08d4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd08d4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:950:8"]]
- 00bd08d4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd18c8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd18c8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:910:8"]]
+ 00bd18c8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd088c ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd1880 ["COPY", "register:40a8:8", ["const:1127000:8"]]
- 00bd0890 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:950:8"]]
- 00bd0890 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd0890 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd1884 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:910:8"]]
+ 00bd1884 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1884 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-7f0e8cd92ba68bec8ae2690e5b12623e"></a>

### [`00bd08e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd08e8.md) → [`00bd18dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd18dc.md) _ZN8firebase4auth10authresult12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd1918",
      "incomplete_value": true,
      "site": "00bd1918",
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
            "const:910:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0924",
      "incomplete_value": true,
      "site": "00bd0924",
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
            "const:950:8"
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
      "definition_site": "00bd1938",
      "incomplete_value": true,
      "site": "00bd1938",
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
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0944",
      "incomplete_value": true,
      "site": "00bd0944",
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
            "const:948:8"
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
      "definition_site": "00bd18f4",
      "incomplete_value": true,
      "site": "00bd18f4",
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
      "definition_site": "00bd0900",
      "incomplete_value": true,
      "site": "00bd0900",
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
      "00bd18f0",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd18fc",
      "READ",
      [
        "storage",
        "01126950",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1918",
      "WRITE",
      [
        "storage",
        "01126950",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd18f0",
      "READ",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd18fc",
      "READ",
      [
        "storage",
        "01127910",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1918",
      "WRITE",
      [
        "storage",
        "01127910",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0924 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd0924 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd0924 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:950:8"]]
- 00bd0924 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd1918 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd1918 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd1918 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:910:8"]]
+ 00bd1918 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd0944 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
- 00bd0944 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd0944 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd1938 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:908:8"]]
+ 00bd1938 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd1938 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00bd08f8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd18ec ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-f12a9f8328b962999b9bbf55d216e999"></a>

### [`00bd0958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0958.md) → [`00bd194c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd194c.md) _ZN8firebase4auth10authresult14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd198c",
      "incomplete_value": true,
      "site": "00bd198c",
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
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0998",
      "incomplete_value": true,
      "site": "00bd0998",
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
            "const:948:8"
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
      "definition_site": "00bd1968",
      "incomplete_value": true,
      "site": "00bd1968",
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
      "definition_site": "00bd0974",
      "incomplete_value": true,
      "site": "00bd0974",
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
        "00bd0974"
      ],
      [
        "FALL_THROUGH",
        "00bd1968"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd1968",
      "incomplete_value": true,
      "site": "00bd198c",
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
      "definition_site": "00bd0974",
      "incomplete_value": true,
      "site": "00bd0998",
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
      "00bd1960",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1970",
      "PARAM",
      [
        "storage",
        "002b2787",
        null,
        "string"
      ]
    ],
    [
      "00bd198c",
      "WRITE",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1960",
      "READ",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1970",
      "PARAM",
      [
        "storage",
        "002b27d1",
        null,
        "string"
      ]
    ],
    [
      "00bd198c",
      "WRITE",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0998 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
- 00bd0998 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd198c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:908:8"]]
+ 00bd198c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0964 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd1958 ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bd096c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
- 00bd096c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1960 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:908:8"]]
+ 00bd1960 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9e9f9b80ab56aad2a4a66818ff0511c1"></a>

### [`00bd09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd09c8.md) → [`00bd19bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd19bc.md) _ZN8firebase4auth10authresult11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd19d8",
      "incomplete_value": false,
      "site": "00bd19dc",
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
      "definition_site": "00bd09e4",
      "incomplete_value": false,
      "site": "00bd09e8",
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
      "definition_site": "00bd19e8",
      "incomplete_value": true,
      "site": "00bd19f4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd09f4",
      "incomplete_value": true,
      "site": "00bd0a00",
      "value": [
        "LOAD",
        "8",
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
      "00bd19d8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd19e8",
      "DATA",
      [
        "storage",
        "01126958",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd19d8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd19e8",
      "DATA",
      [
        "storage",
        "01127918",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd09e8 ["INT_ADD", "register:40f0:8", ["const:bd09e8:8", "const:4:8"]]
- 00bd09e8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd19dc ["INT_ADD", "register:40f0:8", ["const:bd19dc:8", "const:4:8"]]
+ 00bd19dc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd09e4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd09e4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd09e4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd09e4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd19d8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd19d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd19d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd19d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd09ec ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd19e0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-b3ee13b4a5d8977c656054c1ce8d4a4d"></a>

### [`00bd0a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0a04.md) → [`00bd19f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd19f8.md) _ZN8firebase4auth10authresult13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd1a38",
      "incomplete_value": true,
      "site": "00bd1a38",
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
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0a44",
      "incomplete_value": true,
      "site": "00bd0a44",
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
            "const:948:8"
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
      "definition_site": "00bd1a14",
      "incomplete_value": true,
      "site": "00bd1a14",
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
      "definition_site": "00bd0a20",
      "incomplete_value": true,
      "site": "00bd0a20",
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
      "definition_site": "00bd1a1c",
      "incomplete_value": false,
      "site": "00bd1a30",
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
            "const:7d1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0a28",
      "incomplete_value": false,
      "site": "00bd0a3c",
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
            "const:787:8"
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
      "00bd1a0c",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1a1c",
      "PARAM",
      [
        "storage",
        "002b2787",
        null,
        "string"
      ]
    ],
    [
      "00bd1a38",
      "WRITE",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1a0c",
      "READ",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1a1c",
      "PARAM",
      [
        "storage",
        "002b27d1",
        null,
        "string"
      ]
    ],
    [
      "00bd1a38",
      "WRITE",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0a3c ["INT_ADD", "register:40f0:8", ["const:bd0a3c:8", "const:4:8"]]
- 00bd0a3c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd1a30 ["INT_ADD", "register:40f0:8", ["const:bd1a30:8", "const:4:8"]]
+ 00bd1a30 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd0a44 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
- 00bd0a44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1a38 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:908:8"]]
+ 00bd1a38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0a10 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd1a04 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-6769ac643d39d51688f55d3a3cde9e8a"></a>

### [`00bd0a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0a74.md) → [`00bd1a68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1a68.md) _ZN8firebase4auth10authresult10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd1a84",
      "incomplete_value": false,
      "site": "00bd1a88",
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
      "definition_site": "00bd0a90",
      "incomplete_value": false,
      "site": "00bd0a94",
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
      "definition_site": "00bd1a94",
      "incomplete_value": true,
      "site": "00bd1aa0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd0aa0",
      "incomplete_value": true,
      "site": "00bd0aac",
      "value": [
        "LOAD",
        "8",
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
      "00bd1a84",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd1a94",
      "DATA",
      [
        "storage",
        "01126970",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd1a84",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd1a94",
      "DATA",
      [
        "storage",
        "01127930",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0a94 ["INT_ADD", "register:40f0:8", ["const:bd0a94:8", "const:4:8"]]
- 00bd0a94 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd1a88 ["INT_ADD", "register:40f0:8", ["const:bd1a88:8", "const:4:8"]]
+ 00bd1a88 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd0a90 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd0a90 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0a90 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0a90 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd1a84 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd1a84 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1a84 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1a84 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd0a98 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd1a8c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-bec92da355f894d060f9fdacd8ceba1e"></a>

### [`00bd0ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0ab0.md) → [`00bd1aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1aa4.md) _ZN8firebase4auth20additional_user_info19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocato

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
      "definition_site": "00bd1ad0",
      "incomplete_value": true,
      "site": "00bd1ad0",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0adc",
      "incomplete_value": true,
      "site": "00bd0adc",
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
            "const:978:8"
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
      "definition_site": "00bd1ab8",
      "incomplete_value": true,
      "site": "00bd1ab8",
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
      "definition_site": "00bd0ac4",
      "incomplete_value": true,
      "site": "00bd0ac4",
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
      "definition_site": "00bd1ac4",
      "incomplete_value": false,
      "site": "00bd1ac8",
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
            "const:34b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0ad0",
      "incomplete_value": false,
      "site": "00bd0ad4",
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
            "const:27e:8"
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
      "00bd1ab4",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1ac4",
      "PARAM",
      [
        "storage",
        "002ac27e",
        null,
        "string"
      ]
    ],
    [
      "00bd1ad0",
      "WRITE",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1ab4",
      "READ",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1ac4",
      "PARAM",
      [
        "storage",
        "002ac34b",
        null,
        "string"
      ]
    ],
    [
      "00bd1ad0",
      "WRITE",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0ad4 ["INT_ADD", "register:40f0:8", ["const:bd0ad4:8", "const:4:8"]]
- 00bd0ad4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd1ac8 ["INT_ADD", "register:40f0:8", ["const:bd1ac8:8", "const:4:8"]]
+ 00bd1ac8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd0adc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
- 00bd0adc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1ad0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:938:8"]]
+ 00bd1ad0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0abc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd1ab0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-c4358fd7535e6e34432b66169e55b84f"></a>

### [`00bd0af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0af0.md) → [`00bd1ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1ae4.md) _ZN8firebase4auth20additional_user_info19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocato

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
      "definition_site": "00bd1b10",
      "incomplete_value": true,
      "site": "00bd1b10",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0b1c",
      "incomplete_value": true,
      "site": "00bd0b1c",
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
            "const:978:8"
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
      "definition_site": "00bd1af8",
      "incomplete_value": true,
      "site": "00bd1af8",
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
      "definition_site": "00bd0b04",
      "incomplete_value": true,
      "site": "00bd0b04",
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
      "definition_site": "00bd1b00",
      "incomplete_value": false,
      "site": "00bd1b08",
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
            "const:34b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0b0c",
      "incomplete_value": false,
      "site": "00bd0b14",
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
            "const:27e:8"
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
      "00bd1af4",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1b00",
      "PARAM",
      [
        "storage",
        "002ac27e",
        null,
        "string"
      ]
    ],
    [
      "00bd1b10",
      "WRITE",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1af4",
      "READ",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1b00",
      "PARAM",
      [
        "storage",
        "002ac34b",
        null,
        "string"
      ]
    ],
    [
      "00bd1b10",
      "WRITE",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0b14 ["INT_ADD", "register:40f0:8", ["const:bd0b14:8", "const:4:8"]]
- 00bd0b14 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd1b08 ["INT_ADD", "register:40f0:8", ["const:bd1b08:8", "const:4:8"]]
+ 00bd1b08 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd0b1c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
- 00bd0b1c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1b10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:938:8"]]
+ 00bd1b10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0afc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd1af0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-38a5cd3e456fe57487909def2d887ea0"></a>

### [`00bd0b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0b30.md) → [`00bd1b24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1b24.md) _ZN8firebase4auth20additional_user_info10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd1b54",
      "incomplete_value": true,
      "site": "00bd1b54",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0b60",
      "incomplete_value": true,
      "site": "00bd0b60",
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
            "const:978:8"
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
      "definition_site": "00bd1b38",
      "incomplete_value": true,
      "site": "00bd1b38",
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
      "definition_site": "00bd0b44",
      "incomplete_value": true,
      "site": "00bd0b44",
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
      "definition_site": "00bd1b44",
      "incomplete_value": false,
      "site": "00bd1b4c",
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
            "const:34b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0b50",
      "incomplete_value": false,
      "site": "00bd0b58",
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
            "const:27e:8"
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
      "00bd1b34",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1b44",
      "PARAM",
      [
        "storage",
        "002ac27e",
        null,
        "string"
      ]
    ],
    [
      "00bd1b54",
      "WRITE",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1b34",
      "READ",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1b44",
      "PARAM",
      [
        "storage",
        "002ac34b",
        null,
        "string"
      ]
    ],
    [
      "00bd1b54",
      "WRITE",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0b58 ["INT_ADD", "register:40f0:8", ["const:bd0b58:8", "const:4:8"]]
- 00bd0b58 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd1b4c ["INT_ADD", "register:40f0:8", ["const:bd1b4c:8", "const:4:8"]]
+ 00bd1b4c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd0b60 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
- 00bd0b60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1b54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:938:8"]]
+ 00bd1b54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0b3c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd1b30 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-e2f90b2e265e884e69a98a105ad43669"></a>

### [`00bd0b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0b74.md) → [`00bd1b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1b68.md) _ZN8firebase4auth20additional_user_info10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd1b98",
      "incomplete_value": true,
      "site": "00bd1b98",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0ba4",
      "incomplete_value": true,
      "site": "00bd0ba4",
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
            "const:978:8"
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
      "definition_site": "00bd1b7c",
      "incomplete_value": true,
      "site": "00bd1b7c",
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
      "definition_site": "00bd0b88",
      "incomplete_value": true,
      "site": "00bd0b88",
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
      "definition_site": "00bd1b84",
      "incomplete_value": false,
      "site": "00bd1b90",
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
            "const:34b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0b90",
      "incomplete_value": false,
      "site": "00bd0b9c",
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
            "const:27e:8"
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
      "00bd1b78",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1b84",
      "PARAM",
      [
        "storage",
        "002ac27e",
        null,
        "string"
      ]
    ],
    [
      "00bd1b98",
      "WRITE",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1b78",
      "READ",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1b84",
      "PARAM",
      [
        "storage",
        "002ac34b",
        null,
        "string"
      ]
    ],
    [
      "00bd1b98",
      "WRITE",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0b9c ["INT_ADD", "register:40f0:8", ["const:bd0b9c:8", "const:4:8"]]
- 00bd0b9c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd1b90 ["INT_ADD", "register:40f0:8", ["const:bd1b90:8", "const:4:8"]]
+ 00bd1b90 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd0ba4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:978:8"]]
- 00bd0ba4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1b98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:938:8"]]
+ 00bd1b98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0b80 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd1b74 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-2f1268dfe490e00ac13457b5f317ce35"></a>

### [`00bd0bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0bc4.md) → [`00bd1bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1bb8.md) _ZN8firebase4auth20additional_user_info15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd1c10",
      "incomplete_value": true,
      "site": "00bd1c10",
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
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0c1c",
      "incomplete_value": true,
      "site": "00bd0c1c",
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
            "const:980:8"
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
      "definition_site": "00bd1bec",
      "incomplete_value": true,
      "site": "00bd1bf8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:938:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0bf8",
      "incomplete_value": true,
      "site": "00bd0c04",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:978:8"
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
      "00bd1bcc",
      "READ",
      [
        "storage",
        "01126980",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1bec",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1c10",
      "WRITE",
      [
        "storage",
        "01126980",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd1bcc",
      "READ",
      [
        "storage",
        "01127940",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1bec",
      "READ",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1c10",
      "WRITE",
      [
        "storage",
        "01127940",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0c04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd0c04 ["INT_ADD", "register:40f0:8", ["const:bd0c04:8", "const:4:8"]]
- 00bd0c04 ["CALLIND", null, ["register:0:8"]]
+ 00bd1bf8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd1bf8 ["INT_ADD", "register:40f0:8", ["const:bd1bf8:8", "const:4:8"]]
+ 00bd1bf8 ["CALLIND", null, ["register:0:8"]]
- 00bd0c1c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd0c1c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:980:8"]]
- 00bd0c1c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd1c10 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd1c10 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:940:8"]]
+ 00bd1c10 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd0bd4 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd1bc8 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-d17cd32173e892afb9784d0cc9147866"></a>

### [`00bd0c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0c30.md) → [`00bd1c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1c24.md) _ZN8firebase4auth20additional_user_info12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd1c60",
      "incomplete_value": true,
      "site": "00bd1c60",
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
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0c6c",
      "incomplete_value": true,
      "site": "00bd0c6c",
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
            "const:980:8"
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
      "definition_site": "00bd1c80",
      "incomplete_value": true,
      "site": "00bd1c80",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0c8c",
      "incomplete_value": true,
      "site": "00bd0c8c",
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
            "const:978:8"
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
      "definition_site": "00bd1c3c",
      "incomplete_value": true,
      "site": "00bd1c3c",
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
      "definition_site": "00bd0c48",
      "incomplete_value": true,
      "site": "00bd0c48",
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
      "00bd1c38",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1c44",
      "READ",
      [
        "storage",
        "01126980",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1c60",
      "WRITE",
      [
        "storage",
        "01126980",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd1c38",
      "READ",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1c44",
      "READ",
      [
        "storage",
        "01127940",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1c60",
      "WRITE",
      [
        "storage",
        "01127940",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0c6c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd0c6c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd0c6c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:980:8"]]
- 00bd0c6c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd1c60 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd1c60 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd1c60 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:940:8"]]
+ 00bd1c60 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd0c88 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd0c88 ["INT_ADD", "register:40f0:8", ["const:bd0c88:8", "const:4:8"]]
- 00bd0c88 ["CALLIND", null, ["register:0:8"]]
+ 00bd1c7c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd1c7c ["INT_ADD", "register:40f0:8", ["const:bd1c7c:8", "const:4:8"]]
+ 00bd1c7c ["CALLIND", null, ["register:0:8"]]
- 00bd0c8c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:978:8"]]
- 00bd0c8c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd0c8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd1c80 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:938:8"]]
+ 00bd1c80 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd1c80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-a747f8aad2eb4cd9b308696760bc73be"></a>

### [`00bd0ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0ca0.md) → [`00bd1c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1c94.md) _ZN8firebase4auth20additional_user_info14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd1cd4",
      "incomplete_value": true,
      "site": "00bd1cd4",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0ce0",
      "incomplete_value": true,
      "site": "00bd0ce0",
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
            "const:978:8"
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
      "definition_site": "00bd1cb0",
      "incomplete_value": true,
      "site": "00bd1cb0",
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
      "definition_site": "00bd0cbc",
      "incomplete_value": true,
      "site": "00bd0cbc",
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
      "definition_site": "00bd1cb8",
      "incomplete_value": false,
      "site": "00bd1ccc",
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
            "const:34b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0cc4",
      "incomplete_value": false,
      "site": "00bd0cd8",
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
            "const:27e:8"
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
      "00bd1ca8",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1cb8",
      "PARAM",
      [
        "storage",
        "002ac27e",
        null,
        "string"
      ]
    ],
    [
      "00bd1cd4",
      "WRITE",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1ca8",
      "READ",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1cb8",
      "PARAM",
      [
        "storage",
        "002ac34b",
        null,
        "string"
      ]
    ],
    [
      "00bd1cd4",
      "WRITE",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0cd8 ["INT_ADD", "register:40f0:8", ["const:bd0cd8:8", "const:4:8"]]
- 00bd0cd8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd1ccc ["INT_ADD", "register:40f0:8", ["const:bd1ccc:8", "const:4:8"]]
+ 00bd1ccc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd0ce0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:978:8"]]
- 00bd0ce0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1cd4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:938:8"]]
+ 00bd1cd4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0cac ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd1ca0 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-87792bdfcfc8c419db3a03bcacfa9a9c"></a>

### [`00bd0d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0d10.md) → [`00bd1d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1d04.md) _ZN8firebase4auth20additional_user_info11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd1d20",
      "incomplete_value": false,
      "site": "00bd1d24",
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
      "definition_site": "00bd0d2c",
      "incomplete_value": false,
      "site": "00bd0d30",
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
      "definition_site": "00bd1d30",
      "incomplete_value": true,
      "site": "00bd1d3c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd0d3c",
      "incomplete_value": true,
      "site": "00bd0d48",
      "value": [
        "LOAD",
        "8",
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
      "00bd1d20",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd1d30",
      "DATA",
      [
        "storage",
        "01126988",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1d20",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd1d30",
      "DATA",
      [
        "storage",
        "01127948",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0d30 ["INT_ADD", "register:40f0:8", ["const:bd0d30:8", "const:4:8"]]
- 00bd0d30 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd1d24 ["INT_ADD", "register:40f0:8", ["const:bd1d24:8", "const:4:8"]]
+ 00bd1d24 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd0d2c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd0d2c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0d2c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0d2c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd1d20 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd1d20 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1d20 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1d20 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd0d34 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd1d28 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-5cb6ce625b93bdb971849023a7d04ad3"></a>

### [`00bd0d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0d4c.md) → [`00bd1d40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1d40.md) _ZN8firebase4auth20additional_user_info13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd1d80",
      "incomplete_value": true,
      "site": "00bd1d80",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0d8c",
      "incomplete_value": true,
      "site": "00bd0d8c",
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
            "const:978:8"
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
      "definition_site": "00bd1d5c",
      "incomplete_value": true,
      "site": "00bd1d5c",
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
      "definition_site": "00bd0d68",
      "incomplete_value": true,
      "site": "00bd0d68",
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
        "00bd0d68"
      ],
      [
        "FALL_THROUGH",
        "00bd1d5c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd1d5c",
      "incomplete_value": true,
      "site": "00bd1d80",
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
      "definition_site": "00bd0d68",
      "incomplete_value": true,
      "site": "00bd0d8c",
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
      "00bd1d54",
      "READ",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1d64",
      "PARAM",
      [
        "storage",
        "002ac27e",
        null,
        "string"
      ]
    ],
    [
      "00bd1d80",
      "WRITE",
      [
        "storage",
        "01126978",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1d54",
      "READ",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1d64",
      "PARAM",
      [
        "storage",
        "002ac34b",
        null,
        "string"
      ]
    ],
    [
      "00bd1d80",
      "WRITE",
      [
        "storage",
        "01127938",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0d8c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:978:8"]]
- 00bd0d8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1d80 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:938:8"]]
+ 00bd1d80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0d58 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd1d4c ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bd0d60 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:978:8"]]
- 00bd0d60 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1d54 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:938:8"]]
+ 00bd1d54 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9f011896c6b95aa3eb6a69254b8281ab"></a>

### [`00bd0dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0dbc.md) → [`00bd1db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1db0.md) _ZN8firebase4auth20additional_user_info10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd1dcc",
      "incomplete_value": false,
      "site": "00bd1dd0",
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
      "definition_site": "00bd0dd8",
      "incomplete_value": false,
      "site": "00bd0ddc",
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
      "definition_site": "00bd1ddc",
      "incomplete_value": true,
      "site": "00bd1de8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd0de8",
      "incomplete_value": true,
      "site": "00bd0df4",
      "value": [
        "LOAD",
        "8",
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
      "00bd1dcc",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd1ddc",
      "DATA",
      [
        "storage",
        "011269a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd1dcc",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd1ddc",
      "DATA",
      [
        "storage",
        "01127960",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0ddc ["INT_ADD", "register:40f0:8", ["const:bd0ddc:8", "const:4:8"]]
- 00bd0ddc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd1dd0 ["INT_ADD", "register:40f0:8", ["const:bd1dd0:8", "const:4:8"]]
+ 00bd1dd0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd0dd8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd0dd8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0dd8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd0dd8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd1dcc ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd1dcc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1dcc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1dcc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd0de0 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd1dd4 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-06cc3815a6c44c69f2971edc24506281"></a>

### [`00bd0df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0df8.md) → [`00bd1dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1dec.md) _ZN8firebase4auth27api_not_available_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9a

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
      "definition_site": "00bd1e18",
      "incomplete_value": true,
      "site": "00bd1e18",
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
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0e24",
      "incomplete_value": true,
      "site": "00bd0e24",
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
            "const:9a8:8"
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
      "definition_site": "00bd1e00",
      "incomplete_value": true,
      "site": "00bd1e00",
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
      "definition_site": "00bd0e0c",
      "incomplete_value": true,
      "site": "00bd0e0c",
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
      "definition_site": "00bd1e0c",
      "incomplete_value": false,
      "site": "00bd1e10",
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
            "const:54c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0e18",
      "incomplete_value": false,
      "site": "00bd0e1c",
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
            "const:3f4:8"
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
      "00bd1dfc",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1e0c",
      "PARAM",
      [
        "storage",
        "002a73f4",
        null,
        "string"
      ]
    ],
    [
      "00bd1e18",
      "WRITE",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1dfc",
      "READ",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1e0c",
      "PARAM",
      [
        "storage",
        "002a754c",
        null,
        "string"
      ]
    ],
    [
      "00bd1e18",
      "WRITE",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0e1c ["INT_ADD", "register:40f0:8", ["const:bd0e1c:8", "const:4:8"]]
- 00bd0e1c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd1e10 ["INT_ADD", "register:40f0:8", ["const:bd1e10:8", "const:4:8"]]
+ 00bd1e10 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd0e24 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd0e24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1e18 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
+ 00bd1e18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0e04 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd1df8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-4cad264382e853a73635e3386b1aca66"></a>

### [`00bd0e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0e38.md) → [`00bd1e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1e2c.md) _ZN8firebase4auth27api_not_available_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9a

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
      "definition_site": "00bd1e58",
      "incomplete_value": true,
      "site": "00bd1e58",
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
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0e64",
      "incomplete_value": true,
      "site": "00bd0e64",
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
            "const:9a8:8"
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
      "definition_site": "00bd1e40",
      "incomplete_value": true,
      "site": "00bd1e40",
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
      "definition_site": "00bd0e4c",
      "incomplete_value": true,
      "site": "00bd0e4c",
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
      "definition_site": "00bd1e48",
      "incomplete_value": false,
      "site": "00bd1e50",
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
            "const:54c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0e54",
      "incomplete_value": false,
      "site": "00bd0e5c",
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
            "const:3f4:8"
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
      "00bd1e3c",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1e48",
      "PARAM",
      [
        "storage",
        "002a73f4",
        null,
        "string"
      ]
    ],
    [
      "00bd1e58",
      "WRITE",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1e3c",
      "READ",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1e48",
      "PARAM",
      [
        "storage",
        "002a754c",
        null,
        "string"
      ]
    ],
    [
      "00bd1e58",
      "WRITE",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0e5c ["INT_ADD", "register:40f0:8", ["const:bd0e5c:8", "const:4:8"]]
- 00bd0e5c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd1e50 ["INT_ADD", "register:40f0:8", ["const:bd1e50:8", "const:4:8"]]
+ 00bd1e50 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd0e64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd0e64 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1e58 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
+ 00bd1e58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0e44 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd1e38 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-2abf9f98a3fcccf32df59e4c798faf5f"></a>

### [`00bd0e78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0e78.md) → [`00bd1e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1e6c.md) _ZN8firebase4auth27api_not_available_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd1e9c",
      "incomplete_value": true,
      "site": "00bd1e9c",
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
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0ea8",
      "incomplete_value": true,
      "site": "00bd0ea8",
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
            "const:9a8:8"
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
      "definition_site": "00bd1e80",
      "incomplete_value": true,
      "site": "00bd1e80",
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
      "definition_site": "00bd0e8c",
      "incomplete_value": true,
      "site": "00bd0e8c",
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
      "definition_site": "00bd1e8c",
      "incomplete_value": false,
      "site": "00bd1e94",
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
            "const:54c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0e98",
      "incomplete_value": false,
      "site": "00bd0ea0",
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
            "const:3f4:8"
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
      "00bd1e7c",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1e8c",
      "PARAM",
      [
        "storage",
        "002a73f4",
        null,
        "string"
      ]
    ],
    [
      "00bd1e9c",
      "WRITE",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1e7c",
      "READ",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1e8c",
      "PARAM",
      [
        "storage",
        "002a754c",
        null,
        "string"
      ]
    ],
    [
      "00bd1e9c",
      "WRITE",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0ea0 ["INT_ADD", "register:40f0:8", ["const:bd0ea0:8", "const:4:8"]]
- 00bd0ea0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd1e94 ["INT_ADD", "register:40f0:8", ["const:bd1e94:8", "const:4:8"]]
+ 00bd1e94 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd0ea8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd0ea8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1e9c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
+ 00bd1e9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0e84 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd1e78 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-cd5db42458c7b2fdf5b42e1daf8febdc"></a>

### [`00bd0ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0ebc.md) → [`00bd1eb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1eb0.md) _ZN8firebase4auth27api_not_available_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd1ee0",
      "incomplete_value": true,
      "site": "00bd1ee0",
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
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0eec",
      "incomplete_value": true,
      "site": "00bd0eec",
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
            "const:9a8:8"
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
      "definition_site": "00bd1ec4",
      "incomplete_value": true,
      "site": "00bd1ec4",
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
      "definition_site": "00bd0ed0",
      "incomplete_value": true,
      "site": "00bd0ed0",
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
        "00bd0ed0"
      ],
      [
        "FALL_THROUGH",
        "00bd1ec4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd1ec4",
      "incomplete_value": true,
      "site": "00bd1ee0",
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
      "definition_site": "00bd0ed0",
      "incomplete_value": true,
      "site": "00bd0eec",
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
      "00bd1ec0",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1ecc",
      "PARAM",
      [
        "storage",
        "002a73f4",
        null,
        "string"
      ]
    ],
    [
      "00bd1ee0",
      "WRITE",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1ec0",
      "READ",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1ecc",
      "PARAM",
      [
        "storage",
        "002a754c",
        null,
        "string"
      ]
    ],
    [
      "00bd1ee0",
      "WRITE",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0eec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd0eec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1ee0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
+ 00bd1ee0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0ec8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd1ebc ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd0ecc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd0ecc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1ec0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
+ 00bd1ec0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3a3aee91a61c190e3c0fcdeef1fc72c1"></a>

### [`00bd0f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0f0c.md) → [`00bd1f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1f00.md) _ZN8firebase4auth27api_not_available_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd1f58",
      "incomplete_value": true,
      "site": "00bd1f58",
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
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0f64",
      "incomplete_value": true,
      "site": "00bd0f64",
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
            "const:9b0:8"
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
      "definition_site": "00bd1f34",
      "incomplete_value": true,
      "site": "00bd1f40",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:968:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0f40",
      "incomplete_value": true,
      "site": "00bd0f4c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:9a8:8"
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
      "00bd1f14",
      "READ",
      [
        "storage",
        "011269b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1f34",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1f58",
      "WRITE",
      [
        "storage",
        "011269b0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd1f14",
      "READ",
      [
        "storage",
        "01127970",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1f34",
      "READ",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1f58",
      "WRITE",
      [
        "storage",
        "01127970",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0f4c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd0f4c ["INT_ADD", "register:40f0:8", ["const:bd0f4c:8", "const:4:8"]]
- 00bd0f4c ["CALLIND", null, ["register:0:8"]]
+ 00bd1f40 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd1f40 ["INT_ADD", "register:40f0:8", ["const:bd1f40:8", "const:4:8"]]
+ 00bd1f40 ["CALLIND", null, ["register:0:8"]]
- 00bd0f64 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd0f64 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9b0:8"]]
- 00bd0f64 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd1f58 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd1f58 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:970:8"]]
+ 00bd1f58 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd0f1c ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd1f10 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-723c7f03060eb473921f8cc96b16be45"></a>

### [`00bd0f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0f78.md) → [`00bd1f6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1f6c.md) _ZN8firebase4auth27api_not_available_exception12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd1fa8",
      "incomplete_value": true,
      "site": "00bd1fa8",
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
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0fb4",
      "incomplete_value": true,
      "site": "00bd0fb4",
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
            "const:9b0:8"
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
      "definition_site": "00bd1fc8",
      "incomplete_value": true,
      "site": "00bd1fc8",
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
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd0fd4",
      "incomplete_value": true,
      "site": "00bd0fd4",
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
            "const:9a8:8"
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
      "definition_site": "00bd1f84",
      "incomplete_value": true,
      "site": "00bd1f84",
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
      "definition_site": "00bd0f90",
      "incomplete_value": true,
      "site": "00bd0f90",
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
      "00bd1f80",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1f8c",
      "READ",
      [
        "storage",
        "011269b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1fa8",
      "WRITE",
      [
        "storage",
        "011269b0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd1f80",
      "READ",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1f8c",
      "READ",
      [
        "storage",
        "01127970",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1fa8",
      "WRITE",
      [
        "storage",
        "01127970",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd0fb4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd0fb4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd0fb4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9b0:8"]]
- 00bd0fb4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd1fa8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd1fa8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd1fa8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:970:8"]]
+ 00bd1fa8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd0fd0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd0fd0 ["INT_ADD", "register:40f0:8", ["const:bd0fd0:8", "const:4:8"]]
- 00bd0fd0 ["CALLIND", null, ["register:0:8"]]
+ 00bd1fc4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd1fc4 ["INT_ADD", "register:40f0:8", ["const:bd1fc4:8", "const:4:8"]]
+ 00bd1fc4 ["CALLIND", null, ["register:0:8"]]
- 00bd0fd4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00bd0fd4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd0fd4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd1fc8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:968:8"]]
+ 00bd1fc8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd1fc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-d6cd9f29a8d70a2de5664274749af934"></a>

### [`00bd0fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd0fe8.md) → [`00bd1fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd1/00bd1fdc.md) _ZN8firebase4auth27api_not_available_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd201c",
      "incomplete_value": true,
      "site": "00bd201c",
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
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1028",
      "incomplete_value": true,
      "site": "00bd1028",
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
            "const:9a8:8"
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
      "definition_site": "00bd1ff8",
      "incomplete_value": true,
      "site": "00bd1ff8",
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
      "definition_site": "00bd1004",
      "incomplete_value": true,
      "site": "00bd1004",
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
      "definition_site": "00bd2000",
      "incomplete_value": false,
      "site": "00bd2014",
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
            "const:54c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd100c",
      "incomplete_value": false,
      "site": "00bd1020",
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
            "const:3f4:8"
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
      "00bd1ff0",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2000",
      "PARAM",
      [
        "storage",
        "002a73f4",
        null,
        "string"
      ]
    ],
    [
      "00bd201c",
      "WRITE",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1ff0",
      "READ",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2000",
      "PARAM",
      [
        "storage",
        "002a754c",
        null,
        "string"
      ]
    ],
    [
      "00bd201c",
      "WRITE",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1020 ["INT_ADD", "register:40f0:8", ["const:bd1020:8", "const:4:8"]]
- 00bd1020 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2014 ["INT_ADD", "register:40f0:8", ["const:bd2014:8", "const:4:8"]]
+ 00bd2014 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1028 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00bd1028 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd201c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:968:8"]]
+ 00bd201c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd0ff4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd1fe8 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-d4513fde9d3c2fa3f966db6bae2a6c0a"></a>

### [`00bd1058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1058.md) → [`00bd204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd204c.md) _ZN8firebase4auth27api_not_available_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd2068",
      "incomplete_value": false,
      "site": "00bd206c",
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
      "definition_site": "00bd1074",
      "incomplete_value": false,
      "site": "00bd1078",
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
      "definition_site": "00bd2078",
      "incomplete_value": true,
      "site": "00bd2084",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd1084",
      "incomplete_value": true,
      "site": "00bd1090",
      "value": [
        "LOAD",
        "8",
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
      "00bd2068",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd2078",
      "DATA",
      [
        "storage",
        "011269b8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd2068",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd2078",
      "DATA",
      [
        "storage",
        "01127978",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1078 ["INT_ADD", "register:40f0:8", ["const:bd1078:8", "const:4:8"]]
- 00bd1078 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd206c ["INT_ADD", "register:40f0:8", ["const:bd206c:8", "const:4:8"]]
+ 00bd206c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd1074 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd1074 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1074 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1074 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd2068 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd2068 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2068 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2068 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd107c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd2070 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-1172cb8d3d360a61f3c5d5963395c4e2"></a>

### [`00bd1094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1094.md) → [`00bd2088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2088.md) _ZN8firebase4auth27api_not_available_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd20c8",
      "incomplete_value": true,
      "site": "00bd20c8",
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
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd10d4",
      "incomplete_value": true,
      "site": "00bd10d4",
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
            "const:9a8:8"
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
      "definition_site": "00bd20a4",
      "incomplete_value": true,
      "site": "00bd20a4",
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
      "definition_site": "00bd10b0",
      "incomplete_value": true,
      "site": "00bd10b0",
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
      "definition_site": "00bd20ac",
      "incomplete_value": false,
      "site": "00bd20c0",
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
            "const:54c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd10b8",
      "incomplete_value": false,
      "site": "00bd10cc",
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
            "const:3f4:8"
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
      "00bd209c",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd20ac",
      "PARAM",
      [
        "storage",
        "002a73f4",
        null,
        "string"
      ]
    ],
    [
      "00bd20c8",
      "WRITE",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd209c",
      "READ",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd20ac",
      "PARAM",
      [
        "storage",
        "002a754c",
        null,
        "string"
      ]
    ],
    [
      "00bd20c8",
      "WRITE",
      [
        "storage",
        "01127968",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd10cc ["INT_ADD", "register:40f0:8", ["const:bd10cc:8", "const:4:8"]]
- 00bd10cc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd20c0 ["INT_ADD", "register:40f0:8", ["const:bd20c0:8", "const:4:8"]]
+ 00bd20c0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd10d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00bd10d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd20c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:968:8"]]
+ 00bd20c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd10a0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd2094 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-45a4c06cb661763a61f06cfc1b0b5216"></a>

### [`00bd1104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1104.md) → [`00bd20f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd20f8.md) _ZN8firebase4auth27api_not_available_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd2114",
      "incomplete_value": false,
      "site": "00bd2118",
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
      "definition_site": "00bd1120",
      "incomplete_value": false,
      "site": "00bd1124",
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
      "definition_site": "00bd2124",
      "incomplete_value": true,
      "site": "00bd2130",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd1130",
      "incomplete_value": true,
      "site": "00bd113c",
      "value": [
        "LOAD",
        "8",
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
      "00bd2114",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd2124",
      "DATA",
      [
        "storage",
        "011269c0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd2114",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd2124",
      "DATA",
      [
        "storage",
        "01127980",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1124 ["INT_ADD", "register:40f0:8", ["const:bd1124:8", "const:4:8"]]
- 00bd1124 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd2118 ["INT_ADD", "register:40f0:8", ["const:bd2118:8", "const:4:8"]]
+ 00bd2118 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd1120 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd1120 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1120 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1120 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd2114 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd2114 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2114 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2114 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd1128 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd211c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-6883eac1958d864fafe0246c5229c72f"></a>

### [`00bd1140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1140.md) → [`00bd2134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2134.md) _ZN8firebase4auth21action_code_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
      "definition_site": "00bd2160",
      "incomplete_value": true,
      "site": "00bd2160",
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
            "const:988:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd116c",
      "incomplete_value": true,
      "site": "00bd116c",
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
            "const:9c8:8"
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
      "definition_site": "00bd2148",
      "incomplete_value": true,
      "site": "00bd2148",
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
      "definition_site": "00bd1154",
      "incomplete_value": true,
      "site": "00bd1154",
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
      "definition_site": "00bd2154",
      "incomplete_value": false,
      "site": "00bd2158",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a5000:8"
          ],
          [
            "leaf",
            "const:7e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1160",
      "incomplete_value": false,
      "site": "00bd1164",
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
            "const:fb3:8"
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
      "00bd2144",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2154",
      "PARAM",
      [
        "storage",
        "002a4fb3",
        null,
        "string"
      ]
    ],
    [
      "00bd2160",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2144",
      "READ",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2154",
      "PARAM",
      [
        "storage",
        "002a507e",
        null,
        "string"
      ]
    ],
    [
      "00bd2160",
      "WRITE",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1164 ["INT_ADD", "register:40f0:8", ["const:bd1164:8", "const:4:8"]]
- 00bd1164 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2158 ["INT_ADD", "register:40f0:8", ["const:bd2158:8", "const:4:8"]]
+ 00bd2158 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd116c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
- 00bd116c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2160 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:988:8"]]
+ 00bd2160 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd114c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2140 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-80c73dd097f7b2c974bfbb9cf23b5d8b"></a>

### [`00bd1180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1180.md) → [`00bd2174`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2174.md) _ZN8firebase4auth21action_code_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd21a0",
      "incomplete_value": true,
      "site": "00bd21a0",
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
            "const:988:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd11ac",
      "incomplete_value": true,
      "site": "00bd11ac",
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
            "const:9c8:8"
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
      "definition_site": "00bd2188",
      "incomplete_value": true,
      "site": "00bd2188",
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
      "definition_site": "00bd1194",
      "incomplete_value": true,
      "site": "00bd1194",
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
        "00bd1194"
      ],
      [
        "FALL_THROUGH",
        "00bd2188"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd2188",
      "incomplete_value": true,
      "site": "00bd21a0",
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
      "definition_site": "00bd1194",
      "incomplete_value": true,
      "site": "00bd11ac",
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
      "00bd2184",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2190",
      "PARAM",
      [
        "storage",
        "002a4fb3",
        null,
        "string"
      ]
    ],
    [
      "00bd21a0",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2184",
      "READ",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2190",
      "PARAM",
      [
        "storage",
        "002a507e",
        null,
        "string"
      ]
    ],
    [
      "00bd21a0",
      "WRITE",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd11ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
- 00bd11ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd21a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:988:8"]]
+ 00bd21a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd118c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2180 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd1190 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
- 00bd1190 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2184 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:988:8"]]
+ 00bd2184 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-81b505ae5a87acb81efcd8be2001097c"></a>

### [`00bd11c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd11c0.md) → [`00bd21b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd21b4.md) _ZN8firebase4auth21action_code_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd21e4",
      "incomplete_value": true,
      "site": "00bd21e4",
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
            "const:988:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd11f0",
      "incomplete_value": true,
      "site": "00bd11f0",
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
            "const:9c8:8"
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
      "definition_site": "00bd21c8",
      "incomplete_value": true,
      "site": "00bd21c8",
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
      "definition_site": "00bd11d4",
      "incomplete_value": true,
      "site": "00bd11d4",
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
      "definition_site": "00bd21d4",
      "incomplete_value": false,
      "site": "00bd21dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a5000:8"
          ],
          [
            "leaf",
            "const:7e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd11e0",
      "incomplete_value": false,
      "site": "00bd11e8",
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
            "const:fb3:8"
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
      "00bd21c4",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd21d4",
      "PARAM",
      [
        "storage",
        "002a4fb3",
        null,
        "string"
      ]
    ],
    [
      "00bd21e4",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd21c4",
      "READ",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd21d4",
      "PARAM",
      [
        "storage",
        "002a507e",
        null,
        "string"
      ]
    ],
    [
      "00bd21e4",
      "WRITE",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd11e8 ["INT_ADD", "register:40f0:8", ["const:bd11e8:8", "const:4:8"]]
- 00bd11e8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd21dc ["INT_ADD", "register:40f0:8", ["const:bd21dc:8", "const:4:8"]]
+ 00bd21dc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd11f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
- 00bd11f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd21e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:988:8"]]
+ 00bd21e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd11cc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd21c0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-389eaa5a6f92c6e86f8f992dac849d54"></a>

### [`00bd1204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1204.md) → [`00bd21f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd21f8.md) _ZN8firebase4auth21action_code_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd2228",
      "incomplete_value": true,
      "site": "00bd2228",
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
            "const:988:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1234",
      "incomplete_value": true,
      "site": "00bd1234",
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
            "const:9c8:8"
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
      "definition_site": "00bd220c",
      "incomplete_value": true,
      "site": "00bd220c",
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
      "definition_site": "00bd1218",
      "incomplete_value": true,
      "site": "00bd1218",
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
      "definition_site": "00bd2214",
      "incomplete_value": false,
      "site": "00bd2220",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a5000:8"
          ],
          [
            "leaf",
            "const:7e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1220",
      "incomplete_value": false,
      "site": "00bd122c",
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
            "const:fb3:8"
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
      "00bd2208",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2214",
      "PARAM",
      [
        "storage",
        "002a4fb3",
        null,
        "string"
      ]
    ],
    [
      "00bd2228",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2208",
      "READ",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2214",
      "PARAM",
      [
        "storage",
        "002a507e",
        null,
        "string"
      ]
    ],
    [
      "00bd2228",
      "WRITE",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd122c ["INT_ADD", "register:40f0:8", ["const:bd122c:8", "const:4:8"]]
- 00bd122c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2220 ["INT_ADD", "register:40f0:8", ["const:bd2220:8", "const:4:8"]]
+ 00bd2220 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1234 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
- 00bd1234 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2228 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:988:8"]]
+ 00bd2228 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1210 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2204 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-e006cd893cce5fceafa007cc740c49d6"></a>

### [`00bd1254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1254.md) → [`00bd2248`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2248.md) _ZN8firebase4auth21action_code_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd22a0",
      "incomplete_value": true,
      "site": "00bd22a0",
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
            "const:990:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd12ac",
      "incomplete_value": true,
      "site": "00bd12ac",
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
            "const:9d0:8"
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
      "definition_site": "00bd227c",
      "incomplete_value": true,
      "site": "00bd2288",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:988:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1288",
      "incomplete_value": true,
      "site": "00bd1294",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:9c8:8"
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
      "00bd225c",
      "READ",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd227c",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd22a0",
      "WRITE",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd225c",
      "READ",
      [
        "storage",
        "01127990",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd227c",
      "READ",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd22a0",
      "WRITE",
      [
        "storage",
        "01127990",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1294 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd1294 ["INT_ADD", "register:40f0:8", ["const:bd1294:8", "const:4:8"]]
- 00bd1294 ["CALLIND", null, ["register:0:8"]]
+ 00bd2288 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd2288 ["INT_ADD", "register:40f0:8", ["const:bd2288:8", "const:4:8"]]
+ 00bd2288 ["CALLIND", null, ["register:0:8"]]
- 00bd12ac ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd12ac ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9d0:8"]]
- 00bd12ac ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd22a0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd22a0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:990:8"]]
+ 00bd22a0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd1264 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd2258 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-a0496acaec5a9232cf5d420349bf174a"></a>

### [`00bd12c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd12c0.md) → [`00bd22b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd22b4.md) _ZN8firebase4auth21action_code_exception12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd22f0",
      "incomplete_value": true,
      "site": "00bd22f0",
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
            "const:990:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd12fc",
      "incomplete_value": true,
      "site": "00bd12fc",
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
            "const:9d0:8"
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
      "definition_site": "00bd2310",
      "incomplete_value": true,
      "site": "00bd2310",
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
            "const:988:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd131c",
      "incomplete_value": true,
      "site": "00bd131c",
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
            "const:9c8:8"
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
      "definition_site": "00bd22cc",
      "incomplete_value": true,
      "site": "00bd22cc",
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
      "definition_site": "00bd12d8",
      "incomplete_value": true,
      "site": "00bd12d8",
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
      "00bd22c8",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd22d4",
      "READ",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd22f0",
      "WRITE",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd22c8",
      "READ",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd22d4",
      "READ",
      [
        "storage",
        "01127990",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd22f0",
      "WRITE",
      [
        "storage",
        "01127990",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd12fc ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd12fc ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd12fc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9d0:8"]]
- 00bd12fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd22f0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd22f0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd22f0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:990:8"]]
+ 00bd22f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd131c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
- 00bd131c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd131c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd2310 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:988:8"]]
+ 00bd2310 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd2310 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00bd12d0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd22c4 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-203f8d6b18bd66eb754fe86acd7c65a1"></a>

### [`00bd1330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1330.md) → [`00bd2324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2324.md) _ZN8firebase4auth21action_code_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd2364",
      "incomplete_value": true,
      "site": "00bd2364",
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
            "const:988:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1370",
      "incomplete_value": true,
      "site": "00bd1370",
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
            "const:9c8:8"
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
      "definition_site": "00bd2340",
      "incomplete_value": true,
      "site": "00bd2340",
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
      "definition_site": "00bd134c",
      "incomplete_value": true,
      "site": "00bd134c",
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
      "definition_site": "00bd2348",
      "incomplete_value": false,
      "site": "00bd235c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a5000:8"
          ],
          [
            "leaf",
            "const:7e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1354",
      "incomplete_value": false,
      "site": "00bd1368",
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
            "const:fb3:8"
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
      "00bd2338",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2348",
      "PARAM",
      [
        "storage",
        "002a4fb3",
        null,
        "string"
      ]
    ],
    [
      "00bd2364",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2338",
      "READ",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2348",
      "PARAM",
      [
        "storage",
        "002a507e",
        null,
        "string"
      ]
    ],
    [
      "00bd2364",
      "WRITE",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1368 ["INT_ADD", "register:40f0:8", ["const:bd1368:8", "const:4:8"]]
- 00bd1368 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd235c ["INT_ADD", "register:40f0:8", ["const:bd235c:8", "const:4:8"]]
+ 00bd235c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1370 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
- 00bd1370 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2364 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:988:8"]]
+ 00bd2364 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd133c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd2330 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-71f02f2f80d8f38cbcf6c18b756c2677"></a>

### [`00bd13a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd13a0.md) → [`00bd2394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2394.md) _ZN8firebase4auth21action_code_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd23b0",
      "incomplete_value": false,
      "site": "00bd23b4",
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
      "definition_site": "00bd13bc",
      "incomplete_value": false,
      "site": "00bd13c0",
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
      "definition_site": "00bd23c0",
      "incomplete_value": true,
      "site": "00bd23cc",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd13cc",
      "incomplete_value": true,
      "site": "00bd13d8",
      "value": [
        "LOAD",
        "8",
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
      "00bd23b0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd23c0",
      "DATA",
      [
        "storage",
        "011269d8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd23b0",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd23c0",
      "DATA",
      [
        "storage",
        "01127998",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd13c0 ["INT_ADD", "register:40f0:8", ["const:bd13c0:8", "const:4:8"]]
- 00bd13c0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd23b4 ["INT_ADD", "register:40f0:8", ["const:bd23b4:8", "const:4:8"]]
+ 00bd23b4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd13bc ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd13bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd13bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd13bc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd23b0 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd23b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd23b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd23b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd13c4 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd23b8 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-870030708cdc8d6be9dad25cd0fb75e2"></a>

### [`00bd13dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd13dc.md) → [`00bd23d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd23d0.md) _ZN8firebase4auth21action_code_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd2410",
      "incomplete_value": true,
      "site": "00bd2410",
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
            "const:988:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd141c",
      "incomplete_value": true,
      "site": "00bd141c",
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
            "const:9c8:8"
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
      "definition_site": "00bd23ec",
      "incomplete_value": true,
      "site": "00bd23ec",
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
      "definition_site": "00bd13f8",
      "incomplete_value": true,
      "site": "00bd13f8",
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
      "definition_site": "00bd23f4",
      "incomplete_value": false,
      "site": "00bd2408",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a5000:8"
          ],
          [
            "leaf",
            "const:7e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1400",
      "incomplete_value": false,
      "site": "00bd1414",
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
            "const:fb3:8"
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
      "00bd23e4",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd23f4",
      "PARAM",
      [
        "storage",
        "002a4fb3",
        null,
        "string"
      ]
    ],
    [
      "00bd2410",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd23e4",
      "READ",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd23f4",
      "PARAM",
      [
        "storage",
        "002a507e",
        null,
        "string"
      ]
    ],
    [
      "00bd2410",
      "WRITE",
      [
        "storage",
        "01127988",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1414 ["INT_ADD", "register:40f0:8", ["const:bd1414:8", "const:4:8"]]
- 00bd1414 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2408 ["INT_ADD", "register:40f0:8", ["const:bd2408:8", "const:4:8"]]
+ 00bd2408 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd141c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
- 00bd141c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2410 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:988:8"]]
+ 00bd2410 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd13e8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd23dc ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-956c88e68f7ad09a1a137b4704cc1e36"></a>

### [`00bd144c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd144c.md) → [`00bd2440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2440.md) _ZN8firebase4auth21action_code_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd245c",
      "incomplete_value": false,
      "site": "00bd2460",
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
      "definition_site": "00bd1468",
      "incomplete_value": false,
      "site": "00bd146c",
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
      "definition_site": "00bd246c",
      "incomplete_value": true,
      "site": "00bd2478",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd1478",
      "incomplete_value": true,
      "site": "00bd1484",
      "value": [
        "LOAD",
        "8",
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
      "00bd245c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd246c",
      "DATA",
      [
        "storage",
        "011269e0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd245c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd246c",
      "DATA",
      [
        "storage",
        "011279a0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd146c ["INT_ADD", "register:40f0:8", ["const:bd146c:8", "const:4:8"]]
- 00bd146c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd2460 ["INT_ADD", "register:40f0:8", ["const:bd2460:8", "const:4:8"]]
+ 00bd2460 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd1468 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd1468 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1468 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1468 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd245c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd245c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd245c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd245c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd1470 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd2464 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-150cb7f306e0ea89ac4625a0f8626a36"></a>

### [`00bd1488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1488.md) → [`00bd247c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd247c.md) _ZN8firebase4auth15email_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_

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
      "definition_site": "00bd24a8",
      "incomplete_value": true,
      "site": "00bd24a8",
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
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd14b4",
      "incomplete_value": true,
      "site": "00bd14b4",
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
            "const:9e8:8"
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
      "definition_site": "00bd2490",
      "incomplete_value": true,
      "site": "00bd2490",
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
      "definition_site": "00bd149c",
      "incomplete_value": true,
      "site": "00bd149c",
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
      "definition_site": "00bd249c",
      "incomplete_value": false,
      "site": "00bd24a0",
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
            "const:c77:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd14a8",
      "incomplete_value": false,
      "site": "00bd14ac",
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
            "const:c37:8"
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
      "00bd248c",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd249c",
      "PARAM",
      [
        "storage",
        "002a1c37",
        null,
        "string"
      ]
    ],
    [
      "00bd24a8",
      "WRITE",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd248c",
      "READ",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd249c",
      "PARAM",
      [
        "storage",
        "002a1c77",
        null,
        "string"
      ]
    ],
    [
      "00bd24a8",
      "WRITE",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd14ac ["INT_ADD", "register:40f0:8", ["const:bd14ac:8", "const:4:8"]]
- 00bd14ac ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd24a0 ["INT_ADD", "register:40f0:8", ["const:bd24a0:8", "const:4:8"]]
+ 00bd24a0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd14b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
- 00bd14b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd24a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
+ 00bd24a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1494 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2488 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-1ccbd2e3bfd55b9ac78a5f4f509d03bf"></a>

### [`00bd14c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd14c8.md) → [`00bd24bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd24bc.md) _ZN8firebase4auth15email_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_

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
      "definition_site": "00bd24e8",
      "incomplete_value": true,
      "site": "00bd24e8",
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
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd14f4",
      "incomplete_value": true,
      "site": "00bd14f4",
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
            "const:9e8:8"
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
      "definition_site": "00bd24d0",
      "incomplete_value": true,
      "site": "00bd24d0",
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
      "definition_site": "00bd14dc",
      "incomplete_value": true,
      "site": "00bd14dc",
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
      "definition_site": "00bd24d8",
      "incomplete_value": false,
      "site": "00bd24e0",
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
            "const:c77:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd14e4",
      "incomplete_value": false,
      "site": "00bd14ec",
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
            "const:c37:8"
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
      "00bd24cc",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd24d8",
      "PARAM",
      [
        "storage",
        "002a1c37",
        null,
        "string"
      ]
    ],
    [
      "00bd24e8",
      "WRITE",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd24cc",
      "READ",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd24d8",
      "PARAM",
      [
        "storage",
        "002a1c77",
        null,
        "string"
      ]
    ],
    [
      "00bd24e8",
      "WRITE",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd14ec ["INT_ADD", "register:40f0:8", ["const:bd14ec:8", "const:4:8"]]
- 00bd14ec ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd24e0 ["INT_ADD", "register:40f0:8", ["const:bd24e0:8", "const:4:8"]]
+ 00bd24e0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd14f4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
- 00bd14f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd24e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
+ 00bd24e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd14d4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd24c8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-f988bcb05c83248a285edee8fb348ecd"></a>

### [`00bd1508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1508.md) → [`00bd24fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd24fc.md) _ZN8firebase4auth15email_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd252c",
      "incomplete_value": true,
      "site": "00bd252c",
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
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1538",
      "incomplete_value": true,
      "site": "00bd1538",
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
            "const:9e8:8"
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
      "definition_site": "00bd2510",
      "incomplete_value": true,
      "site": "00bd2510",
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
      "definition_site": "00bd151c",
      "incomplete_value": true,
      "site": "00bd151c",
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
      "definition_site": "00bd251c",
      "incomplete_value": false,
      "site": "00bd2524",
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
            "const:c77:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1528",
      "incomplete_value": false,
      "site": "00bd1530",
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
            "const:c37:8"
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
      "00bd250c",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd251c",
      "PARAM",
      [
        "storage",
        "002a1c37",
        null,
        "string"
      ]
    ],
    [
      "00bd252c",
      "WRITE",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd250c",
      "READ",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd251c",
      "PARAM",
      [
        "storage",
        "002a1c77",
        null,
        "string"
      ]
    ],
    [
      "00bd252c",
      "WRITE",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1530 ["INT_ADD", "register:40f0:8", ["const:bd1530:8", "const:4:8"]]
- 00bd1530 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2524 ["INT_ADD", "register:40f0:8", ["const:bd2524:8", "const:4:8"]]
+ 00bd2524 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1538 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
- 00bd1538 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd252c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
+ 00bd252c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1514 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2508 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-13a4f0c50d825b1df5553db284eee8cd"></a>

### [`00bd154c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd154c.md) → [`00bd2540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2540.md) _ZN8firebase4auth15email_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd2570",
      "incomplete_value": true,
      "site": "00bd2570",
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
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd157c",
      "incomplete_value": true,
      "site": "00bd157c",
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
            "const:9e8:8"
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
      "definition_site": "00bd2554",
      "incomplete_value": true,
      "site": "00bd2554",
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
      "definition_site": "00bd1560",
      "incomplete_value": true,
      "site": "00bd1560",
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
      "definition_site": "00bd255c",
      "incomplete_value": false,
      "site": "00bd2568",
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
            "const:c77:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1568",
      "incomplete_value": false,
      "site": "00bd1574",
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
            "const:c37:8"
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
      "00bd2550",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd255c",
      "PARAM",
      [
        "storage",
        "002a1c37",
        null,
        "string"
      ]
    ],
    [
      "00bd2570",
      "WRITE",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2550",
      "READ",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd255c",
      "PARAM",
      [
        "storage",
        "002a1c77",
        null,
        "string"
      ]
    ],
    [
      "00bd2570",
      "WRITE",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1574 ["INT_ADD", "register:40f0:8", ["const:bd1574:8", "const:4:8"]]
- 00bd1574 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2568 ["INT_ADD", "register:40f0:8", ["const:bd2568:8", "const:4:8"]]
+ 00bd2568 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd157c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
- 00bd157c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2570 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
+ 00bd2570 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1558 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd254c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-a06ae02e7beaee226e64d20ea474aceb"></a>

### [`00bd159c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd159c.md) → [`00bd2590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2590.md) _ZN8firebase4auth15email_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd25e8",
      "incomplete_value": true,
      "site": "00bd25e8",
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
            "const:9b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd15f4",
      "incomplete_value": true,
      "site": "00bd15f4",
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
            "const:9f0:8"
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
      "definition_site": "00bd25c4",
      "incomplete_value": true,
      "site": "00bd25d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:9a8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd15d0",
      "incomplete_value": true,
      "site": "00bd15dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:9e8:8"
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
      "00bd25a4",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd25c4",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd25e8",
      "WRITE",
      [
        "storage",
        "011269f0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd25a4",
      "READ",
      [
        "storage",
        "011279b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd25c4",
      "READ",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd25e8",
      "WRITE",
      [
        "storage",
        "011279b0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd15dc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd15dc ["INT_ADD", "register:40f0:8", ["const:bd15dc:8", "const:4:8"]]
- 00bd15dc ["CALLIND", null, ["register:0:8"]]
+ 00bd25d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd25d0 ["INT_ADD", "register:40f0:8", ["const:bd25d0:8", "const:4:8"]]
+ 00bd25d0 ["CALLIND", null, ["register:0:8"]]
- 00bd15f4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd15f4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9f0:8"]]
- 00bd15f4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd25e8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd25e8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9b0:8"]]
+ 00bd25e8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd15ac ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd25a0 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-8f7f98a02400396a1d882c0a0c86d8dd"></a>

### [`00bd1608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1608.md) → [`00bd25fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd25fc.md) _ZN8firebase4auth15email_exception12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd2638",
      "incomplete_value": true,
      "site": "00bd2638",
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
            "const:9b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1644",
      "incomplete_value": true,
      "site": "00bd1644",
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
            "const:9f0:8"
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
      "definition_site": "00bd2658",
      "incomplete_value": true,
      "site": "00bd2658",
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
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1664",
      "incomplete_value": true,
      "site": "00bd1664",
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
            "const:9e8:8"
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
      "definition_site": "00bd2614",
      "incomplete_value": true,
      "site": "00bd2614",
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
      "definition_site": "00bd1620",
      "incomplete_value": true,
      "site": "00bd1620",
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
      "00bd2610",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd261c",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2638",
      "WRITE",
      [
        "storage",
        "011269f0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd2610",
      "READ",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd261c",
      "READ",
      [
        "storage",
        "011279b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2638",
      "WRITE",
      [
        "storage",
        "011279b0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1644 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd1644 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd1644 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9f0:8"]]
- 00bd1644 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd2638 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd2638 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd2638 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9b0:8"]]
+ 00bd2638 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd1660 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd1660 ["INT_ADD", "register:40f0:8", ["const:bd1660:8", "const:4:8"]]
- 00bd1660 ["CALLIND", null, ["register:0:8"]]
+ 00bd2654 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd2654 ["INT_ADD", "register:40f0:8", ["const:bd2654:8", "const:4:8"]]
+ 00bd2654 ["CALLIND", null, ["register:0:8"]]
- 00bd1664 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
- 00bd1664 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd1664 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd2658 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
+ 00bd2658 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd2658 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-8dbde171c386aed04d3e4962e5c80676"></a>

### [`00bd1678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1678.md) → [`00bd266c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd266c.md) _ZN8firebase4auth15email_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd26ac",
      "incomplete_value": true,
      "site": "00bd26ac",
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
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd16b8",
      "incomplete_value": true,
      "site": "00bd16b8",
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
            "const:9e8:8"
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
      "definition_site": "00bd2688",
      "incomplete_value": true,
      "site": "00bd2688",
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
      "definition_site": "00bd1694",
      "incomplete_value": true,
      "site": "00bd1694",
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
      "definition_site": "00bd2690",
      "incomplete_value": false,
      "site": "00bd26a4",
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
            "const:c77:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd169c",
      "incomplete_value": false,
      "site": "00bd16b0",
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
            "const:c37:8"
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
      "00bd2680",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2690",
      "PARAM",
      [
        "storage",
        "002a1c37",
        null,
        "string"
      ]
    ],
    [
      "00bd26ac",
      "WRITE",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2680",
      "READ",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2690",
      "PARAM",
      [
        "storage",
        "002a1c77",
        null,
        "string"
      ]
    ],
    [
      "00bd26ac",
      "WRITE",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd16b0 ["INT_ADD", "register:40f0:8", ["const:bd16b0:8", "const:4:8"]]
- 00bd16b0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd26a4 ["INT_ADD", "register:40f0:8", ["const:bd26a4:8", "const:4:8"]]
+ 00bd26a4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd16b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
- 00bd16b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd26ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
+ 00bd26ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1684 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd2678 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-fe44944ec54d17e159d44d8c325a5b8d"></a>

### [`00bd16e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd16e8.md) → [`00bd26dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd26dc.md) _ZN8firebase4auth15email_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd26f8",
      "incomplete_value": false,
      "site": "00bd26fc",
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
      "definition_site": "00bd1704",
      "incomplete_value": false,
      "site": "00bd1708",
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
      "definition_site": "00bd2708",
      "incomplete_value": true,
      "site": "00bd2714",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd1714",
      "incomplete_value": true,
      "site": "00bd1720",
      "value": [
        "LOAD",
        "8",
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
      "00bd26f8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd2708",
      "DATA",
      [
        "storage",
        "011269f8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd26f8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd2708",
      "DATA",
      [
        "storage",
        "011279b8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1708 ["INT_ADD", "register:40f0:8", ["const:bd1708:8", "const:4:8"]]
- 00bd1708 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd26fc ["INT_ADD", "register:40f0:8", ["const:bd26fc:8", "const:4:8"]]
+ 00bd26fc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd1704 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd1704 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1704 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1704 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd26f8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd26f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd26f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd26f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd170c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd2700 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-7204659250c2de6ed0d8690b18efc9c8"></a>

### [`00bd1724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1724.md) → [`00bd2718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2718.md) _ZN8firebase4auth15email_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd2758",
      "incomplete_value": true,
      "site": "00bd2758",
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
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1764",
      "incomplete_value": true,
      "site": "00bd1764",
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
            "const:9e8:8"
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
      "definition_site": "00bd2734",
      "incomplete_value": true,
      "site": "00bd2734",
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
      "definition_site": "00bd1740",
      "incomplete_value": true,
      "site": "00bd1740",
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
      "definition_site": "00bd273c",
      "incomplete_value": false,
      "site": "00bd2750",
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
            "const:c77:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1748",
      "incomplete_value": false,
      "site": "00bd175c",
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
            "const:c37:8"
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
      "00bd272c",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd273c",
      "PARAM",
      [
        "storage",
        "002a1c37",
        null,
        "string"
      ]
    ],
    [
      "00bd2758",
      "WRITE",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd272c",
      "READ",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd273c",
      "PARAM",
      [
        "storage",
        "002a1c77",
        null,
        "string"
      ]
    ],
    [
      "00bd2758",
      "WRITE",
      [
        "storage",
        "011279a8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd175c ["INT_ADD", "register:40f0:8", ["const:bd175c:8", "const:4:8"]]
- 00bd175c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2750 ["INT_ADD", "register:40f0:8", ["const:bd2750:8", "const:4:8"]]
+ 00bd2750 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1764 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
- 00bd1764 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2758 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
+ 00bd2758 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1730 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd2724 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-8586c428e96213184d383fb05b43414b"></a>

### [`00bd1794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1794.md) → [`00bd2788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2788.md) _ZN8firebase4auth15email_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd27a4",
      "incomplete_value": false,
      "site": "00bd27a8",
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
      "definition_site": "00bd17b0",
      "incomplete_value": false,
      "site": "00bd17b4",
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
      "definition_site": "00bd27b4",
      "incomplete_value": true,
      "site": "00bd27c0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd17c0",
      "incomplete_value": true,
      "site": "00bd17cc",
      "value": [
        "LOAD",
        "8",
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
      "00bd27a4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd27b4",
      "DATA",
      [
        "storage",
        "01126a00",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd27a4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd27b4",
      "DATA",
      [
        "storage",
        "011279c0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd17b4 ["INT_ADD", "register:40f0:8", ["const:bd17b4:8", "const:4:8"]]
- 00bd17b4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd27a8 ["INT_ADD", "register:40f0:8", ["const:bd27a8:8", "const:4:8"]]
+ 00bd27a8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd17b0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd17b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd17b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd17b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd27a4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd27a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd27a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd27a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd17b8 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd27ac ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-ff40a814a07a54ec8766193806b0dccd"></a>

### [`00bd17d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd17d0.md) → [`00bd27c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd27c4.md) _ZN8firebase4auth23weak_password_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloc

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
      "definition_site": "00bd27f0",
      "incomplete_value": true,
      "site": "00bd27f0",
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
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd17fc",
      "incomplete_value": true,
      "site": "00bd17fc",
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
            "const:a08:8"
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
      "definition_site": "00bd27d8",
      "incomplete_value": true,
      "site": "00bd27d8",
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
      "definition_site": "00bd17e4",
      "incomplete_value": true,
      "site": "00bd17e4",
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
      "definition_site": "00bd27e4",
      "incomplete_value": false,
      "site": "00bd27e8",
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
            "const:5e5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd17f0",
      "incomplete_value": false,
      "site": "00bd17f4",
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
            "const:50e:8"
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
      "00bd27d4",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd27e4",
      "PARAM",
      [
        "storage",
        "002af50e",
        null,
        "string"
      ]
    ],
    [
      "00bd27f0",
      "WRITE",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd27d4",
      "READ",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd27e4",
      "PARAM",
      [
        "storage",
        "002af5e5",
        null,
        "string"
      ]
    ],
    [
      "00bd27f0",
      "WRITE",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd17f4 ["INT_ADD", "register:40f0:8", ["const:bd17f4:8", "const:4:8"]]
- 00bd17f4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd27e8 ["INT_ADD", "register:40f0:8", ["const:bd27e8:8", "const:4:8"]]
+ 00bd27e8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd17fc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00bd17fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd27f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
+ 00bd27f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd17dc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd27d0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-b3177acf5c0ed13b3621b6a2c1b0768d"></a>

### [`00bd1810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1810.md) → [`00bd2804`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2804.md) _ZN8firebase4auth23weak_password_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloc

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
      "definition_site": "00bd2830",
      "incomplete_value": true,
      "site": "00bd2830",
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
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd183c",
      "incomplete_value": true,
      "site": "00bd183c",
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
            "const:a08:8"
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
      "definition_site": "00bd2818",
      "incomplete_value": true,
      "site": "00bd2818",
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
      "definition_site": "00bd1824",
      "incomplete_value": true,
      "site": "00bd1824",
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
      "definition_site": "00bd2820",
      "incomplete_value": false,
      "site": "00bd2828",
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
            "const:5e5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd182c",
      "incomplete_value": false,
      "site": "00bd1834",
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
            "const:50e:8"
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
      "00bd2814",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2820",
      "PARAM",
      [
        "storage",
        "002af50e",
        null,
        "string"
      ]
    ],
    [
      "00bd2830",
      "WRITE",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2814",
      "READ",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2820",
      "PARAM",
      [
        "storage",
        "002af5e5",
        null,
        "string"
      ]
    ],
    [
      "00bd2830",
      "WRITE",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1834 ["INT_ADD", "register:40f0:8", ["const:bd1834:8", "const:4:8"]]
- 00bd1834 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2828 ["INT_ADD", "register:40f0:8", ["const:bd2828:8", "const:4:8"]]
+ 00bd2828 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd183c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00bd183c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2830 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
+ 00bd2830 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd181c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2810 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-4e7405bfd274f0470319c28b7ddd6012"></a>

### [`00bd1850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1850.md) → [`00bd2844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2844.md) _ZN8firebase4auth23weak_password_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd2874",
      "incomplete_value": true,
      "site": "00bd2874",
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
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1880",
      "incomplete_value": true,
      "site": "00bd1880",
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
            "const:a08:8"
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
      "definition_site": "00bd2858",
      "incomplete_value": true,
      "site": "00bd2858",
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
      "definition_site": "00bd1864",
      "incomplete_value": true,
      "site": "00bd1864",
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
      "definition_site": "00bd2864",
      "incomplete_value": false,
      "site": "00bd286c",
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
            "const:5e5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1870",
      "incomplete_value": false,
      "site": "00bd1878",
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
            "const:50e:8"
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
      "00bd2854",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2864",
      "PARAM",
      [
        "storage",
        "002af50e",
        null,
        "string"
      ]
    ],
    [
      "00bd2874",
      "WRITE",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2854",
      "READ",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2864",
      "PARAM",
      [
        "storage",
        "002af5e5",
        null,
        "string"
      ]
    ],
    [
      "00bd2874",
      "WRITE",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1878 ["INT_ADD", "register:40f0:8", ["const:bd1878:8", "const:4:8"]]
- 00bd1878 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd286c ["INT_ADD", "register:40f0:8", ["const:bd286c:8", "const:4:8"]]
+ 00bd286c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1880 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00bd1880 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2874 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
+ 00bd2874 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd185c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2850 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-57923c4932b953f6cd320626b2e5c59b"></a>

### [`00bd1894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1894.md) → [`00bd2888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2888.md) _ZN8firebase4auth23weak_password_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd28b8",
      "incomplete_value": true,
      "site": "00bd28b8",
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
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd18c4",
      "incomplete_value": true,
      "site": "00bd18c4",
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
            "const:a08:8"
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
      "definition_site": "00bd289c",
      "incomplete_value": true,
      "site": "00bd289c",
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
      "definition_site": "00bd18a8",
      "incomplete_value": true,
      "site": "00bd18a8",
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
      "definition_site": "00bd28a4",
      "incomplete_value": false,
      "site": "00bd28b0",
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
            "const:5e5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd18b0",
      "incomplete_value": false,
      "site": "00bd18bc",
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
            "const:50e:8"
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
      "00bd2898",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd28a4",
      "PARAM",
      [
        "storage",
        "002af50e",
        null,
        "string"
      ]
    ],
    [
      "00bd28b8",
      "WRITE",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2898",
      "READ",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd28a4",
      "PARAM",
      [
        "storage",
        "002af5e5",
        null,
        "string"
      ]
    ],
    [
      "00bd28b8",
      "WRITE",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd18bc ["INT_ADD", "register:40f0:8", ["const:bd18bc:8", "const:4:8"]]
- 00bd18bc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd28b0 ["INT_ADD", "register:40f0:8", ["const:bd28b0:8", "const:4:8"]]
+ 00bd28b0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd18c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00bd18c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd28b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
+ 00bd28b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd18a0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2894 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-4dedaf524d66fb05a0b095472373aee5"></a>

### [`00bd18e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd18e4.md) → [`00bd28d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd28d8.md) _ZN8firebase4auth23weak_password_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd2930",
      "incomplete_value": true,
      "site": "00bd2930",
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
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd193c",
      "incomplete_value": true,
      "site": "00bd193c",
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
            "const:a10:8"
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
      "definition_site": "00bd290c",
      "incomplete_value": true,
      "site": "00bd2918",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:9c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1918",
      "incomplete_value": true,
      "site": "00bd1924",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a08:8"
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
      "00bd28ec",
      "READ",
      [
        "storage",
        "01126a10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd290c",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2930",
      "WRITE",
      [
        "storage",
        "01126a10",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd28ec",
      "READ",
      [
        "storage",
        "011279d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd290c",
      "READ",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2930",
      "WRITE",
      [
        "storage",
        "011279d0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1924 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd1924 ["INT_ADD", "register:40f0:8", ["const:bd1924:8", "const:4:8"]]
- 00bd1924 ["CALLIND", null, ["register:0:8"]]
+ 00bd2918 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd2918 ["INT_ADD", "register:40f0:8", ["const:bd2918:8", "const:4:8"]]
+ 00bd2918 ["CALLIND", null, ["register:0:8"]]
- 00bd193c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd193c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a10:8"]]
- 00bd193c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd2930 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd2930 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9d0:8"]]
+ 00bd2930 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd18f4 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd28e8 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-9bfda25e4a56eadbdbe3ed0f1521cc45"></a>

### [`00bd1950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1950.md) → [`00bd2944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2944.md) _ZN8firebase4auth23weak_password_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd2980",
      "incomplete_value": true,
      "site": "00bd2980",
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
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd198c",
      "incomplete_value": true,
      "site": "00bd198c",
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
            "const:a10:8"
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
      "definition_site": "00bd29a0",
      "incomplete_value": true,
      "site": "00bd29a0",
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
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd19ac",
      "incomplete_value": true,
      "site": "00bd19ac",
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
            "const:a08:8"
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
      "definition_site": "00bd295c",
      "incomplete_value": true,
      "site": "00bd295c",
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
      "definition_site": "00bd1968",
      "incomplete_value": true,
      "site": "00bd1968",
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
      "00bd2958",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2964",
      "READ",
      [
        "storage",
        "01126a10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2980",
      "WRITE",
      [
        "storage",
        "01126a10",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd2958",
      "READ",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2964",
      "READ",
      [
        "storage",
        "011279d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2980",
      "WRITE",
      [
        "storage",
        "011279d0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd198c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd198c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd198c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a10:8"]]
- 00bd198c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd2980 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd2980 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd2980 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9d0:8"]]
+ 00bd2980 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd19a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd19a8 ["INT_ADD", "register:40f0:8", ["const:bd19a8:8", "const:4:8"]]
- 00bd19a8 ["CALLIND", null, ["register:0:8"]]
+ 00bd299c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd299c ["INT_ADD", "register:40f0:8", ["const:bd299c:8", "const:4:8"]]
+ 00bd299c ["CALLIND", null, ["register:0:8"]]
- 00bd19ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
- 00bd19ac ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd19ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd29a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
+ 00bd29a0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd29a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-a98be069b59d13f07e98fddf5a171a06"></a>

### [`00bd19c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd19c0.md) → [`00bd29b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd29b4.md) _ZN8firebase4auth23weak_password_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd29f4",
      "incomplete_value": true,
      "site": "00bd29f4",
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
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1a00",
      "incomplete_value": true,
      "site": "00bd1a00",
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
            "const:a08:8"
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
      "definition_site": "00bd29d0",
      "incomplete_value": true,
      "site": "00bd29d0",
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
      "definition_site": "00bd19dc",
      "incomplete_value": true,
      "site": "00bd19dc",
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
      "definition_site": "00bd29d8",
      "incomplete_value": false,
      "site": "00bd29ec",
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
            "const:5e5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd19e4",
      "incomplete_value": false,
      "site": "00bd19f8",
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
            "const:50e:8"
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
      "00bd29c8",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd29d8",
      "PARAM",
      [
        "storage",
        "002af50e",
        null,
        "string"
      ]
    ],
    [
      "00bd29f4",
      "WRITE",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd29c8",
      "READ",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd29d8",
      "PARAM",
      [
        "storage",
        "002af5e5",
        null,
        "string"
      ]
    ],
    [
      "00bd29f4",
      "WRITE",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd19f8 ["INT_ADD", "register:40f0:8", ["const:bd19f8:8", "const:4:8"]]
- 00bd19f8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd29ec ["INT_ADD", "register:40f0:8", ["const:bd29ec:8", "const:4:8"]]
+ 00bd29ec ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1a00 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
- 00bd1a00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd29f4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
+ 00bd29f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd19cc ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd29c0 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-cd74831711a65b318027ae98045046a3"></a>

### [`00bd1a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1a30.md) → [`00bd2a24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2a24.md) _ZN8firebase4auth23weak_password_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd2a40",
      "incomplete_value": false,
      "site": "00bd2a44",
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
      "definition_site": "00bd1a4c",
      "incomplete_value": false,
      "site": "00bd1a50",
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
      "definition_site": "00bd2a50",
      "incomplete_value": true,
      "site": "00bd2a5c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd1a5c",
      "incomplete_value": true,
      "site": "00bd1a68",
      "value": [
        "LOAD",
        "8",
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
      "00bd2a40",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd2a50",
      "DATA",
      [
        "storage",
        "01126a18",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd2a40",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd2a50",
      "DATA",
      [
        "storage",
        "011279d8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1a50 ["INT_ADD", "register:40f0:8", ["const:bd1a50:8", "const:4:8"]]
- 00bd1a50 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd2a44 ["INT_ADD", "register:40f0:8", ["const:bd2a44:8", "const:4:8"]]
+ 00bd2a44 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd1a4c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd1a4c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1a4c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1a4c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd2a40 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd2a40 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2a40 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2a40 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd1a54 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd2a48 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-076de7a2e6f6426df7594b3619b045c0"></a>

### [`00bd1a6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1a6c.md) → [`00bd2a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2a60.md) _ZN8firebase4auth23weak_password_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd2aa0",
      "incomplete_value": true,
      "site": "00bd2aa0",
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
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1aac",
      "incomplete_value": true,
      "site": "00bd1aac",
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
            "const:a08:8"
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
      "definition_site": "00bd2a7c",
      "incomplete_value": true,
      "site": "00bd2a7c",
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
      "definition_site": "00bd1a88",
      "incomplete_value": true,
      "site": "00bd1a88",
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
      "definition_site": "00bd2a84",
      "incomplete_value": false,
      "site": "00bd2a98",
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
            "const:5e5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1a90",
      "incomplete_value": false,
      "site": "00bd1aa4",
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
            "const:50e:8"
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
      "00bd2a74",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2a84",
      "PARAM",
      [
        "storage",
        "002af50e",
        null,
        "string"
      ]
    ],
    [
      "00bd2aa0",
      "WRITE",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2a74",
      "READ",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2a84",
      "PARAM",
      [
        "storage",
        "002af5e5",
        null,
        "string"
      ]
    ],
    [
      "00bd2aa0",
      "WRITE",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1aa4 ["INT_ADD", "register:40f0:8", ["const:bd1aa4:8", "const:4:8"]]
- 00bd1aa4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2a98 ["INT_ADD", "register:40f0:8", ["const:bd2a98:8", "const:4:8"]]
+ 00bd2a98 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1aac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
- 00bd1aac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2aa0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
+ 00bd2aa0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1a78 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd2a6c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-7cbc5703485364085435bfb16402215e"></a>

### [`00bd1adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1adc.md) → [`00bd2ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2ad0.md) _ZN8firebase4auth23weak_password_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd2aec",
      "incomplete_value": false,
      "site": "00bd2af0",
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
      "definition_site": "00bd1af8",
      "incomplete_value": false,
      "site": "00bd1afc",
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
      "definition_site": "00bd2afc",
      "incomplete_value": true,
      "site": "00bd2b08",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd1b08",
      "incomplete_value": true,
      "site": "00bd1b14",
      "value": [
        "LOAD",
        "8",
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
      "00bd2aec",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd2afc",
      "DATA",
      [
        "storage",
        "01126a20",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd2aec",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd2afc",
      "DATA",
      [
        "storage",
        "011279e0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1afc ["INT_ADD", "register:40f0:8", ["const:bd1afc:8", "const:4:8"]]
- 00bd1afc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd2af0 ["INT_ADD", "register:40f0:8", ["const:bd2af0:8", "const:4:8"]]
+ 00bd2af0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd1af8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd1af8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1af8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1af8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd2aec ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd2aec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2aec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2aec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd1b00 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd2af4 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-c3e02cde6f37eea9a6cf10505e698ef5"></a>

### [`00bd1b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1b18.md) → [`00bd2b0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2b0c.md) _ZN8firebase4auth29invalid_credentials_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_

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
      "definition_site": "00bd2b38",
      "incomplete_value": true,
      "site": "00bd2b38",
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
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1b44",
      "incomplete_value": true,
      "site": "00bd1b44",
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
            "const:a28:8"
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
      "definition_site": "00bd2b20",
      "incomplete_value": true,
      "site": "00bd2b20",
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
      "definition_site": "00bd1b2c",
      "incomplete_value": true,
      "site": "00bd1b2c",
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
      "definition_site": "00bd2b2c",
      "incomplete_value": false,
      "site": "00bd2b30",
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
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1b38",
      "incomplete_value": false,
      "site": "00bd1b3c",
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
            "const:c3a:8"
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
      "00bd2b1c",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2b2c",
      "PARAM",
      [
        "storage",
        "002b9c3a",
        null,
        "string"
      ]
    ],
    [
      "00bd2b38",
      "WRITE",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2b1c",
      "READ",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2b2c",
      "PARAM",
      [
        "storage",
        "002b9d18",
        null,
        "string"
      ]
    ],
    [
      "00bd2b38",
      "WRITE",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1b3c ["INT_ADD", "register:40f0:8", ["const:bd1b3c:8", "const:4:8"]]
- 00bd1b3c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2b30 ["INT_ADD", "register:40f0:8", ["const:bd2b30:8", "const:4:8"]]
+ 00bd2b30 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1b44 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
- 00bd1b44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2b38 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
+ 00bd2b38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1b24 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2b18 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-5b392246fcfc6d273b89bf95fb21fb97"></a>

### [`00bd1b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1b58.md) → [`00bd2b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2b4c.md) _ZN8firebase4auth29invalid_credentials_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_

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
      "definition_site": "00bd2b78",
      "incomplete_value": true,
      "site": "00bd2b78",
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
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1b84",
      "incomplete_value": true,
      "site": "00bd1b84",
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
            "const:a28:8"
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
      "definition_site": "00bd2b60",
      "incomplete_value": true,
      "site": "00bd2b60",
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
      "definition_site": "00bd1b6c",
      "incomplete_value": true,
      "site": "00bd1b6c",
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
      "definition_site": "00bd2b68",
      "incomplete_value": false,
      "site": "00bd2b70",
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
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1b74",
      "incomplete_value": false,
      "site": "00bd1b7c",
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
            "const:c3a:8"
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
      "00bd2b5c",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2b68",
      "PARAM",
      [
        "storage",
        "002b9c3a",
        null,
        "string"
      ]
    ],
    [
      "00bd2b78",
      "WRITE",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2b5c",
      "READ",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2b68",
      "PARAM",
      [
        "storage",
        "002b9d18",
        null,
        "string"
      ]
    ],
    [
      "00bd2b78",
      "WRITE",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1b7c ["INT_ADD", "register:40f0:8", ["const:bd1b7c:8", "const:4:8"]]
- 00bd1b7c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2b70 ["INT_ADD", "register:40f0:8", ["const:bd2b70:8", "const:4:8"]]
+ 00bd2b70 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1b84 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
- 00bd1b84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2b78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
+ 00bd2b78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1b64 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2b58 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-35f3961e4b25d7fce263ac0edf1f8f3b"></a>

### [`00bd1b98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1b98.md) → [`00bd2b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2b8c.md) _ZN8firebase4auth29invalid_credentials_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd2bbc",
      "incomplete_value": true,
      "site": "00bd2bbc",
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
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1bc8",
      "incomplete_value": true,
      "site": "00bd1bc8",
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
            "const:a28:8"
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
      "definition_site": "00bd2ba0",
      "incomplete_value": true,
      "site": "00bd2ba0",
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
      "definition_site": "00bd1bac",
      "incomplete_value": true,
      "site": "00bd1bac",
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
      "definition_site": "00bd2bac",
      "incomplete_value": false,
      "site": "00bd2bb4",
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
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1bb8",
      "incomplete_value": false,
      "site": "00bd1bc0",
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
            "const:c3a:8"
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
      "00bd2b9c",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2bac",
      "PARAM",
      [
        "storage",
        "002b9c3a",
        null,
        "string"
      ]
    ],
    [
      "00bd2bbc",
      "WRITE",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2b9c",
      "READ",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2bac",
      "PARAM",
      [
        "storage",
        "002b9d18",
        null,
        "string"
      ]
    ],
    [
      "00bd2bbc",
      "WRITE",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1bc0 ["INT_ADD", "register:40f0:8", ["const:bd1bc0:8", "const:4:8"]]
- 00bd1bc0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2bb4 ["INT_ADD", "register:40f0:8", ["const:bd2bb4:8", "const:4:8"]]
+ 00bd2bb4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1bc8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
- 00bd1bc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2bbc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
+ 00bd2bbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1ba4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2b98 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-87d4c0ae29757d6e2c17018eedc6bf3c"></a>

### [`00bd1bdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1bdc.md) → [`00bd2bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2bd0.md) _ZN8firebase4auth29invalid_credentials_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd2c00",
      "incomplete_value": true,
      "site": "00bd2c00",
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
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1c0c",
      "incomplete_value": true,
      "site": "00bd1c0c",
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
            "const:a28:8"
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
      "definition_site": "00bd2be4",
      "incomplete_value": true,
      "site": "00bd2be4",
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
      "definition_site": "00bd1bf0",
      "incomplete_value": true,
      "site": "00bd1bf0",
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
      "definition_site": "00bd2bec",
      "incomplete_value": false,
      "site": "00bd2bf8",
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
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1bf8",
      "incomplete_value": false,
      "site": "00bd1c04",
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
            "const:c3a:8"
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
      "00bd2be0",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2bec",
      "PARAM",
      [
        "storage",
        "002b9c3a",
        null,
        "string"
      ]
    ],
    [
      "00bd2c00",
      "WRITE",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2be0",
      "READ",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2bec",
      "PARAM",
      [
        "storage",
        "002b9d18",
        null,
        "string"
      ]
    ],
    [
      "00bd2c00",
      "WRITE",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1c04 ["INT_ADD", "register:40f0:8", ["const:bd1c04:8", "const:4:8"]]
- 00bd1c04 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2bf8 ["INT_ADD", "register:40f0:8", ["const:bd2bf8:8", "const:4:8"]]
+ 00bd2bf8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1c0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
- 00bd1c0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2c00 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
+ 00bd2c00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1be8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2bdc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-2a8b3bd73b387272b3cf5d4c326738c2"></a>

### [`00bd1c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1c2c.md) → [`00bd2c20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2c20.md) _ZN8firebase4auth29invalid_credentials_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd2c78",
      "incomplete_value": true,
      "site": "00bd2c78",
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
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1c84",
      "incomplete_value": true,
      "site": "00bd1c84",
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
            "const:a30:8"
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
      "definition_site": "00bd2c54",
      "incomplete_value": true,
      "site": "00bd2c60",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:9e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1c60",
      "incomplete_value": true,
      "site": "00bd1c6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a28:8"
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
      "00bd2c34",
      "READ",
      [
        "storage",
        "01126a30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2c54",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2c78",
      "WRITE",
      [
        "storage",
        "01126a30",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd2c34",
      "READ",
      [
        "storage",
        "011279f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2c54",
      "READ",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2c78",
      "WRITE",
      [
        "storage",
        "011279f0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1c6c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd1c6c ["INT_ADD", "register:40f0:8", ["const:bd1c6c:8", "const:4:8"]]
- 00bd1c6c ["CALLIND", null, ["register:0:8"]]
+ 00bd2c60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd2c60 ["INT_ADD", "register:40f0:8", ["const:bd2c60:8", "const:4:8"]]
+ 00bd2c60 ["CALLIND", null, ["register:0:8"]]
- 00bd1c84 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd1c84 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a30:8"]]
- 00bd1c84 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd2c78 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd2c78 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9f0:8"]]
+ 00bd2c78 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd1c3c ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd2c30 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-7e4c396bd1ce3808be69e407d58d2e9f"></a>

### [`00bd1c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1c98.md) → [`00bd2c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2c8c.md) _ZN8firebase4auth29invalid_credentials_exception12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd2cc8",
      "incomplete_value": true,
      "site": "00bd2cc8",
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
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1cd4",
      "incomplete_value": true,
      "site": "00bd1cd4",
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
            "const:a30:8"
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
      "definition_site": "00bd2ce8",
      "incomplete_value": true,
      "site": "00bd2ce8",
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
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1cf4",
      "incomplete_value": true,
      "site": "00bd1cf4",
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
            "const:a28:8"
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
      "definition_site": "00bd2ca4",
      "incomplete_value": true,
      "site": "00bd2ca4",
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
      "definition_site": "00bd1cb0",
      "incomplete_value": true,
      "site": "00bd1cb0",
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
      "00bd2ca0",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2cac",
      "READ",
      [
        "storage",
        "01126a30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2cc8",
      "WRITE",
      [
        "storage",
        "01126a30",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd2ca0",
      "READ",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2cac",
      "READ",
      [
        "storage",
        "011279f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2cc8",
      "WRITE",
      [
        "storage",
        "011279f0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1cd4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd1cd4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd1cd4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a30:8"]]
- 00bd1cd4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd2cc8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd2cc8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd2cc8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9f0:8"]]
+ 00bd2cc8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd1cf0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd1cf0 ["INT_ADD", "register:40f0:8", ["const:bd1cf0:8", "const:4:8"]]
- 00bd1cf0 ["CALLIND", null, ["register:0:8"]]
+ 00bd2ce4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd2ce4 ["INT_ADD", "register:40f0:8", ["const:bd2ce4:8", "const:4:8"]]
+ 00bd2ce4 ["CALLIND", null, ["register:0:8"]]
- 00bd1cf4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
- 00bd1cf4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd1cf4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd2ce8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
+ 00bd2ce8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd2ce8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-c0426595dd18ea1eb21c1c30116858f9"></a>

### [`00bd1d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1d08.md) → [`00bd2cfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2cfc.md) _ZN8firebase4auth29invalid_credentials_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd2d3c",
      "incomplete_value": true,
      "site": "00bd2d3c",
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
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1d48",
      "incomplete_value": true,
      "site": "00bd1d48",
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
            "const:a28:8"
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
      "definition_site": "00bd2d18",
      "incomplete_value": true,
      "site": "00bd2d18",
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
      "definition_site": "00bd1d24",
      "incomplete_value": true,
      "site": "00bd1d24",
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
      "definition_site": "00bd2d20",
      "incomplete_value": false,
      "site": "00bd2d34",
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
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1d2c",
      "incomplete_value": false,
      "site": "00bd1d40",
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
            "const:c3a:8"
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
      "00bd2d10",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2d20",
      "PARAM",
      [
        "storage",
        "002b9c3a",
        null,
        "string"
      ]
    ],
    [
      "00bd2d3c",
      "WRITE",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2d10",
      "READ",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2d20",
      "PARAM",
      [
        "storage",
        "002b9d18",
        null,
        "string"
      ]
    ],
    [
      "00bd2d3c",
      "WRITE",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1d40 ["INT_ADD", "register:40f0:8", ["const:bd1d40:8", "const:4:8"]]
- 00bd1d40 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2d34 ["INT_ADD", "register:40f0:8", ["const:bd2d34:8", "const:4:8"]]
+ 00bd2d34 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1d48 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
- 00bd1d48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2d3c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
+ 00bd2d3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1d14 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd2d08 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-3c0c6d80ec3f79899ea6cecef994b3d5"></a>

### [`00bd1d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1d78.md) → [`00bd2d6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2d6c.md) _ZN8firebase4auth29invalid_credentials_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd2d88",
      "incomplete_value": false,
      "site": "00bd2d8c",
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
      "definition_site": "00bd1d94",
      "incomplete_value": false,
      "site": "00bd1d98",
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
      "definition_site": "00bd2d98",
      "incomplete_value": true,
      "site": "00bd2da4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd1da4",
      "incomplete_value": true,
      "site": "00bd1db0",
      "value": [
        "LOAD",
        "8",
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
      "00bd2d88",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd2d98",
      "DATA",
      [
        "storage",
        "01126a38",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd2d88",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd2d98",
      "DATA",
      [
        "storage",
        "011279f8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1d98 ["INT_ADD", "register:40f0:8", ["const:bd1d98:8", "const:4:8"]]
- 00bd1d98 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd2d8c ["INT_ADD", "register:40f0:8", ["const:bd2d8c:8", "const:4:8"]]
+ 00bd2d8c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd1d94 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd1d94 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1d94 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1d94 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd2d88 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd2d88 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2d88 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2d88 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd1d9c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd2d90 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-a23e992a0dc82178bed2d6a1b126ac62"></a>

### [`00bd1db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1db4.md) → [`00bd2da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2da8.md) _ZN8firebase4auth29invalid_credentials_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd2de8",
      "incomplete_value": true,
      "site": "00bd2de8",
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
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1df4",
      "incomplete_value": true,
      "site": "00bd1df4",
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
            "const:a28:8"
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
      "definition_site": "00bd2dc4",
      "incomplete_value": true,
      "site": "00bd2dc4",
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
      "definition_site": "00bd1dd0",
      "incomplete_value": true,
      "site": "00bd1dd0",
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
      "definition_site": "00bd2dcc",
      "incomplete_value": false,
      "site": "00bd2de0",
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
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1dd8",
      "incomplete_value": false,
      "site": "00bd1dec",
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
            "const:c3a:8"
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
      "00bd2dbc",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2dcc",
      "PARAM",
      [
        "storage",
        "002b9c3a",
        null,
        "string"
      ]
    ],
    [
      "00bd2de8",
      "WRITE",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2dbc",
      "READ",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2dcc",
      "PARAM",
      [
        "storage",
        "002b9d18",
        null,
        "string"
      ]
    ],
    [
      "00bd2de8",
      "WRITE",
      [
        "storage",
        "011279e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1dec ["INT_ADD", "register:40f0:8", ["const:bd1dec:8", "const:4:8"]]
- 00bd1dec ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2de0 ["INT_ADD", "register:40f0:8", ["const:bd2de0:8", "const:4:8"]]
+ 00bd2de0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1df4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
- 00bd1df4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2de8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
+ 00bd2de8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1dc0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd2db4 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-62402c9e3e6a0628f8799f980c6875a7"></a>

### [`00bd1e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1e24.md) → [`00bd2e18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2e18.md) _ZN8firebase4auth29invalid_credentials_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd2e34",
      "incomplete_value": false,
      "site": "00bd2e38",
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
      "definition_site": "00bd1e40",
      "incomplete_value": false,
      "site": "00bd1e44",
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
      "definition_site": "00bd2e44",
      "incomplete_value": true,
      "site": "00bd2e50",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd1e50",
      "incomplete_value": true,
      "site": "00bd1e5c",
      "value": [
        "LOAD",
        "8",
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
      "00bd2e34",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd2e44",
      "DATA",
      [
        "storage",
        "01126a40",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd2e34",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd2e44",
      "DATA",
      [
        "storage",
        "01127a00",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1e44 ["INT_ADD", "register:40f0:8", ["const:bd1e44:8", "const:4:8"]]
- 00bd1e44 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd2e38 ["INT_ADD", "register:40f0:8", ["const:bd2e38:8", "const:4:8"]]
+ 00bd2e38 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd1e40 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd1e40 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1e40 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1e40 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd2e34 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd2e34 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2e34 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2e34 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd1e48 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd2e3c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-cdf2071f6b59b54c4dad7128f1c5dccf"></a>

### [`00bd1e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1e60.md) → [`00bd2e54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2e54.md) _ZN8firebase4auth22invalid_user_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloca

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
      "definition_site": "00bd2e80",
      "incomplete_value": true,
      "site": "00bd2e80",
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
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1e8c",
      "incomplete_value": true,
      "site": "00bd1e8c",
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
            "const:a48:8"
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
      "definition_site": "00bd2e68",
      "incomplete_value": true,
      "site": "00bd2e68",
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
      "definition_site": "00bd1e74",
      "incomplete_value": true,
      "site": "00bd1e74",
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
      "definition_site": "00bd2e74",
      "incomplete_value": false,
      "site": "00bd2e78",
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
            "const:caf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1e80",
      "incomplete_value": false,
      "site": "00bd1e84",
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
            "const:c6f:8"
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
      "00bd2e64",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2e74",
      "PARAM",
      [
        "storage",
        "002a1c6f",
        null,
        "string"
      ]
    ],
    [
      "00bd2e80",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2e64",
      "READ",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2e74",
      "PARAM",
      [
        "storage",
        "002a1caf",
        null,
        "string"
      ]
    ],
    [
      "00bd2e80",
      "WRITE",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1e84 ["INT_ADD", "register:40f0:8", ["const:bd1e84:8", "const:4:8"]]
- 00bd1e84 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2e78 ["INT_ADD", "register:40f0:8", ["const:bd2e78:8", "const:4:8"]]
+ 00bd2e78 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1e8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd1e8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2e80 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd2e80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1e6c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2e60 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-b1866645c970d0553fa4f761bbb60d95"></a>

### [`00bd1ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1ea0.md) → [`00bd2e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2e94.md) _ZN8firebase4auth22invalid_user_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloca

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
      "definition_site": "00bd2ec0",
      "incomplete_value": true,
      "site": "00bd2ec0",
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
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1ecc",
      "incomplete_value": true,
      "site": "00bd1ecc",
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
            "const:a48:8"
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
      "definition_site": "00bd2ea8",
      "incomplete_value": true,
      "site": "00bd2ea8",
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
      "definition_site": "00bd1eb4",
      "incomplete_value": true,
      "site": "00bd1eb4",
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
      "definition_site": "00bd2eb0",
      "incomplete_value": false,
      "site": "00bd2eb8",
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
            "const:caf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1ebc",
      "incomplete_value": false,
      "site": "00bd1ec4",
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
            "const:c6f:8"
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
      "00bd2ea4",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2eb0",
      "PARAM",
      [
        "storage",
        "002a1c6f",
        null,
        "string"
      ]
    ],
    [
      "00bd2ec0",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2ea4",
      "READ",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2eb0",
      "PARAM",
      [
        "storage",
        "002a1caf",
        null,
        "string"
      ]
    ],
    [
      "00bd2ec0",
      "WRITE",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1ec4 ["INT_ADD", "register:40f0:8", ["const:bd1ec4:8", "const:4:8"]]
- 00bd1ec4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2eb8 ["INT_ADD", "register:40f0:8", ["const:bd2eb8:8", "const:4:8"]]
+ 00bd2eb8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1ecc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd1ecc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2ec0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd2ec0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1eac ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2ea0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-ac0258f7fe718f9db45e3d9c1e337623"></a>

### [`00bd1ee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1ee0.md) → [`00bd2ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2ed4.md) _ZN8firebase4auth22invalid_user_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd2f04",
      "incomplete_value": true,
      "site": "00bd2f04",
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
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1f10",
      "incomplete_value": true,
      "site": "00bd1f10",
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
            "const:a48:8"
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
      "definition_site": "00bd2ee8",
      "incomplete_value": true,
      "site": "00bd2ee8",
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
      "definition_site": "00bd1ef4",
      "incomplete_value": true,
      "site": "00bd1ef4",
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
      "definition_site": "00bd2ef4",
      "incomplete_value": false,
      "site": "00bd2efc",
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
            "const:caf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1f00",
      "incomplete_value": false,
      "site": "00bd1f08",
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
            "const:c6f:8"
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
      "00bd2ee4",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2ef4",
      "PARAM",
      [
        "storage",
        "002a1c6f",
        null,
        "string"
      ]
    ],
    [
      "00bd2f04",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2ee4",
      "READ",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2ef4",
      "PARAM",
      [
        "storage",
        "002a1caf",
        null,
        "string"
      ]
    ],
    [
      "00bd2f04",
      "WRITE",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1f08 ["INT_ADD", "register:40f0:8", ["const:bd1f08:8", "const:4:8"]]
- 00bd1f08 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd2efc ["INT_ADD", "register:40f0:8", ["const:bd2efc:8", "const:4:8"]]
+ 00bd2efc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd1f10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd1f10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2f04 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd2f04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1eec ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2ee0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-53db50db1fd5d61ea3dedfd1ea08eea8"></a>

### [`00bd1f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1f24.md) → [`00bd2f18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2f18.md) _ZN8firebase4auth22invalid_user_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd2f48",
      "incomplete_value": true,
      "site": "00bd2f48",
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
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1f54",
      "incomplete_value": true,
      "site": "00bd1f54",
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
            "const:a48:8"
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
      "definition_site": "00bd2f2c",
      "incomplete_value": true,
      "site": "00bd2f2c",
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
      "definition_site": "00bd1f38",
      "incomplete_value": true,
      "site": "00bd1f38",
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
        "00bd1f38"
      ],
      [
        "FALL_THROUGH",
        "00bd2f2c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd2f2c",
      "incomplete_value": true,
      "site": "00bd2f48",
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
      "definition_site": "00bd1f38",
      "incomplete_value": true,
      "site": "00bd1f54",
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
      "00bd2f28",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2f34",
      "PARAM",
      [
        "storage",
        "002a1c6f",
        null,
        "string"
      ]
    ],
    [
      "00bd2f48",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2f28",
      "READ",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2f34",
      "PARAM",
      [
        "storage",
        "002a1caf",
        null,
        "string"
      ]
    ],
    [
      "00bd2f48",
      "WRITE",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1f54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd1f54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2f48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd2f48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1f30 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd2f24 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd1f34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
- 00bd1f34 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2f28 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd2f28 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-27f9650ec735d4dba5ccabdf55685f48"></a>

### [`00bd1f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1f74.md) → [`00bd2f68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2f68.md) _ZN8firebase4auth22invalid_user_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd2fc0",
      "incomplete_value": true,
      "site": "00bd2fc0",
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
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1fcc",
      "incomplete_value": true,
      "site": "00bd1fcc",
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
            "const:a50:8"
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
      "definition_site": "00bd2f9c",
      "incomplete_value": true,
      "site": "00bd2fa8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a08:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd1fa8",
      "incomplete_value": true,
      "site": "00bd1fb4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a48:8"
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
      "00bd2f7c",
      "READ",
      [
        "storage",
        "01126a50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2f9c",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2fc0",
      "WRITE",
      [
        "storage",
        "01126a50",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd2f7c",
      "READ",
      [
        "storage",
        "01127a10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2f9c",
      "READ",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2fc0",
      "WRITE",
      [
        "storage",
        "01127a10",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1fb4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd1fb4 ["INT_ADD", "register:40f0:8", ["const:bd1fb4:8", "const:4:8"]]
- 00bd1fb4 ["CALLIND", null, ["register:0:8"]]
+ 00bd2fa8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd2fa8 ["INT_ADD", "register:40f0:8", ["const:bd2fa8:8", "const:4:8"]]
+ 00bd2fa8 ["CALLIND", null, ["register:0:8"]]
- 00bd1fcc ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd1fcc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a50:8"]]
- 00bd1fcc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd2fc0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd2fc0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a10:8"]]
+ 00bd2fc0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd1f84 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd2f78 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-504bd697b3b8f112bda9b6b5f27139d3"></a>

### [`00bd1fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1fe0.md) → [`00bd2fd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd2/00bd2fd4.md) _ZN8firebase4auth22invalid_user_exception12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd3010",
      "incomplete_value": true,
      "site": "00bd3010",
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
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd201c",
      "incomplete_value": true,
      "site": "00bd201c",
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
            "const:a50:8"
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
      "definition_site": "00bd3030",
      "incomplete_value": true,
      "site": "00bd3030",
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
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd203c",
      "incomplete_value": true,
      "site": "00bd203c",
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
            "const:a48:8"
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
      "definition_site": "00bd2fec",
      "incomplete_value": true,
      "site": "00bd2fec",
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
      "definition_site": "00bd1ff8",
      "incomplete_value": true,
      "site": "00bd1ff8",
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
      "00bd2fe8",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2ff4",
      "READ",
      [
        "storage",
        "01126a50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3010",
      "WRITE",
      [
        "storage",
        "01126a50",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd2fe8",
      "READ",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2ff4",
      "READ",
      [
        "storage",
        "01127a10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3010",
      "WRITE",
      [
        "storage",
        "01127a10",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd201c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd201c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd201c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a50:8"]]
- 00bd201c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd3010 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd3010 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd3010 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a10:8"]]
+ 00bd3010 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd2038 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd2038 ["INT_ADD", "register:40f0:8", ["const:bd2038:8", "const:4:8"]]
- 00bd2038 ["CALLIND", null, ["register:0:8"]]
+ 00bd302c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd302c ["INT_ADD", "register:40f0:8", ["const:bd302c:8", "const:4:8"]]
+ 00bd302c ["CALLIND", null, ["register:0:8"]]
- 00bd203c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
- 00bd203c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd203c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd3030 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
+ 00bd3030 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd3030 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-0ed34e35d4faabda8cdba2d3ea8d49b3"></a>

### [`00bd2050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2050.md) → [`00bd3044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3044.md) _ZN8firebase4auth22invalid_user_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd3084",
      "incomplete_value": true,
      "site": "00bd3084",
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
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2090",
      "incomplete_value": true,
      "site": "00bd2090",
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
            "const:a48:8"
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
      "definition_site": "00bd3060",
      "incomplete_value": true,
      "site": "00bd3060",
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
      "definition_site": "00bd206c",
      "incomplete_value": true,
      "site": "00bd206c",
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
      "definition_site": "00bd3068",
      "incomplete_value": false,
      "site": "00bd307c",
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
            "const:caf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2074",
      "incomplete_value": false,
      "site": "00bd2088",
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
            "const:c6f:8"
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
      "00bd3058",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3068",
      "PARAM",
      [
        "storage",
        "002a1c6f",
        null,
        "string"
      ]
    ],
    [
      "00bd3084",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3058",
      "READ",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3068",
      "PARAM",
      [
        "storage",
        "002a1caf",
        null,
        "string"
      ]
    ],
    [
      "00bd3084",
      "WRITE",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2088 ["INT_ADD", "register:40f0:8", ["const:bd2088:8", "const:4:8"]]
- 00bd2088 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd307c ["INT_ADD", "register:40f0:8", ["const:bd307c:8", "const:4:8"]]
+ 00bd307c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2090 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
- 00bd2090 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3084 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
+ 00bd3084 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd205c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd3050 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-63f2f16006831bd143ca87bf1bff9de2"></a>

### [`00bd20c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd20c0.md) → [`00bd30b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd30b4.md) _ZN8firebase4auth22invalid_user_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd30d0",
      "incomplete_value": false,
      "site": "00bd30d4",
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
      "definition_site": "00bd20dc",
      "incomplete_value": false,
      "site": "00bd20e0",
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
      "definition_site": "00bd30e0",
      "incomplete_value": true,
      "site": "00bd30ec",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd20ec",
      "incomplete_value": true,
      "site": "00bd20f8",
      "value": [
        "LOAD",
        "8",
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
      "00bd30d0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd30e0",
      "DATA",
      [
        "storage",
        "01126a58",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd30d0",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd30e0",
      "DATA",
      [
        "storage",
        "01127a18",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd20e0 ["INT_ADD", "register:40f0:8", ["const:bd20e0:8", "const:4:8"]]
- 00bd20e0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd30d4 ["INT_ADD", "register:40f0:8", ["const:bd30d4:8", "const:4:8"]]
+ 00bd30d4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd20dc ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd20dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd20dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd20dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd30d0 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd30d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd30d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd30d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd20e4 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd30d8 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-694d5add0bd3644713eac2bba70f25e7"></a>

### [`00bd20fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd20fc.md) → [`00bd30f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd30f0.md) _ZN8firebase4auth22invalid_user_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd3130",
      "incomplete_value": true,
      "site": "00bd3130",
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
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd213c",
      "incomplete_value": true,
      "site": "00bd213c",
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
            "const:a48:8"
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
      "definition_site": "00bd310c",
      "incomplete_value": true,
      "site": "00bd310c",
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
      "definition_site": "00bd2118",
      "incomplete_value": true,
      "site": "00bd2118",
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
      "definition_site": "00bd3114",
      "incomplete_value": false,
      "site": "00bd3128",
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
            "const:caf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2120",
      "incomplete_value": false,
      "site": "00bd2134",
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
            "const:c6f:8"
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
      "00bd3104",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3114",
      "PARAM",
      [
        "storage",
        "002a1c6f",
        null,
        "string"
      ]
    ],
    [
      "00bd3130",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3104",
      "READ",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3114",
      "PARAM",
      [
        "storage",
        "002a1caf",
        null,
        "string"
      ]
    ],
    [
      "00bd3130",
      "WRITE",
      [
        "storage",
        "01127a08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2134 ["INT_ADD", "register:40f0:8", ["const:bd2134:8", "const:4:8"]]
- 00bd2134 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3128 ["INT_ADD", "register:40f0:8", ["const:bd3128:8", "const:4:8"]]
+ 00bd3128 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd213c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
- 00bd213c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3130 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
+ 00bd3130 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2108 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd30fc ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-dda4a904b3c629b17501839f29153522"></a>

### [`00bd216c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd216c.md) → [`00bd3160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3160.md) _ZN8firebase4auth22invalid_user_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd317c",
      "incomplete_value": false,
      "site": "00bd3180",
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
      "definition_site": "00bd2188",
      "incomplete_value": false,
      "site": "00bd218c",
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
      "definition_site": "00bd318c",
      "incomplete_value": true,
      "site": "00bd3198",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd2198",
      "incomplete_value": true,
      "site": "00bd21a4",
      "value": [
        "LOAD",
        "8",
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
      "00bd317c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd318c",
      "DATA",
      [
        "storage",
        "01126a60",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd317c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd318c",
      "DATA",
      [
        "storage",
        "01127a20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd218c ["INT_ADD", "register:40f0:8", ["const:bd218c:8", "const:4:8"]]
- 00bd218c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd3180 ["INT_ADD", "register:40f0:8", ["const:bd3180:8", "const:4:8"]]
+ 00bd3180 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd2188 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd2188 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2188 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2188 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd317c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd317c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd317c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd317c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2190 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd3184 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-536d04c24b7e1ffa8568c786d52512fd"></a>

### [`00bd21a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd21a8.md) → [`00bd319c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd319c.md) _ZN8firebase4auth31recent_login_required_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS

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
      "definition_site": "00bd31c8",
      "incomplete_value": true,
      "site": "00bd31c8",
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
            "const:a28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd21d4",
      "incomplete_value": true,
      "site": "00bd21d4",
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
            "const:a68:8"
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
      "definition_site": "00bd31b0",
      "incomplete_value": true,
      "site": "00bd31b0",
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
      "definition_site": "00bd21bc",
      "incomplete_value": true,
      "site": "00bd21bc",
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
      "definition_site": "00bd31bc",
      "incomplete_value": false,
      "site": "00bd31c0",
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
            "const:1ca:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd21c8",
      "incomplete_value": false,
      "site": "00bd21cc",
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
            "const:ec:8"
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
      "00bd31ac",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd31bc",
      "PARAM",
      [
        "storage",
        "002bc0ec",
        null,
        "string"
      ]
    ],
    [
      "00bd31c8",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd31ac",
      "READ",
      [
        "storage",
        "01127a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd31bc",
      "PARAM",
      [
        "storage",
        "002bc1ca",
        null,
        "string"
      ]
    ],
    [
      "00bd31c8",
      "WRITE",
      [
        "storage",
        "01127a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd21cc ["INT_ADD", "register:40f0:8", ["const:bd21cc:8", "const:4:8"]]
- 00bd21cc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd31c0 ["INT_ADD", "register:40f0:8", ["const:bd31c0:8", "const:4:8"]]
+ 00bd31c0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd21d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00bd21d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd31c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
+ 00bd31c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd21b4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd31a8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-0ca4ec1f61e56809982e54bada378ff8"></a>

### [`00bd21e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd21e8.md) → [`00bd31dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd31dc.md) _ZN8firebase4auth31recent_login_required_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS

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
      "definition_site": "00bd3208",
      "incomplete_value": true,
      "site": "00bd3208",
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
            "const:a28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2214",
      "incomplete_value": true,
      "site": "00bd2214",
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
            "const:a68:8"
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
      "definition_site": "00bd31f0",
      "incomplete_value": true,
      "site": "00bd31f0",
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
      "definition_site": "00bd21fc",
      "incomplete_value": true,
      "site": "00bd21fc",
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
      "definition_site": "00bd31f8",
      "incomplete_value": false,
      "site": "00bd3200",
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
            "const:1ca:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2204",
      "incomplete_value": false,
      "site": "00bd220c",
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
            "const:ec:8"
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
      "00bd31ec",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd31f8",
      "PARAM",
      [
        "storage",
        "002bc0ec",
        null,
        "string"
      ]
    ],
    [
      "00bd3208",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd31ec",
      "READ",
      [
        "storage",
        "01127a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd31f8",
      "PARAM",
      [
        "storage",
        "002bc1ca",
        null,
        "string"
      ]
    ],
    [
      "00bd3208",
      "WRITE",
      [
        "storage",
        "01127a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd220c ["INT_ADD", "register:40f0:8", ["const:bd220c:8", "const:4:8"]]
- 00bd220c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3200 ["INT_ADD", "register:40f0:8", ["const:bd3200:8", "const:4:8"]]
+ 00bd3200 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2214 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00bd2214 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3208 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
+ 00bd3208 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd21f4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd31e8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


