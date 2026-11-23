# v16.0.2 → v16.0.3 · 最優先の変更候補 (65)

[一覧の目次](README.md)

<a id="compare-f98ee36c896e94415a73b86d7623ff3b"></a>

### [`00929dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929dbc.md) → [`0092ad68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092ad68.md) FUN_0092ad68

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
      "definition_site": "0092ad74",
      "incomplete_value": false,
      "site": "0092ad74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929dc8",
      "incomplete_value": false,
      "site": "00929dc8",
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
            "const:718:8"
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
      "0092ad74",
      "DATA",
      [
        "storage",
        "00c86718",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092ad74",
      "DATA",
      [
        "storage",
        "00c876e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929dc0 ["COPY", "register:4048:8", ["const:c86000:8"]]
+ 0092ad6c ["COPY", "register:4048:8", ["const:c87000:8"]]
- 00929dc4 ["COPY", "tmp:0:8", ["const:718:8"]]
- 00929dc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00929dc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00929dc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0092ad70 ["COPY", "tmp:0:8", ["const:6e8:8"]]
+ 0092ad70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0092ad70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0092ad70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-70b1036800ef40f57037de5b81b11f08"></a>

### [`00929dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929dd8.md) → [`0092ad84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092ad84.md) FUN_0092ad84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009294ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009294ec.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0092a498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092a498.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0092ada4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929df8",
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
      "site": "0092adb0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929e04",
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
      "0092ada4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0092adb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0092ada4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0092adb0",
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
- 00929df8 ["INT_ADD", "register:40f0:8", ["const:929df8:8", "const:4:8"]]
- 00929df8 ["CALL", null, ["ram:47ad34:8"]]
+ 0092ada4 ["INT_ADD", "register:40f0:8", ["const:92ada4:8", "const:4:8"]]
+ 0092ada4 ["CALL", null, ["ram:47b054:8"]]
- 00929e04 ["INT_ADD", "register:40f0:8", ["const:929e04:8", "const:4:8"]]
- 00929e04 ["CALL", null, ["ram:47ad34:8"]]
+ 0092adb0 ["INT_ADD", "register:40f0:8", ["const:92adb0:8", "const:4:8"]]
+ 0092adb0 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-2db78b608caf91fc6a4a0402946f3844"></a>

### [`00929e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929e5c.md) → [`0092ae08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092ae08.md) FUN_0092ae08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0092ae2c",
      "incomplete_value": true,
      "site": "0092ae2c",
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
            "const:768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929e80",
      "incomplete_value": true,
      "site": "00929e80",
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
            "const:798:8"
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
      "0092ae2c",
      "DATA",
      [
        "storage",
        "00c86798",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092ae2c",
      "DATA",
      [
        "storage",
        "00c87768",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929e70 ["INT_ADD", "register:40f0:8", ["const:929e70:8", "const:4:8"]]
- 00929e70 ["CALL", null, ["callee:00c58f30:8"]]
+ 0092ae1c ["INT_ADD", "register:40f0:8", ["const:92ae1c:8", "const:4:8"]]
+ 0092ae1c ["CALL", null, ["callee:00c58f30:8"]]
- 00929e78 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 0092ae24 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00929e7c ["COPY", "tmp:0:8", ["const:798:8"]]
- 00929e7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00929e7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00929e7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092ae28 ["COPY", "tmp:0:8", ["const:768:8"]]
+ 0092ae28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092ae28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092ae28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4e3a0418064e04b603b291cfcacb8fc9"></a>

### [`00929eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929eac.md) → [`0092ae58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092ae58.md) FUN_0092ae58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0092ae80",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929ed4",
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
      "0092ae80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0092ae80",
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
- 00929ed4 ["INT_ADD", "register:40f0:8", ["const:929ed4:8", "const:4:8"]]
- 00929ed4 ["CALL", null, ["ram:47ad34:8"]]
+ 0092ae80 ["INT_ADD", "register:40f0:8", ["const:92ae80:8", "const:4:8"]]
+ 0092ae80 ["CALL", null, ["ram:47b054:8"]]
- 00929ee0 ["INT_ADD", "register:40f0:8", ["const:929ee0:8", "const:4:8"]]
- 00929ee0 ["CALL", null, ["callee:0047d134:8"]]
+ 0092ae8c ["INT_ADD", "register:40f0:8", ["const:92ae8c:8", "const:4:8"]]
+ 0092ae8c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-92f194b35ef26495663b7763fe8127d2"></a>

### [`00929f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929f34.md) → [`0092aee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092aee0.md) FUN_0092aee0

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
      "definition_site": "0092af04",
      "incomplete_value": false,
      "site": "0092af04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929f58",
      "incomplete_value": false,
      "site": "00929f58",
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
            "const:818:8"
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
      "0092af04",
      "DATA",
      [
        "storage",
        "00c86818",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092af04",
      "DATA",
      [
        "storage",
        "00c877e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929f48 ["INT_ADD", "register:40f0:8", ["const:929f48:8", "const:4:8"]]
- 00929f48 ["CALL", null, ["callee:00c58f30:8"]]
+ 0092aef4 ["INT_ADD", "register:40f0:8", ["const:92aef4:8", "const:4:8"]]
+ 0092aef4 ["CALL", null, ["callee:00c58f30:8"]]
- 00929f50 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 0092aefc ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00929f54 ["COPY", "tmp:0:8", ["const:818:8"]]
- 00929f54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00929f54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00929f54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092af00 ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 0092af00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092af00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092af00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d6d6995f53cd56f6a10e0eda732b8884"></a>

### [`00929f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929f68.md) → [`0092af14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092af14.md) FUN_0092af14

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
      "definition_site": "0092af20",
      "incomplete_value": false,
      "site": "0092af20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929f74",
      "incomplete_value": false,
      "site": "00929f74",
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
            "const:818:8"
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
      "0092af20",
      "DATA",
      [
        "storage",
        "00c86818",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092af20",
      "DATA",
      [
        "storage",
        "00c877e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929f6c ["COPY", "register:4048:8", ["const:c86000:8"]]
+ 0092af18 ["COPY", "register:4048:8", ["const:c87000:8"]]
- 00929f70 ["COPY", "tmp:0:8", ["const:818:8"]]
- 00929f70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00929f70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00929f70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0092af1c ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 0092af1c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0092af1c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0092af1c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f86de18183e2ba8594588cb288c511b1"></a>

### [`00929f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929f84.md) → [`0092af30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092af30.md) FUN_0092af30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0092af58",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929fac",
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
      "0092af58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0092af58",
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
- 00929fac ["INT_ADD", "register:40f0:8", ["const:929fac:8", "const:4:8"]]
- 00929fac ["CALL", null, ["ram:47ad34:8"]]
+ 0092af58 ["INT_ADD", "register:40f0:8", ["const:92af58:8", "const:4:8"]]
+ 0092af58 ["CALL", null, ["ram:47b054:8"]]
- 00929fb8 ["INT_ADD", "register:40f0:8", ["const:929fb8:8", "const:4:8"]]
- 00929fb8 ["CALL", null, ["callee:0047d134:8"]]
+ 0092af64 ["INT_ADD", "register:40f0:8", ["const:92af64:8", "const:4:8"]]
+ 0092af64 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-872c41d0402b07f4b8913fb72cb5439c"></a>

### [`0092a00c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a00c.md) → [`0092afb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092afb8.md) FUN_0092afb8

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
      "definition_site": "0092afd8",
      "incomplete_value": false,
      "site": "0092afdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092a02c",
      "incomplete_value": false,
      "site": "0092a030",
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
            "const:898:8"
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
      "0092afdc",
      "DATA",
      [
        "storage",
        "00c86898",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092afdc",
      "DATA",
      [
        "storage",
        "00c87868",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092a020 ["INT_ADD", "register:40f0:8", ["const:92a020:8", "const:4:8"]]
- 0092a020 ["CALL", null, ["callee:00c58f30:8"]]
+ 0092afcc ["INT_ADD", "register:40f0:8", ["const:92afcc:8", "const:4:8"]]
+ 0092afcc ["CALL", null, ["callee:00c58f30:8"]]
- 0092a028 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 0092afd4 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 0092a02c ["COPY", "tmp:0:8", ["const:898:8"]]
- 0092a02c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0092a02c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0092a02c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092afd8 ["COPY", "tmp:0:8", ["const:868:8"]]
+ 0092afd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092afd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092afd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-363e09c93a3f63dda48d677e597680f2"></a>

### [`0092a044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a044.md) → [`0092aff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092aff0.md) FUN_0092aff0

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
      "definition_site": "0092aff4",
      "incomplete_value": false,
      "site": "0092aff8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092a048",
      "incomplete_value": false,
      "site": "0092a04c",
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
            "const:898:8"
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
      "0092aff8",
      "DATA",
      [
        "storage",
        "00c86898",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092aff8",
      "DATA",
      [
        "storage",
        "00c87868",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092a044 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 0092aff0 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 0092a048 ["COPY", "tmp:0:8", ["const:898:8"]]
- 0092a048 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0092a048 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0092a048 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092aff4 ["COPY", "tmp:0:8", ["const:868:8"]]
+ 0092aff4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092aff4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092aff4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b52663c9ddc7c9c04fd4c8af872e123d"></a>

### [`0092a3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a3d0.md) → [`0092b37c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092b/0092b37c.md) FUN_0092b37c

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
      "definition_site": "0092b39c",
      "incomplete_value": false,
      "site": "0092b3a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092a3f0",
      "incomplete_value": false,
      "site": "0092a3f4",
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
            "const:918:8"
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
      "0092b3a0",
      "DATA",
      [
        "storage",
        "00c86918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092b3a0",
      "DATA",
      [
        "storage",
        "00c878e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092a3e4 ["INT_ADD", "register:40f0:8", ["const:92a3e4:8", "const:4:8"]]
- 0092a3e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0092b390 ["INT_ADD", "register:40f0:8", ["const:92b390:8", "const:4:8"]]
+ 0092b390 ["CALL", null, ["callee:00c58f30:8"]]
- 0092a3ec ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 0092b398 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 0092a3f0 ["COPY", "tmp:0:8", ["const:918:8"]]
- 0092a3f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0092a3f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0092a3f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092b39c ["COPY", "tmp:0:8", ["const:8e8:8"]]
+ 0092b39c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092b39c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092b39c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a62d67e27b87b08c25962081a1f9e94c"></a>

### [`0092a408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a408.md) → [`0092b3b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092b/0092b3b4.md) FUN_0092b3b4

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
      "definition_site": "0092b3b8",
      "incomplete_value": false,
      "site": "0092b3bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092a40c",
      "incomplete_value": false,
      "site": "0092a410",
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
            "const:918:8"
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
      "0092b3bc",
      "DATA",
      [
        "storage",
        "00c86918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092b3bc",
      "DATA",
      [
        "storage",
        "00c878e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092a408 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 0092b3b4 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 0092a40c ["COPY", "tmp:0:8", ["const:918:8"]]
- 0092a40c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0092a40c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0092a40c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092b3b8 ["COPY", "tmp:0:8", ["const:8e8:8"]]
+ 0092b3b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092b3b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092b3b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ceca9748c09762415b176c27f7553377"></a>

### [`0092a468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a468.md) → [`0092b414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092b/0092b414.md) _INIT_183

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.83% / 新版 89.83%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0092b450",
      "incomplete_value": true,
      "site": "0092b46c",
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
      "definition_site": "0092a4a4",
      "incomplete_value": true,
      "site": "0092a4c0",
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
      "definition_site": "0092b4b4",
      "incomplete_value": true,
      "site": "0092b4cc",
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
                "const:fe0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092a508",
      "incomplete_value": true,
      "site": "0092a520",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0092b644",
      "incomplete_value": false,
      "site": "0092b648",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092a698",
      "incomplete_value": false,
      "site": "0092a69c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:60:8"
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
      "0092b450",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0092b474",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0092b494",
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
      "0092b450",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0092b474",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0092b494",
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
- 0092a69c ["INT_ADD", "register:40f0:8", ["const:92a69c:8", "const:4:8"]]
- 0092a69c ["CALL", null, ["callee:00c58ed0:8"]]
+ 0092b648 ["INT_ADD", "register:40f0:8", ["const:92b648:8", "const:4:8"]]
+ 0092b648 ["CALL", null, ["callee:00c58ed0:8"]]
- 0092a490 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 0092b43c ["COPY", "register:4098:8", ["const:1124000:8"]]
- 0092a494 ["COPY", "tmp:0:8", ["const:b80:8"]]
- 0092a494 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0092a494 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0092a494 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 0092b440 ["COPY", "tmp:0:8", ["const:b40:8"]]
+ 0092b440 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 0092b440 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 0092b440 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-5f4619db70194b38f5b39e57180ca122"></a>

### [`0092a7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a7f8.md) → [`0092b7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092b/0092b7a4.md) FUN_0092b7a4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0092dd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092d/0092dd14.md) [`00930468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930468.md) [`00934dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934dac.md) · 呼出先 55件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047d108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d108.md) [`0047d110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d110.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)
- 新版 呼出元 3件 [`0092ecc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092e/0092ecc0.md) [`00931414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931414.md) [`00935d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935d58.md) · 呼出先 55件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d428.md) [`0047d430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d430.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.70% / 新版 97.70%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 3件, `store_value` 22件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0092b838",
      "incomplete_value": true,
      "site": "0092b83c",
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
                "const:2f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092a88c",
      "incomplete_value": true,
      "site": "0092a890",
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
                "const:2a0:8"
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
      "definition_site": "0092b8a8",
      "incomplete_value": true,
      "site": "0092b8b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092a8fc",
      "incomplete_value": true,
      "site": "0092a904",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e18:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0092bad8",
      "incomplete_value": false,
      "site": "0092bad8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092ab2c",
      "incomplete_value": false,
      "site": "0092ab2c",
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
      "0092b838",
      "READ",
      [
        "storage",
        "002c22a0",
        null,
        null
      ]
    ],
    [
      "0092b8a0",
      "READ",
      [
        "storage",
        "002c40f0",
        null,
        "undefined8"
      ]
    ],
    [
      "0092b8a8",
      "READ",
      [
        "storage",
        "002c3e18",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0092b838",
      "READ",
      [
        "storage",
        "002c22f0",
        null,
        null
      ]
    ],
    [
      "0092b8a0",
      "READ",
      [
        "storage",
        "002c4140",
        null,
        "undefined8"
      ]
    ],
    [
      "0092b8a8",
      "READ",
      [
        "storage",
        "002c3e68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092b3b0 ["INT_ADD", "register:40f0:8", ["const:92b3b0:8", "const:4:8"]]
- 0092b3b0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0092c35c ["INT_ADD", "register:40f0:8", ["const:92c35c:8", "const:4:8"]]
+ 0092c35c ["CALL", null, ["callee:00c54d90:8"]]
- 0092b83c ["INT_ADD", "register:40f0:8", ["const:92b83c:8", "const:4:8"]]
- 0092b83c ["CALL", null, ["callee:008524fc:8"]]
+ 0092c7e8 ["INT_ADD", "register:40f0:8", ["const:92c7e8:8", "const:4:8"]]
+ 0092c7e8 ["CALL", null, ["callee:008524fc:8"]]
- 0092b8b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0092b8b0 ["INT_ADD", "register:40f0:8", ["const:92b8b0:8", "const:4:8"]]
- 0092b8b0 ["CALLIND", null, ["register:0:8"]]
+ 0092c85c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0092c85c ["INT_ADD", "register:40f0:8", ["const:92c85c:8", "const:4:8"]]
+ 0092c85c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3c0ae9db493fbbdb3029ba9352a795e9"></a>

### [`0092db44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092d/0092db44.md) → [`0092eaf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092e/0092eaf0.md) FUN_0092eaf0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`0092a7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a7f8.md) [`0092e6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092e/0092e6c0.md) [`009335b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009335b0.md) [`009336d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009336d8.md) [`00933e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933e84.md) · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 6件 [`0092b7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092b/0092b7a4.md) [`0092f66c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092f/0092f66c.md) [`0093455c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/0093455c.md) [`00934684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934684.md) [`00934e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934e30.md) · 呼出先 4件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009375c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/009375c4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.82% / 新版 90.82%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0092eb24",
      "incomplete_value": true,
      "site": "0092eb3c",
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
                "const:29f000:8"
              ],
              [
                "leaf",
                "const:67b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092db78",
      "incomplete_value": true,
      "site": "0092db90",
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
                "const:29f000:8"
              ],
              [
                "leaf",
                "const:63b:8"
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
      "definition_site": "0092eb94",
      "incomplete_value": true,
      "site": "0092ebac",
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
                "const:721:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092dbe8",
      "incomplete_value": true,
      "site": "0092dc00",
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
                "const:656:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0092ec00",
      "incomplete_value": true,
      "site": "0092ec18",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:405:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092dc54",
      "incomplete_value": true,
      "site": "0092dc6c",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:338:8"
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
      "0092eb24",
      "READ",
      [
        "storage",
        "0029f63b",
        null,
        "string"
      ]
    ],
    [
      "0092eb94",
      "READ",
      [
        "storage",
        "002a2656",
        null,
        "string"
      ]
    ],
    [
      "0092ec00",
      "READ",
      [
        "storage",
        "002a9338",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0092eb24",
      "READ",
      [
        "storage",
        "0029f67b",
        null,
        "string"
      ]
    ],
    [
      "0092eb94",
      "READ",
      [
        "storage",
        "002a2721",
        null,
        "string"
      ]
    ],
    [
      "0092ec00",
      "READ",
      [
        "storage",
        "002a9405",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092db68 ["INT_ADD", "register:40f0:8", ["const:92db68:8", "const:4:8"]]
- 0092db68 ["CALL", null, ["callee:008524fc:8"]]
+ 0092eb14 ["INT_ADD", "register:40f0:8", ["const:92eb14:8", "const:4:8"]]
+ 0092eb14 ["CALL", null, ["callee:008524fc:8"]]
- 0092db70 ["COPY", "tmp:0:8", ["const:63b:8"]]
- 0092db70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0092db70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0092db70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0092eb1c ["COPY", "tmp:0:8", ["const:67b:8"]]
+ 0092eb1c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0092eb1c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0092eb1c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0092dba8 ["INT_ADD", "register:40f0:8", ["const:92dba8:8", "const:4:8"]]
- 0092dba8 ["CALL", null, ["callee:009375c4:8"]]
+ 0092eb54 ["INT_ADD", "register:40f0:8", ["const:92eb54:8", "const:4:8"]]
+ 0092eb54 ["CALL", null, ["callee:009375c4:8"]]
~~~


<a id="compare-3e9467be164836aaea2552572528b8fd"></a>

### [`0092e6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092e/0092e6c0.md) → [`0092f66c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092f/0092f66c.md) FUN_0092f66c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00930468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930468.md) [`00934dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934dac.md) · 呼出先 39件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047d108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d108.md) [`0047d110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d110.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)
- 新版 呼出元 2件 [`00931414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931414.md) [`00935d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935d58.md) · 呼出先 39件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d428.md) [`0047d430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d430.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.55% / 新版 97.55%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `call_target` 2件, `store_value` 9件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0092f700",
      "incomplete_value": true,
      "site": "0092f704",
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
                "const:160:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092e754",
      "incomplete_value": true,
      "site": "0092e758",
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
                "const:110:8"
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
      "definition_site": "0092f734",
      "incomplete_value": true,
      "site": "0092f744",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ea8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092e788",
      "incomplete_value": true,
      "site": "0092e798",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e58:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0092f974",
      "incomplete_value": false,
      "site": "0092f974",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092e9c8",
      "incomplete_value": false,
      "site": "0092e9c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:798:8"
          ]
        ]
      ]
    },
    "ordinal": 37,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0092f700",
      "READ",
      [
        "storage",
        "002c2110",
        null,
        null
      ]
    ],
    [
      "0092f734",
      "READ",
      [
        "storage",
        "002c3e58",
        null,
        "undefined8"
      ]
    ],
    [
      "0092f810",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0092f700",
      "READ",
      [
        "storage",
        "002c2160",
        null,
        null
      ]
    ],
    [
      "0092f734",
      "READ",
      [
        "storage",
        "002c3ea8",
        null,
        "undefined8"
      ]
    ],
    [
      "0092f810",
      "READ",
      [
        "storage",
        "00c9c408",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092e9f8 ["INT_ADD", "register:40f0:8", ["const:92e9f8:8", "const:4:8"]]
- 0092e9f8 ["CALL", null, ["callee:008b7ff0:8"]]
+ 0092f9a4 ["INT_ADD", "register:40f0:8", ["const:92f9a4:8", "const:4:8"]]
+ 0092f9a4 ["CALL", null, ["callee:008b7ff0:8"]]
- 0092ebb0 ["INT_ADD", "register:40f0:8", ["const:92ebb0:8", "const:4:8"]]
- 0092ebb0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0092fb5c ["INT_ADD", "register:40f0:8", ["const:92fb5c:8", "const:4:8"]]
+ 0092fb5c ["CALL", null, ["callee:00c58f50:8"]]
- 0092ef38 ["INT_ADD", "register:40f0:8", ["const:92ef38:8", "const:4:8"]]
- 0092ef38 ["CALL", null, ["ram:47ad34:8"]]
+ 0092fee4 ["INT_ADD", "register:40f0:8", ["const:92fee4:8", "const:4:8"]]
+ 0092fee4 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-40d9b8d800c78de0e3a4d546a7e47506"></a>

### [`0092fe94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092f/0092fe94.md) → [`00930e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00930/00930e40.md) FUN_00930e40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0093055c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/0093055c.md) · 呼出先 12件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)
- 新版 呼出元 1件 [`00931508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931508.md) · 呼出先 12件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.28% / 新版 99.28%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00930e5c",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0092feb0",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009311e0",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00930234",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "ordinal": 45,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00930e5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "009311e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "00930e5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "009311e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092feb0 ["INT_ADD", "register:40f0:8", ["const:92feb0:8", "const:4:8"]]
- 0092feb0 ["CALL", null, ["ram:48cd38:8"]]
+ 00930e5c ["INT_ADD", "register:40f0:8", ["const:930e5c:8", "const:4:8"]]
+ 00930e5c ["CALL", null, ["ram:48d058:8"]]
- 00930234 ["INT_ADD", "register:40f0:8", ["const:930234:8", "const:4:8"]]
- 00930234 ["CALL", null, ["ram:48cd38:8"]]
+ 009311e0 ["INT_ADD", "register:40f0:8", ["const:9311e0:8", "const:4:8"]]
+ 009311e0 ["CALL", null, ["ram:48d058:8"]]
- 0092fea8 ["INT_ADD", "register:40f0:8", ["const:92fea8:8", "const:4:8"]]
- 0092fea8 ["CALL", null, ["callee:00467bc0:8"]]
+ 00930e54 ["INT_ADD", "register:40f0:8", ["const:930e54:8", "const:4:8"]]
+ 00930e54 ["CALL", null, ["callee:00467bc0:8"]]
~~~


<a id="compare-97722ba000b613c0bf8def96447a288f"></a>

### [`009304d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009304d0.md) → [`0093147c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/0093147c.md) FUN_0093147c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`009307bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009307bc.md) [`00933b7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933b7c.md) [`00934924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934924.md) · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047d1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d1fc.md) [`00726fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/00726fc8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0092e434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092e/0092e434.md)
- 新版 呼出元 3件 [`00931768`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931768.md) [`00934b28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934b28.md) [`009358d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/009358d0.md) · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d51c.md) [`00727378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/00727378.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0092f3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092f/0092f3e0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009314a8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009304fc",
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
      "009314a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009314a8",
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
- 009304fc ["INT_ADD", "register:40f0:8", ["const:9304fc:8", "const:4:8"]]
- 009304fc ["CALL", null, ["ram:47ad34:8"]]
+ 009314a8 ["INT_ADD", "register:40f0:8", ["const:9314a8:8", "const:4:8"]]
+ 009314a8 ["CALL", null, ["ram:47b054:8"]]
- 009304f0 ["INT_ADD", "register:40f0:8", ["const:9304f0:8", "const:4:8"]]
- 009304f0 ["CALL", null, ["callee:008524fc:8"]]
+ 0093149c ["INT_ADD", "register:40f0:8", ["const:93149c:8", "const:4:8"]]
+ 0093149c ["CALL", null, ["callee:008524fc:8"]]
- 00930504 ["INT_ADD", "register:40f0:8", ["const:930504:8", "const:4:8"]]
- 00930504 ["CALL", null, ["callee:0047d51c:8"]]
+ 009314b0 ["INT_ADD", "register:40f0:8", ["const:9314b0:8", "const:4:8"]]
+ 009314b0 ["CALL", null, ["callee:0047d51c:8"]]
~~~


<a id="compare-5792a1251462a07cd7a6ad116da670be"></a>

### [`00930588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930588.md) → [`00931534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931534.md) FUN_00931534

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`009335b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009335b0.md) [`009336d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009336d8.md) [`00933e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933e84.md) [`00933fac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933fac.md) · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 4件 [`0093455c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/0093455c.md) [`00934684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934684.md) [`00934e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934e30.md) [`00934f58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934f58.md) · 呼出先 4件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009375c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/009375c4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.10% / 新版 87.10%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00931568",
      "incomplete_value": true,
      "site": "00931580",
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
                "const:29f000:8"
              ],
              [
                "leaf",
                "const:67b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009305bc",
      "incomplete_value": true,
      "site": "009305d4",
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
                "const:29f000:8"
              ],
              [
                "leaf",
                "const:63b:8"
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
      "definition_site": "009315ac",
      "incomplete_value": true,
      "site": "009315c4",
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
                "const:721:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930600",
      "incomplete_value": true,
      "site": "00930618",
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
                "const:656:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009315f0",
      "incomplete_value": true,
      "site": "00931608",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:405:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930644",
      "incomplete_value": true,
      "site": "0093065c",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:338:8"
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
      "00931568",
      "READ",
      [
        "storage",
        "0029f63b",
        null,
        "string"
      ]
    ],
    [
      "009315ac",
      "READ",
      [
        "storage",
        "002a2656",
        null,
        "string"
      ]
    ],
    [
      "009315f0",
      "READ",
      [
        "storage",
        "002a9338",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00931568",
      "READ",
      [
        "storage",
        "0029f67b",
        null,
        "string"
      ]
    ],
    [
      "009315ac",
      "READ",
      [
        "storage",
        "002a2721",
        null,
        "string"
      ]
    ],
    [
      "009315f0",
      "READ",
      [
        "storage",
        "002a9405",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009305ac ["INT_ADD", "register:40f0:8", ["const:9305ac:8", "const:4:8"]]
- 009305ac ["CALL", null, ["callee:008524fc:8"]]
+ 00931558 ["INT_ADD", "register:40f0:8", ["const:931558:8", "const:4:8"]]
+ 00931558 ["CALL", null, ["callee:008524fc:8"]]
- 009305b4 ["COPY", "tmp:0:8", ["const:63b:8"]]
- 009305b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009305b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009305b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00931560 ["COPY", "tmp:0:8", ["const:67b:8"]]
+ 00931560 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00931560 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00931560 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009305b8 ["COPY", "register:4050:8", ["const:6567:8"]]
~~~


<a id="compare-07cad0ce9b16adb7ac0ea843e3b05a2e"></a>

### [`00930780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930780.md) → [`0093172c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/0093172c.md) FUN_0093172c

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
      "definition_site": "00931740",
      "incomplete_value": false,
      "site": "00931744",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930794",
      "incomplete_value": false,
      "site": "00930798",
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
      "00931744",
      "DATA",
      [
        "storage",
        "00c86998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931744",
      "DATA",
      [
        "storage",
        "00c87968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0093078c ["INT_ADD", "register:40f0:8", ["const:93078c:8", "const:4:8"]]
- 0093078c ["CALL", null, ["callee:00c58f30:8"]]
+ 00931738 ["INT_ADD", "register:40f0:8", ["const:931738:8", "const:4:8"]]
+ 00931738 ["CALL", null, ["callee:00c58f30:8"]]
- 00930790 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 0093173c ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00930794 ["COPY", "tmp:0:8", ["const:998:8"]]
- 00930794 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00930794 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00930794 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931740 ["COPY", "tmp:0:8", ["const:968:8"]]
+ 00931740 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931740 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931740 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-590aa23a6cb9258051f6664f67b7db30"></a>

### [`009307a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009307a4.md) → [`00931750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931750.md) FUN_00931750

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
      "definition_site": "00931754",
      "incomplete_value": false,
      "site": "00931758",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009307a8",
      "incomplete_value": false,
      "site": "009307ac",
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
      "00931758",
      "DATA",
      [
        "storage",
        "00c86998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931758",
      "DATA",
      [
        "storage",
        "00c87968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009307a4 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00931750 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009307a8 ["COPY", "tmp:0:8", ["const:998:8"]]
- 009307a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009307a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009307a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931754 ["COPY", "tmp:0:8", ["const:968:8"]]
+ 00931754 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931754 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931754 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2681d8dcced2df01e2d991c9eaa087d7"></a>

### [`009307bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009307bc.md) → [`00931768`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931768.md) FUN_00931768

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`009304d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009304d0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`0093147c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/0093147c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.92% / 新版 96.92%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00931848",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0093089c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 12,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00931854",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009308a8",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00931848",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00931854",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00931848",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00931854",
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
- 0093089c ["INT_ADD", "register:40f0:8", ["const:93089c:8", "const:4:8"]]
- 0093089c ["CALL", null, ["ram:47ad34:8"]]
+ 00931848 ["INT_ADD", "register:40f0:8", ["const:931848:8", "const:4:8"]]
+ 00931848 ["CALL", null, ["ram:47b054:8"]]
- 009308a8 ["INT_ADD", "register:40f0:8", ["const:9308a8:8", "const:4:8"]]
- 009308a8 ["CALL", null, ["ram:47ad34:8"]]
+ 00931854 ["INT_ADD", "register:40f0:8", ["const:931854:8", "const:4:8"]]
+ 00931854 ["CALL", null, ["ram:47b054:8"]]
- 009307d4 ["INT_ADD", "register:40f0:8", ["const:9307d4:8", "const:4:8"]]
- 009307d4 ["CALL", null, ["callee:008b7ea8:8"]]
+ 00931780 ["INT_ADD", "register:40f0:8", ["const:931780:8", "const:4:8"]]
+ 00931780 ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-66e86d8dea6cf59c150987fc6d1d8cf6"></a>

### [`009308ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009308ec.md) → [`00931898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931898.md) FUN_00931898

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
      "definition_site": "009318ac",
      "incomplete_value": false,
      "site": "009318b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930900",
      "incomplete_value": false,
      "site": "00930904",
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
      "009318b0",
      "DATA",
      [
        "storage",
        "00c86a18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009318b0",
      "DATA",
      [
        "storage",
        "00c879e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009308f8 ["INT_ADD", "register:40f0:8", ["const:9308f8:8", "const:4:8"]]
- 009308f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 009318a4 ["INT_ADD", "register:40f0:8", ["const:9318a4:8", "const:4:8"]]
+ 009318a4 ["CALL", null, ["callee:00c58f30:8"]]
- 009308fc ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 009318a8 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00930900 ["COPY", "tmp:0:8", ["const:a18:8"]]
- 00930900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00930900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00930900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009318ac ["COPY", "tmp:0:8", ["const:9e8:8"]]
+ 009318ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009318ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009318ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-75f38dce1376e95e164c52e646b6c82e"></a>

### [`00930910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930910.md) → [`009318bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/009318bc.md) FUN_009318bc

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
      "definition_site": "009318c0",
      "incomplete_value": false,
      "site": "009318c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930914",
      "incomplete_value": false,
      "site": "00930918",
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
      "009318c4",
      "DATA",
      [
        "storage",
        "00c86a18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009318c4",
      "DATA",
      [
        "storage",
        "00c879e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00930910 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 009318bc ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00930914 ["COPY", "tmp:0:8", ["const:a18:8"]]
- 00930914 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00930914 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00930914 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009318c0 ["COPY", "tmp:0:8", ["const:9e8:8"]]
+ 009318c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009318c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009318c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ba1584d6e1524f8d1a55dc00cdce0de4"></a>

### [`00930928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930928.md) → [`009318d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/009318d4.md) FUN_009318d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47920.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.92% / 新版 96.92%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009319b4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00930a08",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 11,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009319c0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00930a14",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 12,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009319b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009319c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009319b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009319c0",
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
- 00930a08 ["INT_ADD", "register:40f0:8", ["const:930a08:8", "const:4:8"]]
- 00930a08 ["CALL", null, ["ram:47ad34:8"]]
+ 009319b4 ["INT_ADD", "register:40f0:8", ["const:9319b4:8", "const:4:8"]]
+ 009319b4 ["CALL", null, ["ram:47b054:8"]]
- 00930a14 ["INT_ADD", "register:40f0:8", ["const:930a14:8", "const:4:8"]]
- 00930a14 ["CALL", null, ["ram:47ad34:8"]]
+ 009319c0 ["INT_ADD", "register:40f0:8", ["const:9319c0:8", "const:4:8"]]
+ 009319c0 ["CALL", null, ["ram:47b054:8"]]
- 00930940 ["INT_ADD", "register:40f0:8", ["const:930940:8", "const:4:8"]]
- 00930940 ["CALL", null, ["callee:008b7ea8:8"]]
+ 009318ec ["INT_ADD", "register:40f0:8", ["const:9318ec:8", "const:4:8"]]
+ 009318ec ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-f4da90f4cf29b8f1ae8aab6ec52d851e"></a>

### [`00930a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930a58.md) → [`00931a04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931a04.md) FUN_00931a04

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
      "definition_site": "00931a18",
      "incomplete_value": false,
      "site": "00931a1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930a6c",
      "incomplete_value": false,
      "site": "00930a70",
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
      "00931a1c",
      "DATA",
      [
        "storage",
        "00c86a98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931a1c",
      "DATA",
      [
        "storage",
        "00c87a68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00930a64 ["INT_ADD", "register:40f0:8", ["const:930a64:8", "const:4:8"]]
- 00930a64 ["CALL", null, ["callee:00c58f30:8"]]
+ 00931a10 ["INT_ADD", "register:40f0:8", ["const:931a10:8", "const:4:8"]]
+ 00931a10 ["CALL", null, ["callee:00c58f30:8"]]
- 00930a68 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00931a14 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00930a6c ["COPY", "tmp:0:8", ["const:a98:8"]]
- 00930a6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00930a6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00930a6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931a18 ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 00931a18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931a18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931a18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5ce5f2c580ee8be08ac3c3b64f97ae0f"></a>

### [`00930a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930a7c.md) → [`00931a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931a28.md) FUN_00931a28

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
      "definition_site": "00931a2c",
      "incomplete_value": false,
      "site": "00931a30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930a80",
      "incomplete_value": false,
      "site": "00930a84",
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
      "00931a30",
      "DATA",
      [
        "storage",
        "00c86a98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931a30",
      "DATA",
      [
        "storage",
        "00c87a68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00930a7c ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00931a28 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00930a80 ["COPY", "tmp:0:8", ["const:a98:8"]]
- 00930a80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00930a80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00930a80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931a2c ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 00931a2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931a2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931a2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-63c3c7a0918e6a36cf20d00341586201"></a>

### [`00930a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930a94.md) → [`00931a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931a40.md) FUN_00931a40

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 22件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md)
- 新版 呼出元 0件  · 呼出先 22件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.31% / 新版 95.31%

優先判定に残った影響 `call_target` 6件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00931dc8",
      "incomplete_value": false,
      "site": "00931dc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930e1c",
      "incomplete_value": false,
      "site": "00930e1c",
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
            "const:b88:8"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00931b38",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00930b8c",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "ordinal": 10,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00931b48",
      "value": [
        "leaf",
        "ram:7689d8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00930b9c",
      "value": [
        "leaf",
        "ram:7685fc:8"
      ]
    },
    "ordinal": 12,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00931b38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00931b48",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007685fc"
      ]
    ],
    [
      "00931b5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00931b38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "00931b48",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007689d8"
      ]
    ],
    [
      "00931b5c",
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
- 00930b8c ["INT_ADD", "register:40f0:8", ["const:930b8c:8", "const:4:8"]]
- 00930b8c ["CALL", null, ["ram:48cd38:8"]]
+ 00931b38 ["INT_ADD", "register:40f0:8", ["const:931b38:8", "const:4:8"]]
+ 00931b38 ["CALL", null, ["ram:48d058:8"]]
- 00930b9c ["INT_ADD", "register:40f0:8", ["const:930b9c:8", "const:4:8"]]
- 00930b9c ["CALL", null, ["ram:7685fc:8"]]
+ 00931b48 ["INT_ADD", "register:40f0:8", ["const:931b48:8", "const:4:8"]]
+ 00931b48 ["CALL", null, ["ram:7689d8:8"]]
- 00930bb0 ["INT_ADD", "register:40f0:8", ["const:930bb0:8", "const:4:8"]]
- 00930bb0 ["CALL", null, ["ram:47ad34:8"]]
+ 00931b5c ["INT_ADD", "register:40f0:8", ["const:931b5c:8", "const:4:8"]]
+ 00931b5c ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-e6e4c0069780b200380e0fb76846062c"></a>

### [`00931014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931014.md) → [`00931fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931fc0.md) FUN_00931fc0

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
      "definition_site": "00931fd4",
      "incomplete_value": false,
      "site": "00931fd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931028",
      "incomplete_value": false,
      "site": "0093102c",
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
      "00931fd8",
      "DATA",
      [
        "storage",
        "00c86b08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931fd8",
      "DATA",
      [
        "storage",
        "00c87ad8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931020 ["INT_ADD", "register:40f0:8", ["const:931020:8", "const:4:8"]]
- 00931020 ["CALL", null, ["callee:00c58f30:8"]]
+ 00931fcc ["INT_ADD", "register:40f0:8", ["const:931fcc:8", "const:4:8"]]
+ 00931fcc ["CALL", null, ["callee:00c58f30:8"]]
- 00931024 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00931fd0 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00931028 ["COPY", "tmp:0:8", ["const:b08:8"]]
- 00931028 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931028 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931028 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931fd4 ["COPY", "tmp:0:8", ["const:ad8:8"]]
+ 00931fd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931fd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931fd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-680c5ab826750abeba9e079fb5e030dd"></a>

### [`00931038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931038.md) → [`00931fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931fe4.md) FUN_00931fe4

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
      "definition_site": "00931fe8",
      "incomplete_value": true,
      "site": "00931fec",
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
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093103c",
      "incomplete_value": true,
      "site": "00931040",
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
            "const:b08:8"
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
      "00931fec",
      "DATA",
      [
        "storage",
        "00c86b08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931fec",
      "DATA",
      [
        "storage",
        "00c87ad8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931038 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00931fe4 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 0093103c ["COPY", "tmp:0:8", ["const:b08:8"]]
- 0093103c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0093103c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0093103c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931fe8 ["COPY", "tmp:0:8", ["const:ad8:8"]]
+ 00931fe8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931fe8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931fe8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-335ee126753381d8ab81582c708347da"></a>

### [`009310f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009310f8.md) → [`009320a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/009320a4.md) FUN_009320a4

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
      "definition_site": "009320b8",
      "incomplete_value": false,
      "site": "009320bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093110c",
      "incomplete_value": false,
      "site": "00931110",
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
            "const:b88:8"
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
      "009320bc",
      "DATA",
      [
        "storage",
        "00c86b88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009320bc",
      "DATA",
      [
        "storage",
        "00c87b58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931104 ["INT_ADD", "register:40f0:8", ["const:931104:8", "const:4:8"]]
- 00931104 ["CALL", null, ["callee:00c58f30:8"]]
+ 009320b0 ["INT_ADD", "register:40f0:8", ["const:9320b0:8", "const:4:8"]]
+ 009320b0 ["CALL", null, ["callee:00c58f30:8"]]
- 00931108 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 009320b4 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 0093110c ["COPY", "tmp:0:8", ["const:b88:8"]]
- 0093110c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0093110c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0093110c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009320b8 ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 009320b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009320b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009320b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-73fd11396192a8d3321657ca27077988"></a>

### [`0093111c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/0093111c.md) → [`009320c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/009320c8.md) FUN_009320c8

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
      "definition_site": "009320cc",
      "incomplete_value": false,
      "site": "009320d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931120",
      "incomplete_value": false,
      "site": "00931124",
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
            "const:b88:8"
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
      "009320d0",
      "DATA",
      [
        "storage",
        "00c86b88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009320d0",
      "DATA",
      [
        "storage",
        "00c87b58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0093111c ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 009320c8 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00931120 ["COPY", "tmp:0:8", ["const:b88:8"]]
- 00931120 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931120 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931120 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009320cc ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 009320cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009320cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009320cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-81011ecb1ab3e14bb97a6cd477314de8"></a>

### [`009311dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009311dc.md) → [`00932188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932188.md) FUN_00932188

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
      "definition_site": "0093219c",
      "incomplete_value": false,
      "site": "009321a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009311f0",
      "incomplete_value": false,
      "site": "009311f4",
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
            "const:c18:8"
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
      "009321a0",
      "DATA",
      [
        "storage",
        "00c86c18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009321a0",
      "DATA",
      [
        "storage",
        "00c87be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009311e8 ["INT_ADD", "register:40f0:8", ["const:9311e8:8", "const:4:8"]]
- 009311e8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00932194 ["INT_ADD", "register:40f0:8", ["const:932194:8", "const:4:8"]]
+ 00932194 ["CALL", null, ["callee:00c58f30:8"]]
- 009311ec ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00932198 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009311f0 ["COPY", "tmp:0:8", ["const:c18:8"]]
- 009311f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009311f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009311f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0093219c ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 0093219c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0093219c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0093219c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-76c4aac4d0ae067b23ca418cf39ed20c"></a>

### [`00931200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931200.md) → [`009321ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/009321ac.md) FUN_009321ac

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
      "definition_site": "009321b0",
      "incomplete_value": false,
      "site": "009321b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931204",
      "incomplete_value": false,
      "site": "00931208",
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
            "const:c18:8"
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
      "009321b4",
      "DATA",
      [
        "storage",
        "00c86c18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009321b4",
      "DATA",
      [
        "storage",
        "00c87be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931200 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 009321ac ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00931204 ["COPY", "tmp:0:8", ["const:c18:8"]]
- 00931204 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931204 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931204 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009321b0 ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 009321b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009321b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009321b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9b2ebc5e1ca07d5ca69497b8b1e62b0e"></a>

### [`00931218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931218.md) → [`009321c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/009321c4.md) FUN_009321c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004936d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004936d0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`004939f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/004939f0.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.89% / 新版 93.89%

優先判定に残った影響 `call_target` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009322d0",
      "incomplete_value": true,
      "site": "009322d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:384:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931324",
      "incomplete_value": true,
      "site": "00931324",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00932318",
      "incomplete_value": false,
      "site": "00932320",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093136c",
      "incomplete_value": false,
      "site": "00931374",
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
            "const:c88:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009322a8",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009312fc",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "009322a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "009322bc",
      "READ",
      [
        "storage",
        "002c133a",
        null,
        "string"
      ]
    ],
    [
      "00932320",
      "DATA",
      [
        "storage",
        "00c86c88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009322a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "009322bc",
      "READ",
      [
        "storage",
        "002c1384",
        null,
        "string"
      ]
    ],
    [
      "00932320",
      "DATA",
      [
        "storage",
        "00c87c58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009312fc ["INT_ADD", "register:40f0:8", ["const:9312fc:8", "const:4:8"]]
- 009312fc ["CALL", null, ["ram:48cd38:8"]]
+ 009322a8 ["INT_ADD", "register:40f0:8", ["const:9322a8:8", "const:4:8"]]
+ 009322a8 ["CALL", null, ["ram:48d058:8"]]
- 0093139c ["INT_ADD", "register:40f0:8", ["const:93139c:8", "const:4:8"]]
- 0093139c ["CALL", null, ["ram:47ad34:8"]]
+ 00932348 ["INT_ADD", "register:40f0:8", ["const:932348:8", "const:4:8"]]
+ 00932348 ["CALL", null, ["ram:47b054:8"]]
- 009313b8 ["INT_ADD", "register:40f0:8", ["const:9313b8:8", "const:4:8"]]
- 009313b8 ["CALL", null, ["ram:47ad34:8"]]
+ 00932364 ["INT_ADD", "register:40f0:8", ["const:932364:8", "const:4:8"]]
+ 00932364 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-4fc64630ffa9fd0c4eb1918c6cbbeb17"></a>

### [`009314cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009314cc.md) → [`00932478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932478.md) FUN_00932478

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
      "definition_site": "0093248c",
      "incomplete_value": false,
      "site": "00932490",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009314e0",
      "incomplete_value": false,
      "site": "009314e4",
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
            "const:c88:8"
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
      "00932490",
      "DATA",
      [
        "storage",
        "00c86c88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00932490",
      "DATA",
      [
        "storage",
        "00c87c58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009314d8 ["INT_ADD", "register:40f0:8", ["const:9314d8:8", "const:4:8"]]
- 009314d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00932484 ["INT_ADD", "register:40f0:8", ["const:932484:8", "const:4:8"]]
+ 00932484 ["CALL", null, ["callee:00c58f30:8"]]
- 009314dc ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00932488 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009314e0 ["COPY", "tmp:0:8", ["const:c88:8"]]
- 009314e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009314e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009314e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0093248c ["COPY", "tmp:0:8", ["const:c58:8"]]
+ 0093248c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0093248c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0093248c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-430db0f61a2df054d641bb9c5428d4b2"></a>

### [`009314f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009314f0.md) → [`0093249c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/0093249c.md) FUN_0093249c

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
      "definition_site": "009324a0",
      "incomplete_value": false,
      "site": "009324a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009314f4",
      "incomplete_value": false,
      "site": "009314f8",
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
            "const:c88:8"
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
      "009324a4",
      "DATA",
      [
        "storage",
        "00c86c88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009324a4",
      "DATA",
      [
        "storage",
        "00c87c58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009314f0 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 0093249c ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009314f4 ["COPY", "tmp:0:8", ["const:c88:8"]]
- 009314f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009314f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009314f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009324a0 ["COPY", "tmp:0:8", ["const:c58:8"]]
+ 009324a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009324a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009324a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1ad74e2cc795a166a01109e6156094a2"></a>

### [`00931560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931560.md) → [`0093250c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/0093250c.md) FUN_0093250c

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
      "definition_site": "00932530",
      "incomplete_value": false,
      "site": "00932530",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:ce8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931584",
      "incomplete_value": false,
      "site": "00931584",
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
            "const:d18:8"
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
      "00932530",
      "DATA",
      [
        "storage",
        "00c86d18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00932530",
      "DATA",
      [
        "storage",
        "00c87ce8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931574 ["INT_ADD", "register:40f0:8", ["const:931574:8", "const:4:8"]]
- 00931574 ["CALL", null, ["callee:00c58f30:8"]]
+ 00932520 ["INT_ADD", "register:40f0:8", ["const:932520:8", "const:4:8"]]
+ 00932520 ["CALL", null, ["callee:00c58f30:8"]]
- 0093157c ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00932528 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00931580 ["COPY", "tmp:0:8", ["const:d18:8"]]
- 00931580 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931580 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931580 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0093252c ["COPY", "tmp:0:8", ["const:ce8:8"]]
+ 0093252c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0093252c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0093252c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-446bdab2b554f9953f5d7a93d6734e5a"></a>

### [`00931594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931594.md) → [`00932540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932540.md) FUN_00932540

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
      "definition_site": "0093254c",
      "incomplete_value": false,
      "site": "0093254c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:ce8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009315a0",
      "incomplete_value": false,
      "site": "009315a0",
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
            "const:d18:8"
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
      "0093254c",
      "DATA",
      [
        "storage",
        "00c86d18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0093254c",
      "DATA",
      [
        "storage",
        "00c87ce8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931598 ["COPY", "register:4048:8", ["const:c86000:8"]]
+ 00932544 ["COPY", "register:4048:8", ["const:c87000:8"]]
- 0093159c ["COPY", "tmp:0:8", ["const:d18:8"]]
- 0093159c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0093159c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0093159c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00932548 ["COPY", "tmp:0:8", ["const:ce8:8"]]
+ 00932548 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00932548 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00932548 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-387724bbe77b40c12e7d63121b20cb19"></a>

### [`009315b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009315b0.md) → [`0093255c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/0093255c.md) FUN_0093255c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0056089c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/0056089c.md) [`007685fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/007685fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00560bbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560bbc.md) [`007689d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/007689d8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.88% / 新版 95.88%

優先判定に残った影響 `call_target` 4件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00932750",
      "incomplete_value": false,
      "site": "00932760",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009317a4",
      "incomplete_value": false,
      "site": "009317b4",
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
            "const:d88:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00932788",
      "incomplete_value": false,
      "site": "00932798",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009317dc",
      "incomplete_value": false,
      "site": "009317ec",
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
            "const:e08:8"
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0093265c",
      "value": [
        "leaf",
        "ram:7689d8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009316b0",
      "value": [
        "leaf",
        "ram:7685fc:8"
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
      "0093265c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007685fc"
      ]
    ],
    [
      "00932670",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0093268c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0093265c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007689d8"
      ]
    ],
    [
      "00932670",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0093268c",
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
- 009316b0 ["INT_ADD", "register:40f0:8", ["const:9316b0:8", "const:4:8"]]
- 009316b0 ["CALL", null, ["ram:7685fc:8"]]
+ 0093265c ["INT_ADD", "register:40f0:8", ["const:93265c:8", "const:4:8"]]
+ 0093265c ["CALL", null, ["ram:7689d8:8"]]
- 009316c4 ["INT_ADD", "register:40f0:8", ["const:9316c4:8", "const:4:8"]]
- 009316c4 ["CALL", null, ["ram:47ad34:8"]]
+ 00932670 ["INT_ADD", "register:40f0:8", ["const:932670:8", "const:4:8"]]
+ 00932670 ["CALL", null, ["ram:47b054:8"]]
- 009316e0 ["INT_ADD", "register:40f0:8", ["const:9316e0:8", "const:4:8"]]
- 009316e0 ["CALL", null, ["ram:47ad34:8"]]
+ 0093268c ["INT_ADD", "register:40f0:8", ["const:93268c:8", "const:4:8"]]
+ 0093268c ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-55a808b532f06f41c910c8915fb00227"></a>

### [`00931944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931944.md) → [`009328f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/009328f0.md) FUN_009328f0

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
      "definition_site": "00932904",
      "incomplete_value": false,
      "site": "00932908",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931958",
      "incomplete_value": false,
      "site": "0093195c",
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
      "00932908",
      "DATA",
      [
        "storage",
        "00c86d88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00932908",
      "DATA",
      [
        "storage",
        "00c87d58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931950 ["INT_ADD", "register:40f0:8", ["const:931950:8", "const:4:8"]]
- 00931950 ["CALL", null, ["callee:00c58f30:8"]]
+ 009328fc ["INT_ADD", "register:40f0:8", ["const:9328fc:8", "const:4:8"]]
+ 009328fc ["CALL", null, ["callee:00c58f30:8"]]
- 00931954 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00932900 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00931958 ["COPY", "tmp:0:8", ["const:d88:8"]]
- 00931958 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931958 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931958 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00932904 ["COPY", "tmp:0:8", ["const:d58:8"]]
+ 00932904 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00932904 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00932904 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2fff8757c8d27934eb68cb24b4416005"></a>

### [`00931968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931968.md) → [`00932914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932914.md) FUN_00932914

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
      "definition_site": "00932918",
      "incomplete_value": false,
      "site": "0093291c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093196c",
      "incomplete_value": false,
      "site": "00931970",
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
            "const:d88:8"
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
      "0093291c",
      "DATA",
      [
        "storage",
        "00c86d88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0093291c",
      "DATA",
      [
        "storage",
        "00c87d58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931968 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00932914 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 0093196c ["COPY", "tmp:0:8", ["const:d88:8"]]
- 0093196c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0093196c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0093196c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00932918 ["COPY", "tmp:0:8", ["const:d58:8"]]
+ 00932918 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00932918 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00932918 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-099a868189794405b335a6485d8072b4"></a>

### [`00931a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931a28.md) → [`009329d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/009329d4.md) FUN_009329d4

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
      "definition_site": "009329e8",
      "incomplete_value": false,
      "site": "009329ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931a3c",
      "incomplete_value": false,
      "site": "00931a40",
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
            "const:e08:8"
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
      "009329ec",
      "DATA",
      [
        "storage",
        "00c86e08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009329ec",
      "DATA",
      [
        "storage",
        "00c87dd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931a34 ["INT_ADD", "register:40f0:8", ["const:931a34:8", "const:4:8"]]
- 00931a34 ["CALL", null, ["callee:00c58f30:8"]]
+ 009329e0 ["INT_ADD", "register:40f0:8", ["const:9329e0:8", "const:4:8"]]
+ 009329e0 ["CALL", null, ["callee:00c58f30:8"]]
- 00931a38 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 009329e4 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00931a3c ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00931a3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931a3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931a3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009329e8 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009329e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009329e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009329e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-117810bfd9c4b11a5e7cbe72afd7ef93"></a>

### [`00931a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931a4c.md) → [`009329f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/009329f8.md) FUN_009329f8

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
      "definition_site": "009329fc",
      "incomplete_value": false,
      "site": "00932a00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931a50",
      "incomplete_value": false,
      "site": "00931a54",
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
            "const:e08:8"
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
      "00932a00",
      "DATA",
      [
        "storage",
        "00c86e08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00932a00",
      "DATA",
      [
        "storage",
        "00c87dd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931a4c ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 009329f8 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00931a50 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00931a50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931a50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931a50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009329fc ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009329fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009329fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009329fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7b3db3a926b7e07635bbde14ef162680"></a>

### [`00931b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931b0c.md) → [`00932ab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932ab8.md) FUN_00932ab8

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
      "definition_site": "00932adc",
      "incomplete_value": false,
      "site": "00932adc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931b30",
      "incomplete_value": false,
      "site": "00931b30",
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
            "const:e98:8"
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
      "00932adc",
      "DATA",
      [
        "storage",
        "00c86e98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00932adc",
      "DATA",
      [
        "storage",
        "00c87e68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931b20 ["INT_ADD", "register:40f0:8", ["const:931b20:8", "const:4:8"]]
- 00931b20 ["CALL", null, ["callee:00c58f30:8"]]
+ 00932acc ["INT_ADD", "register:40f0:8", ["const:932acc:8", "const:4:8"]]
+ 00932acc ["CALL", null, ["callee:00c58f30:8"]]
- 00931b28 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00932ad4 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00931b2c ["COPY", "tmp:0:8", ["const:e98:8"]]
- 00931b2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931b2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931b2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00932ad8 ["COPY", "tmp:0:8", ["const:e68:8"]]
+ 00932ad8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00932ad8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00932ad8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-196d42aba0f8add741afb51d73edc73b"></a>

### [`00931b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931b40.md) → [`00932aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932aec.md) FUN_00932aec

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
      "definition_site": "00932af8",
      "incomplete_value": false,
      "site": "00932af8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931b4c",
      "incomplete_value": false,
      "site": "00931b4c",
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
            "const:e98:8"
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
      "00932af8",
      "DATA",
      [
        "storage",
        "00c86e98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00932af8",
      "DATA",
      [
        "storage",
        "00c87e68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931b44 ["COPY", "register:4048:8", ["const:c86000:8"]]
+ 00932af0 ["COPY", "register:4048:8", ["const:c87000:8"]]
- 00931b48 ["COPY", "tmp:0:8", ["const:e98:8"]]
- 00931b48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00931b48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00931b48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00932af4 ["COPY", "tmp:0:8", ["const:e68:8"]]
+ 00932af4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00932af4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00932af4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ce185f0c0565224048d3751739c60dd2"></a>

### [`00931b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931b5c.md) → [`00932b08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932b08.md) FUN_00932b08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0056089c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/0056089c.md) [`007685fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/007685fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00560bbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560bbc.md) [`007689d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/007689d8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.06% / 新版 96.06%

優先判定に残った影響 `call_target` 4件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00932d20",
      "incomplete_value": false,
      "site": "00932d30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:ed8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931d74",
      "incomplete_value": false,
      "site": "00931d84",
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
            "const:f08:8"
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
      "definition_site": "00932d58",
      "incomplete_value": false,
      "site": "00932d68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:f58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931dac",
      "incomplete_value": false,
      "site": "00931dbc",
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
            "const:f88:8"
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00932c08",
      "value": [
        "leaf",
        "ram:7689d8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00931c5c",
      "value": [
        "leaf",
        "ram:7685fc:8"
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
      "00932c08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007685fc"
      ]
    ],
    [
      "00932c1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00932c38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00932c08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007689d8"
      ]
    ],
    [
      "00932c1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00932c38",
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
- 00931c5c ["INT_ADD", "register:40f0:8", ["const:931c5c:8", "const:4:8"]]
- 00931c5c ["CALL", null, ["ram:7685fc:8"]]
+ 00932c08 ["INT_ADD", "register:40f0:8", ["const:932c08:8", "const:4:8"]]
+ 00932c08 ["CALL", null, ["ram:7689d8:8"]]
- 00931c70 ["INT_ADD", "register:40f0:8", ["const:931c70:8", "const:4:8"]]
- 00931c70 ["CALL", null, ["ram:47ad34:8"]]
+ 00932c1c ["INT_ADD", "register:40f0:8", ["const:932c1c:8", "const:4:8"]]
+ 00932c1c ["CALL", null, ["ram:47b054:8"]]
- 00931c8c ["INT_ADD", "register:40f0:8", ["const:931c8c:8", "const:4:8"]]
- 00931c8c ["CALL", null, ["ram:47ad34:8"]]
+ 00932c38 ["INT_ADD", "register:40f0:8", ["const:932c38:8", "const:4:8"]]
+ 00932c38 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-119f483ba346e320f9c0bbe78f34a6f3"></a>

### [`00931f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931f14.md) → [`00932ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932ec0.md) FUN_00932ec0

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
      "definition_site": "00932ed4",
      "incomplete_value": false,
      "site": "00932ed8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:ed8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931f28",
      "incomplete_value": false,
      "site": "00931f2c",
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
            "const:f08:8"
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
      "00932ed8",
      "DATA",
      [
        "storage",
        "00c86f08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00932ed8",
      "DATA",
      [
        "storage",
        "00c87ed8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931f20 ["INT_ADD", "register:40f0:8", ["const:931f20:8", "const:4:8"]]
- 00931f20 ["CALL", null, ["callee:00c58f30:8"]]
+ 00932ecc ["INT_ADD", "register:40f0:8", ["const:932ecc:8", "const:4:8"]]
+ 00932ecc ["CALL", null, ["callee:00c58f30:8"]]
- 00931f24 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00932ed0 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00931f28 ["COPY", "tmp:0:8", ["const:f08:8"]]
- 00931f28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931f28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931f28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00932ed4 ["COPY", "tmp:0:8", ["const:ed8:8"]]
+ 00932ed4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00932ed4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00932ed4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-059f9e7c073ba8f944bc8033047e3e32"></a>

### [`00931f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931f38.md) → [`00932ee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932ee4.md) FUN_00932ee4

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
      "definition_site": "00932ee8",
      "incomplete_value": false,
      "site": "00932eec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:ed8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931f3c",
      "incomplete_value": false,
      "site": "00931f40",
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
            "const:f08:8"
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
      "00932eec",
      "DATA",
      [
        "storage",
        "00c86f08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00932eec",
      "DATA",
      [
        "storage",
        "00c87ed8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931f38 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00932ee4 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00931f3c ["COPY", "tmp:0:8", ["const:f08:8"]]
- 00931f3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931f3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931f3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00932ee8 ["COPY", "tmp:0:8", ["const:ed8:8"]]
+ 00932ee8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00932ee8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00932ee8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7d6b2bfcb2a005b24ab3188cf4522323"></a>

### [`00931ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931ff8.md) → [`00932fa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932fa4.md) FUN_00932fa4

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
      "definition_site": "00932fb8",
      "incomplete_value": false,
      "site": "00932fbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:f58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093200c",
      "incomplete_value": false,
      "site": "00932010",
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
            "const:f88:8"
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
      "00932fbc",
      "DATA",
      [
        "storage",
        "00c86f88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00932fbc",
      "DATA",
      [
        "storage",
        "00c87f58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00932004 ["INT_ADD", "register:40f0:8", ["const:932004:8", "const:4:8"]]
- 00932004 ["CALL", null, ["callee:00c58f30:8"]]
+ 00932fb0 ["INT_ADD", "register:40f0:8", ["const:932fb0:8", "const:4:8"]]
+ 00932fb0 ["CALL", null, ["callee:00c58f30:8"]]
- 00932008 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00932fb4 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 0093200c ["COPY", "tmp:0:8", ["const:f88:8"]]
- 0093200c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0093200c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0093200c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00932fb8 ["COPY", "tmp:0:8", ["const:f58:8"]]
+ 00932fb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00932fb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00932fb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7dc4f0ee5455f80259cbefe5162eeb1b"></a>

### [`0093201c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/0093201c.md) → [`00932fc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932fc8.md) FUN_00932fc8

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
      "definition_site": "00932fcc",
      "incomplete_value": false,
      "site": "00932fd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:f58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00932020",
      "incomplete_value": false,
      "site": "00932024",
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
            "const:f88:8"
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
      "00932fd0",
      "DATA",
      [
        "storage",
        "00c86f88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00932fd0",
      "DATA",
      [
        "storage",
        "00c87f58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0093201c ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00932fc8 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00932020 ["COPY", "tmp:0:8", ["const:f88:8"]]
- 00932020 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00932020 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00932020 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00932fcc ["COPY", "tmp:0:8", ["const:f58:8"]]
+ 00932fcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00932fcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00932fcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5026cad3ddfd73840475f7e9823f7a1a"></a>

### [`009320dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/009320dc.md) → [`00933088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933088.md) FUN_00933088

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
      "definition_site": "0093309c",
      "incomplete_value": false,
      "site": "009330a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009320f0",
      "incomplete_value": false,
      "site": "009320f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:18:8"
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
      "009330a0",
      "DATA",
      [
        "storage",
        "00c87018",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009330a0",
      "DATA",
      [
        "storage",
        "00c87fe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009320e8 ["INT_ADD", "register:40f0:8", ["const:9320e8:8", "const:4:8"]]
- 009320e8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00933094 ["INT_ADD", "register:40f0:8", ["const:933094:8", "const:4:8"]]
+ 00933094 ["CALL", null, ["callee:00c58f30:8"]]
- 009320f0 ["COPY", "tmp:0:8", ["const:18:8"]]
- 009320f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009320f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009320f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0093309c ["COPY", "tmp:0:8", ["const:fe8:8"]]
+ 0093309c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0093309c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0093309c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-65918494f8c28042458c58f7a44300fe"></a>

### [`00932100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932100.md) → [`009330ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/009330ac.md) FUN_009330ac

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
      "definition_site": "009330b0",
      "incomplete_value": false,
      "site": "009330b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00932104",
      "incomplete_value": false,
      "site": "00932108",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:18:8"
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
      "009330b4",
      "DATA",
      [
        "storage",
        "00c87018",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009330b4",
      "DATA",
      [
        "storage",
        "00c87fe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00932104 ["COPY", "tmp:0:8", ["const:18:8"]]
- 00932104 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00932104 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00932104 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009330b0 ["COPY", "tmp:0:8", ["const:fe8:8"]]
+ 009330b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009330b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009330b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0c57deffca6b44f444cfeb717c6773e7"></a>

### [`00932118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932118.md) → [`009330c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/009330c4.md) FUN_009330c4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 16件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0056089c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/0056089c.md) [`007685fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/007685fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 16件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00560bbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560bbc.md) [`007689d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/007689d8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.43% / 新版 95.43%

優先判定に残った影響 `call_target` 4件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0093326c",
      "incomplete_value": false,
      "site": "0093327c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009322c0",
      "incomplete_value": false,
      "site": "009322d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:88:8"
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
      "definition_site": "009332a4",
      "incomplete_value": false,
      "site": "009332b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009322f8",
      "incomplete_value": false,
      "site": "00932308",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009331c4",
      "value": [
        "leaf",
        "ram:7689d8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00932218",
      "value": [
        "leaf",
        "ram:7685fc:8"
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
      "009331c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007685fc"
      ]
    ],
    [
      "009331d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009331f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009331c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007689d8"
      ]
    ],
    [
      "009331d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009331f4",
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
- 00932218 ["INT_ADD", "register:40f0:8", ["const:932218:8", "const:4:8"]]
- 00932218 ["CALL", null, ["ram:7685fc:8"]]
+ 009331c4 ["INT_ADD", "register:40f0:8", ["const:9331c4:8", "const:4:8"]]
+ 009331c4 ["CALL", null, ["ram:7689d8:8"]]
- 0093222c ["INT_ADD", "register:40f0:8", ["const:93222c:8", "const:4:8"]]
- 0093222c ["CALL", null, ["ram:47ad34:8"]]
+ 009331d8 ["INT_ADD", "register:40f0:8", ["const:9331d8:8", "const:4:8"]]
+ 009331d8 ["CALL", null, ["ram:47b054:8"]]
- 00932248 ["INT_ADD", "register:40f0:8", ["const:932248:8", "const:4:8"]]
- 00932248 ["CALL", null, ["ram:47ad34:8"]]
+ 009331f4 ["INT_ADD", "register:40f0:8", ["const:9331f4:8", "const:4:8"]]
+ 009331f4 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-e3c7caeb14cacf18d006c83fed783145"></a>

### [`00932460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932460.md) → [`0093340c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/0093340c.md) FUN_0093340c

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
      "definition_site": "00933420",
      "incomplete_value": false,
      "site": "00933424",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00932474",
      "incomplete_value": false,
      "site": "00932478",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:88:8"
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
      "00933424",
      "DATA",
      [
        "storage",
        "00c87088",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00933424",
      "DATA",
      [
        "storage",
        "00c88058",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0093246c ["INT_ADD", "register:40f0:8", ["const:93246c:8", "const:4:8"]]
- 0093246c ["CALL", null, ["callee:00c58f30:8"]]
+ 00933418 ["INT_ADD", "register:40f0:8", ["const:933418:8", "const:4:8"]]
+ 00933418 ["CALL", null, ["callee:00c58f30:8"]]
- 00932470 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 0093341c ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00932474 ["COPY", "tmp:0:8", ["const:88:8"]]
- 00932474 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00932474 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00932474 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00933420 ["COPY", "tmp:0:8", ["const:58:8"]]
+ 00933420 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00933420 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00933420 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bb986b4087f30d564a2eeda3d4646e5d"></a>

### [`00932484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932484.md) → [`00933430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933430.md) FUN_00933430

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
      "definition_site": "00933434",
      "incomplete_value": false,
      "site": "00933438",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00932488",
      "incomplete_value": false,
      "site": "0093248c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:88:8"
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
      "00933438",
      "DATA",
      [
        "storage",
        "00c87088",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00933438",
      "DATA",
      [
        "storage",
        "00c88058",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00932484 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00933430 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00932488 ["COPY", "tmp:0:8", ["const:88:8"]]
- 00932488 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00932488 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00932488 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00933434 ["COPY", "tmp:0:8", ["const:58:8"]]
+ 00933434 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00933434 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00933434 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-929886a08c5bb72235a8b7ea26704ce5"></a>

### [`00932544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932544.md) → [`009334f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/009334f0.md) FUN_009334f0

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
      "definition_site": "00933504",
      "incomplete_value": false,
      "site": "00933508",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00932558",
      "incomplete_value": false,
      "site": "0093255c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:108:8"
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
      "00933508",
      "DATA",
      [
        "storage",
        "00c87108",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00933508",
      "DATA",
      [
        "storage",
        "00c880d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00932550 ["INT_ADD", "register:40f0:8", ["const:932550:8", "const:4:8"]]
- 00932550 ["CALL", null, ["callee:00c58f30:8"]]
+ 009334fc ["INT_ADD", "register:40f0:8", ["const:9334fc:8", "const:4:8"]]
+ 009334fc ["CALL", null, ["callee:00c58f30:8"]]
- 00932554 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00933500 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00932558 ["COPY", "tmp:0:8", ["const:108:8"]]
- 00932558 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00932558 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00932558 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00933504 ["COPY", "tmp:0:8", ["const:d8:8"]]
+ 00933504 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00933504 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00933504 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a1318b5bf40dd922c1ba6169a6639c2e"></a>

### [`00932568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932568.md) → [`00933514`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933514.md) FUN_00933514

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
      "definition_site": "00933518",
      "incomplete_value": false,
      "site": "0093351c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093256c",
      "incomplete_value": false,
      "site": "00932570",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:108:8"
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
      "0093351c",
      "DATA",
      [
        "storage",
        "00c87108",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0093351c",
      "DATA",
      [
        "storage",
        "00c880d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00932568 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00933514 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 0093256c ["COPY", "tmp:0:8", ["const:108:8"]]
- 0093256c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0093256c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0093256c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00933518 ["COPY", "tmp:0:8", ["const:d8:8"]]
+ 00933518 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00933518 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00933518 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3e6442c261d525dc3d1142ef1d3bbcb0"></a>

### [`00932628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932628.md) → [`009335d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/009335d4.md) FUN_009335d4

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
      "definition_site": "009335e8",
      "incomplete_value": false,
      "site": "009335ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:168:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093263c",
      "incomplete_value": false,
      "site": "00932640",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:198:8"
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
      "009335ec",
      "DATA",
      [
        "storage",
        "00c87198",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009335ec",
      "DATA",
      [
        "storage",
        "00c88168",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00932634 ["INT_ADD", "register:40f0:8", ["const:932634:8", "const:4:8"]]
- 00932634 ["CALL", null, ["callee:00c58f30:8"]]
+ 009335e0 ["INT_ADD", "register:40f0:8", ["const:9335e0:8", "const:4:8"]]
+ 009335e0 ["CALL", null, ["callee:00c58f30:8"]]
- 00932638 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 009335e4 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 0093263c ["COPY", "tmp:0:8", ["const:198:8"]]
- 0093263c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0093263c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0093263c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009335e8 ["COPY", "tmp:0:8", ["const:168:8"]]
+ 009335e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009335e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009335e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-79b345deed4f3660bdcf688f4eef57cf"></a>

### [`00932664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932664.md) → [`00933610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933610.md) FUN_00933610

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0074e3dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074e/0074e3dc.md) [`0082eb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082eb50.md) [`0082eb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082eb84.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0074e78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074e/0074e78c.md) [`0082fafc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082f/0082fafc.md) [`0082fb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082f/0082fb30.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.37% / 新版 97.37%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0093371c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00932770",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 13,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933728",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0093277c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 14,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0093371c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00933728",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0093371c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00933728",
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
- 00932770 ["INT_ADD", "register:40f0:8", ["const:932770:8", "const:4:8"]]
- 00932770 ["CALL", null, ["ram:47ad34:8"]]
+ 0093371c ["INT_ADD", "register:40f0:8", ["const:93371c:8", "const:4:8"]]
+ 0093371c ["CALL", null, ["ram:47b054:8"]]
- 0093277c ["INT_ADD", "register:40f0:8", ["const:93277c:8", "const:4:8"]]
- 0093277c ["CALL", null, ["ram:47ad34:8"]]
+ 00933728 ["INT_ADD", "register:40f0:8", ["const:933728:8", "const:4:8"]]
+ 00933728 ["CALL", null, ["ram:47b054:8"]]
- 0093267c ["INT_ADD", "register:40f0:8", ["const:93267c:8", "const:4:8"]]
- 0093267c ["CALL", null, ["callee:008b7ea8:8"]]
+ 00933628 ["INT_ADD", "register:40f0:8", ["const:933628:8", "const:4:8"]]
+ 00933628 ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-6c55ad81baabd2041dde77af948b9d67"></a>

### [`009327c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/009327c0.md) → [`0093376c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/0093376c.md) FUN_0093376c

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
      "definition_site": "00933780",
      "incomplete_value": false,
      "site": "00933784",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009327d4",
      "incomplete_value": false,
      "site": "009327d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:218:8"
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
      "00933784",
      "DATA",
      [
        "storage",
        "00c87218",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00933784",
      "DATA",
      [
        "storage",
        "00c881e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009327cc ["INT_ADD", "register:40f0:8", ["const:9327cc:8", "const:4:8"]]
- 009327cc ["CALL", null, ["callee:00c58f30:8"]]
+ 00933778 ["INT_ADD", "register:40f0:8", ["const:933778:8", "const:4:8"]]
+ 00933778 ["CALL", null, ["callee:00c58f30:8"]]
- 009327d0 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 0093377c ["COPY", "register:4040:8", ["const:c88000:8"]]
- 009327d4 ["COPY", "tmp:0:8", ["const:218:8"]]
- 009327d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009327d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009327d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00933780 ["COPY", "tmp:0:8", ["const:1e8:8"]]
+ 00933780 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00933780 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00933780 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f6b9e7cfc17e852b383bb52e73dcb65b"></a>

### [`009327e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/009327e4.md) → [`00933790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933790.md) FUN_00933790

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
      "definition_site": "00933794",
      "incomplete_value": false,
      "site": "00933798",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009327e8",
      "incomplete_value": false,
      "site": "009327ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:218:8"
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
      "00933798",
      "DATA",
      [
        "storage",
        "00c87218",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00933798",
      "DATA",
      [
        "storage",
        "00c881e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009327e4 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00933790 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 009327e8 ["COPY", "tmp:0:8", ["const:218:8"]]
- 009327e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009327e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009327e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00933794 ["COPY", "tmp:0:8", ["const:1e8:8"]]
+ 00933794 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00933794 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00933794 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d90200853716e4106c14024248be0060"></a>

### [`009327fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/009327fc.md) → [`009337a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/009337a8.md) FUN_009337a8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 22件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 22件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.66% / 新版 94.66%

優先判定に残った影響 `call_target` 6件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00933968",
      "incomplete_value": false,
      "site": "00933978",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009329bc",
      "incomplete_value": false,
      "site": "009329cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:288:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009338a4",
      "value": [
        "leaf",
        "ram:7689d8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009328f8",
      "value": [
        "leaf",
        "ram:7685fc:8"
      ]
    },
    "ordinal": 11,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009338b8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0093290c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 12,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009338a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007685fc"
      ]
    ],
    [
      "009338b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009338d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009338a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007689d8"
      ]
    ],
    [
      "009338b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009338d4",
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
- 009328f8 ["INT_ADD", "register:40f0:8", ["const:9328f8:8", "const:4:8"]]
- 009328f8 ["CALL", null, ["ram:7685fc:8"]]
+ 009338a4 ["INT_ADD", "register:40f0:8", ["const:9338a4:8", "const:4:8"]]
+ 009338a4 ["CALL", null, ["ram:7689d8:8"]]
- 0093290c ["INT_ADD", "register:40f0:8", ["const:93290c:8", "const:4:8"]]
- 0093290c ["CALL", null, ["ram:47ad34:8"]]
+ 009338b8 ["INT_ADD", "register:40f0:8", ["const:9338b8:8", "const:4:8"]]
+ 009338b8 ["CALL", null, ["ram:47b054:8"]]
- 00932928 ["INT_ADD", "register:40f0:8", ["const:932928:8", "const:4:8"]]
- 00932928 ["CALL", null, ["ram:47ad34:8"]]
+ 009338d4 ["INT_ADD", "register:40f0:8", ["const:9338d4:8", "const:4:8"]]
+ 009338d4 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-e14fd2ab9f0c7edaeeae71b60d552033"></a>

### [`00932c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932c04.md) → [`00933bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933bb0.md) FUN_00933bb0

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
      "definition_site": "00933bc4",
      "incomplete_value": false,
      "site": "00933bc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00932c18",
      "incomplete_value": false,
      "site": "00932c1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:288:8"
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
      "00933bc8",
      "DATA",
      [
        "storage",
        "00c87288",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00933bc8",
      "DATA",
      [
        "storage",
        "00c88258",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00932c10 ["INT_ADD", "register:40f0:8", ["const:932c10:8", "const:4:8"]]
- 00932c10 ["CALL", null, ["callee:00c58f30:8"]]
+ 00933bbc ["INT_ADD", "register:40f0:8", ["const:933bbc:8", "const:4:8"]]
+ 00933bbc ["CALL", null, ["callee:00c58f30:8"]]
- 00932c14 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00933bc0 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00932c18 ["COPY", "tmp:0:8", ["const:288:8"]]
- 00932c18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00932c18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00932c18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00933bc4 ["COPY", "tmp:0:8", ["const:258:8"]]
+ 00933bc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00933bc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00933bc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ab9c2ea3e358a34aaf1b95fb51d3af36"></a>

### [`00932c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932c28.md) → [`00933bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933bd4.md) FUN_00933bd4

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
      "definition_site": "00933bd8",
      "incomplete_value": false,
      "site": "00933bdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00932c2c",
      "incomplete_value": false,
      "site": "00932c30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:288:8"
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
      "00933bdc",
      "DATA",
      [
        "storage",
        "00c87288",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00933bdc",
      "DATA",
      [
        "storage",
        "00c88258",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00932c28 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00933bd4 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00932c2c ["COPY", "tmp:0:8", ["const:288:8"]]
- 00932c2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00932c2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00932c2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00933bd8 ["COPY", "tmp:0:8", ["const:258:8"]]
+ 00933bd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00933bd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00933bd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-78df67f909e6e2ab06e8748c22eba0b3"></a>

### [`00932d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932d0c.md) → [`00933cb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933cb8.md) FUN_00933cb8

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
      "definition_site": "00933cbc",
      "incomplete_value": false,
      "site": "00933cc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:2d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00932d10",
      "incomplete_value": false,
      "site": "00932d14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:308:8"
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
      "00933cc0",
      "DATA",
      [
        "storage",
        "00c87308",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00933cc0",
      "DATA",
      [
        "storage",
        "00c882d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00932d0c ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00933cb8 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00932d10 ["COPY", "tmp:0:8", ["const:308:8"]]
- 00932d10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00932d10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00932d10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00933cbc ["COPY", "tmp:0:8", ["const:2d8:8"]]
+ 00933cbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00933cbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00933cbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-69ae0ffbfd5d6c9d04028c26dee8e507"></a>

### [`00932dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932dcc.md) → [`00933d78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933d78.md) FUN_00933d78

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
      "definition_site": "00933d8c",
      "incomplete_value": false,
      "site": "00933d90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:368:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00932de0",
      "incomplete_value": false,
      "site": "00932de4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:398:8"
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
      "00933d90",
      "DATA",
      [
        "storage",
        "00c87398",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00933d90",
      "DATA",
      [
        "storage",
        "00c88368",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00932dd8 ["INT_ADD", "register:40f0:8", ["const:932dd8:8", "const:4:8"]]
- 00932dd8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00933d84 ["INT_ADD", "register:40f0:8", ["const:933d84:8", "const:4:8"]]
+ 00933d84 ["CALL", null, ["callee:00c58f30:8"]]
- 00932ddc ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00933d88 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00932de0 ["COPY", "tmp:0:8", ["const:398:8"]]
- 00932de0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00932de0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00932de0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00933d8c ["COPY", "tmp:0:8", ["const:368:8"]]
+ 00933d8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00933d8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00933d8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c165d2979bd3188c3d0fd1be272dacf9"></a>

### [`00932df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932df0.md) → [`00933d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933d9c.md) FUN_00933d9c

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
      "definition_site": "00933da0",
      "incomplete_value": false,
      "site": "00933da4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:368:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00932df4",
      "incomplete_value": false,
      "site": "00932df8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:398:8"
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
      "00933da4",
      "DATA",
      [
        "storage",
        "00c87398",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00933da4",
      "DATA",
      [
        "storage",
        "00c88368",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00932df0 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00933d9c ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00932df4 ["COPY", "tmp:0:8", ["const:398:8"]]
- 00932df4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00932df4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00932df4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00933da0 ["COPY", "tmp:0:8", ["const:368:8"]]
+ 00933da0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00933da0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00933da0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ff457e63416d243014252bb1c318edca"></a>

### [`00932e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932e08.md) → [`00933db4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933db4.md) FUN_00933db4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 22件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 22件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.34% / 新版 94.34%

優先判定に残った影響 `call_target` 7件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00934084",
      "incomplete_value": true,
      "site": "0093409c",
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
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:cb9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009330d8",
      "incomplete_value": true,
      "site": "009330f0",
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
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:bdb:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933eb0",
      "value": [
        "leaf",
        "ram:7689d8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00932f04",
      "value": [
        "leaf",
        "ram:7685fc:8"
      ]
    },
    "ordinal": 11,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933ec4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00932f18",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 12,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00933eb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007685fc"
      ]
    ],
    [
      "00933ec4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00933ee0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00933eb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007689d8"
      ]
    ],
    [
      "00933ec4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00933ee0",
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
- 00932f04 ["INT_ADD", "register:40f0:8", ["const:932f04:8", "const:4:8"]]
- 00932f04 ["CALL", null, ["ram:7685fc:8"]]
+ 00933eb0 ["INT_ADD", "register:40f0:8", ["const:933eb0:8", "const:4:8"]]
+ 00933eb0 ["CALL", null, ["ram:7689d8:8"]]
- 00932f18 ["INT_ADD", "register:40f0:8", ["const:932f18:8", "const:4:8"]]
- 00932f18 ["CALL", null, ["ram:47ad34:8"]]
+ 00933ec4 ["INT_ADD", "register:40f0:8", ["const:933ec4:8", "const:4:8"]]
+ 00933ec4 ["CALL", null, ["ram:47b054:8"]]
- 00932f34 ["INT_ADD", "register:40f0:8", ["const:932f34:8", "const:4:8"]]
- 00932f34 ["CALL", null, ["ram:47ad34:8"]]
+ 00933ee0 ["INT_ADD", "register:40f0:8", ["const:933ee0:8", "const:4:8"]]
+ 00933ee0 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-cab53f2ca9aefbf16b2e1dad2cb0d5be"></a>

### [`00933228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933228.md) → [`009341d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/009341d4.md) FUN_009341d4

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
      "definition_site": "009341e8",
      "incomplete_value": false,
      "site": "009341ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:3d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093323c",
      "incomplete_value": false,
      "site": "00933240",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:408:8"
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
      "009341ec",
      "DATA",
      [
        "storage",
        "00c87408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009341ec",
      "DATA",
      [
        "storage",
        "00c883d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933234 ["INT_ADD", "register:40f0:8", ["const:933234:8", "const:4:8"]]
- 00933234 ["CALL", null, ["callee:00c58f30:8"]]
+ 009341e0 ["INT_ADD", "register:40f0:8", ["const:9341e0:8", "const:4:8"]]
+ 009341e0 ["CALL", null, ["callee:00c58f30:8"]]
- 00933238 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 009341e4 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 0093323c ["COPY", "tmp:0:8", ["const:408:8"]]
- 0093323c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0093323c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0093323c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009341e8 ["COPY", "tmp:0:8", ["const:3d8:8"]]
+ 009341e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009341e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009341e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1e0e1a66c402fa9cd52ea11b83cc4bdd"></a>

### [`0093330c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/0093330c.md) → [`009342b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/009342b8.md) FUN_009342b8

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
      "definition_site": "009342cc",
      "incomplete_value": false,
      "site": "009342d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:458:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933320",
      "incomplete_value": false,
      "site": "00933324",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:488:8"
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
      "009342d0",
      "DATA",
      [
        "storage",
        "00c87488",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009342d0",
      "DATA",
      [
        "storage",
        "00c88458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933318 ["INT_ADD", "register:40f0:8", ["const:933318:8", "const:4:8"]]
- 00933318 ["CALL", null, ["callee:00c58f30:8"]]
+ 009342c4 ["INT_ADD", "register:40f0:8", ["const:9342c4:8", "const:4:8"]]
+ 009342c4 ["CALL", null, ["callee:00c58f30:8"]]
- 0093331c ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 009342c8 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933320 ["COPY", "tmp:0:8", ["const:488:8"]]
- 00933320 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933320 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933320 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009342cc ["COPY", "tmp:0:8", ["const:458:8"]]
+ 009342cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009342cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009342cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-61ea3388841d6b61c20786e4a4e2dba5"></a>

### [`00933330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933330.md) → [`009342dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/009342dc.md) FUN_009342dc

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
      "definition_site": "009342e0",
      "incomplete_value": false,
      "site": "009342e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:458:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933334",
      "incomplete_value": false,
      "site": "00933338",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:488:8"
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
      "009342e4",
      "DATA",
      [
        "storage",
        "00c87488",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009342e4",
      "DATA",
      [
        "storage",
        "00c88458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933330 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 009342dc ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933334 ["COPY", "tmp:0:8", ["const:488:8"]]
- 00933334 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933334 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933334 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009342e0 ["COPY", "tmp:0:8", ["const:458:8"]]
+ 009342e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009342e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009342e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3d537fe0736ff11356cac5fc85e989a4"></a>

### [`009333f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009333f0.md) → [`0093439c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/0093439c.md) FUN_0093439c

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
      "definition_site": "009343b0",
      "incomplete_value": false,
      "site": "009343b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:4e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933404",
      "incomplete_value": false,
      "site": "00933408",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:518:8"
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
      "009343b4",
      "DATA",
      [
        "storage",
        "00c87518",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009343b4",
      "DATA",
      [
        "storage",
        "00c884e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009333fc ["INT_ADD", "register:40f0:8", ["const:9333fc:8", "const:4:8"]]
- 009333fc ["CALL", null, ["callee:00c58f30:8"]]
+ 009343a8 ["INT_ADD", "register:40f0:8", ["const:9343a8:8", "const:4:8"]]
+ 009343a8 ["CALL", null, ["callee:00c58f30:8"]]
- 00933400 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 009343ac ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933404 ["COPY", "tmp:0:8", ["const:518:8"]]
- 00933404 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933404 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933404 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009343b0 ["COPY", "tmp:0:8", ["const:4e8:8"]]
+ 009343b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009343b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009343b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9df02c6503fb9c2202805c851f66a86e"></a>

### [`00933414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933414.md) → [`009343c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/009343c0.md) FUN_009343c0

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
      "definition_site": "009343c4",
      "incomplete_value": false,
      "site": "009343c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:4e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933418",
      "incomplete_value": false,
      "site": "0093341c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:518:8"
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
      "009343c8",
      "DATA",
      [
        "storage",
        "00c87518",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009343c8",
      "DATA",
      [
        "storage",
        "00c884e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933414 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 009343c0 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933418 ["COPY", "tmp:0:8", ["const:518:8"]]
- 00933418 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933418 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933418 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009343c4 ["COPY", "tmp:0:8", ["const:4e8:8"]]
+ 009343c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009343c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009343c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-371324b2ffc201c2bb9d9b66069121f4"></a>

### [`0093342c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/0093342c.md) → [`009343d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/009343d8.md) FUN_009343d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008540e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/008540e4.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00855090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00855/00855090.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934400",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933454",
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
      "site": "0093440c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933460",
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
      "00934400",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0093440c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00934400",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0093440c",
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
- 00933454 ["INT_ADD", "register:40f0:8", ["const:933454:8", "const:4:8"]]
- 00933454 ["CALL", null, ["ram:47ad34:8"]]
+ 00934400 ["INT_ADD", "register:40f0:8", ["const:934400:8", "const:4:8"]]
+ 00934400 ["CALL", null, ["ram:47b054:8"]]
- 00933460 ["INT_ADD", "register:40f0:8", ["const:933460:8", "const:4:8"]]
- 00933460 ["CALL", null, ["ram:47ad34:8"]]
+ 0093440c ["INT_ADD", "register:40f0:8", ["const:93440c:8", "const:4:8"]]
+ 0093440c ["CALL", null, ["ram:47b054:8"]]
- 00933480 ["INT_ADD", "register:40f0:8", ["const:933480:8", "const:4:8"]]
- 00933480 ["CALL", null, ["callee:008524fc:8"]]
+ 0093442c ["INT_ADD", "register:40f0:8", ["const:93442c:8", "const:4:8"]]
+ 0093442c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-eff63086a20833745354fb7f9c786a06"></a>

### [`00933558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933558.md) → [`00934504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934504.md) FUN_00934504

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
      "definition_site": "00934524",
      "incomplete_value": false,
      "site": "00934528",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933578",
      "incomplete_value": false,
      "site": "0093357c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:598:8"
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
      "00934528",
      "DATA",
      [
        "storage",
        "00c87598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934528",
      "DATA",
      [
        "storage",
        "00c88568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0093356c ["INT_ADD", "register:40f0:8", ["const:93356c:8", "const:4:8"]]
- 0093356c ["CALL", null, ["callee:00c58f30:8"]]
+ 00934518 ["INT_ADD", "register:40f0:8", ["const:934518:8", "const:4:8"]]
+ 00934518 ["CALL", null, ["callee:00c58f30:8"]]
- 00933574 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934520 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933578 ["COPY", "tmp:0:8", ["const:598:8"]]
- 00933578 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933578 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933578 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934524 ["COPY", "tmp:0:8", ["const:568:8"]]
+ 00934524 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934524 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934524 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2f4981e1f1dcf41a2ee3f81a4f28d334"></a>

### [`00933590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933590.md) → [`0093453c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/0093453c.md) FUN_0093453c

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
      "definition_site": "00934540",
      "incomplete_value": false,
      "site": "00934544",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933594",
      "incomplete_value": false,
      "site": "00933598",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:598:8"
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
      "00934544",
      "DATA",
      [
        "storage",
        "00c87598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934544",
      "DATA",
      [
        "storage",
        "00c88568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933590 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 0093453c ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933594 ["COPY", "tmp:0:8", ["const:598:8"]]
- 00933594 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933594 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933594 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934540 ["COPY", "tmp:0:8", ["const:568:8"]]
+ 00934540 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934540 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934540 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8e795867de4116d6525b521526124453"></a>

### [`009335b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009335b0.md) → [`0093455c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/0093455c.md) FUN_0093455c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047d108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d108.md) [`0047d120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d120.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047d428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d428.md) [`0047d440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d440.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.68% / 新版 92.68%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934584",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009335d8",
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
      "site": "009345ac",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933600",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009345d4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933628",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00934584",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009345ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009345d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00934584",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009345ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009345d4",
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
- 009335d8 ["INT_ADD", "register:40f0:8", ["const:9335d8:8", "const:4:8"]]
- 009335d8 ["CALL", null, ["ram:47ad34:8"]]
+ 00934584 ["INT_ADD", "register:40f0:8", ["const:934584:8", "const:4:8"]]
+ 00934584 ["CALL", null, ["ram:47b054:8"]]
- 00933600 ["INT_ADD", "register:40f0:8", ["const:933600:8", "const:4:8"]]
- 00933600 ["CALL", null, ["ram:47ad34:8"]]
+ 009345ac ["INT_ADD", "register:40f0:8", ["const:9345ac:8", "const:4:8"]]
+ 009345ac ["CALL", null, ["ram:47b054:8"]]
- 00933628 ["INT_ADD", "register:40f0:8", ["const:933628:8", "const:4:8"]]
- 00933628 ["CALL", null, ["ram:47ad34:8"]]
+ 009345d4 ["INT_ADD", "register:40f0:8", ["const:9345d4:8", "const:4:8"]]
+ 009345d4 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-5e0951729c57d980cad1e1156d433a47"></a>

### [`00933680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933680.md) → [`0093462c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/0093462c.md) FUN_0093462c

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
      "definition_site": "0093464c",
      "incomplete_value": false,
      "site": "00934650",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009336a0",
      "incomplete_value": false,
      "site": "009336a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:618:8"
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
      "00934650",
      "DATA",
      [
        "storage",
        "00c87618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934650",
      "DATA",
      [
        "storage",
        "00c885e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933694 ["INT_ADD", "register:40f0:8", ["const:933694:8", "const:4:8"]]
- 00933694 ["CALL", null, ["callee:00c58f30:8"]]
+ 00934640 ["INT_ADD", "register:40f0:8", ["const:934640:8", "const:4:8"]]
+ 00934640 ["CALL", null, ["callee:00c58f30:8"]]
- 0093369c ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934648 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 009336a0 ["COPY", "tmp:0:8", ["const:618:8"]]
- 009336a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009336a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009336a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0093464c ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 0093464c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0093464c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0093464c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8404843c85d77eac369aafba6ea04a4e"></a>

### [`009336b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009336b8.md) → [`00934664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934664.md) FUN_00934664

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
      "definition_site": "00934668",
      "incomplete_value": false,
      "site": "0093466c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009336bc",
      "incomplete_value": false,
      "site": "009336c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:618:8"
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
      "0093466c",
      "DATA",
      [
        "storage",
        "00c87618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0093466c",
      "DATA",
      [
        "storage",
        "00c885e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009336b8 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934664 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 009336bc ["COPY", "tmp:0:8", ["const:618:8"]]
- 009336bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009336bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009336bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934668 ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 00934668 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934668 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934668 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a47a5b9921b5820ac47e7aac66244d9b"></a>

### [`009336d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009336d8.md) → [`00934684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934684.md) FUN_00934684

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047d110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d110.md) [`0047d15c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d15c.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047d430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d430.md) [`0047d47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d47c.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.68% / 新版 92.68%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009346ac",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933700",
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
      "site": "009346d4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933728",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009346fc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933750",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "009346ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009346d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009346fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009346ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009346d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009346fc",
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
- 00933700 ["INT_ADD", "register:40f0:8", ["const:933700:8", "const:4:8"]]
- 00933700 ["CALL", null, ["ram:47ad34:8"]]
+ 009346ac ["INT_ADD", "register:40f0:8", ["const:9346ac:8", "const:4:8"]]
+ 009346ac ["CALL", null, ["ram:47b054:8"]]
- 00933728 ["INT_ADD", "register:40f0:8", ["const:933728:8", "const:4:8"]]
- 00933728 ["CALL", null, ["ram:47ad34:8"]]
+ 009346d4 ["INT_ADD", "register:40f0:8", ["const:9346d4:8", "const:4:8"]]
+ 009346d4 ["CALL", null, ["ram:47b054:8"]]
- 00933750 ["INT_ADD", "register:40f0:8", ["const:933750:8", "const:4:8"]]
- 00933750 ["CALL", null, ["ram:47ad34:8"]]
+ 009346fc ["INT_ADD", "register:40f0:8", ["const:9346fc:8", "const:4:8"]]
+ 009346fc ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-a35ddb08c3004bf61af34f57f98e60f0"></a>

### [`009337a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009337a8.md) → [`00934754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934754.md) FUN_00934754

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
      "definition_site": "00934768",
      "incomplete_value": false,
      "site": "0093476c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009337bc",
      "incomplete_value": false,
      "site": "009337c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:698:8"
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
      "0093476c",
      "DATA",
      [
        "storage",
        "00c87698",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0093476c",
      "DATA",
      [
        "storage",
        "00c88668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009337b4 ["INT_ADD", "register:40f0:8", ["const:9337b4:8", "const:4:8"]]
- 009337b4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00934760 ["INT_ADD", "register:40f0:8", ["const:934760:8", "const:4:8"]]
+ 00934760 ["CALL", null, ["callee:00c58f30:8"]]
- 009337b8 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934764 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 009337bc ["COPY", "tmp:0:8", ["const:698:8"]]
- 009337bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009337bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009337bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934768 ["COPY", "tmp:0:8", ["const:668:8"]]
+ 00934768 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934768 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934768 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cf135611e8aa8dc04c8870cac97d46d4"></a>

### [`009337cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009337cc.md) → [`00934778`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934778.md) FUN_00934778

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
      "definition_site": "0093477c",
      "incomplete_value": false,
      "site": "00934780",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009337d0",
      "incomplete_value": false,
      "site": "009337d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:698:8"
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
      "00934780",
      "DATA",
      [
        "storage",
        "00c87698",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934780",
      "DATA",
      [
        "storage",
        "00c88668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009337cc ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934778 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 009337d0 ["COPY", "tmp:0:8", ["const:698:8"]]
- 009337d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009337d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009337d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0093477c ["COPY", "tmp:0:8", ["const:668:8"]]
+ 0093477c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0093477c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0093477c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-89fd0af954ea3b1d1d3a20c063c8eade"></a>

### [`009337e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009337e4.md) → [`00934790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934790.md) FUN_00934790

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007275f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/007275f4.md) [`007275f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/007275f8.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007279a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/007279a4.md) [`007279a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/007279a8.md)

変更の種類 call, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.94% / 新版 91.94%

優先判定に残った影響 `call_target` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00934860",
      "incomplete_value": true,
      "site": "00934874",
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
                "const:aed:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009338b4",
      "incomplete_value": true,
      "site": "009338c8",
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
                "const:a22:8"
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
      "definition_site": "00934878",
      "incomplete_value": true,
      "site": "00934878",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009338cc",
      "incomplete_value": true,
      "site": "009338cc",
      "value": [
        "LOAD",
        "8",
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0093488c",
      "incomplete_value": false,
      "site": "00934894",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:6d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009338e0",
      "incomplete_value": false,
      "site": "009338e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:708:8"
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
      "009347d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00934818",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00934860",
      "READ",
      [
        "storage",
        "002a4a22",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009347d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00934818",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00934860",
      "READ",
      [
        "storage",
        "002a4aed",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933828 ["INT_ADD", "register:40f0:8", ["const:933828:8", "const:4:8"]]
- 00933828 ["CALL", null, ["ram:47ad34:8"]]
+ 009347d4 ["INT_ADD", "register:40f0:8", ["const:9347d4:8", "const:4:8"]]
+ 009347d4 ["CALL", null, ["ram:47b054:8"]]
- 0093386c ["INT_ADD", "register:40f0:8", ["const:93386c:8", "const:4:8"]]
- 0093386c ["CALL", null, ["ram:47ad34:8"]]
+ 00934818 ["INT_ADD", "register:40f0:8", ["const:934818:8", "const:4:8"]]
+ 00934818 ["CALL", null, ["ram:47b054:8"]]
- 00933810 ["INT_ADD", "register:40f0:8", ["const:933810:8", "const:4:8"]]
- 00933810 ["CALL", null, ["callee:008524fc:8"]]
+ 009347bc ["INT_ADD", "register:40f0:8", ["const:9347bc:8", "const:4:8"]]
+ 009347bc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6c2970e6db693b7372d54ebcec829a7c"></a>

### [`00933a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933a90.md) → [`00934a3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934a3c.md) FUN_00934a3c

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
      "definition_site": "00934a50",
      "incomplete_value": false,
      "site": "00934a54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:6d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933aa4",
      "incomplete_value": false,
      "site": "00933aa8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:708:8"
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
      "00934a54",
      "DATA",
      [
        "storage",
        "00c87708",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934a54",
      "DATA",
      [
        "storage",
        "00c886d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933a9c ["INT_ADD", "register:40f0:8", ["const:933a9c:8", "const:4:8"]]
- 00933a9c ["CALL", null, ["callee:00c58f30:8"]]
+ 00934a48 ["INT_ADD", "register:40f0:8", ["const:934a48:8", "const:4:8"]]
+ 00934a48 ["CALL", null, ["callee:00c58f30:8"]]
- 00933aa0 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934a4c ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933aa4 ["COPY", "tmp:0:8", ["const:708:8"]]
- 00933aa4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933aa4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933aa4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934a50 ["COPY", "tmp:0:8", ["const:6d8:8"]]
+ 00934a50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934a50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934a50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6ca32fd96a9e54664e63730e8c15360a"></a>

### [`00933ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933ab4.md) → [`00934a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934a60.md) FUN_00934a60

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
      "definition_site": "00934a64",
      "incomplete_value": false,
      "site": "00934a68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:6d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933ab8",
      "incomplete_value": false,
      "site": "00933abc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:708:8"
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
      "00934a68",
      "DATA",
      [
        "storage",
        "00c87708",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934a68",
      "DATA",
      [
        "storage",
        "00c886d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933ab4 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934a60 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933ab8 ["COPY", "tmp:0:8", ["const:708:8"]]
- 00933ab8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933ab8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933ab8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934a64 ["COPY", "tmp:0:8", ["const:6d8:8"]]
+ 00934a64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934a64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934a64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-20e943856d68bb4930a6734f6026e801"></a>

### [`00933acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933acc.md) → [`00934a78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934a78.md) FUN_00934a78

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
      "site": "00934a9c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933af0",
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
      "00934a9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00934a9c",
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
- 00933af0 ["INT_ADD", "register:40f0:8", ["const:933af0:8", "const:4:8"]]
- 00933af0 ["CALL", null, ["ram:47ad34:8"]]
+ 00934a9c ["INT_ADD", "register:40f0:8", ["const:934a9c:8", "const:4:8"]]
+ 00934a9c ["CALL", null, ["ram:47b054:8"]]
- 00933afc ["INT_ADD", "register:40f0:8", ["const:933afc:8", "const:4:8"]]
- 00933afc ["CALL", null, ["callee:0047d134:8"]]
+ 00934aa8 ["INT_ADD", "register:40f0:8", ["const:934aa8:8", "const:4:8"]]
+ 00934aa8 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-2a74cda5f86f1944ea028daa68b44842"></a>

### [`00933b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933b40.md) → [`00934aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934aec.md) FUN_00934aec

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
      "definition_site": "00934b00",
      "incomplete_value": false,
      "site": "00934b04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933b54",
      "incomplete_value": false,
      "site": "00933b58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:798:8"
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
      "00934b04",
      "DATA",
      [
        "storage",
        "00c87798",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934b04",
      "DATA",
      [
        "storage",
        "00c88768",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933b4c ["INT_ADD", "register:40f0:8", ["const:933b4c:8", "const:4:8"]]
- 00933b4c ["CALL", null, ["callee:00c58f30:8"]]
+ 00934af8 ["INT_ADD", "register:40f0:8", ["const:934af8:8", "const:4:8"]]
+ 00934af8 ["CALL", null, ["callee:00c58f30:8"]]
- 00933b50 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934afc ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933b54 ["COPY", "tmp:0:8", ["const:798:8"]]
- 00933b54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933b54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933b54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934b00 ["COPY", "tmp:0:8", ["const:768:8"]]
+ 00934b00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934b00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934b00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bd5f1f5c6c727e8f2e2049157e01ea10"></a>

### [`00933b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933b64.md) → [`00934b10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934b10.md) FUN_00934b10

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
      "definition_site": "00934b14",
      "incomplete_value": false,
      "site": "00934b18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933b68",
      "incomplete_value": false,
      "site": "00933b6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:798:8"
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
      "00934b18",
      "DATA",
      [
        "storage",
        "00c87798",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934b18",
      "DATA",
      [
        "storage",
        "00c88768",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933b64 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934b10 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933b68 ["COPY", "tmp:0:8", ["const:798:8"]]
- 00933b68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933b68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933b68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934b14 ["COPY", "tmp:0:8", ["const:768:8"]]
+ 00934b14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934b14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934b14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bfd3633ea2a5543d241aed3f64384c8c"></a>

### [`00933b7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933b7c.md) → [`00934b28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934b28.md) FUN_00934b28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00854040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854040.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00854fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854fec.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934c1c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933c70",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 13,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934c28",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933c7c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 14,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00934c1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00934c28",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00934c1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00934c28",
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
- 00933c70 ["INT_ADD", "register:40f0:8", ["const:933c70:8", "const:4:8"]]
- 00933c70 ["CALL", null, ["ram:47ad34:8"]]
+ 00934c1c ["INT_ADD", "register:40f0:8", ["const:934c1c:8", "const:4:8"]]
+ 00934c1c ["CALL", null, ["ram:47b054:8"]]
- 00933c7c ["INT_ADD", "register:40f0:8", ["const:933c7c:8", "const:4:8"]]
- 00933c7c ["CALL", null, ["ram:47ad34:8"]]
+ 00934c28 ["INT_ADD", "register:40f0:8", ["const:934c28:8", "const:4:8"]]
+ 00934c28 ["CALL", null, ["ram:47b054:8"]]
- 00933b94 ["INT_ADD", "register:40f0:8", ["const:933b94:8", "const:4:8"]]
- 00933b94 ["CALL", null, ["callee:008b7ea8:8"]]
+ 00934b40 ["INT_ADD", "register:40f0:8", ["const:934b40:8", "const:4:8"]]
+ 00934b40 ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-854239b473433c3b676e5d0ffe0e6f9d"></a>

### [`00933cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933cc0.md) → [`00934c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934c6c.md) FUN_00934c6c

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
      "definition_site": "00934c80",
      "incomplete_value": false,
      "site": "00934c84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933cd4",
      "incomplete_value": false,
      "site": "00933cd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:818:8"
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
      "00934c84",
      "DATA",
      [
        "storage",
        "00c87818",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934c84",
      "DATA",
      [
        "storage",
        "00c887e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933ccc ["INT_ADD", "register:40f0:8", ["const:933ccc:8", "const:4:8"]]
- 00933ccc ["CALL", null, ["callee:00c58f30:8"]]
+ 00934c78 ["INT_ADD", "register:40f0:8", ["const:934c78:8", "const:4:8"]]
+ 00934c78 ["CALL", null, ["callee:00c58f30:8"]]
- 00933cd0 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934c7c ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933cd4 ["COPY", "tmp:0:8", ["const:818:8"]]
- 00933cd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933cd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933cd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934c80 ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 00934c80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934c80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934c80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3ec753b64159ddd91635bdfd6b753de1"></a>

### [`00933ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933ce4.md) → [`00934c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934c90.md) FUN_00934c90

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
      "definition_site": "00934c94",
      "incomplete_value": false,
      "site": "00934c98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933ce8",
      "incomplete_value": false,
      "site": "00933cec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:818:8"
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
      "00934c98",
      "DATA",
      [
        "storage",
        "00c87818",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934c98",
      "DATA",
      [
        "storage",
        "00c887e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933ce4 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934c90 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933ce8 ["COPY", "tmp:0:8", ["const:818:8"]]
- 00933ce8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933ce8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933ce8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934c94 ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 00934c94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934c94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934c94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-545f55d8ad3722edc4d5627e26a28e09"></a>

### [`00933cfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933cfc.md) → [`00934ca8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934ca8.md) FUN_00934ca8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47920.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.92% / 新版 96.92%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934d88",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933ddc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 11,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934d94",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933de8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 12,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00934d88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00934d94",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00934d88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00934d94",
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
- 00933ddc ["INT_ADD", "register:40f0:8", ["const:933ddc:8", "const:4:8"]]
- 00933ddc ["CALL", null, ["ram:47ad34:8"]]
+ 00934d88 ["INT_ADD", "register:40f0:8", ["const:934d88:8", "const:4:8"]]
+ 00934d88 ["CALL", null, ["ram:47b054:8"]]
- 00933de8 ["INT_ADD", "register:40f0:8", ["const:933de8:8", "const:4:8"]]
- 00933de8 ["CALL", null, ["ram:47ad34:8"]]
+ 00934d94 ["INT_ADD", "register:40f0:8", ["const:934d94:8", "const:4:8"]]
+ 00934d94 ["CALL", null, ["ram:47b054:8"]]
- 00933d14 ["INT_ADD", "register:40f0:8", ["const:933d14:8", "const:4:8"]]
- 00933d14 ["CALL", null, ["callee:008b7ea8:8"]]
+ 00934cc0 ["INT_ADD", "register:40f0:8", ["const:934cc0:8", "const:4:8"]]
+ 00934cc0 ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-8256b74352f8df6c6e04632aa9cb4e6a"></a>

### [`00933e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933e2c.md) → [`00934dd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934dd8.md) FUN_00934dd8

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
      "definition_site": "00934df8",
      "incomplete_value": false,
      "site": "00934dfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933e4c",
      "incomplete_value": false,
      "site": "00933e50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:898:8"
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
      "00934dfc",
      "DATA",
      [
        "storage",
        "00c87898",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934dfc",
      "DATA",
      [
        "storage",
        "00c88868",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933e40 ["INT_ADD", "register:40f0:8", ["const:933e40:8", "const:4:8"]]
- 00933e40 ["CALL", null, ["callee:00c58f30:8"]]
+ 00934dec ["INT_ADD", "register:40f0:8", ["const:934dec:8", "const:4:8"]]
+ 00934dec ["CALL", null, ["callee:00c58f30:8"]]
- 00933e48 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934df4 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933e4c ["COPY", "tmp:0:8", ["const:898:8"]]
- 00933e4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933e4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933e4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934df8 ["COPY", "tmp:0:8", ["const:868:8"]]
+ 00934df8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934df8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934df8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3837b4a5e6038b3c3492c81709abf06a"></a>

### [`00933e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933e64.md) → [`00934e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934e10.md) FUN_00934e10

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
      "definition_site": "00934e14",
      "incomplete_value": false,
      "site": "00934e18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933e68",
      "incomplete_value": false,
      "site": "00933e6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:898:8"
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
      "00934e18",
      "DATA",
      [
        "storage",
        "00c87898",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934e18",
      "DATA",
      [
        "storage",
        "00c88868",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933e64 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934e10 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933e68 ["COPY", "tmp:0:8", ["const:898:8"]]
- 00933e68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933e68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933e68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934e14 ["COPY", "tmp:0:8", ["const:868:8"]]
+ 00934e14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934e14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934e14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5f5a4578ecc00007594064cd8c8d7ba5"></a>

### [`00933e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933e84.md) → [`00934e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934e30.md) FUN_00934e30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047d108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d108.md) [`0047d120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d120.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047d428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d428.md) [`0047d440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d440.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.68% / 新版 92.68%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934e58",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933eac",
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
      "site": "00934e80",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933ed4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934ea8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933efc",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00934e58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00934e80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00934ea8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00934e58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00934e80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00934ea8",
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
- 00933eac ["INT_ADD", "register:40f0:8", ["const:933eac:8", "const:4:8"]]
- 00933eac ["CALL", null, ["ram:47ad34:8"]]
+ 00934e58 ["INT_ADD", "register:40f0:8", ["const:934e58:8", "const:4:8"]]
+ 00934e58 ["CALL", null, ["ram:47b054:8"]]
- 00933ed4 ["INT_ADD", "register:40f0:8", ["const:933ed4:8", "const:4:8"]]
- 00933ed4 ["CALL", null, ["ram:47ad34:8"]]
+ 00934e80 ["INT_ADD", "register:40f0:8", ["const:934e80:8", "const:4:8"]]
+ 00934e80 ["CALL", null, ["ram:47b054:8"]]
- 00933efc ["INT_ADD", "register:40f0:8", ["const:933efc:8", "const:4:8"]]
- 00933efc ["CALL", null, ["ram:47ad34:8"]]
+ 00934ea8 ["INT_ADD", "register:40f0:8", ["const:934ea8:8", "const:4:8"]]
+ 00934ea8 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-04f0989ea8a1cf07d1c7f0ac7ee4bbc0"></a>

### [`00933f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933f54.md) → [`00934f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934f00.md) FUN_00934f00

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
      "definition_site": "00934f20",
      "incomplete_value": false,
      "site": "00934f24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933f74",
      "incomplete_value": false,
      "site": "00933f78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:918:8"
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
      "00934f24",
      "DATA",
      [
        "storage",
        "00c87918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934f24",
      "DATA",
      [
        "storage",
        "00c888e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933f68 ["INT_ADD", "register:40f0:8", ["const:933f68:8", "const:4:8"]]
- 00933f68 ["CALL", null, ["callee:00c58f30:8"]]
+ 00934f14 ["INT_ADD", "register:40f0:8", ["const:934f14:8", "const:4:8"]]
+ 00934f14 ["CALL", null, ["callee:00c58f30:8"]]
- 00933f70 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934f1c ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933f74 ["COPY", "tmp:0:8", ["const:918:8"]]
- 00933f74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933f74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933f74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934f20 ["COPY", "tmp:0:8", ["const:8e8:8"]]
+ 00934f20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934f20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934f20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-90350532b814e9db2ba5de95cb53e718"></a>

### [`00933f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933f8c.md) → [`00934f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934f38.md) FUN_00934f38

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
      "definition_site": "00934f3c",
      "incomplete_value": false,
      "site": "00934f40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00933f90",
      "incomplete_value": false,
      "site": "00933f94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:918:8"
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
      "00934f40",
      "DATA",
      [
        "storage",
        "00c87918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00934f40",
      "DATA",
      [
        "storage",
        "00c888e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00933f8c ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00934f38 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00933f90 ["COPY", "tmp:0:8", ["const:918:8"]]
- 00933f90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00933f90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00933f90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00934f3c ["COPY", "tmp:0:8", ["const:8e8:8"]]
+ 00934f3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00934f3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00934f3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-97b6e90980b9661f1296a1b6220b6602"></a>

### [`00933fac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933fac.md) → [`00934f58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934f58.md) FUN_00934f58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047d110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d110.md) [`0047d15c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d15c.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047d430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d430.md) [`0047d47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d47c.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.68% / 新版 92.68%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934f80",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933fd4",
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
      "site": "00934fa8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00933ffc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934fd0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934024",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00934f80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00934fa8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00934fd0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00934f80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00934fa8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00934fd0",
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
- 00933fd4 ["INT_ADD", "register:40f0:8", ["const:933fd4:8", "const:4:8"]]
- 00933fd4 ["CALL", null, ["ram:47ad34:8"]]
+ 00934f80 ["INT_ADD", "register:40f0:8", ["const:934f80:8", "const:4:8"]]
+ 00934f80 ["CALL", null, ["ram:47b054:8"]]
- 00933ffc ["INT_ADD", "register:40f0:8", ["const:933ffc:8", "const:4:8"]]
- 00933ffc ["CALL", null, ["ram:47ad34:8"]]
+ 00934fa8 ["INT_ADD", "register:40f0:8", ["const:934fa8:8", "const:4:8"]]
+ 00934fa8 ["CALL", null, ["ram:47b054:8"]]
- 00934024 ["INT_ADD", "register:40f0:8", ["const:934024:8", "const:4:8"]]
- 00934024 ["CALL", null, ["ram:47ad34:8"]]
+ 00934fd0 ["INT_ADD", "register:40f0:8", ["const:934fd0:8", "const:4:8"]]
+ 00934fd0 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-6ed4cac8610f0e374307915b982f50bd"></a>

### [`0093407c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/0093407c.md) → [`00935028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935028.md) FUN_00935028

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
      "definition_site": "0093504c",
      "incomplete_value": false,
      "site": "0093504c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009340a0",
      "incomplete_value": false,
      "site": "009340a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:998:8"
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
      "0093504c",
      "DATA",
      [
        "storage",
        "00c87998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0093504c",
      "DATA",
      [
        "storage",
        "00c88968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00934090 ["INT_ADD", "register:40f0:8", ["const:934090:8", "const:4:8"]]
- 00934090 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093503c ["INT_ADD", "register:40f0:8", ["const:93503c:8", "const:4:8"]]
+ 0093503c ["CALL", null, ["callee:00c58f30:8"]]
- 00934098 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00935044 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 0093409c ["COPY", "tmp:0:8", ["const:998:8"]]
- 0093409c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0093409c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0093409c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00935048 ["COPY", "tmp:0:8", ["const:968:8"]]
+ 00935048 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00935048 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00935048 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a20e18bda53b7c880e6d49ec5ac978d2"></a>

### [`009340b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/009340b0.md) → [`0093505c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/0093505c.md) FUN_0093505c

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
      "definition_site": "00935068",
      "incomplete_value": false,
      "site": "00935068",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009340bc",
      "incomplete_value": false,
      "site": "009340bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:998:8"
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
      "00935068",
      "DATA",
      [
        "storage",
        "00c87998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00935068",
      "DATA",
      [
        "storage",
        "00c88968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009340b4 ["COPY", "register:4048:8", ["const:c87000:8"]]
+ 00935060 ["COPY", "register:4048:8", ["const:c88000:8"]]
- 009340b8 ["COPY", "tmp:0:8", ["const:998:8"]]
- 009340b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009340b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009340b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00935064 ["COPY", "tmp:0:8", ["const:968:8"]]
+ 00935064 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00935064 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00935064 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


