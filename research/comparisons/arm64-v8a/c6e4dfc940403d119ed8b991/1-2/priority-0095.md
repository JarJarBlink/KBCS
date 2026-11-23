# v16.0.2 → v16.0.3 · 最優先の変更候補 (95)

[一覧の目次](README.md)

<a id="compare-554e91e1304212c603766e928d06c3e5"></a>

### [`00bd2228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2228.md) → [`00bd321c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd321c.md) _ZN8firebase4auth31recent_login_required_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd324c",
      "incomplete_value": true,
      "site": "00bd324c",
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
      "definition_site": "00bd2258",
      "incomplete_value": true,
      "site": "00bd2258",
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
      "definition_site": "00bd3230",
      "incomplete_value": true,
      "site": "00bd3230",
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
      "definition_site": "00bd223c",
      "incomplete_value": true,
      "site": "00bd223c",
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
      "definition_site": "00bd323c",
      "incomplete_value": false,
      "site": "00bd3244",
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
      "definition_site": "00bd2248",
      "incomplete_value": false,
      "site": "00bd2250",
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
      "00bd322c",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd323c",
      "PARAM",
      [
        "storage",
        "002bc0ec",
        null,
        "string"
      ]
    ],
    [
      "00bd324c",
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
      "00bd322c",
      "READ",
      [
        "storage",
        "01127a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd323c",
      "PARAM",
      [
        "storage",
        "002bc1ca",
        null,
        "string"
      ]
    ],
    [
      "00bd324c",
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
- 00bd2250 ["INT_ADD", "register:40f0:8", ["const:bd2250:8", "const:4:8"]]
- 00bd2250 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3244 ["INT_ADD", "register:40f0:8", ["const:bd3244:8", "const:4:8"]]
+ 00bd3244 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2258 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00bd2258 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd324c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
+ 00bd324c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2234 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3228 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-3a80f50cc44bbe0230adb79b660484a1"></a>

### [`00bd226c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd226c.md) → [`00bd3260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3260.md) _ZN8firebase4auth31recent_login_required_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd3290",
      "incomplete_value": true,
      "site": "00bd3290",
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
      "definition_site": "00bd229c",
      "incomplete_value": true,
      "site": "00bd229c",
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
      "definition_site": "00bd3274",
      "incomplete_value": true,
      "site": "00bd3274",
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
      "definition_site": "00bd2280",
      "incomplete_value": true,
      "site": "00bd2280",
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
      "definition_site": "00bd327c",
      "incomplete_value": false,
      "site": "00bd3288",
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
      "definition_site": "00bd2288",
      "incomplete_value": false,
      "site": "00bd2294",
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
      "00bd3270",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd327c",
      "PARAM",
      [
        "storage",
        "002bc0ec",
        null,
        "string"
      ]
    ],
    [
      "00bd3290",
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
      "00bd3270",
      "READ",
      [
        "storage",
        "01127a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd327c",
      "PARAM",
      [
        "storage",
        "002bc1ca",
        null,
        "string"
      ]
    ],
    [
      "00bd3290",
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
- 00bd2294 ["INT_ADD", "register:40f0:8", ["const:bd2294:8", "const:4:8"]]
- 00bd2294 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3288 ["INT_ADD", "register:40f0:8", ["const:bd3288:8", "const:4:8"]]
+ 00bd3288 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd229c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
- 00bd229c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3290 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
+ 00bd3290 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2278 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd326c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-fd8e094b4474e92b59beb1288a2c9596"></a>

### [`00bd22bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd22bc.md) → [`00bd32b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd32b0.md) _ZN8firebase4auth31recent_login_required_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd3308",
      "incomplete_value": true,
      "site": "00bd3308",
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
    "old": {
      "definition_site": "00bd2314",
      "incomplete_value": true,
      "site": "00bd2314",
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
            "const:a70:8"
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
      "definition_site": "00bd32e4",
      "incomplete_value": true,
      "site": "00bd32f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd22f0",
      "incomplete_value": true,
      "site": "00bd22fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a68:8"
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
      "00bd32c4",
      "READ",
      [
        "storage",
        "01126a70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd32e4",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3308",
      "WRITE",
      [
        "storage",
        "01126a70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd32c4",
      "READ",
      [
        "storage",
        "01127a30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd32e4",
      "READ",
      [
        "storage",
        "01127a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3308",
      "WRITE",
      [
        "storage",
        "01127a30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd22fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd22fc ["INT_ADD", "register:40f0:8", ["const:bd22fc:8", "const:4:8"]]
- 00bd22fc ["CALLIND", null, ["register:0:8"]]
+ 00bd32f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd32f0 ["INT_ADD", "register:40f0:8", ["const:bd32f0:8", "const:4:8"]]
+ 00bd32f0 ["CALLIND", null, ["register:0:8"]]
- 00bd2314 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd2314 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a70:8"]]
- 00bd2314 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd3308 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd3308 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a30:8"]]
+ 00bd3308 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd22cc ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd32c0 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-7341c217d3d3c93913cc44cb16aa43dc"></a>

### [`00bd2328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2328.md) → [`00bd331c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd331c.md) _ZN8firebase4auth31recent_login_required_exception12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd3358",
      "incomplete_value": true,
      "site": "00bd3358",
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
    "old": {
      "definition_site": "00bd2364",
      "incomplete_value": true,
      "site": "00bd2364",
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
            "const:a70:8"
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
      "definition_site": "00bd3378",
      "incomplete_value": true,
      "site": "00bd3378",
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
    "old": {
      "definition_site": "00bd2384",
      "incomplete_value": true,
      "site": "00bd2384",
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
            "const:a68:8"
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
      "definition_site": "00bd3334",
      "incomplete_value": true,
      "site": "00bd3334",
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
      "definition_site": "00bd2340",
      "incomplete_value": true,
      "site": "00bd2340",
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
      "00bd3330",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd333c",
      "READ",
      [
        "storage",
        "01126a70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3358",
      "WRITE",
      [
        "storage",
        "01126a70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd3330",
      "READ",
      [
        "storage",
        "01127a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd333c",
      "READ",
      [
        "storage",
        "01127a30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3358",
      "WRITE",
      [
        "storage",
        "01127a30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2364 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd2364 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd2364 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a70:8"]]
- 00bd2364 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd3358 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd3358 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd3358 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a30:8"]]
+ 00bd3358 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd2380 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd2380 ["INT_ADD", "register:40f0:8", ["const:bd2380:8", "const:4:8"]]
- 00bd2380 ["CALLIND", null, ["register:0:8"]]
+ 00bd3374 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd3374 ["INT_ADD", "register:40f0:8", ["const:bd3374:8", "const:4:8"]]
+ 00bd3374 ["CALLIND", null, ["register:0:8"]]
- 00bd2384 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
- 00bd2384 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd2384 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd3378 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
+ 00bd3378 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd3378 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-c8446f1dbddbeaa5c44f1a60a8c7fac3"></a>

### [`00bd2398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2398.md) → [`00bd338c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd338c.md) _ZN8firebase4auth31recent_login_required_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd33cc",
      "incomplete_value": true,
      "site": "00bd33cc",
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
    "old": {
      "definition_site": "00bd23d8",
      "incomplete_value": true,
      "site": "00bd23d8",
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
            "const:a68:8"
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
      "definition_site": "00bd33a8",
      "incomplete_value": true,
      "site": "00bd33a8",
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
      "definition_site": "00bd23b4",
      "incomplete_value": true,
      "site": "00bd23b4",
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
      "definition_site": "00bd33b0",
      "incomplete_value": false,
      "site": "00bd33c4",
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
      "definition_site": "00bd23bc",
      "incomplete_value": false,
      "site": "00bd23d0",
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
      "00bd33a0",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd33b0",
      "PARAM",
      [
        "storage",
        "002bc0ec",
        null,
        "string"
      ]
    ],
    [
      "00bd33cc",
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
      "00bd33a0",
      "READ",
      [
        "storage",
        "01127a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd33b0",
      "PARAM",
      [
        "storage",
        "002bc1ca",
        null,
        "string"
      ]
    ],
    [
      "00bd33cc",
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
- 00bd23d0 ["INT_ADD", "register:40f0:8", ["const:bd23d0:8", "const:4:8"]]
- 00bd23d0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd33c4 ["INT_ADD", "register:40f0:8", ["const:bd33c4:8", "const:4:8"]]
+ 00bd33c4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd23d8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
- 00bd23d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd33cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
+ 00bd33cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd23a4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd3398 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-a32119b1e590714dbd91c9402354f09b"></a>

### [`00bd2408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2408.md) → [`00bd33fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd33fc.md) _ZN8firebase4auth31recent_login_required_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd3418",
      "incomplete_value": false,
      "site": "00bd341c",
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
      "definition_site": "00bd2424",
      "incomplete_value": false,
      "site": "00bd2428",
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
      "definition_site": "00bd3428",
      "incomplete_value": true,
      "site": "00bd3434",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd2434",
      "incomplete_value": true,
      "site": "00bd2440",
      "value": [
        "LOAD",
        "8",
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
      "00bd3418",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd3428",
      "DATA",
      [
        "storage",
        "01126a78",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd3418",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd3428",
      "DATA",
      [
        "storage",
        "01127a38",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2428 ["INT_ADD", "register:40f0:8", ["const:bd2428:8", "const:4:8"]]
- 00bd2428 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd341c ["INT_ADD", "register:40f0:8", ["const:bd341c:8", "const:4:8"]]
+ 00bd341c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd2424 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd2424 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2424 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2424 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd3418 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd3418 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3418 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3418 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd242c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd3420 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-d277da3b1f5a98a6ed571a3dd945e57f"></a>

### [`00bd2444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2444.md) → [`00bd3438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3438.md) _ZN8firebase4auth31recent_login_required_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd3478",
      "incomplete_value": true,
      "site": "00bd3478",
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
    "old": {
      "definition_site": "00bd2484",
      "incomplete_value": true,
      "site": "00bd2484",
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
            "const:a68:8"
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
      "definition_site": "00bd3454",
      "incomplete_value": true,
      "site": "00bd3454",
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
      "definition_site": "00bd2460",
      "incomplete_value": true,
      "site": "00bd2460",
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
      "definition_site": "00bd345c",
      "incomplete_value": false,
      "site": "00bd3470",
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
      "definition_site": "00bd2468",
      "incomplete_value": false,
      "site": "00bd247c",
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
      "00bd344c",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd345c",
      "PARAM",
      [
        "storage",
        "002bc0ec",
        null,
        "string"
      ]
    ],
    [
      "00bd3478",
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
      "00bd344c",
      "READ",
      [
        "storage",
        "01127a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd345c",
      "PARAM",
      [
        "storage",
        "002bc1ca",
        null,
        "string"
      ]
    ],
    [
      "00bd3478",
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
- 00bd247c ["INT_ADD", "register:40f0:8", ["const:bd247c:8", "const:4:8"]]
- 00bd247c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3470 ["INT_ADD", "register:40f0:8", ["const:bd3470:8", "const:4:8"]]
+ 00bd3470 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2484 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
- 00bd2484 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3478 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
+ 00bd3478 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2450 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd3444 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-42d9749525f0a95966e845056d654ace"></a>

### [`00bd24b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd24b4.md) → [`00bd34a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd34a8.md) _ZN8firebase4auth31recent_login_required_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd34c4",
      "incomplete_value": false,
      "site": "00bd34c8",
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
      "definition_site": "00bd24d0",
      "incomplete_value": false,
      "site": "00bd24d4",
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
      "definition_site": "00bd34d4",
      "incomplete_value": true,
      "site": "00bd34e0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd24e0",
      "incomplete_value": true,
      "site": "00bd24ec",
      "value": [
        "LOAD",
        "8",
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
      "00bd34c4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd34d4",
      "DATA",
      [
        "storage",
        "01126a80",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd34c4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd34d4",
      "DATA",
      [
        "storage",
        "01127a40",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd24d4 ["INT_ADD", "register:40f0:8", ["const:bd24d4:8", "const:4:8"]]
- 00bd24d4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd34c8 ["INT_ADD", "register:40f0:8", ["const:bd34c8:8", "const:4:8"]]
+ 00bd34c8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd24d0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd24d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd24d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd24d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd34c4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd34c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd34c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd34c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd24d8 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd34cc ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-583e1a9e94d07a05da108df45ecdf3e7"></a>

### [`00bd24f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd24f0.md) → [`00bd34e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd34e4.md) _ZN8firebase4auth24user_collision_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allo

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
      "definition_site": "00bd3510",
      "incomplete_value": true,
      "site": "00bd3510",
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
    "old": {
      "definition_site": "00bd251c",
      "incomplete_value": true,
      "site": "00bd251c",
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
            "const:a88:8"
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
      "definition_site": "00bd34f8",
      "incomplete_value": true,
      "site": "00bd34f8",
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
      "definition_site": "00bd2504",
      "incomplete_value": true,
      "site": "00bd2504",
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
      "definition_site": "00bd3504",
      "incomplete_value": false,
      "site": "00bd3508",
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
            "const:d75:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2510",
      "incomplete_value": false,
      "site": "00bd2514",
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
            "const:caa:8"
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
      "00bd34f4",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3504",
      "PARAM",
      [
        "storage",
        "002a2caa",
        null,
        "string"
      ]
    ],
    [
      "00bd3510",
      "WRITE",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd34f4",
      "READ",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3504",
      "PARAM",
      [
        "storage",
        "002a2d75",
        null,
        "string"
      ]
    ],
    [
      "00bd3510",
      "WRITE",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2514 ["INT_ADD", "register:40f0:8", ["const:bd2514:8", "const:4:8"]]
- 00bd2514 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3508 ["INT_ADD", "register:40f0:8", ["const:bd3508:8", "const:4:8"]]
+ 00bd3508 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd251c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
- 00bd251c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3510 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bd3510 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd24fc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd34f0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-d373f117446887a6e6cd9768fd98b043"></a>

### [`00bd2530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2530.md) → [`00bd3524`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3524.md) _ZN8firebase4auth24user_collision_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allo

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
      "definition_site": "00bd3550",
      "incomplete_value": true,
      "site": "00bd3550",
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
    "old": {
      "definition_site": "00bd255c",
      "incomplete_value": true,
      "site": "00bd255c",
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
            "const:a88:8"
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
      "definition_site": "00bd3538",
      "incomplete_value": true,
      "site": "00bd3538",
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
      "definition_site": "00bd2544",
      "incomplete_value": true,
      "site": "00bd2544",
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
        "00bd2544"
      ],
      [
        "FALL_THROUGH",
        "00bd3538"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd3538",
      "incomplete_value": true,
      "site": "00bd3550",
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
      "definition_site": "00bd2544",
      "incomplete_value": true,
      "site": "00bd255c",
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
      "00bd3534",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3540",
      "PARAM",
      [
        "storage",
        "002a2caa",
        null,
        "string"
      ]
    ],
    [
      "00bd3550",
      "WRITE",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3534",
      "READ",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3540",
      "PARAM",
      [
        "storage",
        "002a2d75",
        null,
        "string"
      ]
    ],
    [
      "00bd3550",
      "WRITE",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd255c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
- 00bd255c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3550 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bd3550 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd253c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3530 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd2540 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
- 00bd2540 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd3534 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bd3534 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ad465892345fbd6ee4ea3abb1f0c688a"></a>

### [`00bd2570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2570.md) → [`00bd3564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3564.md) _ZN8firebase4auth24user_collision_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd3594",
      "incomplete_value": true,
      "site": "00bd3594",
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
    "old": {
      "definition_site": "00bd25a0",
      "incomplete_value": true,
      "site": "00bd25a0",
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
            "const:a88:8"
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
      "definition_site": "00bd3578",
      "incomplete_value": true,
      "site": "00bd3578",
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
      "definition_site": "00bd2584",
      "incomplete_value": true,
      "site": "00bd2584",
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
      "definition_site": "00bd3584",
      "incomplete_value": false,
      "site": "00bd358c",
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
            "const:d75:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2590",
      "incomplete_value": false,
      "site": "00bd2598",
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
            "const:caa:8"
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
      "00bd3574",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3584",
      "PARAM",
      [
        "storage",
        "002a2caa",
        null,
        "string"
      ]
    ],
    [
      "00bd3594",
      "WRITE",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3574",
      "READ",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3584",
      "PARAM",
      [
        "storage",
        "002a2d75",
        null,
        "string"
      ]
    ],
    [
      "00bd3594",
      "WRITE",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2598 ["INT_ADD", "register:40f0:8", ["const:bd2598:8", "const:4:8"]]
- 00bd2598 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd358c ["INT_ADD", "register:40f0:8", ["const:bd358c:8", "const:4:8"]]
+ 00bd358c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd25a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
- 00bd25a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3594 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bd3594 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd257c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3570 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-11bfb7cf0e42ee972507e972cdaf5ede"></a>

### [`00bd25b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd25b4.md) → [`00bd35a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd35a8.md) _ZN8firebase4auth24user_collision_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd35d8",
      "incomplete_value": true,
      "site": "00bd35d8",
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
    "old": {
      "definition_site": "00bd25e4",
      "incomplete_value": true,
      "site": "00bd25e4",
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
            "const:a88:8"
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
      "definition_site": "00bd35bc",
      "incomplete_value": true,
      "site": "00bd35bc",
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
      "definition_site": "00bd25c8",
      "incomplete_value": true,
      "site": "00bd25c8",
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
      "definition_site": "00bd35c4",
      "incomplete_value": false,
      "site": "00bd35d0",
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
            "const:d75:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd25d0",
      "incomplete_value": false,
      "site": "00bd25dc",
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
            "const:caa:8"
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
      "00bd35b8",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd35c4",
      "PARAM",
      [
        "storage",
        "002a2caa",
        null,
        "string"
      ]
    ],
    [
      "00bd35d8",
      "WRITE",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd35b8",
      "READ",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd35c4",
      "PARAM",
      [
        "storage",
        "002a2d75",
        null,
        "string"
      ]
    ],
    [
      "00bd35d8",
      "WRITE",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd25dc ["INT_ADD", "register:40f0:8", ["const:bd25dc:8", "const:4:8"]]
- 00bd25dc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd35d0 ["INT_ADD", "register:40f0:8", ["const:bd35d0:8", "const:4:8"]]
+ 00bd35d0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd25e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
- 00bd25e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd35d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bd35d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd25c0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd35b4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-110769ac4cb2f627c0811023f4c81eb0"></a>

### [`00bd2604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2604.md) → [`00bd35f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd35f8.md) _ZN8firebase4auth24user_collision_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd3650",
      "incomplete_value": true,
      "site": "00bd3650",
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
    "old": {
      "definition_site": "00bd265c",
      "incomplete_value": true,
      "site": "00bd265c",
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
            "const:a90:8"
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
      "definition_site": "00bd362c",
      "incomplete_value": true,
      "site": "00bd3638",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2638",
      "incomplete_value": true,
      "site": "00bd2644",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a88:8"
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
      "00bd360c",
      "READ",
      [
        "storage",
        "01126a90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd362c",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3650",
      "WRITE",
      [
        "storage",
        "01126a90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd360c",
      "READ",
      [
        "storage",
        "01127a50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd362c",
      "READ",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3650",
      "WRITE",
      [
        "storage",
        "01127a50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2644 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd2644 ["INT_ADD", "register:40f0:8", ["const:bd2644:8", "const:4:8"]]
- 00bd2644 ["CALLIND", null, ["register:0:8"]]
+ 00bd3638 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd3638 ["INT_ADD", "register:40f0:8", ["const:bd3638:8", "const:4:8"]]
+ 00bd3638 ["CALLIND", null, ["register:0:8"]]
- 00bd265c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd265c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a90:8"]]
- 00bd265c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd3650 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd3650 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a50:8"]]
+ 00bd3650 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd2614 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd3608 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-6b17c78f09d415ebc54294e7b9ec4066"></a>

### [`00bd2670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2670.md) → [`00bd3664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3664.md) _ZN8firebase4auth24user_collision_exception12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd36a0",
      "incomplete_value": true,
      "site": "00bd36a0",
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
    "old": {
      "definition_site": "00bd26ac",
      "incomplete_value": true,
      "site": "00bd26ac",
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
            "const:a90:8"
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
      "definition_site": "00bd36c0",
      "incomplete_value": true,
      "site": "00bd36c0",
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
    "old": {
      "definition_site": "00bd26cc",
      "incomplete_value": true,
      "site": "00bd26cc",
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
            "const:a88:8"
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
      "definition_site": "00bd367c",
      "incomplete_value": true,
      "site": "00bd367c",
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
      "definition_site": "00bd2688",
      "incomplete_value": true,
      "site": "00bd2688",
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
      "00bd3678",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3684",
      "READ",
      [
        "storage",
        "01126a90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd36a0",
      "WRITE",
      [
        "storage",
        "01126a90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd3678",
      "READ",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3684",
      "READ",
      [
        "storage",
        "01127a50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd36a0",
      "WRITE",
      [
        "storage",
        "01127a50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd26ac ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd26ac ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd26ac ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a90:8"]]
- 00bd26ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd36a0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd36a0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd36a0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a50:8"]]
+ 00bd36a0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd26c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd26c8 ["INT_ADD", "register:40f0:8", ["const:bd26c8:8", "const:4:8"]]
- 00bd26c8 ["CALLIND", null, ["register:0:8"]]
+ 00bd36bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd36bc ["INT_ADD", "register:40f0:8", ["const:bd36bc:8", "const:4:8"]]
+ 00bd36bc ["CALLIND", null, ["register:0:8"]]
- 00bd26cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a88:8"]]
- 00bd26cc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd26cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd36c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
+ 00bd36c0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd36c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-5d6475f3d7d8c616a1a8fcc5da51a610"></a>

### [`00bd26e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd26e0.md) → [`00bd36d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd36d4.md) _ZN8firebase4auth24user_collision_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd3714",
      "incomplete_value": true,
      "site": "00bd3714",
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
    "old": {
      "definition_site": "00bd2720",
      "incomplete_value": true,
      "site": "00bd2720",
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
            "const:a88:8"
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
      "definition_site": "00bd36f0",
      "incomplete_value": true,
      "site": "00bd36f0",
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
      "definition_site": "00bd26fc",
      "incomplete_value": true,
      "site": "00bd26fc",
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
        "00bd26fc"
      ],
      [
        "FALL_THROUGH",
        "00bd36f0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd36f0",
      "incomplete_value": true,
      "site": "00bd3714",
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
      "definition_site": "00bd26fc",
      "incomplete_value": true,
      "site": "00bd2720",
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
      "00bd36e8",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd36f8",
      "PARAM",
      [
        "storage",
        "002a2caa",
        null,
        "string"
      ]
    ],
    [
      "00bd3714",
      "WRITE",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd36e8",
      "READ",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd36f8",
      "PARAM",
      [
        "storage",
        "002a2d75",
        null,
        "string"
      ]
    ],
    [
      "00bd3714",
      "WRITE",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2720 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a88:8"]]
- 00bd2720 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3714 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
+ 00bd3714 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd26ec ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd36e0 ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bd26f4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a88:8"]]
- 00bd26f4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd36e8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
+ 00bd36e8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-63d23f675507d6f53f32713fb6edffe5"></a>

### [`00bd2750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2750.md) → [`00bd3744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3744.md) _ZN8firebase4auth24user_collision_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd3760",
      "incomplete_value": false,
      "site": "00bd3764",
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
      "definition_site": "00bd276c",
      "incomplete_value": false,
      "site": "00bd2770",
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
      "definition_site": "00bd3770",
      "incomplete_value": true,
      "site": "00bd377c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd277c",
      "incomplete_value": true,
      "site": "00bd2788",
      "value": [
        "LOAD",
        "8",
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
      "00bd3760",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd3770",
      "DATA",
      [
        "storage",
        "01126a98",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd3760",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd3770",
      "DATA",
      [
        "storage",
        "01127a58",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2770 ["INT_ADD", "register:40f0:8", ["const:bd2770:8", "const:4:8"]]
- 00bd2770 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd3764 ["INT_ADD", "register:40f0:8", ["const:bd3764:8", "const:4:8"]]
+ 00bd3764 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd276c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd276c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd276c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd276c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd3760 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd3760 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3760 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3760 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2774 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd3768 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-51c1595e7fd0cfc5aa61f9e48a8b6e2c"></a>

### [`00bd278c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd278c.md) → [`00bd3780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3780.md) _ZN8firebase4auth24user_collision_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd37c0",
      "incomplete_value": true,
      "site": "00bd37c0",
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
    "old": {
      "definition_site": "00bd27cc",
      "incomplete_value": true,
      "site": "00bd27cc",
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
            "const:a88:8"
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
      "definition_site": "00bd379c",
      "incomplete_value": true,
      "site": "00bd379c",
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
      "definition_site": "00bd27a8",
      "incomplete_value": true,
      "site": "00bd27a8",
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
      "definition_site": "00bd37a4",
      "incomplete_value": false,
      "site": "00bd37b8",
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
            "const:d75:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd27b0",
      "incomplete_value": false,
      "site": "00bd27c4",
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
            "const:caa:8"
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
      "00bd3794",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd37a4",
      "PARAM",
      [
        "storage",
        "002a2caa",
        null,
        "string"
      ]
    ],
    [
      "00bd37c0",
      "WRITE",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3794",
      "READ",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd37a4",
      "PARAM",
      [
        "storage",
        "002a2d75",
        null,
        "string"
      ]
    ],
    [
      "00bd37c0",
      "WRITE",
      [
        "storage",
        "01127a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd27c4 ["INT_ADD", "register:40f0:8", ["const:bd27c4:8", "const:4:8"]]
- 00bd27c4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd37b8 ["INT_ADD", "register:40f0:8", ["const:bd37b8:8", "const:4:8"]]
+ 00bd37b8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd27cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a88:8"]]
- 00bd27cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd37c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
+ 00bd37c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2798 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd378c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-3d4a9bd33c8aaedfce06d7a90afb675e"></a>

### [`00bd27fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd27fc.md) → [`00bd37f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd37f0.md) _ZN8firebase4auth24user_collision_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd380c",
      "incomplete_value": false,
      "site": "00bd3810",
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
      "definition_site": "00bd2818",
      "incomplete_value": false,
      "site": "00bd281c",
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
      "definition_site": "00bd381c",
      "incomplete_value": true,
      "site": "00bd3828",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd2828",
      "incomplete_value": true,
      "site": "00bd2834",
      "value": [
        "LOAD",
        "8",
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
      "00bd380c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd381c",
      "DATA",
      [
        "storage",
        "01126aa0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd380c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd381c",
      "DATA",
      [
        "storage",
        "01127a60",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd281c ["INT_ADD", "register:40f0:8", ["const:bd281c:8", "const:4:8"]]
- 00bd281c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd3810 ["INT_ADD", "register:40f0:8", ["const:bd3810:8", "const:4:8"]]
+ 00bd3810 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd2818 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd2818 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2818 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2818 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd380c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd380c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd380c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd380c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2820 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd3814 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-ab623a9a7a7da943249ad3895e5e0cd1"></a>

### [`00bd2838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2838.md) → [`00bd382c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd382c.md) _ZN8firebase4auth21android_web_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
      "definition_site": "00bd3858",
      "incomplete_value": true,
      "site": "00bd3858",
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
    "old": {
      "definition_site": "00bd2864",
      "incomplete_value": true,
      "site": "00bd2864",
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
            "const:aa8:8"
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
      "definition_site": "00bd3840",
      "incomplete_value": true,
      "site": "00bd3840",
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
      "definition_site": "00bd284c",
      "incomplete_value": true,
      "site": "00bd284c",
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
      "definition_site": "00bd384c",
      "incomplete_value": false,
      "site": "00bd3850",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2858",
      "incomplete_value": false,
      "site": "00bd285c",
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
            "const:d08:8"
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
      "00bd383c",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd384c",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ],
    [
      "00bd3858",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd383c",
      "READ",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd384c",
      "PARAM",
      [
        "storage",
        "002a0d48",
        null,
        "string"
      ]
    ],
    [
      "00bd3858",
      "WRITE",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd285c ["INT_ADD", "register:40f0:8", ["const:bd285c:8", "const:4:8"]]
- 00bd285c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3850 ["INT_ADD", "register:40f0:8", ["const:bd3850:8", "const:4:8"]]
+ 00bd3850 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2864 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00bd2864 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3858 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00bd3858 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2844 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3838 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-4e223b7e6427866ca32c05d74646cb71"></a>

### [`00bd2878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2878.md) → [`00bd386c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd386c.md) _ZN8firebase4auth21android_web_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
      "definition_site": "00bd3898",
      "incomplete_value": true,
      "site": "00bd3898",
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
    "old": {
      "definition_site": "00bd28a4",
      "incomplete_value": true,
      "site": "00bd28a4",
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
            "const:aa8:8"
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
      "definition_site": "00bd3880",
      "incomplete_value": true,
      "site": "00bd3880",
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
      "definition_site": "00bd288c",
      "incomplete_value": true,
      "site": "00bd288c",
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
      "definition_site": "00bd3888",
      "incomplete_value": false,
      "site": "00bd3890",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2894",
      "incomplete_value": false,
      "site": "00bd289c",
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
            "const:d08:8"
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
      "00bd387c",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3888",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ],
    [
      "00bd3898",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd387c",
      "READ",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3888",
      "PARAM",
      [
        "storage",
        "002a0d48",
        null,
        "string"
      ]
    ],
    [
      "00bd3898",
      "WRITE",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd289c ["INT_ADD", "register:40f0:8", ["const:bd289c:8", "const:4:8"]]
- 00bd289c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3890 ["INT_ADD", "register:40f0:8", ["const:bd3890:8", "const:4:8"]]
+ 00bd3890 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd28a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00bd28a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3898 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00bd3898 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2884 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3878 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-42af116a670219e6e6fafb9f48bdf5f6"></a>

### [`00bd28b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd28b8.md) → [`00bd38ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd38ac.md) _ZN8firebase4auth21android_web_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd38dc",
      "incomplete_value": true,
      "site": "00bd38dc",
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
    "old": {
      "definition_site": "00bd28e8",
      "incomplete_value": true,
      "site": "00bd28e8",
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
            "const:aa8:8"
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
      "definition_site": "00bd38c0",
      "incomplete_value": true,
      "site": "00bd38c0",
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
      "definition_site": "00bd28cc",
      "incomplete_value": true,
      "site": "00bd28cc",
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
      "definition_site": "00bd38cc",
      "incomplete_value": false,
      "site": "00bd38d4",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd28d8",
      "incomplete_value": false,
      "site": "00bd28e0",
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
            "const:d08:8"
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
      "00bd38bc",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd38cc",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ],
    [
      "00bd38dc",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd38bc",
      "READ",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd38cc",
      "PARAM",
      [
        "storage",
        "002a0d48",
        null,
        "string"
      ]
    ],
    [
      "00bd38dc",
      "WRITE",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd28e0 ["INT_ADD", "register:40f0:8", ["const:bd28e0:8", "const:4:8"]]
- 00bd28e0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd38d4 ["INT_ADD", "register:40f0:8", ["const:bd38d4:8", "const:4:8"]]
+ 00bd38d4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd28e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00bd28e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd38dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00bd38dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd28c4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd38b8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-a5bb13a7d44459b6cd1de176efdcca18"></a>

### [`00bd28fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd28fc.md) → [`00bd38f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd38f0.md) _ZN8firebase4auth21android_web_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd3920",
      "incomplete_value": true,
      "site": "00bd3920",
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
    "old": {
      "definition_site": "00bd292c",
      "incomplete_value": true,
      "site": "00bd292c",
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
            "const:aa8:8"
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
      "definition_site": "00bd3904",
      "incomplete_value": true,
      "site": "00bd3904",
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
      "definition_site": "00bd2910",
      "incomplete_value": true,
      "site": "00bd2910",
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
      "definition_site": "00bd390c",
      "incomplete_value": false,
      "site": "00bd3918",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2918",
      "incomplete_value": false,
      "site": "00bd2924",
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
            "const:d08:8"
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
      "00bd3900",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd390c",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ],
    [
      "00bd3920",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3900",
      "READ",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd390c",
      "PARAM",
      [
        "storage",
        "002a0d48",
        null,
        "string"
      ]
    ],
    [
      "00bd3920",
      "WRITE",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2924 ["INT_ADD", "register:40f0:8", ["const:bd2924:8", "const:4:8"]]
- 00bd2924 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3918 ["INT_ADD", "register:40f0:8", ["const:bd3918:8", "const:4:8"]]
+ 00bd3918 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd292c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00bd292c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3920 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00bd3920 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2908 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd38fc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-783c6e6293fba4b35be331f7c33afe0a"></a>

### [`00bd294c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd294c.md) → [`00bd3940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3940.md) _ZN8firebase4auth21android_web_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd3998",
      "incomplete_value": true,
      "site": "00bd3998",
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
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd29a4",
      "incomplete_value": true,
      "site": "00bd29a4",
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
            "const:ab0:8"
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
      "definition_site": "00bd3974",
      "incomplete_value": true,
      "site": "00bd3980",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2980",
      "incomplete_value": true,
      "site": "00bd298c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:aa8:8"
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
      "00bd3954",
      "READ",
      [
        "storage",
        "01126ab0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3974",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3998",
      "WRITE",
      [
        "storage",
        "01126ab0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd3954",
      "READ",
      [
        "storage",
        "01127a70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3974",
      "READ",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3998",
      "WRITE",
      [
        "storage",
        "01127a70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd298c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd298c ["INT_ADD", "register:40f0:8", ["const:bd298c:8", "const:4:8"]]
- 00bd298c ["CALLIND", null, ["register:0:8"]]
+ 00bd3980 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd3980 ["INT_ADD", "register:40f0:8", ["const:bd3980:8", "const:4:8"]]
+ 00bd3980 ["CALLIND", null, ["register:0:8"]]
- 00bd29a4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd29a4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ab0:8"]]
- 00bd29a4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd3998 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd3998 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a70:8"]]
+ 00bd3998 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd295c ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd3950 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-28f8f085351eaa1bf175bdc04b3476ea"></a>

### [`00bd29b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd29b8.md) → [`00bd39ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd39ac.md) _ZN8firebase4auth21android_web_exception12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd39e8",
      "incomplete_value": true,
      "site": "00bd39e8",
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
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd29f4",
      "incomplete_value": true,
      "site": "00bd29f4",
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
            "const:ab0:8"
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
      "definition_site": "00bd3a08",
      "incomplete_value": true,
      "site": "00bd3a08",
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
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2a14",
      "incomplete_value": true,
      "site": "00bd2a14",
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
            "const:aa8:8"
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
      "definition_site": "00bd39c4",
      "incomplete_value": true,
      "site": "00bd39c4",
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
      "definition_site": "00bd29d0",
      "incomplete_value": true,
      "site": "00bd29d0",
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
      "00bd39c0",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd39cc",
      "READ",
      [
        "storage",
        "01126ab0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd39e8",
      "WRITE",
      [
        "storage",
        "01126ab0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd39c0",
      "READ",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd39cc",
      "READ",
      [
        "storage",
        "01127a70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd39e8",
      "WRITE",
      [
        "storage",
        "01127a70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd29f4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd29f4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd29f4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ab0:8"]]
- 00bd29f4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd39e8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd39e8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd39e8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a70:8"]]
+ 00bd39e8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd2a10 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd2a10 ["INT_ADD", "register:40f0:8", ["const:bd2a10:8", "const:4:8"]]
- 00bd2a10 ["CALLIND", null, ["register:0:8"]]
+ 00bd3a04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd3a04 ["INT_ADD", "register:40f0:8", ["const:bd3a04:8", "const:4:8"]]
+ 00bd3a04 ["CALLIND", null, ["register:0:8"]]
- 00bd2a14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
- 00bd2a14 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd2a14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd3a08 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
+ 00bd3a08 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd3a08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-e836e455297f756f3f0ebd9fbaf9ea26"></a>

### [`00bd2a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2a28.md) → [`00bd3a1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3a1c.md) _ZN8firebase4auth21android_web_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd3a5c",
      "incomplete_value": true,
      "site": "00bd3a5c",
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
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2a68",
      "incomplete_value": true,
      "site": "00bd2a68",
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
            "const:aa8:8"
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
      "definition_site": "00bd3a38",
      "incomplete_value": true,
      "site": "00bd3a38",
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
      "definition_site": "00bd2a44",
      "incomplete_value": true,
      "site": "00bd2a44",
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
      "definition_site": "00bd3a40",
      "incomplete_value": false,
      "site": "00bd3a54",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2a4c",
      "incomplete_value": false,
      "site": "00bd2a60",
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
            "const:d08:8"
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
      "00bd3a30",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3a40",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ],
    [
      "00bd3a5c",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3a30",
      "READ",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3a40",
      "PARAM",
      [
        "storage",
        "002a0d48",
        null,
        "string"
      ]
    ],
    [
      "00bd3a5c",
      "WRITE",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2a60 ["INT_ADD", "register:40f0:8", ["const:bd2a60:8", "const:4:8"]]
- 00bd2a60 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3a54 ["INT_ADD", "register:40f0:8", ["const:bd3a54:8", "const:4:8"]]
+ 00bd3a54 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2a68 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
- 00bd2a68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3a5c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
+ 00bd3a5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2a34 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd3a28 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-040a91170f55e2614e016b404063d934"></a>

### [`00bd2a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2a98.md) → [`00bd3a8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3a8c.md) _ZN8firebase4auth21android_web_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd3aa8",
      "incomplete_value": false,
      "site": "00bd3aac",
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
      "definition_site": "00bd2ab4",
      "incomplete_value": false,
      "site": "00bd2ab8",
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
      "definition_site": "00bd3ab8",
      "incomplete_value": true,
      "site": "00bd3ac4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd2ac4",
      "incomplete_value": true,
      "site": "00bd2ad0",
      "value": [
        "LOAD",
        "8",
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
      "00bd3aa8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd3ab8",
      "DATA",
      [
        "storage",
        "01126ab8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd3aa8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd3ab8",
      "DATA",
      [
        "storage",
        "01127a78",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2ab8 ["INT_ADD", "register:40f0:8", ["const:bd2ab8:8", "const:4:8"]]
- 00bd2ab8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd3aac ["INT_ADD", "register:40f0:8", ["const:bd3aac:8", "const:4:8"]]
+ 00bd3aac ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd2ab4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd2ab4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2ab4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2ab4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd3aa8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd3aa8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3aa8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3aa8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2abc ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd3ab0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-ecc2754da86a30a77b4ead8227a275db"></a>

### [`00bd2ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2ad4.md) → [`00bd3ac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3ac8.md) _ZN8firebase4auth21android_web_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd3b08",
      "incomplete_value": true,
      "site": "00bd3b08",
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
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2b14",
      "incomplete_value": true,
      "site": "00bd2b14",
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
            "const:aa8:8"
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
      "definition_site": "00bd3ae4",
      "incomplete_value": true,
      "site": "00bd3ae4",
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
      "definition_site": "00bd2af0",
      "incomplete_value": true,
      "site": "00bd2af0",
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
      "definition_site": "00bd3aec",
      "incomplete_value": false,
      "site": "00bd3b00",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2af8",
      "incomplete_value": false,
      "site": "00bd2b0c",
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
            "const:d08:8"
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
      "00bd3adc",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3aec",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ],
    [
      "00bd3b08",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3adc",
      "READ",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3aec",
      "PARAM",
      [
        "storage",
        "002a0d48",
        null,
        "string"
      ]
    ],
    [
      "00bd3b08",
      "WRITE",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2b0c ["INT_ADD", "register:40f0:8", ["const:bd2b0c:8", "const:4:8"]]
- 00bd2b0c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3b00 ["INT_ADD", "register:40f0:8", ["const:bd3b00:8", "const:4:8"]]
+ 00bd3b00 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2b14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
- 00bd2b14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3b08 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
+ 00bd3b08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2ae0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd3ad4 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-3915df834d6fcbb91217db090586666f"></a>

### [`00bd2b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2b44.md) → [`00bd3b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3b38.md) _ZN8firebase4auth21android_web_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd3b54",
      "incomplete_value": false,
      "site": "00bd3b58",
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
      "definition_site": "00bd2b60",
      "incomplete_value": false,
      "site": "00bd2b64",
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
      "00bd3b54",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd3b64",
      "DATA",
      [
        "storage",
        "01126ac0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd3b54",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd3b64",
      "DATA",
      [
        "storage",
        "01127a80",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2b64 ["INT_ADD", "register:40f0:8", ["const:bd2b64:8", "const:4:8"]]
- 00bd2b64 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd3b58 ["INT_ADD", "register:40f0:8", ["const:bd3b58:8", "const:4:8"]]
+ 00bd3b58 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd2b60 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd2b60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2b60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2b60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd3b54 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd3b54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3b54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3b54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2b68 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd3b5c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-c3ed4ae29f1cf4e34a75a5d086b33929"></a>

### [`00bd2b80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2b80.md) → [`00bd3b74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3b74.md) _ZN8firebase4auth23firebase_auth_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloc

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
      "definition_site": "00bd3ba0",
      "incomplete_value": true,
      "site": "00bd3ba0",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2bac",
      "incomplete_value": true,
      "site": "00bd2bac",
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
            "const:ac8:8"
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
      "definition_site": "00bd3b88",
      "incomplete_value": true,
      "site": "00bd3b88",
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
      "definition_site": "00bd2b94",
      "incomplete_value": true,
      "site": "00bd2b94",
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
      "definition_site": "00bd3b94",
      "incomplete_value": false,
      "site": "00bd3b98",
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
            "const:957:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2ba0",
      "incomplete_value": false,
      "site": "00bd2ba4",
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
            "const:879:8"
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
      "00bd3b84",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3b94",
      "PARAM",
      [
        "storage",
        "002be879",
        null,
        "string"
      ]
    ],
    [
      "00bd3ba0",
      "WRITE",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3b84",
      "READ",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3b94",
      "PARAM",
      [
        "storage",
        "002be957",
        null,
        "string"
      ]
    ],
    [
      "00bd3ba0",
      "WRITE",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2ba4 ["INT_ADD", "register:40f0:8", ["const:bd2ba4:8", "const:4:8"]]
- 00bd2ba4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3b98 ["INT_ADD", "register:40f0:8", ["const:bd3b98:8", "const:4:8"]]
+ 00bd3b98 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2bac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
- 00bd2bac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3ba0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
+ 00bd3ba0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2b8c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3b80 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-8082a7db31ed39d25b2cf2538bd9c43d"></a>

### [`00bd2bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2bc0.md) → [`00bd3bb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3bb4.md) _ZN8firebase4auth23firebase_auth_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloc

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
      "definition_site": "00bd3be0",
      "incomplete_value": true,
      "site": "00bd3be0",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2bec",
      "incomplete_value": true,
      "site": "00bd2bec",
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
            "const:ac8:8"
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
      "definition_site": "00bd3bc8",
      "incomplete_value": true,
      "site": "00bd3bc8",
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
      "definition_site": "00bd2bd4",
      "incomplete_value": true,
      "site": "00bd2bd4",
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
      "definition_site": "00bd3bd0",
      "incomplete_value": false,
      "site": "00bd3bd8",
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
            "const:957:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2bdc",
      "incomplete_value": false,
      "site": "00bd2be4",
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
            "const:879:8"
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
      "00bd3bc4",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3bd0",
      "PARAM",
      [
        "storage",
        "002be879",
        null,
        "string"
      ]
    ],
    [
      "00bd3be0",
      "WRITE",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3bc4",
      "READ",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3bd0",
      "PARAM",
      [
        "storage",
        "002be957",
        null,
        "string"
      ]
    ],
    [
      "00bd3be0",
      "WRITE",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2be4 ["INT_ADD", "register:40f0:8", ["const:bd2be4:8", "const:4:8"]]
- 00bd2be4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3bd8 ["INT_ADD", "register:40f0:8", ["const:bd3bd8:8", "const:4:8"]]
+ 00bd3bd8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2bec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
- 00bd2bec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3be0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
+ 00bd3be0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2bcc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3bc0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-b2a1e0323ffea1ff485dbb5fec5bd0de"></a>

### [`00bd2c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2c00.md) → [`00bd3bf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3bf4.md) _ZN8firebase4auth23firebase_auth_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd3c24",
      "incomplete_value": true,
      "site": "00bd3c24",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2c30",
      "incomplete_value": true,
      "site": "00bd2c30",
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
            "const:ac8:8"
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
      "definition_site": "00bd3c08",
      "incomplete_value": true,
      "site": "00bd3c08",
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
      "definition_site": "00bd2c14",
      "incomplete_value": true,
      "site": "00bd2c14",
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
        "00bd2c14"
      ],
      [
        "FALL_THROUGH",
        "00bd3c08"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd3c08",
      "incomplete_value": true,
      "site": "00bd3c24",
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
      "definition_site": "00bd2c14",
      "incomplete_value": true,
      "site": "00bd2c30",
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
      "00bd3c04",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3c14",
      "PARAM",
      [
        "storage",
        "002be879",
        null,
        "string"
      ]
    ],
    [
      "00bd3c24",
      "WRITE",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3c04",
      "READ",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3c14",
      "PARAM",
      [
        "storage",
        "002be957",
        null,
        "string"
      ]
    ],
    [
      "00bd3c24",
      "WRITE",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2c30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
- 00bd2c30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3c24 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
+ 00bd3c24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2c0c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3c00 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd2c10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
- 00bd2c10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd3c04 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
+ 00bd3c04 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a2598388822c9674cb98d6420806fb83"></a>

### [`00bd2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2c44.md) → [`00bd3c38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3c38.md) _ZN8firebase4auth23firebase_auth_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd3c68",
      "incomplete_value": true,
      "site": "00bd3c68",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2c74",
      "incomplete_value": true,
      "site": "00bd2c74",
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
            "const:ac8:8"
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
      "definition_site": "00bd3c4c",
      "incomplete_value": true,
      "site": "00bd3c4c",
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
      "definition_site": "00bd2c58",
      "incomplete_value": true,
      "site": "00bd2c58",
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
      "definition_site": "00bd3c54",
      "incomplete_value": false,
      "site": "00bd3c60",
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
            "const:957:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2c60",
      "incomplete_value": false,
      "site": "00bd2c6c",
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
            "const:879:8"
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
      "00bd3c48",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3c54",
      "PARAM",
      [
        "storage",
        "002be879",
        null,
        "string"
      ]
    ],
    [
      "00bd3c68",
      "WRITE",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3c48",
      "READ",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3c54",
      "PARAM",
      [
        "storage",
        "002be957",
        null,
        "string"
      ]
    ],
    [
      "00bd3c68",
      "WRITE",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2c6c ["INT_ADD", "register:40f0:8", ["const:bd2c6c:8", "const:4:8"]]
- 00bd2c6c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3c60 ["INT_ADD", "register:40f0:8", ["const:bd3c60:8", "const:4:8"]]
+ 00bd3c60 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2c74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
- 00bd2c74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3c68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
+ 00bd3c68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2c50 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3c44 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-fc6e253bfc46023344d88233d7d3f269"></a>

### [`00bd2c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2c94.md) → [`00bd3c88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3c88.md) _ZN8firebase4auth23firebase_auth_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd3ce0",
      "incomplete_value": true,
      "site": "00bd3ce0",
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
            "const:a90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2cec",
      "incomplete_value": true,
      "site": "00bd2cec",
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
            "const:ad0:8"
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
      "definition_site": "00bd3cbc",
      "incomplete_value": true,
      "site": "00bd3cc8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2cc8",
      "incomplete_value": true,
      "site": "00bd2cd4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ac8:8"
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
      "00bd3c9c",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3cbc",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3ce0",
      "WRITE",
      [
        "storage",
        "01126ad0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd3c9c",
      "READ",
      [
        "storage",
        "01127a90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3cbc",
      "READ",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3ce0",
      "WRITE",
      [
        "storage",
        "01127a90",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2cd4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd2cd4 ["INT_ADD", "register:40f0:8", ["const:bd2cd4:8", "const:4:8"]]
- 00bd2cd4 ["CALLIND", null, ["register:0:8"]]
+ 00bd3cc8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd3cc8 ["INT_ADD", "register:40f0:8", ["const:bd3cc8:8", "const:4:8"]]
+ 00bd3cc8 ["CALLIND", null, ["register:0:8"]]
- 00bd2cec ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd2cec ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ad0:8"]]
- 00bd2cec ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd3ce0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd3ce0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a90:8"]]
+ 00bd3ce0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd2ca4 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd3c98 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-0dca2e768761bb9a1138e9628e46a5e6"></a>

### [`00bd2d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2d00.md) → [`00bd3cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3cf4.md) _ZN8firebase4auth23firebase_auth_exception12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd3d30",
      "incomplete_value": true,
      "site": "00bd3d30",
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
            "const:a90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2d3c",
      "incomplete_value": true,
      "site": "00bd2d3c",
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
            "const:ad0:8"
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
      "definition_site": "00bd3d50",
      "incomplete_value": true,
      "site": "00bd3d50",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2d5c",
      "incomplete_value": true,
      "site": "00bd2d5c",
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
            "const:ac8:8"
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
      "definition_site": "00bd3d0c",
      "incomplete_value": true,
      "site": "00bd3d0c",
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
      "definition_site": "00bd2d18",
      "incomplete_value": true,
      "site": "00bd2d18",
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
      "00bd3d08",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3d14",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3d30",
      "WRITE",
      [
        "storage",
        "01126ad0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd3d08",
      "READ",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3d14",
      "READ",
      [
        "storage",
        "01127a90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3d30",
      "WRITE",
      [
        "storage",
        "01127a90",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2d3c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd2d3c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd2d3c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ad0:8"]]
- 00bd2d3c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd3d30 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd3d30 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd3d30 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a90:8"]]
+ 00bd3d30 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd2d58 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd2d58 ["INT_ADD", "register:40f0:8", ["const:bd2d58:8", "const:4:8"]]
- 00bd2d58 ["CALLIND", null, ["register:0:8"]]
+ 00bd3d4c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd3d4c ["INT_ADD", "register:40f0:8", ["const:bd3d4c:8", "const:4:8"]]
+ 00bd3d4c ["CALLIND", null, ["register:0:8"]]
- 00bd2d5c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
- 00bd2d5c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd2d5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd3d50 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a88:8"]]
+ 00bd3d50 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd3d50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-38e39a99bb223777851484442357142c"></a>

### [`00bd2d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2d70.md) → [`00bd3d64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3d64.md) _ZN8firebase4auth23firebase_auth_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd3da4",
      "incomplete_value": true,
      "site": "00bd3da4",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2db0",
      "incomplete_value": true,
      "site": "00bd2db0",
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
            "const:ac8:8"
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
      "definition_site": "00bd3d80",
      "incomplete_value": true,
      "site": "00bd3d80",
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
      "definition_site": "00bd2d8c",
      "incomplete_value": true,
      "site": "00bd2d8c",
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
      "definition_site": "00bd3d88",
      "incomplete_value": false,
      "site": "00bd3d9c",
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
            "const:957:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2d94",
      "incomplete_value": false,
      "site": "00bd2da8",
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
            "const:879:8"
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
      "00bd3d78",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3d88",
      "PARAM",
      [
        "storage",
        "002be879",
        null,
        "string"
      ]
    ],
    [
      "00bd3da4",
      "WRITE",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3d78",
      "READ",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3d88",
      "PARAM",
      [
        "storage",
        "002be957",
        null,
        "string"
      ]
    ],
    [
      "00bd3da4",
      "WRITE",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2da8 ["INT_ADD", "register:40f0:8", ["const:bd2da8:8", "const:4:8"]]
- 00bd2da8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3d9c ["INT_ADD", "register:40f0:8", ["const:bd3d9c:8", "const:4:8"]]
+ 00bd3d9c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2db0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
- 00bd2db0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3da4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a88:8"]]
+ 00bd3da4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2d7c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd3d70 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-5591e50ec3f432db02faa91c55908b2f"></a>

### [`00bd2de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2de0.md) → [`00bd3dd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3dd4.md) _ZN8firebase4auth23firebase_auth_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd3df0",
      "incomplete_value": false,
      "site": "00bd3df4",
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
      "definition_site": "00bd2dfc",
      "incomplete_value": false,
      "site": "00bd2e00",
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
      "definition_site": "00bd3e00",
      "incomplete_value": true,
      "site": "00bd3e0c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd2e0c",
      "incomplete_value": true,
      "site": "00bd2e18",
      "value": [
        "LOAD",
        "8",
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
      "00bd3df0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd3e00",
      "DATA",
      [
        "storage",
        "01126ad8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3df0",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd3e00",
      "DATA",
      [
        "storage",
        "01127a98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2e00 ["INT_ADD", "register:40f0:8", ["const:bd2e00:8", "const:4:8"]]
- 00bd2e00 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd3df4 ["INT_ADD", "register:40f0:8", ["const:bd3df4:8", "const:4:8"]]
+ 00bd3df4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd2dfc ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd2dfc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2dfc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2dfc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd3df0 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd3df0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3df0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3df0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2e04 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd3df8 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-b385139b3c95892e545ee4f5d3714875"></a>

### [`00bd2e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2e1c.md) → [`00bd3e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3e10.md) _ZN8firebase4auth23firebase_auth_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd3e50",
      "incomplete_value": true,
      "site": "00bd3e50",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2e5c",
      "incomplete_value": true,
      "site": "00bd2e5c",
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
            "const:ac8:8"
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
      "definition_site": "00bd3e2c",
      "incomplete_value": true,
      "site": "00bd3e2c",
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
      "definition_site": "00bd2e38",
      "incomplete_value": true,
      "site": "00bd2e38",
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
      "definition_site": "00bd3e34",
      "incomplete_value": false,
      "site": "00bd3e48",
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
            "const:957:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2e40",
      "incomplete_value": false,
      "site": "00bd2e54",
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
            "const:879:8"
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
      "00bd3e24",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3e34",
      "PARAM",
      [
        "storage",
        "002be879",
        null,
        "string"
      ]
    ],
    [
      "00bd3e50",
      "WRITE",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3e24",
      "READ",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3e34",
      "PARAM",
      [
        "storage",
        "002be957",
        null,
        "string"
      ]
    ],
    [
      "00bd3e50",
      "WRITE",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2e54 ["INT_ADD", "register:40f0:8", ["const:bd2e54:8", "const:4:8"]]
- 00bd2e54 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3e48 ["INT_ADD", "register:40f0:8", ["const:bd3e48:8", "const:4:8"]]
+ 00bd3e48 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2e5c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
- 00bd2e5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3e50 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a88:8"]]
+ 00bd3e50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2e28 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd3e1c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-55e880e6542b24df8064cb4d592a1806"></a>

### [`00bd2e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2e8c.md) → [`00bd3e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3e80.md) _ZN8firebase4auth23firebase_auth_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd3e9c",
      "incomplete_value": false,
      "site": "00bd3ea0",
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
      "definition_site": "00bd2ea8",
      "incomplete_value": false,
      "site": "00bd2eac",
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
      "definition_site": "00bd3eac",
      "incomplete_value": true,
      "site": "00bd3eb8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd2eb8",
      "incomplete_value": true,
      "site": "00bd2ec4",
      "value": [
        "LOAD",
        "8",
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
      "00bd3e9c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd3eac",
      "DATA",
      [
        "storage",
        "01126ae0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd3e9c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd3eac",
      "DATA",
      [
        "storage",
        "01127aa0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2eac ["INT_ADD", "register:40f0:8", ["const:bd2eac:8", "const:4:8"]]
- 00bd2eac ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd3ea0 ["INT_ADD", "register:40f0:8", ["const:bd3ea0:8", "const:4:8"]]
+ 00bd3ea0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd2ea8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd2ea8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2ea8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2ea8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd3e9c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd3e9c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3e9c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3e9c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2eb0 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd3ea4 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-a3b4e2a4371eea31f1929b02dc1f210a"></a>

### [`00bd2ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2ec8.md) → [`00bd3ebc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3ebc.md) _ZN8firebase4auth26firebase_network_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9al

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
      "definition_site": "00bd3ee8",
      "incomplete_value": true,
      "site": "00bd3ee8",
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
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2ef4",
      "incomplete_value": true,
      "site": "00bd2ef4",
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
            "const:ae8:8"
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
      "definition_site": "00bd3ed0",
      "incomplete_value": true,
      "site": "00bd3ed0",
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
      "definition_site": "00bd2edc",
      "incomplete_value": true,
      "site": "00bd2edc",
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
      "definition_site": "00bd3edc",
      "incomplete_value": false,
      "site": "00bd3ee0",
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
            "const:ae1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2ee8",
      "incomplete_value": false,
      "site": "00bd2eec",
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
            "const:a03:8"
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
      "00bd3ecc",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3edc",
      "PARAM",
      [
        "storage",
        "002bfa03",
        null,
        "string"
      ]
    ],
    [
      "00bd3ee8",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3ecc",
      "READ",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3edc",
      "PARAM",
      [
        "storage",
        "002bfae1",
        null,
        "string"
      ]
    ],
    [
      "00bd3ee8",
      "WRITE",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2eec ["INT_ADD", "register:40f0:8", ["const:bd2eec:8", "const:4:8"]]
- 00bd2eec ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3ee0 ["INT_ADD", "register:40f0:8", ["const:bd3ee0:8", "const:4:8"]]
+ 00bd3ee0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2ef4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00bd2ef4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3ee8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00bd3ee8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2ed4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3ec8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-96e15ee8cb000e3891200a1828e19a2a"></a>

### [`00bd2f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2f08.md) → [`00bd3efc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3efc.md) _ZN8firebase4auth26firebase_network_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9al

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
      "definition_site": "00bd3f28",
      "incomplete_value": true,
      "site": "00bd3f28",
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
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2f34",
      "incomplete_value": true,
      "site": "00bd2f34",
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
            "const:ae8:8"
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
      "definition_site": "00bd3f10",
      "incomplete_value": true,
      "site": "00bd3f10",
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
      "definition_site": "00bd2f1c",
      "incomplete_value": true,
      "site": "00bd2f1c",
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
      "definition_site": "00bd3f18",
      "incomplete_value": false,
      "site": "00bd3f20",
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
            "const:ae1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2f24",
      "incomplete_value": false,
      "site": "00bd2f2c",
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
            "const:a03:8"
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
      "00bd3f0c",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3f18",
      "PARAM",
      [
        "storage",
        "002bfa03",
        null,
        "string"
      ]
    ],
    [
      "00bd3f28",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3f0c",
      "READ",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3f18",
      "PARAM",
      [
        "storage",
        "002bfae1",
        null,
        "string"
      ]
    ],
    [
      "00bd3f28",
      "WRITE",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2f2c ["INT_ADD", "register:40f0:8", ["const:bd2f2c:8", "const:4:8"]]
- 00bd2f2c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3f20 ["INT_ADD", "register:40f0:8", ["const:bd3f20:8", "const:4:8"]]
+ 00bd3f20 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2f34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00bd2f34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3f28 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00bd3f28 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2f14 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3f08 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-9c71bfe528439685206e6c59e27a9659"></a>

### [`00bd2f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2f48.md) → [`00bd3f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3f3c.md) _ZN8firebase4auth26firebase_network_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd3f6c",
      "incomplete_value": true,
      "site": "00bd3f6c",
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
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2f78",
      "incomplete_value": true,
      "site": "00bd2f78",
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
            "const:ae8:8"
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
      "definition_site": "00bd3f50",
      "incomplete_value": true,
      "site": "00bd3f50",
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
      "definition_site": "00bd2f5c",
      "incomplete_value": true,
      "site": "00bd2f5c",
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
      "definition_site": "00bd3f5c",
      "incomplete_value": false,
      "site": "00bd3f64",
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
            "const:ae1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2f68",
      "incomplete_value": false,
      "site": "00bd2f70",
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
            "const:a03:8"
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
      "00bd3f4c",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3f5c",
      "PARAM",
      [
        "storage",
        "002bfa03",
        null,
        "string"
      ]
    ],
    [
      "00bd3f6c",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3f4c",
      "READ",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3f5c",
      "PARAM",
      [
        "storage",
        "002bfae1",
        null,
        "string"
      ]
    ],
    [
      "00bd3f6c",
      "WRITE",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2f70 ["INT_ADD", "register:40f0:8", ["const:bd2f70:8", "const:4:8"]]
- 00bd2f70 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3f64 ["INT_ADD", "register:40f0:8", ["const:bd3f64:8", "const:4:8"]]
+ 00bd3f64 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2f78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00bd2f78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3f6c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00bd3f6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2f54 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3f48 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-b75dd43b6d696febb504cd2d52d3cb45"></a>

### [`00bd2f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2f8c.md) → [`00bd3f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3f80.md) _ZN8firebase4auth26firebase_network_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd3fb0",
      "incomplete_value": true,
      "site": "00bd3fb0",
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
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2fbc",
      "incomplete_value": true,
      "site": "00bd2fbc",
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
            "const:ae8:8"
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
      "definition_site": "00bd3f94",
      "incomplete_value": true,
      "site": "00bd3f94",
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
      "definition_site": "00bd2fa0",
      "incomplete_value": true,
      "site": "00bd2fa0",
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
      "definition_site": "00bd3f9c",
      "incomplete_value": false,
      "site": "00bd3fa8",
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
            "const:ae1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd2fa8",
      "incomplete_value": false,
      "site": "00bd2fb4",
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
            "const:a03:8"
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
      "00bd3f90",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3f9c",
      "PARAM",
      [
        "storage",
        "002bfa03",
        null,
        "string"
      ]
    ],
    [
      "00bd3fb0",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd3f90",
      "READ",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3f9c",
      "PARAM",
      [
        "storage",
        "002bfae1",
        null,
        "string"
      ]
    ],
    [
      "00bd3fb0",
      "WRITE",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2fb4 ["INT_ADD", "register:40f0:8", ["const:bd2fb4:8", "const:4:8"]]
- 00bd2fb4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd3fa8 ["INT_ADD", "register:40f0:8", ["const:bd3fa8:8", "const:4:8"]]
+ 00bd3fa8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd2fbc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
- 00bd2fbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3fb0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00bd3fb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2f98 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd3f8c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-d87a5de3e1132e6e9ffe9bc7694b5753"></a>

### [`00bd2fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2fdc.md) → [`00bd3fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd3/00bd3fd0.md) _ZN8firebase4auth26firebase_network_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd4028",
      "incomplete_value": true,
      "site": "00bd4028",
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
            "const:ab0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3034",
      "incomplete_value": true,
      "site": "00bd3034",
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
            "const:af0:8"
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
      "definition_site": "00bd4004",
      "incomplete_value": true,
      "site": "00bd4010",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:aa8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3010",
      "incomplete_value": true,
      "site": "00bd301c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ae8:8"
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
      "00bd3fe4",
      "READ",
      [
        "storage",
        "01126af0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd4004",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4028",
      "WRITE",
      [
        "storage",
        "01126af0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd3fe4",
      "READ",
      [
        "storage",
        "01127ab0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd4004",
      "READ",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4028",
      "WRITE",
      [
        "storage",
        "01127ab0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd301c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd301c ["INT_ADD", "register:40f0:8", ["const:bd301c:8", "const:4:8"]]
- 00bd301c ["CALLIND", null, ["register:0:8"]]
+ 00bd4010 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd4010 ["INT_ADD", "register:40f0:8", ["const:bd4010:8", "const:4:8"]]
+ 00bd4010 ["CALLIND", null, ["register:0:8"]]
- 00bd3034 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd3034 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:af0:8"]]
- 00bd3034 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd4028 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd4028 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ab0:8"]]
+ 00bd4028 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd2fec ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd3fe0 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-ff81256ab1b97d840c84bfe3f1fcf2b2"></a>

### [`00bd3048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3048.md) → [`00bd403c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd403c.md) _ZN8firebase4auth26firebase_network_exception12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd4078",
      "incomplete_value": true,
      "site": "00bd4078",
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
            "const:ab0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3084",
      "incomplete_value": true,
      "site": "00bd3084",
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
            "const:af0:8"
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
      "definition_site": "00bd4098",
      "incomplete_value": true,
      "site": "00bd4098",
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
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd30a4",
      "incomplete_value": true,
      "site": "00bd30a4",
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
            "const:ae8:8"
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
      "definition_site": "00bd4054",
      "incomplete_value": true,
      "site": "00bd4054",
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
      "definition_site": "00bd3060",
      "incomplete_value": true,
      "site": "00bd3060",
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
      "00bd4050",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd405c",
      "READ",
      [
        "storage",
        "01126af0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd4078",
      "WRITE",
      [
        "storage",
        "01126af0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd4050",
      "READ",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd405c",
      "READ",
      [
        "storage",
        "01127ab0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd4078",
      "WRITE",
      [
        "storage",
        "01127ab0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3084 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd3084 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd3084 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:af0:8"]]
- 00bd3084 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd4078 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd4078 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd4078 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ab0:8"]]
+ 00bd4078 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd30a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd30a0 ["INT_ADD", "register:40f0:8", ["const:bd30a0:8", "const:4:8"]]
- 00bd30a0 ["CALLIND", null, ["register:0:8"]]
+ 00bd4094 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd4094 ["INT_ADD", "register:40f0:8", ["const:bd4094:8", "const:4:8"]]
+ 00bd4094 ["CALLIND", null, ["register:0:8"]]
- 00bd30a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00bd30a4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd30a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd4098 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
+ 00bd4098 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd4098 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-8bff0523df2b13187fc54ceb92cd6dbb"></a>

### [`00bd30b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd30b8.md) → [`00bd40ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd40ac.md) _ZN8firebase4auth26firebase_network_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd40ec",
      "incomplete_value": true,
      "site": "00bd40ec",
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
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd30f8",
      "incomplete_value": true,
      "site": "00bd30f8",
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
            "const:ae8:8"
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
      "definition_site": "00bd40c8",
      "incomplete_value": true,
      "site": "00bd40c8",
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
      "definition_site": "00bd30d4",
      "incomplete_value": true,
      "site": "00bd30d4",
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
      "definition_site": "00bd40d0",
      "incomplete_value": false,
      "site": "00bd40e4",
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
            "const:ae1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd30dc",
      "incomplete_value": false,
      "site": "00bd30f0",
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
            "const:a03:8"
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
      "00bd40c0",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd40d0",
      "PARAM",
      [
        "storage",
        "002bfa03",
        null,
        "string"
      ]
    ],
    [
      "00bd40ec",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd40c0",
      "READ",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd40d0",
      "PARAM",
      [
        "storage",
        "002bfae1",
        null,
        "string"
      ]
    ],
    [
      "00bd40ec",
      "WRITE",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd30f0 ["INT_ADD", "register:40f0:8", ["const:bd30f0:8", "const:4:8"]]
- 00bd30f0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd40e4 ["INT_ADD", "register:40f0:8", ["const:bd40e4:8", "const:4:8"]]
+ 00bd40e4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd30f8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00bd30f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd40ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
+ 00bd40ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd30c4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd40b8 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-7f8d56cb8f2cd1f75f969b5e9670dcd4"></a>

### [`00bd3128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3128.md) → [`00bd411c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd411c.md) _ZN8firebase4auth26firebase_network_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd4138",
      "incomplete_value": false,
      "site": "00bd413c",
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
      "definition_site": "00bd3144",
      "incomplete_value": false,
      "site": "00bd3148",
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
      "definition_site": "00bd4148",
      "incomplete_value": true,
      "site": "00bd4154",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd3154",
      "incomplete_value": true,
      "site": "00bd3160",
      "value": [
        "LOAD",
        "8",
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
      "00bd4138",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd4148",
      "DATA",
      [
        "storage",
        "01126af8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd4138",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd4148",
      "DATA",
      [
        "storage",
        "01127ab8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3148 ["INT_ADD", "register:40f0:8", ["const:bd3148:8", "const:4:8"]]
- 00bd3148 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd413c ["INT_ADD", "register:40f0:8", ["const:bd413c:8", "const:4:8"]]
+ 00bd413c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd3144 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd3144 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd3144 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd3144 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd4138 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd4138 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd4138 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd4138 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd314c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd4140 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-1104d5019112fed4a4b7df18b95c9fca"></a>

### [`00bd3164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3164.md) → [`00bd4158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4158.md) _ZN8firebase4auth26firebase_network_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd4198",
      "incomplete_value": true,
      "site": "00bd4198",
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
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd31a4",
      "incomplete_value": true,
      "site": "00bd31a4",
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
            "const:ae8:8"
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
      "definition_site": "00bd4174",
      "incomplete_value": true,
      "site": "00bd4174",
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
      "definition_site": "00bd3180",
      "incomplete_value": true,
      "site": "00bd3180",
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
      "definition_site": "00bd417c",
      "incomplete_value": false,
      "site": "00bd4190",
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
            "const:ae1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3188",
      "incomplete_value": false,
      "site": "00bd319c",
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
            "const:a03:8"
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
      "00bd416c",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd417c",
      "PARAM",
      [
        "storage",
        "002bfa03",
        null,
        "string"
      ]
    ],
    [
      "00bd4198",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd416c",
      "READ",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd417c",
      "PARAM",
      [
        "storage",
        "002bfae1",
        null,
        "string"
      ]
    ],
    [
      "00bd4198",
      "WRITE",
      [
        "storage",
        "01127aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd319c ["INT_ADD", "register:40f0:8", ["const:bd319c:8", "const:4:8"]]
- 00bd319c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd4190 ["INT_ADD", "register:40f0:8", ["const:bd4190:8", "const:4:8"]]
+ 00bd4190 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd31a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
- 00bd31a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd4198 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
+ 00bd4198 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd3170 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd4164 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-e168e115b45fd0df78228997ed796526"></a>

### [`00bd31d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd31d4.md) → [`00bd41c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd41c8.md) _ZN8firebase4auth26firebase_network_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd41e4",
      "incomplete_value": false,
      "site": "00bd41e8",
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
      "definition_site": "00bd31f0",
      "incomplete_value": false,
      "site": "00bd31f4",
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
      "definition_site": "00bd41f4",
      "incomplete_value": true,
      "site": "00bd4200",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd3200",
      "incomplete_value": true,
      "site": "00bd320c",
      "value": [
        "LOAD",
        "8",
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
      "00bd41e4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd41f4",
      "DATA",
      [
        "storage",
        "01126b00",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd41e4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd41f4",
      "DATA",
      [
        "storage",
        "01127ac0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd31f4 ["INT_ADD", "register:40f0:8", ["const:bd31f4:8", "const:4:8"]]
- 00bd31f4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd41e8 ["INT_ADD", "register:40f0:8", ["const:bd41e8:8", "const:4:8"]]
+ 00bd41e8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd31f0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd31f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd31f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd31f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd41e4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd41e4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd41e4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd41e4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd31f8 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd41ec ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-53e034f3f5908ee42b2ecfb8d7140e03"></a>

### [`00bd3210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3210.md) → [`00bd4204`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4204.md) _ZN8firebase4auth27too_many_requests_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9a

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
      "definition_site": "00bd4230",
      "incomplete_value": true,
      "site": "00bd4230",
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
            "const:ac8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd323c",
      "incomplete_value": true,
      "site": "00bd323c",
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
            "const:b08:8"
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
      "definition_site": "00bd4218",
      "incomplete_value": true,
      "site": "00bd4218",
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
      "definition_site": "00bd3224",
      "incomplete_value": true,
      "site": "00bd3224",
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
      "definition_site": "00bd4224",
      "incomplete_value": false,
      "site": "00bd4228",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3230",
      "incomplete_value": false,
      "site": "00bd3234",
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
            "const:c59:8"
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
      "00bd4214",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4224",
      "PARAM",
      [
        "storage",
        "002b5c59",
        null,
        "string"
      ]
    ],
    [
      "00bd4230",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd4214",
      "READ",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4224",
      "PARAM",
      [
        "storage",
        "002b5d28",
        null,
        "string"
      ]
    ],
    [
      "00bd4230",
      "WRITE",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3234 ["INT_ADD", "register:40f0:8", ["const:bd3234:8", "const:4:8"]]
- 00bd3234 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd4228 ["INT_ADD", "register:40f0:8", ["const:bd4228:8", "const:4:8"]]
+ 00bd4228 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd323c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
- 00bd323c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd4230 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
+ 00bd4230 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd321c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd4210 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-14e9e4751c6d94b5810dd8859aeaac82"></a>

### [`00bd3250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3250.md) → [`00bd4244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4244.md) _ZN8firebase4auth27too_many_requests_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9a

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
      "definition_site": "00bd4270",
      "incomplete_value": true,
      "site": "00bd4270",
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
            "const:ac8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd327c",
      "incomplete_value": true,
      "site": "00bd327c",
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
            "const:b08:8"
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
      "definition_site": "00bd4258",
      "incomplete_value": true,
      "site": "00bd4258",
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
      "definition_site": "00bd3264",
      "incomplete_value": true,
      "site": "00bd3264",
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
      "definition_site": "00bd4260",
      "incomplete_value": false,
      "site": "00bd4268",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd326c",
      "incomplete_value": false,
      "site": "00bd3274",
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
            "const:c59:8"
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
      "00bd4254",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4260",
      "PARAM",
      [
        "storage",
        "002b5c59",
        null,
        "string"
      ]
    ],
    [
      "00bd4270",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd4254",
      "READ",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4260",
      "PARAM",
      [
        "storage",
        "002b5d28",
        null,
        "string"
      ]
    ],
    [
      "00bd4270",
      "WRITE",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3274 ["INT_ADD", "register:40f0:8", ["const:bd3274:8", "const:4:8"]]
- 00bd3274 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd4268 ["INT_ADD", "register:40f0:8", ["const:bd4268:8", "const:4:8"]]
+ 00bd4268 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd327c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
- 00bd327c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd4270 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
+ 00bd4270 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd325c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd4250 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-8efcb9cd9705ca07774233a319b200b8"></a>

### [`00bd3290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3290.md) → [`00bd4284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4284.md) _ZN8firebase4auth27too_many_requests_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd42b4",
      "incomplete_value": true,
      "site": "00bd42b4",
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
            "const:ac8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd32c0",
      "incomplete_value": true,
      "site": "00bd32c0",
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
            "const:b08:8"
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
      "definition_site": "00bd4298",
      "incomplete_value": true,
      "site": "00bd4298",
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
      "definition_site": "00bd32a4",
      "incomplete_value": true,
      "site": "00bd32a4",
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
      "definition_site": "00bd42a4",
      "incomplete_value": false,
      "site": "00bd42ac",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd32b0",
      "incomplete_value": false,
      "site": "00bd32b8",
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
            "const:c59:8"
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
      "00bd4294",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd42a4",
      "PARAM",
      [
        "storage",
        "002b5c59",
        null,
        "string"
      ]
    ],
    [
      "00bd42b4",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd4294",
      "READ",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd42a4",
      "PARAM",
      [
        "storage",
        "002b5d28",
        null,
        "string"
      ]
    ],
    [
      "00bd42b4",
      "WRITE",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd32b8 ["INT_ADD", "register:40f0:8", ["const:bd32b8:8", "const:4:8"]]
- 00bd32b8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd42ac ["INT_ADD", "register:40f0:8", ["const:bd42ac:8", "const:4:8"]]
+ 00bd42ac ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd32c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
- 00bd32c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd42b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
+ 00bd42b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd329c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd4290 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-6bdf1a2152d51904b780627a3ffbf09e"></a>

### [`00bd32d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd32d4.md) → [`00bd42c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd42c8.md) _ZN8firebase4auth27too_many_requests_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd42f8",
      "incomplete_value": true,
      "site": "00bd42f8",
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
            "const:ac8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3304",
      "incomplete_value": true,
      "site": "00bd3304",
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
            "const:b08:8"
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
      "definition_site": "00bd42dc",
      "incomplete_value": true,
      "site": "00bd42dc",
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
      "definition_site": "00bd32e8",
      "incomplete_value": true,
      "site": "00bd32e8",
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
      "definition_site": "00bd42e4",
      "incomplete_value": false,
      "site": "00bd42f0",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd32f0",
      "incomplete_value": false,
      "site": "00bd32fc",
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
            "const:c59:8"
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
      "00bd42d8",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd42e4",
      "PARAM",
      [
        "storage",
        "002b5c59",
        null,
        "string"
      ]
    ],
    [
      "00bd42f8",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd42d8",
      "READ",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd42e4",
      "PARAM",
      [
        "storage",
        "002b5d28",
        null,
        "string"
      ]
    ],
    [
      "00bd42f8",
      "WRITE",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd32fc ["INT_ADD", "register:40f0:8", ["const:bd32fc:8", "const:4:8"]]
- 00bd32fc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd42f0 ["INT_ADD", "register:40f0:8", ["const:bd42f0:8", "const:4:8"]]
+ 00bd42f0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd3304 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
- 00bd3304 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd42f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
+ 00bd42f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd32e0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd42d4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-50afd17607e08e392ad65d05c9fb7d27"></a>

### [`00bd3324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3324.md) → [`00bd4318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4318.md) _ZN8firebase4auth27too_many_requests_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd4370",
      "incomplete_value": true,
      "site": "00bd4370",
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
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd337c",
      "incomplete_value": true,
      "site": "00bd337c",
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
            "const:b10:8"
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
      "definition_site": "00bd434c",
      "incomplete_value": true,
      "site": "00bd4358",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ac8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3358",
      "incomplete_value": true,
      "site": "00bd3364",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b08:8"
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
      "00bd432c",
      "READ",
      [
        "storage",
        "01126b10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd434c",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4370",
      "WRITE",
      [
        "storage",
        "01126b10",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd432c",
      "READ",
      [
        "storage",
        "01127ad0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd434c",
      "READ",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4370",
      "WRITE",
      [
        "storage",
        "01127ad0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3364 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd3364 ["INT_ADD", "register:40f0:8", ["const:bd3364:8", "const:4:8"]]
- 00bd3364 ["CALLIND", null, ["register:0:8"]]
+ 00bd4358 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd4358 ["INT_ADD", "register:40f0:8", ["const:bd4358:8", "const:4:8"]]
+ 00bd4358 ["CALLIND", null, ["register:0:8"]]
- 00bd337c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd337c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b10:8"]]
- 00bd337c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd4370 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd4370 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ad0:8"]]
+ 00bd4370 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd3334 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd4328 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-7b2b358881afa7acd8300387daf63874"></a>

### [`00bd3390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3390.md) → [`00bd4384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4384.md) _ZN8firebase4auth27too_many_requests_exception12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd43c0",
      "incomplete_value": true,
      "site": "00bd43c0",
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
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd33cc",
      "incomplete_value": true,
      "site": "00bd33cc",
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
            "const:b10:8"
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
      "definition_site": "00bd43e0",
      "incomplete_value": true,
      "site": "00bd43e0",
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
            "const:ac8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd33ec",
      "incomplete_value": true,
      "site": "00bd33ec",
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
            "const:b08:8"
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
      "definition_site": "00bd439c",
      "incomplete_value": true,
      "site": "00bd439c",
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
      "definition_site": "00bd33a8",
      "incomplete_value": true,
      "site": "00bd33a8",
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
      "00bd4398",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd43a4",
      "READ",
      [
        "storage",
        "01126b10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd43c0",
      "WRITE",
      [
        "storage",
        "01126b10",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd4398",
      "READ",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd43a4",
      "READ",
      [
        "storage",
        "01127ad0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd43c0",
      "WRITE",
      [
        "storage",
        "01127ad0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd33cc ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd33cc ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd33cc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b10:8"]]
- 00bd33cc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd43c0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd43c0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd43c0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ad0:8"]]
+ 00bd43c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd33e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd33e8 ["INT_ADD", "register:40f0:8", ["const:bd33e8:8", "const:4:8"]]
- 00bd33e8 ["CALLIND", null, ["register:0:8"]]
+ 00bd43dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd43dc ["INT_ADD", "register:40f0:8", ["const:bd43dc:8", "const:4:8"]]
+ 00bd43dc ["CALLIND", null, ["register:0:8"]]
- 00bd33ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
- 00bd33ec ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd33ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd43e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
+ 00bd43e0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd43e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-6bd03d602271ebb0d9bf1f6d50c6a79f"></a>

### [`00bd3400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3400.md) → [`00bd43f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd43f4.md) _ZN8firebase4auth27too_many_requests_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd4434",
      "incomplete_value": true,
      "site": "00bd4434",
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
            "const:ac8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3440",
      "incomplete_value": true,
      "site": "00bd3440",
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
            "const:b08:8"
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
      "definition_site": "00bd4410",
      "incomplete_value": true,
      "site": "00bd4410",
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
      "definition_site": "00bd341c",
      "incomplete_value": true,
      "site": "00bd341c",
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
      "definition_site": "00bd4418",
      "incomplete_value": false,
      "site": "00bd442c",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3424",
      "incomplete_value": false,
      "site": "00bd3438",
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
            "const:c59:8"
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
      "00bd4408",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4418",
      "PARAM",
      [
        "storage",
        "002b5c59",
        null,
        "string"
      ]
    ],
    [
      "00bd4434",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd4408",
      "READ",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4418",
      "PARAM",
      [
        "storage",
        "002b5d28",
        null,
        "string"
      ]
    ],
    [
      "00bd4434",
      "WRITE",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3438 ["INT_ADD", "register:40f0:8", ["const:bd3438:8", "const:4:8"]]
- 00bd3438 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd442c ["INT_ADD", "register:40f0:8", ["const:bd442c:8", "const:4:8"]]
+ 00bd442c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd3440 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
- 00bd3440 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd4434 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
+ 00bd4434 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd340c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd4400 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-a150b26bd7f79d304cc0fffef87b04a6"></a>

### [`00bd3470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3470.md) → [`00bd4464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4464.md) _ZN8firebase4auth27too_many_requests_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd4480",
      "incomplete_value": false,
      "site": "00bd4484",
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
      "definition_site": "00bd348c",
      "incomplete_value": false,
      "site": "00bd3490",
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
      "definition_site": "00bd4490",
      "incomplete_value": true,
      "site": "00bd449c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd349c",
      "incomplete_value": true,
      "site": "00bd34a8",
      "value": [
        "LOAD",
        "8",
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
      "00bd4480",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd4490",
      "DATA",
      [
        "storage",
        "01126b18",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd4480",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd4490",
      "DATA",
      [
        "storage",
        "01127ad8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3490 ["INT_ADD", "register:40f0:8", ["const:bd3490:8", "const:4:8"]]
- 00bd3490 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd4484 ["INT_ADD", "register:40f0:8", ["const:bd4484:8", "const:4:8"]]
+ 00bd4484 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd348c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd348c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd348c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd348c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd4480 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd4480 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd4480 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd4480 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd3494 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd4488 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-f9dd860525547b39643ae3d9f36c0468"></a>

### [`00bd34ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd34ac.md) → [`00bd44a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd44a0.md) _ZN8firebase4auth27too_many_requests_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd44e0",
      "incomplete_value": true,
      "site": "00bd44e0",
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
            "const:ac8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd34ec",
      "incomplete_value": true,
      "site": "00bd34ec",
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
            "const:b08:8"
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
      "definition_site": "00bd44bc",
      "incomplete_value": true,
      "site": "00bd44bc",
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
      "definition_site": "00bd34c8",
      "incomplete_value": true,
      "site": "00bd34c8",
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
      "definition_site": "00bd44c4",
      "incomplete_value": false,
      "site": "00bd44d8",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd34d0",
      "incomplete_value": false,
      "site": "00bd34e4",
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
            "const:c59:8"
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
      "00bd44b4",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd44c4",
      "PARAM",
      [
        "storage",
        "002b5c59",
        null,
        "string"
      ]
    ],
    [
      "00bd44e0",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd44b4",
      "READ",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd44c4",
      "PARAM",
      [
        "storage",
        "002b5d28",
        null,
        "string"
      ]
    ],
    [
      "00bd44e0",
      "WRITE",
      [
        "storage",
        "01127ac8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd34e4 ["INT_ADD", "register:40f0:8", ["const:bd34e4:8", "const:4:8"]]
- 00bd34e4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd44d8 ["INT_ADD", "register:40f0:8", ["const:bd44d8:8", "const:4:8"]]
+ 00bd44d8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd34ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
- 00bd34ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd44e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
+ 00bd44e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd34b8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd44ac ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-4dedee8a557cbad0c56eb3ee42a348ac"></a>

### [`00bd351c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd351c.md) → [`00bd4510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4510.md) _ZN8firebase4auth27too_many_requests_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd452c",
      "incomplete_value": false,
      "site": "00bd4530",
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
      "definition_site": "00bd3538",
      "incomplete_value": false,
      "site": "00bd353c",
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
      "definition_site": "00bd453c",
      "incomplete_value": true,
      "site": "00bd4548",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd3548",
      "incomplete_value": true,
      "site": "00bd3554",
      "value": [
        "LOAD",
        "8",
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
      "00bd452c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd453c",
      "DATA",
      [
        "storage",
        "01126b20",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd452c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd453c",
      "DATA",
      [
        "storage",
        "01127ae0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd353c ["INT_ADD", "register:40f0:8", ["const:bd353c:8", "const:4:8"]]
- 00bd353c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd4530 ["INT_ADD", "register:40f0:8", ["const:bd4530:8", "const:4:8"]]
+ 00bd4530 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd3538 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd3538 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd3538 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd3538 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd452c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd452c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd452c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd452c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd3540 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd4534 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-9169895ca6410bb658c2850135e5e825"></a>

### [`00bd3558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3558.md) → [`00bd454c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd454c.md) _ZN8firebase4auth18firebase_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorI

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
      "definition_site": "00bd4578",
      "incomplete_value": true,
      "site": "00bd4578",
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
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3584",
      "incomplete_value": true,
      "site": "00bd3584",
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
            "const:b28:8"
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
      "definition_site": "00bd4560",
      "incomplete_value": true,
      "site": "00bd4560",
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
      "definition_site": "00bd356c",
      "incomplete_value": true,
      "site": "00bd356c",
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
      "definition_site": "00bd456c",
      "incomplete_value": false,
      "site": "00bd4570",
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
            "const:db5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3578",
      "incomplete_value": false,
      "site": "00bd357c",
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
            "const:cea:8"
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
      "00bd455c",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd456c",
      "PARAM",
      [
        "storage",
        "002a2cea",
        null,
        "string"
      ]
    ],
    [
      "00bd4578",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd455c",
      "READ",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd456c",
      "PARAM",
      [
        "storage",
        "002a2db5",
        null,
        "string"
      ]
    ],
    [
      "00bd4578",
      "WRITE",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd357c ["INT_ADD", "register:40f0:8", ["const:bd357c:8", "const:4:8"]]
- 00bd357c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd4570 ["INT_ADD", "register:40f0:8", ["const:bd4570:8", "const:4:8"]]
+ 00bd4570 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd3584 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
- 00bd3584 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd4578 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
+ 00bd4578 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd3564 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd4558 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-b0f8165997ccb71cb44ae3b3626c14ad"></a>

### [`00bd3598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3598.md) → [`00bd458c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd458c.md) _ZN8firebase4auth18firebase_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorI

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
      "definition_site": "00bd45b8",
      "incomplete_value": true,
      "site": "00bd45b8",
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
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd35c4",
      "incomplete_value": true,
      "site": "00bd35c4",
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
            "const:b28:8"
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
      "definition_site": "00bd45a0",
      "incomplete_value": true,
      "site": "00bd45a0",
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
      "definition_site": "00bd35ac",
      "incomplete_value": true,
      "site": "00bd35ac",
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
      "definition_site": "00bd45a8",
      "incomplete_value": false,
      "site": "00bd45b0",
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
            "const:db5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd35b4",
      "incomplete_value": false,
      "site": "00bd35bc",
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
            "const:cea:8"
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
      "00bd459c",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd45a8",
      "PARAM",
      [
        "storage",
        "002a2cea",
        null,
        "string"
      ]
    ],
    [
      "00bd45b8",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd459c",
      "READ",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd45a8",
      "PARAM",
      [
        "storage",
        "002a2db5",
        null,
        "string"
      ]
    ],
    [
      "00bd45b8",
      "WRITE",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd35bc ["INT_ADD", "register:40f0:8", ["const:bd35bc:8", "const:4:8"]]
- 00bd35bc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd45b0 ["INT_ADD", "register:40f0:8", ["const:bd45b0:8", "const:4:8"]]
+ 00bd45b0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd35c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
- 00bd35c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd45b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
+ 00bd45b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd35a4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd4598 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-1600c903aad9fb97f664f14fa6aad7c0"></a>

### [`00bd35d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd35d8.md) → [`00bd45cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd45cc.md) _ZN8firebase4auth18firebase_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd45fc",
      "incomplete_value": true,
      "site": "00bd45fc",
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
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3608",
      "incomplete_value": true,
      "site": "00bd3608",
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
            "const:b28:8"
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
      "definition_site": "00bd45e0",
      "incomplete_value": true,
      "site": "00bd45e0",
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
      "definition_site": "00bd35ec",
      "incomplete_value": true,
      "site": "00bd35ec",
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
      "definition_site": "00bd45ec",
      "incomplete_value": false,
      "site": "00bd45f4",
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
            "const:db5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd35f8",
      "incomplete_value": false,
      "site": "00bd3600",
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
            "const:cea:8"
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
      "00bd45dc",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd45ec",
      "PARAM",
      [
        "storage",
        "002a2cea",
        null,
        "string"
      ]
    ],
    [
      "00bd45fc",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd45dc",
      "READ",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd45ec",
      "PARAM",
      [
        "storage",
        "002a2db5",
        null,
        "string"
      ]
    ],
    [
      "00bd45fc",
      "WRITE",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3600 ["INT_ADD", "register:40f0:8", ["const:bd3600:8", "const:4:8"]]
- 00bd3600 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd45f4 ["INT_ADD", "register:40f0:8", ["const:bd45f4:8", "const:4:8"]]
+ 00bd45f4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd3608 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
- 00bd3608 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd45fc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
+ 00bd45fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd35e4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd45d8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-23e5bf058e8a87be87ae8b41672cb4ef"></a>

### [`00bd361c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd361c.md) → [`00bd4610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4610.md) _ZN8firebase4auth18firebase_exception10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd4640",
      "incomplete_value": true,
      "site": "00bd4640",
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
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd364c",
      "incomplete_value": true,
      "site": "00bd364c",
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
            "const:b28:8"
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
      "definition_site": "00bd4624",
      "incomplete_value": true,
      "site": "00bd4624",
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
      "definition_site": "00bd3630",
      "incomplete_value": true,
      "site": "00bd3630",
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
      "definition_site": "00bd462c",
      "incomplete_value": false,
      "site": "00bd4638",
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
            "const:db5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3638",
      "incomplete_value": false,
      "site": "00bd3644",
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
            "const:cea:8"
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
      "00bd4620",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd462c",
      "PARAM",
      [
        "storage",
        "002a2cea",
        null,
        "string"
      ]
    ],
    [
      "00bd4640",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd4620",
      "READ",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd462c",
      "PARAM",
      [
        "storage",
        "002a2db5",
        null,
        "string"
      ]
    ],
    [
      "00bd4640",
      "WRITE",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3644 ["INT_ADD", "register:40f0:8", ["const:bd3644:8", "const:4:8"]]
- 00bd3644 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd4638 ["INT_ADD", "register:40f0:8", ["const:bd4638:8", "const:4:8"]]
+ 00bd4638 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd364c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
- 00bd364c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd4640 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
+ 00bd4640 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd3628 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd461c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-af737d98fab041a2881585188c8b02cd"></a>

### [`00bd366c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd366c.md) → [`00bd4660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4660.md) _ZN8firebase4auth18firebase_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd46b8",
      "incomplete_value": true,
      "site": "00bd46b8",
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
            "const:af0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd36c4",
      "incomplete_value": true,
      "site": "00bd36c4",
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
            "const:b30:8"
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
      "definition_site": "00bd4694",
      "incomplete_value": true,
      "site": "00bd46a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ae8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd36a0",
      "incomplete_value": true,
      "site": "00bd36ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b28:8"
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
      "00bd4674",
      "READ",
      [
        "storage",
        "01126b30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd4694",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd46b8",
      "WRITE",
      [
        "storage",
        "01126b30",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd4674",
      "READ",
      [
        "storage",
        "01127af0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd4694",
      "READ",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd46b8",
      "WRITE",
      [
        "storage",
        "01127af0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd36ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd36ac ["INT_ADD", "register:40f0:8", ["const:bd36ac:8", "const:4:8"]]
- 00bd36ac ["CALLIND", null, ["register:0:8"]]
+ 00bd46a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd46a0 ["INT_ADD", "register:40f0:8", ["const:bd46a0:8", "const:4:8"]]
+ 00bd46a0 ["CALLIND", null, ["register:0:8"]]
- 00bd36c4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd36c4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b30:8"]]
- 00bd36c4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd46b8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd46b8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:af0:8"]]
+ 00bd46b8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd367c ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd4670 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-d3fb0c73fb2f1db2962d41e731dbb0fc"></a>

### [`00bd36d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd36d8.md) → [`00bd46cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd46cc.md) _ZN8firebase4auth18firebase_exception12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd4708",
      "incomplete_value": true,
      "site": "00bd4708",
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
            "const:af0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3714",
      "incomplete_value": true,
      "site": "00bd3714",
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
            "const:b30:8"
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
      "definition_site": "00bd4728",
      "incomplete_value": true,
      "site": "00bd4728",
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
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3734",
      "incomplete_value": true,
      "site": "00bd3734",
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
            "const:b28:8"
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
      "definition_site": "00bd46e4",
      "incomplete_value": true,
      "site": "00bd46e4",
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
      "definition_site": "00bd36f0",
      "incomplete_value": true,
      "site": "00bd36f0",
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
      "00bd46e0",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd46ec",
      "READ",
      [
        "storage",
        "01126b30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd4708",
      "WRITE",
      [
        "storage",
        "01126b30",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd46e0",
      "READ",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd46ec",
      "READ",
      [
        "storage",
        "01127af0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd4708",
      "WRITE",
      [
        "storage",
        "01127af0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3714 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd3714 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd3714 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b30:8"]]
- 00bd3714 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd4708 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd4708 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd4708 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:af0:8"]]
+ 00bd4708 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd3734 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b28:8"]]
- 00bd3734 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd3734 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd4728 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
+ 00bd4728 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd4728 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00bd36e8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd46dc ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-e671acac951b8cadad2b369194c3df14"></a>

### [`00bd3748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3748.md) → [`00bd473c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd473c.md) _ZN8firebase4auth18firebase_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd477c",
      "incomplete_value": true,
      "site": "00bd477c",
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
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3788",
      "incomplete_value": true,
      "site": "00bd3788",
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
            "const:b28:8"
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
      "definition_site": "00bd4758",
      "incomplete_value": true,
      "site": "00bd4758",
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
      "definition_site": "00bd3764",
      "incomplete_value": true,
      "site": "00bd3764",
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
      "definition_site": "00bd4760",
      "incomplete_value": false,
      "site": "00bd4774",
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
            "const:db5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd376c",
      "incomplete_value": false,
      "site": "00bd3780",
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
            "const:cea:8"
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
      "00bd4750",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4760",
      "PARAM",
      [
        "storage",
        "002a2cea",
        null,
        "string"
      ]
    ],
    [
      "00bd477c",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd4750",
      "READ",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4760",
      "PARAM",
      [
        "storage",
        "002a2db5",
        null,
        "string"
      ]
    ],
    [
      "00bd477c",
      "WRITE",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3780 ["INT_ADD", "register:40f0:8", ["const:bd3780:8", "const:4:8"]]
- 00bd3780 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd4774 ["INT_ADD", "register:40f0:8", ["const:bd4774:8", "const:4:8"]]
+ 00bd4774 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd3788 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b28:8"]]
- 00bd3788 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd477c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
+ 00bd477c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd3754 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd4748 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-92b2f6ccb7d6416e928a42947175fed7"></a>

### [`00bd37b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd37b8.md) → [`00bd47ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd47ac.md) _ZN8firebase4auth18firebase_exception11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd47c8",
      "incomplete_value": false,
      "site": "00bd47cc",
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
      "definition_site": "00bd37d4",
      "incomplete_value": false,
      "site": "00bd37d8",
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
      "definition_site": "00bd47d8",
      "incomplete_value": true,
      "site": "00bd47e4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd37e4",
      "incomplete_value": true,
      "site": "00bd37f0",
      "value": [
        "LOAD",
        "8",
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
      "00bd47c8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd47d8",
      "DATA",
      [
        "storage",
        "01126b38",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd47c8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd47d8",
      "DATA",
      [
        "storage",
        "01127af8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd37d8 ["INT_ADD", "register:40f0:8", ["const:bd37d8:8", "const:4:8"]]
- 00bd37d8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd47cc ["INT_ADD", "register:40f0:8", ["const:bd47cc:8", "const:4:8"]]
+ 00bd47cc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd37d4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd37d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd37d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd37d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd47c8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd47c8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd47c8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd47c8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd37dc ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd47d0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-9bab794ef6941d50b0c6806c089ad2f4"></a>

### [`00bd37f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd37f4.md) → [`00bd47e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd47e8.md) _ZN8firebase4auth18firebase_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd4828",
      "incomplete_value": true,
      "site": "00bd4828",
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
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3834",
      "incomplete_value": true,
      "site": "00bd3834",
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
            "const:b28:8"
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
      "definition_site": "00bd4804",
      "incomplete_value": true,
      "site": "00bd4804",
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
      "definition_site": "00bd3810",
      "incomplete_value": true,
      "site": "00bd3810",
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
      "definition_site": "00bd480c",
      "incomplete_value": true,
      "site": "00bd4820",
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
            "const:db5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3818",
      "incomplete_value": true,
      "site": "00bd382c",
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
            "const:cea:8"
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
      "00bd47fc",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd480c",
      "PARAM",
      [
        "storage",
        "002a2cea",
        null,
        "string"
      ]
    ],
    [
      "00bd4828",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd47fc",
      "READ",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd480c",
      "PARAM",
      [
        "storage",
        "002a2db5",
        null,
        "string"
      ]
    ],
    [
      "00bd4828",
      "WRITE",
      [
        "storage",
        "01127ae8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd382c ["INT_ADD", "register:40f0:8", ["const:bd382c:8", "const:4:8"]]
- 00bd382c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd4820 ["INT_ADD", "register:40f0:8", ["const:bd4820:8", "const:4:8"]]
+ 00bd4820 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd3834 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b28:8"]]
- 00bd3834 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd4828 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
+ 00bd4828 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd3800 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd47f4 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-f6874b0131fe1d3f37719c79e0b5bea9"></a>

### [`00bd3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3864.md) → [`00bd4858`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4858.md) _ZN8firebase4auth18firebase_exception10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd4874",
      "incomplete_value": false,
      "site": "00bd4878",
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
      "definition_site": "00bd3880",
      "incomplete_value": false,
      "site": "00bd3884",
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
      "definition_site": "00bd4884",
      "incomplete_value": true,
      "site": "00bd4890",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd3890",
      "incomplete_value": true,
      "site": "00bd389c",
      "value": [
        "LOAD",
        "8",
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
      "00bd4874",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd4884",
      "DATA",
      [
        "storage",
        "01126b40",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd4874",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd4884",
      "DATA",
      [
        "storage",
        "01127b00",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3884 ["INT_ADD", "register:40f0:8", ["const:bd3884:8", "const:4:8"]]
- 00bd3884 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd4878 ["INT_ADD", "register:40f0:8", ["const:bd4878:8", "const:4:8"]]
+ 00bd4878 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd3880 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd3880 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd3880 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd3880 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd4874 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd4874 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd4874 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd4874 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd3888 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd487c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-46b70ebc8ba8fa1526b45aa59ef6e974"></a>

### [`00bd38a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd38a0.md) → [`00bd4894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4894.md) _ZN8firebase4auth20CacheCommonMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5dd60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd60.md) · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 1件 [`00c5ed30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ed30.md) · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 77.55% / 新版 77.55%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 40件, `store_condition` 1件, `store_destination` 15件

アドレスに依存する影響 `branch_value` 14件, `store_condition` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd48d8",
      "incomplete_value": true,
      "site": "00bd48d8",
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
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd38e4",
      "incomplete_value": true,
      "site": "00bd38e4",
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
            "const:aa8:8"
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
      "definition_site": "00bd4930",
      "incomplete_value": true,
      "site": "00bd4930",
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
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd393c",
      "incomplete_value": true,
      "site": "00bd393c",
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
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd4988",
      "incomplete_value": true,
      "site": "00bd4988",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3994",
      "incomplete_value": true,
      "site": "00bd3994",
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
            "const:978:8"
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
      "00bd48ac",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd48bc",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ],
    [
      "00bd48d8",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd48ac",
      "READ",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd48bc",
      "PARAM",
      [
        "storage",
        "002a0d48",
        null,
        "string"
      ]
    ],
    [
      "00bd48d8",
      "WRITE",
      [
        "storage",
        "01127a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd38dc ["INT_ADD", "register:40f0:8", ["const:bd38dc:8", "const:4:8"]]
- 00bd38dc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd48d0 ["INT_ADD", "register:40f0:8", ["const:bd48d0:8", "const:4:8"]]
+ 00bd48d0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd38e4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:aa8:8"]]
- 00bd38e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd48d8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a68:8"]]
+ 00bd48d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd390c ["INT_ADD", "register:40f0:8", ["const:bd390c:8", "const:4:8"]]
- 00bd390c ["CALL", null, ["callee:00c5bfd0:8"]]
+ 00bd4900 ["INT_ADD", "register:40f0:8", ["const:bd4900:8", "const:4:8"]]
+ 00bd4900 ["CALL", null, ["callee:00c5bfd0:8"]]
~~~


<a id="compare-b4eaca46e297073f814215ed96d93366"></a>

### [`00bd3dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3dfc.md) → [`00bd4df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd4/00bd4df0.md) _ZN8firebase4auth20ReleaseCommonClassesEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dd70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd70.md) · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 1件 [`00c5ed40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ed40.md) · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, control_flow, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.99% / 新版 65.99%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 4件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 18件, `unresolved_store_alignment` 9件

アドレスに依存する影響 `branch_value` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd4e2c",
      "incomplete_value": true,
      "site": "00bd4e2c",
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
      "definition_site": "00bd3e38",
      "incomplete_value": true,
      "site": "00bd3e38",
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
      "definition_site": "00bd4e4c",
      "incomplete_value": true,
      "site": "00bd4e4c",
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
      "definition_site": "00bd3e58",
      "incomplete_value": true,
      "site": "00bd3e58",
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
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd4ff4",
      "incomplete_value": true,
      "site": "00bd4ff4",
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
      "definition_site": "00bd4000",
      "incomplete_value": true,
      "site": "00bd4000",
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
    "ordinal": 17,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd4e04",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4e14",
      "READ",
      [
        "storage",
        "01126950",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd4e2c",
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
      "00bd4e04",
      "READ",
      [
        "storage",
        "01127908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd4e14",
      "READ",
      [
        "storage",
        "01127910",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd4e2c",
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
- 00bd3e38 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd3e38 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd3e38 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:950:8"]]
- 00bd3e38 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd4e2c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd4e2c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd4e2c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:910:8"]]
+ 00bd4e2c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd3e54 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd3e54 ["INT_ADD", "register:40f0:8", ["const:bd3e54:8", "const:4:8"]]
- 00bd3e54 ["CALLIND", null, ["register:0:8"]]
+ 00bd4e48 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd4e48 ["INT_ADD", "register:40f0:8", ["const:bd4e48:8", "const:4:8"]]
+ 00bd4e48 ["CALLIND", null, ["register:0:8"]]
- 00bd3e58 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
- 00bd3e58 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd3e58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd4e4c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:908:8"]]
+ 00bd4e4c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd4e4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-1a4596bc8a08f354ad7bc077fcd88b48"></a>

### [`00bd4294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4294.md) → [`00bd5288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd5288.md) _ZN8firebase4auth22ErrorCodeFromExceptionEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5de50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de50.md) · 呼出先 10件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5ee20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee20.md) · 呼出先 10件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59070.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 call_argument_candidate, constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 85.28% / 新版 85.28%

優先判定に残った影響 `store_value` 6件, `unresolved_store_alignment` 6件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bd53ac",
      "incomplete_value": true,
      "site": "00bd53ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:968:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd43b8",
      "incomplete_value": true,
      "site": "00bd43b8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:9a8:8"
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
      "definition_site": "00bd53b4",
      "incomplete_value": true,
      "site": "00bd53b4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00bd43c0",
      "incomplete_value": true,
      "site": "00bd43c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bd53b4",
      "incomplete_value": false,
      "site": "00bd53b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c92000:8"
          ],
          [
            "leaf",
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd43c0",
      "incomplete_value": false,
      "site": "00bd43c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c91000:8"
          ],
          [
            "leaf",
            "const:da0:8"
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
      "00bd52cc",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd52ec",
      "READ",
      [
        "storage",
        "01126ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd537c",
      "READ",
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
      "00bd52cc",
      "READ",
      [
        "storage",
        "01127a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd52ec",
      "READ",
      [
        "storage",
        "01127a98",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5378",
      "READ",
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
- 00bd42e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd42e8 ["INT_ADD", "register:40f0:8", ["const:bd42e8:8", "const:4:8"]]
- 00bd42e8 ["CALLIND", null, ["register:0:8"]]
+ 00bd52dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd52dc ["INT_ADD", "register:40f0:8", ["const:bd52dc:8", "const:4:8"]]
+ 00bd52dc ["CALLIND", null, ["register:0:8"]]
- 00bd4304 ["INT_ADD", "register:40f0:8", ["const:bd4304:8", "const:4:8"]]
- 00bd4304 ["CALL", null, ["callee:00497b94:8"]]
+ 00bd52f8 ["INT_ADD", "register:40f0:8", ["const:bd52f8:8", "const:4:8"]]
+ 00bd52f8 ["CALL", null, ["callee:00497b94:8"]]
- 00bd42d4 ["COPY", "register:40b8:8", ["const:1126000:8"]]
+ 00bd52c8 ["COPY", "register:40b8:8", ["const:1127000:8"]]
~~~


<a id="compare-40f3ae0570457e61454d708304d26921"></a>

### [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) → [`00bd58bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd58bc.md) _ZN8firebase4auth14ReadAuthResultEP8_jobjectPNS0_18FutureCallbackDataINS0_10AuthResultEEEbPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 11件 [`00bce164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce164.md) [`00bce92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bce92c.md) [`00bceb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bceb9c.md) [`00bced28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bced28.md) [`00bcefb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bce/00bcefb4.md) · 呼出先 11件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aac0.md) [`00c5ab00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab00.md) [`00c5ab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab20.md)
- 新版 呼出元 11件 [`00bcf158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcf158.md) [`00bcf920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcf920.md) [`00bcfb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcfb90.md) [`00bcfd1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcfd1c.md) [`00bcffa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcf/00bcffa8.md) · 呼出先 11件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5ba90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5ba90.md) [`00c5bad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bad0.md) [`00c5baf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baf0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.08% / 新版 98.08%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd5910",
      "incomplete_value": true,
      "site": "00bd591c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:918:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd491c",
      "incomplete_value": true,
      "site": "00bd4928",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:958:8"
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
      "definition_site": "00bd59ac",
      "incomplete_value": true,
      "site": "00bd59b8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:920:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd49b8",
      "incomplete_value": true,
      "site": "00bd49c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:960:8"
              ]
            ]
          ]
        ]
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
      "00bd5910",
      "READ",
      [
        "storage",
        "01126958",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd59ac",
      "READ",
      [
        "storage",
        "01126960",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd59ec",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5910",
      "READ",
      [
        "storage",
        "01127918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd59ac",
      "READ",
      [
        "storage",
        "01127920",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd59ec",
      "READ",
      [
        "storage",
        "01127928",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4928 ["INT_ADD", "register:40f0:8", ["const:bd4928:8", "const:4:8"]]
- 00bd4928 ["CALL", null, ["callee:00497b94:8"]]
+ 00bd591c ["INT_ADD", "register:40f0:8", ["const:bd591c:8", "const:4:8"]]
+ 00bd591c ["CALL", null, ["callee:00497b94:8"]]
- 00bd49c4 ["INT_ADD", "register:40f0:8", ["const:bd49c4:8", "const:4:8"]]
- 00bd49c4 ["CALL", null, ["callee:00497b94:8"]]
+ 00bd59b8 ["INT_ADD", "register:40f0:8", ["const:bd59b8:8", "const:4:8"]]
+ 00bd59b8 ["CALL", null, ["callee:00497b94:8"]]
- 00bd490c ["INT_ADD", "register:40f0:8", ["const:bd490c:8", "const:4:8"]]
- 00bd490c ["CALL", null, ["callee:00c5c120:8"]]
+ 00bd5900 ["INT_ADD", "register:40f0:8", ["const:bd5900:8", "const:4:8"]]
+ 00bd5900 ["CALL", null, ["callee:00c5c120:8"]]
~~~


<a id="compare-a64b563b69a7813ebd937ae77bb2f346"></a>

### [`00bd4a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4a90.md) → [`00bd5a84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd5a84.md) _ZN8firebase4auth22ReadAdditionalUserInfoEP7_JNIEnvP8_jobjectPNS0_18AdditionalUserInfoE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5de60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de60.md) · 呼出先 9件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aac0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 1件 [`00c5ee30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee30.md) · 呼出先 9件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5ba90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5ba90.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.41% / 新版 98.41%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd5abc",
      "incomplete_value": true,
      "site": "00bd5ac8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:948:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4ac8",
      "incomplete_value": true,
      "site": "00bd4ad4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:988:8"
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
      "00bd5abc",
      "READ",
      [
        "storage",
        "01126988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5ad8",
      "READ",
      [
        "storage",
        "01126990",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5af4",
      "READ",
      [
        "storage",
        "01126998",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5abc",
      "READ",
      [
        "storage",
        "01127948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5ad8",
      "READ",
      [
        "storage",
        "01127950",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5af4",
      "READ",
      [
        "storage",
        "01127958",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4ad4 ["INT_ADD", "register:40f0:8", ["const:bd4ad4:8", "const:4:8"]]
- 00bd4ad4 ["CALL", null, ["callee:00497b94:8"]]
+ 00bd5ac8 ["INT_ADD", "register:40f0:8", ["const:bd5ac8:8", "const:4:8"]]
+ 00bd5ac8 ["CALL", null, ["callee:00497b94:8"]]
- 00bd4ac0 ["COPY", "register:40c8:8", ["const:1126000:8"]]
+ 00bd5ab4 ["COPY", "register:40c8:8", ["const:1127000:8"]]
- 00bd4ac4 ["COPY", "tmp:0:8", ["const:988:8"]]
- 00bd4ac4 ["INT_CARRY", "register:105:1", ["register:40c8:8", "tmp:0:8"]]
- 00bd4ac4 ["INT_SCARRY", "register:106:1", ["register:40c8:8", "tmp:0:8"]]
- 00bd4ac4 ["INT_ADD", "tmp:1:8", ["register:40c8:8", "tmp:0:8"]]
+ 00bd5ab8 ["COPY", "tmp:0:8", ["const:948:8"]]
+ 00bd5ab8 ["INT_CARRY", "register:105:1", ["register:40c8:8", "tmp:0:8"]]
+ 00bd5ab8 ["INT_SCARRY", "register:106:1", ["register:40c8:8", "tmp:0:8"]]
+ 00bd5ab8 ["INT_ADD", "tmp:1:8", ["register:40c8:8", "tmp:0:8"]]
~~~


<a id="compare-38ad53d8ad62c5d6de65d474c5756432"></a>

### [`00bd4f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4f1c.md) → [`00bd5f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd5f10.md) _ZN8firebase4auth10credential19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

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
      "definition_site": "00bd5f3c",
      "incomplete_value": true,
      "site": "00bd5f3c",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4f48",
      "incomplete_value": true,
      "site": "00bd4f48",
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
            "const:b48:8"
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
      "definition_site": "00bd5f24",
      "incomplete_value": true,
      "site": "00bd5f24",
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
      "definition_site": "00bd4f30",
      "incomplete_value": true,
      "site": "00bd4f30",
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
      "definition_site": "00bd5f30",
      "incomplete_value": false,
      "site": "00bd5f34",
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
            "const:da6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4f3c",
      "incomplete_value": false,
      "site": "00bd4f40",
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
            "const:cc8:8"
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
      "00bd5f20",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5f30",
      "PARAM",
      [
        "storage",
        "002b9cc8",
        null,
        "string"
      ]
    ],
    [
      "00bd5f3c",
      "WRITE",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5f20",
      "READ",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5f30",
      "PARAM",
      [
        "storage",
        "002b9da6",
        null,
        "string"
      ]
    ],
    [
      "00bd5f3c",
      "WRITE",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4f40 ["INT_ADD", "register:40f0:8", ["const:bd4f40:8", "const:4:8"]]
- 00bd4f40 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd5f34 ["INT_ADD", "register:40f0:8", ["const:bd5f34:8", "const:4:8"]]
+ 00bd5f34 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd4f48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
- 00bd4f48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd5f3c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
+ 00bd5f3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd4f28 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd5f1c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-ab2aaf6026506979b1336186ef37ea09"></a>

### [`00bd4f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4f5c.md) → [`00bd5f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd5f50.md) _ZN8firebase4auth10credential19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd5f7c",
      "incomplete_value": true,
      "site": "00bd5f7c",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4f88",
      "incomplete_value": true,
      "site": "00bd4f88",
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
            "const:b48:8"
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
      "definition_site": "00bd5f64",
      "incomplete_value": true,
      "site": "00bd5f64",
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
      "definition_site": "00bd4f70",
      "incomplete_value": true,
      "site": "00bd4f70",
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
      "definition_site": "00bd5f6c",
      "incomplete_value": false,
      "site": "00bd5f74",
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
            "const:da6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4f78",
      "incomplete_value": false,
      "site": "00bd4f80",
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
            "const:cc8:8"
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
      "00bd5f60",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5f6c",
      "PARAM",
      [
        "storage",
        "002b9cc8",
        null,
        "string"
      ]
    ],
    [
      "00bd5f7c",
      "WRITE",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5f60",
      "READ",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5f6c",
      "PARAM",
      [
        "storage",
        "002b9da6",
        null,
        "string"
      ]
    ],
    [
      "00bd5f7c",
      "WRITE",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4f80 ["INT_ADD", "register:40f0:8", ["const:bd4f80:8", "const:4:8"]]
- 00bd4f80 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd5f74 ["INT_ADD", "register:40f0:8", ["const:bd5f74:8", "const:4:8"]]
+ 00bd5f74 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd4f88 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
- 00bd4f88 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd5f7c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
+ 00bd5f7c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd4f68 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd5f5c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-7d708bbe53aa61c7ac9620c9fbf4d147"></a>

### [`00bd4f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4f9c.md) → [`00bd5f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd5f90.md) _ZN8firebase4auth10credential10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd5fc0",
      "incomplete_value": true,
      "site": "00bd5fc0",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4fcc",
      "incomplete_value": true,
      "site": "00bd4fcc",
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
            "const:b48:8"
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
      "definition_site": "00bd5fa4",
      "incomplete_value": true,
      "site": "00bd5fa4",
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
      "definition_site": "00bd4fb0",
      "incomplete_value": true,
      "site": "00bd4fb0",
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
      "definition_site": "00bd5fb0",
      "incomplete_value": false,
      "site": "00bd5fb8",
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
            "const:da6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4fbc",
      "incomplete_value": false,
      "site": "00bd4fc4",
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
            "const:cc8:8"
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
      "00bd5fa0",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5fb0",
      "PARAM",
      [
        "storage",
        "002b9cc8",
        null,
        "string"
      ]
    ],
    [
      "00bd5fc0",
      "WRITE",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5fa0",
      "READ",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5fb0",
      "PARAM",
      [
        "storage",
        "002b9da6",
        null,
        "string"
      ]
    ],
    [
      "00bd5fc0",
      "WRITE",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd4fc4 ["INT_ADD", "register:40f0:8", ["const:bd4fc4:8", "const:4:8"]]
- 00bd4fc4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd5fb8 ["INT_ADD", "register:40f0:8", ["const:bd5fb8:8", "const:4:8"]]
+ 00bd5fb8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd4fcc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
- 00bd4fcc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd5fc0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
+ 00bd5fc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd4fa8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd5f9c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-ffbedfdb1d09c93dfcd206a275984a98"></a>

### [`00bd4fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4fe0.md) → [`00bd5fd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd5/00bd5fd4.md) _ZN8firebase4auth10credential10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6004",
      "incomplete_value": true,
      "site": "00bd6004",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5010",
      "incomplete_value": true,
      "site": "00bd5010",
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
            "const:b48:8"
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
      "definition_site": "00bd5fe8",
      "incomplete_value": true,
      "site": "00bd5fe8",
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
      "definition_site": "00bd4ff4",
      "incomplete_value": true,
      "site": "00bd4ff4",
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
      "definition_site": "00bd5ff0",
      "incomplete_value": false,
      "site": "00bd5ffc",
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
            "const:da6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd4ffc",
      "incomplete_value": false,
      "site": "00bd5008",
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
            "const:cc8:8"
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
      "00bd5fe4",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5ff0",
      "PARAM",
      [
        "storage",
        "002b9cc8",
        null,
        "string"
      ]
    ],
    [
      "00bd6004",
      "WRITE",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd5fe4",
      "READ",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd5ff0",
      "PARAM",
      [
        "storage",
        "002b9da6",
        null,
        "string"
      ]
    ],
    [
      "00bd6004",
      "WRITE",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5008 ["INT_ADD", "register:40f0:8", ["const:bd5008:8", "const:4:8"]]
- 00bd5008 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd5ffc ["INT_ADD", "register:40f0:8", ["const:bd5ffc:8", "const:4:8"]]
+ 00bd5ffc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5010 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
- 00bd5010 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6004 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
+ 00bd6004 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd4fec ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd5fe0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-932f3ae2772fee538cebee6ed40c7ff9"></a>

### [`00bd5030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5030.md) → [`00bd6024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6024.md) _ZN8firebase4auth10credential15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd607c",
      "incomplete_value": true,
      "site": "00bd607c",
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
            "const:b10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5088",
      "incomplete_value": true,
      "site": "00bd5088",
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
            "const:b50:8"
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
      "definition_site": "00bd6058",
      "incomplete_value": true,
      "site": "00bd6064",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b08:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5064",
      "incomplete_value": true,
      "site": "00bd5070",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b48:8"
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
      "00bd6038",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6058",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd607c",
      "WRITE",
      [
        "storage",
        "01126b50",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd6038",
      "READ",
      [
        "storage",
        "01127b10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6058",
      "READ",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd607c",
      "WRITE",
      [
        "storage",
        "01127b10",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5070 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd5070 ["INT_ADD", "register:40f0:8", ["const:bd5070:8", "const:4:8"]]
- 00bd5070 ["CALLIND", null, ["register:0:8"]]
+ 00bd6064 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd6064 ["INT_ADD", "register:40f0:8", ["const:bd6064:8", "const:4:8"]]
+ 00bd6064 ["CALLIND", null, ["register:0:8"]]
- 00bd5088 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd5088 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b50:8"]]
- 00bd5088 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd607c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd607c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b10:8"]]
+ 00bd607c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd5040 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd6034 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-8b1dbba8b5204d40a6374b81e5e5770f"></a>

### [`00bd509c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd509c.md) → [`00bd6090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6090.md) _ZN8firebase4auth10credential12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd60cc",
      "incomplete_value": true,
      "site": "00bd60cc",
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
            "const:b10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd50d8",
      "incomplete_value": true,
      "site": "00bd50d8",
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
            "const:b50:8"
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
      "definition_site": "00bd60ec",
      "incomplete_value": true,
      "site": "00bd60ec",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd50f8",
      "incomplete_value": true,
      "site": "00bd50f8",
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
            "const:b48:8"
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
      "definition_site": "00bd60a8",
      "incomplete_value": true,
      "site": "00bd60a8",
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
      "definition_site": "00bd50b4",
      "incomplete_value": true,
      "site": "00bd50b4",
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
      "00bd60a4",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd60b0",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd60cc",
      "WRITE",
      [
        "storage",
        "01126b50",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd60a4",
      "READ",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd60b0",
      "READ",
      [
        "storage",
        "01127b10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd60cc",
      "WRITE",
      [
        "storage",
        "01127b10",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd50d8 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd50d8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd50d8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b50:8"]]
- 00bd50d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd60cc ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd60cc ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd60cc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b10:8"]]
+ 00bd60cc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd50f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd50f4 ["INT_ADD", "register:40f0:8", ["const:bd50f4:8", "const:4:8"]]
- 00bd50f4 ["CALLIND", null, ["register:0:8"]]
+ 00bd60e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd60e8 ["INT_ADD", "register:40f0:8", ["const:bd60e8:8", "const:4:8"]]
+ 00bd60e8 ["CALLIND", null, ["register:0:8"]]
- 00bd50f8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b48:8"]]
- 00bd50f8 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd50f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd60ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
+ 00bd60ec ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd60ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-6d564323c8cff4705e0458da016d37f5"></a>

### [`00bd510c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd510c.md) → [`00bd6100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6100.md) _ZN8firebase4auth10credential14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6140",
      "incomplete_value": true,
      "site": "00bd6140",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd514c",
      "incomplete_value": true,
      "site": "00bd514c",
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
            "const:b48:8"
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
      "definition_site": "00bd611c",
      "incomplete_value": true,
      "site": "00bd611c",
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
      "definition_site": "00bd5128",
      "incomplete_value": true,
      "site": "00bd5128",
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
        "00bd5128"
      ],
      [
        "FALL_THROUGH",
        "00bd611c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd611c",
      "incomplete_value": true,
      "site": "00bd6140",
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
      "definition_site": "00bd5128",
      "incomplete_value": true,
      "site": "00bd514c",
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
      "00bd6114",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6124",
      "PARAM",
      [
        "storage",
        "002b9cc8",
        null,
        "string"
      ]
    ],
    [
      "00bd6140",
      "WRITE",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6114",
      "READ",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6124",
      "PARAM",
      [
        "storage",
        "002b9da6",
        null,
        "string"
      ]
    ],
    [
      "00bd6140",
      "WRITE",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd514c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b48:8"]]
- 00bd514c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6140 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
+ 00bd6140 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5118 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd610c ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bd5120 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b48:8"]]
- 00bd5120 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6114 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
+ 00bd6114 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ed6f0716e78cdaf028228fabd787bb17"></a>

### [`00bd517c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd517c.md) → [`00bd6170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6170.md) _ZN8firebase4auth10credential11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd618c",
      "incomplete_value": false,
      "site": "00bd6190",
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
      "definition_site": "00bd5198",
      "incomplete_value": false,
      "site": "00bd519c",
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
      "definition_site": "00bd619c",
      "incomplete_value": true,
      "site": "00bd61a8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd51a8",
      "incomplete_value": true,
      "site": "00bd51b4",
      "value": [
        "LOAD",
        "8",
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
      "00bd618c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd619c",
      "DATA",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd618c",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd619c",
      "DATA",
      [
        "storage",
        "01127b18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd519c ["INT_ADD", "register:40f0:8", ["const:bd519c:8", "const:4:8"]]
- 00bd519c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd6190 ["INT_ADD", "register:40f0:8", ["const:bd6190:8", "const:4:8"]]
+ 00bd6190 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd5198 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd5198 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5198 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5198 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd618c ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd618c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd618c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd618c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd51a0 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd6194 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-2f471aa84d0b2af273bef46f8b312fe9"></a>

### [`00bd51b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd51b8.md) → [`00bd61ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd61ac.md) _ZN8firebase4auth10credential13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd61ec",
      "incomplete_value": true,
      "site": "00bd61ec",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd51f8",
      "incomplete_value": true,
      "site": "00bd51f8",
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
            "const:b48:8"
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
      "definition_site": "00bd61c8",
      "incomplete_value": true,
      "site": "00bd61c8",
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
      "definition_site": "00bd51d4",
      "incomplete_value": true,
      "site": "00bd51d4",
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
      "definition_site": "00bd61d0",
      "incomplete_value": false,
      "site": "00bd61e4",
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
            "const:da6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd51dc",
      "incomplete_value": false,
      "site": "00bd51f0",
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
            "const:cc8:8"
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
      "00bd61c0",
      "READ",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd61d0",
      "PARAM",
      [
        "storage",
        "002b9cc8",
        null,
        "string"
      ]
    ],
    [
      "00bd61ec",
      "WRITE",
      [
        "storage",
        "01126b48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd61c0",
      "READ",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd61d0",
      "PARAM",
      [
        "storage",
        "002b9da6",
        null,
        "string"
      ]
    ],
    [
      "00bd61ec",
      "WRITE",
      [
        "storage",
        "01127b08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd51f0 ["INT_ADD", "register:40f0:8", ["const:bd51f0:8", "const:4:8"]]
- 00bd51f0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd61e4 ["INT_ADD", "register:40f0:8", ["const:bd61e4:8", "const:4:8"]]
+ 00bd61e4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd51f8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b48:8"]]
- 00bd51f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd61ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
+ 00bd61ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd51c4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd61b8 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-fba746e000b9d62c3c5554f3442ce411"></a>

### [`00bd5228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5228.md) → [`00bd621c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd621c.md) _ZN8firebase4auth10credential10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd6238",
      "incomplete_value": false,
      "site": "00bd623c",
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
      "definition_site": "00bd5244",
      "incomplete_value": false,
      "site": "00bd5248",
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
      "definition_site": "00bd6248",
      "incomplete_value": true,
      "site": "00bd6254",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd5254",
      "incomplete_value": true,
      "site": "00bd5260",
      "value": [
        "LOAD",
        "8",
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
      "00bd6238",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd6248",
      "DATA",
      [
        "storage",
        "01126b60",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd6238",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd6248",
      "DATA",
      [
        "storage",
        "01127b20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5248 ["INT_ADD", "register:40f0:8", ["const:bd5248:8", "const:4:8"]]
- 00bd5248 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd623c ["INT_ADD", "register:40f0:8", ["const:bd623c:8", "const:4:8"]]
+ 00bd623c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd5244 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd5244 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5244 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd5244 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd6238 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd6238 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6238 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6238 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd524c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd6240 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-768461720e9d2e98e3f075431f8f5a50"></a>

### [`00bd5264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5264.md) → [`00bd6258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6258.md) _ZN8firebase4auth9emailcred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_

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
      "definition_site": "00bd6284",
      "incomplete_value": true,
      "site": "00bd6284",
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
            "const:b28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5290",
      "incomplete_value": true,
      "site": "00bd5290",
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
            "const:b68:8"
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
      "definition_site": "00bd626c",
      "incomplete_value": true,
      "site": "00bd626c",
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
      "definition_site": "00bd5278",
      "incomplete_value": true,
      "site": "00bd5278",
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
      "definition_site": "00bd6278",
      "incomplete_value": true,
      "site": "00bd627c",
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
            "const:464:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5284",
      "incomplete_value": true,
      "site": "00bd5288",
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
            "const:397:8"
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
      "00bd6268",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6278",
      "PARAM",
      [
        "storage",
        "002ac397",
        null,
        "string"
      ]
    ],
    [
      "00bd6284",
      "WRITE",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6268",
      "READ",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6278",
      "PARAM",
      [
        "storage",
        "002ac464",
        null,
        "string"
      ]
    ],
    [
      "00bd6284",
      "WRITE",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5288 ["INT_ADD", "register:40f0:8", ["const:bd5288:8", "const:4:8"]]
- 00bd5288 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd627c ["INT_ADD", "register:40f0:8", ["const:bd627c:8", "const:4:8"]]
+ 00bd627c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5290 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
- 00bd5290 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6284 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd6284 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5270 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd6264 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-0da9b2fad6f7eab190c0e6bbe6f4bb7a"></a>

### [`00bd52a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd52a4.md) → [`00bd6298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6298.md) _ZN8firebase4auth9emailcred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd62c4",
      "incomplete_value": true,
      "site": "00bd62c4",
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
            "const:b28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd52d0",
      "incomplete_value": true,
      "site": "00bd52d0",
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
            "const:b68:8"
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
      "definition_site": "00bd62ac",
      "incomplete_value": true,
      "site": "00bd62ac",
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
      "definition_site": "00bd52b8",
      "incomplete_value": true,
      "site": "00bd52b8",
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
        "00bd52b8"
      ],
      [
        "FALL_THROUGH",
        "00bd62ac"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd62ac",
      "incomplete_value": true,
      "site": "00bd62c4",
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
      "definition_site": "00bd52b8",
      "incomplete_value": true,
      "site": "00bd52d0",
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
      "00bd62a8",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd62b4",
      "PARAM",
      [
        "storage",
        "002ac397",
        null,
        "string"
      ]
    ],
    [
      "00bd62c4",
      "WRITE",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd62a8",
      "READ",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd62b4",
      "PARAM",
      [
        "storage",
        "002ac464",
        null,
        "string"
      ]
    ],
    [
      "00bd62c4",
      "WRITE",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd52d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
- 00bd52d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd62c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd62c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd52b0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd62a4 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd52b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
- 00bd52b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd62a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd62a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7adc2ad5987ded84027ce9df9cab98a6"></a>

### [`00bd52e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd52e4.md) → [`00bd62d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd62d8.md) _ZN8firebase4auth9emailcred10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd6308",
      "incomplete_value": true,
      "site": "00bd6308",
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
            "const:b28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5314",
      "incomplete_value": true,
      "site": "00bd5314",
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
            "const:b68:8"
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
      "definition_site": "00bd62f8",
      "incomplete_value": false,
      "site": "00bd6300",
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
            "const:464:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5304",
      "incomplete_value": false,
      "site": "00bd530c",
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
            "const:397:8"
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
      "00bd62e8",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd62f8",
      "PARAM",
      [
        "storage",
        "002ac397",
        null,
        "string"
      ]
    ],
    [
      "00bd6308",
      "WRITE",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd62e8",
      "READ",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd62f8",
      "PARAM",
      [
        "storage",
        "002ac464",
        null,
        "string"
      ]
    ],
    [
      "00bd6308",
      "WRITE",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd530c ["INT_ADD", "register:40f0:8", ["const:bd530c:8", "const:4:8"]]
- 00bd530c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6300 ["INT_ADD", "register:40f0:8", ["const:bd6300:8", "const:4:8"]]
+ 00bd6300 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5314 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
- 00bd5314 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6308 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd6308 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd52f0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd62e4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-81d80f1508b25ecce20c105f0c18b8e0"></a>

### [`00bd5328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5328.md) → [`00bd631c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd631c.md) _ZN8firebase4auth9emailcred10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd634c",
      "incomplete_value": true,
      "site": "00bd634c",
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
            "const:b28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5358",
      "incomplete_value": true,
      "site": "00bd5358",
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
            "const:b68:8"
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
      "definition_site": "00bd6338",
      "incomplete_value": false,
      "site": "00bd6344",
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
            "const:464:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5344",
      "incomplete_value": false,
      "site": "00bd5350",
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
            "const:397:8"
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
      "00bd632c",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6338",
      "PARAM",
      [
        "storage",
        "002ac397",
        null,
        "string"
      ]
    ],
    [
      "00bd634c",
      "WRITE",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd632c",
      "READ",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6338",
      "PARAM",
      [
        "storage",
        "002ac464",
        null,
        "string"
      ]
    ],
    [
      "00bd634c",
      "WRITE",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5350 ["INT_ADD", "register:40f0:8", ["const:bd5350:8", "const:4:8"]]
- 00bd5350 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6344 ["INT_ADD", "register:40f0:8", ["const:bd6344:8", "const:4:8"]]
+ 00bd6344 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5358 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
- 00bd5358 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd634c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd634c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5334 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd6328 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-b543153eeaa84adceadc3bc5ff66e7a0"></a>

### [`00bd5378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5378.md) → [`00bd636c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd636c.md) _ZN8firebase4auth9emailcred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd63c4",
      "incomplete_value": true,
      "site": "00bd63c4",
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
            "const:b30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd53d0",
      "incomplete_value": true,
      "site": "00bd53d0",
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
            "const:b70:8"
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
      "00bd6380",
      "READ",
      [
        "storage",
        "01126b70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd63a0",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd63c4",
      "WRITE",
      [
        "storage",
        "01126b70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd6380",
      "READ",
      [
        "storage",
        "01127b30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd63a0",
      "READ",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd63c4",
      "WRITE",
      [
        "storage",
        "01127b30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd53d0 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd53d0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b70:8"]]
- 00bd53d0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd63c4 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd63c4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b30:8"]]
+ 00bd63c4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd5388 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd637c ["COPY", "register:40a8:8", ["const:1127000:8"]]
- 00bd538c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b70:8"]]
- 00bd538c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd538c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd6380 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b30:8"]]
+ 00bd6380 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6380 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-3a75ce8a3bbe1d660d61962562d2dd3e"></a>

### [`00bd53e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd53e4.md) → [`00bd63d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd63d8.md) _ZN8firebase4auth9emailcred12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd6414",
      "incomplete_value": true,
      "site": "00bd6414",
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
            "const:b30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5420",
      "incomplete_value": true,
      "site": "00bd5420",
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
            "const:b70:8"
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
      "definition_site": "00bd6434",
      "incomplete_value": true,
      "site": "00bd6434",
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
            "const:b28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5440",
      "incomplete_value": true,
      "site": "00bd5440",
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
            "const:b68:8"
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
      "definition_site": "00bd63f0",
      "incomplete_value": true,
      "site": "00bd63f0",
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
      "definition_site": "00bd53fc",
      "incomplete_value": true,
      "site": "00bd53fc",
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
      "00bd63ec",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd63f8",
      "READ",
      [
        "storage",
        "01126b70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6414",
      "WRITE",
      [
        "storage",
        "01126b70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd63ec",
      "READ",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd63f8",
      "READ",
      [
        "storage",
        "01127b30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6414",
      "WRITE",
      [
        "storage",
        "01127b30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5420 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd5420 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd5420 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b70:8"]]
- 00bd5420 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd6414 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd6414 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd6414 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b30:8"]]
+ 00bd6414 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd543c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd543c ["INT_ADD", "register:40f0:8", ["const:bd543c:8", "const:4:8"]]
- 00bd543c ["CALLIND", null, ["register:0:8"]]
+ 00bd6430 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd6430 ["INT_ADD", "register:40f0:8", ["const:bd6430:8", "const:4:8"]]
+ 00bd6430 ["CALLIND", null, ["register:0:8"]]
- 00bd5440 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
- 00bd5440 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd5440 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd6434 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b28:8"]]
+ 00bd6434 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd6434 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-9ba28701e710356e879572f525a823a4"></a>

### [`00bd5454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5454.md) → [`00bd6448`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6448.md) _ZN8firebase4auth9emailcred14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6488",
      "incomplete_value": true,
      "site": "00bd6488",
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
            "const:b28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5494",
      "incomplete_value": true,
      "site": "00bd5494",
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
            "const:b68:8"
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
      "definition_site": "00bd6464",
      "incomplete_value": true,
      "site": "00bd6464",
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
      "definition_site": "00bd5470",
      "incomplete_value": true,
      "site": "00bd5470",
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
      "definition_site": "00bd646c",
      "incomplete_value": false,
      "site": "00bd6480",
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
            "const:464:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5478",
      "incomplete_value": false,
      "site": "00bd548c",
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
            "const:397:8"
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
      "00bd645c",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd646c",
      "PARAM",
      [
        "storage",
        "002ac397",
        null,
        "string"
      ]
    ],
    [
      "00bd6488",
      "WRITE",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd645c",
      "READ",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd646c",
      "PARAM",
      [
        "storage",
        "002ac464",
        null,
        "string"
      ]
    ],
    [
      "00bd6488",
      "WRITE",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd548c ["INT_ADD", "register:40f0:8", ["const:bd548c:8", "const:4:8"]]
- 00bd548c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6480 ["INT_ADD", "register:40f0:8", ["const:bd6480:8", "const:4:8"]]
+ 00bd6480 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5494 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
- 00bd5494 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6488 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b28:8"]]
+ 00bd6488 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5460 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd6454 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-ed731ee4f91b71e7dc3e7d4408d519a3"></a>

### [`00bd54c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd54c4.md) → [`00bd64b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd64b8.md) _ZN8firebase4auth9emailcred11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bd64e4",
      "incomplete_value": true,
      "site": "00bd64f0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd54f0",
      "incomplete_value": true,
      "site": "00bd54fc",
      "value": [
        "LOAD",
        "8",
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
      "00bd64d4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd64e4",
      "DATA",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd64d4",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd64e4",
      "DATA",
      [
        "storage",
        "01127b38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd54e0 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd54e0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd54e0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd54e0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd64d4 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd64d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd64d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd64d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd54e4 ["INT_ADD", "register:40f0:8", ["const:bd54e4:8", "const:4:8"]]
- 00bd54e4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd64d8 ["INT_ADD", "register:40f0:8", ["const:bd64d8:8", "const:4:8"]]
+ 00bd64d8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd54e8 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd64dc ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-39f121401a460929562186a30e580e68"></a>

### [`00bd5500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5500.md) → [`00bd64f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd64f4.md) _ZN8firebase4auth9emailcred13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6534",
      "incomplete_value": true,
      "site": "00bd6534",
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
            "const:b28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5540",
      "incomplete_value": true,
      "site": "00bd5540",
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
            "const:b68:8"
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
      "definition_site": "00bd6510",
      "incomplete_value": true,
      "site": "00bd6510",
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
      "definition_site": "00bd551c",
      "incomplete_value": true,
      "site": "00bd551c",
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
      "definition_site": "00bd6518",
      "incomplete_value": false,
      "site": "00bd652c",
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
            "const:464:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5524",
      "incomplete_value": false,
      "site": "00bd5538",
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
            "const:397:8"
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
      "00bd6508",
      "READ",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6518",
      "PARAM",
      [
        "storage",
        "002ac397",
        null,
        "string"
      ]
    ],
    [
      "00bd6534",
      "WRITE",
      [
        "storage",
        "01126b68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6508",
      "READ",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6518",
      "PARAM",
      [
        "storage",
        "002ac464",
        null,
        "string"
      ]
    ],
    [
      "00bd6534",
      "WRITE",
      [
        "storage",
        "01127b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5538 ["INT_ADD", "register:40f0:8", ["const:bd5538:8", "const:4:8"]]
- 00bd5538 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd652c ["INT_ADD", "register:40f0:8", ["const:bd652c:8", "const:4:8"]]
+ 00bd652c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5540 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
- 00bd5540 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6534 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b28:8"]]
+ 00bd6534 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd550c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd6500 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-8077ed4f8a02a554da07ca05d9626506"></a>

### [`00bd5570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5570.md) → [`00bd6564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6564.md) _ZN8firebase4auth9emailcred10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd6580",
      "incomplete_value": false,
      "site": "00bd6584",
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
      "definition_site": "00bd558c",
      "incomplete_value": false,
      "site": "00bd5590",
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
      "definition_site": "00bd6590",
      "incomplete_value": true,
      "site": "00bd659c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd559c",
      "incomplete_value": true,
      "site": "00bd55a8",
      "value": [
        "LOAD",
        "8",
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
      "00bd6580",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd6590",
      "DATA",
      [
        "storage",
        "01126b80",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd6580",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd6590",
      "DATA",
      [
        "storage",
        "01127b40",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5590 ["INT_ADD", "register:40f0:8", ["const:bd5590:8", "const:4:8"]]
- 00bd5590 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd6584 ["INT_ADD", "register:40f0:8", ["const:bd6584:8", "const:4:8"]]
+ 00bd6584 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd558c ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd558c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd558c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd558c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd6580 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd6580 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6580 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6580 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd5594 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd6588 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-f7c742fb753d509aacc8dc2208efa9ad"></a>

### [`00bd55ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd55ac.md) → [`00bd65a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd65a0.md) _ZN8firebase4auth12facebookcred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEE

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
      "definition_site": "00bd65cc",
      "incomplete_value": true,
      "site": "00bd65cc",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd55d8",
      "incomplete_value": true,
      "site": "00bd55d8",
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
            "const:b88:8"
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
      "definition_site": "00bd65b4",
      "incomplete_value": true,
      "site": "00bd65b4",
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
      "definition_site": "00bd55c0",
      "incomplete_value": true,
      "site": "00bd55c0",
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
      "definition_site": "00bd65c0",
      "incomplete_value": false,
      "site": "00bd65c4",
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
            "const:523:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd55cc",
      "incomplete_value": false,
      "site": "00bd55d0",
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
            "const:445:8"
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
      "00bd65b0",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd65c0",
      "PARAM",
      [
        "storage",
        "002bd445",
        null,
        "string"
      ]
    ],
    [
      "00bd65cc",
      "WRITE",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd65b0",
      "READ",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd65c0",
      "PARAM",
      [
        "storage",
        "002bd523",
        null,
        "string"
      ]
    ],
    [
      "00bd65cc",
      "WRITE",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd55d0 ["INT_ADD", "register:40f0:8", ["const:bd55d0:8", "const:4:8"]]
- 00bd55d0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd65c4 ["INT_ADD", "register:40f0:8", ["const:bd65c4:8", "const:4:8"]]
+ 00bd65c4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd55d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b88:8"]]
- 00bd55d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd65cc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd65cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd55b8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd65ac ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-37710800e91c99fad1f35aaecf4b7098"></a>

### [`00bd55ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd55ec.md) → [`00bd65e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd65e0.md) _ZN8firebase4auth12facebookcred19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEE

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
      "definition_site": "00bd660c",
      "incomplete_value": true,
      "site": "00bd660c",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5618",
      "incomplete_value": true,
      "site": "00bd5618",
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
            "const:b88:8"
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
      "definition_site": "00bd65f4",
      "incomplete_value": true,
      "site": "00bd65f4",
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
      "definition_site": "00bd5600",
      "incomplete_value": true,
      "site": "00bd5600",
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
      "definition_site": "00bd65fc",
      "incomplete_value": false,
      "site": "00bd6604",
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
            "const:523:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5608",
      "incomplete_value": false,
      "site": "00bd5610",
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
            "const:445:8"
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
      "00bd65f0",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd65fc",
      "PARAM",
      [
        "storage",
        "002bd445",
        null,
        "string"
      ]
    ],
    [
      "00bd660c",
      "WRITE",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd65f0",
      "READ",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd65fc",
      "PARAM",
      [
        "storage",
        "002bd523",
        null,
        "string"
      ]
    ],
    [
      "00bd660c",
      "WRITE",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5610 ["INT_ADD", "register:40f0:8", ["const:bd5610:8", "const:4:8"]]
- 00bd5610 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6604 ["INT_ADD", "register:40f0:8", ["const:bd6604:8", "const:4:8"]]
+ 00bd6604 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd5618 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b88:8"]]
- 00bd5618 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd660c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd660c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd55f8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd65ec ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-8581d854fa92f6c0c26b106f550e2274"></a>

### [`00bd562c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd562c.md) → [`00bd6620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6620.md) _ZN8firebase4auth12facebookcred10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd6650",
      "incomplete_value": true,
      "site": "00bd6650",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd565c",
      "incomplete_value": true,
      "site": "00bd565c",
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
            "const:b88:8"
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
      "definition_site": "00bd6634",
      "incomplete_value": true,
      "site": "00bd6634",
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
      "definition_site": "00bd5640",
      "incomplete_value": true,
      "site": "00bd5640",
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
      "definition_site": "00bd6640",
      "incomplete_value": true,
      "site": "00bd6648",
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
            "const:523:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd564c",
      "incomplete_value": true,
      "site": "00bd5654",
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
            "const:445:8"
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
      "00bd6630",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6640",
      "PARAM",
      [
        "storage",
        "002bd445",
        null,
        "string"
      ]
    ],
    [
      "00bd6650",
      "WRITE",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6630",
      "READ",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6640",
      "PARAM",
      [
        "storage",
        "002bd523",
        null,
        "string"
      ]
    ],
    [
      "00bd6650",
      "WRITE",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5654 ["INT_ADD", "register:40f0:8", ["const:bd5654:8", "const:4:8"]]
- 00bd5654 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd6648 ["INT_ADD", "register:40f0:8", ["const:bd6648:8", "const:4:8"]]
+ 00bd6648 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd565c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b88:8"]]
- 00bd565c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6650 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd6650 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd5638 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd662c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-7ba0baa1ad2f374e98cb606b42e9f64d"></a>

### [`00bd5670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd5670.md) → [`00bd6664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6664.md) _ZN8firebase4auth12facebookcred10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd6694",
      "incomplete_value": true,
      "site": "00bd6694",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd56a0",
      "incomplete_value": true,
      "site": "00bd56a0",
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
            "const:b88:8"
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
      "definition_site": "00bd6678",
      "incomplete_value": true,
      "site": "00bd6678",
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
      "definition_site": "00bd5684",
      "incomplete_value": true,
      "site": "00bd5684",
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
        "00bd5684"
      ],
      [
        "FALL_THROUGH",
        "00bd6678"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd6678",
      "incomplete_value": true,
      "site": "00bd6694",
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
      "definition_site": "00bd5684",
      "incomplete_value": true,
      "site": "00bd56a0",
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
      "00bd6674",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6680",
      "PARAM",
      [
        "storage",
        "002bd445",
        null,
        "string"
      ]
    ],
    [
      "00bd6694",
      "WRITE",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6674",
      "READ",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6680",
      "PARAM",
      [
        "storage",
        "002bd523",
        null,
        "string"
      ]
    ],
    [
      "00bd6694",
      "WRITE",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd56a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b88:8"]]
- 00bd56a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6694 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd6694 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd567c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd6670 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd5680 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b88:8"]]
- 00bd5680 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6674 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b48:8"]]
+ 00bd6674 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9bee68a8564e056f2a1146f272aaabff"></a>

### [`00bd56c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd56c0.md) → [`00bd66b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd66b4.md) _ZN8firebase4auth12facebookcred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd670c",
      "incomplete_value": true,
      "site": "00bd670c",
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
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5718",
      "incomplete_value": true,
      "site": "00bd5718",
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
            "const:b90:8"
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
      "definition_site": "00bd66e8",
      "incomplete_value": true,
      "site": "00bd66f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd56f4",
      "incomplete_value": true,
      "site": "00bd5700",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b88:8"
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
      "00bd66c8",
      "READ",
      [
        "storage",
        "01126b90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd66e8",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd670c",
      "WRITE",
      [
        "storage",
        "01126b90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd66c8",
      "READ",
      [
        "storage",
        "01127b50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd66e8",
      "READ",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd670c",
      "WRITE",
      [
        "storage",
        "01127b50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5700 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd5700 ["INT_ADD", "register:40f0:8", ["const:bd5700:8", "const:4:8"]]
- 00bd5700 ["CALLIND", null, ["register:0:8"]]
+ 00bd66f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd66f4 ["INT_ADD", "register:40f0:8", ["const:bd66f4:8", "const:4:8"]]
+ 00bd66f4 ["CALLIND", null, ["register:0:8"]]
- 00bd5718 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd5718 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b90:8"]]
- 00bd5718 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd670c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd670c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b50:8"]]
+ 00bd670c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd56d0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd66c4 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-eaeaba56a14223905be4853c7466b01b"></a>

### [`00bd572c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd572c.md) → [`00bd6720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6720.md) _ZN8firebase4auth12facebookcred12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd675c",
      "incomplete_value": true,
      "site": "00bd675c",
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
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5768",
      "incomplete_value": true,
      "site": "00bd5768",
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
            "const:b90:8"
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
      "definition_site": "00bd677c",
      "incomplete_value": true,
      "site": "00bd677c",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd5788",
      "incomplete_value": true,
      "site": "00bd5788",
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
            "const:b88:8"
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
      "definition_site": "00bd6738",
      "incomplete_value": true,
      "site": "00bd6738",
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
      "definition_site": "00bd5744",
      "incomplete_value": true,
      "site": "00bd5744",
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
      "00bd6734",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6740",
      "READ",
      [
        "storage",
        "01126b90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd675c",
      "WRITE",
      [
        "storage",
        "01126b90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd6734",
      "READ",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6740",
      "READ",
      [
        "storage",
        "01127b50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd675c",
      "WRITE",
      [
        "storage",
        "01127b50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd5768 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd5768 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd5768 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b90:8"]]
- 00bd5768 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd675c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd675c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd675c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b50:8"]]
+ 00bd675c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd5784 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd5784 ["INT_ADD", "register:40f0:8", ["const:bd5784:8", "const:4:8"]]
- 00bd5784 ["CALLIND", null, ["register:0:8"]]
+ 00bd6778 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd6778 ["INT_ADD", "register:40f0:8", ["const:bd6778:8", "const:4:8"]]
+ 00bd6778 ["CALLIND", null, ["register:0:8"]]
- 00bd5788 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b88:8"]]
- 00bd5788 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd5788 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd677c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b48:8"]]
+ 00bd677c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd677c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-0d36203d3a588ee654c676b9a34d06d4"></a>

### [`00bd579c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd5/00bd579c.md) → [`00bd6790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd6/00bd6790.md) _ZN8firebase4auth12facebookcred14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd67d0",
      "incomplete_value": true,
      "site": "00bd67d0",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd57dc",
      "incomplete_value": true,
      "site": "00bd57dc",
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
            "const:b88:8"
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
      "00bd67a4",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd67b4",
      "PARAM",
      [
        "storage",
        "002bd445",
        null,
        "string"
      ]
    ],
    [
      "00bd67d0",
      "WRITE",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd67a4",
      "READ",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd67b4",
      "PARAM",
      [
        "storage",
        "002bd523",
        null,
        "string"
      ]
    ],
    [
      "00bd67d0",
      "WRITE",
      [
        "storage",
        "01127b48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd57dc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b88:8"]]
- 00bd57dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd67d0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b48:8"]]
+ 00bd67d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd57a8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd679c ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bd57b0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b88:8"]]
- 00bd57b0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd67a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b48:8"]]
+ 00bd67a4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


