# v16.0.1 → v16.0.2 · 最優先の変更候補 (54)

[一覧の目次](README.md)

<a id="compare-ee259335e9ad5dd12412fb88bef61639"></a>

### [`008da508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da508.md) → [`008da55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da55c.md) FUN_008da55c

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
      "definition_site": "008da560",
      "incomplete_value": false,
      "site": "008da564",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da50c",
      "incomplete_value": false,
      "site": "008da510",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:f18:8"
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
      "008da564",
      "DATA",
      [
        "storage",
        "00c84f18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da564",
      "DATA",
      [
        "storage",
        "00c84fe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da50c ["COPY", "tmp:0:8", ["const:f18:8"]]
- 008da50c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da50c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da50c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008da560 ["COPY", "tmp:0:8", ["const:fe8:8"]]
+ 008da560 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008da560 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008da560 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f562a9e82fa2629435c6929b60fa0c33"></a>

### [`008da560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da560.md) → [`008da5b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da5b4.md) FUN_008da5b4

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
      "definition_site": "008da5c0",
      "incomplete_value": false,
      "site": "008da5cc",
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
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da56c",
      "incomplete_value": false,
      "site": "008da578",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
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
      "008da5cc",
      "DATA",
      [
        "storage",
        "00c84fa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da5cc",
      "DATA",
      [
        "storage",
        "00c85078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da568 ["COPY", "register:4050:8", ["const:c84000:8"]]
+ 008da5bc ["COPY", "register:4050:8", ["const:c85000:8"]]
- 008da56c ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 008da56c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 008da56c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 008da56c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 008da5c0 ["COPY", "tmp:0:8", ["const:78:8"]]
+ 008da5c0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 008da5c0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 008da5c0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-4e3901b00974251b3d506e142e12ea00"></a>

### [`008da5a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da5a4.md) → [`008da5f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da5f8.md) FUN_008da5f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008da610",
      "incomplete_value": false,
      "site": "008da61c",
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
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da5bc",
      "incomplete_value": false,
      "site": "008da5c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:fa8:8"
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
      "008da61c",
      "DATA",
      [
        "storage",
        "00c84fa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da61c",
      "DATA",
      [
        "storage",
        "00c85078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da5b8 ["COPY", "register:4040:8", ["const:c84000:8"]]
+ 008da60c ["COPY", "register:4040:8", ["const:c85000:8"]]
- 008da5bc ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 008da5bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da5bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da5bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008da610 ["COPY", "tmp:0:8", ["const:78:8"]]
+ 008da610 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008da610 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008da610 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008da5ec ["COPY", "register:0:8", ["register:4040:8"]]
- 008da5ec ["INT_ADD", "register:40f0:8", ["const:8da5ec:8", "const:4:8"]]
- 008da5ec ["CALLIND", null, ["register:0:8"]]
+ 008da640 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008da640 ["INT_ADD", "register:40f0:8", ["const:8da640:8", "const:4:8"]]
+ 008da640 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b0455d7aae82d60512cae8ec412289ca"></a>

### [`008da600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da600.md) → [`008da654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da654.md) FUN_008da654

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008da67c",
      "incomplete_value": false,
      "site": "008da680",
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
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da628",
      "incomplete_value": false,
      "site": "008da62c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:fa8:8"
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
      "008da680",
      "DATA",
      [
        "storage",
        "00c84fa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da680",
      "DATA",
      [
        "storage",
        "00c85078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da614 ["INT_ADD", "register:40f0:8", ["const:8da614:8", "const:4:8"]]
- 008da614 ["CALL", null, ["callee:00c57f60:8"]]
+ 008da668 ["INT_ADD", "register:40f0:8", ["const:8da668:8", "const:4:8"]]
+ 008da668 ["CALL", null, ["callee:00c57f60:8"]]
- 008da624 ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008da678 ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008da628 ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 008da628 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008da628 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008da628 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008da67c ["COPY", "tmp:0:8", ["const:78:8"]]
+ 008da67c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008da67c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008da67c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-51f7e3e77c0fb508ba1ac5c0db24c213"></a>

### [`008da698`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da698.md) → [`008da6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da6ec.md) FUN_008da6ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008da70c",
      "incomplete_value": false,
      "site": "008da710",
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
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da6b8",
      "incomplete_value": false,
      "site": "008da6bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:fa8:8"
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
      "008da710",
      "DATA",
      [
        "storage",
        "00c84fa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da710",
      "DATA",
      [
        "storage",
        "00c85078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da6b4 ["COPY", "register:4048:8", ["const:c84000:8"]]
+ 008da708 ["COPY", "register:4048:8", ["const:c85000:8"]]
- 008da6b8 ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 008da6b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008da6b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008da6b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008da70c ["COPY", "tmp:0:8", ["const:78:8"]]
+ 008da70c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008da70c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008da70c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008da6dc ["COPY", "register:0:8", ["register:4040:8"]]
- 008da6dc ["INT_ADD", "register:40f0:8", ["const:8da6dc:8", "const:4:8"]]
- 008da6dc ["CALLIND", null, ["register:0:8"]]
+ 008da730 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008da730 ["INT_ADD", "register:40f0:8", ["const:8da730:8", "const:4:8"]]
+ 008da730 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fdcf99c3e7e19bc4ef34297ffcdaeda7"></a>

### [`008da7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da7a4.md) → [`008da7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da7f8.md) FUN_008da7f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00596f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00596/00596f2c.md) [`00865af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865af4.md) [`008d6108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d6/008d6108.md)
- 新版 呼出元 0件  · 呼出先 10件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00865b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865b4c.md) [`008d615c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d615c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.92% / 新版 98.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008da8c0",
      "incomplete_value": true,
      "site": "008da8c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:6a9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da86c",
      "incomplete_value": true,
      "site": "008da86c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:6f6:8"
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
      "008da8a8",
      "READ",
      [
        "storage",
        "002a06f6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008da8a8",
      "READ",
      [
        "storage",
        "002a06a9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da8c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008da8c0 ["INT_ADD", "register:40f0:8", ["const:8da8c0:8", "const:4:8"]]
- 008da8c0 ["CALLIND", null, ["register:0:8"]]
+ 008da914 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008da914 ["INT_ADD", "register:40f0:8", ["const:8da914:8", "const:4:8"]]
+ 008da914 ["CALLIND", null, ["register:0:8"]]
- 008da7e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008da7e8 ["INT_ADD", "register:40f0:8", ["const:8da7e8:8", "const:4:8"]]
- 008da7e8 ["CALLIND", null, ["register:0:8"]]
+ 008da83c ["COPY", "register:0:8", ["register:4040:8"]]
+ 008da83c ["INT_ADD", "register:40f0:8", ["const:8da83c:8", "const:4:8"]]
+ 008da83c ["CALLIND", null, ["register:0:8"]]
- 008da808 ["INT_ADD", "register:40f0:8", ["const:8da808:8", "const:4:8"]]
- 008da808 ["CALL", null, ["callee:00c53d70:8"]]
+ 008da85c ["INT_ADD", "register:40f0:8", ["const:8da85c:8", "const:4:8"]]
+ 008da85c ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-9ad4d8f2197f5ad9adcaf16841bfd06e"></a>

### [`008dac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008dac70.md) → [`008dacc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008dacc4.md) FUN_008dacc4

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
      "definition_site": "008dacd0",
      "incomplete_value": false,
      "site": "008dacdc",
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
            "const:f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dac7c",
      "incomplete_value": false,
      "site": "008dac88",
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
      "008dacdc",
      "DATA",
      [
        "storage",
        "00c85028",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008dacdc",
      "DATA",
      [
        "storage",
        "00c850f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dac7c ["COPY", "tmp:0:8", ["const:28:8"]]
- 008dac7c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 008dac7c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 008dac7c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 008dacd0 ["COPY", "tmp:0:8", ["const:f8:8"]]
+ 008dacd0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 008dacd0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 008dacd0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-166215b96cd82b71acbb674000bdc0f5"></a>

### [`008dacb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008dacb4.md) → [`008dad08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008dad08.md) FUN_008dad08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008dad20",
      "incomplete_value": false,
      "site": "008dad2c",
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
            "const:f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008daccc",
      "incomplete_value": false,
      "site": "008dacd8",
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
            "const:28:8"
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
      "008dad2c",
      "DATA",
      [
        "storage",
        "00c85028",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008dad2c",
      "DATA",
      [
        "storage",
        "00c850f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008daccc ["COPY", "tmp:0:8", ["const:28:8"]]
- 008daccc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008daccc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008daccc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008dad20 ["COPY", "tmp:0:8", ["const:f8:8"]]
+ 008dad20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008dad20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008dad20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008dacfc ["COPY", "register:0:8", ["register:4040:8"]]
- 008dacfc ["INT_ADD", "register:40f0:8", ["const:8dacfc:8", "const:4:8"]]
- 008dacfc ["CALLIND", null, ["register:0:8"]]
+ 008dad50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008dad50 ["INT_ADD", "register:40f0:8", ["const:8dad50:8", "const:4:8"]]
+ 008dad50 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ec5842a14997a9eee090331dd7370434"></a>

### [`008dad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008dad10.md) → [`008dad64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008dad64.md) FUN_008dad64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008dad8c",
      "incomplete_value": false,
      "site": "008dad90",
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
            "const:f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dad38",
      "incomplete_value": false,
      "site": "008dad3c",
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
      "008dad90",
      "DATA",
      [
        "storage",
        "00c85028",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008dad90",
      "DATA",
      [
        "storage",
        "00c850f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dad24 ["INT_ADD", "register:40f0:8", ["const:8dad24:8", "const:4:8"]]
- 008dad24 ["CALL", null, ["callee:00c57f60:8"]]
+ 008dad78 ["INT_ADD", "register:40f0:8", ["const:8dad78:8", "const:4:8"]]
+ 008dad78 ["CALL", null, ["callee:00c57f60:8"]]
- 008dad38 ["COPY", "tmp:0:8", ["const:28:8"]]
- 008dad38 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008dad38 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008dad38 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008dad8c ["COPY", "tmp:0:8", ["const:f8:8"]]
+ 008dad8c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008dad8c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008dad8c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008dad5c ["COPY", "register:0:8", ["register:4040:8"]]
- 008dad5c ["INT_ADD", "register:40f0:8", ["const:8dad5c:8", "const:4:8"]]
- 008dad5c ["CALLIND", null, ["register:0:8"]]
+ 008dadb0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008dadb0 ["INT_ADD", "register:40f0:8", ["const:8dadb0:8", "const:4:8"]]
+ 008dadb0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c4081ba414b3a55f3462a30a1fb96e78"></a>

### [`008dada0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008dada0.md) → [`008dadf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008dadf4.md) FUN_008dadf4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008dae10",
      "incomplete_value": false,
      "site": "008dae14",
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
            "const:f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dadbc",
      "incomplete_value": false,
      "site": "008dadc0",
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
            "const:28:8"
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
      "008dae14",
      "DATA",
      [
        "storage",
        "00c85028",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008dae14",
      "DATA",
      [
        "storage",
        "00c850f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dadbc ["COPY", "tmp:0:8", ["const:28:8"]]
- 008dadbc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 008dadbc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 008dadbc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 008dae10 ["COPY", "tmp:0:8", ["const:f8:8"]]
+ 008dae10 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 008dae10 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 008dae10 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 008dade4 ["COPY", "register:0:8", ["register:4048:8"]]
- 008dade4 ["INT_ADD", "register:40f0:8", ["const:8dade4:8", "const:4:8"]]
- 008dade4 ["CALLIND", null, ["register:0:8"]]
+ 008dae38 ["COPY", "register:0:8", ["register:4048:8"]]
+ 008dae38 ["INT_ADD", "register:40f0:8", ["const:8dae38:8", "const:4:8"]]
+ 008dae38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-07563b404b1735fc0cb854b0c3148aa2"></a>

### [`008db178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008db/008db178.md) → [`008db1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db1cc.md) _INIT_172

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.79% / 新版 80.79%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008db2e4",
      "incomplete_value": true,
      "site": "008db2ec",
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
            "const:20:8"
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
    "new": null,
    "old": {
      "definition_site": "008db330",
      "incomplete_value": true,
      "site": "008db33c",
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
            "const:a0:8"
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
      "definition_site": "008db3f4",
      "incomplete_value": true,
      "site": "008db400",
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
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008db3a0",
      "incomplete_value": false,
      "site": "008db3ac",
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
            "const:970:8"
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
      "unmatched:008db1a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008db1b4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008db1d0",
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
      "008db1fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008db208",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008db224",
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
- 008db2ec ["INT_ADD", "register:40f0:8", ["const:8db2ec:8", "const:4:8"]]
- 008db2ec ["CALL", null, ["callee:0043b838:8"]]
+ 008db340 ["INT_ADD", "register:40f0:8", ["const:8db340:8", "const:4:8"]]
+ 008db340 ["CALL", null, ["callee:0043b838:8"]]
- 008db33c ["INT_ADD", "register:40f0:8", ["const:8db33c:8", "const:4:8"]]
- 008db33c ["CALL", null, ["callee:0043b838:8"]]
+ 008db390 ["INT_ADD", "register:40f0:8", ["const:8db390:8", "const:4:8"]]
+ 008db390 ["CALL", null, ["callee:0043b838:8"]]
- 008db358 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008db358 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008db358 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008db358 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 008db3ac ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 008db3ac ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008db3ac ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008db3ac ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-9899b7e6b287103ad6e1790bd4797847"></a>

### [`008db508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008db/008db508.md) → [`008db55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db55c.md) FUN_008db55c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008ddfa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008ddfa0.md) · 呼出先 3件 [`008db61c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008db/008db61c.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`008ddff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddff4.md) · 呼出先 3件 [`008db670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db670.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.71% / 新版 79.71%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008db624",
      "incomplete_value": false,
      "site": "008db628",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "008db620",
      "incomplete_value": true,
      "site": "008db628",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008db5bc"
      ],
      [
        "FALL_THROUGH",
        "008db610"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008db618",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "008db5b4",
      "incomplete_value": true,
      "site": "008db5c4",
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
                "register:40b0:8"
              ],
              [
                "live",
                "register:40b8:8"
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
      "unmatched:008db508",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008db50c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008db510",
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
      "008db55c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008db560",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008db564",
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
- 008db5d4 ["INT_ADD", "register:40f0:8", ["const:8db5d4:8", "const:4:8"]]
- 008db5d4 ["CALL", null, ["callee:00c53da0:8"]]
+ 008db628 ["INT_ADD", "register:40f0:8", ["const:8db628:8", "const:4:8"]]
+ 008db628 ["CALL", null, ["callee:00c53da0:8"]]
- 008db508 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008db508 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008db508 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 008db508 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008db50c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008db50c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d8:8"]]
~~~


<a id="compare-2e452bda3693c05355ef0f4f2d28f522"></a>

### [`008db61c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008db/008db61c.md) → [`008db670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db670.md) FUN_008db670

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008db508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008db/008db508.md) [`008dd0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008dd0f4.md) · 呼出先 4件 [`00666320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00666/00666320.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`008db55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db55c.md) [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) · 呼出先 4件 [`00666360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/00666360.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 3件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008db674",
      "incomplete_value": false,
      "site": "008db67c",
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008db694",
      "incomplete_value": true,
      "site": "008db69c",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "008db640"
      ],
      [
        "CONDITIONAL_JUMP",
        "008db694"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008db694",
      "incomplete_value": true,
      "site": "008db6dc",
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
      "definition_site": "008db640",
      "incomplete_value": true,
      "site": "008db688",
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
              [
                "live",
                "register:4000:8"
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
      "unmatched:008db638",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008db640",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008db6bc"
      ]
    ],
    [
      "008db6e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008db6bc"
      ]
    ]
  ],
  "added": [
    [
      "008db68c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008db694",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008db6bc"
      ]
    ],
    [
      "008db6e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008db710"
      ]
    ]
  ]
}
~~~


~~~diff
- 008db67c ["INT_ADD", "register:40f0:8", ["const:8db67c:8", "const:4:8"]]
- 008db67c ["CALL", null, ["callee:00666360:8"]]
+ 008db6d0 ["INT_ADD", "register:40f0:8", ["const:8db6d0:8", "const:4:8"]]
+ 008db6d0 ["CALL", null, ["callee:00666360:8"]]
+ 008db688 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
+ 008db688 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 008db68c ["COPY", "tmp:0:8", ["register:4040:8"]]
+ 008db68c ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
+ 008db68c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-cfffd624b1465e039b178dc49c61fa94"></a>

### [`008db6f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008db/008db6f4.md) → [`008db748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db748.md) FUN_008db748

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008dd0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008dd0f4.md) · 呼出先 14件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`006647c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006647c0.md) [`00664830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/00664830.md) [`00665c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00665/00665c7c.md) [`00665cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00665/00665cb8.md)
- 新版 呼出元 1件 [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md) [`00664870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664870.md) [`00665cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665cbc.md) [`00665cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665cf8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.21% / 新版 72.21%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 25件, `unresolved_call_alignment` 11件, `unresolved_store_alignment` 27件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008db778",
      "incomplete_value": true,
      "site": "008db780",
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
            "const:88:8"
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
      "definition_site": "008db7e4",
      "incomplete_value": true,
      "site": "008db7f0",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008db838",
      "incomplete_value": true,
      "site": "008db844",
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
            "const:8:8"
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
      "unmatched:008db6f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008db6fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008db700",
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
      "008db74c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008db750",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008db754",
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
- 008db780 ["INT_ADD", "register:40f0:8", ["const:8db780:8", "const:4:8"]]
- 008db780 ["CALL", null, ["callee:00676aa0:8"]]
+ 008db7d4 ["INT_ADD", "register:40f0:8", ["const:8db7d4:8", "const:4:8"]]
+ 008db7d4 ["CALL", null, ["callee:00676aa0:8"]]
- 008db79c ["INT_ADD", "register:40f0:8", ["const:8db79c:8", "const:4:8"]]
- 008db79c ["CALL", null, ["callee:00676aa0:8"]]
+ 008db7f0 ["INT_ADD", "register:40f0:8", ["const:8db7f0:8", "const:4:8"]]
+ 008db7f0 ["CALL", null, ["callee:00676aa0:8"]]
- 008db7f0 ["INT_ADD", "register:40f0:8", ["const:8db7f0:8", "const:4:8"]]
- 008db7f0 ["CALL", null, ["callee:00676aa0:8"]]
+ 008db844 ["INT_ADD", "register:40f0:8", ["const:8db844:8", "const:4:8"]]
+ 008db844 ["CALL", null, ["callee:00676aa0:8"]]
~~~


<a id="compare-a165f1dcfa2bc1558bb94e50f902e237"></a>

### [`008dc120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dc/008dc120.md) → [`008dc174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dc/008dc174.md) FUN_008dc174

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008ddc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008ddc58.md) · 呼出先 15件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md)
- 新版 呼出元 1件 [`008ddcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddcac.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.57% / 新版 73.57%

優先判定に残った影響 `call_argument_candidate` 9件, `call_target` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 12件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008dc208",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008dc1b4",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dc42c",
      "incomplete_value": false,
      "site": "008dc434",
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
      "definition_site": "008dc3d8",
      "incomplete_value": false,
      "site": "008dc3e0",
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
    "ordinal": 31,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008dc41c",
      "incomplete_value": true,
      "site": "008dc420",
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
      "008dc208",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008dc264",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008dc218"
      ]
    ],
    [
      "unmatched:008dc218",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ],
  "added": [
    [
      "008dc208",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008dc248",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "008dc264",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008dc26c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dc1b4 ["INT_ADD", "register:40f0:8", ["const:8dc1b4:8", "const:4:8"]]
- 008dc1b4 ["CALL", null, ["ram:47acf4:8"]]
+ 008dc208 ["INT_ADD", "register:40f0:8", ["const:8dc208:8", "const:4:8"]]
+ 008dc208 ["CALL", null, ["ram:47ad34:8"]]
- 008dc208 ["BRANCH", null, ["local:b20:8"]]
+ 008dc25c ["BRANCH", null, ["local:b21:8"]]
- 008dc3e0 ["INT_ADD", "register:40f0:8", ["const:8dc3e0:8", "const:4:8"]]
- 008dc3e0 ["CALL", null, ["callee:00c58260:8"]]
+ 008dc434 ["INT_ADD", "register:40f0:8", ["const:8dc434:8", "const:4:8"]]
+ 008dc434 ["CALL", null, ["callee:00c58260:8"]]
~~~


<a id="compare-3cb7085606bb278f837ccd8c41100330"></a>

### [`008dc664`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dc/008dc664.md) → [`008dc6b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dc/008dc6b8.md) FUN_008dc6b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008dda04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008dda04.md) · 呼出先 9件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00468d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468d08.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046965c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/0046965c.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 1件 [`008dda58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dda58.md) · 呼出先 9件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468d48.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008dc6f4",
      "incomplete_value": false,
      "site": "008dc708",
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
    "old": {
      "definition_site": "008dc6a0",
      "incomplete_value": false,
      "site": "008dc6b4",
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
            "const:e58:8"
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
      "definition_site": "008dc6fc",
      "incomplete_value": false,
      "site": "008dc708",
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
            "const:168:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dc6a8",
      "incomplete_value": false,
      "site": "008dc6b4",
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
            "const:98:8"
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
      "definition_site": "008dc6d4",
      "incomplete_value": true,
      "site": "008dc6d8",
      "value": [
        "live",
        "register:4040:8"
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
      "unmatched:008dc690",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008dc698",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008dc714"
      ]
    ],
    [
      "unmatched:008dc6a0",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008dc6e4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008dc6ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008dc714"
      ]
    ],
    [
      "008dc6f4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dc6b4 ["INT_ADD", "register:40f0:8", ["const:8dc6b4:8", "const:4:8"]]
- 008dc6b4 ["CALL", null, ["callee:00c586e0:8"]]
+ 008dc708 ["INT_ADD", "register:40f0:8", ["const:8dc708:8", "const:4:8"]]
+ 008dc708 ["CALL", null, ["callee:00c586e0:8"]]
- 008dc6d8 ["INT_ADD", "register:40f0:8", ["const:8dc6d8:8", "const:4:8"]]
- 008dc6d8 ["CALL", null, ["callee:0048ac38:8"]]
+ 008dc72c ["INT_ADD", "register:40f0:8", ["const:8dc72c:8", "const:4:8"]]
+ 008dc72c ["CALL", null, ["callee:0048ac38:8"]]
- 008dc708 ["INT_ADD", "register:40f0:8", ["const:8dc708:8", "const:4:8"]]
- 008dc708 ["CALL", null, ["callee:00851550:8"]]
+ 008dc75c ["INT_ADD", "register:40f0:8", ["const:8dc75c:8", "const:4:8"]]
+ 008dc75c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-d98bc857fed8aeb43fb8797df9058a7f"></a>

### [`008dc934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dc/008dc934.md) → [`008dc988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dc/008dc988.md) FUN_008dc988

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008dd0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008dd0f4.md) · 呼出先 12件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00615ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00615/00615ee0.md) [`006534dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/006534dc.md)
- 新版 呼出元 1件 [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) · 呼出先 12件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00615f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615f20.md) [`0065351c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/0065351c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.38% / 新版 90.38%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008dca80",
      "incomplete_value": true,
      "site": "008dca84",
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
            "const:30:8"
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
      "definition_site": "008dcb78",
      "incomplete_value": true,
      "site": "008dcb7c",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:2:8"
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
    "new": null,
    "old": {
      "definition_site": "008dcb98",
      "incomplete_value": true,
      "site": "008dcba4",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 7,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008dc980",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008dca00"
      ]
    ],
    [
      "unmatched:008dc994",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008dca00"
      ]
    ],
    [
      "unmatched:008dc9c4",
      "WRITE",
      [
        "storage",
        "Stack[-0xd8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008dc9d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008dca00"
      ]
    ],
    [
      "008dc9e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008dca00"
      ]
    ],
    [
      "008dca18",
      "WRITE",
      [
        "storage",
        "Stack[-0xd8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008dca84 ["INT_ADD", "register:40f0:8", ["const:8dca84:8", "const:4:8"]]
- 008dca84 ["CALL", null, ["callee:00615f20:8"]]
+ 008dcad8 ["INT_ADD", "register:40f0:8", ["const:8dcad8:8", "const:4:8"]]
+ 008dcad8 ["CALL", null, ["callee:00615f20:8"]]
- 008dcb7c ["INT_ADD", "register:40f0:8", ["const:8dcb7c:8", "const:4:8"]]
- 008dcb7c ["CALL", null, ["callee:00c57f60:8"]]
+ 008dcbd0 ["INT_ADD", "register:40f0:8", ["const:8dcbd0:8", "const:4:8"]]
+ 008dcbd0 ["CALL", null, ["callee:00c57f60:8"]]
- 008dcba4 ["INT_ADD", "register:40f0:8", ["const:8dcba4:8", "const:4:8"]]
- 008dcba4 ["CALL", null, ["callee:00c580d0:8"]]
+ 008dcbf8 ["INT_ADD", "register:40f0:8", ["const:8dcbf8:8", "const:4:8"]]
+ 008dcbf8 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-92e512cd6c3428c4f769a374bb9f0a06"></a>

### [`008dd0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008dd0f4.md) → [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) FUN_008dd148

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008ddcb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008ddcb4.md) · 呼出先 29件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 1件 [`008ddd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddd08.md) · 呼出先 29件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.21% / 新版 89.21%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_destination` 1件, `store_value` 11件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008dd534",
      "incomplete_value": false,
      "site": "008dd534",
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
            "const:6dc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dd4e0",
      "incomplete_value": false,
      "site": "008dd4e0",
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
            "const:60c:8"
          ]
        ]
      ]
    },
    "ordinal": 65,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008dd630",
      "incomplete_value": true,
      "site": "008dd640",
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
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:aa3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dd5dc",
      "incomplete_value": true,
      "site": "008dd5ec",
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
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:af7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 75,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008dd634",
      "incomplete_value": true,
      "site": "008dd644",
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
      "definition_site": "008dd5e0",
      "incomplete_value": true,
      "site": "008dd5f0",
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
    "ordinal": 76,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008dd230",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00665c7c"
      ]
    ],
    [
      "008dd534",
      "WRITE",
      [
        "storage",
        "00ca460c",
        null,
        "undefined4"
      ]
    ],
    [
      "unmatched:008dd598",
      "READ",
      [
        "storage",
        "002b6845",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008dd230",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00665cbc"
      ]
    ],
    [
      "008dd534",
      "WRITE",
      [
        "storage",
        "00ca46dc",
        null,
        "undefined4"
      ]
    ],
    [
      "008dd5ec",
      "READ",
      [
        "storage",
        "002b6885",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dd1dc ["INT_ADD", "register:40f0:8", ["const:8dd1dc:8", "const:4:8"]]
- 008dd1dc ["CALL", null, ["ram:665c7c:8"]]
+ 008dd230 ["INT_ADD", "register:40f0:8", ["const:8dd230:8", "const:4:8"]]
+ 008dd230 ["CALL", null, ["ram:665cbc:8"]]
- 008dd4e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:60c:8"]]
- 008dd4e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:4"]]
+ 008dd534 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6dc:8"]]
+ 008dd534 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:4"]]
+ 008dd5ec ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 008dd5ec ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3ade76acbcf68f95841a4c9b7e195371"></a>

### [`008dda04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008dda04.md) → [`008dda58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dda58.md) FUN_008dda58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008dea58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008de/008dea58.md) · 呼出先 8件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`0046965c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/0046965c.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008dc664`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dc/008dc664.md)
- 新版 呼出元 1件 [`008deaac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008de/008deaac.md) · 呼出先 8件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008dc6b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dc/008dc6b8.md)

変更の種類 branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.64% / 新版 96.64%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008dda7c",
      "incomplete_value": true,
      "site": "008dda7c",
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
      "definition_site": "008dda28",
      "incomplete_value": true,
      "site": "008dda28",
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
      "definition_site": "008dda84",
      "incomplete_value": false,
      "site": "008dda98",
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
    "old": {
      "definition_site": "008dda30",
      "incomplete_value": false,
      "site": "008dda44",
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
            "const:e58:8"
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
      "definition_site": "008dda8c",
      "incomplete_value": false,
      "site": "008dda98",
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
            "const:168:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008dda38",
      "incomplete_value": false,
      "site": "008dda44",
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
            "const:98:8"
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
      "008dda78",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008dda84",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008dda8c",
      "PARAM",
      [
        "storage",
        "00c85098",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008dda78",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008dda84",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008dda8c",
      "PARAM",
      [
        "storage",
        "00c85168",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008dda44 ["INT_ADD", "register:40f0:8", ["const:8dda44:8", "const:4:8"]]
- 008dda44 ["CALL", null, ["callee:00c586e0:8"]]
+ 008dda98 ["INT_ADD", "register:40f0:8", ["const:8dda98:8", "const:4:8"]]
+ 008dda98 ["CALL", null, ["callee:00c586e0:8"]]
- 008ddab4 ["INT_ADD", "register:40f0:8", ["const:8ddab4:8", "const:4:8"]]
- 008ddab4 ["CALL", null, ["callee:008dc6b8:8"]]
+ 008ddb08 ["INT_ADD", "register:40f0:8", ["const:8ddb08:8", "const:4:8"]]
+ 008ddb08 ["CALL", null, ["callee:008dc6b8:8"]]
- 008dda24 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 008dda24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 008dda78 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 008dda78 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f90e0498e996fd8fc5dad56508e3e37b"></a>

### [`008ddc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008ddc58.md) → [`008ddcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddcac.md) FUN_008ddcac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`008ddfa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008ddfa0.md) · 呼出先 1件 [`008dc120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dc/008dc120.md)
- 新版 呼出元 1件 [`008ddff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddff4.md) · 呼出先 1件 [`008dc174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dc/008dc174.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 91.30% / 新版 91.30%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ddc84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ddcf8"
      ]
    ]
  ],
  "added": [
    [
      "008ddcd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ddcf8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ddc80 ["INT_LESSEQUAL", "register:105:1", ["register:40a8:8", "register:40a0:8"]]
- 008ddc80 ["INT_SBORROW", "register:106:1", ["register:40a0:8", "register:40a8:8"]]
- 008ddc80 ["INT_SUB", "tmp:0:8", ["register:40a0:8", "register:40a8:8"]]
- 008ddc80 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 008ddc84 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 008ddc98 ["INT_ADD", "register:40f0:8", ["const:8ddc98:8", "const:4:8"]]
- 008ddc98 ["CALL", null, ["callee:008dc174:8"]]
+ 008ddcec ["INT_ADD", "register:40f0:8", ["const:8ddcec:8", "const:4:8"]]
+ 008ddcec ["CALL", null, ["callee:008dc174:8"]]
~~~


<a id="compare-c345910b62f7ca35fd6791fe533df87a"></a>

### [`008ddcb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008ddcb4.md) → [`008ddd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddd08.md) FUN_008ddd08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 13件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0066d0dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066d/0066d0dc.md) [`008dd0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008dd0f4.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 13件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md) [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md)

変更の種類 branch_condition_or_target, call, call_target, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.41% / 新版 93.41%

優先判定に残った影響 `call_target` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ddf78",
      "value": [
        "leaf",
        "ram:9ccbd0:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ddf24",
      "value": [
        "leaf",
        "ram:9ccb7c:8"
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
      "unmatched:008ddcdc",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008ddce0",
      "READ",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008ddce8",
      "WRITE",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "008ddd30",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008ddd34",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "008ddd3c",
      "WRITE",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ddf24 ["INT_ADD", "register:40f0:8", ["const:8ddf24:8", "const:4:8"]]
- 008ddf24 ["CALL", null, ["ram:9ccb7c:8"]]
+ 008ddf78 ["INT_ADD", "register:40f0:8", ["const:8ddf78:8", "const:4:8"]]
+ 008ddf78 ["CALL", null, ["ram:9ccbd0:8"]]
- 008ddcdc ["INT_ADD", "tmp:0:8", ["register:40d8:8", "const:978:8"]]
- 008ddcdc ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 008ddce0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:968:8"]]
- 008ddce0 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-54e86f27eeb4bfa64f631bdf5a9fad8d"></a>

### [`008ddfa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008ddfa0.md) → [`008ddff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddff4.md) FUN_008ddff4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 24件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0047d1bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047d/0047d1bc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 24件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047d1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d1fc.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.36% / 新版 89.36%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 6件, `store_condition` 6件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008de178",
      "incomplete_value": true,
      "site": "008de17c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008de370",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008de31c",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 14,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008de41c",
      "incomplete_value": true,
      "site": "008de424",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 17,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008de07c",
      "READ",
      [
        "storage",
        "002c4158",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008de060",
      "DATA",
      [
        "storage",
        "00332098",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:008de08c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008de108"
      ]
    ]
  ],
  "added": [
    [
      "008de07c",
      "READ",
      [
        "storage",
        "002c4198",
        null,
        "undefined8"
      ]
    ],
    [
      "008de0b4",
      "DATA",
      [
        "storage",
        "00332098",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "008de0e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008de108"
      ]
    ]
  ]
}
~~~


~~~diff
- 008de128 ["INT_ADD", "register:40f0:8", ["const:8de128:8", "const:4:8"]]
- 008de128 ["CALL", null, ["callee:00859ba4:8"]]
+ 008de17c ["INT_ADD", "register:40f0:8", ["const:8de17c:8", "const:4:8"]]
+ 008de17c ["CALL", null, ["callee:00859ba4:8"]]
- 008de31c ["INT_ADD", "register:40f0:8", ["const:8de31c:8", "const:4:8"]]
- 008de31c ["CALL", null, ["ram:47acf4:8"]]
+ 008de370 ["INT_ADD", "register:40f0:8", ["const:8de370:8", "const:4:8"]]
+ 008de370 ["CALL", null, ["ram:47ad34:8"]]
- 008de424 ["INT_ADD", "register:40f0:8", ["const:8de424:8", "const:4:8"]]
- 008de424 ["CALL", null, ["callee:0046ca04:8"]]
+ 008de478 ["INT_ADD", "register:40f0:8", ["const:8de478:8", "const:4:8"]]
+ 008de478 ["CALL", null, ["callee:0046ca04:8"]]
~~~


<a id="compare-2ee39079a61c7bc71db79e0bedf3892a"></a>

### [`008dea58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008de/008dea58.md) → [`008deaac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008de/008deaac.md) FUN_008deaac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 25件 [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00468bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468bdc.md) [`00468c60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468c60.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 25件 [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00468ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.06% / 新版 65.06%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 7件, `unresolved_branch_alignment` 21件, `unresolved_call_alignment` 19件, `unresolved_store_alignment` 14件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008deafc",
      "incomplete_value": true,
      "site": "008deafc",
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
      "definition_site": "008deaa8",
      "incomplete_value": true,
      "site": "008deaa8",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "008deb1c",
      "incomplete_value": true,
      "site": "008deb1c",
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
      "definition_site": "008deac8",
      "incomplete_value": true,
      "site": "008deac8",
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008deb24",
      "incomplete_value": false,
      "site": "008deb34",
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
    "old": {
      "definition_site": "008dead0",
      "incomplete_value": false,
      "site": "008deae0",
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
            "const:e58:8"
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
      "unmatched:008dea98",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008deaf8",
      "READ",
      [
        "storage",
        "00ca4f30",
        null,
        "undefined8"
      ]
    ],
    [
      "008deb0c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "008deaec",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008deaf8",
      "READ",
      [
        "storage",
        "00ca5030",
        null,
        "undefined8"
      ]
    ],
    [
      "008deb0c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008deae0 ["INT_ADD", "register:40f0:8", ["const:8deae0:8", "const:4:8"]]
- 008deae0 ["CALL", null, ["callee:00c586e0:8"]]
+ 008deb34 ["INT_ADD", "register:40f0:8", ["const:8deb34:8", "const:4:8"]]
+ 008deb34 ["CALL", null, ["callee:00c586e0:8"]]
- 008deb58 ["INT_ADD", "register:40f0:8", ["const:8deb58:8", "const:4:8"]]
- 008deb58 ["CALL", null, ["callee:0046ca04:8"]]
+ 008debac ["INT_ADD", "register:40f0:8", ["const:8debac:8", "const:4:8"]]
+ 008debac ["CALL", null, ["callee:0046ca04:8"]]
- 008deb84 ["INT_ADD", "register:40f0:8", ["const:8deb84:8", "const:4:8"]]
- 008deb84 ["CALL", null, ["callee:00469c44:8"]]
+ 008debd8 ["INT_ADD", "register:40f0:8", ["const:8debd8:8", "const:4:8"]]
+ 008debd8 ["CALL", null, ["callee:00469c44:8"]]
~~~


<a id="compare-6d4e3d3c0a5102a4b3bfba4849867fce"></a>

### [`008e0a2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e0/008e0a2c.md) → [`008e0a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0a80.md) FUN_008e0a80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008e05f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e0/008e05f4.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`008e0648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0648.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e0a8c",
      "incomplete_value": false,
      "site": "008e0a90",
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
      "definition_site": "008e0a38",
      "incomplete_value": false,
      "site": "008e0a3c",
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
      "008e0a8c",
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
      "008e0a8c",
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
- 008e0a3c ["INT_ADD", "register:40f0:8", ["const:8e0a3c:8", "const:4:8"]]
- 008e0a3c ["CALL", null, ["callee:0043b7b8:8"]]
+ 008e0a90 ["INT_ADD", "register:40f0:8", ["const:8e0a90:8", "const:4:8"]]
+ 008e0a90 ["CALL", null, ["callee:0043b7b8:8"]]
- 008e0a38 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008e0a38 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e0a38 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e0a38 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e0a8c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008e0a8c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e0a8c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e0a8c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b4ef37e7c88bcf51b3b1946e959bbd5a"></a>

### [`008e0c30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e0/008e0c30.md) → [`008e0c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0c84.md) FUN_008e0c84

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008ddcb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008ddcb4.md) · 呼出先 13件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00633374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00633/00633374.md) [`007581d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00758/007581d0.md) [`008636dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00863/008636dc.md)
- 新版 呼出元 1件 [`008ddd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008ddd08.md) · 呼出先 13件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) [`00758228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00758/00758228.md) [`00863734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00863/00863734.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.69% / 新版 82.69%

優先判定に残った影響 `call_argument_candidate` 36件, `store_destination` 7件, `store_value` 27件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e0cbc",
      "incomplete_value": false,
      "site": "008e0cc8",
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
            "const:190:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e0c68",
      "incomplete_value": false,
      "site": "008e0c74",
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
            "const:c0:8"
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
      "definition_site": "008e0d04",
      "incomplete_value": true,
      "site": "008e0d04",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3ce:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e0cb0",
      "incomplete_value": true,
      "site": "008e0cb0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:38e:8"
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
      "definition_site": "008e0d1c",
      "incomplete_value": true,
      "site": "008e0d1c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b1000:8"
              ],
              [
                "leaf",
                "const:f47:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e0cc8",
      "incomplete_value": true,
      "site": "008e0cc8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b1000:8"
              ],
              [
                "leaf",
                "const:f16:8"
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
      "008e0cc8",
      "DATA",
      [
        "storage",
        "00c850c0",
        null,
        "pointer"
      ]
    ],
    [
      "008e0cd4",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008e0cf4",
      "READ",
      [
        "storage",
        "002b638e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008e0cc8",
      "DATA",
      [
        "storage",
        "00c85190",
        null,
        "pointer"
      ]
    ],
    [
      "008e0cd4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008e0cf4",
      "READ",
      [
        "storage",
        "002b63ce",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e0d20 ["COPY", "register:0:8", ["register:4040:8"]]
- 008e0d20 ["INT_ADD", "register:40f0:8", ["const:8e0d20:8", "const:4:8"]]
- 008e0d20 ["CALLIND", null, ["register:0:8"]]
+ 008e0d74 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008e0d74 ["INT_ADD", "register:40f0:8", ["const:8e0d74:8", "const:4:8"]]
+ 008e0d74 ["CALLIND", null, ["register:0:8"]]
- 008e0dd0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008e0dd0 ["INT_ADD", "register:40f0:8", ["const:8e0dd0:8", "const:4:8"]]
- 008e0dd0 ["CALLIND", null, ["register:0:8"]]
+ 008e0e24 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008e0e24 ["INT_ADD", "register:40f0:8", ["const:8e0e24:8", "const:4:8"]]
+ 008e0e24 ["CALLIND", null, ["register:0:8"]]
- 008e0e60 ["INT_ADD", "register:40f0:8", ["const:8e0e60:8", "const:4:8"]]
- 008e0e60 ["CALL", null, ["callee:00c53da0:8"]]
+ 008e0eb4 ["INT_ADD", "register:40f0:8", ["const:8e0eb4:8", "const:4:8"]]
+ 008e0eb4 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-c6f7ddc708f4ef0e87fb65bf8f315a57"></a>

### [`008e1914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e1/008e1914.md) → [`008e1968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e1/008e1968.md) FUN_008e1968

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00682324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682324.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e1980",
      "incomplete_value": false,
      "site": "008e1984",
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
    "old": {
      "definition_site": "008e192c",
      "incomplete_value": false,
      "site": "008e1930",
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
            "const:330:8"
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
      "definition_site": "008e19bc",
      "incomplete_value": false,
      "site": "008e19c0",
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
    "old": {
      "definition_site": "008e1968",
      "incomplete_value": false,
      "site": "008e196c",
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
            "const:810:8"
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
      "008e1984",
      "DATA",
      [
        "storage",
        "00c78330",
        null,
        "pointer"
      ]
    ],
    [
      "008e19c0",
      "DATA",
      [
        "storage",
        "00c74810",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008e1984",
      "DATA",
      [
        "storage",
        "00c78400",
        null,
        "pointer"
      ]
    ],
    [
      "008e19c0",
      "DATA",
      [
        "storage",
        "00c748e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e192c ["COPY", "tmp:0:8", ["const:330:8"]]
- 008e192c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e192c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e192c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e1980 ["COPY", "tmp:0:8", ["const:400:8"]]
+ 008e1980 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e1980 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e1980 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008e1940 ["INT_ADD", "register:40f0:8", ["const:8e1940:8", "const:4:8"]]
- 008e1940 ["CALL", null, ["callee:00c53da0:8"]]
+ 008e1994 ["INT_ADD", "register:40f0:8", ["const:8e1994:8", "const:4:8"]]
+ 008e1994 ["CALL", null, ["callee:00c53da0:8"]]
- 008e1954 ["COPY", "register:0:8", ["register:4040:8"]]
- 008e1954 ["INT_ADD", "register:40f0:8", ["const:8e1954:8", "const:4:8"]]
- 008e1954 ["CALLIND", null, ["register:0:8"]]
+ 008e19a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008e19a8 ["INT_ADD", "register:40f0:8", ["const:8e19a8:8", "const:4:8"]]
+ 008e19a8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-10de9f1e9b81e8d983049126d760b8fa"></a>

### [`008e19b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e1/008e19b4.md) → [`008e1a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e1/008e1a08.md) _INIT_173

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e1a44",
      "incomplete_value": true,
      "site": "008e1a60",
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
      "definition_site": "008e19f0",
      "incomplete_value": true,
      "site": "008e1a0c",
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
    "kind": "store_value",
    "new": {
      "definition_site": "008e1a68",
      "incomplete_value": true,
      "site": "008e1a84",
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
      "definition_site": "008e1a14",
      "incomplete_value": true,
      "site": "008e1a30",
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
      "definition_site": "008e1a88",
      "incomplete_value": true,
      "site": "008e1aa4",
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
      "definition_site": "008e1a34",
      "incomplete_value": true,
      "site": "008e1a50",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008e1a44",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "008e1a68",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "008e1a88",
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
      "008e1a44",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008e1a68",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "008e1a88",
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
- 008e1aa8 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 008e1aa8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008e1aa8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008e1aa8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008e1afc ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 008e1afc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008e1afc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008e1afc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008e1b14 ["INT_ADD", "register:40f0:8", ["const:8e1b14:8", "const:4:8"]]
- 008e1b14 ["CALL", null, ["callee:0043b838:8"]]
+ 008e1b68 ["INT_ADD", "register:40f0:8", ["const:8e1b68:8", "const:4:8"]]
+ 008e1b68 ["CALL", null, ["callee:0043b838:8"]]
- 008e1b50 ["INT_ADD", "register:40f0:8", ["const:8e1b50:8", "const:4:8"]]
- 008e1b50 ["CALL", null, ["callee:0043b838:8"]]
+ 008e1ba4 ["INT_ADD", "register:40f0:8", ["const:8e1ba4:8", "const:4:8"]]
+ 008e1ba4 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-cadbaf0a114dfbd5f3a2010a264dc93d"></a>

### [`008e1d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e1/008e1d44.md) → [`008e1d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e1/008e1d98.md) FUN_008e1d98

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008e5f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e5/008e5f7c.md) · 呼出先 13件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`008e5fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5fd0.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 88.55% / 新版 88.55%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e1de4",
      "incomplete_value": false,
      "site": "008e1dec",
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
    "old": {
      "definition_site": "008e1d90",
      "incomplete_value": false,
      "site": "008e1d98",
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
            "const:d38:8"
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
      "definition_site": "008e1e10",
      "incomplete_value": true,
      "site": "008e1e20",
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
                "const:297:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e1dbc",
      "incomplete_value": true,
      "site": "008e1dcc",
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
                "const:266:8"
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
      "definition_site": "008e1e24",
      "incomplete_value": true,
      "site": "008e1e24",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008e1dd0",
      "incomplete_value": true,
      "site": "008e1dd0",
      "value": [
        "LOAD",
        "8",
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
      "008e1dec",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "008e1e10",
      "READ",
      [
        "storage",
        "002b4266",
        null,
        "string"
      ]
    ],
    [
      "008e1e14",
      "READ",
      [
        "storage",
        "002b4275",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008e1dec",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "008e1e10",
      "READ",
      [
        "storage",
        "002b4297",
        null,
        "string"
      ]
    ],
    [
      "008e1e14",
      "READ",
      [
        "storage",
        "002b42a6",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e1d7c ["INT_ADD", "register:40f0:8", ["const:8e1d7c:8", "const:4:8"]]
- 008e1d7c ["CALL", null, ["callee:00487e60:8"]]
+ 008e1dd0 ["INT_ADD", "register:40f0:8", ["const:8e1dd0:8", "const:4:8"]]
+ 008e1dd0 ["CALL", null, ["callee:00487e60:8"]]
- 008e1dec ["INT_ADD", "register:40f0:8", ["const:8e1dec:8", "const:4:8"]]
- 008e1dec ["CALL", null, ["callee:00b11188:8"]]
+ 008e1e40 ["INT_ADD", "register:40f0:8", ["const:8e1e40:8", "const:4:8"]]
+ 008e1e40 ["CALL", null, ["callee:00b11188:8"]]
- 008e1d90 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 008e1d90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e1d90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e1d90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e1de4 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 008e1de4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e1de4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e1de4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8d826c6a8d166a2796500e96bdc74b6e"></a>

### [`008e28bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e2/008e28bc.md) → [`008e2910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2910.md) FUN_008e2910

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008e5f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e5/008e5f7c.md) · 呼出先 23件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md)
- 新版 呼出元 1件 [`008e5fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5fd0.md) · 呼出先 23件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 93.70% / 新版 93.70%

優先判定に残った影響 `store_destination` 1件, `store_value` 11件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e2954",
      "incomplete_value": false,
      "site": "008e295c",
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
    "old": {
      "definition_site": "008e2900",
      "incomplete_value": false,
      "site": "008e2908",
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
            "const:d38:8"
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
      "definition_site": "008e2974",
      "incomplete_value": true,
      "site": "008e2980",
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
                "const:763:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e2920",
      "incomplete_value": true,
      "site": "008e292c",
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
                "const:7b7:8"
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
      "definition_site": "008e2aa0",
      "incomplete_value": true,
      "site": "008e2aa0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bd1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e2a4c",
      "incomplete_value": true,
      "site": "008e2a4c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c2d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 31,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008e295c",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "008e2974",
      "READ",
      [
        "storage",
        "002b87b7",
        null,
        "string"
      ]
    ],
    [
      "008e2a90",
      "READ",
      [
        "storage",
        "002abc2d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008e295c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "008e2974",
      "READ",
      [
        "storage",
        "002b8763",
        null,
        "string"
      ]
    ],
    [
      "008e2a90",
      "READ",
      [
        "storage",
        "002abbd1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e29f8 ["INT_ADD", "register:40f0:8", ["const:8e29f8:8", "const:4:8"]]
- 008e29f8 ["CALL", null, ["callee:00c57f80:8"]]
+ 008e2a4c ["INT_ADD", "register:40f0:8", ["const:8e2a4c:8", "const:4:8"]]
+ 008e2a4c ["CALL", null, ["callee:00c57f80:8"]]
- 008e2cb8 ["INT_ADD", "register:40f0:8", ["const:8e2cb8:8", "const:4:8"]]
- 008e2cb8 ["CALL", null, ["callee:00488698:8"]]
+ 008e2d0c ["INT_ADD", "register:40f0:8", ["const:8e2d0c:8", "const:4:8"]]
+ 008e2d0c ["CALL", null, ["callee:00488698:8"]]
- 008e2de4 ["INT_ADD", "register:40f0:8", ["const:8e2de4:8", "const:4:8"]]
- 008e2de4 ["CALL", null, ["callee:00c57f80:8"]]
+ 008e2e38 ["INT_ADD", "register:40f0:8", ["const:8e2e38:8", "const:4:8"]]
+ 008e2e38 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-c073e64aafb03bad5e5266d98e6ae1fb"></a>

### [`008e33ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e3/008e33ac.md) → [`008e3400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3400.md) FUN_008e3400

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008e66ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e6/008e66ac.md) · 呼出先 22件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6f30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f30.md) [`008b6fec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6fec.md)
- 新版 呼出元 1件 [`008e6700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e6/008e6700.md) · 呼出先 22件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f88.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md)

変更の種類 branch_value, call_argument_candidate, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.87% / 新版 95.87%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e36c8",
      "incomplete_value": false,
      "site": "008e36c8",
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
    "old": {
      "definition_site": "008e3674",
      "incomplete_value": false,
      "site": "008e3674",
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
            "const:e0:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e3820",
      "incomplete_value": false,
      "site": "008e3820",
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
    "old": {
      "definition_site": "008e37cc",
      "incomplete_value": false,
      "site": "008e37cc",
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
            "const:160:8"
          ]
        ]
      ]
    },
    "ordinal": 45,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e3a10",
      "incomplete_value": true,
      "site": "008e3a10",
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
      "definition_site": "008e39bc",
      "incomplete_value": true,
      "site": "008e39bc",
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
    "ordinal": 60,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008e3444",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008e3450",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008e3458",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008e3444",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008e3450",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008e3458",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e340c ["INT_ADD", "register:40f0:8", ["const:8e340c:8", "const:4:8"]]
- 008e340c ["CALL", null, ["callee:00c586e0:8"]]
+ 008e3460 ["INT_ADD", "register:40f0:8", ["const:8e3460:8", "const:4:8"]]
+ 008e3460 ["CALL", null, ["callee:00c586e0:8"]]
- 008e341c ["INT_ADD", "register:40f0:8", ["const:8e341c:8", "const:4:8"]]
- 008e341c ["CALL", null, ["callee:00851550:8"]]
+ 008e3470 ["INT_ADD", "register:40f0:8", ["const:8e3470:8", "const:4:8"]]
+ 008e3470 ["CALL", null, ["callee:00851550:8"]]
- 008e3470 ["INT_ADD", "register:40f0:8", ["const:8e3470:8", "const:4:8"]]
- 008e3470 ["CALL", null, ["callee:00a46950:8"]]
+ 008e34c4 ["INT_ADD", "register:40f0:8", ["const:8e34c4:8", "const:4:8"]]
+ 008e34c4 ["CALL", null, ["callee:00a46950:8"]]
~~~


<a id="compare-d84aa3e8a2afe357f9f4f7a5c3d63072"></a>

### [`008e3d50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e3/008e3d50.md) → [`008e3da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3da4.md) FUN_008e3da4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006b3480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3480.md) · 呼出先 21件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046a250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a250.md)
- 新版 呼出元 1件 [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) · 呼出先 21件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046a290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a290.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.53% / 新版 99.53%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008e3df0",
      "incomplete_value": true,
      "site": "008e3df0",
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
      "definition_site": "008e3d9c",
      "incomplete_value": true,
      "site": "008e3d9c",
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
      "definition_site": "008e3df8",
      "incomplete_value": false,
      "site": "008e3e08",
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
    "old": {
      "definition_site": "008e3da4",
      "incomplete_value": false,
      "site": "008e3db4",
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
            "const:e58:8"
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
      "definition_site": "008e3e00",
      "incomplete_value": false,
      "site": "008e3e08",
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
    "old": {
      "definition_site": "008e3dac",
      "incomplete_value": false,
      "site": "008e3db4",
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
            "const:810:8"
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
      "008e3dec",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008e3df8",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008e3e00",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008e3dec",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008e3df8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008e3e00",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e3db4 ["INT_ADD", "register:40f0:8", ["const:8e3db4:8", "const:4:8"]]
- 008e3db4 ["CALL", null, ["callee:00c586e0:8"]]
+ 008e3e08 ["INT_ADD", "register:40f0:8", ["const:8e3e08:8", "const:4:8"]]
+ 008e3e08 ["CALL", null, ["callee:00c586e0:8"]]
- 008e3e08 ["INT_ADD", "register:40f0:8", ["const:8e3e08:8", "const:4:8"]]
- 008e3e08 ["CALL", null, ["callee:0046cac4:8"]]
+ 008e3e5c ["INT_ADD", "register:40f0:8", ["const:8e3e5c:8", "const:4:8"]]
+ 008e3e5c ["CALL", null, ["callee:0046cac4:8"]]
- 008e3d98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 008e3d98 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 008e3dec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 008e3dec ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3969bfe7dce978347c6d5a0e6f70e398"></a>

### [`008e47f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e4/008e47f8.md) → [`008e484c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e484c.md) FUN_008e484c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b29a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b29a8.md) · 呼出先 11件 [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00597e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597e08.md) [`00597e48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597e48.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`006b2a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2a00.md) · 呼出先 11件 [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00597e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e48.md) [`00597e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e88.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.11% / 新版 98.11%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e48e0",
      "value": [
        "leaf",
        "ram:a84cb8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e488c",
      "value": [
        "leaf",
        "ram:a84c48:8"
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
      "site": "008e4918",
      "value": [
        "leaf",
        "ram:a84cd8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e48c4",
      "value": [
        "leaf",
        "ram:a84c68:8"
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
      "008e48e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84c48"
      ]
    ],
    [
      "008e4918",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84c68"
      ]
    ]
  ],
  "added": [
    [
      "008e48e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84cb8"
      ]
    ],
    [
      "008e4918",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84cd8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e4870 ["INT_ADD", "register:40f0:8", ["const:8e4870:8", "const:4:8"]]
- 008e4870 ["CALL", null, ["callee:00a35bec:8"]]
+ 008e48c4 ["INT_ADD", "register:40f0:8", ["const:8e48c4:8", "const:4:8"]]
+ 008e48c4 ["CALL", null, ["callee:00a35bec:8"]]
- 008e488c ["INT_ADD", "register:40f0:8", ["const:8e488c:8", "const:4:8"]]
- 008e488c ["CALL", null, ["ram:a84c48:8"]]
+ 008e48e0 ["INT_ADD", "register:40f0:8", ["const:8e48e0:8", "const:4:8"]]
+ 008e48e0 ["CALL", null, ["ram:a84cb8:8"]]
- 008e48c4 ["INT_ADD", "register:40f0:8", ["const:8e48c4:8", "const:4:8"]]
- 008e48c4 ["CALL", null, ["ram:a84c68:8"]]
+ 008e4918 ["INT_ADD", "register:40f0:8", ["const:8e4918:8", "const:4:8"]]
+ 008e4918 ["CALL", null, ["ram:a84cd8:8"]]
~~~


<a id="compare-8b9d286912994fff6329450fdf75d99e"></a>

### [`008e49a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e4/008e49a0.md) → [`008e49f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e49f4.md) FUN_008e49f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008e9c8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9c8c.md) · 呼出先 26件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 1件 [`008e9ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9ce0.md) · 呼出先 26件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 94.38% / 新版 94.38%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 1件, `store_destination` 7件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e4b7c",
      "incomplete_value": true,
      "site": "008e4b90",
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
                "const:2ae000:8"
              ],
              [
                "leaf",
                "const:ab8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e4b28",
      "incomplete_value": true,
      "site": "008e4b3c",
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
                "const:2ae000:8"
              ],
              [
                "leaf",
                "const:b14:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 32,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e4b94",
      "incomplete_value": true,
      "site": "008e4b94",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008e4b40",
      "incomplete_value": true,
      "site": "008e4b40",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 33,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008e4fe0",
      "incomplete_value": false,
      "site": "008e4fe0",
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
                "const:ca5000:8"
              ],
              [
                "leaf",
                "const:0:8"
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
      "definition_site": "008e4f8c",
      "incomplete_value": false,
      "site": "008e4f8c",
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
                "const:ca4000:8"
              ],
              [
                "leaf",
                "const:f00:8"
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
    "ordinal": 53,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008e4b68",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008e4b7c",
      "READ",
      [
        "storage",
        "002aeb14",
        null,
        "string"
      ]
    ],
    [
      "008e4b80",
      "READ",
      [
        "storage",
        "002aeb21",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008e4b68",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008e4b7c",
      "READ",
      [
        "storage",
        "002aeab8",
        null,
        "string"
      ]
    ],
    [
      "008e4b80",
      "READ",
      [
        "storage",
        "002aeac5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e4b48 ["INT_ADD", "register:40f0:8", ["const:8e4b48:8", "const:4:8"]]
- 008e4b48 ["CALL", null, ["ram:71d1ac:8"]]
+ 008e4b9c ["INT_ADD", "register:40f0:8", ["const:8e4b9c:8", "const:4:8"]]
+ 008e4b9c ["CALL", null, ["ram:71d204:8"]]
- 008e4b88 ["INT_ADD", "register:40f0:8", ["const:8e4b88:8", "const:4:8"]]
- 008e4b88 ["CALL", null, ["callee:0047e64c:8"]]
+ 008e4bdc ["INT_ADD", "register:40f0:8", ["const:8e4bdc:8", "const:4:8"]]
+ 008e4bdc ["CALL", null, ["callee:0047e64c:8"]]
- 008e4f68 ["INT_ADD", "register:40f0:8", ["const:8e4f68:8", "const:4:8"]]
- 008e4f68 ["CALL", null, ["callee:00c57f20:8"]]
+ 008e4fbc ["INT_ADD", "register:40f0:8", ["const:8e4fbc:8", "const:4:8"]]
+ 008e4fbc ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-5e73138370023607c747fd604c0f333f"></a>

### [`008e51e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e5/008e51e4.md) → [`008e5238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5238.md) FUN_008e5238

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008ea2bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea2bc.md) · 呼出先 20件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`006df544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006df/006df544.md)
- 新版 呼出元 1件 [`008ea310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea310.md) · 呼出先 20件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`006df59c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006df/006df59c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 4件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e52a8",
      "incomplete_value": true,
      "site": "008e52b8",
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
                "const:2f9000:8"
              ],
              [
                "leaf",
                "const:ad0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e5254",
      "incomplete_value": true,
      "site": "008e5264",
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
                "const:2f9000:8"
              ],
              [
                "leaf",
                "const:a90:8"
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
      "definition_site": "008e52a8",
      "incomplete_value": true,
      "site": "008e52b8",
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
      "definition_site": "008e5254",
      "incomplete_value": true,
      "site": "008e5264",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e5958",
      "incomplete_value": true,
      "site": "008e5958",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:58b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e5904",
      "incomplete_value": true,
      "site": "008e5904",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 85,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008e52a8",
      "READ",
      [
        "storage",
        "002f9a90",
        null,
        null
      ]
    ],
    [
      "008e52a8",
      "READ",
      [
        "storage",
        "002f9aa0",
        null,
        null
      ]
    ],
    [
      "unmatched:008e5370",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e5498"
      ]
    ]
  ],
  "added": [
    [
      "008e52a8",
      "READ",
      [
        "storage",
        "002f9ad0",
        null,
        null
      ]
    ],
    [
      "008e52a8",
      "READ",
      [
        "storage",
        "002f9ae0",
        null,
        null
      ]
    ],
    [
      "008e53c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e5498"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e58d4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008e58d4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008e58d4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008e58d4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 008e5928 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 008e5928 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008e5928 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008e5928 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 008e5928 ["INT_ADD", "register:40f0:8", ["const:8e5928:8", "const:4:8"]]
- 008e5928 ["CALL", null, ["callee:00c58030:8"]]
+ 008e597c ["INT_ADD", "register:40f0:8", ["const:8e597c:8", "const:4:8"]]
+ 008e597c ["CALL", null, ["callee:00c58030:8"]]
- 008e5220 ["INT_ADD", "register:40f0:8", ["const:8e5220:8", "const:4:8"]]
- 008e5220 ["CALL", null, ["callee:00851550:8"]]
+ 008e5274 ["INT_ADD", "register:40f0:8", ["const:8e5274:8", "const:4:8"]]
+ 008e5274 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-a68e0745e9f89ee0a79999a1fad83ae6"></a>

### [`008e5f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e5/008e5f7c.md) → [`008e5fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5fd0.md) FUN_008e5fd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006b29a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b29a8.md) · 呼出先 24件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`004476f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/004476f4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md)
- 新版 呼出元 1件 [`006b2a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2a00.md) · 呼出先 24件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.89% / 新版 82.89%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e608c",
      "incomplete_value": true,
      "site": "008e6094",
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
            "const:58:8"
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
      "definition_site": "008e6090",
      "incomplete_value": false,
      "site": "008e6094",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e6074",
      "incomplete_value": true,
      "site": "008e6094",
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
      "008e6058",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:008e6018",
      "READ",
      [
        "storage",
        "002a7f00",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008e601c",
      "READ",
      [
        "storage",
        "002a7f06",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008e6058",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008e606c",
      "READ",
      [
        "storage",
        "002a7ea4",
        null,
        "string"
      ]
    ],
    [
      "008e6070",
      "READ",
      [
        "storage",
        "002a7eaa",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e6040 ["INT_ADD", "register:40f0:8", ["const:8e6040:8", "const:4:8"]]
- 008e6040 ["CALL", null, ["callee:00447f34:8"]]
+ 008e6094 ["INT_ADD", "register:40f0:8", ["const:8e6094:8", "const:4:8"]]
+ 008e6094 ["CALL", null, ["callee:00447f34:8"]]
- 008e6090 ["INT_ADD", "register:40f0:8", ["const:8e6090:8", "const:4:8"]]
- 008e6090 ["CALL", null, ["callee:0047e64c:8"]]
+ 008e60e4 ["INT_ADD", "register:40f0:8", ["const:8e60e4:8", "const:4:8"]]
+ 008e60e4 ["CALL", null, ["callee:0047e64c:8"]]
- 008e60e4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008e60e4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008e60e4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008e60e4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 008e6138 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 008e6138 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008e6138 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008e6138 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-ab978f498b5a612cf92d8a8f49ad81a2"></a>

### [`008e66ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e6/008e66ac.md) → [`008e6700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e6/008e6700.md) FUN_008e6700

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b2b5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b2b5c.md) · 呼出先 42件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0044e988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044e/0044e988.md) [`0044fcbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044fcbc.md) [`0046d974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d974.md)
- 新版 呼出元 1件 [`006b2bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2bb4.md) · 呼出先 42件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0044e9c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044e9c8.md) [`0044fcfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044fcfc.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.76% / 新版 94.76%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 10件, `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e67f8",
      "incomplete_value": true,
      "site": "008e67f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "008e67a4",
      "incomplete_value": true,
      "site": "008e67a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008e689c",
      "incomplete_value": true,
      "site": "008e689c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ac0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008e6848",
      "incomplete_value": true,
      "site": "008e6848",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b14:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008e68b4",
      "incomplete_value": false,
      "site": "008e68b4",
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
    "old": {
      "definition_site": "008e6860",
      "incomplete_value": false,
      "site": "008e6860",
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
            "const:5e0:8"
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
      "008e6790",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "uleb128"
      ]
    ],
    [
      "008e67a8",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "uleb128"
      ]
    ],
    [
      "008e67b0",
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
      "008e6790",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "008e67a8",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "008e67b0",
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
- 008e6778 ["INT_ADD", "register:40f0:8", ["const:8e6778:8", "const:4:8"]]
- 008e6778 ["CALL", null, ["ram:48ccf8:8"]]
+ 008e67cc ["INT_ADD", "register:40f0:8", ["const:8e67cc:8", "const:4:8"]]
+ 008e67cc ["CALL", null, ["ram:48cd38:8"]]
- 008e68a4 ["INT_ADD", "register:40f0:8", ["const:8e68a4:8", "const:4:8"]]
- 008e68a4 ["CALL", null, ["ram:48ccf8:8"]]
+ 008e68f8 ["INT_ADD", "register:40f0:8", ["const:8e68f8:8", "const:4:8"]]
+ 008e68f8 ["CALL", null, ["ram:48cd38:8"]]
- 008e6900 ["INT_ADD", "register:40f0:8", ["const:8e6900:8", "const:4:8"]]
- 008e6900 ["CALL", null, ["ram:47acf4:8"]]
+ 008e6954 ["INT_ADD", "register:40f0:8", ["const:8e6954:8", "const:4:8"]]
+ 008e6954 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-d6fdd48146857fc14dfcac209d55b2f1"></a>

### [`008e73d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e7/008e73d0.md) → [`008e7424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e7/008e7424.md) FUN_008e7424

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006b3480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3480.md) · 呼出先 15件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00468f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f4c.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046af0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af0c.md)
- 新版 呼出元 1件 [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) · 呼出先 15件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468f8c.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md)

変更の種類 branch_value, call_argument_candidate, constant, local_def_use, operands_and_dependencies

命令の説明率　旧版 98.10% / 新版 98.10%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008e7468",
      "incomplete_value": true,
      "site": "008e7468",
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
      "definition_site": "008e7414",
      "incomplete_value": true,
      "site": "008e7414",
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
      "definition_site": "008e7470",
      "incomplete_value": false,
      "site": "008e7480",
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
    "old": {
      "definition_site": "008e741c",
      "incomplete_value": false,
      "site": "008e742c",
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
            "const:e58:8"
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
      "definition_site": "008e7478",
      "incomplete_value": false,
      "site": "008e7480",
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
    "old": {
      "definition_site": "008e7424",
      "incomplete_value": false,
      "site": "008e742c",
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
            "const:810:8"
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
      "008e7464",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008e7470",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008e7478",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008e7464",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008e7470",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008e7478",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e742c ["INT_ADD", "register:40f0:8", ["const:8e742c:8", "const:4:8"]]
- 008e742c ["CALL", null, ["callee:00c586e0:8"]]
+ 008e7480 ["INT_ADD", "register:40f0:8", ["const:8e7480:8", "const:4:8"]]
+ 008e7480 ["CALL", null, ["callee:00c586e0:8"]]
- 008e7480 ["INT_ADD", "register:40f0:8", ["const:8e7480:8", "const:4:8"]]
- 008e7480 ["CALL", null, ["callee:00470120:8"]]
+ 008e74d4 ["INT_ADD", "register:40f0:8", ["const:8e74d4:8", "const:4:8"]]
+ 008e74d4 ["CALL", null, ["callee:00470120:8"]]
- 008e795c ["INT_ADD", "register:40f0:8", ["const:8e795c:8", "const:4:8"]]
- 008e795c ["CALL", null, ["callee:00489f8c:8"]]
+ 008e79b0 ["INT_ADD", "register:40f0:8", ["const:8e79b0:8", "const:4:8"]]
+ 008e79b0 ["CALL", null, ["callee:00489f8c:8"]]
~~~


<a id="compare-7f1b7be6ef1a94e167256e5665a99ccc"></a>

### [`008e7a68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e7/008e7a68.md) → [`008e7abc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e7/008e7abc.md) FUN_008e7abc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006b3480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3480.md) · 呼出先 15件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046a8e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a8e8.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md)
- 新版 呼出元 1件 [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) · 呼出先 15件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.69% / 新版 77.69%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 1件, `unresolved_branch_alignment` 20件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 13件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008e81bc",
      "incomplete_value": true,
      "site": "008e81bc",
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
      "definition_site": "008e8168",
      "incomplete_value": true,
      "site": "008e8168",
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
    "ordinal": 68,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008e7b98",
      "incomplete_value": true,
      "site": "008e7b9c",
      "value": [
        "INT_LEFT",
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
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008e7cf0",
      "incomplete_value": true,
      "site": "008e7cf4",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:008e7ad0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e7b2c"
      ]
    ],
    [
      "008e7db0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008e7d78"
      ]
    ],
    [
      "unmatched:008e7d64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e82b0"
      ]
    ]
  ],
  "added": [
    [
      "008e7b24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e7b2c"
      ]
    ],
    [
      "008e7db0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e7dcc"
      ]
    ],
    [
      "008e7db8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e82b0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e7b48 ["INT_ADD", "register:40f0:8", ["const:8e7b48:8", "const:4:8"]]
- 008e7b48 ["CALL", null, ["callee:00c57f60:8"]]
+ 008e7b9c ["INT_ADD", "register:40f0:8", ["const:8e7b9c:8", "const:4:8"]]
+ 008e7b9c ["CALL", null, ["callee:00c57f60:8"]]
- 008e7cf4 ["INT_ADD", "register:40f0:8", ["const:8e7cf4:8", "const:4:8"]]
- 008e7cf4 ["CALL", null, ["callee:00c57f80:8"]]
+ 008e7d48 ["INT_ADD", "register:40f0:8", ["const:8e7d48:8", "const:4:8"]]
+ 008e7d48 ["CALL", null, ["callee:00c57f80:8"]]
- 008e7d94 ["INT_ADD", "register:40f0:8", ["const:8e7d94:8", "const:4:8"]]
- 008e7d94 ["CALL", null, ["callee:00c580d0:8"]]
+ 008e7de8 ["INT_ADD", "register:40f0:8", ["const:8e7de8:8", "const:4:8"]]
+ 008e7de8 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-08dfd18a9080c45798ca3d9afa9a45b1"></a>

### [`008e8264`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8264.md) → [`008e82b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e82b8.md) FUN_008e82b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008e30f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e3/008e30f4.md) [`008e49a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e4/008e49a0.md) [`008e8650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8650.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 3件 [`008e3148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3148.md) [`008e49f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e49f4.md) [`008e86a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e86a4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "008e8270",
      "incomplete_value": false,
      "site": "008e8274",
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
      "008e82c4",
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
      "008e82c4",
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
- 008e8274 ["INT_ADD", "register:40f0:8", ["const:8e8274:8", "const:4:8"]]
- 008e8274 ["CALL", null, ["callee:0043b7b8:8"]]
+ 008e82c8 ["INT_ADD", "register:40f0:8", ["const:8e82c8:8", "const:4:8"]]
+ 008e82c8 ["CALL", null, ["callee:0043b7b8:8"]]
- 008e8270 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008e8270 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e8270 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e8270 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e82c4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008e82c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e82c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e82c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-06f7e927af905e2a128c8752360fdec0"></a>

### [`008e854c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e854c.md) → [`008e85a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e85a0.md) FUN_008e85a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008e8368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8368.md) [`008e8e40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8e40.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`008e83bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e83bc.md) [`008e8e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8e94.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "008e8558",
      "incomplete_value": false,
      "site": "008e855c",
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
      "008e85ac",
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
      "008e85ac",
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
- 008e855c ["INT_ADD", "register:40f0:8", ["const:8e855c:8", "const:4:8"]]
- 008e855c ["CALL", null, ["callee:0043b7b8:8"]]
+ 008e85b0 ["INT_ADD", "register:40f0:8", ["const:8e85b0:8", "const:4:8"]]
+ 008e85b0 ["CALL", null, ["callee:0043b7b8:8"]]
- 008e8558 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008e8558 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e8558 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e8558 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e85ac ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008e85ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e85ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e85ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-48bc20df42ea0a65986e2917c3156798"></a>

### [`008e863c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e863c.md) → [`008e8690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8690.md) FUN_008e8690

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008e4590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e4/008e4590.md) [`008e8cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8cb8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`008e45e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45e4.md) [`008e8d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8d0c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "008e8648",
      "incomplete_value": false,
      "site": "008e864c",
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
      "008e869c",
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
      "008e869c",
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
- 008e864c ["INT_ADD", "register:40f0:8", ["const:8e864c:8", "const:4:8"]]
- 008e864c ["CALL", null, ["callee:0043b7b8:8"]]
+ 008e86a0 ["INT_ADD", "register:40f0:8", ["const:8e86a0:8", "const:4:8"]]
+ 008e86a0 ["CALL", null, ["callee:0043b7b8:8"]]
- 008e8648 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008e8648 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e8648 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e8648 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e869c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008e869c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e869c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e869c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ad2248caf7c1a9e9bc6f34eaf7f21663"></a>

### [`008e880c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e880c.md) → [`008e8860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8860.md) FUN_008e8860

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008e28bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e2/008e28bc.md) [`008e4590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e4/008e4590.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`008e2910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2910.md) [`008e45e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45e4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "008e8818",
      "incomplete_value": false,
      "site": "008e881c",
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
      "008e886c",
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
      "008e886c",
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
- 008e881c ["INT_ADD", "register:40f0:8", ["const:8e881c:8", "const:4:8"]]
- 008e881c ["CALL", null, ["callee:0043b7b8:8"]]
+ 008e8870 ["INT_ADD", "register:40f0:8", ["const:8e8870:8", "const:4:8"]]
+ 008e8870 ["CALL", null, ["callee:0043b7b8:8"]]
- 008e8818 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008e8818 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e8818 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e8818 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e886c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008e886c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e886c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e886c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a45eb4697322f0a3dff31c8a9301a83f"></a>

### [`008e8a04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8a04.md) → [`008e8a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8a58.md) FUN_008e8a58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008e8820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8820.md) [`008e8f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8f88.md) [`008ea598`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea598.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 3件 [`008e8874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8874.md) [`008e8fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8fdc.md) [`008ea5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea5ec.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "008e8a10",
      "incomplete_value": false,
      "site": "008e8a14",
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
      "008e8a64",
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
      "008e8a64",
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
- 008e8a14 ["INT_ADD", "register:40f0:8", ["const:8e8a14:8", "const:4:8"]]
- 008e8a14 ["CALL", null, ["callee:0043b7b8:8"]]
+ 008e8a68 ["INT_ADD", "register:40f0:8", ["const:8e8a68:8", "const:4:8"]]
+ 008e8a68 ["CALL", null, ["callee:0043b7b8:8"]]
- 008e8a10 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008e8a10 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e8a10 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e8a10 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e8a64 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008e8a64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e8a64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e8a64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a1bb3ad62d40aad97656c851dcd678b8"></a>

### [`008e8c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8c50.md) → [`008e8ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8ca4.md) FUN_008e8ca4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008e8a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8a6c.md) [`008e9138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9138.md) [`008ea39c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea39c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 3件 [`008e8ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8ac0.md) [`008e918c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e918c.md) [`008ea3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea3f0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "008e8c5c",
      "incomplete_value": false,
      "site": "008e8c60",
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
      "008e8cb0",
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
      "008e8cb0",
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
- 008e8c60 ["INT_ADD", "register:40f0:8", ["const:8e8c60:8", "const:4:8"]]
- 008e8c60 ["CALL", null, ["callee:0043b7b8:8"]]
+ 008e8cb4 ["INT_ADD", "register:40f0:8", ["const:8e8cb4:8", "const:4:8"]]
+ 008e8cb4 ["CALL", null, ["callee:0043b7b8:8"]]
- 008e8c5c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008e8c5c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008e8c5c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008e8c5c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008e8cb0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008e8cb0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008e8cb0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008e8cb0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-1803aa3526a4b65782807fcc6a0a59c3"></a>

### [`008e8f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8f88.md) → [`008e8fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8fdc.md) FUN_008e8fdc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`008e28bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e2/008e28bc.md) · 呼出先 4件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`008e8a04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8a04.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008e2910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2910.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008e8a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8a58.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 98.78% / 新版 98.78%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 008e8fb4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 008e8fb4 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 008e9008 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 008e9008 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
- 008e8fe8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008e8fe8 ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 008e903c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008e903c ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
- 008e8ff0 ["INT_ADD", "register:40f0:8", ["const:8e8ff0:8", "const:4:8"]]
- 008e8ff0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008e9044 ["INT_ADD", "register:40f0:8", ["const:8e9044:8", "const:4:8"]]
+ 008e9044 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-d230f6cfdd12626926bb8a2d2ce510f8"></a>

### [`008e90d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e90d0.md) → [`008e9124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9124.md) FUN_008e9124

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `unresolved_store_alignment` 1件

~~~diff
- 008e90f0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 008e90f0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 008e9144 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008e9144 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 008e9110 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:10:8"]]
- 008e9110 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 008e9120 ["INT_ADD", "register:40f0:8", ["const:8e9120:8", "const:4:8"]]
- 008e9120 ["CALL", null, ["callee:00c57f80:8"]]
+ 008e9174 ["INT_ADD", "register:40f0:8", ["const:8e9174:8", "const:4:8"]]
+ 008e9174 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-b01bd9cf736dfdbdf80755785a2c7b39"></a>

### [`008e9138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9138.md) → [`008e918c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e918c.md) FUN_008e918c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`008e28bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e2/008e28bc.md) · 呼出先 4件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`008e8c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e8/008e8c50.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008e2910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2910.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008e8ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8ca4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 95.12% / 新版 95.12%

アドレスに依存する影響 `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e9224",
      "value": [
        "live",
        "register:4050:8"
      ]
    },
    "old": {
      "definition_site": "008e91bc",
      "incomplete_value": true,
      "site": "008e91d0",
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
            "register:40a0:8"
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
      "unmatched:008e9164",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e92c8"
      ]
    ]
  ],
  "added": [
    [
      "008e91b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e92c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9160 ["INT_RIGHT", "register:4050:8", ["register:4040:8", "const:3b:8"]]
- 008e9164 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 008e9164 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
- 008e91a0 ["INT_ADD", "register:40f0:8", ["const:8e91a0:8", "const:4:8"]]
- 008e91a0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008e91f4 ["INT_ADD", "register:40f0:8", ["const:8e91f4:8", "const:4:8"]]
+ 008e91f4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-9390ef2514f5a4ff2ab7db9870cda63e"></a>

### [`008e9280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9280.md) → [`008e92d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e92d4.md) FUN_008e92d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e9298 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008e9298 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 008e92ec ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008e92ec ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 008e92a0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 008e92a0 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 008e92f4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008e92f4 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 008e92c8 ["INT_RIGHT", "tmp:0:4", ["register:4050:4", "const:0:4"]]
- 008e92c8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008e92c8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008e92c8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 008e931c ["INT_RIGHT", "tmp:0:4", ["register:4050:4", "const:0:4"]]
+ 008e931c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008e931c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008e931c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-8f0348505124b034db7c0160c63d4250"></a>

### [`008e92ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e92ec.md) → [`008e9340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9340.md) FUN_008e9340

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
    "old": {
      "definition_site": "008e9310",
      "incomplete_value": false,
      "site": "008e9310",
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
            "const:e0:8"
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
      "008e9364",
      "DATA",
      [
        "storage",
        "00c850e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e9364",
      "DATA",
      [
        "storage",
        "00c851b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9300 ["INT_ADD", "register:40f0:8", ["const:8e9300:8", "const:4:8"]]
- 008e9300 ["CALL", null, ["callee:00c57f60:8"]]
+ 008e9354 ["INT_ADD", "register:40f0:8", ["const:8e9354:8", "const:4:8"]]
+ 008e9354 ["CALL", null, ["callee:00c57f60:8"]]
- 008e930c ["COPY", "tmp:0:8", ["const:e0:8"]]
- 008e930c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e930c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e930c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e9360 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 008e9360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b8b10e7c93eed1dc39f8b6b807ce03bd"></a>

### [`008e9320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9320.md) → [`008e9374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9374.md) FUN_008e9374

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
    "old": {
      "definition_site": "008e932c",
      "incomplete_value": false,
      "site": "008e932c",
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
            "const:e0:8"
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
      "008e9380",
      "DATA",
      [
        "storage",
        "00c850e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e9380",
      "DATA",
      [
        "storage",
        "00c851b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9328 ["COPY", "tmp:0:8", ["const:e0:8"]]
- 008e9328 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008e9328 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008e9328 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008e937c ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 008e937c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008e937c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008e937c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1b0fd038fc9b8c9b2bb18e33fe1a8b83"></a>

### [`008e933c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e933c.md) → [`008e9390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9390.md) FUN_008e9390

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`008e3c8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e3/008e3c8c.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`008e3ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3ce0.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.23% / 新版 89.23%

優先判定に残った影響 `call_target` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e9448",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e93f4",
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
      "site": "008e9454",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e9400",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "unmatched:008e933c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008e9340",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008e9344",
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
      "008e9390",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008e9394",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008e9398",
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
- 008e93f4 ["INT_ADD", "register:40f0:8", ["const:8e93f4:8", "const:4:8"]]
- 008e93f4 ["CALL", null, ["ram:47acf4:8"]]
+ 008e9448 ["INT_ADD", "register:40f0:8", ["const:8e9448:8", "const:4:8"]]
+ 008e9448 ["CALL", null, ["ram:47ad34:8"]]
- 008e9400 ["INT_ADD", "register:40f0:8", ["const:8e9400:8", "const:4:8"]]
- 008e9400 ["CALL", null, ["ram:47acf4:8"]]
+ 008e9454 ["INT_ADD", "register:40f0:8", ["const:8e9454:8", "const:4:8"]]
+ 008e9454 ["CALL", null, ["ram:47ad34:8"]]
- 008e933c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008e933c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008e933c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 008e933c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-b1e52d10692b9e84c4a91376c48481ae"></a>

### [`008e946c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e946c.md) → [`008e94c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e94c0.md) FUN_008e94c0

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
    "old": {
      "definition_site": "008e9490",
      "incomplete_value": false,
      "site": "008e9490",
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
            "const:160:8"
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
      "008e94e4",
      "DATA",
      [
        "storage",
        "00c85160",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e94e4",
      "DATA",
      [
        "storage",
        "00c85230",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9480 ["INT_ADD", "register:40f0:8", ["const:8e9480:8", "const:4:8"]]
- 008e9480 ["CALL", null, ["callee:00c57f60:8"]]
+ 008e94d4 ["INT_ADD", "register:40f0:8", ["const:8e94d4:8", "const:4:8"]]
+ 008e94d4 ["CALL", null, ["callee:00c57f60:8"]]
- 008e948c ["COPY", "tmp:0:8", ["const:160:8"]]
- 008e948c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e948c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e948c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e94e0 ["COPY", "tmp:0:8", ["const:230:8"]]
+ 008e94e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e94e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e94e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ccedd59cfdb904b120a72acdfc3311c7"></a>

### [`008e94a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e94a0.md) → [`008e94f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e94f4.md) FUN_008e94f4

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
    "old": {
      "definition_site": "008e94ac",
      "incomplete_value": false,
      "site": "008e94ac",
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
            "const:160:8"
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
      "008e9500",
      "DATA",
      [
        "storage",
        "00c85160",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e9500",
      "DATA",
      [
        "storage",
        "00c85230",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e94a8 ["COPY", "tmp:0:8", ["const:160:8"]]
- 008e94a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008e94a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008e94a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008e94fc ["COPY", "tmp:0:8", ["const:230:8"]]
+ 008e94fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008e94fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008e94fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b2e345fed102736abf7410b1f6b16e7a"></a>

### [`008e94bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e94bc.md) → [`008e9510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9510.md) FUN_008e9510

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b7a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a10.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)

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
      "site": "008e9530",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e94dc",
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
      "site": "008e953c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e94e8",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008e9530",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008e953c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008e9530",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008e953c",
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
- 008e94dc ["INT_ADD", "register:40f0:8", ["const:8e94dc:8", "const:4:8"]]
- 008e94dc ["CALL", null, ["ram:47acf4:8"]]
+ 008e9530 ["INT_ADD", "register:40f0:8", ["const:8e9530:8", "const:4:8"]]
+ 008e9530 ["CALL", null, ["ram:47ad34:8"]]
- 008e94e8 ["INT_ADD", "register:40f0:8", ["const:8e94e8:8", "const:4:8"]]
- 008e94e8 ["CALL", null, ["ram:47acf4:8"]]
+ 008e953c ["INT_ADD", "register:40f0:8", ["const:8e953c:8", "const:4:8"]]
+ 008e953c ["CALL", null, ["ram:47ad34:8"]]
- 008e94fc ["INT_ADD", "register:40f0:8", ["const:8e94fc:8", "const:4:8"]]
- 008e94fc ["CALL", null, ["callee:00851550:8"]]
+ 008e9550 ["INT_ADD", "register:40f0:8", ["const:8e9550:8", "const:4:8"]]
+ 008e9550 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-13074e9cebfc25d4f21ef3795a32ce37"></a>

### [`008e9568`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9568.md) → [`008e95bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e95bc.md) FUN_008e95bc

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
    "old": {
      "definition_site": "008e9588",
      "incomplete_value": false,
      "site": "008e958c",
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
            "const:1e0:8"
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
      "008e95e0",
      "DATA",
      [
        "storage",
        "00c851e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e95e0",
      "DATA",
      [
        "storage",
        "00c852b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e957c ["INT_ADD", "register:40f0:8", ["const:8e957c:8", "const:4:8"]]
- 008e957c ["CALL", null, ["callee:00c57f60:8"]]
+ 008e95d0 ["INT_ADD", "register:40f0:8", ["const:8e95d0:8", "const:4:8"]]
+ 008e95d0 ["CALL", null, ["callee:00c57f60:8"]]
- 008e9588 ["COPY", "tmp:0:8", ["const:1e0:8"]]
- 008e9588 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9588 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9588 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e95dc ["COPY", "tmp:0:8", ["const:2b0:8"]]
+ 008e95dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e95dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e95dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-db76faba6fd155697bda93de9047c34d"></a>

### [`008e95a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e95a0.md) → [`008e95f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e95f4.md) FUN_008e95f4

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
    "old": {
      "definition_site": "008e95a4",
      "incomplete_value": false,
      "site": "008e95a8",
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
            "const:1e0:8"
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
      "008e95fc",
      "DATA",
      [
        "storage",
        "00c851e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e95fc",
      "DATA",
      [
        "storage",
        "00c852b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e95a4 ["COPY", "tmp:0:8", ["const:1e0:8"]]
- 008e95a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e95a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e95a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e95f8 ["COPY", "tmp:0:8", ["const:2b0:8"]]
+ 008e95f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e95f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e95f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-62c1a284f7bd850e48e46735e34aece9"></a>

### [`008e95c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e95c0.md) → [`008e9614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9614.md) FUN_008e9614

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 17件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.07% / 新版 92.07%

優先判定に残った影響 `call_target` 2件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "008e96f0",
      "incomplete_value": true,
      "site": "008e96f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7dc:8"
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
    "old": {
      "definition_site": "008e9714",
      "incomplete_value": false,
      "site": "008e9714",
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
            "const:2d0:8"
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
    "old": {
      "definition_site": "008e9774",
      "incomplete_value": true,
      "site": "008e9774",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5e8:8"
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
      "008e9650",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008e966c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008e96e0",
      "DATA",
      [
        "storage",
        "004362dc",
        null,
        "byte[63]"
      ]
    ]
  ],
  "added": [
    [
      "008e9650",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008e966c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008e96e0",
      "DATA",
      [
        "storage",
        "004362dc",
        "fde_004362dc",
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e95fc ["INT_ADD", "register:40f0:8", ["const:8e95fc:8", "const:4:8"]]
- 008e95fc ["CALL", null, ["ram:47acf4:8"]]
+ 008e9650 ["INT_ADD", "register:40f0:8", ["const:8e9650:8", "const:4:8"]]
+ 008e9650 ["CALL", null, ["ram:47ad34:8"]]
- 008e9618 ["INT_ADD", "register:40f0:8", ["const:8e9618:8", "const:4:8"]]
- 008e9618 ["CALL", null, ["ram:47acf4:8"]]
+ 008e966c ["INT_ADD", "register:40f0:8", ["const:8e966c:8", "const:4:8"]]
+ 008e966c ["CALL", null, ["ram:47ad34:8"]]
- 008e969c ["INT_ADD", "register:40f0:8", ["const:8e969c:8", "const:4:8"]]
- 008e969c ["CALL", null, ["callee:00851550:8"]]
+ 008e96f0 ["INT_ADD", "register:40f0:8", ["const:8e96f0:8", "const:4:8"]]
+ 008e96f0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-4da7303f206f0657e9f93fa75ec7c93e"></a>

### [`008e9aac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9aac.md) → [`008e9b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9b00.md) FUN_008e9b00

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
    "old": {
      "definition_site": "008e9acc",
      "incomplete_value": false,
      "site": "008e9ad0",
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
            "const:250:8"
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
      "008e9b24",
      "DATA",
      [
        "storage",
        "00c85250",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e9b24",
      "DATA",
      [
        "storage",
        "00c85320",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9ac0 ["INT_ADD", "register:40f0:8", ["const:8e9ac0:8", "const:4:8"]]
- 008e9ac0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008e9b14 ["INT_ADD", "register:40f0:8", ["const:8e9b14:8", "const:4:8"]]
+ 008e9b14 ["CALL", null, ["callee:00c57f60:8"]]
- 008e9acc ["COPY", "tmp:0:8", ["const:250:8"]]
- 008e9acc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9acc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9acc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e9b20 ["COPY", "tmp:0:8", ["const:320:8"]]
+ 008e9b20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9b20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9b20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-715bf3a35b4407cfc62f788809890c86"></a>

### [`008e9ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9ae4.md) → [`008e9b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9b38.md) FUN_008e9b38

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
    "old": {
      "definition_site": "008e9ae8",
      "incomplete_value": false,
      "site": "008e9aec",
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
            "const:250:8"
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
      "008e9b40",
      "DATA",
      [
        "storage",
        "00c85250",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e9b40",
      "DATA",
      [
        "storage",
        "00c85320",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9ae8 ["COPY", "tmp:0:8", ["const:250:8"]]
- 008e9ae8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9ae8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9ae8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e9b3c ["COPY", "tmp:0:8", ["const:320:8"]]
+ 008e9b3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9b3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9b3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-22e9db08d3c0a31bd203309fc6c967af"></a>

### [`008e9b04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9b04.md) → [`008e9b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9b58.md) FUN_008e9b58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "008e9b80",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e9b2c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008e9b80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008e9b80",
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
- 008e9b2c ["INT_ADD", "register:40f0:8", ["const:8e9b2c:8", "const:4:8"]]
- 008e9b2c ["CALL", null, ["ram:47acf4:8"]]
+ 008e9b80 ["INT_ADD", "register:40f0:8", ["const:8e9b80:8", "const:4:8"]]
+ 008e9b80 ["CALL", null, ["ram:47ad34:8"]]
- 008e9b28 ["INT_ADD", "register:40f0:8", ["const:8e9b28:8", "const:4:8"]]
- 008e9b28 ["CALL", null, ["callee:008b91d0:8"]]
+ 008e9b7c ["INT_ADD", "register:40f0:8", ["const:8e9b7c:8", "const:4:8"]]
+ 008e9b7c ["CALL", null, ["callee:008b91d0:8"]]
~~~


<a id="compare-f27014af86fa7cc51bd4f5293e4a845e"></a>

### [`008e9b70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9b70.md) → [`008e9bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9bc4.md) FUN_008e9bc4

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
    "old": {
      "definition_site": "008e9b90",
      "incomplete_value": false,
      "site": "008e9b94",
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
            "const:2d0:8"
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
      "008e9be8",
      "DATA",
      [
        "storage",
        "00c852d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e9be8",
      "DATA",
      [
        "storage",
        "00c853a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9b84 ["INT_ADD", "register:40f0:8", ["const:8e9b84:8", "const:4:8"]]
- 008e9b84 ["CALL", null, ["callee:00c57f60:8"]]
+ 008e9bd8 ["INT_ADD", "register:40f0:8", ["const:8e9bd8:8", "const:4:8"]]
+ 008e9bd8 ["CALL", null, ["callee:00c57f60:8"]]
- 008e9b90 ["COPY", "tmp:0:8", ["const:2d0:8"]]
- 008e9b90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9b90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9b90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e9be4 ["COPY", "tmp:0:8", ["const:3a0:8"]]
+ 008e9be4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9be4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9be4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-535627dcf0a4fa2166eded2c085644a0"></a>

### [`008e9ba8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9ba8.md) → [`008e9bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9bfc.md) FUN_008e9bfc

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
    "old": {
      "definition_site": "008e9bac",
      "incomplete_value": false,
      "site": "008e9bb0",
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
            "const:2d0:8"
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
      "008e9c04",
      "DATA",
      [
        "storage",
        "00c852d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e9c04",
      "DATA",
      [
        "storage",
        "00c853a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9bac ["COPY", "tmp:0:8", ["const:2d0:8"]]
- 008e9bac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9bac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9bac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e9c00 ["COPY", "tmp:0:8", ["const:3a0:8"]]
+ 008e9c00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9c00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9c00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5e8605e89089633ccbd1225f222c87c4"></a>

### [`008e9bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9bc8.md) → [`008e9c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9c1c.md) FUN_008e9c1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "008e9c44",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e9bf0",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008e9c44",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008e9c44",
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
- 008e9bf0 ["INT_ADD", "register:40f0:8", ["const:8e9bf0:8", "const:4:8"]]
- 008e9bf0 ["CALL", null, ["ram:47acf4:8"]]
+ 008e9c44 ["INT_ADD", "register:40f0:8", ["const:8e9c44:8", "const:4:8"]]
+ 008e9c44 ["CALL", null, ["ram:47ad34:8"]]
- 008e9bec ["INT_ADD", "register:40f0:8", ["const:8e9bec:8", "const:4:8"]]
- 008e9bec ["CALL", null, ["callee:008b91d0:8"]]
+ 008e9c40 ["INT_ADD", "register:40f0:8", ["const:8e9c40:8", "const:4:8"]]
+ 008e9c40 ["CALL", null, ["callee:008b91d0:8"]]
~~~


<a id="compare-986f94a9fb9b01e2a53293bf5206fb4f"></a>

### [`008e9c34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9c34.md) → [`008e9c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9c88.md) FUN_008e9c88

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
    "old": {
      "definition_site": "008e9c54",
      "incomplete_value": false,
      "site": "008e9c58",
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
            "const:350:8"
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
      "008e9cac",
      "DATA",
      [
        "storage",
        "00c85350",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e9cac",
      "DATA",
      [
        "storage",
        "00c85420",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9c48 ["INT_ADD", "register:40f0:8", ["const:8e9c48:8", "const:4:8"]]
- 008e9c48 ["CALL", null, ["callee:00c57f60:8"]]
+ 008e9c9c ["INT_ADD", "register:40f0:8", ["const:8e9c9c:8", "const:4:8"]]
+ 008e9c9c ["CALL", null, ["callee:00c57f60:8"]]
- 008e9c54 ["COPY", "tmp:0:8", ["const:350:8"]]
- 008e9c54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9c54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9c54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e9ca8 ["COPY", "tmp:0:8", ["const:420:8"]]
+ 008e9ca8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9ca8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9ca8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cf02967c352ee84a45b87f403ebd381d"></a>

### [`008e9c6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9c6c.md) → [`008e9cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9cc0.md) FUN_008e9cc0

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
    "old": {
      "definition_site": "008e9c70",
      "incomplete_value": false,
      "site": "008e9c74",
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
            "const:350:8"
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
      "008e9cc8",
      "DATA",
      [
        "storage",
        "00c85350",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e9cc8",
      "DATA",
      [
        "storage",
        "00c85420",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9c70 ["COPY", "tmp:0:8", ["const:350:8"]]
- 008e9c70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9c70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9c70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e9cc4 ["COPY", "tmp:0:8", ["const:420:8"]]
+ 008e9cc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9cc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9cc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-53ec5872c8d2c900c5e5c025560d7fd7"></a>

### [`008e9c8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9c8c.md) → [`008e9ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9ce0.md) FUN_008e9ce0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`008e3c8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e3/008e3c8c.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008e3ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3ce0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.50% / 新版 97.50%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e9d10",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008e9cbc",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008e9d10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008e9d10",
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
- 008e9cbc ["INT_ADD", "register:40f0:8", ["const:8e9cbc:8", "const:4:8"]]
- 008e9cbc ["CALL", null, ["ram:47acf4:8"]]
+ 008e9d10 ["INT_ADD", "register:40f0:8", ["const:8e9d10:8", "const:4:8"]]
+ 008e9d10 ["CALL", null, ["ram:47ad34:8"]]
- 008e9cb8 ["INT_ADD", "register:40f0:8", ["const:8e9cb8:8", "const:4:8"]]
- 008e9cb8 ["CALL", null, ["callee:008b91d0:8"]]
+ 008e9d0c ["INT_ADD", "register:40f0:8", ["const:8e9d0c:8", "const:4:8"]]
+ 008e9d0c ["CALL", null, ["callee:008b91d0:8"]]
- 008e9ce0 ["INT_ADD", "register:40f0:8", ["const:8e9ce0:8", "const:4:8"]]
- 008e9ce0 ["CALL", null, ["callee:008e3ce0:8"]]
+ 008e9d34 ["INT_ADD", "register:40f0:8", ["const:8e9d34:8", "const:4:8"]]
+ 008e9d34 ["CALL", null, ["callee:008e3ce0:8"]]
~~~


<a id="compare-1e1d2c951b17c8937831e7c484c7dde4"></a>

### [`008e9d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9d58.md) → [`008e9dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9dac.md) FUN_008e9dac

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
    "old": {
      "definition_site": "008e9d7c",
      "incomplete_value": false,
      "site": "008e9d7c",
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
            "const:3e0:8"
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
      "008e9dd0",
      "DATA",
      [
        "storage",
        "00c853e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e9dd0",
      "DATA",
      [
        "storage",
        "00c854b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9d6c ["INT_ADD", "register:40f0:8", ["const:8e9d6c:8", "const:4:8"]]
- 008e9d6c ["CALL", null, ["callee:00c57f60:8"]]
+ 008e9dc0 ["INT_ADD", "register:40f0:8", ["const:8e9dc0:8", "const:4:8"]]
+ 008e9dc0 ["CALL", null, ["callee:00c57f60:8"]]
- 008e9d78 ["COPY", "tmp:0:8", ["const:3e0:8"]]
- 008e9d78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008e9d78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008e9d78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008e9dcc ["COPY", "tmp:0:8", ["const:4b0:8"]]
+ 008e9dcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9dcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008e9dcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d8d1ae6b294abe67a1a1d6d2aa1f89cf"></a>

### [`008e9d8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9d8c.md) → [`008e9de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9de0.md) FUN_008e9de0

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
    "old": {
      "definition_site": "008e9d98",
      "incomplete_value": false,
      "site": "008e9d98",
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
            "const:3e0:8"
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
      "008e9dec",
      "DATA",
      [
        "storage",
        "00c853e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008e9dec",
      "DATA",
      [
        "storage",
        "00c854b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9d94 ["COPY", "tmp:0:8", ["const:3e0:8"]]
- 008e9d94 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008e9d94 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008e9d94 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008e9de8 ["COPY", "tmp:0:8", ["const:4b0:8"]]
+ 008e9de8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008e9de8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008e9de8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-aa3f8ecfb6a1dd33bcaa1ab09996f057"></a>

### [`008e9da8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e9da8.md) → [`008e9dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9dfc.md) FUN_008e9dfc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9858.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 84.57% / 新版 84.57%

優先判定に残った影響 `call_target` 2件, `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "008e9e84",
      "incomplete_value": true,
      "site": "008e9e84",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:955:8"
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
    "old": {
      "definition_site": "008e9e88",
      "incomplete_value": true,
      "site": "008e9e88",
      "value": [
        "LOAD",
        "8",
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
    "old": {
      "definition_site": "008e9ea0",
      "incomplete_value": false,
      "site": "008e9ea0",
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
            "const:4d0:8"
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
      "008e9e34",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008e9e50",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008e9e98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008e9ed8"
      ]
    ]
  ],
  "added": [
    [
      "008e9e34",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008e9e50",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008e9e98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008e9f2c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008e9de0 ["INT_ADD", "register:40f0:8", ["const:8e9de0:8", "const:4:8"]]
- 008e9de0 ["CALL", null, ["ram:47acf4:8"]]
+ 008e9e34 ["INT_ADD", "register:40f0:8", ["const:8e9e34:8", "const:4:8"]]
+ 008e9e34 ["CALL", null, ["ram:47ad34:8"]]
- 008e9dfc ["INT_ADD", "register:40f0:8", ["const:8e9dfc:8", "const:4:8"]]
- 008e9dfc ["CALL", null, ["ram:47acf4:8"]]
+ 008e9e50 ["INT_ADD", "register:40f0:8", ["const:8e9e50:8", "const:4:8"]]
+ 008e9e50 ["CALL", null, ["ram:47ad34:8"]]
- 008e9e30 ["INT_ADD", "register:40f0:8", ["const:8e9e30:8", "const:4:8"]]
- 008e9e30 ["CALL", null, ["callee:00851550:8"]]
+ 008e9e84 ["INT_ADD", "register:40f0:8", ["const:8e9e84:8", "const:4:8"]]
+ 008e9e84 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-75102eda224d030f172e758f16ba0825"></a>

### [`008ea0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea0f4.md) → [`008ea148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea148.md) FUN_008ea148

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
    "old": {
      "definition_site": "008ea118",
      "incomplete_value": false,
      "site": "008ea118",
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
            "const:450:8"
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
      "008ea16c",
      "DATA",
      [
        "storage",
        "00c85450",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea16c",
      "DATA",
      [
        "storage",
        "00c85520",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea108 ["INT_ADD", "register:40f0:8", ["const:8ea108:8", "const:4:8"]]
- 008ea108 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ea15c ["INT_ADD", "register:40f0:8", ["const:8ea15c:8", "const:4:8"]]
+ 008ea15c ["CALL", null, ["callee:00c57f60:8"]]
- 008ea114 ["COPY", "tmp:0:8", ["const:450:8"]]
- 008ea114 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ea114 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ea114 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ea168 ["COPY", "tmp:0:8", ["const:520:8"]]
+ 008ea168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6d7dcf215b6fa95f5f83d028910a7d97"></a>

### [`008ea128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea128.md) → [`008ea17c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea17c.md) FUN_008ea17c

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
    "old": {
      "definition_site": "008ea134",
      "incomplete_value": false,
      "site": "008ea134",
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
            "const:450:8"
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
      "008ea188",
      "DATA",
      [
        "storage",
        "00c85450",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea188",
      "DATA",
      [
        "storage",
        "00c85520",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea130 ["COPY", "tmp:0:8", ["const:450:8"]]
- 008ea130 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ea130 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ea130 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ea184 ["COPY", "tmp:0:8", ["const:520:8"]]
+ 008ea184 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea184 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea184 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-34edf14a435a35059607bea560d91f73"></a>

### [`008ea144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea144.md) → [`008ea198`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea198.md) FUN_008ea198

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "008ea1c0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ea16c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008ea1c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008ea1c0",
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
- 008ea16c ["INT_ADD", "register:40f0:8", ["const:8ea16c:8", "const:4:8"]]
- 008ea16c ["CALL", null, ["ram:47acf4:8"]]
+ 008ea1c0 ["INT_ADD", "register:40f0:8", ["const:8ea1c0:8", "const:4:8"]]
+ 008ea1c0 ["CALL", null, ["ram:47ad34:8"]]
- 008ea168 ["INT_ADD", "register:40f0:8", ["const:8ea168:8", "const:4:8"]]
- 008ea168 ["CALL", null, ["callee:008b91d0:8"]]
+ 008ea1bc ["INT_ADD", "register:40f0:8", ["const:8ea1bc:8", "const:4:8"]]
+ 008ea1bc ["CALL", null, ["callee:008b91d0:8"]]
~~~


<a id="compare-92ebb6997632ae72092d683dbd6f7aba"></a>

### [`008ea1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea1b0.md) → [`008ea204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea204.md) FUN_008ea204

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
    "old": {
      "definition_site": "008ea1d4",
      "incomplete_value": false,
      "site": "008ea1d4",
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
            "const:4d0:8"
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
      "008ea228",
      "DATA",
      [
        "storage",
        "00c854d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea228",
      "DATA",
      [
        "storage",
        "00c855a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea1c4 ["INT_ADD", "register:40f0:8", ["const:8ea1c4:8", "const:4:8"]]
- 008ea1c4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ea218 ["INT_ADD", "register:40f0:8", ["const:8ea218:8", "const:4:8"]]
+ 008ea218 ["CALL", null, ["callee:00c57f60:8"]]
- 008ea1d0 ["COPY", "tmp:0:8", ["const:4d0:8"]]
- 008ea1d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ea1d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ea1d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ea224 ["COPY", "tmp:0:8", ["const:5a0:8"]]
+ 008ea224 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea224 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea224 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fcce15a4be801be86af1defaa98511f0"></a>

### [`008ea1e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea1e4.md) → [`008ea238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea238.md) FUN_008ea238

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
    "old": {
      "definition_site": "008ea1f0",
      "incomplete_value": false,
      "site": "008ea1f0",
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
            "const:4d0:8"
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
      "008ea244",
      "DATA",
      [
        "storage",
        "00c854d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea244",
      "DATA",
      [
        "storage",
        "00c855a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea1ec ["COPY", "tmp:0:8", ["const:4d0:8"]]
- 008ea1ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ea1ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ea1ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ea240 ["COPY", "tmp:0:8", ["const:5a0:8"]]
+ 008ea240 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea240 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea240 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-060578a99154e416547464074397381c"></a>

### [`008ea200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea200.md) → [`008ea254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea254.md) FUN_008ea254

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "008ea27c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ea228",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008ea27c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008ea27c",
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
- 008ea228 ["INT_ADD", "register:40f0:8", ["const:8ea228:8", "const:4:8"]]
- 008ea228 ["CALL", null, ["ram:47acf4:8"]]
+ 008ea27c ["INT_ADD", "register:40f0:8", ["const:8ea27c:8", "const:4:8"]]
+ 008ea27c ["CALL", null, ["ram:47ad34:8"]]
- 008ea224 ["INT_ADD", "register:40f0:8", ["const:8ea224:8", "const:4:8"]]
- 008ea224 ["CALL", null, ["callee:008b91d0:8"]]
+ 008ea278 ["INT_ADD", "register:40f0:8", ["const:8ea278:8", "const:4:8"]]
+ 008ea278 ["CALL", null, ["callee:008b91d0:8"]]
~~~


<a id="compare-891a96168cb60e63345b52ca0d0e44f9"></a>

### [`008ea26c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea26c.md) → [`008ea2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea2c0.md) FUN_008ea2c0

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
    "old": {
      "definition_site": "008ea290",
      "incomplete_value": false,
      "site": "008ea290",
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
            "const:550:8"
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
      "008ea2e4",
      "DATA",
      [
        "storage",
        "00c85550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea2e4",
      "DATA",
      [
        "storage",
        "00c85620",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea280 ["INT_ADD", "register:40f0:8", ["const:8ea280:8", "const:4:8"]]
- 008ea280 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ea2d4 ["INT_ADD", "register:40f0:8", ["const:8ea2d4:8", "const:4:8"]]
+ 008ea2d4 ["CALL", null, ["callee:00c57f60:8"]]
- 008ea28c ["COPY", "tmp:0:8", ["const:550:8"]]
- 008ea28c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ea28c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ea28c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ea2e0 ["COPY", "tmp:0:8", ["const:620:8"]]
+ 008ea2e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea2e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea2e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-11ac9294b57c4cae481900e8db23d0bc"></a>

### [`008ea2a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea2a0.md) → [`008ea2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea2f4.md) FUN_008ea2f4

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
    "old": {
      "definition_site": "008ea2ac",
      "incomplete_value": false,
      "site": "008ea2ac",
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
            "const:550:8"
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
      "008ea300",
      "DATA",
      [
        "storage",
        "00c85550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea300",
      "DATA",
      [
        "storage",
        "00c85620",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea2a8 ["COPY", "tmp:0:8", ["const:550:8"]]
- 008ea2a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ea2a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ea2a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ea2fc ["COPY", "tmp:0:8", ["const:620:8"]]
+ 008ea2fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea2fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea2fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1d2b598254191f759eb4ddad8e71490d"></a>

### [`008ea2bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea2bc.md) → [`008ea310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea310.md) FUN_008ea310

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`008e3c8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e3/008e3c8c.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008e3ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3ce0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.83% / 新版 97.83%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ea340",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ea2ec",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008ea340",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008ea340",
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
- 008ea2ec ["INT_ADD", "register:40f0:8", ["const:8ea2ec:8", "const:4:8"]]
- 008ea2ec ["CALL", null, ["ram:47acf4:8"]]
+ 008ea340 ["INT_ADD", "register:40f0:8", ["const:8ea340:8", "const:4:8"]]
+ 008ea340 ["CALL", null, ["ram:47ad34:8"]]
- 008ea2e8 ["INT_ADD", "register:40f0:8", ["const:8ea2e8:8", "const:4:8"]]
- 008ea2e8 ["CALL", null, ["callee:008b91d0:8"]]
+ 008ea33c ["INT_ADD", "register:40f0:8", ["const:8ea33c:8", "const:4:8"]]
+ 008ea33c ["CALL", null, ["callee:008b91d0:8"]]
- 008ea308 ["INT_ADD", "register:40f0:8", ["const:8ea308:8", "const:4:8"]]
- 008ea308 ["CALL", null, ["callee:008e3ce0:8"]]
+ 008ea35c ["INT_ADD", "register:40f0:8", ["const:8ea35c:8", "const:4:8"]]
+ 008ea35c ["CALL", null, ["callee:008e3ce0:8"]]
~~~


<a id="compare-90b1057f24e1b58222cfa8917a4f3879"></a>

### [`008ea790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea790.md) → [`008ea7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea7e4.md) FUN_008ea7e4

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
    "old": {
      "definition_site": "008ea7b4",
      "incomplete_value": false,
      "site": "008ea7b4",
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
            "const:5e0:8"
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
      "008ea808",
      "DATA",
      [
        "storage",
        "00c855e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea808",
      "DATA",
      [
        "storage",
        "00c856b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea7a4 ["INT_ADD", "register:40f0:8", ["const:8ea7a4:8", "const:4:8"]]
- 008ea7a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ea7f8 ["INT_ADD", "register:40f0:8", ["const:8ea7f8:8", "const:4:8"]]
+ 008ea7f8 ["CALL", null, ["callee:00c57f60:8"]]
- 008ea7b0 ["COPY", "tmp:0:8", ["const:5e0:8"]]
- 008ea7b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ea7b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ea7b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ea804 ["COPY", "tmp:0:8", ["const:6b0:8"]]
+ 008ea804 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea804 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea804 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cdcca86bbf5e4968ef59f7792c114153"></a>

### [`008ea7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea7c4.md) → [`008ea818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea818.md) FUN_008ea818

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
    "old": {
      "definition_site": "008ea7d0",
      "incomplete_value": false,
      "site": "008ea7d0",
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
            "const:5e0:8"
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
      "008ea824",
      "DATA",
      [
        "storage",
        "00c855e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea824",
      "DATA",
      [
        "storage",
        "00c856b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea7cc ["COPY", "tmp:0:8", ["const:5e0:8"]]
- 008ea7cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ea7cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ea7cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ea820 ["COPY", "tmp:0:8", ["const:6b0:8"]]
+ 008ea820 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea820 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea820 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-063c1620f6716a7ce225118127b758b7"></a>

### [`008ea7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea7e0.md) → [`008ea834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea834.md) FUN_008ea834

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

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
      "site": "008ea858",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ea804",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008ea858",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008ea858",
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
- 008ea804 ["INT_ADD", "register:40f0:8", ["const:8ea804:8", "const:4:8"]]
- 008ea804 ["CALL", null, ["ram:47acf4:8"]]
+ 008ea858 ["INT_ADD", "register:40f0:8", ["const:8ea858:8", "const:4:8"]]
+ 008ea858 ["CALL", null, ["ram:47ad34:8"]]
- 008ea800 ["INT_ADD", "register:40f0:8", ["const:8ea800:8", "const:4:8"]]
- 008ea800 ["CALL", null, ["callee:008b91d0:8"]]
+ 008ea854 ["INT_ADD", "register:40f0:8", ["const:8ea854:8", "const:4:8"]]
+ 008ea854 ["CALL", null, ["callee:008b91d0:8"]]
~~~


<a id="compare-693074f4797145344750dccad18ba747"></a>

### [`008ea854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea854.md) → [`008ea8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea8a8.md) FUN_008ea8a8

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
    "old": {
      "definition_site": "008ea878",
      "incomplete_value": false,
      "site": "008ea878",
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
      "008ea8cc",
      "DATA",
      [
        "storage",
        "00c85660",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea8cc",
      "DATA",
      [
        "storage",
        "00c85730",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea868 ["INT_ADD", "register:40f0:8", ["const:8ea868:8", "const:4:8"]]
- 008ea868 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ea8bc ["INT_ADD", "register:40f0:8", ["const:8ea8bc:8", "const:4:8"]]
+ 008ea8bc ["CALL", null, ["callee:00c57f60:8"]]
- 008ea874 ["COPY", "tmp:0:8", ["const:660:8"]]
- 008ea874 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ea874 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ea874 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ea8c8 ["COPY", "tmp:0:8", ["const:730:8"]]
+ 008ea8c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea8c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea8c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-35099c373aa568cf97c9b35e7cfbb064"></a>

### [`008ea888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea888.md) → [`008ea8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea8dc.md) FUN_008ea8dc

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
    "old": {
      "definition_site": "008ea894",
      "incomplete_value": false,
      "site": "008ea894",
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
      "008ea8e8",
      "DATA",
      [
        "storage",
        "00c85660",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea8e8",
      "DATA",
      [
        "storage",
        "00c85730",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea890 ["COPY", "tmp:0:8", ["const:660:8"]]
- 008ea890 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ea890 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ea890 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ea8e4 ["COPY", "tmp:0:8", ["const:730:8"]]
+ 008ea8e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea8e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea8e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e392d8a5834b4d3f72257cf6138df7dc"></a>

### [`008ea8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea8a4.md) → [`008ea8f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea8f8.md) FUN_008ea8f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "008ea91c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ea8c8",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008ea91c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008ea91c",
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
- 008ea8c8 ["INT_ADD", "register:40f0:8", ["const:8ea8c8:8", "const:4:8"]]
- 008ea8c8 ["CALL", null, ["ram:47acf4:8"]]
+ 008ea91c ["INT_ADD", "register:40f0:8", ["const:8ea91c:8", "const:4:8"]]
+ 008ea91c ["CALL", null, ["ram:47ad34:8"]]
- 008ea8c4 ["INT_ADD", "register:40f0:8", ["const:8ea8c4:8", "const:4:8"]]
- 008ea8c4 ["CALL", null, ["callee:008b91d0:8"]]
+ 008ea918 ["INT_ADD", "register:40f0:8", ["const:8ea918:8", "const:4:8"]]
+ 008ea918 ["CALL", null, ["callee:008b91d0:8"]]
~~~


<a id="compare-c5c60f6ac0e8f3d5b21691e578feaf73"></a>

### [`008ea948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea948.md) → [`008ea99c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea99c.md) FUN_008ea99c

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
    "old": {
      "definition_site": "008ea96c",
      "incomplete_value": false,
      "site": "008ea96c",
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
            "const:6e0:8"
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
      "008ea9c0",
      "DATA",
      [
        "storage",
        "00c856e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea9c0",
      "DATA",
      [
        "storage",
        "00c857b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea95c ["INT_ADD", "register:40f0:8", ["const:8ea95c:8", "const:4:8"]]
- 008ea95c ["CALL", null, ["callee:00c57f60:8"]]
+ 008ea9b0 ["INT_ADD", "register:40f0:8", ["const:8ea9b0:8", "const:4:8"]]
+ 008ea9b0 ["CALL", null, ["callee:00c57f60:8"]]
- 008ea968 ["COPY", "tmp:0:8", ["const:6e0:8"]]
- 008ea968 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ea968 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ea968 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ea9bc ["COPY", "tmp:0:8", ["const:7b0:8"]]
+ 008ea9bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea9bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ea9bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c556c0e029afceb3163b8d3490bf6fb2"></a>

### [`008ea97c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea97c.md) → [`008ea9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea9d0.md) FUN_008ea9d0

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
    "old": {
      "definition_site": "008ea988",
      "incomplete_value": false,
      "site": "008ea988",
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
            "const:6e0:8"
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
      "008ea9dc",
      "DATA",
      [
        "storage",
        "00c856e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ea9dc",
      "DATA",
      [
        "storage",
        "00c857b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ea984 ["COPY", "tmp:0:8", ["const:6e0:8"]]
- 008ea984 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ea984 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ea984 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ea9d8 ["COPY", "tmp:0:8", ["const:7b0:8"]]
+ 008ea9d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea9d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ea9d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ac3ad7714709a829a6a60bfed54c87a6"></a>

### [`008ea998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea998.md) → [`008ea9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea9ec.md) FUN_008ea9ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "008eaa08",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ea9b4",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008eaa08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008eaa08",
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
- 008ea9b4 ["INT_ADD", "register:40f0:8", ["const:8ea9b4:8", "const:4:8"]]
- 008ea9b4 ["CALL", null, ["ram:47acf4:8"]]
+ 008eaa08 ["INT_ADD", "register:40f0:8", ["const:8eaa08:8", "const:4:8"]]
+ 008eaa08 ["CALL", null, ["ram:47ad34:8"]]
- 008ea9b0 ["INT_ADD", "register:40f0:8", ["const:8ea9b0:8", "const:4:8"]]
- 008ea9b0 ["CALL", null, ["callee:008b91d0:8"]]
+ 008eaa04 ["INT_ADD", "register:40f0:8", ["const:8eaa04:8", "const:4:8"]]
+ 008eaa04 ["CALL", null, ["callee:008b91d0:8"]]
~~~


<a id="compare-f57d49b3e98bda02ae8b1a7c1557e915"></a>

### [`008ea9f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008ea9f8.md) → [`008eaa4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eaa4c.md) FUN_008eaa4c

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
    "old": {
      "definition_site": "008eaa1c",
      "incomplete_value": false,
      "site": "008eaa1c",
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
            "const:760:8"
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
      "008eaa70",
      "DATA",
      [
        "storage",
        "00c85760",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eaa70",
      "DATA",
      [
        "storage",
        "00c85830",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eaa0c ["INT_ADD", "register:40f0:8", ["const:8eaa0c:8", "const:4:8"]]
- 008eaa0c ["CALL", null, ["callee:00c57f60:8"]]
+ 008eaa60 ["INT_ADD", "register:40f0:8", ["const:8eaa60:8", "const:4:8"]]
+ 008eaa60 ["CALL", null, ["callee:00c57f60:8"]]
- 008eaa18 ["COPY", "tmp:0:8", ["const:760:8"]]
- 008eaa18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008eaa18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008eaa18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eaa6c ["COPY", "tmp:0:8", ["const:830:8"]]
+ 008eaa6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eaa6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eaa6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-64d5c7de8c21e9c82d90e55a0c032e63"></a>

### [`008eaa2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008eaa2c.md) → [`008eaa80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eaa80.md) FUN_008eaa80

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
    "old": {
      "definition_site": "008eaa38",
      "incomplete_value": false,
      "site": "008eaa38",
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
            "const:760:8"
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
      "008eaa8c",
      "DATA",
      [
        "storage",
        "00c85760",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eaa8c",
      "DATA",
      [
        "storage",
        "00c85830",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eaa34 ["COPY", "tmp:0:8", ["const:760:8"]]
- 008eaa34 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008eaa34 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008eaa34 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008eaa88 ["COPY", "tmp:0:8", ["const:830:8"]]
+ 008eaa88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008eaa88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008eaa88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b5efd52a818d1b6c929d0c2ed4814fd0"></a>

### [`008eaa48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008eaa48.md) → [`008eaa9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eaa9c.md) FUN_008eaa9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 15件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0052dd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052d/0052dd00.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 96.62% / 新版 96.62%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "008eab30",
      "incomplete_value": true,
      "site": "008eab48",
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
                "const:638:8"
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
    "old": {
      "definition_site": "008eac20",
      "incomplete_value": false,
      "site": "008eac20",
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
            "const:7d0:8"
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
      "site": "008eaae0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008eaa8c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008eaae0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008eab64",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008eab84",
      "READ",
      [
        "storage",
        "002b9638",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008eaae0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008eab64",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008eab84",
      "READ",
      [
        "storage",
        "002b95e4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eaa8c ["INT_ADD", "register:40f0:8", ["const:8eaa8c:8", "const:4:8"]]
- 008eaa8c ["CALL", null, ["ram:47acf4:8"]]
+ 008eaae0 ["INT_ADD", "register:40f0:8", ["const:8eaae0:8", "const:4:8"]]
+ 008eaae0 ["CALL", null, ["ram:47ad34:8"]]
- 008eab10 ["INT_ADD", "register:40f0:8", ["const:8eab10:8", "const:4:8"]]
- 008eab10 ["CALL", null, ["ram:47acf4:8"]]
+ 008eab64 ["INT_ADD", "register:40f0:8", ["const:8eab64:8", "const:4:8"]]
+ 008eab64 ["CALL", null, ["ram:47ad34:8"]]
- 008eab64 ["INT_ADD", "register:40f0:8", ["const:8eab64:8", "const:4:8"]]
- 008eab64 ["CALL", null, ["callee:0071ed58:8"]]
+ 008eabb8 ["INT_ADD", "register:40f0:8", ["const:8eabb8:8", "const:4:8"]]
+ 008eabb8 ["CALL", null, ["callee:0071ed58:8"]]
~~~


<a id="compare-2aa931df92b0092c6084fcc5c7276f45"></a>

### [`008eaecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008eaecc.md) → [`008eaf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eaf20.md) FUN_008eaf20

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
    "old": {
      "definition_site": "008eaef0",
      "incomplete_value": false,
      "site": "008eaef0",
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
            "const:7d0:8"
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
      "008eaf44",
      "DATA",
      [
        "storage",
        "00c857d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eaf44",
      "DATA",
      [
        "storage",
        "00c858a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eaee0 ["INT_ADD", "register:40f0:8", ["const:8eaee0:8", "const:4:8"]]
- 008eaee0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008eaf34 ["INT_ADD", "register:40f0:8", ["const:8eaf34:8", "const:4:8"]]
+ 008eaf34 ["CALL", null, ["callee:00c57f60:8"]]
- 008eaeec ["COPY", "tmp:0:8", ["const:7d0:8"]]
- 008eaeec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008eaeec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008eaeec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eaf40 ["COPY", "tmp:0:8", ["const:8a0:8"]]
+ 008eaf40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eaf40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eaf40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-97a1d97be0dfca250186e5216846dd40"></a>

### [`008eaf00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008eaf00.md) → [`008eaf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eaf54.md) FUN_008eaf54

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
    "old": {
      "definition_site": "008eaf0c",
      "incomplete_value": false,
      "site": "008eaf0c",
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
            "const:7d0:8"
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
      "008eaf60",
      "DATA",
      [
        "storage",
        "00c857d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eaf60",
      "DATA",
      [
        "storage",
        "00c858a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eaf08 ["COPY", "tmp:0:8", ["const:7d0:8"]]
- 008eaf08 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008eaf08 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008eaf08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008eaf5c ["COPY", "tmp:0:8", ["const:8a0:8"]]
+ 008eaf5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008eaf5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008eaf5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b423b19cea87e6afca66a12c07e070cb"></a>

### [`008eaf1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008eaf1c.md) → [`008eaf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eaf70.md) FUN_008eaf70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "008eaf8c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008eaf38",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008eaf8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008eaf8c",
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
- 008eaf38 ["INT_ADD", "register:40f0:8", ["const:8eaf38:8", "const:4:8"]]
- 008eaf38 ["CALL", null, ["ram:47acf4:8"]]
+ 008eaf8c ["INT_ADD", "register:40f0:8", ["const:8eaf8c:8", "const:4:8"]]
+ 008eaf8c ["CALL", null, ["ram:47ad34:8"]]
- 008eaf34 ["INT_ADD", "register:40f0:8", ["const:8eaf34:8", "const:4:8"]]
- 008eaf34 ["CALL", null, ["callee:008b91d0:8"]]
+ 008eaf88 ["INT_ADD", "register:40f0:8", ["const:8eaf88:8", "const:4:8"]]
+ 008eaf88 ["CALL", null, ["callee:008b91d0:8"]]
~~~


<a id="compare-0f3a6b645c746be9e3738d300c15edcb"></a>

### [`008eaf7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008eaf7c.md) → [`008eafd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008eafd0.md) FUN_008eafd0

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
    "old": {
      "definition_site": "008eafa0",
      "incomplete_value": false,
      "site": "008eafa0",
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
            "const:860:8"
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
      "008eaff4",
      "DATA",
      [
        "storage",
        "00c85860",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eaff4",
      "DATA",
      [
        "storage",
        "00c85930",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eaf90 ["INT_ADD", "register:40f0:8", ["const:8eaf90:8", "const:4:8"]]
- 008eaf90 ["CALL", null, ["callee:00c57f60:8"]]
+ 008eafe4 ["INT_ADD", "register:40f0:8", ["const:8eafe4:8", "const:4:8"]]
+ 008eafe4 ["CALL", null, ["callee:00c57f60:8"]]
- 008eaf9c ["COPY", "tmp:0:8", ["const:860:8"]]
- 008eaf9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008eaf9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008eaf9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008eaff0 ["COPY", "tmp:0:8", ["const:930:8"]]
+ 008eaff0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008eaff0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008eaff0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1a6f9eab076b46fd2c041ec1e054005c"></a>

### [`008eafb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008eafb0.md) → [`008eb004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb004.md) FUN_008eb004

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
    "old": {
      "definition_site": "008eafbc",
      "incomplete_value": false,
      "site": "008eafbc",
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
            "const:860:8"
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
      "008eb010",
      "DATA",
      [
        "storage",
        "00c85860",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008eb010",
      "DATA",
      [
        "storage",
        "00c85930",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eafb8 ["COPY", "tmp:0:8", ["const:860:8"]]
- 008eafb8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008eafb8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008eafb8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008eb00c ["COPY", "tmp:0:8", ["const:930:8"]]
+ 008eb00c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb00c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008eb00c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d006108770e1e1126c41e0adca303bbb"></a>

### [`008eafcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008eafcc.md) → [`008eb020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb020.md) FUN_008eb020

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 9件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9290.md)
- 新版 呼出元 0件  · 呼出先 9件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.85% / 新版 93.85%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008eb058",
      "incomplete_value": true,
      "site": "008eb058",
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
      "definition_site": "008eb004",
      "incomplete_value": true,
      "site": "008eb004",
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
    "old": {
      "definition_site": "008eb00c",
      "incomplete_value": false,
      "site": "008eb020",
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
            "const:e58:8"
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
    "old": {
      "definition_site": "008eb014",
      "incomplete_value": false,
      "site": "008eb020",
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
            "const:810:8"
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
      "008eb054",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008eb060",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008eb068",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008eb054",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008eb060",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008eb068",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eb020 ["INT_ADD", "register:40f0:8", ["const:8eb020:8", "const:4:8"]]
- 008eb020 ["CALL", null, ["callee:00c586e0:8"]]
+ 008eb074 ["INT_ADD", "register:40f0:8", ["const:8eb074:8", "const:4:8"]]
+ 008eb074 ["CALL", null, ["callee:00c586e0:8"]]
- 008eb058 ["INT_ADD", "register:40f0:8", ["const:8eb058:8", "const:4:8"]]
- 008eb058 ["CALL", null, ["callee:00468fc8:8"]]
+ 008eb0ac ["INT_ADD", "register:40f0:8", ["const:8eb0ac:8", "const:4:8"]]
+ 008eb0ac ["CALL", null, ["callee:00468fc8:8"]]
- 008eafe8 ["INT_ADD", "register:40f0:8", ["const:8eafe8:8", "const:4:8"]]
- 008eafe8 ["CALL", null, ["callee:008b92e8:8"]]
+ 008eb03c ["INT_ADD", "register:40f0:8", ["const:8eb03c:8", "const:4:8"]]
+ 008eb03c ["CALL", null, ["callee:008b92e8:8"]]
~~~


<a id="compare-7bf9f131d1e08a75a85247b1018d4fdd"></a>

### [`008eb0f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008eb0f8.md) → [`008eb14c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb14c.md) _INIT_174

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.36% / 新版 81.36%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008eb250",
      "incomplete_value": true,
      "site": "008eb258",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008eb30c",
      "incomplete_value": true,
      "site": "008eb310",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008eb304",
      "incomplete_value": true,
      "site": "008eb310",
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
            "const:a0:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:008eb128",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008eb134",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008eb150",
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
      "008eb17c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008eb188",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008eb1a4",
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
- 008eb258 ["INT_ADD", "register:40f0:8", ["const:8eb258:8", "const:4:8"]]
- 008eb258 ["CALL", null, ["callee:0043b838:8"]]
+ 008eb2ac ["INT_ADD", "register:40f0:8", ["const:8eb2ac:8", "const:4:8"]]
+ 008eb2ac ["CALL", null, ["callee:0043b838:8"]]
- 008eb2bc ["INT_ADD", "register:40f0:8", ["const:8eb2bc:8", "const:4:8"]]
- 008eb2bc ["CALL", null, ["callee:0043b838:8"]]
+ 008eb310 ["INT_ADD", "register:40f0:8", ["const:8eb310:8", "const:4:8"]]
+ 008eb310 ["CALL", null, ["callee:0043b838:8"]]
- 008eb2d8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008eb2d8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008eb2d8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008eb2d8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 008eb32c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 008eb32c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008eb32c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008eb32c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-fb564b0a03b3b05a992b82af291cebf7"></a>

### [`008eb488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008eb488.md) → [`008eb4dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb4dc.md) FUN_008eb4dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006d8768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d8768.md) · 呼出先 2件 [`008eb51c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008eb51c.md) [`008eb988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008eb988.md)
- 新版 呼出元 1件 [`006d87c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d87c0.md) · 呼出先 2件 [`008eb570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb570.md) [`008eb9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb9dc.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "008eb4e4",
      "incomplete_value": true,
      "site": "008eb4e4",
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
            "const:610:8"
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
    "old": {
      "definition_site": "008eb50c",
      "incomplete_value": true,
      "site": "008eb50c",
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
            "const:614:8"
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
      "008eb518",
      "READ",
      [
        "storage",
        "00ca4610",
        null,
        "undefined4"
      ]
    ],
    [
      "008eb538",
      "WRITE",
      [
        "storage",
        "00ca4610",
        null,
        "undefined4"
      ]
    ],
    [
      "008eb540",
      "READ",
      [
        "storage",
        "00ca4614",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "008eb518",
      "READ",
      [
        "storage",
        "00ca46e0",
        null,
        "undefined4"
      ]
    ],
    [
      "008eb538",
      "WRITE",
      [
        "storage",
        "00ca46e0",
        null,
        "undefined4"
      ]
    ],
    [
      "008eb540",
      "READ",
      [
        "storage",
        "00ca46e4",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eb4e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:610:8"]]
- 008eb4e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 008eb538 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6e0:8"]]
+ 008eb538 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 008eb50c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:614:8"]]
- 008eb50c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 008eb560 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6e4:8"]]
+ 008eb560 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 008eb4c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:610:8"]]
- 008eb4c4 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 008eb4c4 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
+ 008eb518 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6e0:8"]]
+ 008eb518 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
+ 008eb518 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
~~~


<a id="compare-f5d874b78ed4fdad5296aec850461d79"></a>

### [`008eb51c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008eb51c.md) → [`008eb570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb570.md) FUN_008eb570

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 5件 [`008eb488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008eb488.md) [`008ec2a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ec/008ec2a0.md) [`008f53b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f5/008f53b0.md) [`008f6ae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f6ae8.md) [`008f7008`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f7/008f7008.md) · 呼出先 13件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`006337e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00633/006337e4.md) [`008f2378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f2/008f2378.md)
- 新版 呼出元 4件 [`008eb4dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb4dc.md) [`008ec2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008ec2f4.md) [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) [`008f6b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6b3c.md) · 呼出先 13件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00633824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633824.md) [`008f23cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f2/008f23cc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.40% / 新版 88.40%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "008eb78c",
      "incomplete_value": false,
      "site": "008eb7ac",
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
            "const:f00:8"
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
    "old": {
      "definition_site": "008eb790",
      "incomplete_value": true,
      "site": "008eb7ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 11,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "008eb8a0",
      "incomplete_value": false,
      "site": "008eb8a8",
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
            "const:f38:8"
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
      "008eb61c",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "008eb65c",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "008eb798",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "008eb61c",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "008eb65c",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "008eb798",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eb7ac ["INT_ADD", "register:40f0:8", ["const:8eb7ac:8", "const:4:8"]]
- 008eb7ac ["CALL", null, ["callee:00633824:8"]]
+ 008eb800 ["INT_ADD", "register:40f0:8", ["const:8eb800:8", "const:4:8"]]
+ 008eb800 ["CALL", null, ["callee:00633824:8"]]
+ 008eb7ac ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 008eb7ac ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 008eb7ac ["COPY", "register:5010:8", ["const:0:8"]]
+ 008eb7ac ["COPY", "register:5018:8", ["const:0:8"]]
- 008eb800 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 008eb800 ["CBRANCH", null, ["local:b46:8", "tmp:0:1"]]
+ 008eb854 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008eb854 ["CBRANCH", null, ["local:b47:8", "tmp:0:1"]]
~~~


<a id="compare-6bf09cbf04456945ed3f9adbb34d89a1"></a>

### [`008eb988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008eb988.md) → [`008eb9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb9dc.md) FUN_008eb9dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`008eb488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008eb488.md) [`008ec2a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ec/008ec2a0.md) [`008f53b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f5/008f53b0.md) [`008f7008`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f7/008f7008.md) · 呼出先 3件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008c4920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c4/008c4920.md) [`008cabbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ca/008cabbc.md)
- 新版 呼出元 4件 [`008eb4dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb4dc.md) [`008ec2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008ec2f4.md) [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) [`008f6b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6b3c.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c4974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c4974.md) [`008cac10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008cac10.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 90.32% / 新版 90.32%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008eba14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ebacc"
      ]
    ],
    [
      "unmatched:008eba18",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "unmatched:008eba70",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008c4920"
      ]
    ]
  ],
  "added": [
    [
      "008eba68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ebacc"
      ]
    ],
    [
      "008eba6c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "008ebac4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008c4974"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eb9b0 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008eb9b0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 008eba04 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008eba04 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 008eb9dc ["INT_ADD", "register:40f0:8", ["const:8eb9dc:8", "const:4:8"]]
- 008eb9dc ["CALL", null, ["callee:00851550:8"]]
+ 008eba30 ["INT_ADD", "register:40f0:8", ["const:8eba30:8", "const:4:8"]]
+ 008eba30 ["CALL", null, ["callee:00851550:8"]]
- 008eb9f4 ["INT_ADD", "register:40f0:8", ["const:8eb9f4:8", "const:4:8"]]
- 008eb9f4 ["CALL", null, ["callee:008cac10:8"]]
+ 008eba48 ["INT_ADD", "register:40f0:8", ["const:8eba48:8", "const:4:8"]]
+ 008eba48 ["CALL", null, ["callee:008cac10:8"]]
~~~


