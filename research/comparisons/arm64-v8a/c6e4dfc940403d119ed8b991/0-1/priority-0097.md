# v16.0.1 → v16.0.2 · 最優先の変更候補 (97)

[一覧の目次](README.md)

<a id="compare-ca019b9092a7f03a2dcbbd7b52a005fb"></a>

### [`00c001b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c001b0.md) → [`00c0024c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c0024c.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEEC1EPNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.27% / 新版 77.27%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c00278",
      "incomplete_value": true,
      "site": "00c00278",
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
      "definition_site": "00c001dc",
      "incomplete_value": true,
      "site": "00c001dc",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0027c",
      "incomplete_value": true,
      "site": "00c0027c",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c001e0",
      "incomplete_value": true,
      "site": "00c001e0",
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
            "const:18:8"
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
      "00c00268",
      "READ",
      [
        "storage",
        "00c9bb38",
        null,
        "pointer"
      ]
    ],
    [
      "00c00278",
      "DATA",
      [
        "storage",
        "00c93028",
        null,
        "pointer"
      ]
    ],
    [
      "00c0027c",
      "DATA",
      [
        "storage",
        "00c93000",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c00268",
      "READ",
      [
        "storage",
        "00c9bc08",
        null,
        "pointer"
      ]
    ],
    [
      "00c00278",
      "DATA",
      [
        "storage",
        "00c930f8",
        null,
        "pointer"
      ]
    ],
    [
      "00c0027c",
      "DATA",
      [
        "storage",
        "00c930d0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c001cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b38:8"]]
- 00c001cc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c00268 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c08:8"]]
+ 00c00268 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c001e8 ["INT_ADD", "register:40f0:8", ["const:c001e8:8", "const:4:8"]]
- 00c001e8 ["CALL", null, ["callee:00c582b0:8"]]
+ 00c00284 ["INT_ADD", "register:40f0:8", ["const:c00284:8", "const:4:8"]]
+ 00c00284 ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-c5d4705305bb0bc3df0dedadb67e62db"></a>

### [`00c0031c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c0031c.md) → [`00c003b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c003b8.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE6sentryC1ERS3_b

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e3f0.md)
- 新版 呼出元 1件 [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.16% / 新版 99.16%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c00448",
      "incomplete_value": true,
      "site": "00c0044c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c003ac",
      "incomplete_value": true,
      "site": "00c003b0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c00448",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c00448",
      "PARAM",
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
      "00c00448",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c00448",
      "PARAM",
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
- 00c003b0 ["INT_ADD", "register:40f0:8", ["const:c003b0:8", "const:4:8"]]
- 00c003b0 ["CALL", null, ["callee:00c58350:8"]]
+ 00c0044c ["INT_ADD", "register:40f0:8", ["const:c0044c:8", "const:4:8"]]
+ 00c0044c ["CALL", null, ["callee:00c58350:8"]]
- 00c0037c ["INT_ADD", "register:40f0:8", ["const:c0037c:8", "const:4:8"]]
- 00c0037c ["CALL", null, ["callee:00c5e4c0:8"]]
+ 00c00418 ["INT_ADD", "register:40f0:8", ["const:c00418:8", "const:4:8"]]
+ 00c00418 ["CALL", null, ["callee:00c5e4c0:8"]]
- 00c003a0 ["INT_ADD", "register:40f0:8", ["const:c003a0:8", "const:4:8"]]
- 00c003a0 ["CALL", null, ["callee:00c58340:8"]]
+ 00c0043c ["INT_ADD", "register:40f0:8", ["const:c0043c:8", "const:4:8"]]
+ 00c0043c ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-39ef0561304c82ee40fbc6341b2e7762"></a>

### [`00c00824`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00824.md) → [`00c008c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c008c0.md) FUN_00c008c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0081c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c0081c.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c008b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c008b8.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c00914",
      "incomplete_value": true,
      "site": "00c00918",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c00878",
      "incomplete_value": true,
      "site": "00c0087c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c00914",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c00914",
      "PARAM",
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
      "00c00914",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c00914",
      "PARAM",
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
- 00c0087c ["INT_ADD", "register:40f0:8", ["const:c0087c:8", "const:4:8"]]
- 00c0087c ["CALL", null, ["callee:00c58350:8"]]
+ 00c00918 ["INT_ADD", "register:40f0:8", ["const:c00918:8", "const:4:8"]]
+ 00c00918 ["CALL", null, ["callee:00c58350:8"]]
- 00c00850 ["INT_ADD", "register:40f0:8", ["const:c00850:8", "const:4:8"]]
- 00c00850 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c008ec ["INT_ADD", "register:40f0:8", ["const:c008ec:8", "const:4:8"]]
+ 00c008ec ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c0086c ["INT_ADD", "register:40f0:8", ["const:c0086c:8", "const:4:8"]]
- 00c0086c ["CALL", null, ["callee:00c58340:8"]]
+ 00c00908 ["INT_ADD", "register:40f0:8", ["const:c00908:8", "const:4:8"]]
+ 00c00908 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-27448f989b2f2e03792aa33c0b2e390c"></a>

### [`00c0095c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c0095c.md) → [`00c009f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c009f8.md) FUN_00c009f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c00954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00954.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c009f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c009f0.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.44% / 新版 98.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c00a4c",
      "incomplete_value": true,
      "site": "00c00a50",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c009b0",
      "incomplete_value": true,
      "site": "00c009b4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c00a4c",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c00a4c",
      "PARAM",
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
      "00c00a4c",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c00a4c",
      "PARAM",
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
- 00c009b4 ["INT_ADD", "register:40f0:8", ["const:c009b4:8", "const:4:8"]]
- 00c009b4 ["CALL", null, ["callee:00c58350:8"]]
+ 00c00a50 ["INT_ADD", "register:40f0:8", ["const:c00a50:8", "const:4:8"]]
+ 00c00a50 ["CALL", null, ["callee:00c58350:8"]]
- 00c00988 ["INT_ADD", "register:40f0:8", ["const:c00988:8", "const:4:8"]]
- 00c00988 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c00a24 ["INT_ADD", "register:40f0:8", ["const:c00a24:8", "const:4:8"]]
+ 00c00a24 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c009a4 ["INT_ADD", "register:40f0:8", ["const:c009a4:8", "const:4:8"]]
- 00c009a4 ["CALL", null, ["callee:00c58340:8"]]
+ 00c00a40 ["INT_ADD", "register:40f0:8", ["const:c00a40:8", "const:4:8"]]
+ 00c00a40 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-897372775b7553ee2d78892debf65633"></a>

### [`00c00ad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00ad4.md) → [`00c00b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00b70.md) FUN_00c00b70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c00acc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00acc.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c00b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00b68.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c00bc4",
      "incomplete_value": true,
      "site": "00c00bc8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c00b28",
      "incomplete_value": true,
      "site": "00c00b2c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c00bc4",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c00bc4",
      "PARAM",
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
      "00c00bc4",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c00bc4",
      "PARAM",
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
- 00c00b2c ["INT_ADD", "register:40f0:8", ["const:c00b2c:8", "const:4:8"]]
- 00c00b2c ["CALL", null, ["callee:00c58350:8"]]
+ 00c00bc8 ["INT_ADD", "register:40f0:8", ["const:c00bc8:8", "const:4:8"]]
+ 00c00bc8 ["CALL", null, ["callee:00c58350:8"]]
- 00c00b00 ["INT_ADD", "register:40f0:8", ["const:c00b00:8", "const:4:8"]]
- 00c00b00 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c00b9c ["INT_ADD", "register:40f0:8", ["const:c00b9c:8", "const:4:8"]]
+ 00c00b9c ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c00b1c ["INT_ADD", "register:40f0:8", ["const:c00b1c:8", "const:4:8"]]
- 00c00b1c ["CALL", null, ["callee:00c58340:8"]]
+ 00c00bb8 ["INT_ADD", "register:40f0:8", ["const:c00bb8:8", "const:4:8"]]
+ 00c00bb8 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-d427fa40c0ddf12517b0cd2d340204d0"></a>

### [`00c00c0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00c0c.md) → [`00c00ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00ca8.md) FUN_00c00ca8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c00c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00c04.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c00ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00ca0.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c00cfc",
      "incomplete_value": true,
      "site": "00c00d00",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c00c60",
      "incomplete_value": true,
      "site": "00c00c64",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c00cfc",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c00cfc",
      "PARAM",
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
      "00c00cfc",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c00cfc",
      "PARAM",
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
- 00c00c64 ["INT_ADD", "register:40f0:8", ["const:c00c64:8", "const:4:8"]]
- 00c00c64 ["CALL", null, ["callee:00c58350:8"]]
+ 00c00d00 ["INT_ADD", "register:40f0:8", ["const:c00d00:8", "const:4:8"]]
+ 00c00d00 ["CALL", null, ["callee:00c58350:8"]]
- 00c00c38 ["INT_ADD", "register:40f0:8", ["const:c00c38:8", "const:4:8"]]
- 00c00c38 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c00cd4 ["INT_ADD", "register:40f0:8", ["const:c00cd4:8", "const:4:8"]]
+ 00c00cd4 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c00c54 ["INT_ADD", "register:40f0:8", ["const:c00c54:8", "const:4:8"]]
- 00c00c54 ["CALL", null, ["callee:00c58340:8"]]
+ 00c00cf0 ["INT_ADD", "register:40f0:8", ["const:c00cf0:8", "const:4:8"]]
+ 00c00cf0 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-cd14aac00b23de87e6c84b9f210a5464"></a>

### [`00c00d88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00d88.md) → [`00c00e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00e24.md) FUN_00c00e24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c00d80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00d80.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c00e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00e1c.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c00e78",
      "incomplete_value": true,
      "site": "00c00e7c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c00ddc",
      "incomplete_value": true,
      "site": "00c00de0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c00e78",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c00e78",
      "PARAM",
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
      "00c00e78",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c00e78",
      "PARAM",
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
- 00c00de0 ["INT_ADD", "register:40f0:8", ["const:c00de0:8", "const:4:8"]]
- 00c00de0 ["CALL", null, ["callee:00c58350:8"]]
+ 00c00e7c ["INT_ADD", "register:40f0:8", ["const:c00e7c:8", "const:4:8"]]
+ 00c00e7c ["CALL", null, ["callee:00c58350:8"]]
- 00c00db4 ["INT_ADD", "register:40f0:8", ["const:c00db4:8", "const:4:8"]]
- 00c00db4 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c00e50 ["INT_ADD", "register:40f0:8", ["const:c00e50:8", "const:4:8"]]
+ 00c00e50 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c00dd0 ["INT_ADD", "register:40f0:8", ["const:c00dd0:8", "const:4:8"]]
- 00c00dd0 ["CALL", null, ["callee:00c58340:8"]]
+ 00c00e6c ["INT_ADD", "register:40f0:8", ["const:c00e6c:8", "const:4:8"]]
+ 00c00e6c ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-c476467e17b5145a1a76820f0943b620"></a>

### [`00c00ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00ec0.md) → [`00c00f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00f5c.md) FUN_00c00f5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c00eb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00eb8.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c00f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00f54.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c00fb0",
      "incomplete_value": true,
      "site": "00c00fb4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c00f14",
      "incomplete_value": true,
      "site": "00c00f18",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c00fb0",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c00fb0",
      "PARAM",
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
      "00c00fb0",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c00fb0",
      "PARAM",
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
- 00c00f18 ["INT_ADD", "register:40f0:8", ["const:c00f18:8", "const:4:8"]]
- 00c00f18 ["CALL", null, ["callee:00c58350:8"]]
+ 00c00fb4 ["INT_ADD", "register:40f0:8", ["const:c00fb4:8", "const:4:8"]]
+ 00c00fb4 ["CALL", null, ["callee:00c58350:8"]]
- 00c00eec ["INT_ADD", "register:40f0:8", ["const:c00eec:8", "const:4:8"]]
- 00c00eec ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c00f88 ["INT_ADD", "register:40f0:8", ["const:c00f88:8", "const:4:8"]]
+ 00c00f88 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c00f08 ["INT_ADD", "register:40f0:8", ["const:c00f08:8", "const:4:8"]]
- 00c00f08 ["CALL", null, ["callee:00c58340:8"]]
+ 00c00fa4 ["INT_ADD", "register:40f0:8", ["const:c00fa4:8", "const:4:8"]]
+ 00c00fa4 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-f90bddf32e5eea6251ecbb3d85ef24a4"></a>

### [`00c00ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00ff8.md) → [`00c01094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01094.md) FUN_00c01094

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c00ff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00ff0.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c0108c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c0108c.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c010e8",
      "incomplete_value": true,
      "site": "00c010ec",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c0104c",
      "incomplete_value": true,
      "site": "00c01050",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c010e8",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c010e8",
      "PARAM",
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
      "00c010e8",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c010e8",
      "PARAM",
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
- 00c01050 ["INT_ADD", "register:40f0:8", ["const:c01050:8", "const:4:8"]]
- 00c01050 ["CALL", null, ["callee:00c58350:8"]]
+ 00c010ec ["INT_ADD", "register:40f0:8", ["const:c010ec:8", "const:4:8"]]
+ 00c010ec ["CALL", null, ["callee:00c58350:8"]]
- 00c01024 ["INT_ADD", "register:40f0:8", ["const:c01024:8", "const:4:8"]]
- 00c01024 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c010c0 ["INT_ADD", "register:40f0:8", ["const:c010c0:8", "const:4:8"]]
+ 00c010c0 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c01040 ["INT_ADD", "register:40f0:8", ["const:c01040:8", "const:4:8"]]
- 00c01040 ["CALL", null, ["callee:00c58340:8"]]
+ 00c010dc ["INT_ADD", "register:40f0:8", ["const:c010dc:8", "const:4:8"]]
+ 00c010dc ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-9857ebfc045ec78d4fc5967527de33e3"></a>

### [`00c01130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01130.md) → [`00c011cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c011cc.md) FUN_00c011cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c01128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01128.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c011c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c011c4.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01220",
      "incomplete_value": true,
      "site": "00c01224",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c01184",
      "incomplete_value": true,
      "site": "00c01188",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c01220",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c01220",
      "PARAM",
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
      "00c01220",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c01220",
      "PARAM",
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
- 00c01188 ["INT_ADD", "register:40f0:8", ["const:c01188:8", "const:4:8"]]
- 00c01188 ["CALL", null, ["callee:00c58350:8"]]
+ 00c01224 ["INT_ADD", "register:40f0:8", ["const:c01224:8", "const:4:8"]]
+ 00c01224 ["CALL", null, ["callee:00c58350:8"]]
- 00c0115c ["INT_ADD", "register:40f0:8", ["const:c0115c:8", "const:4:8"]]
- 00c0115c ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c011f8 ["INT_ADD", "register:40f0:8", ["const:c011f8:8", "const:4:8"]]
+ 00c011f8 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c01178 ["INT_ADD", "register:40f0:8", ["const:c01178:8", "const:4:8"]]
- 00c01178 ["CALL", null, ["callee:00c58340:8"]]
+ 00c01214 ["INT_ADD", "register:40f0:8", ["const:c01214:8", "const:4:8"]]
+ 00c01214 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-006a8c05cf1c2b94646ac2bc61ed25e8"></a>

### [`00c01268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01268.md) → [`00c01304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01304.md) FUN_00c01304

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c01260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01260.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c012fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c012fc.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01358",
      "incomplete_value": true,
      "site": "00c0135c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c012bc",
      "incomplete_value": true,
      "site": "00c012c0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c01358",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c01358",
      "PARAM",
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
      "00c01358",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c01358",
      "PARAM",
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
- 00c012c0 ["INT_ADD", "register:40f0:8", ["const:c012c0:8", "const:4:8"]]
- 00c012c0 ["CALL", null, ["callee:00c58350:8"]]
+ 00c0135c ["INT_ADD", "register:40f0:8", ["const:c0135c:8", "const:4:8"]]
+ 00c0135c ["CALL", null, ["callee:00c58350:8"]]
- 00c01294 ["INT_ADD", "register:40f0:8", ["const:c01294:8", "const:4:8"]]
- 00c01294 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c01330 ["INT_ADD", "register:40f0:8", ["const:c01330:8", "const:4:8"]]
+ 00c01330 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c012b0 ["INT_ADD", "register:40f0:8", ["const:c012b0:8", "const:4:8"]]
- 00c012b0 ["CALL", null, ["callee:00c58340:8"]]
+ 00c0134c ["INT_ADD", "register:40f0:8", ["const:c0134c:8", "const:4:8"]]
+ 00c0134c ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-36db97dd3efc483f46272b32867ca329"></a>

### [`00c013a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c013a0.md) → [`00c0143c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c0143c.md) FUN_00c0143c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c01398`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01398.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c01434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01434.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01490",
      "incomplete_value": true,
      "site": "00c01494",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c013f4",
      "incomplete_value": true,
      "site": "00c013f8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c01490",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c01490",
      "PARAM",
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
      "00c01490",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c01490",
      "PARAM",
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
- 00c013f8 ["INT_ADD", "register:40f0:8", ["const:c013f8:8", "const:4:8"]]
- 00c013f8 ["CALL", null, ["callee:00c58350:8"]]
+ 00c01494 ["INT_ADD", "register:40f0:8", ["const:c01494:8", "const:4:8"]]
+ 00c01494 ["CALL", null, ["callee:00c58350:8"]]
- 00c013cc ["INT_ADD", "register:40f0:8", ["const:c013cc:8", "const:4:8"]]
- 00c013cc ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c01468 ["INT_ADD", "register:40f0:8", ["const:c01468:8", "const:4:8"]]
+ 00c01468 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c013e8 ["INT_ADD", "register:40f0:8", ["const:c013e8:8", "const:4:8"]]
- 00c013e8 ["CALL", null, ["callee:00c58340:8"]]
+ 00c01484 ["INT_ADD", "register:40f0:8", ["const:c01484:8", "const:4:8"]]
+ 00c01484 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-9827062080b817adc336dee8f2d95813"></a>

### [`00c014d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c014d8.md) → [`00c01574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01574.md) FUN_00c01574

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c014d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c014d0.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c0156c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c0156c.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c015c8",
      "incomplete_value": true,
      "site": "00c015cc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c0152c",
      "incomplete_value": true,
      "site": "00c01530",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c015c8",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c015c8",
      "PARAM",
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
      "00c015c8",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c015c8",
      "PARAM",
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
- 00c01530 ["INT_ADD", "register:40f0:8", ["const:c01530:8", "const:4:8"]]
- 00c01530 ["CALL", null, ["callee:00c58350:8"]]
+ 00c015cc ["INT_ADD", "register:40f0:8", ["const:c015cc:8", "const:4:8"]]
+ 00c015cc ["CALL", null, ["callee:00c58350:8"]]
- 00c01504 ["INT_ADD", "register:40f0:8", ["const:c01504:8", "const:4:8"]]
- 00c01504 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c015a0 ["INT_ADD", "register:40f0:8", ["const:c015a0:8", "const:4:8"]]
+ 00c015a0 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c01520 ["INT_ADD", "register:40f0:8", ["const:c01520:8", "const:4:8"]]
- 00c01520 ["CALL", null, ["callee:00c58340:8"]]
+ 00c015bc ["INT_ADD", "register:40f0:8", ["const:c015bc:8", "const:4:8"]]
+ 00c015bc ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-38a0461241c7db6bad714a00cc330f89"></a>

### [`00c01610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01610.md) → [`00c016ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c016ac.md) FUN_00c016ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c01608`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01608.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c016a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c016a4.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01700",
      "incomplete_value": true,
      "site": "00c01704",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c01664",
      "incomplete_value": true,
      "site": "00c01668",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c01700",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c01700",
      "PARAM",
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
      "00c01700",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c01700",
      "PARAM",
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
- 00c01668 ["INT_ADD", "register:40f0:8", ["const:c01668:8", "const:4:8"]]
- 00c01668 ["CALL", null, ["callee:00c58350:8"]]
+ 00c01704 ["INT_ADD", "register:40f0:8", ["const:c01704:8", "const:4:8"]]
+ 00c01704 ["CALL", null, ["callee:00c58350:8"]]
- 00c0163c ["INT_ADD", "register:40f0:8", ["const:c0163c:8", "const:4:8"]]
- 00c0163c ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c016d8 ["INT_ADD", "register:40f0:8", ["const:c016d8:8", "const:4:8"]]
+ 00c016d8 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c01658 ["INT_ADD", "register:40f0:8", ["const:c01658:8", "const:4:8"]]
- 00c01658 ["CALL", null, ["callee:00c58340:8"]]
+ 00c016f4 ["INT_ADD", "register:40f0:8", ["const:c016f4:8", "const:4:8"]]
+ 00c016f4 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-a9548d768d835a0482be00e6fb048315"></a>

### [`00c01748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01748.md) → [`00c017e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c017e4.md) FUN_00c017e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c01740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01740.md) · 呼出先 5件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c017dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c017dc.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01838",
      "incomplete_value": true,
      "site": "00c0183c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c0179c",
      "incomplete_value": true,
      "site": "00c017a0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c01838",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00c01838",
      "PARAM",
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
      "00c01838",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c01838",
      "PARAM",
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
- 00c017a0 ["INT_ADD", "register:40f0:8", ["const:c017a0:8", "const:4:8"]]
- 00c017a0 ["CALL", null, ["callee:00c58350:8"]]
+ 00c0183c ["INT_ADD", "register:40f0:8", ["const:c0183c:8", "const:4:8"]]
+ 00c0183c ["CALL", null, ["callee:00c58350:8"]]
- 00c01774 ["INT_ADD", "register:40f0:8", ["const:c01774:8", "const:4:8"]]
- 00c01774 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c01810 ["INT_ADD", "register:40f0:8", ["const:c01810:8", "const:4:8"]]
+ 00c01810 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c01790 ["INT_ADD", "register:40f0:8", ["const:c01790:8", "const:4:8"]]
- 00c01790 ["CALL", null, ["callee:00c58340:8"]]
+ 00c0182c ["INT_ADD", "register:40f0:8", ["const:c0182c:8", "const:4:8"]]
+ 00c0182c ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-e5d79b88654c08c6d893bfce35963ca1"></a>

### [`00c019cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c019cc.md) → [`00c01a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01a68.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE3getEPwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5e440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e440.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5e510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e510.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01aa8",
      "incomplete_value": true,
      "site": "00c01aac",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c01a0c",
      "incomplete_value": true,
      "site": "00c01a10",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c01aa8",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c01aa8",
      "PARAM",
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
      "00c01aa8",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c01aa8",
      "PARAM",
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
- 00c01a10 ["INT_ADD", "register:40f0:8", ["const:c01a10:8", "const:4:8"]]
- 00c01a10 ["CALL", null, ["callee:00c58350:8"]]
+ 00c01aac ["INT_ADD", "register:40f0:8", ["const:c01aac:8", "const:4:8"]]
+ 00c01aac ["CALL", null, ["callee:00c58350:8"]]
- 00c01a00 ["INT_ADD", "register:40f0:8", ["const:c01a00:8", "const:4:8"]]
- 00c01a00 ["CALL", null, ["callee:00c58340:8"]]
+ 00c01a9c ["INT_ADD", "register:40f0:8", ["const:c01a9c:8", "const:4:8"]]
+ 00c01a9c ["CALL", null, ["callee:00c58340:8"]]
- 00c01a0c ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:b40:8"]]
- 00c01a0c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c01aa8 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:c10:8"]]
+ 00c01aa8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fb431048723e945fb685f551999fec8c"></a>

### [`00c01c40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01c40.md) → [`00c01cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01cdc.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE3getERNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5e450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e450.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5e520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e520.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01d14",
      "incomplete_value": true,
      "site": "00c01d18",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c01c78",
      "incomplete_value": true,
      "site": "00c01c7c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c01d14",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c01d14",
      "PARAM",
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
      "00c01d14",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c01d14",
      "PARAM",
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
- 00c01c7c ["INT_ADD", "register:40f0:8", ["const:c01c7c:8", "const:4:8"]]
- 00c01c7c ["CALL", null, ["callee:00c58350:8"]]
+ 00c01d18 ["INT_ADD", "register:40f0:8", ["const:c01d18:8", "const:4:8"]]
+ 00c01d18 ["CALL", null, ["callee:00c58350:8"]]
- 00c01c6c ["INT_ADD", "register:40f0:8", ["const:c01c6c:8", "const:4:8"]]
- 00c01c6c ["CALL", null, ["callee:00c58340:8"]]
+ 00c01d08 ["INT_ADD", "register:40f0:8", ["const:c01d08:8", "const:4:8"]]
+ 00c01d08 ["CALL", null, ["callee:00c58340:8"]]
- 00c01c78 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:b40:8"]]
- 00c01c78 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c01d14 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:c10:8"]]
+ 00c01d14 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-73740fdecb1cd177aa432d77010fdf25"></a>

### [`00c01e38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01e38.md) → [`00c01ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01ed4.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE7getlineEPwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5e460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e460.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5e530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e530.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01f14",
      "incomplete_value": true,
      "site": "00c01f18",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c01e78",
      "incomplete_value": true,
      "site": "00c01e7c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c01f14",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c01f14",
      "PARAM",
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
      "00c01f14",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c01f14",
      "PARAM",
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
- 00c01e7c ["INT_ADD", "register:40f0:8", ["const:c01e7c:8", "const:4:8"]]
- 00c01e7c ["CALL", null, ["callee:00c58350:8"]]
+ 00c01f18 ["INT_ADD", "register:40f0:8", ["const:c01f18:8", "const:4:8"]]
+ 00c01f18 ["CALL", null, ["callee:00c58350:8"]]
- 00c01e6c ["INT_ADD", "register:40f0:8", ["const:c01e6c:8", "const:4:8"]]
- 00c01e6c ["CALL", null, ["callee:00c58340:8"]]
+ 00c01f08 ["INT_ADD", "register:40f0:8", ["const:c01f08:8", "const:4:8"]]
+ 00c01f08 ["CALL", null, ["callee:00c58340:8"]]
- 00c01e78 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:b40:8"]]
- 00c01e78 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c01f14 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:c10:8"]]
+ 00c01f14 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-78e5bd3939a00c725fd91e2ed269d727"></a>

### [`00c02cf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02cf0.md) → [`00c02d8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02d8c.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEEC1EPNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.27% / 新版 77.27%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c02db8",
      "incomplete_value": true,
      "site": "00c02db8",
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
      "definition_site": "00c02d1c",
      "incomplete_value": true,
      "site": "00c02d1c",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c02db4",
      "incomplete_value": true,
      "site": "00c02dbc",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c02d18",
      "incomplete_value": true,
      "site": "00c02d20",
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
            "const:18:8"
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
      "00c02da8",
      "READ",
      [
        "storage",
        "00c9bb50",
        null,
        "pointer"
      ]
    ],
    [
      "00c02db8",
      "DATA",
      [
        "storage",
        "00c93088",
        null,
        "pointer"
      ]
    ],
    [
      "00c02dbc",
      "DATA",
      [
        "storage",
        "00c93060",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c02da8",
      "READ",
      [
        "storage",
        "00c9bc20",
        null,
        "pointer"
      ]
    ],
    [
      "00c02db8",
      "DATA",
      [
        "storage",
        "00c93158",
        null,
        "pointer"
      ]
    ],
    [
      "00c02dbc",
      "DATA",
      [
        "storage",
        "00c93130",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c02d0c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b50:8"]]
- 00c02d0c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c02da8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c20:8"]]
+ 00c02da8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c02d28 ["INT_ADD", "register:40f0:8", ["const:c02d28:8", "const:4:8"]]
- 00c02d28 ["CALL", null, ["callee:00c582b0:8"]]
+ 00c02dc4 ["INT_ADD", "register:40f0:8", ["const:c02dc4:8", "const:4:8"]]
+ 00c02dc4 ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-9dcc7e13890c4dde5f6e3a6b6a5ed7bd"></a>

### [`00c02fdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02fdc.md) → [`00c03078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03078.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c030cc",
      "incomplete_value": true,
      "site": "00c030d0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03030",
      "incomplete_value": true,
      "site": "00c03034",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c03114",
      "incomplete_value": true,
      "site": "00c03118",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03078",
      "incomplete_value": true,
      "site": "00c0307c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c030cc",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c030cc",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c03114",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c030cc",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c030cc",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c03114",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03034 ["INT_ADD", "register:40f0:8", ["const:c03034:8", "const:4:8"]]
- 00c03034 ["CALL", null, ["callee:00c58350:8"]]
+ 00c030d0 ["INT_ADD", "register:40f0:8", ["const:c030d0:8", "const:4:8"]]
+ 00c030d0 ["CALL", null, ["callee:00c58350:8"]]
- 00c0307c ["INT_ADD", "register:40f0:8", ["const:c0307c:8", "const:4:8"]]
- 00c0307c ["CALL", null, ["callee:00c58350:8"]]
+ 00c03118 ["INT_ADD", "register:40f0:8", ["const:c03118:8", "const:4:8"]]
+ 00c03118 ["CALL", null, ["callee:00c58350:8"]]
- 00c03008 ["INT_ADD", "register:40f0:8", ["const:c03008:8", "const:4:8"]]
- 00c03008 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c030a4 ["INT_ADD", "register:40f0:8", ["const:c030a4:8", "const:4:8"]]
+ 00c030a4 ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-844f253e6bbd0683f52e9c6356080741"></a>

### [`00c0316c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c03/00c0316c.md) → [`00c03208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03208.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEs

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.65% / 新版 97.65%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c03264",
      "incomplete_value": true,
      "site": "00c03268",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c031c8",
      "incomplete_value": true,
      "site": "00c031cc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c032ac",
      "incomplete_value": true,
      "site": "00c032b0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03210",
      "incomplete_value": true,
      "site": "00c03214",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c03264",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c03264",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c032ac",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c03264",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c03264",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c032ac",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c031cc ["INT_ADD", "register:40f0:8", ["const:c031cc:8", "const:4:8"]]
- 00c031cc ["CALL", null, ["callee:00c58350:8"]]
+ 00c03268 ["INT_ADD", "register:40f0:8", ["const:c03268:8", "const:4:8"]]
+ 00c03268 ["CALL", null, ["callee:00c58350:8"]]
- 00c03214 ["INT_ADD", "register:40f0:8", ["const:c03214:8", "const:4:8"]]
- 00c03214 ["CALL", null, ["callee:00c58350:8"]]
+ 00c032b0 ["INT_ADD", "register:40f0:8", ["const:c032b0:8", "const:4:8"]]
+ 00c032b0 ["CALL", null, ["callee:00c58350:8"]]
- 00c0319c ["INT_ADD", "register:40f0:8", ["const:c0319c:8", "const:4:8"]]
- 00c0319c ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c03238 ["INT_ADD", "register:40f0:8", ["const:c03238:8", "const:4:8"]]
+ 00c03238 ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-a797f00c3fd99a53ac8bd790a5e311c1"></a>

### [`00c03324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c03/00c03324.md) → [`00c033c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c033c0.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEt

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c03414",
      "incomplete_value": true,
      "site": "00c03418",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03378",
      "incomplete_value": true,
      "site": "00c0337c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0345c",
      "incomplete_value": true,
      "site": "00c03460",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c033c0",
      "incomplete_value": true,
      "site": "00c033c4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c03414",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c03414",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c0345c",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c03414",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c03414",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c0345c",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0337c ["INT_ADD", "register:40f0:8", ["const:c0337c:8", "const:4:8"]]
- 00c0337c ["CALL", null, ["callee:00c58350:8"]]
+ 00c03418 ["INT_ADD", "register:40f0:8", ["const:c03418:8", "const:4:8"]]
+ 00c03418 ["CALL", null, ["callee:00c58350:8"]]
- 00c033c4 ["INT_ADD", "register:40f0:8", ["const:c033c4:8", "const:4:8"]]
- 00c033c4 ["CALL", null, ["callee:00c58350:8"]]
+ 00c03460 ["INT_ADD", "register:40f0:8", ["const:c03460:8", "const:4:8"]]
+ 00c03460 ["CALL", null, ["callee:00c58350:8"]]
- 00c03350 ["INT_ADD", "register:40f0:8", ["const:c03350:8", "const:4:8"]]
- 00c03350 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c033ec ["INT_ADD", "register:40f0:8", ["const:c033ec:8", "const:4:8"]]
+ 00c033ec ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-e77a1caa6955a1b5d5ce23fb8223db83"></a>

### [`00c034b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c03/00c034b4.md) → [`00c03550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03550.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.65% / 新版 97.65%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c035ac",
      "incomplete_value": true,
      "site": "00c035b0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03510",
      "incomplete_value": true,
      "site": "00c03514",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c035f4",
      "incomplete_value": true,
      "site": "00c035f8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03558",
      "incomplete_value": true,
      "site": "00c0355c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c035ac",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c035ac",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c035f4",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c035ac",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c035ac",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c035f4",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03514 ["INT_ADD", "register:40f0:8", ["const:c03514:8", "const:4:8"]]
- 00c03514 ["CALL", null, ["callee:00c58350:8"]]
+ 00c035b0 ["INT_ADD", "register:40f0:8", ["const:c035b0:8", "const:4:8"]]
+ 00c035b0 ["CALL", null, ["callee:00c58350:8"]]
- 00c0355c ["INT_ADD", "register:40f0:8", ["const:c0355c:8", "const:4:8"]]
- 00c0355c ["CALL", null, ["callee:00c58350:8"]]
+ 00c035f8 ["INT_ADD", "register:40f0:8", ["const:c035f8:8", "const:4:8"]]
+ 00c035f8 ["CALL", null, ["callee:00c58350:8"]]
- 00c034e4 ["INT_ADD", "register:40f0:8", ["const:c034e4:8", "const:4:8"]]
- 00c034e4 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c03580 ["INT_ADD", "register:40f0:8", ["const:c03580:8", "const:4:8"]]
+ 00c03580 ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-b15e843d9d36eee8dd5820e2e21fe93e"></a>

### [`00c0366c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c03/00c0366c.md) → [`00c03708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03708.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0375c",
      "incomplete_value": true,
      "site": "00c03760",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c036c0",
      "incomplete_value": true,
      "site": "00c036c4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c037a4",
      "incomplete_value": true,
      "site": "00c037a8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03708",
      "incomplete_value": true,
      "site": "00c0370c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c0375c",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c0375c",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c037a4",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c0375c",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c0375c",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c037a4",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c036c4 ["INT_ADD", "register:40f0:8", ["const:c036c4:8", "const:4:8"]]
- 00c036c4 ["CALL", null, ["callee:00c58350:8"]]
+ 00c03760 ["INT_ADD", "register:40f0:8", ["const:c03760:8", "const:4:8"]]
+ 00c03760 ["CALL", null, ["callee:00c58350:8"]]
- 00c0370c ["INT_ADD", "register:40f0:8", ["const:c0370c:8", "const:4:8"]]
- 00c0370c ["CALL", null, ["callee:00c58350:8"]]
+ 00c037a8 ["INT_ADD", "register:40f0:8", ["const:c037a8:8", "const:4:8"]]
+ 00c037a8 ["CALL", null, ["callee:00c58350:8"]]
- 00c03698 ["INT_ADD", "register:40f0:8", ["const:c03698:8", "const:4:8"]]
- 00c03698 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c03734 ["INT_ADD", "register:40f0:8", ["const:c03734:8", "const:4:8"]]
+ 00c03734 ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-b8b819c244dcca1a40ca1ff962580994"></a>

### [`00c037fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c03/00c037fc.md) → [`00c03898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03898.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c038ec",
      "incomplete_value": true,
      "site": "00c038f0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03850",
      "incomplete_value": true,
      "site": "00c03854",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c03934",
      "incomplete_value": true,
      "site": "00c03938",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03898",
      "incomplete_value": true,
      "site": "00c0389c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c038ec",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c038ec",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c03934",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c038ec",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c038ec",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c03934",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03854 ["INT_ADD", "register:40f0:8", ["const:c03854:8", "const:4:8"]]
- 00c03854 ["CALL", null, ["callee:00c58350:8"]]
+ 00c038f0 ["INT_ADD", "register:40f0:8", ["const:c038f0:8", "const:4:8"]]
+ 00c038f0 ["CALL", null, ["callee:00c58350:8"]]
- 00c0389c ["INT_ADD", "register:40f0:8", ["const:c0389c:8", "const:4:8"]]
- 00c0389c ["CALL", null, ["callee:00c58350:8"]]
+ 00c03938 ["INT_ADD", "register:40f0:8", ["const:c03938:8", "const:4:8"]]
+ 00c03938 ["CALL", null, ["callee:00c58350:8"]]
- 00c03828 ["INT_ADD", "register:40f0:8", ["const:c03828:8", "const:4:8"]]
- 00c03828 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c038c4 ["INT_ADD", "register:40f0:8", ["const:c038c4:8", "const:4:8"]]
+ 00c038c4 ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-b29f166b9378728e372d786b13e789ed"></a>

### [`00c0398c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c03/00c0398c.md) → [`00c03a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03a28.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c03a7c",
      "incomplete_value": true,
      "site": "00c03a80",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c039e0",
      "incomplete_value": true,
      "site": "00c039e4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c03ac4",
      "incomplete_value": true,
      "site": "00c03ac8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03a28",
      "incomplete_value": true,
      "site": "00c03a2c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c03a7c",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c03a7c",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c03ac4",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c03a7c",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c03a7c",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c03ac4",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c039e4 ["INT_ADD", "register:40f0:8", ["const:c039e4:8", "const:4:8"]]
- 00c039e4 ["CALL", null, ["callee:00c58350:8"]]
+ 00c03a80 ["INT_ADD", "register:40f0:8", ["const:c03a80:8", "const:4:8"]]
+ 00c03a80 ["CALL", null, ["callee:00c58350:8"]]
- 00c03a2c ["INT_ADD", "register:40f0:8", ["const:c03a2c:8", "const:4:8"]]
- 00c03a2c ["CALL", null, ["callee:00c58350:8"]]
+ 00c03ac8 ["INT_ADD", "register:40f0:8", ["const:c03ac8:8", "const:4:8"]]
+ 00c03ac8 ["CALL", null, ["callee:00c58350:8"]]
- 00c039b8 ["INT_ADD", "register:40f0:8", ["const:c039b8:8", "const:4:8"]]
- 00c039b8 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c03a54 ["INT_ADD", "register:40f0:8", ["const:c03a54:8", "const:4:8"]]
+ 00c03a54 ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-8180dff07b9331367169ed425e1f92d5"></a>

### [`00c03b1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c03/00c03b1c.md) → [`00c03bb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03bb8.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEx

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c03c0c",
      "incomplete_value": true,
      "site": "00c03c10",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03b70",
      "incomplete_value": true,
      "site": "00c03b74",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c03c54",
      "incomplete_value": true,
      "site": "00c03c58",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03bb8",
      "incomplete_value": true,
      "site": "00c03bbc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c03c0c",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c03c0c",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c03c54",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c03c0c",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c03c0c",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c03c54",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03b74 ["INT_ADD", "register:40f0:8", ["const:c03b74:8", "const:4:8"]]
- 00c03b74 ["CALL", null, ["callee:00c58350:8"]]
+ 00c03c10 ["INT_ADD", "register:40f0:8", ["const:c03c10:8", "const:4:8"]]
+ 00c03c10 ["CALL", null, ["callee:00c58350:8"]]
- 00c03bbc ["INT_ADD", "register:40f0:8", ["const:c03bbc:8", "const:4:8"]]
- 00c03bbc ["CALL", null, ["callee:00c58350:8"]]
+ 00c03c58 ["INT_ADD", "register:40f0:8", ["const:c03c58:8", "const:4:8"]]
+ 00c03c58 ["CALL", null, ["callee:00c58350:8"]]
- 00c03b48 ["INT_ADD", "register:40f0:8", ["const:c03b48:8", "const:4:8"]]
- 00c03b48 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c03be4 ["INT_ADD", "register:40f0:8", ["const:c03be4:8", "const:4:8"]]
+ 00c03be4 ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-56922538bc7ca15c546a904b376006ae"></a>

### [`00c03cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c03/00c03cac.md) → [`00c03d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03d48.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEy

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c03d9c",
      "incomplete_value": true,
      "site": "00c03da0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03d00",
      "incomplete_value": true,
      "site": "00c03d04",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c03de4",
      "incomplete_value": true,
      "site": "00c03de8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03d48",
      "incomplete_value": true,
      "site": "00c03d4c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c03d9c",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c03d9c",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c03de4",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c03d9c",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c03d9c",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c03de4",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03d04 ["INT_ADD", "register:40f0:8", ["const:c03d04:8", "const:4:8"]]
- 00c03d04 ["CALL", null, ["callee:00c58350:8"]]
+ 00c03da0 ["INT_ADD", "register:40f0:8", ["const:c03da0:8", "const:4:8"]]
+ 00c03da0 ["CALL", null, ["callee:00c58350:8"]]
- 00c03d4c ["INT_ADD", "register:40f0:8", ["const:c03d4c:8", "const:4:8"]]
- 00c03d4c ["CALL", null, ["callee:00c58350:8"]]
+ 00c03de8 ["INT_ADD", "register:40f0:8", ["const:c03de8:8", "const:4:8"]]
+ 00c03de8 ["CALL", null, ["callee:00c58350:8"]]
- 00c03cd8 ["INT_ADD", "register:40f0:8", ["const:c03cd8:8", "const:4:8"]]
- 00c03cd8 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c03d74 ["INT_ADD", "register:40f0:8", ["const:c03d74:8", "const:4:8"]]
+ 00c03d74 ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-1b2ca16b0853f56b669be9b9ea433f6b"></a>

### [`00c03e3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c03/00c03e3c.md) → [`00c03ed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03ed8.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEf

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.40% / 新版 97.40%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c03f30",
      "incomplete_value": true,
      "site": "00c03f34",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03e94",
      "incomplete_value": true,
      "site": "00c03e98",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c03f78",
      "incomplete_value": true,
      "site": "00c03f7c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c03edc",
      "incomplete_value": true,
      "site": "00c03ee0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c03f30",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c03f30",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c03f78",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c03f30",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c03f30",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c03f78",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03e98 ["INT_ADD", "register:40f0:8", ["const:c03e98:8", "const:4:8"]]
- 00c03e98 ["CALL", null, ["callee:00c58350:8"]]
+ 00c03f34 ["INT_ADD", "register:40f0:8", ["const:c03f34:8", "const:4:8"]]
+ 00c03f34 ["CALL", null, ["callee:00c58350:8"]]
- 00c03ee0 ["INT_ADD", "register:40f0:8", ["const:c03ee0:8", "const:4:8"]]
- 00c03ee0 ["CALL", null, ["callee:00c58350:8"]]
+ 00c03f7c ["INT_ADD", "register:40f0:8", ["const:c03f7c:8", "const:4:8"]]
+ 00c03f7c ["CALL", null, ["callee:00c58350:8"]]
- 00c03e6c ["INT_ADD", "register:40f0:8", ["const:c03e6c:8", "const:4:8"]]
- 00c03e6c ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c03f08 ["INT_ADD", "register:40f0:8", ["const:c03f08:8", "const:4:8"]]
+ 00c03f08 ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-941c268d36cfdb2a89ef910574642c4f"></a>

### [`00c03fd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c03/00c03fd4.md) → [`00c04070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04070.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEd

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.40% / 新版 97.40%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c040c8",
      "incomplete_value": true,
      "site": "00c040cc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c0402c",
      "incomplete_value": true,
      "site": "00c04030",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04110",
      "incomplete_value": true,
      "site": "00c04114",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c04074",
      "incomplete_value": true,
      "site": "00c04078",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c040c8",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c040c8",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04110",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c040c8",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c040c8",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04110",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c04030 ["INT_ADD", "register:40f0:8", ["const:c04030:8", "const:4:8"]]
- 00c04030 ["CALL", null, ["callee:00c58350:8"]]
+ 00c040cc ["INT_ADD", "register:40f0:8", ["const:c040cc:8", "const:4:8"]]
+ 00c040cc ["CALL", null, ["callee:00c58350:8"]]
- 00c04078 ["INT_ADD", "register:40f0:8", ["const:c04078:8", "const:4:8"]]
- 00c04078 ["CALL", null, ["callee:00c58350:8"]]
+ 00c04114 ["INT_ADD", "register:40f0:8", ["const:c04114:8", "const:4:8"]]
+ 00c04114 ["CALL", null, ["callee:00c58350:8"]]
- 00c04004 ["INT_ADD", "register:40f0:8", ["const:c04004:8", "const:4:8"]]
- 00c04004 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c040a0 ["INT_ADD", "register:40f0:8", ["const:c040a0:8", "const:4:8"]]
+ 00c040a0 ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-cc9e6c36e696774271c478045b0b2be2"></a>

### [`00c0416c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c0416c.md) → [`00c04208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04208.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0425c",
      "incomplete_value": true,
      "site": "00c04260",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c041c0",
      "incomplete_value": true,
      "site": "00c041c4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c042a4",
      "incomplete_value": true,
      "site": "00c042a8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c04208",
      "incomplete_value": true,
      "site": "00c0420c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c0425c",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c0425c",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c042a4",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c0425c",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c0425c",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c042a4",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c041c4 ["INT_ADD", "register:40f0:8", ["const:c041c4:8", "const:4:8"]]
- 00c041c4 ["CALL", null, ["callee:00c58350:8"]]
+ 00c04260 ["INT_ADD", "register:40f0:8", ["const:c04260:8", "const:4:8"]]
+ 00c04260 ["CALL", null, ["callee:00c58350:8"]]
- 00c0420c ["INT_ADD", "register:40f0:8", ["const:c0420c:8", "const:4:8"]]
- 00c0420c ["CALL", null, ["callee:00c58350:8"]]
+ 00c042a8 ["INT_ADD", "register:40f0:8", ["const:c042a8:8", "const:4:8"]]
+ 00c042a8 ["CALL", null, ["callee:00c58350:8"]]
- 00c04198 ["INT_ADD", "register:40f0:8", ["const:c04198:8", "const:4:8"]]
- 00c04198 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c04234 ["INT_ADD", "register:40f0:8", ["const:c04234:8", "const:4:8"]]
+ 00c04234 ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-7578edc61359d4a5c8cffda9370a4e9b"></a>

### [`00c042fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c042fc.md) → [`00c04398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04398.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEPKv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c043ec",
      "incomplete_value": true,
      "site": "00c043f0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c04350",
      "incomplete_value": true,
      "site": "00c04354",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04434",
      "incomplete_value": true,
      "site": "00c04438",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c04398",
      "incomplete_value": true,
      "site": "00c0439c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c043ec",
      "READ",
      [
        "storage",
        "00c9bb58",
        null,
        "pointer"
      ]
    ],
    [
      "00c043ec",
      "PARAM",
      [
        "storage",
        "01127ba8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04434",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c043ec",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c043ec",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04434",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c04354 ["INT_ADD", "register:40f0:8", ["const:c04354:8", "const:4:8"]]
- 00c04354 ["CALL", null, ["callee:00c58350:8"]]
+ 00c043f0 ["INT_ADD", "register:40f0:8", ["const:c043f0:8", "const:4:8"]]
+ 00c043f0 ["CALL", null, ["callee:00c58350:8"]]
- 00c0439c ["INT_ADD", "register:40f0:8", ["const:c0439c:8", "const:4:8"]]
- 00c0439c ["CALL", null, ["callee:00c58350:8"]]
+ 00c04438 ["INT_ADD", "register:40f0:8", ["const:c04438:8", "const:4:8"]]
+ 00c04438 ["CALL", null, ["callee:00c58350:8"]]
- 00c04328 ["INT_ADD", "register:40f0:8", ["const:c04328:8", "const:4:8"]]
- 00c04328 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c043c4 ["INT_ADD", "register:40f0:8", ["const:c043c4:8", "const:4:8"]]
+ 00c043c4 ["CALL", null, ["callee:00c5e4d0:8"]]
~~~


<a id="compare-76a56d0a4df44cafb4ec04c08d4c1c7b"></a>

### [`00c04a2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c04a2c.md) → [`00c04ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04ac8.md) _ZNSt6__ndk115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEC1EOS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c04ad8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c04/00c04ad8.md) [`00c5a7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7a0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c04b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04b74.md) [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c04af0",
      "incomplete_value": true,
      "site": "00c04af0",
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
      "definition_site": "00c04a54",
      "incomplete_value": true,
      "site": "00c04a54",
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
      "definition_site": "00c04b1c",
      "incomplete_value": true,
      "site": "00c04b20",
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
      "definition_site": "00c04a80",
      "incomplete_value": true,
      "site": "00c04a84",
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
      "00c04ae8",
      "READ",
      [
        "storage",
        "00c9b848",
        null,
        "pointer"
      ]
    ],
    [
      "00c04af0",
      "DATA",
      [
        "storage",
        "00c90cb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c04b10",
      "READ",
      [
        "storage",
        "00c9abc0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c04ae8",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ],
    [
      "00c04af0",
      "DATA",
      [
        "storage",
        "00c90d80",
        null,
        "pointer"
      ]
    ],
    [
      "00c04b10",
      "READ",
      [
        "storage",
        "00c9ac90",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c04a4c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:848:8"]]
- 00c04a4c ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c04ae8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:918:8"]]
+ 00c04ae8 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
- 00c04a58 ["INT_ADD", "register:40f0:8", ["const:c04a58:8", "const:4:8"]]
- 00c04a58 ["CALL", null, ["callee:00c5a870:8"]]
+ 00c04af4 ["INT_ADD", "register:40f0:8", ["const:c04af4:8", "const:4:8"]]
+ 00c04af4 ["CALL", null, ["callee:00c5a870:8"]]
- 00c04a74 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bc0:8"]]
- 00c04a74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c04b10 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c90:8"]]
+ 00c04b10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c5332a3f521f597c578c4f3829fb78b8"></a>

### [`00c0568c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c0568c.md) → [`00c05728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05728.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEEC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c58f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58f00.md) · 呼出先 6件 [`00bb59c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb59c0.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7a0.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md)
- 新版 呼出元 1件 [`00c58fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fd0.md) · 呼出先 6件 [`00bb5a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5a5c.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.89% / 新版 86.89%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0574c",
      "incomplete_value": true,
      "site": "00c0574c",
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
      "definition_site": "00c056b0",
      "incomplete_value": true,
      "site": "00c056b0",
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
      "definition_site": "00c05770",
      "incomplete_value": true,
      "site": "00c05774",
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
      "definition_site": "00c056d4",
      "incomplete_value": true,
      "site": "00c056d8",
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
      "definition_site": "00c05798",
      "incomplete_value": true,
      "site": "00c0579c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c056fc",
      "incomplete_value": true,
      "site": "00c05700",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c05744",
      "READ",
      [
        "storage",
        "00c9b848",
        null,
        "pointer"
      ]
    ],
    [
      "00c0574c",
      "DATA",
      [
        "storage",
        "00c90cb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c05760",
      "READ",
      [
        "storage",
        "00c9b8f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c05744",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ],
    [
      "00c0574c",
      "DATA",
      [
        "storage",
        "00c90d80",
        null,
        "pointer"
      ]
    ],
    [
      "00c05760",
      "READ",
      [
        "storage",
        "00c9b9c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c05700 ["INT_ADD", "register:40f0:8", ["const:c05700:8", "const:4:8"]]
- 00c05700 ["CALL", null, ["callee:00c5d250:8"]]
+ 00c0579c ["INT_ADD", "register:40f0:8", ["const:c0579c:8", "const:4:8"]]
+ 00c0579c ["CALL", null, ["callee:00c5d250:8"]]
- 00c0572c ["INT_ADD", "register:40f0:8", ["const:c0572c:8", "const:4:8"]]
- 00c0572c ["CALL", null, ["callee:00c58350:8"]]
+ 00c057c8 ["INT_ADD", "register:40f0:8", ["const:c057c8:8", "const:4:8"]]
+ 00c057c8 ["CALL", null, ["callee:00c58350:8"]]
- 00c056a8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:848:8"]]
- 00c056a8 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c05744 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:918:8"]]
+ 00c05744 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b195cd2c0e5fa65628a9295250028230"></a>

### [`00c057b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c057b0.md) → [`00c0584c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c0584c.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEEC1EOS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.06% / 新版 94.06%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c05874",
      "incomplete_value": true,
      "site": "00c05874",
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
      "definition_site": "00c057d8",
      "incomplete_value": true,
      "site": "00c057d8",
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
    "kind": "store_value",
    "new": {
      "definition_site": "00c058a8",
      "incomplete_value": true,
      "site": "00c058b0",
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
      "definition_site": "00c0580c",
      "incomplete_value": true,
      "site": "00c05814",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c05868",
      "READ",
      [
        "storage",
        "00c9b848",
        null,
        "pointer"
      ]
    ],
    [
      "00c05874",
      "DATA",
      [
        "storage",
        "00c90cb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c058a0",
      "READ",
      [
        "storage",
        "00c9b8f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c05868",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ],
    [
      "00c05874",
      "DATA",
      [
        "storage",
        "00c90d80",
        null,
        "pointer"
      ]
    ],
    [
      "00c058a0",
      "READ",
      [
        "storage",
        "00c9b9c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c057cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:848:8"]]
- 00c057cc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c05868 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:918:8"]]
+ 00c05868 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c057dc ["INT_ADD", "register:40f0:8", ["const:c057dc:8", "const:4:8"]]
- 00c057dc ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00c05878 ["INT_ADD", "register:40f0:8", ["const:c05878:8", "const:4:8"]]
+ 00c05878 ["CALL", null, ["callee:00c5a8a0:8"]]
- 00c05804 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:8f0:8"]]
- 00c05804 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c058a0 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:9c0:8"]]
+ 00c058a0 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cf93f2b9b37f4f583a64d61c1caf64cd"></a>

### [`00c05944`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05944.md) → [`00c059e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c059e0.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEED1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58f20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58f20.md) · 呼出先 5件 [`00bb59c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb59c0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a000.md) [`00c5be40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be40.md) [`00c5d190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d190.md)
- 新版 呼出元 1件 [`00c58ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58ff0.md) · 呼出先 5件 [`00bb5a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5a5c.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5d260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d260.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c05a04",
      "incomplete_value": true,
      "site": "00c05a08",
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
      "definition_site": "00c05968",
      "incomplete_value": true,
      "site": "00c0596c",
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
      "definition_site": "00c05a70",
      "incomplete_value": true,
      "site": "00c05a70",
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
      "definition_site": "00c059d4",
      "incomplete_value": true,
      "site": "00c059d4",
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
      "00c059fc",
      "READ",
      [
        "storage",
        "00c9b8f0",
        null,
        "pointer"
      ]
    ],
    [
      "00c05a08",
      "DATA",
      [
        "storage",
        "00c90f70",
        null,
        "pointer"
      ]
    ],
    [
      "00c05a28",
      "READ",
      [
        "storage",
        "00c90f88",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c059fc",
      "READ",
      [
        "storage",
        "00c9b9c0",
        null,
        "pointer"
      ]
    ],
    [
      "00c05a08",
      "DATA",
      [
        "storage",
        "00c91040",
        null,
        "pointer"
      ]
    ],
    [
      "00c05a28",
      "READ",
      [
        "storage",
        "00c91058",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c05960 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8f0:8"]]
- 00c05960 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c059fc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:9c0:8"]]
+ 00c059fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c05978 ["INT_ADD", "register:40f0:8", ["const:c05978:8", "const:4:8"]]
- 00c05978 ["CALL", null, ["callee:00c5d260:8"]]
+ 00c05a14 ["INT_ADD", "register:40f0:8", ["const:c05a14:8", "const:4:8"]]
+ 00c05a14 ["CALL", null, ["callee:00c5d260:8"]]
- 00c05980 ["INT_ADD", "register:40f0:8", ["const:c05980:8", "const:4:8"]]
- 00c05980 ["CALL", null, ["callee:00c5a0d0:8"]]
+ 00c05a1c ["INT_ADD", "register:40f0:8", ["const:c05a1c:8", "const:4:8"]]
+ 00c05a1c ["CALL", null, ["callee:00c5a0d0:8"]]
~~~


<a id="compare-cb513e97f3681c1104981633fec1388e"></a>

### [`00c05dcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05dcc.md) → [`00c05e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05e68.md) FUN_00c05e68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00c053b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c053b4.md) [`00c05464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05464.md) [`00c05520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05520.md) [`00c055d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c055d0.md) · 呼出先 0件 
- 新版 呼出元 4件 [`00c05450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05450.md) [`00c05500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05500.md) [`00c055bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c055bc.md) [`00c0566c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c0566c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 74.03% / 新版 74.03%

優先判定に残った影響 `return_value_candidate` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00c05ea4",
      "incomplete_value": false,
      "site": "00c05ea8",
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
            "const:e3d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c05e08",
      "incomplete_value": false,
      "site": "00c05e0c",
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
            "const:e8a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00c05eb4",
      "incomplete_value": false,
      "site": "00c05eb8",
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
            "const:96a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c05e18",
      "incomplete_value": false,
      "site": "00c05e1c",
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
            "const:93b:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00c05ec4",
      "incomplete_value": false,
      "site": "00c05ec8",
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
            "const:505:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c05e28",
      "incomplete_value": false,
      "site": "00c05e2c",
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
            "const:561:8"
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
      "00c05e88",
      "DATA",
      [
        "storage",
        "002a7546",
        null,
        null
      ]
    ],
    [
      "00c05e90",
      "DATA",
      [
        "storage",
        "00310b50",
        "switchD_00c05dfc::switchdataD_00310b50",
        "byte"
      ]
    ],
    [
      "00c05ea4",
      "DATA",
      [
        "storage",
        "002a2e8a",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c05e88",
      "DATA",
      [
        "storage",
        "002a74ea",
        null,
        null
      ]
    ],
    [
      "00c05e90",
      "DATA",
      [
        "storage",
        "00310b90",
        "switchD_00c05e98::switchdataD_00310b90",
        "byte"
      ]
    ],
    [
      "00c05ea4",
      "DATA",
      [
        "storage",
        "002a2e3d",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
+ 00c05e8c ["COPY", "register:4050:8", ["const:c05e9c:8"]]
- 00c05ea8 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 00c05ea8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c05ea8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c05ea8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c05f44 ["COPY", "tmp:0:8", ["const:d14:8"]]
+ 00c05f44 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c05f44 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c05f44 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00c05eb8 ["COPY", "tmp:0:8", ["const:549:8"]]
- 00c05eb8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c05eb8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c05eb8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c05f54 ["COPY", "tmp:0:8", ["const:4ed:8"]]
+ 00c05f54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c05f54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c05f54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c4672ad035cb29188ef457352173a063"></a>

### [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) → [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) FUN_00c05ff4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 71件 [`00c0788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c0788c.md) [`00c0a534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0a534.md) [`00c0ad64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0ad64.md) [`00c0d9a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0d/00c0d9a8.md) [`00c0e08c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0e08c.md) · 呼出先 4件 [`00c37f6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37f6c.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5e480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e480.md)
- 新版 呼出元 71件 [`00c07928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07928.md) [`00c0a5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a5d0.md) [`00c0ae00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0ae00.md) [`00c0da44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0da44.md) [`00c0e128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0e128.md) · 呼出先 4件 [`00c38008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c38008.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5e550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e550.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c06020",
      "incomplete_value": true,
      "site": "00c06028",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
    "old": {
      "definition_site": "00c05f84",
      "incomplete_value": true,
      "site": "00c05f8c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:b60:8"
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
      "definition_site": "00c06024",
      "incomplete_value": true,
      "site": "00c06028",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "old": {
      "definition_site": "00c05f88",
      "incomplete_value": true,
      "site": "00c05f8c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:b68:8"
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
      "00c06020",
      "READ",
      [
        "storage",
        "00c9bb60",
        null,
        "pointer"
      ]
    ],
    [
      "00c06020",
      "PARAM",
      [
        "storage",
        "00c96988",
        "std::bad_cast::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00c06024",
      "READ",
      [
        "storage",
        "00c9bb68",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c06020",
      "READ",
      [
        "storage",
        "00c9bc30",
        null,
        "pointer"
      ]
    ],
    [
      "00c06020",
      "PARAM",
      [
        "storage",
        "00c96a58",
        "std::bad_cast::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00c06024",
      "READ",
      [
        "storage",
        "00c9bc38",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c05f8c ["INT_ADD", "register:40f0:8", ["const:c05f8c:8", "const:4:8"]]
- 00c05f8c ["CALL", null, ["callee:00c57fe0:8"]]
+ 00c06028 ["INT_ADD", "register:40f0:8", ["const:c06028:8", "const:4:8"]]
+ 00c06028 ["CALL", null, ["callee:00c57fe0:8"]]
- 00c05f6c ["INT_ADD", "register:40f0:8", ["const:c05f6c:8", "const:4:8"]]
- 00c05f6c ["CALL", null, ["callee:00c57fc0:8"]]
+ 00c06008 ["INT_ADD", "register:40f0:8", ["const:c06008:8", "const:4:8"]]
+ 00c06008 ["CALL", null, ["callee:00c57fc0:8"]]
- 00c05f74 ["INT_ADD", "register:40f0:8", ["const:c05f74:8", "const:4:8"]]
- 00c05f74 ["CALL", null, ["callee:00c5e550:8"]]
+ 00c06010 ["INT_ADD", "register:40f0:8", ["const:c06010:8", "const:4:8"]]
+ 00c06010 ["CALL", null, ["callee:00c5e550:8"]]
~~~


<a id="compare-70f0c0d4941843e6d5d9f4326f02d989"></a>

### [`00c05ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05ffc.md) → [`00c06098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06098.md) FUN_00c06098

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 63.64% / 新版 63.64%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c060cc",
      "incomplete_value": true,
      "site": "00c060cc",
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
      "definition_site": "00c06030",
      "incomplete_value": true,
      "site": "00c06030",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c060c4",
      "incomplete_value": true,
      "site": "00c060d4",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c06028",
      "incomplete_value": true,
      "site": "00c06038",
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
            "const:18:8"
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
      "definition_site": "00c060d0",
      "incomplete_value": true,
      "site": "00c060d8",
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
      "definition_site": "00c06034",
      "incomplete_value": true,
      "site": "00c0603c",
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
      "00c060b4",
      "READ",
      [
        "storage",
        "00c9b290",
        null,
        "pointer"
      ]
    ],
    [
      "00c060b8",
      "READ",
      [
        "storage",
        "00c9abc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c060cc",
      "DATA",
      [
        "storage",
        "00c93260",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c060b4",
      "READ",
      [
        "storage",
        "00c9b360",
        null,
        "pointer"
      ]
    ],
    [
      "00c060b8",
      "READ",
      [
        "storage",
        "00c9ac90",
        null,
        "pointer"
      ]
    ],
    [
      "00c060cc",
      "DATA",
      [
        "storage",
        "00c93330",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c06018 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:290:8"]]
- 00c06018 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c060b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:360:8"]]
+ 00c060b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c0601c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:bc0:8"]]
- 00c0601c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c060b8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c90:8"]]
+ 00c060b8 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00c06024 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-ba973c4cb3a259193fec7d074b2147e3"></a>

### [`00c06080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06080.md) → [`00c0611c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0611c.md) FUN_00c0611c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0613c",
      "incomplete_value": true,
      "site": "00c06150",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c060a0",
      "incomplete_value": true,
      "site": "00c060b4",
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
            "const:18:8"
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
      "definition_site": "00c0615c",
      "incomplete_value": true,
      "site": "00c0615c",
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
      "definition_site": "00c060c0",
      "incomplete_value": true,
      "site": "00c060c0",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c06160",
      "incomplete_value": true,
      "site": "00c06164",
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
      "definition_site": "00c060c4",
      "incomplete_value": true,
      "site": "00c060c8",
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
      "00c06130",
      "READ",
      [
        "storage",
        "00c9b290",
        null,
        "pointer"
      ]
    ],
    [
      "00c0614c",
      "READ",
      [
        "storage",
        "00c9abc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c06150",
      "DATA",
      [
        "storage",
        "00c93238",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c06130",
      "READ",
      [
        "storage",
        "00c9b360",
        null,
        "pointer"
      ]
    ],
    [
      "00c0614c",
      "READ",
      [
        "storage",
        "00c9ac90",
        null,
        "pointer"
      ]
    ],
    [
      "00c06150",
      "DATA",
      [
        "storage",
        "00c93308",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c06094 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:290:8"]]
- 00c06094 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c06130 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:360:8"]]
+ 00c06130 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c060b0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:bc0:8"]]
- 00c060b0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c0614c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c90:8"]]
+ 00c0614c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00c060d4 ["INT_ADD", "register:40f0:8", ["const:c060d4:8", "const:4:8"]]
- 00c060d4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c06170 ["INT_ADD", "register:40f0:8", ["const:c06170:8", "const:4:8"]]
+ 00c06170 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-80880bf63a2c18afeef934be7bd0fb56"></a>

### [`00c06104`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06104.md) → [`00c061a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c061a0.md) FUN_00c061a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c061c0",
      "incomplete_value": true,
      "site": "00c061d4",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c06124",
      "incomplete_value": true,
      "site": "00c06138",
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
            "const:18:8"
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
      "definition_site": "00c061e0",
      "incomplete_value": true,
      "site": "00c061e0",
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
      "definition_site": "00c06144",
      "incomplete_value": true,
      "site": "00c06144",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c061e4",
      "incomplete_value": true,
      "site": "00c061e8",
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
      "definition_site": "00c06148",
      "incomplete_value": true,
      "site": "00c0614c",
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
      "00c061b4",
      "READ",
      [
        "storage",
        "00c9b290",
        null,
        "pointer"
      ]
    ],
    [
      "00c061d0",
      "READ",
      [
        "storage",
        "00c9abc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c061d4",
      "DATA",
      [
        "storage",
        "00c93238",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c061b4",
      "READ",
      [
        "storage",
        "00c9b360",
        null,
        "pointer"
      ]
    ],
    [
      "00c061d0",
      "READ",
      [
        "storage",
        "00c9ac90",
        null,
        "pointer"
      ]
    ],
    [
      "00c061d4",
      "DATA",
      [
        "storage",
        "00c93308",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c06118 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:290:8"]]
- 00c06118 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c061b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:360:8"]]
+ 00c061b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c06134 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:bc0:8"]]
- 00c06134 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c061d0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c90:8"]]
+ 00c061d0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00c06158 ["INT_ADD", "register:40f0:8", ["const:c06158:8", "const:4:8"]]
- 00c06158 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c061f4 ["INT_ADD", "register:40f0:8", ["const:c061f4:8", "const:4:8"]]
+ 00c061f4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-e73f3f8d2c96afee65528f711021fdf5"></a>

### [`00c06190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06190.md) → [`00c0622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0622c.md) FUN_00c0622c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c06778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06778.md) · 呼出先 11件 [`00c065dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c065dc.md) [`00c06684`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06684.md) [`00c0683c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c0683c.md) [`00c06ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06ed0.md) [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md)
- 新版 呼出元 1件 [`00c06814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06814.md) · 呼出先 11件 [`00c06678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06678.md) [`00c06720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06720.md) [`00c068d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c068d8.md) [`00c06f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06f6c.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)

変更の種類 call, call_argument_candidate, call_count, constant, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment

命令の説明率　旧版 59.31% / 新版 59.31%

優先判定に残った影響 `call_argument_candidate` 14件, `store_destination` 20件, `store_value` 13件, `unresolved_call_alignment` 2件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_destination` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c06260",
      "incomplete_value": false,
      "site": "00c06268",
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
            "const:530:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c061c4",
      "incomplete_value": false,
      "site": "00c061cc",
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
            "const:460:8"
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
      "definition_site": "00c06270",
      "incomplete_value": false,
      "site": "00c06278",
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
            "const:a30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c061d4",
      "incomplete_value": false,
      "site": "00c061dc",
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
            "const:930:8"
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
      "definition_site": "00c06274",
      "incomplete_value": true,
      "site": "00c0628c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "old": {
      "definition_site": "00c061d8",
      "incomplete_value": true,
      "site": "00c061f0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:b78:8"
              ]
            ]
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
      "00c06254",
      "PARAM",
      [
        "storage",
        "011278c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c06268",
      "WRITE",
      [
        "storage",
        "011278c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c06268",
      "DATA",
      [
        "storage",
        "00c93460",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c06254",
      "PARAM",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c06268",
      "WRITE",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c06268",
      "DATA",
      [
        "storage",
        "00c93530",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c061f8 ["INT_ADD", "register:40f0:8", ["const:c061f8:8", "const:4:8"]]
- 00c061f8 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00c06294 ["INT_ADD", "register:40f0:8", ["const:c06294:8", "const:4:8"]]
+ 00c06294 ["CALL", null, ["callee:00c5a8a0:8"]]
- 00c06280 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:b18:8"]]
- 00c06280 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c0631c ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:be8:8"]]
+ 00c0631c ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c062dc ["COPY", "register:4008:8", ["const:1127000:8"]]
~~~


<a id="compare-a0f7df7c8cf26439cade955db0dae096"></a>

### [`00c065dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c065dc.md) → [`00c06678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06678.md) FUN_00c06678

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c06190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06190.md) · 呼出先 4件 [`00c581f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581f0.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md)
- 新版 呼出元 1件 [`00c0622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0622c.md) · 呼出先 4件 [`00c582c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582c0.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.57% / 新版 88.57%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c066a0",
      "incomplete_value": false,
      "site": "00c066ac",
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
            "const:5c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c06604",
      "incomplete_value": false,
      "site": "00c06610",
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
            "const:4f8:8"
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
      "definition_site": "00c066c0",
      "incomplete_value": true,
      "site": "00c066c4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c06624",
      "incomplete_value": true,
      "site": "00c06628",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c066ac",
      "DATA",
      [
        "storage",
        "00c934f8",
        null,
        "undefined *"
      ]
    ],
    [
      "00c066c0",
      "READ",
      [
        "storage",
        "00c9b8b8",
        null,
        "pointer"
      ]
    ],
    [
      "00c066c0",
      "PARAM",
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
      "00c066ac",
      "DATA",
      [
        "storage",
        "00c935c8",
        null,
        "undefined *"
      ]
    ],
    [
      "00c066c0",
      "READ",
      [
        "storage",
        "00c9b988",
        null,
        "pointer"
      ]
    ],
    [
      "00c066c0",
      "PARAM",
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
- 00c06628 ["INT_ADD", "register:40f0:8", ["const:c06628:8", "const:4:8"]]
- 00c06628 ["CALL", null, ["callee:00c58350:8"]]
+ 00c066c4 ["INT_ADD", "register:40f0:8", ["const:c066c4:8", "const:4:8"]]
+ 00c066c4 ["CALL", null, ["callee:00c58350:8"]]
- 00c065fc ["INT_ADD", "register:40f0:8", ["const:c065fc:8", "const:4:8"]]
- 00c065fc ["CALL", null, ["callee:00c582c0:8"]]
+ 00c06698 ["INT_ADD", "register:40f0:8", ["const:c06698:8", "const:4:8"]]
+ 00c06698 ["CALL", null, ["callee:00c582c0:8"]]
- 00c06604 ["COPY", "tmp:0:8", ["const:4f8:8"]]
- 00c06604 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c06604 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c06604 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c066a0 ["COPY", "tmp:0:8", ["const:5c8:8"]]
+ 00c066a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c066a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c066a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7f6b080cde83bfdeccbee9529c28ab4b"></a>

### [`00c06684`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06684.md) → [`00c06720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06720.md) FUN_00c06720

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c06190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06190.md) · 呼出先 4件 [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e3e0.md)
- 新版 呼出元 1件 [`00c0622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0622c.md) · 呼出先 4件 [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4b0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.57% / 新版 88.57%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c06748",
      "incomplete_value": false,
      "site": "00c06754",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c066ac",
      "incomplete_value": false,
      "site": "00c066b8",
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
            "const:628:8"
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
      "definition_site": "00c06768",
      "incomplete_value": true,
      "site": "00c0676c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c066cc",
      "incomplete_value": true,
      "site": "00c066d0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c06754",
      "DATA",
      [
        "storage",
        "00c93628",
        null,
        "undefined *"
      ]
    ],
    [
      "00c06768",
      "READ",
      [
        "storage",
        "00c9bba8",
        null,
        "pointer"
      ]
    ],
    [
      "00c06768",
      "PARAM",
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
      "00c06754",
      "DATA",
      [
        "storage",
        "00c936f8",
        null,
        "undefined *"
      ]
    ],
    [
      "00c06768",
      "READ",
      [
        "storage",
        "00c9bc78",
        null,
        "pointer"
      ]
    ],
    [
      "00c06768",
      "PARAM",
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
- 00c066d0 ["INT_ADD", "register:40f0:8", ["const:c066d0:8", "const:4:8"]]
- 00c066d0 ["CALL", null, ["callee:00c58350:8"]]
+ 00c0676c ["INT_ADD", "register:40f0:8", ["const:c0676c:8", "const:4:8"]]
+ 00c0676c ["CALL", null, ["callee:00c58350:8"]]
- 00c066a4 ["INT_ADD", "register:40f0:8", ["const:c066a4:8", "const:4:8"]]
- 00c066a4 ["CALL", null, ["callee:00c5e4b0:8"]]
+ 00c06740 ["INT_ADD", "register:40f0:8", ["const:c06740:8", "const:4:8"]]
+ 00c06740 ["CALL", null, ["callee:00c5e4b0:8"]]
- 00c066ac ["COPY", "tmp:0:8", ["const:628:8"]]
- 00c066ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c066ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c066ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c06748 ["COPY", "tmp:0:8", ["const:6f8:8"]]
+ 00c06748 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c06748 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c06748 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e2f8c3474d370120b32c181740800ffe"></a>

### [`00c06778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06778.md) → [`00c06814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06814.md) _ZNSt6__ndk18ios_base4InitC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e4f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e4f0.md) · 呼出先 5件 [`00c06190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06190.md) [`00c0672c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c0672c.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c5e5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5c0.md) · 呼出先 5件 [`00c0622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0622c.md) [`00c067c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c067c8.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c06848",
      "incomplete_value": false,
      "site": "00c0684c",
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
            "const:c50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c067ac",
      "incomplete_value": false,
      "site": "00c067b0",
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
            "const:b50:8"
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
      "definition_site": "00c0685c",
      "incomplete_value": false,
      "site": "00c06870",
      "value": [
        "leaf",
        "const:c067c8:8"
      ]
    },
    "old": {
      "definition_site": "00c067c0",
      "incomplete_value": false,
      "site": "00c067d4",
      "value": [
        "leaf",
        "const:c0672c:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c06864",
      "incomplete_value": false,
      "site": "00c06870",
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
            "const:c48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c067c8",
      "incomplete_value": false,
      "site": "00c067d4",
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
            "const:b48:8"
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
      "00c0682c",
      "READ",
      [
        "storage",
        "01127b50",
        null,
        "undefined1"
      ]
    ],
    [
      "00c06848",
      "PARAM",
      [
        "storage",
        "01127b50",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0685c",
      "PARAM",
      [
        "storage",
        "00c0672c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c0682c",
      "READ",
      [
        "storage",
        "01127c50",
        null,
        "undefined1"
      ]
    ],
    [
      "00c06848",
      "PARAM",
      [
        "storage",
        "01127c50",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0685c",
      "PARAM",
      [
        "storage",
        "00c067c8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c067b0 ["INT_ADD", "register:40f0:8", ["const:c067b0:8", "const:4:8"]]
- 00c067b0 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c0684c ["INT_ADD", "register:40f0:8", ["const:c0684c:8", "const:4:8"]]
+ 00c0684c ["CALL", null, ["callee:00c57f20:8"]]
- 00c067d4 ["INT_ADD", "register:40f0:8", ["const:c067d4:8", "const:4:8"]]
- 00c067d4 ["CALL", null, ["callee:00c57f00:8"]]
+ 00c06870 ["INT_ADD", "register:40f0:8", ["const:c06870:8", "const:4:8"]]
+ 00c06870 ["CALL", null, ["callee:00c57f00:8"]]
- 00c0678c ["COPY", "tmp:0:8", ["const:b50:8"]]
- 00c0678c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c0678c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c0678c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c06828 ["COPY", "tmp:0:8", ["const:c50:8"]]
+ 00c06828 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c06828 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c06828 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-040bc6a968b4b1957cc179504fcc48a0"></a>

### [`00c0683c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c0683c.md) → [`00c068d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c068d8.md) FUN_00c068d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c06190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06190.md) · 呼出先 2件 [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c5dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c0622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0622c.md) · 呼出先 2件 [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c068f4",
      "incomplete_value": true,
      "site": "00c068fc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c06858",
      "incomplete_value": true,
      "site": "00c06860",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c06950",
      "incomplete_value": false,
      "site": "00c06954",
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
            "const:d77:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c068b4",
      "incomplete_value": false,
      "site": "00c068b8",
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
            "const:d37:8"
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
      "00c068f4",
      "READ",
      [
        "storage",
        "00c9b8b8",
        null,
        "pointer"
      ]
    ],
    [
      "00c068f4",
      "PARAM",
      [
        "storage",
        "01127e28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c06950",
      "PARAM",
      [
        "storage",
        "002b5d37",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c068f4",
      "READ",
      [
        "storage",
        "00c9b988",
        null,
        "pointer"
      ]
    ],
    [
      "00c068f4",
      "PARAM",
      [
        "storage",
        "01127f28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c06950",
      "PARAM",
      [
        "storage",
        "002b5d77",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c06860 ["INT_ADD", "register:40f0:8", ["const:c06860:8", "const:4:8"]]
- 00c06860 ["CALL", null, ["callee:00c58350:8"]]
+ 00c068fc ["INT_ADD", "register:40f0:8", ["const:c068fc:8", "const:4:8"]]
+ 00c068fc ["CALL", null, ["callee:00c58350:8"]]
- 00c068b8 ["INT_ADD", "register:40f0:8", ["const:c068b8:8", "const:4:8"]]
- 00c068b8 ["CALL", null, ["callee:00c5e080:8"]]
+ 00c06954 ["INT_ADD", "register:40f0:8", ["const:c06954:8", "const:4:8"]]
+ 00c06954 ["CALL", null, ["callee:00c5e080:8"]]
- 00c06858 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:8b8:8"]]
- 00c06858 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c068f4 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:988:8"]]
+ 00c068f4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5b0f3b623ac82201adb56af7322870bf"></a>

### [`00c06bd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06bd0.md) → [`00c06c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06c6c.md) FUN_00c06c6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c06c98",
      "incomplete_value": true,
      "site": "00c06c9c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c06bfc",
      "incomplete_value": true,
      "site": "00c06c00",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c06c98",
      "READ",
      [
        "storage",
        "00c9b8b8",
        null,
        "pointer"
      ]
    ],
    [
      "00c06c98",
      "PARAM",
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
      "00c06c98",
      "READ",
      [
        "storage",
        "00c9b988",
        null,
        "pointer"
      ]
    ],
    [
      "00c06c98",
      "PARAM",
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
- 00c06c00 ["INT_ADD", "register:40f0:8", ["const:c06c00:8", "const:4:8"]]
- 00c06c00 ["CALL", null, ["callee:00c58350:8"]]
+ 00c06c9c ["INT_ADD", "register:40f0:8", ["const:c06c9c:8", "const:4:8"]]
+ 00c06c9c ["CALL", null, ["callee:00c58350:8"]]
- 00c06bf0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c06bf0 ["INT_ADD", "register:40f0:8", ["const:c06bf0:8", "const:4:8"]]
- 00c06bf0 ["CALLIND", null, ["register:0:8"]]
+ 00c06c8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c06c8c ["INT_ADD", "register:40f0:8", ["const:c06c8c:8", "const:4:8"]]
+ 00c06c8c ["CALLIND", null, ["register:0:8"]]
- 00c06bfc ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:8b8:8"]]
- 00c06bfc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c06c98 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:988:8"]]
+ 00c06c98 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8189c3772f65e2babf2986c5e5865626"></a>

### [`00c06ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06ed0.md) → [`00c06f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06f6c.md) FUN_00c06f6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c06190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06190.md) · 呼出先 2件 [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c5dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c0622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0622c.md) · 呼出先 2件 [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c06f88",
      "incomplete_value": true,
      "site": "00c06f90",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c06eec",
      "incomplete_value": true,
      "site": "00c06ef4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c06fe4",
      "incomplete_value": false,
      "site": "00c06fe8",
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
            "const:d77:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c06f48",
      "incomplete_value": false,
      "site": "00c06f4c",
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
            "const:d37:8"
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
      "00c06f88",
      "READ",
      [
        "storage",
        "00c9bba8",
        null,
        "pointer"
      ]
    ],
    [
      "00c06f88",
      "PARAM",
      [
        "storage",
        "01127e38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c06fe4",
      "PARAM",
      [
        "storage",
        "002b5d37",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c06f88",
      "READ",
      [
        "storage",
        "00c9bc78",
        null,
        "pointer"
      ]
    ],
    [
      "00c06f88",
      "PARAM",
      [
        "storage",
        "01127f38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c06fe4",
      "PARAM",
      [
        "storage",
        "002b5d77",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c06ef4 ["INT_ADD", "register:40f0:8", ["const:c06ef4:8", "const:4:8"]]
- 00c06ef4 ["CALL", null, ["callee:00c58350:8"]]
+ 00c06f90 ["INT_ADD", "register:40f0:8", ["const:c06f90:8", "const:4:8"]]
+ 00c06f90 ["CALL", null, ["callee:00c58350:8"]]
- 00c06f4c ["INT_ADD", "register:40f0:8", ["const:c06f4c:8", "const:4:8"]]
- 00c06f4c ["CALL", null, ["callee:00c5e080:8"]]
+ 00c06fe8 ["INT_ADD", "register:40f0:8", ["const:c06fe8:8", "const:4:8"]]
+ 00c06fe8 ["CALL", null, ["callee:00c5e080:8"]]
- 00c06eec ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:ba8:8"]]
- 00c06eec ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c06f88 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:c78:8"]]
+ 00c06f88 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-799ac0ad77d14572d9569fd923d9b90f"></a>

### [`00c0725c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c0725c.md) → [`00c072f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c072f8.md) FUN_00c072f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c07324",
      "incomplete_value": true,
      "site": "00c07328",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c07288",
      "incomplete_value": true,
      "site": "00c0728c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c07324",
      "READ",
      [
        "storage",
        "00c9bba8",
        null,
        "pointer"
      ]
    ],
    [
      "00c07324",
      "PARAM",
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
      "00c07324",
      "READ",
      [
        "storage",
        "00c9bc78",
        null,
        "pointer"
      ]
    ],
    [
      "00c07324",
      "PARAM",
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
- 00c0728c ["INT_ADD", "register:40f0:8", ["const:c0728c:8", "const:4:8"]]
- 00c0728c ["CALL", null, ["callee:00c58350:8"]]
+ 00c07328 ["INT_ADD", "register:40f0:8", ["const:c07328:8", "const:4:8"]]
+ 00c07328 ["CALL", null, ["callee:00c58350:8"]]
- 00c0727c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0727c ["INT_ADD", "register:40f0:8", ["const:c0727c:8", "const:4:8"]]
- 00c0727c ["CALLIND", null, ["register:0:8"]]
+ 00c07318 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c07318 ["INT_ADD", "register:40f0:8", ["const:c07318:8", "const:4:8"]]
+ 00c07318 ["CALLIND", null, ["register:0:8"]]
- 00c07288 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:ba8:8"]]
- 00c07288 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c07324 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:c78:8"]]
+ 00c07324 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d44df44033f1c140dbe5bc10b7bd7a71"></a>

### [`00c07524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07524.md) → [`00c075c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c075c0.md) _INIT_2

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c06808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c06/00c06808.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c5e4f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c068a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c068a4.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c5e5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c075d8",
      "incomplete_value": false,
      "site": "00c075dc",
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
            "const:9c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c0753c",
      "incomplete_value": false,
      "site": "00c07540",
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
            "const:8c0:8"
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
      "00c075d8",
      "PARAM",
      [
        "storage",
        "011278c0",
        null,
        null
      ]
    ],
    [
      "00c075e8",
      "PARAM",
      [
        "storage",
        "00c62f90",
        null,
        "pointer"
      ]
    ],
    [
      "00c075ec",
      "READ",
      [
        "storage",
        "00c9bbb0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c075d8",
      "PARAM",
      [
        "storage",
        "011279c0",
        null,
        null
      ]
    ],
    [
      "00c075e8",
      "PARAM",
      [
        "storage",
        "00c63060",
        null,
        "pointer"
      ]
    ],
    [
      "00c075ec",
      "READ",
      [
        "storage",
        "00c9bc80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c07540 ["INT_ADD", "register:40f0:8", ["const:c07540:8", "const:4:8"]]
- 00c07540 ["CALL", null, ["callee:00c5e5c0:8"]]
+ 00c075dc ["INT_ADD", "register:40f0:8", ["const:c075dc:8", "const:4:8"]]
+ 00c075dc ["CALL", null, ["callee:00c5e5c0:8"]]
- 00c07538 ["COPY", "tmp:0:8", ["const:8c0:8"]]
- 00c07538 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00c07538 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00c07538 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00c075d4 ["COPY", "tmp:0:8", ["const:9c0:8"]]
+ 00c075d4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00c075d4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00c075d4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 00c0754c ["COPY", "register:4010:8", ["const:c62f90:8"]]
+ 00c075e8 ["COPY", "register:4010:8", ["const:c63060:8"]]
~~~


<a id="compare-ce6a419874f5d5c1ae16be704f5e4329"></a>

### [`00c0788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c0788c.md) → [`00c07928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07928.md) _ZNKSt6__ndk17num_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_getES4_S4_RNS_8ios_baseERjRb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c07b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07b18.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 98.58% / 新版 98.58%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 2件, `call_argument_candidate` 2件, `store_condition` 4件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c079ac",
      "incomplete_value": true,
      "site": "00c079ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c07910",
      "incomplete_value": true,
      "site": "00c07910",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c07a24",
      "incomplete_value": true,
      "site": "00c07a24",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c07988",
      "incomplete_value": true,
      "site": "00c07988",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c079b4",
      "incomplete_value": true,
      "site": "00c079b8",
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
      "definition_site": "00c07918",
      "incomplete_value": true,
      "site": "00c0791c",
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
      "00c079a4",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c079ac",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c079b0",
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
      "00c079a4",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c079ac",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c079b0",
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
- 00c07908 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:c30:8"]]
- 00c07908 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c079a4 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:d00:8"]]
+ 00c079a4 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c07944 ["INT_ADD", "register:40f0:8", ["const:c07944:8", "const:4:8"]]
- 00c07944 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c079e0 ["INT_ADD", "register:40f0:8", ["const:c079e0:8", "const:4:8"]]
+ 00c079e0 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c079bc ["INT_ADD", "register:40f0:8", ["const:c079bc:8", "const:4:8"]]
- 00c079bc ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c07a58 ["INT_ADD", "register:40f0:8", ["const:c07a58:8", "const:4:8"]]
+ 00c07a58 ["CALL", null, ["callee:00c5dfb0:8"]]
~~~


<a id="compare-a031ff91fdc14402d2ae237254b2899c"></a>

### [`00c0a534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0a534.md) → [`00c0a5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a5d0.md) _ZNKSt6__ndk17num_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_getES4_S4_RNS_8ios_baseERjRPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c0ac28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0ac28.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 12件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c0acc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0acc4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination, store_value

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_argument_candidate` 8件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0a61c",
      "incomplete_value": true,
      "site": "00c0a61c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00c0a580",
      "incomplete_value": true,
      "site": "00c0a580",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "kind": "store_destination",
    "new": {
      "definition_site": "00c0aa98",
      "incomplete_value": true,
      "site": "00c0aa98",
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
      "definition_site": "00c0a9fc",
      "incomplete_value": true,
      "site": "00c0a9fc",
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
    "ordinal": 33,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c0a624",
      "incomplete_value": true,
      "site": "00c0a628",
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
      "definition_site": "00c0a588",
      "incomplete_value": true,
      "site": "00c0a58c",
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
      "00c0a614",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c0a61c",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0a620",
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
      "00c0a614",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c0a61c",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0a620",
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
- 00c0a5b4 ["INT_ADD", "register:40f0:8", ["const:c0a5b4:8", "const:4:8"]]
- 00c0a5b4 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c0a650 ["INT_ADD", "register:40f0:8", ["const:c0a650:8", "const:4:8"]]
+ 00c0a650 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c0a5f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0a5f4 ["INT_ADD", "register:40f0:8", ["const:c0a5f4:8", "const:4:8"]]
- 00c0a5f4 ["CALLIND", null, ["register:0:8"]]
+ 00c0a690 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0a690 ["INT_ADD", "register:40f0:8", ["const:c0a690:8", "const:4:8"]]
+ 00c0a690 ["CALLIND", null, ["register:0:8"]]
- 00c0a61c ["INT_ADD", "register:40f0:8", ["const:c0a61c:8", "const:4:8"]]
- 00c0a61c ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c0a6b8 ["INT_ADD", "register:40f0:8", ["const:c0a6b8:8", "const:4:8"]]
+ 00c0a6b8 ["CALL", null, ["callee:00c5bf40:8"]]
~~~


<a id="compare-cc2775c739acd7939118a7cdded39230"></a>

### [`00c0acdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0acdc.md) → [`00c0ad78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0ad78.md) _ZNSt6__ndk16__clocEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 3件, `return_value_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c0add4",
      "incomplete_value": true,
      "site": "00c0add4",
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
      "definition_site": "00c0ad38",
      "incomplete_value": true,
      "site": "00c0ad38",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0adb4",
      "incomplete_value": false,
      "site": "00c0adb8",
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
      "definition_site": "00c0ad18",
      "incomplete_value": false,
      "site": "00c0ad1c",
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
      "definition_site": "00c0adc4",
      "incomplete_value": false,
      "site": "00c0add0",
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
      "definition_site": "00c0ad28",
      "incomplete_value": false,
      "site": "00c0ad34",
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
      "00c0ad94",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0ad9c",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0adb4",
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
      "00c0ad94",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0ad9c",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0adb4",
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
- 00c0ad1c ["INT_ADD", "register:40f0:8", ["const:c0ad1c:8", "const:4:8"]]
- 00c0ad1c ["CALL", null, ["callee:00c57f20:8"]]
+ 00c0adb8 ["INT_ADD", "register:40f0:8", ["const:c0adb8:8", "const:4:8"]]
+ 00c0adb8 ["CALL", null, ["callee:00c57f20:8"]]
- 00c0ad34 ["INT_ADD", "register:40f0:8", ["const:c0ad34:8", "const:4:8"]]
- 00c0ad34 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c0add0 ["INT_ADD", "register:40f0:8", ["const:c0add0:8", "const:4:8"]]
+ 00c0add0 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c0ad38 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c98:8"]]
- 00c0ad38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c0add4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d98:8"]]
+ 00c0add4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-02927f6840a4634bcea613db2cd661d4"></a>

### [`00c0ad64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0ad64.md) → [`00c0ae00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0ae00.md) _ZNKSt6__ndk17num_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_getES4_S4_RNS_8ios_baseERjRb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c0aff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0aff0.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 98.58% / 新版 98.58%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 2件, `call_argument_candidate` 2件, `store_condition` 4件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0ae84",
      "incomplete_value": true,
      "site": "00c0ae84",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c0ade8",
      "incomplete_value": true,
      "site": "00c0ade8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0aefc",
      "incomplete_value": true,
      "site": "00c0aefc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c0ae60",
      "incomplete_value": true,
      "site": "00c0ae60",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c0ae8c",
      "incomplete_value": true,
      "site": "00c0ae90",
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
      "definition_site": "00c0adf0",
      "incomplete_value": true,
      "site": "00c0adf4",
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
      "00c0ae7c",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c0ae84",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0ae88",
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
      "00c0ae7c",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c0ae84",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0ae88",
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
- 00c0ade0 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:b40:8"]]
- 00c0ade0 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c0ae7c ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:c10:8"]]
+ 00c0ae7c ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c0ae1c ["INT_ADD", "register:40f0:8", ["const:c0ae1c:8", "const:4:8"]]
- 00c0ae1c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c0aeb8 ["INT_ADD", "register:40f0:8", ["const:c0aeb8:8", "const:4:8"]]
+ 00c0aeb8 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c0ae94 ["INT_ADD", "register:40f0:8", ["const:c0ae94:8", "const:4:8"]]
- 00c0ae94 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c0af30 ["INT_ADD", "register:40f0:8", ["const:c0af30:8", "const:4:8"]]
+ 00c0af30 ["CALL", null, ["callee:00c5dfb0:8"]]
~~~


<a id="compare-81fe26fa63b7e879a4b897e9990d25c1"></a>

### [`00c0d9a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0d/00c0d9a8.md) → [`00c0da44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0da44.md) _ZNKSt6__ndk17num_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_getES4_S4_RNS_8ios_baseERjRPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c0ac28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0ac28.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 12件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c0acc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0acc4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value

命令の説明率　旧版 95.79% / 新版 95.79%

優先判定に残った影響 `call_argument_candidate` 8件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0da90",
      "incomplete_value": true,
      "site": "00c0da90",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c0d9f4",
      "incomplete_value": true,
      "site": "00c0d9f4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "kind": "store_destination",
    "new": {
      "definition_site": "00c0df00",
      "incomplete_value": true,
      "site": "00c0df00",
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
      "definition_site": "00c0de64",
      "incomplete_value": true,
      "site": "00c0de64",
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
    "ordinal": 33,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c0da98",
      "incomplete_value": true,
      "site": "00c0da9c",
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
      "definition_site": "00c0d9fc",
      "incomplete_value": true,
      "site": "00c0da00",
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
      "00c0da88",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c0da90",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0da94",
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
      "00c0da88",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c0da90",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0da94",
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
- 00c0da28 ["INT_ADD", "register:40f0:8", ["const:c0da28:8", "const:4:8"]]
- 00c0da28 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c0dac4 ["INT_ADD", "register:40f0:8", ["const:c0dac4:8", "const:4:8"]]
+ 00c0dac4 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c0da68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0da68 ["INT_ADD", "register:40f0:8", ["const:c0da68:8", "const:4:8"]]
- 00c0da68 ["CALLIND", null, ["register:0:8"]]
+ 00c0db04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0db04 ["INT_ADD", "register:40f0:8", ["const:c0db04:8", "const:4:8"]]
+ 00c0db04 ["CALLIND", null, ["register:0:8"]]
- 00c0da90 ["INT_ADD", "register:40f0:8", ["const:c0da90:8", "const:4:8"]]
- 00c0da90 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00c0db2c ["INT_ADD", "register:40f0:8", ["const:c0db2c:8", "const:4:8"]]
+ 00c0db2c ["CALL", null, ["callee:00c5bf40:8"]]
~~~


<a id="compare-136172d9b67564a5b77d7355794a6988"></a>

### [`00c0e08c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0e08c.md) → [`00c0e128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0e128.md) _ZNSt6__ndk19__num_getIcE19__stage2_float_prepERNS_8ios_baseEPcRcS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e550`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e550.md) · 呼出先 5件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 1件 [`00c5e620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e620.md) · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c0e144",
      "incomplete_value": true,
      "site": "00c0e14c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c0e0f8",
      "incomplete_value": true,
      "site": "00c0e100",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0e190",
      "incomplete_value": false,
      "site": "00c0e19c",
      "value": [
        "leaf",
        "const:c36054:8"
      ]
    },
    "old": {
      "definition_site": "00c0e0f4",
      "incomplete_value": false,
      "site": "00c0e100",
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
      "00c0e160",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c0e168",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0e16c",
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
      "00c0e160",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c0e168",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0e16c",
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
- 00c0e100 ["INT_ADD", "register:40f0:8", ["const:c0e100:8", "const:4:8"]]
- 00c0e100 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c0e19c ["INT_ADD", "register:40f0:8", ["const:c0e19c:8", "const:4:8"]]
+ 00c0e19c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c0e180 ["INT_ADD", "register:40f0:8", ["const:c0e180:8", "const:4:8"]]
- 00c0e180 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c0e21c ["INT_ADD", "register:40f0:8", ["const:c0e21c:8", "const:4:8"]]
+ 00c0e21c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c0e0bc ["INT_ADD", "register:40f0:8", ["const:c0e0bc:8", "const:4:8"]]
- 00c0e0bc ["CALL", null, ["callee:00c58340:8"]]
+ 00c0e158 ["INT_ADD", "register:40f0:8", ["const:c0e158:8", "const:4:8"]]
+ 00c0e158 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-246800544fd92843a05947276b1edeca"></a>

### [`00c0e4a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0e4a0.md) → [`00c0e53c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0e53c.md) _ZNSt6__ndk19__num_getIcE17__stage2_int_prepERNS_8ios_baseEPcRc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e520.md) · 呼出先 5件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 1件 [`00c5e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5f0.md) · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c0e554",
      "incomplete_value": true,
      "site": "00c0e55c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c0e544",
      "incomplete_value": true,
      "site": "00c0e54c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:bc0:8"
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
    "old": {
      "definition_site": "00c0e548",
      "incomplete_value": true,
      "site": "00c0e54c",
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
      "00c0e570",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c0e578",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0e57c",
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
      "00c0e570",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c0e578",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0e57c",
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
- 00c0e54c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0e54c ["INT_ADD", "register:40f0:8", ["const:c0e54c:8", "const:4:8"]]
- 00c0e54c ["CALLIND", null, ["register:0:8"]]
+ 00c0e5e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0e5e8 ["INT_ADD", "register:40f0:8", ["const:c0e5e8:8", "const:4:8"]]
+ 00c0e5e8 ["CALLIND", null, ["register:0:8"]]
- 00c0e590 ["INT_ADD", "register:40f0:8", ["const:c0e590:8", "const:4:8"]]
- 00c0e590 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c0e62c ["INT_ADD", "register:40f0:8", ["const:c0e62c:8", "const:4:8"]]
+ 00c0e62c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c0e4cc ["INT_ADD", "register:40f0:8", ["const:c0e4cc:8", "const:4:8"]]
- 00c0e4cc ["CALL", null, ["callee:00c58340:8"]]
+ 00c0e568 ["INT_ADD", "register:40f0:8", ["const:c0e568:8", "const:4:8"]]
+ 00c0e568 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-323b350db3697c7a545ddf9fddd8c34a"></a>

### [`00c0e620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0e620.md) → [`00c0e6bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0e6bc.md) _ZNSt6__ndk19__num_getIwE19__stage2_float_prepERNS_8ios_baseEPwRwS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e5b0.md) · 呼出先 5件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 1件 [`00c5e680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e680.md) · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c0e658",
      "incomplete_value": true,
      "site": "00c0e660",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c0e6d8",
      "incomplete_value": true,
      "site": "00c0e6e0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c0e668",
      "incomplete_value": true,
      "site": "00c0e66c",
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
      "00c0e6f4",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c0e6fc",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0e700",
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
      "00c0e6f4",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c0e6fc",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0e700",
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
- 00c0e650 ["INT_ADD", "register:40f0:8", ["const:c0e650:8", "const:4:8"]]
- 00c0e650 ["CALL", null, ["callee:00c58340:8"]]
+ 00c0e6ec ["INT_ADD", "register:40f0:8", ["const:c0e6ec:8", "const:4:8"]]
+ 00c0e6ec ["CALL", null, ["callee:00c58340:8"]]
- 00c0e694 ["INT_ADD", "register:40f0:8", ["const:c0e694:8", "const:4:8"]]
- 00c0e694 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c0e730 ["INT_ADD", "register:40f0:8", ["const:c0e730:8", "const:4:8"]]
+ 00c0e730 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c0e6d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0e6d0 ["INT_ADD", "register:40f0:8", ["const:c0e6d0:8", "const:4:8"]]
- 00c0e6d0 ["CALLIND", null, ["register:0:8"]]
+ 00c0e76c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0e76c ["INT_ADD", "register:40f0:8", ["const:c0e76c:8", "const:4:8"]]
+ 00c0e76c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-eceaa09ff306fe76365f35b9ec765452"></a>

### [`00c0ea20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0ea20.md) → [`00c0eabc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0eabc.md) _ZNSt6__ndk19__num_getIwE17__stage2_int_prepERNS_8ios_baseEPwRw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e590.md) · 呼出先 5件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 1件 [`00c5e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e660.md) · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c0ea54",
      "incomplete_value": true,
      "site": "00c0ea5c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c0ead4",
      "incomplete_value": true,
      "site": "00c0eadc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c0ea64",
      "incomplete_value": true,
      "site": "00c0ea68",
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
      "00c0eaf0",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c0eaf8",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0eafc",
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
      "00c0eaf0",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c0eaf8",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0eafc",
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
- 00c0ea4c ["INT_ADD", "register:40f0:8", ["const:c0ea4c:8", "const:4:8"]]
- 00c0ea4c ["CALL", null, ["callee:00c58340:8"]]
+ 00c0eae8 ["INT_ADD", "register:40f0:8", ["const:c0eae8:8", "const:4:8"]]
+ 00c0eae8 ["CALL", null, ["callee:00c58340:8"]]
- 00c0ea90 ["INT_ADD", "register:40f0:8", ["const:c0ea90:8", "const:4:8"]]
- 00c0ea90 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c0eb2c ["INT_ADD", "register:40f0:8", ["const:c0eb2c:8", "const:4:8"]]
+ 00c0eb2c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c0eacc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0eacc ["INT_ADD", "register:40f0:8", ["const:c0eacc:8", "const:4:8"]]
- 00c0eacc ["CALLIND", null, ["register:0:8"]]
+ 00c0eb68 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0eb68 ["INT_ADD", "register:40f0:8", ["const:c0eb68:8", "const:4:8"]]
+ 00c0eb68 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1d80936696a1cf579d46fe61b104c18f"></a>

### [`00c0eba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0eba0.md) → [`00c0ec3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0ec3c.md) _ZNKSt6__ndk17num_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_putES4_RNS_8ios_baseEcb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

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
    "old": {
      "definition_site": "00c0ec08",
      "incomplete_value": true,
      "site": "00c0ec08",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "old": {
      "definition_site": "00c0ec10",
      "incomplete_value": true,
      "site": "00c0ec14",
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
    "old": {
      "definition_site": "00c0ec34",
      "incomplete_value": true,
      "site": "00c0ec3c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:bb8:8"
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
      "00c0ec9c",
      "READ",
      [
        "storage",
        "00c9bbb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c0eca4",
      "DATA",
      [
        "storage",
        "01127e88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0eca8",
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
      "00c0ec9c",
      "READ",
      [
        "storage",
        "00c9bc88",
        null,
        "pointer"
      ]
    ],
    [
      "00c0eca4",
      "DATA",
      [
        "storage",
        "01127f88",
        "std::__ndk1::numpunct<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0eca8",
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
- 00c0ec3c ["INT_ADD", "register:40f0:8", ["const:c0ec3c:8", "const:4:8"]]
- 00c0ec3c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c0ecd8 ["INT_ADD", "register:40f0:8", ["const:c0ecd8:8", "const:4:8"]]
+ 00c0ecd8 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c0ebf8 ["INT_ADD", "register:40f0:8", ["const:c0ebf8:8", "const:4:8"]]
- 00c0ebf8 ["CALL", null, ["callee:00c58340:8"]]
+ 00c0ec94 ["INT_ADD", "register:40f0:8", ["const:c0ec94:8", "const:4:8"]]
+ 00c0ec94 ["CALL", null, ["callee:00c58340:8"]]
- 00c0ec00 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:bb8:8"]]
- 00c0ec00 ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c0ec9c ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:c88:8"]]
+ 00c0ec9c ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-be00caaf8b60d2eb73739489bf590e12"></a>

### [`00c0ed80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0ed80.md) → [`00c0ee1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0ee1c.md) FUN_00c0ee1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c0ed70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0ed70.md) · 呼出先 8件 [`00459668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459668.md) [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 1件 [`00c0ee0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0ee0c.md) · 呼出先 8件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c0ef7c",
      "incomplete_value": true,
      "site": "00c0ef7c",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c0ee60",
      "incomplete_value": true,
      "site": "00c0ee78",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c0ef5c",
      "incomplete_value": false,
      "site": "00c0ef60",
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
      "00c0eef0",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0eefc",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0eff8",
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
      "00c0eef0",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0eefc",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0eff8",
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
- 00c0ee78 ["INT_ADD", "register:40f0:8", ["const:c0ee78:8", "const:4:8"]]
- 00c0ee78 ["CALL", null, ["callee:00c10240:8"]]
+ 00c0ef14 ["INT_ADD", "register:40f0:8", ["const:c0ef14:8", "const:4:8"]]
+ 00c0ef14 ["CALL", null, ["callee:00c10240:8"]]
- 00c0ef60 ["INT_ADD", "register:40f0:8", ["const:c0ef60:8", "const:4:8"]]
- 00c0ef60 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c0effc ["INT_ADD", "register:40f0:8", ["const:c0effc:8", "const:4:8"]]
+ 00c0effc ["CALL", null, ["callee:00c57f20:8"]]
- 00c0ef78 ["INT_ADD", "register:40f0:8", ["const:c0ef78:8", "const:4:8"]]
- 00c0ef78 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c0f014 ["INT_ADD", "register:40f0:8", ["const:c0f014:8", "const:4:8"]]
+ 00c0f014 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-7d4a506b230d9d06849b2b1d6a666ddd"></a>

### [`00c0efcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0efcc.md) → [`00c0f068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f068.md) FUN_00c0f068

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c0efbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0efbc.md) · 呼出先 8件 [`00459668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459668.md) [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 1件 [`00c0f058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f058.md) · 呼出先 8件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c0f1c8",
      "incomplete_value": true,
      "site": "00c0f1c8",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c0f0ac",
      "incomplete_value": true,
      "site": "00c0f0c4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c0f1a8",
      "incomplete_value": false,
      "site": "00c0f1ac",
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
      "00c0f13c",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0f148",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0f244",
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
      "00c0f13c",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0f148",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0f244",
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
- 00c0f0c4 ["INT_ADD", "register:40f0:8", ["const:c0f0c4:8", "const:4:8"]]
- 00c0f0c4 ["CALL", null, ["callee:00c10240:8"]]
+ 00c0f160 ["INT_ADD", "register:40f0:8", ["const:c0f160:8", "const:4:8"]]
+ 00c0f160 ["CALL", null, ["callee:00c10240:8"]]
- 00c0f1ac ["INT_ADD", "register:40f0:8", ["const:c0f1ac:8", "const:4:8"]]
- 00c0f1ac ["CALL", null, ["callee:00c57f20:8"]]
+ 00c0f248 ["INT_ADD", "register:40f0:8", ["const:c0f248:8", "const:4:8"]]
+ 00c0f248 ["CALL", null, ["callee:00c57f20:8"]]
- 00c0f1c4 ["INT_ADD", "register:40f0:8", ["const:c0f1c4:8", "const:4:8"]]
- 00c0f1c4 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c0f260 ["INT_ADD", "register:40f0:8", ["const:c0f260:8", "const:4:8"]]
+ 00c0f260 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-fdef3d76f9f4fead04a2a86485abd783"></a>

### [`00c0f218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0f/00c0f218.md) → [`00c0f2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f2b4.md) FUN_00c0f2b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c0f208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0f/00c0f208.md) · 呼出先 8件 [`00459668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459668.md) [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 1件 [`00c0f2a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f2a4.md) · 呼出先 8件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.60% / 新版 93.60%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c0f3f8",
      "incomplete_value": true,
      "site": "00c0f3f8",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c0f2dc",
      "incomplete_value": true,
      "site": "00c0f2f4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c0f3d8",
      "incomplete_value": false,
      "site": "00c0f3dc",
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
      "00c0f36c",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0f378",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0f474",
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
      "00c0f36c",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0f378",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0f474",
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
- 00c0f2f4 ["INT_ADD", "register:40f0:8", ["const:c0f2f4:8", "const:4:8"]]
- 00c0f2f4 ["CALL", null, ["callee:00c10240:8"]]
+ 00c0f390 ["INT_ADD", "register:40f0:8", ["const:c0f390:8", "const:4:8"]]
+ 00c0f390 ["CALL", null, ["callee:00c10240:8"]]
- 00c0f3dc ["INT_ADD", "register:40f0:8", ["const:c0f3dc:8", "const:4:8"]]
- 00c0f3dc ["CALL", null, ["callee:00c57f20:8"]]
+ 00c0f478 ["INT_ADD", "register:40f0:8", ["const:c0f478:8", "const:4:8"]]
+ 00c0f478 ["CALL", null, ["callee:00c57f20:8"]]
- 00c0f3f4 ["INT_ADD", "register:40f0:8", ["const:c0f3f4:8", "const:4:8"]]
- 00c0f3f4 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c0f490 ["INT_ADD", "register:40f0:8", ["const:c0f490:8", "const:4:8"]]
+ 00c0f490 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-7a1dcc81e3207a9135ea4f60fdad59c2"></a>

### [`00c0f448`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0f/00c0f448.md) → [`00c0f4e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f4e4.md) FUN_00c0f4e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c0f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0f/00c0f438.md) · 呼出先 8件 [`00459668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459668.md) [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 1件 [`00c0f4d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f4d4.md) · 呼出先 8件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.60% / 新版 93.60%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c0f628",
      "incomplete_value": true,
      "site": "00c0f628",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c0f50c",
      "incomplete_value": true,
      "site": "00c0f524",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c0f608",
      "incomplete_value": false,
      "site": "00c0f60c",
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
      "00c0f59c",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0f5a8",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0f6a4",
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
      "00c0f59c",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0f5a8",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0f6a4",
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
- 00c0f524 ["INT_ADD", "register:40f0:8", ["const:c0f524:8", "const:4:8"]]
- 00c0f524 ["CALL", null, ["callee:00c10240:8"]]
+ 00c0f5c0 ["INT_ADD", "register:40f0:8", ["const:c0f5c0:8", "const:4:8"]]
+ 00c0f5c0 ["CALL", null, ["callee:00c10240:8"]]
- 00c0f60c ["INT_ADD", "register:40f0:8", ["const:c0f60c:8", "const:4:8"]]
- 00c0f60c ["CALL", null, ["callee:00c57f20:8"]]
+ 00c0f6a8 ["INT_ADD", "register:40f0:8", ["const:c0f6a8:8", "const:4:8"]]
+ 00c0f6a8 ["CALL", null, ["callee:00c57f20:8"]]
- 00c0f624 ["INT_ADD", "register:40f0:8", ["const:c0f624:8", "const:4:8"]]
- 00c0f624 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c0f6c0 ["INT_ADD", "register:40f0:8", ["const:c0f6c0:8", "const:4:8"]]
+ 00c0f6c0 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-7be90816425c9a7eb0c23848946e4d7d"></a>

### [`00c0f678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0f/00c0f678.md) → [`00c0f714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f714.md) FUN_00c0f714

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c0f668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0f/00c0f668.md) · 呼出先 12件 [`00459668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459668.md) [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c1b9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1b/00c1b9e0.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c0f704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f704.md) · 呼出先 12件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c0f9bc",
      "incomplete_value": false,
      "site": "00c0f9bc",
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
    "ordinal": 21,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c0f9fc",
      "incomplete_value": false,
      "site": "00c0f9fc",
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
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c0fa34",
      "incomplete_value": true,
      "site": "00c0fa34",
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
            "const:c98:8"
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
      "00c0f814",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0f820",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0f864",
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
      "00c0f814",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0f820",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0f864",
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
- 00c0f7ec ["INT_ADD", "register:40f0:8", ["const:c0f7ec:8", "const:4:8"]]
- 00c0f7ec ["CALL", null, ["callee:00c10240:8"]]
+ 00c0f888 ["INT_ADD", "register:40f0:8", ["const:c0f888:8", "const:4:8"]]
+ 00c0f888 ["CALL", null, ["callee:00c10240:8"]]
- 00c0f824 ["INT_ADD", "register:40f0:8", ["const:c0f824:8", "const:4:8"]]
- 00c0f824 ["CALL", null, ["callee:00c1ba7c:8"]]
+ 00c0f8c0 ["INT_ADD", "register:40f0:8", ["const:c0f8c0:8", "const:4:8"]]
+ 00c0f8c0 ["CALL", null, ["callee:00c1ba7c:8"]]
- 00c0f998 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00c0f998 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c0f998 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c0f998 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c0fa34 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00c0fa34 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c0fa34 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c0fa34 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5915bacca11e04bba120cfc028b61061"></a>

### [`00c0fb08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0f/00c0fb08.md) → [`00c0fba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0fba4.md) FUN_00c0fba4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c0faf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0f/00c0faf8.md) · 呼出先 12件 [`00459668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459668.md) [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c1b9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1b/00c1b9e0.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c0fb94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0fb94.md) · 呼出先 12件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c0fe44",
      "incomplete_value": false,
      "site": "00c0fe44",
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
    "ordinal": 21,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c0fe84",
      "incomplete_value": false,
      "site": "00c0fe84",
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
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c0febc",
      "incomplete_value": true,
      "site": "00c0febc",
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
            "const:c98:8"
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
      "00c0fca0",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0fca8",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0fcf0",
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
      "00c0fca0",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0fca8",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0fcf0",
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
- 00c0fc20 ["INT_ADD", "register:40f0:8", ["const:c0fc20:8", "const:4:8"]]
- 00c0fc20 ["CALL", null, ["callee:00c10240:8"]]
+ 00c0fcbc ["INT_ADD", "register:40f0:8", ["const:c0fcbc:8", "const:4:8"]]
+ 00c0fcbc ["CALL", null, ["callee:00c10240:8"]]
- 00c0fc78 ["INT_ADD", "register:40f0:8", ["const:c0fc78:8", "const:4:8"]]
- 00c0fc78 ["CALL", null, ["callee:00c10240:8"]]
+ 00c0fd14 ["INT_ADD", "register:40f0:8", ["const:c0fd14:8", "const:4:8"]]
+ 00c0fd14 ["CALL", null, ["callee:00c10240:8"]]
- 00c0fcb0 ["INT_ADD", "register:40f0:8", ["const:c0fcb0:8", "const:4:8"]]
- 00c0fcb0 ["CALL", null, ["callee:00c1ba7c:8"]]
+ 00c0fd4c ["INT_ADD", "register:40f0:8", ["const:c0fd4c:8", "const:4:8"]]
+ 00c0fd4c ["CALL", null, ["callee:00c1ba7c:8"]]
~~~


<a id="compare-eff315b49defbe611b8de5576215d116"></a>

### [`00c0ff80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0f/00c0ff80.md) → [`00c1001c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c1001c.md) _ZNKSt6__ndk17num_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_putES4_RNS_8ios_baseEcPKv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`00459668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459668.md) [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md)
- 新版 呼出元 0件  · 呼出先 10件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md)

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
    "old": {
      "definition_site": "00c10074",
      "incomplete_value": true,
      "site": "00c10074",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c10164",
      "incomplete_value": true,
      "site": "00c10164",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c1007c",
      "incomplete_value": true,
      "site": "00c10080",
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
      "00c10048",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10060",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10068",
      "PARAM",
      [
        "storage",
        "002a62fb",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c10048",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10060",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10068",
      "PARAM",
      [
        "storage",
        "002a629f",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c100a4 ["INT_ADD", "register:40f0:8", ["const:c100a4:8", "const:4:8"]]
- 00c100a4 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c10140 ["INT_ADD", "register:40f0:8", ["const:c10140:8", "const:4:8"]]
+ 00c10140 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c10148 ["INT_ADD", "register:40f0:8", ["const:c10148:8", "const:4:8"]]
- 00c10148 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c101e4 ["INT_ADD", "register:40f0:8", ["const:c101e4:8", "const:4:8"]]
+ 00c101e4 ["CALL", null, ["callee:00c57f20:8"]]
- 00c10164 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:c98:8"]]
- 00c10164 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c10200 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d98:8"]]
+ 00c10200 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-c158d50595625be637eb993a7f9b4ff8"></a>

### [`00c102d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c102d4.md) → [`00c10370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10370.md) _ZNKSt6__ndk17num_putIwNS_19ostreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_putES4_RNS_8ios_baseEwb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

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
    "old": {
      "definition_site": "00c1033c",
      "incomplete_value": true,
      "site": "00c1033c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "old": {
      "definition_site": "00c10344",
      "incomplete_value": true,
      "site": "00c10348",
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
    "old": {
      "definition_site": "00c10368",
      "incomplete_value": true,
      "site": "00c10370",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c103d0",
      "READ",
      [
        "storage",
        "00c9bbc8",
        null,
        "pointer"
      ]
    ],
    [
      "00c103d8",
      "DATA",
      [
        "storage",
        "01127e98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c103dc",
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
      "00c103d0",
      "READ",
      [
        "storage",
        "00c9bc98",
        null,
        "pointer"
      ]
    ],
    [
      "00c103d8",
      "DATA",
      [
        "storage",
        "01127f98",
        "std::__ndk1::numpunct<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c103dc",
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
- 00c10370 ["INT_ADD", "register:40f0:8", ["const:c10370:8", "const:4:8"]]
- 00c10370 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c1040c ["INT_ADD", "register:40f0:8", ["const:c1040c:8", "const:4:8"]]
+ 00c1040c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c1032c ["INT_ADD", "register:40f0:8", ["const:c1032c:8", "const:4:8"]]
- 00c1032c ["CALL", null, ["callee:00c58340:8"]]
+ 00c103c8 ["INT_ADD", "register:40f0:8", ["const:c103c8:8", "const:4:8"]]
+ 00c103c8 ["CALL", null, ["callee:00c58340:8"]]
- 00c10334 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:bc8:8"]]
- 00c10334 ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c103d0 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:c98:8"]]
+ 00c103d0 ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a6e272e64cde1b13f0d1ecbbd079d5eb"></a>

### [`00c104b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c104b4.md) → [`00c10550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10550.md) FUN_00c10550

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c104a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c104a4.md) · 呼出先 8件 [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c118e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c118e4.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 1件 [`00c10540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10540.md) · 呼出先 8件 [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c106b0",
      "incomplete_value": true,
      "site": "00c106b0",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c10594",
      "incomplete_value": true,
      "site": "00c105ac",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c10690",
      "incomplete_value": false,
      "site": "00c10694",
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
      "00c10624",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10630",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c1072c",
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
      "00c10624",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10630",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c1072c",
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
- 00c105ac ["INT_ADD", "register:40f0:8", ["const:c105ac:8", "const:4:8"]]
- 00c105ac ["CALL", null, ["callee:00c10240:8"]]
+ 00c10648 ["INT_ADD", "register:40f0:8", ["const:c10648:8", "const:4:8"]]
+ 00c10648 ["CALL", null, ["callee:00c10240:8"]]
- 00c10694 ["INT_ADD", "register:40f0:8", ["const:c10694:8", "const:4:8"]]
- 00c10694 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c10730 ["INT_ADD", "register:40f0:8", ["const:c10730:8", "const:4:8"]]
+ 00c10730 ["CALL", null, ["callee:00c57f20:8"]]
- 00c106ac ["INT_ADD", "register:40f0:8", ["const:c106ac:8", "const:4:8"]]
- 00c106ac ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c10748 ["INT_ADD", "register:40f0:8", ["const:c10748:8", "const:4:8"]]
+ 00c10748 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-e2096a00ddea318bb783747b1dba03a5"></a>

### [`00c10700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c10700.md) → [`00c1079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c1079c.md) FUN_00c1079c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c106f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c106f0.md) · 呼出先 8件 [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c118e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c118e4.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 1件 [`00c1078c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c1078c.md) · 呼出先 8件 [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c108fc",
      "incomplete_value": true,
      "site": "00c108fc",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c107e0",
      "incomplete_value": true,
      "site": "00c107f8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c108dc",
      "incomplete_value": false,
      "site": "00c108e0",
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
      "00c10870",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1087c",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10978",
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
      "00c10870",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1087c",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10978",
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
- 00c107f8 ["INT_ADD", "register:40f0:8", ["const:c107f8:8", "const:4:8"]]
- 00c107f8 ["CALL", null, ["callee:00c10240:8"]]
+ 00c10894 ["INT_ADD", "register:40f0:8", ["const:c10894:8", "const:4:8"]]
+ 00c10894 ["CALL", null, ["callee:00c10240:8"]]
- 00c108e0 ["INT_ADD", "register:40f0:8", ["const:c108e0:8", "const:4:8"]]
- 00c108e0 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c1097c ["INT_ADD", "register:40f0:8", ["const:c1097c:8", "const:4:8"]]
+ 00c1097c ["CALL", null, ["callee:00c57f20:8"]]
- 00c108f8 ["INT_ADD", "register:40f0:8", ["const:c108f8:8", "const:4:8"]]
- 00c108f8 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c10994 ["INT_ADD", "register:40f0:8", ["const:c10994:8", "const:4:8"]]
+ 00c10994 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-a7716752db1a45f309471a2ad97848c0"></a>

### [`00c1094c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c1094c.md) → [`00c109e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c109e8.md) FUN_00c109e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c1093c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c1093c.md) · 呼出先 8件 [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c118e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c118e4.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 1件 [`00c109d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c109d8.md) · 呼出先 8件 [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.60% / 新版 93.60%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c10b2c",
      "incomplete_value": true,
      "site": "00c10b2c",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c10b0c",
      "incomplete_value": false,
      "site": "00c10b10",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c10b1c",
      "incomplete_value": false,
      "site": "00c10b28",
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
      "00c10aa0",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10aac",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10ba8",
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
      "00c10aa0",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10aac",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10ba8",
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
- 00c10b10 ["INT_ADD", "register:40f0:8", ["const:c10b10:8", "const:4:8"]]
- 00c10b10 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c10bac ["INT_ADD", "register:40f0:8", ["const:c10bac:8", "const:4:8"]]
+ 00c10bac ["CALL", null, ["callee:00c57f20:8"]]
- 00c10b28 ["INT_ADD", "register:40f0:8", ["const:c10b28:8", "const:4:8"]]
- 00c10b28 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c10bc4 ["INT_ADD", "register:40f0:8", ["const:c10bc4:8", "const:4:8"]]
+ 00c10bc4 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c10b2c ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:c98:8"]]
- 00c10b2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c10bc8 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d98:8"]]
+ 00c10bc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-10bd687401cdfa169ece82e0c89daa0e"></a>

### [`00c10b7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c10b7c.md) → [`00c10c18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10c18.md) FUN_00c10c18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c10b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c10b6c.md) · 呼出先 8件 [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c118e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c118e4.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 1件 [`00c10c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10c08.md) · 呼出先 8件 [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 93.60% / 新版 93.60%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c10d5c",
      "incomplete_value": true,
      "site": "00c10d5c",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c10c40",
      "incomplete_value": true,
      "site": "00c10c58",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c10d3c",
      "incomplete_value": false,
      "site": "00c10d40",
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
      "00c10cd0",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10cdc",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10dd8",
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
      "00c10cd0",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10cdc",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10dd8",
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
- 00c10c58 ["INT_ADD", "register:40f0:8", ["const:c10c58:8", "const:4:8"]]
- 00c10c58 ["CALL", null, ["callee:00c10240:8"]]
+ 00c10cf4 ["INT_ADD", "register:40f0:8", ["const:c10cf4:8", "const:4:8"]]
+ 00c10cf4 ["CALL", null, ["callee:00c10240:8"]]
- 00c10d40 ["INT_ADD", "register:40f0:8", ["const:c10d40:8", "const:4:8"]]
- 00c10d40 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c10ddc ["INT_ADD", "register:40f0:8", ["const:c10ddc:8", "const:4:8"]]
+ 00c10ddc ["CALL", null, ["callee:00c57f20:8"]]
- 00c10d58 ["INT_ADD", "register:40f0:8", ["const:c10d58:8", "const:4:8"]]
- 00c10d58 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c10df4 ["INT_ADD", "register:40f0:8", ["const:c10df4:8", "const:4:8"]]
+ 00c10df4 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-4f6d82d10ef9d49f5e6702352a957a7b"></a>

### [`00c10dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c10dac.md) → [`00c10e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10e48.md) FUN_00c10e48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c10d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c10d9c.md) · 呼出先 12件 [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c118e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c118e4.md) [`00c1b9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1b/00c1b9e0.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c10e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10e38.md) · 呼出先 12件 [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c110f0",
      "incomplete_value": false,
      "site": "00c110f0",
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
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c11130",
      "incomplete_value": true,
      "site": "00c11130",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c11168",
      "incomplete_value": true,
      "site": "00c11168",
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
            "const:c98:8"
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
      "00c10f48",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10f54",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10f98",
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
      "00c10f48",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c10f54",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c10f98",
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
- 00c10ec8 ["INT_ADD", "register:40f0:8", ["const:c10ec8:8", "const:4:8"]]
- 00c10ec8 ["CALL", null, ["callee:00c10240:8"]]
+ 00c10f64 ["INT_ADD", "register:40f0:8", ["const:c10f64:8", "const:4:8"]]
+ 00c10f64 ["CALL", null, ["callee:00c10240:8"]]
- 00c10f20 ["INT_ADD", "register:40f0:8", ["const:c10f20:8", "const:4:8"]]
- 00c10f20 ["CALL", null, ["callee:00c10240:8"]]
+ 00c10fbc ["INT_ADD", "register:40f0:8", ["const:c10fbc:8", "const:4:8"]]
+ 00c10fbc ["CALL", null, ["callee:00c10240:8"]]
- 00c10f58 ["INT_ADD", "register:40f0:8", ["const:c10f58:8", "const:4:8"]]
- 00c10f58 ["CALL", null, ["callee:00c1ba7c:8"]]
+ 00c10ff4 ["INT_ADD", "register:40f0:8", ["const:c10ff4:8", "const:4:8"]]
+ 00c10ff4 ["CALL", null, ["callee:00c1ba7c:8"]]
~~~


<a id="compare-a398ef1dd340e7955dabb8a6571c0d75"></a>

### [`00c1123c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c1123c.md) → [`00c112d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c112d8.md) FUN_00c112d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c1122c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c1122c.md) · 呼出先 12件 [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c118e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c118e4.md) [`00c1b9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1b/00c1b9e0.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c112c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c112c8.md) · 呼出先 12件 [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c11578",
      "incomplete_value": false,
      "site": "00c11578",
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
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c115b8",
      "incomplete_value": false,
      "site": "00c115b8",
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
    "ordinal": 23,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c115f0",
      "incomplete_value": true,
      "site": "00c115f0",
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
            "const:c98:8"
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
      "00c113d4",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c113dc",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c11424",
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
      "00c113d4",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c113dc",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c11424",
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
- 00c11354 ["INT_ADD", "register:40f0:8", ["const:c11354:8", "const:4:8"]]
- 00c11354 ["CALL", null, ["callee:00c10240:8"]]
+ 00c113f0 ["INT_ADD", "register:40f0:8", ["const:c113f0:8", "const:4:8"]]
+ 00c113f0 ["CALL", null, ["callee:00c10240:8"]]
- 00c113e4 ["INT_ADD", "register:40f0:8", ["const:c113e4:8", "const:4:8"]]
- 00c113e4 ["CALL", null, ["callee:00c1ba7c:8"]]
+ 00c11480 ["INT_ADD", "register:40f0:8", ["const:c11480:8", "const:4:8"]]
+ 00c11480 ["CALL", null, ["callee:00c1ba7c:8"]]
- 00c11410 ["INT_ADD", "register:40f0:8", ["const:c11410:8", "const:4:8"]]
- 00c11410 ["CALL", null, ["callee:00c1ba7c:8"]]
+ 00c114ac ["INT_ADD", "register:40f0:8", ["const:c114ac:8", "const:4:8"]]
+ 00c114ac ["CALL", null, ["callee:00c1ba7c:8"]]
~~~


<a id="compare-49bb68b71afcc40ac2d259dd9fab24a0"></a>

### [`00c116b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c116b4.md) → [`00c11750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11750.md) _ZNKSt6__ndk17num_putIwNS_19ostreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_putES4_RNS_8ios_baseEwPKv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c101a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c10/00c101a4.md) [`00c118e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c118e4.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c10240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10240.md) [`00c11980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11980.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c118a4",
      "incomplete_value": true,
      "site": "00c118a4",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c116fc",
      "incomplete_value": true,
      "site": "00c11718",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c11704",
      "incomplete_value": false,
      "site": "00c11718",
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
            "const:2fb:8"
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
      "00c11780",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11798",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c117a0",
      "PARAM",
      [
        "storage",
        "002a62fb",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c11780",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c11798",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c117a0",
      "PARAM",
      [
        "storage",
        "002a629f",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c11718 ["INT_ADD", "register:40f0:8", ["const:c11718:8", "const:4:8"]]
- 00c11718 ["CALL", null, ["callee:00c10240:8"]]
+ 00c117b4 ["INT_ADD", "register:40f0:8", ["const:c117b4:8", "const:4:8"]]
+ 00c117b4 ["CALL", null, ["callee:00c10240:8"]]
- 00c117e0 ["INT_ADD", "register:40f0:8", ["const:c117e0:8", "const:4:8"]]
- 00c117e0 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c1187c ["INT_ADD", "register:40f0:8", ["const:c1187c:8", "const:4:8"]]
+ 00c1187c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c11808 ["INT_ADD", "register:40f0:8", ["const:c11808:8", "const:4:8"]]
- 00c11808 ["CALL", null, ["callee:00c58360:8"]]
+ 00c118a4 ["INT_ADD", "register:40f0:8", ["const:c118a4:8", "const:4:8"]]
+ 00c118a4 ["CALL", null, ["callee:00c58360:8"]]
~~~


<a id="compare-1cb53410ac105edb14491da0e80e1b0f"></a>

### [`00c11ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c11ae4.md) → [`00c11b80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11b80.md) _ZNSt6__ndk19__num_putIcE21__widen_and_group_intEPcS2_S2_S2_RS2_S3_RKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e5d0.md) · 呼出先 4件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 1件 [`00c5e6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e6a0.md) · 呼出先 4件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c11b2c",
      "incomplete_value": true,
      "site": "00c11b2c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c11b94",
      "incomplete_value": true,
      "site": "00c11b94",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c11b38",
      "incomplete_value": true,
      "site": "00c11b3c",
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
      "00c11bb0",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c11bc8",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c11bd0",
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
      "00c11bb0",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c11bc8",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c11bd0",
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
- 00c11b14 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:c30:8"]]
- 00c11b14 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c11bb0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d00:8"]]
+ 00c11bb0 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
- 00c11b64 ["INT_ADD", "register:40f0:8", ["const:c11b64:8", "const:4:8"]]
- 00c11b64 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c11c00 ["INT_ADD", "register:40f0:8", ["const:c11c00:8", "const:4:8"]]
+ 00c11c00 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c11bc8 ["INT_ADD", "register:40f0:8", ["const:c11bc8:8", "const:4:8"]]
- 00c11bc8 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c11c64 ["INT_ADD", "register:40f0:8", ["const:c11c64:8", "const:4:8"]]
+ 00c11c64 ["CALL", null, ["callee:00c5dfb0:8"]]
~~~


<a id="compare-a6aa6495b90eeda1e648f9e631eaf602"></a>

### [`00c11ed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c11/00c11ed8.md) → [`00c11f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c11f74.md) _ZNSt6__ndk19__num_putIcE23__widen_and_group_floatEPcS2_S2_S2_RS2_S3_RKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e5e0.md) · 呼出先 7件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5e6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e6b0.md) · 呼出先 7件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

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
    "old": {
      "definition_site": "00c11f20",
      "incomplete_value": true,
      "site": "00c11f20",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c11f88",
      "incomplete_value": true,
      "site": "00c11f88",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c1212c",
      "incomplete_value": true,
      "site": "00c1212c",
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
            "const:c98:8"
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
      "00c11fa4",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c11fbc",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c11fc4",
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
      "00c11fa4",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c11fbc",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c11fc4",
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
- 00c11f08 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:c30:8"]]
- 00c11f08 ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c11fa4 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d00:8"]]
+ 00c11fa4 ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
- 00c11f58 ["INT_ADD", "register:40f0:8", ["const:c11f58:8", "const:4:8"]]
- 00c11f58 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c11ff4 ["INT_ADD", "register:40f0:8", ["const:c11ff4:8", "const:4:8"]]
+ 00c11ff4 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c11fbc ["INT_ADD", "register:40f0:8", ["const:c11fbc:8", "const:4:8"]]
- 00c11fbc ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c12058 ["INT_ADD", "register:40f0:8", ["const:c12058:8", "const:4:8"]]
+ 00c12058 ["CALL", null, ["callee:00c5dfb0:8"]]
~~~


<a id="compare-5794d0b815675d83d5630a42e5dd76b3"></a>

### [`00c124d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c12/00c124d0.md) → [`00c1256c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c12/00c1256c.md) _ZNSt6__ndk19__num_putIwE21__widen_and_group_intEPcS2_S2_PwRS3_S4_RKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e5f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e5f0.md) · 呼出先 4件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 1件 [`00c5e6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e6c0.md) · 呼出先 4件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c12518",
      "incomplete_value": true,
      "site": "00c12518",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c12580",
      "incomplete_value": true,
      "site": "00c12580",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c12524",
      "incomplete_value": true,
      "site": "00c12528",
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
      "00c1259c",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c125b4",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c125bc",
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
      "00c1259c",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c125b4",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c125bc",
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
- 00c12550 ["INT_ADD", "register:40f0:8", ["const:c12550:8", "const:4:8"]]
- 00c12550 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c125ec ["INT_ADD", "register:40f0:8", ["const:c125ec:8", "const:4:8"]]
+ 00c125ec ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c125b4 ["INT_ADD", "register:40f0:8", ["const:c125b4:8", "const:4:8"]]
- 00c125b4 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c12650 ["INT_ADD", "register:40f0:8", ["const:c12650:8", "const:4:8"]]
+ 00c12650 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c12500 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:b40:8"]]
- 00c12500 ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c1259c ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:c10:8"]]
+ 00c1259c ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-72ac5c766207f67b97b061eaf37245c3"></a>

### [`00c128cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c12/00c128cc.md) → [`00c12968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c12/00c12968.md) _ZNSt6__ndk19__num_putIwE23__widen_and_group_floatEPcS2_S2_PwRS3_S4_RKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e600.md) · 呼出先 7件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5e6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e6d0.md) · 呼出先 7件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

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
    "old": {
      "definition_site": "00c12914",
      "incomplete_value": true,
      "site": "00c12914",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c12b18",
      "incomplete_value": true,
      "site": "00c12b18",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c12b98",
      "incomplete_value": false,
      "site": "00c12b98",
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
      "00c12998",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c129b0",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c129b8",
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
      "00c12998",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c129b0",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c129b8",
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
- 00c129b0 ["INT_ADD", "register:40f0:8", ["const:c129b0:8", "const:4:8"]]
- 00c129b0 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c12a4c ["INT_ADD", "register:40f0:8", ["const:c12a4c:8", "const:4:8"]]
+ 00c12a4c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c12afc ["INT_ADD", "register:40f0:8", ["const:c12afc:8", "const:4:8"]]
- 00c12afc ["CALL", null, ["callee:00c57f20:8"]]
+ 00c12b98 ["INT_ADD", "register:40f0:8", ["const:c12b98:8", "const:4:8"]]
+ 00c12b98 ["CALL", null, ["callee:00c57f20:8"]]
- 00c12b18 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:c98:8"]]
- 00c12b18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c12bb4 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d98:8"]]
+ 00c12bb4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-a8d355de71a4f21dcc6dc22c204b9397"></a>

### [`00c13478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c13478.md) → [`00c13514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13514.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE14do_get_weekdayES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c07b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07b18.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

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
    "old": {
      "definition_site": "00c134b8",
      "incomplete_value": true,
      "site": "00c134c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c134c8",
      "incomplete_value": true,
      "site": "00c134cc",
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
    "old": {
      "definition_site": "00c134e8",
      "incomplete_value": true,
      "site": "00c134f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c13554",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c1355c",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c13560",
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
      "00c13554",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c1355c",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c13560",
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
- 00c134f0 ["INT_ADD", "register:40f0:8", ["const:c134f0:8", "const:4:8"]]
- 00c134f0 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c1358c ["INT_ADD", "register:40f0:8", ["const:c1358c:8", "const:4:8"]]
+ 00c1358c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c134b0 ["INT_ADD", "register:40f0:8", ["const:c134b0:8", "const:4:8"]]
- 00c134b0 ["CALL", null, ["callee:00c58340:8"]]
+ 00c1354c ["INT_ADD", "register:40f0:8", ["const:c1354c:8", "const:4:8"]]
+ 00c1354c ["CALL", null, ["callee:00c58340:8"]]
- 00c134b8 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:c30:8"]]
- 00c134b8 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c13554 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:d00:8"]]
+ 00c13554 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cb908386ce70cce88d94871cc1f6992c"></a>

### [`00c1368c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c1368c.md) → [`00c13728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13728.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE16do_get_monthnameES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c07b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07b18.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

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
    "old": {
      "definition_site": "00c136cc",
      "incomplete_value": true,
      "site": "00c136d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c136dc",
      "incomplete_value": true,
      "site": "00c136e0",
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
    "old": {
      "definition_site": "00c136fc",
      "incomplete_value": true,
      "site": "00c13704",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c13768",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c13770",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c13774",
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
      "00c13768",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c13770",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c13774",
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
- 00c13704 ["INT_ADD", "register:40f0:8", ["const:c13704:8", "const:4:8"]]
- 00c13704 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c137a0 ["INT_ADD", "register:40f0:8", ["const:c137a0:8", "const:4:8"]]
+ 00c137a0 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c136c4 ["INT_ADD", "register:40f0:8", ["const:c136c4:8", "const:4:8"]]
- 00c136c4 ["CALL", null, ["callee:00c58340:8"]]
+ 00c13760 ["INT_ADD", "register:40f0:8", ["const:c13760:8", "const:4:8"]]
+ 00c13760 ["CALL", null, ["callee:00c58340:8"]]
- 00c136cc ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:c30:8"]]
- 00c136cc ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c13768 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:d00:8"]]
+ 00c13768 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9f3601b21e63060b95cdc333752710e0"></a>

### [`00c13890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c13890.md) → [`00c1392c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c1392c.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE11do_get_yearES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

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
    "old": {
      "definition_site": "00c138cc",
      "incomplete_value": true,
      "site": "00c138d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c13900",
      "incomplete_value": true,
      "site": "00c13908",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c13998",
      "incomplete_value": false,
      "site": "00c139a4",
      "value": [
        "leaf",
        "const:c36054:8"
      ]
    },
    "old": {
      "definition_site": "00c138fc",
      "incomplete_value": false,
      "site": "00c13908",
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
      "00c13968",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c13970",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c13974",
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
      "00c13968",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c13970",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c13974",
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
- 00c13908 ["INT_ADD", "register:40f0:8", ["const:c13908:8", "const:4:8"]]
- 00c13908 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c139a4 ["INT_ADD", "register:40f0:8", ["const:c139a4:8", "const:4:8"]]
+ 00c139a4 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c138c4 ["INT_ADD", "register:40f0:8", ["const:c138c4:8", "const:4:8"]]
- 00c138c4 ["CALL", null, ["callee:00c58340:8"]]
+ 00c13960 ["INT_ADD", "register:40f0:8", ["const:c13960:8", "const:4:8"]]
+ 00c13960 ["CALL", null, ["callee:00c58340:8"]]
- 00c138cc ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:c30:8"]]
- 00c138cc ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c13968 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:d00:8"]]
+ 00c13968 ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fee59226a8f182f1def590080d878f62"></a>

### [`00c13a14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c13/00c13a14.md) → [`00c13ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13ab0.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_getES4_S4_RNS_8ios_baseERjP2tmcc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c07b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07b18.md) [`00c148ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c148ac.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md) [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

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
    "old": {
      "definition_site": "00c13a6c",
      "incomplete_value": true,
      "site": "00c13a6c",
      "value": [
        "LOAD",
        "8",
        [
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
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c13c60",
      "incomplete_value": true,
      "site": "00c13c74",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ebf:8"
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
    "old": {
      "definition_site": "00c13a74",
      "incomplete_value": true,
      "site": "00c13a78",
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
      "00c13b00",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c13b08",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c13b0c",
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
      "00c13b00",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c13b08",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c13b0c",
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
- 00c13aa0 ["INT_ADD", "register:40f0:8", ["const:c13aa0:8", "const:4:8"]]
- 00c13aa0 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c13b3c ["INT_ADD", "register:40f0:8", ["const:c13b3c:8", "const:4:8"]]
+ 00c13b3c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c13a5c ["INT_ADD", "register:40f0:8", ["const:c13a5c:8", "const:4:8"]]
- 00c13a5c ["CALL", null, ["callee:00c58340:8"]]
+ 00c13af8 ["INT_ADD", "register:40f0:8", ["const:c13af8:8", "const:4:8"]]
+ 00c13af8 ["CALL", null, ["callee:00c58340:8"]]
- 00c13a64 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:c30:8"]]
- 00c13a64 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c13b00 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:d00:8"]]
+ 00c13b00 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-056a0a46630fc2d612cee526a60d666d"></a>

### [`00c14bf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c14/00c14bf0.md) → [`00c14c8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14c8c.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE3getES4_S4_RNS_8ios_baseERjP2tmPKwSC_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e630.md) · 呼出先 5件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 1件 [`00c5e700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e700.md) · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c14c78",
      "incomplete_value": true,
      "site": "00c14c80",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c14d10",
      "incomplete_value": false,
      "site": "00c14d1c",
      "value": [
        "leaf",
        "const:c36054:8"
      ]
    },
    "old": {
      "definition_site": "00c14c74",
      "incomplete_value": false,
      "site": "00c14c80",
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
      "00c14ce0",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c14ce8",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c14cec",
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
      "00c14ce0",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c14ce8",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c14cec",
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
- 00c14c80 ["INT_ADD", "register:40f0:8", ["const:c14c80:8", "const:4:8"]]
- 00c14c80 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c14d1c ["INT_ADD", "register:40f0:8", ["const:c14d1c:8", "const:4:8"]]
+ 00c14d1c ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c14c3c ["INT_ADD", "register:40f0:8", ["const:c14c3c:8", "const:4:8"]]
- 00c14c3c ["CALL", null, ["callee:00c58340:8"]]
+ 00c14cd8 ["INT_ADD", "register:40f0:8", ["const:c14cd8:8", "const:4:8"]]
+ 00c14cd8 ["CALL", null, ["callee:00c58340:8"]]
- 00c14c44 ["INT_ADD", "tmp:0:8", ["register:40e0:8", "const:b40:8"]]
- 00c14c44 ["LOAD", "register:40e0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c14ce0 ["INT_ADD", "tmp:0:8", ["register:40e0:8", "const:c10:8"]]
+ 00c14ce0 ["LOAD", "register:40e0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a1c30893ae57130df047f633a6ef2ae9"></a>

### [`00c150f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c150f0.md) → [`00c1518c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c1518c.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE11do_get_timeES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e630.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e700.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c1510c",
      "incomplete_value": true,
      "site": "00c15118",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:978:8"
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
    "old": {
      "definition_site": "00c1510c",
      "incomplete_value": true,
      "site": "00c15118",
      "value": [
        "LOAD",
        "16",
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
      "00c151a8",
      "READ",
      [
        "storage",
        "002e1978",
        null,
        null
      ]
    ],
    [
      "00c151a8",
      "READ",
      [
        "storage",
        "002e1988",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c151a8",
      "READ",
      [
        "storage",
        "002e19b8",
        null,
        null
      ]
    ],
    [
      "00c151a8",
      "READ",
      [
        "storage",
        "002e19c8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c15104 ["COPY", "tmp:0:8", ["const:978:8"]]
- 00c15104 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c15104 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c15104 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c151a0 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 00c151a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c151a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c151a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c1511c ["INT_ADD", "register:40f0:8", ["const:c1511c:8", "const:4:8"]]
- 00c1511c ["CALL", null, ["callee:00c5e700:8"]]
+ 00c151b8 ["INT_ADD", "register:40f0:8", ["const:c151b8:8", "const:4:8"]]
+ 00c151b8 ["CALL", null, ["callee:00c5e700:8"]]
~~~


<a id="compare-30c85b810441d4f79a7ca84cbe7b9a6b"></a>

### [`00c151c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c151c0.md) → [`00c1525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c1525c.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE14do_get_weekdayES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c0aff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0aff0.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

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
    "old": {
      "definition_site": "00c15200",
      "incomplete_value": true,
      "site": "00c15208",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c15210",
      "incomplete_value": true,
      "site": "00c15214",
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
    "old": {
      "definition_site": "00c15230",
      "incomplete_value": true,
      "site": "00c15238",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c1529c",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c152a4",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c152a8",
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
      "00c1529c",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c152a4",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c152a8",
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
- 00c15238 ["INT_ADD", "register:40f0:8", ["const:c15238:8", "const:4:8"]]
- 00c15238 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c152d4 ["INT_ADD", "register:40f0:8", ["const:c152d4:8", "const:4:8"]]
+ 00c152d4 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c151f8 ["INT_ADD", "register:40f0:8", ["const:c151f8:8", "const:4:8"]]
- 00c151f8 ["CALL", null, ["callee:00c58340:8"]]
+ 00c15294 ["INT_ADD", "register:40f0:8", ["const:c15294:8", "const:4:8"]]
+ 00c15294 ["CALL", null, ["callee:00c58340:8"]]
- 00c15200 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:b40:8"]]
- 00c15200 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c1529c ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:c10:8"]]
+ 00c1529c ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-935383ff3b96a338f19c6b8f814ca92d"></a>

### [`00c153d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c153d4.md) → [`00c15470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15470.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE16do_get_monthnameES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c0aff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0aff0.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

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
    "old": {
      "definition_site": "00c15414",
      "incomplete_value": true,
      "site": "00c1541c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c15424",
      "incomplete_value": true,
      "site": "00c15428",
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
    "old": {
      "definition_site": "00c15444",
      "incomplete_value": true,
      "site": "00c1544c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c154b0",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c154b8",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c154bc",
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
      "00c154b0",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c154b8",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c154bc",
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
- 00c1544c ["INT_ADD", "register:40f0:8", ["const:c1544c:8", "const:4:8"]]
- 00c1544c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c154e8 ["INT_ADD", "register:40f0:8", ["const:c154e8:8", "const:4:8"]]
+ 00c154e8 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c1540c ["INT_ADD", "register:40f0:8", ["const:c1540c:8", "const:4:8"]]
- 00c1540c ["CALL", null, ["callee:00c58340:8"]]
+ 00c154a8 ["INT_ADD", "register:40f0:8", ["const:c154a8:8", "const:4:8"]]
+ 00c154a8 ["CALL", null, ["callee:00c58340:8"]]
- 00c15414 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:b40:8"]]
- 00c15414 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c154b0 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:c10:8"]]
+ 00c154b0 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-476dd313a97333addff09a5bf73b94f2"></a>

### [`00c155d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c155d8.md) → [`00c15674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15674.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE11do_get_yearES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c165f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c16/00c165f0.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

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
    "old": {
      "definition_site": "00c15614",
      "incomplete_value": true,
      "site": "00c1561c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c15624",
      "incomplete_value": true,
      "site": "00c15628",
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
    "old": {
      "definition_site": "00c15648",
      "incomplete_value": true,
      "site": "00c15650",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c156b0",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c156b8",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c156bc",
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
      "00c156b0",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c156b8",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c156bc",
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
- 00c15650 ["INT_ADD", "register:40f0:8", ["const:c15650:8", "const:4:8"]]
- 00c15650 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c156ec ["INT_ADD", "register:40f0:8", ["const:c156ec:8", "const:4:8"]]
+ 00c156ec ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c1560c ["INT_ADD", "register:40f0:8", ["const:c1560c:8", "const:4:8"]]
- 00c1560c ["CALL", null, ["callee:00c58340:8"]]
+ 00c156a8 ["INT_ADD", "register:40f0:8", ["const:c156a8:8", "const:4:8"]]
+ 00c156a8 ["CALL", null, ["callee:00c58340:8"]]
- 00c15614 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:b40:8"]]
- 00c15614 ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c156b0 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:c10:8"]]
+ 00c156b0 ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-01262574f2c0e407550a4c8a564b7f1d"></a>

### [`00c1575c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c15/00c1575c.md) → [`00c157f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c157f8.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_getES4_S4_RNS_8ios_baseERjP2tmcc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c0aff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0aff0.md) [`00c165f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c16/00c165f0.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md) [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

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
    "old": {
      "definition_site": "00c157b4",
      "incomplete_value": true,
      "site": "00c157b4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c159a4",
      "incomplete_value": true,
      "site": "00c159b8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ecc:8"
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
    "old": {
      "definition_site": "00c159a4",
      "incomplete_value": true,
      "site": "00c159b8",
      "value": [
        "LOAD",
        "16",
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
      "00c15848",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c15850",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c15854",
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
      "00c15848",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c15850",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c15854",
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
- 00c157e8 ["INT_ADD", "register:40f0:8", ["const:c157e8:8", "const:4:8"]]
- 00c157e8 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c15884 ["INT_ADD", "register:40f0:8", ["const:c15884:8", "const:4:8"]]
+ 00c15884 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c157a4 ["INT_ADD", "register:40f0:8", ["const:c157a4:8", "const:4:8"]]
- 00c157a4 ["CALL", null, ["callee:00c58340:8"]]
+ 00c15840 ["INT_ADD", "register:40f0:8", ["const:c15840:8", "const:4:8"]]
+ 00c15840 ["CALL", null, ["callee:00c58340:8"]]
- 00c157ac ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:b40:8"]]
- 00c157ac ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c15848 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:c10:8"]]
+ 00c15848 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6523c033b950e9dd753d5042ca36b5d9"></a>

### [`00c1694c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c16/00c1694c.md) → [`00c169e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c169e8.md) _ZNKSt6__ndk18time_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE3putES4_RNS_8ios_baseEcPK2tmPKcSC_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5a780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a780.md) · 呼出先 5件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 1件 [`00c5a850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a850.md) · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c1699c",
      "incomplete_value": true,
      "site": "00c169a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c169ac",
      "incomplete_value": true,
      "site": "00c169b0",
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
    "old": {
      "definition_site": "00c169cc",
      "incomplete_value": true,
      "site": "00c169d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c16a38",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "00c16a40",
      "DATA",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c16a44",
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
      "00c16a38",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c16a40",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c16a44",
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
- 00c169d4 ["INT_ADD", "register:40f0:8", ["const:c169d4:8", "const:4:8"]]
- 00c169d4 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c16a70 ["INT_ADD", "register:40f0:8", ["const:c16a70:8", "const:4:8"]]
+ 00c16a70 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c16994 ["INT_ADD", "register:40f0:8", ["const:c16994:8", "const:4:8"]]
- 00c16994 ["CALL", null, ["callee:00c58340:8"]]
+ 00c16a30 ["INT_ADD", "register:40f0:8", ["const:c16a30:8", "const:4:8"]]
+ 00c16a30 ["CALL", null, ["callee:00c58340:8"]]
- 00c1699c ["INT_ADD", "tmp:0:8", ["register:40d8:8", "const:c30:8"]]
- 00c1699c ["LOAD", "register:40d8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c16a38 ["INT_ADD", "tmp:0:8", ["register:40d8:8", "const:d00:8"]]
+ 00c16a38 ["LOAD", "register:40d8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ded6d1b02d3c1ecdfd6aaba4f753db8f"></a>

### [`00c16d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c16/00c16d2c.md) → [`00c16dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c16dc8.md) _ZNKSt6__ndk18time_putIwNS_19ostreambuf_iteratorIwNS_11char_traitsIwEEEEE3putES4_RNS_8ios_baseEwPK2tmPKwSC_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md)

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
    "old": {
      "definition_site": "00c16d7c",
      "incomplete_value": true,
      "site": "00c16d84",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c16d8c",
      "incomplete_value": true,
      "site": "00c16d90",
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
    "old": {
      "definition_site": "00c16dac",
      "incomplete_value": true,
      "site": "00c16db4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c16e18",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00c16e20",
      "DATA",
      [
        "storage",
        "01127e08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c16e24",
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
      "00c16e18",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c16e20",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c16e24",
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
- 00c16db4 ["INT_ADD", "register:40f0:8", ["const:c16db4:8", "const:4:8"]]
- 00c16db4 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c16e50 ["INT_ADD", "register:40f0:8", ["const:c16e50:8", "const:4:8"]]
+ 00c16e50 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c16d74 ["INT_ADD", "register:40f0:8", ["const:c16d74:8", "const:4:8"]]
- 00c16d74 ["CALL", null, ["callee:00c58340:8"]]
+ 00c16e10 ["INT_ADD", "register:40f0:8", ["const:c16e10:8", "const:4:8"]]
+ 00c16e10 ["CALL", null, ["callee:00c58340:8"]]
- 00c16d7c ["INT_ADD", "tmp:0:8", ["register:40d8:8", "const:b40:8"]]
- 00c16d7c ["LOAD", "register:40d8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c16e18 ["INT_ADD", "tmp:0:8", ["register:40d8:8", "const:c10:8"]]
+ 00c16e18 ["LOAD", "register:40d8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-bca228839d7725f56602cb91e65876a0"></a>

### [`00c17098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c17/00c17098.md) → [`00c17134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17134.md) _ZNKSt6__ndk110__time_put8__do_putEPwRS1_PK2tmcc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e670.md) · 呼出先 5件 [`00440c3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440c3c.md) [`00c5dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfb0.md) [`00c5e570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e570.md) [`00c5e660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e660.md) [`00c5e680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e680.md)
- 新版 呼出元 1件 [`00c5e740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e740.md) · 呼出先 5件 [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md) [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5e730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e730.md) [`00c5e750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e750.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.25% / 新版 98.25%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c17170",
      "incomplete_value": false,
      "site": "00c17174",
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
            "const:de5:8"
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
      "00c1720c",
      "PARAM",
      [
        "storage",
        "0029fde5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c1720c",
      "PARAM",
      [
        "storage",
        "0029fd98",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c17174 ["INT_ADD", "register:40f0:8", ["const:c17174:8", "const:4:8"]]
- 00c17174 ["CALL", null, ["callee:00c5e080:8"]]
+ 00c17210 ["INT_ADD", "register:40f0:8", ["const:c17210:8", "const:4:8"]]
+ 00c17210 ["CALL", null, ["callee:00c5e080:8"]]
- 00c170f8 ["INT_ADD", "register:40f0:8", ["const:c170f8:8", "const:4:8"]]
- 00c170f8 ["CALL", null, ["callee:00c5e730:8"]]
+ 00c17194 ["INT_ADD", "register:40f0:8", ["const:c17194:8", "const:4:8"]]
+ 00c17194 ["CALL", null, ["callee:00c5e730:8"]]
- 00c17110 ["INT_ADD", "register:40f0:8", ["const:c17110:8", "const:4:8"]]
- 00c17110 ["CALL", null, ["callee:00c5e640:8"]]
+ 00c171ac ["INT_ADD", "register:40f0:8", ["const:c171ac:8", "const:4:8"]]
+ 00c171ac ["CALL", null, ["callee:00c5e640:8"]]
~~~


<a id="compare-61ba1cf5a37949126449a43950892cab"></a>

### [`00c172e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c17/00c172e8.md) → [`00c17384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17384.md) _ZNKSt6__ndk110moneypunctIwLb0EE16do_negative_signEv

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
    "old": {
      "definition_site": "00c172f4",
      "incomplete_value": true,
      "site": "00c172fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:fc0:8"
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
      "00c17390",
      "READ",
      [
        "storage",
        "002c3fc0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c17390",
      "READ",
      [
        "storage",
        "002c4000",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c172ec ["COPY", "register:4048:8", ["const:2c3000:8"]]
+ 00c17388 ["COPY", "register:4048:8", ["const:2c4000:8"]]
- 00c172f4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:fc0:8"]]
- 00c172f4 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00c172f4 ["COPY", "register:5008:8", ["const:0:8"]]
- 00c172f4 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c17390 ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 00c17390 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c17390 ["COPY", "register:5008:8", ["const:0:8"]]
+ 00c17390 ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-1c5d008c68bcd768465f485aca74ce66"></a>

### [`00c17378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c17/00c17378.md) → [`00c17414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17414.md) _ZNKSt6__ndk110moneypunctIwLb1EE16do_negative_signEv

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
    "old": {
      "definition_site": "00c17384",
      "incomplete_value": true,
      "site": "00c1738c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:fc0:8"
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
      "00c17420",
      "READ",
      [
        "storage",
        "002c3fc0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c17420",
      "READ",
      [
        "storage",
        "002c4000",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1737c ["COPY", "register:4048:8", ["const:2c3000:8"]]
+ 00c17418 ["COPY", "register:4048:8", ["const:2c4000:8"]]
- 00c17384 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:fc0:8"]]
- 00c17384 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00c17384 ["COPY", "register:5008:8", ["const:0:8"]]
- 00c17384 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c17420 ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 00c17420 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c17420 ["COPY", "register:5008:8", ["const:0:8"]]
+ 00c17420 ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-f907e914bc31dde2ba0c7ebed182bce8"></a>

### [`00c177b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c17/00c177b0.md) → [`00c1784c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c1784c.md) _ZNKSt6__ndk19money_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_getES4_S4_bRNS_8ios_baseERjRe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c17af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c17/00c17af4.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fd0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c17b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17b90.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md)

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
    "old": {
      "definition_site": "00c1780c",
      "incomplete_value": true,
      "site": "00c17814",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c178b8",
      "incomplete_value": true,
      "site": "00c178c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d8c:8"
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
    "old": {
      "definition_site": "00c17840",
      "incomplete_value": true,
      "site": "00c17848",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c1787c",
      "READ",
      [
        "storage",
        "00c9bbd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c17894",
      "DATA",
      [
        "storage",
        "00c17af4",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c178a8",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c1787c",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ],
    [
      "00c17894",
      "DATA",
      [
        "storage",
        "00c17b90",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c178a8",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c17848 ["INT_ADD", "register:40f0:8", ["const:c17848:8", "const:4:8"]]
- 00c17848 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c178e4 ["INT_ADD", "register:40f0:8", ["const:c178e4:8", "const:4:8"]]
+ 00c178e4 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c178b0 ["COPY", "tmp:0:8", ["const:d8c:8"]]
- 00c178b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00c178b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00c178b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00c1794c ["COPY", "tmp:0:8", ["const:d3f:8"]]
+ 00c1794c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00c1794c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00c1794c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00c178e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c178e4 ["INT_ADD", "register:40f0:8", ["const:c178e4:8", "const:4:8"]]
- 00c178e4 ["CALLIND", null, ["register:0:8"]]
+ 00c17980 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c17980 ["INT_ADD", "register:40f0:8", ["const:c17980:8", "const:4:8"]]
+ 00c17980 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a31b78f6b1e77add44e18be1528bfc67"></a>

### [`00c17afc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c17/00c17afc.md) → [`00c17b98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17b98.md) _ZNSt6__ndk19money_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE8__do_getERS4_S4_bRKNS_6localeEjRjRbRKNS_5ctypeIcEERNS_10unique_ptr

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e690.md) · 呼出先 11件 [`00440c3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440c3c.md) [`00c17af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c17/00c17af4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c58600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58600.md)
- 新版 呼出元 1件 [`00c5e760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e760.md) · 呼出先 11件 [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00c17b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17b90.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c586d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586d0.md)

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
    "old": {
      "definition_site": "00c17c68",
      "incomplete_value": true,
      "site": "00c17c70",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
    "ordinal": 42,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c17f44",
      "incomplete_value": true,
      "site": "00c17f48",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 48,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c17f7c",
      "incomplete_value": true,
      "site": "00c17f80",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d28:8"
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
      "00c17d04",
      "READ",
      [
        "storage",
        "00c9bbd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c17d0c",
      "DATA",
      [
        "storage",
        "00c17af4",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c17f28",
      "READ",
      [
        "storage",
        "00c9bbd0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c17d04",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ],
    [
      "00c17d0c",
      "DATA",
      [
        "storage",
        "00c17b90",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c17f28",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c17b70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c17b70 ["INT_ADD", "register:40f0:8", ["const:c17b70:8", "const:4:8"]]
- 00c17b70 ["CALLIND", null, ["register:0:8"]]
+ 00c17c0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c17c0c ["INT_ADD", "register:40f0:8", ["const:c17c0c:8", "const:4:8"]]
+ 00c17c0c ["CALLIND", null, ["register:0:8"]]
- 00c17c0c ["INT_ADD", "register:40f0:8", ["const:c17c0c:8", "const:4:8"]]
- 00c17c0c ["CALL", null, ["callee:00c5e780:8"]]
+ 00c17ca8 ["INT_ADD", "register:40f0:8", ["const:c17ca8:8", "const:4:8"]]
+ 00c17ca8 ["CALL", null, ["callee:00c5e780:8"]]
- 00c17c68 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:bd0:8"]]
- 00c17c68 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c17d04 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:ca0:8"]]
+ 00c17d04 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c17d48aadae848d5cd84746ea2933e15"></a>

### [`00c18d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c18/00c18d04.md) → [`00c18da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c18/00c18da0.md) _ZNKSt6__ndk19money_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_getES4_S4_bRNS_8ios_baseERjRNS_12basic_stringIcS3_NS_9allocato

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c17af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c17/00c17af4.md) [`00c18fc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c18/00c18fc4.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c17b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17b90.md) [`00c19060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c19/00c19060.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

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
    "old": {
      "definition_site": "00c18d4c",
      "incomplete_value": true,
      "site": "00c18d4c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c18d68",
      "incomplete_value": true,
      "site": "00c18d68",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00c18d70",
      "incomplete_value": true,
      "site": "00c18d74",
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
      "00c18dd0",
      "READ",
      [
        "storage",
        "00c9bbd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c18de8",
      "DATA",
      [
        "storage",
        "00c17af4",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c18dfc",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c18dd0",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ],
    [
      "00c18de8",
      "DATA",
      [
        "storage",
        "00c17b90",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c18dfc",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c18d9c ["INT_ADD", "register:40f0:8", ["const:c18d9c:8", "const:4:8"]]
- 00c18d9c ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c18e38 ["INT_ADD", "register:40f0:8", ["const:c18e38:8", "const:4:8"]]
+ 00c18e38 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c18d34 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bd0:8"]]
- 00c18d34 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c18dd0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ca0:8"]]
+ 00c18dd0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c18d58 ["INT_ADD", "register:40f0:8", ["const:c18d58:8", "const:4:8"]]
- 00c18d58 ["CALL", null, ["callee:00c58340:8"]]
+ 00c18df4 ["INT_ADD", "register:40f0:8", ["const:c18df4:8", "const:4:8"]]
+ 00c18df4 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-d0c78b91f8b90cb91fa6fa5bd2690e0a"></a>

### [`00c1964c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c19/00c1964c.md) → [`00c196e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c19/00c196e8.md) _ZNKSt6__ndk19money_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_getES4_S4_bRNS_8ios_baseERjRe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c17af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c17/00c17af4.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md)
- 新版 呼出元 0件  · 呼出先 14件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c17b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17b90.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)

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
    "old": {
      "definition_site": "00c19694",
      "incomplete_value": true,
      "site": "00c19694",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c196a8",
      "incomplete_value": true,
      "site": "00c196b0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c19754",
      "incomplete_value": true,
      "site": "00c19760",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d8c:8"
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
      "00c19718",
      "READ",
      [
        "storage",
        "00c9bbd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c19730",
      "DATA",
      [
        "storage",
        "00c17af4",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c19744",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c19718",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ],
    [
      "00c19730",
      "DATA",
      [
        "storage",
        "00c17b90",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c19744",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c196e4 ["INT_ADD", "register:40f0:8", ["const:c196e4:8", "const:4:8"]]
- 00c196e4 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c19780 ["INT_ADD", "register:40f0:8", ["const:c19780:8", "const:4:8"]]
+ 00c19780 ["CALL", null, ["callee:00c5dfb0:8"]]
- 00c1974c ["COPY", "tmp:0:8", ["const:d8c:8"]]
- 00c1974c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00c1974c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00c1974c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00c197e8 ["COPY", "tmp:0:8", ["const:d3f:8"]]
+ 00c197e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00c197e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00c197e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00c19780 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c19780 ["INT_ADD", "register:40f0:8", ["const:c19780:8", "const:4:8"]]
- 00c19780 ["CALLIND", null, ["register:0:8"]]
+ 00c1981c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c1981c ["INT_ADD", "register:40f0:8", ["const:c1981c:8", "const:4:8"]]
+ 00c1981c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-358f800e3f81d6bea5e531aed82c3713"></a>

### [`00c19994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c19/00c19994.md) → [`00c19a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c19/00c19a30.md) _ZNSt6__ndk19money_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE8__do_getERS4_S4_bRKNS_6localeEjRjRbRKNS_5ctypeIwEERNS_10unique_ptr

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e6c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e6c0.md) · 呼出先 11件 [`00440c3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440c3c.md) [`00c17af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c17/00c17af4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md)
- 新版 呼出元 1件 [`00c5e790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e790.md) · 呼出先 11件 [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00c17b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17b90.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)

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
    "old": {
      "definition_site": "00c19b24",
      "incomplete_value": true,
      "site": "00c19b2c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
    "ordinal": 43,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c19de8",
      "incomplete_value": true,
      "site": "00c19df0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 49,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c19e3c",
      "incomplete_value": true,
      "site": "00c19e40",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c19bc0",
      "READ",
      [
        "storage",
        "00c9bbd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c19bc8",
      "DATA",
      [
        "storage",
        "00c17af4",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c19dcc",
      "READ",
      [
        "storage",
        "00c9bbd0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c19bc0",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ],
    [
      "00c19bc8",
      "DATA",
      [
        "storage",
        "00c17b90",
        "std::__ndk1::__do_nothing",
        null
      ]
    ],
    [
      "00c19dcc",
      "READ",
      [
        "storage",
        "00c9bca0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c1a668 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c1a668 ["INT_ADD", "register:40f0:8", ["const:c1a668:8", "const:4:8"]]
- 00c1a668 ["CALLIND", null, ["register:0:8"]]
+ 00c1a704 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c1a704 ["INT_ADD", "register:40f0:8", ["const:c1a704:8", "const:4:8"]]
+ 00c1a704 ["CALLIND", null, ["register:0:8"]]
- 00c19a1c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c19a1c ["INT_ADD", "register:40f0:8", ["const:c19a1c:8", "const:4:8"]]
- 00c19a1c ["CALLIND", null, ["register:0:8"]]
+ 00c19ab8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c19ab8 ["INT_ADD", "register:40f0:8", ["const:c19ab8:8", "const:4:8"]]
+ 00c19ab8 ["CALLIND", null, ["register:0:8"]]
- 00c19a54 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c19a54 ["INT_ADD", "register:40f0:8", ["const:c19a54:8", "const:4:8"]]
- 00c19a54 ["CALLIND", null, ["register:0:8"]]
+ 00c19af0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c19af0 ["INT_ADD", "register:40f0:8", ["const:c19af0:8", "const:4:8"]]
+ 00c19af0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-11243942783d92313cc011aa6816655c"></a>

### [`00c1b534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1b/00c1b534.md) → [`00c1b5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1b5d0.md) _ZNKSt6__ndk19money_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_putES4_bRNS_8ios_baseEce

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 19件 [`00459668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459668.md) [`00c05f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c05/00c05f58.md) [`00c1b9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c1b/00c1b9e0.md) [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 0件  · 呼出先 19件 [`004596a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/004596a8.md) [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

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
    "old": {
      "definition_site": "00c1b60c",
      "incomplete_value": true,
      "site": "00c1b614",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c1b8d4",
      "incomplete_value": true,
      "site": "00c1b8d4",
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
    "old": {
      "definition_site": "00c1b61c",
      "incomplete_value": true,
      "site": "00c1b620",
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
      "00c1b604",
      "PARAM",
      [
        "storage",
        "002b17b0",
        null,
        "string"
      ]
    ],
    [
      "00c1b638",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1b640",
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
      "00c1b604",
      "PARAM",
      [
        "storage",
        "002b1754",
        null,
        "string"
      ]
    ],
    [
      "00c1b638",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c1b640",
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
- 00c1b584 ["INT_ADD", "register:40f0:8", ["const:c1b584:8", "const:4:8"]]
- 00c1b584 ["CALL", null, ["callee:00c5e1d0:8"]]
+ 00c1b620 ["INT_ADD", "register:40f0:8", ["const:c1b620:8", "const:4:8"]]
+ 00c1b620 ["CALL", null, ["callee:00c5e1d0:8"]]
- 00c1b594 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00c1b594 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c1b594 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c1b594 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c1b630 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00c1b630 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c1b630 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c1b630 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c1b648 ["INT_ADD", "register:40f0:8", ["const:c1b648:8", "const:4:8"]]
- 00c1b648 ["CALL", null, ["callee:00c5dfb0:8"]]
+ 00c1b6e4 ["INT_ADD", "register:40f0:8", ["const:c1b6e4:8", "const:4:8"]]
+ 00c1b6e4 ["CALL", null, ["callee:00c5dfb0:8"]]
~~~


