# v16.0.2 → v16.0.3 · 最優先の変更候補 (100)

[一覧の目次](README.md)

<a id="compare-af9e30babe2c7d1897216a19c4639f33"></a>

### [`00c0e128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0e128.md) → [`00c0f11c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0f/00c0f11c.md) _ZNSt6__ndk19__num_getIcE19__stage2_float_prepERNS_8ios_baseEPcRcS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e620.md) · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c5f5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5f0.md) · 呼出先 5件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0f1d4",
      "incomplete_value": true,
      "site": "00c0f1dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0e1e0",
      "incomplete_value": true,
      "site": "00c0e1e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0f188",
      "incomplete_value": true,
      "site": "00c0f190",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c0e194",
      "incomplete_value": true,
      "site": "00c0e19c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0f184",
      "incomplete_value": false,
      "site": "00c0f190",
      "value": [
        "leaf",
        "const:c37048:8"
      ]
    },
    "old": {
      "definition_site": "00c0e190",
      "incomplete_value": false,
      "site": "00c0e19c",
      "value": [
        "leaf",
        "const:c36054:8"
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
      "00c0f154",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c0f15c",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0f160",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c0f154",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c0f15c",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0f160",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0e19c ["INT_ADD", "register:40f0:8", ["const:c0e19c:8", "const:4:8"]]
- 00c0e19c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c0f190 ["INT_ADD", "register:40f0:8", ["const:c0f190:8", "const:4:8"]]
+ 00c0f190 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c0e21c ["INT_ADD", "register:40f0:8", ["const:c0e21c:8", "const:4:8"]]
- 00c0e21c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c0f210 ["INT_ADD", "register:40f0:8", ["const:c0f210:8", "const:4:8"]]
+ 00c0f210 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c0e158 ["INT_ADD", "register:40f0:8", ["const:c0e158:8", "const:4:8"]]
- 00c0e158 ["CALL", null, ["callee:00c59310:8"]]
+ 00c0f14c ["INT_ADD", "register:40f0:8", ["const:c0f14c:8", "const:4:8"]]
+ 00c0f14c ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-cbcb03f49bee6f139774ff5a37d1523e"></a>

### [`00c0e53c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0e53c.md) → [`00c0f530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0f/00c0f530.md) _ZNSt6__ndk19__num_getIcE17__stage2_int_prepERNS_8ios_baseEPcRc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c5f5c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f5c0.md) · 呼出先 5件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0f5e4",
      "incomplete_value": true,
      "site": "00c0f5ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0e5f0",
      "incomplete_value": true,
      "site": "00c0e5f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
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
      "definition_site": "00c0f5d4",
      "incomplete_value": true,
      "site": "00c0f5dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c60:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0e5e0",
      "incomplete_value": true,
      "site": "00c0e5e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c90:8"
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
      "definition_site": "00c0f5d8",
      "incomplete_value": true,
      "site": "00c0f5dc",
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
            "const:1a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0e5e4",
      "incomplete_value": true,
      "site": "00c0e5e8",
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
            "const:1a:8"
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
      "00c0f564",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c0f56c",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0f570",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c0f564",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c0f56c",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0f570",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0e5e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0e5e8 ["INT_ADD", "register:40f0:8", ["const:c0e5e8:8", "const:4:8"]]
- 00c0e5e8 ["CALLIND", null, ["register:0:8"]]
+ 00c0f5dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0f5dc ["INT_ADD", "register:40f0:8", ["const:c0f5dc:8", "const:4:8"]]
+ 00c0f5dc ["CALLIND", null, ["register:0:8"]]
- 00c0e62c ["INT_ADD", "register:40f0:8", ["const:c0e62c:8", "const:4:8"]]
- 00c0e62c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c0f620 ["INT_ADD", "register:40f0:8", ["const:c0f620:8", "const:4:8"]]
+ 00c0f620 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c0e568 ["INT_ADD", "register:40f0:8", ["const:c0e568:8", "const:4:8"]]
- 00c0e568 ["CALL", null, ["callee:00c59310:8"]]
+ 00c0f55c ["INT_ADD", "register:40f0:8", ["const:c0f55c:8", "const:4:8"]]
+ 00c0f55c ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-af664b4715208b0dac7b04d047911447"></a>

### [`00c0e6bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0e6bc.md) → [`00c0f6b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0f/00c0f6b0.md) _ZNSt6__ndk19__num_getIwE19__stage2_float_prepERNS_8ios_baseEPwRwS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e680.md) · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c5f650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f650.md) · 呼出先 5件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_argument_candidate` 4件

アドレスに依存する影響 `branch_value` 2件, `call_argument_candidate` 2件, `store_condition` 4件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0f6e8",
      "incomplete_value": true,
      "site": "00c0f6f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0e6f4",
      "incomplete_value": true,
      "site": "00c0e6fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
      "definition_site": "00c0f768",
      "incomplete_value": true,
      "site": "00c0f770",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0e774",
      "incomplete_value": true,
      "site": "00c0e77c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c0f6f8",
      "incomplete_value": true,
      "site": "00c0f6fc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c0e704",
      "incomplete_value": true,
      "site": "00c0e708",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "00c0f6e8",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c0f6f0",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0f6f4",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c0f6e8",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c0f6f0",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0f6f4",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0e730 ["INT_ADD", "register:40f0:8", ["const:c0e730:8", "const:4:8"]]
- 00c0e730 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c0f724 ["INT_ADD", "register:40f0:8", ["const:c0f724:8", "const:4:8"]]
+ 00c0f724 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c0e76c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0e76c ["INT_ADD", "register:40f0:8", ["const:c0e76c:8", "const:4:8"]]
- 00c0e76c ["CALLIND", null, ["register:0:8"]]
+ 00c0f760 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0f760 ["INT_ADD", "register:40f0:8", ["const:c0f760:8", "const:4:8"]]
+ 00c0f760 ["CALLIND", null, ["register:0:8"]]
- 00c0e7b0 ["INT_ADD", "register:40f0:8", ["const:c0e7b0:8", "const:4:8"]]
- 00c0e7b0 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c0f7a4 ["INT_ADD", "register:40f0:8", ["const:c0f7a4:8", "const:4:8"]]
+ 00c0f7a4 ["CALL", null, ["callee:00c5ef80:8"]]
~~~


<a id="compare-e41211d49bc4ea3222260ea14ed20986"></a>

### [`00c0eabc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0eabc.md) → [`00c0fab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0f/00c0fab0.md) _ZNSt6__ndk19__num_getIwE17__stage2_int_prepERNS_8ios_baseEPwRw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md) · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c5f630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f630.md) · 呼出先 5件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `call_argument_candidate` 4件

アドレスに依存する影響 `branch_value` 2件, `call_argument_candidate` 2件, `store_condition` 4件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0fae4",
      "incomplete_value": true,
      "site": "00c0faec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0eaf0",
      "incomplete_value": true,
      "site": "00c0eaf8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
      "definition_site": "00c0fb64",
      "incomplete_value": true,
      "site": "00c0fb6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0eb70",
      "incomplete_value": true,
      "site": "00c0eb78",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c0faf4",
      "incomplete_value": true,
      "site": "00c0faf8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c0eb00",
      "incomplete_value": true,
      "site": "00c0eb04",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "00c0fae4",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c0faec",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0faf0",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c0fae4",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c0faec",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0faf0",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0eb2c ["INT_ADD", "register:40f0:8", ["const:c0eb2c:8", "const:4:8"]]
- 00c0eb2c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c0fb20 ["INT_ADD", "register:40f0:8", ["const:c0fb20:8", "const:4:8"]]
+ 00c0fb20 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c0eb68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0eb68 ["INT_ADD", "register:40f0:8", ["const:c0eb68:8", "const:4:8"]]
- 00c0eb68 ["CALLIND", null, ["register:0:8"]]
+ 00c0fb5c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0fb5c ["INT_ADD", "register:40f0:8", ["const:c0fb5c:8", "const:4:8"]]
+ 00c0fb5c ["CALLIND", null, ["register:0:8"]]
- 00c0ebac ["INT_ADD", "register:40f0:8", ["const:c0ebac:8", "const:4:8"]]
- 00c0ebac ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c0fba0 ["INT_ADD", "register:40f0:8", ["const:c0fba0:8", "const:4:8"]]
+ 00c0fba0 ["CALL", null, ["callee:00c5ef80:8"]]
~~~


<a id="compare-7c54f6608bcd4cec579cd7d94f78f93c"></a>

### [`00c0ec3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0ec3c.md) → [`00c0fc30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0f/00c0fc30.md) _ZNKSt6__ndk17num_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_putES4_RNS_8ios_baseEcb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 99.04% / 新版 99.04%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0fc98",
      "incomplete_value": true,
      "site": "00c0fc98",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0eca4",
      "incomplete_value": true,
      "site": "00c0eca4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c0fca0",
      "incomplete_value": true,
      "site": "00c0fca4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c0ecac",
      "incomplete_value": true,
      "site": "00c0ecb0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0fcc4",
      "incomplete_value": true,
      "site": "00c0fccc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0ecd0",
      "incomplete_value": true,
      "site": "00c0ecd8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c88:8"
              ]
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
      "00c0fc90",
      "READ",
      [
        "storage",
        "00c9bc88",
        null,
        "pointer"
      ]
    ],
    [
      "00c0fc98",
      "DATA",
      [
        "storage",
        "01127f88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0fc9c",
      "READ",
      [
        "storage",
        "01127f88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c0fc90",
      "READ",
      [
        "storage",
        "00c9cc58",
        null,
        "pointer"
      ]
    ],
    [
      "00c0fc98",
      "DATA",
      [
        "storage",
        "01128f48",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0fc9c",
      "READ",
      [
        "storage",
        "01128f48",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0ecd8 ["INT_ADD", "register:40f0:8", ["const:c0ecd8:8", "const:4:8"]]
- 00c0ecd8 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c0fccc ["INT_ADD", "register:40f0:8", ["const:c0fccc:8", "const:4:8"]]
+ 00c0fccc ["CALL", null, ["callee:00c5ef80:8"]]
- 00c0ec94 ["INT_ADD", "register:40f0:8", ["const:c0ec94:8", "const:4:8"]]
- 00c0ec94 ["CALL", null, ["callee:00c59310:8"]]
+ 00c0fc88 ["INT_ADD", "register:40f0:8", ["const:c0fc88:8", "const:4:8"]]
+ 00c0fc88 ["CALL", null, ["callee:00c59310:8"]]
- 00c0ec98 ["COPY", "register:40b0:8", ["const:c9b000:8"]]
+ 00c0fc8c ["COPY", "register:40b0:8", ["const:c9c000:8"]]
~~~


<a id="compare-9b155ac39810567e13b0353272ac1a9d"></a>

### [`00c0ee1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0ee1c.md) → [`00c0fe10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0f/00c0fe10.md) FUN_00c0fe10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c0ee0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0ee0c.md) · 呼出先 8件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 1件 [`00c0fe00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0f/00c0fe00.md) · 呼出先 8件 [`004599c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/004599c8.md) [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c1000c",
      "incomplete_value": true,
      "site": "00c1000c",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0f018",
      "incomplete_value": true,
      "site": "00c0f018",
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
            "const:d98:8"
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
      "definition_site": "00c0fef0",
      "incomplete_value": true,
      "site": "00c0ff08",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0eefc",
      "incomplete_value": true,
      "site": "00c0ef14",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0ffec",
      "incomplete_value": false,
      "site": "00c0fff0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0eff8",
      "incomplete_value": false,
      "site": "00c0effc",
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
            "const:da0:8"
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
      "00c0fee4",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0fef0",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0ffec",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c0fee4",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0fef0",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0ffec",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0ef14 ["INT_ADD", "register:40f0:8", ["const:c0ef14:8", "const:4:8"]]
- 00c0ef14 ["CALL", null, ["callee:00c11234:8"]]
+ 00c0ff08 ["INT_ADD", "register:40f0:8", ["const:c0ff08:8", "const:4:8"]]
+ 00c0ff08 ["CALL", null, ["callee:00c11234:8"]]
- 00c0effc ["INT_ADD", "register:40f0:8", ["const:c0effc:8", "const:4:8"]]
- 00c0effc ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c0fff0 ["INT_ADD", "register:40f0:8", ["const:c0fff0:8", "const:4:8"]]
+ 00c0fff0 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c0f014 ["INT_ADD", "register:40f0:8", ["const:c0f014:8", "const:4:8"]]
- 00c0f014 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c10008 ["INT_ADD", "register:40f0:8", ["const:c10008:8", "const:4:8"]]
+ 00c10008 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-6e0fefd6be51ca3bac81488ac27b0509"></a>

### [`00c0f068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f068.md) → [`00c1005c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c1005c.md) FUN_00c1005c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c0f058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f058.md) · 呼出先 8件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 1件 [`00c1004c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c1004c.md) · 呼出先 8件 [`004599c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/004599c8.md) [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c10258",
      "incomplete_value": true,
      "site": "00c10258",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0f264",
      "incomplete_value": true,
      "site": "00c0f264",
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
            "const:d98:8"
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
      "definition_site": "00c1013c",
      "incomplete_value": true,
      "site": "00c10154",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0f148",
      "incomplete_value": true,
      "site": "00c0f160",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c10238",
      "incomplete_value": false,
      "site": "00c1023c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0f244",
      "incomplete_value": false,
      "site": "00c0f248",
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
            "const:da0:8"
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
      "00c10130",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1013c",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10238",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c10130",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1013c",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10238",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0f160 ["INT_ADD", "register:40f0:8", ["const:c0f160:8", "const:4:8"]]
- 00c0f160 ["CALL", null, ["callee:00c11234:8"]]
+ 00c10154 ["INT_ADD", "register:40f0:8", ["const:c10154:8", "const:4:8"]]
+ 00c10154 ["CALL", null, ["callee:00c11234:8"]]
- 00c0f248 ["INT_ADD", "register:40f0:8", ["const:c0f248:8", "const:4:8"]]
- 00c0f248 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c1023c ["INT_ADD", "register:40f0:8", ["const:c1023c:8", "const:4:8"]]
+ 00c1023c ["CALL", null, ["callee:00c58ef0:8"]]
- 00c0f260 ["INT_ADD", "register:40f0:8", ["const:c0f260:8", "const:4:8"]]
- 00c0f260 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c10254 ["INT_ADD", "register:40f0:8", ["const:c10254:8", "const:4:8"]]
+ 00c10254 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-7ecbae956ab5d03efabd9e5316de3cea"></a>

### [`00c0f2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f2b4.md) → [`00c102a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c102a8.md) FUN_00c102a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c0f2a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f2a4.md) · 呼出先 8件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 1件 [`00c10298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c10298.md) · 呼出先 8件 [`004599c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/004599c8.md) [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.60% / 新版 93.60%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c10488",
      "incomplete_value": true,
      "site": "00c10488",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0f494",
      "incomplete_value": true,
      "site": "00c0f494",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c1036c",
      "incomplete_value": true,
      "site": "00c10384",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0f378",
      "incomplete_value": true,
      "site": "00c0f390",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c10468",
      "incomplete_value": false,
      "site": "00c1046c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0f474",
      "incomplete_value": false,
      "site": "00c0f478",
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
            "const:da0:8"
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
      "00c10360",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1036c",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10468",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c10360",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1036c",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10468",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0f390 ["INT_ADD", "register:40f0:8", ["const:c0f390:8", "const:4:8"]]
- 00c0f390 ["CALL", null, ["callee:00c11234:8"]]
+ 00c10384 ["INT_ADD", "register:40f0:8", ["const:c10384:8", "const:4:8"]]
+ 00c10384 ["CALL", null, ["callee:00c11234:8"]]
- 00c0f478 ["INT_ADD", "register:40f0:8", ["const:c0f478:8", "const:4:8"]]
- 00c0f478 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c1046c ["INT_ADD", "register:40f0:8", ["const:c1046c:8", "const:4:8"]]
+ 00c1046c ["CALL", null, ["callee:00c58ef0:8"]]
- 00c0f490 ["INT_ADD", "register:40f0:8", ["const:c0f490:8", "const:4:8"]]
- 00c0f490 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c10484 ["INT_ADD", "register:40f0:8", ["const:c10484:8", "const:4:8"]]
+ 00c10484 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-29b75eb170fb392306d7e51578e0cfd8"></a>

### [`00c0f4e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f4e4.md) → [`00c104d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c104d8.md) FUN_00c104d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c0f4d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f4d4.md) · 呼出先 8件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 1件 [`00c104c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c104c8.md) · 呼出先 8件 [`004599c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/004599c8.md) [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.60% / 新版 93.60%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c106b8",
      "incomplete_value": true,
      "site": "00c106b8",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0f6c4",
      "incomplete_value": true,
      "site": "00c0f6c4",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c1059c",
      "incomplete_value": true,
      "site": "00c105b4",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0f5a8",
      "incomplete_value": true,
      "site": "00c0f5c0",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c10698",
      "incomplete_value": false,
      "site": "00c1069c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0f6a4",
      "incomplete_value": false,
      "site": "00c0f6a8",
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
            "const:da0:8"
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
      "00c10590",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1059c",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10698",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c10590",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1059c",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10698",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0f5c0 ["INT_ADD", "register:40f0:8", ["const:c0f5c0:8", "const:4:8"]]
- 00c0f5c0 ["CALL", null, ["callee:00c11234:8"]]
+ 00c105b4 ["INT_ADD", "register:40f0:8", ["const:c105b4:8", "const:4:8"]]
+ 00c105b4 ["CALL", null, ["callee:00c11234:8"]]
- 00c0f6a8 ["INT_ADD", "register:40f0:8", ["const:c0f6a8:8", "const:4:8"]]
- 00c0f6a8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c1069c ["INT_ADD", "register:40f0:8", ["const:c1069c:8", "const:4:8"]]
+ 00c1069c ["CALL", null, ["callee:00c58ef0:8"]]
- 00c0f6c0 ["INT_ADD", "register:40f0:8", ["const:c0f6c0:8", "const:4:8"]]
- 00c0f6c0 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c106b4 ["INT_ADD", "register:40f0:8", ["const:c106b4:8", "const:4:8"]]
+ 00c106b4 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-8bd07098cfc9f8465d2970d248362596"></a>

### [`00c0f714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f714.md) → [`00c10708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c10708.md) FUN_00c10708

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c0f704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f704.md) · 呼出先 12件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c106f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c106f8.md) · 呼出先 12件 [`004599c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/004599c8.md) [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c1ca70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1c/00c1ca70.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 91.09% / 新版 91.09%

優先判定に残った影響 `call_argument_candidate` 10件, `store_destination` 2件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c10a4c",
      "incomplete_value": false,
      "site": "00c10a4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0fa58",
      "incomplete_value": false,
      "site": "00c0fa58",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c10a8c",
      "incomplete_value": false,
      "site": "00c10a8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0fa98",
      "incomplete_value": false,
      "site": "00c0fa98",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c10ac4",
      "incomplete_value": true,
      "site": "00c10ac4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0fad0",
      "incomplete_value": true,
      "site": "00c0fad0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "leaf",
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c10808",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10814",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10858",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c10808",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10814",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10858",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0f888 ["INT_ADD", "register:40f0:8", ["const:c0f888:8", "const:4:8"]]
- 00c0f888 ["CALL", null, ["callee:00c11234:8"]]
+ 00c1087c ["INT_ADD", "register:40f0:8", ["const:c1087c:8", "const:4:8"]]
+ 00c1087c ["CALL", null, ["callee:00c11234:8"]]
- 00c0f8c0 ["INT_ADD", "register:40f0:8", ["const:c0f8c0:8", "const:4:8"]]
- 00c0f8c0 ["CALL", null, ["callee:00c1ca70:8"]]
+ 00c108b4 ["INT_ADD", "register:40f0:8", ["const:c108b4:8", "const:4:8"]]
+ 00c108b4 ["CALL", null, ["callee:00c1ca70:8"]]
- 00c0fa38 ["INT_ADD", "register:40f0:8", ["const:c0fa38:8", "const:4:8"]]
- 00c0fa38 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c10a2c ["INT_ADD", "register:40f0:8", ["const:c10a2c:8", "const:4:8"]]
+ 00c10a2c ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-3a5dffb19b3bc68266826005b8ea1482"></a>

### [`00c0fba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0fba4.md) → [`00c10b98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c10b98.md) FUN_00c10b98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c0fb94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0fb94.md) · 呼出先 12件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c10b88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c10b88.md) · 呼出先 12件 [`004599c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/004599c8.md) [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c1ca70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1c/00c1ca70.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 91.02% / 新版 91.02%

優先判定に残った影響 `call_argument_candidate` 14件, `store_destination` 2件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c10ed4",
      "incomplete_value": false,
      "site": "00c10ed4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0fee0",
      "incomplete_value": false,
      "site": "00c0fee0",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c10f14",
      "incomplete_value": false,
      "site": "00c10f14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0ff20",
      "incomplete_value": false,
      "site": "00c0ff20",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c10f4c",
      "incomplete_value": true,
      "site": "00c10f4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0ff58",
      "incomplete_value": true,
      "site": "00c0ff58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "leaf",
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c10c94",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10c9c",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10ce4",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c10c94",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10c9c",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10ce4",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0fcbc ["INT_ADD", "register:40f0:8", ["const:c0fcbc:8", "const:4:8"]]
- 00c0fcbc ["CALL", null, ["callee:00c11234:8"]]
+ 00c10cb0 ["INT_ADD", "register:40f0:8", ["const:c10cb0:8", "const:4:8"]]
+ 00c10cb0 ["CALL", null, ["callee:00c11234:8"]]
- 00c0fd14 ["INT_ADD", "register:40f0:8", ["const:c0fd14:8", "const:4:8"]]
- 00c0fd14 ["CALL", null, ["callee:00c11234:8"]]
+ 00c10d08 ["INT_ADD", "register:40f0:8", ["const:c10d08:8", "const:4:8"]]
+ 00c10d08 ["CALL", null, ["callee:00c11234:8"]]
- 00c0fd4c ["INT_ADD", "register:40f0:8", ["const:c0fd4c:8", "const:4:8"]]
- 00c0fd4c ["CALL", null, ["callee:00c1ca70:8"]]
+ 00c10d40 ["INT_ADD", "register:40f0:8", ["const:c10d40:8", "const:4:8"]]
+ 00c10d40 ["CALL", null, ["callee:00c1ca70:8"]]
~~~


<a id="compare-c92cf2810d3d2cf65cca04a0f2593dbd"></a>

### [`00c1001c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c1001c.md) → [`00c11010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11010.md) _ZNKSt6__ndk17num_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_putES4_RNS_8ios_baseEcPKv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md)
- 新版 呼出元 0件  · 呼出先 10件 [`004599c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/004599c8.md) [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c11104",
      "incomplete_value": true,
      "site": "00c11104",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c10110",
      "incomplete_value": true,
      "site": "00c10110",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c111f4",
      "incomplete_value": true,
      "site": "00c111f4",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c10200",
      "incomplete_value": true,
      "site": "00c10200",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c1110c",
      "incomplete_value": true,
      "site": "00c11110",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c10118",
      "incomplete_value": true,
      "site": "00c1011c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "00c1103c",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11054",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c1105c",
      "PARAM",
      [
        "storage",
        "002a629f",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c1103c",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11054",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c1105c",
      "PARAM",
      [
        "storage",
        "002a63f7",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c10140 ["INT_ADD", "register:40f0:8", ["const:c10140:8", "const:4:8"]]
- 00c10140 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c11134 ["INT_ADD", "register:40f0:8", ["const:c11134:8", "const:4:8"]]
+ 00c11134 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c101e4 ["INT_ADD", "register:40f0:8", ["const:c101e4:8", "const:4:8"]]
- 00c101e4 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c111d8 ["INT_ADD", "register:40f0:8", ["const:c111d8:8", "const:4:8"]]
+ 00c111d8 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c10200 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d98:8"]]
- 00c10200 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c111f4 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d58:8"]]
+ 00c111f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-bd80b043d9143aed7a4bbfe580176147"></a>

### [`00c10370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10370.md) → [`00c11364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11364.md) _ZNKSt6__ndk17num_putIwNS_19ostreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_putES4_RNS_8ios_baseEwb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 99.04% / 新版 99.04%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c113cc",
      "incomplete_value": true,
      "site": "00c113cc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c103d8",
      "incomplete_value": true,
      "site": "00c103d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c113d4",
      "incomplete_value": true,
      "site": "00c113d8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c103e0",
      "incomplete_value": true,
      "site": "00c103e4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c113f8",
      "incomplete_value": true,
      "site": "00c11400",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c10404",
      "incomplete_value": true,
      "site": "00c1040c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
              ]
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
      "00c113c4",
      "READ",
      [
        "storage",
        "00c9bc98",
        null,
        "pointer"
      ]
    ],
    [
      "00c113cc",
      "DATA",
      [
        "storage",
        "01127f98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c113d0",
      "READ",
      [
        "storage",
        "01127f98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c113c4",
      "READ",
      [
        "storage",
        "00c9cc68",
        null,
        "pointer"
      ]
    ],
    [
      "00c113cc",
      "DATA",
      [
        "storage",
        "01128f58",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c113d0",
      "READ",
      [
        "storage",
        "01128f58",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1040c ["INT_ADD", "register:40f0:8", ["const:c1040c:8", "const:4:8"]]
- 00c1040c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c11400 ["INT_ADD", "register:40f0:8", ["const:c11400:8", "const:4:8"]]
+ 00c11400 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c103c8 ["INT_ADD", "register:40f0:8", ["const:c103c8:8", "const:4:8"]]
- 00c103c8 ["CALL", null, ["callee:00c59310:8"]]
+ 00c113bc ["INT_ADD", "register:40f0:8", ["const:c113bc:8", "const:4:8"]]
+ 00c113bc ["CALL", null, ["callee:00c59310:8"]]
- 00c103cc ["COPY", "register:40b0:8", ["const:c9b000:8"]]
+ 00c113c0 ["COPY", "register:40b0:8", ["const:c9c000:8"]]
~~~


<a id="compare-3438d0aca538ad9816b8fc7c10b998ba"></a>

### [`00c10550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10550.md) → [`00c11544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11544.md) FUN_00c11544

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c10540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10540.md) · 呼出先 8件 [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 1件 [`00c11534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11534.md) · 呼出先 8件 [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c12974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12974.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c11740",
      "incomplete_value": true,
      "site": "00c11740",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1074c",
      "incomplete_value": true,
      "site": "00c1074c",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c11624",
      "incomplete_value": true,
      "site": "00c1163c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c10630",
      "incomplete_value": true,
      "site": "00c10648",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c11720",
      "incomplete_value": false,
      "site": "00c11724",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1072c",
      "incomplete_value": false,
      "site": "00c10730",
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
            "const:da0:8"
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
      "00c11618",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11624",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c11720",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c11618",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11624",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c11720",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c10648 ["INT_ADD", "register:40f0:8", ["const:c10648:8", "const:4:8"]]
- 00c10648 ["CALL", null, ["callee:00c11234:8"]]
+ 00c1163c ["INT_ADD", "register:40f0:8", ["const:c1163c:8", "const:4:8"]]
+ 00c1163c ["CALL", null, ["callee:00c11234:8"]]
- 00c10730 ["INT_ADD", "register:40f0:8", ["const:c10730:8", "const:4:8"]]
- 00c10730 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c11724 ["INT_ADD", "register:40f0:8", ["const:c11724:8", "const:4:8"]]
+ 00c11724 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c10748 ["INT_ADD", "register:40f0:8", ["const:c10748:8", "const:4:8"]]
- 00c10748 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c1173c ["INT_ADD", "register:40f0:8", ["const:c1173c:8", "const:4:8"]]
+ 00c1173c ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-05b3a19d0c48724ca28018089bad70ac"></a>

### [`00c1079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c1079c.md) → [`00c11790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11790.md) FUN_00c11790

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c1078c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c1078c.md) · 呼出先 8件 [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 1件 [`00c11780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11780.md) · 呼出先 8件 [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c12974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12974.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c1198c",
      "incomplete_value": true,
      "site": "00c1198c",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c10998",
      "incomplete_value": true,
      "site": "00c10998",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c11870",
      "incomplete_value": true,
      "site": "00c11888",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1087c",
      "incomplete_value": true,
      "site": "00c10894",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c1196c",
      "incomplete_value": false,
      "site": "00c11970",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c10978",
      "incomplete_value": false,
      "site": "00c1097c",
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
            "const:da0:8"
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
      "00c11864",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11870",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c1196c",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c11864",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11870",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c1196c",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c10894 ["INT_ADD", "register:40f0:8", ["const:c10894:8", "const:4:8"]]
- 00c10894 ["CALL", null, ["callee:00c11234:8"]]
+ 00c11888 ["INT_ADD", "register:40f0:8", ["const:c11888:8", "const:4:8"]]
+ 00c11888 ["CALL", null, ["callee:00c11234:8"]]
- 00c1097c ["INT_ADD", "register:40f0:8", ["const:c1097c:8", "const:4:8"]]
- 00c1097c ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c11970 ["INT_ADD", "register:40f0:8", ["const:c11970:8", "const:4:8"]]
+ 00c11970 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c10994 ["INT_ADD", "register:40f0:8", ["const:c10994:8", "const:4:8"]]
- 00c10994 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c11988 ["INT_ADD", "register:40f0:8", ["const:c11988:8", "const:4:8"]]
+ 00c11988 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-5364b446be960ccbf63733d9a00f198a"></a>

### [`00c109e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c109e8.md) → [`00c119dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c119dc.md) FUN_00c119dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c109d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c109d8.md) · 呼出先 8件 [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 1件 [`00c119cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c119cc.md) · 呼出先 8件 [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c12974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12974.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.60% / 新版 93.60%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c11bbc",
      "incomplete_value": true,
      "site": "00c11bbc",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c10bc8",
      "incomplete_value": true,
      "site": "00c10bc8",
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
            "const:d98:8"
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
      "definition_site": "00c11b9c",
      "incomplete_value": false,
      "site": "00c11ba0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c10ba8",
      "incomplete_value": false,
      "site": "00c10bac",
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
            "const:da0:8"
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
      "definition_site": "00c11bac",
      "incomplete_value": false,
      "site": "00c11bb8",
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
            "const:28b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c10bb8",
      "incomplete_value": false,
      "site": "00c10bc4",
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
            "const:1bc:8"
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
      "00c11a94",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11aa0",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c11b9c",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c11a94",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11aa0",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c11b9c",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c10bac ["INT_ADD", "register:40f0:8", ["const:c10bac:8", "const:4:8"]]
- 00c10bac ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c11ba0 ["INT_ADD", "register:40f0:8", ["const:c11ba0:8", "const:4:8"]]
+ 00c11ba0 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c10bc4 ["INT_ADD", "register:40f0:8", ["const:c10bc4:8", "const:4:8"]]
- 00c10bc4 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c11bb8 ["INT_ADD", "register:40f0:8", ["const:c11bb8:8", "const:4:8"]]
+ 00c11bb8 ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c10bc8 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d98:8"]]
- 00c10bc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c11bbc ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d58:8"]]
+ 00c11bbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-973562282ea477268b9276f32e338de2"></a>

### [`00c10c18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10c18.md) → [`00c11c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11c0c.md) FUN_00c11c0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c10c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10c08.md) · 呼出先 8件 [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 1件 [`00c11bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11bfc.md) · 呼出先 8件 [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c12974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12974.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.60% / 新版 93.60%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c11dec",
      "incomplete_value": true,
      "site": "00c11dec",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c10df8",
      "incomplete_value": true,
      "site": "00c10df8",
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
            "const:d98:8"
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
      "definition_site": "00c11cd0",
      "incomplete_value": true,
      "site": "00c11ce8",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c10cdc",
      "incomplete_value": true,
      "site": "00c10cf4",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c11dcc",
      "incomplete_value": false,
      "site": "00c11dd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c10dd8",
      "incomplete_value": false,
      "site": "00c10ddc",
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
            "const:da0:8"
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
      "00c11cc4",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11cd0",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c11dcc",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c11cc4",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11cd0",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c11dcc",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c10cf4 ["INT_ADD", "register:40f0:8", ["const:c10cf4:8", "const:4:8"]]
- 00c10cf4 ["CALL", null, ["callee:00c11234:8"]]
+ 00c11ce8 ["INT_ADD", "register:40f0:8", ["const:c11ce8:8", "const:4:8"]]
+ 00c11ce8 ["CALL", null, ["callee:00c11234:8"]]
- 00c10ddc ["INT_ADD", "register:40f0:8", ["const:c10ddc:8", "const:4:8"]]
- 00c10ddc ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c11dd0 ["INT_ADD", "register:40f0:8", ["const:c11dd0:8", "const:4:8"]]
+ 00c11dd0 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c10df4 ["INT_ADD", "register:40f0:8", ["const:c10df4:8", "const:4:8"]]
- 00c10df4 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c11de8 ["INT_ADD", "register:40f0:8", ["const:c11de8:8", "const:4:8"]]
+ 00c11de8 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-03241a88cf1f3bdce142489cab907d6e"></a>

### [`00c10e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10e48.md) → [`00c11e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11e3c.md) FUN_00c11e3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c10e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10e38.md) · 呼出先 12件 [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c11e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11e2c.md) · 呼出先 12件 [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c12974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12974.md) [`00c1ca70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1c/00c1ca70.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 90.70% / 新版 90.70%

優先判定に残った影響 `call_argument_candidate` 14件, `store_destination` 3件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c12180",
      "incomplete_value": false,
      "site": "00c12180",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1118c",
      "incomplete_value": false,
      "site": "00c1118c",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c121c0",
      "incomplete_value": true,
      "site": "00c121c0",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c111cc",
      "incomplete_value": true,
      "site": "00c111cc",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c121f8",
      "incomplete_value": true,
      "site": "00c121f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c11204",
      "incomplete_value": true,
      "site": "00c11204",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "leaf",
            "const:d98:8"
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
      "00c11f3c",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11f48",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c11f8c",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c11f3c",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11f48",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c11f8c",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c10f64 ["INT_ADD", "register:40f0:8", ["const:c10f64:8", "const:4:8"]]
- 00c10f64 ["CALL", null, ["callee:00c11234:8"]]
+ 00c11f58 ["INT_ADD", "register:40f0:8", ["const:c11f58:8", "const:4:8"]]
+ 00c11f58 ["CALL", null, ["callee:00c11234:8"]]
- 00c10fbc ["INT_ADD", "register:40f0:8", ["const:c10fbc:8", "const:4:8"]]
- 00c10fbc ["CALL", null, ["callee:00c11234:8"]]
+ 00c11fb0 ["INT_ADD", "register:40f0:8", ["const:c11fb0:8", "const:4:8"]]
+ 00c11fb0 ["CALL", null, ["callee:00c11234:8"]]
- 00c10ff4 ["INT_ADD", "register:40f0:8", ["const:c10ff4:8", "const:4:8"]]
- 00c10ff4 ["CALL", null, ["callee:00c1ca70:8"]]
+ 00c11fe8 ["INT_ADD", "register:40f0:8", ["const:c11fe8:8", "const:4:8"]]
+ 00c11fe8 ["CALL", null, ["callee:00c1ca70:8"]]
~~~


<a id="compare-32b2200ea394e33412a380fe596a84e3"></a>

### [`00c112d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c112d8.md) → [`00c122cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c122cc.md) FUN_00c122cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c112c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c112c8.md) · 呼出先 12件 [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c122bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c122bc.md) · 呼出先 12件 [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c12974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12974.md) [`00c1ca70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1c/00c1ca70.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 91.41% / 新版 91.41%

優先判定に残った影響 `call_argument_candidate` 14件, `store_destination` 2件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c12608",
      "incomplete_value": false,
      "site": "00c12608",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c11614",
      "incomplete_value": false,
      "site": "00c11614",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c12648",
      "incomplete_value": false,
      "site": "00c12648",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c11654",
      "incomplete_value": false,
      "site": "00c11654",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c12680",
      "incomplete_value": true,
      "site": "00c12680",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1168c",
      "incomplete_value": true,
      "site": "00c1168c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "leaf",
            "const:d98:8"
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
      "00c123c8",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c123d0",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c12418",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c123c8",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c123d0",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c12418",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c113f0 ["INT_ADD", "register:40f0:8", ["const:c113f0:8", "const:4:8"]]
- 00c113f0 ["CALL", null, ["callee:00c11234:8"]]
+ 00c123e4 ["INT_ADD", "register:40f0:8", ["const:c123e4:8", "const:4:8"]]
+ 00c123e4 ["CALL", null, ["callee:00c11234:8"]]
- 00c11480 ["INT_ADD", "register:40f0:8", ["const:c11480:8", "const:4:8"]]
- 00c11480 ["CALL", null, ["callee:00c1ca70:8"]]
+ 00c12474 ["INT_ADD", "register:40f0:8", ["const:c12474:8", "const:4:8"]]
+ 00c12474 ["CALL", null, ["callee:00c1ca70:8"]]
- 00c114ac ["INT_ADD", "register:40f0:8", ["const:c114ac:8", "const:4:8"]]
- 00c114ac ["CALL", null, ["callee:00c1ca70:8"]]
+ 00c124a0 ["INT_ADD", "register:40f0:8", ["const:c124a0:8", "const:4:8"]]
+ 00c124a0 ["CALL", null, ["callee:00c1ca70:8"]]
~~~


<a id="compare-dc0b9ce2a7a676c5b349c1abc025960e"></a>

### [`00c11750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11750.md) → [`00c12744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12744.md) _ZNKSt6__ndk17num_putIwNS_19ostreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_putES4_RNS_8ios_baseEwPKv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c11234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11234.md) [`00c12974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12974.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c12934",
      "incomplete_value": true,
      "site": "00c12934",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c11940",
      "incomplete_value": true,
      "site": "00c11940",
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
            "const:d98:8"
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
    "new": {
      "definition_site": "00c1278c",
      "incomplete_value": true,
      "site": "00c127a8",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c11798",
      "incomplete_value": true,
      "site": "00c117b4",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c12794",
      "incomplete_value": false,
      "site": "00c127a8",
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
            "const:3f7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c117a0",
      "incomplete_value": false,
      "site": "00c117b4",
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
            "const:29f:8"
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
      "00c12774",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1278c",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c12794",
      "PARAM",
      [
        "storage",
        "002a629f",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c12774",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1278c",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c12794",
      "PARAM",
      [
        "storage",
        "002a63f7",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c117b4 ["INT_ADD", "register:40f0:8", ["const:c117b4:8", "const:4:8"]]
- 00c117b4 ["CALL", null, ["callee:00c11234:8"]]
+ 00c127a8 ["INT_ADD", "register:40f0:8", ["const:c127a8:8", "const:4:8"]]
+ 00c127a8 ["CALL", null, ["callee:00c11234:8"]]
- 00c1187c ["INT_ADD", "register:40f0:8", ["const:c1187c:8", "const:4:8"]]
- 00c1187c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c12870 ["INT_ADD", "register:40f0:8", ["const:c12870:8", "const:4:8"]]
+ 00c12870 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c1193c ["INT_ADD", "register:40f0:8", ["const:c1193c:8", "const:4:8"]]
- 00c1193c ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c12930 ["INT_ADD", "register:40f0:8", ["const:c12930:8", "const:4:8"]]
+ 00c12930 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-4273a3c6034064dc6b400e42bd3d229e"></a>

### [`00c11b80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11b80.md) → [`00c12b74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12b74.md) _ZNSt6__ndk19__num_putIcE21__widen_and_group_intEPcS2_S2_S2_RS2_S3_RKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e6a0.md) · 呼出先 4件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c5f670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f670.md) · 呼出先 4件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 97.12% / 新版 97.12%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c12bbc",
      "incomplete_value": true,
      "site": "00c12bbc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c11bc8",
      "incomplete_value": true,
      "site": "00c11bc8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c12c24",
      "incomplete_value": true,
      "site": "00c12c24",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c11c30",
      "incomplete_value": true,
      "site": "00c11c30",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c12bc8",
      "incomplete_value": true,
      "site": "00c12bcc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c11bd4",
      "incomplete_value": true,
      "site": "00c11bd8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "00c12ba4",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c12bbc",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c12bc4",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c12ba4",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c12bbc",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c12bc4",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c11c00 ["INT_ADD", "register:40f0:8", ["const:c11c00:8", "const:4:8"]]
- 00c11c00 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c12bf4 ["INT_ADD", "register:40f0:8", ["const:c12bf4:8", "const:4:8"]]
+ 00c12bf4 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c11c64 ["INT_ADD", "register:40f0:8", ["const:c11c64:8", "const:4:8"]]
- 00c11c64 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c12c58 ["INT_ADD", "register:40f0:8", ["const:c12c58:8", "const:4:8"]]
+ 00c12c58 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c11ba4 ["COPY", "register:40a8:8", ["const:c9a000:8"]]
+ 00c12b98 ["COPY", "register:40a8:8", ["const:c9b000:8"]]
~~~


<a id="compare-631651c7a82b8588cb0eee416dcf0a2a"></a>

### [`00c11f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11f74.md) → [`00c12f68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12f68.md) _ZNSt6__ndk19__num_putIcE23__widen_and_group_floatEPcS2_S2_S2_RS2_S3_RKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e6b0.md) · 呼出先 7件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5f680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f680.md) · 呼出先 7件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination, store_value

命令の説明率　旧版 96.44% / 新版 96.44%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_condition` 2件, `store_destination` 2件, `store_value` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c12fb0",
      "incomplete_value": true,
      "site": "00c12fb0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c11fbc",
      "incomplete_value": true,
      "site": "00c11fbc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c13018",
      "incomplete_value": true,
      "site": "00c13018",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c12024",
      "incomplete_value": true,
      "site": "00c12024",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
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
    "kind": "store_destination",
    "new": {
      "definition_site": "00c131bc",
      "incomplete_value": true,
      "site": "00c131bc",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c121c8",
      "incomplete_value": true,
      "site": "00c121c8",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c12f98",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c12fb0",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c12fb8",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c12f98",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c12fb0",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c12fb8",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c11ff4 ["INT_ADD", "register:40f0:8", ["const:c11ff4:8", "const:4:8"]]
- 00c11ff4 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c12fe8 ["INT_ADD", "register:40f0:8", ["const:c12fe8:8", "const:4:8"]]
+ 00c12fe8 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c12058 ["INT_ADD", "register:40f0:8", ["const:c12058:8", "const:4:8"]]
- 00c12058 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c1304c ["INT_ADD", "register:40f0:8", ["const:c1304c:8", "const:4:8"]]
+ 00c1304c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c121c8 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d98:8"]]
- 00c121c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c131bc ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d58:8"]]
+ 00c131bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-731a67777630bdc06b50849b9b1fc7ee"></a>

### [`00c1256c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c12/00c1256c.md) → [`00c13560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c13/00c13560.md) _ZNSt6__ndk19__num_putIwE21__widen_and_group_intEPcS2_S2_PwRS3_S4_RKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e6c0.md) · 呼出先 4件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c5f690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f690.md) · 呼出先 4件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c135a8",
      "incomplete_value": true,
      "site": "00c135a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c125b4",
      "incomplete_value": true,
      "site": "00c125b4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
      "definition_site": "00c13610",
      "incomplete_value": true,
      "site": "00c13610",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1261c",
      "incomplete_value": true,
      "site": "00c1261c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c135b4",
      "incomplete_value": true,
      "site": "00c135b8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c125c0",
      "incomplete_value": true,
      "site": "00c125c4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "00c13590",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c135a8",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c135b0",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c13590",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c135a8",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c135b0",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c125ec ["INT_ADD", "register:40f0:8", ["const:c125ec:8", "const:4:8"]]
- 00c125ec ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c135e0 ["INT_ADD", "register:40f0:8", ["const:c135e0:8", "const:4:8"]]
+ 00c135e0 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c12650 ["INT_ADD", "register:40f0:8", ["const:c12650:8", "const:4:8"]]
- 00c12650 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c13644 ["INT_ADD", "register:40f0:8", ["const:c13644:8", "const:4:8"]]
+ 00c13644 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c12590 ["COPY", "register:40b0:8", ["const:c9b000:8"]]
+ 00c13584 ["COPY", "register:40b0:8", ["const:c9c000:8"]]
~~~


<a id="compare-3588ac8a3878a2a10ecc9be96186e4c7"></a>

### [`00c12968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c12/00c12968.md) → [`00c1395c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c13/00c1395c.md) _ZNSt6__ndk19__num_putIwE23__widen_and_group_floatEPcS2_S2_PwRS3_S4_RKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e6d0.md) · 呼出先 7件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5f6a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f6a0.md) · 呼出先 7件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination, store_value

命令の説明率　旧版 96.71% / 新版 96.71%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_destination` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c139a4",
      "incomplete_value": true,
      "site": "00c139a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c129b0",
      "incomplete_value": true,
      "site": "00c129b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
      "definition_site": "00c13ba8",
      "incomplete_value": true,
      "site": "00c13ba8",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c12bb4",
      "incomplete_value": true,
      "site": "00c12bb4",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c13c28",
      "incomplete_value": false,
      "site": "00c13c28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c12c34",
      "incomplete_value": false,
      "site": "00c12c34",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c1398c",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c139a4",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c139ac",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1398c",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c139a4",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c139ac",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c12a4c ["INT_ADD", "register:40f0:8", ["const:c12a4c:8", "const:4:8"]]
- 00c12a4c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c13a40 ["INT_ADD", "register:40f0:8", ["const:c13a40:8", "const:4:8"]]
+ 00c13a40 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c12bb4 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d98:8"]]
- 00c12bb4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c13ba8 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d58:8"]]
+ 00c13ba8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00c12c34 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
- 00c12c34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c13c28 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d58:8"]]
+ 00c13c28 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-b37aa48a5a8d0b32219fc3675cf36f89"></a>

### [`00c13514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13514.md) → [`00c14508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c14508.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE14do_get_weekdayES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c08ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08ba8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 98.77% / 新版 98.77%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c14548",
      "incomplete_value": true,
      "site": "00c14550",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c13554",
      "incomplete_value": true,
      "site": "00c1355c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c14558",
      "incomplete_value": true,
      "site": "00c1455c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c13564",
      "incomplete_value": true,
      "site": "00c13568",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c14578",
      "incomplete_value": true,
      "site": "00c14580",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c13584",
      "incomplete_value": true,
      "site": "00c1358c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c14548",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c14550",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c14554",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c14548",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c14550",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c14554",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1358c ["INT_ADD", "register:40f0:8", ["const:c1358c:8", "const:4:8"]]
- 00c1358c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c14580 ["INT_ADD", "register:40f0:8", ["const:c14580:8", "const:4:8"]]
+ 00c14580 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c1354c ["INT_ADD", "register:40f0:8", ["const:c1354c:8", "const:4:8"]]
- 00c1354c ["CALL", null, ["callee:00c59310:8"]]
+ 00c14540 ["INT_ADD", "register:40f0:8", ["const:c14540:8", "const:4:8"]]
+ 00c14540 ["CALL", null, ["callee:00c59310:8"]]
- 00c13550 ["COPY", "register:40c0:8", ["const:c9a000:8"]]
+ 00c14544 ["COPY", "register:40c0:8", ["const:c9b000:8"]]
~~~


<a id="compare-1d3584ba0b01c5e603b9915fa7cfcb6a"></a>

### [`00c13728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13728.md) → [`00c1471c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c1471c.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE16do_get_monthnameES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c08ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08ba8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 98.73% / 新版 98.73%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c1475c",
      "incomplete_value": true,
      "site": "00c14764",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c13768",
      "incomplete_value": true,
      "site": "00c13770",
      "value": [
        "LOAD",
        "8",
        [
          [
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
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c1476c",
      "incomplete_value": true,
      "site": "00c14770",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c13778",
      "incomplete_value": true,
      "site": "00c1377c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c1478c",
      "incomplete_value": true,
      "site": "00c14794",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c13798",
      "incomplete_value": true,
      "site": "00c137a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c1475c",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c14764",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c14768",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1475c",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c14764",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c14768",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c137a0 ["INT_ADD", "register:40f0:8", ["const:c137a0:8", "const:4:8"]]
- 00c137a0 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c14794 ["INT_ADD", "register:40f0:8", ["const:c14794:8", "const:4:8"]]
+ 00c14794 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c13760 ["INT_ADD", "register:40f0:8", ["const:c13760:8", "const:4:8"]]
- 00c13760 ["CALL", null, ["callee:00c59310:8"]]
+ 00c14754 ["INT_ADD", "register:40f0:8", ["const:c14754:8", "const:4:8"]]
+ 00c14754 ["CALL", null, ["callee:00c59310:8"]]
- 00c13764 ["COPY", "register:40c0:8", ["const:c9a000:8"]]
+ 00c14758 ["COPY", "register:40c0:8", ["const:c9b000:8"]]
~~~


<a id="compare-c2faa67a4c14c50f4a4208bdaf976c63"></a>

### [`00c1392c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c1392c.md) → [`00c14920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c14920.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE11do_get_yearES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c1495c",
      "incomplete_value": true,
      "site": "00c14964",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c13968",
      "incomplete_value": true,
      "site": "00c13970",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c14990",
      "incomplete_value": true,
      "site": "00c14998",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c1399c",
      "incomplete_value": true,
      "site": "00c139a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c1498c",
      "incomplete_value": false,
      "site": "00c14998",
      "value": [
        "leaf",
        "const:c37048:8"
      ]
    },
    "old": {
      "definition_site": "00c13998",
      "incomplete_value": false,
      "site": "00c139a4",
      "value": [
        "leaf",
        "const:c36054:8"
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
      "00c1495c",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c14964",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c14968",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1495c",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c14964",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c14968",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c139a4 ["INT_ADD", "register:40f0:8", ["const:c139a4:8", "const:4:8"]]
- 00c139a4 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c14998 ["INT_ADD", "register:40f0:8", ["const:c14998:8", "const:4:8"]]
+ 00c14998 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c13960 ["INT_ADD", "register:40f0:8", ["const:c13960:8", "const:4:8"]]
- 00c13960 ["CALL", null, ["callee:00c59310:8"]]
+ 00c14954 ["INT_ADD", "register:40f0:8", ["const:c14954:8", "const:4:8"]]
+ 00c14954 ["CALL", null, ["callee:00c59310:8"]]
- 00c13964 ["COPY", "register:40b8:8", ["const:c9a000:8"]]
+ 00c14958 ["COPY", "register:40b8:8", ["const:c9b000:8"]]
~~~


<a id="compare-91fcae7ef47313c72a697b0e83d93c47"></a>

### [`00c13ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13ab0.md) → [`00c14aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c14aa4.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_getES4_S4_RNS_8ios_baseERjP2tmcc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md) [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c08ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08ba8.md) [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 97.57% / 新版 97.57%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c14afc",
      "incomplete_value": true,
      "site": "00c14afc",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40d0:8"
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
      "definition_site": "00c13b08",
      "incomplete_value": true,
      "site": "00c13b08",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40d0:8"
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c14cf0",
      "incomplete_value": true,
      "site": "00c14d04",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:310000:8"
              ],
              [
                "leaf",
                "const:f3f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c13cfc",
      "incomplete_value": true,
      "site": "00c13d10",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:310000:8"
              ],
              [
                "leaf",
                "const:eff:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c14b04",
      "incomplete_value": true,
      "site": "00c14b08",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c13b10",
      "incomplete_value": true,
      "site": "00c13b14",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "00c14af4",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c14afc",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c14b00",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c14af4",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c14afc",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c14b00",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c13b3c ["INT_ADD", "register:40f0:8", ["const:c13b3c:8", "const:4:8"]]
- 00c13b3c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c14b30 ["INT_ADD", "register:40f0:8", ["const:c14b30:8", "const:4:8"]]
+ 00c14b30 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c13af8 ["INT_ADD", "register:40f0:8", ["const:c13af8:8", "const:4:8"]]
- 00c13af8 ["CALL", null, ["callee:00c59310:8"]]
+ 00c14aec ["INT_ADD", "register:40f0:8", ["const:c14aec:8", "const:4:8"]]
+ 00c14aec ["CALL", null, ["callee:00c59310:8"]]
- 00c13afc ["COPY", "register:40d0:8", ["const:c9a000:8"]]
+ 00c14af0 ["COPY", "register:40d0:8", ["const:c9b000:8"]]
~~~


<a id="compare-8c2a577b9b0d7c6499c5d2541613f5df"></a>

### [`00c14c8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14c8c.md) → [`00c15c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c15c80.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE3getES4_S4_RNS_8ios_baseERjP2tmPKwSC_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e700.md) · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c5f6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f6d0.md) · 呼出先 5件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.68% / 新版 99.68%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c15d08",
      "incomplete_value": true,
      "site": "00c15d10",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c14d14",
      "incomplete_value": true,
      "site": "00c14d1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
      "definition_site": "00c15d04",
      "incomplete_value": false,
      "site": "00c15d10",
      "value": [
        "leaf",
        "const:c37048:8"
      ]
    },
    "old": {
      "definition_site": "00c14d10",
      "incomplete_value": false,
      "site": "00c14d1c",
      "value": [
        "leaf",
        "const:c36054:8"
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
      "00c15cd4",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c15cdc",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c15ce0",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c15cd4",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c15cdc",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c15ce0",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c14d1c ["INT_ADD", "register:40f0:8", ["const:c14d1c:8", "const:4:8"]]
- 00c14d1c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c15d10 ["INT_ADD", "register:40f0:8", ["const:c15d10:8", "const:4:8"]]
+ 00c15d10 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c14cd8 ["INT_ADD", "register:40f0:8", ["const:c14cd8:8", "const:4:8"]]
- 00c14cd8 ["CALL", null, ["callee:00c59310:8"]]
+ 00c15ccc ["INT_ADD", "register:40f0:8", ["const:c15ccc:8", "const:4:8"]]
+ 00c15ccc ["CALL", null, ["callee:00c59310:8"]]
- 00c14cdc ["COPY", "register:40e0:8", ["const:c9b000:8"]]
+ 00c15cd0 ["COPY", "register:40e0:8", ["const:c9c000:8"]]
~~~


<a id="compare-16a921080b74b024c8f3ed764ccfde38"></a>

### [`00c1518c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c1518c.md) → [`00c16180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16180.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE11do_get_timeES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e700.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f6d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c1619c",
      "incomplete_value": true,
      "site": "00c161a8",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2e1000:8"
              ],
              [
                "leaf",
                "const:9f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c151a8",
      "incomplete_value": true,
      "site": "00c151b4",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2e1000:8"
              ],
              [
                "leaf",
                "const:9b8:8"
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
      "definition_site": "00c1619c",
      "incomplete_value": true,
      "site": "00c161a8",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00c151a8",
      "incomplete_value": true,
      "site": "00c151b4",
      "value": [
        "LOAD",
        "16",
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
      "00c1619c",
      "READ",
      [
        "storage",
        "002e19b8",
        null,
        null
      ]
    ],
    [
      "00c1619c",
      "READ",
      [
        "storage",
        "002e19c8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c1619c",
      "READ",
      [
        "storage",
        "002e19f8",
        null,
        null
      ]
    ],
    [
      "00c1619c",
      "READ",
      [
        "storage",
        "002e1a08",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c151a0 ["COPY", "tmp:0:8", ["const:9b8:8"]]
- 00c151a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c151a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c151a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c16194 ["COPY", "tmp:0:8", ["const:9f8:8"]]
+ 00c16194 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c16194 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c16194 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c151b8 ["INT_ADD", "register:40f0:8", ["const:c151b8:8", "const:4:8"]]
- 00c151b8 ["CALL", null, ["callee:00c5f6d0:8"]]
+ 00c161ac ["INT_ADD", "register:40f0:8", ["const:c161ac:8", "const:4:8"]]
+ 00c161ac ["CALL", null, ["callee:00c5f6d0:8"]]
~~~


<a id="compare-a25d2efad3f7a2c3db1b7877788de3f7"></a>

### [`00c1525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c1525c.md) → [`00c16250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16250.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE14do_get_weekdayES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c0c080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c080.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 98.77% / 新版 98.77%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c16290",
      "incomplete_value": true,
      "site": "00c16298",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1529c",
      "incomplete_value": true,
      "site": "00c152a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c162a0",
      "incomplete_value": true,
      "site": "00c162a4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c152ac",
      "incomplete_value": true,
      "site": "00c152b0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c162c0",
      "incomplete_value": true,
      "site": "00c162c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c152cc",
      "incomplete_value": true,
      "site": "00c152d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
              ]
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
      "00c16290",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c16298",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c1629c",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c16290",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c16298",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c1629c",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c152d4 ["INT_ADD", "register:40f0:8", ["const:c152d4:8", "const:4:8"]]
- 00c152d4 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c162c8 ["INT_ADD", "register:40f0:8", ["const:c162c8:8", "const:4:8"]]
+ 00c162c8 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c15294 ["INT_ADD", "register:40f0:8", ["const:c15294:8", "const:4:8"]]
- 00c15294 ["CALL", null, ["callee:00c59310:8"]]
+ 00c16288 ["INT_ADD", "register:40f0:8", ["const:c16288:8", "const:4:8"]]
+ 00c16288 ["CALL", null, ["callee:00c59310:8"]]
- 00c15298 ["COPY", "register:40c0:8", ["const:c9b000:8"]]
+ 00c1628c ["COPY", "register:40c0:8", ["const:c9c000:8"]]
~~~


<a id="compare-6edd3591c388b4109abb0b7b4b96dc3c"></a>

### [`00c15470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15470.md) → [`00c16464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16464.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE16do_get_monthnameES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c0c080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c080.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 98.73% / 新版 98.73%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c164a4",
      "incomplete_value": true,
      "site": "00c164ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c154b0",
      "incomplete_value": true,
      "site": "00c154b8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c164b4",
      "incomplete_value": true,
      "site": "00c164b8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c154c0",
      "incomplete_value": true,
      "site": "00c154c4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c164d4",
      "incomplete_value": true,
      "site": "00c164dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c154e0",
      "incomplete_value": true,
      "site": "00c154e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
              ]
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
      "00c164a4",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c164ac",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c164b0",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c164a4",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c164ac",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c164b0",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c154e8 ["INT_ADD", "register:40f0:8", ["const:c154e8:8", "const:4:8"]]
- 00c154e8 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c164dc ["INT_ADD", "register:40f0:8", ["const:c164dc:8", "const:4:8"]]
+ 00c164dc ["CALL", null, ["callee:00c5ef80:8"]]
- 00c154a8 ["INT_ADD", "register:40f0:8", ["const:c154a8:8", "const:4:8"]]
- 00c154a8 ["CALL", null, ["callee:00c59310:8"]]
+ 00c1649c ["INT_ADD", "register:40f0:8", ["const:c1649c:8", "const:4:8"]]
+ 00c1649c ["CALL", null, ["callee:00c59310:8"]]
- 00c154ac ["COPY", "register:40c0:8", ["const:c9b000:8"]]
+ 00c164a0 ["COPY", "register:40c0:8", ["const:c9c000:8"]]
~~~


<a id="compare-9e2de23ad551a69eb3f99004b3550414"></a>

### [`00c15674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15674.md) → [`00c16668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16668.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE11do_get_yearES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c166a4",
      "incomplete_value": true,
      "site": "00c166ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c156b0",
      "incomplete_value": true,
      "site": "00c156b8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c166b4",
      "incomplete_value": true,
      "site": "00c166b8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c156c0",
      "incomplete_value": true,
      "site": "00c156c4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c166d8",
      "incomplete_value": true,
      "site": "00c166e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c156e4",
      "incomplete_value": true,
      "site": "00c156ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
              ]
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
      "00c166a4",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c166ac",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c166b0",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c166a4",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c166ac",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c166b0",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c156ec ["INT_ADD", "register:40f0:8", ["const:c156ec:8", "const:4:8"]]
- 00c156ec ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c166e0 ["INT_ADD", "register:40f0:8", ["const:c166e0:8", "const:4:8"]]
+ 00c166e0 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c156a8 ["INT_ADD", "register:40f0:8", ["const:c156a8:8", "const:4:8"]]
- 00c156a8 ["CALL", null, ["callee:00c59310:8"]]
+ 00c1669c ["INT_ADD", "register:40f0:8", ["const:c1669c:8", "const:4:8"]]
+ 00c1669c ["CALL", null, ["callee:00c59310:8"]]
- 00c156ac ["COPY", "register:40b8:8", ["const:c9b000:8"]]
+ 00c166a0 ["COPY", "register:40b8:8", ["const:c9c000:8"]]
~~~


<a id="compare-03a1b34c90d991f56c91b63620893080"></a>

### [`00c157f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c157f8.md) → [`00c167ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c167ec.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_getES4_S4_RNS_8ios_baseERjP2tmcc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md) [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c0c080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c080.md) [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.07% / 新版 96.07%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 4件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c16844",
      "incomplete_value": true,
      "site": "00c16844",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c15850",
      "incomplete_value": true,
      "site": "00c15850",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
      "definition_site": "00c16a34",
      "incomplete_value": true,
      "site": "00c16a48",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:310000:8"
              ],
              [
                "leaf",
                "const:f4c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c15a40",
      "incomplete_value": true,
      "site": "00c15a54",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:310000:8"
              ],
              [
                "leaf",
                "const:f0c:8"
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
      "definition_site": "00c16a34",
      "incomplete_value": true,
      "site": "00c16a48",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00c15a40",
      "incomplete_value": true,
      "site": "00c15a54",
      "value": [
        "LOAD",
        "16",
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
      "00c1683c",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c16844",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c16848",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1683c",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c16844",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c16848",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c15884 ["INT_ADD", "register:40f0:8", ["const:c15884:8", "const:4:8"]]
- 00c15884 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c16878 ["INT_ADD", "register:40f0:8", ["const:c16878:8", "const:4:8"]]
+ 00c16878 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c15840 ["INT_ADD", "register:40f0:8", ["const:c15840:8", "const:4:8"]]
- 00c15840 ["CALL", null, ["callee:00c59310:8"]]
+ 00c16834 ["INT_ADD", "register:40f0:8", ["const:c16834:8", "const:4:8"]]
+ 00c16834 ["CALL", null, ["callee:00c59310:8"]]
- 00c15844 ["COPY", "register:40d0:8", ["const:c9b000:8"]]
+ 00c16838 ["COPY", "register:40d0:8", ["const:c9c000:8"]]
~~~


<a id="compare-d91c3933d72219c9b7e27270824f188e"></a>

### [`00c169e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c169e8.md) → [`00c179dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c179dc.md) _ZNKSt6__ndk18time_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE3putES4_RNS_8ios_baseEcPK2tmPKcSC_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5a850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a850.md) · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c5b820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b820.md) · 呼出先 5件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 99.39% / 新版 99.39%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c17a2c",
      "incomplete_value": true,
      "site": "00c17a34",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c16a38",
      "incomplete_value": true,
      "site": "00c16a40",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c17a3c",
      "incomplete_value": true,
      "site": "00c17a40",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c16a48",
      "incomplete_value": true,
      "site": "00c16a4c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c17a5c",
      "incomplete_value": true,
      "site": "00c17a64",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c16a68",
      "incomplete_value": true,
      "site": "00c16a70",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c17a2c",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c17a34",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c17a38",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c17a2c",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c17a34",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c17a38",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c16a70 ["INT_ADD", "register:40f0:8", ["const:c16a70:8", "const:4:8"]]
- 00c16a70 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c17a64 ["INT_ADD", "register:40f0:8", ["const:c17a64:8", "const:4:8"]]
+ 00c17a64 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c16a30 ["INT_ADD", "register:40f0:8", ["const:c16a30:8", "const:4:8"]]
- 00c16a30 ["CALL", null, ["callee:00c59310:8"]]
+ 00c17a24 ["INT_ADD", "register:40f0:8", ["const:c17a24:8", "const:4:8"]]
+ 00c17a24 ["CALL", null, ["callee:00c59310:8"]]
- 00c16a34 ["COPY", "register:40d8:8", ["const:c9a000:8"]]
+ 00c17a28 ["COPY", "register:40d8:8", ["const:c9b000:8"]]
~~~


<a id="compare-fbfd3d545932741cc270501d277565bd"></a>

### [`00c16dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c16dc8.md) → [`00c17dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17dbc.md) _ZNKSt6__ndk18time_putIwNS_19ostreambuf_iteratorIwNS_11char_traitsIwEEEEE3putES4_RNS_8ios_baseEwPK2tmPKwSC_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 99.40% / 新版 99.40%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c17e0c",
      "incomplete_value": true,
      "site": "00c17e14",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c16e18",
      "incomplete_value": true,
      "site": "00c16e20",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c17e1c",
      "incomplete_value": true,
      "site": "00c17e20",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c16e28",
      "incomplete_value": true,
      "site": "00c16e2c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c17e3c",
      "incomplete_value": true,
      "site": "00c17e44",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c16e48",
      "incomplete_value": true,
      "site": "00c16e50",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
              ]
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
      "00c17e0c",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c17e14",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c17e18",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c17e0c",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c17e14",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c17e18",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c16e50 ["INT_ADD", "register:40f0:8", ["const:c16e50:8", "const:4:8"]]
- 00c16e50 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c17e44 ["INT_ADD", "register:40f0:8", ["const:c17e44:8", "const:4:8"]]
+ 00c17e44 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c16e10 ["INT_ADD", "register:40f0:8", ["const:c16e10:8", "const:4:8"]]
- 00c16e10 ["CALL", null, ["callee:00c59310:8"]]
+ 00c17e04 ["INT_ADD", "register:40f0:8", ["const:c17e04:8", "const:4:8"]]
+ 00c17e04 ["CALL", null, ["callee:00c59310:8"]]
- 00c16e14 ["COPY", "register:40d8:8", ["const:c9b000:8"]]
+ 00c17e08 ["COPY", "register:40d8:8", ["const:c9c000:8"]]
~~~


<a id="compare-06d66b69e79c606a3b418be31182bd2a"></a>

### [`00c17134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17134.md) → [`00c18128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c18/00c18128.md) _ZNKSt6__ndk110__time_put8__do_putEPwRS1_PK2tmcc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e740.md) · 呼出先 5件 [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md) [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5e730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e730.md) [`00c5e750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e750.md)
- 新版 呼出元 1件 [`00c5f710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f710.md) · 呼出先 5件 [`00440f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440f9c.md) [`00c5f050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f050.md) [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5f700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f700.md) [`00c5f720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f720.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.25% / 新版 98.25%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c18200",
      "incomplete_value": false,
      "site": "00c18204",
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
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1720c",
      "incomplete_value": false,
      "site": "00c17210",
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
            "const:d98:8"
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
      "00c18200",
      "PARAM",
      [
        "storage",
        "0029fd98",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c18200",
      "PARAM",
      [
        "storage",
        "0029fdd8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c17210 ["INT_ADD", "register:40f0:8", ["const:c17210:8", "const:4:8"]]
- 00c17210 ["CALL", null, ["callee:00c5f050:8"]]
+ 00c18204 ["INT_ADD", "register:40f0:8", ["const:c18204:8", "const:4:8"]]
+ 00c18204 ["CALL", null, ["callee:00c5f050:8"]]
- 00c17194 ["INT_ADD", "register:40f0:8", ["const:c17194:8", "const:4:8"]]
- 00c17194 ["CALL", null, ["callee:00c5f700:8"]]
+ 00c18188 ["INT_ADD", "register:40f0:8", ["const:c18188:8", "const:4:8"]]
+ 00c18188 ["CALL", null, ["callee:00c5f700:8"]]
- 00c171ac ["INT_ADD", "register:40f0:8", ["const:c171ac:8", "const:4:8"]]
- 00c171ac ["CALL", null, ["callee:00c5f610:8"]]
+ 00c181a0 ["INT_ADD", "register:40f0:8", ["const:c181a0:8", "const:4:8"]]
+ 00c181a0 ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-aa0642b88ddca72ae94145796e0ad99b"></a>

### [`00c17384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17384.md) → [`00c18378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c18/00c18378.md) _ZNKSt6__ndk110moneypunctIwLb0EE16do_negative_signEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c18384",
      "incomplete_value": true,
      "site": "00c1838c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c17390",
      "incomplete_value": true,
      "site": "00c17398",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "leaf",
            "const:2c4000:8"
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
      "00c18384",
      "READ",
      [
        "storage",
        "002c4000",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c18384",
      "READ",
      [
        "storage",
        "002c4050",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c17390 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00c17390 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00c17390 ["COPY", "register:5008:8", ["const:0:8"]]
- 00c17390 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c18384 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:50:8"]]
+ 00c18384 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c18384 ["COPY", "register:5008:8", ["const:0:8"]]
+ 00c18384 ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-5449a955d0b85523a030304e0da35d96"></a>

### [`00c17414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17414.md) → [`00c18408`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c18/00c18408.md) _ZNKSt6__ndk110moneypunctIwLb1EE16do_negative_signEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c18414",
      "incomplete_value": true,
      "site": "00c1841c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c17420",
      "incomplete_value": true,
      "site": "00c17428",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "leaf",
            "const:2c4000:8"
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
      "00c18414",
      "READ",
      [
        "storage",
        "002c4000",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c18414",
      "READ",
      [
        "storage",
        "002c4050",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c17420 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00c17420 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00c17420 ["COPY", "register:5008:8", ["const:0:8"]]
- 00c17420 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c18414 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:50:8"]]
+ 00c18414 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c18414 ["COPY", "register:5008:8", ["const:0:8"]]
+ 00c18414 ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-f780e623b7afb21d751cec72a0154d4c"></a>

### [`00c1784c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c1784c.md) → [`00c18840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c18/00c18840.md) _ZNKSt6__ndk19money_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_getES4_S4_bRNS_8ios_baseERjRe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c17b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17b90.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c18b84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c18/00c18b84.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59070.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c1889c",
      "incomplete_value": true,
      "site": "00c188a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c178a8",
      "incomplete_value": true,
      "site": "00c178b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c18948",
      "incomplete_value": true,
      "site": "00c18954",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d7f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c17954",
      "incomplete_value": true,
      "site": "00c17960",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d3f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c188d0",
      "incomplete_value": true,
      "site": "00c188d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c178dc",
      "incomplete_value": true,
      "site": "00c178e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c18870",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ],
    [
      "00c18888",
      "DATA",
      [
        "storage",
        "00c17b90",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c1889c",
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
      "00c18870",
      "READ",
      [
        "storage",
        "00c9cc70",
        null,
        "pointer"
      ]
    ],
    [
      "00c18888",
      "DATA",
      [
        "storage",
        "00c18b84",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c1889c",
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
- 00c178e4 ["INT_ADD", "register:40f0:8", ["const:c178e4:8", "const:4:8"]]
- 00c178e4 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c188d8 ["INT_ADD", "register:40f0:8", ["const:c188d8:8", "const:4:8"]]
+ 00c188d8 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c17a10 ["INT_ADD", "register:40f0:8", ["const:c17a10:8", "const:4:8"]]
- 00c17a10 ["CALL", null, ["callee:00c5f740:8"]]
+ 00c18a04 ["INT_ADD", "register:40f0:8", ["const:c18a04:8", "const:4:8"]]
+ 00c18a04 ["CALL", null, ["callee:00c5f740:8"]]
- 00c17b28 ["INT_ADD", "register:40f0:8", ["const:c17b28:8", "const:4:8"]]
- 00c17b28 ["CALL", null, ["callee:00c5f050:8"]]
+ 00c18b1c ["INT_ADD", "register:40f0:8", ["const:c18b1c:8", "const:4:8"]]
+ 00c18b1c ["CALL", null, ["callee:00c5f050:8"]]
~~~


<a id="compare-3782916da46d744352e141d99a436b8e"></a>

### [`00c17b98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17b98.md) → [`00c18b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c18/00c18b8c.md) _ZNSt6__ndk19money_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE8__do_getERS4_S4_bRKNS_6localeEjRjRbRKNS_5ctypeIcEERNS_10unique_ptr

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e760.md) · 呼出先 11件 [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00c17b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17b90.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c586d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586d0.md)
- 新版 呼出元 1件 [`00c5f730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f730.md) · 呼出先 11件 [`00440f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440f9c.md) [`00c18b84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c18/00c18b84.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c596a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596a0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.91% / 新版 98.91%

優先判定に残った影響 `branch_value` 2件, `store_value` 3件

アドレスに依存する影響 `branch_value` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c18cf8",
      "incomplete_value": true,
      "site": "00c18d00",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c17d04",
      "incomplete_value": true,
      "site": "00c17d0c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca0:8"
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
      "definition_site": "00c18fd4",
      "incomplete_value": true,
      "site": "00c18fd8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c17fe0",
      "incomplete_value": true,
      "site": "00c17fe4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:df8:8"
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
      "definition_site": "00c1900c",
      "incomplete_value": true,
      "site": "00c19010",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:dc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c18018",
      "incomplete_value": true,
      "site": "00c1801c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:df8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 51,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c18cf8",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ],
    [
      "00c18d00",
      "DATA",
      [
        "storage",
        "00c17b90",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c18f1c",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c18cf8",
      "READ",
      [
        "storage",
        "00c9cc70",
        null,
        "pointer"
      ]
    ],
    [
      "00c18d00",
      "DATA",
      [
        "storage",
        "00c18b84",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c18f1c",
      "READ",
      [
        "storage",
        "00c9cc70",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c17c0c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c17c0c ["INT_ADD", "register:40f0:8", ["const:c17c0c:8", "const:4:8"]]
- 00c17c0c ["CALLIND", null, ["register:0:8"]]
+ 00c18c00 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c18c00 ["INT_ADD", "register:40f0:8", ["const:c18c00:8", "const:4:8"]]
+ 00c18c00 ["CALLIND", null, ["register:0:8"]]
- 00c17ca8 ["INT_ADD", "register:40f0:8", ["const:c17ca8:8", "const:4:8"]]
- 00c17ca8 ["CALL", null, ["callee:00c5f750:8"]]
+ 00c18c9c ["INT_ADD", "register:40f0:8", ["const:c18c9c:8", "const:4:8"]]
+ 00c18c9c ["CALL", null, ["callee:00c5f750:8"]]
- 00c17cf8 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00c18cec ["COPY", "register:4048:8", ["const:c9c000:8"]]
~~~


<a id="compare-4bb8517276e9dbf4a134611a4cffb3e4"></a>

### [`00c18da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c18/00c18da0.md) → [`00c19d94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c19/00c19d94.md) _ZNKSt6__ndk19money_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_getES4_S4_bRNS_8ios_baseERjRNS_12basic_stringIcS3_NS_9allocato

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c17b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17b90.md) [`00c19060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c19/00c19060.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c18b84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c18/00c18b84.md) [`00c1a054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1a/00c1a054.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 98.09% / 新版 98.09%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c19ddc",
      "incomplete_value": true,
      "site": "00c19ddc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c18de8",
      "incomplete_value": true,
      "site": "00c18de8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca0:8"
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
      "definition_site": "00c19df8",
      "incomplete_value": true,
      "site": "00c19df8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c18e04",
      "incomplete_value": true,
      "site": "00c18e04",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c19e00",
      "incomplete_value": true,
      "site": "00c19e04",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c18e0c",
      "incomplete_value": true,
      "site": "00c18e10",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "00c19dc4",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ],
    [
      "00c19ddc",
      "DATA",
      [
        "storage",
        "00c17b90",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c19df0",
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
      "00c19dc4",
      "READ",
      [
        "storage",
        "00c9cc70",
        null,
        "pointer"
      ]
    ],
    [
      "00c19ddc",
      "DATA",
      [
        "storage",
        "00c18b84",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c19df0",
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
- 00c18e38 ["INT_ADD", "register:40f0:8", ["const:c18e38:8", "const:4:8"]]
- 00c18e38 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c19e2c ["INT_ADD", "register:40f0:8", ["const:c19e2c:8", "const:4:8"]]
+ 00c19e2c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c18dc8 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c19dbc ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c18dd0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ca0:8"]]
- 00c18dd0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c19dc4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c70:8"]]
+ 00c19dc4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6a3edbd3ccfda3ae3a083db3da5b2fee"></a>

### [`00c196e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c19/00c196e8.md) → [`00c1a6dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1a/00c1a6dc.md) _ZNKSt6__ndk19money_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_getES4_S4_bRNS_8ios_baseERjRe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c17b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17b90.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 0件  · 呼出先 14件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c18b84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c18/00c18b84.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 95.94% / 新版 95.94%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 2件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c1a724",
      "incomplete_value": true,
      "site": "00c1a724",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c19730",
      "incomplete_value": true,
      "site": "00c19730",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca0:8"
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
      "definition_site": "00c1a738",
      "incomplete_value": true,
      "site": "00c1a740",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c19744",
      "incomplete_value": true,
      "site": "00c1974c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
      "definition_site": "00c1a7e4",
      "incomplete_value": true,
      "site": "00c1a7f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d7f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c197f0",
      "incomplete_value": true,
      "site": "00c197fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d3f:8"
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
      "00c1a70c",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ],
    [
      "00c1a724",
      "DATA",
      [
        "storage",
        "00c17b90",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c1a738",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c1a70c",
      "READ",
      [
        "storage",
        "00c9cc70",
        null,
        "pointer"
      ]
    ],
    [
      "00c1a724",
      "DATA",
      [
        "storage",
        "00c18b84",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c1a738",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c19780 ["INT_ADD", "register:40f0:8", ["const:c19780:8", "const:4:8"]]
- 00c19780 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c1a774 ["INT_ADD", "register:40f0:8", ["const:c1a774:8", "const:4:8"]]
+ 00c1a774 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c198b4 ["INT_ADD", "register:40f0:8", ["const:c198b4:8", "const:4:8"]]
- 00c198b4 ["CALL", null, ["callee:00c5f740:8"]]
+ 00c1a8a8 ["INT_ADD", "register:40f0:8", ["const:c1a8a8:8", "const:4:8"]]
+ 00c1a8a8 ["CALL", null, ["callee:00c5f740:8"]]
- 00c199c8 ["INT_ADD", "register:40f0:8", ["const:c199c8:8", "const:4:8"]]
- 00c199c8 ["CALL", null, ["callee:00c5f050:8"]]
+ 00c1a9bc ["INT_ADD", "register:40f0:8", ["const:c1a9bc:8", "const:4:8"]]
+ 00c1a9bc ["CALL", null, ["callee:00c5f050:8"]]
~~~


<a id="compare-3abadbfcbfc87578dc4e35d1b09f6738"></a>

### [`00c19a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c19/00c19a30.md) → [`00c1aa24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1a/00c1aa24.md) _ZNSt6__ndk19money_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE8__do_getERS4_S4_bRKNS_6localeEjRjRbRKNS_5ctypeIwEERNS_10unique_ptr

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e790.md) · 呼出先 11件 [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00c17b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17b90.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)
- 新版 呼出元 1件 [`00c5f760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f760.md) · 呼出先 11件 [`00440f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440f9c.md) [`00c18b84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c18/00c18b84.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5b0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0c0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.97% / 新版 98.97%

優先判定に残った影響 `branch_value` 2件, `store_value` 2件

アドレスに依存する影響 `branch_value` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c1abb4",
      "incomplete_value": true,
      "site": "00c1abbc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c19bc0",
      "incomplete_value": true,
      "site": "00c19bc8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca0:8"
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
      "definition_site": "00c1ae78",
      "incomplete_value": true,
      "site": "00c1ae80",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c19e84",
      "incomplete_value": true,
      "site": "00c19e8c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:df8:8"
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
      "definition_site": "00c1aecc",
      "incomplete_value": true,
      "site": "00c1aed0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c19ed8",
      "incomplete_value": true,
      "site": "00c19edc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:df8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 55,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c1abb4",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ],
    [
      "00c1abbc",
      "DATA",
      [
        "storage",
        "00c17b90",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c1adc0",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c1abb4",
      "READ",
      [
        "storage",
        "00c9cc70",
        null,
        "pointer"
      ]
    ],
    [
      "00c1abbc",
      "DATA",
      [
        "storage",
        "00c18b84",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c1adc0",
      "READ",
      [
        "storage",
        "00c9cc70",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c19ab8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c19ab8 ["INT_ADD", "register:40f0:8", ["const:c19ab8:8", "const:4:8"]]
- 00c19ab8 ["CALLIND", null, ["register:0:8"]]
+ 00c1aaac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c1aaac ["INT_ADD", "register:40f0:8", ["const:c1aaac:8", "const:4:8"]]
+ 00c1aaac ["CALLIND", null, ["register:0:8"]]
- 00c19af0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c19af0 ["INT_ADD", "register:40f0:8", ["const:c19af0:8", "const:4:8"]]
- 00c19af0 ["CALLIND", null, ["register:0:8"]]
+ 00c1aae4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c1aae4 ["INT_ADD", "register:40f0:8", ["const:c1aae4:8", "const:4:8"]]
+ 00c1aae4 ["CALLIND", null, ["register:0:8"]]
- 00c19b6c ["INT_ADD", "register:40f0:8", ["const:c19b6c:8", "const:4:8"]]
- 00c19b6c ["CALL", null, ["callee:00c5f770:8"]]
+ 00c1ab60 ["INT_ADD", "register:40f0:8", ["const:c1ab60:8", "const:4:8"]]
+ 00c1ab60 ["CALL", null, ["callee:00c5f770:8"]]
~~~


<a id="compare-095d1c70fd96b7aa3bd6796ea1336454"></a>

### [`00c1b5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1b5d0.md) → [`00c1c5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1c/00c1c5c4.md) _ZNKSt6__ndk19money_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_putES4_bRNS_8ios_baseEce

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 19件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 0件  · 呼出先 19件 [`004599c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/004599c8.md) [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c1ca70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1c/00c1ca70.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value

命令の説明率　旧版 95.14% / 新版 95.14%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c1c69c",
      "incomplete_value": true,
      "site": "00c1c6a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c1b6a8",
      "incomplete_value": true,
      "site": "00c1b6b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c1c964",
      "incomplete_value": true,
      "site": "00c1c964",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1b970",
      "incomplete_value": true,
      "site": "00c1b970",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 37,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c1c6ac",
      "incomplete_value": true,
      "site": "00c1c6b0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c1b6b8",
      "incomplete_value": true,
      "site": "00c1b6bc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c1c5f8",
      "PARAM",
      [
        "storage",
        "002b1754",
        null,
        "string"
      ]
    ],
    [
      "00c1c62c",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1c634",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1c5f8",
      "PARAM",
      [
        "storage",
        "002b182b",
        null,
        "string"
      ]
    ],
    [
      "00c1c62c",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1c634",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1b6e4 ["INT_ADD", "register:40f0:8", ["const:c1b6e4:8", "const:4:8"]]
- 00c1b6e4 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c1c6d8 ["INT_ADD", "register:40f0:8", ["const:c1c6d8:8", "const:4:8"]]
+ 00c1c6d8 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c1b954 ["INT_ADD", "register:40f0:8", ["const:c1b954:8", "const:4:8"]]
- 00c1b954 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c1c948 ["INT_ADD", "register:40f0:8", ["const:c1c948:8", "const:4:8"]]
+ 00c1c948 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c1b96c ["INT_ADD", "register:40f0:8", ["const:c1b96c:8", "const:4:8"]]
- 00c1b96c ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c1c960 ["INT_ADD", "register:40f0:8", ["const:c1c960:8", "const:4:8"]]
+ 00c1c960 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-c151fc392043e374ac6b129c8e545279"></a>

### [`00c1c1c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1c/00c1c1c8.md) → [`00c1d1bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1d/00c1d1bc.md) _ZNKSt6__ndk19money_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_putES4_bRNS_8ios_baseEcRKNS_12basic_stringIcS3_NS_9allocatorIc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 0件  · 呼出先 12件 [`004599c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/004599c8.md) [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 99.47% / 新版 99.47%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c1d20c",
      "incomplete_value": true,
      "site": "00c1d20c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c1c218",
      "incomplete_value": true,
      "site": "00c1c218",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c1d214",
      "incomplete_value": true,
      "site": "00c1d218",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c1c220",
      "incomplete_value": true,
      "site": "00c1c224",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c1d238",
      "incomplete_value": true,
      "site": "00c1d240",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1c244",
      "incomplete_value": true,
      "site": "00c1c24c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d00:8"
              ]
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
      "00c1d204",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c1d20c",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c1d210",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1d204",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c1d20c",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c1d210",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1c24c ["INT_ADD", "register:40f0:8", ["const:c1c24c:8", "const:4:8"]]
- 00c1c24c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c1d240 ["INT_ADD", "register:40f0:8", ["const:c1d240:8", "const:4:8"]]
+ 00c1d240 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c1c208 ["INT_ADD", "register:40f0:8", ["const:c1c208:8", "const:4:8"]]
- 00c1c208 ["CALL", null, ["callee:00c59310:8"]]
+ 00c1d1fc ["INT_ADD", "register:40f0:8", ["const:c1d1fc:8", "const:4:8"]]
+ 00c1d1fc ["CALL", null, ["callee:00c59310:8"]]
- 00c1c20c ["COPY", "register:40b8:8", ["const:c9a000:8"]]
+ 00c1d200 ["COPY", "register:40b8:8", ["const:c9b000:8"]]
~~~


<a id="compare-793270b0b78ed6f5d3f312a62ffb2d25"></a>

### [`00c1c54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1c/00c1c54c.md) → [`00c1d540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1d/00c1d540.md) _ZNKSt6__ndk19money_putIwNS_19ostreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_putES4_bRNS_8ios_baseEwe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 19件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 0件  · 呼出先 19件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c12974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12974.md) [`00c1ca70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1c/00c1ca70.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value

命令の説明率　旧版 95.20% / 新版 95.20%

優先判定に残った影響 `call_argument_candidate` 8件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c1d618",
      "incomplete_value": true,
      "site": "00c1d620",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1c624",
      "incomplete_value": true,
      "site": "00c1c62c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
    "kind": "store_destination",
    "new": {
      "definition_site": "00c1d8ec",
      "incomplete_value": true,
      "site": "00c1d8ec",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1c8f8",
      "incomplete_value": true,
      "site": "00c1c8f8",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 37,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c1d628",
      "incomplete_value": true,
      "site": "00c1d62c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c1c634",
      "incomplete_value": true,
      "site": "00c1c638",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c1d574",
      "PARAM",
      [
        "storage",
        "002b1754",
        null,
        "string"
      ]
    ],
    [
      "00c1d5a8",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1d5b0",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1d574",
      "PARAM",
      [
        "storage",
        "002b182b",
        null,
        "string"
      ]
    ],
    [
      "00c1d5a8",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1d5b0",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1c59c ["INT_ADD", "register:40f0:8", ["const:c1c59c:8", "const:4:8"]]
- 00c1c59c ["CALL", null, ["callee:00c5f1a0:8"]]
+ 00c1d590 ["INT_ADD", "register:40f0:8", ["const:c1d590:8", "const:4:8"]]
+ 00c1d590 ["CALL", null, ["callee:00c5f1a0:8"]]
- 00c1c5d4 ["INT_ADD", "register:40f0:8", ["const:c1c5d4:8", "const:4:8"]]
- 00c1c5d4 ["CALL", null, ["callee:00c1ca70:8"]]
+ 00c1d5c8 ["INT_ADD", "register:40f0:8", ["const:c1d5c8:8", "const:4:8"]]
+ 00c1d5c8 ["CALL", null, ["callee:00c1ca70:8"]]
- 00c1c660 ["INT_ADD", "register:40f0:8", ["const:c1c660:8", "const:4:8"]]
- 00c1c660 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c1d654 ["INT_ADD", "register:40f0:8", ["const:c1d654:8", "const:4:8"]]
+ 00c1d654 ["CALL", null, ["callee:00c5ef80:8"]]
~~~


<a id="compare-bdb506b3bc52672cfc5c8380a1b81ccb"></a>

### [`00c1d0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d0b0.md) → [`00c1e0a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e0a4.md) _ZNKSt6__ndk19money_putIwNS_19ostreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_putES4_bRNS_8ios_baseEwRKNS_12basic_stringIwS3_NS_9allocatorIw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 0件  · 呼出先 12件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c12974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c12974.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.48% / 新版 99.48%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c1e0f4",
      "incomplete_value": true,
      "site": "00c1e0f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1d100",
      "incomplete_value": true,
      "site": "00c1d100",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
      "definition_site": "00c1e120",
      "incomplete_value": true,
      "site": "00c1e128",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1d12c",
      "incomplete_value": true,
      "site": "00c1d134",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c10:8"
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
      "definition_site": "00c1e11c",
      "incomplete_value": false,
      "site": "00c1e128",
      "value": [
        "leaf",
        "const:c37048:8"
      ]
    },
    "old": {
      "definition_site": "00c1d128",
      "incomplete_value": false,
      "site": "00c1d134",
      "value": [
        "leaf",
        "const:c36054:8"
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
      "00c1e0ec",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c1e0f4",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c1e0f8",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1e0ec",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c1e0f4",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c1e0f8",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1d134 ["INT_ADD", "register:40f0:8", ["const:c1d134:8", "const:4:8"]]
- 00c1d134 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c1e128 ["INT_ADD", "register:40f0:8", ["const:c1e128:8", "const:4:8"]]
+ 00c1e128 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c1d0f0 ["INT_ADD", "register:40f0:8", ["const:c1d0f0:8", "const:4:8"]]
- 00c1d0f0 ["CALL", null, ["callee:00c59310:8"]]
+ 00c1e0e4 ["INT_ADD", "register:40f0:8", ["const:c1e0e4:8", "const:4:8"]]
+ 00c1e0e4 ["CALL", null, ["callee:00c59310:8"]]
- 00c1d0f4 ["COPY", "register:40b8:8", ["const:c9b000:8"]]
+ 00c1e0e8 ["COPY", "register:40b8:8", ["const:c9c000:8"]]
~~~


<a id="compare-c3cb4e9a0bfa3a697517c5a49e29d142"></a>

### [`00c1d738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d738.md) → [`00c1e72c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e72c.md) FUN_00c1e72c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c1fbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fbe0.md) · 呼出先 12件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c20bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20bd4.md) · 呼出先 12件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md)

変更の種類 branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 35.74% / 新版 35.74%

優先判定に残った影響 `call_argument_candidate` 20件, `store_condition` 6件, `store_value` 1件, `unresolved_branch_alignment` 128件, `unresolved_call_alignment` 103件, `unresolved_store_alignment` 155件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 23件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c1e768",
      "incomplete_value": false,
      "site": "00c1e768",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c94000:8"
          ],
          [
            "leaf",
            "const:760:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1d774",
      "incomplete_value": false,
      "site": "00c1d774",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c93000:8"
          ],
          [
            "leaf",
            "const:790:8"
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
      "definition_site": "00c1ec34",
      "incomplete_value": true,
      "site": "00c1ec38",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1dc40",
      "incomplete_value": true,
      "site": "00c1dc44",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 68,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c1f07c",
      "incomplete_value": true,
      "site": "00c1f080",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1e088",
      "incomplete_value": true,
      "site": "00c1e08c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 101,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c1e768",
      "DATA",
      [
        "storage",
        "00c93790",
        null,
        "undefined *"
      ]
    ],
    [
      "00c1e7d8",
      "READ",
      [
        "storage",
        "00c9bcc8",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00c1d7ec",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c1e768",
      "DATA",
      [
        "storage",
        "00c94760",
        null,
        "undefined *"
      ]
    ],
    [
      "00c1e7d8",
      "READ",
      [
        "storage",
        "00c9cc98",
        null,
        "pointer"
      ]
    ],
    [
      "00c1e7e0",
      "READ",
      [
        "storage",
        "00c9c418",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1d844 ["INT_ADD", "register:40f0:8", ["const:c1d844:8", "const:4:8"]]
- 00c1d844 ["CALL", null, ["callee:00c54d60:8"]]
+ 00c1ead0 ["INT_ADD", "register:40f0:8", ["const:c1ead0:8", "const:4:8"]]
+ 00c1ead0 ["CALL", null, ["callee:00c54d60:8"]]
- 00c1d9a8 ["INT_ADD", "register:40f0:8", ["const:c1d9a8:8", "const:4:8"]]
- 00c1d9a8 ["CALL", null, ["callee:00c5f880:8"]]
+ 00c1e99c ["INT_ADD", "register:40f0:8", ["const:c1e99c:8", "const:4:8"]]
+ 00c1e99c ["CALL", null, ["callee:00c5f880:8"]]
- 00c1d9e8 ["INT_ADD", "register:40f0:8", ["const:c1d9e8:8", "const:4:8"]]
- 00c1d9e8 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c1ec6c ["INT_ADD", "register:40f0:8", ["const:c1ec6c:8", "const:4:8"]]
+ 00c1ec6c ["CALL", null, ["callee:00c5ef80:8"]]
~~~


<a id="compare-dc3d4d119c68436c80fca0fe8c7a584d"></a>

### [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) → [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) FUN_00c2051c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c24f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24f98.md) [`00c250d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c250d0.md) · 呼出先 43件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c1d738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d738.md) [`00c1fc6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fc6c.md) [`00c1fd98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fd98.md) [`00c1fec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fec4.md)
- 新版 呼出元 2件 [`00c25f8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25f8c.md) [`00c260c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c260c4.md) · 呼出先 43件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c1e72c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e72c.md) [`00c20c60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20c60.md) [`00c20d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20d8c.md) [`00c20eb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20eb8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 87.68% / 新版 87.68%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件, `store_value` 10件

アドレスに依存する影響 `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2054c",
      "incomplete_value": false,
      "site": "00c2054c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c94000:8"
          ],
          [
            "leaf",
            "const:760:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1f558",
      "incomplete_value": false,
      "site": "00c1f558",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c93000:8"
          ],
          [
            "leaf",
            "const:790:8"
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
      "definition_site": "00c206f8",
      "incomplete_value": true,
      "site": "00c206f8",
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
      "definition_site": "00c1f704",
      "incomplete_value": true,
      "site": "00c1f704",
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
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c20734",
      "incomplete_value": true,
      "site": "00c20738",
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
      "definition_site": "00c1f740",
      "incomplete_value": true,
      "site": "00c1f744",
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
      "00c2054c",
      "DATA",
      [
        "storage",
        "00c93790",
        null,
        "undefined *"
      ]
    ],
    [
      "00c205dc",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c205e4",
      "READ",
      [
        "storage",
        "01127ee0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2054c",
      "DATA",
      [
        "storage",
        "00c94760",
        null,
        "undefined *"
      ]
    ],
    [
      "00c205dc",
      "READ",
      [
        "storage",
        "01128ea8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c205e4",
      "READ",
      [
        "storage",
        "01128ea0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1fa84 ["INT_ADD", "register:40f0:8", ["const:c1fa84:8", "const:4:8"]]
- 00c1fa84 ["CALL", null, ["callee:00c1e72c:8"]]
+ 00c20a78 ["INT_ADD", "register:40f0:8", ["const:c20a78:8", "const:4:8"]]
+ 00c20a78 ["CALL", null, ["callee:00c1e72c:8"]]
- 00c1fa90 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:ee0:8"]]
- 00c1fa90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
+ 00c20a84 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:ea0:8"]]
+ 00c20a84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00c1fa94 ["INT_ADD", "register:40f0:8", ["const:c1fa94:8", "const:4:8"]]
- 00c1fa94 ["CALL", null, ["callee:00c58f10:8"]]
+ 00c20a88 ["INT_ADD", "register:40f0:8", ["const:c20a88:8", "const:4:8"]]
+ 00c20a88 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-38bd7881b92b68971da6d18ffc41d28b"></a>

### [`00c1fbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fbe0.md) → [`00c20bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20bd4.md) _ZNSt6__ndk16locale7classicEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e990.md) · 呼出先 3件 [`00c1d738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d738.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c5f960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f960.md) · 呼出先 3件 [`00c1e72c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e72c.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 68.97% / 新版 68.97%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c20c3c",
      "incomplete_value": true,
      "site": "00c20c3c",
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
            "const:ea0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1fc48",
      "incomplete_value": true,
      "site": "00c1fc48",
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
            "const:ee0:8"
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
      "definition_site": "00c20c10",
      "incomplete_value": false,
      "site": "00c20c14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:ea8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1fc1c",
      "incomplete_value": false,
      "site": "00c1fc20",
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
      "definition_site": "00c20c28",
      "incomplete_value": false,
      "site": "00c20c2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1128000:8"
          ],
          [
            "leaf",
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1fc34",
      "incomplete_value": false,
      "site": "00c1fc38",
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
            "const:da8:8"
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
      "00c20bec",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c20bf8",
      "DATA",
      [
        "storage",
        "01127ee0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c20c10",
      "PARAM",
      [
        "storage",
        "01127ee8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c20bec",
      "READ",
      [
        "storage",
        "01128ea8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c20bf8",
      "DATA",
      [
        "storage",
        "01128ea0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c20c10",
      "PARAM",
      [
        "storage",
        "01128ea8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1fc20 ["INT_ADD", "register:40f0:8", ["const:c1fc20:8", "const:4:8"]]
- 00c1fc20 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c20c14 ["INT_ADD", "register:40f0:8", ["const:c20c14:8", "const:4:8"]]
+ 00c20c14 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c1fc38 ["INT_ADD", "register:40f0:8", ["const:c1fc38:8", "const:4:8"]]
- 00c1fc38 ["CALL", null, ["callee:00c1e72c:8"]]
+ 00c20c2c ["INT_ADD", "register:40f0:8", ["const:c20c2c:8", "const:4:8"]]
+ 00c20c2c ["CALL", null, ["callee:00c1e72c:8"]]
- 00c1fc48 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ee0:8"]]
- 00c1fc48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
+ 00c20c3c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 00c20c3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-4cf5ca665d80b09afa4b90cb0b00469f"></a>

### [`00c1fc6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fc6c.md) → [`00c20c60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20c60.md) FUN_00c20c60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c20c84",
      "incomplete_value": true,
      "site": "00c20c88",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:418:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1fc90",
      "incomplete_value": true,
      "site": "00c1fc94",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:448:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c20c90",
      "incomplete_value": true,
      "site": "00c20c94",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c1fc9c",
      "incomplete_value": true,
      "site": "00c1fca0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c20cb8",
      "incomplete_value": true,
      "site": "00c20cbc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:418:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1fcc4",
      "incomplete_value": true,
      "site": "00c1fcc8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:448:8"
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
      "00c20c84",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ],
    [
      "00c20c88",
      "DATA",
      [
        "storage",
        "01127c58",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c20c8c",
      "READ",
      [
        "storage",
        "01127c58",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c20c84",
      "READ",
      [
        "storage",
        "00c9c418",
        null,
        "pointer"
      ]
    ],
    [
      "00c20c88",
      "DATA",
      [
        "storage",
        "01128c18",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c20c8c",
      "READ",
      [
        "storage",
        "01128c18",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1fcc8 ["INT_ADD", "register:40f0:8", ["const:c1fcc8:8", "const:4:8"]]
- 00c1fcc8 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c20cbc ["INT_ADD", "register:40f0:8", ["const:c20cbc:8", "const:4:8"]]
+ 00c20cbc ["CALL", null, ["callee:00c5ef80:8"]]
- 00c1fc84 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c20c78 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c1fc90 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:448:8"]]
- 00c1fc90 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20c84 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:418:8"]]
+ 00c20c84 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d612317b548794dabc84b62ee35f519b"></a>

### [`00c1fd98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fd98.md) → [`00c20d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20d8c.md) FUN_00c20d8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c20db0",
      "incomplete_value": true,
      "site": "00c20db4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1fdbc",
      "incomplete_value": true,
      "site": "00c1fdc0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd8:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c20dbc",
      "incomplete_value": true,
      "site": "00c20dc0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c1fdc8",
      "incomplete_value": true,
      "site": "00c1fdcc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c20de4",
      "incomplete_value": true,
      "site": "00c20de8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c1fdf0",
      "incomplete_value": true,
      "site": "00c1fdf4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd8:8"
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
      "00c20db0",
      "READ",
      [
        "storage",
        "00c9bcd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c20db4",
      "DATA",
      [
        "storage",
        "01127c68",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c20db8",
      "READ",
      [
        "storage",
        "01127c68",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c20db0",
      "READ",
      [
        "storage",
        "00c9cca8",
        null,
        "pointer"
      ]
    ],
    [
      "00c20db4",
      "DATA",
      [
        "storage",
        "01128c28",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c20db8",
      "READ",
      [
        "storage",
        "01128c28",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1fdf4 ["INT_ADD", "register:40f0:8", ["const:c1fdf4:8", "const:4:8"]]
- 00c1fdf4 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c20de8 ["INT_ADD", "register:40f0:8", ["const:c20de8:8", "const:4:8"]]
+ 00c20de8 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c1fdb0 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c20da4 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c1fdbc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd8:8"]]
- 00c1fdbc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20db0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca8:8"]]
+ 00c20db0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-514c6d12a764de0a1b5ff74eaa12c563"></a>

### [`00c1fec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fec4.md) → [`00c20eb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20eb8.md) FUN_00c20eb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c20edc",
      "incomplete_value": true,
      "site": "00c20ee0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c1fee8",
      "incomplete_value": true,
      "site": "00c1feec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c20ee8",
      "incomplete_value": true,
      "site": "00c20eec",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c1fef4",
      "incomplete_value": true,
      "site": "00c1fef8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c20f10",
      "incomplete_value": true,
      "site": "00c20f14",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c1ff1c",
      "incomplete_value": true,
      "site": "00c1ff20",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c20edc",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c20ee0",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c20ee4",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c20edc",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c20ee0",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c20ee4",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1ff20 ["INT_ADD", "register:40f0:8", ["const:c1ff20:8", "const:4:8"]]
- 00c1ff20 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c20f14 ["INT_ADD", "register:40f0:8", ["const:c20f14:8", "const:4:8"]]
+ 00c20f14 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c1fedc ["COPY", "register:40a0:8", ["const:c9a000:8"]]
+ 00c20ed0 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
- 00c1fee8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
- 00c1fee8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20edc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
+ 00c20edc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3ec025c0c6e2cb1d7816a805c25a2592"></a>

### [`00c1fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fff0.md) → [`00c20fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20fe4.md) FUN_00c20fe4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c21008",
      "incomplete_value": true,
      "site": "00c2100c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20014",
      "incomplete_value": true,
      "site": "00c20018",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c21014",
      "incomplete_value": true,
      "site": "00c21018",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c20020",
      "incomplete_value": true,
      "site": "00c20024",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2103c",
      "incomplete_value": true,
      "site": "00c21040",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20048",
      "incomplete_value": true,
      "site": "00c2004c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c10:8"
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
      "00c21008",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c2100c",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c21010",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c21008",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2100c",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c21010",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2004c ["INT_ADD", "register:40f0:8", ["const:c2004c:8", "const:4:8"]]
- 00c2004c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c21040 ["INT_ADD", "register:40f0:8", ["const:c21040:8", "const:4:8"]]
+ 00c21040 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c20008 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c20ffc ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c20014 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c10:8"]]
- 00c20014 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21008 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be0:8"]]
+ 00c21008 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2f34952ca79f316767b9921e3b87ce5d"></a>

### [`00c2011c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c2011c.md) → [`00c21110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c21110.md) FUN_00c21110

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c21134",
      "incomplete_value": true,
      "site": "00c21138",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:958:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20140",
      "incomplete_value": true,
      "site": "00c20144",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:988:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c21140",
      "incomplete_value": true,
      "site": "00c21144",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c2014c",
      "incomplete_value": true,
      "site": "00c20150",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c21168",
      "incomplete_value": true,
      "site": "00c2116c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:958:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20174",
      "incomplete_value": true,
      "site": "00c20178",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:988:8"
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
      "00c21134",
      "READ",
      [
        "storage",
        "00c9b988",
        null,
        "pointer"
      ]
    ],
    [
      "00c21138",
      "DATA",
      [
        "storage",
        "01127f28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c2113c",
      "READ",
      [
        "storage",
        "01127f28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c21134",
      "READ",
      [
        "storage",
        "00c9c958",
        null,
        "pointer"
      ]
    ],
    [
      "00c21138",
      "DATA",
      [
        "storage",
        "01128ee8",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c2113c",
      "READ",
      [
        "storage",
        "01128ee8",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20178 ["INT_ADD", "register:40f0:8", ["const:c20178:8", "const:4:8"]]
- 00c20178 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c2116c ["INT_ADD", "register:40f0:8", ["const:c2116c:8", "const:4:8"]]
+ 00c2116c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c20134 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c21128 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c20140 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:988:8"]]
- 00c20140 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21134 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:958:8"]]
+ 00c21134 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-056fcea796a54832b734cd4daea70faf"></a>

### [`00c20248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20248.md) → [`00c2123c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c2123c.md) FUN_00c2123c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c21260",
      "incomplete_value": true,
      "site": "00c21264",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2026c",
      "incomplete_value": true,
      "site": "00c20270",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c78:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c2126c",
      "incomplete_value": true,
      "site": "00c21270",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c20278",
      "incomplete_value": true,
      "site": "00c2027c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c21294",
      "incomplete_value": true,
      "site": "00c21298",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c202a0",
      "incomplete_value": true,
      "site": "00c202a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c78:8"
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
      "00c21260",
      "READ",
      [
        "storage",
        "00c9bc78",
        null,
        "pointer"
      ]
    ],
    [
      "00c21264",
      "DATA",
      [
        "storage",
        "01127f38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c21268",
      "READ",
      [
        "storage",
        "01127f38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c21260",
      "READ",
      [
        "storage",
        "00c9cc48",
        null,
        "pointer"
      ]
    ],
    [
      "00c21264",
      "DATA",
      [
        "storage",
        "01128ef8",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c21268",
      "READ",
      [
        "storage",
        "01128ef8",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c202a4 ["INT_ADD", "register:40f0:8", ["const:c202a4:8", "const:4:8"]]
- 00c202a4 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c21298 ["INT_ADD", "register:40f0:8", ["const:c21298:8", "const:4:8"]]
+ 00c21298 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c20260 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c21254 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c2026c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
- 00c2026c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21260 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c48:8"]]
+ 00c21260 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-158f1cd0ff233d84195b4c475aa331a0"></a>

### [`00c20374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20374.md) → [`00c21368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c21368.md) FUN_00c21368

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2138c",
      "incomplete_value": true,
      "site": "00c21390",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20398",
      "incomplete_value": true,
      "site": "00c2039c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c21398",
      "incomplete_value": true,
      "site": "00c2139c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c203a4",
      "incomplete_value": true,
      "site": "00c203a8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c213c0",
      "incomplete_value": true,
      "site": "00c213c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c203cc",
      "incomplete_value": true,
      "site": "00c203d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c2138c",
      "READ",
      [
        "storage",
        "00c9bcf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c21390",
      "DATA",
      [
        "storage",
        "01127f48",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c21394",
      "READ",
      [
        "storage",
        "01127f48",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2138c",
      "READ",
      [
        "storage",
        "00c9ccc8",
        null,
        "pointer"
      ]
    ],
    [
      "00c21390",
      "DATA",
      [
        "storage",
        "01128f08",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c21394",
      "READ",
      [
        "storage",
        "01128f08",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c203d0 ["INT_ADD", "register:40f0:8", ["const:c203d0:8", "const:4:8"]]
- 00c203d0 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c213c4 ["INT_ADD", "register:40f0:8", ["const:c213c4:8", "const:4:8"]]
+ 00c213c4 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c2038c ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c21380 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c20398 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf8:8"]]
- 00c20398 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2138c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cc8:8"]]
+ 00c2138c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-bbf12ae83f96f67bdd5dc13a816cd295"></a>

### [`00c204a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c204a0.md) → [`00c21494`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c21494.md) FUN_00c21494

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c214b8",
      "incomplete_value": true,
      "site": "00c214bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c204c4",
      "incomplete_value": true,
      "site": "00c204c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d08:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c214c4",
      "incomplete_value": true,
      "site": "00c214c8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c204d0",
      "incomplete_value": true,
      "site": "00c204d4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c214ec",
      "incomplete_value": true,
      "site": "00c214f0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:cd8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c204f8",
      "incomplete_value": true,
      "site": "00c204fc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d08:8"
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
      "00c214b8",
      "READ",
      [
        "storage",
        "00c9bd08",
        null,
        "pointer"
      ]
    ],
    [
      "00c214bc",
      "DATA",
      [
        "storage",
        "01127f68",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c214c0",
      "READ",
      [
        "storage",
        "01127f68",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c214b8",
      "READ",
      [
        "storage",
        "00c9ccd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c214bc",
      "DATA",
      [
        "storage",
        "01128f28",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c214c0",
      "READ",
      [
        "storage",
        "01128f28",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c204fc ["INT_ADD", "register:40f0:8", ["const:c204fc:8", "const:4:8"]]
- 00c204fc ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c214f0 ["INT_ADD", "register:40f0:8", ["const:c214f0:8", "const:4:8"]]
+ 00c214f0 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c204b8 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c214ac ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c204c4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d08:8"]]
- 00c204c4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c214b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd8:8"]]
+ 00c214b8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2ccace24229b3911e2b8e88b925680d3"></a>

### [`00c205cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c205cc.md) → [`00c215c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c215c0.md) FUN_00c215c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c215e4",
      "incomplete_value": true,
      "site": "00c215e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ce8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c205f0",
      "incomplete_value": true,
      "site": "00c205f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d18:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c215f0",
      "incomplete_value": true,
      "site": "00c215f4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c205fc",
      "incomplete_value": true,
      "site": "00c20600",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c21618",
      "incomplete_value": true,
      "site": "00c2161c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ce8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20624",
      "incomplete_value": true,
      "site": "00c20628",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d18:8"
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
      "00c215e4",
      "READ",
      [
        "storage",
        "00c9bd18",
        null,
        "pointer"
      ]
    ],
    [
      "00c215e8",
      "DATA",
      [
        "storage",
        "01127f58",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c215ec",
      "READ",
      [
        "storage",
        "01127f58",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c215e4",
      "READ",
      [
        "storage",
        "00c9cce8",
        null,
        "pointer"
      ]
    ],
    [
      "00c215e8",
      "DATA",
      [
        "storage",
        "01128f18",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c215ec",
      "READ",
      [
        "storage",
        "01128f18",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20628 ["INT_ADD", "register:40f0:8", ["const:c20628:8", "const:4:8"]]
- 00c20628 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c2161c ["INT_ADD", "register:40f0:8", ["const:c2161c:8", "const:4:8"]]
+ 00c2161c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c205e4 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c215d8 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c205f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d18:8"]]
- 00c205f0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c215e4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ce8:8"]]
+ 00c215e4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5f6c2f90b98b5237c18c460ac6b31625"></a>

### [`00c206f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c206f8.md) → [`00c216ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c216ec.md) FUN_00c216ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c21710",
      "incomplete_value": true,
      "site": "00c21714",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cf8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2071c",
      "incomplete_value": true,
      "site": "00c20720",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d28:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c2171c",
      "incomplete_value": true,
      "site": "00c21720",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c20728",
      "incomplete_value": true,
      "site": "00c2072c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c21744",
      "incomplete_value": true,
      "site": "00c21748",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cf8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20750",
      "incomplete_value": true,
      "site": "00c20754",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d28:8"
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
      "00c21710",
      "READ",
      [
        "storage",
        "00c9bd28",
        null,
        "pointer"
      ]
    ],
    [
      "00c21714",
      "DATA",
      [
        "storage",
        "01127f78",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c21718",
      "READ",
      [
        "storage",
        "01127f78",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c21710",
      "READ",
      [
        "storage",
        "00c9ccf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c21714",
      "DATA",
      [
        "storage",
        "01128f38",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c21718",
      "READ",
      [
        "storage",
        "01128f38",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20754 ["INT_ADD", "register:40f0:8", ["const:c20754:8", "const:4:8"]]
- 00c20754 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c21748 ["INT_ADD", "register:40f0:8", ["const:c21748:8", "const:4:8"]]
+ 00c21748 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c20710 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c21704 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c2071c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d28:8"]]
- 00c2071c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21710 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf8:8"]]
+ 00c21710 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7f69a114881d3066dfea1360aef52558"></a>

### [`00c20824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20824.md) → [`00c21818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c21818.md) FUN_00c21818

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2183c",
      "incomplete_value": true,
      "site": "00c21840",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20848",
      "incomplete_value": true,
      "site": "00c2084c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c21848",
      "incomplete_value": true,
      "site": "00c2184c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c20854",
      "incomplete_value": true,
      "site": "00c20858",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c21870",
      "incomplete_value": true,
      "site": "00c21874",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2087c",
      "incomplete_value": true,
      "site": "00c20880",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
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
      "00c2183c",
      "READ",
      [
        "storage",
        "00c9bc88",
        null,
        "pointer"
      ]
    ],
    [
      "00c21840",
      "DATA",
      [
        "storage",
        "01127f88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c21844",
      "READ",
      [
        "storage",
        "01127f88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2183c",
      "READ",
      [
        "storage",
        "00c9cc58",
        null,
        "pointer"
      ]
    ],
    [
      "00c21840",
      "DATA",
      [
        "storage",
        "01128f48",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c21844",
      "READ",
      [
        "storage",
        "01128f48",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20880 ["INT_ADD", "register:40f0:8", ["const:c20880:8", "const:4:8"]]
- 00c20880 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c21874 ["INT_ADD", "register:40f0:8", ["const:c21874:8", "const:4:8"]]
+ 00c21874 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c2083c ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c21830 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c20848 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
- 00c20848 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2183c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
+ 00c2183c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-87bc2378651a14a1720f265b2cd55881"></a>

### [`00c20950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20950.md) → [`00c21944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c21944.md) FUN_00c21944

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c21968",
      "incomplete_value": true,
      "site": "00c2196c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20974",
      "incomplete_value": true,
      "site": "00c20978",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c21974",
      "incomplete_value": true,
      "site": "00c21978",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c20980",
      "incomplete_value": true,
      "site": "00c20984",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2199c",
      "incomplete_value": true,
      "site": "00c219a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c209a8",
      "incomplete_value": true,
      "site": "00c209ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
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
      "00c21968",
      "READ",
      [
        "storage",
        "00c9bc98",
        null,
        "pointer"
      ]
    ],
    [
      "00c2196c",
      "DATA",
      [
        "storage",
        "01127f98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c21970",
      "READ",
      [
        "storage",
        "01127f98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c21968",
      "READ",
      [
        "storage",
        "00c9cc68",
        null,
        "pointer"
      ]
    ],
    [
      "00c2196c",
      "DATA",
      [
        "storage",
        "01128f58",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c21970",
      "READ",
      [
        "storage",
        "01128f58",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c209ac ["INT_ADD", "register:40f0:8", ["const:c209ac:8", "const:4:8"]]
- 00c209ac ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c219a0 ["INT_ADD", "register:40f0:8", ["const:c219a0:8", "const:4:8"]]
+ 00c219a0 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c20968 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c2195c ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c20974 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c98:8"]]
- 00c20974 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21968 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c68:8"]]
+ 00c21968 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-46829395642c969dc6c3612df351470f"></a>

### [`00c20a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20a7c.md) → [`00c21a70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c21a70.md) FUN_00c21a70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c21a94",
      "incomplete_value": true,
      "site": "00c21a98",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20aa0",
      "incomplete_value": true,
      "site": "00c20aa4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cb0:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c21aa0",
      "incomplete_value": true,
      "site": "00c21aa4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c20aac",
      "incomplete_value": true,
      "site": "00c20ab0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c21ac8",
      "incomplete_value": true,
      "site": "00c21acc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20ad4",
      "incomplete_value": true,
      "site": "00c20ad8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cb0:8"
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
      "00c21a94",
      "READ",
      [
        "storage",
        "00c9bcb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c21a98",
      "DATA",
      [
        "storage",
        "01127cf8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c21a9c",
      "READ",
      [
        "storage",
        "01127cf8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c21a94",
      "READ",
      [
        "storage",
        "00c9cc80",
        null,
        "pointer"
      ]
    ],
    [
      "00c21a98",
      "DATA",
      [
        "storage",
        "01128cb8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c21a9c",
      "READ",
      [
        "storage",
        "01128cb8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20ad8 ["INT_ADD", "register:40f0:8", ["const:c20ad8:8", "const:4:8"]]
- 00c20ad8 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c21acc ["INT_ADD", "register:40f0:8", ["const:c21acc:8", "const:4:8"]]
+ 00c21acc ["CALL", null, ["callee:00c5ef80:8"]]
- 00c20a94 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c21a88 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c20aa0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb0:8"]]
- 00c20aa0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21a94 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c80:8"]]
+ 00c21a94 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9f66608071ec8b8b92c2c5ca4ca33b03"></a>

### [`00c20ba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20ba8.md) → [`00c21b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c21b9c.md) FUN_00c21b9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 1件 [`00c5e9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9a0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 1件 [`00c5f970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f970.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c21bcc",
      "incomplete_value": true,
      "site": "00c21bcc",
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
      "definition_site": "00c20bd8",
      "incomplete_value": true,
      "site": "00c20bd8",
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c21bbc",
      "READ",
      [
        "storage",
        "00c9be68",
        null,
        "pointer"
      ]
    ],
    [
      "00c21bcc",
      "DATA",
      [
        "storage",
        "00c954d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c21bbc",
      "READ",
      [
        "storage",
        "00c9ce38",
        null,
        "pointer"
      ]
    ],
    [
      "00c21bcc",
      "DATA",
      [
        "storage",
        "00c964a0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20bbc ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c21bb0 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c20bc8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e68:8"]]
- 00c20bc8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21bbc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e38:8"]]
+ 00c21bbc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c20bcc ["COPY", "register:40a8:8", ["register:4000:8"]]
~~~


<a id="compare-bdc16f94c42d8c561cedfb55acd514f7"></a>

### [`00c20c8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20c8c.md) → [`00c21c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c21c80.md) FUN_00c21c80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c21ca4",
      "incomplete_value": true,
      "site": "00c21ca8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20cb0",
      "incomplete_value": true,
      "site": "00c20cb4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca8:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c21cb0",
      "incomplete_value": true,
      "site": "00c21cb4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c20cbc",
      "incomplete_value": true,
      "site": "00c20cc0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c21cd8",
      "incomplete_value": true,
      "site": "00c21cdc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20ce4",
      "incomplete_value": true,
      "site": "00c20ce8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca8:8"
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
      "00c21ca4",
      "READ",
      [
        "storage",
        "00c9bca8",
        null,
        "pointer"
      ]
    ],
    [
      "00c21ca8",
      "DATA",
      [
        "storage",
        "01127d08",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c21cac",
      "READ",
      [
        "storage",
        "01127d08",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c21ca4",
      "READ",
      [
        "storage",
        "00c9cc78",
        null,
        "pointer"
      ]
    ],
    [
      "00c21ca8",
      "DATA",
      [
        "storage",
        "01128cc8",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c21cac",
      "READ",
      [
        "storage",
        "01128cc8",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20ce8 ["INT_ADD", "register:40f0:8", ["const:c20ce8:8", "const:4:8"]]
- 00c20ce8 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c21cdc ["INT_ADD", "register:40f0:8", ["const:c21cdc:8", "const:4:8"]]
+ 00c21cdc ["CALL", null, ["callee:00c5ef80:8"]]
- 00c20ca4 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c21c98 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c20cb0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca8:8"]]
- 00c20cb0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21ca4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
+ 00c21ca4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2539d4db6849137bd9c470676b6f5cf5"></a>

### [`00c20db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20db8.md) → [`00c21dac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c21dac.md) FUN_00c21dac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 1件 [`00c5e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9b0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 1件 [`00c5f980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f980.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c21ddc",
      "incomplete_value": true,
      "site": "00c21ddc",
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
      "definition_site": "00c20de8",
      "incomplete_value": true,
      "site": "00c20de8",
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c21dcc",
      "READ",
      [
        "storage",
        "00c9be70",
        null,
        "pointer"
      ]
    ],
    [
      "00c21ddc",
      "DATA",
      [
        "storage",
        "00c95558",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c21dcc",
      "READ",
      [
        "storage",
        "00c9ce40",
        null,
        "pointer"
      ]
    ],
    [
      "00c21ddc",
      "DATA",
      [
        "storage",
        "00c96528",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20dcc ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c21dc0 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c20dd8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e70:8"]]
- 00c20dd8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21dcc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e40:8"]]
+ 00c21dcc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c20ddc ["COPY", "register:40a8:8", ["register:4000:8"]]
~~~


<a id="compare-a1e54bea4f9b2c8af06353fc1bc2ed0f"></a>

### [`00c20e9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20e9c.md) → [`00c21e90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c21e90.md) FUN_00c21e90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.65% / 新版 93.65%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c21eb4",
      "incomplete_value": true,
      "site": "00c21eb8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20ec0",
      "incomplete_value": true,
      "site": "00c20ec4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc0:8"
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
      "definition_site": "00c21ee8",
      "incomplete_value": true,
      "site": "00c21eec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c20ef4",
      "incomplete_value": true,
      "site": "00c20ef8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc0:8"
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
      "definition_site": "00c21edc",
      "incomplete_value": false,
      "site": "00c21eec",
      "value": [
        "leaf",
        "const:c37048:8"
      ]
    },
    "old": {
      "definition_site": "00c20ee8",
      "incomplete_value": false,
      "site": "00c20ef8",
      "value": [
        "leaf",
        "const:c36054:8"
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
      "00c21eb4",
      "READ",
      [
        "storage",
        "00c9bcc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c21eb8",
      "DATA",
      [
        "storage",
        "01127d18",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c21ebc",
      "READ",
      [
        "storage",
        "01127d18",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c21eb4",
      "READ",
      [
        "storage",
        "00c9cc90",
        null,
        "pointer"
      ]
    ],
    [
      "00c21eb8",
      "DATA",
      [
        "storage",
        "01128cd8",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c21ebc",
      "READ",
      [
        "storage",
        "01128cd8",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20ef8 ["INT_ADD", "register:40f0:8", ["const:c20ef8:8", "const:4:8"]]
- 00c20ef8 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c21eec ["INT_ADD", "register:40f0:8", ["const:c21eec:8", "const:4:8"]]
+ 00c21eec ["CALL", null, ["callee:00c5ef80:8"]]
- 00c20eb4 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c21ea8 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c20ec0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cc0:8"]]
- 00c20ec0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21eb4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c90:8"]]
+ 00c21eb4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-803a91c0c469a010c573799cc20e5c98"></a>

### [`00c20fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20fc8.md) → [`00c21fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c21/00c21fbc.md) FUN_00c21fbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 1件 [`00c5e9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9c0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 1件 [`00c5f990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f990.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c21fec",
      "incomplete_value": true,
      "site": "00c21fec",
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
      "definition_site": "00c20ff8",
      "incomplete_value": true,
      "site": "00c20ff8",
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c21fdc",
      "READ",
      [
        "storage",
        "00c9be78",
        null,
        "pointer"
      ]
    ],
    [
      "00c21fec",
      "DATA",
      [
        "storage",
        "00c955e0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c21fdc",
      "READ",
      [
        "storage",
        "00c9ce48",
        null,
        "pointer"
      ]
    ],
    [
      "00c21fec",
      "DATA",
      [
        "storage",
        "00c965b0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20fdc ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c21fd0 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c20fe8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e78:8"]]
- 00c20fe8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21fdc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e48:8"]]
+ 00c21fdc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c20fec ["COPY", "register:40a8:8", ["register:4000:8"]]
~~~


<a id="compare-591b3f041b52359ae333215aa53b9a1c"></a>

### [`00c210ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c210ac.md) → [`00c220a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c220a0.md) FUN_00c220a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c220c4",
      "incomplete_value": true,
      "site": "00c220c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c210d0",
      "incomplete_value": true,
      "site": "00c210d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cb8:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c220d0",
      "incomplete_value": true,
      "site": "00c220d4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c210dc",
      "incomplete_value": true,
      "site": "00c210e0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c220f8",
      "incomplete_value": true,
      "site": "00c220fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c21104",
      "incomplete_value": true,
      "site": "00c21108",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cb8:8"
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
      "00c220c4",
      "READ",
      [
        "storage",
        "00c9bcb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c220c8",
      "DATA",
      [
        "storage",
        "01127d28",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c220cc",
      "READ",
      [
        "storage",
        "01127d28",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c220c4",
      "READ",
      [
        "storage",
        "00c9cc88",
        null,
        "pointer"
      ]
    ],
    [
      "00c220c8",
      "DATA",
      [
        "storage",
        "01128ce8",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c220cc",
      "READ",
      [
        "storage",
        "01128ce8",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c21108 ["INT_ADD", "register:40f0:8", ["const:c21108:8", "const:4:8"]]
- 00c21108 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c220fc ["INT_ADD", "register:40f0:8", ["const:c220fc:8", "const:4:8"]]
+ 00c220fc ["CALL", null, ["callee:00c5ef80:8"]]
- 00c210c4 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c220b8 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c210d0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb8:8"]]
- 00c210d0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c220c4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
+ 00c220c4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ef0f1f2ca3156baec177538eaccb0dd2"></a>

### [`00c211d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c211d8.md) → [`00c221cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c221cc.md) FUN_00c221cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 1件 [`00c5e9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9d0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 1件 [`00c5f9a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f9a0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c221fc",
      "incomplete_value": true,
      "site": "00c221fc",
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
      "definition_site": "00c21208",
      "incomplete_value": true,
      "site": "00c21208",
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c221ec",
      "READ",
      [
        "storage",
        "00c9be80",
        null,
        "pointer"
      ]
    ],
    [
      "00c221fc",
      "DATA",
      [
        "storage",
        "00c95668",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c221ec",
      "READ",
      [
        "storage",
        "00c9ce50",
        null,
        "pointer"
      ]
    ],
    [
      "00c221fc",
      "DATA",
      [
        "storage",
        "00c96638",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c211ec ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c221e0 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c211f8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e80:8"]]
- 00c211f8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c221ec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e50:8"]]
+ 00c221ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c211fc ["COPY", "register:40a8:8", ["register:4000:8"]]
~~~


<a id="compare-56d63845136fa6b562840e2e737eb5dd"></a>

### [`00c212bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c212bc.md) → [`00c222b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c222b0.md) FUN_00c222b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c222d4",
      "incomplete_value": true,
      "site": "00c222d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:390:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c212e0",
      "incomplete_value": true,
      "site": "00c212e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3c0:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c222e0",
      "incomplete_value": true,
      "site": "00c222e4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c212ec",
      "incomplete_value": true,
      "site": "00c212f0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c22308",
      "incomplete_value": true,
      "site": "00c2230c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:390:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c21314",
      "incomplete_value": true,
      "site": "00c21318",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3c0:8"
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
      "00c222d4",
      "READ",
      [
        "storage",
        "00c9b3c0",
        null,
        "pointer"
      ]
    ],
    [
      "00c222d8",
      "DATA",
      [
        "storage",
        "01127cb8",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c222dc",
      "READ",
      [
        "storage",
        "01127cb8",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c222d4",
      "READ",
      [
        "storage",
        "00c9c390",
        null,
        "pointer"
      ]
    ],
    [
      "00c222d8",
      "DATA",
      [
        "storage",
        "01128c78",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c222dc",
      "READ",
      [
        "storage",
        "01128c78",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c21318 ["INT_ADD", "register:40f0:8", ["const:c21318:8", "const:4:8"]]
- 00c21318 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c2230c ["INT_ADD", "register:40f0:8", ["const:c2230c:8", "const:4:8"]]
+ 00c2230c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c212d4 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c222c8 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c212e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3c0:8"]]
- 00c212e0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c222d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:390:8"]]
+ 00c222d4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e3863a7ed2b26934476164a18c379cde"></a>

### [`00c213e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c213e8.md) → [`00c223dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c223dc.md) FUN_00c223dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.83% / 新版 96.83%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c22434",
      "incomplete_value": true,
      "site": "00c22438",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c21440",
      "incomplete_value": true,
      "site": "00c21444",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dc0:8"
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
      "definition_site": "00c22428",
      "incomplete_value": false,
      "site": "00c22438",
      "value": [
        "leaf",
        "const:c37048:8"
      ]
    },
    "old": {
      "definition_site": "00c21434",
      "incomplete_value": false,
      "site": "00c21444",
      "value": [
        "leaf",
        "const:c36054:8"
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
      "00c22400",
      "READ",
      [
        "storage",
        "00c9bdc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c22404",
      "DATA",
      [
        "storage",
        "01127cc8",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c22408",
      "READ",
      [
        "storage",
        "01127cc8",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c22400",
      "READ",
      [
        "storage",
        "00c9cd90",
        null,
        "pointer"
      ]
    ],
    [
      "00c22404",
      "DATA",
      [
        "storage",
        "01128c88",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c22408",
      "READ",
      [
        "storage",
        "01128c88",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c21444 ["INT_ADD", "register:40f0:8", ["const:c21444:8", "const:4:8"]]
- 00c21444 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c22438 ["INT_ADD", "register:40f0:8", ["const:c22438:8", "const:4:8"]]
+ 00c22438 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c21400 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c223f4 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c2140c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dc0:8"]]
- 00c2140c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c22400 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d90:8"]]
+ 00c22400 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-535872e24fe642dca95d656760bd9096"></a>

### [`00c21514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c21514.md) → [`00c22508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c22508.md) FUN_00c22508

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2252c",
      "incomplete_value": true,
      "site": "00c22530",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:398:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c21538",
      "incomplete_value": true,
      "site": "00c2153c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3c8:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c22538",
      "incomplete_value": true,
      "site": "00c2253c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c21544",
      "incomplete_value": true,
      "site": "00c21548",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c22560",
      "incomplete_value": true,
      "site": "00c22564",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:398:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2156c",
      "incomplete_value": true,
      "site": "00c21570",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3c8:8"
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
      "00c2252c",
      "READ",
      [
        "storage",
        "00c9b3c8",
        null,
        "pointer"
      ]
    ],
    [
      "00c22530",
      "DATA",
      [
        "storage",
        "01127cd8",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c22534",
      "READ",
      [
        "storage",
        "01127cd8",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2252c",
      "READ",
      [
        "storage",
        "00c9c398",
        null,
        "pointer"
      ]
    ],
    [
      "00c22530",
      "DATA",
      [
        "storage",
        "01128c98",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c22534",
      "READ",
      [
        "storage",
        "01128c98",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c21570 ["INT_ADD", "register:40f0:8", ["const:c21570:8", "const:4:8"]]
- 00c21570 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c22564 ["INT_ADD", "register:40f0:8", ["const:c22564:8", "const:4:8"]]
+ 00c22564 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c2152c ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c22520 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c21538 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3c8:8"]]
- 00c21538 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2252c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:398:8"]]
+ 00c2252c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4bb36fd6cc0bba975aabf354b16e54bb"></a>

### [`00c21640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c21640.md) → [`00c22634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c22634.md) FUN_00c22634

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c22658",
      "incomplete_value": true,
      "site": "00c2265c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:db0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c21664",
      "incomplete_value": true,
      "site": "00c21668",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:de0:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c22664",
      "incomplete_value": true,
      "site": "00c22668",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c21670",
      "incomplete_value": true,
      "site": "00c21674",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2268c",
      "incomplete_value": true,
      "site": "00c22690",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:db0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c21698",
      "incomplete_value": true,
      "site": "00c2169c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:de0:8"
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
      "00c22658",
      "READ",
      [
        "storage",
        "00c9bde0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2265c",
      "DATA",
      [
        "storage",
        "01127ce8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c22660",
      "READ",
      [
        "storage",
        "01127ce8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c22658",
      "READ",
      [
        "storage",
        "00c9cdb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2265c",
      "DATA",
      [
        "storage",
        "01128ca8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c22660",
      "READ",
      [
        "storage",
        "01128ca8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2169c ["INT_ADD", "register:40f0:8", ["const:c2169c:8", "const:4:8"]]
- 00c2169c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c22690 ["INT_ADD", "register:40f0:8", ["const:c22690:8", "const:4:8"]]
+ 00c22690 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c21658 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c2264c ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c21664 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:de0:8"]]
- 00c21664 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c22658 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
+ 00c22658 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1f41ad74ac058ef272b9350c798b0af3"></a>

### [`00c2176c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c2176c.md) → [`00c22760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c22760.md) FUN_00c22760

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.65% / 新版 93.65%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c22784",
      "incomplete_value": true,
      "site": "00c22788",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dc0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c21790",
      "incomplete_value": true,
      "site": "00c21794",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:df0:8"
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
      "definition_site": "00c227b8",
      "incomplete_value": true,
      "site": "00c227bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dc0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c217c4",
      "incomplete_value": true,
      "site": "00c217c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:df0:8"
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
      "definition_site": "00c227ac",
      "incomplete_value": false,
      "site": "00c227bc",
      "value": [
        "leaf",
        "const:c37048:8"
      ]
    },
    "old": {
      "definition_site": "00c217b8",
      "incomplete_value": false,
      "site": "00c217c8",
      "value": [
        "leaf",
        "const:c36054:8"
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
      "00c22784",
      "READ",
      [
        "storage",
        "00c9bdf0",
        null,
        "pointer"
      ]
    ],
    [
      "00c22788",
      "DATA",
      [
        "storage",
        "01127d78",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c2278c",
      "READ",
      [
        "storage",
        "01127d78",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c22784",
      "READ",
      [
        "storage",
        "00c9cdc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c22788",
      "DATA",
      [
        "storage",
        "01128d38",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c2278c",
      "READ",
      [
        "storage",
        "01128d38",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c217c8 ["INT_ADD", "register:40f0:8", ["const:c217c8:8", "const:4:8"]]
- 00c217c8 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c227bc ["INT_ADD", "register:40f0:8", ["const:c227bc:8", "const:4:8"]]
+ 00c227bc ["CALL", null, ["callee:00c5ef80:8"]]
- 00c21784 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c22778 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c21790 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:df0:8"]]
- 00c21790 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c22784 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dc0:8"]]
+ 00c22784 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c27efd15a38a4c9f47006d64c6861f7e"></a>

### [`00c21898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c21898.md) → [`00c2288c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c2288c.md) FUN_00c2288c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) · 呼出先 5件 [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5ef80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c228b0",
      "incomplete_value": true,
      "site": "00c228b4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c218bc",
      "incomplete_value": true,
      "site": "00c218c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e00:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c228bc",
      "incomplete_value": true,
      "site": "00c228c0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c218c8",
      "incomplete_value": true,
      "site": "00c218cc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c228e4",
      "incomplete_value": true,
      "site": "00c228e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c218f0",
      "incomplete_value": true,
      "site": "00c218f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e00:8"
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
      "00c228b0",
      "READ",
      [
        "storage",
        "00c9be00",
        null,
        "pointer"
      ]
    ],
    [
      "00c228b4",
      "DATA",
      [
        "storage",
        "01127d88",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c228b8",
      "READ",
      [
        "storage",
        "01127d88",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c228b0",
      "READ",
      [
        "storage",
        "00c9cdd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c228b4",
      "DATA",
      [
        "storage",
        "01128d48",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c228b8",
      "READ",
      [
        "storage",
        "01128d48",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c218f4 ["INT_ADD", "register:40f0:8", ["const:c218f4:8", "const:4:8"]]
- 00c218f4 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c228e8 ["INT_ADD", "register:40f0:8", ["const:c228e8:8", "const:4:8"]]
+ 00c228e8 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c218b0 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c228a4 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c218bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
- 00c218bc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c228b0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd0:8"]]
+ 00c228b0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f410005df88a1984c594d8df540ba64c"></a>

### [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) → [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) FUN_00c229b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c2513c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c2513c.md) [`00c2528c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c2528c.md) · 呼出先 40件 [`00c1d5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d5fc.md) [`00c1fc6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fc6c.md) [`00c1fd98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fd98.md) [`00c1fec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fec4.md) [`00c1fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fff0.md)
- 新版 呼出元 2件 [`00c26130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c26130.md) [`00c26280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c26280.md) · 呼出先 40件 [`00c1e5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e5f0.md) [`00c20c60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20c60.md) [`00c20d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20d8c.md) [`00c20eb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20eb8.md) [`00c20fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c20fe4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.29% / 新版 88.29%

優先判定に残った影響 `store_value` 13件

アドレスに依存する影響 `store_value` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c229ec",
      "incomplete_value": false,
      "site": "00c229ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c94000:8"
          ],
          [
            "leaf",
            "const:760:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c219f8",
      "incomplete_value": false,
      "site": "00c219f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c93000:8"
          ],
          [
            "leaf",
            "const:790:8"
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
      "definition_site": "00c22b7c",
      "incomplete_value": true,
      "site": "00c22b7c",
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
      "definition_site": "00c21b88",
      "incomplete_value": true,
      "site": "00c21b88",
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
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c22bb4",
      "incomplete_value": true,
      "site": "00c22bb8",
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
      "definition_site": "00c21bc0",
      "incomplete_value": true,
      "site": "00c21bc4",
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
      "00c229ec",
      "DATA",
      [
        "storage",
        "00c93790",
        null,
        "undefined *"
      ]
    ],
    [
      "00c22b74",
      "READ",
      [
        "storage",
        "00c9be08",
        null,
        "pointer"
      ]
    ],
    [
      "00c22b7c",
      "DATA",
      [
        "storage",
        "00c95aa0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c229ec",
      "DATA",
      [
        "storage",
        "00c94760",
        null,
        "undefined *"
      ]
    ],
    [
      "00c22b74",
      "READ",
      [
        "storage",
        "00c9cdd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c22b7c",
      "DATA",
      [
        "storage",
        "00c96a70",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c219e8 ["COPY", "register:4048:8", ["const:c93000:8"]]
+ 00c229dc ["COPY", "register:4048:8", ["const:c94000:8"]]
- 00c219ec ["COPY", "tmp:0:8", ["const:790:8"]]
- 00c219ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00c219ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00c219ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00c229e0 ["COPY", "tmp:0:8", ["const:760:8"]]
+ 00c229e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00c229e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00c229e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00c21a6c ["INT_ADD", "register:40f0:8", ["const:c21a6c:8", "const:4:8"]]
- 00c21a6c ["CALL", null, ["callee:00c1e5f0:8"]]
+ 00c22a60 ["INT_ADD", "register:40f0:8", ["const:c22a60:8", "const:4:8"]]
+ 00c22a60 ["CALL", null, ["callee:00c1e5f0:8"]]
~~~


<a id="compare-ed029e6f8698f41e419be3e954438742"></a>

### [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) → [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) FUN_00c23008

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c25304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25304.md) · 呼出先 33件 [`00c1d5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d5fc.md) [`00c22378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22378.md) [`00c224bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c224bc.md) [`00c22600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22600.md) [`00c22744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22744.md)
- 新版 呼出元 1件 [`00c262f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c262f8.md) · 呼出先 33件 [`00c1e5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e5f0.md) [`00c2336c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c2336c.md) [`00c234b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c234b0.md) [`00c235f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c235f4.md) [`00c23738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23738.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.82% / 新版 98.82%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c23038",
      "incomplete_value": false,
      "site": "00c23038",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c94000:8"
          ],
          [
            "leaf",
            "const:760:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22044",
      "incomplete_value": false,
      "site": "00c22044",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c93000:8"
          ],
          [
            "leaf",
            "const:790:8"
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
      "00c23038",
      "DATA",
      [
        "storage",
        "00c93790",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00c23038",
      "DATA",
      [
        "storage",
        "00c94760",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22034 ["COPY", "register:4048:8", ["const:c93000:8"]]
+ 00c23028 ["COPY", "register:4048:8", ["const:c94000:8"]]
- 00c22038 ["COPY", "tmp:0:8", ["const:790:8"]]
- 00c22038 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00c22038 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00c22038 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00c2302c ["COPY", "tmp:0:8", ["const:760:8"]]
+ 00c2302c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00c2302c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00c2302c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00c220b8 ["INT_ADD", "register:40f0:8", ["const:c220b8:8", "const:4:8"]]
- 00c220b8 ["CALL", null, ["callee:00c1e5f0:8"]]
+ 00c230ac ["INT_ADD", "register:40f0:8", ["const:c230ac:8", "const:4:8"]]
+ 00c230ac ["CALL", null, ["callee:00c1e5f0:8"]]
~~~


<a id="compare-0b6eccaf0adfe59fa80c60e074ccaf04"></a>

### [`00c22378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22378.md) → [`00c2336c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c2336c.md) FUN_00c2336c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c23390",
      "incomplete_value": true,
      "site": "00c23394",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:418:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2239c",
      "incomplete_value": true,
      "site": "00c223a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:448:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c2339c",
      "incomplete_value": true,
      "site": "00c233a0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c223a8",
      "incomplete_value": true,
      "site": "00c223ac",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c233c4",
      "incomplete_value": true,
      "site": "00c233c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:418:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c223d0",
      "incomplete_value": true,
      "site": "00c223d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:448:8"
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
      "00c23390",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ],
    [
      "00c23394",
      "DATA",
      [
        "storage",
        "01127c58",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c23398",
      "READ",
      [
        "storage",
        "01127c58",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23390",
      "READ",
      [
        "storage",
        "00c9c418",
        null,
        "pointer"
      ]
    ],
    [
      "00c23394",
      "DATA",
      [
        "storage",
        "01128c18",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c23398",
      "READ",
      [
        "storage",
        "01128c18",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c223d4 ["INT_ADD", "register:40f0:8", ["const:c223d4:8", "const:4:8"]]
- 00c223d4 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c233c8 ["INT_ADD", "register:40f0:8", ["const:c233c8:8", "const:4:8"]]
+ 00c233c8 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c22390 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c23384 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c2239c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:448:8"]]
- 00c2239c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23390 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:418:8"]]
+ 00c23390 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0a4e35e616e068b4e38fdd0de5a13479"></a>

### [`00c224bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c224bc.md) → [`00c234b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c234b0.md) FUN_00c234b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c234d4",
      "incomplete_value": true,
      "site": "00c234d8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ca8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c224e0",
      "incomplete_value": true,
      "site": "00c224e4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:cd8:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c234e0",
      "incomplete_value": true,
      "site": "00c234e4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c224ec",
      "incomplete_value": true,
      "site": "00c224f0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c23508",
      "incomplete_value": true,
      "site": "00c2350c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22514",
      "incomplete_value": true,
      "site": "00c22518",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd8:8"
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
      "00c234d4",
      "READ",
      [
        "storage",
        "00c9bcd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c234d8",
      "DATA",
      [
        "storage",
        "01127c68",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c234dc",
      "READ",
      [
        "storage",
        "01127c68",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c234d4",
      "READ",
      [
        "storage",
        "00c9cca8",
        null,
        "pointer"
      ]
    ],
    [
      "00c234d8",
      "DATA",
      [
        "storage",
        "01128c28",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c234dc",
      "READ",
      [
        "storage",
        "01128c28",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22518 ["INT_ADD", "register:40f0:8", ["const:c22518:8", "const:4:8"]]
- 00c22518 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c2350c ["INT_ADD", "register:40f0:8", ["const:c2350c:8", "const:4:8"]]
+ 00c2350c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c224d4 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c234c8 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c224e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd8:8"]]
- 00c224e0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c234d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca8:8"]]
+ 00c234d4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b4334d5610e28bb5c36ef667e945fae0"></a>

### [`00c22600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22600.md) → [`00c235f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c235f4.md) FUN_00c235f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c23618",
      "incomplete_value": true,
      "site": "00c2361c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c22624",
      "incomplete_value": true,
      "site": "00c22628",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c23624",
      "incomplete_value": true,
      "site": "00c23628",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c22630",
      "incomplete_value": true,
      "site": "00c22634",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2364c",
      "incomplete_value": true,
      "site": "00c23650",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22658",
      "incomplete_value": true,
      "site": "00c2265c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d00:8"
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
      "00c23618",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c2361c",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c23620",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23618",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2361c",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c23620",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2265c ["INT_ADD", "register:40f0:8", ["const:c2265c:8", "const:4:8"]]
- 00c2265c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c23650 ["INT_ADD", "register:40f0:8", ["const:c23650:8", "const:4:8"]]
+ 00c23650 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c22618 ["COPY", "register:40a0:8", ["const:c9a000:8"]]
+ 00c2360c ["COPY", "register:40a0:8", ["const:c9b000:8"]]
- 00c22624 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
- 00c22624 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23618 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
+ 00c23618 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b1e52f37339ea7a8f1e197f613a61614"></a>

### [`00c22744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22744.md) → [`00c23738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23738.md) FUN_00c23738

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2375c",
      "incomplete_value": true,
      "site": "00c23760",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22768",
      "incomplete_value": true,
      "site": "00c2276c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c23768",
      "incomplete_value": true,
      "site": "00c2376c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c22774",
      "incomplete_value": true,
      "site": "00c22778",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c23790",
      "incomplete_value": true,
      "site": "00c23794",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2279c",
      "incomplete_value": true,
      "site": "00c227a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c10:8"
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
      "00c2375c",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c23760",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c23764",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2375c",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c23760",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c23764",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c227a0 ["INT_ADD", "register:40f0:8", ["const:c227a0:8", "const:4:8"]]
- 00c227a0 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c23794 ["INT_ADD", "register:40f0:8", ["const:c23794:8", "const:4:8"]]
+ 00c23794 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c2275c ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c23750 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c22768 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c10:8"]]
- 00c22768 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2375c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be0:8"]]
+ 00c2375c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-dff26f08adfeaa27bd96ef959f486c10"></a>

### [`00c22888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22888.md) → [`00c2387c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c2387c.md) FUN_00c2387c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c238a0",
      "incomplete_value": true,
      "site": "00c238a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:958:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c228ac",
      "incomplete_value": true,
      "site": "00c228b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:988:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c238ac",
      "incomplete_value": true,
      "site": "00c238b0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c228b8",
      "incomplete_value": true,
      "site": "00c228bc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c238d4",
      "incomplete_value": true,
      "site": "00c238d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:958:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c228e0",
      "incomplete_value": true,
      "site": "00c228e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:988:8"
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
      "00c238a0",
      "READ",
      [
        "storage",
        "00c9b988",
        null,
        "pointer"
      ]
    ],
    [
      "00c238a4",
      "DATA",
      [
        "storage",
        "01127f28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c238a8",
      "READ",
      [
        "storage",
        "01127f28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c238a0",
      "READ",
      [
        "storage",
        "00c9c958",
        null,
        "pointer"
      ]
    ],
    [
      "00c238a4",
      "DATA",
      [
        "storage",
        "01128ee8",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c238a8",
      "READ",
      [
        "storage",
        "01128ee8",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c228e4 ["INT_ADD", "register:40f0:8", ["const:c228e4:8", "const:4:8"]]
- 00c228e4 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c238d8 ["INT_ADD", "register:40f0:8", ["const:c238d8:8", "const:4:8"]]
+ 00c238d8 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c228a0 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c23894 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c228ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:988:8"]]
- 00c228ac ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c238a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:958:8"]]
+ 00c238a0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-41af04a58b6bced2ff638808d10cd3cc"></a>

### [`00c229cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c229cc.md) → [`00c239c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c239c0.md) FUN_00c239c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c239e4",
      "incomplete_value": true,
      "site": "00c239e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c229f0",
      "incomplete_value": true,
      "site": "00c229f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c239f0",
      "incomplete_value": true,
      "site": "00c239f4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c229fc",
      "incomplete_value": true,
      "site": "00c22a00",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c23a18",
      "incomplete_value": true,
      "site": "00c23a1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22a24",
      "incomplete_value": true,
      "site": "00c22a28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c239e4",
      "READ",
      [
        "storage",
        "00c9bcf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c239e8",
      "DATA",
      [
        "storage",
        "01127f48",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c239ec",
      "READ",
      [
        "storage",
        "01127f48",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c239e4",
      "READ",
      [
        "storage",
        "00c9ccc8",
        null,
        "pointer"
      ]
    ],
    [
      "00c239e8",
      "DATA",
      [
        "storage",
        "01128f08",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c239ec",
      "READ",
      [
        "storage",
        "01128f08",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22a28 ["INT_ADD", "register:40f0:8", ["const:c22a28:8", "const:4:8"]]
- 00c22a28 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c23a1c ["INT_ADD", "register:40f0:8", ["const:c23a1c:8", "const:4:8"]]
+ 00c23a1c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c229e4 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c239d8 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c229f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf8:8"]]
- 00c229f0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c239e4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cc8:8"]]
+ 00c239e4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a2b5b1acd0c83d9c3c573740b9e63067"></a>

### [`00c22b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22b10.md) → [`00c23b04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23b04.md) FUN_00c23b04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c23b28",
      "incomplete_value": true,
      "site": "00c23b2c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22b34",
      "incomplete_value": true,
      "site": "00c22b38",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d08:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c23b34",
      "incomplete_value": true,
      "site": "00c23b38",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c22b40",
      "incomplete_value": true,
      "site": "00c22b44",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c23b5c",
      "incomplete_value": true,
      "site": "00c23b60",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22b68",
      "incomplete_value": true,
      "site": "00c22b6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d08:8"
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
      "00c23b28",
      "READ",
      [
        "storage",
        "00c9bd08",
        null,
        "pointer"
      ]
    ],
    [
      "00c23b2c",
      "DATA",
      [
        "storage",
        "01127f68",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c23b30",
      "READ",
      [
        "storage",
        "01127f68",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23b28",
      "READ",
      [
        "storage",
        "00c9ccd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c23b2c",
      "DATA",
      [
        "storage",
        "01128f28",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c23b30",
      "READ",
      [
        "storage",
        "01128f28",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22b6c ["INT_ADD", "register:40f0:8", ["const:c22b6c:8", "const:4:8"]]
- 00c22b6c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c23b60 ["INT_ADD", "register:40f0:8", ["const:c23b60:8", "const:4:8"]]
+ 00c23b60 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c22b28 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c23b1c ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c22b34 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d08:8"]]
- 00c22b34 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23b28 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd8:8"]]
+ 00c23b28 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-759c5ec4dd75c6a52b50d16eea053767"></a>

### [`00c22c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22c54.md) → [`00c23c48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23c48.md) FUN_00c23c48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c23c6c",
      "incomplete_value": true,
      "site": "00c23c70",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ce8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22c78",
      "incomplete_value": true,
      "site": "00c22c7c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d18:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c23c78",
      "incomplete_value": true,
      "site": "00c23c7c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c22c84",
      "incomplete_value": true,
      "site": "00c22c88",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c23ca0",
      "incomplete_value": true,
      "site": "00c23ca4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ce8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22cac",
      "incomplete_value": true,
      "site": "00c22cb0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d18:8"
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
      "00c23c6c",
      "READ",
      [
        "storage",
        "00c9bd18",
        null,
        "pointer"
      ]
    ],
    [
      "00c23c70",
      "DATA",
      [
        "storage",
        "01127f58",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c23c74",
      "READ",
      [
        "storage",
        "01127f58",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23c6c",
      "READ",
      [
        "storage",
        "00c9cce8",
        null,
        "pointer"
      ]
    ],
    [
      "00c23c70",
      "DATA",
      [
        "storage",
        "01128f18",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c23c74",
      "READ",
      [
        "storage",
        "01128f18",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22cb0 ["INT_ADD", "register:40f0:8", ["const:c22cb0:8", "const:4:8"]]
- 00c22cb0 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c23ca4 ["INT_ADD", "register:40f0:8", ["const:c23ca4:8", "const:4:8"]]
+ 00c23ca4 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c22c6c ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c23c60 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c22c78 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d18:8"]]
- 00c22c78 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23c6c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ce8:8"]]
+ 00c23c6c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3bdc07eea5495f848ebfadc5e41f478c"></a>

### [`00c22d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22d98.md) → [`00c23d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23d8c.md) FUN_00c23d8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c23db0",
      "incomplete_value": true,
      "site": "00c23db4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cf8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22dbc",
      "incomplete_value": true,
      "site": "00c22dc0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d28:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c23dbc",
      "incomplete_value": true,
      "site": "00c23dc0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c22dc8",
      "incomplete_value": true,
      "site": "00c22dcc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c23de4",
      "incomplete_value": true,
      "site": "00c23de8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cf8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22df0",
      "incomplete_value": true,
      "site": "00c22df4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d28:8"
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
      "00c23db0",
      "READ",
      [
        "storage",
        "00c9bd28",
        null,
        "pointer"
      ]
    ],
    [
      "00c23db4",
      "DATA",
      [
        "storage",
        "01127f78",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c23db8",
      "READ",
      [
        "storage",
        "01127f78",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23db0",
      "READ",
      [
        "storage",
        "00c9ccf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c23db4",
      "DATA",
      [
        "storage",
        "01128f38",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c23db8",
      "READ",
      [
        "storage",
        "01128f38",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22df4 ["INT_ADD", "register:40f0:8", ["const:c22df4:8", "const:4:8"]]
- 00c22df4 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c23de8 ["INT_ADD", "register:40f0:8", ["const:c23de8:8", "const:4:8"]]
+ 00c23de8 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c22db0 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c23da4 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c22dbc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d28:8"]]
- 00c22dbc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23db0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf8:8"]]
+ 00c23db0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-97203926ecc3787f799c519baf176a74"></a>

### [`00c22edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22edc.md) → [`00c23ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23ed0.md) FUN_00c23ed0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c23ef4",
      "incomplete_value": true,
      "site": "00c23ef8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22f00",
      "incomplete_value": true,
      "site": "00c22f04",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c78:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c23f00",
      "incomplete_value": true,
      "site": "00c23f04",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c22f0c",
      "incomplete_value": true,
      "site": "00c22f10",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c23f28",
      "incomplete_value": true,
      "site": "00c23f2c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c22f34",
      "incomplete_value": true,
      "site": "00c22f38",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c78:8"
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
      "00c23ef4",
      "READ",
      [
        "storage",
        "00c9bc78",
        null,
        "pointer"
      ]
    ],
    [
      "00c23ef8",
      "DATA",
      [
        "storage",
        "01127f38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c23efc",
      "READ",
      [
        "storage",
        "01127f38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23ef4",
      "READ",
      [
        "storage",
        "00c9cc48",
        null,
        "pointer"
      ]
    ],
    [
      "00c23ef8",
      "DATA",
      [
        "storage",
        "01128ef8",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c23efc",
      "READ",
      [
        "storage",
        "01128ef8",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22f38 ["INT_ADD", "register:40f0:8", ["const:c22f38:8", "const:4:8"]]
- 00c22f38 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c23f2c ["INT_ADD", "register:40f0:8", ["const:c23f2c:8", "const:4:8"]]
+ 00c23f2c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c22ef4 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c23ee8 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c22f00 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
- 00c22f00 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23ef4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c48:8"]]
+ 00c23ef4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fe28e5aab18bd4c588347109bc1328db"></a>

### [`00c23020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23020.md) → [`00c24014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c24014.md) FUN_00c24014

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c24038",
      "incomplete_value": true,
      "site": "00c2403c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23044",
      "incomplete_value": true,
      "site": "00c23048",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cb0:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24044",
      "incomplete_value": true,
      "site": "00c24048",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c23050",
      "incomplete_value": true,
      "site": "00c23054",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2406c",
      "incomplete_value": true,
      "site": "00c24070",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23078",
      "incomplete_value": true,
      "site": "00c2307c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cb0:8"
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
      "00c24038",
      "READ",
      [
        "storage",
        "00c9bcb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2403c",
      "DATA",
      [
        "storage",
        "01127cf8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c24040",
      "READ",
      [
        "storage",
        "01127cf8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c24038",
      "READ",
      [
        "storage",
        "00c9cc80",
        null,
        "pointer"
      ]
    ],
    [
      "00c2403c",
      "DATA",
      [
        "storage",
        "01128cb8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c24040",
      "READ",
      [
        "storage",
        "01128cb8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2307c ["INT_ADD", "register:40f0:8", ["const:c2307c:8", "const:4:8"]]
- 00c2307c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c24070 ["INT_ADD", "register:40f0:8", ["const:c24070:8", "const:4:8"]]
+ 00c24070 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c23038 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c2402c ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c23044 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb0:8"]]
- 00c23044 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c24038 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c80:8"]]
+ 00c24038 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ace189cc8fbe4d00a43b168798625977"></a>

### [`00c23164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23164.md) → [`00c24158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c24158.md) FUN_00c24158

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2417c",
      "incomplete_value": true,
      "site": "00c24180",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23188",
      "incomplete_value": true,
      "site": "00c2318c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca8:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24188",
      "incomplete_value": true,
      "site": "00c2418c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c23194",
      "incomplete_value": true,
      "site": "00c23198",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c241b0",
      "incomplete_value": true,
      "site": "00c241b4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c231bc",
      "incomplete_value": true,
      "site": "00c231c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca8:8"
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
      "00c2417c",
      "READ",
      [
        "storage",
        "00c9bca8",
        null,
        "pointer"
      ]
    ],
    [
      "00c24180",
      "DATA",
      [
        "storage",
        "01127d08",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c24184",
      "READ",
      [
        "storage",
        "01127d08",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2417c",
      "READ",
      [
        "storage",
        "00c9cc78",
        null,
        "pointer"
      ]
    ],
    [
      "00c24180",
      "DATA",
      [
        "storage",
        "01128cc8",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c24184",
      "READ",
      [
        "storage",
        "01128cc8",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c231c0 ["INT_ADD", "register:40f0:8", ["const:c231c0:8", "const:4:8"]]
- 00c231c0 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c241b4 ["INT_ADD", "register:40f0:8", ["const:c241b4:8", "const:4:8"]]
+ 00c241b4 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c2317c ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c24170 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c23188 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca8:8"]]
- 00c23188 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2417c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
+ 00c2417c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7e025507dd57c25cc58216f44b9be847"></a>

### [`00c232a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c232a8.md) → [`00c2429c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c2429c.md) FUN_00c2429c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c242c0",
      "incomplete_value": true,
      "site": "00c242c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c232cc",
      "incomplete_value": true,
      "site": "00c232d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc0:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c242cc",
      "incomplete_value": true,
      "site": "00c242d0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c232d8",
      "incomplete_value": true,
      "site": "00c232dc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c242f4",
      "incomplete_value": true,
      "site": "00c242f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23300",
      "incomplete_value": true,
      "site": "00c23304",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc0:8"
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
      "00c242c0",
      "READ",
      [
        "storage",
        "00c9bcc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c242c4",
      "DATA",
      [
        "storage",
        "01127d18",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c242c8",
      "READ",
      [
        "storage",
        "01127d18",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c242c0",
      "READ",
      [
        "storage",
        "00c9cc90",
        null,
        "pointer"
      ]
    ],
    [
      "00c242c4",
      "DATA",
      [
        "storage",
        "01128cd8",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c242c8",
      "READ",
      [
        "storage",
        "01128cd8",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23304 ["INT_ADD", "register:40f0:8", ["const:c23304:8", "const:4:8"]]
- 00c23304 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c242f8 ["INT_ADD", "register:40f0:8", ["const:c242f8:8", "const:4:8"]]
+ 00c242f8 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c232c0 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c242b4 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c232cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cc0:8"]]
- 00c232cc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c242c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c90:8"]]
+ 00c242c0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cea74f8492f63f25ff01d9ff7a4e3abf"></a>

### [`00c233ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c233ec.md) → [`00c243e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c243e0.md) FUN_00c243e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c24404",
      "incomplete_value": true,
      "site": "00c24408",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23410",
      "incomplete_value": true,
      "site": "00c23414",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cb8:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24410",
      "incomplete_value": true,
      "site": "00c24414",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c2341c",
      "incomplete_value": true,
      "site": "00c23420",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c24438",
      "incomplete_value": true,
      "site": "00c2443c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23444",
      "incomplete_value": true,
      "site": "00c23448",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cb8:8"
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
      "00c24404",
      "READ",
      [
        "storage",
        "00c9bcb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c24408",
      "DATA",
      [
        "storage",
        "01127d28",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c2440c",
      "READ",
      [
        "storage",
        "01127d28",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c24404",
      "READ",
      [
        "storage",
        "00c9cc88",
        null,
        "pointer"
      ]
    ],
    [
      "00c24408",
      "DATA",
      [
        "storage",
        "01128ce8",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c2440c",
      "READ",
      [
        "storage",
        "01128ce8",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23448 ["INT_ADD", "register:40f0:8", ["const:c23448:8", "const:4:8"]]
- 00c23448 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c2443c ["INT_ADD", "register:40f0:8", ["const:c2443c:8", "const:4:8"]]
+ 00c2443c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c23404 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c243f8 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c23410 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb8:8"]]
- 00c23410 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c24404 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
+ 00c24404 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-169ad552a923fac4447a785a523cb8aa"></a>

### [`00c23530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23530.md) → [`00c24524`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c24524.md) FUN_00c24524

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c24548",
      "incomplete_value": true,
      "site": "00c2454c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23554",
      "incomplete_value": true,
      "site": "00c23558",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d78:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24554",
      "incomplete_value": true,
      "site": "00c24558",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c23560",
      "incomplete_value": true,
      "site": "00c23564",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2457c",
      "incomplete_value": true,
      "site": "00c24580",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23588",
      "incomplete_value": true,
      "site": "00c2358c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d78:8"
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
      "00c24548",
      "READ",
      [
        "storage",
        "00c9bd78",
        null,
        "pointer"
      ]
    ],
    [
      "00c2454c",
      "DATA",
      [
        "storage",
        "01127d38",
        "std::__ndk1::money_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24550",
      "READ",
      [
        "storage",
        "01127d38",
        "std::__ndk1::money_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c24548",
      "READ",
      [
        "storage",
        "00c9cd48",
        null,
        "pointer"
      ]
    ],
    [
      "00c2454c",
      "DATA",
      [
        "storage",
        "01128cf8",
        "std::__ndk1::money_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24550",
      "READ",
      [
        "storage",
        "01128cf8",
        "std::__ndk1::money_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2358c ["INT_ADD", "register:40f0:8", ["const:c2358c:8", "const:4:8"]]
- 00c2358c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c24580 ["INT_ADD", "register:40f0:8", ["const:c24580:8", "const:4:8"]]
+ 00c24580 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c23548 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c2453c ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c23554 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d78:8"]]
- 00c23554 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c24548 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d48:8"]]
+ 00c24548 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1ad9c07db9f0115125dedf3f87453f5e"></a>

### [`00c23674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23674.md) → [`00c24668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c24668.md) FUN_00c24668

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2468c",
      "incomplete_value": true,
      "site": "00c24690",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23698",
      "incomplete_value": true,
      "site": "00c2369c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d88:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24698",
      "incomplete_value": true,
      "site": "00c2469c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c236a4",
      "incomplete_value": true,
      "site": "00c236a8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c246c0",
      "incomplete_value": true,
      "site": "00c246c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c236cc",
      "incomplete_value": true,
      "site": "00c236d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d88:8"
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
      "00c2468c",
      "READ",
      [
        "storage",
        "00c9bd88",
        null,
        "pointer"
      ]
    ],
    [
      "00c24690",
      "DATA",
      [
        "storage",
        "01127d48",
        "std::__ndk1::money_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24694",
      "READ",
      [
        "storage",
        "01127d48",
        "std::__ndk1::money_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2468c",
      "READ",
      [
        "storage",
        "00c9cd58",
        null,
        "pointer"
      ]
    ],
    [
      "00c24690",
      "DATA",
      [
        "storage",
        "01128d08",
        "std::__ndk1::money_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24694",
      "READ",
      [
        "storage",
        "01128d08",
        "std::__ndk1::money_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c236d0 ["INT_ADD", "register:40f0:8", ["const:c236d0:8", "const:4:8"]]
- 00c236d0 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c246c4 ["INT_ADD", "register:40f0:8", ["const:c246c4:8", "const:4:8"]]
+ 00c246c4 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c2368c ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c24680 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c23698 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
- 00c23698 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2468c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d58:8"]]
+ 00c2468c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0c53a45568ffcc038777d17ac25cd871"></a>

### [`00c237b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c237b8.md) → [`00c247ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c247ac.md) FUN_00c247ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c247d0",
      "incomplete_value": true,
      "site": "00c247d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c237dc",
      "incomplete_value": true,
      "site": "00c237e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d98:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c247dc",
      "incomplete_value": true,
      "site": "00c247e0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c237e8",
      "incomplete_value": true,
      "site": "00c237ec",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c24804",
      "incomplete_value": true,
      "site": "00c24808",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23810",
      "incomplete_value": true,
      "site": "00c23814",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d98:8"
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
      "00c247d0",
      "READ",
      [
        "storage",
        "00c9bd98",
        null,
        "pointer"
      ]
    ],
    [
      "00c247d4",
      "DATA",
      [
        "storage",
        "01127d58",
        "std::__ndk1::money_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c247d8",
      "READ",
      [
        "storage",
        "01127d58",
        "std::__ndk1::money_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c247d0",
      "READ",
      [
        "storage",
        "00c9cd68",
        null,
        "pointer"
      ]
    ],
    [
      "00c247d4",
      "DATA",
      [
        "storage",
        "01128d18",
        "std::__ndk1::money_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c247d8",
      "READ",
      [
        "storage",
        "01128d18",
        "std::__ndk1::money_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23814 ["INT_ADD", "register:40f0:8", ["const:c23814:8", "const:4:8"]]
- 00c23814 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c24808 ["INT_ADD", "register:40f0:8", ["const:c24808:8", "const:4:8"]]
+ 00c24808 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c237d0 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c247c4 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c237dc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d98:8"]]
- 00c237dc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c247d0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
+ 00c247d0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-65eb8c8967c812c146eaaba7863768b1"></a>

### [`00c238fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c238fc.md) → [`00c248f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c248f0.md) FUN_00c248f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c24914",
      "incomplete_value": true,
      "site": "00c24918",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23920",
      "incomplete_value": true,
      "site": "00c23924",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:da8:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24920",
      "incomplete_value": true,
      "site": "00c24924",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c2392c",
      "incomplete_value": true,
      "site": "00c23930",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c24948",
      "incomplete_value": true,
      "site": "00c2494c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23954",
      "incomplete_value": true,
      "site": "00c23958",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:da8:8"
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
      "00c24914",
      "READ",
      [
        "storage",
        "00c9bda8",
        null,
        "pointer"
      ]
    ],
    [
      "00c24918",
      "DATA",
      [
        "storage",
        "01127d68",
        "std::__ndk1::money_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c2491c",
      "READ",
      [
        "storage",
        "01127d68",
        "std::__ndk1::money_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c24914",
      "READ",
      [
        "storage",
        "00c9cd78",
        null,
        "pointer"
      ]
    ],
    [
      "00c24918",
      "DATA",
      [
        "storage",
        "01128d28",
        "std::__ndk1::money_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c2491c",
      "READ",
      [
        "storage",
        "01128d28",
        "std::__ndk1::money_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23958 ["INT_ADD", "register:40f0:8", ["const:c23958:8", "const:4:8"]]
- 00c23958 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c2494c ["INT_ADD", "register:40f0:8", ["const:c2494c:8", "const:4:8"]]
+ 00c2494c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c23914 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c24908 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c23920 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:da8:8"]]
- 00c23920 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c24914 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d78:8"]]
+ 00c24914 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a235f682682a30476202fd70db04b7a9"></a>

### [`00c23a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23a40.md) → [`00c24a34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c24a34.md) FUN_00c24a34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c24a58",
      "incomplete_value": true,
      "site": "00c24a5c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23a64",
      "incomplete_value": true,
      "site": "00c23a68",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
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
      "definition_site": "00c24a8c",
      "incomplete_value": true,
      "site": "00c24a90",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23a98",
      "incomplete_value": true,
      "site": "00c23a9c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c88:8"
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
      "definition_site": "00c24a80",
      "incomplete_value": false,
      "site": "00c24a90",
      "value": [
        "leaf",
        "const:c37048:8"
      ]
    },
    "old": {
      "definition_site": "00c23a8c",
      "incomplete_value": false,
      "site": "00c23a9c",
      "value": [
        "leaf",
        "const:c36054:8"
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
      "00c24a58",
      "READ",
      [
        "storage",
        "00c9bc88",
        null,
        "pointer"
      ]
    ],
    [
      "00c24a5c",
      "DATA",
      [
        "storage",
        "01127f88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c24a60",
      "READ",
      [
        "storage",
        "01127f88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c24a58",
      "READ",
      [
        "storage",
        "00c9cc58",
        null,
        "pointer"
      ]
    ],
    [
      "00c24a5c",
      "DATA",
      [
        "storage",
        "01128f48",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c24a60",
      "READ",
      [
        "storage",
        "01128f48",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23a9c ["INT_ADD", "register:40f0:8", ["const:c23a9c:8", "const:4:8"]]
- 00c23a9c ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c24a90 ["INT_ADD", "register:40f0:8", ["const:c24a90:8", "const:4:8"]]
+ 00c24a90 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c23a58 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c24a4c ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c23a64 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
- 00c23a64 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c24a58 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
+ 00c24a58 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-83237a456753ba7da709f5f8d9ab8612"></a>

### [`00c23b84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23b84.md) → [`00c24b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c24b78.md) FUN_00c24b78

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c24b9c",
      "incomplete_value": true,
      "site": "00c24ba0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23ba8",
      "incomplete_value": true,
      "site": "00c23bac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24ba8",
      "incomplete_value": true,
      "site": "00c24bac",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
      "definition_site": "00c23bb4",
      "incomplete_value": true,
      "site": "00c23bb8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:1:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c24bd0",
      "incomplete_value": true,
      "site": "00c24bd4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23bdc",
      "incomplete_value": true,
      "site": "00c23be0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
      "00c24b9c",
      "READ",
      [
        "storage",
        "00c9bc98",
        null,
        "pointer"
      ]
    ],
    [
      "00c24ba0",
      "DATA",
      [
        "storage",
        "01127f98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c24ba4",
      "READ",
      [
        "storage",
        "01127f98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c24b9c",
      "READ",
      [
        "storage",
        "00c9cc68",
        null,
        "pointer"
      ]
    ],
    [
      "00c24ba0",
      "DATA",
      [
        "storage",
        "01128f58",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c24ba4",
      "READ",
      [
        "storage",
        "01128f58",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23be0 ["INT_ADD", "register:40f0:8", ["const:c23be0:8", "const:4:8"]]
- 00c23be0 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c24bd4 ["INT_ADD", "register:40f0:8", ["const:c24bd4:8", "const:4:8"]]
+ 00c24bd4 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c23b9c ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c24b90 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c23ba8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c98:8"]]
- 00c23ba8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c24b9c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c68:8"]]
+ 00c24b9c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-069b7aa0ffa3e09a61c5b77410dd7707"></a>

### [`00c23cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23cc8.md) → [`00c24cbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c24cbc.md) FUN_00c24cbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 6件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c24ce0",
      "incomplete_value": true,
      "site": "00c24ce4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23cec",
      "incomplete_value": true,
      "site": "00c23cf0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
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
      "definition_site": "00c24d14",
      "incomplete_value": true,
      "site": "00c24d18",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23d20",
      "incomplete_value": true,
      "site": "00c23d24",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
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
      "definition_site": "00c24d08",
      "incomplete_value": false,
      "site": "00c24d18",
      "value": [
        "leaf",
        "const:c37048:8"
      ]
    },
    "old": {
      "definition_site": "00c23d14",
      "incomplete_value": false,
      "site": "00c23d24",
      "value": [
        "leaf",
        "const:c36054:8"
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
      "00c24ce0",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c24ce4",
      "DATA",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24ce8",
      "READ",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c24ce0",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c24ce4",
      "DATA",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24ce8",
      "READ",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23d24 ["INT_ADD", "register:40f0:8", ["const:c23d24:8", "const:4:8"]]
- 00c23d24 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c24d18 ["INT_ADD", "register:40f0:8", ["const:c24d18:8", "const:4:8"]]
+ 00c24d18 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c23ce0 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c24cd4 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c23cec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be0:8"]]
- 00c23cec ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c24ce0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bb0:8"]]
+ 00c24ce0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


