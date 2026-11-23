# v16.0.2 → v16.0.3 · 最優先の変更候補 (101)

[一覧の目次](README.md)

<a id="compare-0d4944ae2bb5558ab33d88b1ccef38a6"></a>

### [`00c23e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23e0c.md) → [`00c24e00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c24e00.md) FUN_00c24e00

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
      "definition_site": "00c24e24",
      "incomplete_value": true,
      "site": "00c24e28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24e30",
      "incomplete_value": true,
      "site": "00c24e34",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c24e58",
      "incomplete_value": true,
      "site": "00c24e5c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c24e24",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c24e28",
      "DATA",
      [
        "storage",
        "01127c88",
        "std::__ndk1::num_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24e2c",
      "READ",
      [
        "storage",
        "01127c88",
        "std::__ndk1::num_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c24e24",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c24e28",
      "DATA",
      [
        "storage",
        "01128c48",
        "std::__ndk1::num_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24e2c",
      "READ",
      [
        "storage",
        "01128c48",
        "std::__ndk1::num_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23e68 ["INT_ADD", "register:40f0:8", ["const:c23e68:8", "const:4:8"]]
- 00c23e68 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c24e5c ["INT_ADD", "register:40f0:8", ["const:c24e5c:8", "const:4:8"]]
+ 00c24e5c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c23e24 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c24e18 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c23e30 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c18:8"]]
- 00c23e30 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c24e24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
+ 00c24e24 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-236ca1cf07b8512b0a54f56c78cfb512"></a>

### [`00c23f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c23/00c23f50.md) → [`00c24f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c24/00c24f44.md) FUN_00c24f44

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
      "definition_site": "00c24f68",
      "incomplete_value": true,
      "site": "00c24f6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c24f74",
      "incomplete_value": true,
      "site": "00c24f78",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c24f9c",
      "incomplete_value": true,
      "site": "00c24fa0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c24f68",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00c24f6c",
      "DATA",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24f70",
      "READ",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c24f68",
      "READ",
      [
        "storage",
        "00c9c8d8",
        null,
        "pointer"
      ]
    ],
    [
      "00c24f6c",
      "DATA",
      [
        "storage",
        "01128c58",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c24f70",
      "READ",
      [
        "storage",
        "01128c58",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c23fac ["INT_ADD", "register:40f0:8", ["const:c23fac:8", "const:4:8"]]
- 00c23fac ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c24fa0 ["INT_ADD", "register:40f0:8", ["const:c24fa0:8", "const:4:8"]]
+ 00c24fa0 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c23f68 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c24f5c ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c23f74 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:908:8"]]
- 00c23f74 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c24f68 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8d8:8"]]
+ 00c24f68 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-70b57e63758451af5e0227cc6f9a4144"></a>

### [`00c24094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24094.md) → [`00c25088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25088.md) FUN_00c25088

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
      "definition_site": "00c250ac",
      "incomplete_value": true,
      "site": "00c250b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c250b8",
      "incomplete_value": true,
      "site": "00c250bc",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c250e0",
      "incomplete_value": true,
      "site": "00c250e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c250ac",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c250b0",
      "DATA",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c250b4",
      "READ",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c250ac",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c250b0",
      "DATA",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c250b4",
      "READ",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c240f0 ["INT_ADD", "register:40f0:8", ["const:c240f0:8", "const:4:8"]]
- 00c240f0 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c250e4 ["INT_ADD", "register:40f0:8", ["const:c250e4:8", "const:4:8"]]
+ 00c250e4 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c240ac ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c250a0 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c240b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c28:8"]]
- 00c240b8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c250ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bf8:8"]]
+ 00c250ac ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-148528fdedcd2afe1426a98788dd137f"></a>

### [`00c241d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c241d8.md) → [`00c251cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c251cc.md) FUN_00c251cc

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
      "definition_site": "00c251f0",
      "incomplete_value": true,
      "site": "00c251f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c251fc",
      "incomplete_value": true,
      "site": "00c25200",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c25224",
      "incomplete_value": true,
      "site": "00c25228",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c251f0",
      "READ",
      [
        "storage",
        "00c9b3c0",
        null,
        "pointer"
      ]
    ],
    [
      "00c251f4",
      "DATA",
      [
        "storage",
        "01127cb8",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c251f8",
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
      "00c251f0",
      "READ",
      [
        "storage",
        "00c9c390",
        null,
        "pointer"
      ]
    ],
    [
      "00c251f4",
      "DATA",
      [
        "storage",
        "01128c78",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c251f8",
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
- 00c24234 ["INT_ADD", "register:40f0:8", ["const:c24234:8", "const:4:8"]]
- 00c24234 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c25228 ["INT_ADD", "register:40f0:8", ["const:c25228:8", "const:4:8"]]
+ 00c25228 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c241f0 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c251e4 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c241fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3c0:8"]]
- 00c241fc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c251f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:390:8"]]
+ 00c251f0 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a92636066d25a4a886827c21ee18156e"></a>

### [`00c2431c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c2431c.md) → [`00c25310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25310.md) FUN_00c25310

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
      "definition_site": "00c25334",
      "incomplete_value": true,
      "site": "00c25338",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c25340",
      "incomplete_value": true,
      "site": "00c25344",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c25368",
      "incomplete_value": true,
      "site": "00c2536c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c25334",
      "READ",
      [
        "storage",
        "00c9bdc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c25338",
      "DATA",
      [
        "storage",
        "01127cc8",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c2533c",
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
      "00c25334",
      "READ",
      [
        "storage",
        "00c9cd90",
        null,
        "pointer"
      ]
    ],
    [
      "00c25338",
      "DATA",
      [
        "storage",
        "01128c88",
        "std::__ndk1::time_get<wchar_t,std::__ndk1::istreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c2533c",
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
- 00c24378 ["INT_ADD", "register:40f0:8", ["const:c24378:8", "const:4:8"]]
- 00c24378 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c2536c ["INT_ADD", "register:40f0:8", ["const:c2536c:8", "const:4:8"]]
+ 00c2536c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c24334 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c25328 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c24340 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dc0:8"]]
- 00c24340 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c25334 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d90:8"]]
+ 00c25334 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b0f8dce492a887c50450235fc5bf8355"></a>

### [`00c24460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24460.md) → [`00c25454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25454.md) FUN_00c25454

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
      "definition_site": "00c25478",
      "incomplete_value": true,
      "site": "00c2547c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c25484",
      "incomplete_value": true,
      "site": "00c25488",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c254ac",
      "incomplete_value": true,
      "site": "00c254b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c25478",
      "READ",
      [
        "storage",
        "00c9b3c8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2547c",
      "DATA",
      [
        "storage",
        "01127cd8",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c25480",
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
      "00c25478",
      "READ",
      [
        "storage",
        "00c9c398",
        null,
        "pointer"
      ]
    ],
    [
      "00c2547c",
      "DATA",
      [
        "storage",
        "01128c98",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c25480",
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
- 00c244bc ["INT_ADD", "register:40f0:8", ["const:c244bc:8", "const:4:8"]]
- 00c244bc ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c254b0 ["INT_ADD", "register:40f0:8", ["const:c254b0:8", "const:4:8"]]
+ 00c254b0 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c24478 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c2546c ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c24484 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3c8:8"]]
- 00c24484 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c25478 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:398:8"]]
+ 00c25478 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-faef9ccc1e476da282e68753da465ff0"></a>

### [`00c245a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c245a4.md) → [`00c25598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25598.md) FUN_00c25598

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
      "definition_site": "00c255bc",
      "incomplete_value": true,
      "site": "00c255c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c255c8",
      "incomplete_value": true,
      "site": "00c255cc",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c255f0",
      "incomplete_value": true,
      "site": "00c255f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c255bc",
      "READ",
      [
        "storage",
        "00c9bde0",
        null,
        "pointer"
      ]
    ],
    [
      "00c255c0",
      "DATA",
      [
        "storage",
        "01127ce8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c255c4",
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
      "00c255bc",
      "READ",
      [
        "storage",
        "00c9cdb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c255c0",
      "DATA",
      [
        "storage",
        "01128ca8",
        "std::__ndk1::time_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c255c4",
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
- 00c24600 ["INT_ADD", "register:40f0:8", ["const:c24600:8", "const:4:8"]]
- 00c24600 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c255f4 ["INT_ADD", "register:40f0:8", ["const:c255f4:8", "const:4:8"]]
+ 00c255f4 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c245bc ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c255b0 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c245c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:de0:8"]]
- 00c245c8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c255bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
+ 00c255bc ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2edc5df6423fe9338b2ef3ff56f09f6b"></a>

### [`00c246e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c246e8.md) → [`00c256dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c256dc.md) FUN_00c256dc

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
      "definition_site": "00c25700",
      "incomplete_value": true,
      "site": "00c25704",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c2570c",
      "incomplete_value": true,
      "site": "00c25710",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c25734",
      "incomplete_value": true,
      "site": "00c25738",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c25700",
      "READ",
      [
        "storage",
        "00c9bdf0",
        null,
        "pointer"
      ]
    ],
    [
      "00c25704",
      "DATA",
      [
        "storage",
        "01127d78",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c25708",
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
      "00c25700",
      "READ",
      [
        "storage",
        "00c9cdc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c25704",
      "DATA",
      [
        "storage",
        "01128d38",
        "std::__ndk1::messages<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c25708",
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
- 00c24744 ["INT_ADD", "register:40f0:8", ["const:c24744:8", "const:4:8"]]
- 00c24744 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c25738 ["INT_ADD", "register:40f0:8", ["const:c25738:8", "const:4:8"]]
+ 00c25738 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c24700 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c256f4 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c2470c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:df0:8"]]
- 00c2470c ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c25700 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dc0:8"]]
+ 00c25700 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-de378225123d362fae3d70cd6b8cd3f5"></a>

### [`00c2482c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c2482c.md) → [`00c25820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25820.md) FUN_00c25820

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
      "definition_site": "00c25844",
      "incomplete_value": true,
      "site": "00c25848",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:dd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c25878",
      "incomplete_value": true,
      "site": "00c2587c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2586c",
      "incomplete_value": false,
      "site": "00c2587c",
      "value": [
        "leaf",
        "const:c37048:8"
      ]
    },
    "old": {
      "definition_site": "00c24878",
      "incomplete_value": false,
      "site": "00c24888",
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
      "00c25844",
      "READ",
      [
        "storage",
        "00c9be00",
        null,
        "pointer"
      ]
    ],
    [
      "00c25848",
      "DATA",
      [
        "storage",
        "01127d88",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c2584c",
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
      "00c25844",
      "READ",
      [
        "storage",
        "00c9cdd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c25848",
      "DATA",
      [
        "storage",
        "01128d48",
        "std::__ndk1::messages<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c2584c",
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
- 00c24888 ["INT_ADD", "register:40f0:8", ["const:c24888:8", "const:4:8"]]
- 00c24888 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c2587c ["INT_ADD", "register:40f0:8", ["const:c2587c:8", "const:4:8"]]
+ 00c2587c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c24844 ["COPY", "register:40a0:8", ["const:c9b000:8"]]
+ 00c25838 ["COPY", "register:40a0:8", ["const:c9c000:8"]]
- 00c24850 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
- 00c24850 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c25844 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd0:8"]]
+ 00c25844 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-864fe2ea6faad8e78cb010fb8877b9de"></a>

### [`00c24970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24970.md) → [`00c25964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25964.md) FUN_00c25964

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c253ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c253ac.md) · 呼出先 10件 [`00c3596c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c3596c.md) [`00c35984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35984.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c263a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c263a0.md) · 呼出先 10件 [`00c36960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36960.md) [`00c36978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36978.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 98.25% / 新版 98.25%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c25994",
      "incomplete_value": false,
      "site": "00c25994",
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
      "00c25994",
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
      "00c25994",
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
- 00c24994 ["COPY", "register:4058:8", ["const:c93000:8"]]
+ 00c25988 ["COPY", "register:4058:8", ["const:c94000:8"]]
- 00c24998 ["COPY", "tmp:0:8", ["const:790:8"]]
- 00c24998 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
- 00c24998 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
- 00c24998 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
+ 00c2598c ["COPY", "tmp:0:8", ["const:760:8"]]
+ 00c2598c ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
+ 00c2598c ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
+ 00c2598c ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
- 00c2499c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-2fdffc4639348dab504542de6eb9b287"></a>

### [`00c24c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24c44.md) → [`00c25c38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25c38.md) FUN_00c25c38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c24d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24d18.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)
- 新版 呼出元 1件 [`00c25d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25d0c.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.23% / 新版 96.23%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c25c58",
      "incomplete_value": false,
      "site": "00c25c60",
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
      "00c25c60",
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
      "00c25c60",
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
- 00c24c60 ["COPY", "register:4040:8", ["const:c93000:8"]]
+ 00c25c54 ["COPY", "register:4040:8", ["const:c94000:8"]]
- 00c24c64 ["COPY", "tmp:0:8", ["const:790:8"]]
- 00c24c64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c24c64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c24c64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c25c58 ["COPY", "tmp:0:8", ["const:760:8"]]
+ 00c25c58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c25c58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c25c58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c24cb0 ["INT_ADD", "register:40f0:8", ["const:c24cb0:8", "const:4:8"]]
- 00c24cb0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00c25ca4 ["INT_ADD", "register:40f0:8", ["const:c25ca4:8", "const:4:8"]]
+ 00c25ca4 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-ce00ad42b0a6ce5220b9199f6f627488"></a>

### [`00c24d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24d44.md) → [`00c25d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25d38.md) _ZNSt6__ndk16locale8__globalEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e990.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f960.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 74.07% / 新版 74.07%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c25d8c",
      "incomplete_value": false,
      "site": "00c25d90",
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
            "const:eb0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c25d98",
      "incomplete_value": false,
      "site": "00c25d9c",
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
            "const:eb8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c25d50",
      "READ",
      [
        "storage",
        "01127ef8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c25d5c",
      "DATA",
      [
        "storage",
        "01127ef0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c25d74",
      "PARAM",
      [
        "storage",
        "01127ef8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c25d50",
      "READ",
      [
        "storage",
        "01128eb8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c25d5c",
      "DATA",
      [
        "storage",
        "01128eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c25d74",
      "PARAM",
      [
        "storage",
        "01128eb8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c24d9c ["INT_ADD", "register:40f0:8", ["const:c24d9c:8", "const:4:8"]]
- 00c24d9c ["CALL", null, ["callee:00c5b870:8"]]
+ 00c25d90 ["INT_ADD", "register:40f0:8", ["const:c25d90:8", "const:4:8"]]
+ 00c25d90 ["CALL", null, ["callee:00c5b870:8"]]
- 00c24da8 ["INT_ADD", "register:40f0:8", ["const:c24da8:8", "const:4:8"]]
- 00c24da8 ["CALL", null, ["callee:00c58f10:8"]]
+ 00c25d9c ["INT_ADD", "register:40f0:8", ["const:c25d9c:8", "const:4:8"]]
+ 00c25d9c ["CALL", null, ["callee:00c58f10:8"]]
- 00c24d54 ["COPY", "register:4040:8", ["const:1127000:8"]]
+ 00c25d48 ["COPY", "register:4040:8", ["const:1128000:8"]]
~~~


<a id="compare-4db4e2d93bb689ade4e35db654d3c851"></a>

### [`00c24dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24dc8.md) → [`00c25dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25dbc.md) _ZNSt6__ndk16localeC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md) · 呼出先 5件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e990.md)
- 新版 呼出元 1件 [`00c5b840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b840.md) · 呼出先 5件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f960.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 63.89% / 新版 63.89%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c25dec",
      "incomplete_value": true,
      "site": "00c25df4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1128000:8"
              ],
              [
                "leaf",
                "const:eb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c25df0",
      "incomplete_value": true,
      "site": "00c25df8",
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c25e1c",
      "incomplete_value": false,
      "site": "00c25e20",
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
            "const:eb8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c25dd8",
      "READ",
      [
        "storage",
        "01127ef8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c25dec",
      "READ",
      [
        "storage",
        "01127ef0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c25e1c",
      "PARAM",
      [
        "storage",
        "01127ef8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c25dd8",
      "READ",
      [
        "storage",
        "01128eb8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c25dec",
      "READ",
      [
        "storage",
        "01128eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c25e1c",
      "PARAM",
      [
        "storage",
        "01128eb8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c24e2c ["INT_ADD", "register:40f0:8", ["const:c24e2c:8", "const:4:8"]]
- 00c24e2c ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c25e20 ["INT_ADD", "register:40f0:8", ["const:c25e20:8", "const:4:8"]]
+ 00c25e20 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c24e44 ["INT_ADD", "register:40f0:8", ["const:c24e44:8", "const:4:8"]]
- 00c24e44 ["CALL", null, ["callee:00c5b870:8"]]
+ 00c25e38 ["INT_ADD", "register:40f0:8", ["const:c25e38:8", "const:4:8"]]
+ 00c25e38 ["CALL", null, ["callee:00c5b870:8"]]
- 00c24e50 ["INT_ADD", "register:40f0:8", ["const:c24e50:8", "const:4:8"]]
- 00c24e50 ["CALL", null, ["callee:00c58f10:8"]]
+ 00c25e44 ["INT_ADD", "register:40f0:8", ["const:c25e44:8", "const:4:8"]]
+ 00c25e44 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-7356285f30e833b5e19b6ed9f0543337"></a>

### [`00c24e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24e70.md) → [`00c25e64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25e64.md) _ZNSt6__ndk16localeC1ERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 1件 [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c25e74",
      "incomplete_value": true,
      "site": "00c25e7c",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00c24e88"
      ],
      [
        "FALL_THROUGH",
        "00c25e7c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00c25e74",
      "incomplete_value": true,
      "site": "00c25e84",
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00c24e88"
      ],
      [
        "FALL_THROUGH",
        "00c25e7c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00c25e74",
      "incomplete_value": true,
      "site": "00c25e84",
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
    "ordinal": 2,
    "slot": 0
  }
]
~~~


~~~diff
- 00c24e78 ["COPY", "register:4048:8", ["const:1127000:8"]]
+ 00c25e6c ["COPY", "register:4048:8", ["const:1128000:8"]]
- 00c24e7c ["COPY", "tmp:0:8", ["const:da8:8"]]
- 00c24e7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00c24e7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00c24e7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00c25e70 ["COPY", "tmp:0:8", ["const:d68:8"]]
+ 00c25e70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00c25e70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00c25e70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00c24ea0 ["INT_ADD", "register:40f0:8", ["const:c24ea0:8", "const:4:8"]]
- 00c24ea0 ["CALL", null, ["callee:00c54d60:8"]]
+ 00c25e94 ["INT_ADD", "register:40f0:8", ["const:c25e94:8", "const:4:8"]]
+ 00c25e94 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-d9451b1899e9d111ee890ee50182ccae"></a>

### [`00c24eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24eb0.md) → [`00c25ea4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25ea4.md) _ZNSt6__ndk16localeD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) · 呼出先 1件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c25ec0",
      "incomplete_value": true,
      "site": "00c25ec4",
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
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00c24ec4 ["COPY", "register:4040:8", ["const:1127000:8"]]
+ 00c25eb8 ["COPY", "register:4040:8", ["const:1128000:8"]]
- 00c24ec8 ["COPY", "tmp:0:8", ["const:da8:8"]]
- 00c24ec8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c24ec8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c24ec8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c25ebc ["COPY", "tmp:0:8", ["const:d68:8"]]
+ 00c25ebc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c25ebc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c25ebc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c24edc ["INT_ADD", "register:40f0:8", ["const:c24edc:8", "const:4:8"]]
- 00c24edc ["CALL", null, ["callee:00c54d90:8"]]
+ 00c25ed0 ["INT_ADD", "register:40f0:8", ["const:c25ed0:8", "const:4:8"]]
+ 00c25ed0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-3882ec6e48d6698c0c19dd4261d3f978"></a>

### [`00c24f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24f10.md) → [`00c25f04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25f04.md) _ZNSt6__ndk16localeaSERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md) · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md) · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 91.18% / 新版 91.18%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c25f2c",
      "incomplete_value": true,
      "site": "00c25f30",
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
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00c24f28 ["COPY", "register:40b0:8", ["const:1127000:8"]]
+ 00c25f1c ["COPY", "register:40b0:8", ["const:1128000:8"]]
- 00c24f2c ["COPY", "tmp:0:8", ["const:da8:8"]]
- 00c24f2c ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
- 00c24f2c ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
- 00c24f2c ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
+ 00c25f20 ["COPY", "tmp:0:8", ["const:d68:8"]]
+ 00c25f20 ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
+ 00c25f20 ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
+ 00c25f20 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
- 00c24f48 ["INT_ADD", "register:40f0:8", ["const:c24f48:8", "const:4:8"]]
- 00c24f48 ["CALL", null, ["callee:00c54d60:8"]]
+ 00c25f3c ["INT_ADD", "register:40f0:8", ["const:c25f3c:8", "const:4:8"]]
+ 00c25f3c ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-6212412f9540e750c228e4887dc09a15"></a>

### [`00c24f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24f98.md) → [`00c25f8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25f8c.md) _ZNSt6__ndk16localeC1EPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.51% / 新版 98.51%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c26088",
      "incomplete_value": false,
      "site": "00c2608c",
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
            "const:e6c:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c26088",
      "PARAM",
      [
        "storage",
        "002b5d9d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c26088",
      "PARAM",
      [
        "storage",
        "002b5e6c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c25098 ["INT_ADD", "register:40f0:8", ["const:c25098:8", "const:4:8"]]
- 00c25098 ["CALL", null, ["callee:00c5f050:8"]]
+ 00c2608c ["INT_ADD", "register:40f0:8", ["const:c2608c:8", "const:4:8"]]
+ 00c2608c ["CALL", null, ["callee:00c5f050:8"]]
- 00c24fc4 ["INT_ADD", "register:40f0:8", ["const:c24fc4:8", "const:4:8"]]
- 00c24fc4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c25fb8 ["INT_ADD", "register:40f0:8", ["const:c25fb8:8", "const:4:8"]]
+ 00c25fb8 ["CALL", null, ["callee:00c58f30:8"]]
- 00c24fd0 ["INT_ADD", "register:40f0:8", ["const:c24fd0:8", "const:4:8"]]
- 00c24fd0 ["CALL", null, ["callee:00c59080:8"]]
+ 00c25fc4 ["INT_ADD", "register:40f0:8", ["const:c25fc4:8", "const:4:8"]]
+ 00c25fc4 ["CALL", null, ["callee:00c59080:8"]]
~~~


<a id="compare-5d108d26c437963f6b98c850f16708d4"></a>

### [`00c2513c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c2513c.md) → [`00c26130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c26130.md) _ZNSt6__ndk16localeC1ERKS0_PKci

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.63% / 新版 98.63%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c26244",
      "incomplete_value": false,
      "site": "00c26248",
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
            "const:e6c:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c26244",
      "PARAM",
      [
        "storage",
        "002b5d9d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c26244",
      "PARAM",
      [
        "storage",
        "002b5e6c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c25254 ["INT_ADD", "register:40f0:8", ["const:c25254:8", "const:4:8"]]
- 00c25254 ["CALL", null, ["callee:00c5f050:8"]]
+ 00c26248 ["INT_ADD", "register:40f0:8", ["const:c26248:8", "const:4:8"]]
+ 00c26248 ["CALL", null, ["callee:00c5f050:8"]]
- 00c25174 ["INT_ADD", "register:40f0:8", ["const:c25174:8", "const:4:8"]]
- 00c25174 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c26168 ["INT_ADD", "register:40f0:8", ["const:c26168:8", "const:4:8"]]
+ 00c26168 ["CALL", null, ["callee:00c58f30:8"]]
- 00c25184 ["INT_ADD", "register:40f0:8", ["const:c25184:8", "const:4:8"]]
- 00c25184 ["CALL", null, ["callee:00c59080:8"]]
+ 00c26178 ["INT_ADD", "register:40f0:8", ["const:c26178:8", "const:4:8"]]
+ 00c26178 ["CALL", null, ["callee:00c59080:8"]]
~~~


<a id="compare-df04ada30090785f2b85cb14c49e9300"></a>

### [`00c253ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c253ac.md) → [`00c263a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c263a0.md) _ZNSt6__ndk16locale14__install_ctorERKS0_PNS0_5facetEl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c24970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24970.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c25964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25964.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c263f8",
      "incomplete_value": true,
      "site": "00c26400",
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
    "ordinal": 1,
    "slot": 0
  }
]
~~~


~~~diff
- 00c253d8 ["INT_ADD", "register:40f0:8", ["const:c253d8:8", "const:4:8"]]
- 00c253d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c263cc ["INT_ADD", "register:40f0:8", ["const:c263cc:8", "const:4:8"]]
+ 00c263cc ["CALL", null, ["callee:00c58f30:8"]]
- 00c253ec ["INT_ADD", "register:40f0:8", ["const:c253ec:8", "const:4:8"]]
- 00c253ec ["CALL", null, ["callee:00c25964:8"]]
+ 00c263e0 ["INT_ADD", "register:40f0:8", ["const:c263e0:8", "const:4:8"]]
+ 00c263e0 ["CALL", null, ["callee:00c25964:8"]]
- 00c253fc ["COPY", "register:4040:8", ["const:1127000:8"]]
+ 00c263f0 ["COPY", "register:4040:8", ["const:1128000:8"]]
~~~


<a id="compare-1a934e6b0f2ad6bb5fc12112580b6402"></a>

### [`00c25444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25444.md) → [`00c26438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c26438.md) _ZNSt6__ndk16locale6globalERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c264d4",
      "incomplete_value": true,
      "site": "00c264d4",
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
            "const:eb0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c264a4",
      "incomplete_value": true,
      "site": "00c264a8",
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c26470",
      "incomplete_value": false,
      "site": "00c26478",
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
            "const:eb0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c26460",
      "READ",
      [
        "storage",
        "01127ef8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26470",
      "PARAM",
      [
        "storage",
        "01127ef0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c264a0",
      "READ",
      [
        "storage",
        "01127ef0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c26460",
      "READ",
      [
        "storage",
        "01128eb8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c26470",
      "PARAM",
      [
        "storage",
        "01128eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c264a0",
      "READ",
      [
        "storage",
        "01128eb0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c25484 ["INT_ADD", "register:40f0:8", ["const:c25484:8", "const:4:8"]]
- 00c25484 ["CALL", null, ["callee:00c5b870:8"]]
+ 00c26478 ["INT_ADD", "register:40f0:8", ["const:c26478:8", "const:4:8"]]
+ 00c26478 ["CALL", null, ["callee:00c5b870:8"]]
- 00c254e0 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:ef0:8"]]
- 00c254e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
+ 00c264d4 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:eb0:8"]]
+ 00c264d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 00c255d8 ["INT_ADD", "register:40f0:8", ["const:c255d8:8", "const:4:8"]]
- 00c255d8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c265cc ["INT_ADD", "register:40f0:8", ["const:c265cc:8", "const:4:8"]]
+ 00c265cc ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-b69db7057711486d86654311231f1fec"></a>

### [`00c258f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c258f8.md) → [`00c268ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c268ec.md) _ZNSt6__ndk114collate_bynameIcEC1EPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00c269c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c269c4.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.16% / 新版 92.16%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c26918",
      "incomplete_value": true,
      "site": "00c26918",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c26954",
      "incomplete_value": false,
      "site": "00c26964",
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
            "const:b3e:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c2690c",
      "READ",
      [
        "storage",
        "00c9be88",
        null,
        "pointer"
      ]
    ],
    [
      "00c26918",
      "DATA",
      [
        "storage",
        "00c937b8",
        null,
        "pointer"
      ]
    ],
    [
      "00c26954",
      "PARAM",
      [
        "storage",
        "002aaa71",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c2690c",
      "READ",
      [
        "storage",
        "00c9ce58",
        null,
        "pointer"
      ]
    ],
    [
      "00c26918",
      "DATA",
      [
        "storage",
        "00c94788",
        null,
        "pointer"
      ]
    ],
    [
      "00c26954",
      "PARAM",
      [
        "storage",
        "002aab3e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c25970 ["INT_ADD", "register:40f0:8", ["const:c25970:8", "const:4:8"]]
- 00c25970 ["CALL", null, ["callee:00c269c4:8"]]
+ 00c26964 ["INT_ADD", "register:40f0:8", ["const:c26964:8", "const:4:8"]]
+ 00c26964 ["CALL", null, ["callee:00c269c4:8"]]
- 00c2590c ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c26900 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c25918 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e88:8"]]
- 00c25918 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2690c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e58:8"]]
+ 00c2690c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9fc7b2da110fbd0767730c30c5920e04"></a>

### [`00c25a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25a34.md) → [`00c26a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c26a28.md) _ZNSt6__ndk114collate_bynameIcEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e8f0.md) · 呼出先 6件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 1件 [`00c5f8c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f8c0.md) · 呼出先 6件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59150.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.49% / 新版 91.49%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c26a54",
      "incomplete_value": true,
      "site": "00c26a54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c26a94",
      "incomplete_value": false,
      "site": "00c26aa4",
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
            "const:b3e:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c26a48",
      "READ",
      [
        "storage",
        "00c9be88",
        null,
        "pointer"
      ]
    ],
    [
      "00c26a54",
      "DATA",
      [
        "storage",
        "00c937b8",
        null,
        "pointer"
      ]
    ],
    [
      "00c26a94",
      "PARAM",
      [
        "storage",
        "002aaa71",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c26a48",
      "READ",
      [
        "storage",
        "00c9ce58",
        null,
        "pointer"
      ]
    ],
    [
      "00c26a54",
      "DATA",
      [
        "storage",
        "00c94788",
        null,
        "pointer"
      ]
    ],
    [
      "00c26a94",
      "PARAM",
      [
        "storage",
        "002aab3e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c25ab0 ["INT_ADD", "register:40f0:8", ["const:c25ab0:8", "const:4:8"]]
- 00c25ab0 ["CALL", null, ["callee:00c59150:8"]]
+ 00c26aa4 ["INT_ADD", "register:40f0:8", ["const:c26aa4:8", "const:4:8"]]
+ 00c26aa4 ["CALL", null, ["callee:00c59150:8"]]
- 00c25a48 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c26a3c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c25a54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e88:8"]]
- 00c25a54 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c26a48 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e58:8"]]
+ 00c26a48 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8a8e032d29ffb395a7f0aff6abbc6745"></a>

### [`00c25af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25af8.md) → [`00c26aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c26aec.md) _ZNSt6__ndk114collate_bynameIcED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9f0.md) · 呼出先 2件 [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md)
- 新版 呼出元 1件 [`00c5f9c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f9c0.md) · 呼出先 2件 [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md) [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c26b0c",
      "incomplete_value": true,
      "site": "00c26b10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c26b04",
      "READ",
      [
        "storage",
        "00c9be88",
        null,
        "pointer"
      ]
    ],
    [
      "00c26b10",
      "DATA",
      [
        "storage",
        "00c937b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c26b04",
      "READ",
      [
        "storage",
        "00c9ce58",
        null,
        "pointer"
      ]
    ],
    [
      "00c26b10",
      "DATA",
      [
        "storage",
        "00c94788",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c25b08 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c26afc ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c25b10 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e88:8"]]
- 00c25b10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c26b04 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e58:8"]]
+ 00c26b04 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c25b20 ["INT_ADD", "register:40f0:8", ["const:c25b20:8", "const:4:8"]]
- 00c25b20 ["CALL", null, ["callee:00c5e270:8"]]
+ 00c26b14 ["INT_ADD", "register:40f0:8", ["const:c26b14:8", "const:4:8"]]
+ 00c26b14 ["CALL", null, ["callee:00c5e270:8"]]
~~~


<a id="compare-893d18ddf23591d6ad4d2a2ead7964e2"></a>

### [`00c25f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25f3c.md) → [`00c26f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c26f30.md) _ZNSt6__ndk114collate_bynameIwEC1EPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00c269c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c269c4.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.08% / 新版 96.08%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c26f98",
      "incomplete_value": false,
      "site": "00c26fa8",
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
            "const:d8a:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c26f50",
      "READ",
      [
        "storage",
        "00c9be90",
        null,
        "pointer"
      ]
    ],
    [
      "00c26f5c",
      "DATA",
      [
        "storage",
        "00c937f8",
        null,
        "pointer"
      ]
    ],
    [
      "00c26f98",
      "PARAM",
      [
        "storage",
        "0029fd4a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c26f50",
      "READ",
      [
        "storage",
        "00c9ce60",
        null,
        "pointer"
      ]
    ],
    [
      "00c26f5c",
      "DATA",
      [
        "storage",
        "00c947c8",
        null,
        "pointer"
      ]
    ],
    [
      "00c26f98",
      "PARAM",
      [
        "storage",
        "0029fd8a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c25fb4 ["INT_ADD", "register:40f0:8", ["const:c25fb4:8", "const:4:8"]]
- 00c25fb4 ["CALL", null, ["callee:00c269c4:8"]]
+ 00c26fa8 ["INT_ADD", "register:40f0:8", ["const:c26fa8:8", "const:4:8"]]
+ 00c26fa8 ["CALL", null, ["callee:00c269c4:8"]]
- 00c25f50 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c26f44 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c25f5c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e90:8"]]
- 00c25f5c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c26f50 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e60:8"]]
+ 00c26f50 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cb09cf0d185dc13312ec91c0881ce426"></a>

### [`00c26014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26014.md) → [`00c27008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c27008.md) _ZNSt6__ndk114collate_bynameIwEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e900.md) · 呼出先 6件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 1件 [`00c5f8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f8d0.md) · 呼出先 6件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59150.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.49% / 新版 91.49%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c27034",
      "incomplete_value": true,
      "site": "00c27034",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c27074",
      "incomplete_value": true,
      "site": "00c27084",
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
            "const:d8a:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c27028",
      "READ",
      [
        "storage",
        "00c9be90",
        null,
        "pointer"
      ]
    ],
    [
      "00c27034",
      "DATA",
      [
        "storage",
        "00c937f8",
        null,
        "pointer"
      ]
    ],
    [
      "00c27074",
      "PARAM",
      [
        "storage",
        "0029fd4a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c27028",
      "READ",
      [
        "storage",
        "00c9ce60",
        null,
        "pointer"
      ]
    ],
    [
      "00c27034",
      "DATA",
      [
        "storage",
        "00c947c8",
        null,
        "pointer"
      ]
    ],
    [
      "00c27074",
      "PARAM",
      [
        "storage",
        "0029fd8a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26090 ["INT_ADD", "register:40f0:8", ["const:c26090:8", "const:4:8"]]
- 00c26090 ["CALL", null, ["callee:00c59150:8"]]
+ 00c27084 ["INT_ADD", "register:40f0:8", ["const:c27084:8", "const:4:8"]]
+ 00c27084 ["CALL", null, ["callee:00c59150:8"]]
- 00c26028 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c2701c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c26034 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e90:8"]]
- 00c26034 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c27028 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e60:8"]]
+ 00c27028 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a2e116dac69b398bcb679ddd93b35215"></a>

### [`00c260d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c260d8.md) → [`00c270cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c270cc.md) _ZNSt6__ndk114collate_bynameIwED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ea20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea20.md) · 呼出先 2件 [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md)
- 新版 呼出元 1件 [`00c5f9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f9f0.md) · 呼出先 2件 [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md) [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c270ec",
      "incomplete_value": true,
      "site": "00c270f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c270e4",
      "READ",
      [
        "storage",
        "00c9be90",
        null,
        "pointer"
      ]
    ],
    [
      "00c270f0",
      "DATA",
      [
        "storage",
        "00c937f8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c270e4",
      "READ",
      [
        "storage",
        "00c9ce60",
        null,
        "pointer"
      ]
    ],
    [
      "00c270f0",
      "DATA",
      [
        "storage",
        "00c947c8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c260e8 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c270dc ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c260f0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e90:8"]]
- 00c260f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c270e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e60:8"]]
+ 00c270e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c26100 ["INT_ADD", "register:40f0:8", ["const:c26100:8", "const:4:8"]]
- 00c26100 ["CALL", null, ["callee:00c5e270:8"]]
+ 00c270f4 ["INT_ADD", "register:40f0:8", ["const:c270f4:8", "const:4:8"]]
+ 00c270f4 ["CALL", null, ["callee:00c5e270:8"]]
~~~


<a id="compare-f10c93de228339f32b39bc9c655d6c3d"></a>

### [`00c265c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c265c0.md) → [`00c275b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c275b4.md) _ZNKSt6__ndk15ctypeIwE5do_isEmw

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
      "definition_site": "00c275d8",
      "incomplete_value": true,
      "site": "00c275dc",
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
      "00c275d0",
      "DATA",
      [
        "storage",
        "00310fd8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c275d0",
      "DATA",
      [
        "storage",
        "00311018",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c265d4 ["COPY", "register:4040:8", ["const:310000:8"]]
+ 00c275c8 ["COPY", "register:4040:8", ["const:311000:8"]]
- 00c265d8 ["COPY", "tmp:0:8", ["const:fd8:8"]]
- 00c265d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c265d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c265d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c275cc ["COPY", "tmp:0:8", ["const:18:8"]]
+ 00c275cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c275cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c275cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b4efa692115ab788e51d1fc9dcd3688c"></a>

### [`00c266d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c266d8.md) → [`00c276cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c276cc.md) _ZNKSt6__ndk15ctypeIwE10do_toupperEw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md) [`00c5ea60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea60.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md) [`00c5fa30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 81.08% / 新版 81.08%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c2774c",
      "incomplete_value": true,
      "site": "00c2774c",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2772c",
      "incomplete_value": false,
      "site": "00c27730",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2773c",
      "incomplete_value": false,
      "site": "00c27748",
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
      "00c276f4",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c276fc",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2772c",
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
      "00c276f4",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c276fc",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2772c",
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
- 00c2673c ["INT_ADD", "register:40f0:8", ["const:c2673c:8", "const:4:8"]]
- 00c2673c ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c27730 ["INT_ADD", "register:40f0:8", ["const:c27730:8", "const:4:8"]]
+ 00c27730 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c26754 ["INT_ADD", "register:40f0:8", ["const:c26754:8", "const:4:8"]]
- 00c26754 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c27748 ["INT_ADD", "register:40f0:8", ["const:c27748:8", "const:4:8"]]
+ 00c27748 ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c26758 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d98:8"]]
- 00c26758 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c2774c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d58:8"]]
+ 00c2774c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-e0f7fca5ea1dacc7f696bbc93cd8d508"></a>

### [`00c26784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26784.md) → [`00c27778`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c27778.md) _ZNKSt6__ndk15ctypeIwE10do_toupperEPwPKw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c27804",
      "incomplete_value": true,
      "site": "00c27804",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c277dc",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c277e4",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c277f0",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c277dc",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c277e4",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c277f0",
      "PARAM",
      [
        "storage",
        "002b628b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26810 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d98:8"]]
- 00c26810 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c27804 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d58:8"]]
+ 00c27804 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00c267ac ["COPY", "register:40a8:8", ["const:1127000:8"]]
+ 00c277a0 ["COPY", "register:40a8:8", ["const:1128000:8"]]
- 00c267b0 ["COPY", "tmp:0:8", ["const:da0:8"]]
- 00c267b0 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
- 00c267b0 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
- 00c267b0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
+ 00c277a4 ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 00c277a4 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c277a4 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c277a4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
~~~


<a id="compare-8312368cf4beb495efb48a4e6c9e37af"></a>

### [`00c26858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26858.md) → [`00c2784c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c2784c.md) _ZNKSt6__ndk15ctypeIwE10do_tolowerEw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

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
      "definition_site": "00c278c4",
      "incomplete_value": false,
      "site": "00c278c4",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c278a0",
      "incomplete_value": false,
      "site": "00c278a4",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c278b0",
      "incomplete_value": false,
      "site": "00c278bc",
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
      "00c27870",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c278a0",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c278b0",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c27870",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c278a0",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c278b0",
      "PARAM",
      [
        "storage",
        "002b628b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c268b0 ["INT_ADD", "register:40f0:8", ["const:c268b0:8", "const:4:8"]]
- 00c268b0 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c278a4 ["INT_ADD", "register:40f0:8", ["const:c278a4:8", "const:4:8"]]
+ 00c278a4 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c268c8 ["INT_ADD", "register:40f0:8", ["const:c268c8:8", "const:4:8"]]
- 00c268c8 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c278bc ["INT_ADD", "register:40f0:8", ["const:c278bc:8", "const:4:8"]]
+ 00c278bc ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c268d0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
- 00c268d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c278c4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d58:8"]]
+ 00c278c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-f664b62ba57d3e9679ef9cb0ea3fbfc8"></a>

### [`00c268fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c268fc.md) → [`00c278f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c278f0.md) _ZNKSt6__ndk15ctypeIwE10do_tolowerEPwPKw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c2797c",
      "incomplete_value": true,
      "site": "00c2797c",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c27954",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2795c",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27968",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c27954",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2795c",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27968",
      "PARAM",
      [
        "storage",
        "002b628b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26988 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d98:8"]]
- 00c26988 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c2797c ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d58:8"]]
+ 00c2797c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00c26924 ["COPY", "register:40a8:8", ["const:1127000:8"]]
+ 00c27918 ["COPY", "register:40a8:8", ["const:1128000:8"]]
- 00c26928 ["COPY", "tmp:0:8", ["const:da0:8"]]
- 00c26928 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
- 00c26928 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
- 00c26928 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
+ 00c2791c ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 00c2791c ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c2791c ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c2791c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
~~~


<a id="compare-fc212a95ec30063db8690c99089da5c7"></a>

### [`00c26ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26ca4.md) → [`00c27c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c27c98.md) _ZNSt6__ndk15ctypeIcEC1EPKmbm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e8b0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f880.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 64.29% / 新版 64.29%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c27cb0",
      "incomplete_value": true,
      "site": "00c27cb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c27cc4",
      "incomplete_value": true,
      "site": "00c27cc8",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c27ca4",
      "READ",
      [
        "storage",
        "00c9be98",
        null,
        "pointer"
      ]
    ],
    [
      "00c27cb4",
      "DATA",
      [
        "storage",
        "00c93838",
        null,
        "pointer"
      ]
    ],
    [
      "00c27cc8",
      "DATA",
      [
        "storage",
        "00310fd8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c27ca4",
      "READ",
      [
        "storage",
        "00c9ce68",
        null,
        "pointer"
      ]
    ],
    [
      "00c27cb4",
      "DATA",
      [
        "storage",
        "00c94808",
        null,
        "pointer"
      ]
    ],
    [
      "00c27cc8",
      "DATA",
      [
        "storage",
        "00311018",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26ca8 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c27c9c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c26cb0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e98:8"]]
- 00c26cb0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c27ca4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e68:8"]]
+ 00c27ca4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c26ccc ["COPY", "register:4040:8", ["const:310000:8"]]
+ 00c27cc0 ["COPY", "register:4040:8", ["const:311000:8"]]
~~~


<a id="compare-54e41a355afcb68d0538c7ac0a05b8ce"></a>

### [`00c26d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26d5c.md) → [`00c27d50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c27d50.md) _ZNKSt6__ndk15ctypeIcE10do_toupperEc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

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
      "definition_site": "00c27dc8",
      "incomplete_value": false,
      "site": "00c27dc8",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c27da4",
      "incomplete_value": false,
      "site": "00c27da8",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c27db4",
      "incomplete_value": false,
      "site": "00c27dc0",
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
      "00c27d70",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27da4",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27db4",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c27d70",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27da4",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27db4",
      "PARAM",
      [
        "storage",
        "002b628b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26db4 ["INT_ADD", "register:40f0:8", ["const:c26db4:8", "const:4:8"]]
- 00c26db4 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c27da8 ["INT_ADD", "register:40f0:8", ["const:c27da8:8", "const:4:8"]]
+ 00c27da8 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c26dcc ["INT_ADD", "register:40f0:8", ["const:c26dcc:8", "const:4:8"]]
- 00c26dcc ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c27dc0 ["INT_ADD", "register:40f0:8", ["const:c27dc0:8", "const:4:8"]]
+ 00c27dc0 ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c26dd4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
- 00c26dd4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c27dc8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d58:8"]]
+ 00c27dc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-1b61f43c4c35c1afd4017ecd3323c360"></a>

### [`00c26e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26e00.md) → [`00c27df4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c27df4.md) _ZNKSt6__ndk15ctypeIcE10do_toupperEPcPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c27e80",
      "incomplete_value": true,
      "site": "00c27e80",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c27e58",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27e60",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27e6c",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c27e58",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27e60",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27e6c",
      "PARAM",
      [
        "storage",
        "002b628b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26e8c ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d98:8"]]
- 00c26e8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c27e80 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d58:8"]]
+ 00c27e80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00c26e28 ["COPY", "register:40a8:8", ["const:1127000:8"]]
+ 00c27e1c ["COPY", "register:40a8:8", ["const:1128000:8"]]
- 00c26e2c ["COPY", "tmp:0:8", ["const:da0:8"]]
- 00c26e2c ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
- 00c26e2c ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
- 00c26e2c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
+ 00c27e20 ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 00c27e20 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c27e20 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c27e20 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
~~~


<a id="compare-2c8545fd446d1cee430ab216879918f7"></a>

### [`00c26ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26ed4.md) → [`00c27ec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c27ec8.md) _ZNKSt6__ndk15ctypeIcE10do_tolowerEc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

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
      "definition_site": "00c27f40",
      "incomplete_value": false,
      "site": "00c27f40",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c27f1c",
      "incomplete_value": false,
      "site": "00c27f20",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c27f2c",
      "incomplete_value": true,
      "site": "00c27f38",
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
            "const:28b:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c27ee8",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27f1c",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27f2c",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c27ee8",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27f1c",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27f2c",
      "PARAM",
      [
        "storage",
        "002b628b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c26f2c ["INT_ADD", "register:40f0:8", ["const:c26f2c:8", "const:4:8"]]
- 00c26f2c ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c27f20 ["INT_ADD", "register:40f0:8", ["const:c27f20:8", "const:4:8"]]
+ 00c27f20 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c26f44 ["INT_ADD", "register:40f0:8", ["const:c26f44:8", "const:4:8"]]
- 00c26f44 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c27f38 ["INT_ADD", "register:40f0:8", ["const:c27f38:8", "const:4:8"]]
+ 00c27f38 ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c26f4c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
- 00c26f4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c27f40 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d58:8"]]
+ 00c27f40 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-42e534016a33a347cd8db35bc592ede6"></a>

### [`00c26f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26f78.md) → [`00c27f6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c27f6c.md) _ZNKSt6__ndk15ctypeIcE10do_tolowerEPcPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c27ff8",
      "incomplete_value": true,
      "site": "00c27ff8",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c27fd0",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27fd8",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27fe4",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c27fd0",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27fd8",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c27fe4",
      "PARAM",
      [
        "storage",
        "002b628b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c27004 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d98:8"]]
- 00c27004 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c27ff8 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d58:8"]]
+ 00c27ff8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00c26fa0 ["COPY", "register:40a8:8", ["const:1127000:8"]]
+ 00c27f94 ["COPY", "register:40a8:8", ["const:1128000:8"]]
- 00c26fa4 ["COPY", "tmp:0:8", ["const:da0:8"]]
- 00c26fa4 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
- 00c26fa4 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
- 00c26fa4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
+ 00c27f98 ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 00c27f98 ["INT_CARRY", "register:105:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c27f98 ["INT_SCARRY", "register:106:1", ["register:40a8:8", "tmp:0:8"]]
+ 00c27f98 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "tmp:0:8"]]
~~~


<a id="compare-abe349df576258f4f694336e64c25976"></a>

### [`00c27234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c27234.md) → [`00c28228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c28228.md) _ZNSt6__ndk112ctype_bynameIcEC1EPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ea90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea90.md) · 呼出先 7件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 1件 [`00c5fa60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa60.md) · 呼出先 7件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00c269c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c269c4.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.73% / 新版 92.73%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c28260",
      "incomplete_value": false,
      "site": "00c28260",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:311000:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c282a0",
      "incomplete_value": false,
      "site": "00c282b0",
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
            "const:b2f:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c28248",
      "READ",
      [
        "storage",
        "00c9bea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c28260",
      "DATA",
      [
        "storage",
        "00310fd8",
        null,
        null
      ]
    ],
    [
      "00c28264",
      "DATA",
      [
        "storage",
        "00c938a0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c28248",
      "READ",
      [
        "storage",
        "00c9ce70",
        null,
        "pointer"
      ]
    ],
    [
      "00c28260",
      "DATA",
      [
        "storage",
        "00311018",
        null,
        null
      ]
    ],
    [
      "00c28264",
      "DATA",
      [
        "storage",
        "00c94870",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c272bc ["INT_ADD", "register:40f0:8", ["const:c272bc:8", "const:4:8"]]
- 00c272bc ["CALL", null, ["callee:00c269c4:8"]]
+ 00c282b0 ["INT_ADD", "register:40f0:8", ["const:c282b0:8", "const:4:8"]]
+ 00c282b0 ["CALL", null, ["callee:00c269c4:8"]]
- 00c2724c ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00c28240 ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 00c27254 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:ea0:8"]]
- 00c27254 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c28248 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:e70:8"]]
+ 00c28248 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c2367b160ee022e80cf0a5c515c9734c"></a>

### [`00c2731c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c2731c.md) → [`00c28310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c28310.md) _ZNSt6__ndk112ctype_bynameIcEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5e910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e910.md) [`00c5eaa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eaa0.md) · 呼出先 6件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)
- 新版 呼出元 2件 [`00c5f8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f8e0.md) [`00c5fa70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa70.md) · 呼出先 6件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59150.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md) [`00c5f050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c28328",
      "incomplete_value": true,
      "site": "00c28330",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2834c",
      "incomplete_value": true,
      "site": "00c2834c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2838c",
      "incomplete_value": false,
      "site": "00c2839c",
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
            "const:b2f:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c28330",
      "DATA",
      [
        "storage",
        "00310fd8",
        null,
        null
      ]
    ],
    [
      "00c2833c",
      "READ",
      [
        "storage",
        "00c9bea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2834c",
      "DATA",
      [
        "storage",
        "00c938a0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c28330",
      "DATA",
      [
        "storage",
        "00311018",
        null,
        null
      ]
    ],
    [
      "00c2833c",
      "READ",
      [
        "storage",
        "00c9ce70",
        null,
        "pointer"
      ]
    ],
    [
      "00c2834c",
      "DATA",
      [
        "storage",
        "00c94870",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c273a8 ["INT_ADD", "register:40f0:8", ["const:c273a8:8", "const:4:8"]]
- 00c273a8 ["CALL", null, ["callee:00c59150:8"]]
+ 00c2839c ["INT_ADD", "register:40f0:8", ["const:c2839c:8", "const:4:8"]]
+ 00c2839c ["CALL", null, ["callee:00c59150:8"]]
- 00c27330 ["COPY", "register:4040:8", ["const:310000:8"]]
+ 00c28324 ["COPY", "register:4040:8", ["const:311000:8"]]
- 00c27334 ["COPY", "tmp:0:8", ["const:fd8:8"]]
- 00c27334 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c27334 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c27334 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c28328 ["COPY", "tmp:0:8", ["const:18:8"]]
+ 00c28328 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c28328 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c28328 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8b960c751c3cbe7b11c292d036cfdf1d"></a>

### [`00c277ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c277ac.md) → [`00c287a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c287a0.md) _ZNSt6__ndk112ctype_bynameIwEC2EPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5eac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eac0.md) · 呼出先 7件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 1件 [`00c5fa90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa90.md) · 呼出先 7件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00c269c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c269c4.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.16% / 新版 92.16%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c287cc",
      "incomplete_value": true,
      "site": "00c287cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c28808",
      "incomplete_value": false,
      "site": "00c28818",
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
            "const:b6a:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c287c0",
      "READ",
      [
        "storage",
        "00c9bea8",
        null,
        "pointer"
      ]
    ],
    [
      "00c287cc",
      "DATA",
      [
        "storage",
        "00c93908",
        null,
        "pointer"
      ]
    ],
    [
      "00c28808",
      "PARAM",
      [
        "storage",
        "002bfa8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c287c0",
      "READ",
      [
        "storage",
        "00c9ce78",
        null,
        "pointer"
      ]
    ],
    [
      "00c287cc",
      "DATA",
      [
        "storage",
        "00c948d8",
        null,
        "pointer"
      ]
    ],
    [
      "00c28808",
      "PARAM",
      [
        "storage",
        "002bfb6a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c27824 ["INT_ADD", "register:40f0:8", ["const:c27824:8", "const:4:8"]]
- 00c27824 ["CALL", null, ["callee:00c269c4:8"]]
+ 00c28818 ["INT_ADD", "register:40f0:8", ["const:c28818:8", "const:4:8"]]
+ 00c28818 ["CALL", null, ["callee:00c269c4:8"]]
- 00c277c0 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c287b4 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c277cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea8:8"]]
- 00c277cc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c287c0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e78:8"]]
+ 00c287c0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7dcfc20efe9b227494aa7dcf1917e91a"></a>

### [`00c27884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c27884.md) → [`00c28878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c28878.md) _ZNSt6__ndk112ctype_bynameIwEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5e920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e920.md) [`00c5eae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eae0.md) · 呼出先 6件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)
- 新版 呼出元 2件 [`00c5f8f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f8f0.md) [`00c5fab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fab0.md) · 呼出先 6件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59150.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md) [`00c5f050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.49% / 新版 91.49%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c288a4",
      "incomplete_value": true,
      "site": "00c288a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c288e4",
      "incomplete_value": false,
      "site": "00c288f4",
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
            "const:b6a:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c28898",
      "READ",
      [
        "storage",
        "00c9bea8",
        null,
        "pointer"
      ]
    ],
    [
      "00c288a4",
      "DATA",
      [
        "storage",
        "00c93908",
        null,
        "pointer"
      ]
    ],
    [
      "00c288e4",
      "PARAM",
      [
        "storage",
        "002bfa8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c28898",
      "READ",
      [
        "storage",
        "00c9ce78",
        null,
        "pointer"
      ]
    ],
    [
      "00c288a4",
      "DATA",
      [
        "storage",
        "00c948d8",
        null,
        "pointer"
      ]
    ],
    [
      "00c288e4",
      "PARAM",
      [
        "storage",
        "002bfb6a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c27900 ["INT_ADD", "register:40f0:8", ["const:c27900:8", "const:4:8"]]
- 00c27900 ["CALL", null, ["callee:00c59150:8"]]
+ 00c288f4 ["INT_ADD", "register:40f0:8", ["const:c288f4:8", "const:4:8"]]
+ 00c288f4 ["CALL", null, ["callee:00c59150:8"]]
- 00c27898 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c2888c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c278a4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea8:8"]]
- 00c278a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c28898 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e78:8"]]
+ 00c28898 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0518057ee57fa8ed73fe297aa78b22e8"></a>

### [`00c2829c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c2829c.md) → [`00c29290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29290.md) _ZNSt6__ndk17codecvtIwc9mbstate_tEC1Em

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5a940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a940.md) [`00c5e8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e8c0.md) · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 2件 [`00c5b910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b910.md) [`00c5f890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f890.md) · 呼出先 3件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 74.29% / 新版 74.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c292cc",
      "incomplete_value": true,
      "site": "00c292d0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c29308",
      "incomplete_value": true,
      "site": "00c29308",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c292e8",
      "incomplete_value": false,
      "site": "00c292ec",
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
      "00c292ac",
      "READ",
      [
        "storage",
        "00c9beb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c292b8",
      "DATA",
      [
        "storage",
        "00c93990",
        null,
        "pointer"
      ]
    ],
    [
      "00c292c4",
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
      "00c292ac",
      "READ",
      [
        "storage",
        "00c9ce80",
        null,
        "pointer"
      ]
    ],
    [
      "00c292b8",
      "DATA",
      [
        "storage",
        "00c94960",
        null,
        "pointer"
      ]
    ],
    [
      "00c292c4",
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
- 00c282f8 ["INT_ADD", "register:40f0:8", ["const:c282f8:8", "const:4:8"]]
- 00c282f8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c292ec ["INT_ADD", "register:40f0:8", ["const:c292ec:8", "const:4:8"]]
+ 00c292ec ["CALL", null, ["callee:00c58ef0:8"]]
- 00c28314 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d98:8"]]
- 00c28314 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c29308 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d58:8"]]
+ 00c29308 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00c282ac ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c292a0 ["COPY", "register:4040:8", ["const:c9c000:8"]]
~~~


<a id="compare-9127fe6ed6692e272cf65ca82d7c5b47"></a>

### [`00c2bf08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2bf08.md) → [`00c2cefc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2cefc.md) _ZNSt6__ndk18numpunctIcEC2Em

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e8d0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5f8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f8a0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 72.73% / 新版 72.73%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2cf20",
      "incomplete_value": true,
      "site": "00c2cf20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c2cf08",
      "READ",
      [
        "storage",
        "00c9beb8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2cf20",
      "DATA",
      [
        "storage",
        "00c939f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2cf08",
      "READ",
      [
        "storage",
        "00c9ce88",
        null,
        "pointer"
      ]
    ],
    [
      "00c2cf20",
      "DATA",
      [
        "storage",
        "00c949c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2bf0c ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00c2cf00 ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 00c2bf14 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:eb8:8"]]
- 00c2bf14 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2cf08 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:e88:8"]]
+ 00c2cf08 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cdee0dcd2f9b4ba0f8c71e53e78069fa"></a>

### [`00c2bf34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2bf34.md) → [`00c2cf28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2cf28.md) _ZNSt6__ndk18numpunctIwEC1Em

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e8e0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5f8b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f8b0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 58.33% / 新版 58.33%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2cf3c",
      "incomplete_value": true,
      "site": "00c2cf4c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:378:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2cf50",
      "incomplete_value": true,
      "site": "00c2cf50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c2cf38",
      "READ",
      [
        "storage",
        "00c9bec0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2cf3c",
      "READ",
      [
        "storage",
        "002c4328",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2cf50",
      "DATA",
      [
        "storage",
        "00c93a40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2cf38",
      "READ",
      [
        "storage",
        "00c9ce90",
        null,
        "pointer"
      ]
    ],
    [
      "00c2cf3c",
      "READ",
      [
        "storage",
        "002c4378",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2cf50",
      "DATA",
      [
        "storage",
        "00c94a10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2bf38 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00c2cf2c ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 00c2bf44 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:ec0:8"]]
- 00c2bf44 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2cf38 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:e90:8"]]
+ 00c2cf38 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2bf48 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:328:8"]]
- 00c2bf48 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2bf48 ["COPY", "register:5008:8", ["const:0:8"]]
- 00c2bf48 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2cf3c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:378:8"]]
+ 00c2cf3c ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2cf3c ["COPY", "register:5008:8", ["const:0:8"]]
+ 00c2cf3c ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-ea03faab4738616fb588de34aae0ae7d"></a>

### [`00c2c10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c10c.md) → [`00c2d100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d100.md) _ZNKSt6__ndk18numpunctIwE11do_truenameEv

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
      "definition_site": "00c2d110",
      "incomplete_value": true,
      "site": "00c2d11c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c2d110",
      "READ",
      [
        "storage",
        "00310778",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c2d110",
      "READ",
      [
        "storage",
        "003107b8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c114 ["COPY", "tmp:0:8", ["const:778:8"]]
- 00c2c114 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00c2c114 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00c2c114 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00c2d108 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 00c2d108 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00c2d108 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00c2d108 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-e73dcff24744d97a86216aaa4951608f"></a>

### [`00c2c210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c210.md) → [`00c2d204`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d204.md) _ZNKSt6__ndk18numpunctIwE12do_falsenameEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2d22c",
      "incomplete_value": true,
      "site": "00c2d240",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:5c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2d238",
      "incomplete_value": true,
      "site": "00c2d244",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:834:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c2d22c",
      "READ",
      [
        "storage",
        "002c2570",
        null,
        null
      ]
    ],
    [
      "00c2d238",
      "READ",
      [
        "storage",
        "003107f4",
        null,
        "unicode32"
      ]
    ]
  ],
  "added": [
    [
      "00c2d22c",
      "READ",
      [
        "storage",
        "002c25c0",
        null,
        null
      ]
    ],
    [
      "00c2d238",
      "READ",
      [
        "storage",
        "00310834",
        null,
        "unicode32"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c228 ["INT_ADD", "register:40f0:8", ["const:c2c228:8", "const:4:8"]]
- 00c2c228 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c2d21c ["INT_ADD", "register:40f0:8", ["const:c2d21c:8", "const:4:8"]]
+ 00c2d21c ["CALL", null, ["callee:00c58f30:8"]]
- 00c2c238 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:570:8"]]
- 00c2c238 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00c2c238 ["COPY", "register:5010:8", ["const:0:8"]]
- 00c2c238 ["COPY", "register:5018:8", ["const:0:8"]]
+ 00c2d22c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:5c0:8"]]
+ 00c2d22c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00c2d22c ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2d22c ["COPY", "register:5018:8", ["const:0:8"]]
- 00c2c23c ["COPY", "register:4040:8", ["const:310000:8"]]
~~~


<a id="compare-4388b166c82ed602a82924c240dca9bd"></a>

### [`00c2c264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c264.md) → [`00c2d258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d258.md) _ZNSt6__ndk115numpunct_bynameIcEC1EPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5ed20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed20.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5fcf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fcf0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2d28c",
      "incomplete_value": true,
      "site": "00c2d28c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c2c298",
      "incomplete_value": true,
      "site": "00c2c298",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c2d280",
      "READ",
      [
        "storage",
        "00c9bec8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2d28c",
      "DATA",
      [
        "storage",
        "00c93a90",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2d280",
      "READ",
      [
        "storage",
        "00c9ce98",
        null,
        "pointer"
      ]
    ],
    [
      "00c2d28c",
      "DATA",
      [
        "storage",
        "00c94a60",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c284 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c2d278 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c2c28c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ec8:8"]]
- 00c2c28c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2d280 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e98:8"]]
+ 00c2d280 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2c29c ["INT_ADD", "register:40f0:8", ["const:c2c29c:8", "const:4:8"]]
- 00c2c29c ["CALL", null, ["callee:00c5fcf0:8"]]
+ 00c2d290 ["INT_ADD", "register:40f0:8", ["const:c2d290:8", "const:4:8"]]
+ 00c2d290 ["CALL", null, ["callee:00c5fcf0:8"]]
~~~


<a id="compare-8a4518d87d8c998fa6a8532bf58b8819"></a>

### [`00c2c2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c2c4.md) → [`00c2d2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d2b8.md) _ZNSt6__ndk115numpunct_bynameIcE6__initEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ed20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed20.md) · 呼出先 13件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00bf2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5fcf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fcf0.md) · 呼出先 13件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00440f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440f9c.md) [`00bf3028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3028.md) [`00c269c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c269c4.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.67% / 新版 98.67%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2d4e4",
      "incomplete_value": false,
      "site": "00c2d4f4",
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
            "const:a3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2c4f0",
      "incomplete_value": false,
      "site": "00c2c500",
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
            "const:96f:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c2d2e0",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ],
    [
      "00c2d4e4",
      "PARAM",
      [
        "storage",
        "002a996f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c2d2e0",
      "PARAM",
      [
        "storage",
        "002b628b",
        null,
        null
      ]
    ],
    [
      "00c2d4e4",
      "PARAM",
      [
        "storage",
        "002a9a3c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c500 ["INT_ADD", "register:40f0:8", ["const:c2c500:8", "const:4:8"]]
- 00c2c500 ["CALL", null, ["callee:00c269c4:8"]]
+ 00c2d4f4 ["INT_ADD", "register:40f0:8", ["const:c2d4f4:8", "const:4:8"]]
+ 00c2d4f4 ["CALL", null, ["callee:00c269c4:8"]]
- 00c2c2ec ["COPY", "tmp:0:8", ["const:1bc:8"]]
- 00c2c2ec ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00c2c2ec ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00c2c2ec ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00c2d2e0 ["COPY", "tmp:0:8", ["const:28b:8"]]
+ 00c2d2e0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00c2d2e0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00c2d2e0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00c2c2f4 ["INT_ADD", "register:40f0:8", ["const:c2c2f4:8", "const:4:8"]]
- 00c2c2f4 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00c2d2e8 ["INT_ADD", "register:40f0:8", ["const:c2d2e8:8", "const:4:8"]]
+ 00c2d2e8 ["CALL", null, ["callee:00c5c8f0:8"]]
~~~


<a id="compare-e466ce26542cebaad1f4397a972bfa5b"></a>

### [`00c2c598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c598.md) → [`00c2d58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d58c.md) _ZNSt6__ndk115numpunct_bynameIcEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e940.md) · 呼出先 1件 [`00c5ed20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed20.md)
- 新版 呼出元 1件 [`00c5f910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f910.md) · 呼出先 1件 [`00c5fcf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fcf0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2d5c0",
      "incomplete_value": true,
      "site": "00c2d5c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c2c5cc",
      "incomplete_value": true,
      "site": "00c2c5cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c2d5b4",
      "READ",
      [
        "storage",
        "00c9bec8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2d5c0",
      "DATA",
      [
        "storage",
        "00c93a90",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2d5b4",
      "READ",
      [
        "storage",
        "00c9ce98",
        null,
        "pointer"
      ]
    ],
    [
      "00c2d5c0",
      "DATA",
      [
        "storage",
        "00c94a60",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c5b8 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c2d5ac ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c2c5c0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ec8:8"]]
- 00c2c5c0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2d5b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e98:8"]]
+ 00c2d5b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2c5e0 ["INT_ADD", "register:40f0:8", ["const:c2c5e0:8", "const:4:8"]]
- 00c2c5e0 ["CALL", null, ["callee:00c5fcf0:8"]]
+ 00c2d5d4 ["INT_ADD", "register:40f0:8", ["const:c2d5d4:8", "const:4:8"]]
+ 00c2d5d4 ["CALL", null, ["callee:00c5fcf0:8"]]
~~~


<a id="compare-dce5ff799e89a2b16aa24857e1f6a3e9"></a>

### [`00c2c65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c65c.md) → [`00c2d650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d650.md) _ZNSt6__ndk115numpunct_bynameIwEC1EPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5ed50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed50.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5fd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fd20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2d66c",
      "incomplete_value": true,
      "site": "00c2d680",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:378:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2c678",
      "incomplete_value": true,
      "site": "00c2c68c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2d688",
      "incomplete_value": true,
      "site": "00c2d688",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c2c694",
      "incomplete_value": true,
      "site": "00c2c694",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c2d66c",
      "READ",
      [
        "storage",
        "002c4328",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2d678",
      "READ",
      [
        "storage",
        "00c9bed0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2d688",
      "DATA",
      [
        "storage",
        "00c93ae0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2d66c",
      "READ",
      [
        "storage",
        "002c4378",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2d678",
      "READ",
      [
        "storage",
        "00c9cea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2d688",
      "DATA",
      [
        "storage",
        "00c94ab0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c678 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:328:8"]]
- 00c2c678 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2c678 ["COPY", "register:5008:8", ["const:0:8"]]
- 00c2c678 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2d66c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:378:8"]]
+ 00c2d66c ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2d66c ["COPY", "register:5008:8", ["const:0:8"]]
+ 00c2d66c ["COPY", "register:5010:8", ["const:0:8"]]
- 00c2c680 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c2d674 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c2c684 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ed0:8"]]
- 00c2c684 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2d678 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 00c2d678 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9080c6ada4c3096d98799b3e1be7a677"></a>

### [`00c2c6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c6c0.md) → [`00c2d6b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d6b4.md) _ZNSt6__ndk115numpunct_bynameIwE6__initEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ed50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed50.md) · 呼出先 14件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00bf2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c2c634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c634.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 1件 [`00c5fd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fd20.md) · 呼出先 14件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00bf3028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3028.md) [`00c269c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c269c4.md) [`00c2d628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d628.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.31% / 新版 98.31%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2d6dc",
      "incomplete_value": false,
      "site": "00c2d6e4",
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
      "definition_site": "00c2c6e8",
      "incomplete_value": false,
      "site": "00c2c6f0",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2d828",
      "incomplete_value": false,
      "site": "00c2d838",
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
            "const:831:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2c834",
      "incomplete_value": false,
      "site": "00c2c844",
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
            "const:75a:8"
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
      "00c2d6dc",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ],
    [
      "00c2d828",
      "PARAM",
      [
        "storage",
        "002b175a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c2d6dc",
      "PARAM",
      [
        "storage",
        "002b628b",
        null,
        null
      ]
    ],
    [
      "00c2d828",
      "PARAM",
      [
        "storage",
        "002b1831",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c6f0 ["INT_ADD", "register:40f0:8", ["const:c2c6f0:8", "const:4:8"]]
- 00c2c6f0 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00c2d6e4 ["INT_ADD", "register:40f0:8", ["const:c2d6e4:8", "const:4:8"]]
+ 00c2d6e4 ["CALL", null, ["callee:00c5c8f0:8"]]
- 00c2c844 ["INT_ADD", "register:40f0:8", ["const:c2c844:8", "const:4:8"]]
- 00c2c844 ["CALL", null, ["callee:00c269c4:8"]]
+ 00c2d838 ["INT_ADD", "register:40f0:8", ["const:c2d838:8", "const:4:8"]]
+ 00c2d838 ["CALL", null, ["callee:00c269c4:8"]]
- 00c2c6e8 ["COPY", "tmp:0:8", ["const:1bc:8"]]
- 00c2c6e8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00c2c6e8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00c2c6e8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00c2d6dc ["COPY", "tmp:0:8", ["const:28b:8"]]
+ 00c2d6dc ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00c2d6dc ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00c2d6dc ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-a6b628d1e6a7dc128dc1240eb51a85c9"></a>

### [`00c2c8cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c8cc.md) → [`00c2d8c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d8c0.md) _ZNSt6__ndk115numpunct_bynameIwEC2ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e950.md) · 呼出先 1件 [`00c5ed50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed50.md)
- 新版 呼出元 1件 [`00c5f920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f920.md) · 呼出先 1件 [`00c5fd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fd20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2d8dc",
      "incomplete_value": true,
      "site": "00c2d8f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:378:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2c8e8",
      "incomplete_value": true,
      "site": "00c2c8fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2d8f8",
      "incomplete_value": true,
      "site": "00c2d8f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c2c904",
      "incomplete_value": true,
      "site": "00c2c904",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c2d8dc",
      "READ",
      [
        "storage",
        "002c4328",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2d8e8",
      "READ",
      [
        "storage",
        "00c9bed0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2d8f8",
      "DATA",
      [
        "storage",
        "00c93ae0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2d8dc",
      "READ",
      [
        "storage",
        "002c4378",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2d8e8",
      "READ",
      [
        "storage",
        "00c9cea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2d8f8",
      "DATA",
      [
        "storage",
        "00c94ab0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c8e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:328:8"]]
- 00c2c8e8 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2c8e8 ["COPY", "register:5008:8", ["const:0:8"]]
- 00c2c8e8 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2d8dc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:378:8"]]
+ 00c2d8dc ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2d8dc ["COPY", "register:5008:8", ["const:0:8"]]
+ 00c2d8dc ["COPY", "register:5010:8", ["const:0:8"]]
- 00c2c8f0 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c2d8e4 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c2c8f4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ed0:8"]]
- 00c2c8f4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2d8e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 00c2d8e8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e431110b86835b2e00dcd59f765dacdb"></a>

### [`00c2cb0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2cb0c.md) → [`00c2db00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2db00.md) _ZNKSt6__ndk120__time_get_c_storageIcE7__weeksEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c2cb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2cb78.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2db6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2db6c.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c2db5c",
      "incomplete_value": false,
      "site": "00c2db5c",
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
            "const:f68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2cb68",
      "incomplete_value": false,
      "site": "00c2cb68",
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
            "const:fa8:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2db4c",
      "incomplete_value": false,
      "site": "00c2db5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2cb58",
      "incomplete_value": false,
      "site": "00c2cb68",
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
            "const:a8:8"
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
      "definition_site": "00c2db34",
      "incomplete_value": false,
      "site": "00c2db38",
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
            "const:f70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2cb40",
      "incomplete_value": false,
      "site": "00c2cb44",
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
            "const:fb0:8"
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
      "00c2db14",
      "READ",
      [
        "storage",
        "01127fb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2db20",
      "READ",
      [
        "storage",
        "01127fa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2db20",
      "DATA",
      [
        "storage",
        "011280a8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2db14",
      "READ",
      [
        "storage",
        "01128f70",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2db20",
      "READ",
      [
        "storage",
        "01128f68",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2db20",
      "DATA",
      [
        "storage",
        "01129068",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2cb44 ["INT_ADD", "register:40f0:8", ["const:c2cb44:8", "const:4:8"]]
- 00c2cb44 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2db38 ["INT_ADD", "register:40f0:8", ["const:c2db38:8", "const:4:8"]]
+ 00c2db38 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2cb68 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fa8:8"]]
- 00c2cb68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00c2db5c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:f68:8"]]
+ 00c2db5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00c2cb6c ["INT_ADD", "register:40f0:8", ["const:c2cb6c:8", "const:4:8"]]
- 00c2cb6c ["CALL", null, ["callee:00c58f10:8"]]
+ 00c2db60 ["INT_ADD", "register:40f0:8", ["const:c2db60:8", "const:4:8"]]
+ 00c2db60 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-261818de5536422963dddbb1fa0f22cb"></a>

### [`00c2cb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2cb78.md) → [`00c2db6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2db6c.md) FUN_00c2db6c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c2cb0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2cb0c.md) · 呼出先 4件 [`00c35c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35c3c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c2db00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2db00.md) · 呼出先 4件 [`00c36c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36c30.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 71.48% / 新版 71.48%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 21件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c2dba0",
      "incomplete_value": false,
      "site": "00c2dba0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2cbac",
      "incomplete_value": false,
      "site": "00c2cbac",
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
            "const:a8:8"
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
      "definition_site": "00c2dbb8",
      "incomplete_value": false,
      "site": "00c2dbb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2cbc4",
      "incomplete_value": false,
      "site": "00c2cbc4",
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
            "const:b0:8"
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
      "definition_site": "00c2dbec",
      "incomplete_value": false,
      "site": "00c2dbec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2cbf8",
      "incomplete_value": false,
      "site": "00c2cbf8",
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
            "const:c0:8"
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
      "00c2db80",
      "READ",
      [
        "storage",
        "011281f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2db8c",
      "READ",
      [
        "storage",
        "011280a8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2dba0",
      "WRITE",
      [
        "storage",
        "011280a8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2db80",
      "READ",
      [
        "storage",
        "011291b8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2db8c",
      "READ",
      [
        "storage",
        "01129068",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2dba0",
      "WRITE",
      [
        "storage",
        "01129068",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2cf80 ["INT_ADD", "register:40f0:8", ["const:c2cf80:8", "const:4:8"]]
- 00c2cf80 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2df74 ["INT_ADD", "register:40f0:8", ["const:c2df74:8", "const:4:8"]]
+ 00c2df74 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2cf9c ["INT_ADD", "register:40f0:8", ["const:c2cf9c:8", "const:4:8"]]
- 00c2cf9c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00c2df90 ["INT_ADD", "register:40f0:8", ["const:c2df90:8", "const:4:8"]]
+ 00c2df90 ["CALL", null, ["callee:00c58ed0:8"]]
- 00c2cfa8 ["INT_ADD", "register:40f0:8", ["const:c2cfa8:8", "const:4:8"]]
- 00c2cfa8 ["CALL", null, ["callee:00c58f10:8"]]
+ 00c2df9c ["INT_ADD", "register:40f0:8", ["const:c2df9c:8", "const:4:8"]]
+ 00c2df9c ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-27805f0f7ebf19bcb334d41280f4da39"></a>

### [`00c2cfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2cfb0.md) → [`00c2dfa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2dfa4.md) _ZNKSt6__ndk120__time_get_c_storageIwE7__weeksEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c2d030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2d030.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2e024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2e/00c2e024.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination, store_value

命令の説明率　旧版 65.38% / 新版 65.38%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `return_value_candidate` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c2e000",
      "incomplete_value": true,
      "site": "00c2e000",
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
            "const:f78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2d00c",
      "incomplete_value": true,
      "site": "00c2d00c",
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
            "const:fb8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2dff4",
      "incomplete_value": false,
      "site": "00c2e000",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2d000",
      "incomplete_value": false,
      "site": "00c2d00c",
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
            "const:200:8"
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
      "definition_site": "00c2dfe0",
      "incomplete_value": false,
      "site": "00c2dfe4",
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
            "const:f80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2cfec",
      "incomplete_value": false,
      "site": "00c2cff0",
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
            "const:fc0:8"
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
      "00c2dfc0",
      "READ",
      [
        "storage",
        "01127fc0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2dfc8",
      "READ",
      [
        "storage",
        "01127fb8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2dfc8",
      "DATA",
      [
        "storage",
        "01128200",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2dfc0",
      "READ",
      [
        "storage",
        "01128f80",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2dfc8",
      "READ",
      [
        "storage",
        "01128f78",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2dfc8",
      "DATA",
      [
        "storage",
        "011291c0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2cff0 ["INT_ADD", "register:40f0:8", ["const:c2cff0:8", "const:4:8"]]
- 00c2cff0 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2dfe4 ["INT_ADD", "register:40f0:8", ["const:c2dfe4:8", "const:4:8"]]
+ 00c2dfe4 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2cff8 ["INT_ADD", "register:40f0:8", ["const:c2cff8:8", "const:4:8"]]
- 00c2cff8 ["CALL", null, ["ram:c2d030:8"]]
+ 00c2dfec ["INT_ADD", "register:40f0:8", ["const:c2dfec:8", "const:4:8"]]
+ 00c2dfec ["CALL", null, ["ram:c2e024:8"]]
- 00c2d00c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:fb8:8"]]
- 00c2d00c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
+ 00c2e000 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f78:8"]]
+ 00c2e000 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-9d549bd54bda2f3b7af6220113f77a43"></a>

### [`00c2d304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2d304.md) → [`00c2e2f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2e/00c2e2f8.md) _ZNKSt6__ndk120__time_get_c_storageIcE8__monthsEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c2d370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2d370.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2e364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2e/00c2e364.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c2e354",
      "incomplete_value": false,
      "site": "00c2e354",
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
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2d360",
      "incomplete_value": false,
      "site": "00c2d360",
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
            "const:fc8:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2e344",
      "incomplete_value": false,
      "site": "00c2e354",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:318:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2d350",
      "incomplete_value": false,
      "site": "00c2d360",
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
            "const:358:8"
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
      "definition_site": "00c2e32c",
      "incomplete_value": false,
      "site": "00c2e330",
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
            "const:f90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2d338",
      "incomplete_value": false,
      "site": "00c2d33c",
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
            "const:fd0:8"
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
      "00c2e30c",
      "READ",
      [
        "storage",
        "01127fd0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e318",
      "READ",
      [
        "storage",
        "01127fc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2e318",
      "DATA",
      [
        "storage",
        "01128358",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e30c",
      "READ",
      [
        "storage",
        "01128f90",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e318",
      "READ",
      [
        "storage",
        "01128f88",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2e318",
      "DATA",
      [
        "storage",
        "01129318",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2d33c ["INT_ADD", "register:40f0:8", ["const:c2d33c:8", "const:4:8"]]
- 00c2d33c ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2e330 ["INT_ADD", "register:40f0:8", ["const:c2e330:8", "const:4:8"]]
+ 00c2e330 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2d360 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fc8:8"]]
- 00c2d360 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00c2e354 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:f88:8"]]
+ 00c2e354 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00c2d364 ["INT_ADD", "register:40f0:8", ["const:c2d364:8", "const:4:8"]]
- 00c2d364 ["CALL", null, ["callee:00c58f10:8"]]
+ 00c2e358 ["INT_ADD", "register:40f0:8", ["const:c2e358:8", "const:4:8"]]
+ 00c2e358 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-5888db51d61a134079d78d860d8b90c3"></a>

### [`00c2d370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2d370.md) → [`00c2e364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2e/00c2e364.md) FUN_00c2e364

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c2d304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2d304.md) · 呼出先 4件 [`00c35f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35f1c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c2e2f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2e/00c2e2f8.md) · 呼出先 4件 [`00c36f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36f10.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 70.48% / 新版 70.48%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 45件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c2e398",
      "incomplete_value": false,
      "site": "00c2e398",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:318:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2d3a4",
      "incomplete_value": false,
      "site": "00c2d3a4",
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
            "const:358:8"
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
      "definition_site": "00c2e3b0",
      "incomplete_value": false,
      "site": "00c2e3b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:320:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2d3bc",
      "incomplete_value": false,
      "site": "00c2d3bc",
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
            "const:360:8"
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
      "definition_site": "00c2e3e8",
      "incomplete_value": false,
      "site": "00c2e3e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:330:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2d3f4",
      "incomplete_value": false,
      "site": "00c2d3f4",
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
            "const:370:8"
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
      "00c2e378",
      "READ",
      [
        "storage",
        "01128598",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e384",
      "READ",
      [
        "storage",
        "01128358",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e398",
      "WRITE",
      [
        "storage",
        "01128358",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e378",
      "READ",
      [
        "storage",
        "01129558",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e384",
      "READ",
      [
        "storage",
        "01129318",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e398",
      "WRITE",
      [
        "storage",
        "01129318",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2d37c ["COPY", "register:4040:8", ["const:1128000:8"]]
+ 00c2e370 ["COPY", "register:4040:8", ["const:1129000:8"]]
- 00c2d380 ["COPY", "tmp:0:8", ["const:598:8"]]
- 00c2d380 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c2d380 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c2d380 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c2e374 ["COPY", "tmp:0:8", ["const:558:8"]]
+ 00c2e374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c2e374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c2e374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c2d38c ["COPY", "register:4040:8", ["const:1128000:8"]]
+ 00c2e380 ["COPY", "register:4040:8", ["const:1129000:8"]]
~~~


<a id="compare-8d1bd16e357ba345bc7f6f94cb0ce6b2"></a>

### [`00c2da44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2da44.md) → [`00c2ea38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2e/00c2ea38.md) _ZNKSt6__ndk120__time_get_c_storageIwE8__monthsEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c2dac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2dac4.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2eab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2e/00c2eab8.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination, store_value

命令の説明率　旧版 65.38% / 新版 65.38%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `return_value_candidate` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c2ea94",
      "incomplete_value": true,
      "site": "00c2ea94",
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
            "const:f98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2daa0",
      "incomplete_value": true,
      "site": "00c2daa0",
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
            "const:fd8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2ea88",
      "incomplete_value": false,
      "site": "00c2ea94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:560:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2da94",
      "incomplete_value": false,
      "site": "00c2daa0",
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
            "const:5a0:8"
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
      "definition_site": "00c2ea74",
      "incomplete_value": true,
      "site": "00c2ea78",
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
            "const:fa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2da80",
      "incomplete_value": true,
      "site": "00c2da84",
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
            "const:fe0:8"
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
      "00c2ea54",
      "READ",
      [
        "storage",
        "01127fe0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2ea5c",
      "READ",
      [
        "storage",
        "01127fd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2ea5c",
      "DATA",
      [
        "storage",
        "011285a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c2ea54",
      "READ",
      [
        "storage",
        "01128fa0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2ea5c",
      "READ",
      [
        "storage",
        "01128f98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2ea5c",
      "DATA",
      [
        "storage",
        "01129560",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2da84 ["INT_ADD", "register:40f0:8", ["const:c2da84:8", "const:4:8"]]
- 00c2da84 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2ea78 ["INT_ADD", "register:40f0:8", ["const:c2ea78:8", "const:4:8"]]
+ 00c2ea78 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2da8c ["INT_ADD", "register:40f0:8", ["const:c2da8c:8", "const:4:8"]]
- 00c2da8c ["CALL", null, ["ram:c2dac4:8"]]
+ 00c2ea80 ["INT_ADD", "register:40f0:8", ["const:c2ea80:8", "const:4:8"]]
+ 00c2ea80 ["CALL", null, ["ram:c2eab8:8"]]
- 00c2daa0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:fd8:8"]]
- 00c2daa0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
+ 00c2ea94 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f98:8"]]
+ 00c2ea94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-82c94ee279635166865e27d93e0d4377"></a>

### [`00c2dfec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2dfec.md) → [`00c2efe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2e/00c2efe0.md) _ZNKSt6__ndk120__time_get_c_storageIcE7__am_pmEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c2e058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e058.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2f04c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f04c.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c2f03c",
      "incomplete_value": true,
      "site": "00c2f03c",
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
            "const:fa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e048",
      "incomplete_value": true,
      "site": "00c2e048",
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
            "const:fe8:8"
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
      "definition_site": "00c2f014",
      "incomplete_value": false,
      "site": "00c2f018",
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
            "const:fb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e020",
      "incomplete_value": false,
      "site": "00c2e024",
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
            "const:ff0:8"
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
      "definition_site": "00c2f038",
      "incomplete_value": true,
      "site": "00c2f040",
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
            "const:fb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e044",
      "incomplete_value": true,
      "site": "00c2e04c",
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
            "const:ff0:8"
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
      "00c2eff4",
      "READ",
      [
        "storage",
        "01127ff0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f000",
      "READ",
      [
        "storage",
        "01127fe8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2f000",
      "DATA",
      [
        "storage",
        "011287e8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2eff4",
      "READ",
      [
        "storage",
        "01128fb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f000",
      "READ",
      [
        "storage",
        "01128fa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2f000",
      "DATA",
      [
        "storage",
        "011297a8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e024 ["INT_ADD", "register:40f0:8", ["const:c2e024:8", "const:4:8"]]
- 00c2e024 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2f018 ["INT_ADD", "register:40f0:8", ["const:c2f018:8", "const:4:8"]]
+ 00c2f018 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2e048 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fe8:8"]]
- 00c2e048 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00c2f03c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fa8:8"]]
+ 00c2f03c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00c2e04c ["INT_ADD", "register:40f0:8", ["const:c2e04c:8", "const:4:8"]]
- 00c2e04c ["CALL", null, ["callee:00c58f10:8"]]
+ 00c2f040 ["INT_ADD", "register:40f0:8", ["const:c2f040:8", "const:4:8"]]
+ 00c2f040 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-b4869d10b01134355dd83d0edbdced35"></a>

### [`00c2e058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e058.md) → [`00c2f04c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f04c.md) FUN_00c2f04c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c2dfec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2dfec.md) · 呼出先 4件 [`00c35fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35fbc.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c2efe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2e/00c2efe0.md) · 呼出先 4件 [`00c36fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36fb0.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c2f080",
      "incomplete_value": false,
      "site": "00c2f080",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:7a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e08c",
      "incomplete_value": false,
      "site": "00c2e08c",
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
            "const:7e8:8"
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
      "definition_site": "00c2f098",
      "incomplete_value": false,
      "site": "00c2f098",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:7b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e0a4",
      "incomplete_value": false,
      "site": "00c2e0a4",
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
            "const:7f0:8"
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
      "definition_site": "00c2f0c0",
      "incomplete_value": false,
      "site": "00c2f0c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e0cc",
      "incomplete_value": false,
      "site": "00c2e0cc",
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
            "const:800:8"
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
      "00c2f060",
      "READ",
      [
        "storage",
        "01128818",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f06c",
      "READ",
      [
        "storage",
        "011287e8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f080",
      "WRITE",
      [
        "storage",
        "011287e8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2f060",
      "READ",
      [
        "storage",
        "011297d8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f06c",
      "READ",
      [
        "storage",
        "011297a8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f080",
      "WRITE",
      [
        "storage",
        "011297a8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e108 ["INT_ADD", "register:40f0:8", ["const:c2e108:8", "const:4:8"]]
- 00c2e108 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2f0fc ["INT_ADD", "register:40f0:8", ["const:c2f0fc:8", "const:4:8"]]
+ 00c2f0fc ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2e124 ["INT_ADD", "register:40f0:8", ["const:c2e124:8", "const:4:8"]]
- 00c2e124 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00c2f118 ["INT_ADD", "register:40f0:8", ["const:c2f118:8", "const:4:8"]]
+ 00c2f118 ["CALL", null, ["callee:00c58ed0:8"]]
- 00c2e130 ["INT_ADD", "register:40f0:8", ["const:c2e130:8", "const:4:8"]]
- 00c2e130 ["CALL", null, ["callee:00c58f10:8"]]
+ 00c2f124 ["INT_ADD", "register:40f0:8", ["const:c2f124:8", "const:4:8"]]
+ 00c2f124 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-c4a12bd18aae0d0e61c5e02183ae5e88"></a>

### [`00c2e138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e138.md) → [`00c2f12c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f12c.md) _ZNKSt6__ndk120__time_get_c_storageIwE7__am_pmEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c2e1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e1a4.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2f198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f198.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c2f188",
      "incomplete_value": false,
      "site": "00c2f188",
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
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e194",
      "incomplete_value": false,
      "site": "00c2e194",
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
            "const:ff8:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2f178",
      "incomplete_value": false,
      "site": "00c2f188",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:7e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e184",
      "incomplete_value": false,
      "site": "00c2e194",
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
            "const:820:8"
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
      "definition_site": "00c2f160",
      "incomplete_value": false,
      "site": "00c2f164",
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
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e16c",
      "incomplete_value": false,
      "site": "00c2e170",
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
            "const:0:8"
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
      "00c2f140",
      "READ",
      [
        "storage",
        "01128000",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f14c",
      "READ",
      [
        "storage",
        "01127ff8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2f14c",
      "DATA",
      [
        "storage",
        "01128820",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2f140",
      "READ",
      [
        "storage",
        "01128fc0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f14c",
      "READ",
      [
        "storage",
        "01128fb8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2f14c",
      "DATA",
      [
        "storage",
        "011297e0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e170 ["INT_ADD", "register:40f0:8", ["const:c2e170:8", "const:4:8"]]
- 00c2e170 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2f164 ["INT_ADD", "register:40f0:8", ["const:c2f164:8", "const:4:8"]]
+ 00c2f164 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2e194 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ff8:8"]]
- 00c2e194 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00c2f188 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fb8:8"]]
+ 00c2f188 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00c2e198 ["INT_ADD", "register:40f0:8", ["const:c2e198:8", "const:4:8"]]
- 00c2e198 ["CALL", null, ["callee:00c58f10:8"]]
+ 00c2f18c ["INT_ADD", "register:40f0:8", ["const:c2f18c:8", "const:4:8"]]
+ 00c2f18c ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-fca6708c5d07dc1d4dc5982b177662bb"></a>

### [`00c2e1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e1a4.md) → [`00c2f198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f198.md) FUN_00c2f198

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c2e138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e138.md) · 呼出先 4件 [`00c36008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36008.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c2f12c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f12c.md) · 呼出先 4件 [`00c36ffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ffc.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 71.93% / 新版 71.93%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c2f1cc",
      "incomplete_value": true,
      "site": "00c2f1cc",
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
            "const:7e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e1d8",
      "incomplete_value": true,
      "site": "00c2e1d8",
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
            "const:820:8"
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
      "definition_site": "00c2f1e4",
      "incomplete_value": false,
      "site": "00c2f1e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e1f0",
      "incomplete_value": false,
      "site": "00c2e1f0",
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
            "const:828:8"
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
      "definition_site": "00c2f210",
      "incomplete_value": false,
      "site": "00c2f210",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:7f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e21c",
      "incomplete_value": false,
      "site": "00c2e21c",
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
            "const:838:8"
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
      "00c2f1ac",
      "READ",
      [
        "storage",
        "01128850",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f1b8",
      "READ",
      [
        "storage",
        "01128820",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f1cc",
      "WRITE",
      [
        "storage",
        "01128820",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2f1ac",
      "READ",
      [
        "storage",
        "01129810",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f1b8",
      "READ",
      [
        "storage",
        "011297e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f1cc",
      "WRITE",
      [
        "storage",
        "011297e0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e258 ["INT_ADD", "register:40f0:8", ["const:c2e258:8", "const:4:8"]]
- 00c2e258 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2f24c ["INT_ADD", "register:40f0:8", ["const:c2f24c:8", "const:4:8"]]
+ 00c2f24c ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2e274 ["INT_ADD", "register:40f0:8", ["const:c2e274:8", "const:4:8"]]
- 00c2e274 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00c2f268 ["INT_ADD", "register:40f0:8", ["const:c2f268:8", "const:4:8"]]
+ 00c2f268 ["CALL", null, ["callee:00c58ed0:8"]]
- 00c2e280 ["INT_ADD", "register:40f0:8", ["const:c2e280:8", "const:4:8"]]
- 00c2e280 ["CALL", null, ["callee:00c58f10:8"]]
+ 00c2f274 ["INT_ADD", "register:40f0:8", ["const:c2f274:8", "const:4:8"]]
+ 00c2f274 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-c874936e0975c14c40ba840bc8889b3a"></a>

### [`00c2e288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e288.md) → [`00c2f27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f27c.md) _ZNKSt6__ndk120__time_get_c_storageIcE3__xEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 81.48% / 新版 81.48%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 2件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2f2b0",
      "incomplete_value": false,
      "site": "00c2f2b4",
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
            "const:fc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e2bc",
      "incomplete_value": false,
      "site": "00c2e2c0",
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
            "const:8:8"
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
      "definition_site": "00c2f2c8",
      "incomplete_value": true,
      "site": "00c2f2d4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c2e2d4",
      "incomplete_value": true,
      "site": "00c2e2e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
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
      "definition_site": "00c2f2c4",
      "incomplete_value": false,
      "site": "00c2f2d4",
      "value": [
        "leaf",
        "const:ca58b0:8"
      ]
    },
    "old": {
      "definition_site": "00c2e2d0",
      "incomplete_value": false,
      "site": "00c2e2e0",
      "value": [
        "leaf",
        "const:ca48e0:8"
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
      "00c2f290",
      "READ",
      [
        "storage",
        "01128008",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f29c",
      "DATA",
      [
        "storage",
        "00ca48e0",
        null,
        null
      ]
    ],
    [
      "00c2f2b0",
      "PARAM",
      [
        "storage",
        "01128008",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2f290",
      "READ",
      [
        "storage",
        "01128fc8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f29c",
      "DATA",
      [
        "storage",
        "00ca58b0",
        null,
        null
      ]
    ],
    [
      "00c2f2b0",
      "PARAM",
      [
        "storage",
        "01128fc8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e2c0 ["INT_ADD", "register:40f0:8", ["const:c2e2c0:8", "const:4:8"]]
- 00c2e2c0 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2f2b4 ["INT_ADD", "register:40f0:8", ["const:c2f2b4:8", "const:4:8"]]
+ 00c2f2b4 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2e2e0 ["INT_ADD", "register:40f0:8", ["const:c2e2e0:8", "const:4:8"]]
- 00c2e2e0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00c2f2d4 ["INT_ADD", "register:40f0:8", ["const:c2f2d4:8", "const:4:8"]]
+ 00c2f2d4 ["CALL", null, ["callee:00c58ed0:8"]]
- 00c2e2ec ["INT_ADD", "register:40f0:8", ["const:c2e2ec:8", "const:4:8"]]
- 00c2e2ec ["CALL", null, ["callee:00c58f10:8"]]
+ 00c2f2e0 ["INT_ADD", "register:40f0:8", ["const:c2f2e0:8", "const:4:8"]]
+ 00c2f2e0 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-936347d39775b8ae6b013adb1d902ba5"></a>

### [`00c2e2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e2f4.md) → [`00c2f2e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f2e8.md) _ZNKSt6__ndk120__time_get_c_storageIwE3__xEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00bf2dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2dc4.md) [`00c2c130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c130.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00bf3db8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3db8.md) [`00c2d124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d124.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 67.65% / 新版 67.65%

優先判定に残った影響 `call_argument_candidate` 6件, `return_value_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2f324",
      "incomplete_value": false,
      "site": "00c2f328",
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
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e330",
      "incomplete_value": false,
      "site": "00c2e334",
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
            "const:28:8"
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
      "definition_site": "00c2f334",
      "incomplete_value": false,
      "site": "00c2f340",
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
            "const:fd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e340",
      "incomplete_value": false,
      "site": "00c2e34c",
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
            "const:10:8"
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
      "definition_site": "00c2f33c",
      "incomplete_value": false,
      "site": "00c2f340",
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
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e348",
      "incomplete_value": false,
      "site": "00c2e34c",
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
            "const:7a8:8"
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
      "00c2f300",
      "READ",
      [
        "storage",
        "01128028",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f30c",
      "DATA",
      [
        "storage",
        "01128010",
        null,
        null
      ]
    ],
    [
      "00c2f324",
      "PARAM",
      [
        "storage",
        "01128028",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2f300",
      "READ",
      [
        "storage",
        "01128fe8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f30c",
      "DATA",
      [
        "storage",
        "01128fd0",
        null,
        null
      ]
    ],
    [
      "00c2f324",
      "PARAM",
      [
        "storage",
        "01128fe8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e334 ["INT_ADD", "register:40f0:8", ["const:c2e334:8", "const:4:8"]]
- 00c2e334 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2f328 ["INT_ADD", "register:40f0:8", ["const:c2f328:8", "const:4:8"]]
+ 00c2f328 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2e34c ["INT_ADD", "register:40f0:8", ["const:c2e34c:8", "const:4:8"]]
- 00c2e34c ["CALL", null, ["callee:00c2d124:8"]]
+ 00c2f340 ["INT_ADD", "register:40f0:8", ["const:c2f340:8", "const:4:8"]]
+ 00c2f340 ["CALL", null, ["callee:00c2d124:8"]]
- 00c2e368 ["INT_ADD", "register:40f0:8", ["const:c2e368:8", "const:4:8"]]
- 00c2e368 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00c2f35c ["INT_ADD", "register:40f0:8", ["const:c2f35c:8", "const:4:8"]]
+ 00c2f35c ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-a5c63f9aa3f9ad29e20129408eb55a78"></a>

### [`00c2e394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e394.md) → [`00c2f388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f388.md) _ZNKSt6__ndk120__time_get_c_storageIcE3__XEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 81.48% / 新版 81.48%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 2件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2f3bc",
      "incomplete_value": false,
      "site": "00c2f3c0",
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
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e3c8",
      "incomplete_value": false,
      "site": "00c2e3cc",
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
            "const:30:8"
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
      "definition_site": "00c2f3d4",
      "incomplete_value": true,
      "site": "00c2f3e0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c2e3e0",
      "incomplete_value": true,
      "site": "00c2e3ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
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
      "definition_site": "00c2f3d0",
      "incomplete_value": false,
      "site": "00c2f3e0",
      "value": [
        "leaf",
        "const:ca58c8:8"
      ]
    },
    "old": {
      "definition_site": "00c2e3dc",
      "incomplete_value": false,
      "site": "00c2e3ec",
      "value": [
        "leaf",
        "const:ca48f8:8"
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
      "00c2f39c",
      "READ",
      [
        "storage",
        "01128030",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f3a8",
      "DATA",
      [
        "storage",
        "00ca48f8",
        null,
        null
      ]
    ],
    [
      "00c2f3bc",
      "PARAM",
      [
        "storage",
        "01128030",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2f39c",
      "READ",
      [
        "storage",
        "01128ff0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f3a8",
      "DATA",
      [
        "storage",
        "00ca58c8",
        null,
        null
      ]
    ],
    [
      "00c2f3bc",
      "PARAM",
      [
        "storage",
        "01128ff0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e3cc ["INT_ADD", "register:40f0:8", ["const:c2e3cc:8", "const:4:8"]]
- 00c2e3cc ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2f3c0 ["INT_ADD", "register:40f0:8", ["const:c2f3c0:8", "const:4:8"]]
+ 00c2f3c0 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2e3ec ["INT_ADD", "register:40f0:8", ["const:c2e3ec:8", "const:4:8"]]
- 00c2e3ec ["CALL", null, ["callee:00c58ed0:8"]]
+ 00c2f3e0 ["INT_ADD", "register:40f0:8", ["const:c2f3e0:8", "const:4:8"]]
+ 00c2f3e0 ["CALL", null, ["callee:00c58ed0:8"]]
- 00c2e3f8 ["INT_ADD", "register:40f0:8", ["const:c2e3f8:8", "const:4:8"]]
- 00c2e3f8 ["CALL", null, ["callee:00c58f10:8"]]
+ 00c2f3ec ["INT_ADD", "register:40f0:8", ["const:c2f3ec:8", "const:4:8"]]
+ 00c2f3ec ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-253bec4e0e07d874248863accb110f6d"></a>

### [`00c2e400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e400.md) → [`00c2f3f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f3f4.md) _ZNKSt6__ndk120__time_get_c_storageIwE3__XEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00bf2dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2dc4.md) [`00c2c130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c130.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00bf3db8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3db8.md) [`00c2d124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d124.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 67.65% / 新版 67.65%

優先判定に残った影響 `call_argument_candidate` 6件, `return_value_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2f430",
      "incomplete_value": false,
      "site": "00c2f434",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e43c",
      "incomplete_value": false,
      "site": "00c2e440",
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
            "const:50:8"
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
      "definition_site": "00c2f440",
      "incomplete_value": false,
      "site": "00c2f44c",
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
            "const:ff8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e44c",
      "incomplete_value": false,
      "site": "00c2e458",
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
            "const:38:8"
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
      "definition_site": "00c2f448",
      "incomplete_value": false,
      "site": "00c2f44c",
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
            "const:658:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e454",
      "incomplete_value": false,
      "site": "00c2e458",
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
            "const:618:8"
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
      "00c2f40c",
      "READ",
      [
        "storage",
        "01128050",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f418",
      "DATA",
      [
        "storage",
        "01128038",
        null,
        null
      ]
    ],
    [
      "00c2f430",
      "PARAM",
      [
        "storage",
        "01128050",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2f40c",
      "READ",
      [
        "storage",
        "01129010",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f418",
      "DATA",
      [
        "storage",
        "01128ff8",
        null,
        null
      ]
    ],
    [
      "00c2f430",
      "PARAM",
      [
        "storage",
        "01129010",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e440 ["INT_ADD", "register:40f0:8", ["const:c2e440:8", "const:4:8"]]
- 00c2e440 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2f434 ["INT_ADD", "register:40f0:8", ["const:c2f434:8", "const:4:8"]]
+ 00c2f434 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2e458 ["INT_ADD", "register:40f0:8", ["const:c2e458:8", "const:4:8"]]
- 00c2e458 ["CALL", null, ["callee:00c2d124:8"]]
+ 00c2f44c ["INT_ADD", "register:40f0:8", ["const:c2f44c:8", "const:4:8"]]
+ 00c2f44c ["CALL", null, ["callee:00c2d124:8"]]
- 00c2e474 ["INT_ADD", "register:40f0:8", ["const:c2e474:8", "const:4:8"]]
- 00c2e474 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00c2f468 ["INT_ADD", "register:40f0:8", ["const:c2f468:8", "const:4:8"]]
+ 00c2f468 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-924c8ea126a63972bd73a34e599c0a58"></a>

### [`00c2e4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e4a0.md) → [`00c2f494`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f494.md) _ZNKSt6__ndk120__time_get_c_storageIcE3__cEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 81.48% / 新版 81.48%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 2件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2f4c8",
      "incomplete_value": false,
      "site": "00c2f4cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e4d4",
      "incomplete_value": false,
      "site": "00c2e4d8",
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
            "const:58:8"
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
      "definition_site": "00c2f4e0",
      "incomplete_value": true,
      "site": "00c2f4ec",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c2e4ec",
      "incomplete_value": true,
      "site": "00c2e4f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
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
      "definition_site": "00c2f4dc",
      "incomplete_value": false,
      "site": "00c2f4ec",
      "value": [
        "leaf",
        "const:ca58e0:8"
      ]
    },
    "old": {
      "definition_site": "00c2e4e8",
      "incomplete_value": false,
      "site": "00c2e4f8",
      "value": [
        "leaf",
        "const:ca4910:8"
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
      "00c2f4a8",
      "READ",
      [
        "storage",
        "01128058",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f4b4",
      "DATA",
      [
        "storage",
        "00ca4910",
        null,
        "string"
      ]
    ],
    [
      "00c2f4c8",
      "PARAM",
      [
        "storage",
        "01128058",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2f4a8",
      "READ",
      [
        "storage",
        "01129018",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f4b4",
      "DATA",
      [
        "storage",
        "00ca58e0",
        null,
        "string"
      ]
    ],
    [
      "00c2f4c8",
      "PARAM",
      [
        "storage",
        "01129018",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e4d8 ["INT_ADD", "register:40f0:8", ["const:c2e4d8:8", "const:4:8"]]
- 00c2e4d8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2f4cc ["INT_ADD", "register:40f0:8", ["const:c2f4cc:8", "const:4:8"]]
+ 00c2f4cc ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2e4f8 ["INT_ADD", "register:40f0:8", ["const:c2e4f8:8", "const:4:8"]]
- 00c2e4f8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00c2f4ec ["INT_ADD", "register:40f0:8", ["const:c2f4ec:8", "const:4:8"]]
+ 00c2f4ec ["CALL", null, ["callee:00c58ed0:8"]]
- 00c2e4ac ["COPY", "register:4040:8", ["const:1128000:8"]]
+ 00c2f4a0 ["COPY", "register:4040:8", ["const:1129000:8"]]
~~~


<a id="compare-20327e9f15f3530e31e3e52b0431e1d5"></a>

### [`00c2e50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e50c.md) → [`00c2f500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f500.md) _ZNKSt6__ndk120__time_get_c_storageIwE3__cEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00bf2dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2dc4.md) [`00c2c130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c130.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00bf3db8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3db8.md) [`00c2d124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d124.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 67.65% / 新版 67.65%

優先判定に残った影響 `call_argument_candidate` 6件, `return_value_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2f53c",
      "incomplete_value": false,
      "site": "00c2f540",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e548",
      "incomplete_value": false,
      "site": "00c2e54c",
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
            "const:78:8"
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
      "definition_site": "00c2f54c",
      "incomplete_value": false,
      "site": "00c2f558",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e558",
      "incomplete_value": false,
      "site": "00c2e564",
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
            "const:60:8"
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
      "definition_site": "00c2f554",
      "incomplete_value": false,
      "site": "00c2f558",
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
            "const:6d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e560",
      "incomplete_value": false,
      "site": "00c2e564",
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
            "const:698:8"
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
      "00c2f518",
      "READ",
      [
        "storage",
        "01128078",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f524",
      "DATA",
      [
        "storage",
        "01128060",
        null,
        null
      ]
    ],
    [
      "00c2f53c",
      "PARAM",
      [
        "storage",
        "01128078",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2f518",
      "READ",
      [
        "storage",
        "01129038",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f524",
      "DATA",
      [
        "storage",
        "01129020",
        null,
        null
      ]
    ],
    [
      "00c2f53c",
      "PARAM",
      [
        "storage",
        "01129038",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e54c ["INT_ADD", "register:40f0:8", ["const:c2e54c:8", "const:4:8"]]
- 00c2e54c ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2f540 ["INT_ADD", "register:40f0:8", ["const:c2f540:8", "const:4:8"]]
+ 00c2f540 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2e564 ["INT_ADD", "register:40f0:8", ["const:c2e564:8", "const:4:8"]]
- 00c2e564 ["CALL", null, ["callee:00c2d124:8"]]
+ 00c2f558 ["INT_ADD", "register:40f0:8", ["const:c2f558:8", "const:4:8"]]
+ 00c2f558 ["CALL", null, ["callee:00c2d124:8"]]
- 00c2e580 ["INT_ADD", "register:40f0:8", ["const:c2e580:8", "const:4:8"]]
- 00c2e580 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00c2f574 ["INT_ADD", "register:40f0:8", ["const:c2f574:8", "const:4:8"]]
+ 00c2f574 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-271acb7774ecbc5b93d4a01b0f9e5f3e"></a>

### [`00c2e5ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e5ac.md) → [`00c2f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f5a0.md) _ZNKSt6__ndk120__time_get_c_storageIcE3__rEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 81.48% / 新版 81.48%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 2件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2f5d4",
      "incomplete_value": false,
      "site": "00c2f5d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e5e0",
      "incomplete_value": false,
      "site": "00c2e5e4",
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
            "const:80:8"
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
      "definition_site": "00c2f5ec",
      "incomplete_value": true,
      "site": "00c2f5f8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c2e5f8",
      "incomplete_value": true,
      "site": "00c2e604",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
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
      "definition_site": "00c2f5e8",
      "incomplete_value": false,
      "site": "00c2f5f8",
      "value": [
        "leaf",
        "const:ca58f8:8"
      ]
    },
    "old": {
      "definition_site": "00c2e5f4",
      "incomplete_value": false,
      "site": "00c2e604",
      "value": [
        "leaf",
        "const:ca4928:8"
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
      "00c2f5b4",
      "READ",
      [
        "storage",
        "01128080",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f5c0",
      "DATA",
      [
        "storage",
        "00ca4928",
        null,
        null
      ]
    ],
    [
      "00c2f5d4",
      "PARAM",
      [
        "storage",
        "01128080",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2f5b4",
      "READ",
      [
        "storage",
        "01129040",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f5c0",
      "DATA",
      [
        "storage",
        "00ca58f8",
        null,
        null
      ]
    ],
    [
      "00c2f5d4",
      "PARAM",
      [
        "storage",
        "01129040",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e5e4 ["INT_ADD", "register:40f0:8", ["const:c2e5e4:8", "const:4:8"]]
- 00c2e5e4 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2f5d8 ["INT_ADD", "register:40f0:8", ["const:c2f5d8:8", "const:4:8"]]
+ 00c2f5d8 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2e604 ["INT_ADD", "register:40f0:8", ["const:c2e604:8", "const:4:8"]]
- 00c2e604 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00c2f5f8 ["INT_ADD", "register:40f0:8", ["const:c2f5f8:8", "const:4:8"]]
+ 00c2f5f8 ["CALL", null, ["callee:00c58ed0:8"]]
- 00c2e610 ["INT_ADD", "register:40f0:8", ["const:c2e610:8", "const:4:8"]]
- 00c2e610 ["CALL", null, ["callee:00c58f10:8"]]
+ 00c2f604 ["INT_ADD", "register:40f0:8", ["const:c2f604:8", "const:4:8"]]
+ 00c2f604 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-539a8382ac27eb47cf858dc2a1eedb1a"></a>

### [`00c2e618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e618.md) → [`00c2f60c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f60c.md) _ZNKSt6__ndk120__time_get_c_storageIwE3__rEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00bf2dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2dc4.md) [`00c2c130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c130.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00bf3db8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3db8.md) [`00c2d124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d124.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 67.65% / 新版 67.65%

優先判定に残った影響 `call_argument_candidate` 6件, `return_value_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2f648",
      "incomplete_value": false,
      "site": "00c2f64c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e654",
      "incomplete_value": false,
      "site": "00c2e658",
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
            "const:a0:8"
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
      "definition_site": "00c2f658",
      "incomplete_value": false,
      "site": "00c2f664",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1129000:8"
          ],
          [
            "leaf",
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e664",
      "incomplete_value": false,
      "site": "00c2e670",
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
            "const:88:8"
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
      "definition_site": "00c2f660",
      "incomplete_value": false,
      "site": "00c2f664",
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
            "const:580:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e66c",
      "incomplete_value": false,
      "site": "00c2e670",
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
            "const:540:8"
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
      "00c2f624",
      "READ",
      [
        "storage",
        "011280a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f630",
      "DATA",
      [
        "storage",
        "01128088",
        null,
        null
      ]
    ],
    [
      "00c2f648",
      "PARAM",
      [
        "storage",
        "011280a0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2f624",
      "READ",
      [
        "storage",
        "01129060",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2f630",
      "DATA",
      [
        "storage",
        "01129048",
        null,
        null
      ]
    ],
    [
      "00c2f648",
      "PARAM",
      [
        "storage",
        "01129060",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e658 ["INT_ADD", "register:40f0:8", ["const:c2e658:8", "const:4:8"]]
- 00c2e658 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c2f64c ["INT_ADD", "register:40f0:8", ["const:c2f64c:8", "const:4:8"]]
+ 00c2f64c ["CALL", null, ["callee:00c58ef0:8"]]
- 00c2e670 ["INT_ADD", "register:40f0:8", ["const:c2e670:8", "const:4:8"]]
- 00c2e670 ["CALL", null, ["callee:00c2d124:8"]]
+ 00c2f664 ["INT_ADD", "register:40f0:8", ["const:c2f664:8", "const:4:8"]]
+ 00c2f664 ["CALL", null, ["callee:00c2d124:8"]]
- 00c2e68c ["INT_ADD", "register:40f0:8", ["const:c2e68c:8", "const:4:8"]]
- 00c2e68c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00c2f680 ["INT_ADD", "register:40f0:8", ["const:c2f680:8", "const:4:8"]]
+ 00c2f680 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-59f3e6f4e9f19da41622cc3af4c77a31"></a>

### [`00c2e6b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e6b8.md) → [`00c2f6ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f6ac.md) _ZNSt6__ndk110__time_getC1EPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ed70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed70.md) · 呼出先 6件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 1件 [`00c5fd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fd40.md) · 呼出先 6件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00c269c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c269c4.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.87% / 新版 97.87%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2f700",
      "incomplete_value": false,
      "site": "00c2f710",
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
            "const:e1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e70c",
      "incomplete_value": false,
      "site": "00c2e71c",
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
            "const:12:8"
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
      "00c2f700",
      "PARAM",
      [
        "storage",
        "002b7012",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c2f700",
      "PARAM",
      [
        "storage",
        "002b70e1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e71c ["INT_ADD", "register:40f0:8", ["const:c2e71c:8", "const:4:8"]]
- 00c2e71c ["CALL", null, ["callee:00c269c4:8"]]
+ 00c2f710 ["INT_ADD", "register:40f0:8", ["const:c2f710:8", "const:4:8"]]
+ 00c2f710 ["CALL", null, ["callee:00c269c4:8"]]
- 00c2e6dc ["INT_ADD", "register:40f0:8", ["const:c2e6dc:8", "const:4:8"]]
- 00c2e6dc ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c2f6d0 ["INT_ADD", "register:40f0:8", ["const:c2f6d0:8", "const:4:8"]]
+ 00c2f6d0 ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c2e704 ["INT_ADD", "register:40f0:8", ["const:c2e704:8", "const:4:8"]]
- 00c2e704 ["CALL", null, ["callee:0043e138:8"]]
+ 00c2f6f8 ["INT_ADD", "register:40f0:8", ["const:c2f6f8:8", "const:4:8"]]
+ 00c2f6f8 ["CALL", null, ["callee:0043e138:8"]]
~~~


<a id="compare-6672aa2f6cdf0051b4773efbd8f3917b"></a>

### [`00c2e780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e780.md) → [`00c2f774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f774.md) _ZNSt6__ndk110__time_getC2ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ed80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed80.md) · 呼出先 5件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)
- 新版 呼出元 1件 [`00c5fd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fd50.md) · 呼出先 5件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59150.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md) [`00c5f050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.44% / 新版 97.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c2f7cc",
      "incomplete_value": false,
      "site": "00c2f7dc",
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
            "const:e1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e7d8",
      "incomplete_value": false,
      "site": "00c2e7e8",
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
            "const:12:8"
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
      "00c2f7cc",
      "PARAM",
      [
        "storage",
        "002b7012",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c2f7cc",
      "PARAM",
      [
        "storage",
        "002b70e1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e7e8 ["INT_ADD", "register:40f0:8", ["const:c2e7e8:8", "const:4:8"]]
- 00c2e7e8 ["CALL", null, ["callee:00c59150:8"]]
+ 00c2f7dc ["INT_ADD", "register:40f0:8", ["const:c2f7dc:8", "const:4:8"]]
+ 00c2f7dc ["CALL", null, ["callee:00c59150:8"]]
- 00c2e7b4 ["INT_ADD", "register:40f0:8", ["const:c2e7b4:8", "const:4:8"]]
- 00c2e7b4 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c2f7a8 ["INT_ADD", "register:40f0:8", ["const:c2f7a8:8", "const:4:8"]]
+ 00c2f7a8 ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c2e7d8 ["COPY", "tmp:0:8", ["const:12:8"]]
- 00c2e7d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c2e7d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c2e7d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c2f7cc ["COPY", "tmp:0:8", ["const:e1:8"]]
+ 00c2f7cc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c2f7cc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c2f7cc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-cc5fb53667d1f565c4ddf873529d235a"></a>

### [`00c2e840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e840.md) → [`00c2f834`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f834.md) _ZNSt6__ndk118__time_get_storageIcE9__analyzeEcRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5eda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eda0.md) · 呼出先 3件 [`00c2ee28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2ee28.md) [`00c586d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586d0.md) [`00c5e730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e730.md)
- 新版 呼出元 1件 [`00c5fd70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fd70.md) · 呼出先 3件 [`00c2fe1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2fe1c.md) [`00c596a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596a0.md) [`00c5f700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f700.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.91% / 新版 98.91%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c2f864",
      "incomplete_value": true,
      "site": "00c2f87c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:760:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e870",
      "incomplete_value": true,
      "site": "00c2e888",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:710:8"
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
      "definition_site": "00c2f880",
      "incomplete_value": true,
      "site": "00c2f894",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2e88c",
      "incomplete_value": true,
      "site": "00c2e8a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00c2f864",
      "READ",
      [
        "storage",
        "002c2710",
        null,
        null
      ]
    ],
    [
      "00c2f880",
      "READ",
      [
        "storage",
        "002c2c20",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c2f864",
      "READ",
      [
        "storage",
        "002c2760",
        null,
        null
      ]
    ],
    [
      "00c2f880",
      "READ",
      [
        "storage",
        "002c2c70",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e870 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:710:8"]]
- 00c2e870 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00c2e870 ["COPY", "register:5010:8", ["const:0:8"]]
- 00c2e870 ["COPY", "register:5018:8", ["const:0:8"]]
+ 00c2f864 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:760:8"]]
+ 00c2f864 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00c2f864 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2f864 ["COPY", "register:5018:8", ["const:0:8"]]
- 00c2e88c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c20:8"]]
- 00c2e88c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00c2e88c ["COPY", "register:5010:8", ["const:0:8"]]
- 00c2e88c ["COPY", "register:5018:8", ["const:0:8"]]
+ 00c2f880 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c70:8"]]
+ 00c2f880 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00c2f880 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2f880 ["COPY", "register:5018:8", ["const:0:8"]]
- 00c2e8c8 ["INT_ADD", "register:40f0:8", ["const:c2e8c8:8", "const:4:8"]]
- 00c2e8c8 ["CALL", null, ["callee:00c5f700:8"]]
+ 00c2f8bc ["INT_ADD", "register:40f0:8", ["const:c2f8bc:8", "const:4:8"]]
+ 00c2f8bc ["CALL", null, ["callee:00c5f700:8"]]
~~~


<a id="compare-9e909e399e0b710b80424a41140437d3"></a>

### [`00c2f138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2f/00c2f138.md) → [`00c3012c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c30/00c3012c.md) _ZNSt6__ndk118__time_get_storageIwE9__analyzeEcRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5edb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5edb0.md) · 呼出先 8件 [`00c307e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c30/00c307e0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)
- 新版 呼出元 1件 [`00c5fd80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fd80.md) · 呼出先 8件 [`00c317d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c31/00c317d4.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5b940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b940.md) [`00c5f050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 99.65% / 新版 99.65%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3015c",
      "incomplete_value": true,
      "site": "00c301a4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:760:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2f168",
      "incomplete_value": true,
      "site": "00c2f1b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:710:8"
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
      "definition_site": "00c30168",
      "incomplete_value": true,
      "site": "00c301a4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c2f174",
      "incomplete_value": true,
      "site": "00c2f1b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c31780",
      "incomplete_value": false,
      "site": "00c31784",
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
      "definition_site": "00c3078c",
      "incomplete_value": false,
      "site": "00c30790",
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
    "ordinal": 55,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c3015c",
      "READ",
      [
        "storage",
        "002c2710",
        null,
        null
      ]
    ],
    [
      "00c30168",
      "READ",
      [
        "storage",
        "002c2c20",
        null,
        null
      ]
    ],
    [
      "00c31780",
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
      "00c3015c",
      "READ",
      [
        "storage",
        "002c2760",
        null,
        null
      ]
    ],
    [
      "00c30168",
      "READ",
      [
        "storage",
        "002c2c70",
        null,
        null
      ]
    ],
    [
      "00c31780",
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
- 00c30790 ["INT_ADD", "register:40f0:8", ["const:c30790:8", "const:4:8"]]
- 00c30790 ["CALL", null, ["callee:00c5f050:8"]]
+ 00c31784 ["INT_ADD", "register:40f0:8", ["const:c31784:8", "const:4:8"]]
+ 00c31784 ["CALL", null, ["callee:00c5f050:8"]]
- 00c2f168 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:710:8"]]
- 00c2f168 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00c2f168 ["COPY", "register:5010:8", ["const:0:8"]]
- 00c2f168 ["COPY", "register:5018:8", ["const:0:8"]]
+ 00c3015c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:760:8"]]
+ 00c3015c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00c3015c ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c3015c ["COPY", "register:5018:8", ["const:0:8"]]
- 00c2f16c ["COPY", "register:4040:8", ["const:2c2000:8"]]
~~~


<a id="compare-381d96cc0be61f7238886b012472dd96"></a>

### [`00c30d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c30/00c30d84.md) → [`00c31d78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c31/00c31d78.md) _ZNSt6__ndk118__time_get_storageIwE4initERKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5edd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5edd0.md) · 呼出先 8件 [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md) [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md)
- 新版 呼出元 1件 [`00c5fda0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fda0.md) · 呼出先 8件 [`00440f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440f9c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5b940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b940.md) [`00c5f050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f050.md) [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.93% / 新版 98.93%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c31e00",
      "incomplete_value": false,
      "site": "00c31e08",
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
            "const:87c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c30e0c",
      "incomplete_value": false,
      "site": "00c30e14",
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
            "const:832:8"
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
      "definition_site": "00c31f60",
      "incomplete_value": false,
      "site": "00c31f64",
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
            "const:58e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c30f6c",
      "incomplete_value": false,
      "site": "00c30f70",
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
            "const:4c1:8"
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
      "definition_site": "00c32248",
      "incomplete_value": false,
      "site": "00c3224c",
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
            "const:e98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c31254",
      "incomplete_value": false,
      "site": "00c31258",
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
            "const:dcd:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c31e00",
      "PARAM",
      [
        "storage",
        "002b2832",
        null,
        null
      ]
    ],
    [
      "00c31f60",
      "PARAM",
      [
        "storage",
        "002ac4c1",
        null,
        null
      ]
    ],
    [
      "00c320e8",
      "PARAM",
      [
        "storage",
        "002af6eb",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c31e00",
      "PARAM",
      [
        "storage",
        "002b287c",
        null,
        null
      ]
    ],
    [
      "00c31f60",
      "PARAM",
      [
        "storage",
        "002ac58e",
        null,
        null
      ]
    ],
    [
      "00c320e8",
      "PARAM",
      [
        "storage",
        "002af7c2",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c30e14 ["INT_ADD", "register:40f0:8", ["const:c30e14:8", "const:4:8"]]
- 00c30e14 ["CALL", null, ["callee:00c5f700:8"]]
+ 00c31e08 ["INT_ADD", "register:40f0:8", ["const:c31e08:8", "const:4:8"]]
+ 00c31e08 ["CALL", null, ["callee:00c5f700:8"]]
- 00c30f70 ["INT_ADD", "register:40f0:8", ["const:c30f70:8", "const:4:8"]]
- 00c30f70 ["CALL", null, ["callee:00c5f700:8"]]
+ 00c31f64 ["INT_ADD", "register:40f0:8", ["const:c31f64:8", "const:4:8"]]
+ 00c31f64 ["CALL", null, ["callee:00c5f700:8"]]
- 00c31258 ["INT_ADD", "register:40f0:8", ["const:c31258:8", "const:4:8"]]
- 00c31258 ["CALL", null, ["callee:00c5f700:8"]]
+ 00c3224c ["INT_ADD", "register:40f0:8", ["const:c3224c:8", "const:4:8"]]
+ 00c3224c ["CALL", null, ["callee:00c5f700:8"]]
~~~


<a id="compare-a0a166e000bc5f24ff7927d7c482df01"></a>

### [`00c317fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c31/00c317fc.md) → [`00c327f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c32/00c327f0.md) _ZNSt6__ndk118__time_get_storageIcEC1EPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5ea90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea90.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md) [`00c5cee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cee0.md) [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md) [`00c5fa60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c32838",
      "incomplete_value": false,
      "site": "00c3283c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c96000:8"
          ],
          [
            "leaf",
            "const:d40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c31844",
      "incomplete_value": false,
      "site": "00c31848",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c95000:8"
          ],
          [
            "leaf",
            "const:d70:8"
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
      "definition_site": "00c32858",
      "incomplete_value": true,
      "site": "00c3285c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c31864",
      "incomplete_value": true,
      "site": "00c31868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c32870",
      "incomplete_value": true,
      "site": "00c32874",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c3187c",
      "incomplete_value": true,
      "site": "00c31880",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c3283c",
      "DATA",
      [
        "storage",
        "00c95d70",
        null,
        "undefined *"
      ]
    ],
    [
      "00c32850",
      "READ",
      [
        "storage",
        "00c9bea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c3285c",
      "DATA",
      [
        "storage",
        "00c938a0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c3283c",
      "DATA",
      [
        "storage",
        "00c96d40",
        null,
        "undefined *"
      ]
    ],
    [
      "00c32850",
      "READ",
      [
        "storage",
        "00c9ce70",
        null,
        "pointer"
      ]
    ],
    [
      "00c3285c",
      "DATA",
      [
        "storage",
        "00c94870",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3181c ["INT_ADD", "register:40f0:8", ["const:c3181c:8", "const:4:8"]]
- 00c3181c ["CALL", null, ["callee:00c5fd40:8"]]
+ 00c32810 ["INT_ADD", "register:40f0:8", ["const:c32810:8", "const:4:8"]]
+ 00c32810 ["CALL", null, ["callee:00c5fd40:8"]]
- 00c3182c ["INT_ADD", "register:40f0:8", ["const:c3182c:8", "const:4:8"]]
- 00c3182c ["CALL", null, ["callee:00c59130:8"]]
+ 00c32820 ["INT_ADD", "register:40f0:8", ["const:c32820:8", "const:4:8"]]
+ 00c32820 ["CALL", null, ["callee:00c59130:8"]]
- 00c3183c ["INT_ADD", "register:40f0:8", ["const:c3183c:8", "const:4:8"]]
- 00c3183c ["CALL", null, ["callee:00c5fa60:8"]]
+ 00c32830 ["INT_ADD", "register:40f0:8", ["const:c32830:8", "const:4:8"]]
+ 00c32830 ["CALL", null, ["callee:00c5fa60:8"]]
~~~


<a id="compare-c5a7de3b9f39563808ba16c7e3400c4f"></a>

### [`00c31adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c31/00c31adc.md) → [`00c32ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c32/00c32ad0.md) _ZNSt6__ndk112ctype_bynameIcED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5eab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eab0.md) [`00c5ede0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ede0.md) · 呼出先 3件 [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md)
- 新版 呼出元 2件 [`00c5fa80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa80.md) [`00c5fdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fdb0.md) · 呼出先 3件 [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md) [`00c5cee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cee0.md) [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c32af0",
      "incomplete_value": true,
      "site": "00c32af4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c31afc",
      "incomplete_value": true,
      "site": "00c31b00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c32b08",
      "incomplete_value": true,
      "site": "00c32b0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c31b14",
      "incomplete_value": true,
      "site": "00c31b18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c32ae8",
      "READ",
      [
        "storage",
        "00c9bea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c32af4",
      "DATA",
      [
        "storage",
        "00c938a0",
        null,
        "pointer"
      ]
    ],
    [
      "00c32b00",
      "READ",
      [
        "storage",
        "00c9be98",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c32ae8",
      "READ",
      [
        "storage",
        "00c9ce70",
        null,
        "pointer"
      ]
    ],
    [
      "00c32af4",
      "DATA",
      [
        "storage",
        "00c94870",
        null,
        "pointer"
      ]
    ],
    [
      "00c32b00",
      "READ",
      [
        "storage",
        "00c9ce68",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c31aec ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c32ae0 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c31af4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
- 00c31af4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c32ae8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e70:8"]]
+ 00c32ae8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c31b04 ["INT_ADD", "register:40f0:8", ["const:c31b04:8", "const:4:8"]]
- 00c31b04 ["CALL", null, ["callee:00c5e270:8"]]
+ 00c32af8 ["INT_ADD", "register:40f0:8", ["const:c32af8:8", "const:4:8"]]
+ 00c32af8 ["CALL", null, ["callee:00c5e270:8"]]
~~~


<a id="compare-7740e37b76bc533264e57ccdbb5d4777"></a>

### [`00c31b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c31/00c31b44.md) → [`00c32b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c32/00c32b38.md) _ZNSt6__ndk118__time_get_storageIcEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e960.md) · 呼出先 7件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5eaa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eaa0.md)
- 新版 呼出元 1件 [`00c5f930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f930.md) · 呼出先 7件 [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md) [`00c5cee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cee0.md) [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md) [`00c5fa70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c32b80",
      "incomplete_value": false,
      "site": "00c32b84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c96000:8"
          ],
          [
            "leaf",
            "const:d40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c31b8c",
      "incomplete_value": false,
      "site": "00c31b90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c95000:8"
          ],
          [
            "leaf",
            "const:d70:8"
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
      "definition_site": "00c32ba0",
      "incomplete_value": true,
      "site": "00c32ba4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c31bac",
      "incomplete_value": true,
      "site": "00c31bb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c32bb8",
      "incomplete_value": true,
      "site": "00c32bbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c31bc4",
      "incomplete_value": true,
      "site": "00c31bc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c32b84",
      "DATA",
      [
        "storage",
        "00c95d70",
        null,
        "undefined *"
      ]
    ],
    [
      "00c32b98",
      "READ",
      [
        "storage",
        "00c9bea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c32ba4",
      "DATA",
      [
        "storage",
        "00c938a0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c32b84",
      "DATA",
      [
        "storage",
        "00c96d40",
        null,
        "undefined *"
      ]
    ],
    [
      "00c32b98",
      "READ",
      [
        "storage",
        "00c9ce70",
        null,
        "pointer"
      ]
    ],
    [
      "00c32ba4",
      "DATA",
      [
        "storage",
        "00c94870",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c31b64 ["INT_ADD", "register:40f0:8", ["const:c31b64:8", "const:4:8"]]
- 00c31b64 ["CALL", null, ["callee:00c5fd50:8"]]
+ 00c32b58 ["INT_ADD", "register:40f0:8", ["const:c32b58:8", "const:4:8"]]
+ 00c32b58 ["CALL", null, ["callee:00c5fd50:8"]]
- 00c31b74 ["INT_ADD", "register:40f0:8", ["const:c31b74:8", "const:4:8"]]
- 00c31b74 ["CALL", null, ["callee:00c59130:8"]]
+ 00c32b68 ["INT_ADD", "register:40f0:8", ["const:c32b68:8", "const:4:8"]]
+ 00c32b68 ["CALL", null, ["callee:00c59130:8"]]
- 00c31b84 ["INT_ADD", "register:40f0:8", ["const:c31b84:8", "const:4:8"]]
- 00c31b84 ["CALL", null, ["callee:00c5fa70:8"]]
+ 00c32b78 ["INT_ADD", "register:40f0:8", ["const:c32b78:8", "const:4:8"]]
+ 00c32b78 ["CALL", null, ["callee:00c5fa70:8"]]
~~~


<a id="compare-0301b58ace8dcaee48462132709758e6"></a>

### [`00c31e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c31/00c31e24.md) → [`00c32e18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c32/00c32e18.md) _ZNSt6__ndk118__time_get_storageIwEC1EPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5eac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eac0.md) [`00c5ead0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ead0.md) [`00c5ed70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed70.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md) [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md) [`00c5fa90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa90.md) [`00c5faa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5faa0.md) [`00c5fd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fd40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c32e60",
      "incomplete_value": false,
      "site": "00c32e64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c96000:8"
          ],
          [
            "leaf",
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c31e6c",
      "incomplete_value": false,
      "site": "00c31e70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c95000:8"
          ],
          [
            "leaf",
            "const:df0:8"
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
      "definition_site": "00c32e80",
      "incomplete_value": true,
      "site": "00c32e84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c31e8c",
      "incomplete_value": true,
      "site": "00c31e90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c32e64",
      "DATA",
      [
        "storage",
        "00c95df0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c32e78",
      "READ",
      [
        "storage",
        "00c9bea8",
        null,
        "pointer"
      ]
    ],
    [
      "00c32e84",
      "DATA",
      [
        "storage",
        "00c93908",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c32e64",
      "DATA",
      [
        "storage",
        "00c96dc0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c32e78",
      "READ",
      [
        "storage",
        "00c9ce78",
        null,
        "pointer"
      ]
    ],
    [
      "00c32e84",
      "DATA",
      [
        "storage",
        "00c948d8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c31e44 ["INT_ADD", "register:40f0:8", ["const:c31e44:8", "const:4:8"]]
- 00c31e44 ["CALL", null, ["callee:00c5fd40:8"]]
+ 00c32e38 ["INT_ADD", "register:40f0:8", ["const:c32e38:8", "const:4:8"]]
+ 00c32e38 ["CALL", null, ["callee:00c5fd40:8"]]
- 00c31e54 ["INT_ADD", "register:40f0:8", ["const:c31e54:8", "const:4:8"]]
- 00c31e54 ["CALL", null, ["callee:00c59130:8"]]
+ 00c32e48 ["INT_ADD", "register:40f0:8", ["const:c32e48:8", "const:4:8"]]
+ 00c32e48 ["CALL", null, ["callee:00c59130:8"]]
- 00c31e64 ["INT_ADD", "register:40f0:8", ["const:c31e64:8", "const:4:8"]]
- 00c31e64 ["CALL", null, ["callee:00c5fa90:8"]]
+ 00c32e58 ["INT_ADD", "register:40f0:8", ["const:c32e58:8", "const:4:8"]]
+ 00c32e58 ["CALL", null, ["callee:00c5fa90:8"]]
~~~


<a id="compare-3e3016775904be0983a0f4197389a63e"></a>

### [`00c32124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c32/00c32124.md) → [`00c33118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c33/00c33118.md) _ZNSt6__ndk118__time_get_storageIwEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e970.md) · 呼出先 6件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5ead0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ead0.md) [`00c5eae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eae0.md) [`00c5ed80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed80.md)
- 新版 呼出元 1件 [`00c5f940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f940.md) · 呼出先 6件 [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md) [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md) [`00c5faa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5faa0.md) [`00c5fab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fab0.md) [`00c5fd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fd50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c33160",
      "incomplete_value": false,
      "site": "00c33164",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c96000:8"
          ],
          [
            "leaf",
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3216c",
      "incomplete_value": false,
      "site": "00c32170",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c95000:8"
          ],
          [
            "leaf",
            "const:df0:8"
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
      "definition_site": "00c33180",
      "incomplete_value": true,
      "site": "00c33184",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c3218c",
      "incomplete_value": true,
      "site": "00c32190",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c33164",
      "DATA",
      [
        "storage",
        "00c95df0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c33178",
      "READ",
      [
        "storage",
        "00c9bea8",
        null,
        "pointer"
      ]
    ],
    [
      "00c33184",
      "DATA",
      [
        "storage",
        "00c93908",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c33164",
      "DATA",
      [
        "storage",
        "00c96dc0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c33178",
      "READ",
      [
        "storage",
        "00c9ce78",
        null,
        "pointer"
      ]
    ],
    [
      "00c33184",
      "DATA",
      [
        "storage",
        "00c948d8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c32144 ["INT_ADD", "register:40f0:8", ["const:c32144:8", "const:4:8"]]
- 00c32144 ["CALL", null, ["callee:00c5fd50:8"]]
+ 00c33138 ["INT_ADD", "register:40f0:8", ["const:c33138:8", "const:4:8"]]
+ 00c33138 ["CALL", null, ["callee:00c5fd50:8"]]
- 00c32154 ["INT_ADD", "register:40f0:8", ["const:c32154:8", "const:4:8"]]
- 00c32154 ["CALL", null, ["callee:00c59130:8"]]
+ 00c33148 ["INT_ADD", "register:40f0:8", ["const:c33148:8", "const:4:8"]]
+ 00c33148 ["CALL", null, ["callee:00c59130:8"]]
- 00c32164 ["INT_ADD", "register:40f0:8", ["const:c32164:8", "const:4:8"]]
- 00c32164 ["CALL", null, ["callee:00c5fab0:8"]]
+ 00c33158 ["INT_ADD", "register:40f0:8", ["const:c33158:8", "const:4:8"]]
+ 00c33158 ["CALL", null, ["callee:00c5fab0:8"]]
~~~


<a id="compare-8b6193c532372a6e10a9a286cdbd27af"></a>

### [`00c329d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c32/00c329d8.md) → [`00c339cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c33/00c339cc.md) _ZNSt6__ndk110__time_putC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e980.md) · 呼出先 5件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)
- 新版 呼出元 1件 [`00c5f950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f950.md) · 呼出先 5件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59150.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md) [`00c5f050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.44% / 新版 97.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c33a24",
      "incomplete_value": false,
      "site": "00c33a34",
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
            "const:87f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c32a30",
      "incomplete_value": false,
      "site": "00c32a40",
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
            "const:835:8"
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
      "00c33a24",
      "PARAM",
      [
        "storage",
        "002b2835",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c33a24",
      "PARAM",
      [
        "storage",
        "002b287f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c32a40 ["INT_ADD", "register:40f0:8", ["const:c32a40:8", "const:4:8"]]
- 00c32a40 ["CALL", null, ["callee:00c59150:8"]]
+ 00c33a34 ["INT_ADD", "register:40f0:8", ["const:c33a34:8", "const:4:8"]]
+ 00c33a34 ["CALL", null, ["callee:00c59150:8"]]
- 00c32a0c ["INT_ADD", "register:40f0:8", ["const:c32a0c:8", "const:4:8"]]
- 00c32a0c ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c33a00 ["INT_ADD", "register:40f0:8", ["const:c33a00:8", "const:4:8"]]
+ 00c33a00 ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c32a30 ["COPY", "tmp:0:8", ["const:835:8"]]
- 00c32a30 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c32a30 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c32a30 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c33a24 ["COPY", "tmp:0:8", ["const:87f:8"]]
+ 00c33a24 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c33a24 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c33a24 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-9899192d33bb381e8b769b572b2585b7"></a>

### [`00c32a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c32/00c32a74.md) → [`00c33a68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c33/00c33a68.md) _ZNSt6__ndk110__time_putD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ee20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee20.md) · 呼出先 4件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 1件 [`00c5fdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fdf0.md) · 呼出先 4件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 3件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c33ae4",
      "incomplete_value": true,
      "site": "00c33ae4",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c32af0",
      "incomplete_value": true,
      "site": "00c32af0",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c33a9c",
      "incomplete_value": true,
      "site": "00c33aa0",
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
                "register:40a0:8"
              ],
              "LOAD"
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
      "definition_site": "00c32aa8",
      "incomplete_value": true,
      "site": "00c32aac",
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
                "register:40a0:8"
              ],
              "LOAD"
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
      "definition_site": "00c33ac4",
      "incomplete_value": false,
      "site": "00c33ac8",
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
      "definition_site": "00c32ad0",
      "incomplete_value": false,
      "site": "00c32ad4",
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
      "00c33a88",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c33a98",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c33ac4",
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
      "00c33a88",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c33a98",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c33ac4",
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
- 00c32ad4 ["INT_ADD", "register:40f0:8", ["const:c32ad4:8", "const:4:8"]]
- 00c32ad4 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c33ac8 ["INT_ADD", "register:40f0:8", ["const:c33ac8:8", "const:4:8"]]
+ 00c33ac8 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c32aec ["INT_ADD", "register:40f0:8", ["const:c32aec:8", "const:4:8"]]
- 00c32aec ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c33ae0 ["INT_ADD", "register:40f0:8", ["const:c33ae0:8", "const:4:8"]]
+ 00c33ae0 ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c32af0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d98:8"]]
- 00c32af0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c33ae4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d58:8"]]
+ 00c33ae4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-134c06af03c21519ee785e912b16be80"></a>

### [`00c32b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c32/00c32b20.md) → [`00c33b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c33/00c33b14.md) _ZNSt6__ndk117moneypunct_bynameIcLb0EE4initEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9a0.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00bf2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md)
- 新版 呼出元 1件 [`00c5f970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f970.md) · 呼出先 15件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00440f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440f9c.md) [`00bf3028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3028.md) [`00c269c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c269c4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.53% / 新版 99.53%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c33e3c",
      "incomplete_value": false,
      "site": "00c33e4c",
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
            "const:874:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c32e48",
      "incomplete_value": false,
      "site": "00c32e58",
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
            "const:79d:8"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c33e3c",
      "PARAM",
      [
        "storage",
        "002b179d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c33e3c",
      "PARAM",
      [
        "storage",
        "002b1874",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c32e58 ["INT_ADD", "register:40f0:8", ["const:c32e58:8", "const:4:8"]]
- 00c32e58 ["CALL", null, ["callee:00c269c4:8"]]
+ 00c33e4c ["INT_ADD", "register:40f0:8", ["const:c33e4c:8", "const:4:8"]]
+ 00c33e4c ["CALL", null, ["callee:00c269c4:8"]]
- 00c32b4c ["INT_ADD", "register:40f0:8", ["const:c32b4c:8", "const:4:8"]]
- 00c32b4c ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c33b40 ["INT_ADD", "register:40f0:8", ["const:c33b40:8", "const:4:8"]]
+ 00c33b40 ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c32b5c ["INT_ADD", "register:40f0:8", ["const:c32b5c:8", "const:4:8"]]
- 00c32b5c ["CALL", null, ["callee:00c5f610:8"]]
+ 00c33b50 ["INT_ADD", "register:40f0:8", ["const:c33b50:8", "const:4:8"]]
+ 00c33b50 ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-7fa53bbf0e136bd43ea01c86436dcc87"></a>

### [`00c3381c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c33/00c3381c.md) → [`00c34810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c34/00c34810.md) _ZNSt6__ndk117moneypunct_bynameIwLb0EE4initEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9c0.md) · 呼出先 17件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`006d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d773c.md) [`00bf2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c2c634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c634.md)
- 新版 呼出元 1件 [`00c5f990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f990.md) · 呼出先 17件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`006d7aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aec.md) [`00bf3028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3028.md) [`00c269c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c269c4.md) [`00c2d628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d628.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.35% / 新版 99.35%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c34ec8",
      "incomplete_value": false,
      "site": "00c34ecc",
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
      "definition_site": "00c33ed4",
      "incomplete_value": false,
      "site": "00c33ed8",
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
    "ordinal": 30,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c34ee0",
      "incomplete_value": true,
      "site": "00c34ef0",
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
            "const:874:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c33eec",
      "incomplete_value": true,
      "site": "00c33efc",
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
            "const:79d:8"
          ]
        ]
      ]
    },
    "ordinal": 32,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c34f0c",
      "incomplete_value": false,
      "site": "00c34f10",
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
      "definition_site": "00c33f18",
      "incomplete_value": false,
      "site": "00c33f1c",
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
      "00c34ec8",
      "PARAM",
      [
        "storage",
        "0029fd98",
        null,
        "string"
      ]
    ],
    [
      "00c34ee0",
      "PARAM",
      [
        "storage",
        "002b179d",
        null,
        "string"
      ]
    ],
    [
      "00c34f0c",
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
      "00c34ec8",
      "PARAM",
      [
        "storage",
        "0029fdd8",
        null,
        "string"
      ]
    ],
    [
      "00c34ee0",
      "PARAM",
      [
        "storage",
        "002b1874",
        null,
        "string"
      ]
    ],
    [
      "00c34f0c",
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
- 00c33ed8 ["INT_ADD", "register:40f0:8", ["const:c33ed8:8", "const:4:8"]]
- 00c33ed8 ["CALL", null, ["callee:00c5f050:8"]]
+ 00c34ecc ["INT_ADD", "register:40f0:8", ["const:c34ecc:8", "const:4:8"]]
+ 00c34ecc ["CALL", null, ["callee:00c5f050:8"]]
- 00c33efc ["INT_ADD", "register:40f0:8", ["const:c33efc:8", "const:4:8"]]
- 00c33efc ["CALL", null, ["callee:00c269c4:8"]]
+ 00c34ef0 ["INT_ADD", "register:40f0:8", ["const:c34ef0:8", "const:4:8"]]
+ 00c34ef0 ["CALL", null, ["callee:00c269c4:8"]]
- 00c33f1c ["INT_ADD", "register:40f0:8", ["const:c33f1c:8", "const:4:8"]]
- 00c33f1c ["CALL", null, ["callee:00c5f050:8"]]
+ 00c34f10 ["INT_ADD", "register:40f0:8", ["const:c34f10:8", "const:4:8"]]
+ 00c34f10 ["CALL", null, ["callee:00c5f050:8"]]
~~~


<a id="compare-06431a67ad2caeda46120d2c33189e06"></a>

### [`00c34518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c34/00c34518.md) → [`00c3550c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c35/00c3550c.md) _ZNSt6__ndk117moneypunct_bynameIwLb1EE4initEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9d0.md) · 呼出先 17件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`006d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d773c.md) [`00bf2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c2c634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c634.md)
- 新版 呼出元 1件 [`00c5f9a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f9a0.md) · 呼出先 17件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`006d7aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aec.md) [`00bf3028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf3/00bf3028.md) [`00c269c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c269c4.md) [`00c2d628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d628.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.35% / 新版 99.35%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c35bc4",
      "incomplete_value": false,
      "site": "00c35bc8",
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
      "definition_site": "00c34bd0",
      "incomplete_value": false,
      "site": "00c34bd4",
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
    "ordinal": 30,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c35bdc",
      "incomplete_value": false,
      "site": "00c35bec",
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
            "const:874:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c34be8",
      "incomplete_value": false,
      "site": "00c34bf8",
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
            "const:79d:8"
          ]
        ]
      ]
    },
    "ordinal": 32,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c35c08",
      "incomplete_value": false,
      "site": "00c35c0c",
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
      "definition_site": "00c34c14",
      "incomplete_value": false,
      "site": "00c34c18",
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
      "00c35bc4",
      "PARAM",
      [
        "storage",
        "0029fd98",
        null,
        "string"
      ]
    ],
    [
      "00c35bdc",
      "PARAM",
      [
        "storage",
        "002b179d",
        null,
        "string"
      ]
    ],
    [
      "00c35c08",
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
      "00c35bc4",
      "PARAM",
      [
        "storage",
        "0029fdd8",
        null,
        "string"
      ]
    ],
    [
      "00c35bdc",
      "PARAM",
      [
        "storage",
        "002b1874",
        null,
        "string"
      ]
    ],
    [
      "00c35c08",
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
- 00c34bd4 ["INT_ADD", "register:40f0:8", ["const:c34bd4:8", "const:4:8"]]
- 00c34bd4 ["CALL", null, ["callee:00c5f050:8"]]
+ 00c35bc8 ["INT_ADD", "register:40f0:8", ["const:c35bc8:8", "const:4:8"]]
+ 00c35bc8 ["CALL", null, ["callee:00c5f050:8"]]
- 00c34bf8 ["INT_ADD", "register:40f0:8", ["const:c34bf8:8", "const:4:8"]]
- 00c34bf8 ["CALL", null, ["callee:00c269c4:8"]]
+ 00c35bec ["INT_ADD", "register:40f0:8", ["const:c35bec:8", "const:4:8"]]
+ 00c35bec ["CALL", null, ["callee:00c269c4:8"]]
- 00c34c18 ["INT_ADD", "register:40f0:8", ["const:c34c18:8", "const:4:8"]]
- 00c34c18 ["CALL", null, ["callee:00c5f050:8"]]
+ 00c35c0c ["INT_ADD", "register:40f0:8", ["const:c35c0c:8", "const:4:8"]]
+ 00c35c0c ["CALL", null, ["callee:00c5f050:8"]]
~~~


<a id="compare-2ca7ba825de14645823029e67b6e8c0e"></a>

### [`00c34e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c34/00c34e58.md) → [`00c35e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c35/00c35e4c.md) _ZNSt6__ndk17codecvtIwc9mbstate_tED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5a950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a950.md) [`00c5ebe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ebe0.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 2件 [`00c5b920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b920.md) [`00c5fbb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fbb0.md) · 呼出先 5件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md) [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 68.29% / 新版 68.29%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 3件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c35e74",
      "incomplete_value": true,
      "site": "00c35e78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c34e80",
      "incomplete_value": true,
      "site": "00c34e84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "kind": "store_destination",
    "new": {
      "definition_site": "00c35edc",
      "incomplete_value": true,
      "site": "00c35edc",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c34ee8",
      "incomplete_value": true,
      "site": "00c34ee8",
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
            "const:d98:8"
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
      "definition_site": "00c35e90",
      "incomplete_value": true,
      "site": "00c35e94",
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
                "register:40a0:8"
              ],
              "LOAD"
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
      "definition_site": "00c34e9c",
      "incomplete_value": true,
      "site": "00c34ea0",
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
                "register:40a0:8"
              ],
              "LOAD"
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c35e6c",
      "READ",
      [
        "storage",
        "00c9beb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c35e78",
      "DATA",
      [
        "storage",
        "00c93990",
        null,
        "pointer"
      ]
    ],
    [
      "00c35e84",
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
      "00c35e6c",
      "READ",
      [
        "storage",
        "00c9ce80",
        null,
        "pointer"
      ]
    ],
    [
      "00c35e78",
      "DATA",
      [
        "storage",
        "00c94960",
        null,
        "pointer"
      ]
    ],
    [
      "00c35e84",
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
- 00c34ecc ["INT_ADD", "register:40f0:8", ["const:c34ecc:8", "const:4:8"]]
- 00c34ecc ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c35ec0 ["INT_ADD", "register:40f0:8", ["const:c35ec0:8", "const:4:8"]]
+ 00c35ec0 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c34ee4 ["INT_ADD", "register:40f0:8", ["const:c34ee4:8", "const:4:8"]]
- 00c34ee4 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c35ed8 ["INT_ADD", "register:40f0:8", ["const:c35ed8:8", "const:4:8"]]
+ 00c35ed8 ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c34ee8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d98:8"]]
- 00c34ee8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c35edc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d58:8"]]
+ 00c35edc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-dfe4332c3ccb327bbe10bdd9063dc0ef"></a>

### [`00c354dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c354dc.md) → [`00c364d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c364d0.md) FUN_00c364d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c35570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35570.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)
- 新版 呼出元 1件 [`00c36564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36564.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c364f0",
      "incomplete_value": true,
      "site": "00c364f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c354fc",
      "incomplete_value": true,
      "site": "00c35500",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c364e8",
      "READ",
      [
        "storage",
        "00c9be68",
        null,
        "pointer"
      ]
    ],
    [
      "00c364f4",
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
      "00c364e8",
      "READ",
      [
        "storage",
        "00c9ce38",
        null,
        "pointer"
      ]
    ],
    [
      "00c364f4",
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
- 00c354ec ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c364e0 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c354f4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e68:8"]]
- 00c354f4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c364e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e38:8"]]
+ 00c364e8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c35524 ["INT_ADD", "register:40f0:8", ["const:c35524:8", "const:4:8"]]
- 00c35524 ["CALL", null, ["callee:00c58f50:8"]]
+ 00c36518 ["INT_ADD", "register:40f0:8", ["const:c36518:8", "const:4:8"]]
+ 00c36518 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-dbcc8f82cfe8dec34ca9341c569fa6e4"></a>

### [`00c3559c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c3559c.md) → [`00c36590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36590.md) FUN_00c36590

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c35630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35630.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)
- 新版 呼出元 1件 [`00c36624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36624.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c365b0",
      "incomplete_value": true,
      "site": "00c365b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c355bc",
      "incomplete_value": true,
      "site": "00c355c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c365a8",
      "READ",
      [
        "storage",
        "00c9be70",
        null,
        "pointer"
      ]
    ],
    [
      "00c365b4",
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
      "00c365a8",
      "READ",
      [
        "storage",
        "00c9ce40",
        null,
        "pointer"
      ]
    ],
    [
      "00c365b4",
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
- 00c355ac ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c365a0 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c355b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e70:8"]]
- 00c355b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c365a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e40:8"]]
+ 00c365a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c355e4 ["INT_ADD", "register:40f0:8", ["const:c355e4:8", "const:4:8"]]
- 00c355e4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00c365d8 ["INT_ADD", "register:40f0:8", ["const:c365d8:8", "const:4:8"]]
+ 00c365d8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6a31efc65a222aef9fa0f010d93f61b8"></a>

### [`00c3565c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c3565c.md) → [`00c36650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36650.md) FUN_00c36650

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c356f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c356f0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)
- 新版 呼出元 1件 [`00c366e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c366e4.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c36670",
      "incomplete_value": true,
      "site": "00c36674",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c3567c",
      "incomplete_value": true,
      "site": "00c35680",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c36668",
      "READ",
      [
        "storage",
        "00c9be78",
        null,
        "pointer"
      ]
    ],
    [
      "00c36674",
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
      "00c36668",
      "READ",
      [
        "storage",
        "00c9ce48",
        null,
        "pointer"
      ]
    ],
    [
      "00c36674",
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
- 00c3566c ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c36660 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c35674 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e78:8"]]
- 00c35674 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c36668 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e48:8"]]
+ 00c36668 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c356a4 ["INT_ADD", "register:40f0:8", ["const:c356a4:8", "const:4:8"]]
- 00c356a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00c36698 ["INT_ADD", "register:40f0:8", ["const:c36698:8", "const:4:8"]]
+ 00c36698 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e86e798354be10b10b7bbcb5653d44a9"></a>

### [`00c3596c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c3596c.md) → [`00c36960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36960.md) FUN_00c36960

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00c24970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24970.md) [`00c35984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35984.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`00c25964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25964.md) [`00c36978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36978.md) [`00c36ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c36/00c36ad4.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c36970",
      "incomplete_value": false,
      "site": "00c36974",
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
      "definition_site": "00c3597c",
      "incomplete_value": false,
      "site": "00c35980",
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
      "00c36970",
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
      "00c36970",
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
- 00c35980 ["INT_ADD", "register:40f0:8", ["const:c35980:8", "const:4:8"]]
- 00c35980 ["CALL", null, ["callee:0043bad8:8"]]
+ 00c36974 ["INT_ADD", "register:40f0:8", ["const:c36974:8", "const:4:8"]]
+ 00c36974 ["CALL", null, ["callee:0043bad8:8"]]
- 00c35978 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00c3696c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00c3597c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00c3597c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c3597c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c3597c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c36970 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00c36970 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c36970 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c36970 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2434901210789f0a9107e1a4ab36cf1b"></a>

### [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) → [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) FUN_00c37048

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 96件 [`00c07928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07928.md) [`00c0a5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a5d0.md) [`00c0ae00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0ae00.md) [`00c0da44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0da44.md) [`00c0e128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0e128.md) · 呼出先 1件 [`00c53d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d40.md)
- 新版 呼出元 96件 [`00c0891c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c0891c.md) [`00c0b5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0b5c4.md) [`00c0bdf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0bdf4.md) [`00c0ea38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0e/00c0ea38.md) [`00c0f11c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0f/00c0f11c.md) · 呼出先 1件 [`00c54d30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c3706c",
      "incomplete_value": true,
      "site": "00c37070",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ea8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c36078",
      "incomplete_value": true,
      "site": "00c3607c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:ed8:8"
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
      "00c3706c",
      "READ",
      [
        "storage",
        "00c9bed8",
        null,
        "pointer"
      ]
    ],
    [
      "00c3706c",
      "PARAM",
      [
        "storage",
        "01127f00",
        "std::__ndk1::locale::id::__next_id",
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00c3706c",
      "READ",
      [
        "storage",
        "00c9cea8",
        null,
        "pointer"
      ]
    ],
    [
      "00c3706c",
      "PARAM",
      [
        "storage",
        "01128ec0",
        "std::__ndk1::locale::id::__next_id",
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3607c ["INT_ADD", "register:40f0:8", ["const:c3607c:8", "const:4:8"]]
- 00c3607c ["CALL", null, ["callee:00c54d30:8"]]
+ 00c37070 ["INT_ADD", "register:40f0:8", ["const:c37070:8", "const:4:8"]]
+ 00c37070 ["CALL", null, ["callee:00c54d30:8"]]
- 00c36068 ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 00c3705c ["COPY", "register:4008:8", ["const:c9c000:8"]]
- 00c36078 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:ed8:8"]]
- 00c36078 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c3706c ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:ea8:8"]]
+ 00c3706c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a4effa9ab29930d233705fa7c9b514bc"></a>

### [`00c36098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36098.md) → [`00c3708c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c3708c.md) FUN_00c3708c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c593a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c593a0.md) [`00c5cee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cee0.md) [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c370ac",
      "incomplete_value": true,
      "site": "00c370b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c360b8",
      "incomplete_value": true,
      "site": "00c360bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c370c4",
      "incomplete_value": true,
      "site": "00c370c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c360d0",
      "incomplete_value": true,
      "site": "00c360d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c370a4",
      "READ",
      [
        "storage",
        "00c9bea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c370b0",
      "DATA",
      [
        "storage",
        "00c938a0",
        null,
        "pointer"
      ]
    ],
    [
      "00c370bc",
      "READ",
      [
        "storage",
        "00c9be98",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c370a4",
      "READ",
      [
        "storage",
        "00c9ce70",
        null,
        "pointer"
      ]
    ],
    [
      "00c370b0",
      "DATA",
      [
        "storage",
        "00c94870",
        null,
        "pointer"
      ]
    ],
    [
      "00c370bc",
      "READ",
      [
        "storage",
        "00c9ce68",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c360a8 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c3709c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c360b0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
- 00c360b0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c370a4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e70:8"]]
+ 00c370a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c360c0 ["INT_ADD", "register:40f0:8", ["const:c360c0:8", "const:4:8"]]
- 00c360c0 ["CALL", null, ["callee:00c5e270:8"]]
+ 00c370b4 ["INT_ADD", "register:40f0:8", ["const:c370b4:8", "const:4:8"]]
+ 00c370b4 ["CALL", null, ["callee:00c5e270:8"]]
~~~


<a id="compare-80c83502cd7630a526996d5ea3424800"></a>

### [`00c36108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36108.md) → [`00c370fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c370fc.md) FUN_00c370fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5ead0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ead0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md) [`00c5faa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5faa0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3711c",
      "incomplete_value": true,
      "site": "00c37120",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c36128",
      "incomplete_value": true,
      "site": "00c3612c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c37114",
      "READ",
      [
        "storage",
        "00c9bea8",
        null,
        "pointer"
      ]
    ],
    [
      "00c37120",
      "DATA",
      [
        "storage",
        "00c93908",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c37114",
      "READ",
      [
        "storage",
        "00c9ce78",
        null,
        "pointer"
      ]
    ],
    [
      "00c37120",
      "DATA",
      [
        "storage",
        "00c948d8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c36118 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c3710c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c36120 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea8:8"]]
- 00c36120 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c37114 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e78:8"]]
+ 00c37114 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c36130 ["INT_ADD", "register:40f0:8", ["const:c36130:8", "const:4:8"]]
- 00c36130 ["CALL", null, ["callee:00c5e270:8"]]
+ 00c37124 ["INT_ADD", "register:40f0:8", ["const:c37124:8", "const:4:8"]]
+ 00c37124 ["CALL", null, ["callee:00c5e270:8"]]
~~~


<a id="compare-cc70db9d03d5038423588fcb84ab74ae"></a>

### [`00c36208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36208.md) → [`00c371fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c371fc.md) FUN_00c371fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c08028`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08028.md) [`00c0b508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b508.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d220.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 2件 [`00c0901c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c09/00c0901c.md) [`00c0c4fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c4fc.md) · 呼出先 5件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5e1f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e1f0.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 86.76% / 新版 86.76%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c372f8",
      "incomplete_value": true,
      "site": "00c372f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c36304",
      "incomplete_value": true,
      "site": "00c36304",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
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
      "definition_site": "00c37254",
      "incomplete_value": true,
      "site": "00c37264",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40c8:8"
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
      "definition_site": "00c36260",
      "incomplete_value": true,
      "site": "00c36270",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40c8:8"
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
    "ordinal": 1,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c372d8",
      "incomplete_value": false,
      "site": "00c372dc",
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
      "definition_site": "00c362e4",
      "incomplete_value": false,
      "site": "00c362e8",
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
      "00c3724c",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c37254",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c372d8",
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
      "00c3724c",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c37254",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c372d8",
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
- 00c36270 ["INT_ADD", "register:40f0:8", ["const:c36270:8", "const:4:8"]]
- 00c36270 ["CALL", null, ["callee:00c5e1f0:8"]]
+ 00c37264 ["INT_ADD", "register:40f0:8", ["const:c37264:8", "const:4:8"]]
+ 00c37264 ["CALL", null, ["callee:00c5e1f0:8"]]
- 00c362e8 ["INT_ADD", "register:40f0:8", ["const:c362e8:8", "const:4:8"]]
- 00c362e8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c372dc ["INT_ADD", "register:40f0:8", ["const:c372dc:8", "const:4:8"]]
+ 00c372dc ["CALL", null, ["callee:00c58ef0:8"]]
- 00c36300 ["INT_ADD", "register:40f0:8", ["const:c36300:8", "const:4:8"]]
- 00c36300 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c372f4 ["INT_ADD", "register:40f0:8", ["const:c372f4:8", "const:4:8"]]
+ 00c372f4 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-0fac56d6bbffc95c65c803002172b58e"></a>

### [`00c36330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36330.md) → [`00c37324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37324.md) FUN_00c37324

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c08464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08464.md) [`00c0b938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b938.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d220.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 2件 [`00c09458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c09/00c09458.md) [`00c0c92c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c92c.md) · 呼出先 5件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5e1f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e1f0.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c37420",
      "incomplete_value": true,
      "site": "00c37420",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3642c",
      "incomplete_value": true,
      "site": "00c3642c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
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
      "definition_site": "00c3737c",
      "incomplete_value": true,
      "site": "00c3738c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40c8:8"
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
      "definition_site": "00c36388",
      "incomplete_value": true,
      "site": "00c36398",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40c8:8"
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
    "ordinal": 1,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37400",
      "incomplete_value": false,
      "site": "00c37404",
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
      "definition_site": "00c3640c",
      "incomplete_value": false,
      "site": "00c36410",
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
      "00c37374",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c3737c",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c37400",
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
      "00c37374",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c3737c",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c37400",
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
- 00c36398 ["INT_ADD", "register:40f0:8", ["const:c36398:8", "const:4:8"]]
- 00c36398 ["CALL", null, ["callee:00c5e1f0:8"]]
+ 00c3738c ["INT_ADD", "register:40f0:8", ["const:c3738c:8", "const:4:8"]]
+ 00c3738c ["CALL", null, ["callee:00c5e1f0:8"]]
- 00c36410 ["INT_ADD", "register:40f0:8", ["const:c36410:8", "const:4:8"]]
- 00c36410 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c37404 ["INT_ADD", "register:40f0:8", ["const:c37404:8", "const:4:8"]]
+ 00c37404 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c36428 ["INT_ADD", "register:40f0:8", ["const:c36428:8", "const:4:8"]]
- 00c36428 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c3741c ["INT_ADD", "register:40f0:8", ["const:c3741c:8", "const:4:8"]]
+ 00c3741c ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-d6649b02dde216a2ee6c4c258425417b"></a>

### [`00c36458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36458.md) → [`00c3744c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c3744c.md) FUN_00c3744c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c088a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c088a0.md) [`00c0bd68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0bd68.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d230.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 2件 [`00c09894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c09/00c09894.md) [`00c0cd5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0cd5c.md) · 呼出先 5件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5e200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e200.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c37578",
      "incomplete_value": true,
      "site": "00c37578",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c36584",
      "incomplete_value": true,
      "site": "00c36584",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
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
      "definition_site": "00c374c0",
      "incomplete_value": true,
      "site": "00c374d0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c364cc",
      "incomplete_value": true,
      "site": "00c364dc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37558",
      "incomplete_value": false,
      "site": "00c3755c",
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
      "definition_site": "00c36564",
      "incomplete_value": false,
      "site": "00c36568",
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
      "00c374b8",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c374c0",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c37558",
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
      "00c374b8",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c374c0",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c37558",
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
- 00c364dc ["INT_ADD", "register:40f0:8", ["const:c364dc:8", "const:4:8"]]
- 00c364dc ["CALL", null, ["callee:00c5e200:8"]]
+ 00c374d0 ["INT_ADD", "register:40f0:8", ["const:c374d0:8", "const:4:8"]]
+ 00c374d0 ["CALL", null, ["callee:00c5e200:8"]]
- 00c36568 ["INT_ADD", "register:40f0:8", ["const:c36568:8", "const:4:8"]]
- 00c36568 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c3755c ["INT_ADD", "register:40f0:8", ["const:c3755c:8", "const:4:8"]]
+ 00c3755c ["CALL", null, ["callee:00c58ef0:8"]]
- 00c36580 ["INT_ADD", "register:40f0:8", ["const:c36580:8", "const:4:8"]]
- 00c36580 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c37574 ["INT_ADD", "register:40f0:8", ["const:c37574:8", "const:4:8"]]
+ 00c37574 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-b0040261531d9d6ddded8f3a297cc509"></a>

### [`00c365b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c365b0.md) → [`00c375a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c375a4.md) FUN_00c375a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c08cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08cdc.md) [`00c0c198`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c198.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d230.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 2件 [`00c09cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c09/00c09cd0.md) [`00c0d18c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0d/00c0d18c.md) · 呼出先 5件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5e200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e200.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 89.87% / 新版 89.87%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c376cc",
      "incomplete_value": true,
      "site": "00c376cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c366d8",
      "incomplete_value": true,
      "site": "00c366d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
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
      "definition_site": "00c37618",
      "incomplete_value": true,
      "site": "00c37628",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c36624",
      "incomplete_value": true,
      "site": "00c36634",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c376ac",
      "incomplete_value": false,
      "site": "00c376b0",
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
      "definition_site": "00c366b8",
      "incomplete_value": false,
      "site": "00c366bc",
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
      "00c37610",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c37618",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c376ac",
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
      "00c37610",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c37618",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c376ac",
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
- 00c36634 ["INT_ADD", "register:40f0:8", ["const:c36634:8", "const:4:8"]]
- 00c36634 ["CALL", null, ["callee:00c5e200:8"]]
+ 00c37628 ["INT_ADD", "register:40f0:8", ["const:c37628:8", "const:4:8"]]
+ 00c37628 ["CALL", null, ["callee:00c5e200:8"]]
- 00c366bc ["INT_ADD", "register:40f0:8", ["const:c366bc:8", "const:4:8"]]
- 00c366bc ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c376b0 ["INT_ADD", "register:40f0:8", ["const:c376b0:8", "const:4:8"]]
+ 00c376b0 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c366d4 ["INT_ADD", "register:40f0:8", ["const:c366d4:8", "const:4:8"]]
- 00c366d4 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c376c8 ["INT_ADD", "register:40f0:8", ["const:c376c8:8", "const:4:8"]]
+ 00c376c8 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-7086bb36c546ae55a6a8031894232147"></a>

### [`00c36704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36704.md) → [`00c376f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c376f8.md) FUN_00c376f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c09118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09118.md) [`00c0c5c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c5c8.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d230.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 2件 [`00c0a10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0a/00c0a10c.md) [`00c0d5bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0d/00c0d5bc.md) · 呼出先 5件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5e200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e200.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c37814",
      "incomplete_value": true,
      "site": "00c37814",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c36820",
      "incomplete_value": true,
      "site": "00c36820",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
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
      "definition_site": "00c3776c",
      "incomplete_value": true,
      "site": "00c3777c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c36778",
      "incomplete_value": true,
      "site": "00c36788",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c377f4",
      "incomplete_value": false,
      "site": "00c377f8",
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
      "definition_site": "00c36800",
      "incomplete_value": false,
      "site": "00c36804",
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
      "00c37764",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c3776c",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c377f4",
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
      "00c37764",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c3776c",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c377f4",
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
- 00c36788 ["INT_ADD", "register:40f0:8", ["const:c36788:8", "const:4:8"]]
- 00c36788 ["CALL", null, ["callee:00c5e200:8"]]
+ 00c3777c ["INT_ADD", "register:40f0:8", ["const:c3777c:8", "const:4:8"]]
+ 00c3777c ["CALL", null, ["callee:00c5e200:8"]]
- 00c36804 ["INT_ADD", "register:40f0:8", ["const:c36804:8", "const:4:8"]]
- 00c36804 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c377f8 ["INT_ADD", "register:40f0:8", ["const:c377f8:8", "const:4:8"]]
+ 00c377f8 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c3681c ["INT_ADD", "register:40f0:8", ["const:c3681c:8", "const:4:8"]]
- 00c3681c ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c37810 ["INT_ADD", "register:40f0:8", ["const:c37810:8", "const:4:8"]]
+ 00c37810 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-d0e43adb83da8b5fa973f583f015a75d"></a>

### [`00c3684c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c3684c.md) → [`00c37840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37840.md) FUN_00c37840

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c09554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09554.md) [`00c0c9f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c9f8.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d230.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 2件 [`00c0a548`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0a/00c0a548.md) [`00c0d9ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0d/00c0d9ec.md) · 呼出先 5件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5e200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e200.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c3795c",
      "incomplete_value": true,
      "site": "00c3795c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c36968",
      "incomplete_value": true,
      "site": "00c36968",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
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
      "definition_site": "00c378b4",
      "incomplete_value": true,
      "site": "00c378c4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c368c0",
      "incomplete_value": true,
      "site": "00c368d0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c3793c",
      "incomplete_value": false,
      "site": "00c37940",
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
      "definition_site": "00c36948",
      "incomplete_value": false,
      "site": "00c3694c",
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
      "00c378ac",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c378b4",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c3793c",
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
      "00c378ac",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c378b4",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c3793c",
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
- 00c368d0 ["INT_ADD", "register:40f0:8", ["const:c368d0:8", "const:4:8"]]
- 00c368d0 ["CALL", null, ["callee:00c5e200:8"]]
+ 00c378c4 ["INT_ADD", "register:40f0:8", ["const:c378c4:8", "const:4:8"]]
+ 00c378c4 ["CALL", null, ["callee:00c5e200:8"]]
- 00c3694c ["INT_ADD", "register:40f0:8", ["const:c3694c:8", "const:4:8"]]
- 00c3694c ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c37940 ["INT_ADD", "register:40f0:8", ["const:c37940:8", "const:4:8"]]
+ 00c37940 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c36964 ["INT_ADD", "register:40f0:8", ["const:c36964:8", "const:4:8"]]
- 00c36964 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c37958 ["INT_ADD", "register:40f0:8", ["const:c37958:8", "const:4:8"]]
+ 00c37958 ["CALL", null, ["callee:00c5e2c0:8"]]
~~~


<a id="compare-5db838c901bb5137fd3521dbdf1b4f67"></a>

### [`00c36994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36994.md) → [`00c37988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37988.md) FUN_00c37988

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c09990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09990.md) [`00c0ce28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0ce28.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c58680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58680.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 2件 [`00c0a984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0a/00c0a984.md) [`00c0de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0d/00c0de1c.md) · 呼出先 5件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c59650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59650.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.19% / 新版 92.19%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c37a74",
      "incomplete_value": false,
      "site": "00c37a74",
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
      "definition_site": "00c36a80",
      "incomplete_value": false,
      "site": "00c36a80",
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
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37a50",
      "incomplete_value": false,
      "site": "00c37a54",
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
      "definition_site": "00c36a5c",
      "incomplete_value": false,
      "site": "00c36a60",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37a60",
      "incomplete_value": false,
      "site": "00c37a6c",
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
      "definition_site": "00c36a6c",
      "incomplete_value": false,
      "site": "00c36a78",
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
      "00c379cc",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c37a50",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c37a60",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c379cc",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c37a50",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c37a60",
      "PARAM",
      [
        "storage",
        "002b628b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c36a60 ["INT_ADD", "register:40f0:8", ["const:c36a60:8", "const:4:8"]]
- 00c36a60 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c37a54 ["INT_ADD", "register:40f0:8", ["const:c37a54:8", "const:4:8"]]
+ 00c37a54 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c36a78 ["INT_ADD", "register:40f0:8", ["const:c36a78:8", "const:4:8"]]
- 00c36a78 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c37a6c ["INT_ADD", "register:40f0:8", ["const:c37a6c:8", "const:4:8"]]
+ 00c37a6c ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c36a80 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
- 00c36a80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c37a74 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d58:8"]]
+ 00c37a74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-243d296265657c213e7c8cefdae499f2"></a>

### [`00c36aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36aac.md) → [`00c37aa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37aa0.md) FUN_00c37aa0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c09da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09da8.md) [`00c0d234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0d234.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c58690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58690.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 2件 [`00c0ad9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0a/00c0ad9c.md) [`00c0e228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0e/00c0e228.md) · 呼出先 5件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c59660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59660.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c37b8c",
      "incomplete_value": false,
      "site": "00c37b8c",
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
      "definition_site": "00c36b98",
      "incomplete_value": false,
      "site": "00c36b98",
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
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37b68",
      "incomplete_value": false,
      "site": "00c37b6c",
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
      "definition_site": "00c36b74",
      "incomplete_value": false,
      "site": "00c36b78",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37b78",
      "incomplete_value": false,
      "site": "00c37b84",
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
      "definition_site": "00c36b84",
      "incomplete_value": false,
      "site": "00c36b90",
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
      "00c37ae4",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c37b68",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c37b78",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c37ae4",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c37b68",
      "PARAM",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c37b78",
      "PARAM",
      [
        "storage",
        "002b628b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c36b78 ["INT_ADD", "register:40f0:8", ["const:c36b78:8", "const:4:8"]]
- 00c36b78 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c37b6c ["INT_ADD", "register:40f0:8", ["const:c37b6c:8", "const:4:8"]]
+ 00c37b6c ["CALL", null, ["callee:00c58ef0:8"]]
- 00c36b90 ["INT_ADD", "register:40f0:8", ["const:c36b90:8", "const:4:8"]]
- 00c36b90 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c37b84 ["INT_ADD", "register:40f0:8", ["const:c37b84:8", "const:4:8"]]
+ 00c37b84 ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c36b98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
- 00c36b98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c37b8c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d58:8"]]
+ 00c37b8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


