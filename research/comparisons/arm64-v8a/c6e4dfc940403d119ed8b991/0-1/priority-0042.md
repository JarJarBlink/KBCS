# v16.0.1 → v16.0.2 · 最優先の変更候補 (42)

[一覧の目次](README.md)

<a id="compare-6106f763f084985bce91f30c200bba12"></a>

### [`007dd7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007dd/007dd7a0.md) → [`007dd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd7f8.md) FUN_007dd7f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 31件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 31件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

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
    "old": {
      "definition_site": "007dd8d8",
      "incomplete_value": true,
      "site": "007dd8e8",
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
                "const:428:8"
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
    "old": {
      "definition_site": "007dd8dc",
      "incomplete_value": true,
      "site": "007dd8ec",
      "value": [
        "LOAD",
        "8",
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
    "old": {
      "definition_site": "007dd8e0",
      "incomplete_value": true,
      "site": "007dd8f0",
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
      "007dd848",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007dd854",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007dd85c",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007dd848",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007dd854",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007dd85c",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007dd80c ["INT_ADD", "register:40f0:8", ["const:7dd80c:8", "const:4:8"]]
- 007dd80c ["CALL", null, ["callee:00c586e0:8"]]
+ 007dd864 ["INT_ADD", "register:40f0:8", ["const:7dd864:8", "const:4:8"]]
+ 007dd864 ["CALL", null, ["callee:00c586e0:8"]]
- 007dd894 ["INT_ADD", "register:40f0:8", ["const:7dd894:8", "const:4:8"]]
- 007dd894 ["CALL", null, ["callee:00800244:8"]]
+ 007dd8ec ["INT_ADD", "register:40f0:8", ["const:7dd8ec:8", "const:4:8"]]
+ 007dd8ec ["CALL", null, ["callee:00800244:8"]]
- 007dd930 ["INT_ADD", "register:40f0:8", ["const:7dd930:8", "const:4:8"]]
- 007dd930 ["CALL", null, ["callee:0047e91c:8"]]
+ 007dd988 ["INT_ADD", "register:40f0:8", ["const:7dd988:8", "const:4:8"]]
+ 007dd988 ["CALL", null, ["callee:0047e91c:8"]]
~~~


<a id="compare-01cb2d0a0925aab965440516499becfc"></a>

### [`007efca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efca8.md) → [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) FUN_007efd00

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 2件 [`007fceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fceec.md) [`007fcfdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcfdc.md) · 呼出先 33件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`005e48ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e48ac.md) [`005e4b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e4b88.md) [`005e4ee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e4ee4.md) [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md)
- 新版 呼出元 2件 [`007fcf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcf44.md) [`007fd034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd034.md) · 呼出先 33件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005e48ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e48ec.md) [`005e4bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4bc8.md) [`005e4f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4f24.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md)

変更の種類 comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `store_value` 7件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007efdd4",
      "incomplete_value": false,
      "site": "007efddc",
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
    "old": {
      "definition_site": "007efd7c",
      "incomplete_value": false,
      "site": "007efd84",
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
            "const:af4:8"
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
      "definition_site": "007efdfc",
      "incomplete_value": false,
      "site": "007efe08",
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
    "old": {
      "definition_site": "007efda4",
      "incomplete_value": false,
      "site": "007efdb0",
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
            "const:56e:8"
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
      "definition_site": "007efe34",
      "incomplete_value": false,
      "site": "007efe38",
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
    "old": {
      "definition_site": "007efddc",
      "incomplete_value": false,
      "site": "007efde0",
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
            "const:e48:8"
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
      "007efd70",
      "DATA",
      [
        "storage",
        "003870a0",
        null,
        "byte[23]"
      ]
    ],
    [
      "007efda0",
      "DATA",
      [
        "storage",
        "003870a0",
        null,
        "byte[23]"
      ]
    ],
    [
      "007efddc",
      "DATA",
      [
        "storage",
        "002aeaf4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007efd70",
      "DATA",
      [
        "storage",
        "003870a0",
        "fde_003870a0",
        "dword"
      ]
    ],
    [
      "007efda0",
      "DATA",
      [
        "storage",
        "003870a0",
        "fde_003870a0",
        "dword"
      ]
    ],
    [
      "007efddc",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007efd2c ["INT_ADD", "register:40f0:8", ["const:7efd2c:8", "const:4:8"]]
- 007efd2c ["CALL", null, ["callee:00802f38:8"]]
+ 007efd84 ["INT_ADD", "register:40f0:8", ["const:7efd84:8", "const:4:8"]]
+ 007efd84 ["CALL", null, ["callee:00802f38:8"]]
- 007efddc ["COPY", "tmp:0:8", ["const:e48:8"]]
- 007efddc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007efddc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007efddc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007efe34 ["COPY", "tmp:0:8", ["const:e79:8"]]
+ 007efe34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007efe34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007efe34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007eff54 ["INT_ADD", "register:40f0:8", ["const:7eff54:8", "const:4:8"]]
- 007eff54 ["CALL", null, ["callee:00c5a910:8"]]
+ 007effac ["INT_ADD", "register:40f0:8", ["const:7effac:8", "const:4:8"]]
+ 007effac ["CALL", null, ["callee:00c5a910:8"]]
~~~


<a id="compare-a30dffdee40309b0ea16aa4691bf1830"></a>

### [`007f0574`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f0574.md) → [`007f05cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f05cc.md) FUN_007f05cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007caac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ca/007caac8.md) · 呼出先 7件 [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`00a46784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46784.md) [`00a46cc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46cc8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`007cab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007cab20.md) · 呼出先 7件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00a467d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a467d8.md) [`00a46d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46d1c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.29% / 新版 95.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f0680",
      "incomplete_value": false,
      "site": "007f0684",
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
      "definition_site": "007f0628",
      "incomplete_value": false,
      "site": "007f062c",
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
      "007f0644",
      "READ",
      [
        "storage",
        "00c9b368",
        null,
        "pointer"
      ]
    ],
    [
      "007f0658",
      "DATA",
      [
        "storage",
        "00c8b758",
        null,
        "undefined *"
      ]
    ],
    [
      "007f0684",
      "DATA",
      [
        "storage",
        "00c8b7b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f0644",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "007f0658",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ],
    [
      "007f0684",
      "DATA",
      [
        "storage",
        "00c8b880",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f0684 ["COPY", "register:0:8", ["register:4040:8"]]
- 007f0684 ["INT_ADD", "register:40f0:8", ["const:7f0684:8", "const:4:8"]]
- 007f0684 ["CALLIND", null, ["register:0:8"]]
+ 007f06dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 007f06dc ["INT_ADD", "register:40f0:8", ["const:7f06dc:8", "const:4:8"]]
+ 007f06dc ["CALLIND", null, ["register:0:8"]]
- 007f05c8 ["INT_ADD", "register:40f0:8", ["const:7f05c8:8", "const:4:8"]]
- 007f05c8 ["CALL", null, ["callee:00a46d1c:8"]]
+ 007f0620 ["INT_ADD", "register:40f0:8", ["const:7f0620:8", "const:4:8"]]
+ 007f0620 ["CALL", null, ["callee:00a46d1c:8"]]
- 007f05dc ["INT_ADD", "register:40f0:8", ["const:7f05dc:8", "const:4:8"]]
- 007f05dc ["CALL", null, ["callee:00a467d8:8"]]
+ 007f0634 ["INT_ADD", "register:40f0:8", ["const:7f0634:8", "const:4:8"]]
+ 007f0634 ["CALL", null, ["callee:00a467d8:8"]]
~~~


<a id="compare-19dcdbe2b2a3fe81c006cbe28b74c189"></a>

### [`007f06f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f06f4.md) → [`007f074c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f074c.md) FUN_007f074c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007f0c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f0c74.md) · 呼出先 10件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`00672748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00672/00672748.md) [`0067e5e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e5e8.md) [`00682324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682324.md)
- 新版 呼出元 1件 [`007f0ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0ccc.md) · 呼出先 10件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) [`0067e628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e628.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.30% / 新版 98.30%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f0768",
      "incomplete_value": false,
      "site": "007f076c",
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
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f0710",
      "incomplete_value": false,
      "site": "007f0714",
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
            "const:b98:8"
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
      "definition_site": "007f0c48",
      "incomplete_value": false,
      "site": "007f0c4c",
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
      "definition_site": "007f0bf0",
      "incomplete_value": false,
      "site": "007f0bf4",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f0c84",
      "incomplete_value": false,
      "site": "007f0c88",
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
      "definition_site": "007f0c2c",
      "incomplete_value": false,
      "site": "007f0c30",
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
      "007f076c",
      "DATA",
      [
        "storage",
        "00c7ab98",
        null,
        "pointer"
      ]
    ],
    [
      "007f0c4c",
      "DATA",
      [
        "storage",
        "00c78330",
        null,
        "pointer"
      ]
    ],
    [
      "007f0c88",
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
      "007f076c",
      "DATA",
      [
        "storage",
        "00c7ac68",
        null,
        "pointer"
      ]
    ],
    [
      "007f0c4c",
      "DATA",
      [
        "storage",
        "00c78400",
        null,
        "pointer"
      ]
    ],
    [
      "007f0c88",
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
- 007f0710 ["COPY", "tmp:0:8", ["const:b98:8"]]
- 007f0710 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f0710 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f0710 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f0768 ["COPY", "tmp:0:8", ["const:c68:8"]]
+ 007f0768 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f0768 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f0768 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007f0724 ["INT_ADD", "register:40f0:8", ["const:7f0724:8", "const:4:8"]]
- 007f0724 ["CALL", null, ["callee:00c53da0:8"]]
+ 007f077c ["INT_ADD", "register:40f0:8", ["const:7f077c:8", "const:4:8"]]
+ 007f077c ["CALL", null, ["callee:00c53da0:8"]]
- 007f0738 ["COPY", "register:0:8", ["register:4040:8"]]
- 007f0738 ["INT_ADD", "register:40f0:8", ["const:7f0738:8", "const:4:8"]]
- 007f0738 ["CALLIND", null, ["register:0:8"]]
+ 007f0790 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007f0790 ["INT_ADD", "register:40f0:8", ["const:7f0790:8", "const:4:8"]]
+ 007f0790 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-467221c112b6f7d7eda87f4a3acc0001"></a>

### [`007f0dd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f0dd4.md) → [`007f0e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0e2c.md) FUN_007f0e2c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007f0c98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f0c98.md) [`007f0dd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f0dd4.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`007f0cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0cf0.md) [`007f0e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0e2c.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.83% / 新版 98.83%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "007f0f38",
      "incomplete_value": false,
      "site": "007f0f40",
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
      "definition_site": "007f0fb4",
      "incomplete_value": false,
      "site": "007f0fc0",
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
      "definition_site": "007f0f5c",
      "incomplete_value": false,
      "site": "007f0f68",
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
    "old": {
      "definition_site": "007f1090",
      "incomplete_value": false,
      "site": "007f1098",
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
      "007f0f90",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "007f0fb4",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "007f10e8",
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
      "007f0f90",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "007f0fb4",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "007f10e8",
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
- 007f0f40 ["INT_ADD", "register:40f0:8", ["const:7f0f40:8", "const:4:8"]]
- 007f0f40 ["CALL", null, ["callee:00441ed4:8"]]
+ 007f0f98 ["INT_ADD", "register:40f0:8", ["const:7f0f98:8", "const:4:8"]]
+ 007f0f98 ["CALL", null, ["callee:00441ed4:8"]]
- 007f0f68 ["INT_ADD", "register:40f0:8", ["const:7f0f68:8", "const:4:8"]]
- 007f0f68 ["CALL", null, ["callee:00442834:8"]]
+ 007f0fc0 ["INT_ADD", "register:40f0:8", ["const:7f0fc0:8", "const:4:8"]]
+ 007f0fc0 ["CALL", null, ["callee:00442834:8"]]
- 007f1098 ["INT_ADD", "register:40f0:8", ["const:7f1098:8", "const:4:8"]]
- 007f1098 ["CALL", null, ["callee:00441ed4:8"]]
+ 007f10f0 ["INT_ADD", "register:40f0:8", ["const:7f10f0:8", "const:4:8"]]
+ 007f10f0 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-1122b1792ee2fe5654db700db31734c2"></a>

### [`007f1e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1e90.md) → [`007f1ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1ee8.md) FUN_007f1ee8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007f1894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1894.md) [`009012d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/009012d8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`007f18ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f18ec.md) [`0090132c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/0090132c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "007f1e9c",
      "incomplete_value": false,
      "site": "007f1ea0",
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
      "007f1ef4",
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
      "007f1ef4",
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
- 007f1ea0 ["INT_ADD", "register:40f0:8", ["const:7f1ea0:8", "const:4:8"]]
- 007f1ea0 ["CALL", null, ["callee:0043b7b8:8"]]
+ 007f1ef8 ["INT_ADD", "register:40f0:8", ["const:7f1ef8:8", "const:4:8"]]
+ 007f1ef8 ["CALL", null, ["callee:0043b7b8:8"]]
- 007f1e9c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 007f1e9c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007f1e9c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007f1e9c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007f1ef4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 007f1ef4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007f1ef4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007f1ef4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-fe7057dd3a3cbd0cc5fecf9249d66291"></a>

### [`007f1ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1ea4.md) → [`007f1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1efc.md) FUN_007f1efc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`0080eef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0080e/0080eef0.md) [`00810888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00810/00810888.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 3件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`0080ef48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080ef48.md) [`008108e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/008108e0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "007f1eb0",
      "incomplete_value": false,
      "site": "007f1eb4",
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
      "007f1f08",
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
      "007f1f08",
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
- 007f1eb4 ["INT_ADD", "register:40f0:8", ["const:7f1eb4:8", "const:4:8"]]
- 007f1eb4 ["CALL", null, ["callee:0043b7b8:8"]]
+ 007f1f0c ["INT_ADD", "register:40f0:8", ["const:7f1f0c:8", "const:4:8"]]
+ 007f1f0c ["CALL", null, ["callee:0043b7b8:8"]]
- 007f1eb0 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 007f1eb0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007f1eb0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007f1eb0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007f1f08 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 007f1f08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007f1f08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007f1f08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ad9a59fb310f94887967fc6c5568425a"></a>

### [`007f1ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1ed0.md) → [`007f1f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1f28.md) FUN_007f1f28

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
      "definition_site": "007f1f3c",
      "incomplete_value": false,
      "site": "007f1f40",
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
            "const:c88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f1ee4",
      "incomplete_value": false,
      "site": "007f1ee8",
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
            "const:bb8:8"
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
      "007f1f40",
      "DATA",
      [
        "storage",
        "00c7abb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f1f40",
      "DATA",
      [
        "storage",
        "00c7ac88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f1edc ["INT_ADD", "register:40f0:8", ["const:7f1edc:8", "const:4:8"]]
- 007f1edc ["CALL", null, ["callee:00c57f60:8"]]
+ 007f1f34 ["INT_ADD", "register:40f0:8", ["const:7f1f34:8", "const:4:8"]]
+ 007f1f34 ["CALL", null, ["callee:00c57f60:8"]]
- 007f1ee4 ["COPY", "tmp:0:8", ["const:bb8:8"]]
- 007f1ee4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f1ee4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f1ee4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f1f3c ["COPY", "tmp:0:8", ["const:c88:8"]]
+ 007f1f3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f1f3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f1f3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-716a85483bcc8efeee7acb299e8c1f50"></a>

### [`007f1f0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1f0c.md) → [`007f1f64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1f64.md) FUN_007f1f64

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 16件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043e828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e828.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md)
- 新版 呼出元 0件  · 呼出先 16件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.38% / 新版 94.38%

優先判定に残った影響 `call_target` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f2050",
      "incomplete_value": true,
      "site": "007f2064",
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
                "const:f5a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f1ff8",
      "incomplete_value": true,
      "site": "007f200c",
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
                "const:f2b:8"
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
      "definition_site": "007f2068",
      "incomplete_value": true,
      "site": "007f2068",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "007f2010",
      "incomplete_value": true,
      "site": "007f2010",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f2130",
      "incomplete_value": false,
      "site": "007f2130",
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
    "old": {
      "definition_site": "007f20d8",
      "incomplete_value": false,
      "site": "007f20d8",
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
            "const:c28:8"
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
      "007f1f9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f1fb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f2000",
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
      "007f1f9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f1fb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f2000",
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
- 007f1f44 ["INT_ADD", "register:40f0:8", ["const:7f1f44:8", "const:4:8"]]
- 007f1f44 ["CALL", null, ["ram:47acf4:8"]]
+ 007f1f9c ["INT_ADD", "register:40f0:8", ["const:7f1f9c:8", "const:4:8"]]
+ 007f1f9c ["CALL", null, ["ram:47ad34:8"]]
- 007f1f60 ["INT_ADD", "register:40f0:8", ["const:7f1f60:8", "const:4:8"]]
- 007f1f60 ["CALL", null, ["ram:47acf4:8"]]
+ 007f1fb8 ["INT_ADD", "register:40f0:8", ["const:7f1fb8:8", "const:4:8"]]
+ 007f1fb8 ["CALL", null, ["ram:47ad34:8"]]
- 007f1f9c ["INT_ADD", "register:40f0:8", ["const:7f1f9c:8", "const:4:8"]]
- 007f1f9c ["CALL", null, ["callee:00851550:8"]]
+ 007f1ff4 ["INT_ADD", "register:40f0:8", ["const:7f1ff4:8", "const:4:8"]]
+ 007f1ff4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-f0e222af083ef0e53efd0160c342fb6f"></a>

### [`007f2338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f2338.md) → [`007f2390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2390.md) FUN_007f2390

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
    "old": {
      "definition_site": "007f234c",
      "incomplete_value": false,
      "site": "007f2350",
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
            "const:c28:8"
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
      "007f23a8",
      "DATA",
      [
        "storage",
        "00c7ac28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f23a8",
      "DATA",
      [
        "storage",
        "00c7acf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2344 ["INT_ADD", "register:40f0:8", ["const:7f2344:8", "const:4:8"]]
- 007f2344 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f239c ["INT_ADD", "register:40f0:8", ["const:7f239c:8", "const:4:8"]]
+ 007f239c ["CALL", null, ["callee:00c57f60:8"]]
- 007f234c ["COPY", "tmp:0:8", ["const:c28:8"]]
- 007f234c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f234c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f234c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f23a4 ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 007f23a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f23a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f23a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f22558dd0e30fbbfb579235b963f68e8"></a>

### [`007f235c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f235c.md) → [`007f23b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f23b4.md) FUN_007f23b4

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
    "old": {
      "definition_site": "007f2360",
      "incomplete_value": false,
      "site": "007f2364",
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
            "const:c28:8"
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
      "007f23bc",
      "DATA",
      [
        "storage",
        "00c7ac28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f23bc",
      "DATA",
      [
        "storage",
        "00c7acf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2360 ["COPY", "tmp:0:8", ["const:c28:8"]]
- 007f2360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f2360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f2360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f23b8 ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 007f23b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f23b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f23b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6b0770ed47e665839a137605e9f85a77"></a>

### [`007f2374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f2374.md) → [`007f23cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f23cc.md) FUN_007f23cc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 17件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.16% / 新版 94.16%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f2494",
      "incomplete_value": true,
      "site": "007f24a4",
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
                "const:2a0000:8"
              ],
              [
                "leaf",
                "const:383:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f243c",
      "incomplete_value": true,
      "site": "007f244c",
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
                "const:2a0000:8"
              ],
              [
                "leaf",
                "const:3d0:8"
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
      "definition_site": "007f24a8",
      "incomplete_value": true,
      "site": "007f24a8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "007f2450",
      "incomplete_value": true,
      "site": "007f2450",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f2514",
      "incomplete_value": true,
      "site": "007f2524",
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
                "const:2a0000:8"
              ],
              [
                "leaf",
                "const:383:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f24bc",
      "incomplete_value": true,
      "site": "007f24cc",
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
                "const:2a0000:8"
              ],
              [
                "leaf",
                "const:3d0:8"
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
      "007f2418",
      "DATA",
      [
        "storage",
        "0038f284",
        "fde_0038f284",
        "dword"
      ]
    ],
    [
      "007f2474",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f2494",
      "READ",
      [
        "storage",
        "002a03d0",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007f2418",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[59]"
      ]
    ],
    [
      "007f2474",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f2494",
      "READ",
      [
        "storage",
        "002a0383",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f23c4 ["INT_ADD", "register:40f0:8", ["const:7f23c4:8", "const:4:8"]]
- 007f23c4 ["CALL", null, ["callee:00800224:8"]]
+ 007f241c ["INT_ADD", "register:40f0:8", ["const:7f241c:8", "const:4:8"]]
+ 007f241c ["CALL", null, ["callee:00800224:8"]]
- 007f241c ["INT_ADD", "register:40f0:8", ["const:7f241c:8", "const:4:8"]]
- 007f241c ["CALL", null, ["ram:47acf4:8"]]
+ 007f2474 ["INT_ADD", "register:40f0:8", ["const:7f2474:8", "const:4:8"]]
+ 007f2474 ["CALL", null, ["ram:47ad34:8"]]
- 007f2478 ["INT_ADD", "register:40f0:8", ["const:7f2478:8", "const:4:8"]]
- 007f2478 ["CALL", null, ["callee:00597668:8"]]
+ 007f24d0 ["INT_ADD", "register:40f0:8", ["const:7f24d0:8", "const:4:8"]]
+ 007f24d0 ["CALL", null, ["callee:00597668:8"]]
~~~


<a id="compare-652807b8506b7f9ed515bb9e80c607a6"></a>

### [`007f2930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f2930.md) → [`007f2988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2988.md) FUN_007f2988

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
    "old": {
      "definition_site": "007f2944",
      "incomplete_value": false,
      "site": "007f2948",
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
            "const:cb8:8"
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
      "007f29a0",
      "DATA",
      [
        "storage",
        "00c7acb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f29a0",
      "DATA",
      [
        "storage",
        "00c7ad88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f293c ["INT_ADD", "register:40f0:8", ["const:7f293c:8", "const:4:8"]]
- 007f293c ["CALL", null, ["callee:00c57f60:8"]]
+ 007f2994 ["INT_ADD", "register:40f0:8", ["const:7f2994:8", "const:4:8"]]
+ 007f2994 ["CALL", null, ["callee:00c57f60:8"]]
- 007f2944 ["COPY", "tmp:0:8", ["const:cb8:8"]]
- 007f2944 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f2944 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f2944 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f299c ["COPY", "tmp:0:8", ["const:d88:8"]]
+ 007f299c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f299c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f299c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-97dd2ecc99a4cab42d09ee10b86057d5"></a>

### [`007f296c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f296c.md) → [`007f29c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f29c4.md) FUN_007f29c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`007df024`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df024.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`007df07c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df07c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

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
      "site": "007f29e4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f298c",
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
      "site": "007f29f0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f2998",
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
      "007f29e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f29f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f29e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f29f0",
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
- 007f298c ["INT_ADD", "register:40f0:8", ["const:7f298c:8", "const:4:8"]]
- 007f298c ["CALL", null, ["ram:47acf4:8"]]
+ 007f29e4 ["INT_ADD", "register:40f0:8", ["const:7f29e4:8", "const:4:8"]]
+ 007f29e4 ["CALL", null, ["ram:47ad34:8"]]
- 007f2998 ["INT_ADD", "register:40f0:8", ["const:7f2998:8", "const:4:8"]]
- 007f2998 ["CALL", null, ["ram:47acf4:8"]]
+ 007f29f0 ["INT_ADD", "register:40f0:8", ["const:7f29f0:8", "const:4:8"]]
+ 007f29f0 ["CALL", null, ["ram:47ad34:8"]]
- 007f29ac ["INT_ADD", "register:40f0:8", ["const:7f29ac:8", "const:4:8"]]
- 007f29ac ["CALL", null, ["callee:00851550:8"]]
+ 007f2a04 ["INT_ADD", "register:40f0:8", ["const:7f2a04:8", "const:4:8"]]
+ 007f2a04 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-d25127ecbec3d106e201d128397a240d"></a>

### [`007f2a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f2a10.md) → [`007f2a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2a68.md) FUN_007f2a68

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
      "definition_site": "007f2a8c",
      "incomplete_value": false,
      "site": "007f2a8c",
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
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f2a34",
      "incomplete_value": false,
      "site": "007f2a34",
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
            "const:d38:8"
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
      "007f2a8c",
      "DATA",
      [
        "storage",
        "00c7ad38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f2a8c",
      "DATA",
      [
        "storage",
        "00c7ae08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2a24 ["INT_ADD", "register:40f0:8", ["const:7f2a24:8", "const:4:8"]]
- 007f2a24 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f2a7c ["INT_ADD", "register:40f0:8", ["const:7f2a7c:8", "const:4:8"]]
+ 007f2a7c ["CALL", null, ["callee:00c57f60:8"]]
- 007f2a30 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 007f2a30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f2a30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f2a30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f2a88 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 007f2a88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f2a88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f2a88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ce04bfdd1d72435f77be5ee78404ed5b"></a>

### [`007f2a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f2a60.md) → [`007f2ab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2ab8.md) FUN_007f2ab8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 13件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.50% / 新版 93.50%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f2bbc",
      "incomplete_value": false,
      "site": "007f2bbc",
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
    "old": {
      "definition_site": "007f2b64",
      "incomplete_value": false,
      "site": "007f2b64",
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
            "const:da8:8"
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
      "site": "007f2af0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f2a98",
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
      "site": "007f2b0c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f2ab4",
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
      "007f2af0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f2b0c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f2b48",
      "READ",
      [
        "storage",
        "002a7d01",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007f2af0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f2b0c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f2b48",
      "READ",
      [
        "storage",
        "002a7ca5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2a98 ["INT_ADD", "register:40f0:8", ["const:7f2a98:8", "const:4:8"]]
- 007f2a98 ["CALL", null, ["ram:47acf4:8"]]
+ 007f2af0 ["INT_ADD", "register:40f0:8", ["const:7f2af0:8", "const:4:8"]]
+ 007f2af0 ["CALL", null, ["ram:47ad34:8"]]
- 007f2ab4 ["INT_ADD", "register:40f0:8", ["const:7f2ab4:8", "const:4:8"]]
- 007f2ab4 ["CALL", null, ["ram:47acf4:8"]]
+ 007f2b0c ["INT_ADD", "register:40f0:8", ["const:7f2b0c:8", "const:4:8"]]
+ 007f2b0c ["CALL", null, ["ram:47ad34:8"]]
- 007f2c44 ["INT_ADD", "register:40f0:8", ["const:7f2c44:8", "const:4:8"]]
- 007f2c44 ["CALL", null, ["callee:00442970:8"]]
+ 007f2c9c ["INT_ADD", "register:40f0:8", ["const:7f2c9c:8", "const:4:8"]]
+ 007f2c9c ["CALL", null, ["callee:00442970:8"]]
~~~


<a id="compare-840f9ab3964d9c9df39563509dab4594"></a>

### [`007f2d30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f2d30.md) → [`007f2d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2d88.md) FUN_007f2d88

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
      "definition_site": "007f2d9c",
      "incomplete_value": false,
      "site": "007f2da0",
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
    "old": {
      "definition_site": "007f2d44",
      "incomplete_value": false,
      "site": "007f2d48",
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
            "const:da8:8"
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
      "007f2da0",
      "DATA",
      [
        "storage",
        "00c7ada8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f2da0",
      "DATA",
      [
        "storage",
        "00c7ae78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2d3c ["INT_ADD", "register:40f0:8", ["const:7f2d3c:8", "const:4:8"]]
- 007f2d3c ["CALL", null, ["callee:00c57f60:8"]]
+ 007f2d94 ["INT_ADD", "register:40f0:8", ["const:7f2d94:8", "const:4:8"]]
+ 007f2d94 ["CALL", null, ["callee:00c57f60:8"]]
- 007f2d44 ["COPY", "tmp:0:8", ["const:da8:8"]]
- 007f2d44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f2d44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f2d44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f2d9c ["COPY", "tmp:0:8", ["const:e78:8"]]
+ 007f2d9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f2d9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f2d9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f3d4a8f6648b4ac28c6b9003538ac901"></a>

### [`007f2d54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f2d54.md) → [`007f2dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2dac.md) FUN_007f2dac

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
    "old": {
      "definition_site": "007f2d58",
      "incomplete_value": false,
      "site": "007f2d5c",
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
            "const:da8:8"
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
      "007f2db4",
      "DATA",
      [
        "storage",
        "00c7ada8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f2db4",
      "DATA",
      [
        "storage",
        "00c7ae78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2d58 ["COPY", "tmp:0:8", ["const:da8:8"]]
- 007f2d58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f2d58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f2d58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f2db0 ["COPY", "tmp:0:8", ["const:e78:8"]]
+ 007f2db0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f2db0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f2db0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0330557e69c358d07f7b33d9b861b81b"></a>

### [`007f2d6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f2d6c.md) → [`007f2dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2dc4.md) FUN_007f2dc4

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
      "site": "007f2de8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f2d90",
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
      "007f2de8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f2de8",
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
- 007f2d90 ["INT_ADD", "register:40f0:8", ["const:7f2d90:8", "const:4:8"]]
- 007f2d90 ["CALL", null, ["ram:47acf4:8"]]
+ 007f2de8 ["INT_ADD", "register:40f0:8", ["const:7f2de8:8", "const:4:8"]]
+ 007f2de8 ["CALL", null, ["ram:47ad34:8"]]
- 007f2d9c ["INT_ADD", "register:40f0:8", ["const:7f2d9c:8", "const:4:8"]]
- 007f2d9c ["CALL", null, ["callee:0047ce14:8"]]
+ 007f2df4 ["INT_ADD", "register:40f0:8", ["const:7f2df4:8", "const:4:8"]]
+ 007f2df4 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-c095d8dff192da1b5d94ae9a4526aa2d"></a>

### [`007f2de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f2de0.md) → [`007f2e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2e38.md) FUN_007f2e38

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
      "definition_site": "007f2e5c",
      "incomplete_value": false,
      "site": "007f2e5c",
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
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f2e04",
      "incomplete_value": false,
      "site": "007f2e04",
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
            "const:e38:8"
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
      "007f2e5c",
      "DATA",
      [
        "storage",
        "00c7ae38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f2e5c",
      "DATA",
      [
        "storage",
        "00c7af08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f2df4 ["INT_ADD", "register:40f0:8", ["const:7f2df4:8", "const:4:8"]]
- 007f2df4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f2e4c ["INT_ADD", "register:40f0:8", ["const:7f2e4c:8", "const:4:8"]]
+ 007f2e4c ["CALL", null, ["callee:00c57f60:8"]]
- 007f2e00 ["COPY", "tmp:0:8", ["const:e38:8"]]
- 007f2e00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f2e00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f2e00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f2e58 ["COPY", "tmp:0:8", ["const:f08:8"]]
+ 007f2e58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f2e58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f2e58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1cd130a3db0f41709e5810e570590493"></a>

### [`007f2e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f2e30.md) → [`007f2e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f2e88.md) FUN_007f2e88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`008b6f50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f50.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`008b6fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.10% / 新版 98.10%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f2f4c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f2ef4",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "007f2f68",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f2f10",
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
      "007f2f4c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f2f68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f2f4c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f2f68",
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
- 007f2eb8 ["INT_ADD", "register:40f0:8", ["const:7f2eb8:8", "const:4:8"]]
- 007f2eb8 ["CALL", null, ["callee:008b6efc:8"]]
+ 007f2f10 ["INT_ADD", "register:40f0:8", ["const:7f2f10:8", "const:4:8"]]
+ 007f2f10 ["CALL", null, ["callee:008b6efc:8"]]
- 007f2ef4 ["INT_ADD", "register:40f0:8", ["const:7f2ef4:8", "const:4:8"]]
- 007f2ef4 ["CALL", null, ["ram:47acf4:8"]]
+ 007f2f4c ["INT_ADD", "register:40f0:8", ["const:7f2f4c:8", "const:4:8"]]
+ 007f2f4c ["CALL", null, ["ram:47ad34:8"]]
- 007f2f10 ["INT_ADD", "register:40f0:8", ["const:7f2f10:8", "const:4:8"]]
- 007f2f10 ["CALL", null, ["ram:47acf4:8"]]
+ 007f2f68 ["INT_ADD", "register:40f0:8", ["const:7f2f68:8", "const:4:8"]]
+ 007f2f68 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-748f7869e896357c15abc0cacc02507d"></a>

### [`007f3000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3000.md) → [`007f3058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3058.md) FUN_007f3058

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
      "definition_site": "007f307c",
      "incomplete_value": false,
      "site": "007f307c",
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
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f3024",
      "incomplete_value": false,
      "site": "007f3024",
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
            "const:eb8:8"
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
      "007f307c",
      "DATA",
      [
        "storage",
        "00c7aeb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f307c",
      "DATA",
      [
        "storage",
        "00c7af88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3014 ["INT_ADD", "register:40f0:8", ["const:7f3014:8", "const:4:8"]]
- 007f3014 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f306c ["INT_ADD", "register:40f0:8", ["const:7f306c:8", "const:4:8"]]
+ 007f306c ["CALL", null, ["callee:00c57f60:8"]]
- 007f3020 ["COPY", "tmp:0:8", ["const:eb8:8"]]
- 007f3020 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3020 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3020 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f3078 ["COPY", "tmp:0:8", ["const:f88:8"]]
+ 007f3078 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3078 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3078 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-01ec48b5f411b67854ee4f43eccaeb73"></a>

### [`007f3050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3050.md) → [`007f30a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f30a8.md) FUN_007f30a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00674724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00674/00674724.md) [`00675b40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00675/00675b40.md) [`008b6f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f18.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00674764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00674/00674764.md) [`00675b80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00675/00675b80.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.04% / 新版 98.04%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f30e8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f3090",
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
      "site": "007f3104",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f30ac",
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
      "007f30e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f3104",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f30e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f3104",
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
- 007f3090 ["INT_ADD", "register:40f0:8", ["const:7f3090:8", "const:4:8"]]
- 007f3090 ["CALL", null, ["ram:47acf4:8"]]
+ 007f30e8 ["INT_ADD", "register:40f0:8", ["const:7f30e8:8", "const:4:8"]]
+ 007f30e8 ["CALL", null, ["ram:47ad34:8"]]
- 007f30ac ["INT_ADD", "register:40f0:8", ["const:7f30ac:8", "const:4:8"]]
- 007f30ac ["CALL", null, ["ram:47acf4:8"]]
+ 007f3104 ["INT_ADD", "register:40f0:8", ["const:7f3104:8", "const:4:8"]]
+ 007f3104 ["CALL", null, ["ram:47ad34:8"]]
- 007f310c ["INT_ADD", "register:40f0:8", ["const:7f310c:8", "const:4:8"]]
- 007f310c ["CALL", null, ["callee:00675b80:8"]]
+ 007f3164 ["INT_ADD", "register:40f0:8", ["const:7f3164:8", "const:4:8"]]
+ 007f3164 ["CALL", null, ["callee:00675b80:8"]]
~~~


<a id="compare-337044d047d8d7bd00782d1ab7ca69e9"></a>

### [`007f3244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3244.md) → [`007f329c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f329c.md) FUN_007f329c

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
      "definition_site": "007f32c0",
      "incomplete_value": false,
      "site": "007f32c0",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f3268",
      "incomplete_value": false,
      "site": "007f3268",
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
            "const:f38:8"
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
      "007f32c0",
      "DATA",
      [
        "storage",
        "00c7af38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f32c0",
      "DATA",
      [
        "storage",
        "00c7b008",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3258 ["INT_ADD", "register:40f0:8", ["const:7f3258:8", "const:4:8"]]
- 007f3258 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f32b0 ["INT_ADD", "register:40f0:8", ["const:7f32b0:8", "const:4:8"]]
+ 007f32b0 ["CALL", null, ["callee:00c57f60:8"]]
- 007f3260 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007f32b8 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007f3264 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 007f3264 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3264 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3264 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f32bc ["COPY", "tmp:0:8", ["const:8:8"]]
+ 007f32bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f32bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f32bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2a00303ed8836787f4c45d646222541b"></a>

### [`007f3294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3294.md) → [`007f32ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f32ec.md) FUN_007f32ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce50.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`007f3518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3518.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f3570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3570.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.05% / 新版 95.05%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f33dc",
      "incomplete_value": false,
      "site": "007f33e4",
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
    "old": {
      "definition_site": "007f3384",
      "incomplete_value": false,
      "site": "007f338c",
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
            "const:fa8:8"
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
      "site": "007f3320",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f32c8",
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
      "007f3320",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f33b0",
      "READ",
      [
        "storage",
        "002b4baa",
        null,
        "string"
      ]
    ],
    [
      "007f33e4",
      "DATA",
      [
        "storage",
        "00c7afa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3320",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f33b0",
      "READ",
      [
        "storage",
        "002b4bdb",
        null,
        "string"
      ]
    ],
    [
      "007f33e4",
      "DATA",
      [
        "storage",
        "00c7b078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f32c8 ["INT_ADD", "register:40f0:8", ["const:7f32c8:8", "const:4:8"]]
- 007f32c8 ["CALL", null, ["ram:47acf4:8"]]
+ 007f3320 ["INT_ADD", "register:40f0:8", ["const:7f3320:8", "const:4:8"]]
+ 007f3320 ["CALL", null, ["ram:47ad34:8"]]
- 007f32fc ["INT_ADD", "register:40f0:8", ["const:7f32fc:8", "const:4:8"]]
- 007f32fc ["CALL", null, ["callee:0048ce90:8"]]
+ 007f3354 ["INT_ADD", "register:40f0:8", ["const:7f3354:8", "const:4:8"]]
+ 007f3354 ["CALL", null, ["callee:0048ce90:8"]]
- 007f3350 ["COPY", "tmp:0:8", ["const:baa:8"]]
- 007f3350 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f3350 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f3350 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f33a8 ["COPY", "tmp:0:8", ["const:bdb:8"]]
+ 007f33a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f33a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f33a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-14e6fe53bc7a3eed7644d2675d3b16e5"></a>

### [`007f34e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f34e4.md) → [`007f353c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f353c.md) FUN_007f353c

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
    "old": {
      "definition_site": "007f34f8",
      "incomplete_value": false,
      "site": "007f34fc",
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
      "007f3554",
      "DATA",
      [
        "storage",
        "00c7afa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3554",
      "DATA",
      [
        "storage",
        "00c7b078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f34f0 ["INT_ADD", "register:40f0:8", ["const:7f34f0:8", "const:4:8"]]
- 007f34f0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f3548 ["INT_ADD", "register:40f0:8", ["const:7f3548:8", "const:4:8"]]
+ 007f3548 ["CALL", null, ["callee:00c57f60:8"]]
- 007f34f4 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007f354c ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007f34f8 ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 007f34f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f34f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f34f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f3550 ["COPY", "tmp:0:8", ["const:78:8"]]
+ 007f3550 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3550 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3550 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1837c1101cb7c02d74f8359bb33db9f7"></a>

### [`007f3508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3508.md) → [`007f3560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3560.md) FUN_007f3560

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
      "definition_site": "007f3564",
      "incomplete_value": false,
      "site": "007f3568",
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
    "old": {
      "definition_site": "007f350c",
      "incomplete_value": false,
      "site": "007f3510",
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
      "007f3568",
      "DATA",
      [
        "storage",
        "00c7afa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3568",
      "DATA",
      [
        "storage",
        "00c7b078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3508 ["COPY", "register:4040:8", ["const:c7a000:8"]]
+ 007f3560 ["COPY", "register:4040:8", ["const:c7b000:8"]]
- 007f350c ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 007f350c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f350c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f350c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f3564 ["COPY", "tmp:0:8", ["const:78:8"]]
+ 007f3564 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3564 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3564 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ada60208da67d5a78032467e4c9a8469"></a>

### [`007f3564`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3564.md) → [`007f35bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f35bc.md) FUN_007f35bc

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
    "old": {
      "definition_site": "007f3588",
      "incomplete_value": false,
      "site": "007f3588",
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
            "const:38:8"
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
      "007f35e0",
      "DATA",
      [
        "storage",
        "00c7b038",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f35e0",
      "DATA",
      [
        "storage",
        "00c7b108",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3578 ["INT_ADD", "register:40f0:8", ["const:7f3578:8", "const:4:8"]]
- 007f3578 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f35d0 ["INT_ADD", "register:40f0:8", ["const:7f35d0:8", "const:4:8"]]
+ 007f35d0 ["CALL", null, ["callee:00c57f60:8"]]
- 007f3584 ["COPY", "tmp:0:8", ["const:38:8"]]
- 007f3584 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3584 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3584 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f35dc ["COPY", "tmp:0:8", ["const:108:8"]]
+ 007f35dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f35dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f35dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5441a445a958effc654939915d575db5"></a>

### [`007f35b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f35b4.md) → [`007f360c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f360c.md) FUN_007f360c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b7a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a10.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)

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
      "site": "007f362c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f35d4",
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
      "site": "007f3638",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f35e0",
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
      "007f362c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f3638",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f362c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f3638",
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
- 007f35d4 ["INT_ADD", "register:40f0:8", ["const:7f35d4:8", "const:4:8"]]
- 007f35d4 ["CALL", null, ["ram:47acf4:8"]]
+ 007f362c ["INT_ADD", "register:40f0:8", ["const:7f362c:8", "const:4:8"]]
+ 007f362c ["CALL", null, ["ram:47ad34:8"]]
- 007f35e0 ["INT_ADD", "register:40f0:8", ["const:7f35e0:8", "const:4:8"]]
- 007f35e0 ["CALL", null, ["ram:47acf4:8"]]
+ 007f3638 ["INT_ADD", "register:40f0:8", ["const:7f3638:8", "const:4:8"]]
+ 007f3638 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-5915429715cd4411a8d587427800c13d"></a>

### [`007f3658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3658.md) → [`007f36b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f36b0.md) FUN_007f36b0

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
    "old": {
      "definition_site": "007f367c",
      "incomplete_value": false,
      "site": "007f367c",
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
            "const:b8:8"
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
      "007f36d4",
      "DATA",
      [
        "storage",
        "00c7b0b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f36d4",
      "DATA",
      [
        "storage",
        "00c7b188",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f366c ["INT_ADD", "register:40f0:8", ["const:7f366c:8", "const:4:8"]]
- 007f366c ["CALL", null, ["callee:00c57f60:8"]]
+ 007f36c4 ["INT_ADD", "register:40f0:8", ["const:7f36c4:8", "const:4:8"]]
+ 007f36c4 ["CALL", null, ["callee:00c57f60:8"]]
- 007f3678 ["COPY", "tmp:0:8", ["const:b8:8"]]
- 007f3678 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3678 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3678 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f36d0 ["COPY", "tmp:0:8", ["const:188:8"]]
+ 007f36d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f36d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f36d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-00bd12c32da6a56d7b581f03834af141"></a>

### [`007f36a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f36a8.md) → [`007f3700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3700.md) FUN_007f3700

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 15件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce50.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`007f39d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f39d8.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f3a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3a30.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f3830",
      "incomplete_value": false,
      "site": "007f3838",
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
            "const:1f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f37d8",
      "incomplete_value": false,
      "site": "007f37e0",
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
            "const:128:8"
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
      "site": "007f3738",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f36e0",
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
      "site": "007f3754",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f36fc",
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
      "007f3738",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f3754",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f3804",
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
      "007f3738",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f3754",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f3804",
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
- 007f36e0 ["INT_ADD", "register:40f0:8", ["const:7f36e0:8", "const:4:8"]]
- 007f36e0 ["CALL", null, ["ram:47acf4:8"]]
+ 007f3738 ["INT_ADD", "register:40f0:8", ["const:7f3738:8", "const:4:8"]]
+ 007f3738 ["CALL", null, ["ram:47ad34:8"]]
- 007f36fc ["INT_ADD", "register:40f0:8", ["const:7f36fc:8", "const:4:8"]]
- 007f36fc ["CALL", null, ["ram:47acf4:8"]]
+ 007f3754 ["INT_ADD", "register:40f0:8", ["const:7f3754:8", "const:4:8"]]
+ 007f3754 ["CALL", null, ["ram:47ad34:8"]]
- 007f373c ["INT_ADD", "register:40f0:8", ["const:7f373c:8", "const:4:8"]]
- 007f373c ["CALL", null, ["callee:009e1014:8"]]
+ 007f3794 ["INT_ADD", "register:40f0:8", ["const:7f3794:8", "const:4:8"]]
+ 007f3794 ["CALL", null, ["callee:009e1014:8"]]
~~~


<a id="compare-61e4f48376596616168bba565d4792d1"></a>

### [`007f39a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f39a4.md) → [`007f39fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f39fc.md) FUN_007f39fc

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
      "definition_site": "007f3a10",
      "incomplete_value": false,
      "site": "007f3a14",
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
            "const:1f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f39b8",
      "incomplete_value": false,
      "site": "007f39bc",
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
            "const:128:8"
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
      "007f3a14",
      "DATA",
      [
        "storage",
        "00c7b128",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3a14",
      "DATA",
      [
        "storage",
        "00c7b1f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f39b0 ["INT_ADD", "register:40f0:8", ["const:7f39b0:8", "const:4:8"]]
- 007f39b0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f3a08 ["INT_ADD", "register:40f0:8", ["const:7f3a08:8", "const:4:8"]]
+ 007f3a08 ["CALL", null, ["callee:00c57f60:8"]]
- 007f39b8 ["COPY", "tmp:0:8", ["const:128:8"]]
- 007f39b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f39b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f39b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f3a10 ["COPY", "tmp:0:8", ["const:1f8:8"]]
+ 007f3a10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3a10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3a10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-46b82b4b4a7846bad520921d84bb815a"></a>

### [`007f39c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f39c8.md) → [`007f3a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3a20.md) FUN_007f3a20

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
      "definition_site": "007f3a24",
      "incomplete_value": false,
      "site": "007f3a28",
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
            "const:1f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f39cc",
      "incomplete_value": false,
      "site": "007f39d0",
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
      "007f3a28",
      "DATA",
      [
        "storage",
        "00c7b128",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3a28",
      "DATA",
      [
        "storage",
        "00c7b1f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f39cc ["COPY", "tmp:0:8", ["const:128:8"]]
- 007f39cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f39cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f39cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f3a24 ["COPY", "tmp:0:8", ["const:1f8:8"]]
+ 007f3a24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3a24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3a24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-683672cda9e871305746fc185b51a9a0"></a>

### [`007f3a24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3a24.md) → [`007f3a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3a7c.md) FUN_007f3a7c

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
      "definition_site": "007f3aa0",
      "incomplete_value": false,
      "site": "007f3aa0",
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
            "const:288:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f3a48",
      "incomplete_value": false,
      "site": "007f3a48",
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
            "const:1b8:8"
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
      "007f3aa0",
      "DATA",
      [
        "storage",
        "00c7b1b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3aa0",
      "DATA",
      [
        "storage",
        "00c7b288",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3a38 ["INT_ADD", "register:40f0:8", ["const:7f3a38:8", "const:4:8"]]
- 007f3a38 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f3a90 ["INT_ADD", "register:40f0:8", ["const:7f3a90:8", "const:4:8"]]
+ 007f3a90 ["CALL", null, ["callee:00c57f60:8"]]
- 007f3a44 ["COPY", "tmp:0:8", ["const:1b8:8"]]
- 007f3a44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3a44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3a44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f3a9c ["COPY", "tmp:0:8", ["const:288:8"]]
+ 007f3a9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3a9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3a9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e13815d0f18af2fb7a3e0dd04dd63244"></a>

### [`007f3a74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3a74.md) → [`007f3acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3acc.md) FUN_007f3acc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 15件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 15件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f3c44",
      "incomplete_value": false,
      "site": "007f3c44",
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
            "const:2f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f3bec",
      "incomplete_value": false,
      "site": "007f3bec",
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
            "const:228:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f3b08",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f3ab0",
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
      "site": "007f3b24",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f3acc",
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
      "007f3b08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f3b24",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f3bd0",
      "READ",
      [
        "storage",
        "002aeccb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007f3b08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f3b24",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f3bd0",
      "READ",
      [
        "storage",
        "002aec6f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3ab0 ["INT_ADD", "register:40f0:8", ["const:7f3ab0:8", "const:4:8"]]
- 007f3ab0 ["CALL", null, ["ram:47acf4:8"]]
+ 007f3b08 ["INT_ADD", "register:40f0:8", ["const:7f3b08:8", "const:4:8"]]
+ 007f3b08 ["CALL", null, ["ram:47ad34:8"]]
- 007f3acc ["INT_ADD", "register:40f0:8", ["const:7f3acc:8", "const:4:8"]]
- 007f3acc ["CALL", null, ["ram:47acf4:8"]]
+ 007f3b24 ["INT_ADD", "register:40f0:8", ["const:7f3b24:8", "const:4:8"]]
+ 007f3b24 ["CALL", null, ["ram:47ad34:8"]]
- 007f3cd0 ["INT_ADD", "register:40f0:8", ["const:7f3cd0:8", "const:4:8"]]
- 007f3cd0 ["CALL", null, ["callee:00442970:8"]]
+ 007f3d28 ["INT_ADD", "register:40f0:8", ["const:7f3d28:8", "const:4:8"]]
+ 007f3d28 ["CALL", null, ["callee:00442970:8"]]
~~~


<a id="compare-19347e53fac29a0f80d950a7549297e8"></a>

### [`007f3dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3dbc.md) → [`007f3e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3e14.md) FUN_007f3e14

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
      "definition_site": "007f3e28",
      "incomplete_value": false,
      "site": "007f3e2c",
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
            "const:2f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f3dd0",
      "incomplete_value": false,
      "site": "007f3dd4",
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
      "007f3e2c",
      "DATA",
      [
        "storage",
        "00c7b228",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3e2c",
      "DATA",
      [
        "storage",
        "00c7b2f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3dc8 ["INT_ADD", "register:40f0:8", ["const:7f3dc8:8", "const:4:8"]]
- 007f3dc8 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f3e20 ["INT_ADD", "register:40f0:8", ["const:7f3e20:8", "const:4:8"]]
+ 007f3e20 ["CALL", null, ["callee:00c57f60:8"]]
- 007f3dd0 ["COPY", "tmp:0:8", ["const:228:8"]]
- 007f3dd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3dd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3dd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f3e28 ["COPY", "tmp:0:8", ["const:2f8:8"]]
+ 007f3e28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3e28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3e28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0e43a0b86e38fb586d2e445891829e73"></a>

### [`007f3de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3de0.md) → [`007f3e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3e38.md) FUN_007f3e38

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
      "definition_site": "007f3e3c",
      "incomplete_value": false,
      "site": "007f3e40",
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
            "const:2f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f3de4",
      "incomplete_value": false,
      "site": "007f3de8",
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
      "007f3e40",
      "DATA",
      [
        "storage",
        "00c7b228",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f3e40",
      "DATA",
      [
        "storage",
        "00c7b2f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3de4 ["COPY", "tmp:0:8", ["const:228:8"]]
- 007f3de4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3de4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3de4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f3e3c ["COPY", "tmp:0:8", ["const:2f8:8"]]
+ 007f3e3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3e3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f3e3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1c712cf15fc11aa9f997dcb6068993be"></a>

### [`007f3df8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3df8.md) → [`007f3e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3e50.md) FUN_007f3e50

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
      "site": "007f3e74",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f3e1c",
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
      "007f3e74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f3e74",
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
- 007f3e1c ["INT_ADD", "register:40f0:8", ["const:7f3e1c:8", "const:4:8"]]
- 007f3e1c ["CALL", null, ["ram:47acf4:8"]]
+ 007f3e74 ["INT_ADD", "register:40f0:8", ["const:7f3e74:8", "const:4:8"]]
+ 007f3e74 ["CALL", null, ["ram:47ad34:8"]]
- 007f3e28 ["INT_ADD", "register:40f0:8", ["const:7f3e28:8", "const:4:8"]]
- 007f3e28 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f3e80 ["INT_ADD", "register:40f0:8", ["const:7f3e80:8", "const:4:8"]]
+ 007f3e80 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-fa7102ae4c709074e7f0059c4e82ffbe"></a>

### [`007f3e8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3e8c.md) → [`007f3ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3ee4.md) FUN_007f3ee4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) · 呼出先 10件 [`006d738c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d738c.md) [`006d7650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7650.md) [`006d76a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`006d76e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76e4.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 1件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 10件 [`006d73e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d73e4.md) [`006d76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76a8.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`006d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d773c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.48% / 新版 99.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f41a4",
      "incomplete_value": false,
      "site": "007f41a8",
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
            "const:f75:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f414c",
      "incomplete_value": false,
      "site": "007f4150",
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
            "const:fd1:8"
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
      "007f41a4",
      "PARAM",
      [
        "storage",
        "002a9fd1",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007f41a4",
      "PARAM",
      [
        "storage",
        "002a9f75",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4150 ["INT_ADD", "register:40f0:8", ["const:7f4150:8", "const:4:8"]]
- 007f4150 ["CALL", null, ["callee:006d76a8:8"]]
+ 007f41a8 ["INT_ADD", "register:40f0:8", ["const:7f41a8:8", "const:4:8"]]
+ 007f41a8 ["CALL", null, ["callee:006d76a8:8"]]
- 007f3f0c ["INT_ADD", "register:40f0:8", ["const:7f3f0c:8", "const:4:8"]]
- 007f3f0c ["CALL", null, ["callee:00c57f60:8"]]
+ 007f3f64 ["INT_ADD", "register:40f0:8", ["const:7f3f64:8", "const:4:8"]]
+ 007f3f64 ["CALL", null, ["callee:00c57f60:8"]]
- 007f3f2c ["INT_ADD", "register:40f0:8", ["const:7f3f2c:8", "const:4:8"]]
- 007f3f2c ["CALL", null, ["callee:00c58160:8"]]
+ 007f3f84 ["INT_ADD", "register:40f0:8", ["const:7f3f84:8", "const:4:8"]]
+ 007f3f84 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-15aba7a4a2e48817f8246467e78a0f88"></a>

### [`007f4190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f4190.md) → [`007f41e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f41e8.md) FUN_007f41e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) · 呼出先 9件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`006d7650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7650.md) [`006d7b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7b90.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 9件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`006d76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76a8.md) [`006d7be8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7be8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.59% / 新版 99.59%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f4590",
      "incomplete_value": false,
      "site": "007f4594",
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
            "const:b7b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f4538",
      "incomplete_value": false,
      "site": "007f453c",
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
            "const:bd7:8"
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
      "007f4590",
      "PARAM",
      [
        "storage",
        "002a7bd7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007f4590",
      "PARAM",
      [
        "storage",
        "002a7b7b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f453c ["INT_ADD", "register:40f0:8", ["const:7f453c:8", "const:4:8"]]
- 007f453c ["CALL", null, ["callee:006d76a8:8"]]
+ 007f4594 ["INT_ADD", "register:40f0:8", ["const:7f4594:8", "const:4:8"]]
+ 007f4594 ["CALL", null, ["callee:006d76a8:8"]]
- 007f4220 ["INT_ADD", "register:40f0:8", ["const:7f4220:8", "const:4:8"]]
- 007f4220 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f4278 ["INT_ADD", "register:40f0:8", ["const:7f4278:8", "const:4:8"]]
+ 007f4278 ["CALL", null, ["callee:00c57f60:8"]]
- 007f4240 ["INT_ADD", "register:40f0:8", ["const:7f4240:8", "const:4:8"]]
- 007f4240 ["CALL", null, ["callee:00c58160:8"]]
+ 007f4298 ["INT_ADD", "register:40f0:8", ["const:7f4298:8", "const:4:8"]]
+ 007f4298 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-9521374f01b5d7f071ababa36e1ef88f"></a>

### [`007f45a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f45a8.md) → [`007f4600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4600.md) FUN_007f4600

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
      "definition_site": "007f4624",
      "incomplete_value": false,
      "site": "007f4624",
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
            "const:400:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f45cc",
      "incomplete_value": false,
      "site": "007f45cc",
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
            "const:330:8"
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
      "007f4624",
      "DATA",
      [
        "storage",
        "00c7b330",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4624",
      "DATA",
      [
        "storage",
        "00c7b400",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f45bc ["INT_ADD", "register:40f0:8", ["const:7f45bc:8", "const:4:8"]]
- 007f45bc ["CALL", null, ["callee:00c57f60:8"]]
+ 007f4614 ["INT_ADD", "register:40f0:8", ["const:7f4614:8", "const:4:8"]]
+ 007f4614 ["CALL", null, ["callee:00c57f60:8"]]
- 007f45c8 ["COPY", "tmp:0:8", ["const:330:8"]]
- 007f45c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f45c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f45c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4620 ["COPY", "tmp:0:8", ["const:400:8"]]
+ 007f4620 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4620 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4620 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-244ad096f7b22f330328584cfa549f32"></a>

### [`007f45dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f45dc.md) → [`007f4634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4634.md) FUN_007f4634

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
      "definition_site": "007f4640",
      "incomplete_value": false,
      "site": "007f4640",
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
            "const:400:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f45e8",
      "incomplete_value": false,
      "site": "007f45e8",
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
      "007f4640",
      "DATA",
      [
        "storage",
        "00c7b330",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4640",
      "DATA",
      [
        "storage",
        "00c7b400",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f45e4 ["COPY", "tmp:0:8", ["const:330:8"]]
- 007f45e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f45e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f45e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f463c ["COPY", "tmp:0:8", ["const:400:8"]]
+ 007f463c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f463c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f463c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f79dcd7a87aa8f3680273be720d59c67"></a>

### [`007f46a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f46a8.md) → [`007f4700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4700.md) FUN_007f4700

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
      "definition_site": "007f4724",
      "incomplete_value": false,
      "site": "007f4724",
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
            "const:480:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f46cc",
      "incomplete_value": false,
      "site": "007f46cc",
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
            "const:3b0:8"
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
      "007f4724",
      "DATA",
      [
        "storage",
        "00c7b3b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4724",
      "DATA",
      [
        "storage",
        "00c7b480",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f46bc ["INT_ADD", "register:40f0:8", ["const:7f46bc:8", "const:4:8"]]
- 007f46bc ["CALL", null, ["callee:00c57f60:8"]]
+ 007f4714 ["INT_ADD", "register:40f0:8", ["const:7f4714:8", "const:4:8"]]
+ 007f4714 ["CALL", null, ["callee:00c57f60:8"]]
- 007f46c8 ["COPY", "tmp:0:8", ["const:3b0:8"]]
- 007f46c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f46c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f46c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4720 ["COPY", "tmp:0:8", ["const:480:8"]]
+ 007f4720 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4720 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4720 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-369f196f4a84c02ceeb711978d7c761d"></a>

### [`007f46dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f46dc.md) → [`007f4734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4734.md) FUN_007f4734

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
      "definition_site": "007f4740",
      "incomplete_value": false,
      "site": "007f4740",
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
            "const:480:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f46e8",
      "incomplete_value": false,
      "site": "007f46e8",
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
            "const:3b0:8"
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
      "007f4740",
      "DATA",
      [
        "storage",
        "00c7b3b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4740",
      "DATA",
      [
        "storage",
        "00c7b480",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f46e4 ["COPY", "tmp:0:8", ["const:3b0:8"]]
- 007f46e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f46e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f46e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f473c ["COPY", "tmp:0:8", ["const:480:8"]]
+ 007f473c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f473c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f473c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6f263c974f09720ff061c863c2c99188"></a>

### [`007f4790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f4790.md) → [`007f47e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f47e8.md) FUN_007f47e8

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
      "definition_site": "007f480c",
      "incomplete_value": false,
      "site": "007f480c",
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
            "const:500:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f47b4",
      "incomplete_value": false,
      "site": "007f47b4",
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
      "007f480c",
      "DATA",
      [
        "storage",
        "00c7b430",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f480c",
      "DATA",
      [
        "storage",
        "00c7b500",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f47a4 ["INT_ADD", "register:40f0:8", ["const:7f47a4:8", "const:4:8"]]
- 007f47a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f47fc ["INT_ADD", "register:40f0:8", ["const:7f47fc:8", "const:4:8"]]
+ 007f47fc ["CALL", null, ["callee:00c57f60:8"]]
- 007f47b0 ["COPY", "tmp:0:8", ["const:430:8"]]
- 007f47b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f47b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f47b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4808 ["COPY", "tmp:0:8", ["const:500:8"]]
+ 007f4808 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4808 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4808 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cac3884737d174ffeee8cb265d750eec"></a>

### [`007f47c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f47c4.md) → [`007f481c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f481c.md) FUN_007f481c

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
      "definition_site": "007f4828",
      "incomplete_value": false,
      "site": "007f4828",
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
            "const:500:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f47d0",
      "incomplete_value": false,
      "site": "007f47d0",
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
            "const:430:8"
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
      "007f4828",
      "DATA",
      [
        "storage",
        "00c7b430",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4828",
      "DATA",
      [
        "storage",
        "00c7b500",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f47cc ["COPY", "tmp:0:8", ["const:430:8"]]
- 007f47cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f47cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f47cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f4824 ["COPY", "tmp:0:8", ["const:500:8"]]
+ 007f4824 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f4824 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f4824 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-459f97c73c43d2a9597ef4b4aeb623b8"></a>

### [`007f4898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f4898.md) → [`007f48f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f48f0.md) FUN_007f48f0

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
      "definition_site": "007f4914",
      "incomplete_value": false,
      "site": "007f4914",
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
    "old": {
      "definition_site": "007f48bc",
      "incomplete_value": false,
      "site": "007f48bc",
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
      "007f4914",
      "DATA",
      [
        "storage",
        "00c7b4b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4914",
      "DATA",
      [
        "storage",
        "00c7b580",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f48ac ["INT_ADD", "register:40f0:8", ["const:7f48ac:8", "const:4:8"]]
- 007f48ac ["CALL", null, ["callee:00c57f60:8"]]
+ 007f4904 ["INT_ADD", "register:40f0:8", ["const:7f4904:8", "const:4:8"]]
+ 007f4904 ["CALL", null, ["callee:00c57f60:8"]]
- 007f48b8 ["COPY", "tmp:0:8", ["const:4b0:8"]]
- 007f48b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f48b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f48b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4910 ["COPY", "tmp:0:8", ["const:580:8"]]
+ 007f4910 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4910 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4910 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2926d08d300511ec53059e1a0decac32"></a>

### [`007f4a04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f4a04.md) → [`007f4a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4a5c.md) FUN_007f4a5c

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
      "definition_site": "007f4a80",
      "incomplete_value": false,
      "site": "007f4a80",
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
            "const:600:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f4a28",
      "incomplete_value": false,
      "site": "007f4a28",
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
            "const:530:8"
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
      "007f4a80",
      "DATA",
      [
        "storage",
        "00c7b530",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4a80",
      "DATA",
      [
        "storage",
        "00c7b600",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4a18 ["INT_ADD", "register:40f0:8", ["const:7f4a18:8", "const:4:8"]]
- 007f4a18 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f4a70 ["INT_ADD", "register:40f0:8", ["const:7f4a70:8", "const:4:8"]]
+ 007f4a70 ["CALL", null, ["callee:00c57f60:8"]]
- 007f4a24 ["COPY", "tmp:0:8", ["const:530:8"]]
- 007f4a24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f4a24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f4a24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4a7c ["COPY", "tmp:0:8", ["const:600:8"]]
+ 007f4a7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4a7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4a7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-106e954dbf42752e7958ebada2f8e3cc"></a>

### [`007f4acc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f4acc.md) → [`007f4b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4b24.md) FUN_007f4b24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f4b48",
      "incomplete_value": false,
      "site": "007f4b4c",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f4af0",
      "incomplete_value": false,
      "site": "007f4af4",
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
            "const:5b0:8"
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
      "007f4b4c",
      "DATA",
      [
        "storage",
        "00c7b5b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4b4c",
      "DATA",
      [
        "storage",
        "00c7b680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4ae0 ["INT_ADD", "register:40f0:8", ["const:7f4ae0:8", "const:4:8"]]
- 007f4ae0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f4b38 ["INT_ADD", "register:40f0:8", ["const:7f4b38:8", "const:4:8"]]
+ 007f4b38 ["CALL", null, ["callee:00c57f60:8"]]
- 007f4af0 ["COPY", "tmp:0:8", ["const:5b0:8"]]
- 007f4af0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f4af0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f4af0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4b48 ["COPY", "tmp:0:8", ["const:680:8"]]
+ 007f4b48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4b48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4b48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-619e7e9161e3495a5165cf5f5210f3a6"></a>

### [`007f4b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f4b0c.md) → [`007f4b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4b64.md) FUN_007f4b64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f4b68",
      "incomplete_value": false,
      "site": "007f4b6c",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f4b10",
      "incomplete_value": false,
      "site": "007f4b14",
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
            "const:5b0:8"
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
      "007f4b6c",
      "DATA",
      [
        "storage",
        "00c7b5b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4b6c",
      "DATA",
      [
        "storage",
        "00c7b680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4b10 ["COPY", "tmp:0:8", ["const:5b0:8"]]
- 007f4b10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f4b10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f4b10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4b68 ["COPY", "tmp:0:8", ["const:680:8"]]
+ 007f4b68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4b68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4b68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8ef29b42f48dd359c12e11c1949040ea"></a>

### [`007f4b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f4b34.md) → [`007f4b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4b8c.md) FUN_007f4b8c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 20件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.36% / 新版 95.36%

優先判定に残った影響 `call_target` 2件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f4c90",
      "incomplete_value": true,
      "site": "007f4ca0",
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
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:92f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f4c38",
      "incomplete_value": true,
      "site": "007f4c48",
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
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:98b:8"
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
      "definition_site": "007f4c94",
      "incomplete_value": true,
      "site": "007f4ca4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "007f4c3c",
      "incomplete_value": true,
      "site": "007f4c4c",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f4e9c",
      "incomplete_value": true,
      "site": "007f4e9c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:2fd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f4e44",
      "incomplete_value": true,
      "site": "007f4e44",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:34a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 48,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007f4be4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f4bf4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "007f4c90",
      "READ",
      [
        "storage",
        "002ab98b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007f4be4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f4bf4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "007f4c90",
      "READ",
      [
        "storage",
        "002ab92f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4b8c ["INT_ADD", "register:40f0:8", ["const:7f4b8c:8", "const:4:8"]]
- 007f4b8c ["CALL", null, ["ram:47acf4:8"]]
+ 007f4be4 ["INT_ADD", "register:40f0:8", ["const:7f4be4:8", "const:4:8"]]
+ 007f4be4 ["CALL", null, ["ram:47ad34:8"]]
- 007f4b9c ["INT_ADD", "register:40f0:8", ["const:7f4b9c:8", "const:4:8"]]
- 007f4b9c ["CALL", null, ["ram:71bed8:8"]]
+ 007f4bf4 ["INT_ADD", "register:40f0:8", ["const:7f4bf4:8", "const:4:8"]]
+ 007f4bf4 ["CALL", null, ["ram:71bf30:8"]]
- 007f4e28 ["COPY", "tmp:0:8", ["const:34a:8"]]
- 007f4e28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f4e28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f4e28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f4e80 ["COPY", "tmp:0:8", ["const:2fd:8"]]
+ 007f4e80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f4e80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f4e80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7b0785b2cccb21a0c8a0055221afa94c"></a>

### [`007f5214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f5214.md) → [`007f526c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f526c.md) FUN_007f526c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f528c",
      "incomplete_value": true,
      "site": "007f5290",
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
            "const:6f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5234",
      "incomplete_value": true,
      "site": "007f5238",
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
      "007f5290",
      "DATA",
      [
        "storage",
        "00c7b620",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5290",
      "DATA",
      [
        "storage",
        "00c7b6f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5228 ["INT_ADD", "register:40f0:8", ["const:7f5228:8", "const:4:8"]]
- 007f5228 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f5280 ["INT_ADD", "register:40f0:8", ["const:7f5280:8", "const:4:8"]]
+ 007f5280 ["CALL", null, ["callee:00c57f60:8"]]
- 007f5234 ["COPY", "tmp:0:8", ["const:620:8"]]
- 007f5234 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f5234 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f5234 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f528c ["COPY", "tmp:0:8", ["const:6f0:8"]]
+ 007f528c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f528c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f528c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-073f40c3953fc5365c344cbc6a014890"></a>

### [`007f524c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f524c.md) → [`007f52a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f52a4.md) FUN_007f52a4

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
      "definition_site": "007f52a8",
      "incomplete_value": false,
      "site": "007f52ac",
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
            "const:6f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5250",
      "incomplete_value": false,
      "site": "007f5254",
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
      "007f52ac",
      "DATA",
      [
        "storage",
        "00c7b620",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f52ac",
      "DATA",
      [
        "storage",
        "00c7b6f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5250 ["COPY", "tmp:0:8", ["const:620:8"]]
- 007f5250 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f5250 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f5250 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f52a8 ["COPY", "tmp:0:8", ["const:6f0:8"]]
+ 007f52a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f52a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f52a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eb40c5faddde56d153f5337a514d045f"></a>

### [`007f526c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f526c.md) → [`007f52c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f52c4.md) FUN_007f52c4

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.61% / 新版 99.61%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f52f8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f52a0",
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
      "007f52f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f5338",
      "DATA",
      [
        "storage",
        "0039b7c8",
        null,
        "byte[31]"
      ]
    ],
    [
      "007f53a4",
      "DATA",
      [
        "storage",
        "0039b7c0",
        null,
        "byte[31]"
      ]
    ]
  ],
  "added": [
    [
      "007f52f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f5338",
      "DATA",
      [
        "storage",
        "0039b7c8",
        null,
        "byte[39]"
      ]
    ],
    [
      "007f53a4",
      "DATA",
      [
        "storage",
        "0039b7c0",
        null,
        "uleb128"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f52a0 ["INT_ADD", "register:40f0:8", ["const:7f52a0:8", "const:4:8"]]
- 007f52a0 ["CALL", null, ["ram:47acf4:8"]]
+ 007f52f8 ["INT_ADD", "register:40f0:8", ["const:7f52f8:8", "const:4:8"]]
+ 007f52f8 ["CALL", null, ["ram:47ad34:8"]]
- 007f52ac ["INT_ADD", "register:40f0:8", ["const:7f52ac:8", "const:4:8"]]
- 007f52ac ["CALL", null, ["callee:0047ce14:8"]]
+ 007f5304 ["INT_ADD", "register:40f0:8", ["const:7f5304:8", "const:4:8"]]
+ 007f5304 ["CALL", null, ["callee:0047ce14:8"]]
- 007f5334 ["INT_ADD", "register:40f0:8", ["const:7f5334:8", "const:4:8"]]
- 007f5334 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f538c ["INT_ADD", "register:40f0:8", ["const:7f538c:8", "const:4:8"]]
+ 007f538c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-0964fb3603c0c37cafd21b01848bbee3"></a>

### [`007f569c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f569c.md) → [`007f56f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f56f4.md) FUN_007f56f4

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
      "definition_site": "007f5708",
      "incomplete_value": false,
      "site": "007f570c",
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
            "const:780:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f56b0",
      "incomplete_value": false,
      "site": "007f56b4",
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
            "const:6b0:8"
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
      "007f570c",
      "DATA",
      [
        "storage",
        "00c7b6b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f570c",
      "DATA",
      [
        "storage",
        "00c7b780",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f56a8 ["INT_ADD", "register:40f0:8", ["const:7f56a8:8", "const:4:8"]]
- 007f56a8 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f5700 ["INT_ADD", "register:40f0:8", ["const:7f5700:8", "const:4:8"]]
+ 007f5700 ["CALL", null, ["callee:00c57f60:8"]]
- 007f56b0 ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 007f56b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f56b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f56b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f5708 ["COPY", "tmp:0:8", ["const:780:8"]]
+ 007f5708 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5708 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5708 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8cc7d3d62543a0e6b59aa86683f3c75e"></a>

### [`007f56c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f56c0.md) → [`007f5718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5718.md) FUN_007f5718

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
      "definition_site": "007f571c",
      "incomplete_value": false,
      "site": "007f5720",
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
            "const:780:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f56c4",
      "incomplete_value": false,
      "site": "007f56c8",
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
      "007f5720",
      "DATA",
      [
        "storage",
        "00c7b6b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5720",
      "DATA",
      [
        "storage",
        "00c7b780",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f56c4 ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 007f56c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f56c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f56c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f571c ["COPY", "tmp:0:8", ["const:780:8"]]
+ 007f571c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f571c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f571c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4f4b56cb5a7059e03400aa1ee258f6f2"></a>

### [`007f56d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f56d8.md) → [`007f5730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5730.md) FUN_007f5730

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046af0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af0c.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md) [`008b9290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9290.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.46% / 新版 97.46%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007f5778",
      "incomplete_value": true,
      "site": "007f5778",
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
      "definition_site": "007f5720",
      "incomplete_value": true,
      "site": "007f5720",
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
      "definition_site": "007f5780",
      "incomplete_value": false,
      "site": "007f5790",
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
      "definition_site": "007f5728",
      "incomplete_value": false,
      "site": "007f5738",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f5788",
      "incomplete_value": false,
      "site": "007f5790",
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
    "old": {
      "definition_site": "007f5730",
      "incomplete_value": false,
      "site": "007f5738",
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
            "const:990:8"
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
      "007f5774",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007f5780",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f5788",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007f5774",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007f5780",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f5788",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5738 ["INT_ADD", "register:40f0:8", ["const:7f5738:8", "const:4:8"]]
- 007f5738 ["CALL", null, ["callee:00c586e0:8"]]
+ 007f5790 ["INT_ADD", "register:40f0:8", ["const:7f5790:8", "const:4:8"]]
+ 007f5790 ["CALL", null, ["callee:00c586e0:8"]]
- 007f5844 ["INT_ADD", "register:40f0:8", ["const:7f5844:8", "const:4:8"]]
- 007f5844 ["CALL", null, ["ram:71bed8:8"]]
+ 007f589c ["INT_ADD", "register:40f0:8", ["const:7f589c:8", "const:4:8"]]
+ 007f589c ["CALL", null, ["ram:71bf30:8"]]
- 007f5710 ["INT_ADD", "register:40f0:8", ["const:7f5710:8", "const:4:8"]]
- 007f5710 ["CALL", null, ["callee:008b92e8:8"]]
+ 007f5768 ["INT_ADD", "register:40f0:8", ["const:7f5768:8", "const:4:8"]]
+ 007f5768 ["CALL", null, ["callee:008b92e8:8"]]
~~~


<a id="compare-4278316fbb862c68fdca282690e30adb"></a>

### [`007f58dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f58dc.md) → [`007f5934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5934.md) FUN_007f5934

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
      "definition_site": "007f5958",
      "incomplete_value": false,
      "site": "007f5958",
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
            "const:800:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5900",
      "incomplete_value": false,
      "site": "007f5900",
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
      "007f5958",
      "DATA",
      [
        "storage",
        "00c7b730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5958",
      "DATA",
      [
        "storage",
        "00c7b800",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f58f0 ["INT_ADD", "register:40f0:8", ["const:7f58f0:8", "const:4:8"]]
- 007f58f0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f5948 ["INT_ADD", "register:40f0:8", ["const:7f5948:8", "const:4:8"]]
+ 007f5948 ["CALL", null, ["callee:00c57f60:8"]]
- 007f58fc ["COPY", "tmp:0:8", ["const:730:8"]]
- 007f58fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f58fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f58fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f5954 ["COPY", "tmp:0:8", ["const:800:8"]]
+ 007f5954 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5954 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5954 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4b1e2f019d816cc4622abb344d05353e"></a>

### [`007f5910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f5910.md) → [`007f5968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5968.md) FUN_007f5968

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
      "definition_site": "007f5974",
      "incomplete_value": false,
      "site": "007f5974",
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
            "const:800:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f591c",
      "incomplete_value": false,
      "site": "007f591c",
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
      "007f5974",
      "DATA",
      [
        "storage",
        "00c7b730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5974",
      "DATA",
      [
        "storage",
        "00c7b800",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5918 ["COPY", "tmp:0:8", ["const:730:8"]]
- 007f5918 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f5918 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f5918 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f5970 ["COPY", "tmp:0:8", ["const:800:8"]]
+ 007f5970 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f5970 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f5970 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1b944a72e06e787a3e8bcd4a86abf9d4"></a>

### [`007f592c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f592c.md) → [`007f5984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5984.md) FUN_007f5984

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f59e0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f5988",
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
      "007f59e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f59e0",
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
- 007f5988 ["INT_ADD", "register:40f0:8", ["const:7f5988:8", "const:4:8"]]
- 007f5988 ["CALL", null, ["ram:47acf4:8"]]
+ 007f59e0 ["INT_ADD", "register:40f0:8", ["const:7f59e0:8", "const:4:8"]]
+ 007f59e0 ["CALL", null, ["ram:47ad34:8"]]
- 007f5994 ["INT_ADD", "register:40f0:8", ["const:7f5994:8", "const:4:8"]]
- 007f5994 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f59ec ["INT_ADD", "register:40f0:8", ["const:7f59ec:8", "const:4:8"]]
+ 007f59ec ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-7ad2e70d9dc96a1cb414de25d863153d"></a>

### [`007f59e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f59e0.md) → [`007f5a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5a38.md) FUN_007f5a38

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
      "definition_site": "007f5a4c",
      "incomplete_value": false,
      "site": "007f5a50",
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
            "const:880:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f59f4",
      "incomplete_value": false,
      "site": "007f59f8",
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
            "const:7b0:8"
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
      "007f5a50",
      "DATA",
      [
        "storage",
        "00c7b7b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5a50",
      "DATA",
      [
        "storage",
        "00c7b880",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f59ec ["INT_ADD", "register:40f0:8", ["const:7f59ec:8", "const:4:8"]]
- 007f59ec ["CALL", null, ["callee:00c57f60:8"]]
+ 007f5a44 ["INT_ADD", "register:40f0:8", ["const:7f5a44:8", "const:4:8"]]
+ 007f5a44 ["CALL", null, ["callee:00c57f60:8"]]
- 007f59f4 ["COPY", "tmp:0:8", ["const:7b0:8"]]
- 007f59f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f59f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f59f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f5a4c ["COPY", "tmp:0:8", ["const:880:8"]]
+ 007f5a4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5a4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5a4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cdad4b4973d6bbbfca295af31fcb1853"></a>

### [`007f5a04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f5a04.md) → [`007f5a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5a5c.md) FUN_007f5a5c

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
      "definition_site": "007f5a60",
      "incomplete_value": false,
      "site": "007f5a64",
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
            "const:880:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5a08",
      "incomplete_value": false,
      "site": "007f5a0c",
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
      "007f5a64",
      "DATA",
      [
        "storage",
        "00c7b7b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5a64",
      "DATA",
      [
        "storage",
        "00c7b880",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5a08 ["COPY", "tmp:0:8", ["const:7b0:8"]]
- 007f5a08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f5a08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f5a08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f5a60 ["COPY", "tmp:0:8", ["const:880:8"]]
+ 007f5a60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5a60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5a60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f1218a78922e6f12eb76c083c5145c5f"></a>

### [`007f5a1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f5a1c.md) → [`007f5a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5a74.md) FUN_007f5a74

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
      "site": "007f5a98",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f5a40",
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
      "007f5a98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f5a98",
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
- 007f5a40 ["INT_ADD", "register:40f0:8", ["const:7f5a40:8", "const:4:8"]]
- 007f5a40 ["CALL", null, ["ram:47acf4:8"]]
+ 007f5a98 ["INT_ADD", "register:40f0:8", ["const:7f5a98:8", "const:4:8"]]
+ 007f5a98 ["CALL", null, ["ram:47ad34:8"]]
- 007f5a4c ["INT_ADD", "register:40f0:8", ["const:7f5a4c:8", "const:4:8"]]
- 007f5a4c ["CALL", null, ["callee:0047ce14:8"]]
+ 007f5aa4 ["INT_ADD", "register:40f0:8", ["const:7f5aa4:8", "const:4:8"]]
+ 007f5aa4 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-5e310818e95beaece6b4a579440d9c81"></a>

### [`007f5a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f5a90.md) → [`007f5ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5ae8.md) FUN_007f5ae8

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
      "definition_site": "007f5b0c",
      "incomplete_value": false,
      "site": "007f5b0c",
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
            "const:900:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5ab4",
      "incomplete_value": false,
      "site": "007f5ab4",
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
      "007f5b0c",
      "DATA",
      [
        "storage",
        "00c7b830",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5b0c",
      "DATA",
      [
        "storage",
        "00c7b900",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5aa4 ["INT_ADD", "register:40f0:8", ["const:7f5aa4:8", "const:4:8"]]
- 007f5aa4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f5afc ["INT_ADD", "register:40f0:8", ["const:7f5afc:8", "const:4:8"]]
+ 007f5afc ["CALL", null, ["callee:00c57f60:8"]]
- 007f5ab0 ["COPY", "tmp:0:8", ["const:830:8"]]
- 007f5ab0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f5ab0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f5ab0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f5b08 ["COPY", "tmp:0:8", ["const:900:8"]]
+ 007f5b08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5b08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5b08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b70a40a17d22b65ef5897af6a653df58"></a>

### [`007f5ac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f5ac4.md) → [`007f5b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5b1c.md) FUN_007f5b1c

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
      "definition_site": "007f5b28",
      "incomplete_value": false,
      "site": "007f5b28",
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
            "const:900:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5ad0",
      "incomplete_value": false,
      "site": "007f5ad0",
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
      "007f5b28",
      "DATA",
      [
        "storage",
        "00c7b830",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5b28",
      "DATA",
      [
        "storage",
        "00c7b900",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5acc ["COPY", "tmp:0:8", ["const:830:8"]]
- 007f5acc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f5acc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f5acc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f5b24 ["COPY", "tmp:0:8", ["const:900:8"]]
+ 007f5b24 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f5b24 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f5b24 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e944bb3089f145ea8fa6bd90ff73b08f"></a>

### [`007f5ae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f5ae0.md) → [`007f5b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5b38.md) FUN_007f5b38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 8件 [`00468bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468bdc.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046af0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af0c.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.20% / 新版 97.20%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007f5b7c",
      "incomplete_value": true,
      "site": "007f5b7c",
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
      "definition_site": "007f5b24",
      "incomplete_value": true,
      "site": "007f5b24",
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
      "definition_site": "007f5b84",
      "incomplete_value": false,
      "site": "007f5b94",
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
      "definition_site": "007f5b2c",
      "incomplete_value": false,
      "site": "007f5b3c",
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
      "definition_site": "007f5b8c",
      "incomplete_value": false,
      "site": "007f5b94",
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
    "old": {
      "definition_site": "007f5b34",
      "incomplete_value": false,
      "site": "007f5b3c",
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
            "const:990:8"
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
      "007f5b70",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007f5b84",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f5b8c",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007f5b70",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007f5b84",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f5b8c",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5b3c ["INT_ADD", "register:40f0:8", ["const:7f5b3c:8", "const:4:8"]]
- 007f5b3c ["CALL", null, ["callee:00c586e0:8"]]
+ 007f5b94 ["INT_ADD", "register:40f0:8", ["const:7f5b94:8", "const:4:8"]]
+ 007f5b94 ["CALL", null, ["callee:00c586e0:8"]]
- 007f5b18 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:978:8"]]
- 007f5b18 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 007f5b70 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a78:8"]]
+ 007f5b70 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 007f5b2c ["COPY", "tmp:0:8", ["const:e58:8"]]
- 007f5b2c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 007f5b2c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 007f5b2c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 007f5b84 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 007f5b84 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 007f5b84 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 007f5b84 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-f2f6201a7bf94e25e752836dee4dd08f"></a>

### [`007f5e64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f5e64.md) → [`007f5ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5ebc.md) FUN_007f5ebc

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
      "definition_site": "007f5ee0",
      "incomplete_value": false,
      "site": "007f5ee0",
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
            "const:980:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5e88",
      "incomplete_value": false,
      "site": "007f5e88",
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
            "const:8b0:8"
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
      "007f5ee0",
      "DATA",
      [
        "storage",
        "00c7b8b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5ee0",
      "DATA",
      [
        "storage",
        "00c7b980",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5e78 ["INT_ADD", "register:40f0:8", ["const:7f5e78:8", "const:4:8"]]
- 007f5e78 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f5ed0 ["INT_ADD", "register:40f0:8", ["const:7f5ed0:8", "const:4:8"]]
+ 007f5ed0 ["CALL", null, ["callee:00c57f60:8"]]
- 007f5e84 ["COPY", "tmp:0:8", ["const:8b0:8"]]
- 007f5e84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f5e84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f5e84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f5edc ["COPY", "tmp:0:8", ["const:980:8"]]
+ 007f5edc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5edc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5edc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-827e91c73c962b4dc423c63b91a22b44"></a>

### [`007f5e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f5e98.md) → [`007f5ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5ef0.md) FUN_007f5ef0

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
      "definition_site": "007f5efc",
      "incomplete_value": false,
      "site": "007f5efc",
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
            "const:980:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5ea4",
      "incomplete_value": false,
      "site": "007f5ea4",
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
            "const:8b0:8"
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
      "007f5efc",
      "DATA",
      [
        "storage",
        "00c7b8b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5efc",
      "DATA",
      [
        "storage",
        "00c7b980",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5ea0 ["COPY", "tmp:0:8", ["const:8b0:8"]]
- 007f5ea0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f5ea0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f5ea0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f5ef8 ["COPY", "tmp:0:8", ["const:980:8"]]
+ 007f5ef8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f5ef8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f5ef8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-36f1f346d31c4abb1e274ca93fd5f7c5"></a>

### [`007f5eb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f5eb4.md) → [`007f5f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5f0c.md) FUN_007f5f0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f5f54",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f5efc",
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
      "007f5f54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f5f54",
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
- 007f5efc ["INT_ADD", "register:40f0:8", ["const:7f5efc:8", "const:4:8"]]
- 007f5efc ["CALL", null, ["ram:47acf4:8"]]
+ 007f5f54 ["INT_ADD", "register:40f0:8", ["const:7f5f54:8", "const:4:8"]]
+ 007f5f54 ["CALL", null, ["ram:47ad34:8"]]
- 007f5f08 ["INT_ADD", "register:40f0:8", ["const:7f5f08:8", "const:4:8"]]
- 007f5f08 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f5f60 ["INT_ADD", "register:40f0:8", ["const:7f5f60:8", "const:4:8"]]
+ 007f5f60 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-a26e3569c76fce3dad0476d88b0d266f"></a>

### [`007f5f48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f5f48.md) → [`007f5fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5fa0.md) FUN_007f5fa0

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
      "definition_site": "007f5fc4",
      "incomplete_value": false,
      "site": "007f5fc4",
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
            "const:a00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5f6c",
      "incomplete_value": false,
      "site": "007f5f6c",
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
      "007f5fc4",
      "DATA",
      [
        "storage",
        "00c7b930",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5fc4",
      "DATA",
      [
        "storage",
        "00c7ba00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5f5c ["INT_ADD", "register:40f0:8", ["const:7f5f5c:8", "const:4:8"]]
- 007f5f5c ["CALL", null, ["callee:00c57f60:8"]]
+ 007f5fb4 ["INT_ADD", "register:40f0:8", ["const:7f5fb4:8", "const:4:8"]]
+ 007f5fb4 ["CALL", null, ["callee:00c57f60:8"]]
- 007f5f68 ["COPY", "tmp:0:8", ["const:930:8"]]
- 007f5f68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f5f68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f5f68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f5fc0 ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 007f5fc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5fc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5fc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2b9018f3b30fde1d60b49c35e0c9d1de"></a>

### [`007f5f98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f5/007f5f98.md) → [`007f5ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5ff0.md) FUN_007f5ff0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00468bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468bdc.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 91.78% / 新版 91.78%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007f6014",
      "incomplete_value": true,
      "site": "007f6014",
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
      "definition_site": "007f5fbc",
      "incomplete_value": true,
      "site": "007f5fbc",
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
      "007f600c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007f601c",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f6024",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007f600c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007f601c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f6024",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5fb4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:978:8"]]
- 007f5fb4 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 007f600c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a78:8"]]
+ 007f600c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 007f5fc4 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 007f5fc4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 007f5fc4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 007f5fc4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 007f601c ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 007f601c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 007f601c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 007f601c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 007f5fcc ["COPY", "tmp:0:8", ["const:990:8"]]
- 007f5fcc ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 007f5fcc ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 007f5fcc ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 007f6024 ["COPY", "tmp:0:8", ["const:a60:8"]]
+ 007f6024 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 007f6024 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 007f6024 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
~~~


<a id="compare-3fbe891c4ad3cb05bad0f84e53f47aac"></a>

### [`007f60e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f60e8.md) → [`007f6140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6140.md) FUN_007f6140

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
      "definition_site": "007f6154",
      "incomplete_value": false,
      "site": "007f6158",
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
            "const:a80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f60fc",
      "incomplete_value": false,
      "site": "007f6100",
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
            "const:9b0:8"
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
      "007f6158",
      "DATA",
      [
        "storage",
        "00c7b9b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6158",
      "DATA",
      [
        "storage",
        "00c7ba80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f60f4 ["INT_ADD", "register:40f0:8", ["const:7f60f4:8", "const:4:8"]]
- 007f60f4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f614c ["INT_ADD", "register:40f0:8", ["const:7f614c:8", "const:4:8"]]
+ 007f614c ["CALL", null, ["callee:00c57f60:8"]]
- 007f60fc ["COPY", "tmp:0:8", ["const:9b0:8"]]
- 007f60fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f60fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f60fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f6154 ["COPY", "tmp:0:8", ["const:a80:8"]]
+ 007f6154 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6154 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6154 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-edb8e5582b301a9ae542b0860443a95d"></a>

### [`007f610c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f610c.md) → [`007f6164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6164.md) FUN_007f6164

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
      "definition_site": "007f6168",
      "incomplete_value": false,
      "site": "007f616c",
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
            "const:a80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6110",
      "incomplete_value": false,
      "site": "007f6114",
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
            "const:9b0:8"
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
      "007f616c",
      "DATA",
      [
        "storage",
        "00c7b9b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f616c",
      "DATA",
      [
        "storage",
        "00c7ba80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6110 ["COPY", "tmp:0:8", ["const:9b0:8"]]
- 007f6110 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f6110 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f6110 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f6168 ["COPY", "tmp:0:8", ["const:a80:8"]]
+ 007f6168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-29569994868cc4de4ba708a0d736f7ac"></a>

### [`007f6124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6124.md) → [`007f617c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f617c.md) FUN_007f617c

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
      "site": "007f6198",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f6140",
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
      "007f6198",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f6198",
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
- 007f6140 ["INT_ADD", "register:40f0:8", ["const:7f6140:8", "const:4:8"]]
- 007f6140 ["CALL", null, ["ram:47acf4:8"]]
+ 007f6198 ["INT_ADD", "register:40f0:8", ["const:7f6198:8", "const:4:8"]]
+ 007f6198 ["CALL", null, ["ram:47ad34:8"]]
- 007f614c ["INT_ADD", "register:40f0:8", ["const:7f614c:8", "const:4:8"]]
- 007f614c ["CALL", null, ["callee:0047ce14:8"]]
+ 007f61a4 ["INT_ADD", "register:40f0:8", ["const:7f61a4:8", "const:4:8"]]
+ 007f61a4 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-bb738a74d75da4d886ca2f4aead80c2b"></a>

### [`007f6190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6190.md) → [`007f61e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f61e8.md) FUN_007f61e8

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
      "definition_site": "007f620c",
      "incomplete_value": false,
      "site": "007f620c",
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
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f61b4",
      "incomplete_value": false,
      "site": "007f61b4",
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
            "const:a30:8"
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
      "007f620c",
      "DATA",
      [
        "storage",
        "00c7ba30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f620c",
      "DATA",
      [
        "storage",
        "00c7bb00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f61a4 ["INT_ADD", "register:40f0:8", ["const:7f61a4:8", "const:4:8"]]
- 007f61a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f61fc ["INT_ADD", "register:40f0:8", ["const:7f61fc:8", "const:4:8"]]
+ 007f61fc ["CALL", null, ["callee:00c57f60:8"]]
- 007f61b0 ["COPY", "tmp:0:8", ["const:a30:8"]]
- 007f61b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f61b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f61b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f6208 ["COPY", "tmp:0:8", ["const:b00:8"]]
+ 007f6208 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6208 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6208 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5c86eb52e93971d1686c7fae5d33a955"></a>

### [`007f61c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f61c4.md) → [`007f621c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f621c.md) FUN_007f621c

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
      "definition_site": "007f6228",
      "incomplete_value": false,
      "site": "007f6228",
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
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f61d0",
      "incomplete_value": false,
      "site": "007f61d0",
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
            "const:a30:8"
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
      "007f6228",
      "DATA",
      [
        "storage",
        "00c7ba30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6228",
      "DATA",
      [
        "storage",
        "00c7bb00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f61cc ["COPY", "tmp:0:8", ["const:a30:8"]]
- 007f61cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f61cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f61cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f6224 ["COPY", "tmp:0:8", ["const:b00:8"]]
+ 007f6224 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6224 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6224 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-18b18b8d012cd15ee306ba92260b0877"></a>

### [`007f61e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f61e0.md) → [`007f6238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6238.md) FUN_007f6238

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 13件 [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`007f64fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f64fc.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f6554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6554.md)

変更の種類 call, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.28% / 新版 93.28%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f634c",
      "incomplete_value": true,
      "site": "007f6360",
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
                "const:536:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f62f4",
      "incomplete_value": true,
      "site": "007f6308",
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
                "const:4f6:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f6380",
      "incomplete_value": false,
      "site": "007f6380",
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
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6328",
      "incomplete_value": false,
      "site": "007f6328",
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
            "const:aa0:8"
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
      "site": "007f6278",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f6220",
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
      "007f6278",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f6294",
      "READ",
      [
        "storage",
        "00c9b4d0",
        null,
        "pointer"
      ]
    ],
    [
      "007f62ac",
      "READ",
      [
        "storage",
        "00ca418c",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "007f6278",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f6294",
      "READ",
      [
        "storage",
        "00c9b5a0",
        null,
        "pointer"
      ]
    ],
    [
      "007f62ac",
      "READ",
      [
        "storage",
        "00ca425c",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6220 ["INT_ADD", "register:40f0:8", ["const:7f6220:8", "const:4:8"]]
- 007f6220 ["CALL", null, ["ram:47acf4:8"]]
+ 007f6278 ["INT_ADD", "register:40f0:8", ["const:7f6278:8", "const:4:8"]]
+ 007f6278 ["CALL", null, ["ram:47ad34:8"]]
- 007f622c ["INT_ADD", "register:40f0:8", ["const:7f622c:8", "const:4:8"]]
- 007f622c ["CALL", null, ["callee:0047ce14:8"]]
+ 007f6284 ["INT_ADD", "register:40f0:8", ["const:7f6284:8", "const:4:8"]]
+ 007f6284 ["CALL", null, ["callee:0047ce14:8"]]
- 007f623c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:4d0:8"]]
- 007f623c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 007f6294 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:5a0:8"]]
+ 007f6294 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-841accf75de06cb832fbb51b85b759a3"></a>

### [`007f64b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f64b4.md) → [`007f650c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f650c.md) FUN_007f650c

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
      "definition_site": "007f6530",
      "incomplete_value": false,
      "site": "007f6530",
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
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f64d8",
      "incomplete_value": false,
      "site": "007f64d8",
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
            "const:aa0:8"
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
      "007f6530",
      "DATA",
      [
        "storage",
        "00c7baa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6530",
      "DATA",
      [
        "storage",
        "00c7bb70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f64c8 ["INT_ADD", "register:40f0:8", ["const:7f64c8:8", "const:4:8"]]
- 007f64c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f6520 ["INT_ADD", "register:40f0:8", ["const:7f6520:8", "const:4:8"]]
+ 007f6520 ["CALL", null, ["callee:00c57f60:8"]]
- 007f64d4 ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 007f64d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f64d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f64d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f652c ["COPY", "tmp:0:8", ["const:b70:8"]]
+ 007f652c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f652c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f652c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ea7abd18316f750906a22417cdc1ea1e"></a>

### [`007f64e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f64e8.md) → [`007f6540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6540.md) FUN_007f6540

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
      "definition_site": "007f654c",
      "incomplete_value": false,
      "site": "007f654c",
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
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f64f4",
      "incomplete_value": false,
      "site": "007f64f4",
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
            "const:aa0:8"
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
      "007f654c",
      "DATA",
      [
        "storage",
        "00c7baa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f654c",
      "DATA",
      [
        "storage",
        "00c7bb70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f64f0 ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 007f64f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f64f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f64f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f6548 ["COPY", "tmp:0:8", ["const:b70:8"]]
+ 007f6548 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6548 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6548 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d1270191590f58ebce7bb124d5c9cf54"></a>

### [`007f6504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6504.md) → [`007f655c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f655c.md) FUN_007f655c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 13件 [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`007f6798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6798.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f67f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f67f0.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f6618",
      "incomplete_value": false,
      "site": "007f6618",
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
            "const:be0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f65c0",
      "incomplete_value": false,
      "site": "007f65c0",
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
            "const:b10:8"
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
      "site": "007f6598",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f6540",
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
      "007f6598",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f65e8",
      "READ",
      [
        "storage",
        "002ba74b",
        null,
        "string"
      ]
    ],
    [
      "007f6618",
      "DATA",
      [
        "storage",
        "00c7bb10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6598",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f65e8",
      "READ",
      [
        "storage",
        "002ba6f7",
        null,
        "string"
      ]
    ],
    [
      "007f6618",
      "DATA",
      [
        "storage",
        "00c7bbe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6540 ["INT_ADD", "register:40f0:8", ["const:7f6540:8", "const:4:8"]]
- 007f6540 ["CALL", null, ["ram:47acf4:8"]]
+ 007f6598 ["INT_ADD", "register:40f0:8", ["const:7f6598:8", "const:4:8"]]
+ 007f6598 ["CALL", null, ["ram:47ad34:8"]]
- 007f6618 ["INT_ADD", "register:40f0:8", ["const:7f6618:8", "const:4:8"]]
- 007f6618 ["CALL", null, ["callee:008b9558:8"]]
+ 007f6670 ["INT_ADD", "register:40f0:8", ["const:7f6670:8", "const:4:8"]]
+ 007f6670 ["CALL", null, ["callee:008b9558:8"]]
- 007f654c ["INT_ADD", "register:40f0:8", ["const:7f654c:8", "const:4:8"]]
- 007f654c ["CALL", null, ["callee:0047ce14:8"]]
+ 007f65a4 ["INT_ADD", "register:40f0:8", ["const:7f65a4:8", "const:4:8"]]
+ 007f65a4 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-9f9eceffcde6aadd58d395419dbb14f6"></a>

### [`007f6784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6784.md) → [`007f67dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f67dc.md) FUN_007f67dc

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
      "definition_site": "007f67e8",
      "incomplete_value": false,
      "site": "007f67e8",
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
            "const:be0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6790",
      "incomplete_value": false,
      "site": "007f6790",
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
            "const:b10:8"
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
      "007f67e8",
      "DATA",
      [
        "storage",
        "00c7bb10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f67e8",
      "DATA",
      [
        "storage",
        "00c7bbe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f678c ["COPY", "tmp:0:8", ["const:b10:8"]]
- 007f678c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f678c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f678c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f67e4 ["COPY", "tmp:0:8", ["const:be0:8"]]
+ 007f67e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f67e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f67e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-56b5329cd6e49a7024355c619e0bd94f"></a>

### [`007f67a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f67a0.md) → [`007f67f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f67f8.md) FUN_007f67f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f6820",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f67c8",
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
      "007f6820",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f6820",
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
- 007f67c8 ["INT_ADD", "register:40f0:8", ["const:7f67c8:8", "const:4:8"]]
- 007f67c8 ["CALL", null, ["ram:47acf4:8"]]
+ 007f6820 ["INT_ADD", "register:40f0:8", ["const:7f6820:8", "const:4:8"]]
+ 007f6820 ["CALL", null, ["ram:47ad34:8"]]
- 007f67d4 ["INT_ADD", "register:40f0:8", ["const:7f67d4:8", "const:4:8"]]
- 007f67d4 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f682c ["INT_ADD", "register:40f0:8", ["const:7f682c:8", "const:4:8"]]
+ 007f682c ["CALL", null, ["callee:0047ce14:8"]]
- 007f67ec ["INT_ADD", "register:40f0:8", ["const:7f67ec:8", "const:4:8"]]
- 007f67ec ["CALL", null, ["callee:00a1a6f8:8"]]
+ 007f6844 ["INT_ADD", "register:40f0:8", ["const:7f6844:8", "const:4:8"]]
+ 007f6844 ["CALL", null, ["callee:00a1a6f8:8"]]
~~~


<a id="compare-0e433c244be6bdab0e418c81972e2e63"></a>

### [`007f6830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6830.md) → [`007f6888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6888.md) FUN_007f6888

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
      "definition_site": "007f68ac",
      "incomplete_value": false,
      "site": "007f68ac",
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
    "old": {
      "definition_site": "007f6854",
      "incomplete_value": false,
      "site": "007f6854",
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
            "const:bb0:8"
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
      "007f68ac",
      "DATA",
      [
        "storage",
        "00c7bbb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f68ac",
      "DATA",
      [
        "storage",
        "00c7bc80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6844 ["INT_ADD", "register:40f0:8", ["const:7f6844:8", "const:4:8"]]
- 007f6844 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f689c ["INT_ADD", "register:40f0:8", ["const:7f689c:8", "const:4:8"]]
+ 007f689c ["CALL", null, ["callee:00c57f60:8"]]
- 007f6850 ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 007f6850 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f6850 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f6850 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f68a8 ["COPY", "tmp:0:8", ["const:c80:8"]]
+ 007f68a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f68a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f68a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b48bc28c21a11d205012c3a9eafeee71"></a>

### [`007f6864`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6864.md) → [`007f68bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f68bc.md) FUN_007f68bc

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
      "definition_site": "007f68c8",
      "incomplete_value": false,
      "site": "007f68c8",
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
    "old": {
      "definition_site": "007f6870",
      "incomplete_value": false,
      "site": "007f6870",
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
            "const:bb0:8"
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
      "007f68c8",
      "DATA",
      [
        "storage",
        "00c7bbb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f68c8",
      "DATA",
      [
        "storage",
        "00c7bc80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f686c ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 007f686c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f686c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f686c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f68c4 ["COPY", "tmp:0:8", ["const:c80:8"]]
+ 007f68c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f68c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f68c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6b36dab01869caca76cd1f3809e474ad"></a>

### [`007f6880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6880.md) → [`007f68d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f68d8.md) FUN_007f68d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 13件 [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`007f6b14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6b14.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f6b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6b6c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f6994",
      "incomplete_value": false,
      "site": "007f6994",
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
            "const:cf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f693c",
      "incomplete_value": false,
      "site": "007f693c",
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
            "const:c20:8"
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
      "site": "007f6914",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f68bc",
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
      "007f6914",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f6964",
      "READ",
      [
        "storage",
        "002ba74b",
        null,
        "string"
      ]
    ],
    [
      "007f6994",
      "DATA",
      [
        "storage",
        "00c7bc20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6914",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f6964",
      "READ",
      [
        "storage",
        "002ba6f7",
        null,
        "string"
      ]
    ],
    [
      "007f6994",
      "DATA",
      [
        "storage",
        "00c7bcf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f68bc ["INT_ADD", "register:40f0:8", ["const:7f68bc:8", "const:4:8"]]
- 007f68bc ["CALL", null, ["ram:47acf4:8"]]
+ 007f6914 ["INT_ADD", "register:40f0:8", ["const:7f6914:8", "const:4:8"]]
+ 007f6914 ["CALL", null, ["ram:47ad34:8"]]
- 007f6994 ["INT_ADD", "register:40f0:8", ["const:7f6994:8", "const:4:8"]]
- 007f6994 ["CALL", null, ["callee:008b9558:8"]]
+ 007f69ec ["INT_ADD", "register:40f0:8", ["const:7f69ec:8", "const:4:8"]]
+ 007f69ec ["CALL", null, ["callee:008b9558:8"]]
- 007f68c8 ["INT_ADD", "register:40f0:8", ["const:7f68c8:8", "const:4:8"]]
- 007f68c8 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f6920 ["INT_ADD", "register:40f0:8", ["const:7f6920:8", "const:4:8"]]
+ 007f6920 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-c9e0289cb7870a19ea846477bf37fe2b"></a>

### [`007f6acc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6acc.md) → [`007f6b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6b24.md) FUN_007f6b24

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
      "definition_site": "007f6b48",
      "incomplete_value": false,
      "site": "007f6b48",
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
            "const:cf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6af0",
      "incomplete_value": false,
      "site": "007f6af0",
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
            "const:c20:8"
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
      "007f6b48",
      "DATA",
      [
        "storage",
        "00c7bc20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6b48",
      "DATA",
      [
        "storage",
        "00c7bcf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6ae0 ["INT_ADD", "register:40f0:8", ["const:7f6ae0:8", "const:4:8"]]
- 007f6ae0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f6b38 ["INT_ADD", "register:40f0:8", ["const:7f6b38:8", "const:4:8"]]
+ 007f6b38 ["CALL", null, ["callee:00c57f60:8"]]
- 007f6aec ["COPY", "tmp:0:8", ["const:c20:8"]]
- 007f6aec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f6aec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f6aec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f6b44 ["COPY", "tmp:0:8", ["const:cf0:8"]]
+ 007f6b44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6b44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6b44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ef41bfd9748d870af228847ddbf2ae75"></a>

### [`007f6b00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6b00.md) → [`007f6b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6b58.md) FUN_007f6b58

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
      "definition_site": "007f6b64",
      "incomplete_value": false,
      "site": "007f6b64",
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
            "const:cf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6b0c",
      "incomplete_value": false,
      "site": "007f6b0c",
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
      "007f6b64",
      "DATA",
      [
        "storage",
        "00c7bc20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6b64",
      "DATA",
      [
        "storage",
        "00c7bcf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6b08 ["COPY", "tmp:0:8", ["const:c20:8"]]
- 007f6b08 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f6b08 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f6b08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f6b60 ["COPY", "tmp:0:8", ["const:cf0:8"]]
+ 007f6b60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6b60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6b60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ca84849580b5af2e323d7bb8af787624"></a>

### [`007f6b1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6b1c.md) → [`007f6b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6b74.md) FUN_007f6b74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f6b9c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f6b44",
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
      "007f6b9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f6b9c",
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
- 007f6b44 ["INT_ADD", "register:40f0:8", ["const:7f6b44:8", "const:4:8"]]
- 007f6b44 ["CALL", null, ["ram:47acf4:8"]]
+ 007f6b9c ["INT_ADD", "register:40f0:8", ["const:7f6b9c:8", "const:4:8"]]
+ 007f6b9c ["CALL", null, ["ram:47ad34:8"]]
- 007f6b50 ["INT_ADD", "register:40f0:8", ["const:7f6b50:8", "const:4:8"]]
- 007f6b50 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f6ba8 ["INT_ADD", "register:40f0:8", ["const:7f6ba8:8", "const:4:8"]]
+ 007f6ba8 ["CALL", null, ["callee:0047ce14:8"]]
- 007f6b68 ["INT_ADD", "register:40f0:8", ["const:7f6b68:8", "const:4:8"]]
- 007f6b68 ["CALL", null, ["callee:00a1a6f8:8"]]
+ 007f6bc0 ["INT_ADD", "register:40f0:8", ["const:7f6bc0:8", "const:4:8"]]
+ 007f6bc0 ["CALL", null, ["callee:00a1a6f8:8"]]
~~~


<a id="compare-25629548cd7e4ce26beb71b715a139e4"></a>

### [`007f6bac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6bac.md) → [`007f6c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6c04.md) FUN_007f6c04

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
      "definition_site": "007f6c28",
      "incomplete_value": false,
      "site": "007f6c28",
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
            "const:d80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6bd0",
      "incomplete_value": false,
      "site": "007f6bd0",
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
            "const:cb0:8"
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
      "007f6c28",
      "DATA",
      [
        "storage",
        "00c7bcb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6c28",
      "DATA",
      [
        "storage",
        "00c7bd80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6bc0 ["INT_ADD", "register:40f0:8", ["const:7f6bc0:8", "const:4:8"]]
- 007f6bc0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f6c18 ["INT_ADD", "register:40f0:8", ["const:7f6c18:8", "const:4:8"]]
+ 007f6c18 ["CALL", null, ["callee:00c57f60:8"]]
- 007f6bcc ["COPY", "tmp:0:8", ["const:cb0:8"]]
- 007f6bcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f6bcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f6bcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f6c24 ["COPY", "tmp:0:8", ["const:d80:8"]]
+ 007f6c24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6c24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6c24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a5fea29fce08c62454bc356fcac30e7a"></a>

### [`007f6be0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6be0.md) → [`007f6c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6c38.md) FUN_007f6c38

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
      "definition_site": "007f6c44",
      "incomplete_value": false,
      "site": "007f6c44",
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
            "const:d80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6bec",
      "incomplete_value": false,
      "site": "007f6bec",
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
            "const:cb0:8"
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
      "007f6c44",
      "DATA",
      [
        "storage",
        "00c7bcb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6c44",
      "DATA",
      [
        "storage",
        "00c7bd80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6be8 ["COPY", "tmp:0:8", ["const:cb0:8"]]
- 007f6be8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f6be8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f6be8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f6c40 ["COPY", "tmp:0:8", ["const:d80:8"]]
+ 007f6c40 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6c40 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6c40 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-dd4ff60d7b91335b28909a3d37897834"></a>

### [`007f6bfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6bfc.md) → [`007f6c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6c54.md) FUN_007f6c54

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`007f6f6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6f6c.md) [`007f6f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6f70.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f6fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6fc4.md) [`007f6fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6fc8.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.19% / 新版 88.19%

優先判定に残った影響 `call_target` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f6ce4",
      "incomplete_value": true,
      "site": "007f6cf4",
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
                "const:6d5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6c8c",
      "incomplete_value": true,
      "site": "007f6c9c",
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
                "const:722:8"
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
      "definition_site": "007f6ce8",
      "incomplete_value": true,
      "site": "007f6cf8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "007f6c90",
      "incomplete_value": true,
      "site": "007f6ca0",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f6cec",
      "incomplete_value": true,
      "site": "007f6cfc",
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
      "definition_site": "007f6c94",
      "incomplete_value": true,
      "site": "007f6ca4",
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
      "007f6c8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f6ce4",
      "READ",
      [
        "storage",
        "002a4722",
        null,
        "string"
      ]
    ],
    [
      "007f6ce8",
      "READ",
      [
        "storage",
        "002a4732",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007f6c8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f6ce4",
      "READ",
      [
        "storage",
        "002a46d5",
        null,
        "string"
      ]
    ],
    [
      "007f6ce8",
      "READ",
      [
        "storage",
        "002a46e5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6c34 ["INT_ADD", "register:40f0:8", ["const:7f6c34:8", "const:4:8"]]
- 007f6c34 ["CALL", null, ["ram:47acf4:8"]]
+ 007f6c8c ["INT_ADD", "register:40f0:8", ["const:7f6c8c:8", "const:4:8"]]
+ 007f6c8c ["CALL", null, ["ram:47ad34:8"]]
- 007f6cbc ["COPY", "tmp:0:8", ["const:d20:8"]]
- 007f6cbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f6cbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f6cbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f6d14 ["COPY", "tmp:0:8", ["const:df0:8"]]
+ 007f6d14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6d14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6d14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007f6d4c ["COPY", "register:0:8", ["register:4040:8"]]
- 007f6d4c ["INT_ADD", "register:40f0:8", ["const:7f6d4c:8", "const:4:8"]]
- 007f6d4c ["CALLIND", null, ["register:0:8"]]
+ 007f6da4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007f6da4 ["INT_ADD", "register:40f0:8", ["const:7f6da4:8", "const:4:8"]]
+ 007f6da4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a321be7fd297946bb53e3b5c42dd74aa"></a>

### [`007f6f24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6f24.md) → [`007f6f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6f7c.md) FUN_007f6f7c

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
      "definition_site": "007f6fa0",
      "incomplete_value": false,
      "site": "007f6fa0",
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
            "const:df0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6f48",
      "incomplete_value": false,
      "site": "007f6f48",
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
            "const:d20:8"
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
      "007f6fa0",
      "DATA",
      [
        "storage",
        "00c7bd20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6fa0",
      "DATA",
      [
        "storage",
        "00c7bdf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6f38 ["INT_ADD", "register:40f0:8", ["const:7f6f38:8", "const:4:8"]]
- 007f6f38 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f6f90 ["INT_ADD", "register:40f0:8", ["const:7f6f90:8", "const:4:8"]]
+ 007f6f90 ["CALL", null, ["callee:00c57f60:8"]]
- 007f6f44 ["COPY", "tmp:0:8", ["const:d20:8"]]
- 007f6f44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f6f44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f6f44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f6f9c ["COPY", "tmp:0:8", ["const:df0:8"]]
+ 007f6f9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6f9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6f9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5753c7b8e9fd15ab3cbdadfd1462fba9"></a>

### [`007f6f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6f58.md) → [`007f6fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6fb0.md) FUN_007f6fb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f6fbc",
      "incomplete_value": true,
      "site": "007f6fbc",
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
            "const:df0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6f64",
      "incomplete_value": true,
      "site": "007f6f64",
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
      "007f6fbc",
      "DATA",
      [
        "storage",
        "00c7bd20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6fbc",
      "DATA",
      [
        "storage",
        "00c7bdf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6f60 ["COPY", "tmp:0:8", ["const:d20:8"]]
- 007f6f60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f6f60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f6f60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f6fb8 ["COPY", "tmp:0:8", ["const:df0:8"]]
+ 007f6fb8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6fb8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6fb8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-784a57bb2df33f7640a52dcade159502"></a>

### [`007f6fa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6fa4.md) → [`007f6ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6ffc.md) FUN_007f6ffc

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
      "definition_site": "007f7020",
      "incomplete_value": false,
      "site": "007f7020",
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
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6fc8",
      "incomplete_value": false,
      "site": "007f6fc8",
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
            "const:da0:8"
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
      "007f7020",
      "DATA",
      [
        "storage",
        "00c7bda0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7020",
      "DATA",
      [
        "storage",
        "00c7be70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6fb8 ["INT_ADD", "register:40f0:8", ["const:7f6fb8:8", "const:4:8"]]
- 007f6fb8 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f7010 ["INT_ADD", "register:40f0:8", ["const:7f7010:8", "const:4:8"]]
+ 007f7010 ["CALL", null, ["callee:00c57f60:8"]]
- 007f6fc4 ["COPY", "tmp:0:8", ["const:da0:8"]]
- 007f6fc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f6fc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f6fc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f701c ["COPY", "tmp:0:8", ["const:e70:8"]]
+ 007f701c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f701c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f701c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4b2a6d9025f365447392adbdb279a160"></a>

### [`007f6fd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6fd8.md) → [`007f7030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7030.md) FUN_007f7030

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
      "definition_site": "007f703c",
      "incomplete_value": false,
      "site": "007f703c",
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
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6fe4",
      "incomplete_value": false,
      "site": "007f6fe4",
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
      "007f703c",
      "DATA",
      [
        "storage",
        "00c7bda0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f703c",
      "DATA",
      [
        "storage",
        "00c7be70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6fe0 ["COPY", "tmp:0:8", ["const:da0:8"]]
- 007f6fe0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f6fe0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f6fe0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f7038 ["COPY", "tmp:0:8", ["const:e70:8"]]
+ 007f7038 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f7038 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f7038 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a7de76c93506326f585cd66909c5d900"></a>

### [`007f6ff4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6ff4.md) → [`007f704c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f704c.md) FUN_007f704c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085b2a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2a4.md) [`0085b2ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2ac.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md) [`0085b304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b304.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.70% / 新版 98.70%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f7148",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f70f0",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "007f7148",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f7148",
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
- 007f70f0 ["INT_ADD", "register:40f0:8", ["const:7f70f0:8", "const:4:8"]]
- 007f70f0 ["CALL", null, ["ram:47acf4:8"]]
+ 007f7148 ["INT_ADD", "register:40f0:8", ["const:7f7148:8", "const:4:8"]]
+ 007f7148 ["CALL", null, ["ram:47ad34:8"]]
- 007f7014 ["INT_ADD", "register:40f0:8", ["const:7f7014:8", "const:4:8"]]
- 007f7014 ["CALL", null, ["callee:008b92e8:8"]]
+ 007f706c ["INT_ADD", "register:40f0:8", ["const:7f706c:8", "const:4:8"]]
+ 007f706c ["CALL", null, ["callee:008b92e8:8"]]
- 007f7028 ["INT_ADD", "register:40f0:8", ["const:7f7028:8", "const:4:8"]]
- 007f7028 ["CALL", null, ["callee:008b7a20:8"]]
+ 007f7080 ["INT_ADD", "register:40f0:8", ["const:7f7080:8", "const:4:8"]]
+ 007f7080 ["CALL", null, ["callee:008b7a20:8"]]
~~~


<a id="compare-021895b09f37fe07759e9a2e4c8c992f"></a>

### [`007f7188`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7188.md) → [`007f71e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f71e0.md) FUN_007f71e0

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
      "definition_site": "007f71ec",
      "incomplete_value": false,
      "site": "007f71ec",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7194",
      "incomplete_value": false,
      "site": "007f7194",
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
      "007f71ec",
      "DATA",
      [
        "storage",
        "00c7be20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f71ec",
      "DATA",
      [
        "storage",
        "00c7bef0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7190 ["COPY", "tmp:0:8", ["const:e20:8"]]
- 007f7190 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f7190 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f7190 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f71e8 ["COPY", "tmp:0:8", ["const:ef0:8"]]
+ 007f71e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f71e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f71e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0db57045e41adddf106028b005536cc4"></a>

### [`007f71a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f71a4.md) → [`007f71fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f71fc.md) FUN_007f71fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 9件 [`0046b880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046b880.md) [`0046d974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d974.md) [`008b6d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6d9c.md) [`008b6e58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6e58.md) [`008b6e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6e60.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0046b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046b8c0.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md) [`008b6df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6df4.md) [`008b6eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6eb0.md) [`008b6eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6eb8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.71% / 新版 95.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f724c",
      "incomplete_value": true,
      "site": "007f725c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f71f4",
      "incomplete_value": true,
      "site": "007f7204",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:978:8"
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
      "definition_site": "007f7254",
      "incomplete_value": false,
      "site": "007f725c",
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
    "old": {
      "definition_site": "007f71fc",
      "incomplete_value": false,
      "site": "007f7204",
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
            "const:990:8"
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
      "007f7248",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f724c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007f7254",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007f7248",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f724c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007f7254",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7204 ["INT_ADD", "register:40f0:8", ["const:7f7204:8", "const:4:8"]]
- 007f7204 ["CALL", null, ["callee:00c586e0:8"]]
+ 007f725c ["INT_ADD", "register:40f0:8", ["const:7f725c:8", "const:4:8"]]
+ 007f725c ["CALL", null, ["callee:00c586e0:8"]]
- 007f71d4 ["INT_ADD", "register:40f0:8", ["const:7f71d4:8", "const:4:8"]]
- 007f71d4 ["CALL", null, ["callee:008b7a20:8"]]
+ 007f722c ["INT_ADD", "register:40f0:8", ["const:7f722c:8", "const:4:8"]]
+ 007f722c ["CALL", null, ["callee:008b7a20:8"]]
- 007f71e4 ["INT_ADD", "register:40f0:8", ["const:7f71e4:8", "const:4:8"]]
- 007f71e4 ["CALL", null, ["callee:008b6df4:8"]]
+ 007f723c ["INT_ADD", "register:40f0:8", ["const:7f723c:8", "const:4:8"]]
+ 007f723c ["CALL", null, ["callee:008b6df4:8"]]
~~~


<a id="compare-e2a0b726d2f57551115fae70c617cb3e"></a>

### [`007f72e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f72e8.md) → [`007f7340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7340.md) FUN_007f7340

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f7364",
      "incomplete_value": true,
      "site": "007f7364",
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
            "const:f80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f730c",
      "incomplete_value": true,
      "site": "007f730c",
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
            "const:eb0:8"
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
      "007f7364",
      "DATA",
      [
        "storage",
        "00c7beb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7364",
      "DATA",
      [
        "storage",
        "00c7bf80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f72fc ["INT_ADD", "register:40f0:8", ["const:7f72fc:8", "const:4:8"]]
- 007f72fc ["CALL", null, ["callee:00c57f60:8"]]
+ 007f7354 ["INT_ADD", "register:40f0:8", ["const:7f7354:8", "const:4:8"]]
+ 007f7354 ["CALL", null, ["callee:00c57f60:8"]]
- 007f7308 ["COPY", "tmp:0:8", ["const:eb0:8"]]
- 007f7308 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7308 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7308 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f7360 ["COPY", "tmp:0:8", ["const:f80:8"]]
+ 007f7360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-95f777474b4132459c10e47012f591c5"></a>

### [`007f731c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f731c.md) → [`007f7374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7374.md) FUN_007f7374

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
      "definition_site": "007f7380",
      "incomplete_value": false,
      "site": "007f7380",
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
            "const:f80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7328",
      "incomplete_value": false,
      "site": "007f7328",
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
      "007f7380",
      "DATA",
      [
        "storage",
        "00c7beb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7380",
      "DATA",
      [
        "storage",
        "00c7bf80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7324 ["COPY", "tmp:0:8", ["const:eb0:8"]]
- 007f7324 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f7324 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f7324 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f737c ["COPY", "tmp:0:8", ["const:f80:8"]]
+ 007f737c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f737c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f737c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


