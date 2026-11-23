# v16.0.2 → v16.0.3 · 最優先の変更候補 (84)

[一覧の目次](README.md)

<a id="compare-c7ca43421d0daa4c08692c1f2decd527"></a>

### [`00b4041c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4041c.md) → [`00b41410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41410.md) FUN_00b41410

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b40010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40010.md) · 呼出先 3件 [`00c5aa10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa10.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5adb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5adb0.md)
- 新版 呼出元 1件 [`00b41004`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41004.md) · 呼出先 3件 [`00c5b9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b9e0.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5bd80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4141c",
      "incomplete_value": false,
      "site": "00b41420",
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
            "const:d3e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40428",
      "incomplete_value": false,
      "site": "00b4042c",
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
            "const:c73:8"
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
      "00b4141c",
      "PARAM",
      [
        "storage",
        "002a4c73",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4141c",
      "PARAM",
      [
        "storage",
        "002a4d3e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4042c ["INT_ADD", "register:40f0:8", ["const:b4042c:8", "const:4:8"]]
- 00b4042c ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b41420 ["INT_ADD", "register:40f0:8", ["const:b41420:8", "const:4:8"]]
+ 00b41420 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b40428 ["COPY", "tmp:0:8", ["const:c73:8"]]
- 00b40428 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b40428 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b40428 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4141c ["COPY", "tmp:0:8", ["const:d3e:8"]]
+ 00b4141c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4141c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4141c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b40430 ["INT_ADD", "register:40f0:8", ["const:b40430:8", "const:4:8"]]
- 00b40430 ["CALL", null, ["callee:00c5bd80:8"]]
+ 00b41424 ["INT_ADD", "register:40f0:8", ["const:b41424:8", "const:4:8"]]
+ 00b41424 ["CALL", null, ["callee:00c5bd80:8"]]
~~~


<a id="compare-20eefc9bf519f1262fe623e67dc1db46"></a>

### [`00b40448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40448.md) → [`00b4143c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b4143c.md) _INIT_277

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00b3ff0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3ff0c.md) [`00b3ff40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3ff40.md) [`00c5ac90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00b40f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b40f00.md) [`00b40f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b40f34.md) [`00c5bc60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc60.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 41.67% / 新版 41.67%

優先判定に残った影響 `store_destination` 4件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4145c",
      "incomplete_value": false,
      "site": "00b4145c",
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
            "const:3c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40468",
      "incomplete_value": false,
      "site": "00b40468",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:408:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b4145c",
      "incomplete_value": false,
      "site": "00b4145c",
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
            "const:459:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40468",
      "incomplete_value": false,
      "site": "00b40468",
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
            "const:301:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4145c",
      "incomplete_value": false,
      "site": "00b4145c",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:3c8:8"
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
      "definition_site": "00b40468",
      "incomplete_value": false,
      "site": "00b40468",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:408:8"
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
      "00b4144c",
      "PARAM",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4145c",
      "WRITE",
      [
        "storage",
        "01125408",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4145c",
      "DATA",
      [
        "storage",
        "002a8301",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4144c",
      "PARAM",
      [
        "storage",
        "011263c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4145c",
      "WRITE",
      [
        "storage",
        "011263c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4145c",
      "DATA",
      [
        "storage",
        "002a8459",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40448 ["COPY", "register:4000:8", ["const:1125000:8"]]
+ 00b4143c ["COPY", "register:4000:8", ["const:1126000:8"]]
- 00b40450 ["COPY", "register:4048:8", ["const:b3f000:8"]]
+ 00b41444 ["COPY", "register:4048:8", ["const:b40000:8"]]
- 00b40454 ["COPY", "register:4050:8", ["const:b3f000:8"]]
+ 00b41448 ["COPY", "register:4050:8", ["const:b40000:8"]]
~~~


<a id="compare-e88fbd8dbf3f44e54729d35b69225fcb"></a>

### [`00b40478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40478.md) → [`00b4146c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b4146c.md) _ZN8firebase9analytics9analytics19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

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
      "definition_site": "00b41498",
      "incomplete_value": true,
      "site": "00b41498",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b404a4",
      "incomplete_value": true,
      "site": "00b404a4",
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
            "const:430:8"
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
      "definition_site": "00b41480",
      "incomplete_value": true,
      "site": "00b41480",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4048c",
      "incomplete_value": true,
      "site": "00b4048c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4148c",
      "incomplete_value": false,
      "site": "00b41490",
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
            "const:1ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40498",
      "incomplete_value": false,
      "site": "00b4049c",
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
            "const:53:8"
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
      "00b4147c",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4148c",
      "PARAM",
      [
        "storage",
        "002a7053",
        null,
        "string"
      ]
    ],
    [
      "00b41498",
      "WRITE",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4147c",
      "READ",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4148c",
      "PARAM",
      [
        "storage",
        "002a71ab",
        null,
        "string"
      ]
    ],
    [
      "00b41498",
      "WRITE",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4049c ["INT_ADD", "register:40f0:8", ["const:b4049c:8", "const:4:8"]]
- 00b4049c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b41490 ["INT_ADD", "register:40f0:8", ["const:b41490:8", "const:4:8"]]
+ 00b41490 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b404a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:430:8"]]
- 00b404a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b41498 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3f0:8"]]
+ 00b41498 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40484 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b41478 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-d44347b1f88f11c884e5d2cc3f1704ff"></a>

### [`00b404b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b404b8.md) → [`00b414ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b414ac.md) _ZN8firebase9analytics9analytics19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

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
      "definition_site": "00b414d8",
      "incomplete_value": true,
      "site": "00b414d8",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b404e4",
      "incomplete_value": true,
      "site": "00b404e4",
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
            "const:430:8"
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
      "definition_site": "00b414c0",
      "incomplete_value": true,
      "site": "00b414c0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b404cc",
      "incomplete_value": true,
      "site": "00b404cc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b414c8",
      "incomplete_value": false,
      "site": "00b414d0",
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
            "const:1ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b404d4",
      "incomplete_value": false,
      "site": "00b404dc",
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
            "const:53:8"
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
      "00b414bc",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b414c8",
      "PARAM",
      [
        "storage",
        "002a7053",
        null,
        "string"
      ]
    ],
    [
      "00b414d8",
      "WRITE",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b414bc",
      "READ",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b414c8",
      "PARAM",
      [
        "storage",
        "002a71ab",
        null,
        "string"
      ]
    ],
    [
      "00b414d8",
      "WRITE",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b404dc ["INT_ADD", "register:40f0:8", ["const:b404dc:8", "const:4:8"]]
- 00b404dc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b414d0 ["INT_ADD", "register:40f0:8", ["const:b414d0:8", "const:4:8"]]
+ 00b414d0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b404e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:430:8"]]
- 00b404e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b414d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3f0:8"]]
+ 00b414d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b404c4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b414b8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-3e92494df5ed08172930c471a088c676"></a>

### [`00b404f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b404f8.md) → [`00b414ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b414ec.md) _ZN8firebase9analytics9analytics10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00b4151c",
      "incomplete_value": true,
      "site": "00b4151c",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40528",
      "incomplete_value": true,
      "site": "00b40528",
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
            "const:430:8"
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
      "definition_site": "00b41500",
      "incomplete_value": true,
      "site": "00b41500",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4050c",
      "incomplete_value": true,
      "site": "00b4050c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4150c",
      "incomplete_value": true,
      "site": "00b41514",
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
            "const:1ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40518",
      "incomplete_value": true,
      "site": "00b40520",
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
            "const:53:8"
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
      "00b414fc",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4150c",
      "PARAM",
      [
        "storage",
        "002a7053",
        null,
        "string"
      ]
    ],
    [
      "00b4151c",
      "WRITE",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b414fc",
      "READ",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4150c",
      "PARAM",
      [
        "storage",
        "002a71ab",
        null,
        "string"
      ]
    ],
    [
      "00b4151c",
      "WRITE",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40520 ["INT_ADD", "register:40f0:8", ["const:b40520:8", "const:4:8"]]
- 00b40520 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b41514 ["INT_ADD", "register:40f0:8", ["const:b41514:8", "const:4:8"]]
+ 00b41514 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b40528 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:430:8"]]
- 00b40528 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4151c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3f0:8"]]
+ 00b4151c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40504 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b414f8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-448be0996791c97db2b2f13a4ca65b33"></a>

### [`00b4053c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4053c.md) → [`00b41530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41530.md) _ZN8firebase9analytics9analytics10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b41560",
      "incomplete_value": true,
      "site": "00b41560",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4056c",
      "incomplete_value": true,
      "site": "00b4056c",
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
            "const:430:8"
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
      "definition_site": "00b41544",
      "incomplete_value": true,
      "site": "00b41544",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40550",
      "incomplete_value": true,
      "site": "00b40550",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4154c",
      "incomplete_value": false,
      "site": "00b41558",
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
            "const:1ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40558",
      "incomplete_value": false,
      "site": "00b40564",
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
            "const:53:8"
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
      "00b41540",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4154c",
      "PARAM",
      [
        "storage",
        "002a7053",
        null,
        "string"
      ]
    ],
    [
      "00b41560",
      "WRITE",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41540",
      "READ",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4154c",
      "PARAM",
      [
        "storage",
        "002a71ab",
        null,
        "string"
      ]
    ],
    [
      "00b41560",
      "WRITE",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40564 ["INT_ADD", "register:40f0:8", ["const:b40564:8", "const:4:8"]]
- 00b40564 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b41558 ["INT_ADD", "register:40f0:8", ["const:b41558:8", "const:4:8"]]
+ 00b41558 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4056c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:430:8"]]
- 00b4056c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b41560 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:3f0:8"]]
+ 00b41560 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40548 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4153c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-b1e57e59ed326f8218bd6fc1b9e1f1d3"></a>

### [`00b4058c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4058c.md) → [`00b41580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41580.md) _ZN8firebase9analytics9analytics15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b415d8",
      "incomplete_value": true,
      "site": "00b415d8",
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
            "const:3f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b405e4",
      "incomplete_value": true,
      "site": "00b405e4",
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
            "const:438:8"
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
      "definition_site": "00b415b4",
      "incomplete_value": true,
      "site": "00b415c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b405c0",
      "incomplete_value": true,
      "site": "00b405cc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:430:8"
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
      "00b41594",
      "READ",
      [
        "storage",
        "01125438",
        null,
        "undefined1"
      ]
    ],
    [
      "00b415b4",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b415d8",
      "WRITE",
      [
        "storage",
        "01125438",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b41594",
      "READ",
      [
        "storage",
        "011263f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b415b4",
      "READ",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b415d8",
      "WRITE",
      [
        "storage",
        "011263f8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b405cc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b405cc ["INT_ADD", "register:40f0:8", ["const:b405cc:8", "const:4:8"]]
- 00b405cc ["CALLIND", null, ["register:0:8"]]
+ 00b415c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b415c0 ["INT_ADD", "register:40f0:8", ["const:b415c0:8", "const:4:8"]]
+ 00b415c0 ["CALLIND", null, ["register:0:8"]]
- 00b405e4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b405e4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:438:8"]]
- 00b405e4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b415d8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b415d8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:3f8:8"]]
+ 00b415d8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4059c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b41590 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-5db22be68804a014dd5e445a601a9539"></a>

### [`00b405f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b405f8.md) → [`00b415ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b415ec.md) _ZN8firebase9analytics9analytics12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b41628",
      "incomplete_value": true,
      "site": "00b41628",
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
            "const:3f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40634",
      "incomplete_value": true,
      "site": "00b40634",
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
            "const:438:8"
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
      "definition_site": "00b41648",
      "incomplete_value": true,
      "site": "00b41648",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40654",
      "incomplete_value": true,
      "site": "00b40654",
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
            "const:430:8"
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
      "definition_site": "00b41604",
      "incomplete_value": true,
      "site": "00b41604",
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
      "definition_site": "00b40610",
      "incomplete_value": true,
      "site": "00b40610",
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
      "00b41600",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4160c",
      "READ",
      [
        "storage",
        "01125438",
        null,
        "undefined1"
      ]
    ],
    [
      "00b41628",
      "WRITE",
      [
        "storage",
        "01125438",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b41600",
      "READ",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4160c",
      "READ",
      [
        "storage",
        "011263f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b41628",
      "WRITE",
      [
        "storage",
        "011263f8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40634 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b40634 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b40634 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:438:8"]]
- 00b40634 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b41628 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b41628 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b41628 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:3f8:8"]]
+ 00b41628 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b40650 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b40650 ["INT_ADD", "register:40f0:8", ["const:b40650:8", "const:4:8"]]
- 00b40650 ["CALLIND", null, ["register:0:8"]]
+ 00b41644 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b41644 ["INT_ADD", "register:40f0:8", ["const:b41644:8", "const:4:8"]]
+ 00b41644 ["CALLIND", null, ["register:0:8"]]
- 00b40654 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:430:8"]]
- 00b40654 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b40654 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b41648 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3f0:8"]]
+ 00b41648 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b41648 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-3bae76f013252330c16335e92166d67a"></a>

### [`00b40668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40668.md) → [`00b4165c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b4165c.md) _ZN8firebase9analytics9analytics14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4169c",
      "incomplete_value": true,
      "site": "00b4169c",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b406a8",
      "incomplete_value": true,
      "site": "00b406a8",
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
            "const:430:8"
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
      "definition_site": "00b41678",
      "incomplete_value": true,
      "site": "00b41678",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40684",
      "incomplete_value": true,
      "site": "00b40684",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b41680",
      "incomplete_value": false,
      "site": "00b41694",
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
            "const:1ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4068c",
      "incomplete_value": false,
      "site": "00b406a0",
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
            "const:53:8"
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
      "00b41670",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41680",
      "PARAM",
      [
        "storage",
        "002a7053",
        null,
        "string"
      ]
    ],
    [
      "00b4169c",
      "WRITE",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41670",
      "READ",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41680",
      "PARAM",
      [
        "storage",
        "002a71ab",
        null,
        "string"
      ]
    ],
    [
      "00b4169c",
      "WRITE",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b406a0 ["INT_ADD", "register:40f0:8", ["const:b406a0:8", "const:4:8"]]
- 00b406a0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b41694 ["INT_ADD", "register:40f0:8", ["const:b41694:8", "const:4:8"]]
+ 00b41694 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b406a8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:430:8"]]
- 00b406a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4169c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3f0:8"]]
+ 00b4169c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40674 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b41668 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-2be437cff3f56eabfe50acf0fd2dc6ed"></a>

### [`00b406d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b406d8.md) → [`00b416cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b416cc.md) _ZN8firebase9analytics9analytics11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b416e8",
      "incomplete_value": false,
      "site": "00b416ec",
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
      "definition_site": "00b406f4",
      "incomplete_value": false,
      "site": "00b406f8",
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
      "definition_site": "00b416f8",
      "incomplete_value": true,
      "site": "00b41704",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b40704",
      "incomplete_value": true,
      "site": "00b40710",
      "value": [
        "LOAD",
        "8",
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
      "00b416e8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b416f8",
      "DATA",
      [
        "storage",
        "01125440",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b416e8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b416f8",
      "DATA",
      [
        "storage",
        "01126400",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b406f8 ["INT_ADD", "register:40f0:8", ["const:b406f8:8", "const:4:8"]]
- 00b406f8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b416ec ["INT_ADD", "register:40f0:8", ["const:b416ec:8", "const:4:8"]]
+ 00b416ec ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b406f4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b406f4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b406f4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b406f4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b416e8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b416e8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b416e8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b416e8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b406fc ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b416f0 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-4d282231bb3e76edc0aaf7768ecea262"></a>

### [`00b40714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40714.md) → [`00b41708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41708.md) _ZN8firebase9analytics9analytics13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b41748",
      "incomplete_value": true,
      "site": "00b41748",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40754",
      "incomplete_value": true,
      "site": "00b40754",
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
            "const:430:8"
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
      "definition_site": "00b41724",
      "incomplete_value": true,
      "site": "00b41724",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40730",
      "incomplete_value": true,
      "site": "00b40730",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4172c",
      "incomplete_value": false,
      "site": "00b41740",
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
            "const:1ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40738",
      "incomplete_value": false,
      "site": "00b4074c",
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
            "const:53:8"
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
      "00b4171c",
      "READ",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4172c",
      "PARAM",
      [
        "storage",
        "002a7053",
        null,
        "string"
      ]
    ],
    [
      "00b41748",
      "WRITE",
      [
        "storage",
        "01125430",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4171c",
      "READ",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4172c",
      "PARAM",
      [
        "storage",
        "002a71ab",
        null,
        "string"
      ]
    ],
    [
      "00b41748",
      "WRITE",
      [
        "storage",
        "011263f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4074c ["INT_ADD", "register:40f0:8", ["const:b4074c:8", "const:4:8"]]
- 00b4074c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b41740 ["INT_ADD", "register:40f0:8", ["const:b41740:8", "const:4:8"]]
+ 00b41740 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b40754 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:430:8"]]
- 00b40754 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b41748 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:3f0:8"]]
+ 00b41748 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40720 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b41714 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-6d2a3dc9e2ae3c221d15791a9533927e"></a>

### [`00b40784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40784.md) → [`00b41778`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41778.md) _ZN8firebase9analytics9analytics10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b41794",
      "incomplete_value": false,
      "site": "00b41798",
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
      "definition_site": "00b407a0",
      "incomplete_value": false,
      "site": "00b407a4",
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
      "definition_site": "00b417a4",
      "incomplete_value": true,
      "site": "00b417b0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b407b0",
      "incomplete_value": true,
      "site": "00b407bc",
      "value": [
        "LOAD",
        "8",
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
      "00b41794",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b417a4",
      "DATA",
      [
        "storage",
        "01125498",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b41794",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b417a4",
      "DATA",
      [
        "storage",
        "01126458",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b407a4 ["INT_ADD", "register:40f0:8", ["const:b407a4:8", "const:4:8"]]
- 00b407a4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b41798 ["INT_ADD", "register:40f0:8", ["const:b41798:8", "const:4:8"]]
+ 00b41798 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b407a0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b407a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b407a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b407a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b41794 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b41794 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b41794 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b41794 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b407a8 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4179c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-d1c484c31b315421eab2e56186f9ea6c"></a>

### [`00b407c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b407c0.md) → [`00b417b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b417b4.md) _ZN8firebase9analytics22analytics_consent_type19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9a

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
      "definition_site": "00b417e0",
      "incomplete_value": true,
      "site": "00b417e0",
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
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b407ec",
      "incomplete_value": true,
      "site": "00b407ec",
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
            "const:4a0:8"
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
      "definition_site": "00b417c8",
      "incomplete_value": true,
      "site": "00b417c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b407d4",
      "incomplete_value": true,
      "site": "00b407d4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b417d4",
      "incomplete_value": false,
      "site": "00b417d8",
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
            "const:5c5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b407e0",
      "incomplete_value": false,
      "site": "00b407e4",
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
            "const:57b:8"
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
      "00b417c4",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b417d4",
      "PARAM",
      [
        "storage",
        "002b257b",
        null,
        "string"
      ]
    ],
    [
      "00b417e0",
      "WRITE",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b417c4",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ],
    [
      "00b417d4",
      "PARAM",
      [
        "storage",
        "002b25c5",
        null,
        "string"
      ]
    ],
    [
      "00b417e0",
      "WRITE",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b407e4 ["INT_ADD", "register:40f0:8", ["const:b407e4:8", "const:4:8"]]
- 00b407e4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b417d8 ["INT_ADD", "register:40f0:8", ["const:b417d8:8", "const:4:8"]]
+ 00b417d8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b407ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4a0:8"]]
- 00b407ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b417e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:460:8"]]
+ 00b417e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b407cc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b417c0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-1b029ea8bc615e9ddc06819f9da0ba59"></a>

### [`00b40800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40800.md) → [`00b417f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b417f4.md) _ZN8firebase9analytics22analytics_consent_type19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9a

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
      "definition_site": "00b41820",
      "incomplete_value": true,
      "site": "00b41820",
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
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4082c",
      "incomplete_value": true,
      "site": "00b4082c",
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
            "const:4a0:8"
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
      "definition_site": "00b41808",
      "incomplete_value": true,
      "site": "00b41808",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40814",
      "incomplete_value": true,
      "site": "00b40814",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b41810",
      "incomplete_value": false,
      "site": "00b41818",
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
            "const:5c5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4081c",
      "incomplete_value": false,
      "site": "00b40824",
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
            "const:57b:8"
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
      "00b41804",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41810",
      "PARAM",
      [
        "storage",
        "002b257b",
        null,
        "string"
      ]
    ],
    [
      "00b41820",
      "WRITE",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41804",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41810",
      "PARAM",
      [
        "storage",
        "002b25c5",
        null,
        "string"
      ]
    ],
    [
      "00b41820",
      "WRITE",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40824 ["INT_ADD", "register:40f0:8", ["const:b40824:8", "const:4:8"]]
- 00b40824 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b41818 ["INT_ADD", "register:40f0:8", ["const:b41818:8", "const:4:8"]]
+ 00b41818 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4082c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4a0:8"]]
- 00b4082c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b41820 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:460:8"]]
+ 00b41820 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4080c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b41800 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-cd870626f7c7b0a47f90c7a5ac99b8e7"></a>

### [`00b40840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40840.md) → [`00b41834`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41834.md) _ZN8firebase9analytics22analytics_consent_type10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00b41864",
      "incomplete_value": true,
      "site": "00b41864",
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
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40870",
      "incomplete_value": true,
      "site": "00b40870",
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
            "const:4a0:8"
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
      "definition_site": "00b41848",
      "incomplete_value": true,
      "site": "00b41848",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40854",
      "incomplete_value": true,
      "site": "00b40854",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b41854",
      "incomplete_value": false,
      "site": "00b4185c",
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
            "const:5c5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40860",
      "incomplete_value": false,
      "site": "00b40868",
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
            "const:57b:8"
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
      "00b41844",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41854",
      "PARAM",
      [
        "storage",
        "002b257b",
        null,
        "string"
      ]
    ],
    [
      "00b41864",
      "WRITE",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41844",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41854",
      "PARAM",
      [
        "storage",
        "002b25c5",
        null,
        "string"
      ]
    ],
    [
      "00b41864",
      "WRITE",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40868 ["INT_ADD", "register:40f0:8", ["const:b40868:8", "const:4:8"]]
- 00b40868 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4185c ["INT_ADD", "register:40f0:8", ["const:b4185c:8", "const:4:8"]]
+ 00b4185c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b40870 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4a0:8"]]
- 00b40870 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b41864 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:460:8"]]
+ 00b41864 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4084c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b41840 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-194dc5484cdeda6baff42970ed5ccdd4"></a>

### [`00b40884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40884.md) → [`00b41878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41878.md) _ZN8firebase9analytics22analytics_consent_type10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b418a8",
      "incomplete_value": true,
      "site": "00b418a8",
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
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b408b4",
      "incomplete_value": true,
      "site": "00b408b4",
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
            "const:4a0:8"
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
      "definition_site": "00b4188c",
      "incomplete_value": true,
      "site": "00b4188c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40898",
      "incomplete_value": true,
      "site": "00b40898",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b41894",
      "incomplete_value": false,
      "site": "00b418a0",
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
            "const:5c5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b408a0",
      "incomplete_value": false,
      "site": "00b408ac",
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
            "const:57b:8"
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
      "00b41888",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41894",
      "PARAM",
      [
        "storage",
        "002b257b",
        null,
        "string"
      ]
    ],
    [
      "00b418a8",
      "WRITE",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41888",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41894",
      "PARAM",
      [
        "storage",
        "002b25c5",
        null,
        "string"
      ]
    ],
    [
      "00b418a8",
      "WRITE",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b408ac ["INT_ADD", "register:40f0:8", ["const:b408ac:8", "const:4:8"]]
- 00b408ac ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b418a0 ["INT_ADD", "register:40f0:8", ["const:b418a0:8", "const:4:8"]]
+ 00b418a0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b408b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4a0:8"]]
- 00b408b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b418a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:460:8"]]
+ 00b418a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40890 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b41884 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-13f6edcfdb44a36171ef0483580954d9"></a>

### [`00b408d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b408d4.md) → [`00b418c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b418c8.md) _ZN8firebase9analytics22analytics_consent_type15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b41920",
      "incomplete_value": true,
      "site": "00b41920",
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
            "const:468:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4092c",
      "incomplete_value": true,
      "site": "00b4092c",
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
            "const:4a8:8"
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
      "definition_site": "00b418fc",
      "incomplete_value": true,
      "site": "00b41908",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:460:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40908",
      "incomplete_value": true,
      "site": "00b40914",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4a0:8"
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
      "00b418dc",
      "READ",
      [
        "storage",
        "011254a8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b418fc",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41920",
      "WRITE",
      [
        "storage",
        "011254a8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b418dc",
      "READ",
      [
        "storage",
        "01126468",
        null,
        "undefined1"
      ]
    ],
    [
      "00b418fc",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41920",
      "WRITE",
      [
        "storage",
        "01126468",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40914 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b40914 ["INT_ADD", "register:40f0:8", ["const:b40914:8", "const:4:8"]]
- 00b40914 ["CALLIND", null, ["register:0:8"]]
+ 00b41908 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b41908 ["INT_ADD", "register:40f0:8", ["const:b41908:8", "const:4:8"]]
+ 00b41908 ["CALLIND", null, ["register:0:8"]]
- 00b4092c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4092c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:4a8:8"]]
- 00b4092c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b41920 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b41920 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:468:8"]]
+ 00b41920 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b408e4 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b418d8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-1d34e6c9b440fbfde96df64b29e94a33"></a>

### [`00b40940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40940.md) → [`00b41934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41934.md) _ZN8firebase9analytics22analytics_consent_type12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 82.14% / 新版 82.14%

優先判定に残った影響 `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b41970",
      "incomplete_value": true,
      "site": "00b41970",
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
            "const:468:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4097c",
      "incomplete_value": true,
      "site": "00b4097c",
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
            "const:4a8:8"
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
      "definition_site": "00b41990",
      "incomplete_value": true,
      "site": "00b41990",
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
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4099c",
      "incomplete_value": true,
      "site": "00b4099c",
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
            "const:4a0:8"
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
      "definition_site": "00b4194c",
      "incomplete_value": true,
      "site": "00b4194c",
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
      "definition_site": "00b40958",
      "incomplete_value": true,
      "site": "00b40958",
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
      "00b41948",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41954",
      "READ",
      [
        "storage",
        "011254a8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b41970",
      "WRITE",
      [
        "storage",
        "011254a8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b41948",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41954",
      "READ",
      [
        "storage",
        "01126468",
        null,
        "undefined1"
      ]
    ],
    [
      "00b41970",
      "WRITE",
      [
        "storage",
        "01126468",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4097c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4097c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4097c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:4a8:8"]]
- 00b4097c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b41970 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b41970 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b41970 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:468:8"]]
+ 00b41970 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4099c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:4a0:8"]]
- 00b4099c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4099c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b41990 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:460:8"]]
+ 00b41990 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b41990 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00b40950 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b41944 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-d921e3eb4bdc2af1169944086fd4251f"></a>

### [`00b409b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b409b0.md) → [`00b419a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b419a4.md) _ZN8firebase9analytics22analytics_consent_type14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b419e4",
      "incomplete_value": true,
      "site": "00b419e4",
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
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b409f0",
      "incomplete_value": true,
      "site": "00b409f0",
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
            "const:4a0:8"
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
      "definition_site": "00b419c0",
      "incomplete_value": true,
      "site": "00b419c0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b409cc",
      "incomplete_value": true,
      "site": "00b409cc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b409cc"
      ],
      [
        "FALL_THROUGH",
        "00b419c0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b419c0",
      "incomplete_value": true,
      "site": "00b419e4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b409cc",
      "incomplete_value": true,
      "site": "00b409f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b419b8",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b419c8",
      "PARAM",
      [
        "storage",
        "002b257b",
        null,
        "string"
      ]
    ],
    [
      "00b419e4",
      "WRITE",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b419b8",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ],
    [
      "00b419c8",
      "PARAM",
      [
        "storage",
        "002b25c5",
        null,
        "string"
      ]
    ],
    [
      "00b419e4",
      "WRITE",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b409f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:4a0:8"]]
- 00b409f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b419e4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:460:8"]]
+ 00b419e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b409bc ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b419b0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
- 00b409c4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:4a0:8"]]
- 00b409c4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b419b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:460:8"]]
+ 00b419b8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ab8e28867869ef0e5bcdda2faa63de0e"></a>

### [`00b40a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40a5c.md) → [`00b41a50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41a50.md) _ZN8firebase9analytics22analytics_consent_type13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b41a90",
      "incomplete_value": true,
      "site": "00b41a90",
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
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40a9c",
      "incomplete_value": true,
      "site": "00b40a9c",
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
            "const:4a0:8"
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
      "definition_site": "00b41a6c",
      "incomplete_value": true,
      "site": "00b41a6c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40a78",
      "incomplete_value": true,
      "site": "00b40a78",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b40a78"
      ],
      [
        "FALL_THROUGH",
        "00b41a6c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b41a6c",
      "incomplete_value": true,
      "site": "00b41a90",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40a78",
      "incomplete_value": true,
      "site": "00b40a9c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b41a64",
      "READ",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41a74",
      "PARAM",
      [
        "storage",
        "002b257b",
        null,
        "string"
      ]
    ],
    [
      "00b41a90",
      "WRITE",
      [
        "storage",
        "011254a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41a64",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41a74",
      "PARAM",
      [
        "storage",
        "002b25c5",
        null,
        "string"
      ]
    ],
    [
      "00b41a90",
      "WRITE",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40a9c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:4a0:8"]]
- 00b40a9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b41a90 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:460:8"]]
+ 00b41a90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40a68 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b41a5c ["COPY", "register:40a0:8", ["const:1126000:8"]]
- 00b40a70 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:4a0:8"]]
- 00b40a70 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b41a64 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:460:8"]]
+ 00b41a64 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-842e0abed4bfed35ac809c388de0bd6f"></a>

### [`00b40acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40acc.md) → [`00b41ac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41ac0.md) _ZN8firebase9analytics22analytics_consent_type10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b41aec",
      "incomplete_value": true,
      "site": "00b41af8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b40af8",
      "incomplete_value": true,
      "site": "00b40b04",
      "value": [
        "LOAD",
        "8",
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
      "00b41adc",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b41aec",
      "DATA",
      [
        "storage",
        "011254b8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41adc",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b41aec",
      "DATA",
      [
        "storage",
        "01126478",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40ae8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b40ae8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b40ae8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b40ae8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b41adc ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b41adc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b41adc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b41adc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b40aec ["INT_ADD", "register:40f0:8", ["const:b40aec:8", "const:4:8"]]
- 00b40aec ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b41ae0 ["INT_ADD", "register:40f0:8", ["const:b41ae0:8", "const:4:8"]]
+ 00b41ae0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b40af0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b41ae4 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-bed898320650625f4f2f1c64b7debac6"></a>

### [`00b40b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40b08.md) → [`00b41afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41afc.md) _ZN8firebase9analytics24analytics_consent_status19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_

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
      "definition_site": "00b41b28",
      "incomplete_value": true,
      "site": "00b41b28",
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
            "const:498:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40b34",
      "incomplete_value": true,
      "site": "00b40b34",
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
            "const:4d8:8"
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
      "definition_site": "00b41b10",
      "incomplete_value": true,
      "site": "00b41b10",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40b1c",
      "incomplete_value": true,
      "site": "00b40b1c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b41b1c",
      "incomplete_value": false,
      "site": "00b41b20",
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
            "const:ab3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40b28",
      "incomplete_value": false,
      "site": "00b40b2c",
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
            "const:9e8:8"
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
      "00b41b0c",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41b1c",
      "PARAM",
      [
        "storage",
        "002a39e8",
        null,
        "string"
      ]
    ],
    [
      "00b41b28",
      "WRITE",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41b0c",
      "READ",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41b1c",
      "PARAM",
      [
        "storage",
        "002a3ab3",
        null,
        "string"
      ]
    ],
    [
      "00b41b28",
      "WRITE",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40b2c ["INT_ADD", "register:40f0:8", ["const:b40b2c:8", "const:4:8"]]
- 00b40b2c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b41b20 ["INT_ADD", "register:40f0:8", ["const:b41b20:8", "const:4:8"]]
+ 00b41b20 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b40b34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4d8:8"]]
- 00b40b34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b41b28 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:498:8"]]
+ 00b41b28 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40b14 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b41b08 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-48d55e66888f105c150d5e2e95a85ce1"></a>

### [`00b40b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40b48.md) → [`00b41b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41b3c.md) _ZN8firebase9analytics24analytics_consent_status19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_

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
      "definition_site": "00b41b68",
      "incomplete_value": true,
      "site": "00b41b68",
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
            "const:498:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40b74",
      "incomplete_value": true,
      "site": "00b40b74",
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
            "const:4d8:8"
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
      "definition_site": "00b41b50",
      "incomplete_value": true,
      "site": "00b41b50",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40b5c",
      "incomplete_value": true,
      "site": "00b40b5c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b40b5c"
      ],
      [
        "FALL_THROUGH",
        "00b41b50"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b41b50",
      "incomplete_value": true,
      "site": "00b41b68",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40b5c",
      "incomplete_value": true,
      "site": "00b40b74",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b41b4c",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41b58",
      "PARAM",
      [
        "storage",
        "002a39e8",
        null,
        "string"
      ]
    ],
    [
      "00b41b68",
      "WRITE",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41b4c",
      "READ",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41b58",
      "PARAM",
      [
        "storage",
        "002a3ab3",
        null,
        "string"
      ]
    ],
    [
      "00b41b68",
      "WRITE",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40b74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4d8:8"]]
- 00b40b74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b41b68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:498:8"]]
+ 00b41b68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40b54 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b41b48 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b40b58 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4d8:8"]]
- 00b40b58 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b41b4c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:498:8"]]
+ 00b41b4c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1aa1a6cb46ee19070a2a838715726e1f"></a>

### [`00b40b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40b88.md) → [`00b41b7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41b7c.md) _ZN8firebase9analytics24analytics_consent_status10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00b41bac",
      "incomplete_value": true,
      "site": "00b41bac",
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
            "const:498:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40bb8",
      "incomplete_value": true,
      "site": "00b40bb8",
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
            "const:4d8:8"
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
      "definition_site": "00b41b90",
      "incomplete_value": true,
      "site": "00b41b90",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40b9c",
      "incomplete_value": true,
      "site": "00b40b9c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b41b9c",
      "incomplete_value": false,
      "site": "00b41ba4",
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
            "const:ab3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40ba8",
      "incomplete_value": false,
      "site": "00b40bb0",
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
            "const:9e8:8"
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
      "00b41b8c",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41b9c",
      "PARAM",
      [
        "storage",
        "002a39e8",
        null,
        "string"
      ]
    ],
    [
      "00b41bac",
      "WRITE",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41b8c",
      "READ",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41b9c",
      "PARAM",
      [
        "storage",
        "002a3ab3",
        null,
        "string"
      ]
    ],
    [
      "00b41bac",
      "WRITE",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40bb0 ["INT_ADD", "register:40f0:8", ["const:b40bb0:8", "const:4:8"]]
- 00b40bb0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b41ba4 ["INT_ADD", "register:40f0:8", ["const:b41ba4:8", "const:4:8"]]
+ 00b41ba4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b40bb8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4d8:8"]]
- 00b40bb8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b41bac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:498:8"]]
+ 00b41bac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40b94 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b41b88 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-c6b6b1a99f5fe06b71b7ffc5aa1201c1"></a>

### [`00b40bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40bcc.md) → [`00b41bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41bc0.md) _ZN8firebase9analytics24analytics_consent_status10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b41bf0",
      "incomplete_value": true,
      "site": "00b41bf0",
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
            "const:498:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40bfc",
      "incomplete_value": true,
      "site": "00b40bfc",
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
            "const:4d8:8"
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
      "definition_site": "00b41bd4",
      "incomplete_value": true,
      "site": "00b41bd4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40be0",
      "incomplete_value": true,
      "site": "00b40be0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b41bdc",
      "incomplete_value": false,
      "site": "00b41be8",
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
            "const:ab3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40be8",
      "incomplete_value": false,
      "site": "00b40bf4",
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
            "const:9e8:8"
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
      "00b41bd0",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41bdc",
      "PARAM",
      [
        "storage",
        "002a39e8",
        null,
        "string"
      ]
    ],
    [
      "00b41bf0",
      "WRITE",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41bd0",
      "READ",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41bdc",
      "PARAM",
      [
        "storage",
        "002a3ab3",
        null,
        "string"
      ]
    ],
    [
      "00b41bf0",
      "WRITE",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40bf4 ["INT_ADD", "register:40f0:8", ["const:b40bf4:8", "const:4:8"]]
- 00b40bf4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b41be8 ["INT_ADD", "register:40f0:8", ["const:b41be8:8", "const:4:8"]]
+ 00b41be8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b40bfc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4d8:8"]]
- 00b40bfc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b41bf0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:498:8"]]
+ 00b41bf0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40bd8 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b41bcc ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-96de36ef298c08dc815348e0e2b470f4"></a>

### [`00b40c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40c1c.md) → [`00b41c10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41c10.md) _ZN8firebase9analytics24analytics_consent_status15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b41c68",
      "incomplete_value": true,
      "site": "00b41c68",
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
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40c74",
      "incomplete_value": true,
      "site": "00b40c74",
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
            "const:4e0:8"
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
      "definition_site": "00b41c44",
      "incomplete_value": true,
      "site": "00b41c50",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:498:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40c50",
      "incomplete_value": true,
      "site": "00b40c5c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4d8:8"
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
      "00b41c24",
      "READ",
      [
        "storage",
        "011254e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b41c44",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41c68",
      "WRITE",
      [
        "storage",
        "011254e0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b41c24",
      "READ",
      [
        "storage",
        "011264a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b41c44",
      "READ",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41c68",
      "WRITE",
      [
        "storage",
        "011264a0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40c5c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b40c5c ["INT_ADD", "register:40f0:8", ["const:b40c5c:8", "const:4:8"]]
- 00b40c5c ["CALLIND", null, ["register:0:8"]]
+ 00b41c50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b41c50 ["INT_ADD", "register:40f0:8", ["const:b41c50:8", "const:4:8"]]
+ 00b41c50 ["CALLIND", null, ["register:0:8"]]
- 00b40c74 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b40c74 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:4e0:8"]]
- 00b40c74 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b41c68 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b41c68 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:4a0:8"]]
+ 00b41c68 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b40c2c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b41c20 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-cc59698053783edbca2ad7f15cfa9fcd"></a>

### [`00b40c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40c88.md) → [`00b41c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41c7c.md) _ZN8firebase9analytics24analytics_consent_status12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b41cb8",
      "incomplete_value": true,
      "site": "00b41cb8",
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
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40cc4",
      "incomplete_value": true,
      "site": "00b40cc4",
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
            "const:4e0:8"
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
      "definition_site": "00b41cd8",
      "incomplete_value": true,
      "site": "00b41cd8",
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
            "const:498:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40ce4",
      "incomplete_value": true,
      "site": "00b40ce4",
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
            "const:4d8:8"
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
      "definition_site": "00b41c94",
      "incomplete_value": true,
      "site": "00b41c94",
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
      "definition_site": "00b40ca0",
      "incomplete_value": true,
      "site": "00b40ca0",
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
      "00b41c90",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41c9c",
      "READ",
      [
        "storage",
        "011254e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b41cb8",
      "WRITE",
      [
        "storage",
        "011254e0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b41c90",
      "READ",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41c9c",
      "READ",
      [
        "storage",
        "011264a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b41cb8",
      "WRITE",
      [
        "storage",
        "011264a0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40cc4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b40cc4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b40cc4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:4e0:8"]]
- 00b40cc4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b41cb8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b41cb8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b41cb8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:4a0:8"]]
+ 00b41cb8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b40ce0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b40ce0 ["INT_ADD", "register:40f0:8", ["const:b40ce0:8", "const:4:8"]]
- 00b40ce0 ["CALLIND", null, ["register:0:8"]]
+ 00b41cd4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b41cd4 ["INT_ADD", "register:40f0:8", ["const:b41cd4:8", "const:4:8"]]
+ 00b41cd4 ["CALLIND", null, ["register:0:8"]]
- 00b40ce4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:4d8:8"]]
- 00b40ce4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b40ce4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b41cd8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:498:8"]]
+ 00b41cd8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b41cd8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-944457cdf3e98e6e77023f9f31af379b"></a>

### [`00b40cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40cf8.md) → [`00b41cec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41cec.md) _ZN8firebase9analytics24analytics_consent_status14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b41d2c",
      "incomplete_value": true,
      "site": "00b41d2c",
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
            "const:498:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40d38",
      "incomplete_value": true,
      "site": "00b40d38",
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
            "const:4d8:8"
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
      "definition_site": "00b41d08",
      "incomplete_value": true,
      "site": "00b41d08",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40d14",
      "incomplete_value": true,
      "site": "00b40d14",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b41d10",
      "incomplete_value": false,
      "site": "00b41d24",
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
            "const:ab3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40d1c",
      "incomplete_value": false,
      "site": "00b40d30",
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
            "const:9e8:8"
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
      "00b41d00",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41d10",
      "PARAM",
      [
        "storage",
        "002a39e8",
        null,
        "string"
      ]
    ],
    [
      "00b41d2c",
      "WRITE",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41d00",
      "READ",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41d10",
      "PARAM",
      [
        "storage",
        "002a3ab3",
        null,
        "string"
      ]
    ],
    [
      "00b41d2c",
      "WRITE",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40d30 ["INT_ADD", "register:40f0:8", ["const:b40d30:8", "const:4:8"]]
- 00b40d30 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b41d24 ["INT_ADD", "register:40f0:8", ["const:b41d24:8", "const:4:8"]]
+ 00b41d24 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b40d38 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:4d8:8"]]
- 00b40d38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b41d2c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:498:8"]]
+ 00b41d2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40d04 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b41cf8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-e3088ed5c2d740381065703cbe2de38e"></a>

### [`00b40d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40d68.md) → [`00b41d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41d5c.md) _ZN8firebase9analytics24analytics_consent_status11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b41d78",
      "incomplete_value": false,
      "site": "00b41d7c",
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
      "definition_site": "00b40d84",
      "incomplete_value": false,
      "site": "00b40d88",
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
      "definition_site": "00b41d88",
      "incomplete_value": true,
      "site": "00b41d94",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b40d94",
      "incomplete_value": true,
      "site": "00b40da0",
      "value": [
        "LOAD",
        "8",
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
      "00b41d78",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b41d88",
      "DATA",
      [
        "storage",
        "011254e8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b41d78",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b41d88",
      "DATA",
      [
        "storage",
        "011264a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40d88 ["INT_ADD", "register:40f0:8", ["const:b40d88:8", "const:4:8"]]
- 00b40d88 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b41d7c ["INT_ADD", "register:40f0:8", ["const:b41d7c:8", "const:4:8"]]
+ 00b41d7c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b40d84 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b40d84 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b40d84 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b40d84 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b41d78 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b41d78 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b41d78 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b41d78 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b40d8c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b41d80 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-abcfd4b2611cae2a5f86438f1760b9ad"></a>

### [`00b40da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40da4.md) → [`00b41d98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41d98.md) _ZN8firebase9analytics24analytics_consent_status13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b41dd8",
      "incomplete_value": true,
      "site": "00b41dd8",
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
            "const:498:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40de4",
      "incomplete_value": true,
      "site": "00b40de4",
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
            "const:4d8:8"
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
      "definition_site": "00b41db4",
      "incomplete_value": true,
      "site": "00b41db4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40dc0",
      "incomplete_value": true,
      "site": "00b40dc0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b41dbc",
      "incomplete_value": false,
      "site": "00b41dd0",
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
            "const:ab3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40dc8",
      "incomplete_value": false,
      "site": "00b40ddc",
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
            "const:9e8:8"
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
      "00b41dac",
      "READ",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41dbc",
      "PARAM",
      [
        "storage",
        "002a39e8",
        null,
        "string"
      ]
    ],
    [
      "00b41dd8",
      "WRITE",
      [
        "storage",
        "011254d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41dac",
      "READ",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41dbc",
      "PARAM",
      [
        "storage",
        "002a3ab3",
        null,
        "string"
      ]
    ],
    [
      "00b41dd8",
      "WRITE",
      [
        "storage",
        "01126498",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40ddc ["INT_ADD", "register:40f0:8", ["const:b40ddc:8", "const:4:8"]]
- 00b40ddc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b41dd0 ["INT_ADD", "register:40f0:8", ["const:b41dd0:8", "const:4:8"]]
+ 00b41dd0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b40de4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:4d8:8"]]
- 00b40de4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b41dd8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:498:8"]]
+ 00b41dd8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b40db0 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b41da4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-0901de584acc463bd61741bed632b25a"></a>

### [`00b40e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40e14.md) → [`00b41e08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41e08.md) _ZN8firebase9analytics24analytics_consent_status10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b41e24",
      "incomplete_value": false,
      "site": "00b41e28",
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
      "definition_site": "00b40e30",
      "incomplete_value": false,
      "site": "00b40e34",
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
      "definition_site": "00b41e34",
      "incomplete_value": true,
      "site": "00b41e40",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b40e40",
      "incomplete_value": true,
      "site": "00b40e4c",
      "value": [
        "LOAD",
        "8",
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
      "00b41e24",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b41e34",
      "DATA",
      [
        "storage",
        "011254f0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b41e24",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b41e34",
      "DATA",
      [
        "storage",
        "011264b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40e34 ["INT_ADD", "register:40f0:8", ["const:b40e34:8", "const:4:8"]]
- 00b40e34 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b41e28 ["INT_ADD", "register:40f0:8", ["const:b41e28:8", "const:4:8"]]
+ 00b41e28 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b40e30 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b40e30 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b40e30 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b40e30 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b41e24 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b41e24 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b41e24 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b41e24 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b40e38 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b41e2c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-494cc6afe239ae091b26a31d28b1ac1e"></a>

### [`00b40e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40e50.md) → [`00b41e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41e44.md) _ZN8firebase9analytics10InitializeERKNS_3AppE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5aa30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa30.md) · 呼出先 13件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad90.md) [`00c5adc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5adc0.md) [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5af70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af70.md)
- 新版 呼出元 1件 [`00c5ba00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5ba00.md) · 呼出先 13件 [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5bd60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd60.md) [`00c5bd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd90.md) [`00c5be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be80.md) [`00c5bf40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf40.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 82.01% / 新版 82.01%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 18件, `store_destination` 9件

アドレスに依存する影響 `branch_value` 4件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b41f00",
      "incomplete_value": true,
      "site": "00b41f00",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40f0c",
      "incomplete_value": true,
      "site": "00b40f0c",
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
            "const:430:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b41f58",
      "incomplete_value": true,
      "site": "00b41f58",
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
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40f64",
      "incomplete_value": true,
      "site": "00b40f64",
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
            "const:4a0:8"
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
      "definition_site": "00b41fb0",
      "incomplete_value": true,
      "site": "00b41fb0",
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
            "const:498:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40fbc",
      "incomplete_value": true,
      "site": "00b40fbc",
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
            "const:4d8:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b41e60",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41e6c",
      "READ",
      [
        "storage",
        "00c9b778",
        null,
        "pointer"
      ]
    ],
    [
      "00b41e7c",
      "READ",
      [
        "storage",
        "00ca4700",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b41e60",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b41e6c",
      "READ",
      [
        "storage",
        "00c9c748",
        null,
        "pointer"
      ]
    ],
    [
      "00b41e7c",
      "READ",
      [
        "storage",
        "00ca56d0",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40eac ["INT_ADD", "register:40f0:8", ["const:b40eac:8", "const:4:8"]]
- 00b40eac ["CALL", null, ["callee:00c5c080:8"]]
+ 00b41ea0 ["INT_ADD", "register:40f0:8", ["const:b41ea0:8", "const:4:8"]]
+ 00b41ea0 ["CALL", null, ["callee:00c5c080:8"]]
- 00b40ec4 ["INT_ADD", "register:40f0:8", ["const:b40ec4:8", "const:4:8"]]
- 00b40ec4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b41eb8 ["INT_ADD", "register:40f0:8", ["const:b41eb8:8", "const:4:8"]]
+ 00b41eb8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b40f04 ["INT_ADD", "register:40f0:8", ["const:b40f04:8", "const:4:8"]]
- 00b40f04 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b41ef8 ["INT_ADD", "register:40f0:8", ["const:b41ef8:8", "const:4:8"]]
+ 00b41ef8 ["CALL", null, ["callee:00c5bfb0:8"]]
~~~


<a id="compare-88f4e6b0034fbab5c79fd33a21bdefb9"></a>

### [`00b411f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b411f4.md) → [`00b421e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b421e8.md) _ZN8firebase9analytics9TerminateEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5aa10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa10.md) · 呼出先 7件 [`00c5ada0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ada0.md) [`00c5add0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5add0.md) [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afd0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 1件 [`00c5b9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b9e0.md) · 呼出先 7件 [`00c5bd70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd70.md) [`00c5bda0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bda0.md) [`00c5be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be80.md) [`00c5bfa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfa0.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.23% / 新版 87.23%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 8件

アドレスに依存する影響 `branch_value` 4件, `call_argument_candidate` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b42224",
      "incomplete_value": true,
      "site": "00b42224",
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
            "const:4c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b41230",
      "incomplete_value": true,
      "site": "00b41230",
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
            "const:500:8"
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
      "definition_site": "00b42248",
      "incomplete_value": true,
      "site": "00b42248",
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
            "const:4c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b41254",
      "incomplete_value": true,
      "site": "00b41254",
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
            "const:508:8"
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
      "definition_site": "00b4226c",
      "incomplete_value": true,
      "site": "00b4226c",
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
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b41278",
      "incomplete_value": true,
      "site": "00b41278",
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
            "const:4e0:8"
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
      "00b421fc",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4220c",
      "READ",
      [
        "storage",
        "00c9b778",
        null,
        "pointer"
      ]
    ],
    [
      "00b42214",
      "READ",
      [
        "storage",
        "00ca4700",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b421fc",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4220c",
      "READ",
      [
        "storage",
        "00c9c748",
        null,
        "pointer"
      ]
    ],
    [
      "00b42214",
      "READ",
      [
        "storage",
        "00ca56d0",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b41230 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:500:8"]]
- 00b41230 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b41230 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b42224 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:4c0:8"]]
+ 00b42224 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b42224 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00b41248 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b41248 ["INT_ADD", "register:40f0:8", ["const:b41248:8", "const:4:8"]]
- 00b41248 ["CALLIND", null, ["register:0:8"]]
+ 00b4223c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4223c ["INT_ADD", "register:40f0:8", ["const:b4223c:8", "const:4:8"]]
+ 00b4223c ["CALLIND", null, ["register:0:8"]]
- 00b41254 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:508:8"]]
- 00b41254 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b41254 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b42248 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:4c8:8"]]
+ 00b42248 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b42248 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-cb07eee6eae52448538584ec5b6ae60b"></a>

### [`00b4136c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b4136c.md) → [`00b42360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b42360.md) _ZN8firebase9analytics29SetAnalyticsCollectionEnabledEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b42374",
      "incomplete_value": true,
      "site": "00b42374",
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
      "definition_site": "00b41380",
      "incomplete_value": true,
      "site": "00b41380",
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
      "definition_site": "00b4238c",
      "incomplete_value": true,
      "site": "00b4239c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b41398",
      "incomplete_value": true,
      "site": "00b413a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:508:8"
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
      "definition_site": "00b42390",
      "incomplete_value": true,
      "site": "00b4239c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:400:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4139c",
      "incomplete_value": true,
      "site": "00b413a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:440:8"
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
      "00b42370",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4238c",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42390",
      "READ",
      [
        "storage",
        "01125440",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b42370",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4238c",
      "READ",
      [
        "storage",
        "011264c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42390",
      "READ",
      [
        "storage",
        "01126400",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b413a8 ["INT_ADD", "register:40f0:8", ["const:b413a8:8", "const:4:8"]]
- 00b413a8 ["CALL", null, ["callee:0057504c:8"]]
+ 00b4239c ["INT_ADD", "register:40f0:8", ["const:b4239c:8", "const:4:8"]]
+ 00b4239c ["CALL", null, ["callee:0057504c:8"]]
- 00b41378 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4236c ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b4137c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:500:8"]]
- 00b4137c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b42370 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4c0:8"]]
+ 00b42370 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0cc48f3c488d93fa5359ce4ab78fe94f"></a>

### [`00b413d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b413d0.md) → [`00b423c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b423c4.md) _ZN8firebase9analytics10SetConsentERKNSt6__ndk13mapINS0_11ConsentTypeENS0_13ConsentStatusENS1_4lessIS3_EENS1_9allocatorINS1_4pairIKS3_S4_EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5afb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afb0.md)
- 新版 呼出元 0件  · 呼出先 12件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5bf80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.09% / 新版 90.09%

優先判定に残った影響 `call_argument_candidate` 19件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b423e8",
      "incomplete_value": true,
      "site": "00b423e8",
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
      "definition_site": "00b413f4",
      "incomplete_value": true,
      "site": "00b413f4",
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
      "definition_site": "00b424a4",
      "incomplete_value": true,
      "site": "00b424b4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:460:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b414b0",
      "incomplete_value": true,
      "site": "00b414c0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:4a0:8"
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
      "definition_site": "00b424a8",
      "incomplete_value": true,
      "site": "00b424b4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b414b4",
      "incomplete_value": true,
      "site": "00b414c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4c0:8"
              ]
            ]
          ]
        ]
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
      "00b423e4",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42468",
      "PARAM",
      [
        "storage",
        "002a28c8",
        null,
        "string"
      ]
    ],
    [
      "00b42490",
      "DATA",
      [
        "storage",
        "0030b5d5",
        "switchD_00b414a4::switchdataD_0030b5d5",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "00b423e4",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b42468",
      "PARAM",
      [
        "storage",
        "002a2993",
        null,
        "string"
      ]
    ],
    [
      "00b42490",
      "DATA",
      [
        "storage",
        "0030b615",
        "switchD_00b42498::switchdataD_0030b615",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b414c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b414c0 ["INT_ADD", "register:40f0:8", ["const:b414c0:8", "const:4:8"]]
- 00b414c0 ["CALLIND", null, ["register:0:8"]]
+ 00b424b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b424b4 ["INT_ADD", "register:40f0:8", ["const:b424b4:8", "const:4:8"]]
+ 00b424b4 ["CALLIND", null, ["register:0:8"]]
- 00b414d8 ["INT_ADD", "register:40f0:8", ["const:b414d8:8", "const:4:8"]]
- 00b414d8 ["CALL", null, ["callee:00c5bf80:8"]]
+ 00b424cc ["INT_ADD", "register:40f0:8", ["const:b424cc:8", "const:4:8"]]
+ 00b424cc ["CALL", null, ["callee:00c5bf80:8"]]
- 00b414fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b414fc ["INT_ADD", "register:40f0:8", ["const:b414fc:8", "const:4:8"]]
- 00b414fc ["CALLIND", null, ["register:0:8"]]
+ 00b424f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b424f0 ["INT_ADD", "register:40f0:8", ["const:b424f0:8", "const:4:8"]]
+ 00b424f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-505b372273748f756b5068c2f6ba1a77"></a>

### [`00b41fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41fec.md) → [`00b42fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b42fe0.md) _ZN8firebase9analytics8LogEventEPKcS2_S2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c030.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.88% / 新版 95.88%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b42ffc",
      "incomplete_value": true,
      "site": "00b42ffc",
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
      "definition_site": "00b42008",
      "incomplete_value": true,
      "site": "00b42008",
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
      "definition_site": "00b430d8",
      "incomplete_value": true,
      "site": "00b430f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b420e4",
      "incomplete_value": true,
      "site": "00b420fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:508:8"
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
      "definition_site": "00b430dc",
      "incomplete_value": true,
      "site": "00b430f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:410:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b420e8",
      "incomplete_value": true,
      "site": "00b420fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b42ff8",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b430d8",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ],
    [
      "00b430dc",
      "READ",
      [
        "storage",
        "01125450",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b42ff8",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b430d8",
      "READ",
      [
        "storage",
        "011264c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b430dc",
      "READ",
      [
        "storage",
        "01126410",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b420fc ["INT_ADD", "register:40f0:8", ["const:b420fc:8", "const:4:8"]]
- 00b420fc ["CALL", null, ["callee:0057504c:8"]]
+ 00b430f0 ["INT_ADD", "register:40f0:8", ["const:b430f0:8", "const:4:8"]]
+ 00b430f0 ["CALL", null, ["callee:0057504c:8"]]
- 00b42118 ["INT_ADD", "register:40f0:8", ["const:b42118:8", "const:4:8"]]
- 00b42118 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b4310c ["INT_ADD", "register:40f0:8", ["const:b4310c:8", "const:4:8"]]
+ 00b4310c ["CALL", null, ["callee:00c5bd40:8"]]
- 00b42000 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b42ff4 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-c71c434652e70a8706a87f058d2a97b8"></a>

### [`00b42170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42170.md) → [`00b43164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b43164.md) _ZN8firebase9analytics8LogEventEPKcS2_d

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c030.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b43180",
      "incomplete_value": true,
      "site": "00b43180",
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
      "definition_site": "00b4218c",
      "incomplete_value": true,
      "site": "00b4218c",
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
      "definition_site": "00b43230",
      "incomplete_value": true,
      "site": "00b43248",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4223c",
      "incomplete_value": true,
      "site": "00b42254",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:508:8"
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
      "definition_site": "00b43234",
      "incomplete_value": true,
      "site": "00b43248",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:410:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42240",
      "incomplete_value": true,
      "site": "00b42254",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4317c",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43230",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43234",
      "READ",
      [
        "storage",
        "01125450",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4317c",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43230",
      "READ",
      [
        "storage",
        "011264c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43234",
      "READ",
      [
        "storage",
        "01126410",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42254 ["INT_ADD", "register:40f0:8", ["const:b42254:8", "const:4:8"]]
- 00b42254 ["CALL", null, ["callee:0057504c:8"]]
+ 00b43248 ["INT_ADD", "register:40f0:8", ["const:b43248:8", "const:4:8"]]
+ 00b43248 ["CALL", null, ["callee:0057504c:8"]]
- 00b42270 ["INT_ADD", "register:40f0:8", ["const:b42270:8", "const:4:8"]]
- 00b42270 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b43264 ["INT_ADD", "register:40f0:8", ["const:b43264:8", "const:4:8"]]
+ 00b43264 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b42184 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b43178 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-c02422a088169223c489b091dbbafc7d"></a>

### [`00b422c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b422c8.md) → [`00b432bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b432bc.md) _ZN8firebase9analytics8LogEventEPKcS2_l

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b130.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)
- 新版 呼出元 1件 [`00c5c100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c100.md) · 呼出先 8件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c030.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b432d8",
      "incomplete_value": true,
      "site": "00b432d8",
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
      "definition_site": "00b422e4",
      "incomplete_value": true,
      "site": "00b422e4",
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
      "definition_site": "00b43388",
      "incomplete_value": true,
      "site": "00b433a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42394",
      "incomplete_value": true,
      "site": "00b423ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:508:8"
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
      "definition_site": "00b4338c",
      "incomplete_value": true,
      "site": "00b433a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:410:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42398",
      "incomplete_value": true,
      "site": "00b423ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b432d4",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43388",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4338c",
      "READ",
      [
        "storage",
        "01125450",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b432d4",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43388",
      "READ",
      [
        "storage",
        "011264c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4338c",
      "READ",
      [
        "storage",
        "01126410",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b423ac ["INT_ADD", "register:40f0:8", ["const:b423ac:8", "const:4:8"]]
- 00b423ac ["CALL", null, ["callee:0057504c:8"]]
+ 00b433a0 ["INT_ADD", "register:40f0:8", ["const:b433a0:8", "const:4:8"]]
+ 00b433a0 ["CALL", null, ["callee:0057504c:8"]]
- 00b423c8 ["INT_ADD", "register:40f0:8", ["const:b423c8:8", "const:4:8"]]
- 00b423c8 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b433bc ["INT_ADD", "register:40f0:8", ["const:b433bc:8", "const:4:8"]]
+ 00b433bc ["CALL", null, ["callee:00c5bd40:8"]]
- 00b422dc ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b432d0 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-ae15bc8c566306d52d0cf8536e1fb5b6"></a>

### [`00b42434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42434.md) → [`00b43428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b43428.md) _ZN8firebase9analytics8LogEventEPKcPKNS0_9ParameterEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5aa60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa60.md) · 呼出先 10件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)
- 新版 呼出元 1件 [`00c5ba30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5ba30.md) · 呼出先 10件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c030.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.62% / 新版 94.62%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b43448",
      "incomplete_value": true,
      "site": "00b43448",
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
      "definition_site": "00b42454",
      "incomplete_value": true,
      "site": "00b42454",
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
      "definition_site": "00b43508",
      "incomplete_value": true,
      "site": "00b43520",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42514",
      "incomplete_value": true,
      "site": "00b4252c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:508:8"
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
      "definition_site": "00b4350c",
      "incomplete_value": true,
      "site": "00b43520",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:410:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42518",
      "incomplete_value": true,
      "site": "00b4252c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b43444",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b434dc",
      "PARAM",
      [
        "storage",
        "002be4ec",
        null,
        "string"
      ]
    ],
    [
      "00b43508",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b43444",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b434dc",
      "PARAM",
      [
        "storage",
        "002be5ca",
        null,
        "string"
      ]
    ],
    [
      "00b43508",
      "READ",
      [
        "storage",
        "011264c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4252c ["INT_ADD", "register:40f0:8", ["const:b4252c:8", "const:4:8"]]
- 00b4252c ["CALL", null, ["callee:0057504c:8"]]
+ 00b43520 ["INT_ADD", "register:40f0:8", ["const:b43520:8", "const:4:8"]]
+ 00b43520 ["CALL", null, ["callee:0057504c:8"]]
- 00b42548 ["INT_ADD", "register:40f0:8", ["const:b42548:8", "const:4:8"]]
- 00b42548 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b4353c ["INT_ADD", "register:40f0:8", ["const:b4353c:8", "const:4:8"]]
+ 00b4353c ["CALL", null, ["callee:00c5bd40:8"]]
- 00b4244c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b43440 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-b701be83ed8af657476cfcd0a8895e9d"></a>

### [`00b425a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b425a8.md) → [`00b4359c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b4359c.md) _ZN8firebase9analytics19LogAppleTransactionEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 9件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad80.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc80.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.36% / 新版 98.36%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4360c",
      "incomplete_value": false,
      "site": "00b43620",
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
      "definition_site": "00b42618",
      "incomplete_value": false,
      "site": "00b4262c",
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
    "ordinal": 6,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4360c",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4360c",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4262c ["INT_ADD", "register:40f0:8", ["const:b4262c:8", "const:4:8"]]
- 00b4262c ["CALL", null, ["callee:00c5be40:8"]]
+ 00b43620 ["INT_ADD", "register:40f0:8", ["const:b43620:8", "const:4:8"]]
+ 00b43620 ["CALL", null, ["callee:00c5be40:8"]]
- 00b425cc ["INT_ADD", "register:40f0:8", ["const:b425cc:8", "const:4:8"]]
- 00b425cc ["CALL", null, ["callee:00c5bd50:8"]]
+ 00b435c0 ["INT_ADD", "register:40f0:8", ["const:b435c0:8", "const:4:8"]]
+ 00b435c0 ["CALL", null, ["callee:00c5bd50:8"]]
- 00b425d4 ["INT_ADD", "register:40f0:8", ["const:b425d4:8", "const:4:8"]]
- 00b425d4 ["CALL", null, ["callee:00c5bd50:8"]]
+ 00b435c8 ["INT_ADD", "register:40f0:8", ["const:b435c8:8", "const:4:8"]]
+ 00b435c8 ["CALL", null, ["callee:00c5bd50:8"]]
~~~


<a id="compare-feb5b9c974c61ef6fc9f6a7b1c23cefd"></a>

### [`00b42860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42860.md) → [`00b43854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b43854.md) _ZN8firebase9analytics25SetDefaultEventParametersEPKNS0_9ParameterEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b110.md) · 呼出先 10件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)
- 新版 呼出元 1件 [`00c5c0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0e0.md) · 呼出先 10件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c030.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 91.96% / 新版 91.96%

優先判定に残った影響 `call_argument_candidate` 6件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b43874",
      "incomplete_value": true,
      "site": "00b43874",
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
      "definition_site": "00b42880",
      "incomplete_value": true,
      "site": "00b42880",
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
      "definition_site": "00b43950",
      "incomplete_value": true,
      "site": "00b43960",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4295c",
      "incomplete_value": true,
      "site": "00b4296c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:508:8"
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
      "definition_site": "00b43954",
      "incomplete_value": true,
      "site": "00b43960",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42960",
      "incomplete_value": true,
      "site": "00b4296c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:490:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b43870",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43918",
      "PARAM",
      [
        "storage",
        "002b98bf",
        null,
        "string"
      ]
    ],
    [
      "00b4393c",
      "PARAM",
      [
        "storage",
        "002a28c8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b43870",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43918",
      "PARAM",
      [
        "storage",
        "002b999d",
        null,
        "string"
      ]
    ],
    [
      "00b4393c",
      "PARAM",
      [
        "storage",
        "002a2993",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4296c ["INT_ADD", "register:40f0:8", ["const:b4296c:8", "const:4:8"]]
- 00b4296c ["CALL", null, ["callee:0057504c:8"]]
+ 00b43960 ["INT_ADD", "register:40f0:8", ["const:b43960:8", "const:4:8"]]
+ 00b43960 ["CALL", null, ["callee:0057504c:8"]]
- 00b429a4 ["INT_ADD", "register:40f0:8", ["const:b429a4:8", "const:4:8"]]
- 00b429a4 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b43998 ["INT_ADD", "register:40f0:8", ["const:b43998:8", "const:4:8"]]
+ 00b43998 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b429dc ["INT_ADD", "register:40f0:8", ["const:b429dc:8", "const:4:8"]]
- 00b429dc ["CALL", null, ["callee:0057504c:8"]]
+ 00b439d0 ["INT_ADD", "register:40f0:8", ["const:b439d0:8", "const:4:8"]]
+ 00b439d0 ["CALL", null, ["callee:0057504c:8"]]
~~~


<a id="compare-6a9515f968add0738ca3f456ed179d53"></a>

### [`00b42aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42aa4.md) → [`00b43a98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b43a98.md) _ZN8firebase9analytics15SetUserPropertyEPKcS2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.85% / 新版 93.85%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b43ab4",
      "incomplete_value": true,
      "site": "00b43ab4",
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
      "definition_site": "00b42ac0",
      "incomplete_value": true,
      "site": "00b42ac0",
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
      "definition_site": "00b43b28",
      "incomplete_value": true,
      "site": "00b43b3c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42b34",
      "incomplete_value": true,
      "site": "00b42b48",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:508:8"
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
      "definition_site": "00b43b2c",
      "incomplete_value": true,
      "site": "00b43b3c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:418:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42b38",
      "incomplete_value": true,
      "site": "00b42b48",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:458:8"
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
      "00b43ab0",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43b10",
      "PARAM",
      [
        "storage",
        "002a28c8",
        null,
        "string"
      ]
    ],
    [
      "00b43b28",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b43ab0",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43b10",
      "PARAM",
      [
        "storage",
        "002a2993",
        null,
        "string"
      ]
    ],
    [
      "00b43b28",
      "READ",
      [
        "storage",
        "011264c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42b48 ["INT_ADD", "register:40f0:8", ["const:b42b48:8", "const:4:8"]]
- 00b42b48 ["CALL", null, ["callee:0057504c:8"]]
+ 00b43b3c ["INT_ADD", "register:40f0:8", ["const:b43b3c:8", "const:4:8"]]
+ 00b43b3c ["CALL", null, ["callee:0057504c:8"]]
- 00b42b68 ["INT_ADD", "register:40f0:8", ["const:b42b68:8", "const:4:8"]]
- 00b42b68 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b43b5c ["INT_ADD", "register:40f0:8", ["const:b43b5c:8", "const:4:8"]]
+ 00b43b5c ["CALL", null, ["callee:00c5bd40:8"]]
- 00b42ab8 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b43aac ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-6915bd8fa35d4f00235e32a1cf91748f"></a>

### [`00b42ba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42ba8.md) → [`00b43b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b43b9c.md) _ZN8firebase9analytics9SetUserIdEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5aa50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa50.md) · 呼出先 5件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 1件 [`00c5ba20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5ba20.md) · 呼出先 5件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.45% / 新版 92.45%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b43bb4",
      "incomplete_value": true,
      "site": "00b43bb4",
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
      "definition_site": "00b42bc0",
      "incomplete_value": true,
      "site": "00b42bc0",
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
      "definition_site": "00b43c0c",
      "incomplete_value": true,
      "site": "00b43c1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42c18",
      "incomplete_value": true,
      "site": "00b42c28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:508:8"
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
      "definition_site": "00b43c10",
      "incomplete_value": true,
      "site": "00b43c1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:420:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42c1c",
      "incomplete_value": true,
      "site": "00b42c28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:460:8"
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
      "00b43bb0",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43bf4",
      "PARAM",
      [
        "storage",
        "002a28c8",
        null,
        "string"
      ]
    ],
    [
      "00b43c0c",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b43bb0",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43bf4",
      "PARAM",
      [
        "storage",
        "002a2993",
        null,
        "string"
      ]
    ],
    [
      "00b43c0c",
      "READ",
      [
        "storage",
        "011264c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42c28 ["INT_ADD", "register:40f0:8", ["const:b42c28:8", "const:4:8"]]
- 00b42c28 ["CALL", null, ["callee:0057504c:8"]]
+ 00b43c1c ["INT_ADD", "register:40f0:8", ["const:b43c1c:8", "const:4:8"]]
+ 00b43c1c ["CALL", null, ["callee:0057504c:8"]]
- 00b42c44 ["INT_ADD", "register:40f0:8", ["const:b42c44:8", "const:4:8"]]
- 00b42c44 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b43c38 ["INT_ADD", "register:40f0:8", ["const:b43c38:8", "const:4:8"]]
+ 00b43c38 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b42bb8 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b43bac ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-206c6cca4e85b2e00ea79cc4270ad5e8"></a>

### [`00b42c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42c7c.md) → [`00b43c70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b43c70.md) _ZN8firebase9analytics25SetSessionTimeoutDurationEl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5aa40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa40.md) · 呼出先 4件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 1件 [`00c5ba10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5ba10.md) · 呼出先 4件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b43c84",
      "incomplete_value": true,
      "site": "00b43c84",
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
      "definition_site": "00b42c90",
      "incomplete_value": true,
      "site": "00b42c90",
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
      "definition_site": "00b43c9c",
      "incomplete_value": true,
      "site": "00b43cac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42ca8",
      "incomplete_value": true,
      "site": "00b42cb8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:508:8"
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
      "definition_site": "00b43ca0",
      "incomplete_value": true,
      "site": "00b43cac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:428:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42cac",
      "incomplete_value": true,
      "site": "00b42cb8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:468:8"
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
      "00b43c80",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43c9c",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43ca0",
      "READ",
      [
        "storage",
        "01125468",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b43c80",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43c9c",
      "READ",
      [
        "storage",
        "011264c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43ca0",
      "READ",
      [
        "storage",
        "01126428",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42cb8 ["INT_ADD", "register:40f0:8", ["const:b42cb8:8", "const:4:8"]]
- 00b42cb8 ["CALL", null, ["callee:0057504c:8"]]
+ 00b43cac ["INT_ADD", "register:40f0:8", ["const:b43cac:8", "const:4:8"]]
+ 00b43cac ["CALL", null, ["callee:0057504c:8"]]
- 00b42c88 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b43c7c ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b42c8c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:500:8"]]
- 00b42c8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b43c80 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4c0:8"]]
+ 00b43c80 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c68a22b669e14a9c5e7c9cba0c92cce3"></a>

### [`00b42ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42ce0.md) → [`00b43cd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b43cd4.md) _ZN8firebase9analytics18ResetAnalyticsDataEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b43ce8",
      "incomplete_value": true,
      "site": "00b43ce8",
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
      "definition_site": "00b42cf4",
      "incomplete_value": true,
      "site": "00b42cf4",
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
      "definition_site": "00b43cf8",
      "incomplete_value": true,
      "site": "00b43d04",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42d04",
      "incomplete_value": true,
      "site": "00b42d10",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:508:8"
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
      "definition_site": "00b43cfc",
      "incomplete_value": true,
      "site": "00b43d04",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:430:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42d08",
      "incomplete_value": true,
      "site": "00b42d10",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:470:8"
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
      "00b43ce4",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43cf8",
      "READ",
      [
        "storage",
        "01125508",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43cfc",
      "READ",
      [
        "storage",
        "01125470",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b43ce4",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43cf8",
      "READ",
      [
        "storage",
        "011264c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43cfc",
      "READ",
      [
        "storage",
        "01126430",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42d10 ["INT_ADD", "register:40f0:8", ["const:b42d10:8", "const:4:8"]]
- 00b42d10 ["CALL", null, ["callee:0057504c:8"]]
+ 00b43d04 ["INT_ADD", "register:40f0:8", ["const:b43d04:8", "const:4:8"]]
+ 00b43d04 ["CALL", null, ["callee:0057504c:8"]]
- 00b42cec ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b43ce0 ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b42cf0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:500:8"]]
- 00b42cf0 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b43ce4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4c0:8"]]
+ 00b43ce4 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f801d746f295b132e0276848f2b07cb4"></a>

### [`00b42d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42d4c.md) → [`00b43d40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b43d40.md) _ZN8firebase9analytics22GetAnalyticsInstanceIdEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00b43628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43628.md) [`00b44054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44054.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 17件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00b4461c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b4461c.md) [`00b45048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45048.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 95.76% / 新版 95.76%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_condition` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b43d70",
      "incomplete_value": true,
      "site": "00b43d70",
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
      "definition_site": "00b42d7c",
      "incomplete_value": true,
      "site": "00b42d7c",
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
      "definition_site": "00b43d98",
      "incomplete_value": true,
      "site": "00b43dac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:758:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42da4",
      "incomplete_value": true,
      "site": "00b42db8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
    "ordinal": 3,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b43e70",
      "incomplete_value": false,
      "site": "00b43e74",
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
            "const:993:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b42e7c",
      "incomplete_value": false,
      "site": "00b42e80",
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
            "const:8c8:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b43d6c",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43d98",
      "READ",
      [
        "storage",
        "00c9b788",
        null,
        "pointer"
      ]
    ],
    [
      "00b43d98",
      "PARAM",
      [
        "storage",
        "00b44054",
        "firebase::ReferenceCountedFutureImpl::DeleteT<std::__ndk1::basic_string<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>>",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b43d6c",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b43d98",
      "READ",
      [
        "storage",
        "00c9c758",
        null,
        "pointer"
      ]
    ],
    [
      "00b43d98",
      "PARAM",
      [
        "storage",
        "00b45048",
        "firebase::ReferenceCountedFutureImpl::DeleteT<std::__ndk1::basic_string<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>>",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b42db8 ["INT_ADD", "register:40f0:8", ["const:b42db8:8", "const:4:8"]]
- 00b42db8 ["CALL", null, ["callee:00c5bee0:8"]]
+ 00b43dac ["INT_ADD", "register:40f0:8", ["const:b43dac:8", "const:4:8"]]
+ 00b43dac ["CALL", null, ["callee:00c5bee0:8"]]
- 00b42e80 ["INT_ADD", "register:40f0:8", ["const:b42e80:8", "const:4:8"]]
- 00b42e80 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b43e74 ["INT_ADD", "register:40f0:8", ["const:b43e74:8", "const:4:8"]]
+ 00b43e74 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b42eb0 ["INT_ADD", "register:40f0:8", ["const:b42eb0:8", "const:4:8"]]
- 00b42eb0 ["CALL", null, ["callee:00c5bfe0:8"]]
+ 00b43ea4 ["INT_ADD", "register:40f0:8", ["const:b43ea4:8", "const:4:8"]]
+ 00b43ea4 ["CALL", null, ["callee:00c5bfe0:8"]]
~~~


<a id="compare-e35bc6825c519bebad2bf121e167df90"></a>

### [`00b42fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42fa0.md) → [`00b43f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b43f94.md) _ZN8firebase9analytics32GetAnalyticsInstanceIdLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b120.md) · 呼出先 8件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad80.md)
- 新版 呼出元 1件 [`00c5c0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0f0.md) · 呼出先 8件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc80.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd50.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 97.62% / 新版 97.62%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b43fb0",
      "incomplete_value": true,
      "site": "00b43fb0",
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
      "definition_site": "00b42fbc",
      "incomplete_value": true,
      "site": "00b42fbc",
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
      "definition_site": "00b44004",
      "incomplete_value": false,
      "site": "00b44008",
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
            "const:993:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b43010",
      "incomplete_value": false,
      "site": "00b43014",
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
            "const:8c8:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b42fbc"
      ],
      [
        "FALL_THROUGH",
        "00b43fb0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b43fb0",
      "incomplete_value": true,
      "site": "00b43fe4",
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
      "definition_site": "00b42fbc",
      "incomplete_value": true,
      "site": "00b42ff0",
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
      "00b43fa8",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44004",
      "PARAM",
      [
        "storage",
        "002a28c8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b43fa8",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44004",
      "PARAM",
      [
        "storage",
        "002a2993",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b43014 ["INT_ADD", "register:40f0:8", ["const:b43014:8", "const:4:8"]]
- 00b43014 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b44008 ["INT_ADD", "register:40f0:8", ["const:b44008:8", "const:4:8"]]
+ 00b44008 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b42fb0 ["COPY", "register:4048:8", ["const:1125000:8"]]
+ 00b43fa4 ["COPY", "register:4048:8", ["const:1126000:8"]]
- 00b42fb4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:500:8"]]
- 00b42fb4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b43fa8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:4c0:8"]]
+ 00b43fa8 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b4ade730e4bfe0cd20b1e19c94c187f3"></a>

### [`00b43114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43114.md) → [`00b44108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b44108.md) _ZN8firebase9analytics12GetSessionIdEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 19件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00b43b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43b8c.md) [`00b4408c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b4408c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 19件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00b44b80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b44b80.md) [`00b45080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45080.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 92.04% / 新版 92.04%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 4件, `store_condition` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b44138",
      "incomplete_value": true,
      "site": "00b44138",
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
      "definition_site": "00b43144",
      "incomplete_value": true,
      "site": "00b43144",
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
      "definition_site": "00b44150",
      "incomplete_value": true,
      "site": "00b44164",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:760:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4315c",
      "incomplete_value": true,
      "site": "00b43170",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
    "ordinal": 2,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4418c",
      "incomplete_value": true,
      "site": "00b44198",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b43198",
      "incomplete_value": true,
      "site": "00b431a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:508:8"
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
      "00b44134",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44150",
      "READ",
      [
        "storage",
        "00c9b790",
        null,
        "pointer"
      ]
    ],
    [
      "00b44150",
      "PARAM",
      [
        "storage",
        "00b4408c",
        "firebase::ReferenceCountedFutureImpl::DeleteT<long>",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b44134",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44150",
      "READ",
      [
        "storage",
        "00c9c760",
        null,
        "pointer"
      ]
    ],
    [
      "00b44150",
      "PARAM",
      [
        "storage",
        "00b45080",
        "firebase::ReferenceCountedFutureImpl::DeleteT<long>",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b43170 ["INT_ADD", "register:40f0:8", ["const:b43170:8", "const:4:8"]]
- 00b43170 ["CALL", null, ["callee:00c5bee0:8"]]
+ 00b44164 ["INT_ADD", "register:40f0:8", ["const:b44164:8", "const:4:8"]]
+ 00b44164 ["CALL", null, ["callee:00c5bee0:8"]]
- 00b431a4 ["INT_ADD", "register:40f0:8", ["const:b431a4:8", "const:4:8"]]
- 00b431a4 ["CALL", null, ["callee:00497b94:8"]]
+ 00b44198 ["INT_ADD", "register:40f0:8", ["const:b44198:8", "const:4:8"]]
+ 00b44198 ["CALL", null, ["callee:00497b94:8"]]
- 00b431ec ["INT_ADD", "register:40f0:8", ["const:b431ec:8", "const:4:8"]]
- 00b431ec ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b441e0 ["INT_ADD", "register:40f0:8", ["const:b441e0:8", "const:4:8"]]
+ 00b441e0 ["CALL", null, ["callee:00c5bd40:8"]]
~~~


<a id="compare-bc8ee273d1de74139807e3890f163606"></a>

### [`00b433dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b433dc.md) → [`00b443d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b443d0.md) _ZN8firebase9analytics22GetSessionIdLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 8件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad80.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc80.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.62% / 新版 97.62%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b44440",
      "incomplete_value": false,
      "site": "00b44444",
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
            "const:993:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4344c",
      "incomplete_value": false,
      "site": "00b43450",
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
            "const:8c8:8"
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
      "00b443e4",
      "READ",
      [
        "storage",
        "01125500",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44440",
      "PARAM",
      [
        "storage",
        "002a28c8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b443e4",
      "READ",
      [
        "storage",
        "011264c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b44440",
      "PARAM",
      [
        "storage",
        "002a2993",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b43450 ["INT_ADD", "register:40f0:8", ["const:b43450:8", "const:4:8"]]
- 00b43450 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b44444 ["INT_ADD", "register:40f0:8", ["const:b44444:8", "const:4:8"]]
+ 00b44444 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b433ec ["COPY", "register:4048:8", ["const:1125000:8"]]
+ 00b443e0 ["COPY", "register:4048:8", ["const:1126000:8"]]
- 00b433f0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:500:8"]]
- 00b433f0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b443e4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:4c0:8"]]
+ 00b443e4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4641767625df055987251dad85fa8447"></a>

### [`00b4384c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b4384c.md) → [`00b44840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b44840.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEZNS0_26Complet

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ae30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae30.md) · 呼出先 11件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5be00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be00.md) · 呼出先 11件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.75% / 新版 98.75%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b448ac",
      "incomplete_value": false,
      "site": "00b448b0",
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
      "definition_site": "00b438b8",
      "incomplete_value": false,
      "site": "00b438bc",
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
      "00b448ac",
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
      "00b448ac",
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
- 00b438bc ["INT_ADD", "register:40f0:8", ["const:b438bc:8", "const:4:8"]]
- 00b438bc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b448b0 ["INT_ADD", "register:40f0:8", ["const:b448b0:8", "const:4:8"]]
+ 00b448b0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b43880 ["INT_ADD", "register:40f0:8", ["const:b43880:8", "const:4:8"]]
- 00b43880 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b44874 ["INT_ADD", "register:40f0:8", ["const:b44874:8", "const:4:8"]]
+ 00b44874 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b4388c ["INT_ADD", "register:40f0:8", ["const:b4388c:8", "const:4:8"]]
- 00b4388c ["CALL", null, ["callee:00c5bf20:8"]]
+ 00b44880 ["INT_ADD", "register:40f0:8", ["const:b44880:8", "const:4:8"]]
+ 00b44880 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-a4957dde40c4b1cb20083f8a925e187c"></a>

### [`00b43b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43b8c.md) → [`00b44b80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b44b80.md) FUN_00b44b80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b43114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43114.md) · 呼出先 9件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad80.md)
- 新版 呼出元 1件 [`00b44108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b44108.md) · 呼出先 9件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc80.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5bd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.19% / 新版 94.19%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b44c08",
      "incomplete_value": false,
      "site": "00b44c10",
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
            "const:782:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b43c14",
      "incomplete_value": false,
      "site": "00b43c1c",
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
            "const:6b5:8"
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
      "definition_site": "00b44c3c",
      "incomplete_value": false,
      "site": "00b44c50",
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
      "definition_site": "00b43c48",
      "incomplete_value": false,
      "site": "00b43c5c",
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
    "ordinal": 6,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b44be8",
      "PARAM",
      [
        "storage",
        "002a1969",
        null,
        "string"
      ]
    ],
    [
      "00b44c08",
      "PARAM",
      [
        "storage",
        "002aa6b5",
        null,
        "string"
      ]
    ],
    [
      "00b44c3c",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b44be8",
      "PARAM",
      [
        "storage",
        "002a19a9",
        null,
        "string"
      ]
    ],
    [
      "00b44c08",
      "PARAM",
      [
        "storage",
        "002aa782",
        null,
        "string"
      ]
    ],
    [
      "00b44c3c",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b43c1c ["INT_ADD", "register:40f0:8", ["const:b43c1c:8", "const:4:8"]]
- 00b43c1c ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b44c10 ["INT_ADD", "register:40f0:8", ["const:b44c10:8", "const:4:8"]]
+ 00b44c10 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b43c5c ["INT_ADD", "register:40f0:8", ["const:b43c5c:8", "const:4:8"]]
- 00b43c5c ["CALL", null, ["callee:00c5be30:8"]]
+ 00b44c50 ["INT_ADD", "register:40f0:8", ["const:b44c50:8", "const:4:8"]]
+ 00b44c50 ["CALL", null, ["callee:00c5be30:8"]]
- 00b43bc8 ["INT_ADD", "register:40f0:8", ["const:b43bc8:8", "const:4:8"]]
- 00b43bc8 ["CALL", null, ["callee:00c5bd50:8"]]
+ 00b44bbc ["INT_ADD", "register:40f0:8", ["const:b44bbc:8", "const:4:8"]]
+ 00b44bbc ["CALL", null, ["callee:00c5bd50:8"]]
~~~


<a id="compare-dd2961bb2c9a033e1a2716b14a086f0d"></a>

### [`00b43d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43d04.md) → [`00b44cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b44cf8.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalImZNS0_26CompleteWithResultInternalImEEvRKNS_12FutureHandleEiPKcRKT_EUlPmE_EEvS5_i

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ae60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae60.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5be30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be30.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.63% / 新版 98.63%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b44d64",
      "incomplete_value": false,
      "site": "00b44d68",
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
      "definition_site": "00b43d70",
      "incomplete_value": false,
      "site": "00b43d74",
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
      "00b44d64",
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
      "00b44d64",
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
- 00b43d74 ["INT_ADD", "register:40f0:8", ["const:b43d74:8", "const:4:8"]]
- 00b43d74 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b44d68 ["INT_ADD", "register:40f0:8", ["const:b44d68:8", "const:4:8"]]
+ 00b44d68 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b43d38 ["INT_ADD", "register:40f0:8", ["const:b43d38:8", "const:4:8"]]
- 00b43d38 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b44d2c ["INT_ADD", "register:40f0:8", ["const:b44d2c:8", "const:4:8"]]
+ 00b44d2c ["CALL", null, ["callee:00c5baa0:8"]]
- 00b43d44 ["INT_ADD", "register:40f0:8", ["const:b43d44:8", "const:4:8"]]
- 00b43d44 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00b44d38 ["INT_ADD", "register:40f0:8", ["const:b44d38:8", "const:4:8"]]
+ 00b44d38 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-9e694a99ad61d52d27fa106ba2686ab7"></a>

### [`00b43f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43f4c.md) → [`00b44f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b44f40.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalIvEEvRKNS_12FutureHandleEiPKcEUlPvE_EEvS5_iS7_RKT0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ae70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae70.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5be40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be40.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b44fa4",
      "incomplete_value": false,
      "site": "00b44fa8",
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
      "definition_site": "00b43fb0",
      "incomplete_value": false,
      "site": "00b43fb4",
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
      "00b44fa4",
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
      "00b44fa4",
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
- 00b43fb4 ["INT_ADD", "register:40f0:8", ["const:b43fb4:8", "const:4:8"]]
- 00b43fb4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b44fa8 ["INT_ADD", "register:40f0:8", ["const:b44fa8:8", "const:4:8"]]
+ 00b44fa8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b43f78 ["INT_ADD", "register:40f0:8", ["const:b43f78:8", "const:4:8"]]
- 00b43f78 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b44f6c ["INT_ADD", "register:40f0:8", ["const:b44f6c:8", "const:4:8"]]
+ 00b44f6c ["CALL", null, ["callee:00c5baa0:8"]]
- 00b43f84 ["INT_ADD", "register:40f0:8", ["const:b43f84:8", "const:4:8"]]
- 00b43f84 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00b44f78 ["INT_ADD", "register:40f0:8", ["const:b44f78:8", "const:4:8"]]
+ 00b44f78 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-4816f81d956d8222455e367aa3848341"></a>

### [`00b44098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44098.md) → [`00b4508c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b4508c.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIlZNS0_26CompleteWithResultInternalIlEEvRKNS_12FutureHandleEiPKcRKT_EUlPlE_EEvS5_i

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ae50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae50.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5be20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be20.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.63% / 新版 98.63%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b450f8",
      "incomplete_value": false,
      "site": "00b450fc",
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
      "definition_site": "00b44104",
      "incomplete_value": false,
      "site": "00b44108",
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
      "00b450f8",
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
      "00b450f8",
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
- 00b44108 ["INT_ADD", "register:40f0:8", ["const:b44108:8", "const:4:8"]]
- 00b44108 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b450fc ["INT_ADD", "register:40f0:8", ["const:b450fc:8", "const:4:8"]]
+ 00b450fc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b440cc ["INT_ADD", "register:40f0:8", ["const:b440cc:8", "const:4:8"]]
- 00b440cc ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b450c0 ["INT_ADD", "register:40f0:8", ["const:b450c0:8", "const:4:8"]]
+ 00b450c0 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b440d8 ["INT_ADD", "register:40f0:8", ["const:b440d8:8", "const:4:8"]]
- 00b440d8 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00b450cc ["INT_ADD", "register:40f0:8", ["const:b450cc:8", "const:4:8"]]
+ 00b450cc ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-f3d0f51e9f6fb97f53157d850b23a115"></a>

### [`00b441ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b441ec.md) → [`00b451e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b451e0.md) _ZN8firebase23LogMessageWithCallbackVENS_8LogLevelEPKcSt9__va_list

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md) · 呼出先 8件 [`00b441bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b441bc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 1件 [`00c5c1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1c0.md) · 呼出先 8件 [`00b451b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b451b0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 branch_value, call_argument_candidate, call_target, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 80.33% / 新版 80.33%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `call_target` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4521c",
      "incomplete_value": true,
      "site": "00b4521c",
      "value": [
        "INT_NOTEQUAL",
        "1",
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
      "definition_site": "00b44228",
      "incomplete_value": true,
      "site": "00b44228",
      "value": [
        "INT_NOTEQUAL",
        "1",
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
      "definition_site": "00b4526c",
      "incomplete_value": false,
      "site": "00b45278",
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
            "const:4e1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44278",
      "incomplete_value": false,
      "site": "00b44284",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:521:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "00b4529c",
      "incomplete_value": true,
      "site": "00b4529c",
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
      "definition_site": "00b442a8",
      "incomplete_value": true,
      "site": "00b442a8",
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
      "00b45210",
      "READ",
      [
        "storage",
        "00c9b7a8",
        null,
        "pointer"
      ]
    ],
    [
      "00b45218",
      "READ",
      [
        "storage",
        "01125518",
        "firebase::g_log_mutex",
        "undefined8"
      ]
    ],
    [
      "00b45234",
      "WRITE",
      [
        "storage",
        "01125518",
        "firebase::g_log_mutex",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45210",
      "READ",
      [
        "storage",
        "00c9c778",
        null,
        "pointer"
      ]
    ],
    [
      "00b45218",
      "READ",
      [
        "storage",
        "011264d8",
        "firebase::g_log_mutex",
        "undefined8"
      ]
    ],
    [
      "00b45234",
      "WRITE",
      [
        "storage",
        "011264d8",
        "firebase::g_log_mutex",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44284 ["INT_ADD", "register:40f0:8", ["const:b44284:8", "const:4:8"]]
- 00b44284 ["CALL", null, ["callee:00c5c1f0:8"]]
+ 00b45278 ["INT_ADD", "register:40f0:8", ["const:b45278:8", "const:4:8"]]
+ 00b45278 ["CALL", null, ["callee:00c5c1f0:8"]]
- 00b442a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b442a8 ["INT_ADD", "register:40f0:8", ["const:b442a8:8", "const:4:8"]]
- 00b442a8 ["CALLIND", null, ["register:0:8"]]
+ 00b4529c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4529c ["INT_ADD", "register:40f0:8", ["const:b4529c:8", "const:4:8"]]
+ 00b4529c ["CALLIND", null, ["register:0:8"]]
- 00b4420c ["COPY", "register:40c0:8", ["const:c9b000:8"]]
+ 00b45200 ["COPY", "register:40c0:8", ["const:c9c000:8"]]
~~~


<a id="compare-0bda6f32d2357f261735e2cf4c993adf"></a>

### [`00b442e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b442e0.md) → [`00b452d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b452d4.md) _ZN8firebase11GetLogLevelEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1a0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5c170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c170.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b452dc",
      "incomplete_value": true,
      "site": "00b452e0",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b442e8",
      "incomplete_value": true,
      "site": "00b442ec",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "LOAD"
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
      "00b452d8",
      "READ",
      [
        "storage",
        "00c9b7a0",
        null,
        "pointer"
      ]
    ],
    [
      "00b452dc",
      "READ",
      [
        "storage",
        "00ca4710",
        "firebase::g_log_level",
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b452d8",
      "READ",
      [
        "storage",
        "00c9c770",
        null,
        "pointer"
      ]
    ],
    [
      "00b452dc",
      "READ",
      [
        "storage",
        "00ca56e0",
        "firebase::g_log_level",
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b442e0 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00b452d4 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00b442e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:7a0:8"]]
- 00b442e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b452d8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:770:8"]]
+ 00b452d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2acda43d7db160696be9276d2262add3"></a>

### [`00b44714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44714.md) → [`00b45708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45708.md) _ZN8firebase14LogGetCallbackEPPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00b441bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b441bc.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00b451b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b451b0.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b45720",
      "incomplete_value": false,
      "site": "00b45724",
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
            "const:feb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4472c",
      "incomplete_value": false,
      "site": "00b44730",
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
            "const:f1e:8"
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
      "definition_site": "00b45744",
      "incomplete_value": true,
      "site": "00b4574c",
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
      "definition_site": "00b44750",
      "incomplete_value": true,
      "site": "00b44758",
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b45720",
      "PARAM",
      [
        "storage",
        "002abf1e",
        null,
        "string"
      ]
    ],
    [
      "00b4572c",
      "READ",
      [
        "storage",
        "00c9b7b8",
        null,
        "pointer"
      ]
    ],
    [
      "00b45730",
      "READ",
      [
        "storage",
        "01125510",
        "firebase::g_log_callback_data",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45720",
      "PARAM",
      [
        "storage",
        "002abfeb",
        null,
        "string"
      ]
    ],
    [
      "00b4572c",
      "READ",
      [
        "storage",
        "00c9c788",
        null,
        "pointer"
      ]
    ],
    [
      "00b45730",
      "READ",
      [
        "storage",
        "011264d0",
        "firebase::g_log_callback_data",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44730 ["INT_ADD", "register:40f0:8", ["const:b44730:8", "const:4:8"]]
- 00b44730 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b45724 ["INT_ADD", "register:40f0:8", ["const:b45724:8", "const:4:8"]]
+ 00b45724 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4472c ["COPY", "tmp:0:8", ["const:f1e:8"]]
- 00b4472c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4472c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4472c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b45720 ["COPY", "tmp:0:8", ["const:feb:8"]]
+ 00b45720 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b45720 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b45720 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b44734 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00b45728 ["COPY", "register:4040:8", ["const:c9c000:8"]]
~~~


<a id="compare-bc72f6ccb733fc16718ccf2656142baa"></a>

### [`00b44994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44994.md) → [`00b45988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45988.md) _ZN8firebase4util12class_loader19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEE

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
      "definition_site": "00b459b4",
      "incomplete_value": true,
      "site": "00b459b4",
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
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b449c0",
      "incomplete_value": true,
      "site": "00b449c0",
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
            "const:728:8"
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
      "definition_site": "00b4599c",
      "incomplete_value": true,
      "site": "00b4599c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b449a8",
      "incomplete_value": true,
      "site": "00b449a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b459a8",
      "incomplete_value": false,
      "site": "00b459ac",
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
            "const:aa1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b449b4",
      "incomplete_value": false,
      "site": "00b449b8",
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
            "const:9d2:8"
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
      "00b45998",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b459a8",
      "PARAM",
      [
        "storage",
        "002b89d2",
        null,
        "string"
      ]
    ],
    [
      "00b459b4",
      "WRITE",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45998",
      "READ",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b459a8",
      "PARAM",
      [
        "storage",
        "002b8aa1",
        null,
        "string"
      ]
    ],
    [
      "00b459b4",
      "WRITE",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b449b8 ["INT_ADD", "register:40f0:8", ["const:b449b8:8", "const:4:8"]]
- 00b449b8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b459ac ["INT_ADD", "register:40f0:8", ["const:b459ac:8", "const:4:8"]]
+ 00b459ac ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b449c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
- 00b449c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b459b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6e8:8"]]
+ 00b459b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b449a0 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b45994 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-14d614e7d9dc166d372ce7bc5ebfbcb0"></a>

### [`00b449d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b449d4.md) → [`00b459c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b459c8.md) _ZN8firebase4util15FindClassGlobalEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEEPKcNS0_16ClassReq

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) · 呼出先 4件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md) [`00c5b400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b400.md) [`00c5b640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b640.md)
- 新版 呼出元 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) · 呼出先 4件 [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1d0.md) [`00c5c3d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c3d0.md) [`00c5c610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c610.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b459e8",
      "incomplete_value": false,
      "site": "00b459fc",
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
            "const:d23:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b449f4",
      "incomplete_value": false,
      "site": "00b44a08",
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
            "const:c54:8"
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
      "definition_site": "00b45a34",
      "incomplete_value": false,
      "site": "00b45a40",
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
            "const:610:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44a40",
      "incomplete_value": false,
      "site": "00b44a4c",
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
            "const:5c6:8"
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
      "definition_site": "00b45acc",
      "incomplete_value": false,
      "site": "00b45ad8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:30b000:8"
          ],
          [
            "leaf",
            "const:a60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44ad8",
      "incomplete_value": false,
      "site": "00b44ae4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:30b000:8"
          ],
          [
            "leaf",
            "const:a20:8"
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
      "00b459e8",
      "PARAM",
      [
        "storage",
        "002b6c54",
        null,
        "string"
      ]
    ],
    [
      "00b45a34",
      "PARAM",
      [
        "storage",
        "002b25c6",
        null,
        "string"
      ]
    ],
    [
      "00b45a78",
      "PARAM",
      [
        "storage",
        "002a9564",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b459e8",
      "PARAM",
      [
        "storage",
        "002b6d23",
        null,
        "string"
      ]
    ],
    [
      "00b45a34",
      "PARAM",
      [
        "storage",
        "002b2610",
        null,
        "string"
      ]
    ],
    [
      "00b45a78",
      "PARAM",
      [
        "storage",
        "002a9631",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44a08 ["INT_ADD", "register:40f0:8", ["const:b44a08:8", "const:4:8"]]
- 00b44a08 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00b459fc ["INT_ADD", "register:40f0:8", ["const:b459fc:8", "const:4:8"]]
+ 00b459fc ["CALL", null, ["callee:00c5c1d0:8"]]
- 00b44a4c ["INT_ADD", "register:40f0:8", ["const:b44a4c:8", "const:4:8"]]
- 00b44a4c ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00b45a40 ["INT_ADD", "register:40f0:8", ["const:b45a40:8", "const:4:8"]]
+ 00b45a40 ["CALL", null, ["callee:00c5c1d0:8"]]
- 00b44ae4 ["INT_ADD", "register:40f0:8", ["const:b44ae4:8", "const:4:8"]]
- 00b44ae4 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b45ad8 ["INT_ADD", "register:40f0:8", ["const:b45ad8:8", "const:4:8"]]
+ 00b45ad8 ["CALL", null, ["callee:00c5bd40:8"]]
~~~


<a id="compare-0015e28134852c56cc124f408b3739a3"></a>

### [`00b44b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44b04.md) → [`00b45af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45af8.md) _ZN8firebase4util12class_loader19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEE

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
      "definition_site": "00b45b24",
      "incomplete_value": true,
      "site": "00b45b24",
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
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44b30",
      "incomplete_value": true,
      "site": "00b44b30",
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
            "const:728:8"
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
      "definition_site": "00b45b0c",
      "incomplete_value": true,
      "site": "00b45b0c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44b18",
      "incomplete_value": true,
      "site": "00b44b18",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b45b14",
      "incomplete_value": false,
      "site": "00b45b1c",
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
            "const:aa1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44b20",
      "incomplete_value": false,
      "site": "00b44b28",
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
            "const:9d2:8"
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
      "00b45b08",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45b14",
      "PARAM",
      [
        "storage",
        "002b89d2",
        null,
        "string"
      ]
    ],
    [
      "00b45b24",
      "WRITE",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45b08",
      "READ",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45b14",
      "PARAM",
      [
        "storage",
        "002b8aa1",
        null,
        "string"
      ]
    ],
    [
      "00b45b24",
      "WRITE",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44b28 ["INT_ADD", "register:40f0:8", ["const:b44b28:8", "const:4:8"]]
- 00b44b28 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b45b1c ["INT_ADD", "register:40f0:8", ["const:b45b1c:8", "const:4:8"]]
+ 00b45b1c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b44b30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
- 00b44b30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b45b24 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6e8:8"]]
+ 00b45b24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b44b10 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b45b04 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-b807c9dc37fad2ef54d3f5e68545b813"></a>

### [`00b44b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44b44.md) → [`00b45b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45b38.md) _ZN8firebase4util12class_loader10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b45b68",
      "incomplete_value": true,
      "site": "00b45b68",
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
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44b74",
      "incomplete_value": true,
      "site": "00b44b74",
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
            "const:728:8"
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
      "definition_site": "00b45b4c",
      "incomplete_value": true,
      "site": "00b45b4c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44b58",
      "incomplete_value": true,
      "site": "00b44b58",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b44b58"
      ],
      [
        "FALL_THROUGH",
        "00b45b4c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b45b4c",
      "incomplete_value": true,
      "site": "00b45b68",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44b58",
      "incomplete_value": true,
      "site": "00b44b74",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b45b48",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45b58",
      "PARAM",
      [
        "storage",
        "002b89d2",
        null,
        "string"
      ]
    ],
    [
      "00b45b68",
      "WRITE",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45b48",
      "READ",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45b58",
      "PARAM",
      [
        "storage",
        "002b8aa1",
        null,
        "string"
      ]
    ],
    [
      "00b45b68",
      "WRITE",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44b74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
- 00b44b74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b45b68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6e8:8"]]
+ 00b45b68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b44b50 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b45b44 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b44b54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
- 00b44b54 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b45b48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6e8:8"]]
+ 00b45b48 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-48c2012bbec61aaeecef2e37fb5859f4"></a>

### [`00b44b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44b88.md) → [`00b45b7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45b7c.md) _ZN8firebase4util12class_loader10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b45bac",
      "incomplete_value": true,
      "site": "00b45bac",
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
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44bb8",
      "incomplete_value": true,
      "site": "00b44bb8",
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
            "const:728:8"
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
      "definition_site": "00b45b90",
      "incomplete_value": true,
      "site": "00b45b90",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44b9c",
      "incomplete_value": true,
      "site": "00b44b9c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b44b9c"
      ],
      [
        "FALL_THROUGH",
        "00b45b90"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b45b90",
      "incomplete_value": true,
      "site": "00b45bac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44b9c",
      "incomplete_value": true,
      "site": "00b44bb8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b45b8c",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45b98",
      "PARAM",
      [
        "storage",
        "002b89d2",
        null,
        "string"
      ]
    ],
    [
      "00b45bac",
      "WRITE",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45b8c",
      "READ",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45b98",
      "PARAM",
      [
        "storage",
        "002b8aa1",
        null,
        "string"
      ]
    ],
    [
      "00b45bac",
      "WRITE",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44bb8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
- 00b44bb8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b45bac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6e8:8"]]
+ 00b45bac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b44b94 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b45b88 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b44b98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:728:8"]]
- 00b44b98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b45b8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6e8:8"]]
+ 00b45b8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e37295023e701843ed1fb27d5c722f8d"></a>

### [`00b44bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44bd8.md) → [`00b45bcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45bcc.md) _ZN8firebase4util12class_loader15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b45c54",
      "incomplete_value": true,
      "site": "00b45c54",
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
            "const:6f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44c60",
      "incomplete_value": true,
      "site": "00b44c60",
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
            "const:730:8"
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
      "definition_site": "00b45c00",
      "incomplete_value": true,
      "site": "00b45c0c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:6e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44c0c",
      "incomplete_value": true,
      "site": "00b44c18",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:728:8"
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
      "00b45be0",
      "READ",
      [
        "storage",
        "01125730",
        null,
        "undefined1"
      ]
    ],
    [
      "00b45c00",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45c54",
      "WRITE",
      [
        "storage",
        "01125730",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b45be0",
      "READ",
      [
        "storage",
        "011266f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b45c00",
      "READ",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45c54",
      "WRITE",
      [
        "storage",
        "011266f0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44c18 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b44c18 ["INT_ADD", "register:40f0:8", ["const:b44c18:8", "const:4:8"]]
- 00b44c18 ["CALLIND", null, ["register:0:8"]]
+ 00b45c0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b45c0c ["INT_ADD", "register:40f0:8", ["const:b45c0c:8", "const:4:8"]]
+ 00b45c0c ["CALLIND", null, ["register:0:8"]]
- 00b44c60 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b44c60 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:730:8"]]
- 00b44c60 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b45c54 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b45c54 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:6f0:8"]]
+ 00b45c54 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b44be8 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b45bdc ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-a9586b4642145f3aff17d38fd797593b"></a>

### [`00b44cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44cd0.md) → [`00b45cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45cc4.md) _ZN8firebase4util12class_loader12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b45d00",
      "incomplete_value": true,
      "site": "00b45d00",
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
            "const:6f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44d0c",
      "incomplete_value": true,
      "site": "00b44d0c",
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
            "const:730:8"
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
      "definition_site": "00b45d50",
      "incomplete_value": true,
      "site": "00b45d50",
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
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44d5c",
      "incomplete_value": true,
      "site": "00b44d5c",
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
            "const:728:8"
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
      "definition_site": "00b45cdc",
      "incomplete_value": true,
      "site": "00b45cdc",
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
      "definition_site": "00b44ce8",
      "incomplete_value": true,
      "site": "00b44ce8",
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
      "00b45cd8",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45ce4",
      "READ",
      [
        "storage",
        "01125730",
        null,
        "undefined1"
      ]
    ],
    [
      "00b45d00",
      "WRITE",
      [
        "storage",
        "01125730",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b45cd8",
      "READ",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45ce4",
      "READ",
      [
        "storage",
        "011266f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b45d00",
      "WRITE",
      [
        "storage",
        "011266f0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44d0c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b44d0c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b44d0c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:730:8"]]
- 00b44d0c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b45d00 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b45d00 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b45d00 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:6f0:8"]]
+ 00b45d00 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b44d58 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b44d58 ["INT_ADD", "register:40f0:8", ["const:b44d58:8", "const:4:8"]]
- 00b44d58 ["CALLIND", null, ["register:0:8"]]
+ 00b45d4c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b45d4c ["INT_ADD", "register:40f0:8", ["const:b45d4c:8", "const:4:8"]]
+ 00b45d4c ["CALLIND", null, ["register:0:8"]]
- 00b44d5c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:728:8"]]
- 00b44d5c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b44d5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b45d50 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6e8:8"]]
+ 00b45d50 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b45d50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-615badd210d4caed670f403215c0037b"></a>

### [`00b44d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44d70.md) → [`00b45d64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45d64.md) _ZN8firebase4util12class_loader14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b45da4",
      "incomplete_value": true,
      "site": "00b45da4",
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
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44db0",
      "incomplete_value": true,
      "site": "00b44db0",
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
            "const:728:8"
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
      "definition_site": "00b45d80",
      "incomplete_value": true,
      "site": "00b45d80",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44d8c",
      "incomplete_value": true,
      "site": "00b44d8c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b45d88",
      "incomplete_value": false,
      "site": "00b45d9c",
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
            "const:aa1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44d94",
      "incomplete_value": false,
      "site": "00b44da8",
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
            "const:9d2:8"
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
      "00b45d78",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45d88",
      "PARAM",
      [
        "storage",
        "002b89d2",
        null,
        "string"
      ]
    ],
    [
      "00b45da4",
      "WRITE",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b45d78",
      "READ",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b45d88",
      "PARAM",
      [
        "storage",
        "002b8aa1",
        null,
        "string"
      ]
    ],
    [
      "00b45da4",
      "WRITE",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44da8 ["INT_ADD", "register:40f0:8", ["const:b44da8:8", "const:4:8"]]
- 00b44da8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b45d9c ["INT_ADD", "register:40f0:8", ["const:b45d9c:8", "const:4:8"]]
+ 00b45d9c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b44db0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:728:8"]]
- 00b44db0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b45da4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6e8:8"]]
+ 00b45da4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b44d7c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b45d70 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-44505445fd0174811136987e2d0f62c2"></a>

### [`00b44de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44de0.md) → [`00b45dd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45dd4.md) _ZN8firebase4util15LookupMethodIdsEP7_JNIEnvP7_jclassPKNS0_19MethodNameSignatureEmPP10_jmethodIDPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md) · 呼出先 5件 [`00b5183c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b5183c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md)
- 新版 呼出元 1件 [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md) · 呼出先 5件 [`00b52830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b52/00b52830.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.32% / 新版 90.32%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b45e2c",
      "incomplete_value": false,
      "site": "00b45e34",
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
            "const:8be:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44e38",
      "incomplete_value": false,
      "site": "00b44e40",
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
            "const:874:8"
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
      "definition_site": "00b45f70",
      "incomplete_value": false,
      "site": "00b45f74",
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
            "const:dea:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44f7c",
      "incomplete_value": false,
      "site": "00b44f80",
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
            "const:d0c:8"
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
      "definition_site": "00b45fa8",
      "incomplete_value": false,
      "site": "00b45fac",
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
            "const:166:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b44fb4",
      "incomplete_value": false,
      "site": "00b44fb8",
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
            "const:99:8"
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
      "00b45e2c",
      "PARAM",
      [
        "storage",
        "002c0874",
        null,
        "string"
      ]
    ],
    [
      "00b45f20",
      "PARAM",
      [
        "storage",
        "002b1553",
        null,
        "string"
      ]
    ],
    [
      "00b45f20",
      "PARAM",
      [
        "storage",
        "002bad03",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b45e2c",
      "PARAM",
      [
        "storage",
        "002c08be",
        null,
        "string"
      ]
    ],
    [
      "00b45f20",
      "PARAM",
      [
        "storage",
        "002b162a",
        null,
        "string"
      ]
    ],
    [
      "00b45f20",
      "PARAM",
      [
        "storage",
        "002bade1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b44e40 ["INT_ADD", "register:40f0:8", ["const:b44e40:8", "const:4:8"]]
- 00b44e40 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00b45e34 ["INT_ADD", "register:40f0:8", ["const:b45e34:8", "const:4:8"]]
+ 00b45e34 ["CALL", null, ["callee:00c5c1d0:8"]]
- 00b44f80 ["INT_ADD", "register:40f0:8", ["const:b44f80:8", "const:4:8"]]
- 00b44f80 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b45f74 ["INT_ADD", "register:40f0:8", ["const:b45f74:8", "const:4:8"]]
+ 00b45f74 ["CALL", null, ["callee:00c5bd40:8"]]
- 00b44fb8 ["INT_ADD", "register:40f0:8", ["const:b44fb8:8", "const:4:8"]]
- 00b44fb8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b45fac ["INT_ADD", "register:40f0:8", ["const:b45fac:8", "const:4:8"]]
+ 00b45fac ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-612f91eacbe1d1acbd1243059e013354"></a>

### [`00b4504c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b4504c.md) → [`00b46040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46040.md) _ZN8firebase4util12class_loader11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b4605c",
      "incomplete_value": false,
      "site": "00b46060",
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
      "definition_site": "00b45068",
      "incomplete_value": false,
      "site": "00b4506c",
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
      "definition_site": "00b4606c",
      "incomplete_value": true,
      "site": "00b46078",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b45078",
      "incomplete_value": true,
      "site": "00b45084",
      "value": [
        "LOAD",
        "8",
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
      "00b4605c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4606c",
      "DATA",
      [
        "storage",
        "01125738",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4605c",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4606c",
      "DATA",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4506c ["INT_ADD", "register:40f0:8", ["const:b4506c:8", "const:4:8"]]
- 00b4506c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b46060 ["INT_ADD", "register:40f0:8", ["const:b46060:8", "const:4:8"]]
+ 00b46060 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b45068 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b45068 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b45068 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b45068 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4605c ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4605c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4605c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4605c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b45070 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b46064 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-adc06c6b5f93714af6858c2ec8f72d0a"></a>

### [`00b45088`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45088.md) → [`00b4607c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b4607c.md) _ZN8firebase4util12class_loader13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b460bc",
      "incomplete_value": true,
      "site": "00b460bc",
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
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b450c8",
      "incomplete_value": true,
      "site": "00b450c8",
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
            "const:728:8"
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
      "definition_site": "00b460a0",
      "incomplete_value": false,
      "site": "00b460b4",
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
            "const:aa1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b450ac",
      "incomplete_value": false,
      "site": "00b450c0",
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
            "const:9d2:8"
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
      "00b46090",
      "READ",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ],
    [
      "00b460a0",
      "PARAM",
      [
        "storage",
        "002b89d2",
        null,
        "string"
      ]
    ],
    [
      "00b460bc",
      "WRITE",
      [
        "storage",
        "01125728",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46090",
      "READ",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b460a0",
      "PARAM",
      [
        "storage",
        "002b8aa1",
        null,
        "string"
      ]
    ],
    [
      "00b460bc",
      "WRITE",
      [
        "storage",
        "011266e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b450c0 ["INT_ADD", "register:40f0:8", ["const:b450c0:8", "const:4:8"]]
- 00b450c0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b460b4 ["INT_ADD", "register:40f0:8", ["const:b460b4:8", "const:4:8"]]
+ 00b460b4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b450c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:728:8"]]
- 00b450c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b460bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6e8:8"]]
+ 00b460bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45094 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b46088 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-635a9e4f463766bcc4d5e8892892faa0"></a>

### [`00b450f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b450f8.md) → [`00b460ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b460ec.md) _ZN8firebase4util14LookupFieldIdsEP7_JNIEnvP7_jclassPKNS0_15FieldDescriptorEmPP9_jfieldIDPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) · 呼出先 5件 [`00b5183c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b5183c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md)
- 新版 呼出元 1件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) · 呼出先 5件 [`00b52830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b52/00b52830.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 88.39% / 新版 88.39%

優先判定に残った影響 `call_argument_candidate` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b46144",
      "incomplete_value": false,
      "site": "00b4614c",
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
            "const:d07:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45150",
      "incomplete_value": false,
      "site": "00b45158",
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
            "const:c38:8"
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
      "definition_site": "00b46288",
      "incomplete_value": false,
      "site": "00b4628c",
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
            "const:7c1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45294",
      "incomplete_value": false,
      "site": "00b45298",
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
            "const:6f4:8"
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
      "definition_site": "00b46294",
      "incomplete_value": false,
      "site": "00b462a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:30b000:8"
          ],
          [
            "leaf",
            "const:ac5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b452a0",
      "incomplete_value": false,
      "site": "00b452ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:30b000:8"
          ],
          [
            "leaf",
            "const:a85:8"
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
      "00b4613c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b452e8"
      ]
    ],
    [
      "00b46144",
      "PARAM",
      [
        "storage",
        "002b6c38",
        null,
        "string"
      ]
    ],
    [
      "00b46238",
      "PARAM",
      [
        "storage",
        "002b1553",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b4613c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b462dc"
      ]
    ],
    [
      "00b46144",
      "PARAM",
      [
        "storage",
        "002b6d07",
        null,
        "string"
      ]
    ],
    [
      "00b46238",
      "PARAM",
      [
        "storage",
        "002b162a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45158 ["INT_ADD", "register:40f0:8", ["const:b45158:8", "const:4:8"]]
- 00b45158 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00b4614c ["INT_ADD", "register:40f0:8", ["const:b4614c:8", "const:4:8"]]
+ 00b4614c ["CALL", null, ["callee:00c5c1d0:8"]]
- 00b45298 ["INT_ADD", "register:40f0:8", ["const:b45298:8", "const:4:8"]]
- 00b45298 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b4628c ["INT_ADD", "register:40f0:8", ["const:b4628c:8", "const:4:8"]]
+ 00b4628c ["CALL", null, ["callee:00c5bd40:8"]]
- 00b452ac ["INT_ADD", "register:40f0:8", ["const:b452ac:8", "const:4:8"]]
- 00b452ac ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b462a0 ["INT_ADD", "register:40f0:8", ["const:b462a0:8", "const:4:8"]]
+ 00b462a0 ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-62af40c8265b5700dbf1734e646d1845"></a>

### [`00b45364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45364.md) → [`00b46358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46358.md) _ZN8firebase4util12class_loader10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b46374",
      "incomplete_value": false,
      "site": "00b46378",
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
      "definition_site": "00b45380",
      "incomplete_value": false,
      "site": "00b45384",
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
      "definition_site": "00b46384",
      "incomplete_value": true,
      "site": "00b46390",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b45390",
      "incomplete_value": true,
      "site": "00b4539c",
      "value": [
        "LOAD",
        "8",
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
      "00b46374",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b46384",
      "DATA",
      [
        "storage",
        "01125748",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b46374",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b46384",
      "DATA",
      [
        "storage",
        "01126708",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45384 ["INT_ADD", "register:40f0:8", ["const:b45384:8", "const:4:8"]]
- 00b45384 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b46378 ["INT_ADD", "register:40f0:8", ["const:b46378:8", "const:4:8"]]
+ 00b46378 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b45380 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b45380 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b45380 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b45380 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b46374 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b46374 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46374 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46374 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b45388 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4637c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-76c57b63f4dff042486839e8f942f3d7"></a>

### [`00b453a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b453a0.md) → [`00b46394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46394.md) _ZN8firebase4util17jniresultcallback19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS

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
      "definition_site": "00b463c0",
      "incomplete_value": true,
      "site": "00b463c0",
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
            "const:710:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b453cc",
      "incomplete_value": true,
      "site": "00b453cc",
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
            "const:750:8"
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
      "definition_site": "00b463a8",
      "incomplete_value": true,
      "site": "00b463a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b453b4",
      "incomplete_value": true,
      "site": "00b453b4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b463b4",
      "incomplete_value": false,
      "site": "00b463b8",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b453c0",
      "incomplete_value": false,
      "site": "00b453c4",
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
            "const:4a1:8"
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
      "00b463a4",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b463b4",
      "PARAM",
      [
        "storage",
        "002b04a1",
        null,
        "string"
      ]
    ],
    [
      "00b463c0",
      "WRITE",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b463a4",
      "READ",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ],
    [
      "00b463b4",
      "PARAM",
      [
        "storage",
        "002b0578",
        null,
        "string"
      ]
    ],
    [
      "00b463c0",
      "WRITE",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b453c4 ["INT_ADD", "register:40f0:8", ["const:b453c4:8", "const:4:8"]]
- 00b453c4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b463b8 ["INT_ADD", "register:40f0:8", ["const:b463b8:8", "const:4:8"]]
+ 00b463b8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b453cc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:750:8"]]
- 00b453cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b463c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:710:8"]]
+ 00b463c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b453ac ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b463a0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-3eee83d5fe55a2b3e9c75f25ddecb250"></a>

### [`00b453e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b453e0.md) → [`00b463d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b463d4.md) _ZN8firebase4util17jniresultcallback19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS

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
      "definition_site": "00b46400",
      "incomplete_value": true,
      "site": "00b46400",
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
            "const:710:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4540c",
      "incomplete_value": true,
      "site": "00b4540c",
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
            "const:750:8"
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
      "definition_site": "00b463e8",
      "incomplete_value": true,
      "site": "00b463e8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b453f4",
      "incomplete_value": true,
      "site": "00b453f4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b463f0",
      "incomplete_value": false,
      "site": "00b463f8",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b453fc",
      "incomplete_value": false,
      "site": "00b45404",
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
            "const:4a1:8"
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
      "00b463e4",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b463f0",
      "PARAM",
      [
        "storage",
        "002b04a1",
        null,
        "string"
      ]
    ],
    [
      "00b46400",
      "WRITE",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b463e4",
      "READ",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ],
    [
      "00b463f0",
      "PARAM",
      [
        "storage",
        "002b0578",
        null,
        "string"
      ]
    ],
    [
      "00b46400",
      "WRITE",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45404 ["INT_ADD", "register:40f0:8", ["const:b45404:8", "const:4:8"]]
- 00b45404 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b463f8 ["INT_ADD", "register:40f0:8", ["const:b463f8:8", "const:4:8"]]
+ 00b463f8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4540c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:750:8"]]
- 00b4540c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46400 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:710:8"]]
+ 00b46400 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b453ec ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b463e0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-0fa79f94e511173524f55879aebf5002"></a>

### [`00b45420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45420.md) → [`00b46414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46414.md) _ZN8firebase4util17jniresultcallback10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b46444",
      "incomplete_value": true,
      "site": "00b46444",
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
            "const:710:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45450",
      "incomplete_value": true,
      "site": "00b45450",
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
            "const:750:8"
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
      "definition_site": "00b46428",
      "incomplete_value": true,
      "site": "00b46428",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45434",
      "incomplete_value": true,
      "site": "00b45434",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b46434",
      "incomplete_value": false,
      "site": "00b4643c",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45440",
      "incomplete_value": false,
      "site": "00b45448",
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
            "const:4a1:8"
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
      "00b46424",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46434",
      "PARAM",
      [
        "storage",
        "002b04a1",
        null,
        "string"
      ]
    ],
    [
      "00b46444",
      "WRITE",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46424",
      "READ",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46434",
      "PARAM",
      [
        "storage",
        "002b0578",
        null,
        "string"
      ]
    ],
    [
      "00b46444",
      "WRITE",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45448 ["INT_ADD", "register:40f0:8", ["const:b45448:8", "const:4:8"]]
- 00b45448 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4643c ["INT_ADD", "register:40f0:8", ["const:b4643c:8", "const:4:8"]]
+ 00b4643c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b45450 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:750:8"]]
- 00b45450 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46444 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:710:8"]]
+ 00b46444 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4542c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b46420 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-86c2b39a4377ad6a2b740cd7748996dc"></a>

### [`00b45464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45464.md) → [`00b46458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46458.md) _ZN8firebase4util17jniresultcallback10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b46488",
      "incomplete_value": true,
      "site": "00b46488",
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
            "const:710:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45494",
      "incomplete_value": true,
      "site": "00b45494",
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
            "const:750:8"
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
      "definition_site": "00b4646c",
      "incomplete_value": true,
      "site": "00b4646c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45478",
      "incomplete_value": true,
      "site": "00b45478",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b46474",
      "incomplete_value": false,
      "site": "00b46480",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45480",
      "incomplete_value": false,
      "site": "00b4548c",
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
            "const:4a1:8"
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
      "00b46468",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46474",
      "PARAM",
      [
        "storage",
        "002b04a1",
        null,
        "string"
      ]
    ],
    [
      "00b46488",
      "WRITE",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46468",
      "READ",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46474",
      "PARAM",
      [
        "storage",
        "002b0578",
        null,
        "string"
      ]
    ],
    [
      "00b46488",
      "WRITE",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4548c ["INT_ADD", "register:40f0:8", ["const:b4548c:8", "const:4:8"]]
- 00b4548c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b46480 ["INT_ADD", "register:40f0:8", ["const:b46480:8", "const:4:8"]]
+ 00b46480 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b45494 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:750:8"]]
- 00b45494 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46488 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:710:8"]]
+ 00b46488 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45470 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b46464 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-95bc9c1bcb118b5cf3294e2ca571c710"></a>

### [`00b454b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b454b4.md) → [`00b464a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b464a8.md) _ZN8firebase4util17jniresultcallback15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b46530",
      "incomplete_value": true,
      "site": "00b46530",
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
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4553c",
      "incomplete_value": true,
      "site": "00b4553c",
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
            "const:758:8"
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
      "definition_site": "00b464dc",
      "incomplete_value": true,
      "site": "00b464e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:710:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b454e8",
      "incomplete_value": true,
      "site": "00b454f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:750:8"
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
      "00b464bc",
      "READ",
      [
        "storage",
        "01125758",
        null,
        "undefined1"
      ]
    ],
    [
      "00b464dc",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46530",
      "WRITE",
      [
        "storage",
        "01125758",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b464bc",
      "READ",
      [
        "storage",
        "01126718",
        null,
        "undefined1"
      ]
    ],
    [
      "00b464dc",
      "READ",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46530",
      "WRITE",
      [
        "storage",
        "01126718",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b454f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b454f4 ["INT_ADD", "register:40f0:8", ["const:b454f4:8", "const:4:8"]]
- 00b454f4 ["CALLIND", null, ["register:0:8"]]
+ 00b464e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b464e8 ["INT_ADD", "register:40f0:8", ["const:b464e8:8", "const:4:8"]]
+ 00b464e8 ["CALLIND", null, ["register:0:8"]]
- 00b4553c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4553c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:758:8"]]
- 00b4553c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b46530 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b46530 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:718:8"]]
+ 00b46530 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b454c4 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b464b8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-8d3fd57a91dcb610bdc3eea2e3e69e50"></a>

### [`00b45550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45550.md) → [`00b46544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46544.md) _ZN8firebase4util17jniresultcallback12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b46580",
      "incomplete_value": true,
      "site": "00b46580",
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
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4558c",
      "incomplete_value": true,
      "site": "00b4558c",
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
            "const:758:8"
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
      "definition_site": "00b465d0",
      "incomplete_value": true,
      "site": "00b465d0",
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
            "const:710:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b455dc",
      "incomplete_value": true,
      "site": "00b455dc",
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
            "const:750:8"
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
      "definition_site": "00b465c0",
      "incomplete_value": true,
      "site": "00b465cc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:710:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b455cc",
      "incomplete_value": true,
      "site": "00b455d8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:750:8"
              ]
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
      "00b46558",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46564",
      "READ",
      [
        "storage",
        "01125758",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46580",
      "WRITE",
      [
        "storage",
        "01125758",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b46558",
      "READ",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46564",
      "READ",
      [
        "storage",
        "01126718",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46580",
      "WRITE",
      [
        "storage",
        "01126718",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4558c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4558c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4558c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:758:8"]]
- 00b4558c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b46580 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b46580 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b46580 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:718:8"]]
+ 00b46580 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b455d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b455d8 ["INT_ADD", "register:40f0:8", ["const:b455d8:8", "const:4:8"]]
- 00b455d8 ["CALLIND", null, ["register:0:8"]]
+ 00b465cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b465cc ["INT_ADD", "register:40f0:8", ["const:b465cc:8", "const:4:8"]]
+ 00b465cc ["CALLIND", null, ["register:0:8"]]
- 00b455dc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:750:8"]]
- 00b455dc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b455dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b465d0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:710:8"]]
+ 00b465d0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b465d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-17df39384cdbcde7e9baa4918bf85722"></a>

### [`00b455f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b455f0.md) → [`00b465e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b465e4.md) _ZN8firebase4util17jniresultcallback14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b46624",
      "incomplete_value": true,
      "site": "00b46624",
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
            "const:710:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45630",
      "incomplete_value": true,
      "site": "00b45630",
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
            "const:750:8"
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
      "definition_site": "00b46600",
      "incomplete_value": true,
      "site": "00b46600",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4560c",
      "incomplete_value": true,
      "site": "00b4560c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b46608",
      "incomplete_value": false,
      "site": "00b4661c",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45614",
      "incomplete_value": false,
      "site": "00b45628",
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
            "const:4a1:8"
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
      "00b465f8",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46608",
      "PARAM",
      [
        "storage",
        "002b04a1",
        null,
        "string"
      ]
    ],
    [
      "00b46624",
      "WRITE",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b465f8",
      "READ",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46608",
      "PARAM",
      [
        "storage",
        "002b0578",
        null,
        "string"
      ]
    ],
    [
      "00b46624",
      "WRITE",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45628 ["INT_ADD", "register:40f0:8", ["const:b45628:8", "const:4:8"]]
- 00b45628 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4661c ["INT_ADD", "register:40f0:8", ["const:b4661c:8", "const:4:8"]]
+ 00b4661c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b45630 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:750:8"]]
- 00b45630 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46624 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:710:8"]]
+ 00b46624 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b455fc ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b465f0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-bdabdca2426f17f4324eaf46994e2e97"></a>

### [`00b45660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45660.md) → [`00b46654`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46654.md) _ZN8firebase4util17jniresultcallback11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b46670",
      "incomplete_value": false,
      "site": "00b46674",
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
      "definition_site": "00b4567c",
      "incomplete_value": false,
      "site": "00b45680",
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
      "definition_site": "00b46680",
      "incomplete_value": true,
      "site": "00b4668c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4568c",
      "incomplete_value": true,
      "site": "00b45698",
      "value": [
        "LOAD",
        "8",
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
      "00b46670",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b46680",
      "DATA",
      [
        "storage",
        "01125760",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46670",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b46680",
      "DATA",
      [
        "storage",
        "01126720",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45680 ["INT_ADD", "register:40f0:8", ["const:b45680:8", "const:4:8"]]
- 00b45680 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b46674 ["INT_ADD", "register:40f0:8", ["const:b46674:8", "const:4:8"]]
+ 00b46674 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4567c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4567c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4567c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4567c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b46670 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b46670 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46670 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46670 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b45684 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b46678 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-dd9f0fcb34442db767680a6503e39953"></a>

### [`00b4569c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b4569c.md) → [`00b46690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46690.md) _ZN8firebase4util17jniresultcallback13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b466d0",
      "incomplete_value": true,
      "site": "00b466d0",
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
            "const:710:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b456dc",
      "incomplete_value": true,
      "site": "00b456dc",
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
            "const:750:8"
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
      "definition_site": "00b466ac",
      "incomplete_value": true,
      "site": "00b466ac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b456b8",
      "incomplete_value": true,
      "site": "00b456b8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b466b4",
      "incomplete_value": false,
      "site": "00b466c8",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b456c0",
      "incomplete_value": false,
      "site": "00b456d4",
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
            "const:4a1:8"
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
      "00b466a4",
      "READ",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ],
    [
      "00b466b4",
      "PARAM",
      [
        "storage",
        "002b04a1",
        null,
        "string"
      ]
    ],
    [
      "00b466d0",
      "WRITE",
      [
        "storage",
        "01125750",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b466a4",
      "READ",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ],
    [
      "00b466b4",
      "PARAM",
      [
        "storage",
        "002b0578",
        null,
        "string"
      ]
    ],
    [
      "00b466d0",
      "WRITE",
      [
        "storage",
        "01126710",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b456d4 ["INT_ADD", "register:40f0:8", ["const:b456d4:8", "const:4:8"]]
- 00b456d4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b466c8 ["INT_ADD", "register:40f0:8", ["const:b466c8:8", "const:4:8"]]
+ 00b466c8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b456dc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:750:8"]]
- 00b456dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b466d0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:710:8"]]
+ 00b466d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b456a8 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4669c ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-99e6abe5128b5c3f20d0ad9c3c953b07"></a>

### [`00b45748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45748.md) → [`00b4673c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b4673c.md) _ZN8firebase4util26cppthreaddispatchercontext19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9al

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b46768",
      "incomplete_value": true,
      "site": "00b46768",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45774",
      "incomplete_value": true,
      "site": "00b45774",
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
            "const:778:8"
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
      "definition_site": "00b4675c",
      "incomplete_value": false,
      "site": "00b46760",
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
            "const:615:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45768",
      "incomplete_value": false,
      "site": "00b4576c",
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
            "const:537:8"
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
      "00b4674c",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4675c",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ],
    [
      "00b46768",
      "WRITE",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4674c",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4675c",
      "PARAM",
      [
        "storage",
        "002be615",
        null,
        "string"
      ]
    ],
    [
      "00b46768",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4576c ["INT_ADD", "register:40f0:8", ["const:b4576c:8", "const:4:8"]]
- 00b4576c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b46760 ["INT_ADD", "register:40f0:8", ["const:b46760:8", "const:4:8"]]
+ 00b46760 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b45774 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
- 00b45774 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46768 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
+ 00b46768 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45754 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b46748 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-8891b0488e3642fdd87b951c7a5c4b22"></a>

### [`00b45788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45788.md) → [`00b4677c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b4677c.md) _ZN8firebase4util26cppthreaddispatchercontext19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9al

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
      "definition_site": "00b467a8",
      "incomplete_value": true,
      "site": "00b467a8",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b457b4",
      "incomplete_value": true,
      "site": "00b457b4",
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
            "const:778:8"
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
      "definition_site": "00b46790",
      "incomplete_value": true,
      "site": "00b46790",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4579c",
      "incomplete_value": true,
      "site": "00b4579c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b4579c"
      ],
      [
        "FALL_THROUGH",
        "00b46790"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b46790",
      "incomplete_value": true,
      "site": "00b467a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4579c",
      "incomplete_value": true,
      "site": "00b457b4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b4678c",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46798",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ],
    [
      "00b467a8",
      "WRITE",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4678c",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46798",
      "PARAM",
      [
        "storage",
        "002be615",
        null,
        "string"
      ]
    ],
    [
      "00b467a8",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b457b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
- 00b457b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b467a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
+ 00b467a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45794 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b46788 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b45798 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
- 00b45798 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4678c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
+ 00b4678c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7ef7fde6b4ef6921f6c274fd99f03d01"></a>

### [`00b457c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b457c8.md) → [`00b467bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b467bc.md) _ZN8firebase4util26cppthreaddispatchercontext10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b467ec",
      "incomplete_value": true,
      "site": "00b467ec",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b457f8",
      "incomplete_value": true,
      "site": "00b457f8",
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
            "const:778:8"
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
      "definition_site": "00b467dc",
      "incomplete_value": false,
      "site": "00b467e4",
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
            "const:615:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b457e8",
      "incomplete_value": false,
      "site": "00b457f0",
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
            "const:537:8"
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
      "00b467cc",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b467dc",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ],
    [
      "00b467ec",
      "WRITE",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b467cc",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b467dc",
      "PARAM",
      [
        "storage",
        "002be615",
        null,
        "string"
      ]
    ],
    [
      "00b467ec",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b457f0 ["INT_ADD", "register:40f0:8", ["const:b457f0:8", "const:4:8"]]
- 00b457f0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b467e4 ["INT_ADD", "register:40f0:8", ["const:b467e4:8", "const:4:8"]]
+ 00b467e4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b457f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
- 00b457f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b467ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
+ 00b467ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b457d4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b467c8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-0e15a188b7eef27383a74764411cc91f"></a>

### [`00b4580c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b4580c.md) → [`00b46800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46800.md) _ZN8firebase4util26cppthreaddispatchercontext10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b46830",
      "incomplete_value": true,
      "site": "00b46830",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4583c",
      "incomplete_value": true,
      "site": "00b4583c",
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
            "const:778:8"
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
      "definition_site": "00b46814",
      "incomplete_value": true,
      "site": "00b46814",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45820",
      "incomplete_value": true,
      "site": "00b45820",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4681c",
      "incomplete_value": false,
      "site": "00b46828",
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
            "const:615:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45828",
      "incomplete_value": false,
      "site": "00b45834",
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
            "const:537:8"
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
      "00b46810",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4681c",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ],
    [
      "00b46830",
      "WRITE",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46810",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4681c",
      "PARAM",
      [
        "storage",
        "002be615",
        null,
        "string"
      ]
    ],
    [
      "00b46830",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45834 ["INT_ADD", "register:40f0:8", ["const:b45834:8", "const:4:8"]]
- 00b45834 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b46828 ["INT_ADD", "register:40f0:8", ["const:b46828:8", "const:4:8"]]
+ 00b46828 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4583c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
- 00b4583c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46830 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
+ 00b46830 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45818 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4680c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-ede1962ef59eb3bda26dc422e2267777"></a>

### [`00b4585c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b4585c.md) → [`00b46850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46850.md) _ZN8firebase4util26cppthreaddispatchercontext15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b468d8",
      "incomplete_value": true,
      "site": "00b468d8",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b458e4",
      "incomplete_value": true,
      "site": "00b458e4",
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
            "const:780:8"
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
      "00b46864",
      "READ",
      [
        "storage",
        "01125780",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46884",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b468d8",
      "WRITE",
      [
        "storage",
        "01125780",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b46864",
      "READ",
      [
        "storage",
        "01126740",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46884",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b468d8",
      "WRITE",
      [
        "storage",
        "01126740",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b458e4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b458e4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:780:8"]]
- 00b458e4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b468d8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b468d8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:740:8"]]
+ 00b468d8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4586c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b46860 ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00b45870 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:780:8"]]
- 00b45870 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b45870 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b46864 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:740:8"]]
+ 00b46864 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b46864 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-065924b4460af6f71e4b30f63e64fdc5"></a>

### [`00b458f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b458f8.md) → [`00b468ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b468ec.md) _ZN8firebase4util26cppthreaddispatchercontext12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b46928",
      "incomplete_value": true,
      "site": "00b46928",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45934",
      "incomplete_value": true,
      "site": "00b45934",
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
            "const:780:8"
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
      "definition_site": "00b46978",
      "incomplete_value": true,
      "site": "00b46978",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45984",
      "incomplete_value": true,
      "site": "00b45984",
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
            "const:778:8"
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
      "00b46900",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4690c",
      "READ",
      [
        "storage",
        "01125780",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46928",
      "WRITE",
      [
        "storage",
        "01125780",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b46900",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4690c",
      "READ",
      [
        "storage",
        "01126740",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46928",
      "WRITE",
      [
        "storage",
        "01126740",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45934 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b45934 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b45934 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:780:8"]]
- 00b45934 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b46928 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b46928 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b46928 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:740:8"]]
+ 00b46928 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b45984 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:778:8"]]
- 00b45984 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b45984 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b46978 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:738:8"]]
+ 00b46978 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b46978 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00b45908 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b468fc ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-45fc7d83572f1139f77b6a58b47bd561"></a>

### [`00b45998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45998.md) → [`00b4698c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b4698c.md) _ZN8firebase4util26cppthreaddispatchercontext14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b469cc",
      "incomplete_value": true,
      "site": "00b469cc",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b459d8",
      "incomplete_value": true,
      "site": "00b459d8",
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
            "const:778:8"
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
      "definition_site": "00b469a8",
      "incomplete_value": true,
      "site": "00b469a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b459b4",
      "incomplete_value": true,
      "site": "00b459b4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b469b0",
      "incomplete_value": true,
      "site": "00b469c4",
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
            "const:615:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b459bc",
      "incomplete_value": true,
      "site": "00b459d0",
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
            "const:537:8"
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
      "00b469a0",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b469b0",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ],
    [
      "00b469cc",
      "WRITE",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b469a0",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b469b0",
      "PARAM",
      [
        "storage",
        "002be615",
        null,
        "string"
      ]
    ],
    [
      "00b469cc",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b459d0 ["INT_ADD", "register:40f0:8", ["const:b459d0:8", "const:4:8"]]
- 00b459d0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b469c4 ["INT_ADD", "register:40f0:8", ["const:b469c4:8", "const:4:8"]]
+ 00b469c4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b459d8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:778:8"]]
- 00b459d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b469cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:738:8"]]
+ 00b469cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b459a4 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b46998 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-db3d5d5e65e4a503c7fa01eca901b446"></a>

### [`00b45a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45a08.md) → [`00b469fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b469fc.md) _ZN8firebase4util26cppthreaddispatchercontext11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b46a18",
      "incomplete_value": false,
      "site": "00b46a1c",
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
      "definition_site": "00b45a24",
      "incomplete_value": false,
      "site": "00b45a28",
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
      "definition_site": "00b46a28",
      "incomplete_value": true,
      "site": "00b46a34",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b45a34",
      "incomplete_value": true,
      "site": "00b45a40",
      "value": [
        "LOAD",
        "8",
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
      "00b46a18",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b46a28",
      "DATA",
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
      "00b46a18",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b46a28",
      "DATA",
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
- 00b45a28 ["INT_ADD", "register:40f0:8", ["const:b45a28:8", "const:4:8"]]
- 00b45a28 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b46a1c ["INT_ADD", "register:40f0:8", ["const:b46a1c:8", "const:4:8"]]
+ 00b46a1c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b45a24 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b45a24 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b45a24 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b45a24 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b46a18 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b46a18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46a18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46a18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b45a2c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b46a20 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-3bbd6c8272bac45402384649c678dd24"></a>

### [`00b45a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45a44.md) → [`00b46a38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46a38.md) _ZN8firebase4util26cppthreaddispatchercontext13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b46a78",
      "incomplete_value": true,
      "site": "00b46a78",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45a84",
      "incomplete_value": true,
      "site": "00b45a84",
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
            "const:778:8"
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
      "definition_site": "00b46a54",
      "incomplete_value": true,
      "site": "00b46a54",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45a60",
      "incomplete_value": true,
      "site": "00b45a60",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b45a60"
      ],
      [
        "FALL_THROUGH",
        "00b46a54"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b46a54",
      "incomplete_value": true,
      "site": "00b46a78",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45a60",
      "incomplete_value": true,
      "site": "00b45a84",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b46a4c",
      "READ",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46a5c",
      "PARAM",
      [
        "storage",
        "002be537",
        null,
        "string"
      ]
    ],
    [
      "00b46a78",
      "WRITE",
      [
        "storage",
        "01125778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46a4c",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46a5c",
      "PARAM",
      [
        "storage",
        "002be615",
        null,
        "string"
      ]
    ],
    [
      "00b46a78",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45a84 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:778:8"]]
- 00b45a84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46a78 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:738:8"]]
+ 00b46a78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45a50 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b46a44 ["COPY", "register:40a0:8", ["const:1126000:8"]]
- 00b45a58 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:778:8"]]
- 00b45a58 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b46a4c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:738:8"]]
+ 00b46a4c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-66ded208621424df0192b7e00ee31dbc"></a>

### [`00b45ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45ab4.md) → [`00b46aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46aa8.md) _ZN8firebase4util26cppthreaddispatchercontext10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b46ac4",
      "incomplete_value": false,
      "site": "00b46ac8",
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
      "definition_site": "00b45ad0",
      "incomplete_value": false,
      "site": "00b45ad4",
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
      "00b46ac4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b46ad4",
      "DATA",
      [
        "storage",
        "011257a8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b46ac4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b46ad4",
      "DATA",
      [
        "storage",
        "01126768",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45ad4 ["INT_ADD", "register:40f0:8", ["const:b45ad4:8", "const:4:8"]]
- 00b45ad4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b46ac8 ["INT_ADD", "register:40f0:8", ["const:b46ac8:8", "const:4:8"]]
+ 00b46ac8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b45ad0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b45ad0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b45ad0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b45ad0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b46ac4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b46ac4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46ac4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46ac4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b45ad8 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b46acc ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-f5e6133124a3f0566fd1d10681502469"></a>

### [`00b45af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45af0.md) → [`00b46ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46ae4.md) _ZN8firebase4util19cppthreaddispatcher19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocator

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b46b10",
      "incomplete_value": true,
      "site": "00b46b10",
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
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45b1c",
      "incomplete_value": true,
      "site": "00b45b1c",
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
            "const:7b0:8"
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
      "definition_site": "00b46b04",
      "incomplete_value": false,
      "site": "00b46b08",
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
            "const:e2d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45b10",
      "incomplete_value": false,
      "site": "00b45b14",
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
            "const:d4f:8"
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
      "00b46af4",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46b04",
      "PARAM",
      [
        "storage",
        "002bad4f",
        null,
        "string"
      ]
    ],
    [
      "00b46b10",
      "WRITE",
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
      "00b46af4",
      "READ",
      [
        "storage",
        "01126770",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46b04",
      "PARAM",
      [
        "storage",
        "002bae2d",
        null,
        "string"
      ]
    ],
    [
      "00b46b10",
      "WRITE",
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
- 00b45b14 ["INT_ADD", "register:40f0:8", ["const:b45b14:8", "const:4:8"]]
- 00b45b14 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b46b08 ["INT_ADD", "register:40f0:8", ["const:b46b08:8", "const:4:8"]]
+ 00b46b08 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b45b1c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7b0:8"]]
- 00b45b1c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46b10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:770:8"]]
+ 00b46b10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45afc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b46af0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-056888a8bf6666c4b9fc525db82c73d2"></a>

### [`00b45b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45b30.md) → [`00b46b24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46b24.md) _ZN8firebase4util19cppthreaddispatcher19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocator

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
      "definition_site": "00b46b50",
      "incomplete_value": true,
      "site": "00b46b50",
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
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45b5c",
      "incomplete_value": true,
      "site": "00b45b5c",
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
            "const:7b0:8"
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
      "definition_site": "00b46b38",
      "incomplete_value": true,
      "site": "00b46b38",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45b44",
      "incomplete_value": true,
      "site": "00b45b44",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b46b40",
      "incomplete_value": false,
      "site": "00b46b48",
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
            "const:e2d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45b4c",
      "incomplete_value": false,
      "site": "00b45b54",
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
            "const:d4f:8"
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
      "00b46b34",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46b40",
      "PARAM",
      [
        "storage",
        "002bad4f",
        null,
        "string"
      ]
    ],
    [
      "00b46b50",
      "WRITE",
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
      "00b46b34",
      "READ",
      [
        "storage",
        "01126770",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46b40",
      "PARAM",
      [
        "storage",
        "002bae2d",
        null,
        "string"
      ]
    ],
    [
      "00b46b50",
      "WRITE",
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
- 00b45b54 ["INT_ADD", "register:40f0:8", ["const:b45b54:8", "const:4:8"]]
- 00b45b54 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b46b48 ["INT_ADD", "register:40f0:8", ["const:b46b48:8", "const:4:8"]]
+ 00b46b48 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b45b5c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7b0:8"]]
- 00b45b5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46b50 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:770:8"]]
+ 00b46b50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45b3c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b46b30 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-20e2f1fb6a6d3b5e83d29ca3cc372b60"></a>

### [`00b45b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45b70.md) → [`00b46b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46b64.md) _ZN8firebase4util19cppthreaddispatcher10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b46b94",
      "incomplete_value": true,
      "site": "00b46b94",
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
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45ba0",
      "incomplete_value": true,
      "site": "00b45ba0",
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
            "const:7b0:8"
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
      "definition_site": "00b46b84",
      "incomplete_value": true,
      "site": "00b46b8c",
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
            "const:e2d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45b90",
      "incomplete_value": true,
      "site": "00b45b98",
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
            "const:d4f:8"
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
      "00b46b74",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46b84",
      "PARAM",
      [
        "storage",
        "002bad4f",
        null,
        "string"
      ]
    ],
    [
      "00b46b94",
      "WRITE",
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
      "00b46b74",
      "READ",
      [
        "storage",
        "01126770",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46b84",
      "PARAM",
      [
        "storage",
        "002bae2d",
        null,
        "string"
      ]
    ],
    [
      "00b46b94",
      "WRITE",
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
- 00b45b98 ["INT_ADD", "register:40f0:8", ["const:b45b98:8", "const:4:8"]]
- 00b45b98 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b46b8c ["INT_ADD", "register:40f0:8", ["const:b46b8c:8", "const:4:8"]]
+ 00b46b8c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b45ba0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7b0:8"]]
- 00b45ba0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46b94 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:770:8"]]
+ 00b46b94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45b7c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b46b70 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-d0cca22472d2224ed654ecaad826b66f"></a>

### [`00b45bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45bb4.md) → [`00b46ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46ba8.md) _ZN8firebase4util19cppthreaddispatcher10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b46bd8",
      "incomplete_value": true,
      "site": "00b46bd8",
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
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45be4",
      "incomplete_value": true,
      "site": "00b45be4",
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
            "const:7b0:8"
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
      "definition_site": "00b46bbc",
      "incomplete_value": true,
      "site": "00b46bbc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45bc8",
      "incomplete_value": true,
      "site": "00b45bc8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b45bc8"
      ],
      [
        "FALL_THROUGH",
        "00b46bbc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b46bbc",
      "incomplete_value": true,
      "site": "00b46bd8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45bc8",
      "incomplete_value": true,
      "site": "00b45be4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b46bb8",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46bc4",
      "PARAM",
      [
        "storage",
        "002bad4f",
        null,
        "string"
      ]
    ],
    [
      "00b46bd8",
      "WRITE",
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
      "00b46bb8",
      "READ",
      [
        "storage",
        "01126770",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46bc4",
      "PARAM",
      [
        "storage",
        "002bae2d",
        null,
        "string"
      ]
    ],
    [
      "00b46bd8",
      "WRITE",
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
- 00b45be4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7b0:8"]]
- 00b45be4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46bd8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:770:8"]]
+ 00b46bd8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45bc0 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b46bb4 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b45bc4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7b0:8"]]
- 00b45bc4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b46bb8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:770:8"]]
+ 00b46bb8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7e6b7cc85062a702b5f97bc4343a932f"></a>

### [`00b45c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45c04.md) → [`00b46bf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46bf8.md) _ZN8firebase4util19cppthreaddispatcher15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b46c80",
      "incomplete_value": true,
      "site": "00b46c80",
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
            "const:778:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45c8c",
      "incomplete_value": true,
      "site": "00b45c8c",
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
            "const:7b8:8"
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
      "00b46c0c",
      "READ",
      [
        "storage",
        "011257b8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46c2c",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46c80",
      "WRITE",
      [
        "storage",
        "011257b8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b46c0c",
      "READ",
      [
        "storage",
        "01126778",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46c2c",
      "READ",
      [
        "storage",
        "01126770",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46c80",
      "WRITE",
      [
        "storage",
        "01126778",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45c8c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b45c8c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:7b8:8"]]
- 00b45c8c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b46c80 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b46c80 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:778:8"]]
+ 00b46c80 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b45c14 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b46c08 ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00b45c18 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:7b8:8"]]
- 00b45c18 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b45c18 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b46c0c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:778:8"]]
+ 00b46c0c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b46c0c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-9ee566caba8398c22d5e511e336d61e5"></a>

### [`00b45ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45ca0.md) → [`00b46c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46c94.md) _ZN8firebase4util19cppthreaddispatcher12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b46cd0",
      "incomplete_value": true,
      "site": "00b46cd0",
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
            "const:778:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45cdc",
      "incomplete_value": true,
      "site": "00b45cdc",
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
            "const:7b8:8"
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
      "definition_site": "00b46d20",
      "incomplete_value": true,
      "site": "00b46d20",
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
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45d2c",
      "incomplete_value": true,
      "site": "00b45d2c",
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
            "const:7b0:8"
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
      "definition_site": "00b46cac",
      "incomplete_value": true,
      "site": "00b46cac",
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
      "definition_site": "00b45cb8",
      "incomplete_value": true,
      "site": "00b45cb8",
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
      "00b46ca8",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46cb4",
      "READ",
      [
        "storage",
        "011257b8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46cd0",
      "WRITE",
      [
        "storage",
        "011257b8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b46ca8",
      "READ",
      [
        "storage",
        "01126770",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46cb4",
      "READ",
      [
        "storage",
        "01126778",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46cd0",
      "WRITE",
      [
        "storage",
        "01126778",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45cdc ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b45cdc ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b45cdc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:7b8:8"]]
- 00b45cdc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b46cd0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b46cd0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b46cd0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:778:8"]]
+ 00b46cd0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b45d28 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b45d28 ["INT_ADD", "register:40f0:8", ["const:b45d28:8", "const:4:8"]]
- 00b45d28 ["CALLIND", null, ["register:0:8"]]
+ 00b46d1c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b46d1c ["INT_ADD", "register:40f0:8", ["const:b46d1c:8", "const:4:8"]]
+ 00b46d1c ["CALLIND", null, ["register:0:8"]]
- 00b45d2c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7b0:8"]]
- 00b45d2c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b45d2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b46d20 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:770:8"]]
+ 00b46d20 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b46d20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-c61162df6cd26c27077267548dfeb8be"></a>

### [`00b45d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45d40.md) → [`00b46d34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46d34.md) _ZN8firebase4util19cppthreaddispatcher14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b46d74",
      "incomplete_value": true,
      "site": "00b46d74",
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
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45d80",
      "incomplete_value": true,
      "site": "00b45d80",
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
            "const:7b0:8"
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
      "00b46d48",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46d58",
      "PARAM",
      [
        "storage",
        "002bad4f",
        null,
        "string"
      ]
    ],
    [
      "00b46d74",
      "WRITE",
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
      "00b46d48",
      "READ",
      [
        "storage",
        "01126770",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46d58",
      "PARAM",
      [
        "storage",
        "002bae2d",
        null,
        "string"
      ]
    ],
    [
      "00b46d74",
      "WRITE",
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
- 00b45d80 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7b0:8"]]
- 00b45d80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46d74 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:770:8"]]
+ 00b46d74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45d4c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b46d40 ["COPY", "register:40a0:8", ["const:1126000:8"]]
- 00b45d54 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7b0:8"]]
- 00b45d54 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b46d48 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:770:8"]]
+ 00b46d48 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-94dc56d981611bb7822d241ede667e06"></a>

### [`00b45db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45db0.md) → [`00b46da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46da4.md) _ZN8firebase4util19cppthreaddispatcher11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b46dc0",
      "incomplete_value": true,
      "site": "00b46dc4",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45dcc",
      "incomplete_value": true,
      "site": "00b45dd0",
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
            "const:30b:8"
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
      "00b46dc0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b46dd0",
      "DATA",
      [
        "storage",
        "011257c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46dc0",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b46dd0",
      "DATA",
      [
        "storage",
        "01126780",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45dd0 ["INT_ADD", "register:40f0:8", ["const:b45dd0:8", "const:4:8"]]
- 00b45dd0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b46dc4 ["INT_ADD", "register:40f0:8", ["const:b46dc4:8", "const:4:8"]]
+ 00b46dc4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b45dcc ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b45dcc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b45dcc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b45dcc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b46dc0 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b46dc0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46dc0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46dc0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b45dd4 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b46dc8 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-0926cb56f61a516326aa383df7359f37"></a>

### [`00b45dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45dec.md) → [`00b46de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46de0.md) _ZN8firebase4util19cppthreaddispatcher13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b46e20",
      "incomplete_value": true,
      "site": "00b46e20",
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
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45e2c",
      "incomplete_value": true,
      "site": "00b45e2c",
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
            "const:7b0:8"
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
      "definition_site": "00b46dfc",
      "incomplete_value": true,
      "site": "00b46dfc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45e08",
      "incomplete_value": true,
      "site": "00b45e08",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b45e08"
      ],
      [
        "FALL_THROUGH",
        "00b46dfc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b46dfc",
      "incomplete_value": true,
      "site": "00b46e20",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45e08",
      "incomplete_value": true,
      "site": "00b45e2c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b46df4",
      "READ",
      [
        "storage",
        "011257b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46e04",
      "PARAM",
      [
        "storage",
        "002bad4f",
        null,
        "string"
      ]
    ],
    [
      "00b46e20",
      "WRITE",
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
      "00b46df4",
      "READ",
      [
        "storage",
        "01126770",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46e04",
      "PARAM",
      [
        "storage",
        "002bae2d",
        null,
        "string"
      ]
    ],
    [
      "00b46e20",
      "WRITE",
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
- 00b45e2c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7b0:8"]]
- 00b45e2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46e20 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:770:8"]]
+ 00b46e20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45df8 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b46dec ["COPY", "register:40a0:8", ["const:1126000:8"]]
- 00b45e00 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7b0:8"]]
- 00b45e00 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b46df4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:770:8"]]
+ 00b46df4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ec6191817e7b8b161efcdca2e1cf76a7"></a>

### [`00b45e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45e5c.md) → [`00b46e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46e50.md) _ZN8firebase4util19cppthreaddispatcher10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b46e6c",
      "incomplete_value": false,
      "site": "00b46e70",
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
      "definition_site": "00b45e78",
      "incomplete_value": false,
      "site": "00b45e7c",
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
      "00b46e6c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b46e7c",
      "DATA",
      [
        "storage",
        "011257d0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b46e6c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b46e7c",
      "DATA",
      [
        "storage",
        "01126790",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45e7c ["INT_ADD", "register:40f0:8", ["const:b45e7c:8", "const:4:8"]]
- 00b45e7c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b46e70 ["INT_ADD", "register:40f0:8", ["const:b46e70:8", "const:4:8"]]
+ 00b46e70 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b45e78 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b45e78 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b45e78 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b45e78 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b46e6c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b46e6c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46e6c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b46e6c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b45e80 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b46e74 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-725035a7a44889c88ee108571d91c88b"></a>

### [`00b45e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45e98.md) → [`00b46e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46e8c.md) _ZN8firebase4util3log19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16Cla

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b46eb8",
      "incomplete_value": true,
      "site": "00b46eb8",
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
            "const:798:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45ec4",
      "incomplete_value": true,
      "site": "00b45ec4",
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
            "const:7d8:8"
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
      "definition_site": "00b46eac",
      "incomplete_value": true,
      "site": "00b46eb0",
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
            "const:e41:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45eb8",
      "incomplete_value": true,
      "site": "00b45ebc",
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
            "const:d63:8"
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
      "00b46e9c",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46eac",
      "PARAM",
      [
        "storage",
        "002bbd63",
        null,
        "string"
      ]
    ],
    [
      "00b46eb8",
      "WRITE",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46e9c",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46eac",
      "PARAM",
      [
        "storage",
        "002bbe41",
        null,
        "string"
      ]
    ],
    [
      "00b46eb8",
      "WRITE",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b45ebc ["INT_ADD", "register:40f0:8", ["const:b45ebc:8", "const:4:8"]]
- 00b45ebc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b46eb0 ["INT_ADD", "register:40f0:8", ["const:b46eb0:8", "const:4:8"]]
+ 00b46eb0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b45ec4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d8:8"]]
- 00b45ec4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46eb8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00b46eb8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45ea4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b46e98 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


