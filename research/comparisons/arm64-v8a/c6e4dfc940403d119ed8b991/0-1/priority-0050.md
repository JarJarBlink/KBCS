# v16.0.1 → v16.0.2 · 最優先の変更候補 (50)

[一覧の目次](README.md)

<a id="compare-0a55d374a4cf38126f39b18459eeeb84"></a>

### [`0088a370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a370.md) → [`0088a3c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a3c8.md) FUN_0088a3c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088a3cc",
      "incomplete_value": false,
      "site": "0088a3d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:640:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a374",
      "incomplete_value": false,
      "site": "0088a378",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:570:8"
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
      "0088a3d0",
      "DATA",
      [
        "storage",
        "00c81570",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088a3d0",
      "DATA",
      [
        "storage",
        "00c81640",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a374 ["COPY", "tmp:0:8", ["const:570:8"]]
- 0088a374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088a374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088a374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088a3cc ["COPY", "tmp:0:8", ["const:640:8"]]
+ 0088a3cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a3cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a3cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4235f0634fc9f73b6ac1bb098b0bdf6b"></a>

### [`0088a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a7d0.md) → [`0088a828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a828.md) FUN_0088a828

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 3件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58190.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.10% / 新版 88.10%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088a880",
      "incomplete_value": false,
      "site": "0088a884",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:128:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a828",
      "incomplete_value": false,
      "site": "0088a82c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:58:8"
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
      "definition_site": "0088a89c",
      "incomplete_value": false,
      "site": "0088a8a4",
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
            "const:35:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a844",
      "incomplete_value": false,
      "site": "0088a84c",
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
            "const:4:8"
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
      "definition_site": "0088a8ac",
      "incomplete_value": false,
      "site": "0088a8b4",
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
            "const:ea7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a854",
      "incomplete_value": false,
      "site": "0088a85c",
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
            "const:e76:8"
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
      "0088a86c",
      "DATA",
      [
        "storage",
        "00c81610",
        null,
        "undefined *"
      ]
    ],
    [
      "0088a884",
      "DATA",
      [
        "storage",
        "00c81058",
        null,
        "pointer"
      ]
    ],
    [
      "0088a89c",
      "PARAM",
      [
        "storage",
        "002b3004",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088a86c",
      "DATA",
      [
        "storage",
        "00c816e0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088a884",
      "DATA",
      [
        "storage",
        "00c81128",
        null,
        "pointer"
      ]
    ],
    [
      "0088a89c",
      "PARAM",
      [
        "storage",
        "002b3035",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a7f4 ["INT_ADD", "register:40f0:8", ["const:88a7f4:8", "const:4:8"]]
- 0088a7f4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088a84c ["INT_ADD", "register:40f0:8", ["const:88a84c:8", "const:4:8"]]
+ 0088a84c ["CALL", null, ["callee:00c57f60:8"]]
- 0088a84c ["INT_ADD", "register:40f0:8", ["const:88a84c:8", "const:4:8"]]
- 0088a84c ["CALL", null, ["callee:00c58260:8"]]
+ 0088a8a4 ["INT_ADD", "register:40f0:8", ["const:88a8a4:8", "const:4:8"]]
+ 0088a8a4 ["CALL", null, ["callee:00c58260:8"]]
- 0088a85c ["INT_ADD", "register:40f0:8", ["const:88a85c:8", "const:4:8"]]
- 0088a85c ["CALL", null, ["callee:00c58260:8"]]
+ 0088a8b4 ["INT_ADD", "register:40f0:8", ["const:88a8b4:8", "const:4:8"]]
+ 0088a8b4 ["CALL", null, ["callee:00c58260:8"]]
~~~


<a id="compare-c8ba16b9e3f7b408618c2f1953e4d8ca"></a>

### [`0088a8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a8a4.md) → [`0088a8fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a8fc.md) FUN_0088a8fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088a900",
      "incomplete_value": false,
      "site": "0088a904",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:6e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a8a8",
      "incomplete_value": false,
      "site": "0088a8ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:610:8"
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
      "0088a904",
      "DATA",
      [
        "storage",
        "00c81610",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088a904",
      "DATA",
      [
        "storage",
        "00c816e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a8a8 ["COPY", "tmp:0:8", ["const:610:8"]]
- 0088a8a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088a8a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088a8a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088a900 ["COPY", "tmp:0:8", ["const:6e0:8"]]
+ 0088a900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ff89253fe610c6ad7c83c6248bd23778"></a>

### [`0088a8b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a8b4.md) → [`0088a90c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a90c.md) FUN_0088a90c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088a91c",
      "incomplete_value": false,
      "site": "0088a924",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:6e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088a8c4",
      "incomplete_value": false,
      "site": "0088a8cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:610:8"
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
      "0088a924",
      "DATA",
      [
        "storage",
        "00c81610",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088a924",
      "DATA",
      [
        "storage",
        "00c816e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088a8c4 ["COPY", "tmp:0:8", ["const:610:8"]]
- 0088a8c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088a8c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088a8c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088a91c ["COPY", "tmp:0:8", ["const:6e0:8"]]
+ 0088a91c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a91c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088a91c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088a8d0 ["INT_ADD", "register:40f0:8", ["const:88a8d0:8", "const:4:8"]]
- 0088a8d0 ["CALL", null, ["callee:00c57f70:8"]]
+ 0088a928 ["INT_ADD", "register:40f0:8", ["const:88a928:8", "const:4:8"]]
+ 0088a928 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-e659d4b1ea885c49e6edf05de77f66d2"></a>

### [`0088ad68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088ad68.md) → [`0088adc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088adc0.md) FUN_0088adc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 3件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58190.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.05% / 新版 86.05%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088adf8",
      "incomplete_value": false,
      "site": "0088ae04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:730:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088ada0",
      "incomplete_value": false,
      "site": "0088adac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:660:8"
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
      "definition_site": "0088ae18",
      "incomplete_value": false,
      "site": "0088ae1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:148:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088adc0",
      "incomplete_value": false,
      "site": "0088adc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:78:8"
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
      "definition_site": "0088ae38",
      "incomplete_value": false,
      "site": "0088ae40",
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
            "const:dd9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088ade0",
      "incomplete_value": false,
      "site": "0088ade8",
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
            "const:e35:8"
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
      "0088ae04",
      "DATA",
      [
        "storage",
        "00c81660",
        null,
        "undefined *"
      ]
    ],
    [
      "0088ae1c",
      "DATA",
      [
        "storage",
        "00c81078",
        null,
        "pointer"
      ]
    ],
    [
      "0088ae38",
      "PARAM",
      [
        "storage",
        "002a7e35",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088ae04",
      "DATA",
      [
        "storage",
        "00c81730",
        null,
        "undefined *"
      ]
    ],
    [
      "0088ae1c",
      "DATA",
      [
        "storage",
        "00c81148",
        null,
        "pointer"
      ]
    ],
    [
      "0088ae38",
      "PARAM",
      [
        "storage",
        "002a7dd9",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088ada0 ["COPY", "tmp:0:8", ["const:660:8"]]
- 0088ada0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088ada0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088ada0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088adf8 ["COPY", "tmp:0:8", ["const:730:8"]]
+ 0088adf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088adf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088adf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088ade8 ["INT_ADD", "register:40f0:8", ["const:88ade8:8", "const:4:8"]]
- 0088ade8 ["CALL", null, ["callee:00c58260:8"]]
+ 0088ae40 ["INT_ADD", "register:40f0:8", ["const:88ae40:8", "const:4:8"]]
+ 0088ae40 ["CALL", null, ["callee:00c58260:8"]]
- 0088adf8 ["INT_ADD", "register:40f0:8", ["const:88adf8:8", "const:4:8"]]
- 0088adf8 ["CALL", null, ["callee:00c58260:8"]]
+ 0088ae50 ["INT_ADD", "register:40f0:8", ["const:88ae50:8", "const:4:8"]]
+ 0088ae50 ["CALL", null, ["callee:00c58260:8"]]
~~~


<a id="compare-baabbf70f617f317aab1452ce4f3c126"></a>

### [`0088ae40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088ae40.md) → [`0088ae98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088ae98.md) FUN_0088ae98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088ae9c",
      "incomplete_value": false,
      "site": "0088aea0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:730:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088ae44",
      "incomplete_value": false,
      "site": "0088ae48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:660:8"
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
      "0088aea0",
      "DATA",
      [
        "storage",
        "00c81660",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088aea0",
      "DATA",
      [
        "storage",
        "00c81730",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088ae44 ["COPY", "tmp:0:8", ["const:660:8"]]
- 0088ae44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088ae44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088ae44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088ae9c ["COPY", "tmp:0:8", ["const:730:8"]]
+ 0088ae9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088ae9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088ae9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6e05f8bb523ad41d943c81630c1d752c"></a>

### [`0088ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088ae50.md) → [`0088aea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088aea8.md) FUN_0088aea8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088aeb8",
      "incomplete_value": false,
      "site": "0088aec0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:730:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088ae60",
      "incomplete_value": false,
      "site": "0088ae68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:660:8"
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
      "0088aec0",
      "DATA",
      [
        "storage",
        "00c81660",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088aec0",
      "DATA",
      [
        "storage",
        "00c81730",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088ae60 ["COPY", "tmp:0:8", ["const:660:8"]]
- 0088ae60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088ae60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088ae60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088aeb8 ["COPY", "tmp:0:8", ["const:730:8"]]
+ 0088aeb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088aeb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088aeb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088ae6c ["INT_ADD", "register:40f0:8", ["const:88ae6c:8", "const:4:8"]]
- 0088ae6c ["CALL", null, ["callee:00c57f70:8"]]
+ 0088aec4 ["INT_ADD", "register:40f0:8", ["const:88aec4:8", "const:4:8"]]
+ 0088aec4 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-a67d450d91ac165e5993afb4688e37ab"></a>

### [`0088ae8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088ae8c.md) → [`0088aee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088aee4.md) FUN_0088aee4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 3件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58190.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.05% / 新版 86.05%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088af1c",
      "incomplete_value": false,
      "site": "0088af28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:780:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088aec4",
      "incomplete_value": false,
      "site": "0088aed0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
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
      "definition_site": "0088af3c",
      "incomplete_value": false,
      "site": "0088af40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:168:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088aee4",
      "incomplete_value": false,
      "site": "0088aee8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:98:8"
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
      "definition_site": "0088af6c",
      "incomplete_value": false,
      "site": "0088af74",
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
            "const:a66:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088af14",
      "incomplete_value": false,
      "site": "0088af1c",
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
            "const:ac2:8"
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
      "0088af28",
      "DATA",
      [
        "storage",
        "00c816b0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088af40",
      "DATA",
      [
        "storage",
        "00c81098",
        null,
        "pointer"
      ]
    ],
    [
      "0088af5c",
      "PARAM",
      [
        "storage",
        "002b41db",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088af28",
      "DATA",
      [
        "storage",
        "00c81780",
        null,
        "undefined *"
      ]
    ],
    [
      "0088af40",
      "DATA",
      [
        "storage",
        "00c81168",
        null,
        "pointer"
      ]
    ],
    [
      "0088af5c",
      "PARAM",
      [
        "storage",
        "002b420c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088aec4 ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 0088aec4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088aec4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088aec4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088af1c ["COPY", "tmp:0:8", ["const:780:8"]]
+ 0088af1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088af1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088af1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088af1c ["INT_ADD", "register:40f0:8", ["const:88af1c:8", "const:4:8"]]
- 0088af1c ["CALL", null, ["callee:00c58260:8"]]
+ 0088af74 ["INT_ADD", "register:40f0:8", ["const:88af74:8", "const:4:8"]]
+ 0088af74 ["CALL", null, ["callee:00c58260:8"]]
- 0088aeb0 ["INT_ADD", "register:40f0:8", ["const:88aeb0:8", "const:4:8"]]
- 0088aeb0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088af08 ["INT_ADD", "register:40f0:8", ["const:88af08:8", "const:4:8"]]
+ 0088af08 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-8b055f1e88c85e22275590a57fcc1733"></a>

### [`0088af64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088af64.md) → [`0088afbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088afbc.md) FUN_0088afbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088afc0",
      "incomplete_value": false,
      "site": "0088afc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:780:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088af68",
      "incomplete_value": false,
      "site": "0088af6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
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
      "0088afc4",
      "DATA",
      [
        "storage",
        "00c816b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088afc4",
      "DATA",
      [
        "storage",
        "00c81780",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088af68 ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 0088af68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088af68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088af68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088afc0 ["COPY", "tmp:0:8", ["const:780:8"]]
+ 0088afc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088afc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088afc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2fcbcdee460cb9e6461448b80ea6f136"></a>

### [`0088af74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088af74.md) → [`0088afcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088afcc.md) FUN_0088afcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088afdc",
      "incomplete_value": false,
      "site": "0088afe4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:780:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088af84",
      "incomplete_value": false,
      "site": "0088af8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
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
      "0088afe4",
      "DATA",
      [
        "storage",
        "00c816b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088afe4",
      "DATA",
      [
        "storage",
        "00c81780",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088af84 ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 0088af84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088af84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088af84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088afdc ["COPY", "tmp:0:8", ["const:780:8"]]
+ 0088afdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088afdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088afdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088af90 ["INT_ADD", "register:40f0:8", ["const:88af90:8", "const:4:8"]]
- 0088af90 ["CALL", null, ["callee:00c57f70:8"]]
+ 0088afe8 ["INT_ADD", "register:40f0:8", ["const:88afe8:8", "const:4:8"]]
+ 0088afe8 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-07bf3a777bff9561bb027575f9051f5d"></a>

### [`0088afb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088afb0.md) → [`0088b008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b008.md) FUN_0088b008

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 3件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58190.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.05% / 新版 86.05%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b040",
      "incomplete_value": false,
      "site": "0088b04c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:7d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088afe8",
      "incomplete_value": false,
      "site": "0088aff4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:700:8"
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
      "definition_site": "0088b060",
      "incomplete_value": false,
      "site": "0088b064",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:188:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b008",
      "incomplete_value": false,
      "site": "0088b00c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:b8:8"
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
      "definition_site": "0088b080",
      "incomplete_value": false,
      "site": "0088b088",
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
            "const:a74:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b028",
      "incomplete_value": false,
      "site": "0088b030",
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
            "const:ad0:8"
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
      "0088b04c",
      "DATA",
      [
        "storage",
        "00c81700",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b064",
      "DATA",
      [
        "storage",
        "00c810b8",
        null,
        "pointer"
      ]
    ],
    [
      "0088b080",
      "PARAM",
      [
        "storage",
        "002abad0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088b04c",
      "DATA",
      [
        "storage",
        "00c817d0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b064",
      "DATA",
      [
        "storage",
        "00c81188",
        null,
        "pointer"
      ]
    ],
    [
      "0088b080",
      "PARAM",
      [
        "storage",
        "002aba74",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088afe8 ["COPY", "tmp:0:8", ["const:700:8"]]
- 0088afe8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088afe8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088afe8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b040 ["COPY", "tmp:0:8", ["const:7d0:8"]]
+ 0088b040 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b040 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b040 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b030 ["INT_ADD", "register:40f0:8", ["const:88b030:8", "const:4:8"]]
- 0088b030 ["CALL", null, ["callee:00c58260:8"]]
+ 0088b088 ["INT_ADD", "register:40f0:8", ["const:88b088:8", "const:4:8"]]
+ 0088b088 ["CALL", null, ["callee:00c58260:8"]]
- 0088b040 ["INT_ADD", "register:40f0:8", ["const:88b040:8", "const:4:8"]]
- 0088b040 ["CALL", null, ["callee:00c58260:8"]]
+ 0088b098 ["INT_ADD", "register:40f0:8", ["const:88b098:8", "const:4:8"]]
+ 0088b098 ["CALL", null, ["callee:00c58260:8"]]
~~~


<a id="compare-c85337733c1682596c3df5665b4f18b1"></a>

### [`0088b088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b088.md) → [`0088b0e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b0e0.md) FUN_0088b0e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b0e4",
      "incomplete_value": false,
      "site": "0088b0e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:7d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b08c",
      "incomplete_value": false,
      "site": "0088b090",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:700:8"
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
      "0088b0e8",
      "DATA",
      [
        "storage",
        "00c81700",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b0e8",
      "DATA",
      [
        "storage",
        "00c817d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b08c ["COPY", "tmp:0:8", ["const:700:8"]]
- 0088b08c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b08c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b08c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b0e4 ["COPY", "tmp:0:8", ["const:7d0:8"]]
+ 0088b0e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b0e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b0e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a6397e37465b8cd77573f9d9e07b0531"></a>

### [`0088b098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b098.md) → [`0088b0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b0f0.md) FUN_0088b0f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b100",
      "incomplete_value": false,
      "site": "0088b108",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:7d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b0a8",
      "incomplete_value": false,
      "site": "0088b0b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:700:8"
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
      "0088b108",
      "DATA",
      [
        "storage",
        "00c81700",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b108",
      "DATA",
      [
        "storage",
        "00c817d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b0a8 ["COPY", "tmp:0:8", ["const:700:8"]]
- 0088b0a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b0a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b0a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b100 ["COPY", "tmp:0:8", ["const:7d0:8"]]
+ 0088b100 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b100 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b100 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b0b4 ["INT_ADD", "register:40f0:8", ["const:88b0b4:8", "const:4:8"]]
- 0088b0b4 ["CALL", null, ["callee:00c57f70:8"]]
+ 0088b10c ["INT_ADD", "register:40f0:8", ["const:88b10c:8", "const:4:8"]]
+ 0088b10c ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-86333ec49beb1fe8534960afccf9f26a"></a>

### [`0088b0d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b0d4.md) → [`0088b12c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b12c.md) FUN_0088b12c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 3件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58190.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b164",
      "incomplete_value": false,
      "site": "0088b170",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:820:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b10c",
      "incomplete_value": false,
      "site": "0088b118",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:750:8"
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
      "definition_site": "0088b184",
      "incomplete_value": false,
      "site": "0088b188",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b12c",
      "incomplete_value": false,
      "site": "0088b130",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:f8:8"
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
      "definition_site": "0088b1a0",
      "incomplete_value": false,
      "site": "0088b1a8",
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
            "const:52d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b148",
      "incomplete_value": false,
      "site": "0088b150",
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
            "const:581:8"
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
      "0088b170",
      "DATA",
      [
        "storage",
        "00c81750",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b188",
      "DATA",
      [
        "storage",
        "00c810f8",
        null,
        "pointer"
      ]
    ],
    [
      "0088b1a0",
      "PARAM",
      [
        "storage",
        "002b9581",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088b170",
      "DATA",
      [
        "storage",
        "00c81820",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b188",
      "DATA",
      [
        "storage",
        "00c811c8",
        null,
        "pointer"
      ]
    ],
    [
      "0088b1a0",
      "PARAM",
      [
        "storage",
        "002b952d",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b0f8 ["INT_ADD", "register:40f0:8", ["const:88b0f8:8", "const:4:8"]]
- 0088b0f8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088b150 ["INT_ADD", "register:40f0:8", ["const:88b150:8", "const:4:8"]]
+ 0088b150 ["CALL", null, ["callee:00c57f60:8"]]
- 0088b150 ["INT_ADD", "register:40f0:8", ["const:88b150:8", "const:4:8"]]
- 0088b150 ["CALL", null, ["callee:00c58260:8"]]
+ 0088b1a8 ["INT_ADD", "register:40f0:8", ["const:88b1a8:8", "const:4:8"]]
+ 0088b1a8 ["CALL", null, ["callee:00c58260:8"]]
- 0088b160 ["INT_ADD", "register:40f0:8", ["const:88b160:8", "const:4:8"]]
- 0088b160 ["CALL", null, ["callee:00c58260:8"]]
+ 0088b1b8 ["INT_ADD", "register:40f0:8", ["const:88b1b8:8", "const:4:8"]]
+ 0088b1b8 ["CALL", null, ["callee:00c58260:8"]]
~~~


<a id="compare-ff043abc124322e33f527a992f97f180"></a>

### [`0088b1a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b1a8.md) → [`0088b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b200.md) FUN_0088b200

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b204",
      "incomplete_value": false,
      "site": "0088b208",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:820:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b1ac",
      "incomplete_value": false,
      "site": "0088b1b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:750:8"
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
      "0088b208",
      "DATA",
      [
        "storage",
        "00c81750",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b208",
      "DATA",
      [
        "storage",
        "00c81820",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b1ac ["COPY", "tmp:0:8", ["const:750:8"]]
- 0088b1ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b1ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b1ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b204 ["COPY", "tmp:0:8", ["const:820:8"]]
+ 0088b204 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b204 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b204 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a6dd6bd895aa7d60c56d5002cb3b786f"></a>

### [`0088b1b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b1b8.md) → [`0088b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b210.md) FUN_0088b210

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b220",
      "incomplete_value": false,
      "site": "0088b228",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:820:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b1c8",
      "incomplete_value": false,
      "site": "0088b1d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:750:8"
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
      "0088b228",
      "DATA",
      [
        "storage",
        "00c81750",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b228",
      "DATA",
      [
        "storage",
        "00c81820",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b1c8 ["COPY", "tmp:0:8", ["const:750:8"]]
- 0088b1c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b1c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b1c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b220 ["COPY", "tmp:0:8", ["const:820:8"]]
+ 0088b220 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b220 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b220 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b1d4 ["INT_ADD", "register:40f0:8", ["const:88b1d4:8", "const:4:8"]]
- 0088b1d4 ["CALL", null, ["callee:00c57f70:8"]]
+ 0088b22c ["INT_ADD", "register:40f0:8", ["const:88b22c:8", "const:4:8"]]
+ 0088b22c ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-243c81ada51909492026dda7b09f02c3"></a>

### [`0088b1f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b1f4.md) → [`0088b24c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b24c.md) FUN_0088b24c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 3件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58190.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b284",
      "incomplete_value": false,
      "site": "0088b290",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b22c",
      "incomplete_value": false,
      "site": "0088b238",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "definition_site": "0088b2a4",
      "incomplete_value": false,
      "site": "0088b2a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b24c",
      "incomplete_value": false,
      "site": "0088b250",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:d8:8"
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
      "definition_site": "0088b2c0",
      "incomplete_value": false,
      "site": "0088b2c8",
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
            "const:6a3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b268",
      "incomplete_value": false,
      "site": "0088b270",
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
            "const:6f7:8"
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
      "0088b290",
      "DATA",
      [
        "storage",
        "00c817a0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b2a8",
      "DATA",
      [
        "storage",
        "00c810d8",
        null,
        "pointer"
      ]
    ],
    [
      "0088b2c0",
      "PARAM",
      [
        "storage",
        "002b86f7",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088b290",
      "DATA",
      [
        "storage",
        "00c81870",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b2a8",
      "DATA",
      [
        "storage",
        "00c811a8",
        null,
        "pointer"
      ]
    ],
    [
      "0088b2c0",
      "PARAM",
      [
        "storage",
        "002b86a3",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b218 ["INT_ADD", "register:40f0:8", ["const:88b218:8", "const:4:8"]]
- 0088b218 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088b270 ["INT_ADD", "register:40f0:8", ["const:88b270:8", "const:4:8"]]
+ 0088b270 ["CALL", null, ["callee:00c57f60:8"]]
- 0088b270 ["INT_ADD", "register:40f0:8", ["const:88b270:8", "const:4:8"]]
- 0088b270 ["CALL", null, ["callee:00c58260:8"]]
+ 0088b2c8 ["INT_ADD", "register:40f0:8", ["const:88b2c8:8", "const:4:8"]]
+ 0088b2c8 ["CALL", null, ["callee:00c58260:8"]]
- 0088b280 ["INT_ADD", "register:40f0:8", ["const:88b280:8", "const:4:8"]]
- 0088b280 ["CALL", null, ["callee:00c58260:8"]]
+ 0088b2d8 ["INT_ADD", "register:40f0:8", ["const:88b2d8:8", "const:4:8"]]
+ 0088b2d8 ["CALL", null, ["callee:00c58260:8"]]
~~~


<a id="compare-8eee2bd81e9d08c0cfe8a4911f94c7d9"></a>

### [`0088b2c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b2c8.md) → [`0088b320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b320.md) FUN_0088b320

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b324",
      "incomplete_value": false,
      "site": "0088b328",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b2cc",
      "incomplete_value": false,
      "site": "0088b2d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "0088b328",
      "DATA",
      [
        "storage",
        "00c817a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b328",
      "DATA",
      [
        "storage",
        "00c81870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b2cc ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 0088b2cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b2cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b2cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b324 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 0088b324 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b324 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b324 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8412e8a3d9dd60e26192e65868daaed0"></a>

### [`0088b2d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b2d8.md) → [`0088b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b330.md) FUN_0088b330

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b340",
      "incomplete_value": false,
      "site": "0088b348",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b2e8",
      "incomplete_value": false,
      "site": "0088b2f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "0088b348",
      "DATA",
      [
        "storage",
        "00c817a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b348",
      "DATA",
      [
        "storage",
        "00c81870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b2e8 ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 0088b2e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b2e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b2e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b340 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 0088b340 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b340 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b340 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b2f4 ["INT_ADD", "register:40f0:8", ["const:88b2f4:8", "const:4:8"]]
- 0088b2f4 ["CALL", null, ["callee:00c57f70:8"]]
+ 0088b34c ["INT_ADD", "register:40f0:8", ["const:88b34c:8", "const:4:8"]]
+ 0088b34c ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-d5bf9f95045d64f3da83c48b467988b7"></a>

### [`0088b314`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b314.md) → [`0088b36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b36c.md) FUN_0088b36c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 7件 [`0088a8e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a8e4.md) [`0088ae80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088ae80.md) [`0088afa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088afa4.md) [`0088b0c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b0c8.md) [`0088b1e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b1e8.md) · 呼出先 3件 [`00597ecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ecc.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 7件 [`0088a93c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a93c.md) [`0088aed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088aed8.md) [`0088affc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088affc.md) [`0088b120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b120.md) [`0088b240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b240.md) · 呼出先 3件 [`00597f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f0c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b390",
      "incomplete_value": false,
      "site": "0088b394",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b338",
      "incomplete_value": false,
      "site": "0088b33c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:38:8"
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
      "0088b394",
      "DATA",
      [
        "storage",
        "00c81038",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0088b394",
      "DATA",
      [
        "storage",
        "00c81108",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b338 ["COPY", "tmp:0:8", ["const:38:8"]]
- 0088b338 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b338 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b338 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b390 ["COPY", "tmp:0:8", ["const:108:8"]]
+ 0088b390 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b390 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b390 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b34c ["INT_ADD", "register:40f0:8", ["const:88b34c:8", "const:4:8"]]
- 0088b34c ["CALL", null, ["callee:00597f0c:8"]]
+ 0088b3a4 ["INT_ADD", "register:40f0:8", ["const:88b3a4:8", "const:4:8"]]
+ 0088b3a4 ["CALL", null, ["callee:00597f0c:8"]]
- 0088b35c ["INT_ADD", "register:40f0:8", ["const:88b35c:8", "const:4:8"]]
- 0088b35c ["CALL", null, ["callee:00c57f80:8"]]
+ 0088b3b4 ["INT_ADD", "register:40f0:8", ["const:88b3b4:8", "const:4:8"]]
+ 0088b3b4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-fa9bb0428bba60de40ba5527dab6d7ae"></a>

### [`0088b498`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b498.md) → [`0088b4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b4f0.md) FUN_0088b4f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 3件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58190.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.76% / 新版 87.76%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b53c",
      "incomplete_value": false,
      "site": "0088b548",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:8c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b4e4",
      "incomplete_value": false,
      "site": "0088b4f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:7f0:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b558",
      "incomplete_value": false,
      "site": "0088b560",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b500",
      "incomplete_value": false,
      "site": "0088b508",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:118:8"
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
      "definition_site": "0088b57c",
      "incomplete_value": false,
      "site": "0088b584",
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
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b524",
      "incomplete_value": false,
      "site": "0088b52c",
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
            "const:704:8"
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
      "0088b548",
      "DATA",
      [
        "storage",
        "00c817f0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b560",
      "DATA",
      [
        "storage",
        "00c81118",
        null,
        "pointer"
      ]
    ],
    [
      "0088b57c",
      "PARAM",
      [
        "storage",
        "002b8704",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088b548",
      "DATA",
      [
        "storage",
        "00c818c0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b560",
      "DATA",
      [
        "storage",
        "00c811e8",
        null,
        "pointer"
      ]
    ],
    [
      "0088b57c",
      "PARAM",
      [
        "storage",
        "002b86b0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b4e4 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 0088b4e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b4e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b4e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b53c ["COPY", "tmp:0:8", ["const:8c0:8"]]
+ 0088b53c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b53c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b53c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b52c ["INT_ADD", "register:40f0:8", ["const:88b52c:8", "const:4:8"]]
- 0088b52c ["CALL", null, ["callee:00c58260:8"]]
+ 0088b584 ["INT_ADD", "register:40f0:8", ["const:88b584:8", "const:4:8"]]
+ 0088b584 ["CALL", null, ["callee:00c58260:8"]]
- 0088b53c ["INT_ADD", "register:40f0:8", ["const:88b53c:8", "const:4:8"]]
- 0088b53c ["CALL", null, ["callee:00c58260:8"]]
+ 0088b594 ["INT_ADD", "register:40f0:8", ["const:88b594:8", "const:4:8"]]
+ 0088b594 ["CALL", null, ["callee:00c58260:8"]]
~~~


<a id="compare-06f0c07e8f93ca1be556888ac029ebb9"></a>

### [`0088b588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b588.md) → [`0088b5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b5e0.md) FUN_0088b5e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b5e4",
      "incomplete_value": false,
      "site": "0088b5e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:8c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b58c",
      "incomplete_value": false,
      "site": "0088b590",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:7f0:8"
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
      "0088b5e8",
      "DATA",
      [
        "storage",
        "00c817f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b5e8",
      "DATA",
      [
        "storage",
        "00c818c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b58c ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 0088b58c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b58c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b58c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b5e4 ["COPY", "tmp:0:8", ["const:8c0:8"]]
+ 0088b5e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b5e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b5e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2fe9e7ed5b69c0503b097df63f25e2ec"></a>

### [`0088b598`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b598.md) → [`0088b5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b5f0.md) FUN_0088b5f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b600",
      "incomplete_value": false,
      "site": "0088b608",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:8c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b5a8",
      "incomplete_value": false,
      "site": "0088b5b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:7f0:8"
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
      "0088b608",
      "DATA",
      [
        "storage",
        "00c817f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b608",
      "DATA",
      [
        "storage",
        "00c818c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b5a8 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 0088b5a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b5a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b5a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b600 ["COPY", "tmp:0:8", ["const:8c0:8"]]
+ 0088b600 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b600 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b600 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b5b4 ["INT_ADD", "register:40f0:8", ["const:88b5b4:8", "const:4:8"]]
- 0088b5b4 ["CALL", null, ["callee:00c57f70:8"]]
+ 0088b60c ["INT_ADD", "register:40f0:8", ["const:88b60c:8", "const:4:8"]]
+ 0088b60c ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-d18008c0466f28a1fd9a393a3e467db9"></a>

### [`0088b5c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b5c8.md) → [`0088b620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b620.md) FUN_0088b620

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00597ecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ecc.md) [`0088b314`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b314.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00597f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f0c.md) [`0088b36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b36c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b648",
      "incomplete_value": false,
      "site": "0088b648",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b5f0",
      "incomplete_value": false,
      "site": "0088b5f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:118:8"
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
      "0088b648",
      "DATA",
      [
        "storage",
        "00c81118",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0088b648",
      "DATA",
      [
        "storage",
        "00c811e8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b5e4 ["COPY", "tmp:0:8", ["const:118:8"]]
- 0088b5e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088b5e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088b5e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088b63c ["COPY", "tmp:0:8", ["const:1e8:8"]]
+ 0088b63c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088b63c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088b63c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0088b600 ["INT_ADD", "register:40f0:8", ["const:88b600:8", "const:4:8"]]
- 0088b600 ["CALL", null, ["callee:00597f0c:8"]]
+ 0088b658 ["INT_ADD", "register:40f0:8", ["const:88b658:8", "const:4:8"]]
+ 0088b658 ["CALL", null, ["callee:00597f0c:8"]]
- 0088b610 ["INT_ADD", "register:40f0:8", ["const:88b610:8", "const:4:8"]]
- 0088b610 ["CALL", null, ["callee:00c57f80:8"]]
+ 0088b668 ["INT_ADD", "register:40f0:8", ["const:88b668:8", "const:4:8"]]
+ 0088b668 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-52c0770e8736968980753de78200b7af"></a>

### [`0088b648`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b648.md) → [`0088b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b6a0.md) FUN_0088b6a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 3件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58190.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.05% / 新版 86.05%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b6d8",
      "incomplete_value": false,
      "site": "0088b6e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:820:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b680",
      "incomplete_value": false,
      "site": "0088b68c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:750:8"
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
      "definition_site": "0088b6f8",
      "incomplete_value": false,
      "site": "0088b6fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b6a0",
      "incomplete_value": false,
      "site": "0088b6a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:f8:8"
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
      "definition_site": "0088b718",
      "incomplete_value": false,
      "site": "0088b720",
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
            "const:52d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b6c0",
      "incomplete_value": false,
      "site": "0088b6c8",
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
            "const:581:8"
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
      "0088b6e4",
      "DATA",
      [
        "storage",
        "00c81750",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b6fc",
      "DATA",
      [
        "storage",
        "00c810f8",
        null,
        "pointer"
      ]
    ],
    [
      "0088b718",
      "PARAM",
      [
        "storage",
        "002b9581",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088b6e4",
      "DATA",
      [
        "storage",
        "00c81820",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b6fc",
      "DATA",
      [
        "storage",
        "00c811c8",
        null,
        "pointer"
      ]
    ],
    [
      "0088b718",
      "PARAM",
      [
        "storage",
        "002b952d",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b680 ["COPY", "tmp:0:8", ["const:750:8"]]
- 0088b680 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b680 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b680 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b6d8 ["COPY", "tmp:0:8", ["const:820:8"]]
+ 0088b6d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b6d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b6d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b6c8 ["INT_ADD", "register:40f0:8", ["const:88b6c8:8", "const:4:8"]]
- 0088b6c8 ["CALL", null, ["callee:00c58260:8"]]
+ 0088b720 ["INT_ADD", "register:40f0:8", ["const:88b720:8", "const:4:8"]]
+ 0088b720 ["CALL", null, ["callee:00c58260:8"]]
- 0088b6d8 ["INT_ADD", "register:40f0:8", ["const:88b6d8:8", "const:4:8"]]
- 0088b6d8 ["CALL", null, ["callee:00c58260:8"]]
+ 0088b730 ["INT_ADD", "register:40f0:8", ["const:88b730:8", "const:4:8"]]
+ 0088b730 ["CALL", null, ["callee:00c58260:8"]]
~~~


<a id="compare-cf7bae65a9bc4e686708dec2a03a514b"></a>

### [`0088b720`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b720.md) → [`0088b778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b778.md) FUN_0088b778

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 3件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58190.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.05% / 新版 86.05%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b7b0",
      "incomplete_value": false,
      "site": "0088b7bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b758",
      "incomplete_value": false,
      "site": "0088b764",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "definition_site": "0088b7d0",
      "incomplete_value": false,
      "site": "0088b7d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b778",
      "incomplete_value": false,
      "site": "0088b77c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:d8:8"
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
      "definition_site": "0088b7f0",
      "incomplete_value": false,
      "site": "0088b7f8",
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
            "const:6a3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b798",
      "incomplete_value": false,
      "site": "0088b7a0",
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
            "const:6f7:8"
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
      "0088b7bc",
      "DATA",
      [
        "storage",
        "00c817a0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b7d4",
      "DATA",
      [
        "storage",
        "00c810d8",
        null,
        "pointer"
      ]
    ],
    [
      "0088b7f0",
      "PARAM",
      [
        "storage",
        "002b86f7",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088b7bc",
      "DATA",
      [
        "storage",
        "00c81870",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b7d4",
      "DATA",
      [
        "storage",
        "00c811a8",
        null,
        "pointer"
      ]
    ],
    [
      "0088b7f0",
      "PARAM",
      [
        "storage",
        "002b86a3",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b758 ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 0088b758 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b758 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b758 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b7b0 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 0088b7b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b7b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b7b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b7a0 ["INT_ADD", "register:40f0:8", ["const:88b7a0:8", "const:4:8"]]
- 0088b7a0 ["CALL", null, ["callee:00c58260:8"]]
+ 0088b7f8 ["INT_ADD", "register:40f0:8", ["const:88b7f8:8", "const:4:8"]]
+ 0088b7f8 ["CALL", null, ["callee:00c58260:8"]]
- 0088b7b0 ["INT_ADD", "register:40f0:8", ["const:88b7b0:8", "const:4:8"]]
- 0088b7b0 ["CALL", null, ["callee:00c58260:8"]]
+ 0088b808 ["INT_ADD", "register:40f0:8", ["const:88b808:8", "const:4:8"]]
+ 0088b808 ["CALL", null, ["callee:00c58260:8"]]
~~~


<a id="compare-d27d86da963b9925e00ea37087dc0841"></a>

### [`0088b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b7f8.md) → [`0088b850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b850.md) FUN_0088b850

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 3件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58190.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 3件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.76% / 新版 87.76%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b89c",
      "incomplete_value": false,
      "site": "0088b8a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:8c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b844",
      "incomplete_value": false,
      "site": "0088b850",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:7f0:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b8b8",
      "incomplete_value": false,
      "site": "0088b8c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b860",
      "incomplete_value": false,
      "site": "0088b868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:118:8"
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
      "definition_site": "0088b8dc",
      "incomplete_value": false,
      "site": "0088b8e4",
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
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b884",
      "incomplete_value": false,
      "site": "0088b88c",
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
            "const:704:8"
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
      "0088b8a8",
      "DATA",
      [
        "storage",
        "00c817f0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b8c0",
      "DATA",
      [
        "storage",
        "00c81118",
        null,
        "pointer"
      ]
    ],
    [
      "0088b8dc",
      "PARAM",
      [
        "storage",
        "002b8704",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088b8a8",
      "DATA",
      [
        "storage",
        "00c818c0",
        null,
        "undefined *"
      ]
    ],
    [
      "0088b8c0",
      "DATA",
      [
        "storage",
        "00c811e8",
        null,
        "pointer"
      ]
    ],
    [
      "0088b8dc",
      "PARAM",
      [
        "storage",
        "002b86b0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b844 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 0088b844 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b844 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b844 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b89c ["COPY", "tmp:0:8", ["const:8c0:8"]]
+ 0088b89c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b89c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b89c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088b88c ["INT_ADD", "register:40f0:8", ["const:88b88c:8", "const:4:8"]]
- 0088b88c ["CALL", null, ["callee:00c58260:8"]]
+ 0088b8e4 ["INT_ADD", "register:40f0:8", ["const:88b8e4:8", "const:4:8"]]
+ 0088b8e4 ["CALL", null, ["callee:00c58260:8"]]
- 0088b89c ["INT_ADD", "register:40f0:8", ["const:88b89c:8", "const:4:8"]]
- 0088b89c ["CALL", null, ["callee:00c58260:8"]]
+ 0088b8f4 ["INT_ADD", "register:40f0:8", ["const:88b8f4:8", "const:4:8"]]
+ 0088b8f4 ["CALL", null, ["callee:00c58260:8"]]
~~~


<a id="compare-646077c9be47de16f1f5aeda9d6bf1b3"></a>

### [`0088b8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b8f0.md) → [`0088b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b948.md) FUN_0088b948

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b96c",
      "incomplete_value": false,
      "site": "0088b96c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:910:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b914",
      "incomplete_value": false,
      "site": "0088b914",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:840:8"
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
      "0088b96c",
      "DATA",
      [
        "storage",
        "00c81840",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b96c",
      "DATA",
      [
        "storage",
        "00c81910",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b904 ["INT_ADD", "register:40f0:8", ["const:88b904:8", "const:4:8"]]
- 0088b904 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088b95c ["INT_ADD", "register:40f0:8", ["const:88b95c:8", "const:4:8"]]
+ 0088b95c ["CALL", null, ["callee:00c57f60:8"]]
- 0088b910 ["COPY", "tmp:0:8", ["const:840:8"]]
- 0088b910 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088b910 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088b910 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088b968 ["COPY", "tmp:0:8", ["const:910:8"]]
+ 0088b968 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b968 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088b968 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-afc70b93151a9007ba29f6f25312fa0a"></a>

### [`0088b924`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b924.md) → [`0088b97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b97c.md) FUN_0088b97c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088b988",
      "incomplete_value": false,
      "site": "0088b988",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:910:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088b930",
      "incomplete_value": false,
      "site": "0088b930",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:840:8"
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
      "0088b988",
      "DATA",
      [
        "storage",
        "00c81840",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088b988",
      "DATA",
      [
        "storage",
        "00c81910",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088b92c ["COPY", "tmp:0:8", ["const:840:8"]]
- 0088b92c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088b92c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088b92c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088b984 ["COPY", "tmp:0:8", ["const:910:8"]]
+ 0088b984 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088b984 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088b984 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-66b37d144a09395efd6b5bb56866c4c7"></a>

### [`0088ba34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088ba34.md) → [`0088ba8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088ba8c.md) FUN_0088ba8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088ba98",
      "incomplete_value": false,
      "site": "0088ba98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:990:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088ba40",
      "incomplete_value": false,
      "site": "0088ba40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:8c0:8"
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
      "0088ba98",
      "DATA",
      [
        "storage",
        "00c818c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088ba98",
      "DATA",
      [
        "storage",
        "00c81990",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088ba3c ["COPY", "tmp:0:8", ["const:8c0:8"]]
- 0088ba3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088ba3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088ba3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088ba94 ["COPY", "tmp:0:8", ["const:990:8"]]
+ 0088ba94 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088ba94 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088ba94 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-24c521058cf0e39bd86b2b826751184c"></a>

### [`0088bb2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088bb2c.md) → [`0088bb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bb84.md) FUN_0088bb84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088bb90",
      "incomplete_value": false,
      "site": "0088bb90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088bb38",
      "incomplete_value": false,
      "site": "0088bb38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:940:8"
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
      "0088bb90",
      "DATA",
      [
        "storage",
        "00c81940",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088bb90",
      "DATA",
      [
        "storage",
        "00c81a10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088bb34 ["COPY", "tmp:0:8", ["const:940:8"]]
- 0088bb34 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088bb34 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088bb34 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088bb8c ["COPY", "tmp:0:8", ["const:a10:8"]]
+ 0088bb8c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088bb8c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088bb8c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d82753f564456475dc51c906fb0bb3e6"></a>

### [`0088bd90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088bd90.md) → [`0088bde8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bde8.md) _INIT_165

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.14% / 新版 88.14%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0088be48",
      "incomplete_value": true,
      "site": "0088be64",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:f79:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088bdf0",
      "incomplete_value": true,
      "site": "0088be0c",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:f39:8"
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
      "definition_site": "0088be88",
      "incomplete_value": true,
      "site": "0088bea0",
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
                "live",
                "register:4050:8"
              ],
              [
                "leaf",
                "const:f15:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088be30",
      "incomplete_value": true,
      "site": "0088be48",
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
                "live",
                "register:4050:8"
              ],
              [
                "leaf",
                "const:f62:8"
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
      "definition_site": "0088bee4",
      "incomplete_value": true,
      "site": "0088bf28",
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
                "const:2a3000:8"
              ],
              [
                "leaf",
                "const:ebc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088be8c",
      "incomplete_value": true,
      "site": "0088bed0",
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
                "const:2a3000:8"
              ],
              [
                "leaf",
                "const:f09:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 40,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0088be24",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0088be48",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0088be68",
      "READ",
      [
        "storage",
        "002b8dc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0088be24",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0088be48",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0088be68",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088be64 ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 0088be64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088be64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088be64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088bebc ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 0088bebc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088bebc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088bebc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0088bdbc ["COPY", "tmp:0:8", ["const:858:8"]]
- 0088bdbc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0088bdbc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0088bdbc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 0088be14 ["COPY", "tmp:0:8", ["const:958:8"]]
+ 0088be14 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 0088be14 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 0088be14 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 0088bdc4 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-f6bf59342528b6f2dc129e6626aea062"></a>

### [`0088c120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c120.md) → [`0088c178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c178.md) FUN_0088c178

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 25件 [`00472af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00472/00472af8.md) [`00472bac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00472/00472bac.md) [`00472bbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00472/00472bbc.md) [`00472da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00472/00472da4.md) [`0047377c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00473/0047377c.md)
- 新版 呼出元 0件  · 呼出先 25件 [`00472b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472b38.md) [`00472bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472bec.md) [`00472bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472bfc.md) [`00472de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472de4.md) [`004737bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/004737bc.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.19% / 新版 95.19%

優先判定に残った影響 `call_target` 3件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088c2c0",
      "incomplete_value": false,
      "site": "0088c2c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088c268",
      "incomplete_value": false,
      "site": "0088c270",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:b98:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088c38c",
      "incomplete_value": false,
      "site": "0088c38c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088c334",
      "incomplete_value": false,
      "site": "0088c334",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:a88:8"
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
      "definition_site": "0088c3d8",
      "incomplete_value": false,
      "site": "0088c3d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088c380",
      "incomplete_value": false,
      "site": "0088c380",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "0088c24c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007683d8"
      ]
    ],
    [
      "0088c27c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ],
    [
      "0088c2b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "0088c24c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ],
    [
      "0088c27c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "0088c2b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088c1f4 ["INT_ADD", "register:40f0:8", ["const:88c1f4:8", "const:4:8"]]
- 0088c1f4 ["CALL", null, ["ram:7683d8:8"]]
+ 0088c24c ["INT_ADD", "register:40f0:8", ["const:88c24c:8", "const:4:8"]]
+ 0088c24c ["CALL", null, ["ram:768430:8"]]
- 0088c218 ["INT_ADD", "register:40f0:8", ["const:88c218:8", "const:4:8"]]
- 0088c218 ["CALL", null, ["callee:00472bfc:8"]]
+ 0088c270 ["INT_ADD", "register:40f0:8", ["const:88c270:8", "const:4:8"]]
+ 0088c270 ["CALL", null, ["callee:00472bfc:8"]]
- 0088c224 ["INT_ADD", "register:40f0:8", ["const:88c224:8", "const:4:8"]]
- 0088c224 ["CALL", null, ["ram:764384:8"]]
+ 0088c27c ["INT_ADD", "register:40f0:8", ["const:88c27c:8", "const:4:8"]]
+ 0088c27c ["CALL", null, ["ram:7643dc:8"]]
~~~


<a id="compare-dac600f7bccb9e4b5cf8176b7a99d697"></a>

### [`0088c4ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c4ac.md) → [`0088c504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c504.md) FUN_0088c504

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0088c120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c120.md) [`0088f49c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f49c.md) [`0088f674`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f674.md) · 呼出先 9件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0044c7d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044c/0044c7d4.md) [`00473540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00473/00473540.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md)
- 新版 呼出元 3件 [`0088c178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c178.md) [`0088f4f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f4f4.md) [`0088f6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f6cc.md) · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044c814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044c/0044c814.md) [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0088c624",
      "incomplete_value": true,
      "site": "0088c624",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:500:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088c5cc",
      "incomplete_value": true,
      "site": "0088c5cc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:54d:8"
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
      "definition_site": "0088c628",
      "incomplete_value": true,
      "site": "0088c628",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "0088c5d0",
      "incomplete_value": true,
      "site": "0088c5d0",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0088c528",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0088c4d0",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "0088c528",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0088c530",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0088c548",
      "READ",
      [
        "storage",
        "00ca5150",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0088c528",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0088c530",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0088c548",
      "READ",
      [
        "storage",
        "00ca5250",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088c4d0 ["INT_ADD", "register:40f0:8", ["const:88c4d0:8", "const:4:8"]]
- 0088c4d0 ["CALL", null, ["ram:48ccf8:8"]]
+ 0088c528 ["INT_ADD", "register:40f0:8", ["const:88c528:8", "const:4:8"]]
+ 0088c528 ["CALL", null, ["ram:48cd38:8"]]
- 0088c4d8 ["INT_ADD", "register:40f0:8", ["const:88c4d8:8", "const:4:8"]]
- 0088c4d8 ["CALL", null, ["ram:48ccf8:8"]]
+ 0088c530 ["INT_ADD", "register:40f0:8", ["const:88c530:8", "const:4:8"]]
+ 0088c530 ["CALL", null, ["ram:48cd38:8"]]
- 0088c530 ["COPY", "tmp:0:8", ["const:43b:8"]]
- 0088c530 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088c530 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088c530 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088c588 ["COPY", "tmp:0:8", ["const:3e7:8"]]
+ 0088c588 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088c588 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088c588 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-27dbbf90af5804dc5d0208f949384513"></a>

### [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) → [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) FUN_0088c8c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 93件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0043e828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e828.md) [`00440b00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440b00.md)
- 新版 呼出元 0件  · 呼出先 93件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00440b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440b40.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.55% / 新版 97.55%

優先判定に残った影響 `call_argument_candidate` 9件, `call_target` 19件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0088c940",
      "incomplete_value": true,
      "site": "0088c94c",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:a7d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088c8e8",
      "incomplete_value": true,
      "site": "0088c8f4",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:ad9:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088cd68",
      "incomplete_value": false,
      "site": "0088cd68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088cd10",
      "incomplete_value": false,
      "site": "0088cd10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:c98:8"
          ]
        ]
      ]
    },
    "ordinal": 52,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0088d010",
      "incomplete_value": true,
      "site": "0088d020",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:52f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088cfb8",
      "incomplete_value": true,
      "site": "0088cfc8",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:57c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 72,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0088c91c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0088c92c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0088c940",
      "READ",
      [
        "storage",
        "002a5ad9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0088c91c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0088c92c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0088c940",
      "READ",
      [
        "storage",
        "002a5a7d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088c8c4 ["INT_ADD", "register:40f0:8", ["const:88c8c4:8", "const:4:8"]]
- 0088c8c4 ["CALL", null, ["ram:48ccf8:8"]]
+ 0088c91c ["INT_ADD", "register:40f0:8", ["const:88c91c:8", "const:4:8"]]
+ 0088c91c ["CALL", null, ["ram:48cd38:8"]]
- 0088c8d4 ["INT_ADD", "register:40f0:8", ["const:88c8d4:8", "const:4:8"]]
- 0088c8d4 ["CALL", null, ["ram:48ccf8:8"]]
+ 0088c92c ["INT_ADD", "register:40f0:8", ["const:88c92c:8", "const:4:8"]]
+ 0088c92c ["CALL", null, ["ram:48cd38:8"]]
- 0088cc18 ["INT_ADD", "register:40f0:8", ["const:88cc18:8", "const:4:8"]]
- 0088cc18 ["CALL", null, ["callee:005cd6a0:8"]]
+ 0088cc70 ["INT_ADD", "register:40f0:8", ["const:88cc70:8", "const:4:8"]]
+ 0088cc70 ["CALL", null, ["callee:005cd6a0:8"]]
~~~


<a id="compare-f32dad8d34a16eba2cfd3d52ee23b91a"></a>

### [`0088f280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f280.md) → [`0088f2d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f2d8.md) FUN_0088f2d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) · 呼出先 3件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0046d5a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d5a8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 3件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d5e8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0088f340",
      "incomplete_value": false,
      "site": "0088f344",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088f2e8",
      "incomplete_value": false,
      "site": "0088f2ec",
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
            "const:1bd:8"
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
      "0088f340",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0088f340",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f2ec ["INT_ADD", "register:40f0:8", ["const:88f2ec:8", "const:4:8"]]
- 0088f2ec ["CALL", null, ["callee:00442970:8"]]
+ 0088f344 ["INT_ADD", "register:40f0:8", ["const:88f344:8", "const:4:8"]]
+ 0088f344 ["CALL", null, ["callee:00442970:8"]]
- 0088f2a4 ["INT_ADD", "register:40f0:8", ["const:88f2a4:8", "const:4:8"]]
- 0088f2a4 ["CALL", null, ["callee:0046d5e8:8"]]
+ 0088f2fc ["INT_ADD", "register:40f0:8", ["const:88f2fc:8", "const:4:8"]]
+ 0088f2fc ["CALL", null, ["callee:0046d5e8:8"]]
- 0088f2e8 ["COPY", "tmp:0:8", ["const:1bd:8"]]
- 0088f2e8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0088f2e8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0088f2e8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0088f340 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 0088f340 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0088f340 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0088f340 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-234f5f5bbce174c79b04c7080e022191"></a>

### [`0088f444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f444.md) → [`0088f49c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f49c.md) FUN_0088f49c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088f4bc",
      "incomplete_value": false,
      "site": "0088f4c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088f464",
      "incomplete_value": false,
      "site": "0088f468",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:a88:8"
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
      "0088f4c0",
      "DATA",
      [
        "storage",
        "00c81a88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088f4c0",
      "DATA",
      [
        "storage",
        "00c81b58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f458 ["INT_ADD", "register:40f0:8", ["const:88f458:8", "const:4:8"]]
- 0088f458 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088f4b0 ["INT_ADD", "register:40f0:8", ["const:88f4b0:8", "const:4:8"]]
+ 0088f4b0 ["CALL", null, ["callee:00c57f60:8"]]
- 0088f464 ["COPY", "tmp:0:8", ["const:a88:8"]]
- 0088f464 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088f464 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088f464 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088f4bc ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 0088f4bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088f4bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088f4bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6de0d1f059e0574fc055d9a812d15a82"></a>

### [`0088f47c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f47c.md) → [`0088f4d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f4d4.md) FUN_0088f4d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088f4d8",
      "incomplete_value": false,
      "site": "0088f4dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088f480",
      "incomplete_value": false,
      "site": "0088f484",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:a88:8"
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
      "0088f4dc",
      "DATA",
      [
        "storage",
        "00c81a88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088f4dc",
      "DATA",
      [
        "storage",
        "00c81b58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f480 ["COPY", "tmp:0:8", ["const:a88:8"]]
- 0088f480 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088f480 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088f480 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088f4d8 ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 0088f4d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088f4d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088f4d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5f11db09888630c3c912ec9aac49c37d"></a>

### [`0088f624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f624.md) → [`0088f67c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f67c.md) FUN_0088f67c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088f6a0",
      "incomplete_value": false,
      "site": "0088f6a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088f648",
      "incomplete_value": false,
      "site": "0088f648",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "0088f6a0",
      "DATA",
      [
        "storage",
        "00c81b18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088f6a0",
      "DATA",
      [
        "storage",
        "00c81be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f638 ["INT_ADD", "register:40f0:8", ["const:88f638:8", "const:4:8"]]
- 0088f638 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088f690 ["INT_ADD", "register:40f0:8", ["const:88f690:8", "const:4:8"]]
+ 0088f690 ["CALL", null, ["callee:00c57f60:8"]]
- 0088f644 ["COPY", "tmp:0:8", ["const:b18:8"]]
- 0088f644 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088f644 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088f644 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088f69c ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 0088f69c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088f69c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088f69c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0fb60fe8b013546a72964da8efb5da83"></a>

### [`0088f658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f658.md) → [`0088f6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f6b0.md) FUN_0088f6b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088f6bc",
      "incomplete_value": false,
      "site": "0088f6bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088f664",
      "incomplete_value": false,
      "site": "0088f664",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "0088f6bc",
      "DATA",
      [
        "storage",
        "00c81b18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088f6bc",
      "DATA",
      [
        "storage",
        "00c81be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f660 ["COPY", "tmp:0:8", ["const:b18:8"]]
- 0088f660 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088f660 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088f660 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088f6b8 ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 0088f6b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088f6b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088f6b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-435e3828ceba8d05c0e3841226a0bf69"></a>

### [`0088f6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f6a4.md) → [`0088f6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f6fc.md) FUN_0088f6fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088f710",
      "incomplete_value": false,
      "site": "0088f714",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088f6b8",
      "incomplete_value": false,
      "site": "0088f6bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:b98:8"
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
      "0088f714",
      "DATA",
      [
        "storage",
        "00c81b98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088f714",
      "DATA",
      [
        "storage",
        "00c81c68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f6b0 ["INT_ADD", "register:40f0:8", ["const:88f6b0:8", "const:4:8"]]
- 0088f6b0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088f708 ["INT_ADD", "register:40f0:8", ["const:88f708:8", "const:4:8"]]
+ 0088f708 ["CALL", null, ["callee:00c57f60:8"]]
- 0088f6b8 ["COPY", "tmp:0:8", ["const:b98:8"]]
- 0088f6b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088f6b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088f6b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088f710 ["COPY", "tmp:0:8", ["const:c68:8"]]
+ 0088f710 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088f710 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088f710 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-26fabfa3f8dee5af421927474d0d4f3b"></a>

### [`0088f6c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f6c8.md) → [`0088f720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f720.md) FUN_0088f720

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088f724",
      "incomplete_value": false,
      "site": "0088f728",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088f6cc",
      "incomplete_value": false,
      "site": "0088f6d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:b98:8"
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
      "0088f728",
      "DATA",
      [
        "storage",
        "00c81b98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088f728",
      "DATA",
      [
        "storage",
        "00c81c68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f6cc ["COPY", "tmp:0:8", ["const:b98:8"]]
- 0088f6cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088f6cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088f6cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088f724 ["COPY", "tmp:0:8", ["const:c68:8"]]
+ 0088f724 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088f724 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088f724 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a46cee5fb7d3b3cd6d2cfec92278d586"></a>

### [`0088f6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f6e0.md) → [`0088f738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f738.md) FUN_0088f738

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00550a14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550a14.md) [`0088fc64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fc64.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00550a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550a54.md) [`0088fcbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fcbc.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.08% / 新版 94.08%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0088f76c",
      "incomplete_value": true,
      "site": "0088f77c",
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
                "const:67f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088f714",
      "incomplete_value": true,
      "site": "0088f724",
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
                "const:6cc:8"
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
      "definition_site": "0088f780",
      "incomplete_value": true,
      "site": "0088f780",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "0088f728",
      "incomplete_value": true,
      "site": "0088f728",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0088f774",
      "incomplete_value": true,
      "site": "0088f784",
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
                "const:490:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088f71c",
      "incomplete_value": true,
      "site": "0088f72c",
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
                "const:450:8"
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
      "0088f76c",
      "READ",
      [
        "storage",
        "002a46cc",
        null,
        "string"
      ]
    ],
    [
      "0088f770",
      "READ",
      [
        "storage",
        "002a46db",
        null,
        "string"
      ]
    ],
    [
      "0088f774",
      "READ",
      [
        "storage",
        "002c2450",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0088f76c",
      "READ",
      [
        "storage",
        "002a467f",
        null,
        "string"
      ]
    ],
    [
      "0088f770",
      "READ",
      [
        "storage",
        "002a468e",
        null,
        "string"
      ]
    ],
    [
      "0088f774",
      "READ",
      [
        "storage",
        "002c2490",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0088f704 ["INT_ADD", "register:40f0:8", ["const:88f704:8", "const:4:8"]]
- 0088f704 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088f75c ["INT_ADD", "register:40f0:8", ["const:88f75c:8", "const:4:8"]]
+ 0088f75c ["CALL", null, ["callee:00c57f60:8"]]
- 0088f70c ["COPY", "tmp:0:8", ["const:6cc:8"]]
- 0088f70c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088f70c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088f70c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088f764 ["COPY", "tmp:0:8", ["const:67f:8"]]
+ 0088f764 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088f764 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088f764 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088f710 ["COPY", "register:4048:8", ["const:2c2000:8"]]
~~~


<a id="compare-75c63dec6a756bd1283ad3430d59c5b9"></a>

### [`0088fb28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fb28.md) → [`0088fb80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fb80.md) FUN_0088fb80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088fb94",
      "incomplete_value": false,
      "site": "0088fb98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088fb3c",
      "incomplete_value": false,
      "site": "0088fb40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:c08:8"
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
      "0088fb98",
      "DATA",
      [
        "storage",
        "00c81c08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088fb98",
      "DATA",
      [
        "storage",
        "00c81cd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fb3c ["COPY", "tmp:0:8", ["const:c08:8"]]
- 0088fb3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088fb3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088fb3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088fb94 ["COPY", "tmp:0:8", ["const:cd8:8"]]
+ 0088fb94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088fb94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088fb94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088fb50 ["INT_ADD", "register:40f0:8", ["const:88fb50:8", "const:4:8"]]
- 0088fb50 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088fba8 ["INT_ADD", "register:40f0:8", ["const:88fba8:8", "const:4:8"]]
+ 0088fba8 ["CALL", null, ["callee:00c53da0:8"]]
- 0088fb70 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088fb70 ["INT_ADD", "register:40f0:8", ["const:88fb70:8", "const:4:8"]]
- 0088fb70 ["CALLIND", null, ["register:0:8"]]
+ 0088fbc8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088fbc8 ["INT_ADD", "register:40f0:8", ["const:88fbc8:8", "const:4:8"]]
+ 0088fbc8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-19d0209757a62199f6474db154689dc0"></a>

### [`0088fb84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fb84.md) → [`0088fbdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fbdc.md) FUN_0088fbdc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088fbf4",
      "incomplete_value": false,
      "site": "0088fbf8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088fb9c",
      "incomplete_value": false,
      "site": "0088fba0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:c08:8"
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
      "0088fbf8",
      "DATA",
      [
        "storage",
        "00c81c08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088fbf8",
      "DATA",
      [
        "storage",
        "00c81cd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fb9c ["COPY", "tmp:0:8", ["const:c08:8"]]
- 0088fb9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088fb9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088fb9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088fbf4 ["COPY", "tmp:0:8", ["const:cd8:8"]]
+ 0088fbf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088fbf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088fbf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0088fbb0 ["INT_ADD", "register:40f0:8", ["const:88fbb0:8", "const:4:8"]]
- 0088fbb0 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088fc08 ["INT_ADD", "register:40f0:8", ["const:88fc08:8", "const:4:8"]]
+ 0088fc08 ["CALL", null, ["callee:00c53da0:8"]]
- 0088fbc4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088fbc4 ["INT_ADD", "register:40f0:8", ["const:88fbc4:8", "const:4:8"]]
- 0088fbc4 ["CALLIND", null, ["register:0:8"]]
+ 0088fc1c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088fc1c ["INT_ADD", "register:40f0:8", ["const:88fc1c:8", "const:4:8"]]
+ 0088fc1c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0cdd7fe718e80272c3b2f09a9c117973"></a>

### [`0088fbe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fbe0.md) → [`0088fc38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fc38.md) FUN_0088fc38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088fc5c",
      "incomplete_value": false,
      "site": "0088fc5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088fc04",
      "incomplete_value": false,
      "site": "0088fc04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:c08:8"
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
      "0088fc5c",
      "DATA",
      [
        "storage",
        "00c81c08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088fc5c",
      "DATA",
      [
        "storage",
        "00c81cd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fbf4 ["INT_ADD", "register:40f0:8", ["const:88fbf4:8", "const:4:8"]]
- 0088fbf4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088fc4c ["INT_ADD", "register:40f0:8", ["const:88fc4c:8", "const:4:8"]]
+ 0088fc4c ["CALL", null, ["callee:00c57f60:8"]]
- 0088fc00 ["COPY", "tmp:0:8", ["const:c08:8"]]
- 0088fc00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088fc00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088fc00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088fc58 ["COPY", "tmp:0:8", ["const:cd8:8"]]
+ 0088fc58 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088fc58 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088fc58 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0088fc1c ["INT_ADD", "register:40f0:8", ["const:88fc1c:8", "const:4:8"]]
- 0088fc1c ["CALL", null, ["callee:00c53d70:8"]]
+ 0088fc74 ["INT_ADD", "register:40f0:8", ["const:88fc74:8", "const:4:8"]]
+ 0088fc74 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-6610ba2c751962a2c0f2b777da7af6c1"></a>

### [`0088fc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fc30.md) → [`0088fc88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fc88.md) FUN_0088fc88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088fc94",
      "incomplete_value": false,
      "site": "0088fc94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088fc3c",
      "incomplete_value": false,
      "site": "0088fc3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:c08:8"
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
      "0088fc94",
      "DATA",
      [
        "storage",
        "00c81c08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088fc94",
      "DATA",
      [
        "storage",
        "00c81cd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fc38 ["COPY", "tmp:0:8", ["const:c08:8"]]
- 0088fc38 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088fc38 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088fc38 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088fc90 ["COPY", "tmp:0:8", ["const:cd8:8"]]
+ 0088fc90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088fc90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088fc90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0088fc58 ["INT_ADD", "register:40f0:8", ["const:88fc58:8", "const:4:8"]]
- 0088fc58 ["CALL", null, ["callee:00c53d70:8"]]
+ 0088fcb0 ["INT_ADD", "register:40f0:8", ["const:88fcb0:8", "const:4:8"]]
+ 0088fcb0 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-6f091b0b511bc91d87e154b06c7d9f1e"></a>

### [`0088fd04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fd04.md) → [`0088fd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fd5c.md) FUN_0088fd5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048dc4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048d/0048dc4c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dc8c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0088fd64",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0088fd0c",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "0088fd64",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "0088fd64",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fd0c ["INT_ADD", "register:40f0:8", ["const:88fd0c:8", "const:4:8"]]
- 0088fd0c ["CALL", null, ["ram:48ccf8:8"]]
+ 0088fd64 ["INT_ADD", "register:40f0:8", ["const:88fd64:8", "const:4:8"]]
+ 0088fd64 ["CALL", null, ["ram:48cd38:8"]]
- 0088fd10 ["INT_ADD", "register:40f0:8", ["const:88fd10:8", "const:4:8"]]
- 0088fd10 ["CALL", null, ["callee:0048dc8c:8"]]
+ 0088fd68 ["INT_ADD", "register:40f0:8", ["const:88fd68:8", "const:4:8"]]
+ 0088fd68 ["CALL", null, ["callee:0048dc8c:8"]]
- 0088fd18 ["INT_ADD", "register:40f0:8", ["const:88fd18:8", "const:4:8"]]
- 0088fd18 ["CALL", null, ["callee:00851550:8"]]
+ 0088fd70 ["INT_ADD", "register:40f0:8", ["const:88fd70:8", "const:4:8"]]
+ 0088fd70 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-5e083badccb8bb86f481005024868221"></a>

### [`0088fd60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fd60.md) → [`0088fdb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fdb8.md) FUN_0088fdb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088fdcc",
      "incomplete_value": false,
      "site": "0088fdd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088fd74",
      "incomplete_value": false,
      "site": "0088fd78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "0088fdd0",
      "DATA",
      [
        "storage",
        "00c81c98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088fdd0",
      "DATA",
      [
        "storage",
        "00c81d68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fd6c ["INT_ADD", "register:40f0:8", ["const:88fd6c:8", "const:4:8"]]
- 0088fd6c ["CALL", null, ["callee:00c57f60:8"]]
+ 0088fdc4 ["INT_ADD", "register:40f0:8", ["const:88fdc4:8", "const:4:8"]]
+ 0088fdc4 ["CALL", null, ["callee:00c57f60:8"]]
- 0088fd74 ["COPY", "tmp:0:8", ["const:c98:8"]]
- 0088fd74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088fd74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088fd74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088fdcc ["COPY", "tmp:0:8", ["const:d68:8"]]
+ 0088fdcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088fdcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088fdcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5dee562cdd40de82b4b8794d2b463b2a"></a>

### [`0088fd84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fd84.md) → [`0088fddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fddc.md) FUN_0088fddc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088fde0",
      "incomplete_value": false,
      "site": "0088fde4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088fd88",
      "incomplete_value": false,
      "site": "0088fd8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "0088fde4",
      "DATA",
      [
        "storage",
        "00c81c98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088fde4",
      "DATA",
      [
        "storage",
        "00c81d68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fd88 ["COPY", "tmp:0:8", ["const:c98:8"]]
- 0088fd88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0088fd88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0088fd88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0088fde0 ["COPY", "tmp:0:8", ["const:d68:8"]]
+ 0088fde0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0088fde0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0088fde0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ec0dd1af65e588c336a853d85a9dffaa"></a>

### [`0088fd9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fd9c.md) → [`0088fdf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fdf4.md) FUN_0088fdf4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00550a14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550a14.md) [`008901b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/008901b4.md) [`00890204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890204.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00550a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550a54.md) [`0089020c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/0089020c.md) [`0089025c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/0089025c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.40% / 新版 93.40%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0088fe2c",
      "incomplete_value": true,
      "site": "0088fe2c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:90e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088fdd4",
      "incomplete_value": true,
      "site": "0088fdd4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:8ce:8"
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
      "definition_site": "0088fe24",
      "incomplete_value": true,
      "site": "0088fe30",
      "value": [
        "LOAD",
        "8",
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
                "const:7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088fdcc",
      "incomplete_value": true,
      "site": "0088fdd8",
      "value": [
        "LOAD",
        "8",
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
                "const:7:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0088fec0",
      "incomplete_value": false,
      "site": "0088fec0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088fe68",
      "incomplete_value": false,
      "site": "0088fe68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:d08:8"
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
      "0088fe18",
      "READ",
      [
        "storage",
        "002b78ce",
        null,
        "string"
      ]
    ],
    [
      "0088fe24",
      "READ",
      [
        "storage",
        "002b78d5",
        null,
        "string"
      ]
    ],
    [
      "0088fec0",
      "DATA",
      [
        "storage",
        "00c81d08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088fe18",
      "READ",
      [
        "storage",
        "002b790e",
        null,
        "string"
      ]
    ],
    [
      "0088fe24",
      "READ",
      [
        "storage",
        "002b7915",
        null,
        "string"
      ]
    ],
    [
      "0088fec0",
      "DATA",
      [
        "storage",
        "00c81dd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0088fdb8 ["COPY", "tmp:0:8", ["const:8ce:8"]]
- 0088fdb8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0088fdb8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0088fdb8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0088fe10 ["COPY", "tmp:0:8", ["const:90e:8"]]
+ 0088fe10 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0088fe10 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0088fe10 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0088fde8 ["INT_ADD", "register:40f0:8", ["const:88fde8:8", "const:4:8"]]
- 0088fde8 ["CALL", null, ["callee:0048ce94:8"]]
+ 0088fe40 ["INT_ADD", "register:40f0:8", ["const:88fe40:8", "const:4:8"]]
+ 0088fe40 ["CALL", null, ["callee:0048ce94:8"]]
- 0088fdf4 ["INT_ADD", "register:40f0:8", ["const:88fdf4:8", "const:4:8"]]
- 0088fdf4 ["CALL", null, ["callee:00550a54:8"]]
+ 0088fe4c ["INT_ADD", "register:40f0:8", ["const:88fe4c:8", "const:4:8"]]
+ 0088fe4c ["CALL", null, ["callee:00550a54:8"]]
~~~


<a id="compare-8f7a1581ea4edba0c17cf74771dbe211"></a>

### [`00890078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890078.md) → [`008900d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008900d0.md) FUN_008900d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008900e4",
      "incomplete_value": false,
      "site": "008900e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089008c",
      "incomplete_value": false,
      "site": "00890090",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:d08:8"
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
      "008900e8",
      "DATA",
      [
        "storage",
        "00c81d08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008900e8",
      "DATA",
      [
        "storage",
        "00c81dd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0089008c ["COPY", "tmp:0:8", ["const:d08:8"]]
- 0089008c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0089008c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0089008c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008900e4 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 008900e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008900e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008900e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008900a0 ["INT_ADD", "register:40f0:8", ["const:8900a0:8", "const:4:8"]]
- 008900a0 ["CALL", null, ["callee:00c53da0:8"]]
+ 008900f8 ["INT_ADD", "register:40f0:8", ["const:8900f8:8", "const:4:8"]]
+ 008900f8 ["CALL", null, ["callee:00c53da0:8"]]
- 008900c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008900c0 ["INT_ADD", "register:40f0:8", ["const:8900c0:8", "const:4:8"]]
- 008900c0 ["CALLIND", null, ["register:0:8"]]
+ 00890118 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00890118 ["INT_ADD", "register:40f0:8", ["const:890118:8", "const:4:8"]]
+ 00890118 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6683d34ead430fce17e3389fdd822070"></a>

### [`008900d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/008900d4.md) → [`0089012c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/0089012c.md) FUN_0089012c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00890144",
      "incomplete_value": false,
      "site": "00890148",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008900ec",
      "incomplete_value": false,
      "site": "008900f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:d08:8"
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
      "00890148",
      "DATA",
      [
        "storage",
        "00c81d08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00890148",
      "DATA",
      [
        "storage",
        "00c81dd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008900ec ["COPY", "tmp:0:8", ["const:d08:8"]]
- 008900ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008900ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008900ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00890144 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 00890144 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00890144 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00890144 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00890100 ["INT_ADD", "register:40f0:8", ["const:890100:8", "const:4:8"]]
- 00890100 ["CALL", null, ["callee:00c53da0:8"]]
+ 00890158 ["INT_ADD", "register:40f0:8", ["const:890158:8", "const:4:8"]]
+ 00890158 ["CALL", null, ["callee:00c53da0:8"]]
- 00890114 ["COPY", "register:0:8", ["register:4040:8"]]
- 00890114 ["INT_ADD", "register:40f0:8", ["const:890114:8", "const:4:8"]]
- 00890114 ["CALLIND", null, ["register:0:8"]]
+ 0089016c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0089016c ["INT_ADD", "register:40f0:8", ["const:89016c:8", "const:4:8"]]
+ 0089016c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1706cc77027b06e40531ddecb704daff"></a>

### [`00890130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890130.md) → [`00890188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890188.md) FUN_00890188

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008901ac",
      "incomplete_value": false,
      "site": "008901ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00890154",
      "incomplete_value": false,
      "site": "00890154",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:d08:8"
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
      "008901ac",
      "DATA",
      [
        "storage",
        "00c81d08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008901ac",
      "DATA",
      [
        "storage",
        "00c81dd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00890144 ["INT_ADD", "register:40f0:8", ["const:890144:8", "const:4:8"]]
- 00890144 ["CALL", null, ["callee:00c57f60:8"]]
+ 0089019c ["INT_ADD", "register:40f0:8", ["const:89019c:8", "const:4:8"]]
+ 0089019c ["CALL", null, ["callee:00c57f60:8"]]
- 00890150 ["COPY", "tmp:0:8", ["const:d08:8"]]
- 00890150 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00890150 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00890150 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008901a8 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 008901a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008901a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008901a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0089016c ["INT_ADD", "register:40f0:8", ["const:89016c:8", "const:4:8"]]
- 0089016c ["CALL", null, ["callee:00c53d70:8"]]
+ 008901c4 ["INT_ADD", "register:40f0:8", ["const:8901c4:8", "const:4:8"]]
+ 008901c4 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-d9a9681d4740485ee37c4144d221b8d0"></a>

### [`00890180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890180.md) → [`008901d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008901d8.md) FUN_008901d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008901e4",
      "incomplete_value": false,
      "site": "008901e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089018c",
      "incomplete_value": false,
      "site": "0089018c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:d08:8"
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
      "008901e4",
      "DATA",
      [
        "storage",
        "00c81d08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008901e4",
      "DATA",
      [
        "storage",
        "00c81dd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00890188 ["COPY", "tmp:0:8", ["const:d08:8"]]
- 00890188 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00890188 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00890188 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008901e0 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 008901e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008901e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008901e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008901a8 ["INT_ADD", "register:40f0:8", ["const:8901a8:8", "const:4:8"]]
- 008901a8 ["CALL", null, ["callee:00c53d70:8"]]
+ 00890200 ["INT_ADD", "register:40f0:8", ["const:890200:8", "const:4:8"]]
+ 00890200 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-fccd7dd4311e7415f0cabd872098c9e8"></a>

### [`00890280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890280.md) → [`008902d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008902d8.md) _INIT_166

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00890338",
      "incomplete_value": true,
      "site": "00890354",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:f79:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008902e0",
      "incomplete_value": true,
      "site": "008902fc",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:f39:8"
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
      "definition_site": "00890358",
      "incomplete_value": true,
      "site": "00890374",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:d6e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00890300",
      "incomplete_value": true,
      "site": "0089031c",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:dc2:8"
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
      "definition_site": "00890378",
      "incomplete_value": true,
      "site": "00890390",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:f15:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00890320",
      "incomplete_value": true,
      "site": "00890338",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:f62:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00890314",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00890338",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00890358",
      "READ",
      [
        "storage",
        "002b8dc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00890314",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00890338",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00890358",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00890354 ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 00890354 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00890354 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00890354 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008903ac ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 008903ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008903ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008903ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00890374 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00890374 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00890374 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00890374 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008903cc ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 008903cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008903cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008903cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008904b4 ["INT_ADD", "register:40f0:8", ["const:8904b4:8", "const:4:8"]]
- 008904b4 ["CALL", null, ["callee:00c57f00:8"]]
+ 0089050c ["INT_ADD", "register:40f0:8", ["const:89050c:8", "const:4:8"]]
+ 0089050c ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-b1ad375764557f7d8566caf33f4d7ba7"></a>

### [`00890754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890754.md) → [`008907ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008907ac.md) FUN_008907ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00890bd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890bd0.md) [`00890d8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890d8c.md) [`008925c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/008925c4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00890c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890c28.md) [`00890de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890de4.md) [`0089261c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/0089261c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 79.63% / 新版 79.63%

優先判定に残った影響 `store_value` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00890814",
      "incomplete_value": true,
      "site": "00890814",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2f3000:8"
              ],
              [
                "leaf",
                "const:23f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008907bc",
      "incomplete_value": true,
      "site": "008907bc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2f3000:8"
              ],
              [
                "leaf",
                "const:1ff:8"
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
      "definition_site": "00890870",
      "incomplete_value": true,
      "site": "00890870",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2f3000:8"
              ],
              [
                "leaf",
                "const:263:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00890818",
      "incomplete_value": true,
      "site": "00890818",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2f3000:8"
              ],
              [
                "leaf",
                "const:223:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00890890",
      "incomplete_value": true,
      "site": "00890890",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2f3000:8"
              ],
              [
                "leaf",
                "const:26f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00890838",
      "incomplete_value": true,
      "site": "00890838",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2f3000:8"
              ],
              [
                "leaf",
                "const:22f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00890800",
      "READ",
      [
        "storage",
        "002f31ff",
        null,
        "string"
      ]
    ],
    [
      "0089081c",
      "READ",
      [
        "storage",
        "002f320b",
        null,
        "string"
      ]
    ],
    [
      "0089083c",
      "READ",
      [
        "storage",
        "002f3217",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00890800",
      "READ",
      [
        "storage",
        "002f323f",
        null,
        "string"
      ]
    ],
    [
      "0089081c",
      "READ",
      [
        "storage",
        "002f324b",
        null,
        "string"
      ]
    ],
    [
      "0089083c",
      "READ",
      [
        "storage",
        "002f3257",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008907e0 ["COPY", "tmp:0:8", ["const:217:8"]]
- 008907e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008907e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008907e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00890838 ["COPY", "tmp:0:8", ["const:257:8"]]
+ 00890838 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00890838 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00890838 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00890890 ["COPY", "register:4048:8", ["const:2f3000:8"]]
- 00890904 ["COPY", "register:4048:8", ["const:2f3000:8"]]
~~~


<a id="compare-4ed19c38b1c63c0bf0eea909f00b9d4a"></a>

### [`00891304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891304.md) → [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) FUN_0089135c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00891f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891f60.md) · 呼出先 23件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) · 呼出先 23件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.59% / 新版 96.59%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00891634",
      "incomplete_value": true,
      "site": "00891634",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:33a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008915dc",
      "incomplete_value": true,
      "site": "008915dc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:2fa:8"
              ]
            ]
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
      "definition_site": "008916a0",
      "incomplete_value": false,
      "site": "008916a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00891648",
      "incomplete_value": false,
      "site": "00891648",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00891760",
      "incomplete_value": false,
      "site": "00891760",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:178:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00891708",
      "incomplete_value": false,
      "site": "00891708",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:a8:8"
          ]
        ]
      ]
    },
    "ordinal": 40,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00891620",
      "READ",
      [
        "storage",
        "002c12fa",
        null,
        "string"
      ]
    ],
    [
      "008916a0",
      "DATA",
      [
        "storage",
        "00c82028",
        null,
        "undefined *"
      ]
    ],
    [
      "00891720",
      "READ",
      [
        "storage",
        "00c82050",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00891620",
      "READ",
      [
        "storage",
        "002c133a",
        null,
        "string"
      ]
    ],
    [
      "008916a0",
      "DATA",
      [
        "storage",
        "00c820f8",
        null,
        "undefined *"
      ]
    ],
    [
      "00891720",
      "READ",
      [
        "storage",
        "00c82120",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008916a0 ["INT_ADD", "register:40f0:8", ["const:8916a0:8", "const:4:8"]]
- 008916a0 ["CALL", null, ["callee:008ba8c0:8"]]
+ 008916f8 ["INT_ADD", "register:40f0:8", ["const:8916f8:8", "const:4:8"]]
+ 008916f8 ["CALL", null, ["callee:008ba8c0:8"]]
- 00891340 ["INT_ADD", "register:40f0:8", ["const:891340:8", "const:4:8"]]
- 00891340 ["CALL", null, ["callee:00b391b0:8"]]
+ 00891398 ["INT_ADD", "register:40f0:8", ["const:891398:8", "const:4:8"]]
+ 00891398 ["CALL", null, ["callee:00b391b0:8"]]
- 0089137c ["INT_ADD", "register:40f0:8", ["const:89137c:8", "const:4:8"]]
- 0089137c ["CALL", null, ["callee:00c58120:8"]]
+ 008913d4 ["INT_ADD", "register:40f0:8", ["const:8913d4:8", "const:4:8"]]
+ 008913d4 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-0ade0057ca37d20d87699a2cda608d98"></a>

### [`00891b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891b6c.md) → [`00891bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891bc4.md) FUN_00891bc4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00891f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891f60.md) [`0089243c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/0089243c.md) [`0089314c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089314c.md) [`0089329c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089329c.md) · 呼出先 9件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00892c90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892c90.md) [`00892c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892c94.md) [`008b9858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9858.md)
- 新版 呼出元 4件 [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) [`00892494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892494.md) [`008931a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008931a4.md) [`008932f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008932f4.md) · 呼出先 9件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00892ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892ce8.md) [`00892cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892cec.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.93% / 新版 87.93%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00891c18",
      "incomplete_value": true,
      "site": "00891c28",
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
                "live",
                "register:4048:8"
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
      "definition_site": "00891bc0",
      "incomplete_value": true,
      "site": "00891bd0",
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
                "live",
                "register:4048:8"
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00891c90",
      "incomplete_value": true,
      "site": "00891ca0",
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
                "live",
                "register:4048:8"
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
      "definition_site": "00891c38",
      "incomplete_value": true,
      "site": "00891c48",
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
                "live",
                "register:4048:8"
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00891d00",
      "incomplete_value": false,
      "site": "00891d00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00891ca8",
      "incomplete_value": false,
      "site": "00891ca8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:fa8:8"
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
      "00891c10",
      "READ",
      [
        "storage",
        "002a5aea",
        null,
        "string"
      ]
    ],
    [
      "00891c14",
      "READ",
      [
        "storage",
        "002a5afa",
        null,
        "string"
      ]
    ],
    [
      "00891c18",
      "READ",
      [
        "storage",
        "002c22a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00891c10",
      "READ",
      [
        "storage",
        "002a5a8e",
        null,
        "string"
      ]
    ],
    [
      "00891c14",
      "READ",
      [
        "storage",
        "002a5a9e",
        null,
        "string"
      ]
    ],
    [
      "00891c18",
      "READ",
      [
        "storage",
        "002c22e0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00891c28 ["COPY", "tmp:0:8", ["const:aea:8"]]
- 00891c28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00891c28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00891c28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00891c80 ["COPY", "tmp:0:8", ["const:a8e:8"]]
+ 00891c80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00891c80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00891c80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00891ca0 ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 00891ca0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00891ca0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00891ca0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00891cf8 ["COPY", "tmp:0:8", ["const:78:8"]]
+ 00891cf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00891cf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00891cf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00891ba8 ["INT_ADD", "register:40f0:8", ["const:891ba8:8", "const:4:8"]]
- 00891ba8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00891c00 ["INT_ADD", "register:40f0:8", ["const:891c00:8", "const:4:8"]]
+ 00891c00 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-fd4ad223269b5f09eed1ba0d2e80ff0d"></a>

### [`00891f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891f60.md) → [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) FUN_00891fb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00892eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892eac.md) [`00893dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/00893dbc.md) [`0089d4c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089d/0089d4c8.md) · 呼出先 16件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047ce20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ce20.md) [`0047ce28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ce28.md) [`0058f434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058f434.md)
- 新版 呼出元 3件 [`00892f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892f04.md) [`00893e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893e14.md) [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) · 呼出先 16件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce60.md) [`0047ce68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce68.md) [`0058f474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f474.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 97.05% / 新版 97.05%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008922e8",
      "incomplete_value": false,
      "site": "008922f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:2f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892290",
      "incomplete_value": false,
      "site": "00892298",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:228:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008922fc",
      "incomplete_value": false,
      "site": "008922fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:378:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008922a4",
      "incomplete_value": false,
      "site": "008922a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:2a8:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008922d0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00892278",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 13,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008922d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008922d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0089228c"
      ]
    ],
    [
      "008922dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008922d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008922d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008922e4"
      ]
    ],
    [
      "008922dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 0089222c ["INT_ADD", "register:40f0:8", ["const:89222c:8", "const:4:8"]]
- 0089222c ["CALL", null, ["callee:0058f474:8"]]
+ 00892284 ["INT_ADD", "register:40f0:8", ["const:892284:8", "const:4:8"]]
+ 00892284 ["CALL", null, ["callee:0058f474:8"]]
- 00892278 ["INT_ADD", "register:40f0:8", ["const:892278:8", "const:4:8"]]
- 00892278 ["CALL", null, ["ram:47acf4:8"]]
+ 008922d0 ["INT_ADD", "register:40f0:8", ["const:8922d0:8", "const:4:8"]]
+ 008922d0 ["CALL", null, ["ram:47ad34:8"]]
- 00892284 ["INT_ADD", "register:40f0:8", ["const:892284:8", "const:4:8"]]
- 00892284 ["CALL", null, ["ram:47acf4:8"]]
+ 008922dc ["INT_ADD", "register:40f0:8", ["const:8922dc:8", "const:4:8"]]
+ 008922dc ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-b7bcab90325d0db73d142efe34f38cff"></a>

### [`008925c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/008925c4.md) → [`0089261c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/0089261c.md) FUN_0089261c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00890754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890754.md) [`00891304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891304.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`008907ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008907ac.md) [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00892628",
      "incomplete_value": false,
      "site": "0089262c",
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
      "definition_site": "008925d0",
      "incomplete_value": false,
      "site": "008925d4",
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
      "00892628",
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
      "00892628",
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
- 008925d4 ["INT_ADD", "register:40f0:8", ["const:8925d4:8", "const:4:8"]]
- 008925d4 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0089262c ["INT_ADD", "register:40f0:8", ["const:89262c:8", "const:4:8"]]
+ 0089262c ["CALL", null, ["callee:0043b7b8:8"]]
- 008925d0 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008925d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008925d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008925d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00892628 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00892628 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00892628 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00892628 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ae71db0f1641cdd6d53006c45940d7fe"></a>

### [`008925dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/008925dc.md) → [`00892634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892634.md) FUN_00892634

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00892648",
      "incomplete_value": false,
      "site": "0089264c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008925f0",
      "incomplete_value": false,
      "site": "008925f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:d98:8"
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
      "0089264c",
      "DATA",
      [
        "storage",
        "00c81d98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0089264c",
      "DATA",
      [
        "storage",
        "00c81e68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008925e8 ["INT_ADD", "register:40f0:8", ["const:8925e8:8", "const:4:8"]]
- 008925e8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00892640 ["INT_ADD", "register:40f0:8", ["const:892640:8", "const:4:8"]]
+ 00892640 ["CALL", null, ["callee:00c57f60:8"]]
- 008925f0 ["COPY", "tmp:0:8", ["const:d98:8"]]
- 008925f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008925f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008925f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00892648 ["COPY", "tmp:0:8", ["const:e68:8"]]
+ 00892648 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00892648 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00892648 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0af2d8225fe8bd4134fc609d0df35789"></a>

### [`00892618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892618.md) → [`00892670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892670.md) FUN_00892670

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`0089275c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/0089275c.md) [`00892760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892760.md) [`00b3a5b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3a5b8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`008927b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/008927b4.md) [`008927b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/008927b8.md) [`00b3a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a654.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0089269c",
      "incomplete_value": false,
      "site": "008926a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892644",
      "incomplete_value": false,
      "site": "0089264c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:e18:8"
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
      "008926a4",
      "DATA",
      [
        "storage",
        "00c81e18",
        null,
        "undefined *"
      ]
    ],
    [
      "008926d8",
      "READ",
      [
        "storage",
        "00c81e38",
        null,
        "pointer"
      ]
    ],
    [
      "008926d8",
      "READ",
      [
        "storage",
        "00c81e40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008926a4",
      "DATA",
      [
        "storage",
        "00c81ee8",
        null,
        "undefined *"
      ]
    ],
    [
      "008926d8",
      "READ",
      [
        "storage",
        "00c81f08",
        null,
        "pointer"
      ]
    ],
    [
      "008926d8",
      "READ",
      [
        "storage",
        "00c81f10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892644 ["COPY", "tmp:0:8", ["const:e18:8"]]
- 00892644 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892644 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892644 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0089269c ["COPY", "tmp:0:8", ["const:ee8:8"]]
+ 0089269c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0089269c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0089269c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00892658 ["INT_ADD", "register:40f0:8", ["const:892658:8", "const:4:8"]]
- 00892658 ["CALL", null, ["callee:00b3a654:8"]]
+ 008926b0 ["INT_ADD", "register:40f0:8", ["const:8926b0:8", "const:4:8"]]
+ 008926b0 ["CALL", null, ["callee:00b3a654:8"]]
- 00892684 ["COPY", "register:0:8", ["register:4040:8"]]
- 00892684 ["INT_ADD", "register:40f0:8", ["const:892684:8", "const:4:8"]]
- 00892684 ["CALLIND", null, ["register:0:8"]]
+ 008926dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008926dc ["INT_ADD", "register:40f0:8", ["const:8926dc:8", "const:4:8"]]
+ 008926dc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-259fd4e7452c09fce0049fcd934065ca"></a>

### [`00892728`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892728.md) → [`00892780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892780.md) FUN_00892780

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00892794",
      "incomplete_value": false,
      "site": "00892798",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089273c",
      "incomplete_value": false,
      "site": "00892740",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:e18:8"
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
      "00892798",
      "DATA",
      [
        "storage",
        "00c81e18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00892798",
      "DATA",
      [
        "storage",
        "00c81ee8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892734 ["INT_ADD", "register:40f0:8", ["const:892734:8", "const:4:8"]]
- 00892734 ["CALL", null, ["callee:00c57f60:8"]]
+ 0089278c ["INT_ADD", "register:40f0:8", ["const:89278c:8", "const:4:8"]]
+ 0089278c ["CALL", null, ["callee:00c57f60:8"]]
- 0089273c ["COPY", "tmp:0:8", ["const:e18:8"]]
- 0089273c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0089273c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0089273c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00892794 ["COPY", "tmp:0:8", ["const:ee8:8"]]
+ 00892794 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00892794 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00892794 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9dc6a78f46c2de65ac64e55a7ba8c835"></a>

### [`0089274c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/0089274c.md) → [`008927a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/008927a4.md) FUN_008927a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008927a8",
      "incomplete_value": false,
      "site": "008927ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892750",
      "incomplete_value": false,
      "site": "00892754",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:e18:8"
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
      "008927ac",
      "DATA",
      [
        "storage",
        "00c81e18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008927ac",
      "DATA",
      [
        "storage",
        "00c81ee8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892750 ["COPY", "tmp:0:8", ["const:e18:8"]]
- 00892750 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892750 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892750 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008927a8 ["COPY", "tmp:0:8", ["const:ee8:8"]]
+ 008927a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008927a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008927a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-84c5e5c05c2c4e53fa9f13a3a48e3e64"></a>

### [`00892764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892764.md) → [`008927bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/008927bc.md) FUN_008927bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 14件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0071c460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071c/0071c460.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.73% / 新版 96.73%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0089282c",
      "incomplete_value": true,
      "site": "0089283c",
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
                "const:2a3000:8"
              ],
              [
                "leaf",
                "const:40f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008927d4",
      "incomplete_value": true,
      "site": "008927e4",
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
                "const:2a3000:8"
              ],
              [
                "leaf",
                "const:45c:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00892904",
      "incomplete_value": false,
      "site": "00892904",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:f58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008928ac",
      "incomplete_value": false,
      "site": "008928ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:e88:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0089282c",
      "READ",
      [
        "storage",
        "002a345c",
        null,
        "string"
      ]
    ],
    [
      "00892904",
      "DATA",
      [
        "storage",
        "00c81e88",
        null,
        "undefined *"
      ]
    ],
    [
      "0089295c",
      "READ",
      [
        "storage",
        "00c81ea8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0089282c",
      "READ",
      [
        "storage",
        "002a340f",
        null,
        "string"
      ]
    ],
    [
      "00892904",
      "DATA",
      [
        "storage",
        "00c81f58",
        null,
        "undefined *"
      ]
    ],
    [
      "0089295c",
      "READ",
      [
        "storage",
        "00c81f78",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0089283c ["INT_ADD", "register:40f0:8", ["const:89283c:8", "const:4:8"]]
- 0089283c ["CALL", null, ["callee:0043bb60:8"]]
+ 00892894 ["INT_ADD", "register:40f0:8", ["const:892894:8", "const:4:8"]]
+ 00892894 ["CALL", null, ["callee:0043bb60:8"]]
- 0089279c ["INT_ADD", "register:40f0:8", ["const:89279c:8", "const:4:8"]]
- 0089279c ["CALL", null, ["callee:0071c4b8:8"]]
+ 008927f4 ["INT_ADD", "register:40f0:8", ["const:8927f4:8", "const:4:8"]]
+ 008927f4 ["CALL", null, ["callee:0071c4b8:8"]]
- 008927a0 ["INT_ADD", "register:40f0:8", ["const:8927a0:8", "const:4:8"]]
- 008927a0 ["CALL", null, ["callee:00851550:8"]]
+ 008927f8 ["INT_ADD", "register:40f0:8", ["const:8927f8:8", "const:4:8"]]
+ 008927f8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-88b3199854d5bdda8c24aa1512dc2c2a"></a>

### [`00892b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892b0c.md) → [`00892b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892b64.md) FUN_00892b64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00892b78",
      "incomplete_value": false,
      "site": "00892b7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:f58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892b20",
      "incomplete_value": false,
      "site": "00892b24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:e88:8"
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
      "00892b7c",
      "DATA",
      [
        "storage",
        "00c81e88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00892b7c",
      "DATA",
      [
        "storage",
        "00c81f58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892b18 ["INT_ADD", "register:40f0:8", ["const:892b18:8", "const:4:8"]]
- 00892b18 ["CALL", null, ["callee:00c57f60:8"]]
+ 00892b70 ["INT_ADD", "register:40f0:8", ["const:892b70:8", "const:4:8"]]
+ 00892b70 ["CALL", null, ["callee:00c57f60:8"]]
- 00892b20 ["COPY", "tmp:0:8", ["const:e88:8"]]
- 00892b20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892b20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892b20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00892b78 ["COPY", "tmp:0:8", ["const:f58:8"]]
+ 00892b78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00892b78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00892b78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-521bfd0c9478561510dd510f60ebae5b"></a>

### [`00892b30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892b30.md) → [`00892b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892b88.md) FUN_00892b88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00892b8c",
      "incomplete_value": false,
      "site": "00892b90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:f58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892b34",
      "incomplete_value": false,
      "site": "00892b38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:e88:8"
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
      "00892b90",
      "DATA",
      [
        "storage",
        "00c81e88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00892b90",
      "DATA",
      [
        "storage",
        "00c81f58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892b34 ["COPY", "tmp:0:8", ["const:e88:8"]]
- 00892b34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892b34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892b34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00892b8c ["COPY", "tmp:0:8", ["const:f58:8"]]
+ 00892b8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00892b8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00892b8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2e0e74033f355500eb5c2aa50c71deb1"></a>

### [`00892b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892b48.md) → [`00892ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892ba0.md) FUN_00892ba0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00892bc4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00892b6c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00892bc4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00892bc4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892b6c ["INT_ADD", "register:40f0:8", ["const:892b6c:8", "const:4:8"]]
- 00892b6c ["CALL", null, ["ram:47acf4:8"]]
+ 00892bc4 ["INT_ADD", "register:40f0:8", ["const:892bc4:8", "const:4:8"]]
+ 00892bc4 ["CALL", null, ["ram:47ad34:8"]]
- 00892b78 ["INT_ADD", "register:40f0:8", ["const:892b78:8", "const:4:8"]]
- 00892b78 ["CALL", null, ["callee:0047ce14:8"]]
+ 00892bd0 ["INT_ADD", "register:40f0:8", ["const:892bd0:8", "const:4:8"]]
+ 00892bd0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-f099f2ff8f3de6b80119d539921fbf9d"></a>

### [`00892bbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892bbc.md) → [`00892c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892c14.md) FUN_00892c14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00892c28",
      "incomplete_value": false,
      "site": "00892c2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:ff8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892bd0",
      "incomplete_value": false,
      "site": "00892bd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:f28:8"
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
      "00892c2c",
      "DATA",
      [
        "storage",
        "00c81f28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00892c2c",
      "DATA",
      [
        "storage",
        "00c81ff8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892bc8 ["INT_ADD", "register:40f0:8", ["const:892bc8:8", "const:4:8"]]
- 00892bc8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00892c20 ["INT_ADD", "register:40f0:8", ["const:892c20:8", "const:4:8"]]
+ 00892c20 ["CALL", null, ["callee:00c57f60:8"]]
- 00892bd0 ["COPY", "tmp:0:8", ["const:f28:8"]]
- 00892bd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892bd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892bd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00892c28 ["COPY", "tmp:0:8", ["const:ff8:8"]]
+ 00892c28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00892c28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00892c28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e09fe9a16332c7bf7b2d20cde524e5fa"></a>

### [`00892c5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892c5c.md) → [`00892cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892cb4.md) FUN_00892cb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00892cc8",
      "incomplete_value": false,
      "site": "00892ccc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892c70",
      "incomplete_value": false,
      "site": "00892c74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00892ccc",
      "DATA",
      [
        "storage",
        "00c81fa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00892ccc",
      "DATA",
      [
        "storage",
        "00c82078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892c68 ["INT_ADD", "register:40f0:8", ["const:892c68:8", "const:4:8"]]
- 00892c68 ["CALL", null, ["callee:00c57f60:8"]]
+ 00892cc0 ["INT_ADD", "register:40f0:8", ["const:892cc0:8", "const:4:8"]]
+ 00892cc0 ["CALL", null, ["callee:00c57f60:8"]]
- 00892c6c ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 00892cc4 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00892c70 ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 00892c70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892c70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892c70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00892cc8 ["COPY", "tmp:0:8", ["const:78:8"]]
+ 00892cc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00892cc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00892cc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eec41f6247663662e69cdd18d240538a"></a>

### [`00892c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892c80.md) → [`00892cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892cd8.md) FUN_00892cd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00892cdc",
      "incomplete_value": true,
      "site": "00892ce0",
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
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892c84",
      "incomplete_value": true,
      "site": "00892c88",
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
      "00892ce0",
      "DATA",
      [
        "storage",
        "00c81fa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00892ce0",
      "DATA",
      [
        "storage",
        "00c82078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892c80 ["COPY", "register:4040:8", ["const:c81000:8"]]
+ 00892cd8 ["COPY", "register:4040:8", ["const:c82000:8"]]
- 00892c84 ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 00892c84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00892c84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00892c84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00892cdc ["COPY", "tmp:0:8", ["const:78:8"]]
+ 00892cdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00892cdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00892cdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c6c9abe060941de5bd9f1523618b733c"></a>

### [`00892c98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892c98.md) → [`00892cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892cf0.md) FUN_00892cf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00892d14",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00892cbc",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00892d14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00892d14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892cbc ["INT_ADD", "register:40f0:8", ["const:892cbc:8", "const:4:8"]]
- 00892cbc ["CALL", null, ["ram:47acf4:8"]]
+ 00892d14 ["INT_ADD", "register:40f0:8", ["const:892d14:8", "const:4:8"]]
+ 00892d14 ["CALL", null, ["ram:47ad34:8"]]
- 00892cc8 ["INT_ADD", "register:40f0:8", ["const:892cc8:8", "const:4:8"]]
- 00892cc8 ["CALL", null, ["callee:0047ce14:8"]]
+ 00892d20 ["INT_ADD", "register:40f0:8", ["const:892d20:8", "const:4:8"]]
+ 00892d20 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-5df09aa89b2507a180cbf7cd2c69f038"></a>

### [`00892d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892d08.md) → [`00892d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d60.md) FUN_00892d60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`00891304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891304.md) [`00891f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891f60.md) [`00892eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892eac.md) [`0089314c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089314c.md) [`0089329c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089329c.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 7件 [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) [`00892f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892f04.md) [`008931a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008931a4.md) [`008932f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008932f4.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00892d6c",
      "incomplete_value": false,
      "site": "00892d70",
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
      "definition_site": "00892d14",
      "incomplete_value": false,
      "site": "00892d18",
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
      "00892d6c",
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
      "00892d6c",
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
- 00892d18 ["INT_ADD", "register:40f0:8", ["const:892d18:8", "const:4:8"]]
- 00892d18 ["CALL", null, ["callee:00442970:8"]]
+ 00892d70 ["INT_ADD", "register:40f0:8", ["const:892d70:8", "const:4:8"]]
+ 00892d70 ["CALL", null, ["callee:00442970:8"]]
- 00892d14 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00892d14 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00892d14 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00892d14 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00892d6c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00892d6c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00892d6c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00892d6c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-92db4634a85adb7422ef37779074205f"></a>

### [`00892d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892d1c.md) → [`00892d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d74.md) FUN_00892d74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00892d7c",
      "incomplete_value": false,
      "site": "00892d80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892d24",
      "incomplete_value": false,
      "site": "00892d28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:28:8"
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
      "00892d80",
      "DATA",
      [
        "storage",
        "00c82028",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00892d80",
      "DATA",
      [
        "storage",
        "00c820f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892d24 ["COPY", "tmp:0:8", ["const:28:8"]]
- 00892d24 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00892d24 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00892d24 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00892d7c ["COPY", "tmp:0:8", ["const:f8:8"]]
+ 00892d7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00892d7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00892d7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b3ffc191c4fe8e7e319a8245838742ae"></a>

### [`00892d3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892d3c.md) → [`00892d94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d94.md) FUN_00892d94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00892d9c",
      "incomplete_value": false,
      "site": "00892da0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892d44",
      "incomplete_value": false,
      "site": "00892d48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:28:8"
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
      "00892da0",
      "DATA",
      [
        "storage",
        "00c82028",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00892da0",
      "DATA",
      [
        "storage",
        "00c820f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892d44 ["COPY", "tmp:0:8", ["const:28:8"]]
- 00892d44 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00892d44 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00892d44 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00892d9c ["COPY", "tmp:0:8", ["const:f8:8"]]
+ 00892d9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00892d9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00892d9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00892d68 ["INT_ADD", "register:40f0:8", ["const:892d68:8", "const:4:8"]]
- 00892d68 ["CALL", null, ["callee:00c57f80:8"]]
+ 00892dc0 ["INT_ADD", "register:40f0:8", ["const:892dc0:8", "const:4:8"]]
+ 00892dc0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-617f7ca0787acf12beb8addea4e4fbf3"></a>

### [`00892d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892d7c.md) → [`00892dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892dd4.md) FUN_00892dd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00892e04",
      "incomplete_value": false,
      "site": "00892e04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892dac",
      "incomplete_value": false,
      "site": "00892dac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:28:8"
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
      "00892e04",
      "DATA",
      [
        "storage",
        "00c82028",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00892e04",
      "DATA",
      [
        "storage",
        "00c820f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892d90 ["INT_ADD", "register:40f0:8", ["const:892d90:8", "const:4:8"]]
- 00892d90 ["CALL", null, ["callee:00c57f60:8"]]
+ 00892de8 ["INT_ADD", "register:40f0:8", ["const:892de8:8", "const:4:8"]]
+ 00892de8 ["CALL", null, ["callee:00c57f60:8"]]
- 00892da0 ["COPY", "tmp:0:8", ["const:28:8"]]
- 00892da0 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
- 00892da0 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
- 00892da0 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
+ 00892df8 ["COPY", "tmp:0:8", ["const:f8:8"]]
+ 00892df8 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
+ 00892df8 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
+ 00892df8 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
- 00892dd0 ["INT_ADD", "register:40f0:8", ["const:892dd0:8", "const:4:8"]]
- 00892dd0 ["CALL", null, ["callee:0043bb60:8"]]
+ 00892e28 ["INT_ADD", "register:40f0:8", ["const:892e28:8", "const:4:8"]]
+ 00892e28 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-5677be7c9b111b7158f298debaaaea0f"></a>

### [`00892e00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892e00.md) → [`00892e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892e58.md) FUN_00892e58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00892e78",
      "incomplete_value": false,
      "site": "00892e78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00892e20",
      "incomplete_value": false,
      "site": "00892e20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:28:8"
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
      "00892e78",
      "DATA",
      [
        "storage",
        "00c82028",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00892e78",
      "DATA",
      [
        "storage",
        "00c820f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00892e14 ["COPY", "tmp:0:8", ["const:28:8"]]
- 00892e14 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00892e14 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00892e14 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00892e6c ["COPY", "tmp:0:8", ["const:f8:8"]]
+ 00892e6c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00892e6c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00892e6c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00892e1c ["COPY", "register:40a0:8", ["register:4000:8"]]
- 00892e4c ["INT_ADD", "register:40f0:8", ["const:892e4c:8", "const:4:8"]]
- 00892e4c ["CALL", null, ["callee:0043bb60:8"]]
+ 00892ea4 ["INT_ADD", "register:40f0:8", ["const:892ea4:8", "const:4:8"]]
+ 00892ea4 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-af8198e6a9e81acbb86fb55a507a4a28"></a>

### [`008930f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/008930f4.md) → [`0089314c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/0089314c.md) FUN_0089314c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0089316c",
      "incomplete_value": false,
      "site": "00893170",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:178:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893114",
      "incomplete_value": false,
      "site": "00893118",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:a8:8"
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
      "00893170",
      "DATA",
      [
        "storage",
        "00c820a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893170",
      "DATA",
      [
        "storage",
        "00c82178",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893108 ["INT_ADD", "register:40f0:8", ["const:893108:8", "const:4:8"]]
- 00893108 ["CALL", null, ["callee:00c57f60:8"]]
+ 00893160 ["INT_ADD", "register:40f0:8", ["const:893160:8", "const:4:8"]]
+ 00893160 ["CALL", null, ["callee:00c57f60:8"]]
- 00893114 ["COPY", "tmp:0:8", ["const:a8:8"]]
- 00893114 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00893114 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00893114 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0089316c ["COPY", "tmp:0:8", ["const:178:8"]]
+ 0089316c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0089316c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0089316c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c4b034c62624bbda6796194758717133"></a>

### [`0089312c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089312c.md) → [`00893184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893184.md) FUN_00893184

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00893188",
      "incomplete_value": false,
      "site": "0089318c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:178:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893130",
      "incomplete_value": false,
      "site": "00893134",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:a8:8"
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
      "0089318c",
      "DATA",
      [
        "storage",
        "00c820a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0089318c",
      "DATA",
      [
        "storage",
        "00c82178",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893130 ["COPY", "tmp:0:8", ["const:a8:8"]]
- 00893130 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00893130 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00893130 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00893188 ["COPY", "tmp:0:8", ["const:178:8"]]
+ 00893188 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00893188 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00893188 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d91b6b8b3dca7d5ddfdd67ac929e02a4"></a>

### [`00893244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/00893244.md) → [`0089329c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/0089329c.md) FUN_0089329c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008932bc",
      "incomplete_value": false,
      "site": "008932c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:1f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893264",
      "incomplete_value": false,
      "site": "00893268",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:128:8"
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
      "008932c0",
      "DATA",
      [
        "storage",
        "00c82128",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008932c0",
      "DATA",
      [
        "storage",
        "00c821f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893258 ["INT_ADD", "register:40f0:8", ["const:893258:8", "const:4:8"]]
- 00893258 ["CALL", null, ["callee:00c57f60:8"]]
+ 008932b0 ["INT_ADD", "register:40f0:8", ["const:8932b0:8", "const:4:8"]]
+ 008932b0 ["CALL", null, ["callee:00c57f60:8"]]
- 00893264 ["COPY", "tmp:0:8", ["const:128:8"]]
- 00893264 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00893264 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00893264 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008932bc ["COPY", "tmp:0:8", ["const:1f8:8"]]
+ 008932bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008932bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008932bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-794fe30791ec9fd6b57ddcc4243794a8"></a>

### [`0089327c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089327c.md) → [`008932d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008932d4.md) FUN_008932d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008932d8",
      "incomplete_value": false,
      "site": "008932dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:1f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893280",
      "incomplete_value": false,
      "site": "00893284",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:128:8"
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
      "008932dc",
      "DATA",
      [
        "storage",
        "00c82128",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008932dc",
      "DATA",
      [
        "storage",
        "00c821f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893280 ["COPY", "tmp:0:8", ["const:128:8"]]
- 00893280 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00893280 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00893280 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008932d8 ["COPY", "tmp:0:8", ["const:1f8:8"]]
+ 008932d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008932d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008932d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fddf8ae4ea3e112c7b013abc7a8da358"></a>

### [`00893390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/00893390.md) → [`008933e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008933e8.md) FUN_008933e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00893408",
      "incomplete_value": false,
      "site": "0089340c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:278:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008933b0",
      "incomplete_value": false,
      "site": "008933b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:1a8:8"
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
      "0089340c",
      "DATA",
      [
        "storage",
        "00c821a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0089340c",
      "DATA",
      [
        "storage",
        "00c82278",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008933a4 ["INT_ADD", "register:40f0:8", ["const:8933a4:8", "const:4:8"]]
- 008933a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008933fc ["INT_ADD", "register:40f0:8", ["const:8933fc:8", "const:4:8"]]
+ 008933fc ["CALL", null, ["callee:00c57f60:8"]]
- 008933b0 ["COPY", "tmp:0:8", ["const:1a8:8"]]
- 008933b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008933b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008933b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00893408 ["COPY", "tmp:0:8", ["const:278:8"]]
+ 00893408 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00893408 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00893408 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-081d64dee348a4f7f5049fcf5db5472d"></a>

### [`008933c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/008933c8.md) → [`00893420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893420.md) FUN_00893420

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00893424",
      "incomplete_value": false,
      "site": "00893428",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:278:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008933cc",
      "incomplete_value": false,
      "site": "008933d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:1a8:8"
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
      "00893428",
      "DATA",
      [
        "storage",
        "00c821a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893428",
      "DATA",
      [
        "storage",
        "00c82278",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008933cc ["COPY", "tmp:0:8", ["const:1a8:8"]]
- 008933cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008933cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008933cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00893424 ["COPY", "tmp:0:8", ["const:278:8"]]
+ 00893424 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00893424 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00893424 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-84aed14fdc372a28782185b36a87ebd8"></a>

### [`0089348c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089348c.md) → [`008934e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008934e4.md) FUN_008934e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008934f8",
      "incomplete_value": false,
      "site": "008934fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:2f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008934a0",
      "incomplete_value": false,
      "site": "008934a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:228:8"
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
      "008934fc",
      "DATA",
      [
        "storage",
        "00c82228",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008934fc",
      "DATA",
      [
        "storage",
        "00c822f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893498 ["INT_ADD", "register:40f0:8", ["const:893498:8", "const:4:8"]]
- 00893498 ["CALL", null, ["callee:00c57f60:8"]]
+ 008934f0 ["INT_ADD", "register:40f0:8", ["const:8934f0:8", "const:4:8"]]
+ 008934f0 ["CALL", null, ["callee:00c57f60:8"]]
- 008934a0 ["COPY", "tmp:0:8", ["const:228:8"]]
- 008934a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008934a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008934a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008934f8 ["COPY", "tmp:0:8", ["const:2f8:8"]]
+ 008934f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008934f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008934f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4ee8ea73b073222136eeb8ac16d5dbe1"></a>

### [`008934b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/008934b0.md) → [`00893508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893508.md) FUN_00893508

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0089350c",
      "incomplete_value": false,
      "site": "00893510",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:2f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008934b4",
      "incomplete_value": false,
      "site": "008934b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:228:8"
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
      "00893510",
      "DATA",
      [
        "storage",
        "00c82228",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893510",
      "DATA",
      [
        "storage",
        "00c822f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008934b4 ["COPY", "tmp:0:8", ["const:228:8"]]
- 008934b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008934b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008934b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0089350c ["COPY", "tmp:0:8", ["const:2f8:8"]]
+ 0089350c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0089350c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0089350c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e2d240ec11d96e465999eeb8dcb0bc12"></a>

### [`008934f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/008934f8.md) → [`00893550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893550.md) FUN_00893550

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00893570",
      "incomplete_value": false,
      "site": "00893574",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:378:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893518",
      "incomplete_value": false,
      "site": "0089351c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:2a8:8"
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
      "00893574",
      "DATA",
      [
        "storage",
        "00c822a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893574",
      "DATA",
      [
        "storage",
        "00c82378",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0089350c ["INT_ADD", "register:40f0:8", ["const:89350c:8", "const:4:8"]]
- 0089350c ["CALL", null, ["callee:00c57f60:8"]]
+ 00893564 ["INT_ADD", "register:40f0:8", ["const:893564:8", "const:4:8"]]
+ 00893564 ["CALL", null, ["callee:00c57f60:8"]]
- 00893518 ["COPY", "tmp:0:8", ["const:2a8:8"]]
- 00893518 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00893518 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00893518 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00893570 ["COPY", "tmp:0:8", ["const:378:8"]]
+ 00893570 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00893570 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00893570 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4429fd48f49e195337a43876e4388825"></a>

### [`00893530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/00893530.md) → [`00893588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893588.md) FUN_00893588

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0089358c",
      "incomplete_value": false,
      "site": "00893590",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:378:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893534",
      "incomplete_value": false,
      "site": "00893538",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:2a8:8"
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
      "00893590",
      "DATA",
      [
        "storage",
        "00c822a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00893590",
      "DATA",
      [
        "storage",
        "00c82378",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893534 ["COPY", "tmp:0:8", ["const:2a8:8"]]
- 00893534 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00893534 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00893534 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0089358c ["COPY", "tmp:0:8", ["const:378:8"]]
+ 0089358c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0089358c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0089358c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-68be646ec9d4221a17136335595982e4"></a>

### [`00893550`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/00893550.md) → [`008935a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008935a8.md) FUN_008935a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047ce20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ce20.md) [`0047cf08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cf08.md) [`00892d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892d08.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce60.md) [`0047cf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cf48.md) [`00892d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d60.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008935d8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893580",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008935e4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0089358c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008935d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008935e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008935d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008935e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893580 ["INT_ADD", "register:40f0:8", ["const:893580:8", "const:4:8"]]
- 00893580 ["CALL", null, ["ram:47acf4:8"]]
+ 008935d8 ["INT_ADD", "register:40f0:8", ["const:8935d8:8", "const:4:8"]]
+ 008935d8 ["CALL", null, ["ram:47ad34:8"]]
- 0089358c ["INT_ADD", "register:40f0:8", ["const:89358c:8", "const:4:8"]]
- 0089358c ["CALL", null, ["ram:47acf4:8"]]
+ 008935e4 ["INT_ADD", "register:40f0:8", ["const:8935e4:8", "const:4:8"]]
+ 008935e4 ["CALL", null, ["ram:47ad34:8"]]
- 00893584 ["INT_ADD", "register:40f0:8", ["const:893584:8", "const:4:8"]]
- 00893584 ["CALL", null, ["callee:0047ce60:8"]]
+ 008935dc ["INT_ADD", "register:40f0:8", ["const:8935dc:8", "const:4:8"]]
+ 008935dc ["CALL", null, ["callee:0047ce60:8"]]
~~~


<a id="compare-e667537e97df17b196a524506571263b"></a>

### [`008935cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/008935cc.md) → [`00893624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893624.md) _INIT_167

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.83% / 新版 89.83%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00893660",
      "incomplete_value": true,
      "site": "0089367c",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:f66:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893608",
      "incomplete_value": true,
      "site": "00893624",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:f26:8"
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
      "definition_site": "00893844",
      "incomplete_value": false,
      "site": "00893858",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:43a000:8"
          ],
          [
            "leaf",
            "const:eb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008937ec",
      "incomplete_value": false,
      "site": "00893800",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:43a000:8"
          ],
          [
            "leaf",
            "const:e70:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0089384c",
      "incomplete_value": false,
      "site": "00893858",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1123000:8"
          ],
          [
            "leaf",
            "const:988:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008937f4",
      "incomplete_value": false,
      "site": "00893800",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1123000:8"
          ],
          [
            "leaf",
            "const:888:8"
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
      "00893660",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00893684",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "008936a4",
      "READ",
      [
        "storage",
        "002b8dc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00893660",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00893684",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "008936a4",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893800 ["INT_ADD", "register:40f0:8", ["const:893800:8", "const:4:8"]]
- 00893800 ["CALL", null, ["callee:00c57f00:8"]]
+ 00893858 ["INT_ADD", "register:40f0:8", ["const:893858:8", "const:4:8"]]
+ 00893858 ["CALL", null, ["callee:00c57f00:8"]]
- 008935f8 ["COPY", "tmp:0:8", ["const:888:8"]]
- 008935f8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 008935f8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 008935f8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00893650 ["COPY", "tmp:0:8", ["const:988:8"]]
+ 00893650 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00893650 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00893650 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 00893600 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-cd8582eeb90ac71d19ba0866efd873d6"></a>

### [`0089395c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089395c.md) → [`008939b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008939b4.md) FUN_008939b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047ce20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ce20.md) [`0047cf08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cf08.md) [`0083f284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f284.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce60.md) [`0047cf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cf48.md) [`0083f2dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f2dc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893a08",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008939b0",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 7,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893a14",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008939bc",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00893a08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00893a14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00893a08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00893a14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893964 ["INT_ADD", "register:40f0:8", ["const:893964:8", "const:4:8"]]
- 00893964 ["CALL", null, ["callee:00851550:8"]]
+ 008939bc ["INT_ADD", "register:40f0:8", ["const:8939bc:8", "const:4:8"]]
+ 008939bc ["CALL", null, ["callee:00851550:8"]]
- 008939b0 ["INT_ADD", "register:40f0:8", ["const:8939b0:8", "const:4:8"]]
- 008939b0 ["CALL", null, ["ram:47acf4:8"]]
+ 00893a08 ["INT_ADD", "register:40f0:8", ["const:893a08:8", "const:4:8"]]
+ 00893a08 ["CALL", null, ["ram:47ad34:8"]]
- 008939bc ["INT_ADD", "register:40f0:8", ["const:8939bc:8", "const:4:8"]]
- 008939bc ["CALL", null, ["ram:47acf4:8"]]
+ 00893a14 ["INT_ADD", "register:40f0:8", ["const:893a14:8", "const:4:8"]]
+ 00893a14 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-6ad7687b86d75bfead9d46885088e5cc"></a>

### [`008939d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/008939d0.md) → [`00893a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893a28.md) FUN_00893a28

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048f398`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048f/0048f398.md) [`00492c00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492c00.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048f3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048f/0048f3d8.md) [`00492c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492c40.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.65% / 新版 82.65%

優先判定に残った影響 `call_target` 5件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00893b18",
      "incomplete_value": true,
      "site": "00893b28",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:aa7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893ac0",
      "incomplete_value": true,
      "site": "00893ad0",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:b03:8"
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
      "definition_site": "00893b1c",
      "incomplete_value": true,
      "site": "00893b30",
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
                "const:d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893ac4",
      "incomplete_value": true,
      "site": "00893ad8",
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
                "const:d:8"
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
      "definition_site": "00893b2c",
      "incomplete_value": true,
      "site": "00893b3c",
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
                "const:b90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893ad4",
      "incomplete_value": true,
      "site": "00893ae4",
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
                "const:b50:8"
              ]
            ]
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
      "00893a68",
      "DATA",
      [
        "storage",
        "002f3df2",
        "switchD_00893a18::switchdataD_002f3df2",
        "byte"
      ]
    ],
    [
      "00893a74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00893a98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "00893a68",
      "DATA",
      [
        "storage",
        "002f3e32",
        "switchD_00893a70::switchdataD_002f3e32",
        "byte"
      ]
    ],
    [
      "00893a74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00893a98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893a1c ["INT_ADD", "register:40f0:8", ["const:893a1c:8", "const:4:8"]]
- 00893a1c ["CALL", null, ["ram:48ccf8:8"]]
+ 00893a74 ["INT_ADD", "register:40f0:8", ["const:893a74:8", "const:4:8"]]
+ 00893a74 ["CALL", null, ["ram:48cd38:8"]]
- 00893a40 ["INT_ADD", "register:40f0:8", ["const:893a40:8", "const:4:8"]]
- 00893a40 ["CALL", null, ["ram:48ccf8:8"]]
+ 00893a98 ["INT_ADD", "register:40f0:8", ["const:893a98:8", "const:4:8"]]
+ 00893a98 ["CALL", null, ["ram:48cd38:8"]]
- 00893a54 ["INT_ADD", "register:40f0:8", ["const:893a54:8", "const:4:8"]]
- 00893a54 ["CALL", null, ["ram:48ccf8:8"]]
+ 00893aac ["INT_ADD", "register:40f0:8", ["const:893aac:8", "const:4:8"]]
+ 00893aac ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-ee6c2a5a7d7b141e25c8db203d23cbf2"></a>

### [`00893b84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/00893b84.md) → [`00893bdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893bdc.md) FUN_00893bdc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0089d4c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089d/0089d4c8.md) · 呼出先 14件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f42c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f42c.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047ca8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ca8c.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md)
- 新版 呼出元 1件 [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) · 呼出先 14件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f46c.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cacc.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.25% / 新版 92.25%

優先判定に残った影響 `call_target` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893c14",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893bbc",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893c20",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893bc8",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893c30",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00893bd8",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "00893c14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00893c20",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00893c30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "00893c14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00893c20",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00893c30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893bbc ["INT_ADD", "register:40f0:8", ["const:893bbc:8", "const:4:8"]]
- 00893bbc ["CALL", null, ["ram:48ccf8:8"]]
+ 00893c14 ["INT_ADD", "register:40f0:8", ["const:893c14:8", "const:4:8"]]
+ 00893c14 ["CALL", null, ["ram:48cd38:8"]]
- 00893bc8 ["INT_ADD", "register:40f0:8", ["const:893bc8:8", "const:4:8"]]
- 00893bc8 ["CALL", null, ["ram:47acf4:8"]]
+ 00893c20 ["INT_ADD", "register:40f0:8", ["const:893c20:8", "const:4:8"]]
+ 00893c20 ["CALL", null, ["ram:47ad34:8"]]
- 00893bd8 ["INT_ADD", "register:40f0:8", ["const:893bd8:8", "const:4:8"]]
- 00893bd8 ["CALL", null, ["ram:48ccf8:8"]]
+ 00893c30 ["INT_ADD", "register:40f0:8", ["const:893c30:8", "const:4:8"]]
+ 00893c30 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-c5d62d8600db36d023ac3ba6ae355d50"></a>

### [`00893dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/00893dbc.md) → [`00893e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893e14.md) FUN_00893e14

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 53件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f3d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f3d4.md) [`0043f42c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f42c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md)
- 新版 呼出元 0件  · 呼出先 53件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f414.md) [`0043f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f46c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.09% / 新版 92.09%

優先判定に残った影響 `call_argument_candidate` 58件, `call_target` 27件, `store_value` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00893f34",
      "incomplete_value": true,
      "site": "00893f34",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:c0e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893edc",
      "incomplete_value": true,
      "site": "00893edc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:c62:8"
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
      "definition_site": "00893f7c",
      "incomplete_value": true,
      "site": "00893f88",
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
                "const:590:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893f24",
      "incomplete_value": true,
      "site": "00893f30",
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
                "const:550:8"
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
      "definition_site": "00893f78",
      "incomplete_value": true,
      "site": "00893f8c",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:783:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00893f20",
      "incomplete_value": true,
      "site": "00893f34",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:743:8"
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
      "00893f24",
      "READ",
      [
        "storage",
        "002bcc62",
        null,
        "string"
      ]
    ],
    [
      "00893f5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00893f78",
      "READ",
      [
        "storage",
        "002b6743",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00893f24",
      "READ",
      [
        "storage",
        "002bcc0e",
        null,
        "string"
      ]
    ],
    [
      "00893f5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00893f78",
      "READ",
      [
        "storage",
        "002b6783",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00893f04 ["INT_ADD", "register:40f0:8", ["const:893f04:8", "const:4:8"]]
- 00893f04 ["CALL", null, ["ram:48ccf8:8"]]
+ 00893f5c ["INT_ADD", "register:40f0:8", ["const:893f5c:8", "const:4:8"]]
+ 00893f5c ["CALL", null, ["ram:48cd38:8"]]
- 00893f90 ["COPY", "tmp:0:8", ["const:c6c:8"]]
- 00893f90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00893f90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00893f90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00893fe8 ["COPY", "tmp:0:8", ["const:c18:8"]]
+ 00893fe8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00893fe8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00893fe8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00893fe8 ["INT_ADD", "register:40f0:8", ["const:893fe8:8", "const:4:8"]]
- 00893fe8 ["CALL", null, ["ram:48ccf8:8"]]
+ 00894040 ["INT_ADD", "register:40f0:8", ["const:894040:8", "const:4:8"]]
+ 00894040 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-63f2a50f3bdbdfd11bdd19ef14acd373"></a>

### [`008959d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00895/008959d0.md) → [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) FUN_00895a28

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 99件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043ec60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043ec60.md) [`0043f78c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f78c.md)
- 新版 呼出元 0件  · 呼出先 99件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) [`0043f7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f7cc.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `call_argument_candidate` 34件, `call_target` 22件, `store_value` 30件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00895a88",
      "incomplete_value": true,
      "site": "00895a88",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a0000:8"
              ],
              [
                "leaf",
                "const:66c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00895a30",
      "incomplete_value": true,
      "site": "00895a30",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a0000:8"
              ],
              [
                "leaf",
                "const:6b9:8"
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
      "definition_site": "00895a8c",
      "incomplete_value": true,
      "site": "00895a8c",
      "value": [
        "LOAD",
        "8",
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
                "const:5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00895a34",
      "incomplete_value": true,
      "site": "00895a34",
      "value": [
        "LOAD",
        "8",
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
                "const:5:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "00895ad4",
      "incomplete_value": true,
      "site": "00895ae0",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1d4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00895a7c",
      "incomplete_value": true,
      "site": "00895a88",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:194:8"
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
      "00895a78",
      "READ",
      [
        "storage",
        "002a06b9",
        null,
        "string"
      ]
    ],
    [
      "00895a7c",
      "READ",
      [
        "storage",
        "002a06be",
        null,
        "string"
      ]
    ],
    [
      "00895ad4",
      "READ",
      [
        "storage",
        "002b7194",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00895a78",
      "READ",
      [
        "storage",
        "002a066c",
        null,
        "string"
      ]
    ],
    [
      "00895a7c",
      "READ",
      [
        "storage",
        "002a0671",
        null,
        "string"
      ]
    ],
    [
      "00895ad4",
      "READ",
      [
        "storage",
        "002b71d4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00895ab4 ["INT_ADD", "register:40f0:8", ["const:895ab4:8", "const:4:8"]]
- 00895ab4 ["CALL", null, ["ram:48ccf8:8"]]
+ 00895b0c ["INT_ADD", "register:40f0:8", ["const:895b0c:8", "const:4:8"]]
+ 00895b0c ["CALL", null, ["ram:48cd38:8"]]
- 00895ad0 ["INT_ADD", "register:40f0:8", ["const:895ad0:8", "const:4:8"]]
- 00895ad0 ["CALL", null, ["callee:00c58040:8"]]
+ 00895b28 ["INT_ADD", "register:40f0:8", ["const:895b28:8", "const:4:8"]]
+ 00895b28 ["CALL", null, ["callee:00c58040:8"]]
- 00895c48 ["INT_ADD", "register:40f0:8", ["const:895c48:8", "const:4:8"]]
- 00895c48 ["CALL", null, ["callee:00492c40:8"]]
+ 00895ca0 ["INT_ADD", "register:40f0:8", ["const:895ca0:8", "const:4:8"]]
+ 00895ca0 ["CALL", null, ["callee:00492c40:8"]]
~~~


<a id="compare-e16faaaaa598d0ac184a48c93338eda8"></a>

### [`0089b28c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089b28c.md) → [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) FUN_0089b2e4

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 28件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0043e828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e828.md) [`0044b254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b254.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md)
- 新版 呼出元 0件  · 呼出先 28件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`0044b294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b294.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.31% / 新版 99.31%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0089b7f4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0089b79c",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 80,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0089b9a4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0089b94c",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 103,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0089b9b0",
      "incomplete_value": false,
      "site": "0089b9b8",
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
            "const:4b4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089b958",
      "incomplete_value": false,
      "site": "0089b960",
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
            "const:501:8"
          ]
        ]
      ]
    },
    "ordinal": 104,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0089b44c",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "uleb128"
      ]
    ],
    [
      "0089b4c4",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "uleb128"
      ]
    ],
    [
      "0089b4d4",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "uleb128"
      ]
    ]
  ],
  "added": [
    [
      "0089b44c",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "0089b4c4",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "0089b4d4",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 0089b744 ["INT_ADD", "register:40f0:8", ["const:89b744:8", "const:4:8"]]
- 0089b744 ["CALL", null, ["callee:00851550:8"]]
+ 0089b79c ["INT_ADD", "register:40f0:8", ["const:89b79c:8", "const:4:8"]]
+ 0089b79c ["CALL", null, ["callee:00851550:8"]]
- 0089b79c ["INT_ADD", "register:40f0:8", ["const:89b79c:8", "const:4:8"]]
- 0089b79c ["CALL", null, ["ram:47acf4:8"]]
+ 0089b7f4 ["INT_ADD", "register:40f0:8", ["const:89b7f4:8", "const:4:8"]]
+ 0089b7f4 ["CALL", null, ["ram:47ad34:8"]]
- 0089b908 ["INT_ADD", "register:40f0:8", ["const:89b908:8", "const:4:8"]]
- 0089b908 ["CALL", null, ["callee:00851550:8"]]
+ 0089b960 ["INT_ADD", "register:40f0:8", ["const:89b960:8", "const:4:8"]]
+ 0089b960 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-40a040c2841892914545bb7b73a5c96e"></a>

### [`0089d4c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089d/0089d4c8.md) → [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) FUN_0089d520

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 52件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00472bac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00472/00472bac.md) [`00472bbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00472/00472bbc.md) [`00472d5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00472/00472d5c.md)
- 新版 呼出元 0件  · 呼出先 52件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00472bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472bec.md) [`00472bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472bfc.md) [`00472d9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472d9c.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.60% / 新版 95.60%

優先判定に残った影響 `call_argument_candidate` 9件, `call_target` 13件, `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0089d624",
      "incomplete_value": true,
      "site": "0089d624",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:c81:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089d5cc",
      "incomplete_value": true,
      "site": "0089d5cc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:cdd:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0089d758",
      "incomplete_value": true,
      "site": "0089d770",
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
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:cec:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089d700",
      "incomplete_value": true,
      "site": "0089d718",
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
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:d40:8"
              ]
            ]
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
      "definition_site": "0089d818",
      "incomplete_value": true,
      "site": "0089d818",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:55d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0089d7c0",
      "incomplete_value": true,
      "site": "0089d7c0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:5aa:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0089d610",
      "READ",
      [
        "storage",
        "002adcdd",
        null,
        "string"
      ]
    ],
    [
      "0089d748",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0089d758",
      "READ",
      [
        "storage",
        "002bcd40",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0089d610",
      "READ",
      [
        "storage",
        "002adc81",
        null,
        "string"
      ]
    ],
    [
      "0089d748",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0089d758",
      "READ",
      [
        "storage",
        "002bccec",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0089d6f0 ["INT_ADD", "register:40f0:8", ["const:89d6f0:8", "const:4:8"]]
- 0089d6f0 ["CALL", null, ["ram:48ccf8:8"]]
+ 0089d748 ["INT_ADD", "register:40f0:8", ["const:89d748:8", "const:4:8"]]
+ 0089d748 ["CALL", null, ["ram:48cd38:8"]]
- 0089d838 ["INT_ADD", "register:40f0:8", ["const:89d838:8", "const:4:8"]]
- 0089d838 ["CALL", null, ["ram:48ccf8:8"]]
+ 0089d890 ["INT_ADD", "register:40f0:8", ["const:89d890:8", "const:4:8"]]
+ 0089d890 ["CALL", null, ["ram:48cd38:8"]]
- 0089d890 ["INT_ADD", "register:40f0:8", ["const:89d890:8", "const:4:8"]]
- 0089d890 ["CALL", null, ["callee:00891fb8:8"]]
+ 0089d8e8 ["INT_ADD", "register:40f0:8", ["const:89d8e8:8", "const:4:8"]]
+ 0089d8e8 ["CALL", null, ["callee:00891fb8:8"]]
~~~


<a id="compare-29caf34c2971245b102c7e75d847fd21"></a>

### [`008a4274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4274.md) → [`008a42cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a42cc.md) FUN_008a42cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008a42e0",
      "incomplete_value": false,
      "site": "008a42e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:470:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4288",
      "incomplete_value": false,
      "site": "008a428c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:3a0:8"
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
      "008a42e4",
      "DATA",
      [
        "storage",
        "00c823a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a42e4",
      "DATA",
      [
        "storage",
        "00c82470",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4280 ["INT_ADD", "register:40f0:8", ["const:8a4280:8", "const:4:8"]]
- 008a4280 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a42d8 ["INT_ADD", "register:40f0:8", ["const:8a42d8:8", "const:4:8"]]
+ 008a42d8 ["CALL", null, ["callee:00c57f60:8"]]
- 008a4288 ["COPY", "tmp:0:8", ["const:3a0:8"]]
- 008a4288 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4288 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4288 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a42e0 ["COPY", "tmp:0:8", ["const:470:8"]]
+ 008a42e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a42e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a42e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-80a16cdb71116a392fa7360158ff4776"></a>

### [`008a4298`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4298.md) → [`008a42f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a42f0.md) FUN_008a42f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008a42f4",
      "incomplete_value": false,
      "site": "008a42f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:470:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a429c",
      "incomplete_value": false,
      "site": "008a42a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:3a0:8"
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
      "008a42f8",
      "DATA",
      [
        "storage",
        "00c823a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a42f8",
      "DATA",
      [
        "storage",
        "00c82470",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a429c ["COPY", "tmp:0:8", ["const:3a0:8"]]
- 008a429c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a429c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a429c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a42f4 ["COPY", "tmp:0:8", ["const:470:8"]]
+ 008a42f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a42f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a42f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-71564265ebcd905dff93e62127692b21"></a>

### [`008a42b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a42b0.md) → [`008a4308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4308.md) FUN_008a4308

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`008a43e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a43e4.md) [`008a43e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a43e8.md) [`00b3a3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3a3f0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`008a443c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a443c.md) [`008a4440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4440.md) [`00b3a48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a48c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008a4320",
      "incomplete_value": false,
      "site": "008a4330",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:4e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a42c8",
      "incomplete_value": false,
      "site": "008a42d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c82000:8"
          ],
          [
            "leaf",
            "const:410:8"
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
      "008a4330",
      "DATA",
      [
        "storage",
        "00c82410",
        null,
        "undefined *"
      ]
    ],
    [
      "008a4364",
      "READ",
      [
        "storage",
        "00c82430",
        null,
        "pointer"
      ]
    ],
    [
      "008a4364",
      "READ",
      [
        "storage",
        "00c82438",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4330",
      "DATA",
      [
        "storage",
        "00c824e0",
        null,
        "undefined *"
      ]
    ],
    [
      "008a4364",
      "READ",
      [
        "storage",
        "00c82500",
        null,
        "pointer"
      ]
    ],
    [
      "008a4364",
      "READ",
      [
        "storage",
        "00c82508",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a42c8 ["COPY", "tmp:0:8", ["const:410:8"]]
- 008a42c8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008a42c8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008a42c8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008a4320 ["COPY", "tmp:0:8", ["const:4e0:8"]]
+ 008a4320 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008a4320 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008a4320 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008a42e4 ["INT_ADD", "register:40f0:8", ["const:8a42e4:8", "const:4:8"]]
- 008a42e4 ["CALL", null, ["callee:00b3a48c:8"]]
+ 008a433c ["INT_ADD", "register:40f0:8", ["const:8a433c:8", "const:4:8"]]
+ 008a433c ["CALL", null, ["callee:00b3a48c:8"]]
- 008a4310 ["COPY", "register:0:8", ["register:4040:8"]]
- 008a4310 ["INT_ADD", "register:40f0:8", ["const:8a4310:8", "const:4:8"]]
- 008a4310 ["CALLIND", null, ["register:0:8"]]
+ 008a4368 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008a4368 ["INT_ADD", "register:40f0:8", ["const:8a4368:8", "const:4:8"]]
+ 008a4368 ["CALLIND", null, ["register:0:8"]]
~~~


