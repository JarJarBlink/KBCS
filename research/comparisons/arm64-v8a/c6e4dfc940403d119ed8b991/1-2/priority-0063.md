# v16.0.2 → v16.0.3 · 最優先の変更候補 (63)

[一覧の目次](README.md)

<a id="compare-b82de2eeacd076ebe36d25fdbb8b0d8e"></a>

### [`008e82b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e82b8.md) → [`008e9264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9264.md) FUN_008e9264

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008e3148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3148.md) [`008e49f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e49f4.md) [`008e86a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e86a4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`008e40f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e4/008e40f4.md) [`008e59a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e59a0.md) [`008e9650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9650.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e9270",
      "incomplete_value": false,
      "site": "008e9274",
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
      "definition_site": "008e82c4",
      "incomplete_value": false,
      "site": "008e82c8",
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
      "008e9270",
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
      "008e9270",
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
- 008e82c8 ["INT_ADD", "register:40f0:8", ["const:8e82c8:8", "const:4:8"]]
- 008e82c8 ["CALL", null, ["callee:0043bad8:8"]]
+ 008e9274 ["INT_ADD", "register:40f0:8", ["const:8e9274:8", "const:4:8"]]
+ 008e9274 ["CALL", null, ["callee:0043bad8:8"]]
- 008e82c0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008e926c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008e82c4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008e82c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e82c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e82c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e9270 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008e9270 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e9270 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e9270 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-bd7449c47dbfa1f11ba5fead4d9c2559"></a>

### [`008e85a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e85a0.md) → [`008e954c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e954c.md) FUN_008e954c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008e83bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e83bc.md) [`008e8e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8e94.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`008e9368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9368.md) [`008e9e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9e40.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e9558",
      "incomplete_value": false,
      "site": "008e955c",
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
      "definition_site": "008e85ac",
      "incomplete_value": false,
      "site": "008e85b0",
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
      "008e9558",
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
      "008e9558",
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
- 008e85b0 ["INT_ADD", "register:40f0:8", ["const:8e85b0:8", "const:4:8"]]
- 008e85b0 ["CALL", null, ["callee:0043bad8:8"]]
+ 008e955c ["INT_ADD", "register:40f0:8", ["const:8e955c:8", "const:4:8"]]
+ 008e955c ["CALL", null, ["callee:0043bad8:8"]]
- 008e85a8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008e9554 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008e85ac ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008e85ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e85ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e85ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e9558 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008e9558 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e9558 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e9558 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4708260c2f4cd2413de8287fc8f120fd"></a>

### [`008e8690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8690.md) → [`008e963c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e963c.md) FUN_008e963c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008e45e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45e4.md) [`008e8d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8d0c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`008e5590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e5590.md) [`008e9cb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9cb8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e9648",
      "incomplete_value": false,
      "site": "008e964c",
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
      "definition_site": "008e869c",
      "incomplete_value": false,
      "site": "008e86a0",
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
      "008e9648",
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
      "008e9648",
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
- 008e86a0 ["INT_ADD", "register:40f0:8", ["const:8e86a0:8", "const:4:8"]]
- 008e86a0 ["CALL", null, ["callee:0043bad8:8"]]
+ 008e964c ["INT_ADD", "register:40f0:8", ["const:8e964c:8", "const:4:8"]]
+ 008e964c ["CALL", null, ["callee:0043bad8:8"]]
- 008e8698 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008e9644 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008e869c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008e869c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e869c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e869c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e9648 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008e9648 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e9648 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e9648 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-d2cc62abfc03fe1fee0aa7b7780de63a"></a>

### [`008e8860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8860.md) → [`008e980c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e980c.md) FUN_008e980c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008e2910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2910.md) [`008e45e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45e4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`008e38bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e3/008e38bc.md) [`008e5590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e5590.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e9818",
      "incomplete_value": false,
      "site": "008e981c",
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
      "definition_site": "008e886c",
      "incomplete_value": false,
      "site": "008e8870",
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
      "008e9818",
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
      "008e9818",
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
- 008e8870 ["INT_ADD", "register:40f0:8", ["const:8e8870:8", "const:4:8"]]
- 008e8870 ["CALL", null, ["callee:0043bad8:8"]]
+ 008e981c ["INT_ADD", "register:40f0:8", ["const:8e981c:8", "const:4:8"]]
+ 008e981c ["CALL", null, ["callee:0043bad8:8"]]
- 008e8868 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008e9814 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008e886c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008e886c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e886c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e886c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e9818 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008e9818 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e9818 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e9818 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-595e6e9ac79d2064e7e1d4e37ff0145b"></a>

### [`008e8a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8a58.md) → [`008e9a04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9a04.md) FUN_008e9a04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008e8874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8874.md) [`008e8fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8fdc.md) [`008ea5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea5ec.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`008e9820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9820.md) [`008e9f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9f88.md) [`008eb598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb598.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e9a10",
      "incomplete_value": false,
      "site": "008e9a14",
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
      "definition_site": "008e8a64",
      "incomplete_value": false,
      "site": "008e8a68",
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
      "008e9a10",
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
      "008e9a10",
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
- 008e8a68 ["INT_ADD", "register:40f0:8", ["const:8e8a68:8", "const:4:8"]]
- 008e8a68 ["CALL", null, ["callee:0043bad8:8"]]
+ 008e9a14 ["INT_ADD", "register:40f0:8", ["const:8e9a14:8", "const:4:8"]]
+ 008e9a14 ["CALL", null, ["callee:0043bad8:8"]]
- 008e8a60 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008e9a0c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008e8a64 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008e8a64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e8a64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e8a64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e9a10 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008e9a10 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e9a10 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e9a10 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-11f6099d81050a661cd87af9ed7ecfba"></a>

### [`008e8ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8ca4.md) → [`008e9c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9c50.md) FUN_008e9c50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008e8ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8ac0.md) [`008e918c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e918c.md) [`008ea3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea3f0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`008e9a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9a6c.md) [`008ea138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea138.md) [`008eb39c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb39c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e9c5c",
      "incomplete_value": false,
      "site": "008e9c60",
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
      "definition_site": "008e8cb0",
      "incomplete_value": false,
      "site": "008e8cb4",
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
      "008e9c5c",
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
      "008e9c5c",
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
- 008e8cb4 ["INT_ADD", "register:40f0:8", ["const:8e8cb4:8", "const:4:8"]]
- 008e8cb4 ["CALL", null, ["callee:0043bad8:8"]]
+ 008e9c60 ["INT_ADD", "register:40f0:8", ["const:8e9c60:8", "const:4:8"]]
+ 008e9c60 ["CALL", null, ["callee:0043bad8:8"]]
- 008e8cac ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008e9c58 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008e8cb0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008e8cb0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e8cb0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e8cb0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e9c5c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008e9c5c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e9c5c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e9c5c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-323ff2bbfc59ac8b8bf8e6097b42360d"></a>

### [`008e8fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8fdc.md) → [`008e9f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9f88.md) FUN_008e9f88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008e2910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2910.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008e8a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8a58.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e38bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e3/008e38bc.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008e9a04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9a04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.78% / 新版 98.78%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008e9118",
      "incomplete_value": true,
      "site": "008e911c",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:008e90d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ea094"
      ]
    ]
  ],
  "added": [
    [
      "008ea07c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ea094"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e911c ["INT_ADD", "register:40f0:8", ["const:8e911c:8", "const:4:8"]]
- 008e911c ["CALL", null, ["callee:008e9a04:8"]]
+ 008ea0c8 ["INT_ADD", "register:40f0:8", ["const:8ea0c8:8", "const:4:8"]]
+ 008ea0c8 ["CALL", null, ["callee:008e9a04:8"]]
- 008e9008 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 008e9008 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
+ 008e9fb4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 008e9fb4 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
- 008e903c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008e903c ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 008e9fe8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008e9fe8 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
~~~


<a id="compare-e24176be1d7b9e5c87ed51a55509054a"></a>

### [`008e9124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9124.md) → [`008ea0d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea0d0.md) FUN_008ea0d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `unresolved_store_alignment` 1件

~~~diff
- 008e9144 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 008e9144 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 008ea0f0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008ea0f0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 008e9164 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:10:8"]]
- 008e9164 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 008e9174 ["INT_ADD", "register:40f0:8", ["const:8e9174:8", "const:4:8"]]
- 008e9174 ["CALL", null, ["callee:00c58f50:8"]]
+ 008ea120 ["INT_ADD", "register:40f0:8", ["const:8ea120:8", "const:4:8"]]
+ 008ea120 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-0fe4ae5357435ef930dcea5d81169975"></a>

### [`008e918c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e918c.md) → [`008ea138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea138.md) FUN_008ea138

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008e2910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2910.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008e8ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8ca4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e38bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e3/008e38bc.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008e9c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9c50.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 91.46% / 新版 91.46%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "008e92b0",
      "incomplete_value": true,
      "site": "008e92c4",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:008e91b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ea274"
      ]
    ]
  ],
  "added": [
    [
      "008ea164",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ea274"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e91b8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 008e91b8 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
- 008e91cc ["INT_SRIGHT", "register:4050:8", ["register:4048:8", "const:4:8"]]
- 008e91d0 ["INT_LESSEQUAL", "register:105:1", ["register:4040:8", "register:4050:8"]]
- 008e91d0 ["INT_SBORROW", "register:106:1", ["register:4050:8", "register:4040:8"]]
- 008e91d0 ["INT_SUB", "tmp:0:8", ["register:4050:8", "register:4040:8"]]
- 008e91d0 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-f36b5e597e326e60546425cb0f66a1e5"></a>

### [`008e92d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e92d4.md) → [`008ea280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea280.md) FUN_008ea280

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008e930c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ea29c"
      ]
    ]
  ],
  "added": [
    [
      "008ea2b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ea29c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e92ec ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008e92ec ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 008ea298 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008ea298 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 008e92f4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 008e92f4 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 008ea2a0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008ea2a0 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 008e930c ["CBRANCH", null, ["local:b1:8", "register:101:1"]]
~~~


<a id="compare-7326a533f51bd9ff2ca50a9d77c0464e"></a>

### [`008e9340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9340.md) → [`008ea2ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea2ec.md) FUN_008ea2ec

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
      "definition_site": "008ea310",
      "incomplete_value": false,
      "site": "008ea310",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:180:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9364",
      "incomplete_value": false,
      "site": "008e9364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:1b0:8"
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
      "008ea310",
      "DATA",
      [
        "storage",
        "00c851b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea310",
      "DATA",
      [
        "storage",
        "00c86180",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9354 ["INT_ADD", "register:40f0:8", ["const:8e9354:8", "const:4:8"]]
- 008e9354 ["CALL", null, ["callee:00c58f30:8"]]
+ 008ea300 ["INT_ADD", "register:40f0:8", ["const:8ea300:8", "const:4:8"]]
+ 008ea300 ["CALL", null, ["callee:00c58f30:8"]]
- 008e935c ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008ea308 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008e9360 ["COPY", "tmp:0:8", ["const:1b0:8"]]
- 008e9360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ea30c ["COPY", "tmp:0:8", ["const:180:8"]]
+ 008ea30c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea30c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea30c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ac77aadabd23b355882156acdc136781"></a>

### [`008e9374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9374.md) → [`008ea320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea320.md) FUN_008ea320

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
      "definition_site": "008ea32c",
      "incomplete_value": false,
      "site": "008ea32c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:180:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9380",
      "incomplete_value": false,
      "site": "008e9380",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:1b0:8"
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
      "008ea32c",
      "DATA",
      [
        "storage",
        "00c851b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea32c",
      "DATA",
      [
        "storage",
        "00c86180",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9378 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008ea324 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008e937c ["COPY", "tmp:0:8", ["const:1b0:8"]]
- 008e937c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008e937c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008e937c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ea328 ["COPY", "tmp:0:8", ["const:180:8"]]
+ 008ea328 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea328 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea328 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d2733e4d2a2cd3fb535fd198e0ee7e1e"></a>

### [`008e9390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9390.md) → [`008ea33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea33c.md) FUN_008ea33c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`008e3ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3ce0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`008e4c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e4/008e4c8c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ea358",
      "incomplete_value": true,
      "site": "008ea35c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": {
      "definition_site": "008e93ac",
      "incomplete_value": true,
      "site": "008e93b0",
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
      "unmatched:008e9390",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008e9394",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008e9398",
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
      "008ea33c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008ea340",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008ea344",
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
- 008e93b0 ["INT_ADD", "register:40f0:8", ["const:8e93b0:8", "const:4:8"]]
- 008e93b0 ["CALL", null, ["callee:008b7ea8:8"]]
+ 008ea35c ["INT_ADD", "register:40f0:8", ["const:8ea35c:8", "const:4:8"]]
+ 008ea35c ["CALL", null, ["callee:008b7ea8:8"]]
- 008e9390 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008e9390 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008e9390 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 008e9390 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008e9394 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008e9394 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-c428a0a9c64878aaefa5a0531673798d"></a>

### [`008e94c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e94c0.md) → [`008ea46c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea46c.md) FUN_008ea46c

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
      "definition_site": "008ea490",
      "incomplete_value": false,
      "site": "008ea490",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:200:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e94e4",
      "incomplete_value": false,
      "site": "008e94e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:230:8"
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
      "008ea490",
      "DATA",
      [
        "storage",
        "00c85230",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea490",
      "DATA",
      [
        "storage",
        "00c86200",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e94d4 ["INT_ADD", "register:40f0:8", ["const:8e94d4:8", "const:4:8"]]
- 008e94d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 008ea480 ["INT_ADD", "register:40f0:8", ["const:8ea480:8", "const:4:8"]]
+ 008ea480 ["CALL", null, ["callee:00c58f30:8"]]
- 008e94dc ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008ea488 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008e94e0 ["COPY", "tmp:0:8", ["const:230:8"]]
- 008e94e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e94e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e94e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ea48c ["COPY", "tmp:0:8", ["const:200:8"]]
+ 008ea48c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea48c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea48c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7d183341fc172d161a0bb2e80a00cc9b"></a>

### [`008e94f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e94f4.md) → [`008ea4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea4a0.md) FUN_008ea4a0

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
      "definition_site": "008ea4ac",
      "incomplete_value": false,
      "site": "008ea4ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:200:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9500",
      "incomplete_value": false,
      "site": "008e9500",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:230:8"
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
      "008ea4ac",
      "DATA",
      [
        "storage",
        "00c85230",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea4ac",
      "DATA",
      [
        "storage",
        "00c86200",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e94f8 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008ea4a4 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008e94fc ["COPY", "tmp:0:8", ["const:230:8"]]
- 008e94fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008e94fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008e94fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ea4a8 ["COPY", "tmp:0:8", ["const:200:8"]]
+ 008ea4a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea4a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea4a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-adbd623d17e859a671f5e4d8e67a9eed"></a>

### [`008e9510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9510.md) → [`008ea4bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea4bc.md) FUN_008ea4bc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ea4dc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e9530",
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
      "site": "008ea4e8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e953c",
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
      "008ea4dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008ea4e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008ea50c",
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
      "008ea4dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008ea4e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008ea50c",
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
- 008e9530 ["INT_ADD", "register:40f0:8", ["const:8e9530:8", "const:4:8"]]
- 008e9530 ["CALL", null, ["ram:47ad34:8"]]
+ 008ea4dc ["INT_ADD", "register:40f0:8", ["const:8ea4dc:8", "const:4:8"]]
+ 008ea4dc ["CALL", null, ["ram:47b054:8"]]
- 008e953c ["INT_ADD", "register:40f0:8", ["const:8e953c:8", "const:4:8"]]
- 008e953c ["CALL", null, ["ram:47ad34:8"]]
+ 008ea4e8 ["INT_ADD", "register:40f0:8", ["const:8ea4e8:8", "const:4:8"]]
+ 008ea4e8 ["CALL", null, ["ram:47b054:8"]]
- 008e9550 ["INT_ADD", "register:40f0:8", ["const:8e9550:8", "const:4:8"]]
- 008e9550 ["CALL", null, ["callee:008524fc:8"]]
+ 008ea4fc ["INT_ADD", "register:40f0:8", ["const:8ea4fc:8", "const:4:8"]]
+ 008ea4fc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-e788b8fb56ccb9d9f451dce07f3363c1"></a>

### [`008e95bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e95bc.md) → [`008ea568`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea568.md) FUN_008ea568

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
      "definition_site": "008ea588",
      "incomplete_value": false,
      "site": "008ea58c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:280:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e95dc",
      "incomplete_value": false,
      "site": "008e95e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:2b0:8"
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
      "008ea58c",
      "DATA",
      [
        "storage",
        "00c852b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea58c",
      "DATA",
      [
        "storage",
        "00c86280",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e95d0 ["INT_ADD", "register:40f0:8", ["const:8e95d0:8", "const:4:8"]]
- 008e95d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 008ea57c ["INT_ADD", "register:40f0:8", ["const:8ea57c:8", "const:4:8"]]
+ 008ea57c ["CALL", null, ["callee:00c58f30:8"]]
- 008e95d8 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008ea584 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008e95dc ["COPY", "tmp:0:8", ["const:2b0:8"]]
- 008e95dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e95dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e95dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ea588 ["COPY", "tmp:0:8", ["const:280:8"]]
+ 008ea588 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea588 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea588 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-87f6a1748b93a76dd3260f3c0af255e3"></a>

### [`008e95f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e95f4.md) → [`008ea5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea5a0.md) FUN_008ea5a0

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
      "definition_site": "008ea5a4",
      "incomplete_value": false,
      "site": "008ea5a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:280:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e95f8",
      "incomplete_value": false,
      "site": "008e95fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:2b0:8"
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
      "008ea5a8",
      "DATA",
      [
        "storage",
        "00c852b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea5a8",
      "DATA",
      [
        "storage",
        "00c86280",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e95f4 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008ea5a0 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008e95f8 ["COPY", "tmp:0:8", ["const:2b0:8"]]
- 008e95f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e95f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e95f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ea5a4 ["COPY", "tmp:0:8", ["const:280:8"]]
+ 008ea5a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea5a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea5a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cdaaeb42dce1d0b7ee7f3137375622ee"></a>

### [`008e9614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9614.md) → [`008ea5c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea5c0.md) FUN_008ea5c0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 17件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.07% / 新版 92.07%

優先判定に残った影響 `call_target` 2件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ea6f0",
      "incomplete_value": true,
      "site": "008ea6f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:857:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9744",
      "incomplete_value": true,
      "site": "008e9744",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:788:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ea714",
      "incomplete_value": false,
      "site": "008ea714",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9768",
      "incomplete_value": false,
      "site": "008e9768",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:3a0:8"
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
      "definition_site": "008ea774",
      "incomplete_value": true,
      "site": "008ea774",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:666:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e97c8",
      "incomplete_value": true,
      "site": "008e97c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:59b:8"
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
      "008ea5fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008ea618",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008ea68c",
      "DATA",
      [
        "storage",
        "004362dc",
        "fde_004362dc",
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "008ea5fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008ea618",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008ea68c",
      "DATA",
      [
        "storage",
        "004362dc",
        null,
        "byte[51]"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9650 ["INT_ADD", "register:40f0:8", ["const:8e9650:8", "const:4:8"]]
- 008e9650 ["CALL", null, ["ram:47ad34:8"]]
+ 008ea5fc ["INT_ADD", "register:40f0:8", ["const:8ea5fc:8", "const:4:8"]]
+ 008ea5fc ["CALL", null, ["ram:47b054:8"]]
- 008e966c ["INT_ADD", "register:40f0:8", ["const:8e966c:8", "const:4:8"]]
- 008e966c ["CALL", null, ["ram:47ad34:8"]]
+ 008ea618 ["INT_ADD", "register:40f0:8", ["const:8ea618:8", "const:4:8"]]
+ 008ea618 ["CALL", null, ["ram:47b054:8"]]
- 008e96a8 ["INT_ADD", "register:40f0:8", ["const:8e96a8:8", "const:4:8"]]
- 008e96a8 ["CALL", null, ["callee:008524fc:8"]]
+ 008ea654 ["INT_ADD", "register:40f0:8", ["const:8ea654:8", "const:4:8"]]
+ 008ea654 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-4d69fdc66594d40179e5a3d21957cdcd"></a>

### [`008e9b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9b00.md) → [`008eaaac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008eaaac.md) FUN_008eaaac

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
      "definition_site": "008eaacc",
      "incomplete_value": false,
      "site": "008eaad0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9b20",
      "incomplete_value": false,
      "site": "008e9b24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:320:8"
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
      "008eaad0",
      "DATA",
      [
        "storage",
        "00c85320",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eaad0",
      "DATA",
      [
        "storage",
        "00c862f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9b14 ["INT_ADD", "register:40f0:8", ["const:8e9b14:8", "const:4:8"]]
- 008e9b14 ["CALL", null, ["callee:00c58f30:8"]]
+ 008eaac0 ["INT_ADD", "register:40f0:8", ["const:8eaac0:8", "const:4:8"]]
+ 008eaac0 ["CALL", null, ["callee:00c58f30:8"]]
- 008e9b1c ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eaac8 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008e9b20 ["COPY", "tmp:0:8", ["const:320:8"]]
- 008e9b20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9b20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9b20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eaacc ["COPY", "tmp:0:8", ["const:2f0:8"]]
+ 008eaacc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eaacc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eaacc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-60c9dae1a5072b4f798eb74783016c90"></a>

### [`008e9b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9b38.md) → [`008eaae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008eaae4.md) FUN_008eaae4

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
      "definition_site": "008eaae8",
      "incomplete_value": false,
      "site": "008eaaec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9b3c",
      "incomplete_value": false,
      "site": "008e9b40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:320:8"
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
      "008eaaec",
      "DATA",
      [
        "storage",
        "00c85320",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eaaec",
      "DATA",
      [
        "storage",
        "00c862f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9b38 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eaae4 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008e9b3c ["COPY", "tmp:0:8", ["const:320:8"]]
- 008e9b3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9b3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9b3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eaae8 ["COPY", "tmp:0:8", ["const:2f0:8"]]
+ 008eaae8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eaae8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eaae8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e49831a0d778b4d9bcd5cb3fc39b93f4"></a>

### [`008e9b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9b58.md) → [`008eab04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008eab04.md) FUN_008eab04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008eab2c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e9b80",
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
      "008eab2c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008eab2c",
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
- 008e9b80 ["INT_ADD", "register:40f0:8", ["const:8e9b80:8", "const:4:8"]]
- 008e9b80 ["CALL", null, ["ram:47ad34:8"]]
+ 008eab2c ["INT_ADD", "register:40f0:8", ["const:8eab2c:8", "const:4:8"]]
+ 008eab2c ["CALL", null, ["ram:47b054:8"]]
- 008e9b7c ["INT_ADD", "register:40f0:8", ["const:8e9b7c:8", "const:4:8"]]
- 008e9b7c ["CALL", null, ["callee:008ba17c:8"]]
+ 008eab28 ["INT_ADD", "register:40f0:8", ["const:8eab28:8", "const:4:8"]]
+ 008eab28 ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-2974db5dbd39b68207921216bdfa11bf"></a>

### [`008e9bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9bc4.md) → [`008eab70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008eab70.md) FUN_008eab70

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
      "definition_site": "008eab90",
      "incomplete_value": false,
      "site": "008eab94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9be4",
      "incomplete_value": false,
      "site": "008e9be8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:3a0:8"
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
      "008eab94",
      "DATA",
      [
        "storage",
        "00c853a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eab94",
      "DATA",
      [
        "storage",
        "00c86370",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9bd8 ["INT_ADD", "register:40f0:8", ["const:8e9bd8:8", "const:4:8"]]
- 008e9bd8 ["CALL", null, ["callee:00c58f30:8"]]
+ 008eab84 ["INT_ADD", "register:40f0:8", ["const:8eab84:8", "const:4:8"]]
+ 008eab84 ["CALL", null, ["callee:00c58f30:8"]]
- 008e9be0 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eab8c ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008e9be4 ["COPY", "tmp:0:8", ["const:3a0:8"]]
- 008e9be4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9be4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9be4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eab90 ["COPY", "tmp:0:8", ["const:370:8"]]
+ 008eab90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eab90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eab90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-16f41e75d55911968e921d5c62f7b2ef"></a>

### [`008e9bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9bfc.md) → [`008eaba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008eaba8.md) FUN_008eaba8

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
      "definition_site": "008eabac",
      "incomplete_value": false,
      "site": "008eabb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9c00",
      "incomplete_value": false,
      "site": "008e9c04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
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
      "008eabb0",
      "DATA",
      [
        "storage",
        "00c853a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eabb0",
      "DATA",
      [
        "storage",
        "00c86370",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9bfc ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eaba8 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008e9c00 ["COPY", "tmp:0:8", ["const:3a0:8"]]
- 008e9c00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9c00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9c00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eabac ["COPY", "tmp:0:8", ["const:370:8"]]
+ 008eabac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eabac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eabac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-82dc0de3cac754783114979cdb62b505"></a>

### [`008e9c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9c1c.md) → [`008eabc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008eabc8.md) FUN_008eabc8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008eabf0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e9c44",
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
      "008eabf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008eabf0",
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
- 008e9c44 ["INT_ADD", "register:40f0:8", ["const:8e9c44:8", "const:4:8"]]
- 008e9c44 ["CALL", null, ["ram:47ad34:8"]]
+ 008eabf0 ["INT_ADD", "register:40f0:8", ["const:8eabf0:8", "const:4:8"]]
+ 008eabf0 ["CALL", null, ["ram:47b054:8"]]
- 008e9c40 ["INT_ADD", "register:40f0:8", ["const:8e9c40:8", "const:4:8"]]
- 008e9c40 ["CALL", null, ["callee:008ba17c:8"]]
+ 008eabec ["INT_ADD", "register:40f0:8", ["const:8eabec:8", "const:4:8"]]
+ 008eabec ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-436e53de1d6a4864dc363a7414c5d99d"></a>

### [`008e9c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9c88.md) → [`008eac34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008eac34.md) FUN_008eac34

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
      "definition_site": "008eac54",
      "incomplete_value": false,
      "site": "008eac58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9ca8",
      "incomplete_value": false,
      "site": "008e9cac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:420:8"
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
      "008eac58",
      "DATA",
      [
        "storage",
        "00c85420",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eac58",
      "DATA",
      [
        "storage",
        "00c863f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9c9c ["INT_ADD", "register:40f0:8", ["const:8e9c9c:8", "const:4:8"]]
- 008e9c9c ["CALL", null, ["callee:00c58f30:8"]]
+ 008eac48 ["INT_ADD", "register:40f0:8", ["const:8eac48:8", "const:4:8"]]
+ 008eac48 ["CALL", null, ["callee:00c58f30:8"]]
- 008e9ca4 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eac50 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008e9ca8 ["COPY", "tmp:0:8", ["const:420:8"]]
- 008e9ca8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9ca8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9ca8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eac54 ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 008eac54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eac54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eac54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f4aa525973b99bd6d20bdc99ff6caadf"></a>

### [`008e9cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9cc0.md) → [`008eac6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008eac6c.md) FUN_008eac6c

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
      "definition_site": "008eac70",
      "incomplete_value": false,
      "site": "008eac74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9cc4",
      "incomplete_value": false,
      "site": "008e9cc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:420:8"
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
      "008eac74",
      "DATA",
      [
        "storage",
        "00c85420",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eac74",
      "DATA",
      [
        "storage",
        "00c863f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9cc0 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eac6c ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008e9cc4 ["COPY", "tmp:0:8", ["const:420:8"]]
- 008e9cc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9cc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9cc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eac70 ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 008eac70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eac70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eac70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6d5c7278aba0d82c5449abfa4048c76a"></a>

### [`008e9dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9dac.md) → [`008ead58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ead58.md) FUN_008ead58

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
      "definition_site": "008ead7c",
      "incomplete_value": false,
      "site": "008ead7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:480:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9dd0",
      "incomplete_value": false,
      "site": "008e9dd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:4b0:8"
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
      "008ead7c",
      "DATA",
      [
        "storage",
        "00c854b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ead7c",
      "DATA",
      [
        "storage",
        "00c86480",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9dc0 ["INT_ADD", "register:40f0:8", ["const:8e9dc0:8", "const:4:8"]]
- 008e9dc0 ["CALL", null, ["callee:00c58f30:8"]]
+ 008ead6c ["INT_ADD", "register:40f0:8", ["const:8ead6c:8", "const:4:8"]]
+ 008ead6c ["CALL", null, ["callee:00c58f30:8"]]
- 008e9dc8 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008ead74 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008e9dcc ["COPY", "tmp:0:8", ["const:4b0:8"]]
- 008e9dcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9dcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9dcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ead78 ["COPY", "tmp:0:8", ["const:480:8"]]
+ 008ead78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ead78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ead78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-92afe24f461d03a39c4da11734a464e4"></a>

### [`008e9de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9de0.md) → [`008ead8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ead8c.md) FUN_008ead8c

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
      "definition_site": "008ead98",
      "incomplete_value": false,
      "site": "008ead98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:480:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9dec",
      "incomplete_value": false,
      "site": "008e9dec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:4b0:8"
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
      "008ead98",
      "DATA",
      [
        "storage",
        "00c854b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ead98",
      "DATA",
      [
        "storage",
        "00c86480",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9de4 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008ead90 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008e9de8 ["COPY", "tmp:0:8", ["const:4b0:8"]]
- 008e9de8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008e9de8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008e9de8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ead94 ["COPY", "tmp:0:8", ["const:480:8"]]
+ 008ead94 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ead94 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ead94 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-adffd9629556802a7bb7355c02ccc3a9"></a>

### [`008e9dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9dfc.md) → [`008eada8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008eada8.md) FUN_008eada8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba85c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 84.57% / 新版 84.57%

優先判定に残った影響 `call_target` 2件, `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008eae84",
      "incomplete_value": true,
      "site": "008eae84",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ba000:8"
              ],
              [
                "leaf",
                "const:9df:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9ed8",
      "incomplete_value": true,
      "site": "008e9ed8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ba000:8"
              ],
              [
                "leaf",
                "const:901:8"
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
      "definition_site": "008eae88",
      "incomplete_value": true,
      "site": "008eae88",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008e9edc",
      "incomplete_value": true,
      "site": "008e9edc",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008eaea0",
      "incomplete_value": false,
      "site": "008eaea0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:570:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e9ef4",
      "incomplete_value": false,
      "site": "008e9ef4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:5a0:8"
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
      "008eade0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008eadfc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008eae44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008e9f2c"
      ]
    ]
  ],
  "added": [
    [
      "008eade0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008eadfc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008eae44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008eaed8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9e34 ["INT_ADD", "register:40f0:8", ["const:8e9e34:8", "const:4:8"]]
- 008e9e34 ["CALL", null, ["ram:47ad34:8"]]
+ 008eade0 ["INT_ADD", "register:40f0:8", ["const:8eade0:8", "const:4:8"]]
+ 008eade0 ["CALL", null, ["ram:47b054:8"]]
- 008e9e50 ["INT_ADD", "register:40f0:8", ["const:8e9e50:8", "const:4:8"]]
- 008e9e50 ["CALL", null, ["ram:47ad34:8"]]
+ 008eadfc ["INT_ADD", "register:40f0:8", ["const:8eadfc:8", "const:4:8"]]
+ 008eadfc ["CALL", null, ["ram:47b054:8"]]
- 008e9e84 ["INT_ADD", "register:40f0:8", ["const:8e9e84:8", "const:4:8"]]
- 008e9e84 ["CALL", null, ["callee:008524fc:8"]]
+ 008eae30 ["INT_ADD", "register:40f0:8", ["const:8eae30:8", "const:4:8"]]
+ 008eae30 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-861650af15bf94330f9e1fe8c81bc15f"></a>

### [`008ea148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea148.md) → [`008eb0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb0f4.md) FUN_008eb0f4

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
      "definition_site": "008eb118",
      "incomplete_value": false,
      "site": "008eb118",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:4f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ea16c",
      "incomplete_value": false,
      "site": "008ea16c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:520:8"
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
      "008eb118",
      "DATA",
      [
        "storage",
        "00c85520",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb118",
      "DATA",
      [
        "storage",
        "00c864f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea15c ["INT_ADD", "register:40f0:8", ["const:8ea15c:8", "const:4:8"]]
- 008ea15c ["CALL", null, ["callee:00c58f30:8"]]
+ 008eb108 ["INT_ADD", "register:40f0:8", ["const:8eb108:8", "const:4:8"]]
+ 008eb108 ["CALL", null, ["callee:00c58f30:8"]]
- 008ea164 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eb110 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008ea168 ["COPY", "tmp:0:8", ["const:520:8"]]
- 008ea168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ea168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ea168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eb114 ["COPY", "tmp:0:8", ["const:4f0:8"]]
+ 008eb114 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eb114 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eb114 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9489267669e5145eab1563dae720611d"></a>

### [`008ea17c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea17c.md) → [`008eb128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb128.md) FUN_008eb128

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
      "definition_site": "008eb134",
      "incomplete_value": false,
      "site": "008eb134",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:4f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ea188",
      "incomplete_value": false,
      "site": "008ea188",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:520:8"
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
      "008eb134",
      "DATA",
      [
        "storage",
        "00c85520",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb134",
      "DATA",
      [
        "storage",
        "00c864f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea180 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008eb12c ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008ea184 ["COPY", "tmp:0:8", ["const:520:8"]]
- 008ea184 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ea184 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ea184 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008eb130 ["COPY", "tmp:0:8", ["const:4f0:8"]]
+ 008eb130 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb130 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb130 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c863f0e7b846d82f0b731585105f2eae"></a>

### [`008ea198`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea198.md) → [`008eb144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb144.md) FUN_008eb144

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008eb16c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ea1c0",
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
      "008eb16c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008eb16c",
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
- 008ea1c0 ["INT_ADD", "register:40f0:8", ["const:8ea1c0:8", "const:4:8"]]
- 008ea1c0 ["CALL", null, ["ram:47ad34:8"]]
+ 008eb16c ["INT_ADD", "register:40f0:8", ["const:8eb16c:8", "const:4:8"]]
+ 008eb16c ["CALL", null, ["ram:47b054:8"]]
- 008ea1bc ["INT_ADD", "register:40f0:8", ["const:8ea1bc:8", "const:4:8"]]
- 008ea1bc ["CALL", null, ["callee:008ba17c:8"]]
+ 008eb168 ["INT_ADD", "register:40f0:8", ["const:8eb168:8", "const:4:8"]]
+ 008eb168 ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-9aaaba0769a0e840f7a0528c03bc2299"></a>

### [`008ea204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea204.md) → [`008eb1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb1b0.md) FUN_008eb1b0

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
      "definition_site": "008eb1d4",
      "incomplete_value": false,
      "site": "008eb1d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:570:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ea228",
      "incomplete_value": false,
      "site": "008ea228",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008eb1d4",
      "DATA",
      [
        "storage",
        "00c855a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb1d4",
      "DATA",
      [
        "storage",
        "00c86570",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea218 ["INT_ADD", "register:40f0:8", ["const:8ea218:8", "const:4:8"]]
- 008ea218 ["CALL", null, ["callee:00c58f30:8"]]
+ 008eb1c4 ["INT_ADD", "register:40f0:8", ["const:8eb1c4:8", "const:4:8"]]
+ 008eb1c4 ["CALL", null, ["callee:00c58f30:8"]]
- 008ea220 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eb1cc ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008ea224 ["COPY", "tmp:0:8", ["const:5a0:8"]]
- 008ea224 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ea224 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ea224 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eb1d0 ["COPY", "tmp:0:8", ["const:570:8"]]
+ 008eb1d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eb1d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eb1d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-79fd71d331e193b77ef0ddc8a398c35e"></a>

### [`008ea238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea238.md) → [`008eb1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb1e4.md) FUN_008eb1e4

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
      "definition_site": "008eb1f0",
      "incomplete_value": false,
      "site": "008eb1f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:570:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ea244",
      "incomplete_value": false,
      "site": "008ea244",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:5a0:8"
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
      "008eb1f0",
      "DATA",
      [
        "storage",
        "00c855a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb1f0",
      "DATA",
      [
        "storage",
        "00c86570",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea23c ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008eb1e8 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008ea240 ["COPY", "tmp:0:8", ["const:5a0:8"]]
- 008ea240 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ea240 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ea240 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008eb1ec ["COPY", "tmp:0:8", ["const:570:8"]]
+ 008eb1ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb1ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb1ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-19a6ee4f16832c44c1f877d23ae655bd"></a>

### [`008ea254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea254.md) → [`008eb200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb200.md) FUN_008eb200

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008eb228",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ea27c",
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
      "008eb228",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008eb228",
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
- 008ea27c ["INT_ADD", "register:40f0:8", ["const:8ea27c:8", "const:4:8"]]
- 008ea27c ["CALL", null, ["ram:47ad34:8"]]
+ 008eb228 ["INT_ADD", "register:40f0:8", ["const:8eb228:8", "const:4:8"]]
+ 008eb228 ["CALL", null, ["ram:47b054:8"]]
- 008ea278 ["INT_ADD", "register:40f0:8", ["const:8ea278:8", "const:4:8"]]
- 008ea278 ["CALL", null, ["callee:008ba17c:8"]]
+ 008eb224 ["INT_ADD", "register:40f0:8", ["const:8eb224:8", "const:4:8"]]
+ 008eb224 ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-513e29276b19d4daa417d528457275d7"></a>

### [`008ea2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea2c0.md) → [`008eb26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb26c.md) FUN_008eb26c

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
      "definition_site": "008eb290",
      "incomplete_value": false,
      "site": "008eb290",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:5f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ea2e4",
      "incomplete_value": false,
      "site": "008ea2e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:620:8"
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
      "008eb290",
      "DATA",
      [
        "storage",
        "00c85620",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb290",
      "DATA",
      [
        "storage",
        "00c865f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea2d4 ["INT_ADD", "register:40f0:8", ["const:8ea2d4:8", "const:4:8"]]
- 008ea2d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 008eb280 ["INT_ADD", "register:40f0:8", ["const:8eb280:8", "const:4:8"]]
+ 008eb280 ["CALL", null, ["callee:00c58f30:8"]]
- 008ea2dc ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eb288 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008ea2e0 ["COPY", "tmp:0:8", ["const:620:8"]]
- 008ea2e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ea2e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ea2e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eb28c ["COPY", "tmp:0:8", ["const:5f0:8"]]
+ 008eb28c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eb28c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eb28c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8c719f33a6e5aab507d80b6244d91344"></a>

### [`008ea2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea2f4.md) → [`008eb2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb2a0.md) FUN_008eb2a0

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
      "definition_site": "008eb2ac",
      "incomplete_value": false,
      "site": "008eb2ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:5f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ea300",
      "incomplete_value": false,
      "site": "008ea300",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:620:8"
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
      "008eb2ac",
      "DATA",
      [
        "storage",
        "00c85620",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb2ac",
      "DATA",
      [
        "storage",
        "00c865f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea2f8 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008eb2a4 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008ea2fc ["COPY", "tmp:0:8", ["const:620:8"]]
- 008ea2fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ea2fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ea2fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008eb2a8 ["COPY", "tmp:0:8", ["const:5f0:8"]]
+ 008eb2a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb2a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb2a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-29a5c1b0c014e5220577452a41280179"></a>

### [`008ea7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea7e4.md) → [`008eb790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb790.md) FUN_008eb790

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
      "definition_site": "008eb7b4",
      "incomplete_value": false,
      "site": "008eb7b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ea808",
      "incomplete_value": false,
      "site": "008ea808",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
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
      "008eb7b4",
      "DATA",
      [
        "storage",
        "00c856b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb7b4",
      "DATA",
      [
        "storage",
        "00c86680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea7f8 ["INT_ADD", "register:40f0:8", ["const:8ea7f8:8", "const:4:8"]]
- 008ea7f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 008eb7a4 ["INT_ADD", "register:40f0:8", ["const:8eb7a4:8", "const:4:8"]]
+ 008eb7a4 ["CALL", null, ["callee:00c58f30:8"]]
- 008ea800 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eb7ac ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008ea804 ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 008ea804 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ea804 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ea804 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eb7b0 ["COPY", "tmp:0:8", ["const:680:8"]]
+ 008eb7b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eb7b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eb7b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-236446463e4e7c7e50f3e4f83619be54"></a>

### [`008ea818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea818.md) → [`008eb7c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb7c4.md) FUN_008eb7c4

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
      "definition_site": "008eb7d0",
      "incomplete_value": false,
      "site": "008eb7d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ea824",
      "incomplete_value": false,
      "site": "008ea824",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
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
      "008eb7d0",
      "DATA",
      [
        "storage",
        "00c856b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb7d0",
      "DATA",
      [
        "storage",
        "00c86680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea81c ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008eb7c8 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008ea820 ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 008ea820 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ea820 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ea820 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008eb7cc ["COPY", "tmp:0:8", ["const:680:8"]]
+ 008eb7cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb7cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb7cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4ac529d75777a947cbc55528280e1af0"></a>

### [`008ea834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea834.md) → [`008eb7e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb7e0.md) FUN_008eb7e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

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
      "site": "008eb804",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ea858",
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
      "008eb804",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008eb804",
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
- 008ea858 ["INT_ADD", "register:40f0:8", ["const:8ea858:8", "const:4:8"]]
- 008ea858 ["CALL", null, ["ram:47ad34:8"]]
+ 008eb804 ["INT_ADD", "register:40f0:8", ["const:8eb804:8", "const:4:8"]]
+ 008eb804 ["CALL", null, ["ram:47b054:8"]]
- 008ea854 ["INT_ADD", "register:40f0:8", ["const:8ea854:8", "const:4:8"]]
- 008ea854 ["CALL", null, ["callee:008ba17c:8"]]
+ 008eb800 ["INT_ADD", "register:40f0:8", ["const:8eb800:8", "const:4:8"]]
+ 008eb800 ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-aabe8b7862bcd54a6a7818dfb7eac625"></a>

### [`008ea8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea8a8.md) → [`008eb854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb854.md) FUN_008eb854

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
      "definition_site": "008eb878",
      "incomplete_value": false,
      "site": "008eb878",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ea8cc",
      "incomplete_value": false,
      "site": "008ea8cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:730:8"
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
      "008eb878",
      "DATA",
      [
        "storage",
        "00c85730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb878",
      "DATA",
      [
        "storage",
        "00c86700",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea8bc ["INT_ADD", "register:40f0:8", ["const:8ea8bc:8", "const:4:8"]]
- 008ea8bc ["CALL", null, ["callee:00c58f30:8"]]
+ 008eb868 ["INT_ADD", "register:40f0:8", ["const:8eb868:8", "const:4:8"]]
+ 008eb868 ["CALL", null, ["callee:00c58f30:8"]]
- 008ea8c4 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eb870 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008ea8c8 ["COPY", "tmp:0:8", ["const:730:8"]]
- 008ea8c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ea8c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ea8c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eb874 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 008eb874 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eb874 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eb874 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4e369a99e452fb83121ec8a86de28ca5"></a>

### [`008ea8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea8dc.md) → [`008eb888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb888.md) FUN_008eb888

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
      "definition_site": "008eb894",
      "incomplete_value": false,
      "site": "008eb894",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ea8e8",
      "incomplete_value": false,
      "site": "008ea8e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:730:8"
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
      "008eb894",
      "DATA",
      [
        "storage",
        "00c85730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb894",
      "DATA",
      [
        "storage",
        "00c86700",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea8e0 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008eb88c ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008ea8e4 ["COPY", "tmp:0:8", ["const:730:8"]]
- 008ea8e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ea8e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ea8e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008eb890 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 008eb890 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb890 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb890 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ace0df33272413a0155aac284c6e63f3"></a>

### [`008ea8f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea8f8.md) → [`008eb8a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb8a4.md) FUN_008eb8a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008eb8c8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ea91c",
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
      "008eb8c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008eb8c8",
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
- 008ea91c ["INT_ADD", "register:40f0:8", ["const:8ea91c:8", "const:4:8"]]
- 008ea91c ["CALL", null, ["ram:47ad34:8"]]
+ 008eb8c8 ["INT_ADD", "register:40f0:8", ["const:8eb8c8:8", "const:4:8"]]
+ 008eb8c8 ["CALL", null, ["ram:47b054:8"]]
- 008ea918 ["INT_ADD", "register:40f0:8", ["const:8ea918:8", "const:4:8"]]
- 008ea918 ["CALL", null, ["callee:008ba17c:8"]]
+ 008eb8c4 ["INT_ADD", "register:40f0:8", ["const:8eb8c4:8", "const:4:8"]]
+ 008eb8c4 ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-54e7706f322d60bc1168b138588dbfd8"></a>

### [`008ea99c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea99c.md) → [`008eb948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb948.md) FUN_008eb948

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
      "definition_site": "008eb96c",
      "incomplete_value": false,
      "site": "008eb96c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:780:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ea9c0",
      "incomplete_value": false,
      "site": "008ea9c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:7b0:8"
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
      "008eb96c",
      "DATA",
      [
        "storage",
        "00c857b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb96c",
      "DATA",
      [
        "storage",
        "00c86780",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea9b0 ["INT_ADD", "register:40f0:8", ["const:8ea9b0:8", "const:4:8"]]
- 008ea9b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 008eb95c ["INT_ADD", "register:40f0:8", ["const:8eb95c:8", "const:4:8"]]
+ 008eb95c ["CALL", null, ["callee:00c58f30:8"]]
- 008ea9b8 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eb964 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008ea9bc ["COPY", "tmp:0:8", ["const:7b0:8"]]
- 008ea9bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ea9bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ea9bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eb968 ["COPY", "tmp:0:8", ["const:780:8"]]
+ 008eb968 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eb968 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eb968 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-befc9a8f961f94f148477134e5e90315"></a>

### [`008ea9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea9d0.md) → [`008eb97c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb97c.md) FUN_008eb97c

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
      "definition_site": "008eb988",
      "incomplete_value": false,
      "site": "008eb988",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:780:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ea9dc",
      "incomplete_value": false,
      "site": "008ea9dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:7b0:8"
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
      "008eb988",
      "DATA",
      [
        "storage",
        "00c857b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb988",
      "DATA",
      [
        "storage",
        "00c86780",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea9d4 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008eb980 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008ea9d8 ["COPY", "tmp:0:8", ["const:7b0:8"]]
- 008ea9d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ea9d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ea9d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008eb984 ["COPY", "tmp:0:8", ["const:780:8"]]
+ 008eb984 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb984 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb984 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2af3dc580d7074b2ed5dd380c439888d"></a>

### [`008ea9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea9ec.md) → [`008eb998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb998.md) FUN_008eb998

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008eb9b4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008eaa08",
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
      "008eb9b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008eb9b4",
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
- 008eaa08 ["INT_ADD", "register:40f0:8", ["const:8eaa08:8", "const:4:8"]]
- 008eaa08 ["CALL", null, ["ram:47ad34:8"]]
+ 008eb9b4 ["INT_ADD", "register:40f0:8", ["const:8eb9b4:8", "const:4:8"]]
+ 008eb9b4 ["CALL", null, ["ram:47b054:8"]]
- 008eaa04 ["INT_ADD", "register:40f0:8", ["const:8eaa04:8", "const:4:8"]]
- 008eaa04 ["CALL", null, ["callee:008ba17c:8"]]
+ 008eb9b0 ["INT_ADD", "register:40f0:8", ["const:8eb9b0:8", "const:4:8"]]
+ 008eb9b0 ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-eeed4a5e3f2f342e825c5da24db8bce3"></a>

### [`008eaa4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eaa4c.md) → [`008eb9f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb9f8.md) FUN_008eb9f8

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
      "definition_site": "008eba1c",
      "incomplete_value": false,
      "site": "008eba1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:800:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eaa70",
      "incomplete_value": false,
      "site": "008eaa70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:830:8"
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
      "008eba1c",
      "DATA",
      [
        "storage",
        "00c85830",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eba1c",
      "DATA",
      [
        "storage",
        "00c86800",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eaa60 ["INT_ADD", "register:40f0:8", ["const:8eaa60:8", "const:4:8"]]
- 008eaa60 ["CALL", null, ["callee:00c58f30:8"]]
+ 008eba0c ["INT_ADD", "register:40f0:8", ["const:8eba0c:8", "const:4:8"]]
+ 008eba0c ["CALL", null, ["callee:00c58f30:8"]]
- 008eaa68 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008eba14 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008eaa6c ["COPY", "tmp:0:8", ["const:830:8"]]
- 008eaa6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008eaa6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008eaa6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eba18 ["COPY", "tmp:0:8", ["const:800:8"]]
+ 008eba18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eba18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eba18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a63765cd43fdacbf7a9d692d4fba5521"></a>

### [`008eaa80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eaa80.md) → [`008eba2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eba2c.md) FUN_008eba2c

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
      "definition_site": "008eba38",
      "incomplete_value": false,
      "site": "008eba38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:800:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eaa8c",
      "incomplete_value": false,
      "site": "008eaa8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:830:8"
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
      "008eba38",
      "DATA",
      [
        "storage",
        "00c85830",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eba38",
      "DATA",
      [
        "storage",
        "00c86800",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eaa84 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008eba30 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008eaa88 ["COPY", "tmp:0:8", ["const:830:8"]]
- 008eaa88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008eaa88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008eaa88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008eba34 ["COPY", "tmp:0:8", ["const:800:8"]]
+ 008eba34 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008eba34 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008eba34 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-72eb6794dd3b4b97830f5559440fc3d5"></a>

### [`008eaa9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eaa9c.md) → [`008eba48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eba48.md) FUN_008eba48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 15件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_value, unresolved_return_alignment

命令の説明率　旧版 94.69% / 新版 94.69%

優先判定に残った影響 `call_target` 2件, `store_value` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ebb30",
      "incomplete_value": true,
      "site": "008ebb48",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:6b3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eab84",
      "incomplete_value": true,
      "site": "008eab9c",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:5e4:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ebc20",
      "incomplete_value": false,
      "site": "008ebc20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eac74",
      "incomplete_value": false,
      "site": "008eac74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:8a0:8"
          ]
        ]
      ]
    },
    "ordinal": 31,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008eba8c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008eaae0",
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
      "008eba8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008ebb10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008ebb30",
      "READ",
      [
        "storage",
        "002b95e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008eba8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008ebb10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008ebb30",
      "READ",
      [
        "storage",
        "002b96b3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eaae0 ["INT_ADD", "register:40f0:8", ["const:8eaae0:8", "const:4:8"]]
- 008eaae0 ["CALL", null, ["ram:47ad34:8"]]
+ 008eba8c ["INT_ADD", "register:40f0:8", ["const:8eba8c:8", "const:4:8"]]
+ 008eba8c ["CALL", null, ["ram:47b054:8"]]
- 008eab64 ["INT_ADD", "register:40f0:8", ["const:8eab64:8", "const:4:8"]]
- 008eab64 ["CALL", null, ["ram:47ad34:8"]]
+ 008ebb10 ["INT_ADD", "register:40f0:8", ["const:8ebb10:8", "const:4:8"]]
+ 008ebb10 ["CALL", null, ["ram:47b054:8"]]
- 008eaadc ["INT_ADD", "register:40f0:8", ["const:8eaadc:8", "const:4:8"]]
- 008eaadc ["CALL", null, ["callee:008ba17c:8"]]
+ 008eba88 ["INT_ADD", "register:40f0:8", ["const:8eba88:8", "const:4:8"]]
+ 008eba88 ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-17e9cd20ebf42fc55d314a473e6c1f0d"></a>

### [`008eaf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eaf20.md) → [`008ebecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008ebecc.md) FUN_008ebecc

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
      "definition_site": "008ebef0",
      "incomplete_value": false,
      "site": "008ebef0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eaf44",
      "incomplete_value": false,
      "site": "008eaf44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:8a0:8"
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
      "008ebef0",
      "DATA",
      [
        "storage",
        "00c858a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ebef0",
      "DATA",
      [
        "storage",
        "00c86870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eaf34 ["INT_ADD", "register:40f0:8", ["const:8eaf34:8", "const:4:8"]]
- 008eaf34 ["CALL", null, ["callee:00c58f30:8"]]
+ 008ebee0 ["INT_ADD", "register:40f0:8", ["const:8ebee0:8", "const:4:8"]]
+ 008ebee0 ["CALL", null, ["callee:00c58f30:8"]]
- 008eaf3c ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008ebee8 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008eaf40 ["COPY", "tmp:0:8", ["const:8a0:8"]]
- 008eaf40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008eaf40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008eaf40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ebeec ["COPY", "tmp:0:8", ["const:870:8"]]
+ 008ebeec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ebeec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ebeec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e4ced70f996059e2bd58ef9321c6e3c7"></a>

### [`008eaf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eaf54.md) → [`008ebf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008ebf00.md) FUN_008ebf00

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
      "definition_site": "008ebf0c",
      "incomplete_value": false,
      "site": "008ebf0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eaf60",
      "incomplete_value": false,
      "site": "008eaf60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:8a0:8"
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
      "008ebf0c",
      "DATA",
      [
        "storage",
        "00c858a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ebf0c",
      "DATA",
      [
        "storage",
        "00c86870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eaf58 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008ebf04 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008eaf5c ["COPY", "tmp:0:8", ["const:8a0:8"]]
- 008eaf5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008eaf5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008eaf5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ebf08 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 008ebf08 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ebf08 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ebf08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a52129c0ddac0112120ec214f2cfc11d"></a>

### [`008eaf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eaf70.md) → [`008ebf1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008ebf1c.md) FUN_008ebf1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ebf38",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008eaf8c",
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
      "008ebf38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008ebf38",
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
- 008eaf8c ["INT_ADD", "register:40f0:8", ["const:8eaf8c:8", "const:4:8"]]
- 008eaf8c ["CALL", null, ["ram:47ad34:8"]]
+ 008ebf38 ["INT_ADD", "register:40f0:8", ["const:8ebf38:8", "const:4:8"]]
+ 008ebf38 ["CALL", null, ["ram:47b054:8"]]
- 008eaf88 ["INT_ADD", "register:40f0:8", ["const:8eaf88:8", "const:4:8"]]
- 008eaf88 ["CALL", null, ["callee:008ba17c:8"]]
+ 008ebf34 ["INT_ADD", "register:40f0:8", ["const:8ebf34:8", "const:4:8"]]
+ 008ebf34 ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-45390f9f5f49be500822504ea7ca6d01"></a>

### [`008eafd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eafd0.md) → [`008ebf7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008ebf7c.md) FUN_008ebf7c

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
      "definition_site": "008ebfa0",
      "incomplete_value": false,
      "site": "008ebfa0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:900:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eaff4",
      "incomplete_value": false,
      "site": "008eaff4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:930:8"
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
      "008ebfa0",
      "DATA",
      [
        "storage",
        "00c85930",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ebfa0",
      "DATA",
      [
        "storage",
        "00c86900",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eafe4 ["INT_ADD", "register:40f0:8", ["const:8eafe4:8", "const:4:8"]]
- 008eafe4 ["CALL", null, ["callee:00c58f30:8"]]
+ 008ebf90 ["INT_ADD", "register:40f0:8", ["const:8ebf90:8", "const:4:8"]]
+ 008ebf90 ["CALL", null, ["callee:00c58f30:8"]]
- 008eafec ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008ebf98 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008eaff0 ["COPY", "tmp:0:8", ["const:930:8"]]
- 008eaff0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008eaff0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008eaff0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ebf9c ["COPY", "tmp:0:8", ["const:900:8"]]
+ 008ebf9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ebf9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ebf9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-54ec793d34c9521dc233fe8de58ae9bf"></a>

### [`008eb004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb004.md) → [`008ebfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008ebfb0.md) FUN_008ebfb0

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
      "definition_site": "008ebfbc",
      "incomplete_value": false,
      "site": "008ebfbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:900:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eb010",
      "incomplete_value": false,
      "site": "008eb010",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:930:8"
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
      "008ebfbc",
      "DATA",
      [
        "storage",
        "00c85930",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ebfbc",
      "DATA",
      [
        "storage",
        "00c86900",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eb008 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008ebfb4 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008eb00c ["COPY", "tmp:0:8", ["const:930:8"]]
- 008eb00c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008eb00c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008eb00c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ebfb8 ["COPY", "tmp:0:8", ["const:900:8"]]
+ 008ebfb8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ebfb8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ebfb8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a9466c44992792aa6d43c5ff20204879"></a>

### [`008eb020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb020.md) → [`008ebfcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008ebfcc.md) FUN_008ebfcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba294.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 90.77% / 新版 90.77%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ec00c",
      "incomplete_value": false,
      "site": "008ec020",
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
      "definition_site": "008eb060",
      "incomplete_value": false,
      "site": "008eb074",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ec014",
      "incomplete_value": false,
      "site": "008ec020",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eb068",
      "incomplete_value": false,
      "site": "008eb074",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ec048",
      "incomplete_value": true,
      "site": "008ec058",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:390:8"
              ]
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
      "unmatched:008eb054",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008eb058",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ec03c"
      ]
    ],
    [
      "unmatched:008eb060",
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
      "008ec000",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008ec004",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ec03c"
      ]
    ],
    [
      "008ec00c",
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
- 008eb074 ["INT_ADD", "register:40f0:8", ["const:8eb074:8", "const:4:8"]]
- 008eb074 ["CALL", null, ["callee:00c596b0:8"]]
+ 008ec020 ["INT_ADD", "register:40f0:8", ["const:8ec020:8", "const:4:8"]]
+ 008ec020 ["CALL", null, ["callee:00c596b0:8"]]
- 008eb0ac ["INT_ADD", "register:40f0:8", ["const:8eb0ac:8", "const:4:8"]]
- 008eb0ac ["CALL", null, ["callee:004692e8:8"]]
+ 008ec058 ["INT_ADD", "register:40f0:8", ["const:8ec058:8", "const:4:8"]]
+ 008ec058 ["CALL", null, ["callee:004692e8:8"]]
- 008eb0d0 ["INT_ADD", "register:40f0:8", ["const:8eb0d0:8", "const:4:8"]]
- 008eb0d0 ["CALL", null, ["callee:00469f64:8"]]
+ 008ec07c ["INT_ADD", "register:40f0:8", ["const:8ec07c:8", "const:4:8"]]
+ 008ec07c ["CALL", null, ["callee:00469f64:8"]]
~~~


<a id="compare-2a351e10d4bbc24526ed33fdb46866ac"></a>

### [`008eb14c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb14c.md) → [`008ec0f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ec0f8.md) _INIT_174

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.23% / 新版 80.23%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ec244",
      "incomplete_value": true,
      "site": "008ec258",
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
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ec24c",
      "incomplete_value": true,
      "site": "008ec258",
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
    "old": null,
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ec250",
      "incomplete_value": true,
      "site": "008ec258",
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
      "unmatched:008eb17c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008eb188",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008eb1a4",
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
      "008ec128",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008ec134",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "008ec150",
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
- 008eb2ac ["INT_ADD", "register:40f0:8", ["const:8eb2ac:8", "const:4:8"]]
- 008eb2ac ["CALL", null, ["callee:0043bb58:8"]]
+ 008ec258 ["INT_ADD", "register:40f0:8", ["const:8ec258:8", "const:4:8"]]
+ 008ec258 ["CALL", null, ["callee:0043bb58:8"]]
- 008eb2c0 ["INT_ADD", "register:40f0:8", ["const:8eb2c0:8", "const:4:8"]]
- 008eb2c0 ["CALL", null, ["callee:0043bb58:8"]]
+ 008ec26c ["INT_ADD", "register:40f0:8", ["const:8ec26c:8", "const:4:8"]]
+ 008ec26c ["CALL", null, ["callee:0043bb58:8"]]
- 008eb2d4 ["INT_ADD", "register:40f0:8", ["const:8eb2d4:8", "const:4:8"]]
- 008eb2d4 ["CALL", null, ["callee:0043bb58:8"]]
+ 008ec280 ["INT_ADD", "register:40f0:8", ["const:8ec280:8", "const:4:8"]]
+ 008ec280 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-939d307a317ac1372de1d38ffc1b2d0d"></a>

### [`008eb4dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb4dc.md) → [`008ec488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ec488.md) FUN_008ec488

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006d87c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d87c0.md) · 呼出先 2件 [`008eb570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb570.md) [`008eb9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb9dc.md)
- 新版 呼出元 1件 [`006d8b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d8b70.md) · 呼出先 2件 [`008ec51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ec51c.md) [`008ec988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ec988.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008ec4e4",
      "incomplete_value": true,
      "site": "008ec4e4",
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
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eb538",
      "incomplete_value": true,
      "site": "008eb538",
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
            "const:6e0:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008ec50c",
      "incomplete_value": true,
      "site": "008ec50c",
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
            "const:6b4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eb560",
      "incomplete_value": true,
      "site": "008eb560",
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
            "const:6e4:8"
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
      "008ec4c4",
      "READ",
      [
        "storage",
        "00ca46e0",
        null,
        "undefined4"
      ]
    ],
    [
      "008ec4e4",
      "WRITE",
      [
        "storage",
        "00ca46e0",
        null,
        "undefined4"
      ]
    ],
    [
      "008ec4ec",
      "READ",
      [
        "storage",
        "00ca46e4",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "008ec4c4",
      "READ",
      [
        "storage",
        "00ca56b0",
        null,
        "undefined4"
      ]
    ],
    [
      "008ec4e4",
      "WRITE",
      [
        "storage",
        "00ca56b0",
        null,
        "undefined4"
      ]
    ],
    [
      "008ec4ec",
      "READ",
      [
        "storage",
        "00ca56b4",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eb538 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6e0:8"]]
- 008eb538 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 008ec4e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6b0:8"]]
+ 008ec4e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 008eb560 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6e4:8"]]
- 008eb560 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 008ec50c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6b4:8"]]
+ 008ec50c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 008eb4f8 ["COPY", "register:4098:8", ["const:ca4000:8"]]
+ 008ec4a4 ["COPY", "register:4098:8", ["const:ca5000:8"]]
~~~


<a id="compare-f2716006e9128ce347591d07fdc02fc7"></a>

### [`008eb570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb570.md) → [`008ec51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ec51c.md) FUN_008ec51c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`008eb4dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb4dc.md) [`008ec2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008ec2f4.md) [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) [`008f6b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6b3c.md) · 呼出先 13件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00633824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633824.md) [`008f23cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f2/008f23cc.md)
- 新版 呼出元 5件 [`008ec488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ec488.md) [`008ed2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ed/008ed2a0.md) [`008f63b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f6/008f63b0.md) [`008f7ae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7ae8.md) [`008f8008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f8/008f8008.md) · 呼出先 13件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00633bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633bd4.md) [`008f3378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f3/008f3378.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.60% / 新版 87.60%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ec78c",
      "incomplete_value": false,
      "site": "008ec7ac",
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
      "definition_site": "008eb7e0",
      "incomplete_value": false,
      "site": "008eb800",
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
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ec790",
      "incomplete_value": true,
      "site": "008ec7ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eb7e4",
      "incomplete_value": true,
      "site": "008eb800",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ec8a0",
      "incomplete_value": true,
      "site": "008ec8a8",
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
            "const:ff8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eb8f4",
      "incomplete_value": false,
      "site": "008eb8fc",
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
            "const:38:8"
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008ec5c8",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "008ec608",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "008ec744",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "008ec5c8",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "008ec608",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "008ec744",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eb800 ["INT_ADD", "register:40f0:8", ["const:8eb800:8", "const:4:8"]]
- 008eb800 ["CALL", null, ["callee:00633bd4:8"]]
+ 008ec7ac ["INT_ADD", "register:40f0:8", ["const:8ec7ac:8", "const:4:8"]]
+ 008ec7ac ["CALL", null, ["callee:00633bd4:8"]]
- 008eb8fc ["INT_ADD", "register:40f0:8", ["const:8eb8fc:8", "const:4:8"]]
- 008eb8fc ["CALL", null, ["callee:00c58ef0:8"]]
+ 008ec8a8 ["INT_ADD", "register:40f0:8", ["const:8ec8a8:8", "const:4:8"]]
+ 008ec8a8 ["CALL", null, ["callee:00c58ef0:8"]]
- 008eb948 ["INT_ADD", "register:40f0:8", ["const:8eb948:8", "const:4:8"]]
- 008eb948 ["CALL", null, ["callee:00c58f10:8"]]
+ 008ec8f4 ["INT_ADD", "register:40f0:8", ["const:8ec8f4:8", "const:4:8"]]
+ 008ec8f4 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-ff3884a6707a3dabeb8c35551ccda984"></a>

### [`008eb9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb9dc.md) → [`008ec988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ec988.md) FUN_008ec988

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`008eb4dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb4dc.md) [`008ec2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008ec2f4.md) [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) [`008f6b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6b3c.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c4974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c4974.md) [`008cac10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008cac10.md)
- 新版 呼出元 4件 [`008ec488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ec488.md) [`008ed2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ed/008ed2a0.md) [`008f63b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f6/008f63b0.md) [`008f8008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f8/008f8008.md) · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c5920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c5/008c5920.md) [`008cbbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cb/008cbbbc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 87.90% / 新版 87.90%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008eca6c",
      "incomplete_value": true,
      "site": "008eca70",
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
            "INT_MULT",
            "8",
            [
              "INT_SEXT",
              "INT_SEXT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ebac0",
      "incomplete_value": true,
      "site": "008ebac4",
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
            "INT_MULT",
            "8",
            [
              "INT_SEXT",
              "INT_SEXT"
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
      "unmatched:008eba68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008eca78"
      ]
    ],
    [
      "unmatched:008eba6c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "unmatched:008ebb00",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ]
  ],
  "added": [
    [
      "008eca14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008eca78"
      ]
    ],
    [
      "008eca18",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "008ecaac",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ebac4 ["INT_ADD", "register:40f0:8", ["const:8ebac4:8", "const:4:8"]]
- 008ebac4 ["CALL", null, ["callee:008c5920:8"]]
+ 008eca70 ["INT_ADD", "register:40f0:8", ["const:8eca70:8", "const:4:8"]]
+ 008eca70 ["CALL", null, ["callee:008c5920:8"]]
- 008eba04 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008eba04 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 008ec9b0 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008ec9b0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 008eba30 ["INT_ADD", "register:40f0:8", ["const:8eba30:8", "const:4:8"]]
- 008eba30 ["CALL", null, ["callee:008524fc:8"]]
+ 008ec9dc ["INT_ADD", "register:40f0:8", ["const:8ec9dc:8", "const:4:8"]]
+ 008ec9dc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-52913e3280d9453dd27f52e5d3fc6df1"></a>

### [`008ebbcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008ebbcc.md) → [`008ecb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ecb78.md) FUN_008ecb78

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008f67b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f67b8.md) · 呼出先 14件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`008f7764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7764.md) · 呼出先 14件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 10件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ecd68",
      "incomplete_value": true,
      "site": "008ecd6c",
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
      "definition_site": "008ebdbc",
      "incomplete_value": true,
      "site": "008ebdc0",
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
    "ordinal": 33,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ecbdc",
      "incomplete_value": false,
      "site": "008ecbe0",
      "value": [
        "leaf",
        "const:28:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ecc70",
      "incomplete_value": true,
      "site": "008ecc78",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:008ebbf4",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ebc28",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008ebc28",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008ecba0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "008ecbd4",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "008ecbd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008ebc34 ["INT_ADD", "register:40f0:8", ["const:8ebc34:8", "const:4:8"]]
- 008ebc34 ["CALL", null, ["callee:00c58f30:8"]]
+ 008ecbe0 ["INT_ADD", "register:40f0:8", ["const:8ecbe0:8", "const:4:8"]]
+ 008ecbe0 ["CALL", null, ["callee:00c58f30:8"]]
- 008ebccc ["INT_ADD", "register:40f0:8", ["const:8ebccc:8", "const:4:8"]]
- 008ebccc ["CALL", null, ["callee:00487c9c:8"]]
+ 008ecc78 ["INT_ADD", "register:40f0:8", ["const:8ecc78:8", "const:4:8"]]
+ 008ecc78 ["CALL", null, ["callee:00487c9c:8"]]
- 008ebd54 ["INT_ADD", "register:40f0:8", ["const:8ebd54:8", "const:4:8"]]
- 008ebd54 ["CALL", null, ["callee:00c590a0:8"]]
+ 008ecd00 ["INT_ADD", "register:40f0:8", ["const:8ecd00:8", "const:4:8"]]
+ 008ecd00 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-dc6f3e50586004245f316b0090f17966"></a>

### [`008ebec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008ebec8.md) → [`008ece74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ece74.md) FUN_008ece74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f67b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f67b8.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00800684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800684.md) [`008040cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00804/008040cc.md) [`008f8a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8a40.md)
- 新版 呼出元 1件 [`008f7764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7764.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`008015e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008015e8.md) [`00805030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00805/00805030.md) [`008f99ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f9/008f99ec.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 94.94% / 新版 94.94%

優先判定に残った影響 `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ecee8",
      "value": [
        "leaf",
        "ram:805030:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ebf3c",
      "value": [
        "leaf",
        "ram:8040cc:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "008ebf4c"
      ],
      [
        "CONDITIONAL_JUMP",
        "008ecef8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008ecef8",
      "incomplete_value": true,
      "site": "008eceb0",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              "LOAD",
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ebf4c",
      "incomplete_value": true,
      "site": "008ebf04",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4040:8"
              ],
              [
                "live",
                "register:40d0:8"
              ]
            ]
          ]
        ]
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
      "008ecee8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008040cc"
      ]
    ],
    [
      "unmatched:008ebf4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008eceb0"
      ]
    ]
  ],
  "added": [
    [
      "008ecee8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00805030"
      ]
    ],
    [
      "008ecef8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008eceb0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ebf3c ["INT_ADD", "register:40f0:8", ["const:8ebf3c:8", "const:4:8"]]
- 008ebf3c ["CALL", null, ["ram:8040cc:8"]]
+ 008ecee8 ["INT_ADD", "register:40f0:8", ["const:8ecee8:8", "const:4:8"]]
+ 008ecee8 ["CALL", null, ["ram:805030:8"]]
- 008ebf00 ["BRANCH", null, ["local:b5:8"]]
+ 008eceac ["BRANCH", null, ["local:b6:8"]]
- 008ebf24 ["INT_ADD", "register:40f0:8", ["const:8ebf24:8", "const:4:8"]]
- 008ebf24 ["CALL", null, ["callee:00801334:8"]]
+ 008eced0 ["INT_ADD", "register:40f0:8", ["const:8eced0:8", "const:4:8"]]
+ 008eced0 ["CALL", null, ["callee:00801334:8"]]
~~~


<a id="compare-300dc6ce03a53515d484af3e2f4216da"></a>

### [`008ec004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008ec004.md) → [`008ecfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ecfb0.md) FUN_008ecfb0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) · 呼出先 8件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md)
- 新版 呼出元 1件 [`008f09f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f0/008f09f4.md) · 呼出先 8件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md) [`005cd4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cd4e0.md) [`00664c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664c90.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ecfcc",
      "incomplete_value": false,
      "site": "008ecfdc",
      "value": [
        "leaf",
        "const:19:8"
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
      "unmatched:008ec040",
      "READ",
      [
        "storage",
        "002a5bfb",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008ec044",
      "READ",
      [
        "storage",
        "002a5c0a",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008ec048",
      "READ",
      [
        "storage",
        "002c2490",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008ecfec",
      "READ",
      [
        "storage",
        "002a5d53",
        null,
        "string"
      ]
    ],
    [
      "008ecff0",
      "READ",
      [
        "storage",
        "002a5d62",
        null,
        "string"
      ]
    ],
    [
      "008ecff4",
      "READ",
      [
        "storage",
        "002c24e0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008ec030 ["INT_ADD", "register:40f0:8", ["const:8ec030:8", "const:4:8"]]
- 008ec030 ["CALL", null, ["callee:00c58f30:8"]]
+ 008ecfdc ["INT_ADD", "register:40f0:8", ["const:8ecfdc:8", "const:4:8"]]
+ 008ecfdc ["CALL", null, ["callee:00c58f30:8"]]
- 008ec038 ["COPY", "tmp:0:8", ["const:bfb:8"]]
- 008ec038 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ec038 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ec038 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008ec03c ["COPY", "register:4048:8", ["const:2c2000:8"]]
~~~


<a id="compare-95e430fa239253848eb553a162d16d00"></a>

### [`008ec2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008ec2f4.md) → [`008ed2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ed/008ed2a0.md) FUN_008ed2a0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) · 呼出先 18件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md)
- 新版 呼出元 1件 [`008f09f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f0/008f09f4.md) · 呼出先 18件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 13件, `store_destination` 7件, `store_value` 4件

アドレスに依存する影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ed38c",
      "incomplete_value": true,
      "site": "008ed38c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:cae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ec3e0",
      "incomplete_value": true,
      "site": "008ec3e0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:be1:8"
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
      "definition_site": "008ed524",
      "incomplete_value": true,
      "site": "008ed524",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:cbb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ec578",
      "incomplete_value": true,
      "site": "008ec578",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:bee:8"
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
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008ed840",
      "incomplete_value": false,
      "site": "008ed840",
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
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ec894",
      "incomplete_value": false,
      "site": "008ec894",
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
            "const:6e0:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008ed364",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008ed378",
      "READ",
      [
        "storage",
        "002abbe1",
        null,
        "string"
      ]
    ],
    [
      "008ed400",
      "READ",
      [
        "storage",
        "00c9ad70",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008ed364",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "008ed378",
      "READ",
      [
        "storage",
        "002abcae",
        null,
        "string"
      ]
    ],
    [
      "008ed400",
      "READ",
      [
        "storage",
        "00c9bd40",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ec474 ["INT_ADD", "register:40f0:8", ["const:8ec474:8", "const:4:8"]]
- 008ec474 ["CALL", null, ["callee:0047ec3c:8"]]
+ 008ed420 ["INT_ADD", "register:40f0:8", ["const:8ed420:8", "const:4:8"]]
+ 008ed420 ["CALL", null, ["callee:0047ec3c:8"]]
- 008ec5b4 ["INT_ADD", "register:40f0:8", ["const:8ec5b4:8", "const:4:8"]]
- 008ec5b4 ["CALL", null, ["callee:0047ec3c:8"]]
+ 008ed560 ["INT_ADD", "register:40f0:8", ["const:8ed560:8", "const:4:8"]]
+ 008ed560 ["CALL", null, ["callee:0047ec3c:8"]]
- 008ec894 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:6e0:8"]]
- 008ec894 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 008ed840 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:6b0:8"]]
+ 008ed840 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
~~~


<a id="compare-46f6a2ab7621c86bba9c2328c4b25781"></a>

### [`008eca90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008eca90.md) → [`008eda3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ed/008eda3c.md) FUN_008eda3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f7ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f7/008f7ecc.md) · 呼出先 7件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`008f8e78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f8/008f8e78.md) · 呼出先 7件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_call_alignment

命令の説明率　旧版 91.32% / 新版 91.32%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `call_target` 2件, `unresolved_call_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008eda58",
      "incomplete_value": true,
      "site": "008eda58",
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
      "definition_site": "008ecaac",
      "incomplete_value": true,
      "site": "008ecaac",
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
      "definition_site": "008eda60",
      "incomplete_value": false,
      "site": "008eda74",
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
      "definition_site": "008ecab4",
      "incomplete_value": false,
      "site": "008ecac8",
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
    "new": {
      "definition_site": "008eda68",
      "incomplete_value": false,
      "site": "008eda74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ecabc",
      "incomplete_value": false,
      "site": "008ecac8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
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
      "008eda54",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008eda60",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008eda68",
      "PARAM",
      [
        "storage",
        "00c859a0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008eda54",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008eda60",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008eda68",
      "PARAM",
      [
        "storage",
        "00c86970",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ecac8 ["INT_ADD", "register:40f0:8", ["const:8ecac8:8", "const:4:8"]]
- 008ecac8 ["CALL", null, ["callee:00c596b0:8"]]
+ 008eda74 ["INT_ADD", "register:40f0:8", ["const:8eda74:8", "const:4:8"]]
+ 008eda74 ["CALL", null, ["callee:00c596b0:8"]]
- 008ecc5c ["INT_ADD", "register:40f0:8", ["const:8ecc5c:8", "const:4:8"]]
- 008ecc5c ["CALL", null, ["ram:8c9dfc:8"]]
+ 008edc08 ["INT_ADD", "register:40f0:8", ["const:8edc08:8", "const:4:8"]]
+ 008edc08 ["CALL", null, ["ram:8cada8:8"]]
- 008ecd54 ["INT_ADD", "register:40f0:8", ["const:8ecd54:8", "const:4:8"]]
- 008ecd54 ["CALL", null, ["ram:8c9dfc:8"]]
+ 008edd00 ["INT_ADD", "register:40f0:8", ["const:8edd00:8", "const:4:8"]]
+ 008edd00 ["CALL", null, ["ram:8cada8:8"]]
~~~


<a id="compare-eedbc6fa2348a0bb2a48bac9863c13af"></a>

### [`008eceb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008eceb4.md) → [`008ede60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ed/008ede60.md) FUN_008ede60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f6b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6b3c.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008f7ae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7ae8.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 82.71% / 新版 82.71%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ecf6c",
      "incomplete_value": true,
      "site": "008ecf70",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ee040",
      "incomplete_value": false,
      "site": "008ee044",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "old": null,
    "ordinal": 24,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ee03c",
      "incomplete_value": true,
      "site": "008ee044",
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
    "old": null,
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
      "unmatched:008ecf94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008edf60"
      ]
    ],
    [
      "unmatched:008ecfbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008edf94"
      ]
    ],
    [
      "unmatched:008ecfc8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ]
  ],
  "added": [
    [
      "008edf40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008edf60"
      ]
    ],
    [
      "008edf68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008edf94"
      ]
    ],
    [
      "008edf74",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ecf70 ["INT_ADD", "register:40f0:8", ["const:8ecf70:8", "const:4:8"]]
- 008ecf70 ["CALL", null, ["callee:00c58f20:8"]]
+ 008edf1c ["INT_ADD", "register:40f0:8", ["const:8edf1c:8", "const:4:8"]]
+ 008edf1c ["CALL", null, ["callee:00c58f20:8"]]
- 008ed098 ["INT_ADD", "register:40f0:8", ["const:8ed098:8", "const:4:8"]]
- 008ed098 ["CALL", null, ["callee:00c54d90:8"]]
+ 008ee044 ["INT_ADD", "register:40f0:8", ["const:8ee044:8", "const:4:8"]]
+ 008ee044 ["CALL", null, ["callee:00c54d90:8"]]
- 008ed1d0 ["INT_ADD", "register:40f0:8", ["const:8ed1d0:8", "const:4:8"]]
- 008ed1d0 ["CALL", null, ["callee:00c54d90:8"]]
+ 008ee17c ["INT_ADD", "register:40f0:8", ["const:8ee17c:8", "const:4:8"]]
+ 008ee17c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-6967b65762f1937f785c4e93eeb12853"></a>

### [`008ed20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ed/008ed20c.md) → [`008ee1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ee/008ee1b8.md) FUN_008ee1b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) [`008f3098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f3098.md) [`008f66e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f66e8.md) · 呼出先 53件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md) [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md)
- 新版 呼出元 3件 [`008f09f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f0/008f09f4.md) [`008f4044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f4/008f4044.md) [`008f7694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7694.md) · 呼出先 53件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046ead0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ead0.md) [`0046eae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eae0.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.36% / 新版 83.36%

優先判定に残った影響 `call_argument_candidate` 33件, `call_target` 6件, `store_condition` 1件, `store_value` 4件, `unresolved_branch_alignment` 32件, `unresolved_call_alignment` 36件, `unresolved_store_alignment` 74件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ee8a8",
      "incomplete_value": false,
      "site": "008ee8a8",
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
            "const:ef3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ed8fc",
      "incomplete_value": false,
      "site": "008ed8fc",
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
            "const:e26:8"
          ]
        ]
      ]
    },
    "ordinal": 52,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ee8d4",
      "incomplete_value": false,
      "site": "008ee8d4",
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
            "const:1c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ed928",
      "incomplete_value": false,
      "site": "008ed928",
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
            "const:ec4:8"
          ]
        ]
      ]
    },
    "ordinal": 56,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ee8fc",
      "incomplete_value": false,
      "site": "008ee8fc",
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
            "const:f97:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ed950",
      "incomplete_value": false,
      "site": "008ed950",
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
            "const:eb9:8"
          ]
        ]
      ]
    },
    "ordinal": 57,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ed20c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ed210",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ed214",
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
      "008ee1b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008ee1bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008ee1c0",
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
- 008ed3f0 ["INT_ADD", "register:40f0:8", ["const:8ed3f0:8", "const:4:8"]]
- 008ed3f0 ["CALL", null, ["ram:6650ac:8"]]
+ 008ee39c ["INT_ADD", "register:40f0:8", ["const:8ee39c:8", "const:4:8"]]
+ 008ee39c ["CALL", null, ["ram:66545c:8"]]
- 008edbf8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008edbf8 ["INT_ADD", "register:40f0:8", ["const:8edbf8:8", "const:4:8"]]
- 008edbf8 ["CALLIND", null, ["register:0:8"]]
+ 008eeba4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008eeba4 ["INT_ADD", "register:40f0:8", ["const:8eeba4:8", "const:4:8"]]
+ 008eeba4 ["CALLIND", null, ["register:0:8"]]
- 008edc70 ["INT_ADD", "register:40f0:8", ["const:8edc70:8", "const:4:8"]]
- 008edc70 ["CALL", null, ["callee:00c58f20:8"]]
+ 008eec1c ["INT_ADD", "register:40f0:8", ["const:8eec1c:8", "const:4:8"]]
+ 008eec1c ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-3aaf8e6f348b315727e9a9adb9724dbf"></a>

### [`008ef95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008ef95c.md) → [`008f0908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f0/008f0908.md) FUN_008f0908

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008f66e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f66e8.md) · 呼出先 5件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006c0f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f84.md) [`006c1f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c1/006c1f88.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)
- 新版 呼出元 1件 [`008f7694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7694.md) · 呼出先 5件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`006c1334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c1/006c1334.md) [`006c2338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c2/006c2338.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.22% / 新版 93.22%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008f0928",
      "incomplete_value": true,
      "site": "008f0928",
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
      "definition_site": "008ef97c",
      "incomplete_value": true,
      "site": "008ef97c",
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
      "definition_site": "008f0930",
      "incomplete_value": false,
      "site": "008f0944",
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
      "definition_site": "008ef984",
      "incomplete_value": false,
      "site": "008ef998",
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
    "new": {
      "definition_site": "008f0938",
      "incomplete_value": false,
      "site": "008f0944",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ef98c",
      "incomplete_value": false,
      "site": "008ef998",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
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
      "008f0924",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008f0930",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f0938",
      "PARAM",
      [
        "storage",
        "00c859a0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008f0924",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008f0930",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f0938",
      "PARAM",
      [
        "storage",
        "00c86970",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ef998 ["INT_ADD", "register:40f0:8", ["const:8ef998:8", "const:4:8"]]
- 008ef998 ["CALL", null, ["callee:00c596b0:8"]]
+ 008f0944 ["INT_ADD", "register:40f0:8", ["const:8f0944:8", "const:4:8"]]
+ 008f0944 ["CALL", null, ["callee:00c596b0:8"]]
- 008ef970 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 008f091c ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 008ef978 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 008ef978 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 008f0924 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 008f0924 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-708154943f3925b8129fb69723947af5"></a>

### [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) → [`008f09f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f0/008f09f4.md) FUN_008f09f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f6794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6794.md) · 呼出先 41件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`0046ee44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee44.md)
- 新版 呼出元 1件 [`008f7740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7740.md) · 呼出先 41件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046f0ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f0ec.md) [`0046f164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f164.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.05% / 新版 90.05%

優先判定に残った影響 `call_argument_candidate` 22件, `call_target` 4件, `store_condition` 1件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 9件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008f0cf4",
      "incomplete_value": true,
      "site": "008f0cf8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:110:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008efd48",
      "incomplete_value": true,
      "site": "008efd4c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008f0e80",
      "incomplete_value": true,
      "site": "008f0e84",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ea0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008efed4",
      "incomplete_value": true,
      "site": "008efed8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 39,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008f0dec",
      "incomplete_value": true,
      "site": "008f0df4",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 18,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008efa98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f0d0c"
      ]
    ],
    [
      "unmatched:008efb50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f0bc8"
      ]
    ],
    [
      "unmatched:008efbac",
      "READ",
      [
        "storage",
        "00c9b5f8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008f0a44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f0d0c"
      ]
    ],
    [
      "008f0afc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f0bc8"
      ]
    ],
    [
      "008f0b58",
      "READ",
      [
        "storage",
        "00c9c5c8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008efe48 ["INT_ADD", "register:40f0:8", ["const:8efe48:8", "const:4:8"]]
- 008efe48 ["CALL", null, ["callee:008ee1b8:8"]]
+ 008f0df4 ["INT_ADD", "register:40f0:8", ["const:8f0df4:8", "const:4:8"]]
+ 008f0df4 ["CALL", null, ["callee:008ee1b8:8"]]
- 008eff18 ["INT_ADD", "register:40f0:8", ["const:8eff18:8", "const:4:8"]]
- 008eff18 ["CALL", null, ["callee:006c2420:8"]]
+ 008f0ec4 ["INT_ADD", "register:40f0:8", ["const:8f0ec4:8", "const:4:8"]]
+ 008f0ec4 ["CALL", null, ["callee:006c2420:8"]]
- 008eff3c ["INT_ADD", "register:40f0:8", ["const:8eff3c:8", "const:4:8"]]
- 008eff3c ["CALL", null, ["callee:0043be80:8"]]
+ 008f0ee8 ["INT_ADD", "register:40f0:8", ["const:8f0ee8:8", "const:4:8"]]
+ 008f0ee8 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-7f48f58fc67b0898f98172b079d2b102"></a>

### [`008f0a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f0/008f0a28.md) → [`008f19d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f1/008f19d4.md) FUN_008f19d4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f7ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f7/008f7ecc.md) · 呼出先 41件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md)
- 新版 呼出元 1件 [`008f8e78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f8/008f8e78.md) · 呼出先 41件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.09% / 新版 79.09%

優先判定に残った影響 `call_argument_candidate` 69件, `call_target` 1件, `unresolved_branch_alignment` 18件, `unresolved_call_alignment` 39件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008f1a18",
      "incomplete_value": true,
      "site": "008f1a18",
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
      "definition_site": "008f0a6c",
      "incomplete_value": true,
      "site": "008f0a6c",
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
      "definition_site": "008f1a20",
      "incomplete_value": false,
      "site": "008f1a34",
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
      "definition_site": "008f0a74",
      "incomplete_value": false,
      "site": "008f0a88",
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
    "new": {
      "definition_site": "008f1a28",
      "incomplete_value": false,
      "site": "008f1a34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f0a7c",
      "incomplete_value": false,
      "site": "008f0a88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
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
      "008f1a14",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008f1a20",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f1a28",
      "PARAM",
      [
        "storage",
        "00c859a0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008f1a14",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008f1a20",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f1a28",
      "PARAM",
      [
        "storage",
        "00c86970",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f0a88 ["INT_ADD", "register:40f0:8", ["const:8f0a88:8", "const:4:8"]]
- 008f0a88 ["CALL", null, ["callee:00c596b0:8"]]
+ 008f1a34 ["INT_ADD", "register:40f0:8", ["const:8f1a34:8", "const:4:8"]]
+ 008f1a34 ["CALL", null, ["callee:00c596b0:8"]]
- 008f0c64 ["INT_ADD", "register:40f0:8", ["const:8f0c64:8", "const:4:8"]]
- 008f0c64 ["CALL", null, ["ram:665d68:8"]]
+ 008f1c10 ["INT_ADD", "register:40f0:8", ["const:8f1c10:8", "const:4:8"]]
+ 008f1c10 ["CALL", null, ["ram:666118:8"]]
- 008f0d14 ["INT_ADD", "register:40f0:8", ["const:8f0d14:8", "const:4:8"]]
- 008f0d14 ["CALL", null, ["callee:0046ea8c:8"]]
+ 008f1cc0 ["INT_ADD", "register:40f0:8", ["const:8f1cc0:8", "const:4:8"]]
+ 008f1cc0 ["CALL", null, ["callee:0046ea8c:8"]]
~~~


<a id="compare-f2bbb252faa4c89703604aa00deee1e7"></a>

### [`008f2338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f2/008f2338.md) → [`008f32e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f3/008f32e4.md) FUN_008f32e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`008f3098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f3098.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`008f4044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f4/008f4044.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 83.78% / 新版 83.78%

~~~diff
- 008f234c ["INT_ADD", "register:40f0:8", ["const:8f234c:8", "const:4:8"]]
- 008f234c ["CALL", null, ["callee:008524fc:8"]]
+ 008f32f8 ["INT_ADD", "register:40f0:8", ["const:8f32f8:8", "const:4:8"]]
+ 008f32f8 ["CALL", null, ["callee:008524fc:8"]]
- 008f2354 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008f2354 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 008f2354 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 008f2354 ["CBRANCH", null, ["local:b3:8", "tmp:2:1"]]
+ 008f3300 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008f3300 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
+ 008f3300 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
+ 008f3300 ["CBRANCH", null, ["local:b4:8", "tmp:2:1"]]
- 008f2358 ["INT_ADD", "register:40f0:8", ["const:8f2358:8", "const:4:8"]]
- 008f2358 ["CALL", null, ["callee:008524fc:8"]]
+ 008f3304 ["INT_ADD", "register:40f0:8", ["const:8f3304:8", "const:4:8"]]
+ 008f3304 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-c7be398b5cf7e2d0434c9c31be82a360"></a>

### [`008f23cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f2/008f23cc.md) → [`008f3378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f3/008f3378.md) FUN_008f3378

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008eb570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb570.md) · 呼出先 12件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) [`00666360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/00666360.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008f8b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8b18.md)
- 新版 呼出元 1件 [`008ec51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ec51c.md) · 呼出先 12件 [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00633764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633764.md) [`00666710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/00666710.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008f9ac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f9/008f9ac4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 59.65% / 新版 59.65%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008f2464",
      "incomplete_value": true,
      "site": "008f2468",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008f2474",
      "incomplete_value": true,
      "site": "008f247c",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008f24f8",
      "incomplete_value": true,
      "site": "008f2524",
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
      "unmatched:008f2480",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f3448"
      ]
    ],
    [
      "008f3450",
      "DATA",
      [
        "storage",
        "003c92d0",
        null,
        "uleb128"
      ]
    ],
    [
      "008f3454",
      "DATA",
      [
        "storage",
        "003c92d8",
        null,
        "byte[11]"
      ]
    ]
  ],
  "added": [
    [
      "008f342c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f3448"
      ]
    ],
    [
      "008f3450",
      "DATA",
      [
        "storage",
        "003c92d0",
        null,
        "byte[11]"
      ]
    ],
    [
      "008f3454",
      "DATA",
      [
        "storage",
        "003c92d8",
        "fde_003c92d8",
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f2468 ["INT_ADD", "register:40f0:8", ["const:8f2468:8", "const:4:8"]]
- 008f2468 ["CALL", null, ["callee:00c58f20:8"]]
+ 008f3414 ["INT_ADD", "register:40f0:8", ["const:8f3414:8", "const:4:8"]]
+ 008f3414 ["CALL", null, ["callee:00c58f20:8"]]
- 008f247c ["INT_ADD", "register:40f0:8", ["const:8f247c:8", "const:4:8"]]
- 008f247c ["CALL", null, ["callee:00c54d90:8"]]
+ 008f3428 ["INT_ADD", "register:40f0:8", ["const:8f3428:8", "const:4:8"]]
+ 008f3428 ["CALL", null, ["callee:00c54d90:8"]]
- 008f2524 ["INT_ADD", "register:40f0:8", ["const:8f2524:8", "const:4:8"]]
- 008f2524 ["CALL", null, ["callee:008f9ac4:8"]]
+ 008f34d0 ["INT_ADD", "register:40f0:8", ["const:8f34d0:8", "const:4:8"]]
+ 008f34d0 ["CALL", null, ["callee:008f9ac4:8"]]
~~~


<a id="compare-3b6a19fc07da56601b6ba1873ed9f669"></a>

### [`008f26e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f2/008f26e8.md) → [`008f3694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f3/008f3694.md) FUN_008f3694

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md) [`00664870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664870.md) [`00665cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665cbc.md) [`00665cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665cf8.md)
- 新版 呼出元 1件 [`008f63b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f6/008f63b0.md) · 呼出先 14件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00664bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664bb0.md) [`00664c20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664c20.md) [`0066606c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/0066606c.md) [`006660a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/006660a8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 64.80% / 新版 64.80%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 7件, `unresolved_branch_alignment` 29件, `unresolved_call_alignment` 13件, `unresolved_store_alignment` 44件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008f2808",
      "incomplete_value": true,
      "site": "008f281c",
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
            "const:d8:8"
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
    "new": null,
    "old": {
      "definition_site": "008f2810",
      "incomplete_value": true,
      "site": "008f281c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:e0:8"
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
    "new": null,
    "old": {
      "definition_site": "008f2888",
      "incomplete_value": true,
      "site": "008f288c",
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
      "unmatched:008f26ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008f26f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008f26f4",
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
      "008f3698",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008f369c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008f36a0",
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
- 008f281c ["INT_ADD", "register:40f0:8", ["const:8f281c:8", "const:4:8"]]
- 008f281c ["CALL", null, ["callee:00676e50:8"]]
+ 008f37c8 ["INT_ADD", "register:40f0:8", ["const:8f37c8:8", "const:4:8"]]
+ 008f37c8 ["CALL", null, ["callee:00676e50:8"]]
- 008f288c ["INT_ADD", "register:40f0:8", ["const:8f288c:8", "const:4:8"]]
- 008f288c ["CALL", null, ["callee:00676e50:8"]]
+ 008f3838 ["INT_ADD", "register:40f0:8", ["const:8f3838:8", "const:4:8"]]
+ 008f3838 ["CALL", null, ["callee:00676e50:8"]]
- 008f2b6c ["INT_ADD", "register:40f0:8", ["const:8f2b6c:8", "const:4:8"]]
- 008f2b6c ["CALL", null, ["callee:00676e50:8"]]
+ 008f3b18 ["INT_ADD", "register:40f0:8", ["const:8f3b18:8", "const:4:8"]]
+ 008f3b18 ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-fe9119dcd12ee2af3bf80e3071e8b7bf"></a>

### [`008f32b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f32b4.md) → [`008f4260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f4/008f4260.md) FUN_008f4260

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008f6338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6338.md) · 呼出先 16件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468d48.md)
- 新版 呼出元 1件 [`008f72e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f72e4.md) · 呼出先 16件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`00469068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469068.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.20% / 新版 73.20%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 8件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008f4294",
      "incomplete_value": true,
      "site": "008f4294",
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
      "definition_site": "008f32e8",
      "incomplete_value": true,
      "site": "008f32e8",
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
      "definition_site": "008f429c",
      "incomplete_value": false,
      "site": "008f42b0",
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
      "definition_site": "008f32f0",
      "incomplete_value": false,
      "site": "008f3304",
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
    "new": {
      "definition_site": "008f42a4",
      "incomplete_value": false,
      "site": "008f42b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f32f8",
      "incomplete_value": false,
      "site": "008f3304",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
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
      "008f428c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008f429c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f42a4",
      "PARAM",
      [
        "storage",
        "00c859a0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008f428c",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008f429c",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f42a4",
      "PARAM",
      [
        "storage",
        "00c86970",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f3304 ["INT_ADD", "register:40f0:8", ["const:8f3304:8", "const:4:8"]]
- 008f3304 ["CALL", null, ["callee:00c596b0:8"]]
+ 008f42b0 ["INT_ADD", "register:40f0:8", ["const:8f42b0:8", "const:4:8"]]
+ 008f42b0 ["CALL", null, ["callee:00c596b0:8"]]
- 008f3404 ["INT_ADD", "register:40f0:8", ["const:8f3404:8", "const:4:8"]]
- 008f3404 ["CALL", null, ["callee:0048a2ac:8"]]
+ 008f43b0 ["INT_ADD", "register:40f0:8", ["const:8f43b0:8", "const:4:8"]]
+ 008f43b0 ["CALL", null, ["callee:0048a2ac:8"]]
- 008f3418 ["INT_ADD", "register:40f0:8", ["const:8f3418:8", "const:4:8"]]
- 008f3418 ["CALL", null, ["callee:0048a2ac:8"]]
+ 008f43c4 ["INT_ADD", "register:40f0:8", ["const:8f43c4:8", "const:4:8"]]
+ 008f43c4 ["CALL", null, ["callee:0048a2ac:8"]]
~~~


<a id="compare-086b771827da8484ed2604d53df34800"></a>

### [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) → [`008f63b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f6/008f63b0.md) FUN_008f63b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008f66e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f66e8.md) · 呼出先 27件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md)
- 新版 呼出元 1件 [`008f7694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7694.md) · 呼出先 27件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00664bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664bb0.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 98.82% / 新版 98.82%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件, `store_destination` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008f69c0",
      "incomplete_value": false,
      "site": "008f69c0",
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
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f5a14",
      "incomplete_value": false,
      "site": "008f5a14",
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
            "const:6e0:8"
          ]
        ]
      ]
    },
    "ordinal": 109,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008f69e0",
      "incomplete_value": false,
      "site": "008f69e0",
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
            "const:6b4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f5a34",
      "incomplete_value": false,
      "site": "008f5a34",
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
            "const:6e4:8"
          ]
        ]
      ]
    },
    "ordinal": 110,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008f63ec",
      "incomplete_value": true,
      "site": "008f63ec",
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
      "definition_site": "008f5440",
      "incomplete_value": true,
      "site": "008f5440",
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
      "008f63e8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008f63f4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f63fc",
      "PARAM",
      [
        "storage",
        "00c859a0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008f63e8",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008f63f4",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f63fc",
      "PARAM",
      [
        "storage",
        "00c86970",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f545c ["INT_ADD", "register:40f0:8", ["const:8f545c:8", "const:4:8"]]
- 008f545c ["CALL", null, ["callee:00c596b0:8"]]
+ 008f6408 ["INT_ADD", "register:40f0:8", ["const:8f6408:8", "const:4:8"]]
+ 008f6408 ["CALL", null, ["callee:00c596b0:8"]]
- 008f5784 ["INT_ADD", "register:40f0:8", ["const:8f5784:8", "const:4:8"]]
- 008f5784 ["CALL", null, ["ram:665cbc:8"]]
+ 008f6730 ["INT_ADD", "register:40f0:8", ["const:8f6730:8", "const:4:8"]]
+ 008f6730 ["CALL", null, ["ram:66606c:8"]]
- 008f57d4 ["INT_ADD", "register:40f0:8", ["const:8f57d4:8", "const:4:8"]]
- 008f57d4 ["CALL", null, ["callee:008fac14:8"]]
+ 008f6780 ["INT_ADD", "register:40f0:8", ["const:8f6780:8", "const:4:8"]]
+ 008f6780 ["CALL", null, ["callee:008fac14:8"]]
~~~


<a id="compare-71bc67a13dfeae103f4fb4bd3609cd63"></a>

### [`008f6338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6338.md) → [`008f72e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f72e4.md) FUN_008f72e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008f7ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f7/008f7ecc.md) · 呼出先 14件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)
- 新版 呼出元 1件 [`008f8e78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f8/008f8e78.md) · 呼出先 14件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`004699bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004699bc.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.78% / 新版 81.78%

優先判定に残った影響 `call_argument_candidate` 18件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 14件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008f731c",
      "incomplete_value": true,
      "site": "008f731c",
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
      "definition_site": "008f6370",
      "incomplete_value": true,
      "site": "008f6370",
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
      "definition_site": "008f7330",
      "incomplete_value": true,
      "site": "008f7338",
      "value": [
        "live",
        "register:4040:8"
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
      "definition_site": "008f7324",
      "incomplete_value": false,
      "site": "008f7338",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008f633c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008f6340",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008f6344",
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
      "008f72e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008f72ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008f72f0",
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
- 008f638c ["INT_ADD", "register:40f0:8", ["const:8f638c:8", "const:4:8"]]
- 008f638c ["CALL", null, ["callee:00c596b0:8"]]
+ 008f7338 ["INT_ADD", "register:40f0:8", ["const:8f7338:8", "const:4:8"]]
+ 008f7338 ["CALL", null, ["callee:00c596b0:8"]]
- 008f6414 ["INT_ADD", "register:40f0:8", ["const:8f6414:8", "const:4:8"]]
- 008f6414 ["CALL", null, ["callee:008fac14:8"]]
+ 008f73c0 ["INT_ADD", "register:40f0:8", ["const:8f73c0:8", "const:4:8"]]
+ 008f73c0 ["CALL", null, ["callee:008fac14:8"]]
- 008f6644 ["INT_ADD", "register:40f0:8", ["const:8f6644:8", "const:4:8"]]
- 008f6644 ["CALL", null, ["callee:004692e8:8"]]
+ 008f75f0 ["INT_ADD", "register:40f0:8", ["const:8f75f0:8", "const:4:8"]]
+ 008f75f0 ["CALL", null, ["callee:004692e8:8"]]
~~~


<a id="compare-0651ba1f17d8247f821c78e824579c45"></a>

### [`008f66e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f66e8.md) → [`008f7694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7694.md) FUN_008f7694

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008f67b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f67b8.md) · 呼出先 7件 [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md) [`006c4214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4214.md) [`006d18a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d1/006d18a0.md) [`008ed20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ed/008ed20c.md) [`008ef95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008ef95c.md)
- 新版 呼出元 1件 [`008f7764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7764.md) · 呼出先 7件 [`0066d4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4cc.md) [`006c45c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c4/006c45c4.md) [`006d1c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d1/006d1c50.md) [`008ee1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ee/008ee1b8.md) [`008f0908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f0/008f0908.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 90.70% / 新版 90.70%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008f76b4",
      "incomplete_value": false,
      "site": "008f76c8",
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
      "definition_site": "008f6708",
      "incomplete_value": false,
      "site": "008f671c",
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
    "new": {
      "definition_site": "008f76bc",
      "incomplete_value": false,
      "site": "008f76c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f6710",
      "incomplete_value": false,
      "site": "008f671c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
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
      "unmatched:008f66fc",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008f6700",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f76d4"
      ]
    ],
    [
      "008f76b4",
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
      "008f76a8",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008f76ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f76d4"
      ]
    ],
    [
      "008f76b4",
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
- 008f671c ["INT_ADD", "register:40f0:8", ["const:8f671c:8", "const:4:8"]]
- 008f671c ["CALL", null, ["callee:00c596b0:8"]]
+ 008f76c8 ["INT_ADD", "register:40f0:8", ["const:8f76c8:8", "const:4:8"]]
+ 008f76c8 ["CALL", null, ["callee:00c596b0:8"]]
- 008f66f4 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 008f76a0 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 008f66fc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 008f66fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-23e62f02e5848cd462240edeb5a24674"></a>

### [`008f8a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8a40.md) → [`008f99ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f9/008f99ec.md) FUN_008f99ec

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008ebbcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008ebbcc.md) [`008ebec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008ebec8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`008ecb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ecb78.md) [`008ece74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ece74.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008f99f8",
      "incomplete_value": false,
      "site": "008f99fc",
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
      "definition_site": "008f8a4c",
      "incomplete_value": false,
      "site": "008f8a50",
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
      "008f99f8",
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
      "008f99f8",
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
- 008f8a50 ["INT_ADD", "register:40f0:8", ["const:8f8a50:8", "const:4:8"]]
- 008f8a50 ["CALL", null, ["callee:0043bad8:8"]]
+ 008f99fc ["INT_ADD", "register:40f0:8", ["const:8f99fc:8", "const:4:8"]]
+ 008f99fc ["CALL", null, ["callee:0043bad8:8"]]
- 008f8a48 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008f99f4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008f8a4c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008f8a4c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008f8a4c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008f8a4c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008f99f8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 008f99f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008f99f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008f99f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-86080c3be6cf221b360364b73afc9761"></a>

### [`008f8a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8a58.md) → [`008f9a04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f9/008f9a04.md) FUN_008f9a04

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
      "unmatched:008f8a58",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008f8a5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008f8a7c",
      "DATA",
      [
        "storage",
        "00c859c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008f9a04",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008f9a08",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008f9a28",
      "DATA",
      [
        "storage",
        "00c86998",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f8a58 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008f8a58 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008f8a58 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008f8a58 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008f8a5c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008f8a5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 008f8a60 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-2ee93ae0b65588fe1634197f9c24c0c8"></a>

### [`008f8a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8a8c.md) → [`008f9a38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f9/008f9a38.md) FUN_008f9a38

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
      "definition_site": "008f9a44",
      "incomplete_value": false,
      "site": "008f9a44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:998:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f8a98",
      "incomplete_value": false,
      "site": "008f8a98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:9c8:8"
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
      "008f9a44",
      "DATA",
      [
        "storage",
        "00c859c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008f9a44",
      "DATA",
      [
        "storage",
        "00c86998",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f8a90 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 008f9a3c ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008f8a94 ["COPY", "tmp:0:8", ["const:9c8:8"]]
- 008f8a94 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008f8a94 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008f8a94 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008f9a40 ["COPY", "tmp:0:8", ["const:998:8"]]
+ 008f9a40 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008f9a40 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008f9a40 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d16d12c1223d559b3656b239037e2a9f"></a>

### [`008f8aa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8aa8.md) → [`008f9a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f9/008f9a54.md) FUN_008f9a54

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
      "site": "008f9a78",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008f8acc",
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
      "008f9a78",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008f9a78",
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
- 008f8acc ["INT_ADD", "register:40f0:8", ["const:8f8acc:8", "const:4:8"]]
- 008f8acc ["CALL", null, ["ram:47ad34:8"]]
+ 008f9a78 ["INT_ADD", "register:40f0:8", ["const:8f9a78:8", "const:4:8"]]
+ 008f9a78 ["CALL", null, ["ram:47b054:8"]]
- 008f8ad8 ["INT_ADD", "register:40f0:8", ["const:8f8ad8:8", "const:4:8"]]
- 008f8ad8 ["CALL", null, ["callee:0047d134:8"]]
+ 008f9a84 ["INT_ADD", "register:40f0:8", ["const:8f9a84:8", "const:4:8"]]
+ 008f9a84 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-87473e08c6d1ddb5c462f9eaf3fbd4cc"></a>

### [`008f8b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8b18.md) → [`008f9ac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f9/008f9ac4.md) FUN_008f9ac4

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008f23cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f2/008f23cc.md) [`008f8b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8b18.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008f3378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f3/008f3378.md) [`008f9ac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f9/008f9ac4.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 95.50% / 新版 95.50%

優先判定に残った影響 `call_argument_candidate` 9件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008f8c08",
      "incomplete_value": true,
      "site": "008f8c10",
      "value": [
        "live",
        "register:40e0:8"
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
      "definition_site": "008f8c04",
      "incomplete_value": true,
      "site": "008f8c10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "live",
            "register:40a8:8"
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
      "definition_site": "008f9c20",
      "incomplete_value": false,
      "site": "008f9c28",
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
      "definition_site": "008f8c74",
      "incomplete_value": false,
      "site": "008f8c7c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008f8b44",
      "WRITE",
      [
        "storage",
        "Stack[-0xe0]",
        null,
        null
      ]
    ],
    [
      "unmatched:008f8b50",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:008f8b70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f9cf4"
      ]
    ]
  ],
  "added": [
    [
      "008f9af0",
      "WRITE",
      [
        "storage",
        "Stack[-0xe0]",
        null,
        null
      ]
    ],
    [
      "008f9afc",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "008f9b1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f9cf4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f8c10 ["INT_ADD", "register:40f0:8", ["const:8f8c10:8", "const:4:8"]]
- 008f8c10 ["CALL", null, ["callee:00c58fe0:8"]]
+ 008f9bbc ["INT_ADD", "register:40f0:8", ["const:8f9bbc:8", "const:4:8"]]
+ 008f9bbc ["CALL", null, ["callee:00c58fe0:8"]]
- 008f8c7c ["INT_ADD", "register:40f0:8", ["const:8f8c7c:8", "const:4:8"]]
- 008f8c7c ["CALL", null, ["callee:004421f4:8"]]
+ 008f9c28 ["INT_ADD", "register:40f0:8", ["const:8f9c28:8", "const:4:8"]]
+ 008f9c28 ["CALL", null, ["callee:004421f4:8"]]
- 008f8ca4 ["INT_ADD", "register:40f0:8", ["const:8f8ca4:8", "const:4:8"]]
- 008f8ca4 ["CALL", null, ["callee:00442b54:8"]]
+ 008f9c50 ["INT_ADD", "register:40f0:8", ["const:8f9c50:8", "const:4:8"]]
+ 008f9c50 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-052022230683147878c108fa8c110c82"></a>

### [`008f9330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9330.md) → [`008fa2dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fa/008fa2dc.md) FUN_008fa2dc

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008f8b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8b18.md) [`008f9330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9330.md) · 呼出先 23件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`008f9ac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f9/008f9ac4.md) [`008fa2dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fa/008fa2dc.md) · 呼出先 23件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.69% / 新版 98.69%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008fa434",
      "incomplete_value": false,
      "site": "008fa43c",
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
      "definition_site": "008f9488",
      "incomplete_value": false,
      "site": "008f9490",
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
      "definition_site": "008fa4f0",
      "incomplete_value": false,
      "site": "008fa4f8",
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
      "definition_site": "008f9544",
      "incomplete_value": false,
      "site": "008f954c",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008fa508",
      "incomplete_value": false,
      "site": "008fa514",
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
      "definition_site": "008f955c",
      "incomplete_value": false,
      "site": "008f9568",
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
      "008fa434",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008fa4f0",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "008fa508",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008fa434",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "008fa4f0",
      "PARAM",
      [
        "storage",
        "002b5ef6",
        null,
        null
      ]
    ],
    [
      "008fa508",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f9490 ["INT_ADD", "register:40f0:8", ["const:8f9490:8", "const:4:8"]]
- 008f9490 ["CALL", null, ["callee:004421f4:8"]]
+ 008fa43c ["INT_ADD", "register:40f0:8", ["const:8fa43c:8", "const:4:8"]]
+ 008fa43c ["CALL", null, ["callee:004421f4:8"]]
- 008f954c ["INT_ADD", "register:40f0:8", ["const:8f954c:8", "const:4:8"]]
- 008f954c ["CALL", null, ["callee:004421f4:8"]]
+ 008fa4f8 ["INT_ADD", "register:40f0:8", ["const:8fa4f8:8", "const:4:8"]]
+ 008fa4f8 ["CALL", null, ["callee:004421f4:8"]]
- 008f9568 ["INT_ADD", "register:40f0:8", ["const:8f9568:8", "const:4:8"]]
- 008f9568 ["CALL", null, ["callee:00442b54:8"]]
+ 008fa514 ["INT_ADD", "register:40f0:8", ["const:8fa514:8", "const:4:8"]]
+ 008fa514 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-b4cb9c20f087c9135e02a1d6280df843"></a>

### [`008f9c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9c68.md) → [`008fac14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fa/008fac14.md) FUN_008fac14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`008eb570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb570.md) [`008f39fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f39fc.md) [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) [`008f5c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5c38.md) [`008f6338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6338.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 7件 [`008ec51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ec/008ec51c.md) [`008f49a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f4/008f49a8.md) [`008f63b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f6/008f63b0.md) [`008f6be4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f6/008f6be4.md) [`008f72e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f72e4.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_store_alignment

命令の説明率　旧版 84.54% / 新版 84.54%

アドレスに依存する影響 `store_destination` 3件, `store_value` 2件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008facd0",
      "incomplete_value": true,
      "site": "008facd0",
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
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f9d6c",
      "incomplete_value": true,
      "site": "008f9d6c",
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
            "const:58:8"
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008facd8",
      "incomplete_value": true,
      "site": "008facd8",
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
            "const:98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f9d74",
      "incomplete_value": true,
      "site": "008f9d74",
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
            "const:48:8"
          ]
        ]
      ]
    },
    "ordinal": 36,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008fad28",
      "incomplete_value": true,
      "site": "008fad28",
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
            "const:90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f9d7c",
      "incomplete_value": true,
      "site": "008f9d7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4058:8"
          ],
          [
            "leaf",
            "const:90:8"
          ]
        ]
      ]
    },
    "ordinal": 38,
    "slot": 1
  }
]
~~~


~~~diff
- 008f9d6c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:58:8"]]
- 008f9d6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
+ 008facd0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:c8:8"]]
+ 008facd0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
- 008f9d74 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:48:8"]]
- 008f9d74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
+ 008facd8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:98:8"]]
+ 008facd8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
- 008f9cd8 ["INT_ADD", "register:40f0:8", ["const:8f9cd8:8", "const:4:8"]]
- 008f9cd8 ["CALL", null, ["callee:00c58f30:8"]]
+ 008fac84 ["INT_ADD", "register:40f0:8", ["const:8fac84:8", "const:4:8"]]
+ 008fac84 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-066514c286475c750497eaa1afe8f426"></a>

### [`008f9df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9df0.md) → [`008fad9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fa/008fad9c.md) FUN_008fad9c

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
      "definition_site": "008fadb0",
      "incomplete_value": false,
      "site": "008fadb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f9e04",
      "incomplete_value": false,
      "site": "008f9e08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:a48:8"
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
      "008fadb4",
      "DATA",
      [
        "storage",
        "00c85a48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008fadb4",
      "DATA",
      [
        "storage",
        "00c86a18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f9dfc ["INT_ADD", "register:40f0:8", ["const:8f9dfc:8", "const:4:8"]]
- 008f9dfc ["CALL", null, ["callee:00c58f30:8"]]
+ 008fada8 ["INT_ADD", "register:40f0:8", ["const:8fada8:8", "const:4:8"]]
+ 008fada8 ["CALL", null, ["callee:00c58f30:8"]]
- 008f9e00 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008fadac ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008f9e04 ["COPY", "tmp:0:8", ["const:a48:8"]]
- 008f9e04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008f9e04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008f9e04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fadb0 ["COPY", "tmp:0:8", ["const:a18:8"]]
+ 008fadb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fadb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fadb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-12dadee437afdf4adda4c1d197390fc8"></a>

### [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) → [`008fae08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fa/008fae08.md) FUN_008fae08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`008f5340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5340.md) [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) [`008fa2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa2d0.md) · 呼出先 4件 [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) [`008fa160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa160.md) [`008fa2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa2d0.md) [`008fa598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa598.md)
- 新版 呼出元 3件 [`008f62ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f6/008f62ec.md) [`008fae08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fa/008fae08.md) [`008fb27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb27c.md) · 呼出先 4件 [`008fae08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fa/008fae08.md) [`008fb10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb10c.md) [`008fb27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb27c.md) [`008fb544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb544.md)

変更の種類 branch_condition_or_target, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 97.93% / 新版 97.93%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008f9e6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008fa158",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fb0b0"
      ]
    ],
    [
      "unmatched:008fa15c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008fae28"
      ]
    ]
  ],
  "added": [
    [
      "008fae18",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008fb104",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fb0b0"
      ]
    ],
    [
      "008fb108",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008fae28"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f9e6c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008f9e6c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008f9e6c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 008f9e6c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008f9e70 ["COPY", "register:40e8:8", ["register:8:8"]]
- 008f9e78 ["CBRANCH", null, ["local:b3:8", "register:102:1"]]
+ 008fae24 ["CBRANCH", null, ["local:b2:8", "register:102:1"]]
~~~


<a id="compare-b027dccc42996d30d1eafe7831d8c5b7"></a>

### [`008fa160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa160.md) → [`008fb10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb10c.md) FUN_008fb10c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) [`008fa2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa2d0.md) [`008fa598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa598.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008f9c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9c68.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`008fae08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fa/008fae08.md) [`008fb27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb27c.md) [`008fb544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb544.md) · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008fac14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fa/008fac14.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 69.57% / 新版 69.57%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008fb150",
      "incomplete_value": true,
      "site": "008fb164",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "INT_ZEXT",
            "8",
            [
              "INT_OR"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fa1a4",
      "incomplete_value": true,
      "site": "008fa1b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "live",
            "register:40b0:8"
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
      "definition_site": "008fb15c",
      "incomplete_value": false,
      "site": "008fb164",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fa1b0",
      "incomplete_value": true,
      "site": "008fa1b8",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008fb1b8",
      "incomplete_value": false,
      "site": "008fb1c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fa20c",
      "incomplete_value": false,
      "site": "008fa214",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:735:8"
          ]
        ]
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
      "unmatched:008fa1b0",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "unmatched:008fa1b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008fb184",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008fb15c",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "008fb160",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008fb184",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008fa1b8 ["INT_ADD", "register:40f0:8", ["const:8fa1b8:8", "const:4:8"]]
- 008fa1b8 ["CALL", null, ["callee:008fac14:8"]]
+ 008fb164 ["INT_ADD", "register:40f0:8", ["const:8fb164:8", "const:4:8"]]
+ 008fb164 ["CALL", null, ["callee:008fac14:8"]]
- 008fa214 ["INT_ADD", "register:40f0:8", ["const:8fa214:8", "const:4:8"]]
- 008fa214 ["CALL", null, ["callee:008fac14:8"]]
+ 008fb1c0 ["INT_ADD", "register:40f0:8", ["const:8fb1c0:8", "const:4:8"]]
+ 008fb1c0 ["CALL", null, ["callee:008fac14:8"]]
- 008fa268 ["INT_ADD", "register:40f0:8", ["const:8fa268:8", "const:4:8"]]
- 008fa268 ["CALL", null, ["callee:008fac14:8"]]
+ 008fb214 ["INT_ADD", "register:40f0:8", ["const:8fb214:8", "const:4:8"]]
+ 008fb214 ["CALL", null, ["callee:008fac14:8"]]
~~~


<a id="compare-fc18ea30f570a4804b9167948e91c3f4"></a>

### [`008fa2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa2d0.md) → [`008fb27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb27c.md) FUN_008fb27c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) · 呼出先 2件 [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) [`008fa160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa160.md)
- 新版 呼出元 1件 [`008fae08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fa/008fae08.md) · 呼出先 2件 [`008fae08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fa/008fae08.md) [`008fb10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb10c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.89% / 新版 89.89%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 1件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008fa398",
      "incomplete_value": true,
      "site": "008fa3a0",
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
              [
                "live",
                "register:40b8:8"
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
      "definition_site": "008fb374",
      "incomplete_value": true,
      "site": "008fb37c",
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
              [
                "live",
                "register:40a8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008fb378",
      "incomplete_value": true,
      "site": "008fb37c",
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
      "unmatched:008fa2d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008fa2d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008fa2dc",
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
      "008fb280",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008fb284",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008fb288",
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
- 008fa3a0 ["INT_ADD", "register:40f0:8", ["const:8fa3a0:8", "const:4:8"]]
- 008fa3a0 ["CALL", null, ["callee:008fb10c:8"]]
+ 008fb34c ["INT_ADD", "register:40f0:8", ["const:8fb34c:8", "const:4:8"]]
+ 008fb34c ["CALL", null, ["callee:008fb10c:8"]]
- 008fa3d0 ["INT_ADD", "register:40f0:8", ["const:8fa3d0:8", "const:4:8"]]
- 008fa3d0 ["CALL", null, ["callee:008fb10c:8"]]
+ 008fb37c ["INT_ADD", "register:40f0:8", ["const:8fb37c:8", "const:4:8"]]
+ 008fb37c ["CALL", null, ["callee:008fb10c:8"]]
- 008fa410 ["INT_ADD", "register:40f0:8", ["const:8fa410:8", "const:4:8"]]
- 008fa410 ["CALL", null, ["callee:008fae08:8"]]
+ 008fb3bc ["INT_ADD", "register:40f0:8", ["const:8fb3bc:8", "const:4:8"]]
+ 008fb3bc ["CALL", null, ["callee:008fae08:8"]]
~~~


<a id="compare-a11eb7329bd50bc8e6d8d9eaa51f86be"></a>

### [`008fa598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa598.md) → [`008fb544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb544.md) FUN_008fb544

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) [`008fa598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa598.md) · 呼出先 3件 [`008fa160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa160.md) [`008fa598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa598.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`008fae08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fa/008fae08.md) [`008fb544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb544.md) · 呼出先 3件 [`008fb10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb10c.md) [`008fb544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fb544.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008fb6f8",
      "incomplete_value": true,
      "site": "008fb6fc",
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
    "old": {
      "definition_site": "008fa74c",
      "incomplete_value": true,
      "site": "008fa750",
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
      "unmatched:008fa5d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fb8cc"
      ]
    ],
    [
      "unmatched:008fa620",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fb6b0"
      ]
    ],
    [
      "unmatched:008fa664",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008fb10c"
      ]
    ]
  ],
  "added": [
    [
      "008fb584",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fb8cc"
      ]
    ],
    [
      "008fb5cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fb6b0"
      ]
    ],
    [
      "008fb610",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008fb10c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fa750 ["INT_ADD", "register:40f0:8", ["const:8fa750:8", "const:4:8"]]
- 008fa750 ["CALL", null, ["callee:008fb10c:8"]]
+ 008fb6fc ["INT_ADD", "register:40f0:8", ["const:8fb6fc:8", "const:4:8"]]
+ 008fb6fc ["CALL", null, ["callee:008fb10c:8"]]
- 008fa5b8 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
- 008fa5b8 ["CBRANCH", null, ["local:b86:8", "tmp:0:1"]]
+ 008fb564 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
+ 008fb564 ["CBRANCH", null, ["local:b87:8", "tmp:0:1"]]
- 008fa5d8 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008fa5d8 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 008fa5d8 ["CBRANCH", null, ["local:b53:8", "tmp:1:1"]]
~~~


<a id="compare-ba7fe6e4a9e1c3d938756deaca6c0479"></a>

### [`008faba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008faba8.md) → [`008fbb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fbb54.md) FUN_008fbb54

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
      "definition_site": "008fbb68",
      "incomplete_value": false,
      "site": "008fbb6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fabbc",
      "incomplete_value": false,
      "site": "008fabc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:ac8:8"
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
      "008fbb6c",
      "DATA",
      [
        "storage",
        "00c85ac8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008fbb6c",
      "DATA",
      [
        "storage",
        "00c86a98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fabb4 ["INT_ADD", "register:40f0:8", ["const:8fabb4:8", "const:4:8"]]
- 008fabb4 ["CALL", null, ["callee:00c58f30:8"]]
+ 008fbb60 ["INT_ADD", "register:40f0:8", ["const:8fbb60:8", "const:4:8"]]
+ 008fbb60 ["CALL", null, ["callee:00c58f30:8"]]
- 008fabb8 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008fbb64 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008fabbc ["COPY", "tmp:0:8", ["const:ac8:8"]]
- 008fabbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fabbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fabbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fbb68 ["COPY", "tmp:0:8", ["const:a98:8"]]
+ 008fbb68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fbb68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fbb68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b1246170854647e8fa14912e207f823e"></a>

### [`008fabe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fabe4.md) → [`008fbb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fbb90.md) FUN_008fbb90

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.25% / 新版 89.25%

優先判定に残った影響 `call_target` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fbc24",
      "incomplete_value": true,
      "site": "008fbc38",
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
                "const:330:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fac78",
      "incomplete_value": true,
      "site": "008fac8c",
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
                "const:2e0:8"
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
      "definition_site": "008fbc30",
      "incomplete_value": true,
      "site": "008fbc40",
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
                "const:2aa000:8"
              ],
              [
                "leaf",
                "const:3ef:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fac84",
      "incomplete_value": true,
      "site": "008fac94",
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
                "const:2aa000:8"
              ],
              [
                "leaf",
                "const:322:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "008fbc30",
      "incomplete_value": true,
      "site": "008fbc40",
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
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fac84",
      "incomplete_value": true,
      "site": "008fac94",
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
                "const:10:8"
              ]
            ]
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
      "008fbbc8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008fbc24",
      "READ",
      [
        "storage",
        "002c32e0",
        null,
        null
      ]
    ],
    [
      "008fbc30",
      "READ",
      [
        "storage",
        "002aa322",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008fbbc8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008fbc24",
      "READ",
      [
        "storage",
        "002c3330",
        null,
        null
      ]
    ],
    [
      "008fbc30",
      "READ",
      [
        "storage",
        "002aa3ef",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fac1c ["INT_ADD", "register:40f0:8", ["const:8fac1c:8", "const:4:8"]]
- 008fac1c ["CALL", null, ["ram:47ad34:8"]]
+ 008fbbc8 ["INT_ADD", "register:40f0:8", ["const:8fbbc8:8", "const:4:8"]]
+ 008fbbc8 ["CALL", null, ["ram:47b054:8"]]
- 008fac28 ["INT_ADD", "register:40f0:8", ["const:8fac28:8", "const:4:8"]]
- 008fac28 ["CALL", null, ["callee:0047d134:8"]]
+ 008fbbd4 ["INT_ADD", "register:40f0:8", ["const:8fbbd4:8", "const:4:8"]]
+ 008fbbd4 ["CALL", null, ["callee:0047d134:8"]]
- 008fac5c ["INT_ADD", "register:40f0:8", ["const:8fac5c:8", "const:4:8"]]
- 008fac5c ["CALL", null, ["callee:008524fc:8"]]
+ 008fbc08 ["INT_ADD", "register:40f0:8", ["const:8fbc08:8", "const:4:8"]]
+ 008fbc08 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6743a2dc3a4ec31e11a42a36b78f5b5a"></a>

### [`008fae14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fae14.md) → [`008fbdc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fbdc0.md) FUN_008fbdc0

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
      "definition_site": "008fbdd4",
      "incomplete_value": false,
      "site": "008fbdd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fae28",
      "incomplete_value": false,
      "site": "008fae2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:b38:8"
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
      "008fbdd8",
      "DATA",
      [
        "storage",
        "00c85b38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008fbdd8",
      "DATA",
      [
        "storage",
        "00c86b08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fae20 ["INT_ADD", "register:40f0:8", ["const:8fae20:8", "const:4:8"]]
- 008fae20 ["CALL", null, ["callee:00c58f30:8"]]
+ 008fbdcc ["INT_ADD", "register:40f0:8", ["const:8fbdcc:8", "const:4:8"]]
+ 008fbdcc ["CALL", null, ["callee:00c58f30:8"]]
- 008fae24 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008fbdd0 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008fae28 ["COPY", "tmp:0:8", ["const:b38:8"]]
- 008fae28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fae28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fae28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fbdd4 ["COPY", "tmp:0:8", ["const:b08:8"]]
+ 008fbdd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fbdd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fbdd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-66b084bb78f09f4e49c5c8bd78a74a03"></a>

### [`008fae38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fae38.md) → [`008fbde4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fbde4.md) FUN_008fbde4

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
      "definition_site": "008fbde8",
      "incomplete_value": false,
      "site": "008fbdec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fae3c",
      "incomplete_value": false,
      "site": "008fae40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:b38:8"
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
      "008fbdec",
      "DATA",
      [
        "storage",
        "00c85b38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008fbdec",
      "DATA",
      [
        "storage",
        "00c86b08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fae38 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 008fbde4 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008fae3c ["COPY", "tmp:0:8", ["const:b38:8"]]
- 008fae3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fae3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fae3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fbde8 ["COPY", "tmp:0:8", ["const:b08:8"]]
+ 008fbde8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fbde8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fbde8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1623ae7bc6190496e2348f12d4c8cfaf"></a>

### [`008fae50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fae50.md) → [`008fbdfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fbdfc.md) FUN_008fbdfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008fbe24",
      "incomplete_value": false,
      "site": "008fbe2c",
      "value": [
        "leaf",
        "const:b:8"
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
      "definition_site": "008fbe28",
      "incomplete_value": false,
      "site": "008fbe2c",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:008fae74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008fbe20",
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
- 008fae80 ["INT_ADD", "register:40f0:8", ["const:8fae80:8", "const:4:8"]]
- 008fae80 ["CALL", null, ["callee:0047d134:8"]]
+ 008fbe2c ["INT_ADD", "register:40f0:8", ["const:8fbe2c:8", "const:4:8"]]
+ 008fbe2c ["CALL", null, ["callee:0047d134:8"]]
- 008fae58 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008fae58 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 008fbe04 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008fbe04 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 008fae60 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 008fae60 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 008fbe0c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 008fbe0c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-99d12bad5cd836baf4d54a961996f68f"></a>

### [`008faedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008faedc.md) → [`008fbe88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fb/008fbe88.md) FUN_008fbe88

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f67b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f67b8.md) · 呼出先 12件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) [`00758228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00758/00758228.md) [`00862ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00862/00862ca8.md) [`00864590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/00864590.md)
- 新版 呼出元 1件 [`008f7764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7764.md) · 呼出先 12件 [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00633764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633764.md) [`007585d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00758/007585d8.md) [`00863c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00863/00863c54.md) [`0086553c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00865/0086553c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 29.74% / 新版 29.74%

優先判定に残った影響 `call_argument_candidate` 8件, `store_value` 6件, `unresolved_branch_alignment` 62件, `unresolved_call_alignment` 66件, `unresolved_store_alignment` 112件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fc620",
      "incomplete_value": true,
      "site": "008fc620",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5d5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fb674",
      "incomplete_value": true,
      "site": "008fb674",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:50a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 88,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fc638",
      "incomplete_value": true,
      "site": "008fc638",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bd000:8"
              ],
              [
                "leaf",
                "const:ca7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fb68c",
      "incomplete_value": true,
      "site": "008fb68c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bd000:8"
              ],
              [
                "leaf",
                "const:bc9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 90,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fc63c",
      "incomplete_value": true,
      "site": "008fc63c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008fb690",
      "incomplete_value": true,
      "site": "008fb690",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 91,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008faee0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008faee4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008faee8",
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
      "008fbe8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008fbe90",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008fbe94",
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
- 008faf98 ["INT_ADD", "register:40f0:8", ["const:8faf98:8", "const:4:8"]]
- 008faf98 ["CALL", null, ["callee:00633764:8"]]
+ 008fbf44 ["INT_ADD", "register:40f0:8", ["const:8fbf44:8", "const:4:8"]]
+ 008fbf44 ["CALL", null, ["callee:00633764:8"]]
- 008fb6b0 ["INT_ADD", "register:40f0:8", ["const:8fb6b0:8", "const:4:8"]]
- 008fb6b0 ["CALL", null, ["callee:00633764:8"]]
+ 008fc65c ["INT_ADD", "register:40f0:8", ["const:8fc65c:8", "const:4:8"]]
+ 008fc65c ["CALL", null, ["callee:00633764:8"]]
- 008fb7e0 ["INT_ADD", "register:40f0:8", ["const:8fb7e0:8", "const:4:8"]]
- 008fb7e0 ["CALL", null, ["callee:00633764:8"]]
+ 008fc78c ["INT_ADD", "register:40f0:8", ["const:8fc78c:8", "const:4:8"]]
+ 008fc78c ["CALL", null, ["callee:00633764:8"]]
~~~


<a id="compare-a3ded2b62ea4233d06b2a8e2aada5623"></a>

### [`008fbbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fb/008fbbc0.md) → [`008fcb6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fc/008fcb6c.md) FUN_008fcb6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008fcb84",
      "incomplete_value": false,
      "site": "008fcb88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:3d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fbbd8",
      "incomplete_value": false,
      "site": "008fbbdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:400:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008fcbc0",
      "incomplete_value": false,
      "site": "008fcbc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fbc14",
      "incomplete_value": false,
      "site": "008fbc18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
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
      "008fcb88",
      "DATA",
      [
        "storage",
        "00c78400",
        null,
        "pointer"
      ]
    ],
    [
      "008fcbc4",
      "DATA",
      [
        "storage",
        "00c748e0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008fcb88",
      "DATA",
      [
        "storage",
        "00c793d0",
        null,
        "pointer"
      ]
    ],
    [
      "008fcbc4",
      "DATA",
      [
        "storage",
        "00c758b0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fbbd4 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 008fcb80 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 008fbbd8 ["COPY", "tmp:0:8", ["const:400:8"]]
- 008fbbd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fbbd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fbbd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fcb84 ["COPY", "tmp:0:8", ["const:3d0:8"]]
+ 008fcb84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fcb84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fcb84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008fbbec ["INT_ADD", "register:40f0:8", ["const:8fbbec:8", "const:4:8"]]
- 008fbbec ["CALL", null, ["callee:00c54d90:8"]]
+ 008fcb98 ["INT_ADD", "register:40f0:8", ["const:8fcb98:8", "const:4:8"]]
+ 008fcb98 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-4f2b544309988c3a4edd7eeed8883aa7"></a>

### [`008fbc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fb/008fbc60.md) → [`008fcc0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fc/008fcc0c.md) _INIT_175

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fcc48",
      "incomplete_value": true,
      "site": "008fcc64",
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fbc9c",
      "incomplete_value": true,
      "site": "008fbcb8",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fcc6c",
      "incomplete_value": true,
      "site": "008fcc88",
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fbcc0",
      "incomplete_value": true,
      "site": "008fbcdc",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fcc8c",
      "incomplete_value": true,
      "site": "008fcca8",
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fbce0",
      "incomplete_value": true,
      "site": "008fbcfc",
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
      "008fcc48",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008fcc6c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "008fcc8c",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008fcc48",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "008fcc6c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "008fcc8c",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fbdc0 ["INT_ADD", "register:40f0:8", ["const:8fbdc0:8", "const:4:8"]]
- 008fbdc0 ["CALL", null, ["callee:0043bb58:8"]]
+ 008fcd6c ["INT_ADD", "register:40f0:8", ["const:8fcd6c:8", "const:4:8"]]
+ 008fcd6c ["CALL", null, ["callee:0043bb58:8"]]
- 008fbe94 ["INT_ADD", "register:40f0:8", ["const:8fbe94:8", "const:4:8"]]
- 008fbe94 ["CALL", null, ["callee:00c58ed0:8"]]
+ 008fce40 ["INT_ADD", "register:40f0:8", ["const:8fce40:8", "const:4:8"]]
+ 008fce40 ["CALL", null, ["callee:00c58ed0:8"]]
- 008fbc88 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 008fcc34 ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-9fb79c839facd3752c787f1f92e297d3"></a>

### [`008fbff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fb/008fbff0.md) → [`008fcf9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fc/008fcf9c.md) _INIT_176

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fcfd8",
      "incomplete_value": true,
      "site": "008fcff4",
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fc02c",
      "incomplete_value": true,
      "site": "008fc048",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fcffc",
      "incomplete_value": true,
      "site": "008fd018",
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fc050",
      "incomplete_value": true,
      "site": "008fc06c",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fd01c",
      "incomplete_value": true,
      "site": "008fd038",
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fc070",
      "incomplete_value": true,
      "site": "008fc08c",
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
      "008fcfd8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008fcffc",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "008fd01c",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008fcfd8",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "008fcffc",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "008fd01c",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fc150 ["INT_ADD", "register:40f0:8", ["const:8fc150:8", "const:4:8"]]
- 008fc150 ["CALL", null, ["callee:0043bb58:8"]]
+ 008fd0fc ["INT_ADD", "register:40f0:8", ["const:8fd0fc:8", "const:4:8"]]
+ 008fd0fc ["CALL", null, ["callee:0043bb58:8"]]
- 008fc224 ["INT_ADD", "register:40f0:8", ["const:8fc224:8", "const:4:8"]]
- 008fc224 ["CALL", null, ["callee:00c58ed0:8"]]
+ 008fd1d0 ["INT_ADD", "register:40f0:8", ["const:8fd1d0:8", "const:4:8"]]
+ 008fd1d0 ["CALL", null, ["callee:00c58ed0:8"]]
- 008fc018 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 008fcfc4 ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-dde2dd8714d7e22908e247ed70be806e"></a>

### [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) → [`008fd5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fd/008fd5f0.md) FUN_008fd5f0

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008fea38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fea38.md) · 呼出先 16件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`008ff9e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ff/008ff9e4.md) · 呼出先 16件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 97.54% / 新版 97.54%

優先判定に残った影響 `store_value` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fd680",
      "incomplete_value": true,
      "site": "008fd690",
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
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:8a3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fc6d4",
      "incomplete_value": true,
      "site": "008fc6e4",
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
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:859:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fd684",
      "incomplete_value": true,
      "site": "008fd694",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008fc6d8",
      "incomplete_value": true,
      "site": "008fc6e8",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fd688",
      "incomplete_value": true,
      "site": "008fd698",
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
      "definition_site": "008fc6dc",
      "incomplete_value": true,
      "site": "008fc6ec",
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
      "008fd680",
      "READ",
      [
        "storage",
        "002c1859",
        null,
        "string"
      ]
    ],
    [
      "008fd684",
      "READ",
      [
        "storage",
        "002c1869",
        null,
        "string"
      ]
    ],
    [
      "008fd688",
      "READ",
      [
        "storage",
        "002c22e0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008fd680",
      "READ",
      [
        "storage",
        "002c18a3",
        null,
        "string"
      ]
    ],
    [
      "008fd684",
      "READ",
      [
        "storage",
        "002c18b3",
        null,
        "string"
      ]
    ],
    [
      "008fd688",
      "READ",
      [
        "storage",
        "002c2330",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008fc6c4 ["INT_ADD", "register:40f0:8", ["const:8fc6c4:8", "const:4:8"]]
- 008fc6c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 008fd670 ["INT_ADD", "register:40f0:8", ["const:8fd670:8", "const:4:8"]]
+ 008fd670 ["CALL", null, ["callee:00c58f30:8"]]
- 008fc6cc ["COPY", "tmp:0:8", ["const:859:8"]]
- 008fc6cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fc6cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fc6cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fd678 ["COPY", "tmp:0:8", ["const:8a3:8"]]
+ 008fd678 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fd678 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fd678 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008fc6d0 ["COPY", "register:4048:8", ["const:2c2000:8"]]
~~~


<a id="compare-4c9c9583a8183364bad0b3eaf436038f"></a>

### [`008fcbf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fcbf4.md) → [`008fdba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fd/008fdba0.md) FUN_008fdba0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`008fd5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fd/008fd5f0.md) · 呼出先 12件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

変更の種類 comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 96.04% / 新版 96.04%

優先判定に残った影響 `store_value` 1件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008fdc0c",
      "incomplete_value": false,
      "site": "008fdc10",
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
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fcc60",
      "incomplete_value": false,
      "site": "008fcc64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
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
      "definition_site": "008fdd9c",
      "incomplete_value": true,
      "site": "008fdda0",
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
      "definition_site": "008fcdf0",
      "incomplete_value": true,
      "site": "008fcdf4",
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
    "ordinal": 38,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008fdc10",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008fcdc0",
      "READ",
      [
        "storage",
        "00c9ac80",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008fcdc4",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008fdc10",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "008fdd6c",
      "READ",
      [
        "storage",
        "00c9bc50",
        null,
        "pointer"
      ]
    ],
    [
      "008fdd70",
      "READ",
      [
        "storage",
        "00c9bc58",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fcc58 ["INT_ADD", "register:40f0:8", ["const:8fcc58:8", "const:4:8"]]
- 008fcc58 ["CALL", null, ["callee:00488180:8"]]
+ 008fdc04 ["INT_ADD", "register:40f0:8", ["const:8fdc04:8", "const:4:8"]]
+ 008fdc04 ["CALL", null, ["callee:00488180:8"]]
- 008fcc5c ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 008fdc08 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 008fcc60 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 008fcc60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fcc60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fcc60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fdc0c ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 008fdc0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fdc0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fdc0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


