# v16.0.1 → v16.0.2 · 最優先の変更候補 (10)

[一覧の目次](README.md)

<a id="compare-6612b1102baab02d6f20bdec6594bf5e"></a>

### [`004eae0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ea/004eae0c.md) → [`004eae4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ea/004eae4c.md) _ZNK5Botan11Private_Key19create_signature_opERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.06% / 新版 92.06%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004eaedc",
      "incomplete_value": true,
      "site": "004eaedc",
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
      "definition_site": "004eae9c",
      "incomplete_value": true,
      "site": "004eae9c",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004eaf14",
      "incomplete_value": true,
      "site": "004eaf18",
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
      "definition_site": "004eaed4",
      "incomplete_value": true,
      "site": "004eaed8",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004eaea0",
      "incomplete_value": false,
      "site": "004eaea8",
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
            "const:248:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eae60",
      "incomplete_value": false,
      "site": "004eae68",
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
            "const:208:8"
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
      "004eaea0",
      "PARAM",
      [
        "storage",
        "002b8208",
        null,
        "string"
      ]
    ],
    [
      "004eaec8",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ],
    [
      "004eaedc",
      "DATA",
      [
        "storage",
        "00c67428",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004eaea0",
      "PARAM",
      [
        "storage",
        "002b8248",
        null,
        "string"
      ]
    ],
    [
      "004eaec8",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ],
    [
      "004eaedc",
      "DATA",
      [
        "storage",
        "00c674f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004eae68 ["INT_ADD", "register:40f0:8", ["const:4eae68:8", "const:4:8"]]
- 004eae68 ["CALL", null, ["callee:00c58040:8"]]
+ 004eaea8 ["INT_ADD", "register:40f0:8", ["const:4eaea8:8", "const:4:8"]]
+ 004eaea8 ["CALL", null, ["callee:00c58040:8"]]
- 004eaf00 ["INT_ADD", "register:40f0:8", ["const:4eaf00:8", "const:4:8"]]
- 004eaf00 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004eaf40 ["INT_ADD", "register:40f0:8", ["const:4eaf40:8", "const:4:8"]]
+ 004eaf40 ["CALL", null, ["callee:00c57fe0:8"]]
- 004eae38 ["INT_ADD", "register:40f0:8", ["const:4eae38:8", "const:4:8"]]
- 004eae38 ["CALL", null, ["callee:00c57fc0:8"]]
+ 004eae78 ["INT_ADD", "register:40f0:8", ["const:4eae78:8", "const:4:8"]]
+ 004eae78 ["CALL", null, ["callee:00c57fc0:8"]]
~~~


<a id="compare-e539b57e4c3a605b7d9176bddae1ce4b"></a>

### [`004eaf98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ea/004eaf98.md) → [`004eafd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ea/004eafd8.md) _ZNK5Botan11Private_Key23create_key_agreement_opERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocator

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.06% / 新版 92.06%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004eb068",
      "incomplete_value": true,
      "site": "004eb068",
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
      "definition_site": "004eb028",
      "incomplete_value": true,
      "site": "004eb028",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004eb0a0",
      "incomplete_value": true,
      "site": "004eb0a4",
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
      "definition_site": "004eb060",
      "incomplete_value": true,
      "site": "004eb064",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004eb02c",
      "incomplete_value": false,
      "site": "004eb034",
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
            "const:2c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eafec",
      "incomplete_value": false,
      "site": "004eaff4",
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
            "const:79:8"
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
      "004eb02c",
      "PARAM",
      [
        "storage",
        "002a0079",
        null,
        "string"
      ]
    ],
    [
      "004eb054",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ],
    [
      "004eb068",
      "DATA",
      [
        "storage",
        "00c67428",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004eb02c",
      "PARAM",
      [
        "storage",
        "002a002c",
        null,
        "string"
      ]
    ],
    [
      "004eb054",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ],
    [
      "004eb068",
      "DATA",
      [
        "storage",
        "00c674f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004eaff4 ["INT_ADD", "register:40f0:8", ["const:4eaff4:8", "const:4:8"]]
- 004eaff4 ["CALL", null, ["callee:00c58040:8"]]
+ 004eb034 ["INT_ADD", "register:40f0:8", ["const:4eb034:8", "const:4:8"]]
+ 004eb034 ["CALL", null, ["callee:00c58040:8"]]
- 004eb08c ["INT_ADD", "register:40f0:8", ["const:4eb08c:8", "const:4:8"]]
- 004eb08c ["CALL", null, ["callee:00c57fe0:8"]]
+ 004eb0cc ["INT_ADD", "register:40f0:8", ["const:4eb0cc:8", "const:4:8"]]
+ 004eb0cc ["CALL", null, ["callee:00c57fe0:8"]]
- 004eafc4 ["INT_ADD", "register:40f0:8", ["const:4eafc4:8", "const:4:8"]]
- 004eafc4 ["CALL", null, ["callee:00c57fc0:8"]]
+ 004eb004 ["INT_ADD", "register:40f0:8", ["const:4eb004:8", "const:4:8"]]
+ 004eb004 ["CALL", null, ["callee:00c57fc0:8"]]
~~~


<a id="compare-e4e95ce7b853b32a3a7ca5fa785e28ef"></a>

### [`004eb124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004eb/004eb124.md) → [`004eb164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004eb/004eb164.md) FUN_004eb164

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`004f58d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f5/004f58d0.md) · 呼出先 6件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c58fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fa0.md) [`00c594f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c594f0.md)
- 新版 呼出元 1件 [`004f5910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f5/004f5910.md) · 呼出先 6件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c59070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59070.md) [`00c595c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c595c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004eb178",
      "incomplete_value": false,
      "site": "004eb180",
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
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eb138",
      "incomplete_value": false,
      "site": "004eb140",
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
            "const:e68:8"
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
      "definition_site": "004eb1dc",
      "incomplete_value": true,
      "site": "004eb1e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:fa0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eb19c",
      "incomplete_value": true,
      "site": "004eb1a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ed0:8"
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
      "definition_site": "004eb1d8",
      "incomplete_value": false,
      "site": "004eb1e4",
      "value": [
        "leaf",
        "const:5358a8:8"
      ]
    },
    "old": {
      "definition_site": "004eb198",
      "incomplete_value": false,
      "site": "004eb1a4",
      "value": [
        "leaf",
        "const:535868:8"
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
      "004eb180",
      "DATA",
      [
        "storage",
        "00c66e68",
        null,
        "undefined *"
      ]
    ],
    [
      "004eb1d8",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ],
    [
      "004eb1dc",
      "READ",
      [
        "storage",
        "00c9aed0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004eb180",
      "DATA",
      [
        "storage",
        "00c66f38",
        null,
        "undefined *"
      ]
    ],
    [
      "004eb1d8",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ],
    [
      "004eb1dc",
      "READ",
      [
        "storage",
        "00c9afa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004eb180 ["INT_ADD", "register:40f0:8", ["const:4eb180:8", "const:4:8"]]
- 004eb180 ["CALL", null, ["callee:00c57fc0:8"]]
+ 004eb1c0 ["INT_ADD", "register:40f0:8", ["const:4eb1c0:8", "const:4:8"]]
+ 004eb1c0 ["CALL", null, ["callee:00c57fc0:8"]]
- 004eb1a4 ["INT_ADD", "register:40f0:8", ["const:4eb1a4:8", "const:4:8"]]
- 004eb1a4 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004eb1e4 ["INT_ADD", "register:40f0:8", ["const:4eb1e4:8", "const:4:8"]]
+ 004eb1e4 ["CALL", null, ["callee:00c57fe0:8"]]
- 004eb138 ["COPY", "tmp:0:8", ["const:e68:8"]]
- 004eb138 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 004eb138 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 004eb138 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004eb178 ["COPY", "tmp:0:8", ["const:f38:8"]]
+ 004eb178 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004eb178 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004eb178 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1b65223ab83b187941274887e51dbbb7"></a>

### [`004eb30c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004eb/004eb30c.md) → [`004eb34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004eb/004eb34c.md) FUN_004eb34c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`0112a058`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a058.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`0112a058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a058.md)

変更の種類 call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004eb408",
      "incomplete_value": true,
      "site": "004eb408",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eb3c8",
      "incomplete_value": true,
      "site": "004eb3c8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
              ]
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
    "kind": "call_target",
    "new": {
      "definition_site": "004eb434",
      "incomplete_value": true,
      "site": "004eb434",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eb3f4",
      "incomplete_value": true,
      "site": "004eb3f4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
              ]
            ]
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
      "004eb3f8",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004eb424",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004eb3f8",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004eb424",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004eb3c8 ["COPY", "register:0:8", ["register:4048:8"]]
- 004eb3c8 ["INT_ADD", "register:40f0:8", ["const:4eb3c8:8", "const:4:8"]]
- 004eb3c8 ["CALLIND", null, ["register:0:8"]]
+ 004eb408 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004eb408 ["INT_ADD", "register:40f0:8", ["const:4eb408:8", "const:4:8"]]
+ 004eb408 ["CALLIND", null, ["register:0:8"]]
- 004eb3f4 ["COPY", "register:0:8", ["register:4048:8"]]
- 004eb3f4 ["INT_ADD", "register:40f0:8", ["const:4eb3f4:8", "const:4:8"]]
- 004eb3f4 ["CALLIND", null, ["register:0:8"]]
+ 004eb434 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004eb434 ["INT_ADD", "register:40f0:8", ["const:4eb434:8", "const:4:8"]]
+ 004eb434 ["CALLIND", null, ["register:0:8"]]
- 004eb350 ["COPY", "register:0:8", ["register:4048:8"]]
- 004eb350 ["INT_ADD", "register:40f0:8", ["const:4eb350:8", "const:4:8"]]
- 004eb350 ["CALLIND", null, ["register:0:8"]]
+ 004eb390 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004eb390 ["INT_ADD", "register:40f0:8", ["const:4eb390:8", "const:4:8"]]
+ 004eb390 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e5b827bcfde9cdf354d5aedd18bde0f2"></a>

### [`004eb468`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004eb/004eb468.md) → [`004eb4a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004eb/004eb4a8.md) FUN_004eb4a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`004f5400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f5/004f5400.md) · 呼出先 6件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c58fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fa0.md) [`00c594f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c594f0.md)
- 新版 呼出元 1件 [`004f5440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f5/004f5440.md) · 呼出先 6件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c59070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59070.md) [`00c595c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c595c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004eb4bc",
      "incomplete_value": false,
      "site": "004eb4c4",
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
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eb47c",
      "incomplete_value": false,
      "site": "004eb484",
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
            "const:eb8:8"
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
      "definition_site": "004eb520",
      "incomplete_value": true,
      "site": "004eb528",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:fa0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eb4e0",
      "incomplete_value": true,
      "site": "004eb4e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ed0:8"
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
      "definition_site": "004eb51c",
      "incomplete_value": false,
      "site": "004eb528",
      "value": [
        "leaf",
        "const:5358a8:8"
      ]
    },
    "old": {
      "definition_site": "004eb4dc",
      "incomplete_value": false,
      "site": "004eb4e8",
      "value": [
        "leaf",
        "const:535868:8"
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
      "004eb4c4",
      "DATA",
      [
        "storage",
        "00c66eb8",
        null,
        "undefined *"
      ]
    ],
    [
      "004eb51c",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ],
    [
      "004eb520",
      "READ",
      [
        "storage",
        "00c9aed0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004eb4c4",
      "DATA",
      [
        "storage",
        "00c66f88",
        null,
        "undefined *"
      ]
    ],
    [
      "004eb51c",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ],
    [
      "004eb520",
      "READ",
      [
        "storage",
        "00c9afa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004eb4c4 ["INT_ADD", "register:40f0:8", ["const:4eb4c4:8", "const:4:8"]]
- 004eb4c4 ["CALL", null, ["callee:00c57fc0:8"]]
+ 004eb504 ["INT_ADD", "register:40f0:8", ["const:4eb504:8", "const:4:8"]]
+ 004eb504 ["CALL", null, ["callee:00c57fc0:8"]]
- 004eb4e8 ["INT_ADD", "register:40f0:8", ["const:4eb4e8:8", "const:4:8"]]
- 004eb4e8 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004eb528 ["INT_ADD", "register:40f0:8", ["const:4eb528:8", "const:4:8"]]
+ 004eb528 ["CALL", null, ["callee:00c57fe0:8"]]
- 004eb47c ["COPY", "tmp:0:8", ["const:eb8:8"]]
- 004eb47c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 004eb47c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 004eb47c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004eb4bc ["COPY", "tmp:0:8", ["const:f88:8"]]
+ 004eb4bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004eb4bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004eb4bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b9b1853cee2961e93089362e8b7aa35b"></a>

### [`004eb864`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004eb/004eb864.md) → [`004eb8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004eb/004eb8a4.md) FUN_004eb8a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`004b3508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004b3/004b3508.md) [`005404ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/005404ec.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`0112a058`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a058.md)
- 新版 呼出元 0件  · 呼出先 5件 [`004b3548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b3/004b3548.md) [`0054052c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054052c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`0112a058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a058.md)

変更の種類 call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004eb98c",
      "incomplete_value": true,
      "site": "004eb98c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eb94c",
      "incomplete_value": true,
      "site": "004eb94c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
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
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004eb9d0",
      "incomplete_value": true,
      "site": "004eb9d0",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eb990",
      "incomplete_value": true,
      "site": "004eb990",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
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
      "004eb97c",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004eb9c0",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004eb97c",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004eb9c0",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004eb94c ["COPY", "register:0:8", ["register:4048:8"]]
- 004eb94c ["INT_ADD", "register:40f0:8", ["const:4eb94c:8", "const:4:8"]]
- 004eb94c ["CALLIND", null, ["register:0:8"]]
+ 004eb98c ["COPY", "register:0:8", ["register:4048:8"]]
+ 004eb98c ["INT_ADD", "register:40f0:8", ["const:4eb98c:8", "const:4:8"]]
+ 004eb98c ["CALLIND", null, ["register:0:8"]]
- 004eb990 ["COPY", "register:0:8", ["register:4048:8"]]
- 004eb990 ["INT_ADD", "register:40f0:8", ["const:4eb990:8", "const:4:8"]]
- 004eb990 ["CALLIND", null, ["register:0:8"]]
+ 004eb9d0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004eb9d0 ["INT_ADD", "register:40f0:8", ["const:4eb9d0:8", "const:4:8"]]
+ 004eb9d0 ["CALLIND", null, ["register:0:8"]]
- 004eb8b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 004eb8b8 ["INT_ADD", "register:40f0:8", ["const:4eb8b8:8", "const:4:8"]]
- 004eb8b8 ["CALLIND", null, ["register:0:8"]]
+ 004eb8f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004eb8f8 ["INT_ADD", "register:40f0:8", ["const:4eb8f8:8", "const:4:8"]]
+ 004eb8f8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-eaeab0579065a85e25a7d7771c9ef623"></a>

### [`004ebb60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004eb/004ebb60.md) → [`004ebba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004eb/004ebba0.md) _ZN5Botan5PKCS810PEM_encodeERKNS_11Private_KeyE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c595f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c595f0.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`00c59490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59490.md) [`00c595e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c595e0.md)
- 新版 呼出元 1件 [`00c596c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c596c0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c59560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59560.md) [`00c596b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c596b0.md)

変更の種類 call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.34% / 新版 94.34%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ebbf8",
      "incomplete_value": true,
      "site": "004ebbf8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ebbb8",
      "incomplete_value": true,
      "site": "004ebbb8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:140:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": "004ebc40",
      "incomplete_value": true,
      "site": "004ebc40",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ebc00",
      "incomplete_value": true,
      "site": "004ebc00",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
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
      "004ebbe4",
      "READ",
      [
        "storage",
        "002a1140",
        null,
        "string"
      ]
    ],
    [
      "004ebc30",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004ebbe4",
      "READ",
      [
        "storage",
        "002a10f3",
        null,
        "string"
      ]
    ],
    [
      "004ebc30",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ebc00 ["COPY", "register:0:8", ["register:4048:8"]]
- 004ebc00 ["INT_ADD", "register:40f0:8", ["const:4ebc00:8", "const:4:8"]]
- 004ebc00 ["CALLIND", null, ["register:0:8"]]
+ 004ebc40 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004ebc40 ["INT_ADD", "register:40f0:8", ["const:4ebc40:8", "const:4:8"]]
+ 004ebc40 ["CALLIND", null, ["register:0:8"]]
- 004ebb88 ["INT_ADD", "register:40f0:8", ["const:4ebb88:8", "const:4:8"]]
- 004ebb88 ["CALL", null, ["callee:00c596b0:8"]]
+ 004ebbc8 ["INT_ADD", "register:40f0:8", ["const:4ebbc8:8", "const:4:8"]]
+ 004ebbc8 ["CALL", null, ["callee:00c596b0:8"]]
- 004ebb94 ["COPY", "tmp:0:8", ["const:140:8"]]
- 004ebb94 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 004ebb94 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 004ebb94 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 004ebbd4 ["COPY", "tmp:0:8", ["const:f3:8"]]
+ 004ebbd4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 004ebbd4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 004ebbd4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7aed7cdb06110704d0dce508f1c78e78"></a>

### [`004ebc6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004eb/004ebc6c.md) → [`004ebcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004eb/004ebcac.md) _ZN5Botan5PKCS810BER_encodeERKNS_11Private_KeyERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59600.md) · 呼出先 20件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`004a6db0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004a6/004a6db0.md) [`004e2454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004e2/004e2454.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00535b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535b80.md)
- 新版 呼出元 1件 [`00c596d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c596d0.md) · 呼出先 20件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004a6df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004a6/004a6df0.md) [`004e2494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e2/004e2494.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00535bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bc0.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.67% / 新版 95.67%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件, `store_value` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004ebda8",
      "incomplete_value": false,
      "site": "004ebda8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:c26:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ebd68",
      "incomplete_value": false,
      "site": "004ebd68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:c7a:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004ebda8",
      "incomplete_value": false,
      "site": "004ebda8",
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
            "const:b52:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ebd68",
      "incomplete_value": false,
      "site": "004ebd68",
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
            "const:b23:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004ebf88",
      "incomplete_value": false,
      "site": "004ebf88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ab000:8"
          ],
          [
            "leaf",
            "const:371:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ebf48",
      "incomplete_value": false,
      "site": "004ebf48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ab000:8"
          ],
          [
            "leaf",
            "const:3cd:8"
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
      "004ebda8",
      "DATA",
      [
        "storage",
        "002bec7a",
        null,
        "string"
      ]
    ],
    [
      "004ebda8",
      "DATA",
      [
        "storage",
        "002a9b23",
        null,
        "string"
      ]
    ],
    [
      "004ebf88",
      "DATA",
      [
        "storage",
        "002ab3cd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004ebda8",
      "DATA",
      [
        "storage",
        "002bec26",
        null,
        "string"
      ]
    ],
    [
      "004ebda8",
      "DATA",
      [
        "storage",
        "002a9b52",
        null,
        "string"
      ]
    ],
    [
      "004ebf88",
      "DATA",
      [
        "storage",
        "002ab371",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ebfc4 ["COPY", "register:0:8", ["register:4048:8"]]
- 004ebfc4 ["INT_ADD", "register:40f0:8", ["const:4ebfc4:8", "const:4:8"]]
- 004ebfc4 ["CALLIND", null, ["register:0:8"]]
+ 004ec004 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004ec004 ["INT_ADD", "register:40f0:8", ["const:4ec004:8", "const:4:8"]]
+ 004ec004 ["CALLIND", null, ["register:0:8"]]
- 004ec08c ["COPY", "register:0:8", ["register:4048:8"]]
- 004ec08c ["INT_ADD", "register:40f0:8", ["const:4ec08c:8", "const:4:8"]]
- 004ec08c ["CALLIND", null, ["register:0:8"]]
+ 004ec0cc ["COPY", "register:0:8", ["register:4048:8"]]
+ 004ec0cc ["INT_ADD", "register:40f0:8", ["const:4ec0cc:8", "const:4:8"]]
+ 004ec0cc ["CALLIND", null, ["register:0:8"]]
- 004ec134 ["INT_ADD", "register:40f0:8", ["const:4ec134:8", "const:4:8"]]
- 004ec134 ["CALL", null, ["callee:00c58180:8"]]
+ 004ec174 ["INT_ADD", "register:40f0:8", ["const:4ec174:8", "const:4:8"]]
+ 004ec174 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-851d871b4e43ac7cbda2347258fd3fa4"></a>

### [`004ec29c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ec29c.md) → [`004ec2dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ec2dc.md) _ZN5Botan5PKCS810PEM_encodeERKNS_11Private_KeyERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c59490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59490.md) [`00c595f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c595f0.md) [`00c59600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59600.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59560.md) [`00c596c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c596c0.md) [`00c596d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c596d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.07% / 新版 91.07%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ec330",
      "incomplete_value": true,
      "site": "004ec340",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:df1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ec2f0",
      "incomplete_value": true,
      "site": "004ec300",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b4000:8"
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ec344",
      "incomplete_value": true,
      "site": "004ec344",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "004ec304",
      "incomplete_value": true,
      "site": "004ec304",
      "value": [
        "LOAD",
        "8",
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
      "004ec330",
      "READ",
      [
        "storage",
        "002b4dc0",
        null,
        "string"
      ]
    ],
    [
      "004ec334",
      "READ",
      [
        "storage",
        "002b4dcd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004ec330",
      "READ",
      [
        "storage",
        "002b4df1",
        null,
        "string"
      ]
    ],
    [
      "004ec334",
      "READ",
      [
        "storage",
        "002b4dfe",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ec2d8 ["INT_ADD", "register:40f0:8", ["const:4ec2d8:8", "const:4:8"]]
- 004ec2d8 ["CALL", null, ["callee:00c596d0:8"]]
+ 004ec318 ["INT_ADD", "register:40f0:8", ["const:4ec318:8", "const:4:8"]]
+ 004ec318 ["CALL", null, ["callee:00c596d0:8"]]
- 004ec2e4 ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 004ec2e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 004ec2e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 004ec2e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 004ec324 ["COPY", "tmp:0:8", ["const:df1:8"]]
+ 004ec324 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 004ec324 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 004ec324 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 004ec314 ["INT_ADD", "register:40f0:8", ["const:4ec314:8", "const:4:8"]]
- 004ec314 ["CALL", null, ["callee:00c59560:8"]]
+ 004ec354 ["INT_ADD", "register:40f0:8", ["const:4ec354:8", "const:4:8"]]
+ 004ec354 ["CALL", null, ["callee:00c59560:8"]]
~~~


<a id="compare-4eb782f50bac4ae7b9ebb1a96dc79d77"></a>

### [`004ec3b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ec3b8.md) → [`004ec3f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ec3f8.md) _ZN5Botan5PKCS831BER_encode_encrypted_pbkdf_iterERKNS_11Private_KeyERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS6_11char_trait

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59610.md) · 呼出先 12件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`004a6db0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004a6/004a6db0.md) [`004e2454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004e2/004e2454.md) [`00535b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535b80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c596e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c596e0.md) · 呼出先 12件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004a6df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004a6/004a6df0.md) [`004e2494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e2/004e2494.md) [`00535bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bc0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.93% / 新版 95.93%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ec490",
      "incomplete_value": true,
      "site": "004ec490",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:c26:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ec450",
      "incomplete_value": true,
      "site": "004ec450",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:c7a:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": "004ec574",
      "incomplete_value": true,
      "site": "004ec574",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ec534",
      "incomplete_value": true,
      "site": "004ec534",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
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
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004ec63c",
      "incomplete_value": true,
      "site": "004ec63c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ec5fc",
      "incomplete_value": true,
      "site": "004ec5fc",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
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
      "004ec47c",
      "READ",
      [
        "storage",
        "002bec7a",
        null,
        "string"
      ]
    ],
    [
      "004ec564",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004ec62c",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004ec47c",
      "READ",
      [
        "storage",
        "002bec26",
        null,
        "string"
      ]
    ],
    [
      "004ec564",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004ec62c",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ec534 ["COPY", "register:0:8", ["register:4048:8"]]
- 004ec534 ["INT_ADD", "register:40f0:8", ["const:4ec534:8", "const:4:8"]]
- 004ec534 ["CALLIND", null, ["register:0:8"]]
+ 004ec574 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004ec574 ["INT_ADD", "register:40f0:8", ["const:4ec574:8", "const:4:8"]]
+ 004ec574 ["CALLIND", null, ["register:0:8"]]
- 004ec5fc ["COPY", "register:0:8", ["register:4048:8"]]
- 004ec5fc ["INT_ADD", "register:40f0:8", ["const:4ec5fc:8", "const:4:8"]]
- 004ec5fc ["CALLIND", null, ["register:0:8"]]
+ 004ec63c ["COPY", "register:0:8", ["register:4048:8"]]
+ 004ec63c ["INT_ADD", "register:40f0:8", ["const:4ec63c:8", "const:4:8"]]
+ 004ec63c ["CALLIND", null, ["register:0:8"]]
- 004ec3fc ["INT_ADD", "register:40f0:8", ["const:4ec3fc:8", "const:4:8"]]
- 004ec3fc ["CALL", null, ["callee:00c596b0:8"]]
+ 004ec43c ["INT_ADD", "register:40f0:8", ["const:4ec43c:8", "const:4:8"]]
+ 004ec43c ["CALL", null, ["callee:00c596b0:8"]]
~~~


<a id="compare-6758f7ef55f047afc387900641481e7f"></a>

### [`004ec6dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ec6dc.md) → [`004ec71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ec71c.md) _ZN5Botan5PKCS831PEM_encode_encrypted_pbkdf_iterERKNS_11Private_KeyERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS6_11char_trait

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c59490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59490.md) [`00c59610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59610.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59560.md) [`00c596e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c596e0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.10% / 新版 88.10%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ec758",
      "incomplete_value": true,
      "site": "004ec768",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:df1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ec718",
      "incomplete_value": true,
      "site": "004ec728",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b4000:8"
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ec76c",
      "incomplete_value": true,
      "site": "004ec76c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "004ec72c",
      "incomplete_value": true,
      "site": "004ec72c",
      "value": [
        "LOAD",
        "8",
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
      "004ec758",
      "READ",
      [
        "storage",
        "002b4dc0",
        null,
        "string"
      ]
    ],
    [
      "004ec75c",
      "READ",
      [
        "storage",
        "002b4dcd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004ec758",
      "READ",
      [
        "storage",
        "002b4df1",
        null,
        "string"
      ]
    ],
    [
      "004ec75c",
      "READ",
      [
        "storage",
        "002b4dfe",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ec700 ["INT_ADD", "register:40f0:8", ["const:4ec700:8", "const:4:8"]]
- 004ec700 ["CALL", null, ["callee:00c596e0:8"]]
+ 004ec740 ["INT_ADD", "register:40f0:8", ["const:4ec740:8", "const:4:8"]]
+ 004ec740 ["CALL", null, ["callee:00c596e0:8"]]
- 004ec70c ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 004ec70c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 004ec70c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 004ec70c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 004ec74c ["COPY", "tmp:0:8", ["const:df1:8"]]
+ 004ec74c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 004ec74c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 004ec74c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 004ec73c ["INT_ADD", "register:40f0:8", ["const:4ec73c:8", "const:4:8"]]
- 004ec73c ["CALL", null, ["callee:00c59560:8"]]
+ 004ec77c ["INT_ADD", "register:40f0:8", ["const:4ec77c:8", "const:4:8"]]
+ 004ec77c ["CALL", null, ["callee:00c59560:8"]]
~~~


<a id="compare-aba4e8b81820a39b4f64286bed8f0c3a"></a>

### [`004ec7c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ec7c0.md) → [`004ec800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ec800.md) _ZN5Botan5PKCS831BER_encode_encrypted_pbkdf_msecERKNS_11Private_KeyERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS6_11char_trait

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59620.md) · 呼出先 12件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`004a6db0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004a6/004a6db0.md) [`004e2454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004e2/004e2454.md) [`00535b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535b80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c596f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c596f0.md) · 呼出先 12件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004a6df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004a6/004a6df0.md) [`004e2494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e2/004e2494.md) [`00535bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bc0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.09% / 新版 96.09%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ec8a0",
      "incomplete_value": true,
      "site": "004ec8a0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:c26:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ec860",
      "incomplete_value": true,
      "site": "004ec860",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:c7a:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": "004ec994",
      "incomplete_value": true,
      "site": "004ec994",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ec954",
      "incomplete_value": true,
      "site": "004ec954",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
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
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004eca5c",
      "incomplete_value": true,
      "site": "004eca5c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eca1c",
      "incomplete_value": true,
      "site": "004eca1c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
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
      "004ec88c",
      "READ",
      [
        "storage",
        "002bec7a",
        null,
        "string"
      ]
    ],
    [
      "004ec984",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004eca4c",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004ec88c",
      "READ",
      [
        "storage",
        "002bec26",
        null,
        "string"
      ]
    ],
    [
      "004ec984",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004eca4c",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ec954 ["COPY", "register:0:8", ["register:4048:8"]]
- 004ec954 ["INT_ADD", "register:40f0:8", ["const:4ec954:8", "const:4:8"]]
- 004ec954 ["CALLIND", null, ["register:0:8"]]
+ 004ec994 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004ec994 ["INT_ADD", "register:40f0:8", ["const:4ec994:8", "const:4:8"]]
+ 004ec994 ["CALLIND", null, ["register:0:8"]]
- 004eca1c ["COPY", "register:0:8", ["register:4048:8"]]
- 004eca1c ["INT_ADD", "register:40f0:8", ["const:4eca1c:8", "const:4:8"]]
- 004eca1c ["CALLIND", null, ["register:0:8"]]
+ 004eca5c ["COPY", "register:0:8", ["register:4048:8"]]
+ 004eca5c ["INT_ADD", "register:40f0:8", ["const:4eca5c:8", "const:4:8"]]
+ 004eca5c ["CALLIND", null, ["register:0:8"]]
- 004ec80c ["INT_ADD", "register:40f0:8", ["const:4ec80c:8", "const:4:8"]]
- 004ec80c ["CALL", null, ["callee:00c596b0:8"]]
+ 004ec84c ["INT_ADD", "register:40f0:8", ["const:4ec84c:8", "const:4:8"]]
+ 004ec84c ["CALL", null, ["callee:00c596b0:8"]]
~~~


<a id="compare-4ec86ce5cc822d553edcd7d983be087a"></a>

### [`004ecb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ecb00.md) → [`004ecb40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecb40.md) _ZN5Botan5PKCS831PEM_encode_encrypted_pbkdf_msecERKNS_11Private_KeyERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS6_11char_trait

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c59490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59490.md) [`00c59620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59620.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59560.md) [`00c596f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c596f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.10% / 新版 88.10%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ecb7c",
      "incomplete_value": true,
      "site": "004ecb8c",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:df1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ecb3c",
      "incomplete_value": true,
      "site": "004ecb4c",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b4000:8"
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ecb90",
      "incomplete_value": true,
      "site": "004ecb90",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "004ecb50",
      "incomplete_value": true,
      "site": "004ecb50",
      "value": [
        "LOAD",
        "8",
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
      "004ecb7c",
      "READ",
      [
        "storage",
        "002b4dc0",
        null,
        "string"
      ]
    ],
    [
      "004ecb80",
      "READ",
      [
        "storage",
        "002b4dcd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004ecb7c",
      "READ",
      [
        "storage",
        "002b4df1",
        null,
        "string"
      ]
    ],
    [
      "004ecb80",
      "READ",
      [
        "storage",
        "002b4dfe",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ecb24 ["INT_ADD", "register:40f0:8", ["const:4ecb24:8", "const:4:8"]]
- 004ecb24 ["CALL", null, ["callee:00c596f0:8"]]
+ 004ecb64 ["INT_ADD", "register:40f0:8", ["const:4ecb64:8", "const:4:8"]]
+ 004ecb64 ["CALL", null, ["callee:00c596f0:8"]]
- 004ecb30 ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 004ecb30 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 004ecb30 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 004ecb30 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 004ecb70 ["COPY", "tmp:0:8", ["const:df1:8"]]
+ 004ecb70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 004ecb70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 004ecb70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 004ecb60 ["INT_ADD", "register:40f0:8", ["const:4ecb60:8", "const:4:8"]]
- 004ecb60 ["CALL", null, ["callee:00c59560:8"]]
+ 004ecba0 ["INT_ADD", "register:40f0:8", ["const:4ecba0:8", "const:4:8"]]
+ 004ecba0 ["CALL", null, ["callee:00c59560:8"]]
~~~


<a id="compare-6b2246986c91eb4f7d59c84f13008a85"></a>

### [`004ecd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ecd10.md) → [`004ecd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecd50.md) FUN_004ecd50

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 9件 [`004ecbe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ecbe4.md) [`004edc94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ed/004edc94.md) [`004edddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ed/004edddc.md) [`004edeb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ed/004edeb4.md) [`004ee018`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ee/004ee018.md) · 呼出先 34件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`004a577c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004a5/004a577c.md) [`004a6f9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004a6/004a6f9c.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md)
- 新版 呼出元 9件 [`004ecc24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecc24.md) [`004edcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ed/004edcd4.md) [`004ede1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ed/004ede1c.md) [`004edef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ed/004edef4.md) [`004ee058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004ee058.md) · 呼出先 34件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`004a57bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004a5/004a57bc.md) [`004a6fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004a6/004a6fdc.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.79% / 新版 93.79%

優先判定に残った影響 `call_argument_candidate` 9件, `call_target` 9件, `store_value` 5件

アドレスに依存する影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ecd94",
      "incomplete_value": true,
      "site": "004ecd9c",
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
      "definition_site": "004ecd54",
      "incomplete_value": true,
      "site": "004ecd5c",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ecfdc",
      "incomplete_value": true,
      "site": "004ecfdc",
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
      "definition_site": "004ecf9c",
      "incomplete_value": true,
      "site": "004ecf9c",
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
    "ordinal": 40,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ed284",
      "incomplete_value": true,
      "site": "004ed298",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2a4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ed244",
      "incomplete_value": true,
      "site": "004ed258",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2f1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 60,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "004ecd80",
      "READ",
      [
        "storage",
        "00c9ad38",
        null,
        "pointer"
      ]
    ],
    [
      "004ecd9c",
      "DATA",
      [
        "storage",
        "00c661a8",
        null,
        "pointer"
      ]
    ],
    [
      "004ece14",
      "DATA",
      [
        "storage",
        "00c661a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004ecd80",
      "READ",
      [
        "storage",
        "00c9ae08",
        null,
        "pointer"
      ]
    ],
    [
      "004ecd9c",
      "DATA",
      [
        "storage",
        "00c66278",
        null,
        "pointer"
      ]
    ],
    [
      "004ece14",
      "DATA",
      [
        "storage",
        "00c66278",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ece44 ["INT_ADD", "register:40f0:8", ["const:4ece44:8", "const:4:8"]]
- 004ece44 ["CALL", null, ["callee:00c57f80:8"]]
+ 004ece84 ["INT_ADD", "register:40f0:8", ["const:4ece84:8", "const:4:8"]]
+ 004ece84 ["CALL", null, ["callee:00c57f80:8"]]
- 004ece84 ["COPY", "register:0:8", ["register:4048:8"]]
- 004ece84 ["INT_ADD", "register:40f0:8", ["const:4ece84:8", "const:4:8"]]
- 004ece84 ["CALLIND", null, ["register:0:8"]]
+ 004ecec4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004ecec4 ["INT_ADD", "register:40f0:8", ["const:4ecec4:8", "const:4:8"]]
+ 004ecec4 ["CALLIND", null, ["register:0:8"]]
- 004ecfe0 ["COPY", "register:0:8", ["register:4048:8"]]
- 004ecfe0 ["INT_ADD", "register:40f0:8", ["const:4ecfe0:8", "const:4:8"]]
- 004ecfe0 ["CALLIND", null, ["register:0:8"]]
+ 004ed020 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004ed020 ["INT_ADD", "register:40f0:8", ["const:4ed020:8", "const:4:8"]]
+ 004ed020 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f8bb03d703662e39a76b0c6566896ab7"></a>

### [`004edc94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ed/004edc94.md) → [`004edcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ed/004edcd4.md) _ZN5Botan5PKCS88load_keyERNS_10DataSourceERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c59630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59630.md) · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`004ecd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ecd10.md) [`005458ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/005458ac.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c59700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59700.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004ecd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecd50.md) [`005458ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/005458ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004edd44",
      "incomplete_value": false,
      "site": "004edd44",
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
            "const:5f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004edd04",
      "incomplete_value": false,
      "site": "004edd04",
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
            "const:520:8"
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
      "004edd44",
      "DATA",
      [
        "storage",
        "00c6a520",
        null,
        "undefined *"
      ]
    ],
    [
      "004edd88",
      "READ",
      [
        "storage",
        "00c6a548",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004edd44",
      "DATA",
      [
        "storage",
        "00c6a5f0",
        null,
        "undefined *"
      ]
    ],
    [
      "004edd88",
      "READ",
      [
        "storage",
        "00c6a618",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004edce4 ["INT_ADD", "register:40f0:8", ["const:4edce4:8", "const:4:8"]]
- 004edce4 ["CALL", null, ["callee:0043bb60:8"]]
+ 004edd24 ["INT_ADD", "register:40f0:8", ["const:4edd24:8", "const:4:8"]]
+ 004edd24 ["CALL", null, ["callee:0043bb60:8"]]
- 004edcf0 ["INT_ADD", "register:40f0:8", ["const:4edcf0:8", "const:4:8"]]
- 004edcf0 ["CALL", null, ["callee:00c57f60:8"]]
+ 004edd30 ["INT_ADD", "register:40f0:8", ["const:4edd30:8", "const:4:8"]]
+ 004edd30 ["CALL", null, ["callee:00c57f60:8"]]
- 004edd00 ["COPY", "tmp:0:8", ["const:520:8"]]
- 004edd00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 004edd00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 004edd00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 004edd40 ["COPY", "tmp:0:8", ["const:5f0:8"]]
+ 004edd40 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 004edd40 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 004edd40 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9e1f05c877635fea91b551bad5e0a219"></a>

### [`004edddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ed/004edddc.md) → [`004ede1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ed/004ede1c.md) _ZN5Botan5PKCS88load_keyERNS_10DataSourceE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c59640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59640.md) · 呼出先 4件 [`004ecd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ecd10.md) [`00545970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545970.md) [`00545974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545974.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c59710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59710.md) · 呼出先 4件 [`004ecd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecd50.md) [`005459b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/005459b0.md) [`005459b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/005459b4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004ede34",
      "incomplete_value": false,
      "site": "004ede44",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eddf4",
      "incomplete_value": false,
      "site": "004ede04",
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
            "const:5b0:8"
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
      "004ede44",
      "DATA",
      [
        "storage",
        "00c6a5b0",
        null,
        "undefined *"
      ]
    ],
    [
      "004ede7c",
      "READ",
      [
        "storage",
        "00c6a5d0",
        null,
        "pointer"
      ]
    ],
    [
      "004ede7c",
      "READ",
      [
        "storage",
        "00c6a5d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004ede44",
      "DATA",
      [
        "storage",
        "00c6a680",
        null,
        "undefined *"
      ]
    ],
    [
      "004ede7c",
      "READ",
      [
        "storage",
        "00c6a6a0",
        null,
        "pointer"
      ]
    ],
    [
      "004ede7c",
      "READ",
      [
        "storage",
        "00c6a6a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004eddf4 ["COPY", "tmp:0:8", ["const:5b0:8"]]
- 004eddf4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 004eddf4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 004eddf4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 004ede34 ["COPY", "tmp:0:8", ["const:680:8"]]
+ 004ede34 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 004ede34 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 004ede34 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 004ede14 ["INT_ADD", "register:40f0:8", ["const:4ede14:8", "const:4:8"]]
- 004ede14 ["CALL", null, ["callee:004ecd50:8"]]
+ 004ede54 ["INT_ADD", "register:40f0:8", ["const:4ede54:8", "const:4:8"]]
+ 004ede54 ["CALL", null, ["callee:004ecd50:8"]]
- 004ede40 ["COPY", "register:0:8", ["register:4040:8"]]
- 004ede40 ["INT_ADD", "register:40f0:8", ["const:4ede40:8", "const:4:8"]]
- 004ede40 ["CALLIND", null, ["register:0:8"]]
+ 004ede80 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004ede80 ["INT_ADD", "register:40f0:8", ["const:4ede80:8", "const:4:8"]]
+ 004ede80 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e548e0d7086862126859ca94e04c672b"></a>

### [`004edeb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ed/004edeb4.md) → [`004edef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ed/004edef4.md) _ZN5Botan5PKCS88copy_keyERKNS_11Private_KeyE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c59650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59650.md) · 呼出先 9件 [`004ecd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ecd10.md) [`00545970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545970.md) [`00545974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545974.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c59720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59720.md) · 呼出先 9件 [`004ecd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecd50.md) [`005459b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/005459b0.md) [`005459b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/005459b4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `call_target` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004edf40",
      "incomplete_value": false,
      "site": "004edf48",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004edf00",
      "incomplete_value": false,
      "site": "004edf08",
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
            "const:5b0:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004edfb4",
      "incomplete_value": true,
      "site": "004edfb4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004edf74",
      "incomplete_value": true,
      "site": "004edf74",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
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
      "004edf48",
      "DATA",
      [
        "storage",
        "00c6a5b0",
        null,
        "undefined *"
      ]
    ],
    [
      "004edf88",
      "READ",
      [
        "storage",
        "00c6a5d0",
        null,
        "pointer"
      ]
    ],
    [
      "004edf88",
      "READ",
      [
        "storage",
        "00c6a5d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004edf48",
      "DATA",
      [
        "storage",
        "00c6a680",
        null,
        "undefined *"
      ]
    ],
    [
      "004edf88",
      "READ",
      [
        "storage",
        "00c6a6a0",
        null,
        "pointer"
      ]
    ],
    [
      "004edf88",
      "READ",
      [
        "storage",
        "00c6a6a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004edf74 ["COPY", "register:0:8", ["register:4048:8"]]
- 004edf74 ["INT_ADD", "register:40f0:8", ["const:4edf74:8", "const:4:8"]]
- 004edf74 ["CALLIND", null, ["register:0:8"]]
+ 004edfb4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004edfb4 ["INT_ADD", "register:40f0:8", ["const:4edfb4:8", "const:4:8"]]
+ 004edfb4 ["CALLIND", null, ["register:0:8"]]
- 004ededc ["INT_ADD", "register:40f0:8", ["const:4ededc:8", "const:4:8"]]
- 004ededc ["CALL", null, ["callee:00c596c0:8"]]
+ 004edf1c ["INT_ADD", "register:40f0:8", ["const:4edf1c:8", "const:4:8"]]
+ 004edf1c ["CALL", null, ["callee:00c596c0:8"]]
- 004edee8 ["INT_ADD", "register:40f0:8", ["const:4edee8:8", "const:4:8"]]
- 004edee8 ["CALL", null, ["callee:00c59590:8"]]
+ 004edf28 ["INT_ADD", "register:40f0:8", ["const:4edf28:8", "const:4:8"]]
+ 004edf28 ["CALL", null, ["callee:00c59590:8"]]
~~~


<a id="compare-eea043a0782beea9ac6969dbc35e6548"></a>

### [`004ee254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ee/004ee254.md) → [`004ee294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004ee294.md) _ZN5Botan5PKCS88load_keyERNS_10DataSourceERNS_21RandomNumberGeneratorE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`004ecd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ecd10.md) [`00545970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545970.md) [`00545974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545974.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`004ecd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecd50.md) [`005459b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/005459b0.md) [`005459b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/005459b4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004ee2ac",
      "incomplete_value": false,
      "site": "004ee2bc",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ee26c",
      "incomplete_value": false,
      "site": "004ee27c",
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
            "const:5b0:8"
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
      "004ee2bc",
      "DATA",
      [
        "storage",
        "00c6a5b0",
        null,
        "undefined *"
      ]
    ],
    [
      "004ee2f8",
      "READ",
      [
        "storage",
        "00c6a5d0",
        null,
        "pointer"
      ]
    ],
    [
      "004ee2f8",
      "READ",
      [
        "storage",
        "00c6a5d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004ee2bc",
      "DATA",
      [
        "storage",
        "00c6a680",
        null,
        "undefined *"
      ]
    ],
    [
      "004ee2f8",
      "READ",
      [
        "storage",
        "00c6a6a0",
        null,
        "pointer"
      ]
    ],
    [
      "004ee2f8",
      "READ",
      [
        "storage",
        "00c6a6a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ee2bc ["COPY", "register:0:8", ["register:4040:8"]]
- 004ee2bc ["INT_ADD", "register:40f0:8", ["const:4ee2bc:8", "const:4:8"]]
- 004ee2bc ["CALLIND", null, ["register:0:8"]]
+ 004ee2fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 004ee2fc ["INT_ADD", "register:40f0:8", ["const:4ee2fc:8", "const:4:8"]]
+ 004ee2fc ["CALLIND", null, ["register:0:8"]]
- 004ee26c ["COPY", "tmp:0:8", ["const:5b0:8"]]
- 004ee26c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 004ee26c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 004ee26c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 004ee2ac ["COPY", "tmp:0:8", ["const:680:8"]]
+ 004ee2ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 004ee2ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 004ee2ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 004ee290 ["INT_ADD", "register:40f0:8", ["const:4ee290:8", "const:4:8"]]
- 004ee290 ["CALL", null, ["callee:004ecd50:8"]]
+ 004ee2d0 ["INT_ADD", "register:40f0:8", ["const:4ee2d0:8", "const:4:8"]]
+ 004ee2d0 ["CALL", null, ["callee:004ecd50:8"]]
~~~


<a id="compare-0c2fd1e51014696be17bebaef0cb5141"></a>

### [`004ee534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ee/004ee534.md) → [`004ee574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004ee574.md) _ZN5Botan5PKCS88load_keyERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERNS_21RandomNumberGeneratorES9_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`004ecd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ecd10.md) [`00545af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545af0.md) [`00545bb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545bb4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004ecd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecd50.md) [`00545b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/00545b30.md) [`00545bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/00545bf4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004ee5ec",
      "incomplete_value": false,
      "site": "004ee5ec",
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
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ee5ac",
      "incomplete_value": false,
      "site": "004ee5ac",
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
            "const:630:8"
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
      "004ee5ec",
      "DATA",
      [
        "storage",
        "00c6a630",
        null,
        "pointer"
      ]
    ],
    [
      "004ee62c",
      "READ",
      [
        "storage",
        "00c6a640",
        null,
        "undefined *"
      ]
    ],
    [
      "004ee690",
      "READ",
      [
        "storage",
        "00c6a658",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004ee5ec",
      "DATA",
      [
        "storage",
        "00c6a700",
        null,
        "pointer"
      ]
    ],
    [
      "004ee62c",
      "READ",
      [
        "storage",
        "00c6a710",
        null,
        "undefined *"
      ]
    ],
    [
      "004ee690",
      "READ",
      [
        "storage",
        "00c6a728",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ee564 ["INT_ADD", "register:40f0:8", ["const:4ee564:8", "const:4:8"]]
- 004ee564 ["CALL", null, ["callee:00c59730:8"]]
+ 004ee5a4 ["INT_ADD", "register:40f0:8", ["const:4ee5a4:8", "const:4:8"]]
+ 004ee5a4 ["CALL", null, ["callee:00c59730:8"]]
- 004ee58c ["INT_ADD", "register:40f0:8", ["const:4ee58c:8", "const:4:8"]]
- 004ee58c ["CALL", null, ["callee:0043bb60:8"]]
+ 004ee5cc ["INT_ADD", "register:40f0:8", ["const:4ee5cc:8", "const:4:8"]]
+ 004ee5cc ["CALL", null, ["callee:0043bb60:8"]]
- 004ee598 ["INT_ADD", "register:40f0:8", ["const:4ee598:8", "const:4:8"]]
- 004ee598 ["CALL", null, ["callee:00c57f60:8"]]
+ 004ee5d8 ["INT_ADD", "register:40f0:8", ["const:4ee5d8:8", "const:4:8"]]
+ 004ee5d8 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-ac4ba5e82e50c6ad9c2c6fabe668cd4d"></a>

### [`004ee740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ee/004ee740.md) → [`004ee780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004ee780.md) _ZN5Botan5PKCS88load_keyERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERNS_21RandomNumberGeneratorE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`004ecd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ec/004ecd10.md) [`00545970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545970.md) [`00545974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545974.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c59660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59660.md)
- 新版 呼出元 0件  · 呼出先 6件 [`004ecd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ecd50.md) [`005459b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/005459b0.md) [`005459b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/005459b4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59730.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004ee7b0",
      "incomplete_value": false,
      "site": "004ee7b8",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ee770",
      "incomplete_value": false,
      "site": "004ee778",
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
            "const:5b0:8"
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
      "004ee7b8",
      "DATA",
      [
        "storage",
        "00c6a5b0",
        null,
        "undefined *"
      ]
    ],
    [
      "004ee7f8",
      "READ",
      [
        "storage",
        "00c6a5d0",
        null,
        "pointer"
      ]
    ],
    [
      "004ee7f8",
      "READ",
      [
        "storage",
        "00c6a5d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004ee7b8",
      "DATA",
      [
        "storage",
        "00c6a680",
        null,
        "undefined *"
      ]
    ],
    [
      "004ee7f8",
      "READ",
      [
        "storage",
        "00c6a6a0",
        null,
        "pointer"
      ]
    ],
    [
      "004ee7f8",
      "READ",
      [
        "storage",
        "00c6a6a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ee768 ["INT_ADD", "register:40f0:8", ["const:4ee768:8", "const:4:8"]]
- 004ee768 ["CALL", null, ["callee:00c59730:8"]]
+ 004ee7a8 ["INT_ADD", "register:40f0:8", ["const:4ee7a8:8", "const:4:8"]]
+ 004ee7a8 ["CALL", null, ["callee:00c59730:8"]]
- 004ee770 ["COPY", "tmp:0:8", ["const:5b0:8"]]
- 004ee770 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 004ee770 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 004ee770 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004ee7b0 ["COPY", "tmp:0:8", ["const:680:8"]]
+ 004ee7b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004ee7b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004ee7b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 004ee790 ["INT_ADD", "register:40f0:8", ["const:4ee790:8", "const:4:8"]]
- 004ee790 ["CALL", null, ["callee:004ecd50:8"]]
+ 004ee7d0 ["INT_ADD", "register:40f0:8", ["const:4ee7d0:8", "const:4:8"]]
+ 004ee7d0 ["CALL", null, ["callee:004ecd50:8"]]
~~~


<a id="compare-11d3e738a17b53f5cfcd2b1703079f26"></a>

### [`004ee894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ee/004ee894.md) → [`004ee8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004ee8d4.md) _ZNK5Botan12PK_Decryptor7decryptEPKhm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c591f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c591f0.md) · 呼出先 6件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 1件 [`00c592c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c592c0.md) · 呼出先 6件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.23% / 新版 96.23%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004ee958",
      "incomplete_value": false,
      "site": "004ee960",
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
            "const:4c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ee918",
      "incomplete_value": false,
      "site": "004ee920",
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
            "const:99:8"
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
      "definition_site": "004ee994",
      "incomplete_value": true,
      "site": "004ee9a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ee954",
      "incomplete_value": true,
      "site": "004ee960",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004ee990",
      "incomplete_value": false,
      "site": "004ee9a0",
      "value": [
        "leaf",
        "const:5358a8:8"
      ]
    },
    "old": {
      "definition_site": "004ee950",
      "incomplete_value": false,
      "site": "004ee960",
      "value": [
        "leaf",
        "const:535868:8"
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
      "004ee958",
      "PARAM",
      [
        "storage",
        "002a0099",
        null,
        "string"
      ]
    ],
    [
      "004ee990",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ],
    [
      "004ee994",
      "READ",
      [
        "storage",
        "00c9ad50",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004ee958",
      "PARAM",
      [
        "storage",
        "002a004c",
        null,
        "string"
      ]
    ],
    [
      "004ee990",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ],
    [
      "004ee994",
      "READ",
      [
        "storage",
        "00c9ae20",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ee920 ["INT_ADD", "register:40f0:8", ["const:4ee920:8", "const:4:8"]]
- 004ee920 ["CALL", null, ["callee:0043de18:8"]]
+ 004ee960 ["INT_ADD", "register:40f0:8", ["const:4ee960:8", "const:4:8"]]
+ 004ee960 ["CALL", null, ["callee:0043de18:8"]]
- 004ee960 ["INT_ADD", "register:40f0:8", ["const:4ee960:8", "const:4:8"]]
- 004ee960 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004ee9a0 ["INT_ADD", "register:40f0:8", ["const:4ee9a0:8", "const:4:8"]]
+ 004ee9a0 ["CALL", null, ["callee:00c57fe0:8"]]
- 004ee8d4 ["COPY", "register:0:8", ["register:4048:8"]]
- 004ee8d4 ["INT_ADD", "register:40f0:8", ["const:4ee8d4:8", "const:4:8"]]
- 004ee8d4 ["CALLIND", null, ["register:0:8"]]
+ 004ee914 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004ee914 ["INT_ADD", "register:40f0:8", ["const:4ee914:8", "const:4:8"]]
+ 004ee914 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9b991758ff35cac2875c301d216e54ba"></a>

### [`004ee9bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ee/004ee9bc.md) → [`004ee9fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004ee9fc.md) _ZNK5Botan12PK_Decryptor17decrypt_or_randomEPKhmmRNS_21RandomNumberGeneratorES2_S2_m

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59680.md) · 呼出先 6件 [`004b3508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004b3/004b3508.md) [`005404ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/005404ec.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58650.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md)
- 新版 呼出元 1件 [`00c59750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59750.md) · 呼出先 6件 [`004b3548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b3/004b3548.md) [`0054052c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054052c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58720.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.78% / 新版 97.78%

優先判定に残った影響 `call_argument_candidate` 4件

アドレスに依存する影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004eebb8",
      "incomplete_value": true,
      "site": "004eebb8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eeb78",
      "incomplete_value": true,
      "site": "004eeb78",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
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
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004eeca4",
      "incomplete_value": false,
      "site": "004eecc4",
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
            "const:85e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eec64",
      "incomplete_value": false,
      "site": "004eec84",
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
            "const:8ba:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004eecac",
      "incomplete_value": false,
      "site": "004eecc4",
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
            "const:f14:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eec6c",
      "incomplete_value": false,
      "site": "004eec84",
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
            "const:f68:8"
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
      "004eeba8",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004eeca4",
      "PARAM",
      [
        "storage",
        "002ae8ba",
        null,
        "string"
      ]
    ],
    [
      "004eecac",
      "PARAM",
      [
        "storage",
        "002b8f68",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004eeba8",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004eeca4",
      "PARAM",
      [
        "storage",
        "002ae85e",
        null,
        "string"
      ]
    ],
    [
      "004eecac",
      "PARAM",
      [
        "storage",
        "002b8f14",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004eeb78 ["COPY", "register:0:8", ["register:4048:8"]]
- 004eeb78 ["INT_ADD", "register:40f0:8", ["const:4eeb78:8", "const:4:8"]]
- 004eeb78 ["CALLIND", null, ["register:0:8"]]
+ 004eebb8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004eebb8 ["INT_ADD", "register:40f0:8", ["const:4eebb8:8", "const:4:8"]]
+ 004eebb8 ["CALLIND", null, ["register:0:8"]]
- 004eec84 ["INT_ADD", "register:40f0:8", ["const:4eec84:8", "const:4:8"]]
- 004eec84 ["CALL", null, ["callee:00c58720:8"]]
+ 004eecc4 ["INT_ADD", "register:40f0:8", ["const:4eecc4:8", "const:4:8"]]
+ 004eecc4 ["CALL", null, ["callee:00c58720:8"]]
- 004eea14 ["INT_ADD", "register:40f0:8", ["const:4eea14:8", "const:4:8"]]
- 004eea14 ["CALL", null, ["callee:004b3548:8"]]
+ 004eea54 ["INT_ADD", "register:40f0:8", ["const:4eea54:8", "const:4:8"]]
+ 004eea54 ["CALL", null, ["callee:004b3548:8"]]
~~~


<a id="compare-685aa2a01fd77652fa42e0850b1364aa"></a>

### [`004eece0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ee/004eece0.md) → [`004eed20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004eed20.md) _ZN5Botan16PK_Encryptor_EMEC2ERKNS_10Public_KeyERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorI

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c591d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c591d0.md) · 呼出先 7件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c57f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00c592a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c592a0.md) · 呼出先 7件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004eed58",
      "incomplete_value": true,
      "site": "004eed58",
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
      "definition_site": "004eed18",
      "incomplete_value": true,
      "site": "004eed18",
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
      "definition_site": "004eee08",
      "incomplete_value": false,
      "site": "004eee14",
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
            "const:dae:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eedc8",
      "incomplete_value": false,
      "site": "004eedd4",
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
            "const:e02:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004eee34",
      "incomplete_value": false,
      "site": "004eee3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:d14:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004eedf4",
      "incomplete_value": false,
      "site": "004eedfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:d68:8"
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
      "004eed48",
      "READ",
      [
        "storage",
        "00c9b008",
        null,
        "pointer"
      ]
    ],
    [
      "004eed58",
      "DATA",
      [
        "storage",
        "00c66f78",
        null,
        "pointer"
      ]
    ],
    [
      "004eee08",
      "PARAM",
      [
        "storage",
        "002bfe02",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004eed48",
      "READ",
      [
        "storage",
        "00c9b0d8",
        null,
        "pointer"
      ]
    ],
    [
      "004eed58",
      "DATA",
      [
        "storage",
        "00c67048",
        null,
        "pointer"
      ]
    ],
    [
      "004eee08",
      "PARAM",
      [
        "storage",
        "002bfdae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004eed58 ["COPY", "register:0:8", ["register:4040:8"]]
- 004eed58 ["INT_ADD", "register:40f0:8", ["const:4eed58:8", "const:4:8"]]
- 004eed58 ["CALLIND", null, ["register:0:8"]]
+ 004eed98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004eed98 ["INT_ADD", "register:40f0:8", ["const:4eed98:8", "const:4:8"]]
+ 004eed98 ["CALLIND", null, ["register:0:8"]]
- 004eedd4 ["INT_ADD", "register:40f0:8", ["const:4eedd4:8", "const:4:8"]]
- 004eedd4 ["CALL", null, ["callee:00c58030:8"]]
+ 004eee14 ["INT_ADD", "register:40f0:8", ["const:4eee14:8", "const:4:8"]]
+ 004eee14 ["CALL", null, ["callee:00c58030:8"]]
- 004eedfc ["INT_ADD", "register:40f0:8", ["const:4eedfc:8", "const:4:8"]]
- 004eedfc ["CALL", null, ["callee:00c58040:8"]]
+ 004eee3c ["INT_ADD", "register:40f0:8", ["const:4eee3c:8", "const:4:8"]]
+ 004eee3c ["CALL", null, ["callee:00c58040:8"]]
~~~


<a id="compare-0eec7fa45b664b037a7a5238cb664ed5"></a>

### [`004ef09c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ef/004ef09c.md) → [`004ef0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ef/004ef0dc.md) _ZN5Botan16PK_Decryptor_EMEC1ERKNS_11Private_KeyERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS6_11char_traitsIcEENS6_9allocator

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c591e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c591e0.md) · 呼出先 7件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c57f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00c592b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c592b0.md) · 呼出先 7件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004ef114",
      "incomplete_value": true,
      "site": "004ef114",
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
      "definition_site": "004ef0d4",
      "incomplete_value": true,
      "site": "004ef0d4",
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
      "definition_site": "004ef1cc",
      "incomplete_value": false,
      "site": "004ef1d8",
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
            "const:dae:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ef18c",
      "incomplete_value": false,
      "site": "004ef198",
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
            "const:e02:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004ef1f8",
      "incomplete_value": false,
      "site": "004ef200",
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
            "const:b4e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ef1b8",
      "incomplete_value": false,
      "site": "004ef1c0",
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
            "const:b1d:8"
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
      "004ef104",
      "READ",
      [
        "storage",
        "00c9b010",
        null,
        "pointer"
      ]
    ],
    [
      "004ef114",
      "DATA",
      [
        "storage",
        "00c66fa8",
        null,
        "pointer"
      ]
    ],
    [
      "004ef1cc",
      "PARAM",
      [
        "storage",
        "002bfe02",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004ef104",
      "READ",
      [
        "storage",
        "00c9b0e0",
        null,
        "pointer"
      ]
    ],
    [
      "004ef114",
      "DATA",
      [
        "storage",
        "00c67078",
        null,
        "pointer"
      ]
    ],
    [
      "004ef1cc",
      "PARAM",
      [
        "storage",
        "002bfdae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004ef114 ["COPY", "register:0:8", ["register:4040:8"]]
- 004ef114 ["INT_ADD", "register:40f0:8", ["const:4ef114:8", "const:4:8"]]
- 004ef114 ["CALLIND", null, ["register:0:8"]]
+ 004ef154 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004ef154 ["INT_ADD", "register:40f0:8", ["const:4ef154:8", "const:4:8"]]
+ 004ef154 ["CALLIND", null, ["register:0:8"]]
- 004ef198 ["INT_ADD", "register:40f0:8", ["const:4ef198:8", "const:4:8"]]
- 004ef198 ["CALL", null, ["callee:00c58030:8"]]
+ 004ef1d8 ["INT_ADD", "register:40f0:8", ["const:4ef1d8:8", "const:4:8"]]
+ 004ef1d8 ["CALL", null, ["callee:00c58030:8"]]
- 004ef1c0 ["INT_ADD", "register:40f0:8", ["const:4ef1c0:8", "const:4:8"]]
- 004ef1c0 ["CALL", null, ["callee:00c58040:8"]]
+ 004ef200 ["INT_ADD", "register:40f0:8", ["const:4ef200:8", "const:4:8"]]
+ 004ef200 ["CALL", null, ["callee:00c58040:8"]]
~~~


<a id="compare-cd809d2ec165de83da3807f067b2cd5d"></a>

### [`004ef334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ef/004ef334.md) → [`004ef374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ef/004ef374.md) _ZN5Botan16PK_KEM_EncryptorC2ERKNS_10Public_KeyERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorI

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c57f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 7件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.70% / 新版 96.70%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004ef450",
      "incomplete_value": false,
      "site": "004ef45c",
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
            "const:dae:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ef410",
      "incomplete_value": false,
      "site": "004ef41c",
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
            "const:e02:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004ef47c",
      "incomplete_value": false,
      "site": "004ef484",
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
            "const:b2d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ef43c",
      "incomplete_value": false,
      "site": "004ef444",
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
            "const:afc:8"
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
      "definition_site": "004ef4cc",
      "incomplete_value": true,
      "site": "004ef4d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ef48c",
      "incomplete_value": true,
      "site": "004ef498",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d30:8"
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
      "004ef450",
      "PARAM",
      [
        "storage",
        "002bfe02",
        null,
        "string"
      ]
    ],
    [
      "004ef47c",
      "PARAM",
      [
        "storage",
        "002b3afc",
        null,
        "string"
      ]
    ],
    [
      "004ef4c8",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004ef450",
      "PARAM",
      [
        "storage",
        "002bfdae",
        null,
        "string"
      ]
    ],
    [
      "004ef47c",
      "PARAM",
      [
        "storage",
        "002b3b2d",
        null,
        "string"
      ]
    ],
    [
      "004ef4c8",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004ef41c ["INT_ADD", "register:40f0:8", ["const:4ef41c:8", "const:4:8"]]
- 004ef41c ["CALL", null, ["callee:00c58030:8"]]
+ 004ef45c ["INT_ADD", "register:40f0:8", ["const:4ef45c:8", "const:4:8"]]
+ 004ef45c ["CALL", null, ["callee:00c58030:8"]]
- 004ef444 ["INT_ADD", "register:40f0:8", ["const:4ef444:8", "const:4:8"]]
- 004ef444 ["CALL", null, ["callee:00c58040:8"]]
+ 004ef484 ["INT_ADD", "register:40f0:8", ["const:4ef484:8", "const:4:8"]]
+ 004ef484 ["CALL", null, ["callee:00c58040:8"]]
- 004ef498 ["INT_ADD", "register:40f0:8", ["const:4ef498:8", "const:4:8"]]
- 004ef498 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004ef4d8 ["INT_ADD", "register:40f0:8", ["const:4ef4d8:8", "const:4:8"]]
+ 004ef4d8 ["CALL", null, ["callee:00c57fe0:8"]]
~~~


<a id="compare-d13a83420984bc2dba535ab498de6bdb"></a>

### [`004ef594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ef/004ef594.md) → [`004ef5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ef/004ef5d4.md) _ZN5Botan16PK_KEM_DecryptorC1ERKNS_11Private_KeyERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS6_11char_traitsIcEENS6_9allocator

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c57f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 7件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004ef6b8",
      "incomplete_value": false,
      "site": "004ef6c4",
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
            "const:dae:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ef678",
      "incomplete_value": false,
      "site": "004ef684",
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
            "const:e02:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004ef6e4",
      "incomplete_value": false,
      "site": "004ef6ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:23f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ef6a4",
      "incomplete_value": false,
      "site": "004ef6ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:293:8"
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
      "definition_site": "004ef734",
      "incomplete_value": true,
      "site": "004ef740",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ef6f4",
      "incomplete_value": true,
      "site": "004ef700",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d30:8"
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
      "004ef6b8",
      "PARAM",
      [
        "storage",
        "002bfe02",
        null,
        "string"
      ]
    ],
    [
      "004ef6e4",
      "PARAM",
      [
        "storage",
        "002ba293",
        null,
        "string"
      ]
    ],
    [
      "004ef730",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004ef6b8",
      "PARAM",
      [
        "storage",
        "002bfdae",
        null,
        "string"
      ]
    ],
    [
      "004ef6e4",
      "PARAM",
      [
        "storage",
        "002ba23f",
        null,
        "string"
      ]
    ],
    [
      "004ef730",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004ef684 ["INT_ADD", "register:40f0:8", ["const:4ef684:8", "const:4:8"]]
- 004ef684 ["CALL", null, ["callee:00c58030:8"]]
+ 004ef6c4 ["INT_ADD", "register:40f0:8", ["const:4ef6c4:8", "const:4:8"]]
+ 004ef6c4 ["CALL", null, ["callee:00c58030:8"]]
- 004ef6ac ["INT_ADD", "register:40f0:8", ["const:4ef6ac:8", "const:4:8"]]
- 004ef6ac ["CALL", null, ["callee:00c58040:8"]]
+ 004ef6ec ["INT_ADD", "register:40f0:8", ["const:4ef6ec:8", "const:4:8"]]
+ 004ef6ec ["CALL", null, ["callee:00c58040:8"]]
- 004ef700 ["INT_ADD", "register:40f0:8", ["const:4ef700:8", "const:4:8"]]
- 004ef700 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004ef740 ["INT_ADD", "register:40f0:8", ["const:4ef740:8", "const:4:8"]]
+ 004ef740 ["CALL", null, ["callee:00c57fe0:8"]]
~~~


<a id="compare-f435212f98bcdf2b659ad9cded7a09cb"></a>

### [`004ef7fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ef/004ef7fc.md) → [`004ef83c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ef/004ef83c.md) _ZN5Botan16PK_Key_AgreementC2ERKNS_11Private_KeyERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS6_11char_traitsIcEENS6_9allocator

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c57f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 7件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004ef920",
      "incomplete_value": false,
      "site": "004ef92c",
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
            "const:dae:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ef8e0",
      "incomplete_value": false,
      "site": "004ef8ec",
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
            "const:e02:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004ef94c",
      "incomplete_value": false,
      "site": "004ef954",
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
            "const:2c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ef90c",
      "incomplete_value": false,
      "site": "004ef914",
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
            "const:79:8"
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
      "definition_site": "004ef99c",
      "incomplete_value": true,
      "site": "004ef9a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004ef95c",
      "incomplete_value": true,
      "site": "004ef968",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d30:8"
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
      "004ef920",
      "PARAM",
      [
        "storage",
        "002bfe02",
        null,
        "string"
      ]
    ],
    [
      "004ef94c",
      "PARAM",
      [
        "storage",
        "002a0079",
        null,
        "string"
      ]
    ],
    [
      "004ef998",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004ef920",
      "PARAM",
      [
        "storage",
        "002bfdae",
        null,
        "string"
      ]
    ],
    [
      "004ef94c",
      "PARAM",
      [
        "storage",
        "002a002c",
        null,
        "string"
      ]
    ],
    [
      "004ef998",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004ef8ec ["INT_ADD", "register:40f0:8", ["const:4ef8ec:8", "const:4:8"]]
- 004ef8ec ["CALL", null, ["callee:00c58030:8"]]
+ 004ef92c ["INT_ADD", "register:40f0:8", ["const:4ef92c:8", "const:4:8"]]
+ 004ef92c ["CALL", null, ["callee:00c58030:8"]]
- 004ef914 ["INT_ADD", "register:40f0:8", ["const:4ef914:8", "const:4:8"]]
- 004ef914 ["CALL", null, ["callee:00c58040:8"]]
+ 004ef954 ["INT_ADD", "register:40f0:8", ["const:4ef954:8", "const:4:8"]]
+ 004ef954 ["CALL", null, ["callee:00c58040:8"]]
- 004ef968 ["INT_ADD", "register:40f0:8", ["const:4ef968:8", "const:4:8"]]
- 004ef968 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004ef9a8 ["INT_ADD", "register:40f0:8", ["const:4ef9a8:8", "const:4:8"]]
+ 004ef9a8 ["CALL", null, ["callee:00c57fe0:8"]]
~~~


<a id="compare-b38a636329dda9f4de30c63aaf0e71a3"></a>

### [`004efb78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ef/004efb78.md) → [`004efbb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ef/004efbb8.md) _ZN5Botan9PK_SignerC1ERKNS_11Private_KeyERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS6_11char_traitsIcEENS6_9allocatorIcEEEENS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59230.md) · 呼出先 7件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c57f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00c59300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59300.md) · 呼出先 7件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.25% / 新版 97.25%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004efcdc",
      "incomplete_value": false,
      "site": "004efce8",
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
            "const:dae:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004efc9c",
      "incomplete_value": false,
      "site": "004efca8",
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
            "const:e02:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004efd08",
      "incomplete_value": false,
      "site": "004efd10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:d31:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004efcc8",
      "incomplete_value": false,
      "site": "004efcd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:d85:8"
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
      "definition_site": "004efd58",
      "incomplete_value": true,
      "site": "004efd64",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004efd18",
      "incomplete_value": true,
      "site": "004efd24",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d30:8"
              ]
            ]
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
      "004efcdc",
      "PARAM",
      [
        "storage",
        "002bfe02",
        null,
        "string"
      ]
    ],
    [
      "004efd08",
      "PARAM",
      [
        "storage",
        "002bed85",
        null,
        "string"
      ]
    ],
    [
      "004efd54",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004efcdc",
      "PARAM",
      [
        "storage",
        "002bfdae",
        null,
        "string"
      ]
    ],
    [
      "004efd08",
      "PARAM",
      [
        "storage",
        "002bed31",
        null,
        "string"
      ]
    ],
    [
      "004efd54",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004efca8 ["INT_ADD", "register:40f0:8", ["const:4efca8:8", "const:4:8"]]
- 004efca8 ["CALL", null, ["callee:00c58030:8"]]
+ 004efce8 ["INT_ADD", "register:40f0:8", ["const:4efce8:8", "const:4:8"]]
+ 004efce8 ["CALL", null, ["callee:00c58030:8"]]
- 004efcd0 ["INT_ADD", "register:40f0:8", ["const:4efcd0:8", "const:4:8"]]
- 004efcd0 ["CALL", null, ["callee:00c58040:8"]]
+ 004efd10 ["INT_ADD", "register:40f0:8", ["const:4efd10:8", "const:4:8"]]
+ 004efd10 ["CALL", null, ["callee:00c58040:8"]]
- 004efd24 ["INT_ADD", "register:40f0:8", ["const:4efd24:8", "const:4:8"]]
- 004efd24 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004efd64 ["INT_ADD", "register:40f0:8", ["const:4efd64:8", "const:4:8"]]
+ 004efd64 ["CALL", null, ["callee:00c57fe0:8"]]
~~~


<a id="compare-07e84023ae1c64005e3d9381f4af0e4f"></a>

### [`004efe24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ef/004efe24.md) → [`004efe64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ef/004efe64.md) _ZN5Botan9PK_Signer9signatureERNS_21RandomNumberGeneratorE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59250.md) · 呼出先 21件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0049f42c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f42c.md) [`004a6db0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004a6/004a6db0.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00535b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535b80.md)
- 新版 呼出元 1件 [`00c59320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59320.md) · 呼出先 21件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`004a6df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004a6/004a6df0.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00535bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bc0.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.84% / 新版 97.84%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 1件

アドレスに依存する影響 `call_argument_candidate` 2件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004eff2c",
      "incomplete_value": true,
      "site": "004eff2c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004efeec",
      "incomplete_value": true,
      "site": "004efeec",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
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
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f0108",
      "incomplete_value": true,
      "site": "004f0108",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f00c8",
      "incomplete_value": true,
      "site": "004f00c8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
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
    "ordinal": 16,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f016c",
      "incomplete_value": true,
      "site": "004f016c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f012c",
      "incomplete_value": true,
      "site": "004f012c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
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
      "004eff1c",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f00f8",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f015c",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004eff1c",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f00f8",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f015c",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004efeec ["COPY", "register:0:8", ["register:4048:8"]]
- 004efeec ["INT_ADD", "register:40f0:8", ["const:4efeec:8", "const:4:8"]]
- 004efeec ["CALLIND", null, ["register:0:8"]]
+ 004eff2c ["COPY", "register:0:8", ["register:4048:8"]]
+ 004eff2c ["INT_ADD", "register:40f0:8", ["const:4eff2c:8", "const:4:8"]]
+ 004eff2c ["CALLIND", null, ["register:0:8"]]
- 004f00c8 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f00c8 ["INT_ADD", "register:40f0:8", ["const:4f00c8:8", "const:4:8"]]
- 004f00c8 ["CALLIND", null, ["register:0:8"]]
+ 004f0108 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f0108 ["INT_ADD", "register:40f0:8", ["const:4f0108:8", "const:4:8"]]
+ 004f0108 ["CALLIND", null, ["register:0:8"]]
- 004f012c ["COPY", "register:0:8", ["register:4048:8"]]
- 004f012c ["INT_ADD", "register:40f0:8", ["const:4f012c:8", "const:4:8"]]
- 004f012c ["CALLIND", null, ["register:0:8"]]
+ 004f016c ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f016c ["INT_ADD", "register:40f0:8", ["const:4f016c:8", "const:4:8"]]
+ 004f016c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8935972f1c43295e6a59d4817b57a30d"></a>

### [`004f0364`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f0/004f0364.md) → [`004f03a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f0/004f03a4.md) _ZN5Botan11PK_VerifierC2ERKNS_10Public_KeyERKNSt6__ndk112basic_stringIcNS4_11char_traitsIcEENS4_9allocatorIcEEEENS_16Signature_FormatESC_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59240.md) · 呼出先 7件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c57f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00c59310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59310.md) · 呼出先 7件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f04ac",
      "incomplete_value": false,
      "site": "004f04b8",
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
            "const:dae:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f046c",
      "incomplete_value": false,
      "site": "004f0478",
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
            "const:e02:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f04d8",
      "incomplete_value": false,
      "site": "004f04e0",
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
            "const:ff:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f0498",
      "incomplete_value": false,
      "site": "004f04a0",
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
            "const:14c:8"
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
      "definition_site": "004f0528",
      "incomplete_value": true,
      "site": "004f0534",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f04e8",
      "incomplete_value": true,
      "site": "004f04f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d30:8"
              ]
            ]
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
      "004f04ac",
      "PARAM",
      [
        "storage",
        "002bfe02",
        null,
        "string"
      ]
    ],
    [
      "004f04d8",
      "PARAM",
      [
        "storage",
        "002a114c",
        null,
        "string"
      ]
    ],
    [
      "004f0524",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004f04ac",
      "PARAM",
      [
        "storage",
        "002bfdae",
        null,
        "string"
      ]
    ],
    [
      "004f04d8",
      "PARAM",
      [
        "storage",
        "002a10ff",
        null,
        "string"
      ]
    ],
    [
      "004f0524",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004f0478 ["INT_ADD", "register:40f0:8", ["const:4f0478:8", "const:4:8"]]
- 004f0478 ["CALL", null, ["callee:00c58030:8"]]
+ 004f04b8 ["INT_ADD", "register:40f0:8", ["const:4f04b8:8", "const:4:8"]]
+ 004f04b8 ["CALL", null, ["callee:00c58030:8"]]
- 004f04a0 ["INT_ADD", "register:40f0:8", ["const:4f04a0:8", "const:4:8"]]
- 004f04a0 ["CALL", null, ["callee:00c58040:8"]]
+ 004f04e0 ["INT_ADD", "register:40f0:8", ["const:4f04e0:8", "const:4:8"]]
+ 004f04e0 ["CALL", null, ["callee:00c58040:8"]]
- 004f04f4 ["INT_ADD", "register:40f0:8", ["const:4f04f4:8", "const:4:8"]]
- 004f04f4 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f0534 ["INT_ADD", "register:40f0:8", ["const:4f0534:8", "const:4:8"]]
+ 004f0534 ["CALL", null, ["callee:00c57fe0:8"]]
~~~


<a id="compare-1d776a52a3e56ce8b6847bb12fc7eaf3"></a>

### [`004f05e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f0/004f05e4.md) → [`004f0624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f0/004f0624.md) _ZN5Botan11PK_Verifier16set_input_formatENS_16Signature_FormatE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.74% / 新版 95.74%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f0690",
      "incomplete_value": false,
      "site": "004f0698",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29e000:8"
          ],
          [
            "leaf",
            "const:fd1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f0650",
      "incomplete_value": false,
      "site": "004f0658",
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
            "const:1e:8"
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
      "definition_site": "004f06cc",
      "incomplete_value": true,
      "site": "004f06d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f068c",
      "incomplete_value": true,
      "site": "004f0698",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d30:8"
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
      "definition_site": "004f06c8",
      "incomplete_value": false,
      "site": "004f06d8",
      "value": [
        "leaf",
        "const:5358a8:8"
      ]
    },
    "old": {
      "definition_site": "004f0688",
      "incomplete_value": false,
      "site": "004f0698",
      "value": [
        "leaf",
        "const:535868:8"
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
      "004f0690",
      "PARAM",
      [
        "storage",
        "0029f01e",
        null,
        "string"
      ]
    ],
    [
      "004f06c8",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ],
    [
      "004f06cc",
      "READ",
      [
        "storage",
        "00c9ad30",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f0690",
      "PARAM",
      [
        "storage",
        "0029efd1",
        null,
        "string"
      ]
    ],
    [
      "004f06c8",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ],
    [
      "004f06cc",
      "READ",
      [
        "storage",
        "00c9ae00",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f0658 ["INT_ADD", "register:40f0:8", ["const:4f0658:8", "const:4:8"]]
- 004f0658 ["CALL", null, ["callee:0043de18:8"]]
+ 004f0698 ["INT_ADD", "register:40f0:8", ["const:4f0698:8", "const:4:8"]]
+ 004f0698 ["CALL", null, ["callee:0043de18:8"]]
- 004f0698 ["INT_ADD", "register:40f0:8", ["const:4f0698:8", "const:4:8"]]
- 004f0698 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f06d8 ["INT_ADD", "register:40f0:8", ["const:4f06d8:8", "const:4:8"]]
+ 004f06d8 ["CALL", null, ["callee:00c57fe0:8"]]
- 004f0644 ["INT_ADD", "register:40f0:8", ["const:4f0644:8", "const:4:8"]]
- 004f0644 ["CALL", null, ["callee:00c57fc0:8"]]
+ 004f0684 ["INT_ADD", "register:40f0:8", ["const:4f0684:8", "const:4:8"]]
+ 004f0684 ["CALL", null, ["callee:00c57fc0:8"]]
~~~


<a id="compare-e163a42aab8b80020df1d0981ab04841"></a>

### [`004f0744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f0/004f0744.md) → [`004f0784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f0/004f0784.md) _ZN5Botan11PK_Verifier15check_signatureEPKhm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59260.md) · 呼出先 16件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`004b3508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004b3/004b3508.md) [`004f0b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f0/004f0b80.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c59330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59330.md) · 呼出先 16件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`004b3548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b3/004b3548.md) [`004f0bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f0/004f0bc0.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.72% / 新版 93.72%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 4件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f08a8",
      "incomplete_value": true,
      "site": "004f08a8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f0868",
      "incomplete_value": true,
      "site": "004f0868",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f08d4",
      "incomplete_value": true,
      "site": "004f08d4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f0894",
      "incomplete_value": true,
      "site": "004f0894",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": "004f093c",
      "incomplete_value": true,
      "site": "004f093c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f08fc",
      "incomplete_value": true,
      "site": "004f08fc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "004f0898",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f08c4",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f092c",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f0898",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f08c4",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f092c",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f0828 ["INT_ADD", "register:40f0:8", ["const:4f0828:8", "const:4:8"]]
- 004f0828 ["CALL", null, ["callee:004b3548:8"]]
+ 004f0868 ["INT_ADD", "register:40f0:8", ["const:4f0868:8", "const:4:8"]]
+ 004f0868 ["CALL", null, ["callee:004b3548:8"]]
- 004f0868 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f0868 ["INT_ADD", "register:40f0:8", ["const:4f0868:8", "const:4:8"]]
- 004f0868 ["CALLIND", null, ["register:0:8"]]
+ 004f08a8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f08a8 ["INT_ADD", "register:40f0:8", ["const:4f08a8:8", "const:4:8"]]
+ 004f08a8 ["CALLIND", null, ["register:0:8"]]
- 004f0894 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f0894 ["INT_ADD", "register:40f0:8", ["const:4f0894:8", "const:4:8"]]
- 004f0894 ["CALLIND", null, ["register:0:8"]]
+ 004f08d4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f08d4 ["INT_ADD", "register:40f0:8", ["const:4f08d4:8", "const:4:8"]]
+ 004f08d4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7351d96033040282b9317bff5693071b"></a>

### [`004f0ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f0/004f0ca8.md) → [`004f0ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f0/004f0ce8.md) _ZN5Botan14if_work_factorEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58440.md) [`00c596b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c596b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58510.md) [`00c59780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59780.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "004f0d3c",
      "incomplete_value": true,
      "site": "004f0d48",
      "value": [
        "TRUNC",
        "8",
        [
          [
            "FLOAT_ADD",
            "8",
            [
              "LOAD",
              "FLOAT_MULT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f0cfc",
      "incomplete_value": true,
      "site": "004f0d08",
      "value": [
        "TRUNC",
        "8",
        [
          [
            "FLOAT_ADD",
            "8",
            [
              "LOAD",
              "FLOAT_MULT"
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
      "004f0cfc",
      "READ",
      [
        "storage",
        "002c4358",
        null,
        "undefined8"
      ]
    ],
    [
      "004f0d28",
      "READ",
      [
        "storage",
        "002c3ee0",
        null,
        "undefined8"
      ]
    ],
    [
      "004f0d34",
      "READ",
      [
        "storage",
        "002c4388",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "004f0cfc",
      "READ",
      [
        "storage",
        "002c4398",
        null,
        "undefined8"
      ]
    ],
    [
      "004f0d28",
      "READ",
      [
        "storage",
        "002c3f20",
        null,
        "undefined8"
      ]
    ],
    [
      "004f0d34",
      "READ",
      [
        "storage",
        "002c43c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f0cc8 ["INT_ADD", "register:40f0:8", ["const:4f0cc8:8", "const:4:8"]]
- 004f0cc8 ["CALL", null, ["callee:00c59780:8"]]
+ 004f0d08 ["INT_ADD", "register:40f0:8", ["const:4f0d08:8", "const:4:8"]]
+ 004f0d08 ["CALL", null, ["callee:00c59780:8"]]
- 004f0cbc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:358:8"]]
- 004f0cbc ["LOAD", "register:5120:8", ["const:1b1:8", "tmp:0:8"]]
- 004f0cbc ["COPY", "register:5128:8", ["const:0:8"]]
- 004f0cbc ["COPY", "register:5130:8", ["const:0:8"]]
+ 004f0cfc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:398:8"]]
+ 004f0cfc ["LOAD", "register:5120:8", ["const:1b1:8", "tmp:0:8"]]
+ 004f0cfc ["COPY", "register:5128:8", ["const:0:8"]]
+ 004f0cfc ["COPY", "register:5130:8", ["const:0:8"]]
- 004f0ce0 ["INT_ADD", "register:40f0:8", ["const:4f0ce0:8", "const:4:8"]]
- 004f0ce0 ["CALL", null, ["callee:00c58510:8"]]
+ 004f0d20 ["INT_ADD", "register:40f0:8", ["const:4f0d20:8", "const:4:8"]]
+ 004f0d20 ["CALL", null, ["callee:00c58510:8"]]
~~~


<a id="compare-4b89eb2c6cf6e67957a43b72e0333fa1"></a>

### [`004f0d0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f0/004f0d0c.md) → [`004f0d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f0/004f0d4c.md) _ZN5Botan14dl_work_factorEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58440.md) [`00c596b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c596b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58510.md) [`00c59780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59780.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "004f0da0",
      "incomplete_value": true,
      "site": "004f0dac",
      "value": [
        "TRUNC",
        "8",
        [
          [
            "FLOAT_ADD",
            "8",
            [
              "LOAD",
              "FLOAT_MULT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f0d60",
      "incomplete_value": true,
      "site": "004f0d6c",
      "value": [
        "TRUNC",
        "8",
        [
          [
            "FLOAT_ADD",
            "8",
            [
              "LOAD",
              "FLOAT_MULT"
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
      "004f0d60",
      "READ",
      [
        "storage",
        "002c4358",
        null,
        "undefined8"
      ]
    ],
    [
      "004f0d8c",
      "READ",
      [
        "storage",
        "002c3ee0",
        null,
        "undefined8"
      ]
    ],
    [
      "004f0d98",
      "READ",
      [
        "storage",
        "002c4388",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "004f0d60",
      "READ",
      [
        "storage",
        "002c4398",
        null,
        "undefined8"
      ]
    ],
    [
      "004f0d8c",
      "READ",
      [
        "storage",
        "002c3f20",
        null,
        "undefined8"
      ]
    ],
    [
      "004f0d98",
      "READ",
      [
        "storage",
        "002c43c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f0d2c ["INT_ADD", "register:40f0:8", ["const:4f0d2c:8", "const:4:8"]]
- 004f0d2c ["CALL", null, ["callee:00c59780:8"]]
+ 004f0d6c ["INT_ADD", "register:40f0:8", ["const:4f0d6c:8", "const:4:8"]]
+ 004f0d6c ["CALL", null, ["callee:00c59780:8"]]
- 004f0d20 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:358:8"]]
- 004f0d20 ["LOAD", "register:5120:8", ["const:1b1:8", "tmp:0:8"]]
- 004f0d20 ["COPY", "register:5128:8", ["const:0:8"]]
- 004f0d20 ["COPY", "register:5130:8", ["const:0:8"]]
+ 004f0d60 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:398:8"]]
+ 004f0d60 ["LOAD", "register:5120:8", ["const:1b1:8", "tmp:0:8"]]
+ 004f0d60 ["COPY", "register:5128:8", ["const:0:8"]]
+ 004f0d60 ["COPY", "register:5130:8", ["const:0:8"]]
- 004f0d44 ["INT_ADD", "register:40f0:8", ["const:4f0d44:8", "const:4:8"]]
- 004f0d44 ["CALL", null, ["callee:00c58510:8"]]
+ 004f0d84 ["INT_ADD", "register:40f0:8", ["const:4f0d84:8", "const:4:8"]]
+ 004f0d84 ["CALL", null, ["callee:00c58510:8"]]
~~~


<a id="compare-54c2290c01ad376c9c4ccafaac42dcb5"></a>

### [`004f0df8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f0/004f0df8.md) → [`004f0e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f0/004f0e38.md) _ZN5Botan4X50910PEM_encodeERKNS_10Public_KeyE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c596c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c596c0.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c59490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59490.md) [`00c595d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c595d0.md)
- 新版 呼出元 1件 [`00c59790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59790.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c59560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59560.md) [`00c596a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c596a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f0e88",
      "incomplete_value": true,
      "site": "004f0e88",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:db8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f0e48",
      "incomplete_value": true,
      "site": "004f0e48",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e0c:8"
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
      "004f0e74",
      "READ",
      [
        "storage",
        "002bfe0c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004f0e74",
      "READ",
      [
        "storage",
        "002bfdb8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f0e1c ["INT_ADD", "register:40f0:8", ["const:4f0e1c:8", "const:4:8"]]
- 004f0e1c ["CALL", null, ["callee:00c596a0:8"]]
+ 004f0e5c ["INT_ADD", "register:40f0:8", ["const:4f0e5c:8", "const:4:8"]]
+ 004f0e5c ["CALL", null, ["callee:00c596a0:8"]]
- 004f0e28 ["COPY", "tmp:0:8", ["const:e0c:8"]]
- 004f0e28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 004f0e28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 004f0e28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 004f0e68 ["COPY", "tmp:0:8", ["const:db8:8"]]
+ 004f0e68 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 004f0e68 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 004f0e68 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 004f0e58 ["INT_ADD", "register:40f0:8", ["const:4f0e58:8", "const:4:8"]]
- 004f0e58 ["CALL", null, ["callee:00c59560:8"]]
+ 004f0e98 ["INT_ADD", "register:40f0:8", ["const:4f0e98:8", "const:4:8"]]
+ 004f0e98 ["CALL", null, ["callee:00c59560:8"]]
~~~


<a id="compare-c2dcba43e8fe943bf1d74c188c13a057"></a>

### [`004f0edc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f0/004f0edc.md) → [`004f0f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f0/004f0f1c.md) _ZN5Botan4X5098load_keyERNS_10DataSourceE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c596d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c596d0.md) · 呼出先 20件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`004a577c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004a5/004a577c.md) [`004a6f9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004a6/004a6f9c.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`005402a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/005402a4.md)
- 新版 呼出元 1件 [`00c597a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597a0.md) · 呼出先 20件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`004a57bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004a5/004a57bc.md) [`004a6fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004a6/004a6fdc.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`005402e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/005402e4.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.39% / 新版 93.39%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 4件, `store_value` 2件

アドレスに依存する影響 `call_argument_candidate` 1件, `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f0f50",
      "incomplete_value": true,
      "site": "004f0f50",
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
      "definition_site": "004f0f10",
      "incomplete_value": true,
      "site": "004f0f10",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f0fdc",
      "incomplete_value": true,
      "site": "004f0fdc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:db8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f0f9c",
      "incomplete_value": true,
      "site": "004f0f9c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e0c:8"
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
      "definition_site": "004f1008",
      "incomplete_value": true,
      "site": "004f1008",
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
      "definition_site": "004f0fc8",
      "incomplete_value": true,
      "site": "004f0fc8",
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
      "004f0f40",
      "READ",
      [
        "storage",
        "00c9ad38",
        null,
        "pointer"
      ]
    ],
    [
      "004f0f50",
      "DATA",
      [
        "storage",
        "00c661a8",
        null,
        "pointer"
      ]
    ],
    [
      "004f0fcc",
      "READ",
      [
        "storage",
        "002bfe0c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004f0f40",
      "READ",
      [
        "storage",
        "00c9ae08",
        null,
        "pointer"
      ]
    ],
    [
      "004f0f50",
      "DATA",
      [
        "storage",
        "00c66278",
        null,
        "pointer"
      ]
    ],
    [
      "004f0fcc",
      "READ",
      [
        "storage",
        "002bfdb8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f1004 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f1004 ["INT_ADD", "register:40f0:8", ["const:4f1004:8", "const:4:8"]]
- 004f1004 ["CALLIND", null, ["register:0:8"]]
+ 004f1044 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f1044 ["INT_ADD", "register:40f0:8", ["const:4f1044:8", "const:4:8"]]
+ 004f1044 ["CALLIND", null, ["register:0:8"]]
- 004f10ac ["COPY", "register:0:8", ["register:4048:8"]]
- 004f10ac ["INT_ADD", "register:40f0:8", ["const:4f10ac:8", "const:4:8"]]
- 004f10ac ["CALLIND", null, ["register:0:8"]]
+ 004f10ec ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f10ec ["INT_ADD", "register:40f0:8", ["const:4f10ec:8", "const:4:8"]]
+ 004f10ec ["CALLIND", null, ["register:0:8"]]
- 004f10f0 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f10f0 ["INT_ADD", "register:40f0:8", ["const:4f10f0:8", "const:4:8"]]
- 004f10f0 ["CALLIND", null, ["register:0:8"]]
+ 004f1130 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f1130 ["INT_ADD", "register:40f0:8", ["const:4f1130:8", "const:4:8"]]
+ 004f1130 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6628f73c4aca8b50d3b9e724b4ede2f5"></a>

### [`004f15d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f1/004f15d4.md) → [`004f1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f1614.md) _ZN5Botan4X5098load_keyERKNSt6__ndk16vectorIhNS1_9allocatorIhEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c596f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c596f0.md) · 呼出先 5件 [`00536d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00536/00536d04.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`00c596d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c596d0.md) [`0112a058`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a058.md)
- 新版 呼出元 1件 [`00c597c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597c0.md) · 呼出先 5件 [`00536d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00536/00536d44.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c597a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597a0.md) [`0112a058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a058.md)

変更の種類 call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `call_target` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f1644",
      "incomplete_value": true,
      "site": "004f1644",
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
      "definition_site": "004f1604",
      "incomplete_value": true,
      "site": "004f1604",
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
    "kind": "call_target",
    "new": {
      "definition_site": "004f1690",
      "incomplete_value": true,
      "site": "004f1690",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f1650",
      "incomplete_value": true,
      "site": "004f1650",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "004f1630",
      "READ",
      [
        "storage",
        "00c9ade0",
        null,
        "pointer"
      ]
    ],
    [
      "004f1644",
      "DATA",
      [
        "storage",
        "00c67388",
        null,
        "pointer"
      ]
    ],
    [
      "004f1680",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f1630",
      "READ",
      [
        "storage",
        "00c9aeb0",
        null,
        "pointer"
      ]
    ],
    [
      "004f1644",
      "DATA",
      [
        "storage",
        "00c67458",
        null,
        "pointer"
      ]
    ],
    [
      "004f1680",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f1650 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f1650 ["INT_ADD", "register:40f0:8", ["const:4f1650:8", "const:4:8"]]
- 004f1650 ["CALLIND", null, ["register:0:8"]]
+ 004f1690 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f1690 ["INT_ADD", "register:40f0:8", ["const:4f1690:8", "const:4:8"]]
+ 004f1690 ["CALLIND", null, ["register:0:8"]]
- 004f15f0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:de0:8"]]
- 004f15f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004f1630 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:eb0:8"]]
+ 004f1630 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 004f1618 ["INT_ADD", "register:40f0:8", ["const:4f1618:8", "const:4:8"]]
- 004f1618 ["CALL", null, ["callee:00536d44:8"]]
+ 004f1658 ["INT_ADD", "register:40f0:8", ["const:4f1658:8", "const:4:8"]]
+ 004f1658 ["CALL", null, ["callee:00536d44:8"]]
~~~


<a id="compare-360b7d3b632fa8c6b278efcfa6e05736"></a>

### [`004f16b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f1/004f16b0.md) → [`004f16f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f16f0.md) _ZN5Botan4X5098copy_keyERKNS_10Public_KeyE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`00c594c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c594c0.md) [`00c596c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c596c0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c59590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59590.md) [`00c59790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59790.md)

変更の種類 call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f1764",
      "incomplete_value": true,
      "site": "004f1764",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f1724",
      "incomplete_value": true,
      "site": "004f1724",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
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
      "004f1754",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f1754",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f1724 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f1724 ["INT_ADD", "register:40f0:8", ["const:4f1724:8", "const:4:8"]]
- 004f1724 ["CALLIND", null, ["register:0:8"]]
+ 004f1764 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f1764 ["INT_ADD", "register:40f0:8", ["const:4f1764:8", "const:4:8"]]
+ 004f1764 ["CALLIND", null, ["register:0:8"]]
- 004f16d4 ["INT_ADD", "register:40f0:8", ["const:4f16d4:8", "const:4:8"]]
- 004f16d4 ["CALL", null, ["callee:00c59790:8"]]
+ 004f1714 ["INT_ADD", "register:40f0:8", ["const:4f1714:8", "const:4:8"]]
+ 004f1714 ["CALL", null, ["callee:00c59790:8"]]
- 004f16e0 ["INT_ADD", "register:40f0:8", ["const:4f16e0:8", "const:4:8"]]
- 004f16e0 ["CALL", null, ["callee:00c59590:8"]]
+ 004f1720 ["INT_ADD", "register:40f0:8", ["const:4f1720:8", "const:4:8"]]
+ 004f1720 ["CALL", null, ["callee:00c59590:8"]]
~~~


<a id="compare-b528d615b98b85d68d8fb01813a677d1"></a>

### [`004f1b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f1/004f1b38.md) → [`004f1b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f1b78.md) _ZN5Botan21RandomNumberGenerator8make_rngEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 0件  · 呼出先 6件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 77.50% / 新版 77.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f1bbc",
      "incomplete_value": true,
      "site": "004f1bc8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f1b7c",
      "incomplete_value": true,
      "site": "004f1b88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1a0:8"
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
      "definition_site": "004f1bb8",
      "incomplete_value": true,
      "site": "004f1bcc",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
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
      "definition_site": "004f1b78",
      "incomplete_value": true,
      "site": "004f1b8c",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:dac:8"
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
      "definition_site": "004f1bb8",
      "incomplete_value": true,
      "site": "004f1bcc",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "004f1b78",
      "incomplete_value": true,
      "site": "004f1b8c",
      "value": [
        "LOAD",
        "16",
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
      "004f1bb8",
      "READ",
      [
        "storage",
        "002bedac",
        null,
        "string"
      ]
    ],
    [
      "004f1bb8",
      "READ",
      [
        "storage",
        "002bedbc",
        null,
        "string"
      ]
    ],
    [
      "004f1bbc",
      "READ",
      [
        "storage",
        "002c31a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004f1bb8",
      "READ",
      [
        "storage",
        "002bed58",
        null,
        "string"
      ]
    ],
    [
      "004f1bb8",
      "READ",
      [
        "storage",
        "002bed68",
        null,
        "string"
      ]
    ],
    [
      "004f1bbc",
      "READ",
      [
        "storage",
        "002c31e0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004f1bd0 ["INT_ADD", "register:40f0:8", ["const:4f1bd0:8", "const:4:8"]]
- 004f1bd0 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f1c10 ["INT_ADD", "register:40f0:8", ["const:4f1c10:8", "const:4:8"]]
+ 004f1c10 ["CALL", null, ["callee:00c57fe0:8"]]
- 004f1b5c ["INT_ADD", "register:40f0:8", ["const:4f1b5c:8", "const:4:8"]]
- 004f1b5c ["CALL", null, ["callee:00c57fc0:8"]]
+ 004f1b9c ["INT_ADD", "register:40f0:8", ["const:4f1b9c:8", "const:4:8"]]
+ 004f1b9c ["CALL", null, ["callee:00c57fc0:8"]]
- 004f1b68 ["INT_ADD", "register:40f0:8", ["const:4f1b68:8", "const:4:8"]]
- 004f1b68 ["CALL", null, ["callee:00c57f60:8"]]
+ 004f1ba8 ["INT_ADD", "register:40f0:8", ["const:4f1ba8:8", "const:4:8"]]
+ 004f1ba8 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-d47c5c61adf3fe3726d8631c123b7500"></a>

### [`004f1c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f1/004f1c20.md) → [`004f1c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f1c60.md) _ZN5Botan14Serialized_RNGC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 0件  · 呼出先 6件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 73.58% / 新版 73.58%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 7件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f1c94",
      "incomplete_value": true,
      "site": "004f1c9c",
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
      "definition_site": "004f1c54",
      "incomplete_value": true,
      "site": "004f1c5c",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f1cd0",
      "incomplete_value": true,
      "site": "004f1cdc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:db0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f1c90",
      "incomplete_value": true,
      "site": "004f1c9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f1ccc",
      "incomplete_value": true,
      "site": "004f1ce0",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "004f1c8c",
      "incomplete_value": true,
      "site": "004f1ca0",
      "value": [
        "LOAD",
        "16",
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
      "004f1c84",
      "READ",
      [
        "storage",
        "00c9b018",
        null,
        "pointer"
      ]
    ],
    [
      "004f1c9c",
      "DATA",
      [
        "storage",
        "00c66fd0",
        null,
        "pointer"
      ]
    ],
    [
      "004f1ccc",
      "READ",
      [
        "storage",
        "002bb3db",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004f1c84",
      "READ",
      [
        "storage",
        "00c9b0e8",
        null,
        "pointer"
      ]
    ],
    [
      "004f1c9c",
      "DATA",
      [
        "storage",
        "00c670a0",
        null,
        "pointer"
      ]
    ],
    [
      "004f1ccc",
      "READ",
      [
        "storage",
        "002bb387",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f1cdc ["COPY", "register:4010:8", ["const:535868:8"]]
+ 004f1d1c ["COPY", "register:4010:8", ["const:5358a8:8"]]
- 004f1ce0 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:d88:8"]]
- 004f1ce0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 004f1d20 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:e58:8"]]
+ 004f1d20 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 004f1cec ["INT_ADD", "register:40f0:8", ["const:4f1cec:8", "const:4:8"]]
- 004f1cec ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f1d2c ["INT_ADD", "register:40f0:8", ["const:4f1d2c:8", "const:4:8"]]
+ 004f1d2c ["CALL", null, ["callee:00c57fe0:8"]]
~~~


<a id="compare-7a86ec19bb2315a4c8008ed994ec7966"></a>

### [`004f1e58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f1/004f1e58.md) → [`004f1e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f1e98.md) _ZNK5Botan13RSA_PublicKey18estimated_strengthEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58440.md) [`00c596b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c596b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58510.md) [`00c59780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59780.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "004f1ef8",
      "incomplete_value": true,
      "site": "004f1f04",
      "value": [
        "TRUNC",
        "8",
        [
          [
            "FLOAT_ADD",
            "8",
            [
              "LOAD",
              "FLOAT_MULT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f1eb8",
      "incomplete_value": true,
      "site": "004f1ec4",
      "value": [
        "TRUNC",
        "8",
        [
          [
            "FLOAT_ADD",
            "8",
            [
              "LOAD",
              "FLOAT_MULT"
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
      "004f1eb8",
      "READ",
      [
        "storage",
        "002c4358",
        null,
        "undefined8"
      ]
    ],
    [
      "004f1ee4",
      "READ",
      [
        "storage",
        "002c3ee0",
        null,
        "undefined8"
      ]
    ],
    [
      "004f1ef0",
      "READ",
      [
        "storage",
        "002c4388",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "004f1eb8",
      "READ",
      [
        "storage",
        "002c4398",
        null,
        "undefined8"
      ]
    ],
    [
      "004f1ee4",
      "READ",
      [
        "storage",
        "002c3f20",
        null,
        "undefined8"
      ]
    ],
    [
      "004f1ef0",
      "READ",
      [
        "storage",
        "002c43c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f1e84 ["INT_ADD", "register:40f0:8", ["const:4f1e84:8", "const:4:8"]]
- 004f1e84 ["CALL", null, ["callee:00c59780:8"]]
+ 004f1ec4 ["INT_ADD", "register:40f0:8", ["const:4f1ec4:8", "const:4:8"]]
+ 004f1ec4 ["CALL", null, ["callee:00c59780:8"]]
- 004f1e6c ["COPY", "register:0:8", ["register:4040:8"]]
- 004f1e6c ["INT_ADD", "register:40f0:8", ["const:4f1e6c:8", "const:4:8"]]
- 004f1e6c ["CALLIND", null, ["register:0:8"]]
+ 004f1eac ["COPY", "register:0:8", ["register:4040:8"]]
+ 004f1eac ["INT_ADD", "register:40f0:8", ["const:4f1eac:8", "const:4:8"]]
+ 004f1eac ["CALLIND", null, ["register:0:8"]]
- 004f1e78 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:358:8"]]
- 004f1e78 ["LOAD", "register:5120:8", ["const:1b1:8", "tmp:0:8"]]
- 004f1e78 ["COPY", "register:5128:8", ["const:0:8"]]
- 004f1e78 ["COPY", "register:5130:8", ["const:0:8"]]
+ 004f1eb8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:398:8"]]
+ 004f1eb8 ["LOAD", "register:5120:8", ["const:1b1:8", "tmp:0:8"]]
+ 004f1eb8 ["COPY", "register:5128:8", ["const:0:8"]]
+ 004f1eb8 ["COPY", "register:5130:8", ["const:0:8"]]
~~~


<a id="compare-bd59386f6d5c467bcd2687cc17ee060e"></a>

### [`004f1ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f1/004f1ec8.md) → [`004f1f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f1/004f1f08.md) _ZTv0_n40_NK5Botan13RSA_PublicKey18estimated_strengthEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58440.md) [`00c596b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c596b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58510.md) [`00c59780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59780.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 90.32% / 新版 90.32%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "004f1f74",
      "incomplete_value": true,
      "site": "004f1f80",
      "value": [
        "TRUNC",
        "8",
        [
          [
            "FLOAT_ADD",
            "8",
            [
              "LOAD",
              "FLOAT_MULT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f1f34",
      "incomplete_value": true,
      "site": "004f1f40",
      "value": [
        "TRUNC",
        "8",
        [
          [
            "FLOAT_ADD",
            "8",
            [
              "LOAD",
              "FLOAT_MULT"
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
      "004f1f34",
      "READ",
      [
        "storage",
        "002c4358",
        null,
        "undefined8"
      ]
    ],
    [
      "004f1f60",
      "READ",
      [
        "storage",
        "002c3ee0",
        null,
        "undefined8"
      ]
    ],
    [
      "004f1f6c",
      "READ",
      [
        "storage",
        "002c4388",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "004f1f34",
      "READ",
      [
        "storage",
        "002c4398",
        null,
        "undefined8"
      ]
    ],
    [
      "004f1f60",
      "READ",
      [
        "storage",
        "002c3f20",
        null,
        "undefined8"
      ]
    ],
    [
      "004f1f6c",
      "READ",
      [
        "storage",
        "002c43c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f1f00 ["INT_ADD", "register:40f0:8", ["const:4f1f00:8", "const:4:8"]]
- 004f1f00 ["CALL", null, ["callee:00c59780:8"]]
+ 004f1f40 ["INT_ADD", "register:40f0:8", ["const:4f1f40:8", "const:4:8"]]
+ 004f1f40 ["CALL", null, ["callee:00c59780:8"]]
- 004f1ee8 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f1ee8 ["INT_ADD", "register:40f0:8", ["const:4f1ee8:8", "const:4:8"]]
- 004f1ee8 ["CALLIND", null, ["register:0:8"]]
+ 004f1f28 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f1f28 ["INT_ADD", "register:40f0:8", ["const:4f1f28:8", "const:4:8"]]
+ 004f1f28 ["CALLIND", null, ["register:0:8"]]
- 004f1ef4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:358:8"]]
- 004f1ef4 ["LOAD", "register:5120:8", ["const:1b1:8", "tmp:0:8"]]
- 004f1ef4 ["COPY", "register:5128:8", ["const:0:8"]]
- 004f1ef4 ["COPY", "register:5130:8", ["const:0:8"]]
+ 004f1f34 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:398:8"]]
+ 004f1f34 ["LOAD", "register:5120:8", ["const:1b1:8", "tmp:0:8"]]
+ 004f1f34 ["COPY", "register:5128:8", ["const:0:8"]]
+ 004f1f34 ["COPY", "register:5130:8", ["const:0:8"]]
~~~


<a id="compare-5d56ccb4fbce4f991a0376f1fdbc6b5d"></a>

### [`004f2200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f2/004f2200.md) → [`004f2240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f2/004f2240.md) _ZN5Botan13RSA_PublicKeyC2ERKNS_19AlgorithmIdentifierERKNSt6__ndk16vectorIhNS4_9allocatorIhEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`00c58700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58700.md) [`00c58710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58710.md) [`00c58880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58880.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c587d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c587d0.md) [`00c587e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c587e0.md) [`00c58950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58950.md)

変更の種類 call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.40% / 新版 95.40%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f2324",
      "incomplete_value": true,
      "site": "004f2324",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f22e4",
      "incomplete_value": true,
      "site": "004f22e4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f2368",
      "incomplete_value": true,
      "site": "004f2368",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f2328",
      "incomplete_value": true,
      "site": "004f2328",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
              ]
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
      "004f2314",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f2358",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f2314",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f2358",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f22a4 ["INT_ADD", "register:40f0:8", ["const:4f22a4:8", "const:4:8"]]
- 004f22a4 ["CALL", null, ["callee:00c587e0:8"]]
+ 004f22e4 ["INT_ADD", "register:40f0:8", ["const:4f22e4:8", "const:4:8"]]
+ 004f22e4 ["CALL", null, ["callee:00c587e0:8"]]
- 004f22e4 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f22e4 ["INT_ADD", "register:40f0:8", ["const:4f22e4:8", "const:4:8"]]
- 004f22e4 ["CALLIND", null, ["register:0:8"]]
+ 004f2324 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f2324 ["INT_ADD", "register:40f0:8", ["const:4f2324:8", "const:4:8"]]
+ 004f2324 ["CALLIND", null, ["register:0:8"]]
- 004f2328 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f2328 ["INT_ADD", "register:40f0:8", ["const:4f2328:8", "const:4:8"]]
- 004f2328 ["CALLIND", null, ["register:0:8"]]
+ 004f2368 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f2368 ["INT_ADD", "register:40f0:8", ["const:4f2368:8", "const:4:8"]]
+ 004f2368 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-82b4e464c1e4543d5035646a1c8c3540"></a>

### [`004f250c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f2/004f250c.md) → [`004f254c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f2/004f254c.md) _ZNK5Botan14RSA_PrivateKey16private_key_bitsEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 10件 [`00535b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535b80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`00c586b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c586b0.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00535bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bc0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c58780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58780.md)

変更の種類 call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.69% / 新版 96.69%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f25d8",
      "incomplete_value": true,
      "site": "004f25d8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f2598",
      "incomplete_value": true,
      "site": "004f2598",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f26f8",
      "incomplete_value": true,
      "site": "004f26f8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f26b8",
      "incomplete_value": true,
      "site": "004f26b8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "004f25c8",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f26e8",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f25c8",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f26e8",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f2598 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f2598 ["INT_ADD", "register:40f0:8", ["const:4f2598:8", "const:4:8"]]
- 004f2598 ["CALLIND", null, ["register:0:8"]]
+ 004f25d8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f25d8 ["INT_ADD", "register:40f0:8", ["const:4f25d8:8", "const:4:8"]]
+ 004f25d8 ["CALLIND", null, ["register:0:8"]]
- 004f26b8 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f26b8 ["INT_ADD", "register:40f0:8", ["const:4f26b8:8", "const:4:8"]]
- 004f26b8 ["CALLIND", null, ["register:0:8"]]
+ 004f26f8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f26f8 ["INT_ADD", "register:40f0:8", ["const:4f26f8:8", "const:4:8"]]
+ 004f26f8 ["CALLIND", null, ["register:0:8"]]
- 004f2550 ["INT_ADD", "register:40f0:8", ["const:4f2550:8", "const:4:8"]]
- 004f2550 ["CALL", null, ["callee:00c58780:8"]]
+ 004f2590 ["INT_ADD", "register:40f0:8", ["const:4f2590:8", "const:4:8"]]
+ 004f2590 ["CALL", null, ["callee:00c58780:8"]]
~~~


<a id="compare-cacb26f9223fa41df591cace796fa995"></a>

### [`004f272c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f2/004f272c.md) → [`004f276c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f2/004f276c.md) _ZN5Botan14RSA_PrivateKeyC2ERKNS_19AlgorithmIdentifierERKNSt6__ndk16vectorIhNS_16secure_allocatorIhEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.33% / 新版 94.33%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `store_value` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f28a8",
      "incomplete_value": true,
      "site": "004f28bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f2868",
      "incomplete_value": true,
      "site": "004f287c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 56,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f28a4",
      "incomplete_value": true,
      "site": "004f28c0",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:e07:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f2864",
      "incomplete_value": true,
      "site": "004f2880",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:dd6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 57,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f28a4",
      "incomplete_value": true,
      "site": "004f28c0",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "004f2864",
      "incomplete_value": true,
      "site": "004f2880",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 58,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "004f28a4",
      "READ",
      [
        "storage",
        "002b4dd6",
        null,
        "string"
      ]
    ],
    [
      "004f28a4",
      "READ",
      [
        "storage",
        "002b4de6",
        null,
        "string"
      ]
    ],
    [
      "004f28a8",
      "READ",
      [
        "storage",
        "002c32a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004f28a4",
      "READ",
      [
        "storage",
        "002b4e07",
        null,
        "string"
      ]
    ],
    [
      "004f28a4",
      "READ",
      [
        "storage",
        "002b4e17",
        null,
        "string"
      ]
    ],
    [
      "004f28a8",
      "READ",
      [
        "storage",
        "002c32e0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004f28c0 ["INT_ADD", "register:40f0:8", ["const:4f28c0:8", "const:4:8"]]
- 004f28c0 ["CALL", null, ["callee:00c58990:8"]]
+ 004f2900 ["INT_ADD", "register:40f0:8", ["const:4f2900:8", "const:4:8"]]
+ 004f2900 ["CALL", null, ["callee:00c58990:8"]]
- 004f292c ["INT_ADD", "register:40f0:8", ["const:4f292c:8", "const:4:8"]]
- 004f292c ["CALL", null, ["callee:00c57f80:8"]]
+ 004f296c ["INT_ADD", "register:40f0:8", ["const:4f296c:8", "const:4:8"]]
+ 004f296c ["CALL", null, ["callee:00c57f80:8"]]
- 004f296c ["COPY", "register:0:8", ["register:4048:8"]]
- 004f296c ["INT_ADD", "register:40f0:8", ["const:4f296c:8", "const:4:8"]]
- 004f296c ["CALLIND", null, ["register:0:8"]]
+ 004f29ac ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f29ac ["INT_ADD", "register:40f0:8", ["const:4f29ac:8", "const:4:8"]]
+ 004f29ac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e729b38b945c1b97b21fe347c557a305"></a>

### [`004f2ae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f2/004f2ae0.md) → [`004f2b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f2/004f2b20.md) FUN_004f2b20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`0112a058`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a058.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`0112a058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a058.md)

変更の種類 call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f2b6c",
      "incomplete_value": true,
      "site": "004f2b6c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f2b2c",
      "incomplete_value": true,
      "site": "004f2b2c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
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
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f2b98",
      "incomplete_value": true,
      "site": "004f2b98",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f2b58",
      "incomplete_value": true,
      "site": "004f2b58",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "004f2b5c",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f2b88",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f2b5c",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f2b88",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f2b2c ["COPY", "register:0:8", ["register:4048:8"]]
- 004f2b2c ["INT_ADD", "register:40f0:8", ["const:4f2b2c:8", "const:4:8"]]
- 004f2b2c ["CALLIND", null, ["register:0:8"]]
+ 004f2b6c ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f2b6c ["INT_ADD", "register:40f0:8", ["const:4f2b6c:8", "const:4:8"]]
+ 004f2b6c ["CALLIND", null, ["register:0:8"]]
- 004f2b58 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f2b58 ["INT_ADD", "register:40f0:8", ["const:4f2b58:8", "const:4:8"]]
- 004f2b58 ["CALLIND", null, ["register:0:8"]]
+ 004f2b98 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f2b98 ["INT_ADD", "register:40f0:8", ["const:4f2b98:8", "const:4:8"]]
+ 004f2b98 ["CALLIND", null, ["register:0:8"]]
- 004f2b1c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:738:8"]]
- 004f2b1c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 004f2b5c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:808:8"]]
+ 004f2b5c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f27ea07c73c4ff43f81d42c289ca5250"></a>

### [`004f2b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f2/004f2b88.md) → [`004f2bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f2/004f2bc8.md) _ZN5Botan14RSA_PrivateKeyC2ERKNS_6BigIntES3_S3_S3_S3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 12件 [`005436dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00543/005436dc.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`00c58920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58920.md) [`00c58b20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58b20.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0054371c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/0054371c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c589f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c589f0.md) [`00c58bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58bf0.md)

変更の種類 call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.14% / 新版 93.14%

優先判定に残った影響 `call_target` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f2d80",
      "incomplete_value": true,
      "site": "004f2d80",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40e0:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f2d40",
      "incomplete_value": true,
      "site": "004f2d40",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40e0:8"
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
    "ordinal": 7,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f2df0",
      "incomplete_value": true,
      "site": "004f2df0",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40e0:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f2db0",
      "incomplete_value": true,
      "site": "004f2db0",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40e0:8"
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
    "ordinal": 12,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f2e68",
      "incomplete_value": true,
      "site": "004f2e68",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40e0:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f2e28",
      "incomplete_value": true,
      "site": "004f2e28",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40e0:8"
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
      "004f2d70",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f2de0",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f2e58",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f2d70",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f2de0",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f2e58",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f2d40 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f2d40 ["INT_ADD", "register:40f0:8", ["const:4f2d40:8", "const:4:8"]]
- 004f2d40 ["CALLIND", null, ["register:0:8"]]
+ 004f2d80 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f2d80 ["INT_ADD", "register:40f0:8", ["const:4f2d80:8", "const:4:8"]]
+ 004f2d80 ["CALLIND", null, ["register:0:8"]]
- 004f2db0 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f2db0 ["INT_ADD", "register:40f0:8", ["const:4f2db0:8", "const:4:8"]]
- 004f2db0 ["CALLIND", null, ["register:0:8"]]
+ 004f2df0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f2df0 ["INT_ADD", "register:40f0:8", ["const:4f2df0:8", "const:4:8"]]
+ 004f2df0 ["CALLIND", null, ["register:0:8"]]
- 004f2e28 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f2e28 ["INT_ADD", "register:40f0:8", ["const:4f2e28:8", "const:4:8"]]
- 004f2e28 ["CALLIND", null, ["register:0:8"]]
+ 004f2e68 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f2e68 ["INT_ADD", "register:40f0:8", ["const:4f2e68:8", "const:4:8"]]
+ 004f2e68 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-06d342569ab73285da653dbb97e231ad"></a>

### [`004f3398`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f3/004f3398.md) → [`004f33d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f3/004f33d8.md) _ZN5Botan14RSA_PrivateKeyC1ERKNS_6BigIntES3_S3_S3_S3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 12件 [`005436dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00543/005436dc.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`00c58920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58920.md) [`00c58b20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58b20.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0054371c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/0054371c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c589f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c589f0.md) [`00c58bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58bf0.md)

変更の種類 call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.73% / 新版 91.73%

優先判定に残った影響 `call_target` 14件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f3444",
      "incomplete_value": true,
      "site": "004f3444",
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
            "const:1a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f3404",
      "incomplete_value": true,
      "site": "004f3404",
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
            "const:1a0:8"
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
      "definition_site": "004f343c",
      "incomplete_value": true,
      "site": "004f3458",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f33fc",
      "incomplete_value": true,
      "site": "004f3418",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f355c",
      "incomplete_value": true,
      "site": "004f355c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40d8:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f351c",
      "incomplete_value": true,
      "site": "004f351c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40d8:8"
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
      "004f3408",
      "READ",
      [
        "storage",
        "00c9afe0",
        null,
        "pointer"
      ]
    ],
    [
      "004f3444",
      "DATA",
      [
        "storage",
        "00c672b8",
        null,
        "undefined1[528]"
      ]
    ],
    [
      "004f3458",
      "DATA",
      [
        "storage",
        "00c67198",
        null,
        "undefined1[528]"
      ]
    ]
  ],
  "added": [
    [
      "004f3408",
      "READ",
      [
        "storage",
        "00c9b0b0",
        null,
        "pointer"
      ]
    ],
    [
      "004f3444",
      "DATA",
      [
        "storage",
        "00c67388",
        null,
        "undefined1[528]"
      ]
    ],
    [
      "004f3458",
      "DATA",
      [
        "storage",
        "00c67268",
        null,
        "undefined1[528]"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f351c ["COPY", "register:0:8", ["register:4048:8"]]
- 004f351c ["INT_ADD", "register:40f0:8", ["const:4f351c:8", "const:4:8"]]
- 004f351c ["CALLIND", null, ["register:0:8"]]
+ 004f355c ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f355c ["INT_ADD", "register:40f0:8", ["const:4f355c:8", "const:4:8"]]
+ 004f355c ["CALLIND", null, ["register:0:8"]]
- 004f358c ["COPY", "register:0:8", ["register:4048:8"]]
- 004f358c ["INT_ADD", "register:40f0:8", ["const:4f358c:8", "const:4:8"]]
- 004f358c ["CALLIND", null, ["register:0:8"]]
+ 004f35cc ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f35cc ["INT_ADD", "register:40f0:8", ["const:4f35cc:8", "const:4:8"]]
+ 004f35cc ["CALLIND", null, ["register:0:8"]]
- 004f3604 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f3604 ["INT_ADD", "register:40f0:8", ["const:4f3604:8", "const:4:8"]]
- 004f3604 ["CALLIND", null, ["register:0:8"]]
+ 004f3644 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f3644 ["INT_ADD", "register:40f0:8", ["const:4f3644:8", "const:4:8"]]
+ 004f3644 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a34f59a119826880dbe8d44daaea2f95"></a>

### [`004f3b74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f3/004f3b74.md) → [`004f3bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f3/004f3bb4.md) _ZN5Botan14RSA_PrivateKeyC2ERNS_21RandomNumberGeneratorEmm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 17件 [`004a684c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004a6/004a684c.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 0件  · 呼出先 17件 [`004a688c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004a6/004a688c.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.22% / 新版 99.22%

優先判定に残った影響 `call_argument_candidate` 5件

アドレスに依存する影響 `call_argument_candidate` 2件, `call_target` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f3d54",
      "incomplete_value": true,
      "site": "004f3d54",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f3d14",
      "incomplete_value": true,
      "site": "004f3d14",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f3df8",
      "incomplete_value": true,
      "site": "004f3df8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f3db8",
      "incomplete_value": true,
      "site": "004f3db8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
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
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f3ef4",
      "incomplete_value": true,
      "site": "004f3ef4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f3eb4",
      "incomplete_value": true,
      "site": "004f3eb4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
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
      "004f3d44",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f3de8",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f3ee4",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f3d44",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f3de8",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f3ee4",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f3d14 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f3d14 ["INT_ADD", "register:40f0:8", ["const:4f3d14:8", "const:4:8"]]
- 004f3d14 ["CALLIND", null, ["register:0:8"]]
+ 004f3d54 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f3d54 ["INT_ADD", "register:40f0:8", ["const:4f3d54:8", "const:4:8"]]
+ 004f3d54 ["CALLIND", null, ["register:0:8"]]
- 004f3d54 ["INT_ADD", "register:40f0:8", ["const:4f3d54:8", "const:4:8"]]
- 004f3d54 ["CALL", null, ["callee:00c59410:8"]]
+ 004f3d94 ["INT_ADD", "register:40f0:8", ["const:4f3d94:8", "const:4:8"]]
+ 004f3d94 ["CALL", null, ["callee:00c59410:8"]]
- 004f3db8 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f3db8 ["INT_ADD", "register:40f0:8", ["const:4f3db8:8", "const:4:8"]]
- 004f3db8 ["CALLIND", null, ["register:0:8"]]
+ 004f3df8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f3df8 ["INT_ADD", "register:40f0:8", ["const:4f3df8:8", "const:4:8"]]
+ 004f3df8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-97bd708c4a3be924fb52e426c1b9f6aa"></a>

### [`004f47dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f4/004f47dc.md) → [`004f481c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f4/004f481c.md) _ZNK5Botan14RSA_PrivateKey9check_keyERNS_21RandomNumberGeneratorEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c59750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59750.md) · 呼出先 13件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`00c58920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58920.md) [`00c58b20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58b20.md)
- 新版 呼出元 1件 [`00c59820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59820.md) · 呼出先 13件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c589f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c589f0.md) [`00c58bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58bf0.md)

変更の種類 call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.60% / 新版 95.60%

優先判定に残った影響 `call_target` 5件, `store_value` 2件

アドレスに依存する影響 `call_target` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f4ef0",
      "incomplete_value": true,
      "site": "004f4ef0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b81:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f4eb0",
      "incomplete_value": true,
      "site": "004f4eb0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bdd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f4ef4",
      "incomplete_value": true,
      "site": "004f4ef4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "004f4eb4",
      "incomplete_value": true,
      "site": "004f4eb4",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f4954",
      "incomplete_value": true,
      "site": "004f4954",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40c0:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f4914",
      "incomplete_value": true,
      "site": "004f4914",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40c0:8"
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
    "ordinal": 12,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "004f4944",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f4970",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f499c",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f4944",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f4970",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f499c",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f4914 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f4914 ["INT_ADD", "register:40f0:8", ["const:4f4914:8", "const:4:8"]]
- 004f4914 ["CALLIND", null, ["register:0:8"]]
+ 004f4954 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f4954 ["INT_ADD", "register:40f0:8", ["const:4f4954:8", "const:4:8"]]
+ 004f4954 ["CALLIND", null, ["register:0:8"]]
- 004f4940 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f4940 ["INT_ADD", "register:40f0:8", ["const:4f4940:8", "const:4:8"]]
- 004f4940 ["CALLIND", null, ["register:0:8"]]
+ 004f4980 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f4980 ["INT_ADD", "register:40f0:8", ["const:4f4980:8", "const:4:8"]]
+ 004f4980 ["CALLIND", null, ["register:0:8"]]
- 004f496c ["COPY", "register:0:8", ["register:4048:8"]]
- 004f496c ["INT_ADD", "register:40f0:8", ["const:4f496c:8", "const:4:8"]]
- 004f496c ["CALLIND", null, ["register:0:8"]]
+ 004f49ac ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f49ac ["INT_ADD", "register:40f0:8", ["const:4f49ac:8", "const:4:8"]]
+ 004f49ac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e1cdc644d1abe7a6ce5bdc6a78354daa"></a>

### [`004f50a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f5/004f50a8.md) → [`004f50e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f5/004f50e8.md) _ZNK5Botan13RSA_PublicKey20create_encryption_opERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorI

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59760.md) · 呼出先 6件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c58fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fa0.md)
- 新版 呼出元 1件 [`00c59830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59830.md) · 呼出先 6件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c59070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59070.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.01% / 新版 97.01%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f517c",
      "incomplete_value": true,
      "site": "004f5184",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:fa0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f513c",
      "incomplete_value": true,
      "site": "004f5144",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ed0:8"
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
      "definition_site": "004f5178",
      "incomplete_value": false,
      "site": "004f5184",
      "value": [
        "leaf",
        "const:5358a8:8"
      ]
    },
    "old": {
      "definition_site": "004f5138",
      "incomplete_value": false,
      "site": "004f5144",
      "value": [
        "leaf",
        "const:535868:8"
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f51e0",
      "incomplete_value": true,
      "site": "004f51ec",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f51a0",
      "incomplete_value": true,
      "site": "004f51ac",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
      "004f5178",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ],
    [
      "004f517c",
      "READ",
      [
        "storage",
        "00c9aed0",
        null,
        "pointer"
      ]
    ],
    [
      "004f517c",
      "PARAM",
      [
        "storage",
        "00c66a18",
        "Botan::Algorithm_Not_Found::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "004f5178",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ],
    [
      "004f517c",
      "READ",
      [
        "storage",
        "00c9afa0",
        null,
        "pointer"
      ]
    ],
    [
      "004f517c",
      "PARAM",
      [
        "storage",
        "00c66ae8",
        "Botan::Algorithm_Not_Found::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f5144 ["INT_ADD", "register:40f0:8", ["const:4f5144:8", "const:4:8"]]
- 004f5144 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f5184 ["INT_ADD", "register:40f0:8", ["const:4f5184:8", "const:4:8"]]
+ 004f5184 ["CALL", null, ["callee:00c57fe0:8"]]
- 004f516c ["COPY", "register:0:8", ["register:4048:8"]]
- 004f516c ["INT_ADD", "register:40f0:8", ["const:4f516c:8", "const:4:8"]]
- 004f516c ["CALLIND", null, ["register:0:8"]]
+ 004f51ac ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f51ac ["INT_ADD", "register:40f0:8", ["const:4f51ac:8", "const:4:8"]]
+ 004f51ac ["CALLIND", null, ["register:0:8"]]
- 004f51ac ["INT_ADD", "register:40f0:8", ["const:4f51ac:8", "const:4:8"]]
- 004f51ac ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f51ec ["INT_ADD", "register:40f0:8", ["const:4f51ec:8", "const:4:8"]]
+ 004f51ec ["CALL", null, ["callee:00c57fe0:8"]]
~~~


<a id="compare-de76ed4bc0effdfa61b401343c6b6d0a"></a>

### [`004f5220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f5/004f5220.md) → [`004f5260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f5/004f5260.md) _ZNK5Botan13RSA_PublicKey24create_kem_encryption_opERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9alloca

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59780.md) · 呼出先 8件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 1件 [`00c59850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59850.md) · 呼出先 8件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.98% / 新版 93.98%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004f52e4",
      "incomplete_value": false,
      "site": "004f52e4",
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
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f52a4",
      "incomplete_value": false,
      "site": "004f52a4",
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
            "const:f18:8"
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
      "definition_site": "004f530c",
      "incomplete_value": false,
      "site": "004f5314",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c69000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f52cc",
      "incomplete_value": false,
      "site": "004f52d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c69000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f5398",
      "incomplete_value": true,
      "site": "004f53a4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f5358",
      "incomplete_value": true,
      "site": "004f5364",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
      "004f52e4",
      "DATA",
      [
        "storage",
        "00c66f18",
        null,
        "undefined *"
      ]
    ],
    [
      "004f5314",
      "DATA",
      [
        "storage",
        "00c69ee8",
        null,
        "undefined *"
      ]
    ],
    [
      "004f5394",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004f52e4",
      "DATA",
      [
        "storage",
        "00c66fe8",
        null,
        "undefined *"
      ]
    ],
    [
      "004f5314",
      "DATA",
      [
        "storage",
        "00c69fb8",
        null,
        "undefined *"
      ]
    ],
    [
      "004f5394",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004f5294 ["INT_ADD", "register:40f0:8", ["const:4f5294:8", "const:4:8"]]
- 004f5294 ["CALL", null, ["callee:00c57f60:8"]]
+ 004f52d4 ["INT_ADD", "register:40f0:8", ["const:4f52d4:8", "const:4:8"]]
+ 004f52d4 ["CALL", null, ["callee:00c57f60:8"]]
- 004f5324 ["COPY", "register:0:8", ["register:4050:8"]]
- 004f5324 ["INT_ADD", "register:40f0:8", ["const:4f5324:8", "const:4:8"]]
- 004f5324 ["CALLIND", null, ["register:0:8"]]
+ 004f5364 ["COPY", "register:0:8", ["register:4050:8"]]
+ 004f5364 ["INT_ADD", "register:40f0:8", ["const:4f5364:8", "const:4:8"]]
+ 004f5364 ["CALLIND", null, ["register:0:8"]]
- 004f5364 ["INT_ADD", "register:40f0:8", ["const:4f5364:8", "const:4:8"]]
- 004f5364 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f53a4 ["INT_ADD", "register:40f0:8", ["const:4f53a4:8", "const:4:8"]]
+ 004f53a4 ["CALL", null, ["callee:00c57fe0:8"]]
~~~


<a id="compare-ac89682d8da05c7fb56152ec20cdbe3a"></a>

### [`004f5400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f5/004f5400.md) → [`004f5440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f5/004f5440.md) _ZNK5Botan13RSA_PublicKey22create_verification_opERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59790.md) · 呼出先 8件 [`004eb468`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004eb/004eb468.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md)
- 新版 呼出元 1件 [`00c59860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59860.md) · 呼出先 8件 [`004eb4a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004eb/004eb4a8.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.25% / 新版 96.25%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004f54e0",
      "incomplete_value": false,
      "site": "004f54e8",
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
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f54a0",
      "incomplete_value": false,
      "site": "004f54a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c69000:8"
          ],
          [
            "leaf",
            "const:f50:8"
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
      "definition_site": "004f556c",
      "incomplete_value": true,
      "site": "004f5578",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f552c",
      "incomplete_value": true,
      "site": "004f5538",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f5568",
      "incomplete_value": false,
      "site": "004f5578",
      "value": [
        "leaf",
        "const:5358a8:8"
      ]
    },
    "old": {
      "definition_site": "004f5528",
      "incomplete_value": false,
      "site": "004f5538",
      "value": [
        "leaf",
        "const:535868:8"
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
      "004f54e8",
      "DATA",
      [
        "storage",
        "00c69f50",
        null,
        "undefined *"
      ]
    ],
    [
      "004f5568",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ],
    [
      "004f556c",
      "READ",
      [
        "storage",
        "00c9b020",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f54e8",
      "DATA",
      [
        "storage",
        "00c6a020",
        null,
        "undefined *"
      ]
    ],
    [
      "004f5568",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ],
    [
      "004f556c",
      "READ",
      [
        "storage",
        "00c9b0f0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f54f8 ["COPY", "register:0:8", ["register:4050:8"]]
- 004f54f8 ["INT_ADD", "register:40f0:8", ["const:4f54f8:8", "const:4:8"]]
- 004f54f8 ["CALLIND", null, ["register:0:8"]]
+ 004f5538 ["COPY", "register:0:8", ["register:4050:8"]]
+ 004f5538 ["INT_ADD", "register:40f0:8", ["const:4f5538:8", "const:4:8"]]
+ 004f5538 ["CALLIND", null, ["register:0:8"]]
- 004f5538 ["INT_ADD", "register:40f0:8", ["const:4f5538:8", "const:4:8"]]
- 004f5538 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f5578 ["INT_ADD", "register:40f0:8", ["const:4f5578:8", "const:4:8"]]
+ 004f5578 ["CALL", null, ["callee:00c57fe0:8"]]
- 004f5474 ["INT_ADD", "register:40f0:8", ["const:4f5474:8", "const:4:8"]]
- 004f5474 ["CALL", null, ["callee:00c57f60:8"]]
+ 004f54b4 ["INT_ADD", "register:40f0:8", ["const:4f54b4:8", "const:4:8"]]
+ 004f54b4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-815572d96c6c6ffc2229d9899ce1658f"></a>

### [`004f55b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f5/004f55b8.md) → [`004f55f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f5/004f55f8.md) _ZNK5Botan14RSA_PrivateKey20create_decryption_opERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocator

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c58fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fa0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c59070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59070.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.92% / 新版 96.92%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f5690",
      "incomplete_value": true,
      "site": "004f5698",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:fa0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f5650",
      "incomplete_value": true,
      "site": "004f5658",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ed0:8"
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
      "definition_site": "004f568c",
      "incomplete_value": false,
      "site": "004f5698",
      "value": [
        "leaf",
        "const:5358a8:8"
      ]
    },
    "old": {
      "definition_site": "004f564c",
      "incomplete_value": false,
      "site": "004f5658",
      "value": [
        "leaf",
        "const:535868:8"
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f56e8",
      "incomplete_value": true,
      "site": "004f56f4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f56a8",
      "incomplete_value": true,
      "site": "004f56b4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
      "004f568c",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ],
    [
      "004f5690",
      "READ",
      [
        "storage",
        "00c9aed0",
        null,
        "pointer"
      ]
    ],
    [
      "004f5690",
      "PARAM",
      [
        "storage",
        "00c66a18",
        "Botan::Algorithm_Not_Found::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "004f568c",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ],
    [
      "004f5690",
      "READ",
      [
        "storage",
        "00c9afa0",
        null,
        "pointer"
      ]
    ],
    [
      "004f5690",
      "PARAM",
      [
        "storage",
        "00c66ae8",
        "Botan::Algorithm_Not_Found::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f5658 ["INT_ADD", "register:40f0:8", ["const:4f5658:8", "const:4:8"]]
- 004f5658 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f5698 ["INT_ADD", "register:40f0:8", ["const:4f5698:8", "const:4:8"]]
+ 004f5698 ["CALL", null, ["callee:00c57fe0:8"]]
- 004f56b4 ["INT_ADD", "register:40f0:8", ["const:4f56b4:8", "const:4:8"]]
- 004f56b4 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f56f4 ["INT_ADD", "register:40f0:8", ["const:4f56f4:8", "const:4:8"]]
+ 004f56f4 ["CALL", null, ["callee:00c57fe0:8"]]
- 004f5624 ["INT_ADD", "register:40f0:8", ["const:4f5624:8", "const:4:8"]]
- 004f5624 ["CALL", null, ["callee:00c57fc0:8"]]
+ 004f5664 ["INT_ADD", "register:40f0:8", ["const:4f5664:8", "const:4:8"]]
+ 004f5664 ["CALL", null, ["callee:00c57fc0:8"]]
~~~


<a id="compare-62cd9c90ff6ed82c1aec1b835a3c496e"></a>

### [`004f5708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f5/004f5708.md) → [`004f5748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f5/004f5748.md) _ZNK5Botan14RSA_PrivateKey24create_kem_decryption_opERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9alloc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 8件 [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00537714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00537/00537714.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00537754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00537/00537754.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.98% / 新版 93.98%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004f57d4",
      "incomplete_value": false,
      "site": "004f57d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c67000:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f5794",
      "incomplete_value": false,
      "site": "004f5794",
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
            "const:f48:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004f57f8",
      "incomplete_value": false,
      "site": "004f5800",
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
            "const:280:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f57b8",
      "incomplete_value": false,
      "site": "004f57c0",
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
            "const:1b0:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f5880",
      "incomplete_value": true,
      "site": "004f588c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f5840",
      "incomplete_value": true,
      "site": "004f584c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
      "004f57d4",
      "DATA",
      [
        "storage",
        "00c66f48",
        null,
        "undefined *"
      ]
    ],
    [
      "004f5800",
      "DATA",
      [
        "storage",
        "00c6a1b0",
        null,
        "undefined *"
      ]
    ],
    [
      "004f5854",
      "DATA",
      [
        "storage",
        "00415352",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "004f57d4",
      "DATA",
      [
        "storage",
        "00c67018",
        null,
        "undefined *"
      ]
    ],
    [
      "004f5800",
      "DATA",
      [
        "storage",
        "00c6a280",
        null,
        "undefined *"
      ]
    ],
    [
      "004f5854",
      "DATA",
      [
        "storage",
        "00415352",
        null,
        "byte[55]"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f584c ["INT_ADD", "register:40f0:8", ["const:4f584c:8", "const:4:8"]]
- 004f584c ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f588c ["INT_ADD", "register:40f0:8", ["const:4f588c:8", "const:4:8"]]
+ 004f588c ["CALL", null, ["callee:00c57fe0:8"]]
- 004f5784 ["INT_ADD", "register:40f0:8", ["const:4f5784:8", "const:4:8"]]
- 004f5784 ["CALL", null, ["callee:00c57f60:8"]]
+ 004f57c4 ["INT_ADD", "register:40f0:8", ["const:4f57c4:8", "const:4:8"]]
+ 004f57c4 ["CALL", null, ["callee:00c57f60:8"]]
- 004f578c ["COPY", "register:40c8:8", ["const:c66000:8"]]
+ 004f57cc ["COPY", "register:40c8:8", ["const:c67000:8"]]
~~~


<a id="compare-6617a1bf7ed46ba56cecbee50190e46e"></a>

### [`004f58d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f5/004f58d0.md) → [`004f5910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f5/004f5910.md) _ZNK5Botan14RSA_PrivateKey19create_signature_opERNS_21RandomNumberGeneratorERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorI

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 8件 [`004eb124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004eb/004eb124.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00537714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00537/00537714.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`004eb164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004eb/004eb164.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00537754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00537/00537754.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004f59ac",
      "incomplete_value": false,
      "site": "004f59b4",
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
            "const:2e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f596c",
      "incomplete_value": false,
      "site": "004f5974",
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
            "const:218:8"
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
      "definition_site": "004f5a30",
      "incomplete_value": true,
      "site": "004f5a3c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f59f0",
      "incomplete_value": true,
      "site": "004f59fc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f5a2c",
      "incomplete_value": false,
      "site": "004f5a3c",
      "value": [
        "leaf",
        "const:5358a8:8"
      ]
    },
    "old": {
      "definition_site": "004f59ec",
      "incomplete_value": false,
      "site": "004f59fc",
      "value": [
        "leaf",
        "const:535868:8"
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
      "004f59b4",
      "DATA",
      [
        "storage",
        "00c6a218",
        null,
        "undefined *"
      ]
    ],
    [
      "004f5a04",
      "DATA",
      [
        "storage",
        "00415352",
        null,
        "dword"
      ]
    ],
    [
      "004f5a2c",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004f59b4",
      "DATA",
      [
        "storage",
        "00c6a2e8",
        null,
        "undefined *"
      ]
    ],
    [
      "004f5a04",
      "DATA",
      [
        "storage",
        "00415352",
        null,
        "byte[55]"
      ]
    ],
    [
      "004f5a2c",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004f59fc ["INT_ADD", "register:40f0:8", ["const:4f59fc:8", "const:4:8"]]
- 004f59fc ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f5a3c ["INT_ADD", "register:40f0:8", ["const:4f5a3c:8", "const:4:8"]]
+ 004f5a3c ["CALL", null, ["callee:00c57fe0:8"]]
- 004f5948 ["INT_ADD", "register:40f0:8", ["const:4f5948:8", "const:4:8"]]
- 004f5948 ["CALL", null, ["callee:00c57f60:8"]]
+ 004f5988 ["INT_ADD", "register:40f0:8", ["const:4f5988:8", "const:4:8"]]
+ 004f5988 ["CALL", null, ["callee:00c57f60:8"]]
- 004f5954 ["INT_ADD", "register:40f0:8", ["const:4f5954:8", "const:4:8"]]
- 004f5954 ["CALL", null, ["callee:004eb164:8"]]
+ 004f5994 ["INT_ADD", "register:40f0:8", ["const:4f5994:8", "const:4:8"]]
+ 004f5994 ["CALL", null, ["callee:004eb164:8"]]
~~~


<a id="compare-d0674b2562ed0375912addfd723fe536"></a>

### [`004f5a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f5/004f5a64.md) → [`004f5aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f5/004f5aa4.md) _ZNK5Botan7SHA_16010copy_stateEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`005361ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00536/005361ac.md) [`005402a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/005402a4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005361ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00536/005361ec.md) [`005402e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/005402e4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f5ad8",
      "incomplete_value": true,
      "site": "004f5adc",
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
      "definition_site": "004f5a98",
      "incomplete_value": true,
      "site": "004f5a9c",
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
    "kind": "store_value",
    "new": {
      "definition_site": "004f5b04",
      "incomplete_value": true,
      "site": "004f5b0c",
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
      "definition_site": "004f5ac4",
      "incomplete_value": true,
      "site": "004f5acc",
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
      "004f5acc",
      "READ",
      [
        "storage",
        "00c9af38",
        null,
        "pointer"
      ]
    ],
    [
      "004f5adc",
      "DATA",
      [
        "storage",
        "00c66cd8",
        null,
        "pointer"
      ]
    ],
    [
      "004f5af4",
      "READ",
      [
        "storage",
        "00c9af40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f5acc",
      "READ",
      [
        "storage",
        "00c9b008",
        null,
        "pointer"
      ]
    ],
    [
      "004f5adc",
      "DATA",
      [
        "storage",
        "00c66da8",
        null,
        "pointer"
      ]
    ],
    [
      "004f5af4",
      "READ",
      [
        "storage",
        "00c9b010",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f5a8c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:f38:8"]]
- 004f5a8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004f5acc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8:8"]]
+ 004f5acc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 004f5a80 ["INT_ADD", "register:40f0:8", ["const:4f5a80:8", "const:4:8"]]
- 004f5a80 ["CALL", null, ["callee:00c57f60:8"]]
+ 004f5ac0 ["INT_ADD", "register:40f0:8", ["const:4f5ac0:8", "const:4:8"]]
+ 004f5ac0 ["CALL", null, ["callee:00c57f60:8"]]
- 004f5a84 ["COPY", "register:4040:8", ["const:c9a000:8"]]
+ 004f5ac4 ["COPY", "register:4040:8", ["const:c9b000:8"]]
~~~


<a id="compare-4655da1b8392eef81f226ae1400a5158"></a>

### [`004f695c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f6/004f695c.md) → [`004f699c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f6/004f699c.md) _ZN5Botan7SHA_1605clearEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f69e4",
      "incomplete_value": true,
      "site": "004f69f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f69a4",
      "incomplete_value": true,
      "site": "004f69b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:370:8"
              ]
            ]
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
      "004f69e4",
      "READ",
      [
        "storage",
        "002c2370",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004f69e4",
      "READ",
      [
        "storage",
        "002c23b0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004f6980 ["INT_ADD", "register:40f0:8", ["const:4f6980:8", "const:4:8"]]
- 004f6980 ["CALL", null, ["callee:00c58160:8"]]
+ 004f69c0 ["INT_ADD", "register:40f0:8", ["const:4f69c0:8", "const:4:8"]]
+ 004f69c0 ["CALL", null, ["callee:00c58160:8"]]
- 004f6998 ["INT_ADD", "register:40f0:8", ["const:4f6998:8", "const:4:8"]]
- 004f6998 ["CALL", null, ["callee:00c58160:8"]]
+ 004f69d8 ["INT_ADD", "register:40f0:8", ["const:4f69d8:8", "const:4:8"]]
+ 004f69d8 ["CALL", null, ["callee:00c58160:8"]]
- 004f69a4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:370:8"]]
- 004f69a4 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 004f69a4 ["COPY", "register:5010:8", ["const:0:8"]]
- 004f69a4 ["COPY", "register:5018:8", ["const:0:8"]]
+ 004f69e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3b0:8"]]
+ 004f69e4 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 004f69e4 ["COPY", "register:5010:8", ["const:0:8"]]
+ 004f69e4 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-c629eee93bd214697a59e2b546ab691c"></a>

### [`004f69c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f6/004f69c4.md) → [`004f6a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f6/004f6a04.md) _ZNK5Botan7SHA_22410copy_stateEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`005361ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00536/005361ac.md) [`005402a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/005402a4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005361ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00536/005361ec.md) [`005402e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/005402e4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f6a38",
      "incomplete_value": true,
      "site": "004f6a3c",
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
      "definition_site": "004f69f8",
      "incomplete_value": true,
      "site": "004f69fc",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f6a64",
      "incomplete_value": true,
      "site": "004f6a6c",
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
      "definition_site": "004f6a24",
      "incomplete_value": true,
      "site": "004f6a2c",
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
      "004f6a2c",
      "READ",
      [
        "storage",
        "00c9af38",
        null,
        "pointer"
      ]
    ],
    [
      "004f6a3c",
      "DATA",
      [
        "storage",
        "00c66cd8",
        null,
        "pointer"
      ]
    ],
    [
      "004f6a54",
      "READ",
      [
        "storage",
        "00c9af48",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f6a2c",
      "READ",
      [
        "storage",
        "00c9b008",
        null,
        "pointer"
      ]
    ],
    [
      "004f6a3c",
      "DATA",
      [
        "storage",
        "00c66da8",
        null,
        "pointer"
      ]
    ],
    [
      "004f6a54",
      "READ",
      [
        "storage",
        "00c9b018",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f69ec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:f38:8"]]
- 004f69ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004f6a2c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8:8"]]
+ 004f6a2c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 004f6a3c ["INT_ADD", "register:40f0:8", ["const:4f6a3c:8", "const:4:8"]]
- 004f6a3c ["CALL", null, ["callee:005361ec:8"]]
+ 004f6a7c ["INT_ADD", "register:40f0:8", ["const:4f6a7c:8", "const:4:8"]]
+ 004f6a7c ["CALL", null, ["callee:005361ec:8"]]
- 004f69e0 ["INT_ADD", "register:40f0:8", ["const:4f69e0:8", "const:4:8"]]
- 004f69e0 ["CALL", null, ["callee:00c57f60:8"]]
+ 004f6a20 ["INT_ADD", "register:40f0:8", ["const:4f6a20:8", "const:4:8"]]
+ 004f6a20 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-d0c186a12801eb3e017d04308a587d36"></a>

### [`004f6a78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f6/004f6a78.md) → [`004f6ab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f6/004f6ab8.md) _ZNK5Botan7SHA_25610copy_stateEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`005361ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00536/005361ac.md) [`005402a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/005402a4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005361ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00536/005361ec.md) [`005402e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/005402e4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f6aec",
      "incomplete_value": true,
      "site": "004f6af0",
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
      "definition_site": "004f6aac",
      "incomplete_value": true,
      "site": "004f6ab0",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f6b18",
      "incomplete_value": true,
      "site": "004f6b20",
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
      "definition_site": "004f6ad8",
      "incomplete_value": true,
      "site": "004f6ae0",
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
      "004f6ae0",
      "READ",
      [
        "storage",
        "00c9af38",
        null,
        "pointer"
      ]
    ],
    [
      "004f6af0",
      "DATA",
      [
        "storage",
        "00c66cd8",
        null,
        "pointer"
      ]
    ],
    [
      "004f6b08",
      "READ",
      [
        "storage",
        "00c9af50",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f6ae0",
      "READ",
      [
        "storage",
        "00c9b008",
        null,
        "pointer"
      ]
    ],
    [
      "004f6af0",
      "DATA",
      [
        "storage",
        "00c66da8",
        null,
        "pointer"
      ]
    ],
    [
      "004f6b08",
      "READ",
      [
        "storage",
        "00c9b020",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f6aa0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:f38:8"]]
- 004f6aa0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004f6ae0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8:8"]]
+ 004f6ae0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 004f6af0 ["INT_ADD", "register:40f0:8", ["const:4f6af0:8", "const:4:8"]]
- 004f6af0 ["CALL", null, ["callee:005361ec:8"]]
+ 004f6b30 ["INT_ADD", "register:40f0:8", ["const:4f6b30:8", "const:4:8"]]
+ 004f6b30 ["CALL", null, ["callee:005361ec:8"]]
- 004f6a94 ["INT_ADD", "register:40f0:8", ["const:4f6a94:8", "const:4:8"]]
- 004f6a94 ["CALL", null, ["callee:00c57f60:8"]]
+ 004f6ad4 ["INT_ADD", "register:40f0:8", ["const:4f6ad4:8", "const:4:8"]]
+ 004f6ad4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-35d2c562ffc7c2b73a93ee5ac3d227d5"></a>

### [`004f89f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f8/004f89f0.md) → [`004f8a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8a30.md) _ZN5Botan7SHA_2245clearEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f8a64",
      "incomplete_value": true,
      "site": "004f8a70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:250:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f8a24",
      "incomplete_value": true,
      "site": "004f8a30",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:210:8"
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
      "definition_site": "004f8a68",
      "incomplete_value": true,
      "site": "004f8a70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f8a28",
      "incomplete_value": true,
      "site": "004f8a30",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c10:8"
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
      "004f8a64",
      "READ",
      [
        "storage",
        "002c3210",
        null,
        null
      ]
    ],
    [
      "004f8a68",
      "READ",
      [
        "storage",
        "002c2c10",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004f8a64",
      "READ",
      [
        "storage",
        "002c3250",
        null,
        null
      ]
    ],
    [
      "004f8a68",
      "READ",
      [
        "storage",
        "002c2c50",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004f8a14 ["INT_ADD", "register:40f0:8", ["const:4f8a14:8", "const:4:8"]]
- 004f8a14 ["CALL", null, ["callee:00c58160:8"]]
+ 004f8a54 ["INT_ADD", "register:40f0:8", ["const:4f8a54:8", "const:4:8"]]
+ 004f8a54 ["CALL", null, ["callee:00c58160:8"]]
- 004f8a24 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:210:8"]]
- 004f8a24 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 004f8a24 ["COPY", "register:5010:8", ["const:0:8"]]
- 004f8a24 ["COPY", "register:5018:8", ["const:0:8"]]
+ 004f8a64 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:250:8"]]
+ 004f8a64 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 004f8a64 ["COPY", "register:5010:8", ["const:0:8"]]
+ 004f8a64 ["COPY", "register:5018:8", ["const:0:8"]]
- 004f8a28 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:c10:8"]]
- 004f8a28 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
- 004f8a28 ["COPY", "register:5030:8", ["const:0:8"]]
- 004f8a28 ["COPY", "register:5038:8", ["const:0:8"]]
+ 004f8a68 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:c50:8"]]
+ 004f8a68 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
+ 004f8a68 ["COPY", "register:5030:8", ["const:0:8"]]
+ 004f8a68 ["COPY", "register:5038:8", ["const:0:8"]]
~~~


<a id="compare-75e16c222158736cd1b8ed6daa24a2f1"></a>

### [`004f8ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f8/004f8ab8.md) → [`004f8af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8af8.md) _ZN5Botan7SHA_2565clearEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f8b2c",
      "incomplete_value": true,
      "site": "004f8b38",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f8aec",
      "incomplete_value": true,
      "site": "004f8af8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:160:8"
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
      "definition_site": "004f8b30",
      "incomplete_value": true,
      "site": "004f8b38",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f8af0",
      "incomplete_value": true,
      "site": "004f8af8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "004f8b2c",
      "READ",
      [
        "storage",
        "002c3160",
        null,
        null
      ]
    ],
    [
      "004f8b30",
      "READ",
      [
        "storage",
        "002c2cf0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004f8b2c",
      "READ",
      [
        "storage",
        "002c31a0",
        null,
        null
      ]
    ],
    [
      "004f8b30",
      "READ",
      [
        "storage",
        "002c2d30",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004f8adc ["INT_ADD", "register:40f0:8", ["const:4f8adc:8", "const:4:8"]]
- 004f8adc ["CALL", null, ["callee:00c58160:8"]]
+ 004f8b1c ["INT_ADD", "register:40f0:8", ["const:4f8b1c:8", "const:4:8"]]
+ 004f8b1c ["CALL", null, ["callee:00c58160:8"]]
- 004f8aec ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:160:8"]]
- 004f8aec ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 004f8aec ["COPY", "register:5010:8", ["const:0:8"]]
- 004f8aec ["COPY", "register:5018:8", ["const:0:8"]]
+ 004f8b2c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:1a0:8"]]
+ 004f8b2c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 004f8b2c ["COPY", "register:5010:8", ["const:0:8"]]
+ 004f8b2c ["COPY", "register:5018:8", ["const:0:8"]]
- 004f8af0 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:cf0:8"]]
- 004f8af0 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
- 004f8af0 ["COPY", "register:5030:8", ["const:0:8"]]
- 004f8af0 ["COPY", "register:5038:8", ["const:0:8"]]
+ 004f8b30 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:d30:8"]]
+ 004f8b30 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
+ 004f8b30 ["COPY", "register:5030:8", ["const:0:8"]]
+ 004f8b30 ["COPY", "register:5038:8", ["const:0:8"]]
~~~


<a id="compare-d23cf45cc06e025eecf0cb546faa6151"></a>

### [`004f8da8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f8/004f8da8.md) → [`004f8de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8de8.md) _ZN5Botan10system_rngEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c597b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c597b0.md) · 呼出先 5件 [`004f8e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f8/004f8e30.md) [`004f8f6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f8/004f8f6c.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c59880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59880.md) · 呼出先 5件 [`004f8e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8e70.md) [`004f8fac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8fac.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `call_argument_candidate` 4件, `return_value_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f8e1c",
      "incomplete_value": false,
      "site": "004f8e20",
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
            "const:390:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f8ddc",
      "incomplete_value": false,
      "site": "004f8de0",
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
            "const:290:8"
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
      "definition_site": "004f8e30",
      "incomplete_value": false,
      "site": "004f8e44",
      "value": [
        "leaf",
        "const:4f8fac:8"
      ]
    },
    "old": {
      "definition_site": "004f8df0",
      "incomplete_value": false,
      "site": "004f8e04",
      "value": [
        "leaf",
        "const:4f8f6c:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f8e38",
      "incomplete_value": false,
      "site": "004f8e44",
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
            "const:380:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f8df8",
      "incomplete_value": false,
      "site": "004f8e04",
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
            "const:280:8"
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
      "004f8dfc",
      "READ",
      [
        "storage",
        "00ca5290",
        null,
        "undefined1"
      ]
    ],
    [
      "004f8e08",
      "DATA",
      [
        "storage",
        "00ca5280",
        null,
        "undefined8"
      ]
    ],
    [
      "004f8e1c",
      "PARAM",
      [
        "storage",
        "00ca5290",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "004f8dfc",
      "READ",
      [
        "storage",
        "00ca5390",
        null,
        "undefined1"
      ]
    ],
    [
      "004f8e08",
      "DATA",
      [
        "storage",
        "00ca5380",
        null,
        "undefined8"
      ]
    ],
    [
      "004f8e1c",
      "PARAM",
      [
        "storage",
        "00ca5390",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f8de0 ["INT_ADD", "register:40f0:8", ["const:4f8de0:8", "const:4:8"]]
- 004f8de0 ["CALL", null, ["callee:00c57f20:8"]]
+ 004f8e20 ["INT_ADD", "register:40f0:8", ["const:4f8e20:8", "const:4:8"]]
+ 004f8e20 ["CALL", null, ["callee:00c57f20:8"]]
- 004f8e04 ["INT_ADD", "register:40f0:8", ["const:4f8e04:8", "const:4:8"]]
- 004f8e04 ["CALL", null, ["callee:00c57f00:8"]]
+ 004f8e44 ["INT_ADD", "register:40f0:8", ["const:4f8e44:8", "const:4:8"]]
+ 004f8e44 ["CALL", null, ["callee:00c57f00:8"]]
- 004f8e10 ["INT_ADD", "register:40f0:8", ["const:4f8e10:8", "const:4:8"]]
- 004f8e10 ["CALL", null, ["callee:00c57f40:8"]]
+ 004f8e50 ["INT_ADD", "register:40f0:8", ["const:4f8e50:8", "const:4:8"]]
+ 004f8e50 ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-29f39e68f7512f8c0658cf124fcc952b"></a>

### [`004f8e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f8/004f8e30.md) → [`004f8e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8e70.md) FUN_004f8e70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`004f8da8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f8/004f8da8.md) [`00535f64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535f64.md) · 呼出先 7件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 2件 [`004f8de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8de8.md) [`00535fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535fa4.md) · 呼出先 7件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 88.33% / 新版 88.33%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "004f8eac",
      "incomplete_value": false,
      "site": "004f8eac",
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
            "const:380:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f8e6c",
      "incomplete_value": false,
      "site": "004f8e6c",
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
            "const:280:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004f8ea8",
      "incomplete_value": false,
      "site": "004f8eac",
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
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f8e68",
      "incomplete_value": false,
      "site": "004f8e6c",
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
            "const:2a0:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "004f8ed0",
      "incomplete_value": false,
      "site": "004f8ed0",
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
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f8e90",
      "incomplete_value": false,
      "site": "004f8e90",
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
            "const:288:8"
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
      "004f8e98",
      "PARAM",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ],
    [
      "004f8eac",
      "WRITE",
      [
        "storage",
        "00ca5280",
        null,
        "undefined8"
      ]
    ],
    [
      "004f8eac",
      "DATA",
      [
        "storage",
        "00c6a2a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004f8e98",
      "PARAM",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "004f8eac",
      "WRITE",
      [
        "storage",
        "00ca5380",
        null,
        "undefined8"
      ]
    ],
    [
      "004f8eac",
      "DATA",
      [
        "storage",
        "00c6a370",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f8e70 ["INT_ADD", "register:40f0:8", ["const:4f8e70:8", "const:4:8"]]
- 004f8e70 ["CALL", null, ["callee:00c59890:8"]]
+ 004f8eb0 ["INT_ADD", "register:40f0:8", ["const:4f8eb0:8", "const:4:8"]]
+ 004f8eb0 ["CALL", null, ["callee:00c59890:8"]]
- 004f8e88 ["INT_ADD", "register:40f0:8", ["const:4f8e88:8", "const:4:8"]]
- 004f8e88 ["CALL", null, ["callee:00c59890:8"]]
+ 004f8ec8 ["INT_ADD", "register:40f0:8", ["const:4f8ec8:8", "const:4:8"]]
+ 004f8ec8 ["CALL", null, ["callee:00c59890:8"]]
- 004f8e90 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:288:8"]]
- 004f8e90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:4"]]
+ 004f8ed0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:388:8"]]
+ 004f8ed0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:4"]]
~~~


<a id="compare-b6e8bba2310d7a417189239fe05cdf26"></a>

### [`004f8f9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f8/004f8f9c.md) → [`004f8fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f8/004f8fdc.md) _ZNK5Botan14calendar_point9to_stringEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`004518b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00451/004518b0.md) [`004594d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/004594d0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fa0.md)
- 新版 呼出元 0件  · 呼出先 12件 [`004518f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004518f0.md) [`00459510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459510.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 95.62% / 新版 95.62%

優先判定に残った影響 `call_argument_candidate` 6件

アドレスに依存する影響 `store_destination` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f9180",
      "incomplete_value": true,
      "site": "004f9188",
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
      "definition_site": "004f9140",
      "incomplete_value": true,
      "site": "004f9148",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "004f9190",
      "incomplete_value": true,
      "site": "004f9190",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
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
      "definition_site": "004f9150",
      "incomplete_value": true,
      "site": "004f9150",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
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
    "ordinal": 17,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f9190",
      "incomplete_value": true,
      "site": "004f9190",
      "value": [
        "LOAD",
        "8",
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f9150",
      "incomplete_value": true,
      "site": "004f9150",
      "value": [
        "LOAD",
        "8",
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
                "const:40:8"
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
      "004f9044",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "004f9044",
      "PARAM",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "004f9090",
      "PARAM",
      [
        "storage",
        "002b8f5f",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004f9044",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "004f9044",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "004f9090",
      "PARAM",
      [
        "storage",
        "002b8f0b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004f9008 ["INT_ADD", "register:40f0:8", ["const:4f9008:8", "const:4:8"]]
- 004f9008 ["CALL", null, ["callee:00c58350:8"]]
+ 004f9048 ["INT_ADD", "register:40f0:8", ["const:4f9048:8", "const:4:8"]]
+ 004f9048 ["CALL", null, ["callee:00c58350:8"]]
- 004f9018 ["COPY", "register:0:8", ["register:4040:8"]]
- 004f9018 ["INT_ADD", "register:40f0:8", ["const:4f9018:8", "const:4:8"]]
- 004f9018 ["CALLIND", null, ["register:0:8"]]
+ 004f9058 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004f9058 ["INT_ADD", "register:40f0:8", ["const:4f9058:8", "const:4:8"]]
+ 004f9058 ["CALLIND", null, ["register:0:8"]]
- 004f9048 ["INT_ADD", "register:40f0:8", ["const:4f9048:8", "const:4:8"]]
- 004f9048 ["CALL", null, ["callee:00c58a30:8"]]
+ 004f9088 ["INT_ADD", "register:40f0:8", ["const:4f9088:8", "const:4:8"]]
+ 004f9088 ["CALL", null, ["callee:00c58a30:8"]]
~~~


<a id="compare-8a4d293d879f971956b0286c34621b6e"></a>

### [`004f9210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f9/004f9210.md) → [`004f9250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f9/004f9250.md) FUN_004f9250

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`004ad9ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ad/004ad9ac.md) [`004adae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ad/004adae4.md) · 呼出先 7件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 2件 [`004ad9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ad/004ad9ec.md) [`004adb24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ad/004adb24.md) · 呼出先 7件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.52% / 新版 96.52%

優先判定に残った影響 `call_argument_candidate` 4件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f9378",
      "incomplete_value": false,
      "site": "004f9380",
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
            "const:1d5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f9338",
      "incomplete_value": false,
      "site": "004f9340",
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
            "const:195:8"
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
      "definition_site": "004f93b0",
      "incomplete_value": true,
      "site": "004f93bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f9370",
      "incomplete_value": true,
      "site": "004f937c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f93ac",
      "incomplete_value": false,
      "site": "004f93bc",
      "value": [
        "leaf",
        "const:5358a8:8"
      ]
    },
    "old": {
      "definition_site": "004f936c",
      "incomplete_value": false,
      "site": "004f937c",
      "value": [
        "leaf",
        "const:535868:8"
      ]
    },
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
      "004f9378",
      "PARAM",
      [
        "storage",
        "002b6195",
        null,
        "string"
      ]
    ],
    [
      "004f93ac",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ],
    [
      "004f93b0",
      "READ",
      [
        "storage",
        "00c9ad50",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f9378",
      "PARAM",
      [
        "storage",
        "002b61d5",
        null,
        "string"
      ]
    ],
    [
      "004f93ac",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ],
    [
      "004f93b0",
      "READ",
      [
        "storage",
        "00c9ae20",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f9340 ["INT_ADD", "register:40f0:8", ["const:4f9340:8", "const:4:8"]]
- 004f9340 ["CALL", null, ["callee:0043de18:8"]]
+ 004f9380 ["INT_ADD", "register:40f0:8", ["const:4f9380:8", "const:4:8"]]
+ 004f9380 ["CALL", null, ["callee:0043de18:8"]]
- 004f937c ["INT_ADD", "register:40f0:8", ["const:4f937c:8", "const:4:8"]]
- 004f937c ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f93bc ["INT_ADD", "register:40f0:8", ["const:4f93bc:8", "const:4:8"]]
+ 004f93bc ["CALL", null, ["callee:00c57fe0:8"]]
- 004f939c ["INT_ADD", "register:40f0:8", ["const:4f939c:8", "const:4:8"]]
- 004f939c ["CALL", null, ["callee:0043de18:8"]]
+ 004f93dc ["INT_ADD", "register:40f0:8", ["const:4f93dc:8", "const:4:8"]]
+ 004f93dc ["CALL", null, ["callee:0043de18:8"]]
~~~


<a id="compare-af71061c3dc4bdf0db73abd7a6573c62"></a>

### [`004f9428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f9/004f9428.md) → [`004f9468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f9/004f9468.md) _ZN5Botan7Charset9transcodeERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEENS_13Character_SetESA_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 14件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`004a684c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004a6/004a684c.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`004a688c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004a6/004a688c.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.03% / 新版 97.03%

優先判定に残った影響 `call_argument_candidate` 7件

アドレスに依存する影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f96ac",
      "incomplete_value": false,
      "site": "004f96b4",
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
            "const:995:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f966c",
      "incomplete_value": false,
      "site": "004f9674",
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
            "const:9f1:8"
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
      "definition_site": "004f96e4",
      "incomplete_value": true,
      "site": "004f96f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f96a4",
      "incomplete_value": true,
      "site": "004f96b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f96e0",
      "incomplete_value": false,
      "site": "004f96f0",
      "value": [
        "leaf",
        "const:5358a8:8"
      ]
    },
    "old": {
      "definition_site": "004f96a0",
      "incomplete_value": false,
      "site": "004f96b0",
      "value": [
        "leaf",
        "const:535868:8"
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
      "004f96ac",
      "PARAM",
      [
        "storage",
        "002ae9f1",
        null,
        "string"
      ]
    ],
    [
      "004f96e0",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ],
    [
      "004f96e4",
      "READ",
      [
        "storage",
        "00c9ad50",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f96ac",
      "PARAM",
      [
        "storage",
        "002ae995",
        null,
        "string"
      ]
    ],
    [
      "004f96e0",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ],
    [
      "004f96e4",
      "READ",
      [
        "storage",
        "00c9ae20",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f9674 ["INT_ADD", "register:40f0:8", ["const:4f9674:8", "const:4:8"]]
- 004f9674 ["CALL", null, ["callee:0043de18:8"]]
+ 004f96b4 ["INT_ADD", "register:40f0:8", ["const:4f96b4:8", "const:4:8"]]
+ 004f96b4 ["CALL", null, ["callee:0043de18:8"]]
- 004f96a4 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:d50:8"]]
- 004f96a4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 004f96e4 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:e20:8"]]
+ 004f96e4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 004f96b0 ["INT_ADD", "register:40f0:8", ["const:4f96b0:8", "const:4:8"]]
- 004f96b0 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f96f0 ["INT_ADD", "register:40f0:8", ["const:4f96f0:8", "const:4:8"]]
+ 004f96f0 ["CALL", null, ["callee:00c57fe0:8"]]
~~~


<a id="compare-6538a130b8c2d6856f905a869df8d918"></a>

### [`004f9b08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f9/004f9b08.md) → [`004f9b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f9/004f9b48.md) _ZN5Botan17DataSource_MemoryC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c594c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c594c0.md) · 呼出先 1件 [`005403c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/005403c8.md)
- 新版 呼出元 1件 [`00c59590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59590.md) · 呼出先 1件 [`00540408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540408.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004f9b60",
      "incomplete_value": true,
      "site": "004f9b64",
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
      "definition_site": "004f9b20",
      "incomplete_value": true,
      "site": "004f9b24",
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
      "004f9b5c",
      "READ",
      [
        "storage",
        "00c9ade0",
        null,
        "pointer"
      ]
    ],
    [
      "004f9b64",
      "DATA",
      [
        "storage",
        "00c67388",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f9b5c",
      "READ",
      [
        "storage",
        "00c9aeb0",
        null,
        "pointer"
      ]
    ],
    [
      "004f9b64",
      "DATA",
      [
        "storage",
        "00c67458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f9b1c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:de0:8"]]
- 004f9b1c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004f9b5c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:eb0:8"]]
+ 004f9b5c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 004f9b50 ["INT_ADD", "register:40f0:8", ["const:4f9b50:8", "const:4:8"]]
- 004f9b50 ["CALL", null, ["callee:00540408:8"]]
+ 004f9b90 ["INT_ADD", "register:40f0:8", ["const:4f9b90:8", "const:4:8"]]
+ 004f9b90 ["CALL", null, ["callee:00540408:8"]]
~~~


<a id="compare-4d9831fefa46d32e6cc3b1be3f86647e"></a>

### [`004f9b64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f9/004f9b64.md) → [`004f9ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f9/004f9ba4.md) _ZN5Botan17DataSource_Stream4readEPhm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.36% / 新版 96.36%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f9c30",
      "incomplete_value": false,
      "site": "004f9c38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ad000:8"
          ],
          [
            "leaf",
            "const:782:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f9bf0",
      "incomplete_value": false,
      "site": "004f9bf8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ad000:8"
          ],
          [
            "leaf",
            "const:7de:8"
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
      "definition_site": "004f9c6c",
      "incomplete_value": true,
      "site": "004f9c78",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f9c2c",
      "incomplete_value": true,
      "site": "004f9c38",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d80:8"
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
      "definition_site": "004f9c68",
      "incomplete_value": false,
      "site": "004f9c78",
      "value": [
        "leaf",
        "const:5358a8:8"
      ]
    },
    "old": {
      "definition_site": "004f9c28",
      "incomplete_value": false,
      "site": "004f9c38",
      "value": [
        "leaf",
        "const:535868:8"
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
      "004f9c30",
      "PARAM",
      [
        "storage",
        "002ad7de",
        null,
        "string"
      ]
    ],
    [
      "004f9c68",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ],
    [
      "004f9c6c",
      "READ",
      [
        "storage",
        "00c9ad80",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004f9c30",
      "PARAM",
      [
        "storage",
        "002ad782",
        null,
        "string"
      ]
    ],
    [
      "004f9c68",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ],
    [
      "004f9c6c",
      "READ",
      [
        "storage",
        "00c9ae50",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004f9bf8 ["INT_ADD", "register:40f0:8", ["const:4f9bf8:8", "const:4:8"]]
- 004f9bf8 ["CALL", null, ["callee:0043de18:8"]]
+ 004f9c38 ["INT_ADD", "register:40f0:8", ["const:4f9c38:8", "const:4:8"]]
+ 004f9c38 ["CALL", null, ["callee:0043de18:8"]]
- 004f9c38 ["INT_ADD", "register:40f0:8", ["const:4f9c38:8", "const:4:8"]]
- 004f9c38 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f9c78 ["INT_ADD", "register:40f0:8", ["const:4f9c78:8", "const:4:8"]]
+ 004f9c78 ["CALL", null, ["callee:00c57fe0:8"]]
- 004f9b8c ["INT_ADD", "register:40f0:8", ["const:4f9b8c:8", "const:4:8"]]
- 004f9b8c ["CALL", null, ["callee:00c591a0:8"]]
+ 004f9bcc ["INT_ADD", "register:40f0:8", ["const:4f9bcc:8", "const:4:8"]]
+ 004f9bcc ["CALL", null, ["callee:00c591a0:8"]]
~~~


<a id="compare-c4daf767be91eef50399b78a7abd06be"></a>

### [`004f9cf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004f9/004f9cf8.md) → [`004f9d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004f9/004f9d38.md) _ZNK5Botan17DataSource_Stream4peekEPhmm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 13件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`004aec64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ae/004aec64.md) [`004b3508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004b3/004b3508.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`004aeca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ae/004aeca4.md) [`004b3548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b3/004b3548.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_argument_candidate` 6件

アドレスに依存する影響 `call_argument_candidate` 3件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004f9de8",
      "incomplete_value": true,
      "site": "004f9de8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f9da8",
      "incomplete_value": true,
      "site": "004f9da8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
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
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004f9eac",
      "incomplete_value": false,
      "site": "004f9eb4",
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
            "const:876:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f9e6c",
      "incomplete_value": false,
      "site": "004f9e74",
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
            "const:8d2:8"
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
      "definition_site": "004f9ee4",
      "incomplete_value": true,
      "site": "004f9ef0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004f9ea4",
      "incomplete_value": true,
      "site": "004f9eb0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d48:8"
              ]
            ]
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
      "004f9dd8",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ],
    [
      "004f9eac",
      "PARAM",
      [
        "storage",
        "002ae8d2",
        null,
        "string"
      ]
    ],
    [
      "004f9ee0",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004f9dd8",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ],
    [
      "004f9eac",
      "PARAM",
      [
        "storage",
        "002ae876",
        null,
        "string"
      ]
    ],
    [
      "004f9ee0",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004f9da8 ["COPY", "register:0:8", ["register:4048:8"]]
- 004f9da8 ["INT_ADD", "register:40f0:8", ["const:4f9da8:8", "const:4:8"]]
- 004f9da8 ["CALLIND", null, ["register:0:8"]]
+ 004f9de8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004f9de8 ["INT_ADD", "register:40f0:8", ["const:4f9de8:8", "const:4:8"]]
+ 004f9de8 ["CALLIND", null, ["register:0:8"]]
- 004f9e74 ["INT_ADD", "register:40f0:8", ["const:4f9e74:8", "const:4:8"]]
- 004f9e74 ["CALL", null, ["callee:0043de18:8"]]
+ 004f9eb4 ["INT_ADD", "register:40f0:8", ["const:4f9eb4:8", "const:4:8"]]
+ 004f9eb4 ["CALL", null, ["callee:0043de18:8"]]
- 004f9eb0 ["INT_ADD", "register:40f0:8", ["const:4f9eb0:8", "const:4:8"]]
- 004f9eb0 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004f9ef0 ["INT_ADD", "register:40f0:8", ["const:4f9ef0:8", "const:4:8"]]
+ 004f9ef0 ["CALL", null, ["callee:00c57fe0:8"]]
~~~


<a id="compare-afa73413ee57f34d87c99420a63b075e"></a>

### [`004fa054`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fa054.md) → [`004fa094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fa094.md) _ZN5Botan17DataSource_StreamC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c59660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59660.md) · 呼出先 9件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`004fa210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fa210.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c59730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59730.md) · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004fa250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fa250.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.51% / 新版 93.51%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fa0d4",
      "incomplete_value": true,
      "site": "004fa0d4",
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
      "definition_site": "004fa094",
      "incomplete_value": true,
      "site": "004fa094",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fa178",
      "incomplete_value": false,
      "site": "004fa184",
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
            "const:8a6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fa138",
      "incomplete_value": false,
      "site": "004fa144",
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
            "const:902:8"
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
      "definition_site": "004fa1b4",
      "incomplete_value": true,
      "site": "004fa1c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fa174",
      "incomplete_value": true,
      "site": "004fa180",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d80:8"
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
      "004fa0b8",
      "READ",
      [
        "storage",
        "00c9b028",
        null,
        "pointer"
      ]
    ],
    [
      "004fa0d4",
      "DATA",
      [
        "storage",
        "00c673d8",
        null,
        "pointer"
      ]
    ],
    [
      "004fa178",
      "PARAM",
      [
        "storage",
        "002ae902",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004fa0b8",
      "READ",
      [
        "storage",
        "00c9b0f8",
        null,
        "pointer"
      ]
    ],
    [
      "004fa0d4",
      "DATA",
      [
        "storage",
        "00c674a8",
        null,
        "pointer"
      ]
    ],
    [
      "004fa178",
      "PARAM",
      [
        "storage",
        "002ae8a6",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fa144 ["INT_ADD", "register:40f0:8", ["const:4fa144:8", "const:4:8"]]
- 004fa144 ["CALL", null, ["callee:00c58180:8"]]
+ 004fa184 ["INT_ADD", "register:40f0:8", ["const:4fa184:8", "const:4:8"]]
+ 004fa184 ["CALL", null, ["callee:00c58180:8"]]
- 004fa180 ["INT_ADD", "register:40f0:8", ["const:4fa180:8", "const:4:8"]]
- 004fa180 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004fa1c0 ["INT_ADD", "register:40f0:8", ["const:4fa1c0:8", "const:4:8"]]
+ 004fa1c0 ["CALL", null, ["callee:00c57fe0:8"]]
- 004fa078 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:28:8"]]
- 004fa078 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fa0b8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:f8:8"]]
+ 004fa0b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-663fd9c28fbb9535cb2f7454fb4e787c"></a>

### [`004fa210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fa210.md) → [`004fa250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fa250.md) FUN_004fa250

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`004fa054`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fa054.md) · 呼出先 4件 [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c58f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58f00.md) [`00c58f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58f10.md)
- 新版 呼出元 1件 [`004fa094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fa094.md) · 呼出先 4件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fd0.md) [`00c58fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_destination` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fa294",
      "incomplete_value": true,
      "site": "004fa294",
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
      "definition_site": "004fa254",
      "incomplete_value": true,
      "site": "004fa254",
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
      "definition_site": "004fa28c",
      "incomplete_value": true,
      "site": "004fa298",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "004fa24c",
      "incomplete_value": true,
      "site": "004fa258",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "004fa2a4",
      "incomplete_value": true,
      "site": "004fa2a4",
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
      "definition_site": "004fa264",
      "incomplete_value": true,
      "site": "004fa264",
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
      "004fa274",
      "READ",
      [
        "storage",
        "00c9b030",
        null,
        "pointer"
      ]
    ],
    [
      "004fa278",
      "READ",
      [
        "storage",
        "00c9b038",
        null,
        "pointer"
      ]
    ],
    [
      "004fa28c",
      "READ",
      [
        "storage",
        "00c930b0",
        null,
        "pointer __((offset(0x18)))"
      ]
    ]
  ],
  "added": [
    [
      "004fa274",
      "READ",
      [
        "storage",
        "00c9b100",
        null,
        "pointer"
      ]
    ],
    [
      "004fa278",
      "READ",
      [
        "storage",
        "00c9b108",
        null,
        "pointer"
      ]
    ],
    [
      "004fa28c",
      "READ",
      [
        "storage",
        "00c93180",
        null,
        "pointer __((offset(0x18)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fa234 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:30:8"]]
- 004fa234 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fa274 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:100:8"]]
+ 004fa274 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
- 004fa238 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:38:8"]]
- 004fa238 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fa278 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:108:8"]]
+ 004fa278 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
- 004fa27c ["INT_ADD", "register:40f0:8", ["const:4fa27c:8", "const:4:8"]]
- 004fa27c ["CALL", null, ["callee:00c582b0:8"]]
+ 004fa2bc ["INT_ADD", "register:40f0:8", ["const:4fa2bc:8", "const:4:8"]]
+ 004fa2bc ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-8d7f09c29bc1182b7c0bfcf1324c7655"></a>

### [`004fa328`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fa328.md) → [`004fa368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fa368.md) _ZN5Botan17DataSource_StreamC2ERNSt6__ndk113basic_istreamIcNS1_11char_traitsIcEEEERKNS1_12basic_stringIcS4_NS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fa388",
      "incomplete_value": true,
      "site": "004fa388",
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
      "definition_site": "004fa348",
      "incomplete_value": true,
      "site": "004fa348",
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
      "004fa380",
      "READ",
      [
        "storage",
        "00c9b028",
        null,
        "pointer"
      ]
    ],
    [
      "004fa388",
      "DATA",
      [
        "storage",
        "00c673d8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fa380",
      "READ",
      [
        "storage",
        "00c9b0f8",
        null,
        "pointer"
      ]
    ],
    [
      "004fa388",
      "DATA",
      [
        "storage",
        "00c674a8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fa340 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:28:8"]]
- 004fa340 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fa380 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:f8:8"]]
+ 004fa380 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 004fa36c ["INT_ADD", "register:40f0:8", ["const:4fa36c:8", "const:4:8"]]
- 004fa36c ["CALL", null, ["callee:0043bb60:8"]]
+ 004fa3ac ["INT_ADD", "register:40f0:8", ["const:4fa3ac:8", "const:4:8"]]
+ 004fa3ac ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-878b457c10856132bc4f9b46bd322085"></a>

### [`004fa3f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fa3f4.md) → [`004fa434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fa434.md) _ZN5Botan9ExceptionC1ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c587c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c587c0.md) · 呼出先 1件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md)
- 新版 呼出元 1件 [`00c58890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58890.md) · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fa450",
      "incomplete_value": true,
      "site": "004fa450",
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
      "definition_site": "004fa410",
      "incomplete_value": true,
      "site": "004fa410",
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
      "004fa448",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ],
    [
      "004fa450",
      "DATA",
      [
        "storage",
        "00c67428",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fa448",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ],
    [
      "004fa450",
      "DATA",
      [
        "storage",
        "00c674f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fa408 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
- 004fa408 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fa448 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 004fa448 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 004fa438 ["INT_ADD", "register:40f0:8", ["const:4fa438:8", "const:4:8"]]
- 004fa438 ["CALL", null, ["callee:0043bb60:8"]]
+ 004fa478 ["INT_ADD", "register:40f0:8", ["const:4fa478:8", "const:4:8"]]
+ 004fa478 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-12251e31d624703cec7612a7bfb52be8"></a>

### [`004fa45c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fa45c.md) → [`004fa49c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fa49c.md) _ZN5Botan9ExceptionC1EPKcRKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58780.md) · 呼出先 8件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md)
- 新版 呼出元 1件 [`00c58850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58850.md) · 呼出先 8件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.92% / 新版 95.92%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fa4e4",
      "incomplete_value": true,
      "site": "004fa4e4",
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
      "definition_site": "004fa4a4",
      "incomplete_value": true,
      "site": "004fa4a4",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fa560",
      "incomplete_value": false,
      "site": "004fa568",
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
            "const:f7a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fa520",
      "incomplete_value": false,
      "site": "004fa528",
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
            "const:fc7:8"
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
      "004fa4c8",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ],
    [
      "004fa4e4",
      "DATA",
      [
        "storage",
        "00c67428",
        null,
        "pointer"
      ]
    ],
    [
      "004fa560",
      "PARAM",
      [
        "storage",
        "002a0fc7",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "004fa4c8",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ],
    [
      "004fa4e4",
      "DATA",
      [
        "storage",
        "00c674f8",
        null,
        "pointer"
      ]
    ],
    [
      "004fa560",
      "PARAM",
      [
        "storage",
        "002a0f7a",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 004fa528 ["INT_ADD", "register:40f0:8", ["const:4fa528:8", "const:4:8"]]
- 004fa528 ["CALL", null, ["callee:00c58040:8"]]
+ 004fa568 ["INT_ADD", "register:40f0:8", ["const:4fa568:8", "const:4:8"]]
+ 004fa568 ["CALL", null, ["callee:00c58040:8"]]
- 004fa488 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:dd0:8"]]
- 004fa488 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fa4c8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:ea0:8"]]
+ 004fa4c8 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 004fa4a8 ["INT_ADD", "register:40f0:8", ["const:4fa4a8:8", "const:4:8"]]
- 004fa4a8 ["CALL", null, ["callee:00c580b0:8"]]
+ 004fa4e8 ["INT_ADD", "register:40f0:8", ["const:4fa4e8:8", "const:4:8"]]
+ 004fa4e8 ["CALL", null, ["callee:00c580b0:8"]]
~~~


<a id="compare-66edb2826036a0c106a13a286e487526"></a>

### [`004fa638`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fa638.md) → [`004fa678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fa678.md) _ZN5Botan16Invalid_ArgumentC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58670.md) · 呼出先 1件 [`00c58780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58780.md)
- 新版 呼出元 1件 [`00c58740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58740.md) · 呼出先 1件 [`00c58850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fa6a0",
      "incomplete_value": true,
      "site": "004fa6a4",
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
      "definition_site": "004fa660",
      "incomplete_value": true,
      "site": "004fa664",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fa68c",
      "incomplete_value": false,
      "site": "004fa694",
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
            "const:3f2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fa64c",
      "incomplete_value": false,
      "site": "004fa654",
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
            "const:44e:8"
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
      "004fa68c",
      "PARAM",
      [
        "storage",
        "002a644e",
        null,
        "string"
      ]
    ],
    [
      "004fa69c",
      "READ",
      [
        "storage",
        "00c9ad60",
        null,
        "pointer"
      ]
    ],
    [
      "004fa6a4",
      "DATA",
      [
        "storage",
        "00c67450",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fa68c",
      "PARAM",
      [
        "storage",
        "002a63f2",
        null,
        "string"
      ]
    ],
    [
      "004fa69c",
      "READ",
      [
        "storage",
        "00c9ae30",
        null,
        "pointer"
      ]
    ],
    [
      "004fa6a4",
      "DATA",
      [
        "storage",
        "00c67520",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fa654 ["INT_ADD", "register:40f0:8", ["const:4fa654:8", "const:4:8"]]
- 004fa654 ["CALL", null, ["callee:00c58850:8"]]
+ 004fa694 ["INT_ADD", "register:40f0:8", ["const:4fa694:8", "const:4:8"]]
+ 004fa694 ["CALL", null, ["callee:00c58850:8"]]
- 004fa64c ["COPY", "tmp:0:8", ["const:44e:8"]]
- 004fa64c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 004fa64c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 004fa64c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 004fa68c ["COPY", "tmp:0:8", ["const:3f2:8"]]
+ 004fa68c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 004fa68c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 004fa68c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 004fa65c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d60:8"]]
- 004fa65c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fa69c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e30:8"]]
+ 004fa69c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-551d12a6b19ed3f6f185bd8e80c4d8a5"></a>

### [`004fa674`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fa674.md) → [`004fa6b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fa6b4.md) _ZN5Botan16Invalid_ArgumentC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.05% / 新版 99.05%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fa804",
      "incomplete_value": true,
      "site": "004fa808",
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
      "definition_site": "004fa7c4",
      "incomplete_value": true,
      "site": "004fa7c8",
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
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fa7cc",
      "incomplete_value": false,
      "site": "004fa7d8",
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
            "const:3f2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fa78c",
      "incomplete_value": false,
      "site": "004fa798",
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
            "const:44e:8"
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
      "004fa7cc",
      "PARAM",
      [
        "storage",
        "002a644e",
        null,
        "string"
      ]
    ],
    [
      "004fa800",
      "READ",
      [
        "storage",
        "00c9ad60",
        null,
        "pointer"
      ]
    ],
    [
      "004fa808",
      "DATA",
      [
        "storage",
        "00c67450",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fa7cc",
      "PARAM",
      [
        "storage",
        "002a63f2",
        null,
        "string"
      ]
    ],
    [
      "004fa800",
      "READ",
      [
        "storage",
        "00c9ae30",
        null,
        "pointer"
      ]
    ],
    [
      "004fa808",
      "DATA",
      [
        "storage",
        "00c67520",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fa798 ["INT_ADD", "register:40f0:8", ["const:4fa798:8", "const:4:8"]]
- 004fa798 ["CALL", null, ["callee:00c58850:8"]]
+ 004fa7d8 ["INT_ADD", "register:40f0:8", ["const:4fa7d8:8", "const:4:8"]]
+ 004fa7d8 ["CALL", null, ["callee:00c58850:8"]]
- 004fa710 ["INT_ADD", "register:40f0:8", ["const:4fa710:8", "const:4:8"]]
- 004fa710 ["CALL", null, ["callee:00c57f60:8"]]
+ 004fa750 ["INT_ADD", "register:40f0:8", ["const:4fa750:8", "const:4:8"]]
+ 004fa750 ["CALL", null, ["callee:00c57f60:8"]]
- 004fa738 ["INT_ADD", "register:40f0:8", ["const:4fa738:8", "const:4:8"]]
- 004fa738 ["CALL", null, ["callee:00c58010:8"]]
+ 004fa778 ["INT_ADD", "register:40f0:8", ["const:4fa778:8", "const:4:8"]]
+ 004fa778 ["CALL", null, ["callee:00c58010:8"]]
~~~


<a id="compare-8f160a6eb30e0c78f38c01c6678f6dc3"></a>

### [`004fa85c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fa85c.md) → [`004fa89c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fa89c.md) _ZN5Botan12Lookup_ErrorC1ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_S9_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58d50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58d50.md) · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c58e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58e20.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.16% / 新版 95.16%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fa9c0",
      "incomplete_value": true,
      "site": "004fa9c0",
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
      "definition_site": "004fa980",
      "incomplete_value": true,
      "site": "004fa980",
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
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004faa18",
      "incomplete_value": true,
      "site": "004faa1c",
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
      "definition_site": "004fa9d8",
      "incomplete_value": true,
      "site": "004fa9dc",
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fa8bc",
      "incomplete_value": false,
      "site": "004fa8d4",
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
            "const:dc3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fa87c",
      "incomplete_value": false,
      "site": "004fa894",
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
            "const:e17:8"
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
      "004fa8bc",
      "PARAM",
      [
        "storage",
        "002bfe17",
        null,
        "string"
      ]
    ],
    [
      "004fa8dc",
      "PARAM",
      [
        "storage",
        "002a0fc7",
        null,
        null
      ]
    ],
    [
      "004fa954",
      "PARAM",
      [
        "storage",
        "002ac840",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004fa8bc",
      "PARAM",
      [
        "storage",
        "002bfdc3",
        null,
        "string"
      ]
    ],
    [
      "004fa8dc",
      "PARAM",
      [
        "storage",
        "002a0f7a",
        null,
        null
      ]
    ],
    [
      "004fa954",
      "PARAM",
      [
        "storage",
        "002ac7e4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fa894 ["INT_ADD", "register:40f0:8", ["const:4fa894:8", "const:4:8"]]
- 004fa894 ["CALL", null, ["callee:00c58180:8"]]
+ 004fa8d4 ["INT_ADD", "register:40f0:8", ["const:4fa8d4:8", "const:4:8"]]
+ 004fa8d4 ["CALL", null, ["callee:00c58180:8"]]
- 004fa8a4 ["INT_ADD", "register:40f0:8", ["const:4fa8a4:8", "const:4:8"]]
- 004fa8a4 ["CALL", null, ["callee:00c58040:8"]]
+ 004fa8e4 ["INT_ADD", "register:40f0:8", ["const:4fa8e4:8", "const:4:8"]]
+ 004fa8e4 ["CALL", null, ["callee:00c58040:8"]]
- 004fa920 ["INT_ADD", "register:40f0:8", ["const:4fa920:8", "const:4:8"]]
- 004fa920 ["CALL", null, ["callee:00c58180:8"]]
+ 004fa960 ["INT_ADD", "register:40f0:8", ["const:4fa960:8", "const:4:8"]]
+ 004fa960 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-b6a94912914f546afb84d066ec53679a"></a>

### [`004fab0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fab0c.md) → [`004fab4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fab4c.md) _ZN5Botan14Internal_ErrorC1ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c58b00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58b00.md) [`00c59820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59820.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 2件 [`00c58bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58bd0.md) [`00c598f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598f0.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.11% / 新版 91.11%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fab94",
      "incomplete_value": true,
      "site": "004fab94",
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
      "definition_site": "004fab54",
      "incomplete_value": true,
      "site": "004fab54",
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
      "definition_site": "004fabd0",
      "incomplete_value": true,
      "site": "004fabd4",
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
      "definition_site": "004fab90",
      "incomplete_value": true,
      "site": "004fab94",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fab6c",
      "incomplete_value": false,
      "site": "004fab7c",
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
            "const:bd6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fab2c",
      "incomplete_value": false,
      "site": "004fab3c",
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
            "const:c32:8"
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
      "004fab6c",
      "PARAM",
      [
        "storage",
        "002b0c32",
        null,
        "string"
      ]
    ],
    [
      "004fab88",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ],
    [
      "004fab94",
      "DATA",
      [
        "storage",
        "00c67428",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fab6c",
      "PARAM",
      [
        "storage",
        "002b0bd6",
        null,
        "string"
      ]
    ],
    [
      "004fab88",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ],
    [
      "004fab94",
      "DATA",
      [
        "storage",
        "00c674f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fab3c ["INT_ADD", "register:40f0:8", ["const:4fab3c:8", "const:4:8"]]
- 004fab3c ["CALL", null, ["callee:00c58180:8"]]
+ 004fab7c ["INT_ADD", "register:40f0:8", ["const:4fab7c:8", "const:4:8"]]
+ 004fab7c ["CALL", null, ["callee:00c58180:8"]]
- 004fab2c ["COPY", "tmp:0:8", ["const:c32:8"]]
- 004fab2c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004fab2c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004fab2c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004fab6c ["COPY", "tmp:0:8", ["const:bd6:8"]]
+ 004fab6c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004fab6c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004fab6c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 004fab48 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
- 004fab48 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fab88 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 004fab88 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-09ce6fb982b85125b2afd5d3e636c2f0"></a>

### [`004fabf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fabf4.md) → [`004fac34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004fac34.md) _ZN5Botan18Invalid_Key_LengthC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58d80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58d80.md) · 呼出先 8件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c58e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58e50.md) · 呼出先 8件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.20% / 新版 95.20%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fad08",
      "incomplete_value": true,
      "site": "004fad14",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1a6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004facc8",
      "incomplete_value": true,
      "site": "004facd4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1f3:8"
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
      "definition_site": "004fad0c",
      "incomplete_value": true,
      "site": "004fad18",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "004faccc",
      "incomplete_value": true,
      "site": "004facd8",
      "value": [
        "LOAD",
        "16",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fad84",
      "incomplete_value": true,
      "site": "004fad88",
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
      "definition_site": "004fad44",
      "incomplete_value": true,
      "site": "004fad48",
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
    "ordinal": 27,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "004fad08",
      "READ",
      [
        "storage",
        "002a41f3",
        null,
        "string"
      ]
    ],
    [
      "004fad0c",
      "READ",
      [
        "storage",
        "002a4202",
        null,
        "string"
      ]
    ],
    [
      "004fad68",
      "PARAM",
      [
        "storage",
        "002a644e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004fad08",
      "READ",
      [
        "storage",
        "002a41a6",
        null,
        "string"
      ]
    ],
    [
      "004fad0c",
      "READ",
      [
        "storage",
        "002a41b5",
        null,
        "string"
      ]
    ],
    [
      "004fad68",
      "PARAM",
      [
        "storage",
        "002a63f2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fad08 ["INT_ADD", "register:40f0:8", ["const:4fad08:8", "const:4:8"]]
- 004fad08 ["CALL", null, ["callee:00c58050:8"]]
+ 004fad48 ["INT_ADD", "register:40f0:8", ["const:4fad48:8", "const:4:8"]]
+ 004fad48 ["CALL", null, ["callee:00c58050:8"]]
- 004fad34 ["INT_ADD", "register:40f0:8", ["const:4fad34:8", "const:4:8"]]
- 004fad34 ["CALL", null, ["callee:00c58850:8"]]
+ 004fad74 ["INT_ADD", "register:40f0:8", ["const:4fad74:8", "const:4:8"]]
+ 004fad74 ["CALL", null, ["callee:00c58850:8"]]
- 004fac8c ["INT_ADD", "register:40f0:8", ["const:4fac8c:8", "const:4:8"]]
- 004fac8c ["CALL", null, ["callee:00c57f60:8"]]
+ 004faccc ["INT_ADD", "register:40f0:8", ["const:4faccc:8", "const:4:8"]]
+ 004faccc ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-2447b33140eeefb03fd0bc413b8ad2dc"></a>

### [`004fae68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fa/004fae68.md) → [`004faea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fa/004faea8.md) _ZN5Botan17Invalid_IV_LengthC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58d90.md) · 呼出先 7件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f60.md) [`00c57f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c58e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58e60.md) · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.81% / 新版 96.81%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004faf88",
      "incomplete_value": true,
      "site": "004faf8c",
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
      "definition_site": "004faf48",
      "incomplete_value": true,
      "site": "004faf4c",
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fafbc",
      "incomplete_value": true,
      "site": "004fafc0",
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
      "definition_site": "004faf7c",
      "incomplete_value": true,
      "site": "004faf80",
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
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004faee0",
      "incomplete_value": false,
      "site": "004faeec",
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
            "const:e2e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004faea0",
      "incomplete_value": false,
      "site": "004faeac",
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
            "const:dfd:8"
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
      "004faee0",
      "PARAM",
      [
        "storage",
        "002b4dfd",
        null,
        "string"
      ]
    ],
    [
      "004faf0c",
      "PARAM",
      [
        "storage",
        "002ae924",
        null,
        "string"
      ]
    ],
    [
      "004faf6c",
      "PARAM",
      [
        "storage",
        "002a644e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004faee0",
      "PARAM",
      [
        "storage",
        "002b4e2e",
        null,
        "string"
      ]
    ],
    [
      "004faf0c",
      "PARAM",
      [
        "storage",
        "002ae8c8",
        null,
        "string"
      ]
    ],
    [
      "004faf6c",
      "PARAM",
      [
        "storage",
        "002a63f2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004faeac ["INT_ADD", "register:40f0:8", ["const:4faeac:8", "const:4:8"]]
- 004faeac ["CALL", null, ["callee:00c58030:8"]]
+ 004faeec ["INT_ADD", "register:40f0:8", ["const:4faeec:8", "const:4:8"]]
+ 004faeec ["CALL", null, ["callee:00c58030:8"]]
- 004faed4 ["INT_ADD", "register:40f0:8", ["const:4faed4:8", "const:4:8"]]
- 004faed4 ["CALL", null, ["callee:00c58040:8"]]
+ 004faf14 ["INT_ADD", "register:40f0:8", ["const:4faf14:8", "const:4:8"]]
+ 004faf14 ["CALL", null, ["callee:00c58040:8"]]
- 004faf0c ["INT_ADD", "register:40f0:8", ["const:4faf0c:8", "const:4:8"]]
- 004faf0c ["CALL", null, ["callee:00c58050:8"]]
+ 004faf4c ["INT_ADD", "register:40f0:8", ["const:4faf4c:8", "const:4:8"]]
+ 004faf4c ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-bd6a3b6ed00f18092eab75fea61156b3"></a>

### [`004fb088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fb088.md) → [`004fb0c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fb0c8.md) _ZN5Botan11Key_Not_SetC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58640.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c58710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58710.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.79% / 新版 86.79%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb110",
      "incomplete_value": true,
      "site": "004fb110",
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
      "definition_site": "004fb0d0",
      "incomplete_value": true,
      "site": "004fb0d0",
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
      "definition_site": "004fb12c",
      "incomplete_value": true,
      "site": "004fb134",
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
      "definition_site": "004fb0ec",
      "incomplete_value": true,
      "site": "004fb0f4",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb150",
      "incomplete_value": true,
      "site": "004fb154",
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
      "definition_site": "004fb110",
      "incomplete_value": true,
      "site": "004fb114",
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
      "004fb0e8",
      "PARAM",
      [
        "storage",
        "002a9c11",
        null,
        "string"
      ]
    ],
    [
      "004fb104",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ],
    [
      "004fb110",
      "DATA",
      [
        "storage",
        "00c67428",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fb0e8",
      "PARAM",
      [
        "storage",
        "002a9c40",
        null,
        "string"
      ]
    ],
    [
      "004fb104",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ],
    [
      "004fb110",
      "DATA",
      [
        "storage",
        "00c674f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fb0b8 ["INT_ADD", "register:40f0:8", ["const:4fb0b8:8", "const:4:8"]]
- 004fb0b8 ["CALL", null, ["callee:00c58180:8"]]
+ 004fb0f8 ["INT_ADD", "register:40f0:8", ["const:4fb0f8:8", "const:4:8"]]
+ 004fb0f8 ["CALL", null, ["callee:00c58180:8"]]
- 004fb0a8 ["COPY", "tmp:0:8", ["const:c11:8"]]
- 004fb0a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004fb0a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004fb0a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004fb0e8 ["COPY", "tmp:0:8", ["const:c40:8"]]
+ 004fb0e8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004fb0e8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004fb0e8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 004fb0c4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
- 004fb0c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fb104 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 004fb104 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f137c07e5be80c5b838d50d1b018ef25"></a>

### [`004fb190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fb190.md) → [`004fb1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fb1d0.md) _ZN5Botan16Policy_ViolationC1ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.79% / 新版 86.79%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb218",
      "incomplete_value": true,
      "site": "004fb218",
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
      "definition_site": "004fb1d8",
      "incomplete_value": true,
      "site": "004fb1d8",
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
      "definition_site": "004fb234",
      "incomplete_value": true,
      "site": "004fb23c",
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
      "definition_site": "004fb1f4",
      "incomplete_value": true,
      "site": "004fb1fc",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb258",
      "incomplete_value": true,
      "site": "004fb25c",
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
      "definition_site": "004fb218",
      "incomplete_value": true,
      "site": "004fb21c",
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
      "004fb1f0",
      "PARAM",
      [
        "storage",
        "002ba2e2",
        null,
        "string"
      ]
    ],
    [
      "004fb20c",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ],
    [
      "004fb218",
      "DATA",
      [
        "storage",
        "00c67428",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fb1f0",
      "PARAM",
      [
        "storage",
        "002ba28e",
        null,
        "string"
      ]
    ],
    [
      "004fb20c",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ],
    [
      "004fb218",
      "DATA",
      [
        "storage",
        "00c674f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fb1c0 ["INT_ADD", "register:40f0:8", ["const:4fb1c0:8", "const:4:8"]]
- 004fb1c0 ["CALL", null, ["callee:00c58180:8"]]
+ 004fb200 ["INT_ADD", "register:40f0:8", ["const:4fb200:8", "const:4:8"]]
+ 004fb200 ["CALL", null, ["callee:00c58180:8"]]
- 004fb1b0 ["COPY", "tmp:0:8", ["const:2e2:8"]]
- 004fb1b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004fb1b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004fb1b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004fb1f0 ["COPY", "tmp:0:8", ["const:28e:8"]]
+ 004fb1f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004fb1f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004fb1f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 004fb1cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
- 004fb1cc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fb20c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 004fb20c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2bd51d97e9dd33aa13f51a49c90b1e72"></a>

### [`004fb298`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fb298.md) → [`004fb2d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fb2d8.md) _ZN5Botan13PRNG_UnseededC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c59f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59f80.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5a050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a050.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.79% / 新版 86.79%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb320",
      "incomplete_value": true,
      "site": "004fb320",
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
      "definition_site": "004fb2e0",
      "incomplete_value": true,
      "site": "004fb2e0",
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
      "definition_site": "004fb33c",
      "incomplete_value": true,
      "site": "004fb344",
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
      "definition_site": "004fb2fc",
      "incomplete_value": true,
      "site": "004fb304",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb360",
      "incomplete_value": true,
      "site": "004fb364",
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
      "definition_site": "004fb320",
      "incomplete_value": true,
      "site": "004fb324",
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
      "004fb2f8",
      "PARAM",
      [
        "storage",
        "002c1153",
        null,
        "string"
      ]
    ],
    [
      "004fb314",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ],
    [
      "004fb320",
      "DATA",
      [
        "storage",
        "00c67428",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fb2f8",
      "PARAM",
      [
        "storage",
        "002c1193",
        null,
        "string"
      ]
    ],
    [
      "004fb314",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ],
    [
      "004fb320",
      "DATA",
      [
        "storage",
        "00c674f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fb2c8 ["INT_ADD", "register:40f0:8", ["const:4fb2c8:8", "const:4:8"]]
- 004fb2c8 ["CALL", null, ["callee:00c58180:8"]]
+ 004fb308 ["INT_ADD", "register:40f0:8", ["const:4fb308:8", "const:4:8"]]
+ 004fb308 ["CALL", null, ["callee:00c58180:8"]]
- 004fb2b8 ["COPY", "tmp:0:8", ["const:153:8"]]
- 004fb2b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004fb2b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004fb2b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004fb2f8 ["COPY", "tmp:0:8", ["const:193:8"]]
+ 004fb2f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004fb2f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004fb2f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 004fb2d4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
- 004fb2d4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fb314 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 004fb314 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c881b640f2c27551f18c6a900e8aaf8e"></a>

### [`004fb3a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fb3a0.md) → [`004fb3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fb3e0.md) _ZN5Botan19Algorithm_Not_FoundC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fa0.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c59070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59070.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.73% / 新版 88.73%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb454",
      "incomplete_value": true,
      "site": "004fb454",
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
      "definition_site": "004fb414",
      "incomplete_value": true,
      "site": "004fb414",
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
      "definition_site": "004fb47c",
      "incomplete_value": true,
      "site": "004fb480",
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
      "definition_site": "004fb43c",
      "incomplete_value": true,
      "site": "004fb440",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb49c",
      "incomplete_value": true,
      "site": "004fb4a0",
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
      "definition_site": "004fb45c",
      "incomplete_value": true,
      "site": "004fb460",
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
      "004fb400",
      "PARAM",
      [
        "storage",
        "002b1ca3",
        null,
        "string"
      ]
    ],
    [
      "004fb418",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ],
    [
      "004fb440",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fb400",
      "PARAM",
      [
        "storage",
        "002b1cd4",
        null,
        "string"
      ]
    ],
    [
      "004fb418",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ],
    [
      "004fb440",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fb3d0 ["INT_ADD", "register:40f0:8", ["const:4fb3d0:8", "const:4:8"]]
- 004fb3d0 ["CALL", null, ["callee:00c58180:8"]]
+ 004fb410 ["INT_ADD", "register:40f0:8", ["const:4fb410:8", "const:4:8"]]
+ 004fb410 ["CALL", null, ["callee:00c58180:8"]]
- 004fb3e0 ["INT_ADD", "register:40f0:8", ["const:4fb3e0:8", "const:4:8"]]
- 004fb3e0 ["CALL", null, ["callee:00c58040:8"]]
+ 004fb420 ["INT_ADD", "register:40f0:8", ["const:4fb420:8", "const:4:8"]]
+ 004fb420 ["CALL", null, ["callee:00c58040:8"]]
- 004fb400 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
- 004fb400 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fb440 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 004fb440 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-819b7912f6aadf3823fe3c3372517dd2"></a>

### [`004fb500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fb500.md) → [`004fb540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fb540.md) _ZN5Botan17No_Provider_FoundC1ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.06% / 新版 92.06%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb5b4",
      "incomplete_value": true,
      "site": "004fb5b4",
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
      "definition_site": "004fb574",
      "incomplete_value": true,
      "site": "004fb574",
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
      "definition_site": "004fb5ec",
      "incomplete_value": true,
      "site": "004fb5f0",
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
      "definition_site": "004fb5ac",
      "incomplete_value": true,
      "site": "004fb5b0",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fb560",
      "incomplete_value": false,
      "site": "004fb570",
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
            "const:523:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fb520",
      "incomplete_value": false,
      "site": "004fb530",
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
            "const:57f:8"
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
      "004fb560",
      "PARAM",
      [
        "storage",
        "002a557f",
        null,
        "string"
      ]
    ],
    [
      "004fb578",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ],
    [
      "004fb5a0",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fb560",
      "PARAM",
      [
        "storage",
        "002a5523",
        null,
        "string"
      ]
    ],
    [
      "004fb578",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ],
    [
      "004fb5a0",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fb530 ["INT_ADD", "register:40f0:8", ["const:4fb530:8", "const:4:8"]]
- 004fb530 ["CALL", null, ["callee:00c58180:8"]]
+ 004fb570 ["INT_ADD", "register:40f0:8", ["const:4fb570:8", "const:4:8"]]
+ 004fb570 ["CALL", null, ["callee:00c58180:8"]]
- 004fb540 ["INT_ADD", "register:40f0:8", ["const:4fb540:8", "const:4:8"]]
- 004fb540 ["CALL", null, ["callee:00c58040:8"]]
+ 004fb580 ["INT_ADD", "register:40f0:8", ["const:4fb580:8", "const:4:8"]]
+ 004fb580 ["CALL", null, ["callee:00c58040:8"]]
- 004fb520 ["COPY", "tmp:0:8", ["const:57f:8"]]
- 004fb520 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004fb520 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004fb520 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004fb560 ["COPY", "tmp:0:8", ["const:523:8"]]
+ 004fb560 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004fb560 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004fb560 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e88fa808278db66b52fa7f33ec41dc42"></a>

### [`004fb640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fb640.md) → [`004fb680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fb680.md) _ZN5Botan18Provider_Not_FoundC1ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c59770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59770.md) · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c59840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59840.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.21% / 新版 91.21%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb734",
      "incomplete_value": true,
      "site": "004fb734",
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
      "definition_site": "004fb6f4",
      "incomplete_value": true,
      "site": "004fb6f4",
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
      "definition_site": "004fb75c",
      "incomplete_value": true,
      "site": "004fb760",
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
      "definition_site": "004fb71c",
      "incomplete_value": true,
      "site": "004fb720",
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
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb78c",
      "incomplete_value": true,
      "site": "004fb790",
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
      "definition_site": "004fb74c",
      "incomplete_value": true,
      "site": "004fb750",
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
      "004fb6a8",
      "PARAM",
      [
        "storage",
        "002a202b",
        null,
        "string"
      ]
    ],
    [
      "004fb6c0",
      "PARAM",
      [
        "storage",
        "002ac84f",
        null,
        "string"
      ]
    ],
    [
      "004fb720",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fb6a8",
      "PARAM",
      [
        "storage",
        "002a1fde",
        null,
        "string"
      ]
    ],
    [
      "004fb6c0",
      "PARAM",
      [
        "storage",
        "002ac7f3",
        null,
        "string"
      ]
    ],
    [
      "004fb720",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fb678 ["INT_ADD", "register:40f0:8", ["const:4fb678:8", "const:4:8"]]
- 004fb678 ["CALL", null, ["callee:00c58180:8"]]
+ 004fb6b8 ["INT_ADD", "register:40f0:8", ["const:4fb6b8:8", "const:4:8"]]
+ 004fb6b8 ["CALL", null, ["callee:00c58180:8"]]
- 004fb688 ["INT_ADD", "register:40f0:8", ["const:4fb688:8", "const:4:8"]]
- 004fb688 ["CALL", null, ["callee:00c58040:8"]]
+ 004fb6c8 ["INT_ADD", "register:40f0:8", ["const:4fb6c8:8", "const:4:8"]]
+ 004fb6c8 ["CALL", null, ["callee:00c58040:8"]]
- 004fb6e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
- 004fb6e0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fb720 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 004fb720 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9e956a33082fa9f3b7dda8ac2170feab"></a>

### [`004fb808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fb808.md) → [`004fb848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fb848.md) _ZN5Botan22Invalid_Algorithm_NameC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c592a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c592a0.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c58780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58780.md)
- 新版 呼出元 1件 [`00c59370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59370.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c58850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb898",
      "incomplete_value": true,
      "site": "004fb89c",
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
      "definition_site": "004fb858",
      "incomplete_value": true,
      "site": "004fb85c",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb8b4",
      "incomplete_value": true,
      "site": "004fb8b8",
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
      "definition_site": "004fb874",
      "incomplete_value": true,
      "site": "004fb878",
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
      "definition_site": "004fb864",
      "incomplete_value": false,
      "site": "004fb874",
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
            "const:96c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fb824",
      "incomplete_value": false,
      "site": "004fb834",
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
            "const:9c8:8"
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
      "004fb864",
      "PARAM",
      [
        "storage",
        "002af9c8",
        null,
        "string"
      ]
    ],
    [
      "004fb87c",
      "PARAM",
      [
        "storage",
        "002a644e",
        null,
        "string"
      ]
    ],
    [
      "004fb890",
      "READ",
      [
        "storage",
        "00c9ad60",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fb864",
      "PARAM",
      [
        "storage",
        "002af96c",
        null,
        "string"
      ]
    ],
    [
      "004fb87c",
      "PARAM",
      [
        "storage",
        "002a63f2",
        null,
        "string"
      ]
    ],
    [
      "004fb890",
      "READ",
      [
        "storage",
        "00c9ae30",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fb834 ["INT_ADD", "register:40f0:8", ["const:4fb834:8", "const:4:8"]]
- 004fb834 ["CALL", null, ["callee:00c58180:8"]]
+ 004fb874 ["INT_ADD", "register:40f0:8", ["const:4fb874:8", "const:4:8"]]
+ 004fb874 ["CALL", null, ["callee:00c58180:8"]]
- 004fb848 ["INT_ADD", "register:40f0:8", ["const:4fb848:8", "const:4:8"]]
- 004fb848 ["CALL", null, ["callee:00c58850:8"]]
+ 004fb888 ["INT_ADD", "register:40f0:8", ["const:4fb888:8", "const:4:8"]]
+ 004fb888 ["CALL", null, ["callee:00c58850:8"]]
- 004fb824 ["COPY", "tmp:0:8", ["const:9c8:8"]]
- 004fb824 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004fb824 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004fb824 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004fb864 ["COPY", "tmp:0:8", ["const:96c:8"]]
+ 004fb864 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004fb864 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004fb864 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5d9cdfea3a57ce6c006b75791b806393"></a>

### [`004fb8cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fb8cc.md) → [`004fb90c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fb90c.md) _ZN5Botan14Encoding_ErrorC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58830.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c58780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58780.md)
- 新版 呼出元 1件 [`00c58900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58900.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c58850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb95c",
      "incomplete_value": true,
      "site": "004fb960",
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
      "definition_site": "004fb91c",
      "incomplete_value": true,
      "site": "004fb920",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fb978",
      "incomplete_value": true,
      "site": "004fb97c",
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
      "definition_site": "004fb938",
      "incomplete_value": true,
      "site": "004fb93c",
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
      "definition_site": "004fb928",
      "incomplete_value": false,
      "site": "004fb938",
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
            "const:c40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fb8e8",
      "incomplete_value": false,
      "site": "004fb8f8",
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
            "const:c9c:8"
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
      "004fb928",
      "PARAM",
      [
        "storage",
        "002a8c9c",
        null,
        "string"
      ]
    ],
    [
      "004fb940",
      "PARAM",
      [
        "storage",
        "002a644e",
        null,
        "string"
      ]
    ],
    [
      "004fb954",
      "READ",
      [
        "storage",
        "00c9ad60",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fb928",
      "PARAM",
      [
        "storage",
        "002a8c40",
        null,
        "string"
      ]
    ],
    [
      "004fb940",
      "PARAM",
      [
        "storage",
        "002a63f2",
        null,
        "string"
      ]
    ],
    [
      "004fb954",
      "READ",
      [
        "storage",
        "00c9ae30",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fb8f8 ["INT_ADD", "register:40f0:8", ["const:4fb8f8:8", "const:4:8"]]
- 004fb8f8 ["CALL", null, ["callee:00c58180:8"]]
+ 004fb938 ["INT_ADD", "register:40f0:8", ["const:4fb938:8", "const:4:8"]]
+ 004fb938 ["CALL", null, ["callee:00c58180:8"]]
- 004fb90c ["INT_ADD", "register:40f0:8", ["const:4fb90c:8", "const:4:8"]]
- 004fb90c ["CALL", null, ["callee:00c58850:8"]]
+ 004fb94c ["INT_ADD", "register:40f0:8", ["const:4fb94c:8", "const:4:8"]]
+ 004fb94c ["CALL", null, ["callee:00c58850:8"]]
- 004fb8e8 ["COPY", "tmp:0:8", ["const:c9c:8"]]
- 004fb8e8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004fb8e8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004fb8e8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004fb928 ["COPY", "tmp:0:8", ["const:c40:8"]]
+ 004fb928 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004fb928 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004fb928 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4aec57f2909f3fac1e04865a4114e85d"></a>

### [`004fb990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fb990.md) → [`004fb9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fb9d0.md) _ZN5Botan14Decoding_ErrorC1ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c59df0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59df0.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c58780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58780.md)
- 新版 呼出元 1件 [`00c59ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ec0.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c58850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.89% / 新版 95.89%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fba74",
      "incomplete_value": true,
      "site": "004fba78",
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
      "definition_site": "004fba34",
      "incomplete_value": true,
      "site": "004fba38",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fbaa0",
      "incomplete_value": true,
      "site": "004fbaa4",
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
      "definition_site": "004fba60",
      "incomplete_value": true,
      "site": "004fba64",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fb9f0",
      "incomplete_value": false,
      "site": "004fba04",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fb9b0",
      "incomplete_value": false,
      "site": "004fb9c4",
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
            "const:e24:8"
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
      "004fb9f0",
      "PARAM",
      [
        "storage",
        "002bfe24",
        null,
        "string"
      ]
    ],
    [
      "004fba0c",
      "PARAM",
      [
        "storage",
        "002a2045",
        null,
        "string"
      ]
    ],
    [
      "004fba58",
      "PARAM",
      [
        "storage",
        "002a644e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004fb9f0",
      "PARAM",
      [
        "storage",
        "002bfdd0",
        null,
        "string"
      ]
    ],
    [
      "004fba0c",
      "PARAM",
      [
        "storage",
        "002a1ff8",
        null,
        "string"
      ]
    ],
    [
      "004fba58",
      "PARAM",
      [
        "storage",
        "002a63f2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fb9c4 ["INT_ADD", "register:40f0:8", ["const:4fb9c4:8", "const:4:8"]]
- 004fb9c4 ["CALL", null, ["callee:00c58180:8"]]
+ 004fba04 ["INT_ADD", "register:40f0:8", ["const:4fba04:8", "const:4:8"]]
+ 004fba04 ["CALL", null, ["callee:00c58180:8"]]
- 004fb9d4 ["INT_ADD", "register:40f0:8", ["const:4fb9d4:8", "const:4:8"]]
- 004fb9d4 ["CALL", null, ["callee:00c58040:8"]]
+ 004fba14 ["INT_ADD", "register:40f0:8", ["const:4fba14:8", "const:4:8"]]
+ 004fba14 ["CALL", null, ["callee:00c58040:8"]]
- 004fb9f8 ["INT_ADD", "register:40f0:8", ["const:4fb9f8:8", "const:4:8"]]
- 004fb9f8 ["CALL", null, ["callee:00c58040:8"]]
+ 004fba38 ["INT_ADD", "register:40f0:8", ["const:4fba38:8", "const:4:8"]]
+ 004fba38 ["CALL", null, ["callee:00c58040:8"]]
~~~


<a id="compare-966ff20fd69a3810e61462cc77aa8f6b"></a>

### [`004fbb34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fbb34.md) → [`004fbb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fbb74.md) _ZN5Botan17Integrity_FailureC1ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.11% / 新版 91.11%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fbbbc",
      "incomplete_value": true,
      "site": "004fbbbc",
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
      "definition_site": "004fbb7c",
      "incomplete_value": true,
      "site": "004fbb7c",
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
      "definition_site": "004fbbf8",
      "incomplete_value": true,
      "site": "004fbbfc",
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
      "definition_site": "004fbbb8",
      "incomplete_value": true,
      "site": "004fbbbc",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fbb94",
      "incomplete_value": false,
      "site": "004fbba4",
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
            "const:630:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fbb54",
      "incomplete_value": false,
      "site": "004fbb64",
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
            "const:68c:8"
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
      "004fbb94",
      "PARAM",
      [
        "storage",
        "002a668c",
        null,
        "string"
      ]
    ],
    [
      "004fbbb0",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ],
    [
      "004fbbbc",
      "DATA",
      [
        "storage",
        "00c67428",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fbb94",
      "PARAM",
      [
        "storage",
        "002a6630",
        null,
        "string"
      ]
    ],
    [
      "004fbbb0",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ],
    [
      "004fbbbc",
      "DATA",
      [
        "storage",
        "00c674f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fbb64 ["INT_ADD", "register:40f0:8", ["const:4fbb64:8", "const:4:8"]]
- 004fbb64 ["CALL", null, ["callee:00c58180:8"]]
+ 004fbba4 ["INT_ADD", "register:40f0:8", ["const:4fbba4:8", "const:4:8"]]
+ 004fbba4 ["CALL", null, ["callee:00c58180:8"]]
- 004fbb54 ["COPY", "tmp:0:8", ["const:68c:8"]]
- 004fbb54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004fbb54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004fbb54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004fbb94 ["COPY", "tmp:0:8", ["const:630:8"]]
+ 004fbb94 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004fbb94 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004fbb94 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 004fbb70 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
- 004fbb70 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fbbb0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 004fbbb0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1db0edb3bf57cce7f5ed6558a103cc42"></a>

### [`004fbc1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fbc1c.md) → [`004fbc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fbc5c.md) _ZN5Botan11Invalid_OIDC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c587e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c587e0.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c58780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58780.md)
- 新版 呼出元 1件 [`00c588b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c588b0.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c58850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fbcc0",
      "incomplete_value": true,
      "site": "004fbcc4",
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
      "definition_site": "004fbc80",
      "incomplete_value": true,
      "site": "004fbc84",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fbce0",
      "incomplete_value": true,
      "site": "004fbce4",
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
      "definition_site": "004fbca0",
      "incomplete_value": true,
      "site": "004fbca4",
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
      "definition_site": "004fbcfc",
      "incomplete_value": true,
      "site": "004fbd00",
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
      "definition_site": "004fbcbc",
      "incomplete_value": true,
      "site": "004fbcc0",
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
      "004fbc78",
      "PARAM",
      [
        "storage",
        "002ba2f5",
        null,
        "string"
      ]
    ],
    [
      "004fbc90",
      "PARAM",
      [
        "storage",
        "002bfe24",
        null,
        "string"
      ]
    ],
    [
      "004fbca4",
      "PARAM",
      [
        "storage",
        "002a644e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004fbc78",
      "PARAM",
      [
        "storage",
        "002ba2a1",
        null,
        "string"
      ]
    ],
    [
      "004fbc90",
      "PARAM",
      [
        "storage",
        "002bfdd0",
        null,
        "string"
      ]
    ],
    [
      "004fbca4",
      "PARAM",
      [
        "storage",
        "002a63f2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fbc48 ["INT_ADD", "register:40f0:8", ["const:4fbc48:8", "const:4:8"]]
- 004fbc48 ["CALL", null, ["callee:00c58180:8"]]
+ 004fbc88 ["INT_ADD", "register:40f0:8", ["const:4fbc88:8", "const:4:8"]]
+ 004fbc88 ["CALL", null, ["callee:00c58180:8"]]
- 004fbc5c ["INT_ADD", "register:40f0:8", ["const:4fbc5c:8", "const:4:8"]]
- 004fbc5c ["CALL", null, ["callee:00c58180:8"]]
+ 004fbc9c ["INT_ADD", "register:40f0:8", ["const:4fbc9c:8", "const:4:8"]]
+ 004fbc9c ["CALL", null, ["callee:00c58180:8"]]
- 004fbc64 ["COPY", "tmp:0:8", ["const:44e:8"]]
- 004fbc64 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 004fbc64 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 004fbc64 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 004fbca4 ["COPY", "tmp:0:8", ["const:3f2:8"]]
+ 004fbca4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 004fbca4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 004fbca4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-73adf72383b24232a79af276a276466b"></a>

### [`004fbd2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fbd2c.md) → [`004fbd6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fbd6c.md) _ZN5Botan15Stream_IO_ErrorC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c587b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c587b0.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c58880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58880.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.11% / 新版 91.11%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fbdb4",
      "incomplete_value": true,
      "site": "004fbdb4",
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
      "definition_site": "004fbd74",
      "incomplete_value": true,
      "site": "004fbd74",
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
      "definition_site": "004fbdf0",
      "incomplete_value": true,
      "site": "004fbdf4",
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
      "definition_site": "004fbdb0",
      "incomplete_value": true,
      "site": "004fbdb4",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fbd8c",
      "incomplete_value": false,
      "site": "004fbd9c",
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
            "const:e39:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fbd4c",
      "incomplete_value": false,
      "site": "004fbd5c",
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
            "const:e08:8"
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
      "004fbd8c",
      "PARAM",
      [
        "storage",
        "002b4e08",
        null,
        "string"
      ]
    ],
    [
      "004fbda8",
      "READ",
      [
        "storage",
        "00c9add0",
        null,
        "pointer"
      ]
    ],
    [
      "004fbdb4",
      "DATA",
      [
        "storage",
        "00c67428",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fbd8c",
      "PARAM",
      [
        "storage",
        "002b4e39",
        null,
        "string"
      ]
    ],
    [
      "004fbda8",
      "READ",
      [
        "storage",
        "00c9aea0",
        null,
        "pointer"
      ]
    ],
    [
      "004fbdb4",
      "DATA",
      [
        "storage",
        "00c674f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fbd5c ["INT_ADD", "register:40f0:8", ["const:4fbd5c:8", "const:4:8"]]
- 004fbd5c ["CALL", null, ["callee:00c58180:8"]]
+ 004fbd9c ["INT_ADD", "register:40f0:8", ["const:4fbd9c:8", "const:4:8"]]
+ 004fbd9c ["CALL", null, ["callee:00c58180:8"]]
- 004fbd4c ["COPY", "tmp:0:8", ["const:e08:8"]]
- 004fbd4c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004fbd4c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004fbd4c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004fbd8c ["COPY", "tmp:0:8", ["const:e39:8"]]
+ 004fbd8c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004fbd8c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004fbd8c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 004fbd68 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
- 004fbd68 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fbda8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 004fbda8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ddc8aa9bf26ee94d6a3ed2b48218d6dd"></a>

### [`004fbe14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fbe14.md) → [`004fbe54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fbe54.md) _ZN5Botan17Self_Test_FailureC1ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c59820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59820.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c598f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fbea8",
      "incomplete_value": true,
      "site": "004fbeac",
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
      "definition_site": "004fbe68",
      "incomplete_value": true,
      "site": "004fbe6c",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fbe70",
      "incomplete_value": false,
      "site": "004fbe80",
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
            "const:cf9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fbe30",
      "incomplete_value": false,
      "site": "004fbe40",
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
            "const:cc8:8"
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
      "004fbe70",
      "PARAM",
      [
        "storage",
        "002b1cc8",
        null,
        "string"
      ]
    ],
    [
      "004fbea4",
      "READ",
      [
        "storage",
        "00c9b0b0",
        null,
        "pointer"
      ]
    ],
    [
      "004fbeac",
      "DATA",
      [
        "storage",
        "00c676f8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fbe70",
      "PARAM",
      [
        "storage",
        "002b1cf9",
        null,
        "string"
      ]
    ],
    [
      "004fbea4",
      "READ",
      [
        "storage",
        "00c9b180",
        null,
        "pointer"
      ]
    ],
    [
      "004fbeac",
      "DATA",
      [
        "storage",
        "00c677c8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fbe40 ["INT_ADD", "register:40f0:8", ["const:4fbe40:8", "const:4:8"]]
- 004fbe40 ["CALL", null, ["callee:00c58180:8"]]
+ 004fbe80 ["INT_ADD", "register:40f0:8", ["const:4fbe80:8", "const:4:8"]]
+ 004fbe80 ["CALL", null, ["callee:00c58180:8"]]
- 004fbe30 ["COPY", "tmp:0:8", ["const:cc8:8"]]
- 004fbe30 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004fbe30 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004fbe30 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004fbe70 ["COPY", "tmp:0:8", ["const:cf9:8"]]
+ 004fbe70 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004fbe70 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004fbe70 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 004fbe4c ["INT_ADD", "register:40f0:8", ["const:4fbe4c:8", "const:4:8"]]
- 004fbe4c ["CALL", null, ["callee:00c598f0:8"]]
+ 004fbe8c ["INT_ADD", "register:40f0:8", ["const:4fbe8c:8", "const:4:8"]]
+ 004fbe8c ["CALL", null, ["callee:00c598f0:8"]]
~~~


<a id="compare-2fad9c394eedf8ee1c153bcd4227c5ee"></a>

### [`004fbec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fbec0.md) → [`004fbf00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fbf00.md) _ZN5Botan15Not_ImplementedC2ERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c594e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c594e0.md) · 呼出先 1件 [`00c58780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58780.md)
- 新版 呼出元 1件 [`00c595b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c595b0.md) · 呼出先 1件 [`00c58850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fbf28",
      "incomplete_value": true,
      "site": "004fbf2c",
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
      "definition_site": "004fbee8",
      "incomplete_value": true,
      "site": "004fbeec",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fbf14",
      "incomplete_value": false,
      "site": "004fbf1c",
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
            "const:985:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fbed4",
      "incomplete_value": false,
      "site": "004fbedc",
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
            "const:9e1:8"
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
      "004fbf14",
      "PARAM",
      [
        "storage",
        "002af9e1",
        null,
        "string"
      ]
    ],
    [
      "004fbf24",
      "READ",
      [
        "storage",
        "00c9b0b8",
        null,
        "pointer"
      ]
    ],
    [
      "004fbf2c",
      "DATA",
      [
        "storage",
        "00c67720",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fbf14",
      "PARAM",
      [
        "storage",
        "002af985",
        null,
        "string"
      ]
    ],
    [
      "004fbf24",
      "READ",
      [
        "storage",
        "00c9b188",
        null,
        "pointer"
      ]
    ],
    [
      "004fbf2c",
      "DATA",
      [
        "storage",
        "00c677f0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fbedc ["INT_ADD", "register:40f0:8", ["const:4fbedc:8", "const:4:8"]]
- 004fbedc ["CALL", null, ["callee:00c58850:8"]]
+ 004fbf1c ["INT_ADD", "register:40f0:8", ["const:4fbf1c:8", "const:4:8"]]
+ 004fbf1c ["CALL", null, ["callee:00c58850:8"]]
- 004fbed4 ["COPY", "tmp:0:8", ["const:9e1:8"]]
- 004fbed4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 004fbed4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 004fbed4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 004fbf14 ["COPY", "tmp:0:8", ["const:985:8"]]
+ 004fbf14 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 004fbf14 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 004fbf14 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 004fbee4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b8:8"]]
- 004fbee4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fbf24 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:188:8"]]
+ 004fbf24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-408804c0f754911fd1bf25a02a8bf971"></a>

### [`004fbefc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fb/004fbefc.md) → [`004fbf3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fbf3c.md) _ZN5Botan19get_files_recursiveERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c59830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59830.md) · 呼出先 20件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00539f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00539/00539f1c.md) [`0053a0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0053a/0053a0b4.md)
- 新版 呼出元 1件 [`00c59900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59900.md) · 呼出先 20件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00539f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00539/00539f5c.md) [`0053a0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053a0f4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.11% / 新版 99.11%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004fc160",
      "incomplete_value": false,
      "site": "004fc160",
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
            "const:418:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fc120",
      "incomplete_value": false,
      "site": "004fc120",
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
            "const:348:8"
          ]
        ]
      ]
    },
    "ordinal": 36,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004fc174",
      "incomplete_value": true,
      "site": "004fc174",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
    "old": {
      "definition_site": "004fc134",
      "incomplete_value": true,
      "site": "004fc134",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
      "004fc160",
      "DATA",
      [
        "storage",
        "00c6a348",
        null,
        "undefined *"
      ]
    ],
    [
      "004fc170",
      "READ",
      [
        "storage",
        "00c9b0c0",
        null,
        "pointer"
      ]
    ],
    [
      "004fc4cc",
      "READ",
      [
        "storage",
        "00c6a378",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004fc160",
      "DATA",
      [
        "storage",
        "00c6a418",
        null,
        "undefined *"
      ]
    ],
    [
      "004fc170",
      "READ",
      [
        "storage",
        "00c9b190",
        null,
        "pointer"
      ]
    ],
    [
      "004fc4cc",
      "READ",
      [
        "storage",
        "00c6a448",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fc0e0 ["INT_ADD", "register:40f0:8", ["const:4fc0e0:8", "const:4:8"]]
- 004fc0e0 ["CALL", null, ["callee:00c57f80:8"]]
+ 004fc120 ["INT_ADD", "register:40f0:8", ["const:4fc120:8", "const:4:8"]]
+ 004fc120 ["CALL", null, ["callee:00c57f80:8"]]
- 004fbf58 ["INT_ADD", "register:40f0:8", ["const:4fbf58:8", "const:4:8"]]
- 004fbf58 ["CALL", null, ["callee:0053a0f4:8"]]
+ 004fbf98 ["INT_ADD", "register:40f0:8", ["const:4fbf98:8", "const:4:8"]]
+ 004fbf98 ["CALL", null, ["callee:0053a0f4:8"]]
- 004fbfc4 ["INT_ADD", "register:40f0:8", ["const:4fbfc4:8", "const:4:8"]]
- 004fbfc4 ["CALL", null, ["callee:0043bb60:8"]]
+ 004fc004 ["INT_ADD", "register:40f0:8", ["const:4fc004:8", "const:4:8"]]
+ 004fc004 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-0f61468889a3294c91e081bf97d633f0"></a>

### [`004fc774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fc/004fc774.md) → [`004fc7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fc/004fc7b4.md) _ZN5Botan15allocate_memoryEmm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c59870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59870.md) · 呼出先 5件 [`00c37ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37ba4.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c58a30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58a30.md) [`00c58a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58a40.md)
- 新版 呼出元 1件 [`00c59940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59940.md) · 呼出先 5件 [`00c37c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37c40.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c58b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58b00.md) [`00c58b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58b10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fc7f0",
      "incomplete_value": true,
      "site": "004fc7f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:eb8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fc7b0",
      "incomplete_value": true,
      "site": "004fc7b8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:de8:8"
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
      "definition_site": "004fc7f4",
      "incomplete_value": true,
      "site": "004fc7f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ec0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fc7b4",
      "incomplete_value": true,
      "site": "004fc7b8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:df0:8"
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
      "004fc7f0",
      "READ",
      [
        "storage",
        "00c9ade8",
        null,
        "pointer"
      ]
    ],
    [
      "004fc7f0",
      "PARAM",
      [
        "storage",
        "00c96698",
        "std::bad_alloc::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "004fc7f4",
      "READ",
      [
        "storage",
        "00c9adf0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fc7f0",
      "READ",
      [
        "storage",
        "00c9aeb8",
        null,
        "pointer"
      ]
    ],
    [
      "004fc7f0",
      "PARAM",
      [
        "storage",
        "00c96768",
        "std::bad_alloc::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "004fc7f4",
      "READ",
      [
        "storage",
        "00c9aec0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fc7b8 ["INT_ADD", "register:40f0:8", ["const:4fc7b8:8", "const:4:8"]]
- 004fc7b8 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004fc7f8 ["INT_ADD", "register:40f0:8", ["const:4fc7f8:8", "const:4:8"]]
+ 004fc7f8 ["CALL", null, ["callee:00c57fe0:8"]]
- 004fc780 ["INT_ADD", "register:40f0:8", ["const:4fc780:8", "const:4:8"]]
- 004fc780 ["CALL", null, ["callee:00c58b00:8"]]
+ 004fc7c0 ["INT_ADD", "register:40f0:8", ["const:4fc7c0:8", "const:4:8"]]
+ 004fc7c0 ["CALL", null, ["callee:00c58b00:8"]]
- 004fc798 ["INT_ADD", "register:40f0:8", ["const:4fc798:8", "const:4:8"]]
- 004fc798 ["CALL", null, ["callee:00c57fc0:8"]]
+ 004fc7d8 ["INT_ADD", "register:40f0:8", ["const:4fc7d8:8", "const:4:8"]]
+ 004fc7d8 ["CALL", null, ["callee:00c57fc0:8"]]
~~~


<a id="compare-348514da668ca5c48b4c3052fb7eb0ce"></a>

### [`004fc7bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fc/004fc7bc.md) → [`004fc7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fc/004fc7fc.md) _ZN5Botan17deallocate_memoryEPvmm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c59880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59880.md) · 呼出先 2件 [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`0112a058`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0112a/0112a058.md)
- 新版 呼出元 1件 [`00c59950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59950.md) · 呼出先 2件 [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`0112a058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0112a/0112a058.md)

変更の種類 call_target, constant, operands_and_dependencies

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "004fc820",
      "incomplete_value": true,
      "site": "004fc820",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
              ],
              [
                "leaf",
                "const:808:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fc7e0",
      "incomplete_value": true,
      "site": "004fc7e0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c67000:8"
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "004fc818",
      "READ",
      [
        "storage",
        "00c67738",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fc818",
      "READ",
      [
        "storage",
        "00c67808",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fc7e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 004fc7e0 ["INT_ADD", "register:40f0:8", ["const:4fc7e0:8", "const:4:8"]]
- 004fc7e0 ["CALLIND", null, ["register:0:8"]]
+ 004fc820 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004fc820 ["INT_ADD", "register:40f0:8", ["const:4fc820:8", "const:4:8"]]
+ 004fc820 ["CALLIND", null, ["register:0:8"]]
- 004fc7d8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:738:8"]]
- 004fc7d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004fc818 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:808:8"]]
+ 004fc818 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3c49732097949ea6d3f1e81d13bc116a"></a>

### [`004fc818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fc/004fc818.md) → [`004fc858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fc/004fc858.md) _ZN5Botan2OS25run_cpu_instruction_probeENSt6__ndk18functionIFivEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`004fca18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fc/004fca18.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`004fca58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fc/004fca58.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.28% / 新版 95.28%

優先判定に残った影響 `call_argument_candidate` 5件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004fc88c",
      "incomplete_value": false,
      "site": "004fc894",
      "value": [
        "leaf",
        "const:4fca58:8"
      ]
    },
    "old": {
      "definition_site": "004fc84c",
      "incomplete_value": false,
      "site": "004fc854",
      "value": [
        "leaf",
        "const:4fca18:8"
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fc8b8",
      "incomplete_value": false,
      "site": "004fc8c0",
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
            "const:398:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fc878",
      "incomplete_value": false,
      "site": "004fc880",
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
            "const:298:8"
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
      "definition_site": "004fc944",
      "incomplete_value": false,
      "site": "004fc94c",
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
            "const:995:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fc904",
      "incomplete_value": false,
      "site": "004fc90c",
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
            "const:9f1:8"
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
      "004fc894",
      "DATA",
      [
        "storage",
        "004fca18",
        null,
        null
      ]
    ],
    [
      "004fc8b8",
      "PARAM",
      [
        "storage",
        "00ca5298",
        null,
        null
      ]
    ],
    [
      "004fc944",
      "PARAM",
      [
        "storage",
        "002af9f1",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004fc894",
      "DATA",
      [
        "storage",
        "004fca58",
        null,
        null
      ]
    ],
    [
      "004fc8b8",
      "PARAM",
      [
        "storage",
        "00ca5398",
        null,
        null
      ]
    ],
    [
      "004fc944",
      "PARAM",
      [
        "storage",
        "002af995",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fc880 ["INT_ADD", "register:40f0:8", ["const:4fc880:8", "const:4:8"]]
- 004fc880 ["CALL", null, ["callee:00c599a0:8"]]
+ 004fc8c0 ["INT_ADD", "register:40f0:8", ["const:4fc8c0:8", "const:4:8"]]
+ 004fc8c0 ["CALL", null, ["callee:00c599a0:8"]]
- 004fc8c0 ["INT_ADD", "register:40f0:8", ["const:4fc8c0:8", "const:4:8"]]
- 004fc8c0 ["CALL", null, ["callee:00c59990:8"]]
+ 004fc900 ["INT_ADD", "register:40f0:8", ["const:4fc900:8", "const:4:8"]]
+ 004fc900 ["CALL", null, ["callee:00c59990:8"]]
- 004fc90c ["INT_ADD", "register:40f0:8", ["const:4fc90c:8", "const:4:8"]]
- 004fc90c ["CALL", null, ["callee:0043de18:8"]]
+ 004fc94c ["INT_ADD", "register:40f0:8", ["const:4fc94c:8", "const:4:8"]]
+ 004fc94c ["CALL", null, ["callee:0043de18:8"]]
~~~


<a id="compare-b2820b9d786d94a7f8adae1ba33c5a8f"></a>

### [`004fca30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004fc/004fca30.md) → [`004fca70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fc/004fca70.md) _ZN5Botan9to_uint16ERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00535868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535868.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`005358a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005358a8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004fcad4",
      "incomplete_value": false,
      "site": "004fcadc",
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
            "const:195:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fca94",
      "incomplete_value": false,
      "site": "004fca9c",
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
            "const:1e2:8"
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
      "definition_site": "004fcb10",
      "incomplete_value": true,
      "site": "004fcb1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004fcad0",
      "incomplete_value": true,
      "site": "004fcadc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d30:8"
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
      "definition_site": "004fcb0c",
      "incomplete_value": false,
      "site": "004fcb1c",
      "value": [
        "leaf",
        "const:5358a8:8"
      ]
    },
    "old": {
      "definition_site": "004fcacc",
      "incomplete_value": false,
      "site": "004fcadc",
      "value": [
        "leaf",
        "const:535868:8"
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
      "004fcad4",
      "PARAM",
      [
        "storage",
        "002a31e2",
        null,
        "string"
      ]
    ],
    [
      "004fcb0c",
      "PARAM",
      [
        "storage",
        "00535868",
        null,
        null
      ]
    ],
    [
      "004fcb10",
      "READ",
      [
        "storage",
        "00c9ad30",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004fcad4",
      "PARAM",
      [
        "storage",
        "002a3195",
        null,
        "string"
      ]
    ],
    [
      "004fcb0c",
      "PARAM",
      [
        "storage",
        "005358a8",
        null,
        null
      ]
    ],
    [
      "004fcb10",
      "READ",
      [
        "storage",
        "00c9ae00",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004fca9c ["INT_ADD", "register:40f0:8", ["const:4fca9c:8", "const:4:8"]]
- 004fca9c ["CALL", null, ["callee:0043de18:8"]]
+ 004fcadc ["INT_ADD", "register:40f0:8", ["const:4fcadc:8", "const:4:8"]]
+ 004fcadc ["CALL", null, ["callee:0043de18:8"]]
- 004fcadc ["INT_ADD", "register:40f0:8", ["const:4fcadc:8", "const:4:8"]]
- 004fcadc ["CALL", null, ["callee:00c57fe0:8"]]
+ 004fcb1c ["INT_ADD", "register:40f0:8", ["const:4fcb1c:8", "const:4:8"]]
+ 004fcb1c ["CALL", null, ["callee:00c57fe0:8"]]
- 004fca50 ["INT_ADD", "register:40f0:8", ["const:4fca50:8", "const:4:8"]]
- 004fca50 ["CALL", null, ["callee:00c588c0:8"]]
+ 004fca90 ["INT_ADD", "register:40f0:8", ["const:4fca90:8", "const:4:8"]]
+ 004fca90 ["CALL", null, ["callee:00c588c0:8"]]
~~~


