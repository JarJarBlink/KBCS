# v16.0.2 → v16.0.3 · 最優先の変更候補 (45)

[一覧の目次](README.md)

<a id="compare-8c0468cacf5c18e84193d90ea969da25"></a>

### [`007af3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af3a0.md) → [`007afdc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007afdc4.md) FUN_007afdc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007afdf0",
      "incomplete_value": false,
      "site": "007afdf0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af3cc",
      "incomplete_value": false,
      "site": "007af3cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:968:8"
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
      "007afdf0",
      "DATA",
      [
        "storage",
        "00c7a968",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007afdf0",
      "DATA",
      [
        "storage",
        "00c7b938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af3b4 ["INT_ADD", "register:40f0:8", ["const:7af3b4:8", "const:4:8"]]
- 007af3b4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007afdd8 ["INT_ADD", "register:40f0:8", ["const:7afdd8:8", "const:4:8"]]
+ 007afdd8 ["CALL", null, ["callee:00c58f30:8"]]
- 007af3c0 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007afde4 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007af3c4 ["COPY", "tmp:0:8", ["const:968:8"]]
- 007af3c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007af3c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007af3c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007afde8 ["COPY", "tmp:0:8", ["const:938:8"]]
+ 007afde8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007afde8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007afde8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7af29e441702875b7c1a2781e03cc9e5"></a>

### [`007af428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af428.md) → [`007afe4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007af/007afe4c.md) FUN_007afe4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007afe68",
      "incomplete_value": false,
      "site": "007afe68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af444",
      "incomplete_value": false,
      "site": "007af444",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:968:8"
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
      "007afe68",
      "DATA",
      [
        "storage",
        "00c7a968",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007afe68",
      "DATA",
      [
        "storage",
        "00c7b938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af43c ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 007afe60 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007af440 ["COPY", "tmp:0:8", ["const:968:8"]]
- 007af440 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007af440 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007af440 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007afe64 ["COPY", "tmp:0:8", ["const:938:8"]]
+ 007afe64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007afe64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007afe64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007af464 ["COPY", "register:0:8", ["register:4048:8"]]
- 007af464 ["INT_ADD", "register:40f0:8", ["const:7af464:8", "const:4:8"]]
- 007af464 ["CALLIND", null, ["register:0:8"]]
+ 007afe88 ["COPY", "register:0:8", ["register:4048:8"]]
+ 007afe88 ["INT_ADD", "register:40f0:8", ["const:7afe88:8", "const:4:8"]]
+ 007afe88 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-729f0795490f7f0c0bb8ae29deaa3f80"></a>

### [`007af684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af684.md) → [`007b00a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b00a8.md) FUN_007b00a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b00b4",
      "incomplete_value": false,
      "site": "007b00c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af690",
      "incomplete_value": false,
      "site": "007af69c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
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
      "007b00c0",
      "DATA",
      [
        "storage",
        "00c7a9e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b00c0",
      "DATA",
      [
        "storage",
        "00c7b9b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af68c ["COPY", "register:4050:8", ["const:c7a000:8"]]
+ 007b00b0 ["COPY", "register:4050:8", ["const:c7b000:8"]]
- 007af690 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 007af690 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007af690 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007af690 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007b00b4 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 007b00b4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007b00b4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007b00b4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-898001a7ce1622b7855c34eaaffbe2ff"></a>

### [`007af6c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af6c8.md) → [`007b00ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b00ec.md) FUN_007b00ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b0104",
      "incomplete_value": false,
      "site": "007b0110",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af6e0",
      "incomplete_value": false,
      "site": "007af6ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
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
      "007b0110",
      "DATA",
      [
        "storage",
        "00c7a9e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b0110",
      "DATA",
      [
        "storage",
        "00c7b9b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af6dc ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007b0100 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007af6e0 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 007af6e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007af6e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007af6e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007b0104 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 007b0104 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007b0104 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007b0104 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007af710 ["COPY", "register:0:8", ["register:4040:8"]]
- 007af710 ["INT_ADD", "register:40f0:8", ["const:7af710:8", "const:4:8"]]
- 007af710 ["CALLIND", null, ["register:0:8"]]
+ 007b0134 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007b0134 ["INT_ADD", "register:40f0:8", ["const:7b0134:8", "const:4:8"]]
+ 007b0134 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c930b57b2468f8682675835b466314c2"></a>

### [`007af724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af724.md) → [`007b0148`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0148.md) FUN_007b0148

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b0174",
      "incomplete_value": false,
      "site": "007b0174",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af750",
      "incomplete_value": false,
      "site": "007af750",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
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
      "007b0174",
      "DATA",
      [
        "storage",
        "00c7a9e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b0174",
      "DATA",
      [
        "storage",
        "00c7b9b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af738 ["INT_ADD", "register:40f0:8", ["const:7af738:8", "const:4:8"]]
- 007af738 ["CALL", null, ["callee:00c58f30:8"]]
+ 007b015c ["INT_ADD", "register:40f0:8", ["const:7b015c:8", "const:4:8"]]
+ 007b015c ["CALL", null, ["callee:00c58f30:8"]]
- 007af744 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007b0168 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007af748 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 007af748 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007af748 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007af748 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007b016c ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 007b016c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007b016c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007b016c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a9ec4e356de5d1b819c471c0afa4441b"></a>

### [`007af7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af7ac.md) → [`007b01d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b01d0.md) FUN_007b01d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b01ec",
      "incomplete_value": false,
      "site": "007b01ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af7c8",
      "incomplete_value": false,
      "site": "007af7c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
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
      "007b01ec",
      "DATA",
      [
        "storage",
        "00c7a9e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b01ec",
      "DATA",
      [
        "storage",
        "00c7b9b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af7c0 ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 007b01e4 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007af7c4 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 007af7c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007af7c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007af7c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007b01e8 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 007b01e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007b01e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007b01e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007af7e8 ["COPY", "register:0:8", ["register:4048:8"]]
- 007af7e8 ["INT_ADD", "register:40f0:8", ["const:7af7e8:8", "const:4:8"]]
- 007af7e8 ["CALLIND", null, ["register:0:8"]]
+ 007b020c ["COPY", "register:0:8", ["register:4048:8"]]
+ 007b020c ["INT_ADD", "register:40f0:8", ["const:7b020c:8", "const:4:8"]]
+ 007b020c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c6f0e1eca6eb18b62dbe8fa670ea3ee6"></a>

### [`007af8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af8f0.md) → [`007b0314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0314.md) FUN_007b0314

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ad37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad37c.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`007ad7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ad/007ad7a0.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b034c",
      "incomplete_value": false,
      "site": "007b0354",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c71000:8"
          ],
          [
            "leaf",
            "const:660:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af928",
      "incomplete_value": false,
      "site": "007af930",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
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
      "007b0354",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "007b040c",
      "READ",
      [
        "storage",
        "00c706a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b0354",
      "DATA",
      [
        "storage",
        "00c71660",
        null,
        "pointer"
      ]
    ],
    [
      "007b040c",
      "READ",
      [
        "storage",
        "00c71670",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af920 ["INT_ADD", "register:40f0:8", ["const:7af920:8", "const:4:8"]]
- 007af920 ["CALL", null, ["callee:00c58f30:8"]]
+ 007b0344 ["INT_ADD", "register:40f0:8", ["const:7b0344:8", "const:4:8"]]
+ 007b0344 ["CALL", null, ["callee:00c58f30:8"]]
- 007af924 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 007b0348 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 007af928 ["COPY", "tmp:0:8", ["const:690:8"]]
- 007af928 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007af928 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007af928 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007b034c ["COPY", "tmp:0:8", ["const:660:8"]]
+ 007b034c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007b034c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007b034c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0ff3d43d9f34339306372ab6b35972af"></a>

### [`007afa68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afa68.md) → [`007b048c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b048c.md) FUN_007b048c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b0498",
      "incomplete_value": false,
      "site": "007b04a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afa74",
      "incomplete_value": false,
      "site": "007afa80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a68:8"
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
      "007b04a4",
      "DATA",
      [
        "storage",
        "00c7aa68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b04a4",
      "DATA",
      [
        "storage",
        "00c7ba38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afa70 ["COPY", "register:4050:8", ["const:c7a000:8"]]
+ 007b0494 ["COPY", "register:4050:8", ["const:c7b000:8"]]
- 007afa74 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 007afa74 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007afa74 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007afa74 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007b0498 ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 007b0498 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007b0498 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007b0498 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-1665ff2e54345f862eaffc2050c10a66"></a>

### [`007afaac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afaac.md) → [`007b04d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b04d0.md) FUN_007b04d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b04e8",
      "incomplete_value": false,
      "site": "007b04f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afac4",
      "incomplete_value": false,
      "site": "007afad0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a68:8"
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
      "007b04f4",
      "DATA",
      [
        "storage",
        "00c7aa68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b04f4",
      "DATA",
      [
        "storage",
        "00c7ba38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afac0 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007b04e4 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007afac4 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 007afac4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007afac4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007afac4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007b04e8 ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 007b04e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007b04e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007b04e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007afaf4 ["COPY", "register:0:8", ["register:4040:8"]]
- 007afaf4 ["INT_ADD", "register:40f0:8", ["const:7afaf4:8", "const:4:8"]]
- 007afaf4 ["CALLIND", null, ["register:0:8"]]
+ 007b0518 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007b0518 ["INT_ADD", "register:40f0:8", ["const:7b0518:8", "const:4:8"]]
+ 007b0518 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ce0d76fdd7393c09bd5248cffbf0d25e"></a>

### [`007afb08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afb08.md) → [`007b052c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b052c.md) FUN_007b052c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b0558",
      "incomplete_value": false,
      "site": "007b0558",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afb34",
      "incomplete_value": false,
      "site": "007afb34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a68:8"
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
      "007b0558",
      "DATA",
      [
        "storage",
        "00c7aa68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007afb50",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "007b0558",
      "DATA",
      [
        "storage",
        "00c7ba38",
        null,
        "undefined *"
      ]
    ],
    [
      "007b0574",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007afb1c ["INT_ADD", "register:40f0:8", ["const:7afb1c:8", "const:4:8"]]
- 007afb1c ["CALL", null, ["callee:00c58f30:8"]]
+ 007b0540 ["INT_ADD", "register:40f0:8", ["const:7b0540:8", "const:4:8"]]
+ 007b0540 ["CALL", null, ["callee:00c58f30:8"]]
- 007afb28 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007b054c ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007afb2c ["COPY", "tmp:0:8", ["const:a68:8"]]
- 007afb2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007afb2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007afb2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007b0550 ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 007b0550 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007b0550 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007b0550 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5c2e64747e053b684ecca3921777b6c4"></a>

### [`007afb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afb90.md) → [`007b05b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b05b4.md) FUN_007b05b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b05d0",
      "incomplete_value": false,
      "site": "007b05d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afbac",
      "incomplete_value": false,
      "site": "007afbac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a68:8"
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
      "007b05d0",
      "DATA",
      [
        "storage",
        "00c7aa68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b05d0",
      "DATA",
      [
        "storage",
        "00c7ba38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afba4 ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 007b05c8 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007afba8 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 007afba8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007afba8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007afba8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007b05cc ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 007b05cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007b05cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007b05cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007afbcc ["COPY", "register:0:8", ["register:4048:8"]]
- 007afbcc ["INT_ADD", "register:40f0:8", ["const:7afbcc:8", "const:4:8"]]
- 007afbcc ["CALLIND", null, ["register:0:8"]]
+ 007b05f0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 007b05f0 ["INT_ADD", "register:40f0:8", ["const:7b05f0:8", "const:4:8"]]
+ 007b05f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c9a9cac8d3c22c5e80ba7e23201fd297"></a>

### [`007afcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afcd4.md) → [`007b06f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b06f8.md) FUN_007b06f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 41.18% / 新版 41.18%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007afcec",
      "DATA",
      [
        "storage",
        "00c7aae8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007afcf0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0724"
      ]
    ]
  ],
  "added": [
    [
      "007b0710",
      "DATA",
      [
        "storage",
        "00c7bab8",
        null,
        "undefined *"
      ]
    ],
    [
      "007b0714",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0724"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afcd4 ["COPY", "register:4040:8", ["register:4000:8"]]
- 007afcd8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 007afcd8 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 007afcdc ["COPY", "register:4050:8", ["const:c7a000:8"]]
~~~


<a id="compare-6c881c3a19b0da6aa19c94944c934e85"></a>

### [`007afd18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afd18.md) → [`007b073c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b073c.md) FUN_007b073c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b0754",
      "incomplete_value": false,
      "site": "007b0760",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:ab8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afd30",
      "incomplete_value": false,
      "site": "007afd3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
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
      "007b0760",
      "DATA",
      [
        "storage",
        "00c7aae8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b0760",
      "DATA",
      [
        "storage",
        "00c7bab8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afd2c ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007b0750 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007afd30 ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 007afd30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007afd30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007afd30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007b0754 ["COPY", "tmp:0:8", ["const:ab8:8"]]
+ 007b0754 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007b0754 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007b0754 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007afd60 ["COPY", "register:0:8", ["register:4040:8"]]
- 007afd60 ["INT_ADD", "register:40f0:8", ["const:7afd60:8", "const:4:8"]]
- 007afd60 ["CALLIND", null, ["register:0:8"]]
+ 007b0784 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007b0784 ["INT_ADD", "register:40f0:8", ["const:7b0784:8", "const:4:8"]]
+ 007b0784 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8a1af23f58a91af6be9948e6bbeed369"></a>

### [`007afd74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afd74.md) → [`007b0798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0798.md) FUN_007b0798

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b07c4",
      "incomplete_value": false,
      "site": "007b07c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:ab8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afda0",
      "incomplete_value": false,
      "site": "007afda0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
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
      "007b07c4",
      "DATA",
      [
        "storage",
        "00c7aae8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b07c4",
      "DATA",
      [
        "storage",
        "00c7bab8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afd88 ["INT_ADD", "register:40f0:8", ["const:7afd88:8", "const:4:8"]]
- 007afd88 ["CALL", null, ["callee:00c58f30:8"]]
+ 007b07ac ["INT_ADD", "register:40f0:8", ["const:7b07ac:8", "const:4:8"]]
+ 007b07ac ["CALL", null, ["callee:00c58f30:8"]]
- 007afd94 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007b07b8 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007afd98 ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 007afd98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007afd98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007afd98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007b07bc ["COPY", "tmp:0:8", ["const:ab8:8"]]
+ 007b07bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007b07bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007b07bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-787a197da32ec15567785246c8095ab6"></a>

### [`007afdfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afdfc.md) → [`007b0820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0820.md) FUN_007b0820

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b083c",
      "incomplete_value": false,
      "site": "007b083c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:ab8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afe18",
      "incomplete_value": false,
      "site": "007afe18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
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
      "007b083c",
      "DATA",
      [
        "storage",
        "00c7aae8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007afe38",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "007b083c",
      "DATA",
      [
        "storage",
        "00c7bab8",
        null,
        "undefined *"
      ]
    ],
    [
      "007b085c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007afe10 ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 007b0834 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007afe14 ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 007afe14 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007afe14 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007afe14 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007b0838 ["COPY", "tmp:0:8", ["const:ab8:8"]]
+ 007b0838 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007b0838 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007b0838 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007afe1c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 007afe1c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007b0840 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 007b0840 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-a44030e39ae4a06280efec0e3c27b8ab"></a>

### [`007afef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afef8.md) → [`007b091c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b091c.md) FUN_007b091c

根拠 `relaxed_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007afefc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007aff00",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007aff20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0978"
      ]
    ]
  ],
  "added": [
    [
      "007b0920",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007b0924",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007b0944",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0978"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afef8 ["INT_SUB", "register:8:8", ["register:8:8", "const:30:8"]]
- 007afefc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007afefc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007afefc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 007afefc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 007aff00 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:20:8"]]
- 007aff00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-298e43357b6fbd20a64c758214d489b4"></a>

### [`007aff94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007aff94.md) → [`007b09b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b09b8.md) FUN_007b09b8

根拠 `relaxed_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007adf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007adf74.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`007ae39c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ae/007ae39c.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.51% / 新版 93.51%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007affd4",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:007afff0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007b0ab0",
      "READ",
      [
        "storage",
        "00c706a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b09f8",
      "DATA",
      [
        "storage",
        "00c71660",
        null,
        "pointer"
      ]
    ],
    [
      "007b0a14",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007b0ab0",
      "READ",
      [
        "storage",
        "00c71670",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007affc4 ["INT_ADD", "register:40f0:8", ["const:7affc4:8", "const:4:8"]]
- 007affc4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007b09e8 ["INT_ADD", "register:40f0:8", ["const:7b09e8:8", "const:4:8"]]
+ 007b09e8 ["CALL", null, ["callee:00c58f30:8"]]
- 007affc8 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 007b09ec ["COPY", "register:4040:8", ["const:c71000:8"]]
- 007affcc ["COPY", "tmp:0:8", ["const:690:8"]]
- 007affcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007affcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007affcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8e2979184f4c5a6f89b760b1d999119f"></a>

### [`007b010c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b010c.md) → [`007b0b30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0b30.md) FUN_007b0b30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b0b3c",
      "incomplete_value": false,
      "site": "007b0b48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007b0118",
      "incomplete_value": false,
      "site": "007b0124",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b68:8"
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
      "007b0b48",
      "DATA",
      [
        "storage",
        "00c7ab68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b0b48",
      "DATA",
      [
        "storage",
        "00c7bb38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b0114 ["COPY", "register:4050:8", ["const:c7a000:8"]]
+ 007b0b38 ["COPY", "register:4050:8", ["const:c7b000:8"]]
- 007b0118 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 007b0118 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007b0118 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007b0118 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007b0b3c ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 007b0b3c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007b0b3c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007b0b3c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-e287acbba25c0a66493c01432a62db03"></a>

### [`007b0150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0150.md) → [`007b0b74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0b74.md) FUN_007b0b74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 78.26% / 新版 78.26%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007b0174",
      "DATA",
      [
        "storage",
        "00c7ab68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007b0178",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0bac"
      ]
    ]
  ],
  "added": [
    [
      "007b0b98",
      "DATA",
      [
        "storage",
        "00c7bb38",
        null,
        "undefined *"
      ]
    ],
    [
      "007b0b9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0bac"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b0164 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007b0b88 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007b0168 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 007b0168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007b0168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007b0168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007b016c ["COPY", "tmp:0:8", ["const:10:8"]]
- 007b016c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 007b016c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 007b016c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-9c4a93948480387d30408256269d73f1"></a>

### [`007b01ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b01ac.md) → [`007b0bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0bd0.md) FUN_007b0bd0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007b0be0",
      "incomplete_value": false,
      "site": "007b0be4",
      "value": [
        "leaf",
        "const:40:8"
      ]
    },
    "old": null,
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
      "unmatched:007b01d8",
      "DATA",
      [
        "storage",
        "00c7ab68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007b020c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "007b0bfc",
      "DATA",
      [
        "storage",
        "00c7bb38",
        null,
        "undefined *"
      ]
    ],
    [
      "007b0c30",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007b01c0 ["INT_ADD", "register:40f0:8", ["const:7b01c0:8", "const:4:8"]]
- 007b01c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007b0be4 ["INT_ADD", "register:40f0:8", ["const:7b0be4:8", "const:4:8"]]
+ 007b0be4 ["CALL", null, ["callee:00c58f30:8"]]
- 007b01cc ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007b0bf0 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007b01d0 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 007b01d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007b01d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007b01d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-31908ae88b25015b4f5af25c2699b4b3"></a>

### [`007b0234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0234.md) → [`007b0c58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0c58.md) FUN_007b0c58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 75.86% / 新版 75.86%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "007b0254"
      ],
      [
        "CONDITIONAL_JUMP",
        "007b0c78"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "007b0c78",
      "incomplete_value": true,
      "site": "007b0ca0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007b0254",
      "incomplete_value": true,
      "site": "007b027c",
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
      "unmatched:007b0250",
      "DATA",
      [
        "storage",
        "00c7ab68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007b0254",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0ca0"
      ]
    ],
    [
      "unmatched:007b029c",
      "READ",
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
      "007b0c74",
      "DATA",
      [
        "storage",
        "00c7bb38",
        null,
        "undefined *"
      ]
    ],
    [
      "007b0c78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0ca0"
      ]
    ],
    [
      "007b0cc0",
      "READ",
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
- 007b0248 ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 007b0c6c ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007b024c ["COPY", "tmp:0:8", ["const:b68:8"]]
- 007b024c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007b024c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007b024c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007b0250 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 007b0250 ["COPY", "tmp:1:8", ["register:4008:8"]]
- 007b0250 ["INT_ADD", "register:4008:8", ["register:4008:8", "const:10:8"]]
- 007b0250 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-df4f221c0c49d9ad175202dd50b01081"></a>

### [`007b02e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b02e0.md) → [`007b0d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0d04.md) FUN_007b0d04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007adf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007adf74.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007ae39c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ae/007ae39c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007b02fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0d30"
      ]
    ]
  ],
  "added": [
    [
      "007b0d20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0d30"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b02fc ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
- 007b0300 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 007b0300 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 007b0d24 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 007b0d24 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 007b0308 ["BRANCH", null, ["local:b4:8"]]
+ 007b0d2c ["BRANCH", null, ["local:b5:8"]]
~~~


<a id="compare-14d49b420fbc3f98860c8caa99ec9b95"></a>

### [`007b0378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0378.md) → [`007b0d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0d9c.md) FUN_007b0d9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 52.94% / 新版 52.94%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007b0390",
      "DATA",
      [
        "storage",
        "00c7abe8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007b0394",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0dc8"
      ]
    ]
  ],
  "added": [
    [
      "007b0db4",
      "DATA",
      [
        "storage",
        "00c7bbb8",
        null,
        "undefined *"
      ]
    ],
    [
      "007b0db8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0dc8"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b0378 ["COPY", "register:4040:8", ["register:4000:8"]]
- 007b037c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 007b037c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 007b0380 ["COPY", "register:4050:8", ["const:c7a000:8"]]
~~~


<a id="compare-7e3eb95c2712dfb70fec0bc592002fe0"></a>

### [`007b03bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b03bc.md) → [`007b0de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0de0.md) FUN_007b0de0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 78.26% / 新版 78.26%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007b03e0",
      "DATA",
      [
        "storage",
        "00c7abe8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007b03e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0e18"
      ]
    ]
  ],
  "added": [
    [
      "007b0e04",
      "DATA",
      [
        "storage",
        "00c7bbb8",
        null,
        "undefined *"
      ]
    ],
    [
      "007b0e08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007b0e18"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b03d0 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007b0df4 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007b03d4 ["COPY", "tmp:0:8", ["const:be8:8"]]
- 007b03d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007b03d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007b03d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007b03d8 ["COPY", "tmp:0:8", ["const:10:8"]]
- 007b03d8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 007b03d8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 007b03d8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-21ae25e85dd588ab82194b88ee5500a9"></a>

### [`007b0418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0418.md) → [`007b0e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0e3c.md) FUN_007b0e3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b0e68",
      "incomplete_value": false,
      "site": "007b0e68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007b0444",
      "incomplete_value": false,
      "site": "007b0444",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:be8:8"
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
      "007b0e68",
      "DATA",
      [
        "storage",
        "00c7abe8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b0e68",
      "DATA",
      [
        "storage",
        "00c7bbb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b042c ["INT_ADD", "register:40f0:8", ["const:7b042c:8", "const:4:8"]]
- 007b042c ["CALL", null, ["callee:00c58f30:8"]]
+ 007b0e50 ["INT_ADD", "register:40f0:8", ["const:7b0e50:8", "const:4:8"]]
+ 007b0e50 ["CALL", null, ["callee:00c58f30:8"]]
- 007b0438 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007b0e5c ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007b043c ["COPY", "tmp:0:8", ["const:be8:8"]]
- 007b043c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007b043c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007b043c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007b0e60 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 007b0e60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007b0e60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007b0e60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-47a6a26330f407476727002017c896b1"></a>

### [`007b04a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b04a0.md) → [`007b0ec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0ec4.md) FUN_007b0ec4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007b0ee0",
      "incomplete_value": false,
      "site": "007b0ee0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007b04bc",
      "incomplete_value": false,
      "site": "007b04bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:be8:8"
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
      "007b0ee0",
      "DATA",
      [
        "storage",
        "00c7abe8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b0ee0",
      "DATA",
      [
        "storage",
        "00c7bbb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b04a8 ["COPY", "register:40e8:8", ["register:8:8"]]
- 007b04b4 ["COPY", "register:4048:8", ["const:c7a000:8"]]
+ 007b0ed8 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007b04b8 ["COPY", "tmp:0:8", ["const:be8:8"]]
- 007b04b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007b04b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007b04b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007b0edc ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 007b0edc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007b0edc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007b0edc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ff8fe5fcb01328a6efb227099f01a59e"></a>

### [`007b054c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b054c.md) → [`007b0f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0f70.md) FUN_007b0f70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007adf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007adf74.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007ae39c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ae/007ae39c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007b0588 ["COPY", "register:0:8", ["register:4040:8"]]
- 007b0588 ["INT_ADD", "register:40f0:8", ["const:7b0588:8", "const:4:8"]]
- 007b0588 ["CALLIND", null, ["register:0:8"]]
+ 007b0fac ["COPY", "register:0:8", ["register:4040:8"]]
+ 007b0fac ["INT_ADD", "register:40f0:8", ["const:7b0fac:8", "const:4:8"]]
+ 007b0fac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-64def4e333aaff25773a90894c1b9c08"></a>

### [`007b059c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b059c.md) → [`007b0fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b0/007b0fc0.md) FUN_007b0fc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 87.50% / 新版 87.50%

~~~diff
- 007b05a0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 007b05a0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 007b0fc4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 007b0fc4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 007b05ac ["COPY", "register:0:8", ["register:4008:8"]]
- 007b05ac ["BRANCHIND", null, ["register:0:8"]]
- 007b05b8 ["INT_ADD", "register:40f0:8", ["const:7b05b8:8", "const:4:8"]]
- 007b05b8 ["CALL", null, ["callee:0045a0d4:8"]]
+ 007b0fdc ["INT_ADD", "register:40f0:8", ["const:7b0fdc:8", "const:4:8"]]
+ 007b0fdc ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-15b53b7c47c0543655d9a123938823fb"></a>

### [`007b05e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b05e4.md) → [`007b1008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b1008.md) _INIT_145

根拠 `relaxed_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 79.66% / 新版 79.66%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007b0730",
      "incomplete_value": true,
      "site": "007b0744",
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
            "const:8:8"
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
    "new": null,
    "old": {
      "definition_site": "007b0738",
      "incomplete_value": true,
      "site": "007b0744",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:8:8"
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
    "new": null,
    "old": {
      "definition_site": "007b073c",
      "incomplete_value": true,
      "site": "007b0744",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:8:8"
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
      "unmatched:007b0614",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:007b0620",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:007b063c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007b1038",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "007b1044",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "007b1060",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007b0744 ["INT_ADD", "register:40f0:8", ["const:7b0744:8", "const:4:8"]]
- 007b0744 ["CALL", null, ["callee:0043bb58:8"]]
+ 007b1168 ["INT_ADD", "register:40f0:8", ["const:7b1168:8", "const:4:8"]]
+ 007b1168 ["CALL", null, ["callee:0043bb58:8"]]
- 007b0818 ["INT_ADD", "register:40f0:8", ["const:7b0818:8", "const:4:8"]]
- 007b0818 ["CALL", null, ["callee:00c58ed0:8"]]
+ 007b123c ["INT_ADD", "register:40f0:8", ["const:7b123c:8", "const:4:8"]]
+ 007b123c ["CALL", null, ["callee:00c58ed0:8"]]
- 007b060c ["COPY", "register:4098:8", ["const:ca8000:8"]]
+ 007b1030 ["COPY", "register:4098:8", ["const:ca9000:8"]]
~~~


<a id="compare-7150db6d53380a2e759ef83a22da180d"></a>

### [`007b09c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b09c4.md) → [`007b13f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b13f8.md) FUN_007b13f8

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007ab428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab428.md) · 呼出先 1件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md)
- 新版 呼出元 1件 [`007ab828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ab/007ab828.md) · 呼出先 1件 [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007b09dc ["INT_ADD", "register:40f0:8", ["const:7b09dc:8", "const:4:8"]]
- 007b09dc ["CALL", null, ["callee:00480658:8"]]
+ 007b1410 ["INT_ADD", "register:40f0:8", ["const:7b1410:8", "const:4:8"]]
+ 007b1410 ["CALL", null, ["callee:00480658:8"]]
- 007b09ec ["INT_ADD", "register:40f0:8", ["const:7b09ec:8", "const:4:8"]]
- 007b09ec ["CALL", null, ["callee:00480658:8"]]
+ 007b1420 ["INT_ADD", "register:40f0:8", ["const:7b1420:8", "const:4:8"]]
+ 007b1420 ["CALL", null, ["callee:00480658:8"]]
- 007b09fc ["INT_ADD", "register:40f0:8", ["const:7b09fc:8", "const:4:8"]]
- 007b09fc ["CALL", null, ["callee:00480658:8"]]
+ 007b1430 ["INT_ADD", "register:40f0:8", ["const:7b1430:8", "const:4:8"]]
+ 007b1430 ["CALL", null, ["callee:00480658:8"]]
~~~


<a id="compare-2b56c529315d157cb3be1f3bbb121229"></a>

### [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) → [`007b19d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b19d4.md) FUN_007b19d4

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 51件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md)
- 新版 呼出元 1件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) · 呼出先 51件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00447a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00447/00447a54.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046e898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046e898.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 10.93% / 新版 10.93%

優先判定に残った影響 `call_argument_candidate` 32件, `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 954件, `unresolved_call_alignment` 1275件, `unresolved_store_alignment` 1631件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007b6d90",
      "incomplete_value": true,
      "site": "007b6d90",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ca000:8"
              ],
              [
                "leaf",
                "const:b1c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007b5e2c",
      "incomplete_value": true,
      "site": "007b5e2c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ca000:8"
              ],
              [
                "leaf",
                "const:acc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 773,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007b1a6c",
      "incomplete_value": true,
      "site": "007b1a90",
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
            "const:a50:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007b1a78",
      "incomplete_value": false,
      "site": "007b1a90",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "leaf",
            "const:0:4"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:007b0ab4",
      "DATA",
      [
        "storage",
        "00c7ac68",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:007b0b20",
      "WRITE",
      [
        "storage",
        "Stack[-0x298]",
        null,
        null
      ]
    ],
    [
      "007b1ab4",
      "DATA",
      [
        "storage",
        "0039aab0",
        null,
        "qword"
      ]
    ]
  ],
  "added": [
    [
      "007b1a18",
      "DATA",
      [
        "storage",
        "00c7bc38",
        null,
        "pointer"
      ]
    ],
    [
      "007b1a84",
      "WRITE",
      [
        "storage",
        "Stack[-0x298]",
        null,
        null
      ]
    ],
    [
      "007b1ab4",
      "DATA",
      [
        "storage",
        "0039aab0",
        "fde_0039aab0",
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b0b2c ["INT_ADD", "register:40f0:8", ["const:7b0b2c:8", "const:4:8"]]
- 007b0b2c ["CALL", null, ["callee:00c59130:8"]]
+ 007b1a90 ["INT_ADD", "register:40f0:8", ["const:7b1a90:8", "const:4:8"]]
+ 007b1a90 ["CALL", null, ["callee:00c59130:8"]]
- 007b0d00 ["INT_ADD", "register:40f0:8", ["const:7b0d00:8", "const:4:8"]]
- 007b0d00 ["CALL", null, ["callee:00c54d90:8"]]
+ 007b2454 ["INT_ADD", "register:40f0:8", ["const:7b2454:8", "const:4:8"]]
+ 007b2454 ["CALL", null, ["callee:00c54d90:8"]]
- 007b1a90 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c0:8"]]
- 007b1a90 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 007b1a90 ["COPY", "register:5010:8", ["const:0:8"]]
- 007b1a90 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-a8566ddb0a1d19fd91183e68d766609a"></a>

### [`007bba64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bba64.md) → [`007bc9c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bc9c8.md) FUN_007bc9c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "007bca98",
      "incomplete_value": true,
      "site": "007bcaac",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:007bbab4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007bca98"
      ]
    ]
  ],
  "added": [
    [
      "007bca18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007bca98"
      ]
    ]
  ]
}
~~~


~~~diff
- 007bba90 ["BRANCH", null, ["local:b8:8"]]
+ 007bc9f4 ["BRANCH", null, ["local:b7:8"]]
- 007bba9c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 007bba9c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 007bca00 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 007bca00 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 007bbab4 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 007bbab4 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
~~~


<a id="compare-20c6d45cc262fc6a3371af27d9773bd9"></a>

### [`007bbb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbb4c.md) → [`007bcab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcab0.md) FUN_007bcab0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) [`00a52ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52ea0.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`007f0cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0cf0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`007b19d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b19d4.md) [`00a53e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53e94.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`007f1c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f1c54.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.36% / 新版 98.36%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007bbc20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007bcbe4"
      ]
    ]
  ],
  "added": [
    [
      "007bcb84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007bcbe4"
      ]
    ]
  ]
}
~~~


~~~diff
- 007bbbac ["INT_ADD", "register:40f0:8", ["const:7bbbac:8", "const:4:8"]]
- 007bbbac ["CALL", null, ["callee:0043be80:8"]]
+ 007bcb10 ["INT_ADD", "register:40f0:8", ["const:7bcb10:8", "const:4:8"]]
+ 007bcb10 ["CALL", null, ["callee:0043be80:8"]]
- 007bbbbc ["INT_ADD", "register:40f0:8", ["const:7bbbbc:8", "const:4:8"]]
- 007bbbbc ["CALL", null, ["callee:0043be80:8"]]
+ 007bcb20 ["INT_ADD", "register:40f0:8", ["const:7bcb20:8", "const:4:8"]]
+ 007bcb20 ["CALL", null, ["callee:0043be80:8"]]
- 007bbbf0 ["INT_ADD", "register:40f0:8", ["const:7bbbf0:8", "const:4:8"]]
- 007bbbf0 ["CALL", null, ["callee:007f1c54:8"]]
+ 007bcb54 ["INT_ADD", "register:40f0:8", ["const:7bcb54:8", "const:4:8"]]
+ 007bcb54 ["CALL", null, ["callee:007f1c54:8"]]
~~~


<a id="compare-18cc7466e00b35b7575f670c6cafb91f"></a>

### [`007bbda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbda0.md) → [`007bcd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcd04.md) FUN_007bcd04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 13件 [`006bedb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bedb4.md) [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007cb638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 7件 [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00802be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802be4.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md) [`0080603c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/0080603c.md)
- 新版 呼出元 13件 [`006bf164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bf/006bf164.md) [`007b19d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b19d4.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007cc59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cc/007cc59c.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 7件 [`00803674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803674.md) [`00803b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b48.md) [`00803c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803c64.md) [`00803e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803e9c.md) [`00806fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00806/00806fa0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.11% / 新版 98.11%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007bcd30",
      "value": [
        "leaf",
        "ram:803b48:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007bbdcc",
      "value": [
        "leaf",
        "ram:802be4:8"
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
      "007bcd30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00802be4"
      ]
    ]
  ],
  "added": [
    [
      "007bcd30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00803b48"
      ]
    ]
  ]
}
~~~


~~~diff
- 007bbdcc ["INT_ADD", "register:40f0:8", ["const:7bbdcc:8", "const:4:8"]]
- 007bbdcc ["CALL", null, ["ram:802be4:8"]]
+ 007bcd30 ["INT_ADD", "register:40f0:8", ["const:7bcd30:8", "const:4:8"]]
+ 007bcd30 ["CALL", null, ["ram:803b48:8"]]
- 007bbdb8 ["INT_ADD", "register:40f0:8", ["const:7bbdb8:8", "const:4:8"]]
- 007bbdb8 ["CALL", null, ["callee:00803674:8"]]
+ 007bcd1c ["INT_ADD", "register:40f0:8", ["const:7bcd1c:8", "const:4:8"]]
+ 007bcd1c ["CALL", null, ["callee:00803674:8"]]
- 007bbddc ["INT_ADD", "register:40f0:8", ["const:7bbddc:8", "const:4:8"]]
- 007bbddc ["CALL", null, ["callee:00803e9c:8"]]
+ 007bcd40 ["INT_ADD", "register:40f0:8", ["const:7bcd40:8", "const:4:8"]]
+ 007bcd40 ["CALL", null, ["callee:00803e9c:8"]]
~~~


<a id="compare-9a9d2187470db64453ec499117a24aee"></a>

### [`007bbe74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbe74.md) → [`007bcdd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcdd8.md) FUN_007bcdd8

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) · 呼出先 30件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md)
- 新版 呼出元 1件 [`007b19d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b19d4.md) · 呼出先 30件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.85% / 新版 67.85%

優先判定に残った影響 `call_argument_candidate` 7件, `store_value` 9件, `unresolved_branch_alignment` 38件, `unresolved_call_alignment` 20件, `unresolved_store_alignment` 226件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007bdc44",
      "incomplete_value": true,
      "site": "007bdc5c",
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
                "const:2bf000:8"
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
      "definition_site": "007bcce0",
      "incomplete_value": true,
      "site": "007bccf8",
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
                "const:2bf000:8"
              ],
              [
                "leaf",
                "const:c2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 316,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007bdd90",
      "incomplete_value": true,
      "site": "007bdda4",
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
                "const:af9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007bce2c",
      "incomplete_value": true,
      "site": "007bce40",
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
                "const:a1b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 330,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007bdda8",
      "incomplete_value": true,
      "site": "007bdda8",
      "value": [
        "LOAD",
        "8",
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
                "const:e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007bce44",
      "incomplete_value": true,
      "site": "007bce44",
      "value": [
        "LOAD",
        "8",
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
                "const:e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 331,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007bbf40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007bceb8"
      ]
    ],
    [
      "unmatched:007bbf70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007bbf90"
      ]
    ],
    [
      "unmatched:007bbf80",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007bbfb4"
      ]
    ]
  ],
  "added": [
    [
      "007bcea4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007bceb8"
      ]
    ],
    [
      "007bced4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007bcef4"
      ]
    ],
    [
      "007bcee4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "007bcf18"
      ]
    ]
  ]
}
~~~


~~~diff
- 007bbee0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 007bbee0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 007bbee0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 007bbee0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 007bce44 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 007bce44 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 007bce44 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 007bce44 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 007bbf04 ["INT_ADD", "register:40f0:8", ["const:7bbf04:8", "const:4:8"]]
- 007bbf04 ["CALL", null, ["callee:0085d150:8"]]
+ 007bce68 ["INT_ADD", "register:40f0:8", ["const:7bce68:8", "const:4:8"]]
+ 007bce68 ["CALL", null, ["callee:0085d150:8"]]
- 007bc09c ["INT_ADD", "register:40f0:8", ["const:7bc09c:8", "const:4:8"]]
- 007bc09c ["CALL", null, ["callee:00803674:8"]]
+ 007bd000 ["INT_ADD", "register:40f0:8", ["const:7bd000:8", "const:4:8"]]
+ 007bd000 ["CALL", null, ["callee:00803674:8"]]
~~~


<a id="compare-dc70a9cf1de1ef67b98eb42a68f62c9c"></a>

### [`007c7840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7840.md) → [`007c87a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c8/007c87a4.md) FUN_007c87a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 2件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`0094826c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00948/0094826c.md) · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007c78c0",
      "incomplete_value": true,
      "site": "007c78cc",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007c78c4",
      "incomplete_value": true,
      "site": "007c78cc",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007c78c8",
      "incomplete_value": true,
      "site": "007c78cc",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:007c7840",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007c7844",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007c7848",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007c87a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007c87a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007c87ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007c78cc ["INT_ADD", "register:40f0:8", ["const:7c78cc:8", "const:4:8"]]
- 007c78cc ["CALL", null, ["callee:00c58fe0:8"]]
+ 007c8830 ["INT_ADD", "register:40f0:8", ["const:7c8830:8", "const:4:8"]]
+ 007c8830 ["CALL", null, ["callee:00c58fe0:8"]]
- 007c7840 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007c7840 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007c7840 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 007c7840 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007c7844 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 007c7844 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 007c7844 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 007c7844 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-64371bc7b9e28c811499da4611a4d82b"></a>

### [`007c7908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7908.md) → [`007c886c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c8/007c886c.md) FUN_007c886c

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) [`00ab3214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab3/00ab3214.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) [`00ab4208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ab4/00ab4208.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.00% / 新版 98.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007c7958",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007c891c"
      ]
    ]
  ],
  "added": [
    [
      "007c88bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007c891c"
      ]
    ]
  ]
}
~~~


~~~diff
- 007c7934 ["BRANCH", null, ["local:b8:8"]]
+ 007c8898 ["BRANCH", null, ["local:b7:8"]]
- 007c7940 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 007c7940 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 007c88a4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 007c88a4 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 007c7958 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 007c7958 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
~~~


<a id="compare-090847b67983791f5c2ae0f80f03597e"></a>

### [`007c79d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c79d0.md) → [`007c8934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c8/007c8934.md) FUN_007c8934

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047b54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047b54c.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00800684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800684.md) [`0080502c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00805/0080502c.md)
- 新版 呼出元 2件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0047b86c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b86c.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`008015e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008015e8.md) [`00805f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00805/00805f90.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007c7a40",
      "incomplete_value": false,
      "site": "007c7a48",
      "value": [
        "leaf",
        "const:ffffffe6:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007c8b04",
      "incomplete_value": true,
      "site": "007c8b0c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40a0:4"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007c8b08",
      "incomplete_value": false,
      "site": "007c8b0c",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "old": null,
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
      "unmatched:007c7a08",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "007c8984",
      "DATA",
      [
        "storage",
        "0038e0f0",
        "fde_0038e0f0",
        "dword"
      ]
    ],
    [
      "unmatched:007c7a74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007c8a3c"
      ]
    ]
  ],
  "added": [
    [
      "007c896c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "007c8984",
      "DATA",
      [
        "storage",
        "0038e0f0",
        null,
        "dword"
      ]
    ],
    [
      "007c89d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007c8a3c"
      ]
    ]
  ]
}
~~~


~~~diff
- 007c7a48 ["INT_ADD", "register:40f0:8", ["const:7c7a48:8", "const:4:8"]]
- 007c7a48 ["CALL", null, ["callee:008066a8:8"]]
+ 007c89ac ["INT_ADD", "register:40f0:8", ["const:7c89ac:8", "const:4:8"]]
+ 007c89ac ["CALL", null, ["callee:008066a8:8"]]
- 007c7ba8 ["INT_ADD", "register:40f0:8", ["const:7c7ba8:8", "const:4:8"]]
- 007c7ba8 ["CALL", null, ["callee:00805f90:8"]]
+ 007c8b0c ["INT_ADD", "register:40f0:8", ["const:7c8b0c:8", "const:4:8"]]
+ 007c8b0c ["CALL", null, ["callee:00805f90:8"]]
- 007c79ec ["COPY", "tmp:0:8", ["const:10:8"]]
- 007c79ec ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 007c79ec ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 007c79ec ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-6b75ffe6ee7bfb45aae8bc48136004af"></a>

### [`007c7bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7bd0.md) → [`007c8b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c8/007c8b34.md) FUN_007c8b34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 0件 
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-5d97b2014d02c78c0470904d3b6069a7"></a>

### [`007c7c18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7c18.md) → [`007c8b7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c8/007c8b7c.md) FUN_007c8b7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 15件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`004881b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/004881b8.md)
- 新版 呼出元 2件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 15件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004884d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004884d8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.12% / 新版 77.12%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 18件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007c8d60",
      "incomplete_value": true,
      "site": "007c8d64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "007c7dfc",
      "incomplete_value": true,
      "site": "007c7e00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007c7c78",
      "incomplete_value": true,
      "site": "007c7c88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:20:8"
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
    "new": null,
    "old": {
      "definition_site": "007c7ce0",
      "incomplete_value": true,
      "site": "007c7ce4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:20:8"
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
      "unmatched:007c7c1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007c7c20",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007c7c24",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007c8b80",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007c8b84",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007c8b88",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007c7c88 ["INT_ADD", "register:40f0:8", ["const:7c7c88:8", "const:4:8"]]
- 007c7c88 ["CALL", null, ["callee:00b1217c:8"]]
+ 007c8bec ["INT_ADD", "register:40f0:8", ["const:7c8bec:8", "const:4:8"]]
+ 007c8bec ["CALL", null, ["callee:00b1217c:8"]]
- 007c7ce4 ["INT_ADD", "register:40f0:8", ["const:7c7ce4:8", "const:4:8"]]
- 007c7ce4 ["CALL", null, ["callee:00487c8c:8"]]
+ 007c8c48 ["INT_ADD", "register:40f0:8", ["const:7c8c48:8", "const:4:8"]]
+ 007c8c48 ["CALL", null, ["callee:00487c8c:8"]]
- 007c7c18 ["INT_SUB", "register:8:8", ["register:8:8", "const:1d0:8"]]
~~~


<a id="compare-aacb7f88d7f39ae9e738388ee009f6a8"></a>

### [`007c7f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7f48.md) → [`007c8eac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c8/007c8eac.md) FUN_007c8eac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 8件 [`005e4718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4718.md) [`005e4720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4720.md) [`005e48ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e48ec.md) [`005e4a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4a74.md) [`005e4ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4ad4.md)
- 新版 呼出元 2件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007f0c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0c64.md) · 呼出先 8件 [`005e4ac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4ac8.md) [`005e4ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4ad0.md) [`005e4c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4c9c.md) [`005e4e24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4e24.md) [`005e4e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4e84.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 97.18% / 新版 97.18%

アドレスに依存する影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007c7f54",
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
      "007c8eb8",
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
- 007c7f54 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 007c7f54 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 007c7f54 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 007c7f54 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 007c7f58 ["COPY", "register:40e8:8", ["register:8:8"]]
- 007c7f60 ["INT_ADD", "register:40f0:8", ["const:7c7f60:8", "const:4:8"]]
- 007c7f60 ["CALL", null, ["callee:005e4e24:8"]]
+ 007c8ec4 ["INT_ADD", "register:40f0:8", ["const:7c8ec4:8", "const:4:8"]]
+ 007c8ec4 ["CALL", null, ["callee:005e4e24:8"]]
~~~


<a id="compare-402713282f182ce73622965eed429c24"></a>

### [`007c8064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c8/007c8064.md) → [`007c8fc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c8/007c8fc8.md) FUN_007c8fc8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 24件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0071d08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d08c.md)
- 新版 呼出元 2件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 24件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0071d43c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071d/0071d43c.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.54% / 新版 72.54%

優先判定に残った影響 `call_argument_candidate` 15件, `store_condition` 8件, `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 26件, `unresolved_store_alignment` 34件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007c901c",
      "incomplete_value": true,
      "site": "007c901c",
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
      "definition_site": "007c80b8",
      "incomplete_value": true,
      "site": "007c80b8",
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
      "definition_site": "007c9024",
      "incomplete_value": false,
      "site": "007c9034",
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
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007c902c",
      "incomplete_value": false,
      "site": "007c9034",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:a30:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:007c8078",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007c9010",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:007c80c0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007c8fdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007c9010",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "007c9024",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007c80b8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 007c80b8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 007c901c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 007c901c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 007c80d0 ["INT_ADD", "register:40f0:8", ["const:7c80d0:8", "const:4:8"]]
- 007c80d0 ["CALL", null, ["callee:00c596b0:8"]]
+ 007c9034 ["INT_ADD", "register:40f0:8", ["const:7c9034:8", "const:4:8"]]
+ 007c9034 ["CALL", null, ["callee:00c596b0:8"]]
- 007c8134 ["INT_ADD", "register:40f0:8", ["const:7c8134:8", "const:4:8"]]
- 007c8134 ["CALL", null, ["callee:00c58f20:8"]]
+ 007c9098 ["INT_ADD", "register:40f0:8", ["const:7c9098:8", "const:4:8"]]
+ 007c9098 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-c5e1cb67afaab5e84076fdbc2b66dbac"></a>

### [`007c8d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c8/007c8d48.md) → [`007c9cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c9/007c9cac.md) FUN_007c9cac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 24件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab80.md) [`0048ab88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab88.md)
- 新版 呼出元 2件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 24件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048aea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aea0.md) [`0048aea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aea8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 65.71% / 新版 65.71%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 10件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007c9d28",
      "incomplete_value": true,
      "site": "007c9d30",
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
              "INT_ADD"
            ]
          ]
        ]
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
      "definition_site": "007c9d90",
      "incomplete_value": true,
      "site": "007c9da0",
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
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 7,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007c9dac",
      "incomplete_value": false,
      "site": "007c9dcc",
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
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007c8e48",
      "incomplete_value": false,
      "site": "007c8e68",
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
            "const:0:8"
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
      "unmatched:007c8d74",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "007c9d08",
      "DATA",
      [
        "storage",
        "0039badc",
        null,
        "qword"
      ]
    ],
    [
      "007c9d28",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[59]"
      ]
    ]
  ],
  "added": [
    [
      "007c9cd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "007c9d08",
      "DATA",
      [
        "storage",
        "0039badc",
        "fde_0039badc",
        "dword"
      ]
    ],
    [
      "007c9d28",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[11]"
      ]
    ]
  ]
}
~~~


~~~diff
- 007c8dcc ["INT_ADD", "register:40f0:8", ["const:7c8dcc:8", "const:4:8"]]
- 007c8dcc ["CALL", null, ["callee:00801188:8"]]
+ 007c9d30 ["INT_ADD", "register:40f0:8", ["const:7c9d30:8", "const:4:8"]]
+ 007c9d30 ["CALL", null, ["callee:00801188:8"]]
- 007c8e3c ["INT_ADD", "register:40f0:8", ["const:7c8e3c:8", "const:4:8"]]
- 007c8e3c ["CALL", null, ["callee:00448254:8"]]
+ 007c9da0 ["INT_ADD", "register:40f0:8", ["const:7c9da0:8", "const:4:8"]]
+ 007c9da0 ["CALL", null, ["callee:00448254:8"]]
- 007c8e68 ["INT_ADD", "register:40f0:8", ["const:7c8e68:8", "const:4:8"]]
- 007c8e68 ["CALL", null, ["callee:0047ec3c:8"]]
+ 007c9dcc ["INT_ADD", "register:40f0:8", ["const:7c9dcc:8", "const:4:8"]]
+ 007c9dcc ["CALL", null, ["callee:0047ec3c:8"]]
~~~


<a id="compare-62405cc1886f2aad557b4d6bcae3f4fd"></a>

### [`007c9174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c9/007c9174.md) → [`007ca0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ca/007ca0d8.md) FUN_007ca0d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 22件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`007ff1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff1ec.md)
- 新版 呼出元 1件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) · 呼出先 22件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00800150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800150.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.87% / 新版 91.87%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007c91c4",
      "incomplete_value": false,
      "site": "007c91d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:f28:8"
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
    "new": null,
    "old": {
      "definition_site": "007c91cc",
      "incomplete_value": false,
      "site": "007c91d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c71000:8"
          ],
          [
            "leaf",
            "const:a60:8"
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
    "new": null,
    "old": {
      "definition_site": "007c91d0",
      "incomplete_value": false,
      "site": "007c91d4",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:007c91a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:007c91b0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:007c91bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007ca144"
      ]
    ]
  ],
  "added": [
    [
      "007ca10c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "007ca114",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "007ca120",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007ca144"
      ]
    ]
  ]
}
~~~


~~~diff
- 007c91d4 ["INT_ADD", "register:40f0:8", ["const:7c91d4:8", "const:4:8"]]
- 007c91d4 ["CALL", null, ["callee:00c596b0:8"]]
+ 007ca138 ["INT_ADD", "register:40f0:8", ["const:7ca138:8", "const:4:8"]]
+ 007ca138 ["CALL", null, ["callee:00c596b0:8"]]
- 007c941c ["INT_ADD", "register:40f0:8", ["const:7c941c:8", "const:4:8"]]
- 007c941c ["CALL", null, ["callee:00a68894:8"]]
+ 007ca380 ["INT_ADD", "register:40f0:8", ["const:7ca380:8", "const:4:8"]]
+ 007ca380 ["CALL", null, ["callee:00a68894:8"]]
- 007c9434 ["INT_ADD", "register:40f0:8", ["const:7c9434:8", "const:4:8"]]
- 007c9434 ["CALL", null, ["callee:00a844b0:8"]]
+ 007ca398 ["INT_ADD", "register:40f0:8", ["const:7ca398:8", "const:4:8"]]
+ 007ca398 ["CALL", null, ["callee:00a844b0:8"]]
~~~


<a id="compare-1c9e41776f19b16616824f7bcf99a82c"></a>

### [`007c97a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c9/007c97a4.md) → [`007ca708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ca/007ca708.md) FUN_007ca708

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 30件 [`0046da9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da9c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 2件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007f0c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0c64.md) · 呼出先 30件 [`0046ddbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046ddbc.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 75.29% / 新版 75.29%

優先判定に残った影響 `call_argument_candidate` 18件, `store_value` 2件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 14件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 20件

アドレスに依存する影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007cabb0",
      "incomplete_value": true,
      "site": "007cabb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "007c9c4c",
      "incomplete_value": true,
      "site": "007c9c50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007cae48",
      "incomplete_value": true,
      "site": "007cae4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "007c9ee4",
      "incomplete_value": true,
      "site": "007c9ee8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 53,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007cae8c",
      "incomplete_value": true,
      "site": "007cae8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "007c9f28",
      "incomplete_value": true,
      "site": "007c9f28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 54,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007ca758",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:007c9800",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:007c9808",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007ca758",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "007ca764",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007ca76c",
      "PARAM",
      [
        "storage",
        "00c72a30",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007c97f8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 007c97f8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007ca75c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 007ca75c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007c9810 ["INT_ADD", "register:40f0:8", ["const:7c9810:8", "const:4:8"]]
- 007c9810 ["CALL", null, ["callee:00c596b0:8"]]
+ 007ca774 ["INT_ADD", "register:40f0:8", ["const:7ca774:8", "const:4:8"]]
+ 007ca774 ["CALL", null, ["callee:00c596b0:8"]]
- 007c986c ["INT_ADD", "register:40f0:8", ["const:7c986c:8", "const:4:8"]]
- 007c986c ["CALL", null, ["callee:0048a2ac:8"]]
+ 007ca7d0 ["INT_ADD", "register:40f0:8", ["const:7ca7d0:8", "const:4:8"]]
+ 007ca7d0 ["CALL", null, ["callee:0048a2ac:8"]]
~~~


<a id="compare-43596cbeb8bd9693c79aea27264b4663"></a>

### [`007ca0c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007ca0c4.md) → [`007cb028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cb/007cb028.md) FUN_007cb028

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 22件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md)
- 新版 呼出元 2件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007f0c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0c64.md) · 呼出先 22件 [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 70.23% / 新版 70.23%

優先判定に残った影響 `call_argument_candidate` 19件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 8件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 18件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007cb06c",
      "incomplete_value": true,
      "site": "007cb06c",
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
      "definition_site": "007ca108",
      "incomplete_value": true,
      "site": "007ca108",
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007cb074",
      "incomplete_value": false,
      "site": "007cb084",
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
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ca110",
      "incomplete_value": false,
      "site": "007ca120",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:f28:8"
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
      "definition_site": "007cb07c",
      "incomplete_value": false,
      "site": "007cb084",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:a30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ca118",
      "incomplete_value": false,
      "site": "007ca120",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c71000:8"
          ],
          [
            "leaf",
            "const:a60:8"
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
      "unmatched:007ca0f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "007cb068",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007cb074",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007cb058",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "007cb068",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "007cb074",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ca108 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 007ca108 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007cb06c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 007cb06c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007ca120 ["INT_ADD", "register:40f0:8", ["const:7ca120:8", "const:4:8"]]
- 007ca120 ["CALL", null, ["callee:00c596b0:8"]]
+ 007cb084 ["INT_ADD", "register:40f0:8", ["const:7cb084:8", "const:4:8"]]
+ 007cb084 ["CALL", null, ["callee:00c596b0:8"]]
- 007ca1f8 ["INT_ADD", "register:40f0:8", ["const:7ca1f8:8", "const:4:8"]]
- 007ca1f8 ["CALL", null, ["callee:0047ec3c:8"]]
+ 007cb15c ["INT_ADD", "register:40f0:8", ["const:7cb15c:8", "const:4:8"]]
+ 007cb15c ["CALL", null, ["callee:0047ec3c:8"]]
~~~


<a id="compare-7cedd21e72033290e0ccad1eb1a7fb3f"></a>

### [`007ca580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007ca580.md) → [`007cb4e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cb/007cb4e4.md) FUN_007cb4e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 20件 [`0046da9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da9c.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`007ff9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff9b4.md) [`007ff9b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff9b8.md)
- 新版 呼出元 2件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007f0c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0c64.md) · 呼出先 20件 [`0046ddbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046ddbc.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00800918`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800918.md) [`0080091c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/0080091c.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.21% / 新版 85.21%

優先判定に残った影響 `call_argument_candidate` 13件, `store_condition` 1件, `store_value` 2件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 5件

アドレスに依存する影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007cb934",
      "incomplete_value": true,
      "site": "007cb938",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "007ca9d0",
      "incomplete_value": true,
      "site": "007ca9d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "007cb978",
      "incomplete_value": true,
      "site": "007cb978",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "007caa14",
      "incomplete_value": true,
      "site": "007caa14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 41,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007cb52c",
      "incomplete_value": true,
      "site": "007cb52c",
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
      "definition_site": "007ca5c8",
      "incomplete_value": true,
      "site": "007ca5c8",
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
      "007cb528",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007cb534",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007cb53c",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007cb528",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "007cb534",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007cb53c",
      "PARAM",
      [
        "storage",
        "00c72a30",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ca5e0 ["INT_ADD", "register:40f0:8", ["const:7ca5e0:8", "const:4:8"]]
- 007ca5e0 ["CALL", null, ["callee:00c596b0:8"]]
+ 007cb544 ["INT_ADD", "register:40f0:8", ["const:7cb544:8", "const:4:8"]]
+ 007cb544 ["CALL", null, ["callee:00c596b0:8"]]
- 007ca6f8 ["INT_ADD", "register:40f0:8", ["const:7ca6f8:8", "const:4:8"]]
- 007ca6f8 ["CALL", null, ["callee:00a47944:8"]]
+ 007cb65c ["INT_ADD", "register:40f0:8", ["const:7cb65c:8", "const:4:8"]]
+ 007cb65c ["CALL", null, ["callee:00a47944:8"]]
- 007ca7b8 ["INT_ADD", "register:40f0:8", ["const:7ca7b8:8", "const:4:8"]]
- 007ca7b8 ["CALL", null, ["callee:0048a2ac:8"]]
+ 007cb71c ["INT_ADD", "register:40f0:8", ["const:7cb71c:8", "const:4:8"]]
+ 007cb71c ["CALL", null, ["callee:0048a2ac:8"]]
~~~


<a id="compare-665c5ac2127575507d9d2a047d73ae4e"></a>

### [`007cab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007cab20.md) → [`007cba84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cb/007cba84.md) FUN_007cba84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 30件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00727d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727d74.md)
- 新版 呼出元 2件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007f0c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0c64.md) · 呼出先 30件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00728124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00728/00728124.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.28% / 新版 78.28%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 36件, `store_condition` 1件, `store_value` 2件, `unresolved_branch_alignment` 17件, `unresolved_call_alignment` 17件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007cbce4",
      "incomplete_value": false,
      "site": "007cbce8",
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
                "const:c8c000:8"
              ],
              [
                "leaf",
                "const:840:8"
              ]
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
      "definition_site": "007cad80",
      "incomplete_value": false,
      "site": "007cad84",
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
                "const:c8b000:8"
              ],
              [
                "leaf",
                "const:870:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 31,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007cc0c8",
      "incomplete_value": false,
      "site": "007cc0cc",
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
                "const:c8c000:8"
              ],
              [
                "leaf",
                "const:840:8"
              ]
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
      "definition_site": "007cb164",
      "incomplete_value": false,
      "site": "007cb168",
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
                "const:c8b000:8"
              ],
              [
                "leaf",
                "const:870:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 60,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007cbaf0",
      "incomplete_value": true,
      "site": "007cbaf0",
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
      "definition_site": "007cab8c",
      "incomplete_value": true,
      "site": "007cab8c",
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
      "unmatched:007cab74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007cbae4"
      ]
    ],
    [
      "007cbaec",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007cbaf8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007cbad8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007cbae4"
      ]
    ],
    [
      "007cbaec",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "007cbaf8",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007cab8c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 007cab8c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 007cbaf0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 007cbaf0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 007caba4 ["INT_ADD", "register:40f0:8", ["const:7caba4:8", "const:4:8"]]
- 007caba4 ["CALL", null, ["callee:00c596b0:8"]]
+ 007cbb08 ["INT_ADD", "register:40f0:8", ["const:7cbb08:8", "const:4:8"]]
+ 007cbb08 ["CALL", null, ["callee:00c596b0:8"]]
- 007cac00 ["INT_ADD", "register:40f0:8", ["const:7cac00:8", "const:4:8"]]
- 007cac00 ["CALL", null, ["callee:0048a2ac:8"]]
+ 007cbb64 ["INT_ADD", "register:40f0:8", ["const:7cbb64:8", "const:4:8"]]
+ 007cbb64 ["CALL", null, ["callee:0048a2ac:8"]]
~~~


<a id="compare-785854fd8edfd522beb298f3f295dd4e"></a>

### [`007cb5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb5e0.md) → [`007cc544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cc/007cc544.md) FUN_007cc544

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007cb600 ["COPY", "register:0:8", ["register:4040:8"]]
- 007cb600 ["INT_ADD", "register:40f0:8", ["const:7cb600:8", "const:4:8"]]
- 007cb600 ["CALLIND", null, ["register:0:8"]]
+ 007cc564 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007cc564 ["INT_ADD", "register:40f0:8", ["const:7cc564:8", "const:4:8"]]
+ 007cc564 ["CALLIND", null, ["register:0:8"]]
- 007cb610 ["INT_ADD", "register:40f0:8", ["const:7cb610:8", "const:4:8"]]
- 007cb610 ["CALL", null, ["callee:00c58f50:8"]]
+ 007cc574 ["INT_ADD", "register:40f0:8", ["const:7cc574:8", "const:4:8"]]
+ 007cc574 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-83e723f94a83138387c0311f754b2780"></a>

### [`007cb638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) → [`007cc59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cc/007cc59c.md) FUN_007cc59c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`009fb4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fb/009fb4a0.md) · 呼出先 67件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md)
- 新版 呼出元 3件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`009fc44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fc/009fc44c.md) · 呼出先 67件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cde4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cde4.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.43% / 新版 69.43%

優先判定に残った影響 `call_argument_candidate` 37件, `call_target` 11件, `store_condition` 1件, `store_value` 1件, `unresolved_branch_alignment` 29件, `unresolved_call_alignment` 35件, `unresolved_store_alignment` 88件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007cd118",
      "incomplete_value": true,
      "site": "007cd118",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "definition_site": "007cc1b4",
      "incomplete_value": true,
      "site": "007cc1b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 106,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007cc614",
      "incomplete_value": false,
      "site": "007cc61c",
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
            "const:50e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007cb6b0",
      "incomplete_value": false,
      "site": "007cb6b8",
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
            "const:4ce:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007cc680",
      "value": [
        "leaf",
        "ram:7f0640:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007cb71c",
      "value": [
        "leaf",
        "ram:7ef6dc:8"
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
      "unmatched:007cb690",
      "READ",
      [
        "storage",
        "002b77ed",
        null,
        "string"
      ]
    ],
    [
      "unmatched:007cb694",
      "WRITE",
      [
        "storage",
        "Stack[-0x148]",
        null,
        null
      ]
    ],
    [
      "unmatched:007cb698",
      "WRITE",
      [
        "storage",
        "Stack[-0x137]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007cc5f4",
      "READ",
      [
        "storage",
        "002b78bc",
        null,
        "string"
      ]
    ],
    [
      "007cc5f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x148]",
        null,
        null
      ]
    ],
    [
      "007cc5fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x137]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007cb6b8 ["INT_ADD", "register:40f0:8", ["const:7cb6b8:8", "const:4:8"]]
- 007cb6b8 ["CALL", null, ["callee:00c59010:8"]]
+ 007cc61c ["INT_ADD", "register:40f0:8", ["const:7cc61c:8", "const:4:8"]]
+ 007cc61c ["CALL", null, ["callee:00c59010:8"]]
- 007cb71c ["INT_ADD", "register:40f0:8", ["const:7cb71c:8", "const:4:8"]]
- 007cb71c ["CALL", null, ["ram:7ef6dc:8"]]
+ 007cc680 ["INT_ADD", "register:40f0:8", ["const:7cc680:8", "const:4:8"]]
+ 007cc680 ["CALL", null, ["ram:7f0640:8"]]
- 007cb7d0 ["INT_ADD", "register:40f0:8", ["const:7cb7d0:8", "const:4:8"]]
- 007cb7d0 ["CALL", null, ["callee:00c596b0:8"]]
+ 007cc734 ["INT_ADD", "register:40f0:8", ["const:7cc734:8", "const:4:8"]]
+ 007cc734 ["CALL", null, ["callee:00c596b0:8"]]
~~~


<a id="compare-1772919dbfd408227c6fadc675e467a5"></a>

### [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) → [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) FUN_007cdea8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 432件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00440b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440b40.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 432件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0043eb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043eb88.md) [`00440e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440e60.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.70% / 新版 78.70%

優先判定に残った影響 `call_argument_candidate` 324件, `call_target` 36件, `store_condition` 16件, `store_value` 29件, `unresolved_branch_alignment` 328件, `unresolved_call_alignment` 370件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 423件

アドレスに依存する影響 `branch_value` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007cf000",
      "incomplete_value": false,
      "site": "007cf000",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ce09c",
      "incomplete_value": false,
      "site": "007ce09c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:580:8"
          ]
        ]
      ]
    },
    "ordinal": 132,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007d454c",
      "incomplete_value": false,
      "site": "007d4554",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:c50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007d35e8",
      "incomplete_value": false,
      "site": "007d35f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:c80:8"
          ]
        ]
      ]
    },
    "ordinal": 818,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007d49c8",
      "incomplete_value": false,
      "site": "007d49d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:6d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007d3a64",
      "incomplete_value": false,
      "site": "007d3a6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7d000:8"
          ],
          [
            "leaf",
            "const:700:8"
          ]
        ]
      ]
    },
    "ordinal": 833,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ccf44",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ccf48",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ccf4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007cdea8",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "007cdeac",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "007cdeb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007cf000 ["COPY", "register:5000:8", ["const:0:8"]]
- 007cf000 ["COPY", "register:5008:8", ["const:0:8"]]
- 007cf000 ["COPY", "register:5010:8", ["const:0:8"]]
- 007cf000 ["COPY", "register:5018:8", ["const:0:8"]]
- 007d2cd8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 007d2cd8 ["CBRANCH", null, ["local:b1228:8", "tmp:0:1"]]
+ 007d3c3c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 007d3c3c ["CBRANCH", null, ["local:b1244:8", "tmp:0:1"]]
- 007d328c ["INT_ADD", "register:40f0:8", ["const:7d328c:8", "const:4:8"]]
- 007d328c ["CALL", null, ["callee:00804d38:8"]]
+ 007d41f0 ["INT_ADD", "register:40f0:8", ["const:7d41f0:8", "const:4:8"]]
+ 007d41f0 ["CALL", null, ["callee:00804d38:8"]]
~~~


<a id="compare-f8a750594e7d144a766ead7f9794c8c7"></a>

### [`007dd150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd150.md) → [`007de0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007de/007de0b4.md) FUN_007de0b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 4件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007de174",
      "incomplete_value": true,
      "site": "007de178",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "007dd188"
      ],
      [
        "FALL_THROUGH",
        "007de0ec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "007de0e8",
      "incomplete_value": true,
      "site": "007de0f8",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "leaf",
            "const:17:8"
          ],
          [
            "live",
            "register:4000:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007dd194",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "007dd188"
      ],
      [
        "CONDITIONAL_JUMP",
        "007de0ec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "007de0e8",
      "incomplete_value": true,
      "site": "007de12c",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "leaf",
            "const:17:8"
          ],
          [
            "live",
            "register:4000:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007dd1c8",
      "value": [
        "live",
        "register:102:1"
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
      "unmatched:007dd188",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007de104"
      ]
    ]
  ],
  "added": [
    [
      "007de0ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007de104"
      ]
    ]
  ]
}
~~~


~~~diff
- 007dd214 ["INT_ADD", "register:40f0:8", ["const:7dd214:8", "const:4:8"]]
- 007dd214 ["CALL", null, ["callee:0043bac4:8"]]
+ 007de178 ["INT_ADD", "register:40f0:8", ["const:7de178:8", "const:4:8"]]
+ 007de178 ["CALL", null, ["callee:0043bac4:8"]]
- 007dd174 ["INT_ADD", "register:40f0:8", ["const:7dd174:8", "const:4:8"]]
- 007dd174 ["CALL", null, ["callee:00c59080:8"]]
+ 007de0d8 ["INT_ADD", "register:40f0:8", ["const:7de0d8:8", "const:4:8"]]
+ 007de0d8 ["CALL", null, ["callee:00c59080:8"]]
- 007dd17c ["CBRANCH", null, ["local:b13:8", "register:102:1"]]
+ 007de0e0 ["CBRANCH", null, ["local:b7:8", "register:102:1"]]
~~~


<a id="compare-6bf620fdde86171c01191ee10781824b"></a>

### [`007dd218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd218.md) → [`007de17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007de/007de17c.md) FUN_007de17c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007dd218",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007dd21c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007dd220",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007de17c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007de180",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007de184",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007dd218 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007dd218 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007dd218 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 007dd218 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007dd21c ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 007dd21c ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 007dd21c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 007dd21c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 007dd220 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 007dd220 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 007dd220 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 007dd220 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-536dfa11d5cec90833865feee08d565f"></a>

### [`007dd3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd3bc.md) → [`007de320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007de/007de320.md) FUN_007de320

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 22件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md)
- 新版 呼出元 2件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007f0c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0c64.md) · 呼出先 22件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046de34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de34.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md) [`0071c868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c868.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 97.42% / 新版 97.42%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007de640",
      "incomplete_value": false,
      "site": "007de644",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "leaf",
            "const:0:4"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 15,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "007dd558"
      ],
      [
        "FALL_THROUGH",
        "007de4bc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "007de4bc",
      "incomplete_value": true,
      "site": "007de4c0",
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
      "definition_site": "007dd558",
      "incomplete_value": true,
      "site": "007dd55c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 32,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007dd424",
      "DATA",
      [
        "storage",
        "00ca425c",
        null,
        "undefined4"
      ]
    ],
    [
      "unmatched:007dd520",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007de468"
      ]
    ],
    [
      "unmatched:007dd558",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007de4c8"
      ]
    ]
  ],
  "added": [
    [
      "007de388",
      "DATA",
      [
        "storage",
        "00ca522c",
        null,
        "undefined4"
      ]
    ],
    [
      "007de484",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007de468"
      ]
    ],
    [
      "007de4bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007de4c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 007dd6e0 ["INT_ADD", "register:40f0:8", ["const:7dd6e0:8", "const:4:8"]]
- 007dd6e0 ["CALL", null, ["callee:00803674:8"]]
+ 007de644 ["INT_ADD", "register:40f0:8", ["const:7de644:8", "const:4:8"]]
+ 007de644 ["CALL", null, ["callee:00803674:8"]]
- 007dd41c ["COPY", "register:4058:8", ["const:ca4000:8"]]
+ 007de380 ["COPY", "register:4058:8", ["const:ca5000:8"]]
- 007dd420 ["COPY", "tmp:0:8", ["const:25c:8"]]
- 007dd420 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
- 007dd420 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
- 007dd420 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
~~~


<a id="compare-ab977480a2884ee72e7e75feda3bd0ce"></a>

### [`007dd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd7f8.md) → [`007de75c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007de/007de75c.md) FUN_007de75c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 31件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 31件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 89.65% / 新版 89.65%

優先判定に残った影響 `call_argument_candidate` 29件, `store_destination` 14件, `store_value` 11件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007de894",
      "incomplete_value": true,
      "site": "007de8a4",
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
                "const:4a6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007dd930",
      "incomplete_value": true,
      "site": "007dd940",
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
                "const:3db:8"
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
      "definition_site": "007de898",
      "incomplete_value": true,
      "site": "007de8a8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "007dd934",
      "incomplete_value": true,
      "site": "007dd944",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007de89c",
      "incomplete_value": true,
      "site": "007de8ac",
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
                "const:330:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007dd938",
      "incomplete_value": true,
      "site": "007dd948",
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
                "const:2e0:8"
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
      "007de7ac",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007de7b8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007de7c0",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007de7ac",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "007de7b8",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007de7c0",
      "PARAM",
      [
        "storage",
        "00c72a30",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007dd864 ["INT_ADD", "register:40f0:8", ["const:7dd864:8", "const:4:8"]]
- 007dd864 ["CALL", null, ["callee:00c596b0:8"]]
+ 007de7c8 ["INT_ADD", "register:40f0:8", ["const:7de7c8:8", "const:4:8"]]
+ 007de7c8 ["CALL", null, ["callee:00c596b0:8"]]
- 007dd988 ["INT_ADD", "register:40f0:8", ["const:7dd988:8", "const:4:8"]]
- 007dd988 ["CALL", null, ["callee:0047ec3c:8"]]
+ 007de8ec ["INT_ADD", "register:40f0:8", ["const:7de8ec:8", "const:4:8"]]
+ 007de8ec ["CALL", null, ["callee:0047ec3c:8"]]
- 007dda54 ["INT_ADD", "register:40f0:8", ["const:7dda54:8", "const:4:8"]]
- 007dda54 ["CALL", null, ["callee:0047ec3c:8"]]
+ 007de9b8 ["INT_ADD", "register:40f0:8", ["const:7de9b8:8", "const:4:8"]]
+ 007de9b8 ["CALL", null, ["callee:0047ec3c:8"]]
~~~


<a id="compare-5d2ca01b5e9efcc65637b150f19d427d"></a>

### [`007ef378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef378.md) → [`007f02dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f02dc.md) FUN_007f02dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 8件 [`005e4eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4eb4.md) [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00802be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802be4.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00a066c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a066c8.md)
- 新版 呼出元 1件 [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 8件 [`005e5264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e5/005e5264.md) [`00803674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803674.md) [`00803b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b48.md) [`00803c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803c64.md) [`00a07674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07674.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ef39c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00802be4"
      ]
    ],
    [
      "unmatched:007ef3e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f0360"
      ]
    ]
  ],
  "added": [
    [
      "007f0300",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00803b48"
      ]
    ],
    [
      "007f0348",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f0360"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ef390 ["INT_ADD", "register:40f0:8", ["const:7ef390:8", "const:4:8"]]
- 007ef390 ["CALL", null, ["callee:00803674:8"]]
+ 007f02f4 ["INT_ADD", "register:40f0:8", ["const:7f02f4:8", "const:4:8"]]
+ 007f02f4 ["CALL", null, ["callee:00803674:8"]]
- 007ef39c ["INT_ADD", "register:40f0:8", ["const:7ef39c:8", "const:4:8"]]
- 007ef39c ["CALL", null, ["ram:802be4:8"]]
- 007ef3a4 ["INT_ADD", "register:40f0:8", ["const:7ef3a4:8", "const:4:8"]]
- 007ef3a4 ["CALL", null, ["callee:00803c64:8"]]
+ 007f0308 ["INT_ADD", "register:40f0:8", ["const:7f0308:8", "const:4:8"]]
+ 007f0308 ["CALL", null, ["callee:00803c64:8"]]
~~~


<a id="compare-f56cf202af62d661c7a16aa0d34ac6df"></a>

### [`007ef448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef448.md) → [`007f03ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f03ac.md) FUN_007f03ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00753528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00753/00753528.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`007538d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00753/007538d8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f0490",
      "incomplete_value": true,
      "site": "007f0498",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": {
      "definition_site": "007ef52c",
      "incomplete_value": true,
      "site": "007ef534",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "live",
            "register:40a8:8"
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
    "new": null,
    "old": {
      "definition_site": "007ef51c",
      "incomplete_value": true,
      "site": "007ef534",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007ef510",
      "incomplete_value": true,
      "site": "007ef534",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:007ef4ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f04c8"
      ]
    ]
  ],
  "added": [
    [
      "007f0410",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f04c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ef534 ["INT_ADD", "register:40f0:8", ["const:7ef534:8", "const:4:8"]]
- 007ef534 ["CALL", null, ["callee:00c590a0:8"]]
+ 007f0498 ["INT_ADD", "register:40f0:8", ["const:7f0498:8", "const:4:8"]]
+ 007f0498 ["CALL", null, ["callee:00c590a0:8"]]
- 007ef458 ["COPY", "register:40e8:8", ["register:8:8"]]
- 007ef468 ["CBRANCH", null, ["local:b2:8", "register:102:1"]]
+ 007f03cc ["CBRANCH", null, ["local:b3:8", "register:102:1"]]
~~~


<a id="compare-74a6c02708f551ec54687e60f3bcb767"></a>

### [`007ef570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef570.md) → [`007f04d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f04d4.md) FUN_007f04d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 1件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)
- 新版 呼出元 1件 [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 1件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 55.10% / 新版 55.10%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ef5cc",
      "DATA",
      [
        "storage",
        "00335f3c",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:007ef600",
      "DATA",
      [
        "storage",
        "00332074",
        null,
        "fde_table_entry"
      ]
    ]
  ],
  "added": [
    [
      "007f0530",
      "DATA",
      [
        "storage",
        "00335f3c",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "007f0564",
      "DATA",
      [
        "storage",
        "00332074",
        null,
        "fde_table_entry"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ef590 ["INT_ADD", "register:40f0:8", ["const:7ef590:8", "const:4:8"]]
- 007ef590 ["CALL", null, ["callee:0046cd24:8"]]
+ 007f04f4 ["INT_ADD", "register:40f0:8", ["const:7f04f4:8", "const:4:8"]]
+ 007f04f4 ["CALL", null, ["callee:0046cd24:8"]]
- 007ef5cc ["COPY", "tmp:0:8", ["register:4048:8"]]
- 007ef5cc ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 007ef5cc ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 007ef5cc ["INT_ADD", "tmp:2:8", ["register:40a0:8", "tmp:1:8"]]
- 007ef5d0 ["FLOAT_MULT", "register:5040:4", ["register:5000:4", "register:5020:4"]]
- 007ef5d0 ["COPY", "register:5044:4", ["const:0:4"]]
- 007ef5d0 ["COPY", "register:5048:8", ["const:0:8"]]
- 007ef5d0 ["COPY", "register:5050:8", ["const:0:8"]]
~~~


<a id="compare-636366330d87d3c524c68aab27690275"></a>

### [`007ef634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef634.md) → [`007f0598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0598.md) FUN_007f0598

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 5件 [`00753528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00753/00753528.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 5件 [`007538d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00753/007538d8.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.95% / 新版 80.95%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 3件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007ef680",
      "incomplete_value": true,
      "site": "007ef684",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "007ef690",
      "incomplete_value": true,
      "site": "007ef69c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007ef68c",
      "incomplete_value": true,
      "site": "007ef69c",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:4:8"
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
      "unmatched:007ef654",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f0608"
      ]
    ],
    [
      "unmatched:007ef67c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f0618"
      ]
    ]
  ],
  "added": [
    [
      "007f05b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f0608"
      ]
    ],
    [
      "007f05e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f0618"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ef684 ["INT_ADD", "register:40f0:8", ["const:7ef684:8", "const:4:8"]]
- 007ef684 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f05e8 ["INT_ADD", "register:40f0:8", ["const:7f05e8:8", "const:4:8"]]
+ 007f05e8 ["CALL", null, ["callee:00c58f30:8"]]
- 007ef69c ["INT_ADD", "register:40f0:8", ["const:7ef69c:8", "const:4:8"]]
- 007ef69c ["CALL", null, ["callee:00c590a0:8"]]
+ 007f0600 ["INT_ADD", "register:40f0:8", ["const:7f0600:8", "const:4:8"]]
+ 007f0600 ["CALL", null, ["callee:00c590a0:8"]]
- 007ef6d0 ["INT_ADD", "register:40f0:8", ["const:7ef6d0:8", "const:4:8"]]
- 007ef6d0 ["CALL", null, ["callee:00c58f50:8"]]
+ 007f0634 ["INT_ADD", "register:40f0:8", ["const:7f0634:8", "const:4:8"]]
+ 007f0634 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-4d73b7b8e283e942e2c30d5ed47e6ee3"></a>

### [`007efae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efae0.md) → [`007f0a44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0a44.md) FUN_007f0a44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`007cb638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) [`009e4a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e4/009e4a5c.md) [`00a607b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a60/00a607b8.md) [`00ab4d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab4/00ab4d70.md) · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 4件 [`007cc59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cc/007cc59c.md) [`009e5a08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e5/009e5a08.md) [`00a617ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a61/00a617ac.md) [`00ab5d64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ab5/00ab5d64.md) · 呼出先 5件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f0a5c",
      "incomplete_value": true,
      "site": "007f0a68",
      "value": [
        "live",
        "register:4008:8"
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
      "definition_site": "007f0aac",
      "incomplete_value": true,
      "site": "007f0ab0",
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
            "const:1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007efb48",
      "incomplete_value": true,
      "site": "007efb4c",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007efb94",
      "incomplete_value": true,
      "site": "007efb98",
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
            "const:18:8"
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
      "unmatched:007efae0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007efae4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007efae8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007f0a44",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007f0a48",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007f0a4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007efb04 ["INT_ADD", "register:40f0:8", ["const:7efb04:8", "const:4:8"]]
- 007efb04 ["CALL", null, ["callee:00c59080:8"]]
+ 007f0a68 ["INT_ADD", "register:40f0:8", ["const:7f0a68:8", "const:4:8"]]
+ 007f0a68 ["CALL", null, ["callee:00c59080:8"]]
- 007efb4c ["INT_ADD", "register:40f0:8", ["const:7efb4c:8", "const:4:8"]]
- 007efb4c ["CALL", null, ["callee:00c58f30:8"]]
+ 007f0ab0 ["INT_ADD", "register:40f0:8", ["const:7f0ab0:8", "const:4:8"]]
+ 007f0ab0 ["CALL", null, ["callee:00c58f30:8"]]
- 007efb98 ["INT_ADD", "register:40f0:8", ["const:7efb98:8", "const:4:8"]]
- 007efb98 ["CALL", null, ["callee:0043be80:8"]]
+ 007f0afc ["INT_ADD", "register:40f0:8", ["const:7f0afc:8", "const:4:8"]]
+ 007f0afc ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-3f9c969af955195b2f50d161b23b9c88"></a>

### [`007efbd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efbd4.md) → [`007f0b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0b38.md) FUN_007f0b38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`009340cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/009340cc.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) [`00afe4a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afe4a8.md) [`00aff6c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aff/00aff6c8.md) · 呼出先 2件 [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00802be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802be4.md)
- 新版 呼出元 4件 [`00935078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935078.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) [`00aff49c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00aff49c.md) [`00b006bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b00/00b006bc.md) · 呼出先 2件 [`00803674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803674.md) [`00803b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b48.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f0b40",
      "incomplete_value": false,
      "site": "007f0b44",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "leaf",
            "const:0:4"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:007efbec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f0b64"
      ]
    ],
    [
      "unmatched:007efbf4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00802be4"
      ]
    ]
  ],
  "added": [
    [
      "007f0b50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f0b64"
      ]
    ],
    [
      "007f0b58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00803b48"
      ]
    ]
  ]
}
~~~


~~~diff
- 007efbe0 ["INT_ADD", "register:40f0:8", ["const:7efbe0:8", "const:4:8"]]
- 007efbe0 ["CALL", null, ["callee:00803674:8"]]
+ 007f0b44 ["INT_ADD", "register:40f0:8", ["const:7f0b44:8", "const:4:8"]]
+ 007f0b44 ["CALL", null, ["callee:00803674:8"]]
- 007efbec ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007efbec ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007efbf0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 007efbf0 ["INT_ZEXT", "register:4000:8", ["tmp:0:4"]]
~~~


<a id="compare-f79f79c37a3b9dbbc73846cda019478d"></a>

### [`007efc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efc08.md) → [`007f0b6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0b6c.md) FUN_007f0b6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 7件 [`006768fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/006768fc.md) [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00802be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802be4.md) [`00a32e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a32e5c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) · 呼出先 7件 [`00676cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676cac.md) [`00803674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803674.md) [`00803b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b48.md) [`00a33e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a33/00a33e50.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f0c14",
      "value": [
        "leaf",
        "ram:803b48:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007efcb0",
      "value": [
        "leaf",
        "ram:802be4:8"
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
      "unmatched:007efc40",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00802be4"
      ]
    ],
    [
      "unmatched:007efca0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00803674"
      ]
    ],
    [
      "unmatched:007efca8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f0c38"
      ]
    ]
  ],
  "added": [
    [
      "007f0ba4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00803b48"
      ]
    ],
    [
      "007f0c04",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00803674"
      ]
    ],
    [
      "007f0c0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f0c38"
      ]
    ]
  ]
}
~~~


~~~diff
- 007efcb0 ["INT_ADD", "register:40f0:8", ["const:7efcb0:8", "const:4:8"]]
- 007efcb0 ["CALL", null, ["ram:802be4:8"]]
+ 007f0c14 ["INT_ADD", "register:40f0:8", ["const:7f0c14:8", "const:4:8"]]
+ 007f0c14 ["CALL", null, ["ram:803b48:8"]]
- 007efc24 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007efc24 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 007f0b88 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007f0b88 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 007efc30 ["INT_ADD", "register:40f0:8", ["const:7efc30:8", "const:4:8"]]
- 007efc30 ["CALL", null, ["callee:00803674:8"]]
+ 007f0b94 ["INT_ADD", "register:40f0:8", ["const:7f0b94:8", "const:4:8"]]
+ 007f0b94 ["CALL", null, ["callee:00803674:8"]]
~~~


<a id="compare-f28a158fd8047568ec8d2366b3a90817"></a>

### [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) → [`007f0c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0c64.md) FUN_007f0c64

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`007fcf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcf44.md) [`007fd034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd034.md) · 呼出先 33件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005e48ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e48ec.md) [`005e4bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4bc8.md) [`005e4f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4f24.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md)
- 新版 呼出元 2件 [`007fdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdea8.md) [`007fdf98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdf98.md) · 呼出先 33件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`005e4c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4c9c.md) [`005e4f78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4f78.md) [`005e52d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e5/005e52d4.md) [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.50% / 新版 72.50%

優先判定に残った影響 `call_argument_candidate` 17件, `unresolved_call_alignment` 13件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f0c94",
      "incomplete_value": true,
      "site": "007f0ca0",
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
            "const:9a8:8"
          ]
        ]
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
      "definition_site": "007f0c98",
      "incomplete_value": true,
      "site": "007f0ca0",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4010:4"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f0ef4",
      "incomplete_value": true,
      "site": "007f0efc",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
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
      "unmatched:007efd18",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007efd38",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:007efd68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00802be4"
      ]
    ]
  ],
  "added": [
    [
      "007f0c7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f0c9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "007f0ccc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00803b48"
      ]
    ]
  ]
}
~~~


~~~diff
- 007efd3c ["INT_ADD", "register:40f0:8", ["const:7efd3c:8", "const:4:8"]]
- 007efd3c ["CALL", null, ["callee:00a07510:8"]]
+ 007f0ca0 ["INT_ADD", "register:40f0:8", ["const:7f0ca0:8", "const:4:8"]]
+ 007f0ca0 ["CALL", null, ["callee:00a07510:8"]]
- 007eff98 ["INT_ADD", "register:40f0:8", ["const:7eff98:8", "const:4:8"]]
- 007eff98 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 007f0efc ["INT_ADD", "register:40f0:8", ["const:7f0efc:8", "const:4:8"]]
+ 007f0efc ["CALL", null, ["callee:00c5b8d0:8"]]
- 007f0004 ["INT_ADD", "register:40f0:8", ["const:7f0004:8", "const:4:8"]]
- 007f0004 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 007f0f68 ["INT_ADD", "register:40f0:8", ["const:7f0f68:8", "const:4:8"]]
+ 007f0f68 ["CALL", null, ["callee:00c5b8d0:8"]]
~~~


<a id="compare-119b6278bccf47c3406bbcda0781f318"></a>

### [`007f042c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f042c.md) → [`007f1390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f1390.md) FUN_007f1390

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007cab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007cab20.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`007cba84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cb/007cba84.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.16% / 新版 83.16%

優先判定に残った影響 `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 12件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f042c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f0430",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f0434",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007f1390",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "007f1394",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007f1398",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007f042c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f042c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f042c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 007f042c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007f0430 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 007f0430 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 007f0430 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 007f0430 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 007f0434 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 007f0434 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 007f0434 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 007f0434 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-9f22d2a7fe5660fd5fa3232ddedff6b3"></a>

### [`007f05cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f05cc.md) → [`007f1530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f1530.md) FUN_007f1530

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007cab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007cab20.md) · 呼出先 7件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00a467d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a467d8.md) [`00a46d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46d1c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`007cba84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cb/007cba84.md) · 呼出先 7件 [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00a477cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a477cc.md) [`00a47d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47d10.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f062c",
      "incomplete_value": true,
      "site": "007f0634",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:10:8"
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
      "unmatched:007f0644",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "007f15bc",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f0684",
      "DATA",
      [
        "storage",
        "00c8b880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f15a8",
      "READ",
      [
        "storage",
        "00c9c408",
        null,
        "pointer"
      ]
    ],
    [
      "007f15bc",
      "DATA",
      [
        "storage",
        "00c8c7f8",
        null,
        "undefined *"
      ]
    ],
    [
      "007f15e8",
      "DATA",
      [
        "storage",
        "00c8c850",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f0634 ["INT_ADD", "register:40f0:8", ["const:7f0634:8", "const:4:8"]]
- 007f0634 ["CALL", null, ["callee:00a477cc:8"]]
+ 007f1598 ["INT_ADD", "register:40f0:8", ["const:7f1598:8", "const:4:8"]]
+ 007f1598 ["CALL", null, ["callee:00a477cc:8"]]
- 007f0610 ["FLOAT_ADD", "register:5000:4", ["register:5000:4", "register:5020:4"]]
- 007f0610 ["COPY", "register:5004:4", ["const:0:4"]]
- 007f0610 ["COPY", "register:5008:8", ["const:0:8"]]
- 007f0610 ["COPY", "register:5010:8", ["const:0:8"]]
- 007f0614 ["COPY", "register:5020:8", ["const:0:8"]]
- 007f0614 ["COPY", "register:5028:8", ["const:0:8"]]
- 007f0614 ["COPY", "register:5030:8", ["const:0:8"]]
- 007f0614 ["COPY", "register:5038:8", ["const:0:8"]]
~~~


<a id="compare-a81a4511ab973127fb32dbb7a68b4191"></a>

### [`007f074c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f074c.md) → [`007f16b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f16b0.md) FUN_007f16b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007f0ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0ccc.md) · 呼出先 10件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) [`0067e628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e628.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md)
- 新版 呼出元 1件 [`007f1c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f1c30.md) · 呼出先 10件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00672b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672b38.md) [`0067e9d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067e9d8.md) [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.17% / 新版 70.17%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 20件, `unresolved_call_alignment` 13件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f07a4",
      "incomplete_value": true,
      "site": "007f07ac",
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
            "const:8:8"
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
    "new": null,
    "old": {
      "definition_site": "007f091c",
      "incomplete_value": false,
      "site": "007f0920",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "ordinal": 28,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f0918",
      "incomplete_value": true,
      "site": "007f0920",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f074c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f0750",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f0754",
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
      "007f16b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007f16b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f16b8",
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
- 007f07ac ["INT_ADD", "register:40f0:8", ["const:7f07ac:8", "const:4:8"]]
- 007f07ac ["CALL", null, ["callee:00c54d90:8"]]
+ 007f1710 ["INT_ADD", "register:40f0:8", ["const:7f1710:8", "const:4:8"]]
+ 007f1710 ["CALL", null, ["callee:00c54d90:8"]]
- 007f0920 ["INT_ADD", "register:40f0:8", ["const:7f0920:8", "const:4:8"]]
- 007f0920 ["CALL", null, ["callee:00c54d90:8"]]
+ 007f1884 ["INT_ADD", "register:40f0:8", ["const:7f1884:8", "const:4:8"]]
+ 007f1884 ["CALL", null, ["callee:00c54d90:8"]]
- 007f0950 ["INT_ADD", "register:40f0:8", ["const:7f0950:8", "const:4:8"]]
- 007f0950 ["CALL", null, ["callee:00c54d90:8"]]
+ 007f18b4 ["INT_ADD", "register:40f0:8", ["const:7f18b4:8", "const:4:8"]]
+ 007f18b4 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-597f7b13a06cc5f53247d41ef8f1464a"></a>

### [`007f0ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0ccc.md) → [`007f1c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f1c30.md) FUN_007f1c30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`007f074c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f074c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`007f16b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f16b0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f0cdc ["INT_ADD", "register:40f0:8", ["const:7f0cdc:8", "const:4:8"]]
- 007f0cdc ["CALL", null, ["callee:007f16b0:8"]]
+ 007f1c40 ["INT_ADD", "register:40f0:8", ["const:7f1c40:8", "const:4:8"]]
+ 007f1c40 ["CALL", null, ["callee:007f16b0:8"]]
~~~


<a id="compare-5f1d396bceedad6a335ec38ab6747694"></a>

### [`007f0cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0cf0.md) → [`007f1c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f1c54.md) FUN_007f1c54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007bbb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbb4c.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`007f0e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0e2c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`007bcab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcab0.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`007f1d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f1d90.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.71% / 新版 88.71%

優先判定に残った影響 `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f0cf4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f0cf8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f0cfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007f1c58",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007f1c5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007f1c60",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007f0cf0 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 007f0cf4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f0cf4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f0cf4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 007f0cf4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 007f0cf8 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 007f0cf8 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 007f0cf8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 007f0cf8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1ec6c563361d877c754d33909040dc3c"></a>

### [`007f0e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0e2c.md) → [`007f1d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f1d90.md) FUN_007f1d90

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007f0cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0cf0.md) [`007f0e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0e2c.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`007f1c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f1c54.md) [`007f1d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f1d90.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.47% / 新版 81.47%

優先判定に残った影響 `call_argument_candidate` 32件, `store_condition` 2件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 26件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f1ef4",
      "incomplete_value": false,
      "site": "007f1efc",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f0f90",
      "incomplete_value": false,
      "site": "007f0f98",
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
            "const:f93:8"
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
      "definition_site": "007f204c",
      "incomplete_value": false,
      "site": "007f2054",
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
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f10e8",
      "incomplete_value": false,
      "site": "007f10f0",
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
            "const:e27:8"
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
      "definition_site": "007f2064",
      "incomplete_value": false,
      "site": "007f2070",
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
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f1100",
      "incomplete_value": false,
      "site": "007f110c",
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
            "const:f29:8"
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
      "unmatched:007f0e30",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f0e34",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f0e38",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007f1d94",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "007f1d98",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007f1d9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007f0f98 ["INT_ADD", "register:40f0:8", ["const:7f0f98:8", "const:4:8"]]
- 007f0f98 ["CALL", null, ["callee:004421f4:8"]]
+ 007f1efc ["INT_ADD", "register:40f0:8", ["const:7f1efc:8", "const:4:8"]]
+ 007f1efc ["CALL", null, ["callee:004421f4:8"]]
- 007f10f0 ["INT_ADD", "register:40f0:8", ["const:7f10f0:8", "const:4:8"]]
- 007f10f0 ["CALL", null, ["callee:004421f4:8"]]
+ 007f2054 ["INT_ADD", "register:40f0:8", ["const:7f2054:8", "const:4:8"]]
+ 007f2054 ["CALL", null, ["callee:004421f4:8"]]
- 007f110c ["INT_ADD", "register:40f0:8", ["const:7f110c:8", "const:4:8"]]
- 007f110c ["CALL", null, ["callee:00442b54:8"]]
+ 007f2070 ["INT_ADD", "register:40f0:8", ["const:7f2070:8", "const:4:8"]]
+ 007f2070 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-5184dba53d1ca6c1de67f1f7195f906d"></a>

### [`007f18ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f18ec.md) → [`007f2850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2850.md) FUN_007f2850

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007bbe74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbe74.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`007f1b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1b10.md) [`007f1ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1ee8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`007bcdd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcdd8.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`007f2a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2a74.md) [`007f2e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2e4c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.07% / 新版 94.07%

優先判定に残った影響 `unresolved_branch_alignment` 2件

~~~diff
- 007f1954 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007f1954 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 007f1954 ["CBRANCH", null, ["local:b14:8", "tmp:1:1"]]
+ 007f28b8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007f28b8 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 007f28b8 ["CBRANCH", null, ["local:b15:8", "tmp:1:1"]]
- 007f1978 ["INT_MULT", "register:4050:8", ["register:4050:8", "register:4058:8"]]
- 007f197c ["INT_AND", "register:4068:8", ["register:4068:8", "const:ffffffffffff:8"]]
- 007f197c ["INT_OR", "register:4068:8", ["register:4068:8", "const:249000000000000:8"]]
~~~


<a id="compare-0f4e3fba9b14c7629c3227f3065402f3"></a>

### [`007f1b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1b10.md) → [`007f2a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2a74.md) FUN_007f2a74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007f18ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f18ec.md) [`0090132c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/0090132c.md) · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0046e86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e86c.md) [`00470394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470394.md) [`007f1d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1d08.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 2件 [`007f2850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2850.md) [`009022d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/009022d8.md) · 呼出先 7件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0046eb8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb8c.md) [`004706b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/004706b4.md) [`007f2c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2c6c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 96.51% / 新版 96.51%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 4件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f1b9c",
      "incomplete_value": true,
      "site": "007f1bac",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f1ba0",
      "incomplete_value": true,
      "site": "007f1bac",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f2b0c",
      "incomplete_value": true,
      "site": "007f2b10",
      "value": [
        "live",
        "register:40c8:8"
      ]
    },
    "old": {
      "definition_site": "007f1ba8",
      "incomplete_value": true,
      "site": "007f1bac",
      "value": [
        "live",
        "register:4000:8"
      ]
    },
    "ordinal": 1,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f1b80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f2b88"
      ]
    ]
  ],
  "added": [
    [
      "007f2ae4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f2b88"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f1bac ["INT_ADD", "register:40f0:8", ["const:7f1bac:8", "const:4:8"]]
- 007f1bac ["CALL", null, ["callee:007f2c6c:8"]]
+ 007f2b10 ["INT_ADD", "register:40f0:8", ["const:7f2b10:8", "const:4:8"]]
+ 007f2b10 ["CALL", null, ["callee:007f2c6c:8"]]
- 007f1b5c ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 007f2ac0 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
- 007f1b80 ["CBRANCH", null, ["local:b8:8", "register:102:1"]]
~~~


<a id="compare-bf20efc746d18ab225946447c4ca7533"></a>

### [`007f1c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1c80.md) → [`007f2be4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2be4.md) FUN_007f2be4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f1cb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f2bfc"
      ]
    ]
  ],
  "added": [
    [
      "007f2c18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f2bfc"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f1cb0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 007f1cb0 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
- 007f1cb4 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 007f1cb4 ["CBRANCH", null, ["local:b1:8", "tmp:0:1"]]
- 007f1cc4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007f1cc4 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 007f2c28 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007f2c28 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-5993f8c615f3086f43be3143b1546a59"></a>

### [`007f1d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1d08.md) → [`007f2c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2c6c.md) FUN_007f2c6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`007bbe74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbe74.md) [`007f1b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1b10.md) [`008ff920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff920.md) [`00a3f3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3f/00a3f3a0.md) · 呼出先 7件 [`004704d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004704d4.md) [`007f1e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1e40.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`007bcdd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcdd8.md) [`007f2a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2a74.md) [`009008cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/009008cc.md) [`00a40394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a40/00a40394.md) · 呼出先 7件 [`004707f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/004707f4.md) [`007f2da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2da4.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 11件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f1d0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f1d10",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f1d14",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007f2c70",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007f2c74",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007f2c78",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007f1d08 ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
- 007f1d0c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f1d0c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f1d0c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 007f1d0c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 007f1d10 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:50:8"]]
- 007f1d10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40c8:8"]]
~~~


<a id="compare-b6f1ade40020aa1d35fd019ca05acdda"></a>

### [`007f1e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1e40.md) → [`007f2da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2da4.md) FUN_007f2da4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007f1d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1d08.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007f2c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2c6c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "007f1e78"
      ],
      [
        "FALL_THROUGH",
        "007f2ddc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "007f2ddc",
      "incomplete_value": true,
      "site": "007f2de0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f1e78",
      "incomplete_value": true,
      "site": "007f1e7c",
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
      "unmatched:007f1e78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f2dcc"
      ]
    ]
  ],
  "added": [
    [
      "007f2ddc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f2dcc"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f1e44 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 007f1e44 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 007f1e44 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 007f1e44 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 007f2da8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 007f2da8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 007f2da8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 007f2da8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 007f1e5c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 007f1e5c ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
- 007f1e60 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 007f1e60 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-261741da71e1a48f6944138b8d8562c5"></a>

### [`007f1e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1e94.md) → [`007f2df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2df8.md) FUN_007f2df8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 007f1eac ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
+ 007f2e10 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
- 007f1eb8 ["INT_ADD", "register:40f0:8", ["const:7f1eb8:8", "const:4:8"]]
- 007f1eb8 ["CALL", null, ["callee:0046ec04:8"]]
+ 007f2e1c ["INT_ADD", "register:40f0:8", ["const:7f2e1c:8", "const:4:8"]]
+ 007f2e1c ["CALL", null, ["callee:0046ec04:8"]]
- 007f1ec4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007f1ec4 ["CBRANCH", null, ["local:b1:8", "tmp:0:1"]]
+ 007f2e28 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007f2e28 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-998cbad1b27cf145d22ebab7bf1d089c"></a>

### [`007f1ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1ee8.md) → [`007f2e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2e4c.md) FUN_007f2e4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007f18ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f18ec.md) [`0090132c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/0090132c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`007f2850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2850.md) [`009022d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/009022d8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f2e58",
      "incomplete_value": false,
      "site": "007f2e5c",
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
      "definition_site": "007f1ef4",
      "incomplete_value": false,
      "site": "007f1ef8",
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
      "007f2e58",
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
      "007f2e58",
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
- 007f1ef8 ["INT_ADD", "register:40f0:8", ["const:7f1ef8:8", "const:4:8"]]
- 007f1ef8 ["CALL", null, ["callee:0043bad8:8"]]
+ 007f2e5c ["INT_ADD", "register:40f0:8", ["const:7f2e5c:8", "const:4:8"]]
+ 007f2e5c ["CALL", null, ["callee:0043bad8:8"]]
- 007f1ef0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 007f2e54 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 007f1ef4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 007f1ef4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007f1ef4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007f1ef4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007f2e58 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 007f2e58 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007f2e58 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007f2e58 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-65c7ed21411d958ac984178bfa6af8db"></a>

### [`007f1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1efc.md) → [`007f2e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2e60.md) FUN_007f2e60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`0080ef48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080ef48.md) [`008108e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/008108e0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`0080feac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080feac.md) [`00811844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811844.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f2e6c",
      "incomplete_value": false,
      "site": "007f2e70",
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
      "definition_site": "007f1f08",
      "incomplete_value": false,
      "site": "007f1f0c",
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
      "007f2e6c",
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
      "007f2e6c",
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
- 007f1f0c ["INT_ADD", "register:40f0:8", ["const:7f1f0c:8", "const:4:8"]]
- 007f1f0c ["CALL", null, ["callee:0043bad8:8"]]
+ 007f2e70 ["INT_ADD", "register:40f0:8", ["const:7f2e70:8", "const:4:8"]]
+ 007f2e70 ["CALL", null, ["callee:0043bad8:8"]]
- 007f1f04 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 007f2e68 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 007f1f08 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 007f1f08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007f1f08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007f1f08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007f2e6c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 007f2e6c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007f2e6c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007f2e6c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-82de313a2850be69f0a33a7b42334deb"></a>

### [`007f1f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1f10.md) → [`007f2e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2e74.md) FUN_007f2e74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007c7ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7ec0.md) [`0080f180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080f180.md) [`008105a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/008105a8.md) [`00810a10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810a10.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 6件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007c8e24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c8/007c8e24.md) [`008100e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/008100e4.md) [`0081150c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/0081150c.md) [`00811974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811974.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f1f10",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f1f1c",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:007f1f20",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "007f2e74",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f2e80",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "007f2e84",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f1f10 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f1f10 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f1f10 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 007f1f10 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007f1f14 ["COPY", "register:40e8:8", ["register:8:8"]]
- 007f1f18 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-cde7c22aae4307a7b593b486ebe45d7c"></a>

### [`007f1f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1f28.md) → [`007f2e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2e8c.md) FUN_007f2e8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f1f30",
      "incomplete_value": false,
      "site": "007f1f34",
      "value": [
        "leaf",
        "const:10:8"
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
      "unmatched:007f1f40",
      "DATA",
      [
        "storage",
        "00c7ac88",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f1f44",
      "DATA",
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
      "007f2ea4",
      "DATA",
      [
        "storage",
        "00c7bc58",
        null,
        "undefined *"
      ]
    ],
    [
      "007f2ea8",
      "DATA",
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
- 007f1f34 ["INT_ADD", "register:40f0:8", ["const:7f1f34:8", "const:4:8"]]
- 007f1f34 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f2e98 ["INT_ADD", "register:40f0:8", ["const:7f2e98:8", "const:4:8"]]
+ 007f2e98 ["CALL", null, ["callee:00c58f30:8"]]
- 007f1f38 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007f2e9c ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007f1f3c ["COPY", "tmp:0:8", ["const:c88:8"]]
- 007f1f3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f1f3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f1f3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-91cbde9964ec815f516727d67fa8dd0f"></a>

### [`007f1f64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1f64.md) → [`007f2ec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2ec8.md) FUN_007f2ec8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 16件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)
- 新版 呼出元 0件  · 呼出先 16件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043eb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043eb88.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.01% / 新版 91.01%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f2f00",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f1f9c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "007f2f1c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f1fb8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f2f64",
      "incomplete_value": true,
      "site": "007f2f68",
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
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:007f1f80",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "007f2f00",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f2f1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f2ee4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "007f2f00",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007f2f1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f1f9c ["INT_ADD", "register:40f0:8", ["const:7f1f9c:8", "const:4:8"]]
- 007f1f9c ["CALL", null, ["ram:47ad34:8"]]
+ 007f2f00 ["INT_ADD", "register:40f0:8", ["const:7f2f00:8", "const:4:8"]]
+ 007f2f00 ["CALL", null, ["ram:47b054:8"]]
- 007f1fb8 ["INT_ADD", "register:40f0:8", ["const:7f1fb8:8", "const:4:8"]]
- 007f1fb8 ["CALL", null, ["ram:47ad34:8"]]
+ 007f2f1c ["INT_ADD", "register:40f0:8", ["const:7f2f1c:8", "const:4:8"]]
+ 007f2f1c ["CALL", null, ["ram:47b054:8"]]
- 007f2004 ["INT_ADD", "register:40f0:8", ["const:7f2004:8", "const:4:8"]]
- 007f2004 ["CALL", null, ["callee:00801188:8"]]
+ 007f2f68 ["INT_ADD", "register:40f0:8", ["const:7f2f68:8", "const:4:8"]]
+ 007f2f68 ["CALL", null, ["callee:00801188:8"]]
~~~


<a id="compare-ba187484d28b1eb71b0af465d5a1754a"></a>

### [`007f2390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2390.md) → [`007f32f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f3/007f32f4.md) FUN_007f32f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f3308",
      "incomplete_value": false,
      "site": "007f330c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f23a4",
      "incomplete_value": false,
      "site": "007f23a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
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
      "007f330c",
      "DATA",
      [
        "storage",
        "00c7acf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f330c",
      "DATA",
      [
        "storage",
        "00c7bcc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f239c ["INT_ADD", "register:40f0:8", ["const:7f239c:8", "const:4:8"]]
- 007f239c ["CALL", null, ["callee:00c58f30:8"]]
+ 007f3300 ["INT_ADD", "register:40f0:8", ["const:7f3300:8", "const:4:8"]]
+ 007f3300 ["CALL", null, ["callee:00c58f30:8"]]
- 007f23a0 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007f3304 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007f23a4 ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 007f23a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f23a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f23a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f3308 ["COPY", "tmp:0:8", ["const:cc8:8"]]
+ 007f3308 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3308 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3308 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b78855371a9a729a9907f72315faff84"></a>

### [`007f23b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f23b4.md) → [`007f3318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f3/007f3318.md) FUN_007f3318

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
      "definition_site": "007f331c",
      "incomplete_value": false,
      "site": "007f3320",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f23b8",
      "incomplete_value": false,
      "site": "007f23bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
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
      "007f3320",
      "DATA",
      [
        "storage",
        "00c7acf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3320",
      "DATA",
      [
        "storage",
        "00c7bcc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f23b4 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007f3318 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007f23b8 ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 007f23b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f23b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f23b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f331c ["COPY", "tmp:0:8", ["const:cc8:8"]]
+ 007f331c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f331c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f331c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6b0c2096ed88a00d174fce5767d7acb8"></a>

### [`007f23cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f23cc.md) → [`007f3330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f3/007f3330.md) FUN_007f3330

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 17件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 17件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 43.99% / 新版 43.99%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 20件, `unresolved_call_alignment` 27件, `unresolved_store_alignment` 29件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f3398",
      "incomplete_value": true,
      "site": "007f339c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40a8:4"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f3394",
      "incomplete_value": true,
      "site": "007f339c",
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
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f2758",
      "incomplete_value": true,
      "site": "007f2760",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 36,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f23f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "007f337c",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[59]"
      ]
    ],
    [
      "unmatched:007f2430",
      "DATA",
      [
        "storage",
        "00344440",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "007f3354",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "007f337c",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[11]"
      ]
    ],
    [
      "007f3394",
      "DATA",
      [
        "storage",
        "00344440",
        null,
        "byte[23]"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2438 ["INT_ADD", "register:40f0:8", ["const:7f2438:8", "const:4:8"]]
- 007f2438 ["CALL", null, ["callee:008011a8:8"]]
+ 007f339c ["INT_ADD", "register:40f0:8", ["const:7f339c:8", "const:4:8"]]
+ 007f339c ["CALL", null, ["callee:008011a8:8"]]
- 007f2760 ["INT_ADD", "register:40f0:8", ["const:7f2760:8", "const:4:8"]]
- 007f2760 ["CALL", null, ["callee:00aa44c4:8"]]
+ 007f36c4 ["INT_ADD", "register:40f0:8", ["const:7f36c4:8", "const:4:8"]]
+ 007f36c4 ["CALL", null, ["callee:00aa44c4:8"]]
- 007f23e4 ["COPY", "tmp:0:8", ["const:60:8"]]
- 007f23e4 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 007f23e4 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 007f23e4 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-cfc8e9d8f52f8ec7534096f78c175416"></a>

### [`007f2988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2988.md) → [`007f38ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f3/007f38ec.md) FUN_007f38ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f3900",
      "incomplete_value": false,
      "site": "007f3904",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f299c",
      "incomplete_value": false,
      "site": "007f29a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:d88:8"
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
      "007f3904",
      "DATA",
      [
        "storage",
        "00c7ad88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3904",
      "DATA",
      [
        "storage",
        "00c7bd58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2994 ["INT_ADD", "register:40f0:8", ["const:7f2994:8", "const:4:8"]]
- 007f2994 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f38f8 ["INT_ADD", "register:40f0:8", ["const:7f38f8:8", "const:4:8"]]
+ 007f38f8 ["CALL", null, ["callee:00c58f30:8"]]
- 007f2998 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007f38fc ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007f299c ["COPY", "tmp:0:8", ["const:d88:8"]]
- 007f299c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f299c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f299c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f3900 ["COPY", "tmp:0:8", ["const:d58:8"]]
+ 007f3900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0194be393ebffbaeb08d4d1fb628e70f"></a>

### [`007f2a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2a68.md) → [`007f39cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f3/007f39cc.md) FUN_007f39cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f2a8c",
      "DATA",
      [
        "storage",
        "00c7ae08",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f2a90",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f2a94",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007f39f0",
      "DATA",
      [
        "storage",
        "00c7bdd8",
        null,
        "undefined *"
      ]
    ],
    [
      "007f39f4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f39f8",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2a7c ["INT_ADD", "register:40f0:8", ["const:7f2a7c:8", "const:4:8"]]
- 007f2a7c ["CALL", null, ["callee:00c58f30:8"]]
+ 007f39e0 ["INT_ADD", "register:40f0:8", ["const:7f39e0:8", "const:4:8"]]
+ 007f39e0 ["CALL", null, ["callee:00c58f30:8"]]
- 007f2a84 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007f39e8 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007f2a88 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 007f2a88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f2a88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f2a88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a8961c1cbbdf97810c2a631b008c5ecc"></a>

### [`007f2ab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2ab8.md) → [`007f3a1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f3/007f3a1c.md) FUN_007f3a1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.49% / 新版 80.49%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f3a70",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f2b0c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f3af4",
      "incomplete_value": true,
      "site": "007f3af8",
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
            "const:13d8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f3aec",
      "incomplete_value": true,
      "site": "007f3af8",
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
              "INT_ADD"
            ]
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:007f2abc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f2ac0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f2ac4",
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
      "007f3a20",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007f3a24",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f3a28",
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
- 007f2b0c ["INT_ADD", "register:40f0:8", ["const:7f2b0c:8", "const:4:8"]]
- 007f2b0c ["CALL", null, ["ram:47ad34:8"]]
+ 007f3a70 ["INT_ADD", "register:40f0:8", ["const:7f3a70:8", "const:4:8"]]
+ 007f3a70 ["CALL", null, ["ram:47b054:8"]]
- 007f2b94 ["INT_ADD", "register:40f0:8", ["const:7f2b94:8", "const:4:8"]]
- 007f2b94 ["CALL", null, ["callee:00675cc4:8"]]
+ 007f3af8 ["INT_ADD", "register:40f0:8", ["const:7f3af8:8", "const:4:8"]]
+ 007f3af8 ["CALL", null, ["callee:00675cc4:8"]]
- 007f2ab8 ["INT_SUB", "register:8:8", ["register:8:8", "const:c0:8"]]
~~~


<a id="compare-218540a4aa34915bbb50b889ba96c26e"></a>

### [`007f2d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2d88.md) → [`007f3cec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f3/007f3cec.md) FUN_007f3cec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f2d88",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f2d94",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:007f2da0",
      "DATA",
      [
        "storage",
        "00c7ae78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3cec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f3cf8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "007f3d04",
      "DATA",
      [
        "storage",
        "00c7be48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2d88 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f2d88 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f2d88 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 007f2d88 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007f2d8c ["COPY", "register:40e8:8", ["register:8:8"]]
- 007f2d90 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-d79cf60c00fb63df8bec35b888b262cb"></a>

### [`007f2dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2dac.md) → [`007f3d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f3/007f3d10.md) FUN_007f3d10

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
      "definition_site": "007f3d14",
      "incomplete_value": false,
      "site": "007f3d18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:e48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f2db0",
      "incomplete_value": false,
      "site": "007f2db4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:e78:8"
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
      "007f3d18",
      "DATA",
      [
        "storage",
        "00c7ae78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3d18",
      "DATA",
      [
        "storage",
        "00c7be48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2dac ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007f3d10 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007f2db0 ["COPY", "tmp:0:8", ["const:e78:8"]]
- 007f2db0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f2db0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f2db0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f3d14 ["COPY", "tmp:0:8", ["const:e48:8"]]
+ 007f3d14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3d14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3d14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a16c5aa9b5a763dcebf7174d6598909f"></a>

### [`007f2dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2dc4.md) → [`007f3d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f3/007f3d28.md) FUN_007f3d28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f2de8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f3d4c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2dcc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007f2dcc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007f3d30 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007f3d30 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007f2dd4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007f2dd4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007f3d38 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007f3d38 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007f2de8 ["INT_ADD", "register:40f0:8", ["const:7f2de8:8", "const:4:8"]]
- 007f2de8 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-ee84348d921de035349ad4e634462b6d"></a>

### [`007f2e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2e38.md) → [`007f3d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f3/007f3d9c.md) FUN_007f3d9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.46% / 新版 38.46%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f2e38",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f2e3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f2e5c",
      "DATA",
      [
        "storage",
        "00c7af08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3d9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f3da0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f3dc0",
      "DATA",
      [
        "storage",
        "00c7bed8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2e38 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f2e38 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f2e38 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007f2e38 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007f2e3c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007f2e3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007f2e40 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-79f623bcaf1c8ed15fc3d3e074387dc5"></a>

### [`007f2e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2e88.md) → [`007f3dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f3/007f3dec.md) FUN_007f3dec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`008b6fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa8.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`008b7f54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f54.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f3eb0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f2f4c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f3ecc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f2f68",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 9,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f3f18",
      "incomplete_value": true,
      "site": "007f3f20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "live",
            "register:4098:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:007f2ed8",
      "DATA",
      [
        "storage",
        "00333f9c",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "007f3eb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f3ecc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f3e3c",
      "DATA",
      [
        "storage",
        "00333f9c",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "007f3eb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007f3ecc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2f4c ["INT_ADD", "register:40f0:8", ["const:7f2f4c:8", "const:4:8"]]
- 007f2f4c ["CALL", null, ["ram:47ad34:8"]]
+ 007f3eb0 ["INT_ADD", "register:40f0:8", ["const:7f3eb0:8", "const:4:8"]]
+ 007f3eb0 ["CALL", null, ["ram:47b054:8"]]
- 007f2f68 ["INT_ADD", "register:40f0:8", ["const:7f2f68:8", "const:4:8"]]
- 007f2f68 ["CALL", null, ["ram:47ad34:8"]]
+ 007f3ecc ["INT_ADD", "register:40f0:8", ["const:7f3ecc:8", "const:4:8"]]
+ 007f3ecc ["CALL", null, ["ram:47b054:8"]]
- 007f2fbc ["INT_ADD", "register:40f0:8", ["const:7f2fbc:8", "const:4:8"]]
- 007f2fbc ["CALL", null, ["callee:008b894c:8"]]
+ 007f3f20 ["INT_ADD", "register:40f0:8", ["const:7f3f20:8", "const:4:8"]]
+ 007f3f20 ["CALL", null, ["callee:008b894c:8"]]
~~~


<a id="compare-8734e8ead1177a1df3879a24533fa81c"></a>

### [`007f3058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3058.md) → [`007f3fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f3/007f3fbc.md) FUN_007f3fbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f307c",
      "DATA",
      [
        "storage",
        "00c7af88",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f3080",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f3084",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007f3fe0",
      "DATA",
      [
        "storage",
        "00c7bf58",
        null,
        "undefined *"
      ]
    ],
    [
      "007f3fe4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f3fe8",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007f306c ["INT_ADD", "register:40f0:8", ["const:7f306c:8", "const:4:8"]]
- 007f306c ["CALL", null, ["callee:00c58f30:8"]]
+ 007f3fd0 ["INT_ADD", "register:40f0:8", ["const:7f3fd0:8", "const:4:8"]]
+ 007f3fd0 ["CALL", null, ["callee:00c58f30:8"]]
- 007f3074 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007f3fd8 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007f3078 ["COPY", "tmp:0:8", ["const:f88:8"]]
- 007f3078 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3078 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3078 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-509e9a2e397e51308566e704736af02c"></a>

### [`007f30a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f30a8.md) → [`007f400c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f400c.md) FUN_007f400c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00674764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00674/00674764.md) [`00675b80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00675/00675b80.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00674b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00674/00674b14.md) [`00675f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00675/00675f30.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.41% / 新版 79.41%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f40cc",
      "incomplete_value": true,
      "site": "007f40d8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4000:4"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:007f30ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f30b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f30b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007f4010",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007f4014",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007f4018",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3174 ["INT_ADD", "register:40f0:8", ["const:7f3174:8", "const:4:8"]]
- 007f3174 ["CALL", null, ["callee:00674b14:8"]]
+ 007f40d8 ["INT_ADD", "register:40f0:8", ["const:7f40d8:8", "const:4:8"]]
+ 007f40d8 ["CALL", null, ["callee:00674b14:8"]]
- 007f30a8 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 007f30ac ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f30ac ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f30ac ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 007f30ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e50008cbf915cfa56236cac90558dd5a"></a>

### [`007f329c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f329c.md) → [`007f4200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4200.md) FUN_007f4200

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f32c0",
      "DATA",
      [
        "storage",
        "00c7b008",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f32c4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f32c8",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007f4224",
      "DATA",
      [
        "storage",
        "00c7bfd8",
        null,
        "undefined *"
      ]
    ],
    [
      "007f4228",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f422c",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007f32b0 ["INT_ADD", "register:40f0:8", ["const:7f32b0:8", "const:4:8"]]
- 007f32b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f4214 ["INT_ADD", "register:40f0:8", ["const:7f4214:8", "const:4:8"]]
+ 007f4214 ["CALL", null, ["callee:00c58f30:8"]]
- 007f32bc ["COPY", "tmp:0:8", ["const:8:8"]]
- 007f32bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f32bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f32bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007f32c0 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 007f32c0 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 007f32c0 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 007f32c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-70be10052e7b64164242e154e3453368"></a>

### [`007f32ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f32ec.md) → [`007f4250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4250.md) FUN_007f4250

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f3570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3570.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007f44d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f44d4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.09% / 新版 91.09%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f4284",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f3320",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f4354",
      "incomplete_value": true,
      "site": "007f436c",
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
            "const:2f08:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f4358",
      "incomplete_value": true,
      "site": "007f436c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:8:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "007f4284",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f42d4",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ],
    [
      "unmatched:007f3380",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f4430"
      ]
    ]
  ],
  "added": [
    [
      "007f4284",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007f42d4",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ],
    [
      "007f42e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f4430"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3320 ["INT_ADD", "register:40f0:8", ["const:7f3320:8", "const:4:8"]]
- 007f3320 ["CALL", null, ["ram:47ad34:8"]]
+ 007f4284 ["INT_ADD", "register:40f0:8", ["const:7f4284:8", "const:4:8"]]
+ 007f4284 ["CALL", null, ["ram:47b054:8"]]
- 007f3408 ["INT_ADD", "register:40f0:8", ["const:7f3408:8", "const:4:8"]]
- 007f3408 ["CALL", null, ["callee:008bb86c:8"]]
+ 007f436c ["INT_ADD", "register:40f0:8", ["const:7f436c:8", "const:4:8"]]
+ 007f436c ["CALL", null, ["callee:008bb86c:8"]]
- 007f3314 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 007f4278 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


<a id="compare-cf220898aa9849591f3bbb150b54d192"></a>

### [`007f353c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f353c.md) → [`007f44a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f44a0.md) FUN_007f44a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f44b4",
      "incomplete_value": false,
      "site": "007f44b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f3550",
      "incomplete_value": false,
      "site": "007f3554",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:78:8"
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
      "007f44b8",
      "DATA",
      [
        "storage",
        "00c7b078",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f44b8",
      "DATA",
      [
        "storage",
        "00c7c048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3548 ["INT_ADD", "register:40f0:8", ["const:7f3548:8", "const:4:8"]]
- 007f3548 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f44ac ["INT_ADD", "register:40f0:8", ["const:7f44ac:8", "const:4:8"]]
+ 007f44ac ["CALL", null, ["callee:00c58f30:8"]]
- 007f354c ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f44b0 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f3550 ["COPY", "tmp:0:8", ["const:78:8"]]
- 007f3550 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3550 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3550 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f44b4 ["COPY", "tmp:0:8", ["const:48:8"]]
+ 007f44b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f44b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f44b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b5b707239fa1ba0e5c07de93fde27fb2"></a>

### [`007f3560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3560.md) → [`007f44c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f44c4.md) FUN_007f44c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f3568",
      "DATA",
      [
        "storage",
        "00c7b078",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f44cc",
      "DATA",
      [
        "storage",
        "00c7c048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3560 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007f3564 ["COPY", "tmp:0:8", ["const:78:8"]]
- 007f3564 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3564 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3564 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007f3568 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 007f3568 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-245607b40520f20d4f865957ec0dd5f4"></a>

### [`007f35bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f35bc.md) → [`007f4520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4520.md) FUN_007f4520

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f4544",
      "incomplete_value": false,
      "site": "007f4544",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f35e0",
      "incomplete_value": false,
      "site": "007f35e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:108:8"
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
      "007f4544",
      "DATA",
      [
        "storage",
        "00c7b108",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4544",
      "DATA",
      [
        "storage",
        "00c7c0d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f35d0 ["INT_ADD", "register:40f0:8", ["const:7f35d0:8", "const:4:8"]]
- 007f35d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f4534 ["INT_ADD", "register:40f0:8", ["const:7f4534:8", "const:4:8"]]
+ 007f4534 ["CALL", null, ["callee:00c58f30:8"]]
- 007f35d8 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f453c ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f35dc ["COPY", "tmp:0:8", ["const:108:8"]]
- 007f35dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f35dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f35dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4540 ["COPY", "tmp:0:8", ["const:d8:8"]]
+ 007f4540 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4540 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4540 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e8b7738efcc1a186911a817745068f35"></a>

### [`007f36b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f36b0.md) → [`007f4614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4614.md) FUN_007f4614

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f4638",
      "incomplete_value": false,
      "site": "007f4638",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f36d4",
      "incomplete_value": false,
      "site": "007f36d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:188:8"
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
      "007f4638",
      "DATA",
      [
        "storage",
        "00c7b188",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4638",
      "DATA",
      [
        "storage",
        "00c7c158",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f36c4 ["INT_ADD", "register:40f0:8", ["const:7f36c4:8", "const:4:8"]]
- 007f36c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f4628 ["INT_ADD", "register:40f0:8", ["const:7f4628:8", "const:4:8"]]
+ 007f4628 ["CALL", null, ["callee:00c58f30:8"]]
- 007f36cc ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f4630 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f36d0 ["COPY", "tmp:0:8", ["const:188:8"]]
- 007f36d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f36d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f36d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4634 ["COPY", "tmp:0:8", ["const:158:8"]]
+ 007f4634 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4634 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4634 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6f5287d45546835da54a4beecdb9f617"></a>

### [`007f3700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3700.md) → [`007f4664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4664.md) FUN_007f4664

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 15件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f3a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3a30.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007f4994`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4994.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f469c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f3738",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "007f46b8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f3754",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007f469c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f46b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f4744",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "007f469c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007f46b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007f4744",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3738 ["INT_ADD", "register:40f0:8", ["const:7f3738:8", "const:4:8"]]
- 007f3738 ["CALL", null, ["ram:47ad34:8"]]
+ 007f469c ["INT_ADD", "register:40f0:8", ["const:7f469c:8", "const:4:8"]]
+ 007f469c ["CALL", null, ["ram:47b054:8"]]
- 007f3754 ["INT_ADD", "register:40f0:8", ["const:7f3754:8", "const:4:8"]]
- 007f3754 ["CALL", null, ["ram:47ad34:8"]]
+ 007f46b8 ["INT_ADD", "register:40f0:8", ["const:7f46b8:8", "const:4:8"]]
+ 007f46b8 ["CALL", null, ["ram:47b054:8"]]
- 007f3734 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007f3734 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 007f4698 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007f4698 ["CBRANCH", null, ["local:b25:8", "tmp:0:1"]]
~~~


