# v16.0.1 → v16.0.2 · 最優先の変更候補 (15)

[一覧の目次](README.md)

<a id="compare-0808356d2e3720b4a2bed3249e452c56"></a>

### [`00545ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545ab0.md) → [`00545af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/00545af0.md) FUN_00545af0

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
      "definition_site": "00545af8",
      "incomplete_value": false,
      "site": "00545afc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00545ab8",
      "incomplete_value": false,
      "site": "00545abc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:630:8"
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
      "00545afc",
      "DATA",
      [
        "storage",
        "00c6a630",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00545afc",
      "DATA",
      [
        "storage",
        "00c6a700",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00545ab8 ["COPY", "tmp:0:8", ["const:630:8"]]
- 00545ab8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00545ab8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00545ab8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00545af8 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 00545af8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00545af8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00545af8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00545adc ["INT_ADD", "register:40f0:8", ["const:545adc:8", "const:4:8"]]
- 00545adc ["CALL", null, ["callee:00c57f80:8"]]
+ 00545b1c ["INT_ADD", "register:40f0:8", ["const:545b1c:8", "const:4:8"]]
+ 00545b1c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-5ecf859780a6f9b937f784cc8829e488"></a>

### [`00545af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545af0.md) → [`00545b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/00545b30.md) FUN_00545b30

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`004ee534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ee/004ee534.md) · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`004ee574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ee/004ee574.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00545b5c",
      "incomplete_value": false,
      "site": "00545b5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00545b1c",
      "incomplete_value": false,
      "site": "00545b1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:630:8"
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
      "00545b5c",
      "DATA",
      [
        "storage",
        "00c6a630",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00545b5c",
      "DATA",
      [
        "storage",
        "00c6a700",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00545b04 ["INT_ADD", "register:40f0:8", ["const:545b04:8", "const:4:8"]]
- 00545b04 ["CALL", null, ["callee:00c57f60:8"]]
+ 00545b44 ["INT_ADD", "register:40f0:8", ["const:545b44:8", "const:4:8"]]
+ 00545b44 ["CALL", null, ["callee:00c57f60:8"]]
- 00545b14 ["COPY", "tmp:0:8", ["const:630:8"]]
- 00545b14 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00545b14 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00545b14 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00545b54 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 00545b54 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00545b54 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00545b54 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00545b3c ["INT_ADD", "register:40f0:8", ["const:545b3c:8", "const:4:8"]]
- 00545b3c ["CALL", null, ["callee:0043bb60:8"]]
+ 00545b7c ["INT_ADD", "register:40f0:8", ["const:545b7c:8", "const:4:8"]]
+ 00545b7c ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-694a63b4540da2f7c0bff8607e598cdb"></a>

### [`00545b64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00545/00545b64.md) → [`00545ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00545/00545ba4.md) FUN_00545ba4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00545bac",
      "incomplete_value": false,
      "site": "00545bac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00545b6c",
      "incomplete_value": false,
      "site": "00545b6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:630:8"
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
      "00545bac",
      "DATA",
      [
        "storage",
        "00c6a630",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00545bac",
      "DATA",
      [
        "storage",
        "00c6a700",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00545b68 ["COPY", "tmp:0:8", ["const:630:8"]]
- 00545b68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00545b68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00545b68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00545ba8 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 00545ba8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00545ba8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00545ba8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e2cf0fc232b0652a3ca3a6b05e74c083"></a>

### [`00547b1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00547/00547b1c.md) → [`00547b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00547/00547b5c.md) FUN_00547b5c

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
      "definition_site": "00547b7c",
      "incomplete_value": false,
      "site": "00547b80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:780:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00547b3c",
      "incomplete_value": false,
      "site": "00547b40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
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
      "00547b80",
      "DATA",
      [
        "storage",
        "00c6a6b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00547b80",
      "DATA",
      [
        "storage",
        "00c6a780",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00547b30 ["INT_ADD", "register:40f0:8", ["const:547b30:8", "const:4:8"]]
- 00547b30 ["CALL", null, ["callee:00c57f60:8"]]
+ 00547b70 ["INT_ADD", "register:40f0:8", ["const:547b70:8", "const:4:8"]]
+ 00547b70 ["CALL", null, ["callee:00c57f60:8"]]
- 00547b3c ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 00547b3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00547b3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00547b3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00547b7c ["COPY", "tmp:0:8", ["const:780:8"]]
+ 00547b7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00547b7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00547b7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-efdcebd861fb859ef2c6c9d6bd899bd3"></a>

### [`00547b54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00547/00547b54.md) → [`00547b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00547/00547b94.md) FUN_00547b94

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
      "definition_site": "00547b9c",
      "incomplete_value": false,
      "site": "00547ba0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:780:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00547b5c",
      "incomplete_value": false,
      "site": "00547b60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
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
      "00547ba0",
      "DATA",
      [
        "storage",
        "00c6a6b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00547ba0",
      "DATA",
      [
        "storage",
        "00c6a780",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00547b5c ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 00547b5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00547b5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00547b5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00547b9c ["COPY", "tmp:0:8", ["const:780:8"]]
+ 00547b9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00547b9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00547b9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4ca7b56541a73428d22b7bd2f560fe0e"></a>

### [`00547dc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00547/00547dc4.md) → [`00547e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00547/00547e04.md) FUN_00547e04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`004ff37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ff/004ff37c.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`004ff3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff3bc.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00547e40",
      "incomplete_value": true,
      "site": "00547e40",
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
      "definition_site": "00547e00",
      "incomplete_value": true,
      "site": "00547e00",
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
      "00547e2c",
      "READ",
      [
        "storage",
        "00c9ad40",
        null,
        "pointer"
      ]
    ],
    [
      "00547e40",
      "DATA",
      [
        "storage",
        "00c66288",
        null,
        "pointer"
      ]
    ],
    [
      "00547e48",
      "READ",
      [
        "storage",
        "00c9adb8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00547e2c",
      "READ",
      [
        "storage",
        "00c9ae10",
        null,
        "pointer"
      ]
    ],
    [
      "00547e40",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ],
    [
      "00547e48",
      "READ",
      [
        "storage",
        "00c9ae88",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00547de0 ["INT_ADD", "register:40f0:8", ["const:547de0:8", "const:4:8"]]
- 00547de0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00547e20 ["INT_ADD", "register:40f0:8", ["const:547e20:8", "const:4:8"]]
+ 00547e20 ["CALL", null, ["callee:00c57f60:8"]]
- 00547dec ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d40:8"]]
- 00547dec ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00547e2c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:e10:8"]]
+ 00547e2c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00547e08 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:db8:8"]]
- 00547e08 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00547e48 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:e88:8"]]
+ 00547e48 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-30a9ff6c3c9f37c214a427d67e775703"></a>

### [`00547f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00547/00547f2c.md) → [`00547f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00547/00547f6c.md) FUN_00547f6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`004ff37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004ff/004ff37c.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0049f42c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f42c.md) [`00535b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535b6c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`004ff3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff3bc.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.78% / 新版 91.78%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00547fa8",
      "incomplete_value": true,
      "site": "00547fac",
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
      "definition_site": "00547f68",
      "incomplete_value": true,
      "site": "00547f6c",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00548000",
      "incomplete_value": true,
      "site": "00548000",
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
      "definition_site": "00547fc0",
      "incomplete_value": true,
      "site": "00547fc0",
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
    "ordinal": 20,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00547f98",
      "READ",
      [
        "storage",
        "00c9ad40",
        null,
        "pointer"
      ]
    ],
    [
      "00547fac",
      "DATA",
      [
        "storage",
        "00c66288",
        null,
        "pointer"
      ]
    ],
    [
      "00547ff0",
      "READ",
      [
        "storage",
        "00c9adb8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00547f98",
      "READ",
      [
        "storage",
        "00c9ae10",
        null,
        "pointer"
      ]
    ],
    [
      "00547fac",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ],
    [
      "00547ff0",
      "READ",
      [
        "storage",
        "00c9ae88",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00547f80 ["INT_ADD", "register:40f0:8", ["const:547f80:8", "const:4:8"]]
- 00547f80 ["CALL", null, ["callee:00c57f60:8"]]
+ 00547fc0 ["INT_ADD", "register:40f0:8", ["const:547fc0:8", "const:4:8"]]
+ 00547fc0 ["CALL", null, ["callee:00c57f60:8"]]
- 00547f58 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d40:8"]]
- 00547f58 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00547f98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e10:8"]]
+ 00547f98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00547f98 ["INT_ADD", "register:40f0:8", ["const:547f98:8", "const:4:8"]]
- 00547f98 ["CALL", null, ["callee:00c580d0:8"]]
+ 00547fd8 ["INT_ADD", "register:40f0:8", ["const:547fd8:8", "const:4:8"]]
+ 00547fd8 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-44f8815ed47ff951bcafedeeef0ee765"></a>

### [`00548584`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00548/00548584.md) → [`005485c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/005485c4.md) FUN_005485c4

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 8件 [`00529db8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00529/00529db8.md) [`0052b738`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052b/0052b738.md) [`0052c354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052c/0052c354.md) [`0052cdf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052c/0052cdf0.md) [`005483b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00548/005483b8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 8件 [`00529df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00529/00529df8.md) [`0052b778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052b/0052b778.md) [`0052c394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052c/0052c394.md) [`0052ce30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052c/0052ce30.md) [`005483f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/005483f8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005485d0",
      "incomplete_value": false,
      "site": "005485d4",
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
      "definition_site": "00548590",
      "incomplete_value": false,
      "site": "00548594",
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
      "005485d0",
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
      "005485d0",
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
- 00548594 ["INT_ADD", "register:40f0:8", ["const:548594:8", "const:4:8"]]
- 00548594 ["CALL", null, ["callee:0043b7b8:8"]]
+ 005485d4 ["INT_ADD", "register:40f0:8", ["const:5485d4:8", "const:4:8"]]
+ 005485d4 ["CALL", null, ["callee:0043b7b8:8"]]
- 00548590 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00548590 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00548590 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00548590 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005485d0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005485d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005485d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005485d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c6a4ade4ee4f810aec827059ae5a28e8"></a>

### [`00548a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00548/00548a6c.md) → [`00548aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548aac.md) FUN_00548aac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005486f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00548/005486f4.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00548734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548734.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00548ab8",
      "incomplete_value": false,
      "site": "00548abc",
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
      "definition_site": "00548a78",
      "incomplete_value": false,
      "site": "00548a7c",
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
      "00548ab8",
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
      "00548ab8",
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
- 00548a7c ["INT_ADD", "register:40f0:8", ["const:548a7c:8", "const:4:8"]]
- 00548a7c ["CALL", null, ["callee:0043b7b8:8"]]
+ 00548abc ["INT_ADD", "register:40f0:8", ["const:548abc:8", "const:4:8"]]
+ 00548abc ["CALL", null, ["callee:0043b7b8:8"]]
- 00548a78 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00548a78 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00548a78 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00548a78 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00548ab8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00548ab8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00548ab8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00548ab8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-10d1d34840b70eba63a1eee986c2a96f"></a>

### [`00548a94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00548/00548a94.md) → [`00548ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548ad4.md) FUN_00548ad4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00548aec",
      "incomplete_value": true,
      "site": "00548af0",
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
      "definition_site": "00548aac",
      "incomplete_value": true,
      "site": "00548ab0",
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
      "00548ae8",
      "READ",
      [
        "storage",
        "00c9b0e8",
        null,
        "pointer"
      ]
    ],
    [
      "00548af0",
      "DATA",
      [
        "storage",
        "00c6a790",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00548ae8",
      "READ",
      [
        "storage",
        "00c9b1b8",
        null,
        "pointer"
      ]
    ],
    [
      "00548af0",
      "DATA",
      [
        "storage",
        "00c6a860",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00548aa8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e8:8"]]
- 00548aa8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00548ae8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:1b8:8"]]
+ 00548ae8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00548ab4 ["INT_ADD", "register:40f0:8", ["const:548ab4:8", "const:4:8"]]
- 00548ab4 ["CALL", null, ["callee:00c57f70:8"]]
+ 00548af4 ["INT_ADD", "register:40f0:8", ["const:548af4:8", "const:4:8"]]
+ 00548af4 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-152968a466aa1bc3126f3f4b5427e7b4"></a>

### [`00548d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00548/00548d44.md) → [`00548d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548d84.md) FUN_00548d84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00548d9c",
      "incomplete_value": true,
      "site": "00548da0",
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
      "definition_site": "00548d5c",
      "incomplete_value": true,
      "site": "00548d60",
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
      "00548d98",
      "READ",
      [
        "storage",
        "00c9b100",
        null,
        "pointer"
      ]
    ],
    [
      "00548da0",
      "DATA",
      [
        "storage",
        "00c6a7e0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00548d98",
      "READ",
      [
        "storage",
        "00c9b1d0",
        null,
        "pointer"
      ]
    ],
    [
      "00548da0",
      "DATA",
      [
        "storage",
        "00c6a8b0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00548d58 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:100:8"]]
- 00548d58 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00548d98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:1d0:8"]]
+ 00548d98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00548d64 ["INT_ADD", "register:40f0:8", ["const:548d64:8", "const:4:8"]]
- 00548d64 ["CALL", null, ["callee:00c57f70:8"]]
+ 00548da4 ["INT_ADD", "register:40f0:8", ["const:548da4:8", "const:4:8"]]
+ 00548da4 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-c89f4012a8386cce6a18be3ce8987137"></a>

### [`00549218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00549/00549218.md) → [`00549258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549258.md) FUN_00549258

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
      "definition_site": "0054926c",
      "incomplete_value": false,
      "site": "00549270",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0054922c",
      "incomplete_value": false,
      "site": "00549230",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "00549270",
      "DATA",
      [
        "storage",
        "00c6a880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00549270",
      "DATA",
      [
        "storage",
        "00c6a950",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00549224 ["INT_ADD", "register:40f0:8", ["const:549224:8", "const:4:8"]]
- 00549224 ["CALL", null, ["callee:00c57f60:8"]]
+ 00549264 ["INT_ADD", "register:40f0:8", ["const:549264:8", "const:4:8"]]
+ 00549264 ["CALL", null, ["callee:00c57f60:8"]]
- 0054922c ["COPY", "tmp:0:8", ["const:880:8"]]
- 0054922c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0054922c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0054922c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0054926c ["COPY", "tmp:0:8", ["const:950:8"]]
+ 0054926c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0054926c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0054926c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-951a5d5c2732c8cbff4f0bf0e65d9232"></a>

### [`00549320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00549/00549320.md) → [`00549360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549360.md) FUN_00549360

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
      "definition_site": "00549374",
      "incomplete_value": false,
      "site": "00549378",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:9e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00549334",
      "incomplete_value": false,
      "site": "00549338",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:910:8"
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
      "00549378",
      "DATA",
      [
        "storage",
        "00c6a910",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00549378",
      "DATA",
      [
        "storage",
        "00c6a9e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054932c ["INT_ADD", "register:40f0:8", ["const:54932c:8", "const:4:8"]]
- 0054932c ["CALL", null, ["callee:00c57f60:8"]]
+ 0054936c ["INT_ADD", "register:40f0:8", ["const:54936c:8", "const:4:8"]]
+ 0054936c ["CALL", null, ["callee:00c57f60:8"]]
- 00549334 ["COPY", "tmp:0:8", ["const:910:8"]]
- 00549334 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00549334 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00549334 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00549374 ["COPY", "tmp:0:8", ["const:9e0:8"]]
+ 00549374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00549374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00549374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-816154eaf232443c491a92d39c46e1d5"></a>

### [`00549344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00549/00549344.md) → [`00549384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549384.md) FUN_00549384

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
      "definition_site": "00549388",
      "incomplete_value": true,
      "site": "0054938c",
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
            "const:9e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00549348",
      "incomplete_value": true,
      "site": "0054934c",
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
            "const:910:8"
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
      "0054938c",
      "DATA",
      [
        "storage",
        "00c6a910",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0054938c",
      "DATA",
      [
        "storage",
        "00c6a9e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00549348 ["COPY", "tmp:0:8", ["const:910:8"]]
- 00549348 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00549348 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00549348 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00549388 ["COPY", "tmp:0:8", ["const:9e0:8"]]
+ 00549388 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00549388 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00549388 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-38b1c6aa912ac98ae89da90b793dac68"></a>

### [`00549888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00549/00549888.md) → [`005498c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/005498c8.md) FUN_005498c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0050ae78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0050a/0050ae78.md) · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0054063c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/0054063c.md) [`00549a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00549/00549a8c.md) [`00549bd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00549/00549bd0.md) [`00549dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00549/00549dbc.md)
- 新版 呼出元 1件 [`0050aeb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0050a/0050aeb8.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0054067c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054067c.md) [`00549acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549acc.md) [`00549c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549c10.md) [`00549dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549dfc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005499e8",
      "incomplete_value": true,
      "site": "005499e8",
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
      "definition_site": "005499a8",
      "incomplete_value": true,
      "site": "005499a8",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005499e4",
      "incomplete_value": true,
      "site": "005499fc",
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
      "definition_site": "005499a4",
      "incomplete_value": true,
      "site": "005499bc",
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
      "0054999c",
      "READ",
      [
        "storage",
        "00c9b160",
        null,
        "pointer"
      ]
    ],
    [
      "005499b8",
      "DATA",
      [
        "storage",
        "00c69a80",
        null,
        "pointer"
      ]
    ],
    [
      "005499d8",
      "READ",
      [
        "storage",
        "00c9adb0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054999c",
      "READ",
      [
        "storage",
        "00c9b230",
        null,
        "pointer"
      ]
    ],
    [
      "005499b8",
      "DATA",
      [
        "storage",
        "00c69b50",
        null,
        "pointer"
      ]
    ],
    [
      "005499d8",
      "READ",
      [
        "storage",
        "00c9ae80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00549940 ["INT_ADD", "register:40f0:8", ["const:549940:8", "const:4:8"]]
- 00549940 ["CALL", null, ["callee:00c57f60:8"]]
+ 00549980 ["INT_ADD", "register:40f0:8", ["const:549980:8", "const:4:8"]]
+ 00549980 ["CALL", null, ["callee:00c57f60:8"]]
- 0054995c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:160:8"]]
- 0054995c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054999c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:230:8"]]
+ 0054999c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00549980 ["INT_ADD", "register:40f0:8", ["const:549980:8", "const:4:8"]]
- 00549980 ["CALL", null, ["callee:00549acc:8"]]
+ 005499c0 ["INT_ADD", "register:40f0:8", ["const:5499c0:8", "const:4:8"]]
+ 005499c0 ["CALL", null, ["callee:00549acc:8"]]
~~~


<a id="compare-f1a72f336a6fbc3f425dc4843b557e56"></a>

### [`00549a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00549/00549a8c.md) → [`00549acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549acc.md) FUN_00549acc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0050ae78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0050a/0050ae78.md) [`00549888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00549/00549888.md) [`00549bd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00549/00549bd0.md) · 呼出先 5件 [`0049f42c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f42c.md) [`005366b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00536/005366b4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c58b40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58b40.md)
- 新版 呼出元 3件 [`0050aeb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0050a/0050aeb8.md) [`005498c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/005498c8.md) [`00549c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549c10.md) · 呼出先 5件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`005366f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00536/005366f4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58c10.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.44% / 新版 93.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00549b00",
      "incomplete_value": true,
      "site": "00549b00",
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
      "definition_site": "00549ac0",
      "incomplete_value": true,
      "site": "00549ac0",
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
      "00549af0",
      "READ",
      [
        "storage",
        "00c9b168",
        null,
        "pointer"
      ]
    ],
    [
      "00549b00",
      "DATA",
      [
        "storage",
        "00c67818",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00549af0",
      "READ",
      [
        "storage",
        "00c9b238",
        null,
        "pointer"
      ]
    ],
    [
      "00549b00",
      "DATA",
      [
        "storage",
        "00c678e8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00549ab0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:168:8"]]
- 00549ab0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00549af0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:238:8"]]
+ 00549af0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00549ab4 ["COPY", "register:40a0:8", ["register:4000:8"]]
- 00549ac8 ["INT_ADD", "register:40f0:8", ["const:549ac8:8", "const:4:8"]]
- 00549ac8 ["CALL", null, ["callee:005366f4:8"]]
+ 00549b08 ["INT_ADD", "register:40f0:8", ["const:549b08:8", "const:4:8"]]
+ 00549b08 ["CALL", null, ["callee:005366f4:8"]]
~~~


<a id="compare-ddd98ed74d8322458ca19367014f4d1e"></a>

### [`00549dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00549/00549dbc.md) → [`00549dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549dfc.md) FUN_00549dfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00549888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00549/00549888.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`005498c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/005498c8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00549e08",
      "incomplete_value": false,
      "site": "00549e0c",
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
      "definition_site": "00549dc8",
      "incomplete_value": false,
      "site": "00549dcc",
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
      "00549e08",
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
      "00549e08",
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
- 00549dcc ["INT_ADD", "register:40f0:8", ["const:549dcc:8", "const:4:8"]]
- 00549dcc ["CALL", null, ["callee:0043b7b8:8"]]
+ 00549e0c ["INT_ADD", "register:40f0:8", ["const:549e0c:8", "const:4:8"]]
+ 00549e0c ["CALL", null, ["callee:0043b7b8:8"]]
- 00549dc8 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00549dc8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00549dc8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00549dc8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00549e08 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00549e08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00549e08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00549e08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b095a38ef80fdb2c49c94c84ce7fecff"></a>

### [`0054b06c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054b/0054b06c.md) → [`0054b0ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054b/0054b0ac.md) FUN_0054b0ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00508b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00508/00508b0c.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00508b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00508/00508b4c.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.05% / 新版 96.05%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054b0fc",
      "incomplete_value": true,
      "site": "0054b0fc",
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
      "definition_site": "0054b0bc",
      "incomplete_value": true,
      "site": "0054b0bc",
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
      "0054b0e4",
      "READ",
      [
        "storage",
        "00c9ad40",
        null,
        "pointer"
      ]
    ],
    [
      "0054b0fc",
      "DATA",
      [
        "storage",
        "00c66288",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054b0e4",
      "READ",
      [
        "storage",
        "00c9ae10",
        null,
        "pointer"
      ]
    ],
    [
      "0054b0fc",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054b088 ["INT_ADD", "register:40f0:8", ["const:54b088:8", "const:4:8"]]
- 0054b088 ["CALL", null, ["callee:00c57f60:8"]]
+ 0054b0c8 ["INT_ADD", "register:40f0:8", ["const:54b0c8:8", "const:4:8"]]
+ 0054b0c8 ["CALL", null, ["callee:00c57f60:8"]]
- 0054b0a4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d40:8"]]
- 0054b0a4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054b0e4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:e10:8"]]
+ 0054b0e4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 0054b178 ["INT_ADD", "register:40f0:8", ["const:54b178:8", "const:4:8"]]
- 0054b178 ["CALL", null, ["callee:0043bbe4:8"]]
+ 0054b1b8 ["INT_ADD", "register:40f0:8", ["const:54b1b8:8", "const:4:8"]]
+ 0054b1b8 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-4788dccddcd39cb094193999c0fbe9b3"></a>

### [`0054b7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054b/0054b7d0.md) → [`0054b810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054b/0054b810.md) FUN_0054b810

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005154b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00515/005154b4.md) · 呼出先 6件 [`00535b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535b6c.md) [`0054b8a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054b/0054b8a8.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`005154f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00515/005154f4.md) · 呼出先 6件 [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`0054b8e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054b/0054b8e8.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054b854",
      "incomplete_value": true,
      "site": "0054b860",
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
      "definition_site": "0054b814",
      "incomplete_value": true,
      "site": "0054b820",
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
      "0054b844",
      "READ",
      [
        "storage",
        "00c9ad40",
        null,
        "pointer"
      ]
    ],
    [
      "0054b860",
      "DATA",
      [
        "storage",
        "00c66288",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054b844",
      "READ",
      [
        "storage",
        "00c9ae10",
        null,
        "pointer"
      ]
    ],
    [
      "0054b860",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054b7f4 ["INT_ADD", "register:40f0:8", ["const:54b7f4:8", "const:4:8"]]
- 0054b7f4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0054b834 ["INT_ADD", "register:40f0:8", ["const:54b834:8", "const:4:8"]]
+ 0054b834 ["CALL", null, ["callee:00c57f60:8"]]
- 0054b804 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d40:8"]]
- 0054b804 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054b844 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e10:8"]]
+ 0054b844 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0054b834 ["INT_ADD", "register:40f0:8", ["const:54b834:8", "const:4:8"]]
- 0054b834 ["CALL", null, ["callee:00c57f60:8"]]
+ 0054b874 ["INT_ADD", "register:40f0:8", ["const:54b874:8", "const:4:8"]]
+ 0054b874 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-81ea070e85a3b38749c29c47354f4cbe"></a>

### [`0054b944`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054b/0054b944.md) → [`0054b984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054b/0054b984.md) FUN_0054b984

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`005030c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00503/005030c4.md) [`005113cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00511/005113cc.md) [`00517650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00517/00517650.md) [`00519e00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00519/00519e00.md) [`0051c068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0051c/0051c068.md) · 呼出先 9件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00535b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535b6c.md) [`0053f004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0053f/0053f004.md) [`0054bb8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054b/0054bb8c.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 6件 [`00503104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00503/00503104.md) [`0051140c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00511/0051140c.md) [`00517690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00517/00517690.md) [`00519e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00519/00519e40.md) [`0051c0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051c/0051c0a8.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`0053f044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f044.md) [`0054bbcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054b/0054bbcc.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.95% / 新版 97.95%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054ba3c",
      "incomplete_value": true,
      "site": "0054ba44",
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
      "definition_site": "0054b9fc",
      "incomplete_value": true,
      "site": "0054ba04",
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
      "0054ba2c",
      "READ",
      [
        "storage",
        "00c9ad40",
        null,
        "pointer"
      ]
    ],
    [
      "0054ba44",
      "DATA",
      [
        "storage",
        "00c66288",
        null,
        "pointer"
      ]
    ],
    [
      "0054baa0",
      "DATA",
      [
        "storage",
        "00c66288",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054ba2c",
      "READ",
      [
        "storage",
        "00c9ae10",
        null,
        "pointer"
      ]
    ],
    [
      "0054ba44",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ],
    [
      "0054baa0",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054b9d0 ["INT_ADD", "register:40f0:8", ["const:54b9d0:8", "const:4:8"]]
- 0054b9d0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0054ba10 ["INT_ADD", "register:40f0:8", ["const:54ba10:8", "const:4:8"]]
+ 0054ba10 ["CALL", null, ["callee:00c57f60:8"]]
- 0054b9ec ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:d40:8"]]
- 0054b9ec ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054ba2c ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:e10:8"]]
+ 0054ba2c ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
- 0054ba24 ["INT_ADD", "register:40f0:8", ["const:54ba24:8", "const:4:8"]]
- 0054ba24 ["CALL", null, ["callee:00c57f60:8"]]
+ 0054ba64 ["INT_ADD", "register:40f0:8", ["const:54ba64:8", "const:4:8"]]
+ 0054ba64 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-ca3a478f43e0629340c68babdc06850f"></a>

### [`0054c224`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054c/0054c224.md) → [`0054c264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054c264.md) FUN_0054c264

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0054c0ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054c/0054c0ec.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0054c12c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054c12c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054c270",
      "incomplete_value": false,
      "site": "0054c274",
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
      "definition_site": "0054c230",
      "incomplete_value": false,
      "site": "0054c234",
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
      "0054c270",
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
      "0054c270",
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
- 0054c234 ["INT_ADD", "register:40f0:8", ["const:54c234:8", "const:4:8"]]
- 0054c234 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0054c274 ["INT_ADD", "register:40f0:8", ["const:54c274:8", "const:4:8"]]
+ 0054c274 ["CALL", null, ["callee:0043b7b8:8"]]
- 0054c230 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0054c230 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054c230 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054c230 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054c270 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0054c270 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054c270 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054c270 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-0aa9d4f215f6cf0a833d3ea8108d4df7"></a>

### [`0054c730`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054c/0054c730.md) → [`0054c770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054c770.md) FUN_0054c770

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0054c564`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054c/0054c564.md) · 呼出先 5件 [`0049f42c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f42c.md) [`00535b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535b6c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`0054c5a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054c5a4.md) · 呼出先 5件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.31% / 新版 95.31%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054c7ac",
      "incomplete_value": true,
      "site": "0054c7b0",
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
      "definition_site": "0054c76c",
      "incomplete_value": true,
      "site": "0054c770",
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
      "0054c79c",
      "READ",
      [
        "storage",
        "00c9ad40",
        null,
        "pointer"
      ]
    ],
    [
      "0054c7b0",
      "DATA",
      [
        "storage",
        "00c66288",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054c79c",
      "READ",
      [
        "storage",
        "00c9ae10",
        null,
        "pointer"
      ]
    ],
    [
      "0054c7b0",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054c75c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d40:8"]]
- 0054c75c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054c79c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e10:8"]]
+ 0054c79c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0054c784 ["INT_ADD", "register:40f0:8", ["const:54c784:8", "const:4:8"]]
- 0054c784 ["CALL", null, ["callee:00c57f60:8"]]
+ 0054c7c4 ["INT_ADD", "register:40f0:8", ["const:54c7c4:8", "const:4:8"]]
+ 0054c7c4 ["CALL", null, ["callee:00c57f60:8"]]
- 0054c79c ["INT_ADD", "register:40f0:8", ["const:54c79c:8", "const:4:8"]]
- 0054c79c ["CALL", null, ["callee:00c580d0:8"]]
+ 0054c7dc ["INT_ADD", "register:40f0:8", ["const:54c7dc:8", "const:4:8"]]
+ 0054c7dc ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-84e28d34a7459cf17d2ddcf46f3254f6"></a>

### [`0054c87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054c/0054c87c.md) → [`0054c8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054c8bc.md) FUN_0054c8bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0051a77c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0051a/0051a77c.md) · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0053d7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0053d/0053d7f8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0051a7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051a/0051a7bc.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0053d838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053d838.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.75% / 新版 96.75%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054c994",
      "incomplete_value": true,
      "site": "0054c994",
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
      "definition_site": "0054c954",
      "incomplete_value": true,
      "site": "0054c954",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054c994",
      "incomplete_value": true,
      "site": "0054c994",
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
      "definition_site": "0054c954",
      "incomplete_value": true,
      "site": "0054c954",
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
      "0054c97c",
      "READ",
      [
        "storage",
        "00c9b150",
        null,
        "pointer"
      ]
    ],
    [
      "0054c980",
      "READ",
      [
        "storage",
        "00c9b128",
        null,
        "pointer"
      ]
    ],
    [
      "0054c994",
      "DATA",
      [
        "storage",
        "00c68118",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054c97c",
      "READ",
      [
        "storage",
        "00c9b220",
        null,
        "pointer"
      ]
    ],
    [
      "0054c980",
      "READ",
      [
        "storage",
        "00c9b1f8",
        null,
        "pointer"
      ]
    ],
    [
      "0054c994",
      "DATA",
      [
        "storage",
        "00c681e8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054c920 ["INT_ADD", "register:40f0:8", ["const:54c920:8", "const:4:8"]]
- 0054c920 ["CALL", null, ["callee:00c57f60:8"]]
+ 0054c960 ["INT_ADD", "register:40f0:8", ["const:54c960:8", "const:4:8"]]
+ 0054c960 ["CALL", null, ["callee:00c57f60:8"]]
- 0054c93c ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:150:8"]]
- 0054c93c ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054c97c ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:220:8"]]
+ 0054c97c ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
- 0054c940 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:128:8"]]
- 0054c940 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054c980 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:1f8:8"]]
+ 0054c980 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-868bb0e18a65c6ffdb92e641c427d322"></a>

### [`0054cb9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054c/0054cb9c.md) → [`0054cbdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054cbdc.md) FUN_0054cbdc

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0051b11c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0051b/0051b11c.md) [`00527e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00527/00527e28.md) [`005283a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00528/005283a4.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 3件 [`0051b15c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051b/0051b15c.md) [`00527e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00527/00527e68.md) [`005283e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00528/005283e4.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054cbe8",
      "incomplete_value": true,
      "site": "0054cbec",
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
            "const:f8c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0054cba8",
      "incomplete_value": true,
      "site": "0054cbac",
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
      "0054cbe8",
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
      "0054cbe8",
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
- 0054cbac ["INT_ADD", "register:40f0:8", ["const:54cbac:8", "const:4:8"]]
- 0054cbac ["CALL", null, ["callee:00442970:8"]]
+ 0054cbec ["INT_ADD", "register:40f0:8", ["const:54cbec:8", "const:4:8"]]
+ 0054cbec ["CALL", null, ["callee:00442970:8"]]
- 0054cba8 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0054cba8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054cba8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054cba8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054cbe8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0054cbe8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054cbe8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054cbe8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-192f9191632fdc3c60512b0791953c9f"></a>

### [`0054cc20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054c/0054cc20.md) → [`0054cc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054cc60.md) FUN_0054cc60

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0051bae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0051b/0051bae8.md) [`0051c068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0051c/0051c068.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`0051bb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051b/0051bb28.md) [`0051c0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051c/0051c0a8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054cc6c",
      "incomplete_value": true,
      "site": "0054cc70",
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
            "const:f8c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0054cc2c",
      "incomplete_value": true,
      "site": "0054cc30",
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
      "0054cc6c",
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
      "0054cc6c",
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
- 0054cc30 ["INT_ADD", "register:40f0:8", ["const:54cc30:8", "const:4:8"]]
- 0054cc30 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0054cc70 ["INT_ADD", "register:40f0:8", ["const:54cc70:8", "const:4:8"]]
+ 0054cc70 ["CALL", null, ["callee:0043b7b8:8"]]
- 0054cc2c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0054cc2c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054cc2c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054cc2c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054cc6c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0054cc6c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054cc6c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054cc6c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4a19a4337da46103be48eba5cd813106"></a>

### [`0054d13c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054d/0054d13c.md) → [`0054d17c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054d17c.md) FUN_0054d17c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0051e398`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0051e/0051e398.md) · 呼出先 9件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0053af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0053a/0053af90.md) [`0053c940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0053c/0053c940.md) [`0053fca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0053f/0053fca0.md)
- 新版 呼出元 1件 [`0051e3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051e/0051e3d8.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0053afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053afd0.md) [`0053c980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c980.md) [`0053fce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053fce0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.81% / 新版 96.81%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054d228",
      "incomplete_value": true,
      "site": "0054d228",
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
      "definition_site": "0054d1e8",
      "incomplete_value": true,
      "site": "0054d1e8",
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
      "0054d214",
      "READ",
      [
        "storage",
        "00c9b1e8",
        null,
        "pointer"
      ]
    ],
    [
      "0054d228",
      "DATA",
      [
        "storage",
        "00c68e28",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054d214",
      "READ",
      [
        "storage",
        "00c9b2b8",
        null,
        "pointer"
      ]
    ],
    [
      "0054d228",
      "DATA",
      [
        "storage",
        "00c68ef8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054d1bc ["INT_ADD", "register:40f0:8", ["const:54d1bc:8", "const:4:8"]]
- 0054d1bc ["CALL", null, ["callee:00c57f60:8"]]
+ 0054d1fc ["INT_ADD", "register:40f0:8", ["const:54d1fc:8", "const:4:8"]]
+ 0054d1fc ["CALL", null, ["callee:00c57f60:8"]]
- 0054d1d4 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:1e8:8"]]
- 0054d1d4 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054d214 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:2b8:8"]]
+ 0054d214 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
- 0054d1f4 ["INT_ADD", "register:40f0:8", ["const:54d1f4:8", "const:4:8"]]
- 0054d1f4 ["CALL", null, ["callee:0053c980:8"]]
+ 0054d234 ["INT_ADD", "register:40f0:8", ["const:54d234:8", "const:4:8"]]
+ 0054d234 ["CALL", null, ["callee:0053c980:8"]]
~~~


<a id="compare-109afc495ef31478d0c5109df2a2a828"></a>

### [`0054da18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054d/0054da18.md) → [`0054da58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054da58.md) FUN_0054da58

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00527e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00527/00527e28.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 1件 [`00527e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00527/00527e68.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054da64",
      "incomplete_value": false,
      "site": "0054da68",
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
      "definition_site": "0054da24",
      "incomplete_value": false,
      "site": "0054da28",
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
      "0054da64",
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
      "0054da64",
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
- 0054da28 ["INT_ADD", "register:40f0:8", ["const:54da28:8", "const:4:8"]]
- 0054da28 ["CALL", null, ["callee:00442970:8"]]
+ 0054da68 ["INT_ADD", "register:40f0:8", ["const:54da68:8", "const:4:8"]]
+ 0054da68 ["CALL", null, ["callee:00442970:8"]]
- 0054da24 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0054da24 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054da24 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054da24 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054da64 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0054da64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054da64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054da64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-df61f8369cf4ecce88c9f4232fc61650"></a>

### [`0054db94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054d/0054db94.md) → [`0054dbd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054dbd4.md) FUN_0054dbd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0054e740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054e/0054e740.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0054e780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054e/0054e780.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054dbe0",
      "incomplete_value": false,
      "site": "0054dbe4",
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
      "definition_site": "0054dba0",
      "incomplete_value": false,
      "site": "0054dba4",
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
      "0054dbe0",
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
      "0054dbe0",
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
- 0054dba4 ["INT_ADD", "register:40f0:8", ["const:54dba4:8", "const:4:8"]]
- 0054dba4 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0054dbe4 ["INT_ADD", "register:40f0:8", ["const:54dbe4:8", "const:4:8"]]
+ 0054dbe4 ["CALL", null, ["callee:0043b7b8:8"]]
- 0054dba0 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0054dba0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054dba0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054dba0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054dbe0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0054dbe0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054dbe0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054dbe0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-1deb2af10a407f81de26bfd728024b6c"></a>

### [`0054dd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054d/0054dd54.md) → [`0054dd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054dd94.md) FUN_0054dd94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00529db8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00529/00529db8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00529df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00529/00529df8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054dda0",
      "incomplete_value": false,
      "site": "0054dda4",
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
      "definition_site": "0054dd60",
      "incomplete_value": false,
      "site": "0054dd64",
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
      "0054dda0",
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
      "0054dda0",
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
- 0054dd64 ["INT_ADD", "register:40f0:8", ["const:54dd64:8", "const:4:8"]]
- 0054dd64 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0054dda4 ["INT_ADD", "register:40f0:8", ["const:54dda4:8", "const:4:8"]]
+ 0054dda4 ["CALL", null, ["callee:0043b7b8:8"]]
- 0054dd60 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0054dd60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054dd60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054dd60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054dda0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0054dda0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054dda0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054dda0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c117f846c8a1824a1c99e43c19348f73"></a>

### [`0054e220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054e/0054e220.md) → [`0054e260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054e/0054e260.md) FUN_0054e260

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0054dd68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054d/0054dd68.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0054dda8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054dda8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054e26c",
      "incomplete_value": false,
      "site": "0054e270",
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
      "definition_site": "0054e22c",
      "incomplete_value": false,
      "site": "0054e230",
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
      "0054e26c",
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
      "0054e26c",
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
- 0054e230 ["INT_ADD", "register:40f0:8", ["const:54e230:8", "const:4:8"]]
- 0054e230 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0054e270 ["INT_ADD", "register:40f0:8", ["const:54e270:8", "const:4:8"]]
+ 0054e270 ["CALL", null, ["callee:0043b7b8:8"]]
- 0054e22c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0054e22c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054e22c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054e22c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054e26c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0054e26c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054e26c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054e26c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-3c89a97c81c8b6842d8f3cb477a1d96f"></a>

### [`0054eefc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054e/0054eefc.md) → [`0054ef3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054e/0054ef3c.md) FUN_0054ef3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0054ed04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054e/0054ed04.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0054ed44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054e/0054ed44.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054ef48",
      "incomplete_value": false,
      "site": "0054ef4c",
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
      "definition_site": "0054ef08",
      "incomplete_value": false,
      "site": "0054ef0c",
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
      "0054ef48",
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
      "0054ef48",
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
- 0054ef0c ["INT_ADD", "register:40f0:8", ["const:54ef0c:8", "const:4:8"]]
- 0054ef0c ["CALL", null, ["callee:0043b7b8:8"]]
+ 0054ef4c ["INT_ADD", "register:40f0:8", ["const:54ef4c:8", "const:4:8"]]
+ 0054ef4c ["CALL", null, ["callee:0043b7b8:8"]]
- 0054ef08 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0054ef08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054ef08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054ef08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054ef48 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0054ef48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054ef48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054ef48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ec593652ebe369a4f960a93b82122991"></a>

### [`0054f430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054f/0054f430.md) → [`0054f470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054f/0054f470.md) _INIT_25

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 10件 [`00473540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00473/00473540.md) [`004e7494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004e7/004e7494.md) [`004e763c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004e7/004e763c.md) [`005154b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00515/005154b4.md) [`005155d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00515/005155d0.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`004e74d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e7/004e74d4.md) [`004e767c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e7/004e767c.md) [`005154f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00515/005154f4.md) [`00515610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00515/00515610.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.09% / 新版 99.09%

優先判定に残った影響 `call_argument_candidate` 6件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054f794",
      "incomplete_value": false,
      "site": "0054f7a8",
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
            "const:368:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0054f754",
      "incomplete_value": false,
      "site": "0054f768",
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
            "const:268:8"
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
      "definition_site": "0054fa84",
      "incomplete_value": false,
      "site": "0054fa98",
      "value": [
        "leaf",
        "const:4e767c:8"
      ]
    },
    "old": {
      "definition_site": "0054fa44",
      "incomplete_value": false,
      "site": "0054fa58",
      "value": [
        "leaf",
        "const:4e763c:8"
      ]
    },
    "ordinal": 35,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054fa8c",
      "incomplete_value": false,
      "site": "0054fa98",
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
            "const:368:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0054fa4c",
      "incomplete_value": false,
      "site": "0054fa58",
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
            "const:268:8"
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
      "0054f4fc",
      "DATA",
      [
        "storage",
        "00415344",
        "fde_00415344",
        "dword"
      ]
    ],
    [
      "0054f778",
      "DATA",
      [
        "storage",
        "00415352",
        null,
        "dword"
      ]
    ],
    [
      "0054f794",
      "PARAM",
      [
        "storage",
        "00ca5268",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0054f4fc",
      "DATA",
      [
        "storage",
        "00415344",
        null,
        "uleb128"
      ]
    ],
    [
      "0054f778",
      "DATA",
      [
        "storage",
        "00415352",
        null,
        "byte[55]"
      ]
    ],
    [
      "0054f794",
      "PARAM",
      [
        "storage",
        "00ca5368",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0054f768 ["INT_ADD", "register:40f0:8", ["const:54f768:8", "const:4:8"]]
- 0054f768 ["CALL", null, ["callee:004e74d4:8"]]
+ 0054f7a8 ["INT_ADD", "register:40f0:8", ["const:54f7a8:8", "const:4:8"]]
+ 0054f7a8 ["CALL", null, ["callee:004e74d4:8"]]
- 0054fa58 ["INT_ADD", "register:40f0:8", ["const:54fa58:8", "const:4:8"]]
- 0054fa58 ["CALL", null, ["callee:00c57f00:8"]]
+ 0054fa98 ["INT_ADD", "register:40f0:8", ["const:54fa98:8", "const:4:8"]]
+ 0054fa98 ["CALL", null, ["callee:00c57f00:8"]]
- 0054fef8 ["INT_ADD", "register:40f0:8", ["const:54fef8:8", "const:4:8"]]
- 0054fef8 ["CALL", null, ["callee:005154f4:8"]]
+ 0054ff38 ["INT_ADD", "register:40f0:8", ["const:54ff38:8", "const:4:8"]]
+ 0054ff38 ["CALL", null, ["callee:005154f4:8"]]
~~~


<a id="compare-01a6731b68242cb9a8e0ab4d6304b19a"></a>

### [`005509cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509cc.md) → [`00550a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550a0c.md) FUN_00550a0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00727160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/00727160.md) [`007275a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/007275a0.md) · 呼出先 1件 [`00576440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00576/00576440.md)
- 新版 呼出元 2件 [`007271b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/007271b8.md) [`007275f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/007275f8.md) · 呼出先 1件 [`00576480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/00576480.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 72.73% / 新版 72.73%

優先判定に残った影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00550a28",
      "incomplete_value": true,
      "site": "00550a28",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "FLOAT_NAN",
            "1",
            [
              [
                "live",
                "register:5020:8"
              ]
            ]
          ],
          [
            "FLOAT_NAN",
            "1",
            [
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005509e8",
      "incomplete_value": true,
      "site": "005509e8",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "FLOAT_NAN",
            "1",
            [
              [
                "live",
                "register:5020:8"
              ]
            ]
          ],
          [
            "FLOAT_NAN",
            "1",
            [
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00550a28",
      "incomplete_value": true,
      "site": "00550a2c",
      "value": [
        "FLOAT_LESS",
        "1",
        [
          [
            "live",
            "register:5020:8"
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
      "definition_site": "005509e8",
      "incomplete_value": true,
      "site": "005509ec",
      "value": [
        "FLOAT_LESS",
        "1",
        [
          [
            "live",
            "register:5020:8"
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
      "00550a24",
      "READ",
      [
        "storage",
        "002c3c88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00550a24",
      "READ",
      [
        "storage",
        "002c3cc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005509e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c88:8"]]
- 005509e4 ["LOAD", "register:5060:8", ["const:1b1:8", "tmp:0:8"]]
- 005509e4 ["COPY", "register:5068:8", ["const:0:8"]]
- 005509e4 ["COPY", "register:5070:8", ["const:0:8"]]
+ 00550a24 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cc8:8"]]
+ 00550a24 ["LOAD", "register:5060:8", ["const:1b1:8", "tmp:0:8"]]
+ 00550a24 ["COPY", "register:5068:8", ["const:0:8"]]
+ 00550a24 ["COPY", "register:5070:8", ["const:0:8"]]
~~~


<a id="compare-56c7603b57fa9d6af514d29e5d41562c"></a>

### [`00550a2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550a2c.md) → [`00550a6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550a6c.md) FUN_00550a6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00550a84",
      "incomplete_value": true,
      "site": "00550a88",
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
      "definition_site": "00550a44",
      "incomplete_value": true,
      "site": "00550a48",
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
      "00550a80",
      "READ",
      [
        "storage",
        "00c9b228",
        null,
        "pointer"
      ]
    ],
    [
      "00550a88",
      "DATA",
      [
        "storage",
        "00c6ab40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00550a80",
      "READ",
      [
        "storage",
        "00c9b2f8",
        null,
        "pointer"
      ]
    ],
    [
      "00550a88",
      "DATA",
      [
        "storage",
        "00c6ac10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00550a40 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:228:8"]]
- 00550a40 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00550a80 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2f8:8"]]
+ 00550a80 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00550a4c ["INT_ADD", "register:40f0:8", ["const:550a4c:8", "const:4:8"]]
- 00550a4c ["CALL", null, ["callee:00c57f70:8"]]
+ 00550a8c ["INT_ADD", "register:40f0:8", ["const:550a8c:8", "const:4:8"]]
+ 00550a8c ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-a5668bec0e21fc9ade46f34616826bfc"></a>

### [`00550a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550a6c.md) → [`00550aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550aac.md) FUN_00550aac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00550a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550a60.md) · 呼出先 12件 [`0045a6c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6c8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c582f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md)
- 新版 呼出元 1件 [`00550aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550aa0.md) · 呼出先 12件 [`0045a708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a708.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.52% / 新版 94.52%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00550b50",
      "incomplete_value": true,
      "site": "00550b54",
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
      "definition_site": "00550b10",
      "incomplete_value": true,
      "site": "00550b14",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00550b2c",
      "incomplete_value": true,
      "site": "00550b34",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00550aec",
      "incomplete_value": true,
      "site": "00550af4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c58:8"
              ]
            ]
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
      "definition_site": "00550b28",
      "incomplete_value": false,
      "site": "00550b34",
      "value": [
        "leaf",
        "const:45a708:8"
      ]
    },
    "old": {
      "definition_site": "00550ae8",
      "incomplete_value": false,
      "site": "00550af4",
      "value": [
        "leaf",
        "const:45a6c8:8"
      ]
    },
    "ordinal": 4,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00550b28",
      "PARAM",
      [
        "storage",
        "0045a6c8",
        null,
        null
      ]
    ],
    [
      "00550b2c",
      "READ",
      [
        "storage",
        "00c9ac58",
        null,
        "pointer"
      ]
    ],
    [
      "00550b2c",
      "PARAM",
      [
        "storage",
        "00c92cb0",
        "std::__ndk1::future_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00550b28",
      "PARAM",
      [
        "storage",
        "0045a708",
        null,
        null
      ]
    ],
    [
      "00550b2c",
      "READ",
      [
        "storage",
        "00c9ad28",
        null,
        "pointer"
      ]
    ],
    [
      "00550b2c",
      "PARAM",
      [
        "storage",
        "00c92d80",
        "std::__ndk1::future_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00550ad4 ["INT_ADD", "register:40f0:8", ["const:550ad4:8", "const:4:8"]]
- 00550ad4 ["CALL", null, ["callee:00c583f0:8"]]
+ 00550b14 ["INT_ADD", "register:40f0:8", ["const:550b14:8", "const:4:8"]]
+ 00550b14 ["CALL", null, ["callee:00c583f0:8"]]
- 00550af4 ["INT_ADD", "register:40f0:8", ["const:550af4:8", "const:4:8"]]
- 00550af4 ["CALL", null, ["callee:00c58400:8"]]
+ 00550b34 ["INT_ADD", "register:40f0:8", ["const:550b34:8", "const:4:8"]]
+ 00550b34 ["CALL", null, ["callee:00c58400:8"]]
- 00550aac ["INT_ADD", "register:40f0:8", ["const:550aac:8", "const:4:8"]]
- 00550aac ["CALL", null, ["callee:00c583c0:8"]]
+ 00550aec ["INT_ADD", "register:40f0:8", ["const:550aec:8", "const:4:8"]]
+ 00550aec ["CALL", null, ["callee:00c583c0:8"]]
~~~


<a id="compare-5c727a46f240f479f52fc50b99276f34"></a>

### [`00550f34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550f34.md) → [`00550f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550f74.md) FUN_00550f74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005550b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/005550b0.md) · 呼出先 5件 [`0055e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055e540.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`005550f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005550f0.md) · 呼出先 5件 [`0055e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e580.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.91% / 新版 95.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00550fb8",
      "incomplete_value": false,
      "site": "00550fbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:cb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00550f78",
      "incomplete_value": false,
      "site": "00550f7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:be0:8"
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
      "00550fbc",
      "DATA",
      [
        "storage",
        "00c6abe0",
        null,
        "undefined *"
      ]
    ],
    [
      "00550fd8",
      "DATA",
      [
        "storage",
        "00c6ac48",
        null,
        "undefined *"
      ]
    ],
    [
      "00550ff4",
      "READ",
      [
        "storage",
        "00c9b240",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00550fbc",
      "DATA",
      [
        "storage",
        "00c6acb0",
        null,
        "undefined *"
      ]
    ],
    [
      "00550fd8",
      "DATA",
      [
        "storage",
        "00c6ad18",
        null,
        "undefined *"
      ]
    ],
    [
      "00550ff4",
      "READ",
      [
        "storage",
        "00c9b310",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00550f6c ["INT_ADD", "register:40f0:8", ["const:550f6c:8", "const:4:8"]]
- 00550f6c ["CALL", null, ["callee:0055e580:8"]]
+ 00550fac ["INT_ADD", "register:40f0:8", ["const:550fac:8", "const:4:8"]]
+ 00550fac ["CALL", null, ["callee:0055e580:8"]]
- 00550f78 ["COPY", "tmp:0:8", ["const:be0:8"]]
- 00550f78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00550f78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00550f78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00550fb8 ["COPY", "tmp:0:8", ["const:cb0:8"]]
+ 00550fb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00550fb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00550fb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00550fb4 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:240:8"]]
- 00550fb4 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00550ff4 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:310:8"]]
+ 00550ff4 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8ec46d2b1acd34cfb7bbe86158c01816"></a>

### [`00551274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551274.md) → [`005512b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/005512b4.md) FUN_005512b4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00618200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00618/00618200.md) [`008aac28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008aa/008aac28.md) [`008abcf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008abcf8.md) [`008d8e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8e6c.md) · 呼出先 6件 [`00551ff4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551ff4.md) [`0055c6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c6e4.md) [`00597ecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ecc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`00618240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618240.md) [`008aac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac80.md) [`008abd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd50.md) [`008d8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8ec0.md) · 呼出先 6件 [`00552034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552034.md) [`0055c724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c724.md) [`00597f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f0c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.95% / 新版 87.95%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0055130c",
      "incomplete_value": true,
      "site": "00551314",
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
                "const:bd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005512cc",
      "incomplete_value": true,
      "site": "005512d4",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00551308",
      "incomplete_value": true,
      "site": "00551318",
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
                "const:223:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005512c8",
      "incomplete_value": true,
      "site": "005512d8",
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
                "const:270:8"
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
      "definition_site": "00551308",
      "incomplete_value": true,
      "site": "00551318",
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
      "definition_site": "005512c8",
      "incomplete_value": true,
      "site": "005512d8",
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
      "00551308",
      "READ",
      [
        "storage",
        "002a3270",
        null,
        "string"
      ]
    ],
    [
      "00551308",
      "READ",
      [
        "storage",
        "002a3280",
        null,
        "string"
      ]
    ],
    [
      "0055130c",
      "READ",
      [
        "storage",
        "002c2b90",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00551308",
      "READ",
      [
        "storage",
        "002a3223",
        null,
        "string"
      ]
    ],
    [
      "00551308",
      "READ",
      [
        "storage",
        "002a3233",
        null,
        "string"
      ]
    ],
    [
      "0055130c",
      "READ",
      [
        "storage",
        "002c2bd0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00551318 ["INT_ADD", "register:40f0:8", ["const:551318:8", "const:4:8"]]
- 00551318 ["CALL", null, ["callee:00597f0c:8"]]
+ 00551358 ["INT_ADD", "register:40f0:8", ["const:551358:8", "const:4:8"]]
+ 00551358 ["CALL", null, ["callee:00597f0c:8"]]
- 00551328 ["INT_ADD", "register:40f0:8", ["const:551328:8", "const:4:8"]]
- 00551328 ["CALL", null, ["callee:00c57f80:8"]]
+ 00551368 ["INT_ADD", "register:40f0:8", ["const:551368:8", "const:4:8"]]
+ 00551368 ["CALL", null, ["callee:00c57f80:8"]]
- 005512b8 ["INT_ADD", "register:40f0:8", ["const:5512b8:8", "const:4:8"]]
- 005512b8 ["CALL", null, ["callee:00c57f60:8"]]
+ 005512f8 ["INT_ADD", "register:40f0:8", ["const:5512f8:8", "const:4:8"]]
+ 005512f8 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-63042707bb0d306b859809b3eb64491e"></a>

### [`00551dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551dc0.md) → [`00551e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/00551e00.md) FUN_00551e00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0055e624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055e624.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0055e664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e664.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 91.53% / 新版 91.53%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "00551e50",
      "incomplete_value": true,
      "site": "00551e50",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00551e10",
      "incomplete_value": true,
      "site": "00551e10",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:20:8"
              ]
            ]
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
      "definition_site": "00551e40",
      "incomplete_value": true,
      "site": "00551e50",
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
      "definition_site": "00551e00",
      "incomplete_value": true,
      "site": "00551e10",
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
      "00551e38",
      "READ",
      [
        "storage",
        "00c9b240",
        null,
        "pointer"
      ]
    ],
    [
      "00551e40",
      "READ",
      [
        "storage",
        "00ca6510",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00551e38",
      "READ",
      [
        "storage",
        "00c9b310",
        null,
        "pointer"
      ]
    ],
    [
      "00551e40",
      "READ",
      [
        "storage",
        "00ca6610",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00551e10 ["COPY", "register:0:8", ["register:4048:8"]]
- 00551e10 ["INT_ADD", "register:40f0:8", ["const:551e10:8", "const:4:8"]]
- 00551e10 ["CALLIND", null, ["register:0:8"]]
+ 00551e50 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00551e50 ["INT_ADD", "register:40f0:8", ["const:551e50:8", "const:4:8"]]
+ 00551e50 ["CALLIND", null, ["register:0:8"]]
- 00551de4 ["INT_ADD", "register:40f0:8", ["const:551de4:8", "const:4:8"]]
- 00551de4 ["CALL", null, ["callee:0055e664:8"]]
+ 00551e24 ["INT_ADD", "register:40f0:8", ["const:551e24:8", "const:4:8"]]
+ 00551e24 ["CALL", null, ["callee:0055e664:8"]]
- 00551df8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:240:8"]]
- 00551df8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00551e38 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:310:8"]]
+ 00551e38 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-69749fb927d8b9baf47ddfcfe266e60f"></a>

### [`00551f0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551f0c.md) → [`00551f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/00551f4c.md) FUN_00551f4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0055e5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055e5ac.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0055e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e5ec.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00551f5c",
      "incomplete_value": true,
      "site": "00551f68",
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
            "const:cb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00551f1c",
      "incomplete_value": true,
      "site": "00551f28",
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
            "const:be0:8"
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
      "definition_site": "00551f6c",
      "incomplete_value": true,
      "site": "00551f70",
      "value": [
        "INT_ADD",
        "8",
        [
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
                "const:cb0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00551f2c",
      "incomplete_value": true,
      "site": "00551f30",
      "value": [
        "INT_ADD",
        "8",
        [
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
                "const:be0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
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
      "00551f68",
      "DATA",
      [
        "storage",
        "00c6abe0",
        null,
        "undefined *"
      ]
    ],
    [
      "00551f70",
      "DATA",
      [
        "storage",
        "00c6ac48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00551f68",
      "DATA",
      [
        "storage",
        "00c6acb0",
        null,
        "undefined *"
      ]
    ],
    [
      "00551f70",
      "DATA",
      [
        "storage",
        "00c6ad18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00551f68 ["INT_ADD", "register:40f0:8", ["const:551f68:8", "const:4:8"]]
- 00551f68 ["CALL", null, ["callee:00c57f50:8"]]
+ 00551fa8 ["INT_ADD", "register:40f0:8", ["const:551fa8:8", "const:4:8"]]
+ 00551fa8 ["CALL", null, ["callee:00c57f50:8"]]
- 00551f1c ["COPY", "tmp:0:8", ["const:be0:8"]]
- 00551f1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00551f1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00551f1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00551f5c ["COPY", "tmp:0:8", ["const:cb0:8"]]
+ 00551f5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00551f5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00551f5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00551f40 ["INT_ADD", "register:40f0:8", ["const:551f40:8", "const:4:8"]]
- 00551f40 ["CALL", null, ["callee:00c53da0:8"]]
+ 00551f80 ["INT_ADD", "register:40f0:8", ["const:551f80:8", "const:4:8"]]
+ 00551f80 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-c4b59745b3a6128e2806ab5afd6ff81c"></a>

### [`00551f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551f7c.md) → [`00551fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/00551fbc.md) FUN_00551fbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0055e5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055e5ac.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0055e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e5ec.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00551fcc",
      "incomplete_value": false,
      "site": "00551fd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:cb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00551f8c",
      "incomplete_value": false,
      "site": "00551f98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:be0:8"
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
      "definition_site": "00551fdc",
      "incomplete_value": false,
      "site": "00551fe0",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:cb0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00551f9c",
      "incomplete_value": false,
      "site": "00551fa0",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:be0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
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
      "00551fd8",
      "DATA",
      [
        "storage",
        "00c6abe0",
        null,
        "undefined *"
      ]
    ],
    [
      "00551fe0",
      "DATA",
      [
        "storage",
        "00c6ac48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00551fd8",
      "DATA",
      [
        "storage",
        "00c6acb0",
        null,
        "undefined *"
      ]
    ],
    [
      "00551fe0",
      "DATA",
      [
        "storage",
        "00c6ad18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00551fd8 ["INT_ADD", "register:40f0:8", ["const:551fd8:8", "const:4:8"]]
- 00551fd8 ["CALL", null, ["callee:00c57f50:8"]]
+ 00552018 ["INT_ADD", "register:40f0:8", ["const:552018:8", "const:4:8"]]
+ 00552018 ["CALL", null, ["callee:00c57f50:8"]]
- 00551fe0 ["INT_ADD", "register:40f0:8", ["const:551fe0:8", "const:4:8"]]
- 00551fe0 ["CALL", null, ["callee:0055e5ec:8"]]
+ 00552020 ["INT_ADD", "register:40f0:8", ["const:552020:8", "const:4:8"]]
+ 00552020 ["CALL", null, ["callee:0055e5ec:8"]]
- 00551f8c ["COPY", "tmp:0:8", ["const:be0:8"]]
- 00551f8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00551f8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00551f8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00551fcc ["COPY", "tmp:0:8", ["const:cb0:8"]]
+ 00551fcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00551fcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00551fcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f47cf9150eba0fbf6268a56fe7104d46"></a>

### [`00551ff4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551ff4.md) → [`00552034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552034.md) FUN_00552034

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00551274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551274.md) [`00551ff4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551ff4.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`005512b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/005512b4.md) [`00552034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552034.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.54% / 新版 98.54%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055219c",
      "incomplete_value": false,
      "site": "005521a4",
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
      "definition_site": "0055215c",
      "incomplete_value": false,
      "site": "00552164",
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
      "definition_site": "005522fc",
      "incomplete_value": false,
      "site": "00552304",
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
      "definition_site": "005522bc",
      "incomplete_value": false,
      "site": "005522c4",
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
      "definition_site": "00552314",
      "incomplete_value": false,
      "site": "00552320",
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
      "definition_site": "005522d4",
      "incomplete_value": false,
      "site": "005522e0",
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
      "0055219c",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "005521c0",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "005522fc",
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
      "0055219c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "005521c0",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "005522fc",
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
- 00552164 ["INT_ADD", "register:40f0:8", ["const:552164:8", "const:4:8"]]
- 00552164 ["CALL", null, ["callee:00441ed4:8"]]
+ 005521a4 ["INT_ADD", "register:40f0:8", ["const:5521a4:8", "const:4:8"]]
+ 005521a4 ["CALL", null, ["callee:00441ed4:8"]]
- 005522c4 ["INT_ADD", "register:40f0:8", ["const:5522c4:8", "const:4:8"]]
- 005522c4 ["CALL", null, ["callee:00441ed4:8"]]
+ 00552304 ["INT_ADD", "register:40f0:8", ["const:552304:8", "const:4:8"]]
+ 00552304 ["CALL", null, ["callee:00441ed4:8"]]
- 005522e0 ["INT_ADD", "register:40f0:8", ["const:5522e0:8", "const:4:8"]]
- 005522e0 ["CALL", null, ["callee:00442834:8"]]
+ 00552320 ["INT_ADD", "register:40f0:8", ["const:552320:8", "const:4:8"]]
+ 00552320 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-35213455901f7e6d814da57ae4d846cd"></a>

### [`00552840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00552/00552840.md) → [`00552880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552880.md) FUN_00552880

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00551ff4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551ff4.md) [`00552840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00552/00552840.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`00552034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552034.md) [`00552880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552880.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.53% / 新版 98.53%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005529e4",
      "incomplete_value": false,
      "site": "005529ec",
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
      "definition_site": "005529a4",
      "incomplete_value": false,
      "site": "005529ac",
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
      "definition_site": "00552a08",
      "incomplete_value": false,
      "site": "00552a14",
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
      "definition_site": "005529c8",
      "incomplete_value": false,
      "site": "005529d4",
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
      "definition_site": "00552b44",
      "incomplete_value": false,
      "site": "00552b4c",
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
      "definition_site": "00552b04",
      "incomplete_value": false,
      "site": "00552b0c",
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
      "005529e4",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "00552a08",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "00552b44",
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
      "005529e4",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00552a08",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00552b44",
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
- 005529ac ["INT_ADD", "register:40f0:8", ["const:5529ac:8", "const:4:8"]]
- 005529ac ["CALL", null, ["callee:00441ed4:8"]]
+ 005529ec ["INT_ADD", "register:40f0:8", ["const:5529ec:8", "const:4:8"]]
+ 005529ec ["CALL", null, ["callee:00441ed4:8"]]
- 005529d4 ["INT_ADD", "register:40f0:8", ["const:5529d4:8", "const:4:8"]]
- 005529d4 ["CALL", null, ["callee:00442834:8"]]
+ 00552a14 ["INT_ADD", "register:40f0:8", ["const:552a14:8", "const:4:8"]]
+ 00552a14 ["CALL", null, ["callee:00442834:8"]]
- 00552b0c ["INT_ADD", "register:40f0:8", ["const:552b0c:8", "const:4:8"]]
- 00552b0c ["CALL", null, ["callee:00441ed4:8"]]
+ 00552b4c ["INT_ADD", "register:40f0:8", ["const:552b4c:8", "const:4:8"]]
+ 00552b4c ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-9b9d3791a3d8a8c032361ddf6c44baca"></a>

### [`00553078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00553/00553078.md) → [`005530b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00553/005530b8.md) FUN_005530b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00552840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00552/00552840.md) [`00553078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00553/00553078.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`00552880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552880.md) [`005530b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00553/005530b8.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.52% / 新版 98.52%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00553218",
      "incomplete_value": false,
      "site": "00553220",
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
      "definition_site": "005531d8",
      "incomplete_value": false,
      "site": "005531e0",
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
      "definition_site": "0055323c",
      "incomplete_value": false,
      "site": "00553248",
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
      "definition_site": "005531fc",
      "incomplete_value": false,
      "site": "00553208",
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
      "definition_site": "00553378",
      "incomplete_value": false,
      "site": "00553380",
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
      "definition_site": "00553338",
      "incomplete_value": false,
      "site": "00553340",
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
      "00553218",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "0055323c",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "00553378",
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
      "00553218",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0055323c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00553378",
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
- 005531e0 ["INT_ADD", "register:40f0:8", ["const:5531e0:8", "const:4:8"]]
- 005531e0 ["CALL", null, ["callee:00441ed4:8"]]
+ 00553220 ["INT_ADD", "register:40f0:8", ["const:553220:8", "const:4:8"]]
+ 00553220 ["CALL", null, ["callee:00441ed4:8"]]
- 00553208 ["INT_ADD", "register:40f0:8", ["const:553208:8", "const:4:8"]]
- 00553208 ["CALL", null, ["callee:00442834:8"]]
+ 00553248 ["INT_ADD", "register:40f0:8", ["const:553248:8", "const:4:8"]]
+ 00553248 ["CALL", null, ["callee:00442834:8"]]
- 00553340 ["INT_ADD", "register:40f0:8", ["const:553340:8", "const:4:8"]]
- 00553340 ["CALL", null, ["callee:00441ed4:8"]]
+ 00553380 ["INT_ADD", "register:40f0:8", ["const:553380:8", "const:4:8"]]
+ 00553380 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-e4ead2f312ab9aa5d34b99fc4e7ff0c9"></a>

### [`005538ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00553/005538ac.md) → [`005538ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00553/005538ec.md) FUN_005538ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00553078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00553/00553078.md) [`005538ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00553/005538ac.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`005530b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00553/005530b8.md) [`005538ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00553/005538ec.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.51% / 新版 98.51%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00553a48",
      "incomplete_value": false,
      "site": "00553a50",
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
      "definition_site": "00553a08",
      "incomplete_value": false,
      "site": "00553a10",
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
      "definition_site": "00553a6c",
      "incomplete_value": false,
      "site": "00553a78",
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
      "definition_site": "00553a2c",
      "incomplete_value": false,
      "site": "00553a38",
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
      "definition_site": "00553ba8",
      "incomplete_value": false,
      "site": "00553bb0",
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
      "definition_site": "00553b68",
      "incomplete_value": false,
      "site": "00553b70",
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
      "00553a48",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "00553a6c",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "00553ba8",
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
      "00553a48",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00553a6c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00553ba8",
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
- 00553a10 ["INT_ADD", "register:40f0:8", ["const:553a10:8", "const:4:8"]]
- 00553a10 ["CALL", null, ["callee:00441ed4:8"]]
+ 00553a50 ["INT_ADD", "register:40f0:8", ["const:553a50:8", "const:4:8"]]
+ 00553a50 ["CALL", null, ["callee:00441ed4:8"]]
- 00553a38 ["INT_ADD", "register:40f0:8", ["const:553a38:8", "const:4:8"]]
- 00553a38 ["CALL", null, ["callee:00442834:8"]]
+ 00553a78 ["INT_ADD", "register:40f0:8", ["const:553a78:8", "const:4:8"]]
+ 00553a78 ["CALL", null, ["callee:00442834:8"]]
- 00553b70 ["INT_ADD", "register:40f0:8", ["const:553b70:8", "const:4:8"]]
- 00553b70 ["CALL", null, ["callee:00441ed4:8"]]
+ 00553bb0 ["INT_ADD", "register:40f0:8", ["const:553bb0:8", "const:4:8"]]
+ 00553bb0 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-489add3aa5280c5eb499bda92241218e"></a>

### [`005540cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00554/005540cc.md) → [`0055410c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00554/0055410c.md) FUN_0055410c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005538ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00553/005538ac.md) [`005540cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00554/005540cc.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`005538ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00553/005538ec.md) [`0055410c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00554/0055410c.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00554260",
      "incomplete_value": false,
      "site": "00554268",
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
      "definition_site": "00554220",
      "incomplete_value": false,
      "site": "00554228",
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
      "definition_site": "00554284",
      "incomplete_value": false,
      "site": "00554290",
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
      "definition_site": "00554244",
      "incomplete_value": false,
      "site": "00554250",
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
      "definition_site": "005543bc",
      "incomplete_value": false,
      "site": "005543c4",
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
      "definition_site": "0055437c",
      "incomplete_value": false,
      "site": "00554384",
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
      "00554260",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "00554284",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "005543bc",
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
      "00554260",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00554284",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "005543bc",
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
- 00554228 ["INT_ADD", "register:40f0:8", ["const:554228:8", "const:4:8"]]
- 00554228 ["CALL", null, ["callee:00441ed4:8"]]
+ 00554268 ["INT_ADD", "register:40f0:8", ["const:554268:8", "const:4:8"]]
+ 00554268 ["CALL", null, ["callee:00441ed4:8"]]
- 00554250 ["INT_ADD", "register:40f0:8", ["const:554250:8", "const:4:8"]]
- 00554250 ["CALL", null, ["callee:00442834:8"]]
+ 00554290 ["INT_ADD", "register:40f0:8", ["const:554290:8", "const:4:8"]]
+ 00554290 ["CALL", null, ["callee:00442834:8"]]
- 00554384 ["INT_ADD", "register:40f0:8", ["const:554384:8", "const:4:8"]]
- 00554384 ["CALL", null, ["callee:00441ed4:8"]]
+ 005543c4 ["INT_ADD", "register:40f0:8", ["const:5543c4:8", "const:4:8"]]
+ 005543c4 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-54843d6b99ac7f2c36821a2bd57c17a2"></a>

### [`005548c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00554/005548c8.md) → [`00554908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00554/00554908.md) FUN_00554908

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005540cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00554/005540cc.md) [`005548c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00554/005548c8.md) [`0085b430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b430.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 3件 [`0055410c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00554/0055410c.md) [`00554908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00554/00554908.md) [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00554a58",
      "incomplete_value": false,
      "site": "00554a60",
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
      "definition_site": "00554a18",
      "incomplete_value": false,
      "site": "00554a20",
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
      "definition_site": "00554bb4",
      "incomplete_value": false,
      "site": "00554bbc",
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
      "definition_site": "00554b74",
      "incomplete_value": false,
      "site": "00554b7c",
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
      "definition_site": "00554bcc",
      "incomplete_value": false,
      "site": "00554bd8",
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
      "definition_site": "00554b8c",
      "incomplete_value": false,
      "site": "00554b98",
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
      "00554a58",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "00554a7c",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "00554bb4",
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
      "00554a58",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00554a7c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00554bb4",
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
- 00554a20 ["INT_ADD", "register:40f0:8", ["const:554a20:8", "const:4:8"]]
- 00554a20 ["CALL", null, ["callee:00441ed4:8"]]
+ 00554a60 ["INT_ADD", "register:40f0:8", ["const:554a60:8", "const:4:8"]]
+ 00554a60 ["CALL", null, ["callee:00441ed4:8"]]
- 00554b7c ["INT_ADD", "register:40f0:8", ["const:554b7c:8", "const:4:8"]]
- 00554b7c ["CALL", null, ["callee:00441ed4:8"]]
+ 00554bbc ["INT_ADD", "register:40f0:8", ["const:554bbc:8", "const:4:8"]]
+ 00554bbc ["CALL", null, ["callee:00441ed4:8"]]
- 00554b98 ["INT_ADD", "register:40f0:8", ["const:554b98:8", "const:4:8"]]
- 00554b98 ["CALL", null, ["callee:00442834:8"]]
+ 00554bd8 ["INT_ADD", "register:40f0:8", ["const:554bd8:8", "const:4:8"]]
+ 00554bd8 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-c350da0a40ca0548e79eccb833fbd14f"></a>

### [`005550b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/005550b0.md) → [`005550f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005550f0.md) FUN_005550f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00551eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551eac.md) · 呼出先 6件 [`00550f34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550f34.md) [`00555214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/00555214.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00551eec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/00551eec.md) · 呼出先 6件 [`00550f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550f74.md) [`00555254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555254.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00555128",
      "incomplete_value": false,
      "site": "00555144",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:da8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005550e8",
      "incomplete_value": false,
      "site": "00555104",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
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
      "00555144",
      "DATA",
      [
        "storage",
        "00c6acd8",
        null,
        "pointer"
      ]
    ],
    [
      "005551d8",
      "READ",
      [
        "storage",
        "00c6ace8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00555144",
      "DATA",
      [
        "storage",
        "00c6ada8",
        null,
        "pointer"
      ]
    ],
    [
      "005551d8",
      "READ",
      [
        "storage",
        "00c6adb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005550d8 ["INT_ADD", "register:40f0:8", ["const:5550d8:8", "const:4:8"]]
- 005550d8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00555118 ["INT_ADD", "register:40f0:8", ["const:555118:8", "const:4:8"]]
+ 00555118 ["CALL", null, ["callee:00c57f60:8"]]
- 005550e8 ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 005550e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005550e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005550e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00555128 ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 00555128 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00555128 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00555128 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055510c ["INT_ADD", "register:40f0:8", ["const:55510c:8", "const:4:8"]]
- 0055510c ["CALL", null, ["callee:00550f74:8"]]
+ 0055514c ["INT_ADD", "register:40f0:8", ["const:55514c:8", "const:4:8"]]
+ 0055514c ["CALL", null, ["callee:00550f74:8"]]
~~~


<a id="compare-ad408ecad87c752fc66d4986b7615381"></a>

### [`005551d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/005551d4.md) → [`00555214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555214.md) FUN_00555214

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
      "definition_site": "00555218",
      "incomplete_value": false,
      "site": "0055521c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:da8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005551d8",
      "incomplete_value": false,
      "site": "005551dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
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
      "0055521c",
      "DATA",
      [
        "storage",
        "00c6acd8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0055521c",
      "DATA",
      [
        "storage",
        "00c6ada8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005551d8 ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 005551d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005551d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005551d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00555218 ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 00555218 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00555218 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00555218 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c88d487fcc15e68b09e799cc61d3961e"></a>

### [`005551e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/005551e4.md) → [`00555224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555224.md) FUN_00555224

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
      "definition_site": "00555234",
      "incomplete_value": false,
      "site": "0055523c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:da8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005551f4",
      "incomplete_value": false,
      "site": "005551fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
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
      "0055523c",
      "DATA",
      [
        "storage",
        "00c6acd8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0055523c",
      "DATA",
      [
        "storage",
        "00c6ada8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005551f4 ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 005551f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005551f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005551f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00555234 ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 00555234 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00555234 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00555234 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00555200 ["INT_ADD", "register:40f0:8", ["const:555200:8", "const:4:8"]]
- 00555200 ["CALL", null, ["callee:00c57f70:8"]]
+ 00555240 ["INT_ADD", "register:40f0:8", ["const:555240:8", "const:4:8"]]
+ 00555240 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-3e25d265cde78f7793aaf1f36e3506a4"></a>

### [`00555274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/00555274.md) → [`005552b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552b4.md) FUN_005552b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00590db8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00590/00590db8.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00590df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590df8.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "005552c0",
      "incomplete_value": false,
      "site": "005552c0",
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
            "const:d08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00555280",
      "incomplete_value": false,
      "site": "00555280",
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
            "const:c08:8"
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
      "005552b8",
      "READ",
      [
        "storage",
        "00ca5c08",
        null,
        "undefined4"
      ]
    ],
    [
      "005552c0",
      "WRITE",
      [
        "storage",
        "00ca5c08",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "005552b8",
      "READ",
      [
        "storage",
        "00ca5d08",
        null,
        "undefined4"
      ]
    ],
    [
      "005552c0",
      "WRITE",
      [
        "storage",
        "00ca5d08",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00555280 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c08:8"]]
- 00555280 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
+ 005552c0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d08:8"]]
+ 005552c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
- 00555278 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c08:8"]]
- 00555278 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00555278 ["INT_ZEXT", "register:4048:8", ["tmp:1:4"]]
+ 005552b8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d08:8"]]
+ 005552b8 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
+ 005552b8 ["INT_ZEXT", "register:4048:8", ["tmp:1:4"]]
~~~


<a id="compare-fc40889417241d76db40f521f449e5fd"></a>

### [`00555478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/00555478.md) → [`005554b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005554b8.md) FUN_005554b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005552c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/005552c4.md) · 呼出先 13件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`004684e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/004684e8.md) [`0046c44c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c44c.md) [`00555e0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/00555e0c.md) [`0055a6f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a6f4.md)
- 新版 呼出元 1件 [`00555304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555304.md) · 呼出先 13件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00468528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468528.md) [`0046c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c48c.md) [`00555e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555e4c.md) [`0055a734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a734.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 95.19% / 新版 95.19%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 6件

アドレスに依存する影響 `branch_value` 5件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00555588",
      "incomplete_value": true,
      "site": "00555588",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00555548",
      "incomplete_value": true,
      "site": "00555548",
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
            "const:c58:8"
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0055565c",
      "incomplete_value": true,
      "site": "0055565c",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055561c",
      "incomplete_value": true,
      "site": "0055561c",
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
            "const:c58:8"
          ]
        ]
      ]
    },
    "ordinal": 47,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00555734",
      "incomplete_value": true,
      "site": "00555734",
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
            "const:d58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005556f4",
      "incomplete_value": true,
      "site": "005556f4",
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
            "const:c58:8"
          ]
        ]
      ]
    },
    "ordinal": 63,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00555510",
      "READ",
      [
        "storage",
        "00ca5c68",
        null,
        "undefined1"
      ]
    ],
    [
      "00555518",
      "READ",
      [
        "storage",
        "00ca5c50",
        null,
        "undefined8"
      ]
    ],
    [
      "0055551c",
      "WRITE",
      [
        "storage",
        "00ca5c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00555510",
      "READ",
      [
        "storage",
        "00ca5d68",
        null,
        "undefined1"
      ]
    ],
    [
      "00555518",
      "READ",
      [
        "storage",
        "00ca5d50",
        null,
        "undefined8"
      ]
    ],
    [
      "0055551c",
      "WRITE",
      [
        "storage",
        "00ca5d58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00555548 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c58:8"]]
- 00555548 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d8:8"]]
+ 00555588 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d58:8"]]
+ 00555588 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d8:8"]]
- 0055561c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c58:8"]]
- 0055561c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d0:8"]]
+ 0055565c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d58:8"]]
+ 0055565c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d0:8"]]
- 005556e4 ["INT_ADD", "register:40f0:8", ["const:5556e4:8", "const:4:8"]]
- 005556e4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00555724 ["INT_ADD", "register:40f0:8", ["const:555724:8", "const:4:8"]]
+ 00555724 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-b9a3f2eb59cbdbc9d19811a583ed2b04"></a>

### [`00555e0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/00555e0c.md) → [`00555e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555e4c.md) FUN_00555e4c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00555478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/00555478.md) [`00555c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/00555c94.md) · 呼出先 10件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046c44c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c44c.md) [`00559874`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00559/00559874.md) [`0055b248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055b/0055b248.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`005554b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005554b8.md) [`00555cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555cd4.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c48c.md) [`005598b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/005598b4.md) [`0055b288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b288.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.17% / 新版 99.17%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0055700c",
      "incomplete_value": true,
      "site": "00557010",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:190:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00556fcc",
      "incomplete_value": true,
      "site": "00556fd0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:150:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 211,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00555e8c",
      "READ",
      [
        "storage",
        "00c9b250",
        null,
        "pointer"
      ]
    ],
    [
      "00555e98",
      "READ",
      [
        "storage",
        "00ca6454",
        null,
        "undefined4"
      ]
    ],
    [
      "00555f7c",
      "READ",
      [
        "storage",
        "00ca6450",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00555e8c",
      "READ",
      [
        "storage",
        "00c9b320",
        null,
        "pointer"
      ]
    ],
    [
      "00555e98",
      "READ",
      [
        "storage",
        "00ca6554",
        null,
        "undefined4"
      ]
    ],
    [
      "00555f7c",
      "READ",
      [
        "storage",
        "00ca6550",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00555e4c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:250:8"]]
- 00555e4c ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 00555e8c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:320:8"]]
+ 00555e8c ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
- 00555f38 ["COPY", "tmp:0:8", ["const:450:8"]]
- 00555f38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00555f38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00555f38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00555f78 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 00555f78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00555f78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00555f78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00555f54 ["INT_ADD", "register:40f0:8", ["const:555f54:8", "const:4:8"]]
- 00555f54 ["CALL", null, ["callee:00c57f60:8"]]
+ 00555f94 ["INT_ADD", "register:40f0:8", ["const:555f94:8", "const:4:8"]]
+ 00555f94 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-e892f21801a0cd877171f6260d2d072e"></a>

### [`00559964`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00559/00559964.md) → [`005599a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/005599a4.md) FUN_005599a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0055a53c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a53c.md) · 呼出先 14件 [`004684e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/004684e8.md) [`0046c460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c460.md) [`00555c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/00555c94.md) [`00559c10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00559/00559c10.md) [`00559f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00559/00559f40.md)
- 新版 呼出元 1件 [`0055a57c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a57c.md) · 呼出先 14件 [`00468528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468528.md) [`0046c4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c4a0.md) [`00555cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555cd4.md) [`00559c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/00559c50.md) [`00559f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/00559f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.58% / 新版 94.58%

優先判定に残った影響 `call_argument_candidate` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00559ac8",
      "incomplete_value": false,
      "site": "00559acc",
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
            "const:d10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00559a88",
      "incomplete_value": false,
      "site": "00559a8c",
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
            "const:c10:8"
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
      "definition_site": "00559b2c",
      "incomplete_value": false,
      "site": "00559b30",
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
            "const:d10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00559aec",
      "incomplete_value": false,
      "site": "00559af0",
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
            "const:c10:8"
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
      "definition_site": "00559b74",
      "incomplete_value": false,
      "site": "00559b84",
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
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00559b34",
      "incomplete_value": false,
      "site": "00559b44",
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
            "const:c28:8"
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
      "005599dc",
      "READ",
      [
        "storage",
        "00ca5c28",
        null,
        "undefined1"
      ]
    ],
    [
      "005599e4",
      "READ",
      [
        "storage",
        "00ca5c10",
        null,
        "undefined8"
      ]
    ],
    [
      "005599e8",
      "WRITE",
      [
        "storage",
        "00ca5c18",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "005599dc",
      "READ",
      [
        "storage",
        "00ca5d28",
        null,
        "undefined1"
      ]
    ],
    [
      "005599e4",
      "READ",
      [
        "storage",
        "00ca5d10",
        null,
        "undefined8"
      ]
    ],
    [
      "005599e8",
      "WRITE",
      [
        "storage",
        "00ca5d18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00559a8c ["INT_ADD", "register:40f0:8", ["const:559a8c:8", "const:4:8"]]
- 00559a8c ["CALL", null, ["callee:00559c50:8"]]
+ 00559acc ["INT_ADD", "register:40f0:8", ["const:559acc:8", "const:4:8"]]
+ 00559acc ["CALL", null, ["callee:00559c50:8"]]
- 00559af0 ["INT_ADD", "register:40f0:8", ["const:559af0:8", "const:4:8"]]
- 00559af0 ["CALL", null, ["callee:00559f80:8"]]
+ 00559b30 ["INT_ADD", "register:40f0:8", ["const:559b30:8", "const:4:8"]]
+ 00559b30 ["CALL", null, ["callee:00559f80:8"]]
- 00559b34 ["COPY", "tmp:0:8", ["const:c28:8"]]
- 00559b34 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00559b34 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00559b34 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00559b74 ["COPY", "tmp:0:8", ["const:d28:8"]]
+ 00559b74 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00559b74 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00559b74 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8f546d55ea6f98f8df151b998b6d5d53"></a>

### [`0055a438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a438.md) → [`0055a478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a478.md) FUN_0055a478

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00467ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467ffc.md) · 呼出先 8件 [`004684e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/004684e8.md) [`00555c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/00555c94.md) [`00559c10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00559/00559c10.md) [`00559f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00559/00559f40.md) [`0058ffa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058ffa8.md)
- 新版 呼出元 1件 [`0046803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/0046803c.md) · 呼出先 8件 [`00468528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468528.md) [`00555cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555cd4.md) [`00559c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/00559c50.md) [`00559f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/00559f80.md) [`0058ffe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058ffe8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055a518",
      "incomplete_value": false,
      "site": "0055a524",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055a4d8",
      "incomplete_value": false,
      "site": "0055a4e4",
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
            "const:c48:8"
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
      "definition_site": "0055a540",
      "incomplete_value": false,
      "site": "0055a558",
      "value": [
        "leaf",
        "const:468528:8"
      ]
    },
    "old": {
      "definition_site": "0055a500",
      "incomplete_value": false,
      "site": "0055a518",
      "value": [
        "leaf",
        "const:4684e8:8"
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055a548",
      "incomplete_value": false,
      "site": "0055a558",
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
    "old": {
      "definition_site": "0055a508",
      "incomplete_value": false,
      "site": "0055a518",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c62000:8"
          ],
          [
            "leaf",
            "const:f90:8"
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
      "0055a490",
      "READ",
      [
        "storage",
        "00ca5c48",
        null,
        "undefined1"
      ]
    ],
    [
      "0055a4a0",
      "READ",
      [
        "storage",
        "00ca5c30",
        null,
        "undefined8"
      ]
    ],
    [
      "0055a4b0",
      "PARAM",
      [
        "storage",
        "00ca5c30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0055a490",
      "READ",
      [
        "storage",
        "00ca5d48",
        null,
        "undefined1"
      ]
    ],
    [
      "0055a4a0",
      "READ",
      [
        "storage",
        "00ca5d30",
        null,
        "undefined8"
      ]
    ],
    [
      "0055a4b0",
      "PARAM",
      [
        "storage",
        "00ca5d30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a4d8 ["COPY", "tmp:0:8", ["const:c48:8"]]
- 0055a4d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0055a4d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0055a4d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0055a518 ["COPY", "tmp:0:8", ["const:d48:8"]]
+ 0055a518 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0055a518 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0055a518 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 0055a4e4 ["INT_ADD", "register:40f0:8", ["const:55a4e4:8", "const:4:8"]]
- 0055a4e4 ["CALL", null, ["callee:00c57f20:8"]]
+ 0055a524 ["INT_ADD", "register:40f0:8", ["const:55a524:8", "const:4:8"]]
+ 0055a524 ["CALL", null, ["callee:00c57f20:8"]]
- 0055a518 ["INT_ADD", "register:40f0:8", ["const:55a518:8", "const:4:8"]]
- 0055a518 ["CALL", null, ["callee:00c57f00:8"]]
+ 0055a558 ["INT_ADD", "register:40f0:8", ["const:55a558:8", "const:4:8"]]
+ 0055a558 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-8441d84986476bb7562ce60b8023f56a"></a>

### [`0055a5a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a5a8.md) → [`0055a5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a5e8.md) FUN_0055a5e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00468d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468d08.md) [`00468e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468e20.md) [`0046a9fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a9fc.md) [`0046ab48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046ab48.md) · 呼出先 0件 
- 新版 呼出元 4件 [`00468d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468d48.md) [`00468e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468e60.md) [`0046aa3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046aa3c.md) [`0046ab88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046ab88.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0055a5f0",
      "incomplete_value": true,
      "site": "0055a5f4",
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
      "definition_site": "0055a5b0",
      "incomplete_value": true,
      "site": "0055a5b4",
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
      "0055a5f0",
      "READ",
      [
        "storage",
        "00ca6410",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0055a5f0",
      "READ",
      [
        "storage",
        "00ca6510",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a5ac ["COPY", "tmp:0:8", ["const:410:8"]]
- 0055a5ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055a5ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055a5ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055a5ec ["COPY", "tmp:0:8", ["const:510:8"]]
+ 0055a5ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055a5ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055a5ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6a46154b4a26f21ce6b6dbf557554b55"></a>

### [`0055a5fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a5fc.md) → [`0055a63c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a63c.md) FUN_0055a63c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00467dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467dbc.md) [`00468d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468d08.md) [`00468e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468e20.md) [`0046a9fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a9fc.md) [`0046ab48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046ab48.md) · 呼出先 0件 
- 新版 呼出元 5件 [`00467dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467dfc.md) [`00468d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468d48.md) [`00468e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468e60.md) [`0046aa3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046aa3c.md) [`0046ab88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046ab88.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0055a65c",
      "incomplete_value": true,
      "site": "0055a65c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:338:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055a61c",
      "incomplete_value": true,
      "site": "0055a61c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:268:8"
              ]
            ]
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
      "0055a648",
      "READ",
      [
        "storage",
        "00c9b240",
        null,
        "pointer"
      ]
    ],
    [
      "0055a64c",
      "READ",
      [
        "storage",
        "00ca6510",
        null,
        "undefined8"
      ]
    ],
    [
      "0055a654",
      "READ",
      [
        "storage",
        "00c9b268",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0055a648",
      "READ",
      [
        "storage",
        "00c9b310",
        null,
        "pointer"
      ]
    ],
    [
      "0055a64c",
      "READ",
      [
        "storage",
        "00ca6610",
        null,
        "undefined8"
      ]
    ],
    [
      "0055a654",
      "READ",
      [
        "storage",
        "00c9b338",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a608 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:240:8"]]
- 0055a608 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0055a648 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:310:8"]]
+ 0055a648 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0055a614 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:268:8"]]
- 0055a614 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 0055a654 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:338:8"]]
+ 0055a654 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4ce122bad9d3b73d49242cb29cee0b80"></a>

### [`0055a624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a624.md) → [`0055a664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a664.md) FUN_0055a664

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0046796c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/0046796c.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f1c.md) · 呼出先 0件 
- 新版 呼出元 3件 [`004679ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004679ac.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_destination` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0055a674",
      "incomplete_value": true,
      "site": "0055a674",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:340:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055a634",
      "incomplete_value": true,
      "site": "0055a634",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:270:8"
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
    "kind": "store_destination",
    "new": {
      "definition_site": "0055a674",
      "incomplete_value": true,
      "site": "0055a674",
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
            "const:4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055a634",
      "incomplete_value": true,
      "site": "0055a634",
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
            "const:4:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0055a684",
      "incomplete_value": true,
      "site": "0055a684",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055a644",
      "incomplete_value": true,
      "site": "0055a644",
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
            "const:8:8"
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
      "0055a670",
      "READ",
      [
        "storage",
        "00c9b270",
        null,
        "pointer"
      ]
    ],
    [
      "0055a674",
      "WRITE",
      [
        "storage",
        "00ca3e20",
        null,
        "undefined4"
      ]
    ],
    [
      "0055a674",
      "WRITE",
      [
        "storage",
        "00ca3e24",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0055a670",
      "READ",
      [
        "storage",
        "00c9b340",
        null,
        "pointer"
      ]
    ],
    [
      "0055a674",
      "WRITE",
      [
        "storage",
        "00ca3ef0",
        null,
        "undefined4"
      ]
    ],
    [
      "0055a674",
      "WRITE",
      [
        "storage",
        "00ca3ef4",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a630 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:270:8"]]
- 0055a630 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0055a670 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:340:8"]]
+ 0055a670 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0055a640 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:248:8"]]
- 0055a640 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 0055a680 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:318:8"]]
+ 0055a680 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-57ceca8d5e3cdb3434ad32e386ae6c33"></a>

### [`0055a6b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a6b4.md) → [`0055a6f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a6f4.md) FUN_0055a6f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`00618200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00618/00618200.md) [`008aac28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008aa/008aac28.md) [`008abcf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008abcf8.md) [`008d8e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8e6c.md) [`00b2ce48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2ce48.md) · 呼出先 0件 
- 新版 呼出元 5件 [`00618240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618240.md) [`008aac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac80.md) [`008abd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd50.md) [`008d8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8ec0.md) [`00b2cee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2cee4.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0055a6fc",
      "incomplete_value": true,
      "site": "0055a700",
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
      "definition_site": "0055a6bc",
      "incomplete_value": true,
      "site": "0055a6c0",
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
      "0055a6fc",
      "READ",
      [
        "storage",
        "00ca6460",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0055a6fc",
      "READ",
      [
        "storage",
        "00ca6560",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a6b8 ["COPY", "tmp:0:8", ["const:460:8"]]
- 0055a6b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055a6b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055a6b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055a6f8 ["COPY", "tmp:0:8", ["const:560:8"]]
+ 0055a6f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055a6f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055a6f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1e61643ba1ff1a6bd1324d4cc2d0db7b"></a>

### [`0055a6c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a6c4.md) → [`0055a704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a704.md) FUN_0055a704

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`00618200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00618/00618200.md) [`008aac28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008aa/008aac28.md) [`008abcf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008abcf8.md) [`008d8e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8e6c.md) [`00b2ce48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2ce48.md) · 呼出先 0件 
- 新版 呼出元 5件 [`00618240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618240.md) [`008aac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac80.md) [`008abd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd50.md) [`008d8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8ec0.md) [`00b2cee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2cee4.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0055a70c",
      "incomplete_value": true,
      "site": "0055a710",
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
      "definition_site": "0055a6cc",
      "incomplete_value": true,
      "site": "0055a6d0",
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
      "0055a70c",
      "READ",
      [
        "storage",
        "00ca645c",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0055a70c",
      "READ",
      [
        "storage",
        "00ca655c",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a6c8 ["COPY", "tmp:0:8", ["const:45c:8"]]
- 0055a6c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055a6c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055a6c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055a708 ["COPY", "tmp:0:8", ["const:55c:8"]]
+ 0055a708 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055a708 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055a708 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-26ad82b0085c1c81edb41bf9bd404cf0"></a>

### [`0055a6d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a6d4.md) → [`0055a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a714.md) FUN_0055a714

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0055a71c",
      "incomplete_value": true,
      "site": "0055a720",
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
      "definition_site": "0055a6dc",
      "incomplete_value": true,
      "site": "0055a6e0",
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
      "0055a71c",
      "READ",
      [
        "storage",
        "00ca6468",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0055a71c",
      "READ",
      [
        "storage",
        "00ca6568",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a6d8 ["COPY", "tmp:0:8", ["const:468:8"]]
- 0055a6d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055a6d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055a6d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055a718 ["COPY", "tmp:0:8", ["const:568:8"]]
+ 0055a718 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055a718 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055a718 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-21e5471c9261ab669d4237ae834e7b82"></a>

### [`0055a6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a6e4.md) → [`0055a724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a724.md) FUN_0055a724

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0055a72c",
      "incomplete_value": true,
      "site": "0055a730",
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
      "definition_site": "0055a6ec",
      "incomplete_value": true,
      "site": "0055a6f0",
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
      "0055a72c",
      "READ",
      [
        "storage",
        "00ca6464",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0055a72c",
      "READ",
      [
        "storage",
        "00ca6564",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a6e8 ["COPY", "tmp:0:8", ["const:464:8"]]
- 0055a6e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055a6e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055a6e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055a728 ["COPY", "tmp:0:8", ["const:564:8"]]
+ 0055a728 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055a728 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055a728 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e7f73f9b8ddbd34f223fc3235e28d7b9"></a>

### [`0055b138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055b/0055b138.md) → [`0055b178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b178.md) FUN_0055b178

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0055a6f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a6f4.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0055a734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a734.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055b184",
      "incomplete_value": false,
      "site": "0055b188",
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
      "definition_site": "0055b144",
      "incomplete_value": false,
      "site": "0055b148",
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
      "0055b184",
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
      "0055b184",
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
- 0055b148 ["INT_ADD", "register:40f0:8", ["const:55b148:8", "const:4:8"]]
- 0055b148 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0055b188 ["INT_ADD", "register:40f0:8", ["const:55b188:8", "const:4:8"]]
+ 0055b188 ["CALL", null, ["callee:0043b7b8:8"]]
- 0055b144 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0055b144 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0055b144 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0055b144 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0055b184 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0055b184 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0055b184 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0055b184 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c911d35de4f5b1be9eee3e9f1ab66c6c"></a>

### [`0055b14c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055b/0055b14c.md) → [`0055b18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b18c.md) FUN_0055b18c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0055a6f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a6f4.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0055a734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a734.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055b198",
      "incomplete_value": false,
      "site": "0055b19c",
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
      "definition_site": "0055b158",
      "incomplete_value": false,
      "site": "0055b15c",
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
      "0055b198",
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
      "0055b198",
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
- 0055b15c ["INT_ADD", "register:40f0:8", ["const:55b15c:8", "const:4:8"]]
- 0055b15c ["CALL", null, ["callee:0043b7b8:8"]]
+ 0055b19c ["INT_ADD", "register:40f0:8", ["const:55b19c:8", "const:4:8"]]
+ 0055b19c ["CALL", null, ["callee:0043b7b8:8"]]
- 0055b158 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0055b158 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0055b158 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0055b158 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0055b198 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0055b198 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0055b198 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0055b198 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-1378b2995182982a0fed29081361a85f"></a>

### [`0055b248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055b/0055b248.md) → [`0055b288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b288.md) FUN_0055b288

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`005552c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/005552c4.md) [`00555c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/00555c94.md) [`00555e0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/00555e0c.md) [`00559874`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00559/00559874.md) [`00559f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00559/00559f40.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 5件 [`00555304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555304.md) [`00555cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555cd4.md) [`00555e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555e4c.md) [`005598b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/005598b4.md) [`00559f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/00559f80.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055b294",
      "incomplete_value": false,
      "site": "0055b298",
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
      "definition_site": "0055b254",
      "incomplete_value": false,
      "site": "0055b258",
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
      "0055b294",
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
      "0055b294",
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
- 0055b258 ["INT_ADD", "register:40f0:8", ["const:55b258:8", "const:4:8"]]
- 0055b258 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0055b298 ["INT_ADD", "register:40f0:8", ["const:55b298:8", "const:4:8"]]
+ 0055b298 ["CALL", null, ["callee:0043b7b8:8"]]
- 0055b254 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0055b254 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0055b254 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0055b254 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0055b294 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0055b294 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0055b294 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0055b294 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e1924a337b7974d8562a67694b98aa8e"></a>

### [`0055b25c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055b/0055b25c.md) → [`0055b29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b29c.md) FUN_0055b29c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0055c360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c360.md) · 呼出先 5件 [`0055b380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055b/0055b380.md) [`0055c6d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c6d4.md) [`0055c6dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c6dc.md) [`0055e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055e540.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 1件 [`0055c3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c3a0.md) · 呼出先 5件 [`0055b3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b3c0.md) [`0055c714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c714.md) [`0055c71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c71c.md) [`0055e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e580.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.81% / 新版 82.81%

優先判定に残った影響 `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055b2bc",
      "incomplete_value": false,
      "site": "0055b2bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055b27c",
      "incomplete_value": false,
      "site": "0055b27c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:e38:8"
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
      "definition_site": "0055b2d8",
      "incomplete_value": false,
      "site": "0055b2d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:e18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055b298",
      "incomplete_value": false,
      "site": "0055b298",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:d48:8"
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
      "definition_site": "0055b2d8",
      "incomplete_value": false,
      "site": "0055b2d8",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:e18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055b298",
      "incomplete_value": false,
      "site": "0055b298",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:d48:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
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
      "0055b2bc",
      "DATA",
      [
        "storage",
        "00c6ae38",
        null,
        "undefined *"
      ]
    ],
    [
      "0055b2d8",
      "DATA",
      [
        "storage",
        "00c6ad48",
        null,
        "undefined *"
      ]
    ],
    [
      "0055b2d8",
      "DATA",
      [
        "storage",
        "00c6adb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055b2bc",
      "DATA",
      [
        "storage",
        "00c6af08",
        null,
        "undefined *"
      ]
    ],
    [
      "0055b2d8",
      "DATA",
      [
        "storage",
        "00c6ae18",
        null,
        "undefined *"
      ]
    ],
    [
      "0055b2d8",
      "DATA",
      [
        "storage",
        "00c6ae80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055b270 ["COPY", "tmp:0:8", ["const:e38:8"]]
- 0055b270 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055b270 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055b270 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055b2b0 ["COPY", "tmp:0:8", ["const:f08:8"]]
+ 0055b2b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055b2b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055b2b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055b280 ["INT_ADD", "register:40f0:8", ["const:55b280:8", "const:4:8"]]
- 0055b280 ["CALL", null, ["callee:0055e580:8"]]
+ 0055b2c0 ["INT_ADD", "register:40f0:8", ["const:55b2c0:8", "const:4:8"]]
+ 0055b2c0 ["CALL", null, ["callee:0055e580:8"]]
- 0055b288 ["COPY", "tmp:0:8", ["const:d48:8"]]
- 0055b288 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055b288 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055b288 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055b2c8 ["COPY", "tmp:0:8", ["const:e18:8"]]
+ 0055b2c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055b2c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055b2c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-104dace24d0372a2d0b8483a9683554b"></a>

### [`0055c360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c360.md) → [`0055c3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c3a0.md) FUN_0055c3a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 2件 [`004894a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/004894a8.md) [`00a994a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a994a4.md) · 呼出先 2件 [`0055b25c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055b/0055b25c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`004894e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/004894e8.md) [`00a99514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99514.md) · 呼出先 2件 [`0055b29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b29c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c3d0",
      "incomplete_value": false,
      "site": "0055c3dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c390",
      "incomplete_value": false,
      "site": "0055c39c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:e60:8"
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
      "0055c3dc",
      "DATA",
      [
        "storage",
        "00c6ae60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c3dc",
      "DATA",
      [
        "storage",
        "00c6af30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c384 ["INT_ADD", "register:40f0:8", ["const:55c384:8", "const:4:8"]]
- 0055c384 ["CALL", null, ["callee:00c57f60:8"]]
+ 0055c3c4 ["INT_ADD", "register:40f0:8", ["const:55c3c4:8", "const:4:8"]]
+ 0055c3c4 ["CALL", null, ["callee:00c57f60:8"]]
- 0055c390 ["COPY", "tmp:0:8", ["const:e60:8"]]
- 0055c390 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c390 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c390 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055c3d0 ["COPY", "tmp:0:8", ["const:f30:8"]]
+ 0055c3d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c3d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c3d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055c3a8 ["INT_ADD", "register:40f0:8", ["const:55c3a8:8", "const:4:8"]]
- 0055c3a8 ["CALL", null, ["callee:0055b29c:8"]]
+ 0055c3e8 ["INT_ADD", "register:40f0:8", ["const:55c3e8:8", "const:4:8"]]
+ 0055c3e8 ["CALL", null, ["callee:0055b29c:8"]]
~~~


<a id="compare-2820abce8b3666a65471cfc1ca1c8065"></a>

### [`0055c3e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c3e4.md) → [`0055c424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c424.md) FUN_0055c424

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0055e5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055e5ac.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0055e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e5ec.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c438",
      "incomplete_value": false,
      "site": "0055c444",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:e18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c3f8",
      "incomplete_value": false,
      "site": "0055c404",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:d48:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c450",
      "incomplete_value": false,
      "site": "0055c450",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:e18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c410",
      "incomplete_value": false,
      "site": "0055c410",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:d48:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
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
      "0055c444",
      "DATA",
      [
        "storage",
        "00c6ad48",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c450",
      "DATA",
      [
        "storage",
        "00c6adb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c444",
      "DATA",
      [
        "storage",
        "00c6ae18",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c450",
      "DATA",
      [
        "storage",
        "00c6ae80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c450 ["INT_ADD", "register:40f0:8", ["const:55c450:8", "const:4:8"]]
- 0055c450 ["CALL", null, ["callee:00c53da0:8"]]
+ 0055c490 ["INT_ADD", "register:40f0:8", ["const:55c490:8", "const:4:8"]]
+ 0055c490 ["CALL", null, ["callee:00c53da0:8"]]
- 0055c3f8 ["COPY", "tmp:0:8", ["const:d48:8"]]
- 0055c3f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c3f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c3f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055c438 ["COPY", "tmp:0:8", ["const:e18:8"]]
+ 0055c438 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c438 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c438 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055c400 ["COPY", "register:40a0:8", ["register:4000:8"]]
~~~


<a id="compare-de529c24e5efdeece34b60de5860f17e"></a>

### [`0055c484`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c484.md) → [`0055c4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c4c4.md) FUN_0055c4c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0055e5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055e5ac.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0055e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e5ec.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c4d8",
      "incomplete_value": false,
      "site": "0055c4e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:e18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c498",
      "incomplete_value": false,
      "site": "0055c4a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:d48:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c4f0",
      "incomplete_value": false,
      "site": "0055c4f0",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:e18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c4b0",
      "incomplete_value": false,
      "site": "0055c4b0",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:d48:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
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
      "0055c4e4",
      "DATA",
      [
        "storage",
        "00c6ad48",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c4f0",
      "DATA",
      [
        "storage",
        "00c6adb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c4e4",
      "DATA",
      [
        "storage",
        "00c6ae18",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c4f0",
      "DATA",
      [
        "storage",
        "00c6ae80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c4f0 ["INT_ADD", "register:40f0:8", ["const:55c4f0:8", "const:4:8"]]
- 0055c4f0 ["CALL", null, ["callee:00c53da0:8"]]
+ 0055c530 ["INT_ADD", "register:40f0:8", ["const:55c530:8", "const:4:8"]]
+ 0055c530 ["CALL", null, ["callee:00c53da0:8"]]
- 0055c498 ["COPY", "tmp:0:8", ["const:d48:8"]]
- 0055c498 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c498 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c498 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055c4d8 ["COPY", "tmp:0:8", ["const:e18:8"]]
+ 0055c4d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c4d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c4d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055c4a0 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-1ad948da6d22bce4add45d12519515ff"></a>

### [`0055c52c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c52c.md) → [`0055c56c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c56c.md) FUN_0055c56c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0055e5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055e5ac.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0055e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e5ec.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c58c",
      "incomplete_value": false,
      "site": "0055c58c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:e18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c54c",
      "incomplete_value": false,
      "site": "0055c54c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:d48:8"
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
      "definition_site": "0055c58c",
      "incomplete_value": false,
      "site": "0055c58c",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:e18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c54c",
      "incomplete_value": false,
      "site": "0055c54c",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:d48:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
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
      "0055c58c",
      "DATA",
      [
        "storage",
        "00c6ad48",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c58c",
      "DATA",
      [
        "storage",
        "00c6adb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c58c",
      "DATA",
      [
        "storage",
        "00c6ae18",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c58c",
      "DATA",
      [
        "storage",
        "00c6ae80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c58c ["INT_ADD", "register:40f0:8", ["const:55c58c:8", "const:4:8"]]
- 0055c58c ["CALL", null, ["callee:00c53da0:8"]]
+ 0055c5cc ["INT_ADD", "register:40f0:8", ["const:55c5cc:8", "const:4:8"]]
+ 0055c5cc ["CALL", null, ["callee:00c53da0:8"]]
- 0055c53c ["COPY", "tmp:0:8", ["const:d48:8"]]
- 0055c53c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c53c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c53c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055c57c ["COPY", "tmp:0:8", ["const:e18:8"]]
+ 0055c57c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c57c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c57c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055c55c ["INT_ADD", "register:40f0:8", ["const:55c55c:8", "const:4:8"]]
- 0055c55c ["CALL", null, ["callee:00c53da0:8"]]
+ 0055c59c ["INT_ADD", "register:40f0:8", ["const:55c59c:8", "const:4:8"]]
+ 0055c59c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-10e34d2834c3d7bdd3806ae272fdfb24"></a>

### [`0055c664`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c664.md) → [`0055c6a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c6a4.md) FUN_0055c6a4

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
      "definition_site": "0055c6a8",
      "incomplete_value": false,
      "site": "0055c6ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c668",
      "incomplete_value": false,
      "site": "0055c66c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:e60:8"
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
      "0055c6ac",
      "DATA",
      [
        "storage",
        "00c6ae60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c6ac",
      "DATA",
      [
        "storage",
        "00c6af30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c668 ["COPY", "tmp:0:8", ["const:e60:8"]]
- 0055c668 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c668 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c668 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055c6a8 ["COPY", "tmp:0:8", ["const:f30:8"]]
+ 0055c6a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c6a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c6a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d7deb88bae936bfe4c5399452f3f9462"></a>

### [`0055c6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c6e4.md) → [`0055c724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c724.md) FUN_0055c724

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 3件 [`00551274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551274.md) [`0055b4b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055b/0055b4b8.md) [`00a994a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a994a4.md) · 呼出先 2件 [`0055c888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c888.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`005512b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/005512b4.md) [`0055b4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b4f8.md) [`00a99514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99514.md) · 呼出先 2件 [`0055c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c8c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c750",
      "incomplete_value": false,
      "site": "0055c758",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:fd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c710",
      "incomplete_value": false,
      "site": "0055c718",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f00:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c764",
      "incomplete_value": false,
      "site": "0055c764",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c724",
      "incomplete_value": false,
      "site": "0055c724",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:eb0:8"
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
      "0055c758",
      "DATA",
      [
        "storage",
        "00c6af00",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c764",
      "DATA",
      [
        "storage",
        "00c6aeb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c758",
      "DATA",
      [
        "storage",
        "00c6afd0",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c764",
      "DATA",
      [
        "storage",
        "00c6af80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c708 ["INT_ADD", "register:40f0:8", ["const:55c708:8", "const:4:8"]]
- 0055c708 ["CALL", null, ["callee:00c57f60:8"]]
+ 0055c748 ["INT_ADD", "register:40f0:8", ["const:55c748:8", "const:4:8"]]
+ 0055c748 ["CALL", null, ["callee:00c57f60:8"]]
- 0055c710 ["COPY", "tmp:0:8", ["const:f00:8"]]
- 0055c710 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c710 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c710 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055c750 ["COPY", "tmp:0:8", ["const:fd0:8"]]
+ 0055c750 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c750 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c750 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055c714 ["COPY", "register:40c0:8", ["register:4000:8"]]
~~~


<a id="compare-9b4a170d1bd85c09ce101d9edf1ad55b"></a>

### [`0055c824`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c824.md) → [`0055c864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c864.md) FUN_0055c864

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c870",
      "incomplete_value": false,
      "site": "0055c874",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c830",
      "incomplete_value": false,
      "site": "0055c834",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:eb0:8"
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
      "0055c874",
      "DATA",
      [
        "storage",
        "00c6aeb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c874",
      "DATA",
      [
        "storage",
        "00c6af80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c830 ["COPY", "tmp:0:8", ["const:eb0:8"]]
- 0055c830 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0055c830 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0055c830 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0055c870 ["COPY", "tmp:0:8", ["const:f80:8"]]
+ 0055c870 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0055c870 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0055c870 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-23b287eaeff8f936ad111a81ba691a25"></a>

### [`0055c848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c848.md) → [`0055c888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c888.md) FUN_0055c888

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
      "definition_site": "0055c890",
      "incomplete_value": false,
      "site": "0055c894",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c850",
      "incomplete_value": false,
      "site": "0055c854",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:eb0:8"
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
      "0055c894",
      "DATA",
      [
        "storage",
        "00c6aeb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c894",
      "DATA",
      [
        "storage",
        "00c6af80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c850 ["COPY", "tmp:0:8", ["const:eb0:8"]]
- 0055c850 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0055c850 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0055c850 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0055c890 ["COPY", "tmp:0:8", ["const:f80:8"]]
+ 0055c890 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0055c890 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0055c890 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0055c874 ["INT_ADD", "register:40f0:8", ["const:55c874:8", "const:4:8"]]
- 0055c874 ["CALL", null, ["callee:00c57f80:8"]]
+ 0055c8b4 ["INT_ADD", "register:40f0:8", ["const:55c8b4:8", "const:4:8"]]
+ 0055c8b4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-570f630f6742eeb219ccf65a04e7a5c2"></a>

### [`0055c9b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c9b4.md) → [`0055c9f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c9f4.md) FUN_0055c9f4

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
      "definition_site": "0055c9f8",
      "incomplete_value": false,
      "site": "0055c9fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:fd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c9b8",
      "incomplete_value": false,
      "site": "0055c9bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
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
      "0055c9fc",
      "DATA",
      [
        "storage",
        "00c6af00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c9fc",
      "DATA",
      [
        "storage",
        "00c6afd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c9b8 ["COPY", "tmp:0:8", ["const:f00:8"]]
- 0055c9b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c9b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c9b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055c9f8 ["COPY", "tmp:0:8", ["const:fd0:8"]]
+ 0055c9f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c9f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c9f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ef2a3a927e5c08fb14fef956e83d39fa"></a>

### [`0055c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c9c4.md) → [`0055ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055ca04.md) FUN_0055ca04

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
      "definition_site": "0055ca14",
      "incomplete_value": false,
      "site": "0055ca1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:fd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c9d4",
      "incomplete_value": false,
      "site": "0055c9dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
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
      "0055ca1c",
      "DATA",
      [
        "storage",
        "00c6af00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055ca1c",
      "DATA",
      [
        "storage",
        "00c6afd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c9d4 ["COPY", "tmp:0:8", ["const:f00:8"]]
- 0055c9d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c9d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c9d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055ca14 ["COPY", "tmp:0:8", ["const:fd0:8"]]
+ 0055ca14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055ca14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055ca14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055c9e0 ["INT_ADD", "register:40f0:8", ["const:55c9e0:8", "const:4:8"]]
- 0055c9e0 ["CALL", null, ["callee:00c57f70:8"]]
+ 0055ca20 ["INT_ADD", "register:40f0:8", ["const:55ca20:8", "const:4:8"]]
+ 0055ca20 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-579b4df082fdfa0d701158f0d75d751a"></a>

### [`0055ca04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055ca04.md) → [`0055ca44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055ca44.md) FUN_0055ca44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0055c7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c7c4.md) · 呼出先 3件 [`0055c888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c888.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`0055c804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c804.md) · 呼出先 3件 [`0055c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c8c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.05% / 新版 86.05%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055ca74",
      "incomplete_value": false,
      "site": "0055ca80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:fd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055ca34",
      "incomplete_value": false,
      "site": "0055ca40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f00:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055ca94",
      "incomplete_value": false,
      "site": "0055ca94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055ca54",
      "incomplete_value": false,
      "site": "0055ca54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:eb0:8"
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
      "0055ca80",
      "DATA",
      [
        "storage",
        "00c6af00",
        null,
        "undefined *"
      ]
    ],
    [
      "0055ca94",
      "DATA",
      [
        "storage",
        "00c6aeb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055ca80",
      "DATA",
      [
        "storage",
        "00c6afd0",
        null,
        "undefined *"
      ]
    ],
    [
      "0055ca94",
      "DATA",
      [
        "storage",
        "00c6af80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055ca94 ["INT_ADD", "register:40f0:8", ["const:55ca94:8", "const:4:8"]]
- 0055ca94 ["CALL", null, ["callee:00c58010:8"]]
+ 0055cad4 ["INT_ADD", "register:40f0:8", ["const:55cad4:8", "const:4:8"]]
+ 0055cad4 ["CALL", null, ["callee:00c58010:8"]]
- 0055ca2c ["INT_ADD", "register:40f0:8", ["const:55ca2c:8", "const:4:8"]]
- 0055ca2c ["CALL", null, ["callee:00c57f60:8"]]
+ 0055ca6c ["INT_ADD", "register:40f0:8", ["const:55ca6c:8", "const:4:8"]]
+ 0055ca6c ["CALL", null, ["callee:00c57f60:8"]]
- 0055ca34 ["COPY", "tmp:0:8", ["const:f00:8"]]
- 0055ca34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055ca34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055ca34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055ca74 ["COPY", "tmp:0:8", ["const:fd0:8"]]
+ 0055ca74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055ca74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055ca74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2e92ad3216c5ff897a1525251f413e22"></a>

### [`0055cae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055cae0.md) → [`0055cb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cb20.md) FUN_0055cb20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0055d3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055d/0055d3f0.md) · 呼出先 11件 [`0046c44c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c44c.md) [`00535b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00535/00535b6c.md) [`0055d4c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055d/0055d4c8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`0055d430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d430.md) · 呼出先 11件 [`0046c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c48c.md) [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`0055d508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d508.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.50% / 新版 96.50%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055cb50",
      "incomplete_value": false,
      "site": "0055cb5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055cb10",
      "incomplete_value": false,
      "site": "0055cb1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f50:8"
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
      "definition_site": "0055cba4",
      "incomplete_value": false,
      "site": "0055cbb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055cb64",
      "incomplete_value": false,
      "site": "0055cb70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f90:8"
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
      "0055cb5c",
      "DATA",
      [
        "storage",
        "00c6af50",
        null,
        "undefined *"
      ]
    ],
    [
      "0055cbb0",
      "DATA",
      [
        "storage",
        "00c6af90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055cb5c",
      "DATA",
      [
        "storage",
        "00c6b020",
        null,
        "undefined *"
      ]
    ],
    [
      "0055cbb0",
      "DATA",
      [
        "storage",
        "00c6b060",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055cb0c ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055cb4c ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055cb10 ["COPY", "tmp:0:8", ["const:f50:8"]]
- 0055cb10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055cb10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055cb10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055cb50 ["COPY", "tmp:0:8", ["const:20:8"]]
+ 0055cb50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055cb50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055cb50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055cb14 ["COPY", "register:40a0:8", ["register:4000:8"]]
~~~


<a id="compare-250e4cdedeb24f8de55a5afe6b95c514"></a>

### [`0055d3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055d/0055d3f0.md) → [`0055d430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d430.md) FUN_0055d430

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00467bf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467bf0.md) · 呼出先 2件 [`0055cae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055cae0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00467c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467c30.md) · 呼出先 2件 [`0055cb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cb20.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055d464",
      "incomplete_value": false,
      "site": "0055d470",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055d424",
      "incomplete_value": false,
      "site": "0055d430",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:20:8"
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
      "0055d470",
      "DATA",
      [
        "storage",
        "00c6b020",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055d470",
      "DATA",
      [
        "storage",
        "00c6b0f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055d418 ["INT_ADD", "register:40f0:8", ["const:55d418:8", "const:4:8"]]
- 0055d418 ["CALL", null, ["callee:00c57f60:8"]]
+ 0055d458 ["INT_ADD", "register:40f0:8", ["const:55d458:8", "const:4:8"]]
+ 0055d458 ["CALL", null, ["callee:00c57f60:8"]]
- 0055d424 ["COPY", "tmp:0:8", ["const:20:8"]]
- 0055d424 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055d424 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055d424 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055d464 ["COPY", "tmp:0:8", ["const:f0:8"]]
+ 0055d464 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d464 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d464 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055d444 ["INT_ADD", "register:40f0:8", ["const:55d444:8", "const:4:8"]]
- 0055d444 ["CALL", null, ["callee:0055cb20:8"]]
+ 0055d484 ["INT_ADD", "register:40f0:8", ["const:55d484:8", "const:4:8"]]
+ 0055d484 ["CALL", null, ["callee:0055cb20:8"]]
~~~


<a id="compare-f624ea96de872ab58ce1b8632965d64d"></a>

### [`0055d47c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055d/0055d47c.md) → [`0055d4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d4bc.md) FUN_0055d4bc

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
      "definition_site": "0055d4c0",
      "incomplete_value": false,
      "site": "0055d4c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055d480",
      "incomplete_value": false,
      "site": "0055d484",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f90:8"
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
      "0055d4c4",
      "DATA",
      [
        "storage",
        "00c6af90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055d4c4",
      "DATA",
      [
        "storage",
        "00c6b060",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055d47c ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055d4bc ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055d480 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 0055d480 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055d480 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055d480 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055d4c0 ["COPY", "tmp:0:8", ["const:60:8"]]
+ 0055d4c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d4c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d4c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2f145e8fc0fceb7efa528061b3f9b504"></a>

### [`0055d48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055d/0055d48c.md) → [`0055d4cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d4cc.md) FUN_0055d4cc

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
      "definition_site": "0055d4dc",
      "incomplete_value": false,
      "site": "0055d4e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055d49c",
      "incomplete_value": false,
      "site": "0055d4a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f90:8"
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
      "0055d4e4",
      "DATA",
      [
        "storage",
        "00c6af90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055d4e4",
      "DATA",
      [
        "storage",
        "00c6b060",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055d498 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055d4d8 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055d49c ["COPY", "tmp:0:8", ["const:f90:8"]]
- 0055d49c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055d49c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055d49c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055d4dc ["COPY", "tmp:0:8", ["const:60:8"]]
+ 0055d4dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d4dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d4dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055d4a8 ["INT_ADD", "register:40f0:8", ["const:55d4a8:8", "const:4:8"]]
- 0055d4a8 ["CALL", null, ["callee:00c57f70:8"]]
+ 0055d4e8 ["INT_ADD", "register:40f0:8", ["const:55d4e8:8", "const:4:8"]]
+ 0055d4e8 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-f2aad640eb4a6e9a03288c9422dcacbb"></a>

### [`0055d4c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055d/0055d4c8.md) → [`0055d508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d508.md) FUN_0055d508

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0055cae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055cae0.md) · 呼出先 1件 [`0055df00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055d/0055df00.md)
- 新版 呼出元 1件 [`0055cb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cb20.md) · 呼出先 1件 [`0055df40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055df40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0055d524",
      "incomplete_value": true,
      "site": "0055d528",
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
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055d4e4",
      "incomplete_value": true,
      "site": "0055d4e8",
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
            "const:fe0:8"
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
      "0055d528",
      "DATA",
      [
        "storage",
        "00c6afe0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055d528",
      "DATA",
      [
        "storage",
        "00c6b0b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055d4e0 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055d520 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055d4e4 ["COPY", "tmp:0:8", ["const:fe0:8"]]
- 0055d4e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055d4e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055d4e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055d524 ["COPY", "tmp:0:8", ["const:b0:8"]]
+ 0055d524 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d524 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d524 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055d538 ["INT_ADD", "register:40f0:8", ["const:55d538:8", "const:4:8"]]
- 0055d538 ["CALL", null, ["callee:0055df40:8"]]
+ 0055d578 ["INT_ADD", "register:40f0:8", ["const:55d578:8", "const:4:8"]]
+ 0055d578 ["CALL", null, ["callee:0055df40:8"]]
~~~


<a id="compare-b8566e49b6c7f30cbd8f6b34592aaf16"></a>

### [`0055e47c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055e47c.md) → [`0055e4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e4bc.md) FUN_0055e4bc

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
      "definition_site": "0055e4c0",
      "incomplete_value": false,
      "site": "0055e4c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055e480",
      "incomplete_value": false,
      "site": "0055e484",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:20:8"
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
      "0055e4c4",
      "DATA",
      [
        "storage",
        "00c6b020",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055e4c4",
      "DATA",
      [
        "storage",
        "00c6b0f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055e480 ["COPY", "tmp:0:8", ["const:20:8"]]
- 0055e480 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055e480 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055e480 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055e4c0 ["COPY", "tmp:0:8", ["const:f0:8"]]
+ 0055e4c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e4c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e4c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b59bdbf84451ff9569a1e368de67ba67"></a>

### [`0055e48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055e48c.md) → [`0055e4cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e4cc.md) FUN_0055e4cc

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
      "definition_site": "0055e4dc",
      "incomplete_value": false,
      "site": "0055e4e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055e49c",
      "incomplete_value": false,
      "site": "0055e4a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:20:8"
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
      "0055e4e4",
      "DATA",
      [
        "storage",
        "00c6b020",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055e4e4",
      "DATA",
      [
        "storage",
        "00c6b0f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055e49c ["COPY", "tmp:0:8", ["const:20:8"]]
- 0055e49c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055e49c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055e49c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055e4dc ["COPY", "tmp:0:8", ["const:f0:8"]]
+ 0055e4dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e4dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e4dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055e4a8 ["INT_ADD", "register:40f0:8", ["const:55e4a8:8", "const:4:8"]]
- 0055e4a8 ["CALL", null, ["callee:00c57f70:8"]]
+ 0055e4e8 ["INT_ADD", "register:40f0:8", ["const:55e4e8:8", "const:4:8"]]
+ 0055e4e8 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-177c714ba637a6c121544eccdb72c81b"></a>

### [`0055e4bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055e4bc.md) → [`0055e4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e4fc.md) FUN_0055e4fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055e514",
      "incomplete_value": false,
      "site": "0055e518",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055e4d4",
      "incomplete_value": false,
      "site": "0055e4d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f50:8"
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
      "0055e518",
      "DATA",
      [
        "storage",
        "00c6af50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055e518",
      "DATA",
      [
        "storage",
        "00c6b020",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055e4d0 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055e510 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055e4d4 ["COPY", "tmp:0:8", ["const:f50:8"]]
- 0055e4d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055e4d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055e4d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055e514 ["COPY", "tmp:0:8", ["const:20:8"]]
+ 0055e514 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e514 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e514 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055e4e8 ["INT_ADD", "register:40f0:8", ["const:55e4e8:8", "const:4:8"]]
- 0055e4e8 ["CALL", null, ["callee:00c53da0:8"]]
+ 0055e528 ["INT_ADD", "register:40f0:8", ["const:55e528:8", "const:4:8"]]
+ 0055e528 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-289ec999b2a6592720d3278db45138c6"></a>

### [`0055e5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055e5ac.md) → [`0055e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e5ec.md) FUN_0055e5ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`00551f0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551f0c.md) [`00551f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00551/00551f7c.md) [`0055c3e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c3e4.md) [`0055c484`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c484.md) [`0055c52c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055c/0055c52c.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 6件 [`00551f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/00551f4c.md) [`00551fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/00551fbc.md) [`0055c424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c424.md) [`0055c4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c4c4.md) [`0055c56c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c56c.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055e600",
      "incomplete_value": false,
      "site": "0055e604",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:140:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055e5c0",
      "incomplete_value": false,
      "site": "0055e5c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:70:8"
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
      "0055e604",
      "DATA",
      [
        "storage",
        "00c6b070",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055e604",
      "DATA",
      [
        "storage",
        "00c6b140",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055e5c0 ["COPY", "tmp:0:8", ["const:70:8"]]
- 0055e5c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055e5c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055e5c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055e600 ["COPY", "tmp:0:8", ["const:140:8"]]
+ 0055e600 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e600 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e600 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055e5d4 ["INT_ADD", "register:40f0:8", ["const:55e5d4:8", "const:4:8"]]
- 0055e5d4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0055e614 ["INT_ADD", "register:40f0:8", ["const:55e614:8", "const:4:8"]]
+ 0055e614 ["CALL", null, ["callee:00c53da0:8"]]
- 0055e5f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055e5f4 ["INT_ADD", "register:40f0:8", ["const:55e5f4:8", "const:4:8"]]
- 0055e5f4 ["CALLIND", null, ["register:0:8"]]
+ 0055e634 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055e634 ["INT_ADD", "register:40f0:8", ["const:55e634:8", "const:4:8"]]
+ 0055e634 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-76e872d9b154afc172470297bfeb41a0"></a>

### [`0055ed08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055e/0055ed08.md) → [`0055ed48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055ed48.md) FUN_0055ed48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0048d424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048d/0048d424.md) · 呼出先 7件 [`00581494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00581/00581494.md) [`00597618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597618.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0048d464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048d464.md) · 呼出先 7件 [`005814d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00581/005814d4.md) [`00597658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597658.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.00% / 新版 97.00%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055ef3c",
      "incomplete_value": false,
      "site": "0055ef44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:218:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055eefc",
      "incomplete_value": false,
      "site": "0055ef04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:148:8"
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
      "definition_site": "0055ef68",
      "incomplete_value": false,
      "site": "0055ef68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055ef28",
      "incomplete_value": false,
      "site": "0055ef28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055ef84",
      "incomplete_value": false,
      "site": "0055ef84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055ef44",
      "incomplete_value": false,
      "site": "0055ef44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
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
      "0055ef44",
      "DATA",
      [
        "storage",
        "00c6b148",
        null,
        "undefined *"
      ]
    ],
    [
      "0055ef68",
      "DATA",
      [
        "storage",
        "00c6b0d0",
        null,
        "undefined *"
      ]
    ],
    [
      "0055ef84",
      "DATA",
      [
        "storage",
        "00c6b0d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055ef44",
      "DATA",
      [
        "storage",
        "00c6b218",
        null,
        "undefined *"
      ]
    ],
    [
      "0055ef68",
      "DATA",
      [
        "storage",
        "00c6b1a0",
        null,
        "undefined *"
      ]
    ],
    [
      "0055ef84",
      "DATA",
      [
        "storage",
        "00c6b1a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055ed54 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055ed54 ["INT_ADD", "register:40f0:8", ["const:55ed54:8", "const:4:8"]]
- 0055ed54 ["CALLIND", null, ["register:0:8"]]
+ 0055ed94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055ed94 ["INT_ADD", "register:40f0:8", ["const:55ed94:8", "const:4:8"]]
+ 0055ed94 ["CALLIND", null, ["register:0:8"]]
- 0055ed6c ["INT_ADD", "register:40f0:8", ["const:55ed6c:8", "const:4:8"]]
- 0055ed6c ["CALL", null, ["callee:005814d4:8"]]
+ 0055edac ["INT_ADD", "register:40f0:8", ["const:55edac:8", "const:4:8"]]
+ 0055edac ["CALL", null, ["callee:005814d4:8"]]
- 0055ed88 ["COPY", "register:0:8", ["register:4048:8"]]
- 0055ed88 ["INT_ADD", "register:40f0:8", ["const:55ed88:8", "const:4:8"]]
- 0055ed88 ["CALLIND", null, ["register:0:8"]]
+ 0055edc8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0055edc8 ["INT_ADD", "register:40f0:8", ["const:55edc8:8", "const:4:8"]]
+ 0055edc8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1f5f229d3872d74c474b89641487dd45"></a>

### [`0055f348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f348.md) → [`0055f388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f388.md) FUN_0055f388

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055f3a0",
      "incomplete_value": false,
      "site": "0055f3a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f360",
      "incomplete_value": false,
      "site": "0055f364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:d0:8"
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
      "0055f3a4",
      "DATA",
      [
        "storage",
        "00c6b0d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055f3a4",
      "DATA",
      [
        "storage",
        "00c6b1a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f360 ["COPY", "tmp:0:8", ["const:d0:8"]]
- 0055f360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055f360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055f360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055f3a0 ["COPY", "tmp:0:8", ["const:1a0:8"]]
+ 0055f3a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f3a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f3a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055f374 ["INT_ADD", "register:40f0:8", ["const:55f374:8", "const:4:8"]]
- 0055f374 ["CALL", null, ["callee:00c53da0:8"]]
+ 0055f3b4 ["INT_ADD", "register:40f0:8", ["const:55f3b4:8", "const:4:8"]]
+ 0055f3b4 ["CALL", null, ["callee:00c53da0:8"]]
- 0055f38c ["INT_ADD", "register:40f0:8", ["const:55f38c:8", "const:4:8"]]
- 0055f38c ["CALL", null, ["callee:00c53da0:8"]]
+ 0055f3cc ["INT_ADD", "register:40f0:8", ["const:55f3cc:8", "const:4:8"]]
+ 0055f3cc ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-37b6d3c6f3f130ba0af2ff22625c8e4d"></a>

### [`0055f3e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f3e4.md) → [`0055f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f424.md) FUN_0055f424

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055f43c",
      "incomplete_value": false,
      "site": "0055f440",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f3fc",
      "incomplete_value": false,
      "site": "0055f400",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:d0:8"
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
      "0055f440",
      "DATA",
      [
        "storage",
        "00c6b0d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055f440",
      "DATA",
      [
        "storage",
        "00c6b1a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f440 ["INT_ADD", "register:40f0:8", ["const:55f440:8", "const:4:8"]]
- 0055f440 ["CALL", null, ["callee:00c53da0:8"]]
+ 0055f480 ["INT_ADD", "register:40f0:8", ["const:55f480:8", "const:4:8"]]
+ 0055f480 ["CALL", null, ["callee:00c53da0:8"]]
- 0055f3fc ["COPY", "tmp:0:8", ["const:d0:8"]]
- 0055f3fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055f3fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055f3fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055f43c ["COPY", "tmp:0:8", ["const:1a0:8"]]
+ 0055f43c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f43c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f43c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055f410 ["INT_ADD", "register:40f0:8", ["const:55f410:8", "const:4:8"]]
- 0055f410 ["CALL", null, ["callee:00c53da0:8"]]
+ 0055f450 ["INT_ADD", "register:40f0:8", ["const:55f450:8", "const:4:8"]]
+ 0055f450 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-e052e89eba076e91011aa4472e81a0b8"></a>

### [`0055f470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f470.md) → [`0055f4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f4b0.md) FUN_0055f4b0

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
      "definition_site": "0055f4b4",
      "incomplete_value": false,
      "site": "0055f4b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:218:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f474",
      "incomplete_value": false,
      "site": "0055f478",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:148:8"
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
      "0055f4b8",
      "DATA",
      [
        "storage",
        "00c6b148",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055f4b8",
      "DATA",
      [
        "storage",
        "00c6b218",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f474 ["COPY", "tmp:0:8", ["const:148:8"]]
- 0055f474 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055f474 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055f474 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055f4b4 ["COPY", "tmp:0:8", ["const:218:8"]]
+ 0055f4b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f4b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f4b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e0f7b1901e7ab202af7ac3b8fbd3c05a"></a>

### [`0055f480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f480.md) → [`0055f4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f4c0.md) FUN_0055f4c0

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
      "definition_site": "0055f4d0",
      "incomplete_value": false,
      "site": "0055f4d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:218:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f490",
      "incomplete_value": false,
      "site": "0055f498",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:148:8"
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
      "0055f4d8",
      "DATA",
      [
        "storage",
        "00c6b148",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055f4d8",
      "DATA",
      [
        "storage",
        "00c6b218",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f490 ["COPY", "tmp:0:8", ["const:148:8"]]
- 0055f490 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055f490 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055f490 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055f4d0 ["COPY", "tmp:0:8", ["const:218:8"]]
+ 0055f4d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f4d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f4d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055f49c ["INT_ADD", "register:40f0:8", ["const:55f49c:8", "const:4:8"]]
- 0055f49c ["CALL", null, ["callee:00c57f70:8"]]
+ 0055f4dc ["INT_ADD", "register:40f0:8", ["const:55f4dc:8", "const:4:8"]]
+ 0055f4dc ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-ab08e863deb2df17b23b30741925339a"></a>

### [`0055f4c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f4c4.md) → [`0055f504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f504.md) FUN_0055f504

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 18件 [`0048035c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/0048035c.md) [`004803f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004803f0.md) [`00480484`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480484.md) [`00480628`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480628.md) [`004806bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004806bc.md) · 呼出先 2件 [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 18件 [`0048039c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/0048039c.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`004804c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004804c4.md) [`00480668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480668.md) [`004806fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004806fc.md) · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination

命令の説明率　旧版 68.18% / 新版 68.18%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0055f54c",
      "incomplete_value": true,
      "site": "0055f54c",
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
            "const:d74:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f50c",
      "incomplete_value": true,
      "site": "0055f50c",
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
            "const:c74:8"
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
      "definition_site": "0055f530",
      "incomplete_value": false,
      "site": "0055f534",
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
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f4f0",
      "incomplete_value": false,
      "site": "0055f4f4",
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
            "const:c78:8"
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
      "definition_site": "0055f548",
      "incomplete_value": false,
      "site": "0055f550",
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
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f508",
      "incomplete_value": false,
      "site": "0055f510",
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
            "const:c78:8"
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
      "0055f514",
      "READ",
      [
        "storage",
        "00ca5c78",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f520",
      "READ",
      [
        "storage",
        "00ca5c74",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f530",
      "PARAM",
      [
        "storage",
        "00ca5c78",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0055f514",
      "READ",
      [
        "storage",
        "00ca5d78",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f520",
      "READ",
      [
        "storage",
        "00ca5d74",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f530",
      "PARAM",
      [
        "storage",
        "00ca5d78",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f4d0 ["COPY", "tmp:0:8", ["const:c78:8"]]
- 0055f4d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055f4d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055f4d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055f510 ["COPY", "tmp:0:8", ["const:d78:8"]]
+ 0055f510 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f510 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f510 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055f4f4 ["INT_ADD", "register:40f0:8", ["const:55f4f4:8", "const:4:8"]]
- 0055f4f4 ["CALL", null, ["callee:00c57f20:8"]]
+ 0055f534 ["INT_ADD", "register:40f0:8", ["const:55f534:8", "const:4:8"]]
+ 0055f534 ["CALL", null, ["callee:00c57f20:8"]]
- 0055f50c ["COPY", "tmp:0:4", ["register:4048:4"]]
- 0055f50c ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:c74:8"]]
- 0055f50c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 0055f54c ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 0055f54c ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:d74:8"]]
+ 0055f54c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
~~~


<a id="compare-16adf7dc307395602bdf72ca2bf9ac77"></a>

### [`0055f578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f578.md) → [`0055f5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f5b8.md) FUN_0055f5b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005610b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/005610b4.md) [`00a9f41c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9f/00a9f41c.md) · 呼出先 5件 [`005603c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/005603c0.md) [`00560468`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/00560468.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 2件 [`005610f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/005610f4.md) [`00a9f48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9f/00a9f48c.md) · 呼出先 5件 [`00560400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560400.md) [`005604a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005604a8.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 79.41% / 新版 79.41%

優先判定に残った影響 `call_argument_candidate` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055f5fc",
      "incomplete_value": true,
      "site": "0055f600",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f5bc",
      "incomplete_value": true,
      "site": "0055f5c0",
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
            "const:c90:8"
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
      "definition_site": "0055f618",
      "incomplete_value": false,
      "site": "0055f62c",
      "value": [
        "leaf",
        "const:5604a8:8"
      ]
    },
    "old": {
      "definition_site": "0055f5d8",
      "incomplete_value": false,
      "site": "0055f5ec",
      "value": [
        "leaf",
        "const:560468:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055f620",
      "incomplete_value": false,
      "site": "0055f62c",
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
            "const:d80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f5e0",
      "incomplete_value": false,
      "site": "0055f5ec",
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
            "const:c80:8"
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
      "0055f5d0",
      "READ",
      [
        "storage",
        "00ca5c90",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f5dc",
      "READ",
      [
        "storage",
        "00ca5c80",
        null,
        "undefined8"
      ]
    ],
    [
      "0055f5fc",
      "PARAM",
      [
        "storage",
        "00ca5c90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0055f5d0",
      "READ",
      [
        "storage",
        "00ca5d90",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f5dc",
      "READ",
      [
        "storage",
        "00ca5d80",
        null,
        "undefined8"
      ]
    ],
    [
      "0055f5fc",
      "PARAM",
      [
        "storage",
        "00ca5d90",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f5c0 ["INT_ADD", "register:40f0:8", ["const:55f5c0:8", "const:4:8"]]
- 0055f5c0 ["CALL", null, ["callee:00c57f20:8"]]
+ 0055f600 ["INT_ADD", "register:40f0:8", ["const:55f600:8", "const:4:8"]]
+ 0055f600 ["CALL", null, ["callee:00c57f20:8"]]
- 0055f5ec ["INT_ADD", "register:40f0:8", ["const:55f5ec:8", "const:4:8"]]
- 0055f5ec ["CALL", null, ["callee:00c57f00:8"]]
+ 0055f62c ["INT_ADD", "register:40f0:8", ["const:55f62c:8", "const:4:8"]]
+ 0055f62c ["CALL", null, ["callee:00c57f00:8"]]
- 0055f5f8 ["INT_ADD", "register:40f0:8", ["const:55f5f8:8", "const:4:8"]]
- 0055f5f8 ["CALL", null, ["callee:00c57f40:8"]]
+ 0055f638 ["INT_ADD", "register:40f0:8", ["const:55f638:8", "const:4:8"]]
+ 0055f638 ["CALL", null, ["callee:00c57f40:8"]]
~~~


<a id="compare-2b7a8ab28aabdaa213f065d622f1707c"></a>

### [`0055f618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f618.md) → [`0055f658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f658.md) FUN_0055f658

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a75dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a75/00a75dac.md) · 呼出先 5件 [`005603c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/005603c0.md) [`00560468`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/00560468.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) · 呼出先 5件 [`00560400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560400.md) [`005604a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005604a8.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 69.44% / 新版 69.44%

優先判定に残った影響 `call_argument_candidate` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055f6a4",
      "incomplete_value": false,
      "site": "0055f6a8",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f664",
      "incomplete_value": false,
      "site": "0055f668",
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
            "const:c90:8"
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
      "definition_site": "0055f6c0",
      "incomplete_value": false,
      "site": "0055f6d4",
      "value": [
        "leaf",
        "const:5604a8:8"
      ]
    },
    "old": {
      "definition_site": "0055f680",
      "incomplete_value": false,
      "site": "0055f694",
      "value": [
        "leaf",
        "const:560468:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055f6c8",
      "incomplete_value": false,
      "site": "0055f6d4",
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
            "const:d80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f688",
      "incomplete_value": false,
      "site": "0055f694",
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
            "const:c80:8"
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
      "0055f670",
      "READ",
      [
        "storage",
        "00ca5c90",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f684",
      "READ",
      [
        "storage",
        "00ca5c80",
        null,
        "undefined8"
      ]
    ],
    [
      "0055f6a4",
      "PARAM",
      [
        "storage",
        "00ca5c90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0055f670",
      "READ",
      [
        "storage",
        "00ca5d90",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f684",
      "READ",
      [
        "storage",
        "00ca5d80",
        null,
        "undefined8"
      ]
    ],
    [
      "0055f6a4",
      "PARAM",
      [
        "storage",
        "00ca5d90",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f628 ["COPY", "tmp:0:8", ["const:c90:8"]]
- 0055f628 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055f628 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055f628 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055f668 ["COPY", "tmp:0:8", ["const:d90:8"]]
+ 0055f668 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f668 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f668 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055f668 ["INT_ADD", "register:40f0:8", ["const:55f668:8", "const:4:8"]]
- 0055f668 ["CALL", null, ["callee:00c57f20:8"]]
+ 0055f6a8 ["INT_ADD", "register:40f0:8", ["const:55f6a8:8", "const:4:8"]]
+ 0055f6a8 ["CALL", null, ["callee:00c57f20:8"]]
- 0055f694 ["INT_ADD", "register:40f0:8", ["const:55f694:8", "const:4:8"]]
- 0055f694 ["CALL", null, ["callee:00c57f00:8"]]
+ 0055f6d4 ["INT_ADD", "register:40f0:8", ["const:55f6d4:8", "const:4:8"]]
+ 0055f6d4 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-b6c479075ae0a001e72951d30edc9677"></a>

### [`0055f6c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f6c8.md) → [`0055f708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f708.md) FUN_0055f708

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 9件 [`0055f868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f868.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fa0.md) [`00c57fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0055f8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f8a8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md) [`00c58080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58080.md)

変更の種類 constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0055f7b0",
      "incomplete_value": true,
      "site": "0055f7b4",
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
      "definition_site": "0055f770",
      "incomplete_value": true,
      "site": "0055f774",
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
    "ordinal": 20,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0055f700",
      "READ",
      [
        "storage",
        "00c9abb8",
        null,
        "pointer"
      ]
    ],
    [
      "0055f754",
      "READ",
      [
        "storage",
        "00c93208",
        null,
        "pointer __((offset(0x18)))"
      ]
    ],
    [
      "0055f754",
      "READ",
      [
        "storage",
        "00c93210",
        null,
        "pointer __((offset(0x40)))"
      ]
    ]
  ],
  "added": [
    [
      "0055f738",
      "READ",
      [
        "storage",
        "00c9ad58",
        null,
        "pointer"
      ]
    ],
    [
      "0055f754",
      "READ",
      [
        "storage",
        "00c932d8",
        null,
        "pointer __((offset(0x18)))"
      ]
    ],
    [
      "0055f754",
      "READ",
      [
        "storage",
        "00c932e0",
        null,
        "pointer __((offset(0x40)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f6f8 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:c88:8"]]
- 0055f6f8 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
+ 0055f740 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:c88:8"]]
+ 0055f740 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
- 0055f6fc ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:28:8"]]
- 0055f6fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0055f700 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:bb8:8"]]
- 0055f700 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7024a351afe94951f1a3180067c59e69"></a>

### [`0055f868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f868.md) → [`0055f8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f8a8.md) FUN_0055f8a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0055f6c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f6c8.md) · 呼出先 6件 [`004594d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/004594d0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58200.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md)
- 新版 呼出元 1件 [`0055f708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f708.md) · 呼出先 6件 [`00459510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459510.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c582d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582d0.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.28% / 新版 97.28%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055f914",
      "incomplete_value": true,
      "site": "0055f918",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "0055f8d4",
      "incomplete_value": true,
      "site": "0055f8d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c30:8"
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
      "definition_site": "0055f970",
      "incomplete_value": true,
      "site": "0055f974",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "0055f930",
      "incomplete_value": true,
      "site": "0055f934",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c30:8"
              ]
            ]
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
      "definition_site": "0055f9c0",
      "incomplete_value": true,
      "site": "0055f9c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "0055f980",
      "incomplete_value": true,
      "site": "0055f984",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c30:8"
              ]
            ]
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
      "0055f914",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "0055f914",
      "PARAM",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "0055f970",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0055f914",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "0055f914",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "0055f970",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f8d8 ["INT_ADD", "register:40f0:8", ["const:55f8d8:8", "const:4:8"]]
- 0055f8d8 ["CALL", null, ["callee:00c58350:8"]]
+ 0055f918 ["INT_ADD", "register:40f0:8", ["const:55f918:8", "const:4:8"]]
+ 0055f918 ["CALL", null, ["callee:00c58350:8"]]
- 0055f8f4 ["INT_ADD", "register:40f0:8", ["const:55f8f4:8", "const:4:8"]]
- 0055f8f4 ["CALL", null, ["callee:00c58360:8"]]
+ 0055f934 ["INT_ADD", "register:40f0:8", ["const:55f934:8", "const:4:8"]]
+ 0055f934 ["CALL", null, ["callee:00c58360:8"]]
- 0055f934 ["INT_ADD", "register:40f0:8", ["const:55f934:8", "const:4:8"]]
- 0055f934 ["CALL", null, ["callee:00c58350:8"]]
+ 0055f974 ["INT_ADD", "register:40f0:8", ["const:55f974:8", "const:4:8"]]
+ 0055f974 ["CALL", null, ["callee:00c58350:8"]]
~~~


<a id="compare-58e6666d96328ff3bec5e006ba5dcee2"></a>

### [`00560040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/00560040.md) → [`00560080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560080.md) FUN_00560080

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0055ff58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055ff58.md) [`005977bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/005977bc.md) · 呼出先 4件 [`00548258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00548/00548258.md) [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) [`00c581f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581f0.md) [`00c58430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58430.md)
- 新版 呼出元 2件 [`0055ff98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055ff98.md) [`005977fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977fc.md) · 呼出先 4件 [`00548298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548298.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c582c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582c0.md) [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 80.70% / 新版 80.70%

優先判定に残った影響 `store_destination` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005600c4",
      "incomplete_value": true,
      "site": "005600c4",
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
      "definition_site": "00560084",
      "incomplete_value": true,
      "site": "00560084",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005600bc",
      "incomplete_value": true,
      "site": "005600c8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0056007c",
      "incomplete_value": true,
      "site": "00560088",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:8:8"
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
      "definition_site": "005600d4",
      "incomplete_value": true,
      "site": "005600d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00560094",
      "incomplete_value": true,
      "site": "00560094",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005600a4",
      "READ",
      [
        "storage",
        "00c9b290",
        null,
        "pointer"
      ]
    ],
    [
      "005600a8",
      "READ",
      [
        "storage",
        "00c9b288",
        null,
        "pointer"
      ]
    ],
    [
      "005600bc",
      "READ",
      [
        "storage",
        "00c93278",
        null,
        "pointer __((offset(0x18)))"
      ]
    ]
  ],
  "added": [
    [
      "005600a4",
      "READ",
      [
        "storage",
        "00c9b360",
        null,
        "pointer"
      ]
    ],
    [
      "005600a8",
      "READ",
      [
        "storage",
        "00c9b358",
        null,
        "pointer"
      ]
    ],
    [
      "005600bc",
      "READ",
      [
        "storage",
        "00c93348",
        null,
        "pointer __((offset(0x18)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00560064 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:290:8"]]
- 00560064 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
+ 005600a4 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:360:8"]]
+ 005600a4 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
- 00560068 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:288:8"]]
- 00560068 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
+ 005600a8 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:358:8"]]
+ 005600a8 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
- 005600ac ["INT_ADD", "register:40f0:8", ["const:5600ac:8", "const:4:8"]]
- 005600ac ["CALL", null, ["callee:00c582b0:8"]]
+ 005600ec ["INT_ADD", "register:40f0:8", ["const:5600ec:8", "const:4:8"]]
+ 005600ec ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-e69e7c6ada379aae293a0fe21d4db27c"></a>

### [`0056016c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/0056016c.md) → [`005601ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005601ac.md) FUN_005601ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0055ff58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055ff58.md) · 呼出先 6件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c58270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58270.md) [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 1件 [`0055ff98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055ff98.md) · 呼出先 6件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.98% / 新版 97.98%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0056021c",
      "incomplete_value": true,
      "site": "00560220",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005601dc",
      "incomplete_value": true,
      "site": "005601e0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c30:8"
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
      "definition_site": "005602d4",
      "incomplete_value": true,
      "site": "005602d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00560294",
      "incomplete_value": true,
      "site": "00560298",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c30:8"
              ]
            ]
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
      "0056021c",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "0056021c",
      "PARAM",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "005602d4",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0056021c",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "0056021c",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "005602d4",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005601e0 ["INT_ADD", "register:40f0:8", ["const:5601e0:8", "const:4:8"]]
- 005601e0 ["CALL", null, ["callee:00c58350:8"]]
+ 00560220 ["INT_ADD", "register:40f0:8", ["const:560220:8", "const:4:8"]]
+ 00560220 ["CALL", null, ["callee:00c58350:8"]]
- 00560298 ["INT_ADD", "register:40f0:8", ["const:560298:8", "const:4:8"]]
- 00560298 ["CALL", null, ["callee:00c58350:8"]]
+ 005602d8 ["INT_ADD", "register:40f0:8", ["const:5602d8:8", "const:4:8"]]
+ 005602d8 ["CALL", null, ["callee:00c58350:8"]]
- 005601d0 ["INT_ADD", "register:40f0:8", ["const:5601d0:8", "const:4:8"]]
- 005601d0 ["CALL", null, ["callee:00c58340:8"]]
+ 00560210 ["INT_ADD", "register:40f0:8", ["const:560210:8", "const:4:8"]]
+ 00560210 ["CALL", null, ["callee:00c58340:8"]]
~~~


<a id="compare-42f663d0fb3052b3d7c3c946d93b33d1"></a>

### [`00560344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/00560344.md) → [`00560384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560384.md) FUN_00560384

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fa0.md) [`00c57fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fc0.md) [`00c59810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59810.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md) [`00c58090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58090.md) [`00c598e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598e0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 67.74% / 新版 67.74%

優先判定に残った影響 `store_destination` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005603a8",
      "incomplete_value": true,
      "site": "005603b0",
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
      "definition_site": "00560368",
      "incomplete_value": true,
      "site": "00560370",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "005603bc",
      "incomplete_value": true,
      "site": "005603bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0056037c",
      "incomplete_value": true,
      "site": "0056037c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005603bc",
      "incomplete_value": true,
      "site": "005603bc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0056037c",
      "incomplete_value": true,
      "site": "0056037c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:18:8"
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
      "005603a0",
      "READ",
      [
        "storage",
        "00c9b288",
        null,
        "pointer"
      ]
    ],
    [
      "005603a8",
      "READ",
      [
        "storage",
        "00c93270",
        "std::__ndk1::basic_istringstream<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::VTT",
        "pointer __((offset(0x18)))"
      ]
    ],
    [
      "005603ac",
      "READ",
      [
        "storage",
        "00c93288",
        null,
        "pointer __((offset(0x40)))"
      ]
    ]
  ],
  "added": [
    [
      "005603a0",
      "READ",
      [
        "storage",
        "00c9b358",
        null,
        "pointer"
      ]
    ],
    [
      "005603a8",
      "READ",
      [
        "storage",
        "00c93340",
        "std::__ndk1::basic_istringstream<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::VTT",
        "pointer __((offset(0x18)))"
      ]
    ],
    [
      "005603ac",
      "READ",
      [
        "storage",
        "00c93358",
        null,
        "pointer __((offset(0x40)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00560360 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:288:8"]]
- 00560360 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
+ 005603a0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:358:8"]]
+ 005603a0 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
- 00560364 ["COPY", "register:4098:8", ["register:4000:8"]]
- 00560378 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:bc0:8"]]
- 00560378 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 005603b8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c90:8"]]
+ 005603b8 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f993abb60abdd07f04fe5db5f1393a3e"></a>

### [`005603c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/005603c0.md) → [`00560400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560400.md) FUN_00560400

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0055f578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f578.md) [`0055f618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f618.md) · 呼出先 2件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c583b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583b0.md)
- 新版 呼出元 2件 [`0055f5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f5b8.md) [`0055f658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f658.md) · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00560410",
      "incomplete_value": false,
      "site": "00560418",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005603d0",
      "incomplete_value": false,
      "site": "005603d8",
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
            "const:c70:8"
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
      "00560410",
      "PARAM",
      [
        "storage",
        "00ca5c70",
        null,
        null
      ]
    ],
    [
      "00560438",
      "DATA",
      [
        "storage",
        "00c6b220",
        null,
        "undefined *"
      ]
    ],
    [
      "00560444",
      "DATA",
      [
        "storage",
        "00c6b198",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00560410",
      "PARAM",
      [
        "storage",
        "00ca5d70",
        null,
        null
      ]
    ],
    [
      "00560438",
      "DATA",
      [
        "storage",
        "00c6b2f0",
        null,
        "undefined *"
      ]
    ],
    [
      "00560444",
      "DATA",
      [
        "storage",
        "00c6b268",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005603d8 ["INT_ADD", "register:40f0:8", ["const:5603d8:8", "const:4:8"]]
- 005603d8 ["CALL", null, ["callee:00c58480:8"]]
+ 00560418 ["INT_ADD", "register:40f0:8", ["const:560418:8", "const:4:8"]]
+ 00560418 ["CALL", null, ["callee:00c58480:8"]]
- 005603d0 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 005603d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005603d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005603d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00560410 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 00560410 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00560410 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00560410 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 005603e4 ["INT_ADD", "register:40f0:8", ["const:5603e4:8", "const:4:8"]]
- 005603e4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00560424 ["INT_ADD", "register:40f0:8", ["const:560424:8", "const:4:8"]]
+ 00560424 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-cd08e758801af5ec850149661a04e41b"></a>

### [`00560744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/00560744.md) → [`00560784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560784.md) FUN_00560784

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
      "definition_site": "00560788",
      "incomplete_value": false,
      "site": "0056078c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00560748",
      "incomplete_value": false,
      "site": "0056074c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
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
      "0056078c",
      "DATA",
      [
        "storage",
        "00c6b220",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0056078c",
      "DATA",
      [
        "storage",
        "00c6b2f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00560748 ["COPY", "tmp:0:8", ["const:220:8"]]
- 00560748 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00560748 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00560748 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00560788 ["COPY", "tmp:0:8", ["const:2f0:8"]]
+ 00560788 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00560788 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00560788 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


