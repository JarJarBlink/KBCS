# v16.0.2 → v16.0.3 · 最優先の変更候補 (48)

[一覧の目次](README.md)

<a id="compare-7fb499d0719ae128ad82173b83622718"></a>

### [`007fc6d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc6d8.md) → [`007fd63c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd63c.md) FUN_007fd63c

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
      "definition_site": "007fd650",
      "incomplete_value": false,
      "site": "007fd654",
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
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc6ec",
      "incomplete_value": false,
      "site": "007fc6f0",
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
            "const:480:8"
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
      "007fd654",
      "DATA",
      [
        "storage",
        "00c7d480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd654",
      "DATA",
      [
        "storage",
        "00c7e450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc6e4 ["INT_ADD", "register:40f0:8", ["const:7fc6e4:8", "const:4:8"]]
- 007fc6e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd648 ["INT_ADD", "register:40f0:8", ["const:7fd648:8", "const:4:8"]]
+ 007fd648 ["CALL", null, ["callee:00c58f30:8"]]
- 007fc6e8 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd64c ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc6ec ["COPY", "tmp:0:8", ["const:480:8"]]
- 007fc6ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc6ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc6ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd650 ["COPY", "tmp:0:8", ["const:450:8"]]
+ 007fd650 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd650 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd650 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8e46a31e6a6bb74d52a01990a5c92c75"></a>

### [`007fc6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc6fc.md) → [`007fd660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd660.md) FUN_007fd660

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
      "definition_site": "007fd664",
      "incomplete_value": false,
      "site": "007fd668",
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
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc700",
      "incomplete_value": false,
      "site": "007fc704",
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
            "const:480:8"
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
      "007fd668",
      "DATA",
      [
        "storage",
        "00c7d480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd668",
      "DATA",
      [
        "storage",
        "00c7e450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc6fc ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd660 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc700 ["COPY", "tmp:0:8", ["const:480:8"]]
- 007fc700 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc700 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc700 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd664 ["COPY", "tmp:0:8", ["const:450:8"]]
+ 007fd664 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd664 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd664 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-de4b61a2dda9553fe43d663946e70c66"></a>

### [`007fc714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc714.md) → [`007fd678`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd678.md) FUN_007fd678

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fd69c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc738",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fd69c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd69c",
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
- 007fc738 ["INT_ADD", "register:40f0:8", ["const:7fc738:8", "const:4:8"]]
- 007fc738 ["CALL", null, ["ram:47ad34:8"]]
+ 007fd69c ["INT_ADD", "register:40f0:8", ["const:7fd69c:8", "const:4:8"]]
+ 007fd69c ["CALL", null, ["ram:47b054:8"]]
- 007fc744 ["INT_ADD", "register:40f0:8", ["const:7fc744:8", "const:4:8"]]
- 007fc744 ["CALL", null, ["callee:0047d134:8"]]
+ 007fd6a8 ["INT_ADD", "register:40f0:8", ["const:7fd6a8:8", "const:4:8"]]
+ 007fd6a8 ["CALL", null, ["callee:0047d134:8"]]
- 007fc764 ["INT_ADD", "register:40f0:8", ["const:7fc764:8", "const:4:8"]]
- 007fc764 ["CALL", null, ["callee:008524fc:8"]]
+ 007fd6c8 ["INT_ADD", "register:40f0:8", ["const:7fd6c8:8", "const:4:8"]]
+ 007fd6c8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-2a45c54c8b85b1bef6648b92b76869fb"></a>

### [`007fc828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc828.md) → [`007fd78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd78c.md) FUN_007fd78c

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
      "definition_site": "007fd7a0",
      "incomplete_value": false,
      "site": "007fd7a4",
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
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc83c",
      "incomplete_value": false,
      "site": "007fc840",
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
            "const:500:8"
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
      "007fd7a4",
      "DATA",
      [
        "storage",
        "00c7d500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd7a4",
      "DATA",
      [
        "storage",
        "00c7e4d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc834 ["INT_ADD", "register:40f0:8", ["const:7fc834:8", "const:4:8"]]
- 007fc834 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd798 ["INT_ADD", "register:40f0:8", ["const:7fd798:8", "const:4:8"]]
+ 007fd798 ["CALL", null, ["callee:00c58f30:8"]]
- 007fc838 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd79c ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc83c ["COPY", "tmp:0:8", ["const:500:8"]]
- 007fc83c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc83c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc83c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd7a0 ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 007fd7a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd7a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd7a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b7aa4f8e756a22b4d27e71eff6ea6460"></a>

### [`007fc84c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc84c.md) → [`007fd7b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd7b0.md) FUN_007fd7b0

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
      "definition_site": "007fd7b4",
      "incomplete_value": false,
      "site": "007fd7b8",
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
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc850",
      "incomplete_value": false,
      "site": "007fc854",
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
            "const:500:8"
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
      "007fd7b8",
      "DATA",
      [
        "storage",
        "00c7d500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd7b8",
      "DATA",
      [
        "storage",
        "00c7e4d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc84c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd7b0 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc850 ["COPY", "tmp:0:8", ["const:500:8"]]
- 007fc850 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc850 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc850 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd7b4 ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 007fd7b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd7b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd7b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eddef7eaf8c42b9092d11756ed428192"></a>

### [`007fc864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc864.md) → [`007fd7c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd7c8.md) FUN_007fd7c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "007fd7ec",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc888",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fd7ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd7ec",
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
- 007fc888 ["INT_ADD", "register:40f0:8", ["const:7fc888:8", "const:4:8"]]
- 007fc888 ["CALL", null, ["ram:47ad34:8"]]
+ 007fd7ec ["INT_ADD", "register:40f0:8", ["const:7fd7ec:8", "const:4:8"]]
+ 007fd7ec ["CALL", null, ["ram:47b054:8"]]
- 007fc894 ["INT_ADD", "register:40f0:8", ["const:7fc894:8", "const:4:8"]]
- 007fc894 ["CALL", null, ["callee:0047d134:8"]]
+ 007fd7f8 ["INT_ADD", "register:40f0:8", ["const:7fd7f8:8", "const:4:8"]]
+ 007fd7f8 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-4467a002bb74ad7b92a26362a7967256"></a>

### [`007fc8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc8d8.md) → [`007fd83c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd83c.md) FUN_007fd83c

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
      "definition_site": "007fd850",
      "incomplete_value": false,
      "site": "007fd854",
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
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc8ec",
      "incomplete_value": false,
      "site": "007fc8f0",
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
            "const:580:8"
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
      "007fd854",
      "DATA",
      [
        "storage",
        "00c7d580",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd854",
      "DATA",
      [
        "storage",
        "00c7e550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc8e4 ["INT_ADD", "register:40f0:8", ["const:7fc8e4:8", "const:4:8"]]
- 007fc8e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd848 ["INT_ADD", "register:40f0:8", ["const:7fd848:8", "const:4:8"]]
+ 007fd848 ["CALL", null, ["callee:00c58f30:8"]]
- 007fc8e8 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd84c ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc8ec ["COPY", "tmp:0:8", ["const:580:8"]]
- 007fc8ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc8ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc8ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd850 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 007fd850 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd850 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd850 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c37f64dea55cb983f519235989d6b147"></a>

### [`007fc8fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc8fc.md) → [`007fd860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd860.md) FUN_007fd860

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
      "definition_site": "007fd864",
      "incomplete_value": false,
      "site": "007fd868",
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
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc900",
      "incomplete_value": false,
      "site": "007fc904",
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
            "const:580:8"
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
      "007fd868",
      "DATA",
      [
        "storage",
        "00c7d580",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd868",
      "DATA",
      [
        "storage",
        "00c7e550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc8fc ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd860 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc900 ["COPY", "tmp:0:8", ["const:580:8"]]
- 007fc900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd864 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 007fd864 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd864 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd864 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-001c60b7fa0baa7cda5bc7934d607bdd"></a>

### [`007fc914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc914.md) → [`007fd878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd878.md) FUN_007fd878

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "007fd89c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc938",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fd89c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd89c",
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
- 007fc938 ["INT_ADD", "register:40f0:8", ["const:7fc938:8", "const:4:8"]]
- 007fc938 ["CALL", null, ["ram:47ad34:8"]]
+ 007fd89c ["INT_ADD", "register:40f0:8", ["const:7fd89c:8", "const:4:8"]]
+ 007fd89c ["CALL", null, ["ram:47b054:8"]]
- 007fc944 ["INT_ADD", "register:40f0:8", ["const:7fc944:8", "const:4:8"]]
- 007fc944 ["CALL", null, ["callee:0047d134:8"]]
+ 007fd8a8 ["INT_ADD", "register:40f0:8", ["const:7fd8a8:8", "const:4:8"]]
+ 007fd8a8 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-c07282b97b1f460c215ab0e4105e4f9e"></a>

### [`007fc988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc988.md) → [`007fd8ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd8ec.md) FUN_007fd8ec

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
      "definition_site": "007fd900",
      "incomplete_value": false,
      "site": "007fd904",
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
            "const:5d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc99c",
      "incomplete_value": false,
      "site": "007fc9a0",
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
            "const:600:8"
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
      "007fd904",
      "DATA",
      [
        "storage",
        "00c7d600",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd904",
      "DATA",
      [
        "storage",
        "00c7e5d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc994 ["INT_ADD", "register:40f0:8", ["const:7fc994:8", "const:4:8"]]
- 007fc994 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd8f8 ["INT_ADD", "register:40f0:8", ["const:7fd8f8:8", "const:4:8"]]
+ 007fd8f8 ["CALL", null, ["callee:00c58f30:8"]]
- 007fc998 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd8fc ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc99c ["COPY", "tmp:0:8", ["const:600:8"]]
- 007fc99c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc99c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc99c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd900 ["COPY", "tmp:0:8", ["const:5d0:8"]]
+ 007fd900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7558ee6f99726fc749f4bb013ee15cea"></a>

### [`007fc9ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc9ac.md) → [`007fd910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd910.md) FUN_007fd910

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
      "definition_site": "007fd914",
      "incomplete_value": false,
      "site": "007fd918",
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
            "const:5d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc9b0",
      "incomplete_value": false,
      "site": "007fc9b4",
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
            "const:600:8"
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
      "007fd918",
      "DATA",
      [
        "storage",
        "00c7d600",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd918",
      "DATA",
      [
        "storage",
        "00c7e5d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc9ac ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd910 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc9b0 ["COPY", "tmp:0:8", ["const:600:8"]]
- 007fc9b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc9b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc9b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd914 ["COPY", "tmp:0:8", ["const:5d0:8"]]
+ 007fd914 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd914 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd914 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-99fda3dde3f27cff5b9f807cd05ddeda"></a>

### [`007fc9c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc9c4.md) → [`007fd928`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd928.md) FUN_007fd928

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "007fd94c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc9e8",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fd94c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd94c",
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
- 007fc9e8 ["INT_ADD", "register:40f0:8", ["const:7fc9e8:8", "const:4:8"]]
- 007fc9e8 ["CALL", null, ["ram:47ad34:8"]]
+ 007fd94c ["INT_ADD", "register:40f0:8", ["const:7fd94c:8", "const:4:8"]]
+ 007fd94c ["CALL", null, ["ram:47b054:8"]]
- 007fc9f4 ["INT_ADD", "register:40f0:8", ["const:7fc9f4:8", "const:4:8"]]
- 007fc9f4 ["CALL", null, ["callee:0047d134:8"]]
+ 007fd958 ["INT_ADD", "register:40f0:8", ["const:7fd958:8", "const:4:8"]]
+ 007fd958 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-ba760d98d00affa8c331cc21af411f61"></a>

### [`007fca38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fca38.md) → [`007fd99c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd99c.md) FUN_007fd99c

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
      "definition_site": "007fd9b0",
      "incomplete_value": false,
      "site": "007fd9b4",
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
            "const:650:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fca4c",
      "incomplete_value": false,
      "site": "007fca50",
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
            "const:680:8"
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
      "007fd9b4",
      "DATA",
      [
        "storage",
        "00c7d680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd9b4",
      "DATA",
      [
        "storage",
        "00c7e650",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fca44 ["INT_ADD", "register:40f0:8", ["const:7fca44:8", "const:4:8"]]
- 007fca44 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd9a8 ["INT_ADD", "register:40f0:8", ["const:7fd9a8:8", "const:4:8"]]
+ 007fd9a8 ["CALL", null, ["callee:00c58f30:8"]]
- 007fca48 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd9ac ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fca4c ["COPY", "tmp:0:8", ["const:680:8"]]
- 007fca4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fca4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fca4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd9b0 ["COPY", "tmp:0:8", ["const:650:8"]]
+ 007fd9b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd9b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd9b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ddbe19ef72e87174eb9c06b62968927a"></a>

### [`007fca5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fca5c.md) → [`007fd9c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd9c0.md) FUN_007fd9c0

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
      "definition_site": "007fd9c4",
      "incomplete_value": false,
      "site": "007fd9c8",
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
            "const:650:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fca60",
      "incomplete_value": false,
      "site": "007fca64",
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
            "const:680:8"
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
      "007fd9c8",
      "DATA",
      [
        "storage",
        "00c7d680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd9c8",
      "DATA",
      [
        "storage",
        "00c7e650",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fca5c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd9c0 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fca60 ["COPY", "tmp:0:8", ["const:680:8"]]
- 007fca60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fca60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fca60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd9c4 ["COPY", "tmp:0:8", ["const:650:8"]]
+ 007fd9c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd9c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd9c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3b83859f7de09b47d481516bfffbfec4"></a>

### [`007fca74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fca74.md) → [`007fd9d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd9d8.md) FUN_007fd9d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "007fd9fc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fca98",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fd9fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd9fc",
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
- 007fca98 ["INT_ADD", "register:40f0:8", ["const:7fca98:8", "const:4:8"]]
- 007fca98 ["CALL", null, ["ram:47ad34:8"]]
+ 007fd9fc ["INT_ADD", "register:40f0:8", ["const:7fd9fc:8", "const:4:8"]]
+ 007fd9fc ["CALL", null, ["ram:47b054:8"]]
- 007fcaa4 ["INT_ADD", "register:40f0:8", ["const:7fcaa4:8", "const:4:8"]]
- 007fcaa4 ["CALL", null, ["callee:0047d134:8"]]
+ 007fda08 ["INT_ADD", "register:40f0:8", ["const:7fda08:8", "const:4:8"]]
+ 007fda08 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-8b0a028b33911288e7766d1aec37e0df"></a>

### [`007fcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcae8.md) → [`007fda4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fda4c.md) FUN_007fda4c

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
      "definition_site": "007fda70",
      "incomplete_value": false,
      "site": "007fda70",
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
      "definition_site": "007fcb0c",
      "incomplete_value": false,
      "site": "007fcb0c",
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
      "007fda70",
      "DATA",
      [
        "storage",
        "00c7d700",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fda70",
      "DATA",
      [
        "storage",
        "00c7e6d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcafc ["INT_ADD", "register:40f0:8", ["const:7fcafc:8", "const:4:8"]]
- 007fcafc ["CALL", null, ["callee:00c58f30:8"]]
+ 007fda60 ["INT_ADD", "register:40f0:8", ["const:7fda60:8", "const:4:8"]]
+ 007fda60 ["CALL", null, ["callee:00c58f30:8"]]
- 007fcb04 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fda68 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fcb08 ["COPY", "tmp:0:8", ["const:700:8"]]
- 007fcb08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fcb08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fcb08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fda6c ["COPY", "tmp:0:8", ["const:6d0:8"]]
+ 007fda6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fda6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fda6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1827545110cce57f0632c198f631a41a"></a>

### [`007fcb1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcb1c.md) → [`007fda80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fda80.md) FUN_007fda80

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
      "definition_site": "007fda8c",
      "incomplete_value": false,
      "site": "007fda8c",
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
      "definition_site": "007fcb28",
      "incomplete_value": false,
      "site": "007fcb28",
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
      "007fda8c",
      "DATA",
      [
        "storage",
        "00c7d700",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fda8c",
      "DATA",
      [
        "storage",
        "00c7e6d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcb20 ["COPY", "register:4048:8", ["const:c7d000:8"]]
+ 007fda84 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007fcb24 ["COPY", "tmp:0:8", ["const:700:8"]]
- 007fcb24 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fcb24 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fcb24 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fda88 ["COPY", "tmp:0:8", ["const:6d0:8"]]
+ 007fda88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fda88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fda88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-68ea6836bb61490cd15e7ce6219574b7"></a>

### [`007fcb38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcb38.md) → [`007fda9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fda9c.md) FUN_007fda9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.87% / 新版 97.87%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fdac4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fcb60",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fdac4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fdac4",
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
- 007fcb60 ["INT_ADD", "register:40f0:8", ["const:7fcb60:8", "const:4:8"]]
- 007fcb60 ["CALL", null, ["ram:47ad34:8"]]
+ 007fdac4 ["INT_ADD", "register:40f0:8", ["const:7fdac4:8", "const:4:8"]]
+ 007fdac4 ["CALL", null, ["ram:47b054:8"]]
- 007fcb6c ["INT_ADD", "register:40f0:8", ["const:7fcb6c:8", "const:4:8"]]
- 007fcb6c ["CALL", null, ["callee:0047d134:8"]]
+ 007fdad0 ["INT_ADD", "register:40f0:8", ["const:7fdad0:8", "const:4:8"]]
+ 007fdad0 ["CALL", null, ["callee:0047d134:8"]]
- 007fcbac ["INT_ADD", "register:40f0:8", ["const:7fcbac:8", "const:4:8"]]
- 007fcbac ["CALL", null, ["callee:008b89cc:8"]]
+ 007fdb10 ["INT_ADD", "register:40f0:8", ["const:7fdb10:8", "const:4:8"]]
+ 007fdb10 ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-a63b30bab717350d38bdfbf06c471339"></a>

### [`007fcc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcc20.md) → [`007fdb84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdb84.md) FUN_007fdb84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fdba4",
      "incomplete_value": false,
      "site": "007fdba8",
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
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcc40",
      "incomplete_value": false,
      "site": "007fcc44",
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
            "const:780:8"
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
      "007fdba8",
      "DATA",
      [
        "storage",
        "00c7d780",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fdba8",
      "DATA",
      [
        "storage",
        "00c7e750",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcc34 ["INT_ADD", "register:40f0:8", ["const:7fcc34:8", "const:4:8"]]
- 007fcc34 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fdb98 ["INT_ADD", "register:40f0:8", ["const:7fdb98:8", "const:4:8"]]
+ 007fdb98 ["CALL", null, ["callee:00c58f30:8"]]
- 007fcc3c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fdba0 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fcc40 ["COPY", "tmp:0:8", ["const:780:8"]]
- 007fcc40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fcc40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fcc40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fdba4 ["COPY", "tmp:0:8", ["const:750:8"]]
+ 007fdba4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdba4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdba4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-251d1c8859eb1e3e9a056396d88d169d"></a>

### [`007fcc58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcc58.md) → [`007fdbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdbbc.md) FUN_007fdbbc

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
      "definition_site": "007fdbc4",
      "incomplete_value": false,
      "site": "007fdbc8",
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
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcc60",
      "incomplete_value": false,
      "site": "007fcc64",
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
            "const:780:8"
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
      "007fdbc8",
      "DATA",
      [
        "storage",
        "00c7d780",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fdbc8",
      "DATA",
      [
        "storage",
        "00c7e750",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcc5c ["COPY", "register:4048:8", ["const:c7d000:8"]]
+ 007fdbc0 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007fcc60 ["COPY", "tmp:0:8", ["const:780:8"]]
- 007fcc60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fcc60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fcc60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fdbc4 ["COPY", "tmp:0:8", ["const:750:8"]]
+ 007fdbc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fdbc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fdbc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-af747bba64d836444054b741f4b6ea6a"></a>

### [`007fcc78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcc78.md) → [`007fdbdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdbdc.md) FUN_007fdbdc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.73% / 新版 97.73%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fdc04",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fcca0",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fdc04",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fdc04",
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
- 007fcca0 ["INT_ADD", "register:40f0:8", ["const:7fcca0:8", "const:4:8"]]
- 007fcca0 ["CALL", null, ["ram:47ad34:8"]]
+ 007fdc04 ["INT_ADD", "register:40f0:8", ["const:7fdc04:8", "const:4:8"]]
+ 007fdc04 ["CALL", null, ["ram:47b054:8"]]
- 007fccac ["INT_ADD", "register:40f0:8", ["const:7fccac:8", "const:4:8"]]
- 007fccac ["CALL", null, ["callee:0047d134:8"]]
+ 007fdc10 ["INT_ADD", "register:40f0:8", ["const:7fdc10:8", "const:4:8"]]
+ 007fdc10 ["CALL", null, ["callee:0047d134:8"]]
- 007fccd0 ["INT_ADD", "register:40f0:8", ["const:7fccd0:8", "const:4:8"]]
- 007fccd0 ["CALL", null, ["callee:008524fc:8"]]
+ 007fdc34 ["INT_ADD", "register:40f0:8", ["const:7fdc34:8", "const:4:8"]]
+ 007fdc34 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-7dc9be32d6b650300d2f940a05ae2869"></a>

### [`007fcd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcd54.md) → [`007fdcb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdcb8.md) FUN_007fdcb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fdcd8",
      "incomplete_value": false,
      "site": "007fdcdc",
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
            "const:7d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcd74",
      "incomplete_value": false,
      "site": "007fcd78",
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
            "const:800:8"
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
      "007fdcdc",
      "DATA",
      [
        "storage",
        "00c7d800",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fdcdc",
      "DATA",
      [
        "storage",
        "00c7e7d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcd68 ["INT_ADD", "register:40f0:8", ["const:7fcd68:8", "const:4:8"]]
- 007fcd68 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fdccc ["INT_ADD", "register:40f0:8", ["const:7fdccc:8", "const:4:8"]]
+ 007fdccc ["CALL", null, ["callee:00c58f30:8"]]
- 007fcd70 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fdcd4 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fcd74 ["COPY", "tmp:0:8", ["const:800:8"]]
- 007fcd74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fcd74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fcd74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fdcd8 ["COPY", "tmp:0:8", ["const:7d0:8"]]
+ 007fdcd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdcd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdcd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-51367f8783961bcbc73c1592bd3bff8c"></a>

### [`007fcd8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcd8c.md) → [`007fdcf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdcf0.md) FUN_007fdcf0

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
      "definition_site": "007fdcf8",
      "incomplete_value": false,
      "site": "007fdcfc",
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
            "const:7d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcd94",
      "incomplete_value": false,
      "site": "007fcd98",
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
            "const:800:8"
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
      "007fdcfc",
      "DATA",
      [
        "storage",
        "00c7d800",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fdcfc",
      "DATA",
      [
        "storage",
        "00c7e7d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcd90 ["COPY", "register:4048:8", ["const:c7d000:8"]]
+ 007fdcf4 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007fcd94 ["COPY", "tmp:0:8", ["const:800:8"]]
- 007fcd94 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fcd94 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fcd94 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fdcf8 ["COPY", "tmp:0:8", ["const:7d0:8"]]
+ 007fdcf8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fdcf8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fdcf8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-39dc7809d02dffef817b2525f2316763"></a>

### [`007fcdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcdac.md) → [`007fdd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdd10.md) FUN_007fdd10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "007fdd34",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fcdd0",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fdd34",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fdd34",
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
- 007fcdd0 ["INT_ADD", "register:40f0:8", ["const:7fcdd0:8", "const:4:8"]]
- 007fcdd0 ["CALL", null, ["ram:47ad34:8"]]
+ 007fdd34 ["INT_ADD", "register:40f0:8", ["const:7fdd34:8", "const:4:8"]]
+ 007fdd34 ["CALL", null, ["ram:47b054:8"]]
- 007fcddc ["INT_ADD", "register:40f0:8", ["const:7fcddc:8", "const:4:8"]]
- 007fcddc ["CALL", null, ["callee:0047d134:8"]]
+ 007fdd40 ["INT_ADD", "register:40f0:8", ["const:7fdd40:8", "const:4:8"]]
+ 007fdd40 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-2bd1827696df88c9970491eb864fa4db"></a>

### [`007fce20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fce20.md) → [`007fdd84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdd84.md) FUN_007fdd84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fdda4",
      "incomplete_value": false,
      "site": "007fdda8",
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
            "const:850:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fce40",
      "incomplete_value": false,
      "site": "007fce44",
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
            "const:880:8"
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
      "007fdda8",
      "DATA",
      [
        "storage",
        "00c7d880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fdda8",
      "DATA",
      [
        "storage",
        "00c7e850",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fce34 ["INT_ADD", "register:40f0:8", ["const:7fce34:8", "const:4:8"]]
- 007fce34 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fdd98 ["INT_ADD", "register:40f0:8", ["const:7fdd98:8", "const:4:8"]]
+ 007fdd98 ["CALL", null, ["callee:00c58f30:8"]]
- 007fce3c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fdda0 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fce40 ["COPY", "tmp:0:8", ["const:880:8"]]
- 007fce40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fce40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fce40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fdda4 ["COPY", "tmp:0:8", ["const:850:8"]]
+ 007fdda4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdda4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdda4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-412f0b07678a2134f50650f2f3bab9fa"></a>

### [`007fce58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fce58.md) → [`007fddbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fddbc.md) FUN_007fddbc

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
      "definition_site": "007fddc4",
      "incomplete_value": false,
      "site": "007fddc8",
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
            "const:850:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fce60",
      "incomplete_value": false,
      "site": "007fce64",
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
            "const:880:8"
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
      "007fddc8",
      "DATA",
      [
        "storage",
        "00c7d880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fddc8",
      "DATA",
      [
        "storage",
        "00c7e850",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fce5c ["COPY", "register:4048:8", ["const:c7d000:8"]]
+ 007fddc0 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007fce60 ["COPY", "tmp:0:8", ["const:880:8"]]
- 007fce60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fce60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fce60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fddc4 ["COPY", "tmp:0:8", ["const:850:8"]]
+ 007fddc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fddc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fddc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3dfa2f6de2acfeaef2485a3b2fd67428"></a>

### [`007fce78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fce78.md) → [`007fdddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdddc.md) FUN_007fdddc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "007fde00",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fce9c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fde00",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fde00",
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
- 007fce9c ["INT_ADD", "register:40f0:8", ["const:7fce9c:8", "const:4:8"]]
- 007fce9c ["CALL", null, ["ram:47ad34:8"]]
+ 007fde00 ["INT_ADD", "register:40f0:8", ["const:7fde00:8", "const:4:8"]]
+ 007fde00 ["CALL", null, ["ram:47b054:8"]]
- 007fcea8 ["INT_ADD", "register:40f0:8", ["const:7fcea8:8", "const:4:8"]]
- 007fcea8 ["CALL", null, ["callee:0047d134:8"]]
+ 007fde0c ["INT_ADD", "register:40f0:8", ["const:7fde0c:8", "const:4:8"]]
+ 007fde0c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-2e3df6c2f4a059f3f3dc1b7ec4df829e"></a>

### [`007fceec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fceec.md) → [`007fde50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fde50.md) FUN_007fde50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fde70",
      "incomplete_value": false,
      "site": "007fde74",
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
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcf0c",
      "incomplete_value": false,
      "site": "007fcf10",
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
            "const:900:8"
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
      "007fde74",
      "DATA",
      [
        "storage",
        "00c7d900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fde74",
      "DATA",
      [
        "storage",
        "00c7e8d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcf00 ["INT_ADD", "register:40f0:8", ["const:7fcf00:8", "const:4:8"]]
- 007fcf00 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fde64 ["INT_ADD", "register:40f0:8", ["const:7fde64:8", "const:4:8"]]
+ 007fde64 ["CALL", null, ["callee:00c58f30:8"]]
- 007fcf08 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fde6c ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fcf0c ["COPY", "tmp:0:8", ["const:900:8"]]
- 007fcf0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fcf0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fcf0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fde70 ["COPY", "tmp:0:8", ["const:8d0:8"]]
+ 007fde70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fde70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fde70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-01fcf612ad4c31f8b65615e3cec81077"></a>

### [`007fcf24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcf24.md) → [`007fde88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fde88.md) FUN_007fde88

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
      "definition_site": "007fde8c",
      "incomplete_value": false,
      "site": "007fde90",
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
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcf28",
      "incomplete_value": false,
      "site": "007fcf2c",
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
            "const:900:8"
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
      "007fde90",
      "DATA",
      [
        "storage",
        "00c7d900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fde90",
      "DATA",
      [
        "storage",
        "00c7e8d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcf24 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fde88 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fcf28 ["COPY", "tmp:0:8", ["const:900:8"]]
- 007fcf28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fcf28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fcf28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fde8c ["COPY", "tmp:0:8", ["const:8d0:8"]]
+ 007fde8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fde8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fde8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0b1c8353fb8d741eaf7d8b62ae5db281"></a>

### [`007fcf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcf44.md) → [`007fdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdea8.md) FUN_007fdea8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`007f0c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0c64.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fded0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fcf6c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fded0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fded0",
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
- 007fcf6c ["INT_ADD", "register:40f0:8", ["const:7fcf6c:8", "const:4:8"]]
- 007fcf6c ["CALL", null, ["ram:47ad34:8"]]
+ 007fded0 ["INT_ADD", "register:40f0:8", ["const:7fded0:8", "const:4:8"]]
+ 007fded0 ["CALL", null, ["ram:47b054:8"]]
- 007fcf78 ["INT_ADD", "register:40f0:8", ["const:7fcf78:8", "const:4:8"]]
- 007fcf78 ["CALL", null, ["callee:0047d134:8"]]
+ 007fdedc ["INT_ADD", "register:40f0:8", ["const:7fdedc:8", "const:4:8"]]
+ 007fdedc ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-c07a2f96a610e9ac7bd18ea742e15c5b"></a>

### [`007fcfdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcfdc.md) → [`007fdf40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdf40.md) FUN_007fdf40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 57.14% / 新版 57.14%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007fcfec",
      "incomplete_value": false,
      "site": "007fcff0",
      "value": [
        "leaf",
        "const:18:8"
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
      "unmatched:007fd000",
      "DATA",
      [
        "storage",
        "00c7d980",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007fd008",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007fd00c",
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
      "007fdf64",
      "DATA",
      [
        "storage",
        "00c7e950",
        null,
        "undefined *"
      ]
    ],
    [
      "007fdf6c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007fdf70",
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
- 007fcff0 ["INT_ADD", "register:40f0:8", ["const:7fcff0:8", "const:4:8"]]
- 007fcff0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fdf54 ["INT_ADD", "register:40f0:8", ["const:7fdf54:8", "const:4:8"]]
+ 007fdf54 ["CALL", null, ["callee:00c58f30:8"]]
- 007fcff8 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fdf5c ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fcffc ["COPY", "tmp:0:8", ["const:980:8"]]
- 007fcffc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fcffc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fcffc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f8aa44a1cd529231fb55f25fee8388d9"></a>

### [`007fd014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd014.md) → [`007fdf78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdf78.md) FUN_007fdf78

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
      "definition_site": "007fdf7c",
      "incomplete_value": false,
      "site": "007fdf80",
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
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd018",
      "incomplete_value": false,
      "site": "007fd01c",
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
            "const:980:8"
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
      "007fdf80",
      "DATA",
      [
        "storage",
        "00c7d980",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fdf80",
      "DATA",
      [
        "storage",
        "00c7e950",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd014 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fdf78 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fd018 ["COPY", "tmp:0:8", ["const:980:8"]]
- 007fd018 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd018 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd018 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fdf7c ["COPY", "tmp:0:8", ["const:950:8"]]
+ 007fdf7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdf7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdf7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8044b6a8da425e38668c03d7eed23576"></a>

### [`007fd034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd034.md) → [`007fdf98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fdf98.md) FUN_007fdf98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`007f0c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0c64.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fd05c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fdfc0",
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
- 007fd040 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007fd040 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007fdfa4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007fdfa4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007fd048 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007fd048 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 007fd048 ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
+ 007fdfac ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007fdfac ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 007fdfac ["CBRANCH", null, ["local:b7:8", "tmp:1:1"]]
- 007fd05c ["INT_ADD", "register:40f0:8", ["const:7fd05c:8", "const:4:8"]]
- 007fd05c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-0c6adb3e3926dbb8c70cd6382911be59"></a>

### [`007fd0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd0cc.md) → [`007fe030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe030.md) FUN_007fe030

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
      "definition_site": "007fe044",
      "incomplete_value": false,
      "site": "007fe048",
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
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd0e0",
      "incomplete_value": false,
      "site": "007fd0e4",
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
            "const:a00:8"
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
      "007fe048",
      "DATA",
      [
        "storage",
        "00c7da00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe048",
      "DATA",
      [
        "storage",
        "00c7e9d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd0d8 ["INT_ADD", "register:40f0:8", ["const:7fd0d8:8", "const:4:8"]]
- 007fd0d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fe03c ["INT_ADD", "register:40f0:8", ["const:7fe03c:8", "const:4:8"]]
+ 007fe03c ["CALL", null, ["callee:00c58f30:8"]]
- 007fd0dc ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fe040 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fd0e0 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 007fd0e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd0e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd0e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fe044 ["COPY", "tmp:0:8", ["const:9d0:8"]]
+ 007fe044 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe044 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe044 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-91459133e6879d6d84b80334576c69da"></a>

### [`007fd0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd0f0.md) → [`007fe054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe054.md) FUN_007fe054

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
      "definition_site": "007fe058",
      "incomplete_value": false,
      "site": "007fe05c",
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
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd0f4",
      "incomplete_value": false,
      "site": "007fd0f8",
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
            "const:a00:8"
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
      "007fe05c",
      "DATA",
      [
        "storage",
        "00c7da00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe05c",
      "DATA",
      [
        "storage",
        "00c7e9d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd0f0 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fe054 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fd0f4 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 007fd0f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd0f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd0f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fe058 ["COPY", "tmp:0:8", ["const:9d0:8"]]
+ 007fe058 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe058 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe058 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5e3e28568fcd1943c4cd2a4743cff56c"></a>

### [`007fd108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd108.md) → [`007fe06c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe06c.md) FUN_007fe06c

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
      "unmatched:007fd12c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fe090",
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
- 007fd110 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007fd110 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007fe074 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007fe074 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007fd118 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007fd118 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007fe07c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007fe07c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007fd12c ["INT_ADD", "register:40f0:8", ["const:7fd12c:8", "const:4:8"]]
- 007fd12c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-c3d90a6e44b073620bd83a41349f5ebe"></a>

### [`007fd17c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd17c.md) → [`007fe0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe0e0.md) FUN_007fe0e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fe104",
      "incomplete_value": false,
      "site": "007fe108",
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
            "const:a50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd1a0",
      "incomplete_value": false,
      "site": "007fd1a4",
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
            "const:a80:8"
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
      "007fe108",
      "DATA",
      [
        "storage",
        "00c7da80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe108",
      "DATA",
      [
        "storage",
        "00c7ea50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd190 ["INT_ADD", "register:40f0:8", ["const:7fd190:8", "const:4:8"]]
- 007fd190 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fe0f4 ["INT_ADD", "register:40f0:8", ["const:7fe0f4:8", "const:4:8"]]
+ 007fe0f4 ["CALL", null, ["callee:00c58f30:8"]]
- 007fd19c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fe100 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fd1a0 ["COPY", "tmp:0:8", ["const:a80:8"]]
- 007fd1a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd1a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd1a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fe104 ["COPY", "tmp:0:8", ["const:a50:8"]]
+ 007fe104 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe104 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe104 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-041a1b5925fe6d35c971162397b59c47"></a>

### [`007fd1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd1bc.md) → [`007fe120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe120.md) FUN_007fe120

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 62.50% / 新版 62.50%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fd1c4",
      "DATA",
      [
        "storage",
        "00c7da80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe128",
      "DATA",
      [
        "storage",
        "00c7ea50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd1bc ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fd1c0 ["COPY", "tmp:0:8", ["const:a80:8"]]
- 007fd1c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd1c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd1c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007fd1c4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 007fd1c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-9747e83a82b80dadd5706d8f5d58e9fe"></a>

### [`007fd1e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd1e4.md) → [`007fe148`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe148.md) FUN_007fe148

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md) [`00a835f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a835f8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`008ba294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba294.md) [`008ba29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba29c.md) [`00a845ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a845ec.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007fd218 ["INT_ADD", "register:40f0:8", ["const:7fd218:8", "const:4:8"]]
- 007fd218 ["CALL", null, ["callee:008ba294:8"]]
+ 007fe17c ["INT_ADD", "register:40f0:8", ["const:7fe17c:8", "const:4:8"]]
+ 007fe17c ["CALL", null, ["callee:008ba294:8"]]
- 007fd228 ["INT_ADD", "register:40f0:8", ["const:7fd228:8", "const:4:8"]]
- 007fd228 ["CALL", null, ["callee:008ba294:8"]]
+ 007fe18c ["INT_ADD", "register:40f0:8", ["const:7fe18c:8", "const:4:8"]]
+ 007fe18c ["CALL", null, ["callee:008ba294:8"]]
- 007fd230 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007fd230 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 007fe194 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007fe194 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
~~~


<a id="compare-8ad5f973afe2a4a045d9244bdda4de80"></a>

### [`007fd37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd37c.md) → [`007fe2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe2e0.md) FUN_007fe2e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fe300",
      "incomplete_value": false,
      "site": "007fe304",
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
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd39c",
      "incomplete_value": false,
      "site": "007fd3a0",
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
            "const:b00:8"
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
      "007fe304",
      "DATA",
      [
        "storage",
        "00c7db00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe304",
      "DATA",
      [
        "storage",
        "00c7ead0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd390 ["INT_ADD", "register:40f0:8", ["const:7fd390:8", "const:4:8"]]
- 007fd390 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fe2f4 ["INT_ADD", "register:40f0:8", ["const:7fe2f4:8", "const:4:8"]]
+ 007fe2f4 ["CALL", null, ["callee:00c58f30:8"]]
- 007fd398 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fe2fc ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fd39c ["COPY", "tmp:0:8", ["const:b00:8"]]
- 007fd39c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd39c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd39c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fe300 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 007fe300 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe300 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe300 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-01137d0045486ab700ff77f79a946c6f"></a>

### [`007fd3b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd3b4.md) → [`007fe318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe318.md) FUN_007fe318

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
      "definition_site": "007fe31c",
      "incomplete_value": false,
      "site": "007fe320",
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
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd3b8",
      "incomplete_value": false,
      "site": "007fd3bc",
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
            "const:b00:8"
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
      "007fe320",
      "DATA",
      [
        "storage",
        "00c7db00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe320",
      "DATA",
      [
        "storage",
        "00c7ead0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd3b4 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fe318 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fd3b8 ["COPY", "tmp:0:8", ["const:b00:8"]]
- 007fd3b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd3b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd3b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fe31c ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 007fe31c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe31c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe31c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e8bf22a38f01c46fe20fbff986a07ebc"></a>

### [`007fd3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd3d4.md) → [`007fe338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe338.md) FUN_007fe338

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047ce68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce68.md) [`007fd640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd640.md) [`007fd644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd644.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047d188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d188.md) [`007fe5a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe5a4.md) [`007fe5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe5a8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.11% / 新版 82.11%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007fe430",
      "incomplete_value": true,
      "site": "007fe430",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1f6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd4cc",
      "incomplete_value": true,
      "site": "007fd4cc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:118:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fe378",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fd414",
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
    "new": null,
    "old": {
      "definition_site": "007fd478",
      "incomplete_value": true,
      "site": "007fd494",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4098:8"
              ],
              [
                "leaf",
                "const:22a0:8"
              ]
            ]
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
      "unmatched:007fd3f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:007fd404",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007fe3b0"
      ]
    ],
    [
      "007fe378",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fe354",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "007fe368",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007fe3b0"
      ]
    ],
    [
      "007fe378",
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
- 007fd414 ["INT_ADD", "register:40f0:8", ["const:7fd414:8", "const:4:8"]]
- 007fd414 ["CALL", null, ["ram:47ad34:8"]]
+ 007fe378 ["INT_ADD", "register:40f0:8", ["const:7fe378:8", "const:4:8"]]
+ 007fe378 ["CALL", null, ["ram:47b054:8"]]
- 007fd494 ["INT_ADD", "register:40f0:8", ["const:7fd494:8", "const:4:8"]]
- 007fd494 ["CALL", null, ["callee:0088942c:8"]]
+ 007fe3f8 ["INT_ADD", "register:40f0:8", ["const:7fe3f8:8", "const:4:8"]]
+ 007fe3f8 ["CALL", null, ["callee:0088942c:8"]]
- 007fd3f0 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 007fd3f0 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 007fd3f0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-1e397c072dda3ca046ffa64fed4f647d"></a>

### [`007fd5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd5f0.md) → [`007fe554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe554.md) FUN_007fe554

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fe574",
      "incomplete_value": false,
      "site": "007fe578",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd610",
      "incomplete_value": false,
      "site": "007fd614",
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
            "const:b70:8"
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
      "007fe578",
      "DATA",
      [
        "storage",
        "00c7db70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe578",
      "DATA",
      [
        "storage",
        "00c7eb40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd604 ["INT_ADD", "register:40f0:8", ["const:7fd604:8", "const:4:8"]]
- 007fd604 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fe568 ["INT_ADD", "register:40f0:8", ["const:7fe568:8", "const:4:8"]]
+ 007fe568 ["CALL", null, ["callee:00c58f30:8"]]
- 007fd60c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fe570 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fd610 ["COPY", "tmp:0:8", ["const:b70:8"]]
- 007fd610 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd610 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd610 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fe574 ["COPY", "tmp:0:8", ["const:b40:8"]]
+ 007fe574 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe574 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe574 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f87bbd171a00be8a20a790e669cf6678"></a>

### [`007fd628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd628.md) → [`007fe58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe58c.md) FUN_007fe58c

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
      "definition_site": "007fe590",
      "incomplete_value": false,
      "site": "007fe594",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd62c",
      "incomplete_value": false,
      "site": "007fd630",
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
            "const:b70:8"
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
      "007fe594",
      "DATA",
      [
        "storage",
        "00c7db70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe594",
      "DATA",
      [
        "storage",
        "00c7eb40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd628 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fe58c ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fd62c ["COPY", "tmp:0:8", ["const:b70:8"]]
- 007fd62c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd62c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd62c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fe590 ["COPY", "tmp:0:8", ["const:b40:8"]]
+ 007fe590 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe590 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe590 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1da58d36854996213cbeba3f43dcde57"></a>

### [`007fd648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd648.md) → [`007fe5ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fe5ac.md) FUN_007fe5ac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 23件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cf48.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00597f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f0c.md)
- 新版 呼出元 0件  · 呼出先 23件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d268.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0059822c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059822c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.33% / 新版 82.33%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_value` 4件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fe878",
      "incomplete_value": false,
      "site": "007fe880",
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
            "const:b6f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd914",
      "incomplete_value": false,
      "site": "007fd91c",
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
            "const:a98:8"
          ]
        ]
      ]
    },
    "ordinal": 40,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fe8a0",
      "incomplete_value": false,
      "site": "007fe8ac",
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
            "const:67d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd93c",
      "incomplete_value": false,
      "site": "007fd948",
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
            "const:5ae:8"
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
      "definition_site": "007fe8d0",
      "incomplete_value": false,
      "site": "007fe8d8",
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
            "const:ec3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd96c",
      "incomplete_value": false,
      "site": "007fd974",
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
            "const:e79:8"
          ]
        ]
      ]
    },
    "ordinal": 45,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007fe608",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:007fd6b0",
      "WRITE",
      [
        "storage",
        "Stack[-0xd0]",
        null,
        null
      ]
    ],
    [
      "unmatched:007fd6b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84df8"
      ]
    ]
  ],
  "added": [
    [
      "007fe608",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007fe614",
      "WRITE",
      [
        "storage",
        "Stack[-0xd0]",
        null,
        null
      ]
    ],
    [
      "007fe618",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a85dec"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd6a4 ["INT_ADD", "register:40f0:8", ["const:7fd6a4:8", "const:4:8"]]
- 007fd6a4 ["CALL", null, ["ram:47ad34:8"]]
+ 007fe608 ["INT_ADD", "register:40f0:8", ["const:7fe608:8", "const:4:8"]]
+ 007fe608 ["CALL", null, ["ram:47b054:8"]]
- 007fda8c ["INT_ADD", "register:40f0:8", ["const:7fda8c:8", "const:4:8"]]
- 007fda8c ["CALL", null, ["callee:00855090:8"]]
+ 007fe9f0 ["INT_ADD", "register:40f0:8", ["const:7fe9f0:8", "const:4:8"]]
+ 007fe9f0 ["CALL", null, ["callee:00855090:8"]]
- 007fd688 ["INT_ADD", "register:40f0:8", ["const:7fd688:8", "const:4:8"]]
- 007fd688 ["CALL", null, ["callee:0059822c:8"]]
+ 007fe5ec ["INT_ADD", "register:40f0:8", ["const:7fe5ec:8", "const:4:8"]]
+ 007fe5ec ["CALL", null, ["callee:0059822c:8"]]
~~~


<a id="compare-3d79ef35d45e413d996b94b3d51fdcf2"></a>

### [`007fdc78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdc78.md) → [`007febdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007febdc.md) FUN_007febdc

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
      "definition_site": "007febf0",
      "incomplete_value": false,
      "site": "007febf4",
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
            "const:bb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdc8c",
      "incomplete_value": false,
      "site": "007fdc90",
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
            "const:be0:8"
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
      "007febf4",
      "DATA",
      [
        "storage",
        "00c7dbe0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007febf4",
      "DATA",
      [
        "storage",
        "00c7ebb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdc84 ["INT_ADD", "register:40f0:8", ["const:7fdc84:8", "const:4:8"]]
- 007fdc84 ["CALL", null, ["callee:00c58f30:8"]]
+ 007febe8 ["INT_ADD", "register:40f0:8", ["const:7febe8:8", "const:4:8"]]
+ 007febe8 ["CALL", null, ["callee:00c58f30:8"]]
- 007fdc88 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007febec ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fdc8c ["COPY", "tmp:0:8", ["const:be0:8"]]
- 007fdc8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdc8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdc8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007febf0 ["COPY", "tmp:0:8", ["const:bb0:8"]]
+ 007febf0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007febf0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007febf0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2e2206d1c60a3f561fd933ee159a18b0"></a>

### [`007fdc9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdc9c.md) → [`007fec00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fec00.md) FUN_007fec00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fdca4",
      "DATA",
      [
        "storage",
        "00c7dbe0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fec08",
      "DATA",
      [
        "storage",
        "00c7ebb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdc9c ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fdca0 ["COPY", "tmp:0:8", ["const:be0:8"]]
- 007fdca0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdca0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdca0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007fdca4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 007fdca4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-02a777760496b15e596113a2284ac49a"></a>

### [`007fdcb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdcb4.md) → [`007fec18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fec18.md) FUN_007fec18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fdcd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fec3c",
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
- 007fdcbc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007fdcbc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 007fec20 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007fec20 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 007fdcc4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007fdcc4 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 007fec28 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007fec28 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 007fdcd0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-653f6b57256602057948cef4a9790459"></a>

### [`007fdd28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdd28.md) → [`007fec8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fec8c.md) FUN_007fec8c

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
      "definition_site": "007feca0",
      "incomplete_value": false,
      "site": "007feca4",
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
            "const:c30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdd3c",
      "incomplete_value": false,
      "site": "007fdd40",
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
            "const:c60:8"
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
      "007feca4",
      "DATA",
      [
        "storage",
        "00c7dc60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007feca4",
      "DATA",
      [
        "storage",
        "00c7ec30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdd34 ["INT_ADD", "register:40f0:8", ["const:7fdd34:8", "const:4:8"]]
- 007fdd34 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fec98 ["INT_ADD", "register:40f0:8", ["const:7fec98:8", "const:4:8"]]
+ 007fec98 ["CALL", null, ["callee:00c58f30:8"]]
- 007fdd38 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fec9c ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fdd3c ["COPY", "tmp:0:8", ["const:c60:8"]]
- 007fdd3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdd3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdd3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007feca0 ["COPY", "tmp:0:8", ["const:c30:8"]]
+ 007feca0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007feca0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007feca0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9a12d7abfb3042924844a510d1f07709"></a>

### [`007fdd4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdd4c.md) → [`007fecb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fecb0.md) FUN_007fecb0

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
      "definition_site": "007fecb4",
      "incomplete_value": false,
      "site": "007fecb8",
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
            "const:c30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdd50",
      "incomplete_value": false,
      "site": "007fdd54",
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
            "const:c60:8"
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
      "007fecb8",
      "DATA",
      [
        "storage",
        "00c7dc60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fecb8",
      "DATA",
      [
        "storage",
        "00c7ec30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdd4c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fecb0 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fdd50 ["COPY", "tmp:0:8", ["const:c60:8"]]
- 007fdd50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdd50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdd50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fecb4 ["COPY", "tmp:0:8", ["const:c30:8"]]
+ 007fecb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fecb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fecb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5672ee3debd170ccb80a84ead052af32"></a>

### [`007fdd64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdd64.md) → [`007fecc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fecc8.md) FUN_007fecc8

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
      "unmatched:007fdd88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fecec",
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
- 007fdd6c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007fdd6c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 007fecd0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007fecd0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 007fdd74 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007fdd74 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 007fecd8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007fecd8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 007fdd88 ["INT_ADD", "register:40f0:8", ["const:7fdd88:8", "const:4:8"]]
- 007fdd88 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-294e344068fa5c07a5a30b25126572cf"></a>

### [`007fddd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fddd8.md) → [`007fed3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fed3c.md) FUN_007fed3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007fed4c",
      "incomplete_value": false,
      "site": "007fed50",
      "value": [
        "leaf",
        "const:10:8"
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
      "unmatched:007fddfc",
      "DATA",
      [
        "storage",
        "00c7dd00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fed60",
      "DATA",
      [
        "storage",
        "00c7ecd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fddec ["INT_ADD", "register:40f0:8", ["const:7fddec:8", "const:4:8"]]
- 007fddec ["CALL", null, ["callee:00c58f30:8"]]
+ 007fed50 ["INT_ADD", "register:40f0:8", ["const:7fed50:8", "const:4:8"]]
+ 007fed50 ["CALL", null, ["callee:00c58f30:8"]]
- 007fddf4 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fed58 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fddf8 ["COPY", "tmp:0:8", ["const:d00:8"]]
- 007fddf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fddf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fddf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-594d5bfd4961ca79b3ca01f8bc80cfeb"></a>

### [`007fde10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fde10.md) → [`007fed74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fed74.md) FUN_007fed74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fde1c",
      "DATA",
      [
        "storage",
        "00c7dd00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fed80",
      "DATA",
      [
        "storage",
        "00c7ecd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fde10 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007fde10 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 007fde10 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 007fde14 ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007fde18 ["COPY", "tmp:0:8", ["const:d00:8"]]
- 007fde18 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fde18 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fde18 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ee32c89877791421d03a373f1cc54165"></a>

### [`007fde30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fde30.md) → [`007fed94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fed94.md) FUN_007fed94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fedbc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fde58",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fedbc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fedbc",
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
- 007fde58 ["INT_ADD", "register:40f0:8", ["const:7fde58:8", "const:4:8"]]
- 007fde58 ["CALL", null, ["ram:47ad34:8"]]
+ 007fedbc ["INT_ADD", "register:40f0:8", ["const:7fedbc:8", "const:4:8"]]
+ 007fedbc ["CALL", null, ["ram:47b054:8"]]
- 007fde38 ["COPY", "register:40e8:8", ["register:8:8"]]
- 007fde64 ["INT_ADD", "register:40f0:8", ["const:7fde64:8", "const:4:8"]]
- 007fde64 ["CALL", null, ["callee:0047d134:8"]]
+ 007fedc8 ["INT_ADD", "register:40f0:8", ["const:7fedc8:8", "const:4:8"]]
+ 007fedc8 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-8ebc8f80f35edd37c789d05ab7978825"></a>

### [`007fdf0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdf0c.md) → [`007fee70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fee70.md) FUN_007fee70

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
      "definition_site": "007fee84",
      "incomplete_value": false,
      "site": "007fee88",
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
            "const:d50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdf20",
      "incomplete_value": false,
      "site": "007fdf24",
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
            "const:d80:8"
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
      "007fee88",
      "DATA",
      [
        "storage",
        "00c7dd80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fee88",
      "DATA",
      [
        "storage",
        "00c7ed50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdf18 ["INT_ADD", "register:40f0:8", ["const:7fdf18:8", "const:4:8"]]
- 007fdf18 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fee7c ["INT_ADD", "register:40f0:8", ["const:7fee7c:8", "const:4:8"]]
+ 007fee7c ["CALL", null, ["callee:00c58f30:8"]]
- 007fdf1c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fee80 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fdf20 ["COPY", "tmp:0:8", ["const:d80:8"]]
- 007fdf20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdf20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdf20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fee84 ["COPY", "tmp:0:8", ["const:d50:8"]]
+ 007fee84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fee84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fee84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b6858aeecb1d0448223f9b9b38fd5ddc"></a>

### [`007fdf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdf30.md) → [`007fee94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fee94.md) FUN_007fee94

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
      "definition_site": "007fee98",
      "incomplete_value": false,
      "site": "007fee9c",
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
            "const:d50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdf34",
      "incomplete_value": false,
      "site": "007fdf38",
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
            "const:d80:8"
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
      "007fee9c",
      "DATA",
      [
        "storage",
        "00c7dd80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fee9c",
      "DATA",
      [
        "storage",
        "00c7ed50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdf30 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fee94 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fdf34 ["COPY", "tmp:0:8", ["const:d80:8"]]
- 007fdf34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdf34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdf34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fee98 ["COPY", "tmp:0:8", ["const:d50:8"]]
+ 007fee98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fee98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fee98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b1fab4775352f7e99bfbc667c1c43f13"></a>

### [`007fdf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdf48.md) → [`007feeac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007feeac.md) FUN_007feeac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007fdf68",
      "incomplete_value": false,
      "site": "007fdf70",
      "value": [
        "leaf",
        "const:b:8"
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
      "definition_site": "007fdf6c",
      "incomplete_value": false,
      "site": "007fdf70",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:007fdf64",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007feec8",
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
- 007fdf70 ["INT_ADD", "register:40f0:8", ["const:7fdf70:8", "const:4:8"]]
- 007fdf70 ["CALL", null, ["callee:0047d134:8"]]
+ 007feed4 ["INT_ADD", "register:40f0:8", ["const:7feed4:8", "const:4:8"]]
+ 007feed4 ["CALL", null, ["callee:0047d134:8"]]
- 007fdf50 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007fdf50 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 007feeb4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007feeb4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007fdf5c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-d2ac760fb4805b33baa5ce1ab3b694b3"></a>

### [`007fdfb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdfb4.md) → [`007fef18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fef18.md) FUN_007fef18

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
      "definition_site": "007fef3c",
      "incomplete_value": false,
      "site": "007fef3c",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdfd8",
      "incomplete_value": false,
      "site": "007fdfd8",
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
            "const:e00:8"
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
      "007fef3c",
      "DATA",
      [
        "storage",
        "00c7de00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fef3c",
      "DATA",
      [
        "storage",
        "00c7edd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdfc8 ["INT_ADD", "register:40f0:8", ["const:7fdfc8:8", "const:4:8"]]
- 007fdfc8 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fef2c ["INT_ADD", "register:40f0:8", ["const:7fef2c:8", "const:4:8"]]
+ 007fef2c ["CALL", null, ["callee:00c58f30:8"]]
- 007fdfd0 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fef34 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fdfd4 ["COPY", "tmp:0:8", ["const:e00:8"]]
- 007fdfd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdfd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdfd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fef38 ["COPY", "tmp:0:8", ["const:dd0:8"]]
+ 007fef38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fef38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fef38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-30a61a4299e7e844637285976be407dd"></a>

### [`007fdfe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdfe8.md) → [`007fef4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fef4c.md) FUN_007fef4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fdff4",
      "DATA",
      [
        "storage",
        "00c7de00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fef58",
      "DATA",
      [
        "storage",
        "00c7edd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdfe8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007fdfe8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007fdfec ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007fdff0 ["COPY", "tmp:0:8", ["const:e00:8"]]
- 007fdff0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fdff0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fdff0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ba70b17be6bfd528f19b70f6ad49093d"></a>

### [`007fe004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe004.md) → [`007fef68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fe/007fef68.md) FUN_007fef68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`008ba29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba29c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007fef88",
      "incomplete_value": true,
      "site": "007fef8c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "live",
            "register:4008:8"
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
      "definition_site": "007fefa8",
      "incomplete_value": true,
      "site": "007fefb4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_SUB",
            "4",
            [
              [
                "live",
                "register:4048:4"
              ],
              [
                "leaf",
                "const:2d:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007fefa0",
      "incomplete_value": false,
      "site": "007fefb4",
      "value": [
        "leaf",
        "const:34:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fe058",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:007fe0a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fefbc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007ff004",
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
- 007fe028 ["INT_ADD", "register:40f0:8", ["const:7fe028:8", "const:4:8"]]
- 007fe028 ["CALL", null, ["callee:008ba29c:8"]]
+ 007fef8c ["INT_ADD", "register:40f0:8", ["const:7fef8c:8", "const:4:8"]]
+ 007fef8c ["CALL", null, ["callee:008ba29c:8"]]
- 007fe050 ["INT_ADD", "register:40f0:8", ["const:7fe050:8", "const:4:8"]]
- 007fe050 ["CALL", null, ["callee:009dde40:8"]]
+ 007fefb4 ["INT_ADD", "register:40f0:8", ["const:7fefb4:8", "const:4:8"]]
+ 007fefb4 ["CALL", null, ["callee:009dde40:8"]]
- 007fe09c ["INT_ADD", "register:40f0:8", ["const:7fe09c:8", "const:4:8"]]
- 007fe09c ["CALL", null, ["callee:008ba17c:8"]]
+ 007ff000 ["INT_ADD", "register:40f0:8", ["const:7ff000:8", "const:4:8"]]
+ 007ff000 ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-94d6c26846b6ab60d45210beeb3b0e6a"></a>

### [`007fe100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe100.md) → [`007ff064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff064.md) FUN_007ff064

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ff084",
      "incomplete_value": false,
      "site": "007ff088",
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
            "const:e50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe120",
      "incomplete_value": false,
      "site": "007fe124",
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
            "const:e80:8"
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
      "007ff088",
      "DATA",
      [
        "storage",
        "00c7de80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ff088",
      "DATA",
      [
        "storage",
        "00c7ee50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe114 ["INT_ADD", "register:40f0:8", ["const:7fe114:8", "const:4:8"]]
- 007fe114 ["CALL", null, ["callee:00c58f30:8"]]
+ 007ff078 ["INT_ADD", "register:40f0:8", ["const:7ff078:8", "const:4:8"]]
+ 007ff078 ["CALL", null, ["callee:00c58f30:8"]]
- 007fe11c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007ff080 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fe120 ["COPY", "tmp:0:8", ["const:e80:8"]]
- 007fe120 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fe120 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fe120 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ff084 ["COPY", "tmp:0:8", ["const:e50:8"]]
+ 007ff084 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ff084 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ff084 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5466fadbdf766e7ca5d0e8dd9b0e7942"></a>

### [`007fe138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe138.md) → [`007ff09c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff09c.md) FUN_007ff09c

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
      "definition_site": "007ff0a4",
      "incomplete_value": false,
      "site": "007ff0a8",
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
            "const:e50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe140",
      "incomplete_value": false,
      "site": "007fe144",
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
            "const:e80:8"
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
      "007ff0a8",
      "DATA",
      [
        "storage",
        "00c7de80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ff0a8",
      "DATA",
      [
        "storage",
        "00c7ee50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe13c ["COPY", "register:4048:8", ["const:c7d000:8"]]
+ 007ff0a0 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007fe140 ["COPY", "tmp:0:8", ["const:e80:8"]]
- 007fe140 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fe140 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fe140 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007ff0a4 ["COPY", "tmp:0:8", ["const:e50:8"]]
+ 007ff0a4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007ff0a4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007ff0a4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9c9f8214e4c289b06346a8b89a7b8010"></a>

### [`007fe158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe158.md) → [`007ff0bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff0bc.md) FUN_007ff0bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 17件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md)
- 新版 呼出元 0件  · 呼出先 17件 [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`004699bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004699bc.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.15% / 新版 92.15%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007ff118",
      "incomplete_value": true,
      "site": "007ff118",
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
      "definition_site": "007fe1b4",
      "incomplete_value": true,
      "site": "007fe1b4",
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
      "definition_site": "007ff120",
      "incomplete_value": false,
      "site": "007ff130",
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
      "definition_site": "007fe1bc",
      "incomplete_value": false,
      "site": "007fe1cc",
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
      "definition_site": "007ff128",
      "incomplete_value": false,
      "site": "007ff130",
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
      "definition_site": "007fe1c4",
      "incomplete_value": false,
      "site": "007fe1cc",
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
      "unmatched:007fe15c",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "unmatched:007fe160",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:007fe164",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007ff0c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "007ff0c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "007ff0c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe1b4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 007fe1b4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007ff118 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 007ff118 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007fe1cc ["INT_ADD", "register:40f0:8", ["const:7fe1cc:8", "const:4:8"]]
- 007fe1cc ["CALL", null, ["callee:00c596b0:8"]]
+ 007ff130 ["INT_ADD", "register:40f0:8", ["const:7ff130:8", "const:4:8"]]
+ 007ff130 ["CALL", null, ["callee:00c596b0:8"]]
- 007fe158 ["INT_SUB", "register:8:8", ["register:8:8", "const:e0:8"]]
~~~


<a id="compare-d293ab1a37c103893448fd3b9b08952a"></a>

### [`007fe54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe54c.md) → [`007ff4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff4b0.md) FUN_007ff4b0

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
      "definition_site": "007ff4d4",
      "incomplete_value": false,
      "site": "007ff4d4",
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
            "const:ed0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe570",
      "incomplete_value": false,
      "site": "007fe570",
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
            "const:f00:8"
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
      "007ff4d4",
      "DATA",
      [
        "storage",
        "00c7df00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ff4d4",
      "DATA",
      [
        "storage",
        "00c7eed0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe560 ["INT_ADD", "register:40f0:8", ["const:7fe560:8", "const:4:8"]]
- 007fe560 ["CALL", null, ["callee:00c58f30:8"]]
+ 007ff4c4 ["INT_ADD", "register:40f0:8", ["const:7ff4c4:8", "const:4:8"]]
+ 007ff4c4 ["CALL", null, ["callee:00c58f30:8"]]
- 007fe568 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007ff4cc ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fe56c ["COPY", "tmp:0:8", ["const:f00:8"]]
- 007fe56c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fe56c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fe56c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ff4d0 ["COPY", "tmp:0:8", ["const:ed0:8"]]
+ 007ff4d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ff4d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ff4d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-854e195824eaeae6133fd2d7ff836901"></a>

### [`007fe580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe580.md) → [`007ff4e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff4e4.md) FUN_007ff4e4

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
      "definition_site": "007ff4f0",
      "incomplete_value": false,
      "site": "007ff4f0",
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
            "const:ed0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe58c",
      "incomplete_value": false,
      "site": "007fe58c",
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
            "const:f00:8"
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
      "007ff4f0",
      "DATA",
      [
        "storage",
        "00c7df00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ff4f0",
      "DATA",
      [
        "storage",
        "00c7eed0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe584 ["COPY", "register:4048:8", ["const:c7d000:8"]]
+ 007ff4e8 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007fe588 ["COPY", "tmp:0:8", ["const:f00:8"]]
- 007fe588 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fe588 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fe588 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007ff4ec ["COPY", "tmp:0:8", ["const:ed0:8"]]
+ 007ff4ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007ff4ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007ff4ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-bc942cedbaf7cf9dc76a3d2d255890c0"></a>

### [`007fe59c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe59c.md) → [`007ff500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff500.md) FUN_007ff500

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ff530",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fe5cc",
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
      "007ff530",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007ff530",
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
- 007fe5cc ["INT_ADD", "register:40f0:8", ["const:7fe5cc:8", "const:4:8"]]
- 007fe5cc ["CALL", null, ["ram:47ad34:8"]]
+ 007ff530 ["INT_ADD", "register:40f0:8", ["const:7ff530:8", "const:4:8"]]
+ 007ff530 ["CALL", null, ["ram:47b054:8"]]
- 007fe5c8 ["INT_ADD", "register:40f0:8", ["const:7fe5c8:8", "const:4:8"]]
- 007fe5c8 ["CALL", null, ["callee:008ba17c:8"]]
+ 007ff52c ["INT_ADD", "register:40f0:8", ["const:7ff52c:8", "const:4:8"]]
+ 007ff52c ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-3bf6c1b84f5e21493d1d392ea36a1ba9"></a>

### [`007fe614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe614.md) → [`007ff578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff578.md) FUN_007ff578

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ff584",
      "incomplete_value": false,
      "site": "007ff588",
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
            "const:f50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe620",
      "incomplete_value": false,
      "site": "007fe624",
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
            "const:f80:8"
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
      "007ff588",
      "DATA",
      [
        "storage",
        "00c7df80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ff588",
      "DATA",
      [
        "storage",
        "00c7ef50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe61c ["COPY", "register:4048:8", ["const:c7d000:8"]]
+ 007ff580 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007fe620 ["COPY", "tmp:0:8", ["const:f80:8"]]
- 007fe620 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fe620 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fe620 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007ff584 ["COPY", "tmp:0:8", ["const:f50:8"]]
+ 007ff584 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007ff584 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007ff584 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d8d1ffe7795ce5076f91a07aa4259886"></a>

### [`007fe638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe638.md) → [`007ff59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff59c.md) FUN_007ff59c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fe644",
      "DATA",
      [
        "storage",
        "00c7df80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ff5a8",
      "DATA",
      [
        "storage",
        "00c7ef50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe638 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:10:8"]]
- 007fe638 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007fe63c ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007fe640 ["COPY", "tmp:0:8", ["const:f80:8"]]
- 007fe640 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fe640 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fe640 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-96a2afe780a84bdd9b6b01cf2986f2ad"></a>

### [`007fe678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe678.md) → [`007ff5dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff5dc.md) FUN_007ff5dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ff614",
      "incomplete_value": false,
      "site": "007ff614",
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
            "const:f50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe6b0",
      "incomplete_value": false,
      "site": "007fe6b0",
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
            "const:f80:8"
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
      "007ff614",
      "DATA",
      [
        "storage",
        "00c7df80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ff614",
      "DATA",
      [
        "storage",
        "00c7ef50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe694 ["INT_ADD", "register:40f0:8", ["const:7fe694:8", "const:4:8"]]
- 007fe694 ["CALL", null, ["callee:00c58f30:8"]]
+ 007ff5f8 ["INT_ADD", "register:40f0:8", ["const:7ff5f8:8", "const:4:8"]]
+ 007ff5f8 ["CALL", null, ["callee:00c58f30:8"]]
- 007fe69c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007ff600 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fe6a0 ["COPY", "tmp:0:8", ["const:f80:8"]]
- 007fe6a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fe6a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fe6a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ff604 ["COPY", "tmp:0:8", ["const:f50:8"]]
+ 007ff604 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ff604 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ff604 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e62f01f257a3b49f7ce91374376ee104"></a>

### [`007fe73c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe73c.md) → [`007ff6a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff6a0.md) FUN_007ff6a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007ff6f4",
      "incomplete_value": true,
      "site": "007ff704",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007ff6f8",
      "incomplete_value": true,
      "site": "007ff704",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": null,
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
      "unmatched:007fe774",
      "DATA",
      [
        "storage",
        "00c7df80",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007fe77c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007ff70c"
      ]
    ]
  ],
  "added": [
    [
      "007ff6d8",
      "DATA",
      [
        "storage",
        "00c7ef50",
        null,
        "undefined *"
      ]
    ],
    [
      "007ff6e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007ff70c"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe7a0 ["INT_ADD", "register:40f0:8", ["const:7fe7a0:8", "const:4:8"]]
- 007fe7a0 ["CALL", null, ["callee:00c590a0:8"]]
+ 007ff704 ["INT_ADD", "register:40f0:8", ["const:7ff704:8", "const:4:8"]]
+ 007ff704 ["CALL", null, ["callee:00c590a0:8"]]
- 007fe76c ["COPY", "register:4050:8", ["const:c7d000:8"]]
+ 007ff6d0 ["COPY", "register:4050:8", ["const:c7e000:8"]]
- 007fe770 ["COPY", "tmp:0:8", ["const:f80:8"]]
- 007fe770 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007fe770 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007fe770 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-8e88c4e9c2afbe366d881f8ddfa415c6"></a>

### [`007fe804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe804.md) → [`007ff768`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff768.md) FUN_007ff768

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007cb638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007cc59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cc/007cc59c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007fe808 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 007fe808 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007ff76c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 007ff76c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 007fe824 ["INT_ADD", "register:40f0:8", ["const:7fe824:8", "const:4:8"]]
- 007fe824 ["CALL", null, ["callee:00c58f50:8"]]
+ 007ff788 ["INT_ADD", "register:40f0:8", ["const:7ff788:8", "const:4:8"]]
+ 007ff788 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-18ad0be4952452220640a6f0f770f488"></a>

### [`007fe838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe838.md) → [`007ff79c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff79c.md) FUN_007ff79c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 15件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007fef58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fef58.md) [`007fef5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fef5c.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007ffebc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ffebc.md) [`007ffec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ffec0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.78% / 新版 86.78%

優先判定に残った影響 `call_argument_candidate` 20件, `call_target` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ff7ec",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fe888",
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
    "new": null,
    "old": {
      "definition_site": "007fe954",
      "incomplete_value": true,
      "site": "007fe96c",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007fe958",
      "incomplete_value": true,
      "site": "007fe96c",
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
      "007ff7e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007fe8a4"
      ]
    ],
    [
      "007ff7ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:007fe8a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007ff7e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007ff808"
      ]
    ],
    [
      "007ff7ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007ff808",
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
- 007fe888 ["INT_ADD", "register:40f0:8", ["const:7fe888:8", "const:4:8"]]
- 007fe888 ["CALL", null, ["ram:47ad34:8"]]
+ 007ff7ec ["INT_ADD", "register:40f0:8", ["const:7ff7ec:8", "const:4:8"]]
+ 007ff7ec ["CALL", null, ["ram:47b054:8"]]
- 007fe96c ["INT_ADD", "register:40f0:8", ["const:7fe96c:8", "const:4:8"]]
- 007fe96c ["CALL", null, ["callee:008bb86c:8"]]
+ 007ff8d0 ["INT_ADD", "register:40f0:8", ["const:7ff8d0:8", "const:4:8"]]
+ 007ff8d0 ["CALL", null, ["callee:008bb86c:8"]]
- 007fea20 ["INT_ADD", "register:40f0:8", ["const:7fea20:8", "const:4:8"]]
- 007fea20 ["CALL", null, ["ram:8040cc:8"]]
+ 007ff984 ["INT_ADD", "register:40f0:8", ["const:7ff984:8", "const:4:8"]]
+ 007ff984 ["CALL", null, ["ram:805030:8"]]
~~~


<a id="compare-46d43c25faef8b48d6e399fcc47e734a"></a>

### [`007fef24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fef24.md) → [`007ffe88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ffe88.md) FUN_007ffe88

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
      "definition_site": "007ffe9c",
      "incomplete_value": false,
      "site": "007ffea0",
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
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fef38",
      "incomplete_value": false,
      "site": "007fef3c",
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
            "const:ff0:8"
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
      "007ffea0",
      "DATA",
      [
        "storage",
        "00c7dff0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ffea0",
      "DATA",
      [
        "storage",
        "00c7efc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fef30 ["INT_ADD", "register:40f0:8", ["const:7fef30:8", "const:4:8"]]
- 007fef30 ["CALL", null, ["callee:00c58f30:8"]]
+ 007ffe94 ["INT_ADD", "register:40f0:8", ["const:7ffe94:8", "const:4:8"]]
+ 007ffe94 ["CALL", null, ["callee:00c58f30:8"]]
- 007fef34 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007ffe98 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fef38 ["COPY", "tmp:0:8", ["const:ff0:8"]]
- 007fef38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fef38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fef38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ffe9c ["COPY", "tmp:0:8", ["const:fc0:8"]]
+ 007ffe9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ffe9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ffe9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-aeb1b5c4c82ced2f3cfcc15056001e57"></a>

### [`007fef48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fef48.md) → [`007ffeac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ffeac.md) FUN_007ffeac

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
      "definition_site": "007ffeb0",
      "incomplete_value": false,
      "site": "007ffeb4",
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
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fef4c",
      "incomplete_value": false,
      "site": "007fef50",
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
            "const:ff0:8"
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
      "007ffeb4",
      "DATA",
      [
        "storage",
        "00c7dff0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ffeb4",
      "DATA",
      [
        "storage",
        "00c7efc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fef48 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007ffeac ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fef4c ["COPY", "tmp:0:8", ["const:ff0:8"]]
- 007fef4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fef4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fef4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ffeb0 ["COPY", "tmp:0:8", ["const:fc0:8"]]
+ 007ffeb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ffeb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ffeb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ae9b281168753f3a6fe81420608e2c8f"></a>

### [`007fef60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fef60.md) → [`007ffec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ffec4.md) FUN_007ffec4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007fef68 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007fef68 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 007ffecc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007ffecc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-321e1553621e2e367df6017ba4c06ecd"></a>

### [`007fefa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fefa4.md) → [`007fff08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007fff08.md) FUN_007fff08

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
      "definition_site": "007fff1c",
      "incomplete_value": false,
      "site": "007fff20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fefb8",
      "incomplete_value": false,
      "site": "007fefbc",
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
            "const:70:8"
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
      "007fff20",
      "DATA",
      [
        "storage",
        "00c7e070",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fff20",
      "DATA",
      [
        "storage",
        "00c7f040",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fefb0 ["INT_ADD", "register:40f0:8", ["const:7fefb0:8", "const:4:8"]]
- 007fefb0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fff14 ["INT_ADD", "register:40f0:8", ["const:7fff14:8", "const:4:8"]]
+ 007fff14 ["CALL", null, ["callee:00c58f30:8"]]
- 007fefb4 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 007fff18 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 007fefb8 ["COPY", "tmp:0:8", ["const:70:8"]]
- 007fefb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fefb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fefb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fff1c ["COPY", "tmp:0:8", ["const:40:8"]]
+ 007fff1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fff1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fff1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7d8aa87cb00f0d9ac2e3025800f4eea6"></a>

### [`007fefc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fefc8.md) → [`007fff2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007fff2c.md) FUN_007fff2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fefd0",
      "DATA",
      [
        "storage",
        "00c7e070",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fff34",
      "DATA",
      [
        "storage",
        "00c7f040",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fefc8 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fefcc ["COPY", "tmp:0:8", ["const:70:8"]]
- 007fefcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fefcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fefcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007fefd0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 007fefd0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-b535367c6663de95acca2326c101ccb4"></a>

### [`007fefe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fefe0.md) → [`007fff44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007fff44.md) FUN_007fff44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fefe8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007fff58"
      ]
    ]
  ],
  "added": [
    [
      "007fff4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007fff58"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fefe0 ["COPY", "tmp:0:8", ["register:4010:8"]]
- 007fefe0 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 007fefe0 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 007fefe4 ["COPY", "tmp:0:4", ["const:2:4"]]
- 007fefe4 ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 007fefe4 ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 007fefe4 ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
- 007fefe8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007fefe8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-a474fa5ed3dd8562827aa6c5b1e94f0d"></a>

### [`007ff020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff020.md) → [`007fff84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007fff84.md) FUN_007fff84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fff90",
      "incomplete_value": false,
      "site": "007fff94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ff02c",
      "incomplete_value": false,
      "site": "007ff030",
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
            "const:100:8"
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
      "007fff94",
      "DATA",
      [
        "storage",
        "00c7e100",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fff94",
      "DATA",
      [
        "storage",
        "00c7f0d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff028 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 007fff8c ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 007ff02c ["COPY", "tmp:0:8", ["const:100:8"]]
- 007ff02c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007ff02c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007ff02c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fff90 ["COPY", "tmp:0:8", ["const:d0:8"]]
+ 007fff90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fff90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fff90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9bf91fb7c66dafb629cd0561ae428645"></a>

### [`007ff044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff044.md) → [`007fffa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007fffa8.md) FUN_007fffa8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fffb0",
      "incomplete_value": false,
      "site": "007fffb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ff04c",
      "incomplete_value": false,
      "site": "007ff050",
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
            "const:100:8"
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
      "007fffb4",
      "DATA",
      [
        "storage",
        "00c7e100",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fffb4",
      "DATA",
      [
        "storage",
        "00c7f0d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff048 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 007fffac ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 007ff04c ["COPY", "tmp:0:8", ["const:100:8"]]
- 007ff04c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007ff04c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007ff04c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fffb0 ["COPY", "tmp:0:8", ["const:d0:8"]]
+ 007fffb0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fffb0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fffb0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007ff070 ["INT_ADD", "register:40f0:8", ["const:7ff070:8", "const:4:8"]]
- 007ff070 ["CALL", null, ["callee:00c58f50:8"]]
+ 007fffd4 ["INT_ADD", "register:40f0:8", ["const:7fffd4:8", "const:4:8"]]
+ 007fffd4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-677d11fca8b57d93afd8c770f68d6632"></a>

### [`007ff084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff084.md) → [`007fffe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007fffe8.md) FUN_007fffe8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007ff098",
      "incomplete_value": false,
      "site": "007ff09c",
      "value": [
        "leaf",
        "const:28:8"
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
      "definition_site": "007ff0dc",
      "incomplete_value": true,
      "site": "007ff0ec",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "007ff0e0",
      "incomplete_value": true,
      "site": "007ff0ec",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:007ff0b4",
      "DATA",
      [
        "storage",
        "00c7e100",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007ff0c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00800058"
      ]
    ]
  ],
  "added": [
    [
      "00800018",
      "DATA",
      [
        "storage",
        "00c7f0d0",
        null,
        "undefined *"
      ]
    ],
    [
      "0080002c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00800058"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff09c ["INT_ADD", "register:40f0:8", ["const:7ff09c:8", "const:4:8"]]
- 007ff09c ["CALL", null, ["callee:00c58f30:8"]]
+ 00800000 ["INT_ADD", "register:40f0:8", ["const:800000:8", "const:4:8"]]
+ 00800000 ["CALL", null, ["callee:00c58f30:8"]]
- 007ff0ec ["INT_ADD", "register:40f0:8", ["const:7ff0ec:8", "const:4:8"]]
- 007ff0ec ["CALL", null, ["callee:00c590a0:8"]]
+ 00800050 ["INT_ADD", "register:40f0:8", ["const:800050:8", "const:4:8"]]
+ 00800050 ["CALL", null, ["callee:00c590a0:8"]]
- 007ff10c ["INT_ADD", "register:40f0:8", ["const:7ff10c:8", "const:4:8"]]
- 007ff10c ["CALL", null, ["callee:00470ba0:8"]]
+ 00800070 ["INT_ADD", "register:40f0:8", ["const:800070:8", "const:4:8"]]
+ 00800070 ["CALL", null, ["callee:00470ba0:8"]]
~~~


<a id="compare-50f7724c91fd53fc667251069adec164"></a>

### [`007ff138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff138.md) → [`0080009c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/0080009c.md) FUN_0080009c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008000c8",
      "incomplete_value": false,
      "site": "008000c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ff164",
      "incomplete_value": false,
      "site": "007ff164",
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
            "const:100:8"
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
    "new": null,
    "old": {
      "definition_site": "007ff184",
      "incomplete_value": true,
      "site": "007ff194",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "007ff188",
      "incomplete_value": true,
      "site": "007ff194",
      "value": [
        "live",
        "register:40b0:8"
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
      "008000c8",
      "DATA",
      [
        "storage",
        "00c7e100",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008000c8",
      "DATA",
      [
        "storage",
        "00c7f0d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff194 ["INT_ADD", "register:40f0:8", ["const:7ff194:8", "const:4:8"]]
- 007ff194 ["CALL", null, ["callee:00c590a0:8"]]
+ 008000f8 ["INT_ADD", "register:40f0:8", ["const:8000f8:8", "const:4:8"]]
+ 008000f8 ["CALL", null, ["callee:00c590a0:8"]]
- 007ff1b0 ["INT_ADD", "register:40f0:8", ["const:7ff1b0:8", "const:4:8"]]
- 007ff1b0 ["CALL", null, ["callee:00470ba0:8"]]
+ 00800114 ["INT_ADD", "register:40f0:8", ["const:800114:8", "const:4:8"]]
+ 00800114 ["CALL", null, ["callee:00470ba0:8"]]
- 007ff158 ["COPY", "register:4050:8", ["const:c7e000:8"]]
+ 008000bc ["COPY", "register:4050:8", ["const:c7f000:8"]]
~~~


<a id="compare-128a66e1c722f6479003bc563bca8170"></a>

### [`007ff1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff1ec.md) → [`00800150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800150.md) FUN_00800150

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007c9174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c9/007c9174.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007ca0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ca/007ca0d8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007ff208",
      "incomplete_value": true,
      "site": "007ff20c",
      "value": [
        "live",
        "register:4040:8"
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
      "unmatched:007ff1f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ff1f8",
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
      "00800158",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0080015c",
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
- 007ff20c ["INT_ADD", "register:40f0:8", ["const:7ff20c:8", "const:4:8"]]
- 007ff20c ["CALL", null, ["callee:00c58f50:8"]]
+ 00800170 ["INT_ADD", "register:40f0:8", ["const:800170:8", "const:4:8"]]
+ 00800170 ["CALL", null, ["callee:00c58f50:8"]]
- 007ff1f0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 007ff1f0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00800154 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00800154 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007ff1f4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007ff1f4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007ff1f4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007ff1f4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-04705c3037b93ff0046d1a936b1fd919"></a>

### [`007ff220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff220.md) → [`00800184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800184.md) FUN_00800184

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_target` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008001b0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ff24c",
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
      "unmatched:007ff240",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:007ff248",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008001b8"
      ]
    ],
    [
      "008001b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008001a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008001ac",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008001b8"
      ]
    ],
    [
      "008001b0",
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
- 007ff24c ["INT_ADD", "register:40f0:8", ["const:7ff24c:8", "const:4:8"]]
- 007ff24c ["CALL", null, ["ram:47ad34:8"]]
+ 008001b0 ["INT_ADD", "register:40f0:8", ["const:8001b0:8", "const:4:8"]]
+ 008001b0 ["CALL", null, ["ram:47b054:8"]]
- 007ff230 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 00800194 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
- 007ff238 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 0080019c ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-940141a6e904c53154d89357afe0e1b4"></a>

### [`007ff32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff32c.md) → [`00800290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800290.md) FUN_00800290

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008002b0",
      "incomplete_value": false,
      "site": "008002b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ff34c",
      "incomplete_value": false,
      "site": "007ff350",
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
            "const:180:8"
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
      "008002b4",
      "DATA",
      [
        "storage",
        "00c7e180",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008002b4",
      "DATA",
      [
        "storage",
        "00c7f150",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff340 ["INT_ADD", "register:40f0:8", ["const:7ff340:8", "const:4:8"]]
- 007ff340 ["CALL", null, ["callee:00c58f30:8"]]
+ 008002a4 ["INT_ADD", "register:40f0:8", ["const:8002a4:8", "const:4:8"]]
+ 008002a4 ["CALL", null, ["callee:00c58f30:8"]]
- 007ff348 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 008002ac ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 007ff34c ["COPY", "tmp:0:8", ["const:180:8"]]
- 007ff34c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ff34c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ff34c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008002b0 ["COPY", "tmp:0:8", ["const:150:8"]]
+ 008002b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008002b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008002b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b2161a51a7cf2fe880a38a2eebf01fae"></a>

### [`007ff364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff364.md) → [`008002c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/008002c8.md) FUN_008002c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ff36c",
      "DATA",
      [
        "storage",
        "00c7e180",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008002d0",
      "DATA",
      [
        "storage",
        "00c7f150",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff364 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007ff368 ["COPY", "tmp:0:8", ["const:180:8"]]
- 007ff368 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ff368 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ff368 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007ff36c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 007ff36c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-d95eed56bdd780d0c5bec1f7d9af2010"></a>

### [`007ff384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff384.md) → [`008002e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/008002e8.md) FUN_008002e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007ff614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff614.md) [`007ff618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff618.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00800578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800578.md) [`0080057c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/0080057c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.27% / 新版 87.27%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00800320",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ff3bc",
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
      "site": "0080033c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ff3d8",
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
    "new": null,
    "old": {
      "definition_site": "007ff4b0",
      "incomplete_value": true,
      "site": "007ff4c8",
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
      "00800320",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0080033c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0080038c",
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
      "00800320",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0080033c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0080038c",
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
- 007ff3bc ["INT_ADD", "register:40f0:8", ["const:7ff3bc:8", "const:4:8"]]
- 007ff3bc ["CALL", null, ["ram:47ad34:8"]]
+ 00800320 ["INT_ADD", "register:40f0:8", ["const:800320:8", "const:4:8"]]
+ 00800320 ["CALL", null, ["ram:47b054:8"]]
- 007ff3d8 ["INT_ADD", "register:40f0:8", ["const:7ff3d8:8", "const:4:8"]]
- 007ff3d8 ["CALL", null, ["ram:47ad34:8"]]
+ 0080033c ["INT_ADD", "register:40f0:8", ["const:80033c:8", "const:4:8"]]
+ 0080033c ["CALL", null, ["ram:47b054:8"]]
- 007ff4c8 ["INT_ADD", "register:40f0:8", ["const:7ff4c8:8", "const:4:8"]]
- 007ff4c8 ["CALL", null, ["callee:008bbccc:8"]]
+ 0080042c ["INT_ADD", "register:40f0:8", ["const:80042c:8", "const:4:8"]]
+ 0080042c ["CALL", null, ["callee:008bbccc:8"]]
~~~


<a id="compare-54502e51f843fd4ad12452452555dc63"></a>

### [`007ff5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff5c4.md) → [`00800528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800528.md) FUN_00800528

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ff5e8",
      "DATA",
      [
        "storage",
        "00c7e1f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0080054c",
      "DATA",
      [
        "storage",
        "00c7f1c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff5d8 ["INT_ADD", "register:40f0:8", ["const:7ff5d8:8", "const:4:8"]]
- 007ff5d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0080053c ["INT_ADD", "register:40f0:8", ["const:80053c:8", "const:4:8"]]
+ 0080053c ["CALL", null, ["callee:00c58f30:8"]]
- 007ff5e0 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00800544 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 007ff5e4 ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 007ff5e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ff5e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ff5e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6b9688d4a87e8a274b063ddb5c107bb7"></a>

### [`007ff5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff5fc.md) → [`00800560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800560.md) FUN_00800560

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
      "definition_site": "00800564",
      "incomplete_value": false,
      "site": "00800568",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ff600",
      "incomplete_value": false,
      "site": "007ff604",
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
            "const:1f0:8"
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
      "00800568",
      "DATA",
      [
        "storage",
        "00c7e1f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00800568",
      "DATA",
      [
        "storage",
        "00c7f1c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff5fc ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00800560 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 007ff600 ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 007ff600 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ff600 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ff600 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00800564 ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 00800564 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00800564 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00800564 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2aa8b1f378d2267acb7552cbff26ca30"></a>

### [`007ff61c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff61c.md) → [`00800580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800580.md) FUN_00800580

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "008005a4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ff640",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "008005a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008005a4",
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
- 007ff640 ["INT_ADD", "register:40f0:8", ["const:7ff640:8", "const:4:8"]]
- 007ff640 ["CALL", null, ["ram:47ad34:8"]]
+ 008005a4 ["INT_ADD", "register:40f0:8", ["const:8005a4:8", "const:4:8"]]
+ 008005a4 ["CALL", null, ["ram:47b054:8"]]
- 007ff64c ["INT_ADD", "register:40f0:8", ["const:7ff64c:8", "const:4:8"]]
- 007ff64c ["CALL", null, ["callee:0047d134:8"]]
+ 008005b0 ["INT_ADD", "register:40f0:8", ["const:8005b0:8", "const:4:8"]]
+ 008005b0 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-7d9f1a10a2a7def17391bd0699534844"></a>

### [`007ff690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff690.md) → [`008005f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/008005f4.md) FUN_008005f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 35.71% / 新版 35.71%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ff690",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ff694",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ff6b4",
      "DATA",
      [
        "storage",
        "00c7e280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008005f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008005f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00800618",
      "DATA",
      [
        "storage",
        "00c7f250",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff690 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007ff690 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007ff690 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007ff690 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007ff694 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007ff694 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007ff698 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-13c6d4a0c97352fa18427884b4a79447"></a>

### [`007ff6c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff6c8.md) → [`0080062c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/0080062c.md) FUN_0080062c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ff6d0",
      "DATA",
      [
        "storage",
        "00c7e280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00800634",
      "DATA",
      [
        "storage",
        "00c7f250",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff6c8 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007ff6cc ["COPY", "tmp:0:8", ["const:280:8"]]
- 007ff6cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ff6cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ff6cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007ff6d0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 007ff6d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-79522dc92ffbf617993fce13608ff49b"></a>

### [`007ff6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff6e8.md) → [`0080064c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/0080064c.md) FUN_0080064c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007ff8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff8f0.md) [`007ff8f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff8f4.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00800854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800854.md) [`00800858`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800858.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `call_target` 1件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008006ec",
      "incomplete_value": false,
      "site": "008006ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:2c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ff788",
      "incomplete_value": false,
      "site": "007ff788",
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
            "const:2f0:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00800684",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ff720",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "0080067c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007ff73c"
      ]
    ],
    [
      "00800684",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:007ff73c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0080067c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008006a0"
      ]
    ],
    [
      "00800684",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008006a0",
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
- 007ff720 ["INT_ADD", "register:40f0:8", ["const:7ff720:8", "const:4:8"]]
- 007ff720 ["CALL", null, ["ram:47ad34:8"]]
+ 00800684 ["INT_ADD", "register:40f0:8", ["const:800684:8", "const:4:8"]]
+ 00800684 ["CALL", null, ["ram:47b054:8"]]
- 007ff710 ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
+ 00800674 ["CBRANCH", null, ["local:b8:8", "register:101:1"]]
- 007ff71c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007ff71c ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
+ 00800680 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00800680 ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
~~~


<a id="compare-336f283757ce2fd6037f26df35c607cb"></a>

### [`007ff8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff8a8.md) → [`0080080c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/0080080c.md) FUN_0080080c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 46.15% / 新版 46.15%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ff8ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ff8cc",
      "DATA",
      [
        "storage",
        "00c7e2f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007ff8d0",
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
      "00800810",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00800830",
      "DATA",
      [
        "storage",
        "00c7f2c0",
        null,
        "undefined *"
      ]
    ],
    [
      "00800834",
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
- 007ff8ac ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007ff8ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007ff8b0 ["COPY", "register:40e8:8", ["register:8:8"]]
- 007ff8bc ["INT_ADD", "register:40f0:8", ["const:7ff8bc:8", "const:4:8"]]
- 007ff8bc ["CALL", null, ["callee:00c58f30:8"]]
+ 00800820 ["INT_ADD", "register:40f0:8", ["const:800820:8", "const:4:8"]]
+ 00800820 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-d425ab910d3a14e1284558b70ed70f03"></a>

### [`007ff8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff8dc.md) → [`00800840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800840.md) FUN_00800840

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ff8e8",
      "DATA",
      [
        "storage",
        "00c7e2f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0080084c",
      "DATA",
      [
        "storage",
        "00c7f2c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff8dc ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007ff8dc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007ff8e0 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007ff8e4 ["COPY", "tmp:0:8", ["const:2f0:8"]]
- 007ff8e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007ff8e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007ff8e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0ca3384063ef1ffb29079206bc63798c"></a>

### [`007ff8f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff8f8.md) → [`0080085c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/0080085c.md) FUN_0080085c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00800884",
      "incomplete_value": false,
      "site": "0080088c",
      "value": [
        "leaf",
        "const:b:8"
      ]
    },
    "old": null,
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
      "unmatched:007ff900",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008008a0"
      ]
    ],
    [
      "unmatched:007ff91c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00800864",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008008a0"
      ]
    ],
    [
      "00800880",
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
- 007ff928 ["INT_ADD", "register:40f0:8", ["const:7ff928:8", "const:4:8"]]
- 007ff928 ["CALL", null, ["callee:0047d134:8"]]
+ 0080088c ["INT_ADD", "register:40f0:8", ["const:80088c:8", "const:4:8"]]
+ 0080088c ["CALL", null, ["callee:0047d134:8"]]
- 007ff8f8 ["COPY", "tmp:0:8", ["register:4010:8"]]
- 007ff8f8 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 007ff8f8 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 007ff8fc ["COPY", "tmp:0:4", ["const:2:4"]]
- 007ff8fc ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 007ff8fc ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 007ff8fc ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
~~~


<a id="compare-4fecb8947d3d1e0bdf35cb554129488c"></a>

### [`007ff96c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff96c.md) → [`008008d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/008008d0.md) FUN_008008d0

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
      "unmatched:007ff96c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ff970",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ff990",
      "DATA",
      [
        "storage",
        "00c7e380",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008008d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008008d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008008f4",
      "DATA",
      [
        "storage",
        "00c7f350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff96c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007ff96c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007ff96c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007ff96c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007ff970 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007ff970 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007ff974 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-4948b085e1562d4db05041058c9aa8b1"></a>

### [`007ff9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff9a0.md) → [`00800904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800904.md) FUN_00800904

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
      "definition_site": "00800910",
      "incomplete_value": false,
      "site": "00800910",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ff9ac",
      "incomplete_value": false,
      "site": "007ff9ac",
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
            "const:380:8"
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
      "00800910",
      "DATA",
      [
        "storage",
        "00c7e380",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00800910",
      "DATA",
      [
        "storage",
        "00c7f350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff9a4 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 00800908 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 007ff9a8 ["COPY", "tmp:0:8", ["const:380:8"]]
- 007ff9a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007ff9a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007ff9a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0080090c ["COPY", "tmp:0:8", ["const:350:8"]]
+ 0080090c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0080090c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0080090c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-457d9c9b36de02a0f8d97dcbf30bf13b"></a>

### [`007ffa5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ffa5c.md) → [`008009c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/008009c0.md) FUN_008009c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ffa68",
      "DATA",
      [
        "storage",
        "00c7e400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008009cc",
      "DATA",
      [
        "storage",
        "00c7f3d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ffa5c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:18:8"]]
- 007ffa5c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 007ffa5c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 007ffa60 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007ffa64 ["COPY", "tmp:0:8", ["const:400:8"]]
- 007ffa64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007ffa64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007ffa64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0935f6580bb0c9269a6e1a4d8fdea053"></a>

### [`007ffa7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ffa7c.md) → [`008009e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/008009e0.md) FUN_008009e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007ffa88",
      "DATA",
      [
        "storage",
        "00c7e400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008009ec",
      "DATA",
      [
        "storage",
        "00c7f3d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ffa7c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:18:8"]]
- 007ffa7c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 007ffa7c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 007ffa80 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007ffa84 ["COPY", "tmp:0:8", ["const:400:8"]]
- 007ffa84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007ffa84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007ffa84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


