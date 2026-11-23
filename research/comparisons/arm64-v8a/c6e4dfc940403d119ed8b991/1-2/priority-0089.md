# v16.0.2 → v16.0.3 · 最優先の変更候補 (89)

[一覧の目次](README.md)

<a id="compare-55f17a207e95c7d6172443b92f841e5a"></a>

### [`00b56518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b56518.md) → [`00b5750c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b57/00b5750c.md) _ZN8firebase4util17JavaThreadContext13SetupInstanceEP7_JNIEnvPFvPvES4_S6_PS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5b250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b250.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5c220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c220.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b57534",
      "incomplete_value": true,
      "site": "00b57540",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b56540",
      "incomplete_value": true,
      "site": "00b5654c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:778:8"
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
      "definition_site": "00b57538",
      "incomplete_value": true,
      "site": "00b57540",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:748:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b56544",
      "incomplete_value": true,
      "site": "00b5654c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:788:8"
              ]
            ]
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
      "00b57534",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57538",
      "READ",
      [
        "storage",
        "01125788",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b57534",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57538",
      "READ",
      [
        "storage",
        "01126748",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5654c ["INT_ADD", "register:40f0:8", ["const:b5654c:8", "const:4:8"]]
- 00b5654c ["CALL", null, ["callee:00589a54:8"]]
+ 00b57540 ["INT_ADD", "register:40f0:8", ["const:b57540:8", "const:4:8"]]
+ 00b57540 ["CALL", null, ["callee:00589a54:8"]]
- 00b56528 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b5751c ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b5652c ["COPY", "register:4048:8", ["const:1125000:8"]]
+ 00b57520 ["COPY", "register:4048:8", ["const:1126000:8"]]
~~~


<a id="compare-5dfe5886c3042694e2679cceb1b9e896"></a>

### [`00b565b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b565b0.md) → [`00b575a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b57/00b575a4.md) _ZN8firebase4util17JavaThreadContext15RunOnMainThreadEP7_JNIEnvP8_jobjectPFvPvES6_S8_PS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b430.md) · 呼出先 3件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5b250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b250.md) [`00c5b310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b310.md)
- 新版 呼出元 1件 [`00c5c400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c400.md) · 呼出先 3件 [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5c220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c220.md) [`00c5c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c2e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b575d0",
      "incomplete_value": true,
      "site": "00b575dc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:738:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b565dc",
      "incomplete_value": true,
      "site": "00b565e8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:778:8"
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
      "definition_site": "00b575d4",
      "incomplete_value": true,
      "site": "00b575dc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:748:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b565e0",
      "incomplete_value": true,
      "site": "00b565e8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:788:8"
              ]
            ]
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
      "00b575d0",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b575d4",
      "READ",
      [
        "storage",
        "01125788",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57634",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b575d0",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b575d4",
      "READ",
      [
        "storage",
        "01126748",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57634",
      "READ",
      [
        "storage",
        "01126770",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b565e8 ["INT_ADD", "register:40f0:8", ["const:b565e8:8", "const:4:8"]]
- 00b565e8 ["CALL", null, ["callee:00589a54:8"]]
+ 00b575dc ["INT_ADD", "register:40f0:8", ["const:b575dc:8", "const:4:8"]]
+ 00b575dc ["CALL", null, ["callee:00589a54:8"]]
- 00b565c0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b575b4 ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b565c4 ["COPY", "register:4048:8", ["const:1125000:8"]]
+ 00b575b8 ["COPY", "register:4048:8", ["const:1126000:8"]]
~~~


<a id="compare-cc266e5907c86bdb3ab821dab2e7f37c"></a>

### [`00b566b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b566b0.md) → [`00b576a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b57/00b576a4.md) _ZN8firebase4util17JavaThreadContext21RunOnBackgroundThreadEP7_JNIEnvPFvPvES4_S6_PS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b440.md) · 呼出先 3件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5b250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b250.md) [`00c5b310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b310.md)
- 新版 呼出元 1件 [`00c5c410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c410.md) · 呼出先 3件 [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5c220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c220.md) [`00c5c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c2e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b576cc",
      "incomplete_value": true,
      "site": "00b576d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:738:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b566d8",
      "incomplete_value": true,
      "site": "00b566e4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1125000:8"
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b576d0",
      "incomplete_value": true,
      "site": "00b576d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:748:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b566dc",
      "incomplete_value": true,
      "site": "00b566e4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:788:8"
              ]
            ]
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
      "00b576cc",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b576d0",
      "READ",
      [
        "storage",
        "01125788",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57730",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b576cc",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b576d0",
      "READ",
      [
        "storage",
        "01126748",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57730",
      "READ",
      [
        "storage",
        "01126770",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b566e4 ["INT_ADD", "register:40f0:8", ["const:b566e4:8", "const:4:8"]]
- 00b566e4 ["CALL", null, ["callee:00589a54:8"]]
+ 00b576d8 ["INT_ADD", "register:40f0:8", ["const:b576d8:8", "const:4:8"]]
+ 00b576d8 ["CALL", null, ["callee:00589a54:8"]]
- 00b566c0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b576b4 ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b566c4 ["COPY", "register:4048:8", ["const:1125000:8"]]
+ 00b576b8 ["COPY", "register:4048:8", ["const:1126000:8"]]
~~~


<a id="compare-a3d4f7aad88861797a6623789313b386"></a>

### [`00b567b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b567b0.md) → [`00b577a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b57/00b577a4.md) _ZN8firebase4util9FindClassEP7_JNIEnvPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b640.md) · 呼出先 1件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md)
- 新版 呼出元 1件 [`00c5c610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c610.md) · 呼出先 1件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 89.69% / 新版 89.69%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5781c",
      "incomplete_value": true,
      "site": "00b57820",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
      "definition_site": "00b56828",
      "incomplete_value": true,
      "site": "00b5682c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b57848",
      "incomplete_value": true,
      "site": "00b5784c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
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
      "definition_site": "00b56854",
      "incomplete_value": true,
      "site": "00b56858",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b578b8",
      "incomplete_value": true,
      "site": "00b578bc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
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
      "definition_site": "00b568c4",
      "incomplete_value": true,
      "site": "00b568c8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
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
      "00b57810",
      "READ",
      [
        "storage",
        "01125e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5783c",
      "READ",
      [
        "storage",
        "01125e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57854",
      "READ",
      [
        "storage",
        "01125740",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b57810",
      "READ",
      [
        "storage",
        "01126e30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5783c",
      "READ",
      [
        "storage",
        "01126e30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57854",
      "READ",
      [
        "storage",
        "01126700",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5686c ["INT_ADD", "register:40f0:8", ["const:b5686c:8", "const:4:8"]]
- 00b5686c ["CALL", null, ["callee:00497b94:8"]]
+ 00b57860 ["INT_ADD", "register:40f0:8", ["const:b57860:8", "const:4:8"]]
+ 00b57860 ["CALL", null, ["callee:00497b94:8"]]
- 00b568dc ["INT_ADD", "register:40f0:8", ["const:b568dc:8", "const:4:8"]]
- 00b568dc ["CALL", null, ["callee:00497b94:8"]]
+ 00b578d0 ["INT_ADD", "register:40f0:8", ["const:b578d0:8", "const:4:8"]]
+ 00b578d0 ["CALL", null, ["callee:00497b94:8"]]
- 00b567d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b567d4 ["INT_ADD", "register:40f0:8", ["const:b567d4:8", "const:4:8"]]
- 00b567d4 ["CALLIND", null, ["register:0:8"]]
+ 00b577c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b577c8 ["INT_ADD", "register:40f0:8", ["const:b577c8:8", "const:4:8"]]
+ 00b577c8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1036868deff93d078583a9137f486398"></a>

### [`00b56934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b56/00b56934.md) → [`00b57928`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b57/00b57928.md) _ZN8firebase4util16FindClassInFilesEP7_JNIEnvP8_jobjectRKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b400.md) · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5c3d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c3d0.md) · 呼出先 13件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b57a4c",
      "incomplete_value": true,
      "site": "00b57a50",
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
                "leaf",
                "const:0:8"
              ]
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
      "definition_site": "00b56a58",
      "incomplete_value": true,
      "site": "00b56a5c",
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
                "leaf",
                "const:0:8"
              ]
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b57970",
      "incomplete_value": true,
      "site": "00b57980",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5697c",
      "incomplete_value": true,
      "site": "00b5698c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1125000:8"
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b579c4",
      "incomplete_value": true,
      "site": "00b579d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b569d0",
      "incomplete_value": true,
      "site": "00b569dc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1125000:8"
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
      "00b57970",
      "READ",
      [
        "storage",
        "011258e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b579c4",
      "READ",
      [
        "storage",
        "01125ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57a3c",
      "READ",
      [
        "storage",
        "01125920",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b57970",
      "READ",
      [
        "storage",
        "011268a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b579c4",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b57a3c",
      "READ",
      [
        "storage",
        "011268e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5698c ["INT_ADD", "register:40f0:8", ["const:b5698c:8", "const:4:8"]]
- 00b5698c ["CALL", null, ["callee:00497b94:8"]]
+ 00b57980 ["INT_ADD", "register:40f0:8", ["const:b57980:8", "const:4:8"]]
+ 00b57980 ["CALL", null, ["callee:00497b94:8"]]
- 00b569dc ["INT_ADD", "register:40f0:8", ["const:b569dc:8", "const:4:8"]]
- 00b569dc ["CALL", null, ["callee:00497b94:8"]]
+ 00b579d0 ["INT_ADD", "register:40f0:8", ["const:b579d0:8", "const:4:8"]]
+ 00b579d0 ["CALL", null, ["callee:00497b94:8"]]
- 00b56aac ["INT_ADD", "register:40f0:8", ["const:b56aac:8", "const:4:8"]]
- 00b56aac ["CALL", null, ["callee:00497b94:8"]]
+ 00b57aa0 ["INT_ADD", "register:40f0:8", ["const:b57aa0:8", "const:4:8"]]
+ 00b57aa0 ["CALL", null, ["callee:00497b94:8"]]
~~~


<a id="compare-c69b73b074eb015bb9fa19e200d15967"></a>

### [`00b57164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57164.md) → [`00b58158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b58158.md) _ZN8firebase4util25GetResourceIdFromActivityEP7_JNIEnvP8_jobjectPKcNS0_12ResourceTypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.27% / 新版 97.27%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b58174",
      "incomplete_value": true,
      "site": "00b58184",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00b57180",
      "incomplete_value": true,
      "site": "00b57190",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1125000:8"
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b581c8",
      "incomplete_value": true,
      "site": "00b581d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00b571d4",
      "incomplete_value": true,
      "site": "00b571e0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1125000:8"
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
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b58220",
      "incomplete_value": true,
      "site": "00b5822c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b5722c",
      "incomplete_value": true,
      "site": "00b57238",
      "value": [
        "LOAD",
        "8",
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
      "00b58174",
      "READ",
      [
        "storage",
        "01125900",
        null,
        "undefined8"
      ]
    ],
    [
      "00b581c8",
      "READ",
      [
        "storage",
        "011258f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b58220",
      "DATA",
      [
        "storage",
        "00c902c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b58174",
      "READ",
      [
        "storage",
        "011268c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b581c8",
      "READ",
      [
        "storage",
        "011268b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b58220",
      "DATA",
      [
        "storage",
        "00c91290",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b57190 ["INT_ADD", "register:40f0:8", ["const:b57190:8", "const:4:8"]]
- 00b57190 ["CALL", null, ["callee:00497b94:8"]]
+ 00b58184 ["INT_ADD", "register:40f0:8", ["const:b58184:8", "const:4:8"]]
+ 00b58184 ["CALL", null, ["callee:00497b94:8"]]
- 00b571e0 ["INT_ADD", "register:40f0:8", ["const:b571e0:8", "const:4:8"]]
- 00b571e0 ["CALL", null, ["callee:00497b94:8"]]
+ 00b581d4 ["INT_ADD", "register:40f0:8", ["const:b581d4:8", "const:4:8"]]
+ 00b581d4 ["CALL", null, ["callee:00497b94:8"]]
- 00b57238 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b57238 ["INT_ADD", "register:40f0:8", ["const:b57238:8", "const:4:8"]]
- 00b57238 ["CALLIND", null, ["register:0:8"]]
+ 00b5822c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5822c ["INT_ADD", "register:40f0:8", ["const:b5822c:8", "const:4:8"]]
+ 00b5822c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6eb686fb67ee8491adbb8faaee255287"></a>

### [`00b5731c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b5731c.md) → [`00b58310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b58310.md) _ZN8firebase4util29GetResourceStringFromActivityEP7_JNIEnvP8_jobjecti

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00c5bfc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfc0.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.78% / 新版 97.78%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b58338",
      "incomplete_value": true,
      "site": "00b5833c",
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
            "const:99c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b57344",
      "incomplete_value": true,
      "site": "00b57348",
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
            "const:8cd:8"
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
      "definition_site": "00b58344",
      "incomplete_value": true,
      "site": "00b58354",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b57350",
      "incomplete_value": true,
      "site": "00b57360",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:918:8"
              ]
            ]
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
      "00b58338",
      "PARAM",
      [
        "storage",
        "002b58cd",
        null,
        "string"
      ]
    ],
    [
      "00b58344",
      "READ",
      [
        "storage",
        "01125918",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b58338",
      "PARAM",
      [
        "storage",
        "002b599c",
        null,
        "string"
      ]
    ],
    [
      "00b58344",
      "READ",
      [
        "storage",
        "011268d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b57348 ["INT_ADD", "register:40f0:8", ["const:b57348:8", "const:4:8"]]
- 00b57348 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b5833c ["INT_ADD", "register:40f0:8", ["const:b5833c:8", "const:4:8"]]
+ 00b5833c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b57360 ["INT_ADD", "register:40f0:8", ["const:b57360:8", "const:4:8"]]
- 00b57360 ["CALL", null, ["callee:00497b94:8"]]
+ 00b58354 ["INT_ADD", "register:40f0:8", ["const:b58354:8", "const:4:8"]]
+ 00b58354 ["CALL", null, ["callee:00497b94:8"]]
- 00b57344 ["COPY", "tmp:0:8", ["const:8cd:8"]]
- 00b57344 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b57344 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b57344 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b58338 ["COPY", "tmp:0:8", ["const:99c:8"]]
+ 00b58338 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b58338 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b58338 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-9b0ed9c08082a9f56564a0a7f9bcb077"></a>

### [`00b579c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b579c8.md) → [`00b589bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b589bc.md) _ZN8firebase4util19GetThreadsafeJNIEnvEP7_JavaVM

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md) · 呼出先 4件 [`00b579b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b579b4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58210.md) [`00c5b790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b790.md)
- 新版 呼出元 1件 [`00c5c460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c460.md) · 呼出先 4件 [`00b589a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b589a8.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c591e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591e0.md) [`00c5c760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c760.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b589e4",
      "incomplete_value": true,
      "site": "00b589ec",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:7d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b579f0",
      "incomplete_value": true,
      "site": "00b579f8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:808:8"
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
      "definition_site": "00b589e8",
      "incomplete_value": true,
      "site": "00b589ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b579f4",
      "incomplete_value": true,
      "site": "00b579f8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:7e0:8"
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
      "00b589e4",
      "READ",
      [
        "storage",
        "00c9b808",
        null,
        "pointer"
      ]
    ],
    [
      "00b589e4",
      "PARAM",
      [
        "storage",
        "011260b8",
        "firebase::util::pthread_key_initialized",
        "undefined4"
      ]
    ],
    [
      "00b589e8",
      "READ",
      [
        "storage",
        "00c9b7e0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b589e4",
      "READ",
      [
        "storage",
        "00c9c7d8",
        null,
        "pointer"
      ]
    ],
    [
      "00b589e4",
      "PARAM",
      [
        "storage",
        "01127078",
        "firebase::util::pthread_key_initialized",
        "undefined4"
      ]
    ],
    [
      "00b589e8",
      "READ",
      [
        "storage",
        "00c9c7b0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b579f8 ["INT_ADD", "register:40f0:8", ["const:b579f8:8", "const:4:8"]]
- 00b579f8 ["CALL", null, ["callee:00c5c760:8"]]
+ 00b589ec ["INT_ADD", "register:40f0:8", ["const:b589ec:8", "const:4:8"]]
+ 00b589ec ["CALL", null, ["callee:00c5c760:8"]]
- 00b579e4 ["COPY", "register:4000:8", ["const:c9b000:8"]]
+ 00b589d8 ["COPY", "register:4000:8", ["const:c9c000:8"]]
- 00b579e8 ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 00b589dc ["COPY", "register:4008:8", ["const:c9c000:8"]]
~~~


<a id="compare-1edfb01ed408a0480b461dde1525f5f0"></a>

### [`00b58aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58aa4.md) → [`00b59a98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59a98.md) Java_com_google_firebase_app_internal_cpp_Log_nativeLog

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md) [`00c5b190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b190.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bfc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfc0.md) [`00c5c160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c160.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b59b24",
      "incomplete_value": true,
      "site": "00b59b28",
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
            "const:191:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b58b30",
      "incomplete_value": true,
      "site": "00b58b34",
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
            "const:39:8"
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
      "00b59b04",
      "DATA",
      [
        "storage",
        "002e1a18",
        null,
        null
      ]
    ],
    [
      "00b59b24",
      "PARAM",
      [
        "storage",
        "002a6039",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b59b04",
      "DATA",
      [
        "storage",
        "002e1a58",
        null,
        null
      ]
    ],
    [
      "00b59b24",
      "PARAM",
      [
        "storage",
        "002a6191",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b58b34 ["INT_ADD", "register:40f0:8", ["const:b58b34:8", "const:4:8"]]
- 00b58b34 ["CALL", null, ["callee:00c5c160:8"]]
+ 00b59b28 ["INT_ADD", "register:40f0:8", ["const:b59b28:8", "const:4:8"]]
+ 00b59b28 ["CALL", null, ["callee:00c5c160:8"]]
- 00b58ae0 ["INT_ADD", "register:40f0:8", ["const:b58ae0:8", "const:4:8"]]
- 00b58ae0 ["CALL", null, ["callee:00c5bfc0:8"]]
+ 00b59ad4 ["INT_ADD", "register:40f0:8", ["const:b59ad4:8", "const:4:8"]]
+ 00b59ad4 ["CALL", null, ["callee:00c5bfc0:8"]]
- 00b58af4 ["INT_ADD", "register:40f0:8", ["const:b58af4:8", "const:4:8"]]
- 00b58af4 ["CALL", null, ["callee:00c5bfc0:8"]]
+ 00b59ae8 ["INT_ADD", "register:40f0:8", ["const:b59ae8:8", "const:4:8"]]
+ 00b59ae8 ["CALL", null, ["callee:00c5bfc0:8"]]
~~~


<a id="compare-2adb8f9422f5ef0c0d6b692f922092ea"></a>

### [`00b590dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b590dc.md) → [`00b5a0d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5a/00b5a0d0.md) _ZN8firebase10app_common6AddAppEPNS_3AppEPNSt6__ndk13mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS_10InitResultENS3_4l

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b820.md) · 呼出先 20件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c5c7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c7f0.md) · 呼出先 20件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination, store_value

命令の説明率　旧版 97.29% / 新版 97.29%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 3件, `store_condition` 4件, `store_destination` 1件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5a174",
      "incomplete_value": false,
      "site": "00b5a174",
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
            "const:90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b59180",
      "incomplete_value": false,
      "site": "00b59180",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b5a1b0",
      "incomplete_value": true,
      "site": "00b5a1b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b591bc",
      "incomplete_value": true,
      "site": "00b591bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:10:8"
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
      "definition_site": "00b5a1b0",
      "incomplete_value": true,
      "site": "00b5a1b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b591bc",
      "incomplete_value": true,
      "site": "00b591bc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
      "00b5a120",
      "PARAM",
      [
        "storage",
        "002ad0ad",
        null,
        "string"
      ]
    ],
    [
      "00b5a140",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a164",
      "PARAM",
      [
        "storage",
        "002b5972",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b5a120",
      "PARAM",
      [
        "storage",
        "002ad17a",
        null,
        "string"
      ]
    ],
    [
      "00b5a140",
      "READ",
      [
        "storage",
        "01127080",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a164",
      "PARAM",
      [
        "storage",
        "002b5a41",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b59130 ["INT_ADD", "register:40f0:8", ["const:b59130:8", "const:4:8"]]
- 00b59130 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b5a124 ["INT_ADD", "register:40f0:8", ["const:b5a124:8", "const:4:8"]]
+ 00b5a124 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b59154 ["INT_ADD", "register:40f0:8", ["const:b59154:8", "const:4:8"]]
- 00b59154 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5a148 ["INT_ADD", "register:40f0:8", ["const:b5a148:8", "const:4:8"]]
+ 00b5a148 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b59174 ["INT_ADD", "register:40f0:8", ["const:b59174:8", "const:4:8"]]
- 00b59174 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00b5a168 ["INT_ADD", "register:40f0:8", ["const:b5a168:8", "const:4:8"]]
+ 00b5a168 ["CALL", null, ["callee:00c5c8f0:8"]]
~~~


<a id="compare-660b944b0098aa01ffe1171febc231e1"></a>

### [`00b59450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b59450.md) → [`00b5a444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5a/00b5a444.md) _ZN8firebase10app_common13FindAppByNameEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7c0.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c5c790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c790.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `branch_value` 1件, `store_condition` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5a488",
      "incomplete_value": true,
      "site": "00b5a488",
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
      "definition_site": "00b59494",
      "incomplete_value": true,
      "site": "00b59494",
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
      "definition_site": "00b5a478",
      "incomplete_value": true,
      "site": "00b5a47c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b59484",
      "incomplete_value": true,
      "site": "00b59488",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c0:8"
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b59494"
      ],
      [
        "FALL_THROUGH",
        "00b5a488"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b5a488",
      "incomplete_value": true,
      "site": "00b5a490",
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
      "definition_site": "00b59494",
      "incomplete_value": true,
      "site": "00b5949c",
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
    "ordinal": 11,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b5a474",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a484",
      "READ",
      [
        "storage",
        "011260d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a51c",
      "READ",
      [
        "storage",
        "011260d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5a474",
      "READ",
      [
        "storage",
        "01127080",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a484",
      "READ",
      [
        "storage",
        "01127098",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a51c",
      "READ",
      [
        "storage",
        "01127098",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b59488 ["INT_ADD", "register:40f0:8", ["const:b59488:8", "const:4:8"]]
- 00b59488 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5a47c ["INT_ADD", "register:40f0:8", ["const:b5a47c:8", "const:4:8"]]
+ 00b5a47c ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5947c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00b5a470 ["COPY", "register:4040:8", ["const:1127000:8"]]
- 00b59480 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c0:8"]]
- 00b59480 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5a474 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:80:8"]]
+ 00b5a474 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6f20956963370909ab9bfc72332ca856"></a>

### [`00b59588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b59588.md) → [`00b5a57c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5a/00b5a57c.md) _ZN8firebase10app_common16IsDefaultAppNameEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b800.md) · 呼出先 1件 [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)
- 新版 呼出元 1件 [`00c5c7d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c7d0.md) · 呼出先 1件 [`00c5c8f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5a58c",
      "incomplete_value": false,
      "site": "00b5a590",
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
            "const:a41:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b59598",
      "incomplete_value": false,
      "site": "00b5959c",
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
            "const:972:8"
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
      "00b5a58c",
      "PARAM",
      [
        "storage",
        "002b5972",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b5a58c",
      "PARAM",
      [
        "storage",
        "002b5a41",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5959c ["INT_ADD", "register:40f0:8", ["const:b5959c:8", "const:4:8"]]
- 00b5959c ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00b5a590 ["INT_ADD", "register:40f0:8", ["const:b5a590:8", "const:4:8"]]
+ 00b5a590 ["CALL", null, ["callee:00c5c8f0:8"]]
- 00b59598 ["COPY", "tmp:0:8", ["const:972:8"]]
- 00b59598 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b59598 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b59598 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b5a58c ["COPY", "tmp:0:8", ["const:a41:8"]]
+ 00b5a58c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b5a58c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b5a58c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-70388e9370b037946d668a220f852ebf"></a>

### [`00b59624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b59624.md) → [`00b5a618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5a/00b5a618.md) _ZN8firebase10app_common10GetAllAppsEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7a0.md) · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 1件 [`00c5c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c770.md) · 呼出先 7件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.36% / 新版 96.36%

優先判定に残った影響 `branch_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5a698",
      "incomplete_value": true,
      "site": "00b5a69c",
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
                "register:40b0:8"
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
      "definition_site": "00b596a4",
      "incomplete_value": true,
      "site": "00b596a8",
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
                "register:40b0:8"
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
      "definition_site": "00b5a648",
      "incomplete_value": true,
      "site": "00b5a654",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b59654",
      "incomplete_value": true,
      "site": "00b59660",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c0:8"
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
      "00b5a638",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a644",
      "READ",
      [
        "storage",
        "011260d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a65c",
      "READ",
      [
        "storage",
        "011260d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5a638",
      "READ",
      [
        "storage",
        "01127080",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a644",
      "READ",
      [
        "storage",
        "01127090",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a65c",
      "READ",
      [
        "storage",
        "01127098",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b59660 ["INT_ADD", "register:40f0:8", ["const:b59660:8", "const:4:8"]]
- 00b59660 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5a654 ["INT_ADD", "register:40f0:8", ["const:b5a654:8", "const:4:8"]]
+ 00b5a654 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b59640 ["COPY", "register:4048:8", ["const:1126000:8"]]
+ 00b5a634 ["COPY", "register:4048:8", ["const:1127000:8"]]
- 00b59644 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c0:8"]]
- 00b59644 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5a638 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:80:8"]]
+ 00b5a638 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8f5b217956cc9f5fe65731c08a8d7946"></a>

### [`00b597dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b597dc.md) → [`00b5a7d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5a/00b5a7d0.md) _ZN8firebase10app_common9RemoveAppEPNS_3AppE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b830.md) · 呼出先 16件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c800.md) · 呼出先 16件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 90.15% / 新版 90.15%

優先判定に残った影響 `branch_value` 3件, `call_argument_candidate` 2件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 2件, `call_argument_candidate` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5a928",
      "incomplete_value": true,
      "site": "00b5a928",
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
            "const:90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b59934",
      "incomplete_value": true,
      "site": "00b59934",
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
    "ordinal": 21,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5a994",
      "incomplete_value": true,
      "site": "00b5a994",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d8:8"
          ],
          [
            "leaf",
            "const:98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b599a0",
      "incomplete_value": true,
      "site": "00b599a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d8:8"
          ],
          [
            "leaf",
            "const:d8:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5a818",
      "incomplete_value": true,
      "site": "00b5a818",
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
      "definition_site": "00b59824",
      "incomplete_value": true,
      "site": "00b59824",
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
      "00b5a804",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a814",
      "READ",
      [
        "storage",
        "011260d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a8c4",
      "READ",
      [
        "storage",
        "011260d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5a804",
      "READ",
      [
        "storage",
        "01127080",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a814",
      "READ",
      [
        "storage",
        "01127098",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5a8c4",
      "READ",
      [
        "storage",
        "01127098",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b59818 ["INT_ADD", "register:40f0:8", ["const:b59818:8", "const:4:8"]]
- 00b59818 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5a80c ["INT_ADD", "register:40f0:8", ["const:b5a80c:8", "const:4:8"]]
+ 00b5a80c ["CALL", null, ["callee:00c5baa0:8"]]
- 00b59900 ["INT_ADD", "register:40f0:8", ["const:b59900:8", "const:4:8"]]
- 00b59900 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00b5a8f4 ["INT_ADD", "register:40f0:8", ["const:b5a8f4:8", "const:4:8"]]
+ 00b5a8f4 ["CALL", null, ["callee:00c5c1d0:8"]]
- 00b59920 ["INT_ADD", "register:40f0:8", ["const:b59920:8", "const:4:8"]]
- 00b59920 ["CALL", null, ["callee:00c5c8c0:8"]]
+ 00b5a914 ["INT_ADD", "register:40f0:8", ["const:b5a914:8", "const:4:8"]]
+ 00b5a914 ["CALL", null, ["callee:00c5c8c0:8"]]
~~~


<a id="compare-a667d22fa18ebc8e97b3477ff8357051"></a>

### [`00b599ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b599ec.md) → [`00b5a9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5a/00b5a9e0.md) _ZN8firebase10app_common14DestroyAllAppsEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.71% / 新版 97.71%

優先判定に残った影響 `branch_value` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5aa1c",
      "incomplete_value": true,
      "site": "00b5aa1c",
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
      "definition_site": "00b59a28",
      "incomplete_value": true,
      "site": "00b59a28",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5aa4c",
      "incomplete_value": true,
      "site": "00b5aa50",
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
                "register:40d8:8"
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
      "definition_site": "00b59a58",
      "incomplete_value": true,
      "site": "00b59a5c",
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
                "register:40d8:8"
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
      "definition_site": "00b5aa0c",
      "incomplete_value": true,
      "site": "00b5aa10",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b59a18",
      "incomplete_value": true,
      "site": "00b59a1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c0:8"
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
      "00b5aa00",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5aa08",
      "READ",
      [
        "storage",
        "011260d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5aa18",
      "READ",
      [
        "storage",
        "011260d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5aa00",
      "READ",
      [
        "storage",
        "01127080",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5aa08",
      "READ",
      [
        "storage",
        "01127090",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5aa18",
      "READ",
      [
        "storage",
        "01127098",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b59a1c ["INT_ADD", "register:40f0:8", ["const:b59a1c:8", "const:4:8"]]
- 00b59a1c ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5aa10 ["INT_ADD", "register:40f0:8", ["const:b5aa10:8", "const:4:8"]]
+ 00b5aa10 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b59a08 ["COPY", "register:4048:8", ["const:1126000:8"]]
+ 00b5a9fc ["COPY", "register:4048:8", ["const:1127000:8"]]
- 00b59a0c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c0:8"]]
- 00b59a0c ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5aa00 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:80:8"]]
+ 00b5aa00 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f0edb22cdb92358e03a8329e655efd7b"></a>

### [`00b59ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b59ca8.md) → [`00b5ac9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5a/00b5ac9c.md) _ZN8firebase10app_common15RegisterLibraryEPKcS2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7f0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7d0.md) [`00c5b7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7e0.md)
- 新版 呼出元 1件 [`00c5c7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c7c0.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c7a0.md) [`00c5c7b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c7b0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 92.11% / 新版 92.11%

優先判定に残った影響 `branch_value` 1件, `store_condition` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5acd4",
      "incomplete_value": true,
      "site": "00b5acd4",
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
      "definition_site": "00b59ce0",
      "incomplete_value": true,
      "site": "00b59ce0",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b59ce0"
      ],
      [
        "FALL_THROUGH",
        "00b5acd4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b5acd4",
      "incomplete_value": true,
      "site": "00b5ace8",
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
      "definition_site": "00b59ce0",
      "incomplete_value": true,
      "site": "00b59cf4",
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
    "ordinal": 7,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b59ce0"
      ],
      [
        "FALL_THROUGH",
        "00b5acd4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b5acd4",
      "incomplete_value": true,
      "site": "00b5ace8",
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
      "definition_site": "00b59ce0",
      "incomplete_value": true,
      "site": "00b59cf4",
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
      "00b5acb4",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5accc",
      "READ",
      [
        "storage",
        "00c9b820",
        null,
        "pointer"
      ]
    ],
    [
      "00b5acd0",
      "READ",
      [
        "storage",
        "011260c8",
        "firebase::app_common::LibraryRegistry::library_registry_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5acb4",
      "READ",
      [
        "storage",
        "01127080",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5accc",
      "READ",
      [
        "storage",
        "00c9c7f0",
        null,
        "pointer"
      ]
    ],
    [
      "00b5acd0",
      "READ",
      [
        "storage",
        "01127088",
        "firebase::app_common::LibraryRegistry::library_registry_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b59cbc ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00b5acb0 ["COPY", "register:4040:8", ["const:1127000:8"]]
- 00b59cc0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c0:8"]]
- 00b59cc0 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5acb4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:80:8"]]
+ 00b5acb4 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
- 00b59cd0 ["INT_ADD", "register:40f0:8", ["const:b59cd0:8", "const:4:8"]]
- 00b59cd0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5acc4 ["INT_ADD", "register:40f0:8", ["const:b5acc4:8", "const:4:8"]]
+ 00b5acc4 ["CALL", null, ["callee:00c5baa0:8"]]
~~~


<a id="compare-851b288fbd9c526716c20e04f22c5240"></a>

### [`00b59d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b59d40.md) → [`00b5ad34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5a/00b5ad34.md) _ZN8firebase10app_common15LibraryRegistry15RegisterLibraryEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7d0.md) · 呼出先 12件 [`0046d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d5e8.md) [`00493e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493e08.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5c7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c7a0.md) · 呼出先 12件 [`0046d908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d908.md) [`00494128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494128.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.63% / 新版 99.63%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5afa0",
      "incomplete_value": false,
      "site": "00b5afb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bd000:8"
          ],
          [
            "leaf",
            "const:1d9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b59fac",
      "incomplete_value": false,
      "site": "00b59fbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bd000:8"
          ],
          [
            "leaf",
            "const:fb:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b5afa0",
      "PARAM",
      [
        "storage",
        "002bd0fb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b5afa0",
      "PARAM",
      [
        "storage",
        "002bd1d9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b59fbc ["INT_ADD", "register:40f0:8", ["const:b59fbc:8", "const:4:8"]]
- 00b59fbc ["CALL", null, ["callee:00c5be80:8"]]
+ 00b5afb0 ["INT_ADD", "register:40f0:8", ["const:b5afb0:8", "const:4:8"]]
+ 00b5afb0 ["CALL", null, ["callee:00c5be80:8"]]
- 00b59d84 ["INT_ADD", "register:40f0:8", ["const:b59d84:8", "const:4:8"]]
- 00b59d84 ["CALL", null, ["callee:00c59080:8"]]
+ 00b5ad78 ["INT_ADD", "register:40f0:8", ["const:b5ad78:8", "const:4:8"]]
+ 00b5ad78 ["CALL", null, ["callee:00c59080:8"]]
- 00b59dc0 ["INT_ADD", "register:40f0:8", ["const:b59dc0:8", "const:4:8"]]
- 00b59dc0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b5adb4 ["INT_ADD", "register:40f0:8", ["const:b5adb4:8", "const:4:8"]]
+ 00b5adb4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-e2093f3038ec636248b205b7aaabc6cd"></a>

### [`00b5a52c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5a52c.md) → [`00b5b520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5b/00b5b520.md) _ZN8firebase10app_common16RegisterSdkUsageEPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b810.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b880.md)
- 新版 呼出元 1件 [`00c5c7e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c7e0.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c850.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 7件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 4件, `store_condition` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5b550",
      "incomplete_value": true,
      "site": "00b5b550",
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
      "definition_site": "00b5a55c",
      "incomplete_value": true,
      "site": "00b5a55c",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5b53c",
      "incomplete_value": true,
      "site": "00b5b540",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5a548",
      "incomplete_value": true,
      "site": "00b5a54c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c0:8"
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
      "definition_site": "00b5b58c",
      "incomplete_value": false,
      "site": "00b5b598",
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
            "const:6ad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5a598",
      "incomplete_value": false,
      "site": "00b5a5a4",
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
            "const:5e0:8"
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
      "00b5b534",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5b548",
      "READ",
      [
        "storage",
        "00c9b820",
        null,
        "pointer"
      ]
    ],
    [
      "00b5b54c",
      "READ",
      [
        "storage",
        "011260c8",
        "firebase::app_common::LibraryRegistry::library_registry_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5b534",
      "READ",
      [
        "storage",
        "01127080",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5b548",
      "READ",
      [
        "storage",
        "00c9c7f0",
        null,
        "pointer"
      ]
    ],
    [
      "00b5b54c",
      "READ",
      [
        "storage",
        "01127088",
        "firebase::app_common::LibraryRegistry::library_registry_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5a54c ["INT_ADD", "register:40f0:8", ["const:b5a54c:8", "const:4:8"]]
- 00b5a54c ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5b540 ["INT_ADD", "register:40f0:8", ["const:b5b540:8", "const:4:8"]]
+ 00b5b540 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5a5a4 ["INT_ADD", "register:40f0:8", ["const:b5a5a4:8", "const:4:8"]]
- 00b5a5a4 ["CALL", null, ["callee:00c5c850:8"]]
+ 00b5b598 ["INT_ADD", "register:40f0:8", ["const:b5b598:8", "const:4:8"]]
+ 00b5b598 ["CALL", null, ["callee:00c5c850:8"]]
- 00b5a5c0 ["INT_ADD", "register:40f0:8", ["const:b5a5c0:8", "const:4:8"]]
- 00b5a5c0 ["CALL", null, ["callee:00c5c850:8"]]
+ 00b5b5b4 ["INT_ADD", "register:40f0:8", ["const:b5b5b4:8", "const:4:8"]]
+ 00b5b5b4 ["CALL", null, ["callee:00c5c850:8"]]
~~~


<a id="compare-0f6cfd31f9507ad811842cd4f795c742"></a>

### [`00b5a63c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5a63c.md) → [`00b5b630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5b/00b5b630.md) _ZN8firebase10app_common12GetUserAgentEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7b0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 1件 [`00c5c780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c780.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `branch_value` 1件, `store_condition` 8件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5b658",
      "incomplete_value": true,
      "site": "00b5b658",
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
      "definition_site": "00b5a664",
      "incomplete_value": true,
      "site": "00b5a664",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5b644",
      "incomplete_value": true,
      "site": "00b5b648",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5a650",
      "incomplete_value": true,
      "site": "00b5a654",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c0:8"
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b5a664"
      ],
      [
        "FALL_THROUGH",
        "00b5b658"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b5b658",
      "incomplete_value": true,
      "site": "00b5b668",
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
      "definition_site": "00b5a664",
      "incomplete_value": true,
      "site": "00b5a674",
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
      "00b5b640",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5b650",
      "READ",
      [
        "storage",
        "00c9b820",
        null,
        "pointer"
      ]
    ],
    [
      "00b5b654",
      "READ",
      [
        "storage",
        "011260c8",
        "firebase::app_common::LibraryRegistry::library_registry_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5b640",
      "READ",
      [
        "storage",
        "01127080",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5b650",
      "READ",
      [
        "storage",
        "00c9c7f0",
        null,
        "pointer"
      ]
    ],
    [
      "00b5b654",
      "READ",
      [
        "storage",
        "01127088",
        "firebase::app_common::LibraryRegistry::library_registry_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5a654 ["INT_ADD", "register:40f0:8", ["const:b5a654:8", "const:4:8"]]
- 00b5a654 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5b648 ["INT_ADD", "register:40f0:8", ["const:b5b648:8", "const:4:8"]]
+ 00b5b648 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5a648 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00b5b63c ["COPY", "register:4040:8", ["const:1127000:8"]]
- 00b5a64c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c0:8"]]
- 00b5a64c ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5b640 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:80:8"]]
+ 00b5b640 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-956de8374dd98b3667898e161c70a160"></a>

### [`00b5ab18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ab18.md) → [`00b5bb0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5b/00b5bb0c.md) _ZN8firebase10app_common19FindAppLoggerByNameEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `branch_value` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5bb50",
      "incomplete_value": true,
      "site": "00b5bb50",
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
      "definition_site": "00b5ab5c",
      "incomplete_value": true,
      "site": "00b5ab5c",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5bbec",
      "incomplete_value": true,
      "site": "00b5bbf0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
              [
                "live",
                "register:40a0:8"
              ]
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
      "definition_site": "00b5abf8",
      "incomplete_value": true,
      "site": "00b5abfc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
              [
                "live",
                "register:40a0:8"
              ]
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5bb40",
      "incomplete_value": true,
      "site": "00b5bb44",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5ab4c",
      "incomplete_value": true,
      "site": "00b5ab50",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c0:8"
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
      "00b5bb3c",
      "READ",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5bb4c",
      "READ",
      [
        "storage",
        "011260d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5bbe4",
      "READ",
      [
        "storage",
        "011260d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5bb3c",
      "READ",
      [
        "storage",
        "01127080",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5bb4c",
      "READ",
      [
        "storage",
        "01127098",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5bbe4",
      "READ",
      [
        "storage",
        "01127098",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5ab50 ["INT_ADD", "register:40f0:8", ["const:b5ab50:8", "const:4:8"]]
- 00b5ab50 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5bb44 ["INT_ADD", "register:40f0:8", ["const:b5bb44:8", "const:4:8"]]
+ 00b5bb44 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5ab44 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00b5bb38 ["COPY", "register:4040:8", ["const:1127000:8"]]
- 00b5ab48 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c0:8"]]
- 00b5ab48 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5bb3c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:80:8"]]
+ 00b5bb3c ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-74512c6717c08367577f5f2f89ab3652"></a>

### [`00b5b258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b258.md) → [`00b5c24c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c24c.md) _INIT_279

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00b5b2a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b2a8.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00b5c29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c29c.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5bd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd20.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5c290",
      "incomplete_value": false,
      "site": "00b5c290",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5b29c",
      "incomplete_value": false,
      "site": "00b5b29c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:c0:8"
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
      "definition_site": "00b5c260",
      "incomplete_value": true,
      "site": "00b5c270",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:790:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5b26c",
      "incomplete_value": true,
      "site": "00b5b27c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:7c0:8"
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
      "definition_site": "00b5c264",
      "incomplete_value": true,
      "site": "00b5c270",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5b270",
      "incomplete_value": true,
      "site": "00b5b27c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
      "00b5c260",
      "READ",
      [
        "storage",
        "00c9b7c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b5c260",
      "PARAM",
      [
        "storage",
        "00b5b2a8",
        "firebase::Logger::~Logger",
        null
      ]
    ],
    [
      "00b5c264",
      "READ",
      [
        "storage",
        "00c9b828",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5c260",
      "READ",
      [
        "storage",
        "00c9c790",
        null,
        "pointer"
      ]
    ],
    [
      "00b5c260",
      "PARAM",
      [
        "storage",
        "00b5c29c",
        "firebase::Logger::~Logger",
        null
      ]
    ],
    [
      "00b5c264",
      "READ",
      [
        "storage",
        "00c9c7f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5b27c ["INT_ADD", "register:40f0:8", ["const:b5b27c:8", "const:4:8"]]
- 00b5b27c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b5c270 ["INT_ADD", "register:40f0:8", ["const:b5c270:8", "const:4:8"]]
+ 00b5c270 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b5b29c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c0:8"]]
- 00b5b29c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
+ 00b5c290 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:80:8"]]
+ 00b5c290 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00b5b264 ["COPY", "register:4000:8", ["const:c9b000:8"]]
+ 00b5c258 ["COPY", "register:4000:8", ["const:c9c000:8"]]
~~~


<a id="compare-a40e8e5ae11e6a4f3cf666ca05cb8132"></a>

### [`00b5b9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b9e0.md) → [`00b5c9d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c9d4.md) _ZN8firebase8callback10InitializeEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8a0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)
- 新版 呼出元 1件 [`00c5c870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c870.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd20.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5ca34",
      "incomplete_value": false,
      "site": "00b5ca34",
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
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5ba40",
      "incomplete_value": false,
      "site": "00b5ba40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5ca3c",
      "incomplete_value": true,
      "site": "00b5ca3c",
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
            "const:a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5ba48",
      "incomplete_value": true,
      "site": "00b5ba48",
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
            "const:e8:8"
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
      "definition_site": "00b5c9ec",
      "incomplete_value": true,
      "site": "00b5c9f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5b9f8",
      "incomplete_value": true,
      "site": "00b5b9fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e0:8"
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
      "00b5c9e8",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5c9f8",
      "READ",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5ca2c",
      "READ",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b5c9e8",
      "READ",
      [
        "storage",
        "011270a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5c9f8",
      "READ",
      [
        "storage",
        "011270a8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5ca2c",
      "READ",
      [
        "storage",
        "011270a8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5b9fc ["INT_ADD", "register:40f0:8", ["const:b5b9fc:8", "const:4:8"]]
- 00b5b9fc ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5c9f0 ["INT_ADD", "register:40f0:8", ["const:b5c9f0:8", "const:4:8"]]
+ 00b5c9f0 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5ba40 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:f0:8"]]
- 00b5ba40 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
+ 00b5ca34 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:b0:8"]]
+ 00b5ca34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
- 00b5ba48 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e8:8"]]
- 00b5ba48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00b5ca3c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a8:8"]]
+ 00b5ca3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
~~~


<a id="compare-2bbd95919b38ddbcf5724343c172ea95"></a>

### [`00b5bbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bbd0.md) → [`00b5cbc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5cbc4.md) FUN_00b5cbc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00b5ba74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5ba74.md) [`00b5bfa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bfa8.md) [`00b5c0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c0d4.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md)
- 新版 呼出元 3件 [`00b5ca68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5ca68.md) [`00b5cf9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5cf9c.md) [`00b5d0c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5d/00b5d0c8.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be80.md) [`00c5c1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5cbf8",
      "incomplete_value": true,
      "site": "00b5cbf8",
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
            "const:a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bc04",
      "incomplete_value": true,
      "site": "00b5bc04",
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
            "const:e8:8"
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
      "definition_site": "00b5cc18",
      "incomplete_value": true,
      "site": "00b5cc18",
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
            "const:a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bc24",
      "incomplete_value": true,
      "site": "00b5bc24",
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
            "const:e8:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5cc2c",
      "incomplete_value": false,
      "site": "00b5cc2c",
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
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bc38",
      "incomplete_value": false,
      "site": "00b5bc38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:f0:8"
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
      "00b5cbd8",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5cbec",
      "READ",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5cbf8",
      "WRITE",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b5cbd8",
      "READ",
      [
        "storage",
        "011270a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5cbec",
      "READ",
      [
        "storage",
        "011270a8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5cbf8",
      "WRITE",
      [
        "storage",
        "011270a8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5bbf0 ["INT_ADD", "register:40f0:8", ["const:b5bbf0:8", "const:4:8"]]
- 00b5bbf0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5cbe4 ["INT_ADD", "register:40f0:8", ["const:b5cbe4:8", "const:4:8"]]
+ 00b5cbe4 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5bc04 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e8:8"]]
- 00b5bc04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4008:4"]]
+ 00b5cbf8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a8:8"]]
+ 00b5cbf8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4008:4"]]
- 00b5bc14 ["INT_ADD", "register:40f0:8", ["const:b5bc14:8", "const:4:8"]]
- 00b5bc14 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00b5cc08 ["INT_ADD", "register:40f0:8", ["const:b5cc08:8", "const:4:8"]]
+ 00b5cc08 ["CALL", null, ["callee:00c5c1d0:8"]]
~~~


<a id="compare-e8e9ae3e6c53c48d5aeb9664b74eaf9e"></a>

### [`00b5bc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bc90.md) → [`00b5cc84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5cc84.md) _ZN8firebase8callback11AddCallbackEPNS0_8CallbackE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5bbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bbc0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md) [`00c5bbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bbe0.md)
- 新版 呼出元 1件 [`00c5cb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cb90.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd20.md) [`00c5cbb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cbb0.md)

変更の種類 call, call_argument_candidate, call_count, constant, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment

命令の説明率　旧版 84.78% / 新版 84.78%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 2件, `unresolved_call_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5ccf8",
      "incomplete_value": true,
      "site": "00b5ccf8",
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
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bd04",
      "incomplete_value": true,
      "site": "00b5bd04",
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
            "const:f0:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5cd04",
      "incomplete_value": true,
      "site": "00b5cd04",
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
            "const:a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bd10",
      "incomplete_value": true,
      "site": "00b5bd10",
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
            "const:e8:8"
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
      "definition_site": "00b5cca4",
      "incomplete_value": true,
      "site": "00b5cca8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bcb0",
      "incomplete_value": true,
      "site": "00b5bcb4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e0:8"
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
      "00b5cc9c",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5ccac",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5ccbc",
      "READ",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b5cc9c",
      "READ",
      [
        "storage",
        "011270a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5ccac",
      "READ",
      [
        "storage",
        "011270a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5ccbc",
      "READ",
      [
        "storage",
        "011270a8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5bcb4 ["INT_ADD", "register:40f0:8", ["const:b5bcb4:8", "const:4:8"]]
- 00b5bcb4 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5cca8 ["INT_ADD", "register:40f0:8", ["const:b5cca8:8", "const:4:8"]]
+ 00b5cca8 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5bcc0 ["INT_ADD", "register:40f0:8", ["const:b5bcc0:8", "const:4:8"]]
- 00b5bcc0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5ccb4 ["INT_ADD", "register:40f0:8", ["const:b5ccb4:8", "const:4:8"]]
+ 00b5ccb4 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5bd04 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:f0:8"]]
- 00b5bd04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b0:8"]]
+ 00b5ccf8 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:b0:8"]]
+ 00b5ccf8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b0:8"]]
~~~


<a id="compare-1384cbcd27f43f629c5f5ba178eb807a"></a>

### [`00b5bfa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bfa8.md) → [`00b5cf9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5cf9c.md) _ZN8firebase8callback14RemoveCallbackEPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00b5bbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bbd0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00b5cbc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5cbc4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd20.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.33% / 新版 85.33%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5d020",
      "incomplete_value": true,
      "site": "00b5d020",
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
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5c02c",
      "incomplete_value": true,
      "site": "00b5c02c",
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
            "const:f0:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5d02c",
      "incomplete_value": true,
      "site": "00b5d02c",
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
            "const:a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5c038",
      "incomplete_value": true,
      "site": "00b5c038",
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
            "const:e8:8"
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
      "definition_site": "00b5cfc0",
      "incomplete_value": true,
      "site": "00b5cfc4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5bfcc",
      "incomplete_value": true,
      "site": "00b5bfd0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e0:8"
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
      "00b5cfb8",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5cfcc",
      "READ",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5cfd8",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5cfb8",
      "READ",
      [
        "storage",
        "011270a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5cfcc",
      "READ",
      [
        "storage",
        "011270a8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5cfd8",
      "READ",
      [
        "storage",
        "011270a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5bfd0 ["INT_ADD", "register:40f0:8", ["const:b5bfd0:8", "const:4:8"]]
- 00b5bfd0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5cfc4 ["INT_ADD", "register:40f0:8", ["const:b5cfc4:8", "const:4:8"]]
+ 00b5cfc4 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5bfec ["INT_ADD", "register:40f0:8", ["const:b5bfec:8", "const:4:8"]]
- 00b5bfec ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5cfe0 ["INT_ADD", "register:40f0:8", ["const:b5cfe0:8", "const:4:8"]]
+ 00b5cfe0 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5c02c ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:f0:8"]]
- 00b5c02c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b0:8"]]
+ 00b5d020 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:b0:8"]]
+ 00b5d020 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b0:8"]]
~~~


<a id="compare-cdd376e5cf6f87758360518358f0a0ce"></a>

### [`00b5c0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c0d4.md) → [`00b5d0c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5d/00b5d0c8.md) _ZN8firebase8callback13PollCallbacksEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`00b5bbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bbd0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c586f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586f0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00b5cbc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5cbc4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c596c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596c0.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 84.75% / 新版 84.75%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 3件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5d144",
      "incomplete_value": true,
      "site": "00b5d144",
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
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5c150",
      "incomplete_value": true,
      "site": "00b5c150",
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
            "const:f0:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5d150",
      "incomplete_value": true,
      "site": "00b5d150",
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
            "const:a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5c15c",
      "incomplete_value": true,
      "site": "00b5c15c",
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
            "const:e8:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5d16c",
      "incomplete_value": false,
      "site": "00b5d16c",
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
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5c178",
      "incomplete_value": false,
      "site": "00b5c178",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:100:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b5d0e0",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5d0f0",
      "READ",
      [
        "storage",
        "011260e8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5d0fc",
      "READ",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5d0e0",
      "READ",
      [
        "storage",
        "011270a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5d0f0",
      "READ",
      [
        "storage",
        "011270a8",
        null,
        "undefined4"
      ]
    ],
    [
      "00b5d0fc",
      "READ",
      [
        "storage",
        "011270a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c0f4 ["INT_ADD", "register:40f0:8", ["const:b5c0f4:8", "const:4:8"]]
- 00b5c0f4 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5d0e8 ["INT_ADD", "register:40f0:8", ["const:b5d0e8:8", "const:4:8"]]
+ 00b5d0e8 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5c110 ["INT_ADD", "register:40f0:8", ["const:b5c110:8", "const:4:8"]]
- 00b5c110 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5d104 ["INT_ADD", "register:40f0:8", ["const:b5d104:8", "const:4:8"]]
+ 00b5d104 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5c150 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:f0:8"]]
- 00b5c150 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
+ 00b5d144 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:b0:8"]]
+ 00b5d144 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-4e7574edfcb5304edd312a9f31f70dcc"></a>

### [`00b5c2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c2f8.md) → [`00b5d2ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5d/00b5d2ec.md) _ZN8firebase8callback18CallbackDispatcherD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5bc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc10.md) · 呼出先 6件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md)
- 新版 呼出元 1件 [`00c5cbe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cbe0.md) · 呼出先 6件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.02% / 新版 99.02%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5d318",
      "incomplete_value": false,
      "site": "00b5d31c",
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
            "const:1d3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5c324",
      "incomplete_value": false,
      "site": "00b5c328",
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
            "const:106:8"
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
      "00b5d318",
      "PARAM",
      [
        "storage",
        "002ae106",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b5d318",
      "PARAM",
      [
        "storage",
        "002ae1d3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c328 ["INT_ADD", "register:40f0:8", ["const:b5c328:8", "const:4:8"]]
- 00b5c328 ["CALL", null, ["callee:00c5be80:8"]]
+ 00b5d31c ["INT_ADD", "register:40f0:8", ["const:b5d31c:8", "const:4:8"]]
+ 00b5d31c ["CALL", null, ["callee:00c5be80:8"]]
- 00b5c314 ["INT_ADD", "register:40f0:8", ["const:b5c314:8", "const:4:8"]]
- 00b5c314 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5d308 ["INT_ADD", "register:40f0:8", ["const:b5d308:8", "const:4:8"]]
+ 00b5d308 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5c324 ["COPY", "tmp:0:8", ["const:106:8"]]
- 00b5c324 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b5c324 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b5c324 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b5d318 ["COPY", "tmp:0:8", ["const:1d3:8"]]
+ 00b5d318 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b5d318 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b5d318 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-cc3167d08b53087f02d9c0a41ea7a602"></a>

### [`00b5c490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c490.md) → [`00b5d484`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5d/00b5d484.md) _ZNSt6__ndk120__shared_ptr_emplaceIN8firebase8callback13CallbackEntryENS_9allocatorIS3_EEED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.32% / 新版 90.32%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b5d4a4",
      "incomplete_value": true,
      "site": "00b5d4a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b5c4b0",
      "incomplete_value": true,
      "site": "00b5c4b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b5d49c",
      "READ",
      [
        "storage",
        "00c9b858",
        null,
        "pointer"
      ]
    ],
    [
      "00b5d4a8",
      "DATA",
      [
        "storage",
        "00c903e8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5d49c",
      "READ",
      [
        "storage",
        "00c9c828",
        null,
        "pointer"
      ]
    ],
    [
      "00b5d4a8",
      "DATA",
      [
        "storage",
        "00c913b8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c4a0 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00b5d494 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00b5c4a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:858:8"]]
- 00b5c4a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5d49c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:828:8"]]
+ 00b5d49c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b5c4bc ["INT_ADD", "register:40f0:8", ["const:b5c4bc:8", "const:4:8"]]
- 00b5c4bc ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5d4b0 ["INT_ADD", "register:40f0:8", ["const:b5d4b0:8", "const:4:8"]]
+ 00b5d4b0 ["CALL", null, ["callee:00c5baa0:8"]]
~~~


<a id="compare-4936dd54e218348ccf61a329a40f036c"></a>

### [`00b5c600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c600.md) → [`00b5d5f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5d/00b5d5f4.md) _ZN8firebase8callback16BlockingCallbackD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc50.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5cc20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cc20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b5d610",
      "incomplete_value": true,
      "site": "00b5d614",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b5c61c",
      "incomplete_value": true,
      "site": "00b5c620",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b5d608",
      "READ",
      [
        "storage",
        "00c9b850",
        null,
        "pointer"
      ]
    ],
    [
      "00b5d614",
      "DATA",
      [
        "storage",
        "00c90438",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5d608",
      "READ",
      [
        "storage",
        "00c9c820",
        null,
        "pointer"
      ]
    ],
    [
      "00b5d614",
      "DATA",
      [
        "storage",
        "00c91408",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c60c ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00b5d600 ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 00b5c614 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:850:8"]]
- 00b5c614 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5d608 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:820:8"]]
+ 00b5d608 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00b5c628 ["INT_ADD", "register:40f0:8", ["const:b5c628:8", "const:4:8"]]
- 00b5c628 ["CALL", null, ["callee:00c5cc20:8"]]
+ 00b5d61c ["INT_ADD", "register:40f0:8", ["const:b5d61c:8", "const:4:8"]]
+ 00b5d61c ["CALL", null, ["callee:00c5cc20:8"]]
~~~


<a id="compare-473b994f172320d5144f2038560fc2a1"></a>

### [`00b5c77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c77c.md) → [`00b5d770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5d/00b5d770.md) _INIT_280

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5bd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd20.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b5d79c",
      "incomplete_value": true,
      "site": "00b5d79c",
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
      "definition_site": "00b5c7a8",
      "incomplete_value": true,
      "site": "00b5c7a8",
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
            "const:e0:8"
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
      "definition_site": "00b5d7a0",
      "incomplete_value": false,
      "site": "00b5d7a0",
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
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5c7ac",
      "incomplete_value": false,
      "site": "00b5c7ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:100:8"
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
      "00b5d79c",
      "WRITE",
      [
        "storage",
        "011260e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5d7a0",
      "WRITE",
      [
        "storage",
        "01126100",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b5d79c",
      "WRITE",
      [
        "storage",
        "011270a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b5d7a0",
      "WRITE",
      [
        "storage",
        "011270c0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c7a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e0:8"]]
- 00b5c7a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
+ 00b5d79c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a0:8"]]
+ 00b5d79c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00b5c7ac ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:100:8"]]
- 00b5c7ac ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b5c7ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b5d7a0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c0:8"]]
+ 00b5d7a0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b5d7a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00b5c78c ["INT_ADD", "register:40f0:8", ["const:b5c78c:8", "const:4:8"]]
- 00b5c78c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b5d780 ["INT_ADD", "register:40f0:8", ["const:b5d780:8", "const:4:8"]]
+ 00b5d780 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-93b2494ba9a8c0b943900f98cd5ff674"></a>

### [`00b5c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c990.md) → [`00b5d984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5d/00b5d984.md) _ZN8firebase15CleanupNotifier19UnregisterAllOwnersEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5bc80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc80.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5bc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc70.md)
- 新版 呼出元 1件 [`00c5cc50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cc50.md) · 呼出先 3件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5cc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cc40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.88% / 新版 93.88%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5d9a8",
      "incomplete_value": true,
      "site": "00b5d9ac",
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
      "definition_site": "00b5c9b4",
      "incomplete_value": true,
      "site": "00b5c9b8",
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
      "00b5d99c",
      "READ",
      [
        "storage",
        "00c9b868",
        null,
        "pointer"
      ]
    ],
    [
      "00b5d9a4",
      "READ",
      [
        "storage",
        "01126108",
        "firebase::CleanupNotifier::cleanup_notifiers_by_owner_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b5d9c0",
      "READ",
      [
        "storage",
        "00c9b860",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5d99c",
      "READ",
      [
        "storage",
        "00c9c838",
        null,
        "pointer"
      ]
    ],
    [
      "00b5d9a4",
      "READ",
      [
        "storage",
        "011270c8",
        "firebase::CleanupNotifier::cleanup_notifiers_by_owner_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b5d9c0",
      "READ",
      [
        "storage",
        "00c9c830",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5c9b8 ["INT_ADD", "register:40f0:8", ["const:b5c9b8:8", "const:4:8"]]
- 00b5c9b8 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5d9ac ["INT_ADD", "register:40f0:8", ["const:b5d9ac:8", "const:4:8"]]
+ 00b5d9ac ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5c9a4 ["COPY", "register:40b0:8", ["const:c9b000:8"]]
+ 00b5d998 ["COPY", "register:40b0:8", ["const:c9c000:8"]]
- 00b5c9a8 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:868:8"]]
- 00b5c9a8 ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5d99c ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:838:8"]]
+ 00b5d99c ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1346c5c2f1ff50ef5823c1a7bfecd906"></a>

### [`00b5cc64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5cc64.md) → [`00b5dc58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5d/00b5dc58.md) _ZN8firebase15CleanupNotifier15UnregisterOwnerEPS0_Pv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5bc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc70.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5cc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cc40.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 87.10% / 新版 87.10%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b5dc8c",
      "incomplete_value": true,
      "site": "00b5dc8c",
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
      "definition_site": "00b5cc98",
      "incomplete_value": true,
      "site": "00b5cc98",
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
      "00b5dc68",
      "READ",
      [
        "storage",
        "00c9b868",
        null,
        "pointer"
      ]
    ],
    [
      "00b5dc70",
      "READ",
      [
        "storage",
        "01126108",
        "firebase::CleanupNotifier::cleanup_notifiers_by_owner_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b5dc80",
      "READ",
      [
        "storage",
        "00c9b860",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5dc68",
      "READ",
      [
        "storage",
        "00c9c838",
        null,
        "pointer"
      ]
    ],
    [
      "00b5dc70",
      "READ",
      [
        "storage",
        "011270c8",
        "firebase::CleanupNotifier::cleanup_notifiers_by_owner_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b5dc80",
      "READ",
      [
        "storage",
        "00c9c830",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5cc70 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00b5dc64 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00b5cc74 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:868:8"]]
- 00b5cc74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5dc68 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:838:8"]]
+ 00b5dc68 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b5cc84 ["INT_ADD", "register:40f0:8", ["const:b5cc84:8", "const:4:8"]]
- 00b5cc84 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b5dc78 ["INT_ADD", "register:40f0:8", ["const:b5dc78:8", "const:4:8"]]
+ 00b5dc78 ["CALL", null, ["callee:00c5baa0:8"]]
~~~


<a id="compare-65a17c26606266fe6afbf8ab865612e0"></a>

### [`00b5e9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5e/00b5e9ec.md) → [`00b5f9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5f/00b5f9e0.md) _ZN8firebase17FutureBackingDataD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5bd60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd60.md) · 呼出先 10件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md)
- 新版 呼出元 1件 [`00c5cd30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cd30.md) · 呼出先 10件 [`00b61f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b61/00b61f3c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.76% / 新版 98.76%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b5fa14",
      "incomplete_value": false,
      "site": "00b5fa18",
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
            "const:9d7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5ea20",
      "incomplete_value": false,
      "site": "00b5ea24",
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
            "const:98d:8"
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
      "definition_site": "00b5fa3c",
      "incomplete_value": false,
      "site": "00b5fa40",
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
            "const:631:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5ea48",
      "incomplete_value": false,
      "site": "00b5ea4c",
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
            "const:5e7:8"
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
      "00b5fa14",
      "PARAM",
      [
        "storage",
        "002c098d",
        null,
        "string"
      ]
    ],
    [
      "00b5fa3c",
      "PARAM",
      [
        "storage",
        "002b25e7",
        null,
        "string"
      ]
    ],
    [
      "00b5fa74",
      "READ",
      [
        "storage",
        "00c9b878",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b5fa14",
      "PARAM",
      [
        "storage",
        "002c09d7",
        null,
        "string"
      ]
    ],
    [
      "00b5fa3c",
      "PARAM",
      [
        "storage",
        "002b2631",
        null,
        "string"
      ]
    ],
    [
      "00b5fa74",
      "READ",
      [
        "storage",
        "00c9c848",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5ea24 ["INT_ADD", "register:40f0:8", ["const:b5ea24:8", "const:4:8"]]
- 00b5ea24 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b5fa18 ["INT_ADD", "register:40f0:8", ["const:b5fa18:8", "const:4:8"]]
+ 00b5fa18 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b5ea4c ["INT_ADD", "register:40f0:8", ["const:b5ea4c:8", "const:4:8"]]
- 00b5ea4c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b5fa40 ["INT_ADD", "register:40f0:8", ["const:b5fa40:8", "const:4:8"]]
+ 00b5fa40 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b5ea08 ["INT_ADD", "register:40f0:8", ["const:b5ea08:8", "const:4:8"]]
- 00b5ea08 ["CALL", null, ["callee:00c5cd20:8"]]
+ 00b5f9fc ["INT_ADD", "register:40f0:8", ["const:b5f9fc:8", "const:4:8"]]
+ 00b5f9fc ["CALL", null, ["callee:00c5cd20:8"]]
~~~


<a id="compare-2444888a18cba4c3263690f425e9d747"></a>

### [`00b5ed6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5e/00b5ed6c.md) → [`00b5fd60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5f/00b5fd60.md) _ZN8firebase26ReferenceCountedFutureImplD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c5ad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad20.md) [`00c5bda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bda0.md) · 呼出先 11件 [`00b613bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b613bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md)
- 新版 呼出元 2件 [`00c5bcf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bcf0.md) [`00c5cd70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cd70.md) · 呼出先 11件 [`00b623b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b623b0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.83% / 新版 96.83%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b5fd8c",
      "incomplete_value": true,
      "site": "00b5fd90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b5ed98",
      "incomplete_value": true,
      "site": "00b5ed9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b5fd80",
      "READ",
      [
        "storage",
        "00c9b780",
        null,
        "pointer"
      ]
    ],
    [
      "00b5fd90",
      "DATA",
      [
        "storage",
        "00c90490",
        null,
        "pointer"
      ]
    ],
    [
      "00b5fe40",
      "PARAM",
      [
        "storage",
        "0029f955",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b5fd80",
      "READ",
      [
        "storage",
        "00c9c750",
        null,
        "pointer"
      ]
    ],
    [
      "00b5fd90",
      "DATA",
      [
        "storage",
        "00c91460",
        null,
        "pointer"
      ]
    ],
    [
      "00b5fe40",
      "PARAM",
      [
        "storage",
        "0029f995",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5ed84 ["COPY", "register:4050:8", ["const:c9b000:8"]]
+ 00b5fd78 ["COPY", "register:4050:8", ["const:c9c000:8"]]
- 00b5ed8c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:780:8"]]
- 00b5ed8c ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b5fd80 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:750:8"]]
+ 00b5fd80 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
- 00b5edb4 ["INT_ADD", "register:40f0:8", ["const:b5edb4:8", "const:4:8"]]
- 00b5edb4 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00b5fda8 ["INT_ADD", "register:40f0:8", ["const:b5fda8:8", "const:4:8"]]
+ 00b5fda8 ["CALL", null, ["callee:00c5bab0:8"]]
~~~


<a id="compare-96928cfd0bd52318f6eded6a24f72fd9"></a>

### [`00b5f588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5f588.md) → [`00b6057c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b60/00b6057c.md) _ZN8firebase26ReferenceCountedFutureImpl14CompleteHandleERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md) · 呼出先 3件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b605e4",
      "incomplete_value": false,
      "site": "00b605e8",
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
            "const:d9f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5f5f0",
      "incomplete_value": false,
      "site": "00b5f5f4",
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
            "const:cd0:8"
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
      "definition_site": "00b605fc",
      "incomplete_value": false,
      "site": "00b60600",
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
            "const:5ca:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5f608",
      "incomplete_value": false,
      "site": "00b5f60c",
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
            "const:580:8"
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
      "00b605e4",
      "PARAM",
      [
        "storage",
        "002b7cd0",
        null,
        "string"
      ]
    ],
    [
      "00b605fc",
      "PARAM",
      [
        "storage",
        "002b3580",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b605e4",
      "PARAM",
      [
        "storage",
        "002b7d9f",
        null,
        "string"
      ]
    ],
    [
      "00b605fc",
      "PARAM",
      [
        "storage",
        "002b35ca",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5f5f4 ["INT_ADD", "register:40f0:8", ["const:b5f5f4:8", "const:4:8"]]
- 00b5f5f4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b605e8 ["INT_ADD", "register:40f0:8", ["const:b605e8:8", "const:4:8"]]
+ 00b605e8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b5f60c ["INT_ADD", "register:40f0:8", ["const:b5f60c:8", "const:4:8"]]
- 00b5f60c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b60600 ["INT_ADD", "register:40f0:8", ["const:b60600:8", "const:4:8"]]
+ 00b60600 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b5f5a8 ["INT_ADD", "register:40f0:8", ["const:b5f5a8:8", "const:4:8"]]
- 00b5f5a8 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b6059c ["INT_ADD", "register:40f0:8", ["const:b6059c:8", "const:4:8"]]
+ 00b6059c ["CALL", null, ["callee:00c5baa0:8"]]
~~~


<a id="compare-d7f2483162abdf394021c7d3f6b27fe4"></a>

### [`00b5f6bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5f6bc.md) → [`00b606b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b60/00b606b0.md) _ZN8firebase26ReferenceCountedFutureImpl27ReleaseMutexAndRunCallbacksERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5af60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af60.md) · 呼出先 10件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 1件 [`00c5bf30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf30.md) · 呼出先 10件 [`00b61f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b61/00b61f3c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.51% / 新版 99.51%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6073c",
      "incomplete_value": false,
      "site": "00b60740",
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
            "const:d9f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5f748",
      "incomplete_value": false,
      "site": "00b5f74c",
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
            "const:cd0:8"
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
      "definition_site": "00b607a0",
      "incomplete_value": false,
      "site": "00b607ac",
      "value": [
        "leaf",
        "const:b61f3c:8"
      ]
    },
    "old": {
      "definition_site": "00b5f7ac",
      "incomplete_value": false,
      "site": "00b5f7b8",
      "value": [
        "leaf",
        "const:b60f48:8"
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
      "00b6073c",
      "PARAM",
      [
        "storage",
        "002b7cd0",
        null,
        "string"
      ]
    ],
    [
      "00b607a0",
      "PARAM",
      [
        "storage",
        "00b60f48",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b6073c",
      "PARAM",
      [
        "storage",
        "002b7d9f",
        null,
        "string"
      ]
    ],
    [
      "00b607a0",
      "PARAM",
      [
        "storage",
        "00b61f3c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5f74c ["INT_ADD", "register:40f0:8", ["const:b5f74c:8", "const:4:8"]]
- 00b5f74c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b60740 ["INT_ADD", "register:40f0:8", ["const:b60740:8", "const:4:8"]]
+ 00b60740 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b5f7b8 ["INT_ADD", "register:40f0:8", ["const:b5f7b8:8", "const:4:8"]]
- 00b5f7b8 ["CALL", null, ["callee:00c5bca0:8"]]
+ 00b607ac ["INT_ADD", "register:40f0:8", ["const:b607ac:8", "const:4:8"]]
+ 00b607ac ["CALL", null, ["callee:00c5bca0:8"]]
- 00b5f6fc ["INT_ADD", "register:40f0:8", ["const:b5f6fc:8", "const:4:8"]]
- 00b5f6fc ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b606f0 ["INT_ADD", "register:40f0:8", ["const:b606f0:8", "const:4:8"]]
+ 00b606f0 ["CALL", null, ["callee:00c5baa0:8"]]
~~~


<a id="compare-32c5733a7182e0e7979cc91a0cdcb61c"></a>

### [`00b5fb94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5fb94.md) → [`00b60b88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b60/00b60b88.md) _ZN8firebase26ReferenceCountedFutureImpl13ReleaseFutureERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6a0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c670.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.63% / 新版 98.63%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b60bfc",
      "incomplete_value": false,
      "site": "00b60c00",
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
            "const:687:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b5fc08",
      "incomplete_value": false,
      "site": "00b5fc0c",
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
            "const:5a9:8"
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
      "00b60bfc",
      "PARAM",
      [
        "storage",
        "002be5a9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b60bfc",
      "PARAM",
      [
        "storage",
        "002be687",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b5fc0c ["INT_ADD", "register:40f0:8", ["const:b5fc0c:8", "const:4:8"]]
- 00b5fc0c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b60c00 ["INT_ADD", "register:40f0:8", ["const:b60c00:8", "const:4:8"]]
+ 00b60c00 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b5fbb4 ["INT_ADD", "register:40f0:8", ["const:b5fbb4:8", "const:4:8"]]
- 00b5fbb4 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b60ba8 ["INT_ADD", "register:40f0:8", ["const:b60ba8:8", "const:4:8"]]
+ 00b60ba8 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b5fc08 ["COPY", "tmp:0:8", ["const:5a9:8"]]
- 00b5fc08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b5fc08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b5fc08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b60bfc ["COPY", "tmp:0:8", ["const:687:8"]]
+ 00b60bfc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b60bfc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b60bfc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b001fe19c68fadc6c8af3e19ee16156e"></a>

### [`00b60320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60320.md) → [`00b61314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b61/00b61314.md) _ZN8firebase26ReferenceCountedFutureImpl27AddCompletionCallbackLambdaERKNS_12FutureHandleENSt6__ndk18functionIFvRKNS_10FutureBaseEEEEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00b60530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60530.md) [`00b60568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60568.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00b61524`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b61/00b61524.md) [`00b6155c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b61/00b6155c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b613ac",
      "incomplete_value": false,
      "site": "00b613ac",
      "value": [
        "leaf",
        "const:b61524:8"
      ]
    },
    "old": {
      "definition_site": "00b603b8",
      "incomplete_value": false,
      "site": "00b603b8",
      "value": [
        "leaf",
        "const:b60530:8"
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b613b4",
      "incomplete_value": false,
      "site": "00b613c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:b61000:8"
          ],
          [
            "leaf",
            "const:55c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b603c0",
      "incomplete_value": false,
      "site": "00b603cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:b60000:8"
          ],
          [
            "leaf",
            "const:568:8"
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
      "00b613ac",
      "DATA",
      [
        "storage",
        "00b60530",
        null,
        null
      ]
    ],
    [
      "00b613c0",
      "DATA",
      [
        "storage",
        "00b60568",
        null,
        null
      ]
    ],
    [
      "00b614f4",
      "DATA",
      [
        "storage",
        "00b60568",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b613ac",
      "DATA",
      [
        "storage",
        "00b61524",
        null,
        null
      ]
    ],
    [
      "00b613c0",
      "DATA",
      [
        "storage",
        "00b6155c",
        null,
        null
      ]
    ],
    [
      "00b614f4",
      "DATA",
      [
        "storage",
        "00b6155c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b60350 ["INT_ADD", "register:40f0:8", ["const:b60350:8", "const:4:8"]]
- 00b60350 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b61344 ["INT_ADD", "register:40f0:8", ["const:b61344:8", "const:4:8"]]
+ 00b61344 ["CALL", null, ["callee:00c58f30:8"]]
- 00b6035c ["INT_ADD", "register:40f0:8", ["const:b6035c:8", "const:4:8"]]
- 00b6035c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b61350 ["INT_ADD", "register:40f0:8", ["const:b61350:8", "const:4:8"]]
+ 00b61350 ["CALL", null, ["callee:00c58f30:8"]]
- 00b60380 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b60380 ["INT_ADD", "register:40f0:8", ["const:b60380:8", "const:4:8"]]
- 00b60380 ["CALLIND", null, ["register:0:8"]]
+ 00b61374 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b61374 ["INT_ADD", "register:40f0:8", ["const:b61374:8", "const:4:8"]]
+ 00b61374 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-999ca0fe20c02d8d1feedaab4f4c73f6"></a>

### [`00b60804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60804.md) → [`00b617f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b61/00b617f8.md) _ZN8firebase26ReferenceCountedFutureImpl14SetContextDataERKNS_12FutureHandleEPvPFvS4_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5bd70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd70.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5cd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cd40.md) · 呼出先 3件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b618a8",
      "incomplete_value": false,
      "site": "00b618ac",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b608b4",
      "incomplete_value": false,
      "site": "00b608b8",
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
            "const:a9a:8"
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
      "00b618a8",
      "PARAM",
      [
        "storage",
        "002b8a9a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b618a8",
      "PARAM",
      [
        "storage",
        "002b8b69",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b608b8 ["INT_ADD", "register:40f0:8", ["const:b608b8:8", "const:4:8"]]
- 00b608b8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b618ac ["INT_ADD", "register:40f0:8", ["const:b618ac:8", "const:4:8"]]
+ 00b618ac ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b60830 ["INT_ADD", "register:40f0:8", ["const:b60830:8", "const:4:8"]]
- 00b60830 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b61824 ["INT_ADD", "register:40f0:8", ["const:b61824:8", "const:4:8"]]
+ 00b61824 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b6083c ["INT_ADD", "register:40f0:8", ["const:b6083c:8", "const:4:8"]]
- 00b6083c ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b61830 ["INT_ADD", "register:40f0:8", ["const:b61830:8", "const:4:8"]]
+ 00b61830 ["CALL", null, ["callee:00c5baa0:8"]]
~~~


<a id="compare-c6235fca513b53ac7d8c391c9fc96d0e"></a>

### [`00b6108c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b6108c.md) → [`00b62080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b62080.md) _ZN8firebase12FutureHandleC1EOS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5bd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd30.md) · 呼出先 3件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)
- 新版 呼出元 1件 [`00c5cd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cd00.md) · 呼出先 3件 [`00b61f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b61/00b61f3c.md) [`00c5bca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bca0.md) [`00c5bcb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bcb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b620b8",
      "incomplete_value": false,
      "site": "00b620bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:b61000:8"
          ],
          [
            "leaf",
            "const:f3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b610c4",
      "incomplete_value": false,
      "site": "00b610c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:b60000:8"
          ],
          [
            "leaf",
            "const:f48:8"
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
      "00b620b8",
      "PARAM",
      [
        "storage",
        "00b60f48",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b620b8",
      "PARAM",
      [
        "storage",
        "00b61f3c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b610c8 ["INT_ADD", "register:40f0:8", ["const:b610c8:8", "const:4:8"]]
- 00b610c8 ["CALL", null, ["callee:00c5bca0:8"]]
+ 00b620bc ["INT_ADD", "register:40f0:8", ["const:b620bc:8", "const:4:8"]]
+ 00b620bc ["CALL", null, ["callee:00c5bca0:8"]]
- 00b610b8 ["COPY", "register:4010:8", ["const:b60000:8"]]
+ 00b620ac ["COPY", "register:4010:8", ["const:b61000:8"]]
- 00b610c4 ["COPY", "tmp:0:8", ["const:f48:8"]]
- 00b610c4 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 00b610c4 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 00b610c4 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 00b620b8 ["COPY", "tmp:0:8", ["const:f3c:8"]]
+ 00b620b8 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 00b620b8 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 00b620b8 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
~~~


<a id="compare-32185df27cbdc43f5505f348d9257aff"></a>

### [`00b610ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b610ec.md) → [`00b620e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b620e0.md) _ZN8firebase12FutureHandleaSEOS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5bd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd40.md) · 呼出先 3件 [`00b60f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60f48.md) [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)
- 新版 呼出元 1件 [`00c5cd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cd10.md) · 呼出先 3件 [`00b61f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b61/00b61f3c.md) [`00c5bca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bca0.md) [`00c5bcb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bcb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.30% / 新版 97.30%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b62144",
      "incomplete_value": false,
      "site": "00b6214c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:b61000:8"
          ],
          [
            "leaf",
            "const:f3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b61150",
      "incomplete_value": false,
      "site": "00b61158",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:b60000:8"
          ],
          [
            "leaf",
            "const:f48:8"
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
      "00b62144",
      "PARAM",
      [
        "storage",
        "00b60f48",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b62144",
      "PARAM",
      [
        "storage",
        "00b61f3c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b61158 ["INT_ADD", "register:40f0:8", ["const:b61158:8", "const:4:8"]]
- 00b61158 ["CALL", null, ["callee:00c5bca0:8"]]
+ 00b6214c ["INT_ADD", "register:40f0:8", ["const:b6214c:8", "const:4:8"]]
+ 00b6214c ["CALL", null, ["callee:00c5bca0:8"]]
- 00b61110 ["INT_ADD", "register:40f0:8", ["const:b61110:8", "const:4:8"]]
- 00b61110 ["CALL", null, ["callee:00c5bcb0:8"]]
+ 00b62104 ["INT_ADD", "register:40f0:8", ["const:b62104:8", "const:4:8"]]
+ 00b62104 ["CALL", null, ["callee:00c5bcb0:8"]]
- 00b61124 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b61124 ["INT_ADD", "register:40f0:8", ["const:b61124:8", "const:4:8"]]
- 00b61124 ["CALLIND", null, ["register:0:8"]]
+ 00b62118 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b62118 ["INT_ADD", "register:40f0:8", ["const:b62118:8", "const:4:8"]]
+ 00b62118 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fb5885d81a8a7b0b11e3417a3d6465ff"></a>

### [`00b614d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b614d0.md) → [`00b624c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b624c4.md) _ZN8firebase17ModuleInitializerD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad20.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bcf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bcf0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b624e0",
      "incomplete_value": true,
      "site": "00b624e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00b614ec",
      "incomplete_value": true,
      "site": "00b614f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b624d8",
      "READ",
      [
        "storage",
        "00c9b8b8",
        null,
        "pointer"
      ]
    ],
    [
      "00b624e4",
      "DATA",
      [
        "storage",
        "00c905a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b624d8",
      "READ",
      [
        "storage",
        "00c9c888",
        null,
        "pointer"
      ]
    ],
    [
      "00b624e4",
      "DATA",
      [
        "storage",
        "00c91578",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b614dc ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00b624d0 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00b614e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8b8:8"]]
- 00b614e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b624d8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:888:8"]]
+ 00b624d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b61504 ["INT_ADD", "register:40f0:8", ["const:b61504:8", "const:4:8"]]
- 00b61504 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b624f8 ["INT_ADD", "register:40f0:8", ["const:b624f8:8", "const:4:8"]]
+ 00b624f8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e07d407a737b47ac60e449cadf16af25"></a>

### [`00b61590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b61590.md) → [`00b62584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b62584.md) _ZN8firebase17ModuleInitializer10InitializeEPNS_3AppEPvPFNS_10InitResultES2_S3_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5be20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be20.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5cdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cdf0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b62610",
      "incomplete_value": false,
      "site": "00b62614",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6161c",
      "incomplete_value": false,
      "site": "00b61620",
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
            "const:609:8"
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
      "definition_site": "00b62620",
      "incomplete_value": false,
      "site": "00b62624",
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
            "const:8c6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6162c",
      "incomplete_value": false,
      "site": "00b61630",
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
            "const:7e8:8"
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
      "00b62610",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ],
    [
      "00b62620",
      "PARAM",
      [
        "storage",
        "002bf7e8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b62610",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ],
    [
      "00b62620",
      "PARAM",
      [
        "storage",
        "002bf8c6",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b61620 ["INT_ADD", "register:40f0:8", ["const:b61620:8", "const:4:8"]]
- 00b61620 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b62614 ["INT_ADD", "register:40f0:8", ["const:b62614:8", "const:4:8"]]
+ 00b62614 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b61630 ["INT_ADD", "register:40f0:8", ["const:b61630:8", "const:4:8"]]
- 00b61630 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b62624 ["INT_ADD", "register:40f0:8", ["const:b62624:8", "const:4:8"]]
+ 00b62624 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b615ec ["INT_ADD", "register:40f0:8", ["const:b615ec:8", "const:4:8"]]
- 00b615ec ["CALL", null, ["callee:00c5cdf0:8"]]
+ 00b625e0 ["INT_ADD", "register:40f0:8", ["const:b625e0:8", "const:4:8"]]
+ 00b625e0 ["CALL", null, ["callee:00c5cdf0:8"]]
~~~


<a id="compare-71b87ce0a02b92c78c73ac4aaa92824d"></a>

### [`00b6163c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b6163c.md) → [`00b62630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b62630.md) _ZN8firebase17ModuleInitializer10InitializeEPNS_3AppEPvPKPFNS_10InitResultES2_S3_Em

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5be20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be20.md) · 呼出先 14件 [`00b617f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b617f0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md)
- 新版 呼出元 1件 [`00c5cdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cdf0.md) · 呼出先 14件 [`00b627e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b627e4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.17% / 新版 98.17%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b62750",
      "incomplete_value": false,
      "site": "00b62754",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6175c",
      "incomplete_value": false,
      "site": "00b61760",
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
            "const:609:8"
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
      "definition_site": "00b62760",
      "incomplete_value": false,
      "site": "00b62764",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bd000:8"
          ],
          [
            "leaf",
            "const:234:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6176c",
      "incomplete_value": false,
      "site": "00b61770",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bd000:8"
          ],
          [
            "leaf",
            "const:156:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b62750",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ],
    [
      "00b62760",
      "PARAM",
      [
        "storage",
        "002bd156",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b62750",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ],
    [
      "00b62760",
      "PARAM",
      [
        "storage",
        "002bd234",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b61760 ["INT_ADD", "register:40f0:8", ["const:b61760:8", "const:4:8"]]
- 00b61760 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b62754 ["INT_ADD", "register:40f0:8", ["const:b62754:8", "const:4:8"]]
+ 00b62754 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b61770 ["INT_ADD", "register:40f0:8", ["const:b61770:8", "const:4:8"]]
- 00b61770 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b62764 ["INT_ADD", "register:40f0:8", ["const:b62764:8", "const:4:8"]]
+ 00b62764 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b61690 ["INT_ADD", "register:40f0:8", ["const:b61690:8", "const:4:8"]]
- 00b61690 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00b62684 ["INT_ADD", "register:40f0:8", ["const:b62684:8", "const:4:8"]]
+ 00b62684 ["CALL", null, ["callee:00c5bea0:8"]]
~~~


<a id="compare-221fa6ef0c987f5c6c5c7d482bdc8ccc"></a>

### [`00b617f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b617f0.md) → [`00b627e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b627e4.md) FUN_00b627e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b6163c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b6163c.md) [`00b629b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b629b4.md) · 呼出先 15件 [`00b62990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b62990.md) [`00b629a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b629a8.md) [`00b629b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b629b4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`00b62630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b62630.md) [`00b639a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b63/00b639a8.md) · 呼出先 15件 [`00b63984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b63/00b63984.md) [`00b6399c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b63/00b6399c.md) [`00b639a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b63/00b639a8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.83% / 新版 96.83%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b62900",
      "incomplete_value": false,
      "site": "00b62900",
      "value": [
        "leaf",
        "const:b639a8:8"
      ]
    },
    "old": {
      "definition_site": "00b6190c",
      "incomplete_value": false,
      "site": "00b6190c",
      "value": [
        "leaf",
        "const:b629b4:8"
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b628bc",
      "incomplete_value": false,
      "site": "00b628c0",
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
            "const:20b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b618c8",
      "incomplete_value": false,
      "site": "00b618cc",
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
            "const:13e:8"
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
      "definition_site": "00b62918",
      "incomplete_value": true,
      "site": "00b62930",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:880:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b61924",
      "incomplete_value": true,
      "site": "00b6193c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
      "00b628bc",
      "PARAM",
      [
        "storage",
        "002ae13e",
        null,
        "string"
      ]
    ],
    [
      "00b62900",
      "DATA",
      [
        "storage",
        "00b629b4",
        null,
        null
      ]
    ],
    [
      "00b62918",
      "READ",
      [
        "storage",
        "00c9b8b0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b628bc",
      "PARAM",
      [
        "storage",
        "002ae20b",
        null,
        "string"
      ]
    ],
    [
      "00b62900",
      "DATA",
      [
        "storage",
        "00b639a8",
        null,
        null
      ]
    ],
    [
      "00b62918",
      "READ",
      [
        "storage",
        "00c9c880",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b618cc ["INT_ADD", "register:40f0:8", ["const:b618cc:8", "const:4:8"]]
- 00b618cc ["CALL", null, ["callee:00c5be80:8"]]
+ 00b628c0 ["INT_ADD", "register:40f0:8", ["const:b628c0:8", "const:4:8"]]
+ 00b628c0 ["CALL", null, ["callee:00c5be80:8"]]
- 00b6193c ["COPY", "register:0:8", ["register:4048:8"]]
- 00b6193c ["INT_ADD", "register:40f0:8", ["const:b6193c:8", "const:4:8"]]
- 00b6193c ["CALLIND", null, ["register:0:8"]]
+ 00b62930 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b62930 ["INT_ADD", "register:40f0:8", ["const:b62930:8", "const:4:8"]]
+ 00b62930 ["CALLIND", null, ["register:0:8"]]
- 00b61830 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b61830 ["INT_ADD", "register:40f0:8", ["const:b61830:8", "const:4:8"]]
- 00b61830 ["CALLIND", null, ["register:0:8"]]
+ 00b62824 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b62824 ["INT_ADD", "register:40f0:8", ["const:b62824:8", "const:4:8"]]
+ 00b62824 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ed4939decc1f00031c701d9f0fc2e585"></a>

### [`00b61e3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b61e3c.md) → [`00b62e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b62e30.md) _ZN8firebase11AppCallback16SetEnabledByNameEPKcb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 10件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 94.79% / 新版 94.79%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b62e84",
      "incomplete_value": true,
      "site": "00b62e84",
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
      "definition_site": "00b61e90",
      "incomplete_value": true,
      "site": "00b61e90",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b62e70",
      "incomplete_value": true,
      "site": "00b62e74",
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
      "definition_site": "00b61e7c",
      "incomplete_value": true,
      "site": "00b61e80",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b62f44",
      "incomplete_value": true,
      "site": "00b62f50",
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
            "const:3f4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b61f50",
      "incomplete_value": true,
      "site": "00b61f5c",
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
            "const:31d:8"
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
      "00b62e68",
      "READ",
      [
        "storage",
        "00c9b890",
        null,
        "pointer"
      ]
    ],
    [
      "00b62e6c",
      "READ",
      [
        "storage",
        "01126130",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b62e7c",
      "READ",
      [
        "storage",
        "00c9b888",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b62e68",
      "READ",
      [
        "storage",
        "00c9c860",
        null,
        "pointer"
      ]
    ],
    [
      "00b62e6c",
      "READ",
      [
        "storage",
        "011270f0",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b62e7c",
      "READ",
      [
        "storage",
        "00c9c858",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b61e80 ["INT_ADD", "register:40f0:8", ["const:b61e80:8", "const:4:8"]]
- 00b61e80 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b62e74 ["INT_ADD", "register:40f0:8", ["const:b62e74:8", "const:4:8"]]
+ 00b62e74 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b61f5c ["INT_ADD", "register:40f0:8", ["const:b61f5c:8", "const:4:8"]]
- 00b61f5c ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00b62f50 ["INT_ADD", "register:40f0:8", ["const:b62f50:8", "const:4:8"]]
+ 00b62f50 ["CALL", null, ["callee:00c5c1d0:8"]]
- 00b61f78 ["INT_ADD", "register:40f0:8", ["const:b61f78:8", "const:4:8"]]
- 00b61f78 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00b62f6c ["INT_ADD", "register:40f0:8", ["const:b62f6c:8", "const:4:8"]]
+ 00b62f6c ["CALL", null, ["callee:00c5c1d0:8"]]
~~~


<a id="compare-b664b3994d9ea5da1234f968ea40884f"></a>

### [`00b61fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b61fbc.md) → [`00b62fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b62fb0.md) _ZN8firebase11AppCallback13SetEnabledAllEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1d0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b62fe8",
      "incomplete_value": true,
      "site": "00b62fe8",
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
      "definition_site": "00b61ff4",
      "incomplete_value": true,
      "site": "00b61ff4",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b62fd4",
      "incomplete_value": true,
      "site": "00b62fd8",
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
      "definition_site": "00b61fe0",
      "incomplete_value": true,
      "site": "00b61fe4",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b63008",
      "incomplete_value": true,
      "site": "00b6300c",
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
            "const:6a4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62014",
      "incomplete_value": true,
      "site": "00b62018",
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
            "const:5c6:8"
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
      "00b62fc8",
      "READ",
      [
        "storage",
        "00c9b890",
        null,
        "pointer"
      ]
    ],
    [
      "00b62fd0",
      "READ",
      [
        "storage",
        "01126130",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b62fe0",
      "READ",
      [
        "storage",
        "00c9b888",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b62fc8",
      "READ",
      [
        "storage",
        "00c9c860",
        null,
        "pointer"
      ]
    ],
    [
      "00b62fd0",
      "READ",
      [
        "storage",
        "011270f0",
        "firebase::AppCallback::callbacks_mutex_",
        "undefined8"
      ]
    ],
    [
      "00b62fe0",
      "READ",
      [
        "storage",
        "00c9c858",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b61fe4 ["INT_ADD", "register:40f0:8", ["const:b61fe4:8", "const:4:8"]]
- 00b61fe4 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b62fd8 ["INT_ADD", "register:40f0:8", ["const:b62fd8:8", "const:4:8"]]
+ 00b62fd8 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b62018 ["INT_ADD", "register:40f0:8", ["const:b62018:8", "const:4:8"]]
- 00b62018 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00b6300c ["INT_ADD", "register:40f0:8", ["const:b6300c:8", "const:4:8"]]
+ 00b6300c ["CALL", null, ["callee:00c5c1d0:8"]]
- 00b61fd0 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00b62fc4 ["COPY", "register:4040:8", ["const:c9c000:8"]]
~~~


<a id="compare-8f816d7c50ac27bee2bf8bbe7eb1cbbe"></a>

### [`00b620e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b620e4.md) → [`00b630d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b63/00b630d8.md) _ZN8firebase11AppCallback11AddCallbackEPS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ac90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac90.md) · 呼出先 11件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c5bc60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc60.md) · 呼出先 11件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 96.82% / 新版 96.82%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_condition` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b63114",
      "incomplete_value": true,
      "site": "00b63114",
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
      "definition_site": "00b62120",
      "incomplete_value": true,
      "site": "00b62120",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b631e4",
      "incomplete_value": false,
      "site": "00b631e8",
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
            "const:733:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b621f0",
      "incomplete_value": false,
      "site": "00b621f4",
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
            "const:655:8"
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
      "definition_site": "00b63234",
      "incomplete_value": false,
      "site": "00b63238",
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
            "const:77c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62240",
      "incomplete_value": false,
      "site": "00b62244",
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
            "const:69e:8"
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
      "00b6310c",
      "READ",
      [
        "storage",
        "00c9b888",
        null,
        "pointer"
      ]
    ],
    [
      "00b63110",
      "READ",
      [
        "storage",
        "01126128",
        "firebase::AppCallback::callbacks_",
        "undefined8"
      ]
    ],
    [
      "00b63134",
      "WRITE",
      [
        "storage",
        "01126128",
        "firebase::AppCallback::callbacks_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b6310c",
      "READ",
      [
        "storage",
        "00c9c858",
        null,
        "pointer"
      ]
    ],
    [
      "00b63110",
      "READ",
      [
        "storage",
        "011270e8",
        "firebase::AppCallback::callbacks_",
        "undefined8"
      ]
    ],
    [
      "00b63134",
      "WRITE",
      [
        "storage",
        "011270e8",
        "firebase::AppCallback::callbacks_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b621f4 ["INT_ADD", "register:40f0:8", ["const:b621f4:8", "const:4:8"]]
- 00b621f4 ["CALL", null, ["callee:00c5be80:8"]]
+ 00b631e8 ["INT_ADD", "register:40f0:8", ["const:b631e8:8", "const:4:8"]]
+ 00b631e8 ["CALL", null, ["callee:00c5be80:8"]]
- 00b62244 ["INT_ADD", "register:40f0:8", ["const:b62244:8", "const:4:8"]]
- 00b62244 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00b63238 ["INT_ADD", "register:40f0:8", ["const:b63238:8", "const:4:8"]]
+ 00b63238 ["CALL", null, ["callee:00c5c1d0:8"]]
- 00b6210c ["COPY", "register:40c8:8", ["const:c9b000:8"]]
+ 00b63100 ["COPY", "register:40c8:8", ["const:c9c000:8"]]
~~~


<a id="compare-4319627192b8babf368c30d6ceb97b51"></a>

### [`00b6284c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b6284c.md) → [`00b63840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b63/00b63840.md) _ZN8firebase19CreateApiIdentifierEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5be30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be30.md) · 呼出先 2件 [`00b628ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b628ec.md) [`00c586c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586c0.md)
- 新版 呼出元 1件 [`00c5ce00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5ce00.md) · 呼出先 2件 [`00b638e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b63/00b638e0.md) [`00c59690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59690.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 97.50% / 新版 97.50%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b6388c",
      "incomplete_value": true,
      "site": "00b6388c",
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
            "const:108:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62898",
      "incomplete_value": true,
      "site": "00b62898",
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
            "const:148:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b6385c",
      "READ",
      [
        "storage",
        "01126148",
        null,
        "undefined4"
      ]
    ],
    [
      "00b6388c",
      "WRITE",
      [
        "storage",
        "01126148",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b6385c",
      "READ",
      [
        "storage",
        "01127108",
        null,
        "undefined4"
      ]
    ],
    [
      "00b6388c",
      "WRITE",
      [
        "storage",
        "01127108",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b62898 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:148:8"]]
- 00b62898 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
+ 00b6388c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:108:8"]]
+ 00b6388c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
- 00b62864 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00b63858 ["COPY", "register:4040:8", ["const:1127000:8"]]
- 00b62868 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:148:8"]]
- 00b62868 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00b62868 ["INT_ZEXT", "register:40b0:8", ["tmp:1:4"]]
+ 00b6385c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:108:8"]]
+ 00b6385c ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
+ 00b6385c ["INT_ZEXT", "register:40b0:8", ["tmp:1:4"]]
~~~


<a id="compare-9ef28354c28d00df8c5dbefb07580a08"></a>

### [`00b628ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b628ec.md) → [`00b638e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b63/00b638e0.md) FUN_00b638e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b6284c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b6284c.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5be90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be90.md)
- 新版 呼出元 1件 [`00b63840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b63/00b63840.md) · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5ce60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5ce60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.56% / 新版 97.56%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b63948",
      "incomplete_value": false,
      "site": "00b6395c",
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
            "const:a25:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62954",
      "incomplete_value": false,
      "site": "00b62968",
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
            "const:9e5:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b63948",
      "PARAM",
      [
        "storage",
        "0029f9e5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b63948",
      "PARAM",
      [
        "storage",
        "0029fa25",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b62968 ["INT_ADD", "register:40f0:8", ["const:b62968:8", "const:4:8"]]
- 00b62968 ["CALL", null, ["callee:00c5ce60:8"]]
+ 00b6395c ["INT_ADD", "register:40f0:8", ["const:b6395c:8", "const:4:8"]]
+ 00b6395c ["CALL", null, ["callee:00c5ce60:8"]]
- 00b62954 ["COPY", "tmp:0:8", ["const:9e5:8"]]
- 00b62954 ["INT_CARRY", "register:105:1", ["register:4020:8", "tmp:0:8"]]
- 00b62954 ["INT_SCARRY", "register:106:1", ["register:4020:8", "tmp:0:8"]]
- 00b62954 ["INT_ADD", "tmp:1:8", ["register:4020:8", "tmp:0:8"]]
+ 00b63948 ["COPY", "tmp:0:8", ["const:a25:8"]]
+ 00b63948 ["INT_CARRY", "register:105:1", ["register:4020:8", "tmp:0:8"]]
+ 00b63948 ["INT_SCARRY", "register:106:1", ["register:4020:8", "tmp:0:8"]]
+ 00b63948 ["INT_ADD", "tmp:1:8", ["register:4020:8", "tmp:0:8"]]
- 00b6298c ["INT_ADD", "register:40f0:8", ["const:b6298c:8", "const:4:8"]]
- 00b6298c ["CALL", null, ["callee:00c58f80:8"]]
+ 00b63980 ["INT_ADD", "register:40f0:8", ["const:b63980:8", "const:4:8"]]
+ 00b63980 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-5ab0afd57b04e5c75a0a032f3ee0f159"></a>

### [`00b629b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b629b4.md) → [`00b639a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b63/00b639a8.md) FUN_00b639a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b617f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b617f0.md) · 呼出先 12件 [`00b617f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b617f0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md)
- 新版 呼出元 1件 [`00b627e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b627e4.md) · 呼出先 12件 [`00b627e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b627e4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b63a38",
      "incomplete_value": false,
      "site": "00b63a3c",
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
            "const:23c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62a44",
      "incomplete_value": false,
      "site": "00b62a48",
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
            "const:16f:8"
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
      "definition_site": "00b63a6c",
      "incomplete_value": false,
      "site": "00b63a70",
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
            "const:40a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62a78",
      "incomplete_value": false,
      "site": "00b62a7c",
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
            "const:333:8"
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
      "definition_site": "00b63a98",
      "incomplete_value": false,
      "site": "00b63aac",
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
            "const:a34:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b62aa4",
      "incomplete_value": false,
      "site": "00b62ab8",
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
            "const:9f4:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b63a38",
      "PARAM",
      [
        "storage",
        "002ae16f",
        null,
        "string"
      ]
    ],
    [
      "00b63a6c",
      "PARAM",
      [
        "storage",
        "002af333",
        null,
        "string"
      ]
    ],
    [
      "00b63a98",
      "PARAM",
      [
        "storage",
        "0029f9f4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b63a38",
      "PARAM",
      [
        "storage",
        "002ae23c",
        null,
        "string"
      ]
    ],
    [
      "00b63a6c",
      "PARAM",
      [
        "storage",
        "002af40a",
        null,
        "string"
      ]
    ],
    [
      "00b63a98",
      "PARAM",
      [
        "storage",
        "0029fa34",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b62a48 ["INT_ADD", "register:40f0:8", ["const:b62a48:8", "const:4:8"]]
- 00b62a48 ["CALL", null, ["callee:00c5c080:8"]]
+ 00b63a3c ["INT_ADD", "register:40f0:8", ["const:b63a3c:8", "const:4:8"]]
+ 00b63a3c ["CALL", null, ["callee:00c5c080:8"]]
- 00b62a7c ["INT_ADD", "register:40f0:8", ["const:b62a7c:8", "const:4:8"]]
- 00b62a7c ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b63a70 ["INT_ADD", "register:40f0:8", ["const:b63a70:8", "const:4:8"]]
+ 00b63a70 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b62ab8 ["INT_ADD", "register:40f0:8", ["const:b62ab8:8", "const:4:8"]]
- 00b62ab8 ["CALL", null, ["callee:00c5be40:8"]]
+ 00b63aac ["INT_ADD", "register:40f0:8", ["const:b63aac:8", "const:4:8"]]
+ 00b63aac ["CALL", null, ["callee:00c5be40:8"]]
~~~


<a id="compare-1c5ac4ffbca5fc8f58ebd7c78e92b51b"></a>

### [`00b62fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b62fdc.md) → [`00b63fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b63/00b63fd0.md) _ZN8firebase7VariantaSERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md) · 呼出先 11件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5b990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b990.md) · 呼出先 11件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 82.30% / 新版 82.30%

優先判定に残った影響 `call_argument_candidate` 23件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b64044",
      "incomplete_value": false,
      "site": "00b64048",
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
            "const:26c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63050",
      "incomplete_value": false,
      "site": "00b63054",
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
            "const:19f:8"
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
      "definition_site": "00b64060",
      "incomplete_value": false,
      "site": "00b6406c",
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
            "const:432:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6306c",
      "incomplete_value": false,
      "site": "00b63078",
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
            "const:35b:8"
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
      "definition_site": "00b64068",
      "incomplete_value": false,
      "site": "00b6406c",
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
            "const:8df:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63074",
      "incomplete_value": false,
      "site": "00b63078",
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
            "const:801:8"
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
      "00b64028",
      "DATA",
      [
        "storage",
        "0030bc49",
        "switchD_00b6303c::switchdataD_0030bc49",
        "byte"
      ]
    ],
    [
      "00b64044",
      "PARAM",
      [
        "storage",
        "002ae19f",
        null,
        "string"
      ]
    ],
    [
      "00b64054",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b64028",
      "DATA",
      [
        "storage",
        "0030bc89",
        "switchD_00b64030::switchdataD_0030bc89",
        "byte"
      ]
    ],
    [
      "00b64044",
      "PARAM",
      [
        "storage",
        "002ae26c",
        null,
        "string"
      ]
    ],
    [
      "00b64054",
      "READ",
      [
        "storage",
        "00c9c890",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b63054 ["INT_ADD", "register:40f0:8", ["const:b63054:8", "const:4:8"]]
- 00b63054 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b64048 ["INT_ADD", "register:40f0:8", ["const:b64048:8", "const:4:8"]]
+ 00b64048 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b63078 ["INT_ADD", "register:40f0:8", ["const:b63078:8", "const:4:8"]]
- 00b63078 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b6406c ["INT_ADD", "register:40f0:8", ["const:b6406c:8", "const:4:8"]]
+ 00b6406c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b630cc ["INT_ADD", "register:40f0:8", ["const:b630cc:8", "const:4:8"]]
- 00b630cc ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b640c0 ["INT_ADD", "register:40f0:8", ["const:b640c0:8", "const:4:8"]]
+ 00b640c0 ["CALL", null, ["callee:00c5bd40:8"]]
~~~


<a id="compare-342b6a0e5f918543063741936026fec0"></a>

### [`00b63320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63320.md) → [`00b64314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b64/00b64314.md) _ZN8firebase7Variant5ClearENS0_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00b63320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63320.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) · 呼出先 6件 [`00b63320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63320.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5bef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bef0.md)
- 新版 呼出元 2件 [`00b64314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b64/00b64314.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) · 呼出先 6件 [`00b64314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b64/00b64314.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5cec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cec0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.14% / 新版 93.14%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b64570",
      "incomplete_value": false,
      "site": "00b64574",
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
      "definition_site": "00b6357c",
      "incomplete_value": false,
      "site": "00b63580",
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
    "ordinal": 36,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6444c",
      "incomplete_value": false,
      "site": "00b64450",
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
            "const:e20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63458",
      "incomplete_value": false,
      "site": "00b6345c",
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
            "const:de0:8"
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
      "00b6434c",
      "DATA",
      [
        "storage",
        "0030bc54",
        "switchD_00b63360::switchdataD_0030bc54",
        "byte"
      ]
    ],
    [
      "00b6444c",
      "PARAM",
      [
        "storage",
        "0029ede0",
        null,
        "string"
      ]
    ],
    [
      "00b6450c",
      "DATA",
      [
        "storage",
        "0030bc5f",
        "switchD_00b63520::switchdataD_0030bc5f",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "00b6434c",
      "DATA",
      [
        "storage",
        "0030bc94",
        "switchD_00b64354::switchdataD_0030bc94",
        "byte"
      ]
    ],
    [
      "00b6444c",
      "PARAM",
      [
        "storage",
        "0029ee20",
        null,
        "string"
      ]
    ],
    [
      "00b6450c",
      "DATA",
      [
        "storage",
        "0030bc9f",
        "switchD_00b64514::switchdataD_0030bc9f",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6345c ["INT_ADD", "register:40f0:8", ["const:b6345c:8", "const:4:8"]]
- 00b6345c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b64450 ["INT_ADD", "register:40f0:8", ["const:b64450:8", "const:4:8"]]
+ 00b64450 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b63350 ["COPY", "tmp:0:8", ["const:c54:8"]]
- 00b63350 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b63350 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b63350 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b64344 ["COPY", "tmp:0:8", ["const:c94:8"]]
+ 00b64344 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b64344 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b64344 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00b63354 ["COPY", "register:4050:8", ["const:b63364:8"]]
~~~


<a id="compare-6110bb05abdf3f91640d5d67eaf33939"></a>

### [`00b635dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b635dc.md) → [`00b645d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b64/00b645d0.md) _ZNK8firebase7Variant14mutable_stringEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5beb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5beb0.md) · 呼出先 3件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md)
- 新版 呼出元 1件 [`00c5ce80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5ce80.md) · 呼出先 3件 [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c660.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b64620",
      "incomplete_value": false,
      "site": "00b64624",
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
            "const:6c9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6362c",
      "incomplete_value": false,
      "site": "00b63630",
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
            "const:5eb:8"
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
      "definition_site": "00b64630",
      "incomplete_value": false,
      "site": "00b64638",
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
            "const:8e5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6363c",
      "incomplete_value": false,
      "site": "00b63644",
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
            "const:807:8"
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
      "definition_site": "00b6467c",
      "incomplete_value": false,
      "site": "00b64680",
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
            "const:6c9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63688",
      "incomplete_value": false,
      "site": "00b6368c",
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
            "const:5eb:8"
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
      "00b645ec",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b64620",
      "PARAM",
      [
        "storage",
        "002be5eb",
        null,
        "string"
      ]
    ],
    [
      "00b64630",
      "PARAM",
      [
        "storage",
        "002bf807",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b645ec",
      "READ",
      [
        "storage",
        "00c9c890",
        null,
        "pointer"
      ]
    ],
    [
      "00b64620",
      "PARAM",
      [
        "storage",
        "002be6c9",
        null,
        "string"
      ]
    ],
    [
      "00b64630",
      "PARAM",
      [
        "storage",
        "002bf8e5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b63630 ["INT_ADD", "register:40f0:8", ["const:b63630:8", "const:4:8"]]
- 00b63630 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b64624 ["INT_ADD", "register:40f0:8", ["const:b64624:8", "const:4:8"]]
+ 00b64624 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b63644 ["INT_ADD", "register:40f0:8", ["const:b63644:8", "const:4:8"]]
- 00b63644 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b64638 ["INT_ADD", "register:40f0:8", ["const:b64638:8", "const:4:8"]]
+ 00b64638 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b6368c ["INT_ADD", "register:40f0:8", ["const:b6368c:8", "const:4:8"]]
- 00b6368c ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b64680 ["INT_ADD", "register:40f0:8", ["const:b64680:8", "const:4:8"]]
+ 00b64680 ["CALL", null, ["callee:00c5bd40:8"]]
~~~


<a id="compare-dc32816510e7ea955fc9a022f351b994"></a>

### [`00b636dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b636dc.md) → [`00b646d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b64/00b646d0.md) _ZN8firebase7Variant16set_mutable_blobEPKvm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5bea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bea0.md) · 呼出先 5件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5bf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf20.md)
- 新版 呼出元 1件 [`00c5ce70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5ce70.md) · 呼出先 5件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5cef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cef0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 86.49% / 新版 86.49%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6472c",
      "incomplete_value": false,
      "site": "00b64730",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:ed2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63738",
      "incomplete_value": false,
      "site": "00b6373c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:df4:8"
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
      "definition_site": "00b64744",
      "incomplete_value": false,
      "site": "00b6474c",
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
            "const:2b1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63750",
      "incomplete_value": false,
      "site": "00b63758",
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
            "const:159:8"
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
      "definition_site": "00b64748",
      "incomplete_value": true,
      "site": "00b6474c",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63754",
      "incomplete_value": true,
      "site": "00b63758",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
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
      "00b6472c",
      "PARAM",
      [
        "storage",
        "002bbdf4",
        null,
        "string"
      ]
    ],
    [
      "00b6473c",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b64744",
      "PARAM",
      [
        "storage",
        "002a7159",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b6472c",
      "PARAM",
      [
        "storage",
        "002bbed2",
        null,
        "string"
      ]
    ],
    [
      "00b6473c",
      "READ",
      [
        "storage",
        "00c9c890",
        null,
        "pointer"
      ]
    ],
    [
      "00b64744",
      "PARAM",
      [
        "storage",
        "002a72b1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6373c ["INT_ADD", "register:40f0:8", ["const:b6373c:8", "const:4:8"]]
- 00b6373c ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b64730 ["INT_ADD", "register:40f0:8", ["const:b64730:8", "const:4:8"]]
+ 00b64730 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b63758 ["INT_ADD", "register:40f0:8", ["const:b63758:8", "const:4:8"]]
- 00b63758 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b6474c ["INT_ADD", "register:40f0:8", ["const:b6474c:8", "const:4:8"]]
+ 00b6474c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b636fc ["INT_ADD", "register:40f0:8", ["const:b636fc:8", "const:4:8"]]
- 00b636fc ["CALL", null, ["callee:00c5cef0:8"]]
+ 00b646f0 ["INT_ADD", "register:40f0:8", ["const:b646f0:8", "const:4:8"]]
+ 00b646f0 ["CALL", null, ["callee:00c5cef0:8"]]
~~~


<a id="compare-839167bec5f786911d10d8055a059ee2"></a>

### [`00b63770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63770.md) → [`00b64764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b64/00b64764.md) _ZN8firebase7VariantaSEOS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) · 呼出先 3件 [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) · 呼出先 3件 [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b64810",
      "incomplete_value": false,
      "site": "00b64814",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:ed2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6381c",
      "incomplete_value": false,
      "site": "00b63820",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:df4:8"
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
      "definition_site": "00b64828",
      "incomplete_value": false,
      "site": "00b64830",
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
            "const:2b1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63834",
      "incomplete_value": false,
      "site": "00b6383c",
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
            "const:159:8"
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
      "definition_site": "00b6482c",
      "incomplete_value": true,
      "site": "00b64830",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63838",
      "incomplete_value": true,
      "site": "00b6383c",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
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
      "00b647b8",
      "DATA",
      [
        "storage",
        "0030bc6a",
        "switchD_00b637cc::switchdataD_0030bc6a",
        "byte"
      ]
    ],
    [
      "00b64810",
      "PARAM",
      [
        "storage",
        "002bbdf4",
        null,
        "string"
      ]
    ],
    [
      "00b64820",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b647b8",
      "DATA",
      [
        "storage",
        "0030bcaa",
        "switchD_00b647c0::switchdataD_0030bcaa",
        "byte"
      ]
    ],
    [
      "00b64810",
      "PARAM",
      [
        "storage",
        "002bbed2",
        null,
        "string"
      ]
    ],
    [
      "00b64820",
      "READ",
      [
        "storage",
        "00c9c890",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b63820 ["INT_ADD", "register:40f0:8", ["const:b63820:8", "const:4:8"]]
- 00b63820 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b64814 ["INT_ADD", "register:40f0:8", ["const:b64814:8", "const:4:8"]]
+ 00b64814 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b6383c ["INT_ADD", "register:40f0:8", ["const:b6383c:8", "const:4:8"]]
- 00b6383c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b64830 ["INT_ADD", "register:40f0:8", ["const:b64830:8", "const:4:8"]]
+ 00b64830 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b63870 ["INT_ADD", "register:40f0:8", ["const:b63870:8", "const:4:8"]]
- 00b63870 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b64864 ["INT_ADD", "register:40f0:8", ["const:b64864:8", "const:4:8"]]
+ 00b64864 ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-0b0dd17e0774123276f3e7b83b95504b"></a>

### [`00b63888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63888.md) → [`00b6487c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b64/00b6487c.md) _ZNK8firebase7VarianteqERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00b63888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63888.md) [`00c5bec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bec0.md) · 呼出先 5件 [`00b63888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63888.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)
- 新版 呼出元 2件 [`00b6487c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b64/00b6487c.md) [`00c5ce90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5ce90.md) · 呼出先 5件 [`00b6487c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b64/00b6487c.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c8f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 84.33% / 新版 84.33%

優先判定に残った影響 `call_argument_candidate` 34件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b64984",
      "incomplete_value": false,
      "site": "00b64988",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:ed2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63990",
      "incomplete_value": false,
      "site": "00b63994",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:df4:8"
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
      "definition_site": "00b64994",
      "incomplete_value": false,
      "site": "00b6499c",
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
            "const:2b1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b639a0",
      "incomplete_value": false,
      "site": "00b639a8",
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
            "const:159:8"
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
      "definition_site": "00b649b8",
      "incomplete_value": false,
      "site": "00b649bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:ed2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b639c4",
      "incomplete_value": false,
      "site": "00b639c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:df4:8"
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
      "00b64914",
      "DATA",
      [
        "storage",
        "0030bc75",
        "switchD_00b6392c::switchdataD_0030bc75",
        "byte"
      ]
    ],
    [
      "00b64970",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b64984",
      "PARAM",
      [
        "storage",
        "002bbdf4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b64914",
      "DATA",
      [
        "storage",
        "0030bcb5",
        "switchD_00b64920::switchdataD_0030bcb5",
        "byte"
      ]
    ],
    [
      "00b64970",
      "READ",
      [
        "storage",
        "00c9c890",
        null,
        "pointer"
      ]
    ],
    [
      "00b64984",
      "PARAM",
      [
        "storage",
        "002bbed2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b63994 ["INT_ADD", "register:40f0:8", ["const:b63994:8", "const:4:8"]]
- 00b63994 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b64988 ["INT_ADD", "register:40f0:8", ["const:b64988:8", "const:4:8"]]
+ 00b64988 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b639a8 ["INT_ADD", "register:40f0:8", ["const:b639a8:8", "const:4:8"]]
- 00b639a8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b6499c ["INT_ADD", "register:40f0:8", ["const:b6499c:8", "const:4:8"]]
+ 00b6499c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b639c8 ["INT_ADD", "register:40f0:8", ["const:b639c8:8", "const:4:8"]]
- 00b639c8 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b649bc ["INT_ADD", "register:40f0:8", ["const:b649bc:8", "const:4:8"]]
+ 00b649bc ["CALL", null, ["callee:00c5bd40:8"]]
~~~


<a id="compare-b852f20ab2380fbc7c891c9471b96e3d"></a>

### [`00b63e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b63/00b63e04.md) → [`00b64df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b64/00b64df8.md) _ZNK8firebase7VariantltERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b670.md) · 呼出先 5件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md) [`00c5bec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bec0.md)
- 新版 呼出元 1件 [`00c5c640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c640.md) · 呼出先 5件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c8f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8f0.md) [`00c5ce90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5ce90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 87.20% / 新版 87.20%

優先判定に残った影響 `call_argument_candidate` 46件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b64fbc",
      "incomplete_value": false,
      "site": "00b64fc4",
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
            "const:2ad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63fc8",
      "incomplete_value": false,
      "site": "00b63fd0",
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
            "const:155:8"
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
      "definition_site": "00b64ff0",
      "incomplete_value": false,
      "site": "00b64ff8",
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
            "const:2ad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b63ffc",
      "incomplete_value": false,
      "site": "00b64004",
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
            "const:155:8"
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
      "definition_site": "00b6502c",
      "incomplete_value": false,
      "site": "00b65034",
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
            "const:2ad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b64038",
      "incomplete_value": false,
      "site": "00b64040",
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
            "const:155:8"
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
      "00b64e1c",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b64ecc",
      "DATA",
      [
        "storage",
        "0030bc82",
        "switchD_00b63ee0::switchdataD_0030bc82",
        "ushort"
      ]
    ],
    [
      "00b64ee8",
      "PARAM",
      [
        "storage",
        "002ae19f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b64e1c",
      "READ",
      [
        "storage",
        "00c9c890",
        null,
        "pointer"
      ]
    ],
    [
      "00b64ecc",
      "DATA",
      [
        "storage",
        "0030bcc2",
        "switchD_00b64ed4::switchdataD_0030bcc2",
        "ushort"
      ]
    ],
    [
      "00b64ee8",
      "PARAM",
      [
        "storage",
        "002ae26c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b63fd0 ["INT_ADD", "register:40f0:8", ["const:b63fd0:8", "const:4:8"]]
- 00b63fd0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b64fc4 ["INT_ADD", "register:40f0:8", ["const:b64fc4:8", "const:4:8"]]
+ 00b64fc4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b64004 ["INT_ADD", "register:40f0:8", ["const:b64004:8", "const:4:8"]]
- 00b64004 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b64ff8 ["INT_ADD", "register:40f0:8", ["const:b64ff8:8", "const:4:8"]]
+ 00b64ff8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b64040 ["INT_ADD", "register:40f0:8", ["const:b64040:8", "const:4:8"]]
- 00b64040 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b65034 ["INT_ADD", "register:40f0:8", ["const:b65034:8", "const:4:8"]]
+ 00b65034 ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-2023fb51348c0c8c6dcb60bb918afefd"></a>

### [`00b64670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64670.md) → [`00b65664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b65/00b65664.md) _ZNK8firebase7Variant14assert_is_typeENS0_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5abd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abd0.md) · 呼出先 2件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5bba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bba0.md) · 呼出先 2件 [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65690",
      "incomplete_value": false,
      "site": "00b65698",
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
            "const:26c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6469c",
      "incomplete_value": false,
      "site": "00b646a4",
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
            "const:19f:8"
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
      "00b65690",
      "PARAM",
      [
        "storage",
        "002ae19f",
        null,
        "string"
      ]
    ],
    [
      "00b656a4",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b656b0",
      "PARAM",
      [
        "storage",
        "002af35b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b65690",
      "PARAM",
      [
        "storage",
        "002ae26c",
        null,
        "string"
      ]
    ],
    [
      "00b656a4",
      "READ",
      [
        "storage",
        "00c9c890",
        null,
        "pointer"
      ]
    ],
    [
      "00b656b0",
      "PARAM",
      [
        "storage",
        "002af432",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b646a4 ["INT_ADD", "register:40f0:8", ["const:b646a4:8", "const:4:8"]]
- 00b646a4 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b65698 ["INT_ADD", "register:40f0:8", ["const:b65698:8", "const:4:8"]]
+ 00b65698 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b6469c ["COPY", "tmp:0:8", ["const:19f:8"]]
- 00b6469c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b6469c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b6469c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b65690 ["COPY", "tmp:0:8", ["const:26c:8"]]
+ 00b65690 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b65690 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b65690 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b646a8 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00b6569c ["COPY", "register:4048:8", ["const:c9c000:8"]]
~~~


<a id="compare-efd8e0e1e81c06861ed648c5c7de9ce0"></a>

### [`00b646d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b646d0.md) → [`00b656c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b65/00b656c4.md) _ZNK8firebase7Variant18assert_is_not_typeENS0_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b656ec",
      "incomplete_value": false,
      "site": "00b656f4",
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
            "const:26c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b646f8",
      "incomplete_value": false,
      "site": "00b64700",
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
            "const:19f:8"
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
      "00b656ec",
      "PARAM",
      [
        "storage",
        "002ae19f",
        null,
        "string"
      ]
    ],
    [
      "00b656fc",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b65708",
      "PARAM",
      [
        "storage",
        "002a95e9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b656ec",
      "PARAM",
      [
        "storage",
        "002ae26c",
        null,
        "string"
      ]
    ],
    [
      "00b656fc",
      "READ",
      [
        "storage",
        "00c9c890",
        null,
        "pointer"
      ]
    ],
    [
      "00b65708",
      "PARAM",
      [
        "storage",
        "002a96b6",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b64700 ["INT_ADD", "register:40f0:8", ["const:b64700:8", "const:4:8"]]
- 00b64700 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b656f4 ["INT_ADD", "register:40f0:8", ["const:b656f4:8", "const:4:8"]]
+ 00b656f4 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b646f8 ["COPY", "tmp:0:8", ["const:19f:8"]]
- 00b646f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b646f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b646f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b656ec ["COPY", "tmp:0:8", ["const:26c:8"]]
+ 00b656ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b656ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b656ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b64704 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00b656f8 ["COPY", "register:4040:8", ["const:c9c000:8"]]
~~~


<a id="compare-8eecf6a4ac893d6d865f2436347aac9c"></a>

### [`00b64724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64724.md) → [`00b65718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b65/00b65718.md) _ZNK8firebase7Variant16assert_is_stringEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5abf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abf0.md) · 呼出先 2件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5bbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bbc0.md) · 呼出先 2件 [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65758",
      "incomplete_value": false,
      "site": "00b6575c",
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
            "const:6c9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b64764",
      "incomplete_value": false,
      "site": "00b64768",
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
            "const:5eb:8"
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
      "00b65758",
      "PARAM",
      [
        "storage",
        "002be5eb",
        null,
        "string"
      ]
    ],
    [
      "00b65768",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b65774",
      "PARAM",
      [
        "storage",
        "002bf807",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b65758",
      "PARAM",
      [
        "storage",
        "002be6c9",
        null,
        "string"
      ]
    ],
    [
      "00b65768",
      "READ",
      [
        "storage",
        "00c9c890",
        null,
        "pointer"
      ]
    ],
    [
      "00b65774",
      "PARAM",
      [
        "storage",
        "002bf8e5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b64768 ["INT_ADD", "register:40f0:8", ["const:b64768:8", "const:4:8"]]
- 00b64768 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b6575c ["INT_ADD", "register:40f0:8", ["const:b6575c:8", "const:4:8"]]
+ 00b6575c ["CALL", null, ["callee:00c5bd40:8"]]
- 00b64764 ["COPY", "tmp:0:8", ["const:5eb:8"]]
- 00b64764 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b64764 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b64764 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b65758 ["COPY", "tmp:0:8", ["const:6c9:8"]]
+ 00b65758 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b65758 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b65758 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b6476c ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00b65760 ["COPY", "register:4048:8", ["const:c9c000:8"]]
~~~


<a id="compare-3644c93077bb50861a2d6d1acf0d3cb5"></a>

### [`00b64790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64790.md) → [`00b65784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b65/00b65784.md) _ZNK8firebase7Variant14assert_is_blobEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b660.md) · 呼出先 2件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c630.md) · 呼出先 2件 [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 78.26% / 新版 78.26%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b657b4",
      "incomplete_value": false,
      "site": "00b657b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:ed2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b647c0",
      "incomplete_value": false,
      "site": "00b647c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:df4:8"
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
      "00b657b4",
      "PARAM",
      [
        "storage",
        "002bbdf4",
        null,
        "string"
      ]
    ],
    [
      "00b657c4",
      "READ",
      [
        "storage",
        "00c9b8c0",
        null,
        "pointer"
      ]
    ],
    [
      "00b657d0",
      "PARAM",
      [
        "storage",
        "002a7159",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b657b4",
      "PARAM",
      [
        "storage",
        "002bbed2",
        null,
        "string"
      ]
    ],
    [
      "00b657c4",
      "READ",
      [
        "storage",
        "00c9c890",
        null,
        "pointer"
      ]
    ],
    [
      "00b657d0",
      "PARAM",
      [
        "storage",
        "002a72b1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b647c4 ["INT_ADD", "register:40f0:8", ["const:b647c4:8", "const:4:8"]]
- 00b647c4 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b657b8 ["INT_ADD", "register:40f0:8", ["const:b657b8:8", "const:4:8"]]
+ 00b657b8 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b647c0 ["COPY", "tmp:0:8", ["const:df4:8"]]
- 00b647c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b647c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b647c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b657b4 ["COPY", "tmp:0:8", ["const:ed2:8"]]
+ 00b657b4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b657b4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b657b4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b647c8 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00b657bc ["COPY", "register:4048:8", ["const:c9c000:8"]]
~~~


<a id="compare-f2fe8033a5a3d5d961356ad956fd57c1"></a>

### [`00b647ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b647ec.md) → [`00b657e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b65/00b657e0.md) _ZNK8firebase7Variant8AsStringEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5abe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abe0.md) · 呼出先 10件 [`00b64990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64990.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5bbb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bbb0.md) · 呼出先 10件 [`00b65984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b65/00b65984.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65870",
      "incomplete_value": false,
      "site": "00b65878",
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
            "const:188:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6487c",
      "incomplete_value": false,
      "site": "00b64884",
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
            "const:bb:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b658a4",
      "incomplete_value": false,
      "site": "00b658ac",
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
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b648b0",
      "incomplete_value": false,
      "site": "00b648b8",
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
            "const:61b:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b65824",
      "DATA",
      [
        "storage",
        "0030bc98",
        "switchD_00b6483c::switchdataD_0030bc98",
        "byte"
      ]
    ],
    [
      "00b65870",
      "PARAM",
      [
        "storage",
        "002ad0bb",
        null,
        null
      ]
    ],
    [
      "00b658a4",
      "PARAM",
      [
        "storage",
        "002a961b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b65824",
      "DATA",
      [
        "storage",
        "0030bcd8",
        "switchD_00b65830::switchdataD_0030bcd8",
        "byte"
      ]
    ],
    [
      "00b65870",
      "PARAM",
      [
        "storage",
        "002ad188",
        null,
        null
      ]
    ],
    [
      "00b658a4",
      "PARAM",
      [
        "storage",
        "002a96e8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b64884 ["INT_ADD", "register:40f0:8", ["const:b64884:8", "const:4:8"]]
- 00b64884 ["CALL", null, ["callee:00b65984:8"]]
+ 00b65878 ["INT_ADD", "register:40f0:8", ["const:b65878:8", "const:4:8"]]
+ 00b65878 ["CALL", null, ["callee:00b65984:8"]]
- 00b648b8 ["INT_ADD", "register:40f0:8", ["const:b648b8:8", "const:4:8"]]
- 00b648b8 ["CALL", null, ["callee:00b65984:8"]]
+ 00b658ac ["INT_ADD", "register:40f0:8", ["const:b658ac:8", "const:4:8"]]
+ 00b658ac ["CALL", null, ["callee:00b65984:8"]]
- 00b64828 ["COPY", "tmp:0:8", ["const:c98:8"]]
- 00b64828 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b64828 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b64828 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b6581c ["COPY", "tmp:0:8", ["const:cd8:8"]]
+ 00b6581c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b6581c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b6581c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-947ab3d85ef6a4e959d11b06c1faca6b"></a>

### [`00b64c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64c14.md) → [`00b65c08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b65/00b65c08.md) _ZNK8firebase7Variant6AsBoolEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5bec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bec0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5ce90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5ce90.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.39% / 新版 97.39%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b65d30",
      "incomplete_value": false,
      "site": "00b65d3c",
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
      "definition_site": "00b64d3c",
      "incomplete_value": false,
      "site": "00b64d48",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b65dbc",
      "incomplete_value": false,
      "site": "00b65dc8",
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
            "const:e20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b64dc8",
      "incomplete_value": false,
      "site": "00b64dd4",
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
            "const:de0:8"
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
      "00b65d3c",
      "DATA",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ],
    [
      "00b65dc8",
      "DATA",
      [
        "storage",
        "0029ede0",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b65d3c",
      "DATA",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ],
    [
      "00b65dc8",
      "DATA",
      [
        "storage",
        "0029ee20",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b64c48 ["INT_ADD", "register:40f0:8", ["const:b64c48:8", "const:4:8"]]
- 00b64c48 ["CALL", null, ["callee:00c5ce90:8"]]
+ 00b65c3c ["INT_ADD", "register:40f0:8", ["const:b65c3c:8", "const:4:8"]]
+ 00b65c3c ["CALL", null, ["callee:00c5ce90:8"]]
- 00b64c5c ["INT_ADD", "register:40f0:8", ["const:b64c5c:8", "const:4:8"]]
- 00b64c5c ["CALL", null, ["callee:00c5b8d0:8"]]
+ 00b65c50 ["INT_ADD", "register:40f0:8", ["const:b65c50:8", "const:4:8"]]
+ 00b65c50 ["CALL", null, ["callee:00c5b8d0:8"]]
- 00b64c6c ["INT_ADD", "register:40f0:8", ["const:b64c6c:8", "const:4:8"]]
- 00b64c6c ["CALL", null, ["callee:00c5ce90:8"]]
+ 00b65c60 ["INT_ADD", "register:40f0:8", ["const:b65c60:8", "const:4:8"]]
+ 00b65c60 ["CALL", null, ["callee:00c5ce90:8"]]
~~~


<a id="compare-ecef58639aa9a74adeba9768eeb7a892"></a>

### [`00b64e78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64e78.md) → [`00b65e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b65/00b65e6c.md) _ZN8firebase7Variant8TypeNameENS0_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0c0.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c090.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate, store_destination

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b65e98",
      "incomplete_value": true,
      "site": "00b65e98",
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
            "const:10c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b64ea4",
      "incomplete_value": true,
      "site": "00b64ea4",
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
            "const:14c:8"
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
      "definition_site": "00b65eb0",
      "incomplete_value": false,
      "site": "00b65eb4",
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
            "const:6ee:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b64ebc",
      "incomplete_value": false,
      "site": "00b64ec0",
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
            "const:621:8"
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
      "definition_site": "00b65ec4",
      "incomplete_value": true,
      "site": "00b65ecc",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b64ed0",
      "incomplete_value": true,
      "site": "00b64ed8",
      "value": [
        "LOAD",
        "8",
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
      "00b65e7c",
      "READ",
      [
        "storage",
        "0112614c",
        null,
        "undefined1"
      ]
    ],
    [
      "00b65e98",
      "WRITE",
      [
        "storage",
        "0112614c",
        null,
        "undefined1"
      ]
    ],
    [
      "00b65eb0",
      "PARAM",
      [
        "storage",
        "002a9621",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b65e7c",
      "READ",
      [
        "storage",
        "0112710c",
        null,
        "undefined1"
      ]
    ],
    [
      "00b65e98",
      "WRITE",
      [
        "storage",
        "0112710c",
        null,
        "undefined1"
      ]
    ],
    [
      "00b65eb0",
      "PARAM",
      [
        "storage",
        "002a96ee",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b64ea4 ["COPY", "tmp:0:4", ["register:4040:4"]]
- 00b64ea4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "const:14c:8"]]
- 00b64ea4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b65e98 ["COPY", "tmp:0:4", ["register:4040:4"]]
+ 00b65e98 ["INT_ADD", "tmp:1:8", ["register:4048:8", "const:10c:8"]]
+ 00b65e98 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b64ec0 ["INT_ADD", "register:40f0:8", ["const:b64ec0:8", "const:4:8"]]
- 00b64ec0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b65eb4 ["INT_ADD", "register:40f0:8", ["const:b65eb4:8", "const:4:8"]]
+ 00b65eb4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b64e84 ["COPY", "register:4048:8", ["const:1126000:8"]]
+ 00b65e78 ["COPY", "register:4048:8", ["const:1127000:8"]]
~~~


<a id="compare-3f9f6a40e5dd8768836ce12464d7587f"></a>

### [`00b654f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b654f0.md) → [`00b664e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b664e4.md) _ZN8firebase5MutexC1ENS0_4ModeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md) · 呼出先 6件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5bf50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf50.md) [`00c5bf60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf60.md) [`00c5bf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf70.md)
- 新版 呼出元 2件 [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd20.md) · 呼出先 6件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5cf20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf20.md) [`00c5cf30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf30.md) [`00c5cf40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 91.49% / 新版 91.49%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6651c",
      "incomplete_value": false,
      "site": "00b66520",
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
            "const:18c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65528",
      "incomplete_value": false,
      "site": "00b6552c",
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
            "const:bf:8"
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
      "definition_site": "00b6653c",
      "incomplete_value": false,
      "site": "00b66540",
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
            "const:18c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65548",
      "incomplete_value": false,
      "site": "00b6554c",
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
            "const:bf:8"
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
      "definition_site": "00b66558",
      "incomplete_value": false,
      "site": "00b6655c",
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
            "const:18c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65564",
      "incomplete_value": false,
      "site": "00b65568",
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
            "const:bf:8"
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
      "00b6651c",
      "PARAM",
      [
        "storage",
        "002ad0bf",
        null,
        "string"
      ]
    ],
    [
      "00b6653c",
      "PARAM",
      [
        "storage",
        "002ad0bf",
        null,
        "string"
      ]
    ],
    [
      "00b66558",
      "PARAM",
      [
        "storage",
        "002ad0bf",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b6651c",
      "PARAM",
      [
        "storage",
        "002ad18c",
        null,
        "string"
      ]
    ],
    [
      "00b6653c",
      "PARAM",
      [
        "storage",
        "002ad18c",
        null,
        "string"
      ]
    ],
    [
      "00b66558",
      "PARAM",
      [
        "storage",
        "002ad18c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6552c ["INT_ADD", "register:40f0:8", ["const:b6552c:8", "const:4:8"]]
- 00b6552c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b66520 ["INT_ADD", "register:40f0:8", ["const:b66520:8", "const:4:8"]]
+ 00b66520 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b6554c ["INT_ADD", "register:40f0:8", ["const:b6554c:8", "const:4:8"]]
- 00b6554c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b66540 ["INT_ADD", "register:40f0:8", ["const:b66540:8", "const:4:8"]]
+ 00b66540 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b65568 ["INT_ADD", "register:40f0:8", ["const:b65568:8", "const:4:8"]]
- 00b65568 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b6655c ["INT_ADD", "register:40f0:8", ["const:b6655c:8", "const:4:8"]]
+ 00b6655c ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-72ca1def9cb6293485bb6cfbc635cefc"></a>

### [`00b6562c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b6562c.md) → [`00b66620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66620.md) _ZN8firebase3app19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEENS_4util16Clas

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
      "definition_site": "00b6664c",
      "incomplete_value": true,
      "site": "00b6664c",
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
            "const:110:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65658",
      "incomplete_value": true,
      "site": "00b65658",
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
            "const:150:8"
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
      "definition_site": "00b66634",
      "incomplete_value": true,
      "site": "00b66634",
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
      "definition_site": "00b65640",
      "incomplete_value": true,
      "site": "00b65640",
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
      "definition_site": "00b66640",
      "incomplete_value": false,
      "site": "00b66644",
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
            "const:dba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6564c",
      "incomplete_value": false,
      "site": "00b65650",
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
            "const:ceb:8"
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
      "00b66630",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66640",
      "PARAM",
      [
        "storage",
        "002b6ceb",
        null,
        "string"
      ]
    ],
    [
      "00b6664c",
      "WRITE",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66630",
      "READ",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66640",
      "PARAM",
      [
        "storage",
        "002b6dba",
        null,
        "string"
      ]
    ],
    [
      "00b6664c",
      "WRITE",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65650 ["INT_ADD", "register:40f0:8", ["const:b65650:8", "const:4:8"]]
- 00b65650 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b66644 ["INT_ADD", "register:40f0:8", ["const:b66644:8", "const:4:8"]]
+ 00b66644 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65658 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:150:8"]]
- 00b65658 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b6664c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:110:8"]]
+ 00b6664c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65638 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b6662c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-8ac8c924edd833bb6d2c4d542fe32474"></a>

### [`00b6566c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b6566c.md) → [`00b66660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66660.md) _ZN8firebase3app19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEE

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
      "definition_site": "00b6668c",
      "incomplete_value": true,
      "site": "00b6668c",
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
            "const:110:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65698",
      "incomplete_value": true,
      "site": "00b65698",
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
            "const:150:8"
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
      "definition_site": "00b66674",
      "incomplete_value": true,
      "site": "00b66674",
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
      "definition_site": "00b65680",
      "incomplete_value": true,
      "site": "00b65680",
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
      "definition_site": "00b6667c",
      "incomplete_value": false,
      "site": "00b66684",
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
            "const:dba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65688",
      "incomplete_value": false,
      "site": "00b65690",
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
            "const:ceb:8"
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
      "00b66670",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6667c",
      "PARAM",
      [
        "storage",
        "002b6ceb",
        null,
        "string"
      ]
    ],
    [
      "00b6668c",
      "WRITE",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66670",
      "READ",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6667c",
      "PARAM",
      [
        "storage",
        "002b6dba",
        null,
        "string"
      ]
    ],
    [
      "00b6668c",
      "WRITE",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65690 ["INT_ADD", "register:40f0:8", ["const:b65690:8", "const:4:8"]]
- 00b65690 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b66684 ["INT_ADD", "register:40f0:8", ["const:b66684:8", "const:4:8"]]
+ 00b66684 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65698 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:150:8"]]
- 00b65698 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b6668c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:110:8"]]
+ 00b6668c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65678 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b6666c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-145325287a21b0afafa8b73bd880f778"></a>

### [`00b656ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b656ac.md) → [`00b666a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b666a0.md) _ZN8firebase3app10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00b666d0",
      "incomplete_value": true,
      "site": "00b666d0",
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
            "const:110:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b656dc",
      "incomplete_value": true,
      "site": "00b656dc",
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
            "const:150:8"
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
      "definition_site": "00b666b4",
      "incomplete_value": true,
      "site": "00b666b4",
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
      "definition_site": "00b656c0",
      "incomplete_value": true,
      "site": "00b656c0",
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
      "definition_site": "00b666c0",
      "incomplete_value": false,
      "site": "00b666c8",
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
            "const:dba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b656cc",
      "incomplete_value": false,
      "site": "00b656d4",
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
            "const:ceb:8"
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
      "00b666b0",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b666c0",
      "PARAM",
      [
        "storage",
        "002b6ceb",
        null,
        "string"
      ]
    ],
    [
      "00b666d0",
      "WRITE",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b666b0",
      "READ",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ],
    [
      "00b666c0",
      "PARAM",
      [
        "storage",
        "002b6dba",
        null,
        "string"
      ]
    ],
    [
      "00b666d0",
      "WRITE",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b656d4 ["INT_ADD", "register:40f0:8", ["const:b656d4:8", "const:4:8"]]
- 00b656d4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b666c8 ["INT_ADD", "register:40f0:8", ["const:b666c8:8", "const:4:8"]]
+ 00b666c8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b656dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:150:8"]]
- 00b656dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b666d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:110:8"]]
+ 00b666d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b656b8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b666ac ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-5c1dcbeb088ca6a3810402b13b54647b"></a>

### [`00b656f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b656f0.md) → [`00b666e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b666e4.md) _ZN8firebase3app10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b66714",
      "incomplete_value": true,
      "site": "00b66714",
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
            "const:110:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65720",
      "incomplete_value": true,
      "site": "00b65720",
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
            "const:150:8"
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
      "definition_site": "00b666f8",
      "incomplete_value": true,
      "site": "00b666f8",
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
      "definition_site": "00b65704",
      "incomplete_value": true,
      "site": "00b65704",
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
      "definition_site": "00b66700",
      "incomplete_value": true,
      "site": "00b6670c",
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
            "const:dba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6570c",
      "incomplete_value": true,
      "site": "00b65718",
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
            "const:ceb:8"
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
      "00b666f4",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66700",
      "PARAM",
      [
        "storage",
        "002b6ceb",
        null,
        "string"
      ]
    ],
    [
      "00b66714",
      "WRITE",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b666f4",
      "READ",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66700",
      "PARAM",
      [
        "storage",
        "002b6dba",
        null,
        "string"
      ]
    ],
    [
      "00b66714",
      "WRITE",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65718 ["INT_ADD", "register:40f0:8", ["const:b65718:8", "const:4:8"]]
- 00b65718 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b6670c ["INT_ADD", "register:40f0:8", ["const:b6670c:8", "const:4:8"]]
+ 00b6670c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65720 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:150:8"]]
- 00b65720 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66714 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:110:8"]]
+ 00b66714 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b656fc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b666f0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-0c5e044e5d92a88a372d36bf4b3d0a91"></a>

### [`00b65740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65740.md) → [`00b66734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66734.md) _ZN8firebase3app15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b6678c",
      "incomplete_value": true,
      "site": "00b6678c",
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
            "const:118:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65798",
      "incomplete_value": true,
      "site": "00b65798",
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
            "const:158:8"
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
      "definition_site": "00b66768",
      "incomplete_value": true,
      "site": "00b66774",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:110:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65774",
      "incomplete_value": true,
      "site": "00b65780",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:150:8"
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
      "00b66748",
      "READ",
      [
        "storage",
        "01126158",
        null,
        "undefined1"
      ]
    ],
    [
      "00b66768",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6678c",
      "WRITE",
      [
        "storage",
        "01126158",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b66748",
      "READ",
      [
        "storage",
        "01127118",
        null,
        "undefined1"
      ]
    ],
    [
      "00b66768",
      "READ",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6678c",
      "WRITE",
      [
        "storage",
        "01127118",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65780 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b65780 ["INT_ADD", "register:40f0:8", ["const:b65780:8", "const:4:8"]]
- 00b65780 ["CALLIND", null, ["register:0:8"]]
+ 00b66774 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b66774 ["INT_ADD", "register:40f0:8", ["const:b66774:8", "const:4:8"]]
+ 00b66774 ["CALLIND", null, ["register:0:8"]]
- 00b65798 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b65798 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:158:8"]]
- 00b65798 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b6678c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b6678c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:118:8"]]
+ 00b6678c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b65750 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00b66744 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-8245120f2e1b6e795f91f0c32a6f3f45"></a>

### [`00b657ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b657ac.md) → [`00b667a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b667a0.md) _ZN8firebase3app12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 82.14% / 新版 82.14%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b667dc",
      "incomplete_value": true,
      "site": "00b667dc",
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
            "const:118:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b657e8",
      "incomplete_value": true,
      "site": "00b657e8",
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
            "const:158:8"
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
      "definition_site": "00b667fc",
      "incomplete_value": true,
      "site": "00b667fc",
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
            "const:110:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65808",
      "incomplete_value": true,
      "site": "00b65808",
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
            "const:150:8"
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
      "definition_site": "00b667b8",
      "incomplete_value": true,
      "site": "00b667b8",
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
      "definition_site": "00b657c4",
      "incomplete_value": true,
      "site": "00b657c4",
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
      "00b667b4",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b667c0",
      "READ",
      [
        "storage",
        "01126158",
        null,
        "undefined1"
      ]
    ],
    [
      "00b667dc",
      "WRITE",
      [
        "storage",
        "01126158",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b667b4",
      "READ",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ],
    [
      "00b667c0",
      "READ",
      [
        "storage",
        "01127118",
        null,
        "undefined1"
      ]
    ],
    [
      "00b667dc",
      "WRITE",
      [
        "storage",
        "01127118",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b657e8 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b657e8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b657e8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:158:8"]]
- 00b657e8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b667dc ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b667dc ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b667dc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:118:8"]]
+ 00b667dc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b65804 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b65804 ["INT_ADD", "register:40f0:8", ["const:b65804:8", "const:4:8"]]
- 00b65804 ["CALLIND", null, ["register:0:8"]]
+ 00b667f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b667f8 ["INT_ADD", "register:40f0:8", ["const:b667f8:8", "const:4:8"]]
+ 00b667f8 ["CALLIND", null, ["register:0:8"]]
- 00b65808 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:150:8"]]
- 00b65808 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b65808 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b667fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:110:8"]]
+ 00b667fc ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b667fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-8b7b0d63f6a56c52ebcd29c9a08ae727"></a>

### [`00b6581c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b6581c.md) → [`00b66810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66810.md) _ZN8firebase3app14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b66850",
      "incomplete_value": true,
      "site": "00b66850",
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
            "const:110:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6585c",
      "incomplete_value": true,
      "site": "00b6585c",
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
            "const:150:8"
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
      "definition_site": "00b6682c",
      "incomplete_value": true,
      "site": "00b6682c",
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
      "definition_site": "00b65838",
      "incomplete_value": true,
      "site": "00b65838",
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
      "definition_site": "00b66834",
      "incomplete_value": false,
      "site": "00b66848",
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
            "const:dba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65840",
      "incomplete_value": false,
      "site": "00b65854",
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
            "const:ceb:8"
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
      "00b66824",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66834",
      "PARAM",
      [
        "storage",
        "002b6ceb",
        null,
        "string"
      ]
    ],
    [
      "00b66850",
      "WRITE",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66824",
      "READ",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66834",
      "PARAM",
      [
        "storage",
        "002b6dba",
        null,
        "string"
      ]
    ],
    [
      "00b66850",
      "WRITE",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65854 ["INT_ADD", "register:40f0:8", ["const:b65854:8", "const:4:8"]]
- 00b65854 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b66848 ["INT_ADD", "register:40f0:8", ["const:b66848:8", "const:4:8"]]
+ 00b66848 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b6585c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:150:8"]]
- 00b6585c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66850 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:110:8"]]
+ 00b66850 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65828 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00b6681c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-0b47e0cbfd87b796dc9999e1ac6f0d86"></a>

### [`00b6588c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b6588c.md) → [`00b66880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66880.md) _ZN8firebase3app11GetMethodIdENS0_6MethodE

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
      "definition_site": "00b6689c",
      "incomplete_value": false,
      "site": "00b668a0",
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
      "definition_site": "00b658a8",
      "incomplete_value": false,
      "site": "00b658ac",
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
      "definition_site": "00b668ac",
      "incomplete_value": true,
      "site": "00b668b8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b658b8",
      "incomplete_value": true,
      "site": "00b658c4",
      "value": [
        "LOAD",
        "8",
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
      "00b6689c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b668ac",
      "DATA",
      [
        "storage",
        "01126160",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b6689c",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b668ac",
      "DATA",
      [
        "storage",
        "01127120",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b658ac ["INT_ADD", "register:40f0:8", ["const:b658ac:8", "const:4:8"]]
- 00b658ac ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b668a0 ["INT_ADD", "register:40f0:8", ["const:b668a0:8", "const:4:8"]]
+ 00b668a0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b658a8 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b658a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b658a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b658a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b6689c ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b6689c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b6689c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b6689c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b658b0 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00b668a4 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-ae96f016f23fe44842b96fd54552522a"></a>

### [`00b658c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b658c8.md) → [`00b668bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b668bc.md) _ZN8firebase3app13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b668fc",
      "incomplete_value": true,
      "site": "00b668fc",
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
            "const:110:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65908",
      "incomplete_value": true,
      "site": "00b65908",
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
            "const:150:8"
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
      "definition_site": "00b668d8",
      "incomplete_value": true,
      "site": "00b668d8",
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
      "definition_site": "00b658e4",
      "incomplete_value": true,
      "site": "00b658e4",
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
      "definition_site": "00b668e0",
      "incomplete_value": false,
      "site": "00b668f4",
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
            "const:dba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b658ec",
      "incomplete_value": false,
      "site": "00b65900",
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
            "const:ceb:8"
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
      "00b668d0",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b668e0",
      "PARAM",
      [
        "storage",
        "002b6ceb",
        null,
        "string"
      ]
    ],
    [
      "00b668fc",
      "WRITE",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b668d0",
      "READ",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ],
    [
      "00b668e0",
      "PARAM",
      [
        "storage",
        "002b6dba",
        null,
        "string"
      ]
    ],
    [
      "00b668fc",
      "WRITE",
      [
        "storage",
        "01127110",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65900 ["INT_ADD", "register:40f0:8", ["const:b65900:8", "const:4:8"]]
- 00b65900 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b668f4 ["INT_ADD", "register:40f0:8", ["const:b668f4:8", "const:4:8"]]
+ 00b668f4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65908 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:150:8"]]
- 00b65908 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b668fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:110:8"]]
+ 00b668fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b658d4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00b668c8 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-2840ff12f9904907b4f7820890c6daeb"></a>

### [`00b65938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65938.md) → [`00b6692c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b6692c.md) _ZN8firebase3app10GetFieldIdENS0_5FieldE

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
      "definition_site": "00b66948",
      "incomplete_value": false,
      "site": "00b6694c",
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
      "definition_site": "00b65954",
      "incomplete_value": false,
      "site": "00b65958",
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
      "definition_site": "00b66958",
      "incomplete_value": true,
      "site": "00b66964",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b65964",
      "incomplete_value": true,
      "site": "00b65970",
      "value": [
        "LOAD",
        "8",
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
      "00b66948",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b66958",
      "DATA",
      [
        "storage",
        "011261a8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b66948",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b66958",
      "DATA",
      [
        "storage",
        "01127168",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65958 ["INT_ADD", "register:40f0:8", ["const:b65958:8", "const:4:8"]]
- 00b65958 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b6694c ["INT_ADD", "register:40f0:8", ["const:b6694c:8", "const:4:8"]]
+ 00b6694c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b65954 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b65954 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b65954 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b65954 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b66948 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b66948 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66948 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66948 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b6595c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00b66950 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-43930db6da2c7d394a348c3b0b87816d"></a>

### [`00b65974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65974.md) → [`00b66968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66968.md) _ZN8firebase15options_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEEN

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
      "definition_site": "00b66994",
      "incomplete_value": true,
      "site": "00b66994",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b659a0",
      "incomplete_value": true,
      "site": "00b659a0",
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
            "const:1b0:8"
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
      "definition_site": "00b6697c",
      "incomplete_value": true,
      "site": "00b6697c",
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
      "definition_site": "00b65988",
      "incomplete_value": true,
      "site": "00b65988",
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
      "definition_site": "00b66988",
      "incomplete_value": false,
      "site": "00b6698c",
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
            "const:ad4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65994",
      "incomplete_value": false,
      "site": "00b65998",
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
            "const:a09:8"
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
      "00b66978",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66988",
      "PARAM",
      [
        "storage",
        "002a2a09",
        null,
        "string"
      ]
    ],
    [
      "00b66994",
      "WRITE",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66978",
      "READ",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66988",
      "PARAM",
      [
        "storage",
        "002a2ad4",
        null,
        "string"
      ]
    ],
    [
      "00b66994",
      "WRITE",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65998 ["INT_ADD", "register:40f0:8", ["const:b65998:8", "const:4:8"]]
- 00b65998 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b6698c ["INT_ADD", "register:40f0:8", ["const:b6698c:8", "const:4:8"]]
+ 00b6698c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b659a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1b0:8"]]
- 00b659a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66994 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:170:8"]]
+ 00b66994 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65980 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b66974 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-100ce01151d24609bbf184c607a7feb1"></a>

### [`00b659b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b659b4.md) → [`00b669a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b669a8.md) _ZN8firebase15options_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEE

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
      "definition_site": "00b669d4",
      "incomplete_value": true,
      "site": "00b669d4",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b659e0",
      "incomplete_value": true,
      "site": "00b659e0",
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
            "const:1b0:8"
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
      "definition_site": "00b669bc",
      "incomplete_value": true,
      "site": "00b669bc",
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
      "definition_site": "00b659c8",
      "incomplete_value": true,
      "site": "00b659c8",
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
      "definition_site": "00b669c4",
      "incomplete_value": false,
      "site": "00b669cc",
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
            "const:ad4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b659d0",
      "incomplete_value": false,
      "site": "00b659d8",
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
            "const:a09:8"
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
      "00b669b8",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b669c4",
      "PARAM",
      [
        "storage",
        "002a2a09",
        null,
        "string"
      ]
    ],
    [
      "00b669d4",
      "WRITE",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b669b8",
      "READ",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ],
    [
      "00b669c4",
      "PARAM",
      [
        "storage",
        "002a2ad4",
        null,
        "string"
      ]
    ],
    [
      "00b669d4",
      "WRITE",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b659d8 ["INT_ADD", "register:40f0:8", ["const:b659d8:8", "const:4:8"]]
- 00b659d8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b669cc ["INT_ADD", "register:40f0:8", ["const:b669cc:8", "const:4:8"]]
+ 00b669cc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b659e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1b0:8"]]
- 00b659e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b669d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:170:8"]]
+ 00b669d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b659c0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b669b4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-030fd5f72010aa1ca90ab41ad9952f20"></a>

### [`00b659f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b659f4.md) → [`00b669e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b669e8.md) _ZN8firebase15options_builder10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00b66a18",
      "incomplete_value": true,
      "site": "00b66a18",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65a24",
      "incomplete_value": true,
      "site": "00b65a24",
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
            "const:1b0:8"
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
      "definition_site": "00b669fc",
      "incomplete_value": true,
      "site": "00b669fc",
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
      "definition_site": "00b65a08",
      "incomplete_value": true,
      "site": "00b65a08",
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
      "definition_site": "00b66a08",
      "incomplete_value": false,
      "site": "00b66a10",
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
            "const:ad4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65a14",
      "incomplete_value": false,
      "site": "00b65a1c",
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
            "const:a09:8"
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
      "00b669f8",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66a08",
      "PARAM",
      [
        "storage",
        "002a2a09",
        null,
        "string"
      ]
    ],
    [
      "00b66a18",
      "WRITE",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b669f8",
      "READ",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66a08",
      "PARAM",
      [
        "storage",
        "002a2ad4",
        null,
        "string"
      ]
    ],
    [
      "00b66a18",
      "WRITE",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65a1c ["INT_ADD", "register:40f0:8", ["const:b65a1c:8", "const:4:8"]]
- 00b65a1c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b66a10 ["INT_ADD", "register:40f0:8", ["const:b66a10:8", "const:4:8"]]
+ 00b66a10 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65a24 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1b0:8"]]
- 00b65a24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66a18 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:170:8"]]
+ 00b66a18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65a00 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b669f4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-827fa56314a89b173d2ad2c2577f4c68"></a>

### [`00b65a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65a38.md) → [`00b66a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66a2c.md) _ZN8firebase15options_builder10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b66a5c",
      "incomplete_value": true,
      "site": "00b66a5c",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65a68",
      "incomplete_value": true,
      "site": "00b65a68",
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
            "const:1b0:8"
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
      "definition_site": "00b66a40",
      "incomplete_value": true,
      "site": "00b66a40",
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
      "definition_site": "00b65a4c",
      "incomplete_value": true,
      "site": "00b65a4c",
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
      "definition_site": "00b66a48",
      "incomplete_value": false,
      "site": "00b66a54",
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
            "const:ad4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65a54",
      "incomplete_value": false,
      "site": "00b65a60",
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
            "const:a09:8"
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
      "00b66a3c",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66a48",
      "PARAM",
      [
        "storage",
        "002a2a09",
        null,
        "string"
      ]
    ],
    [
      "00b66a5c",
      "WRITE",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66a3c",
      "READ",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66a48",
      "PARAM",
      [
        "storage",
        "002a2ad4",
        null,
        "string"
      ]
    ],
    [
      "00b66a5c",
      "WRITE",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65a60 ["INT_ADD", "register:40f0:8", ["const:b65a60:8", "const:4:8"]]
- 00b65a60 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b66a54 ["INT_ADD", "register:40f0:8", ["const:b66a54:8", "const:4:8"]]
+ 00b66a54 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65a68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1b0:8"]]
- 00b65a68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66a5c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:170:8"]]
+ 00b66a5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65a44 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b66a38 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-115ad6497eab21c0bf083577827f983a"></a>

### [`00b65a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65a88.md) → [`00b66a7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66a7c.md) _ZN8firebase15options_builder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b66ad4",
      "incomplete_value": true,
      "site": "00b66ad4",
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
            "const:178:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65ae0",
      "incomplete_value": true,
      "site": "00b65ae0",
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
            "const:1b8:8"
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
      "definition_site": "00b66ab0",
      "incomplete_value": true,
      "site": "00b66abc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:170:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65abc",
      "incomplete_value": true,
      "site": "00b65ac8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1b0:8"
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
      "00b66a90",
      "READ",
      [
        "storage",
        "011261b8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b66ab0",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66ad4",
      "WRITE",
      [
        "storage",
        "011261b8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b66a90",
      "READ",
      [
        "storage",
        "01127178",
        null,
        "undefined1"
      ]
    ],
    [
      "00b66ab0",
      "READ",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66ad4",
      "WRITE",
      [
        "storage",
        "01127178",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65ac8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b65ac8 ["INT_ADD", "register:40f0:8", ["const:b65ac8:8", "const:4:8"]]
- 00b65ac8 ["CALLIND", null, ["register:0:8"]]
+ 00b66abc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b66abc ["INT_ADD", "register:40f0:8", ["const:b66abc:8", "const:4:8"]]
+ 00b66abc ["CALLIND", null, ["register:0:8"]]
- 00b65ae0 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b65ae0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:1b8:8"]]
- 00b65ae0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b66ad4 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b66ad4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:178:8"]]
+ 00b66ad4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b65a98 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00b66a8c ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-ba3d9dcaa5674e8ef1382e2c3fe6f9ea"></a>

### [`00b65af4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65af4.md) → [`00b66ae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66ae8.md) _ZN8firebase15options_builder12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b66b24",
      "incomplete_value": true,
      "site": "00b66b24",
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
            "const:178:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65b30",
      "incomplete_value": true,
      "site": "00b65b30",
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
            "const:1b8:8"
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
      "definition_site": "00b66b44",
      "incomplete_value": true,
      "site": "00b66b44",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65b50",
      "incomplete_value": true,
      "site": "00b65b50",
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
            "const:1b0:8"
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
      "definition_site": "00b66b00",
      "incomplete_value": true,
      "site": "00b66b00",
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
      "definition_site": "00b65b0c",
      "incomplete_value": true,
      "site": "00b65b0c",
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
      "00b66afc",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66b08",
      "READ",
      [
        "storage",
        "011261b8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b66b24",
      "WRITE",
      [
        "storage",
        "011261b8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b66afc",
      "READ",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66b08",
      "READ",
      [
        "storage",
        "01127178",
        null,
        "undefined1"
      ]
    ],
    [
      "00b66b24",
      "WRITE",
      [
        "storage",
        "01127178",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65b30 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b65b30 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b65b30 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:1b8:8"]]
- 00b65b30 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b66b24 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b66b24 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b66b24 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:178:8"]]
+ 00b66b24 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b65b4c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b65b4c ["INT_ADD", "register:40f0:8", ["const:b65b4c:8", "const:4:8"]]
- 00b65b4c ["CALLIND", null, ["register:0:8"]]
+ 00b66b40 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b66b40 ["INT_ADD", "register:40f0:8", ["const:b66b40:8", "const:4:8"]]
+ 00b66b40 ["CALLIND", null, ["register:0:8"]]
- 00b65b50 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:1b0:8"]]
- 00b65b50 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b65b50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b66b44 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:170:8"]]
+ 00b66b44 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b66b44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-366a9a0a5e292b51bad86224eef352fb"></a>

### [`00b65b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65b64.md) → [`00b66b58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66b58.md) _ZN8firebase15options_builder14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b66b98",
      "incomplete_value": true,
      "site": "00b66b98",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65ba4",
      "incomplete_value": true,
      "site": "00b65ba4",
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
            "const:1b0:8"
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
      "definition_site": "00b66b74",
      "incomplete_value": true,
      "site": "00b66b74",
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
      "definition_site": "00b65b80",
      "incomplete_value": true,
      "site": "00b65b80",
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
      "definition_site": "00b66b7c",
      "incomplete_value": false,
      "site": "00b66b90",
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
            "const:ad4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65b88",
      "incomplete_value": false,
      "site": "00b65b9c",
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
            "const:a09:8"
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
      "00b66b6c",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66b7c",
      "PARAM",
      [
        "storage",
        "002a2a09",
        null,
        "string"
      ]
    ],
    [
      "00b66b98",
      "WRITE",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66b6c",
      "READ",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66b7c",
      "PARAM",
      [
        "storage",
        "002a2ad4",
        null,
        "string"
      ]
    ],
    [
      "00b66b98",
      "WRITE",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65b9c ["INT_ADD", "register:40f0:8", ["const:b65b9c:8", "const:4:8"]]
- 00b65b9c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b66b90 ["INT_ADD", "register:40f0:8", ["const:b66b90:8", "const:4:8"]]
+ 00b66b90 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65ba4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:1b0:8"]]
- 00b65ba4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66b98 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:170:8"]]
+ 00b66b98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65b70 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00b66b64 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-6b9c4e75930b2733b13f24b3a81982a3"></a>

### [`00b65bd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65bd4.md) → [`00b66bc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66bc8.md) _ZN8firebase15options_builder11GetMethodIdENS0_6MethodE

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
      "definition_site": "00b66be4",
      "incomplete_value": false,
      "site": "00b66be8",
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
      "definition_site": "00b65bf0",
      "incomplete_value": false,
      "site": "00b65bf4",
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
      "definition_site": "00b66bf4",
      "incomplete_value": true,
      "site": "00b66c00",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b65c00",
      "incomplete_value": true,
      "site": "00b65c0c",
      "value": [
        "LOAD",
        "8",
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
      "00b66be4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b66bf4",
      "DATA",
      [
        "storage",
        "011261c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66be4",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b66bf4",
      "DATA",
      [
        "storage",
        "01127180",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65bf4 ["INT_ADD", "register:40f0:8", ["const:b65bf4:8", "const:4:8"]]
- 00b65bf4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b66be8 ["INT_ADD", "register:40f0:8", ["const:b66be8:8", "const:4:8"]]
+ 00b66be8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b65bf0 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b65bf0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b65bf0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b65bf0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b66be4 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b66be4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66be4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66be4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b65bf8 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00b66bec ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-72bd18c51f41bca3c8b3e56009712dc6"></a>

### [`00b65c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65c10.md) → [`00b66c04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66c04.md) _ZN8firebase15options_builder13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b66c44",
      "incomplete_value": true,
      "site": "00b66c44",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65c50",
      "incomplete_value": true,
      "site": "00b65c50",
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
            "const:1b0:8"
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
      "definition_site": "00b66c20",
      "incomplete_value": true,
      "site": "00b66c20",
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
      "definition_site": "00b65c2c",
      "incomplete_value": true,
      "site": "00b65c2c",
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
        "00b65c2c"
      ],
      [
        "FALL_THROUGH",
        "00b66c20"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b66c20",
      "incomplete_value": true,
      "site": "00b66c44",
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
      "definition_site": "00b65c2c",
      "incomplete_value": true,
      "site": "00b65c50",
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
      "00b66c18",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66c28",
      "PARAM",
      [
        "storage",
        "002a2a09",
        null,
        "string"
      ]
    ],
    [
      "00b66c44",
      "WRITE",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66c18",
      "READ",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66c28",
      "PARAM",
      [
        "storage",
        "002a2ad4",
        null,
        "string"
      ]
    ],
    [
      "00b66c44",
      "WRITE",
      [
        "storage",
        "01127170",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65c50 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:1b0:8"]]
- 00b65c50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66c44 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:170:8"]]
+ 00b66c44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65c1c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00b66c10 ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00b65c24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:1b0:8"]]
- 00b65c24 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b66c18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:170:8"]]
+ 00b66c18 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2539bf15cc7f632cf55b6723ac1be253"></a>

### [`00b65c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65c80.md) → [`00b66c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66c74.md) _ZN8firebase15options_builder10GetFieldIdENS0_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b66c90",
      "incomplete_value": false,
      "site": "00b66c94",
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
      "definition_site": "00b65c9c",
      "incomplete_value": false,
      "site": "00b65ca0",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b66c90",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b66ca0",
      "DATA",
      [
        "storage",
        "01126200",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b66c90",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b66ca0",
      "DATA",
      [
        "storage",
        "011271c0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65ca0 ["INT_ADD", "register:40f0:8", ["const:b65ca0:8", "const:4:8"]]
- 00b65ca0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b66c94 ["INT_ADD", "register:40f0:8", ["const:b66c94:8", "const:4:8"]]
+ 00b66c94 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b65c9c ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b65c9c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b65c9c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b65c9c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b66c90 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b66c90 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66c90 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66c90 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b65ca4 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00b66c98 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-63605dab2f54630c56ed2f98536e3601"></a>

### [`00b65cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65cbc.md) → [`00b66cb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66cb0.md) _ZN8firebase7options19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEENS_4util16

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
      "definition_site": "00b66cdc",
      "incomplete_value": true,
      "site": "00b66cdc",
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
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65ce8",
      "incomplete_value": true,
      "site": "00b65ce8",
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
            "const:208:8"
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
      "definition_site": "00b66cc4",
      "incomplete_value": true,
      "site": "00b66cc4",
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
      "definition_site": "00b65cd0",
      "incomplete_value": true,
      "site": "00b65cd0",
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
      "definition_site": "00b66cd0",
      "incomplete_value": false,
      "site": "00b66cd4",
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
            "const:a7a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65cdc",
      "incomplete_value": false,
      "site": "00b65ce0",
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
            "const:9ab:8"
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
      "00b66cc0",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66cd0",
      "PARAM",
      [
        "storage",
        "002b59ab",
        null,
        "string"
      ]
    ],
    [
      "00b66cdc",
      "WRITE",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66cc0",
      "READ",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66cd0",
      "PARAM",
      [
        "storage",
        "002b5a7a",
        null,
        "string"
      ]
    ],
    [
      "00b66cdc",
      "WRITE",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65ce0 ["INT_ADD", "register:40f0:8", ["const:b65ce0:8", "const:4:8"]]
- 00b65ce0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b66cd4 ["INT_ADD", "register:40f0:8", ["const:b66cd4:8", "const:4:8"]]
+ 00b66cd4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65ce8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:208:8"]]
- 00b65ce8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66cdc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1c8:8"]]
+ 00b66cdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65cc8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b66cbc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-b3170ba733050bd5c8dc0a052c1ba284"></a>

### [`00b65cfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65cfc.md) → [`00b66cf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66cf0.md) _ZN8firebase7options19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEE

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
      "definition_site": "00b66d1c",
      "incomplete_value": true,
      "site": "00b66d1c",
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
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65d28",
      "incomplete_value": true,
      "site": "00b65d28",
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
            "const:208:8"
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
      "definition_site": "00b66d04",
      "incomplete_value": true,
      "site": "00b66d04",
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
      "definition_site": "00b65d10",
      "incomplete_value": true,
      "site": "00b65d10",
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
      "definition_site": "00b66d0c",
      "incomplete_value": false,
      "site": "00b66d14",
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
            "const:a7a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65d18",
      "incomplete_value": false,
      "site": "00b65d20",
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
            "const:9ab:8"
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
      "00b66d00",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66d0c",
      "PARAM",
      [
        "storage",
        "002b59ab",
        null,
        "string"
      ]
    ],
    [
      "00b66d1c",
      "WRITE",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66d00",
      "READ",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66d0c",
      "PARAM",
      [
        "storage",
        "002b5a7a",
        null,
        "string"
      ]
    ],
    [
      "00b66d1c",
      "WRITE",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65d20 ["INT_ADD", "register:40f0:8", ["const:b65d20:8", "const:4:8"]]
- 00b65d20 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b66d14 ["INT_ADD", "register:40f0:8", ["const:b66d14:8", "const:4:8"]]
+ 00b66d14 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65d28 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:208:8"]]
- 00b65d28 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66d1c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1c8:8"]]
+ 00b66d1c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65d08 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b66cfc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-88f791d1bc0d4432ed5376b7f126d59f"></a>

### [`00b65d3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65d3c.md) → [`00b66d30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66d30.md) _ZN8firebase7options10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00b66d60",
      "incomplete_value": true,
      "site": "00b66d60",
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
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65d6c",
      "incomplete_value": true,
      "site": "00b65d6c",
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
            "const:208:8"
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
      "definition_site": "00b66d44",
      "incomplete_value": true,
      "site": "00b66d44",
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
      "definition_site": "00b65d50",
      "incomplete_value": true,
      "site": "00b65d50",
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
      "definition_site": "00b66d50",
      "incomplete_value": false,
      "site": "00b66d58",
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
            "const:a7a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65d5c",
      "incomplete_value": false,
      "site": "00b65d64",
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
            "const:9ab:8"
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
      "00b66d40",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66d50",
      "PARAM",
      [
        "storage",
        "002b59ab",
        null,
        "string"
      ]
    ],
    [
      "00b66d60",
      "WRITE",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66d40",
      "READ",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66d50",
      "PARAM",
      [
        "storage",
        "002b5a7a",
        null,
        "string"
      ]
    ],
    [
      "00b66d60",
      "WRITE",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65d64 ["INT_ADD", "register:40f0:8", ["const:b65d64:8", "const:4:8"]]
- 00b65d64 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b66d58 ["INT_ADD", "register:40f0:8", ["const:b66d58:8", "const:4:8"]]
+ 00b66d58 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65d6c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:208:8"]]
- 00b65d6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66d60 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1c8:8"]]
+ 00b66d60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65d48 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b66d3c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-efd15e215a52cf2fa69eae9ac0ec2a34"></a>

### [`00b65d80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65d80.md) → [`00b66d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66d74.md) _ZN8firebase7options10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b66da4",
      "incomplete_value": true,
      "site": "00b66da4",
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
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65db0",
      "incomplete_value": true,
      "site": "00b65db0",
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
            "const:208:8"
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
      "definition_site": "00b66d88",
      "incomplete_value": true,
      "site": "00b66d88",
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
      "definition_site": "00b65d94",
      "incomplete_value": true,
      "site": "00b65d94",
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
      "definition_site": "00b66d90",
      "incomplete_value": false,
      "site": "00b66d9c",
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
            "const:a7a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65d9c",
      "incomplete_value": false,
      "site": "00b65da8",
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
            "const:9ab:8"
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
      "00b66d84",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66d90",
      "PARAM",
      [
        "storage",
        "002b59ab",
        null,
        "string"
      ]
    ],
    [
      "00b66da4",
      "WRITE",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66d84",
      "READ",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66d90",
      "PARAM",
      [
        "storage",
        "002b5a7a",
        null,
        "string"
      ]
    ],
    [
      "00b66da4",
      "WRITE",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65da8 ["INT_ADD", "register:40f0:8", ["const:b65da8:8", "const:4:8"]]
- 00b65da8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b66d9c ["INT_ADD", "register:40f0:8", ["const:b66d9c:8", "const:4:8"]]
+ 00b66d9c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65db0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:208:8"]]
- 00b65db0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66da4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1c8:8"]]
+ 00b66da4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65d8c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b66d80 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-d6ec15b6da68d0982fbf41d9dccffbe5"></a>

### [`00b65dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65dd0.md) → [`00b66dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66dc4.md) _ZN8firebase7options15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b66e1c",
      "incomplete_value": true,
      "site": "00b66e1c",
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
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65e28",
      "incomplete_value": true,
      "site": "00b65e28",
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
            "const:210:8"
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
      "definition_site": "00b66df8",
      "incomplete_value": true,
      "site": "00b66e04",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65e04",
      "incomplete_value": true,
      "site": "00b65e10",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:208:8"
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
      "00b66dd8",
      "READ",
      [
        "storage",
        "01126210",
        null,
        "undefined1"
      ]
    ],
    [
      "00b66df8",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66e1c",
      "WRITE",
      [
        "storage",
        "01126210",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b66dd8",
      "READ",
      [
        "storage",
        "011271d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b66df8",
      "READ",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66e1c",
      "WRITE",
      [
        "storage",
        "011271d0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65e10 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b65e10 ["INT_ADD", "register:40f0:8", ["const:b65e10:8", "const:4:8"]]
- 00b65e10 ["CALLIND", null, ["register:0:8"]]
+ 00b66e04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b66e04 ["INT_ADD", "register:40f0:8", ["const:b66e04:8", "const:4:8"]]
+ 00b66e04 ["CALLIND", null, ["register:0:8"]]
- 00b65e28 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b65e28 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:210:8"]]
- 00b65e28 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b66e1c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b66e1c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:1d0:8"]]
+ 00b66e1c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b65de0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00b66dd4 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-2134fbc049b3216161cdebe455f82bda"></a>

### [`00b65e3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65e3c.md) → [`00b66e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66e30.md) _ZN8firebase7options12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b66e6c",
      "incomplete_value": true,
      "site": "00b66e6c",
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
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65e78",
      "incomplete_value": true,
      "site": "00b65e78",
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
            "const:210:8"
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
      "definition_site": "00b66e8c",
      "incomplete_value": true,
      "site": "00b66e8c",
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
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65e98",
      "incomplete_value": true,
      "site": "00b65e98",
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
            "const:208:8"
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
      "definition_site": "00b66e48",
      "incomplete_value": true,
      "site": "00b66e48",
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
      "definition_site": "00b65e54",
      "incomplete_value": true,
      "site": "00b65e54",
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
      "00b66e44",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66e50",
      "READ",
      [
        "storage",
        "01126210",
        null,
        "undefined1"
      ]
    ],
    [
      "00b66e6c",
      "WRITE",
      [
        "storage",
        "01126210",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b66e44",
      "READ",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66e50",
      "READ",
      [
        "storage",
        "011271d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b66e6c",
      "WRITE",
      [
        "storage",
        "011271d0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65e78 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b65e78 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b65e78 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:210:8"]]
- 00b65e78 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b66e6c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b66e6c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b66e6c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:1d0:8"]]
+ 00b66e6c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b65e94 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b65e94 ["INT_ADD", "register:40f0:8", ["const:b65e94:8", "const:4:8"]]
- 00b65e94 ["CALLIND", null, ["register:0:8"]]
+ 00b66e88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b66e88 ["INT_ADD", "register:40f0:8", ["const:b66e88:8", "const:4:8"]]
+ 00b66e88 ["CALLIND", null, ["register:0:8"]]
- 00b65e98 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:208:8"]]
- 00b65e98 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b65e98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b66e8c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:1c8:8"]]
+ 00b66e8c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b66e8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-9dc8ee9e4706580ff84cf68c0bbdd28c"></a>

### [`00b65eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65eac.md) → [`00b66ea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66ea0.md) _ZN8firebase7options14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b66ee0",
      "incomplete_value": true,
      "site": "00b66ee0",
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
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65eec",
      "incomplete_value": true,
      "site": "00b65eec",
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
            "const:208:8"
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
      "definition_site": "00b66ebc",
      "incomplete_value": true,
      "site": "00b66ebc",
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
      "definition_site": "00b65ec8",
      "incomplete_value": true,
      "site": "00b65ec8",
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
      "definition_site": "00b66ec4",
      "incomplete_value": false,
      "site": "00b66ed8",
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
            "const:a7a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65ed0",
      "incomplete_value": false,
      "site": "00b65ee4",
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
            "const:9ab:8"
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
      "00b66eb4",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66ec4",
      "PARAM",
      [
        "storage",
        "002b59ab",
        null,
        "string"
      ]
    ],
    [
      "00b66ee0",
      "WRITE",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66eb4",
      "READ",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66ec4",
      "PARAM",
      [
        "storage",
        "002b5a7a",
        null,
        "string"
      ]
    ],
    [
      "00b66ee0",
      "WRITE",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65ee4 ["INT_ADD", "register:40f0:8", ["const:b65ee4:8", "const:4:8"]]
- 00b65ee4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b66ed8 ["INT_ADD", "register:40f0:8", ["const:b66ed8:8", "const:4:8"]]
+ 00b66ed8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65eec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:208:8"]]
- 00b65eec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66ee0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:1c8:8"]]
+ 00b66ee0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65eb8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00b66eac ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-2c85a59c95e04fab071be4f15c92a64c"></a>

### [`00b65f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65f1c.md) → [`00b66f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66f10.md) _ZN8firebase7options11GetMethodIdENS0_6MethodE

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
      "definition_site": "00b66f2c",
      "incomplete_value": false,
      "site": "00b66f30",
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
      "definition_site": "00b65f38",
      "incomplete_value": false,
      "site": "00b65f3c",
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
      "definition_site": "00b66f3c",
      "incomplete_value": true,
      "site": "00b66f48",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b65f48",
      "incomplete_value": true,
      "site": "00b65f54",
      "value": [
        "LOAD",
        "8",
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
      "00b66f2c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b66f3c",
      "DATA",
      [
        "storage",
        "01126218",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66f2c",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b66f3c",
      "DATA",
      [
        "storage",
        "011271d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65f3c ["INT_ADD", "register:40f0:8", ["const:b65f3c:8", "const:4:8"]]
- 00b65f3c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b66f30 ["INT_ADD", "register:40f0:8", ["const:b66f30:8", "const:4:8"]]
+ 00b66f30 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b65f38 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b65f38 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b65f38 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b65f38 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b66f2c ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b66f2c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66f2c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66f2c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b65f40 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00b66f34 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-dd570cbf457144691d3fc6fb408b5bae"></a>

### [`00b65f58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65f58.md) → [`00b66f4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66f4c.md) _ZN8firebase7options13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b66f8c",
      "incomplete_value": true,
      "site": "00b66f8c",
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
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65f98",
      "incomplete_value": true,
      "site": "00b65f98",
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
            "const:208:8"
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
      "definition_site": "00b66f68",
      "incomplete_value": true,
      "site": "00b66f68",
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
      "definition_site": "00b65f74",
      "incomplete_value": true,
      "site": "00b65f74",
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
      "definition_site": "00b66f70",
      "incomplete_value": false,
      "site": "00b66f84",
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
            "const:a7a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65f7c",
      "incomplete_value": false,
      "site": "00b65f90",
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
            "const:9ab:8"
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
      "00b66f60",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66f70",
      "PARAM",
      [
        "storage",
        "002b59ab",
        null,
        "string"
      ]
    ],
    [
      "00b66f8c",
      "WRITE",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66f60",
      "READ",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66f70",
      "PARAM",
      [
        "storage",
        "002b5a7a",
        null,
        "string"
      ]
    ],
    [
      "00b66f8c",
      "WRITE",
      [
        "storage",
        "011271c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65f90 ["INT_ADD", "register:40f0:8", ["const:b65f90:8", "const:4:8"]]
- 00b65f90 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b66f84 ["INT_ADD", "register:40f0:8", ["const:b66f84:8", "const:4:8"]]
+ 00b66f84 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b65f98 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:208:8"]]
- 00b65f98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66f8c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:1c8:8"]]
+ 00b66f8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65f64 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00b66f58 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-f5a629bccd3c731e8264b412482ca6b3"></a>

### [`00b65fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65fc8.md) → [`00b66fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66fbc.md) _ZN8firebase7options10GetFieldIdENS0_5FieldE

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
      "definition_site": "00b66fd8",
      "incomplete_value": false,
      "site": "00b66fdc",
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
      "definition_site": "00b65fe4",
      "incomplete_value": false,
      "site": "00b65fe8",
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
      "definition_site": "00b66fe8",
      "incomplete_value": true,
      "site": "00b66ff4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b65ff4",
      "incomplete_value": true,
      "site": "00b66000",
      "value": [
        "LOAD",
        "8",
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
      "00b66fd8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b66fe8",
      "DATA",
      [
        "storage",
        "01126250",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b66fd8",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b66fe8",
      "DATA",
      [
        "storage",
        "01127210",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65fe8 ["INT_ADD", "register:40f0:8", ["const:b65fe8:8", "const:4:8"]]
- 00b65fe8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b66fdc ["INT_ADD", "register:40f0:8", ["const:b66fdc:8", "const:4:8"]]
+ 00b66fdc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b65fe4 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b65fe4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b65fe4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b65fe4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b66fd8 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b66fd8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66fd8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66fd8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b65fec ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00b66fe0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-4864e8a7faacbd570a37e80c0a59346e"></a>

### [`00b66004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66004.md) → [`00b66ff8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b66ff8.md) _ZN8firebase17version_registrar19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEE

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
      "definition_site": "00b67024",
      "incomplete_value": true,
      "site": "00b67024",
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
            "const:218:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66030",
      "incomplete_value": true,
      "site": "00b66030",
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
            "const:258:8"
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
      "definition_site": "00b6700c",
      "incomplete_value": true,
      "site": "00b6700c",
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
      "definition_site": "00b66018",
      "incomplete_value": true,
      "site": "00b66018",
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
      "definition_site": "00b67018",
      "incomplete_value": false,
      "site": "00b6701c",
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
            "const:a04:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66024",
      "incomplete_value": false,
      "site": "00b66028",
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
            "const:9ba:8"
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
      "00b67008",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ],
    [
      "00b67018",
      "PARAM",
      [
        "storage",
        "002c09ba",
        null,
        "string"
      ]
    ],
    [
      "00b67024",
      "WRITE",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b67008",
      "READ",
      [
        "storage",
        "01127218",
        null,
        "undefined8"
      ]
    ],
    [
      "00b67018",
      "PARAM",
      [
        "storage",
        "002c0a04",
        null,
        "string"
      ]
    ],
    [
      "00b67024",
      "WRITE",
      [
        "storage",
        "01127218",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b66028 ["INT_ADD", "register:40f0:8", ["const:b66028:8", "const:4:8"]]
- 00b66028 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b6701c ["INT_ADD", "register:40f0:8", ["const:b6701c:8", "const:4:8"]]
+ 00b6701c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b66030 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:258:8"]]
- 00b66030 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b67024 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:218:8"]]
+ 00b67024 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b66010 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b67004 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-a8b8c14ed031bc14fb4bc9b3b7871762"></a>

### [`00b66044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66044.md) → [`00b67038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b67/00b67038.md) _ZN8firebase17version_registrar19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEE

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
      "definition_site": "00b67064",
      "incomplete_value": true,
      "site": "00b67064",
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
            "const:218:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66070",
      "incomplete_value": true,
      "site": "00b66070",
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
            "const:258:8"
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
      "definition_site": "00b6704c",
      "incomplete_value": true,
      "site": "00b6704c",
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
      "definition_site": "00b66058",
      "incomplete_value": true,
      "site": "00b66058",
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
      "definition_site": "00b67054",
      "incomplete_value": false,
      "site": "00b6705c",
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
            "const:a04:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66060",
      "incomplete_value": false,
      "site": "00b66068",
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
            "const:9ba:8"
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
      "00b67048",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ],
    [
      "00b67054",
      "PARAM",
      [
        "storage",
        "002c09ba",
        null,
        "string"
      ]
    ],
    [
      "00b67064",
      "WRITE",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b67048",
      "READ",
      [
        "storage",
        "01127218",
        null,
        "undefined8"
      ]
    ],
    [
      "00b67054",
      "PARAM",
      [
        "storage",
        "002c0a04",
        null,
        "string"
      ]
    ],
    [
      "00b67064",
      "WRITE",
      [
        "storage",
        "01127218",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b66068 ["INT_ADD", "register:40f0:8", ["const:b66068:8", "const:4:8"]]
- 00b66068 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b6705c ["INT_ADD", "register:40f0:8", ["const:b6705c:8", "const:4:8"]]
+ 00b6705c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b66070 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:258:8"]]
- 00b66070 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b67064 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:218:8"]]
+ 00b67064 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b66050 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b67044 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-7bf9db1446c1cc92b613468eac7d8fc7"></a>

### [`00b66084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66084.md) → [`00b67078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b67/00b67078.md) _ZN8firebase17version_registrar10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00b670a8",
      "incomplete_value": true,
      "site": "00b670a8",
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
            "const:218:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b660b4",
      "incomplete_value": true,
      "site": "00b660b4",
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
            "const:258:8"
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
      "definition_site": "00b6708c",
      "incomplete_value": true,
      "site": "00b6708c",
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
      "definition_site": "00b66098",
      "incomplete_value": true,
      "site": "00b66098",
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
      "definition_site": "00b67098",
      "incomplete_value": false,
      "site": "00b670a0",
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
            "const:a04:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b660a4",
      "incomplete_value": false,
      "site": "00b660ac",
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
            "const:9ba:8"
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
      "00b67088",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ],
    [
      "00b67098",
      "PARAM",
      [
        "storage",
        "002c09ba",
        null,
        "string"
      ]
    ],
    [
      "00b670a8",
      "WRITE",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b67088",
      "READ",
      [
        "storage",
        "01127218",
        null,
        "undefined8"
      ]
    ],
    [
      "00b67098",
      "PARAM",
      [
        "storage",
        "002c0a04",
        null,
        "string"
      ]
    ],
    [
      "00b670a8",
      "WRITE",
      [
        "storage",
        "01127218",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b660ac ["INT_ADD", "register:40f0:8", ["const:b660ac:8", "const:4:8"]]
- 00b660ac ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b670a0 ["INT_ADD", "register:40f0:8", ["const:b670a0:8", "const:4:8"]]
+ 00b670a0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b660b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:258:8"]]
- 00b660b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b670a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:218:8"]]
+ 00b670a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b66090 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b67084 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-26a9107b55f673d550a5c14f13ca9521"></a>

### [`00b660c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b660c8.md) → [`00b670bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b67/00b670bc.md) _ZN8firebase17version_registrar10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b670ec",
      "incomplete_value": true,
      "site": "00b670ec",
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
            "const:218:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b660f8",
      "incomplete_value": true,
      "site": "00b660f8",
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
            "const:258:8"
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
      "definition_site": "00b670d0",
      "incomplete_value": true,
      "site": "00b670d0",
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
      "definition_site": "00b660dc",
      "incomplete_value": true,
      "site": "00b660dc",
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
      "definition_site": "00b670d8",
      "incomplete_value": false,
      "site": "00b670e4",
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
            "const:a04:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b660e4",
      "incomplete_value": false,
      "site": "00b660f0",
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
            "const:9ba:8"
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
      "00b670cc",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ],
    [
      "00b670d8",
      "PARAM",
      [
        "storage",
        "002c09ba",
        null,
        "string"
      ]
    ],
    [
      "00b670ec",
      "WRITE",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b670cc",
      "READ",
      [
        "storage",
        "01127218",
        null,
        "undefined8"
      ]
    ],
    [
      "00b670d8",
      "PARAM",
      [
        "storage",
        "002c0a04",
        null,
        "string"
      ]
    ],
    [
      "00b670ec",
      "WRITE",
      [
        "storage",
        "01127218",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b660f0 ["INT_ADD", "register:40f0:8", ["const:b660f0:8", "const:4:8"]]
- 00b660f0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b670e4 ["INT_ADD", "register:40f0:8", ["const:b670e4:8", "const:4:8"]]
+ 00b670e4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b660f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:258:8"]]
- 00b660f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b670ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:218:8"]]
+ 00b670ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b660d4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00b670c8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


