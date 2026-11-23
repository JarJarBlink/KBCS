# v16.0.1 → v16.0.2 · 最優先の変更候補 (98)

[一覧の目次](README.md)

<a id="compare-707668b3f7de996fa2371d5231885706"></a>

### [`00c1c12c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1c/00c1c12c.md) → [`00c1c1c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1c/00c1c1c8.md) _ZNKSt6__ndk19money_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_putES4_bRNS_8ios_baseEcRKNS_12basic_stringIcS3_NS_9allocatorIc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`00459668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459668.md) [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 0件  · 呼出先 12件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

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
    "old": {
      "definition_site": "00c1c17c",
      "incomplete_value": true,
      "site": "00c1c17c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c30:8"
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
    "old": {
      "definition_site": "00c1c184",
      "incomplete_value": true,
      "site": "00c1c188",
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
    "old": {
      "definition_site": "00c1c1a8",
      "incomplete_value": true,
      "site": "00c1c1b0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c30:8"
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
      "00c1c210",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c1c218",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c1c21c",
      "READ",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1c210",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c1c218",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c1c21c",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1c1b0 ["INT_ADD", "register:40f0:8", ["const:c1c1b0:8", "const:4:8"]]
- 00c1c1b0 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c1c24c ["INT_ADD", "register:40f0:8", ["const:c1c24c:8", "const:4:8"]]
+ 00c1c24c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c1c16c ["INT_ADD", "register:40f0:8", ["const:c1c16c:8", "const:4:8"]]
- 00c1c16c ["CALL", null, ["callee:00c58340:8"]]
+ 00c1c208 ["INT_ADD", "register:40f0:8", ["const:c1c208:8", "const:4:8"]]
+ 00c1c208 ["CALL", null, ["callee:00c58340:8"]]
- 00c1c174 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:c30:8"]]
- 00c1c174 ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c1c210 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d00:8"]]
+ 00c1c210 ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ada14902e3050e632bc92a538e29a035"></a>

### [`00c1c4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1c/00c1c4b0.md) → [`00c1c54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1c/00c1c54c.md) _ZNKSt6__ndk19money_putIwNS_19ostreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_putES4_bRNS_8ios_baseEwe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 19件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c118e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c118e4.md) [`00c1b9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1b/00c1b9e0.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 0件  · 呼出先 19件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

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
    "old": {
      "definition_site": "00c1c588",
      "incomplete_value": true,
      "site": "00c1c590",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b40:8"
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
    "old": {
      "definition_site": "00c1c85c",
      "incomplete_value": true,
      "site": "00c1c85c",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c1c598",
      "incomplete_value": true,
      "site": "00c1c59c",
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
      "00c1c580",
      "PARAM",
      [
        "storage",
        "002b17b0",
        null,
        "string"
      ]
    ],
    [
      "00c1c5b4",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1c5bc",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1c580",
      "PARAM",
      [
        "storage",
        "002b1754",
        null,
        "string"
      ]
    ],
    [
      "00c1c5b4",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1c5bc",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1c500 ["INT_ADD", "register:40f0:8", ["const:c1c500:8", "const:4:8"]]
- 00c1c500 ["CALL", null, ["callee:00c5e1d0:8"]]
+ 00c1c59c ["INT_ADD", "register:40f0:8", ["const:c1c59c:8", "const:4:8"]]
+ 00c1c59c ["CALL", null, ["callee:00c5e1d0:8"]]
- 00c1c510 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00c1c510 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c1c510 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c1c510 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c1c5ac ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00c1c5ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c1c5ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c1c5ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c1c538 ["INT_ADD", "register:40f0:8", ["const:c1c538:8", "const:4:8"]]
- 00c1c538 ["CALL", null, ["callee:00c1ba7c:8"]]
+ 00c1c5d4 ["INT_ADD", "register:40f0:8", ["const:c1c5d4:8", "const:4:8"]]
+ 00c1c5d4 ["CALL", null, ["callee:00c1ba7c:8"]]
~~~


<a id="compare-432606f3ad39c7d81453d311bb6434ce"></a>

### [`00c1d014`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1d/00c1d014.md) → [`00c1d0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d0b0.md) _ZNKSt6__ndk19money_putIwNS_19ostreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_putES4_bRNS_8ios_baseEwRKNS_12basic_stringIwS3_NS_9allocatorIw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c118e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c118e4.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 0件  · 呼出先 12件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

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
    "old": {
      "definition_site": "00c1d064",
      "incomplete_value": true,
      "site": "00c1d064",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b40:8"
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
    "old": {
      "definition_site": "00c1d090",
      "incomplete_value": true,
      "site": "00c1d098",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:b40:8"
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
      "definition_site": "00c1d128",
      "incomplete_value": false,
      "site": "00c1d134",
      "value": [
        "leaf",
        "const:c36054:8"
      ]
    },
    "old": {
      "definition_site": "00c1d08c",
      "incomplete_value": false,
      "site": "00c1d098",
      "value": [
        "leaf",
        "const:c35fb8:8"
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
      "00c1d0f8",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c1d100",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c1d104",
      "READ",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1d0f8",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c1d100",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c1d104",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1d098 ["INT_ADD", "register:40f0:8", ["const:c1d098:8", "const:4:8"]]
- 00c1d098 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c1d134 ["INT_ADD", "register:40f0:8", ["const:c1d134:8", "const:4:8"]]
+ 00c1d134 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c1d054 ["INT_ADD", "register:40f0:8", ["const:c1d054:8", "const:4:8"]]
- 00c1d054 ["CALL", null, ["callee:00c58340:8"]]
+ 00c1d0f0 ["INT_ADD", "register:40f0:8", ["const:c1d0f0:8", "const:4:8"]]
+ 00c1d0f0 ["CALL", null, ["callee:00c58340:8"]]
- 00c1d05c ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:b40:8"]]
- 00c1d05c ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c1d0f8 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:c10:8"]]
+ 00c1d0f8 ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-04ae2b65e7331b2326f9b91c0569e735"></a>

### [`00c1d69c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1d/00c1d69c.md) → [`00c1d738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d738.md) FUN_00c1d738

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c1fb44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1fb44.md) · 呼出先 12件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c1fbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fbe0.md) · 呼出先 12件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 31.96% / 新版 31.96%

優先判定に残った影響 `call_argument_candidate` 19件, `store_condition` 6件, `store_value` 1件, `unresolved_branch_alignment` 126件, `unresolved_call_alignment` 109件, `unresolved_store_alignment` 157件

アドレスに依存する影響 `call_argument_candidate` 10件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c1d6d8",
      "incomplete_value": false,
      "site": "00c1d6d8",
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
            "const:6c0:8"
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
    "old": {
      "definition_site": "00c1dba4",
      "incomplete_value": true,
      "site": "00c1dba8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ba8:8"
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
    "old": {
      "definition_site": "00c1dfec",
      "incomplete_value": true,
      "site": "00c1dff0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb8:8"
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
      "00c1d774",
      "DATA",
      [
        "storage",
        "00c936c0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c1d7e4",
      "READ",
      [
        "storage",
        "00c9bbf8",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00c1d750",
      "READ",
      [
        "storage",
        "00c9b378",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c1d774",
      "DATA",
      [
        "storage",
        "00c93790",
        null,
        "undefined *"
      ]
    ],
    [
      "00c1d7e4",
      "READ",
      [
        "storage",
        "00c9bcc8",
        null,
        "pointer"
      ]
    ],
    [
      "00c1d7ec",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1d774 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00c1d774 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00c1d774 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 00c1d90c ["INT_ADD", "register:40f0:8", ["const:c1d90c:8", "const:4:8"]]
- 00c1d90c ["CALL", null, ["callee:00c5e8b0:8"]]
+ 00c1d9a8 ["INT_ADD", "register:40f0:8", ["const:c1d9a8:8", "const:4:8"]]
+ 00c1d9a8 ["CALL", null, ["callee:00c5e8b0:8"]]
- 00c1d9a8 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 00c1d9a8 ["CBRANCH", null, ["local:b43:8", "tmp:0:1"]]
~~~


<a id="compare-c8109c95018c8eb828c067a6370a1221"></a>

### [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) → [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) FUN_00c1f528

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c24efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c24efc.md) [`00c25034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25034.md) · 呼出先 43件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c1d69c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1d/00c1d69c.md) [`00c1fbd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1fbd0.md) [`00c1fcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1fcfc.md) [`00c1fe28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1fe28.md)
- 新版 呼出元 2件 [`00c24f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24f98.md) [`00c250d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c250d0.md) · 呼出先 43件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c1d738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d738.md) [`00c1fc6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fc6c.md) [`00c1fd98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fd98.md) [`00c1fec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fec4.md)

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
    "old": {
      "definition_site": "00c1f4bc",
      "incomplete_value": false,
      "site": "00c1f4bc",
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
            "const:6c0:8"
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
    "old": {
      "definition_site": "00c1f668",
      "incomplete_value": true,
      "site": "00c1f668",
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
    "old": {
      "definition_site": "00c1f6a4",
      "incomplete_value": true,
      "site": "00c1f6a8",
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
      "00c1f558",
      "DATA",
      [
        "storage",
        "00c936c0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c1f5e8",
      "READ",
      [
        "storage",
        "01127de8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1f5f0",
      "READ",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1f558",
      "DATA",
      [
        "storage",
        "00c93790",
        null,
        "undefined *"
      ]
    ],
    [
      "00c1f5e8",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1f5f0",
      "READ",
      [
        "storage",
        "01127ee0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1f660 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d38:8"]]
- 00c1f660 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c1f6fc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e08:8"]]
+ 00c1f6fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c1f704 ["INT_ADD", "register:40f0:8", ["const:c1f704:8", "const:4:8"]]
- 00c1f704 ["CALL", null, ["callee:00c204a0:8"]]
+ 00c1f7a0 ["INT_ADD", "register:40f0:8", ["const:c1f7a0:8", "const:4:8"]]
+ 00c1f7a0 ["CALL", null, ["callee:00c204a0:8"]]
- 00c1f744 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d60:8"]]
- 00c1f744 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c1f7e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e30:8"]]
+ 00c1f7e0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-34b8d5c4a46f3bd7bff7ce94b256703d"></a>

### [`00c1fb44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1fb44.md) → [`00c1fbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fbe0.md) _ZNSt6__ndk16locale7classicEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e8c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e8c0.md) · 呼出先 3件 [`00c1d69c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1d/00c1d69c.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c5e990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e990.md) · 呼出先 3件 [`00c1d738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d738.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 68.97% / 新版 68.97%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c1fbac",
      "incomplete_value": true,
      "site": "00c1fbac",
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
            "const:de0:8"
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
    "old": {
      "definition_site": "00c1fb80",
      "incomplete_value": false,
      "site": "00c1fb84",
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
            "const:de8:8"
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
    "old": {
      "definition_site": "00c1fb98",
      "incomplete_value": false,
      "site": "00c1fb9c",
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
      "00c1fbf8",
      "READ",
      [
        "storage",
        "01127de8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1fc04",
      "DATA",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c1fc1c",
      "PARAM",
      [
        "storage",
        "01127de8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c1fbf8",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1fc04",
      "DATA",
      [
        "storage",
        "01127ee0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c1fc1c",
      "PARAM",
      [
        "storage",
        "01127ee8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1fb84 ["INT_ADD", "register:40f0:8", ["const:c1fb84:8", "const:4:8"]]
- 00c1fb84 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c1fc20 ["INT_ADD", "register:40f0:8", ["const:c1fc20:8", "const:4:8"]]
+ 00c1fc20 ["CALL", null, ["callee:00c57f20:8"]]
- 00c1fb9c ["INT_ADD", "register:40f0:8", ["const:c1fb9c:8", "const:4:8"]]
- 00c1fb9c ["CALL", null, ["callee:00c1d738:8"]]
+ 00c1fc38 ["INT_ADD", "register:40f0:8", ["const:c1fc38:8", "const:4:8"]]
+ 00c1fc38 ["CALL", null, ["callee:00c1d738:8"]]
- 00c1fbac ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:de0:8"]]
- 00c1fbac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
+ 00c1fc48 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ee0:8"]]
+ 00c1fc48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-b15b85f489087c51b4e8dd8b83a1c5b3"></a>

### [`00c1fbd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1fbd0.md) → [`00c1fc6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fc6c.md) FUN_00c1fc6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c1fbf4",
      "incomplete_value": true,
      "site": "00c1fbf8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:378:8"
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
    "old": {
      "definition_site": "00c1fc00",
      "incomplete_value": true,
      "site": "00c1fc04",
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
    "old": {
      "definition_site": "00c1fc28",
      "incomplete_value": true,
      "site": "00c1fc2c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:378:8"
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
      "00c1fc90",
      "READ",
      [
        "storage",
        "00c9b378",
        null,
        "pointer"
      ]
    ],
    [
      "00c1fc94",
      "DATA",
      [
        "storage",
        "01127b58",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c1fc98",
      "READ",
      [
        "storage",
        "01127b58",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1fc90",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ],
    [
      "00c1fc94",
      "DATA",
      [
        "storage",
        "01127c58",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c1fc98",
      "READ",
      [
        "storage",
        "01127c58",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1fc2c ["INT_ADD", "register:40f0:8", ["const:c1fc2c:8", "const:4:8"]]
- 00c1fc2c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c1fcc8 ["INT_ADD", "register:40f0:8", ["const:c1fcc8:8", "const:4:8"]]
+ 00c1fcc8 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c1fc94 ["INT_ADD", "register:40f0:8", ["const:c1fc94:8", "const:4:8"]]
- 00c1fc94 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c1fd30 ["INT_ADD", "register:40f0:8", ["const:c1fd30:8", "const:4:8"]]
+ 00c1fd30 ["CALL", null, ["callee:00c53da0:8"]]
- 00c1fbf4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:378:8"]]
- 00c1fbf4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c1fc90 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:448:8"]]
+ 00c1fc90 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1d66147f999d756f85c581ed7729cd88"></a>

### [`00c1fcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1fcfc.md) → [`00c1fd98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fd98.md) FUN_00c1fd98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c1fd20",
      "incomplete_value": true,
      "site": "00c1fd24",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c1fd2c",
      "incomplete_value": true,
      "site": "00c1fd30",
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
    "old": {
      "definition_site": "00c1fd54",
      "incomplete_value": true,
      "site": "00c1fd58",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c1fdbc",
      "READ",
      [
        "storage",
        "00c9bc08",
        null,
        "pointer"
      ]
    ],
    [
      "00c1fdc0",
      "DATA",
      [
        "storage",
        "01127b68",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c1fdc4",
      "READ",
      [
        "storage",
        "01127b68",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1fdbc",
      "READ",
      [
        "storage",
        "00c9bcd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c1fdc0",
      "DATA",
      [
        "storage",
        "01127c68",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c1fdc4",
      "READ",
      [
        "storage",
        "01127c68",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1fd58 ["INT_ADD", "register:40f0:8", ["const:c1fd58:8", "const:4:8"]]
- 00c1fd58 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c1fdf4 ["INT_ADD", "register:40f0:8", ["const:c1fdf4:8", "const:4:8"]]
+ 00c1fdf4 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c1fdc0 ["INT_ADD", "register:40f0:8", ["const:c1fdc0:8", "const:4:8"]]
- 00c1fdc0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c1fe5c ["INT_ADD", "register:40f0:8", ["const:c1fe5c:8", "const:4:8"]]
+ 00c1fe5c ["CALL", null, ["callee:00c53da0:8"]]
- 00c1fd20 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c08:8"]]
- 00c1fd20 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c1fdbc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd8:8"]]
+ 00c1fdbc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1209d73a67f032a7cbf4e5d2b2423226"></a>

### [`00c1fe28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1fe28.md) → [`00c1fec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fec4.md) FUN_00c1fec4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c1fe4c",
      "incomplete_value": true,
      "site": "00c1fe50",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c30:8"
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
    "old": {
      "definition_site": "00c1fe58",
      "incomplete_value": true,
      "site": "00c1fe5c",
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
    "old": {
      "definition_site": "00c1fe80",
      "incomplete_value": true,
      "site": "00c1fe84",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c30:8"
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
      "00c1fee8",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c1feec",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c1fef0",
      "READ",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c1fee8",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c1feec",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c1fef0",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1fe84 ["INT_ADD", "register:40f0:8", ["const:c1fe84:8", "const:4:8"]]
- 00c1fe84 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c1ff20 ["INT_ADD", "register:40f0:8", ["const:c1ff20:8", "const:4:8"]]
+ 00c1ff20 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c1feec ["INT_ADD", "register:40f0:8", ["const:c1feec:8", "const:4:8"]]
- 00c1feec ["CALL", null, ["callee:00c53da0:8"]]
+ 00c1ff88 ["INT_ADD", "register:40f0:8", ["const:c1ff88:8", "const:4:8"]]
+ 00c1ff88 ["CALL", null, ["callee:00c53da0:8"]]
- 00c1fe4c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c30:8"]]
- 00c1fe4c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c1fee8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
+ 00c1fee8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-632a562097407c0f3b7021c4127b6830"></a>

### [`00c1ff54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1ff54.md) → [`00c1fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fff0.md) FUN_00c1fff0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c1ff78",
      "incomplete_value": true,
      "site": "00c1ff7c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b40:8"
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
    "old": {
      "definition_site": "00c1ff84",
      "incomplete_value": true,
      "site": "00c1ff88",
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
    "old": {
      "definition_site": "00c1ffac",
      "incomplete_value": true,
      "site": "00c1ffb0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:b40:8"
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
      "00c20014",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c20018",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c2001c",
      "READ",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c20014",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c20018",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c2001c",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1ffb0 ["INT_ADD", "register:40f0:8", ["const:c1ffb0:8", "const:4:8"]]
- 00c1ffb0 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c2004c ["INT_ADD", "register:40f0:8", ["const:c2004c:8", "const:4:8"]]
+ 00c2004c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c20018 ["INT_ADD", "register:40f0:8", ["const:c20018:8", "const:4:8"]]
- 00c20018 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c200b4 ["INT_ADD", "register:40f0:8", ["const:c200b4:8", "const:4:8"]]
+ 00c200b4 ["CALL", null, ["callee:00c53da0:8"]]
- 00c1ff78 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b40:8"]]
- 00c1ff78 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20014 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c10:8"]]
+ 00c20014 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-453fd57256e30b3f2e66315846c5ed05"></a>

### [`00c20080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c20080.md) → [`00c2011c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c2011c.md) FUN_00c2011c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c200a4",
      "incomplete_value": true,
      "site": "00c200a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8b8:8"
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
    "old": {
      "definition_site": "00c200b0",
      "incomplete_value": true,
      "site": "00c200b4",
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
    "old": {
      "definition_site": "00c200d8",
      "incomplete_value": true,
      "site": "00c200dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8b8:8"
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
      "00c20140",
      "READ",
      [
        "storage",
        "00c9b8b8",
        null,
        "pointer"
      ]
    ],
    [
      "00c20144",
      "DATA",
      [
        "storage",
        "01127e28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c20148",
      "READ",
      [
        "storage",
        "01127e28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c20140",
      "READ",
      [
        "storage",
        "00c9b988",
        null,
        "pointer"
      ]
    ],
    [
      "00c20144",
      "DATA",
      [
        "storage",
        "01127f28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c20148",
      "READ",
      [
        "storage",
        "01127f28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c200dc ["INT_ADD", "register:40f0:8", ["const:c200dc:8", "const:4:8"]]
- 00c200dc ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c20178 ["INT_ADD", "register:40f0:8", ["const:c20178:8", "const:4:8"]]
+ 00c20178 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c20144 ["INT_ADD", "register:40f0:8", ["const:c20144:8", "const:4:8"]]
- 00c20144 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c201e0 ["INT_ADD", "register:40f0:8", ["const:c201e0:8", "const:4:8"]]
+ 00c201e0 ["CALL", null, ["callee:00c53da0:8"]]
- 00c200a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8b8:8"]]
- 00c200a4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20140 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:988:8"]]
+ 00c20140 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-208b85c3029dd782479031a10b706823"></a>

### [`00c201ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c201ac.md) → [`00c20248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20248.md) FUN_00c20248

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c201d0",
      "incomplete_value": true,
      "site": "00c201d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ba8:8"
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
    "old": {
      "definition_site": "00c201dc",
      "incomplete_value": true,
      "site": "00c201e0",
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
    "old": {
      "definition_site": "00c20204",
      "incomplete_value": true,
      "site": "00c20208",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ba8:8"
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
      "00c2026c",
      "READ",
      [
        "storage",
        "00c9bba8",
        null,
        "pointer"
      ]
    ],
    [
      "00c20270",
      "DATA",
      [
        "storage",
        "01127e38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c20274",
      "READ",
      [
        "storage",
        "01127e38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2026c",
      "READ",
      [
        "storage",
        "00c9bc78",
        null,
        "pointer"
      ]
    ],
    [
      "00c20270",
      "DATA",
      [
        "storage",
        "01127f38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c20274",
      "READ",
      [
        "storage",
        "01127f38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20208 ["INT_ADD", "register:40f0:8", ["const:c20208:8", "const:4:8"]]
- 00c20208 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c202a4 ["INT_ADD", "register:40f0:8", ["const:c202a4:8", "const:4:8"]]
+ 00c202a4 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c20270 ["INT_ADD", "register:40f0:8", ["const:c20270:8", "const:4:8"]]
- 00c20270 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c2030c ["INT_ADD", "register:40f0:8", ["const:c2030c:8", "const:4:8"]]
+ 00c2030c ["CALL", null, ["callee:00c53da0:8"]]
- 00c201d0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
- 00c201d0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2026c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
+ 00c2026c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-adde7ffe08d2e2f193e458f0259d599e"></a>

### [`00c202d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c202d8.md) → [`00c20374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20374.md) FUN_00c20374

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c202fc",
      "incomplete_value": true,
      "site": "00c20300",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c28:8"
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
    "old": {
      "definition_site": "00c20308",
      "incomplete_value": true,
      "site": "00c2030c",
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
    "old": {
      "definition_site": "00c20330",
      "incomplete_value": true,
      "site": "00c20334",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c28:8"
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
      "00c20398",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c2039c",
      "DATA",
      [
        "storage",
        "01127e48",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c203a0",
      "READ",
      [
        "storage",
        "01127e48",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c20398",
      "READ",
      [
        "storage",
        "00c9bcf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2039c",
      "DATA",
      [
        "storage",
        "01127f48",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c203a0",
      "READ",
      [
        "storage",
        "01127f48",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20334 ["INT_ADD", "register:40f0:8", ["const:c20334:8", "const:4:8"]]
- 00c20334 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c203d0 ["INT_ADD", "register:40f0:8", ["const:c203d0:8", "const:4:8"]]
+ 00c203d0 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c2039c ["INT_ADD", "register:40f0:8", ["const:c2039c:8", "const:4:8"]]
- 00c2039c ["CALL", null, ["callee:00c53da0:8"]]
+ 00c20438 ["INT_ADD", "register:40f0:8", ["const:c20438:8", "const:4:8"]]
+ 00c20438 ["CALL", null, ["callee:00c53da0:8"]]
- 00c202fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c28:8"]]
- 00c202fc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20398 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf8:8"]]
+ 00c20398 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-57cf8f2f7d4a888c11d28198a8794cd6"></a>

### [`00c20404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c20404.md) → [`00c204a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c204a0.md) FUN_00c204a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c20428",
      "incomplete_value": true,
      "site": "00c2042c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c38:8"
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
    "old": {
      "definition_site": "00c20434",
      "incomplete_value": true,
      "site": "00c20438",
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
    "old": {
      "definition_site": "00c2045c",
      "incomplete_value": true,
      "site": "00c20460",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c38:8"
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
      "00c204c4",
      "READ",
      [
        "storage",
        "00c9bc38",
        null,
        "pointer"
      ]
    ],
    [
      "00c204c8",
      "DATA",
      [
        "storage",
        "01127e68",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c204cc",
      "READ",
      [
        "storage",
        "01127e68",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c204c4",
      "READ",
      [
        "storage",
        "00c9bd08",
        null,
        "pointer"
      ]
    ],
    [
      "00c204c8",
      "DATA",
      [
        "storage",
        "01127f68",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c204cc",
      "READ",
      [
        "storage",
        "01127f68",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20460 ["INT_ADD", "register:40f0:8", ["const:c20460:8", "const:4:8"]]
- 00c20460 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c204fc ["INT_ADD", "register:40f0:8", ["const:c204fc:8", "const:4:8"]]
+ 00c204fc ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c204c8 ["INT_ADD", "register:40f0:8", ["const:c204c8:8", "const:4:8"]]
- 00c204c8 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c20564 ["INT_ADD", "register:40f0:8", ["const:c20564:8", "const:4:8"]]
+ 00c20564 ["CALL", null, ["callee:00c53da0:8"]]
- 00c20428 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c38:8"]]
- 00c20428 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c204c4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d08:8"]]
+ 00c204c4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3f31c0047370fb28f0e330475bf29915"></a>

### [`00c20530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c20530.md) → [`00c205cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c205cc.md) FUN_00c205cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c20554",
      "incomplete_value": true,
      "site": "00c20558",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
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
    "old": {
      "definition_site": "00c20560",
      "incomplete_value": true,
      "site": "00c20564",
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
    "old": {
      "definition_site": "00c20588",
      "incomplete_value": true,
      "site": "00c2058c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
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
      "00c205f0",
      "READ",
      [
        "storage",
        "00c9bc48",
        null,
        "pointer"
      ]
    ],
    [
      "00c205f4",
      "DATA",
      [
        "storage",
        "01127e58",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c205f8",
      "READ",
      [
        "storage",
        "01127e58",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c205f0",
      "READ",
      [
        "storage",
        "00c9bd18",
        null,
        "pointer"
      ]
    ],
    [
      "00c205f4",
      "DATA",
      [
        "storage",
        "01127f58",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c205f8",
      "READ",
      [
        "storage",
        "01127f58",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2058c ["INT_ADD", "register:40f0:8", ["const:c2058c:8", "const:4:8"]]
- 00c2058c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c20628 ["INT_ADD", "register:40f0:8", ["const:c20628:8", "const:4:8"]]
+ 00c20628 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c205f4 ["INT_ADD", "register:40f0:8", ["const:c205f4:8", "const:4:8"]]
- 00c205f4 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c20690 ["INT_ADD", "register:40f0:8", ["const:c20690:8", "const:4:8"]]
+ 00c20690 ["CALL", null, ["callee:00c53da0:8"]]
- 00c20554 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c48:8"]]
- 00c20554 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c205f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d18:8"]]
+ 00c205f0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1307c57f83620c788d16b8b7215bb477"></a>

### [`00c2065c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c2065c.md) → [`00c206f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c206f8.md) FUN_00c206f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c20680",
      "incomplete_value": true,
      "site": "00c20684",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
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
    "old": {
      "definition_site": "00c2068c",
      "incomplete_value": true,
      "site": "00c20690",
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
    "old": {
      "definition_site": "00c206b4",
      "incomplete_value": true,
      "site": "00c206b8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
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
      "00c2071c",
      "READ",
      [
        "storage",
        "00c9bc58",
        null,
        "pointer"
      ]
    ],
    [
      "00c20720",
      "DATA",
      [
        "storage",
        "01127e78",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c20724",
      "READ",
      [
        "storage",
        "01127e78",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2071c",
      "READ",
      [
        "storage",
        "00c9bd28",
        null,
        "pointer"
      ]
    ],
    [
      "00c20720",
      "DATA",
      [
        "storage",
        "01127f78",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c20724",
      "READ",
      [
        "storage",
        "01127f78",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c206b8 ["INT_ADD", "register:40f0:8", ["const:c206b8:8", "const:4:8"]]
- 00c206b8 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c20754 ["INT_ADD", "register:40f0:8", ["const:c20754:8", "const:4:8"]]
+ 00c20754 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c20720 ["INT_ADD", "register:40f0:8", ["const:c20720:8", "const:4:8"]]
- 00c20720 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c207bc ["INT_ADD", "register:40f0:8", ["const:c207bc:8", "const:4:8"]]
+ 00c207bc ["CALL", null, ["callee:00c53da0:8"]]
- 00c20680 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
- 00c20680 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2071c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d28:8"]]
+ 00c2071c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6b08b5af9d6fda1e43bd6c27ccdf4b85"></a>

### [`00c20788`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c20788.md) → [`00c20824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20824.md) FUN_00c20824

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c207ac",
      "incomplete_value": true,
      "site": "00c207b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb8:8"
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
    "old": {
      "definition_site": "00c207b8",
      "incomplete_value": true,
      "site": "00c207bc",
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
    "old": {
      "definition_site": "00c207e0",
      "incomplete_value": true,
      "site": "00c207e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb8:8"
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
      "00c20848",
      "READ",
      [
        "storage",
        "00c9bbb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2084c",
      "DATA",
      [
        "storage",
        "01127e88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c20850",
      "READ",
      [
        "storage",
        "01127e88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c20848",
      "READ",
      [
        "storage",
        "00c9bc88",
        null,
        "pointer"
      ]
    ],
    [
      "00c2084c",
      "DATA",
      [
        "storage",
        "01127f88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c20850",
      "READ",
      [
        "storage",
        "01127f88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c207e4 ["INT_ADD", "register:40f0:8", ["const:c207e4:8", "const:4:8"]]
- 00c207e4 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c20880 ["INT_ADD", "register:40f0:8", ["const:c20880:8", "const:4:8"]]
+ 00c20880 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c2084c ["INT_ADD", "register:40f0:8", ["const:c2084c:8", "const:4:8"]]
- 00c2084c ["CALL", null, ["callee:00c53da0:8"]]
+ 00c208e8 ["INT_ADD", "register:40f0:8", ["const:c208e8:8", "const:4:8"]]
+ 00c208e8 ["CALL", null, ["callee:00c53da0:8"]]
- 00c207ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bb8:8"]]
- 00c207ac ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20848 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
+ 00c20848 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c64aa2b46076746bc86d84f828ddeffd"></a>

### [`00c208b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c208b4.md) → [`00c20950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20950.md) FUN_00c20950

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c208d8",
      "incomplete_value": true,
      "site": "00c208dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bc8:8"
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
    "old": {
      "definition_site": "00c208e4",
      "incomplete_value": true,
      "site": "00c208e8",
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
    "old": {
      "definition_site": "00c2090c",
      "incomplete_value": true,
      "site": "00c20910",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bc8:8"
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
      "00c20974",
      "READ",
      [
        "storage",
        "00c9bbc8",
        null,
        "pointer"
      ]
    ],
    [
      "00c20978",
      "DATA",
      [
        "storage",
        "01127e98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c2097c",
      "READ",
      [
        "storage",
        "01127e98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c20974",
      "READ",
      [
        "storage",
        "00c9bc98",
        null,
        "pointer"
      ]
    ],
    [
      "00c20978",
      "DATA",
      [
        "storage",
        "01127f98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c2097c",
      "READ",
      [
        "storage",
        "01127f98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20910 ["INT_ADD", "register:40f0:8", ["const:c20910:8", "const:4:8"]]
- 00c20910 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c209ac ["INT_ADD", "register:40f0:8", ["const:c209ac:8", "const:4:8"]]
+ 00c209ac ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c20978 ["INT_ADD", "register:40f0:8", ["const:c20978:8", "const:4:8"]]
- 00c20978 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c20a14 ["INT_ADD", "register:40f0:8", ["const:c20a14:8", "const:4:8"]]
+ 00c20a14 ["CALL", null, ["callee:00c53da0:8"]]
- 00c208d8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bc8:8"]]
- 00c208d8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20974 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c98:8"]]
+ 00c20974 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5c89e66a4998d65d5c710dc4288a7ca2"></a>

### [`00c209e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c209e0.md) → [`00c20a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20a7c.md) FUN_00c20a7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c20a04",
      "incomplete_value": true,
      "site": "00c20a08",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c20a10",
      "incomplete_value": true,
      "site": "00c20a14",
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
    "old": {
      "definition_site": "00c20a38",
      "incomplete_value": true,
      "site": "00c20a3c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c20aa0",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c20aa4",
      "DATA",
      [
        "storage",
        "01127bf8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c20aa8",
      "READ",
      [
        "storage",
        "01127bf8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c20aa0",
      "READ",
      [
        "storage",
        "00c9bcb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c20aa4",
      "DATA",
      [
        "storage",
        "01127cf8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c20aa8",
      "READ",
      [
        "storage",
        "01127cf8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20a3c ["INT_ADD", "register:40f0:8", ["const:c20a3c:8", "const:4:8"]]
- 00c20a3c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c20ad8 ["INT_ADD", "register:40f0:8", ["const:c20ad8:8", "const:4:8"]]
+ 00c20ad8 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c20aa4 ["INT_ADD", "register:40f0:8", ["const:c20aa4:8", "const:4:8"]]
- 00c20aa4 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c20b40 ["INT_ADD", "register:40f0:8", ["const:c20b40:8", "const:4:8"]]
+ 00c20b40 ["CALL", null, ["callee:00c53da0:8"]]
- 00c20a04 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be0:8"]]
- 00c20a04 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20aa0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb0:8"]]
+ 00c20aa0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8ac3480e995ef378489d19e0515b5b7d"></a>

### [`00c20b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c20b0c.md) → [`00c20ba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20ba8.md) FUN_00c20ba8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 1件 [`00c5e8d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e8d0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 1件 [`00c5e9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9a0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c20b3c",
      "incomplete_value": true,
      "site": "00c20b3c",
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
      "00c20bc8",
      "READ",
      [
        "storage",
        "00c9bd98",
        null,
        "pointer"
      ]
    ],
    [
      "00c20bd8",
      "DATA",
      [
        "storage",
        "00c95400",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c20bc8",
      "READ",
      [
        "storage",
        "00c9be68",
        null,
        "pointer"
      ]
    ],
    [
      "00c20bd8",
      "DATA",
      [
        "storage",
        "00c954d0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20b2c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
- 00c20b2c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20bc8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e68:8"]]
+ 00c20bc8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c20b30 ["COPY", "register:40a8:8", ["register:4000:8"]]
- 00c20b34 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-89e6989ebe09ecd765b1dd7d7cc5ed8c"></a>

### [`00c20bf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c20bf0.md) → [`00c20c8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20c8c.md) FUN_00c20c8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c20c14",
      "incomplete_value": true,
      "site": "00c20c18",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bd8:8"
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
    "old": {
      "definition_site": "00c20c20",
      "incomplete_value": true,
      "site": "00c20c24",
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
    "old": {
      "definition_site": "00c20c48",
      "incomplete_value": true,
      "site": "00c20c4c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bd8:8"
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
      "00c20cb0",
      "READ",
      [
        "storage",
        "00c9bbd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c20cb4",
      "DATA",
      [
        "storage",
        "01127c08",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c20cb8",
      "READ",
      [
        "storage",
        "01127c08",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c20cb0",
      "READ",
      [
        "storage",
        "00c9bca8",
        null,
        "pointer"
      ]
    ],
    [
      "00c20cb4",
      "DATA",
      [
        "storage",
        "01127d08",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c20cb8",
      "READ",
      [
        "storage",
        "01127d08",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20c4c ["INT_ADD", "register:40f0:8", ["const:c20c4c:8", "const:4:8"]]
- 00c20c4c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c20ce8 ["INT_ADD", "register:40f0:8", ["const:c20ce8:8", "const:4:8"]]
+ 00c20ce8 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c20cb4 ["INT_ADD", "register:40f0:8", ["const:c20cb4:8", "const:4:8"]]
- 00c20cb4 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c20d50 ["INT_ADD", "register:40f0:8", ["const:c20d50:8", "const:4:8"]]
+ 00c20d50 ["CALL", null, ["callee:00c53da0:8"]]
- 00c20c14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bd8:8"]]
- 00c20c14 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20cb0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca8:8"]]
+ 00c20cb0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d00d10d3b95ee00604eda2b72d665230"></a>

### [`00c20d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c20d1c.md) → [`00c20db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20db8.md) FUN_00c20db8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 1件 [`00c5e8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e8e0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 1件 [`00c5e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9b0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c20d4c",
      "incomplete_value": true,
      "site": "00c20d4c",
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
      "00c20dd8",
      "READ",
      [
        "storage",
        "00c9bda0",
        null,
        "pointer"
      ]
    ],
    [
      "00c20de8",
      "DATA",
      [
        "storage",
        "00c95488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c20dd8",
      "READ",
      [
        "storage",
        "00c9be70",
        null,
        "pointer"
      ]
    ],
    [
      "00c20de8",
      "DATA",
      [
        "storage",
        "00c95558",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20d3c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:da0:8"]]
- 00c20d3c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20dd8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e70:8"]]
+ 00c20dd8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c20d40 ["COPY", "register:40a8:8", ["register:4000:8"]]
- 00c20d44 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-9e098e0de67e554ef8a2b80f691c27f4"></a>

### [`00c20e00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c20e00.md) → [`00c20e9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20e9c.md) FUN_00c20e9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c20e24",
      "incomplete_value": true,
      "site": "00c20e28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf0:8"
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
    "old": {
      "definition_site": "00c20e58",
      "incomplete_value": true,
      "site": "00c20e5c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf0:8"
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
      "definition_site": "00c20ee8",
      "incomplete_value": false,
      "site": "00c20ef8",
      "value": [
        "leaf",
        "const:c36054:8"
      ]
    },
    "old": {
      "definition_site": "00c20e4c",
      "incomplete_value": false,
      "site": "00c20e5c",
      "value": [
        "leaf",
        "const:c35fb8:8"
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
      "00c20ec0",
      "READ",
      [
        "storage",
        "00c9bbf0",
        null,
        "pointer"
      ]
    ],
    [
      "00c20ec4",
      "DATA",
      [
        "storage",
        "01127c18",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c20ec8",
      "READ",
      [
        "storage",
        "01127c18",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c20ec0",
      "READ",
      [
        "storage",
        "00c9bcc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c20ec4",
      "DATA",
      [
        "storage",
        "01127d18",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c20ec8",
      "READ",
      [
        "storage",
        "01127d18",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20e5c ["INT_ADD", "register:40f0:8", ["const:c20e5c:8", "const:4:8"]]
- 00c20e5c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c20ef8 ["INT_ADD", "register:40f0:8", ["const:c20ef8:8", "const:4:8"]]
+ 00c20ef8 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c20ec4 ["INT_ADD", "register:40f0:8", ["const:c20ec4:8", "const:4:8"]]
- 00c20ec4 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c20f60 ["INT_ADD", "register:40f0:8", ["const:c20f60:8", "const:4:8"]]
+ 00c20f60 ["CALL", null, ["callee:00c53da0:8"]]
- 00c20e24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bf0:8"]]
- 00c20e24 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20ec0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cc0:8"]]
+ 00c20ec0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c1e69ecd2a876434f27919d42c45d376"></a>

### [`00c20f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c20/00c20f2c.md) → [`00c20fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c20/00c20fc8.md) FUN_00c20fc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 1件 [`00c5e8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e8f0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 1件 [`00c5e9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9c0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c20f5c",
      "incomplete_value": true,
      "site": "00c20f5c",
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
      "00c20fe8",
      "READ",
      [
        "storage",
        "00c9bda8",
        null,
        "pointer"
      ]
    ],
    [
      "00c20ff8",
      "DATA",
      [
        "storage",
        "00c95510",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c20fe8",
      "READ",
      [
        "storage",
        "00c9be78",
        null,
        "pointer"
      ]
    ],
    [
      "00c20ff8",
      "DATA",
      [
        "storage",
        "00c955e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c20f4c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:da8:8"]]
- 00c20f4c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c20fe8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e78:8"]]
+ 00c20fe8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c20f50 ["COPY", "register:40a8:8", ["register:4000:8"]]
- 00c20f54 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-345269ffc253ca7f2cc806707745078a"></a>

### [`00c21010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21010.md) → [`00c210ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c210ac.md) FUN_00c210ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c21034",
      "incomplete_value": true,
      "site": "00c21038",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be8:8"
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
    "old": {
      "definition_site": "00c21040",
      "incomplete_value": true,
      "site": "00c21044",
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
    "old": {
      "definition_site": "00c21068",
      "incomplete_value": true,
      "site": "00c2106c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be8:8"
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
      "00c210d0",
      "READ",
      [
        "storage",
        "00c9bbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c210d4",
      "DATA",
      [
        "storage",
        "01127c28",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c210d8",
      "READ",
      [
        "storage",
        "01127c28",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c210d0",
      "READ",
      [
        "storage",
        "00c9bcb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c210d4",
      "DATA",
      [
        "storage",
        "01127d28",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c210d8",
      "READ",
      [
        "storage",
        "01127d28",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2106c ["INT_ADD", "register:40f0:8", ["const:c2106c:8", "const:4:8"]]
- 00c2106c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c21108 ["INT_ADD", "register:40f0:8", ["const:c21108:8", "const:4:8"]]
+ 00c21108 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c210d4 ["INT_ADD", "register:40f0:8", ["const:c210d4:8", "const:4:8"]]
- 00c210d4 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c21170 ["INT_ADD", "register:40f0:8", ["const:c21170:8", "const:4:8"]]
+ 00c21170 ["CALL", null, ["callee:00c53da0:8"]]
- 00c21034 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
- 00c21034 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c210d0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb8:8"]]
+ 00c210d0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-689744da33a7d48a48b85fccc4e90727"></a>

### [`00c2113c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c2113c.md) → [`00c211d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c211d8.md) FUN_00c211d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 1件 [`00c5e900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e900.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 1件 [`00c5e9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9d0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c2116c",
      "incomplete_value": true,
      "site": "00c2116c",
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
      "00c211f8",
      "READ",
      [
        "storage",
        "00c9bdb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c21208",
      "DATA",
      [
        "storage",
        "00c95598",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c211f8",
      "READ",
      [
        "storage",
        "00c9be80",
        null,
        "pointer"
      ]
    ],
    [
      "00c21208",
      "DATA",
      [
        "storage",
        "00c95668",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2115c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:db0:8"]]
- 00c2115c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c211f8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e80:8"]]
+ 00c211f8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c21160 ["COPY", "register:40a8:8", ["register:4000:8"]]
- 00c21164 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-c88ee811118287dc18095d7a4553ac12"></a>

### [`00c21220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21220.md) → [`00c212bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c212bc.md) FUN_00c212bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c21244",
      "incomplete_value": true,
      "site": "00c21248",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2f0:8"
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
    "old": {
      "definition_site": "00c21250",
      "incomplete_value": true,
      "site": "00c21254",
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
    "old": {
      "definition_site": "00c21278",
      "incomplete_value": true,
      "site": "00c2127c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2f0:8"
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
      "00c212e0",
      "READ",
      [
        "storage",
        "00c9b2f0",
        null,
        "pointer"
      ]
    ],
    [
      "00c212e4",
      "DATA",
      [
        "storage",
        "01127bb8",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c212e8",
      "READ",
      [
        "storage",
        "01127bb8",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c212e0",
      "READ",
      [
        "storage",
        "00c9b3c0",
        null,
        "pointer"
      ]
    ],
    [
      "00c212e4",
      "DATA",
      [
        "storage",
        "01127cb8",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c212e8",
      "READ",
      [
        "storage",
        "01127cb8",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2127c ["INT_ADD", "register:40f0:8", ["const:c2127c:8", "const:4:8"]]
- 00c2127c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c21318 ["INT_ADD", "register:40f0:8", ["const:c21318:8", "const:4:8"]]
+ 00c21318 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c212e4 ["INT_ADD", "register:40f0:8", ["const:c212e4:8", "const:4:8"]]
- 00c212e4 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c21380 ["INT_ADD", "register:40f0:8", ["const:c21380:8", "const:4:8"]]
+ 00c21380 ["CALL", null, ["callee:00c53da0:8"]]
- 00c21244 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:2f0:8"]]
- 00c21244 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c212e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3c0:8"]]
+ 00c212e0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3f6e14cadada43ef876f4b0ae3cd3f3b"></a>

### [`00c2134c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c2134c.md) → [`00c213e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c213e8.md) FUN_00c213e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c213a4",
      "incomplete_value": true,
      "site": "00c213a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cf0:8"
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
      "definition_site": "00c21434",
      "incomplete_value": false,
      "site": "00c21444",
      "value": [
        "leaf",
        "const:c36054:8"
      ]
    },
    "old": {
      "definition_site": "00c21398",
      "incomplete_value": false,
      "site": "00c213a8",
      "value": [
        "leaf",
        "const:c35fb8:8"
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
      "00c2140c",
      "READ",
      [
        "storage",
        "00c9bcf0",
        null,
        "pointer"
      ]
    ],
    [
      "00c21410",
      "DATA",
      [
        "storage",
        "01127bc8",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c21414",
      "READ",
      [
        "storage",
        "01127bc8",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2140c",
      "READ",
      [
        "storage",
        "00c9bdc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c21410",
      "DATA",
      [
        "storage",
        "01127cc8",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c21414",
      "READ",
      [
        "storage",
        "01127cc8",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c213a8 ["INT_ADD", "register:40f0:8", ["const:c213a8:8", "const:4:8"]]
- 00c213a8 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c21444 ["INT_ADD", "register:40f0:8", ["const:c21444:8", "const:4:8"]]
+ 00c21444 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c21370 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf0:8"]]
- 00c21370 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2140c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dc0:8"]]
+ 00c2140c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c21398 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c21434 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-aa8f872d2a19308220b1a1e8ff9f3ca9"></a>

### [`00c21478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21478.md) → [`00c21514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c21514.md) FUN_00c21514

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c2149c",
      "incomplete_value": true,
      "site": "00c214a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2f8:8"
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
    "old": {
      "definition_site": "00c214a8",
      "incomplete_value": true,
      "site": "00c214ac",
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
    "old": {
      "definition_site": "00c214d0",
      "incomplete_value": true,
      "site": "00c214d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2f8:8"
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
      "00c21538",
      "READ",
      [
        "storage",
        "00c9b2f8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2153c",
      "DATA",
      [
        "storage",
        "01127bd8",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c21540",
      "READ",
      [
        "storage",
        "01127bd8",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c21538",
      "READ",
      [
        "storage",
        "00c9b3c8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2153c",
      "DATA",
      [
        "storage",
        "01127cd8",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c21540",
      "READ",
      [
        "storage",
        "01127cd8",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c214d4 ["INT_ADD", "register:40f0:8", ["const:c214d4:8", "const:4:8"]]
- 00c214d4 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c21570 ["INT_ADD", "register:40f0:8", ["const:c21570:8", "const:4:8"]]
+ 00c21570 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c2153c ["INT_ADD", "register:40f0:8", ["const:c2153c:8", "const:4:8"]]
- 00c2153c ["CALL", null, ["callee:00c53da0:8"]]
+ 00c215d8 ["INT_ADD", "register:40f0:8", ["const:c215d8:8", "const:4:8"]]
+ 00c215d8 ["CALL", null, ["callee:00c53da0:8"]]
- 00c2149c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:2f8:8"]]
- 00c2149c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21538 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3c8:8"]]
+ 00c21538 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a7ca2234c8f7ce0b6789dcbfffac00f6"></a>

### [`00c215a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c215a4.md) → [`00c21640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c21640.md) FUN_00c21640

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c215c8",
      "incomplete_value": true,
      "site": "00c215cc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c215d4",
      "incomplete_value": true,
      "site": "00c215d8",
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
    "old": {
      "definition_site": "00c215fc",
      "incomplete_value": true,
      "site": "00c21600",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c21664",
      "READ",
      [
        "storage",
        "00c9bd10",
        null,
        "pointer"
      ]
    ],
    [
      "00c21668",
      "DATA",
      [
        "storage",
        "01127be8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c2166c",
      "READ",
      [
        "storage",
        "01127be8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c21664",
      "READ",
      [
        "storage",
        "00c9bde0",
        null,
        "pointer"
      ]
    ],
    [
      "00c21668",
      "DATA",
      [
        "storage",
        "01127ce8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c2166c",
      "READ",
      [
        "storage",
        "01127ce8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c21600 ["INT_ADD", "register:40f0:8", ["const:c21600:8", "const:4:8"]]
- 00c21600 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c2169c ["INT_ADD", "register:40f0:8", ["const:c2169c:8", "const:4:8"]]
+ 00c2169c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c21668 ["INT_ADD", "register:40f0:8", ["const:c21668:8", "const:4:8"]]
- 00c21668 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c21704 ["INT_ADD", "register:40f0:8", ["const:c21704:8", "const:4:8"]]
+ 00c21704 ["CALL", null, ["callee:00c53da0:8"]]
- 00c215c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d10:8"]]
- 00c215c8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21664 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:de0:8"]]
+ 00c21664 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6b9a007f5584c95822f5d054a0d7de1b"></a>

### [`00c216d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c216d0.md) → [`00c2176c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c2176c.md) FUN_00c2176c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c216f4",
      "incomplete_value": true,
      "site": "00c216f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c21728",
      "incomplete_value": true,
      "site": "00c2172c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c217b8",
      "incomplete_value": false,
      "site": "00c217c8",
      "value": [
        "leaf",
        "const:c36054:8"
      ]
    },
    "old": {
      "definition_site": "00c2171c",
      "incomplete_value": false,
      "site": "00c2172c",
      "value": [
        "leaf",
        "const:c35fb8:8"
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
      "00c21790",
      "READ",
      [
        "storage",
        "00c9bd20",
        null,
        "pointer"
      ]
    ],
    [
      "00c21794",
      "DATA",
      [
        "storage",
        "01127c78",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c21798",
      "READ",
      [
        "storage",
        "01127c78",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c21790",
      "READ",
      [
        "storage",
        "00c9bdf0",
        null,
        "pointer"
      ]
    ],
    [
      "00c21794",
      "DATA",
      [
        "storage",
        "01127d78",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c21798",
      "READ",
      [
        "storage",
        "01127d78",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2172c ["INT_ADD", "register:40f0:8", ["const:c2172c:8", "const:4:8"]]
- 00c2172c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c217c8 ["INT_ADD", "register:40f0:8", ["const:c217c8:8", "const:4:8"]]
+ 00c217c8 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c21794 ["INT_ADD", "register:40f0:8", ["const:c21794:8", "const:4:8"]]
- 00c21794 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c21830 ["INT_ADD", "register:40f0:8", ["const:c21830:8", "const:4:8"]]
+ 00c21830 ["CALL", null, ["callee:00c53da0:8"]]
- 00c216f4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d20:8"]]
- 00c216f4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21790 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:df0:8"]]
+ 00c21790 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-dc659cf0dcdcc65feca5815fb4696915"></a>

### [`00c217fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c217fc.md) → [`00c21898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c21898.md) FUN_00c21898

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) · 呼出先 5件 [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 2件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) · 呼出先 5件 [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c21820",
      "incomplete_value": true,
      "site": "00c21824",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d30:8"
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
    "old": {
      "definition_site": "00c2182c",
      "incomplete_value": true,
      "site": "00c21830",
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
    "old": {
      "definition_site": "00c21854",
      "incomplete_value": true,
      "site": "00c21858",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d30:8"
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
      "00c218bc",
      "READ",
      [
        "storage",
        "00c9bd30",
        null,
        "pointer"
      ]
    ],
    [
      "00c218c0",
      "DATA",
      [
        "storage",
        "01127c88",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c218c4",
      "READ",
      [
        "storage",
        "01127c88",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c218bc",
      "READ",
      [
        "storage",
        "00c9be00",
        null,
        "pointer"
      ]
    ],
    [
      "00c218c0",
      "DATA",
      [
        "storage",
        "01127d88",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c218c4",
      "READ",
      [
        "storage",
        "01127d88",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c21858 ["INT_ADD", "register:40f0:8", ["const:c21858:8", "const:4:8"]]
- 00c21858 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c218f4 ["INT_ADD", "register:40f0:8", ["const:c218f4:8", "const:4:8"]]
+ 00c218f4 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c218c0 ["INT_ADD", "register:40f0:8", ["const:c218c0:8", "const:4:8"]]
- 00c218c0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c2195c ["INT_ADD", "register:40f0:8", ["const:c2195c:8", "const:4:8"]]
+ 00c2195c ["CALL", null, ["callee:00c53da0:8"]]
- 00c21820 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d30:8"]]
- 00c21820 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c218bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
+ 00c218bc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8b65acb26ddf8cf2f96583d1e36b1ee6"></a>

### [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) → [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) FUN_00c219c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c250a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c250a0.md) [`00c251f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c251f0.md) · 呼出先 40件 [`00c1d560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1d/00c1d560.md) [`00c1fbd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1fbd0.md) [`00c1fcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1fcfc.md) [`00c1fe28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1fe28.md) [`00c1ff54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1ff54.md)
- 新版 呼出元 2件 [`00c2513c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c2513c.md) [`00c2528c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c2528c.md) · 呼出先 40件 [`00c1d5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d5fc.md) [`00c1fc6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fc6c.md) [`00c1fd98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fd98.md) [`00c1fec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fec4.md) [`00c1fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1fff0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.59% / 新版 88.59%

優先判定に残った影響 `store_value` 13件

アドレスに依存する影響 `store_value` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c2195c",
      "incomplete_value": false,
      "site": "00c2195c",
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
            "const:6c0:8"
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
    "old": {
      "definition_site": "00c21aec",
      "incomplete_value": true,
      "site": "00c21aec",
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
    "old": {
      "definition_site": "00c21b24",
      "incomplete_value": true,
      "site": "00c21b28",
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
      "00c219f8",
      "DATA",
      [
        "storage",
        "00c936c0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c21b80",
      "READ",
      [
        "storage",
        "00c9bd38",
        null,
        "pointer"
      ]
    ],
    [
      "00c21b88",
      "DATA",
      [
        "storage",
        "00c959d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c219f8",
      "DATA",
      [
        "storage",
        "00c93790",
        null,
        "undefined *"
      ]
    ],
    [
      "00c21b80",
      "READ",
      [
        "storage",
        "00c9be08",
        null,
        "pointer"
      ]
    ],
    [
      "00c21b88",
      "DATA",
      [
        "storage",
        "00c95aa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c21a50 ["INT_ADD", "register:40f0:8", ["const:c21a50:8", "const:4:8"]]
- 00c21a50 ["CALL", null, ["callee:00c5e8f0:8"]]
+ 00c21aec ["INT_ADD", "register:40f0:8", ["const:c21aec:8", "const:4:8"]]
+ 00c21aec ["CALL", null, ["callee:00c5e8f0:8"]]
- 00c21a8c ["INT_ADD", "register:40f0:8", ["const:c21a8c:8", "const:4:8"]]
- 00c21a8c ["CALL", null, ["callee:00c57f60:8"]]
+ 00c21b28 ["INT_ADD", "register:40f0:8", ["const:c21b28:8", "const:4:8"]]
+ 00c21b28 ["CALL", null, ["callee:00c57f60:8"]]
- 00c21bc4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d60:8"]]
- 00c21bc4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c21c60 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e30:8"]]
+ 00c21c60 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-05ba451d3651a6b3af54392bf9ed5ca0"></a>

### [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) → [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) FUN_00c22014

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c25268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25268.md) · 呼出先 33件 [`00c1d560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1d/00c1d560.md) [`00c222dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c222dc.md) [`00c22420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c22420.md) [`00c22564`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c22564.md) [`00c226a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c226a8.md)
- 新版 呼出元 1件 [`00c25304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25304.md) · 呼出先 33件 [`00c1d5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d5fc.md) [`00c22378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22378.md) [`00c224bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c224bc.md) [`00c22600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22600.md) [`00c22744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22744.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.82% / 新版 98.82%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c21fa8",
      "incomplete_value": false,
      "site": "00c21fa8",
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
            "const:6c0:8"
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
      "00c22044",
      "DATA",
      [
        "storage",
        "00c936c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00c22044",
      "DATA",
      [
        "storage",
        "00c93790",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c21f9c ["COPY", "tmp:0:8", ["const:6c0:8"]]
- 00c21f9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00c21f9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00c21f9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00c22038 ["COPY", "tmp:0:8", ["const:790:8"]]
+ 00c22038 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00c22038 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00c22038 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00c2201c ["INT_ADD", "register:40f0:8", ["const:c2201c:8", "const:4:8"]]
- 00c2201c ["CALL", null, ["callee:00c1d5fc:8"]]
+ 00c220b8 ["INT_ADD", "register:40f0:8", ["const:c220b8:8", "const:4:8"]]
+ 00c220b8 ["CALL", null, ["callee:00c1d5fc:8"]]
- 00c22038 ["INT_ADD", "register:40f0:8", ["const:c22038:8", "const:4:8"]]
- 00c22038 ["CALL", null, ["callee:00c35984:8"]]
+ 00c220d4 ["INT_ADD", "register:40f0:8", ["const:c220d4:8", "const:4:8"]]
+ 00c220d4 ["CALL", null, ["callee:00c35984:8"]]
~~~


<a id="compare-17e50fde7b3c850ae5dd522868cfb2c4"></a>

### [`00c222dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c222dc.md) → [`00c22378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22378.md) FUN_00c22378

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c22300",
      "incomplete_value": true,
      "site": "00c22304",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:378:8"
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
    "old": {
      "definition_site": "00c2230c",
      "incomplete_value": true,
      "site": "00c22310",
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
    "old": {
      "definition_site": "00c22334",
      "incomplete_value": true,
      "site": "00c22338",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:378:8"
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
      "00c2239c",
      "READ",
      [
        "storage",
        "00c9b378",
        null,
        "pointer"
      ]
    ],
    [
      "00c223a0",
      "DATA",
      [
        "storage",
        "01127b58",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c223a4",
      "READ",
      [
        "storage",
        "01127b58",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2239c",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ],
    [
      "00c223a0",
      "DATA",
      [
        "storage",
        "01127c58",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c223a4",
      "READ",
      [
        "storage",
        "01127c58",
        "std::__ndk1::collate<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22338 ["INT_ADD", "register:40f0:8", ["const:c22338:8", "const:4:8"]]
- 00c22338 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c223d4 ["INT_ADD", "register:40f0:8", ["const:c223d4:8", "const:4:8"]]
+ 00c223d4 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c22300 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:378:8"]]
- 00c22300 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2239c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:448:8"]]
+ 00c2239c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c22328 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c223c4 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-e41e9d15cea6dc36616c5d04c2381fe6"></a>

### [`00c22420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c22420.md) → [`00c224bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c224bc.md) FUN_00c224bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c22444",
      "incomplete_value": true,
      "site": "00c22448",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c08:8"
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
    "old": {
      "definition_site": "00c22450",
      "incomplete_value": true,
      "site": "00c22454",
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
    "old": {
      "definition_site": "00c22478",
      "incomplete_value": true,
      "site": "00c2247c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c224e0",
      "READ",
      [
        "storage",
        "00c9bc08",
        null,
        "pointer"
      ]
    ],
    [
      "00c224e4",
      "DATA",
      [
        "storage",
        "01127b68",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c224e8",
      "READ",
      [
        "storage",
        "01127b68",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c224e0",
      "READ",
      [
        "storage",
        "00c9bcd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c224e4",
      "DATA",
      [
        "storage",
        "01127c68",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c224e8",
      "READ",
      [
        "storage",
        "01127c68",
        "std::__ndk1::collate<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2247c ["INT_ADD", "register:40f0:8", ["const:c2247c:8", "const:4:8"]]
- 00c2247c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c22518 ["INT_ADD", "register:40f0:8", ["const:c22518:8", "const:4:8"]]
+ 00c22518 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c22444 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c08:8"]]
- 00c22444 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c224e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd8:8"]]
+ 00c224e0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2246c ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c22508 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-fde2604e98eac30807d6e76ce2c96072"></a>

### [`00c22564`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c22564.md) → [`00c22600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22600.md) FUN_00c22600

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c22588",
      "incomplete_value": true,
      "site": "00c2258c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c30:8"
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
    "old": {
      "definition_site": "00c22594",
      "incomplete_value": true,
      "site": "00c22598",
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
    "old": {
      "definition_site": "00c225bc",
      "incomplete_value": true,
      "site": "00c225c0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c30:8"
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
      "00c22624",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c22628",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c2262c",
      "READ",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c22624",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c22628",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c2262c",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c225c0 ["INT_ADD", "register:40f0:8", ["const:c225c0:8", "const:4:8"]]
- 00c225c0 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c2265c ["INT_ADD", "register:40f0:8", ["const:c2265c:8", "const:4:8"]]
+ 00c2265c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c22588 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c30:8"]]
- 00c22588 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c22624 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
+ 00c22624 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c225b0 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c2264c ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-6e517c7ba935c16ab37ce0b41e2351b7"></a>

### [`00c226a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c226a8.md) → [`00c22744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22744.md) FUN_00c22744

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c226cc",
      "incomplete_value": true,
      "site": "00c226d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b40:8"
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
    "old": {
      "definition_site": "00c226d8",
      "incomplete_value": true,
      "site": "00c226dc",
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
    "old": {
      "definition_site": "00c22700",
      "incomplete_value": true,
      "site": "00c22704",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b40:8"
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
      "00c22768",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c2276c",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c22770",
      "READ",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c22768",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c2276c",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c22770",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22704 ["INT_ADD", "register:40f0:8", ["const:c22704:8", "const:4:8"]]
- 00c22704 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c227a0 ["INT_ADD", "register:40f0:8", ["const:c227a0:8", "const:4:8"]]
+ 00c227a0 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c226cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b40:8"]]
- 00c226cc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c22768 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c10:8"]]
+ 00c22768 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c226f4 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c22790 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-4e5443250d5c23b1c60f80bbb0988c48"></a>

### [`00c227ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c227ec.md) → [`00c22888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22888.md) FUN_00c22888

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c22810",
      "incomplete_value": true,
      "site": "00c22814",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8b8:8"
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
    "old": {
      "definition_site": "00c2281c",
      "incomplete_value": true,
      "site": "00c22820",
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
    "old": {
      "definition_site": "00c22844",
      "incomplete_value": true,
      "site": "00c22848",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8b8:8"
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
      "00c228ac",
      "READ",
      [
        "storage",
        "00c9b8b8",
        null,
        "pointer"
      ]
    ],
    [
      "00c228b0",
      "DATA",
      [
        "storage",
        "01127e28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c228b4",
      "READ",
      [
        "storage",
        "01127e28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c228ac",
      "READ",
      [
        "storage",
        "00c9b988",
        null,
        "pointer"
      ]
    ],
    [
      "00c228b0",
      "DATA",
      [
        "storage",
        "01127f28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c228b4",
      "READ",
      [
        "storage",
        "01127f28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22848 ["INT_ADD", "register:40f0:8", ["const:c22848:8", "const:4:8"]]
- 00c22848 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c228e4 ["INT_ADD", "register:40f0:8", ["const:c228e4:8", "const:4:8"]]
+ 00c228e4 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c22810 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8b8:8"]]
- 00c22810 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c228ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:988:8"]]
+ 00c228ac ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c22838 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c228d4 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-0facd5b2f0c2f68dcac2798e692a1055"></a>

### [`00c22930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c22930.md) → [`00c229cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c229cc.md) FUN_00c229cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c22954",
      "incomplete_value": true,
      "site": "00c22958",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c28:8"
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
    "old": {
      "definition_site": "00c22960",
      "incomplete_value": true,
      "site": "00c22964",
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
    "old": {
      "definition_site": "00c22988",
      "incomplete_value": true,
      "site": "00c2298c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c28:8"
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
      "00c229f0",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c229f4",
      "DATA",
      [
        "storage",
        "01127e48",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c229f8",
      "READ",
      [
        "storage",
        "01127e48",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c229f0",
      "READ",
      [
        "storage",
        "00c9bcf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c229f4",
      "DATA",
      [
        "storage",
        "01127f48",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c229f8",
      "READ",
      [
        "storage",
        "01127f48",
        "std::__ndk1::codecvt<char16_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2298c ["INT_ADD", "register:40f0:8", ["const:c2298c:8", "const:4:8"]]
- 00c2298c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c22a28 ["INT_ADD", "register:40f0:8", ["const:c22a28:8", "const:4:8"]]
+ 00c22a28 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c22954 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c28:8"]]
- 00c22954 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c229f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf8:8"]]
+ 00c229f0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2297c ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c22a18 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-672413c8e6af3e3e8f5accb71eb84826"></a>

### [`00c22a74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c22a74.md) → [`00c22b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22b10.md) FUN_00c22b10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c22a98",
      "incomplete_value": true,
      "site": "00c22a9c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c38:8"
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
    "old": {
      "definition_site": "00c22aa4",
      "incomplete_value": true,
      "site": "00c22aa8",
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
    "old": {
      "definition_site": "00c22acc",
      "incomplete_value": true,
      "site": "00c22ad0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c38:8"
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
      "00c22b34",
      "READ",
      [
        "storage",
        "00c9bc38",
        null,
        "pointer"
      ]
    ],
    [
      "00c22b38",
      "DATA",
      [
        "storage",
        "01127e68",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c22b3c",
      "READ",
      [
        "storage",
        "01127e68",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c22b34",
      "READ",
      [
        "storage",
        "00c9bd08",
        null,
        "pointer"
      ]
    ],
    [
      "00c22b38",
      "DATA",
      [
        "storage",
        "01127f68",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c22b3c",
      "READ",
      [
        "storage",
        "01127f68",
        "std::__ndk1::codecvt<char32_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22ad0 ["INT_ADD", "register:40f0:8", ["const:c22ad0:8", "const:4:8"]]
- 00c22ad0 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c22b6c ["INT_ADD", "register:40f0:8", ["const:c22b6c:8", "const:4:8"]]
+ 00c22b6c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c22a98 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c38:8"]]
- 00c22a98 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c22b34 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d08:8"]]
+ 00c22b34 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c22ac0 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c22b5c ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-a7196235e49352aa38b038e9faab853c"></a>

### [`00c22bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c22bb8.md) → [`00c22c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22c54.md) FUN_00c22c54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c22bdc",
      "incomplete_value": true,
      "site": "00c22be0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
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
    "old": {
      "definition_site": "00c22be8",
      "incomplete_value": true,
      "site": "00c22bec",
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
    "old": {
      "definition_site": "00c22c10",
      "incomplete_value": true,
      "site": "00c22c14",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
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
      "00c22c78",
      "READ",
      [
        "storage",
        "00c9bc48",
        null,
        "pointer"
      ]
    ],
    [
      "00c22c7c",
      "DATA",
      [
        "storage",
        "01127e58",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c22c80",
      "READ",
      [
        "storage",
        "01127e58",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c22c78",
      "READ",
      [
        "storage",
        "00c9bd18",
        null,
        "pointer"
      ]
    ],
    [
      "00c22c7c",
      "DATA",
      [
        "storage",
        "01127f58",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c22c80",
      "READ",
      [
        "storage",
        "01127f58",
        "std::__ndk1::codecvt<char16_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22c14 ["INT_ADD", "register:40f0:8", ["const:c22c14:8", "const:4:8"]]
- 00c22c14 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c22cb0 ["INT_ADD", "register:40f0:8", ["const:c22cb0:8", "const:4:8"]]
+ 00c22cb0 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c22bdc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c48:8"]]
- 00c22bdc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c22c78 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d18:8"]]
+ 00c22c78 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c22c04 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c22ca0 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-90768b1f7d12f763f434a4a651d5e139"></a>

### [`00c22cfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c22cfc.md) → [`00c22d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22d98.md) FUN_00c22d98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c22d20",
      "incomplete_value": true,
      "site": "00c22d24",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
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
    "old": {
      "definition_site": "00c22d2c",
      "incomplete_value": true,
      "site": "00c22d30",
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
    "old": {
      "definition_site": "00c22d54",
      "incomplete_value": true,
      "site": "00c22d58",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
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
      "00c22dbc",
      "READ",
      [
        "storage",
        "00c9bc58",
        null,
        "pointer"
      ]
    ],
    [
      "00c22dc0",
      "DATA",
      [
        "storage",
        "01127e78",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c22dc4",
      "READ",
      [
        "storage",
        "01127e78",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c22dbc",
      "READ",
      [
        "storage",
        "00c9bd28",
        null,
        "pointer"
      ]
    ],
    [
      "00c22dc0",
      "DATA",
      [
        "storage",
        "01127f78",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c22dc4",
      "READ",
      [
        "storage",
        "01127f78",
        "std::__ndk1::codecvt<char32_t,char8_t,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22d58 ["INT_ADD", "register:40f0:8", ["const:c22d58:8", "const:4:8"]]
- 00c22d58 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c22df4 ["INT_ADD", "register:40f0:8", ["const:c22df4:8", "const:4:8"]]
+ 00c22df4 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c22d20 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
- 00c22d20 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c22dbc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d28:8"]]
+ 00c22dbc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c22d48 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c22de4 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-a50d990f59496184ff887a26842b4a32"></a>

### [`00c22e40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c22e40.md) → [`00c22edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22edc.md) FUN_00c22edc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c22e64",
      "incomplete_value": true,
      "site": "00c22e68",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ba8:8"
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
    "old": {
      "definition_site": "00c22e70",
      "incomplete_value": true,
      "site": "00c22e74",
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
    "old": {
      "definition_site": "00c22e98",
      "incomplete_value": true,
      "site": "00c22e9c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ba8:8"
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
      "00c22f00",
      "READ",
      [
        "storage",
        "00c9bba8",
        null,
        "pointer"
      ]
    ],
    [
      "00c22f04",
      "DATA",
      [
        "storage",
        "01127e38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c22f08",
      "READ",
      [
        "storage",
        "01127e38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c22f00",
      "READ",
      [
        "storage",
        "00c9bc78",
        null,
        "pointer"
      ]
    ],
    [
      "00c22f04",
      "DATA",
      [
        "storage",
        "01127f38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c22f08",
      "READ",
      [
        "storage",
        "01127f38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22e9c ["INT_ADD", "register:40f0:8", ["const:c22e9c:8", "const:4:8"]]
- 00c22e9c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c22f38 ["INT_ADD", "register:40f0:8", ["const:c22f38:8", "const:4:8"]]
+ 00c22f38 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c22e64 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
- 00c22e64 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c22f00 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
+ 00c22f00 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c22e8c ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c22f28 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-46bc332acd3c5b24901309ffe866c0b1"></a>

### [`00c22f84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c22/00c22f84.md) → [`00c23020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23020.md) FUN_00c23020

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c22fa8",
      "incomplete_value": true,
      "site": "00c22fac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c22fb4",
      "incomplete_value": true,
      "site": "00c22fb8",
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
    "old": {
      "definition_site": "00c22fdc",
      "incomplete_value": true,
      "site": "00c22fe0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c23044",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c23048",
      "DATA",
      [
        "storage",
        "01127bf8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c2304c",
      "READ",
      [
        "storage",
        "01127bf8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23044",
      "READ",
      [
        "storage",
        "00c9bcb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c23048",
      "DATA",
      [
        "storage",
        "01127cf8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c2304c",
      "READ",
      [
        "storage",
        "01127cf8",
        "std::__ndk1::moneypunct<char,false>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c22fe0 ["INT_ADD", "register:40f0:8", ["const:c22fe0:8", "const:4:8"]]
- 00c22fe0 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c2307c ["INT_ADD", "register:40f0:8", ["const:c2307c:8", "const:4:8"]]
+ 00c2307c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c22fa8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be0:8"]]
- 00c22fa8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23044 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb0:8"]]
+ 00c23044 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c22fd0 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c2306c ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-0567470d9af955c20bbbd730a6d9da5b"></a>

### [`00c230c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c230c8.md) → [`00c23164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23164.md) FUN_00c23164

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c230ec",
      "incomplete_value": true,
      "site": "00c230f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bd8:8"
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
    "old": {
      "definition_site": "00c230f8",
      "incomplete_value": true,
      "site": "00c230fc",
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
    "old": {
      "definition_site": "00c23120",
      "incomplete_value": true,
      "site": "00c23124",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bd8:8"
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
      "00c23188",
      "READ",
      [
        "storage",
        "00c9bbd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2318c",
      "DATA",
      [
        "storage",
        "01127c08",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c23190",
      "READ",
      [
        "storage",
        "01127c08",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23188",
      "READ",
      [
        "storage",
        "00c9bca8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2318c",
      "DATA",
      [
        "storage",
        "01127d08",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c23190",
      "READ",
      [
        "storage",
        "01127d08",
        "std::__ndk1::moneypunct<char,true>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23124 ["INT_ADD", "register:40f0:8", ["const:c23124:8", "const:4:8"]]
- 00c23124 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c231c0 ["INT_ADD", "register:40f0:8", ["const:c231c0:8", "const:4:8"]]
+ 00c231c0 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c230ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bd8:8"]]
- 00c230ec ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23188 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca8:8"]]
+ 00c23188 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c23114 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c231b0 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-16e2b1be6f822311fe4cabf4fdde955a"></a>

### [`00c2320c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c2320c.md) → [`00c232a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c232a8.md) FUN_00c232a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c23230",
      "incomplete_value": true,
      "site": "00c23234",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf0:8"
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
    "old": {
      "definition_site": "00c2323c",
      "incomplete_value": true,
      "site": "00c23240",
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
    "old": {
      "definition_site": "00c23264",
      "incomplete_value": true,
      "site": "00c23268",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf0:8"
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
      "00c232cc",
      "READ",
      [
        "storage",
        "00c9bbf0",
        null,
        "pointer"
      ]
    ],
    [
      "00c232d0",
      "DATA",
      [
        "storage",
        "01127c18",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c232d4",
      "READ",
      [
        "storage",
        "01127c18",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c232cc",
      "READ",
      [
        "storage",
        "00c9bcc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c232d0",
      "DATA",
      [
        "storage",
        "01127d18",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ],
    [
      "00c232d4",
      "READ",
      [
        "storage",
        "01127d18",
        "std::__ndk1::moneypunct<wchar_t,false>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23268 ["INT_ADD", "register:40f0:8", ["const:c23268:8", "const:4:8"]]
- 00c23268 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c23304 ["INT_ADD", "register:40f0:8", ["const:c23304:8", "const:4:8"]]
+ 00c23304 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c23230 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bf0:8"]]
- 00c23230 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c232cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cc0:8"]]
+ 00c232cc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c23258 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c232f4 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-0000d06e828809840d22d9a43c99c2c9"></a>

### [`00c23350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c23350.md) → [`00c233ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c233ec.md) FUN_00c233ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c23374",
      "incomplete_value": true,
      "site": "00c23378",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be8:8"
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
    "old": {
      "definition_site": "00c23380",
      "incomplete_value": true,
      "site": "00c23384",
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
    "old": {
      "definition_site": "00c233a8",
      "incomplete_value": true,
      "site": "00c233ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be8:8"
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
      "00c23410",
      "READ",
      [
        "storage",
        "00c9bbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c23414",
      "DATA",
      [
        "storage",
        "01127c28",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c23418",
      "READ",
      [
        "storage",
        "01127c28",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23410",
      "READ",
      [
        "storage",
        "00c9bcb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c23414",
      "DATA",
      [
        "storage",
        "01127d28",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ],
    [
      "00c23418",
      "READ",
      [
        "storage",
        "01127d28",
        "std::__ndk1::moneypunct<wchar_t,true>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c233ac ["INT_ADD", "register:40f0:8", ["const:c233ac:8", "const:4:8"]]
- 00c233ac ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c23448 ["INT_ADD", "register:40f0:8", ["const:c23448:8", "const:4:8"]]
+ 00c23448 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c23374 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
- 00c23374 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23410 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb8:8"]]
+ 00c23410 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2339c ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c23438 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-6aabdc9b553a29d5778a1baeff95afc7"></a>

### [`00c23494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c23494.md) → [`00c23530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23530.md) FUN_00c23530

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c234b8",
      "incomplete_value": true,
      "site": "00c234bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c234c4",
      "incomplete_value": true,
      "site": "00c234c8",
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
    "old": {
      "definition_site": "00c234ec",
      "incomplete_value": true,
      "site": "00c234f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c23554",
      "READ",
      [
        "storage",
        "00c9bca8",
        null,
        "pointer"
      ]
    ],
    [
      "00c23558",
      "DATA",
      [
        "storage",
        "01127c38",
        "std::__ndk1::money_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c2355c",
      "READ",
      [
        "storage",
        "01127c38",
        "std::__ndk1::money_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23554",
      "READ",
      [
        "storage",
        "00c9bd78",
        null,
        "pointer"
      ]
    ],
    [
      "00c23558",
      "DATA",
      [
        "storage",
        "01127d38",
        "std::__ndk1::money_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c2355c",
      "READ",
      [
        "storage",
        "01127d38",
        "std::__ndk1::money_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c234f0 ["INT_ADD", "register:40f0:8", ["const:c234f0:8", "const:4:8"]]
- 00c234f0 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c2358c ["INT_ADD", "register:40f0:8", ["const:c2358c:8", "const:4:8"]]
+ 00c2358c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c234b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca8:8"]]
- 00c234b8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23554 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d78:8"]]
+ 00c23554 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c234e0 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c2357c ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-2b0df40e0276365c53380b3830ef5177"></a>

### [`00c235d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c235d8.md) → [`00c23674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23674.md) FUN_00c23674

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c235fc",
      "incomplete_value": true,
      "site": "00c23600",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c23608",
      "incomplete_value": true,
      "site": "00c2360c",
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
    "old": {
      "definition_site": "00c23630",
      "incomplete_value": true,
      "site": "00c23634",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c23698",
      "READ",
      [
        "storage",
        "00c9bcb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2369c",
      "DATA",
      [
        "storage",
        "01127c48",
        "std::__ndk1::money_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c236a0",
      "READ",
      [
        "storage",
        "01127c48",
        "std::__ndk1::money_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23698",
      "READ",
      [
        "storage",
        "00c9bd88",
        null,
        "pointer"
      ]
    ],
    [
      "00c2369c",
      "DATA",
      [
        "storage",
        "01127d48",
        "std::__ndk1::money_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c236a0",
      "READ",
      [
        "storage",
        "01127d48",
        "std::__ndk1::money_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23634 ["INT_ADD", "register:40f0:8", ["const:c23634:8", "const:4:8"]]
- 00c23634 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c236d0 ["INT_ADD", "register:40f0:8", ["const:c236d0:8", "const:4:8"]]
+ 00c236d0 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c235fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb8:8"]]
- 00c235fc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23698 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
+ 00c23698 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c23624 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c236c0 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-45818b949e244f6c90ec20f30c4f46a6"></a>

### [`00c2371c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c2371c.md) → [`00c237b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c237b8.md) FUN_00c237b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c23740",
      "incomplete_value": true,
      "site": "00c23744",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
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
    "old": {
      "definition_site": "00c2374c",
      "incomplete_value": true,
      "site": "00c23750",
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
    "old": {
      "definition_site": "00c23774",
      "incomplete_value": true,
      "site": "00c23778",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
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
      "00c237dc",
      "READ",
      [
        "storage",
        "00c9bcc8",
        null,
        "pointer"
      ]
    ],
    [
      "00c237e0",
      "DATA",
      [
        "storage",
        "01127c58",
        "std::__ndk1::money_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c237e4",
      "READ",
      [
        "storage",
        "01127c58",
        "std::__ndk1::money_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c237dc",
      "READ",
      [
        "storage",
        "00c9bd98",
        null,
        "pointer"
      ]
    ],
    [
      "00c237e0",
      "DATA",
      [
        "storage",
        "01127d58",
        "std::__ndk1::money_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c237e4",
      "READ",
      [
        "storage",
        "01127d58",
        "std::__ndk1::money_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23778 ["INT_ADD", "register:40f0:8", ["const:c23778:8", "const:4:8"]]
- 00c23778 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c23814 ["INT_ADD", "register:40f0:8", ["const:c23814:8", "const:4:8"]]
+ 00c23814 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c23740 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cc8:8"]]
- 00c23740 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c237dc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d98:8"]]
+ 00c237dc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c23768 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c23804 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-867be670c1bb59074a3a1e678b0f454a"></a>

### [`00c23860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c23860.md) → [`00c238fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c238fc.md) FUN_00c238fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c23884",
      "incomplete_value": true,
      "site": "00c23888",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c23890",
      "incomplete_value": true,
      "site": "00c23894",
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
    "old": {
      "definition_site": "00c238b8",
      "incomplete_value": true,
      "site": "00c238bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c23920",
      "READ",
      [
        "storage",
        "00c9bcd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c23924",
      "DATA",
      [
        "storage",
        "01127c68",
        "std::__ndk1::money_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c23928",
      "READ",
      [
        "storage",
        "01127c68",
        "std::__ndk1::money_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23920",
      "READ",
      [
        "storage",
        "00c9bda8",
        null,
        "pointer"
      ]
    ],
    [
      "00c23924",
      "DATA",
      [
        "storage",
        "01127d68",
        "std::__ndk1::money_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c23928",
      "READ",
      [
        "storage",
        "01127d68",
        "std::__ndk1::money_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c238bc ["INT_ADD", "register:40f0:8", ["const:c238bc:8", "const:4:8"]]
- 00c238bc ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c23958 ["INT_ADD", "register:40f0:8", ["const:c23958:8", "const:4:8"]]
+ 00c23958 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c23884 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd8:8"]]
- 00c23884 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23920 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:da8:8"]]
+ 00c23920 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c238ac ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c23948 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-df49c0e08e7b233abaa9a2f0f140dff9"></a>

### [`00c239a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c239a4.md) → [`00c23a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23a40.md) FUN_00c23a40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c239c8",
      "incomplete_value": true,
      "site": "00c239cc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb8:8"
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
    "old": {
      "definition_site": "00c239fc",
      "incomplete_value": true,
      "site": "00c23a00",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb8:8"
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
      "definition_site": "00c23a8c",
      "incomplete_value": false,
      "site": "00c23a9c",
      "value": [
        "leaf",
        "const:c36054:8"
      ]
    },
    "old": {
      "definition_site": "00c239f0",
      "incomplete_value": false,
      "site": "00c23a00",
      "value": [
        "leaf",
        "const:c35fb8:8"
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
      "00c23a64",
      "READ",
      [
        "storage",
        "00c9bbb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c23a68",
      "DATA",
      [
        "storage",
        "01127e88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c23a6c",
      "READ",
      [
        "storage",
        "01127e88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23a64",
      "READ",
      [
        "storage",
        "00c9bc88",
        null,
        "pointer"
      ]
    ],
    [
      "00c23a68",
      "DATA",
      [
        "storage",
        "01127f88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c23a6c",
      "READ",
      [
        "storage",
        "01127f88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23a00 ["INT_ADD", "register:40f0:8", ["const:c23a00:8", "const:4:8"]]
- 00c23a00 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c23a9c ["INT_ADD", "register:40f0:8", ["const:c23a9c:8", "const:4:8"]]
+ 00c23a9c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c239c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bb8:8"]]
- 00c239c8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23a64 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
+ 00c23a64 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c239f0 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c23a8c ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-76eb9b6ea14b10e2ef1fe5bde423c494"></a>

### [`00c23ae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c23ae8.md) → [`00c23b84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23b84.md) FUN_00c23b84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c23b0c",
      "incomplete_value": true,
      "site": "00c23b10",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bc8:8"
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
    "old": {
      "definition_site": "00c23b18",
      "incomplete_value": true,
      "site": "00c23b1c",
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
    "old": {
      "definition_site": "00c23b40",
      "incomplete_value": true,
      "site": "00c23b44",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:bc8:8"
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
      "00c23ba8",
      "READ",
      [
        "storage",
        "00c9bbc8",
        null,
        "pointer"
      ]
    ],
    [
      "00c23bac",
      "DATA",
      [
        "storage",
        "01127e98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c23bb0",
      "READ",
      [
        "storage",
        "01127e98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23ba8",
      "READ",
      [
        "storage",
        "00c9bc98",
        null,
        "pointer"
      ]
    ],
    [
      "00c23bac",
      "DATA",
      [
        "storage",
        "01127f98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c23bb0",
      "READ",
      [
        "storage",
        "01127f98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23b44 ["INT_ADD", "register:40f0:8", ["const:c23b44:8", "const:4:8"]]
- 00c23b44 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c23be0 ["INT_ADD", "register:40f0:8", ["const:c23be0:8", "const:4:8"]]
+ 00c23be0 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c23b0c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bc8:8"]]
- 00c23b0c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23ba8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c98:8"]]
+ 00c23ba8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c23b34 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c23bd0 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-61bff2622c185b9b66cee6bb34a16ba0"></a>

### [`00c23c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c23c2c.md) → [`00c23cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23cc8.md) FUN_00c23cc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
    "old": {
      "definition_site": "00c23c50",
      "incomplete_value": true,
      "site": "00c23c54",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b10:8"
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
    "old": {
      "definition_site": "00c23c84",
      "incomplete_value": true,
      "site": "00c23c88",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b10:8"
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
      "definition_site": "00c23d14",
      "incomplete_value": false,
      "site": "00c23d24",
      "value": [
        "leaf",
        "const:c36054:8"
      ]
    },
    "old": {
      "definition_site": "00c23c78",
      "incomplete_value": false,
      "site": "00c23c88",
      "value": [
        "leaf",
        "const:c35fb8:8"
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
      "00c23cec",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00c23cf0",
      "DATA",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c23cf4",
      "READ",
      [
        "storage",
        "01127b78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23cec",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c23cf0",
      "DATA",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c23cf4",
      "READ",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23c88 ["INT_ADD", "register:40f0:8", ["const:c23c88:8", "const:4:8"]]
- 00c23c88 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c23d24 ["INT_ADD", "register:40f0:8", ["const:c23d24:8", "const:4:8"]]
+ 00c23d24 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c23c50 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b10:8"]]
- 00c23c50 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23cec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be0:8"]]
+ 00c23cec ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c23c78 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c23d14 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-96df5b7915c8ab6634aaf5c48689edd8"></a>

### [`00c23d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c23d70.md) → [`00c23e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23e0c.md) FUN_00c23e0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
      "definition_site": "00c23e30",
      "incomplete_value": true,
      "site": "00c23e34",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23d94",
      "incomplete_value": true,
      "site": "00c23d98",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b48:8"
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
      "definition_site": "00c23e3c",
      "incomplete_value": true,
      "site": "00c23e40",
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
      "definition_site": "00c23da0",
      "incomplete_value": true,
      "site": "00c23da4",
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
      "definition_site": "00c23e64",
      "incomplete_value": true,
      "site": "00c23e68",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23dc8",
      "incomplete_value": true,
      "site": "00c23dcc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b48:8"
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
      "00c23e30",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c23e34",
      "DATA",
      [
        "storage",
        "01127b88",
        "std::__ndk1::num_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c23e38",
      "READ",
      [
        "storage",
        "01127b88",
        "std::__ndk1::num_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23e30",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c23e34",
      "DATA",
      [
        "storage",
        "01127c88",
        "std::__ndk1::num_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c23e38",
      "READ",
      [
        "storage",
        "01127c88",
        "std::__ndk1::num_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23dcc ["INT_ADD", "register:40f0:8", ["const:c23dcc:8", "const:4:8"]]
- 00c23dcc ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c23e68 ["INT_ADD", "register:40f0:8", ["const:c23e68:8", "const:4:8"]]
+ 00c23e68 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c23d94 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b48:8"]]
- 00c23d94 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23e30 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c18:8"]]
+ 00c23e30 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c23dbc ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c23e58 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-8119da7202193fa0e9ee198160ed915f"></a>

### [`00c23eb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c23eb4.md) → [`00c23f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23f50.md) FUN_00c23f50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
      "definition_site": "00c23f74",
      "incomplete_value": true,
      "site": "00c23f78",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23ed8",
      "incomplete_value": true,
      "site": "00c23edc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:838:8"
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
      "definition_site": "00c23f80",
      "incomplete_value": true,
      "site": "00c23f84",
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
      "definition_site": "00c23ee4",
      "incomplete_value": true,
      "site": "00c23ee8",
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
      "definition_site": "00c23fa8",
      "incomplete_value": true,
      "site": "00c23fac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:908:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c23f0c",
      "incomplete_value": true,
      "site": "00c23f10",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:838:8"
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
      "00c23f74",
      "READ",
      [
        "storage",
        "00c9b838",
        null,
        "pointer"
      ]
    ],
    [
      "00c23f78",
      "DATA",
      [
        "storage",
        "01127b98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c23f7c",
      "READ",
      [
        "storage",
        "01127b98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c23f74",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00c23f78",
      "DATA",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c23f7c",
      "READ",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23f10 ["INT_ADD", "register:40f0:8", ["const:c23f10:8", "const:4:8"]]
- 00c23f10 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c23fac ["INT_ADD", "register:40f0:8", ["const:c23fac:8", "const:4:8"]]
+ 00c23fac ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c23ed8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:838:8"]]
- 00c23ed8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c23f74 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:908:8"]]
+ 00c23f74 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c23f00 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c23f9c ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-faf904107c684e4fd36b9abe8685b8c1"></a>

### [`00c23ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c23/00c23ff8.md) → [`00c24094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24094.md) FUN_00c24094

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
      "definition_site": "00c240b8",
      "incomplete_value": true,
      "site": "00c240bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2401c",
      "incomplete_value": true,
      "site": "00c24020",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b58:8"
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
      "definition_site": "00c240c4",
      "incomplete_value": true,
      "site": "00c240c8",
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
      "definition_site": "00c24028",
      "incomplete_value": true,
      "site": "00c2402c",
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
      "definition_site": "00c240ec",
      "incomplete_value": true,
      "site": "00c240f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c24050",
      "incomplete_value": true,
      "site": "00c24054",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b58:8"
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
      "00c240b8",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c240bc",
      "DATA",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c240c0",
      "READ",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c240b8",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c240bc",
      "DATA",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c240c0",
      "READ",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c24054 ["INT_ADD", "register:40f0:8", ["const:c24054:8", "const:4:8"]]
- 00c24054 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c240f0 ["INT_ADD", "register:40f0:8", ["const:c240f0:8", "const:4:8"]]
+ 00c240f0 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c2401c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b58:8"]]
- 00c2401c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c240b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c28:8"]]
+ 00c240b8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c24044 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c240e0 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-1178824558c7ced68d476acccf506a75"></a>

### [`00c2413c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c2413c.md) → [`00c241d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c241d8.md) FUN_00c241d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
      "definition_site": "00c241fc",
      "incomplete_value": true,
      "site": "00c24200",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c24160",
      "incomplete_value": true,
      "site": "00c24164",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2f0:8"
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
      "definition_site": "00c24208",
      "incomplete_value": true,
      "site": "00c2420c",
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
      "definition_site": "00c2416c",
      "incomplete_value": true,
      "site": "00c24170",
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
      "definition_site": "00c24230",
      "incomplete_value": true,
      "site": "00c24234",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c24194",
      "incomplete_value": true,
      "site": "00c24198",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2f0:8"
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
      "00c241fc",
      "READ",
      [
        "storage",
        "00c9b2f0",
        null,
        "pointer"
      ]
    ],
    [
      "00c24200",
      "DATA",
      [
        "storage",
        "01127bb8",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24204",
      "READ",
      [
        "storage",
        "01127bb8",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c241fc",
      "READ",
      [
        "storage",
        "00c9b3c0",
        null,
        "pointer"
      ]
    ],
    [
      "00c24200",
      "DATA",
      [
        "storage",
        "01127cb8",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24204",
      "READ",
      [
        "storage",
        "01127cb8",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c24198 ["INT_ADD", "register:40f0:8", ["const:c24198:8", "const:4:8"]]
- 00c24198 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c24234 ["INT_ADD", "register:40f0:8", ["const:c24234:8", "const:4:8"]]
+ 00c24234 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c24160 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:2f0:8"]]
- 00c24160 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c241fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3c0:8"]]
+ 00c241fc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c24188 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c24224 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-f390576846cb46145a5ce70fac529f22"></a>

### [`00c24280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c24280.md) → [`00c2431c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c2431c.md) FUN_00c2431c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
      "definition_site": "00c24340",
      "incomplete_value": true,
      "site": "00c24344",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c242a4",
      "incomplete_value": true,
      "site": "00c242a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cf0:8"
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
      "definition_site": "00c2434c",
      "incomplete_value": true,
      "site": "00c24350",
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
      "definition_site": "00c242b0",
      "incomplete_value": true,
      "site": "00c242b4",
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
      "definition_site": "00c24374",
      "incomplete_value": true,
      "site": "00c24378",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c242d8",
      "incomplete_value": true,
      "site": "00c242dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cf0:8"
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
      "00c24340",
      "READ",
      [
        "storage",
        "00c9bcf0",
        null,
        "pointer"
      ]
    ],
    [
      "00c24344",
      "DATA",
      [
        "storage",
        "01127bc8",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24348",
      "READ",
      [
        "storage",
        "01127bc8",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c24340",
      "READ",
      [
        "storage",
        "00c9bdc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c24344",
      "DATA",
      [
        "storage",
        "01127cc8",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24348",
      "READ",
      [
        "storage",
        "01127cc8",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c242dc ["INT_ADD", "register:40f0:8", ["const:c242dc:8", "const:4:8"]]
- 00c242dc ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c24378 ["INT_ADD", "register:40f0:8", ["const:c24378:8", "const:4:8"]]
+ 00c24378 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c242a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf0:8"]]
- 00c242a4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c24340 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dc0:8"]]
+ 00c24340 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c242cc ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c24368 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-48e3e2521719a071fc195ec934c1f9de"></a>

### [`00c243c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c243c4.md) → [`00c24460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24460.md) FUN_00c24460

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
      "definition_site": "00c24484",
      "incomplete_value": true,
      "site": "00c24488",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c243e8",
      "incomplete_value": true,
      "site": "00c243ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2f8:8"
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
      "definition_site": "00c24490",
      "incomplete_value": true,
      "site": "00c24494",
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
      "definition_site": "00c243f4",
      "incomplete_value": true,
      "site": "00c243f8",
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
      "definition_site": "00c244b8",
      "incomplete_value": true,
      "site": "00c244bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c2441c",
      "incomplete_value": true,
      "site": "00c24420",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2f8:8"
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
      "00c24484",
      "READ",
      [
        "storage",
        "00c9b2f8",
        null,
        "pointer"
      ]
    ],
    [
      "00c24488",
      "DATA",
      [
        "storage",
        "01127bd8",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c2448c",
      "READ",
      [
        "storage",
        "01127bd8",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c24484",
      "READ",
      [
        "storage",
        "00c9b3c8",
        null,
        "pointer"
      ]
    ],
    [
      "00c24488",
      "DATA",
      [
        "storage",
        "01127cd8",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c2448c",
      "READ",
      [
        "storage",
        "01127cd8",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c24420 ["INT_ADD", "register:40f0:8", ["const:c24420:8", "const:4:8"]]
- 00c24420 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c244bc ["INT_ADD", "register:40f0:8", ["const:c244bc:8", "const:4:8"]]
+ 00c244bc ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c243e8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:2f8:8"]]
- 00c243e8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c24484 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3c8:8"]]
+ 00c24484 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c24410 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c244ac ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-e259e96e91311512e77bd37d80ad94b9"></a>

### [`00c24508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c24508.md) → [`00c245a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c245a4.md) FUN_00c245a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
      "definition_site": "00c245c8",
      "incomplete_value": true,
      "site": "00c245cc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c2452c",
      "incomplete_value": true,
      "site": "00c24530",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c245d4",
      "incomplete_value": true,
      "site": "00c245d8",
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
      "definition_site": "00c24538",
      "incomplete_value": true,
      "site": "00c2453c",
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
      "definition_site": "00c245fc",
      "incomplete_value": true,
      "site": "00c24600",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c24560",
      "incomplete_value": true,
      "site": "00c24564",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c245c8",
      "READ",
      [
        "storage",
        "00c9bd10",
        null,
        "pointer"
      ]
    ],
    [
      "00c245cc",
      "DATA",
      [
        "storage",
        "01127be8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c245d0",
      "READ",
      [
        "storage",
        "01127be8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c245c8",
      "READ",
      [
        "storage",
        "00c9bde0",
        null,
        "pointer"
      ]
    ],
    [
      "00c245cc",
      "DATA",
      [
        "storage",
        "01127ce8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c245d0",
      "READ",
      [
        "storage",
        "01127ce8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c24564 ["INT_ADD", "register:40f0:8", ["const:c24564:8", "const:4:8"]]
- 00c24564 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c24600 ["INT_ADD", "register:40f0:8", ["const:c24600:8", "const:4:8"]]
+ 00c24600 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c2452c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d10:8"]]
- 00c2452c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c245c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:de0:8"]]
+ 00c245c8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c24554 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c245f0 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-eb16c21430f47acba1bebe20d8addb8c"></a>

### [`00c2464c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c2464c.md) → [`00c246e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c246e8.md) FUN_00c246e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
      "definition_site": "00c2470c",
      "incomplete_value": true,
      "site": "00c24710",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c24670",
      "incomplete_value": true,
      "site": "00c24674",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24718",
      "incomplete_value": true,
      "site": "00c2471c",
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
      "definition_site": "00c2467c",
      "incomplete_value": true,
      "site": "00c24680",
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
      "definition_site": "00c24740",
      "incomplete_value": true,
      "site": "00c24744",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c246a4",
      "incomplete_value": true,
      "site": "00c246a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c2470c",
      "READ",
      [
        "storage",
        "00c9bd20",
        null,
        "pointer"
      ]
    ],
    [
      "00c24710",
      "DATA",
      [
        "storage",
        "01127c78",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c24714",
      "READ",
      [
        "storage",
        "01127c78",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2470c",
      "READ",
      [
        "storage",
        "00c9bdf0",
        null,
        "pointer"
      ]
    ],
    [
      "00c24710",
      "DATA",
      [
        "storage",
        "01127d78",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c24714",
      "READ",
      [
        "storage",
        "01127d78",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c246a8 ["INT_ADD", "register:40f0:8", ["const:c246a8:8", "const:4:8"]]
- 00c246a8 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c24744 ["INT_ADD", "register:40f0:8", ["const:c24744:8", "const:4:8"]]
+ 00c24744 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c24670 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d20:8"]]
- 00c24670 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2470c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:df0:8"]]
+ 00c2470c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c24698 ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c24734 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-8a2a8d25b99d64560a90b07fb04047f9"></a>

### [`00c24790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c24790.md) → [`00c2482c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c2482c.md) FUN_00c2482c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c21f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21f78.md) · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

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
      "definition_site": "00c24850",
      "incomplete_value": true,
      "site": "00c24854",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:e00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c247b4",
      "incomplete_value": true,
      "site": "00c247b8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d30:8"
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
      "definition_site": "00c24884",
      "incomplete_value": true,
      "site": "00c24888",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00c247e8",
      "incomplete_value": true,
      "site": "00c247ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d30:8"
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
      "definition_site": "00c24878",
      "incomplete_value": false,
      "site": "00c24888",
      "value": [
        "leaf",
        "const:c36054:8"
      ]
    },
    "old": {
      "definition_site": "00c247dc",
      "incomplete_value": false,
      "site": "00c247ec",
      "value": [
        "leaf",
        "const:c35fb8:8"
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
      "00c24850",
      "READ",
      [
        "storage",
        "00c9bd30",
        null,
        "pointer"
      ]
    ],
    [
      "00c24854",
      "DATA",
      [
        "storage",
        "01127c88",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c24858",
      "READ",
      [
        "storage",
        "01127c88",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c24850",
      "READ",
      [
        "storage",
        "00c9be00",
        null,
        "pointer"
      ]
    ],
    [
      "00c24854",
      "DATA",
      [
        "storage",
        "01127d88",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c24858",
      "READ",
      [
        "storage",
        "01127d88",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c247ec ["INT_ADD", "register:40f0:8", ["const:c247ec:8", "const:4:8"]]
- 00c247ec ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c24888 ["INT_ADD", "register:40f0:8", ["const:c24888:8", "const:4:8"]]
+ 00c24888 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c247b4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d30:8"]]
- 00c247b4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c24850 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
+ 00c24850 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c247dc ["COPY", "register:4010:8", ["const:c35fb8:8"]]
+ 00c24878 ["COPY", "register:4010:8", ["const:c36054:8"]]
~~~


<a id="compare-aca25aa883e024f53d6e727302227225"></a>

### [`00c248d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c248d4.md) → [`00c24970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24970.md) FUN_00c24970

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c25310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25310.md) · 呼出先 10件 [`00c358d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c358d0.md) [`00c358e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c358e8.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c253ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c253ac.md) · 呼出先 10件 [`00c3596c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c3596c.md) [`00c35984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35984.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 98.25% / 新版 98.25%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c249a0",
      "incomplete_value": false,
      "site": "00c249a0",
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
    "old": {
      "definition_site": "00c24904",
      "incomplete_value": false,
      "site": "00c24904",
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
            "const:6c0:8"
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
      "00c249a0",
      "DATA",
      [
        "storage",
        "00c936c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00c249a0",
      "DATA",
      [
        "storage",
        "00c93790",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c248fc ["COPY", "tmp:0:8", ["const:6c0:8"]]
- 00c248fc ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
- 00c248fc ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
- 00c248fc ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
+ 00c24998 ["COPY", "tmp:0:8", ["const:790:8"]]
+ 00c24998 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
+ 00c24998 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
+ 00c24998 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
- 00c24900 ["COPY", "register:4098:8", ["register:4000:8"]]
- 00c24968 ["INT_ADD", "register:40f0:8", ["const:c24968:8", "const:4:8"]]
- 00c24968 ["CALL", null, ["callee:00c57f60:8"]]
+ 00c24a04 ["INT_ADD", "register:40f0:8", ["const:c24a04:8", "const:4:8"]]
+ 00c24a04 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-7412330641b2a35664eebcac1aa26ede"></a>

### [`00c24ba8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c24ba8.md) → [`00c24c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24c44.md) FUN_00c24c44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c24c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c24c7c.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md)
- 新版 呼出元 1件 [`00c24d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24d18.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.23% / 新版 96.23%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c24c64",
      "incomplete_value": false,
      "site": "00c24c6c",
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
    "old": {
      "definition_site": "00c24bc8",
      "incomplete_value": false,
      "site": "00c24bd0",
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
            "const:6c0:8"
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
      "00c24c6c",
      "DATA",
      [
        "storage",
        "00c936c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00c24c6c",
      "DATA",
      [
        "storage",
        "00c93790",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c24bc8 ["COPY", "tmp:0:8", ["const:6c0:8"]]
- 00c24bc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c24bc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c24bc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c24c64 ["COPY", "tmp:0:8", ["const:790:8"]]
+ 00c24c64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c24c64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c24c64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c24c14 ["INT_ADD", "register:40f0:8", ["const:c24c14:8", "const:4:8"]]
- 00c24c14 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c24cb0 ["INT_ADD", "register:40f0:8", ["const:c24cb0:8", "const:4:8"]]
+ 00c24cb0 ["CALL", null, ["callee:00c53da0:8"]]
- 00c24c28 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c24c28 ["INT_ADD", "register:40f0:8", ["const:c24c28:8", "const:4:8"]]
- 00c24c28 ["CALLIND", null, ["register:0:8"]]
+ 00c24cc4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c24cc4 ["INT_ADD", "register:40f0:8", ["const:c24cc4:8", "const:4:8"]]
+ 00c24cc4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5ae567275f457b673caa7190b7dc8fae"></a>

### [`00c24ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c24ca8.md) → [`00c24d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24d44.md) _ZNSt6__ndk16locale8__globalEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e8c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e8c0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e990.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 74.07% / 新版 74.07%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c24d98",
      "incomplete_value": false,
      "site": "00c24d9c",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c24cfc",
      "incomplete_value": false,
      "site": "00c24d00",
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
            "const:df0:8"
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
      "definition_site": "00c24da4",
      "incomplete_value": false,
      "site": "00c24da8",
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
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c24d08",
      "incomplete_value": false,
      "site": "00c24d0c",
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
            "const:df8:8"
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
      "00c24d5c",
      "READ",
      [
        "storage",
        "01127df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c24d68",
      "DATA",
      [
        "storage",
        "01127df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c24d80",
      "PARAM",
      [
        "storage",
        "01127df8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c24d5c",
      "READ",
      [
        "storage",
        "01127ef8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c24d68",
      "DATA",
      [
        "storage",
        "01127ef0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c24d80",
      "PARAM",
      [
        "storage",
        "01127ef8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c24d00 ["INT_ADD", "register:40f0:8", ["const:c24d00:8", "const:4:8"]]
- 00c24d00 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00c24d9c ["INT_ADD", "register:40f0:8", ["const:c24d9c:8", "const:4:8"]]
+ 00c24d9c ["CALL", null, ["callee:00c5a8a0:8"]]
- 00c24d0c ["INT_ADD", "register:40f0:8", ["const:c24d0c:8", "const:4:8"]]
- 00c24d0c ["CALL", null, ["callee:00c57f40:8"]]
+ 00c24da8 ["INT_ADD", "register:40f0:8", ["const:c24da8:8", "const:4:8"]]
+ 00c24da8 ["CALL", null, ["callee:00c57f40:8"]]
- 00c24cbc ["COPY", "tmp:0:8", ["const:df8:8"]]
- 00c24cbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c24cbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c24cbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c24d58 ["COPY", "tmp:0:8", ["const:ef8:8"]]
+ 00c24d58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c24d58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c24d58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-53db579c121493ef1a02e6947cdc4ed6"></a>

### [`00c24d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c24d2c.md) → [`00c24dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24dc8.md) _ZNSt6__ndk16localeC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7a0.md) · 呼出先 5件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e8c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e8c0.md)
- 新版 呼出元 1件 [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md) · 呼出先 5件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e990.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 63.89% / 新版 63.89%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c24df8",
      "incomplete_value": true,
      "site": "00c24e00",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ef0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c24d5c",
      "incomplete_value": true,
      "site": "00c24d64",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:df0:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24dfc",
      "incomplete_value": true,
      "site": "00c24e04",
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
      "definition_site": "00c24d60",
      "incomplete_value": true,
      "site": "00c24d68",
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c24e28",
      "incomplete_value": false,
      "site": "00c24e2c",
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
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c24d8c",
      "incomplete_value": false,
      "site": "00c24d90",
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
            "const:df8:8"
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
      "00c24de4",
      "READ",
      [
        "storage",
        "01127df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c24df8",
      "READ",
      [
        "storage",
        "01127df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c24e28",
      "PARAM",
      [
        "storage",
        "01127df8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c24de4",
      "READ",
      [
        "storage",
        "01127ef8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c24df8",
      "READ",
      [
        "storage",
        "01127ef0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c24e28",
      "PARAM",
      [
        "storage",
        "01127ef8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c24d90 ["INT_ADD", "register:40f0:8", ["const:c24d90:8", "const:4:8"]]
- 00c24d90 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c24e2c ["INT_ADD", "register:40f0:8", ["const:c24e2c:8", "const:4:8"]]
+ 00c24e2c ["CALL", null, ["callee:00c57f20:8"]]
- 00c24da8 ["INT_ADD", "register:40f0:8", ["const:c24da8:8", "const:4:8"]]
- 00c24da8 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00c24e44 ["INT_ADD", "register:40f0:8", ["const:c24e44:8", "const:4:8"]]
+ 00c24e44 ["CALL", null, ["callee:00c5a8a0:8"]]
- 00c24db4 ["INT_ADD", "register:40f0:8", ["const:c24db4:8", "const:4:8"]]
- 00c24db4 ["CALL", null, ["callee:00c57f40:8"]]
+ 00c24e50 ["INT_ADD", "register:40f0:8", ["const:c24e50:8", "const:4:8"]]
+ 00c24e50 ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-b0a4e7ac125ec41672a3d3aa1a50ae04"></a>

### [`00c24dd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c24dd4.md) → [`00c24e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24e70.md) _ZNSt6__ndk16localeC1ERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 1件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24e80",
      "incomplete_value": true,
      "site": "00c24e88",
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
      "definition_site": "00c24de4",
      "incomplete_value": true,
      "site": "00c24dec",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00c24dec"
      ],
      [
        "FALL_THROUGH",
        "00c24e88"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00c24e80",
      "incomplete_value": true,
      "site": "00c24e90",
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
      "definition_site": "00c24de4",
      "incomplete_value": true,
      "site": "00c24df4",
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00c24dec"
      ],
      [
        "FALL_THROUGH",
        "00c24e88"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00c24e80",
      "incomplete_value": true,
      "site": "00c24e90",
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
      "definition_site": "00c24de4",
      "incomplete_value": true,
      "site": "00c24df4",
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
    "ordinal": 2,
    "slot": 0
  }
]
~~~


~~~diff
- 00c24de0 ["COPY", "tmp:0:8", ["const:ca8:8"]]
- 00c24de0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00c24de0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00c24de0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00c24e7c ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 00c24e7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00c24e7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00c24e7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00c24e04 ["INT_ADD", "register:40f0:8", ["const:c24e04:8", "const:4:8"]]
- 00c24e04 ["CALL", null, ["callee:00c53d70:8"]]
+ 00c24ea0 ["INT_ADD", "register:40f0:8", ["const:c24ea0:8", "const:4:8"]]
+ 00c24ea0 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-111884ad7daf4399b117946fd35fd63f"></a>

### [`00c24e14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c24e14.md) → [`00c24eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24eb0.md) _ZNSt6__ndk16localeD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) · 呼出先 1件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24ecc",
      "incomplete_value": true,
      "site": "00c24ed0",
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
      "definition_site": "00c24e30",
      "incomplete_value": true,
      "site": "00c24e34",
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
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00c24e2c ["COPY", "tmp:0:8", ["const:ca8:8"]]
- 00c24e2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c24e2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c24e2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c24ec8 ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 00c24ec8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c24ec8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c24ec8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c24e40 ["INT_ADD", "register:40f0:8", ["const:c24e40:8", "const:4:8"]]
- 00c24e40 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c24edc ["INT_ADD", "register:40f0:8", ["const:c24edc:8", "const:4:8"]]
+ 00c24edc ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-8e351956b48f7dc0bf35a08b49e1b318"></a>

### [`00c24e74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c24e74.md) → [`00c24f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24f10.md) _ZNSt6__ndk16localeaSERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md) · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md) · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 91.18% / 新版 91.18%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24f38",
      "incomplete_value": true,
      "site": "00c24f3c",
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
      "definition_site": "00c24e9c",
      "incomplete_value": true,
      "site": "00c24ea0",
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
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00c24e90 ["COPY", "tmp:0:8", ["const:ca8:8"]]
- 00c24e90 ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
- 00c24e90 ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
- 00c24e90 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
+ 00c24f2c ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 00c24f2c ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
+ 00c24f2c ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
+ 00c24f2c ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
- 00c24eac ["INT_ADD", "register:40f0:8", ["const:c24eac:8", "const:4:8"]]
- 00c24eac ["CALL", null, ["callee:00c53d70:8"]]
+ 00c24f48 ["INT_ADD", "register:40f0:8", ["const:c24f48:8", "const:4:8"]]
+ 00c24f48 ["CALL", null, ["callee:00c53d70:8"]]
- 00c24ec4 ["INT_ADD", "register:40f0:8", ["const:c24ec4:8", "const:4:8"]]
- 00c24ec4 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c24f60 ["INT_ADD", "register:40f0:8", ["const:c24f60:8", "const:4:8"]]
+ 00c24f60 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-ac28948a025f883ac291cb0a54373802"></a>

### [`00c24efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c24efc.md) → [`00c24f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24f98.md) _ZNSt6__ndk16localeC1EPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c1f48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1f/00c1f48c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.51% / 新版 98.51%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c25094",
      "incomplete_value": false,
      "site": "00c25098",
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
            "const:d9d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c24ff8",
      "incomplete_value": false,
      "site": "00c24ffc",
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
            "const:d5d:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c25094",
      "PARAM",
      [
        "storage",
        "002b5d5d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c25094",
      "PARAM",
      [
        "storage",
        "002b5d9d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c24ffc ["INT_ADD", "register:40f0:8", ["const:c24ffc:8", "const:4:8"]]
- 00c24ffc ["CALL", null, ["callee:00c5e080:8"]]
+ 00c25098 ["INT_ADD", "register:40f0:8", ["const:c25098:8", "const:4:8"]]
+ 00c25098 ["CALL", null, ["callee:00c5e080:8"]]
- 00c24f28 ["INT_ADD", "register:40f0:8", ["const:c24f28:8", "const:4:8"]]
- 00c24f28 ["CALL", null, ["callee:00c57f60:8"]]
+ 00c24fc4 ["INT_ADD", "register:40f0:8", ["const:c24fc4:8", "const:4:8"]]
+ 00c24fc4 ["CALL", null, ["callee:00c57f60:8"]]
- 00c24f34 ["INT_ADD", "register:40f0:8", ["const:c24f34:8", "const:4:8"]]
- 00c24f34 ["CALL", null, ["callee:00c580b0:8"]]
+ 00c24fd0 ["INT_ADD", "register:40f0:8", ["const:c24fd0:8", "const:4:8"]]
+ 00c24fd0 ["CALL", null, ["callee:00c580b0:8"]]
~~~


<a id="compare-620152d6365d04f7e637b733149c21b8"></a>

### [`00c250a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c250a0.md) → [`00c2513c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c2513c.md) _ZNSt6__ndk16localeC1ERKS0_PKci

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c21928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c21/00c21928.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.63% / 新版 98.63%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c25250",
      "incomplete_value": false,
      "site": "00c25254",
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
            "const:d9d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c251b4",
      "incomplete_value": false,
      "site": "00c251b8",
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
            "const:d5d:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c25250",
      "PARAM",
      [
        "storage",
        "002b5d5d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c25250",
      "PARAM",
      [
        "storage",
        "002b5d9d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c251b8 ["INT_ADD", "register:40f0:8", ["const:c251b8:8", "const:4:8"]]
- 00c251b8 ["CALL", null, ["callee:00c5e080:8"]]
+ 00c25254 ["INT_ADD", "register:40f0:8", ["const:c25254:8", "const:4:8"]]
+ 00c25254 ["CALL", null, ["callee:00c5e080:8"]]
- 00c250d8 ["INT_ADD", "register:40f0:8", ["const:c250d8:8", "const:4:8"]]
- 00c250d8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00c25174 ["INT_ADD", "register:40f0:8", ["const:c25174:8", "const:4:8"]]
+ 00c25174 ["CALL", null, ["callee:00c57f60:8"]]
- 00c250e8 ["INT_ADD", "register:40f0:8", ["const:c250e8:8", "const:4:8"]]
- 00c250e8 ["CALL", null, ["callee:00c580b0:8"]]
+ 00c25184 ["INT_ADD", "register:40f0:8", ["const:c25184:8", "const:4:8"]]
+ 00c25184 ["CALL", null, ["callee:00c580b0:8"]]
~~~


<a id="compare-0cfa894292310497c60fc54c9b739886"></a>

### [`00c25310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25310.md) → [`00c253ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c253ac.md) _ZNSt6__ndk16locale14__install_ctorERKS0_PNS0_5facetEl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c248d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c248d4.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c24970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24970.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c25404",
      "incomplete_value": true,
      "site": "00c2540c",
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
                "register:4098:8"
              ],
              "INT_ADD"
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
      "definition_site": "00c25368",
      "incomplete_value": true,
      "site": "00c25370",
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
                "register:4098:8"
              ],
              "INT_ADD"
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
  }
]
~~~


~~~diff
- 00c2533c ["INT_ADD", "register:40f0:8", ["const:c2533c:8", "const:4:8"]]
- 00c2533c ["CALL", null, ["callee:00c57f60:8"]]
+ 00c253d8 ["INT_ADD", "register:40f0:8", ["const:c253d8:8", "const:4:8"]]
+ 00c253d8 ["CALL", null, ["callee:00c57f60:8"]]
- 00c25350 ["INT_ADD", "register:40f0:8", ["const:c25350:8", "const:4:8"]]
- 00c25350 ["CALL", null, ["callee:00c24970:8"]]
+ 00c253ec ["INT_ADD", "register:40f0:8", ["const:c253ec:8", "const:4:8"]]
+ 00c253ec ["CALL", null, ["callee:00c24970:8"]]
- 00c25364 ["COPY", "tmp:0:8", ["const:ca8:8"]]
- 00c25364 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c25364 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c25364 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c25400 ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 00c25400 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c25400 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c25400 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4dd31badda256742b5a177e181318cc8"></a>

### [`00c253a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c253a8.md) → [`00c25444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25444.md) _ZNSt6__ndk16locale6globalERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c254e0",
      "incomplete_value": true,
      "site": "00c254e0",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c25444",
      "incomplete_value": true,
      "site": "00c25444",
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
            "const:df0:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c254b0",
      "incomplete_value": true,
      "site": "00c254b4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              [
                "live",
                "register:40b8:8"
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
      "definition_site": "00c25414",
      "incomplete_value": true,
      "site": "00c25418",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              [
                "live",
                "register:40b8:8"
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2547c",
      "incomplete_value": false,
      "site": "00c25484",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c253e0",
      "incomplete_value": false,
      "site": "00c253e8",
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
            "const:df0:8"
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
      "00c2546c",
      "READ",
      [
        "storage",
        "01127df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2547c",
      "PARAM",
      [
        "storage",
        "01127df0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c254ac",
      "READ",
      [
        "storage",
        "01127df0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c2546c",
      "READ",
      [
        "storage",
        "01127ef8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2547c",
      "PARAM",
      [
        "storage",
        "01127ef0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c254ac",
      "READ",
      [
        "storage",
        "01127ef0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c253e8 ["INT_ADD", "register:40f0:8", ["const:c253e8:8", "const:4:8"]]
- 00c253e8 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00c25484 ["INT_ADD", "register:40f0:8", ["const:c25484:8", "const:4:8"]]
+ 00c25484 ["CALL", null, ["callee:00c5a8a0:8"]]
- 00c25444 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:df0:8"]]
- 00c25444 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
+ 00c254e0 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:ef0:8"]]
+ 00c254e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 00c254b8 ["INT_ADD", "register:40f0:8", ["const:c254b8:8", "const:4:8"]]
- 00c254b8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c25554 ["INT_ADD", "register:40f0:8", ["const:c25554:8", "const:4:8"]]
+ 00c25554 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-e1b72fa3d4c277d25b7052c67161bf96"></a>

### [`00c2585c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c2585c.md) → [`00c258f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c258f8.md) _ZNSt6__ndk114collate_bynameIcEC1EPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00c25934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25934.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.16% / 新版 92.16%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c25924",
      "incomplete_value": true,
      "site": "00c25924",
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
      "definition_site": "00c25888",
      "incomplete_value": true,
      "site": "00c25888",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c25960",
      "incomplete_value": false,
      "site": "00c25970",
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
            "const:a71:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c258c4",
      "incomplete_value": false,
      "site": "00c258d4",
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
            "const:acd:8"
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
      "00c25918",
      "READ",
      [
        "storage",
        "00c9bdb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c25924",
      "DATA",
      [
        "storage",
        "00c936e8",
        null,
        "pointer"
      ]
    ],
    [
      "00c25960",
      "PARAM",
      [
        "storage",
        "002aaacd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c25918",
      "READ",
      [
        "storage",
        "00c9be88",
        null,
        "pointer"
      ]
    ],
    [
      "00c25924",
      "DATA",
      [
        "storage",
        "00c937b8",
        null,
        "pointer"
      ]
    ],
    [
      "00c25960",
      "PARAM",
      [
        "storage",
        "002aaa71",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c258d4 ["INT_ADD", "register:40f0:8", ["const:c258d4:8", "const:4:8"]]
- 00c258d4 ["CALL", null, ["callee:00c259d0:8"]]
+ 00c25970 ["INT_ADD", "register:40f0:8", ["const:c25970:8", "const:4:8"]]
+ 00c25970 ["CALL", null, ["callee:00c259d0:8"]]
- 00c2587c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:db8:8"]]
- 00c2587c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c25918 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e88:8"]]
+ 00c25918 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c25894 ["INT_ADD", "register:40f0:8", ["const:c25894:8", "const:4:8"]]
- 00c25894 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c25930 ["INT_ADD", "register:40f0:8", ["const:c25930:8", "const:4:8"]]
+ 00c25930 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-0c5b011f8d17c6f47580b2b6f622e39a"></a>

### [`00c25998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25998.md) → [`00c25a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25a34.md) _ZNSt6__ndk114collate_bynameIcEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e820.md) · 呼出先 6件 [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 1件 [`00c5e8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e8f0.md) · 呼出先 6件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.49% / 新版 91.49%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c25a60",
      "incomplete_value": true,
      "site": "00c25a60",
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
      "definition_site": "00c259c4",
      "incomplete_value": true,
      "site": "00c259c4",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c25aa0",
      "incomplete_value": false,
      "site": "00c25ab0",
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
            "const:a71:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c25a04",
      "incomplete_value": false,
      "site": "00c25a14",
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
            "const:acd:8"
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
      "00c25a54",
      "READ",
      [
        "storage",
        "00c9bdb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c25a60",
      "DATA",
      [
        "storage",
        "00c936e8",
        null,
        "pointer"
      ]
    ],
    [
      "00c25aa0",
      "PARAM",
      [
        "storage",
        "002aaacd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c25a54",
      "READ",
      [
        "storage",
        "00c9be88",
        null,
        "pointer"
      ]
    ],
    [
      "00c25a60",
      "DATA",
      [
        "storage",
        "00c937b8",
        null,
        "pointer"
      ]
    ],
    [
      "00c25aa0",
      "PARAM",
      [
        "storage",
        "002aaa71",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c25a14 ["INT_ADD", "register:40f0:8", ["const:c25a14:8", "const:4:8"]]
- 00c25a14 ["CALL", null, ["callee:00c58180:8"]]
+ 00c25ab0 ["INT_ADD", "register:40f0:8", ["const:c25ab0:8", "const:4:8"]]
+ 00c25ab0 ["CALL", null, ["callee:00c58180:8"]]
- 00c259b8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:db8:8"]]
- 00c259b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c25a54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e88:8"]]
+ 00c25a54 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c259e0 ["INT_ADD", "register:40f0:8", ["const:c259e0:8", "const:4:8"]]
- 00c259e0 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c25a7c ["INT_ADD", "register:40f0:8", ["const:c25a7c:8", "const:4:8"]]
+ 00c25a7c ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-5371cc6492f38f52bb0335d30ff32118"></a>

### [`00c25a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25a5c.md) → [`00c25af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25af8.md) _ZNSt6__ndk114collate_bynameIcED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e920.md) · 呼出先 2件 [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md) [`00c5d1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1d0.md)
- 新版 呼出元 1件 [`00c5e9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9f0.md) · 呼出先 2件 [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c25b18",
      "incomplete_value": true,
      "site": "00c25b1c",
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
      "definition_site": "00c25a7c",
      "incomplete_value": true,
      "site": "00c25a80",
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
      "00c25b10",
      "READ",
      [
        "storage",
        "00c9bdb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c25b1c",
      "DATA",
      [
        "storage",
        "00c936e8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c25b10",
      "READ",
      [
        "storage",
        "00c9be88",
        null,
        "pointer"
      ]
    ],
    [
      "00c25b1c",
      "DATA",
      [
        "storage",
        "00c937b8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c25a74 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:db8:8"]]
- 00c25a74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c25b10 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e88:8"]]
+ 00c25b10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c25a84 ["INT_ADD", "register:40f0:8", ["const:c25a84:8", "const:4:8"]]
- 00c25a84 ["CALL", null, ["callee:00c5d2a0:8"]]
+ 00c25b20 ["INT_ADD", "register:40f0:8", ["const:c25b20:8", "const:4:8"]]
+ 00c25b20 ["CALL", null, ["callee:00c5d2a0:8"]]
~~~


<a id="compare-f69277bec086d8519f48b23629e80c3e"></a>

### [`00c25ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25ea0.md) → [`00c25f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25f3c.md) _ZNSt6__ndk114collate_bynameIwEC1EPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00c25934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25934.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.08% / 新版 96.08%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c25fa4",
      "incomplete_value": false,
      "site": "00c25fb4",
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
            "const:d4a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c25f08",
      "incomplete_value": false,
      "site": "00c25f18",
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
            "const:d97:8"
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
      "00c25f5c",
      "READ",
      [
        "storage",
        "00c9bdc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c25f68",
      "DATA",
      [
        "storage",
        "00c93728",
        null,
        "pointer"
      ]
    ],
    [
      "00c25fa4",
      "PARAM",
      [
        "storage",
        "0029fd97",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c25f5c",
      "READ",
      [
        "storage",
        "00c9be90",
        null,
        "pointer"
      ]
    ],
    [
      "00c25f68",
      "DATA",
      [
        "storage",
        "00c937f8",
        null,
        "pointer"
      ]
    ],
    [
      "00c25fa4",
      "PARAM",
      [
        "storage",
        "0029fd4a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c25f18 ["INT_ADD", "register:40f0:8", ["const:c25f18:8", "const:4:8"]]
- 00c25f18 ["CALL", null, ["callee:00c259d0:8"]]
+ 00c25fb4 ["INT_ADD", "register:40f0:8", ["const:c25fb4:8", "const:4:8"]]
+ 00c25fb4 ["CALL", null, ["callee:00c259d0:8"]]
- 00c25ec0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dc0:8"]]
- 00c25ec0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c25f5c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e90:8"]]
+ 00c25f5c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c25ed8 ["INT_ADD", "register:40f0:8", ["const:c25ed8:8", "const:4:8"]]
- 00c25ed8 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c25f74 ["INT_ADD", "register:40f0:8", ["const:c25f74:8", "const:4:8"]]
+ 00c25f74 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-9ff9fe9ab3310af86e308df14d6177f1"></a>

### [`00c25f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25f78.md) → [`00c26014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26014.md) _ZNSt6__ndk114collate_bynameIwEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e830.md) · 呼出先 6件 [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 1件 [`00c5e900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e900.md) · 呼出先 6件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.49% / 新版 91.49%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c26040",
      "incomplete_value": true,
      "site": "00c26040",
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
      "definition_site": "00c25fa4",
      "incomplete_value": true,
      "site": "00c25fa4",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c26080",
      "incomplete_value": true,
      "site": "00c26090",
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
            "const:d4a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c25fe4",
      "incomplete_value": true,
      "site": "00c25ff4",
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
            "const:d97:8"
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
      "00c26034",
      "READ",
      [
        "storage",
        "00c9bdc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c26040",
      "DATA",
      [
        "storage",
        "00c93728",
        null,
        "pointer"
      ]
    ],
    [
      "00c26080",
      "PARAM",
      [
        "storage",
        "0029fd97",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c26034",
      "READ",
      [
        "storage",
        "00c9be90",
        null,
        "pointer"
      ]
    ],
    [
      "00c26040",
      "DATA",
      [
        "storage",
        "00c937f8",
        null,
        "pointer"
      ]
    ],
    [
      "00c26080",
      "PARAM",
      [
        "storage",
        "0029fd4a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c25ff4 ["INT_ADD", "register:40f0:8", ["const:c25ff4:8", "const:4:8"]]
- 00c25ff4 ["CALL", null, ["callee:00c58180:8"]]
+ 00c26090 ["INT_ADD", "register:40f0:8", ["const:c26090:8", "const:4:8"]]
+ 00c26090 ["CALL", null, ["callee:00c58180:8"]]
- 00c25f98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dc0:8"]]
- 00c25f98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c26034 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e90:8"]]
+ 00c26034 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c25fc0 ["INT_ADD", "register:40f0:8", ["const:c25fc0:8", "const:4:8"]]
- 00c25fc0 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c2605c ["INT_ADD", "register:40f0:8", ["const:c2605c:8", "const:4:8"]]
+ 00c2605c ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-7c1c5e12e512f42779751eb20ab8f678"></a>

### [`00c2603c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c26/00c2603c.md) → [`00c260d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c260d8.md) _ZNSt6__ndk114collate_bynameIwED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e950.md) · 呼出先 2件 [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md) [`00c5d1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1d0.md)
- 新版 呼出元 1件 [`00c5ea20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea20.md) · 呼出先 2件 [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c260f8",
      "incomplete_value": true,
      "site": "00c260fc",
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
      "definition_site": "00c2605c",
      "incomplete_value": true,
      "site": "00c26060",
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
      "00c260f0",
      "READ",
      [
        "storage",
        "00c9bdc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c260fc",
      "DATA",
      [
        "storage",
        "00c93728",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c260f0",
      "READ",
      [
        "storage",
        "00c9be90",
        null,
        "pointer"
      ]
    ],
    [
      "00c260fc",
      "DATA",
      [
        "storage",
        "00c937f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26054 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dc0:8"]]
- 00c26054 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c260f0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e90:8"]]
+ 00c260f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c26064 ["INT_ADD", "register:40f0:8", ["const:c26064:8", "const:4:8"]]
- 00c26064 ["CALL", null, ["callee:00c5d2a0:8"]]
+ 00c26100 ["INT_ADD", "register:40f0:8", ["const:c26100:8", "const:4:8"]]
+ 00c26100 ["CALL", null, ["callee:00c5d2a0:8"]]
~~~


<a id="compare-bd0dc0ec9e808865fd873b6aa60443f9"></a>

### [`00c26524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c26/00c26524.md) → [`00c265c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c265c0.md) _ZNKSt6__ndk15ctypeIwE5do_isEmw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 63.64% / 新版 63.64%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00c265e4",
      "incomplete_value": true,
      "site": "00c265e8",
      "value": [
        "INT_ZEXT",
        "8",
        [
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
      "definition_site": "00c26548",
      "incomplete_value": true,
      "site": "00c2654c",
      "value": [
        "INT_ZEXT",
        "8",
        [
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
      "00c265dc",
      "DATA",
      [
        "storage",
        "00310f98",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c265dc",
      "DATA",
      [
        "storage",
        "00310fd8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2653c ["COPY", "tmp:0:8", ["const:f98:8"]]
- 00c2653c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c2653c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c2653c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c265d8 ["COPY", "tmp:0:8", ["const:fd8:8"]]
+ 00c265d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c265d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c265d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-acec4db87b003ee3dcda973ed70b6f57"></a>

### [`00c2663c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c26/00c2663c.md) → [`00c266d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c266d8.md) _ZNKSt6__ndk15ctypeIwE10do_toupperEw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md) [`00c5e990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e990.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md) [`00c5ea60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 81.08% / 新版 81.08%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c26758",
      "incomplete_value": true,
      "site": "00c26758",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c266bc",
      "incomplete_value": true,
      "site": "00c266bc",
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
            "const:c98:8"
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
      "definition_site": "00c26738",
      "incomplete_value": false,
      "site": "00c2673c",
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
    "old": {
      "definition_site": "00c2669c",
      "incomplete_value": false,
      "site": "00c266a0",
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
            "const:ca0:8"
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
      "definition_site": "00c26748",
      "incomplete_value": false,
      "site": "00c26754",
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
    "old": {
      "definition_site": "00c266ac",
      "incomplete_value": false,
      "site": "00c266b8",
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
            "const:17c:8"
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
      "00c26700",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26708",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c26738",
      "PARAM",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c26700",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26708",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c26738",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c266a0 ["INT_ADD", "register:40f0:8", ["const:c266a0:8", "const:4:8"]]
- 00c266a0 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2673c ["INT_ADD", "register:40f0:8", ["const:c2673c:8", "const:4:8"]]
+ 00c2673c ["CALL", null, ["callee:00c57f20:8"]]
- 00c266b8 ["INT_ADD", "register:40f0:8", ["const:c266b8:8", "const:4:8"]]
- 00c266b8 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c26754 ["INT_ADD", "register:40f0:8", ["const:c26754:8", "const:4:8"]]
+ 00c26754 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c266bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c98:8"]]
- 00c266bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c26758 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d98:8"]]
+ 00c26758 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-77d0894a9635dcde4b326946a196d2e6"></a>

### [`00c266e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c26/00c266e8.md) → [`00c26784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26784.md) _ZNKSt6__ndk15ctypeIwE10do_toupperEPwPKw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c26810",
      "incomplete_value": true,
      "site": "00c26810",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c26774",
      "incomplete_value": true,
      "site": "00c26774",
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
            "const:c98:8"
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
      "00c267e8",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c267f0",
      "PARAM",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c267fc",
      "PARAM",
      [
        "storage",
        "002b617c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c267e8",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c267f0",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c267fc",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26774 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:c98:8"]]
- 00c26774 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c26810 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d98:8"]]
+ 00c26810 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00c26714 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00c26714 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
- 00c26714 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
- 00c26714 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
+ 00c267b0 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00c267b0 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c267b0 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c267b0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
- 00c26758 ["INT_ADD", "register:40f0:8", ["const:c26758:8", "const:4:8"]]
- 00c26758 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c267f4 ["INT_ADD", "register:40f0:8", ["const:c267f4:8", "const:4:8"]]
+ 00c267f4 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-3a71338d915c237e8d2de71ccf9193df"></a>

### [`00c267bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c26/00c267bc.md) → [`00c26858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26858.md) _ZNKSt6__ndk15ctypeIwE10do_tolowerEw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c268d0",
      "incomplete_value": false,
      "site": "00c268d0",
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
    "old": {
      "definition_site": "00c26834",
      "incomplete_value": false,
      "site": "00c26834",
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
            "const:c98:8"
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
      "definition_site": "00c268ac",
      "incomplete_value": false,
      "site": "00c268b0",
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
    "old": {
      "definition_site": "00c26810",
      "incomplete_value": false,
      "site": "00c26814",
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
            "const:ca0:8"
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
      "definition_site": "00c268bc",
      "incomplete_value": false,
      "site": "00c268c8",
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
    "old": {
      "definition_site": "00c26820",
      "incomplete_value": false,
      "site": "00c2682c",
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
            "const:17c:8"
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
      "00c2687c",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c268ac",
      "PARAM",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c268bc",
      "PARAM",
      [
        "storage",
        "002b617c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c2687c",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c268ac",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c268bc",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26814 ["INT_ADD", "register:40f0:8", ["const:c26814:8", "const:4:8"]]
- 00c26814 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c268b0 ["INT_ADD", "register:40f0:8", ["const:c268b0:8", "const:4:8"]]
+ 00c268b0 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2682c ["INT_ADD", "register:40f0:8", ["const:c2682c:8", "const:4:8"]]
- 00c2682c ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c268c8 ["INT_ADD", "register:40f0:8", ["const:c268c8:8", "const:4:8"]]
+ 00c268c8 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c26834 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c98:8"]]
- 00c26834 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c268d0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
+ 00c268d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-937298a1f288acde30808d65c09abecc"></a>

### [`00c26860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c26/00c26860.md) → [`00c268fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c268fc.md) _ZNKSt6__ndk15ctypeIwE10do_tolowerEPwPKw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c26988",
      "incomplete_value": true,
      "site": "00c26988",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c268ec",
      "incomplete_value": true,
      "site": "00c268ec",
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
            "const:c98:8"
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
      "00c26960",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26968",
      "PARAM",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26974",
      "PARAM",
      [
        "storage",
        "002b617c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c26960",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26968",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26974",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c268ec ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:c98:8"]]
- 00c268ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c26988 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d98:8"]]
+ 00c26988 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00c2688c ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00c2688c ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
- 00c2688c ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
- 00c2688c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
+ 00c26928 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00c26928 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c26928 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c26928 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
- 00c268d0 ["INT_ADD", "register:40f0:8", ["const:c268d0:8", "const:4:8"]]
- 00c268d0 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2696c ["INT_ADD", "register:40f0:8", ["const:c2696c:8", "const:4:8"]]
+ 00c2696c ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-a69e02e6b2ae026cda7029c7f8a0cbf2"></a>

### [`00c26c08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c26/00c26c08.md) → [`00c26ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26ca4.md) _ZNSt6__ndk15ctypeIcEC1EPKmbm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e7e0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5e8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e8b0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 64.29% / 新版 64.29%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c26cbc",
      "incomplete_value": true,
      "site": "00c26cc0",
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
      "definition_site": "00c26c20",
      "incomplete_value": true,
      "site": "00c26c24",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c26cd0",
      "incomplete_value": true,
      "site": "00c26cd4",
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
            "const:fd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c26c34",
      "incomplete_value": true,
      "site": "00c26c38",
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
            "const:f98:8"
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
      "00c26cb0",
      "READ",
      [
        "storage",
        "00c9bdc8",
        null,
        "pointer"
      ]
    ],
    [
      "00c26cc0",
      "DATA",
      [
        "storage",
        "00c93768",
        null,
        "pointer"
      ]
    ],
    [
      "00c26cd4",
      "DATA",
      [
        "storage",
        "00310f98",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c26cb0",
      "READ",
      [
        "storage",
        "00c9be98",
        null,
        "pointer"
      ]
    ],
    [
      "00c26cc0",
      "DATA",
      [
        "storage",
        "00c93838",
        null,
        "pointer"
      ]
    ],
    [
      "00c26cd4",
      "DATA",
      [
        "storage",
        "00310fd8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26c14 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dc8:8"]]
- 00c26c14 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c26cb0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e98:8"]]
+ 00c26cb0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c26c34 ["COPY", "tmp:0:8", ["const:f98:8"]]
- 00c26c34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c26c34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c26c34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c26cd0 ["COPY", "tmp:0:8", ["const:fd8:8"]]
+ 00c26cd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c26cd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c26cd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-12483800e260921d9c571e0cb3caaa72"></a>

### [`00c26cc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c26/00c26cc0.md) → [`00c26d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26d5c.md) _ZNKSt6__ndk15ctypeIcE10do_toupperEc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c26dd4",
      "incomplete_value": false,
      "site": "00c26dd4",
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
    "old": {
      "definition_site": "00c26d38",
      "incomplete_value": false,
      "site": "00c26d38",
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
            "const:c98:8"
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
      "definition_site": "00c26db0",
      "incomplete_value": false,
      "site": "00c26db4",
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
    "old": {
      "definition_site": "00c26d14",
      "incomplete_value": false,
      "site": "00c26d18",
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
            "const:ca0:8"
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
      "definition_site": "00c26dc0",
      "incomplete_value": false,
      "site": "00c26dcc",
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
    "old": {
      "definition_site": "00c26d24",
      "incomplete_value": false,
      "site": "00c26d30",
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
            "const:17c:8"
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
      "00c26d7c",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26db0",
      "PARAM",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26dc0",
      "PARAM",
      [
        "storage",
        "002b617c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c26d7c",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26db0",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26dc0",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26d18 ["INT_ADD", "register:40f0:8", ["const:c26d18:8", "const:4:8"]]
- 00c26d18 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c26db4 ["INT_ADD", "register:40f0:8", ["const:c26db4:8", "const:4:8"]]
+ 00c26db4 ["CALL", null, ["callee:00c57f20:8"]]
- 00c26d30 ["INT_ADD", "register:40f0:8", ["const:c26d30:8", "const:4:8"]]
- 00c26d30 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c26dcc ["INT_ADD", "register:40f0:8", ["const:c26dcc:8", "const:4:8"]]
+ 00c26dcc ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c26d38 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c98:8"]]
- 00c26d38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c26dd4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
+ 00c26dd4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-ed68bd4b3917849443ca2475cf1fc148"></a>

### [`00c26d64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c26/00c26d64.md) → [`00c26e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26e00.md) _ZNKSt6__ndk15ctypeIcE10do_toupperEPcPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c26e8c",
      "incomplete_value": true,
      "site": "00c26e8c",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c26df0",
      "incomplete_value": true,
      "site": "00c26df0",
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
            "const:c98:8"
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
      "00c26e64",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26e6c",
      "PARAM",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26e78",
      "PARAM",
      [
        "storage",
        "002b617c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c26e64",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26e6c",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26e78",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26df0 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:c98:8"]]
- 00c26df0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c26e8c ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d98:8"]]
+ 00c26e8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00c26d90 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00c26d90 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
- 00c26d90 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
- 00c26d90 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
+ 00c26e2c ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00c26e2c ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c26e2c ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c26e2c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
- 00c26dd4 ["INT_ADD", "register:40f0:8", ["const:c26dd4:8", "const:4:8"]]
- 00c26dd4 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c26e70 ["INT_ADD", "register:40f0:8", ["const:c26e70:8", "const:4:8"]]
+ 00c26e70 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-5854d6765b911ff07b63252edf02f05d"></a>

### [`00c26e38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c26/00c26e38.md) → [`00c26ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26ed4.md) _ZNKSt6__ndk15ctypeIcE10do_tolowerEc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c26f4c",
      "incomplete_value": false,
      "site": "00c26f4c",
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
    "old": {
      "definition_site": "00c26eb0",
      "incomplete_value": false,
      "site": "00c26eb0",
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
            "const:c98:8"
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
      "definition_site": "00c26f28",
      "incomplete_value": false,
      "site": "00c26f2c",
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
    "old": {
      "definition_site": "00c26e8c",
      "incomplete_value": false,
      "site": "00c26e90",
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
            "const:ca0:8"
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
      "definition_site": "00c26f38",
      "incomplete_value": true,
      "site": "00c26f44",
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
            "const:1bc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c26e9c",
      "incomplete_value": true,
      "site": "00c26ea8",
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
            "const:17c:8"
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
      "00c26ef4",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26f28",
      "PARAM",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26f38",
      "PARAM",
      [
        "storage",
        "002b617c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c26ef4",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26f28",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26f38",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26e90 ["INT_ADD", "register:40f0:8", ["const:c26e90:8", "const:4:8"]]
- 00c26e90 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c26f2c ["INT_ADD", "register:40f0:8", ["const:c26f2c:8", "const:4:8"]]
+ 00c26f2c ["CALL", null, ["callee:00c57f20:8"]]
- 00c26ea8 ["INT_ADD", "register:40f0:8", ["const:c26ea8:8", "const:4:8"]]
- 00c26ea8 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c26f44 ["INT_ADD", "register:40f0:8", ["const:c26f44:8", "const:4:8"]]
+ 00c26f44 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c26eb0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c98:8"]]
- 00c26eb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c26f4c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
+ 00c26f4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-a78f78df575e234136f73e78ca1094cb"></a>

### [`00c26edc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c26/00c26edc.md) → [`00c26f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26f78.md) _ZNKSt6__ndk15ctypeIcE10do_tolowerEPcPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c27004",
      "incomplete_value": true,
      "site": "00c27004",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c26f68",
      "incomplete_value": true,
      "site": "00c26f68",
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
            "const:c98:8"
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
      "00c26fdc",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26fe4",
      "PARAM",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26ff0",
      "PARAM",
      [
        "storage",
        "002b617c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c26fdc",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26fe4",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26ff0",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26f68 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:c98:8"]]
- 00c26f68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c27004 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d98:8"]]
+ 00c27004 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00c26f08 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00c26f08 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
- 00c26f08 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
- 00c26f08 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
+ 00c26fa4 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00c26fa4 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c26fa4 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c26fa4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
- 00c26f4c ["INT_ADD", "register:40f0:8", ["const:c26f4c:8", "const:4:8"]]
- 00c26f4c ["CALL", null, ["callee:00c57f20:8"]]
+ 00c26fe8 ["INT_ADD", "register:40f0:8", ["const:c26fe8:8", "const:4:8"]]
+ 00c26fe8 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-2d9aeaf65073cac443f34c8966ca817d"></a>

### [`00c27198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c27/00c27198.md) → [`00c27234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c27234.md) _ZNSt6__ndk112ctype_bynameIcEC1EPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e9c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e9c0.md) · 呼出先 7件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00c25934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25934.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 1件 [`00c5ea90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea90.md) · 呼出先 7件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.73% / 新版 92.73%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2726c",
      "incomplete_value": false,
      "site": "00c2726c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:310000:8"
          ],
          [
            "leaf",
            "const:fd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c271d0",
      "incomplete_value": false,
      "site": "00c271d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:310000:8"
          ],
          [
            "leaf",
            "const:f98:8"
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
      "definition_site": "00c272ac",
      "incomplete_value": false,
      "site": "00c272bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b4000:8"
          ],
          [
            "leaf",
            "const:a51:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c27210",
      "incomplete_value": false,
      "site": "00c27220",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b4000:8"
          ],
          [
            "leaf",
            "const:a20:8"
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
      "00c27254",
      "READ",
      [
        "storage",
        "00c9bdd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2726c",
      "DATA",
      [
        "storage",
        "00310f98",
        null,
        null
      ]
    ],
    [
      "00c27270",
      "DATA",
      [
        "storage",
        "00c937d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c27254",
      "READ",
      [
        "storage",
        "00c9bea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2726c",
      "DATA",
      [
        "storage",
        "00310fd8",
        null,
        null
      ]
    ],
    [
      "00c27270",
      "DATA",
      [
        "storage",
        "00c938a0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c27220 ["INT_ADD", "register:40f0:8", ["const:c27220:8", "const:4:8"]]
- 00c27220 ["CALL", null, ["callee:00c259d0:8"]]
+ 00c272bc ["INT_ADD", "register:40f0:8", ["const:c272bc:8", "const:4:8"]]
+ 00c272bc ["CALL", null, ["callee:00c259d0:8"]]
- 00c271b8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:dd0:8"]]
- 00c271b8 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c27254 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:ea0:8"]]
+ 00c27254 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00c271c8 ["COPY", "tmp:0:8", ["const:f98:8"]]
- 00c271c8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00c271c8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00c271c8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00c27264 ["COPY", "tmp:0:8", ["const:fd8:8"]]
+ 00c27264 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00c27264 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00c27264 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-f8d5606a5179aa452f853c7a23235bb1"></a>

### [`00c27280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c27/00c27280.md) → [`00c2731c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c2731c.md) _ZNSt6__ndk112ctype_bynameIcEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5e840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e840.md) [`00c5e9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e9d0.md) · 呼出先 6件 [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md) [`00c5dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c5e910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e910.md) [`00c5eaa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eaa0.md) · 呼出先 6件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c27334",
      "incomplete_value": true,
      "site": "00c2733c",
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
            "const:fd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c27298",
      "incomplete_value": true,
      "site": "00c272a0",
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
            "const:f98:8"
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
      "definition_site": "00c27358",
      "incomplete_value": true,
      "site": "00c27358",
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
      "definition_site": "00c272bc",
      "incomplete_value": true,
      "site": "00c272bc",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c27398",
      "incomplete_value": false,
      "site": "00c273a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b4000:8"
          ],
          [
            "leaf",
            "const:a51:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c272fc",
      "incomplete_value": false,
      "site": "00c2730c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b4000:8"
          ],
          [
            "leaf",
            "const:a20:8"
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
      "00c2733c",
      "DATA",
      [
        "storage",
        "00310f98",
        null,
        null
      ]
    ],
    [
      "00c27348",
      "READ",
      [
        "storage",
        "00c9bdd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c27358",
      "DATA",
      [
        "storage",
        "00c937d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2733c",
      "DATA",
      [
        "storage",
        "00310fd8",
        null,
        null
      ]
    ],
    [
      "00c27348",
      "READ",
      [
        "storage",
        "00c9bea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c27358",
      "DATA",
      [
        "storage",
        "00c938a0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2730c ["INT_ADD", "register:40f0:8", ["const:c2730c:8", "const:4:8"]]
- 00c2730c ["CALL", null, ["callee:00c58180:8"]]
+ 00c273a8 ["INT_ADD", "register:40f0:8", ["const:c273a8:8", "const:4:8"]]
+ 00c273a8 ["CALL", null, ["callee:00c58180:8"]]
- 00c27298 ["COPY", "tmp:0:8", ["const:f98:8"]]
- 00c27298 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c27298 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c27298 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c27334 ["COPY", "tmp:0:8", ["const:fd8:8"]]
+ 00c27334 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c27334 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c27334 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c272ac ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
- 00c272ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c27348 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 00c27348 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ff0c44059b859c6f2a063654a96ff659"></a>

### [`00c27710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c27/00c27710.md) → [`00c277ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c277ac.md) _ZNSt6__ndk112ctype_bynameIwEC2EPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e9f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e9f0.md) · 呼出先 7件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00c25934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25934.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 1件 [`00c5eac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eac0.md) · 呼出先 7件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.16% / 新版 92.16%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c277d8",
      "incomplete_value": true,
      "site": "00c277d8",
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
      "definition_site": "00c2773c",
      "incomplete_value": true,
      "site": "00c2773c",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c27814",
      "incomplete_value": false,
      "site": "00c27824",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bf000:8"
          ],
          [
            "leaf",
            "const:a8c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c27778",
      "incomplete_value": false,
      "site": "00c27788",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bf000:8"
          ],
          [
            "leaf",
            "const:ae0:8"
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
      "00c277cc",
      "READ",
      [
        "storage",
        "00c9bdd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c277d8",
      "DATA",
      [
        "storage",
        "00c93838",
        null,
        "pointer"
      ]
    ],
    [
      "00c27814",
      "PARAM",
      [
        "storage",
        "002bfae0",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c277cc",
      "READ",
      [
        "storage",
        "00c9bea8",
        null,
        "pointer"
      ]
    ],
    [
      "00c277d8",
      "DATA",
      [
        "storage",
        "00c93908",
        null,
        "pointer"
      ]
    ],
    [
      "00c27814",
      "PARAM",
      [
        "storage",
        "002bfa8c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c27788 ["INT_ADD", "register:40f0:8", ["const:c27788:8", "const:4:8"]]
- 00c27788 ["CALL", null, ["callee:00c259d0:8"]]
+ 00c27824 ["INT_ADD", "register:40f0:8", ["const:c27824:8", "const:4:8"]]
+ 00c27824 ["CALL", null, ["callee:00c259d0:8"]]
- 00c27730 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd8:8"]]
- 00c27730 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c277cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea8:8"]]
+ 00c277cc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c27748 ["INT_ADD", "register:40f0:8", ["const:c27748:8", "const:4:8"]]
- 00c27748 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c277e4 ["INT_ADD", "register:40f0:8", ["const:c277e4:8", "const:4:8"]]
+ 00c277e4 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-39fab65e31aff3c0e51059dfeea8918c"></a>

### [`00c277e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c27/00c277e8.md) → [`00c27884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c27884.md) _ZNSt6__ndk112ctype_bynameIwEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5e850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e850.md) [`00c5ea10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ea10.md) · 呼出先 6件 [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md) [`00c5dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 2件 [`00c5e920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e920.md) [`00c5eae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eae0.md) · 呼出先 6件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.49% / 新版 91.49%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c278b0",
      "incomplete_value": true,
      "site": "00c278b0",
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
      "definition_site": "00c27814",
      "incomplete_value": true,
      "site": "00c27814",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c278f0",
      "incomplete_value": false,
      "site": "00c27900",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bf000:8"
          ],
          [
            "leaf",
            "const:a8c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c27854",
      "incomplete_value": false,
      "site": "00c27864",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bf000:8"
          ],
          [
            "leaf",
            "const:ae0:8"
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
      "00c278a4",
      "READ",
      [
        "storage",
        "00c9bdd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c278b0",
      "DATA",
      [
        "storage",
        "00c93838",
        null,
        "pointer"
      ]
    ],
    [
      "00c278f0",
      "PARAM",
      [
        "storage",
        "002bfae0",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c278a4",
      "READ",
      [
        "storage",
        "00c9bea8",
        null,
        "pointer"
      ]
    ],
    [
      "00c278b0",
      "DATA",
      [
        "storage",
        "00c93908",
        null,
        "pointer"
      ]
    ],
    [
      "00c278f0",
      "PARAM",
      [
        "storage",
        "002bfa8c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c27864 ["INT_ADD", "register:40f0:8", ["const:c27864:8", "const:4:8"]]
- 00c27864 ["CALL", null, ["callee:00c58180:8"]]
+ 00c27900 ["INT_ADD", "register:40f0:8", ["const:c27900:8", "const:4:8"]]
+ 00c27900 ["CALL", null, ["callee:00c58180:8"]]
- 00c27808 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd8:8"]]
- 00c27808 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c278a4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea8:8"]]
+ 00c278a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c27830 ["INT_ADD", "register:40f0:8", ["const:c27830:8", "const:4:8"]]
- 00c27830 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c278cc ["INT_ADD", "register:40f0:8", ["const:c278cc:8", "const:4:8"]]
+ 00c278cc ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-753e2cb55203e76fe0716a69e6d3a4d0"></a>

### [`00c28200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c28/00c28200.md) → [`00c2829c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c2829c.md) _ZNSt6__ndk17codecvtIwc9mbstate_tEC1Em

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5a870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a870.md) [`00c5e7f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e7f0.md) · 呼出先 3件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 2件 [`00c5a940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a940.md) [`00c5e8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e8c0.md) · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 74.29% / 新版 74.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c282d8",
      "incomplete_value": true,
      "site": "00c282dc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2823c",
      "incomplete_value": true,
      "site": "00c28240",
      "value": [
        "LOAD",
        "8",
        [
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
    "kind": "store_destination",
    "new": {
      "definition_site": "00c28314",
      "incomplete_value": true,
      "site": "00c28314",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c28278",
      "incomplete_value": true,
      "site": "00c28278",
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
            "const:c98:8"
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
    "new": {
      "definition_site": "00c282f4",
      "incomplete_value": false,
      "site": "00c282f8",
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
    "old": {
      "definition_site": "00c28258",
      "incomplete_value": false,
      "site": "00c2825c",
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
            "const:ca0:8"
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
      "00c282b8",
      "READ",
      [
        "storage",
        "00c9bde0",
        null,
        "pointer"
      ]
    ],
    [
      "00c282c4",
      "DATA",
      [
        "storage",
        "00c938c0",
        null,
        "pointer"
      ]
    ],
    [
      "00c282d0",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c282b8",
      "READ",
      [
        "storage",
        "00c9beb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c282c4",
      "DATA",
      [
        "storage",
        "00c93990",
        null,
        "pointer"
      ]
    ],
    [
      "00c282d0",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2825c ["INT_ADD", "register:40f0:8", ["const:c2825c:8", "const:4:8"]]
- 00c2825c ["CALL", null, ["callee:00c57f20:8"]]
+ 00c282f8 ["INT_ADD", "register:40f0:8", ["const:c282f8:8", "const:4:8"]]
+ 00c282f8 ["CALL", null, ["callee:00c57f20:8"]]
- 00c28278 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c98:8"]]
- 00c28278 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c28314 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d98:8"]]
+ 00c28314 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00c2821c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:de0:8"]]
- 00c2821c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c282b8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:eb0:8"]]
+ 00c282b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-67257b265477fe2c3edc279a0e6e7d6b"></a>

### [`00c2be6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2b/00c2be6c.md) → [`00c2bf08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2bf08.md) _ZNSt6__ndk18numpunctIcEC2Em

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e800.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5e8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e8d0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 72.73% / 新版 72.73%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2bf2c",
      "incomplete_value": true,
      "site": "00c2bf2c",
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
      "definition_site": "00c2be90",
      "incomplete_value": true,
      "site": "00c2be90",
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
      "00c2bf14",
      "READ",
      [
        "storage",
        "00c9bde8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2bf2c",
      "DATA",
      [
        "storage",
        "00c93920",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2bf14",
      "READ",
      [
        "storage",
        "00c9beb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2bf2c",
      "DATA",
      [
        "storage",
        "00c939f0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2be78 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:de8:8"]]
- 00c2be78 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2bf14 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:eb8:8"]]
+ 00c2bf14 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1693ec1332da71b5ab20346858c08c4c"></a>

### [`00c2be98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2b/00c2be98.md) → [`00c2bf34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2bf34.md) _ZNSt6__ndk18numpunctIwEC1Em

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e810.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5e8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e8e0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 58.33% / 新版 58.33%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2bf48",
      "incomplete_value": true,
      "site": "00c2bf58",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:328:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2beac",
      "incomplete_value": true,
      "site": "00c2bebc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2e8:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "00c2bf5c",
      "incomplete_value": true,
      "site": "00c2bf5c",
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
      "definition_site": "00c2bec0",
      "incomplete_value": true,
      "site": "00c2bec0",
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
      "00c2bf44",
      "READ",
      [
        "storage",
        "00c9bdf0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2bf48",
      "READ",
      [
        "storage",
        "002c42e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2bf5c",
      "DATA",
      [
        "storage",
        "00c93970",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2bf44",
      "READ",
      [
        "storage",
        "00c9bec0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2bf48",
      "READ",
      [
        "storage",
        "002c4328",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2bf5c",
      "DATA",
      [
        "storage",
        "00c93a40",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2bea8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:df0:8"]]
- 00c2bea8 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2bf44 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:ec0:8"]]
+ 00c2bf44 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2beac ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2e8:8"]]
- 00c2beac ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2beac ["COPY", "register:5008:8", ["const:0:8"]]
- 00c2beac ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2bf48 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:328:8"]]
+ 00c2bf48 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2bf48 ["COPY", "register:5008:8", ["const:0:8"]]
+ 00c2bf48 ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-937dfc31d1092b52f89012ced3245b4a"></a>

### [`00c2c070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c070.md) → [`00c2c10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c10c.md) _ZNKSt6__ndk18numpunctIwE11do_truenameEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2c11c",
      "incomplete_value": true,
      "site": "00c2c128",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:778:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2c080",
      "incomplete_value": true,
      "site": "00c2c08c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:738:8"
              ]
            ]
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
      "00c2c11c",
      "READ",
      [
        "storage",
        "00310738",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c2c11c",
      "READ",
      [
        "storage",
        "00310778",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c078 ["COPY", "tmp:0:8", ["const:738:8"]]
- 00c2c078 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00c2c078 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00c2c078 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00c2c114 ["COPY", "tmp:0:8", ["const:778:8"]]
+ 00c2c114 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00c2c114 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00c2c114 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-5c01e451bf1d9d894c444a2174c18ad8"></a>

### [`00c2c174`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c174.md) → [`00c2c210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c210.md) _ZNKSt6__ndk18numpunctIwE12do_falsenameEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2c238",
      "incomplete_value": true,
      "site": "00c2c24c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:570:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2c19c",
      "incomplete_value": true,
      "site": "00c2c1b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:530:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "00c2c244",
      "incomplete_value": true,
      "site": "00c2c250",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7f4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2c1a8",
      "incomplete_value": true,
      "site": "00c2c1b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7b4:8"
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
      "00c2c238",
      "READ",
      [
        "storage",
        "002c2530",
        null,
        null
      ]
    ],
    [
      "00c2c244",
      "READ",
      [
        "storage",
        "003107b4",
        null,
        "unicode32"
      ]
    ]
  ],
  "added": [
    [
      "00c2c238",
      "READ",
      [
        "storage",
        "002c2570",
        null,
        null
      ]
    ],
    [
      "00c2c244",
      "READ",
      [
        "storage",
        "003107f4",
        null,
        "unicode32"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c18c ["INT_ADD", "register:40f0:8", ["const:c2c18c:8", "const:4:8"]]
- 00c2c18c ["CALL", null, ["callee:00c57f60:8"]]
+ 00c2c228 ["INT_ADD", "register:40f0:8", ["const:c2c228:8", "const:4:8"]]
+ 00c2c228 ["CALL", null, ["callee:00c57f60:8"]]
- 00c2c19c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:530:8"]]
- 00c2c19c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00c2c19c ["COPY", "register:5010:8", ["const:0:8"]]
- 00c2c19c ["COPY", "register:5018:8", ["const:0:8"]]
+ 00c2c238 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:570:8"]]
+ 00c2c238 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00c2c238 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2c238 ["COPY", "register:5018:8", ["const:0:8"]]
- 00c2c1a0 ["COPY", "register:4040:8", ["const:310000:8"]]
~~~


