# v16.0.1 → v16.0.2 · 最優先の変更候補 (63)

[一覧の目次](README.md)

<a id="compare-c58440559802d8a8de878ea6cd1dd07e"></a>

### [`009f6c14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f6/009f6c14.md) → [`009f6c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f6/009f6c68.md) FUN_009f6c68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 21件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469068.md) [`0046965c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/0046965c.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 0件  · 呼出先 21件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`004690a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/004690a8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.64% / 新版 98.64%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f733c",
      "incomplete_value": true,
      "site": "009f7354",
      "value": [
        "LOAD",
        "16",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f72e8",
      "incomplete_value": true,
      "site": "009f7300",
      "value": [
        "LOAD",
        "16",
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
                "const:20:8"
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
      "definition_site": "009f7338",
      "incomplete_value": true,
      "site": "009f7358",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:302000:8"
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
    "old": {
      "definition_site": "009f72e4",
      "incomplete_value": true,
      "site": "009f7304",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:302000:8"
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
    "ordinal": 38,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f7338",
      "incomplete_value": true,
      "site": "009f7358",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "009f72e4",
      "incomplete_value": true,
      "site": "009f7304",
      "value": [
        "LOAD",
        "16",
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
      "009f6ca8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009f6cb4",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f6cbc",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f6ca8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009f6cb4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f6cbc",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f6c74 ["INT_ADD", "register:40f0:8", ["const:9f6c74:8", "const:4:8"]]
- 009f6c74 ["CALL", null, ["callee:00c586e0:8"]]
+ 009f6cc8 ["INT_ADD", "register:40f0:8", ["const:9f6cc8:8", "const:4:8"]]
+ 009f6cc8 ["CALL", null, ["callee:00c586e0:8"]]
- 009f6cac ["INT_ADD", "register:40f0:8", ["const:9f6cac:8", "const:4:8"]]
- 009f6cac ["CALL", null, ["callee:0046969c:8"]]
+ 009f6d00 ["INT_ADD", "register:40f0:8", ["const:9f6d00:8", "const:4:8"]]
+ 009f6d00 ["CALL", null, ["callee:0046969c:8"]]
- 009f6c54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 009f6c54 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 009f6ca8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 009f6ca8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fdaec8bf3151b97d37f41f1a83088283"></a>

### [`009f7478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f7/009f7478.md) → [`009f74cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f7/009f74cc.md) FUN_009f74cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`009f7de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f7/009f7de0.md) [`009f9ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f9/009f9ee0.md) [`009fabcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fa/009fabcc.md) · 呼出先 14件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00665d64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00665/00665d64.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`009f7e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f7/009f7e34.md) [`009f9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f9f34.md) [`009fac20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fa/009fac20.md) · 呼出先 14件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00665da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665da4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 86.56% / 新版 86.56%

優先判定に残った影響 `call_argument_candidate` 15件, `store_destination` 14件, `store_value` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009f77a8",
      "incomplete_value": false,
      "site": "009f77a8",
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
      "definition_site": "009f7754",
      "incomplete_value": false,
      "site": "009f7754",
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
    "ordinal": 28,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009f77ac",
      "incomplete_value": false,
      "site": "009f77ac",
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
    "old": {
      "definition_site": "009f7758",
      "incomplete_value": false,
      "site": "009f7758",
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
            "const:f00:8"
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f77a8",
      "incomplete_value": false,
      "site": "009f77ac",
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
      "definition_site": "009f7754",
      "incomplete_value": false,
      "site": "009f7758",
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009f7500",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009f750c",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f7514",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f7500",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009f750c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f7514",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f74c8 ["INT_ADD", "register:40f0:8", ["const:9f74c8:8", "const:4:8"]]
- 009f74c8 ["CALL", null, ["callee:00c586e0:8"]]
+ 009f751c ["INT_ADD", "register:40f0:8", ["const:9f751c:8", "const:4:8"]]
+ 009f751c ["CALL", null, ["callee:00c586e0:8"]]
- 009f7680 ["INT_ADD", "register:40f0:8", ["const:9f7680:8", "const:4:8"]]
- 009f7680 ["CALL", null, ["callee:0047e64c:8"]]
+ 009f76d4 ["INT_ADD", "register:40f0:8", ["const:9f76d4:8", "const:4:8"]]
+ 009f76d4 ["CALL", null, ["callee:0047e64c:8"]]
- 009f76d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009f76d4 ["INT_ADD", "register:40f0:8", ["const:9f76d4:8", "const:4:8"]]
- 009f76d4 ["CALLIND", null, ["register:0:8"]]
+ 009f7728 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009f7728 ["INT_ADD", "register:40f0:8", ["const:9f7728:8", "const:4:8"]]
+ 009f7728 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-38c245b2a7bf26743b3955b20c6ff27e"></a>

### [`009f7b74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f7/009f7b74.md) → [`009f7bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f7/009f7bc8.md) FUN_009f7bc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a03e68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a03e68.md) · 呼出先 14件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468c68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468c68.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md)
- 新版 呼出元 1件 [`00a03ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03ebc.md) · 呼出先 14件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca8.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.42% / 新版 97.42%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009f7bf0",
      "incomplete_value": true,
      "site": "009f7bf0",
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
      "definition_site": "009f7b9c",
      "incomplete_value": true,
      "site": "009f7b9c",
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
      "definition_site": "009f7bf8",
      "incomplete_value": false,
      "site": "009f7c08",
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
      "definition_site": "009f7ba4",
      "incomplete_value": false,
      "site": "009f7bb4",
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
      "definition_site": "009f7c00",
      "incomplete_value": false,
      "site": "009f7c08",
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
            "const:a60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f7bac",
      "incomplete_value": false,
      "site": "009f7bb4",
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
            "const:990:8"
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
      "009f7bec",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009f7bf8",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f7c00",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f7bec",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009f7bf8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f7c00",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f7bb4 ["INT_ADD", "register:40f0:8", ["const:9f7bb4:8", "const:4:8"]]
- 009f7bb4 ["CALL", null, ["callee:00c586e0:8"]]
+ 009f7c08 ["INT_ADD", "register:40f0:8", ["const:9f7c08:8", "const:4:8"]]
+ 009f7c08 ["CALL", null, ["callee:00c586e0:8"]]
- 009f7b98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 009f7b98 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 009f7bec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 009f7bec ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 009f7ba4 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 009f7ba4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 009f7ba4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 009f7ba4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 009f7bf8 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 009f7bf8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 009f7bf8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 009f7bf8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-3bed71c5af816e87d6ed32b009554e1d"></a>

### [`009f7de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f7/009f7de0.md) → [`009f7e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f7/009f7e34.md) FUN_009f7e34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a052a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a052a4.md) · 呼出先 33件 [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`006648a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006648a0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6fec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6fec.md)
- 新版 呼出元 1件 [`00a052f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a052f8.md) · 呼出先 33件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.60% / 新版 96.60%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f7f88",
      "incomplete_value": false,
      "site": "009f7f88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:5f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f7f34",
      "incomplete_value": false,
      "site": "009f7f34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:520:8"
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
      "definition_site": "009f8028",
      "incomplete_value": false,
      "site": "009f8028",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:670:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f7fd4",
      "incomplete_value": false,
      "site": "009f7fd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:5a0:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f8070",
      "incomplete_value": false,
      "site": "009f8078",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:6f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f801c",
      "incomplete_value": false,
      "site": "009f8024",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:620:8"
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
      "009f7e68",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009f7e74",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f7e7c",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f7e68",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009f7e74",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f7e7c",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f7e34 ["INT_ADD", "register:40f0:8", ["const:9f7e34:8", "const:4:8"]]
- 009f7e34 ["CALL", null, ["callee:00c586e0:8"]]
+ 009f7e88 ["INT_ADD", "register:40f0:8", ["const:9f7e88:8", "const:4:8"]]
+ 009f7e88 ["CALL", null, ["callee:00c586e0:8"]]
- 009f7ee0 ["INT_ADD", "register:40f0:8", ["const:9f7ee0:8", "const:4:8"]]
- 009f7ee0 ["CALL", null, ["callee:00a834bc:8"]]
+ 009f7f34 ["INT_ADD", "register:40f0:8", ["const:9f7f34:8", "const:4:8"]]
+ 009f7f34 ["CALL", null, ["callee:00a834bc:8"]]
- 009f7f80 ["INT_ADD", "register:40f0:8", ["const:9f7f80:8", "const:4:8"]]
- 009f7f80 ["CALL", null, ["callee:008b9558:8"]]
+ 009f7fd4 ["INT_ADD", "register:40f0:8", ["const:9f7fd4:8", "const:4:8"]]
+ 009f7fd4 ["CALL", null, ["callee:008b9558:8"]]
~~~


<a id="compare-379f9cca5ccc626345599ec69f685552"></a>

### [`009f861c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f8/009f861c.md) → [`009f8670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f8/009f8670.md) FUN_009f8670

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a014f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a014f0.md) · 呼出先 15件 [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`006c52f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c5/006c52f8.md)
- 新版 呼出元 1件 [`00a01544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01544.md) · 呼出先 15件 [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006c5350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c5/006c5350.md)

変更の種類 call, call_target, constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 99.16% / 新版 99.16%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f87a8",
      "value": [
        "leaf",
        "ram:6cbacc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f8754",
      "value": [
        "leaf",
        "ram:6cba74:8"
      ]
    },
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f87b4",
      "value": [
        "leaf",
        "ram:6ccbd0:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f8760",
      "value": [
        "leaf",
        "ram:6ccb78:8"
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
      "009f86dc",
      "DATA",
      [
        "storage",
        "00436ba0",
        null,
        "byte[47]"
      ]
    ],
    [
      "009f86f4",
      "DATA",
      [
        "storage",
        "00436b98",
        null,
        "byte[47]"
      ]
    ],
    [
      "009f86fc",
      "DATA",
      [
        "storage",
        "00436ba0",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "009f86dc",
      "DATA",
      [
        "storage",
        "00436ba0",
        "fde_00436ba0",
        "dword"
      ]
    ],
    [
      "009f86f4",
      "DATA",
      [
        "storage",
        "00436b98",
        null,
        "byte[55]"
      ]
    ],
    [
      "009f86fc",
      "DATA",
      [
        "storage",
        "00436ba0",
        "fde_00436ba0",
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f8754 ["INT_ADD", "register:40f0:8", ["const:9f8754:8", "const:4:8"]]
- 009f8754 ["CALL", null, ["ram:6cba74:8"]]
+ 009f87a8 ["INT_ADD", "register:40f0:8", ["const:9f87a8:8", "const:4:8"]]
+ 009f87a8 ["CALL", null, ["ram:6cbacc:8"]]
- 009f8760 ["INT_ADD", "register:40f0:8", ["const:9f8760:8", "const:4:8"]]
- 009f8760 ["CALL", null, ["ram:6ccb78:8"]]
+ 009f87b4 ["INT_ADD", "register:40f0:8", ["const:9f87b4:8", "const:4:8"]]
+ 009f87b4 ["CALL", null, ["ram:6ccbd0:8"]]
- 009f867c ["INT_ADD", "register:40f0:8", ["const:9f867c:8", "const:4:8"]]
- 009f867c ["CALL", null, ["callee:006c5350:8"]]
+ 009f86d0 ["INT_ADD", "register:40f0:8", ["const:9f86d0:8", "const:4:8"]]
+ 009f86d0 ["CALL", null, ["callee:006c5350:8"]]
~~~


<a id="compare-f9ae79c134c6cf292c3a7091116a4be5"></a>

### [`009f8cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f8/009f8cac.md) → [`009f8d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f8/009f8d00.md) FUN_009f8d00

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a022d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a022d8.md) · 呼出先 20件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md)
- 新版 呼出元 1件 [`00a0232c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a0232c.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition

命令の説明率　旧版 97.83% / 新版 97.83%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `call_target` 2件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009f8d4c",
      "incomplete_value": true,
      "site": "009f8d4c",
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
      "definition_site": "009f8cf8",
      "incomplete_value": true,
      "site": "009f8cf8",
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
      "definition_site": "009f8d54",
      "incomplete_value": false,
      "site": "009f8d68",
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
      "definition_site": "009f8d00",
      "incomplete_value": false,
      "site": "009f8d14",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f8d5c",
      "incomplete_value": false,
      "site": "009f8d68",
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
            "const:a60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f8d08",
      "incomplete_value": false,
      "site": "009f8d14",
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
            "const:990:8"
          ]
        ]
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
      "009f8d48",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009f8d54",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f8d5c",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f8d48",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009f8d54",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f8d5c",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f8d14 ["INT_ADD", "register:40f0:8", ["const:9f8d14:8", "const:4:8"]]
- 009f8d14 ["CALL", null, ["callee:00c586e0:8"]]
+ 009f8d68 ["INT_ADD", "register:40f0:8", ["const:9f8d68:8", "const:4:8"]]
+ 009f8d68 ["CALL", null, ["callee:00c586e0:8"]]
- 009f8e10 ["INT_ADD", "register:40f0:8", ["const:9f8e10:8", "const:4:8"]]
- 009f8e10 ["CALL", null, ["ram:6cba74:8"]]
+ 009f8e64 ["INT_ADD", "register:40f0:8", ["const:9f8e64:8", "const:4:8"]]
+ 009f8e64 ["CALL", null, ["ram:6cbacc:8"]]
- 009f8e1c ["INT_ADD", "register:40f0:8", ["const:9f8e1c:8", "const:4:8"]]
- 009f8e1c ["CALL", null, ["ram:6ccb78:8"]]
+ 009f8e70 ["INT_ADD", "register:40f0:8", ["const:9f8e70:8", "const:4:8"]]
+ 009f8e70 ["CALL", null, ["ram:6ccbd0:8"]]
~~~


<a id="compare-9b1c6eb41a89cac9d7f63a416222ccae"></a>

### [`009f9ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f9/009f9ee0.md) → [`009f9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f9f34.md) FUN_009f9f34

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a02be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a02be8.md) · 呼出先 39件 [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6fec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6fec.md)
- 新版 呼出元 1件 [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) · 呼出先 39件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.43% / 新版 95.43%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 12件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009fa008",
      "incomplete_value": true,
      "site": "009fa018",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4b9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f9fb4",
      "incomplete_value": true,
      "site": "009f9fc4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:50d:8"
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
      "definition_site": "009fa01c",
      "incomplete_value": true,
      "site": "009fa01c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009f9fc8",
      "incomplete_value": true,
      "site": "009f9fc8",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009fa010",
      "incomplete_value": true,
      "site": "009fa020",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009f9fbc",
      "incomplete_value": true,
      "site": "009f9fcc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "009f9f74",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009f9f80",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f9f88",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f9f74",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009f9f80",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f9f88",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f9f40 ["INT_ADD", "register:40f0:8", ["const:9f9f40:8", "const:4:8"]]
- 009f9f40 ["CALL", null, ["callee:00c586e0:8"]]
+ 009f9f94 ["INT_ADD", "register:40f0:8", ["const:9f9f94:8", "const:4:8"]]
+ 009f9f94 ["CALL", null, ["callee:00c586e0:8"]]
- 009f9f74 ["INT_ADD", "register:40f0:8", ["const:9f9f74:8", "const:4:8"]]
- 009f9f74 ["CALL", null, ["callee:00851550:8"]]
+ 009f9fc8 ["INT_ADD", "register:40f0:8", ["const:9f9fc8:8", "const:4:8"]]
+ 009f9fc8 ["CALL", null, ["callee:00851550:8"]]
- 009f9f94 ["INT_ADD", "register:40f0:8", ["const:9f9f94:8", "const:4:8"]]
- 009f9f94 ["CALL", null, ["callee:00a832d0:8"]]
+ 009f9fe8 ["INT_ADD", "register:40f0:8", ["const:9f9fe8:8", "const:4:8"]]
+ 009f9fe8 ["CALL", null, ["callee:00a832d0:8"]]
~~~


<a id="compare-2efcbc91e9c1fecf53a974573c2705b6"></a>

### [`009fabcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fa/009fabcc.md) → [`009fac20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fa/009fac20.md) FUN_009fac20

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`007f36a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f36a8.md) [`009fdc50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdc50.md) [`00a012f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a012f4.md) [`00a058bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a058bc.md) · 呼出先 40件 [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 4件 [`007f3700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3700.md) [`009fdca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdca4.md) [`00a01348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01348.md) [`00a05910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05910.md) · 呼出先 40件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009fae08",
      "incomplete_value": false,
      "site": "009fae08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:c70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fadb4",
      "incomplete_value": false,
      "site": "009fadb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:ba0:8"
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
      "definition_site": "009fafe0",
      "incomplete_value": false,
      "site": "009fafe0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:cf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009faf8c",
      "incomplete_value": false,
      "site": "009faf8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:c20:8"
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009fb034",
      "incomplete_value": false,
      "site": "009fb034",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fafe0",
      "incomplete_value": false,
      "site": "009fafe0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:ca0:8"
          ]
        ]
      ]
    },
    "ordinal": 38,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009fac58",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009fac64",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009fac6c",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009fac58",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009fac64",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009fac6c",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fac24 ["INT_ADD", "register:40f0:8", ["const:9fac24:8", "const:4:8"]]
- 009fac24 ["CALL", null, ["callee:00c586e0:8"]]
+ 009fac78 ["INT_ADD", "register:40f0:8", ["const:9fac78:8", "const:4:8"]]
+ 009fac78 ["CALL", null, ["callee:00c586e0:8"]]
- 009fad3c ["INT_ADD", "register:40f0:8", ["const:9fad3c:8", "const:4:8"]]
- 009fad3c ["CALL", null, ["callee:0047e64c:8"]]
+ 009fad90 ["INT_ADD", "register:40f0:8", ["const:9fad90:8", "const:4:8"]]
+ 009fad90 ["CALL", null, ["callee:0047e64c:8"]]
- 009fae08 ["INT_ADD", "register:40f0:8", ["const:9fae08:8", "const:4:8"]]
- 009fae08 ["CALL", null, ["callee:008b98b0:8"]]
+ 009fae5c ["INT_ADD", "register:40f0:8", ["const:9fae5c:8", "const:4:8"]]
+ 009fae5c ["CALL", null, ["callee:008b98b0:8"]]
~~~


<a id="compare-4b0b1b880cf7e0d135ae03b526e5ef39"></a>

### [`009fb44c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fb/009fb44c.md) → [`009fb4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fb/009fb4a0.md) FUN_009fb4a0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 54件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`00470994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470994.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 54件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`004709d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004709d4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.64% / 新版 95.64%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 4件, `store_value` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009fb55c",
      "incomplete_value": true,
      "site": "009fb56c",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:490:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fb508",
      "incomplete_value": true,
      "site": "009fb518",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:450:8"
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
      "definition_site": "009fb560",
      "incomplete_value": true,
      "site": "009fb570",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:671:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fb50c",
      "incomplete_value": true,
      "site": "009fb51c",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:640:8"
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
      "definition_site": "009fb574",
      "incomplete_value": true,
      "site": "009fb574",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009fb520",
      "incomplete_value": true,
      "site": "009fb520",
      "value": [
        "LOAD",
        "8",
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
      "009fb55c",
      "READ",
      [
        "storage",
        "002c2450",
        null,
        null
      ]
    ],
    [
      "009fb560",
      "READ",
      [
        "storage",
        "002b5640",
        null,
        "string"
      ]
    ],
    [
      "009fb564",
      "READ",
      [
        "storage",
        "002b564f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009fb55c",
      "READ",
      [
        "storage",
        "002c2490",
        null,
        null
      ]
    ],
    [
      "009fb560",
      "READ",
      [
        "storage",
        "002b5671",
        null,
        "string"
      ]
    ],
    [
      "009fb564",
      "READ",
      [
        "storage",
        "002b5680",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fb5a4 ["INT_ADD", "register:40f0:8", ["const:9fb5a4:8", "const:4:8"]]
- 009fb5a4 ["CALL", null, ["callee:00a834bc:8"]]
+ 009fb5f8 ["INT_ADD", "register:40f0:8", ["const:9fb5f8:8", "const:4:8"]]
+ 009fb5f8 ["CALL", null, ["callee:00a834bc:8"]]
- 009fb5c4 ["INT_ADD", "register:40f0:8", ["const:9fb5c4:8", "const:4:8"]]
- 009fb5c4 ["CALL", null, ["callee:00c57f80:8"]]
+ 009fb618 ["INT_ADD", "register:40f0:8", ["const:9fb618:8", "const:4:8"]]
+ 009fb618 ["CALL", null, ["callee:00c57f80:8"]]
- 009fb5c8 ["INT_ADD", "register:40f0:8", ["const:9fb5c8:8", "const:4:8"]]
- 009fb5c8 ["CALL", null, ["callee:00851550:8"]]
+ 009fb61c ["INT_ADD", "register:40f0:8", ["const:9fb61c:8", "const:4:8"]]
+ 009fb61c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-6e007689f9bacd2ec4b9600c4cbc0a6d"></a>

### [`009fcd88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fc/009fcd88.md) → [`009fcddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fc/009fcddc.md) FUN_009fcddc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009fce00",
      "incomplete_value": false,
      "site": "009fce08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fcdac",
      "incomplete_value": false,
      "site": "009fcdb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:480:8"
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
      "009fce08",
      "DATA",
      [
        "storage",
        "00c8a480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fce08",
      "DATA",
      [
        "storage",
        "00c8a550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fcdac ["COPY", "tmp:0:8", ["const:480:8"]]
- 009fcdac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fcdac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fcdac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fce00 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 009fce00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fce00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fce00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009fcde4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009fcde4 ["INT_ADD", "register:40f0:8", ["const:9fcde4:8", "const:4:8"]]
- 009fcde4 ["CALLIND", null, ["register:0:8"]]
+ 009fce38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009fce38 ["INT_ADD", "register:40f0:8", ["const:9fce38:8", "const:4:8"]]
+ 009fce38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d44376e7e01b99098b113f5ed11097df"></a>

### [`009fd188`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fd188.md) → [`009fd1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd1dc.md) FUN_009fd1dc

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
      "definition_site": "009fd1f0",
      "incomplete_value": false,
      "site": "009fd1f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:5f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fd19c",
      "incomplete_value": false,
      "site": "009fd1a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:520:8"
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
      "009fd1f4",
      "DATA",
      [
        "storage",
        "00c8a520",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fd1f4",
      "DATA",
      [
        "storage",
        "00c8a5f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd194 ["INT_ADD", "register:40f0:8", ["const:9fd194:8", "const:4:8"]]
- 009fd194 ["CALL", null, ["callee:00c57f60:8"]]
+ 009fd1e8 ["INT_ADD", "register:40f0:8", ["const:9fd1e8:8", "const:4:8"]]
+ 009fd1e8 ["CALL", null, ["callee:00c57f60:8"]]
- 009fd19c ["COPY", "tmp:0:8", ["const:520:8"]]
- 009fd19c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fd19c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fd19c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fd1f0 ["COPY", "tmp:0:8", ["const:5f0:8"]]
+ 009fd1f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fd1f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fd1f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b60e0c8b4e8aa4009f5db7740f453563"></a>

### [`009fd1ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fd1ac.md) → [`009fd200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd200.md) FUN_009fd200

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
      "definition_site": "009fd204",
      "incomplete_value": false,
      "site": "009fd208",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:5f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fd1b0",
      "incomplete_value": false,
      "site": "009fd1b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:520:8"
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
      "009fd208",
      "DATA",
      [
        "storage",
        "00c8a520",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fd208",
      "DATA",
      [
        "storage",
        "00c8a5f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd1b0 ["COPY", "tmp:0:8", ["const:520:8"]]
- 009fd1b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fd1b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fd1b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fd204 ["COPY", "tmp:0:8", ["const:5f0:8"]]
+ 009fd204 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fd204 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fd204 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-18e610155280f669a04af5b670254270"></a>

### [`009fd238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fd238.md) → [`009fd28c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd28c.md) FUN_009fd28c

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
      "definition_site": "009fd2ac",
      "incomplete_value": false,
      "site": "009fd2b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:670:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fd258",
      "incomplete_value": false,
      "site": "009fd25c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:5a0:8"
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
      "009fd2b0",
      "DATA",
      [
        "storage",
        "00c8a5a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fd2b0",
      "DATA",
      [
        "storage",
        "00c8a670",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd24c ["INT_ADD", "register:40f0:8", ["const:9fd24c:8", "const:4:8"]]
- 009fd24c ["CALL", null, ["callee:00c57f60:8"]]
+ 009fd2a0 ["INT_ADD", "register:40f0:8", ["const:9fd2a0:8", "const:4:8"]]
+ 009fd2a0 ["CALL", null, ["callee:00c57f60:8"]]
- 009fd258 ["COPY", "tmp:0:8", ["const:5a0:8"]]
- 009fd258 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fd258 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fd258 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fd2ac ["COPY", "tmp:0:8", ["const:670:8"]]
+ 009fd2ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fd2ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fd2ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-250abb86439c4f788d311bd8a37e878a"></a>

### [`009fd270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fd270.md) → [`009fd2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd2c4.md) FUN_009fd2c4

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
      "definition_site": "009fd2c8",
      "incomplete_value": false,
      "site": "009fd2cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:670:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fd274",
      "incomplete_value": false,
      "site": "009fd278",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:5a0:8"
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
      "009fd2cc",
      "DATA",
      [
        "storage",
        "00c8a5a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fd2cc",
      "DATA",
      [
        "storage",
        "00c8a670",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd274 ["COPY", "tmp:0:8", ["const:5a0:8"]]
- 009fd274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fd274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fd274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fd2c8 ["COPY", "tmp:0:8", ["const:670:8"]]
+ 009fd2c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fd2c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fd2c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4ed7550a48ee2934e4d87b03d3bc10f9"></a>

### [`009fd290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fd290.md) → [`009fd2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd2e4.md) FUN_009fd2e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`006648a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006648a0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00859b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b4c.md) [`008b6a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6a5c.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.46% / 新版 99.46%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fd524",
      "value": [
        "leaf",
        "ram:adf288:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fd4d0",
      "value": [
        "leaf",
        "ram:adf218:8"
      ]
    },
    "ordinal": 23,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009fd524",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00adf218"
      ]
    ]
  ],
  "added": [
    [
      "009fd524",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00adf288"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd4d0 ["INT_ADD", "register:40f0:8", ["const:9fd4d0:8", "const:4:8"]]
- 009fd4d0 ["CALL", null, ["ram:adf218:8"]]
+ 009fd524 ["INT_ADD", "register:40f0:8", ["const:9fd524:8", "const:4:8"]]
+ 009fd524 ["CALL", null, ["ram:adf288:8"]]
- 009fd2e8 ["INT_ADD", "register:40f0:8", ["const:9fd2e8:8", "const:4:8"]]
- 009fd2e8 ["CALL", null, ["callee:008b92f0:8"]]
+ 009fd33c ["INT_ADD", "register:40f0:8", ["const:9fd33c:8", "const:4:8"]]
+ 009fd33c ["CALL", null, ["callee:008b92f0:8"]]
- 009fd2f4 ["INT_ADD", "register:40f0:8", ["const:9fd2f4:8", "const:4:8"]]
- 009fd2f4 ["CALL", null, ["callee:008b92f0:8"]]
+ 009fd348 ["INT_ADD", "register:40f0:8", ["const:9fd348:8", "const:4:8"]]
+ 009fd348 ["CALL", null, ["callee:008b92f0:8"]]
~~~


<a id="compare-750ed791c864eb52e6eeae4fa7ec302d"></a>

### [`009fd5d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fd5d4.md) → [`009fd628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd628.md) FUN_009fd628

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
      "definition_site": "009fd648",
      "incomplete_value": false,
      "site": "009fd64c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:6f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fd5f4",
      "incomplete_value": false,
      "site": "009fd5f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:620:8"
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
      "009fd64c",
      "DATA",
      [
        "storage",
        "00c8a620",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fd64c",
      "DATA",
      [
        "storage",
        "00c8a6f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd5e8 ["INT_ADD", "register:40f0:8", ["const:9fd5e8:8", "const:4:8"]]
- 009fd5e8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009fd63c ["INT_ADD", "register:40f0:8", ["const:9fd63c:8", "const:4:8"]]
+ 009fd63c ["CALL", null, ["callee:00c57f60:8"]]
- 009fd5f4 ["COPY", "tmp:0:8", ["const:620:8"]]
- 009fd5f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fd5f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fd5f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fd648 ["COPY", "tmp:0:8", ["const:6f0:8"]]
+ 009fd648 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fd648 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fd648 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3e2225fb35604b07e0959cf964224147"></a>

### [`009fd60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fd60c.md) → [`009fd660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd660.md) FUN_009fd660

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
      "definition_site": "009fd664",
      "incomplete_value": false,
      "site": "009fd668",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:6f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fd610",
      "incomplete_value": false,
      "site": "009fd614",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:620:8"
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
      "009fd668",
      "DATA",
      [
        "storage",
        "00c8a620",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fd668",
      "DATA",
      [
        "storage",
        "00c8a6f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd610 ["COPY", "tmp:0:8", ["const:620:8"]]
- 009fd610 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fd610 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fd610 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fd664 ["COPY", "tmp:0:8", ["const:6f0:8"]]
+ 009fd664 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fd664 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fd664 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9a008897183cfa813ef6d1b7e57c948b"></a>

### [`009fd62c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fd62c.md) → [`009fd680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd680.md) FUN_009fd680

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 18件 [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046965c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/0046965c.md) [`0046af18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af18.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md)
- 新版 呼出元 0件  · 呼出先 18件 [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`0046af58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af58.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.39% / 新版 98.39%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009fd6e8",
      "incomplete_value": true,
      "site": "009fd6e8",
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
      "definition_site": "009fd694",
      "incomplete_value": true,
      "site": "009fd694",
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009fd6f8",
      "incomplete_value": true,
      "site": "009fd700",
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
            "const:a60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fd6a4",
      "incomplete_value": true,
      "site": "009fd6ac",
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
            "const:990:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fd9f4",
      "value": [
        "leaf",
        "ram:9f79e4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fd9a0",
      "value": [
        "leaf",
        "ram:9f7990:8"
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
      "009fd6e4",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009fd6f0",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009fd6f8",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009fd6e4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009fd6f0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009fd6f8",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd6ac ["INT_ADD", "register:40f0:8", ["const:9fd6ac:8", "const:4:8"]]
- 009fd6ac ["CALL", null, ["callee:00c586e0:8"]]
+ 009fd700 ["INT_ADD", "register:40f0:8", ["const:9fd700:8", "const:4:8"]]
+ 009fd700 ["CALL", null, ["callee:00c586e0:8"]]
- 009fd9a0 ["INT_ADD", "register:40f0:8", ["const:9fd9a0:8", "const:4:8"]]
- 009fd9a0 ["CALL", null, ["ram:9f7990:8"]]
+ 009fd9f4 ["INT_ADD", "register:40f0:8", ["const:9fd9f4:8", "const:4:8"]]
+ 009fd9f4 ["CALL", null, ["ram:9f79e4:8"]]
- 009fd66c ["INT_ADD", "register:40f0:8", ["const:9fd66c:8", "const:4:8"]]
- 009fd66c ["CALL", null, ["callee:008b92e8:8"]]
+ 009fd6c0 ["INT_ADD", "register:40f0:8", ["const:9fd6c0:8", "const:4:8"]]
+ 009fd6c0 ["CALL", null, ["callee:008b92e8:8"]]
~~~


<a id="compare-6c026c0c6658a17520b57c9836819194"></a>

### [`009fdb30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdb30.md) → [`009fdb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdb84.md) FUN_009fdb84

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
      "definition_site": "009fdba8",
      "incomplete_value": false,
      "site": "009fdba8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fdb54",
      "incomplete_value": false,
      "site": "009fdb54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:6a0:8"
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
      "009fdba8",
      "DATA",
      [
        "storage",
        "00c8a6a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fdba8",
      "DATA",
      [
        "storage",
        "00c8a770",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fdb44 ["INT_ADD", "register:40f0:8", ["const:9fdb44:8", "const:4:8"]]
- 009fdb44 ["CALL", null, ["callee:00c57f60:8"]]
+ 009fdb98 ["INT_ADD", "register:40f0:8", ["const:9fdb98:8", "const:4:8"]]
+ 009fdb98 ["CALL", null, ["callee:00c57f60:8"]]
- 009fdb50 ["COPY", "tmp:0:8", ["const:6a0:8"]]
- 009fdb50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fdb50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fdb50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fdba4 ["COPY", "tmp:0:8", ["const:770:8"]]
+ 009fdba4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fdba4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fdba4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7ac1c2a0c3b9cc00200227802c6b32b8"></a>

### [`009fdb64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdb64.md) → [`009fdbb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdbb8.md) FUN_009fdbb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009fdbc4",
      "incomplete_value": true,
      "site": "009fdbc4",
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
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fdb70",
      "incomplete_value": true,
      "site": "009fdb70",
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
            "const:6a0:8"
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
      "009fdbc4",
      "DATA",
      [
        "storage",
        "00c8a6a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fdbc4",
      "DATA",
      [
        "storage",
        "00c8a770",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fdb6c ["COPY", "tmp:0:8", ["const:6a0:8"]]
- 009fdb6c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009fdb6c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009fdb6c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009fdbc0 ["COPY", "tmp:0:8", ["const:770:8"]]
+ 009fdbc0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009fdbc0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009fdbc0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e7f3db7b59e7bfffd93b6234edc2487b"></a>

### [`009fdb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdb80.md) → [`009fdbd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdbd4.md) FUN_009fdbd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "009fdbf4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fdba0",
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
      "site": "009fdc00",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fdbac",
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
      "009fdbf4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "009fdc00",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009fdbf4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009fdc00",
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
- 009fdba0 ["INT_ADD", "register:40f0:8", ["const:9fdba0:8", "const:4:8"]]
- 009fdba0 ["CALL", null, ["ram:47acf4:8"]]
+ 009fdbf4 ["INT_ADD", "register:40f0:8", ["const:9fdbf4:8", "const:4:8"]]
+ 009fdbf4 ["CALL", null, ["ram:47ad34:8"]]
- 009fdbac ["INT_ADD", "register:40f0:8", ["const:9fdbac:8", "const:4:8"]]
- 009fdbac ["CALL", null, ["ram:47acf4:8"]]
+ 009fdc00 ["INT_ADD", "register:40f0:8", ["const:9fdc00:8", "const:4:8"]]
+ 009fdc00 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-adb3bca21adc3e599bb79f2aef5195f5"></a>

### [`009fdc00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdc00.md) → [`009fdc54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdc54.md) FUN_009fdc54

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
      "definition_site": "009fdc78",
      "incomplete_value": false,
      "site": "009fdc78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fdc24",
      "incomplete_value": false,
      "site": "009fdc24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:720:8"
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
      "009fdc78",
      "DATA",
      [
        "storage",
        "00c8a720",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fdc78",
      "DATA",
      [
        "storage",
        "00c8a7f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fdc14 ["INT_ADD", "register:40f0:8", ["const:9fdc14:8", "const:4:8"]]
- 009fdc14 ["CALL", null, ["callee:00c57f60:8"]]
+ 009fdc68 ["INT_ADD", "register:40f0:8", ["const:9fdc68:8", "const:4:8"]]
+ 009fdc68 ["CALL", null, ["callee:00c57f60:8"]]
- 009fdc20 ["COPY", "tmp:0:8", ["const:720:8"]]
- 009fdc20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fdc20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fdc20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fdc74 ["COPY", "tmp:0:8", ["const:7f0:8"]]
+ 009fdc74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fdc74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fdc74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-84882a4116cf3d777785d2dff7a84eea"></a>

### [`009fdc34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdc34.md) → [`009fdc88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdc88.md) FUN_009fdc88

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
      "definition_site": "009fdc94",
      "incomplete_value": false,
      "site": "009fdc94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fdc40",
      "incomplete_value": false,
      "site": "009fdc40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:720:8"
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
      "009fdc94",
      "DATA",
      [
        "storage",
        "00c8a720",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fdc94",
      "DATA",
      [
        "storage",
        "00c8a7f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fdc3c ["COPY", "tmp:0:8", ["const:720:8"]]
- 009fdc3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009fdc3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009fdc3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009fdc90 ["COPY", "tmp:0:8", ["const:7f0:8"]]
+ 009fdc90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009fdc90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009fdc90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-457e8058f0200420c611061442e354ce"></a>

### [`009fdc50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdc50.md) → [`009fdca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdca4.md) FUN_009fdca4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`009fabcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fa/009fabcc.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009fac20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fa/009fac20.md)

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
      "site": "009fdcc4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fdc70",
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
      "site": "009fdcd0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fdc7c",
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
      "009fdcc4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "009fdcd0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009fdcc4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009fdcd0",
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
- 009fdc70 ["INT_ADD", "register:40f0:8", ["const:9fdc70:8", "const:4:8"]]
- 009fdc70 ["CALL", null, ["ram:47acf4:8"]]
+ 009fdcc4 ["INT_ADD", "register:40f0:8", ["const:9fdcc4:8", "const:4:8"]]
+ 009fdcc4 ["CALL", null, ["ram:47ad34:8"]]
- 009fdc7c ["INT_ADD", "register:40f0:8", ["const:9fdc7c:8", "const:4:8"]]
- 009fdc7c ["CALL", null, ["ram:47acf4:8"]]
+ 009fdcd0 ["INT_ADD", "register:40f0:8", ["const:9fdcd0:8", "const:4:8"]]
+ 009fdcd0 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-8002b85ccb64b7f0d7dc6a35b500f86e"></a>

### [`009ff1b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ff1b8.md) → [`009ff20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff20c.md) FUN_009ff20c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

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
      "definition_site": "009ff218",
      "incomplete_value": false,
      "site": "009ff224",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ff1c4",
      "incomplete_value": false,
      "site": "009ff1d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "009ff224",
      "DATA",
      [
        "storage",
        "00c8a7a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ff224",
      "DATA",
      [
        "storage",
        "00c8a870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ff1c4 ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 009ff1c4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009ff1c4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009ff1c4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009ff218 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 009ff218 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009ff218 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009ff218 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-7a9167cd2f924209a21256f0c7868124"></a>

### [`009ff1fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ff1fc.md) → [`009ff250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff250.md) FUN_009ff250

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ff268",
      "incomplete_value": false,
      "site": "009ff274",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ff214",
      "incomplete_value": false,
      "site": "009ff220",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "009ff274",
      "DATA",
      [
        "storage",
        "00c8a7a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ff274",
      "DATA",
      [
        "storage",
        "00c8a870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ff214 ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 009ff214 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ff214 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ff214 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ff268 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 009ff268 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ff268 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ff268 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009ff244 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ff244 ["INT_ADD", "register:40f0:8", ["const:9ff244:8", "const:4:8"]]
- 009ff244 ["CALLIND", null, ["register:0:8"]]
+ 009ff298 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ff298 ["INT_ADD", "register:40f0:8", ["const:9ff298:8", "const:4:8"]]
+ 009ff298 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ecec6775dea0774472055426d0d37f1f"></a>

### [`009ff258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ff258.md) → [`009ff2ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff2ac.md) FUN_009ff2ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ff2c8",
      "incomplete_value": false,
      "site": "009ff2d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ff274",
      "incomplete_value": false,
      "site": "009ff284",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "009ff2d8",
      "DATA",
      [
        "storage",
        "00c8a7a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ff2d8",
      "DATA",
      [
        "storage",
        "00c8a870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ff26c ["INT_ADD", "register:40f0:8", ["const:9ff26c:8", "const:4:8"]]
- 009ff26c ["CALL", null, ["callee:00c57f60:8"]]
+ 009ff2c0 ["INT_ADD", "register:40f0:8", ["const:9ff2c0:8", "const:4:8"]]
+ 009ff2c0 ["CALL", null, ["callee:00c57f60:8"]]
- 009ff274 ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 009ff274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ff274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ff274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ff2c8 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 009ff2c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ff2c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ff2c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009ff2ac ["COPY", "register:0:8", ["register:4040:8"]]
- 009ff2ac ["INT_ADD", "register:40f0:8", ["const:9ff2ac:8", "const:4:8"]]
- 009ff2ac ["CALLIND", null, ["register:0:8"]]
+ 009ff300 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ff300 ["INT_ADD", "register:40f0:8", ["const:9ff300:8", "const:4:8"]]
+ 009ff300 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0f164e12b65e04d41b315d386d7fce01"></a>

### [`009ff2f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ff2f8.md) → [`009ff34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff34c.md) FUN_009ff34c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ff35c",
      "incomplete_value": false,
      "site": "009ff364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ff308",
      "incomplete_value": false,
      "site": "009ff310",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "009ff364",
      "DATA",
      [
        "storage",
        "00c8a7a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ff364",
      "DATA",
      [
        "storage",
        "00c8a870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ff308 ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 009ff308 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ff308 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ff308 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ff35c ["COPY", "tmp:0:8", ["const:870:8"]]
+ 009ff35c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ff35c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ff35c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009ff344 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ff344 ["INT_ADD", "register:40f0:8", ["const:9ff344:8", "const:4:8"]]
- 009ff344 ["CALLIND", null, ["register:0:8"]]
+ 009ff398 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ff398 ["INT_ADD", "register:40f0:8", ["const:9ff398:8", "const:4:8"]]
+ 009ff398 ["CALLIND", null, ["register:0:8"]]
- 009ff36c ["COPY", "register:0:8", ["register:4040:8"]]
- 009ff36c ["INT_ADD", "register:40f0:8", ["const:9ff36c:8", "const:4:8"]]
- 009ff36c ["CALLIND", null, ["register:0:8"]]
+ 009ff3c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ff3c0 ["INT_ADD", "register:40f0:8", ["const:9ff3c0:8", "const:4:8"]]
+ 009ff3c0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e0405749524242495ca672a17206ff33"></a>

### [`009ff40c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ff40c.md) → [`009ff460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff460.md) FUN_009ff460

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 27件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 27件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.03% / 新版 94.03%

優先判定に残った影響 `call_target` 2件, `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ff5dc",
      "incomplete_value": true,
      "site": "009ff5ec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ec4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ff588",
      "incomplete_value": true,
      "site": "009ff598",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f18:8"
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
      "definition_site": "009ff5f0",
      "incomplete_value": true,
      "site": "009ff5f0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009ff59c",
      "incomplete_value": true,
      "site": "009ff59c",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ff5e4",
      "incomplete_value": true,
      "site": "009ff5f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009ff590",
      "incomplete_value": true,
      "site": "009ff5a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "009ff4b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "009ff4d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "009ff5dc",
      "READ",
      [
        "storage",
        "002bcf18",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ff4b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009ff4d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009ff5dc",
      "READ",
      [
        "storage",
        "002bcec4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ff45c ["INT_ADD", "register:40f0:8", ["const:9ff45c:8", "const:4:8"]]
- 009ff45c ["CALL", null, ["ram:47acf4:8"]]
+ 009ff4b0 ["INT_ADD", "register:40f0:8", ["const:9ff4b0:8", "const:4:8"]]
+ 009ff4b0 ["CALL", null, ["ram:47ad34:8"]]
- 009ff484 ["INT_ADD", "register:40f0:8", ["const:9ff484:8", "const:4:8"]]
- 009ff484 ["CALL", null, ["ram:47acf4:8"]]
+ 009ff4d8 ["INT_ADD", "register:40f0:8", ["const:9ff4d8:8", "const:4:8"]]
+ 009ff4d8 ["CALL", null, ["ram:47ad34:8"]]
- 009ff4d8 ["INT_ADD", "register:40f0:8", ["const:9ff4d8:8", "const:4:8"]]
- 009ff4d8 ["CALL", null, ["callee:008b97ec:8"]]
+ 009ff52c ["INT_ADD", "register:40f0:8", ["const:9ff52c:8", "const:4:8"]]
+ 009ff52c ["CALL", null, ["callee:008b97ec:8"]]
~~~


<a id="compare-56a25fc5ac836d23c399e1ed211fe58b"></a>

### [`009ffdb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ffdb4.md) → [`009ffe08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ffe08.md) FUN_009ffe08

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
      "definition_site": "009ffe14",
      "incomplete_value": false,
      "site": "009ffe20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ffdc0",
      "incomplete_value": false,
      "site": "009ffdcc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:810:8"
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
      "009ffe20",
      "DATA",
      [
        "storage",
        "00c8a810",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ffe20",
      "DATA",
      [
        "storage",
        "00c8a8e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ffdc0 ["COPY", "tmp:0:8", ["const:810:8"]]
- 009ffdc0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009ffdc0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009ffdc0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009ffe14 ["COPY", "tmp:0:8", ["const:8e0:8"]]
+ 009ffe14 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009ffe14 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009ffe14 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-233b96f0eea6d2080f0cc629c012698d"></a>

### [`009ffe54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ffe54.md) → [`009ffea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ffea8.md) FUN_009ffea8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ffed4",
      "incomplete_value": false,
      "site": "009ffed4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ffe80",
      "incomplete_value": false,
      "site": "009ffe80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:810:8"
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
      "009ffed4",
      "DATA",
      [
        "storage",
        "00c8a810",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ffed4",
      "DATA",
      [
        "storage",
        "00c8a8e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ffe68 ["INT_ADD", "register:40f0:8", ["const:9ffe68:8", "const:4:8"]]
- 009ffe68 ["CALL", null, ["callee:00c57f60:8"]]
+ 009ffebc ["INT_ADD", "register:40f0:8", ["const:9ffebc:8", "const:4:8"]]
+ 009ffebc ["CALL", null, ["callee:00c57f60:8"]]
- 009ffe78 ["COPY", "tmp:0:8", ["const:810:8"]]
- 009ffe78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ffe78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ffe78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ffecc ["COPY", "tmp:0:8", ["const:8e0:8"]]
+ 009ffecc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ffecc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ffecc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009ffe9c ["COPY", "register:0:8", ["register:4040:8"]]
- 009ffe9c ["INT_ADD", "register:40f0:8", ["const:9ffe9c:8", "const:4:8"]]
- 009ffe9c ["CALLIND", null, ["register:0:8"]]
+ 009ffef0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ffef0 ["INT_ADD", "register:40f0:8", ["const:9ffef0:8", "const:4:8"]]
+ 009ffef0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e40c77cb3cb8dfda5faac504311201ac"></a>

### [`009ffeec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ffeec.md) → [`009fff40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009fff40.md) FUN_009fff40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009fff60",
      "incomplete_value": false,
      "site": "009fff60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fff0c",
      "incomplete_value": false,
      "site": "009fff0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:810:8"
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
      "009fff60",
      "DATA",
      [
        "storage",
        "00c8a810",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fff60",
      "DATA",
      [
        "storage",
        "00c8a8e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fff08 ["COPY", "tmp:0:8", ["const:810:8"]]
- 009fff08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fff08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fff08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fff5c ["COPY", "tmp:0:8", ["const:8e0:8"]]
+ 009fff5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fff5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fff5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009fff28 ["COPY", "register:0:8", ["register:4040:8"]]
- 009fff28 ["INT_ADD", "register:40f0:8", ["const:9fff28:8", "const:4:8"]]
- 009fff28 ["CALLIND", null, ["register:0:8"]]
+ 009fff7c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009fff7c ["INT_ADD", "register:40f0:8", ["const:9fff7c:8", "const:4:8"]]
+ 009fff7c ["CALLIND", null, ["register:0:8"]]
- 009fff4c ["COPY", "register:0:8", ["register:4040:8"]]
- 009fff4c ["INT_ADD", "register:40f0:8", ["const:9fff4c:8", "const:4:8"]]
- 009fff4c ["CALLIND", null, ["register:0:8"]]
+ 009fffa0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009fffa0 ["INT_ADD", "register:40f0:8", ["const:9fffa0:8", "const:4:8"]]
+ 009fffa0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6c3f0574f4688142e456eaf1a61613d9"></a>

### [`009ffff4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ffff4.md) → [`00a00048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00048.md) FUN_00a00048

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.59% / 新版 98.59%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a00088",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a00034",
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
      "00a00088",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a00088",
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
- 00a00034 ["INT_ADD", "register:40f0:8", ["const:a00034:8", "const:4:8"]]
- 00a00034 ["CALL", null, ["ram:47acf4:8"]]
+ 00a00088 ["INT_ADD", "register:40f0:8", ["const:a00088:8", "const:4:8"]]
+ 00a00088 ["CALL", null, ["ram:47ad34:8"]]
- 00a00040 ["INT_ADD", "register:40f0:8", ["const:a00040:8", "const:4:8"]]
- 00a00040 ["CALL", null, ["callee:0047ce14:8"]]
+ 00a00094 ["INT_ADD", "register:40f0:8", ["const:a00094:8", "const:4:8"]]
+ 00a00094 ["CALL", null, ["callee:0047ce14:8"]]
- 00a0009c ["COPY", "register:0:8", ["register:4040:8"]]
- 00a0009c ["INT_ADD", "register:40f0:8", ["const:a0009c:8", "const:4:8"]]
- 00a0009c ["CALLIND", null, ["register:0:8"]]
+ 00a000f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a000f0 ["INT_ADD", "register:40f0:8", ["const:a000f0:8", "const:4:8"]]
+ 00a000f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1f4d3212acbb5e20abbe140ab4c1be9e"></a>

### [`00a0013c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a00/00a0013c.md) → [`00a00190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00190.md) FUN_00a00190

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a001b8",
      "incomplete_value": false,
      "site": "00a001b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:960:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a00164",
      "incomplete_value": false,
      "site": "00a00164",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:890:8"
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
      "00a001b8",
      "DATA",
      [
        "storage",
        "00c8a890",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a001b8",
      "DATA",
      [
        "storage",
        "00c8a960",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a00150 ["INT_ADD", "register:40f0:8", ["const:a00150:8", "const:4:8"]]
- 00a00150 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a001a4 ["INT_ADD", "register:40f0:8", ["const:a001a4:8", "const:4:8"]]
+ 00a001a4 ["CALL", null, ["callee:00c57f60:8"]]
- 00a00160 ["COPY", "tmp:0:8", ["const:890:8"]]
- 00a00160 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a00160 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a00160 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a001b4 ["COPY", "tmp:0:8", ["const:960:8"]]
+ 00a001b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a001b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a001b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2b9be70ab9f49f0dc97bc29377ab4f11"></a>

### [`00a00178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a00/00a00178.md) → [`00a001cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a001cc.md) FUN_00a001cc

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
      "definition_site": "00a001d0",
      "incomplete_value": false,
      "site": "00a001d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:960:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a0017c",
      "incomplete_value": false,
      "site": "00a00180",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:890:8"
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
      "00a001d4",
      "DATA",
      [
        "storage",
        "00c8a890",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a001d4",
      "DATA",
      [
        "storage",
        "00c8a960",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0017c ["COPY", "tmp:0:8", ["const:890:8"]]
- 00a0017c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a0017c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a0017c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a001d0 ["COPY", "tmp:0:8", ["const:960:8"]]
+ 00a001d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a001d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a001d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a2854699c10c05865379655c8aafed11"></a>

### [`00a0033c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a00/00a0033c.md) → [`00a00390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00390.md) FUN_00a00390

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
      "definition_site": "00a00394",
      "incomplete_value": false,
      "site": "00a00398",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a00340",
      "incomplete_value": false,
      "site": "00a00344",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:920:8"
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
      "00a00398",
      "DATA",
      [
        "storage",
        "00c8a920",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a00398",
      "DATA",
      [
        "storage",
        "00c8a9f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a00340 ["COPY", "tmp:0:8", ["const:920:8"]]
- 00a00340 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a00340 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a00340 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a00394 ["COPY", "tmp:0:8", ["const:9f0:8"]]
+ 00a00394 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00394 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00394 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-16924f17df48e56dfb97f81389d3d5a1"></a>

### [`00a0035c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a00/00a0035c.md) → [`00a003b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a003b0.md) FUN_00a003b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`006648a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006648a0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00859b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b4c.md) [`008b6a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6a5c.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.54% / 新版 99.54%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a00640",
      "value": [
        "leaf",
        "ram:adf288:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a005ec",
      "value": [
        "leaf",
        "ram:adf218:8"
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
      "00a00640",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00adf218"
      ]
    ]
  ],
  "added": [
    [
      "00a00640",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00adf288"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a005ec ["INT_ADD", "register:40f0:8", ["const:a005ec:8", "const:4:8"]]
- 00a005ec ["CALL", null, ["ram:adf218:8"]]
+ 00a00640 ["INT_ADD", "register:40f0:8", ["const:a00640:8", "const:4:8"]]
+ 00a00640 ["CALL", null, ["ram:adf288:8"]]
- 00a00640 ["INT_ADD", "register:40f0:8", ["const:a00640:8", "const:4:8"]]
- 00a00640 ["CALL", null, ["callee:00851550:8"]]
+ 00a00694 ["INT_ADD", "register:40f0:8", ["const:a00694:8", "const:4:8"]]
+ 00a00694 ["CALL", null, ["callee:00851550:8"]]
- 00a00394 ["INT_ADD", "register:40f0:8", ["const:a00394:8", "const:4:8"]]
- 00a00394 ["CALL", null, ["callee:008b92e8:8"]]
+ 00a003e8 ["INT_ADD", "register:40f0:8", ["const:a003e8:8", "const:4:8"]]
+ 00a003e8 ["CALL", null, ["callee:008b92e8:8"]]
~~~


<a id="compare-1b90f24ed9f00137472d11f065883e5d"></a>

### [`00a00724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a00/00a00724.md) → [`00a00778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00778.md) FUN_00a00778

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
      "definition_site": "00a00798",
      "incomplete_value": false,
      "site": "00a0079c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a00744",
      "incomplete_value": false,
      "site": "00a00748",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
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
      "00a0079c",
      "DATA",
      [
        "storage",
        "00c8a9a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a0079c",
      "DATA",
      [
        "storage",
        "00c8aa70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a00738 ["INT_ADD", "register:40f0:8", ["const:a00738:8", "const:4:8"]]
- 00a00738 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a0078c ["INT_ADD", "register:40f0:8", ["const:a0078c:8", "const:4:8"]]
+ 00a0078c ["CALL", null, ["callee:00c57f60:8"]]
- 00a00744 ["COPY", "tmp:0:8", ["const:9a0:8"]]
- 00a00744 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a00744 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a00744 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a00798 ["COPY", "tmp:0:8", ["const:a70:8"]]
+ 00a00798 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00798 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00798 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-067365eb8a62f2107a9ff62337fad1b9"></a>

### [`00a0075c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a00/00a0075c.md) → [`00a007b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a007b0.md) FUN_00a007b0

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
      "definition_site": "00a007b4",
      "incomplete_value": false,
      "site": "00a007b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a00760",
      "incomplete_value": false,
      "site": "00a00764",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
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
      "00a007b8",
      "DATA",
      [
        "storage",
        "00c8a9a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a007b8",
      "DATA",
      [
        "storage",
        "00c8aa70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a00760 ["COPY", "tmp:0:8", ["const:9a0:8"]]
- 00a00760 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a00760 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a00760 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a007b4 ["COPY", "tmp:0:8", ["const:a70:8"]]
+ 00a007b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a007b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a007b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2286950b3139c0e9c4d6cf2d9b5885d7"></a>

### [`00a0077c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a00/00a0077c.md) → [`00a007d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a007d0.md) FUN_00a007d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 24件 [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046965c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/0046965c.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046af18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af18.md)
- 新版 呼出元 0件  · 呼出先 24件 [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046af58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af58.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 98.35% / 新版 98.35%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 4件, `call_target` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00a00834",
      "incomplete_value": true,
      "site": "00a00834",
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
      "definition_site": "00a007e0",
      "incomplete_value": true,
      "site": "00a007e0",
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00a00874",
      "incomplete_value": true,
      "site": "00a00874",
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
      "definition_site": "00a00820",
      "incomplete_value": true,
      "site": "00a00820",
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
      "definition_site": "00a0083c",
      "incomplete_value": false,
      "site": "00a0084c",
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
      "definition_site": "00a007e8",
      "incomplete_value": false,
      "site": "00a007f8",
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
      "00a00830",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00a0083c",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a00844",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00a00830",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00a0083c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a00844",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a007cc ["INT_ADD", "register:40f0:8", ["const:a007cc:8", "const:4:8"]]
- 00a007cc ["CALL", null, ["callee:008b92e8:8"]]
+ 00a00820 ["INT_ADD", "register:40f0:8", ["const:a00820:8", "const:4:8"]]
+ 00a00820 ["CALL", null, ["callee:008b92e8:8"]]
- 00a007f8 ["INT_ADD", "register:40f0:8", ["const:a007f8:8", "const:4:8"]]
- 00a007f8 ["CALL", null, ["callee:00c586e0:8"]]
+ 00a0084c ["INT_ADD", "register:40f0:8", ["const:a0084c:8", "const:4:8"]]
+ 00a0084c ["CALL", null, ["callee:00c586e0:8"]]
- 00a00838 ["INT_ADD", "register:40f0:8", ["const:a00838:8", "const:4:8"]]
- 00a00838 ["CALL", null, ["callee:00c586e0:8"]]
+ 00a0088c ["INT_ADD", "register:40f0:8", ["const:a0088c:8", "const:4:8"]]
+ 00a0088c ["CALL", null, ["callee:00c586e0:8"]]
~~~


<a id="compare-1a8ee386d5ead142f8bbbf74d4aa990d"></a>

### [`00a00e4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a00/00a00e4c.md) → [`00a00ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00ea0.md) FUN_00a00ea0

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
      "definition_site": "00a00ec4",
      "incomplete_value": false,
      "site": "00a00ec4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:af0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a00e70",
      "incomplete_value": false,
      "site": "00a00e70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:a20:8"
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
      "00a00ec4",
      "DATA",
      [
        "storage",
        "00c8aa20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a00ec4",
      "DATA",
      [
        "storage",
        "00c8aaf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a00e60 ["INT_ADD", "register:40f0:8", ["const:a00e60:8", "const:4:8"]]
- 00a00e60 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a00eb4 ["INT_ADD", "register:40f0:8", ["const:a00eb4:8", "const:4:8"]]
+ 00a00eb4 ["CALL", null, ["callee:00c57f60:8"]]
- 00a00e6c ["COPY", "tmp:0:8", ["const:a20:8"]]
- 00a00e6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a00e6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a00e6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a00ec0 ["COPY", "tmp:0:8", ["const:af0:8"]]
+ 00a00ec0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00ec0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00ec0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-234952b207edd50b60108aefefaeaab3"></a>

### [`00a00e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a00/00a00e80.md) → [`00a00ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00ed4.md) FUN_00a00ed4

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
      "definition_site": "00a00ee0",
      "incomplete_value": false,
      "site": "00a00ee0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:af0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a00e8c",
      "incomplete_value": false,
      "site": "00a00e8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:a20:8"
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
      "00a00ee0",
      "DATA",
      [
        "storage",
        "00c8aa20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a00ee0",
      "DATA",
      [
        "storage",
        "00c8aaf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a00e88 ["COPY", "tmp:0:8", ["const:a20:8"]]
- 00a00e88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a00e88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a00e88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a00edc ["COPY", "tmp:0:8", ["const:af0:8"]]
+ 00a00edc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a00edc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a00edc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-279731f8bf55472badd6c2ed12e577b4"></a>

### [`00a00e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a00/00a00e9c.md) → [`00a00ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00ef0.md) FUN_00a00ef0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 21件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006648a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006648a0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md)
- 新版 呼出元 0件  · 呼出先 21件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.85% / 新版 98.85%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a00f40",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a00eec",
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a00f5c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a00f08",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00a00f40",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a00f5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a00f40",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a00f5c",
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
- 00a00eec ["INT_ADD", "register:40f0:8", ["const:a00eec:8", "const:4:8"]]
- 00a00eec ["CALL", null, ["ram:47acf4:8"]]
+ 00a00f40 ["INT_ADD", "register:40f0:8", ["const:a00f40:8", "const:4:8"]]
+ 00a00f40 ["CALL", null, ["ram:47ad34:8"]]
- 00a00f08 ["INT_ADD", "register:40f0:8", ["const:a00f08:8", "const:4:8"]]
- 00a00f08 ["CALL", null, ["ram:47acf4:8"]]
+ 00a00f5c ["INT_ADD", "register:40f0:8", ["const:a00f5c:8", "const:4:8"]]
+ 00a00f5c ["CALL", null, ["ram:47ad34:8"]]
- 00a00ed0 ["INT_ADD", "register:40f0:8", ["const:a00ed0:8", "const:4:8"]]
- 00a00ed0 ["CALL", null, ["callee:008b6fa0:8"]]
+ 00a00f24 ["INT_ADD", "register:40f0:8", ["const:a00f24:8", "const:4:8"]]
+ 00a00f24 ["CALL", null, ["callee:008b6fa0:8"]]
~~~


<a id="compare-9ed756404f639d14aa367d6b119d3b54"></a>

### [`00a011b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a011b0.md) → [`00a01204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01204.md) FUN_00a01204

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
      "definition_site": "00a01228",
      "incomplete_value": false,
      "site": "00a01228",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a011d4",
      "incomplete_value": false,
      "site": "00a011d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
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
      "00a01228",
      "DATA",
      [
        "storage",
        "00c8aaa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a01228",
      "DATA",
      [
        "storage",
        "00c8ab70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a011c4 ["INT_ADD", "register:40f0:8", ["const:a011c4:8", "const:4:8"]]
- 00a011c4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a01218 ["INT_ADD", "register:40f0:8", ["const:a01218:8", "const:4:8"]]
+ 00a01218 ["CALL", null, ["callee:00c57f60:8"]]
- 00a011d0 ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 00a011d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a011d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a011d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a01224 ["COPY", "tmp:0:8", ["const:b70:8"]]
+ 00a01224 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01224 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01224 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-73452b88a90cf082e62124c68ef587ed"></a>

### [`00a011e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a011e4.md) → [`00a01238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01238.md) FUN_00a01238

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
      "definition_site": "00a01244",
      "incomplete_value": false,
      "site": "00a01244",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a011f0",
      "incomplete_value": false,
      "site": "00a011f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
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
      "00a01244",
      "DATA",
      [
        "storage",
        "00c8aaa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a01244",
      "DATA",
      [
        "storage",
        "00c8ab70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a011ec ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 00a011ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a011ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a011ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a01240 ["COPY", "tmp:0:8", ["const:b70:8"]]
+ 00a01240 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a01240 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a01240 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6970997227757b27ec364efc678dcac0"></a>

### [`00a01200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a01200.md) → [`00a01254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01254.md) FUN_00a01254

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6f48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f48.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa0.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

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
      "site": "00a0128c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a01238",
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a012a4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a01250",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00a0128c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a012a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a0128c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a012a4",
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
- 00a01238 ["INT_ADD", "register:40f0:8", ["const:a01238:8", "const:4:8"]]
- 00a01238 ["CALL", null, ["ram:47acf4:8"]]
+ 00a0128c ["INT_ADD", "register:40f0:8", ["const:a0128c:8", "const:4:8"]]
+ 00a0128c ["CALL", null, ["ram:47ad34:8"]]
- 00a01250 ["INT_ADD", "register:40f0:8", ["const:a01250:8", "const:4:8"]]
- 00a01250 ["CALL", null, ["ram:47acf4:8"]]
+ 00a012a4 ["INT_ADD", "register:40f0:8", ["const:a012a4:8", "const:4:8"]]
+ 00a012a4 ["CALL", null, ["ram:47ad34:8"]]
- 00a0121c ["INT_ADD", "register:40f0:8", ["const:a0121c:8", "const:4:8"]]
- 00a0121c ["CALL", null, ["callee:008b6fa0:8"]]
+ 00a01270 ["INT_ADD", "register:40f0:8", ["const:a01270:8", "const:4:8"]]
+ 00a01270 ["CALL", null, ["callee:008b6fa0:8"]]
~~~


<a id="compare-b654075118231d70689105e3f1520fcd"></a>

### [`00a012a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a012a4.md) → [`00a012f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a012f8.md) FUN_00a012f8

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
      "definition_site": "00a0131c",
      "incomplete_value": false,
      "site": "00a0131c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a012c8",
      "incomplete_value": false,
      "site": "00a012c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:b20:8"
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
      "00a0131c",
      "DATA",
      [
        "storage",
        "00c8ab20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a0131c",
      "DATA",
      [
        "storage",
        "00c8abf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a012b8 ["INT_ADD", "register:40f0:8", ["const:a012b8:8", "const:4:8"]]
- 00a012b8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a0130c ["INT_ADD", "register:40f0:8", ["const:a0130c:8", "const:4:8"]]
+ 00a0130c ["CALL", null, ["callee:00c57f60:8"]]
- 00a012c4 ["COPY", "tmp:0:8", ["const:b20:8"]]
- 00a012c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a012c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a012c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a01318 ["COPY", "tmp:0:8", ["const:bf0:8"]]
+ 00a01318 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01318 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01318 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f75cb6c82c24ee590fd0647e62ccef3f"></a>

### [`00a012d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a012d8.md) → [`00a0132c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a0132c.md) FUN_00a0132c

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
      "definition_site": "00a01338",
      "incomplete_value": false,
      "site": "00a01338",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a012e4",
      "incomplete_value": false,
      "site": "00a012e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:b20:8"
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
      "00a01338",
      "DATA",
      [
        "storage",
        "00c8ab20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a01338",
      "DATA",
      [
        "storage",
        "00c8abf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a012e0 ["COPY", "tmp:0:8", ["const:b20:8"]]
- 00a012e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a012e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a012e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a01334 ["COPY", "tmp:0:8", ["const:bf0:8"]]
+ 00a01334 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a01334 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a01334 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-419863f86387df8fe340213784e22af2"></a>

### [`00a012f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a012f4.md) → [`00a01348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01348.md) FUN_00a01348

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`009fabcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fa/009fabcc.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009fac20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fa/009fac20.md)

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
      "site": "00a01368",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a01314",
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
      "site": "00a01374",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a01320",
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
      "00a01368",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a01374",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a01368",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a01374",
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
- 00a01314 ["INT_ADD", "register:40f0:8", ["const:a01314:8", "const:4:8"]]
- 00a01314 ["CALL", null, ["ram:47acf4:8"]]
+ 00a01368 ["INT_ADD", "register:40f0:8", ["const:a01368:8", "const:4:8"]]
+ 00a01368 ["CALL", null, ["ram:47ad34:8"]]
- 00a01320 ["INT_ADD", "register:40f0:8", ["const:a01320:8", "const:4:8"]]
- 00a01320 ["CALL", null, ["ram:47acf4:8"]]
+ 00a01374 ["INT_ADD", "register:40f0:8", ["const:a01374:8", "const:4:8"]]
+ 00a01374 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-29a0877a802109a3f77cb9423e0e611f"></a>

### [`00a01374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a01374.md) → [`00a013c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a013c8.md) FUN_00a013c8

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
      "definition_site": "00a013dc",
      "incomplete_value": false,
      "site": "00a013e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:c70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a01388",
      "incomplete_value": false,
      "site": "00a0138c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:ba0:8"
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
      "00a013e0",
      "DATA",
      [
        "storage",
        "00c8aba0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a013e0",
      "DATA",
      [
        "storage",
        "00c8ac70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a01380 ["INT_ADD", "register:40f0:8", ["const:a01380:8", "const:4:8"]]
- 00a01380 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a013d4 ["INT_ADD", "register:40f0:8", ["const:a013d4:8", "const:4:8"]]
+ 00a013d4 ["CALL", null, ["callee:00c57f60:8"]]
- 00a01388 ["COPY", "tmp:0:8", ["const:ba0:8"]]
- 00a01388 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a01388 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a01388 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a013dc ["COPY", "tmp:0:8", ["const:c70:8"]]
+ 00a013dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a013dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a013dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dfcd44bf5f7792b05b06455e9ade8994"></a>

### [`00a01398`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a01398.md) → [`00a013ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a013ec.md) FUN_00a013ec

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
      "definition_site": "00a013f0",
      "incomplete_value": false,
      "site": "00a013f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:c70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a0139c",
      "incomplete_value": false,
      "site": "00a013a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:ba0:8"
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
      "00a013f4",
      "DATA",
      [
        "storage",
        "00c8aba0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a013f4",
      "DATA",
      [
        "storage",
        "00c8ac70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0139c ["COPY", "tmp:0:8", ["const:ba0:8"]]
- 00a0139c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a0139c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a0139c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a013f0 ["COPY", "tmp:0:8", ["const:c70:8"]]
+ 00a013f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a013f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a013f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-77d85ef8be1691dc4354f686974ca21f"></a>

### [`00a013b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a013b0.md) → [`00a01404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01404.md) FUN_00a01404

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b7948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7948.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.67% / 新版 97.67%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a0142c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a013d8",
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
      "00a0142c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a0142c",
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
- 00a013d8 ["INT_ADD", "register:40f0:8", ["const:a013d8:8", "const:4:8"]]
- 00a013d8 ["CALL", null, ["ram:47acf4:8"]]
+ 00a0142c ["INT_ADD", "register:40f0:8", ["const:a0142c:8", "const:4:8"]]
+ 00a0142c ["CALL", null, ["ram:47ad34:8"]]
- 00a013e4 ["INT_ADD", "register:40f0:8", ["const:a013e4:8", "const:4:8"]]
- 00a013e4 ["CALL", null, ["callee:0047ce14:8"]]
+ 00a01438 ["INT_ADD", "register:40f0:8", ["const:a01438:8", "const:4:8"]]
+ 00a01438 ["CALL", null, ["callee:0047ce14:8"]]
- 00a01400 ["INT_ADD", "register:40f0:8", ["const:a01400:8", "const:4:8"]]
- 00a01400 ["CALL", null, ["callee:00851550:8"]]
+ 00a01454 ["INT_ADD", "register:40f0:8", ["const:a01454:8", "const:4:8"]]
+ 00a01454 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-84e60b0b073bd1b311c18dd1f25ee6ec"></a>

### [`00a01488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a01488.md) → [`00a014dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a014dc.md) FUN_00a014dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a01500",
      "incomplete_value": true,
      "site": "00a01504",
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
            "const:cf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a014ac",
      "incomplete_value": true,
      "site": "00a014b0",
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
            "const:c20:8"
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
      "00a01504",
      "DATA",
      [
        "storage",
        "00c8ac20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a01504",
      "DATA",
      [
        "storage",
        "00c8acf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0149c ["INT_ADD", "register:40f0:8", ["const:a0149c:8", "const:4:8"]]
- 00a0149c ["CALL", null, ["callee:00c57f60:8"]]
+ 00a014f0 ["INT_ADD", "register:40f0:8", ["const:a014f0:8", "const:4:8"]]
+ 00a014f0 ["CALL", null, ["callee:00c57f60:8"]]
- 00a014ac ["COPY", "tmp:0:8", ["const:c20:8"]]
- 00a014ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a014ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a014ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a01500 ["COPY", "tmp:0:8", ["const:cf0:8"]]
+ 00a01500 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01500 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01500 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4c5e5b25a806cc5ab7bee452c206a94f"></a>

### [`00a014c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a014c8.md) → [`00a0151c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a0151c.md) FUN_00a0151c

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
      "definition_site": "00a01520",
      "incomplete_value": false,
      "site": "00a01524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:cf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a014cc",
      "incomplete_value": false,
      "site": "00a014d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:c20:8"
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
      "00a01524",
      "DATA",
      [
        "storage",
        "00c8ac20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a01524",
      "DATA",
      [
        "storage",
        "00c8acf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a014cc ["COPY", "tmp:0:8", ["const:c20:8"]]
- 00a014cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a014cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a014cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a01520 ["COPY", "tmp:0:8", ["const:cf0:8"]]
+ 00a01520 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01520 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01520 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fb886bc62ceecb41bd4f897dcfb8c37c"></a>

### [`00a014f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a01/00a014f0.md) → [`00a01544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01544.md) FUN_00a01544

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 33件 [`0046da48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046da48.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00493998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493998.md)
- 新版 呼出元 0件  · 呼出先 33件 [`0046da88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da88.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004939d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939d8.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.03% / 新版 98.03%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a01be8",
      "incomplete_value": true,
      "site": "00a01be8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:67d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a01b94",
      "incomplete_value": true,
      "site": "00a01b94",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:63d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 47,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a01bec",
      "incomplete_value": true,
      "site": "00a01bec",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00a01b98",
      "incomplete_value": true,
      "site": "00a01b98",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 48,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a01790",
      "incomplete_value": false,
      "site": "00a0179c",
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
            "const:76d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a0173c",
      "incomplete_value": false,
      "site": "00a01748",
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
            "const:7ba:8"
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a015a0",
      "DATA",
      [
        "storage",
        "00436bd4",
        null,
        "byte[59]"
      ]
    ],
    [
      "00a015b8",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[59]"
      ]
    ],
    [
      "00a015c8",
      "DATA",
      [
        "storage",
        "00436bc8",
        null,
        "byte[59]"
      ]
    ]
  ],
  "added": [
    [
      "00a015a0",
      "DATA",
      [
        "storage",
        "00436bd4",
        null,
        "byte[47]"
      ]
    ],
    [
      "00a015b8",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[47]"
      ]
    ],
    [
      "00a015c8",
      "DATA",
      [
        "storage",
        "00436bc8",
        null,
        "byte[47]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a016f4 ["INT_ADD", "register:40f0:8", ["const:a016f4:8", "const:4:8"]]
- 00a016f4 ["CALL", null, ["callee:00851550:8"]]
+ 00a01748 ["INT_ADD", "register:40f0:8", ["const:a01748:8", "const:4:8"]]
+ 00a01748 ["CALL", null, ["callee:00851550:8"]]
- 00a01748 ["INT_ADD", "register:40f0:8", ["const:a01748:8", "const:4:8"]]
- 00a01748 ["CALL", null, ["callee:00c58030:8"]]
+ 00a0179c ["INT_ADD", "register:40f0:8", ["const:a0179c:8", "const:4:8"]]
+ 00a0179c ["CALL", null, ["callee:00c58030:8"]]
- 00a01780 ["INT_ADD", "register:40f0:8", ["const:a01780:8", "const:4:8"]]
- 00a01780 ["CALL", null, ["callee:00c58030:8"]]
+ 00a017d4 ["INT_ADD", "register:40f0:8", ["const:a017d4:8", "const:4:8"]]
+ 00a017d4 ["CALL", null, ["callee:00c58030:8"]]
~~~


<a id="compare-71b74087b7e92db06c55e02587935142"></a>

### [`00a02280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a02280.md) → [`00a022d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a022d4.md) FUN_00a022d4

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
      "definition_site": "00a022f4",
      "incomplete_value": false,
      "site": "00a022f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a022a0",
      "incomplete_value": false,
      "site": "00a022a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:ca0:8"
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
      "00a022f8",
      "DATA",
      [
        "storage",
        "00c8aca0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a022f8",
      "DATA",
      [
        "storage",
        "00c8ad70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a02294 ["INT_ADD", "register:40f0:8", ["const:a02294:8", "const:4:8"]]
- 00a02294 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a022e8 ["INT_ADD", "register:40f0:8", ["const:a022e8:8", "const:4:8"]]
+ 00a022e8 ["CALL", null, ["callee:00c57f60:8"]]
- 00a022a0 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00a022a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a022a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a022a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a022f4 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 00a022f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a022f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a022f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-190e27df83fa883b29968145b8ec72f1"></a>

### [`00a022b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a022b8.md) → [`00a0230c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a0230c.md) FUN_00a0230c

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
      "definition_site": "00a02310",
      "incomplete_value": false,
      "site": "00a02314",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a022bc",
      "incomplete_value": false,
      "site": "00a022c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
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
      "00a02314",
      "DATA",
      [
        "storage",
        "00c8aca0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a02314",
      "DATA",
      [
        "storage",
        "00c8ad70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a022bc ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00a022bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a022bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a022bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a02310 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 00a02310 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a02310 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a02310 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-78972e77c9cbcda8ad90322bc61b49e9"></a>

### [`00a022d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a022d8.md) → [`00a0232c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a0232c.md) FUN_00a0232c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 19件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467db4.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md)
- 新版 呼出元 0件  · 呼出先 19件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.58% / 新版 99.58%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a026d4",
      "incomplete_value": false,
      "site": "00a026d8",
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
            "const:da5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a02680",
      "incomplete_value": false,
      "site": "00a02684",
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
            "const:d74:8"
          ]
        ]
      ]
    },
    "ordinal": 43,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a02688",
      "DATA",
      [
        "storage",
        "00436bd4",
        null,
        "byte[59]"
      ]
    ],
    [
      "00a026d4",
      "PARAM",
      [
        "storage",
        "002b3d74",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a02688",
      "DATA",
      [
        "storage",
        "00436bd4",
        null,
        "byte[47]"
      ]
    ],
    [
      "00a026d4",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a02684 ["INT_ADD", "register:40f0:8", ["const:a02684:8", "const:4:8"]]
- 00a02684 ["CALL", null, ["callee:00442970:8"]]
+ 00a026d8 ["INT_ADD", "register:40f0:8", ["const:a026d8:8", "const:4:8"]]
+ 00a026d8 ["CALL", null, ["callee:00442970:8"]]
- 00a02308 ["INT_ADD", "register:40f0:8", ["const:a02308:8", "const:4:8"]]
- 00a02308 ["CALL", null, ["callee:008b92e8:8"]]
+ 00a0235c ["INT_ADD", "register:40f0:8", ["const:a0235c:8", "const:4:8"]]
+ 00a0235c ["CALL", null, ["callee:008b92e8:8"]]
- 00a02318 ["INT_ADD", "register:40f0:8", ["const:a02318:8", "const:4:8"]]
- 00a02318 ["CALL", null, ["callee:008b92e8:8"]]
+ 00a0236c ["INT_ADD", "register:40f0:8", ["const:a0236c:8", "const:4:8"]]
+ 00a0236c ["CALL", null, ["callee:008b92e8:8"]]
~~~


<a id="compare-e64405d3828a2ed1b19ea73e00ac2b7c"></a>

### [`00a026b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a026b4.md) → [`00a02708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02708.md) FUN_00a02708

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
      "definition_site": "00a0272c",
      "incomplete_value": false,
      "site": "00a0272c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:df0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a026d8",
      "incomplete_value": false,
      "site": "00a026d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:d20:8"
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
      "00a0272c",
      "DATA",
      [
        "storage",
        "00c8ad20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a0272c",
      "DATA",
      [
        "storage",
        "00c8adf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a026c8 ["INT_ADD", "register:40f0:8", ["const:a026c8:8", "const:4:8"]]
- 00a026c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a0271c ["INT_ADD", "register:40f0:8", ["const:a0271c:8", "const:4:8"]]
+ 00a0271c ["CALL", null, ["callee:00c57f60:8"]]
- 00a026d4 ["COPY", "tmp:0:8", ["const:d20:8"]]
- 00a026d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a026d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a026d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a02728 ["COPY", "tmp:0:8", ["const:df0:8"]]
+ 00a02728 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a02728 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a02728 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bbfbbd5a3e878fe0234b05065016afba"></a>

### [`00a026e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a026e8.md) → [`00a0273c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a0273c.md) FUN_00a0273c

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
      "definition_site": "00a02748",
      "incomplete_value": false,
      "site": "00a02748",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:df0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a026f4",
      "incomplete_value": false,
      "site": "00a026f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:d20:8"
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
      "00a02748",
      "DATA",
      [
        "storage",
        "00c8ad20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a02748",
      "DATA",
      [
        "storage",
        "00c8adf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a026f0 ["COPY", "tmp:0:8", ["const:d20:8"]]
- 00a026f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a026f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a026f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a02744 ["COPY", "tmp:0:8", ["const:df0:8"]]
+ 00a02744 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a02744 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a02744 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4ca4f990d07347c249dce5e10c3e9440"></a>

### [`00a02704`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a02704.md) → [`00a02758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02758.md) FUN_00a02758

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6f48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f48.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa0.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

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
      "site": "00a02790",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a0273c",
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a027a8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a02754",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00a02790",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a027a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a02790",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a027a8",
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
- 00a0273c ["INT_ADD", "register:40f0:8", ["const:a0273c:8", "const:4:8"]]
- 00a0273c ["CALL", null, ["ram:47acf4:8"]]
+ 00a02790 ["INT_ADD", "register:40f0:8", ["const:a02790:8", "const:4:8"]]
+ 00a02790 ["CALL", null, ["ram:47ad34:8"]]
- 00a02754 ["INT_ADD", "register:40f0:8", ["const:a02754:8", "const:4:8"]]
- 00a02754 ["CALL", null, ["ram:47acf4:8"]]
+ 00a027a8 ["INT_ADD", "register:40f0:8", ["const:a027a8:8", "const:4:8"]]
+ 00a027a8 ["CALL", null, ["ram:47ad34:8"]]
- 00a02720 ["INT_ADD", "register:40f0:8", ["const:a02720:8", "const:4:8"]]
- 00a02720 ["CALL", null, ["callee:008b6fa0:8"]]
+ 00a02774 ["INT_ADD", "register:40f0:8", ["const:a02774:8", "const:4:8"]]
+ 00a02774 ["CALL", null, ["callee:008b6fa0:8"]]
~~~


<a id="compare-996735cf0b5174285d7760738d21e05c"></a>

### [`00a027a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a027a4.md) → [`00a027f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a027f8.md) FUN_00a027f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a02810",
      "incomplete_value": false,
      "site": "00a0281c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a027bc",
      "incomplete_value": false,
      "site": "00a027c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:da0:8"
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
      "00a0281c",
      "DATA",
      [
        "storage",
        "00c8ada0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a0281c",
      "DATA",
      [
        "storage",
        "00c8ae70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a027bc ["COPY", "tmp:0:8", ["const:da0:8"]]
- 00a027bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a027bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a027bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a02810 ["COPY", "tmp:0:8", ["const:e70:8"]]
+ 00a02810 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a02810 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a02810 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a027ec ["COPY", "register:0:8", ["register:4040:8"]]
- 00a027ec ["INT_ADD", "register:40f0:8", ["const:a027ec:8", "const:4:8"]]
- 00a027ec ["CALLIND", null, ["register:0:8"]]
+ 00a02840 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a02840 ["INT_ADD", "register:40f0:8", ["const:a02840:8", "const:4:8"]]
+ 00a02840 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2a9ce343bb4af504c543a691a73e83e6"></a>

### [`00a02834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a02834.md) → [`00a02888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02888.md) FUN_00a02888

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a028a0",
      "incomplete_value": false,
      "site": "00a028ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a0284c",
      "incomplete_value": false,
      "site": "00a02858",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:da0:8"
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
      "00a028ac",
      "DATA",
      [
        "storage",
        "00c8ada0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a028ac",
      "DATA",
      [
        "storage",
        "00c8ae70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a028ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00a028ac ["INT_ADD", "register:40f0:8", ["const:a028ac:8", "const:4:8"]]
- 00a028ac ["CALLIND", null, ["register:0:8"]]
+ 00a02900 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a02900 ["INT_ADD", "register:40f0:8", ["const:a02900:8", "const:4:8"]]
+ 00a02900 ["CALLIND", null, ["register:0:8"]]
- 00a0284c ["COPY", "tmp:0:8", ["const:da0:8"]]
- 00a0284c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a0284c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a0284c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a028a0 ["COPY", "tmp:0:8", ["const:e70:8"]]
+ 00a028a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a028a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a028a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a0287c ["COPY", "register:0:8", ["register:4040:8"]]
- 00a0287c ["INT_ADD", "register:40f0:8", ["const:a0287c:8", "const:4:8"]]
- 00a0287c ["CALLIND", null, ["register:0:8"]]
+ 00a028d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a028d0 ["INT_ADD", "register:40f0:8", ["const:a028d0:8", "const:4:8"]]
+ 00a028d0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4fdd4c4fb202a8e7f713f408d54fa3a2"></a>

### [`00a028c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a028c0.md) → [`00a02914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02914.md) FUN_00a02914

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.92% / 新版 95.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a02940",
      "incomplete_value": false,
      "site": "00a02948",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a028ec",
      "incomplete_value": false,
      "site": "00a028f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:da0:8"
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
      "00a02948",
      "DATA",
      [
        "storage",
        "00c8ada0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a02948",
      "DATA",
      [
        "storage",
        "00c8ae70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a028d8 ["INT_ADD", "register:40f0:8", ["const:a028d8:8", "const:4:8"]]
- 00a028d8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a0292c ["INT_ADD", "register:40f0:8", ["const:a0292c:8", "const:4:8"]]
+ 00a0292c ["CALL", null, ["callee:00c57f60:8"]]
- 00a028ec ["COPY", "tmp:0:8", ["const:da0:8"]]
- 00a028ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a028ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a028ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a02940 ["COPY", "tmp:0:8", ["const:e70:8"]]
+ 00a02940 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a02940 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a02940 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00a02914 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a02914 ["INT_ADD", "register:40f0:8", ["const:a02914:8", "const:4:8"]]
- 00a02914 ["CALLIND", null, ["register:0:8"]]
+ 00a02968 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a02968 ["INT_ADD", "register:40f0:8", ["const:a02968:8", "const:4:8"]]
+ 00a02968 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-78c9870ad7a9637fcf156746d5c69dd9"></a>

### [`00a029d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a029d0.md) → [`00a02a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02a24.md) FUN_00a02a24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a02a48",
      "incomplete_value": false,
      "site": "00a02a50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a029f4",
      "incomplete_value": false,
      "site": "00a029fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:da0:8"
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
      "00a02a50",
      "DATA",
      [
        "storage",
        "00c8ada0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a02a50",
      "DATA",
      [
        "storage",
        "00c8ae70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a029f4 ["COPY", "tmp:0:8", ["const:da0:8"]]
- 00a029f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a029f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a029f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a02a48 ["COPY", "tmp:0:8", ["const:e70:8"]]
+ 00a02a48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a02a48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a02a48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00a02a1c ["COPY", "register:0:8", ["register:4040:8"]]
- 00a02a1c ["INT_ADD", "register:40f0:8", ["const:a02a1c:8", "const:4:8"]]
- 00a02a1c ["CALLIND", null, ["register:0:8"]]
+ 00a02a70 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a02a70 ["INT_ADD", "register:40f0:8", ["const:a02a70:8", "const:4:8"]]
+ 00a02a70 ["CALLIND", null, ["register:0:8"]]
- 00a02a54 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a02a54 ["INT_ADD", "register:40f0:8", ["const:a02a54:8", "const:4:8"]]
- 00a02a54 ["CALLIND", null, ["register:0:8"]]
+ 00a02aa8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a02aa8 ["INT_ADD", "register:40f0:8", ["const:a02aa8:8", "const:4:8"]]
+ 00a02aa8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-83a2c3632335a879553419d95809d11f"></a>

### [`00a02be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a02be8.md) → [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) FUN_00a02c3c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 28件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 28件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.82% / 新版 95.82%

優先判定に残った影響 `call_target` 2件, `store_value` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a02fdc",
      "incomplete_value": true,
      "site": "00a02fec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:230:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a02f88",
      "incomplete_value": true,
      "site": "00a02f98",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:28c:8"
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
      "definition_site": "00a02ff0",
      "incomplete_value": true,
      "site": "00a02ff0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00a02f9c",
      "incomplete_value": true,
      "site": "00a02f9c",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a02fe4",
      "incomplete_value": true,
      "site": "00a02ff4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a02f90",
      "incomplete_value": true,
      "site": "00a02fa0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00a02cc8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a02cf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a02fdc",
      "READ",
      [
        "storage",
        "002b028c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a02cc8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a02cf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a02fdc",
      "READ",
      [
        "storage",
        "002b0230",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a02c20 ["INT_ADD", "register:40f0:8", ["const:a02c20:8", "const:4:8"]]
- 00a02c20 ["CALL", null, ["callee:00851550:8"]]
+ 00a02c74 ["INT_ADD", "register:40f0:8", ["const:a02c74:8", "const:4:8"]]
+ 00a02c74 ["CALL", null, ["callee:00851550:8"]]
- 00a02c74 ["INT_ADD", "register:40f0:8", ["const:a02c74:8", "const:4:8"]]
- 00a02c74 ["CALL", null, ["ram:47acf4:8"]]
+ 00a02cc8 ["INT_ADD", "register:40f0:8", ["const:a02cc8:8", "const:4:8"]]
+ 00a02cc8 ["CALL", null, ["ram:47ad34:8"]]
- 00a02c9c ["INT_ADD", "register:40f0:8", ["const:a02c9c:8", "const:4:8"]]
- 00a02c9c ["CALL", null, ["ram:47acf4:8"]]
+ 00a02cf0 ["INT_ADD", "register:40f0:8", ["const:a02cf0:8", "const:4:8"]]
+ 00a02cf0 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-affe4fa4640aa690d05f1ed0c0b1fa40"></a>

### [`00a03794`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a03794.md) → [`00a037e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a037e8.md) FUN_00a037e8

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
      "definition_site": "00a037f4",
      "incomplete_value": false,
      "site": "00a03800",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a037a0",
      "incomplete_value": false,
      "site": "00a037ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:e10:8"
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
      "00a03800",
      "DATA",
      [
        "storage",
        "00c8ae10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a03800",
      "DATA",
      [
        "storage",
        "00c8aee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a037a0 ["COPY", "tmp:0:8", ["const:e10:8"]]
- 00a037a0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00a037a0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00a037a0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00a037f4 ["COPY", "tmp:0:8", ["const:ee0:8"]]
+ 00a037f4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00a037f4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00a037f4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-b78202b0c19bfb25cee50972c2632ead"></a>

### [`00a037d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a037d8.md) → [`00a0382c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a0382c.md) FUN_00a0382c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a03844",
      "incomplete_value": false,
      "site": "00a03850",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a037f0",
      "incomplete_value": false,
      "site": "00a037fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:e10:8"
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
      "00a03850",
      "DATA",
      [
        "storage",
        "00c8ae10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a03850",
      "DATA",
      [
        "storage",
        "00c8aee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a037f0 ["COPY", "tmp:0:8", ["const:e10:8"]]
- 00a037f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a037f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a037f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a03844 ["COPY", "tmp:0:8", ["const:ee0:8"]]
+ 00a03844 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a03844 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a03844 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a03820 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03820 ["INT_ADD", "register:40f0:8", ["const:a03820:8", "const:4:8"]]
- 00a03820 ["CALLIND", null, ["register:0:8"]]
+ 00a03874 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03874 ["INT_ADD", "register:40f0:8", ["const:a03874:8", "const:4:8"]]
+ 00a03874 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3925113d653de013efbe46ef96cb1b48"></a>

### [`00a038c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a038c4.md) → [`00a03918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03918.md) FUN_00a03918

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a03938",
      "incomplete_value": false,
      "site": "00a03938",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a038e4",
      "incomplete_value": false,
      "site": "00a038e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:e10:8"
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
      "00a03938",
      "DATA",
      [
        "storage",
        "00c8ae10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a03938",
      "DATA",
      [
        "storage",
        "00c8aee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a038e0 ["COPY", "tmp:0:8", ["const:e10:8"]]
- 00a038e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a038e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a038e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a03934 ["COPY", "tmp:0:8", ["const:ee0:8"]]
+ 00a03934 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a03934 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a03934 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a03900 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03900 ["INT_ADD", "register:40f0:8", ["const:a03900:8", "const:4:8"]]
- 00a03900 ["CALLIND", null, ["register:0:8"]]
+ 00a03954 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03954 ["INT_ADD", "register:40f0:8", ["const:a03954:8", "const:4:8"]]
+ 00a03954 ["CALLIND", null, ["register:0:8"]]
- 00a03924 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03924 ["INT_ADD", "register:40f0:8", ["const:a03924:8", "const:4:8"]]
- 00a03924 ["CALLIND", null, ["register:0:8"]]
+ 00a03978 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03978 ["INT_ADD", "register:40f0:8", ["const:a03978:8", "const:4:8"]]
+ 00a03978 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-af60555bac5929ca363dcc90a93861d1"></a>

### [`00a039c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a039c4.md) → [`00a03a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03a18.md) FUN_00a03a18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`008b9204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9204.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008b925c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b925c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a03a54",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a03a00",
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
      "00a03a54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a03a54",
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
- 00a03a00 ["INT_ADD", "register:40f0:8", ["const:a03a00:8", "const:4:8"]]
- 00a03a00 ["CALL", null, ["ram:47acf4:8"]]
+ 00a03a54 ["INT_ADD", "register:40f0:8", ["const:a03a54:8", "const:4:8"]]
+ 00a03a54 ["CALL", null, ["ram:47ad34:8"]]
- 00a03a0c ["INT_ADD", "register:40f0:8", ["const:a03a0c:8", "const:4:8"]]
- 00a03a0c ["CALL", null, ["callee:0047ce14:8"]]
+ 00a03a60 ["INT_ADD", "register:40f0:8", ["const:a03a60:8", "const:4:8"]]
+ 00a03a60 ["CALL", null, ["callee:0047ce14:8"]]
- 00a03a68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03a68 ["INT_ADD", "register:40f0:8", ["const:a03a68:8", "const:4:8"]]
- 00a03a68 ["CALLIND", null, ["register:0:8"]]
+ 00a03abc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03abc ["INT_ADD", "register:40f0:8", ["const:a03abc:8", "const:4:8"]]
+ 00a03abc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4d058f62526af377514ef95287670d75"></a>

### [`00a03b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a03b18.md) → [`00a03b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03b6c.md) FUN_00a03b6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a03b84",
      "incomplete_value": false,
      "site": "00a03b90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03b30",
      "incomplete_value": false,
      "site": "00a03b3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
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
      "00a03b90",
      "DATA",
      [
        "storage",
        "00c8ae90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a03b90",
      "DATA",
      [
        "storage",
        "00c8af60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03b30 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00a03b30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a03b30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a03b30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a03b84 ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 00a03b84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a03b84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a03b84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a03b60 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03b60 ["INT_ADD", "register:40f0:8", ["const:a03b60:8", "const:4:8"]]
- 00a03b60 ["CALLIND", null, ["register:0:8"]]
+ 00a03bb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03bb4 ["INT_ADD", "register:40f0:8", ["const:a03bb4:8", "const:4:8"]]
+ 00a03bb4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c08332ec4c14d9edb06b2838ab43c0c6"></a>

### [`00a03b74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a03b74.md) → [`00a03bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03bc8.md) FUN_00a03bc8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a03bf4",
      "incomplete_value": false,
      "site": "00a03bf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03ba0",
      "incomplete_value": false,
      "site": "00a03ba0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:e90:8"
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
      "00a03bf4",
      "DATA",
      [
        "storage",
        "00c8ae90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a03bf4",
      "DATA",
      [
        "storage",
        "00c8af60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03b88 ["INT_ADD", "register:40f0:8", ["const:a03b88:8", "const:4:8"]]
- 00a03b88 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a03bdc ["INT_ADD", "register:40f0:8", ["const:a03bdc:8", "const:4:8"]]
+ 00a03bdc ["CALL", null, ["callee:00c57f60:8"]]
- 00a03b98 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00a03b98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a03b98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a03b98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a03bec ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 00a03bec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a03bec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a03bec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a03bbc ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03bbc ["INT_ADD", "register:40f0:8", ["const:a03bbc:8", "const:4:8"]]
- 00a03bbc ["CALLIND", null, ["register:0:8"]]
+ 00a03c10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03c10 ["INT_ADD", "register:40f0:8", ["const:a03c10:8", "const:4:8"]]
+ 00a03c10 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0d763bb5f39f56302b1cac985bae4fe9"></a>

### [`00a03c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a03c04.md) → [`00a03c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03c58.md) FUN_00a03c58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a03c78",
      "incomplete_value": false,
      "site": "00a03c78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03c24",
      "incomplete_value": false,
      "site": "00a03c24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:e90:8"
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
      "00a03c78",
      "DATA",
      [
        "storage",
        "00c8ae90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a03c78",
      "DATA",
      [
        "storage",
        "00c8af60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03c20 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00a03c20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a03c20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a03c20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a03c74 ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 00a03c74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a03c74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a03c74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a03c40 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03c40 ["INT_ADD", "register:40f0:8", ["const:a03c40:8", "const:4:8"]]
- 00a03c40 ["CALLIND", null, ["register:0:8"]]
+ 00a03c94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03c94 ["INT_ADD", "register:40f0:8", ["const:a03c94:8", "const:4:8"]]
+ 00a03c94 ["CALLIND", null, ["register:0:8"]]
- 00a03c64 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03c64 ["INT_ADD", "register:40f0:8", ["const:a03c64:8", "const:4:8"]]
- 00a03c64 ["CALLIND", null, ["register:0:8"]]
+ 00a03cb8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03cb8 ["INT_ADD", "register:40f0:8", ["const:a03cb8:8", "const:4:8"]]
+ 00a03cb8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dff4d7cb640c861fba34c1ceaf24396b"></a>

### [`00a03d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a03d04.md) → [`00a03d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03d58.md) FUN_00a03d58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`008b9204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9204.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008b925c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b925c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a03d94",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a03d40",
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
      "00a03d94",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a03d94",
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
- 00a03d40 ["INT_ADD", "register:40f0:8", ["const:a03d40:8", "const:4:8"]]
- 00a03d40 ["CALL", null, ["ram:47acf4:8"]]
+ 00a03d94 ["INT_ADD", "register:40f0:8", ["const:a03d94:8", "const:4:8"]]
+ 00a03d94 ["CALL", null, ["ram:47ad34:8"]]
- 00a03d4c ["INT_ADD", "register:40f0:8", ["const:a03d4c:8", "const:4:8"]]
- 00a03d4c ["CALL", null, ["callee:0047ce14:8"]]
+ 00a03da0 ["INT_ADD", "register:40f0:8", ["const:a03da0:8", "const:4:8"]]
+ 00a03da0 ["CALL", null, ["callee:0047ce14:8"]]
- 00a03da8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03da8 ["INT_ADD", "register:40f0:8", ["const:a03da8:8", "const:4:8"]]
- 00a03da8 ["CALLIND", null, ["register:0:8"]]
+ 00a03dfc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03dfc ["INT_ADD", "register:40f0:8", ["const:a03dfc:8", "const:4:8"]]
+ 00a03dfc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-482ddc0f041e0d3e9aa3494b94fd6b09"></a>

### [`00a03e18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a03e18.md) → [`00a03e6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03e6c.md) FUN_00a03e6c

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
      "definition_site": "00a03e90",
      "incomplete_value": false,
      "site": "00a03e90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03e3c",
      "incomplete_value": false,
      "site": "00a03e3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:f20:8"
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
      "00a03e90",
      "DATA",
      [
        "storage",
        "00c8af20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a03e90",
      "DATA",
      [
        "storage",
        "00c8aff0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03e2c ["INT_ADD", "register:40f0:8", ["const:a03e2c:8", "const:4:8"]]
- 00a03e2c ["CALL", null, ["callee:00c57f60:8"]]
+ 00a03e80 ["INT_ADD", "register:40f0:8", ["const:a03e80:8", "const:4:8"]]
+ 00a03e80 ["CALL", null, ["callee:00c57f60:8"]]
- 00a03e38 ["COPY", "tmp:0:8", ["const:f20:8"]]
- 00a03e38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a03e38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a03e38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a03e8c ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 00a03e8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a03e8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a03e8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8737dbf52fe1e7d1bc22bce5125dabc9"></a>

### [`00a03e4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a03e4c.md) → [`00a03ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03ea0.md) FUN_00a03ea0

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
      "definition_site": "00a03eac",
      "incomplete_value": false,
      "site": "00a03eac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03e58",
      "incomplete_value": false,
      "site": "00a03e58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:f20:8"
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
      "00a03eac",
      "DATA",
      [
        "storage",
        "00c8af20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a03eac",
      "DATA",
      [
        "storage",
        "00c8aff0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03e54 ["COPY", "tmp:0:8", ["const:f20:8"]]
- 00a03e54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a03e54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a03e54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a03ea8 ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 00a03ea8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a03ea8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a03ea8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2d519cb24b6796e460baa86acc594e53"></a>

### [`00a03e68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a03e68.md) → [`00a03ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03ebc.md) FUN_00a03ebc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 25件 [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md)
- 新版 呼出元 0件  · 呼出先 25件 [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.82% / 新版 98.82%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00a03f18",
      "incomplete_value": true,
      "site": "00a03f18",
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
      "definition_site": "00a03ec4",
      "incomplete_value": true,
      "site": "00a03ec4",
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
      "definition_site": "00a03f20",
      "incomplete_value": false,
      "site": "00a03f30",
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
      "definition_site": "00a03ecc",
      "incomplete_value": false,
      "site": "00a03edc",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a03f28",
      "incomplete_value": false,
      "site": "00a03f30",
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
            "const:a60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03ed4",
      "incomplete_value": false,
      "site": "00a03edc",
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
            "const:990:8"
          ]
        ]
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
      "00a03f14",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00a03f20",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a03f28",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00a03f14",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00a03f20",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a03f28",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03edc ["INT_ADD", "register:40f0:8", ["const:a03edc:8", "const:4:8"]]
- 00a03edc ["CALL", null, ["callee:00c586e0:8"]]
+ 00a03f30 ["INT_ADD", "register:40f0:8", ["const:a03f30:8", "const:4:8"]]
+ 00a03f30 ["CALL", null, ["callee:00c586e0:8"]]
- 00a03f30 ["INT_ADD", "register:40f0:8", ["const:a03f30:8", "const:4:8"]]
- 00a03f30 ["CALL", null, ["callee:008b9344:8"]]
+ 00a03f84 ["INT_ADD", "register:40f0:8", ["const:a03f84:8", "const:4:8"]]
+ 00a03f84 ["CALL", null, ["callee:008b9344:8"]]
- 00a042b8 ["INT_ADD", "register:40f0:8", ["const:a042b8:8", "const:4:8"]]
- 00a042b8 ["CALL", null, ["ram:9f7990:8"]]
+ 00a0430c ["INT_ADD", "register:40f0:8", ["const:a0430c:8", "const:4:8"]]
+ 00a0430c ["CALL", null, ["ram:9f79e4:8"]]
~~~


<a id="compare-3fabb1d2b9f5eb47a1afa6af4aef62a7"></a>

### [`00a04558`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a04/00a04558.md) → [`00a045ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a045ac.md) FUN_00a045ac

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
      "definition_site": "00a045d0",
      "incomplete_value": false,
      "site": "00a045d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a0457c",
      "incomplete_value": false,
      "site": "00a0457c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:fa0:8"
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
      "00a045d0",
      "DATA",
      [
        "storage",
        "00c8afa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a045d0",
      "DATA",
      [
        "storage",
        "00c8b070",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0456c ["INT_ADD", "register:40f0:8", ["const:a0456c:8", "const:4:8"]]
- 00a0456c ["CALL", null, ["callee:00c57f60:8"]]
+ 00a045c0 ["INT_ADD", "register:40f0:8", ["const:a045c0:8", "const:4:8"]]
+ 00a045c0 ["CALL", null, ["callee:00c57f60:8"]]
- 00a04574 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a045c8 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a04578 ["COPY", "tmp:0:8", ["const:fa0:8"]]
- 00a04578 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a04578 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a04578 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a045cc ["COPY", "tmp:0:8", ["const:70:8"]]
+ 00a045cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a045cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a045cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-06bb541baccd0a63bcc898c687838dea"></a>

### [`00a0458c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a04/00a0458c.md) → [`00a045e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a045e0.md) FUN_00a045e0

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
      "definition_site": "00a045ec",
      "incomplete_value": false,
      "site": "00a045ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a04598",
      "incomplete_value": false,
      "site": "00a04598",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:fa0:8"
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
      "00a045ec",
      "DATA",
      [
        "storage",
        "00c8afa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a045ec",
      "DATA",
      [
        "storage",
        "00c8b070",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a04590 ["COPY", "register:4048:8", ["const:c8a000:8"]]
+ 00a045e4 ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 00a04594 ["COPY", "tmp:0:8", ["const:fa0:8"]]
- 00a04594 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a04594 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a04594 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a045e8 ["COPY", "tmp:0:8", ["const:70:8"]]
+ 00a045e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a045e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a045e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7a85dbdb55e0acee01f8640e044278b3"></a>

### [`00a045a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a04/00a045a8.md) → [`00a045fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a045fc.md) FUN_00a045fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 24件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00493998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493998.md)
- 新版 呼出元 0件  · 呼出先 24件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004939d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939d8.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.97% / 新版 97.97%

優先判定に残った影響 `call_argument_candidate` 5件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a04770",
      "incomplete_value": false,
      "site": "00a0477c",
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
            "const:76d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a0471c",
      "incomplete_value": false,
      "site": "00a04728",
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
            "const:7ba:8"
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a047a8",
      "incomplete_value": false,
      "site": "00a047b4",
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
            "const:67d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a04754",
      "incomplete_value": false,
      "site": "00a04760",
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
            "const:63d:8"
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a047d4",
      "incomplete_value": false,
      "site": "00a047dc",
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
            "const:17f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a04780",
      "incomplete_value": false,
      "site": "00a04788",
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
            "const:1d3:8"
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
      "00a04658",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[59]"
      ]
    ],
    [
      "00a04668",
      "DATA",
      [
        "storage",
        "00436bc8",
        null,
        "byte[59]"
      ]
    ],
    [
      "00a04674",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[59]"
      ]
    ]
  ],
  "added": [
    [
      "00a04658",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[47]"
      ]
    ],
    [
      "00a04668",
      "DATA",
      [
        "storage",
        "00436bc8",
        null,
        "byte[47]"
      ]
    ],
    [
      "00a04674",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[47]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a046d4 ["INT_ADD", "register:40f0:8", ["const:a046d4:8", "const:4:8"]]
- 00a046d4 ["CALL", null, ["callee:00851550:8"]]
+ 00a04728 ["INT_ADD", "register:40f0:8", ["const:a04728:8", "const:4:8"]]
+ 00a04728 ["CALL", null, ["callee:00851550:8"]]
- 00a04728 ["INT_ADD", "register:40f0:8", ["const:a04728:8", "const:4:8"]]
- 00a04728 ["CALL", null, ["callee:00c58030:8"]]
+ 00a0477c ["INT_ADD", "register:40f0:8", ["const:a0477c:8", "const:4:8"]]
+ 00a0477c ["CALL", null, ["callee:00c58030:8"]]
- 00a04760 ["INT_ADD", "register:40f0:8", ["const:a04760:8", "const:4:8"]]
- 00a04760 ["CALL", null, ["callee:00c58030:8"]]
+ 00a047b4 ["INT_ADD", "register:40f0:8", ["const:a047b4:8", "const:4:8"]]
+ 00a047b4 ["CALL", null, ["callee:00c58030:8"]]
~~~


<a id="compare-79fe215170845ae6c55740ebe3892522"></a>

### [`00a04dc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a04/00a04dc4.md) → [`00a04e18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04e18.md) FUN_00a04e18

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
      "definition_site": "00a04e3c",
      "incomplete_value": false,
      "site": "00a04e40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a04de8",
      "incomplete_value": false,
      "site": "00a04dec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:20:8"
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
      "00a04e40",
      "DATA",
      [
        "storage",
        "00c8b020",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a04e40",
      "DATA",
      [
        "storage",
        "00c8b0f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a04dd8 ["INT_ADD", "register:40f0:8", ["const:a04dd8:8", "const:4:8"]]
- 00a04dd8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a04e2c ["INT_ADD", "register:40f0:8", ["const:a04e2c:8", "const:4:8"]]
+ 00a04e2c ["CALL", null, ["callee:00c57f60:8"]]
- 00a04de8 ["COPY", "tmp:0:8", ["const:20:8"]]
- 00a04de8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a04de8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a04de8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a04e3c ["COPY", "tmp:0:8", ["const:f0:8"]]
+ 00a04e3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04e3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04e3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ae9eb062ef595848a6367f32c86d4b4d"></a>

### [`00a04e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a04/00a04e04.md) → [`00a04e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04e58.md) FUN_00a04e58

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
      "definition_site": "00a04e5c",
      "incomplete_value": false,
      "site": "00a04e60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a04e08",
      "incomplete_value": false,
      "site": "00a04e0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:20:8"
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
      "00a04e60",
      "DATA",
      [
        "storage",
        "00c8b020",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a04e60",
      "DATA",
      [
        "storage",
        "00c8b0f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a04e08 ["COPY", "tmp:0:8", ["const:20:8"]]
- 00a04e08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a04e08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a04e08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a04e5c ["COPY", "tmp:0:8", ["const:f0:8"]]
+ 00a04e5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04e5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04e5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f0e3ff11a63a25f52226608256253955"></a>

### [`00a04e94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a04/00a04e94.md) → [`00a04ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04ee8.md) FUN_00a04ee8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009fb44c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fb/009fb44c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`009fb4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fb/009fb4a0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a04ef4",
      "incomplete_value": false,
      "site": "00a04ef8",
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
      "definition_site": "00a04ea0",
      "incomplete_value": false,
      "site": "00a04ea4",
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
      "00a04ef4",
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
      "00a04ef4",
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
- 00a04ea4 ["INT_ADD", "register:40f0:8", ["const:a04ea4:8", "const:4:8"]]
- 00a04ea4 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00a04ef8 ["INT_ADD", "register:40f0:8", ["const:a04ef8:8", "const:4:8"]]
+ 00a04ef8 ["CALL", null, ["callee:0043b7b8:8"]]
- 00a04ea0 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00a04ea0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00a04ea0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00a04ea0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00a04ef4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00a04ef4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00a04ef4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00a04ef4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-512ec368d9f488823ecfd8e76d171d01"></a>

### [`00a04eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a04/00a04eac.md) → [`00a04f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04f00.md) FUN_00a04f00

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
      "definition_site": "00a04f24",
      "incomplete_value": false,
      "site": "00a04f28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a04ed0",
      "incomplete_value": false,
      "site": "00a04ed4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:a0:8"
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
      "00a04f28",
      "DATA",
      [
        "storage",
        "00c8b0a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a04f28",
      "DATA",
      [
        "storage",
        "00c8b170",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a04ec0 ["INT_ADD", "register:40f0:8", ["const:a04ec0:8", "const:4:8"]]
- 00a04ec0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a04f14 ["INT_ADD", "register:40f0:8", ["const:a04f14:8", "const:4:8"]]
+ 00a04f14 ["CALL", null, ["callee:00c57f60:8"]]
- 00a04ed0 ["COPY", "tmp:0:8", ["const:a0:8"]]
- 00a04ed0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a04ed0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a04ed0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a04f24 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 00a04f24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04f24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04f24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-58c6aa6bde6c1b5fa7003ab41210cdfd"></a>

### [`00a04eec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a04/00a04eec.md) → [`00a04f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04f40.md) FUN_00a04f40

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
      "definition_site": "00a04f44",
      "incomplete_value": false,
      "site": "00a04f48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a04ef0",
      "incomplete_value": false,
      "site": "00a04ef4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:a0:8"
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
      "00a04f48",
      "DATA",
      [
        "storage",
        "00c8b0a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a04f48",
      "DATA",
      [
        "storage",
        "00c8b170",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a04ef0 ["COPY", "tmp:0:8", ["const:a0:8"]]
- 00a04ef0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a04ef0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a04ef0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a04f44 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 00a04f44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04f44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04f44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ee0100ca14777665f63d4763777ac489"></a>

### [`00a04f14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a04/00a04f14.md) → [`00a04f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04f68.md) FUN_00a04f68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b97a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b97a0.md) [`009df634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009df/009df634.md) [`009df8c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009df/009df8c4.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b97f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b97f8.md) [`009df688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df688.md) [`009df918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df918.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a05130",
      "incomplete_value": true,
      "site": "00a05140",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b5000:8"
              ],
              [
                "leaf",
                "const:689:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a050dc",
      "incomplete_value": true,
      "site": "00a050ec",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b5000:8"
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a05134",
      "incomplete_value": true,
      "site": "00a05144",
      "value": [
        "LOAD",
        "16",
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
                "const:c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a050e0",
      "incomplete_value": true,
      "site": "00a050f0",
      "value": [
        "LOAD",
        "16",
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
                "const:c:8"
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
      "definition_site": "00a05138",
      "incomplete_value": true,
      "site": "00a05148",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a050e4",
      "incomplete_value": true,
      "site": "00a050f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:290:8"
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
      "00a05130",
      "READ",
      [
        "storage",
        "002b5658",
        null,
        "string"
      ]
    ],
    [
      "00a05134",
      "READ",
      [
        "storage",
        "002b5664",
        null,
        "string"
      ]
    ],
    [
      "00a05138",
      "READ",
      [
        "storage",
        "002c3290",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a05130",
      "READ",
      [
        "storage",
        "002b5689",
        null,
        "string"
      ]
    ],
    [
      "00a05134",
      "READ",
      [
        "storage",
        "002b5695",
        null,
        "string"
      ]
    ],
    [
      "00a05138",
      "READ",
      [
        "storage",
        "002c32d0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a05140 ["INT_ADD", "register:40f0:8", ["const:a05140:8", "const:4:8"]]
- 00a05140 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a05194 ["INT_ADD", "register:40f0:8", ["const:a05194:8", "const:4:8"]]
+ 00a05194 ["CALL", null, ["callee:00c57f80:8"]]
- 00a04f48 ["INT_ADD", "register:40f0:8", ["const:a04f48:8", "const:4:8"]]
- 00a04f48 ["CALL", null, ["callee:008b97f8:8"]]
+ 00a04f9c ["INT_ADD", "register:40f0:8", ["const:a04f9c:8", "const:4:8"]]
+ 00a04f9c ["CALL", null, ["callee:008b97f8:8"]]
- 00a04f5c ["INT_ADD", "register:40f0:8", ["const:a04f5c:8", "const:4:8"]]
- 00a04f5c ["CALL", null, ["callee:00851550:8"]]
+ 00a04fb0 ["INT_ADD", "register:40f0:8", ["const:a04fb0:8", "const:4:8"]]
+ 00a04fb0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-f565dbdb2e4a69352a9bfd8be9b7b6e1"></a>

### [`00a05254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a05254.md) → [`00a052a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a052a8.md) FUN_00a052a8

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
      "definition_site": "00a052cc",
      "incomplete_value": false,
      "site": "00a052cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:1f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05278",
      "incomplete_value": false,
      "site": "00a05278",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:120:8"
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
      "00a052cc",
      "DATA",
      [
        "storage",
        "00c8b120",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a052cc",
      "DATA",
      [
        "storage",
        "00c8b1f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a05268 ["INT_ADD", "register:40f0:8", ["const:a05268:8", "const:4:8"]]
- 00a05268 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a052bc ["INT_ADD", "register:40f0:8", ["const:a052bc:8", "const:4:8"]]
+ 00a052bc ["CALL", null, ["callee:00c57f60:8"]]
- 00a05274 ["COPY", "tmp:0:8", ["const:120:8"]]
- 00a05274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a05274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a05274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a052c8 ["COPY", "tmp:0:8", ["const:1f0:8"]]
+ 00a052c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a052c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a052c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-546c0246534f20addd3a2cb3c78b5308"></a>

### [`00a05288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a05288.md) → [`00a052dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a052dc.md) FUN_00a052dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a052e8",
      "incomplete_value": true,
      "site": "00a052e8",
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
            "const:1f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05294",
      "incomplete_value": true,
      "site": "00a05294",
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
            "const:120:8"
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
      "00a052e8",
      "DATA",
      [
        "storage",
        "00c8b120",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a052e8",
      "DATA",
      [
        "storage",
        "00c8b1f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a05290 ["COPY", "tmp:0:8", ["const:120:8"]]
- 00a05290 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a05290 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a05290 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a052e4 ["COPY", "tmp:0:8", ["const:1f0:8"]]
+ 00a052e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a052e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a052e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1a97f3de09fba4628df25ab5322779fd"></a>

### [`00a052a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a052a4.md) → [`00a052f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a052f8.md) FUN_00a052f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`009f7de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f7/009f7de0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009f7e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f7/009f7e34.md)

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
      "site": "00a05318",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a052c4",
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
      "site": "00a05324",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a052d0",
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
      "00a05318",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a05324",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a05318",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a05324",
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
- 00a052c4 ["INT_ADD", "register:40f0:8", ["const:a052c4:8", "const:4:8"]]
- 00a052c4 ["CALL", null, ["ram:47acf4:8"]]
+ 00a05318 ["INT_ADD", "register:40f0:8", ["const:a05318:8", "const:4:8"]]
+ 00a05318 ["CALL", null, ["ram:47ad34:8"]]
- 00a052d0 ["INT_ADD", "register:40f0:8", ["const:a052d0:8", "const:4:8"]]
- 00a052d0 ["CALL", null, ["ram:47acf4:8"]]
+ 00a05324 ["INT_ADD", "register:40f0:8", ["const:a05324:8", "const:4:8"]]
+ 00a05324 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-4371e50fa788ff6bd41a0809b448910e"></a>

### [`00a05324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a05324.md) → [`00a05378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05378.md) FUN_00a05378

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
      "definition_site": "00a05398",
      "incomplete_value": false,
      "site": "00a0539c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:270:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05344",
      "incomplete_value": false,
      "site": "00a05348",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
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
      "00a0539c",
      "DATA",
      [
        "storage",
        "00c8b1a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a0539c",
      "DATA",
      [
        "storage",
        "00c8b270",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a05338 ["INT_ADD", "register:40f0:8", ["const:a05338:8", "const:4:8"]]
- 00a05338 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a0538c ["INT_ADD", "register:40f0:8", ["const:a0538c:8", "const:4:8"]]
+ 00a0538c ["CALL", null, ["callee:00c57f60:8"]]
- 00a05344 ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 00a05344 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a05344 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a05344 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a05398 ["COPY", "tmp:0:8", ["const:270:8"]]
+ 00a05398 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05398 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05398 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2b2ecad0169208c9f4baeee595e8095d"></a>

### [`00a0535c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a0535c.md) → [`00a053b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a053b0.md) FUN_00a053b0

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
      "definition_site": "00a053b4",
      "incomplete_value": false,
      "site": "00a053b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:270:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05360",
      "incomplete_value": false,
      "site": "00a05364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
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
      "00a053b8",
      "DATA",
      [
        "storage",
        "00c8b1a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a053b8",
      "DATA",
      [
        "storage",
        "00c8b270",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a05360 ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 00a05360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a05360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a05360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a053b4 ["COPY", "tmp:0:8", ["const:270:8"]]
+ 00a053b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a053b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a053b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-13125005b06990f64ac008c342558b28"></a>

### [`00a0537c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a0537c.md) → [`00a053d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a053d0.md) FUN_00a053d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 15件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0052dd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052d/0052dd00.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.62% / 新版 89.62%

優先判定に残った影響 `call_target` 2件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a05480",
      "incomplete_value": true,
      "site": "00a05490",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7fe:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a0542c",
      "incomplete_value": true,
      "site": "00a0543c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:852:8"
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
      "definition_site": "00a05494",
      "incomplete_value": true,
      "site": "00a05494",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00a05440",
      "incomplete_value": true,
      "site": "00a05440",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a05488",
      "incomplete_value": true,
      "site": "00a05498",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a05434",
      "incomplete_value": true,
      "site": "00a05444",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00a0540c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a05428",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a05480",
      "READ",
      [
        "storage",
        "002b8852",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a0540c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a05428",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a05480",
      "READ",
      [
        "storage",
        "002b87fe",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a053b8 ["INT_ADD", "register:40f0:8", ["const:a053b8:8", "const:4:8"]]
- 00a053b8 ["CALL", null, ["ram:47acf4:8"]]
+ 00a0540c ["INT_ADD", "register:40f0:8", ["const:a0540c:8", "const:4:8"]]
+ 00a0540c ["CALL", null, ["ram:47ad34:8"]]
- 00a053d4 ["INT_ADD", "register:40f0:8", ["const:a053d4:8", "const:4:8"]]
- 00a053d4 ["CALL", null, ["ram:47acf4:8"]]
+ 00a05428 ["INT_ADD", "register:40f0:8", ["const:a05428:8", "const:4:8"]]
+ 00a05428 ["CALL", null, ["ram:47ad34:8"]]
- 00a05428 ["COPY", "register:4048:8", ["const:2c2000:8"]]
~~~


<a id="compare-8938a478ecc73052c85f24d5229384ac"></a>

### [`00a05790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a05790.md) → [`00a057e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a057e4.md) FUN_00a057e4

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
      "definition_site": "00a05808",
      "incomplete_value": false,
      "site": "00a05808",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:2e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a057b4",
      "incomplete_value": false,
      "site": "00a057b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:210:8"
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
      "00a05808",
      "DATA",
      [
        "storage",
        "00c8b210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a05808",
      "DATA",
      [
        "storage",
        "00c8b2e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a057a4 ["INT_ADD", "register:40f0:8", ["const:a057a4:8", "const:4:8"]]
- 00a057a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a057f8 ["INT_ADD", "register:40f0:8", ["const:a057f8:8", "const:4:8"]]
+ 00a057f8 ["CALL", null, ["callee:00c57f60:8"]]
- 00a057b0 ["COPY", "tmp:0:8", ["const:210:8"]]
- 00a057b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a057b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a057b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a05804 ["COPY", "tmp:0:8", ["const:2e0:8"]]
+ 00a05804 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05804 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05804 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-988de454bccd58e27aea499e81ba6c11"></a>

### [`00a057c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a057c4.md) → [`00a05818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05818.md) FUN_00a05818

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
      "definition_site": "00a05824",
      "incomplete_value": false,
      "site": "00a05824",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:2e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a057d0",
      "incomplete_value": false,
      "site": "00a057d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:210:8"
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
      "00a05824",
      "DATA",
      [
        "storage",
        "00c8b210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a05824",
      "DATA",
      [
        "storage",
        "00c8b2e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a057cc ["COPY", "tmp:0:8", ["const:210:8"]]
- 00a057cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a057cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a057cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a05820 ["COPY", "tmp:0:8", ["const:2e0:8"]]
+ 00a05820 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a05820 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a05820 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6ae4e1daf8b6551a4b0f015a6ea3cf99"></a>

### [`00a057e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a057e0.md) → [`00a05834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05834.md) FUN_00a05834

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`008b9204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9204.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008b925c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b925c.md)

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
      "site": "00a0585c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a05808",
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
      "00a0585c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a0585c",
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
- 00a05808 ["INT_ADD", "register:40f0:8", ["const:a05808:8", "const:4:8"]]
- 00a05808 ["CALL", null, ["ram:47acf4:8"]]
+ 00a0585c ["INT_ADD", "register:40f0:8", ["const:a0585c:8", "const:4:8"]]
+ 00a0585c ["CALL", null, ["ram:47ad34:8"]]
- 00a05814 ["INT_ADD", "register:40f0:8", ["const:a05814:8", "const:4:8"]]
- 00a05814 ["CALL", null, ["callee:0047ce14:8"]]
+ 00a05868 ["INT_ADD", "register:40f0:8", ["const:a05868:8", "const:4:8"]]
+ 00a05868 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-70134ea442460a560040f3c94b8fce43"></a>

### [`00a0586c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a0586c.md) → [`00a058c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a058c0.md) FUN_00a058c0

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
      "definition_site": "00a058e4",
      "incomplete_value": false,
      "site": "00a058e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05890",
      "incomplete_value": false,
      "site": "00a05890",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:2a0:8"
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
      "00a058e4",
      "DATA",
      [
        "storage",
        "00c8b2a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a058e4",
      "DATA",
      [
        "storage",
        "00c8b370",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a05880 ["INT_ADD", "register:40f0:8", ["const:a05880:8", "const:4:8"]]
- 00a05880 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a058d4 ["INT_ADD", "register:40f0:8", ["const:a058d4:8", "const:4:8"]]
+ 00a058d4 ["CALL", null, ["callee:00c57f60:8"]]
- 00a0588c ["COPY", "tmp:0:8", ["const:2a0:8"]]
- 00a0588c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a0588c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a0588c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a058e0 ["COPY", "tmp:0:8", ["const:370:8"]]
+ 00a058e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a058e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a058e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4799e86a177c9852a141749ac302cf55"></a>

### [`00a058a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a058a0.md) → [`00a058f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a058f4.md) FUN_00a058f4

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
      "definition_site": "00a05900",
      "incomplete_value": false,
      "site": "00a05900",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a058ac",
      "incomplete_value": false,
      "site": "00a058ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:2a0:8"
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
      "00a05900",
      "DATA",
      [
        "storage",
        "00c8b2a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a05900",
      "DATA",
      [
        "storage",
        "00c8b370",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a058a8 ["COPY", "tmp:0:8", ["const:2a0:8"]]
- 00a058a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a058a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a058a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a058fc ["COPY", "tmp:0:8", ["const:370:8"]]
+ 00a058fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a058fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a058fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1c05abfe121853db7946164899b0462e"></a>

### [`00a058bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a058bc.md) → [`00a05910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05910.md) FUN_00a05910

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`009fabcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fa/009fabcc.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009fac20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fa/009fac20.md)

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
      "site": "00a05930",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a058dc",
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
      "site": "00a0593c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a058e8",
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
      "00a05930",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a0593c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a05930",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a0593c",
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
- 00a058dc ["INT_ADD", "register:40f0:8", ["const:a058dc:8", "const:4:8"]]
- 00a058dc ["CALL", null, ["ram:47acf4:8"]]
+ 00a05930 ["INT_ADD", "register:40f0:8", ["const:a05930:8", "const:4:8"]]
+ 00a05930 ["CALL", null, ["ram:47ad34:8"]]
- 00a058e8 ["INT_ADD", "register:40f0:8", ["const:a058e8:8", "const:4:8"]]
- 00a058e8 ["CALL", null, ["ram:47acf4:8"]]
+ 00a0593c ["INT_ADD", "register:40f0:8", ["const:a0593c:8", "const:4:8"]]
+ 00a0593c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-d4c9a206429c5fec263ea9288d8a124e"></a>

### [`00a0593c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a0593c.md) → [`00a05990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05990.md) FUN_00a05990

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
      "definition_site": "00a059a4",
      "incomplete_value": false,
      "site": "00a059a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05950",
      "incomplete_value": false,
      "site": "00a05954",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:320:8"
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
      "00a059a8",
      "DATA",
      [
        "storage",
        "00c8b320",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a059a8",
      "DATA",
      [
        "storage",
        "00c8b3f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a05948 ["INT_ADD", "register:40f0:8", ["const:a05948:8", "const:4:8"]]
- 00a05948 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a0599c ["INT_ADD", "register:40f0:8", ["const:a0599c:8", "const:4:8"]]
+ 00a0599c ["CALL", null, ["callee:00c57f60:8"]]
- 00a05950 ["COPY", "tmp:0:8", ["const:320:8"]]
- 00a05950 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a05950 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a05950 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a059a4 ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 00a059a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a059a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a059a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2a425eeebf317665ce6195b6000d35ca"></a>

### [`00a05960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a05960.md) → [`00a059b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a059b4.md) FUN_00a059b4

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
      "definition_site": "00a059b8",
      "incomplete_value": false,
      "site": "00a059bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05964",
      "incomplete_value": false,
      "site": "00a05968",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:320:8"
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
      "00a059bc",
      "DATA",
      [
        "storage",
        "00c8b320",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a059bc",
      "DATA",
      [
        "storage",
        "00c8b3f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a05964 ["COPY", "tmp:0:8", ["const:320:8"]]
- 00a05964 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a05964 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a05964 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a059b8 ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 00a059b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a059b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a059b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


