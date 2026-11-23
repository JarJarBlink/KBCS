# v16.0.1 → v16.0.2 · 最優先の変更候補 (51)

[一覧の目次](README.md)

<a id="compare-b4c356a44343bc17a5e84457091d874d"></a>

### [`008a43b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a43b0.md) → [`008a4408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4408.md) FUN_008a4408

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
      "definition_site": "008a441c",
      "incomplete_value": false,
      "site": "008a4420",
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
      "definition_site": "008a43c4",
      "incomplete_value": false,
      "site": "008a43c8",
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
      "008a4420",
      "DATA",
      [
        "storage",
        "00c82410",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4420",
      "DATA",
      [
        "storage",
        "00c824e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a43bc ["INT_ADD", "register:40f0:8", ["const:8a43bc:8", "const:4:8"]]
- 008a43bc ["CALL", null, ["callee:00c57f60:8"]]
+ 008a4414 ["INT_ADD", "register:40f0:8", ["const:8a4414:8", "const:4:8"]]
+ 008a4414 ["CALL", null, ["callee:00c57f60:8"]]
- 008a43c4 ["COPY", "tmp:0:8", ["const:410:8"]]
- 008a43c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a43c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a43c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a441c ["COPY", "tmp:0:8", ["const:4e0:8"]]
+ 008a441c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a441c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a441c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-70f6c2451086c4a1769422b02d4b90b4"></a>

### [`008a44f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a44f8.md) → [`008a4550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4550.md) FUN_008a4550

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
      "definition_site": "008a4564",
      "incomplete_value": false,
      "site": "008a4568",
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
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a450c",
      "incomplete_value": false,
      "site": "008a4510",
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
      "008a4568",
      "DATA",
      [
        "storage",
        "00c82480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4568",
      "DATA",
      [
        "storage",
        "00c82550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4504 ["INT_ADD", "register:40f0:8", ["const:8a4504:8", "const:4:8"]]
- 008a4504 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a455c ["INT_ADD", "register:40f0:8", ["const:8a455c:8", "const:4:8"]]
+ 008a455c ["CALL", null, ["callee:00c57f60:8"]]
- 008a450c ["COPY", "tmp:0:8", ["const:480:8"]]
- 008a450c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a450c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a450c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a4564 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 008a4564 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4564 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4564 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-901f81a5ff73191bbc65bff0e8b7bca8"></a>

### [`008a451c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a451c.md) → [`008a4574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4574.md) FUN_008a4574

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
      "definition_site": "008a4578",
      "incomplete_value": false,
      "site": "008a457c",
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
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4520",
      "incomplete_value": false,
      "site": "008a4524",
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
      "008a457c",
      "DATA",
      [
        "storage",
        "00c82480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a457c",
      "DATA",
      [
        "storage",
        "00c82550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4520 ["COPY", "tmp:0:8", ["const:480:8"]]
- 008a4520 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4520 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4520 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a4578 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 008a4578 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4578 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4578 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3649ecbae4cc95af8841bcfdeda654e9"></a>

### [`008a4534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4534.md) → [`008a458c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a458c.md) FUN_008a458c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

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
      "definition_site": "008a45fc",
      "incomplete_value": true,
      "site": "008a460c",
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
      "definition_site": "008a45a4",
      "incomplete_value": true,
      "site": "008a45b4",
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
      "definition_site": "008a46d4",
      "incomplete_value": false,
      "site": "008a46d4",
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
            "const:5c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a467c",
      "incomplete_value": false,
      "site": "008a467c",
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
            "const:4f0:8"
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
      "008a45fc",
      "READ",
      [
        "storage",
        "002a345c",
        null,
        "string"
      ]
    ],
    [
      "008a46d4",
      "DATA",
      [
        "storage",
        "00c824f0",
        null,
        "undefined *"
      ]
    ],
    [
      "008a472c",
      "READ",
      [
        "storage",
        "00c82510",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008a45fc",
      "READ",
      [
        "storage",
        "002a340f",
        null,
        "string"
      ]
    ],
    [
      "008a46d4",
      "DATA",
      [
        "storage",
        "00c825c0",
        null,
        "undefined *"
      ]
    ],
    [
      "008a472c",
      "READ",
      [
        "storage",
        "00c825e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a460c ["INT_ADD", "register:40f0:8", ["const:8a460c:8", "const:4:8"]]
- 008a460c ["CALL", null, ["callee:0043bb60:8"]]
+ 008a4664 ["INT_ADD", "register:40f0:8", ["const:8a4664:8", "const:4:8"]]
+ 008a4664 ["CALL", null, ["callee:0043bb60:8"]]
- 008a456c ["INT_ADD", "register:40f0:8", ["const:8a456c:8", "const:4:8"]]
- 008a456c ["CALL", null, ["callee:0071c4b8:8"]]
+ 008a45c4 ["INT_ADD", "register:40f0:8", ["const:8a45c4:8", "const:4:8"]]
+ 008a45c4 ["CALL", null, ["callee:0071c4b8:8"]]
- 008a4570 ["INT_ADD", "register:40f0:8", ["const:8a4570:8", "const:4:8"]]
- 008a4570 ["CALL", null, ["callee:00851550:8"]]
+ 008a45c8 ["INT_ADD", "register:40f0:8", ["const:8a45c8:8", "const:4:8"]]
+ 008a45c8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-eb6319bf17e677a14b005394f1586124"></a>

### [`008a48dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a48dc.md) → [`008a4934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4934.md) FUN_008a4934

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
      "definition_site": "008a4948",
      "incomplete_value": false,
      "site": "008a494c",
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
            "const:5c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a48f0",
      "incomplete_value": false,
      "site": "008a48f4",
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
            "const:4f0:8"
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
      "008a494c",
      "DATA",
      [
        "storage",
        "00c824f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a494c",
      "DATA",
      [
        "storage",
        "00c825c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a48e8 ["INT_ADD", "register:40f0:8", ["const:8a48e8:8", "const:4:8"]]
- 008a48e8 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a4940 ["INT_ADD", "register:40f0:8", ["const:8a4940:8", "const:4:8"]]
+ 008a4940 ["CALL", null, ["callee:00c57f60:8"]]
- 008a48f0 ["COPY", "tmp:0:8", ["const:4f0:8"]]
- 008a48f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a48f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a48f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a4948 ["COPY", "tmp:0:8", ["const:5c0:8"]]
+ 008a4948 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4948 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4948 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-85c3f8ca640fce0c870d07a591710f6e"></a>

### [`008a4900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4900.md) → [`008a4958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4958.md) FUN_008a4958

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
      "definition_site": "008a495c",
      "incomplete_value": false,
      "site": "008a4960",
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
            "const:5c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4904",
      "incomplete_value": false,
      "site": "008a4908",
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
            "const:4f0:8"
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
      "008a4960",
      "DATA",
      [
        "storage",
        "00c824f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4960",
      "DATA",
      [
        "storage",
        "00c825c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4904 ["COPY", "tmp:0:8", ["const:4f0:8"]]
- 008a4904 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4904 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4904 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a495c ["COPY", "tmp:0:8", ["const:5c0:8"]]
+ 008a495c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a495c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a495c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-54913d4c9ac821412a2fd1766eccd94e"></a>

### [`008a4918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4918.md) → [`008a4970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4970.md) FUN_008a4970

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
      "site": "008a4994",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a493c",
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
      "008a4994",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008a4994",
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
- 008a493c ["INT_ADD", "register:40f0:8", ["const:8a493c:8", "const:4:8"]]
- 008a493c ["CALL", null, ["ram:47acf4:8"]]
+ 008a4994 ["INT_ADD", "register:40f0:8", ["const:8a4994:8", "const:4:8"]]
+ 008a4994 ["CALL", null, ["ram:47ad34:8"]]
- 008a4948 ["INT_ADD", "register:40f0:8", ["const:8a4948:8", "const:4:8"]]
- 008a4948 ["CALL", null, ["callee:0047ce14:8"]]
+ 008a49a0 ["INT_ADD", "register:40f0:8", ["const:8a49a0:8", "const:4:8"]]
+ 008a49a0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-4c019336a74234b0fd3de7ebc3a08257"></a>

### [`008a498c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a498c.md) → [`008a49e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a49e4.md) FUN_008a49e4

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
      "definition_site": "008a49f8",
      "incomplete_value": false,
      "site": "008a49fc",
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
            "const:670:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a49a0",
      "incomplete_value": false,
      "site": "008a49a4",
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
            "const:5a0:8"
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
      "008a49fc",
      "DATA",
      [
        "storage",
        "00c825a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a49fc",
      "DATA",
      [
        "storage",
        "00c82670",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4998 ["INT_ADD", "register:40f0:8", ["const:8a4998:8", "const:4:8"]]
- 008a4998 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a49f0 ["INT_ADD", "register:40f0:8", ["const:8a49f0:8", "const:4:8"]]
+ 008a49f0 ["CALL", null, ["callee:00c57f60:8"]]
- 008a49a0 ["COPY", "tmp:0:8", ["const:5a0:8"]]
- 008a49a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a49a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a49a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a49f8 ["COPY", "tmp:0:8", ["const:670:8"]]
+ 008a49f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a49f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a49f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9aad5773c737ed8eff82eb1743aa7c1c"></a>

### [`008a49b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a49b0.md) → [`008a4a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4a08.md) FUN_008a4a08

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
      "definition_site": "008a4a0c",
      "incomplete_value": false,
      "site": "008a4a10",
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
            "const:670:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a49b4",
      "incomplete_value": false,
      "site": "008a49b8",
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
      "008a4a10",
      "DATA",
      [
        "storage",
        "00c825a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4a10",
      "DATA",
      [
        "storage",
        "00c82670",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a49b4 ["COPY", "tmp:0:8", ["const:5a0:8"]]
- 008a49b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a49b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a49b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a4a0c ["COPY", "tmp:0:8", ["const:670:8"]]
+ 008a4a0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4a0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4a0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8ba2007d47de225f8bd91eeddba7fa0a"></a>

### [`008a49c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a49c8.md) → [`008a4a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4a20.md) FUN_008a4a20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492f28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492f28.md) [`00493970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493970.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md) [`004939b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939b0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.36% / 新版 89.36%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a4a7c",
      "incomplete_value": true,
      "site": "008a4a7c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bd2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4a24",
      "incomplete_value": true,
      "site": "008a4a24",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c2e:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a4a48",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a49f0",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "008a4a54",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a49fc",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "008a4a48",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a4a54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a4a68",
      "READ",
      [
        "storage",
        "002a5c2e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a4a48",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a4a54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a4a68",
      "READ",
      [
        "storage",
        "002a5bd2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a49f0 ["INT_ADD", "register:40f0:8", ["const:8a49f0:8", "const:4:8"]]
- 008a49f0 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a4a48 ["INT_ADD", "register:40f0:8", ["const:8a4a48:8", "const:4:8"]]
+ 008a4a48 ["CALL", null, ["ram:48cd38:8"]]
- 008a49fc ["INT_ADD", "register:40f0:8", ["const:8a49fc:8", "const:4:8"]]
- 008a49fc ["CALL", null, ["ram:48ccf8:8"]]
+ 008a4a54 ["INT_ADD", "register:40f0:8", ["const:8a4a54:8", "const:4:8"]]
+ 008a4a54 ["CALL", null, ["ram:48cd38:8"]]
- 008a49f8 ["INT_ADD", "register:40f0:8", ["const:8a49f8:8", "const:4:8"]]
- 008a49f8 ["CALL", null, ["callee:004939b0:8"]]
+ 008a4a50 ["INT_ADD", "register:40f0:8", ["const:8a4a50:8", "const:4:8"]]
+ 008a4a50 ["CALL", null, ["callee:004939b0:8"]]
~~~


<a id="compare-084d6e7f712d0db5e5c6ea968972a662"></a>

### [`008a4af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4af4.md) → [`008a4b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4b4c.md) FUN_008a4b4c

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
      "definition_site": "008a4b60",
      "incomplete_value": false,
      "site": "008a4b64",
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
            "const:6f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4b08",
      "incomplete_value": false,
      "site": "008a4b0c",
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
            "const:620:8"
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
      "008a4b64",
      "DATA",
      [
        "storage",
        "00c82620",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4b64",
      "DATA",
      [
        "storage",
        "00c826f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4b00 ["INT_ADD", "register:40f0:8", ["const:8a4b00:8", "const:4:8"]]
- 008a4b00 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a4b58 ["INT_ADD", "register:40f0:8", ["const:8a4b58:8", "const:4:8"]]
+ 008a4b58 ["CALL", null, ["callee:00c57f60:8"]]
- 008a4b08 ["COPY", "tmp:0:8", ["const:620:8"]]
- 008a4b08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4b08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4b08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a4b60 ["COPY", "tmp:0:8", ["const:6f0:8"]]
+ 008a4b60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4b60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4b60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-de4e942de9651c5d3157bb939b535e95"></a>

### [`008a4b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4b18.md) → [`008a4b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4b70.md) FUN_008a4b70

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
      "definition_site": "008a4b74",
      "incomplete_value": false,
      "site": "008a4b78",
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
            "const:6f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4b1c",
      "incomplete_value": false,
      "site": "008a4b20",
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
      "008a4b78",
      "DATA",
      [
        "storage",
        "00c82620",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4b78",
      "DATA",
      [
        "storage",
        "00c826f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4b1c ["COPY", "tmp:0:8", ["const:620:8"]]
- 008a4b1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4b1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4b1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a4b74 ["COPY", "tmp:0:8", ["const:6f0:8"]]
+ 008a4b74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4b74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4b74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8f914ac444d6962e3f73ef7466e6d91d"></a>

### [`008a4b30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4b30.md) → [`008a4b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4b88.md) FUN_008a4b88

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
      "site": "008a4bac",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a4b54",
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
      "008a4bac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008a4bac",
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
- 008a4b54 ["INT_ADD", "register:40f0:8", ["const:8a4b54:8", "const:4:8"]]
- 008a4b54 ["CALL", null, ["ram:47acf4:8"]]
+ 008a4bac ["INT_ADD", "register:40f0:8", ["const:8a4bac:8", "const:4:8"]]
+ 008a4bac ["CALL", null, ["ram:47ad34:8"]]
- 008a4b60 ["INT_ADD", "register:40f0:8", ["const:8a4b60:8", "const:4:8"]]
- 008a4b60 ["CALL", null, ["callee:0047ce14:8"]]
+ 008a4bb8 ["INT_ADD", "register:40f0:8", ["const:8a4bb8:8", "const:4:8"]]
+ 008a4bb8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-8496eb2cdc5d17955ab265fa4ed6e607"></a>

### [`008a4ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4ba4.md) → [`008a4bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4bfc.md) FUN_008a4bfc

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
      "definition_site": "008a4c10",
      "incomplete_value": false,
      "site": "008a4c14",
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
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4bb8",
      "incomplete_value": false,
      "site": "008a4bbc",
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
            "const:6a0:8"
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
      "008a4c14",
      "DATA",
      [
        "storage",
        "00c826a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4c14",
      "DATA",
      [
        "storage",
        "00c82770",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4bb0 ["INT_ADD", "register:40f0:8", ["const:8a4bb0:8", "const:4:8"]]
- 008a4bb0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a4c08 ["INT_ADD", "register:40f0:8", ["const:8a4c08:8", "const:4:8"]]
+ 008a4c08 ["CALL", null, ["callee:00c57f60:8"]]
- 008a4bb8 ["COPY", "tmp:0:8", ["const:6a0:8"]]
- 008a4bb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4bb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4bb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a4c10 ["COPY", "tmp:0:8", ["const:770:8"]]
+ 008a4c10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4c10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4c10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b93612f318e46f437f619b575f7076d9"></a>

### [`008a4bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4bc8.md) → [`008a4c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4c20.md) FUN_008a4c20

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
      "definition_site": "008a4c24",
      "incomplete_value": false,
      "site": "008a4c28",
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
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4bcc",
      "incomplete_value": false,
      "site": "008a4bd0",
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
            "const:6a0:8"
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
      "008a4c28",
      "DATA",
      [
        "storage",
        "00c826a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4c28",
      "DATA",
      [
        "storage",
        "00c82770",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4bcc ["COPY", "tmp:0:8", ["const:6a0:8"]]
- 008a4bcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4bcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4bcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a4c24 ["COPY", "tmp:0:8", ["const:770:8"]]
+ 008a4c24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4c24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4c24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8bb7092d69bcff02974762f580b8c4bc"></a>

### [`008a4c14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4c14.md) → [`008a4c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4c6c.md) FUN_008a4c6c

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
      "definition_site": "008a4c80",
      "incomplete_value": false,
      "site": "008a4c84",
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
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4c28",
      "incomplete_value": false,
      "site": "008a4c2c",
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
            "const:720:8"
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
      "008a4c84",
      "DATA",
      [
        "storage",
        "00c82720",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4c84",
      "DATA",
      [
        "storage",
        "00c827f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4c20 ["INT_ADD", "register:40f0:8", ["const:8a4c20:8", "const:4:8"]]
- 008a4c20 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a4c78 ["INT_ADD", "register:40f0:8", ["const:8a4c78:8", "const:4:8"]]
+ 008a4c78 ["CALL", null, ["callee:00c57f60:8"]]
- 008a4c28 ["COPY", "tmp:0:8", ["const:720:8"]]
- 008a4c28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4c28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4c28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a4c80 ["COPY", "tmp:0:8", ["const:7f0:8"]]
+ 008a4c80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4c80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4c80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-17a29eb0fecd6b71e64e28dde9e116ca"></a>

### [`008a4c38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4c38.md) → [`008a4c90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4c90.md) FUN_008a4c90

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
      "definition_site": "008a4c94",
      "incomplete_value": false,
      "site": "008a4c98",
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
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4c3c",
      "incomplete_value": false,
      "site": "008a4c40",
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
            "const:720:8"
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
      "008a4c98",
      "DATA",
      [
        "storage",
        "00c82720",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4c98",
      "DATA",
      [
        "storage",
        "00c827f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4c3c ["COPY", "tmp:0:8", ["const:720:8"]]
- 008a4c3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4c3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4c3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a4c94 ["COPY", "tmp:0:8", ["const:7f0:8"]]
+ 008a4c94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4c94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4c94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7ca352a641f5417342210300f2f0f0c2"></a>

### [`008a4c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4c50.md) → [`008a4ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4ca8.md) FUN_008a4ca8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 13件 [`0044ed20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044e/0044ed20.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0048eef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048eef0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0044ed60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044ed60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_target` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a4d70",
      "incomplete_value": true,
      "site": "008a4d70",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:20f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4d18",
      "incomplete_value": true,
      "site": "008a4d18",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bb000:8"
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a4db8",
      "incomplete_value": true,
      "site": "008a4dc8",
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
                "const:23a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4d60",
      "incomplete_value": true,
      "site": "008a4d70",
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
                "const:28e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a4dcc",
      "incomplete_value": true,
      "site": "008a4dcc",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008a4d74",
      "incomplete_value": true,
      "site": "008a4d74",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 21,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008a4d44",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a4d60",
      "READ",
      [
        "storage",
        "002bb263",
        null,
        "string"
      ]
    ],
    [
      "008a4db8",
      "READ",
      [
        "storage",
        "002bf28e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a4d44",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a4d60",
      "READ",
      [
        "storage",
        "002bb20f",
        null,
        "string"
      ]
    ],
    [
      "008a4db8",
      "READ",
      [
        "storage",
        "002bf23a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4cc0 ["INT_ADD", "register:40f0:8", ["const:8a4cc0:8", "const:4:8"]]
- 008a4cc0 ["CALL", null, ["callee:008bb568:8"]]
+ 008a4d18 ["INT_ADD", "register:40f0:8", ["const:8a4d18:8", "const:4:8"]]
+ 008a4d18 ["CALL", null, ["callee:008bb568:8"]]
- 008a4cec ["INT_ADD", "register:40f0:8", ["const:8a4cec:8", "const:4:8"]]
- 008a4cec ["CALL", null, ["ram:48ccf8:8"]]
+ 008a4d44 ["INT_ADD", "register:40f0:8", ["const:8a4d44:8", "const:4:8"]]
+ 008a4d44 ["CALL", null, ["ram:48cd38:8"]]
- 008a4ca0 ["INT_ADD", "register:40f0:8", ["const:8a4ca0:8", "const:4:8"]]
- 008a4ca0 ["CALL", null, ["callee:00851550:8"]]
+ 008a4cf8 ["INT_ADD", "register:40f0:8", ["const:8a4cf8:8", "const:4:8"]]
+ 008a4cf8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-4f9ec56c576dbf6191154ed6e02c00ae"></a>

### [`008a4f64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4f64.md) → [`008a4fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4fbc.md) FUN_008a4fbc

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
      "definition_site": "008a4fd0",
      "incomplete_value": false,
      "site": "008a4fd4",
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
            "const:860:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4f78",
      "incomplete_value": false,
      "site": "008a4f7c",
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
            "const:790:8"
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
      "008a4fd4",
      "DATA",
      [
        "storage",
        "00c82790",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4fd4",
      "DATA",
      [
        "storage",
        "00c82860",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4f70 ["INT_ADD", "register:40f0:8", ["const:8a4f70:8", "const:4:8"]]
- 008a4f70 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a4fc8 ["INT_ADD", "register:40f0:8", ["const:8a4fc8:8", "const:4:8"]]
+ 008a4fc8 ["CALL", null, ["callee:00c57f60:8"]]
- 008a4f78 ["COPY", "tmp:0:8", ["const:790:8"]]
- 008a4f78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4f78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4f78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a4fd0 ["COPY", "tmp:0:8", ["const:860:8"]]
+ 008a4fd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4fd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4fd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b3216d73b68dc5a3e4433fd18f7dde6c"></a>

### [`008a4f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4f88.md) → [`008a4fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4fe0.md) FUN_008a4fe0

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
      "definition_site": "008a4fe4",
      "incomplete_value": false,
      "site": "008a4fe8",
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
            "const:860:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a4f8c",
      "incomplete_value": false,
      "site": "008a4f90",
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
            "const:790:8"
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
      "008a4fe8",
      "DATA",
      [
        "storage",
        "00c82790",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a4fe8",
      "DATA",
      [
        "storage",
        "00c82860",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a4f8c ["COPY", "tmp:0:8", ["const:790:8"]]
- 008a4f8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a4f8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a4f8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a4fe4 ["COPY", "tmp:0:8", ["const:860:8"]]
+ 008a4fe4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4fe4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a4fe4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ee7525892e24c32a3d9fbc343b574015"></a>

### [`008a4fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4fa0.md) → [`008a4ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4ff8.md) FUN_008a4ff8

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
      "site": "008a501c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a4fc4",
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
      "008a501c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008a501c",
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
- 008a4fc4 ["INT_ADD", "register:40f0:8", ["const:8a4fc4:8", "const:4:8"]]
- 008a4fc4 ["CALL", null, ["ram:47acf4:8"]]
+ 008a501c ["INT_ADD", "register:40f0:8", ["const:8a501c:8", "const:4:8"]]
+ 008a501c ["CALL", null, ["ram:47ad34:8"]]
- 008a4fd0 ["INT_ADD", "register:40f0:8", ["const:8a4fd0:8", "const:4:8"]]
- 008a4fd0 ["CALL", null, ["callee:0047ce14:8"]]
+ 008a5028 ["INT_ADD", "register:40f0:8", ["const:8a5028:8", "const:4:8"]]
+ 008a5028 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-7f8941632f0c3431195977e01185bb4c"></a>

### [`008a5038`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a5038.md) → [`008a5090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5090.md) FUN_008a5090

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
      "definition_site": "008a5094",
      "incomplete_value": false,
      "site": "008a5098",
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
            "const:8f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a503c",
      "incomplete_value": false,
      "site": "008a5040",
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
            "const:820:8"
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
      "008a5098",
      "DATA",
      [
        "storage",
        "00c82820",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5098",
      "DATA",
      [
        "storage",
        "00c828f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a503c ["COPY", "tmp:0:8", ["const:820:8"]]
- 008a503c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a503c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a503c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a5094 ["COPY", "tmp:0:8", ["const:8f0:8"]]
+ 008a5094 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5094 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5094 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-48b00195a5f7c4bc8e438f25e7c8ca74"></a>

### [`008a50c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a50c0.md) → [`008a5118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5118.md) FUN_008a5118

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
      "definition_site": "008a511c",
      "incomplete_value": false,
      "site": "008a5120",
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
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a50c4",
      "incomplete_value": false,
      "site": "008a50c8",
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
      "008a5120",
      "DATA",
      [
        "storage",
        "00c828a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5120",
      "DATA",
      [
        "storage",
        "00c82970",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a50c4 ["COPY", "tmp:0:8", ["const:8a0:8"]]
- 008a50c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a50c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a50c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a511c ["COPY", "tmp:0:8", ["const:970:8"]]
+ 008a511c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a511c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a511c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bc45a7dee8754a7a59d426d00b51d826"></a>

### [`008a50d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a50d8.md) → [`008a5130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5130.md) FUN_008a5130

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`0053f018`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0053f/0053f018.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`0053f058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f058.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.69% / 新版 94.69%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a51fc",
      "incomplete_value": true,
      "site": "008a520c",
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
                "const:27c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a51a4",
      "incomplete_value": true,
      "site": "008a51b4",
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
                "const:24b:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a51e4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a518c",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a51ec",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5194",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "008a51e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a51ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a51fc",
      "READ",
      [
        "storage",
        "002b424b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a51e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a51ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a51fc",
      "READ",
      [
        "storage",
        "002b427c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a518c ["INT_ADD", "register:40f0:8", ["const:8a518c:8", "const:4:8"]]
- 008a518c ["CALL", null, ["ram:48ccf8:8"]]
+ 008a51e4 ["INT_ADD", "register:40f0:8", ["const:8a51e4:8", "const:4:8"]]
+ 008a51e4 ["CALL", null, ["ram:48cd38:8"]]
- 008a5194 ["INT_ADD", "register:40f0:8", ["const:8a5194:8", "const:4:8"]]
- 008a5194 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a51ec ["INT_ADD", "register:40f0:8", ["const:8a51ec:8", "const:4:8"]]
+ 008a51ec ["CALL", null, ["ram:48cd38:8"]]
- 008a51e4 ["INT_ADD", "register:40f0:8", ["const:8a51e4:8", "const:4:8"]]
- 008a51e4 ["CALL", null, ["callee:00c57f80:8"]]
+ 008a523c ["INT_ADD", "register:40f0:8", ["const:8a523c:8", "const:4:8"]]
+ 008a523c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-21170c8df59c3c50d4e26d7701141a0e"></a>

### [`008a5320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a5320.md) → [`008a5378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5378.md) FUN_008a5378

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
      "definition_site": "008a538c",
      "incomplete_value": false,
      "site": "008a5390",
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
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5334",
      "incomplete_value": false,
      "site": "008a5338",
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
            "const:920:8"
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
      "008a5390",
      "DATA",
      [
        "storage",
        "00c82920",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5390",
      "DATA",
      [
        "storage",
        "00c829f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a532c ["INT_ADD", "register:40f0:8", ["const:8a532c:8", "const:4:8"]]
- 008a532c ["CALL", null, ["callee:00c57f60:8"]]
+ 008a5384 ["INT_ADD", "register:40f0:8", ["const:8a5384:8", "const:4:8"]]
+ 008a5384 ["CALL", null, ["callee:00c57f60:8"]]
- 008a5334 ["COPY", "tmp:0:8", ["const:920:8"]]
- 008a5334 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5334 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5334 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a538c ["COPY", "tmp:0:8", ["const:9f0:8"]]
+ 008a538c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a538c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a538c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4fd841c46cbace5e0a9ff64ac4e5e957"></a>

### [`008a5344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a5344.md) → [`008a539c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a539c.md) FUN_008a539c

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
      "definition_site": "008a53a0",
      "incomplete_value": false,
      "site": "008a53a4",
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
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5348",
      "incomplete_value": false,
      "site": "008a534c",
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
            "const:920:8"
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
      "008a53a4",
      "DATA",
      [
        "storage",
        "00c82920",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a53a4",
      "DATA",
      [
        "storage",
        "00c829f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5348 ["COPY", "tmp:0:8", ["const:920:8"]]
- 008a5348 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5348 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5348 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a53a0 ["COPY", "tmp:0:8", ["const:9f0:8"]]
+ 008a53a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a53a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a53a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0fe35e03f45418f73a1c90f23dbdfc7c"></a>

### [`008a535c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a535c.md) → [`008a53b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a53b4.md) FUN_008a53b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.70% / 新版 90.70%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a53d0",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5378",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "008a53d8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5380",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "008a53d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a53d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a53e8",
      "READ",
      [
        "storage",
        "002a2554",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a53d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a53d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a53e8",
      "READ",
      [
        "storage",
        "002a2507",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5378 ["INT_ADD", "register:40f0:8", ["const:8a5378:8", "const:4:8"]]
- 008a5378 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a53d0 ["INT_ADD", "register:40f0:8", ["const:8a53d0:8", "const:4:8"]]
+ 008a53d0 ["CALL", null, ["ram:48cd38:8"]]
- 008a5380 ["INT_ADD", "register:40f0:8", ["const:8a5380:8", "const:4:8"]]
- 008a5380 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a53d8 ["INT_ADD", "register:40f0:8", ["const:8a53d8:8", "const:4:8"]]
+ 008a53d8 ["CALL", null, ["ram:48cd38:8"]]
- 008a53d0 ["INT_ADD", "register:40f0:8", ["const:8a53d0:8", "const:4:8"]]
- 008a53d0 ["CALL", null, ["callee:00c57f80:8"]]
+ 008a5428 ["INT_ADD", "register:40f0:8", ["const:8a5428:8", "const:4:8"]]
+ 008a5428 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-32c2b523d3bdf085803291fb978ad969"></a>

### [`008a5478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a5478.md) → [`008a54d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a54d0.md) FUN_008a54d0

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
      "definition_site": "008a54e4",
      "incomplete_value": false,
      "site": "008a54e8",
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
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a548c",
      "incomplete_value": false,
      "site": "008a5490",
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
            "const:9a0:8"
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
      "008a54e8",
      "DATA",
      [
        "storage",
        "00c829a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a54e8",
      "DATA",
      [
        "storage",
        "00c82a70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5484 ["INT_ADD", "register:40f0:8", ["const:8a5484:8", "const:4:8"]]
- 008a5484 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a54dc ["INT_ADD", "register:40f0:8", ["const:8a54dc:8", "const:4:8"]]
+ 008a54dc ["CALL", null, ["callee:00c57f60:8"]]
- 008a548c ["COPY", "tmp:0:8", ["const:9a0:8"]]
- 008a548c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a548c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a548c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a54e4 ["COPY", "tmp:0:8", ["const:a70:8"]]
+ 008a54e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a54e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a54e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1f5ad8f68a367e596af8fe445b186462"></a>

### [`008a549c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a549c.md) → [`008a54f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a54f4.md) FUN_008a54f4

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
      "definition_site": "008a54f8",
      "incomplete_value": false,
      "site": "008a54fc",
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
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a54a0",
      "incomplete_value": false,
      "site": "008a54a4",
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
            "const:9a0:8"
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
      "008a54fc",
      "DATA",
      [
        "storage",
        "00c829a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a54fc",
      "DATA",
      [
        "storage",
        "00c82a70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a54a0 ["COPY", "tmp:0:8", ["const:9a0:8"]]
- 008a54a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a54a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a54a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a54f8 ["COPY", "tmp:0:8", ["const:a70:8"]]
+ 008a54f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a54f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a54f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-62d4d1512bee36212deb4786d462c947"></a>

### [`008a54b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a54b4.md) → [`008a550c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a550c.md) FUN_008a550c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.42% / 新版 93.42%

優先判定に残った影響 `call_target` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a55a4",
      "incomplete_value": true,
      "site": "008a55b4",
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
                "const:992:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a554c",
      "incomplete_value": true,
      "site": "008a555c",
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
                "const:952:8"
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
      "definition_site": "008a55a8",
      "incomplete_value": true,
      "site": "008a55b8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008a5550",
      "incomplete_value": true,
      "site": "008a5560",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a55ac",
      "incomplete_value": true,
      "site": "008a55bc",
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
    "old": {
      "definition_site": "008a5554",
      "incomplete_value": true,
      "site": "008a5564",
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
      "008a553c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a5588",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a55a4",
      "READ",
      [
        "storage",
        "002b7952",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a553c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a5588",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a55a4",
      "READ",
      [
        "storage",
        "002b7992",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a54e4 ["INT_ADD", "register:40f0:8", ["const:8a54e4:8", "const:4:8"]]
- 008a54e4 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a553c ["INT_ADD", "register:40f0:8", ["const:8a553c:8", "const:4:8"]]
+ 008a553c ["CALL", null, ["ram:48cd38:8"]]
- 008a5530 ["INT_ADD", "register:40f0:8", ["const:8a5530:8", "const:4:8"]]
- 008a5530 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a5588 ["INT_ADD", "register:40f0:8", ["const:8a5588:8", "const:4:8"]]
+ 008a5588 ["CALL", null, ["ram:48cd38:8"]]
- 008a553c ["INT_ADD", "register:40f0:8", ["const:8a553c:8", "const:4:8"]]
- 008a553c ["CALL", null, ["callee:00c57f60:8"]]
+ 008a5594 ["INT_ADD", "register:40f0:8", ["const:8a5594:8", "const:4:8"]]
+ 008a5594 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-ced9046c50983abcdd19fc8cff03f16c"></a>

### [`008a57d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a57d8.md) → [`008a5830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5830.md) FUN_008a5830

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
      "definition_site": "008a5844",
      "incomplete_value": false,
      "site": "008a5848",
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
            "const:af0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a57ec",
      "incomplete_value": false,
      "site": "008a57f0",
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
            "const:a20:8"
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
      "008a5848",
      "DATA",
      [
        "storage",
        "00c82a20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5848",
      "DATA",
      [
        "storage",
        "00c82af0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a57e4 ["INT_ADD", "register:40f0:8", ["const:8a57e4:8", "const:4:8"]]
- 008a57e4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a583c ["INT_ADD", "register:40f0:8", ["const:8a583c:8", "const:4:8"]]
+ 008a583c ["CALL", null, ["callee:00c57f60:8"]]
- 008a57ec ["COPY", "tmp:0:8", ["const:a20:8"]]
- 008a57ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a57ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a57ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a5844 ["COPY", "tmp:0:8", ["const:af0:8"]]
+ 008a5844 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5844 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5844 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8de0dfdcca70d49ee8e5b86f8a03a256"></a>

### [`008a5814`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a5814.md) → [`008a586c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a586c.md) FUN_008a586c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a5900",
      "incomplete_value": true,
      "site": "008a5914",
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
                "const:507:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a58a8",
      "incomplete_value": true,
      "site": "008a58bc",
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
                "const:554:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a588c",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5834",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "008a58f0",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5898",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "008a588c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a58cc",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "008a58f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "008a588c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a58cc",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "008a58f0",
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
- 008a5834 ["INT_ADD", "register:40f0:8", ["const:8a5834:8", "const:4:8"]]
- 008a5834 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a588c ["INT_ADD", "register:40f0:8", ["const:8a588c:8", "const:4:8"]]
+ 008a588c ["CALL", null, ["ram:48cd38:8"]]
- 008a5898 ["INT_ADD", "register:40f0:8", ["const:8a5898:8", "const:4:8"]]
- 008a5898 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a58f0 ["INT_ADD", "register:40f0:8", ["const:8a58f0:8", "const:4:8"]]
+ 008a58f0 ["CALL", null, ["ram:48cd38:8"]]
- 008a5838 ["INT_ADD", "register:40f0:8", ["const:8a5838:8", "const:4:8"]]
- 008a5838 ["CALL", null, ["callee:0048e820:8"]]
+ 008a5890 ["INT_ADD", "register:40f0:8", ["const:8a5890:8", "const:4:8"]]
+ 008a5890 ["CALL", null, ["callee:0048e820:8"]]
~~~


<a id="compare-3b57863756fe955e654c3a52c1e10161"></a>

### [`008a5974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a5974.md) → [`008a59cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a59cc.md) FUN_008a59cc

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
      "definition_site": "008a59e0",
      "incomplete_value": false,
      "site": "008a59e4",
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
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5988",
      "incomplete_value": false,
      "site": "008a598c",
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
            "const:aa0:8"
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
      "008a59e4",
      "DATA",
      [
        "storage",
        "00c82aa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a59e4",
      "DATA",
      [
        "storage",
        "00c82b70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5980 ["INT_ADD", "register:40f0:8", ["const:8a5980:8", "const:4:8"]]
- 008a5980 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a59d8 ["INT_ADD", "register:40f0:8", ["const:8a59d8:8", "const:4:8"]]
+ 008a59d8 ["CALL", null, ["callee:00c57f60:8"]]
- 008a5988 ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 008a5988 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5988 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5988 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a59e0 ["COPY", "tmp:0:8", ["const:b70:8"]]
+ 008a59e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a59e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a59e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-616c6e6e2ea30ca98091819075832bcb"></a>

### [`008a59b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a59b0.md) → [`008a5a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5a08.md) FUN_008a5a08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.62% / 新版 94.62%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a5b68",
      "incomplete_value": true,
      "site": "008a5b7c",
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
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:cc0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5b10",
      "incomplete_value": true,
      "site": "008a5b24",
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
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:d1c:8"
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
      "definition_site": "008a5b80",
      "incomplete_value": true,
      "site": "008a5b80",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008a5b28",
      "incomplete_value": true,
      "site": "008a5b28",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5b50",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5af8",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "008a5b50",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a5b58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a5b68",
      "READ",
      [
        "storage",
        "002add1c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a5b50",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a5b58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a5b68",
      "READ",
      [
        "storage",
        "002adcc0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5acc ["INT_ADD", "register:40f0:8", ["const:8a5acc:8", "const:4:8"]]
- 008a5acc ["CALL", null, ["callee:00540dbc:8"]]
+ 008a5b24 ["INT_ADD", "register:40f0:8", ["const:8a5b24:8", "const:4:8"]]
+ 008a5b24 ["CALL", null, ["callee:00540dbc:8"]]
- 008a5af8 ["INT_ADD", "register:40f0:8", ["const:8a5af8:8", "const:4:8"]]
- 008a5af8 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a5b50 ["INT_ADD", "register:40f0:8", ["const:8a5b50:8", "const:4:8"]]
+ 008a5b50 ["CALL", null, ["ram:48cd38:8"]]
- 008a5b00 ["INT_ADD", "register:40f0:8", ["const:8a5b00:8", "const:4:8"]]
- 008a5b00 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a5b58 ["INT_ADD", "register:40f0:8", ["const:8a5b58:8", "const:4:8"]]
+ 008a5b58 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-ca6d3716327c782f03ec648f87b9c477"></a>

### [`008a5c38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a5c38.md) → [`008a5c90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5c90.md) FUN_008a5c90

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
      "definition_site": "008a5ca4",
      "incomplete_value": false,
      "site": "008a5ca8",
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
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5c4c",
      "incomplete_value": false,
      "site": "008a5c50",
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
            "const:b20:8"
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
      "008a5ca8",
      "DATA",
      [
        "storage",
        "00c82b20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5ca8",
      "DATA",
      [
        "storage",
        "00c82bf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5c44 ["INT_ADD", "register:40f0:8", ["const:8a5c44:8", "const:4:8"]]
- 008a5c44 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a5c9c ["INT_ADD", "register:40f0:8", ["const:8a5c9c:8", "const:4:8"]]
+ 008a5c9c ["CALL", null, ["callee:00c57f60:8"]]
- 008a5c4c ["COPY", "tmp:0:8", ["const:b20:8"]]
- 008a5c4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5c4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5c4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a5ca4 ["COPY", "tmp:0:8", ["const:bf0:8"]]
+ 008a5ca4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5ca4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5ca4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-42fd805c82e6efc9efd1e183a6c9fc63"></a>

### [`008a5c5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a5c5c.md) → [`008a5cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5cb4.md) FUN_008a5cb4

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
      "definition_site": "008a5cb8",
      "incomplete_value": false,
      "site": "008a5cbc",
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
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5c60",
      "incomplete_value": false,
      "site": "008a5c64",
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
            "const:b20:8"
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
      "008a5cbc",
      "DATA",
      [
        "storage",
        "00c82b20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5cbc",
      "DATA",
      [
        "storage",
        "00c82bf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5c60 ["COPY", "tmp:0:8", ["const:b20:8"]]
- 008a5c60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5c60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5c60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a5cb8 ["COPY", "tmp:0:8", ["const:bf0:8"]]
+ 008a5cb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5cb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5cb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b4d749b968dd1970eba256eee3d3ff4d"></a>

### [`008a5c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a5c74.md) → [`008a5ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5ccc.md) FUN_008a5ccc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 91.49% / 新版 91.49%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5ce8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5c90",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "008a5cf0",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5c98",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "008a5ce8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a5cf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a5d00",
      "READ",
      [
        "storage",
        "002a2554",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a5ce8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a5cf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a5d00",
      "READ",
      [
        "storage",
        "002a2507",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5c90 ["INT_ADD", "register:40f0:8", ["const:8a5c90:8", "const:4:8"]]
- 008a5c90 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a5ce8 ["INT_ADD", "register:40f0:8", ["const:8a5ce8:8", "const:4:8"]]
+ 008a5ce8 ["CALL", null, ["ram:48cd38:8"]]
- 008a5c98 ["INT_ADD", "register:40f0:8", ["const:8a5c98:8", "const:4:8"]]
- 008a5c98 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a5cf0 ["INT_ADD", "register:40f0:8", ["const:8a5cf0:8", "const:4:8"]]
+ 008a5cf0 ["CALL", null, ["ram:48cd38:8"]]
- 008a5ce8 ["INT_ADD", "register:40f0:8", ["const:8a5ce8:8", "const:4:8"]]
- 008a5ce8 ["CALL", null, ["callee:00c57f80:8"]]
+ 008a5d40 ["INT_ADD", "register:40f0:8", ["const:8a5d40:8", "const:4:8"]]
+ 008a5d40 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-5eac79fa19f39afb7565508122dec4b2"></a>

### [`008a5da0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a5da0.md) → [`008a5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5df8.md) FUN_008a5df8

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
      "definition_site": "008a5e0c",
      "incomplete_value": false,
      "site": "008a5e10",
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
            "const:c70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5db4",
      "incomplete_value": false,
      "site": "008a5db8",
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
            "const:ba0:8"
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
      "008a5e10",
      "DATA",
      [
        "storage",
        "00c82ba0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5e10",
      "DATA",
      [
        "storage",
        "00c82c70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5dac ["INT_ADD", "register:40f0:8", ["const:8a5dac:8", "const:4:8"]]
- 008a5dac ["CALL", null, ["callee:00c57f60:8"]]
+ 008a5e04 ["INT_ADD", "register:40f0:8", ["const:8a5e04:8", "const:4:8"]]
+ 008a5e04 ["CALL", null, ["callee:00c57f60:8"]]
- 008a5db4 ["COPY", "tmp:0:8", ["const:ba0:8"]]
- 008a5db4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5db4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5db4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a5e0c ["COPY", "tmp:0:8", ["const:c70:8"]]
+ 008a5e0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5e0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5e0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fdba4c387c2266f127a844be49ef260b"></a>

### [`008a5dc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a5dc4.md) → [`008a5e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5e1c.md) FUN_008a5e1c

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
      "definition_site": "008a5e20",
      "incomplete_value": false,
      "site": "008a5e24",
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
            "const:c70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a5dc8",
      "incomplete_value": false,
      "site": "008a5dcc",
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
            "const:ba0:8"
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
      "008a5e24",
      "DATA",
      [
        "storage",
        "00c82ba0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a5e24",
      "DATA",
      [
        "storage",
        "00c82c70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5dc8 ["COPY", "tmp:0:8", ["const:ba0:8"]]
- 008a5dc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a5dc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a5dc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a5e20 ["COPY", "tmp:0:8", ["const:c70:8"]]
+ 008a5e20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5e20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a5e20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8833bac1666c9ce023bcbc35487b4069"></a>

### [`008a5ddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a5ddc.md) → [`008a5e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5e34.md) FUN_008a5e34

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`0082eaf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082e/0082eaf8.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`0082eb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082eb50.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.28% / 新版 97.28%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5fa4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5f4c",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "008a5fac",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a5f54",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 10,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008a5fa4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a5fac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a5fbc",
      "READ",
      [
        "storage",
        "002b424b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a5fa4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a5fac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a5fbc",
      "READ",
      [
        "storage",
        "002b427c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a5f4c ["INT_ADD", "register:40f0:8", ["const:8a5f4c:8", "const:4:8"]]
- 008a5f4c ["CALL", null, ["ram:48ccf8:8"]]
+ 008a5fa4 ["INT_ADD", "register:40f0:8", ["const:8a5fa4:8", "const:4:8"]]
+ 008a5fa4 ["CALL", null, ["ram:48cd38:8"]]
- 008a5f54 ["INT_ADD", "register:40f0:8", ["const:8a5f54:8", "const:4:8"]]
- 008a5f54 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a5fac ["INT_ADD", "register:40f0:8", ["const:8a5fac:8", "const:4:8"]]
+ 008a5fac ["CALL", null, ["ram:48cd38:8"]]
- 008a5fa4 ["INT_ADD", "register:40f0:8", ["const:8a5fa4:8", "const:4:8"]]
- 008a5fa4 ["CALL", null, ["callee:00c57f80:8"]]
+ 008a5ffc ["INT_ADD", "register:40f0:8", ["const:8a5ffc:8", "const:4:8"]]
+ 008a5ffc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-a762d5ce6b2bae4b9d49bfcfcab4c146"></a>

### [`008a6098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6098.md) → [`008a60f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a60f0.md) FUN_008a60f0

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
      "definition_site": "008a6104",
      "incomplete_value": false,
      "site": "008a6108",
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
            "const:cf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a60ac",
      "incomplete_value": false,
      "site": "008a60b0",
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
            "const:c20:8"
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
      "008a6108",
      "DATA",
      [
        "storage",
        "00c82c20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6108",
      "DATA",
      [
        "storage",
        "00c82cf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a60a4 ["INT_ADD", "register:40f0:8", ["const:8a60a4:8", "const:4:8"]]
- 008a60a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a60fc ["INT_ADD", "register:40f0:8", ["const:8a60fc:8", "const:4:8"]]
+ 008a60fc ["CALL", null, ["callee:00c57f60:8"]]
- 008a60ac ["COPY", "tmp:0:8", ["const:c20:8"]]
- 008a60ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a60ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a60ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6104 ["COPY", "tmp:0:8", ["const:cf0:8"]]
+ 008a6104 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6104 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6104 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b6f0dceef0be22b625a0f0ff13bd74a0"></a>

### [`008a60bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a60bc.md) → [`008a6114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6114.md) FUN_008a6114

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
      "definition_site": "008a6118",
      "incomplete_value": false,
      "site": "008a611c",
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
            "const:cf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a60c0",
      "incomplete_value": false,
      "site": "008a60c4",
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
            "const:c20:8"
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
      "008a611c",
      "DATA",
      [
        "storage",
        "00c82c20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a611c",
      "DATA",
      [
        "storage",
        "00c82cf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a60c0 ["COPY", "tmp:0:8", ["const:c20:8"]]
- 008a60c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a60c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a60c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6118 ["COPY", "tmp:0:8", ["const:cf0:8"]]
+ 008a6118 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6118 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6118 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ba30d8ce8b21a86bffd86d96d243b39b"></a>

### [`008a60d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a60d4.md) → [`008a612c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a612c.md) FUN_008a612c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a61c0",
      "incomplete_value": true,
      "site": "008a61d4",
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
                "const:507:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6168",
      "incomplete_value": true,
      "site": "008a617c",
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
                "const:554:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a614c",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a60f4",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "008a61b0",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a6158",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "008a614c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a618c",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "008a61b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "008a614c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a618c",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "008a61b0",
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
- 008a60f4 ["INT_ADD", "register:40f0:8", ["const:8a60f4:8", "const:4:8"]]
- 008a60f4 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a614c ["INT_ADD", "register:40f0:8", ["const:8a614c:8", "const:4:8"]]
+ 008a614c ["CALL", null, ["ram:48cd38:8"]]
- 008a6158 ["INT_ADD", "register:40f0:8", ["const:8a6158:8", "const:4:8"]]
- 008a6158 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a61b0 ["INT_ADD", "register:40f0:8", ["const:8a61b0:8", "const:4:8"]]
+ 008a61b0 ["CALL", null, ["ram:48cd38:8"]]
- 008a60f8 ["INT_ADD", "register:40f0:8", ["const:8a60f8:8", "const:4:8"]]
- 008a60f8 ["CALL", null, ["callee:0048e820:8"]]
+ 008a6150 ["INT_ADD", "register:40f0:8", ["const:8a6150:8", "const:4:8"]]
+ 008a6150 ["CALL", null, ["callee:0048e820:8"]]
~~~


<a id="compare-c7d4e5b18ab915998d07d6f63235384c"></a>

### [`008a6234`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6234.md) → [`008a628c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a628c.md) FUN_008a628c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a62a0",
      "incomplete_value": true,
      "site": "008a62a4",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6248",
      "incomplete_value": true,
      "site": "008a624c",
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
            "const:ca0:8"
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
      "008a62a4",
      "DATA",
      [
        "storage",
        "00c82ca0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a62a4",
      "DATA",
      [
        "storage",
        "00c82d70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6240 ["INT_ADD", "register:40f0:8", ["const:8a6240:8", "const:4:8"]]
- 008a6240 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a6298 ["INT_ADD", "register:40f0:8", ["const:8a6298:8", "const:4:8"]]
+ 008a6298 ["CALL", null, ["callee:00c57f60:8"]]
- 008a6248 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 008a6248 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6248 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6248 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a62a0 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 008a62a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a62a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a62a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-786727c669509e6a6cf1b3a2e70cc316"></a>

### [`008a6258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6258.md) → [`008a62b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a62b0.md) FUN_008a62b0

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
      "definition_site": "008a62b4",
      "incomplete_value": false,
      "site": "008a62b8",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a625c",
      "incomplete_value": false,
      "site": "008a6260",
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
            "const:ca0:8"
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
      "008a62b8",
      "DATA",
      [
        "storage",
        "00c82ca0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a62b8",
      "DATA",
      [
        "storage",
        "00c82d70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a625c ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 008a625c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a625c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a625c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a62b4 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 008a62b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a62b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a62b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b7459c8d66b20c5b488c906d2f68e62c"></a>

### [`008a6270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6270.md) → [`008a62c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a62c8.md) FUN_008a62c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`0054075c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/0054075c.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.85% / 新版 94.85%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a62f4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a629c",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "008a632c",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a62d4",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "008a62f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a632c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a636c",
      "PARAM",
      [
        "storage",
        "002b00e9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a62f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a632c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a636c",
      "PARAM",
      [
        "storage",
        "002b008d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a629c ["INT_ADD", "register:40f0:8", ["const:8a629c:8", "const:4:8"]]
- 008a629c ["CALL", null, ["ram:48ccf8:8"]]
+ 008a62f4 ["INT_ADD", "register:40f0:8", ["const:8a62f4:8", "const:4:8"]]
+ 008a62f4 ["CALL", null, ["ram:48cd38:8"]]
- 008a62d4 ["INT_ADD", "register:40f0:8", ["const:8a62d4:8", "const:4:8"]]
- 008a62d4 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a632c ["INT_ADD", "register:40f0:8", ["const:8a632c:8", "const:4:8"]]
+ 008a632c ["CALL", null, ["ram:48cd38:8"]]
- 008a62a0 ["INT_ADD", "register:40f0:8", ["const:8a62a0:8", "const:4:8"]]
- 008a62a0 ["CALL", null, ["callee:0048e820:8"]]
+ 008a62f8 ["INT_ADD", "register:40f0:8", ["const:8a62f8:8", "const:4:8"]]
+ 008a62f8 ["CALL", null, ["callee:0048e820:8"]]
~~~


<a id="compare-d03dcfeadaa3668b1a1a6380987c5ba3"></a>

### [`008a6478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6478.md) → [`008a64d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a64d0.md) FUN_008a64d0

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
      "definition_site": "008a64e4",
      "incomplete_value": false,
      "site": "008a64e8",
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
            "const:df0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a648c",
      "incomplete_value": false,
      "site": "008a6490",
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
            "const:d20:8"
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
      "008a64e8",
      "DATA",
      [
        "storage",
        "00c82d20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a64e8",
      "DATA",
      [
        "storage",
        "00c82df0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6484 ["INT_ADD", "register:40f0:8", ["const:8a6484:8", "const:4:8"]]
- 008a6484 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a64dc ["INT_ADD", "register:40f0:8", ["const:8a64dc:8", "const:4:8"]]
+ 008a64dc ["CALL", null, ["callee:00c57f60:8"]]
- 008a648c ["COPY", "tmp:0:8", ["const:d20:8"]]
- 008a648c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a648c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a648c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a64e4 ["COPY", "tmp:0:8", ["const:df0:8"]]
+ 008a64e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a64e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a64e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a31542eed8753447fb69bdf02fb13c4c"></a>

### [`008a649c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a649c.md) → [`008a64f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a64f4.md) FUN_008a64f4

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
      "definition_site": "008a64f8",
      "incomplete_value": false,
      "site": "008a64fc",
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
            "const:df0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a64a0",
      "incomplete_value": false,
      "site": "008a64a4",
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
            "const:d20:8"
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
      "008a64fc",
      "DATA",
      [
        "storage",
        "00c82d20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a64fc",
      "DATA",
      [
        "storage",
        "00c82df0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a64a0 ["COPY", "tmp:0:8", ["const:d20:8"]]
- 008a64a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a64a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a64a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a64f8 ["COPY", "tmp:0:8", ["const:df0:8"]]
+ 008a64f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a64f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a64f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1acf740be9db8a12e3500dd100761ac3"></a>

### [`008a64b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a64b4.md) → [`008a650c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a650c.md) FUN_008a650c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 91.49% / 新版 91.49%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a6528",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a64d0",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "008a6530",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a64d8",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "008a6528",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a6530",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a6540",
      "READ",
      [
        "storage",
        "002a2554",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a6528",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a6530",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a6540",
      "READ",
      [
        "storage",
        "002a2507",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a64d0 ["INT_ADD", "register:40f0:8", ["const:8a64d0:8", "const:4:8"]]
- 008a64d0 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a6528 ["INT_ADD", "register:40f0:8", ["const:8a6528:8", "const:4:8"]]
+ 008a6528 ["CALL", null, ["ram:48cd38:8"]]
- 008a64d8 ["INT_ADD", "register:40f0:8", ["const:8a64d8:8", "const:4:8"]]
- 008a64d8 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a6530 ["INT_ADD", "register:40f0:8", ["const:8a6530:8", "const:4:8"]]
+ 008a6530 ["CALL", null, ["ram:48cd38:8"]]
- 008a6528 ["INT_ADD", "register:40f0:8", ["const:8a6528:8", "const:4:8"]]
- 008a6528 ["CALL", null, ["callee:00c57f80:8"]]
+ 008a6580 ["INT_ADD", "register:40f0:8", ["const:8a6580:8", "const:4:8"]]
+ 008a6580 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-0496ed5ca99ca7e853d1ceef8a4bfb82"></a>

### [`008a65e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a65e0.md) → [`008a6638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6638.md) FUN_008a6638

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
      "definition_site": "008a664c",
      "incomplete_value": false,
      "site": "008a6650",
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
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a65f4",
      "incomplete_value": false,
      "site": "008a65f8",
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
            "const:da0:8"
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
      "008a6650",
      "DATA",
      [
        "storage",
        "00c82da0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6650",
      "DATA",
      [
        "storage",
        "00c82e70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a65ec ["INT_ADD", "register:40f0:8", ["const:8a65ec:8", "const:4:8"]]
- 008a65ec ["CALL", null, ["callee:00c57f60:8"]]
+ 008a6644 ["INT_ADD", "register:40f0:8", ["const:8a6644:8", "const:4:8"]]
+ 008a6644 ["CALL", null, ["callee:00c57f60:8"]]
- 008a65f4 ["COPY", "tmp:0:8", ["const:da0:8"]]
- 008a65f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a65f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a65f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a664c ["COPY", "tmp:0:8", ["const:e70:8"]]
+ 008a664c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a664c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a664c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f767c33abacb5d3498af9dbd8e4d58c3"></a>

### [`008a6604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6604.md) → [`008a665c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a665c.md) FUN_008a665c

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
      "definition_site": "008a6660",
      "incomplete_value": false,
      "site": "008a6664",
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
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6608",
      "incomplete_value": false,
      "site": "008a660c",
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
            "const:da0:8"
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
      "008a6664",
      "DATA",
      [
        "storage",
        "00c82da0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6664",
      "DATA",
      [
        "storage",
        "00c82e70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6608 ["COPY", "tmp:0:8", ["const:da0:8"]]
- 008a6608 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6608 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6608 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6660 ["COPY", "tmp:0:8", ["const:e70:8"]]
+ 008a6660 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6660 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6660 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c7883323ac26e81d419eae8cb809905a"></a>

### [`008a661c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a661c.md) → [`008a6674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6674.md) FUN_008a6674

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`0053f018`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0053f/0053f018.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`0053f058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f058.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.58% / 新版 89.58%

優先判定に残った影響 `call_target` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a66e8",
      "incomplete_value": true,
      "site": "008a66f8",
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
                "const:2b5000:8"
              ],
              [
                "leaf",
                "const:4b5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6690",
      "incomplete_value": true,
      "site": "008a66a0",
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
                "const:2b5000:8"
              ],
              [
                "leaf",
                "const:484:8"
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
      "definition_site": "008a66ec",
      "incomplete_value": true,
      "site": "008a66fc",
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
                "const:c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6694",
      "incomplete_value": true,
      "site": "008a66a4",
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
                "const:c:8"
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
      "definition_site": "008a66f0",
      "incomplete_value": true,
      "site": "008a6700",
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
                "const:2d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6698",
      "incomplete_value": true,
      "site": "008a66a8",
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
                "const:290:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008a6698",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a66cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a66e8",
      "READ",
      [
        "storage",
        "002b5484",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a6698",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a66cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a66e8",
      "READ",
      [
        "storage",
        "002b54b5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6640 ["INT_ADD", "register:40f0:8", ["const:8a6640:8", "const:4:8"]]
- 008a6640 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a6698 ["INT_ADD", "register:40f0:8", ["const:8a6698:8", "const:4:8"]]
+ 008a6698 ["CALL", null, ["ram:48cd38:8"]]
- 008a6674 ["INT_ADD", "register:40f0:8", ["const:8a6674:8", "const:4:8"]]
- 008a6674 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a66cc ["INT_ADD", "register:40f0:8", ["const:8a66cc:8", "const:4:8"]]
+ 008a66cc ["CALL", null, ["ram:48cd38:8"]]
- 008a6698 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:290:8"]]
- 008a6698 ["LOAD", "register:5040:16", ["const:1b1:8", "tmp:0:8"]]
- 008a6698 ["COPY", "register:5050:8", ["const:0:8"]]
- 008a6698 ["COPY", "register:5058:8", ["const:0:8"]]
+ 008a66f0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:2d0:8"]]
+ 008a66f0 ["LOAD", "register:5040:16", ["const:1b1:8", "tmp:0:8"]]
+ 008a66f0 ["COPY", "register:5050:8", ["const:0:8"]]
+ 008a66f0 ["COPY", "register:5058:8", ["const:0:8"]]
~~~


<a id="compare-1a0f2f785358f14f99089486fff10a35"></a>

### [`008a6820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6820.md) → [`008a6878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6878.md) FUN_008a6878

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
      "definition_site": "008a688c",
      "incomplete_value": false,
      "site": "008a6890",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6834",
      "incomplete_value": false,
      "site": "008a6838",
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
            "const:e20:8"
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
      "008a6890",
      "DATA",
      [
        "storage",
        "00c82e20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6890",
      "DATA",
      [
        "storage",
        "00c82ef0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a682c ["INT_ADD", "register:40f0:8", ["const:8a682c:8", "const:4:8"]]
- 008a682c ["CALL", null, ["callee:00c57f60:8"]]
+ 008a6884 ["INT_ADD", "register:40f0:8", ["const:8a6884:8", "const:4:8"]]
+ 008a6884 ["CALL", null, ["callee:00c57f60:8"]]
- 008a6834 ["COPY", "tmp:0:8", ["const:e20:8"]]
- 008a6834 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6834 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6834 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a688c ["COPY", "tmp:0:8", ["const:ef0:8"]]
+ 008a688c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a688c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a688c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ca9d4d586c4ac584077c75f18d39b0fe"></a>

### [`008a685c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a685c.md) → [`008a68b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a68b4.md) FUN_008a68b4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.36% / 新版 89.36%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a68e8",
      "incomplete_value": true,
      "site": "008a68fc",
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
                "const:507:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6890",
      "incomplete_value": true,
      "site": "008a68a4",
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
                "const:554:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a68d0",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a6878",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "008a68d8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a6880",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "008a68d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a68d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a68e8",
      "READ",
      [
        "storage",
        "002a2554",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a68d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a68d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a68e8",
      "READ",
      [
        "storage",
        "002a2507",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6878 ["INT_ADD", "register:40f0:8", ["const:8a6878:8", "const:4:8"]]
- 008a6878 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a68d0 ["INT_ADD", "register:40f0:8", ["const:8a68d0:8", "const:4:8"]]
+ 008a68d0 ["CALL", null, ["ram:48cd38:8"]]
- 008a6880 ["INT_ADD", "register:40f0:8", ["const:8a6880:8", "const:4:8"]]
- 008a6880 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a68d8 ["INT_ADD", "register:40f0:8", ["const:8a68d8:8", "const:4:8"]]
+ 008a68d8 ["CALL", null, ["ram:48cd38:8"]]
- 008a68d0 ["INT_ADD", "register:40f0:8", ["const:8a68d0:8", "const:4:8"]]
- 008a68d0 ["CALL", null, ["callee:00c57f80:8"]]
+ 008a6928 ["INT_ADD", "register:40f0:8", ["const:8a6928:8", "const:4:8"]]
+ 008a6928 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-bf99271a693e3cc61e836359cc7d9e6c"></a>

### [`008a6988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6988.md) → [`008a69e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a69e0.md) FUN_008a69e0

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
      "definition_site": "008a69f4",
      "incomplete_value": false,
      "site": "008a69f8",
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
            "const:f70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a699c",
      "incomplete_value": false,
      "site": "008a69a0",
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
            "const:ea0:8"
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
      "008a69f8",
      "DATA",
      [
        "storage",
        "00c82ea0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a69f8",
      "DATA",
      [
        "storage",
        "00c82f70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6994 ["INT_ADD", "register:40f0:8", ["const:8a6994:8", "const:4:8"]]
- 008a6994 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a69ec ["INT_ADD", "register:40f0:8", ["const:8a69ec:8", "const:4:8"]]
+ 008a69ec ["CALL", null, ["callee:00c57f60:8"]]
- 008a699c ["COPY", "tmp:0:8", ["const:ea0:8"]]
- 008a699c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a699c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a699c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a69f4 ["COPY", "tmp:0:8", ["const:f70:8"]]
+ 008a69f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a69f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a69f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7aa52249e6731c3de489bf415291082f"></a>

### [`008a69ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a69ac.md) → [`008a6a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6a04.md) FUN_008a6a04

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
      "definition_site": "008a6a08",
      "incomplete_value": false,
      "site": "008a6a0c",
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
            "const:f70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a69b0",
      "incomplete_value": false,
      "site": "008a69b4",
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
            "const:ea0:8"
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
      "008a6a0c",
      "DATA",
      [
        "storage",
        "00c82ea0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6a0c",
      "DATA",
      [
        "storage",
        "00c82f70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a69b0 ["COPY", "tmp:0:8", ["const:ea0:8"]]
- 008a69b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a69b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a69b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6a08 ["COPY", "tmp:0:8", ["const:f70:8"]]
+ 008a6a08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6a08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6a08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3653eefe6ce58c87aabd03eff964336a"></a>

### [`008a69c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a69c4.md) → [`008a6a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6a1c.md) FUN_008a6a1c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_target` 2件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a6ab8",
      "incomplete_value": true,
      "site": "008a6ac8",
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
                "const:470:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6a60",
      "incomplete_value": true,
      "site": "008a6a70",
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
                "const:430:8"
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
      "definition_site": "008a6b28",
      "incomplete_value": true,
      "site": "008a6b38",
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
    "old": {
      "definition_site": "008a6ad0",
      "incomplete_value": true,
      "site": "008a6ae0",
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
      "definition_site": "008a6b24",
      "incomplete_value": true,
      "site": "008a6b3c",
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
                "const:2bd000:8"
              ],
              [
                "leaf",
                "const:fae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6acc",
      "incomplete_value": true,
      "site": "008a6ae4",
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
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:2:8"
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
      "008a6a8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a6a94",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a6ab0",
      "READ",
      [
        "storage",
        "002bf33a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a6a8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a6a94",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a6ab0",
      "READ",
      [
        "storage",
        "002bf2e6",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6a18 ["INT_ADD", "register:40f0:8", ["const:8a6a18:8", "const:4:8"]]
- 008a6a18 ["CALL", null, ["callee:0043bb60:8"]]
+ 008a6a70 ["INT_ADD", "register:40f0:8", ["const:8a6a70:8", "const:4:8"]]
+ 008a6a70 ["CALL", null, ["callee:0043bb60:8"]]
- 008a6a34 ["INT_ADD", "register:40f0:8", ["const:8a6a34:8", "const:4:8"]]
- 008a6a34 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a6a8c ["INT_ADD", "register:40f0:8", ["const:8a6a8c:8", "const:4:8"]]
+ 008a6a8c ["CALL", null, ["ram:48cd38:8"]]
- 008a6a3c ["INT_ADD", "register:40f0:8", ["const:8a6a3c:8", "const:4:8"]]
- 008a6a3c ["CALL", null, ["ram:48ccf8:8"]]
+ 008a6a94 ["INT_ADD", "register:40f0:8", ["const:8a6a94:8", "const:4:8"]]
+ 008a6a94 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-f596de9e82b5107c57fa4fb41075a7d1"></a>

### [`008a6bf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6bf0.md) → [`008a6c48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6c48.md) FUN_008a6c48

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
      "definition_site": "008a6c5c",
      "incomplete_value": false,
      "site": "008a6c60",
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
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6c04",
      "incomplete_value": false,
      "site": "008a6c08",
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
            "const:f20:8"
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
      "008a6c60",
      "DATA",
      [
        "storage",
        "00c82f20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6c60",
      "DATA",
      [
        "storage",
        "00c82ff0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6bfc ["INT_ADD", "register:40f0:8", ["const:8a6bfc:8", "const:4:8"]]
- 008a6bfc ["CALL", null, ["callee:00c57f60:8"]]
+ 008a6c54 ["INT_ADD", "register:40f0:8", ["const:8a6c54:8", "const:4:8"]]
+ 008a6c54 ["CALL", null, ["callee:00c57f60:8"]]
- 008a6c04 ["COPY", "tmp:0:8", ["const:f20:8"]]
- 008a6c04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6c04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6c04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6c5c ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 008a6c5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6c5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6c5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e87151209f5d9c69f82d22bc1068b4ee"></a>

### [`008a6c14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6c14.md) → [`008a6c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6c6c.md) FUN_008a6c6c

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
      "definition_site": "008a6c70",
      "incomplete_value": false,
      "site": "008a6c74",
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
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6c18",
      "incomplete_value": false,
      "site": "008a6c1c",
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
            "const:f20:8"
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
      "008a6c74",
      "DATA",
      [
        "storage",
        "00c82f20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6c74",
      "DATA",
      [
        "storage",
        "00c82ff0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6c18 ["COPY", "tmp:0:8", ["const:f20:8"]]
- 008a6c18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6c18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6c18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6c70 ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 008a6c70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6c70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6c70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ad68c18623924086298017772eb4b7f2"></a>

### [`008a6c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6c2c.md) → [`008a6c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6c84.md) FUN_008a6c84

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.64% / 新版 88.64%

優先判定に残った影響 `call_target` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a6d0c",
      "incomplete_value": true,
      "site": "008a6d1c",
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
                "register:4040:8"
              ],
              [
                "leaf",
                "const:fae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6cb4",
      "incomplete_value": true,
      "site": "008a6cc4",
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
                "register:4040:8"
              ],
              [
                "leaf",
                "const:2:8"
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
      "definition_site": "008a6d0c",
      "incomplete_value": true,
      "site": "008a6d1c",
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
      "definition_site": "008a6cb4",
      "incomplete_value": true,
      "site": "008a6cc4",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a6d88",
      "incomplete_value": true,
      "site": "008a6d9c",
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
                "const:507:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6d30",
      "incomplete_value": true,
      "site": "008a6d44",
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
                "const:554:8"
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
      "008a6ca4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a6d00",
      "READ",
      [
        "storage",
        "002c32a0",
        null,
        null
      ]
    ],
    [
      "008a6d0c",
      "READ",
      [
        "storage",
        "002be002",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a6ca4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a6d00",
      "READ",
      [
        "storage",
        "002c32e0",
        null,
        null
      ]
    ],
    [
      "008a6d0c",
      "READ",
      [
        "storage",
        "002bdfae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6c4c ["INT_ADD", "register:40f0:8", ["const:8a6c4c:8", "const:4:8"]]
- 008a6c4c ["CALL", null, ["ram:48ccf8:8"]]
+ 008a6ca4 ["INT_ADD", "register:40f0:8", ["const:8a6ca4:8", "const:4:8"]]
+ 008a6ca4 ["CALL", null, ["ram:48cd38:8"]]
- 008a6d20 ["INT_ADD", "register:40f0:8", ["const:8a6d20:8", "const:4:8"]]
- 008a6d20 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a6d78 ["INT_ADD", "register:40f0:8", ["const:8a6d78:8", "const:4:8"]]
+ 008a6d78 ["CALL", null, ["ram:48cd38:8"]]
- 008a6c50 ["INT_ADD", "register:40f0:8", ["const:8a6c50:8", "const:4:8"]]
- 008a6c50 ["CALL", null, ["callee:0048e820:8"]]
+ 008a6ca8 ["INT_ADD", "register:40f0:8", ["const:8a6ca8:8", "const:4:8"]]
+ 008a6ca8 ["CALL", null, ["callee:0048e820:8"]]
~~~


<a id="compare-b2cdb3aca78538e4af08d142019322b7"></a>

### [`008a6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6e10.md) → [`008a6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6e68.md) FUN_008a6e68

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
      "definition_site": "008a6e7c",
      "incomplete_value": false,
      "site": "008a6e80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6e24",
      "incomplete_value": false,
      "site": "008a6e28",
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
            "const:fa0:8"
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
      "008a6e80",
      "DATA",
      [
        "storage",
        "00c82fa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6e80",
      "DATA",
      [
        "storage",
        "00c83070",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6e1c ["INT_ADD", "register:40f0:8", ["const:8a6e1c:8", "const:4:8"]]
- 008a6e1c ["CALL", null, ["callee:00c57f60:8"]]
+ 008a6e74 ["INT_ADD", "register:40f0:8", ["const:8a6e74:8", "const:4:8"]]
+ 008a6e74 ["CALL", null, ["callee:00c57f60:8"]]
- 008a6e20 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a6e78 ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a6e24 ["COPY", "tmp:0:8", ["const:fa0:8"]]
- 008a6e24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6e24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6e24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6e7c ["COPY", "tmp:0:8", ["const:70:8"]]
+ 008a6e7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6e7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6e7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2c5dadfba3355e315a7a1808d608d156"></a>

### [`008a6e34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6e34.md) → [`008a6e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6e8c.md) FUN_008a6e8c

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
      "definition_site": "008a6e90",
      "incomplete_value": false,
      "site": "008a6e94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a6e38",
      "incomplete_value": false,
      "site": "008a6e3c",
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
            "const:fa0:8"
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
      "008a6e94",
      "DATA",
      [
        "storage",
        "00c82fa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a6e94",
      "DATA",
      [
        "storage",
        "00c83070",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6e34 ["COPY", "register:4040:8", ["const:c82000:8"]]
+ 008a6e8c ["COPY", "register:4040:8", ["const:c83000:8"]]
- 008a6e38 ["COPY", "tmp:0:8", ["const:fa0:8"]]
- 008a6e38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a6e38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a6e38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a6e90 ["COPY", "tmp:0:8", ["const:70:8"]]
+ 008a6e90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6e90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a6e90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2ebc9e1b40ae467c839f241f2be3936c"></a>

### [`008a6e4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6e4c.md) → [`008a6ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6ea4.md) FUN_008a6ea4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0044f898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f898.md) [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`00452c54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00452/00452c54.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044f8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f8d8.md) [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00452c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452c94.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.35% / 新版 98.35%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a7020",
      "value": [
        "leaf",
        "ram:768c40:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a6fc8",
      "value": [
        "leaf",
        "ram:768be8:8"
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
      "site": "008a703c",
      "value": [
        "leaf",
        "ram:7643dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a6fe4",
      "value": [
        "leaf",
        "ram:764384:8"
      ]
    },
    "ordinal": 17,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008a7020",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768be8"
      ]
    ],
    [
      "008a703c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ],
    [
      "008a7058",
      "DATA",
      [
        "storage",
        "00c83010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a7020",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768c40"
      ]
    ],
    [
      "008a703c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "008a7058",
      "DATA",
      [
        "storage",
        "00c830e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a6fc8 ["INT_ADD", "register:40f0:8", ["const:8a6fc8:8", "const:4:8"]]
- 008a6fc8 ["CALL", null, ["ram:768be8:8"]]
+ 008a7020 ["INT_ADD", "register:40f0:8", ["const:8a7020:8", "const:4:8"]]
+ 008a7020 ["CALL", null, ["ram:768c40:8"]]
- 008a6fe4 ["INT_ADD", "register:40f0:8", ["const:8a6fe4:8", "const:4:8"]]
- 008a6fe4 ["CALL", null, ["ram:764384:8"]]
+ 008a703c ["INT_ADD", "register:40f0:8", ["const:8a703c:8", "const:4:8"]]
+ 008a703c ["CALL", null, ["ram:7643dc:8"]]
- 008a6e74 ["INT_ADD", "register:40f0:8", ["const:8a6e74:8", "const:4:8"]]
- 008a6e74 ["CALL", null, ["callee:0044f8d8:8"]]
+ 008a6ecc ["INT_ADD", "register:40f0:8", ["const:8a6ecc:8", "const:4:8"]]
+ 008a6ecc ["CALL", null, ["callee:0044f8d8:8"]]
~~~


<a id="compare-2348ceaf1f2426d2c7a881b977a99455"></a>

### [`008a726c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a726c.md) → [`008a72c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a72c4.md) FUN_008a72c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a72d8",
      "incomplete_value": true,
      "site": "008a72dc",
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
            "const:e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7280",
      "incomplete_value": true,
      "site": "008a7284",
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
            "const:10:8"
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
      "008a72dc",
      "DATA",
      [
        "storage",
        "00c83010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a72dc",
      "DATA",
      [
        "storage",
        "00c830e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7278 ["INT_ADD", "register:40f0:8", ["const:8a7278:8", "const:4:8"]]
- 008a7278 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a72d0 ["INT_ADD", "register:40f0:8", ["const:8a72d0:8", "const:4:8"]]
+ 008a72d0 ["CALL", null, ["callee:00c57f60:8"]]
- 008a7280 ["COPY", "tmp:0:8", ["const:10:8"]]
- 008a7280 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7280 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7280 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a72d8 ["COPY", "tmp:0:8", ["const:e0:8"]]
+ 008a72d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a72d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a72d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-60eba9ac011574aecfa6c654d7bfffcf"></a>

### [`008a7290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7290.md) → [`008a72e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a72e8.md) FUN_008a72e8

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
      "definition_site": "008a72ec",
      "incomplete_value": false,
      "site": "008a72f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7294",
      "incomplete_value": false,
      "site": "008a7298",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:10:8"
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
      "008a72f0",
      "DATA",
      [
        "storage",
        "00c83010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a72f0",
      "DATA",
      [
        "storage",
        "00c830e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7294 ["COPY", "tmp:0:8", ["const:10:8"]]
- 008a7294 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7294 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7294 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a72ec ["COPY", "tmp:0:8", ["const:e0:8"]]
+ 008a72ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a72ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a72ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-399ac3aca3c0c7d00ba9178a7f080b6d"></a>

### [`008a72a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a72a8.md) → [`008a7300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7300.md) FUN_008a7300

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`0044f898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f898.md) [`005b2c90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b2/005b2c90.md) [`005b2ee8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b2/005b2ee8.md) [`005b494c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b4/005b494c.md) [`00768e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/00768e90.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0044f8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f8d8.md) [`005b2cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2cd0.md) [`005b2f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2f28.md) [`005b498c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b498c.md) [`00768ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768ee8.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.90% / 新版 93.90%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008a7348",
      "incomplete_value": false,
      "site": "008a7350",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a72f0",
      "incomplete_value": false,
      "site": "008a72f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:80:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008a73cc",
      "incomplete_value": false,
      "site": "008a73d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7374",
      "incomplete_value": false,
      "site": "008a737c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:100:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a7338",
      "value": [
        "leaf",
        "ram:768ee8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a72e0",
      "value": [
        "leaf",
        "ram:768e90:8"
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
      "008a7338",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768e90"
      ]
    ],
    [
      "008a7350",
      "DATA",
      [
        "storage",
        "00c83080",
        null,
        "undefined *"
      ]
    ],
    [
      "008a73c0",
      "READ",
      [
        "storage",
        "00c830a0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008a7338",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768ee8"
      ]
    ],
    [
      "008a7350",
      "DATA",
      [
        "storage",
        "00c83150",
        null,
        "undefined *"
      ]
    ],
    [
      "008a73c0",
      "READ",
      [
        "storage",
        "00c83170",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a72e0 ["INT_ADD", "register:40f0:8", ["const:8a72e0:8", "const:4:8"]]
- 008a72e0 ["CALL", null, ["ram:768e90:8"]]
+ 008a7338 ["INT_ADD", "register:40f0:8", ["const:8a7338:8", "const:4:8"]]
+ 008a7338 ["CALL", null, ["ram:768ee8:8"]]
- 008a72d8 ["INT_ADD", "register:40f0:8", ["const:8a72d8:8", "const:4:8"]]
- 008a72d8 ["CALL", null, ["callee:00851550:8"]]
+ 008a7330 ["INT_ADD", "register:40f0:8", ["const:8a7330:8", "const:4:8"]]
+ 008a7330 ["CALL", null, ["callee:00851550:8"]]
- 008a72e4 ["INT_ADD", "register:40f0:8", ["const:8a72e4:8", "const:4:8"]]
- 008a72e4 ["CALL", null, ["callee:00851550:8"]]
+ 008a733c ["INT_ADD", "register:40f0:8", ["const:8a733c:8", "const:4:8"]]
+ 008a733c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-cc977577177cd363c54f0cb41a92f9d4"></a>

### [`008a746c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a746c.md) → [`008a74c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a74c4.md) FUN_008a74c4

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
      "definition_site": "008a74d8",
      "incomplete_value": false,
      "site": "008a74dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7480",
      "incomplete_value": false,
      "site": "008a7484",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:80:8"
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
      "008a74dc",
      "DATA",
      [
        "storage",
        "00c83080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a74dc",
      "DATA",
      [
        "storage",
        "00c83150",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7478 ["INT_ADD", "register:40f0:8", ["const:8a7478:8", "const:4:8"]]
- 008a7478 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a74d0 ["INT_ADD", "register:40f0:8", ["const:8a74d0:8", "const:4:8"]]
+ 008a74d0 ["CALL", null, ["callee:00c57f60:8"]]
- 008a7480 ["COPY", "tmp:0:8", ["const:80:8"]]
- 008a7480 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7480 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7480 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a74d8 ["COPY", "tmp:0:8", ["const:150:8"]]
+ 008a74d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a74d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a74d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bb5110144f822ac68d2b7024fee0082c"></a>

### [`008a7490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7490.md) → [`008a74e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a74e8.md) FUN_008a74e8

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
      "definition_site": "008a74ec",
      "incomplete_value": true,
      "site": "008a74f0",
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
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7494",
      "incomplete_value": true,
      "site": "008a7498",
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
            "const:80:8"
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
      "008a74f0",
      "DATA",
      [
        "storage",
        "00c83080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a74f0",
      "DATA",
      [
        "storage",
        "00c83150",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7494 ["COPY", "tmp:0:8", ["const:80:8"]]
- 008a7494 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7494 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7494 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a74ec ["COPY", "tmp:0:8", ["const:150:8"]]
+ 008a74ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a74ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a74ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cb1213f8d3e698007d704031eb2c7102"></a>

### [`008a750c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a750c.md) → [`008a7564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7564.md) FUN_008a7564

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
      "definition_site": "008a7578",
      "incomplete_value": false,
      "site": "008a757c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7520",
      "incomplete_value": false,
      "site": "008a7524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:100:8"
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
      "008a757c",
      "DATA",
      [
        "storage",
        "00c83100",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a757c",
      "DATA",
      [
        "storage",
        "00c831d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7518 ["INT_ADD", "register:40f0:8", ["const:8a7518:8", "const:4:8"]]
- 008a7518 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a7570 ["INT_ADD", "register:40f0:8", ["const:8a7570:8", "const:4:8"]]
+ 008a7570 ["CALL", null, ["callee:00c57f60:8"]]
- 008a7520 ["COPY", "tmp:0:8", ["const:100:8"]]
- 008a7520 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7520 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7520 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a7578 ["COPY", "tmp:0:8", ["const:1d0:8"]]
+ 008a7578 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7578 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7578 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5b1b2e1a2cb026535ffc8984e54722e2"></a>

### [`008a7594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7594.md) → [`008a75ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a75ec.md) FUN_008a75ec

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
      "definition_site": "008a7600",
      "incomplete_value": false,
      "site": "008a7604",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:270:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a75a8",
      "incomplete_value": false,
      "site": "008a75ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
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
      "008a7604",
      "DATA",
      [
        "storage",
        "00c831a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a7604",
      "DATA",
      [
        "storage",
        "00c83270",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a75a0 ["INT_ADD", "register:40f0:8", ["const:8a75a0:8", "const:4:8"]]
- 008a75a0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a75f8 ["INT_ADD", "register:40f0:8", ["const:8a75f8:8", "const:4:8"]]
+ 008a75f8 ["CALL", null, ["callee:00c57f60:8"]]
- 008a75a8 ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 008a75a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a75a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a75a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a7600 ["COPY", "tmp:0:8", ["const:270:8"]]
+ 008a7600 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7600 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7600 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e37f763a6e6174051196545cd6ce1ffc"></a>

### [`008a75b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a75b8.md) → [`008a7610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7610.md) FUN_008a7610

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
      "definition_site": "008a7614",
      "incomplete_value": false,
      "site": "008a7618",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:270:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a75bc",
      "incomplete_value": false,
      "site": "008a75c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
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
      "008a7618",
      "DATA",
      [
        "storage",
        "00c831a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a7618",
      "DATA",
      [
        "storage",
        "00c83270",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a75bc ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 008a75bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a75bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a75bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a7614 ["COPY", "tmp:0:8", ["const:270:8"]]
+ 008a7614 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7614 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7614 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6bf15dfd9df6754b5c35cb07ea0b3276"></a>

### [`008a75d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a75d0.md) → [`008a7628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7628.md) FUN_008a7628

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00865110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865110.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00865168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865168.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 84.75% / 新版 84.75%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a7674",
      "incomplete_value": true,
      "site": "008a7688",
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
    "old": {
      "definition_site": "008a761c",
      "incomplete_value": true,
      "site": "008a7630",
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
                "const:2a0:8"
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
      "definition_site": "008a7680",
      "incomplete_value": true,
      "site": "008a7690",
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
                "const:2bd000:8"
              ],
              [
                "leaf",
                "const:fae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7628",
      "incomplete_value": true,
      "site": "008a7638",
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
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:2:8"
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
      "definition_site": "008a7680",
      "incomplete_value": true,
      "site": "008a7690",
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
      "definition_site": "008a7628",
      "incomplete_value": true,
      "site": "008a7638",
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
      "008a7674",
      "READ",
      [
        "storage",
        "002c32a0",
        null,
        null
      ]
    ],
    [
      "008a7680",
      "READ",
      [
        "storage",
        "002be002",
        null,
        "string"
      ]
    ],
    [
      "008a7680",
      "READ",
      [
        "storage",
        "002be012",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a7674",
      "READ",
      [
        "storage",
        "002c32e0",
        null,
        null
      ]
    ],
    [
      "008a7680",
      "READ",
      [
        "storage",
        "002bdfae",
        null,
        "string"
      ]
    ],
    [
      "008a7680",
      "READ",
      [
        "storage",
        "002bdfbe",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7688 ["INT_ADD", "register:40f0:8", ["const:8a7688:8", "const:4:8"]]
- 008a7688 ["CALL", null, ["callee:00851550:8"]]
+ 008a76e0 ["INT_ADD", "register:40f0:8", ["const:8a76e0:8", "const:4:8"]]
+ 008a76e0 ["CALL", null, ["callee:00851550:8"]]
- 008a75f4 ["INT_ADD", "register:40f0:8", ["const:8a75f4:8", "const:4:8"]]
- 008a75f4 ["CALL", null, ["callee:00851550:8"]]
+ 008a764c ["INT_ADD", "register:40f0:8", ["const:8a764c:8", "const:4:8"]]
+ 008a764c ["CALL", null, ["callee:00851550:8"]]
- 008a760c ["INT_ADD", "register:40f0:8", ["const:8a760c:8", "const:4:8"]]
- 008a760c ["CALL", null, ["callee:00c57f60:8"]]
+ 008a7664 ["INT_ADD", "register:40f0:8", ["const:8a7664:8", "const:4:8"]]
+ 008a7664 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-ceac1154ff1f2eb3c0dc3463b985485d"></a>

### [`008a771c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a771c.md) → [`008a7774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7774.md) FUN_008a7774

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a7788",
      "incomplete_value": true,
      "site": "008a778c",
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
            "const:2f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7730",
      "incomplete_value": true,
      "site": "008a7734",
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
            "const:220:8"
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
      "008a778c",
      "DATA",
      [
        "storage",
        "00c83220",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a778c",
      "DATA",
      [
        "storage",
        "00c832f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7728 ["INT_ADD", "register:40f0:8", ["const:8a7728:8", "const:4:8"]]
- 008a7728 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a7780 ["INT_ADD", "register:40f0:8", ["const:8a7780:8", "const:4:8"]]
+ 008a7780 ["CALL", null, ["callee:00c57f60:8"]]
- 008a7730 ["COPY", "tmp:0:8", ["const:220:8"]]
- 008a7730 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7730 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7730 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a7788 ["COPY", "tmp:0:8", ["const:2f0:8"]]
+ 008a7788 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7788 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7788 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-acee2ac64b6f44ba6c3c4694c8b26c25"></a>

### [`008a7740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7740.md) → [`008a7798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7798.md) FUN_008a7798

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
      "definition_site": "008a779c",
      "incomplete_value": false,
      "site": "008a77a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7744",
      "incomplete_value": false,
      "site": "008a7748",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:220:8"
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
      "008a77a0",
      "DATA",
      [
        "storage",
        "00c83220",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a77a0",
      "DATA",
      [
        "storage",
        "00c832f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7744 ["COPY", "tmp:0:8", ["const:220:8"]]
- 008a7744 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7744 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7744 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a779c ["COPY", "tmp:0:8", ["const:2f0:8"]]
+ 008a779c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a779c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a779c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2e0c35c56c9653451706d54fe1a9fc6a"></a>

### [`008a7758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7758.md) → [`008a77b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a77b0.md) FUN_008a77b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00865110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865110.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00865168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865168.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a77f4",
      "incomplete_value": true,
      "site": "008a780c",
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
                "const:cf0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a779c",
      "incomplete_value": true,
      "site": "008a77b4",
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
                "const:cb0:8"
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
      "definition_site": "008a7800",
      "incomplete_value": true,
      "site": "008a7810",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:e04:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a77a8",
      "incomplete_value": true,
      "site": "008a77b8",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:e60:8"
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
      "definition_site": "008a7800",
      "incomplete_value": true,
      "site": "008a7810",
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
      "definition_site": "008a77a8",
      "incomplete_value": true,
      "site": "008a77b8",
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
      "008a77f4",
      "READ",
      [
        "storage",
        "002c2cb0",
        null,
        null
      ]
    ],
    [
      "008a7800",
      "READ",
      [
        "storage",
        "002a7e60",
        null,
        "string"
      ]
    ],
    [
      "008a7800",
      "READ",
      [
        "storage",
        "002a7e70",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a77f4",
      "READ",
      [
        "storage",
        "002c2cf0",
        null,
        null
      ]
    ],
    [
      "008a7800",
      "READ",
      [
        "storage",
        "002a7e04",
        null,
        "string"
      ]
    ],
    [
      "008a7800",
      "READ",
      [
        "storage",
        "002a7e14",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7778 ["INT_ADD", "register:40f0:8", ["const:8a7778:8", "const:4:8"]]
- 008a7778 ["CALL", null, ["callee:00851550:8"]]
+ 008a77d0 ["INT_ADD", "register:40f0:8", ["const:8a77d0:8", "const:4:8"]]
+ 008a77d0 ["CALL", null, ["callee:00851550:8"]]
- 008a7780 ["INT_ADD", "register:40f0:8", ["const:8a7780:8", "const:4:8"]]
- 008a7780 ["CALL", null, ["callee:00851550:8"]]
+ 008a77d8 ["INT_ADD", "register:40f0:8", ["const:8a77d8:8", "const:4:8"]]
+ 008a77d8 ["CALL", null, ["callee:00851550:8"]]
- 008a778c ["INT_ADD", "register:40f0:8", ["const:8a778c:8", "const:4:8"]]
- 008a778c ["CALL", null, ["callee:00c57f60:8"]]
+ 008a77e4 ["INT_ADD", "register:40f0:8", ["const:8a77e4:8", "const:4:8"]]
+ 008a77e4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-e9dd01a7e89755d58f07f4f7825c5422"></a>

### [`008a7868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7868.md) → [`008a78c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a78c0.md) FUN_008a78c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a78d4",
      "incomplete_value": true,
      "site": "008a78d8",
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
            "const:380:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a787c",
      "incomplete_value": true,
      "site": "008a7880",
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
            "const:2b0:8"
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
      "008a78d8",
      "DATA",
      [
        "storage",
        "00c832b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a78d8",
      "DATA",
      [
        "storage",
        "00c83380",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7874 ["INT_ADD", "register:40f0:8", ["const:8a7874:8", "const:4:8"]]
- 008a7874 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a78cc ["INT_ADD", "register:40f0:8", ["const:8a78cc:8", "const:4:8"]]
+ 008a78cc ["CALL", null, ["callee:00c57f60:8"]]
- 008a787c ["COPY", "tmp:0:8", ["const:2b0:8"]]
- 008a787c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a787c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a787c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a78d4 ["COPY", "tmp:0:8", ["const:380:8"]]
+ 008a78d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a78d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a78d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dc1db09b1fbd1fbed422151a8f1f3da9"></a>

### [`008a788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a788c.md) → [`008a78e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a78e4.md) FUN_008a78e4

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
      "definition_site": "008a78e8",
      "incomplete_value": false,
      "site": "008a78ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:380:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7890",
      "incomplete_value": false,
      "site": "008a7894",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
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
      "008a78ec",
      "DATA",
      [
        "storage",
        "00c832b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a78ec",
      "DATA",
      [
        "storage",
        "00c83380",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7890 ["COPY", "tmp:0:8", ["const:2b0:8"]]
- 008a7890 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7890 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7890 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a78e8 ["COPY", "tmp:0:8", ["const:380:8"]]
+ 008a78e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a78e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a78e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-58460d4fc368becad97389dbf888f77d"></a>

### [`008a78a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a78a4.md) → [`008a78fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a78fc.md) FUN_008a78fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0044ef54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044e/0044ef54.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044ef94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044ef94.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.83% / 新版 90.83%

優先判定に残った影響 `call_target` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a79fc",
      "incomplete_value": true,
      "site": "008a79fc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:a93:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a79a4",
      "incomplete_value": true,
      "site": "008a79a4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:ae7:8"
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
      "definition_site": "008a79f0",
      "incomplete_value": true,
      "site": "008a7a00",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008a7998",
      "incomplete_value": true,
      "site": "008a79a8",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a7920",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a78c8",
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
      "008a7920",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a7974",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a7984",
      "READ",
      [
        "storage",
        "002b232b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a7920",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a7974",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a7984",
      "READ",
      [
        "storage",
        "002b235c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a78c8 ["INT_ADD", "register:40f0:8", ["const:8a78c8:8", "const:4:8"]]
- 008a78c8 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a7920 ["INT_ADD", "register:40f0:8", ["const:8a7920:8", "const:4:8"]]
+ 008a7920 ["CALL", null, ["ram:48cd38:8"]]
- 008a791c ["INT_ADD", "register:40f0:8", ["const:8a791c:8", "const:4:8"]]
- 008a791c ["CALL", null, ["ram:48ccf8:8"]]
+ 008a7974 ["INT_ADD", "register:40f0:8", ["const:8a7974:8", "const:4:8"]]
+ 008a7974 ["CALL", null, ["ram:48cd38:8"]]
- 008a7950 ["INT_ADD", "register:40f0:8", ["const:8a7950:8", "const:4:8"]]
- 008a7950 ["CALL", null, ["callee:0044ef94:8"]]
+ 008a79a8 ["INT_ADD", "register:40f0:8", ["const:8a79a8:8", "const:4:8"]]
+ 008a79a8 ["CALL", null, ["callee:0044ef94:8"]]
~~~


<a id="compare-034cd48571b9c9c57204ff008ac1bcf7"></a>

### [`008a7b24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7b24.md) → [`008a7b7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7b7c.md) FUN_008a7b7c

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
      "definition_site": "008a7b80",
      "incomplete_value": false,
      "site": "008a7b84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:400:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7b28",
      "incomplete_value": false,
      "site": "008a7b2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:330:8"
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
      "008a7b84",
      "DATA",
      [
        "storage",
        "00c83330",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008a7b84",
      "DATA",
      [
        "storage",
        "00c83400",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7b28 ["COPY", "tmp:0:8", ["const:330:8"]]
- 008a7b28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7b28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7b28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008a7b80 ["COPY", "tmp:0:8", ["const:400:8"]]
+ 008a7b80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7b80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008a7b80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3f1ed658d7477aadd4ed6c55398fcb53"></a>

### [`008a7b3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7b3c.md) → [`008a7b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7b94.md) FUN_008a7b94

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0044ef54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044e/0044ef54.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0044ef94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044ef94.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.15% / 新版 93.15%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008a7c58",
      "incomplete_value": true,
      "site": "008a7c70",
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
                "const:2b2000:8"
              ],
              [
                "leaf",
                "const:36f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7c00",
      "incomplete_value": true,
      "site": "008a7c18",
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
                "const:2b2000:8"
              ],
              [
                "leaf",
                "const:33e:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a7bb8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a7b60",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "008a7c48",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008a7bf0",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 7,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008a7bb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008a7c14",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "008a7c48",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "008a7bb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008a7c14",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "008a7c48",
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
- 008a7b60 ["INT_ADD", "register:40f0:8", ["const:8a7b60:8", "const:4:8"]]
- 008a7b60 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a7bb8 ["INT_ADD", "register:40f0:8", ["const:8a7bb8:8", "const:4:8"]]
+ 008a7bb8 ["CALL", null, ["ram:48cd38:8"]]
- 008a7bf0 ["INT_ADD", "register:40f0:8", ["const:8a7bf0:8", "const:4:8"]]
- 008a7bf0 ["CALL", null, ["ram:48ccf8:8"]]
+ 008a7c48 ["INT_ADD", "register:40f0:8", ["const:8a7c48:8", "const:4:8"]]
+ 008a7c48 ["CALL", null, ["ram:48cd38:8"]]
- 008a7b64 ["INT_ADD", "register:40f0:8", ["const:8a7b64:8", "const:4:8"]]
- 008a7b64 ["CALL", null, ["callee:0048e820:8"]]
+ 008a7bbc ["INT_ADD", "register:40f0:8", ["const:8a7bbc:8", "const:4:8"]]
+ 008a7bbc ["CALL", null, ["callee:0048e820:8"]]
~~~


<a id="compare-113f3d47cc16c74d659763ebdf383ee5"></a>

### [`008a7ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7ccc.md) → [`008a7d24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7d24.md) FUN_008a7d24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0089788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00897/0089788c.md) [`008a7ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7ccc.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) [`008a7d24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7d24.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.49% / 新版 98.49%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a7e7c",
      "incomplete_value": false,
      "site": "008a7e84",
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
    "old": {
      "definition_site": "008a7e24",
      "incomplete_value": false,
      "site": "008a7e2c",
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
            "const:f53:8"
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
      "definition_site": "008a7ea0",
      "incomplete_value": false,
      "site": "008a7eac",
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
    "old": {
      "definition_site": "008a7e48",
      "incomplete_value": false,
      "site": "008a7e54",
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
            "const:ee9:8"
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
      "definition_site": "008a7fdc",
      "incomplete_value": false,
      "site": "008a7fe4",
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
    "old": {
      "definition_site": "008a7f84",
      "incomplete_value": false,
      "site": "008a7f8c",
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
            "const:de7:8"
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
      "008a7e7c",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008a7ea0",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008a7fdc",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008a7e7c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008a7ea0",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008a7fdc",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008a7e2c ["INT_ADD", "register:40f0:8", ["const:8a7e2c:8", "const:4:8"]]
- 008a7e2c ["CALL", null, ["callee:00441ed4:8"]]
+ 008a7e84 ["INT_ADD", "register:40f0:8", ["const:8a7e84:8", "const:4:8"]]
+ 008a7e84 ["CALL", null, ["callee:00441ed4:8"]]
- 008a7e54 ["INT_ADD", "register:40f0:8", ["const:8a7e54:8", "const:4:8"]]
- 008a7e54 ["CALL", null, ["callee:00442834:8"]]
+ 008a7eac ["INT_ADD", "register:40f0:8", ["const:8a7eac:8", "const:4:8"]]
+ 008a7eac ["CALL", null, ["callee:00442834:8"]]
- 008a7f8c ["INT_ADD", "register:40f0:8", ["const:8a7f8c:8", "const:4:8"]]
- 008a7f8c ["CALL", null, ["callee:00441ed4:8"]]
+ 008a7fe4 ["INT_ADD", "register:40f0:8", ["const:8a7fe4:8", "const:4:8"]]
+ 008a7fe4 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-84b6a60f87e678e579b4448699c3b492"></a>

### [`008a84d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a8/008a84d8.md) → [`008a8530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8530.md) FUN_008a8530

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`0089788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00897/0089788c.md) [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) [`008a7ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7ccc.md) [`008a84d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a8/008a84d8.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 4件 [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`008a7d24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7d24.md) [`008a8530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8530.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a8680",
      "incomplete_value": false,
      "site": "008a8688",
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
    "old": {
      "definition_site": "008a8628",
      "incomplete_value": false,
      "site": "008a8630",
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
            "const:f53:8"
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
      "definition_site": "008a86a4",
      "incomplete_value": false,
      "site": "008a86b0",
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
    "old": {
      "definition_site": "008a864c",
      "incomplete_value": false,
      "site": "008a8658",
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
            "const:ee9:8"
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
      "definition_site": "008a87dc",
      "incomplete_value": false,
      "site": "008a87e4",
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
    "old": {
      "definition_site": "008a8784",
      "incomplete_value": false,
      "site": "008a878c",
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
            "const:de7:8"
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
      "008a8680",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008a86a4",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008a87dc",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008a8680",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008a86a4",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008a87dc",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008a8630 ["INT_ADD", "register:40f0:8", ["const:8a8630:8", "const:4:8"]]
- 008a8630 ["CALL", null, ["callee:00441ed4:8"]]
+ 008a8688 ["INT_ADD", "register:40f0:8", ["const:8a8688:8", "const:4:8"]]
+ 008a8688 ["CALL", null, ["callee:00441ed4:8"]]
- 008a8658 ["INT_ADD", "register:40f0:8", ["const:8a8658:8", "const:4:8"]]
- 008a8658 ["CALL", null, ["callee:00442834:8"]]
+ 008a86b0 ["INT_ADD", "register:40f0:8", ["const:8a86b0:8", "const:4:8"]]
+ 008a86b0 ["CALL", null, ["callee:00442834:8"]]
- 008a86b0 ["INT_ADD", "register:40f0:8", ["const:8a86b0:8", "const:4:8"]]
- 008a86b0 ["CALL", null, ["callee:00c58130:8"]]
+ 008a8708 ["INT_ADD", "register:40f0:8", ["const:8a8708:8", "const:4:8"]]
+ 008a8708 ["CALL", null, ["callee:00c58130:8"]]
~~~


<a id="compare-2323012a86c01ad2a1de44c5d24cae9e"></a>

### [`008a8e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a8/008a8e08.md) → [`008a8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8e60.md) FUN_008a8e60

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008a8cc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a8/008a8cc0.md) [`008a8e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a8/008a8e08.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008a8d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8d18.md) [`008a8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8e60.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.83% / 新版 98.83%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a8fdc",
      "incomplete_value": false,
      "site": "008a8fe4",
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
    "old": {
      "definition_site": "008a8f84",
      "incomplete_value": false,
      "site": "008a8f8c",
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
            "const:f53:8"
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
      "definition_site": "008a90a4",
      "incomplete_value": false,
      "site": "008a90ac",
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
    "old": {
      "definition_site": "008a904c",
      "incomplete_value": false,
      "site": "008a9054",
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
            "const:de7:8"
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
      "definition_site": "008a90c0",
      "incomplete_value": false,
      "site": "008a90cc",
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
    "old": {
      "definition_site": "008a9068",
      "incomplete_value": false,
      "site": "008a9074",
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
            "const:ee9:8"
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
      "008a8fdc",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008a90a4",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "008a90c0",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008a8fdc",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008a90a4",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "008a90c0",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008a8f8c ["INT_ADD", "register:40f0:8", ["const:8a8f8c:8", "const:4:8"]]
- 008a8f8c ["CALL", null, ["callee:00441ed4:8"]]
+ 008a8fe4 ["INT_ADD", "register:40f0:8", ["const:8a8fe4:8", "const:4:8"]]
+ 008a8fe4 ["CALL", null, ["callee:00441ed4:8"]]
- 008a9054 ["INT_ADD", "register:40f0:8", ["const:8a9054:8", "const:4:8"]]
- 008a9054 ["CALL", null, ["callee:00441ed4:8"]]
+ 008a90ac ["INT_ADD", "register:40f0:8", ["const:8a90ac:8", "const:4:8"]]
+ 008a90ac ["CALL", null, ["callee:00441ed4:8"]]
- 008a9074 ["INT_ADD", "register:40f0:8", ["const:8a9074:8", "const:4:8"]]
- 008a9074 ["CALL", null, ["callee:00442834:8"]]
+ 008a90cc ["INT_ADD", "register:40f0:8", ["const:8a90cc:8", "const:4:8"]]
+ 008a90cc ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-71920d20b84ae7a97bd82af7e432ca0d"></a>

### [`008a987c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a9/008a987c.md) → [`008a98d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a9/008a98d4.md) FUN_008a98d4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008a8e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a8/008a8e08.md) [`008a987c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a9/008a987c.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008a8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8e60.md) [`008a98d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a9/008a98d4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.71% / 新版 98.71%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a9a38",
      "incomplete_value": false,
      "site": "008a9a40",
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
    "old": {
      "definition_site": "008a99e0",
      "incomplete_value": false,
      "site": "008a99e8",
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
            "const:f53:8"
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
      "definition_site": "008a9a5c",
      "incomplete_value": false,
      "site": "008a9a68",
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
    "old": {
      "definition_site": "008a9a04",
      "incomplete_value": false,
      "site": "008a9a10",
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
            "const:ee9:8"
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
      "definition_site": "008a9b98",
      "incomplete_value": false,
      "site": "008a9ba0",
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
    "old": {
      "definition_site": "008a9b40",
      "incomplete_value": false,
      "site": "008a9b48",
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
            "const:de7:8"
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
      "008a9a38",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008a9a5c",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008a9b98",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008a9a38",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008a9a5c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008a9b98",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008a99e8 ["INT_ADD", "register:40f0:8", ["const:8a99e8:8", "const:4:8"]]
- 008a99e8 ["CALL", null, ["callee:00441ed4:8"]]
+ 008a9a40 ["INT_ADD", "register:40f0:8", ["const:8a9a40:8", "const:4:8"]]
+ 008a9a40 ["CALL", null, ["callee:00441ed4:8"]]
- 008a9a10 ["INT_ADD", "register:40f0:8", ["const:8a9a10:8", "const:4:8"]]
- 008a9a10 ["CALL", null, ["callee:00442834:8"]]
+ 008a9a68 ["INT_ADD", "register:40f0:8", ["const:8a9a68:8", "const:4:8"]]
+ 008a9a68 ["CALL", null, ["callee:00442834:8"]]
- 008a9b48 ["INT_ADD", "register:40f0:8", ["const:8a9b48:8", "const:4:8"]]
- 008a9b48 ["CALL", null, ["callee:00441ed4:8"]]
+ 008a9ba0 ["INT_ADD", "register:40f0:8", ["const:8a9ba0:8", "const:4:8"]]
+ 008a9ba0 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-cab5fe2e6501570da281a2337195a03e"></a>

### [`008aa1f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008aa/008aa1f8.md) → [`008aa250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aa250.md) FUN_008aa250

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008a987c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a9/008a987c.md) [`008aa1f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008aa/008aa1f8.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008a98d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a9/008a98d4.md) [`008aa250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aa250.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.68% / 新版 98.68%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008aa3a8",
      "incomplete_value": false,
      "site": "008aa3b0",
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
    "old": {
      "definition_site": "008aa350",
      "incomplete_value": false,
      "site": "008aa358",
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
            "const:f53:8"
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
      "definition_site": "008aa504",
      "incomplete_value": false,
      "site": "008aa50c",
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
    "old": {
      "definition_site": "008aa4ac",
      "incomplete_value": false,
      "site": "008aa4b4",
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
            "const:de7:8"
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
      "definition_site": "008aa51c",
      "incomplete_value": false,
      "site": "008aa528",
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
    "old": {
      "definition_site": "008aa4c4",
      "incomplete_value": false,
      "site": "008aa4d0",
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
            "const:ee9:8"
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
      "008aa3a8",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008aa3cc",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008aa504",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008aa3a8",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008aa3cc",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008aa504",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008aa358 ["INT_ADD", "register:40f0:8", ["const:8aa358:8", "const:4:8"]]
- 008aa358 ["CALL", null, ["callee:00441ed4:8"]]
+ 008aa3b0 ["INT_ADD", "register:40f0:8", ["const:8aa3b0:8", "const:4:8"]]
+ 008aa3b0 ["CALL", null, ["callee:00441ed4:8"]]
- 008aa4b4 ["INT_ADD", "register:40f0:8", ["const:8aa4b4:8", "const:4:8"]]
- 008aa4b4 ["CALL", null, ["callee:00441ed4:8"]]
+ 008aa50c ["INT_ADD", "register:40f0:8", ["const:8aa50c:8", "const:4:8"]]
+ 008aa50c ["CALL", null, ["callee:00441ed4:8"]]
- 008aa4d0 ["INT_ADD", "register:40f0:8", ["const:8aa4d0:8", "const:4:8"]]
- 008aa4d0 ["CALL", null, ["callee:00442834:8"]]
+ 008aa528 ["INT_ADD", "register:40f0:8", ["const:8aa528:8", "const:4:8"]]
+ 008aa528 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-f5d72edc9207861e501f43f9317fd5da"></a>

### [`008aab50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008aa/008aab50.md) → [`008aaba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aaba8.md) FUN_008aaba8

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
      "definition_site": "008aabbc",
      "incomplete_value": false,
      "site": "008aabc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:480:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008aab64",
      "incomplete_value": false,
      "site": "008aab68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:3b0:8"
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
      "008aabc0",
      "DATA",
      [
        "storage",
        "00c833b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008aabc0",
      "DATA",
      [
        "storage",
        "00c83480",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008aab5c ["INT_ADD", "register:40f0:8", ["const:8aab5c:8", "const:4:8"]]
- 008aab5c ["CALL", null, ["callee:00c57f60:8"]]
+ 008aabb4 ["INT_ADD", "register:40f0:8", ["const:8aabb4:8", "const:4:8"]]
+ 008aabb4 ["CALL", null, ["callee:00c57f60:8"]]
- 008aab64 ["COPY", "tmp:0:8", ["const:3b0:8"]]
- 008aab64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008aab64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008aab64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008aabbc ["COPY", "tmp:0:8", ["const:480:8"]]
+ 008aabbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008aabbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008aabbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-26917834bbc0f6034ded985cf5e41cc6"></a>

### [`008aabd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008aa/008aabd8.md) → [`008aac30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac30.md) FUN_008aac30

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
      "definition_site": "008aac54",
      "incomplete_value": false,
      "site": "008aac54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:500:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008aabfc",
      "incomplete_value": false,
      "site": "008aabfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:430:8"
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
      "008aac54",
      "DATA",
      [
        "storage",
        "00c83430",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008aac54",
      "DATA",
      [
        "storage",
        "00c83500",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008aabec ["INT_ADD", "register:40f0:8", ["const:8aabec:8", "const:4:8"]]
- 008aabec ["CALL", null, ["callee:00c57f60:8"]]
+ 008aac44 ["INT_ADD", "register:40f0:8", ["const:8aac44:8", "const:4:8"]]
+ 008aac44 ["CALL", null, ["callee:00c57f60:8"]]
- 008aabf8 ["COPY", "tmp:0:8", ["const:430:8"]]
- 008aabf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008aabf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008aabf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008aac50 ["COPY", "tmp:0:8", ["const:500:8"]]
+ 008aac50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008aac50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008aac50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0291cf8b2eef97bdaa90361fd9e3e2b7"></a>

### [`008aac28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008aa/008aac28.md) → [`008aac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac80.md) FUN_008aac80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 28件 [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca54.md)
- 新版 呼出元 0件  · 呼出先 28件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.07% / 新版 97.07%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008aad40",
      "incomplete_value": false,
      "site": "008aad40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:570:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008aace8",
      "incomplete_value": false,
      "site": "008aace8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:4a0:8"
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
      "definition_site": "008aadc0",
      "incomplete_value": false,
      "site": "008aadc4",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008aad68",
      "incomplete_value": false,
      "site": "008aad6c",
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
            "const:c70:8"
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
      "008aacb0",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ],
    [
      "008aacbc",
      "READ",
      [
        "storage",
        "00ca4c78",
        null,
        "undefined4"
      ]
    ],
    [
      "008aacbc",
      "READ",
      [
        "storage",
        "00ca4c7c",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "008aacb0",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "008aacbc",
      "READ",
      [
        "storage",
        "00ca4d78",
        null,
        "undefined4"
      ]
    ],
    [
      "008aacbc",
      "READ",
      [
        "storage",
        "00ca4d7c",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008aad6c ["INT_ADD", "register:40f0:8", ["const:8aad6c:8", "const:4:8"]]
- 008aad6c ["CALL", null, ["callee:0046cb4c:8"]]
+ 008aadc4 ["INT_ADD", "register:40f0:8", ["const:8aadc4:8", "const:4:8"]]
+ 008aadc4 ["CALL", null, ["callee:0046cb4c:8"]]
- 008aac58 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:b68:8"]]
- 008aac58 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 008aacb0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c38:8"]]
+ 008aacb0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 008aac6c ["INT_ADD", "register:40f0:8", ["const:8aac6c:8", "const:4:8"]]
- 008aac6c ["CALL", null, ["callee:00550c68:8"]]
+ 008aacc4 ["INT_ADD", "register:40f0:8", ["const:8aacc4:8", "const:4:8"]]
+ 008aacc4 ["CALL", null, ["callee:00550c68:8"]]
~~~


<a id="compare-8d94bb1779fe9bbf19cba5d09f8c9cd2"></a>

### [`008ab890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008ab890.md) → [`008ab8e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab8e8.md) FUN_008ab8e8

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
      "definition_site": "008ab908",
      "incomplete_value": false,
      "site": "008ab90c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:570:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ab8b0",
      "incomplete_value": false,
      "site": "008ab8b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008ab90c",
      "DATA",
      [
        "storage",
        "00c834a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ab90c",
      "DATA",
      [
        "storage",
        "00c83570",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ab8a4 ["INT_ADD", "register:40f0:8", ["const:8ab8a4:8", "const:4:8"]]
- 008ab8a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ab8fc ["INT_ADD", "register:40f0:8", ["const:8ab8fc:8", "const:4:8"]]
+ 008ab8fc ["CALL", null, ["callee:00c57f60:8"]]
- 008ab8b0 ["COPY", "tmp:0:8", ["const:4a0:8"]]
- 008ab8b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ab8b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ab8b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ab908 ["COPY", "tmp:0:8", ["const:570:8"]]
+ 008ab908 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ab908 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ab908 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d7a4b76807a462e34757d1e7ecf6b718"></a>

### [`008ab8c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008ab8c8.md) → [`008ab920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab920.md) FUN_008ab920

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
      "definition_site": "008ab924",
      "incomplete_value": false,
      "site": "008ab928",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:570:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ab8cc",
      "incomplete_value": false,
      "site": "008ab8d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:4a0:8"
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
      "008ab928",
      "DATA",
      [
        "storage",
        "00c834a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ab928",
      "DATA",
      [
        "storage",
        "00c83570",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ab8cc ["COPY", "tmp:0:8", ["const:4a0:8"]]
- 008ab8cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ab8cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ab8cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ab924 ["COPY", "tmp:0:8", ["const:570:8"]]
+ 008ab924 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ab924 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ab924 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8c78becb9510b0cdd2d9db7f391bc46a"></a>

### [`008abb70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008abb70.md) → [`008abbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abbc8.md) FUN_008abbc8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008ab2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008ab2b8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`008ab310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab310.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008abbd4",
      "incomplete_value": false,
      "site": "008abbd8",
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
      "definition_site": "008abb7c",
      "incomplete_value": false,
      "site": "008abb80",
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
      "008abbd4",
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
      "008abbd4",
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
- 008abb80 ["INT_ADD", "register:40f0:8", ["const:8abb80:8", "const:4:8"]]
- 008abb80 ["CALL", null, ["callee:0043b7b8:8"]]
+ 008abbd8 ["INT_ADD", "register:40f0:8", ["const:8abbd8:8", "const:4:8"]]
+ 008abbd8 ["CALL", null, ["callee:0043b7b8:8"]]
- 008abb7c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008abb7c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008abb7c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008abb7c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008abbd4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008abbd4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008abbd4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008abbd4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-20a69ae0346dfb3a8ad9e6ee5bd544cb"></a>

### [`008abb88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008abb88.md) → [`008abbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abbe0.md) FUN_008abbe0

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
      "definition_site": "008abbf4",
      "incomplete_value": false,
      "site": "008abbf8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:600:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008abb9c",
      "incomplete_value": false,
      "site": "008abba0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:530:8"
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
      "008abbf8",
      "DATA",
      [
        "storage",
        "00c83530",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008abbf8",
      "DATA",
      [
        "storage",
        "00c83600",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008abb94 ["INT_ADD", "register:40f0:8", ["const:8abb94:8", "const:4:8"]]
- 008abb94 ["CALL", null, ["callee:00c57f60:8"]]
+ 008abbec ["INT_ADD", "register:40f0:8", ["const:8abbec:8", "const:4:8"]]
+ 008abbec ["CALL", null, ["callee:00c57f60:8"]]
- 008abb9c ["COPY", "tmp:0:8", ["const:530:8"]]
- 008abb9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008abb9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008abb9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008abbf4 ["COPY", "tmp:0:8", ["const:600:8"]]
+ 008abbf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008abbf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008abbf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-80041c1d225cbb2bd4758d8d596084ae"></a>

### [`008abc2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008abc2c.md) → [`008abc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abc84.md) FUN_008abc84

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
      "definition_site": "008abc98",
      "incomplete_value": false,
      "site": "008abc9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008abc40",
      "incomplete_value": false,
      "site": "008abc44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:5b0:8"
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
      "008abc9c",
      "DATA",
      [
        "storage",
        "00c835b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008abc9c",
      "DATA",
      [
        "storage",
        "00c83680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008abc38 ["INT_ADD", "register:40f0:8", ["const:8abc38:8", "const:4:8"]]
- 008abc38 ["CALL", null, ["callee:00c57f60:8"]]
+ 008abc90 ["INT_ADD", "register:40f0:8", ["const:8abc90:8", "const:4:8"]]
+ 008abc90 ["CALL", null, ["callee:00c57f60:8"]]
- 008abc40 ["COPY", "tmp:0:8", ["const:5b0:8"]]
- 008abc40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008abc40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008abc40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008abc98 ["COPY", "tmp:0:8", ["const:680:8"]]
+ 008abc98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008abc98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008abc98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-23caca846e732a3d7bb2071e8e5383b6"></a>

### [`008abc68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008abc68.md) → [`008abcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abcc0.md) FUN_008abcc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048f398`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048f/0048f398.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048f3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048f/0048f3d8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008abcc8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008abc70",
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
      "008abcc8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "008abcc8",
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
- 008abc70 ["INT_ADD", "register:40f0:8", ["const:8abc70:8", "const:4:8"]]
- 008abc70 ["CALL", null, ["ram:48ccf8:8"]]
+ 008abcc8 ["INT_ADD", "register:40f0:8", ["const:8abcc8:8", "const:4:8"]]
+ 008abcc8 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-936702bb76f5ace7690d79e53cd0353d"></a>

### [`008abca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008abca8.md) → [`008abd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd00.md) FUN_008abd00

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
      "definition_site": "008abd24",
      "incomplete_value": false,
      "site": "008abd24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008abccc",
      "incomplete_value": false,
      "site": "008abccc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:630:8"
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
      "008abd24",
      "DATA",
      [
        "storage",
        "00c83630",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008abd24",
      "DATA",
      [
        "storage",
        "00c83700",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008abcbc ["INT_ADD", "register:40f0:8", ["const:8abcbc:8", "const:4:8"]]
- 008abcbc ["CALL", null, ["callee:00c57f60:8"]]
+ 008abd14 ["INT_ADD", "register:40f0:8", ["const:8abd14:8", "const:4:8"]]
+ 008abd14 ["CALL", null, ["callee:00c57f60:8"]]
- 008abcc8 ["COPY", "tmp:0:8", ["const:630:8"]]
- 008abcc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008abcc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008abcc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008abd20 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 008abd20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008abd20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008abd20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e4da6be851b4f8bba1518f658591b3d5"></a>

### [`008abcf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008abcf8.md) → [`008abd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd50.md) FUN_008abd50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 28件 [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca54.md)
- 新版 呼出元 0件  · 呼出先 28件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.41% / 新版 95.41%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008abdb4",
      "incomplete_value": true,
      "site": "008abdb4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:20d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008abd5c",
      "incomplete_value": true,
      "site": "008abd5c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:25a:8"
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
      "definition_site": "008abdb8",
      "incomplete_value": true,
      "site": "008abdb8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008abd60",
      "incomplete_value": true,
      "site": "008abd60",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008abe10",
      "incomplete_value": false,
      "site": "008abe10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008abdb8",
      "incomplete_value": false,
      "site": "008abdb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:6a0:8"
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
      "008abd80",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ],
    [
      "008abd8c",
      "READ",
      [
        "storage",
        "00ca4c78",
        null,
        "undefined4"
      ]
    ],
    [
      "008abd8c",
      "READ",
      [
        "storage",
        "00ca4c7c",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "008abd80",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "008abd8c",
      "READ",
      [
        "storage",
        "00ca4d78",
        null,
        "undefined4"
      ]
    ],
    [
      "008abd8c",
      "READ",
      [
        "storage",
        "00ca4d7c",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008abe1c ["INT_ADD", "register:40f0:8", ["const:8abe1c:8", "const:4:8"]]
- 008abe1c ["CALL", null, ["callee:0046ca94:8"]]
+ 008abe74 ["INT_ADD", "register:40f0:8", ["const:8abe74:8", "const:4:8"]]
+ 008abe74 ["CALL", null, ["callee:0046ca94:8"]]
- 008abe3c ["INT_ADD", "register:40f0:8", ["const:8abe3c:8", "const:4:8"]]
- 008abe3c ["CALL", null, ["callee:0046cb4c:8"]]
+ 008abe94 ["INT_ADD", "register:40f0:8", ["const:8abe94:8", "const:4:8"]]
+ 008abe94 ["CALL", null, ["callee:0046cb4c:8"]]
- 008abd28 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:b68:8"]]
- 008abd28 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 008abd80 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c38:8"]]
+ 008abd80 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b2314081932f14a4208f9f0a758ab417"></a>

### [`008ac904`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008ac904.md) → [`008ac95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac95c.md) FUN_008ac95c

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
      "definition_site": "008ac97c",
      "incomplete_value": false,
      "site": "008ac980",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ac924",
      "incomplete_value": false,
      "site": "008ac928",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:6a0:8"
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
      "008ac980",
      "DATA",
      [
        "storage",
        "00c836a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ac980",
      "DATA",
      [
        "storage",
        "00c83770",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ac918 ["INT_ADD", "register:40f0:8", ["const:8ac918:8", "const:4:8"]]
- 008ac918 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ac970 ["INT_ADD", "register:40f0:8", ["const:8ac970:8", "const:4:8"]]
+ 008ac970 ["CALL", null, ["callee:00c57f60:8"]]
- 008ac924 ["COPY", "tmp:0:8", ["const:6a0:8"]]
- 008ac924 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ac924 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ac924 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ac97c ["COPY", "tmp:0:8", ["const:770:8"]]
+ 008ac97c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ac97c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ac97c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d6178c3b780176e3b2faa5f4ca61b5ac"></a>

### [`008ac93c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008ac93c.md) → [`008ac994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac994.md) FUN_008ac994

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
      "definition_site": "008ac998",
      "incomplete_value": false,
      "site": "008ac99c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ac940",
      "incomplete_value": false,
      "site": "008ac944",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:6a0:8"
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
      "008ac99c",
      "DATA",
      [
        "storage",
        "00c836a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ac99c",
      "DATA",
      [
        "storage",
        "00c83770",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ac940 ["COPY", "tmp:0:8", ["const:6a0:8"]]
- 008ac940 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ac940 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ac940 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ac998 ["COPY", "tmp:0:8", ["const:770:8"]]
+ 008ac998 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ac998 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ac998 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-31050873ba1fe8fa8650fa291c1b9f5a"></a>

### [`008acbe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008acbe4.md) → [`008acc3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acc3c.md) FUN_008acc3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008ac380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008ac380.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`008ac3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac3d8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008acc48",
      "incomplete_value": false,
      "site": "008acc4c",
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
      "definition_site": "008acbf0",
      "incomplete_value": false,
      "site": "008acbf4",
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
      "008acc48",
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
      "008acc48",
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
- 008acbf4 ["INT_ADD", "register:40f0:8", ["const:8acbf4:8", "const:4:8"]]
- 008acbf4 ["CALL", null, ["callee:0043b7b8:8"]]
+ 008acc4c ["INT_ADD", "register:40f0:8", ["const:8acc4c:8", "const:4:8"]]
+ 008acc4c ["CALL", null, ["callee:0043b7b8:8"]]
- 008acbf0 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008acbf0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008acbf0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008acbf0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008acc48 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008acc48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008acc48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008acc48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8b4ba0d8fb34c48c7a3b435cb652d316"></a>

### [`008acbfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008acbfc.md) → [`008acc54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acc54.md) FUN_008acc54

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
      "definition_site": "008acc68",
      "incomplete_value": false,
      "site": "008acc6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:800:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008acc10",
      "incomplete_value": false,
      "site": "008acc14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:730:8"
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
      "008acc6c",
      "DATA",
      [
        "storage",
        "00c83730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008acc6c",
      "DATA",
      [
        "storage",
        "00c83800",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008acc08 ["INT_ADD", "register:40f0:8", ["const:8acc08:8", "const:4:8"]]
- 008acc08 ["CALL", null, ["callee:00c57f60:8"]]
+ 008acc60 ["INT_ADD", "register:40f0:8", ["const:8acc60:8", "const:4:8"]]
+ 008acc60 ["CALL", null, ["callee:00c57f60:8"]]
- 008acc10 ["COPY", "tmp:0:8", ["const:730:8"]]
- 008acc10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008acc10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008acc10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008acc68 ["COPY", "tmp:0:8", ["const:800:8"]]
+ 008acc68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008acc68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008acc68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


