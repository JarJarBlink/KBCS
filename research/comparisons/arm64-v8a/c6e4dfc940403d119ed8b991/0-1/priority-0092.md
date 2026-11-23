# v16.0.1 → v16.0.2 · 最優先の変更候補 (92)

[一覧の目次](README.md)

<a id="compare-acf7765397b6d55839f0ca4a9ec7fc8b"></a>

### [`00bd17b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd17b4.md) → [`00bd1850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1850.md) _ZN8firebase4auth23weak_password_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd17e4",
      "incomplete_value": true,
      "site": "00bd17e4",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd17c8",
      "incomplete_value": true,
      "site": "00bd17c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd17d4",
      "incomplete_value": false,
      "site": "00bd17dc",
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
            "const:56a:8"
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
      "00bd1860",
      "READ",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1870",
      "PARAM",
      [
        "storage",
        "002af56a",
        null,
        "string"
      ]
    ],
    [
      "00bd1880",
      "WRITE",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1860",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1870",
      "PARAM",
      [
        "storage",
        "002af50e",
        null,
        "string"
      ]
    ],
    [
      "00bd1880",
      "WRITE",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd17dc ["INT_ADD", "register:40f0:8", ["const:bd17dc:8", "const:4:8"]]
- 00bd17dc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1878 ["INT_ADD", "register:40f0:8", ["const:bd1878:8", "const:4:8"]]
+ 00bd1878 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd17e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:908:8"]]
- 00bd17e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1880 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd1880 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd17c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:908:8"]]
- 00bd17c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1860 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd1860 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b8290cbcfda79129f99767ed77810eda"></a>

### [`00bd17f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd17f8.md) → [`00bd1894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1894.md) _ZN8firebase4auth23weak_password_exception10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd1828",
      "incomplete_value": true,
      "site": "00bd1828",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd180c",
      "incomplete_value": true,
      "site": "00bd180c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd1814",
      "incomplete_value": false,
      "site": "00bd1820",
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
            "const:56a:8"
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
      "00bd18a4",
      "READ",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd18b0",
      "PARAM",
      [
        "storage",
        "002af56a",
        null,
        "string"
      ]
    ],
    [
      "00bd18c4",
      "WRITE",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd18a4",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd18b0",
      "PARAM",
      [
        "storage",
        "002af50e",
        null,
        "string"
      ]
    ],
    [
      "00bd18c4",
      "WRITE",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1820 ["INT_ADD", "register:40f0:8", ["const:bd1820:8", "const:4:8"]]
- 00bd1820 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd18bc ["INT_ADD", "register:40f0:8", ["const:bd18bc:8", "const:4:8"]]
+ 00bd18bc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1828 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:908:8"]]
- 00bd1828 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd18c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd18c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1808 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:908:8"]]
- 00bd1808 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd18a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
+ 00bd18a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-220ce2dc87f7a553f99c40548451363f"></a>

### [`00bd1848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1848.md) → [`00bd18e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd18e4.md) _ZN8firebase4auth23weak_password_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd18a0",
      "incomplete_value": true,
      "site": "00bd18a0",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd187c",
      "incomplete_value": true,
      "site": "00bd1888",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd18f8",
      "READ",
      [
        "storage",
        "01126910",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1918",
      "READ",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd193c",
      "WRITE",
      [
        "storage",
        "01126910",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd18f8",
      "READ",
      [
        "storage",
        "01126a10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1918",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd193c",
      "WRITE",
      [
        "storage",
        "01126a10",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1888 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd1888 ["INT_ADD", "register:40f0:8", ["const:bd1888:8", "const:4:8"]]
- 00bd1888 ["CALLIND", null, ["register:0:8"]]
+ 00bd1924 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd1924 ["INT_ADD", "register:40f0:8", ["const:bd1924:8", "const:4:8"]]
+ 00bd1924 ["CALLIND", null, ["register:0:8"]]
- 00bd18a0 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd18a0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:910:8"]]
- 00bd18a0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd193c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd193c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a10:8"]]
+ 00bd193c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd185c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:910:8"]]
- 00bd185c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd185c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd18f8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a10:8"]]
+ 00bd18f8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd18f8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-f791fa8c22d57c182be4216eabf51971"></a>

### [`00bd18b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd18b4.md) → [`00bd1950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1950.md) _ZN8firebase4auth23weak_password_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 64.29% / 新版 64.29%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd18cc",
      "incomplete_value": true,
      "site": "00bd18cc",
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
      "00bd1964",
      "READ",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd18d4",
      "READ",
      [
        "storage",
        "01126910",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1978",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd18f4"
      ]
    ]
  ],
  "added": [
    [
      "00bd1964",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1970",
      "READ",
      [
        "storage",
        "01126a10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1978",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd1990"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd18c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:908:8"]]
- 00bd18c8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1964 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
+ 00bd1964 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd18d4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:910:8"]]
- 00bd18d4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd18d4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bd18dc ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00bd18dc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd1978 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00bd1978 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-913d05f5ec9d9548be858eba20df0cd9"></a>

### [`00bd1924`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1924.md) → [`00bd19c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd19c0.md) _ZN8firebase4auth23weak_password_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd1964",
      "incomplete_value": true,
      "site": "00bd1964",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd1940",
      "incomplete_value": true,
      "site": "00bd1940",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd1948",
      "incomplete_value": false,
      "site": "00bd195c",
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
            "const:56a:8"
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
      "00bd19d4",
      "READ",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd19e4",
      "PARAM",
      [
        "storage",
        "002af56a",
        null,
        "string"
      ]
    ],
    [
      "00bd1a00",
      "WRITE",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd19d4",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd19e4",
      "PARAM",
      [
        "storage",
        "002af50e",
        null,
        "string"
      ]
    ],
    [
      "00bd1a00",
      "WRITE",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd195c ["INT_ADD", "register:40f0:8", ["const:bd195c:8", "const:4:8"]]
- 00bd195c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd19f8 ["INT_ADD", "register:40f0:8", ["const:bd19f8:8", "const:4:8"]]
+ 00bd19f8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1964 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:908:8"]]
- 00bd1964 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1a00 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
+ 00bd1a00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1938 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:908:8"]]
- 00bd1938 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd19d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
+ 00bd19d4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2e45895dc9161673d31865b0f8955ecd"></a>

### [`00bd1994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1994.md) → [`00bd1a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1a30.md) _ZN8firebase4auth23weak_password_exception11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd19b0",
      "incomplete_value": false,
      "site": "00bd19b4",
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
            "const:367:8"
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
    "old": {
      "definition_site": "00bd19c0",
      "incomplete_value": true,
      "site": "00bd19cc",
      "value": [
        "LOAD",
        "8",
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
      "00bd1a4c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd1a5c",
      "DATA",
      [
        "storage",
        "01126918",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd1a4c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd1a5c",
      "DATA",
      [
        "storage",
        "01126a18",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd19b4 ["INT_ADD", "register:40f0:8", ["const:bd19b4:8", "const:4:8"]]
- 00bd19b4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd1a50 ["INT_ADD", "register:40f0:8", ["const:bd1a50:8", "const:4:8"]]
+ 00bd1a50 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd19b0 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd19b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd19b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd19b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd1a4c ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd1a4c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1a4c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1a4c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd19bc ["COPY", "tmp:0:8", ["const:918:8"]]
- 00bd19bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd19bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd19bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd1a58 ["COPY", "tmp:0:8", ["const:a18:8"]]
+ 00bd1a58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd1a58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd1a58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-30ac65110e0eac8e0250194d11a7d489"></a>

### [`00bd19d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd19d0.md) → [`00bd1a6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1a6c.md) _ZN8firebase4auth23weak_password_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd1a10",
      "incomplete_value": true,
      "site": "00bd1a10",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd19ec",
      "incomplete_value": true,
      "site": "00bd19ec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd19f4",
      "incomplete_value": false,
      "site": "00bd1a08",
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
            "const:56a:8"
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
      "00bd1a80",
      "READ",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1a90",
      "PARAM",
      [
        "storage",
        "002af56a",
        null,
        "string"
      ]
    ],
    [
      "00bd1aac",
      "WRITE",
      [
        "storage",
        "01126908",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1a80",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1a90",
      "PARAM",
      [
        "storage",
        "002af50e",
        null,
        "string"
      ]
    ],
    [
      "00bd1aac",
      "WRITE",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1a08 ["INT_ADD", "register:40f0:8", ["const:bd1a08:8", "const:4:8"]]
- 00bd1a08 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1aa4 ["INT_ADD", "register:40f0:8", ["const:bd1aa4:8", "const:4:8"]]
+ 00bd1aa4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1a10 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:908:8"]]
- 00bd1a10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1aac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
+ 00bd1aac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd19e4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:908:8"]]
- 00bd19e4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1a80 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
+ 00bd1a80 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-691a061dc4af4065628daf316130f504"></a>

### [`00bd1a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1a40.md) → [`00bd1adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1adc.md) _ZN8firebase4auth23weak_password_exception10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd1a5c",
      "incomplete_value": false,
      "site": "00bd1a60",
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
            "const:51e:8"
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
    "old": {
      "definition_site": "00bd1a6c",
      "incomplete_value": true,
      "site": "00bd1a78",
      "value": [
        "LOAD",
        "8",
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
      "00bd1af8",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd1b08",
      "DATA",
      [
        "storage",
        "01126920",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd1af8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd1b08",
      "DATA",
      [
        "storage",
        "01126a20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1a60 ["INT_ADD", "register:40f0:8", ["const:bd1a60:8", "const:4:8"]]
- 00bd1a60 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd1afc ["INT_ADD", "register:40f0:8", ["const:bd1afc:8", "const:4:8"]]
+ 00bd1afc ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd1a5c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd1a5c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1a5c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1a5c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd1af8 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd1af8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1af8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1af8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd1a68 ["COPY", "tmp:0:8", ["const:920:8"]]
- 00bd1a68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd1a68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd1a68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd1b04 ["COPY", "tmp:0:8", ["const:a20:8"]]
+ 00bd1b04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd1b04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd1b04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-afd781c676680c924c4807bd108ee4a8"></a>

### [`00bd1a7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1a7c.md) → [`00bd1b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1b18.md) _ZN8firebase4auth29invalid_credentials_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd1aa8",
      "incomplete_value": true,
      "site": "00bd1aa8",
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
            "const:928:8"
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
    "old": {
      "definition_site": "00bd1a90",
      "incomplete_value": true,
      "site": "00bd1a90",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd1a9c",
      "incomplete_value": false,
      "site": "00bd1aa0",
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
            "const:c8e:8"
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
      "00bd1b28",
      "READ",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1b38",
      "PARAM",
      [
        "storage",
        "002b9c8e",
        null,
        "string"
      ]
    ],
    [
      "00bd1b44",
      "WRITE",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1b28",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1b38",
      "PARAM",
      [
        "storage",
        "002b9c3a",
        null,
        "string"
      ]
    ],
    [
      "00bd1b44",
      "WRITE",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1aa0 ["INT_ADD", "register:40f0:8", ["const:bd1aa0:8", "const:4:8"]]
- 00bd1aa0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1b3c ["INT_ADD", "register:40f0:8", ["const:bd1b3c:8", "const:4:8"]]
+ 00bd1b3c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1aa8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:928:8"]]
- 00bd1aa8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1b44 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
+ 00bd1b44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1a8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:928:8"]]
- 00bd1a8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1b28 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
+ 00bd1b28 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5af6b83305f487697b052833939110f6"></a>

### [`00bd1abc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1abc.md) → [`00bd1b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1b58.md) _ZN8firebase4auth29invalid_credentials_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd1ae8",
      "incomplete_value": true,
      "site": "00bd1ae8",
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
            "const:928:8"
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
    "old": {
      "definition_site": "00bd1ad0",
      "incomplete_value": true,
      "site": "00bd1ad0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd1ad8",
      "incomplete_value": false,
      "site": "00bd1ae0",
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
            "const:c8e:8"
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
      "00bd1b68",
      "READ",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1b74",
      "PARAM",
      [
        "storage",
        "002b9c8e",
        null,
        "string"
      ]
    ],
    [
      "00bd1b84",
      "WRITE",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1b68",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1b74",
      "PARAM",
      [
        "storage",
        "002b9c3a",
        null,
        "string"
      ]
    ],
    [
      "00bd1b84",
      "WRITE",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1ae0 ["INT_ADD", "register:40f0:8", ["const:bd1ae0:8", "const:4:8"]]
- 00bd1ae0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1b7c ["INT_ADD", "register:40f0:8", ["const:bd1b7c:8", "const:4:8"]]
+ 00bd1b7c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1ae8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:928:8"]]
- 00bd1ae8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1b84 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
+ 00bd1b84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1acc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:928:8"]]
- 00bd1acc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1b68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
+ 00bd1b68 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-308ada06742144ebe70433c9fcd73ff0"></a>

### [`00bd1afc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1afc.md) → [`00bd1b98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1b98.md) _ZN8firebase4auth29invalid_credentials_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd1b2c",
      "incomplete_value": true,
      "site": "00bd1b2c",
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
            "const:928:8"
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
    "old": {
      "definition_site": "00bd1b10",
      "incomplete_value": true,
      "site": "00bd1b10",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd1b1c",
      "incomplete_value": false,
      "site": "00bd1b24",
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
            "const:c8e:8"
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
      "00bd1ba8",
      "READ",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1bb8",
      "PARAM",
      [
        "storage",
        "002b9c8e",
        null,
        "string"
      ]
    ],
    [
      "00bd1bc8",
      "WRITE",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1ba8",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1bb8",
      "PARAM",
      [
        "storage",
        "002b9c3a",
        null,
        "string"
      ]
    ],
    [
      "00bd1bc8",
      "WRITE",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1b24 ["INT_ADD", "register:40f0:8", ["const:bd1b24:8", "const:4:8"]]
- 00bd1b24 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1bc0 ["INT_ADD", "register:40f0:8", ["const:bd1bc0:8", "const:4:8"]]
+ 00bd1bc0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1b2c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:928:8"]]
- 00bd1b2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1bc8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
+ 00bd1bc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1b0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:928:8"]]
- 00bd1b0c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1ba8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
+ 00bd1ba8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4756c31eba169aa68083a8c0c064cd62"></a>

### [`00bd1b40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1b40.md) → [`00bd1bdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1bdc.md) _ZN8firebase4auth29invalid_credentials_exception10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 70.59% / 新版 70.59%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd1b54",
      "incomplete_value": true,
      "site": "00bd1b54",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd1b5c",
      "incomplete_value": false,
      "site": "00bd1b68",
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
            "const:c8e:8"
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
      "unmatched:00bd1b40",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd1b44",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd1bec",
      "READ",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1bdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd1be0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd1bec",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1b68 ["INT_ADD", "register:40f0:8", ["const:bd1b68:8", "const:4:8"]]
- 00bd1b68 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1c04 ["INT_ADD", "register:40f0:8", ["const:bd1c04:8", "const:4:8"]]
+ 00bd1c04 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1b40 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd1b40 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd1b40 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd1b44 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd1b44 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd1b44 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd1b44 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8c0cf7993c4635e8f1bc4ab05507d6ca"></a>

### [`00bd1b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1b90.md) → [`00bd1c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1c2c.md) _ZN8firebase4auth29invalid_credentials_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd1be8",
      "incomplete_value": true,
      "site": "00bd1be8",
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
            "const:930:8"
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
    "old": {
      "definition_site": "00bd1bc4",
      "incomplete_value": true,
      "site": "00bd1bd0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:928:8"
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
      "00bd1c40",
      "READ",
      [
        "storage",
        "01126930",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1c60",
      "READ",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1c84",
      "WRITE",
      [
        "storage",
        "01126930",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd1c40",
      "READ",
      [
        "storage",
        "01126a30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1c60",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1c84",
      "WRITE",
      [
        "storage",
        "01126a30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1bd0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd1bd0 ["INT_ADD", "register:40f0:8", ["const:bd1bd0:8", "const:4:8"]]
- 00bd1bd0 ["CALLIND", null, ["register:0:8"]]
+ 00bd1c6c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd1c6c ["INT_ADD", "register:40f0:8", ["const:bd1c6c:8", "const:4:8"]]
+ 00bd1c6c ["CALLIND", null, ["register:0:8"]]
- 00bd1be8 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd1be8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:930:8"]]
- 00bd1be8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd1c84 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd1c84 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a30:8"]]
+ 00bd1c84 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd1ba4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:930:8"]]
- 00bd1ba4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd1ba4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd1c40 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a30:8"]]
+ 00bd1c40 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1c40 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-596f8517addb000242afa5c77ac9ce47"></a>

### [`00bd1bfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1bfc.md) → [`00bd1c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1c98.md) _ZN8firebase4auth29invalid_credentials_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

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
    "old": {
      "definition_site": "00bd1c38",
      "incomplete_value": true,
      "site": "00bd1c38",
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
            "const:930:8"
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
    "old": {
      "definition_site": "00bd1c58",
      "incomplete_value": true,
      "site": "00bd1c58",
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
            "const:928:8"
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
    "old": {
      "definition_site": "00bd1c14",
      "incomplete_value": true,
      "site": "00bd1c14",
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
      "00bd1cac",
      "READ",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1cb8",
      "READ",
      [
        "storage",
        "01126930",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1cd4",
      "WRITE",
      [
        "storage",
        "01126930",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd1cac",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1cb8",
      "READ",
      [
        "storage",
        "01126a30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1cd4",
      "WRITE",
      [
        "storage",
        "01126a30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1c38 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd1c38 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd1c38 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:930:8"]]
- 00bd1c38 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd1cd4 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd1cd4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd1cd4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a30:8"]]
+ 00bd1cd4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd1c54 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd1c54 ["INT_ADD", "register:40f0:8", ["const:bd1c54:8", "const:4:8"]]
- 00bd1c54 ["CALLIND", null, ["register:0:8"]]
+ 00bd1cf0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd1cf0 ["INT_ADD", "register:40f0:8", ["const:bd1cf0:8", "const:4:8"]]
+ 00bd1cf0 ["CALLIND", null, ["register:0:8"]]
- 00bd1c58 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:928:8"]]
- 00bd1c58 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd1c58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd1cf4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
+ 00bd1cf4 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd1cf4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-ed07261c0421efd013b2d7d3a28ff60b"></a>

### [`00bd1c6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1c6c.md) → [`00bd1d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1d08.md) _ZN8firebase4auth29invalid_credentials_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd1cac",
      "incomplete_value": true,
      "site": "00bd1cac",
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
            "const:928:8"
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
    "old": {
      "definition_site": "00bd1c88",
      "incomplete_value": true,
      "site": "00bd1c88",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd1c90",
      "incomplete_value": false,
      "site": "00bd1ca4",
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
            "const:c8e:8"
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
      "00bd1d1c",
      "READ",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1d2c",
      "PARAM",
      [
        "storage",
        "002b9c8e",
        null,
        "string"
      ]
    ],
    [
      "00bd1d48",
      "WRITE",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1d1c",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1d2c",
      "PARAM",
      [
        "storage",
        "002b9c3a",
        null,
        "string"
      ]
    ],
    [
      "00bd1d48",
      "WRITE",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1ca4 ["INT_ADD", "register:40f0:8", ["const:bd1ca4:8", "const:4:8"]]
- 00bd1ca4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1d40 ["INT_ADD", "register:40f0:8", ["const:bd1d40:8", "const:4:8"]]
+ 00bd1d40 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1cac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:928:8"]]
- 00bd1cac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1d48 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
+ 00bd1d48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1c80 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:928:8"]]
- 00bd1c80 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1d1c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
+ 00bd1d1c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a2e6a212c189dfb4d93b764c2f48b3b9"></a>

### [`00bd1cdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1cdc.md) → [`00bd1d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1d78.md) _ZN8firebase4auth29invalid_credentials_exception11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd1cf8",
      "incomplete_value": false,
      "site": "00bd1cfc",
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
            "const:367:8"
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
    "old": {
      "definition_site": "00bd1d08",
      "incomplete_value": true,
      "site": "00bd1d14",
      "value": [
        "LOAD",
        "8",
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
      "00bd1d94",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd1da4",
      "DATA",
      [
        "storage",
        "01126938",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd1d94",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd1da4",
      "DATA",
      [
        "storage",
        "01126a38",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1cfc ["INT_ADD", "register:40f0:8", ["const:bd1cfc:8", "const:4:8"]]
- 00bd1cfc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd1d98 ["INT_ADD", "register:40f0:8", ["const:bd1d98:8", "const:4:8"]]
+ 00bd1d98 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd1cf8 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd1cf8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1cf8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1cf8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd1d94 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd1d94 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1d94 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1d94 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd1d04 ["COPY", "tmp:0:8", ["const:938:8"]]
- 00bd1d04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd1d04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd1d04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd1da0 ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 00bd1da0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd1da0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd1da0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-86294986367ff8f1c4190656270af0d4"></a>

### [`00bd1d18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1d18.md) → [`00bd1db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1db4.md) _ZN8firebase4auth29invalid_credentials_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd1d58",
      "incomplete_value": true,
      "site": "00bd1d58",
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
            "const:928:8"
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
    "old": {
      "definition_site": "00bd1d34",
      "incomplete_value": true,
      "site": "00bd1d34",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd1d3c",
      "incomplete_value": false,
      "site": "00bd1d50",
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
            "const:c8e:8"
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
      "00bd1dc8",
      "READ",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1dd8",
      "PARAM",
      [
        "storage",
        "002b9c8e",
        null,
        "string"
      ]
    ],
    [
      "00bd1df4",
      "WRITE",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd1dc8",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1dd8",
      "PARAM",
      [
        "storage",
        "002b9c3a",
        null,
        "string"
      ]
    ],
    [
      "00bd1df4",
      "WRITE",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1d50 ["INT_ADD", "register:40f0:8", ["const:bd1d50:8", "const:4:8"]]
- 00bd1d50 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1dec ["INT_ADD", "register:40f0:8", ["const:bd1dec:8", "const:4:8"]]
+ 00bd1dec ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1d58 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:928:8"]]
- 00bd1d58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1df4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
+ 00bd1df4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1d2c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:928:8"]]
- 00bd1d2c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1dc8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
+ 00bd1dc8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-908786c37436db999aaca39bef5d16a9"></a>

### [`00bd1d88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1d88.md) → [`00bd1e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1e24.md) _ZN8firebase4auth29invalid_credentials_exception10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd1da4",
      "incomplete_value": false,
      "site": "00bd1da8",
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
            "const:51e:8"
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
    "old": {
      "definition_site": "00bd1db4",
      "incomplete_value": true,
      "site": "00bd1dc0",
      "value": [
        "LOAD",
        "8",
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
      "00bd1e40",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd1e50",
      "DATA",
      [
        "storage",
        "01126940",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd1e40",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd1e50",
      "DATA",
      [
        "storage",
        "01126a40",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1da8 ["INT_ADD", "register:40f0:8", ["const:bd1da8:8", "const:4:8"]]
- 00bd1da8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd1e44 ["INT_ADD", "register:40f0:8", ["const:bd1e44:8", "const:4:8"]]
+ 00bd1e44 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd1da4 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd1da4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1da4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd1da4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd1e40 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd1e40 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1e40 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd1e40 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd1db0 ["COPY", "tmp:0:8", ["const:940:8"]]
- 00bd1db0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd1db0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd1db0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd1e4c ["COPY", "tmp:0:8", ["const:a40:8"]]
+ 00bd1e4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd1e4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd1e4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b0123a26f061bbcee1412aee69927b49"></a>

### [`00bd1dc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1dc4.md) → [`00bd1e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1e60.md) _ZN8firebase4auth22invalid_user_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloca

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd1df0",
      "incomplete_value": true,
      "site": "00bd1df0",
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
    "old": {
      "definition_site": "00bd1dd8",
      "incomplete_value": true,
      "site": "00bd1dd8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd1de4",
      "incomplete_value": false,
      "site": "00bd1de8",
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
            "const:cbc:8"
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
      "00bd1e70",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1e80",
      "PARAM",
      [
        "storage",
        "002a1cbc",
        null,
        "string"
      ]
    ],
    [
      "00bd1e8c",
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
      "00bd1e70",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1e80",
      "PARAM",
      [
        "storage",
        "002a1c6f",
        null,
        "string"
      ]
    ],
    [
      "00bd1e8c",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1de8 ["INT_ADD", "register:40f0:8", ["const:bd1de8:8", "const:4:8"]]
- 00bd1de8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1e84 ["INT_ADD", "register:40f0:8", ["const:bd1e84:8", "const:4:8"]]
+ 00bd1e84 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1df0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
- 00bd1df0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1e8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bd1e8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1dd4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
- 00bd1dd4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1e70 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bd1e70 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1059e23e9b3ee46066fb66675d3eb612"></a>

### [`00bd1e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1e04.md) → [`00bd1ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1ea0.md) _ZN8firebase4auth22invalid_user_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloca

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd1e30",
      "incomplete_value": true,
      "site": "00bd1e30",
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
    "old": {
      "definition_site": "00bd1e18",
      "incomplete_value": true,
      "site": "00bd1e18",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd1e20",
      "incomplete_value": false,
      "site": "00bd1e28",
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
            "const:cbc:8"
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
      "00bd1eb0",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1ebc",
      "PARAM",
      [
        "storage",
        "002a1cbc",
        null,
        "string"
      ]
    ],
    [
      "00bd1ecc",
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
      "00bd1eb0",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1ebc",
      "PARAM",
      [
        "storage",
        "002a1c6f",
        null,
        "string"
      ]
    ],
    [
      "00bd1ecc",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1e28 ["INT_ADD", "register:40f0:8", ["const:bd1e28:8", "const:4:8"]]
- 00bd1e28 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1ec4 ["INT_ADD", "register:40f0:8", ["const:bd1ec4:8", "const:4:8"]]
+ 00bd1ec4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1e30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
- 00bd1e30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1ecc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bd1ecc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1e14 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
- 00bd1e14 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1eb0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bd1eb0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4471e019e153e576936b7bac3c264e29"></a>

### [`00bd1e44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1e44.md) → [`00bd1ee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1ee0.md) _ZN8firebase4auth22invalid_user_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd1e74",
      "incomplete_value": true,
      "site": "00bd1e74",
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
    "old": {
      "definition_site": "00bd1e58",
      "incomplete_value": true,
      "site": "00bd1e58",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd1e64",
      "incomplete_value": false,
      "site": "00bd1e6c",
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
            "const:cbc:8"
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
      "00bd1ef0",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1f00",
      "PARAM",
      [
        "storage",
        "002a1cbc",
        null,
        "string"
      ]
    ],
    [
      "00bd1f10",
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
      "00bd1ef0",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1f00",
      "PARAM",
      [
        "storage",
        "002a1c6f",
        null,
        "string"
      ]
    ],
    [
      "00bd1f10",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1e6c ["INT_ADD", "register:40f0:8", ["const:bd1e6c:8", "const:4:8"]]
- 00bd1e6c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1f08 ["INT_ADD", "register:40f0:8", ["const:bd1f08:8", "const:4:8"]]
+ 00bd1f08 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1e74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
- 00bd1e74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd1f10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bd1f10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1e54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
- 00bd1e54 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1ef0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bd1ef0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c5934e3f10a73d0a68be29a2022ed926"></a>

### [`00bd1e88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1e88.md) → [`00bd1f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1f24.md) _ZN8firebase4auth22invalid_user_exception10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd1e9c",
      "incomplete_value": true,
      "site": "00bd1e9c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "new": null,
    "old": {
      "definition_site": "00bd1ea4",
      "incomplete_value": false,
      "site": "00bd1eb0",
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
            "const:cbc:8"
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
      "00bd1f34",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd1ea4",
      "PARAM",
      [
        "storage",
        "002a1cbc",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd1eb8",
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
      "00bd1f34",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1f40",
      "PARAM",
      [
        "storage",
        "002a1c6f",
        null,
        "string"
      ]
    ],
    [
      "00bd1f54",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1e9c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd1e9c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd1f38 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd1f38 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd1eb0 ["INT_ADD", "register:40f0:8", ["const:bd1eb0:8", "const:4:8"]]
- 00bd1eb0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd1f4c ["INT_ADD", "register:40f0:8", ["const:bd1f4c:8", "const:4:8"]]
+ 00bd1f4c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1e98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:948:8"]]
- 00bd1e98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1f34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a48:8"]]
+ 00bd1f34 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1bbcadae558f8da4b4851de90b7c1b50"></a>

### [`00bd1ecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1ecc.md) → [`00bd1f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1f68.md) _ZN8firebase4auth22invalid_user_exception8GetClassEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd1ed0",
      "READ",
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
      "00bd1f6c",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1ecc ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00bd1ed0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:948:8"]]
- 00bd1ed0 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd1ed4 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00bd1ed4 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-4da649491977ef9beb4490db8329357f"></a>

### [`00bd1ed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1ed8.md) → [`00bd1f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1f74.md) _ZN8firebase4auth22invalid_user_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.48% / 新版 81.48%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd1f88",
      "READ",
      [
        "storage",
        "01126950",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00bd1f0c",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd1f30",
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
      "00bd1f88",
      "READ",
      [
        "storage",
        "01126a50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd1fa8",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd1fcc",
      "WRITE",
      [
        "storage",
        "01126a50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1eec ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:950:8"]]
- 00bd1eec ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd1eec ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd1f88 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a50:8"]]
+ 00bd1f88 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd1f88 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bd1f0c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:948:8"]]
- 00bd1f0c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd1f10 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6b8:8"]]
- 00bd1f10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-283fb70a6c62627cb703147e727164eb"></a>

### [`00bd1f44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1f44.md) → [`00bd1fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd1/00bd1fe0.md) _ZN8firebase4auth22invalid_user_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

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
    "old": {
      "definition_site": "00bd1f80",
      "incomplete_value": true,
      "site": "00bd1f80",
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
    "old": {
      "definition_site": "00bd1fa0",
      "incomplete_value": true,
      "site": "00bd1fa0",
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
    "old": {
      "definition_site": "00bd1f5c",
      "incomplete_value": true,
      "site": "00bd1f5c",
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
      "00bd1ff4",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2000",
      "READ",
      [
        "storage",
        "01126950",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd201c",
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
      "00bd1ff4",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2000",
      "READ",
      [
        "storage",
        "01126a50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd201c",
      "WRITE",
      [
        "storage",
        "01126a50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1f80 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd1f80 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd1f80 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:950:8"]]
- 00bd1f80 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd201c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd201c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd201c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a50:8"]]
+ 00bd201c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd1f9c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd1f9c ["INT_ADD", "register:40f0:8", ["const:bd1f9c:8", "const:4:8"]]
- 00bd1f9c ["CALLIND", null, ["register:0:8"]]
+ 00bd2038 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd2038 ["INT_ADD", "register:40f0:8", ["const:bd2038:8", "const:4:8"]]
+ 00bd2038 ["CALLIND", null, ["register:0:8"]]
- 00bd1fa0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
- 00bd1fa0 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd1fa0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd203c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
+ 00bd203c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd203c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-47b3c28735c2eb249a8566775c952f80"></a>

### [`00bd1fb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd1/00bd1fb4.md) → [`00bd2050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2050.md) _ZN8firebase4auth22invalid_user_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd1ff4",
      "incomplete_value": true,
      "site": "00bd1ff4",
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
    "old": {
      "definition_site": "00bd1fd0",
      "incomplete_value": true,
      "site": "00bd1fd0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd1fd8",
      "incomplete_value": false,
      "site": "00bd1fec",
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
            "const:cbc:8"
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
      "00bd2064",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2074",
      "PARAM",
      [
        "storage",
        "002a1cbc",
        null,
        "string"
      ]
    ],
    [
      "00bd2090",
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
      "00bd2064",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2074",
      "PARAM",
      [
        "storage",
        "002a1c6f",
        null,
        "string"
      ]
    ],
    [
      "00bd2090",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd1fec ["INT_ADD", "register:40f0:8", ["const:bd1fec:8", "const:4:8"]]
- 00bd1fec ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2088 ["INT_ADD", "register:40f0:8", ["const:bd2088:8", "const:4:8"]]
+ 00bd2088 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd1ff4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
- 00bd1ff4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2090 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
+ 00bd2090 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd1fc8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
- 00bd1fc8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2064 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
+ 00bd2064 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a46222f3a0a0b806338338dd61807393"></a>

### [`00bd2024`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2024.md) → [`00bd20c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd20c0.md) _ZN8firebase4auth22invalid_user_exception11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd2040",
      "incomplete_value": false,
      "site": "00bd2044",
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
            "const:367:8"
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
    "old": {
      "definition_site": "00bd2050",
      "incomplete_value": true,
      "site": "00bd205c",
      "value": [
        "LOAD",
        "8",
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
      "00bd20dc",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd20ec",
      "DATA",
      [
        "storage",
        "01126958",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd20dc",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd20ec",
      "DATA",
      [
        "storage",
        "01126a58",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2044 ["INT_ADD", "register:40f0:8", ["const:bd2044:8", "const:4:8"]]
- 00bd2044 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd20e0 ["INT_ADD", "register:40f0:8", ["const:bd20e0:8", "const:4:8"]]
+ 00bd20e0 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd2040 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd2040 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2040 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2040 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd20dc ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd20dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd20dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd20dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd204c ["COPY", "tmp:0:8", ["const:958:8"]]
- 00bd204c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd204c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd204c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd20e8 ["COPY", "tmp:0:8", ["const:a58:8"]]
+ 00bd20e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd20e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd20e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-72287200d357c982afeecbe8d8af7719"></a>

### [`00bd2060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2060.md) → [`00bd20fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd20fc.md) _ZN8firebase4auth22invalid_user_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd20a0",
      "incomplete_value": true,
      "site": "00bd20a0",
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
    "old": {
      "definition_site": "00bd207c",
      "incomplete_value": true,
      "site": "00bd207c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd2084",
      "incomplete_value": false,
      "site": "00bd2098",
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
            "const:cbc:8"
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
      "00bd2110",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2120",
      "PARAM",
      [
        "storage",
        "002a1cbc",
        null,
        "string"
      ]
    ],
    [
      "00bd213c",
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
      "00bd2110",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2120",
      "PARAM",
      [
        "storage",
        "002a1c6f",
        null,
        "string"
      ]
    ],
    [
      "00bd213c",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2098 ["INT_ADD", "register:40f0:8", ["const:bd2098:8", "const:4:8"]]
- 00bd2098 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2134 ["INT_ADD", "register:40f0:8", ["const:bd2134:8", "const:4:8"]]
+ 00bd2134 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd20a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
- 00bd20a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd213c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
+ 00bd213c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2074 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:948:8"]]
- 00bd2074 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2110 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a48:8"]]
+ 00bd2110 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d56894375f6c6b6dc7f1e052a8e54f96"></a>

### [`00bd20d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd20d0.md) → [`00bd216c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd216c.md) _ZN8firebase4auth22invalid_user_exception10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd20ec",
      "incomplete_value": false,
      "site": "00bd20f0",
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
            "const:51e:8"
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
    "old": {
      "definition_site": "00bd20fc",
      "incomplete_value": true,
      "site": "00bd2108",
      "value": [
        "LOAD",
        "8",
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
      "00bd2188",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd2198",
      "DATA",
      [
        "storage",
        "01126960",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd2188",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd2198",
      "DATA",
      [
        "storage",
        "01126a60",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd20f0 ["INT_ADD", "register:40f0:8", ["const:bd20f0:8", "const:4:8"]]
- 00bd20f0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd218c ["INT_ADD", "register:40f0:8", ["const:bd218c:8", "const:4:8"]]
+ 00bd218c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd20ec ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd20ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd20ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd20ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd2188 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd2188 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2188 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2188 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd20f8 ["COPY", "tmp:0:8", ["const:960:8"]]
- 00bd20f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd20f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd20f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd2194 ["COPY", "tmp:0:8", ["const:a60:8"]]
+ 00bd2194 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd2194 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd2194 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cdda72531d81d625d6fd95874f31f861"></a>

### [`00bd210c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd210c.md) → [`00bd21a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd21a8.md) _ZN8firebase4auth31recent_login_required_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd2138",
      "incomplete_value": true,
      "site": "00bd2138",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd2120",
      "incomplete_value": true,
      "site": "00bd2120",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd212c",
      "incomplete_value": false,
      "site": "00bd2130",
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
            "const:140:8"
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
      "00bd21b8",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd21c8",
      "PARAM",
      [
        "storage",
        "002bc140",
        null,
        "string"
      ]
    ],
    [
      "00bd21d4",
      "WRITE",
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
      "00bd21b8",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd21c8",
      "PARAM",
      [
        "storage",
        "002bc0ec",
        null,
        "string"
      ]
    ],
    [
      "00bd21d4",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2130 ["INT_ADD", "register:40f0:8", ["const:bd2130:8", "const:4:8"]]
- 00bd2130 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd21cc ["INT_ADD", "register:40f0:8", ["const:bd21cc:8", "const:4:8"]]
+ 00bd21cc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2138 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
- 00bd2138 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd21d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00bd21d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd211c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
- 00bd211c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd21b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00bd21b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4bdd9c2070dfef4b45f008b2a2520b58"></a>

### [`00bd214c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd214c.md) → [`00bd21e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd21e8.md) _ZN8firebase4auth31recent_login_required_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd2178",
      "incomplete_value": true,
      "site": "00bd2178",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd2160",
      "incomplete_value": true,
      "site": "00bd2160",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd2168",
      "incomplete_value": false,
      "site": "00bd2170",
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
            "const:140:8"
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
      "00bd21f8",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2204",
      "PARAM",
      [
        "storage",
        "002bc140",
        null,
        "string"
      ]
    ],
    [
      "00bd2214",
      "WRITE",
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
      "00bd21f8",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2204",
      "PARAM",
      [
        "storage",
        "002bc0ec",
        null,
        "string"
      ]
    ],
    [
      "00bd2214",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2170 ["INT_ADD", "register:40f0:8", ["const:bd2170:8", "const:4:8"]]
- 00bd2170 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd220c ["INT_ADD", "register:40f0:8", ["const:bd220c:8", "const:4:8"]]
+ 00bd220c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2178 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
- 00bd2178 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2214 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00bd2214 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd215c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
- 00bd215c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd21f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00bd21f8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-efe4105ae8c0b1bc78e89d9396da8969"></a>

### [`00bd218c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd218c.md) → [`00bd2228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2228.md) _ZN8firebase4auth31recent_login_required_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd21bc",
      "incomplete_value": true,
      "site": "00bd21bc",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd21a0",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd21ac",
      "incomplete_value": false,
      "site": "00bd21b4",
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
            "const:140:8"
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
      "00bd2238",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2248",
      "PARAM",
      [
        "storage",
        "002bc140",
        null,
        "string"
      ]
    ],
    [
      "00bd2258",
      "WRITE",
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
      "00bd2238",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2248",
      "PARAM",
      [
        "storage",
        "002bc0ec",
        null,
        "string"
      ]
    ],
    [
      "00bd2258",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd21b4 ["INT_ADD", "register:40f0:8", ["const:bd21b4:8", "const:4:8"]]
- 00bd21b4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2250 ["INT_ADD", "register:40f0:8", ["const:bd2250:8", "const:4:8"]]
+ 00bd2250 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd21bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
- 00bd21bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2258 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00bd2258 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd219c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
- 00bd219c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2238 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00bd2238 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9a8cf3a66859d8e4e956df7a01a912a0"></a>

### [`00bd21d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd21d0.md) → [`00bd226c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd226c.md) _ZN8firebase4auth31recent_login_required_exception10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd2200",
      "incomplete_value": true,
      "site": "00bd2200",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd21e4",
      "incomplete_value": true,
      "site": "00bd21e4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd21ec",
      "incomplete_value": false,
      "site": "00bd21f8",
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
            "const:140:8"
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
      "00bd227c",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2288",
      "PARAM",
      [
        "storage",
        "002bc140",
        null,
        "string"
      ]
    ],
    [
      "00bd229c",
      "WRITE",
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
      "00bd227c",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2288",
      "PARAM",
      [
        "storage",
        "002bc0ec",
        null,
        "string"
      ]
    ],
    [
      "00bd229c",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd21f8 ["INT_ADD", "register:40f0:8", ["const:bd21f8:8", "const:4:8"]]
- 00bd21f8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2294 ["INT_ADD", "register:40f0:8", ["const:bd2294:8", "const:4:8"]]
+ 00bd2294 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2200 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
- 00bd2200 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd229c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00bd229c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd21e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
- 00bd21e0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd227c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00bd227c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e205337d6425e7449434c5734b6a7e20"></a>

### [`00bd2220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2220.md) → [`00bd22bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd22bc.md) _ZN8firebase4auth31recent_login_required_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd22d0",
      "READ",
      [
        "storage",
        "01126970",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00bd2254",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd2278",
      "WRITE",
      [
        "storage",
        "01126970",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd22d0",
      "READ",
      [
        "storage",
        "01126a70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd22f0",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2314",
      "WRITE",
      [
        "storage",
        "01126a70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2234 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:970:8"]]
- 00bd2234 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd2234 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd22d0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a70:8"]]
+ 00bd22d0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd22d0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bd2240 ["BRANCH", null, ["local:b4:8"]]
+ 00bd22dc ["BRANCH", null, ["local:b5:8"]]
- 00bd2254 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:968:8"]]
- 00bd2254 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-923460ebcfd56e1b902ffdb32a655554"></a>

### [`00bd228c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd228c.md) → [`00bd2328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2328.md) _ZN8firebase4auth31recent_login_required_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 39.29% / 新版 39.29%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd22a4",
      "incomplete_value": true,
      "site": "00bd22a4",
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
      "unmatched:00bd228c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd2290",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd2294",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd2328",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd232c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd2330",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd228c ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bd228c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bd228c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd2290 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd2290 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd2290 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd2290 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd2294 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd2294 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd2294 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00bd2294 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-de5a965dcbb36b1908c90b5b8f6ffabf"></a>

### [`00bd22fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd22fc.md) → [`00bd2398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2398.md) _ZN8firebase4auth31recent_login_required_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd2320",
      "incomplete_value": false,
      "site": "00bd2334",
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
            "const:140:8"
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
      "unmatched:00bd2310",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd2318",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd23dc"
      ]
    ],
    [
      "unmatched:00bd2320",
      "PARAM",
      [
        "storage",
        "002bc140",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd23ac",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd23b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd23dc"
      ]
    ],
    [
      "00bd23bc",
      "PARAM",
      [
        "storage",
        "002bc0ec",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2334 ["INT_ADD", "register:40f0:8", ["const:bd2334:8", "const:4:8"]]
- 00bd2334 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd23d0 ["INT_ADD", "register:40f0:8", ["const:bd23d0:8", "const:4:8"]]
+ 00bd23d0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2310 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:968:8"]]
- 00bd2310 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd2314 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-d46696c24a0cebae256dad42994b8ecd"></a>

### [`00bd236c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd236c.md) → [`00bd2408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2408.md) _ZN8firebase4auth31recent_login_required_exception11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 33.33% / 新版 33.33%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd2380",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd2390"
      ]
    ],
    [
      "unmatched:00bd2388",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd238c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bd241c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd242c"
      ]
    ],
    [
      "00bd2424",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd2428",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2380 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00bd2380 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd2384 ["COPY", "register:4000:8", ["const:2a8000:8"]]
- 00bd2388 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd2388 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2388 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2388 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e30f6e372873cec6ddb4ee9ef3ef1ac1"></a>

### [`00bd23a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd23a8.md) → [`00bd2444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2444.md) _ZN8firebase4auth31recent_login_required_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd23e8",
      "incomplete_value": true,
      "site": "00bd23e8",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd23c4",
      "incomplete_value": true,
      "site": "00bd23c4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd23cc",
      "incomplete_value": false,
      "site": "00bd23e0",
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
            "const:140:8"
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
      "00bd2458",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2468",
      "PARAM",
      [
        "storage",
        "002bc140",
        null,
        "string"
      ]
    ],
    [
      "00bd2484",
      "WRITE",
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
      "00bd2458",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2468",
      "PARAM",
      [
        "storage",
        "002bc0ec",
        null,
        "string"
      ]
    ],
    [
      "00bd2484",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd23e0 ["INT_ADD", "register:40f0:8", ["const:bd23e0:8", "const:4:8"]]
- 00bd23e0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd247c ["INT_ADD", "register:40f0:8", ["const:bd247c:8", "const:4:8"]]
+ 00bd247c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd23e8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:968:8"]]
- 00bd23e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2484 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
+ 00bd2484 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd23bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:968:8"]]
- 00bd23bc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2458 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
+ 00bd2458 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c54e1d3170ce49888088f83de8772de9"></a>

### [`00bd2418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2418.md) → [`00bd24b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd24b4.md) _ZN8firebase4auth31recent_login_required_exception10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd2434",
      "incomplete_value": false,
      "site": "00bd2438",
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
            "const:51e:8"
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
    "old": {
      "definition_site": "00bd2444",
      "incomplete_value": true,
      "site": "00bd2450",
      "value": [
        "LOAD",
        "8",
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
      "00bd24d0",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd24e0",
      "DATA",
      [
        "storage",
        "01126980",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd24d0",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd24e0",
      "DATA",
      [
        "storage",
        "01126a80",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2438 ["INT_ADD", "register:40f0:8", ["const:bd2438:8", "const:4:8"]]
- 00bd2438 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd24d4 ["INT_ADD", "register:40f0:8", ["const:bd24d4:8", "const:4:8"]]
+ 00bd24d4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd2434 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd2434 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2434 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2434 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd24d0 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd24d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd24d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd24d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2440 ["COPY", "tmp:0:8", ["const:980:8"]]
- 00bd2440 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd2440 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd2440 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd24dc ["COPY", "tmp:0:8", ["const:a80:8"]]
+ 00bd24dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd24dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd24dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e61fbdc1b1b994ad09fda9e4c2fbaf9d"></a>

### [`00bd2454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2454.md) → [`00bd24f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd24f0.md) _ZN8firebase4auth24user_collision_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allo

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd2480",
      "incomplete_value": true,
      "site": "00bd2480",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd2468",
      "incomplete_value": true,
      "site": "00bd2468",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd2474",
      "incomplete_value": false,
      "site": "00bd2478",
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
            "const:cf7:8"
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
      "00bd2500",
      "READ",
      [
        "storage",
        "01126988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2510",
      "PARAM",
      [
        "storage",
        "002a2cf7",
        null,
        "string"
      ]
    ],
    [
      "00bd251c",
      "WRITE",
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
      "00bd2500",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2510",
      "PARAM",
      [
        "storage",
        "002a2caa",
        null,
        "string"
      ]
    ],
    [
      "00bd251c",
      "WRITE",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2478 ["INT_ADD", "register:40f0:8", ["const:bd2478:8", "const:4:8"]]
- 00bd2478 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2514 ["INT_ADD", "register:40f0:8", ["const:bd2514:8", "const:4:8"]]
+ 00bd2514 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2480 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:988:8"]]
- 00bd2480 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd251c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
+ 00bd251c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2464 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:988:8"]]
- 00bd2464 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2500 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
+ 00bd2500 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a12514764acca111b9959260508f9a15"></a>

### [`00bd2494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2494.md) → [`00bd2530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2530.md) _ZN8firebase4auth24user_collision_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allo

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.75% / 新版 68.75%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd24a8",
      "incomplete_value": true,
      "site": "00bd24a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "00bd2540",
      "READ",
      [
        "storage",
        "01126988",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd24b0",
      "PARAM",
      [
        "storage",
        "002a2cf7",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd24b8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd2540",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd254c",
      "PARAM",
      [
        "storage",
        "002a2caa",
        null,
        "string"
      ]
    ],
    [
      "00bd2554",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd24a8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd24a8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd2544 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd2544 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd24a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:988:8"]]
- 00bd24a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2540 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
+ 00bd2540 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd24b0 ["COPY", "tmp:0:8", ["const:cf7:8"]]
- 00bd24b0 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd24b0 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd24b0 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-c73a72b36ac8349e7678c7a81e2a3c8b"></a>

### [`00bd24d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd24d4.md) → [`00bd2570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2570.md) _ZN8firebase4auth24user_collision_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd24e4",
      "READ",
      [
        "storage",
        "01126988",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd24e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd25a4"
      ]
    ],
    [
      "unmatched:00bd24f4",
      "PARAM",
      [
        "storage",
        "002a2cf7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd2580",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2584",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd25a4"
      ]
    ],
    [
      "00bd2590",
      "PARAM",
      [
        "storage",
        "002a2caa",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd24e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:988:8"]]
- 00bd24e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd24e8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd24e8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd24ec ["COPY", "register:4018:8", ["const:2a2000:8"]]
~~~


<a id="compare-b26559323720a71d996e29e0c9131712"></a>

### [`00bd2518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2518.md) → [`00bd25b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd25b4.md) _ZN8firebase4auth24user_collision_exception10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd2548",
      "incomplete_value": true,
      "site": "00bd2548",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd252c",
      "incomplete_value": true,
      "site": "00bd252c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd2534",
      "incomplete_value": false,
      "site": "00bd2540",
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
            "const:cf7:8"
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
      "00bd25c4",
      "READ",
      [
        "storage",
        "01126988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd25d0",
      "PARAM",
      [
        "storage",
        "002a2cf7",
        null,
        "string"
      ]
    ],
    [
      "00bd25e4",
      "WRITE",
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
      "00bd25c4",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd25d0",
      "PARAM",
      [
        "storage",
        "002a2caa",
        null,
        "string"
      ]
    ],
    [
      "00bd25e4",
      "WRITE",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2540 ["INT_ADD", "register:40f0:8", ["const:bd2540:8", "const:4:8"]]
- 00bd2540 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd25dc ["INT_ADD", "register:40f0:8", ["const:bd25dc:8", "const:4:8"]]
+ 00bd25dc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2548 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:988:8"]]
- 00bd2548 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd25e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
+ 00bd25e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2528 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:988:8"]]
- 00bd2528 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd25c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a88:8"]]
+ 00bd25c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f0ba02aacbd27e97e1e5f134687c30fc"></a>

### [`00bd2568`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2568.md) → [`00bd2604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2604.md) _ZN8firebase4auth24user_collision_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd259c",
      "incomplete_value": true,
      "site": "00bd25a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd264c",
      "incomplete_value": true,
      "site": "00bd2650",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
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
      "00bd2618",
      "READ",
      [
        "storage",
        "01126990",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00bd259c",
      "READ",
      [
        "storage",
        "01126988",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd25c0",
      "WRITE",
      [
        "storage",
        "01126990",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd2618",
      "READ",
      [
        "storage",
        "01126a90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2638",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd265c",
      "WRITE",
      [
        "storage",
        "01126a90",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd25a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd25a8 ["INT_ADD", "register:40f0:8", ["const:bd25a8:8", "const:4:8"]]
- 00bd25a8 ["CALLIND", null, ["register:0:8"]]
+ 00bd2644 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd2644 ["INT_ADD", "register:40f0:8", ["const:bd2644:8", "const:4:8"]]
+ 00bd2644 ["CALLIND", null, ["register:0:8"]]
- 00bd25b4 ["INT_ADD", "register:40f0:8", ["const:bd25b4:8", "const:4:8"]]
- 00bd25b4 ["CALL", null, ["callee:00c5b030:8"]]
+ 00bd2650 ["INT_ADD", "register:40f0:8", ["const:bd2650:8", "const:4:8"]]
+ 00bd2650 ["CALL", null, ["callee:00c5b030:8"]]
- 00bd257c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:990:8"]]
- 00bd257c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd257c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd2618 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a90:8"]]
+ 00bd2618 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2618 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-5c9a96707579b2d0fb2f636a5aecbd8b"></a>

### [`00bd25d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd25d4.md) → [`00bd2670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2670.md) _ZN8firebase4auth24user_collision_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_value, call, call_count, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 46.43% / 新版 46.43%

優先判定に残った影響 `unresolved_call_alignment` 3件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd25ec",
      "incomplete_value": true,
      "site": "00bd25ec",
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
      "unmatched:00bd25d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd25d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd25dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd2670",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd2674",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd2678",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd25d4 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bd25d4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bd25d4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd25d8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd25d8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd25d8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd25d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd25dc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd25dc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd25dc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00bd25dc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8c81a5b8153c201213d0d1d585f69de5"></a>

### [`00bd2644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2644.md) → [`00bd26e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd26e0.md) _ZN8firebase4auth24user_collision_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd266c",
      "incomplete_value": true,
      "site": "00bd267c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd2670",
      "incomplete_value": true,
      "site": "00bd267c",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bd2668",
      "incomplete_value": false,
      "site": "00bd267c",
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
            "const:cf7:8"
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
      "unmatched:00bd2658",
      "READ",
      [
        "storage",
        "01126988",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd2660",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd2724"
      ]
    ],
    [
      "unmatched:00bd2668",
      "PARAM",
      [
        "storage",
        "002a2cf7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd26f4",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd26fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd2724"
      ]
    ],
    [
      "00bd2704",
      "PARAM",
      [
        "storage",
        "002a2caa",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd267c ["INT_ADD", "register:40f0:8", ["const:bd267c:8", "const:4:8"]]
- 00bd267c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2718 ["INT_ADD", "register:40f0:8", ["const:bd2718:8", "const:4:8"]]
+ 00bd2718 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2658 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:988:8"]]
- 00bd2658 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd265c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-3f0e997513971eebebb12373ef93c1eb"></a>

### [`00bd26b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd26b4.md) → [`00bd2750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2750.md) _ZN8firebase4auth24user_collision_exception11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd26d0",
      "incomplete_value": false,
      "site": "00bd26d4",
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
            "const:367:8"
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
    "old": {
      "definition_site": "00bd26e0",
      "incomplete_value": true,
      "site": "00bd26ec",
      "value": [
        "LOAD",
        "8",
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
      "00bd276c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd277c",
      "DATA",
      [
        "storage",
        "01126998",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd276c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd277c",
      "DATA",
      [
        "storage",
        "01126a98",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd26d4 ["INT_ADD", "register:40f0:8", ["const:bd26d4:8", "const:4:8"]]
- 00bd26d4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd2770 ["INT_ADD", "register:40f0:8", ["const:bd2770:8", "const:4:8"]]
+ 00bd2770 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd26d0 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd26d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd26d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd26d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd276c ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd276c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd276c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd276c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd26dc ["COPY", "tmp:0:8", ["const:998:8"]]
- 00bd26dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd26dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd26dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd2778 ["COPY", "tmp:0:8", ["const:a98:8"]]
+ 00bd2778 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd2778 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd2778 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-558ff8e60c5059200d5a01935ff313a5"></a>

### [`00bd26f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd26f0.md) → [`00bd278c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd278c.md) _ZN8firebase4auth24user_collision_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd2730",
      "incomplete_value": true,
      "site": "00bd2730",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd270c",
      "incomplete_value": true,
      "site": "00bd270c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd2714",
      "incomplete_value": false,
      "site": "00bd2728",
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
            "const:cf7:8"
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
      "00bd27a0",
      "READ",
      [
        "storage",
        "01126988",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd27b0",
      "PARAM",
      [
        "storage",
        "002a2cf7",
        null,
        "string"
      ]
    ],
    [
      "00bd27cc",
      "WRITE",
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
      "00bd27a0",
      "READ",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd27b0",
      "PARAM",
      [
        "storage",
        "002a2caa",
        null,
        "string"
      ]
    ],
    [
      "00bd27cc",
      "WRITE",
      [
        "storage",
        "01126a88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2728 ["INT_ADD", "register:40f0:8", ["const:bd2728:8", "const:4:8"]]
- 00bd2728 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd27c4 ["INT_ADD", "register:40f0:8", ["const:bd27c4:8", "const:4:8"]]
+ 00bd27c4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2730 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:988:8"]]
- 00bd2730 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd27cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a88:8"]]
+ 00bd27cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2704 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:988:8"]]
- 00bd2704 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd27a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a88:8"]]
+ 00bd27a0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b724b50b21ee2a8f3b94f0840119210a"></a>

### [`00bd2760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2760.md) → [`00bd27fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd27fc.md) _ZN8firebase4auth24user_collision_exception10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd277c",
      "incomplete_value": false,
      "site": "00bd2780",
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
            "const:51e:8"
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
    "old": {
      "definition_site": "00bd278c",
      "incomplete_value": true,
      "site": "00bd2798",
      "value": [
        "LOAD",
        "8",
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
      "00bd2818",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd2828",
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
      "00bd2818",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd2828",
      "DATA",
      [
        "storage",
        "01126aa0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2780 ["INT_ADD", "register:40f0:8", ["const:bd2780:8", "const:4:8"]]
- 00bd2780 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd281c ["INT_ADD", "register:40f0:8", ["const:bd281c:8", "const:4:8"]]
+ 00bd281c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd277c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd277c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd277c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd277c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd2818 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd2818 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2818 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2818 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2788 ["COPY", "tmp:0:8", ["const:9a0:8"]]
- 00bd2788 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd2788 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd2788 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd2824 ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 00bd2824 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd2824 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd2824 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d261318bfb7f44c16b36d1b831957a39"></a>

### [`00bd279c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd279c.md) → [`00bd2838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2838.md) _ZN8firebase4auth21android_web_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd27c8",
      "incomplete_value": true,
      "site": "00bd27c8",
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
    "old": {
      "definition_site": "00bd27b0",
      "incomplete_value": true,
      "site": "00bd27b0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd27bc",
      "incomplete_value": false,
      "site": "00bd27c0",
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
            "const:d55:8"
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
      "00bd2848",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2858",
      "PARAM",
      [
        "storage",
        "002a0d55",
        null,
        "string"
      ]
    ],
    [
      "00bd2864",
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
      "00bd2848",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2858",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ],
    [
      "00bd2864",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd27c0 ["INT_ADD", "register:40f0:8", ["const:bd27c0:8", "const:4:8"]]
- 00bd27c0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd285c ["INT_ADD", "register:40f0:8", ["const:bd285c:8", "const:4:8"]]
+ 00bd285c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd27c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd27c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2864 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00bd2864 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd27ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd27ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2848 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00bd2848 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d04b376722814a5cba53b773d9db5570"></a>

### [`00bd27dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd27dc.md) → [`00bd2878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2878.md) _ZN8firebase4auth21android_web_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd2808",
      "incomplete_value": true,
      "site": "00bd2808",
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
    "old": {
      "definition_site": "00bd27f0",
      "incomplete_value": true,
      "site": "00bd27f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd27f8",
      "incomplete_value": false,
      "site": "00bd2800",
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
            "const:d55:8"
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
      "00bd2888",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2894",
      "PARAM",
      [
        "storage",
        "002a0d55",
        null,
        "string"
      ]
    ],
    [
      "00bd28a4",
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
      "00bd2888",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2894",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ],
    [
      "00bd28a4",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2800 ["INT_ADD", "register:40f0:8", ["const:bd2800:8", "const:4:8"]]
- 00bd2800 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd289c ["INT_ADD", "register:40f0:8", ["const:bd289c:8", "const:4:8"]]
+ 00bd289c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2808 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd2808 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd28a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00bd28a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd27ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd27ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2888 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00bd2888 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ad3ae7fcf63fe4e572d7c54fee2fbf89"></a>

### [`00bd281c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd281c.md) → [`00bd28b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd28b8.md) _ZN8firebase4auth21android_web_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd284c",
      "incomplete_value": true,
      "site": "00bd284c",
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
    "old": {
      "definition_site": "00bd2830",
      "incomplete_value": true,
      "site": "00bd2830",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd283c",
      "incomplete_value": false,
      "site": "00bd2844",
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
            "const:d55:8"
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
      "00bd28c8",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd28d8",
      "PARAM",
      [
        "storage",
        "002a0d55",
        null,
        "string"
      ]
    ],
    [
      "00bd28e8",
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
      "00bd28c8",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd28d8",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ],
    [
      "00bd28e8",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2844 ["INT_ADD", "register:40f0:8", ["const:bd2844:8", "const:4:8"]]
- 00bd2844 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd28e0 ["INT_ADD", "register:40f0:8", ["const:bd28e0:8", "const:4:8"]]
+ 00bd28e0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd284c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd284c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd28e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00bd28e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd282c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd282c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd28c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00bd28c8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-364308775fe065a7182488f5920ac260"></a>

### [`00bd2860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2860.md) → [`00bd28fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd28fc.md) _ZN8firebase4auth21android_web_exception10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd2890",
      "incomplete_value": true,
      "site": "00bd2890",
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
    "old": {
      "definition_site": "00bd2874",
      "incomplete_value": true,
      "site": "00bd2874",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd287c",
      "incomplete_value": false,
      "site": "00bd2888",
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
            "const:d55:8"
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
      "00bd290c",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2918",
      "PARAM",
      [
        "storage",
        "002a0d55",
        null,
        "string"
      ]
    ],
    [
      "00bd292c",
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
      "00bd290c",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2918",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ],
    [
      "00bd292c",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2888 ["INT_ADD", "register:40f0:8", ["const:bd2888:8", "const:4:8"]]
- 00bd2888 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2924 ["INT_ADD", "register:40f0:8", ["const:bd2924:8", "const:4:8"]]
+ 00bd2924 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2890 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd2890 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd292c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00bd292c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2870 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00bd2870 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd290c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
+ 00bd290c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-56b2a675281bd6a6911759e5a2cd0618"></a>

### [`00bd28b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd28b0.md) → [`00bd294c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd294c.md) _ZN8firebase4auth21android_web_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd2908",
      "incomplete_value": true,
      "site": "00bd2908",
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
    "old": {
      "definition_site": "00bd28e4",
      "incomplete_value": true,
      "site": "00bd28f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd2960",
      "READ",
      [
        "storage",
        "011269b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2980",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd29a4",
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
      "00bd2960",
      "READ",
      [
        "storage",
        "01126ab0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2980",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd29a4",
      "WRITE",
      [
        "storage",
        "01126ab0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd28f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd28f0 ["INT_ADD", "register:40f0:8", ["const:bd28f0:8", "const:4:8"]]
- 00bd28f0 ["CALLIND", null, ["register:0:8"]]
+ 00bd298c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd298c ["INT_ADD", "register:40f0:8", ["const:bd298c:8", "const:4:8"]]
+ 00bd298c ["CALLIND", null, ["register:0:8"]]
- 00bd2908 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd2908 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9b0:8"]]
- 00bd2908 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd29a4 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd29a4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ab0:8"]]
+ 00bd29a4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd28c4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:9b0:8"]]
- 00bd28c4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd28c4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd2960 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:ab0:8"]]
+ 00bd2960 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2960 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-8586f0f011bb3b419f5846e19f04c77d"></a>

### [`00bd291c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd291c.md) → [`00bd29b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd29b8.md) _ZN8firebase4auth21android_web_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

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
    "old": {
      "definition_site": "00bd2958",
      "incomplete_value": true,
      "site": "00bd2958",
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
    "old": {
      "definition_site": "00bd2978",
      "incomplete_value": true,
      "site": "00bd2978",
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
    "old": {
      "definition_site": "00bd2934",
      "incomplete_value": true,
      "site": "00bd2934",
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
      "00bd29cc",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd29d8",
      "READ",
      [
        "storage",
        "011269b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd29f4",
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
      "00bd29cc",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd29d8",
      "READ",
      [
        "storage",
        "01126ab0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd29f4",
      "WRITE",
      [
        "storage",
        "01126ab0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2958 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd2958 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd2958 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9b0:8"]]
- 00bd2958 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd29f4 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd29f4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd29f4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ab0:8"]]
+ 00bd29f4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd2974 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd2974 ["INT_ADD", "register:40f0:8", ["const:bd2974:8", "const:4:8"]]
- 00bd2974 ["CALLIND", null, ["register:0:8"]]
+ 00bd2a10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd2a10 ["INT_ADD", "register:40f0:8", ["const:bd2a10:8", "const:4:8"]]
+ 00bd2a10 ["CALLIND", null, ["register:0:8"]]
- 00bd2978 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00bd2978 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd2978 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd2a14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
+ 00bd2a14 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd2a14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-9dc82351ebdd544fe915c3664439e198"></a>

### [`00bd298c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd298c.md) → [`00bd2a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2a28.md) _ZN8firebase4auth21android_web_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd29cc",
      "incomplete_value": true,
      "site": "00bd29cc",
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
    "old": {
      "definition_site": "00bd29a8",
      "incomplete_value": true,
      "site": "00bd29a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd29b0",
      "incomplete_value": false,
      "site": "00bd29c4",
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
            "const:d55:8"
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
      "00bd2a3c",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2a4c",
      "PARAM",
      [
        "storage",
        "002a0d55",
        null,
        "string"
      ]
    ],
    [
      "00bd2a68",
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
      "00bd2a3c",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2a4c",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ],
    [
      "00bd2a68",
      "WRITE",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd29c4 ["INT_ADD", "register:40f0:8", ["const:bd29c4:8", "const:4:8"]]
- 00bd29c4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2a60 ["INT_ADD", "register:40f0:8", ["const:bd2a60:8", "const:4:8"]]
+ 00bd2a60 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd29cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00bd29cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2a68 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
+ 00bd2a68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd29a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00bd29a0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2a3c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
+ 00bd2a3c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5173d8ef9338b650e8fdc0feb1e0e42a"></a>

### [`00bd29fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd29fc.md) → [`00bd2a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2a98.md) _ZN8firebase4auth21android_web_exception11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd2a18",
      "incomplete_value": false,
      "site": "00bd2a1c",
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
            "const:367:8"
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
    "old": {
      "definition_site": "00bd2a28",
      "incomplete_value": true,
      "site": "00bd2a34",
      "value": [
        "LOAD",
        "8",
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
      "00bd2ab4",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd2ac4",
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
      "00bd2ab4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd2ac4",
      "DATA",
      [
        "storage",
        "01126ab8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2a1c ["INT_ADD", "register:40f0:8", ["const:bd2a1c:8", "const:4:8"]]
- 00bd2a1c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd2ab8 ["INT_ADD", "register:40f0:8", ["const:bd2ab8:8", "const:4:8"]]
+ 00bd2ab8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd2a18 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd2a18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2a18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2a18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd2ab4 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd2ab4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2ab4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2ab4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2a24 ["COPY", "tmp:0:8", ["const:9b8:8"]]
- 00bd2a24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd2a24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd2a24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd2ac0 ["COPY", "tmp:0:8", ["const:ab8:8"]]
+ 00bd2ac0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd2ac0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd2ac0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9a11134c8b6fd785ffd40c6a9bea6659"></a>

### [`00bd2a38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2a38.md) → [`00bd2ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2ad4.md) _ZN8firebase4auth21android_web_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd2a5c",
      "incomplete_value": false,
      "site": "00bd2a70",
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
            "const:d55:8"
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
      "unmatched:00bd2a4c",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd2a54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd2b18"
      ]
    ],
    [
      "unmatched:00bd2a5c",
      "PARAM",
      [
        "storage",
        "002a0d55",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd2ae8",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2af0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd2b18"
      ]
    ],
    [
      "00bd2af8",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2a70 ["INT_ADD", "register:40f0:8", ["const:bd2a70:8", "const:4:8"]]
- 00bd2a70 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2b0c ["INT_ADD", "register:40f0:8", ["const:bd2b0c:8", "const:4:8"]]
+ 00bd2b0c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2a4c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00bd2a4c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd2a50 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-b2201d8c3e809c7eee3f415686aa07ff"></a>

### [`00bd2aa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2aa8.md) → [`00bd2b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2b44.md) _ZN8firebase4auth21android_web_exception10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 46.67% / 新版 46.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd2b58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd2acc"
      ]
    ],
    [
      "unmatched:00bd2ac4",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd2ac8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bd2b58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd2b68"
      ]
    ],
    [
      "00bd2b60",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd2b64",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2abc ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00bd2abc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd2b58 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00bd2b58 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd2ac4 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd2ac4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2ac4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2ac4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2ac8 ["INT_ADD", "register:40f0:8", ["const:bd2ac8:8", "const:4:8"]]
- 00bd2ac8 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-3579108798956297ddd42edd85bbd1c0"></a>

### [`00bd2ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2ae4.md) → [`00bd2b80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2b80.md) _ZN8firebase4auth23firebase_auth_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloc

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd2af8",
      "incomplete_value": true,
      "site": "00bd2af8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "00bd2b90",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2b94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd2b14"
      ]
    ],
    [
      "unmatched:00bd2b04",
      "PARAM",
      [
        "storage",
        "002be8cd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd2b90",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2b94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd2bb0"
      ]
    ],
    [
      "00bd2ba0",
      "PARAM",
      [
        "storage",
        "002be879",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2af8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd2af8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd2b94 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd2b94 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd2af4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
- 00bd2af4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2b90 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
+ 00bd2b90 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd2b04 ["COPY", "tmp:0:8", ["const:8cd:8"]]
- 00bd2b04 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd2b04 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd2b04 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-8a232b6069697e3339c4575d149f8739"></a>

### [`00bd2b24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2b24.md) → [`00bd2bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2bc0.md) _ZN8firebase4auth23firebase_auth_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9alloc

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd2b38",
      "incomplete_value": true,
      "site": "00bd2b38",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "unmatched:00bd2b24",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd2b28",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd2bd0",
      "READ",
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
      "00bd2bc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd2bc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd2bd0",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2b38 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd2b38 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd2bd4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd2bd4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd2b24 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd2b24 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd2b24 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd2b28 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd2b28 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd2b28 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd2b28 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6bae7d720fbe1b5c2850124c123094bd"></a>

### [`00bd2b64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2b64.md) → [`00bd2c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2c00.md) _ZN8firebase4auth23firebase_auth_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.59% / 新版 70.59%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd2b78",
      "incomplete_value": true,
      "site": "00bd2b78",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "00bd2c10",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd2b84",
      "PARAM",
      [
        "storage",
        "002be8cd",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd2b8c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd2c10",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2c20",
      "PARAM",
      [
        "storage",
        "002be879",
        null,
        "string"
      ]
    ],
    [
      "00bd2c28",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2b78 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd2b78 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd2c14 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd2c14 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd2b74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
- 00bd2b74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2c10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
+ 00bd2c10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd2b84 ["COPY", "tmp:0:8", ["const:8cd:8"]]
- 00bd2b84 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd2b84 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd2b84 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-841bac6d12f34ae91025ada1065b217d"></a>

### [`00bd2ba8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2ba8.md) → [`00bd2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2c44.md) _ZN8firebase4auth23firebase_auth_exception10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd2bbc",
      "incomplete_value": true,
      "site": "00bd2bbc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd2bc4",
      "incomplete_value": false,
      "site": "00bd2bd0",
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
            "const:8cd:8"
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
      "00bd2c54",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd2bc4",
      "PARAM",
      [
        "storage",
        "002be8cd",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd2bd8",
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
      "00bd2c54",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2c60",
      "PARAM",
      [
        "storage",
        "002be879",
        null,
        "string"
      ]
    ],
    [
      "00bd2c74",
      "WRITE",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2bbc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd2bbc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd2c58 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd2c58 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bd2bd0 ["INT_ADD", "register:40f0:8", ["const:bd2bd0:8", "const:4:8"]]
- 00bd2bd0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2c6c ["INT_ADD", "register:40f0:8", ["const:bd2c6c:8", "const:4:8"]]
+ 00bd2c6c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2bb8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
- 00bd2bb8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2c54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ac8:8"]]
+ 00bd2c54 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a4b77923f180cbd68b470a5f486be088"></a>

### [`00bd2bf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2bf8.md) → [`00bd2c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2c94.md) _ZN8firebase4auth23firebase_auth_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd2c50",
      "incomplete_value": true,
      "site": "00bd2c50",
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
    "old": {
      "definition_site": "00bd2c2c",
      "incomplete_value": true,
      "site": "00bd2c38",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd2ca8",
      "READ",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2cc8",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2cec",
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
      "00bd2ca8",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2cc8",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2cec",
      "WRITE",
      [
        "storage",
        "01126ad0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2c38 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd2c38 ["INT_ADD", "register:40f0:8", ["const:bd2c38:8", "const:4:8"]]
- 00bd2c38 ["CALLIND", null, ["register:0:8"]]
+ 00bd2cd4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd2cd4 ["INT_ADD", "register:40f0:8", ["const:bd2cd4:8", "const:4:8"]]
+ 00bd2cd4 ["CALLIND", null, ["register:0:8"]]
- 00bd2c50 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd2c50 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9d0:8"]]
- 00bd2c50 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd2cec ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd2cec ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ad0:8"]]
+ 00bd2cec ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd2c0c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:9d0:8"]]
- 00bd2c0c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd2c0c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd2ca8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:ad0:8"]]
+ 00bd2ca8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2ca8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-31852a644a243236fc6e1f961ec61e66"></a>

### [`00bd2c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2c64.md) → [`00bd2d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2d00.md) _ZN8firebase4auth23firebase_auth_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

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
    "old": {
      "definition_site": "00bd2ca0",
      "incomplete_value": true,
      "site": "00bd2ca0",
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
    "old": {
      "definition_site": "00bd2cc0",
      "incomplete_value": true,
      "site": "00bd2cc0",
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
    "old": {
      "definition_site": "00bd2c7c",
      "incomplete_value": true,
      "site": "00bd2c7c",
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
      "00bd2d14",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2d20",
      "READ",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2d3c",
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
      "00bd2d14",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2d20",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd2d3c",
      "WRITE",
      [
        "storage",
        "01126ad0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2ca0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd2ca0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd2ca0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9d0:8"]]
- 00bd2ca0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd2d3c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd2d3c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd2d3c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ad0:8"]]
+ 00bd2d3c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd2cbc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd2cbc ["INT_ADD", "register:40f0:8", ["const:bd2cbc:8", "const:4:8"]]
- 00bd2cbc ["CALLIND", null, ["register:0:8"]]
+ 00bd2d58 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd2d58 ["INT_ADD", "register:40f0:8", ["const:bd2d58:8", "const:4:8"]]
+ 00bd2d58 ["CALLIND", null, ["register:0:8"]]
- 00bd2cc0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
- 00bd2cc0 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd2cc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd2d5c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
+ 00bd2d5c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd2d5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-33584c89cd377ba8af61a3bff29728a7"></a>

### [`00bd2cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2cd4.md) → [`00bd2d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2d70.md) _ZN8firebase4auth23firebase_auth_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd2d14",
      "incomplete_value": true,
      "site": "00bd2d14",
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
    "old": {
      "definition_site": "00bd2cf0",
      "incomplete_value": true,
      "site": "00bd2cf0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd2cf8",
      "incomplete_value": false,
      "site": "00bd2d0c",
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
            "const:8cd:8"
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
      "00bd2d84",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2d94",
      "PARAM",
      [
        "storage",
        "002be8cd",
        null,
        "string"
      ]
    ],
    [
      "00bd2db0",
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
      "00bd2d84",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2d94",
      "PARAM",
      [
        "storage",
        "002be879",
        null,
        "string"
      ]
    ],
    [
      "00bd2db0",
      "WRITE",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2d0c ["INT_ADD", "register:40f0:8", ["const:bd2d0c:8", "const:4:8"]]
- 00bd2d0c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2da8 ["INT_ADD", "register:40f0:8", ["const:bd2da8:8", "const:4:8"]]
+ 00bd2da8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2d14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
- 00bd2d14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2db0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
+ 00bd2db0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2ce8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
- 00bd2ce8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2d84 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ac8:8"]]
+ 00bd2d84 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-afc8955150ed2156321c7c50dbf2be4f"></a>

### [`00bd2d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2d44.md) → [`00bd2de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2de0.md) _ZN8firebase4auth23firebase_auth_exception11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd2d60",
      "incomplete_value": false,
      "site": "00bd2d64",
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
            "const:367:8"
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
    "old": {
      "definition_site": "00bd2d70",
      "incomplete_value": true,
      "site": "00bd2d7c",
      "value": [
        "LOAD",
        "8",
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
      "00bd2dfc",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd2e0c",
      "DATA",
      [
        "storage",
        "011269d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd2dfc",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd2e0c",
      "DATA",
      [
        "storage",
        "01126ad8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2d64 ["INT_ADD", "register:40f0:8", ["const:bd2d64:8", "const:4:8"]]
- 00bd2d64 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd2e00 ["INT_ADD", "register:40f0:8", ["const:bd2e00:8", "const:4:8"]]
+ 00bd2e00 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd2d60 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd2d60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2d60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2d60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd2dfc ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd2dfc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2dfc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd2dfc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2d6c ["COPY", "tmp:0:8", ["const:9d8:8"]]
- 00bd2d6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd2d6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd2d6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd2e08 ["COPY", "tmp:0:8", ["const:ad8:8"]]
+ 00bd2e08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd2e08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd2e08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-924d5ea3a2c408c28a2def1374e8f86e"></a>

### [`00bd2d80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2d80.md) → [`00bd2e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2e1c.md) _ZN8firebase4auth23firebase_auth_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd2da4",
      "incomplete_value": false,
      "site": "00bd2db8",
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
            "const:8cd:8"
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
      "unmatched:00bd2d80",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd2d84",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd2d94",
      "READ",
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
      "00bd2e1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd2e20",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd2e30",
      "READ",
      [
        "storage",
        "01126ac8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2db8 ["INT_ADD", "register:40f0:8", ["const:bd2db8:8", "const:4:8"]]
- 00bd2db8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2e54 ["INT_ADD", "register:40f0:8", ["const:bd2e54:8", "const:4:8"]]
+ 00bd2e54 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2d80 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd2d80 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd2d80 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd2d80 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd2d84 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd2d84 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd2d84 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd2d84 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-2f633375a1e8ea138f7ab91bf94b8e2b"></a>

### [`00bd2df0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2df0.md) → [`00bd2e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2e8c.md) _ZN8firebase4auth23firebase_auth_exception10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 46.67% / 新版 46.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd2ea0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd2e14"
      ]
    ],
    [
      "unmatched:00bd2e0c",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd2e10",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bd2ea0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd2eb0"
      ]
    ],
    [
      "00bd2ea8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd2eac",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2e0c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd2e0c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2e0c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd2e0c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd2e10 ["INT_ADD", "register:40f0:8", ["const:bd2e10:8", "const:4:8"]]
- 00bd2e10 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd2e14 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-5264ec991c933bc675c781c55d8e1bc2"></a>

### [`00bd2e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2e2c.md) → [`00bd2ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2ec8.md) _ZN8firebase4auth26firebase_network_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9al

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd2e58",
      "incomplete_value": true,
      "site": "00bd2e58",
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
    "old": {
      "definition_site": "00bd2e40",
      "incomplete_value": true,
      "site": "00bd2e40",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd2e4c",
      "incomplete_value": false,
      "site": "00bd2e50",
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
            "const:a57:8"
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
      "00bd2ed8",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2ee8",
      "PARAM",
      [
        "storage",
        "002bfa57",
        null,
        "string"
      ]
    ],
    [
      "00bd2ef4",
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
      "00bd2ed8",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2ee8",
      "PARAM",
      [
        "storage",
        "002bfa03",
        null,
        "string"
      ]
    ],
    [
      "00bd2ef4",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2e50 ["INT_ADD", "register:40f0:8", ["const:bd2e50:8", "const:4:8"]]
- 00bd2e50 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2eec ["INT_ADD", "register:40f0:8", ["const:bd2eec:8", "const:4:8"]]
+ 00bd2eec ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2e58 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
- 00bd2e58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2ef4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
+ 00bd2ef4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2e3c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
- 00bd2e3c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2ed8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
+ 00bd2ed8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9196c06da410dcad609dacf843fb20e3"></a>

### [`00bd2e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2e6c.md) → [`00bd2f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2f08.md) _ZN8firebase4auth26firebase_network_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9al

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd2e98",
      "incomplete_value": true,
      "site": "00bd2e98",
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
    "old": {
      "definition_site": "00bd2e80",
      "incomplete_value": true,
      "site": "00bd2e80",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd2e88",
      "incomplete_value": false,
      "site": "00bd2e90",
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
            "const:a57:8"
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
      "00bd2f18",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2f24",
      "PARAM",
      [
        "storage",
        "002bfa57",
        null,
        "string"
      ]
    ],
    [
      "00bd2f34",
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
      "00bd2f18",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2f24",
      "PARAM",
      [
        "storage",
        "002bfa03",
        null,
        "string"
      ]
    ],
    [
      "00bd2f34",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2e90 ["INT_ADD", "register:40f0:8", ["const:bd2e90:8", "const:4:8"]]
- 00bd2e90 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2f2c ["INT_ADD", "register:40f0:8", ["const:bd2f2c:8", "const:4:8"]]
+ 00bd2f2c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2e98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
- 00bd2e98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2f34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
+ 00bd2f34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2e7c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
- 00bd2e7c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2f18 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
+ 00bd2f18 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-47eeb142a3a8d1da7caa878e62b02f29"></a>

### [`00bd2eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2eac.md) → [`00bd2f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2f48.md) _ZN8firebase4auth26firebase_network_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd2edc",
      "incomplete_value": true,
      "site": "00bd2edc",
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
    "old": {
      "definition_site": "00bd2ec0",
      "incomplete_value": true,
      "site": "00bd2ec0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd2ecc",
      "incomplete_value": false,
      "site": "00bd2ed4",
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
            "const:a57:8"
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
      "00bd2f58",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2f68",
      "PARAM",
      [
        "storage",
        "002bfa57",
        null,
        "string"
      ]
    ],
    [
      "00bd2f78",
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
      "00bd2f58",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2f68",
      "PARAM",
      [
        "storage",
        "002bfa03",
        null,
        "string"
      ]
    ],
    [
      "00bd2f78",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2ed4 ["INT_ADD", "register:40f0:8", ["const:bd2ed4:8", "const:4:8"]]
- 00bd2ed4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2f70 ["INT_ADD", "register:40f0:8", ["const:bd2f70:8", "const:4:8"]]
+ 00bd2f70 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2edc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
- 00bd2edc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2f78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
+ 00bd2f78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2ebc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
- 00bd2ebc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2f58 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
+ 00bd2f58 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e407bf9b44babc17c8116616494c7869"></a>

### [`00bd2ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2ef0.md) → [`00bd2f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2f8c.md) _ZN8firebase4auth26firebase_network_exception10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd2f20",
      "incomplete_value": true,
      "site": "00bd2f20",
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
    "old": {
      "definition_site": "00bd2f04",
      "incomplete_value": true,
      "site": "00bd2f04",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd2f0c",
      "incomplete_value": false,
      "site": "00bd2f18",
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
            "const:a57:8"
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
      "00bd2f9c",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2fa8",
      "PARAM",
      [
        "storage",
        "002bfa57",
        null,
        "string"
      ]
    ],
    [
      "00bd2fbc",
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
      "00bd2f9c",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd2fa8",
      "PARAM",
      [
        "storage",
        "002bfa03",
        null,
        "string"
      ]
    ],
    [
      "00bd2fbc",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2f18 ["INT_ADD", "register:40f0:8", ["const:bd2f18:8", "const:4:8"]]
- 00bd2f18 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd2fb4 ["INT_ADD", "register:40f0:8", ["const:bd2fb4:8", "const:4:8"]]
+ 00bd2fb4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd2f20 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
- 00bd2f20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd2fbc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
+ 00bd2fbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd2f00 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9e8:8"]]
- 00bd2f00 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2f9c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ae8:8"]]
+ 00bd2f9c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2118df6d284e2caf40d13867b9eaf0df"></a>

### [`00bd2f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2f40.md) → [`00bd2fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd2/00bd2fdc.md) _ZN8firebase4auth26firebase_network_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd2f98",
      "incomplete_value": true,
      "site": "00bd2f98",
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
    "old": {
      "definition_site": "00bd2f74",
      "incomplete_value": true,
      "site": "00bd2f80",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd2ff0",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3010",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3034",
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
      "00bd2ff0",
      "READ",
      [
        "storage",
        "01126af0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3010",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3034",
      "WRITE",
      [
        "storage",
        "01126af0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2f80 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd2f80 ["INT_ADD", "register:40f0:8", ["const:bd2f80:8", "const:4:8"]]
- 00bd2f80 ["CALLIND", null, ["register:0:8"]]
+ 00bd301c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd301c ["INT_ADD", "register:40f0:8", ["const:bd301c:8", "const:4:8"]]
+ 00bd301c ["CALLIND", null, ["register:0:8"]]
- 00bd2f98 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd2f98 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9f0:8"]]
- 00bd2f98 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd3034 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd3034 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:af0:8"]]
+ 00bd3034 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd2f54 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:9f0:8"]]
- 00bd2f54 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd2f54 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd2ff0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:af0:8"]]
+ 00bd2ff0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd2ff0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-8723b4b1947682a62d19e4e6780459bd"></a>

### [`00bd2fac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd2/00bd2fac.md) → [`00bd3048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3048.md) _ZN8firebase4auth26firebase_network_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

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
    "old": {
      "definition_site": "00bd2fe8",
      "incomplete_value": true,
      "site": "00bd2fe8",
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
    "old": {
      "definition_site": "00bd3008",
      "incomplete_value": true,
      "site": "00bd3008",
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
    "old": {
      "definition_site": "00bd2fc4",
      "incomplete_value": true,
      "site": "00bd2fc4",
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
      "00bd305c",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3068",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3084",
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
      "00bd305c",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3068",
      "READ",
      [
        "storage",
        "01126af0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3084",
      "WRITE",
      [
        "storage",
        "01126af0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd2fe8 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd2fe8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd2fe8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9f0:8"]]
- 00bd2fe8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd3084 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd3084 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd3084 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:af0:8"]]
+ 00bd3084 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd3004 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd3004 ["INT_ADD", "register:40f0:8", ["const:bd3004:8", "const:4:8"]]
- 00bd3004 ["CALLIND", null, ["register:0:8"]]
+ 00bd30a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd30a0 ["INT_ADD", "register:40f0:8", ["const:bd30a0:8", "const:4:8"]]
+ 00bd30a0 ["CALLIND", null, ["register:0:8"]]
- 00bd3008 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
- 00bd3008 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd3008 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd30a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
+ 00bd30a4 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd30a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-24f19e17c301d1b75f32090a2547c64b"></a>

### [`00bd301c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd301c.md) → [`00bd30b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd30b8.md) _ZN8firebase4auth26firebase_network_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd305c",
      "incomplete_value": true,
      "site": "00bd305c",
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
    "old": {
      "definition_site": "00bd3038",
      "incomplete_value": true,
      "site": "00bd3038",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd3040",
      "incomplete_value": false,
      "site": "00bd3054",
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
            "const:a57:8"
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
      "00bd30cc",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd30dc",
      "PARAM",
      [
        "storage",
        "002bfa57",
        null,
        "string"
      ]
    ],
    [
      "00bd30f8",
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
      "00bd30cc",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd30dc",
      "PARAM",
      [
        "storage",
        "002bfa03",
        null,
        "string"
      ]
    ],
    [
      "00bd30f8",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3054 ["INT_ADD", "register:40f0:8", ["const:bd3054:8", "const:4:8"]]
- 00bd3054 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd30f0 ["INT_ADD", "register:40f0:8", ["const:bd30f0:8", "const:4:8"]]
+ 00bd30f0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd305c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
- 00bd305c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd30f8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
+ 00bd30f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd3030 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
- 00bd3030 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd30cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
+ 00bd30cc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-861835490d304c8cb2d993333b7ff86a"></a>

### [`00bd308c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd308c.md) → [`00bd3128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3128.md) _ZN8firebase4auth26firebase_network_exception11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd30a8",
      "incomplete_value": false,
      "site": "00bd30ac",
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
            "const:367:8"
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
    "old": {
      "definition_site": "00bd30b8",
      "incomplete_value": true,
      "site": "00bd30c4",
      "value": [
        "LOAD",
        "8",
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
      "00bd3144",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd3154",
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
      "00bd3144",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd3154",
      "DATA",
      [
        "storage",
        "01126af8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd30ac ["INT_ADD", "register:40f0:8", ["const:bd30ac:8", "const:4:8"]]
- 00bd30ac ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd3148 ["INT_ADD", "register:40f0:8", ["const:bd3148:8", "const:4:8"]]
+ 00bd3148 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd30a8 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd30a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd30a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd30a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd3144 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd3144 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3144 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3144 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd30b4 ["COPY", "tmp:0:8", ["const:9f8:8"]]
- 00bd30b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd30b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd30b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd3150 ["COPY", "tmp:0:8", ["const:af8:8"]]
+ 00bd3150 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd3150 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd3150 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a8286871ffae3bcad2527d743e33d38d"></a>

### [`00bd30c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd30c8.md) → [`00bd3164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3164.md) _ZN8firebase4auth26firebase_network_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd3108",
      "incomplete_value": true,
      "site": "00bd3108",
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
    "old": {
      "definition_site": "00bd30e4",
      "incomplete_value": true,
      "site": "00bd30e4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd30ec",
      "incomplete_value": false,
      "site": "00bd3100",
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
            "const:a57:8"
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
      "00bd3178",
      "READ",
      [
        "storage",
        "011269e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3188",
      "PARAM",
      [
        "storage",
        "002bfa57",
        null,
        "string"
      ]
    ],
    [
      "00bd31a4",
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
      "00bd3178",
      "READ",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3188",
      "PARAM",
      [
        "storage",
        "002bfa03",
        null,
        "string"
      ]
    ],
    [
      "00bd31a4",
      "WRITE",
      [
        "storage",
        "01126ae8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3100 ["INT_ADD", "register:40f0:8", ["const:bd3100:8", "const:4:8"]]
- 00bd3100 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd319c ["INT_ADD", "register:40f0:8", ["const:bd319c:8", "const:4:8"]]
+ 00bd319c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd3108 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
- 00bd3108 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd31a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
+ 00bd31a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd30dc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9e8:8"]]
- 00bd30dc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd3178 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ae8:8"]]
+ 00bd3178 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1ffc040b4b9ccee0dbcb4d64abf3b803"></a>

### [`00bd3138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd3138.md) → [`00bd31d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd31d4.md) _ZN8firebase4auth26firebase_network_exception10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd3154",
      "incomplete_value": false,
      "site": "00bd3158",
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
            "const:51e:8"
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
    "old": {
      "definition_site": "00bd3164",
      "incomplete_value": true,
      "site": "00bd3170",
      "value": [
        "LOAD",
        "8",
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
      "00bd31f0",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd3200",
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
      "00bd31f0",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd3200",
      "DATA",
      [
        "storage",
        "01126b00",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3158 ["INT_ADD", "register:40f0:8", ["const:bd3158:8", "const:4:8"]]
- 00bd3158 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd31f4 ["INT_ADD", "register:40f0:8", ["const:bd31f4:8", "const:4:8"]]
+ 00bd31f4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd3154 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd3154 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd3154 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd3154 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd31f0 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd31f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd31f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd31f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd3160 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 00bd3160 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd3160 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd3160 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd31fc ["COPY", "tmp:0:8", ["const:b00:8"]]
+ 00bd31fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd31fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd31fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cfb3ff8bbadc92aee894f10b8c39bf76"></a>

### [`00bd3174`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd3174.md) → [`00bd3210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3210.md) _ZN8firebase4auth27too_many_requests_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9a

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd31a0",
      "incomplete_value": true,
      "site": "00bd31a0",
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
    "old": {
      "definition_site": "00bd3188",
      "incomplete_value": true,
      "site": "00bd3188",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd3194",
      "incomplete_value": false,
      "site": "00bd3198",
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
            "const:c19:8"
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
      "00bd3220",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3230",
      "PARAM",
      [
        "storage",
        "002b5c19",
        null,
        "string"
      ]
    ],
    [
      "00bd323c",
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
      "00bd3220",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3230",
      "PARAM",
      [
        "storage",
        "002b5c59",
        null,
        "string"
      ]
    ],
    [
      "00bd323c",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3198 ["INT_ADD", "register:40f0:8", ["const:bd3198:8", "const:4:8"]]
- 00bd3198 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd3234 ["INT_ADD", "register:40f0:8", ["const:bd3234:8", "const:4:8"]]
+ 00bd3234 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd31a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00bd31a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd323c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
+ 00bd323c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd3184 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00bd3184 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd3220 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
+ 00bd3220 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f0f5fd52f4972b5d12daf9125db7be80"></a>

### [`00bd31b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd31b4.md) → [`00bd3250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3250.md) _ZN8firebase4auth27too_many_requests_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9a

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd31e0",
      "incomplete_value": true,
      "site": "00bd31e0",
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
    "old": {
      "definition_site": "00bd31c8",
      "incomplete_value": true,
      "site": "00bd31c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd31d0",
      "incomplete_value": false,
      "site": "00bd31d8",
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
            "const:c19:8"
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
      "00bd3260",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd326c",
      "PARAM",
      [
        "storage",
        "002b5c19",
        null,
        "string"
      ]
    ],
    [
      "00bd327c",
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
      "00bd3260",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd326c",
      "PARAM",
      [
        "storage",
        "002b5c59",
        null,
        "string"
      ]
    ],
    [
      "00bd327c",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd31d8 ["INT_ADD", "register:40f0:8", ["const:bd31d8:8", "const:4:8"]]
- 00bd31d8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd3274 ["INT_ADD", "register:40f0:8", ["const:bd3274:8", "const:4:8"]]
+ 00bd3274 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd31e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00bd31e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd327c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
+ 00bd327c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd31c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00bd31c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd3260 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
+ 00bd3260 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7c643d91f80e19ed2ae4753dc2abd8b1"></a>

### [`00bd31f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd31f4.md) → [`00bd3290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3290.md) _ZN8firebase4auth27too_many_requests_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd3224",
      "incomplete_value": true,
      "site": "00bd3224",
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
    "old": {
      "definition_site": "00bd3208",
      "incomplete_value": true,
      "site": "00bd3208",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd3214",
      "incomplete_value": false,
      "site": "00bd321c",
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
            "const:c19:8"
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
      "00bd32a0",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd32b0",
      "PARAM",
      [
        "storage",
        "002b5c19",
        null,
        "string"
      ]
    ],
    [
      "00bd32c0",
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
      "00bd32a0",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd32b0",
      "PARAM",
      [
        "storage",
        "002b5c59",
        null,
        "string"
      ]
    ],
    [
      "00bd32c0",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd321c ["INT_ADD", "register:40f0:8", ["const:bd321c:8", "const:4:8"]]
- 00bd321c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd32b8 ["INT_ADD", "register:40f0:8", ["const:bd32b8:8", "const:4:8"]]
+ 00bd32b8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd3224 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00bd3224 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd32c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
+ 00bd32c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd3204 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00bd3204 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd32a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
+ 00bd32a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d9579fbeb16dbeedbafd0b2b65fa4183"></a>

### [`00bd3238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd3238.md) → [`00bd32d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd32d4.md) _ZN8firebase4auth27too_many_requests_exception10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd3268",
      "incomplete_value": true,
      "site": "00bd3268",
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
    "old": {
      "definition_site": "00bd324c",
      "incomplete_value": true,
      "site": "00bd324c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd3254",
      "incomplete_value": false,
      "site": "00bd3260",
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
            "const:c19:8"
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
      "00bd32e4",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd32f0",
      "PARAM",
      [
        "storage",
        "002b5c19",
        null,
        "string"
      ]
    ],
    [
      "00bd3304",
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
      "00bd32e4",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd32f0",
      "PARAM",
      [
        "storage",
        "002b5c59",
        null,
        "string"
      ]
    ],
    [
      "00bd3304",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3260 ["INT_ADD", "register:40f0:8", ["const:bd3260:8", "const:4:8"]]
- 00bd3260 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd32fc ["INT_ADD", "register:40f0:8", ["const:bd32fc:8", "const:4:8"]]
+ 00bd32fc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd3268 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00bd3268 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3304 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
+ 00bd3304 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd3248 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00bd3248 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd32e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b08:8"]]
+ 00bd32e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-99744d9e4962505f54adef713fca40d9"></a>

### [`00bd3288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd3288.md) → [`00bd3324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3324.md) _ZN8firebase4auth27too_many_requests_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd32e0",
      "incomplete_value": true,
      "site": "00bd32e0",
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
    "old": {
      "definition_site": "00bd32bc",
      "incomplete_value": true,
      "site": "00bd32c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd3338",
      "READ",
      [
        "storage",
        "01126a10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3358",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd337c",
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
      "00bd3338",
      "READ",
      [
        "storage",
        "01126b10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3358",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd337c",
      "WRITE",
      [
        "storage",
        "01126b10",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd32c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd32c8 ["INT_ADD", "register:40f0:8", ["const:bd32c8:8", "const:4:8"]]
- 00bd32c8 ["CALLIND", null, ["register:0:8"]]
+ 00bd3364 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd3364 ["INT_ADD", "register:40f0:8", ["const:bd3364:8", "const:4:8"]]
+ 00bd3364 ["CALLIND", null, ["register:0:8"]]
- 00bd32e0 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd32e0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a10:8"]]
- 00bd32e0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd337c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd337c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b10:8"]]
+ 00bd337c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd329c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a10:8"]]
- 00bd329c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd329c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd3338 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b10:8"]]
+ 00bd3338 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd3338 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-78fc6e63dd30b36131ddd87b769e7125"></a>

### [`00bd32f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd32f4.md) → [`00bd3390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3390.md) _ZN8firebase4auth27too_many_requests_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

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
    "old": {
      "definition_site": "00bd3330",
      "incomplete_value": true,
      "site": "00bd3330",
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
    "old": {
      "definition_site": "00bd3350",
      "incomplete_value": true,
      "site": "00bd3350",
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
    "old": {
      "definition_site": "00bd330c",
      "incomplete_value": true,
      "site": "00bd330c",
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
      "00bd33a4",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd33b0",
      "READ",
      [
        "storage",
        "01126a10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd33cc",
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
      "00bd33a4",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd33b0",
      "READ",
      [
        "storage",
        "01126b10",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd33cc",
      "WRITE",
      [
        "storage",
        "01126b10",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3330 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd3330 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd3330 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a10:8"]]
- 00bd3330 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd33cc ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd33cc ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd33cc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b10:8"]]
+ 00bd33cc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd334c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd334c ["INT_ADD", "register:40f0:8", ["const:bd334c:8", "const:4:8"]]
- 00bd334c ["CALLIND", null, ["register:0:8"]]
+ 00bd33e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd33e8 ["INT_ADD", "register:40f0:8", ["const:bd33e8:8", "const:4:8"]]
+ 00bd33e8 ["CALLIND", null, ["register:0:8"]]
- 00bd3350 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
- 00bd3350 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd3350 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd33ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
+ 00bd33ec ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd33ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-87265fa455b40fbdd0b13eb8d15fad73"></a>

### [`00bd3364`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd3364.md) → [`00bd3400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3400.md) _ZN8firebase4auth27too_many_requests_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd33a4",
      "incomplete_value": true,
      "site": "00bd33a4",
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
    "old": {
      "definition_site": "00bd3380",
      "incomplete_value": true,
      "site": "00bd3380",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd3388",
      "incomplete_value": false,
      "site": "00bd339c",
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
            "const:c19:8"
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
      "00bd3414",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3424",
      "PARAM",
      [
        "storage",
        "002b5c19",
        null,
        "string"
      ]
    ],
    [
      "00bd3440",
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
      "00bd3414",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3424",
      "PARAM",
      [
        "storage",
        "002b5c59",
        null,
        "string"
      ]
    ],
    [
      "00bd3440",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd339c ["INT_ADD", "register:40f0:8", ["const:bd339c:8", "const:4:8"]]
- 00bd339c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd3438 ["INT_ADD", "register:40f0:8", ["const:bd3438:8", "const:4:8"]]
+ 00bd3438 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd33a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
- 00bd33a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3440 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
+ 00bd3440 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd3378 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
- 00bd3378 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd3414 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
+ 00bd3414 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-50cc7635f5d9aeb9ff93c0c362c95dac"></a>

### [`00bd33d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd33d4.md) → [`00bd3470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3470.md) _ZN8firebase4auth27too_many_requests_exception11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd33f0",
      "incomplete_value": false,
      "site": "00bd33f4",
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
            "const:367:8"
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
    "old": {
      "definition_site": "00bd3400",
      "incomplete_value": true,
      "site": "00bd340c",
      "value": [
        "LOAD",
        "8",
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
      "00bd348c",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd349c",
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
      "00bd348c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd349c",
      "DATA",
      [
        "storage",
        "01126b18",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd33f4 ["INT_ADD", "register:40f0:8", ["const:bd33f4:8", "const:4:8"]]
- 00bd33f4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd3490 ["INT_ADD", "register:40f0:8", ["const:bd3490:8", "const:4:8"]]
+ 00bd3490 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd33f0 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd33f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd33f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd33f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd348c ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd348c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd348c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd348c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd33fc ["COPY", "tmp:0:8", ["const:a18:8"]]
- 00bd33fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd33fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd33fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd3498 ["COPY", "tmp:0:8", ["const:b18:8"]]
+ 00bd3498 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd3498 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd3498 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-090d1b930a245cb7cdbb9ca0fbfbc909"></a>

### [`00bd3410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd3410.md) → [`00bd34ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd34ac.md) _ZN8firebase4auth27too_many_requests_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd3450",
      "incomplete_value": true,
      "site": "00bd3450",
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
    "old": {
      "definition_site": "00bd342c",
      "incomplete_value": true,
      "site": "00bd342c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd3434",
      "incomplete_value": false,
      "site": "00bd3448",
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
            "const:c19:8"
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
      "00bd34c0",
      "READ",
      [
        "storage",
        "01126a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd34d0",
      "PARAM",
      [
        "storage",
        "002b5c19",
        null,
        "string"
      ]
    ],
    [
      "00bd34ec",
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
      "00bd34c0",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd34d0",
      "PARAM",
      [
        "storage",
        "002b5c59",
        null,
        "string"
      ]
    ],
    [
      "00bd34ec",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3448 ["INT_ADD", "register:40f0:8", ["const:bd3448:8", "const:4:8"]]
- 00bd3448 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd34e4 ["INT_ADD", "register:40f0:8", ["const:bd34e4:8", "const:4:8"]]
+ 00bd34e4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd3450 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
- 00bd3450 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd34ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
+ 00bd34ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd3424 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
- 00bd3424 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd34c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
+ 00bd34c0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-891860d2caed2b5427d9e12954adaf00"></a>

### [`00bd3480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd3480.md) → [`00bd351c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd351c.md) _ZN8firebase4auth27too_many_requests_exception10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd349c",
      "incomplete_value": false,
      "site": "00bd34a0",
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
            "const:51e:8"
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
    "old": {
      "definition_site": "00bd34ac",
      "incomplete_value": true,
      "site": "00bd34b8",
      "value": [
        "LOAD",
        "8",
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
      "00bd3538",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd3548",
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
      "00bd3538",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd3548",
      "DATA",
      [
        "storage",
        "01126b20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd34a0 ["INT_ADD", "register:40f0:8", ["const:bd34a0:8", "const:4:8"]]
- 00bd34a0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd353c ["INT_ADD", "register:40f0:8", ["const:bd353c:8", "const:4:8"]]
+ 00bd353c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd349c ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd349c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd349c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd349c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd3538 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd3538 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3538 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3538 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd34a8 ["COPY", "tmp:0:8", ["const:a20:8"]]
- 00bd34a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd34a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd34a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd3544 ["COPY", "tmp:0:8", ["const:b20:8"]]
+ 00bd3544 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd3544 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd3544 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-15a943a5586f464cee795236101f01a9"></a>

### [`00bd34bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd34bc.md) → [`00bd3558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3558.md) _ZN8firebase4auth18firebase_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorI

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd34e8",
      "incomplete_value": true,
      "site": "00bd34e8",
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
    "old": {
      "definition_site": "00bd34d0",
      "incomplete_value": true,
      "site": "00bd34d0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd34dc",
      "incomplete_value": false,
      "site": "00bd34e0",
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
            "const:d37:8"
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
      "00bd3568",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3578",
      "PARAM",
      [
        "storage",
        "002a2d37",
        null,
        "string"
      ]
    ],
    [
      "00bd3584",
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
      "00bd3568",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3578",
      "PARAM",
      [
        "storage",
        "002a2cea",
        null,
        "string"
      ]
    ],
    [
      "00bd3584",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd34e0 ["INT_ADD", "register:40f0:8", ["const:bd34e0:8", "const:4:8"]]
- 00bd34e0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd357c ["INT_ADD", "register:40f0:8", ["const:bd357c:8", "const:4:8"]]
+ 00bd357c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd34e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
- 00bd34e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3584 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd3584 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd34cc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
- 00bd34cc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd3568 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd3568 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-23dbc9d25ff7445ee7d150cbd56af1d4"></a>

### [`00bd34fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd34fc.md) → [`00bd3598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3598.md) _ZN8firebase4auth18firebase_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorI

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd3528",
      "incomplete_value": true,
      "site": "00bd3528",
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
    "old": {
      "definition_site": "00bd3510",
      "incomplete_value": true,
      "site": "00bd3510",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd3518",
      "incomplete_value": false,
      "site": "00bd3520",
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
            "const:d37:8"
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
      "00bd35a8",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd35b4",
      "PARAM",
      [
        "storage",
        "002a2d37",
        null,
        "string"
      ]
    ],
    [
      "00bd35c4",
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
      "00bd35a8",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd35b4",
      "PARAM",
      [
        "storage",
        "002a2cea",
        null,
        "string"
      ]
    ],
    [
      "00bd35c4",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3520 ["INT_ADD", "register:40f0:8", ["const:bd3520:8", "const:4:8"]]
- 00bd3520 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd35bc ["INT_ADD", "register:40f0:8", ["const:bd35bc:8", "const:4:8"]]
+ 00bd35bc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd3528 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
- 00bd3528 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd35c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd35c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd350c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
- 00bd350c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd35a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd35a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a1ae24fcb9b7143e02ce9a1e5730c74d"></a>

### [`00bd353c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd353c.md) → [`00bd35d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd35d8.md) _ZN8firebase4auth18firebase_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd356c",
      "incomplete_value": true,
      "site": "00bd356c",
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
    "old": {
      "definition_site": "00bd3550",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd355c",
      "incomplete_value": false,
      "site": "00bd3564",
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
            "const:d37:8"
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
      "00bd35e8",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd35f8",
      "PARAM",
      [
        "storage",
        "002a2d37",
        null,
        "string"
      ]
    ],
    [
      "00bd3608",
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
      "00bd35e8",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd35f8",
      "PARAM",
      [
        "storage",
        "002a2cea",
        null,
        "string"
      ]
    ],
    [
      "00bd3608",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3564 ["INT_ADD", "register:40f0:8", ["const:bd3564:8", "const:4:8"]]
- 00bd3564 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd3600 ["INT_ADD", "register:40f0:8", ["const:bd3600:8", "const:4:8"]]
+ 00bd3600 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd356c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
- 00bd356c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd3608 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd3608 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd354c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
- 00bd354c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd35e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd35e8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-20c3dd43ca4b29f03681d4eaf7370510"></a>

### [`00bd3580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd3580.md) → [`00bd361c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd361c.md) _ZN8firebase4auth18firebase_exception10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

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
    "old": {
      "definition_site": "00bd35b0",
      "incomplete_value": true,
      "site": "00bd35b0",
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
    "old": {
      "definition_site": "00bd3594",
      "incomplete_value": true,
      "site": "00bd3594",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00bd359c",
      "incomplete_value": false,
      "site": "00bd35a8",
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
            "const:d37:8"
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
      "00bd362c",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3638",
      "PARAM",
      [
        "storage",
        "002a2d37",
        null,
        "string"
      ]
    ],
    [
      "00bd364c",
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
      "00bd362c",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3638",
      "PARAM",
      [
        "storage",
        "002a2cea",
        null,
        "string"
      ]
    ],
    [
      "00bd364c",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd35a8 ["INT_ADD", "register:40f0:8", ["const:bd35a8:8", "const:4:8"]]
- 00bd35a8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd3644 ["INT_ADD", "register:40f0:8", ["const:bd3644:8", "const:4:8"]]
+ 00bd3644 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd35b0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
- 00bd35b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd364c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd364c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd3590 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a28:8"]]
- 00bd3590 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd362c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00bd362c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3aabf729c72cd9fb809678cbe6a94d7d"></a>

### [`00bd35d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd35d0.md) → [`00bd366c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd366c.md) _ZN8firebase4auth18firebase_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_return_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd3628",
      "incomplete_value": true,
      "site": "00bd3628",
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
    "old": {
      "definition_site": "00bd3604",
      "incomplete_value": true,
      "site": "00bd3610",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd3680",
      "READ",
      [
        "storage",
        "01126a30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd368c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd362c"
      ]
    ],
    [
      "00bd36a0",
      "READ",
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
      "00bd3680",
      "READ",
      [
        "storage",
        "01126b30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd368c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd36c8"
      ]
    ],
    [
      "00bd36a0",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3610 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd3610 ["INT_ADD", "register:40f0:8", ["const:bd3610:8", "const:4:8"]]
- 00bd3610 ["CALLIND", null, ["register:0:8"]]
+ 00bd36ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd36ac ["INT_ADD", "register:40f0:8", ["const:bd36ac:8", "const:4:8"]]
+ 00bd36ac ["CALLIND", null, ["register:0:8"]]
- 00bd3628 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd3628 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a30:8"]]
- 00bd3628 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd36c4 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd36c4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b30:8"]]
+ 00bd36c4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd35e4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a30:8"]]
- 00bd35e4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd35e4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd3680 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b30:8"]]
+ 00bd3680 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd3680 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-22b3f6838795758119e1c906faa10b25"></a>

### [`00bd363c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd363c.md) → [`00bd36d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd36d8.md) _ZN8firebase4auth18firebase_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_value, call_argument_candidate, constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

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
      "definition_site": "00bd3678",
      "incomplete_value": true,
      "site": "00bd3678",
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
    "old": {
      "definition_site": "00bd3698",
      "incomplete_value": true,
      "site": "00bd3698",
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
    "old": {
      "definition_site": "00bd3654",
      "incomplete_value": true,
      "site": "00bd3654",
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
      "00bd36ec",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd36f8",
      "READ",
      [
        "storage",
        "01126a30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3714",
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
      "00bd36ec",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd36f8",
      "READ",
      [
        "storage",
        "01126b30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd3714",
      "WRITE",
      [
        "storage",
        "01126b30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3678 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd3678 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd3678 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a30:8"]]
- 00bd3678 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd3714 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd3714 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd3714 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b30:8"]]
+ 00bd3714 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd3694 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd3694 ["INT_ADD", "register:40f0:8", ["const:bd3694:8", "const:4:8"]]
- 00bd3694 ["CALLIND", null, ["register:0:8"]]
+ 00bd3730 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd3730 ["INT_ADD", "register:40f0:8", ["const:bd3730:8", "const:4:8"]]
+ 00bd3730 ["CALLIND", null, ["register:0:8"]]
- 00bd3698 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
- 00bd3698 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd3698 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd3734 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b28:8"]]
+ 00bd3734 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd3734 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-abe5b2c80b25b29e78e28b90364d1733"></a>

### [`00bd36ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd36ac.md) → [`00bd3748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3748.md) _ZN8firebase4auth18firebase_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd36d0",
      "incomplete_value": false,
      "site": "00bd36e4",
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
            "const:d37:8"
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
      "unmatched:00bd36c0",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd36c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd378c"
      ]
    ],
    [
      "unmatched:00bd36d0",
      "PARAM",
      [
        "storage",
        "002a2d37",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd375c",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3764",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd378c"
      ]
    ],
    [
      "00bd376c",
      "PARAM",
      [
        "storage",
        "002a2cea",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd36e4 ["INT_ADD", "register:40f0:8", ["const:bd36e4:8", "const:4:8"]]
- 00bd36e4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd3780 ["INT_ADD", "register:40f0:8", ["const:bd3780:8", "const:4:8"]]
+ 00bd3780 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd36c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
- 00bd36c0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd36c4 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-3c9c392069786d0d5bd41baece08262f"></a>

### [`00bd371c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd371c.md) → [`00bd37b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd37b8.md) _ZN8firebase4auth18firebase_exception11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd3738",
      "incomplete_value": false,
      "site": "00bd373c",
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
            "const:367:8"
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
    "old": {
      "definition_site": "00bd3748",
      "incomplete_value": true,
      "site": "00bd3754",
      "value": [
        "LOAD",
        "8",
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
      "00bd37d4",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd37e4",
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
      "00bd37d4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd37e4",
      "DATA",
      [
        "storage",
        "01126b38",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd373c ["INT_ADD", "register:40f0:8", ["const:bd373c:8", "const:4:8"]]
- 00bd373c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd37d8 ["INT_ADD", "register:40f0:8", ["const:bd37d8:8", "const:4:8"]]
+ 00bd37d8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd3738 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd3738 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd3738 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd3738 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd37d4 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd37d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd37d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd37d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd3744 ["COPY", "tmp:0:8", ["const:a38:8"]]
- 00bd3744 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd3744 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd3744 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd37e0 ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 00bd37e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd37e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd37e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-521f30fbf0953324f6952755839b732d"></a>

### [`00bd3758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd3758.md) → [`00bd37f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd37f4.md) _ZN8firebase4auth18firebase_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd381c",
      "incomplete_value": true,
      "site": "00bd382c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": null,
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
      "unmatched:00bd376c",
      "READ",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd3774",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd3838"
      ]
    ],
    [
      "unmatched:00bd377c",
      "PARAM",
      [
        "storage",
        "002a2d37",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd3808",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd3810",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd3838"
      ]
    ],
    [
      "00bd3818",
      "PARAM",
      [
        "storage",
        "002a2cea",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3790 ["INT_ADD", "register:40f0:8", ["const:bd3790:8", "const:4:8"]]
- 00bd3790 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd382c ["INT_ADD", "register:40f0:8", ["const:bd382c:8", "const:4:8"]]
+ 00bd382c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd376c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a28:8"]]
- 00bd376c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd3770 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-2c803f3a2c8f331cfea32fe50e7f5b43"></a>

### [`00bd37c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd37c8.md) → [`00bd3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd3864.md) _ZN8firebase4auth18firebase_exception10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd37e4",
      "incomplete_value": false,
      "site": "00bd37e8",
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
            "const:51e:8"
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
    "old": {
      "definition_site": "00bd37f4",
      "incomplete_value": true,
      "site": "00bd3800",
      "value": [
        "LOAD",
        "8",
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
      "00bd3880",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd3890",
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
      "00bd3880",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd3890",
      "DATA",
      [
        "storage",
        "01126b40",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd37e8 ["INT_ADD", "register:40f0:8", ["const:bd37e8:8", "const:4:8"]]
- 00bd37e8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd3884 ["INT_ADD", "register:40f0:8", ["const:bd3884:8", "const:4:8"]]
+ 00bd3884 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd37e4 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd37e4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd37e4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd37e4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd3880 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd3880 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3880 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd3880 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd37f0 ["COPY", "tmp:0:8", ["const:a40:8"]]
- 00bd37f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd37f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd37f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd388c ["COPY", "tmp:0:8", ["const:b40:8"]]
+ 00bd388c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd388c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd388c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-14d9f5a633997f078750ab0592e45188"></a>

### [`00bd3804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd3/00bd3804.md) → [`00bd38a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd3/00bd38a0.md) _ZN8firebase4auth20CacheCommonMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dc90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dc90.md) · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5dd60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd60.md) · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 24.49% / 新版 24.49%

優先判定に残った影響 `call_argument_candidate` 16件, `store_destination` 1件, `unresolved_branch_alignment` 25件, `unresolved_call_alignment` 20件, `unresolved_store_alignment` 9件

アドレスに依存する影響 `branch_value` 2件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd3d04",
      "incomplete_value": true,
      "site": "00bd3d04",
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
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd3950",
      "incomplete_value": true,
      "site": "00bd3950",
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
            "const:8a8:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd3918",
      "incomplete_value": true,
      "site": "00bd3918",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd387c",
      "incomplete_value": true,
      "site": "00bd387c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bd3ce0",
      "incomplete_value": true,
      "site": "00bd3ce0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd392c",
      "incomplete_value": true,
      "site": "00bd392c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "unmatched:00bd381c",
      "READ",
      [
        "storage",
        "011269a8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd3824",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd38ec"
      ]
    ],
    [
      "unmatched:00bd382c",
      "PARAM",
      [
        "storage",
        "002a0d55",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd38b8",
      "READ",
      [
        "storage",
        "01126aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd38c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd38ec"
      ]
    ],
    [
      "00bd38c8",
      "PARAM",
      [
        "storage",
        "002a0d08",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd3840 ["INT_ADD", "register:40f0:8", ["const:bd3840:8", "const:4:8"]]
- 00bd3840 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd38dc ["INT_ADD", "register:40f0:8", ["const:bd38dc:8", "const:4:8"]]
+ 00bd38dc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd3870 ["INT_ADD", "register:40f0:8", ["const:bd3870:8", "const:4:8"]]
- 00bd3870 ["CALL", null, ["callee:00c5b000:8"]]
+ 00bd390c ["INT_ADD", "register:40f0:8", ["const:bd390c:8", "const:4:8"]]
+ 00bd390c ["CALL", null, ["callee:00c5b000:8"]]
- 00bd38dc ["COPY", "tmp:0:8", ["const:2da:8"]]
- 00bd38dc ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd38dc ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd38dc ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


