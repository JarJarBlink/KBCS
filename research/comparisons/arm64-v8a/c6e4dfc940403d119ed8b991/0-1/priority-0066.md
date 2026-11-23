# v16.0.1 → v16.0.2 · 最優先の変更候補 (66)

[一覧の目次](README.md)

<a id="compare-cd306f6ee8b1176bebf1bc4219da6459"></a>

### [`00a7ddf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7d/00a7ddf4.md) → [`00a7de64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7de64.md) FUN_00a7de64

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
      "definition_site": "00a7de70",
      "incomplete_value": false,
      "site": "00a7de70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7de00",
      "incomplete_value": false,
      "site": "00a7de00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
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
      "00a7de70",
      "DATA",
      [
        "storage",
        "00c8bda0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7de70",
      "DATA",
      [
        "storage",
        "00c8be70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7ddfc ["COPY", "tmp:0:8", ["const:da0:8"]]
- 00a7ddfc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7ddfc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7ddfc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7de6c ["COPY", "tmp:0:8", ["const:e70:8"]]
+ 00a7de6c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7de6c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7de6c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0f7bc4ae92e4e8eba80c804392e17f7c"></a>

### [`00a7de74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7d/00a7de74.md) → [`00a7dee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7dee4.md) FUN_00a7dee4

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
      "definition_site": "00a7df08",
      "incomplete_value": false,
      "site": "00a7df08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7de98",
      "incomplete_value": false,
      "site": "00a7de98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:e20:8"
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
      "00a7df08",
      "DATA",
      [
        "storage",
        "00c8be20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7df08",
      "DATA",
      [
        "storage",
        "00c8bef0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7de88 ["INT_ADD", "register:40f0:8", ["const:a7de88:8", "const:4:8"]]
- 00a7de88 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a7def8 ["INT_ADD", "register:40f0:8", ["const:a7def8:8", "const:4:8"]]
+ 00a7def8 ["CALL", null, ["callee:00c57f60:8"]]
- 00a7de94 ["COPY", "tmp:0:8", ["const:e20:8"]]
- 00a7de94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7de94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7de94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7df04 ["COPY", "tmp:0:8", ["const:ef0:8"]]
+ 00a7df04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7df04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7df04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a150a39c1b0645c3f7d6d78ec60cf2dc"></a>

### [`00a7dea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7d/00a7dea8.md) → [`00a7df18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7df18.md) FUN_00a7df18

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
      "definition_site": "00a7df24",
      "incomplete_value": false,
      "site": "00a7df24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7deb4",
      "incomplete_value": false,
      "site": "00a7deb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:e20:8"
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
      "00a7df24",
      "DATA",
      [
        "storage",
        "00c8be20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7df24",
      "DATA",
      [
        "storage",
        "00c8bef0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7deb0 ["COPY", "tmp:0:8", ["const:e20:8"]]
- 00a7deb0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7deb0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7deb0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7df20 ["COPY", "tmp:0:8", ["const:ef0:8"]]
+ 00a7df20 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7df20 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7df20 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-eedcf2c271df6c97e21138bbed586b13"></a>

### [`00a7dec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7d/00a7dec4.md) → [`00a7df34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7df34.md) FUN_00a7df34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce50.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008b7a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a10.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.81% / 新版 93.81%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a7e028",
      "incomplete_value": true,
      "site": "00a7e03c",
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
    "old": {
      "definition_site": "00a7dfb8",
      "incomplete_value": true,
      "site": "00a7dfcc",
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
                "const:baa:8"
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
      "definition_site": "00a7e054",
      "incomplete_value": false,
      "site": "00a7e05c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7dfe4",
      "incomplete_value": false,
      "site": "00a7dfec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:e90:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7df80",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7df10",
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
      "00a7df80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a7df9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a7e028",
      "READ",
      [
        "storage",
        "002b4baa",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a7df80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a7df9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a7e028",
      "READ",
      [
        "storage",
        "002b4bdb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7df10 ["INT_ADD", "register:40f0:8", ["const:a7df10:8", "const:4:8"]]
- 00a7df10 ["CALL", null, ["ram:47acf4:8"]]
+ 00a7df80 ["INT_ADD", "register:40f0:8", ["const:a7df80:8", "const:4:8"]]
+ 00a7df80 ["CALL", null, ["ram:47ad34:8"]]
- 00a7df2c ["INT_ADD", "register:40f0:8", ["const:a7df2c:8", "const:4:8"]]
- 00a7df2c ["CALL", null, ["ram:47acf4:8"]]
+ 00a7df9c ["INT_ADD", "register:40f0:8", ["const:a7df9c:8", "const:4:8"]]
+ 00a7df9c ["CALL", null, ["ram:47ad34:8"]]
- 00a7df5c ["INT_ADD", "register:40f0:8", ["const:a7df5c:8", "const:4:8"]]
- 00a7df5c ["CALL", null, ["callee:0048ce90:8"]]
+ 00a7dfcc ["INT_ADD", "register:40f0:8", ["const:a7dfcc:8", "const:4:8"]]
+ 00a7dfcc ["CALL", null, ["callee:0048ce90:8"]]
~~~


<a id="compare-b5600397dda43d76856988cc77cac9a0"></a>

### [`00a7e144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e144.md) → [`00a7e1b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e1b4.md) FUN_00a7e1b4

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
      "definition_site": "00a7e1c8",
      "incomplete_value": false,
      "site": "00a7e1cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e158",
      "incomplete_value": false,
      "site": "00a7e15c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:e90:8"
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
      "00a7e1cc",
      "DATA",
      [
        "storage",
        "00c8be90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7e1cc",
      "DATA",
      [
        "storage",
        "00c8bf60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e150 ["INT_ADD", "register:40f0:8", ["const:a7e150:8", "const:4:8"]]
- 00a7e150 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a7e1c0 ["INT_ADD", "register:40f0:8", ["const:a7e1c0:8", "const:4:8"]]
+ 00a7e1c0 ["CALL", null, ["callee:00c57f60:8"]]
- 00a7e158 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00a7e158 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e158 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e158 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7e1c8 ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 00a7e1c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7e1c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7e1c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-04a665fa5df3e9fd6c6d7aaaf2bdd807"></a>

### [`00a7e168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e168.md) → [`00a7e1d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e1d8.md) FUN_00a7e1d8

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
      "definition_site": "00a7e1dc",
      "incomplete_value": false,
      "site": "00a7e1e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e16c",
      "incomplete_value": false,
      "site": "00a7e170",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:e90:8"
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
      "00a7e1e0",
      "DATA",
      [
        "storage",
        "00c8be90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7e1e0",
      "DATA",
      [
        "storage",
        "00c8bf60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e16c ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00a7e16c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e16c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e16c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7e1dc ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 00a7e1dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7e1dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7e1dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e4e8a31e7ff09f39d671b4f70e82cb95"></a>

### [`00a7e1c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e1c4.md) → [`00a7e234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e234.md) FUN_00a7e234

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
      "definition_site": "00a7e258",
      "incomplete_value": false,
      "site": "00a7e258",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e1e8",
      "incomplete_value": false,
      "site": "00a7e1e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:f20:8"
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
      "00a7e258",
      "DATA",
      [
        "storage",
        "00c8bf20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7e258",
      "DATA",
      [
        "storage",
        "00c8bff0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e1d8 ["INT_ADD", "register:40f0:8", ["const:a7e1d8:8", "const:4:8"]]
- 00a7e1d8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a7e248 ["INT_ADD", "register:40f0:8", ["const:a7e248:8", "const:4:8"]]
+ 00a7e248 ["CALL", null, ["callee:00c57f60:8"]]
- 00a7e1e4 ["COPY", "tmp:0:8", ["const:f20:8"]]
- 00a7e1e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e1e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e1e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7e254 ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 00a7e254 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7e254 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7e254 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-82345f22f5fb46100596e6e1a300ffd7"></a>

### [`00a7e1f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e1f8.md) → [`00a7e268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e268.md) FUN_00a7e268

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
      "definition_site": "00a7e274",
      "incomplete_value": false,
      "site": "00a7e274",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e204",
      "incomplete_value": false,
      "site": "00a7e204",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
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
      "00a7e274",
      "DATA",
      [
        "storage",
        "00c8bf20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7e274",
      "DATA",
      [
        "storage",
        "00c8bff0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e200 ["COPY", "tmp:0:8", ["const:f20:8"]]
- 00a7e200 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7e200 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7e200 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7e270 ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 00a7e270 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7e270 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7e270 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-87e0f500fcddceb8ff70285c62b5f84c"></a>

### [`00a7e214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e214.md) → [`00a7e284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e284.md) FUN_00a7e284

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce50.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008b7a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a10.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.81% / 新版 93.81%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a7e378",
      "incomplete_value": true,
      "site": "00a7e38c",
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
    "old": {
      "definition_site": "00a7e308",
      "incomplete_value": true,
      "site": "00a7e31c",
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
                "const:baa:8"
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
      "definition_site": "00a7e3a4",
      "incomplete_value": false,
      "site": "00a7e3ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e334",
      "incomplete_value": false,
      "site": "00a7e33c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:f90:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7e2d0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7e260",
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
      "00a7e2d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a7e2ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a7e378",
      "READ",
      [
        "storage",
        "002b4baa",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a7e2d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a7e2ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a7e378",
      "READ",
      [
        "storage",
        "002b4bdb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e260 ["INT_ADD", "register:40f0:8", ["const:a7e260:8", "const:4:8"]]
- 00a7e260 ["CALL", null, ["ram:47acf4:8"]]
+ 00a7e2d0 ["INT_ADD", "register:40f0:8", ["const:a7e2d0:8", "const:4:8"]]
+ 00a7e2d0 ["CALL", null, ["ram:47ad34:8"]]
- 00a7e27c ["INT_ADD", "register:40f0:8", ["const:a7e27c:8", "const:4:8"]]
- 00a7e27c ["CALL", null, ["ram:47acf4:8"]]
+ 00a7e2ec ["INT_ADD", "register:40f0:8", ["const:a7e2ec:8", "const:4:8"]]
+ 00a7e2ec ["CALL", null, ["ram:47ad34:8"]]
- 00a7e2ac ["INT_ADD", "register:40f0:8", ["const:a7e2ac:8", "const:4:8"]]
- 00a7e2ac ["CALL", null, ["callee:0048ce90:8"]]
+ 00a7e31c ["INT_ADD", "register:40f0:8", ["const:a7e31c:8", "const:4:8"]]
+ 00a7e31c ["CALL", null, ["callee:0048ce90:8"]]
~~~


<a id="compare-39bfd8989b848d0d087b879381c0aab9"></a>

### [`00a7e494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e494.md) → [`00a7e504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e504.md) FUN_00a7e504

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
      "definition_site": "00a7e518",
      "incomplete_value": false,
      "site": "00a7e51c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e4a8",
      "incomplete_value": false,
      "site": "00a7e4ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:f90:8"
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
      "00a7e51c",
      "DATA",
      [
        "storage",
        "00c8bf90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7e51c",
      "DATA",
      [
        "storage",
        "00c8c060",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e4a0 ["INT_ADD", "register:40f0:8", ["const:a7e4a0:8", "const:4:8"]]
- 00a7e4a0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a7e510 ["INT_ADD", "register:40f0:8", ["const:a7e510:8", "const:4:8"]]
+ 00a7e510 ["CALL", null, ["callee:00c57f60:8"]]
- 00a7e4a4 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7e514 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7e4a8 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 00a7e4a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e4a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e4a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7e518 ["COPY", "tmp:0:8", ["const:60:8"]]
+ 00a7e518 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7e518 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7e518 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-17f64ba98aa1405a6caa0b179579cac3"></a>

### [`00a7e4b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e4b8.md) → [`00a7e528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e528.md) FUN_00a7e528

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
      "definition_site": "00a7e52c",
      "incomplete_value": false,
      "site": "00a7e530",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e4bc",
      "incomplete_value": false,
      "site": "00a7e4c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
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
      "00a7e530",
      "DATA",
      [
        "storage",
        "00c8bf90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7e530",
      "DATA",
      [
        "storage",
        "00c8c060",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e4b8 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a7e528 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7e4bc ["COPY", "tmp:0:8", ["const:f90:8"]]
- 00a7e4bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e4bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e4bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7e52c ["COPY", "tmp:0:8", ["const:60:8"]]
+ 00a7e52c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7e52c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7e52c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1f45647907aef1b6efbb69d282712fd5"></a>

### [`00a7e514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e514.md) → [`00a7e584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e584.md) FUN_00a7e584

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
      "definition_site": "00a7e5a8",
      "incomplete_value": false,
      "site": "00a7e5a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e538",
      "incomplete_value": false,
      "site": "00a7e538",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a7e5a8",
      "DATA",
      [
        "storage",
        "00c8c020",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7e5a8",
      "DATA",
      [
        "storage",
        "00c8c0f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e528 ["INT_ADD", "register:40f0:8", ["const:a7e528:8", "const:4:8"]]
- 00a7e528 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a7e598 ["INT_ADD", "register:40f0:8", ["const:a7e598:8", "const:4:8"]]
+ 00a7e598 ["CALL", null, ["callee:00c57f60:8"]]
- 00a7e534 ["COPY", "tmp:0:8", ["const:20:8"]]
- 00a7e534 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e534 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e534 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7e5a4 ["COPY", "tmp:0:8", ["const:f0:8"]]
+ 00a7e5a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7e5a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7e5a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6d77ace8c03876f78b0723f886af2049"></a>

### [`00a7e548`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e548.md) → [`00a7e5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e5b8.md) FUN_00a7e5b8

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
      "definition_site": "00a7e5c4",
      "incomplete_value": false,
      "site": "00a7e5c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e554",
      "incomplete_value": false,
      "site": "00a7e554",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a7e5c4",
      "DATA",
      [
        "storage",
        "00c8c020",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7e5c4",
      "DATA",
      [
        "storage",
        "00c8c0f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e550 ["COPY", "tmp:0:8", ["const:20:8"]]
- 00a7e550 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7e550 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7e550 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7e5c0 ["COPY", "tmp:0:8", ["const:f0:8"]]
+ 00a7e5c0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7e5c0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7e5c0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e998f7ae3c5e929ac004125d2ace6e96"></a>

### [`00a7e564`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e564.md) → [`00a7e5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e5d4.md) FUN_00a7e5d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`00a468d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468d8.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.08% / 新版 96.08%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7e608",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7e598",
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
      "site": "00a7e62c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7e5bc",
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
      "00a7e608",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a7e62c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a7e608",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a7e62c",
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
- 00a7e598 ["INT_ADD", "register:40f0:8", ["const:a7e598:8", "const:4:8"]]
- 00a7e598 ["CALL", null, ["ram:47acf4:8"]]
+ 00a7e608 ["INT_ADD", "register:40f0:8", ["const:a7e608:8", "const:4:8"]]
+ 00a7e608 ["CALL", null, ["ram:47ad34:8"]]
- 00a7e5bc ["INT_ADD", "register:40f0:8", ["const:a7e5bc:8", "const:4:8"]]
- 00a7e5bc ["CALL", null, ["ram:47acf4:8"]]
+ 00a7e62c ["INT_ADD", "register:40f0:8", ["const:a7e62c:8", "const:4:8"]]
+ 00a7e62c ["CALL", null, ["ram:47ad34:8"]]
- 00a7e608 ["INT_ADD", "register:40f0:8", ["const:a7e608:8", "const:4:8"]]
- 00a7e608 ["CALL", null, ["callee:00a72604:8"]]
+ 00a7e678 ["INT_ADD", "register:40f0:8", ["const:a7e678:8", "const:4:8"]]
+ 00a7e678 ["CALL", null, ["callee:00a72604:8"]]
~~~


<a id="compare-cca00c7de7da066d563d402e4469faf0"></a>

### [`00a7e65c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e65c.md) → [`00a7e6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e6cc.md) FUN_00a7e6cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a7e680",
      "DATA",
      [
        "storage",
        "00c8c0a0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a7e684",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7e688",
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
      "00a7e6f0",
      "DATA",
      [
        "storage",
        "00c8c170",
        null,
        "undefined *"
      ]
    ],
    [
      "00a7e6f4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a7e6f8",
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
- 00a7e670 ["INT_ADD", "register:40f0:8", ["const:a7e670:8", "const:4:8"]]
- 00a7e670 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a7e6e0 ["INT_ADD", "register:40f0:8", ["const:a7e6e0:8", "const:4:8"]]
+ 00a7e6e0 ["CALL", null, ["callee:00c57f60:8"]]
- 00a7e67c ["COPY", "tmp:0:8", ["const:a0:8"]]
- 00a7e67c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e67c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7e67c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a7e680 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00a7e680 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00a7e680 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 00a7e680 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-789d16de4622c58d926b928ea0ebc82e"></a>

### [`00a7e690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e690.md) → [`00a7e700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e700.md) FUN_00a7e700

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
      "definition_site": "00a7e70c",
      "incomplete_value": false,
      "site": "00a7e70c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e69c",
      "incomplete_value": false,
      "site": "00a7e69c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:a0:8"
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
      "00a7e70c",
      "DATA",
      [
        "storage",
        "00c8c0a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7e70c",
      "DATA",
      [
        "storage",
        "00c8c170",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e698 ["COPY", "tmp:0:8", ["const:a0:8"]]
- 00a7e698 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7e698 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7e698 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7e708 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 00a7e708 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7e708 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7e708 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-cd729ed0b72f16b797659f93dea51149"></a>

### [`00a7e6ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e6ac.md) → [`00a7e71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e71c.md) FUN_00a7e71c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0068ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068a/0068ae30.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00ac8c5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ac8/00ac8c5c.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068ae88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068a/0068ae88.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00ac8ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac8/00ac8ccc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 92.41% / 新版 92.41%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7e75c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7e6ec",
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
      "site": "00a7e794",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a7e724",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a7e7c0",
      "incomplete_value": true,
      "site": "00a7e7d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7e750",
      "incomplete_value": true,
      "site": "00a7e764",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:978:8"
              ]
            ]
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
      "00a7e75c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a7e794",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a7e7bc",
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
      "00a7e75c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a7e794",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a7e7bc",
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
- 00a7e6ec ["INT_ADD", "register:40f0:8", ["const:a7e6ec:8", "const:4:8"]]
- 00a7e6ec ["CALL", null, ["ram:47acf4:8"]]
+ 00a7e75c ["INT_ADD", "register:40f0:8", ["const:a7e75c:8", "const:4:8"]]
+ 00a7e75c ["CALL", null, ["ram:47ad34:8"]]
- 00a7e724 ["INT_ADD", "register:40f0:8", ["const:a7e724:8", "const:4:8"]]
- 00a7e724 ["CALL", null, ["ram:47acf4:8"]]
+ 00a7e794 ["INT_ADD", "register:40f0:8", ["const:a7e794:8", "const:4:8"]]
+ 00a7e794 ["CALL", null, ["ram:47ad34:8"]]
- 00a7e764 ["INT_ADD", "register:40f0:8", ["const:a7e764:8", "const:4:8"]]
- 00a7e764 ["CALL", null, ["callee:00c586e0:8"]]
+ 00a7e7d4 ["INT_ADD", "register:40f0:8", ["const:a7e7d4:8", "const:4:8"]]
+ 00a7e7d4 ["CALL", null, ["callee:00c586e0:8"]]
~~~


<a id="compare-c08af97492d3e79ba988cdb4009d4f25"></a>

### [`00a7e834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e834.md) → [`00a7e8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7e8a4.md) FUN_00a7e8a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a79a94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a79/00a79a94.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00a79b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a79/00a79b04.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 99.06% / 新版 99.06%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a7e910",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7e990"
      ]
    ]
  ],
  "added": [
    [
      "00a7e980",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7e990"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7e83c ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 00a7e8ac ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
- 00a7e84c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00a7e84c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00a7e8bc ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00a7e8bc ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00a7e85c ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 00a7e8cc ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
~~~


<a id="compare-c5c96c6733ac21eadabf3ef640fb06ee"></a>

### [`00a7e9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e9dc.md) → [`00a7ea4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7ea4c.md) FUN_00a7ea4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a75dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a75/00a75dac.md) [`00a7e9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e9dc.md) · 呼出先 2件 [`00a7e9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7e9dc.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) [`00a7ea4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7ea4c.md) · 呼出先 2件 [`00a7ea4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7ea4c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a7ea68",
      "incomplete_value": true,
      "site": "00a7ea6c",
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
    "slot": 2
  }
]
~~~


~~~diff
- 00a7e9fc ["INT_ADD", "register:40f0:8", ["const:a7e9fc:8", "const:4:8"]]
- 00a7e9fc ["CALL", null, ["local:b0:8"]]
+ 00a7ea6c ["INT_ADD", "register:40f0:8", ["const:a7ea6c:8", "const:4:8"]]
+ 00a7ea6c ["CALL", null, ["local:b0:8"]]
- 00a7e9dc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00a7e9dc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00a7ea4c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00a7ea4c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00a7ea08 ["INT_ADD", "register:40f0:8", ["const:a7ea08:8", "const:4:8"]]
- 00a7ea08 ["CALL", null, ["local:b0:8"]]
+ 00a7ea78 ["INT_ADD", "register:40f0:8", ["const:a7ea78:8", "const:4:8"]]
+ 00a7ea78 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-39dc5aa52de92f04423da7b204038cd9"></a>

### [`00a7ea24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7ea24.md) → [`00a7ea94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7ea94.md) FUN_00a7ea94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a7ea3c",
      "DATA",
      [
        "storage",
        "00c8c120",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a7ea40",
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
      "00a7eaac",
      "DATA",
      [
        "storage",
        "00c8c1f0",
        null,
        "undefined *"
      ]
    ],
    [
      "00a7eab0",
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
- 00a7ea30 ["INT_ADD", "register:40f0:8", ["const:a7ea30:8", "const:4:8"]]
- 00a7ea30 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a7eaa0 ["INT_ADD", "register:40f0:8", ["const:a7eaa0:8", "const:4:8"]]
+ 00a7eaa0 ["CALL", null, ["callee:00c57f60:8"]]
- 00a7ea38 ["COPY", "tmp:0:8", ["const:120:8"]]
- 00a7ea38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7ea38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7ea38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a7ea3c ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00a7ea3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-7fe78d13e562413152ba2e4d764f3da2"></a>

### [`00a7ea48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7ea48.md) → [`00a7eab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eab8.md) FUN_00a7eab8

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
      "unmatched:00a7ea50",
      "DATA",
      [
        "storage",
        "00c8c120",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7eac0",
      "DATA",
      [
        "storage",
        "00c8c1f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7ea48 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a7ea4c ["COPY", "tmp:0:8", ["const:120:8"]]
- 00a7ea4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7ea4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7ea4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a7ea50 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00a7ea50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-931a4495d1268fc424ea62e568cea2fa"></a>

### [`00a7eaa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7eaa4.md) → [`00a7eb14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb14.md) FUN_00a7eb14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a7eabc",
      "DATA",
      [
        "storage",
        "00c8c1a0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a7eac0",
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
      "00a7eb2c",
      "DATA",
      [
        "storage",
        "00c8c270",
        null,
        "undefined *"
      ]
    ],
    [
      "00a7eb30",
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
- 00a7eab0 ["INT_ADD", "register:40f0:8", ["const:a7eab0:8", "const:4:8"]]
- 00a7eab0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a7eb20 ["INT_ADD", "register:40f0:8", ["const:a7eb20:8", "const:4:8"]]
+ 00a7eb20 ["CALL", null, ["callee:00c57f60:8"]]
- 00a7eab8 ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 00a7eab8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7eab8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7eab8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a7eabc ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00a7eabc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-f29d0890dadaed24f19f787bfbd12f1b"></a>

### [`00a7eac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7eac8.md) → [`00a7eb38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb38.md) FUN_00a7eb38

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
      "definition_site": "00a7eb3c",
      "incomplete_value": false,
      "site": "00a7eb40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:270:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7eacc",
      "incomplete_value": false,
      "site": "00a7ead0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a7eb40",
      "DATA",
      [
        "storage",
        "00c8c1a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7eb40",
      "DATA",
      [
        "storage",
        "00c8c270",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7eacc ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 00a7eacc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7eacc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7eacc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7eb3c ["COPY", "tmp:0:8", ["const:270:8"]]
+ 00a7eb3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7eb3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7eb3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3d6318d038ab4c8ab3dd5269bb86fa11"></a>

### [`00a7eb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7eb20.md) → [`00a7eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb90.md) FUN_00a7eb90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`00a72594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a72/00a72594.md) [`00a7eb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7eb20.md) [`00a7ee60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7ee60.md) · 呼出先 4件 [`008113d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00811/008113d4.md) [`00a7eb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7eb20.md) [`00a7ee60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7ee60.md) [`00a7f160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7f160.md)
- 新版 呼出元 3件 [`00a72604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a72/00a72604.md) [`00a7eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb90.md) [`00a7eed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eed0.md) · 呼出先 4件 [`0081142c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/0081142c.md) [`00a7eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb90.md) [`00a7eed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eed0.md) [`00a7f1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f1d0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.98% / 新版 87.98%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 10件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a7eb20",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7eb24",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7eb28",
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
      "00a7eb90",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a7eb94",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00a7eb98",
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
- 00a7eb20 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a7eb20 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a7eb20 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00a7eb20 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a7eb24 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a7eb24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40c8:8"]]
- 00a7eb28 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00a7eb28 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00a7eb28 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00a7eb28 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b279dfd609b8a7b9cce7f224c64071ef"></a>

### [`00a7ee60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7ee60.md) → [`00a7eed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eed0.md) FUN_00a7eed0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a7eb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7eb20.md) · 呼出先 2件 [`008113d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00811/008113d4.md) [`00a7eb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7e/00a7eb20.md)
- 新版 呼出元 1件 [`00a7eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb90.md) · 呼出先 2件 [`0081142c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/0081142c.md) [`00a7eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7e/00a7eb90.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.98% / 新版 86.98%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a7efe0",
      "incomplete_value": true,
      "site": "00a7efe8",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a7efac",
      "incomplete_value": true,
      "site": "00a7efcc",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a7f038",
      "incomplete_value": true,
      "site": "00a7f03c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:40b8:8"
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
    "old": {
      "definition_site": "00a7efc8",
      "incomplete_value": true,
      "site": "00a7efcc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_RIGHT",
              [
                "leaf",
                "const:2:8"
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
      "unmatched:00a7ee78",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7eef0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7f018"
      ]
    ],
    [
      "unmatched:00a7f0b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7f108"
      ]
    ]
  ],
  "added": [
    [
      "00a7eee8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a7ef60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7f018"
      ]
    ],
    [
      "00a7f120",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7f108"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7ef78 ["INT_ADD", "register:40f0:8", ["const:a7ef78:8", "const:4:8"]]
- 00a7ef78 ["CALL", null, ["callee:0081142c:8"]]
+ 00a7efe8 ["INT_ADD", "register:40f0:8", ["const:a7efe8:8", "const:4:8"]]
+ 00a7efe8 ["CALL", null, ["callee:0081142c:8"]]
- 00a7efcc ["INT_ADD", "register:40f0:8", ["const:a7efcc:8", "const:4:8"]]
- 00a7efcc ["CALL", null, ["callee:00a7eb90:8"]]
+ 00a7f03c ["INT_ADD", "register:40f0:8", ["const:a7f03c:8", "const:4:8"]]
+ 00a7f03c ["CALL", null, ["callee:00a7eb90:8"]]
- 00a7f004 ["INT_ADD", "register:40f0:8", ["const:a7f004:8", "const:4:8"]]
- 00a7f004 ["CALL", null, ["callee:0081142c:8"]]
+ 00a7f074 ["INT_ADD", "register:40f0:8", ["const:a7f074:8", "const:4:8"]]
+ 00a7f074 ["CALL", null, ["callee:0081142c:8"]]
~~~


<a id="compare-22711870d78f3bfc646a898a1e7cbe73"></a>

### [`00a7f7b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7f7b8.md) → [`00a7f828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f828.md) FUN_00a7f828

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
      "definition_site": "00a7f84c",
      "incomplete_value": false,
      "site": "00a7f84c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7f7dc",
      "incomplete_value": false,
      "site": "00a7f7dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:220:8"
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
      "00a7f84c",
      "DATA",
      [
        "storage",
        "00c8c220",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7f84c",
      "DATA",
      [
        "storage",
        "00c8c2f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7f7cc ["INT_ADD", "register:40f0:8", ["const:a7f7cc:8", "const:4:8"]]
- 00a7f7cc ["CALL", null, ["callee:00c57f60:8"]]
+ 00a7f83c ["INT_ADD", "register:40f0:8", ["const:a7f83c:8", "const:4:8"]]
+ 00a7f83c ["CALL", null, ["callee:00c57f60:8"]]
- 00a7f7d8 ["COPY", "tmp:0:8", ["const:220:8"]]
- 00a7f7d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a7f7d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a7f7d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a7f848 ["COPY", "tmp:0:8", ["const:2f0:8"]]
+ 00a7f848 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f848 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a7f848 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6b2bf7f31aa88da9c539cff5cae4cfa8"></a>

### [`00a7f7ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7f7ec.md) → [`00a7f85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f85c.md) FUN_00a7f85c

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
      "definition_site": "00a7f868",
      "incomplete_value": false,
      "site": "00a7f868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a7f7f8",
      "incomplete_value": false,
      "site": "00a7f7f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a7f868",
      "DATA",
      [
        "storage",
        "00c8c220",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a7f868",
      "DATA",
      [
        "storage",
        "00c8c2f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7f7f4 ["COPY", "tmp:0:8", ["const:220:8"]]
- 00a7f7f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a7f7f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a7f7f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a7f864 ["COPY", "tmp:0:8", ["const:2f0:8"]]
+ 00a7f864 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7f864 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a7f864 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8a9b2e86adea8a46b6519e3e8c449b87"></a>

### [`00a7f834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7f834.md) → [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) FUN_00a7f8a4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00a72594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a72/00a72594.md) [`00a7f834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7f834.md) [`00a7fc90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7fc90.md) · 呼出先 5件 [`00a7f834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7f834.md) [`00a7fbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7fbb0.md) [`00a7fc90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7fc90.md) [`00a7ff80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7ff80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`00a72604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a72/00a72604.md) [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) [`00a7fd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fd00.md) · 呼出先 5件 [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) [`00a7fc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fc20.md) [`00a7fd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fd00.md) [`00a7fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fff0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.51% / 新版 82.51%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 8件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a7f8ac",
      "incomplete_value": true,
      "site": "00a7f8b8",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00a7f8b4",
      "incomplete_value": true,
      "site": "00a7f8b8",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40b0:8"
          ],
          [
            "leaf",
            "const:4:8"
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
      "definition_site": "00a7f8b0",
      "incomplete_value": true,
      "site": "00a7f8b8",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00a7f884",
      "READ",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7f888",
      "READ",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7f88c",
      "DATA",
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
      "00a7f8f4",
      "READ",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00a7f8f8",
      "READ",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a7f8fc",
      "DATA",
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
- 00a7f8b8 ["INT_ADD", "register:40f0:8", ["const:a7f8b8:8", "const:4:8"]]
- 00a7f8b8 ["CALL", null, ["callee:00a7fc20:8"]]
+ 00a7f928 ["INT_ADD", "register:40f0:8", ["const:a7f928:8", "const:4:8"]]
+ 00a7f928 ["CALL", null, ["callee:00a7fc20:8"]]
- 00a7f95c ["INT_ADD", "register:40f0:8", ["const:a7f95c:8", "const:4:8"]]
- 00a7f95c ["CALL", null, ["callee:00a7fc20:8"]]
+ 00a7f9cc ["INT_ADD", "register:40f0:8", ["const:a7f9cc:8", "const:4:8"]]
+ 00a7f9cc ["CALL", null, ["callee:00a7fc20:8"]]
- 00a7fa3c ["INT_ADD", "register:40f0:8", ["const:a7fa3c:8", "const:4:8"]]
- 00a7fa3c ["CALL", null, ["callee:00a7fd00:8"]]
+ 00a7faac ["INT_ADD", "register:40f0:8", ["const:a7faac:8", "const:4:8"]]
+ 00a7faac ["CALL", null, ["callee:00a7fd00:8"]]
~~~


<a id="compare-931ff4b8c2ee6893bb4aa68270d646d2"></a>

### [`00a7fbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7fbb0.md) → [`00a7fc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fc20.md) FUN_00a7fc20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00a7f834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7f834.md) [`00a7fc90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7fc90.md) [`00a7ff80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7ff80.md) · 呼出先 1件 [`00687628`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/00687628.md)
- 新版 呼出元 3件 [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) [`00a7fd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fd00.md) [`00a7fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fff0.md) · 呼出先 1件 [`00687668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687668.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a7fc68",
      "incomplete_value": true,
      "site": "00a7fc6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "live",
            "register:40b0:8"
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
    "new": null,
    "old": {
      "definition_site": "00a7fc4c",
      "incomplete_value": true,
      "site": "00a7fc50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "live",
            "register:40b0:8"
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
    "new": {
      "definition_site": "00a7fcd8",
      "incomplete_value": true,
      "site": "00a7fcdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "live",
            "register:40b0:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00a7fc30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7fcd4"
      ]
    ]
  ],
  "added": [
    [
      "00a7fca0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a7fcd4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7fbfc ["INT_ADD", "register:40f0:8", ["const:a7fbfc:8", "const:4:8"]]
- 00a7fbfc ["CALL", null, ["callee:00687668:8"]]
+ 00a7fc6c ["INT_ADD", "register:40f0:8", ["const:a7fc6c:8", "const:4:8"]]
+ 00a7fc6c ["CALL", null, ["callee:00687668:8"]]
- 00a7fc50 ["INT_ADD", "register:40f0:8", ["const:a7fc50:8", "const:4:8"]]
- 00a7fc50 ["CALL", null, ["callee:00687668:8"]]
+ 00a7fcc0 ["INT_ADD", "register:40f0:8", ["const:a7fcc0:8", "const:4:8"]]
+ 00a7fcc0 ["CALL", null, ["callee:00687668:8"]]
- 00a7fc6c ["INT_ADD", "register:40f0:8", ["const:a7fc6c:8", "const:4:8"]]
- 00a7fc6c ["CALL", null, ["callee:00687668:8"]]
+ 00a7fcdc ["INT_ADD", "register:40f0:8", ["const:a7fcdc:8", "const:4:8"]]
+ 00a7fcdc ["CALL", null, ["callee:00687668:8"]]
~~~


<a id="compare-82efa39655c267848ace77bbe91e8a97"></a>

### [`00a7fc90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7fc90.md) → [`00a7fd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fd00.md) FUN_00a7fd00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a7f834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7f834.md) · 呼出先 2件 [`00a7f834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7f834.md) [`00a7fbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7fbb0.md)
- 新版 呼出元 1件 [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) · 呼出先 2件 [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) [`00a7fc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fc20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.89% / 新版 89.89%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a7fe0c",
      "incomplete_value": true,
      "site": "00a7fe1c",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "00a7fe10",
      "incomplete_value": true,
      "site": "00a7fe1c",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a7fe18",
      "incomplete_value": true,
      "site": "00a7fe1c",
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
                "register:4098:8"
              ],
              [
                "live",
                "register:40d8:8"
              ]
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
      "definition_site": "00a7fda8",
      "incomplete_value": true,
      "site": "00a7fdac",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "leaf",
            "const:4:8"
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
      "unmatched:00a7fc94",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7fc98",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a7fc9c",
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
      "00a7fd04",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00a7fd08",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a7fd0c",
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
- 00a7fdac ["INT_ADD", "register:40f0:8", ["const:a7fdac:8", "const:4:8"]]
- 00a7fdac ["CALL", null, ["callee:00a7fc20:8"]]
+ 00a7fe1c ["INT_ADD", "register:40f0:8", ["const:a7fe1c:8", "const:4:8"]]
+ 00a7fe1c ["CALL", null, ["callee:00a7fc20:8"]]
- 00a7fe38 ["INT_ADD", "register:40f0:8", ["const:a7fe38:8", "const:4:8"]]
- 00a7fe38 ["CALL", null, ["callee:00a7fc20:8"]]
+ 00a7fea8 ["INT_ADD", "register:40f0:8", ["const:a7fea8:8", "const:4:8"]]
+ 00a7fea8 ["CALL", null, ["callee:00a7fc20:8"]]
- 00a7fc90 ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
- 00a7fc90 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00a7fd00 ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
+ 00a7fd00 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-5684ac7ef85b7da310c6e9e41ea6122d"></a>

### [`00a7ff80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7ff80.md) → [`00a7fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fff0.md) FUN_00a7fff0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00a7f834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7f834.md) [`00a7ff80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7ff80.md) · 呼出先 4件 [`00a7fbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7fbb0.md) [`00a7ff80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7f/00a7ff80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`00a7f8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7f8a4.md) [`00a7fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fff0.md) · 呼出先 4件 [`00a7fc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fc20.md) [`00a7fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7f/00a7fff0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.48% / 新版 86.48%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 3件, `unresolved_branch_alignment` 14件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a80384",
      "incomplete_value": true,
      "site": "00a803ac",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a80380",
      "incomplete_value": true,
      "site": "00a803ac",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:8:8"
              ],
              [
                "leaf",
                "const:28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a803a4",
      "incomplete_value": true,
      "site": "00a803ac",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "00a80334",
      "incomplete_value": true,
      "site": "00a8033c",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "ordinal": 6,
    "slot": 8
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a8002c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8018c"
      ]
    ],
    [
      "unmatched:00a80040",
      "READ",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a80050",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80114"
      ]
    ]
  ],
  "added": [
    [
      "00a8009c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8018c"
      ]
    ],
    [
      "00a800b0",
      "READ",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "00a800c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80114"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a7ffe4 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00a7ffe4 ["CBRANCH", null, ["local:b99:8", "tmp:0:1"]]
+ 00a80054 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 00a80054 ["CBRANCH", null, ["local:b102:8", "tmp:0:1"]]
- 00a8033c ["INT_ADD", "register:40f0:8", ["const:a8033c:8", "const:4:8"]]
- 00a8033c ["CALL", null, ["local:b0:8"]]
+ 00a803ac ["INT_ADD", "register:40f0:8", ["const:a803ac:8", "const:4:8"]]
+ 00a803ac ["CALL", null, ["local:b0:8"]]
- 00a80554 ["INT_ADD", "register:40f0:8", ["const:a80554:8", "const:4:8"]]
- 00a80554 ["CALL", null, ["callee:00a7fc20:8"]]
+ 00a805c4 ["INT_ADD", "register:40f0:8", ["const:a805c4:8", "const:4:8"]]
+ 00a805c4 ["CALL", null, ["callee:00a7fc20:8"]]
~~~


<a id="compare-5bb9482eefd8ba5acf6b36d3b39e6a47"></a>

### [`00a80634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80634.md) → [`00a806a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a806a4.md) FUN_00a806a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00a72594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a72/00a72594.md) [`00a80634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80634.md) [`00a80914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80914.md) · 呼出先 3件 [`00a80634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80634.md) [`00a80914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80914.md) [`00a80bbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80bbc.md)
- 新版 呼出元 3件 [`00a72604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a72/00a72604.md) [`00a806a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a806a4.md) [`00a80984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80984.md) · 呼出先 3件 [`00a806a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a806a4.md) [`00a80984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80984.md) [`00a80c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80c2c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.02% / 新版 94.02%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a80634",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a80638",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a8063c",
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
      "00a806a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a806a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00a806ac",
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
- 00a80634 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a80634 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a80634 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00a80634 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a80638 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a80638 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40c8:8"]]
- 00a8063c ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00a8063c ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00a8063c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00a8063c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e40161677b2ea00b8ff283bd8e49c38f"></a>

### [`00a80914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80914.md) → [`00a80984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80984.md) FUN_00a80984

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a80634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80634.md) · 呼出先 1件 [`00a80634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80634.md)
- 新版 呼出元 1件 [`00a806a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a806a4.md) · 呼出先 1件 [`00a806a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a806a4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 78.24% / 新版 78.24%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 7件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a80a9c",
      "incomplete_value": true,
      "site": "00a80aac",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00a80ab0",
      "incomplete_value": true,
      "site": "00a80ac4",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "live",
            "register:40a0:8"
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
      "definition_site": "00a80ab4",
      "incomplete_value": true,
      "site": "00a80ac4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "live",
            "register:40c0:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00a8097c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80a84"
      ]
    ],
    [
      "unmatched:00a80abc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80b8c"
      ]
    ],
    [
      "unmatched:00a80b0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80b64"
      ]
    ]
  ],
  "added": [
    [
      "00a809ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80a84"
      ]
    ],
    [
      "00a80b2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80b8c"
      ]
    ],
    [
      "00a80b7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a80b64"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a80a3c ["INT_ADD", "register:40f0:8", ["const:a80a3c:8", "const:4:8"]]
- 00a80a3c ["CALL", null, ["callee:00a806a4:8"]]
+ 00a80aac ["INT_ADD", "register:40f0:8", ["const:a80aac:8", "const:4:8"]]
+ 00a80aac ["CALL", null, ["callee:00a806a4:8"]]
- 00a80a54 ["INT_ADD", "register:40f0:8", ["const:a80a54:8", "const:4:8"]]
- 00a80a54 ["CALL", null, ["callee:00a806a4:8"]]
+ 00a80ac4 ["INT_ADD", "register:40f0:8", ["const:a80ac4:8", "const:4:8"]]
+ 00a80ac4 ["CALL", null, ["callee:00a806a4:8"]]
- 00a8097c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00a8097c ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 00a8097c ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 00a8097c ["CBRANCH", null, ["local:b20:8", "tmp:2:1"]]
~~~


<a id="compare-7c388f49371e1022197cf0faec6b146c"></a>

### [`00a80bbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80bbc.md) → [`00a80c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80c2c.md) FUN_00a80c2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00a80634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80634.md) [`00a80bbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80bbc.md) · 呼出先 2件 [`00a80bbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a80/00a80bbc.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`00a806a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a806a4.md) [`00a80c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80c2c.md) · 呼出先 2件 [`00a80c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a80/00a80c2c.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.13% / 新版 86.13%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 4件, `unresolved_branch_alignment` 15件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a80df8",
      "incomplete_value": true,
      "site": "00a80e0c",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00a80e04",
      "incomplete_value": true,
      "site": "00a80e0c",
      "value": [
        "live",
        "register:4088:8"
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
      "definition_site": "00a80e54",
      "incomplete_value": true,
      "site": "00a80e74",
      "value": [
        "live",
        "register:4008:8"
      ]
    },
    "old": null,
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
      "unmatched:00a80bc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a80bc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a80bc8",
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
      "00a80c30",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00a80c34",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a80c38",
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
- 00a80d9c ["INT_ADD", "register:40f0:8", ["const:a80d9c:8", "const:4:8"]]
- 00a80d9c ["CALL", null, ["callee:00c58010:8"]]
+ 00a80e0c ["INT_ADD", "register:40f0:8", ["const:a80e0c:8", "const:4:8"]]
+ 00a80e0c ["CALL", null, ["callee:00c58010:8"]]
- 00a80e04 ["INT_ADD", "register:40f0:8", ["const:a80e04:8", "const:4:8"]]
- 00a80e04 ["CALL", null, ["callee:00c58010:8"]]
+ 00a80e74 ["INT_ADD", "register:40f0:8", ["const:a80e74:8", "const:4:8"]]
+ 00a80e74 ["CALL", null, ["callee:00c58010:8"]]
- 00a80bbc ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
~~~


<a id="compare-488aecd987727126b7612cbb10308d56"></a>

### [`00a8119c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a81/00a8119c.md) → [`00a8120c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a8120c.md) FUN_00a8120c

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
      "definition_site": "00a81230",
      "incomplete_value": false,
      "site": "00a81230",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a811c0",
      "incomplete_value": false,
      "site": "00a811c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:2a0:8"
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
      "00a81230",
      "DATA",
      [
        "storage",
        "00c8c2a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a81230",
      "DATA",
      [
        "storage",
        "00c8c370",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a811b0 ["INT_ADD", "register:40f0:8", ["const:a811b0:8", "const:4:8"]]
- 00a811b0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a81220 ["INT_ADD", "register:40f0:8", ["const:a81220:8", "const:4:8"]]
+ 00a81220 ["CALL", null, ["callee:00c57f60:8"]]
- 00a811bc ["COPY", "tmp:0:8", ["const:2a0:8"]]
- 00a811bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a811bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a811bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a8122c ["COPY", "tmp:0:8", ["const:370:8"]]
+ 00a8122c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a8122c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a8122c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-68140a2983686febcbf5b4df803d1969"></a>

### [`00a811d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a81/00a811d0.md) → [`00a81240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a81240.md) FUN_00a81240

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
      "definition_site": "00a8124c",
      "incomplete_value": false,
      "site": "00a8124c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a811dc",
      "incomplete_value": false,
      "site": "00a811dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:2a0:8"
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
      "00a8124c",
      "DATA",
      [
        "storage",
        "00c8c2a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a8124c",
      "DATA",
      [
        "storage",
        "00c8c370",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a811d8 ["COPY", "tmp:0:8", ["const:2a0:8"]]
- 00a811d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a811d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a811d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a81248 ["COPY", "tmp:0:8", ["const:370:8"]]
+ 00a81248 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a81248 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a81248 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e8e8d7f8a8f4376503ec3a85bee61517"></a>

### [`00a81218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a81/00a81218.md) → [`00a81288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a81288.md) _INIT_226

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 81.36% / 新版 81.36%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a812c4",
      "incomplete_value": true,
      "site": "00a812e0",
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
      "definition_site": "00a81254",
      "incomplete_value": true,
      "site": "00a81270",
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
      "definition_site": "00a812e8",
      "incomplete_value": true,
      "site": "00a81304",
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
      "definition_site": "00a81278",
      "incomplete_value": true,
      "site": "00a81294",
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
      "definition_site": "00a81308",
      "incomplete_value": true,
      "site": "00a81324",
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
      "definition_site": "00a81298",
      "incomplete_value": true,
      "site": "00a812b4",
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
      "00a812c4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00a812e8",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00a81308",
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
      "00a812c4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00a812e8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00a81308",
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
- 00a81244 ["COPY", "tmp:0:8", ["const:60:8"]]
- 00a81244 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00a81244 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00a81244 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00a812b4 ["COPY", "tmp:0:8", ["const:160:8"]]
+ 00a812b4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00a812b4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00a812b4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 00a81378 ["INT_ADD", "register:40f0:8", ["const:a81378:8", "const:4:8"]]
- 00a81378 ["CALL", null, ["callee:0043b838:8"]]
+ 00a813e8 ["INT_ADD", "register:40f0:8", ["const:a813e8:8", "const:4:8"]]
+ 00a813e8 ["CALL", null, ["callee:0043b838:8"]]
- 00a813c8 ["INT_ADD", "register:40f0:8", ["const:a813c8:8", "const:4:8"]]
- 00a813c8 ["CALL", null, ["callee:0043b838:8"]]
+ 00a81438 ["INT_ADD", "register:40f0:8", ["const:a81438:8", "const:4:8"]]
+ 00a81438 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-7e99448cf4a7a85d6c15af9e8b5eab9b"></a>

### [`00a815a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a81/00a815a8.md) → [`00a81618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a81618.md) _INIT_227

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.62% / 新版 83.62%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a81838",
      "incomplete_value": false,
      "site": "00a8184c",
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
      "definition_site": "00a817c8",
      "incomplete_value": false,
      "site": "00a817dc",
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
      "definition_site": "00a81840",
      "incomplete_value": false,
      "site": "00a8184c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:178:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a817d0",
      "incomplete_value": false,
      "site": "00a817dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:78:8"
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
      "definition_site": "00a81848",
      "incomplete_value": false,
      "site": "00a8184c",
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
      "definition_site": "00a817d8",
      "incomplete_value": false,
      "site": "00a817dc",
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
      "unmatched:00a815d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a815e4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00a81600",
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
      "00a81648",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00a81654",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00a81670",
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
- 00a8176c ["INT_ADD", "register:40f0:8", ["const:a8176c:8", "const:4:8"]]
- 00a8176c ["CALL", null, ["callee:0043b838:8"]]
+ 00a817dc ["INT_ADD", "register:40f0:8", ["const:a817dc:8", "const:4:8"]]
+ 00a817dc ["CALL", null, ["callee:0043b838:8"]]
- 00a817dc ["INT_ADD", "register:40f0:8", ["const:a817dc:8", "const:4:8"]]
- 00a817dc ["CALL", null, ["callee:00c57f00:8"]]
+ 00a8184c ["INT_ADD", "register:40f0:8", ["const:a8184c:8", "const:4:8"]]
+ 00a8184c ["CALL", null, ["callee:00c57f00:8"]]
- 00a815d4 ["COPY", "tmp:0:8", ["const:78:8"]]
- 00a815d4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00a815d4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00a815d4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-17977691e8406f295f88177d685c476c"></a>

### [`00a81938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a81/00a81938.md) → [`00a819a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a819a8.md) FUN_00a819a8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8344c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a8344c.md) · 呼出先 18件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0044291c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/0044291c.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046dabc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dabc.md)
- 新版 呼出元 1件 [`00a834bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a834bc.md) · 呼出先 18件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.12% / 新版 89.12%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 4件, `unresolved_branch_alignment` 18件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 19件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a81a5c",
      "incomplete_value": true,
      "site": "00a81a74",
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
                "const:ec0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a819ec",
      "incomplete_value": true,
      "site": "00a81a04",
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
                "const:e80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a81d20",
      "incomplete_value": false,
      "site": "00a81d24",
      "value": [
        "leaf",
        "const:3c:8"
      ]
    },
    "old": null,
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a81d1c",
      "incomplete_value": true,
      "site": "00a81d24",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:7:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 9,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a8193c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a81940",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a81944",
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
      "00a819ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00a819b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a819b4",
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
- 00a81cb4 ["INT_ADD", "register:40f0:8", ["const:a81cb4:8", "const:4:8"]]
- 00a81cb4 ["CALL", null, ["callee:00c580a0:8"]]
+ 00a81d24 ["INT_ADD", "register:40f0:8", ["const:a81d24:8", "const:4:8"]]
+ 00a81d24 ["CALL", null, ["callee:00c580a0:8"]]
- 00a81f3c ["INT_ADD", "register:40f0:8", ["const:a81f3c:8", "const:4:8"]]
- 00a81f3c ["CALL", null, ["callee:00a824fc:8"]]
+ 00a81fac ["INT_ADD", "register:40f0:8", ["const:a81fac:8", "const:4:8"]]
+ 00a81fac ["CALL", null, ["callee:00a824fc:8"]]
- 00a81f74 ["BRANCH", null, ["local:b105:8"]]
+ 00a81fe4 ["BRANCH", null, ["local:b108:8"]]
~~~


<a id="compare-c52ea851f2954a42f575d3331dbcdd8c"></a>

### [`00a8248c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a82/00a8248c.md) → [`00a824fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a824fc.md) FUN_00a824fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a81938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a81/00a81938.md) · 呼出先 10件 [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ab40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab40.md) [`008bbac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bbac4.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00a819a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a819a8.md) · 呼出先 10件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab80.md) [`008bbb1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbb1c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.76% / 新版 73.76%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a825d0",
      "incomplete_value": false,
      "site": "00a825f0",
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
      "definition_site": "00a82560",
      "incomplete_value": false,
      "site": "00a82580",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a825d4",
      "incomplete_value": true,
      "site": "00a825f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00a82564",
      "incomplete_value": true,
      "site": "00a82580",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00a82574",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a82548"
      ]
    ],
    [
      "00a8258c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a82548"
      ]
    ],
    [
      "00a8259c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a82548"
      ]
    ]
  ],
  "added": [
    [
      "00a82574",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00a825b8"
      ]
    ],
    [
      "00a8258c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a825b8"
      ]
    ],
    [
      "00a8259c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a825b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a82510 ["INT_ADD", "register:40f0:8", ["const:a82510:8", "const:4:8"]]
- 00a82510 ["CALL", null, ["callee:008bbb1c:8"]]
+ 00a82580 ["INT_ADD", "register:40f0:8", ["const:a82580:8", "const:4:8"]]
+ 00a82580 ["CALL", null, ["callee:008bbb1c:8"]]
- 00a82580 ["INT_ADD", "register:40f0:8", ["const:a82580:8", "const:4:8"]]
- 00a82580 ["CALL", null, ["callee:0047e91c:8"]]
+ 00a825f0 ["INT_ADD", "register:40f0:8", ["const:a825f0:8", "const:4:8"]]
+ 00a825f0 ["CALL", null, ["callee:0047e91c:8"]]
- 00a82504 ["BRANCH", null, ["local:b5:8"]]
+ 00a82574 ["BRANCH", null, ["local:b7:8"]]
~~~


<a id="compare-01e40a788986cc2a6d40452575fbd46b"></a>

### [`00a826e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a82/00a826e4.md) → [`00a82754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82754.md) FUN_00a82754

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a83588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a83588.md) · 呼出先 5件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`0046a8e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a8e8.md) [`0048ab40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab40.md) [`0048ab48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab48.md)
- 新版 呼出元 1件 [`00a835f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a835f8.md) · 呼出先 5件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`0048ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab80.md) [`0048ab88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab88.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a82898",
      "incomplete_value": true,
      "site": "00a828a4",
      "value": [
        "LOAD",
        "8",
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
                "const:18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a82828",
      "incomplete_value": true,
      "site": "00a82834",
      "value": [
        "LOAD",
        "8",
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
                "const:18:8"
              ]
            ]
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
      "definition_site": "00a828ac",
      "incomplete_value": true,
      "site": "00a828c8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_ADD",
            "4",
            [
              [
                "live",
                "register:4098:4"
              ],
              [
                "live",
                "register:40d0:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a828c4",
      "incomplete_value": true,
      "site": "00a828c8",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_MULT",
            "4",
            [
              "INT2FLOAT",
              [
                "live",
                "register:5100:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a82854",
      "incomplete_value": true,
      "site": "00a82858",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_MULT",
            "4",
            [
              [
                "live",
                "register:5000:4"
              ],
              [
                "live",
                "register:5100:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 6
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a827ac",
      "READ",
      [
        "storage",
        "002c3fb0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00a82890",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a827c4"
      ]
    ]
  ],
  "added": [
    [
      "00a827ac",
      "READ",
      [
        "storage",
        "002c3ff0",
        null,
        "undefined8"
      ]
    ],
    [
      "00a82900",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a827c4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a82834 ["INT_ADD", "register:40f0:8", ["const:a82834:8", "const:4:8"]]
- 00a82834 ["CALL", null, ["callee:0048ab88:8"]]
+ 00a828a4 ["INT_ADD", "register:40f0:8", ["const:a828a4:8", "const:4:8"]]
+ 00a828a4 ["CALL", null, ["callee:0048ab88:8"]]
- 00a82858 ["INT_ADD", "register:40f0:8", ["const:a82858:8", "const:4:8"]]
- 00a82858 ["CALL", null, ["callee:0046a928:8"]]
+ 00a828c8 ["INT_ADD", "register:40f0:8", ["const:a828c8:8", "const:4:8"]]
+ 00a828c8 ["CALL", null, ["callee:0046a928:8"]]
- 00a8273c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:fb0:8"]]
- 00a8273c ["LOAD", "register:5160:8", ["const:1b1:8", "tmp:0:8"]]
- 00a8273c ["COPY", "register:5168:8", ["const:0:8"]]
- 00a8273c ["COPY", "register:5170:8", ["const:0:8"]]
+ 00a827ac ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:ff0:8"]]
+ 00a827ac ["LOAD", "register:5160:8", ["const:1b1:8", "tmp:0:8"]]
+ 00a827ac ["COPY", "register:5168:8", ["const:0:8"]]
+ 00a827ac ["COPY", "register:5170:8", ["const:0:8"]]
~~~


<a id="compare-2682c39456103596a9b347a12aa74cd5"></a>

### [`00a82b00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a82/00a82b00.md) → [`00a82b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82b70.md) FUN_00a82b70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 5件 [`00680e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00680/00680e08.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) [`008eafcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ea/008eafcc.md) [`009f5554`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f5/009f5554.md) [`009f6c14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f6/009f6c14.md) · 呼出先 10件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`008bbc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bbc58.md) [`00a84338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84338.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 5件 [`00680e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00680/00680e48.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`008eb020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb020.md) [`009f55a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f5/009f55a8.md) [`009f6c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f6/009f6c68.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`008bbcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbcb0.md) [`00a843a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a843a8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.70% / 新版 90.70%

優先判定に残った影響 `return_value_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00a82d40",
      "incomplete_value": true,
      "site": "00a82d60",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4098:4"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00a82c80"
      ],
      [
        "CONDITIONAL_JUMP",
        "00a82cf0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a82d28",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "00a82c7c",
      "incomplete_value": true,
      "site": "00a82cb8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
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
    "ordinal": 38,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a82b14",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a82b18",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a82b2c",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a82b84",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a82b88",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a82b9c",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a82cf0 ["INT_ADD", "register:40f0:8", ["const:a82cf0:8", "const:4:8"]]
- 00a82cf0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00a82d60 ["INT_ADD", "register:40f0:8", ["const:a82d60:8", "const:4:8"]]
+ 00a82d60 ["CALL", null, ["callee:00c53da0:8"]]
- 00a82b14 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00a82b14 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00a82b14 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:90:8"]]
- 00a82b14 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00a82b18 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00a82b18 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00a82b18 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:a0:8"]]
- 00a82b18 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6b6009e9273336a75e2e81022512b63f"></a>

### [`00a82db0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a82/00a82db0.md) → [`00a82e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82e20.md) FUN_00a82e20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 96.84% / 新版 96.84%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a82ea8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a82f04"
      ]
    ]
  ],
  "added": [
    [
      "00a82f18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a82f04"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a82e24 ["INT_ADD", "register:40f0:8", ["const:a82e24:8", "const:4:8"]]
- 00a82e24 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a82e94 ["INT_ADD", "register:40f0:8", ["const:a82e94:8", "const:4:8"]]
+ 00a82e94 ["CALL", null, ["callee:00c57f60:8"]]
- 00a82e68 ["INT_ADD", "register:40f0:8", ["const:a82e68:8", "const:4:8"]]
- 00a82e68 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a82ed8 ["INT_ADD", "register:40f0:8", ["const:a82ed8:8", "const:4:8"]]
+ 00a82ed8 ["CALL", null, ["callee:0043bbe4:8"]]
- 00a82e80 ["CBRANCH", null, ["local:b20:8", "register:101:1"]]
+ 00a82ef0 ["CBRANCH", null, ["local:b22:8", "register:101:1"]]
~~~


<a id="compare-160c541b856364ecf4e29cd94d599b6c"></a>

### [`00a82f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a82/00a82f2c.md) → [`00a82f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82f9c.md) FUN_00a82f9c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 9件 [`0067f044`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067f/0067f044.md) [`006ff318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ff318.md) [`0082c6dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082c/0082c6dc.md) [`008cabc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ca/008cabc0.md) [`008dd0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008dd0f4.md) · 呼出先 6件 [`00869988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869988.md) [`00a8312c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a8312c.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 9件 [`0067f084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067f/0067f084.md) [`006ff370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff370.md) [`0082c734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082c734.md) [`008cac14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008cac14.md) [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) · 呼出先 6件 [`008699e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008699e0.md) [`00a8319c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a8319c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.06% / 新版 89.06%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a830ec",
      "incomplete_value": true,
      "site": "00a830f4",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00a82f30",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a82f34",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a82f38",
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
      "00a82fa0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00a82fa4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a82fa8",
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
- 00a830f4 ["INT_ADD", "register:40f0:8", ["const:a830f4:8", "const:4:8"]]
- 00a830f4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a83164 ["INT_ADD", "register:40f0:8", ["const:a83164:8", "const:4:8"]]
+ 00a83164 ["CALL", null, ["callee:00c57f80:8"]]
- 00a82f2c ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
- 00a82f30 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a82f30 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a82f30 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00a82f30 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a529804a2f49711ac308a1e6b6329dff"></a>

### [`00a8312c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a8312c.md) → [`00a8319c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a8319c.md) FUN_00a8319c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a82f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a82/00a82f2c.md) · 呼出先 6件 [`008bc22c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc22c.md) [`00a843ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a843ec.md) [`00a84640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84640.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00a82f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82f9c.md) · 呼出先 6件 [`008bc284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc284.md) [`00a8445c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8445c.md) [`00a846b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a846b0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.05% / 新版 96.05%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a8315c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a83184",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8324c"
      ]
    ]
  ],
  "added": [
    [
      "00a831cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00a831f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8324c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a8315c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00a8315c ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00a8315c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 00a83180 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00a83180 ["INT_LESSEQUAL", "register:105:1", ["tmp:0:8", "register:40b8:8"]]
- 00a83180 ["INT_SBORROW", "register:106:1", ["register:40b8:8", "tmp:0:8"]]
- 00a83180 ["INT_SUB", "tmp:1:8", ["register:40b8:8", "tmp:0:8"]]
- 00a83184 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-782899a490f12f862c58f96f802a9fd9"></a>

### [`00a83260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a83260.md) → [`00a832d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a832d0.md) FUN_00a832d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 75件 [`005c6978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c6/005c6978.md) [`005c8efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c8/005c8efc.md) [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`0062bddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062b/0062bddc.md) [`0062d3c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062d/0062d3c8.md) · 呼出先 6件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00a8472c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a8472c.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 75件 [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0062be1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062b/0062be1c.md) [`0062d408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062d/0062d408.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00a8479c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8479c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 99.19% / 新版 99.19%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a83300",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a83358"
      ]
    ]
  ],
  "added": [
    [
      "00a83370",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a83358"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a832e4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00a832e4 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 00a83354 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00a83354 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 00a832f8 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00a832f8 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 00a83368 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00a83368 ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
- 00a83300 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00a83300 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-bf0c89ea1f367e06bf55206a4bf03a5f"></a>

### [`00a83588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a83588.md) → [`00a835f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a835f8.md) FUN_00a835f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 54件 [`005c7d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c7/005c7d00.md) [`005f46ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f4/005f46ac.md) [`0060eb50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060e/0060eb50.md) [`0062b4d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062b/0062b4d8.md) [`0062f280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062f/0062f280.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00a826e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a82/00a826e4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 55件 [`005c7d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7d40.md) [`005f46ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f4/005f46ec.md) [`0060eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060eb90.md) [`0062b518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062b/0062b518.md) [`0062f2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062f/0062f2c0.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00a82754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82754.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a83714",
      "incomplete_value": true,
      "site": "00a83718",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 00a836a8 ["INT_ADD", "register:40f0:8", ["const:a836a8:8", "const:4:8"]]
- 00a836a8 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a83718 ["INT_ADD", "register:40f0:8", ["const:a83718:8", "const:4:8"]]
+ 00a83718 ["CALL", null, ["callee:0043bbe4:8"]]
- 00a835ac ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00a835ac ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00a8361c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00a8361c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00a835d4 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 00a83644 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
~~~


<a id="compare-359bcf42c70cd2ba4d96da44043618fd"></a>

### [`00a836fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a836fc.md) → [`00a8376c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a8376c.md) FUN_00a8376c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0065cccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065c/0065cccc.md) [`0065d630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065d/0065d630.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`0065cd0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065c/0065cd0c.md) [`0065d670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065d/0065d670.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 41.25% / 新版 41.25%

優先判定に残った影響 `unresolved_branch_alignment` 70件, `unresolved_call_alignment` 25件, `unresolved_store_alignment` 129件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a83700",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a83704",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a83708",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a83770",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00a83774",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00a83778",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a836fc ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 00a83700 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a83700 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5120:8"]]
- 00a83700 ["INT_ADD", "tmp:1:8", ["tmp:0:8", "const:8:8"]]
- 00a83700 ["STORE", null, ["const:1b1:8", "tmp:1:8", "register:5100:8"]]
- 00a83704 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a83704 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a83704 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00a83704 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-227a73940f3003d08563a677922391a8"></a>

### [`00a843ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a843ec.md) → [`00a8445c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8445c.md) FUN_00a8445c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a8312c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a8312c.md) · 呼出先 7件 [`008bbc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bbc58.md) [`00a84338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84338.md) [`00a84588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84588.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 1件 [`00a8319c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a8319c.md) · 呼出先 7件 [`008bbcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbcb0.md) [`00a843a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a843a8.md) [`00a845f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a845f8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 76.70% / 新版 76.70%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 3件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a84524",
      "incomplete_value": true,
      "site": "00a84528",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00a844b0"
      ],
      [
        "FALL_THROUGH",
        "00a84520"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a8451c",
      "incomplete_value": true,
      "site": "00a84534",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_SRIGHT",
              [
                "live",
                "register:40c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a844ac",
      "incomplete_value": true,
      "site": "00a844c4",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              [
                "live",
                "register:40c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00a844b0"
      ],
      [
        "FALL_THROUGH",
        "00a84520"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a8451c",
      "incomplete_value": true,
      "site": "00a84534",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_SRIGHT",
              [
                "live",
                "register:40c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a844ac",
      "incomplete_value": true,
      "site": "00a844c4",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              [
                "live",
                "register:40c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a843f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a843f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a843f8",
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
      "00a84460",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00a84464",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a84468",
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
- 00a84458 ["BRANCH", null, ["local:b7:8"]]
+ 00a844c8 ["BRANCH", null, ["local:b6:8"]]
- 00a844b8 ["INT_ADD", "register:40f0:8", ["const:a844b8:8", "const:4:8"]]
- 00a844b8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a84528 ["INT_ADD", "register:40f0:8", ["const:a84528:8", "const:4:8"]]
+ 00a84528 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a844c4 ["INT_AND", "register:40d0:8", ["register:40d0:8", "const:ffffffffffff:8"]]
+ 00a844c4 ["INT_OR", "register:40d0:8", ["register:40d0:8", "const:666000000000000:8"]]
~~~


<a id="compare-6dffee00b81f156cfd599f73ebd10760"></a>

### [`00a84588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84588.md) → [`00a845f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a845f8.md) FUN_00a845f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a843ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a843ec.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a8445c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8445c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 97.83% / 新版 97.83%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00a845c0 ["INT_ADD", "register:40f0:8", ["const:a845c0:8", "const:4:8"]]
- 00a845c0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a84630 ["INT_ADD", "register:40f0:8", ["const:a84630:8", "const:4:8"]]
+ 00a84630 ["CALL", null, ["callee:00c57f80:8"]]
- 00a84608 ["INT_ADD", "register:40f0:8", ["const:a84608:8", "const:4:8"]]
- 00a84608 ["CALL", null, ["callee:00c53da0:8"]]
+ 00a84678 ["INT_ADD", "register:40f0:8", ["const:a84678:8", "const:4:8"]]
+ 00a84678 ["CALL", null, ["callee:00c53da0:8"]]
- 00a8461c ["COPY", "register:0:8", ["register:4040:8"]]
- 00a8461c ["INT_ADD", "register:40f0:8", ["const:a8461c:8", "const:4:8"]]
- 00a8461c ["CALLIND", null, ["register:0:8"]]
+ 00a8468c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a8468c ["INT_ADD", "register:40f0:8", ["const:a8468c:8", "const:4:8"]]
+ 00a8468c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1e63561370b0da0345b7f58602644491"></a>

### [`00a84640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84640.md) → [`00a846b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a846b0.md) FUN_00a846b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8312c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a8312c.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a8319c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a8319c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 77.97% / 新版 77.97%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a84650",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a84660",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84784"
      ]
    ],
    [
      "unmatched:00a84674",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84704"
      ]
    ]
  ],
  "added": [
    [
      "00a846c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a846d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84784"
      ]
    ],
    [
      "00a846e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84704"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a84650 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00a84650 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00a84650 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00a84650 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00a84654 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00a84658 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00a84658 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c3767f3c126359833dd90011ba14539b"></a>

### [`00a8472c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a8472c.md) → [`00a8479c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8479c.md) FUN_00a8479c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a83260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a83260.md) · 呼出先 4件 [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a832d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a832d0.md) · 呼出先 4件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.52% / 新版 80.52%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a84808",
      "incomplete_value": true,
      "site": "00a8480c",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": {
      "definition_site": "00a84798",
      "incomplete_value": true,
      "site": "00a8479c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4000:8"
              ],
              [
                "leaf",
                "const:8:8"
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
    "new": null,
    "old": {
      "definition_site": "00a8478c",
      "incomplete_value": true,
      "site": "00a8479c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00a84844",
      "incomplete_value": true,
      "site": "00a8485c",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00a84774",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a847d4"
      ]
    ],
    [
      "unmatched:00a847b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a847d4"
      ]
    ],
    [
      "unmatched:00a847d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a848a0"
      ]
    ]
  ],
  "added": [
    [
      "00a847e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a847d4"
      ]
    ],
    [
      "00a84824",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84844"
      ]
    ],
    [
      "00a84840",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a848a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a8479c ["INT_ADD", "register:40f0:8", ["const:a8479c:8", "const:4:8"]]
- 00a8479c ["CALL", null, ["callee:00494650:8"]]
+ 00a8480c ["INT_ADD", "register:40f0:8", ["const:a8480c:8", "const:4:8"]]
+ 00a8480c ["CALL", null, ["callee:00494650:8"]]
- 00a847ec ["BRANCH", null, ["local:b13:8"]]
+ 00a8485c ["BRANCH", null, ["local:b14:8"]]
- 00a8480c ["INT_ADD", "register:40f0:8", ["const:a8480c:8", "const:4:8"]]
- 00a8480c ["CALL", null, ["callee:00c53da0:8"]]
+ 00a8487c ["INT_ADD", "register:40f0:8", ["const:a8487c:8", "const:4:8"]]
+ 00a8487c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-ac360382a4a2d1670085935e399ce114"></a>

### [`00a84860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84860.md) → [`00a848d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a848d0.md) _INIT_228

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.92% / 新版 81.92%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a849bc",
      "incomplete_value": true,
      "site": "00a849c0",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a84a40",
      "incomplete_value": true,
      "site": "00a84a44",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00a84a34",
      "incomplete_value": true,
      "site": "00a84a44",
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
      "unmatched:00a84864",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a84868",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a8486c",
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
      "00a848d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a848d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a848dc",
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
- 00a849c0 ["INT_ADD", "register:40f0:8", ["const:a849c0:8", "const:4:8"]]
- 00a849c0 ["CALL", null, ["callee:0043b838:8"]]
+ 00a84a30 ["INT_ADD", "register:40f0:8", ["const:a84a30:8", "const:4:8"]]
+ 00a84a30 ["CALL", null, ["callee:0043b838:8"]]
- 00a849d4 ["INT_ADD", "register:40f0:8", ["const:a849d4:8", "const:4:8"]]
- 00a849d4 ["CALL", null, ["callee:0043b838:8"]]
+ 00a84a44 ["INT_ADD", "register:40f0:8", ["const:a84a44:8", "const:4:8"]]
+ 00a84a44 ["CALL", null, ["callee:0043b838:8"]]
- 00a849e8 ["INT_ADD", "register:40f0:8", ["const:a849e8:8", "const:4:8"]]
- 00a849e8 ["CALL", null, ["callee:0043b838:8"]]
+ 00a84a58 ["INT_ADD", "register:40f0:8", ["const:a84a58:8", "const:4:8"]]
+ 00a84a58 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-576b41ebb887ced5684bb017ba1bb975"></a>

### [`00a84d68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84d68.md) → [`00a84dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a84dd8.md) FUN_00a84dd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00a84d70 ["INT_ADD", "register:40f0:8", ["const:a84d70:8", "const:4:8"]]
- 00a84d70 ["CALL", null, ["callee:00851550:8"]]
+ 00a84de0 ["INT_ADD", "register:40f0:8", ["const:a84de0:8", "const:4:8"]]
+ 00a84de0 ["CALL", null, ["callee:00851550:8"]]
- 00a84d84 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00a84d84 ["RETURN", null, ["register:0:8"]]
+ 00a84df4 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00a84df4 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-f62f59b096d2eadcde4d06dacaa2c8ec"></a>

### [`00a84de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84de0.md) → [`00a84e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a84e50.md) FUN_00a84e50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) · 呼出先 1件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md)
- 新版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 1件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

アドレスに依存する影響 `unresolved_store_alignment` 2件

~~~diff
- 00a84e04 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00a84e04 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00a84e04 ["INT_ADD", "register:4040:8", ["register:4040:8", "const:88:8"]]
- 00a84e04 ["STORE", null, ["const:1b1:8", "register:4040:8", "tmp:1:8"]]
- 00a84e08 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00a84e08 ["INT_ADD", "register:40a0:8", ["register:40a0:8", "const:80:8"]]
- 00a84e08 ["STORE", null, ["const:1b1:8", "register:40a0:8", "tmp:0:8"]]
- 00a84e1c ["INT_ADD", "register:40f0:8", ["const:a84e1c:8", "const:4:8"]]
- 00a84e1c ["CALL", null, ["callee:0048cec4:8"]]
+ 00a84e8c ["INT_ADD", "register:40f0:8", ["const:a84e8c:8", "const:4:8"]]
+ 00a84e8c ["CALL", null, ["callee:0048cec4:8"]]
~~~


<a id="compare-47a486925e60a4b02c5e67da466e394c"></a>

### [`00a84ea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84ea8.md) → [`00a84f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a84f18.md) FUN_00a84f18

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`00853c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853c78.md) [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) [`0087f368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f368.md) [`00a87178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a87/00a87178.md) · 呼出先 15件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0044b534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b534.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00561d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/00561d34.md) [`00676ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676ab8.md)
- 新版 呼出元 4件 [`00853cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cd0.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) [`00a871e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a871e8.md) · 呼出先 15件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0044b574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b574.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md) [`00676af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676af8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.21% / 新版 88.21%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 4件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a85148",
      "incomplete_value": false,
      "site": "00a85150",
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
            "const:600:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a850d8",
      "incomplete_value": false,
      "site": "00a850e0",
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
            "const:65c:8"
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
      "definition_site": "00a85178",
      "incomplete_value": true,
      "site": "00a85180",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a85108",
      "incomplete_value": true,
      "site": "00a85110",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00a84f38"
      ],
      [
        "FALL_THROUGH",
        "00a84fa8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a84fa8",
      "incomplete_value": true,
      "site": "00a84fb0",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:100:1"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a84f38",
      "incomplete_value": true,
      "site": "00a84f40",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "FLOAT_LESS",
            "1",
            [
              [
                "live",
                "register:5000:8"
              ],
              [
                "live",
                "register:5020:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a84f2c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048cec4"
      ]
    ],
    [
      "unmatched:00a84f38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84fb8"
      ]
    ],
    [
      "unmatched:00a84fa4",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a84f9c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048cec4"
      ]
    ],
    [
      "00a84fa8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84fb8"
      ]
    ],
    [
      "00a85014",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a84fb0 ["COPY", "tmp:0:8", ["const:30:8"]]
- 00a84fb0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00a84fb0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00a84fb0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00a84fb8 ["INT_ADD", "register:40f0:8", ["const:a84fb8:8", "const:4:8"]]
- 00a84fb8 ["CALL", null, ["callee:00a87228:8"]]
- 00a84fc4 ["CBRANCH", null, ["local:b29:8", "register:101:1"]]
~~~


<a id="compare-11507ea327ea368cda117a4a4b3fcf52"></a>

### [`00a85294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a85/00a85294.md) → [`00a85304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a85/00a85304.md) FUN_00a85304

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 25件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md) [`00674b30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00674/00674b30.md) [`006759ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00675/006759ac.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 25件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`00674b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00674/00674b70.md) [`006759ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00675/006759ec.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.02% / 新版 84.02%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 36件, `unresolved_call_alignment` 15件, `unresolved_store_alignment` 39件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00a85b7c"
      ],
      [
        "FALL_THROUGH",
        "00a85bec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a85bec",
      "incomplete_value": true,
      "site": "00a85bfc",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "FLOAT_LESSEQUAL",
            "1",
            [
              "INT2FLOAT",
              "LOAD"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "FLOAT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a85b7c",
      "incomplete_value": true,
      "site": "00a85b8c",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "FLOAT_LESSEQUAL",
            "1",
            [
              "INT2FLOAT",
              [
                "live",
                "register:5000:8"
              ]
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "FLOAT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "ordinal": 78,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00a85c70"
      ],
      [
        "FALL_THROUGH",
        "00a85ce0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a85ce0",
      "incomplete_value": true,
      "site": "00a85cf4",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "FLOAT_LESSEQUAL",
            "1",
            [
              "INT2FLOAT",
              "LOAD"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "FLOAT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a85c70",
      "incomplete_value": true,
      "site": "00a85c84",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "FLOAT_LESSEQUAL",
            "1",
            [
              "INT2FLOAT",
              "LOAD"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "FLOAT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "ordinal": 82,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00a85c70"
      ],
      [
        "FALL_THROUGH",
        "00a85ce0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a85ce0",
      "incomplete_value": true,
      "site": "00a85d04",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "FLOAT_LESSEQUAL",
            "1",
            [
              "INT2FLOAT",
              "LOAD"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "FLOAT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a85c70",
      "incomplete_value": true,
      "site": "00a85c94",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "FLOAT_LESSEQUAL",
            "1",
            [
              "INT2FLOAT",
              "LOAD"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "FLOAT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "ordinal": 83,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a853e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a85384"
      ]
    ],
    [
      "unmatched:00a85374",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a853a8"
      ]
    ],
    [
      "unmatched:00a85380",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a853a8"
      ]
    ]
  ],
  "added": [
    [
      "00a853e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a853f4"
      ]
    ],
    [
      "00a853e4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00a85418"
      ]
    ],
    [
      "00a853f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a85418"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a85bfc ["INT_ADD", "register:40f0:8", ["const:a85bfc:8", "const:4:8"]]
- 00a85bfc ["CALL", null, ["callee:00c581c0:8"]]
+ 00a85c6c ["INT_ADD", "register:40f0:8", ["const:a85c6c:8", "const:4:8"]]
+ 00a85c6c ["CALL", null, ["callee:00c581c0:8"]]
- 00a85cf4 ["INT_ADD", "register:40f0:8", ["const:a85cf4:8", "const:4:8"]]
- 00a85cf4 ["CALL", null, ["callee:00c581b0:8"]]
+ 00a85d64 ["INT_ADD", "register:40f0:8", ["const:a85d64:8", "const:4:8"]]
+ 00a85d64 ["CALL", null, ["callee:00c581b0:8"]]
- 00a852cc ["INT_ADD", "register:40f0:8", ["const:a852cc:8", "const:4:8"]]
- 00a852cc ["CALL", null, ["callee:0048cec4:8"]]
+ 00a8533c ["INT_ADD", "register:40f0:8", ["const:a8533c:8", "const:4:8"]]
+ 00a8533c ["CALL", null, ["callee:0048cec4:8"]]
~~~


<a id="compare-4d02e4491d078b9eaa7449236a2e7596"></a>

### [`00a86cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a86/00a86cd4.md) → [`00a86d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86d44.md) FUN_00a86d44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 5件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00480178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480178.md) [`00480744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480744.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a86d00 ["INT_ADD", "register:40f0:8", ["const:a86d00:8", "const:4:8"]]
- 00a86d00 ["CALL", null, ["callee:004801b8:8"]]
+ 00a86d70 ["INT_ADD", "register:40f0:8", ["const:a86d70:8", "const:4:8"]]
+ 00a86d70 ["CALL", null, ["callee:004801b8:8"]]
- 00a86d20 ["INT_ADD", "register:40f0:8", ["const:a86d20:8", "const:4:8"]]
- 00a86d20 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a86d90 ["INT_ADD", "register:40f0:8", ["const:a86d90:8", "const:4:8"]]
+ 00a86d90 ["CALL", null, ["callee:0043bbe4:8"]]
- 00a86d48 ["INT_ADD", "register:40f0:8", ["const:a86d48:8", "const:4:8"]]
- 00a86d48 ["CALL", null, ["callee:004801b8:8"]]
+ 00a86db8 ["INT_ADD", "register:40f0:8", ["const:a86db8:8", "const:4:8"]]
+ 00a86db8 ["CALL", null, ["callee:004801b8:8"]]
~~~


<a id="compare-d8c8a6ca1e1155330d8c4825acd2491a"></a>

### [`00a86e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a86/00a86e04.md) → [`00a86e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86e74.md) FUN_00a86e74

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `compiler_shape_candidate`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 1件 [`00481098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481098.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 1件 [`004810d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/004810d8.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a86e14",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "004810d8"
      ]
    ]
  ],
  "added": [
    [
      "00a86e84",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "004810d8"
      ]
    ]
  ]
}
~~~


<a id="compare-e861fa195d1198856ff1a4b7b34ee62b"></a>

### [`00a86e18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a86/00a86e18.md) → [`00a86e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86e88.md) FUN_00a86e88

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 1件 [`00480744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480744.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 1件 [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a86e34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a86eb4"
      ]
    ]
  ],
  "added": [
    [
      "00a86ea4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a86eb4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a86e2c ["INT_ADD", "register:40f0:8", ["const:a86e2c:8", "const:4:8"]]
- 00a86e2c ["CALL", null, ["callee:00480784:8"]]
+ 00a86e9c ["INT_ADD", "register:40f0:8", ["const:a86e9c:8", "const:4:8"]]
+ 00a86e9c ["CALL", null, ["callee:00480784:8"]]
- 00a86e30 ["INT2FLOAT", "tmp:0:8", ["const:0:8"]]
- 00a86e30 ["COPY", "register:100:1", ["const:0:1"]]
- 00a86e30 ["COPY", "register:101:1", ["const:0:1"]]
- 00a86e30 ["COPY", "register:102:1", ["const:1:1"]]
+ 00a86ea0 ["INT2FLOAT", "tmp:0:8", ["const:0:8"]]
+ 00a86ea0 ["COPY", "register:100:1", ["const:0:1"]]
+ 00a86ea0 ["COPY", "register:101:1", ["const:0:1"]]
+ 00a86ea0 ["COPY", "register:102:1", ["const:1:1"]]
- 00a86e34 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00a86e34 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 00a86e34 ["CBRANCH", null, ["local:b4:8", "tmp:1:1"]]
~~~


<a id="compare-e61db066e5ddea7c928e129103b16ca4"></a>

### [`00a86e64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a86/00a86e64.md) → [`00a86ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86ed4.md) FUN_00a86ed4

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 1件 [`00480744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480744.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 1件 [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a86e80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a86f00"
      ]
    ]
  ],
  "added": [
    [
      "00a86ef0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a86f00"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a86e78 ["INT_ADD", "register:40f0:8", ["const:a86e78:8", "const:4:8"]]
- 00a86e78 ["CALL", null, ["callee:00480784:8"]]
+ 00a86ee8 ["INT_ADD", "register:40f0:8", ["const:a86ee8:8", "const:4:8"]]
+ 00a86ee8 ["CALL", null, ["callee:00480784:8"]]
- 00a86e7c ["INT2FLOAT", "tmp:0:8", ["const:0:8"]]
- 00a86e7c ["COPY", "register:100:1", ["const:0:1"]]
- 00a86e7c ["COPY", "register:101:1", ["const:0:1"]]
- 00a86e7c ["COPY", "register:102:1", ["const:1:1"]]
+ 00a86eec ["INT2FLOAT", "tmp:0:8", ["const:0:8"]]
+ 00a86eec ["COPY", "register:100:1", ["const:0:1"]]
+ 00a86eec ["COPY", "register:101:1", ["const:0:1"]]
+ 00a86eec ["COPY", "register:102:1", ["const:1:1"]]
- 00a86e80 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00a86e80 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 00a86e80 ["CBRANCH", null, ["local:b5:8", "tmp:1:1"]]
~~~


<a id="compare-f5c52d18ef4ccf6c4f2a9f4955760293"></a>

### [`00a86e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a86/00a86e9c.md) → [`00a86f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86f0c.md) FUN_00a86f0c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a8760c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a87/00a8760c.md) · 呼出先 9件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00596d10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00596/00596d10.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00a06850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06850.md)
- 新版 呼出元 1件 [`00a8767c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a8767c.md) · 呼出先 9件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00596d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596d50.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a068a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a068a4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.09% / 新版 98.09%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a86fd8",
      "incomplete_value": true,
      "site": "00a86fd8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:6cf:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a86f68",
      "incomplete_value": true,
      "site": "00a86f68",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:723:8"
              ]
            ]
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
      "00a86fc8",
      "READ",
      [
        "storage",
        "002bd723",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a86fc8",
      "READ",
      [
        "storage",
        "002bd6cf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a86ed0 ["INT_ADD", "register:40f0:8", ["const:a86ed0:8", "const:4:8"]]
- 00a86ed0 ["CALL", null, ["callee:00596d50:8"]]
+ 00a86f40 ["INT_ADD", "register:40f0:8", ["const:a86f40:8", "const:4:8"]]
+ 00a86f40 ["CALL", null, ["callee:00596d50:8"]]
- 00a86f14 ["INT_ADD", "register:40f0:8", ["const:a86f14:8", "const:4:8"]]
- 00a86f14 ["CALL", null, ["callee:004410cc:8"]]
+ 00a86f84 ["INT_ADD", "register:40f0:8", ["const:a86f84:8", "const:4:8"]]
+ 00a86f84 ["CALL", null, ["callee:004410cc:8"]]
- 00a86f30 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a86f30 ["INT_ADD", "register:40f0:8", ["const:a86f30:8", "const:4:8"]]
- 00a86f30 ["CALLIND", null, ["register:0:8"]]
+ 00a86fa0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a86fa0 ["INT_ADD", "register:40f0:8", ["const:a86fa0:8", "const:4:8"]]
+ 00a86fa0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-893ef1e6f48101e673861d162a3c9767"></a>

### [`00a875bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a87/00a875bc.md) → [`00a8762c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a8762c.md) FUN_00a8762c

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
      "definition_site": "00a87650",
      "incomplete_value": false,
      "site": "00a87650",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a875e0",
      "incomplete_value": false,
      "site": "00a875e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a87650",
      "DATA",
      [
        "storage",
        "00c8c320",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a87650",
      "DATA",
      [
        "storage",
        "00c8c3f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a875d0 ["INT_ADD", "register:40f0:8", ["const:a875d0:8", "const:4:8"]]
- 00a875d0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a87640 ["INT_ADD", "register:40f0:8", ["const:a87640:8", "const:4:8"]]
+ 00a87640 ["CALL", null, ["callee:00c57f60:8"]]
- 00a875dc ["COPY", "tmp:0:8", ["const:320:8"]]
- 00a875dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a875dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a875dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a8764c ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 00a8764c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a8764c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a8764c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-54b80ec3a32c739a93f738b7e3da160e"></a>

### [`00a875f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a87/00a875f0.md) → [`00a87660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a87660.md) FUN_00a87660

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
      "definition_site": "00a8766c",
      "incomplete_value": false,
      "site": "00a8766c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a875fc",
      "incomplete_value": false,
      "site": "00a875fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a8766c",
      "DATA",
      [
        "storage",
        "00c8c320",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a8766c",
      "DATA",
      [
        "storage",
        "00c8c3f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a875f8 ["COPY", "tmp:0:8", ["const:320:8"]]
- 00a875f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a875f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a875f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a87668 ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 00a87668 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a87668 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a87668 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-eda02dd0e025adb132833cf2557339f7"></a>

### [`00a87740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a87/00a87740.md) → [`00a877b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a877b0.md) _INIT_229

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
      "definition_site": "00a877ec",
      "incomplete_value": true,
      "site": "00a87808",
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
      "definition_site": "00a8777c",
      "incomplete_value": true,
      "site": "00a87798",
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
      "definition_site": "00a87810",
      "incomplete_value": true,
      "site": "00a8782c",
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
      "definition_site": "00a877a0",
      "incomplete_value": true,
      "site": "00a877bc",
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
      "definition_site": "00a87830",
      "incomplete_value": true,
      "site": "00a8784c",
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
      "definition_site": "00a877c0",
      "incomplete_value": true,
      "site": "00a877dc",
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
      "00a877ec",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00a87810",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00a87830",
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
      "00a877ec",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00a87810",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00a87830",
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
- 00a8776c ["COPY", "tmp:0:8", ["const:a8:8"]]
- 00a8776c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00a8776c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00a8776c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00a877dc ["COPY", "tmp:0:8", ["const:1a8:8"]]
+ 00a877dc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00a877dc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00a877dc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 00a878a0 ["INT_ADD", "register:40f0:8", ["const:a878a0:8", "const:4:8"]]
- 00a878a0 ["CALL", null, ["callee:0043b838:8"]]
+ 00a87910 ["INT_ADD", "register:40f0:8", ["const:a87910:8", "const:4:8"]]
+ 00a87910 ["CALL", null, ["callee:0043b838:8"]]
- 00a878f0 ["INT_ADD", "register:40f0:8", ["const:a878f0:8", "const:4:8"]]
- 00a878f0 ["CALL", null, ["callee:0043b838:8"]]
+ 00a87960 ["INT_ADD", "register:40f0:8", ["const:a87960:8", "const:4:8"]]
+ 00a87960 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-515a69d22e6cceab960e510f5e36d521"></a>

### [`00a89740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a89/00a89740.md) → [`00a897b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a89/00a897b0.md) _INIT_230

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.10% / 新版 79.10%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a898fc",
      "incomplete_value": true,
      "site": "00a89910",
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
      "definition_site": "00a89904",
      "incomplete_value": true,
      "site": "00a89910",
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
    "new": null,
    "old": {
      "definition_site": "00a898fc",
      "incomplete_value": true,
      "site": "00a89904",
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
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a89744",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a89748",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a89770",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a897b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a897b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a897e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a898a0 ["INT_ADD", "register:40f0:8", ["const:a898a0:8", "const:4:8"]]
- 00a898a0 ["CALL", null, ["callee:0043b838:8"]]
+ 00a89910 ["INT_ADD", "register:40f0:8", ["const:a89910:8", "const:4:8"]]
+ 00a89910 ["CALL", null, ["callee:0043b838:8"]]
- 00a89904 ["INT_ADD", "register:40f0:8", ["const:a89904:8", "const:4:8"]]
- 00a89904 ["CALL", null, ["callee:0043b838:8"]]
+ 00a89974 ["INT_ADD", "register:40f0:8", ["const:a89974:8", "const:4:8"]]
+ 00a89974 ["CALL", null, ["callee:0043b838:8"]]
- 00a899a0 ["INT_ADD", "register:40f0:8", ["const:a899a0:8", "const:4:8"]]
- 00a899a0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a89a10 ["INT_ADD", "register:40f0:8", ["const:a89a10:8", "const:4:8"]]
+ 00a89a10 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-b3fa73cfe71ce38fe48a6a0096f34ec8"></a>

### [`00a89ad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a89/00a89ad0.md) → [`00a89b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a89/00a89b40.md) FUN_00a89b40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) [`00a8a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8a/00a8a418.md) · 呼出先 7件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f91c.md) [`0069a504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a504.md) [`0069ec1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ec1c.md) [`00839b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00839/00839b18.md)
- 新版 呼出元 2件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 7件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f95c.md) [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`0069ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ec74.md) [`00839b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839b70.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a89b7c",
      "incomplete_value": true,
      "site": "00a89b84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "live",
            "register:40a8:8"
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
    "new": null,
    "old": {
      "definition_site": "00a89b18",
      "incomplete_value": true,
      "site": "00a89b20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "live",
            "register:40a8:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a89b1c",
      "incomplete_value": false,
      "site": "00a89b20",
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
      "unmatched:00a89ad0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a89ad4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a89ad8",
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
      "00a89b40",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a89b44",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a89b48",
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
- 00a89b14 ["INT_ADD", "register:40f0:8", ["const:a89b14:8", "const:4:8"]]
- 00a89b14 ["CALL", null, ["callee:0069ec74:8"]]
+ 00a89b84 ["INT_ADD", "register:40f0:8", ["const:a89b84:8", "const:4:8"]]
+ 00a89b84 ["CALL", null, ["callee:0069ec74:8"]]
- 00a89b20 ["INT_ADD", "register:40f0:8", ["const:a89b20:8", "const:4:8"]]
- 00a89b20 ["CALL", null, ["callee:0069a55c:8"]]
+ 00a89b90 ["INT_ADD", "register:40f0:8", ["const:a89b90:8", "const:4:8"]]
+ 00a89b90 ["CALL", null, ["callee:0069a55c:8"]]
- 00a89b30 ["INT_ADD", "register:40f0:8", ["const:a89b30:8", "const:4:8"]]
- 00a89b30 ["CALL", null, ["callee:0069ec74:8"]]
+ 00a89ba0 ["INT_ADD", "register:40f0:8", ["const:a89ba0:8", "const:4:8"]]
+ 00a89ba0 ["CALL", null, ["callee:0069ec74:8"]]
~~~


<a id="compare-989273d8a3e5a823326b071c110cb2e9"></a>

### [`00a89b5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a89/00a89b5c.md) → [`00a89bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a89/00a89bcc.md) FUN_00a89bcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`00a8a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8a/00a8a418.md) [`00a99238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a99238.md) [`00a9aa2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9aa2c.md) · 呼出先 17件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046cb5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cb5c.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`008b6f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f10.md)
- 新版 呼出元 3件 [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) [`00a992a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a992a8.md) [`00a9aa9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9aa9c.md) · 呼出先 17件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb9c.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 58.35% / 新版 58.35%

優先判定に残った影響 `call_argument_candidate` 7件, `store_value` 3件, `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 35件, `unresolved_store_alignment` 38件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8a200",
      "incomplete_value": false,
      "site": "00a8a204",
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
    "old": {
      "definition_site": "00a8a190",
      "incomplete_value": false,
      "site": "00a8a194",
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
                "const:7a0:8"
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
    "ordinal": 59,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8a268",
      "incomplete_value": false,
      "site": "00a8a268",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:488:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a8a1f8",
      "incomplete_value": false,
      "site": "00a8a1f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:3b8:8"
          ]
        ]
      ]
    },
    "ordinal": 64,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8a310",
      "incomplete_value": false,
      "site": "00a8a314",
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
    "old": {
      "definition_site": "00a8a2a0",
      "incomplete_value": false,
      "site": "00a8a2a4",
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
                "const:7a0:8"
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
    "ordinal": 69,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a89b60",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a89b64",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a89b68",
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
      "00a89bd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00a89bd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a89bd8",
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
- 00a89ba0 ["INT_ADD", "register:40f0:8", ["const:a89ba0:8", "const:4:8"]]
- 00a89ba0 ["CALL", null, ["callee:008b79a0:8"]]
+ 00a89c10 ["INT_ADD", "register:40f0:8", ["const:a89c10:8", "const:4:8"]]
+ 00a89c10 ["CALL", null, ["callee:008b79a0:8"]]
- 00a89bac ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00a89bac ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00a89c1c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00a89c1c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00a89bc4 ["INT_ADD", "register:40f0:8", ["const:a89bc4:8", "const:4:8"]]
- 00a89bc4 ["CALL", null, ["callee:00c586e0:8"]]
+ 00a89c34 ["INT_ADD", "register:40f0:8", ["const:a89c34:8", "const:4:8"]]
+ 00a89c34 ["CALL", null, ["callee:00c586e0:8"]]
~~~


<a id="compare-3857806d850c411eca34349379916af6"></a>

### [`00a8dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8d/00a8dcfc.md) → [`00a8dd6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8d/00a8dd6c.md) FUN_00a8dd6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) [`00a8a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8a/00a8a418.md) · 呼出先 7件 [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`007683d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007683d8.md) [`00a91af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a91/00a91af8.md) [`00a91e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a91/00a91e10.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 2件 [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 7件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00768430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768430.md) [`00a91b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91b68.md) [`00a91e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91e80.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 57.45% / 新版 57.45%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 1件, `store_destination` 7件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a8ddfc",
      "incomplete_value": false,
      "site": "00a8ddfc",
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
      "definition_site": "00a8dd8c",
      "incomplete_value": false,
      "site": "00a8dd8c",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a8de00",
      "incomplete_value": false,
      "site": "00a8de00",
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
      "definition_site": "00a8dd90",
      "incomplete_value": false,
      "site": "00a8dd90",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8ddfc",
      "incomplete_value": false,
      "site": "00a8de00",
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
      "definition_site": "00a8dd8c",
      "incomplete_value": false,
      "site": "00a8dd90",
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
      "00a8dd7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007683d8"
      ]
    ],
    [
      "00a8dd94",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "00a8dda8",
      "PARAM",
      [
        "storage",
        "00ca4f00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00a8dd7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ],
    [
      "00a8dd94",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00a8dda8",
      "PARAM",
      [
        "storage",
        "00ca5000",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a8dd0c ["INT_ADD", "register:40f0:8", ["const:a8dd0c:8", "const:4:8"]]
- 00a8dd0c ["CALL", null, ["ram:7683d8:8"]]
+ 00a8dd7c ["INT_ADD", "register:40f0:8", ["const:a8dd7c:8", "const:4:8"]]
+ 00a8dd7c ["CALL", null, ["ram:768430:8"]]
- 00a8dd1c ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00a8dd8c ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 00a8dd20 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 00a8dd20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a8dd20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a8dd20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a8dd90 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 00a8dd90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a8dd90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a8dd90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-684073f67ade14437470c45c4591f844"></a>

### [`00a8ddb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8d/00a8ddb8.md) → [`00a8de28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8d/00a8de28.md) FUN_00a8de28

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8a/00a8a418.md) · 呼出先 24件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0046cb0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cb0c.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ab30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab30.md)
- 新版 呼出元 1件 [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 24件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.16% / 新版 74.16%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `store_value` 1件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 13件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8e244",
      "incomplete_value": true,
      "site": "00a8e244",
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
      "definition_site": "00a8e1d4",
      "incomplete_value": true,
      "site": "00a8e1d4",
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
    "ordinal": 44,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a8e138",
      "incomplete_value": true,
      "site": "00a8e144",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 30,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a8e13c",
      "incomplete_value": true,
      "site": "00a8e144",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_ADD",
            "4",
            [
              [
                "live",
                "register:4048:4"
              ],
              [
                "leaf",
                "const:231:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 30,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a8ddf0",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00a8ddf4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8e35c"
      ]
    ],
    [
      "unmatched:00a8ddfc",
      "PARAM",
      [
        "storage",
        "00ca4c70",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00a8de60",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00a8de64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8e35c"
      ]
    ],
    [
      "00a8de6c",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a8e018 ["INT_ADD", "register:40f0:8", ["const:a8e018:8", "const:4:8"]]
- 00a8e018 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a8e088 ["INT_ADD", "register:40f0:8", ["const:a8e088:8", "const:4:8"]]
+ 00a8e088 ["CALL", null, ["callee:00c57f80:8"]]
- 00a8e0d4 ["INT_ADD", "register:40f0:8", ["const:a8e0d4:8", "const:4:8"]]
- 00a8e0d4 ["CALL", null, ["callee:00a46950:8"]]
+ 00a8e144 ["INT_ADD", "register:40f0:8", ["const:a8e144:8", "const:4:8"]]
+ 00a8e144 ["CALL", null, ["callee:00a46950:8"]]
- 00a8dde8 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00a8de58 ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-530e8d2268071a191b5e7a5a3201d513"></a>

### [`00a8e5b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8e/00a8e5b4.md) → [`00a8e624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8e/00a8e624.md) FUN_00a8e624

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 75件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0043e828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e828.md) [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 75件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 74.95% / 新版 74.95%

優先判定に残った影響 `call_argument_candidate` 63件, `call_target` 6件, `store_condition` 2件, `store_value` 6件, `unresolved_branch_alignment` 65件, `unresolved_call_alignment` 94件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 60件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8ebe8",
      "incomplete_value": false,
      "site": "00a8ebe8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a8eb78",
      "incomplete_value": false,
      "site": "00a8eb78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "ordinal": 44,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8f048",
      "incomplete_value": true,
      "site": "00a8f04c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a8efd8",
      "incomplete_value": true,
      "site": "00a8efdc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "leaf",
            "const:2c4000:8"
          ]
        ]
      ]
    },
    "ordinal": 93,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8f048",
      "incomplete_value": true,
      "site": "00a8f04c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a8efd8",
      "incomplete_value": true,
      "site": "00a8efdc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "leaf",
            "const:2c4000:8"
          ]
        ]
      ]
    },
    "ordinal": 94,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a8e660",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00a8e674",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a8e67c",
      "PARAM",
      [
        "storage",
        "00c8c390",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00a8e660",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00a8e674",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a8e67c",
      "PARAM",
      [
        "storage",
        "00c8c460",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a8e614 ["INT_ADD", "register:40f0:8", ["const:a8e614:8", "const:4:8"]]
- 00a8e614 ["CALL", null, ["callee:00c586e0:8"]]
+ 00a8e684 ["INT_ADD", "register:40f0:8", ["const:a8e684:8", "const:4:8"]]
+ 00a8e684 ["CALL", null, ["callee:00c586e0:8"]]
- 00a8e66c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00a8e66c ["INT_LESSEQUAL", "register:105:1", ["const:0:4", "register:4040:4"]]
- 00a8e66c ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:0:4"]]
- 00a8e66c ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
- 00a8e684 ["INT_ADD", "register:40f0:8", ["const:a8e684:8", "const:4:8"]]
- 00a8e684 ["CALL", null, ["callee:008b7a20:8"]]
+ 00a8e6f4 ["INT_ADD", "register:40f0:8", ["const:a8e6f4:8", "const:4:8"]]
+ 00a8e6f4 ["CALL", null, ["callee:008b7a20:8"]]
~~~


<a id="compare-3c194df7a8d428b67e150db1435dd1fb"></a>

### [`00a919dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a91/00a919dc.md) → [`00a91a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91a4c.md) FUN_00a91a4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009d7b7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d7/009d7b7c.md) · 呼出先 4件 [`00a9add0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9add0.md) [`00a9add4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9add4.md) [`00a9add8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9add8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009d7bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d7/009d7bd0.md) · 呼出先 4件 [`00a9ae40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae40.md) [`00a9ae44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae44.md) [`00a9ae48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae48.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 94.23% / 新版 94.23%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a91a88",
      "incomplete_value": false,
      "site": "00a91a88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a91a18",
      "incomplete_value": false,
      "site": "00a91a18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
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
      "00a91a88",
      "DATA",
      [
        "storage",
        "00c8cee8",
        null,
        "undefined *"
      ]
    ],
    [
      "00a91aec",
      "READ",
      [
        "storage",
        "00c8cf08",
        null,
        "pointer"
      ]
    ],
    [
      "00a91aec",
      "READ",
      [
        "storage",
        "00c8cf10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a91a88",
      "DATA",
      [
        "storage",
        "00c8cfb8",
        null,
        "undefined *"
      ]
    ],
    [
      "00a91aec",
      "READ",
      [
        "storage",
        "00c8cfd8",
        null,
        "pointer"
      ]
    ],
    [
      "00a91aec",
      "READ",
      [
        "storage",
        "00c8cfe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a91a08 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00a91a08 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00a91a08 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00a91a08 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00a91a78 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00a91a78 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00a91a78 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00a91a78 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00a91a10 ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 00a91a10 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a91a10 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a91a10 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a91a80 ["COPY", "tmp:0:8", ["const:fb8:8"]]
+ 00a91a80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a91a80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a91a80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00a91a28 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00a91a28 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00a91a98 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00a91a98 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-56dc8df35510e490b6174659bf96c2fe"></a>

### [`00a91af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a91/00a91af8.md) → [`00a91b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91b68.md) FUN_00a91b68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8d/00a8dcfc.md) · 呼出先 7件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`00597ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ec8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00a8dd6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8d/00a8dd6c.md) · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.61% / 新版 78.61%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 14件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a91afc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a91b00",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a91b04",
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
      "00a91b6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00a91b70",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a91b74",
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
- 00a91af8 ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
- 00a91afc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a91afc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a91afc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00a91afc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00a91b00 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00a91b00 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00a91b00 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00a91b00 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-00b161b433b284cab1baf2e61a17279b"></a>

### [`00a91e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a91/00a91e10.md) → [`00a91e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91e80.md) FUN_00a91e80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8d/00a8dcfc.md) · 呼出先 24件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0046cb0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cb0c.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0048ab30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab30.md) [`0048ab38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab38.md)
- 新版 呼出元 1件 [`00a8dd6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8d/00a8dd6c.md) · 呼出先 24件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md) [`0048ab78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab78.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.68% / 新版 91.68%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 3件, `store_value` 4件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 12件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a92280",
      "incomplete_value": true,
      "site": "00a92284",
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
      "definition_site": "00a92210",
      "incomplete_value": true,
      "site": "00a92214",
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
    "ordinal": 51,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a92348",
      "incomplete_value": true,
      "site": "00a9234c",
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
      "definition_site": "00a922d8",
      "incomplete_value": true,
      "site": "00a922dc",
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
    "ordinal": 57,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a92444",
      "incomplete_value": true,
      "site": "00a92448",
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
      "definition_site": "00a923d4",
      "incomplete_value": true,
      "site": "00a923d8",
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
    "ordinal": 64,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a91e54",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a91e58",
      "READ",
      [
        "storage",
        "002bf613",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00a91e5c",
      "READ",
      [
        "storage",
        "002bf618",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a91ec4",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "00a91ec8",
      "READ",
      [
        "storage",
        "002bf5bf",
        null,
        "string"
      ]
    ],
    [
      "00a91ecc",
      "READ",
      [
        "storage",
        "002bf5c4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a92070 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:b68:8"]]
- 00a92070 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00a920e0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:c38:8"]]
+ 00a920e0 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00a92074 ["INT_ADD", "register:40f0:8", ["const:a92074:8", "const:4:8"]]
- 00a92074 ["CALL", null, ["callee:0046cb4c:8"]]
+ 00a920e4 ["INT_ADD", "register:40f0:8", ["const:a920e4:8", "const:4:8"]]
+ 00a920e4 ["CALL", null, ["callee:0046cb4c:8"]]
- 00a920e0 ["INT_ADD", "register:40f0:8", ["const:a920e0:8", "const:4:8"]]
- 00a920e0 ["CALL", null, ["callee:0048ab78:8"]]
+ 00a92150 ["INT_ADD", "register:40f0:8", ["const:a92150:8", "const:4:8"]]
+ 00a92150 ["CALL", null, ["callee:0048ab78:8"]]
~~~


<a id="compare-8b9daabe2c4b2d0b6fb8364edd43fd6b"></a>

### [`00a927fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a92/00a927fc.md) → [`00a9286c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a92/00a9286c.md) FUN_00a9286c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00a9b224`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9b/00a9b224.md) [`00a9b32c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9b/00a9b32c.md) · 呼出先 10件 [`00853c70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853c70.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md) [`00a468e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468e0.md) [`00a468f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468f0.md)
- 新版 呼出元 2件 [`00a9b294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b294.md) [`00a9b39c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b39c.md) · 呼出先 10件 [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`00a46934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46934.md) [`00a46944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46944.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_store_alignment

命令の説明率　旧版 89.69% / 新版 89.69%

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a92898",
      "incomplete_value": true,
      "site": "00a92898",
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
                "register:8:8"
              ],
              [
                "leaf",
                "const:20:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:fffffffffffffff8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a92828",
      "incomplete_value": true,
      "site": "00a92828",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40e8:8"
          ],
          [
            "leaf",
            "const:fffffffffffffff8:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a92898",
      "incomplete_value": true,
      "site": "00a92898",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:1660:8"
              ],
              [
                "leaf",
                "const:28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a92828",
      "incomplete_value": true,
      "site": "00a92828",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b0:8"
              ],
              [
                "leaf",
                "const:28:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a928ac",
      "incomplete_value": true,
      "site": "00a928b0",
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
            "const:2f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9283c",
      "incomplete_value": true,
      "site": "00a92840",
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
            "register:40b8:8"
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
      "unmatched:00a92804",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a92808",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a9280c",
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
      "00a92874",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a92878",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a9287c",
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
- 00a92840 ["INT_ADD", "register:40f0:8", ["const:a92840:8", "const:4:8"]]
- 00a92840 ["CALL", null, ["callee:008b7a20:8"]]
+ 00a928b0 ["INT_ADD", "register:40f0:8", ["const:a928b0:8", "const:4:8"]]
+ 00a928b0 ["CALL", null, ["callee:008b7a20:8"]]
- 00a92898 ["INT_ADD", "register:40f0:8", ["const:a92898:8", "const:4:8"]]
- 00a92898 ["CALL", null, ["callee:00a46944:8"]]
+ 00a92908 ["INT_ADD", "register:40f0:8", ["const:a92908:8", "const:4:8"]]
+ 00a92908 ["CALL", null, ["callee:00a46944:8"]]
- 00a92804 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00a92804 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00a92804 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 00a92804 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-dee6462ae12e49ffe5ce50cfb18c952d"></a>

### [`00a92b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a92/00a92b38.md) → [`00a92ba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a92/00a92ba8.md) FUN_00a92ba8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) [`00a92d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a92/00a92d48.md) · 呼出先 9件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`0046cb0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cb0c.md) [`0048ab30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab30.md) [`0048ab38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab38.md) [`007683c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007683c8.md)
- 新版 呼出元 2件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) [`00a92db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a92/00a92db8.md) · 呼出先 9件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md) [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md) [`0048ab78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab78.md) [`00768420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768420.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a92bbc",
      "value": [
        "leaf",
        "ram:768420:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a92b4c",
      "value": [
        "leaf",
        "ram:7683c8:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a92c1c",
      "incomplete_value": false,
      "site": "00a92c20",
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
      "definition_site": "00a92bac",
      "incomplete_value": false,
      "site": "00a92bb0",
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
      "00a92bbc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007683c8"
      ]
    ],
    [
      "00a92c1c",
      "PARAM",
      [
        "storage",
        "00ca4c70",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00a92bbc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768420"
      ]
    ],
    [
      "00a92c1c",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a92b4c ["INT_ADD", "register:40f0:8", ["const:a92b4c:8", "const:4:8"]]
- 00a92b4c ["CALL", null, ["ram:7683c8:8"]]
+ 00a92bbc ["INT_ADD", "register:40f0:8", ["const:a92bbc:8", "const:4:8"]]
+ 00a92bbc ["CALL", null, ["ram:768420:8"]]
- 00a92bb0 ["INT_ADD", "register:40f0:8", ["const:a92bb0:8", "const:4:8"]]
- 00a92bb0 ["CALL", null, ["callee:0046cb4c:8"]]
+ 00a92c20 ["INT_ADD", "register:40f0:8", ["const:a92c20:8", "const:4:8"]]
+ 00a92c20 ["CALL", null, ["callee:0046cb4c:8"]]
- 00a92b60 ["INT_ADD", "register:40f0:8", ["const:a92b60:8", "const:4:8"]]
- 00a92b60 ["CALL", null, ["callee:008b7a20:8"]]
+ 00a92bd0 ["INT_ADD", "register:40f0:8", ["const:a92bd0:8", "const:4:8"]]
+ 00a92bd0 ["CALL", null, ["callee:008b7a20:8"]]
~~~


<a id="compare-24fdc5ab28140169356ff4bb89526b61"></a>

### [`00a92d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a92/00a92d48.md) → [`00a92db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a92/00a92db8.md) FUN_00a92db8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 57件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467ea4.md) [`00467f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f1c.md)
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 57件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ee4.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 96.66% / 新版 96.66%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 1件, `store_value` 9件, `unresolved_branch_alignment` 2件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a92e88",
      "incomplete_value": true,
      "site": "00a92e9c",
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
                "const:7b3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a92e18",
      "incomplete_value": true,
      "site": "00a92e2c",
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
                "const:800:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a92ee8",
      "incomplete_value": true,
      "site": "00a92ef4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00a92e78",
      "incomplete_value": true,
      "site": "00a92e84",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a92ee4",
      "incomplete_value": true,
      "site": "00a92f00",
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
                "const:afd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a92e74",
      "incomplete_value": true,
      "site": "00a92e90",
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
                "const:abd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a92df8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00a92e0c",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a92e14",
      "PARAM",
      [
        "storage",
        "00c8c390",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00a92df8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00a92e0c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a92e14",
      "PARAM",
      [
        "storage",
        "00c8c460",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a92db0 ["INT_ADD", "register:40f0:8", ["const:a92db0:8", "const:4:8"]]
- 00a92db0 ["CALL", null, ["callee:00c586e0:8"]]
+ 00a92e20 ["INT_ADD", "register:40f0:8", ["const:a92e20:8", "const:4:8"]]
+ 00a92e20 ["CALL", null, ["callee:00c586e0:8"]]
- 00a92f04 ["INT_ADD", "register:40f0:8", ["const:a92f04:8", "const:4:8"]]
- 00a92f04 ["CALL", null, ["callee:0043de18:8"]]
+ 00a92f74 ["INT_ADD", "register:40f0:8", ["const:a92f74:8", "const:4:8"]]
+ 00a92f74 ["CALL", null, ["callee:0043de18:8"]]
- 00a92f74 ["INT_ADD", "register:40f0:8", ["const:a92f74:8", "const:4:8"]]
- 00a92f74 ["CALL", null, ["callee:00489f8c:8"]]
+ 00a92fe4 ["INT_ADD", "register:40f0:8", ["const:a92fe4:8", "const:4:8"]]
+ 00a92fe4 ["CALL", null, ["callee:00489f8c:8"]]
~~~


<a id="compare-b2f4245904be11ba2943124656da7baa"></a>

### [`00a957c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a95/00a957c8.md) → [`00a95838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95838.md) FUN_00a95838

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00a9a3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a3b4.md) [`00a9a48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a48c.md) · 呼出先 24件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043ec60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043ec60.md) [`0043f78c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f78c.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 2件 [`00a9a424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a424.md) [`00a9a4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a4fc.md) · 呼出先 24件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) [`0043f7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f7cc.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.26% / 新版 98.26%

優先判定に残った影響 `call_target` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a95b04",
      "incomplete_value": true,
      "site": "00a95b24",
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
                "const:306000:8"
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
      "definition_site": "00a95a94",
      "incomplete_value": true,
      "site": "00a95ab4",
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
                "const:306000:8"
              ],
              [
                "leaf",
                "const:80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 72,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a95b04",
      "incomplete_value": true,
      "site": "00a95b24",
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
      "definition_site": "00a95a94",
      "incomplete_value": true,
      "site": "00a95ab4",
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
    "ordinal": 73,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a95b28",
      "incomplete_value": true,
      "site": "00a95b34",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a95ab8",
      "incomplete_value": true,
      "site": "00a95ac4",
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
                "const:20:8"
              ]
            ]
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
      "00a95874",
      "DATA",
      [
        "storage",
        "0039bac0",
        null,
        "dword"
      ]
    ],
    [
      "00a95874",
      "DATA",
      [
        "storage",
        "0039bac8",
        null,
        "qword"
      ]
    ],
    [
      "00a958b4",
      "DATA",
      [
        "storage",
        "0039bac8",
        null,
        "qword"
      ]
    ]
  ],
  "added": [
    [
      "00a95874",
      "DATA",
      [
        "storage",
        "0039bac0",
        null,
        "byte[23]"
      ]
    ],
    [
      "00a95874",
      "DATA",
      [
        "storage",
        "0039bac8",
        null,
        "byte[23]"
      ]
    ],
    [
      "00a958b4",
      "DATA",
      [
        "storage",
        "0039bac8",
        null,
        "byte[23]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a95c68 ["INT_ADD", "register:40f0:8", ["const:a95c68:8", "const:4:8"]]
- 00a95c68 ["CALL", null, ["ram:b3d618:8"]]
+ 00a95cd8 ["INT_ADD", "register:40f0:8", ["const:a95cd8:8", "const:4:8"]]
+ 00a95cd8 ["CALL", null, ["ram:b3d6b4:8"]]
- 00a95d40 ["INT_ADD", "register:40f0:8", ["const:a95d40:8", "const:4:8"]]
- 00a95d40 ["CALL", null, ["ram:a84d88:8"]]
+ 00a95db0 ["INT_ADD", "register:40f0:8", ["const:a95db0:8", "const:4:8"]]
+ 00a95db0 ["CALL", null, ["ram:a84df8:8"]]
- 00a95820 ["INT_ADD", "register:40f0:8", ["const:a95820:8", "const:4:8"]]
- 00a95820 ["CALL", null, ["callee:00c58500:8"]]
+ 00a95890 ["INT_ADD", "register:40f0:8", ["const:a95890:8", "const:4:8"]]
+ 00a95890 ["CALL", null, ["callee:00c58500:8"]]
~~~


<a id="compare-8aa12f97f6cca5d061c3fed871de917a"></a>

### [`00a95f0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a95/00a95f0c.md) → [`00a95f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95f7c.md) FUN_00a95f7c

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
      "definition_site": "00a95fa0",
      "incomplete_value": false,
      "site": "00a95fa0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:488:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a95f30",
      "incomplete_value": false,
      "site": "00a95f30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:3b8:8"
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
      "00a95fa0",
      "DATA",
      [
        "storage",
        "00c8c3b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a95fa0",
      "DATA",
      [
        "storage",
        "00c8c488",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a95f20 ["INT_ADD", "register:40f0:8", ["const:a95f20:8", "const:4:8"]]
- 00a95f20 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a95f90 ["INT_ADD", "register:40f0:8", ["const:a95f90:8", "const:4:8"]]
+ 00a95f90 ["CALL", null, ["callee:00c57f60:8"]]
- 00a95f2c ["COPY", "tmp:0:8", ["const:3b8:8"]]
- 00a95f2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a95f2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a95f2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a95f9c ["COPY", "tmp:0:8", ["const:488:8"]]
+ 00a95f9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a95f9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a95f9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b289ff4bb1718cc402732dd912a56a44"></a>

### [`00a95f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a95/00a95f40.md) → [`00a95fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95fb0.md) FUN_00a95fb0

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
      "definition_site": "00a95fbc",
      "incomplete_value": false,
      "site": "00a95fbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:488:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a95f4c",
      "incomplete_value": false,
      "site": "00a95f4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:3b8:8"
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
      "00a95fbc",
      "DATA",
      [
        "storage",
        "00c8c3b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a95fbc",
      "DATA",
      [
        "storage",
        "00c8c488",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a95f48 ["COPY", "tmp:0:8", ["const:3b8:8"]]
- 00a95f48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a95f48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a95f48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a95fb8 ["COPY", "tmp:0:8", ["const:488:8"]]
+ 00a95fb8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a95fb8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a95fb8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-58b6bdc2eea95584bbaf914cfd2d36e6"></a>

### [`00a95f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a95/00a95f5c.md) → [`00a95fcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95fcc.md) FUN_00a95fcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a95fec",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a95f7c",
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
      "site": "00a95ff8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a95f88",
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
      "00a95fec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a95ff8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a95fec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a95ff8",
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
- 00a95f7c ["INT_ADD", "register:40f0:8", ["const:a95f7c:8", "const:4:8"]]
- 00a95f7c ["CALL", null, ["ram:47acf4:8"]]
+ 00a95fec ["INT_ADD", "register:40f0:8", ["const:a95fec:8", "const:4:8"]]
+ 00a95fec ["CALL", null, ["ram:47ad34:8"]]
- 00a95f88 ["INT_ADD", "register:40f0:8", ["const:a95f88:8", "const:4:8"]]
- 00a95f88 ["CALL", null, ["ram:47acf4:8"]]
+ 00a95ff8 ["INT_ADD", "register:40f0:8", ["const:a95ff8:8", "const:4:8"]]
+ 00a95ff8 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-24577acfd02d64c4ddc55e5f025be601"></a>

### [`00a95ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a95/00a95ffc.md) → [`00a9606c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a96/00a9606c.md) FUN_00a9606c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8a/00a8a418.md) · 呼出先 22件 [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md) [`0046eef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046eef8.md) [`0046f0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f0b4.md) [`0046f66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f66c.md)
- 新版 呼出元 1件 [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 22件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f6ac.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 34.91% / 新版 34.91%

優先判定に残った影響 `call_argument_candidate` 28件, `store_value` 6件, `unresolved_branch_alignment` 130件, `unresolved_call_alignment` 145件, `unresolved_store_alignment` 255件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a974e4",
      "incomplete_value": true,
      "site": "00a974e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:38b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a97474",
      "incomplete_value": true,
      "site": "00a97474",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 214,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a974fc",
      "incomplete_value": true,
      "site": "00a974fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9748c",
      "incomplete_value": true,
      "site": "00a9748c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:59:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 216,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a97500",
      "incomplete_value": true,
      "site": "00a97500",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00a97490",
      "incomplete_value": true,
      "site": "00a97490",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 217,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a96040",
      "DATA",
      [
        "storage",
        "00c8c438",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00a96094",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00a96098",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a97868"
      ]
    ]
  ],
  "added": [
    [
      "00a960b0",
      "DATA",
      [
        "storage",
        "00c8c508",
        null,
        "pointer"
      ]
    ],
    [
      "00a96104",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00a96108",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a97868"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a96100 ["INT_ADD", "register:40f0:8", ["const:a96100:8", "const:4:8"]]
- 00a96100 ["CALL", null, ["callee:0047e64c:8"]]
+ 00a96170 ["INT_ADD", "register:40f0:8", ["const:a96170:8", "const:4:8"]]
+ 00a96170 ["CALL", null, ["callee:0047e64c:8"]]
+ 00a96100 ["COPY", "tmp:0:8", ["const:90:8"]]
+ 00a96100 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
+ 00a96100 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
+ 00a96100 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00a96170 ["COPY", "register:4000:8", ["register:40c8:8"]]
~~~


<a id="compare-ac634b24af6b44fb14401f9a6c71e70e"></a>

### [`00a9824c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a9824c.md) → [`00a982bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a982bc.md) FUN_00a982bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a98414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a98414.md) · 呼出先 6件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`00672b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00672/00672b48.md) [`0067e5e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e5e8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00a98484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98484.md) · 呼出先 6件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`0067e628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e628.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.49% / 新版 96.49%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a982cc",
      "incomplete_value": false,
      "site": "00a982d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:508:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9825c",
      "incomplete_value": false,
      "site": "00a98264",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:438:8"
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
      "definition_site": "00a98440",
      "incomplete_value": false,
      "site": "00a98444",
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
            "const:6d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a983d0",
      "incomplete_value": false,
      "site": "00a983d4",
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
            "const:608:8"
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
      "00a982d4",
      "DATA",
      [
        "storage",
        "00c8c438",
        null,
        "pointer"
      ]
    ],
    [
      "00a98444",
      "DATA",
      [
        "storage",
        "00c84608",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00a982d4",
      "DATA",
      [
        "storage",
        "00c8c508",
        null,
        "pointer"
      ]
    ],
    [
      "00a98444",
      "DATA",
      [
        "storage",
        "00c846d8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9825c ["COPY", "tmp:0:8", ["const:438:8"]]
- 00a9825c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9825c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9825c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a982cc ["COPY", "tmp:0:8", ["const:508:8"]]
+ 00a982cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a982cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a982cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a9826c ["INT_ADD", "register:40f0:8", ["const:a9826c:8", "const:4:8"]]
- 00a9826c ["CALL", null, ["callee:0046e8e4:8"]]
+ 00a982dc ["INT_ADD", "register:40f0:8", ["const:a982dc:8", "const:4:8"]]
+ 00a982dc ["CALL", null, ["callee:0046e8e4:8"]]
- 00a98274 ["INT_ADD", "register:40f0:8", ["const:a98274:8", "const:4:8"]]
- 00a98274 ["CALL", null, ["callee:0046e8e4:8"]]
+ 00a982e4 ["INT_ADD", "register:40f0:8", ["const:a982e4:8", "const:4:8"]]
+ 00a982e4 ["CALL", null, ["callee:0046e8e4:8"]]
~~~


<a id="compare-1b897baf26ba05ccb9b246c7add40465"></a>

### [`00a9843c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a9843c.md) → [`00a984ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a984ac.md) FUN_00a984ac

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
      "definition_site": "00a984c0",
      "incomplete_value": false,
      "site": "00a984c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:528:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98450",
      "incomplete_value": false,
      "site": "00a98454",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:458:8"
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
      "00a984c4",
      "DATA",
      [
        "storage",
        "00c8c458",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a984c4",
      "DATA",
      [
        "storage",
        "00c8c528",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98448 ["INT_ADD", "register:40f0:8", ["const:a98448:8", "const:4:8"]]
- 00a98448 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a984b8 ["INT_ADD", "register:40f0:8", ["const:a984b8:8", "const:4:8"]]
+ 00a984b8 ["CALL", null, ["callee:00c57f60:8"]]
- 00a98450 ["COPY", "tmp:0:8", ["const:458:8"]]
- 00a98450 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98450 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98450 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a984c0 ["COPY", "tmp:0:8", ["const:528:8"]]
+ 00a984c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a984c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a984c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1765467081e7b7269253dc24d944822e"></a>

### [`00a98478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a98478.md) → [`00a984e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a984e8.md) FUN_00a984e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 23件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md)
- 新版 呼出元 0件  · 呼出先 23件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.89% / 新版 96.89%

優先判定に残った影響 `call_target` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a98894",
      "incomplete_value": false,
      "site": "00a98894",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:598:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98824",
      "incomplete_value": false,
      "site": "00a98824",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:4c8:8"
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a988cc",
      "incomplete_value": false,
      "site": "00a988cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:618:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9885c",
      "incomplete_value": false,
      "site": "00a9885c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:548:8"
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a985b4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a98544",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00a985b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a985d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a98634",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "00a985b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a985d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a98634",
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
- 00a98544 ["INT_ADD", "register:40f0:8", ["const:a98544:8", "const:4:8"]]
- 00a98544 ["CALL", null, ["ram:47acf4:8"]]
+ 00a985b4 ["INT_ADD", "register:40f0:8", ["const:a985b4:8", "const:4:8"]]
+ 00a985b4 ["CALL", null, ["ram:47ad34:8"]]
- 00a98560 ["INT_ADD", "register:40f0:8", ["const:a98560:8", "const:4:8"]]
- 00a98560 ["CALL", null, ["ram:47acf4:8"]]
+ 00a985d0 ["INT_ADD", "register:40f0:8", ["const:a985d0:8", "const:4:8"]]
+ 00a985d0 ["CALL", null, ["ram:47ad34:8"]]
- 00a985c4 ["INT_ADD", "register:40f0:8", ["const:a985c4:8", "const:4:8"]]
- 00a985c4 ["CALL", null, ["ram:48ccf8:8"]]
+ 00a98634 ["INT_ADD", "register:40f0:8", ["const:a98634:8", "const:4:8"]]
+ 00a98634 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-c08433969d7c73cf8be22004e5a22100"></a>

### [`00a98b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a98b2c.md) → [`00a98b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98b9c.md) FUN_00a98b9c

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
      "definition_site": "00a98bb0",
      "incomplete_value": false,
      "site": "00a98bb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:598:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98b40",
      "incomplete_value": false,
      "site": "00a98b44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:4c8:8"
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
      "00a98bb4",
      "DATA",
      [
        "storage",
        "00c8c4c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a98bb4",
      "DATA",
      [
        "storage",
        "00c8c598",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98b38 ["INT_ADD", "register:40f0:8", ["const:a98b38:8", "const:4:8"]]
- 00a98b38 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a98ba8 ["INT_ADD", "register:40f0:8", ["const:a98ba8:8", "const:4:8"]]
+ 00a98ba8 ["CALL", null, ["callee:00c57f60:8"]]
- 00a98b40 ["COPY", "tmp:0:8", ["const:4c8:8"]]
- 00a98b40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98b40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98b40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a98bb0 ["COPY", "tmp:0:8", ["const:598:8"]]
+ 00a98bb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a98bb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a98bb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-272f30a9f85855903731d765bc5aebc6"></a>

### [`00a98b50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a98b50.md) → [`00a98bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98bc0.md) FUN_00a98bc0

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
      "definition_site": "00a98bc4",
      "incomplete_value": false,
      "site": "00a98bc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:598:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98b54",
      "incomplete_value": false,
      "site": "00a98b58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:4c8:8"
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
      "00a98bc8",
      "DATA",
      [
        "storage",
        "00c8c4c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a98bc8",
      "DATA",
      [
        "storage",
        "00c8c598",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98b54 ["COPY", "tmp:0:8", ["const:4c8:8"]]
- 00a98b54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98b54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98b54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a98bc4 ["COPY", "tmp:0:8", ["const:598:8"]]
+ 00a98bc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a98bc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a98bc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eb9b0abe385b47195f3e6dc6c9bfa72e"></a>

### [`00a98c10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a98c10.md) → [`00a98c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98c80.md) FUN_00a98c80

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
      "definition_site": "00a98c94",
      "incomplete_value": false,
      "site": "00a98c98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:618:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98c24",
      "incomplete_value": false,
      "site": "00a98c28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:548:8"
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
      "00a98c98",
      "DATA",
      [
        "storage",
        "00c8c548",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a98c98",
      "DATA",
      [
        "storage",
        "00c8c618",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98c1c ["INT_ADD", "register:40f0:8", ["const:a98c1c:8", "const:4:8"]]
- 00a98c1c ["CALL", null, ["callee:00c57f60:8"]]
+ 00a98c8c ["INT_ADD", "register:40f0:8", ["const:a98c8c:8", "const:4:8"]]
+ 00a98c8c ["CALL", null, ["callee:00c57f60:8"]]
- 00a98c24 ["COPY", "tmp:0:8", ["const:548:8"]]
- 00a98c24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98c24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98c24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a98c94 ["COPY", "tmp:0:8", ["const:618:8"]]
+ 00a98c94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a98c94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a98c94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5ec652101759184d2ab839f9cc0afe02"></a>

### [`00a98c34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a98c34.md) → [`00a98ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98ca4.md) FUN_00a98ca4

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
      "definition_site": "00a98ca8",
      "incomplete_value": false,
      "site": "00a98cac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:618:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98c38",
      "incomplete_value": false,
      "site": "00a98c3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:548:8"
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
      "00a98cac",
      "DATA",
      [
        "storage",
        "00c8c548",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a98cac",
      "DATA",
      [
        "storage",
        "00c8c618",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98c38 ["COPY", "tmp:0:8", ["const:548:8"]]
- 00a98c38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98c38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98c38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a98ca8 ["COPY", "tmp:0:8", ["const:618:8"]]
+ 00a98ca8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a98ca8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a98ca8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4d809a15c8eeada25a4b645ba6927626"></a>

### [`00a98cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a98cf4.md) → [`00a98d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98d64.md) FUN_00a98d64

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
      "definition_site": "00a98d84",
      "incomplete_value": false,
      "site": "00a98d88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:6a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98d14",
      "incomplete_value": false,
      "site": "00a98d18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:5d8:8"
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
      "00a98d88",
      "DATA",
      [
        "storage",
        "00c8c5d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a98d88",
      "DATA",
      [
        "storage",
        "00c8c6a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98d08 ["INT_ADD", "register:40f0:8", ["const:a98d08:8", "const:4:8"]]
- 00a98d08 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a98d78 ["INT_ADD", "register:40f0:8", ["const:a98d78:8", "const:4:8"]]
+ 00a98d78 ["CALL", null, ["callee:00c57f60:8"]]
- 00a98d14 ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 00a98d14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98d14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98d14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a98d84 ["COPY", "tmp:0:8", ["const:6a8:8"]]
+ 00a98d84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a98d84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a98d84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6597e5a8b92631d94c6eba3abba5c9e3"></a>

### [`00a98d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a98d4c.md) → [`00a98dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98dbc.md) FUN_00a98dbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0047d1bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047d/0047d1bc.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047d1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d1fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.05% / 新版 96.05%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a98e60",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a98df0",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a98e6c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a98dfc",
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
      "site": "00a98ec4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a98e54",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00a98e60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a98e6c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a98ec4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a98e60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a98e6c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a98ec4",
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
- 00a98df0 ["INT_ADD", "register:40f0:8", ["const:a98df0:8", "const:4:8"]]
- 00a98df0 ["CALL", null, ["ram:47acf4:8"]]
+ 00a98e60 ["INT_ADD", "register:40f0:8", ["const:a98e60:8", "const:4:8"]]
+ 00a98e60 ["CALL", null, ["ram:47ad34:8"]]
- 00a98dfc ["INT_ADD", "register:40f0:8", ["const:a98dfc:8", "const:4:8"]]
- 00a98dfc ["CALL", null, ["ram:47acf4:8"]]
+ 00a98e6c ["INT_ADD", "register:40f0:8", ["const:a98e6c:8", "const:4:8"]]
+ 00a98e6c ["CALL", null, ["ram:47ad34:8"]]
- 00a98e54 ["INT_ADD", "register:40f0:8", ["const:a98e54:8", "const:4:8"]]
- 00a98e54 ["CALL", null, ["ram:47acf4:8"]]
+ 00a98ec4 ["INT_ADD", "register:40f0:8", ["const:a98ec4:8", "const:4:8"]]
+ 00a98ec4 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-a66a421d9e8f52ff0ac26a8793a297ea"></a>

### [`00a98ea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a98ea8.md) → [`00a98f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98f18.md) FUN_00a98f18

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
      "definition_site": "00a98f38",
      "incomplete_value": false,
      "site": "00a98f3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:728:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98ec8",
      "incomplete_value": false,
      "site": "00a98ecc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:658:8"
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
      "00a98f3c",
      "DATA",
      [
        "storage",
        "00c8c658",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a98f3c",
      "DATA",
      [
        "storage",
        "00c8c728",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98ebc ["INT_ADD", "register:40f0:8", ["const:a98ebc:8", "const:4:8"]]
- 00a98ebc ["CALL", null, ["callee:00c57f60:8"]]
+ 00a98f2c ["INT_ADD", "register:40f0:8", ["const:a98f2c:8", "const:4:8"]]
+ 00a98f2c ["CALL", null, ["callee:00c57f60:8"]]
- 00a98ec8 ["COPY", "tmp:0:8", ["const:658:8"]]
- 00a98ec8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98ec8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98ec8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a98f38 ["COPY", "tmp:0:8", ["const:728:8"]]
+ 00a98f38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a98f38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a98f38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6a7221cca8eede31ab38680beece6313"></a>

### [`00a98f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a98f00.md) → [`00a98f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98f70.md) FUN_00a98f70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0047d1bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047d/0047d1bc.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047d1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d1fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a99018",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a98fa8",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a99024",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a98fb4",
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
      "site": "00a9907c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9900c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00a99018",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a99024",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a9907c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a99018",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a99024",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a9907c",
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
- 00a98fa8 ["INT_ADD", "register:40f0:8", ["const:a98fa8:8", "const:4:8"]]
- 00a98fa8 ["CALL", null, ["ram:47acf4:8"]]
+ 00a99018 ["INT_ADD", "register:40f0:8", ["const:a99018:8", "const:4:8"]]
+ 00a99018 ["CALL", null, ["ram:47ad34:8"]]
- 00a98fb4 ["INT_ADD", "register:40f0:8", ["const:a98fb4:8", "const:4:8"]]
- 00a98fb4 ["CALL", null, ["ram:47acf4:8"]]
+ 00a99024 ["INT_ADD", "register:40f0:8", ["const:a99024:8", "const:4:8"]]
+ 00a99024 ["CALL", null, ["ram:47ad34:8"]]
- 00a9900c ["INT_ADD", "register:40f0:8", ["const:a9900c:8", "const:4:8"]]
- 00a9900c ["CALL", null, ["ram:47acf4:8"]]
+ 00a9907c ["INT_ADD", "register:40f0:8", ["const:a9907c:8", "const:4:8"]]
+ 00a9907c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-8db6d9d4187f964a09ef62e850ed4073"></a>

### [`00a99060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a99060.md) → [`00a990d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a990d0.md) FUN_00a990d0

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
      "definition_site": "00a990f0",
      "incomplete_value": false,
      "site": "00a990f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:7a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a99080",
      "incomplete_value": false,
      "site": "00a99084",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:6d8:8"
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
      "00a990f4",
      "DATA",
      [
        "storage",
        "00c8c6d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a990f4",
      "DATA",
      [
        "storage",
        "00c8c7a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a99074 ["INT_ADD", "register:40f0:8", ["const:a99074:8", "const:4:8"]]
- 00a99074 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a990e4 ["INT_ADD", "register:40f0:8", ["const:a990e4:8", "const:4:8"]]
+ 00a990e4 ["CALL", null, ["callee:00c57f60:8"]]
- 00a99080 ["COPY", "tmp:0:8", ["const:6d8:8"]]
- 00a99080 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a99080 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a99080 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a990f0 ["COPY", "tmp:0:8", ["const:7a8:8"]]
+ 00a990f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a990f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a990f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6fc368eeabb939e7483e99cd93aeb43d"></a>

### [`00a990b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a990b8.md) → [`00a99128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99128.md) FUN_00a99128

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)

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
      "site": "00a991cc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9915c",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a991d8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a99168",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00a991cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a991d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a991cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a991d8",
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
- 00a9915c ["INT_ADD", "register:40f0:8", ["const:a9915c:8", "const:4:8"]]
- 00a9915c ["CALL", null, ["ram:47acf4:8"]]
+ 00a991cc ["INT_ADD", "register:40f0:8", ["const:a991cc:8", "const:4:8"]]
+ 00a991cc ["CALL", null, ["ram:47ad34:8"]]
- 00a99168 ["INT_ADD", "register:40f0:8", ["const:a99168:8", "const:4:8"]]
- 00a99168 ["CALL", null, ["ram:47acf4:8"]]
+ 00a991d8 ["INT_ADD", "register:40f0:8", ["const:a991d8:8", "const:4:8"]]
+ 00a991d8 ["CALL", null, ["ram:47ad34:8"]]
- 00a990d8 ["INT_ADD", "register:40f0:8", ["const:a990d8:8", "const:4:8"]]
- 00a990d8 ["CALL", null, ["callee:008b6efc:8"]]
+ 00a99148 ["INT_ADD", "register:40f0:8", ["const:a99148:8", "const:4:8"]]
+ 00a99148 ["CALL", null, ["callee:008b6efc:8"]]
~~~


<a id="compare-cbb39ffde6de4f6640b9afc90ee5449a"></a>

### [`00a991e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a991e8.md) → [`00a99258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99258.md) FUN_00a99258

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
      "definition_site": "00a9927c",
      "incomplete_value": false,
      "site": "00a9927c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:828:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9920c",
      "incomplete_value": false,
      "site": "00a9920c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:758:8"
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
      "00a9927c",
      "DATA",
      [
        "storage",
        "00c8c758",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9927c",
      "DATA",
      [
        "storage",
        "00c8c828",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a991fc ["INT_ADD", "register:40f0:8", ["const:a991fc:8", "const:4:8"]]
- 00a991fc ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9926c ["INT_ADD", "register:40f0:8", ["const:a9926c:8", "const:4:8"]]
+ 00a9926c ["CALL", null, ["callee:00c57f60:8"]]
- 00a99208 ["COPY", "tmp:0:8", ["const:758:8"]]
- 00a99208 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a99208 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a99208 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a99278 ["COPY", "tmp:0:8", ["const:828:8"]]
+ 00a99278 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99278 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99278 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-00a513c6580f19a02bfe51fbf58d025b"></a>

### [`00a992f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a992f0.md) → [`00a99360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99360.md) FUN_00a99360

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
      "definition_site": "00a99384",
      "incomplete_value": false,
      "site": "00a99384",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a99314",
      "incomplete_value": false,
      "site": "00a99314",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
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
      "00a99384",
      "DATA",
      [
        "storage",
        "00c8c7e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a99384",
      "DATA",
      [
        "storage",
        "00c8c8b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a99304 ["INT_ADD", "register:40f0:8", ["const:a99304:8", "const:4:8"]]
- 00a99304 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a99374 ["INT_ADD", "register:40f0:8", ["const:a99374:8", "const:4:8"]]
+ 00a99374 ["CALL", null, ["callee:00c57f60:8"]]
- 00a99310 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 00a99310 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a99310 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a99310 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a99380 ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 00a99380 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99380 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99380 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b7e52e742ee6df538dfcf2177ff54854"></a>

### [`00a99340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a99340.md) → [`00a993b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a993b0.md) FUN_00a993b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0074423c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/0074423c.md) [`008001cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/008001cc.md) [`008001dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/008001dc.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00744294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744294.md) [`00800224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800224.md) [`00800234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800234.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a993d8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a99368",
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
      "site": "00a993e4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a99374",
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
      "00a993d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a993e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a99454",
      "DATA",
      [
        "storage",
        "0038f284",
        "fde_0038f284",
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "00a993d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a993e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a99454",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[59]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a99368 ["INT_ADD", "register:40f0:8", ["const:a99368:8", "const:4:8"]]
- 00a99368 ["CALL", null, ["ram:47acf4:8"]]
+ 00a993d8 ["INT_ADD", "register:40f0:8", ["const:a993d8:8", "const:4:8"]]
+ 00a993d8 ["CALL", null, ["ram:47ad34:8"]]
- 00a99374 ["INT_ADD", "register:40f0:8", ["const:a99374:8", "const:4:8"]]
- 00a99374 ["CALL", null, ["ram:47acf4:8"]]
+ 00a993e4 ["INT_ADD", "register:40f0:8", ["const:a993e4:8", "const:4:8"]]
+ 00a993e4 ["CALL", null, ["ram:47ad34:8"]]
- 00a993c0 ["INT_ADD", "register:40f0:8", ["const:a993c0:8", "const:4:8"]]
- 00a993c0 ["CALL", null, ["callee:00744294:8"]]
+ 00a99430 ["INT_ADD", "register:40f0:8", ["const:a99430:8", "const:4:8"]]
+ 00a99430 ["CALL", null, ["callee:00744294:8"]]
~~~


<a id="compare-d2a4848b3be8459039ad1d5449defb9a"></a>

### [`00a9944c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a9944c.md) → [`00a994bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a994bc.md) FUN_00a994bc

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
      "definition_site": "00a994dc",
      "incomplete_value": false,
      "site": "00a994e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9946c",
      "incomplete_value": false,
      "site": "00a99470",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:868:8"
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
      "00a994e0",
      "DATA",
      [
        "storage",
        "00c8c868",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a994e0",
      "DATA",
      [
        "storage",
        "00c8c938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a99460 ["INT_ADD", "register:40f0:8", ["const:a99460:8", "const:4:8"]]
- 00a99460 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a994d0 ["INT_ADD", "register:40f0:8", ["const:a994d0:8", "const:4:8"]]
+ 00a994d0 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9946c ["COPY", "tmp:0:8", ["const:868:8"]]
- 00a9946c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9946c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9946c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a994dc ["COPY", "tmp:0:8", ["const:938:8"]]
+ 00a994dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a994dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a994dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3356db26d5ede925785d5a5e55521e9c"></a>

### [`00a994a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a994a4.md) → [`00a99514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99514.md) FUN_00a99514

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 23件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00489168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489168.md)
- 新版 呼出元 0件  · 呼出先 23件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`004891a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/004891a8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 48.09% / 新版 48.09%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 3件, `store_value` 1件, `unresolved_branch_alignment` 34件, `unresolved_call_alignment` 44件, `unresolved_store_alignment` 51件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a996d8",
      "incomplete_value": false,
      "site": "00a996e4",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a99668",
      "incomplete_value": false,
      "site": "00a99674",
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
            "const:4a8:8"
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
      "site": "00a99550",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a994e0",
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
      "site": "00a9956c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a994fc",
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
      "00a99550",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a9956c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a995d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ]
  ],
  "added": [
    [
      "00a99550",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a9956c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a995d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a994e0 ["INT_ADD", "register:40f0:8", ["const:a994e0:8", "const:4:8"]]
- 00a994e0 ["CALL", null, ["ram:47acf4:8"]]
+ 00a99550 ["INT_ADD", "register:40f0:8", ["const:a99550:8", "const:4:8"]]
+ 00a99550 ["CALL", null, ["ram:47ad34:8"]]
- 00a994f0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00a994f0 ["CBRANCH", null, ["local:b109:8", "tmp:0:1"]]
+ 00a99560 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00a99560 ["CBRANCH", null, ["local:b108:8", "tmp:0:1"]]
- 00a994fc ["INT_ADD", "register:40f0:8", ["const:a994fc:8", "const:4:8"]]
- 00a994fc ["CALL", null, ["ram:47acf4:8"]]
+ 00a9956c ["INT_ADD", "register:40f0:8", ["const:a9956c:8", "const:4:8"]]
+ 00a9956c ["CALL", null, ["ram:47ad34:8"]]
~~~


