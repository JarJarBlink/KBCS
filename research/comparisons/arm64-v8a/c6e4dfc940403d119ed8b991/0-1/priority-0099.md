# v16.0.1 → v16.0.2 · 最優先の変更候補 (99)

[一覧の目次](README.md)

<a id="compare-01adae752a4181d9e0bd2aa5a5ded1e3"></a>

### [`00c2c1c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c1c8.md) → [`00c2c264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c264.md) _ZNSt6__ndk115numpunct_bynameIcEC1EPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5ec50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ec50.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ed20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c2c1fc",
      "incomplete_value": true,
      "site": "00c2c1fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c2c28c",
      "READ",
      [
        "storage",
        "00c9bdf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2c298",
      "DATA",
      [
        "storage",
        "00c939c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2c28c",
      "READ",
      [
        "storage",
        "00c9bec8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2c298",
      "DATA",
      [
        "storage",
        "00c93a90",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c1f0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:df8:8"]]
- 00c2c1f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2c28c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ec8:8"]]
+ 00c2c28c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2c200 ["INT_ADD", "register:40f0:8", ["const:c2c200:8", "const:4:8"]]
- 00c2c200 ["CALL", null, ["callee:00c5ed20:8"]]
+ 00c2c29c ["INT_ADD", "register:40f0:8", ["const:c2c29c:8", "const:4:8"]]
+ 00c2c29c ["CALL", null, ["callee:00c5ed20:8"]]
~~~


<a id="compare-14698583d795fd7420b524206fb7208d"></a>

### [`00c2c228`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c228.md) → [`00c2c2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c2c4.md) _ZNSt6__ndk115numpunct_bynameIcE6__initEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ec50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ec50.md) · 呼出先 13件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440c3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440c3c.md) [`00bf1f98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf1/00bf1f98.md) [`00c25934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25934.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 1件 [`00c5ed20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed20.md) · 呼出先 13件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00bf2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.67% / 新版 98.67%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c2c454",
      "incomplete_value": false,
      "site": "00c2c464",
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
            "const:940:8"
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
      "00c2c2ec",
      "PARAM",
      [
        "storage",
        "002b617c",
        null,
        null
      ]
    ],
    [
      "00c2c4f0",
      "PARAM",
      [
        "storage",
        "002a9940",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c2c2ec",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ],
    [
      "00c2c4f0",
      "PARAM",
      [
        "storage",
        "002a996f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c464 ["INT_ADD", "register:40f0:8", ["const:c2c464:8", "const:4:8"]]
- 00c2c464 ["CALL", null, ["callee:00c259d0:8"]]
+ 00c2c500 ["INT_ADD", "register:40f0:8", ["const:c2c500:8", "const:4:8"]]
+ 00c2c500 ["CALL", null, ["callee:00c259d0:8"]]
- 00c2c250 ["COPY", "tmp:0:8", ["const:17c:8"]]
- 00c2c250 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00c2c250 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00c2c250 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00c2c2ec ["COPY", "tmp:0:8", ["const:1bc:8"]]
+ 00c2c2ec ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00c2c2ec ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00c2c2ec ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00c2c258 ["INT_ADD", "register:40f0:8", ["const:c2c258:8", "const:4:8"]]
- 00c2c258 ["CALL", null, ["callee:00c5b920:8"]]
+ 00c2c2f4 ["INT_ADD", "register:40f0:8", ["const:c2c2f4:8", "const:4:8"]]
+ 00c2c2f4 ["CALL", null, ["callee:00c5b920:8"]]
~~~


<a id="compare-aafd36dfd2f01b1587c1d04feaee72b0"></a>

### [`00c2c4fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c4fc.md) → [`00c2c598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c598.md) _ZNSt6__ndk115numpunct_bynameIcEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e870.md) · 呼出先 1件 [`00c5ec50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ec50.md)
- 新版 呼出元 1件 [`00c5e940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e940.md) · 呼出先 1件 [`00c5ed20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c2c530",
      "incomplete_value": true,
      "site": "00c2c530",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c2c5c0",
      "READ",
      [
        "storage",
        "00c9bdf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2c5cc",
      "DATA",
      [
        "storage",
        "00c939c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2c5c0",
      "READ",
      [
        "storage",
        "00c9bec8",
        null,
        "pointer"
      ]
    ],
    [
      "00c2c5cc",
      "DATA",
      [
        "storage",
        "00c93a90",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c524 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:df8:8"]]
- 00c2c524 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2c5c0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ec8:8"]]
+ 00c2c5c0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2c544 ["INT_ADD", "register:40f0:8", ["const:c2c544:8", "const:4:8"]]
- 00c2c544 ["CALL", null, ["callee:00c5ed20:8"]]
+ 00c2c5e0 ["INT_ADD", "register:40f0:8", ["const:c2c5e0:8", "const:4:8"]]
+ 00c2c5e0 ["CALL", null, ["callee:00c5ed20:8"]]
~~~


<a id="compare-5760de256ab954bcfd7fc775bd7f5320"></a>

### [`00c2c5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c5c0.md) → [`00c2c65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c65c.md) _ZNSt6__ndk115numpunct_bynameIwEC1EPKcm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5ec80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ec80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ed50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed50.md)

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
    "old": {
      "definition_site": "00c2c5dc",
      "incomplete_value": true,
      "site": "00c2c5f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c2c5f8",
      "incomplete_value": true,
      "site": "00c2c5f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c2c678",
      "READ",
      [
        "storage",
        "002c42e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2c684",
      "READ",
      [
        "storage",
        "00c9be00",
        null,
        "pointer"
      ]
    ],
    [
      "00c2c694",
      "DATA",
      [
        "storage",
        "00c93a10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2c678",
      "READ",
      [
        "storage",
        "002c4328",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2c684",
      "READ",
      [
        "storage",
        "00c9bed0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2c694",
      "DATA",
      [
        "storage",
        "00c93ae0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c5dc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2e8:8"]]
- 00c2c5dc ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2c5dc ["COPY", "register:5008:8", ["const:0:8"]]
- 00c2c5dc ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2c678 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:328:8"]]
+ 00c2c678 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2c678 ["COPY", "register:5008:8", ["const:0:8"]]
+ 00c2c678 ["COPY", "register:5010:8", ["const:0:8"]]
- 00c2c5e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e00:8"]]
- 00c2c5e8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2c684 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ed0:8"]]
+ 00c2c684 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2c5fc ["INT_ADD", "register:40f0:8", ["const:c2c5fc:8", "const:4:8"]]
- 00c2c5fc ["CALL", null, ["callee:00c5ed50:8"]]
+ 00c2c698 ["INT_ADD", "register:40f0:8", ["const:c2c698:8", "const:4:8"]]
+ 00c2c698 ["CALL", null, ["callee:00c5ed50:8"]]
~~~


<a id="compare-0bd840a8f6661c7cee89966e037380b7"></a>

### [`00c2c624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c624.md) → [`00c2c6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c6c0.md) _ZNSt6__ndk115numpunct_bynameIwE6__initEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ec80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ec80.md) · 呼出先 14件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00bf1f98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf1/00bf1f98.md) [`00c25934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25934.md) [`00c2c598`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c598.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 1件 [`00c5ed50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed50.md) · 呼出先 14件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00bf2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c2c634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c634.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.31% / 新版 98.31%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c2c64c",
      "incomplete_value": false,
      "site": "00c2c654",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c2c798",
      "incomplete_value": false,
      "site": "00c2c7a8",
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
            "const:7b6:8"
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
      "00c2c6e8",
      "PARAM",
      [
        "storage",
        "002b617c",
        null,
        null
      ]
    ],
    [
      "00c2c834",
      "PARAM",
      [
        "storage",
        "002b17b6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c2c6e8",
      "PARAM",
      [
        "storage",
        "002b61bc",
        null,
        null
      ]
    ],
    [
      "00c2c834",
      "PARAM",
      [
        "storage",
        "002b175a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c654 ["INT_ADD", "register:40f0:8", ["const:c2c654:8", "const:4:8"]]
- 00c2c654 ["CALL", null, ["callee:00c5b920:8"]]
+ 00c2c6f0 ["INT_ADD", "register:40f0:8", ["const:c2c6f0:8", "const:4:8"]]
+ 00c2c6f0 ["CALL", null, ["callee:00c5b920:8"]]
- 00c2c70c ["INT_ADD", "register:40f0:8", ["const:c2c70c:8", "const:4:8"]]
- 00c2c70c ["CALL", null, ["callee:00c580b0:8"]]
+ 00c2c7a8 ["INT_ADD", "register:40f0:8", ["const:c2c7a8:8", "const:4:8"]]
+ 00c2c7a8 ["CALL", null, ["callee:00c580b0:8"]]
- 00c2c7a8 ["INT_ADD", "register:40f0:8", ["const:c2c7a8:8", "const:4:8"]]
- 00c2c7a8 ["CALL", null, ["callee:00c259d0:8"]]
+ 00c2c844 ["INT_ADD", "register:40f0:8", ["const:c2c844:8", "const:4:8"]]
+ 00c2c844 ["CALL", null, ["callee:00c259d0:8"]]
~~~


<a id="compare-8e0f3ebe7b4e2b84c678e1a85b891ca1"></a>

### [`00c2c830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c830.md) → [`00c2c8cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c8cc.md) _ZNSt6__ndk115numpunct_bynameIwEC2ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e880.md) · 呼出先 1件 [`00c5ec80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ec80.md)
- 新版 呼出元 1件 [`00c5e950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e950.md) · 呼出先 1件 [`00c5ed50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed50.md)

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
    "old": {
      "definition_site": "00c2c84c",
      "incomplete_value": true,
      "site": "00c2c860",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c2c868",
      "incomplete_value": true,
      "site": "00c2c868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c2c8e8",
      "READ",
      [
        "storage",
        "002c42e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2c8f4",
      "READ",
      [
        "storage",
        "00c9be00",
        null,
        "pointer"
      ]
    ],
    [
      "00c2c904",
      "DATA",
      [
        "storage",
        "00c93a10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c2c8e8",
      "READ",
      [
        "storage",
        "002c4328",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2c8f4",
      "READ",
      [
        "storage",
        "00c9bed0",
        null,
        "pointer"
      ]
    ],
    [
      "00c2c904",
      "DATA",
      [
        "storage",
        "00c93ae0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2c84c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2e8:8"]]
- 00c2c84c ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2c84c ["COPY", "register:5008:8", ["const:0:8"]]
- 00c2c84c ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2c8e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:328:8"]]
+ 00c2c8e8 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2c8e8 ["COPY", "register:5008:8", ["const:0:8"]]
+ 00c2c8e8 ["COPY", "register:5010:8", ["const:0:8"]]
- 00c2c858 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e00:8"]]
- 00c2c858 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c2c8f4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ed0:8"]]
+ 00c2c8f4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c2c87c ["INT_ADD", "register:40f0:8", ["const:c2c87c:8", "const:4:8"]]
- 00c2c87c ["CALL", null, ["callee:00c5ed50:8"]]
+ 00c2c918 ["INT_ADD", "register:40f0:8", ["const:c2c918:8", "const:4:8"]]
+ 00c2c918 ["CALL", null, ["callee:00c5ed50:8"]]
~~~


<a id="compare-21824f6ccf6235debf662c0b7fe0ae2f"></a>

### [`00c2ca70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2ca70.md) → [`00c2cb0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2cb0c.md) _ZNKSt6__ndk120__time_get_c_storageIcE7__weeksEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c2cadc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2cadc.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2cb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2cb78.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c2cacc",
      "incomplete_value": false,
      "site": "00c2cacc",
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
            "const:ea8:8"
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
    "old": {
      "definition_site": "00c2cabc",
      "incomplete_value": false,
      "site": "00c2cacc",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c2caa4",
      "incomplete_value": false,
      "site": "00c2caa8",
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
            "const:eb0:8"
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
      "00c2cb20",
      "READ",
      [
        "storage",
        "01127eb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2cb2c",
      "READ",
      [
        "storage",
        "01127ea8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2cb2c",
      "DATA",
      [
        "storage",
        "01127fa8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2cb20",
      "READ",
      [
        "storage",
        "01127fb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2cb2c",
      "READ",
      [
        "storage",
        "01127fa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2cb2c",
      "DATA",
      [
        "storage",
        "011280a8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2caa8 ["INT_ADD", "register:40f0:8", ["const:c2caa8:8", "const:4:8"]]
- 00c2caa8 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2cb44 ["INT_ADD", "register:40f0:8", ["const:c2cb44:8", "const:4:8"]]
+ 00c2cb44 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2cacc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea8:8"]]
- 00c2cacc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00c2cb68 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fa8:8"]]
+ 00c2cb68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00c2cad0 ["INT_ADD", "register:40f0:8", ["const:c2cad0:8", "const:4:8"]]
- 00c2cad0 ["CALL", null, ["callee:00c57f40:8"]]
+ 00c2cb6c ["INT_ADD", "register:40f0:8", ["const:c2cb6c:8", "const:4:8"]]
+ 00c2cb6c ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-0e647e0712348d71919d9f697ef3765d"></a>

### [`00c2cadc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2cadc.md) → [`00c2cb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2cb78.md) FUN_00c2cb78

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c2ca70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2ca70.md) · 呼出先 4件 [`00c35ba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35ba0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c2cb0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2cb0c.md) · 呼出先 4件 [`00c35c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35c3c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c2cb10",
      "incomplete_value": false,
      "site": "00c2cb10",
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
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c2cb28",
      "incomplete_value": false,
      "site": "00c2cb28",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c2cb5c",
      "incomplete_value": false,
      "site": "00c2cb5c",
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
      "00c2cb8c",
      "READ",
      [
        "storage",
        "011280f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2cb98",
      "READ",
      [
        "storage",
        "01127fa8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2cbac",
      "WRITE",
      [
        "storage",
        "01127fa8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2cb8c",
      "READ",
      [
        "storage",
        "011281f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2cb98",
      "READ",
      [
        "storage",
        "011280a8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2cbac",
      "WRITE",
      [
        "storage",
        "011280a8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2cb8c ["COPY", "register:4048:8", ["const:1127000:8"]]
+ 00c2cc28 ["COPY", "register:4048:8", ["const:1128000:8"]]
- 00c2cee4 ["INT_ADD", "register:40f0:8", ["const:c2cee4:8", "const:4:8"]]
- 00c2cee4 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2cf80 ["INT_ADD", "register:40f0:8", ["const:c2cf80:8", "const:4:8"]]
+ 00c2cf80 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2cf00 ["INT_ADD", "register:40f0:8", ["const:c2cf00:8", "const:4:8"]]
- 00c2cf00 ["CALL", null, ["callee:00c57f00:8"]]
+ 00c2cf9c ["INT_ADD", "register:40f0:8", ["const:c2cf9c:8", "const:4:8"]]
+ 00c2cf9c ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-7b8e820b98bcc313e2f7d86fe94ba2c8"></a>

### [`00c2cf14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2cf14.md) → [`00c2cfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2cfb0.md) _ZNKSt6__ndk120__time_get_c_storageIwE7__weeksEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c2cf94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2cf94.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2d030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2d030.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination, store_value

命令の説明率　旧版 65.38% / 新版 65.38%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `return_value_candidate` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c2cf70",
      "incomplete_value": true,
      "site": "00c2cf70",
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
            "const:eb8:8"
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
    "old": {
      "definition_site": "00c2cf64",
      "incomplete_value": false,
      "site": "00c2cf70",
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
            "const:100:8"
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
    "old": {
      "definition_site": "00c2cf50",
      "incomplete_value": false,
      "site": "00c2cf54",
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
            "const:ec0:8"
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
      "00c2cfcc",
      "READ",
      [
        "storage",
        "01127ec0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2cfd4",
      "READ",
      [
        "storage",
        "01127eb8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2cfd4",
      "DATA",
      [
        "storage",
        "01128100",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2cfcc",
      "READ",
      [
        "storage",
        "01127fc0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2cfd4",
      "READ",
      [
        "storage",
        "01127fb8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2cfd4",
      "DATA",
      [
        "storage",
        "01128200",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2cf54 ["INT_ADD", "register:40f0:8", ["const:c2cf54:8", "const:4:8"]]
- 00c2cf54 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2cff0 ["INT_ADD", "register:40f0:8", ["const:c2cff0:8", "const:4:8"]]
+ 00c2cff0 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2cf5c ["INT_ADD", "register:40f0:8", ["const:c2cf5c:8", "const:4:8"]]
- 00c2cf5c ["CALL", null, ["ram:c2cf94:8"]]
+ 00c2cff8 ["INT_ADD", "register:40f0:8", ["const:c2cff8:8", "const:4:8"]]
+ 00c2cff8 ["CALL", null, ["ram:c2d030:8"]]
- 00c2cf70 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb8:8"]]
- 00c2cf70 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
+ 00c2d00c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:fb8:8"]]
+ 00c2d00c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-fb1f052519bac8358fed23128e4dca38"></a>

### [`00c2d268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2d/00c2d268.md) → [`00c2d304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2d304.md) _ZNKSt6__ndk120__time_get_c_storageIcE8__monthsEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c2d2d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2d/00c2d2d4.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2d370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2d370.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c2d2c4",
      "incomplete_value": false,
      "site": "00c2d2c4",
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
            "const:ec8:8"
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
    "old": {
      "definition_site": "00c2d2b4",
      "incomplete_value": false,
      "site": "00c2d2c4",
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
            "const:258:8"
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
    "old": {
      "definition_site": "00c2d29c",
      "incomplete_value": false,
      "site": "00c2d2a0",
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
            "const:ed0:8"
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
      "00c2d318",
      "READ",
      [
        "storage",
        "01127ed0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2d324",
      "READ",
      [
        "storage",
        "01127ec8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2d324",
      "DATA",
      [
        "storage",
        "01128258",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2d318",
      "READ",
      [
        "storage",
        "01127fd0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2d324",
      "READ",
      [
        "storage",
        "01127fc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2d324",
      "DATA",
      [
        "storage",
        "01128358",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2d2a0 ["INT_ADD", "register:40f0:8", ["const:c2d2a0:8", "const:4:8"]]
- 00c2d2a0 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2d33c ["INT_ADD", "register:40f0:8", ["const:c2d33c:8", "const:4:8"]]
+ 00c2d33c ["CALL", null, ["callee:00c57f20:8"]]
- 00c2d2c4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ec8:8"]]
- 00c2d2c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00c2d360 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fc8:8"]]
+ 00c2d360 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00c2d2c8 ["INT_ADD", "register:40f0:8", ["const:c2d2c8:8", "const:4:8"]]
- 00c2d2c8 ["CALL", null, ["callee:00c57f40:8"]]
+ 00c2d364 ["INT_ADD", "register:40f0:8", ["const:c2d364:8", "const:4:8"]]
+ 00c2d364 ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-dfb02daba1d554a50378cf03a33e6ebd"></a>

### [`00c2d2d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2d/00c2d2d4.md) → [`00c2d370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2d370.md) FUN_00c2d370

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c2d268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2d/00c2d268.md) · 呼出先 4件 [`00c35e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35e80.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c2d304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2d304.md) · 呼出先 4件 [`00c35f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35f1c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c2d308",
      "incomplete_value": false,
      "site": "00c2d308",
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
            "const:258:8"
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
    "old": {
      "definition_site": "00c2d320",
      "incomplete_value": false,
      "site": "00c2d320",
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
            "const:260:8"
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
    "old": {
      "definition_site": "00c2d358",
      "incomplete_value": false,
      "site": "00c2d358",
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
            "const:270:8"
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
      "00c2d384",
      "READ",
      [
        "storage",
        "01128498",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2d390",
      "READ",
      [
        "storage",
        "01128258",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2d3a4",
      "WRITE",
      [
        "storage",
        "01128258",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2d384",
      "READ",
      [
        "storage",
        "01128598",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2d390",
      "READ",
      [
        "storage",
        "01128358",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2d3a4",
      "WRITE",
      [
        "storage",
        "01128358",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2d350 ["COPY", "tmp:0:8", ["const:270:8"]]
- 00c2d350 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c2d350 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c2d350 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c2d3ec ["COPY", "tmp:0:8", ["const:370:8"]]
+ 00c2d3ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c2d3ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c2d3ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c2d3b0 ["COPY", "tmp:0:8", ["const:290:8"]]
- 00c2d3b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00c2d3b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00c2d3b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00c2d44c ["COPY", "tmp:0:8", ["const:390:8"]]
+ 00c2d44c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00c2d44c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00c2d44c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00c2d3d8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2a0:8"]]
- 00c2d3d8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00c2d3d8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00c2d474 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a0:8"]]
+ 00c2d474 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00c2d474 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-e7325422d5bafcf7f9c7508ead64e2ad"></a>

### [`00c2d9a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2d/00c2d9a8.md) → [`00c2da44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2da44.md) _ZNKSt6__ndk120__time_get_c_storageIwE8__monthsEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c2da28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2d/00c2da28.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2dac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2dac4.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination, store_value

命令の説明率　旧版 65.38% / 新版 65.38%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `return_value_candidate` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c2da04",
      "incomplete_value": true,
      "site": "00c2da04",
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
            "const:ed8:8"
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
    "old": {
      "definition_site": "00c2d9f8",
      "incomplete_value": false,
      "site": "00c2da04",
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
            "const:4a0:8"
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
    "old": {
      "definition_site": "00c2d9e4",
      "incomplete_value": true,
      "site": "00c2d9e8",
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
            "const:ee0:8"
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
      "00c2da60",
      "READ",
      [
        "storage",
        "01127ee0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2da68",
      "READ",
      [
        "storage",
        "01127ed8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2da68",
      "DATA",
      [
        "storage",
        "011284a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c2da60",
      "READ",
      [
        "storage",
        "01127fe0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2da68",
      "READ",
      [
        "storage",
        "01127fd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2da68",
      "DATA",
      [
        "storage",
        "011285a0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2d9e8 ["INT_ADD", "register:40f0:8", ["const:c2d9e8:8", "const:4:8"]]
- 00c2d9e8 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2da84 ["INT_ADD", "register:40f0:8", ["const:c2da84:8", "const:4:8"]]
+ 00c2da84 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2d9f0 ["INT_ADD", "register:40f0:8", ["const:c2d9f0:8", "const:4:8"]]
- 00c2d9f0 ["CALL", null, ["ram:c2da28:8"]]
+ 00c2da8c ["INT_ADD", "register:40f0:8", ["const:c2da8c:8", "const:4:8"]]
+ 00c2da8c ["CALL", null, ["ram:c2dac4:8"]]
- 00c2da04 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ed8:8"]]
- 00c2da04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
+ 00c2daa0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:fd8:8"]]
+ 00c2daa0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-ef438733699d93787ca472b1cc735008"></a>

### [`00c2df50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2d/00c2df50.md) → [`00c2dfec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2dfec.md) _ZNKSt6__ndk120__time_get_c_storageIcE7__am_pmEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c2dfbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2d/00c2dfbc.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2e058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e058.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c2dfac",
      "incomplete_value": true,
      "site": "00c2dfac",
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
            "const:ee8:8"
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
    "old": {
      "definition_site": "00c2df84",
      "incomplete_value": false,
      "site": "00c2df88",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c2dfa8",
      "incomplete_value": true,
      "site": "00c2dfb0",
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
            "const:ef0:8"
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
      "00c2e000",
      "READ",
      [
        "storage",
        "01127ef0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e00c",
      "READ",
      [
        "storage",
        "01127ee8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2e00c",
      "DATA",
      [
        "storage",
        "011286e8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e000",
      "READ",
      [
        "storage",
        "01127ff0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e00c",
      "READ",
      [
        "storage",
        "01127fe8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2e00c",
      "DATA",
      [
        "storage",
        "011287e8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2df88 ["INT_ADD", "register:40f0:8", ["const:c2df88:8", "const:4:8"]]
- 00c2df88 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2e024 ["INT_ADD", "register:40f0:8", ["const:c2e024:8", "const:4:8"]]
+ 00c2e024 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2dfac ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ee8:8"]]
- 00c2dfac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00c2e048 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fe8:8"]]
+ 00c2e048 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00c2dfb0 ["INT_ADD", "register:40f0:8", ["const:c2dfb0:8", "const:4:8"]]
- 00c2dfb0 ["CALL", null, ["callee:00c57f40:8"]]
+ 00c2e04c ["INT_ADD", "register:40f0:8", ["const:c2e04c:8", "const:4:8"]]
+ 00c2e04c ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-5e2ba19b5349e7c6ea596f10a6686aa4"></a>

### [`00c2dfbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2d/00c2dfbc.md) → [`00c2e058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e058.md) FUN_00c2e058

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c2df50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2d/00c2df50.md) · 呼出先 4件 [`00c35f20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35f20.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c2dfec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2d/00c2dfec.md) · 呼出先 4件 [`00c35fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35fbc.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c2dff0",
      "incomplete_value": false,
      "site": "00c2dff0",
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
            "const:6e8:8"
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
    "old": {
      "definition_site": "00c2e008",
      "incomplete_value": false,
      "site": "00c2e008",
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
            "const:6f0:8"
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
    "old": {
      "definition_site": "00c2e030",
      "incomplete_value": false,
      "site": "00c2e030",
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
            "const:700:8"
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
      "00c2e06c",
      "READ",
      [
        "storage",
        "01128718",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e078",
      "READ",
      [
        "storage",
        "011286e8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e08c",
      "WRITE",
      [
        "storage",
        "011286e8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e06c",
      "READ",
      [
        "storage",
        "01128818",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e078",
      "READ",
      [
        "storage",
        "011287e8",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e08c",
      "WRITE",
      [
        "storage",
        "011287e8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e06c ["INT_ADD", "register:40f0:8", ["const:c2e06c:8", "const:4:8"]]
- 00c2e06c ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2e108 ["INT_ADD", "register:40f0:8", ["const:c2e108:8", "const:4:8"]]
+ 00c2e108 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2e088 ["INT_ADD", "register:40f0:8", ["const:c2e088:8", "const:4:8"]]
- 00c2e088 ["CALL", null, ["callee:00c57f00:8"]]
+ 00c2e124 ["INT_ADD", "register:40f0:8", ["const:c2e124:8", "const:4:8"]]
+ 00c2e124 ["CALL", null, ["callee:00c57f00:8"]]
- 00c2e094 ["INT_ADD", "register:40f0:8", ["const:c2e094:8", "const:4:8"]]
- 00c2e094 ["CALL", null, ["callee:00c57f40:8"]]
+ 00c2e130 ["INT_ADD", "register:40f0:8", ["const:c2e130:8", "const:4:8"]]
+ 00c2e130 ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-b1a8e8aa0d4eee7feb728b4c444314d9"></a>

### [`00c2e09c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e09c.md) → [`00c2e138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e138.md) _ZNKSt6__ndk120__time_get_c_storageIwE7__am_pmEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c2e108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e108.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2e1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e1a4.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c2e0f8",
      "incomplete_value": false,
      "site": "00c2e0f8",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c2e0e8",
      "incomplete_value": false,
      "site": "00c2e0f8",
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
            "const:720:8"
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
    "old": {
      "definition_site": "00c2e0d0",
      "incomplete_value": false,
      "site": "00c2e0d4",
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
            "const:f00:8"
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
      "00c2e14c",
      "READ",
      [
        "storage",
        "01127f00",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e158",
      "READ",
      [
        "storage",
        "01127ef8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2e158",
      "DATA",
      [
        "storage",
        "01128720",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e14c",
      "READ",
      [
        "storage",
        "01128000",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e158",
      "READ",
      [
        "storage",
        "01127ff8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c2e158",
      "DATA",
      [
        "storage",
        "01128820",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e0d4 ["INT_ADD", "register:40f0:8", ["const:c2e0d4:8", "const:4:8"]]
- 00c2e0d4 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2e170 ["INT_ADD", "register:40f0:8", ["const:c2e170:8", "const:4:8"]]
+ 00c2e170 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2e0f8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ef8:8"]]
- 00c2e0f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00c2e194 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ff8:8"]]
+ 00c2e194 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00c2e0fc ["INT_ADD", "register:40f0:8", ["const:c2e0fc:8", "const:4:8"]]
- 00c2e0fc ["CALL", null, ["callee:00c57f40:8"]]
+ 00c2e198 ["INT_ADD", "register:40f0:8", ["const:c2e198:8", "const:4:8"]]
+ 00c2e198 ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-9f5f5718402a726ab5170c35126a1c5b"></a>

### [`00c2e108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e108.md) → [`00c2e1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e1a4.md) FUN_00c2e1a4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c2e09c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e09c.md) · 呼出先 4件 [`00c35f6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35f6c.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00c2e138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e138.md) · 呼出先 4件 [`00c36008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36008.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c2e13c",
      "incomplete_value": true,
      "site": "00c2e13c",
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
            "const:720:8"
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
    "old": {
      "definition_site": "00c2e154",
      "incomplete_value": false,
      "site": "00c2e154",
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
            "const:728:8"
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
    "old": {
      "definition_site": "00c2e180",
      "incomplete_value": false,
      "site": "00c2e180",
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
            "const:738:8"
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
      "00c2e1b8",
      "READ",
      [
        "storage",
        "01128750",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e1c4",
      "READ",
      [
        "storage",
        "01128720",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e1d8",
      "WRITE",
      [
        "storage",
        "01128720",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e1b8",
      "READ",
      [
        "storage",
        "01128850",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e1c4",
      "READ",
      [
        "storage",
        "01128820",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e1d8",
      "WRITE",
      [
        "storage",
        "01128820",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e148 ["COPY", "tmp:0:8", ["const:728:8"]]
- 00c2e148 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c2e148 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c2e148 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c2e1e4 ["COPY", "tmp:0:8", ["const:828:8"]]
+ 00c2e1e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c2e1e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c2e1e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c2e1bc ["INT_ADD", "register:40f0:8", ["const:c2e1bc:8", "const:4:8"]]
- 00c2e1bc ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2e258 ["INT_ADD", "register:40f0:8", ["const:c2e258:8", "const:4:8"]]
+ 00c2e258 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2e1d8 ["INT_ADD", "register:40f0:8", ["const:c2e1d8:8", "const:4:8"]]
- 00c2e1d8 ["CALL", null, ["callee:00c57f00:8"]]
+ 00c2e274 ["INT_ADD", "register:40f0:8", ["const:c2e274:8", "const:4:8"]]
+ 00c2e274 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-1519d55f8c6bc951fd97c8dd12a8ca49"></a>

### [`00c2e1ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e1ec.md) → [`00c2e288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e288.md) _ZNKSt6__ndk120__time_get_c_storageIcE3__xEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c2e220",
      "incomplete_value": false,
      "site": "00c2e224",
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
            "const:f08:8"
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
    "old": {
      "definition_site": "00c2e238",
      "incomplete_value": true,
      "site": "00c2e244",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf8:8"
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
      "definition_site": "00c2e2d0",
      "incomplete_value": false,
      "site": "00c2e2e0",
      "value": [
        "leaf",
        "const:ca48e0:8"
      ]
    },
    "old": {
      "definition_site": "00c2e234",
      "incomplete_value": false,
      "site": "00c2e244",
      "value": [
        "leaf",
        "const:ca4810:8"
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
      "00c2e29c",
      "READ",
      [
        "storage",
        "01127f08",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e2a8",
      "DATA",
      [
        "storage",
        "00ca4810",
        null,
        null
      ]
    ],
    [
      "00c2e2bc",
      "PARAM",
      [
        "storage",
        "01127f08",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e29c",
      "READ",
      [
        "storage",
        "01128008",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e2a8",
      "DATA",
      [
        "storage",
        "00ca48e0",
        null,
        null
      ]
    ],
    [
      "00c2e2bc",
      "PARAM",
      [
        "storage",
        "01128008",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e224 ["INT_ADD", "register:40f0:8", ["const:c2e224:8", "const:4:8"]]
- 00c2e224 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2e2c0 ["INT_ADD", "register:40f0:8", ["const:c2e2c0:8", "const:4:8"]]
+ 00c2e2c0 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2e244 ["INT_ADD", "register:40f0:8", ["const:c2e244:8", "const:4:8"]]
- 00c2e244 ["CALL", null, ["callee:00c57f00:8"]]
+ 00c2e2e0 ["INT_ADD", "register:40f0:8", ["const:c2e2e0:8", "const:4:8"]]
+ 00c2e2e0 ["CALL", null, ["callee:00c57f00:8"]]
- 00c2e250 ["INT_ADD", "register:40f0:8", ["const:c2e250:8", "const:4:8"]]
- 00c2e250 ["CALL", null, ["callee:00c57f40:8"]]
+ 00c2e2ec ["INT_ADD", "register:40f0:8", ["const:c2e2ec:8", "const:4:8"]]
+ 00c2e2ec ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-8962f0fb342fea27513e18dac9c92006"></a>

### [`00c2e258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e258.md) → [`00c2e2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e2f4.md) _ZNKSt6__ndk120__time_get_c_storageIwE3__xEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00bf2d28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2d28.md) [`00c2c094`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c094.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00bf2dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2dc4.md) [`00c2c130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c130.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c2e294",
      "incomplete_value": false,
      "site": "00c2e298",
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
            "const:f28:8"
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
    "old": {
      "definition_site": "00c2e2a4",
      "incomplete_value": false,
      "site": "00c2e2b0",
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
            "const:f10:8"
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
    "old": {
      "definition_site": "00c2e2ac",
      "incomplete_value": false,
      "site": "00c2e2b0",
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
            "const:768:8"
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
      "00c2e30c",
      "READ",
      [
        "storage",
        "01127f28",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e318",
      "DATA",
      [
        "storage",
        "01127f10",
        null,
        null
      ]
    ],
    [
      "00c2e330",
      "PARAM",
      [
        "storage",
        "01127f28",
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
        "01128028",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e318",
      "DATA",
      [
        "storage",
        "01128010",
        null,
        null
      ]
    ],
    [
      "00c2e330",
      "PARAM",
      [
        "storage",
        "01128028",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e298 ["INT_ADD", "register:40f0:8", ["const:c2e298:8", "const:4:8"]]
- 00c2e298 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2e334 ["INT_ADD", "register:40f0:8", ["const:c2e334:8", "const:4:8"]]
+ 00c2e334 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2e2b0 ["INT_ADD", "register:40f0:8", ["const:c2e2b0:8", "const:4:8"]]
- 00c2e2b0 ["CALL", null, ["callee:00c2c130:8"]]
+ 00c2e34c ["INT_ADD", "register:40f0:8", ["const:c2e34c:8", "const:4:8"]]
+ 00c2e34c ["CALL", null, ["callee:00c2c130:8"]]
- 00c2e2cc ["INT_ADD", "register:40f0:8", ["const:c2e2cc:8", "const:4:8"]]
- 00c2e2cc ["CALL", null, ["callee:00c57f00:8"]]
+ 00c2e368 ["INT_ADD", "register:40f0:8", ["const:c2e368:8", "const:4:8"]]
+ 00c2e368 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-30e0eec12c7140ffe8dabcffd59674f5"></a>

### [`00c2e2f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e2f8.md) → [`00c2e394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e394.md) _ZNKSt6__ndk120__time_get_c_storageIcE3__XEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c2e32c",
      "incomplete_value": false,
      "site": "00c2e330",
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
            "const:f30:8"
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
    "old": {
      "definition_site": "00c2e344",
      "incomplete_value": true,
      "site": "00c2e350",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf8:8"
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
      "definition_site": "00c2e3dc",
      "incomplete_value": false,
      "site": "00c2e3ec",
      "value": [
        "leaf",
        "const:ca48f8:8"
      ]
    },
    "old": {
      "definition_site": "00c2e340",
      "incomplete_value": false,
      "site": "00c2e350",
      "value": [
        "leaf",
        "const:ca4828:8"
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
      "00c2e3a8",
      "READ",
      [
        "storage",
        "01127f30",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e3b4",
      "DATA",
      [
        "storage",
        "00ca4828",
        null,
        null
      ]
    ],
    [
      "00c2e3c8",
      "PARAM",
      [
        "storage",
        "01127f30",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e3a8",
      "READ",
      [
        "storage",
        "01128030",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e3b4",
      "DATA",
      [
        "storage",
        "00ca48f8",
        null,
        null
      ]
    ],
    [
      "00c2e3c8",
      "PARAM",
      [
        "storage",
        "01128030",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e330 ["INT_ADD", "register:40f0:8", ["const:c2e330:8", "const:4:8"]]
- 00c2e330 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2e3cc ["INT_ADD", "register:40f0:8", ["const:c2e3cc:8", "const:4:8"]]
+ 00c2e3cc ["CALL", null, ["callee:00c57f20:8"]]
- 00c2e350 ["INT_ADD", "register:40f0:8", ["const:c2e350:8", "const:4:8"]]
- 00c2e350 ["CALL", null, ["callee:00c57f00:8"]]
+ 00c2e3ec ["INT_ADD", "register:40f0:8", ["const:c2e3ec:8", "const:4:8"]]
+ 00c2e3ec ["CALL", null, ["callee:00c57f00:8"]]
- 00c2e35c ["INT_ADD", "register:40f0:8", ["const:c2e35c:8", "const:4:8"]]
- 00c2e35c ["CALL", null, ["callee:00c57f40:8"]]
+ 00c2e3f8 ["INT_ADD", "register:40f0:8", ["const:c2e3f8:8", "const:4:8"]]
+ 00c2e3f8 ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-7739c54b875542a28bf80527a8458ee9"></a>

### [`00c2e364`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e364.md) → [`00c2e400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e400.md) _ZNKSt6__ndk120__time_get_c_storageIwE3__XEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00bf2d28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2d28.md) [`00c2c094`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c094.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00bf2dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2dc4.md) [`00c2c130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c130.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c2e3a0",
      "incomplete_value": false,
      "site": "00c2e3a4",
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
            "const:f50:8"
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
    "old": {
      "definition_site": "00c2e3b0",
      "incomplete_value": false,
      "site": "00c2e3bc",
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
            "const:f38:8"
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
    "old": {
      "definition_site": "00c2e3b8",
      "incomplete_value": false,
      "site": "00c2e3bc",
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
            "const:5d8:8"
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
      "00c2e418",
      "READ",
      [
        "storage",
        "01127f50",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e424",
      "DATA",
      [
        "storage",
        "01127f38",
        null,
        null
      ]
    ],
    [
      "00c2e43c",
      "PARAM",
      [
        "storage",
        "01127f50",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e418",
      "READ",
      [
        "storage",
        "01128050",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e424",
      "DATA",
      [
        "storage",
        "01128038",
        null,
        null
      ]
    ],
    [
      "00c2e43c",
      "PARAM",
      [
        "storage",
        "01128050",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e3a4 ["INT_ADD", "register:40f0:8", ["const:c2e3a4:8", "const:4:8"]]
- 00c2e3a4 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2e440 ["INT_ADD", "register:40f0:8", ["const:c2e440:8", "const:4:8"]]
+ 00c2e440 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2e3bc ["INT_ADD", "register:40f0:8", ["const:c2e3bc:8", "const:4:8"]]
- 00c2e3bc ["CALL", null, ["callee:00c2c130:8"]]
+ 00c2e458 ["INT_ADD", "register:40f0:8", ["const:c2e458:8", "const:4:8"]]
+ 00c2e458 ["CALL", null, ["callee:00c2c130:8"]]
- 00c2e3d8 ["INT_ADD", "register:40f0:8", ["const:c2e3d8:8", "const:4:8"]]
- 00c2e3d8 ["CALL", null, ["callee:00c57f00:8"]]
+ 00c2e474 ["INT_ADD", "register:40f0:8", ["const:c2e474:8", "const:4:8"]]
+ 00c2e474 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-a040cc9724ff5b6bbc6fd0d9d6ff59a4"></a>

### [`00c2e404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e404.md) → [`00c2e4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e4a0.md) _ZNKSt6__ndk120__time_get_c_storageIcE3__cEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c2e438",
      "incomplete_value": false,
      "site": "00c2e43c",
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
            "const:f58:8"
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
    "old": {
      "definition_site": "00c2e450",
      "incomplete_value": true,
      "site": "00c2e45c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf8:8"
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
      "definition_site": "00c2e4e8",
      "incomplete_value": false,
      "site": "00c2e4f8",
      "value": [
        "leaf",
        "const:ca4910:8"
      ]
    },
    "old": {
      "definition_site": "00c2e44c",
      "incomplete_value": false,
      "site": "00c2e45c",
      "value": [
        "leaf",
        "const:ca4840:8"
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
      "00c2e4b4",
      "READ",
      [
        "storage",
        "01127f58",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e4c0",
      "DATA",
      [
        "storage",
        "00ca4840",
        null,
        "string"
      ]
    ],
    [
      "00c2e4d4",
      "PARAM",
      [
        "storage",
        "01127f58",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e4b4",
      "READ",
      [
        "storage",
        "01128058",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e4c0",
      "DATA",
      [
        "storage",
        "00ca4910",
        null,
        "string"
      ]
    ],
    [
      "00c2e4d4",
      "PARAM",
      [
        "storage",
        "01128058",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e43c ["INT_ADD", "register:40f0:8", ["const:c2e43c:8", "const:4:8"]]
- 00c2e43c ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2e4d8 ["INT_ADD", "register:40f0:8", ["const:c2e4d8:8", "const:4:8"]]
+ 00c2e4d8 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2e45c ["INT_ADD", "register:40f0:8", ["const:c2e45c:8", "const:4:8"]]
- 00c2e45c ["CALL", null, ["callee:00c57f00:8"]]
+ 00c2e4f8 ["INT_ADD", "register:40f0:8", ["const:c2e4f8:8", "const:4:8"]]
+ 00c2e4f8 ["CALL", null, ["callee:00c57f00:8"]]
- 00c2e410 ["COPY", "register:4040:8", ["const:1127000:8"]]
+ 00c2e4ac ["COPY", "register:4040:8", ["const:1128000:8"]]
~~~


<a id="compare-a7dea4650008249f86f410e9bf1f7ca3"></a>

### [`00c2e470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e470.md) → [`00c2e50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e50c.md) _ZNKSt6__ndk120__time_get_c_storageIwE3__cEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00bf2d28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2d28.md) [`00c2c094`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c094.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00bf2dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2dc4.md) [`00c2c130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c130.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c2e4ac",
      "incomplete_value": false,
      "site": "00c2e4b0",
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
            "const:f78:8"
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
    "old": {
      "definition_site": "00c2e4bc",
      "incomplete_value": false,
      "site": "00c2e4c8",
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
            "const:f60:8"
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
    "old": {
      "definition_site": "00c2e4c4",
      "incomplete_value": false,
      "site": "00c2e4c8",
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
      "00c2e524",
      "READ",
      [
        "storage",
        "01127f78",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e530",
      "DATA",
      [
        "storage",
        "01127f60",
        null,
        null
      ]
    ],
    [
      "00c2e548",
      "PARAM",
      [
        "storage",
        "01127f78",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e524",
      "READ",
      [
        "storage",
        "01128078",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e530",
      "DATA",
      [
        "storage",
        "01128060",
        null,
        null
      ]
    ],
    [
      "00c2e548",
      "PARAM",
      [
        "storage",
        "01128078",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e4b0 ["INT_ADD", "register:40f0:8", ["const:c2e4b0:8", "const:4:8"]]
- 00c2e4b0 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2e54c ["INT_ADD", "register:40f0:8", ["const:c2e54c:8", "const:4:8"]]
+ 00c2e54c ["CALL", null, ["callee:00c57f20:8"]]
- 00c2e4c8 ["INT_ADD", "register:40f0:8", ["const:c2e4c8:8", "const:4:8"]]
- 00c2e4c8 ["CALL", null, ["callee:00c2c130:8"]]
+ 00c2e564 ["INT_ADD", "register:40f0:8", ["const:c2e564:8", "const:4:8"]]
+ 00c2e564 ["CALL", null, ["callee:00c2c130:8"]]
- 00c2e4e4 ["INT_ADD", "register:40f0:8", ["const:c2e4e4:8", "const:4:8"]]
- 00c2e4e4 ["CALL", null, ["callee:00c57f00:8"]]
+ 00c2e580 ["INT_ADD", "register:40f0:8", ["const:c2e580:8", "const:4:8"]]
+ 00c2e580 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-8aca26e83f4df5f511366b541227a968"></a>

### [`00c2e510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e510.md) → [`00c2e5ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e5ac.md) _ZNKSt6__ndk120__time_get_c_storageIcE3__rEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c2e544",
      "incomplete_value": false,
      "site": "00c2e548",
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
            "const:f80:8"
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
    "old": {
      "definition_site": "00c2e55c",
      "incomplete_value": true,
      "site": "00c2e568",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf8:8"
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
      "definition_site": "00c2e5f4",
      "incomplete_value": false,
      "site": "00c2e604",
      "value": [
        "leaf",
        "const:ca4928:8"
      ]
    },
    "old": {
      "definition_site": "00c2e558",
      "incomplete_value": false,
      "site": "00c2e568",
      "value": [
        "leaf",
        "const:ca4858:8"
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
      "00c2e5c0",
      "READ",
      [
        "storage",
        "01127f80",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e5cc",
      "DATA",
      [
        "storage",
        "00ca4858",
        null,
        null
      ]
    ],
    [
      "00c2e5e0",
      "PARAM",
      [
        "storage",
        "01127f80",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e5c0",
      "READ",
      [
        "storage",
        "01128080",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e5cc",
      "DATA",
      [
        "storage",
        "00ca4928",
        null,
        null
      ]
    ],
    [
      "00c2e5e0",
      "PARAM",
      [
        "storage",
        "01128080",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e548 ["INT_ADD", "register:40f0:8", ["const:c2e548:8", "const:4:8"]]
- 00c2e548 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2e5e4 ["INT_ADD", "register:40f0:8", ["const:c2e5e4:8", "const:4:8"]]
+ 00c2e5e4 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2e568 ["INT_ADD", "register:40f0:8", ["const:c2e568:8", "const:4:8"]]
- 00c2e568 ["CALL", null, ["callee:00c57f00:8"]]
+ 00c2e604 ["INT_ADD", "register:40f0:8", ["const:c2e604:8", "const:4:8"]]
+ 00c2e604 ["CALL", null, ["callee:00c57f00:8"]]
- 00c2e574 ["INT_ADD", "register:40f0:8", ["const:c2e574:8", "const:4:8"]]
- 00c2e574 ["CALL", null, ["callee:00c57f40:8"]]
+ 00c2e610 ["INT_ADD", "register:40f0:8", ["const:c2e610:8", "const:4:8"]]
+ 00c2e610 ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-d7d070d7c3fd754685cbcd0e2e0cab8a"></a>

### [`00c2e57c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e57c.md) → [`00c2e618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e618.md) _ZNKSt6__ndk120__time_get_c_storageIwE3__rEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00bf2d28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf2/00bf2d28.md) [`00c2c094`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c094.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00bf2dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2dc4.md) [`00c2c130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c130.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

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
    "old": {
      "definition_site": "00c2e5b8",
      "incomplete_value": false,
      "site": "00c2e5bc",
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
            "const:fa0:8"
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
    "old": {
      "definition_site": "00c2e5c8",
      "incomplete_value": false,
      "site": "00c2e5d4",
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
            "const:f88:8"
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
    "old": {
      "definition_site": "00c2e5d0",
      "incomplete_value": false,
      "site": "00c2e5d4",
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
            "const:500:8"
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
      "00c2e630",
      "READ",
      [
        "storage",
        "01127fa0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e63c",
      "DATA",
      [
        "storage",
        "01127f88",
        null,
        null
      ]
    ],
    [
      "00c2e654",
      "PARAM",
      [
        "storage",
        "01127fa0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c2e630",
      "READ",
      [
        "storage",
        "011280a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c2e63c",
      "DATA",
      [
        "storage",
        "01128088",
        null,
        null
      ]
    ],
    [
      "00c2e654",
      "PARAM",
      [
        "storage",
        "011280a0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e5bc ["INT_ADD", "register:40f0:8", ["const:c2e5bc:8", "const:4:8"]]
- 00c2e5bc ["CALL", null, ["callee:00c57f20:8"]]
+ 00c2e658 ["INT_ADD", "register:40f0:8", ["const:c2e658:8", "const:4:8"]]
+ 00c2e658 ["CALL", null, ["callee:00c57f20:8"]]
- 00c2e5d4 ["INT_ADD", "register:40f0:8", ["const:c2e5d4:8", "const:4:8"]]
- 00c2e5d4 ["CALL", null, ["callee:00c2c130:8"]]
+ 00c2e670 ["INT_ADD", "register:40f0:8", ["const:c2e670:8", "const:4:8"]]
+ 00c2e670 ["CALL", null, ["callee:00c2c130:8"]]
- 00c2e5f0 ["INT_ADD", "register:40f0:8", ["const:c2e5f0:8", "const:4:8"]]
- 00c2e5f0 ["CALL", null, ["callee:00c57f00:8"]]
+ 00c2e68c ["INT_ADD", "register:40f0:8", ["const:c2e68c:8", "const:4:8"]]
+ 00c2e68c ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-da6096948d691317429de20fd0f66666"></a>

### [`00c2e61c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e61c.md) → [`00c2e6b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e6b8.md) _ZNSt6__ndk110__time_getC1EPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5eca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5eca0.md) · 呼出先 6件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00c25934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25934.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 1件 [`00c5ed70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed70.md) · 呼出先 6件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.87% / 新版 97.87%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c2e670",
      "incomplete_value": false,
      "site": "00c2e680",
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
            "const:fd2:8"
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
      "00c2e70c",
      "PARAM",
      [
        "storage",
        "002b6fd2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c2e70c",
      "PARAM",
      [
        "storage",
        "002b7012",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e680 ["INT_ADD", "register:40f0:8", ["const:c2e680:8", "const:4:8"]]
- 00c2e680 ["CALL", null, ["callee:00c259d0:8"]]
+ 00c2e71c ["INT_ADD", "register:40f0:8", ["const:c2e71c:8", "const:4:8"]]
+ 00c2e71c ["CALL", null, ["callee:00c259d0:8"]]
- 00c2e640 ["INT_ADD", "register:40f0:8", ["const:c2e640:8", "const:4:8"]]
- 00c2e640 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c2e6dc ["INT_ADD", "register:40f0:8", ["const:c2e6dc:8", "const:4:8"]]
+ 00c2e6dc ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c2e668 ["INT_ADD", "register:40f0:8", ["const:c2e668:8", "const:4:8"]]
- 00c2e668 ["CALL", null, ["callee:0043de18:8"]]
+ 00c2e704 ["INT_ADD", "register:40f0:8", ["const:c2e704:8", "const:4:8"]]
+ 00c2e704 ["CALL", null, ["callee:0043de18:8"]]
~~~


<a id="compare-dd76dd3cc6b31c11ef3d618554dbbbe0"></a>

### [`00c2e6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e6e4.md) → [`00c2e780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e780.md) _ZNSt6__ndk110__time_getC2ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ecb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ecb0.md) · 呼出先 5件 [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md) [`00c5dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c5ed80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed80.md) · 呼出先 5件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.44% / 新版 97.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c2e73c",
      "incomplete_value": false,
      "site": "00c2e74c",
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
            "const:fd2:8"
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
      "00c2e7d8",
      "PARAM",
      [
        "storage",
        "002b6fd2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c2e7d8",
      "PARAM",
      [
        "storage",
        "002b7012",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e74c ["INT_ADD", "register:40f0:8", ["const:c2e74c:8", "const:4:8"]]
- 00c2e74c ["CALL", null, ["callee:00c58180:8"]]
+ 00c2e7e8 ["INT_ADD", "register:40f0:8", ["const:c2e7e8:8", "const:4:8"]]
+ 00c2e7e8 ["CALL", null, ["callee:00c58180:8"]]
- 00c2e718 ["INT_ADD", "register:40f0:8", ["const:c2e718:8", "const:4:8"]]
- 00c2e718 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c2e7b4 ["INT_ADD", "register:40f0:8", ["const:c2e7b4:8", "const:4:8"]]
+ 00c2e7b4 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c2e738 ["COPY", "register:4000:8", ["const:2b6000:8"]]
+ 00c2e7d4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-d5a7a8fd33c00fff0374e129ef63ae5d"></a>

### [`00c2e7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2e7a4.md) → [`00c2e840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e840.md) _ZNSt6__ndk118__time_get_storageIcE9__analyzeEcRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ecd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ecd0.md) · 呼出先 3件 [`00c2ed8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2e/00c2ed8c.md) [`00c58600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58600.md) [`00c5e660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e660.md)
- 新版 呼出元 1件 [`00c5eda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eda0.md) · 呼出先 3件 [`00c2ee28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2ee28.md) [`00c586d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586d0.md) [`00c5e730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e730.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.91% / 新版 98.91%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c2e7d4",
      "incomplete_value": true,
      "site": "00c2e7ec",
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
                "const:6d0:8"
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
    "old": {
      "definition_site": "00c2e7f0",
      "incomplete_value": true,
      "site": "00c2e804",
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
                "const:be0:8"
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
      "00c2e870",
      "READ",
      [
        "storage",
        "002c26d0",
        null,
        null
      ]
    ],
    [
      "00c2e88c",
      "READ",
      [
        "storage",
        "002c2be0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c2e870",
      "READ",
      [
        "storage",
        "002c2710",
        null,
        null
      ]
    ],
    [
      "00c2e88c",
      "READ",
      [
        "storage",
        "002c2c20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c2e7d4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:6d0:8"]]
- 00c2e7d4 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00c2e7d4 ["COPY", "register:5010:8", ["const:0:8"]]
- 00c2e7d4 ["COPY", "register:5018:8", ["const:0:8"]]
+ 00c2e870 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:710:8"]]
+ 00c2e870 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00c2e870 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2e870 ["COPY", "register:5018:8", ["const:0:8"]]
- 00c2e7f0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:be0:8"]]
- 00c2e7f0 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00c2e7f0 ["COPY", "register:5010:8", ["const:0:8"]]
- 00c2e7f0 ["COPY", "register:5018:8", ["const:0:8"]]
+ 00c2e88c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c20:8"]]
+ 00c2e88c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00c2e88c ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2e88c ["COPY", "register:5018:8", ["const:0:8"]]
- 00c2e82c ["INT_ADD", "register:40f0:8", ["const:c2e82c:8", "const:4:8"]]
- 00c2e82c ["CALL", null, ["callee:00c5e730:8"]]
+ 00c2e8c8 ["INT_ADD", "register:40f0:8", ["const:c2e8c8:8", "const:4:8"]]
+ 00c2e8c8 ["CALL", null, ["callee:00c5e730:8"]]
~~~


<a id="compare-dcbdb4f8cd05e287e1b88c73bde4bbef"></a>

### [`00c2f09c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2f/00c2f09c.md) → [`00c2f138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2f/00c2f138.md) _ZNSt6__ndk118__time_get_storageIwE9__analyzeEcRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ece0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ece0.md) · 呼出先 8件 [`00c30744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c30/00c30744.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5a8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8a0.md) [`00c5dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c5edb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5edb0.md) · 呼出先 8件 [`00c307e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c30/00c307e0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 99.65% / 新版 99.65%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c2f0cc",
      "incomplete_value": true,
      "site": "00c2f114",
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
                "const:6d0:8"
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
    "old": {
      "definition_site": "00c2f0d8",
      "incomplete_value": true,
      "site": "00c2f114",
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
                "const:be0:8"
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
    "old": {
      "definition_site": "00c306f0",
      "incomplete_value": false,
      "site": "00c306f4",
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
      "00c2f168",
      "READ",
      [
        "storage",
        "002c26d0",
        null,
        null
      ]
    ],
    [
      "00c2f174",
      "READ",
      [
        "storage",
        "002c2be0",
        null,
        null
      ]
    ],
    [
      "00c3078c",
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
      "00c2f168",
      "READ",
      [
        "storage",
        "002c2710",
        null,
        null
      ]
    ],
    [
      "00c2f174",
      "READ",
      [
        "storage",
        "002c2c20",
        null,
        null
      ]
    ],
    [
      "00c3078c",
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
- 00c306f4 ["INT_ADD", "register:40f0:8", ["const:c306f4:8", "const:4:8"]]
- 00c306f4 ["CALL", null, ["callee:00c5e080:8"]]
+ 00c30790 ["INT_ADD", "register:40f0:8", ["const:c30790:8", "const:4:8"]]
+ 00c30790 ["CALL", null, ["callee:00c5e080:8"]]
- 00c2f0cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6d0:8"]]
- 00c2f0cc ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00c2f0cc ["COPY", "register:5010:8", ["const:0:8"]]
- 00c2f0cc ["COPY", "register:5018:8", ["const:0:8"]]
+ 00c2f168 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:710:8"]]
+ 00c2f168 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00c2f168 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00c2f168 ["COPY", "register:5018:8", ["const:0:8"]]
- 00c2f0d0 ["COPY", "register:4040:8", ["const:2c2000:8"]]
~~~


<a id="compare-1c359bf492be11832946504d3bc61bd5"></a>

### [`00c30ce8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c30/00c30ce8.md) → [`00c30d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c30/00c30d84.md) _ZNSt6__ndk118__time_get_storageIwE4initERKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ed00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ed00.md) · 呼出先 8件 [`00440c3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440c3c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5a8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8a0.md) [`00c5dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfb0.md) [`00c5e570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e570.md)
- 新版 呼出元 1件 [`00c5edd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5edd0.md) · 呼出先 8件 [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a970.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md) [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.93% / 新版 98.93%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c30d70",
      "incomplete_value": false,
      "site": "00c30d78",
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
            "const:801:8"
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
    "old": {
      "definition_site": "00c30ed0",
      "incomplete_value": false,
      "site": "00c30ed4",
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
            "const:51d:8"
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
    "old": {
      "definition_site": "00c311b8",
      "incomplete_value": false,
      "site": "00c311bc",
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
            "const:e1a:8"
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
      "00c30e0c",
      "PARAM",
      [
        "storage",
        "002b2801",
        null,
        null
      ]
    ],
    [
      "00c30f6c",
      "PARAM",
      [
        "storage",
        "002ac51d",
        null,
        null
      ]
    ],
    [
      "00c310f4",
      "PARAM",
      [
        "storage",
        "002af747",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c30e0c",
      "PARAM",
      [
        "storage",
        "002b2832",
        null,
        null
      ]
    ],
    [
      "00c30f6c",
      "PARAM",
      [
        "storage",
        "002ac4c1",
        null,
        null
      ]
    ],
    [
      "00c310f4",
      "PARAM",
      [
        "storage",
        "002af6eb",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c30d78 ["INT_ADD", "register:40f0:8", ["const:c30d78:8", "const:4:8"]]
- 00c30d78 ["CALL", null, ["callee:00c5e730:8"]]
+ 00c30e14 ["INT_ADD", "register:40f0:8", ["const:c30e14:8", "const:4:8"]]
+ 00c30e14 ["CALL", null, ["callee:00c5e730:8"]]
- 00c30ed4 ["INT_ADD", "register:40f0:8", ["const:c30ed4:8", "const:4:8"]]
- 00c30ed4 ["CALL", null, ["callee:00c5e730:8"]]
+ 00c30f70 ["INT_ADD", "register:40f0:8", ["const:c30f70:8", "const:4:8"]]
+ 00c30f70 ["CALL", null, ["callee:00c5e730:8"]]
- 00c311bc ["INT_ADD", "register:40f0:8", ["const:c311bc:8", "const:4:8"]]
- 00c311bc ["CALL", null, ["callee:00c5e730:8"]]
+ 00c31258 ["INT_ADD", "register:40f0:8", ["const:c31258:8", "const:4:8"]]
+ 00c31258 ["CALL", null, ["callee:00c5e730:8"]]
~~~


<a id="compare-bb0e7bed7179a437368ccb5dc2c07c44"></a>

### [`00c31760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c31/00c31760.md) → [`00c317fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c31/00c317fc.md) _ZNSt6__ndk118__time_get_storageIcEC1EPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md) [`00c5be40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be40.md) [`00c5d1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1d0.md) [`00c5e9c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e9c0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5ea90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea90.md)

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
    "old": {
      "definition_site": "00c317a8",
      "incomplete_value": false,
      "site": "00c317ac",
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
            "const:ca0:8"
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
    "old": {
      "definition_site": "00c317c8",
      "incomplete_value": true,
      "site": "00c317cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00c317e0",
      "incomplete_value": true,
      "site": "00c317e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c31848",
      "DATA",
      [
        "storage",
        "00c95ca0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3185c",
      "READ",
      [
        "storage",
        "00c9bdd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c31868",
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
      "00c31848",
      "DATA",
      [
        "storage",
        "00c95d70",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3185c",
      "READ",
      [
        "storage",
        "00c9bea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c31868",
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
- 00c31780 ["INT_ADD", "register:40f0:8", ["const:c31780:8", "const:4:8"]]
- 00c31780 ["CALL", null, ["callee:00c5ed70:8"]]
+ 00c3181c ["INT_ADD", "register:40f0:8", ["const:c3181c:8", "const:4:8"]]
+ 00c3181c ["CALL", null, ["callee:00c5ed70:8"]]
- 00c31790 ["INT_ADD", "register:40f0:8", ["const:c31790:8", "const:4:8"]]
- 00c31790 ["CALL", null, ["callee:00c58160:8"]]
+ 00c3182c ["INT_ADD", "register:40f0:8", ["const:c3182c:8", "const:4:8"]]
+ 00c3182c ["CALL", null, ["callee:00c58160:8"]]
- 00c317a0 ["INT_ADD", "register:40f0:8", ["const:c317a0:8", "const:4:8"]]
- 00c317a0 ["CALL", null, ["callee:00c5ea90:8"]]
+ 00c3183c ["INT_ADD", "register:40f0:8", ["const:c3183c:8", "const:4:8"]]
+ 00c3183c ["CALL", null, ["callee:00c5ea90:8"]]
~~~


<a id="compare-6b64f25232d7f41515c8d0bda66dcf9a"></a>

### [`00c31a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c31/00c31a40.md) → [`00c31adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c31/00c31adc.md) _ZNSt6__ndk112ctype_bynameIcED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5e9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e9e0.md) [`00c5ed10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ed10.md) · 呼出先 3件 [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md) [`00c5be40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be40.md) [`00c5d1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1d0.md)
- 新版 呼出元 2件 [`00c5eab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eab0.md) [`00c5ede0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ede0.md) · 呼出先 3件 [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md)

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
    "old": {
      "definition_site": "00c31a60",
      "incomplete_value": true,
      "site": "00c31a64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00c31a78",
      "incomplete_value": true,
      "site": "00c31a7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c31af4",
      "READ",
      [
        "storage",
        "00c9bdd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c31b00",
      "DATA",
      [
        "storage",
        "00c937d0",
        null,
        "pointer"
      ]
    ],
    [
      "00c31b0c",
      "READ",
      [
        "storage",
        "00c9bdc8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c31af4",
      "READ",
      [
        "storage",
        "00c9bea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c31b00",
      "DATA",
      [
        "storage",
        "00c938a0",
        null,
        "pointer"
      ]
    ],
    [
      "00c31b0c",
      "READ",
      [
        "storage",
        "00c9be98",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c31a58 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
- 00c31a58 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c31af4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 00c31af4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c31a68 ["INT_ADD", "register:40f0:8", ["const:c31a68:8", "const:4:8"]]
- 00c31a68 ["CALL", null, ["callee:00c5d2a0:8"]]
+ 00c31b04 ["INT_ADD", "register:40f0:8", ["const:c31b04:8", "const:4:8"]]
+ 00c31b04 ["CALL", null, ["callee:00c5d2a0:8"]]
- 00c31a70 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dc8:8"]]
- 00c31a70 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c31b0c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e98:8"]]
+ 00c31b0c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5625ab0432ef76f43c4ae1d0f71a3413"></a>

### [`00c31aa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c31/00c31aa8.md) → [`00c31b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c31/00c31b44.md) _ZNSt6__ndk118__time_get_storageIcEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e890.md) · 呼出先 7件 [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md) [`00c5be40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be40.md) [`00c5d1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1d0.md) [`00c5e9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e9d0.md)
- 新版 呼出元 1件 [`00c5e960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e960.md) · 呼出先 7件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5eaa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eaa0.md)

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
    "old": {
      "definition_site": "00c31af0",
      "incomplete_value": false,
      "site": "00c31af4",
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
            "const:ca0:8"
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
    "old": {
      "definition_site": "00c31b10",
      "incomplete_value": true,
      "site": "00c31b14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00c31b28",
      "incomplete_value": true,
      "site": "00c31b2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c31b90",
      "DATA",
      [
        "storage",
        "00c95ca0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c31ba4",
      "READ",
      [
        "storage",
        "00c9bdd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c31bb0",
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
      "00c31b90",
      "DATA",
      [
        "storage",
        "00c95d70",
        null,
        "undefined *"
      ]
    ],
    [
      "00c31ba4",
      "READ",
      [
        "storage",
        "00c9bea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c31bb0",
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
- 00c31ac8 ["INT_ADD", "register:40f0:8", ["const:c31ac8:8", "const:4:8"]]
- 00c31ac8 ["CALL", null, ["callee:00c5ed80:8"]]
+ 00c31b64 ["INT_ADD", "register:40f0:8", ["const:c31b64:8", "const:4:8"]]
+ 00c31b64 ["CALL", null, ["callee:00c5ed80:8"]]
- 00c31ad8 ["INT_ADD", "register:40f0:8", ["const:c31ad8:8", "const:4:8"]]
- 00c31ad8 ["CALL", null, ["callee:00c58160:8"]]
+ 00c31b74 ["INT_ADD", "register:40f0:8", ["const:c31b74:8", "const:4:8"]]
+ 00c31b74 ["CALL", null, ["callee:00c58160:8"]]
- 00c31ae8 ["INT_ADD", "register:40f0:8", ["const:c31ae8:8", "const:4:8"]]
- 00c31ae8 ["CALL", null, ["callee:00c5eaa0:8"]]
+ 00c31b84 ["INT_ADD", "register:40f0:8", ["const:c31b84:8", "const:4:8"]]
+ 00c31b84 ["CALL", null, ["callee:00c5eaa0:8"]]
~~~


<a id="compare-4c1e951dac2a4e0bcd765b9a152a4340"></a>

### [`00c31d88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c31/00c31d88.md) → [`00c31e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c31/00c31e24.md) _ZNSt6__ndk118__time_get_storageIwEC1EPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md) [`00c5d1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1d0.md) [`00c5e9f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e9f0.md) [`00c5ea00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ea00.md) [`00c5eca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5eca0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5eac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eac0.md) [`00c5ead0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ead0.md) [`00c5ed70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed70.md)

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
    "old": {
      "definition_site": "00c31dd0",
      "incomplete_value": false,
      "site": "00c31dd4",
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
            "const:d20:8"
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
    "old": {
      "definition_site": "00c31df0",
      "incomplete_value": true,
      "site": "00c31df4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c31e70",
      "DATA",
      [
        "storage",
        "00c95d20",
        null,
        "undefined *"
      ]
    ],
    [
      "00c31e84",
      "READ",
      [
        "storage",
        "00c9bdd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c31e90",
      "DATA",
      [
        "storage",
        "00c93838",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c31e70",
      "DATA",
      [
        "storage",
        "00c95df0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c31e84",
      "READ",
      [
        "storage",
        "00c9bea8",
        null,
        "pointer"
      ]
    ],
    [
      "00c31e90",
      "DATA",
      [
        "storage",
        "00c93908",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c31da8 ["INT_ADD", "register:40f0:8", ["const:c31da8:8", "const:4:8"]]
- 00c31da8 ["CALL", null, ["callee:00c5ed70:8"]]
+ 00c31e44 ["INT_ADD", "register:40f0:8", ["const:c31e44:8", "const:4:8"]]
+ 00c31e44 ["CALL", null, ["callee:00c5ed70:8"]]
- 00c31db8 ["INT_ADD", "register:40f0:8", ["const:c31db8:8", "const:4:8"]]
- 00c31db8 ["CALL", null, ["callee:00c58160:8"]]
+ 00c31e54 ["INT_ADD", "register:40f0:8", ["const:c31e54:8", "const:4:8"]]
+ 00c31e54 ["CALL", null, ["callee:00c58160:8"]]
- 00c31dc8 ["INT_ADD", "register:40f0:8", ["const:c31dc8:8", "const:4:8"]]
- 00c31dc8 ["CALL", null, ["callee:00c5eac0:8"]]
+ 00c31e64 ["INT_ADD", "register:40f0:8", ["const:c31e64:8", "const:4:8"]]
+ 00c31e64 ["CALL", null, ["callee:00c5eac0:8"]]
~~~


<a id="compare-af8946ceee0f796e20f99f501602a6e4"></a>

### [`00c32088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c32/00c32088.md) → [`00c32124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c32/00c32124.md) _ZNSt6__ndk118__time_get_storageIwEC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e8a0.md) · 呼出先 6件 [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md) [`00c5d1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1d0.md) [`00c5ea00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ea00.md) [`00c5ea10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ea10.md) [`00c5ecb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ecb0.md)
- 新版 呼出元 1件 [`00c5e970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e970.md) · 呼出先 6件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5ead0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ead0.md) [`00c5eae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eae0.md) [`00c5ed80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed80.md)

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
    "old": {
      "definition_site": "00c320d0",
      "incomplete_value": false,
      "site": "00c320d4",
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
            "const:d20:8"
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
    "old": {
      "definition_site": "00c320f0",
      "incomplete_value": true,
      "site": "00c320f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c32170",
      "DATA",
      [
        "storage",
        "00c95d20",
        null,
        "undefined *"
      ]
    ],
    [
      "00c32184",
      "READ",
      [
        "storage",
        "00c9bdd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c32190",
      "DATA",
      [
        "storage",
        "00c93838",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c32170",
      "DATA",
      [
        "storage",
        "00c95df0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c32184",
      "READ",
      [
        "storage",
        "00c9bea8",
        null,
        "pointer"
      ]
    ],
    [
      "00c32190",
      "DATA",
      [
        "storage",
        "00c93908",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c320a8 ["INT_ADD", "register:40f0:8", ["const:c320a8:8", "const:4:8"]]
- 00c320a8 ["CALL", null, ["callee:00c5ed80:8"]]
+ 00c32144 ["INT_ADD", "register:40f0:8", ["const:c32144:8", "const:4:8"]]
+ 00c32144 ["CALL", null, ["callee:00c5ed80:8"]]
- 00c320b8 ["INT_ADD", "register:40f0:8", ["const:c320b8:8", "const:4:8"]]
- 00c320b8 ["CALL", null, ["callee:00c58160:8"]]
+ 00c32154 ["INT_ADD", "register:40f0:8", ["const:c32154:8", "const:4:8"]]
+ 00c32154 ["CALL", null, ["callee:00c58160:8"]]
- 00c320c8 ["INT_ADD", "register:40f0:8", ["const:c320c8:8", "const:4:8"]]
- 00c320c8 ["CALL", null, ["callee:00c5eae0:8"]]
+ 00c32164 ["INT_ADD", "register:40f0:8", ["const:c32164:8", "const:4:8"]]
+ 00c32164 ["CALL", null, ["callee:00c5eae0:8"]]
~~~


<a id="compare-6b9951582c77f159072bbd94b0580f6b"></a>

### [`00c3293c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c32/00c3293c.md) → [`00c329d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c32/00c329d8.md) _ZNSt6__ndk110__time_putC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e8b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e8b0.md) · 呼出先 5件 [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md) [`00c5dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dfb0.md)
- 新版 呼出元 1件 [`00c5e980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e980.md) · 呼出先 5件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.44% / 新版 97.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c32994",
      "incomplete_value": false,
      "site": "00c329a4",
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
            "const:804:8"
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
      "00c32a30",
      "PARAM",
      [
        "storage",
        "002b2804",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c32a30",
      "PARAM",
      [
        "storage",
        "002b2835",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c329a4 ["INT_ADD", "register:40f0:8", ["const:c329a4:8", "const:4:8"]]
- 00c329a4 ["CALL", null, ["callee:00c58180:8"]]
+ 00c32a40 ["INT_ADD", "register:40f0:8", ["const:c32a40:8", "const:4:8"]]
+ 00c32a40 ["CALL", null, ["callee:00c58180:8"]]
- 00c32970 ["INT_ADD", "register:40f0:8", ["const:c32970:8", "const:4:8"]]
- 00c32970 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c32a0c ["INT_ADD", "register:40f0:8", ["const:c32a0c:8", "const:4:8"]]
+ 00c32a0c ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c32994 ["COPY", "tmp:0:8", ["const:804:8"]]
- 00c32994 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c32994 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c32994 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c32a30 ["COPY", "tmp:0:8", ["const:835:8"]]
+ 00c32a30 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c32a30 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c32a30 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8cf206c17827508e2c91bb2d0778811b"></a>

### [`00c329d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c32/00c329d8.md) → [`00c32a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c32/00c32a74.md) _ZNSt6__ndk110__time_putD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ed50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ed50.md) · 呼出先 4件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c5d1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1d0.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 1件 [`00c5ee20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee20.md) · 呼出先 4件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 3件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c32a54",
      "incomplete_value": true,
      "site": "00c32a54",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c32a0c",
      "incomplete_value": true,
      "site": "00c32a10",
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
    "old": {
      "definition_site": "00c32a34",
      "incomplete_value": false,
      "site": "00c32a38",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c32a94",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c32aa4",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c32ad0",
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
      "00c32a94",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c32aa4",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c32ad0",
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
- 00c32a38 ["INT_ADD", "register:40f0:8", ["const:c32a38:8", "const:4:8"]]
- 00c32a38 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c32ad4 ["INT_ADD", "register:40f0:8", ["const:c32ad4:8", "const:4:8"]]
+ 00c32ad4 ["CALL", null, ["callee:00c57f20:8"]]
- 00c32a50 ["INT_ADD", "register:40f0:8", ["const:c32a50:8", "const:4:8"]]
- 00c32a50 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c32aec ["INT_ADD", "register:40f0:8", ["const:c32aec:8", "const:4:8"]]
+ 00c32aec ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c32a54 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:c98:8"]]
- 00c32a54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c32af0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d98:8"]]
+ 00c32af0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-2563ce7fd27af3cea90129117868c0e5"></a>

### [`00c32a84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c32/00c32a84.md) → [`00c32b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c32/00c32b20.md) _ZNSt6__ndk117moneypunct_bynameIcLb0EE4initEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e8d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e8d0.md) · 呼出先 15件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440c3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440c3c.md) [`00bf1f98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf1/00bf1f98.md) [`00c25934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25934.md)
- 新版 呼出元 1件 [`00c5e9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9a0.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00bf2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.53% / 新版 99.53%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c32dac",
      "incomplete_value": false,
      "site": "00c32dbc",
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
            "const:7f9:8"
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
      "00c32e48",
      "PARAM",
      [
        "storage",
        "002b17f9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c32e48",
      "PARAM",
      [
        "storage",
        "002b179d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c32dbc ["INT_ADD", "register:40f0:8", ["const:c32dbc:8", "const:4:8"]]
- 00c32dbc ["CALL", null, ["callee:00c259d0:8"]]
+ 00c32e58 ["INT_ADD", "register:40f0:8", ["const:c32e58:8", "const:4:8"]]
+ 00c32e58 ["CALL", null, ["callee:00c259d0:8"]]
- 00c32ab0 ["INT_ADD", "register:40f0:8", ["const:c32ab0:8", "const:4:8"]]
- 00c32ab0 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c32b4c ["INT_ADD", "register:40f0:8", ["const:c32b4c:8", "const:4:8"]]
+ 00c32b4c ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c32ac0 ["INT_ADD", "register:40f0:8", ["const:c32ac0:8", "const:4:8"]]
- 00c32ac0 ["CALL", null, ["callee:00c5e640:8"]]
+ 00c32b5c ["INT_ADD", "register:40f0:8", ["const:c32b5c:8", "const:4:8"]]
+ 00c32b5c ["CALL", null, ["callee:00c5e640:8"]]
~~~


<a id="compare-6a0c0fac7db95f68cce0a39907f0562a"></a>

### [`00c33780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c33/00c33780.md) → [`00c3381c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c33/00c3381c.md) _ZNSt6__ndk117moneypunct_bynameIwLb0EE4initEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e8f0.md) · 呼出先 17件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`006d76e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76e4.md) [`00bf1f98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf1/00bf1f98.md) [`00c25934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25934.md) [`00c2c598`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c598.md)
- 新版 呼出元 1件 [`00c5e9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9c0.md) · 呼出先 17件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`006d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d773c.md) [`00bf2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c2c634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c634.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.35% / 新版 99.35%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c33e38",
      "incomplete_value": false,
      "site": "00c33e3c",
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
    "ordinal": 30,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c33e50",
      "incomplete_value": true,
      "site": "00c33e60",
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
            "const:7f9:8"
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
    "old": {
      "definition_site": "00c33e7c",
      "incomplete_value": false,
      "site": "00c33e80",
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
      "00c33ed4",
      "PARAM",
      [
        "storage",
        "0029fde5",
        null,
        "string"
      ]
    ],
    [
      "00c33eec",
      "PARAM",
      [
        "storage",
        "002b17f9",
        null,
        "string"
      ]
    ],
    [
      "00c33f18",
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
      "00c33ed4",
      "PARAM",
      [
        "storage",
        "0029fd98",
        null,
        "string"
      ]
    ],
    [
      "00c33eec",
      "PARAM",
      [
        "storage",
        "002b179d",
        null,
        "string"
      ]
    ],
    [
      "00c33f18",
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
- 00c33e3c ["INT_ADD", "register:40f0:8", ["const:c33e3c:8", "const:4:8"]]
- 00c33e3c ["CALL", null, ["callee:00c5e080:8"]]
+ 00c33ed8 ["INT_ADD", "register:40f0:8", ["const:c33ed8:8", "const:4:8"]]
+ 00c33ed8 ["CALL", null, ["callee:00c5e080:8"]]
- 00c33e60 ["INT_ADD", "register:40f0:8", ["const:c33e60:8", "const:4:8"]]
- 00c33e60 ["CALL", null, ["callee:00c259d0:8"]]
+ 00c33efc ["INT_ADD", "register:40f0:8", ["const:c33efc:8", "const:4:8"]]
+ 00c33efc ["CALL", null, ["callee:00c259d0:8"]]
- 00c33e80 ["INT_ADD", "register:40f0:8", ["const:c33e80:8", "const:4:8"]]
- 00c33e80 ["CALL", null, ["callee:00c5e080:8"]]
+ 00c33f1c ["INT_ADD", "register:40f0:8", ["const:c33f1c:8", "const:4:8"]]
+ 00c33f1c ["CALL", null, ["callee:00c5e080:8"]]
~~~


<a id="compare-1c8bace0a5a1c2dad25b6e1ddcf8455f"></a>

### [`00c3447c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c34/00c3447c.md) → [`00c34518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c34/00c34518.md) _ZNSt6__ndk117moneypunct_bynameIwLb1EE4initEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e900.md) · 呼出先 17件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`006d76e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76e4.md) [`00bf1f98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf1/00bf1f98.md) [`00c25934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c25/00c25934.md) [`00c2c598`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2c598.md)
- 新版 呼出元 1件 [`00c5e9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9d0.md) · 呼出先 17件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`006d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d773c.md) [`00bf2034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf2/00bf2034.md) [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) [`00c2c634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c634.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.35% / 新版 99.35%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c34b34",
      "incomplete_value": false,
      "site": "00c34b38",
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
    "ordinal": 30,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c34b4c",
      "incomplete_value": false,
      "site": "00c34b5c",
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
            "const:7f9:8"
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
    "old": {
      "definition_site": "00c34b78",
      "incomplete_value": false,
      "site": "00c34b7c",
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
      "00c34bd0",
      "PARAM",
      [
        "storage",
        "0029fde5",
        null,
        "string"
      ]
    ],
    [
      "00c34be8",
      "PARAM",
      [
        "storage",
        "002b17f9",
        null,
        "string"
      ]
    ],
    [
      "00c34c14",
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
      "00c34bd0",
      "PARAM",
      [
        "storage",
        "0029fd98",
        null,
        "string"
      ]
    ],
    [
      "00c34be8",
      "PARAM",
      [
        "storage",
        "002b179d",
        null,
        "string"
      ]
    ],
    [
      "00c34c14",
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
- 00c34b38 ["INT_ADD", "register:40f0:8", ["const:c34b38:8", "const:4:8"]]
- 00c34b38 ["CALL", null, ["callee:00c5e080:8"]]
+ 00c34bd4 ["INT_ADD", "register:40f0:8", ["const:c34bd4:8", "const:4:8"]]
+ 00c34bd4 ["CALL", null, ["callee:00c5e080:8"]]
- 00c34b5c ["INT_ADD", "register:40f0:8", ["const:c34b5c:8", "const:4:8"]]
- 00c34b5c ["CALL", null, ["callee:00c259d0:8"]]
+ 00c34bf8 ["INT_ADD", "register:40f0:8", ["const:c34bf8:8", "const:4:8"]]
+ 00c34bf8 ["CALL", null, ["callee:00c259d0:8"]]
- 00c34b7c ["INT_ADD", "register:40f0:8", ["const:c34b7c:8", "const:4:8"]]
- 00c34b7c ["CALL", null, ["callee:00c5e080:8"]]
+ 00c34c18 ["INT_ADD", "register:40f0:8", ["const:c34c18:8", "const:4:8"]]
+ 00c34c18 ["CALL", null, ["callee:00c5e080:8"]]
~~~


<a id="compare-d51074f6a52090d9ad8f936b3742708c"></a>

### [`00c34dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c34/00c34dbc.md) → [`00c34e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c34/00c34e58.md) _ZNSt6__ndk17codecvtIwc9mbstate_tED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5a880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a880.md) [`00c5eb10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5eb10.md) · 呼出先 5件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md) [`00c5d1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1d0.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 2件 [`00c5a950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a950.md) [`00c5ebe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ebe0.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 68.29% / 新版 68.29%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 3件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c34de4",
      "incomplete_value": true,
      "site": "00c34de8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00c34e4c",
      "incomplete_value": true,
      "site": "00c34e4c",
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
            "const:c98:8"
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
    "old": {
      "definition_site": "00c34e00",
      "incomplete_value": true,
      "site": "00c34e04",
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
      "00c34e78",
      "READ",
      [
        "storage",
        "00c9bde0",
        null,
        "pointer"
      ]
    ],
    [
      "00c34e84",
      "DATA",
      [
        "storage",
        "00c938c0",
        null,
        "pointer"
      ]
    ],
    [
      "00c34e90",
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
      "00c34e78",
      "READ",
      [
        "storage",
        "00c9beb0",
        null,
        "pointer"
      ]
    ],
    [
      "00c34e84",
      "DATA",
      [
        "storage",
        "00c93990",
        null,
        "pointer"
      ]
    ],
    [
      "00c34e90",
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
- 00c34e30 ["INT_ADD", "register:40f0:8", ["const:c34e30:8", "const:4:8"]]
- 00c34e30 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c34ecc ["INT_ADD", "register:40f0:8", ["const:c34ecc:8", "const:4:8"]]
+ 00c34ecc ["CALL", null, ["callee:00c57f20:8"]]
- 00c34e48 ["INT_ADD", "register:40f0:8", ["const:c34e48:8", "const:4:8"]]
- 00c34e48 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c34ee4 ["INT_ADD", "register:40f0:8", ["const:c34ee4:8", "const:4:8"]]
+ 00c34ee4 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c34e4c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:c98:8"]]
- 00c34e4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c34ee8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d98:8"]]
+ 00c34ee8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-3a79dc738a5e98bada88889154152d43"></a>

### [`00c35440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35440.md) → [`00c354dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c354dc.md) FUN_00c354dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c354d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c354d4.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md)
- 新版 呼出元 1件 [`00c35570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35570.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c35460",
      "incomplete_value": true,
      "site": "00c35464",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c354f4",
      "READ",
      [
        "storage",
        "00c9bd98",
        null,
        "pointer"
      ]
    ],
    [
      "00c35500",
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
      "00c354f4",
      "READ",
      [
        "storage",
        "00c9be68",
        null,
        "pointer"
      ]
    ],
    [
      "00c35500",
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
- 00c35458 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
- 00c35458 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c354f4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e68:8"]]
+ 00c354f4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c35488 ["INT_ADD", "register:40f0:8", ["const:c35488:8", "const:4:8"]]
- 00c35488 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c35524 ["INT_ADD", "register:40f0:8", ["const:c35524:8", "const:4:8"]]
+ 00c35524 ["CALL", null, ["callee:00c57f80:8"]]
- 00c354a4 ["INT_ADD", "register:40f0:8", ["const:c354a4:8", "const:4:8"]]
- 00c354a4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c35540 ["INT_ADD", "register:40f0:8", ["const:c35540:8", "const:4:8"]]
+ 00c35540 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-e4aeef311ba5cab757a7a3d16c1d748a"></a>

### [`00c35500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35500.md) → [`00c3559c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c3559c.md) FUN_00c3559c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c35594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35594.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md)
- 新版 呼出元 1件 [`00c35630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35630.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c35520",
      "incomplete_value": true,
      "site": "00c35524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c355b4",
      "READ",
      [
        "storage",
        "00c9bda0",
        null,
        "pointer"
      ]
    ],
    [
      "00c355c0",
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
      "00c355b4",
      "READ",
      [
        "storage",
        "00c9be70",
        null,
        "pointer"
      ]
    ],
    [
      "00c355c0",
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
- 00c35518 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:da0:8"]]
- 00c35518 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c355b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e70:8"]]
+ 00c355b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c35548 ["INT_ADD", "register:40f0:8", ["const:c35548:8", "const:4:8"]]
- 00c35548 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c355e4 ["INT_ADD", "register:40f0:8", ["const:c355e4:8", "const:4:8"]]
+ 00c355e4 ["CALL", null, ["callee:00c57f80:8"]]
- 00c35564 ["INT_ADD", "register:40f0:8", ["const:c35564:8", "const:4:8"]]
- 00c35564 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c35600 ["INT_ADD", "register:40f0:8", ["const:c35600:8", "const:4:8"]]
+ 00c35600 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f83308dcb28226af2f57ce4be549b7a7"></a>

### [`00c355c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c355c0.md) → [`00c3565c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c3565c.md) FUN_00c3565c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c35654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35654.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md)
- 新版 呼出元 1件 [`00c356f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c356f0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c355e0",
      "incomplete_value": true,
      "site": "00c355e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c35674",
      "READ",
      [
        "storage",
        "00c9bda8",
        null,
        "pointer"
      ]
    ],
    [
      "00c35680",
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
      "00c35674",
      "READ",
      [
        "storage",
        "00c9be78",
        null,
        "pointer"
      ]
    ],
    [
      "00c35680",
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
- 00c355d8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:da8:8"]]
- 00c355d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c35674 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e78:8"]]
+ 00c35674 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c35608 ["INT_ADD", "register:40f0:8", ["const:c35608:8", "const:4:8"]]
- 00c35608 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c356a4 ["INT_ADD", "register:40f0:8", ["const:c356a4:8", "const:4:8"]]
+ 00c356a4 ["CALL", null, ["callee:00c57f80:8"]]
- 00c35624 ["INT_ADD", "register:40f0:8", ["const:c35624:8", "const:4:8"]]
- 00c35624 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c356c0 ["INT_ADD", "register:40f0:8", ["const:c356c0:8", "const:4:8"]]
+ 00c356c0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-061d8630bcdbab291efb85a271acdbe9"></a>

### [`00c358d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c358d0.md) → [`00c3596c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c3596c.md) FUN_00c3596c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00c248d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c24/00c248d4.md) [`00c358e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c358e8.md) [`00c35a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35a44.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 3件 [`00c24970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24970.md) [`00c35984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35984.md) [`00c35ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35ae0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c358e0",
      "incomplete_value": false,
      "site": "00c358e4",
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
      "00c3597c",
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
      "00c3597c",
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
- 00c358e4 ["INT_ADD", "register:40f0:8", ["const:c358e4:8", "const:4:8"]]
- 00c358e4 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00c35980 ["INT_ADD", "register:40f0:8", ["const:c35980:8", "const:4:8"]]
+ 00c35980 ["CALL", null, ["callee:0043b7b8:8"]]
- 00c358e0 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00c358e0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c358e0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c358e0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c3597c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00c3597c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c3597c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c3597c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-0f0d2f478cf4900e580131ff6676df74"></a>

### [`00c35ba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35ba0.md) → [`00c35c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c35/00c35c3c.md) FUN_00c35c3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c2cadc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c2c/00c2cadc.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c2cb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2cb78.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 98.91% / 新版 98.91%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c35c58",
      "incomplete_value": true,
      "site": "00c35c5c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c35bbc",
      "incomplete_value": true,
      "site": "00c35bc0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f0:8"
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
      "definition_site": "00c35c70",
      "incomplete_value": true,
      "site": "00c35c74",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c35bd4",
      "incomplete_value": true,
      "site": "00c35bd8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d8:8"
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
      "definition_site": "00c35c88",
      "incomplete_value": true,
      "site": "00c35c8c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c35bec",
      "incomplete_value": true,
      "site": "00c35bf0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c0:8"
              ]
            ]
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
      "00c35c4c",
      "READ",
      [
        "storage",
        "011280e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c35c58",
      "READ",
      [
        "storage",
        "011280f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c35c64",
      "READ",
      [
        "storage",
        "011280c8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c35c4c",
      "READ",
      [
        "storage",
        "011281e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c35c58",
      "READ",
      [
        "storage",
        "011281f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00c35c64",
      "READ",
      [
        "storage",
        "011281c8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c35bc0 ["INT_ADD", "register:40f0:8", ["const:c35bc0:8", "const:4:8"]]
- 00c35bc0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c35c5c ["INT_ADD", "register:40f0:8", ["const:c35c5c:8", "const:4:8"]]
+ 00c35c5c ["CALL", null, ["callee:00c57f80:8"]]
- 00c35bd8 ["INT_ADD", "register:40f0:8", ["const:c35bd8:8", "const:4:8"]]
- 00c35bd8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c35c74 ["INT_ADD", "register:40f0:8", ["const:c35c74:8", "const:4:8"]]
+ 00c35c74 ["CALL", null, ["callee:00c57f80:8"]]
- 00c35bf0 ["INT_ADD", "register:40f0:8", ["const:c35bf0:8", "const:4:8"]]
- 00c35bf0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00c35c8c ["INT_ADD", "register:40f0:8", ["const:c35c8c:8", "const:4:8"]]
+ 00c35c8c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-15d7c26b9ed9ed08dadff385f3aa9b79"></a>

### [`00c35fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35fb8.md) → [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) FUN_00c36054

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 96件 [`00c0788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c0788c.md) [`00c0a534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0a534.md) [`00c0ad64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0ad64.md) [`00c0d9a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0d/00c0d9a8.md) [`00c0e08c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0e/00c0e08c.md) · 呼出先 1件 [`00c53ca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53ca0.md)
- 新版 呼出元 96件 [`00c07928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07928.md) [`00c0a5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a5d0.md) [`00c0ae00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0ae00.md) [`00c0da44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0da44.md) [`00c0e128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0e128.md) · 呼出先 1件 [`00c53d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c35fdc",
      "incomplete_value": true,
      "site": "00c35fe0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:e08:8"
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
      "00c36078",
      "READ",
      [
        "storage",
        "00c9be08",
        null,
        "pointer"
      ]
    ],
    [
      "00c36078",
      "PARAM",
      [
        "storage",
        "01127e00",
        "std::__ndk1::locale::id::__next_id",
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00c36078",
      "READ",
      [
        "storage",
        "00c9bed8",
        null,
        "pointer"
      ]
    ],
    [
      "00c36078",
      "PARAM",
      [
        "storage",
        "01127f00",
        "std::__ndk1::locale::id::__next_id",
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c35fe0 ["INT_ADD", "register:40f0:8", ["const:c35fe0:8", "const:4:8"]]
- 00c35fe0 ["CALL", null, ["callee:00c53d40:8"]]
+ 00c3607c ["INT_ADD", "register:40f0:8", ["const:c3607c:8", "const:4:8"]]
+ 00c3607c ["CALL", null, ["callee:00c53d40:8"]]
- 00c35fdc ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:e08:8"]]
- 00c35fdc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c36078 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:ed8:8"]]
+ 00c36078 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-73796bd6a352e527021fb92184bf3c58"></a>

### [`00c35ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c35/00c35ffc.md) → [`00c36098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36098.md) FUN_00c36098

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md) [`00c5be40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be40.md) [`00c5d1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md)

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
    "old": {
      "definition_site": "00c3601c",
      "incomplete_value": true,
      "site": "00c36020",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "old": {
      "definition_site": "00c36034",
      "incomplete_value": true,
      "site": "00c36038",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c360b0",
      "READ",
      [
        "storage",
        "00c9bdd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c360bc",
      "DATA",
      [
        "storage",
        "00c937d0",
        null,
        "pointer"
      ]
    ],
    [
      "00c360c8",
      "READ",
      [
        "storage",
        "00c9bdc8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c360b0",
      "READ",
      [
        "storage",
        "00c9bea0",
        null,
        "pointer"
      ]
    ],
    [
      "00c360bc",
      "DATA",
      [
        "storage",
        "00c938a0",
        null,
        "pointer"
      ]
    ],
    [
      "00c360c8",
      "READ",
      [
        "storage",
        "00c9be98",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c36014 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
- 00c36014 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c360b0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea0:8"]]
+ 00c360b0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c36024 ["INT_ADD", "register:40f0:8", ["const:c36024:8", "const:4:8"]]
- 00c36024 ["CALL", null, ["callee:00c5d2a0:8"]]
+ 00c360c0 ["INT_ADD", "register:40f0:8", ["const:c360c0:8", "const:4:8"]]
+ 00c360c0 ["CALL", null, ["callee:00c5d2a0:8"]]
- 00c3602c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dc8:8"]]
- 00c3602c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c360c8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e98:8"]]
+ 00c360c8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c675aa10c7161681c8f29b13c8eb46de"></a>

### [`00c3606c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c3606c.md) → [`00c36108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36108.md) FUN_00c36108

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1d0.md) [`00c5ea00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ea00.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md) [`00c5ead0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ead0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00c3608c",
      "incomplete_value": true,
      "site": "00c36090",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c36120",
      "READ",
      [
        "storage",
        "00c9bdd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c3612c",
      "DATA",
      [
        "storage",
        "00c93838",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c36120",
      "READ",
      [
        "storage",
        "00c9bea8",
        null,
        "pointer"
      ]
    ],
    [
      "00c3612c",
      "DATA",
      [
        "storage",
        "00c93908",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c36084 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd8:8"]]
- 00c36084 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c36120 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ea8:8"]]
+ 00c36120 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c36094 ["INT_ADD", "register:40f0:8", ["const:c36094:8", "const:4:8"]]
- 00c36094 ["CALL", null, ["callee:00c5d2a0:8"]]
+ 00c36130 ["INT_ADD", "register:40f0:8", ["const:c36130:8", "const:4:8"]]
+ 00c36130 ["CALL", null, ["callee:00c5d2a0:8"]]
- 00c3609c ["INT_ADD", "register:40f0:8", ["const:c3609c:8", "const:4:8"]]
- 00c3609c ["CALL", null, ["callee:00c5ead0:8"]]
+ 00c36138 ["INT_ADD", "register:40f0:8", ["const:c36138:8", "const:4:8"]]
+ 00c36138 ["CALL", null, ["callee:00c5ead0:8"]]
~~~


<a id="compare-0147cdcb53cd54159e20a07a4d31c196"></a>

### [`00c3616c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c3616c.md) → [`00c36208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36208.md) FUN_00c36208

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c07f8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c07/00c07f8c.md) [`00c0b46c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0b/00c0b46c.md) · 呼出先 5件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5d150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d150.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 2件 [`00c08028`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08028.md) [`00c0b508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b508.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d220.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 86.76% / 新版 86.76%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c36268",
      "incomplete_value": true,
      "site": "00c36268",
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
    "old": {
      "definition_site": "00c361c4",
      "incomplete_value": true,
      "site": "00c361d4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c36248",
      "incomplete_value": false,
      "site": "00c3624c",
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
      "00c36258",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36260",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c362e4",
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
      "00c36258",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36260",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c362e4",
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
- 00c361b0 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00c361b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c361b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c361b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3624c ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00c3624c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3624c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3624c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c361d4 ["INT_ADD", "register:40f0:8", ["const:c361d4:8", "const:4:8"]]
- 00c361d4 ["CALL", null, ["callee:00c5d220:8"]]
+ 00c36270 ["INT_ADD", "register:40f0:8", ["const:c36270:8", "const:4:8"]]
+ 00c36270 ["CALL", null, ["callee:00c5d220:8"]]
- 00c3624c ["INT_ADD", "register:40f0:8", ["const:c3624c:8", "const:4:8"]]
- 00c3624c ["CALL", null, ["callee:00c57f20:8"]]
+ 00c362e8 ["INT_ADD", "register:40f0:8", ["const:c362e8:8", "const:4:8"]]
+ 00c362e8 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-147d9b7d1b27becd767b67b275c89e11"></a>

### [`00c36294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36294.md) → [`00c36330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36330.md) FUN_00c36330

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c083c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c08/00c083c8.md) [`00c0b89c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0b/00c0b89c.md) · 呼出先 5件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5d150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d150.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 2件 [`00c08464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08464.md) [`00c0b938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b938.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d220.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c36390",
      "incomplete_value": true,
      "site": "00c36390",
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
    "old": {
      "definition_site": "00c362ec",
      "incomplete_value": true,
      "site": "00c362fc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c36370",
      "incomplete_value": false,
      "site": "00c36374",
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
      "00c36380",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36388",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c3640c",
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
      "00c36380",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36388",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c3640c",
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
- 00c362d8 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00c362d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c362d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c362d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c36374 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00c36374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c36374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c36374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c362fc ["INT_ADD", "register:40f0:8", ["const:c362fc:8", "const:4:8"]]
- 00c362fc ["CALL", null, ["callee:00c5d220:8"]]
+ 00c36398 ["INT_ADD", "register:40f0:8", ["const:c36398:8", "const:4:8"]]
+ 00c36398 ["CALL", null, ["callee:00c5d220:8"]]
- 00c36374 ["INT_ADD", "register:40f0:8", ["const:c36374:8", "const:4:8"]]
- 00c36374 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c36410 ["INT_ADD", "register:40f0:8", ["const:c36410:8", "const:4:8"]]
+ 00c36410 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-090e04a8b54f06591d20bcbf34c48547"></a>

### [`00c363bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c363bc.md) → [`00c36458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36458.md) FUN_00c36458

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c08804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c08/00c08804.md) [`00c0bccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0b/00c0bccc.md) · 呼出先 5件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5d160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d160.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 2件 [`00c088a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c088a0.md) [`00c0bd68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0bd68.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d230.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c364e8",
      "incomplete_value": true,
      "site": "00c364e8",
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
    "old": {
      "definition_site": "00c36430",
      "incomplete_value": true,
      "site": "00c36440",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c364c8",
      "incomplete_value": false,
      "site": "00c364cc",
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
      "00c364c4",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c364cc",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c36564",
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
      "00c364c4",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c364cc",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c36564",
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
- 00c36430 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:c98:8"]]
- 00c36430 ["LOAD", "register:4018:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c364cc ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:d98:8"]]
+ 00c364cc ["LOAD", "register:4018:8", ["const:1b1:8", "tmp:0:8"]]
- 00c36440 ["INT_ADD", "register:40f0:8", ["const:c36440:8", "const:4:8"]]
- 00c36440 ["CALL", null, ["callee:00c5d230:8"]]
+ 00c364dc ["INT_ADD", "register:40f0:8", ["const:c364dc:8", "const:4:8"]]
+ 00c364dc ["CALL", null, ["callee:00c5d230:8"]]
- 00c364cc ["INT_ADD", "register:40f0:8", ["const:c364cc:8", "const:4:8"]]
- 00c364cc ["CALL", null, ["callee:00c57f20:8"]]
+ 00c36568 ["INT_ADD", "register:40f0:8", ["const:c36568:8", "const:4:8"]]
+ 00c36568 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-2bdb8326cc49a6e0bb888500d527822e"></a>

### [`00c36514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36514.md) → [`00c365b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c365b0.md) FUN_00c365b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c08c40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c08/00c08c40.md) [`00c0c0fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0c/00c0c0fc.md) · 呼出先 5件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5d160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d160.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 2件 [`00c08cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c08/00c08cdc.md) [`00c0c198`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c198.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d230.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 89.87% / 新版 89.87%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c3663c",
      "incomplete_value": true,
      "site": "00c3663c",
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
    "old": {
      "definition_site": "00c36588",
      "incomplete_value": true,
      "site": "00c36598",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c3661c",
      "incomplete_value": false,
      "site": "00c36620",
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
      "00c3661c",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36624",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c366b8",
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
      "00c3661c",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36624",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c366b8",
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
- 00c36598 ["INT_ADD", "register:40f0:8", ["const:c36598:8", "const:4:8"]]
- 00c36598 ["CALL", null, ["callee:00c5d230:8"]]
+ 00c36634 ["INT_ADD", "register:40f0:8", ["const:c36634:8", "const:4:8"]]
+ 00c36634 ["CALL", null, ["callee:00c5d230:8"]]
- 00c36620 ["INT_ADD", "register:40f0:8", ["const:c36620:8", "const:4:8"]]
- 00c36620 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c366bc ["INT_ADD", "register:40f0:8", ["const:c366bc:8", "const:4:8"]]
+ 00c366bc ["CALL", null, ["callee:00c57f20:8"]]
- 00c36638 ["INT_ADD", "register:40f0:8", ["const:c36638:8", "const:4:8"]]
- 00c36638 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c366d4 ["INT_ADD", "register:40f0:8", ["const:c366d4:8", "const:4:8"]]
+ 00c366d4 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-ecd363f5cc17bdf91f42d33420381823"></a>

### [`00c36668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36668.md) → [`00c36704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36704.md) FUN_00c36704

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c0907c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c09/00c0907c.md) [`00c0c52c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0c/00c0c52c.md) · 呼出先 5件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5d160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d160.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 2件 [`00c09118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09118.md) [`00c0c5c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c5c8.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d230.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c36784",
      "incomplete_value": true,
      "site": "00c36784",
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
    "old": {
      "definition_site": "00c366dc",
      "incomplete_value": true,
      "site": "00c366ec",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c36764",
      "incomplete_value": false,
      "site": "00c36768",
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
      "00c36770",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36778",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c36800",
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
      "00c36770",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36778",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c36800",
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
- 00c366ec ["INT_ADD", "register:40f0:8", ["const:c366ec:8", "const:4:8"]]
- 00c366ec ["CALL", null, ["callee:00c5d230:8"]]
+ 00c36788 ["INT_ADD", "register:40f0:8", ["const:c36788:8", "const:4:8"]]
+ 00c36788 ["CALL", null, ["callee:00c5d230:8"]]
- 00c36768 ["INT_ADD", "register:40f0:8", ["const:c36768:8", "const:4:8"]]
- 00c36768 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c36804 ["INT_ADD", "register:40f0:8", ["const:c36804:8", "const:4:8"]]
+ 00c36804 ["CALL", null, ["callee:00c57f20:8"]]
- 00c36780 ["INT_ADD", "register:40f0:8", ["const:c36780:8", "const:4:8"]]
- 00c36780 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c3681c ["INT_ADD", "register:40f0:8", ["const:c3681c:8", "const:4:8"]]
+ 00c3681c ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-7a2f52d9cfdf11457ca58ff18d5af72d"></a>

### [`00c367b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c367b0.md) → [`00c3684c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c3684c.md) FUN_00c3684c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c094b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c09/00c094b8.md) [`00c0c95c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0c/00c0c95c.md) · 呼出先 5件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5d160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d160.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 2件 [`00c09554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09554.md) [`00c0c9f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0c9f8.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d230.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00c368cc",
      "incomplete_value": true,
      "site": "00c368cc",
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
    "old": {
      "definition_site": "00c36824",
      "incomplete_value": true,
      "site": "00c36834",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c98:8"
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
    "old": {
      "definition_site": "00c368ac",
      "incomplete_value": false,
      "site": "00c368b0",
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
      "00c368b8",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c368c0",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c36948",
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
      "00c368b8",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c368c0",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c36948",
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
- 00c36834 ["INT_ADD", "register:40f0:8", ["const:c36834:8", "const:4:8"]]
- 00c36834 ["CALL", null, ["callee:00c5d230:8"]]
+ 00c368d0 ["INT_ADD", "register:40f0:8", ["const:c368d0:8", "const:4:8"]]
+ 00c368d0 ["CALL", null, ["callee:00c5d230:8"]]
- 00c368b0 ["INT_ADD", "register:40f0:8", ["const:c368b0:8", "const:4:8"]]
- 00c368b0 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c3694c ["INT_ADD", "register:40f0:8", ["const:c3694c:8", "const:4:8"]]
+ 00c3694c ["CALL", null, ["callee:00c57f20:8"]]
- 00c368c8 ["INT_ADD", "register:40f0:8", ["const:c368c8:8", "const:4:8"]]
- 00c368c8 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c36964 ["INT_ADD", "register:40f0:8", ["const:c36964:8", "const:4:8"]]
+ 00c36964 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-e22fc32150f5658781cfc2210d170379"></a>

### [`00c368f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c368f8.md) → [`00c36994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36994.md) FUN_00c36994

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c098f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c09/00c098f4.md) [`00c0cd8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0c/00c0cd8c.md) · 呼出先 5件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c585b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585b0.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 2件 [`00c09990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09990.md) [`00c0ce28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0c/00c0ce28.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c58680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58680.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

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
    "old": {
      "definition_site": "00c369e4",
      "incomplete_value": false,
      "site": "00c369e4",
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
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c369c0",
      "incomplete_value": false,
      "site": "00c369c4",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c369d0",
      "incomplete_value": false,
      "site": "00c369dc",
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
      "00c369d8",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36a5c",
      "PARAM",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36a6c",
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
      "00c369d8",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36a5c",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36a6c",
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
- 00c369c4 ["INT_ADD", "register:40f0:8", ["const:c369c4:8", "const:4:8"]]
- 00c369c4 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c36a60 ["INT_ADD", "register:40f0:8", ["const:c36a60:8", "const:4:8"]]
+ 00c36a60 ["CALL", null, ["callee:00c57f20:8"]]
- 00c369dc ["INT_ADD", "register:40f0:8", ["const:c369dc:8", "const:4:8"]]
- 00c369dc ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c36a78 ["INT_ADD", "register:40f0:8", ["const:c36a78:8", "const:4:8"]]
+ 00c36a78 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c369e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c98:8"]]
- 00c369e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c36a80 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
+ 00c36a80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-248c433a09836cdbe71ab4bb22b9f709"></a>

### [`00c36a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36a10.md) → [`00c36aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36aac.md) FUN_00c36aac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c09d0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c09/00c09d0c.md) [`00c0d198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0d/00c0d198.md) · 呼出先 5件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c585c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585c0.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md)
- 新版 呼出元 2件 [`00c09da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c09/00c09da8.md) [`00c0d234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0d234.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c58690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58690.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)

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
    "old": {
      "definition_site": "00c36afc",
      "incomplete_value": false,
      "site": "00c36afc",
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
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c36ad8",
      "incomplete_value": false,
      "site": "00c36adc",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00c36ae8",
      "incomplete_value": false,
      "site": "00c36af4",
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
      "00c36af0",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36b74",
      "PARAM",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36b84",
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
      "00c36af0",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36b74",
      "PARAM",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36b84",
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
- 00c36adc ["INT_ADD", "register:40f0:8", ["const:c36adc:8", "const:4:8"]]
- 00c36adc ["CALL", null, ["callee:00c57f20:8"]]
+ 00c36b78 ["INT_ADD", "register:40f0:8", ["const:c36b78:8", "const:4:8"]]
+ 00c36b78 ["CALL", null, ["callee:00c57f20:8"]]
- 00c36af4 ["INT_ADD", "register:40f0:8", ["const:c36af4:8", "const:4:8"]]
- 00c36af4 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c36b90 ["INT_ADD", "register:40f0:8", ["const:c36b90:8", "const:4:8"]]
+ 00c36b90 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00c36afc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c98:8"]]
- 00c36afc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c36b98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d98:8"]]
+ 00c36b98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-2410c3eddb4f08b377da0e84f3d28ef6"></a>

### [`00c36b28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c36/00c36b28.md) → [`00c36bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36bc4.md) FUN_00c36bc4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c0a124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0a/00c0a124.md) [`00c0d5a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c0d/00c0d5a4.md) · 呼出先 5件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5d220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d220.md) [`00c5ed60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ed60.md)
- 新版 呼出元 2件 [`00c0a1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a1c0.md) [`00c0d640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0d640.md) · 呼出先 5件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md) [`00c5ee30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 85.07% / 新版 85.07%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c36cbc",
      "incomplete_value": true,
      "site": "00c36cbc",
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
      "definition_site": "00c36c20",
      "incomplete_value": true,
      "site": "00c36c20",
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
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c36c9c",
      "incomplete_value": false,
      "site": "00c36ca0",
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
      "definition_site": "00c36c00",
      "incomplete_value": false,
      "site": "00c36c04",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c36cac",
      "incomplete_value": false,
      "site": "00c36cb8",
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
      "definition_site": "00c36c10",
      "incomplete_value": false,
      "site": "00c36c1c",
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
      "00c36c10",
      "READ",
      [
        "storage",
        "01127ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36c18",
      "READ",
      [
        "storage",
        "01127c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c36c50",
      "READ",
      [
        "storage",
        "002c2f40",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c36c10",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c36c18",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c36c50",
      "READ",
      [
        "storage",
        "002c2f80",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c36b68 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 00c36b68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c36b68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c36b68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c36c04 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00c36c04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c36c04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c36c04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c36c04 ["INT_ADD", "register:40f0:8", ["const:c36c04:8", "const:4:8"]]
- 00c36c04 ["CALL", null, ["callee:00c57f20:8"]]
+ 00c36ca0 ["INT_ADD", "register:40f0:8", ["const:c36ca0:8", "const:4:8"]]
+ 00c36ca0 ["CALL", null, ["callee:00c57f20:8"]]
- 00c36c1c ["INT_ADD", "register:40f0:8", ["const:c36c1c:8", "const:4:8"]]
- 00c36c1c ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00c36cb8 ["INT_ADD", "register:40f0:8", ["const:c36cb8:8", "const:4:8"]]
+ 00c36cb8 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-904c91a35e427a6bb3f58e1e6b143f66"></a>

### [`00c370ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c370ac.md) → [`00c37148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37148.md) _ZNSt6__ndk111__call_onceERVmPvPFvS2_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dee0.md) · 呼出先 4件 [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md) [`00c5e1c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e1c0.md) [`00c5e1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e1d0.md)
- 新版 呼出元 1件 [`00c5dfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfb0.md) · 呼出先 4件 [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md) [`00c5e290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e290.md) [`00c5e2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e2a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 84.38% / 新版 84.38%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c3716c",
      "incomplete_value": false,
      "site": "00c37178",
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
            "const:ab0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c370d0",
      "incomplete_value": false,
      "site": "00c370dc",
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
            "const:9b0:8"
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
      "definition_site": "00c371f0",
      "incomplete_value": false,
      "site": "00c371f4",
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
            "const:ab0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37154",
      "incomplete_value": false,
      "site": "00c37158",
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
            "const:9b0:8"
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
      "definition_site": "00c37204",
      "incomplete_value": false,
      "site": "00c37208",
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
            "const:ab0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37168",
      "incomplete_value": false,
      "site": "00c3716c",
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
            "const:9b0:8"
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
      "00c3716c",
      "PARAM",
      [
        "storage",
        "011289b0",
        null,
        null
      ]
    ],
    [
      "00c37198",
      "PARAM",
      [
        "storage",
        "011289d8",
        null,
        null
      ]
    ],
    [
      "00c3719c",
      "PARAM",
      [
        "storage",
        "011289b0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c3716c",
      "PARAM",
      [
        "storage",
        "01128ab0",
        null,
        null
      ]
    ],
    [
      "00c37198",
      "PARAM",
      [
        "storage",
        "01128ad8",
        null,
        null
      ]
    ],
    [
      "00c3719c",
      "PARAM",
      [
        "storage",
        "01128ab0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c370d0 ["COPY", "tmp:0:8", ["const:9b0:8"]]
- 00c370d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c370d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c370d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c3716c ["COPY", "tmp:0:8", ["const:ab0:8"]]
+ 00c3716c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c3716c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c3716c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00c370dc ["INT_ADD", "register:40f0:8", ["const:c370dc:8", "const:4:8"]]
- 00c370dc ["CALL", null, ["callee:00c5b770:8"]]
+ 00c37178 ["INT_ADD", "register:40f0:8", ["const:c37178:8", "const:4:8"]]
+ 00c37178 ["CALL", null, ["callee:00c5b770:8"]]
- 00c370f0 ["COPY", "tmp:0:8", ["const:9d8:8"]]
- 00c370f0 ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
- 00c370f0 ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
- 00c370f0 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
+ 00c3718c ["COPY", "tmp:0:8", ["const:ad8:8"]]
+ 00c3718c ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
+ 00c3718c ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
+ 00c3718c ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
~~~


<a id="compare-2fd65ff946ebad0b956f3084ede1e8af"></a>

### [`00c371c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c371c0.md) → [`00c3725c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c3725c.md) FUN_00c3725c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md) [`00c5e1c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e1c0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md) [`00c5e290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e290.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c3727c",
      "incomplete_value": false,
      "site": "00c37280",
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
            "const:ab0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c371e0",
      "incomplete_value": false,
      "site": "00c371e4",
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
            "const:9b0:8"
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
      "definition_site": "00c37290",
      "incomplete_value": false,
      "site": "00c37294",
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
            "const:ab0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c371f4",
      "incomplete_value": false,
      "site": "00c371f8",
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
            "const:9b0:8"
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
      "definition_site": "00c3729c",
      "incomplete_value": false,
      "site": "00c372a0",
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
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37200",
      "incomplete_value": false,
      "site": "00c37204",
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
            "const:9d8:8"
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
      "00c3727c",
      "PARAM",
      [
        "storage",
        "011289b0",
        null,
        null
      ]
    ],
    [
      "00c37290",
      "PARAM",
      [
        "storage",
        "011289b0",
        null,
        null
      ]
    ],
    [
      "00c3729c",
      "PARAM",
      [
        "storage",
        "011289d8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c3727c",
      "PARAM",
      [
        "storage",
        "01128ab0",
        null,
        null
      ]
    ],
    [
      "00c37290",
      "PARAM",
      [
        "storage",
        "01128ab0",
        null,
        null
      ]
    ],
    [
      "00c3729c",
      "PARAM",
      [
        "storage",
        "01128ad8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c371e4 ["INT_ADD", "register:40f0:8", ["const:c371e4:8", "const:4:8"]]
- 00c371e4 ["CALL", null, ["callee:00c5b770:8"]]
+ 00c37280 ["INT_ADD", "register:40f0:8", ["const:c37280:8", "const:4:8"]]
+ 00c37280 ["CALL", null, ["callee:00c5b770:8"]]
- 00c371f8 ["INT_ADD", "register:40f0:8", ["const:c371f8:8", "const:4:8"]]
- 00c371f8 ["CALL", null, ["callee:00c5b780:8"]]
+ 00c37294 ["INT_ADD", "register:40f0:8", ["const:c37294:8", "const:4:8"]]
+ 00c37294 ["CALL", null, ["callee:00c5b780:8"]]
- 00c37204 ["INT_ADD", "register:40f0:8", ["const:c37204:8", "const:4:8"]]
- 00c37204 ["CALL", null, ["callee:00c5e290:8"]]
+ 00c372a0 ["INT_ADD", "register:40f0:8", ["const:c372a0:8", "const:4:8"]]
+ 00c372a0 ["CALL", null, ["callee:00c5e290:8"]]
~~~


<a id="compare-a3b9bffdcb2e960df75b18ff696fe649"></a>

### [`00c372bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c372bc.md) → [`00c37358`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37358.md) _ZNSt6__ndk120__get_collation_nameEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a800.md) · 呼出先 1件 [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md)
- 新版 呼出元 1件 [`00c5a8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8d0.md) · 呼出先 1件 [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c373bc",
      "incomplete_value": true,
      "site": "00c373c4",
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
                "register:40a8:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37320",
      "incomplete_value": true,
      "site": "00c37328",
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
                "register:40a8:8"
              ],
              "INT_ADD"
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
      "00c37390",
      "READ",
      [
        "storage",
        "00c96148",
        null,
        "pointer"
      ]
    ],
    [
      "00c37390",
      "PARAM",
      [
        "storage",
        "002b700d",
        null,
        "string"
      ]
    ],
    [
      "00c37390",
      "READ",
      [
        "storage",
        "00c95f88",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c37390",
      "READ",
      [
        "storage",
        "00c96218",
        null,
        "pointer"
      ]
    ],
    [
      "00c37390",
      "PARAM",
      [
        "storage",
        "002b704d",
        null,
        "string"
      ]
    ],
    [
      "00c37390",
      "READ",
      [
        "storage",
        "00c96058",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c372e4 ["COPY", "register:40a8:8", ["const:c95dd8:8"]]
+ 00c37380 ["COPY", "register:40a8:8", ["const:c95ea8:8"]]
- 00c372f8 ["INT_ADD", "register:40f0:8", ["const:c372f8:8", "const:4:8"]]
- 00c372f8 ["CALL", null, ["callee:00c5b920:8"]]
+ 00c37394 ["INT_ADD", "register:40f0:8", ["const:c37394:8", "const:4:8"]]
+ 00c37394 ["CALL", null, ["callee:00c5b920:8"]]
- 00c37318 ["COPY", "tmp:0:8", ["const:4c8:8"]]
- 00c37318 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c37318 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c37318 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c373b4 ["COPY", "tmp:0:8", ["const:598:8"]]
+ 00c373b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c373b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c373b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a08279ef05063aaedc6639cd708942c0"></a>

### [`00c37364`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37364.md) → [`00c37400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37400.md) _ZNSt6__ndk115__get_classnameEPKcb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a810.md) · 呼出先 1件 [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md)
- 新版 呼出元 1件 [`00c5a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8e0.md) · 呼出先 1件 [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c37460",
      "incomplete_value": true,
      "site": "00c37464",
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
                "register:40a8:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c373c4",
      "incomplete_value": true,
      "site": "00c373c8",
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
                "register:40a8:8"
              ],
              "INT_ADD"
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
      "00c37438",
      "READ",
      [
        "storage",
        "00c96538",
        null,
        "pointer"
      ]
    ],
    [
      "00c37438",
      "PARAM",
      [
        "storage",
        "002b37ff",
        null,
        "string"
      ]
    ],
    [
      "00c37438",
      "READ",
      [
        "storage",
        "00c964f8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c37438",
      "READ",
      [
        "storage",
        "00c96608",
        null,
        "pointer"
      ]
    ],
    [
      "00c37438",
      "PARAM",
      [
        "storage",
        "002b3830",
        null,
        "string"
      ]
    ],
    [
      "00c37438",
      "READ",
      [
        "storage",
        "00c965c8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3738c ["COPY", "register:40a8:8", ["const:c964c8:8"]]
+ 00c37428 ["COPY", "register:40a8:8", ["const:c96598:8"]]
- 00c373a0 ["INT_ADD", "register:40f0:8", ["const:c373a0:8", "const:4:8"]]
- 00c373a0 ["CALL", null, ["callee:00c5b920:8"]]
+ 00c3743c ["INT_ADD", "register:40f0:8", ["const:c3743c:8", "const:4:8"]]
+ 00c3743c ["CALL", null, ["callee:00c5b920:8"]]
- 00c373c0 ["COPY", "tmp:0:8", ["const:5b8:8"]]
- 00c373c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c373c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c373c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3745c ["COPY", "tmp:0:8", ["const:688:8"]]
+ 00c3745c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3745c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3745c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-aecbc42452af6527d9d76a54bb1377e7"></a>

### [`00c374c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c374c8.md) → [`00c37564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37564.md) __cxa_bad_cast

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c59ce0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59ce0.md) · 呼出先 4件 [`00c37f6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37f6c.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5e480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e480.md)
- 新版 呼出元 1件 [`00c59db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59db0.md) · 呼出先 4件 [`00c38008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c38008.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5e550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e550.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37590",
      "incomplete_value": true,
      "site": "00c37598",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c374f4",
      "incomplete_value": true,
      "site": "00c374fc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c37594",
      "incomplete_value": true,
      "site": "00c37598",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "definition_site": "00c374f8",
      "incomplete_value": true,
      "site": "00c374fc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00c37590",
      "READ",
      [
        "storage",
        "00c9bb60",
        null,
        "pointer"
      ]
    ],
    [
      "00c37590",
      "PARAM",
      [
        "storage",
        "00c96988",
        "std::bad_cast::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00c37594",
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
      "00c37590",
      "READ",
      [
        "storage",
        "00c9bc30",
        null,
        "pointer"
      ]
    ],
    [
      "00c37590",
      "PARAM",
      [
        "storage",
        "00c96a58",
        "std::bad_cast::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00c37594",
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
- 00c374fc ["INT_ADD", "register:40f0:8", ["const:c374fc:8", "const:4:8"]]
- 00c374fc ["CALL", null, ["callee:00c57fe0:8"]]
+ 00c37598 ["INT_ADD", "register:40f0:8", ["const:c37598:8", "const:4:8"]]
+ 00c37598 ["CALL", null, ["callee:00c57fe0:8"]]
- 00c374dc ["INT_ADD", "register:40f0:8", ["const:c374dc:8", "const:4:8"]]
- 00c374dc ["CALL", null, ["callee:00c57fc0:8"]]
+ 00c37578 ["INT_ADD", "register:40f0:8", ["const:c37578:8", "const:4:8"]]
+ 00c37578 ["CALL", null, ["callee:00c57fc0:8"]]
- 00c374e4 ["INT_ADD", "register:40f0:8", ["const:c374e4:8", "const:4:8"]]
- 00c374e4 ["CALL", null, ["callee:00c5e550:8"]]
+ 00c37580 ["INT_ADD", "register:40f0:8", ["const:c37580:8", "const:4:8"]]
+ 00c37580 ["CALL", null, ["callee:00c5e550:8"]]
~~~


<a id="compare-00566f9f77cf43888ae3617e4e8f8d57"></a>

### [`00c37500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37500.md) → [`00c3759c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c3759c.md) __cxa_bad_typeid

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c37fc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37fc8.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5ed70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ed70.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c38064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c38064.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5ee40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c375c8",
      "incomplete_value": true,
      "site": "00c375d0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:ee8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3752c",
      "incomplete_value": true,
      "site": "00c37534",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c375cc",
      "incomplete_value": true,
      "site": "00c375d0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
      "definition_site": "00c37530",
      "incomplete_value": true,
      "site": "00c37534",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
      "00c375c8",
      "READ",
      [
        "storage",
        "00c9be18",
        null,
        "pointer"
      ]
    ],
    [
      "00c375c8",
      "PARAM",
      [
        "storage",
        "00c969a0",
        "std::bad_typeid::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00c375cc",
      "READ",
      [
        "storage",
        "00c9be20",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c375c8",
      "READ",
      [
        "storage",
        "00c9bee8",
        null,
        "pointer"
      ]
    ],
    [
      "00c375c8",
      "PARAM",
      [
        "storage",
        "00c96a70",
        "std::bad_typeid::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00c375cc",
      "READ",
      [
        "storage",
        "00c9bef0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c37534 ["INT_ADD", "register:40f0:8", ["const:c37534:8", "const:4:8"]]
- 00c37534 ["CALL", null, ["callee:00c57fe0:8"]]
+ 00c375d0 ["INT_ADD", "register:40f0:8", ["const:c375d0:8", "const:4:8"]]
+ 00c375d0 ["CALL", null, ["callee:00c57fe0:8"]]
- 00c37514 ["INT_ADD", "register:40f0:8", ["const:c37514:8", "const:4:8"]]
- 00c37514 ["CALL", null, ["callee:00c57fc0:8"]]
+ 00c375b0 ["INT_ADD", "register:40f0:8", ["const:c375b0:8", "const:4:8"]]
+ 00c375b0 ["CALL", null, ["callee:00c57fc0:8"]]
- 00c3751c ["INT_ADD", "register:40f0:8", ["const:c3751c:8", "const:4:8"]]
- 00c3751c ["CALL", null, ["callee:00c5ee40:8"]]
+ 00c375b8 ["INT_ADD", "register:40f0:8", ["const:c375b8:8", "const:4:8"]]
+ 00c375b8 ["CALL", null, ["callee:00c5ee40:8"]]
~~~


<a id="compare-dfc1a8f70f3922733770454e71ba8735"></a>

### [`00c37538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37538.md) → [`00c375d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c375d4.md) __cxa_throw_bad_array_new_length

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c37ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37ba4.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c58030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58030.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c37c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37c40.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c58100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58100.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37600",
      "incomplete_value": true,
      "site": "00c37608",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37564",
      "incomplete_value": true,
      "site": "00c3756c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bd0:8"
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
      "definition_site": "00c37604",
      "incomplete_value": true,
      "site": "00c37608",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37568",
      "incomplete_value": true,
      "site": "00c3756c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bd8:8"
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
      "00c37600",
      "READ",
      [
        "storage",
        "00c9abd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c37600",
      "PARAM",
      [
        "storage",
        "00c966b0",
        "std::bad_array_new_length::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00c37604",
      "READ",
      [
        "storage",
        "00c9abd8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c37600",
      "READ",
      [
        "storage",
        "00c9aca0",
        null,
        "pointer"
      ]
    ],
    [
      "00c37600",
      "PARAM",
      [
        "storage",
        "00c96780",
        "std::bad_array_new_length::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00c37604",
      "READ",
      [
        "storage",
        "00c9aca8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3756c ["INT_ADD", "register:40f0:8", ["const:c3756c:8", "const:4:8"]]
- 00c3756c ["CALL", null, ["callee:00c57fe0:8"]]
+ 00c37608 ["INT_ADD", "register:40f0:8", ["const:c37608:8", "const:4:8"]]
+ 00c37608 ["CALL", null, ["callee:00c57fe0:8"]]
- 00c3754c ["INT_ADD", "register:40f0:8", ["const:c3754c:8", "const:4:8"]]
- 00c3754c ["CALL", null, ["callee:00c57fc0:8"]]
+ 00c375e8 ["INT_ADD", "register:40f0:8", ["const:c375e8:8", "const:4:8"]]
+ 00c375e8 ["CALL", null, ["callee:00c57fc0:8"]]
- 00c37554 ["INT_ADD", "register:40f0:8", ["const:c37554:8", "const:4:8"]]
- 00c37554 ["CALL", null, ["callee:00c58100:8"]]
+ 00c375f0 ["INT_ADD", "register:40f0:8", ["const:c375f0:8", "const:4:8"]]
+ 00c375f0 ["CALL", null, ["callee:00c58100:8"]]
~~~


<a id="compare-a5b7ca050acc57d72c89fef3d1994eb7"></a>

### [`00c37570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37570.md) → [`00c3760c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c3760c.md) __cxa_guard_acquire

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) · 呼出先 5件 [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md) [`00c5e1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e1d0.md) [`00c5edb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5edb0.md)
- 新版 呼出元 1件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) · 呼出先 5件 [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md) [`00c5e2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e2a0.md) [`00c5ee80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 83.78% / 新版 83.78%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c37640",
      "incomplete_value": false,
      "site": "00c3764c",
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
            "const:eb6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c375a4",
      "incomplete_value": false,
      "site": "00c375b0",
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
            "const:e76:8"
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
      "definition_site": "00c37648",
      "incomplete_value": false,
      "site": "00c37650",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c375ac",
      "incomplete_value": false,
      "site": "00c375b4",
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
            "const:a08:8"
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
      "definition_site": "00c376d0",
      "incomplete_value": false,
      "site": "00c376d4",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37634",
      "incomplete_value": false,
      "site": "00c37638",
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
            "const:a08:8"
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
      "00c37648",
      "PARAM",
      [
        "storage",
        "01128a08",
        null,
        null
      ]
    ],
    [
      "00c3764c",
      "DATA",
      [
        "storage",
        "002b7e76",
        null,
        "string"
      ]
    ],
    [
      "00c37698",
      "PARAM",
      [
        "storage",
        "01128a30",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c37648",
      "PARAM",
      [
        "storage",
        "01128b08",
        null,
        null
      ]
    ],
    [
      "00c3764c",
      "DATA",
      [
        "storage",
        "002b7eb6",
        null,
        "string"
      ]
    ],
    [
      "00c37698",
      "PARAM",
      [
        "storage",
        "01128b30",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c375b4 ["INT_ADD", "register:40f0:8", ["const:c375b4:8", "const:4:8"]]
- 00c375b4 ["CALL", null, ["callee:00c5b770:8"]]
+ 00c37650 ["INT_ADD", "register:40f0:8", ["const:c37650:8", "const:4:8"]]
+ 00c37650 ["CALL", null, ["callee:00c5b770:8"]]
- 00c37638 ["INT_ADD", "register:40f0:8", ["const:c37638:8", "const:4:8"]]
- 00c37638 ["CALL", null, ["callee:00c5b780:8"]]
+ 00c376d4 ["INT_ADD", "register:40f0:8", ["const:c376d4:8", "const:4:8"]]
+ 00c376d4 ["CALL", null, ["callee:00c5b780:8"]]
- 00c37688 ["INT_ADD", "register:40f0:8", ["const:c37688:8", "const:4:8"]]
- 00c37688 ["CALL", null, ["callee:00c380a8:8"]]
+ 00c37724 ["INT_ADD", "register:40f0:8", ["const:c37724:8", "const:4:8"]]
+ 00c37724 ["CALL", null, ["callee:00c380a8:8"]]
~~~


<a id="compare-73d13cbfdfe918d29c807ebe3f2ccd14"></a>

### [`00c376b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c376b4.md) → [`00c37750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37750.md) __cxa_guard_release

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md) · 呼出先 4件 [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md) [`00c5e1c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e1c0.md)
- 新版 呼出元 1件 [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) · 呼出先 4件 [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md) [`00c5e290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e290.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.49% / 新版 80.49%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37774",
      "incomplete_value": false,
      "site": "00c37778",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c376d8",
      "incomplete_value": false,
      "site": "00c376dc",
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
            "const:a08:8"
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
      "definition_site": "00c3778c",
      "incomplete_value": false,
      "site": "00c37790",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c376f0",
      "incomplete_value": false,
      "site": "00c376f4",
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
            "const:a08:8"
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
      "definition_site": "00c377a0",
      "incomplete_value": false,
      "site": "00c377a4",
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
            "const:b30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37704",
      "incomplete_value": false,
      "site": "00c37708",
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
            "const:a30:8"
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
      "00c37774",
      "PARAM",
      [
        "storage",
        "01128a08",
        null,
        null
      ]
    ],
    [
      "00c3778c",
      "PARAM",
      [
        "storage",
        "01128a08",
        null,
        null
      ]
    ],
    [
      "00c377a0",
      "PARAM",
      [
        "storage",
        "01128a30",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c37774",
      "PARAM",
      [
        "storage",
        "01128b08",
        null,
        null
      ]
    ],
    [
      "00c3778c",
      "PARAM",
      [
        "storage",
        "01128b08",
        null,
        null
      ]
    ],
    [
      "00c377a0",
      "PARAM",
      [
        "storage",
        "01128b30",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c376dc ["INT_ADD", "register:40f0:8", ["const:c376dc:8", "const:4:8"]]
- 00c376dc ["CALL", null, ["callee:00c5b770:8"]]
+ 00c37778 ["INT_ADD", "register:40f0:8", ["const:c37778:8", "const:4:8"]]
+ 00c37778 ["CALL", null, ["callee:00c5b770:8"]]
- 00c376f4 ["INT_ADD", "register:40f0:8", ["const:c376f4:8", "const:4:8"]]
- 00c376f4 ["CALL", null, ["callee:00c5b780:8"]]
+ 00c37790 ["INT_ADD", "register:40f0:8", ["const:c37790:8", "const:4:8"]]
+ 00c37790 ["CALL", null, ["callee:00c5b780:8"]]
- 00c37708 ["INT_ADD", "register:40f0:8", ["const:c37708:8", "const:4:8"]]
- 00c37708 ["CALL", null, ["callee:00c5e290:8"]]
+ 00c377a4 ["INT_ADD", "register:40f0:8", ["const:c377a4:8", "const:4:8"]]
+ 00c377a4 ["CALL", null, ["callee:00c5e290:8"]]
~~~


<a id="compare-03f9facc3f800b3a48a6b194662e29c7"></a>

### [`00c3775c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c3775c.md) → [`00c377f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c377f8.md) __cxa_guard_abort

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c57f90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f90.md) · 呼出先 4件 [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md) [`00c5b6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6a0.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md) [`00c5e1c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e1c0.md)
- 新版 呼出元 1件 [`00c58060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58060.md) · 呼出先 4件 [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md) [`00c5b770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b770.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md) [`00c5e290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e290.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 78.95% / 新版 78.95%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37810",
      "incomplete_value": false,
      "site": "00c37814",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37774",
      "incomplete_value": false,
      "site": "00c37778",
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
            "const:a08:8"
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
      "definition_site": "00c3782c",
      "incomplete_value": false,
      "site": "00c37830",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37790",
      "incomplete_value": false,
      "site": "00c37794",
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
            "const:a08:8"
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
      "definition_site": "00c37840",
      "incomplete_value": false,
      "site": "00c37844",
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
            "const:b30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c377a4",
      "incomplete_value": false,
      "site": "00c377a8",
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
            "const:a30:8"
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
      "00c37810",
      "PARAM",
      [
        "storage",
        "01128a08",
        null,
        null
      ]
    ],
    [
      "00c3782c",
      "PARAM",
      [
        "storage",
        "01128a08",
        null,
        null
      ]
    ],
    [
      "00c37840",
      "PARAM",
      [
        "storage",
        "01128a30",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c37810",
      "PARAM",
      [
        "storage",
        "01128b08",
        null,
        null
      ]
    ],
    [
      "00c3782c",
      "PARAM",
      [
        "storage",
        "01128b08",
        null,
        null
      ]
    ],
    [
      "00c37840",
      "PARAM",
      [
        "storage",
        "01128b30",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c37778 ["INT_ADD", "register:40f0:8", ["const:c37778:8", "const:4:8"]]
- 00c37778 ["CALL", null, ["callee:00c5b770:8"]]
+ 00c37814 ["INT_ADD", "register:40f0:8", ["const:c37814:8", "const:4:8"]]
+ 00c37814 ["CALL", null, ["callee:00c5b770:8"]]
- 00c37794 ["INT_ADD", "register:40f0:8", ["const:c37794:8", "const:4:8"]]
- 00c37794 ["CALL", null, ["callee:00c5b780:8"]]
+ 00c37830 ["INT_ADD", "register:40f0:8", ["const:c37830:8", "const:4:8"]]
+ 00c37830 ["CALL", null, ["callee:00c5b780:8"]]
- 00c377a8 ["INT_ADD", "register:40f0:8", ["const:c377a8:8", "const:4:8"]]
- 00c377a8 ["CALL", null, ["callee:00c5e290:8"]]
+ 00c37844 ["INT_ADD", "register:40f0:8", ["const:c37844:8", "const:4:8"]]
+ 00c37844 ["CALL", null, ["callee:00c5e290:8"]]
~~~


<a id="compare-0b636a0886661e3d8ca6e38fbb94a477"></a>

### [`00c377f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c377f8.md) → [`00c37894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37894.md) FUN_00c37894

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c378ac",
      "incomplete_value": false,
      "site": "00c378b0",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37810",
      "incomplete_value": false,
      "site": "00c37814",
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
            "const:a08:8"
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
      "definition_site": "00c378d0",
      "incomplete_value": true,
      "site": "00c378d4",
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
            "const:e7a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37834",
      "incomplete_value": true,
      "site": "00c37838",
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
            "const:ec7:8"
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
      "00c378ac",
      "PARAM",
      [
        "storage",
        "01128a08",
        null,
        null
      ]
    ],
    [
      "00c378d0",
      "PARAM",
      [
        "storage",
        "002a0ec7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c378ac",
      "PARAM",
      [
        "storage",
        "01128b08",
        null,
        null
      ]
    ],
    [
      "00c378d0",
      "PARAM",
      [
        "storage",
        "002a0e7a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c37814 ["INT_ADD", "register:40f0:8", ["const:c37814:8", "const:4:8"]]
- 00c37814 ["CALL", null, ["callee:00c5b780:8"]]
+ 00c378b0 ["INT_ADD", "register:40f0:8", ["const:c378b0:8", "const:4:8"]]
+ 00c378b0 ["CALL", null, ["callee:00c5b780:8"]]
- 00c37838 ["INT_ADD", "register:40f0:8", ["const:c37838:8", "const:4:8"]]
- 00c37838 ["CALL", null, ["callee:00c380a8:8"]]
+ 00c378d4 ["INT_ADD", "register:40f0:8", ["const:c378d4:8", "const:4:8"]]
+ 00c378d4 ["CALL", null, ["callee:00c380a8:8"]]
- 00c37810 ["COPY", "tmp:0:8", ["const:a08:8"]]
- 00c37810 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c37810 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c37810 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c378ac ["COPY", "tmp:0:8", ["const:b08:8"]]
+ 00c378ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c378ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c378ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-06e9bb93d1b1f597c86a308d828e30b9"></a>

### [`00c37894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37894.md) → [`00c37930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37930.md) FUN_00c37930

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c378b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c378b0.md) [`00c52ee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52ee4.md) · 呼出先 1件 [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md)
- 新版 呼出元 2件 [`00c3794c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c3794c.md) [`00c52f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52f80.md) · 呼出先 1件 [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37944",
      "incomplete_value": true,
      "site": "00c37948",
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
            "const:e7a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c378a8",
      "incomplete_value": true,
      "site": "00c378ac",
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
            "const:ec7:8"
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
      "00c37944",
      "PARAM",
      [
        "storage",
        "002a2ec7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c37944",
      "PARAM",
      [
        "storage",
        "002a2e7a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c378ac ["INT_ADD", "register:40f0:8", ["const:c378ac:8", "const:4:8"]]
- 00c378ac ["CALL", null, ["callee:00c380a8:8"]]
+ 00c37948 ["INT_ADD", "register:40f0:8", ["const:c37948:8", "const:4:8"]]
+ 00c37948 ["CALL", null, ["callee:00c380a8:8"]]
- 00c378a0 ["COPY", "register:0:8", ["register:4000:8"]]
- 00c378a0 ["INT_ADD", "register:40f0:8", ["const:c378a0:8", "const:4:8"]]
- 00c378a0 ["CALLIND", null, ["register:0:8"]]
+ 00c3793c ["COPY", "register:0:8", ["register:4000:8"]]
+ 00c3793c ["INT_ADD", "register:40f0:8", ["const:c3793c:8", "const:4:8"]]
+ 00c3793c ["CALLIND", null, ["register:0:8"]]
- 00c378a8 ["COPY", "tmp:0:8", ["const:ec7:8"]]
- 00c378a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c378a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c378a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c37944 ["COPY", "tmp:0:8", ["const:e7a:8"]]
+ 00c37944 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37944 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37944 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-152d96da46a078c42c9d5a5dd8c59ced"></a>

### [`00c378e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c378e0.md) → [`00c3797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c3797c.md) FUN_00c3797c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 8件 [`00c37854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37854.md) [`00c51ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51ff8.md) [`00c52100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52100.md) [`00c522c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c522c8.md) [`00c52578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52578.md) · 呼出先 1件 [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md)
- 新版 呼出元 8件 [`00c378f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c378f0.md) [`00c52094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52094.md) [`00c5219c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c5219c.md) [`00c52364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52364.md) [`00c52614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52614.md) · 呼出先 1件 [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37990",
      "incomplete_value": false,
      "site": "00c37994",
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
            "const:8f3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c378f4",
      "incomplete_value": false,
      "site": "00c378f8",
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
            "const:94f:8"
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
      "00c37990",
      "PARAM",
      [
        "storage",
        "002a894f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c37990",
      "PARAM",
      [
        "storage",
        "002a88f3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c378f8 ["INT_ADD", "register:40f0:8", ["const:c378f8:8", "const:4:8"]]
- 00c378f8 ["CALL", null, ["callee:00c380a8:8"]]
+ 00c37994 ["INT_ADD", "register:40f0:8", ["const:c37994:8", "const:4:8"]]
+ 00c37994 ["CALL", null, ["callee:00c380a8:8"]]
- 00c378ec ["COPY", "register:0:8", ["register:4000:8"]]
- 00c378ec ["INT_ADD", "register:40f0:8", ["const:c378ec:8", "const:4:8"]]
- 00c378ec ["CALLIND", null, ["register:0:8"]]
+ 00c37988 ["COPY", "register:0:8", ["register:4000:8"]]
+ 00c37988 ["INT_ADD", "register:40f0:8", ["const:c37988:8", "const:4:8"]]
+ 00c37988 ["CALLIND", null, ["register:0:8"]]
- 00c378f4 ["COPY", "tmp:0:8", ["const:94f:8"]]
- 00c378f4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c378f4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c378f4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c37990 ["COPY", "tmp:0:8", ["const:8f3:8"]]
+ 00c37990 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37990 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37990 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-653f1f079b33a7075612b5a55f0302b7"></a>

### [`00c37924`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37924.md) → [`00c379c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c379c0.md) FUN_00c379c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00c37854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37854.md) [`00c378cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c378cc.md) [`00c37ac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37ac4.md) · 呼出先 6件 [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md) [`00c38330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c38330.md) [`00c51e48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51e48.md) [`00c51e54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51e54.md) [`00c5eda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5eda0.md)
- 新版 呼出元 3件 [`00c378f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c378f0.md) [`00c37968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37968.md) [`00c37b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37b60.md) · 呼出先 6件 [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md) [`00c383cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c383cc.md) [`00c51ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51ee4.md) [`00c51ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51ef0.md) [`00c5ee70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 91.78% / 新版 91.78%

優先判定に残った影響 `call_argument_candidate` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c379e8",
      "incomplete_value": false,
      "site": "00c379ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:faa:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3794c",
      "incomplete_value": false,
      "site": "00c37950",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:f6a:8"
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
      "definition_site": "00c37a2c",
      "incomplete_value": false,
      "site": "00c37a34",
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
            "const:861:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37990",
      "incomplete_value": false,
      "site": "00c37998",
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
            "const:8bd:8"
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
      "definition_site": "00c37a30",
      "incomplete_value": true,
      "site": "00c37a34",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:950:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37994",
      "incomplete_value": true,
      "site": "00c37998",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:880:8"
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
      "00c379e8",
      "PARAM",
      [
        "storage",
        "002c1f6a",
        null,
        "string"
      ]
    ],
    [
      "00c37a2c",
      "PARAM",
      [
        "storage",
        "002b08bd",
        null,
        "string"
      ]
    ],
    [
      "00c37a30",
      "READ",
      [
        "storage",
        "00ca4880",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c379e8",
      "PARAM",
      [
        "storage",
        "002c1faa",
        null,
        "string"
      ]
    ],
    [
      "00c37a2c",
      "PARAM",
      [
        "storage",
        "002b0861",
        null,
        "string"
      ]
    ],
    [
      "00c37a30",
      "READ",
      [
        "storage",
        "00ca4950",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c37950 ["INT_ADD", "register:40f0:8", ["const:c37950:8", "const:4:8"]]
- 00c37950 ["CALL", null, ["callee:00c380a8:8"]]
+ 00c379ec ["INT_ADD", "register:40f0:8", ["const:c379ec:8", "const:4:8"]]
+ 00c379ec ["CALL", null, ["callee:00c380a8:8"]]
- 00c37990 ["COPY", "tmp:0:8", ["const:8bd:8"]]
- 00c37990 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c37990 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c37990 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c37a2c ["COPY", "tmp:0:8", ["const:861:8"]]
+ 00c37a2c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37a2c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37a2c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00c37998 ["INT_ADD", "register:40f0:8", ["const:c37998:8", "const:4:8"]]
- 00c37998 ["CALL", null, ["callee:00c380a8:8"]]
+ 00c37a34 ["INT_ADD", "register:40f0:8", ["const:c37a34:8", "const:4:8"]]
+ 00c37a34 ["CALL", null, ["callee:00c380a8:8"]]
~~~


<a id="compare-c97d7d67e01a4c9f28fe6389aa0a3196"></a>

### [`00c37a70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37a70.md) → [`00c37b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37b0c.md) FUN_00c37b0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 3件 [`00c37840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37840.md) [`00c378b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c378b0.md) [`00c37a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37a90.md) · 呼出先 1件 [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md)
- 新版 呼出元 3件 [`00c378dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c378dc.md) [`00c3794c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c3794c.md) [`00c37b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37b2c.md) · 呼出先 1件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c37b24",
      "incomplete_value": false,
      "site": "00c37b24",
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
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37a88",
      "incomplete_value": false,
      "site": "00c37a88",
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
            "const:880:8"
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
      "definition_site": "00c37b20",
      "incomplete_value": false,
      "site": "00c37b24",
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
            "const:86a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37a84",
      "incomplete_value": false,
      "site": "00c37a88",
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
            "const:8c6:8"
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
      "00c37b24",
      "WRITE",
      [
        "storage",
        "00ca4880",
        null,
        "pointer"
      ]
    ],
    [
      "00c37b24",
      "DATA",
      [
        "storage",
        "002b18c6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c37b24",
      "WRITE",
      [
        "storage",
        "00ca4950",
        null,
        "pointer"
      ]
    ],
    [
      "00c37b24",
      "DATA",
      [
        "storage",
        "002b186a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c37a88 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:880:8"]]
- 00c37a88 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00c37b24 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:950:8"]]
+ 00c37b24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00c37a84 ["COPY", "tmp:0:8", ["const:8c6:8"]]
- 00c37a84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00c37a84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00c37a84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00c37b20 ["COPY", "tmp:0:8", ["const:86a:8"]]
+ 00c37b20 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00c37b20 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00c37b20 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00c37a8c ["INT_ADD", "register:40f0:8", ["const:c37a8c:8", "const:4:8"]]
- 00c37a8c ["CALL", null, ["callee:00c580f0:8"]]
+ 00c37b28 ["INT_ADD", "register:40f0:8", ["const:c37b28:8", "const:4:8"]]
+ 00c37b28 ["CALL", null, ["callee:00c580f0:8"]]
~~~


<a id="compare-60964bc54d7f771979038a6c4ec88243"></a>

### [`00c37b8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37b8c.md) → [`00c37c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37c28.md) __cxa_deleted_virtual

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c37c38",
      "incomplete_value": false,
      "site": "00c37c3c",
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
            "const:de8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37b9c",
      "incomplete_value": false,
      "site": "00c37ba0",
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
            "const:da8:8"
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
      "00c37c38",
      "PARAM",
      [
        "storage",
        "002b5da8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c37c38",
      "PARAM",
      [
        "storage",
        "002b5de8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c37ba0 ["INT_ADD", "register:40f0:8", ["const:c37ba0:8", "const:4:8"]]
- 00c37ba0 ["CALL", null, ["callee:00c380a8:8"]]
+ 00c37c3c ["INT_ADD", "register:40f0:8", ["const:c37c3c:8", "const:4:8"]]
+ 00c37c3c ["CALL", null, ["callee:00c380a8:8"]]
- 00c37b9c ["COPY", "tmp:0:8", ["const:da8:8"]]
- 00c37b9c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c37b9c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c37b9c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c37c38 ["COPY", "tmp:0:8", ["const:de8:8"]]
+ 00c37c38 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37c38 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37c38 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-adf48573b502c6a574793c7faf8956f5"></a>

### [`00c37bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37bd8.md) → [`00c37c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37c74.md) _ZNKSt9exception4whatEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00c37c7c",
      "incomplete_value": false,
      "site": "00c37c80",
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
            "const:dff:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37be0",
      "incomplete_value": false,
      "site": "00c37be4",
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
            "const:e4c:8"
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
      "00c37c7c",
      "DATA",
      [
        "storage",
        "002a3e4c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c37c7c",
      "DATA",
      [
        "storage",
        "002a3dff",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c37be0 ["COPY", "tmp:0:8", ["const:e4c:8"]]
- 00c37be0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c37be0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c37be0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c37c7c ["COPY", "tmp:0:8", ["const:dff:8"]]
+ 00c37c7c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37c7c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37c7c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-49b09d5231e563b2ecdcaa09148d734d"></a>

### [`00c37c14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37c14.md) → [`00c37cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37cb0.md) _ZNKSt13bad_exception4whatEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00c37cb8",
      "incomplete_value": false,
      "site": "00c37cbc",
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
            "const:51d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37c1c",
      "incomplete_value": false,
      "site": "00c37c20",
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
            "const:579:8"
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
      "00c37cb8",
      "DATA",
      [
        "storage",
        "002ae579",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c37cb8",
      "DATA",
      [
        "storage",
        "002ae51d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c37c1c ["COPY", "tmp:0:8", ["const:579:8"]]
- 00c37c1c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c37c1c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c37c1c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c37cb8 ["COPY", "tmp:0:8", ["const:51d:8"]]
+ 00c37cb8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37cb8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37cb8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-d746b1b37b34289344a50b6a7646553a"></a>

### [`00c37c68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37c68.md) → [`00c37d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37d04.md) _ZNKSt9bad_alloc4whatEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00c37d0c",
      "incomplete_value": false,
      "site": "00c37d10",
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
            "const:b04:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37c70",
      "incomplete_value": false,
      "site": "00c37c74",
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
            "const:b60:8"
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
      "00c37d0c",
      "DATA",
      [
        "storage",
        "002aab60",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c37d0c",
      "DATA",
      [
        "storage",
        "002aab04",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c37c70 ["COPY", "tmp:0:8", ["const:b60:8"]]
- 00c37c70 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c37c70 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c37c70 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c37d0c ["COPY", "tmp:0:8", ["const:b04:8"]]
+ 00c37d0c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37d0c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37d0c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a45321ca5e311df00316eee71b14f832"></a>

### [`00c37cbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37cbc.md) → [`00c37d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37d58.md) _ZNKSt20bad_array_new_length4whatEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00c37d60",
      "incomplete_value": false,
      "site": "00c37d64",
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
            "const:1bf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c37cc4",
      "incomplete_value": false,
      "site": "00c37cc8",
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
            "const:21b:8"
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
      "00c37d60",
      "DATA",
      [
        "storage",
        "002a521b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c37d60",
      "DATA",
      [
        "storage",
        "002a51bf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c37cc4 ["COPY", "tmp:0:8", ["const:21b:8"]]
- 00c37cc4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c37cc4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c37cc4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c37d60 ["COPY", "tmp:0:8", ["const:1bf:8"]]
+ 00c37d60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37d60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c37d60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8ca5ea487045b90e371140303e817516"></a>

### [`00c37ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37ccc.md) → [`00c37d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37d68.md) _ZNSt12out_of_rangeD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 10件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00b402c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b402c0.md) [`00bf81cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf8/00bf81cc.md) [`00c57f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f00.md) · 呼出先 3件 [`00c53ca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53ca0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c582e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582e0.md)
- 新版 呼出元 10件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md) [`00bf8268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf8/00bf8268.md) [`00c57fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fd0.md) · 呼出先 3件 [`00c53d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c37d88",
      "incomplete_value": true,
      "site": "00c37d90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00c37cec",
      "incomplete_value": true,
      "site": "00c37cf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c37d80",
      "READ",
      [
        "storage",
        "00c9ba90",
        null,
        "pointer"
      ]
    ],
    [
      "00c37d90",
      "DATA",
      [
        "storage",
        "00c966d8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c37d80",
      "READ",
      [
        "storage",
        "00c9bb60",
        null,
        "pointer"
      ]
    ],
    [
      "00c37d90",
      "DATA",
      [
        "storage",
        "00c967a8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c37ce4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a90:8"]]
- 00c37ce4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c37d80 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b60:8"]]
+ 00c37d80 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c37cfc ["INT_ADD", "register:40f0:8", ["const:c37cfc:8", "const:4:8"]]
- 00c37cfc ["CALL", null, ["callee:00c53d40:8"]]
+ 00c37d98 ["INT_ADD", "register:40f0:8", ["const:c37d98:8", "const:4:8"]]
+ 00c37d98 ["CALL", null, ["callee:00c53d40:8"]]
- 00c37d0c ["INT_ADD", "register:40f0:8", ["const:c37d0c:8", "const:4:8"]]
- 00c37d0c ["CALL", null, ["callee:00c57f80:8"]]
+ 00c37da8 ["INT_ADD", "register:40f0:8", ["const:c37da8:8", "const:4:8"]]
+ 00c37da8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-288307eaf14eccd9de62338debe32b72"></a>

### [`00c37d5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37d5c.md) → [`00c37df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37df8.md) _ZNSt13runtime_errorD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 8件 [`006d7650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7650.md) [`00bf0348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0348.md) [`00bf0ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0ab0.md) [`00c5a8c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8c0.md) [`00c5df70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df70.md) · 呼出先 3件 [`00c53ca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53ca0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c582e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582e0.md)
- 新版 呼出元 8件 [`006d76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76a8.md) [`00bf03e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf03e4.md) [`00bf0b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0b4c.md) [`00c5a990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a990.md) [`00c5e040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e040.md) · 呼出先 3件 [`00c53d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c583b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c37e18",
      "incomplete_value": true,
      "site": "00c37e20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00c37d7c",
      "incomplete_value": true,
      "site": "00c37d84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c37e10",
      "READ",
      [
        "storage",
        "00c9ba98",
        null,
        "pointer"
      ]
    ],
    [
      "00c37e20",
      "DATA",
      [
        "storage",
        "00c96700",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c37e10",
      "READ",
      [
        "storage",
        "00c9bb68",
        null,
        "pointer"
      ]
    ],
    [
      "00c37e20",
      "DATA",
      [
        "storage",
        "00c967d0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c37d74 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a98:8"]]
- 00c37d74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c37e10 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b68:8"]]
+ 00c37e10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c37d8c ["INT_ADD", "register:40f0:8", ["const:c37d8c:8", "const:4:8"]]
- 00c37d8c ["CALL", null, ["callee:00c53d40:8"]]
+ 00c37e28 ["INT_ADD", "register:40f0:8", ["const:c37e28:8", "const:4:8"]]
+ 00c37e28 ["CALL", null, ["callee:00c53d40:8"]]
- 00c37d9c ["INT_ADD", "register:40f0:8", ["const:c37d9c:8", "const:4:8"]]
- 00c37d9c ["CALL", null, ["callee:00c57f80:8"]]
+ 00c37e38 ["INT_ADD", "register:40f0:8", ["const:c37e38:8", "const:4:8"]]
+ 00c37e38 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-98049cba6ba55345a7d319202f3a0174"></a>

### [`00c37ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37ffc.md) → [`00c38098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c38098.md) _ZNKSt10bad_typeid4whatEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00c380a0",
      "incomplete_value": false,
      "site": "00c380a4",
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
            "const:a87:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c38004",
      "incomplete_value": false,
      "site": "00c38008",
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
            "const:adb:8"
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
      "00c380a0",
      "DATA",
      [
        "storage",
        "002beadb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c380a0",
      "DATA",
      [
        "storage",
        "002bea87",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c38004 ["COPY", "tmp:0:8", ["const:adb:8"]]
- 00c38004 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c38004 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c38004 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c380a0 ["COPY", "tmp:0:8", ["const:a87:8"]]
+ 00c380a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c380a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c380a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6e57f276f9be2a41b28d8aad474d6391"></a>

### [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md) → [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md) FUN_00c380a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 22件 [`00c37570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37570.md) [`00c376b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c376b4.md) [`00c3775c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c3775c.md) [`00c377f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c377f8.md) [`00c37894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37894.md) · 呼出先 10件 [`00c5a220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a220.md) [`00c5a280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a280.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md) [`00c5e700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e700.md) [`00c5ee70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ee70.md)
- 新版 呼出元 22件 [`00c3760c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c3760c.md) [`00c37750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37750.md) [`00c377f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c377f8.md) [`00c37894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37894.md) [`00c37930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37930.md) · 呼出先 10件 [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md) [`00c5a350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a350.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5e7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e7d0.md) [`00c5ef40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ef40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c380dc",
      "incomplete_value": false,
      "site": "00c38108",
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
            "const:e48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c38040",
      "incomplete_value": false,
      "site": "00c3806c",
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
            "const:e08:8"
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
      "definition_site": "00c38104",
      "incomplete_value": true,
      "site": "00c38108",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:130:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c38068",
      "incomplete_value": true,
      "site": "00c3806c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:130:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c38180",
      "incomplete_value": false,
      "site": "00c3818c",
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
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c380e4",
      "incomplete_value": false,
      "site": "00c380f0",
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
            "const:b3c:8"
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
      "00c380dc",
      "PARAM",
      [
        "storage",
        "002c0e08",
        null,
        "string"
      ]
    ],
    [
      "00c38100",
      "READ",
      [
        "storage",
        "00c9bb78",
        null,
        "pointer"
      ]
    ],
    [
      "00c38180",
      "PARAM",
      [
        "storage",
        "002bfb3c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c380dc",
      "PARAM",
      [
        "storage",
        "002c0e48",
        null,
        "string"
      ]
    ],
    [
      "00c38100",
      "READ",
      [
        "storage",
        "00c9bc48",
        null,
        "pointer"
      ]
    ],
    [
      "00c38180",
      "PARAM",
      [
        "storage",
        "002bfae8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3806c ["INT_ADD", "register:40f0:8", ["const:c3806c:8", "const:4:8"]]
- 00c3806c ["CALL", null, ["callee:00c5a2f0:8"]]
+ 00c38108 ["INT_ADD", "register:40f0:8", ["const:c38108:8", "const:4:8"]]
+ 00c38108 ["CALL", null, ["callee:00c5a2f0:8"]]
- 00c380f0 ["INT_ADD", "register:40f0:8", ["const:c380f0:8", "const:4:8"]]
- 00c380f0 ["CALL", null, ["callee:00c5ef60:8"]]
+ 00c3818c ["INT_ADD", "register:40f0:8", ["const:c3818c:8", "const:4:8"]]
+ 00c3818c ["CALL", null, ["callee:00c5ef60:8"]]
- 00c38104 ["INT_ADD", "register:40f0:8", ["const:c38104:8", "const:4:8"]]
- 00c38104 ["CALL", null, ["callee:00c5ef70:8"]]
+ 00c381a0 ["INT_ADD", "register:40f0:8", ["const:c381a0:8", "const:4:8"]]
+ 00c381a0 ["CALL", null, ["callee:00c5ef70:8"]]
~~~


<a id="compare-6b937e8c6999613b134c6b7c11341736"></a>

### [`00c38330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c38330.md) → [`00c383cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c383cc.md) FUN_00c383cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c37924`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37924.md) · 呼出先 2件 [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md) [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md)
- 新版 呼出元 1件 [`00c379c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c379c0.md) · 呼出先 2件 [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 89.83% / 新版 89.83%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c38410",
      "incomplete_value": true,
      "site": "00c38414",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:f48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c38374",
      "incomplete_value": true,
      "site": "00c38378",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:e78:8"
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
      "definition_site": "00c38400",
      "incomplete_value": true,
      "site": "00c38414",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:f50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c38364",
      "incomplete_value": true,
      "site": "00c38378",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:e80:8"
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
      "00c383fc",
      "READ",
      [
        "storage",
        "00c9be78",
        null,
        "pointer"
      ]
    ],
    [
      "00c38400",
      "READ",
      [
        "storage",
        "00c9be80",
        null,
        "pointer"
      ]
    ],
    [
      "00c38400",
      "PARAM",
      [
        "storage",
        "00c969d0",
        "__cxxabiv1::__class_type_info::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00c383fc",
      "READ",
      [
        "storage",
        "00c9bf48",
        null,
        "pointer"
      ]
    ],
    [
      "00c38400",
      "READ",
      [
        "storage",
        "00c9bf50",
        null,
        "pointer"
      ]
    ],
    [
      "00c38400",
      "PARAM",
      [
        "storage",
        "00c96aa0",
        "__cxxabiv1::__class_type_info::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c38378 ["INT_ADD", "register:40f0:8", ["const:c38378:8", "const:4:8"]]
- 00c38378 ["CALL", null, ["callee:00c586e0:8"]]
+ 00c38414 ["INT_ADD", "register:40f0:8", ["const:c38414:8", "const:4:8"]]
+ 00c38414 ["CALL", null, ["callee:00c586e0:8"]]
- 00c38360 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e78:8"]]
- 00c38360 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c383fc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:f48:8"]]
+ 00c383fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c38364 ["INT_ADD", "tmp:0:8", ["register:4010:8", "const:e80:8"]]
- 00c38364 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c38400 ["INT_ADD", "tmp:0:8", ["register:4010:8", "const:f50:8"]]
+ 00c38400 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-114dad94b5830ebeb4aa95d85d30584e"></a>

### [`00c38914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c38914.md) → [`00c389b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c389b0.md) FUN_00c389b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md) [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md) [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c38a10",
      "incomplete_value": true,
      "site": "00c38a14",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:f48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c38974",
      "incomplete_value": true,
      "site": "00c38978",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:e78:8"
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
      "definition_site": "00c38a00",
      "incomplete_value": true,
      "site": "00c38a14",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:f58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c38964",
      "incomplete_value": true,
      "site": "00c38978",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:e88:8"
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
      "00c389fc",
      "READ",
      [
        "storage",
        "00c9be78",
        null,
        "pointer"
      ]
    ],
    [
      "00c38a00",
      "READ",
      [
        "storage",
        "00c9be88",
        null,
        "pointer"
      ]
    ],
    [
      "00c38a00",
      "PARAM",
      [
        "storage",
        "00c969e8",
        "__cxxabiv1::__pbase_type_info::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00c389fc",
      "READ",
      [
        "storage",
        "00c9bf48",
        null,
        "pointer"
      ]
    ],
    [
      "00c38a00",
      "READ",
      [
        "storage",
        "00c9bf58",
        null,
        "pointer"
      ]
    ],
    [
      "00c38a00",
      "PARAM",
      [
        "storage",
        "00c96ab8",
        "__cxxabiv1::__pbase_type_info::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c38978 ["INT_ADD", "register:40f0:8", ["const:c38978:8", "const:4:8"]]
- 00c38978 ["CALL", null, ["callee:00c586e0:8"]]
+ 00c38a14 ["INT_ADD", "register:40f0:8", ["const:c38a14:8", "const:4:8"]]
+ 00c38a14 ["CALL", null, ["callee:00c586e0:8"]]
- 00c38940 ["INT_ADD", "register:40f0:8", ["const:c38940:8", "const:4:8"]]
- 00c38940 ["CALL", null, ["callee:00c5b920:8"]]
+ 00c389dc ["INT_ADD", "register:40f0:8", ["const:c389dc:8", "const:4:8"]]
+ 00c389dc ["CALL", null, ["callee:00c5b920:8"]]
- 00c38960 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e78:8"]]
- 00c38960 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c389fc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:f48:8"]]
+ 00c389fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-28ab724ddf11eac64dbd734fe9086a2e"></a>

### [`00c389c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c389c0.md) → [`00c38a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c38a5c.md) FUN_00c38a5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c38c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c38c7c.md) [`00c38d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c38d70.md) [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md) [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c38d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c38d18.md) [`00c38e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c38e0c.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md) [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 89.14% / 新版 89.14%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 11件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c38a88",
      "incomplete_value": true,
      "site": "00c38a8c",
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
      "definition_site": "00c389ec",
      "incomplete_value": true,
      "site": "00c389f0",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c38b9c",
      "incomplete_value": true,
      "site": "00c38ba0",
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
                "register:4040:8"
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
      "definition_site": "00c38b00",
      "incomplete_value": true,
      "site": "00c38b04",
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
                "register:4040:8"
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
    "ordinal": 13,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c38aec",
      "incomplete_value": true,
      "site": "00c38af8",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4008:8"
              ],
              [
                "leaf",
                "const:f48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c38a50",
      "incomplete_value": true,
      "site": "00c38a5c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4008:8"
              ],
              [
                "leaf",
                "const:e78:8"
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
      "00c38a84",
      "READ",
      [
        "storage",
        "00c9be90",
        null,
        "pointer"
      ]
    ],
    [
      "00c38aec",
      "READ",
      [
        "storage",
        "00c9be78",
        null,
        "pointer"
      ]
    ],
    [
      "00c38aec",
      "PARAM",
      [
        "storage",
        "00c969b8",
        "__cxxabiv1::__shim_type_info::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00c38a84",
      "READ",
      [
        "storage",
        "00c9bf60",
        null,
        "pointer"
      ]
    ],
    [
      "00c38aec",
      "READ",
      [
        "storage",
        "00c9bf48",
        null,
        "pointer"
      ]
    ],
    [
      "00c38aec",
      "PARAM",
      [
        "storage",
        "00c96a88",
        "__cxxabiv1::__shim_type_info::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c38a5c ["INT_ADD", "register:40f0:8", ["const:c38a5c:8", "const:4:8"]]
- 00c38a5c ["CALL", null, ["callee:00c586e0:8"]]
+ 00c38af8 ["INT_ADD", "register:40f0:8", ["const:c38af8:8", "const:4:8"]]
+ 00c38af8 ["CALL", null, ["callee:00c586e0:8"]]
- 00c38a8c ["INT_ADD", "tmp:0:8", ["register:4010:8", "const:e98:8"]]
- 00c38a8c ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c38b28 ["INT_ADD", "tmp:0:8", ["register:4010:8", "const:f68:8"]]
+ 00c38b28 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
- 00c38a94 ["INT_ADD", "register:40f0:8", ["const:c38a94:8", "const:4:8"]]
- 00c38a94 ["CALL", null, ["callee:00c586e0:8"]]
+ 00c38b30 ["INT_ADD", "register:40f0:8", ["const:c38b30:8", "const:4:8"]]
+ 00c38b30 ["CALL", null, ["callee:00c586e0:8"]]
~~~


<a id="compare-c9671aae7b4d0c61f9da69e53570699b"></a>

### [`00c38e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c38e10.md) → [`00c38eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c38eac.md) FUN_00c38eac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md) [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md) [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 86.81% / 新版 86.81%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c38ed0",
      "incomplete_value": true,
      "site": "00c38ed4",
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
                "register:40a8:8"
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
      "definition_site": "00c38e34",
      "incomplete_value": true,
      "site": "00c38e38",
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
                "register:40a8:8"
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
      "definition_site": "00c38f1c",
      "incomplete_value": true,
      "site": "00c38f2c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:f48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c38e80",
      "incomplete_value": true,
      "site": "00c38e90",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:e78:8"
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
      "definition_site": "00c38f28",
      "incomplete_value": true,
      "site": "00c38f2c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:f78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c38e8c",
      "incomplete_value": true,
      "site": "00c38e90",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
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
      "00c38ecc",
      "READ",
      [
        "storage",
        "00c9be90",
        null,
        "pointer"
      ]
    ],
    [
      "00c38f1c",
      "READ",
      [
        "storage",
        "00c9be78",
        null,
        "pointer"
      ]
    ],
    [
      "00c38f1c",
      "PARAM",
      [
        "storage",
        "00c969b8",
        "__cxxabiv1::__shim_type_info::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00c38ecc",
      "READ",
      [
        "storage",
        "00c9bf60",
        null,
        "pointer"
      ]
    ],
    [
      "00c38f1c",
      "READ",
      [
        "storage",
        "00c9bf48",
        null,
        "pointer"
      ]
    ],
    [
      "00c38f1c",
      "PARAM",
      [
        "storage",
        "00c96a88",
        "__cxxabiv1::__shim_type_info::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c38e5c ["INT_ADD", "register:40f0:8", ["const:c38e5c:8", "const:4:8"]]
- 00c38e5c ["CALL", null, ["callee:00c5b920:8"]]
+ 00c38ef8 ["INT_ADD", "register:40f0:8", ["const:c38ef8:8", "const:4:8"]]
+ 00c38ef8 ["CALL", null, ["callee:00c5b920:8"]]
- 00c38e90 ["INT_ADD", "register:40f0:8", ["const:c38e90:8", "const:4:8"]]
- 00c38e90 ["CALL", null, ["callee:00c586e0:8"]]
+ 00c38f2c ["INT_ADD", "register:40f0:8", ["const:c38f2c:8", "const:4:8"]]
+ 00c38f2c ["CALL", null, ["callee:00c586e0:8"]]
- 00c38ec0 ["INT_ADD", "register:40f0:8", ["const:c38ec0:8", "const:4:8"]]
- 00c38ec0 ["CALL", null, ["callee:00c586e0:8"]]
+ 00c38f5c ["INT_ADD", "register:40f0:8", ["const:c38f5c:8", "const:4:8"]]
+ 00c38f5c ["CALL", null, ["callee:00c586e0:8"]]
~~~


<a id="compare-fb7410dd910c2e1ff45c48747a2b75c4"></a>

### [`00c39a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c39/00c39a80.md) → [`00c39b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c39/00c39b1c.md) __cxa_demangle

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5edf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5edf0.md) · 呼出先 10件 [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md) [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) [`00c3ac18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3ac18.md) [`00c3accc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3accc.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 1件 [`00c5eec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eec0.md) · 呼出先 10件 [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md) [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) [`00c3acb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3acb4.md) [`00c3ad68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3ad68.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.35% / 新版 98.35%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c39e64",
      "incomplete_value": false,
      "site": "00c39e64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c99000:8"
          ],
          [
            "leaf",
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c39dc8",
      "incomplete_value": false,
      "site": "00c39dc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c99000:8"
          ],
          [
            "leaf",
            "const:7e0:8"
          ]
        ]
      ]
    },
    "ordinal": 90,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c39fbc",
      "incomplete_value": false,
      "site": "00c39fc8",
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
            "const:dff:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c39f20",
      "incomplete_value": false,
      "site": "00c39f2c",
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
            "const:e53:8"
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
      "definition_site": "00c3a0a4",
      "incomplete_value": false,
      "site": "00c3a0bc",
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
            "const:e95:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3a008",
      "incomplete_value": false,
      "site": "00c3a020",
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
            "const:ee2:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c39e64",
      "DATA",
      [
        "storage",
        "00c997e0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c39fbc",
      "PARAM",
      [
        "storage",
        "002b9e53",
        null,
        "string"
      ]
    ],
    [
      "00c3a0a4",
      "PARAM",
      [
        "storage",
        "002a0ee2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c39e64",
      "DATA",
      [
        "storage",
        "00c998b0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c39fbc",
      "PARAM",
      [
        "storage",
        "002b9dff",
        null,
        "string"
      ]
    ],
    [
      "00c3a0a4",
      "PARAM",
      [
        "storage",
        "002a0e95",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c39f2c ["INT_ADD", "register:40f0:8", ["const:c39f2c:8", "const:4:8"]]
- 00c39f2c ["CALL", null, ["callee:00c3acb4:8"]]
+ 00c39fc8 ["INT_ADD", "register:40f0:8", ["const:c39fc8:8", "const:4:8"]]
+ 00c39fc8 ["CALL", null, ["callee:00c3acb4:8"]]
- 00c3a020 ["INT_ADD", "register:40f0:8", ["const:c3a020:8", "const:4:8"]]
- 00c3a020 ["CALL", null, ["callee:00c380a8:8"]]
+ 00c3a0bc ["INT_ADD", "register:40f0:8", ["const:c3a0bc:8", "const:4:8"]]
+ 00c3a0bc ["CALL", null, ["callee:00c380a8:8"]]
- 00c39adc ["INT_ADD", "register:40f0:8", ["const:c39adc:8", "const:4:8"]]
- 00c39adc ["CALL", null, ["callee:00c580b0:8"]]
+ 00c39b78 ["INT_ADD", "register:40f0:8", ["const:c39b78:8", "const:4:8"]]
+ 00c39b78 ["CALL", null, ["callee:00c580b0:8"]]
~~~


<a id="compare-1b87248956e89048682da8299d78672c"></a>

### [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) → [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) FUN_00c3a214

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`00c39a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c39/00c39a80.md) [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) [`00c3c20c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3c20c.md) [`00c3c940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3c940.md) [`00c41750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c41/00c41750.md) · 呼出先 31件 [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md) [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) [`00c3ab8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3ab8c.md) [`00c3ac18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3ac18.md) [`00c3accc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3accc.md)
- 新版 呼出元 5件 [`00c39b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c39/00c39b1c.md) [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) [`00c3c2a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3c2a8.md) [`00c3c9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3c9dc.md) [`00c417ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c41/00c417ec.md) · 呼出先 31件 [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md) [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) [`00c3ac28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3ac28.md) [`00c3acb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3acb4.md) [`00c3ad68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3ad68.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.26% / 新版 98.26%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3a43c",
      "incomplete_value": false,
      "site": "00c3a43c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3a3a0",
      "incomplete_value": false,
      "site": "00c3a3a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3a880",
      "incomplete_value": false,
      "site": "00c3a880",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c99000:8"
          ],
          [
            "leaf",
            "const:7d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3a7e4",
      "incomplete_value": false,
      "site": "00c3a7e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c99000:8"
          ],
          [
            "leaf",
            "const:700:8"
          ]
        ]
      ]
    },
    "ordinal": 67,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c3aa84",
      "incomplete_value": false,
      "site": "00c3aa90",
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
            "const:5f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3a9e8",
      "incomplete_value": false,
      "site": "00c3a9f4",
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
            "const:1f:8"
          ]
        ]
      ]
    },
    "ordinal": 42,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c3a43c",
      "DATA",
      [
        "storage",
        "00c97550",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3a6e0",
      "DATA",
      [
        "storage",
        "00c97550",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3a704",
      "DATA",
      [
        "storage",
        "002b090e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c3a43c",
      "DATA",
      [
        "storage",
        "00c97620",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3a6e0",
      "DATA",
      [
        "storage",
        "00c97620",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3a704",
      "DATA",
      [
        "storage",
        "002b08b2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3a9f4 ["INT_ADD", "register:40f0:8", ["const:c3a9f4:8", "const:4:8"]]
- 00c3a9f4 ["CALL", null, ["callee:00c3acb4:8"]]
+ 00c3aa90 ["INT_ADD", "register:40f0:8", ["const:c3aa90:8", "const:4:8"]]
+ 00c3aa90 ["CALL", null, ["callee:00c3acb4:8"]]
- 00c3ab3c ["INT_ADD", "register:40f0:8", ["const:c3ab3c:8", "const:4:8"]]
- 00c3ab3c ["CALL", null, ["callee:00c380a8:8"]]
+ 00c3abd8 ["INT_ADD", "register:40f0:8", ["const:c3abd8:8", "const:4:8"]]
+ 00c3abd8 ["CALL", null, ["callee:00c380a8:8"]]
- 00c3a1a8 ["INT_ADD", "register:40f0:8", ["const:c3a1a8:8", "const:4:8"]]
- 00c3a1a8 ["CALL", null, ["callee:00c3c100:8"]]
+ 00c3a244 ["INT_ADD", "register:40f0:8", ["const:c3a244:8", "const:4:8"]]
+ 00c3a244 ["CALL", null, ["callee:00c3c100:8"]]
~~~


<a id="compare-06b95c1c0d03121ae7ca0bf575a8ce1c"></a>

### [`00c3ac18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3ac18.md) → [`00c3acb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3acb4.md) FUN_00c3acb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 2件 [`00c39a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c39/00c39a80.md) [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) · 呼出先 3件 [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md)
- 新版 呼出元 2件 [`00c39b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c39/00c39b1c.md) [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) · 呼出先 3件 [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3ad24",
      "incomplete_value": false,
      "site": "00c3ad24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3ac88",
      "incomplete_value": false,
      "site": "00c3ac88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "00c3ad24",
      "DATA",
      [
        "storage",
        "00c97550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00c3ad24",
      "DATA",
      [
        "storage",
        "00c97620",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3ac50 ["INT_ADD", "register:40f0:8", ["const:c3ac50:8", "const:4:8"]]
- 00c3ac50 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c3acec ["INT_ADD", "register:40f0:8", ["const:c3acec:8", "const:4:8"]]
+ 00c3acec ["CALL", null, ["callee:00c5a0f0:8"]]
- 00c3ac78 ["INT_ADD", "register:40f0:8", ["const:c3ac78:8", "const:4:8"]]
- 00c3ac78 ["CALL", null, ["callee:00c580b0:8"]]
+ 00c3ad14 ["INT_ADD", "register:40f0:8", ["const:c3ad14:8", "const:4:8"]]
+ 00c3ad14 ["CALL", null, ["callee:00c580b0:8"]]
- 00c3ac80 ["COPY", "tmp:0:8", ["const:550:8"]]
- 00c3ac80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3ac80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3ac80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3ad1c ["COPY", "tmp:0:8", ["const:620:8"]]
+ 00c3ad1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3ad1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3ad1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-211f6ba64d3f35217ee792c55bed08f2"></a>

### [`00c3accc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3accc.md) → [`00c3ad68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3ad68.md) FUN_00c3ad68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 15件 [`00c39a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c39/00c39a80.md) [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) [`00c3accc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3accc.md) [`00c3c940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3c940.md) [`00c3fd7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3f/00c3fd7c.md) · 呼出先 38件 [`00c3ab8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3ab8c.md) [`00c3accc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3accc.md) [`00c3c20c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3c20c.md) [`00c3cc68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3cc68.md) [`00c3e1dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3e/00c3e1dc.md)
- 新版 呼出元 15件 [`00c39b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c39/00c39b1c.md) [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) [`00c3ad68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3ad68.md) [`00c3c9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3c9dc.md) [`00c3fe18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3f/00c3fe18.md) · 呼出先 38件 [`00c3ac28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3ac28.md) [`00c3ad68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3ad68.md) [`00c3c2a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3c2a8.md) [`00c3cd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3cd04.md) [`00c3e278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3e/00c3e278.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.14% / 新版 93.14%

優先判定に残った影響 `store_value` 21件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3af4c",
      "incomplete_value": false,
      "site": "00c3af4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:710:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3aeb0",
      "incomplete_value": false,
      "site": "00c3aeb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:640:8"
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3afbc",
      "incomplete_value": false,
      "site": "00c3afbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:710:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3af20",
      "incomplete_value": false,
      "site": "00c3af20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:640:8"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3b02c",
      "incomplete_value": false,
      "site": "00c3b02c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:710:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3af90",
      "incomplete_value": false,
      "site": "00c3af90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:640:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c3adb4",
      "DATA",
      [
        "storage",
        "003129e0",
        "switchD_00c3ad20::switchdataD_003129e0",
        "ushort"
      ]
    ],
    [
      "00c3aecc",
      "DATA",
      [
        "storage",
        "00c97640",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3af4c",
      "DATA",
      [
        "storage",
        "00c97640",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00c3adb4",
      "DATA",
      [
        "storage",
        "00312a20",
        "switchD_00c3adbc::switchdataD_00312a20",
        "ushort"
      ]
    ],
    [
      "00c3aecc",
      "DATA",
      [
        "storage",
        "00c97710",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3af4c",
      "DATA",
      [
        "storage",
        "00c97710",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3b050 ["INT_ADD", "register:40f0:8", ["const:c3b050:8", "const:4:8"]]
- 00c3b050 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c3b0ec ["INT_ADD", "register:40f0:8", ["const:c3b0ec:8", "const:4:8"]]
+ 00c3b0ec ["CALL", null, ["callee:00c5a0f0:8"]]
- 00c3b8d4 ["COPY", "tmp:0:8", ["const:640:8"]]
- 00c3b8d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3b8d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3b8d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3b970 ["COPY", "tmp:0:8", ["const:710:8"]]
+ 00c3b970 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3b970 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3b970 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c3bc4c ["INT_ADD", "register:40f0:8", ["const:c3bc4c:8", "const:4:8"]]
- 00c3bc4c ["CALL", null, ["callee:00c3cd04:8"]]
+ 00c3bce8 ["INT_ADD", "register:40f0:8", ["const:c3bce8:8", "const:4:8"]]
+ 00c3bce8 ["CALL", null, ["callee:00c3cd04:8"]]
~~~


<a id="compare-56052fa08105371e10b61609805cfda5"></a>

### [`00c3c20c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3c20c.md) → [`00c3c2a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3c2a8.md) FUN_00c3c2a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) [`00c3accc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3accc.md) [`00c3c20c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3c20c.md) [`00c3f310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3f/00c3f310.md) [`00c429c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c42/00c429c0.md) · 呼出先 19件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) [`00c3ab8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3ab8c.md) [`00c3c064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3c064.md) [`00c3c20c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3c20c.md) [`00c3d030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3d/00c3d030.md)
- 新版 呼出元 7件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) [`00c3ad68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3ad68.md) [`00c3c2a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3c2a8.md) [`00c3f3ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3f/00c3f3ac.md) [`00c42a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c42/00c42a5c.md) · 呼出先 19件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) [`00c3ac28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3ac28.md) [`00c3c100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3c100.md) [`00c3c2a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3c2a8.md) [`00c3d0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3d/00c3d0cc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.24% / 新版 98.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3c6a4",
      "incomplete_value": false,
      "site": "00c3c6a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:710:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3c608",
      "incomplete_value": false,
      "site": "00c3c608",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:640:8"
          ]
        ]
      ]
    },
    "ordinal": 44,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3c6c8",
      "incomplete_value": false,
      "site": "00c3c6c8",
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
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3c62c",
      "incomplete_value": false,
      "site": "00c3c62c",
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
            "const:d84:8"
          ]
        ]
      ]
    },
    "ordinal": 47,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3c990",
      "incomplete_value": false,
      "site": "00c3c990",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c99000:8"
          ],
          [
            "leaf",
            "const:610:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3c8f4",
      "incomplete_value": false,
      "site": "00c3c8f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c99000:8"
          ],
          [
            "leaf",
            "const:540:8"
          ]
        ]
      ]
    },
    "ordinal": 74,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c3c408",
      "PARAM",
      [
        "storage",
        "002b18fa",
        null,
        "string"
      ]
    ],
    [
      "00c3c588",
      "DATA",
      [
        "storage",
        "00c99540",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3c6a4",
      "DATA",
      [
        "storage",
        "00c97640",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00c3c408",
      "PARAM",
      [
        "storage",
        "002b189e",
        null,
        "string"
      ]
    ],
    [
      "00c3c588",
      "DATA",
      [
        "storage",
        "00c99610",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3c6a4",
      "DATA",
      [
        "storage",
        "00c97710",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3c374 ["INT_ADD", "register:40f0:8", ["const:c3c374:8", "const:4:8"]]
- 00c3c374 ["CALL", null, ["callee:00c4d18c:8"]]
+ 00c3c410 ["INT_ADD", "register:40f0:8", ["const:c3c410:8", "const:4:8"]]
+ 00c3c410 ["CALL", null, ["callee:00c4d18c:8"]]
- 00c3c858 ["INT_ADD", "register:40f0:8", ["const:c3c858:8", "const:4:8"]]
- 00c3c858 ["CALL", null, ["callee:00c3e660:8"]]
+ 00c3c8f4 ["INT_ADD", "register:40f0:8", ["const:c3c8f4:8", "const:4:8"]]
+ 00c3c8f4 ["CALL", null, ["callee:00c3e660:8"]]
- 00c3c29c ["INT_ADD", "register:40f0:8", ["const:c3c29c:8", "const:4:8"]]
- 00c3c29c ["CALL", null, ["callee:00c3e4f0:8"]]
+ 00c3c338 ["INT_ADD", "register:40f0:8", ["const:c3c338:8", "const:4:8"]]
+ 00c3c338 ["CALL", null, ["callee:00c3e4f0:8"]]
~~~


<a id="compare-e479cad09bb13c653e7d32cf69a085b1"></a>

### [`00c3c940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3c940.md) → [`00c3c9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3c9dc.md) FUN_00c3c9dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) [`00c3c940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3c940.md) [`00c3e5c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3e/00c3e5c4.md) [`00c3fd7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3f/00c3fd7c.md) · 呼出先 13件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) [`00c3accc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3accc.md) [`00c3c940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3c940.md) [`00c3cde0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3cde0.md) [`00c3fd7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3f/00c3fd7c.md)
- 新版 呼出元 4件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) [`00c3c9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3c9dc.md) [`00c3e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3e/00c3e660.md) [`00c3fe18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3f/00c3fe18.md) · 呼出先 13件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) [`00c3ad68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3ad68.md) [`00c3c9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3c9dc.md) [`00c3ce7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3ce7c.md) [`00c3fe18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3f/00c3fe18.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.02% / 新版 98.02%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c3cc54",
      "incomplete_value": false,
      "site": "00c3cc58",
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
            "const:232:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3cbb8",
      "incomplete_value": false,
      "site": "00c3cbbc",
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
            "const:28e:8"
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
      "00c3cc0c",
      "DATA",
      [
        "storage",
        "00c995b0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3cc0c",
      "DATA",
      [
        "storage",
        "00c99620",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3cc54",
      "PARAM",
      [
        "storage",
        "002a528e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c3cc0c",
      "DATA",
      [
        "storage",
        "00c99680",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3cc0c",
      "DATA",
      [
        "storage",
        "00c996f0",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3cc54",
      "PARAM",
      [
        "storage",
        "002a5232",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3cbbc ["INT_ADD", "register:40f0:8", ["const:c3cbbc:8", "const:4:8"]]
- 00c3cbbc ["CALL", null, ["callee:00c580a0:8"]]
+ 00c3cc58 ["INT_ADD", "register:40f0:8", ["const:c3cc58:8", "const:4:8"]]
+ 00c3cc58 ["CALL", null, ["callee:00c580a0:8"]]
- 00c3c9b0 ["INT_ADD", "register:40f0:8", ["const:c3c9b0:8", "const:4:8"]]
- 00c3c9b0 ["CALL", null, ["callee:00c3a214:8"]]
+ 00c3ca4c ["INT_ADD", "register:40f0:8", ["const:c3ca4c:8", "const:4:8"]]
+ 00c3ca4c ["CALL", null, ["callee:00c3a214:8"]]
- 00c3c9d8 ["INT_ADD", "register:40f0:8", ["const:c3c9d8:8", "const:4:8"]]
- 00c3c9d8 ["CALL", null, ["callee:00c3fe18:8"]]
+ 00c3ca74 ["INT_ADD", "register:40f0:8", ["const:c3ca74:8", "const:4:8"]]
+ 00c3ca74 ["CALL", null, ["callee:00c3fe18:8"]]
~~~


<a id="compare-0ca3dab5e7540935dfe761ac33973005"></a>

### [`00c3cd40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3cd40.md) → [`00c3cddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3cddc.md) FUN_00c3cddc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) · 呼出先 2件 [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md)
- 新版 呼出元 1件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) · 呼出先 2件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3ce40",
      "incomplete_value": false,
      "site": "00c3ce40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c99000:8"
          ],
          [
            "leaf",
            "const:760:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3cda4",
      "incomplete_value": false,
      "site": "00c3cda4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c99000:8"
          ],
          [
            "leaf",
            "const:690:8"
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
      "00c3ce40",
      "DATA",
      [
        "storage",
        "00c99690",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00c3ce40",
      "DATA",
      [
        "storage",
        "00c99760",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3cd74 ["INT_ADD", "register:40f0:8", ["const:c3cd74:8", "const:4:8"]]
- 00c3cd74 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c3ce10 ["INT_ADD", "register:40f0:8", ["const:c3ce10:8", "const:4:8"]]
+ 00c3ce10 ["CALL", null, ["callee:00c5a0f0:8"]]
- 00c3cd98 ["COPY", "tmp:0:8", ["const:690:8"]]
- 00c3cd98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3cd98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3cd98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3ce34 ["COPY", "tmp:0:8", ["const:760:8"]]
+ 00c3ce34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3ce34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3ce34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c3cddc ["INT_ADD", "register:40f0:8", ["const:c3cddc:8", "const:4:8"]]
- 00c3cddc ["CALL", null, ["callee:00c580f0:8"]]
+ 00c3ce78 ["INT_ADD", "register:40f0:8", ["const:c3ce78:8", "const:4:8"]]
+ 00c3ce78 ["CALL", null, ["callee:00c580f0:8"]]
~~~


<a id="compare-f95ccfdedcab62063e7438ef1e6ff9fa"></a>

### [`00c3cde0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3cde0.md) → [`00c3ce7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3ce7c.md) FUN_00c3ce7c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 10件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) [`00c3c940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3c940.md) [`00c3e5c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3e/00c3e5c4.md) [`00c3f310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3f/00c3f310.md) [`00c3fd7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3f/00c3fd7c.md) · 呼出先 4件 [`00c3800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c38/00c3800c.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md)
- 新版 呼出元 10件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) [`00c3c9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3c9dc.md) [`00c3e660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3e/00c3e660.md) [`00c3f3ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3f/00c3f3ac.md) [`00c3fe18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3f/00c3fe18.md) · 呼出先 4件 [`00c380a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c380a8.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c3cf98",
      "incomplete_value": false,
      "site": "00c3cfb0",
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
            "const:e95:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3cefc",
      "incomplete_value": false,
      "site": "00c3cf14",
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
            "const:ee2:8"
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
      "definition_site": "00c3cfa0",
      "incomplete_value": false,
      "site": "00c3cfb0",
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
            "const:8c7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3cf04",
      "incomplete_value": false,
      "site": "00c3cf14",
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
            "const:896:8"
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
      "definition_site": "00c3cfa8",
      "incomplete_value": false,
      "site": "00c3cfb0",
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
    "old": {
      "definition_site": "00c3cf0c",
      "incomplete_value": false,
      "site": "00c3cf14",
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
            "const:3ea:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c3cf98",
      "PARAM",
      [
        "storage",
        "002a0ee2",
        null,
        "string"
      ]
    ],
    [
      "00c3cfa0",
      "PARAM",
      [
        "storage",
        "002b2896",
        null,
        "string"
      ]
    ],
    [
      "00c3cfa8",
      "PARAM",
      [
        "storage",
        "002a63ea",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00c3cf98",
      "PARAM",
      [
        "storage",
        "002a0e95",
        null,
        "string"
      ]
    ],
    [
      "00c3cfa0",
      "PARAM",
      [
        "storage",
        "002b28c7",
        null,
        "string"
      ]
    ],
    [
      "00c3cfa8",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3cf14 ["INT_ADD", "register:40f0:8", ["const:c3cf14:8", "const:4:8"]]
- 00c3cf14 ["CALL", null, ["callee:00c380a8:8"]]
+ 00c3cfb0 ["INT_ADD", "register:40f0:8", ["const:c3cfb0:8", "const:4:8"]]
+ 00c3cfb0 ["CALL", null, ["callee:00c380a8:8"]]
- 00c3cf34 ["INT_ADD", "register:40f0:8", ["const:c3cf34:8", "const:4:8"]]
- 00c3cf34 ["CALL", null, ["callee:00c380a8:8"]]
+ 00c3cfd0 ["INT_ADD", "register:40f0:8", ["const:c3cfd0:8", "const:4:8"]]
+ 00c3cfd0 ["CALL", null, ["callee:00c380a8:8"]]
- 00c3ce4c ["INT_ADD", "register:40f0:8", ["const:c3ce4c:8", "const:4:8"]]
- 00c3ce4c ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c3cee8 ["INT_ADD", "register:40f0:8", ["const:c3cee8:8", "const:4:8"]]
+ 00c3cee8 ["CALL", null, ["callee:00c5a0f0:8"]]
~~~


<a id="compare-063442c24140fa334e2f9894025cfd39"></a>

### [`00c3cf3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3c/00c3cf3c.md) → [`00c3cfd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3c/00c3cfd8.md) FUN_00c3cfd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) · 呼出先 2件 [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md)
- 新版 呼出元 1件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) · 呼出先 2件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3d060",
      "incomplete_value": false,
      "site": "00c3d060",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c99000:8"
          ],
          [
            "leaf",
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3cfc4",
      "incomplete_value": false,
      "site": "00c3cfc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c99000:8"
          ],
          [
            "leaf",
            "const:770:8"
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
      "00c3d060",
      "DATA",
      [
        "storage",
        "00c99770",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00c3d060",
      "DATA",
      [
        "storage",
        "00c99840",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3cf94 ["INT_ADD", "register:40f0:8", ["const:c3cf94:8", "const:4:8"]]
- 00c3cf94 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c3d030 ["INT_ADD", "register:40f0:8", ["const:c3d030:8", "const:4:8"]]
+ 00c3d030 ["CALL", null, ["callee:00c5a0f0:8"]]
- 00c3cfb8 ["COPY", "tmp:0:8", ["const:770:8"]]
- 00c3cfb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3cfb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3cfb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d054 ["COPY", "tmp:0:8", ["const:840:8"]]
+ 00c3d054 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d054 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d054 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c3d02c ["INT_ADD", "register:40f0:8", ["const:c3d02c:8", "const:4:8"]]
- 00c3d02c ["CALL", null, ["callee:00c580f0:8"]]
+ 00c3d0c8 ["INT_ADD", "register:40f0:8", ["const:c3d0c8:8", "const:4:8"]]
+ 00c3d0c8 ["CALL", null, ["callee:00c580f0:8"]]
~~~


<a id="compare-99712768a647bc428e66a0490bddfd5c"></a>

### [`00c3d210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3d/00c3d210.md) → [`00c3d2ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3d/00c3d2ac.md) FUN_00c3d2ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) · 呼出先 2件 [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md)
- 新版 呼出元 1件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) · 呼出先 2件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3d310",
      "incomplete_value": false,
      "site": "00c3d310",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3d274",
      "incomplete_value": false,
      "site": "00c3d274",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "definition_site": "00c3d334",
      "incomplete_value": false,
      "site": "00c3d334",
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
            "const:e9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3d298",
      "incomplete_value": false,
      "site": "00c3d298",
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
            "const:13d:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c3d310",
      "DATA",
      [
        "storage",
        "00c97550",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3d334",
      "DATA",
      [
        "storage",
        "002bb13d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c3d310",
      "DATA",
      [
        "storage",
        "00c97620",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3d334",
      "DATA",
      [
        "storage",
        "002bb0e9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3d244 ["INT_ADD", "register:40f0:8", ["const:c3d244:8", "const:4:8"]]
- 00c3d244 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c3d2e0 ["INT_ADD", "register:40f0:8", ["const:c3d2e0:8", "const:4:8"]]
+ 00c3d2e0 ["CALL", null, ["callee:00c5a0f0:8"]]
- 00c3d268 ["COPY", "tmp:0:8", ["const:550:8"]]
- 00c3d268 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d268 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d268 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d304 ["COPY", "tmp:0:8", ["const:620:8"]]
+ 00c3d304 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d304 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d304 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c3d290 ["COPY", "tmp:0:8", ["const:13d:8"]]
- 00c3d290 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d290 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d290 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d32c ["COPY", "tmp:0:8", ["const:e9:8"]]
+ 00c3d32c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d32c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d32c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-74f54bc7ba2c52989b1fbd8b11778743"></a>

### [`00c3d2c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3d/00c3d2c0.md) → [`00c3d35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3d/00c3d35c.md) FUN_00c3d35c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) · 呼出先 2件 [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md)
- 新版 呼出元 1件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) · 呼出先 2件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3d3c0",
      "incomplete_value": false,
      "site": "00c3d3c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3d324",
      "incomplete_value": false,
      "site": "00c3d324",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "definition_site": "00c3d3e4",
      "incomplete_value": false,
      "site": "00c3d3e4",
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
            "const:875:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3d348",
      "incomplete_value": false,
      "site": "00c3d348",
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
            "const:8d1:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c3d3c0",
      "DATA",
      [
        "storage",
        "00c97550",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3d3e4",
      "DATA",
      [
        "storage",
        "002b18d1",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c3d3c0",
      "DATA",
      [
        "storage",
        "00c97620",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3d3e4",
      "DATA",
      [
        "storage",
        "002b1875",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3d2f4 ["INT_ADD", "register:40f0:8", ["const:c3d2f4:8", "const:4:8"]]
- 00c3d2f4 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c3d390 ["INT_ADD", "register:40f0:8", ["const:c3d390:8", "const:4:8"]]
+ 00c3d390 ["CALL", null, ["callee:00c5a0f0:8"]]
- 00c3d318 ["COPY", "tmp:0:8", ["const:550:8"]]
- 00c3d318 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d318 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d318 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d3b4 ["COPY", "tmp:0:8", ["const:620:8"]]
+ 00c3d3b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d3b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d3b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c3d340 ["COPY", "tmp:0:8", ["const:8d1:8"]]
- 00c3d340 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d340 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d340 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d3dc ["COPY", "tmp:0:8", ["const:875:8"]]
+ 00c3d3dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d3dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d3dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-165d3c959032f7360fff1ca58b8fcc42"></a>

### [`00c3d370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3d/00c3d370.md) → [`00c3d40c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3d/00c3d40c.md) FUN_00c3d40c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) · 呼出先 2件 [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md)
- 新版 呼出元 1件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) · 呼出先 2件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3d470",
      "incomplete_value": false,
      "site": "00c3d470",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3d3d4",
      "incomplete_value": false,
      "site": "00c3d3d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "definition_site": "00c3d494",
      "incomplete_value": false,
      "site": "00c3d494",
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
            "const:e1e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3d3f8",
      "incomplete_value": false,
      "site": "00c3d3f8",
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
            "const:e6b:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c3d470",
      "DATA",
      [
        "storage",
        "00c97550",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3d494",
      "DATA",
      [
        "storage",
        "0029fe6b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c3d470",
      "DATA",
      [
        "storage",
        "00c97620",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3d494",
      "DATA",
      [
        "storage",
        "0029fe1e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3d3a4 ["INT_ADD", "register:40f0:8", ["const:c3d3a4:8", "const:4:8"]]
- 00c3d3a4 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c3d440 ["INT_ADD", "register:40f0:8", ["const:c3d440:8", "const:4:8"]]
+ 00c3d440 ["CALL", null, ["callee:00c5a0f0:8"]]
- 00c3d3c8 ["COPY", "tmp:0:8", ["const:550:8"]]
- 00c3d3c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d3c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d3c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d464 ["COPY", "tmp:0:8", ["const:620:8"]]
+ 00c3d464 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d464 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d464 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c3d3f0 ["COPY", "tmp:0:8", ["const:e6b:8"]]
- 00c3d3f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d3f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d3f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d48c ["COPY", "tmp:0:8", ["const:e1e:8"]]
+ 00c3d48c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d48c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d48c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9132d90ac5304b9de5f7ac749ff7e57c"></a>

### [`00c3d420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3d/00c3d420.md) → [`00c3d4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3d/00c3d4bc.md) FUN_00c3d4bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) · 呼出先 2件 [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md)
- 新版 呼出元 1件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) · 呼出先 2件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3d520",
      "incomplete_value": false,
      "site": "00c3d520",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3d484",
      "incomplete_value": false,
      "site": "00c3d484",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "definition_site": "00c3d544",
      "incomplete_value": false,
      "site": "00c3d544",
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
            "const:8b9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3d4a8",
      "incomplete_value": false,
      "site": "00c3d4a8",
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
            "const:888:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c3d520",
      "DATA",
      [
        "storage",
        "00c97550",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3d544",
      "DATA",
      [
        "storage",
        "002b2888",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c3d520",
      "DATA",
      [
        "storage",
        "00c97620",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3d544",
      "DATA",
      [
        "storage",
        "002b28b9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3d454 ["INT_ADD", "register:40f0:8", ["const:c3d454:8", "const:4:8"]]
- 00c3d454 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c3d4f0 ["INT_ADD", "register:40f0:8", ["const:c3d4f0:8", "const:4:8"]]
+ 00c3d4f0 ["CALL", null, ["callee:00c5a0f0:8"]]
- 00c3d478 ["COPY", "tmp:0:8", ["const:550:8"]]
- 00c3d478 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d478 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d478 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d514 ["COPY", "tmp:0:8", ["const:620:8"]]
+ 00c3d514 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d514 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d514 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c3d4a0 ["COPY", "tmp:0:8", ["const:888:8"]]
- 00c3d4a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d4a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d4a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d53c ["COPY", "tmp:0:8", ["const:8b9:8"]]
+ 00c3d53c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d53c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d53c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1f0bd27fb44c031d8b2992ee72e808d8"></a>

### [`00c3d4d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3d/00c3d4d0.md) → [`00c3d56c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3d/00c3d56c.md) FUN_00c3d56c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) · 呼出先 2件 [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md)
- 新版 呼出元 1件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) · 呼出先 2件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3d5d0",
      "incomplete_value": false,
      "site": "00c3d5d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3d534",
      "incomplete_value": false,
      "site": "00c3d534",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "definition_site": "00c3d5f4",
      "incomplete_value": false,
      "site": "00c3d5f4",
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
            "const:9db:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3d558",
      "incomplete_value": false,
      "site": "00c3d558",
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
            "const:9ac:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c3d5d0",
      "DATA",
      [
        "storage",
        "00c97550",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3d5f4",
      "DATA",
      [
        "storage",
        "002a99ac",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c3d5d0",
      "DATA",
      [
        "storage",
        "00c97620",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3d5f4",
      "DATA",
      [
        "storage",
        "002a99db",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3d504 ["INT_ADD", "register:40f0:8", ["const:c3d504:8", "const:4:8"]]
- 00c3d504 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c3d5a0 ["INT_ADD", "register:40f0:8", ["const:c3d5a0:8", "const:4:8"]]
+ 00c3d5a0 ["CALL", null, ["callee:00c5a0f0:8"]]
- 00c3d528 ["COPY", "tmp:0:8", ["const:550:8"]]
- 00c3d528 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d528 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d528 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d5c4 ["COPY", "tmp:0:8", ["const:620:8"]]
+ 00c3d5c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d5c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d5c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c3d550 ["COPY", "tmp:0:8", ["const:9ac:8"]]
- 00c3d550 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d550 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d550 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d5ec ["COPY", "tmp:0:8", ["const:9db:8"]]
+ 00c3d5ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d5ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d5ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0b1279eb573ba089e095c827bfa384e5"></a>

### [`00c3d730`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3d/00c3d730.md) → [`00c3d7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3d/00c3d7cc.md) FUN_00c3d7cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00c3a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3a/00c3a178.md) · 呼出先 2件 [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md)
- 新版 呼出元 1件 [`00c3a214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3a/00c3a214.md) · 呼出先 2件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c3d830",
      "incomplete_value": false,
      "site": "00c3d830",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3d794",
      "incomplete_value": false,
      "site": "00c3d794",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c97000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "definition_site": "00c3d854",
      "incomplete_value": false,
      "site": "00c3d854",
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
            "const:e21:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00c3d7b8",
      "incomplete_value": false,
      "site": "00c3d7b8",
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
            "const:e75:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00c3d830",
      "DATA",
      [
        "storage",
        "00c97550",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3d854",
      "DATA",
      [
        "storage",
        "002b9e75",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c3d830",
      "DATA",
      [
        "storage",
        "00c97620",
        null,
        "undefined *"
      ]
    ],
    [
      "00c3d854",
      "DATA",
      [
        "storage",
        "002b9e21",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c3d764 ["INT_ADD", "register:40f0:8", ["const:c3d764:8", "const:4:8"]]
- 00c3d764 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00c3d800 ["INT_ADD", "register:40f0:8", ["const:c3d800:8", "const:4:8"]]
+ 00c3d800 ["CALL", null, ["callee:00c5a0f0:8"]]
- 00c3d788 ["COPY", "tmp:0:8", ["const:550:8"]]
- 00c3d788 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d788 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d788 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d824 ["COPY", "tmp:0:8", ["const:620:8"]]
+ 00c3d824 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d824 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d824 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00c3d7b0 ["COPY", "tmp:0:8", ["const:e75:8"]]
- 00c3d7b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d7b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00c3d7b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00c3d84c ["COPY", "tmp:0:8", ["const:e21:8"]]
+ 00c3d84c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d84c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00c3d84c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


