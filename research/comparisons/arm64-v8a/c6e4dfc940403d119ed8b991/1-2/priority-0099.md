# v16.0.2 → v16.0.3 · 最優先の変更候補 (99)

[一覧の目次](README.md)

<a id="compare-5ac12e5e1c399d6ed514ffa3799b7234"></a>

### [`00bfa964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa964.md) → [`00bfb958`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb958.md) FUN_00bfb958

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bfa8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa8e0.md) · 呼出先 3件 [`00bfad18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfad18.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5a3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a3d0.md)
- 新版 呼出元 1件 [`00bfb8d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb8d4.md) · 呼出先 3件 [`00bfbd0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbd0c.md) [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5b3a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b3a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb968",
      "incomplete_value": false,
      "site": "00bfb96c",
      "value": [
        "leaf",
        "const:bfbd0c:8"
      ]
    },
    "old": {
      "definition_site": "00bfa974",
      "incomplete_value": false,
      "site": "00bfa978",
      "value": [
        "leaf",
        "const:bfad18:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfb984",
      "incomplete_value": false,
      "site": "00bfb988",
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
            "const:e6e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfa990",
      "incomplete_value": false,
      "site": "00bfa994",
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
            "const:da3:8"
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
      "00bfb968",
      "PARAM",
      [
        "storage",
        "00bfad18",
        null,
        null
      ]
    ],
    [
      "00bfb984",
      "PARAM",
      [
        "storage",
        "002a3da3",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfb968",
      "PARAM",
      [
        "storage",
        "00bfbd0c",
        null,
        null
      ]
    ],
    [
      "00bfb984",
      "PARAM",
      [
        "storage",
        "002a3e6e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfa978 ["INT_ADD", "register:40f0:8", ["const:bfa978:8", "const:4:8"]]
- 00bfa978 ["CALL", null, ["callee:00c5b3a0:8"]]
+ 00bfb96c ["INT_ADD", "register:40f0:8", ["const:bfb96c:8", "const:4:8"]]
+ 00bfb96c ["CALL", null, ["callee:00c5b3a0:8"]]
- 00bfa994 ["INT_ADD", "register:40f0:8", ["const:bfa994:8", "const:4:8"]]
- 00bfa994 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfb988 ["INT_ADD", "register:40f0:8", ["const:bfb988:8", "const:4:8"]]
+ 00bfb988 ["CALL", null, ["callee:00c591c0:8"]]
- 00bfa974 ["COPY", "register:4008:8", ["const:bfad18:8"]]
+ 00bfb968 ["COPY", "register:4008:8", ["const:bfbd0c:8"]]
~~~


<a id="compare-8aaff7df5e9c60622f2ed1c325015594"></a>

### [`00bface8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bface8.md) → [`00bfbcdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbcdc.md) FUN_00bfbcdc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bfaa64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfaa64.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00bfba58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfba58.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfbcec",
      "incomplete_value": false,
      "site": "00bfbcf0",
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
      "definition_site": "00bfacf8",
      "incomplete_value": false,
      "site": "00bfacfc",
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
      "00bfbcec",
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
      "00bfbcec",
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
- 00bfacfc ["INT_ADD", "register:40f0:8", ["const:bfacfc:8", "const:4:8"]]
- 00bfacfc ["CALL", null, ["callee:0043bad8:8"]]
+ 00bfbcf0 ["INT_ADD", "register:40f0:8", ["const:bfbcf0:8", "const:4:8"]]
+ 00bfbcf0 ["CALL", null, ["callee:0043bad8:8"]]
- 00bfacf4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00bfbce8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00bfacf8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00bfacf8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bfacf8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bfacf8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bfbcec ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00bfbcec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bfbcec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bfbcec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-7255158982946e1a46255efd89c0599c"></a>

### [`00bfad00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfad00.md) → [`00bfbcf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbcf4.md) FUN_00bfbcf4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bfab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfab60.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00bfbb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbb54.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfbd04",
      "incomplete_value": false,
      "site": "00bfbd08",
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
      "definition_site": "00bfad10",
      "incomplete_value": false,
      "site": "00bfad14",
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
      "00bfbd04",
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
      "00bfbd04",
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
- 00bfad14 ["INT_ADD", "register:40f0:8", ["const:bfad14:8", "const:4:8"]]
- 00bfad14 ["CALL", null, ["callee:0043bad8:8"]]
+ 00bfbd08 ["INT_ADD", "register:40f0:8", ["const:bfbd08:8", "const:4:8"]]
+ 00bfbd08 ["CALL", null, ["callee:0043bad8:8"]]
- 00bfad0c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00bfbd00 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00bfad10 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00bfad10 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bfad10 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bfad10 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bfbd04 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00bfbd04 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bfbd04 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bfbd04 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-40e860a6d9d2af79d377de913bb4456a"></a>

### [`00bfad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfad50.md) → [`00bfbd44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbd44.md) _ZNSt6__ndk113random_deviceC2ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) · 呼出先 4件 [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5d6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d6e0.md)
- 新版 呼出元 1件 [`00c59440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59440.md) · 呼出先 4件 [`00c59150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59150.md) [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5e6b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e6b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfbda0",
      "incomplete_value": false,
      "site": "00bfbdb0",
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
            "const:b11:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfadac",
      "incomplete_value": false,
      "site": "00bfadbc",
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
            "const:a33:8"
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
      "00bfbda0",
      "PARAM",
      [
        "storage",
        "002b4a33",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfbda0",
      "PARAM",
      [
        "storage",
        "002b4b11",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfadbc ["INT_ADD", "register:40f0:8", ["const:bfadbc:8", "const:4:8"]]
- 00bfadbc ["CALL", null, ["callee:00c59150:8"]]
+ 00bfbdb0 ["INT_ADD", "register:40f0:8", ["const:bfbdb0:8", "const:4:8"]]
+ 00bfbdb0 ["CALL", null, ["callee:00c59150:8"]]
- 00bfad80 ["INT_ADD", "register:40f0:8", ["const:bfad80:8", "const:4:8"]]
- 00bfad80 ["CALL", null, ["callee:00c5e6b0:8"]]
+ 00bfbd74 ["INT_ADD", "register:40f0:8", ["const:bfbd74:8", "const:4:8"]]
+ 00bfbd74 ["CALL", null, ["callee:00c5e6b0:8"]]
- 00bfada0 ["INT_ADD", "register:40f0:8", ["const:bfada0:8", "const:4:8"]]
- 00bfada0 ["CALL", null, ["callee:00c59160:8"]]
+ 00bfbd94 ["INT_ADD", "register:40f0:8", ["const:bfbd94:8", "const:4:8"]]
+ 00bfbd94 ["CALL", null, ["callee:00c59160:8"]]
~~~


<a id="compare-9d156ec223852fadaf2b9312b98f432e"></a>

### [`00bfae18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfae18.md) → [`00bfbe0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbe0c.md) _ZNSt6__ndk113random_deviceclEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md) · 呼出先 3件 [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c5d720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d720.md)
- 新版 呼出元 1件 [`00c59450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59450.md) · 呼出先 3件 [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c591c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591c0.md) [`00c5e6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e6f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfbe88",
      "incomplete_value": false,
      "site": "00bfbe8c",
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
            "const:dbd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfae94",
      "incomplete_value": false,
      "site": "00bfae98",
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
            "const:cee:8"
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
      "definition_site": "00bfbe94",
      "incomplete_value": false,
      "site": "00bfbe9c",
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
            "const:51c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfaea0",
      "incomplete_value": false,
      "site": "00bfaea8",
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
            "const:44f:8"
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
      "00bfbe88",
      "PARAM",
      [
        "storage",
        "002b8cee",
        null,
        "string"
      ]
    ],
    [
      "00bfbe94",
      "PARAM",
      [
        "storage",
        "002ac44f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfbe88",
      "PARAM",
      [
        "storage",
        "002b8dbd",
        null,
        "string"
      ]
    ],
    [
      "00bfbe94",
      "PARAM",
      [
        "storage",
        "002ac51c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfae98 ["INT_ADD", "register:40f0:8", ["const:bfae98:8", "const:4:8"]]
- 00bfae98 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfbe8c ["INT_ADD", "register:40f0:8", ["const:bfbe8c:8", "const:4:8"]]
+ 00bfbe8c ["CALL", null, ["callee:00c591c0:8"]]
- 00bfaea8 ["INT_ADD", "register:40f0:8", ["const:bfaea8:8", "const:4:8"]]
- 00bfaea8 ["CALL", null, ["callee:00c591c0:8"]]
+ 00bfbe9c ["INT_ADD", "register:40f0:8", ["const:bfbe9c:8", "const:4:8"]]
+ 00bfbe9c ["CALL", null, ["callee:00c591c0:8"]]
- 00bfae3c ["INT_ADD", "register:40f0:8", ["const:bfae3c:8", "const:4:8"]]
- 00bfae3c ["CALL", null, ["callee:00c59160:8"]]
+ 00bfbe30 ["INT_ADD", "register:40f0:8", ["const:bfbe30:8", "const:4:8"]]
+ 00bfbe30 ["CALL", null, ["callee:00c59160:8"]]
~~~


<a id="compare-45a68be5f8a530b45ab4ba4746ccd23c"></a>

### [`00bfaf88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfaf88.md) → [`00bfbf7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbf7c.md) _ZNSt6__ndk117iostream_categoryEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfbfb0",
      "incomplete_value": false,
      "site": "00bfbfb4",
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
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfafbc",
      "incomplete_value": false,
      "site": "00bfafc0",
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
            "const:490:8"
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
      "definition_site": "00bfbfc0",
      "incomplete_value": false,
      "site": "00bfbfc4",
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
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfafcc",
      "incomplete_value": false,
      "site": "00bfafd0",
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
            "const:490:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bfbf9c",
      "incomplete_value": false,
      "site": "00bfbfa8",
      "value": [
        "leaf",
        "const:ca58a0:8"
      ]
    },
    "old": {
      "definition_site": "00bfafa8",
      "incomplete_value": false,
      "site": "00bfafb4",
      "value": [
        "leaf",
        "const:ca48d0:8"
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
      "00bfbf90",
      "READ",
      [
        "storage",
        "01127490",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfbf9c",
      "DATA",
      [
        "storage",
        "00ca48d0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfbfb0",
      "PARAM",
      [
        "storage",
        "01127490",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bfbf90",
      "READ",
      [
        "storage",
        "01128450",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfbf9c",
      "DATA",
      [
        "storage",
        "00ca58a0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfbfb0",
      "PARAM",
      [
        "storage",
        "01128450",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfafc0 ["INT_ADD", "register:40f0:8", ["const:bfafc0:8", "const:4:8"]]
- 00bfafc0 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00bfbfb4 ["INT_ADD", "register:40f0:8", ["const:bfbfb4:8", "const:4:8"]]
+ 00bfbfb4 ["CALL", null, ["callee:00c58ef0:8"]]
- 00bfafd0 ["INT_ADD", "register:40f0:8", ["const:bfafd0:8", "const:4:8"]]
- 00bfafd0 ["CALL", null, ["callee:00c58f10:8"]]
+ 00bfbfc4 ["INT_ADD", "register:40f0:8", ["const:bfbfc4:8", "const:4:8"]]
+ 00bfbfc4 ["CALL", null, ["callee:00c58f10:8"]]
- 00bfaf94 ["COPY", "register:4040:8", ["const:1127000:8"]]
+ 00bfbf88 ["COPY", "register:4040:8", ["const:1128000:8"]]
~~~


<a id="compare-5499547402809f3f1281c5930bd49d82"></a>

### [`00bfb190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb190.md) → [`00bfc184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc184.md) _ZNSt6__ndk18ios_base6xallocEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d40.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfc198",
      "incomplete_value": true,
      "site": "00bfc19c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb1a4",
      "incomplete_value": true,
      "site": "00bfb1a8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bfc198",
      "READ",
      [
        "storage",
        "00c9bbc8",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc198",
      "PARAM",
      [
        "storage",
        "01127498",
        "std::__ndk1::ios_base::__xindex_",
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00bfc198",
      "READ",
      [
        "storage",
        "00c9cb98",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc198",
      "PARAM",
      [
        "storage",
        "01128458",
        "std::__ndk1::ios_base::__xindex_",
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb1a8 ["INT_ADD", "register:40f0:8", ["const:bfb1a8:8", "const:4:8"]]
- 00bfb1a8 ["CALL", null, ["callee:00c54d30:8"]]
+ 00bfc19c ["INT_ADD", "register:40f0:8", ["const:bfc19c:8", "const:4:8"]]
+ 00bfc19c ["CALL", null, ["callee:00c54d30:8"]]
- 00bfb19c ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 00bfc190 ["COPY", "register:4008:8", ["const:c9c000:8"]]
- 00bfb1a4 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:bc8:8"]]
- 00bfb1a4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfc198 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:b98:8"]]
+ 00bfc198 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ad3bfcaa7a22840ede6674ff5e4236c7"></a>

### [`00bfb1b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb1b8.md) → [`00bfc1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc1ac.md) _ZNSt6__ndk18ios_base5iwordEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bfb5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5e0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bfc5d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc5d4.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bfc2ac",
      "incomplete_value": false,
      "site": "00bfc2ac",
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
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb2b8",
      "incomplete_value": false,
      "site": "00bfb2b8",
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
            "const:4a0:8"
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
      "definition_site": "00bfc2b8",
      "incomplete_value": false,
      "site": "00bfc2bc",
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
            "const:632:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb2c4",
      "incomplete_value": false,
      "site": "00bfb2c8",
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
            "const:4da:8"
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
      "00bfc2a8",
      "DATA",
      [
        "storage",
        "011274a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfc2ac",
      "WRITE",
      [
        "storage",
        "011274a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfc2b8",
      "PARAM",
      [
        "storage",
        "002a74da",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfc2a8",
      "DATA",
      [
        "storage",
        "01128460",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfc2ac",
      "WRITE",
      [
        "storage",
        "01128460",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfc2b8",
      "PARAM",
      [
        "storage",
        "002a7632",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb2c8 ["INT_ADD", "register:40f0:8", ["const:bfb2c8:8", "const:4:8"]]
- 00bfb2c8 ["CALL", null, ["callee:00bfc5d4:8"]]
+ 00bfc2bc ["INT_ADD", "register:40f0:8", ["const:bfc2bc:8", "const:4:8"]]
+ 00bfc2bc ["CALL", null, ["callee:00bfc5d4:8"]]
- 00bfb210 ["INT_ADD", "register:40f0:8", ["const:bfb210:8", "const:4:8"]]
- 00bfb210 ["CALL", null, ["callee:00c5b140:8"]]
+ 00bfc204 ["INT_ADD", "register:40f0:8", ["const:bfc204:8", "const:4:8"]]
+ 00bfc204 ["CALL", null, ["callee:00c5b140:8"]]
- 00bfb260 ["INT_ADD", "register:40f0:8", ["const:bfb260:8", "const:4:8"]]
- 00bfb260 ["CALL", null, ["callee:00c59130:8"]]
+ 00bfc254 ["INT_ADD", "register:40f0:8", ["const:bfc254:8", "const:4:8"]]
+ 00bfc254 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-a83f688a62cb4331ceae4a6b8664fe5f"></a>

### [`00bfb2cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb2cc.md) → [`00bfc2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc2c0.md) _ZNSt6__ndk18ios_base5pwordEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bfb5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5e0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bfc5d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc5d4.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bfc3c0",
      "incomplete_value": false,
      "site": "00bfc3c0",
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
            "const:468:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb3cc",
      "incomplete_value": false,
      "site": "00bfb3cc",
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
            "const:4a8:8"
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
      "definition_site": "00bfc3cc",
      "incomplete_value": false,
      "site": "00bfc3d0",
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
            "const:632:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb3d8",
      "incomplete_value": false,
      "site": "00bfb3dc",
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
            "const:4da:8"
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
      "00bfc3bc",
      "DATA",
      [
        "storage",
        "011274a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfc3c0",
      "WRITE",
      [
        "storage",
        "011274a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfc3cc",
      "PARAM",
      [
        "storage",
        "002a74da",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfc3bc",
      "DATA",
      [
        "storage",
        "01128468",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfc3c0",
      "WRITE",
      [
        "storage",
        "01128468",
        null,
        "undefined8"
      ]
    ],
    [
      "00bfc3cc",
      "PARAM",
      [
        "storage",
        "002a7632",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb3dc ["INT_ADD", "register:40f0:8", ["const:bfb3dc:8", "const:4:8"]]
- 00bfb3dc ["CALL", null, ["callee:00bfc5d4:8"]]
+ 00bfc3d0 ["INT_ADD", "register:40f0:8", ["const:bfc3d0:8", "const:4:8"]]
+ 00bfc3d0 ["CALL", null, ["callee:00bfc5d4:8"]]
- 00bfb324 ["INT_ADD", "register:40f0:8", ["const:bfb324:8", "const:4:8"]]
- 00bfb324 ["CALL", null, ["callee:00c5b140:8"]]
+ 00bfc318 ["INT_ADD", "register:40f0:8", ["const:bfc318:8", "const:4:8"]]
+ 00bfc318 ["CALL", null, ["callee:00c5b140:8"]]
- 00bfb374 ["INT_ADD", "register:40f0:8", ["const:bfb374:8", "const:4:8"]]
- 00bfb374 ["CALL", null, ["callee:00c59130:8"]]
+ 00bfc368 ["INT_ADD", "register:40f0:8", ["const:bfc368:8", "const:4:8"]]
+ 00bfc368 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-c9ca129e2db28e900522c3d9918356d0"></a>

### [`00bfb3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb3e0.md) → [`00bfc3d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc3d4.md) _ZNSt6__ndk18ios_base17register_callbackEPFvNS0_5eventERS0_iEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bfb5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bfc5d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc5d4.md) [`00c5b140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b140.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.21% / 新版 98.21%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfc4ac",
      "incomplete_value": false,
      "site": "00bfc4b0",
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
            "const:632:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb4b8",
      "incomplete_value": false,
      "site": "00bfb4bc",
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
            "const:4da:8"
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
      "00bfc4ac",
      "PARAM",
      [
        "storage",
        "002a74da",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfc4ac",
      "PARAM",
      [
        "storage",
        "002a7632",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb4bc ["INT_ADD", "register:40f0:8", ["const:bfb4bc:8", "const:4:8"]]
- 00bfb4bc ["CALL", null, ["callee:00bfc5d4:8"]]
+ 00bfc4b0 ["INT_ADD", "register:40f0:8", ["const:bfc4b0:8", "const:4:8"]]
+ 00bfc4b0 ["CALL", null, ["callee:00bfc5d4:8"]]
- 00bfb434 ["INT_ADD", "register:40f0:8", ["const:bfb434:8", "const:4:8"]]
- 00bfb434 ["CALL", null, ["callee:00c5b140:8"]]
+ 00bfc428 ["INT_ADD", "register:40f0:8", ["const:bfc428:8", "const:4:8"]]
+ 00bfc428 ["CALL", null, ["callee:00c5b140:8"]]
- 00bfb460 ["INT_ADD", "register:40f0:8", ["const:bfb460:8", "const:4:8"]]
- 00bfb460 ["CALL", null, ["callee:00c5b140:8"]]
+ 00bfc454 ["INT_ADD", "register:40f0:8", ["const:bfc454:8", "const:4:8"]]
+ 00bfc454 ["CALL", null, ["callee:00c5b140:8"]]
~~~


<a id="compare-e287cdb73f573c71cfb98cceafbd68a0"></a>

### [`00bfb4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb4c0.md) → [`00bfc4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc4b4.md) _ZNSt6__ndk18ios_baseD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md) [`00c5e3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3c0.md) · 呼出先 2件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md)
- 新版 呼出元 2件 [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md) [`00c5f390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f390.md) · 呼出先 2件 [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59700.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.18% / 新版 93.18%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfc4d8",
      "incomplete_value": true,
      "site": "00bfc4dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bfb4e4",
      "incomplete_value": true,
      "site": "00bfb4e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00bfc4d0",
      "READ",
      [
        "storage",
        "00c9bbd0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc4dc",
      "DATA",
      [
        "storage",
        "00c92e78",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfc4d0",
      "READ",
      [
        "storage",
        "00c9cba0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc4dc",
      "DATA",
      [
        "storage",
        "00c93e48",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb4d4 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bfc4c8 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00bfb4dc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bd0:8"]]
- 00bfb4dc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfc4d0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ba0:8"]]
+ 00bfc4d0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bfb514 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfb514 ["INT_ADD", "register:40f0:8", ["const:bfb514:8", "const:4:8"]]
- 00bfb514 ["CALLIND", null, ["register:0:8"]]
+ 00bfc508 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfc508 ["INT_ADD", "register:40f0:8", ["const:bfc508:8", "const:4:8"]]
+ 00bfc508 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7713b5f6a6b96ba19d459c6e18a1b24d"></a>

### [`00bfb5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5a0.md) → [`00bfc594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc594.md) _ZNSt6__ndk18ios_base5clearEj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) · 呼出先 1件 [`00bfb5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5e0.md)
- 新版 呼出元 1件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) · 呼出先 1件 [`00bfc5d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc5d4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfc5cc",
      "incomplete_value": false,
      "site": "00bfc5d0",
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
            "const:632:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb5d8",
      "incomplete_value": false,
      "site": "00bfb5dc",
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
            "const:4da:8"
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
      "00bfc5cc",
      "PARAM",
      [
        "storage",
        "002a74da",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bfc5cc",
      "PARAM",
      [
        "storage",
        "002a7632",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb5dc ["INT_ADD", "register:40f0:8", ["const:bfb5dc:8", "const:4:8"]]
- 00bfb5dc ["CALL", null, ["callee:00bfc5d4:8"]]
+ 00bfc5d0 ["INT_ADD", "register:40f0:8", ["const:bfc5d0:8", "const:4:8"]]
+ 00bfc5d0 ["CALL", null, ["callee:00bfc5d4:8"]]
- 00bfb5d8 ["COPY", "tmp:0:8", ["const:4da:8"]]
- 00bfb5d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bfb5d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bfb5d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bfc5cc ["COPY", "tmp:0:8", ["const:632:8"]]
+ 00bfc5cc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bfc5cc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bfc5cc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-1c32196c899d12bf3228a41ab8923ec5"></a>

### [`00bfb5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5e0.md) → [`00bfc5d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc5d4.md) FUN_00bfc5d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00bfb1b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb1b8.md) [`00bfb2cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb2cc.md) [`00bfb3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb3e0.md) [`00bfb5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb5a0.md) · 呼出先 6件 [`00bfb058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb058.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)
- 新版 呼出元 4件 [`00bfc1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc1ac.md) [`00bfc2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc2c0.md) [`00bfc3d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc3d4.md) [`00bfc594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc594.md) · 呼出先 6件 [`00bfc04c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc04c.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfc614",
      "incomplete_value": false,
      "site": "00bfc614",
      "value": [
        "leaf",
        "const:ca58a0:8"
      ]
    },
    "old": {
      "definition_site": "00bfb620",
      "incomplete_value": false,
      "site": "00bfb620",
      "value": [
        "leaf",
        "const:ca48d0:8"
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfc634",
      "incomplete_value": true,
      "site": "00bfc63c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ba8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb640",
      "incomplete_value": true,
      "site": "00bfb648",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfc638",
      "incomplete_value": true,
      "site": "00bfc63c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb644",
      "incomplete_value": true,
      "site": "00bfb648",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bfc600",
      "READ",
      [
        "storage",
        "01127490",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfc614",
      "DATA",
      [
        "storage",
        "00ca48d0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc634",
      "READ",
      [
        "storage",
        "00c9bbd8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfc600",
      "READ",
      [
        "storage",
        "01128450",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfc614",
      "DATA",
      [
        "storage",
        "00ca58a0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfc634",
      "READ",
      [
        "storage",
        "00c9cba8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb648 ["INT_ADD", "register:40f0:8", ["const:bfb648:8", "const:4:8"]]
- 00bfb648 ["CALL", null, ["callee:00c58fb0:8"]]
+ 00bfc63c ["INT_ADD", "register:40f0:8", ["const:bfc63c:8", "const:4:8"]]
+ 00bfc63c ["CALL", null, ["callee:00c58fb0:8"]]
- 00bfb654 ["INT_ADD", "register:40f0:8", ["const:bfb654:8", "const:4:8"]]
- 00bfb654 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00bfc648 ["INT_ADD", "register:40f0:8", ["const:bfc648:8", "const:4:8"]]
+ 00bfc648 ["CALL", null, ["callee:00c58ef0:8"]]
- 00bfb664 ["INT_ADD", "register:40f0:8", ["const:bfb664:8", "const:4:8"]]
- 00bfb664 ["CALL", null, ["callee:00c58f10:8"]]
+ 00bfc658 ["INT_ADD", "register:40f0:8", ["const:bfc658:8", "const:4:8"]]
+ 00bfc658 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-0d96933f834a57b06bb8cd9c6b2cef9c"></a>

### [`00bfb680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb680.md) → [`00bfc674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc674.md) _ZNSt6__ndk18ios_base4initEPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) · 呼出先 1件 [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md)
- 新版 呼出元 1件 [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md) · 呼出先 1件 [`00c5b840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b840.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfc684",
      "incomplete_value": true,
      "site": "00bfc698",
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
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfb690",
      "incomplete_value": true,
      "site": "00bfb6a4",
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
                "const:70:8"
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
      "00bfc684",
      "READ",
      [
        "storage",
        "002c3070",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bfc684",
      "READ",
      [
        "storage",
        "002c30c0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfb690 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:70:8"]]
- 00bfb690 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00bfb690 ["COPY", "register:5010:8", ["const:0:8"]]
- 00bfb690 ["COPY", "register:5018:8", ["const:0:8"]]
+ 00bfc684 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c0:8"]]
+ 00bfc684 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00bfc684 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00bfc684 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-e2c70e5233c497ecae0799d51dd4726e"></a>

### [`00bfbb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbb9c.md) → [`00bfcb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfcb90.md) _ZNSt6__ndk18ios_base15sync_with_stdioEb

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bfcba0",
      "incomplete_value": false,
      "site": "00bfcba0",
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
            "const:8a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfbbac",
      "incomplete_value": false,
      "site": "00bfbbac",
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
            "const:8d8:8"
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
      "00bfcb9c",
      "READ",
      [
        "storage",
        "00ca48d8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfcba0",
      "WRITE",
      [
        "storage",
        "00ca48d8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bfcb9c",
      "READ",
      [
        "storage",
        "00ca58a8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bfcba0",
      "WRITE",
      [
        "storage",
        "00ca58a8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfbbac ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00bfbbac ["INT_ADD", "tmp:1:8", ["register:4050:8", "const:8d8:8"]]
- 00bfbbac ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bfcba0 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00bfcba0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "const:8a8:8"]]
+ 00bfcba0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bfbba0 ["COPY", "register:4050:8", ["const:ca4000:8"]]
+ 00bfcb94 ["COPY", "register:4050:8", ["const:ca5000:8"]]
- 00bfbba8 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:8d8:8"]]
- 00bfbba8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bfbba8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bfcb9c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:8a8:8"]]
+ 00bfcb9c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bfcb9c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-c3c21abd0f4d9d1dcd7cb76314dc48b8"></a>

### [`00bfbf38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbf38.md) → [`00bfcf2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfcf2c.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEEC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c582c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582c0.md) · 呼出先 1件 [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md)
- 新版 呼出元 1件 [`00c59290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59290.md) · 呼出先 1件 [`00c5b840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b840.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfcf4c",
      "incomplete_value": true,
      "site": "00bfcf4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bfbf58",
      "incomplete_value": true,
      "site": "00bfbf58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00bfcf44",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ],
    [
      "00bfcf4c",
      "DATA",
      [
        "storage",
        "00c90d80",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfcf44",
      "READ",
      [
        "storage",
        "00c9c8e8",
        null,
        "pointer"
      ]
    ],
    [
      "00bfcf4c",
      "DATA",
      [
        "storage",
        "00c91d50",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfbf48 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bfcf3c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00bfbf50 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:918:8"]]
- 00bfbf50 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfcf44 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8e8:8"]]
+ 00bfcf44 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bfbf5c ["INT_ADD", "register:40f0:8", ["const:bfbf5c:8", "const:4:8"]]
- 00bfbf5c ["CALL", null, ["callee:00c5b840:8"]]
+ 00bfcf50 ["INT_ADD", "register:40f0:8", ["const:bfcf50:8", "const:4:8"]]
+ 00bfcf50 ["CALL", null, ["callee:00c5b840:8"]]
~~~


<a id="compare-b58b8544a12f389f8cc24dea787da7a5"></a>

### [`00bfbf7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbf7c.md) → [`00bfcf70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfcf70.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEEC1ERKS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfcf98",
      "incomplete_value": true,
      "site": "00bfcf98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bfbfa4",
      "incomplete_value": true,
      "site": "00bfbfa4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00bfcf8c",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ],
    [
      "00bfcf98",
      "DATA",
      [
        "storage",
        "00c90d80",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfcf8c",
      "READ",
      [
        "storage",
        "00c9c8e8",
        null,
        "pointer"
      ]
    ],
    [
      "00bfcf98",
      "DATA",
      [
        "storage",
        "00c91d50",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfbf8c ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bfcf80 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00bfbf98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:918:8"]]
- 00bfbf98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfcf8c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8e8:8"]]
+ 00bfcf8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bfbfa8 ["INT_ADD", "register:40f0:8", ["const:bfbfa8:8", "const:4:8"]]
- 00bfbfa8 ["CALL", null, ["callee:00c5b870:8"]]
+ 00bfcf9c ["INT_ADD", "register:40f0:8", ["const:bfcf9c:8", "const:4:8"]]
+ 00bfcf9c ["CALL", null, ["callee:00c5b870:8"]]
~~~


<a id="compare-9ca63bb67fe14d8ca44e448a29b880ce"></a>

### [`00bfc184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc184.md) → [`00bfd178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd178.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEEC1EPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.27% / 新版 77.27%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bfd1a4",
      "incomplete_value": true,
      "site": "00bfd1a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00bfc1b0",
      "incomplete_value": true,
      "site": "00bfc1b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00bfd1a8",
      "incomplete_value": true,
      "site": "00bfd1a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00bfc1b4",
      "incomplete_value": true,
      "site": "00bfc1b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00bfd194",
      "READ",
      [
        "storage",
        "00c9b300",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd1a4",
      "DATA",
      [
        "storage",
        "00c92f08",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd1a8",
      "DATA",
      [
        "storage",
        "00c92ee0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfd194",
      "READ",
      [
        "storage",
        "00c9c2d0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd1a4",
      "DATA",
      [
        "storage",
        "00c93ed8",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd1a8",
      "DATA",
      [
        "storage",
        "00c93eb0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfc194 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bfd188 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00bfc1a0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:300:8"]]
- 00bfc1a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bfd194 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2d0:8"]]
+ 00bfd194 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bfc1bc ["INT_ADD", "register:40f0:8", ["const:bfc1bc:8", "const:4:8"]]
- 00bfc1bc ["CALL", null, ["callee:00c59280:8"]]
+ 00bfd1b0 ["INT_ADD", "register:40f0:8", ["const:bfd1b0:8", "const:4:8"]]
+ 00bfd1b0 ["CALL", null, ["callee:00c59280:8"]]
~~~


<a id="compare-11e81940fa126148083d6c52c33f2b89"></a>

### [`00bfc264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc264.md) → [`00bfd258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd258.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE6sentryC1ERS3_b

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md)
- 新版 呼出元 1件 [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c59f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59f90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.12% / 新版 99.12%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfd2e8",
      "incomplete_value": true,
      "site": "00bfd2ec",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfc2f4",
      "incomplete_value": true,
      "site": "00bfc2f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bfd2e8",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd2e8",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfd2e8",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd2e8",
      "PARAM",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfc2f8 ["INT_ADD", "register:40f0:8", ["const:bfc2f8:8", "const:4:8"]]
- 00bfc2f8 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfd2ec ["INT_ADD", "register:40f0:8", ["const:bfd2ec:8", "const:4:8"]]
+ 00bfd2ec ["CALL", null, ["callee:00c59320:8"]]
- 00bfc2c4 ["INT_ADD", "register:40f0:8", ["const:bfc2c4:8", "const:4:8"]]
- 00bfc2c4 ["CALL", null, ["callee:00c59f90:8"]]
+ 00bfd2b8 ["INT_ADD", "register:40f0:8", ["const:bfd2b8:8", "const:4:8"]]
+ 00bfd2b8 ["CALL", null, ["callee:00c59f90:8"]]
- 00bfc2e8 ["INT_ADD", "register:40f0:8", ["const:bfc2e8:8", "const:4:8"]]
- 00bfc2e8 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfd2dc ["INT_ADD", "register:40f0:8", ["const:bfd2dc:8", "const:4:8"]]
+ 00bfd2dc ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-cceb49312e28f30671562c6935a83796"></a>

### [`00bfc674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc674.md) → [`00bfd668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd668.md) FUN_00bfd668

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfc66c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc66c.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfd660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd660.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfd6bc",
      "incomplete_value": true,
      "site": "00bfd6c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfc6c8",
      "incomplete_value": true,
      "site": "00bfc6cc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfd6bc",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd6bc",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfd6bc",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd6bc",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfc6cc ["INT_ADD", "register:40f0:8", ["const:bfc6cc:8", "const:4:8"]]
- 00bfc6cc ["CALL", null, ["callee:00c59320:8"]]
+ 00bfd6c0 ["INT_ADD", "register:40f0:8", ["const:bfd6c0:8", "const:4:8"]]
+ 00bfd6c0 ["CALL", null, ["callee:00c59320:8"]]
- 00bfc6a0 ["INT_ADD", "register:40f0:8", ["const:bfc6a0:8", "const:4:8"]]
- 00bfc6a0 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfd694 ["INT_ADD", "register:40f0:8", ["const:bfd694:8", "const:4:8"]]
+ 00bfd694 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfc6bc ["INT_ADD", "register:40f0:8", ["const:bfc6bc:8", "const:4:8"]]
- 00bfc6bc ["CALL", null, ["callee:00c59310:8"]]
+ 00bfd6b0 ["INT_ADD", "register:40f0:8", ["const:bfd6b0:8", "const:4:8"]]
+ 00bfd6b0 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-a7810de8c8ccc945ad77c63d21b01c22"></a>

### [`00bfc7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc7ac.md) → [`00bfd7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd7a0.md) FUN_00bfd7a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfc7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc7a4.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfd798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd798.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.44% / 新版 98.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfd7f4",
      "incomplete_value": true,
      "site": "00bfd7f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfc800",
      "incomplete_value": true,
      "site": "00bfc804",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfd7f4",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd7f4",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfd7f4",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd7f4",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfc804 ["INT_ADD", "register:40f0:8", ["const:bfc804:8", "const:4:8"]]
- 00bfc804 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfd7f8 ["INT_ADD", "register:40f0:8", ["const:bfd7f8:8", "const:4:8"]]
+ 00bfd7f8 ["CALL", null, ["callee:00c59320:8"]]
- 00bfc7d8 ["INT_ADD", "register:40f0:8", ["const:bfc7d8:8", "const:4:8"]]
- 00bfc7d8 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfd7cc ["INT_ADD", "register:40f0:8", ["const:bfd7cc:8", "const:4:8"]]
+ 00bfd7cc ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfc7f4 ["INT_ADD", "register:40f0:8", ["const:bfc7f4:8", "const:4:8"]]
- 00bfc7f4 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfd7e8 ["INT_ADD", "register:40f0:8", ["const:bfd7e8:8", "const:4:8"]]
+ 00bfd7e8 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-dd193c8915702d7b1ccb76de2f4a4664"></a>

### [`00bfc924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc924.md) → [`00bfd918`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd918.md) FUN_00bfd918

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfc91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc91c.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfd910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd910.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfd96c",
      "incomplete_value": true,
      "site": "00bfd970",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfc978",
      "incomplete_value": true,
      "site": "00bfc97c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfd96c",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd96c",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfd96c",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfd96c",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfc97c ["INT_ADD", "register:40f0:8", ["const:bfc97c:8", "const:4:8"]]
- 00bfc97c ["CALL", null, ["callee:00c59320:8"]]
+ 00bfd970 ["INT_ADD", "register:40f0:8", ["const:bfd970:8", "const:4:8"]]
+ 00bfd970 ["CALL", null, ["callee:00c59320:8"]]
- 00bfc950 ["INT_ADD", "register:40f0:8", ["const:bfc950:8", "const:4:8"]]
- 00bfc950 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfd944 ["INT_ADD", "register:40f0:8", ["const:bfd944:8", "const:4:8"]]
+ 00bfd944 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfc96c ["INT_ADD", "register:40f0:8", ["const:bfc96c:8", "const:4:8"]]
- 00bfc96c ["CALL", null, ["callee:00c59310:8"]]
+ 00bfd960 ["INT_ADD", "register:40f0:8", ["const:bfd960:8", "const:4:8"]]
+ 00bfd960 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-a7658b4cb10fb840f4cc222aae451b2c"></a>

### [`00bfca5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfca5c.md) → [`00bfda50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfda50.md) FUN_00bfda50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfca54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfca54.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfda48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfda48.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfdaa4",
      "incomplete_value": true,
      "site": "00bfdaa8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfcab0",
      "incomplete_value": true,
      "site": "00bfcab4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfdaa4",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfdaa4",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfdaa4",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfdaa4",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfcab4 ["INT_ADD", "register:40f0:8", ["const:bfcab4:8", "const:4:8"]]
- 00bfcab4 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfdaa8 ["INT_ADD", "register:40f0:8", ["const:bfdaa8:8", "const:4:8"]]
+ 00bfdaa8 ["CALL", null, ["callee:00c59320:8"]]
- 00bfca88 ["INT_ADD", "register:40f0:8", ["const:bfca88:8", "const:4:8"]]
- 00bfca88 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfda7c ["INT_ADD", "register:40f0:8", ["const:bfda7c:8", "const:4:8"]]
+ 00bfda7c ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfcaa4 ["INT_ADD", "register:40f0:8", ["const:bfcaa4:8", "const:4:8"]]
- 00bfcaa4 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfda98 ["INT_ADD", "register:40f0:8", ["const:bfda98:8", "const:4:8"]]
+ 00bfda98 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-8c6200ca45d69364fdd6345b6c8818d6"></a>

### [`00bfcbd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfcbd8.md) → [`00bfdbcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfdbcc.md) FUN_00bfdbcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfcbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfcbd0.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfdbc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfdbc4.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfdc20",
      "incomplete_value": true,
      "site": "00bfdc24",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfcc2c",
      "incomplete_value": true,
      "site": "00bfcc30",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfdc20",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfdc20",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfdc20",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfdc20",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfcc30 ["INT_ADD", "register:40f0:8", ["const:bfcc30:8", "const:4:8"]]
- 00bfcc30 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfdc24 ["INT_ADD", "register:40f0:8", ["const:bfdc24:8", "const:4:8"]]
+ 00bfdc24 ["CALL", null, ["callee:00c59320:8"]]
- 00bfcc04 ["INT_ADD", "register:40f0:8", ["const:bfcc04:8", "const:4:8"]]
- 00bfcc04 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfdbf8 ["INT_ADD", "register:40f0:8", ["const:bfdbf8:8", "const:4:8"]]
+ 00bfdbf8 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfcc20 ["INT_ADD", "register:40f0:8", ["const:bfcc20:8", "const:4:8"]]
- 00bfcc20 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfdc14 ["INT_ADD", "register:40f0:8", ["const:bfdc14:8", "const:4:8"]]
+ 00bfdc14 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-8606e66c3a1d58a793fbd6e328e17f76"></a>

### [`00bfcd10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfcd10.md) → [`00bfdd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfdd04.md) FUN_00bfdd04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfcd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfcd08.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfdcfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfdcfc.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfdd58",
      "incomplete_value": true,
      "site": "00bfdd5c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfcd64",
      "incomplete_value": true,
      "site": "00bfcd68",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfdd58",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfdd58",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfdd58",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfdd58",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfcd68 ["INT_ADD", "register:40f0:8", ["const:bfcd68:8", "const:4:8"]]
- 00bfcd68 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfdd5c ["INT_ADD", "register:40f0:8", ["const:bfdd5c:8", "const:4:8"]]
+ 00bfdd5c ["CALL", null, ["callee:00c59320:8"]]
- 00bfcd3c ["INT_ADD", "register:40f0:8", ["const:bfcd3c:8", "const:4:8"]]
- 00bfcd3c ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfdd30 ["INT_ADD", "register:40f0:8", ["const:bfdd30:8", "const:4:8"]]
+ 00bfdd30 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfcd58 ["INT_ADD", "register:40f0:8", ["const:bfcd58:8", "const:4:8"]]
- 00bfcd58 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfdd4c ["INT_ADD", "register:40f0:8", ["const:bfdd4c:8", "const:4:8"]]
+ 00bfdd4c ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-e2ea2b1d295bc93c2b8ea922fb10ffb5"></a>

### [`00bfce48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfce48.md) → [`00bfde3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfde3c.md) FUN_00bfde3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfce40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfce40.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfde34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfde34.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfde90",
      "incomplete_value": true,
      "site": "00bfde94",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfce9c",
      "incomplete_value": true,
      "site": "00bfcea0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfde90",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfde90",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfde90",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfde90",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfcea0 ["INT_ADD", "register:40f0:8", ["const:bfcea0:8", "const:4:8"]]
- 00bfcea0 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfde94 ["INT_ADD", "register:40f0:8", ["const:bfde94:8", "const:4:8"]]
+ 00bfde94 ["CALL", null, ["callee:00c59320:8"]]
- 00bfce74 ["INT_ADD", "register:40f0:8", ["const:bfce74:8", "const:4:8"]]
- 00bfce74 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfde68 ["INT_ADD", "register:40f0:8", ["const:bfde68:8", "const:4:8"]]
+ 00bfde68 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfce90 ["INT_ADD", "register:40f0:8", ["const:bfce90:8", "const:4:8"]]
- 00bfce90 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfde84 ["INT_ADD", "register:40f0:8", ["const:bfde84:8", "const:4:8"]]
+ 00bfde84 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-a0d697b0b848a49ce6726c90c45480fc"></a>

### [`00bfcf80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfcf80.md) → [`00bfdf74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfdf74.md) FUN_00bfdf74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfcf78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfcf78.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfdf6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfdf6c.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfdfc8",
      "incomplete_value": true,
      "site": "00bfdfcc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfcfd4",
      "incomplete_value": true,
      "site": "00bfcfd8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfdfc8",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfdfc8",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfdfc8",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfdfc8",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfcfd8 ["INT_ADD", "register:40f0:8", ["const:bfcfd8:8", "const:4:8"]]
- 00bfcfd8 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfdfcc ["INT_ADD", "register:40f0:8", ["const:bfdfcc:8", "const:4:8"]]
+ 00bfdfcc ["CALL", null, ["callee:00c59320:8"]]
- 00bfcfac ["INT_ADD", "register:40f0:8", ["const:bfcfac:8", "const:4:8"]]
- 00bfcfac ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfdfa0 ["INT_ADD", "register:40f0:8", ["const:bfdfa0:8", "const:4:8"]]
+ 00bfdfa0 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfcfc8 ["INT_ADD", "register:40f0:8", ["const:bfcfc8:8", "const:4:8"]]
- 00bfcfc8 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfdfbc ["INT_ADD", "register:40f0:8", ["const:bfdfbc:8", "const:4:8"]]
+ 00bfdfbc ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-03b22bfdb031253c9957ca13335dc331"></a>

### [`00bfd0b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd0b8.md) → [`00bfe0ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe0ac.md) FUN_00bfe0ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfd0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd0b0.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfe0a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe0a4.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfe100",
      "incomplete_value": true,
      "site": "00bfe104",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfd10c",
      "incomplete_value": true,
      "site": "00bfd110",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfe100",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe100",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfe100",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe100",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfd110 ["INT_ADD", "register:40f0:8", ["const:bfd110:8", "const:4:8"]]
- 00bfd110 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfe104 ["INT_ADD", "register:40f0:8", ["const:bfe104:8", "const:4:8"]]
+ 00bfe104 ["CALL", null, ["callee:00c59320:8"]]
- 00bfd0e4 ["INT_ADD", "register:40f0:8", ["const:bfd0e4:8", "const:4:8"]]
- 00bfd0e4 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfe0d8 ["INT_ADD", "register:40f0:8", ["const:bfe0d8:8", "const:4:8"]]
+ 00bfe0d8 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfd100 ["INT_ADD", "register:40f0:8", ["const:bfd100:8", "const:4:8"]]
- 00bfd100 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfe0f4 ["INT_ADD", "register:40f0:8", ["const:bfe0f4:8", "const:4:8"]]
+ 00bfe0f4 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-cb99276ab02584e794114800a41006d2"></a>

### [`00bfd1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd1f0.md) → [`00bfe1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe1e4.md) FUN_00bfe1e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfd1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd1e8.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfe1dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe1dc.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfe238",
      "incomplete_value": true,
      "site": "00bfe23c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfd244",
      "incomplete_value": true,
      "site": "00bfd248",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfe238",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe238",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfe238",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe238",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfd248 ["INT_ADD", "register:40f0:8", ["const:bfd248:8", "const:4:8"]]
- 00bfd248 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfe23c ["INT_ADD", "register:40f0:8", ["const:bfe23c:8", "const:4:8"]]
+ 00bfe23c ["CALL", null, ["callee:00c59320:8"]]
- 00bfd21c ["INT_ADD", "register:40f0:8", ["const:bfd21c:8", "const:4:8"]]
- 00bfd21c ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfe210 ["INT_ADD", "register:40f0:8", ["const:bfe210:8", "const:4:8"]]
+ 00bfe210 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfd238 ["INT_ADD", "register:40f0:8", ["const:bfd238:8", "const:4:8"]]
- 00bfd238 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfe22c ["INT_ADD", "register:40f0:8", ["const:bfe22c:8", "const:4:8"]]
+ 00bfe22c ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-320ba358585dd508bf51abb71f1b5846"></a>

### [`00bfd328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd328.md) → [`00bfe31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe31c.md) FUN_00bfe31c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfd320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd320.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfe314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe314.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfe370",
      "incomplete_value": true,
      "site": "00bfe374",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfd37c",
      "incomplete_value": true,
      "site": "00bfd380",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfe370",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe370",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfe370",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe370",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfd380 ["INT_ADD", "register:40f0:8", ["const:bfd380:8", "const:4:8"]]
- 00bfd380 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfe374 ["INT_ADD", "register:40f0:8", ["const:bfe374:8", "const:4:8"]]
+ 00bfe374 ["CALL", null, ["callee:00c59320:8"]]
- 00bfd354 ["INT_ADD", "register:40f0:8", ["const:bfd354:8", "const:4:8"]]
- 00bfd354 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfe348 ["INT_ADD", "register:40f0:8", ["const:bfe348:8", "const:4:8"]]
+ 00bfe348 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfd370 ["INT_ADD", "register:40f0:8", ["const:bfd370:8", "const:4:8"]]
- 00bfd370 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfe364 ["INT_ADD", "register:40f0:8", ["const:bfe364:8", "const:4:8"]]
+ 00bfe364 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-eaad999a1b853e46c5a2d334eded957e"></a>

### [`00bfd460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd460.md) → [`00bfe454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe454.md) FUN_00bfe454

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfd458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd458.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfe44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe44c.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfe4a8",
      "incomplete_value": true,
      "site": "00bfe4ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfd4b4",
      "incomplete_value": true,
      "site": "00bfd4b8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfe4a8",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe4a8",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfe4a8",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe4a8",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfd4b8 ["INT_ADD", "register:40f0:8", ["const:bfd4b8:8", "const:4:8"]]
- 00bfd4b8 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfe4ac ["INT_ADD", "register:40f0:8", ["const:bfe4ac:8", "const:4:8"]]
+ 00bfe4ac ["CALL", null, ["callee:00c59320:8"]]
- 00bfd48c ["INT_ADD", "register:40f0:8", ["const:bfd48c:8", "const:4:8"]]
- 00bfd48c ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfe480 ["INT_ADD", "register:40f0:8", ["const:bfe480:8", "const:4:8"]]
+ 00bfe480 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfd4a8 ["INT_ADD", "register:40f0:8", ["const:bfd4a8:8", "const:4:8"]]
- 00bfd4a8 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfe49c ["INT_ADD", "register:40f0:8", ["const:bfe49c:8", "const:4:8"]]
+ 00bfe49c ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-b0c3d9e71bf837d63ccb556a0d196848"></a>

### [`00bfd598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd598.md) → [`00bfe58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe58c.md) FUN_00bfe58c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfd590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd590.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00bfe584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe584.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfe5e0",
      "incomplete_value": true,
      "site": "00bfe5e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfd5ec",
      "incomplete_value": true,
      "site": "00bfd5f0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
      "00bfe5e0",
      "READ",
      [
        "storage",
        "00c9bbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe5e0",
      "PARAM",
      [
        "storage",
        "01127c78",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfe5e0",
      "READ",
      [
        "storage",
        "00c9cbb0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe5e0",
      "PARAM",
      [
        "storage",
        "01128c38",
        "std::__ndk1::num_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfd5f0 ["INT_ADD", "register:40f0:8", ["const:bfd5f0:8", "const:4:8"]]
- 00bfd5f0 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfe5e4 ["INT_ADD", "register:40f0:8", ["const:bfe5e4:8", "const:4:8"]]
+ 00bfe5e4 ["CALL", null, ["callee:00c59320:8"]]
- 00bfd5c4 ["INT_ADD", "register:40f0:8", ["const:bfd5c4:8", "const:4:8"]]
- 00bfd5c4 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfe5b8 ["INT_ADD", "register:40f0:8", ["const:bfe5b8:8", "const:4:8"]]
+ 00bfe5b8 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfd5e0 ["INT_ADD", "register:40f0:8", ["const:bfd5e0:8", "const:4:8"]]
- 00bfd5e0 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfe5d4 ["INT_ADD", "register:40f0:8", ["const:bfe5d4:8", "const:4:8"]]
+ 00bfe5d4 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-bd24bd26444bc4abc2669f1c9b950b20"></a>

### [`00bfd81c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd81c.md) → [`00bfe810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe810.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE3getEPcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5e440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e440.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5f410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f410.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfe850",
      "incomplete_value": true,
      "site": "00bfe854",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfd85c",
      "incomplete_value": true,
      "site": "00bfd860",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bfe850",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe850",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfe850",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfe850",
      "PARAM",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfd860 ["INT_ADD", "register:40f0:8", ["const:bfd860:8", "const:4:8"]]
- 00bfd860 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfe854 ["INT_ADD", "register:40f0:8", ["const:bfe854:8", "const:4:8"]]
+ 00bfe854 ["CALL", null, ["callee:00c59320:8"]]
- 00bfd850 ["INT_ADD", "register:40f0:8", ["const:bfd850:8", "const:4:8"]]
- 00bfd850 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfe844 ["INT_ADD", "register:40f0:8", ["const:bfe844:8", "const:4:8"]]
+ 00bfe844 ["CALL", null, ["callee:00c59310:8"]]
- 00bfd854 ["COPY", "register:4008:8", ["const:c9a000:8"]]
+ 00bfe848 ["COPY", "register:4008:8", ["const:c9b000:8"]]
~~~


<a id="compare-2a0156a16ae81190c59af2db643dc7e8"></a>

### [`00bfda94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfda94.md) → [`00bfea88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfea88.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE3getERNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5e450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e450.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5f420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f420.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfeac0",
      "incomplete_value": true,
      "site": "00bfeac4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfdacc",
      "incomplete_value": true,
      "site": "00bfdad0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bfeac0",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00bfeac0",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfeac0",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfeac0",
      "PARAM",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfdad0 ["INT_ADD", "register:40f0:8", ["const:bfdad0:8", "const:4:8"]]
- 00bfdad0 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfeac4 ["INT_ADD", "register:40f0:8", ["const:bfeac4:8", "const:4:8"]]
+ 00bfeac4 ["CALL", null, ["callee:00c59320:8"]]
- 00bfdac0 ["INT_ADD", "register:40f0:8", ["const:bfdac0:8", "const:4:8"]]
- 00bfdac0 ["CALL", null, ["callee:00c59310:8"]]
+ 00bfeab4 ["INT_ADD", "register:40f0:8", ["const:bfeab4:8", "const:4:8"]]
+ 00bfeab4 ["CALL", null, ["callee:00c59310:8"]]
- 00bfdac4 ["COPY", "register:4008:8", ["const:c9a000:8"]]
+ 00bfeab8 ["COPY", "register:4008:8", ["const:c9b000:8"]]
~~~


<a id="compare-857659d83d64f3f0997581b718e12887"></a>

### [`00bfdc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfdc98.md) → [`00bfec8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfec8c.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE7getlineEPcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5e460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e460.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5f430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f430.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfeccc",
      "incomplete_value": true,
      "site": "00bfecd0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfdcd8",
      "incomplete_value": true,
      "site": "00bfdcdc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bfeccc",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00bfeccc",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bfeccc",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00bfeccc",
      "PARAM",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfdcdc ["INT_ADD", "register:40f0:8", ["const:bfdcdc:8", "const:4:8"]]
- 00bfdcdc ["CALL", null, ["callee:00c59320:8"]]
+ 00bfecd0 ["INT_ADD", "register:40f0:8", ["const:bfecd0:8", "const:4:8"]]
+ 00bfecd0 ["CALL", null, ["callee:00c59320:8"]]
- 00bfdccc ["INT_ADD", "register:40f0:8", ["const:bfdccc:8", "const:4:8"]]
- 00bfdccc ["CALL", null, ["callee:00c59310:8"]]
+ 00bfecc0 ["INT_ADD", "register:40f0:8", ["const:bfecc0:8", "const:4:8"]]
+ 00bfecc0 ["CALL", null, ["callee:00c59310:8"]]
- 00bfdcd0 ["COPY", "register:4008:8", ["const:c9a000:8"]]
+ 00bfecc4 ["COPY", "register:4008:8", ["const:c9b000:8"]]
~~~


<a id="compare-b98c80e3f0062af6976ad35383102db1"></a>

### [`00bfe938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe938.md) → [`00bff92c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bff92c.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEEC1EPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.27% / 新版 77.27%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bff958",
      "incomplete_value": true,
      "site": "00bff958",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00bfe964",
      "incomplete_value": true,
      "site": "00bfe964",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00bff954",
      "incomplete_value": true,
      "site": "00bff95c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00bfe960",
      "incomplete_value": true,
      "site": "00bfe968",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00bff948",
      "READ",
      [
        "storage",
        "00c9bbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00bff958",
      "DATA",
      [
        "storage",
        "00c92f68",
        null,
        "pointer"
      ]
    ],
    [
      "00bff95c",
      "DATA",
      [
        "storage",
        "00c92f40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bff948",
      "READ",
      [
        "storage",
        "00c9cbb8",
        null,
        "pointer"
      ]
    ],
    [
      "00bff958",
      "DATA",
      [
        "storage",
        "00c93f38",
        null,
        "pointer"
      ]
    ],
    [
      "00bff95c",
      "DATA",
      [
        "storage",
        "00c93f10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfe948 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bff93c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00bfe954 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:be8:8"]]
- 00bfe954 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bff948 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bb8:8"]]
+ 00bff948 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bfe970 ["INT_ADD", "register:40f0:8", ["const:bfe970:8", "const:4:8"]]
- 00bfe970 ["CALL", null, ["callee:00c59280:8"]]
+ 00bff964 ["INT_ADD", "register:40f0:8", ["const:bff964:8", "const:4:8"]]
+ 00bff964 ["CALL", null, ["callee:00c59280:8"]]
~~~


<a id="compare-a084740166b9eebb897cf8b1166ad270"></a>

### [`00bfeb98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfeb98.md) → [`00bffb8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bffb8c.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59300.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bffbe0",
      "incomplete_value": true,
      "site": "00bffbe4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00bfebec",
      "incomplete_value": true,
      "site": "00bfebf0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bffc28",
      "incomplete_value": true,
      "site": "00bffc2c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfec34",
      "incomplete_value": true,
      "site": "00bfec38",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bffbe0",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00bffbe0",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bffc28",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bffbe0",
      "READ",
      [
        "storage",
        "00c9c8d8",
        null,
        "pointer"
      ]
    ],
    [
      "00bffbe0",
      "PARAM",
      [
        "storage",
        "01128c58",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bffc28",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfebf0 ["INT_ADD", "register:40f0:8", ["const:bfebf0:8", "const:4:8"]]
- 00bfebf0 ["CALL", null, ["callee:00c59320:8"]]
+ 00bffbe4 ["INT_ADD", "register:40f0:8", ["const:bffbe4:8", "const:4:8"]]
+ 00bffbe4 ["CALL", null, ["callee:00c59320:8"]]
- 00bfec38 ["INT_ADD", "register:40f0:8", ["const:bfec38:8", "const:4:8"]]
- 00bfec38 ["CALL", null, ["callee:00c59320:8"]]
+ 00bffc2c ["INT_ADD", "register:40f0:8", ["const:bffc2c:8", "const:4:8"]]
+ 00bffc2c ["CALL", null, ["callee:00c59320:8"]]
- 00bfebc4 ["INT_ADD", "register:40f0:8", ["const:bfebc4:8", "const:4:8"]]
- 00bfebc4 ["CALL", null, ["callee:00c59300:8"]]
+ 00bffbb8 ["INT_ADD", "register:40f0:8", ["const:bffbb8:8", "const:4:8"]]
+ 00bffbb8 ["CALL", null, ["callee:00c59300:8"]]
~~~


<a id="compare-b8908d9209b31f8e6f8538d548677ef0"></a>

### [`00bfed28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfed28.md) → [`00bffd1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bffd1c.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEx

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59300.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bffd70",
      "incomplete_value": true,
      "site": "00bffd74",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00bfed7c",
      "incomplete_value": true,
      "site": "00bfed80",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bffdb8",
      "incomplete_value": true,
      "site": "00bffdbc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfedc4",
      "incomplete_value": true,
      "site": "00bfedc8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bffd70",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00bffd70",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bffdb8",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bffd70",
      "READ",
      [
        "storage",
        "00c9c8d8",
        null,
        "pointer"
      ]
    ],
    [
      "00bffd70",
      "PARAM",
      [
        "storage",
        "01128c58",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bffdb8",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfed80 ["INT_ADD", "register:40f0:8", ["const:bfed80:8", "const:4:8"]]
- 00bfed80 ["CALL", null, ["callee:00c59320:8"]]
+ 00bffd74 ["INT_ADD", "register:40f0:8", ["const:bffd74:8", "const:4:8"]]
+ 00bffd74 ["CALL", null, ["callee:00c59320:8"]]
- 00bfedc8 ["INT_ADD", "register:40f0:8", ["const:bfedc8:8", "const:4:8"]]
- 00bfedc8 ["CALL", null, ["callee:00c59320:8"]]
+ 00bffdbc ["INT_ADD", "register:40f0:8", ["const:bffdbc:8", "const:4:8"]]
+ 00bffdbc ["CALL", null, ["callee:00c59320:8"]]
- 00bfed54 ["INT_ADD", "register:40f0:8", ["const:bfed54:8", "const:4:8"]]
- 00bfed54 ["CALL", null, ["callee:00c59300:8"]]
+ 00bffd48 ["INT_ADD", "register:40f0:8", ["const:bffd48:8", "const:4:8"]]
+ 00bffd48 ["CALL", null, ["callee:00c59300:8"]]
~~~


<a id="compare-31b02071dd8888eb9e4b6e3960376080"></a>

### [`00bfeeb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfeeb8.md) → [`00bffeac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bffeac.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEy

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59300.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfff00",
      "incomplete_value": true,
      "site": "00bfff04",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00bfef0c",
      "incomplete_value": true,
      "site": "00bfef10",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bfff48",
      "incomplete_value": true,
      "site": "00bfff4c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bfef54",
      "incomplete_value": true,
      "site": "00bfef58",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bfff00",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00bfff00",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bfff48",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bfff00",
      "READ",
      [
        "storage",
        "00c9c8d8",
        null,
        "pointer"
      ]
    ],
    [
      "00bfff00",
      "PARAM",
      [
        "storage",
        "01128c58",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00bfff48",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bfef10 ["INT_ADD", "register:40f0:8", ["const:bfef10:8", "const:4:8"]]
- 00bfef10 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfff04 ["INT_ADD", "register:40f0:8", ["const:bfff04:8", "const:4:8"]]
+ 00bfff04 ["CALL", null, ["callee:00c59320:8"]]
- 00bfef58 ["INT_ADD", "register:40f0:8", ["const:bfef58:8", "const:4:8"]]
- 00bfef58 ["CALL", null, ["callee:00c59320:8"]]
+ 00bfff4c ["INT_ADD", "register:40f0:8", ["const:bfff4c:8", "const:4:8"]]
+ 00bfff4c ["CALL", null, ["callee:00c59320:8"]]
- 00bfeee4 ["INT_ADD", "register:40f0:8", ["const:bfeee4:8", "const:4:8"]]
- 00bfeee4 ["CALL", null, ["callee:00c59300:8"]]
+ 00bffed8 ["INT_ADD", "register:40f0:8", ["const:bffed8:8", "const:4:8"]]
+ 00bffed8 ["CALL", null, ["callee:00c59300:8"]]
~~~


<a id="compare-1e8977bd16f72352911b9ec5eb9c4282"></a>

### [`00bff048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff048.md) → [`00c0003c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c0003c.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEf

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59300.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.40% / 新版 97.40%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c00094",
      "incomplete_value": true,
      "site": "00c00098",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00bff0a0",
      "incomplete_value": true,
      "site": "00bff0a4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c000dc",
      "incomplete_value": true,
      "site": "00c000e0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bff0e8",
      "incomplete_value": true,
      "site": "00bff0ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c00094",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00c00094",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c000dc",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c00094",
      "READ",
      [
        "storage",
        "00c9c8d8",
        null,
        "pointer"
      ]
    ],
    [
      "00c00094",
      "PARAM",
      [
        "storage",
        "01128c58",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c000dc",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bff0a4 ["INT_ADD", "register:40f0:8", ["const:bff0a4:8", "const:4:8"]]
- 00bff0a4 ["CALL", null, ["callee:00c59320:8"]]
+ 00c00098 ["INT_ADD", "register:40f0:8", ["const:c00098:8", "const:4:8"]]
+ 00c00098 ["CALL", null, ["callee:00c59320:8"]]
- 00bff0ec ["INT_ADD", "register:40f0:8", ["const:bff0ec:8", "const:4:8"]]
- 00bff0ec ["CALL", null, ["callee:00c59320:8"]]
+ 00c000e0 ["INT_ADD", "register:40f0:8", ["const:c000e0:8", "const:4:8"]]
+ 00c000e0 ["CALL", null, ["callee:00c59320:8"]]
- 00bff078 ["INT_ADD", "register:40f0:8", ["const:bff078:8", "const:4:8"]]
- 00bff078 ["CALL", null, ["callee:00c59300:8"]]
+ 00c0006c ["INT_ADD", "register:40f0:8", ["const:c0006c:8", "const:4:8"]]
+ 00c0006c ["CALL", null, ["callee:00c59300:8"]]
~~~


<a id="compare-2b5e5ca076d349b32a743a81592ca753"></a>

### [`00bff1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff1e0.md) → [`00c001d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c001d4.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59300.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c00228",
      "incomplete_value": true,
      "site": "00c0022c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00bff234",
      "incomplete_value": true,
      "site": "00bff238",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c00270",
      "incomplete_value": true,
      "site": "00c00274",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bff27c",
      "incomplete_value": true,
      "site": "00bff280",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c00228",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00c00228",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c00270",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c00228",
      "READ",
      [
        "storage",
        "00c9c8d8",
        null,
        "pointer"
      ]
    ],
    [
      "00c00228",
      "PARAM",
      [
        "storage",
        "01128c58",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c00270",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bff238 ["INT_ADD", "register:40f0:8", ["const:bff238:8", "const:4:8"]]
- 00bff238 ["CALL", null, ["callee:00c59320:8"]]
+ 00c0022c ["INT_ADD", "register:40f0:8", ["const:c0022c:8", "const:4:8"]]
+ 00c0022c ["CALL", null, ["callee:00c59320:8"]]
- 00bff280 ["INT_ADD", "register:40f0:8", ["const:bff280:8", "const:4:8"]]
- 00bff280 ["CALL", null, ["callee:00c59320:8"]]
+ 00c00274 ["INT_ADD", "register:40f0:8", ["const:c00274:8", "const:4:8"]]
+ 00c00274 ["CALL", null, ["callee:00c59320:8"]]
- 00bff20c ["INT_ADD", "register:40f0:8", ["const:bff20c:8", "const:4:8"]]
- 00bff20c ["CALL", null, ["callee:00c59300:8"]]
+ 00c00200 ["INT_ADD", "register:40f0:8", ["const:c00200:8", "const:4:8"]]
+ 00c00200 ["CALL", null, ["callee:00c59300:8"]]
~~~


<a id="compare-6aea3b708a5d71c738e7899460ad79f6"></a>

### [`00bff370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff370.md) → [`00c00364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00364.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEPKv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59300.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c003b8",
      "incomplete_value": true,
      "site": "00c003bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00bff3c4",
      "incomplete_value": true,
      "site": "00bff3c8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c00400",
      "incomplete_value": true,
      "site": "00c00404",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bff40c",
      "incomplete_value": true,
      "site": "00bff410",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c003b8",
      "READ",
      [
        "storage",
        "00c9b908",
        null,
        "pointer"
      ]
    ],
    [
      "00c003b8",
      "PARAM",
      [
        "storage",
        "01127c98",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c00400",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c003b8",
      "READ",
      [
        "storage",
        "00c9c8d8",
        null,
        "pointer"
      ]
    ],
    [
      "00c003b8",
      "PARAM",
      [
        "storage",
        "01128c58",
        "std::__ndk1::num_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c00400",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bff3c8 ["INT_ADD", "register:40f0:8", ["const:bff3c8:8", "const:4:8"]]
- 00bff3c8 ["CALL", null, ["callee:00c59320:8"]]
+ 00c003bc ["INT_ADD", "register:40f0:8", ["const:c003bc:8", "const:4:8"]]
+ 00c003bc ["CALL", null, ["callee:00c59320:8"]]
- 00bff410 ["INT_ADD", "register:40f0:8", ["const:bff410:8", "const:4:8"]]
- 00bff410 ["CALL", null, ["callee:00c59320:8"]]
+ 00c00404 ["INT_ADD", "register:40f0:8", ["const:c00404:8", "const:4:8"]]
+ 00c00404 ["CALL", null, ["callee:00c59320:8"]]
- 00bff39c ["INT_ADD", "register:40f0:8", ["const:bff39c:8", "const:4:8"]]
- 00bff39c ["CALL", null, ["callee:00c59300:8"]]
+ 00c00390 ["INT_ADD", "register:40f0:8", ["const:c00390:8", "const:4:8"]]
+ 00c00390 ["CALL", null, ["callee:00c59300:8"]]
~~~


<a id="compare-ac394c6778ef770ed2536ee71d3e0863"></a>

### [`00bff880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff880.md) → [`00c00874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00874.md) _ZNSt6__ndk114basic_iostreamIcNS_11char_traitsIcEEEC1EPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 62.07% / 新版 62.07%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c008a0",
      "incomplete_value": true,
      "site": "00c008a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00bff8ac",
      "incomplete_value": true,
      "site": "00bff8ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00c008a4",
      "incomplete_value": true,
      "site": "00c008a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00bff8b0",
      "incomplete_value": true,
      "site": "00bff8b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c008c4",
      "incomplete_value": true,
      "site": "00c008d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "definition_site": "00bff8d0",
      "incomplete_value": true,
      "site": "00bff8dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c00890",
      "READ",
      [
        "storage",
        "00c9bbf0",
        null,
        "pointer"
      ]
    ],
    [
      "00c008a0",
      "DATA",
      [
        "storage",
        "00c93428",
        null,
        "undefined1[80]"
      ]
    ],
    [
      "00c008a4",
      "DATA",
      [
        "storage",
        "00c93400",
        null,
        "undefined1[80]"
      ]
    ]
  ],
  "added": [
    [
      "00c00890",
      "READ",
      [
        "storage",
        "00c9cbc0",
        null,
        "pointer"
      ]
    ],
    [
      "00c008a0",
      "DATA",
      [
        "storage",
        "00c943f8",
        null,
        "undefined1[80]"
      ]
    ],
    [
      "00c008a4",
      "DATA",
      [
        "storage",
        "00c943d0",
        null,
        "undefined1[80]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bff890 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c00884 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00bff89c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bf0:8"]]
- 00bff89c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c00890 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bc0:8"]]
+ 00c00890 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bff8b8 ["INT_ADD", "register:40f0:8", ["const:bff8b8:8", "const:4:8"]]
- 00bff8b8 ["CALL", null, ["callee:00c59280:8"]]
+ 00c008ac ["INT_ADD", "register:40f0:8", ["const:c008ac:8", "const:4:8"]]
+ 00c008ac ["CALL", null, ["callee:00c59280:8"]]
~~~


<a id="compare-222d64f0ed90b05337711f24a76b946a"></a>

### [`00bffda4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffda4.md) → [`00c00d98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00d98.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEEC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4b0.md) · 呼出先 1件 [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md)
- 新版 呼出元 1件 [`00c5f480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f480.md) · 呼出先 1件 [`00c5b840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b840.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c00db8",
      "incomplete_value": true,
      "site": "00c00db8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bffdc4",
      "incomplete_value": true,
      "site": "00bffdc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c00db0",
      "READ",
      [
        "storage",
        "00c9bc00",
        null,
        "pointer"
      ]
    ],
    [
      "00c00db8",
      "DATA",
      [
        "storage",
        "00c93048",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c00db0",
      "READ",
      [
        "storage",
        "00c9cbd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c00db8",
      "DATA",
      [
        "storage",
        "00c94018",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bffdb4 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c00da8 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00bffdbc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c00:8"]]
- 00bffdbc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c00db0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bd0:8"]]
+ 00c00db0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bffdc8 ["INT_ADD", "register:40f0:8", ["const:bffdc8:8", "const:4:8"]]
- 00bffdc8 ["CALL", null, ["callee:00c5b840:8"]]
+ 00c00dbc ["INT_ADD", "register:40f0:8", ["const:c00dbc:8", "const:4:8"]]
+ 00c00dbc ["CALL", null, ["callee:00c5b840:8"]]
~~~


<a id="compare-62f4a5cb47b2216b99497f7b32b691fd"></a>

### [`00bffde8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffde8.md) → [`00c00ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00ddc.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEEC1ERKS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c00e04",
      "incomplete_value": true,
      "site": "00c00e04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "00bffe10",
      "incomplete_value": true,
      "site": "00bffe10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c00df8",
      "READ",
      [
        "storage",
        "00c9bc00",
        null,
        "pointer"
      ]
    ],
    [
      "00c00e04",
      "DATA",
      [
        "storage",
        "00c93048",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c00df8",
      "READ",
      [
        "storage",
        "00c9cbd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c00e04",
      "DATA",
      [
        "storage",
        "00c94018",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bffdf8 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c00dec ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00bffe04 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c00:8"]]
- 00bffe04 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c00df8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bd0:8"]]
+ 00c00df8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bffe14 ["INT_ADD", "register:40f0:8", ["const:bffe14:8", "const:4:8"]]
- 00bffe14 ["CALL", null, ["callee:00c5b870:8"]]
+ 00c00e08 ["INT_ADD", "register:40f0:8", ["const:c00e08:8", "const:4:8"]]
+ 00c00e08 ["CALL", null, ["callee:00c5b870:8"]]
~~~


<a id="compare-de0cba059776a6cca3b1960f5811f3df"></a>

### [`00c0024c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c0024c.md) → [`00c01240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c01240.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEEC1EPNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.27% / 新版 77.27%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0126c",
      "incomplete_value": true,
      "site": "00c0126c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c01270",
      "incomplete_value": true,
      "site": "00c01270",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c0125c",
      "READ",
      [
        "storage",
        "00c9bc08",
        null,
        "pointer"
      ]
    ],
    [
      "00c0126c",
      "DATA",
      [
        "storage",
        "00c930f8",
        null,
        "pointer"
      ]
    ],
    [
      "00c01270",
      "DATA",
      [
        "storage",
        "00c930d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c0125c",
      "READ",
      [
        "storage",
        "00c9cbd8",
        null,
        "pointer"
      ]
    ],
    [
      "00c0126c",
      "DATA",
      [
        "storage",
        "00c940c8",
        null,
        "pointer"
      ]
    ],
    [
      "00c01270",
      "DATA",
      [
        "storage",
        "00c940a0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0025c ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c01250 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c00268 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c08:8"]]
- 00c00268 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c0125c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bd8:8"]]
+ 00c0125c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c00284 ["INT_ADD", "register:40f0:8", ["const:c00284:8", "const:4:8"]]
- 00c00284 ["CALL", null, ["callee:00c59280:8"]]
+ 00c01278 ["INT_ADD", "register:40f0:8", ["const:c01278:8", "const:4:8"]]
+ 00c01278 ["CALL", null, ["callee:00c59280:8"]]
~~~


<a id="compare-16faa2c688eefc824e9988e1e14ddb4b"></a>

### [`00c003b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c003b8.md) → [`00c013ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c013ac.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE6sentryC1ERS3_b

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4c0.md)
- 新版 呼出元 1件 [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f490.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.16% / 新版 99.16%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0143c",
      "incomplete_value": true,
      "site": "00c01440",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c0143c",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c0143c",
      "PARAM",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c0143c",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c0143c",
      "PARAM",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0044c ["INT_ADD", "register:40f0:8", ["const:c0044c:8", "const:4:8"]]
- 00c0044c ["CALL", null, ["callee:00c59320:8"]]
+ 00c01440 ["INT_ADD", "register:40f0:8", ["const:c01440:8", "const:4:8"]]
+ 00c01440 ["CALL", null, ["callee:00c59320:8"]]
- 00c00418 ["INT_ADD", "register:40f0:8", ["const:c00418:8", "const:4:8"]]
- 00c00418 ["CALL", null, ["callee:00c5f490:8"]]
+ 00c0140c ["INT_ADD", "register:40f0:8", ["const:c0140c:8", "const:4:8"]]
+ 00c0140c ["CALL", null, ["callee:00c5f490:8"]]
- 00c0043c ["INT_ADD", "register:40f0:8", ["const:c0043c:8", "const:4:8"]]
- 00c0043c ["CALL", null, ["callee:00c59310:8"]]
+ 00c01430 ["INT_ADD", "register:40f0:8", ["const:c01430:8", "const:4:8"]]
+ 00c01430 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-1576eb69d7fb3d9551f4721922009dcb"></a>

### [`00c008c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c008c0.md) → [`00c018b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c018b4.md) FUN_00c018b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c008b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c008b8.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c018ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c018ac.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01908",
      "incomplete_value": true,
      "site": "00c0190c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c01908",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c01908",
      "PARAM",
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
      "00c01908",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c01908",
      "PARAM",
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
- 00c00918 ["INT_ADD", "register:40f0:8", ["const:c00918:8", "const:4:8"]]
- 00c00918 ["CALL", null, ["callee:00c59320:8"]]
+ 00c0190c ["INT_ADD", "register:40f0:8", ["const:c0190c:8", "const:4:8"]]
+ 00c0190c ["CALL", null, ["callee:00c59320:8"]]
- 00c008ec ["INT_ADD", "register:40f0:8", ["const:c008ec:8", "const:4:8"]]
- 00c008ec ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c018e0 ["INT_ADD", "register:40f0:8", ["const:c018e0:8", "const:4:8"]]
+ 00c018e0 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c00908 ["INT_ADD", "register:40f0:8", ["const:c00908:8", "const:4:8"]]
- 00c00908 ["CALL", null, ["callee:00c59310:8"]]
+ 00c018fc ["INT_ADD", "register:40f0:8", ["const:c018fc:8", "const:4:8"]]
+ 00c018fc ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-147fb1452f9031e310a2a53fe13aab43"></a>

### [`00c009f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c009f8.md) → [`00c019ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c019ec.md) FUN_00c019ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c009f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c009f0.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c019e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c019e4.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.44% / 新版 98.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01a40",
      "incomplete_value": true,
      "site": "00c01a44",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c01a40",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c01a40",
      "PARAM",
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
      "00c01a40",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c01a40",
      "PARAM",
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
- 00c00a50 ["INT_ADD", "register:40f0:8", ["const:c00a50:8", "const:4:8"]]
- 00c00a50 ["CALL", null, ["callee:00c59320:8"]]
+ 00c01a44 ["INT_ADD", "register:40f0:8", ["const:c01a44:8", "const:4:8"]]
+ 00c01a44 ["CALL", null, ["callee:00c59320:8"]]
- 00c00a24 ["INT_ADD", "register:40f0:8", ["const:c00a24:8", "const:4:8"]]
- 00c00a24 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c01a18 ["INT_ADD", "register:40f0:8", ["const:c01a18:8", "const:4:8"]]
+ 00c01a18 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c00a40 ["INT_ADD", "register:40f0:8", ["const:c00a40:8", "const:4:8"]]
- 00c00a40 ["CALL", null, ["callee:00c59310:8"]]
+ 00c01a34 ["INT_ADD", "register:40f0:8", ["const:c01a34:8", "const:4:8"]]
+ 00c01a34 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-86b8e7ba8b7428449447fd59e671cfb4"></a>

### [`00c00b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00b70.md) → [`00c01b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c01b64.md) FUN_00c01b64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c00b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00b68.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c01b5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c01b5c.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01bb8",
      "incomplete_value": true,
      "site": "00c01bbc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c01bb8",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c01bb8",
      "PARAM",
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
      "00c01bb8",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c01bb8",
      "PARAM",
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
- 00c00bc8 ["INT_ADD", "register:40f0:8", ["const:c00bc8:8", "const:4:8"]]
- 00c00bc8 ["CALL", null, ["callee:00c59320:8"]]
+ 00c01bbc ["INT_ADD", "register:40f0:8", ["const:c01bbc:8", "const:4:8"]]
+ 00c01bbc ["CALL", null, ["callee:00c59320:8"]]
- 00c00b9c ["INT_ADD", "register:40f0:8", ["const:c00b9c:8", "const:4:8"]]
- 00c00b9c ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c01b90 ["INT_ADD", "register:40f0:8", ["const:c01b90:8", "const:4:8"]]
+ 00c01b90 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c00bb8 ["INT_ADD", "register:40f0:8", ["const:c00bb8:8", "const:4:8"]]
- 00c00bb8 ["CALL", null, ["callee:00c59310:8"]]
+ 00c01bac ["INT_ADD", "register:40f0:8", ["const:c01bac:8", "const:4:8"]]
+ 00c01bac ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-3ec12aa00f3020b99cb5fb304c2dcd1c"></a>

### [`00c00ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00ca8.md) → [`00c01c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c01c9c.md) FUN_00c01c9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c00ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00ca0.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c01c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c01c94.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01cf0",
      "incomplete_value": true,
      "site": "00c01cf4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c01cf0",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c01cf0",
      "PARAM",
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
      "00c01cf0",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c01cf0",
      "PARAM",
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
- 00c00d00 ["INT_ADD", "register:40f0:8", ["const:c00d00:8", "const:4:8"]]
- 00c00d00 ["CALL", null, ["callee:00c59320:8"]]
+ 00c01cf4 ["INT_ADD", "register:40f0:8", ["const:c01cf4:8", "const:4:8"]]
+ 00c01cf4 ["CALL", null, ["callee:00c59320:8"]]
- 00c00cd4 ["INT_ADD", "register:40f0:8", ["const:c00cd4:8", "const:4:8"]]
- 00c00cd4 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c01cc8 ["INT_ADD", "register:40f0:8", ["const:c01cc8:8", "const:4:8"]]
+ 00c01cc8 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c00cf0 ["INT_ADD", "register:40f0:8", ["const:c00cf0:8", "const:4:8"]]
- 00c00cf0 ["CALL", null, ["callee:00c59310:8"]]
+ 00c01ce4 ["INT_ADD", "register:40f0:8", ["const:c01ce4:8", "const:4:8"]]
+ 00c01ce4 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-b3e91b308615007d828cd7a7cdd60a17"></a>

### [`00c00e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00e24.md) → [`00c01e18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c01e18.md) FUN_00c01e18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c00e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00e1c.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c01e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c01e10.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01e6c",
      "incomplete_value": true,
      "site": "00c01e70",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c01e6c",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c01e6c",
      "PARAM",
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
      "00c01e6c",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c01e6c",
      "PARAM",
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
- 00c00e7c ["INT_ADD", "register:40f0:8", ["const:c00e7c:8", "const:4:8"]]
- 00c00e7c ["CALL", null, ["callee:00c59320:8"]]
+ 00c01e70 ["INT_ADD", "register:40f0:8", ["const:c01e70:8", "const:4:8"]]
+ 00c01e70 ["CALL", null, ["callee:00c59320:8"]]
- 00c00e50 ["INT_ADD", "register:40f0:8", ["const:c00e50:8", "const:4:8"]]
- 00c00e50 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c01e44 ["INT_ADD", "register:40f0:8", ["const:c01e44:8", "const:4:8"]]
+ 00c01e44 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c00e6c ["INT_ADD", "register:40f0:8", ["const:c00e6c:8", "const:4:8"]]
- 00c00e6c ["CALL", null, ["callee:00c59310:8"]]
+ 00c01e60 ["INT_ADD", "register:40f0:8", ["const:c01e60:8", "const:4:8"]]
+ 00c01e60 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-962425be4fe8757f220c662713613541"></a>

### [`00c00f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00f5c.md) → [`00c01f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c01f50.md) FUN_00c01f50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c00f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00f54.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c01f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c01f48.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c01fa4",
      "incomplete_value": true,
      "site": "00c01fa8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c01fa4",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c01fa4",
      "PARAM",
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
      "00c01fa4",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c01fa4",
      "PARAM",
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
- 00c00fb4 ["INT_ADD", "register:40f0:8", ["const:c00fb4:8", "const:4:8"]]
- 00c00fb4 ["CALL", null, ["callee:00c59320:8"]]
+ 00c01fa8 ["INT_ADD", "register:40f0:8", ["const:c01fa8:8", "const:4:8"]]
+ 00c01fa8 ["CALL", null, ["callee:00c59320:8"]]
- 00c00f88 ["INT_ADD", "register:40f0:8", ["const:c00f88:8", "const:4:8"]]
- 00c00f88 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c01f7c ["INT_ADD", "register:40f0:8", ["const:c01f7c:8", "const:4:8"]]
+ 00c01f7c ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c00fa4 ["INT_ADD", "register:40f0:8", ["const:c00fa4:8", "const:4:8"]]
- 00c00fa4 ["CALL", null, ["callee:00c59310:8"]]
+ 00c01f98 ["INT_ADD", "register:40f0:8", ["const:c01f98:8", "const:4:8"]]
+ 00c01f98 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-7b6975eece414e880a83adef12a13416"></a>

### [`00c01094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01094.md) → [`00c02088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02088.md) FUN_00c02088

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0108c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c0108c.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c02080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02080.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c020dc",
      "incomplete_value": true,
      "site": "00c020e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c020dc",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c020dc",
      "PARAM",
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
      "00c020dc",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c020dc",
      "PARAM",
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
- 00c010ec ["INT_ADD", "register:40f0:8", ["const:c010ec:8", "const:4:8"]]
- 00c010ec ["CALL", null, ["callee:00c59320:8"]]
+ 00c020e0 ["INT_ADD", "register:40f0:8", ["const:c020e0:8", "const:4:8"]]
+ 00c020e0 ["CALL", null, ["callee:00c59320:8"]]
- 00c010c0 ["INT_ADD", "register:40f0:8", ["const:c010c0:8", "const:4:8"]]
- 00c010c0 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c020b4 ["INT_ADD", "register:40f0:8", ["const:c020b4:8", "const:4:8"]]
+ 00c020b4 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c010dc ["INT_ADD", "register:40f0:8", ["const:c010dc:8", "const:4:8"]]
- 00c010dc ["CALL", null, ["callee:00c59310:8"]]
+ 00c020d0 ["INT_ADD", "register:40f0:8", ["const:c020d0:8", "const:4:8"]]
+ 00c020d0 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-ad8de62122b008502139b3ea863ae23b"></a>

### [`00c011cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c011cc.md) → [`00c021c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c021c0.md) FUN_00c021c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c011c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c011c4.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c021b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c021b8.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c02214",
      "incomplete_value": true,
      "site": "00c02218",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c02214",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c02214",
      "PARAM",
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
      "00c02214",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c02214",
      "PARAM",
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
- 00c01224 ["INT_ADD", "register:40f0:8", ["const:c01224:8", "const:4:8"]]
- 00c01224 ["CALL", null, ["callee:00c59320:8"]]
+ 00c02218 ["INT_ADD", "register:40f0:8", ["const:c02218:8", "const:4:8"]]
+ 00c02218 ["CALL", null, ["callee:00c59320:8"]]
- 00c011f8 ["INT_ADD", "register:40f0:8", ["const:c011f8:8", "const:4:8"]]
- 00c011f8 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c021ec ["INT_ADD", "register:40f0:8", ["const:c021ec:8", "const:4:8"]]
+ 00c021ec ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c01214 ["INT_ADD", "register:40f0:8", ["const:c01214:8", "const:4:8"]]
- 00c01214 ["CALL", null, ["callee:00c59310:8"]]
+ 00c02208 ["INT_ADD", "register:40f0:8", ["const:c02208:8", "const:4:8"]]
+ 00c02208 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-17f8805ac34722c20aebc3b1819f54f8"></a>

### [`00c01304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01304.md) → [`00c022f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c022f8.md) FUN_00c022f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c012fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c012fc.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c022f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c022f0.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0234c",
      "incomplete_value": true,
      "site": "00c02350",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c0234c",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c0234c",
      "PARAM",
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
      "00c0234c",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c0234c",
      "PARAM",
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
- 00c0135c ["INT_ADD", "register:40f0:8", ["const:c0135c:8", "const:4:8"]]
- 00c0135c ["CALL", null, ["callee:00c59320:8"]]
+ 00c02350 ["INT_ADD", "register:40f0:8", ["const:c02350:8", "const:4:8"]]
+ 00c02350 ["CALL", null, ["callee:00c59320:8"]]
- 00c01330 ["INT_ADD", "register:40f0:8", ["const:c01330:8", "const:4:8"]]
- 00c01330 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c02324 ["INT_ADD", "register:40f0:8", ["const:c02324:8", "const:4:8"]]
+ 00c02324 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c0134c ["INT_ADD", "register:40f0:8", ["const:c0134c:8", "const:4:8"]]
- 00c0134c ["CALL", null, ["callee:00c59310:8"]]
+ 00c02340 ["INT_ADD", "register:40f0:8", ["const:c02340:8", "const:4:8"]]
+ 00c02340 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-2b097b48c38c25e6318818ad52f98c33"></a>

### [`00c0143c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c0143c.md) → [`00c02430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02430.md) FUN_00c02430

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c01434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01434.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c02428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02428.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c02484",
      "incomplete_value": true,
      "site": "00c02488",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c02484",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c02484",
      "PARAM",
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
      "00c02484",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c02484",
      "PARAM",
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
- 00c01494 ["INT_ADD", "register:40f0:8", ["const:c01494:8", "const:4:8"]]
- 00c01494 ["CALL", null, ["callee:00c59320:8"]]
+ 00c02488 ["INT_ADD", "register:40f0:8", ["const:c02488:8", "const:4:8"]]
+ 00c02488 ["CALL", null, ["callee:00c59320:8"]]
- 00c01468 ["INT_ADD", "register:40f0:8", ["const:c01468:8", "const:4:8"]]
- 00c01468 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c0245c ["INT_ADD", "register:40f0:8", ["const:c0245c:8", "const:4:8"]]
+ 00c0245c ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c01484 ["INT_ADD", "register:40f0:8", ["const:c01484:8", "const:4:8"]]
- 00c01484 ["CALL", null, ["callee:00c59310:8"]]
+ 00c02478 ["INT_ADD", "register:40f0:8", ["const:c02478:8", "const:4:8"]]
+ 00c02478 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-459eb75e35ceeec8d4a8f82d534c5e95"></a>

### [`00c01574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01574.md) → [`00c02568`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02568.md) FUN_00c02568

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0156c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c0156c.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c02560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02560.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c025bc",
      "incomplete_value": true,
      "site": "00c025c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c025bc",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c025bc",
      "PARAM",
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
      "00c025bc",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c025bc",
      "PARAM",
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
- 00c015cc ["INT_ADD", "register:40f0:8", ["const:c015cc:8", "const:4:8"]]
- 00c015cc ["CALL", null, ["callee:00c59320:8"]]
+ 00c025c0 ["INT_ADD", "register:40f0:8", ["const:c025c0:8", "const:4:8"]]
+ 00c025c0 ["CALL", null, ["callee:00c59320:8"]]
- 00c015a0 ["INT_ADD", "register:40f0:8", ["const:c015a0:8", "const:4:8"]]
- 00c015a0 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c02594 ["INT_ADD", "register:40f0:8", ["const:c02594:8", "const:4:8"]]
+ 00c02594 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c015bc ["INT_ADD", "register:40f0:8", ["const:c015bc:8", "const:4:8"]]
- 00c015bc ["CALL", null, ["callee:00c59310:8"]]
+ 00c025b0 ["INT_ADD", "register:40f0:8", ["const:c025b0:8", "const:4:8"]]
+ 00c025b0 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-35e74f0ed90c14ad8ff550880410d6e1"></a>

### [`00c016ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c016ac.md) → [`00c026a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c026a0.md) FUN_00c026a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c016a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c016a4.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c02698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02698.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c026f4",
      "incomplete_value": true,
      "site": "00c026f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c026f4",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c026f4",
      "PARAM",
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
      "00c026f4",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c026f4",
      "PARAM",
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
- 00c01704 ["INT_ADD", "register:40f0:8", ["const:c01704:8", "const:4:8"]]
- 00c01704 ["CALL", null, ["callee:00c59320:8"]]
+ 00c026f8 ["INT_ADD", "register:40f0:8", ["const:c026f8:8", "const:4:8"]]
+ 00c026f8 ["CALL", null, ["callee:00c59320:8"]]
- 00c016d8 ["INT_ADD", "register:40f0:8", ["const:c016d8:8", "const:4:8"]]
- 00c016d8 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c026cc ["INT_ADD", "register:40f0:8", ["const:c026cc:8", "const:4:8"]]
+ 00c026cc ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c016f4 ["INT_ADD", "register:40f0:8", ["const:c016f4:8", "const:4:8"]]
- 00c016f4 ["CALL", null, ["callee:00c59310:8"]]
+ 00c026e8 ["INT_ADD", "register:40f0:8", ["const:c026e8:8", "const:4:8"]]
+ 00c026e8 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-8e3b13158d7b716880f5c88bb6e94ee6"></a>

### [`00c017e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c017e4.md) → [`00c027d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c027d8.md) FUN_00c027d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c017dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c017dc.md) · 呼出先 5件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 1件 [`00c027d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c027d0.md) · 呼出先 5件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0282c",
      "incomplete_value": true,
      "site": "00c02830",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00c0282c",
      "READ",
      [
        "storage",
        "00c9bc18",
        null,
        "pointer"
      ]
    ],
    [
      "00c0282c",
      "PARAM",
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
      "00c0282c",
      "READ",
      [
        "storage",
        "00c9cbe8",
        null,
        "pointer"
      ]
    ],
    [
      "00c0282c",
      "PARAM",
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
- 00c0183c ["INT_ADD", "register:40f0:8", ["const:c0183c:8", "const:4:8"]]
- 00c0183c ["CALL", null, ["callee:00c59320:8"]]
+ 00c02830 ["INT_ADD", "register:40f0:8", ["const:c02830:8", "const:4:8"]]
+ 00c02830 ["CALL", null, ["callee:00c59320:8"]]
- 00c01810 ["INT_ADD", "register:40f0:8", ["const:c01810:8", "const:4:8"]]
- 00c01810 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c02804 ["INT_ADD", "register:40f0:8", ["const:c02804:8", "const:4:8"]]
+ 00c02804 ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c0182c ["INT_ADD", "register:40f0:8", ["const:c0182c:8", "const:4:8"]]
- 00c0182c ["CALL", null, ["callee:00c59310:8"]]
+ 00c02820 ["INT_ADD", "register:40f0:8", ["const:c02820:8", "const:4:8"]]
+ 00c02820 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-2ffd37cdb3709cff3e777e3bf4bc1806"></a>

### [`00c01a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01a68.md) → [`00c02a5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02a5c.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE3getEPwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5e510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e510.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5f4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c02a9c",
      "incomplete_value": true,
      "site": "00c02aa0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c02a9c",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c02a9c",
      "PARAM",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c02a9c",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c02a9c",
      "PARAM",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c01aac ["INT_ADD", "register:40f0:8", ["const:c01aac:8", "const:4:8"]]
- 00c01aac ["CALL", null, ["callee:00c59320:8"]]
+ 00c02aa0 ["INT_ADD", "register:40f0:8", ["const:c02aa0:8", "const:4:8"]]
+ 00c02aa0 ["CALL", null, ["callee:00c59320:8"]]
- 00c01a9c ["INT_ADD", "register:40f0:8", ["const:c01a9c:8", "const:4:8"]]
- 00c01a9c ["CALL", null, ["callee:00c59310:8"]]
+ 00c02a90 ["INT_ADD", "register:40f0:8", ["const:c02a90:8", "const:4:8"]]
+ 00c02a90 ["CALL", null, ["callee:00c59310:8"]]
- 00c01aa0 ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 00c02a94 ["COPY", "register:4008:8", ["const:c9c000:8"]]
~~~


<a id="compare-eb469f74cc26f382651d7e8793345445"></a>

### [`00c01cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01cdc.md) → [`00c02cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02cd0.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE3getERNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5e520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e520.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5f4f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c02d08",
      "incomplete_value": true,
      "site": "00c02d0c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c02d08",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c02d08",
      "PARAM",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c02d08",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c02d08",
      "PARAM",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c01d18 ["INT_ADD", "register:40f0:8", ["const:c01d18:8", "const:4:8"]]
- 00c01d18 ["CALL", null, ["callee:00c59320:8"]]
+ 00c02d0c ["INT_ADD", "register:40f0:8", ["const:c02d0c:8", "const:4:8"]]
+ 00c02d0c ["CALL", null, ["callee:00c59320:8"]]
- 00c01d08 ["INT_ADD", "register:40f0:8", ["const:c01d08:8", "const:4:8"]]
- 00c01d08 ["CALL", null, ["callee:00c59310:8"]]
+ 00c02cfc ["INT_ADD", "register:40f0:8", ["const:c02cfc:8", "const:4:8"]]
+ 00c02cfc ["CALL", null, ["callee:00c59310:8"]]
- 00c01d0c ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 00c02d00 ["COPY", "register:4008:8", ["const:c9c000:8"]]
~~~


<a id="compare-9b4777d28235c8012b9548085d607766"></a>

### [`00c01ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01ed4.md) → [`00c02ec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c02/00c02ec8.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE7getlineEPwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5e530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e530.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5f500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f500.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c02f08",
      "incomplete_value": true,
      "site": "00c02f0c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c02f08",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c02f08",
      "PARAM",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c02f08",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c02f08",
      "PARAM",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c01f18 ["INT_ADD", "register:40f0:8", ["const:c01f18:8", "const:4:8"]]
- 00c01f18 ["CALL", null, ["callee:00c59320:8"]]
+ 00c02f0c ["INT_ADD", "register:40f0:8", ["const:c02f0c:8", "const:4:8"]]
+ 00c02f0c ["CALL", null, ["callee:00c59320:8"]]
- 00c01f08 ["INT_ADD", "register:40f0:8", ["const:c01f08:8", "const:4:8"]]
- 00c01f08 ["CALL", null, ["callee:00c59310:8"]]
+ 00c02efc ["INT_ADD", "register:40f0:8", ["const:c02efc:8", "const:4:8"]]
+ 00c02efc ["CALL", null, ["callee:00c59310:8"]]
- 00c01f0c ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 00c02f00 ["COPY", "register:4008:8", ["const:c9c000:8"]]
~~~


<a id="compare-cfd6b624f31790c7ee8266da194a630d"></a>

### [`00c02d8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c02d8c.md) → [`00c03d80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c03/00c03d80.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEEC1EPNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.27% / 新版 77.27%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c03dac",
      "incomplete_value": true,
      "site": "00c03dac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c03da8",
      "incomplete_value": true,
      "site": "00c03db0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
      "00c03d9c",
      "READ",
      [
        "storage",
        "00c9bc20",
        null,
        "pointer"
      ]
    ],
    [
      "00c03dac",
      "DATA",
      [
        "storage",
        "00c93158",
        null,
        "pointer"
      ]
    ],
    [
      "00c03db0",
      "DATA",
      [
        "storage",
        "00c93130",
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
        "00c9cbf0",
        null,
        "pointer"
      ]
    ],
    [
      "00c03dac",
      "DATA",
      [
        "storage",
        "00c94128",
        null,
        "pointer"
      ]
    ],
    [
      "00c03db0",
      "DATA",
      [
        "storage",
        "00c94100",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c02d9c ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c03d90 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c02da8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c20:8"]]
- 00c02da8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c03d9c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bf0:8"]]
+ 00c03d9c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c02dc4 ["INT_ADD", "register:40f0:8", ["const:c02dc4:8", "const:4:8"]]
- 00c02dc4 ["CALL", null, ["callee:00c59280:8"]]
+ 00c03db8 ["INT_ADD", "register:40f0:8", ["const:c03db8:8", "const:4:8"]]
+ 00c03db8 ["CALL", null, ["callee:00c59280:8"]]
~~~


<a id="compare-73ec7e0f437052575d8129e41adbe164"></a>

### [`00c03078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03078.md) → [`00c0406c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c04/00c0406c.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c040c0",
      "incomplete_value": true,
      "site": "00c040c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04108",
      "incomplete_value": true,
      "site": "00c0410c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c040c0",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c040c0",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04108",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c040c0",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c040c0",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04108",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c030d0 ["INT_ADD", "register:40f0:8", ["const:c030d0:8", "const:4:8"]]
- 00c030d0 ["CALL", null, ["callee:00c59320:8"]]
+ 00c040c4 ["INT_ADD", "register:40f0:8", ["const:c040c4:8", "const:4:8"]]
+ 00c040c4 ["CALL", null, ["callee:00c59320:8"]]
- 00c03118 ["INT_ADD", "register:40f0:8", ["const:c03118:8", "const:4:8"]]
- 00c03118 ["CALL", null, ["callee:00c59320:8"]]
+ 00c0410c ["INT_ADD", "register:40f0:8", ["const:c0410c:8", "const:4:8"]]
+ 00c0410c ["CALL", null, ["callee:00c59320:8"]]
- 00c030a4 ["INT_ADD", "register:40f0:8", ["const:c030a4:8", "const:4:8"]]
- 00c030a4 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c04098 ["INT_ADD", "register:40f0:8", ["const:c04098:8", "const:4:8"]]
+ 00c04098 ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-bf15fdeb0a7cb5ac15e66070d6e24802"></a>

### [`00c03208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03208.md) → [`00c041fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c04/00c041fc.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEs

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.65% / 新版 97.65%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04258",
      "incomplete_value": true,
      "site": "00c0425c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c042a0",
      "incomplete_value": true,
      "site": "00c042a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c04258",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c04258",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c042a0",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c04258",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c04258",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c042a0",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03268 ["INT_ADD", "register:40f0:8", ["const:c03268:8", "const:4:8"]]
- 00c03268 ["CALL", null, ["callee:00c59320:8"]]
+ 00c0425c ["INT_ADD", "register:40f0:8", ["const:c0425c:8", "const:4:8"]]
+ 00c0425c ["CALL", null, ["callee:00c59320:8"]]
- 00c032b0 ["INT_ADD", "register:40f0:8", ["const:c032b0:8", "const:4:8"]]
- 00c032b0 ["CALL", null, ["callee:00c59320:8"]]
+ 00c042a4 ["INT_ADD", "register:40f0:8", ["const:c042a4:8", "const:4:8"]]
+ 00c042a4 ["CALL", null, ["callee:00c59320:8"]]
- 00c03238 ["INT_ADD", "register:40f0:8", ["const:c03238:8", "const:4:8"]]
- 00c03238 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c0422c ["INT_ADD", "register:40f0:8", ["const:c0422c:8", "const:4:8"]]
+ 00c0422c ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-8e3486862d627a820770fef4010ee027"></a>

### [`00c033c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c033c0.md) → [`00c043b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c04/00c043b4.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEt

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04408",
      "incomplete_value": true,
      "site": "00c0440c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04450",
      "incomplete_value": true,
      "site": "00c04454",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c04408",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c04408",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04450",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c04408",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c04408",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04450",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03418 ["INT_ADD", "register:40f0:8", ["const:c03418:8", "const:4:8"]]
- 00c03418 ["CALL", null, ["callee:00c59320:8"]]
+ 00c0440c ["INT_ADD", "register:40f0:8", ["const:c0440c:8", "const:4:8"]]
+ 00c0440c ["CALL", null, ["callee:00c59320:8"]]
- 00c03460 ["INT_ADD", "register:40f0:8", ["const:c03460:8", "const:4:8"]]
- 00c03460 ["CALL", null, ["callee:00c59320:8"]]
+ 00c04454 ["INT_ADD", "register:40f0:8", ["const:c04454:8", "const:4:8"]]
+ 00c04454 ["CALL", null, ["callee:00c59320:8"]]
- 00c033ec ["INT_ADD", "register:40f0:8", ["const:c033ec:8", "const:4:8"]]
- 00c033ec ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c043e0 ["INT_ADD", "register:40f0:8", ["const:c043e0:8", "const:4:8"]]
+ 00c043e0 ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-9056a8a769678d0e30a1a8f5a17da250"></a>

### [`00c03550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03550.md) → [`00c04544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c04/00c04544.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.65% / 新版 97.65%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c045a0",
      "incomplete_value": true,
      "site": "00c045a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c045e8",
      "incomplete_value": true,
      "site": "00c045ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c045a0",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c045a0",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c045e8",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c045a0",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c045a0",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c045e8",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c035b0 ["INT_ADD", "register:40f0:8", ["const:c035b0:8", "const:4:8"]]
- 00c035b0 ["CALL", null, ["callee:00c59320:8"]]
+ 00c045a4 ["INT_ADD", "register:40f0:8", ["const:c045a4:8", "const:4:8"]]
+ 00c045a4 ["CALL", null, ["callee:00c59320:8"]]
- 00c035f8 ["INT_ADD", "register:40f0:8", ["const:c035f8:8", "const:4:8"]]
- 00c035f8 ["CALL", null, ["callee:00c59320:8"]]
+ 00c045ec ["INT_ADD", "register:40f0:8", ["const:c045ec:8", "const:4:8"]]
+ 00c045ec ["CALL", null, ["callee:00c59320:8"]]
- 00c03580 ["INT_ADD", "register:40f0:8", ["const:c03580:8", "const:4:8"]]
- 00c03580 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c04574 ["INT_ADD", "register:40f0:8", ["const:c04574:8", "const:4:8"]]
+ 00c04574 ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-4fe3764d13ae8a661fceaad9a2e3827d"></a>

### [`00c03708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03708.md) → [`00c046fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c04/00c046fc.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04750",
      "incomplete_value": true,
      "site": "00c04754",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04798",
      "incomplete_value": true,
      "site": "00c0479c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c04750",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c04750",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04798",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c04750",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c04750",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04798",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03760 ["INT_ADD", "register:40f0:8", ["const:c03760:8", "const:4:8"]]
- 00c03760 ["CALL", null, ["callee:00c59320:8"]]
+ 00c04754 ["INT_ADD", "register:40f0:8", ["const:c04754:8", "const:4:8"]]
+ 00c04754 ["CALL", null, ["callee:00c59320:8"]]
- 00c037a8 ["INT_ADD", "register:40f0:8", ["const:c037a8:8", "const:4:8"]]
- 00c037a8 ["CALL", null, ["callee:00c59320:8"]]
+ 00c0479c ["INT_ADD", "register:40f0:8", ["const:c0479c:8", "const:4:8"]]
+ 00c0479c ["CALL", null, ["callee:00c59320:8"]]
- 00c03734 ["INT_ADD", "register:40f0:8", ["const:c03734:8", "const:4:8"]]
- 00c03734 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c04728 ["INT_ADD", "register:40f0:8", ["const:c04728:8", "const:4:8"]]
+ 00c04728 ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-30173a8f5dae7b13f7ea7807d51655ea"></a>

### [`00c03898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03898.md) → [`00c0488c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c04/00c0488c.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c048e0",
      "incomplete_value": true,
      "site": "00c048e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04928",
      "incomplete_value": true,
      "site": "00c0492c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c048e0",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c048e0",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04928",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c048e0",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c048e0",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04928",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c038f0 ["INT_ADD", "register:40f0:8", ["const:c038f0:8", "const:4:8"]]
- 00c038f0 ["CALL", null, ["callee:00c59320:8"]]
+ 00c048e4 ["INT_ADD", "register:40f0:8", ["const:c048e4:8", "const:4:8"]]
+ 00c048e4 ["CALL", null, ["callee:00c59320:8"]]
- 00c03938 ["INT_ADD", "register:40f0:8", ["const:c03938:8", "const:4:8"]]
- 00c03938 ["CALL", null, ["callee:00c59320:8"]]
+ 00c0492c ["INT_ADD", "register:40f0:8", ["const:c0492c:8", "const:4:8"]]
+ 00c0492c ["CALL", null, ["callee:00c59320:8"]]
- 00c038c4 ["INT_ADD", "register:40f0:8", ["const:c038c4:8", "const:4:8"]]
- 00c038c4 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c048b8 ["INT_ADD", "register:40f0:8", ["const:c048b8:8", "const:4:8"]]
+ 00c048b8 ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-d32f08e215c5fa97c5a695b67f52734f"></a>

### [`00c03a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03a28.md) → [`00c04a1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c04/00c04a1c.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04a70",
      "incomplete_value": true,
      "site": "00c04a74",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04ab8",
      "incomplete_value": true,
      "site": "00c04abc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c04a70",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c04a70",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04ab8",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c04a70",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c04a70",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04ab8",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03a80 ["INT_ADD", "register:40f0:8", ["const:c03a80:8", "const:4:8"]]
- 00c03a80 ["CALL", null, ["callee:00c59320:8"]]
+ 00c04a74 ["INT_ADD", "register:40f0:8", ["const:c04a74:8", "const:4:8"]]
+ 00c04a74 ["CALL", null, ["callee:00c59320:8"]]
- 00c03ac8 ["INT_ADD", "register:40f0:8", ["const:c03ac8:8", "const:4:8"]]
- 00c03ac8 ["CALL", null, ["callee:00c59320:8"]]
+ 00c04abc ["INT_ADD", "register:40f0:8", ["const:c04abc:8", "const:4:8"]]
+ 00c04abc ["CALL", null, ["callee:00c59320:8"]]
- 00c03a54 ["INT_ADD", "register:40f0:8", ["const:c03a54:8", "const:4:8"]]
- 00c03a54 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c04a48 ["INT_ADD", "register:40f0:8", ["const:c04a48:8", "const:4:8"]]
+ 00c04a48 ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-995e52af697ba839eb157ae90946eecd"></a>

### [`00c03bb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03bb8.md) → [`00c04bac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c04/00c04bac.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEx

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04c00",
      "incomplete_value": true,
      "site": "00c04c04",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04c48",
      "incomplete_value": true,
      "site": "00c04c4c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c04c00",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c04c00",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04c48",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c04c00",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c04c00",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04c48",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03c10 ["INT_ADD", "register:40f0:8", ["const:c03c10:8", "const:4:8"]]
- 00c03c10 ["CALL", null, ["callee:00c59320:8"]]
+ 00c04c04 ["INT_ADD", "register:40f0:8", ["const:c04c04:8", "const:4:8"]]
+ 00c04c04 ["CALL", null, ["callee:00c59320:8"]]
- 00c03c58 ["INT_ADD", "register:40f0:8", ["const:c03c58:8", "const:4:8"]]
- 00c03c58 ["CALL", null, ["callee:00c59320:8"]]
+ 00c04c4c ["INT_ADD", "register:40f0:8", ["const:c04c4c:8", "const:4:8"]]
+ 00c04c4c ["CALL", null, ["callee:00c59320:8"]]
- 00c03be4 ["INT_ADD", "register:40f0:8", ["const:c03be4:8", "const:4:8"]]
- 00c03be4 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c04bd8 ["INT_ADD", "register:40f0:8", ["const:c04bd8:8", "const:4:8"]]
+ 00c04bd8 ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-73059af401fb8f75bc9f6b309dad1f3d"></a>

### [`00c03d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03d48.md) → [`00c04d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c04/00c04d3c.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEy

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04d90",
      "incomplete_value": true,
      "site": "00c04d94",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04dd8",
      "incomplete_value": true,
      "site": "00c04ddc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c04d90",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c04d90",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04dd8",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c04d90",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c04d90",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04dd8",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03da0 ["INT_ADD", "register:40f0:8", ["const:c03da0:8", "const:4:8"]]
- 00c03da0 ["CALL", null, ["callee:00c59320:8"]]
+ 00c04d94 ["INT_ADD", "register:40f0:8", ["const:c04d94:8", "const:4:8"]]
+ 00c04d94 ["CALL", null, ["callee:00c59320:8"]]
- 00c03de8 ["INT_ADD", "register:40f0:8", ["const:c03de8:8", "const:4:8"]]
- 00c03de8 ["CALL", null, ["callee:00c59320:8"]]
+ 00c04ddc ["INT_ADD", "register:40f0:8", ["const:c04ddc:8", "const:4:8"]]
+ 00c04ddc ["CALL", null, ["callee:00c59320:8"]]
- 00c03d74 ["INT_ADD", "register:40f0:8", ["const:c03d74:8", "const:4:8"]]
- 00c03d74 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c04d68 ["INT_ADD", "register:40f0:8", ["const:c04d68:8", "const:4:8"]]
+ 00c04d68 ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-626bf0c595cb4d947cf5009bac885870"></a>

### [`00c03ed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c03/00c03ed8.md) → [`00c04ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c04/00c04ecc.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEf

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.40% / 新版 97.40%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04f24",
      "incomplete_value": true,
      "site": "00c04f28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c04f6c",
      "incomplete_value": true,
      "site": "00c04f70",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c04f24",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c04f24",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04f6c",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c04f24",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c04f24",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c04f6c",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c03f34 ["INT_ADD", "register:40f0:8", ["const:c03f34:8", "const:4:8"]]
- 00c03f34 ["CALL", null, ["callee:00c59320:8"]]
+ 00c04f28 ["INT_ADD", "register:40f0:8", ["const:c04f28:8", "const:4:8"]]
+ 00c04f28 ["CALL", null, ["callee:00c59320:8"]]
- 00c03f7c ["INT_ADD", "register:40f0:8", ["const:c03f7c:8", "const:4:8"]]
- 00c03f7c ["CALL", null, ["callee:00c59320:8"]]
+ 00c04f70 ["INT_ADD", "register:40f0:8", ["const:c04f70:8", "const:4:8"]]
+ 00c04f70 ["CALL", null, ["callee:00c59320:8"]]
- 00c03f08 ["INT_ADD", "register:40f0:8", ["const:c03f08:8", "const:4:8"]]
- 00c03f08 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c04efc ["INT_ADD", "register:40f0:8", ["const:c04efc:8", "const:4:8"]]
+ 00c04efc ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-c53e9645e21e751b94091ffcb293fab4"></a>

### [`00c04070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04070.md) → [`00c05064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c05064.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEd

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.40% / 新版 97.40%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c050bc",
      "incomplete_value": true,
      "site": "00c050c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c05104",
      "incomplete_value": true,
      "site": "00c05108",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c050bc",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c050bc",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c05104",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c050bc",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c050bc",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c05104",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c040cc ["INT_ADD", "register:40f0:8", ["const:c040cc:8", "const:4:8"]]
- 00c040cc ["CALL", null, ["callee:00c59320:8"]]
+ 00c050c0 ["INT_ADD", "register:40f0:8", ["const:c050c0:8", "const:4:8"]]
+ 00c050c0 ["CALL", null, ["callee:00c59320:8"]]
- 00c04114 ["INT_ADD", "register:40f0:8", ["const:c04114:8", "const:4:8"]]
- 00c04114 ["CALL", null, ["callee:00c59320:8"]]
+ 00c05108 ["INT_ADD", "register:40f0:8", ["const:c05108:8", "const:4:8"]]
+ 00c05108 ["CALL", null, ["callee:00c59320:8"]]
- 00c040a0 ["INT_ADD", "register:40f0:8", ["const:c040a0:8", "const:4:8"]]
- 00c040a0 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c05094 ["INT_ADD", "register:40f0:8", ["const:c05094:8", "const:4:8"]]
+ 00c05094 ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-47ef631827ab638b52e82d8cbeca2935"></a>

### [`00c04208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04208.md) → [`00c051fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c051fc.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c05250",
      "incomplete_value": true,
      "site": "00c05254",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c05298",
      "incomplete_value": true,
      "site": "00c0529c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c05250",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c05250",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c05298",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c05250",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c05250",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c05298",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c04260 ["INT_ADD", "register:40f0:8", ["const:c04260:8", "const:4:8"]]
- 00c04260 ["CALL", null, ["callee:00c59320:8"]]
+ 00c05254 ["INT_ADD", "register:40f0:8", ["const:c05254:8", "const:4:8"]]
+ 00c05254 ["CALL", null, ["callee:00c59320:8"]]
- 00c042a8 ["INT_ADD", "register:40f0:8", ["const:c042a8:8", "const:4:8"]]
- 00c042a8 ["CALL", null, ["callee:00c59320:8"]]
+ 00c0529c ["INT_ADD", "register:40f0:8", ["const:c0529c:8", "const:4:8"]]
+ 00c0529c ["CALL", null, ["callee:00c59320:8"]]
- 00c04234 ["INT_ADD", "register:40f0:8", ["const:c04234:8", "const:4:8"]]
- 00c04234 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c05228 ["INT_ADD", "register:40f0:8", ["const:c05228:8", "const:4:8"]]
+ 00c05228 ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-e284e95284bde218927a2e59b9477b93"></a>

### [`00c04398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04398.md) → [`00c0538c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c0538c.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEElsEPKv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c053e0",
      "incomplete_value": true,
      "site": "00c053e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c05428",
      "incomplete_value": true,
      "site": "00c0542c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c053e0",
      "READ",
      [
        "storage",
        "00c9bc28",
        null,
        "pointer"
      ]
    ],
    [
      "00c053e0",
      "PARAM",
      [
        "storage",
        "01127ca8",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c05428",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c053e0",
      "READ",
      [
        "storage",
        "00c9cbf8",
        null,
        "pointer"
      ]
    ],
    [
      "00c053e0",
      "PARAM",
      [
        "storage",
        "01128c68",
        "std::__ndk1::num_put<wchar_t,std::__ndk1::ostreambuf_iterator<wchar_t,std::__ndk1::char_traits<wchar_t>>>::id",
        "undefined8"
      ]
    ],
    [
      "00c05428",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c043f0 ["INT_ADD", "register:40f0:8", ["const:c043f0:8", "const:4:8"]]
- 00c043f0 ["CALL", null, ["callee:00c59320:8"]]
+ 00c053e4 ["INT_ADD", "register:40f0:8", ["const:c053e4:8", "const:4:8"]]
+ 00c053e4 ["CALL", null, ["callee:00c59320:8"]]
- 00c04438 ["INT_ADD", "register:40f0:8", ["const:c04438:8", "const:4:8"]]
- 00c04438 ["CALL", null, ["callee:00c59320:8"]]
+ 00c0542c ["INT_ADD", "register:40f0:8", ["const:c0542c:8", "const:4:8"]]
+ 00c0542c ["CALL", null, ["callee:00c59320:8"]]
- 00c043c4 ["INT_ADD", "register:40f0:8", ["const:c043c4:8", "const:4:8"]]
- 00c043c4 ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c053b8 ["INT_ADD", "register:40f0:8", ["const:c053b8:8", "const:4:8"]]
+ 00c053b8 ["CALL", null, ["callee:00c5f4a0:8"]]
~~~


<a id="compare-e41d89af29ccf131030be9f8cd9e5e35"></a>

### [`00c04ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04ac8.md) → [`00c05abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c05abc.md) _ZNSt6__ndk115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEC1EOS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c04b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c04/00c04b74.md) [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c05b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c05/00c05b68.md) [`00c5b840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b840.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c05ae4",
      "incomplete_value": true,
      "site": "00c05ae4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c05b10",
      "incomplete_value": true,
      "site": "00c05b14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c05adc",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ],
    [
      "00c05ae4",
      "DATA",
      [
        "storage",
        "00c90d80",
        null,
        "pointer"
      ]
    ],
    [
      "00c05b04",
      "READ",
      [
        "storage",
        "00c9ac90",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c05adc",
      "READ",
      [
        "storage",
        "00c9c8e8",
        null,
        "pointer"
      ]
    ],
    [
      "00c05ae4",
      "DATA",
      [
        "storage",
        "00c91d50",
        null,
        "pointer"
      ]
    ],
    [
      "00c05b04",
      "READ",
      [
        "storage",
        "00c9bc60",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c04adc ["COPY", "register:40a8:8", ["const:c9b000:8"]]
+ 00c05ad0 ["COPY", "register:40a8:8", ["const:c9c000:8"]]
- 00c04ae8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:918:8"]]
- 00c04ae8 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c05adc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:8e8:8"]]
+ 00c05adc ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
- 00c04af4 ["INT_ADD", "register:40f0:8", ["const:c04af4:8", "const:4:8"]]
- 00c04af4 ["CALL", null, ["callee:00c5b840:8"]]
+ 00c05ae8 ["INT_ADD", "register:40f0:8", ["const:c05ae8:8", "const:4:8"]]
+ 00c05ae8 ["CALL", null, ["callee:00c5b840:8"]]
~~~


<a id="compare-54da6d13824f65378af099d55224ba7a"></a>

### [`00c05728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05728.md) → [`00c0671c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c0671c.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEEC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c58fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fd0.md) · 呼出先 6件 [`00bb5a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5a5c.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 1件 [`00c59fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59fa0.md) · 呼出先 6件 [`00bb6a50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6a50.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5b840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b840.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.89% / 新版 86.89%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c06740",
      "incomplete_value": true,
      "site": "00c06740",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c06764",
      "incomplete_value": true,
      "site": "00c06768",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0678c",
      "incomplete_value": true,
      "site": "00c06790",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:958:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c06738",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ],
    [
      "00c06740",
      "DATA",
      [
        "storage",
        "00c90d80",
        null,
        "pointer"
      ]
    ],
    [
      "00c06754",
      "READ",
      [
        "storage",
        "00c9b9c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c06738",
      "READ",
      [
        "storage",
        "00c9c8e8",
        null,
        "pointer"
      ]
    ],
    [
      "00c06740",
      "DATA",
      [
        "storage",
        "00c91d50",
        null,
        "pointer"
      ]
    ],
    [
      "00c06754",
      "READ",
      [
        "storage",
        "00c9c990",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0579c ["INT_ADD", "register:40f0:8", ["const:c0579c:8", "const:4:8"]]
- 00c0579c ["CALL", null, ["callee:00c5e220:8"]]
+ 00c06790 ["INT_ADD", "register:40f0:8", ["const:c06790:8", "const:4:8"]]
+ 00c06790 ["CALL", null, ["callee:00c5e220:8"]]
- 00c057c8 ["INT_ADD", "register:40f0:8", ["const:c057c8:8", "const:4:8"]]
- 00c057c8 ["CALL", null, ["callee:00c59320:8"]]
+ 00c067bc ["INT_ADD", "register:40f0:8", ["const:c067bc:8", "const:4:8"]]
+ 00c067bc ["CALL", null, ["callee:00c59320:8"]]
- 00c0573c ["COPY", "register:40a8:8", ["const:c9b000:8"]]
+ 00c06730 ["COPY", "register:40a8:8", ["const:c9c000:8"]]
~~~


<a id="compare-33551dc6e38899be73d00686559253a7"></a>

### [`00c0584c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c0584c.md) → [`00c06840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06840.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEEC1EOS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.06% / 新版 94.06%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c06868",
      "incomplete_value": true,
      "site": "00c06868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0689c",
      "incomplete_value": true,
      "site": "00c068a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c0685c",
      "READ",
      [
        "storage",
        "00c9b918",
        null,
        "pointer"
      ]
    ],
    [
      "00c06868",
      "DATA",
      [
        "storage",
        "00c90d80",
        null,
        "pointer"
      ]
    ],
    [
      "00c06894",
      "READ",
      [
        "storage",
        "00c9b9c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c0685c",
      "READ",
      [
        "storage",
        "00c9c8e8",
        null,
        "pointer"
      ]
    ],
    [
      "00c06868",
      "DATA",
      [
        "storage",
        "00c91d50",
        null,
        "pointer"
      ]
    ],
    [
      "00c06894",
      "READ",
      [
        "storage",
        "00c9c990",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0585c ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c06850 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c05868 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:918:8"]]
- 00c05868 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c0685c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8e8:8"]]
+ 00c0685c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c05878 ["INT_ADD", "register:40f0:8", ["const:c05878:8", "const:4:8"]]
- 00c05878 ["CALL", null, ["callee:00c5b870:8"]]
+ 00c0686c ["INT_ADD", "register:40f0:8", ["const:c0686c:8", "const:4:8"]]
+ 00c0686c ["CALL", null, ["callee:00c5b870:8"]]
~~~


<a id="compare-21c308b73802641810db869cb1c58e68"></a>

### [`00c059e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c059e0.md) → [`00c069d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c069d4.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEED1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58ff0.md) · 呼出先 5件 [`00bb5a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5a5c.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0d0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5d260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d260.md)
- 新版 呼出元 1件 [`00c59fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59fc0.md) · 呼出先 5件 [`00bb6a50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6a50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5b0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0a0.md) [`00c5cee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cee0.md) [`00c5e230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e230.md)

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
      "definition_site": "00c069f8",
      "incomplete_value": true,
      "site": "00c069fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c06a64",
      "incomplete_value": true,
      "site": "00c06a64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c069f0",
      "READ",
      [
        "storage",
        "00c9b9c0",
        null,
        "pointer"
      ]
    ],
    [
      "00c069fc",
      "DATA",
      [
        "storage",
        "00c91040",
        null,
        "pointer"
      ]
    ],
    [
      "00c06a1c",
      "READ",
      [
        "storage",
        "00c91058",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c069f0",
      "READ",
      [
        "storage",
        "00c9c990",
        null,
        "pointer"
      ]
    ],
    [
      "00c069fc",
      "DATA",
      [
        "storage",
        "00c92010",
        null,
        "pointer"
      ]
    ],
    [
      "00c06a1c",
      "READ",
      [
        "storage",
        "00c92028",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c059f4 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c069e8 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c059fc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:9c0:8"]]
- 00c059fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c069f0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:990:8"]]
+ 00c069f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c05a14 ["INT_ADD", "register:40f0:8", ["const:c05a14:8", "const:4:8"]]
- 00c05a14 ["CALL", null, ["callee:00c5e230:8"]]
+ 00c06a08 ["INT_ADD", "register:40f0:8", ["const:c06a08:8", "const:4:8"]]
+ 00c06a08 ["CALL", null, ["callee:00c5e230:8"]]
~~~


<a id="compare-d36420999b9bfef0c71bbf2977dc242e"></a>

### [`00c05e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05e68.md) → [`00c06e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06e5c.md) FUN_00c06e5c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00c05450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05450.md) [`00c05500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05500.md) [`00c055bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c055bc.md) [`00c0566c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c0566c.md) · 呼出先 0件 
- 新版 呼出元 4件 [`00c06444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06444.md) [`00c064f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c064f4.md) [`00c065b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c065b0.md) [`00c06660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06660.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 74.03% / 新版 74.03%

優先判定に残った影響 `return_value_candidate` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00c06e98",
      "incomplete_value": false,
      "site": "00c06e9c",
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
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00c06ea8",
      "incomplete_value": false,
      "site": "00c06eac",
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
            "const:a37:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00c06eb8",
      "incomplete_value": false,
      "site": "00c06ebc",
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
            "const:5d2:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c06e7c",
      "DATA",
      [
        "storage",
        "002a74ea",
        null,
        null
      ]
    ],
    [
      "00c06e84",
      "DATA",
      [
        "storage",
        "00310b90",
        "switchD_00c05e98::switchdataD_00310b90",
        "byte"
      ]
    ],
    [
      "00c06e98",
      "DATA",
      [
        "storage",
        "002a2e3d",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c06e7c",
      "DATA",
      [
        "storage",
        "002a7642",
        null,
        null
      ]
    ],
    [
      "00c06e84",
      "DATA",
      [
        "storage",
        "00310bd0",
        "switchD_00c06e8c::switchdataD_00310bd0",
        "byte"
      ]
    ],
    [
      "00c06e98",
      "DATA",
      [
        "storage",
        "002a2f08",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c05e80 ["COPY", "tmp:0:8", ["const:b90:8"]]
- 00c05e80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00c05e80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00c05e80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00c06e74 ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 00c06e74 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00c06e74 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00c06e74 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00c05e88 ["COPY", "tmp:0:8", ["const:4ea:8"]]
- 00c05e88 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00c05e88 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00c05e88 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00c06e7c ["COPY", "tmp:0:8", ["const:642:8"]]
+ 00c06e7c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00c06e7c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00c06e7c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00c05e8c ["COPY", "register:4050:8", ["const:c05e9c:8"]]
~~~


<a id="compare-fc0322f4e6a70998b1d6823fb7f99d66"></a>

### [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) → [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) FUN_00c06fe8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 71件 [`00c07928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07928.md) [`00c0a5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a5d0.md) [`00c0ae00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0ae00.md) [`00c0da44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0da44.md) [`00c0e128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0e/00c0e128.md) · 呼出先 4件 [`00c38008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c38/00c38008.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5e550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e550.md)
- 新版 呼出元 71件 [`00c0891c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c0891c.md) [`00c0b5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0b5c4.md) [`00c0bdf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0bdf4.md) [`00c0ea38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0e/00c0ea38.md) [`00c0f11c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0f/00c0f11c.md) · 呼出先 4件 [`00c38ffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38ffc.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5f520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f520.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c07014",
      "incomplete_value": true,
      "site": "00c0701c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c07018",
      "incomplete_value": true,
      "site": "00c0701c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c08:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c07014",
      "READ",
      [
        "storage",
        "00c9bc30",
        null,
        "pointer"
      ]
    ],
    [
      "00c07014",
      "PARAM",
      [
        "storage",
        "00c96a58",
        "std::bad_cast::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00c07018",
      "READ",
      [
        "storage",
        "00c9bc38",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c07014",
      "READ",
      [
        "storage",
        "00c9cc00",
        null,
        "pointer"
      ]
    ],
    [
      "00c07014",
      "PARAM",
      [
        "storage",
        "00c97a28",
        "std::bad_cast::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00c07018",
      "READ",
      [
        "storage",
        "00c9cc08",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c06028 ["INT_ADD", "register:40f0:8", ["const:c06028:8", "const:4:8"]]
- 00c06028 ["CALL", null, ["callee:00c58fb0:8"]]
+ 00c0701c ["INT_ADD", "register:40f0:8", ["const:c0701c:8", "const:4:8"]]
+ 00c0701c ["CALL", null, ["callee:00c58fb0:8"]]
- 00c06008 ["INT_ADD", "register:40f0:8", ["const:c06008:8", "const:4:8"]]
- 00c06008 ["CALL", null, ["callee:00c58f90:8"]]
+ 00c06ffc ["INT_ADD", "register:40f0:8", ["const:c06ffc:8", "const:4:8"]]
+ 00c06ffc ["CALL", null, ["callee:00c58f90:8"]]
- 00c06010 ["INT_ADD", "register:40f0:8", ["const:c06010:8", "const:4:8"]]
- 00c06010 ["CALL", null, ["callee:00c5f520:8"]]
+ 00c07004 ["INT_ADD", "register:40f0:8", ["const:c07004:8", "const:4:8"]]
+ 00c07004 ["CALL", null, ["callee:00c5f520:8"]]
~~~


<a id="compare-49514f5d5f01db9890f4458c9b6d6518"></a>

### [`00c06098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06098.md) → [`00c0708c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c0708c.md) FUN_00c0708c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 63.64% / 新版 63.64%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c070c0",
      "incomplete_value": true,
      "site": "00c070c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c070b8",
      "incomplete_value": true,
      "site": "00c070c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c070c4",
      "incomplete_value": true,
      "site": "00c070cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c070a8",
      "READ",
      [
        "storage",
        "00c9b360",
        null,
        "pointer"
      ]
    ],
    [
      "00c070ac",
      "READ",
      [
        "storage",
        "00c9ac90",
        null,
        "pointer"
      ]
    ],
    [
      "00c070c0",
      "DATA",
      [
        "storage",
        "00c93330",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c070a8",
      "READ",
      [
        "storage",
        "00c9c330",
        null,
        "pointer"
      ]
    ],
    [
      "00c070ac",
      "READ",
      [
        "storage",
        "00c9bc60",
        null,
        "pointer"
      ]
    ],
    [
      "00c070c0",
      "DATA",
      [
        "storage",
        "00c94300",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c060a8 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c0709c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c060ac ["COPY", "register:4048:8", ["const:c9a000:8"]]
+ 00c070a0 ["COPY", "register:4048:8", ["const:c9b000:8"]]
- 00c060b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:360:8"]]
- 00c060b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c070a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:330:8"]]
+ 00c070a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-526ef4ecafbf8ab06f22206cdefe919b"></a>

### [`00c0611c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0611c.md) → [`00c07110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07110.md) FUN_00c07110

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

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
      "definition_site": "00c07130",
      "incomplete_value": true,
      "site": "00c07144",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c07150",
      "incomplete_value": true,
      "site": "00c07150",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c07154",
      "incomplete_value": true,
      "site": "00c07158",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c07124",
      "READ",
      [
        "storage",
        "00c9b360",
        null,
        "pointer"
      ]
    ],
    [
      "00c07140",
      "READ",
      [
        "storage",
        "00c9ac90",
        null,
        "pointer"
      ]
    ],
    [
      "00c07144",
      "DATA",
      [
        "storage",
        "00c93308",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c07124",
      "READ",
      [
        "storage",
        "00c9c330",
        null,
        "pointer"
      ]
    ],
    [
      "00c07140",
      "READ",
      [
        "storage",
        "00c9bc60",
        null,
        "pointer"
      ]
    ],
    [
      "00c07144",
      "DATA",
      [
        "storage",
        "00c942d8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0612c ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c07120 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c06130 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:360:8"]]
- 00c06130 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c07124 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:330:8"]]
+ 00c07124 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c06148 ["COPY", "register:4048:8", ["const:c9a000:8"]]
+ 00c0713c ["COPY", "register:4048:8", ["const:c9b000:8"]]
~~~


<a id="compare-1621992b609036afa17f091d8d496051"></a>

### [`00c061a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c061a0.md) → [`00c07194`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07194.md) FUN_00c07194

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

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
      "definition_site": "00c071b4",
      "incomplete_value": true,
      "site": "00c071c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c071d4",
      "incomplete_value": true,
      "site": "00c071d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c071d8",
      "incomplete_value": true,
      "site": "00c071dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00c071a8",
      "READ",
      [
        "storage",
        "00c9b360",
        null,
        "pointer"
      ]
    ],
    [
      "00c071c4",
      "READ",
      [
        "storage",
        "00c9ac90",
        null,
        "pointer"
      ]
    ],
    [
      "00c071c8",
      "DATA",
      [
        "storage",
        "00c93308",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c071a8",
      "READ",
      [
        "storage",
        "00c9c330",
        null,
        "pointer"
      ]
    ],
    [
      "00c071c4",
      "READ",
      [
        "storage",
        "00c9bc60",
        null,
        "pointer"
      ]
    ],
    [
      "00c071c8",
      "DATA",
      [
        "storage",
        "00c942d8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c061b0 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00c071a4 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00c061b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:360:8"]]
- 00c061b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00c071a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:330:8"]]
+ 00c071a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00c061cc ["COPY", "register:4048:8", ["const:c9a000:8"]]
+ 00c071c0 ["COPY", "register:4048:8", ["const:c9b000:8"]]
~~~


<a id="compare-64e3347dd97a1d652427e2f8642873a0"></a>

### [`00c0622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0622c.md) → [`00c07220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07220.md) FUN_00c07220

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c06814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06814.md) · 呼出先 11件 [`00c06678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06678.md) [`00c06720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06720.md) [`00c068d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c068d8.md) [`00c06f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06f6c.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)
- 新版 呼出元 1件 [`00c07808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07808.md) · 呼出先 11件 [`00c0766c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c0766c.md) [`00c07714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07714.md) [`00c078cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c078cc.md) [`00c07f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07f60.md) [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md)

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
      "definition_site": "00c07254",
      "incomplete_value": false,
      "site": "00c0725c",
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
            "const:500:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c07264",
      "incomplete_value": false,
      "site": "00c0726c",
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
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c07268",
      "incomplete_value": true,
      "site": "00c07280",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c07248",
      "PARAM",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0725c",
      "WRITE",
      [
        "storage",
        "011279c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0725c",
      "DATA",
      [
        "storage",
        "00c93530",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c07248",
      "PARAM",
      [
        "storage",
        "01128988",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0725c",
      "WRITE",
      [
        "storage",
        "01128988",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0725c",
      "DATA",
      [
        "storage",
        "00c94500",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0624c ["COPY", "register:4098:8", ["const:1127000:8"]]
+ 00c07240 ["COPY", "register:4098:8", ["const:1128000:8"]]
- 00c06250 ["COPY", "tmp:0:8", ["const:9c8:8"]]
- 00c06250 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00c06250 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00c06250 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00c07244 ["COPY", "tmp:0:8", ["const:988:8"]]
+ 00c07244 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00c07244 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00c07244 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 00c06258 ["INT_ADD", "register:40f0:8", ["const:c06258:8", "const:4:8"]]
- 00c06258 ["CALL", null, ["callee:00c59290:8"]]
+ 00c0724c ["INT_ADD", "register:40f0:8", ["const:c0724c:8", "const:4:8"]]
+ 00c0724c ["CALL", null, ["callee:00c59290:8"]]
~~~


<a id="compare-3c35e4636ae5a52b84b58fef6d18d91a"></a>

### [`00c06678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06678.md) → [`00c0766c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c0766c.md) FUN_00c0766c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0622c.md) · 呼出先 4件 [`00c582c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582c0.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 1件 [`00c07220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07220.md) · 呼出先 4件 [`00c59290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59290.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.57% / 新版 88.57%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c07694",
      "incomplete_value": false,
      "site": "00c076a0",
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
            "const:598:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c076b4",
      "incomplete_value": true,
      "site": "00c076b8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:958:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c076a0",
      "DATA",
      [
        "storage",
        "00c935c8",
        null,
        "undefined *"
      ]
    ],
    [
      "00c076b4",
      "READ",
      [
        "storage",
        "00c9b988",
        null,
        "pointer"
      ]
    ],
    [
      "00c076b4",
      "PARAM",
      [
        "storage",
        "01127f28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c076a0",
      "DATA",
      [
        "storage",
        "00c94598",
        null,
        "undefined *"
      ]
    ],
    [
      "00c076b4",
      "READ",
      [
        "storage",
        "00c9c958",
        null,
        "pointer"
      ]
    ],
    [
      "00c076b4",
      "PARAM",
      [
        "storage",
        "01128ee8",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c066c4 ["INT_ADD", "register:40f0:8", ["const:c066c4:8", "const:4:8"]]
- 00c066c4 ["CALL", null, ["callee:00c59320:8"]]
+ 00c076b8 ["INT_ADD", "register:40f0:8", ["const:c076b8:8", "const:4:8"]]
+ 00c076b8 ["CALL", null, ["callee:00c59320:8"]]
- 00c06698 ["INT_ADD", "register:40f0:8", ["const:c06698:8", "const:4:8"]]
- 00c06698 ["CALL", null, ["callee:00c59290:8"]]
+ 00c0768c ["INT_ADD", "register:40f0:8", ["const:c0768c:8", "const:4:8"]]
+ 00c0768c ["CALL", null, ["callee:00c59290:8"]]
- 00c0669c ["COPY", "register:4040:8", ["const:c93000:8"]]
+ 00c07690 ["COPY", "register:4040:8", ["const:c94000:8"]]
~~~


<a id="compare-61aaf3d7bdf13584cbbda8151ee85869"></a>

### [`00c06720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06720.md) → [`00c07714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07714.md) FUN_00c07714

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0622c.md) · 呼出先 4件 [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4b0.md)
- 新版 呼出元 1件 [`00c07220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07220.md) · 呼出先 4件 [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f480.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.57% / 新版 88.57%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0773c",
      "incomplete_value": false,
      "site": "00c07748",
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
            "const:6c8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0775c",
      "incomplete_value": true,
      "site": "00c07760",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c07748",
      "DATA",
      [
        "storage",
        "00c936f8",
        null,
        "undefined *"
      ]
    ],
    [
      "00c0775c",
      "READ",
      [
        "storage",
        "00c9bc78",
        null,
        "pointer"
      ]
    ],
    [
      "00c0775c",
      "PARAM",
      [
        "storage",
        "01127f38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c07748",
      "DATA",
      [
        "storage",
        "00c946c8",
        null,
        "undefined *"
      ]
    ],
    [
      "00c0775c",
      "READ",
      [
        "storage",
        "00c9cc48",
        null,
        "pointer"
      ]
    ],
    [
      "00c0775c",
      "PARAM",
      [
        "storage",
        "01128ef8",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0676c ["INT_ADD", "register:40f0:8", ["const:c0676c:8", "const:4:8"]]
- 00c0676c ["CALL", null, ["callee:00c59320:8"]]
+ 00c07760 ["INT_ADD", "register:40f0:8", ["const:c07760:8", "const:4:8"]]
+ 00c07760 ["CALL", null, ["callee:00c59320:8"]]
- 00c06740 ["INT_ADD", "register:40f0:8", ["const:c06740:8", "const:4:8"]]
- 00c06740 ["CALL", null, ["callee:00c5f480:8"]]
+ 00c07734 ["INT_ADD", "register:40f0:8", ["const:c07734:8", "const:4:8"]]
+ 00c07734 ["CALL", null, ["callee:00c5f480:8"]]
- 00c06744 ["COPY", "register:4040:8", ["const:c93000:8"]]
+ 00c07738 ["COPY", "register:4040:8", ["const:c94000:8"]]
~~~


<a id="compare-f5b23b2ad42f0faad82e79592517f117"></a>

### [`00c06814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06814.md) → [`00c07808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07808.md) _ZNSt6__ndk18ios_base4InitC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5e5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5c0.md) · 呼出先 5件 [`00c0622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0622c.md) [`00c067c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c067c8.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00c5f590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f590.md) · 呼出先 5件 [`00c07220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07220.md) [`00c077bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c077bc.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

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
      "definition_site": "00c0783c",
      "incomplete_value": false,
      "site": "00c07840",
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
            "const:c10:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c07850",
      "incomplete_value": false,
      "site": "00c07864",
      "value": [
        "leaf",
        "const:c077bc:8"
      ]
    },
    "old": {
      "definition_site": "00c0685c",
      "incomplete_value": false,
      "site": "00c06870",
      "value": [
        "leaf",
        "const:c067c8:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c07858",
      "incomplete_value": false,
      "site": "00c07864",
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
            "const:c08:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c07820",
      "READ",
      [
        "storage",
        "01127c50",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0783c",
      "PARAM",
      [
        "storage",
        "01127c50",
        null,
        "undefined1"
      ]
    ],
    [
      "00c07850",
      "PARAM",
      [
        "storage",
        "00c067c8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00c07820",
      "READ",
      [
        "storage",
        "01128c10",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0783c",
      "PARAM",
      [
        "storage",
        "01128c10",
        null,
        "undefined1"
      ]
    ],
    [
      "00c07850",
      "PARAM",
      [
        "storage",
        "00c077bc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0684c ["INT_ADD", "register:40f0:8", ["const:c0684c:8", "const:4:8"]]
- 00c0684c ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c07840 ["INT_ADD", "register:40f0:8", ["const:c07840:8", "const:4:8"]]
+ 00c07840 ["CALL", null, ["callee:00c58ef0:8"]]
- 00c06870 ["INT_ADD", "register:40f0:8", ["const:c06870:8", "const:4:8"]]
- 00c06870 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00c07864 ["INT_ADD", "register:40f0:8", ["const:c07864:8", "const:4:8"]]
+ 00c07864 ["CALL", null, ["callee:00c58ed0:8"]]
- 00c06824 ["COPY", "register:4040:8", ["const:1127000:8"]]
+ 00c07818 ["COPY", "register:4040:8", ["const:1128000:8"]]
~~~


<a id="compare-ed51166de29a58660435099cad443309"></a>

### [`00c068d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c068d8.md) → [`00c078cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c078cc.md) FUN_00c078cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0622c.md) · 呼出先 2件 [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)
- 新版 呼出元 1件 [`00c07220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07220.md) · 呼出先 2件 [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c5f050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c078e8",
      "incomplete_value": true,
      "site": "00c078f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:958:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c07944",
      "incomplete_value": false,
      "site": "00c07948",
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
            "const:e46:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c078e8",
      "READ",
      [
        "storage",
        "00c9b988",
        null,
        "pointer"
      ]
    ],
    [
      "00c078e8",
      "PARAM",
      [
        "storage",
        "01127f28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c07944",
      "PARAM",
      [
        "storage",
        "002b5d77",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c078e8",
      "READ",
      [
        "storage",
        "00c9c958",
        null,
        "pointer"
      ]
    ],
    [
      "00c078e8",
      "PARAM",
      [
        "storage",
        "01128ee8",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c07944",
      "PARAM",
      [
        "storage",
        "002b5e46",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c068fc ["INT_ADD", "register:40f0:8", ["const:c068fc:8", "const:4:8"]]
- 00c068fc ["CALL", null, ["callee:00c59320:8"]]
+ 00c078f0 ["INT_ADD", "register:40f0:8", ["const:c078f0:8", "const:4:8"]]
+ 00c078f0 ["CALL", null, ["callee:00c59320:8"]]
- 00c06954 ["INT_ADD", "register:40f0:8", ["const:c06954:8", "const:4:8"]]
- 00c06954 ["CALL", null, ["callee:00c5f050:8"]]
+ 00c07948 ["INT_ADD", "register:40f0:8", ["const:c07948:8", "const:4:8"]]
+ 00c07948 ["CALL", null, ["callee:00c5f050:8"]]
- 00c068ec ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 00c078e0 ["COPY", "register:4008:8", ["const:c9c000:8"]]
~~~


<a id="compare-e56138e538b0422a691a2ef9a23dfd26"></a>

### [`00c06c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06c6c.md) → [`00c07c60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07c60.md) FUN_00c07c60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c07c8c",
      "incomplete_value": true,
      "site": "00c07c90",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:958:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c07c8c",
      "READ",
      [
        "storage",
        "00c9b988",
        null,
        "pointer"
      ]
    ],
    [
      "00c07c8c",
      "PARAM",
      [
        "storage",
        "01127f28",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c07c8c",
      "READ",
      [
        "storage",
        "00c9c958",
        null,
        "pointer"
      ]
    ],
    [
      "00c07c8c",
      "PARAM",
      [
        "storage",
        "01128ee8",
        "std::__ndk1::codecvt<char,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c06c9c ["INT_ADD", "register:40f0:8", ["const:c06c9c:8", "const:4:8"]]
- 00c06c9c ["CALL", null, ["callee:00c59320:8"]]
+ 00c07c90 ["INT_ADD", "register:40f0:8", ["const:c07c90:8", "const:4:8"]]
+ 00c07c90 ["CALL", null, ["callee:00c59320:8"]]
- 00c06c8c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c06c8c ["INT_ADD", "register:40f0:8", ["const:c06c8c:8", "const:4:8"]]
- 00c06c8c ["CALLIND", null, ["register:0:8"]]
+ 00c07c80 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c07c80 ["INT_ADD", "register:40f0:8", ["const:c07c80:8", "const:4:8"]]
+ 00c07c80 ["CALLIND", null, ["register:0:8"]]
- 00c06c90 ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 00c07c84 ["COPY", "register:4008:8", ["const:c9c000:8"]]
~~~


<a id="compare-c207f5aead6ff3faa1fcabc46ec7b0eb"></a>

### [`00c06f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c06f6c.md) → [`00c07f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07f60.md) FUN_00c07f60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c0622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c0622c.md) · 呼出先 2件 [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c5e080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e080.md)
- 新版 呼出元 1件 [`00c07220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07220.md) · 呼出先 2件 [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c5f050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c07f7c",
      "incomplete_value": true,
      "site": "00c07f84",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c07fd8",
      "incomplete_value": false,
      "site": "00c07fdc",
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
            "const:e46:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c07f7c",
      "READ",
      [
        "storage",
        "00c9bc78",
        null,
        "pointer"
      ]
    ],
    [
      "00c07f7c",
      "PARAM",
      [
        "storage",
        "01127f38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c07fd8",
      "PARAM",
      [
        "storage",
        "002b5d77",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00c07f7c",
      "READ",
      [
        "storage",
        "00c9cc48",
        null,
        "pointer"
      ]
    ],
    [
      "00c07f7c",
      "PARAM",
      [
        "storage",
        "01128ef8",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c07fd8",
      "PARAM",
      [
        "storage",
        "002b5e46",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c06f90 ["INT_ADD", "register:40f0:8", ["const:c06f90:8", "const:4:8"]]
- 00c06f90 ["CALL", null, ["callee:00c59320:8"]]
+ 00c07f84 ["INT_ADD", "register:40f0:8", ["const:c07f84:8", "const:4:8"]]
+ 00c07f84 ["CALL", null, ["callee:00c59320:8"]]
- 00c06fe8 ["INT_ADD", "register:40f0:8", ["const:c06fe8:8", "const:4:8"]]
- 00c06fe8 ["CALL", null, ["callee:00c5f050:8"]]
+ 00c07fdc ["INT_ADD", "register:40f0:8", ["const:c07fdc:8", "const:4:8"]]
+ 00c07fdc ["CALL", null, ["callee:00c5f050:8"]]
- 00c06f80 ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 00c07f74 ["COPY", "register:4008:8", ["const:c9c000:8"]]
~~~


<a id="compare-3cd488bafdefe1dee5869547705aebe0"></a>

### [`00c072f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c072f8.md) → [`00c082ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c082ec.md) FUN_00c082ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c08318",
      "incomplete_value": true,
      "site": "00c0831c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00c08318",
      "READ",
      [
        "storage",
        "00c9bc78",
        null,
        "pointer"
      ]
    ],
    [
      "00c08318",
      "PARAM",
      [
        "storage",
        "01127f38",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c08318",
      "READ",
      [
        "storage",
        "00c9cc48",
        null,
        "pointer"
      ]
    ],
    [
      "00c08318",
      "PARAM",
      [
        "storage",
        "01128ef8",
        "std::__ndk1::codecvt<wchar_t,char,mbstate_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c07328 ["INT_ADD", "register:40f0:8", ["const:c07328:8", "const:4:8"]]
- 00c07328 ["CALL", null, ["callee:00c59320:8"]]
+ 00c0831c ["INT_ADD", "register:40f0:8", ["const:c0831c:8", "const:4:8"]]
+ 00c0831c ["CALL", null, ["callee:00c59320:8"]]
- 00c07318 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c07318 ["INT_ADD", "register:40f0:8", ["const:c07318:8", "const:4:8"]]
- 00c07318 ["CALLIND", null, ["register:0:8"]]
+ 00c0830c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0830c ["INT_ADD", "register:40f0:8", ["const:c0830c:8", "const:4:8"]]
+ 00c0830c ["CALLIND", null, ["register:0:8"]]
- 00c0731c ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 00c08310 ["COPY", "register:4008:8", ["const:c9c000:8"]]
~~~


<a id="compare-039c693907b91f3bf47608441aa2e86c"></a>

### [`00c075c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c075c0.md) → [`00c085b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c085b4.md) _INIT_2

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c068a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c06/00c068a4.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c5e5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e5c0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c07898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c07/00c07898.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c5f590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f590.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c085cc",
      "incomplete_value": false,
      "site": "00c085d0",
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
            "const:980:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00c085cc",
      "PARAM",
      [
        "storage",
        "011279c0",
        null,
        null
      ]
    ],
    [
      "00c085dc",
      "PARAM",
      [
        "storage",
        "00c63060",
        null,
        "pointer"
      ]
    ],
    [
      "00c085e0",
      "READ",
      [
        "storage",
        "00c9bc80",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00c085cc",
      "PARAM",
      [
        "storage",
        "01128980",
        null,
        null
      ]
    ],
    [
      "00c085dc",
      "PARAM",
      [
        "storage",
        "00c64030",
        null,
        "pointer"
      ]
    ],
    [
      "00c085e0",
      "READ",
      [
        "storage",
        "00c9cc50",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c075dc ["INT_ADD", "register:40f0:8", ["const:c075dc:8", "const:4:8"]]
- 00c075dc ["CALL", null, ["callee:00c5f590:8"]]
+ 00c085d0 ["INT_ADD", "register:40f0:8", ["const:c085d0:8", "const:4:8"]]
+ 00c085d0 ["CALL", null, ["callee:00c5f590:8"]]
- 00c075d0 ["COPY", "register:4098:8", ["const:1127000:8"]]
+ 00c085c4 ["COPY", "register:4098:8", ["const:1128000:8"]]
- 00c075d4 ["COPY", "tmp:0:8", ["const:9c0:8"]]
- 00c075d4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00c075d4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00c075d4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00c085c8 ["COPY", "tmp:0:8", ["const:980:8"]]
+ 00c085c8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00c085c8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00c085c8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-b46d8725607bb8e770cc94ed712249bf"></a>

### [`00c07928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07928.md) → [`00c0891c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c0891c.md) _ZNKSt6__ndk17num_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_getES4_S4_RNS_8ios_baseERjRb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c07bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c07/00c07bb4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c08ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c08/00c08ba8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

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
      "definition_site": "00c089a0",
      "incomplete_value": true,
      "site": "00c089a0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c08a18",
      "incomplete_value": true,
      "site": "00c08a18",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c089a8",
      "incomplete_value": true,
      "site": "00c089ac",
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
      "00c08998",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c089a0",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c089a4",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c08998",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c089a0",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c089a4",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c079e0 ["INT_ADD", "register:40f0:8", ["const:c079e0:8", "const:4:8"]]
- 00c079e0 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c089d4 ["INT_ADD", "register:40f0:8", ["const:c089d4:8", "const:4:8"]]
+ 00c089d4 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c07a58 ["INT_ADD", "register:40f0:8", ["const:c07a58:8", "const:4:8"]]
- 00c07a58 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c08a4c ["INT_ADD", "register:40f0:8", ["const:c08a4c:8", "const:4:8"]]
+ 00c08a4c ["CALL", null, ["callee:00c5ef80:8"]]
- 00c07970 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c07970 ["INT_ADD", "register:40f0:8", ["const:c07970:8", "const:4:8"]]
- 00c07970 ["CALLIND", null, ["register:0:8"]]
+ 00c08964 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c08964 ["INT_ADD", "register:40f0:8", ["const:c08964:8", "const:4:8"]]
+ 00c08964 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-589a9596da95a12f263b46ae3edbafab"></a>

### [`00c0a5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0a5d0.md) → [`00c0b5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0b5c4.md) _ZNKSt6__ndk17num_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_getES4_S4_RNS_8ios_baseERjRPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c0acc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0acc4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 12件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c0bcb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0bcb8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

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
      "definition_site": "00c0b610",
      "incomplete_value": true,
      "site": "00c0b610",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9b000:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c0ba8c",
      "incomplete_value": true,
      "site": "00c0ba8c",
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
    "ordinal": 33,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c0b618",
      "incomplete_value": true,
      "site": "00c0b61c",
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
      "00c0b608",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "00c0b610",
      "DATA",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0b614",
      "READ",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c0b608",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "00c0b610",
      "DATA",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "00c0b614",
      "READ",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0a650 ["INT_ADD", "register:40f0:8", ["const:c0a650:8", "const:4:8"]]
- 00c0a650 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c0b644 ["INT_ADD", "register:40f0:8", ["const:c0b644:8", "const:4:8"]]
+ 00c0b644 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c0a690 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0a690 ["INT_ADD", "register:40f0:8", ["const:c0a690:8", "const:4:8"]]
- 00c0a690 ["CALLIND", null, ["register:0:8"]]
+ 00c0b684 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0b684 ["INT_ADD", "register:40f0:8", ["const:c0b684:8", "const:4:8"]]
+ 00c0b684 ["CALLIND", null, ["register:0:8"]]
- 00c0a998 ["INT_ADD", "register:40f0:8", ["const:c0a998:8", "const:4:8"]]
- 00c0a998 ["CALL", null, ["callee:00c0bcb8:8"]]
+ 00c0b98c ["INT_ADD", "register:40f0:8", ["const:c0b98c:8", "const:4:8"]]
+ 00c0b98c ["CALL", null, ["callee:00c0bcb8:8"]]
~~~


<a id="compare-99f828e952bf926ffefcf445a0afdb31"></a>

### [`00c0ad78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0ad78.md) → [`00c0bd6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0bd6c.md) _ZNSt6__ndk16__clocEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c5d2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c5e2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 3件, `return_value_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c0bdc8",
      "incomplete_value": true,
      "site": "00c0bdc8",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0bda8",
      "incomplete_value": false,
      "site": "00c0bdac",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00c0bdb8",
      "incomplete_value": false,
      "site": "00c0bdc4",
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
      "00c0bd88",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0bd90",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0bda8",
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
      "00c0bd88",
      "READ",
      [
        "storage",
        "01128d60",
        null,
        "undefined1"
      ]
    ],
    [
      "00c0bd90",
      "READ",
      [
        "storage",
        "01128d58",
        null,
        "undefined8"
      ]
    ],
    [
      "00c0bda8",
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
- 00c0adb8 ["INT_ADD", "register:40f0:8", ["const:c0adb8:8", "const:4:8"]]
- 00c0adb8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00c0bdac ["INT_ADD", "register:40f0:8", ["const:c0bdac:8", "const:4:8"]]
+ 00c0bdac ["CALL", null, ["callee:00c58ef0:8"]]
- 00c0add0 ["INT_ADD", "register:40f0:8", ["const:c0add0:8", "const:4:8"]]
- 00c0add0 ["CALL", null, ["callee:00c5e2c0:8"]]
+ 00c0bdc4 ["INT_ADD", "register:40f0:8", ["const:c0bdc4:8", "const:4:8"]]
+ 00c0bdc4 ["CALL", null, ["callee:00c5e2c0:8"]]
- 00c0add4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d98:8"]]
- 00c0add4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00c0bdc8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d58:8"]]
+ 00c0bdc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-2a1133e02af7f092a2f118a4c89cdeaf"></a>

### [`00c0ae00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0ae00.md) → [`00c0bdf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0bdf4.md) _ZNKSt6__ndk17num_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_getES4_S4_RNS_8ios_baseERjRb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c0c080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c080.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md)

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
      "definition_site": "00c0be78",
      "incomplete_value": true,
      "site": "00c0be78",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0bef0",
      "incomplete_value": true,
      "site": "00c0bef0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c0be80",
      "incomplete_value": true,
      "site": "00c0be84",
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
      "00c0be70",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c0be78",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0be7c",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c0be70",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c0be78",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0be7c",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0aeb8 ["INT_ADD", "register:40f0:8", ["const:c0aeb8:8", "const:4:8"]]
- 00c0aeb8 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c0beac ["INT_ADD", "register:40f0:8", ["const:c0beac:8", "const:4:8"]]
+ 00c0beac ["CALL", null, ["callee:00c5ef80:8"]]
- 00c0af30 ["INT_ADD", "register:40f0:8", ["const:c0af30:8", "const:4:8"]]
- 00c0af30 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c0bf24 ["INT_ADD", "register:40f0:8", ["const:c0bf24:8", "const:4:8"]]
+ 00c0bf24 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c0ae48 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0ae48 ["INT_ADD", "register:40f0:8", ["const:c0ae48:8", "const:4:8"]]
- 00c0ae48 ["CALLIND", null, ["register:0:8"]]
+ 00c0be3c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0be3c ["INT_ADD", "register:40f0:8", ["const:c0be3c:8", "const:4:8"]]
+ 00c0be3c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2f2563c8b4e4071903958d5158b1d3b1"></a>

### [`00c0da44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0d/00c0da44.md) → [`00c0ea38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0e/00c0ea38.md) _ZNKSt6__ndk17num_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_getES4_S4_RNS_8ios_baseERjRPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`00c05ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05ff4.md) [`00c0acc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0a/00c0acc4.md) [`00c36054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c36/00c36054.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 12件 [`00c06fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c06fe8.md) [`00c0bcb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0b/00c0bcb8.md) [`00c37048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c37/00c37048.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination, store_value

命令の説明率　旧版 95.79% / 新版 95.79%

優先判定に残った影響 `call_argument_candidate` 8件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00c0ea84",
      "incomplete_value": true,
      "site": "00c0ea84",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00c0eef4",
      "incomplete_value": true,
      "site": "00c0eef4",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 33,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00c0ea8c",
      "incomplete_value": true,
      "site": "00c0ea90",
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
      "00c0ea7c",
      "READ",
      [
        "storage",
        "00c9bc10",
        null,
        "pointer"
      ]
    ],
    [
      "00c0ea84",
      "DATA",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0ea88",
      "READ",
      [
        "storage",
        "01127f08",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00c0ea7c",
      "READ",
      [
        "storage",
        "00c9cbe0",
        null,
        "pointer"
      ]
    ],
    [
      "00c0ea84",
      "DATA",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ],
    [
      "00c0ea88",
      "READ",
      [
        "storage",
        "01128ec8",
        "std::__ndk1::ctype<wchar_t>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00c0dac4 ["INT_ADD", "register:40f0:8", ["const:c0dac4:8", "const:4:8"]]
- 00c0dac4 ["CALL", null, ["callee:00c5ef80:8"]]
+ 00c0eab8 ["INT_ADD", "register:40f0:8", ["const:c0eab8:8", "const:4:8"]]
+ 00c0eab8 ["CALL", null, ["callee:00c5ef80:8"]]
- 00c0db04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0db04 ["INT_ADD", "register:40f0:8", ["const:c0db04:8", "const:4:8"]]
- 00c0db04 ["CALLIND", null, ["register:0:8"]]
+ 00c0eaf8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0eaf8 ["INT_ADD", "register:40f0:8", ["const:c0eaf8:8", "const:4:8"]]
+ 00c0eaf8 ["CALLIND", null, ["register:0:8"]]
- 00c0de04 ["INT_ADD", "register:40f0:8", ["const:c0de04:8", "const:4:8"]]
- 00c0de04 ["CALL", null, ["callee:00c0bcb8:8"]]
+ 00c0edf8 ["INT_ADD", "register:40f0:8", ["const:c0edf8:8", "const:4:8"]]
+ 00c0edf8 ["CALL", null, ["callee:00c0bcb8:8"]]
~~~


